import { useState } from "react"
import Header from "./Components/Header/header"
import Hr from "./Components/Hr/hr"
import Main from "./Components/Main/main"
import Button from "./Components/Button/button"

function App() {
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')

  return (
    <>
      <Header setName={setName} setSchool={setSchool}/>
      <Hr/>
      <Main name={name} school={school}/>
      <Button/>
    </>
  )
}

export default App