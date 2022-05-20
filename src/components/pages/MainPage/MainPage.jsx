import './App.css'
import Filtration from '../../filtration/Filtration'
import TodoWrapper from '../../todoWrapper/TodoWrapper'
import { useState, useEffect, useRef} from 'react'
import AddForm from '../../addForm/AddForm'
import {usePost, useSortedPosts} from '../../hook/usePost'
import MyModal from '../../ui/modal/MyModal'
import MyButton from '../../ui/button/MyButton'
import useHttp from '../../hook/useHttp'
import { getPage } from '../../utils/page'
import { usePagination } from '../../hook/usePagination'

const MainPage = () => {

    // const [posts, setPosts] = useState([
    //     {userId: 'Dima', id: 1,  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', completed: false},
    //     {userId: 'Vasya', id: 2,  title: 'Lorem ipsum dolor sit amet consectetur adipisicing .', completed: false},
    //     {userId: 'Petya', id: 3,  title: 'Lorem ipsum dolor sit amet consectetur. Tvoya mamka', completed: false}
    // ])

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({selected: '', filtration: ''})
    const [visible, setVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    let pageArray = usePagination(totalPages)
    const lastElement = useRef()
    const observer = useRef()

    const {request, load} = useHttp()

    //запросы на сервер и получение постов

    useEffect(() => {

        if(load) return
        if(observer.current) observer.current.disconnect()
        var callback = function(entries, observer) {
            if(entries[0].isIntersecting && page < totalPages) {
              setPage(page => page + 1) 
            }
            
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [load])

    useEffect(() => {
        getAll()
    }, [page])

    const getAll = async () => {
        try {
            const response = await request(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`) //d в хуке не приабразовуется к json()
            const totalCount = response.headers.get('x-total-count')
            setTotalPages(getPage(totalCount, limit))
            response.json().then((data) => setPosts([...posts, ...data]))
        } catch(e) {
            console.log('ошибка запроса всех постов')
        }
    }


    //добавление постов
    const createNewPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    //удаление постов
    const deletePost = (post) => {
        const filteredPosts = posts.filter(item => {
            return item.id !== post.id
        })

        setPosts([...filteredPosts])
    }

    // const sortedPostsBySelect = getSortedPosts()
    const sortedPostsBySelect = useSortedPosts(posts, filter.selected)
    //поиск постов
    
    const filteredPosts = usePost(sortedPostsBySelect, filter.filtration)

    // условная отрисовка постов
    const preview = posts.length 
        ? <TodoWrapper deletePost={deletePost} posts={filteredPosts}/> 
        : <h3>Посты не найдены</h3>

    
    return (
        <div className="app">
            <MyModal visible={visible} setVisible={setVisible}>
                <AddForm create={createNewPost}/>
            </MyModal>
            <MyButton
                style={{marginBottom: '15px'}}
                onClick={() => setVisible(true)}
                >Создать пользователя
            </MyButton>
            <hr style={{marginBottom: '15px'}}/>
            <Filtration filter={filter} setFilter={setFilter}/>
            {preview}
            {load && 
                <h3>Загрузка постов</h3>
            }
            <div ref={lastElement} style={{height: '10px', background: 'red'}}></div>
            {/* {pageArray.map(p =>
                <span onClick={() => setPage(p)} className={page === p ? 'page page__current' : 'page'} key={p}>{p}</span>
                
            )} */}
        </div>
    )
}

export default MainPage