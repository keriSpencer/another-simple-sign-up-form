import React, { Component } from 'react'

class Person extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.data.name}
          </li>
          <li>
            {this.props.data.email}
          </li>
          <li>
            {this.props.data.city}
          </li>
          <li>
            {this.props.data.state}
          </li>
          <li>
            {this.props.data.country}
          </li>
        </ul>
      </div>
    )
  }
}

export default Person
