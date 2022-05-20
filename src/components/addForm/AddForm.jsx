import './AddForm.css'
import { useState } from 'react'
import MyButton from '../ui/button/MyButton'
import MyInput from '../ui/input/MyInput'




const AddForm = ({create}) => {

    const [post, setPost] = useState({
        userId: '',
        title: ''
    })


    const AddPostHandler = (e) => {
        e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now()
        }
        
        create(newPost)

        setPost({userId: '', title: ''})
    }

    return (

        <form className="add-form">
            <MyInput
                value={post.userId} 
                type="text" 
                placeholder="Name"
                onChange={e => setPost({...post, userId: e.target.value})}
            />
            <MyInput
                value={post.title}
                type="text" 
                placeholder="About"
                onChange={e => setPost({...post, title: e.target.value})}
            />

            <MyButton onClick={AddPostHandler}>Add</MyButton>
        </form>
    )   
}

export default AddForm