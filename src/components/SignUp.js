import { useState } from "react"
import { Link } from "react-router-dom"


export default function SignUp(){

    const URL = `http://localhost:4000/user/signup`

    const [user, setUser] = useState()
    const [regForm, setRegForm] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        const userInput = {...regForm}
        userInput[e.target.name] = e.target.value
        setRegForm(userInput)
        console.log(regForm)
      };

    const signUp = async () => {
    
        const signReq = { ...regForm }
        try {
          const requestOptions = {
            method: "Post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signReq)
          }
          console.log(JSON.stringify(signReq))
          const response = await fetch(URL, requestOptions)
          const createUser = await response.json()
          setUser([...user, createUser])
          setRegForm({
            username: "",
            password: "",
          })
        } catch (err) {
          console.log(err)
        }
      }


        
    
return (
    <div className="wrapper1">
    <div className="form-wrapper">
    <form >
    <div className="firstName">
    <label  htmlFor="firstName"></label>
    <input
    type="text"
    className="username"
    placeholder="Name"
    value={regForm.username}
    name="username"
    onChange={handleChange}
    />
    </div>
    <div className="password">
    <label  htmlFor="password"></label>
    <input
    // type="text"
    className="password"
    placeholder="Password"
    value={regForm.password}
    type="password"
    name="password"
    onChange={handleChange}
    />
    </div>
    <button onClick={signUp}
    value = "Submit">
    SignUp
    </button>
    <Link to="/login" >
    {"Have an account?"}
    </Link>
    </form>
    </div>
    </div>
)
    }