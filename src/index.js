import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const name = {firstName:"Seun",
lastName : "Akinwale"}

const element = <div>
<span>Hello, </span>
<span>{5 - 3} {name.lastName}</span>
</div>;

ReactDOM.render(<App/>, document.getElementById('root'));