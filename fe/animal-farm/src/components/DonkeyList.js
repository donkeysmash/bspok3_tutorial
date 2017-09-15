import PropTypes from 'prop-types';
import React from 'react';
import Donkey from './Donkey'

const DonkeyList = ({ donkeys, onPopulateClick }) => {
  const {isFetching, receivedAt, data} = donkeys;
  return (
    <div>
      {isFetching? 
        (<h2>Loading...</h2>) :
        (<ul>
          {data.map(donkey => 
            <Donkey
              key={donkey.id}
              {...donkey}
            />
          )}
        </ul>)
      }
      <button onClick={onPopulateClick(10)}>populate</button>
      <p>{(new Date(receivedAt)).toString()}</p>
    </div>
  );
};

DonkeyList.propTypes = {
};

export default DonkeyList;


/*

*/
