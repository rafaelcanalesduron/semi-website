'use strict';

function toMailchimp(t){

    // hide buttons
    var buttons = document.getElementsByTagName('input');
    for (var i = 0; i < buttons.length; i++) {
        if(buttons[i].getAttribute("type")== "button"){
            buttons[i].style.display = "none";
        }
    }

    // send the data through
    function sendData(data, callback) {

        $.ajax({
            type: "POST",
            url:        "https://us-central1-semi-186012.cloudfunctions.net/mailchimp",
            data:       data,
            success:    callback(),
            dataType:   "json"
          });
      
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

    sendData(formFields, function(){
        window.location.href = "/thank-you.html";
    })

}