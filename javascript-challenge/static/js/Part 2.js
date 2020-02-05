//from data.js
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

//button
//button function
var button = d3.select("#button_filtet");

button.on("click", function() {

    //date and time 
    var date_time = d3.select("datetime")
    var data_value = date_time.property("value");

    console.log("date time");
    console.log(date_value);

    var filtered = {};

    //city or shape 
    function cityshape (selecBox, prop){
        myArray = prop.sort()
        var select = document.getElementById(selectBox);

    // country
    for(var i = 0; i < myArray.length; i++) {
        
        
    filtered.forEach((showdata) =>{
            var row = table.append("td");
    
            objects.entries(showData).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value;
            
            });
    
        });
    
    });
     
