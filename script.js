//Margins
var margin = {top: 10, right: 20, bottom: 30, left: 90},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
//Energy Consumption Data 





//Energy Consumption Graph





//Rising Temperature Data
var datafilter;
function getData1(){
    d3.csv("USA_environment_temp_change.csv", d3.autoType)
    .then(data => {
        data.forEach(function(d) {
            datafilter = data.filter(function(d){
                if(d["Element"] === d["Temperature Change"]){
                    return d;
                }
                return data;
            })
        })
var temperatureData = data;
console.log("tempData", temperatureData);
var svg1 =d3.select("#tempGraph")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
    
var xScale1 = d3.scaleTime()
    .domain([1961, 2019])
    .range([ 0, width ]);
svg1.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale1));
var yScale1 = d3.scaleLinear()
    .domain([-5, 5])
    .range([height,0]);
svg1.append("g")
    //.attr("transform", "translate(0," + height + ")")
    .call(d3.axisLeft(yScale1));
svg1.append('g')
    .selectAll("dot")
    .data(temperatureData)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale1(d.Months); } )
    .attr("cy", function (d) { return yScale1(d["Temperature Change"]); } )
    .attr("r", 2);
var line = d3.line()
    .x(temperatureData , function(d) { return xScale1(d.Months); })
    .y(temperatureData, function(d) { return yScale1(d["Temperature Change"]); });
svg1.append("path")
    .datum(temperatureData)
    .enter()
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("d", line);


})}    



//Population LineGraph Data for North America
var datafiltered;

function getData2(){

    d3.csv("USA_population_growth.csv", d3.autoType)
    .then(data => {
        data.forEach(function(d) {
            //datafiltered = data.filter(function(d){
              //  if(d["Country Name"]=="North America"){
                    d.year = +d.year;
                    d["Population Growth"] = +d["Population Growth"];
                    //return d;
                //}
                return data;
            })
                
            console.log('filteredPopulation',data);
          //  return data;
    
       // })}
       
    
   
    //return data;
var populationData = data;
//populationData = getData2();
console.log('popdata' , populationData);
//Population LineGraph Implementation
var svg2 = d3.select("#lineGraphPop")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
var xScale = d3.scaleTime()
    .domain([1961, 2019])
    .range([ 0, width ]);
svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));
var yScale = d3.scaleLinear()
    //.domain([0, d3.max(PopulationData, function(d){return d["Population Growth"];})])
    .domain([0, 3])//d3.max(PopulationData, function(d) { return d["Population Growth"];})])
    .range([height,0]);
svg2.append("g")
    //.attr("transform", "translate(0," + height + ")")
    .call(d3.axisLeft(yScale));
var line = d3.line()
    .x(populationData , function(d) { return xScale(d.year); })
    .y(populationData, function(d) { return yScale(d["Population Growth"]); });
svg2.append('g')
    .selectAll("dot")
    .data(populationData)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d.year); } )
    .attr("cy", function (d) { return yScale(d["Population Growth"]); } )
    .attr("r", 2);
svg2.append("path")
    .datum(populationData)
    .enter()
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("d", line);
})}


        

//Greenhouse Gas Data
function getData3(){
    d3.csv("co2_emission.csv", d3.autoType)
    .then(data => {
        data.forEach(function(d) {
            datafiltered = data.filter(function(d){
                if(d["Entity"]==="United States"){
                    return d;
                }
            })
            d.Year = +d.Year;
            d["Annual CO₂ emissions (tonnes )"] = +d["Annual CO₂ emissions (tonnes )"];
                
            
        })
        console.log('datafilteredGreenhouse', datafiltered);
        //return datafiltered;
        
   // })
   
    //return data;
//}

//Greenhouse Gas Implementation
//var greenhouseData  = getData3();
var greenhouseData = datafiltered;
console.log('greenhouseData', greenhouseData);
var svg4 = d3.select("#GreenhouseGraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
var xScale3 = d3.scaleTime()
    .domain([1961,2019])
    .range([0,width]);

var yScale3 = d3.scaleLinear()
    .domain([0, d3.max(greenhouseData, function(d){return d["Annual CO₂ emissions (tonnes )"];})])
    .range([height, 0]);
svg4.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale3));
svg4.append("g")
    //.attr("transform", "translate(0," + height + ")")
    .call(d3.axisLeft(yScale3));
svg4.append('g')
    .selectAll("dot")
    .data(greenhouseData)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale3(d.Year); } )
    .attr("cy", function (d) { return yScale3(d["Annual CO₂ emissions (tonnes )"]); } )
    .attr("r", 2);
svg4.append("path")
    .datum(greenhouseData)
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(greenhouseData, function(d) { return xScale3(d.Year); })
      .y(greenhouseData, function(d) { return yScale3(d["Annual CO₂ emissions (tonnes )"]); }));
})}
getData1();
getData2();
getData3();