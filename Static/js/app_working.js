// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
// let changedElement = d3.select(this);
var datetimeElement = d3.select("#datetime");
var citynameElement = d3.select("#cityname");
var statenameElement = d3.select("#statename");
var countrynameElement = d3.select("#countryname");
var shapenameElement = d3.select("#shapename");

    // 4b. Save the value that was changed as a variable.
var dateTimeValue = datetimeElement.property("value");
var cityNameValue = citynameElement.property("value").toLowerCase().trim();
var stateNameValue = statenameElement.property("value").toLowerCase().trim();
var countryNameValue = countrynameElement.property("value").toLowerCase().trim();    
var shapeNameValue = shapenameElement.property("value").toLowerCase().trim();
    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (datetimeValue != "") {
      filterData = filterData.filter(entry => entry.datetime === datetimeValue);
  }
  if (citynameValue != "") {
       filterData = filterData.filter(entry => entry.city === citynameValue);     
  }
  if (statenameValue != "") {
       filterData = filterData.filter(entry => entry.state === statenameValue);     
  }
  if (countrynameValue != "") {
       filterData = filterData.filter(entry => entry.country === countrynameValue);     
  }
  if (shapenameValue != "") {
       filterData = filterData.filter(entry => entry.shape === shapenameValue);     
  }  
  console.log(filterData);     
  
    // 6. Call function to apply all filters and rebuild the table
    buildTable(filteredData);
  
  };

  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    $("#tbodyid").empty();
    console.log(filterData);
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    filteredData.forEach((tableData) => {
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
      });

    });
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  
  };
  
  // 2. Attach an event to listen for changes to each filter
  // Add event listener for submit button
d3.selectAll("#filter-btn").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
