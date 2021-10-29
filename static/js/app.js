
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

d3.selectAll("input").on("change", updateFilters);

function updateFilters() {
  let changedElement = d3.select(this);
  let elementValue = changedElement.property("value");
  console.log(elementValue);
  let filterID = changedElement.attr("id");
  console.log(filterId);
  if (elementValue) {
    filters[filterID] = elementValue;
  }
  else {
    delete filters[filterId]
  }
  updateFilters();


  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
 
    let filteredData = tableData
    // 8. Set the filtered data to the tableData.
    if (filters) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.filters === id);
    };
    buildTable(filteredData);
  }
  // Attach an event to listen for the form button
d3.selectAll("input").on("enter", filterTable);
    
  
  
  
  // Build the table when the page loads
  buildTable(tableData);
<><script src="js\data.js"></script><script src="js\app.js"></script></>
