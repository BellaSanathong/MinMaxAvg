function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var operand1 = document.getElementById("Operand1").value;

        // Operand 2
        var operand2 = document.getElementById("Operand2").value;

        // Operand 3
        var operand3 = document.getElementById("Operand3").value;

        // Operator
        // Get the value associated with the operator that was checked (Min, Max or Avg)
        var operator;
        if (document.getElementById("MinOperator").checked) {
            operator = document.getElementById("MinOperator").value;
        }
        if (document.getElementById("MaxOperator").checked) {
            operator = document.getElementById("MaxOperator").value;
        }
        if (document.getElementById("AvgOperator").checked) {
            operator = document.getElementById("AvgOperator").value;
        }

        
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/ajaxminmaxavg.php";
        var myMethod = "GET";

        /* AJAX calculator requires Operand1, Operator, and Operand 2 */
        
        /* Create the data object and add the values as properties to the object 
        The names of the properties must EXACTLY match the names required by the AJAX page  */
        var myData = {};
        myData.Operand1 = operand1;
        myData.Operand2 = operand2;
        myData.Operand3 = operand3;
        myData.Operator = operator;
        
        /* Make sure document is ready */
        $(document).ready(function() {

            /* Perform AJAX call to process data */
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

            /* AJAX complete - display the result */
            .done(function( msg ) {
                document.getElementById("Result").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("Operand2").value = "";
    document.getElementById("Result").innerHTML = "";
}