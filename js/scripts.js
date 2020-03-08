var toDoForm = document.getElementById( 'to-do-form' )

function moveItem( element ) {
    var listItem = element.parentNode;
    // Remove from the "To-Do" list ul
    listItem.parentNode.removeChild( listItem );
    // get the label node
    var itemLabel = listItem.childNodes[0];
    // get the task name which has been stored as the id
    var taskName = itemLabel.getAttribute("id")
    var date= new Date()
    itemLabel.textContent = taskName + " (" + date.toString().slice(0,24) + ")"
    // Remove the checkbox from the list label (not needed in "Completed" list)
    // The checkbox was the second child added so has index 1
    listItem.removeChild( listItem.childNodes[1] );
    // Add to the "Completed" list ul
    var completedList = document.getElementById( 'completed-list' )
    completedList.appendChild(listItem)
}

function deleteItem( element ) {
    var listItem = element.parentNode; 
    listItem.parentNode.removeChild( listItem );
}

// Add form submission listener
toDoForm.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    // Get the input
    var taskField = document.getElementById( 'task-input' );

    // Extract the value
    var taskValue = taskField.value;

    // Create new list item
    var newListItem = document.createElement( 'LI' );

    // Create a label
    var newLabel = document.createElement( 'LABEL' );
    // Make the label be for the checkbox
    newLabel.setAttribute( "htmlfor", "checkbox" )
    // Save the task as an id so it can be accessed later
    newLabel.setAttribute( "id", taskValue )
    // Add the date to the displayed text of the label
    var date= new Date()
    newLabel.textContent = taskValue + " (" + date.toString().slice(0,24) + ")"

    // Add the label to list item
    newListItem.appendChild( newLabel )

    // Create a checkbox with an event listener
    var newCheckBox = document.createElement("INPUT");
    newCheckBox.setAttribute( "type", "checkbox" );
    newCheckBox.addEventListener( 'change', function ( event ) {moveItem( this );
    } ) ;

    // Append checkbox to list item
    newListItem.appendChild( newCheckBox )

    // Make delete button with an event listener
    var deleteButton = document.createElement( 'BUTTON' );
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener( 'click', function ( event ) {deleteItem( this );
    } ) ;

    // Append delete button to list item
    newListItem.appendChild( deleteButton )

    // Add the list item to the to-do list
    var toDoList = document.getElementById( 'to-do-list' )
    toDoList.appendChild(newListItem)
} );
