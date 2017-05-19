import React from 'react'

const tellSecret = process.env.SECRET;

console.log("Secret: ", tellSecret);
console.log("Process.env: ", process.env);
console.log(process.env.PORT)

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
