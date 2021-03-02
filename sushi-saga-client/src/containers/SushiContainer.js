import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  const sushis = props.current.map((sushi) =>{
    return (
      <Sushi 
      key={sushi.id}
      id={sushi.id}
      name={sushi.name}
      price={sushi.price}
      image={sushi.img_url}
      sushi={sushi}
      eatSushi={props.eatSushi}
      eatenSushi={props.eatenSushi}
      />
    )
  })

  return (
    <Fragment>
      <div className="belt">
        {sushis}
        <MoreButton moreSushi={props.currentSushi} updateSushiCount={props.updateSushiCount} />
      </div>
    </Fragment>
  )
}

export default SushiContainer