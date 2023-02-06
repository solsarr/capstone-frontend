import { useState } from 'react'
import '../App.css'
import { getUserToken, getUser } from '../utils/authToken';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const token = getUserToken()
  const user = getUser()
  const navigate = useNavigate()

  const [post, setPost] = useState()
  const [newForm, setNewForm] = useState({
    image: "",
    genre: "",
    title: "",
    summary: "",
    owner: user
  })

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
  const URL = `http://localhost:4000/post`

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentPost = { ...newForm }
    if (currentPost.genre === "Pick One" || '' || null || "") {
      alert("Please pick a genre")
    } else {
      try {
        const requestOptions = {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(currentPost)
        }
        const response = await fetch(URL, requestOptions)
        const createPost = await response.json()
        setPost([post, createPost])
        setNewForm({
          image: "",
          genre: "",
          title: "",
          summary: "",
        })
        navigate('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
  return (
    <div className='center'>
      {token ? (
        <section className="register" style={{ border: '3px solid black' }}>
          <h2>Create Post</h2>
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
            <div className='titlePost'>
              <label htmlFor='title' className='titleLabel'>
                Title
                <input
                  type='title'
                  value={newForm.title}
                  name='title'
                  placeholder='title'
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
                  placeholder='summary'
                  onChange={handleChange}
                  className='summaryInput'
                />
              </label>
            </div>
            <br />
            <div className='submitButton'>
              <input type="Submit" value="Create Post" onClick={handleSubmit}
                className='createPost'
              />
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


    </div>

  )


}