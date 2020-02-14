//Part 1 

function generateTable(table, data){
    for (let element of data){
	let row = table.insertRow();
	for (key in element){
	    let cell = row.insertCell();
	    let text = document.createTextNode(element[key]);
	    cell.appendChild(text);
	}
    }
}

let table1 = document.querySelector("table");
generateTable(table1, aliens);

function filterFunction() {

    var newData = [];
    var input = document.getElementById("datetime").value;
    var table = document.querySelector("table");
    var i;
    for (i = 0; i < aliens.length; i++) {
	if (aliens[i]["datetime"] == input){
       	    newData.push(aliens[i]);
	}

	table.deleteRow(0);
   
    }
    table.deleteRow(0);
    var elmtTable = document.querySelector("table");
    generateTable(elmtTable, newData);
    
}
