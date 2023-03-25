import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import EditImage from './EditPost';

export default function Post() {

    const { id } = useParams()

    const [post, setPost] = useState()
    const [loaded, setLoad] = useState(false)
    const BASE_URL = 'https://film-buddy.herokuapp.com:4000'
    const POST_URL = `${BASE_URL}/post/${id}`;
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

    if (loaded == true) {
        return (
            <div className='postWrapper'>
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

                <EditImage />
            </div>
        )
    }

}