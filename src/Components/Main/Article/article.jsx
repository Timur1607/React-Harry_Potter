import '../main.scss'

export default function Article({info}){
    return(
        <>
            <article className='article'>
                <img className="article__picture_img" src={info.image !== '' ? info.image : 'src/Picture/NoName.jpg'} alt="heroes picture"/>
                <div className="article__main">
                    <p className="article__main_name">{info.name}</p>
                    <p className="article__main_actor description">Actor:{info.actor}</p>
                    <p className="article__main_gender description">Gender: {info.gender}</p>
                    <p className="article__main_house description">House: {info.house}</p>
                    <p className="article__main_wandCore description">Wand core: {info.wand.core}</p>
                    <p className="article__main_alive description">Alive: {info.alive ? 'Yes' : 'No'}</p>
                </div>
            </article>
        </>
    )
}