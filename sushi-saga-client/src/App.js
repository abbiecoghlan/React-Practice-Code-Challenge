import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      allSushi: [],
      budget: 100,
      eatenSushi: [],
      sushiCount: 0,
      filteredSushi: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:4000/sushis")
    .then((response) => response.json())
    .then(sushi => {
      this.setState({
        allSushi: sushi,
        filteredSushi: sushi
      })

    })

  }

  currentSushi = () => {
    const sushi = this.state.filteredSushi.slice(this.state.sushiCount, this.state.sushiCount + 4)
    return sushi
  }

  filterEatenSushi = () => {
    const filteredSushi = this.state.allSushi.filter((sushi) => !this.state.eatenSushi.includes(sushi))
    return filteredSushi
  }

  updateSushiCount = () => {

    if (this.state.sushiCount >= this.state.filteredSushi.length - 4) {
      this.setState({
        sushiCount: 0,
        filteredSushi: this.filterEatenSushi()
        })

    } else {
    this.setState({
    sushiCount: this.state.sushiCount + 4
    })
    }
  }



  eatSushi = (sushi) =>{
    if (this.state.budget - sushi.price >= 0){
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      budget: this.state.budget - sushi.price
    })
    console.log("you want to eat", sushi)
    console.table(sushi)
  }
  else {
    alert("you don't have enough money left!")
  }
  }

  addToBudget = (amount) => {
    this.setState({
      budget: this.state.budget + amount
      })
  }




 

  render() {
    return (
      <div className="app">
        <SushiContainer current={this.currentSushi()} updateSushiCount={this.updateSushiCount} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} />
        <Table addToBudget={this.addToBudget} eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;


//App - (fetch in app under componenetDidMount), 
            ////state - start as an empty array, set state after fetch to have all the sushi
            //// state: budget
            /// pass the sushi container the sushi array from state as a prop  
            /// state: eaten sushi = []
      
  //SushiContainer
              //// only display 4 sushi at a time (this will get passed as a prop to the more button)
    //Sushi
        // on click that removes the component and adds an empty plate to the plate array
        // update the budget 
        // dont let the customer eat it if they dont have the budget  
  
    //MoreButton 
              ///have an onclick that calls the display sushi function 

  //Table 
