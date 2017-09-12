import React from 'react';
import PropTypes from 'prop-types';
import {
  gql,
  graphql,
} from 'react-apollo';
import Bar from '../Bar/index';
import BarInfo from '../BarInfo/index';


const BarsList = (props) => {
  if (props.loading) {
    return (
      <div className='list-page'>
        Loading ...
      </div>);
  }
  if (props.error) {
    return <p className='list-page'>{props.error.message}</p>;
  }
  return (
    <div className='list-page'>
      <BarInfo
        barInfoActive={props.barInfoActive}
        barInfo={props.barInfo}
        handleCloseClick={props.handleCloseClick}
      />
      { props.Team.loyalties.map(loyalty => (
        <Bar
          key={loyalty.bar.id}
          bar={loyalty.bar}
          onClick={barInfo => props.handleBarClick(barInfo)}
        />),
      ) }
    </div>
  );
};

BarsList.propTypes = {
  data: PropTypes.object.isRequired,
};

const barsListQuery = gql`
query barsListQuery($selectedTeam: String!) {
  Team(name: $selectedTeam) {
    loyalties {
      bar {
        id
        name
        address
        website
        phoneNumber
        loyalties {
          team {
            name
            iconUrl
          }
          group {
            name
            website
          }
        }
      }
    }
  }
}
`;

const ListPage = graphql(barsListQuery, {
  options: ({ selectedTeam }) => ({ variables: { selectedTeam } }),
  props: ({ data: { loading, error, Team } }) => ({
    loading,
    error,
    Team,
  }),
})(BarsList);

export default ListPage;
