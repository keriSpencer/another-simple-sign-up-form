import React, { Component } from 'react'
import '../styles/App.css'
import Person from './Person'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      city: '',
      state: '',
      country: '',
      people: []
    }
  }

  _name = e => {
    e.preventDefault()

    this.setState({
      name: e.target.value
    })
  }

  _email = e => {
    e.preventDefault()

    this.setState({
      email: e.target.value
    })
  }

  _city = e => {
    e.preventDefault()

    this.setState({
      city: e.target.value
    })
  }

  _state = e => {
    e.preventDefault()

    this.setState({ state: e.target.value })
  }

  _country = e => {
    e.preventDefault()

    this.setState({
      country: e.target.value
    })
  }

  _submit = e => {
    e.preventDefault()

    const newPerson = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country
    }

    const people = this.state.people
    people.push(newPerson)
    e.target.reset()

    this.setState({
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this._submit}>
          <div>
            <div>
              <h2>About You</h2>
              <div className="aboutYou">
                <input type="text" onChange={this._name} placeholder="Name" />
                <input type="email" onChange={this._email} placeholder="Email" />
              </div>
            </div>
            <div>
              <h3>Where you Live</h3>
              <input type="text" onChange={this._city} placeholder="City" />
              <input type="text" onChange={this._state} placeholder="State" />
              <input type="text" onChange={this._country} placeholder="Country" />
            </div>
            <div>
              <button type="submit">Submit!</button>
            </div>
          </div>
        </form>
        <div>
          {this.state.people.map((person, i) => {
            return <Person data={person} key={i} />
          })}
        </div>
      </div>
    )
  }
}

export default App
