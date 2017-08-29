import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../config/url';

const UserHOC = (ComposedComponent) => {
    class UserHOC extends Component{
        getToken(){
            axios.get(API('Auth', 'getTokenWithoutAuth'))
                .then((response) => {
                    this.token(response.data[0].result.user_token);
                }).catch((error) => {
                console.log(error)
            })
        }
        getLoyalty(callback, token){
            axios.get(API('Loyalty', 'get', `%22token%22:%22${token}%22`))
                .then((response) => {
                    if (!response.data[0].error) {
                        this.userLoyalty(response.data[0].result);
                    } else {
                        this.userObj({});
                        callback();
                    }
                }).catch((error) => {
                console.log(error)
            });
        }
        render() {
            return <ComposedComponent getToken={this.getToken} getLoyalty={this.getLoyalty} {...this.props} {...this.state} />;
        }
    }
    return UserHOC
};

export default UserHOC;