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

        </div>
    </div>
  )
}

export default Secondpage