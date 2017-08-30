import React from 'react';
import PropTypes from 'prop-types';
import {
  gql,
  graphql,
} from 'react-apollo';

class FiltersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueName: this.props.leagueName,
    };
  }

  render() {
    if (this.props.loading) {
      return null;
      // return <p>Getting Filters</p>;
    }
    if (this.props.error) {
      return <p>{this.props.error.message}</p>;
    }

    const filters = this.props.League.teams.map((team) => {
      return (
        <div
          className='filter-button'
          key={team.id}
          onClick={() => this.props.onClick(team.name, team.iconUrl)}
          role='presentation'
        >
          <img className='filter-icon' src={team.iconUrl} alt={team.name} />
          <p className='label-text'>{team.name}</p>
          <p className='label-text-mobile'>{team.nickname}</p>
        </div>
      );
    });

    return (
      <div className={this.props.teamFiltersActive ? 'filter-container active' : 'filter-container'}>
        { filters }
      </div>
    );
  }
}

FiltersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  teamFiltersActive: PropTypes.bool.isRequired,
  leagueName: PropTypes.string.isRequired,
  error: PropTypes.object,
  League: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

const teamsListQuery = gql`
  query teamsListQuery($leagueName: String!) {
    League(name: $leagueName) {
      teams (orderBy: name_ASC) {
        name
        iconUrl
        nickname
      }
    }
  }
`;

const TeamFilters = graphql(teamsListQuery, {
  props: ({ data: { loading, error, League } }) => ({
    loading,
    error,
    League,
  }),
})(FiltersList);

export default TeamFilters;
