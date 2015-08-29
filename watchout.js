// start slingin' some d3 here.

var moveEnemies = function(){
  var newCoordinates = [];
  for(var i = 0; i < 20; i++){
    var temp = [];
    temp.push(Math.random() * 840 + 30);
    temp.push(Math.random() * 520 + 30);
    newCoordinates.push(temp);
  }

  //select all enemies
  d3.selectAll(".enemy")
  .data(newCoordinates)
  .transition()
  .attr("x", function(d) { return d[0]; })
  .attr("y", function(d) { return d[1]; })
  .duration(500)
  .ease("cubic-in-out");
};

//call moveEnemies (setInterval)
setInterval( moveEnemies , 1000);

var drag = d3.behavior.drag()
  .on("drag", function() {circle.attr("cx", d3.event.x)
                                .attr("cy", d3.event.y);});
  
var circle = d3.select(".player").call(drag);
