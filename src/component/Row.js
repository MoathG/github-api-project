import React, { Component } from 'react';

export default class Row extends Component {
    render() {
        const {repos} = this.props

        return (
            <React.Fragment>
                {repos.map((elem, i) => {
                    return <tr>
                                <td>{i + 1}</td>
                                <td>{elem.name}</td>
                                <td>{elem.language}</td>
                                <td>
                                    <a className="btn btn-secondary" href={elem.html_url} > {elem.name} </a>
                                </td>
                            </tr>
                })}
                
            </React.Fragment>
        )
    }
}
