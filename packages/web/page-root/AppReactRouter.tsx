import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { Home } from '../views/Home';

export class AppReactRouter extends React.Component {
  public render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <Route exact path='/' component={ Home } />
      </div>
    );
  }
}
