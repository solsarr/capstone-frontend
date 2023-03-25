import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Crime() {

    const [post, setPost] = useState()

    const URL = `https://film-buddy.herokuapp.com:4000/post`
    const getPost = async () => {
        try {
            const response = await fetch(URL)
            const allPosts = await response.json()
            setPost(allPosts)
        } catch (err) {
            console.log(err)
        }
    }
 
useEffect(() => { 
    getPost()
},[]) 

    return (
  
<div className='postWrapper'>
 
{post?.filter(posts => posts.genre === "Crime").slice(0).reverse().map(filteredPost => (
     <Link key={post._id} to={`/post/${post._id}`} style={{textDecoration: "none", color: "black" }}>
    <div className='post' style={{border:'3px solid black'}}>
    <div className='imageWrap'>
    <img src={filteredPost.image}
    className='image' alt={filteredPost.image} />
    </div>
    <div className='titleWrap'>
    <h5 className='title'>{filteredPost.title}</h5>
    </div>
    <div className='genreWrap'>
    <p className='genre'>{filteredPost.genre}</p>
    </div>
    <div className='summaryWrap'>
                                    <p className='summary'>{filteredPost.summary} </p>
                                    --recommended by:{filteredPost.owner}
                                </div>

</div>
</Link>
))}
</div>
    )    

}