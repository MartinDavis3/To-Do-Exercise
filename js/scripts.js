var toDoForm = document.getElementById( 'to-do-form' )

// Add form submission listener
toDoForm.addEventListener( 'submit', function ( event ) {
    // Prevent the form from ACTUALLY submitting (would leave or refresh the page, terminating our script.)
    event.preventDefault();

    // Get the input
    var taskField = document.getElementById( 'task-input' );

    // Extract the value
    var taskValue = taskField.value;

    // Create new element (list item)
    var newListItem = document.createElement( 'LI' );

    // Add text
    newListItem.textContent = taskValue

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
