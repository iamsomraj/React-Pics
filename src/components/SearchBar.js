import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  onInputChangeHandler = event => {
    this.setState({
      term: event.target.value
    });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmitHandler}>
          <div className="ui field">
            <label htmlFor="search">
              <h1>Image Search</h1>
            </label>
            <input
              name="search"
              type="text"
              value={this.state.term}
              onChange={this.onInputChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
