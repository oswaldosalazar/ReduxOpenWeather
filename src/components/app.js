import React from 'react'

const tellSecret = process.env.SECRET;

console.log("Secret: ", tellSecret)

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Change me again</h1>
        <h2>Secret is: {tellSecret}</h2>
      </div>
    )
  }
}
