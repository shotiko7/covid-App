import React from 'react'
import "../First/Firstpage.css"
import star from "../First/furstAssets/star.png"
import rocketman from "../First/furstAssets/rocketman.png"

function Firstpage(props) {
  return (
    <div>
        <div>
            <img className='star' src={star} alt='star'/>
            <h1 className='Welcome'> Welcome Rocketeer ! </h1>
            <button className='firstButton' onClick={props.onClick}> Start Questionnaire </button>
            <h4 className='submited'> Submitted Applications </h4>
            <img className='rocketman' src={rocketman} alt='rocketman' />
        </div>
    </div>
  )
}

export default Firstpage