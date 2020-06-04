import React, {Component } from 'react';
import MessageView from './message-view';
import { render } from '@testing-library/react';

class MessageList extends Component{
    state = {
        messages: [{
            from: 'Martha',
            message: 'I will be traveling soon',
            status: 'read'
        },
        {
            from: 'John',
        message: 'The event will start next week',
        status: 'unread'
        },
        {
            from: 'Jacob',
        message: 'Talk later. Have a great day!',
        status: 'read'
        }
        ]
           
        
    }

    render(){
        const MessageViews = this.state.messages.map(function(message, index)
        {
            return(
                <MessageView key={index} message={message}/>
            )
        })
        return(
         <div>
             <h1>List of messages</h1>
             {MessageViews}
         </div>   
        )
    }
}

export default MessageList;
