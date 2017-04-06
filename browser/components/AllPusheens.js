import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
// import OnePusheen from './OnePusheen';

export default class AllPusheens extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }
  componentDidMount() {
    axios.get('/api/pusheens')
      .then(cats => this.setState({ cats }));
  }
  render () {
    console.log('helloooo', cats);
    return (
      <div>
        <h3>Cats!!!</h3>
        <div>
          {
            this.state.cats.map(cat => {
              return (
                <div key={cat.id}>
                  <Link to={`/singlePusheen/${cat.id}`}>{ cat.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

