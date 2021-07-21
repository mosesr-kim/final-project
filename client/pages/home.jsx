import React from 'react';
import Header from '../components/header.jsx';
// import SearchResults from '../components/searchResults.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: '',
      location: '',
      searchResults: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchParams) {
    const req = {
      method: 'GET',
      headers: searchParams
    };

    fetch('/api/businesses', req)
      .then(response => response.json())
      .then(data => {
        this.setState({
          restaurant: searchParams.restaurant,
          location: searchParams.location,
          searchResults: data
        });
        // console.log(this.state);
      });
  }

  render() {
    return (
      <>
        <Header onSubmit={ this.handleSearch } />
      </>
    );
  }
}
