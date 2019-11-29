import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Activity = props => (
  <tr>
    <td>{props.activity.activityName}</td>
    <td>{props.activity.description}</td>
    <td>{props.activity.weight}</td>
    <td>{props.activity.repeats}</td>
  </tr>
)

export default class ActivitiesList extends Component {
  
  constructor(props) {
    super();
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/activities/' + this.props.match.params.day)
     .then(response => {
       this.setState({ activities: response.data.foundActivities });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  activitiesList() {
    return this.state.activities.map(currentActivities => {
      return <Activity activity={currentActivities} key={currentActivities._id}/>;
    })
  }

  render() {
    return (
      <div>
  <h3>Logged Activities</h3>
  <table className="table">
    <thead className="thead-light">
      <tr>
        <th>Activity</th>
        <th>Description</th>
        <th>Weight</th>
        <th>Repeats</th>
      </tr>
    </thead>
    <tbody>
      { this.activitiesList() }
    </tbody>
  </table>
</div>
    )
  }
}