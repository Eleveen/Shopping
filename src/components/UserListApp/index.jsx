import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions/users';
import axios from 'axios';
import { API_URL } from '../config';
import { Fault } from '../common/Fault';

class UserListApp extends Component {

    componentWillMount() {
        this.props.setUser();
        
        const promises = axios.get(API_URL);
        // return Promise.all(promises)
        // console.log('--API--',Promise.all(promises));
        console.log('--API--',promises);
        // console.log('--serUser--', this.props.setUser);
        console.log('--userinfo--', this.props.userinfo);
        
        
    }

    renderUsers() {
      
        const users = this.props.users || [];
        return users.map((user, i) => {
            return (
              <li key={i}>   
                <Link to={``}>
                  { user.id }, {user.name}
                </Link>
              </li>
            )
          })
      }
    
      render() {
        console.log('===this===', this.props.userinfo.userinfo);  
        if(this.props.userinfo.userinfo===false){
          return (
            <div><h1>URL错误 404</h1></div>
         )
        } else {
          return (
            <div className="content users">
              <h3>Here are users' names! :) </h3>
              <ul>
                { this.renderUsers() }
              </ul>
            </div>
          )
        }
        
      }
    }
    
// 定义该参数，组件将会监听redux store的变化
const mapStateToProps = state => {
  console.log('--state--',state)
    return {
        users: state.user.list,
        userinfo: state.user,
    };
};


// 可以在 UserListApp 这个组件里面通过 props 拿到 Store 的 dispatch 方法
// 指定 mapStateToProps 参数监听 Store 的状态更改
export default connect(mapStateToProps, actions)(UserListApp);