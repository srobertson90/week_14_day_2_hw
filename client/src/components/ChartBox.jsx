var React = require('react');

var ChartBox = React.createClass({
  getInitialState: function(){
    return { songs: []}
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      console.log("request has loaded");
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      this.setState({
        songs: data.feed.entry
      });
    }.bind(this);
    request.send();
  },

  render: function(){
    return(
      <div id="main_container">
        <h2>Itunes and stuff</h2>
      </div>
      )
  }

})

module.exports = ChartBox;