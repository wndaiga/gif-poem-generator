import React from 'react'
import { Link } from 'react-router-dom'

class WelcomePage extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h2>Welcome to the most wonderfully bizarre poem generator on the web.</h2>
        <h3>Literature for the meme generation: putting the AI in haiku.</h3>
        <button><Link to ="/instructions">Instructions</Link></button>
      </React.Fragment>
    )
  }
}


export default WelcomePage