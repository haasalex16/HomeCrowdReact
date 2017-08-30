import React from 'react';
import PropTypes from 'prop-types';
import {
  gql,
  graphql,
} from 'react-apollo';

function LeagueFiltersList(props) {
  if (props.loading) {
    return <p>Getting Filters</p>;
  }
  if (props.error) {
    return <p>{props.error.message}</p>;
  }
  return (
    <nav className='nav-container'>
      { props.allLeagues.map((league) => {
        return (
          <div
            className='nav-button'
            key={league.id}
            onClick={() => props.onClick(league.name, league.iconUrl)}
            role='presentation'
          >
            <img className='nav-icon' src={league.iconUrl} alt={league.name} />
            <p className='label-text'>{league.name}</p>
            <p className='label-text-mobile'>{league.name}</p>
          </div>
        );
      }) }
    </nav>
  );
}

LeagueFiltersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  allLeagues: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

const teamsListQuery = gql`
  query {
    allLeagues {
      name
      iconUrl
    }
  }
`;

const LeagueFilters = graphql(teamsListQuery, {
  props: ({ data: { loading, error, allLeagues } }) => ({
    loading,
    error,
    allLeagues,
  }),
})(LeagueFiltersList);

export default LeagueFilters;
