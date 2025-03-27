import { useState, useEffect } from 'react'
import './liked-main.scss'
import Article from '../Article/article'
export default function LikedMain(){

    const [arr, setArr] = useState(localStorage.getItem('HP') !== null ? JSON.parse(localStorage.HP) : []) 
    const [check, setCheck] = useState(0)
    useEffect(()=>{
        console.log(check);
        setArr(localStorage.getItem('HP') !== null ? JSON.parse(localStorage.HP) : [])
        console.log(arr);
    },[check])
    


    return(
        <>
            <section className='main'>
                <div className='container'>
                    <div className='main__articles'>
                        {arr.map((el, i) => (
                            <Article info={el} key={i} check={{check, setCheck}}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}