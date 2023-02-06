import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function Fantasy() {

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
},[]) 
console.log(post)



// const isCrime = (post.genre) = post.genre == "Crime"
 
// const filter = post.genre.filter(isCrime)
// console.log(filter)
    return (
  
<div className='postWrapper'>
 
{post?.filter(posts => posts.genre === "Fantasy").slice(0).reverse().map(filteredPost => (
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
    <p className='summary'>{filteredPost.summary}</p>
    </div>

</div>
</Link>
))}
</div>
    )    

}