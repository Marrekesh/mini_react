import TodoItem from "../todoItem/TodoItem"
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import { Link } from "react-router-dom";

const TodoWrapper = ({posts, deletePost}) => {

    // posts.map(post => {
    //     <CSSTransition>
    //         return <TodoItem deletePost={deletePost} post={post} key={post.id}/>
    //     </CSSTransition>
       
    // })

    return (
        <div className="todo-wrapper">
            <TransitionGroup>
                {posts.map((post) => 
                    <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                  >

                        <TodoItem deletePost={deletePost} post={post}/>

                     
                    </CSSTransition>

                )}
            </TransitionGroup>
            
        </div>
    )
}

export default TodoWrapper