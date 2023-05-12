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
                <div>
                    <input value={mail} onChange={(e)=> setMail(e.target.value)} type="mail" placeholder="mail" />
                </div>
                <div>
                    <input value={pwd} onChange={(e)=> setPwd(e.target.value)} type="password" placeholder="password" />
                </div>
                <div>
                    {msgError? <small style={{color:'red'}}>{msgError}</small>:''}
                </div>
                <div>
                    {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>:''}
                </div>
                <div>
                    <button onClick={tryToLogin}>Login</button>
                </div>
                <small>Still not registered? <Link to="/register">Register Here</Link></small>
            </>
        )
    }

}

export default LoginComponent