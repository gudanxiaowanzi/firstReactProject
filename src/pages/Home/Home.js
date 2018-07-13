import React, {Component} from 'react';
import { Button, Radio  } from 'antd';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClickAdd() {
        this.setState({
            count: ++ this.state.count
        });
    }
    _handleClickRemove() {
        this.setState({
            count: -- this.state.count
        })
    }

    render() {
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <Button onClick={() => this._handleClickAdd()} type="primary">增加</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={() => this._handleClickRemove()} type="primary">减少</Button>
                <Radio>Radio</Radio>
            </div>
        )
    }
}