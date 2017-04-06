import React from 'react';
import axios from 'axios';

export default class OnePusheen extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props, {
      catName: []
    })
  }
  componentDidAmount() {
    axios.get('/api/pusheens/:pusheenName')
      .then(res => res.data)
      .then(catName => this.setState({ catName }));
  }
  render () {
    return (
      <div>
        <div>
          {
            this.state.cateName && this.state.cateName.map(cat => {
              return (
                <div  key={cat.id}>
                  <h3>{ cat. name }</h3>
                  <img src={ cat.image} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

