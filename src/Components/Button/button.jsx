import { useNavigate } from 'react-router-dom'
import './button.scss'
import Like from '../../Picture/Like.svg'
export default function Button(){
    const navigate = useNavigate()
    
    return(
        <>
            <button  className='button' onClick={() => navigate('/React-Harry_Potter/Liked')}>
                <img className='button__img' src={Like} alt="" />
                <p className='button__p'>Show Liked</p>
            </button>
        </>
    )
}