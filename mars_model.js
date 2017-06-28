mars = { "nodes": [

  {"id":1, "chem":"CO2", "group":"Mars", "percent":95.32},
  {"id":2, "chem":"N2", "group":"Mars", "percent":2.7},
  {"id":3, "chem":"Ar", "group":"Mars", "percent":1.6},
  {"id":4, "chem":"O2", "group":"Mars", "percent":0.13},
  {"id":5, "chem":"CO", "group":"Mars", "percent":0.08}

]}

var width = 2000, height = 2000, sizeDivisor = 100, nodePadding = 2.5;

var svgContainer = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

var circles = svgContainer.selectAll("circle")
                          .data(mars.nodes)
                          .enter()
                          .append("circle")

var text = svgContainer.selectAll("text")
                        .data(mars.nodes)
                        .enter()
                        .append("text")

var circleAttributes = circles
  .attr("cx", 200)
  .attr("cy", 500)
  .attr("r", function (radii) { return 5 * (radii.percent); })
  .style("fill", function(chem) {
    if (chem.chem == "CO2"){
      return "blue"
    } else if (chem.chem == "N2") {
      return "yellow"
    } else if (chem.chem == "Ar") {
      return "red"
    }
  })
  .style("background-color", function(chem){
    if (chem.percent < 1.0) {
      return "green"
    }
  })

var textAttributes = text
    .attr("x", function(mars) {
      if (mars.id < 2) {
        return 400*mars.id
      } else {
        return 290*mars.id
      }
    })
    .attr("y", 600)
    .style('font-weight', 'bold')
    .style('font-family', 'sans-serif')
    .text(function(mars) {
      return `${mars.chem}: ${mars.percent}%`
      });


d3.selectAll("circle").transition()
  .duration(2000)
  .attr("cx", function(mars) {
    if (mars.id < 2) {
      return 500*mars.id
    } else {
      return 300*mars.id
    }
  })
