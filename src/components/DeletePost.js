import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../App.css';
import { getUserToken, getUser } from '../utils/authToken';


export default function DeleteImage() {

    const navigate = useNavigate()
    const token = getUserToken()
    const user = getUser()
    const { id } = useParams()

    const BASE_URL = 'http://localhost:4000'
    const POST_URL = `${BASE_URL}/post/${id}`;

    const [post, setPost] = useState()
    const [loaded, setLoad] = useState(false)
    const [confirmed, setConfirm] = useState(false)
    const getPost = async () => {
        try {
            const response = await fetch(POST_URL)
            const allPosts = await response.json()
            console.log(allPosts)
            setPost(allPosts)
            setLoad(true)
        } catch (err) {
            console.log(err)
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            const requestOptions = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const response = await fetch(POST_URL, requestOptions)

            const updatedPost = await response.json()
            console.log(updatedPost, 'delete route')
            navigate(`/profile`)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPost()
    },[])

    function confirm() {
        setConfirm(true)
    }
    if (confirmed == true){
        return (
            <div>
                <p>Are you sure you want to delete this post?</p>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={() => {
                    setLoad(true); 
                    setConfirm(false)
                    }}>No</button>
            </div>
        )
    
      }
    //create a form, form should accept changes for the image
    if (loaded == true && post.owner == user){ 

    return (
        <>
            <h6>Delete</h6>
            <button onClick={confirm}>DELETE POST</button>


        </>
    )}

}
