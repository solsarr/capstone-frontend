import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import '../App.css';

const Home = (props) => {

    const [post, setPost] = useState()

    const BASE_URL = 'https://film-buddy.herokuapp.com'
    const POST_URL = `${BASE_URL}/post`;
 
    const getPost = async () => {
        try {
            console.log('fetching post')
            const response = await fetch(POST_URL)
            console.log('response -->', response);
            const allPosts = await response.json()
            console.log('all posts -->', allPosts);
            setPost(allPosts)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>

            <div className='postWrapper'>
                {post?.slice(0).reverse().map((post, idx) => {
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