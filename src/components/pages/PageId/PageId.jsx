import useHttp from "../../hook/useHttp"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const PageId = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const {request} = useHttp()
    useEffect(() => {
        fetchingPage(params.id)
    }, [params])

    const fetchingPage = async (params) => {
        try {
            
            const response = await request(`https://jsonplaceholder.typicode.com/todos/${params}`)
            response.json().then(data => setPost(data))
        } catch (e) {}
    }

    return (
        <>
            <h1>Это страница поста {post.id}</h1>
            <div>{post.title}</div>
        </>

    )
}

export default PageId