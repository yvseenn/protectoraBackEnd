import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/post.context";

export default function NavigationBarComponent() {

    const { user } = useContext(PostContext)

    return (
        <nav className="">
            {user ? <p>Welcome {user.email}</p> : 'Not Logged in'}
            <ul>
                <li><Link to="/">Home</Link></li>
                
                {
                    user ? <li><Link to="/privateArea">Private Area</Link></li> : <li><Link to="/login">Login</Link></li>
                }


                <li><Link to="/posts">Posts</Link></li>

                {
                    user? <li><Link to="/posts/nuevo">Create Posts</Link></li>: ''
                }
                
                {
                    user? <li><Link to="/logout">Close Session</Link></li> : ''
                }
                

            </ul>
        </nav>
    )
}