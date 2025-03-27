import s from '../Main/main.module.scss'
import NoName from '../../Picture/NoName.jpg'
import NoLike from '../../Picture/NoLike.svg'
import Like from '../../Picture/like.svg'
import { useEffect, useState } from 'react'
export default function Article({info, check, arr}){

    const [status, setStatus] = useState(false)

    useEffect(() => {
        for(let el of arr){
            if(el.name === info.name){
                setStatus(!status)
            }
        }
        if(check !== undefined){
            setStatus(true)
        }
    }, [])

    function test(){
        setStatus(!status)
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
            let test3 = JSON.parse(localStorage.HP)
            let test4 = test3.filter(el => el.name !== info.name)
            localStorage.setItem("HP", JSON.stringify(test4))
        }

        if(check !== undefined){
            check.setCheck(1)
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