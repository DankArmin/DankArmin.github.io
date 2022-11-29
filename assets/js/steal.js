const domain = 'http://preben.net';
const popUp = window.open(domain + '/cors.php');

setTimeout(function() {

    const cookie = popUp.cookie;
    console.log(cookie);

}, 1000);