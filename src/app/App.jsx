import React, { Component } from 'react';
import * as timeago from 'timeago.js';
// Components
import Heading from './Heading.jsx';
import Row from './Row.jsx';

class Headings extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.headings.map((heading, i) => {
            return <Heading key={i} heading={heading} />;
          })}
        </tr>
      </thead>
    );
  }
}
class Rows extends Component {
  render() {
    return (
      <tbody>
        {this.props.data.map((row, i) => {
          return <Row key={i} change={row} />;
        })}
      </tbody>
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    setInterval(async () => {
      const uri = 'https://openlibrary.org/recentchanges.json?limit=10';
      const res = await fetch(uri);
      const data = await res.json();
      const dataFormated = this.formatter(data);
      this.setState({ data: dataFormated });
    }, 1000);
  }

  formatter(data) {
    return data.map((data, i) => {
      return {
        id: i,
        when: timeago.format(data.timestamp),
        who: data.author.key,
        description: data.comment,
      };
    });
  }

  render() {
    return (
      <div className="container p-4">
        <h1>{this.props.title}</h1>
        <table className="table table-bordered">
          <Headings headings={this.props.headings} />
          <Rows data={this.state.data} />
        </table>
      </div>
    );
  }
}

export default App;
