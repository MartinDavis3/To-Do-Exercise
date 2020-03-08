var toDoForm = document.getElementById( 'to-do-form' )

// Add form submission listener
toDoForm.addEventListener( 'submit', function ( event ) {
    // Prevent the form from ACTUALLY submitting (would leave or refresh the page, terminating our script.)
    event.preventDefault();

    // Get the input
    var taskField = document.getElementById( 'task-input' );

    // Extract the value
    var taskValue = taskField.value;

    // Create new list item
    var newListItem = document.createElement( 'LI' );

    // Create a lebel
    var newLabel = document.createElement( 'LABEL' );
    newLabel.setAttribute( "htmlfor", "checkbox" )
    newLabel.textContent = taskValue

    // Create a checkbox with the task as text
    var newCheckBox = document.createElement("INPUT");
    newCheckBox.setAttribute( "type", "checkbox" );

    // append label to list item
    newListItem.appendChild( newLabel )

    // Append checkbox to list item
    newListItem.appendChild( newCheckBox )

    // Make a delete button.
    var deleteButton = document.createElement( 'BUTTON' );
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener( 'click', function ( event ) {deleteRow( this );
    } ) ;
    newListItem.appendChild( deleteButton )

    // Target the to-do list ul
    var toDoList = document.getElementById( 'to-do-list' )
    toDoList.appendChild(newListItem)
} );
