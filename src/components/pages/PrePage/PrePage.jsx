import './PrePage.css'
import MyButton from '../../ui/button/MyButton'
import { Link } from 'react-router-dom'

const PrePage = () => {
    return (
        <div className="pre-page">
            <h1 style={{marginBottom: '15px'}}>Стартовая страница</h1>
            <Link className='pre-page__link' to='main'>Start</Link> 
        </div>

    )
}

export default PrePage