import * as ServerApiUtil from '../util/server_util'

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

const receiveServers = (servers) => {
  return {
    type: RECEIVE_SERVERS,
    servers
  }
}

const receiveServer = payload => {
  return {
    type: RECEIVE_SERVER,
    payload 
  }
}

const removeServer = serverId => {
  return {
    type: REMOVE_SERVER,
    serverId
  }
}

export const fetchServers = () => dispatch => {
  return ServerApiUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers)))
}

export const fetchServer = (serverId) => dispatch => {
  return ServerApiUtil.fetchServer(serverId)
    .then(server => dispatch(receiveServer(server)))
}

export const createServer = server => dispatch => {
  return ServerApiUtil.createServer(server) 
    .then(server => dispatch(receiveServer(server)))
}

export const updateServer = server => dispatch => {
  return ServerApiUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server)))
}

export const deleteServer = serverId => dispatch => {
  return ServerApiUtil.deleteServer(serverId)
    .then( () => dispatch(removeServer(serverId)))
}