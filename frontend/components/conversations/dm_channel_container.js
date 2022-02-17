import { connect } from 'react-redux';
import DMChannel from './dm_channel';
import { fetchConversation } from '../../actions/dm_channel_actions';
import { createDM, receiveDM, updateDM, deleteDM } from '../../actions/direct_message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    conversationMessages: Object.values(state.entities.conversationMessages),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
    createDM: (conversationId, dm) => dispatch(createDM(conversationId, dm)),
    receiveDM: (dm) => dispatch(receiveDM(dm)),
    updateDM: (dm) => dispatch(updateDM(dm)),
    deleteDM: (dm) => dispatch(deleteDM(dm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DMChannel)