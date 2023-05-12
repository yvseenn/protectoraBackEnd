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
        await register(email,pwd,name)
        try {            
            setEmail('')
            setPwd('')
            setPwd2('')
            setName('')
            setShowPwd(false)
            setMsgSuccess('User registered successfully')
            setMsgError('')
        } catch (error) {
            // console.log(error)
            setMsgSuccess('')
            setMsgError('error.res.data')
        }

    }


    return (
        <>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name"/>
            </div>
            <div>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" />
            </div>
            <button onClick={()=> setShowPwd(!showPwd)}>{showPwd?'Hide':'Show'}</button>
            
            <div>
                <input value={pwd} onChange={(e)=> setPwd(e.target.value)} type={showPwd?'text':'password'} placeholder="Password" />
            </div>
            <div>
                <input value={pwd2} onChange={(e)=> setPwd2(e.target.value)} type={showPwd?'text':'password'} placeholder="Repeat Password" />
            </div>
            <div>
               {pwd2===pwd? '': <small style={{color:'red'}}>*Password do not match*</small>} 
            </div>
            <div>
               {msgError? <small style={{color:'red'}}>{msgError}</small>: ''} 
            </div>
            <div>
               {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>: ''} 
            </div>
            <div>
                <button disabled={pwd2!==pwd} onClick={tryToRegister}>Sign Up</button>
            </div>
            <small>Already registered? <Link to="/login">Log In</Link></small>
        </>
    )









}