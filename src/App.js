import React, {Component} from 'react';
import './App.css';
import MessageView from './messages/message-view';
import MessageList from './messages/message-list';

class App extends Component{
    render(){         
        return(
            <MessageList/>
        )
    }
}

export default App;