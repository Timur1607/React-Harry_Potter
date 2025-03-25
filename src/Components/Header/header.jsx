import Form from './Form/form'
import './header.scss'

export default function Header(props){
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__title">
                        <h1 className="header__title_h1">Harry Potter</h1>
                        <p className="header__title_text">View all characters from the Harry Potter universe</p>
                    </div>
                    <div className="header__searching">
                        <Form props={props}/>
                    </div>
                </div>
            </header>
        </>
    )
}