import React, { Component } from 'react';
import axios from 'axios';
import Input from './component/Input';
import Row from './component/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';


export default class App extends Component {  
  state = {
    repos : [],
    isLoaded : false
  };

  getRepos = (searchTerm) => {
    axios.get(`http://api.github.com/users/${searchTerm}/repos`)
    .then(res => {
      console.log('hello', res)
      this.setState({
        repos : res.data,
        isLoaded : true
      })
    }).catch(err => {
      console.log(err)
      this.setState({
        repos : [],
        isLoaded : false
      })
    }) 
  }

  callGitHubApi = () => {
    console.log('');
  }

  render() {
    return (
      <div>
        <Input getRepos = {this.getRepos} />
          {
            (this.state.isLoaded === false) ? 
            <h3>Hello world</h3> 
            :

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Number </th>
                  <th> Name </th>
                  <th> Language </th>
                  <th> URL </th>
                </tr>
              </thead>
              <tbody>

                  <Row repos = {this.state.repos} />

              </tbody>
            </Table>
          }
      </div>
    )
  }
}

