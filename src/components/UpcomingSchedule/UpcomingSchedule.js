import React from 'react'
import './UpcomingSchedule.css'

export default class UpcomingSchedule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            gameData: []
        }
        this.fetchData = this.fetchData.bind(this)
    }

    // fetches from API on call with teamId as parameter
    async fetchData(teamId) {
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${teamId}`);
        const json = await response.json();
        this.setState({
            gameData: json.events,
            loading: false
        })
    }

    componentDidMount() {  
        this.fetchData(this.props.teamId);    
    }

    componentDidUpdate(prevProps) {
        if (this.props.teamId !== prevProps.teamId) {
            this.fetchData(this.props.teamId)
        }
    }


    render() {
        let mappedData;
        if (this.state.gameData !== null) {
            mappedData = this.state.gameData.map(item => {
                return (
                    <tr key={item.idEvent}>
                        <td className='date'>{item.dateEvent}</td>
                        <td className='name home-name'>{item.strHomeTeam}</td>
                        <td className='logo home-logo'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png' alt='NFL Logo' />
                        </td>
                        <td className='score home-score'>{item.intHomeScore}</td>
                        <td className='hyphen'>-</td>
                        <td className='score away-score'>{item.intAwayScore}</td>
                        <td className='logo away-logo'>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png' alt='NFL Logo' />
                        </td>
                        <td className='name away-name'>{item.strAwayTeam}</td>
                        <td className='stadium'>{this.props.stadium}</td>
                    </tr>
                )
            })
        } else {
            mappedData = <tr colSpan='10' className='no-data'><td>There are no upcoming games.</td></tr>
        }

        return (
            <>
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : (
                    <table className='upcoming-schedule'>
                        <tbody>
                            <tr>
                                <th colSpan='10'>Upcoming Games</th>
                            </tr>
                            {mappedData}
                        </tbody>
                    </table>
                )}
            </>
        )
    }
}