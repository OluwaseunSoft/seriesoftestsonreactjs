import React, {Component} from 'react';
import './App.css';
import MessageView from './messages/message-view';
import MessageList from './messages/message-list';
import HookDemo from './Hooks/useState';

class App extends Component{
    render(){         
        return(
            <HookDemo/>
        )
    }
}

export default App;