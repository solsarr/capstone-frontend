import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = ({ signIn }) => {

  const initialState = { username: "", password: "" }
  const [input, setInput] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signIn(input)

    if (createdUserToken) {
      navigate("/")
    } else {
      navigate("/auth")
    }
    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className='center'>
      <div className='register' style={{ border: '2px solid black' }}>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            id="username"
            name="username"
            placeholder='Username'
            value={input.username}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            placeholder='Password'
            value={input.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <div className='submitWrap'>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm