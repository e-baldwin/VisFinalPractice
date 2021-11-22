//Margins
var margin = {top: 10, right: 10, bottom: 30, left: 100},
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
//Energy Consumption Data 





//Energy Consumption Graph





//Rising Temperature Data
function getData1(){
    let i = 1961;
    const dataArray = [];
    d3.csv("Environment_Temperature_change_E_All_Data_NOFLAG.csv", d3.autoType)
    .then(data => {
        data.forEach(function(d) {
            datafiltered = data.filter(function(d){
                if(d["Area"]==="United States of America"){
                    return d;
                }
            })
            while (i< 2020){
                //datafiltered.i = +datafiltered.i;
                dataArray[i] = datafiltered['Y'+i];
                
            //console.log(i);
                i++;
            }
                
            //console.log(data);
            
        })
        console.log('datafiltered', datafiltered)
        
        console.log('dataArray', dataArray);
        //console.log(datafiltered.date);
    })
    return dataArray;
   
    //return data;
}
var TemperatureData=[];
TemperatureData = getData1();
//console.log('array!',TemperatureData);
//Temperature Implementation
var svg = d3.select("#lineGraphTemp")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
let i = 1961;
var xScale1 = d3.scaleTime()
    .domain([1961, 2019])
    .range([ 0, width ]);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale1));
var yScale1 = d3.scaleLinear()
    .domain([0, 5])
    .range([height,0]);
svg.append("g")
    //.attr("transform", "translate(0," + height + ")")
    .call(d3.axisLeft(yScale1));
while (i < 2020){
svg.append("path")
    .datum(TemperatureData)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    //console.log('i', i)
    //console.log('d.i',TemperatureData[i])
    .attr("d", d3.line()
        .x(function(TemperatureData) { return i; })
        .y(function(TemperatureData) { return yScale1(TemperatureData[i]); })
        
        )
        //console.log('i', i);
        //console.log('d.i',d[i]);
      i++;
}
      



//Population LineGraph Data for North America
var datafiltered;
const PopArray =[];
function getData2(){
    let i = 1961;
    d3.csv("world_population_growth.csv", d3.autoType)
    .then(data => {
        data.forEach(function(d) {
            datafiltered = data.filter(function(d){
                if(d["Country Name"]=="North America"){
                    d[1961] = +d[1961];
                    d[1962] = +d[1962];
                    return d;
                }
            })
                
            
        })
        datafiltered.forEach(function(d){
            
            PopArray[i] = d[i];
            i++;
        })
       
        console.log('filtered',datafiltered);
        console.log('array',PopArray);
    })
    return PopArray;
   
    //return data;
}
var NorthAmericaData = getData2();
//Population LineGraph Implementation
var svg = d3.select("#lineGraphPop")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
let k = 1961;
var xScale = d3.scaleTime()
    .domain([1961, 2019])
    .range([ 0, width ]);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));
var yScale = d3.scaleLinear()
    .domain([0, 5])//d3.max(NorthAmericaData, function(d) { while (i<2020){i++;return +d.i; }})])
    .range([height,0]);
svg.append("g")
    //.attr("transform", "translate(0," + height + ")")
    .call(d3.axisLeft(yScale));
svg.append("path")
    .data(NorthAmericaData)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(NorthAmericaData) { return xScale(k) })
      .y(function(NorthAmericaData) { return yScale(d.k) }))

//Greenhouse Gas Data


//Greenhouse Gas Implementation