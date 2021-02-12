import React, {Component} from 'react';
import {Header, Icon, Menu, Segment, Sidebar,} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import nextId from "react-id-generator";

class Layout extends Component {

    state = {
        visible: false,
        sidebarList: [
            {name: 'Home', iconName: 'home', link: ''},
            {name: '할일 리스트', iconName: 'tasks', link: '/todoList'},
        ],
    }

    setVisible = (flag) => {
        this.setState({
           visible: flag === undefined ? !this.state.visible : flag
        });
    }

    render() {

        return (
          <div>
              <Header
                  as='h1'
                  color='teal'
                  className="layout-header"
              >
                  리액트 공부
                  <Header.Subheader><Icon name="bars" onClick={() => this.setVisible()}/>개인적으로 하는 공부</Header.Subheader>
              </Header>
              <Sidebar.Pushable as={Segment}>
                  <Sidebar
                      as={Menu}
                      animation='overlay'
                      icon='labeled'
                      inverted
                      onHide={() => this.setVisible(false)}
                      vertical
                      visible={this.state.visible}
                      width='thin'
                  >
                      {
                          this.state.sidebarList.map(row => (
                              <Menu.Item
                                  as={Link}
                                  to={row.link}
                                  key={nextId('menuItem')}
                                  onClick={() => this.setVisible(false)}
                              >
                                  <Icon name={row.iconName} />
                                  {row.name}
                              </Menu.Item>
                          ))
                      }
                  </Sidebar>

                  <Sidebar.Pusher dimmed={this.state.visible}>
                      <div
                          className="show-area"
                          {...this.props}
                      />
                  </Sidebar.Pusher>
              </Sidebar.Pushable>
          </div>
        );
    }

}

export default Layout;