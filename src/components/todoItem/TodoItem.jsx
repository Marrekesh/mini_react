import './TodoItem.css'
import MyButton from '../ui/button/MyButton'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

const TodoItem = ({post, deletePost}) => {
    const router = useParams()
    const {title, completed, id} = post

    const star = completed ? 
                <div className='todo-item__star todo-item__star_completed'>&#9733;</div> :
                <div className='todo-item__star'>&#9734;</div>

    return (
        <div className="todo-item">
            <div className="todo-item__wrapper">
                <h3 className='todo-item__name'>{id}</h3>
                <div>{title}</div>
            </div>
            <div className='todo-item__block'>
                {star}
                
                <Link key={post.id} to={`/main/${post.id}`}>
                    <MyButton style={{marginRight: '10px'}}>Open</MyButton>
                </Link>
                
                <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
            </div>        
        </div>
    )
}

export default TodoItem