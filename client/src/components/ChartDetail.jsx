var React = require('react');

var ChartDetail = function(props){

  var songs = props.songs.map(function(song, index){

    return (<div key={song['id']['attributes']['im:id']} className="song_detail">
      <h3>{song['im:name']['label']}</h3>
    </div>)
  })

  return(

    <div id="chart">
      {songs}
    </div>
  )

}

module.exports = ChartDetail;