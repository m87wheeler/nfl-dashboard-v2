import React from 'react'
import './TeamBio.css'

export default class TeamBio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamId: ''
        }
    }

    render() {

        return (
            <div className='bio-container'>
                <h1>{this.props.team}</h1>
                <div className='grid-container'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Head Coach:</td>
                                <td>{this.props.coach}</td>
                            </tr>
                            <tr>
                                <td>Year Formed:</td>
                                <td>{this.props.yearFormed}</td>
                            </tr>
                            <tr>
                                <td>Stadium:</td>
                                <td>{`${this.props.stadium}, ${this.props.city}`}</td>
                            </tr>
                            <tr>
                                <td>Capacity:</td>
                                <td>{this.props.capacity}</td>
                            </tr>
                            <tr>
                                <td>Official Website</td>
                                <td>{this.props.website}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='team-bio'>
                        <p>{this.props.biography}</p>
                    </div>
                    <div className='team-badge'>
                        <img src={this.props.badge} alt="Team Badge" />
                    </div>
                </div>
            </div>
        )
    }
}

// strTeam: "Arizona Cardinals",
// intFormedYear: "1898",
// strManager: "Kliff Kingsbury",
// strStadium: "State Farm Stadium",
// strStadiumThumb: "https://www.thesportsdb.com/images/media/team/stadium/ouc5zz1506108833.jpg",
// strStadiumDescription: "University of Phoenix Stadium, opened August 1, 2006, is a multipurpose football stadium located in Glendale, Arizona, west of Phoenix. It is the home of the Arizona Cardinals of the National Football League (NFL) and the annual Fiesta Bowl, and replaced Tempe's Sun Devil Stadium as the Valley of the Sun's main outdoor stadium. The stadium is adjacent to the Gila River Arena and it features the first fully retractable natural grass playing surface built in the United States on top of an AirField Systems drainage system. An opening on one side of the stadium allows the playing field to move to the exterior of the building, allowing the entire natural turf playing surface to be exposed to daylight and also allowing the floor of the stadium to be used for any other purpose (such as seating for concerts) without damaging the turf. The stadium has hosted the Fiesta Bowl, the 2007 BCS National Championship Game, Super Bowl XLII, and the 2011 BCS National Championship Game, a game that it hosted every four years, which set the venue's entertainment attendance record of 78,603 on January 11, 2011. It will host the Pro Bowl, Super Bowl XLIX and CONCACAF Gold Cup matches in 2015, and the NCAA Final Four in 2017. The University of Phoenix acquired the naming rights in September 2006, shortly after the stadium had opened under the name Cardinals Stadium. The "University of Phoenix" name is applied as a corporate sponsor, and not as the home stadium of the University, which has no intercollegiate athletics program.",
// strStadiumLocation: "Glendale, Arizona",
// intStadiumCapacity: "63400",
// strWebsite: "www.azcardinals.com",
// strDescriptionEN: "The Arizona Cardinals are a professional American football team based in Glendale, Arizona. They currently are members of the West division of the National Football Conference (NFC) in the National Football League (NFL). The Cardinals were founded in 1898, and are the oldest continuously run professional sports team in the United States outside of baseball. The team was established in Chicago in 1898 and was a charter member of the NFL in 1920. Along with the Chicago Bears, the club is one of two NFL charter member franchises still in operation since the league's founding. (The Green Bay Packers were an independent team until they joined the NFL in 1921). The club then moved to St. Louis, Missouri in 1960 and played in that city through 1987 (sometimes referred to as the "Football Cardinals" and/or the "Big Red" to avoid confusion with the Major League Baseball St. Louis Cardinals). Other less commonly used nicknames were the "Gridbirds" (used only by a local newspaper columnist) or "Cardiac Cards" (used only to refer to the 1975 team). Before the 1988 NFL season, the team moved to Tempe, Arizona, a college suburb east of Phoenix, and played their home games for the next 18 years at Arizona State University's Sun Devil Stadium. In 2006, the club began playing all home games at the newly constructed University of Phoenix Stadium in the northwestern suburb of Glendale, although the team's training facility is in Tempe. The franchise has two NFL championships, both while it was based in Chicago. The first occurred in 1925, but is the subject of controversy, with supporters of the Pottsville Maroons believing that Pottsville should have gotten the title. Their second title, and the first to be received through a championship game, came in 1947, two decades before the first Super Bowl game was played. In the six-plus decades since winning the championship in 1947, the team suffered many losing seasons, and currently hold the league's longest active championship drought. They have been to the playoffs six times and have won six playoff games, three of which were victories during their run in the 2008–09 NFL Playoffs. During that season, they won their only NFC Championship Game since the 1970 AFL-NFL Merger, and reached Super Bowl XLIII. The team has also won four division titles (1974, 1975, 2008, and 2009) since their 1947–1948 NFL championship game appearances. In 2012 the Cardinals became the first NFL franchise to lose 700 games since its inception. The franchise's all-time mark at the conclusion of the 2013 season is 511–716–39. From 1988 through 2012 (except 2005, when they trained in Prescott), the Cardinals conducted their annual summer training camp at Northern Arizona University in Flagstaff. The Cardinals moved their training camp to University of Phoenix Stadium in 2013.",
// strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xvuwtw1420646838.png",
// strTeamJersey: "https://www.thesportsdb.com/images/media/team/jersey/wwxqxv1471795600.png",
// strTeamLogo: "https://www.thesportsdb.com/images/media/team/logo/rbfpn21512746397.png"