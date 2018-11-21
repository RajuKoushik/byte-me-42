import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { Header, Content, Footer } = Layout;

const buttonStyle = {
    // font: '140% "Marvel", sans-serif, thin',
    // letterSpacing : '1px',
    // marginBottom : '15px'
    font: ' "Lucida Sans Unicode", "Lucida Grande", sans-serif',
    letterSpacing : '1.7px',
    fontWeight : '100'
}
// const buttonStyle1 = {
//     font: '150% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
//     position : 'absolute',
//     marginBottom: '3%',
//     marginLeft: '5%',
//     borderColor : 'Black'
// }
// const buttonStyle2 = {
//     font: '150% "Lucida Sans Unicode", "Lucida Grande", sans-serif',
//     position : 'absolute',
//     marginBottom: '3%',
//     marginLeft: '5%',
//     borderColor : 'Black'
// }

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
    
                {
                    this.props.isAuthenticated ?
    
                    <Menu.Item key="2" onClick={this.props.logout} style={buttonStyle}>
                        LOGOUT
                    </Menu.Item>
    
                    :
    
                    <Menu.Item key="2">
                        <Link to="/login" style={buttonStyle}>LOGIN</Link>
                    </Menu.Item>

                }
                {
                    this.props.isAuthenticated ?
                    
                    <Menu.Item key="3">
                        <Link to="/profile" style={buttonStyle}>PROFILE</Link>
                    </Menu.Item>
                    
                    :

                    <Menu.Item key="3"></Menu.Item>


                }
    
                    <Menu.Item key="1" >
                        <Link to="/" style={buttonStyle}>POSTS</Link>
                    </Menu.Item>
                    
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer>
                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));