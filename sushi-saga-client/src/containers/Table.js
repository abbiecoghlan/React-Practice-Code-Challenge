import React, { Fragment, useState } from 'react'


const Table = (props) => {

  const [wallet, setWallet] = useState(0)

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  // function handleChange(event){

  //   props.addToBudget(event.target.value)
  // }


  function handleSubmit(event){
    event.preventDefault()
    props.addToBudget(parseInt(wallet))
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <div>
      <form  onSubmit={event => handleSubmit(event)} >
      <h3>Running low on funds?</h3>
      <h6>Enter a number between 1-100 below.</h6>
          <input type="number" name="budget" placeholder="0" min="1" max="100" onChange={(e) => setWallet(e.target.value)}/>
          <br/>
          <input type="submit" name="submit" value="Add to Wallet" className="submit"/>
        </form>

      </div>      
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table