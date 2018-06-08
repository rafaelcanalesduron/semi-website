'use strict';

function toMailchimp(t){

    // hide buttons
    var buttons = document.getElementsByTagName('input');
    for (var i = 0; i < buttons.length; i++) {
        if(buttons[i].getAttribute("type")== "button"){
            buttons[i].style.display = "none";
        }
    }

    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
    function sendData(data, callback) {
        var XHR = new XMLHttpRequest();
        var urlEncodedData = "";
        var urlEncodedDataPairs = [];
        var name;
      
        // Turn the data object into an array of URL-encoded key/value pairs.
        for(name in data) {
          urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
      
        // Combine the pairs into a single string and replace all %-encoded spaces to 
        // the '+' character; matches the behaviour of browser form submissions.
        urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
      
        // Define what happens on successful data submission
        XHR.addEventListener('load', function(event) {
            console.log(event);
            callback(true);
        });
      
        // Define what happens in case of error
        XHR.addEventListener('error', function(event) {
            callback(false);
        });
      
        // Set up our request
        XHR.open('POST', 'https://us-central1-semi-186012.cloudfunctions.net/mailchimp');
      
        // Add the required HTTP header for form data POST requests
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      
        // Finally, send our data.
        XHR.send(urlEncodedData);
    }

    // get the value of ...
    function getVal(i){
        var elVal = document.getElementsByName(i)
        if(elVal.length === 0){
            return null
        } else {
            return elVal[0].value
        }
    }

    // return to url
    function returnTo(){
        var protocol = location.protocol;
        var slashes = protocol.concat("//");
        return slashes.concat(window.location.hostname + ":" + window.location.port);
    }

    // get all fields
    var formFields = {
        "EMAIL"     : getVal("EMAIL"),
        "NAME"      : getVal("NAME"),
        "PRODUCT"   : getVal("PRODUCT"),
        "MESSAGE"   : getVal("MESSAGE"),
        "TYPE"      : t,
        "RETURN"    : returnTo
    }

    sendData(formFields, function(result){
        console.log(result)
    })

}