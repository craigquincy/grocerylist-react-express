import React, { Component } from 'react';
import './App.css';
import GroceryList from './components/GroceryList'

const API  =  process.env.API || 'http://localhost:3001/groceries'

class App extends Component {
  constructor(){
    super()
    this.state = {list: []}
  }

  async  componentDidMount() {
    const response = await fetch(API)
    const json = await response.json()

    this.setState({ list: json })
  }

  createItem = async (item) => {
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    const json = await response.json()
    console.log("adding to state", json)

    const list = [...this.state.list, json ]
    this.setState({ list })
  }

  render() {
    return (
      <div className="App">
        <h1>
          My Grocery List
        </h1>
        <GroceryList list={this.state.list} createItem={this.createItem} />
      </div>
    );
  }
}

export default App;
