import './main.scss'
// import {data} from '../../Data/data'
import Article from './Article/article'
import { useState, useEffect } from 'react'
export default function Main(){


    
    // let id = -1
    // let NewData = []
    // async function getData() {
    //     try{
    //         console.log('Получаем данные...');
    //         let response = await fetch('https://hp-api.onrender.com/api/characters/')
    //         if(!response.ok) throw new Error(`Где-то ошибка: ${response.status}`);
    //         let data = await response.json();
    //         console.log(data);
    //         // NewData = data
    //         console.log('2')
            
    //         // async function Articles() {
    //         //     data.map((el) => {
    //         //         id++
    //         //         return(
    //         //             <Article key={id} info={el}/>
    //         //         )
    //         //     })
    //         // }
    //         // data.map((el) => {
    //         //     id++
    //         //     return(
    //         //         <Article key={id} info={el}/>
    //         //     )
    //         // })

    //     } catch (error){
    //         console.log(error);
    //     }
    // }
    const [number, setNumber] = useState('')
    useEffect(()=>{
        let data = 0
        let id = -1
        test()
        async function test() {
            let test = await fetch('https://hp-api.onrender.com/api/characters/');
            data = await test.json();
            letsGo(data)
            return data
        }
        function letsGo(data){
            let articles = document.querySelector('.articles')
            // console.log(data);
            setNumber(data.map((el) => {
                id++
                return(
                    <Article key={id} info={el}/>
                )
            }))
        }
    })
    

    // function createArticle() {
    //     console.log(testdata);
        
    //     let gr = test
    //     console.log('готово');
    //     CheckArticle(gr)
    // }
    // let check
    // let CheckArticle
    
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="articles">
                        {number}
                    </div>
                </div>
            </main>
        </>
    )
}

{/* {check = setInterval(()=>{
                            test()
                            if(testdata !== 'undefined'){
                                // createArticle()
                                console.log('запуск');
                                console.log(typeof(testdata));
                                
                                clearInterval(check)
                                testdata.map((el) => {
                                    id++
                                    return(
                                        <Article key={id} info={el}/>
                                    )
                                })
                            } else{

                            }
                        }, 1000)} */}