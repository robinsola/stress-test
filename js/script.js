var stress = [];
var methods = [];

$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=stress-signs]:checked").each(function() {
      var stressSigns = $(this).val();
      stress.push(stressSigns);
    });

    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      var stressSymptoms = $(this).val();
      stress.push(stressSymptoms);
    });

    $("input:checkbox[name=stress-methods]:checked").each(function() {
      var stressMethods = $(this).val();
      methods.push(stressMethods);
    });

    if (stress.length > methods.length) {
      $("#extreme-stress").show();
    } else if (methods.length > stress.length) {
      $("#no-stress").show();
    } else if (methods.length = stress.length) {
      $("#mild-stress").show();
    }
    $("#stress-test").hide();
  });
});
