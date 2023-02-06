import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import '../components/App/App.css';

export default function DeleteImage(){

const navigate = useNavigate()

const {id} = useParams()

const BASE_URL = 'http://localhost:4000'
const POST_URL = `${BASE_URL}/post/${id}`;

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
            console.log(updatedPost)
            navigate(`/profile`)
        } catch (err) {
            console.log(err)
        }
    }
    function confirm(){
        return (
            <div>
                <p>Are you sure you want to delete this post?</p>
            <button onClick={handleDelete}>Yes</button>
            <button>No</button>
            </div>
        )
    }

//create a form, form should accept changes for the image

return (
    <>
        <h6>Delete</h6>
            <button onClick={confirm}>DELETE POST</button>


    </>
)

}