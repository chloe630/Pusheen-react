import React from 'react';
import {Link} from 'react-router';
import AllPusheens from './AllPusheens';
import OnePusheen from './OnePusheen';


/**
 * This App Component should be the home page where we first see the "All the Pusheens" link
 */

class App extends React.Component {
  constructor () {
    super();
  }


  render () {

    return (
      <div>
        <div style = {{backgroundColor: 'lightpink'}}>
          <h1 style={{textAlign: 'center',}}> Welcome to React with Pusheen! </h1>
        </div>
        <hr />
        <div>
          <h3>
            {this.props.chlidern}
            <Link to = {'/allPusheens'}>All the Pusheens!</Link>
          </h3>

        </div>
        <hr />
      </div>
    );
  }
}

export default App;
