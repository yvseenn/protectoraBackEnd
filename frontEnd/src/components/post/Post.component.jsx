import axios from 'axios'
import { Link } from 'react-router-dom'
export default function PostComponent({post}) {
    return (
        <div className="Post">
            <h2>
                <Link to={`/posts/${post.id}`}>
                {post.id}. {post.title}
                </Link>
                
            </h2>
            <p>
                {post.text}
            </p>
        </div>

    )
}