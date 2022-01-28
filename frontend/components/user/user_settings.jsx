import React from 'react';

class UserSettings extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { toggle: false };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.logout();
  }

  render() {
      return (
        <div id="modal">
          <div id="modal-left">
            <h4>USER SETTINGS</h4>
            <div className="settings-tab">My Account</div>
            <div className="settings-tab">User Profile</div>
            <div onClick={this.handleLogout} className="settings-tab">Logout</div>
          </div>
          <div id="modal-right">
            <div className="modal-right-content">
              <h2>My Account</h2>
              <div onClick={this.props.closeModal}>X</div>
            </div>
            <div className="modal-right-content">
              <div >
                <div>USERNAME</div>
                <img className="settings-pfp" src={this.props.user.pfp} alt="" />
                <div onClick={() => this.setState({toggle: !this.state.toggle})}>EDIT USER PROFILE BUTTON</div>
              </div>
              <div>
                {
                !this.state.toggle && 

                <div>
                  <div>
                    <div>USERNAME</div>
                    <div>ACTUAL NAME</div>
                  </div>
                  <div>
                    <div>Email</div>
                    <div>user email</div>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      )
    } 
    
}


export default UserSettings