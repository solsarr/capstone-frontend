
    import { useState, useEffect } from 'react'
    import { Link } from 'react-router-dom'
    import '../App.css';
    import { getUserToken, getUser } from '../utils/authToken';


export default function Profile(){
   
        const token = getUserToken()
        const user = getUser()
        // console.log(currentUser.user)
        // console.log(currentUser.token, 'token')
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
        
        useEffect(() => {
            getPost()
        }, [])
        console.log(user)
        // console.log(post[2].owner)
    console.log(token, 'user token on home')
    
    
        return( 
        <div>
            <div className='postWrapper'>
                <h2 style={{color: 'whitesmoke'}}>Your Posts:</h2>
                {post?.slice(0).reverse().map((post, idx)=> {
                    if (post.owner == user){ 
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
                                <p className='summary'>{post.summary}</p>
                                </div>
                            </div>
                            </Link>
                        )}
                        

                })} 
        
        
        
            </div>
            </div>
        
        
        )

    
}