import { useEffect, useState } from "react"
import Header from "./Components/Header/header"
import Hr from "./Components/Hr/hr"
import Main from "./Components/Main/main"

function App() {
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [like, setLike] = useState([])

  useEffect(()=>{
    console.log(like);
  }, [like])

  return (
    <>
      <Header setName={setName} setSchool={setSchool}/>
      <Hr/>
      <Main name={name} school={school} like={{like, setLike}}/>
    </>
  )
}

export default App
