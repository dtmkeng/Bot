var login = require("facebook-chat-api");
 
login({email: "kang081@hotmail.com", password: "@root#keng"}, function callback(err, api) {
    if(err) return console.error(err);
 
    var yourID =100002529958461;
    var msg = {body: "Hey!"};
    api.sendMessage(msg, yourID);
});