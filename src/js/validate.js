function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var submitFlag = false;
  var latitudeFlag = false;
  var longitudeFlag = false;

  latitude = parseFloat(document.Species.latitude.value);
  longitude = parseFloat(document.Species.longitude.value);
  latitudeError = document.getElementById('error_msg1')
  longitudeError = document.getElementById('error_msg2')

  if(isNaN(latitude) ||latitude < -90 || latitude > 90){
    latitudeError.innerText = "must be a valid Latitude (-90 to 90)";
  }
  else {
    latitudeError.innerHTML="";
    latitudeFlag = true;
  }

  if(isNaN(longitude) || longitude < -190 || longitude > 180){
      longitudeError.innerText = "must be a valid longitude (-190 to 180)";
  }
  else {
    longitudeError.innerHTML="";
    longitudeFlag = true;
  }

  if (latitudeFlag && longitudeFlag) submitFlag = true; 
  return submitFlag;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
