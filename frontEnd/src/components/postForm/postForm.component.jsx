import axios from "axios"
import { useContext, useState } from "react"
import { PostContext } from "../../context/post.context"

export default function PostFormComponent(){
    const [post, setPost]= useState({title:'', text:''})
    const [msgError, setMsgError] = useState('')
    const [msgSuccess, setMsgSuccess] = useState('')
    const [laoding, setLoading] = useState(false)


    const {addpost} = useContext(PostContext)

    function modifyInput(e){
        setPost({...post,[e.target.name]: e.target.value})
    }

    async function createPost(){
        try {
            setMsgSuccess('')

            setLoading(true)
            await addpost(post)
            setLoading(false)

            setPost({title:'', text:''})
            setMsgError('')
            setMsgSuccess('Post Published')
        } catch (e) {
            setMsgError(e.message)
            setMsgSuccess('')
            setLoading(false)
        }
    }

        return (
            <div>
                <div>
                    <input name="title" value={post.title} onChange={modifyInput} placeholder="title"></input>
                </div>
                <div>
                    <textarea name="text" value={post.text} onChange={modifyInput}></textarea>
                </div>
                <div>
                    {
                        laoding? <div>
                            <div></div>
                        </div> : ''
                    }
                    <button disabled={laoding===true} onClick={createPost}>Publish</button>
                </div>
                {msgSuccess ? <div>
                    <small style={{color:'green'}}>
                    {msgSuccess}
                    </small>
                </div>:''}
                {msgError ? <div style={{color:'red'}}>
                    *{msgError}*
                </div>:''}
            </div>
        )
}