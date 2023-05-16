import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/post.context";

export default function RegisterComponent(){

    const {register} = useContext(PostContext);

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwd2, setPwd2] = useState('')
    const [name, setName] = useState('')
    const [showPwd, setShowPwd] = useState('')
    const [msgSuccess, setMsgSuccess] = useState('')
    const [msgError, setMsgError] = useState('')

    async function tryToRegister() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setMsgSuccess("");
          setMsgError("Invalid email. Please enter a valid email address.");
          return;
        }
      
        try {
          const res = await register(email, pwd, name);
          if (res === "EMAIL_EXISTS") {
            setMsgSuccess("");
            setMsgError("Email already exists. Please choose a different email.");
          } else {
            setEmail("");
            setPwd("");
            setPwd2("");
            setName("");
            setShowPwd(false);
            setMsgSuccess("User registered successfully");
            setMsgError("");
          }
        } catch (error) {
          // console.log(error)
          setMsgSuccess("");
          setMsgError("Error occurred during registration");
        }
      }
      


    return (
        <>
            <div className="mb-4">
                <input className="w-full p-2 border rounded-lg" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name"/>
            </div>
            <div className="mb-4">
                <input className="w-full p-2 border rounded-lg" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" />
            </div>
            <button className="mb-4 text-blue-600" onClick={()=> setShowPwd(!showPwd)}>{showPwd?'Hide':'Show'}</button>
            
            <div className="mb-4">
                <input className="w-full p-2 border rounded-lg" value={pwd} onChange={(e)=> setPwd(e.target.value)} type={showPwd?'text':'password'} placeholder="Password" />
            </div>
            <div className="mb-4">
                <input className="w-full p-2 border rounded-lg" value={pwd2} onChange={(e)=> setPwd2(e.target.value)} type={showPwd?'text':'password'} placeholder="Repeat Password" />
            </div>
            <div className="mb-4">
               {pwd2===pwd? '': <small style={{color:'red'}}>*Password do not match*</small>} 
            </div>
            <div className="mb-4">
               {msgError? <small style={{color:'red'}}>{msgError}</small>: ''} 
            </div>
            <div className="mb-4">
               {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>: ''} 
            </div>
            <div>
                <button disabled={pwd2!==pwd} className="bg-blue-600 text-white py-2 px-4 rounded" onClick={tryToRegister}>Sign Up</button>
            </div>
            <small>Already registered? <Link className="text-blue-600" to="/login">Log In</Link></small>
        </>
    )

}
