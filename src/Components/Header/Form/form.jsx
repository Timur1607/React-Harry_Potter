import '../header.scss'
import { useState,useEffect } from 'react'

export default function Form(props){

    // console.log(props.props);
    
    useEffect(()=>{
    })

    function openSchools(el){
        el.target.parentElement.children[3].classList.toggle('divScript') 
    }
    function sendSchool(school, el){
        el.target.parentElement.classList.toggle('divScript') 
        el.target.parentElement.parentElement.children[1].value = school
        props.props.setSchool(school)
    }

    return(
        <>
            <form className="form">
                <div className="header__searching_name">
                    <label className="header__searching_name_Label" htmlFor="name">Name</label>
                    <input 
                        className="header__searching_name_Input" 
                        id="name" 
                        type="text" 
                        placeholder="Hermione"
                        onChange={(el)=>{props.props.setName(el.target.value)}}
                    />
                </div>
                <div className="header__searching_house">
                    <label className="header__searching_house_Label" htmlFor="house">School</label>
                    <input 
                        className="header__searching_house_Input" 
                        id="house" 
                        list="houseye" 
                        placeholder="Choose one" 
                        onClick={(el)=> openSchools(el)}
                    />
                    <svg className="header__searching_house_svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="#ABB5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="header__searching_house_div">
                        <p className="header__searching_house_div_house Slytherin" onClick={(el) => sendSchool('Slytherin', el)}>Slytherin</p>
                        <p className="header__searching_house_div_house Gryffindor" onClick={(el) => sendSchool('Gryffindor', el)}>Gryffindor</p>
                        <p className="header__searching_house_div_house Hufflepuff" onClick={(el) => sendSchool('Hufflepuff', el)}>Hufflepuff</p>
                        <p className="header__searching_house_div_house Ravenclaw" onClick={(el) => sendSchool('Ravenclaw', el)}>Ravenclaw</p>
                        <p className="header__searching_house_div_house Ravenclaw" onClick={(el) => sendSchool('', el)}>No one</p>
                    </div>
                </div>
            </form>
        </>
    )
}
