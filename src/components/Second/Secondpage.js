import React from 'react'
import "../Second/Secondpage.css"
import Form from './Form'
import Ellipse from "../Second/secondAssets/Ellipse.png"
import Next from "../Second/secondAssets/Next.png"
import Previous from "../Second/secondAssets/Previous.png"
import Null from "../Second/secondAssets/null.png"

function Secondpage(props) {
  return (
    <div className='maindiv'>
        <div className='secondleft'>
            <h1> Hey, Rocketeer, what are your coordinates? </h1>
            <Form onClick={props.onClick} />
        </div>
        <div className='secondright'>
            <h2> Redberry Origins </h2>
            <p> You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇 </p> 
        </div>
    </div>
  )
}

export default Secondpage