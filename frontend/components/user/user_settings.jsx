import React from 'react';

class UserSettings extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { toggle: false, username: this.props.user.username, email: this.props.user.email };

    this.handleLogout = this.handleLogout.bind(this);
    this.modalButtonClick = this.modalButtonClick.bind(this.modalButtonClick);
    this.modalCloseClick = this.modalCloseClick.bind(this.modalCloseClick);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.logout();
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  modalButtonClick() {
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  modalCloseClick() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  render() {

      return (
        <div id="modal">
          <div id="modal-left">
            <h4>USER SETTINGS</h4>
            <div className="settings-tab">My Account</div>
            <div className="settings-tab">User Profile</div>
            <div id="logout-button">
              <div onClick={this.handleLogout} className="settings-tab">Logout</div>
            </div>    
          </div>
          <div id="black-header">
            <div id="modal-right">
              <div className="modal-right-content">
                <h2>My Account</h2>
                <div id="close-modal" onClick={this.props.closeModal}>X</div>
              </div>
              <div id="modal-right-container">
                <div id="modal-main-user">
                  <img className="settings-pfp" src={this.props.user.pfp} alt="" />
                  <div id="settings-username">{this.props.user.username}</div>
                  <div onClick={() => this.setState({toggle: !this.state.toggle})}>EDIT USER PROFILE</div>
                </div>
                <div>
                  {
                  !this.state.toggle && 

                  <form id="user-info">
                    <div className="setting-container">
                      <div className='setting-cat'>
                        <div className="edit-label">USERNAME</div>
                        <div>{this.props.user.username}</div>
                      </div>
                      <button id="myBtn" onClick={this.modalButtonClick}>Edit</button>
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close" onClick={this.modalCloseClick} >&times;</span>
                          <p>Some text in the Modal..</p>
                        </div>
                      </div>
                      {/* <input type="text" className="edit-input" value={this.state.username} onChange={this.update('username')}/> */}
                    </div>
                    <div className="setting-container">
                      <div className='setting-cat'>
                        <div className="edit-label">EMAIL</div>
                        <div>{this.props.user.email}</div>
                      </div>
                      <button id="myBtn" onClick={this.modalButtonClick}>Edit</button>
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close" onClick={this.modalCloseClick} >&times;</span>
                          <p>Some text in the Modal..</p>
                        </div>
                      </div>
                      {/* <input type="text" className="edit-input" value={this.state.email} onChange={this.update('email')}/> */}
                    </div>
                    <button id="update-button">UPDATE USER PROFILE</button>
                  </form>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } 
    
}


export default UserSettings