import React from 'react';

class EditProfile extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="modal">
        <div id="modal-left">
          <h4>USER SETTINGS</h4>
          <div className="settings-tab">My Account</div>
          <div className="settings-tab">User Profile</div>
          <div className="settings-tab">Logout</div>
        </div>
        <div id="modal-right">
          <div className="modal-right-content">
            <h2>User Profile</h2>
            <div onClick={this.props.closeModal}>X</div>
          </div>
          <div className="modal-right-content">
            <div>
              <div>USERNAME</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditProfile