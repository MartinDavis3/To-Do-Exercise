function addToActiveList() {

}


/* Table Exercise */

// First capture the form!
var myForm = document.getElementById( 'table-form' );

// Added code from another exercise for modification/reuse.

// Listen for a form submission...
myForm.addEventListener( 'submit', function ( event ) {
    // Prevent the form from ACTUALLY submitting (would leave or refresh the page, terminating our script.)
    event.preventDefault();

    // Grab your input elements.
    var nameField        = document.querySelector( 'form > label > input' ); // Get first input (name field.)
    var ageField         = document.querySelector( '#age' ); // Get element by ID.
    var schoolClassField = document.getElementById( 'school-class' );
    var cityField        = document.getElementById( 'city' );

    // Extract the values.
    var nameValue        = nameField.value;
    var ageValue         = ageField.value;
    var schoolClassValue = schoolClassField.value;
    var cityValue        = cityField.value;

    // Create new element (table row.)
    var newRow = document.createElement( 'TR' );

    // Create new cell for the row (table data.)
    var nameCell = document.createElement( 'TD' );
    nameCell.textContent = nameValue; // Add our text to the cell.
    newRow.appendChild( nameCell ); // Add our cell to the table row.

    // Create new cell for the row (table data.)
    var ageCell = document.createElement( 'TD' );
    ageCell.textContent = ageValue; // Add our text to the cell.
    newRow.appendChild( ageCell );
    // Create new cell for the row (table data.)
    var schoolClassCell = document.createElement( 'TD' );
    schoolClassCell.textContent = schoolClassValue;
    newRow.appendChild( schoolClassCell );
    // Create new cell for the row (table data.)
    var cityCell = document.createElement( 'TD' );
    cityCell.textContent = cityValue;
    newRow.appendChild( cityCell );

    // Target your table body.
    var tableBody = document.getElementById( 'table-body' );
    tableBody.appendChild( newRow ); // Inject the brand new row, so the user can see it! Yay!
} );
