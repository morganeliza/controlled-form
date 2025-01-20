import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {


  const [token, setToken] = useState(null);
  //   const [formData, setFormData] = useState({ username: "", password: "", })

  //   useEffect(() => {formData}, [formData])

  //   function handleChange(e) {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({ ...prevData, [name]: value }))}

  // function handleSubmit(){}


  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />

    </>
  );
}

export default App
