import React from 'react'

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail} from './components'

import ApiKey from './api/key/apiKey'

import youtube from './api/youtube'


class App extends React.Component {

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: ApiKey
      }
    });
    console.log(response)
  }

  render () {
    return (
      <Grid justify='center' container spaceing={16}>
        <Grid item xs={12}>
          <Grid container spaceing={16}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* Video List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App