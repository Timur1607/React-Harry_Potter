import s from '../Main/main.module.scss'
import NoName from '../../Picture/NoName.jpg'
import NoLike from '../../Picture/NoLike.svg'
import Like from '../../Picture/like.svg'
import { useEffect, useState } from 'react'
export default function Article({info, check}){

    const [status, setStatus] = useState(false)
    let arr = localStorage.getItem('HP') !== null ? JSON.parse(localStorage.HP) : []

    useEffect(() => {
        for(let el of arr){
            if(el.name === info.name){
                setStatus(!status)
            }
        }
        // console.log(check);
    }, [])

    useEffect(()=>{
        if(check !== undefined){
            setStatus(true)
            console.log(1); 
        }
    })

    function test(){
        setStatus(!status)
        arr = localStorage.getItem('HP') !== null ? JSON.parse(localStorage.HP) : []
        if(status === false){
            arr.push({
                image: `${info.image !== '' ? info.image : NoName}`,
                name: `${info.name}`,
                actor: `${info.actor}`,
                gender: `${info.gender}`,
                house: `${info.house}`,
                wand: {qwerty: '', core: `${info.wand.core}`},
                alive: `${info.alive ? 'Yes' : 'No'}`,
            })
            localStorage.setItem("HP", JSON.stringify(arr))
        } else if(status === true){
            localStorage.setItem("HP", JSON.stringify(arr.filter(el => el.name !== info.name)))
        }

        if(check !== undefined){
            check.setCheck(!check.check)
        }
    }
    //крч, после изменения хука все данные слетают,
    // ща все норм работает

    return(
        <>
            <article className={`${s.article}`}>
                <img className={`${s.article__picture_img}`} src={info.image !== '' ? info.image : NoName} alt="heroes picture"/>
                <div className={`${s.article__main}`}>
                    <p className={`${s.article__main_name}`}>{info.name}</p>
                    <p className={`${s.article__main_actor} ${s.description}`}>Actor:{info.actor}</p>
                    <p className={`${s.article__main_gender} ${s.description}`}>Gender: {info.gender}</p>
                    <p className={`${s.article__main_house} ${s.description}`}>House: {info.house}</p>
                    <p className={`${s.article__main_wandCore} ${s.description}`}>Wand core: {info.wand.core}</p>
                    <p className={`${s.article__main_alive} ${s.description}`}>Alive: {info.alive ? 'Yes' : 'No'}</p>
                </div>
                <div className={`${s.article__like}`} onClick={()=> {test()}}>
                    <img src={status ? Like : NoLike} alt="like" />
                </div>
            </article>
        </>
    )
}