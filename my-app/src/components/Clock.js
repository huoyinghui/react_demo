import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()}
    }

    // 将生命周期方法添加到类中
    // 在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要。
    // 每当 Clock 组件第一次加载到 DOM 中的时候，我们都想生成定时器，这在 React 中被称为挂载。
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    // 同样，每当 Clock 生成的这个 DOM 被移除的时候，我们也会想要清除定时器，这在 React 中被称为卸载。
    componentWillUnmount() {
        clearInterval(this.timerID)
    } 

    tick() {
        // setState 会调用render来更新界面 
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function MulClock() {
    return (
      <div>
        <Clock delay='1' />
      </div>
    );
  }

export default MulClock;