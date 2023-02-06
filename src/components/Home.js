import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import '../App.css';
import { getUserToken } from '../utils/authToken';

const Home = (props) => {
    const token = getUserToken()
    // const isOwner = post?.owner?._id == user._id;
    // console.log(currentUser.user)
// console.log(currentUser.token, 'token')
    const [authed, setAuth] = useState(false);
    const [post, setPost] = useState()
 
    const BASE_URL = 'http://localhost:4000'
    const POST_URL = `${BASE_URL}/post`;
    const REFRESH_URL = `${BASE_URL}/users/refresh`;
    const getPost = async () => {
        try {
            const response = await fetch(POST_URL)
            const allPosts = await response.json()
            console.log(allPosts)
            setPost(allPosts)
        } catch (err) {
            console.log(err)
        }
    }

    // const refresh = async () => {
    //     try {
    //         await fetch(REFRESH_URL)
    //         setAuth(true)
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

useEffect(() => {
    // refresh()
    getPost()
}, [])
console.log(token, 'user token on home')


    return( 
    <div>
        
        <div className='postWrapper'>
            {post?.slice(0).reverse().map((post, idx)=> {
                return (
                    <Link key={post._id} to={`/post/${post._id}`} style={{textDecoration: "none", color: "black" }}>
                    <div className='post' style={{border:'3px solid black'}}>
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
                        <p className='summary'>{post.summary} </p>
                        --recommended by:{post.owner}
                        </div>
                    </div>
                     </Link>
                )
            })} 
    
    
    
        </div>
        
        </div>
    
    
    )
} 




export default Home