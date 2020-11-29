# ga-react-prep

<h2>Setup</h2>

<ol>
 <li>npm i -g create-react-app</li>
 <li>create-react-app hello_world</li>
<ol>

<h2>src/index.js<h2><hr>
      <pre>
         <code>
         import React from 'react';
         import ReactDOM from 'react-dom';
         import Hello from './App.js';
         import reportWebVitals from './reportWebVitals';

         ReactDOM.render(
         <Hello />,
         document.getElementById('root')
         )
      </code>
   </pre>

   <p>
   // If you want to start measuring performance in your app, pass a function
   // to log results (for example: reportWebVitals(console.log))
   // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
   reportWebVitals();
   </p>
</div>

<hr><h2>src/App.js<h2><hr>

   <pre>
      <code>
         // bring in React and Component from React

         import React, {Component} from 'react';

         // define our Hello component
         class Hello extends Component {
         // What should the component render?
         render () {

            // Make sure to return some UI.
            return (
               <div>
               <h1>Hello World!</h1>
               <h3>It is time for tea.</h3>
               </div>
            )
         }
         }

         export default Hello
      </code>
   </pre>
</div>