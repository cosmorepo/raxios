import { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {

    const [posts, setPosts] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
            console.log(res.data);
            setPosts(res.data)
        })
    })

    return (
        <div>
            {
             !posts ? ("we do not have any data") : (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>{
                        posts.map((post, index)=> (
                            <tr key={index}>
                                <td>{post.id}</td>
                                <td>{post.userId}</td>
                                <td>{post.title}</td>  
                                <td>
                                    <p className={post.completed ? "btn btn-success":"btn btn-danger"}>
                                        {post.completed ? "completed" : "pending"}
                                    </p>
                                </td>          
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
             }
        </div>
    )
}

export default Posts
