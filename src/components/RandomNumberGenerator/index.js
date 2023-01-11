// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateRandom = () => {
    this.setState({num: Math.floor(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="container">
        <div className="box">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateRandom} className="btn">
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
