import React from 'react';
import {Link} from 'react-router-dom';

class DMList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>Friends</div>
        <ul id="dm-list">
          <li>DIRECT MESSAGES <span>+</span></li>
          {this.props.dms.map(dm =>
            <li>
              <Link onClick={() => this.props.fetchDM}>
                
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default DMList