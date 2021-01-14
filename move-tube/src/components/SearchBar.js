import React from 'react'

import { Paper, TextField} from '@material-ui/core'

class SearchBar extends React.Component {

  state = {
    searchTerm: '',
  }

  // this refers to class...workaround for binding this
  // console.log(event.target.value)
  handleChange = (event) => {this.setState({searchTerm: event.target.value})};

  handleSubmit = (event) => {

    // console.log(searchTerm)
    const { searchTerm } = this.state;
    const { OnFormSubmit  } = this.props;

    OnFormSubmit(searchTerm)

    event.preventDefault();
  }

  render () {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search....." onChange={this.handleChange}/>
        </form>
      </Paper>
    )
  }
}

export default SearchBar