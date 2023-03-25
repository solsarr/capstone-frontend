
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { getUserToken, getUser } from '../utils/authToken';


export default function Profile() {

    const token = getUserToken()
    const user = getUser()
    const [post, setPost] = useState()

    const BASE_URL = 'https://film-buddy.herokuapp.com:4000'
    const POST_URL = `${BASE_URL}/post`;
    const getPost = async () => {
        try {
            const response = await fetch(POST_URL)
            const allPosts = await response.json()
            setPost(allPosts)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    if (token){
    return (
        <div>
            <div className='postWrapper'>
                <h2 style={{ color: 'whitesmoke' }}>Your Posts:</h2>
                {post?.slice(0).reverse().map((post, idx) => {
                    if (post.owner == user) {
                        return (
                            <Link key={post._id} to={`/post/${post._id}`} style={{ textDecoration: "none", color: "black" }}>
                                <div className='post' style={{ border: '3px solid black' }}>
                                    <div className='imageWrap'>
                                        <img src={post.image}
                                            className='image' alt={post.image} />
                                    </div>
                                    <div className='titleWrap'>
                                        <h5 className='title'>{post.title}</h5>
                                    </div>
                                    <div className='genreWrap'>
                                        <p className='genre'>{post.genre}</p>
                                    </div>
                                    <div className='summaryWrap'>
                                        <p className='summary'>{post.summary}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }


                })}



            </div>
        </div>


    )
            }

}