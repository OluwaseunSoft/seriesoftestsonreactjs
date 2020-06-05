import React, {Component} from 'react';
import './App.css';
import MessageView from './messages/message-view';
import MessageList from './messages/message-list';
import ClassDemo from './Hooks/useState';

class App extends Component{
    render(){         
        return(
            <ClassDemo/>
        )
    }
}

export default App;