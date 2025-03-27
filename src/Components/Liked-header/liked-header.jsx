import { useNavigate } from 'react-router-dom'
import './liked-header.scss'
export default function LikedHeader(){
    const navigate = useNavigate()

    return(
        <>
            <section className='liked-header'>
                <div className='container'>
                    <button className='liked-header__button' onClick={() => navigate('/React-Harry_Potter')}>← Back To All</button>
                    <h1 className='liked-header__h1'>Liked ones</h1>
                    <h2 className='liked-header__h2'>Your favorite characters from the Harry Potter universe.</h2>
                </div>
            </section>
        </>
    )
}