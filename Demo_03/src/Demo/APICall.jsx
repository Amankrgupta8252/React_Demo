import React, { Component } from 'react'

export default class APICall extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/Amankrgupta8252')
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // 👀 check response
        this.setState({ user: result });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h1>GitHub API Call</h1>
        <h2>This is API Call Component</h2>

        {this.state.user ? (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <img
              src={this.state.user.avatar_url}
              alt={this.state.user.login}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <h3>{this.state.user.name}</h3>
            <p><b>Username:</b> {this.state.user.login}</p>
            <p><b>Public Repos:</b> {this.state.user.public_repos}</p>
            <p><b>Followers:</b> {this.state.user.followers}</p>
            <a href={this.state.user.html_url} target="_blank" rel="noreferrer">
              Visit GitHub Profile
            </a>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    );
  }
}
