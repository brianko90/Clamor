import React from 'react';

class UserSettings extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { id: this.props.user.id, toggle: false, username: this.props.user.username, email: this.props.user.email, password: "1234" };

    this.handleLogout = this.handleLogout.bind(this);
    this.modalButtonClick = this.modalButtonClick.bind(this);
    this.modalCloseClick = this.modalCloseClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.logout();
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateUser(this.state)
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.logout();
    this.props.deleteUser(this.props.user.id)

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

  modalEmailButton() {
    let modal = document.getElementById('myModal2');
    modal.style.display = "block";
  }

  modalEmailClose() {
    let modal = document.getElementById('myModal2');
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
              <div onClick={this.handleLogout} className="settings-tab">Log Out</div>
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

                  <div id="user-info">
                    <div className="setting-container">
                      <div className='setting-cat'>
                        <div className="edit-label">USERNAME</div>
                        <div>{this.props.user.username}</div>
                      </div>
                      <button id="myBtn" onClick={this.modalButtonClick}>Edit</button>
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <span className="close" onClick={this.modalCloseClick} >&times;</span>
                          <h2>Change your username</h2>
                          <div>Enter a new username and your existing password.</div>
                          <form className="username-form" onSubmit={this.handleUpdate}>
                            <label className="username-label">USERNAME
                              <input className="username-input" type="text" value={this.state.username} onChange={this.update('username')}/>
                            </label>
                            <label className="username-label">CURRENT PASSWORD
                              <input className="username-input" type="password" value={this.state.password} onChange={this.update('password')} />
                            </label>
                            <div className="username-buttons">
                              <div onClick={this.modalCloseClick}>Cancel</div>
                              <button>Done</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="setting-container">
                      <div className='setting-cat'>
                        <div className="edit-label">EMAIL</div>
                        <div>{this.props.user.email}</div>
                      </div>
                      <button id="myBtn" onClick={this.modalEmailButton}>Edit</button>
                      <div id="myModal2" className="modal">
                        <div className="modal-content">
                          <span className="close" onClick={this.modalEmailClose} >&times;</span>
                          <h2>Enter an email address</h2>
                          <div>Enter a new email address and your existing password</div>
                          <form className="username-form">
                            <label className="username-label">EMAIL
                              <input className="username-input" type="text" value={this.state.email} onChange={this.update('email')} />
                            </label>
                            <label className="username-label">CURRENT PASSWORD
                              <input className="username-input" type="password" value="" onChange={this.update('password')} />
                            </label>
                            <div className="username-buttons">
                              <div onClick={this.modalEmailClose}>Cancel</div>
                              <button>Done</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  }
                </div>
              </div>
              <form>
                <button id="delete-account" onClick={this.handleDelete}>Delete Account</button>
              </form>
            </div>
          </div>
        </div>
      )
    } 
    
}


export default UserSettings