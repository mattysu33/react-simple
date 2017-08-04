import React, { Component } from 'react'; //Because it will turn the
                           //components into React.createelement
class SearchBar extends Component {
  //this function does this
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  //this function does that
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
