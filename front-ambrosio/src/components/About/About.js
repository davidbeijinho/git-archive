import React, { Component } from 'react';
import moment from 'moment';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: null,
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({ status: data })
                console.log('Status info', data)
            });
    }

    getStatusInfo() {
        if (this.state.status) {
            return (
                <ul>
                    <li>Started: {moment(this.state.status.started).format('DD/MM/YYYY HH:MM:SS')}</li>
                    <li>Uptime: {moment(this.state.status.started).fromNow()}</li>
                </ul>
            )
        } else {
            return <p>...Loading</p>
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>API information</h1>
                {this.getStatusInfo()}
            </div>
        );
    }
}

export default About;
