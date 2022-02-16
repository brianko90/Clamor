import * as ConversationMembershipApiUtil from '../util/conversation_membership_util';
export const RECEIVE_CONVERSATION_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";
export const REMOVE_CONVERSATION_MEMBERSHIP = "REMOVE_SERVER_MEMBERSHIP";
// export const RECEIVE_SERVER_MEMBERSHIP_ERRORS = "RECEIVE_SERVER_MEMBERSHIP_ERRORS";

const receiveMembership = payload => {
  return {
    type: RECEIVE_CONVERSATION_MEMBERSHIP,
    payload
  }
}

const removeMembership = payload => {
  return {
    type: REMOVE_CONVERSATION_MEMBERSHIP,
    payload
  }
}

// const receiveServerMembershipErrors = errors => {
//   return {
//     type: RECEIVE_SERVER_MEMBERSHIP_ERRORS,
//     errors
//   }
// }


export const createConversationMembership = membership => dispatch => {
  return ConversationMembershipApiUtil.createConversationMembership(membership)
    .then((payload) => dispatch(receiveMembership(payload)))
      // error => dispatch(receiveServerMembershipErrors(error.responseJSON)))
}

export const destroyConversationMembership = membershipId => dispatch => {
  return ConversationMembershipApiUtil.destroyConversationMembership(membershipId)
    .then(() => dispatch(removeMembership(membershipId)))
      // error => dispatch(receiveServerMembershipErrors(error.responseJSON)))
}