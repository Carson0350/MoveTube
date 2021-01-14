import React from 'react'

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail} from './components'

import youtube from './api/youtube'


class App extends React.Component {
  render () {
    return (
      <Grid justify='center' container spaceing={16}>
        <Grid item xs={12}>
          <Grid container spaceing={16}>
            <Grid item xs={12}>
              {/* SEARCH BAR*/}
            </Grid>
            <Grid item xs={8}>
              {/* Video details */}
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