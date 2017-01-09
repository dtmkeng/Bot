
var login = require("facebook-chat-api");
var mge = require("./rendom");
login({email: "kengsy69@gmail.com", password: "pumai1234"}, function callback (err, api) {
    if(err) return console.error(err);
  var route = Math.round(Math.random()*10);
    api.setOptions({listenEvents: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);

        switch(event.type) {

          case "message":
            if(event.body === 'goodnight'||event.body === 'ฝันดีนะ') {
              api.sendMessage("ฝันดีหวาน จูๆๆๆๆๆ", event.threadID);
              return stopListening();
            }
            if(event.body ==='rinna'||event.body ==='ริน'||event.body ==='รินๆ') {
                  var route = Math.round(Math.random()*10);
              if(route==1){api.sendMessage("ว่าไรหรอ", event.threadID);
              api.sendMessage("เออๆ\nทำอะไรอยู่หรอ", event.threadID);}
              else if (route==2) {api.sendMessage("เหงาหรอ><", event.threadID);
                               if(message==='เหงาหรอ><'){
                                 api.sendMessage("เก่งทำรไรอยู่อ่า",event.threadID);
                               }}
              else if (route==3) {api.sendMessage("เเฮ่กๆ คิดถึงเค้าหรอ", event.threadID);}
              else if (route==4) {api.sendMessage("เออมีไร", event.threadID);
                                  api.sendMessage("เออๆ\nทำอะไรอยู่หรอ", event.threadID);}
              else if (route==5) {api.sendMessage("เปนไรอีกนิ", event.threadID);
                                  api.sendMessage("ทำอะไรอยู่หรอ", event.threadID);
                                }
              else if (route>5) { api.sendMessage("คิดถึงละชิ", event.threadID);
                                  api.sendMessage("เออๆ\nทำอะไรอยู่หรอ", event.threadID);}
            }
            if(event.body === 'ทำไรๆ'||event.body === 'ทำไร'||event.body === 'ทำไรอยู่อ่า'||event.body === '><') {
              var route1 = Math.round(Math.random()*10);
              if(route==1){api.sendMessage("ว่าไรหรอ", event.threadID);}
              else if (route1==2) {api.sendMessage("เล่นเกม", event.threadID);}
              else if (route1==3) {api.sendMessage("นั่งเล่น", event.threadID);}
              else if (route1==4) {api.sendMessage("นอนเล่นโทรสับ", event.threadID);}
              else if (route1==5) {api.sendMessage("ง่วงนอนนนนน", event.threadID);}
              else if (route1==6) {api.sendMessage("คิดถึงเเกเเหละ", event.threadID);}
              else if (route1==7) {api.sendMessage("><", event.threadID);}
              else if (route1>7) {api.sendMessage("เล่นig", event.threadID);}
            }
            //if()
            api.markAsRead(event.threadID, function(err) {
              if(err) console.log(err);
            });
             if(event.body==='...') {
            api.sendMessage("ว้าวอยู่ครับ", event.threadID);
            }
          case "event":
            console.log(event);
            break;
        }
    });
});
var red = function () {
  return 'hello';
}
