// from data.js
var tableData = data;

// Reference
var tbody = d3.select("tbody");

//get the data 
data.forEach((alien_data)) => {
    var row = tbody.append("tr");
    Object.entries(alien_data).forEach((function)[Key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//button function
var button = d3.select("#button_filter");

button.on("click", function() {

    //Date elemetn
    var input_data_element = d3.select("#datatime")

    //value element
    var input_value_element = input_value.property("value");

    //log 
    console.log(tableData);
    console.log(input_value_element)

    var filter_times = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filter_times);

    var content = d3.select("tbody");

    content.html(" ")

    filter_times.forEach((showdata) =>{
        var row = table.append("td");

        objects.entries(showData).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value;
        
        });

    });

});








