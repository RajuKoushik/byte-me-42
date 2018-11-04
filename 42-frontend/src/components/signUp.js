import React, { Component } from 'react';
import './signUp.css';

class signUp extends Component{
    render() {
        return (
            <div>
                <view>
                    <form>
                        <label>name:</label><input/>
                        <label>email:</label><input/>
                        <label>password:</label><input/>
                        <button>register</button>
                    </form>
                </view>
            </div>
        )
    }
}

export default signUp;