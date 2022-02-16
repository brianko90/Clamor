import * as ServerMembershipApiUtil from '../util/server_membership_util';
export const RECEIVE_SERVER_MEMBERSHIP = "RECEIVE_SERVER_MEMBERSHIP";
export const REMOVE_SERVER_MEMBERSHIP = "REMOVE_SERVER_MEMBERSHIP";
export const RECEIVE_SERVER_MEMBERSHIP_ERRORS = "RECEIVE_SERVER_MEMBERSHIP_ERRORS";

const receiveMembership = payload => {
  return {
    type: RECEIVE_SERVER_MEMBERSHIP,
    payload
  }
}

const removeServerMembership = payload => {
  return {
    type: REMOVE_SERVER_MEMBERSHIP,
    payload
  }
}

const receiveServerMembershipErrors = errors => {
  return {
    type: RECEIVE_SERVER_MEMBERSHIP_ERRORS,
    errors
  }
}


export const createServerMembership = membership => dispatch => {
  return ServerMembershipApiUtil.createServerMembership(membership)
    .then((payload) => dispatch(receiveMembership(payload)),
      error => dispatch(receiveServerMembershipErrors(error.responseJSON)))
}

export const destroyServerMembership = membershipId => dispatch => {
  return ServerMembershipApiUtil.destroyServerMembership(membershipId)
    .then(() => dispatch(removeServerMembership(membershipId)),
      error => dispatch(receiveServerMembershipErrors(error.responseJSON)))
}