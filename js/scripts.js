$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const age = parseInt($("input#age").val());
    const region = $("select#region").val();
    const economic = $("select#economic").val();
    const guns = $("select#guns").val();

    // selects age from user

    if ((region === 'south' || 'midwest') && age >= 50 && (economc === lowerClass || middleClass || upperClass)) {
        $("#conservative").show();
      }
    
    else if (guns = "True") {
      $("#conservative").show();
    }

    else if (region="west") {
      $("#liberal").show();
    }

    else if (region="northEast") {
      $("#moderate").show();
    }
 
    else {
      alert('Please enter your age.');
    }



    event.preventDefault();
  });
});