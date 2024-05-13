// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <h1 className="head1">
            The Button has been clicked <span className="spanEl">{count} </span>
            times
          </h1>
          <p className="para1">Click the button to increase the count!</p>
          <button className="btn1" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
