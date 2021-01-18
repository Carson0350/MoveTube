import React from 'react'

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail, VideoList} from './components'

import ApiKey from './api/key/apiKey'

import youtube from './api/youtube'

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: ApiKey,
        q: searchTerm,
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })

    console.log(response.data.items);
  }

  render () {

    const { selectedVideo, videos } = this.state

    return (
      <Grid justify='center' container spaceing={10}>
        <Grid item xs={12}>
          <Grid container spaceing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App