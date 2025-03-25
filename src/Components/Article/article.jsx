import s from '../Main/main.module.scss'
import NoName from '../../Picture/NoName.jpg'
import NoLike from '../../Picture/NoLike.svg'
import Like from '../../Picture/like.svg'
export default function Article(props){

    function addLike(el){
        el.target.children[0].classList.toggle(`${s.article__like_noLike_onClick}`)
        el.target.children[1].classList.toggle(`${s.article__like_like_onClick}`)
        
        props.like.setLike(props.like.like.push({
            img: `${el.target.parentElement.children[0].src}`,
            Name: `${el.target.parentElement.children[1].children[0].textContent}`,
            Actor: `${el.target.parentElement.children[1].children[1].textContent.split(' ')[1]}`,
            Gender: `${el.target.parentElement.children[1].children[2].textContent.split(' ')[1]}`,
            House: `${el.target.parentElement.children[1].children[3].textContent.split(' ')[1]}`,
            WandCore: `${el.target.parentElement.children[1].children[4].textContent.split(' ')[2]}`,
            Alive: `${el.target.parentElement.children[1].children[5].textContent.split(' ')[1]}`,
        }))
        console.log(props.like.like);
    }

    return(
        <>
            <article className={`${s.article}`}>
                <img className={`${s.article__picture_img}`} src={props.info.image !== '' ? props.info.image : NoName} alt="heroes picture"/>
                <div className={`${s.article__main}`}>
                    <p className={`${s.article__main_name}`}>{props.info.name}</p>
                    <p className={`${s.article__main_actor} ${s.description}`}>Actor:{props.info.actor}</p>
                    <p className={`${s.article__main_gender} ${s.description}`}>Gender: {props.info.gender}</p>
                    <p className={`${s.article__main_house} ${s.description}`}>House: {props.info.house}</p>
                    <p className={`${s.article__main_wandCore} ${s.description}`}>Wand core: {props.info.wand.core}</p>
                    <p className={`${s.article__main_alive} ${s.description}`}>Alive: {props.info.alive ? 'Yes' : 'No'}</p>
                </div>
                <div className={`${s.article__like}`} onClick={(el)=>{addLike(el)}}>
                    <img className={`${s.article__like_noLike}`} src={NoLike} alt="like" />
                    <img className={`${s.article__like_like}`} src={Like} alt="like" />
                </div>
            </article>
        </>
    )
}