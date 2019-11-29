import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainPage extends Component {

  render() {
    return (
      <div className="days">
          <Link className="btn btn-secondary btn-lg btn-block" to="/activities/monday">Monday</Link>
          <Link className="btn btn-secondary btn-lg btn-block"  to="/activities/tuesday">Tuesday</Link>
          <Link className="btn btn-secondary btn-lg btn-block"  to="/activities/wednesday">Wednesday</Link>
          <Link className="btn btn-secondary btn-lg btn-block"  to="/activities/thursday">Thursday</Link>
          <Link className="btn btn-secondary btn-lg btn-block"  to="/activities/friday">Friday</Link>
          <Link className="btn btn-secondary btn-lg btn-block"  to="/activities/saturday">Saturday</Link>
          <Link className="btn btn-secondary btn-lg btn-block"  to="/activities/sunday">Sunday</Link>
      </div>
    );
  }
}
