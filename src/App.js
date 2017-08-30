import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo';
import React from 'react';
import './App.css';
import ListPage from './components/ListPage/index';
import TeamFilters from './components/TeamFilters/index';
import LeagueFilters from './components/LeagueFilters/index';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.graph.cool/simple/v1/cj6f5q4625qgj0101z9enh5qe'),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueName: 'B10',
      teamSrc: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png&transparent=true',
      teamFiltersActive: false,
      selectedTeam: 'University of Michigan',
    };
  }

  handleClick(selectedTeam, teamSrc) {
    this.setState({
      selectedTeam,
      teamSrc,
      teamFiltersActive: false,
    });
  }

  handleLeagueClick(leagueName) {
    this.setState({
      leagueName,
      teamFiltersActive: true,
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <header>
            <div
              className='active-team'
            >
              <img className='filter-icon' src={this.state.teamSrc} alt={this.state.leagueName} />
            </div>
            <LeagueFilters
              teamFiltersActive={this.state.teamFiltersActive}
              onClick={leagueName => this.handleLeagueClick(leagueName)}
            />
            <TeamFilters
              teamFiltersActive={this.state.teamFiltersActive}
              leagueName={this.state.leagueName}
              onClick={(selectedTeam, teamSrc) => this.handleClick(selectedTeam, teamSrc)}
            />
          </header>
          <span className='main'>
            <ListPage
              selectedTeam={this.state.selectedTeam}
            />
            <span className='map-container'>MAP CONTAINER</span>
          </span>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
