import { useState } from 'react'
import logo from './assets/logo.png'
import alternate from './assets/crystal-ball.png'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)
  const [arr, setArr] = useState([
            // yea not doing basic to do list...
            // we can get some cool quotes though lol
            "I feel like a haunt mess.",
            "Howl 'bout them apples?",
            "Creepin' it real.",
            "No tricks, just treats.",
            "Who run the world? Ghouls."
          ])
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div>
        {/* <a href="#" target="_blank"> */}
          <img src={(!toggle) ? logo : alternate } className="logo" onClick={()=> setToggle( !toggle ) } alt="my logo" />
        {/* </a> */}
      </div>
      <h1>{arr[index]}</h1>
        {/*  iterating through the list with a button (added functionality) */}
        <button onClick={() => setIndex( (index < arr.length-1) ? index + 1 : 0 )}>
          Boo
        </button>
        
      <p>
        Hello Halloween
      </p>
    </>
  )
}

export default App
