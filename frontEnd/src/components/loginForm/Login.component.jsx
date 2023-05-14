import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { PostContext } from "../../context/post.context";

const LoginComponent = () => {

    const [mail, setMail] = useState('')
    const [pwd, setPwd] = useState('')
    const[msgSuccess, setMsgSuccess] = useState('')
    const[msgError, setMsgError] = useState('')


    const {login, user} = useContext(PostContext)

    async function tryToLogin(){
        try {
            await login(mail,pwd)
            setMsgSuccess("Successfully logged in")
            setMsgError('')
        } catch (error) {
            setMsgSuccess("")
            setMsgError(error.res.data)
        }
    }

    if(user){
        return (
            <Navigate to="/private-area" replace></Navigate>
        )
    }
    else {
        return (
            <>
                <div className="mb-4">
                    <input className="border-gray-400 border-solid border rounded px-3 py-2 w-full" value={mail} onChange={(e)=> setMail(e.target.value)} type="email" placeholder="Email Address" />
                </div>
                <div className="mb-4">
                    <input className="border-gray-400 border-solid border rounded px-3 py-2 w-full" value={pwd} onChange={(e)=> setPwd(e.target.value)} type="password" placeholder="Password" />
                </div>
                <div className="mb-4">
                    {msgError? <small style={{color:'red'}}>{msgError}</small>:''}
                </div>
                <div className="mb-4">
                    {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>:''}
                </div>
                <div className="mb-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={tryToLogin}>Login</button>
                </div>
                <small className="block">Not registered? <Link className="text-blue-500 hover:text-blue-700 font-bold" to="/register">Create an Account</Link></small>
            </>
        )
    }

}

export default LoginComponent;
