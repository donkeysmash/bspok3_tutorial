import { connect } from 'react-redux';
import DonkeyList from '../components/DonkeyList';
import { getDonkeys } from '../reducers';

const mapStateToProps = (state) => ({
  donkeys: getDonkeys(state)
});

const Donkeys = connect(mapStateToProps)(DonkeyList);

export default Donkeys;
