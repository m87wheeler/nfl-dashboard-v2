import React from 'react'
import './App.css'
import Dropdown from './components/Dropdown/Dropdown'
import TeamBio from './components/TeamBio/TeamBio'
import LatestResults from './components/LatestResults/LatestResults'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      teamLoading: true,
      teamData: [],
      currentTeamId: '134946', // Arizona Cardinals
      currentTeamObj: {}
    }
    this.handleChangeChild = this.handleChangeChild.bind(this)
  }

  async componentDidMount() {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391');
    const json = await response.json();
    this.setState({
      teamData: json.teams,
      teamLoading: false,
    })
  }

  handleChangeChild(event) {
    this.setState({
      currentTeamId: event.target.value
    })
  }

  render() {
    
    return (
      <>
        <header> 
          {this.state.teamLoading ? (
            <p>teamLoading...</p>
          ) : (
            <Dropdown 
              data={this.state.teamData}
              loading={this.state.teamLoading}
              id={'idTeam'}
              name={'strTeam'}
              action={this.handleChangeChild}
            />
          )}
        </header>
        <TeamBio 
          teamId={this.state.currentTeamId}
          team={''}
          coach={''}
          yearFormed={''}
          stadium={''}
          city={''}
          capacity={''}
          website={''}
          biography={''}
          badge={''}
        />
        <LatestResults 
          teamId={this.state.currentTeamId}
        />
      </>
    )
  }
}

export default App