import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'
import Dropdown from './components/Dropdown/Dropdown'
import TeamBio from './components/TeamBio/TeamBio'
import LatestResults from './components/LatestResults/LatestResults'
import UpcomingSchedule from './components/UpcomingSchedule/UpcomingSchedule'
import QuickStat from './components/QuickStat/QuickStat'
import PopupWindow from './components/PopupWindow/PopupWindow'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      teamLoading: true,
      teamData: [],
      currentTeamId: '134946',
      currentTeamObj: {},
      bioDisplay: 'none',
      stadiumDisplay: 'none'
    }
    this.handleChange = this.handleChange.bind(this)
    this.filterTeamById = this.filterTeamById.bind(this)
    this.handlePopup = this.handlePopup.bind(this)
  }


  async componentDidMount() {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391');
    const json = await response.json();
    this.setState({
      teamData: json.teams,
      teamLoading: false,
    })
    this.filterTeamById(this.state.currentTeamId)
  }


  filterTeamById(id) {
    for ( let i = 0 ; i < this.state.teamData.length ; i++ ) {
      if ( id === this.state.teamData[i].idTeam ) {
        this.setState({currentTeamObj: this.state.teamData[i]})
      }
    }
  }


  handleChange(event) {
    this.setState({
      currentTeamId: event.target.value
    })
    this.filterTeamById(event.target.value)
  }


  handlePopup() {
    this.state.bioDisplay === 'none' ? (
      this.setState({bioDisplay: 'block'})
    ) : (
      this.setState({bioDisplay: 'none'})
    )
    console.log(this.state.bioDisplay)
  }


  render() {

    console.log('In render', this.state.currentTeamObj)

    return (
      <div id='app'>
        <Sidebar
          action={this.handlePopup}
        > 
          {this.state.teamLoading ? (
            <p>teamLoading...</p>
          ) : (
            <Dropdown 
              data={this.state.teamData}
              loading={this.state.teamLoading}
              id={'idTeam'}
              name={'strTeam'}
              action={this.handleChange}
            />
          )}

          <TeamBio 
            teamId={this.state.currentTeamId.idTeam}
            team={this.state.currentTeamObj.strTeam}
            coach={this.state.currentTeamObj.strManager}
            yearFormed={this.state.currentTeamObj.intFormedYear}
            stadium={this.state.currentTeamObj.strStadium}
            city={this.state.currentTeamObj.strStadiumLocation}
            capacity={this.state.currentTeamObj.intStadiumCapacity}
            website={this.state.currentTeamObj.strWebsite}
            logo={this.state.currentTeamObj.strTeamLogo}
            badge={this.state.currentTeamObj.strTeamBadge}
          />
        </Sidebar>
        <MainContent>
          <Header />
          <LatestResults 
            teamId={this.state.currentTeamId}
            stadium={this.state.currentTeamObj.strStadium}
          />
          <UpcomingSchedule
            teamId={this.state.currentTeamId}
            stadium={this.state.currentTeamObj.strStadium}
          />
          <div className='quick-stat-container'>
            <QuickStat 
              statTitle={''}
              statData={''}
            />
          </div>
        </MainContent>
        <PopupWindow 
          display={this.state.bioDisplay}
          title={this.state.currentTeamObj.strTeam}
          teamLogo={this.state.currentTeamObj.strTeamLogo}
          teamBio={this.state.currentTeamObj.strDescriptionEN}
          action={this.handlePopup}
        />
        <PopupWindow 
          display={this.state.stadiumDisplay}
          title={this.state.currentTeamObj.strTeam}
          teamLogo={this.state.currentTeamObj.strTeamLogo}
          teamBio={this.state.currentTeamObj.strDescriptionEN}
          action={this.handlePopup}
        />
      </div>
    )
  }
}

export default App