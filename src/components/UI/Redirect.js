import React from 'react'
import "../UI/Redirect.css"
import Ellipse from "../Second/secondAssets/Ellipse.png"
import Next from "../Second/secondAssets/Next.png"
import Previous from "../Second/secondAssets/Previous.png"
import Null from "../Second/secondAssets/null.png"

function Redirect(props) {
  return (
    <div className='imgmainpanel'>
        <img src={Previous} alt="previous" />
        <img src={Ellipse} alt="ellipse" />
        <img src={Null} alt="null" />
        <img src={Null} alt="null" />
        <img src={Null} alt="null" />
        <img onClick={props.onSubmit} src={Next} alt="next" />
    </div>
  )
}

export default Redirect