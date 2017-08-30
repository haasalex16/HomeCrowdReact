import React from 'react';
import PropTypes from 'prop-types';
import {
  gql,
  graphql,
} from 'react-apollo';
import Bar from '../Bar/index';


const BarsList = ({ selectedTeam, data: { loading, error, Team } }) => {
  if (loading) {
    return (
      <div className='list-page'>
        Loading ...
      </div>);
  }
  if (error) {
    return <p className='list-page'>{error.message}</p>;
  }
  return (
    <div className='list-page'>
      { Team.bars.map(bar => <Bar key={bar.id} bar={bar} />) }
    </div>
  );
};

BarsList.propTypes = {
  data: PropTypes.object.isRequired,
};

const barsListQuery = gql`
query barsListQuery($selectedTeam: String!) {
  Team(name: $selectedTeam) {
    bars(orderBy: name_ASC) {
      id
      name
      phoneNumber
      address
      teams {
        id
        name
        iconUrl
      }
    }
  }
}
`;

const ListPage = graphql(barsListQuery, {
  options: ({ selectedTeam }) => ({ variables: { selectedTeam } }),
})(BarsList);

export default ListPage;
