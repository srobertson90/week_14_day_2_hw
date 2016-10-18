var React = require('react');
var ReactDOM = require('react-dom');
var ChartBox = require('./components/ChartBox');

window.onload = function(){
  ReactDOM.render(
    <ChartBox></ChartBox>,
    document.getElementById('app')
  );
}
