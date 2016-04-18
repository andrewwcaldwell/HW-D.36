/* jslint esnext: true */
function wonderTwinPowersActivate(ok, notOk) {
    var request = new XMLHttpRequest();
    var server = 'http://gateway.marvel.com:80/v1/public/characters?limit=5&apikey=50f1baf21e1535c08fef3b992e928123'
    request.open('GET', server);
    request.onload = function() {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            ok(data);
        } else {
            notOk({
                code: request.status,
                message: 'Ummm, API is ghosting you bruh'
            });
        }
    };
    request.send();
}
function announce(data) {
    console.log(data);
}


window.addEventListener('load', function() {
    var marvel = new Promise(wonderTwinPowersActivate);
    marvel
        .then(announce);
    
});