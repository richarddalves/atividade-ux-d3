const svg = d3.select("svg");

svg.append("rect").attr("width", 600).attr("height", 400).attr("fill", "green");

svg
  .append("polygon")
  .attr("points", "300,50 550,200 300,350 50,200")
  .attr("fill", "yellow");

svg
  .append("circle")
  .attr("cx", 300)
  .attr("cy", 200)
  .attr("r", 100)
  .attr("fill", "blue");

svg
  .append("rect")
  .attr("x", 200)
  .attr("y", 187)
  .attr("width", 200)
  .attr("height", 25)
  .attr("fill", "white");

svg
  .append("text")
  .attr("x", 300)
  .attr("y", 200)
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "middle")
  .attr("font-size", "20px")
  .attr("fill", "black")
  .text("Ordem e Progresso");
