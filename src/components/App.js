import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  state = {
    images: []
  };
  onFormSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container">
        <p></p>
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui segment">
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
