import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function Create(){

    const [post, setPost] = useState()
    const [newForm, setNewForm] = useState({
        image: "",
        genre: "",
        title: "",
        summary: "",
      })

      const handleChange = (e) => {
        console.log(newForm)
        const userInput = {...newForm}
        userInput[e.target.name] = e.target.value
        setNewForm(userInput)
      };
      const URL = `http://localhost:4000/post`

      const handleSubmit = async (e) => {
        e.preventDefault()
        const currentPost = { ...newForm }
        try {
          const requestOptions = {
            method: "Post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(currentPost)
          }
          console.log(JSON.stringify(currentPost))
          
          const response = await fetch(URL, requestOptions)
          const createPost = await response.json()
          setPost([...post, createPost])
          setNewForm({
            image: "",
            genre: "",
            title: "",
            summary: "",
          })
        } catch (err) {
          console.log(err)
        }
      }

return (
    <div>
    <section className="user-list">
    <h2>Create Post</h2>
    <form onSubmit={handleSubmit}  >
      <div className='imagePost'>
        <label htmlFor='image' className='imageLabel'>
          Image
          <input
            type="pic"
            value={newForm.image}
            name="image"
            placeholder="(image URL)"
            onChange={handleChange}
            className='imageInput'
          />
        </label>
      </div>
      <div className='genrePost'>
        <label htmlFor='genre' className='genreLabel'>
          Genre
          <input
            type="genre"
            value={newForm.genre}
            name="genre"
            placeholder="genre"
            onChange={handleChange}
            className='genreInput'
          />
        </label>
        <div className='titlePost'>
            <label htmlFor='title' className='titleLabel'>
                Title 
            <input
                type='title'
                value={newForm.title}
                name='title'
                placeholder='title'
                onChange={handleChange}
                className='titleInput'
                />
            </label>
        </div>
        <div className='summaryPost'>
            <label htmlFor='summary' className='summaryLabel'>
                Summary 
            <input
                type='summary'
                value={newForm.summary}
                name='summary'
                placeholder='summary'
                onChange={handleChange}
                className='summaryInput'
                />
            </label>
        </div>
        <br />
      </div>
      <div className='submitButton'>
        <input type="Submit" value="Create Post" onChange={handleChange}
        className='createPost'
        />
        </div>
        </form>
        </section>
        <div className='post'>
            <img src={newForm.image} className='image'/>
            <h6>{newForm.title}</h6>
            <p>{newForm.genre}</p>
            <p>{newForm.summary}</p>


        </div>
        </div>
)


}