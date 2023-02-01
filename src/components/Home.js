import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css';

export default function Home() {

    const [post, setPost] = useState()

    const URL = `http://localhost:4000/post`
    const getPost = async () => {
        try {
            const response = await fetch(URL)
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



return(

    <div className='postWrapper'>

        {post?.map((post, idx)=> {
            return (
                <div className='post' style={{border:'1px solid black'}}>
                    <div className='imageWrap'>
                    <img src={post.image}
                    className='image' />
                    </div>
                    <div className='titleWrap'>
                    <h6 className='title'>{post.title}</h6>
                    </div>
                    <div className='genreWrap'>
                    <p className='genre'>{post.genre}</p>
                    </div>
                    <div className='summaryWrap'>
                    <p className='summary'>{post.summary}</p>
                    </div>

                </div>
            )
        })}



    </div>



)




}