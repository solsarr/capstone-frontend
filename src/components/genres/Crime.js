import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Crime() {

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
    filterGenre()
}, [])
console.log(post)

const results = []

const filterGenre= async () =>{
    for (let x = 0; x <= post.length; x++){
        if (post[x].genre == "Crime"){
            results.push(post[x])
            console.log(results, 'this is results')
        }
    }
}


// const isCrime = (post.genre) = post.genre == "Crime"

// const filter = post.genre.filter(isCrime)
// console.log(filter)
    return (
        <div>

{/* <h1>{results[0].summary}</h1> */}
 
<div className='postWrapper'>
 
{results?.map((results, idx)=> {
    return (
        <div className='post' style={{border:'1px solid black'}}>
            <div className='imageWrap'>
            <img src={results.image}
            className='image' />
            </div>
            <div className='titleWrap'>
            <h5 className='title'>{results.title}</h5>
            </div>
            <div className='genreWrap'>
            <p className='genre'>{results.genre}</p>
            </div>
            <div className='summaryWrap'>
            <p className='summary'>{results.summary}</p>
            </div>

        </div>
    )
})}



</div>
            {/* {post.filter(posts => posts.genre === "Crime").map(filteredPost => (
                     <div className='post' style={{border:'1px solid black'}}>
                    <div className='imageWrap'>
                    <img src={filteredPost.image}
                    className='image' />
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

            ))} */}
            test 
            <h1>{results.genre}</h1>
        </div>
    )

}