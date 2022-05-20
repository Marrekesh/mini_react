import {
    Routes,
    Route,
} from 'react-router-dom'

import MainPage from '../pages/MainPage/MainPage'
import PrePage from '../pages/PrePage/PrePage'
import PageId from '../pages/PageId/PageId'
const useRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PrePage/>}/>
                <Route path="main" element={<MainPage/>}/>
                <Route path="main/:id" element={<PageId/>}/>
                <Route path="*" element={<PrePage/>}/>   
                
            </Routes>
        </>

    )
}

export default useRoutes