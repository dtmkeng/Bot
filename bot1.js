
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
            //_evenplaygame
            if (event.body==='เล่นเกม'||event.body==='เล่นเกมๆ'||event.body==='เล่นเกมอยู่'||event.body==='นั่งเล่นเกม'||event.body==='นอนเล่นเกม') {
                 var routePlaygame = Math.round(Math.random()*10);
                 if(routePlaygame>1&&routePlaygame<4){
                 api.sendMessage("เชอะ เล่นเเต่เกมไม่ไปอ่านหนังสิอหรอ...",event.threadID);
                 }
                 else if (routePlaygame>4&&routePlaygame<6) {
                    api.sendMessage("ขอเค้าเล่นด้วยดินะๆๆๆๆ",event.threadID);
                 }
                 else if (routePlaygame>6&&routePlaygame<10) {
                    api.sendMessage("สนุกไหมอ่า เล่นด้วยคนดิ",event.threadID);
                 }
            }
            //evenSitdown
            if (event.body==='นั่งเล่นๆ'||event.body==='นั่งเล่นไม่มีไรทำ'||event.body==='นั่งเล่นน'||event.body==='นั่งคิดถึงเเกเเหละ'||event.body==='sitdown') {
                 var routeSite = Math.round(Math.random()*10);
                 if(routeSite>1&&routeSite<4){
                 api.sendMessage("ไม่เหงาหรอมานั่งเล่นในใจเค้าได้นะ อุ้ยๆลั่นๆ",event.threadID);
                 }
                 else if (routeSite>4&&routeSite<6) {
                    api.sendMessage("ดูว่างจังไม่ไปหาไรทำเเกเบื่อ",event.threadID);
                 }
                 else if (routeSite>6&&routeSite<10) {
                    api.sendMessage("ฮู้นๆ ไปนั่งส่องสาวใช่ไหมบอกมาเดียวนี้\n โอ้ยๆล้อเล่นนะ",event.threadID);
                 }
            }
            //missyou
            if (event.body==='คิดถึงจังเลย'||event.body==='คิดถึงรินจัง'||event.body==='ก็คิดถึงเเต่รินจังเเหละ'||event.body==='นั่งคิดถึงรินจัง'||event.body==='คิดถึงรินๆจังเลย') {
                 var routeMissyou = Math.round(Math.random()*10);
                 if(routeMissyou>1&&routeMissyou<4){
                 api.sendMessage("ว้ายๆ มาคิดถึงเค้าทำไมเค้าอ่า ",event.threadID);
                 }
                 else if (routeMissyou>4&&routeMissyou<6) {
                    api.sendMessage("เค้าก็คิดถึงเตงอ่า ทำไรอยู่น่าตอนนี้",event.threadID);
                 }
                 else if (routeMissyou>6&&routeMissyou<10) {
                    api.sendMessage("มาๆมาเล่นด้วยกันเพื่อจะหายคิดถึงบาง",event.threadID);
                 }
            }

            if(event.body === 'ทำไรๆ'||event.body === 'ทำไร'||event.body === 'ทำไรอยู่อ่า'||event.body === '><') {
                var route1 = Math.round(Math.random()*10);
              if(route==1){api.sendMessage("ว่าไรหรอ", event.threadID);}
              else if (route1==2) {api.sendMessage("เล่นเกม", event.threadID);
                setTimeout(api.sendMessage("อืมๆ\nเเล้วเก่งทำอะไรอยู่หรอ...", event.threadID),500);}
              else if (route1==3) {api.sendMessage("นั่งเล่นดูท้องฟ้าสวยๆๆๆ", event.threadID);
                setTimeout(api.sendMessage("เเล้วเก่งทำไรอยู่ ว่างอีกเเล้วหรอ หรือคิดถึงกันเนี่ย", event.threadID),500);}
              else if (route1==4) {api.sendMessage("นอนเล่นโทรสับ", event.threadID);
                setTimeout(api.sendMessage("เเล้วเก่งอ่า....\nทำอะไรอยู่หรอ...", event.threadID),500);}
              else if (route1==5) {api.sendMessage("ง่วงนอนนนนน", event.threadID);
                setTimeout(api.sendMessage("\nเดียวก็จะไปอาบน้ำนอนละ", event.threadID),500);}
              else if (route1==6) {api.sendMessage("คิดถึงเเกเเหละ><", event.threadID);}
              else if (route1==7) {api.sendMessage("น่ารักไปอีกละ ><", event.threadID);
                setTimeout(api.sendMessage("เเเล้วๆๆๆๆ\nทำอะไรอยู่หรอ...", event.threadID),500);}
              else if (route1>7) {api.sendMessage("เล่นig ส่อง IG เเกด้วยเเหละ", event.threadID);
                setTimeout(api.sendMessage("เก่งว่างหรอเเล้วทำไรอยู่ตอนนี้อ่า", event.threadID),500);}
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
