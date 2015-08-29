// start slingin' some d3 here.
var moveEnemies = function(node){
  node.transition()
  .attr("x",  Math.random() * 840 + 30 )
  .attr("y",  Math.random() * 520 + 30 )
  .duration(1000)
  .ease("cubic-in-out")
  .each("end", function(){
    moveEnemies(d3.select(this));
  });
};

var playerX = 800;
var playerY = 450;

var drag = d3.behavior.drag()
  .on("drag", function() {player.attr("cx", d3.event.x)
                                .attr("cy", d3.event.y);
                          playerX = d3.event.x;
                          playerY = d3.event.y;});
var player = d3.select(".player").call(drag);

var collision = false;
var checkCollision = function() {
  var locations =[];
  d3.selectAll(".enemy").each(function(d) {
    var temp = [];
    temp.push(Number(d3.select(this).attr("x")));
    temp.push(Number(d3.select(this).attr("y")));
    locations.push(temp);
  });
  for (var i = 0; i < locations.length; i++) {
    var topBound = locations[i][1] - 20;
    var bottomBound = locations[i][1] + 20;
    var leftBound = locations[i][0] - 20;
    var rightBound = locations[i][0] + 20;
    if ((playerX > leftBound && playerX < rightBound) && 
      (playerY > topBound && playerY < bottomBound)) {
      collision = true;
    } 
  }
};

moveEnemies(d3.selectAll(".enemy"));
d3.timer(checkCollision);
setInterval(function(){
  if(collision){
    console.log("collision");
    collision = false;
  }
}, 500);

  


