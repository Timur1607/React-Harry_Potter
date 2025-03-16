import '../header.scss'
import { useState,useEffect } from 'react'
import Article from '../../Main/Article/article'
export default function Form(){

    const [number, setNumber] = useState('')
    const [data, setData] = useState('')

    


    useEffect(()=>{
        let articles = document.querySelector('.articles')
        let form = document.querySelector('.form')
        let input = document.querySelector('.header__searching_name_Input')
        let inputSchool = document.querySelector('.header__searching_house_Input')
        let schools = document.querySelector('.header__searching_house_div')
        let data2 = []

        function findArticle(house, name, data2,){
            console.log(name, house);
            // console.log(name.toLowerCase() !== '');
            // console.log(house.toLowerCase() === '');
            // console.log(number);
            
            // if(name.toLowerCase() !== '' && house.toLowerCase() === ''){
            //     for(let i = 0; i < data.length; i++){
            //         // console.log('check');
                    
            //         if(data[i].name.toLowerCase().includes(name.toLowerCase())){
            //             data2.push(data[i]) 
            //             // console.log('да');
                        
            //         }
            //     }
            // }
            // console.log(data2);
            
        }

        function inputSchoolListener(){
            schools.classList.toggle('divScript')
            let addSchoolValue = (i) => {
                inputSchool.value = schools.children[i].textContent
                if(inputSchool.value === 'No one'){
                    inputSchool.value = ''
                }
                schools.classList.remove('divScript')
                // for(let i = 0; i <= 4; i++){
                //     schools.children[i].removeEventListener('click', addSchoolValue, true)
                // }
                findArticle(inputSchool.value , input.value, data2)
            }

            for(let i = 0; i <= 4; i++){//-----------------------------------------слушатель для школы
                schools.children[i].addEventListener('click',() => {
                    addSchoolValue(i)
                }, {once: true})
            }
            // inputSchool.removeEventListener('click', inputSchoolListener)
        }
        inputSchool.addEventListener('click', () => {
            inputSchoolListener()
            inputSchool.removeEventListener('click', inputSchoolListener)
            // console.log(1);
            
        })
        form.addEventListener('input', ()=>{
            findArticle(inputSchool.value , input.value, data2)
        })

        // let data = 0//---------------------------------------------------------data
        // let id = -1
        // test()
        // async function test() {
        //     let test = await fetch('https://hp-api.onrender.com/api/characters/');
        //     data = await test.json();
        //     letsGo(data)
        //     return data
        // }
        // function letsGo(data){
        //     let articles = document.querySelector('.articles')
        //     // console.log(data);
        //     setData(data)
        //     setNumber(data.map((el) => {
        //         id++
        //         return(
        //             <Article key={id} info={el}/>
        //         )
        //     }))
        // }
    })

    return(
        <>
            <form className="form">
                <div className="header__searching_name">
                    <label className="header__searching_name_Label" htmlFor="name">Name</label>
                    <input className="header__searching_name_Input" id="name" type="text" placeholder="Hermione"/>
                </div>
                <div className="header__searching_house">
                    <label className="header__searching_house_Label" htmlFor="house">School</label>
                    <input className="header__searching_house_Input" id="house" list="houseye" placeholder="Choose one"/>
                    <svg className="header__searching_house_svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="#ABB5BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="header__searching_house_div">
                        <p className="header__searching_house_div_house Slytherin">Slytherin</p>
                        <p className="header__searching_house_div_house Gryffindor">Gryffindor</p>
                        <p className="header__searching_house_div_house Hufflepuff">Hufflepuff</p>
                        <p className="header__searching_house_div_house Ravenclaw">Ravenclaw</p>
                        <p className="header__searching_house_div_house Ravenclaw">No one</p>
                    </div>
                </div>
            </form>
        </>
    )
}