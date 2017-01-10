
var login = require("facebook-chat-api");
var mge = require("./rendom");
login({email: "kengsy69@gmail.com", password: "pumai1234"}, function callback (err, api) {
    if(err) return console.error(err);

    api.setOptions({listenEvents: true});

    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);

        switch(event.type) {

          case "message":
            if(event.body === 'goodnight'||event.body === 'ฝันดีนะ'
             ) {
              var routeGoodbye =Math.round(Math.random()*10);
              if(routeGoodbye==1){
              api.sendMessage("ฝันดีหวาน จูๆๆๆๆๆ\n Bye bye", event.threadID);
                return stopListening();}
              else if (routeGoodbye==2) {
                  api.sendMessage("ไปนอนไป่ ไปๆ \n ฝันดีนะ\n บายยยยย", event.threadID);
                  return stopListening();
              }
              else if (routeGoodbye==3) {
                  api.sendMessage("ฝันดีนะ ฝันถึงเค้ายิงฝันดี \n >< บายๆ ", event.threadID);
                  return stopListening();
              }
              else if (routeGoodbye==4) {
                  api.sendMessage("ไปหานอนไป่ เเล้วอย่าไปส่องสาวไหยอีกละ", event.threadID);
                  return stopListening();
              }
              else if (routeGoodbye==5) {
                  api.sendMessage("อืมๆๆ เดียวเค้าก็จะนอนเหมือนกัน", event.threadID);
                  setTimeout(  api.sendMessage("ฝันดีหวาน จูๆๆๆๆๆ\n บายๆๆๆๆๆ", event.threadID),500);
                  return stopListening();
              }
              else if (routeGoodbye > 6) {
                  api.sendMessage("ฝันถึงเค้าบ้างนะ อิิอิ", event.threadID);
                  return stopListening();
              }

            }
            //say hi
            if(event.body ==='rinna'||event.body ==='ริน'
            ||event.body ==='รินๆ'||event.body ==='เเกๆ'
            ||event.body ==='รินครับ' ||event.body ==='รินนนนนนน'
            ||event.body ==='ทักได้ไหมอ่า'||event.body ==='รินนะ><'
            ||event.body ==='สาวเเว่นคนนั้นอ่า') {
                  var route = Math.round(Math.random()*10);
              if(route==1){api.sendMessage("ว่าไรหรอ", event.threadID);
               setTimeout(api.sendMessage("เออๆ\nทำอะไรอยู่หรอ", event.threadID),500);}
               //ส่งต่อ
              else if (route==2) {api.sendMessage("เหงาหรอ>< ไม่มีไรทำหรอ??? ", event.threadID);}
              //return
              else if (route==3) {api.sendMessage("เเฮ่กๆ คิดถึงเค้าหรอ", event.threadID);}
              //return
              else if (route==4) {api.sendMessage("เออมีไร", event.threadID);
              setTimeout(api.sendMessage("เออๆ\nทำอะไรอยู่หรอ", event.threadID),500);}
              else if (route==5) {api.sendMessage("เปนไรอีกนิ", event.threadID);
              setTimeout(api.sendMessage("\nทำอะไรอยู่หรอ...", event.threadID),500);
                                 }
                                ///return
              else if (route>5) { api.sendMessage("คิดถึงละชิ เค้าก็คิดเเกนะ ไม่ได้เจอนานนนนนนคึกถึง\nมาๆๆกอดหนอย", event.threadID);
                                  }
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
