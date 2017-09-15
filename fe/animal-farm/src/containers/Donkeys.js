import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DonkeyList from '../components/DonkeyList';
import { getDonkeys } from '../reducers';
import { populateDonkeys } from '../actions/actions';

const mapStateToProps = (state) => ({
  donkeys: getDonkeys(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPopulateClick: populateDonkeys.bind(null, dispatch)
});

const Donkeys = connect(
  mapStateToProps, 
  mapDispatchToProps
)(DonkeyList);

export default Donkeys;
