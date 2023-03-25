import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getUser, getUserToken } from "../utils/authToken";
import '../App.css';
import DeleteImage from "./DeletePost";



export default function EditImage() {

    const user = getUser()
    const token = getUserToken()
    const navigate = useNavigate()
    const { id } = useParams()

    const BASE_URL = 'https://film-buddy.herokuapp.com'
    const POST_URL = `${BASE_URL}/post/${id}`;

    const [editAppear, setEditAppear] = useState(false)
    const [btnAppear, setBtnAppear] = useState(true)
    const [loaded, setLoad] = useState(false)
    const [post, setPost] = useState()
    const [newForm, setNewForm] = useState({
        image: "",
        genre: "",
        title: "",
        summary: "",
        owner: user
    })
    const getPost = async (e) => {
        try {
            const response = await fetch(POST_URL)
            const thePost = await response.json()
            setPost(thePost)
            setLoad(true)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPost()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const currentPost = { ...newForm }
        if (currentPost.genre == "Pick One" || "") {
            alert("Please pick a genre");
        } else {
            try {
                const requestOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentPost)
                }
                const response = await fetch(POST_URL, requestOptions)

                const updatedPost = await response.json()
                navigate(`/`)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleChange = (e) => {
        const userInput = { ...newForm }
        userInput[e.target.name] = e.target.value
        setNewForm(userInput)
    };
    const handleGenre = (e) => {
        const input = { ...newForm }
        input[e.target.name] = e.target.value
        setNewForm(input)
    }
    const appear = () => {
        setBtnAppear((current) => !current)
        setEditAppear((current) => !current)
    }


    if (loaded == true && btnAppear == true && post.owner == user) {
        return (
            <div>
                <button onClick={appear} className="editBtn">EDIT POST</button>
            </div>
        )
    }


    if (editAppear == true && loaded == true && post.owner == user) {
        return (
            <div>
                {token ? (
                    <section className="register">
                        <h2>Edit Post</h2>
                        <button onClick={appear} className='appearBtn'>Cancel Edit</button>
                        <br/>
                        <form onSubmit={handleSubmit}  >
                            <div className='imagePost'>
                                <label htmlFor='image' className='imageLabel'>
                                    Image
                                    <input
                                        type="pic"
                                        value={newForm.image}
                                        name="image"
                                        placeholder="(image URL)"
                                        onChange={handleChange}
                                        className='imageInput'
                                    />
                                </label>
                            </div>
                            <div className='titlePost'>
                                <label htmlFor='title' className='titleLabel'>
                                    Title
                                    <input
                                        type='title'
                                        value={newForm.title}
                                        name='title'
                                        placeholder={post.title}
                                        onChange={handleChange}
                                        className='titleInput'
                                    />
                                </label>
                            </div>
                            <div className='summaryPost'>
                                <label htmlFor='summary' className='summaryLabel'>
                                    Summary
                                    <input
                                        type='summary'
                                        value={newForm.summary}
                                        name='summary'
                                        placeholder=''
                                        onChange={handleChange}
                                        className='summaryInput'
                                    />
                                </label>
                            </div>
                            <div className='genrePost'>
                                <label>
                                    Genre:
                                    <select name='genre' onChange={handleGenre}>
                                        <option name='option' value='Pick One'>Pick One:
                                        </option>
                                        <option name='genre' value='Action'>Action</option>
                                        <option name='genre' value='Comedy'>Comedy</option>
                                        <option name='genre' value='Crime'>Crime
                                        </option>
                                        <option name='genre' value='Fantasy'>Fantasy</option>
                                        <option name='genre' value='Horror'>Horror</option>
                                        <option name='genre' value='Mystery'>Mystery</option>
                                        <option name='genre' value='Sci-Fi'>Sci-Fi</option>
                                        <option name='genre' value='Thriller'>Thriller</option>
                                    </select>
                                </label>
                            </div>
                            <br />
                            <div className="center">
                            <div className='submitButton'>
                                <input type="Submit" value="Confirm Edit" onClick={handleSubmit}
                                    className='editPost'
                                />
                            </div>
                            </div>
                        </form>
                    </section>
                ) : null}

                <div className='post' style={{ border: '3px solid black' }}>
                    <div className='imageWrap'>
                        <img src={newForm.image}
                            className='image' alt={newForm.image} />
                    </div>
                    <div className='titleWrap'>
                        <h5 className='title'>{newForm.title}</h5>
                    </div>
                    <div className='genreWrap'>
                        <p className='genre'>{newForm.genre}</p>
                    </div>
                    <div className='summaryWrap'>
                        <p className='summary'>{newForm.summary}</p>
                    </div>
                </div>
                <DeleteImage />
            </div>
        )
    }

}