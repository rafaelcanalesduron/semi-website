'use strict';

// hide the cookie info bar
function hide(obj) {
    var el = document.getElementById(obj);
        el.style.display = 'none';
}

// set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

// handle the cookie bar
function handleCookie(i){
    document.getElementById(i).style.display = 'none';
    setCookie("cookieConsent", true, 100);
}

// show cookie bar if no cookie on load
window.onload = function () {
    if(getCookie("cookieConsent") === false){
        document.getElementById("cookie-notification").style.display = 'flex';
    }
}

// Redirect to https
var loc = window.location.href+'';
if (loc.indexOf('http://')==0 && location.hostname !== "127.0.0.1" && location.hostname.substring(0, 4) !== "dev."){
    window.location.href = loc.replace('http://','https://');
}

// send request to mailchimp
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
            dataType:   "json",
            cache:      false
          })
          .done(callback())
      
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
        // sad but true, timeout to guarantee a success
        setTimeout(function(){
            window.location.href = "/thank-you.html";
        }, 1250);
        
    })

}

// include Google Tagmanager
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K6DMN8N');