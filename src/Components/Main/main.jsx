import s from './main.module.scss'
import Article from '../Article/article'
import { useState, useEffect } from 'react'

export default function Main(props){
    const [data, setData] = useState([])
    const [stableData, setStableData] = useState([])

    useEffect(()=>{
        console.log(props.name, props.school);
        if(props.name !== '' && props.school === ''){
            setData(stableData.filter(el => el.name.toLowerCase().includes(props.name.toLowerCase())))
        } else if(props.name === '' && props.school !== ''){
            setData(stableData.filter(el => el.house === props.school))
        } else if(props.name === '' && props.school === ''){
            setData(stableData)
        } else if(props.name !== '' && props.school !== ''){
            setData(stableData.filter(el => (el.name.toLowerCase().includes(props.name.toLowerCase()) && el.house === props.school)))
        }
    }, [props.name, props.school])

    
    
    
    useEffect(function(){
        Data()
        async function Data(){
            let test = await fetch('https://hp-api.onrender.com/api/characters/');
            let tdata = await test.json();
            setStableData(tdata)
            setData(tdata)
        }
    }, [])
    
    //все норм, но он запускает асинхронную функцию
    //решил эту проблему
     
    return (
        <>
            <main className={s.main}>
                <div className='container'>
                    <div className={s.articles}>
                        {data.map((el, i) => (
                            <Article info={el} like={props.like} key={i}/>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}