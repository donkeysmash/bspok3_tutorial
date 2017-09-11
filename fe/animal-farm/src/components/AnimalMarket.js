import React from 'react';
import DonkeyList from './DonkeyList';

const donkeys = [{
   id: 0,
   name: 'testing donkey 1',
   age: 123213
 }, {
   id: 1,
   name: 'testing lsapdjf 2',
   age: 12
 }
]

const AnimalMarket = () => (
  <div>
    <DonkeyList donkeys={donkeys}/>
  </div>
);


export default AnimalMarket;
