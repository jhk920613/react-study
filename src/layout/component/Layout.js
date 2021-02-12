import React, {Component} from 'react';

class Layout extends Component {

    render() {
        return (
          <div>
              <div>리액트 공부</div>
              <div {...this.props} />
          </div>
        );
    }

}

export default Layout;