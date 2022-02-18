import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import moment from 'moment';

class Sensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensor: null,
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + '/api/sensor?filter[order]=id%20DESC&filter[limit]=3')
      .then(response => response.json())
      .then(data => {
        this.setState({ sensor: data })
        console.log('Sensor info', data)
      });
  }

  getSensorInfo() {
    if (this.state.sensor && this.state.sensor.length) {
      return (
        <List divided relaxed floated="left">
          {this.state.sensor.map((values) =>
            <List.Item key={values.id}>
              <List.Content>
                <List.Header>{values.temperature}</List.Header>
                <List.Description>{values.id} - {moment(values.created).fromNow()}</List.Description>
              </List.Content>
            </List.Item>
          )}
        </List>
      )
    } else if (this.state.sensor) {
      return <p>No Sensor Information</p>
    } else {
      return <p>...Loading</p>
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Sensor information</h1>
        {this.getSensorInfo()}
      </div>
    );
  }
}

export default Sensor;
