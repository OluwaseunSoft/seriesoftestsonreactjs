import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ClassDemo from './Hooks/useState';

const name = {firstName:"Seun",
lastName : "Akinwale"}

const element = <div>
<span>Hello, </span>
<span>{5 - 3} {name.lastName}</span>
</div>;



ReactDOM.render(<App/>, document.getElementById('root'));