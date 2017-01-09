var login = require("facebook-chat-api");

// Create simple echo bot
login({email: "kang081@hotmail.com", password: "@root#keng"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        api.sendMessage(message.body, message.threadID);
    });
});
