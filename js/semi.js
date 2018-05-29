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
        document.getElementById("cookie-notification").style.display = 'block';
    }
}

// Redirect to https
var loc = window.location.href+'';
if (loc.indexOf('http://')==0 && location.hostname !== "127.0.0.1" && location.hostname.substring(0, 4) !== "dev."){
    window.location.href = loc.replace('http://','https://');
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