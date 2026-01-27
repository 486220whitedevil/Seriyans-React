import axios from 'axios'
import './App.css'

function App() {

  
   const getData = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response.status)
   }


  return (
    <>
      <button onClick={getData}>Get Data</button>
    </>
  )
}

export default App
