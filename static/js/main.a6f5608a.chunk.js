(this["webpackJsonpreact-simple-board"]=this["webpackJsonpreact-simple-board"]||[]).push([[0],{193:function(e,t,n){e.exports=n(376)},198:function(e,t,n){},204:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),i=n.n(c),r=n(188),l=(n(198),n(96)),s=n(36),u=n(189),d=n(31),p=n.n(d),b=(n(204),n(379)),f=(n(205),n(54)),m=n.n(f),v=n(378),O=n(30),y=n(380),E=n(381),h=function(e){var t,n=e.id,a=e.key,c=e.isDetail,i=e.showUpdate,r=e.posts,l=e.visible,s=e.secondModalVisible,u=e.showModal,d=e.showSecondModal,p=e.closeModal,f=e.addPost,m=e.updatePost,h=e.deletePost,j=e.inputTitle,T=e.inputContent,w=e.title,D=e.content,k={id:n,title:w,content:D,createdDate:(new Date).getTime()};return o.a.createElement("div",{className:"boardList"},o.a.createElement(v.a,{dataSource:r,columns:[{title:"\ubc88\ud638",dataIndex:"id",key:"id"},{title:"\uc81c\ubaa9",dataIndex:"title",key:"title"},{title:"\uc791\uc131\uc77c",dataIndex:"createdDate",key:"createdDate"}],pagination:{pageSize:20},expandRowByClick:!0,onRow:function(e){return{onMouseEnter:function(){t=e.key},onMouseLeave:function(){t=e.key},onClick:function(){d(t)}}}}),o.a.createElement(O.a,{type:"primary",onClick:u},"\uc0c8 \uae00"),o.a.createElement(y.a,{title:o.a.createElement(b.a.Title,{level:2},"Create post"),visible:l,onOk:function(){return f(k)},onCancel:p,okText:"\uc791\uc131",cancelText:"\ucde8\uc18c"},o.a.createElement(b.a.Title,{level:4},"Title"),o.a.createElement(E.a,{value:w,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return j(e.target.value,t)}}),o.a.createElement(b.a.Title,{level:4},"Content"),o.a.createElement(E.a.TextArea,{value:D,rows:6,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return T(e.target.value,t)}})),o.a.createElement(y.a,{title:o.a.createElement(b.a.Title,{level:2},"post detail"),visible:s,footer:c?o.a.createElement(O.a,{type:"primary",onClick:function(){i()}},"\uc218\uc815"):[o.a.createElement(O.a,{type:"primary",onClick:function(){m({key:t,title:w,content:D})}},"Update"),o.a.createElement(O.a,{type:"danger",onClick:function(){h()}},"Delete")],onCancel:p},c?o.a.createElement("div",null,o.a.createElement(b.a.Title,{level:4},"Title"),o.a.createElement("p",null,w),o.a.createElement(b.a.Title,{level:4},"Content"),o.a.createElement("p",null,D)):o.a.createElement("div",null,o.a.createElement(b.a.Title,{level:4},"Title"),o.a.createElement(E.a,{value:w,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return j(e.target.value,a)}}),o.a.createElement(b.a.Title,{level:4},"Content"),o.a.createElement(E.a.TextArea,{value:D,rows:6,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return T(e.target.value,t)}}))))},j=n(382),T="APP_INIT",w="ADD_POST",D="UPDATE_POST",k="DELETE_POST",M="SHOW_MODAL",g="SHOW_SECOND_MODAL",P="CLOSE_MODAL",x="INPUT_TITLE",C="INPUT_CONTENT",S="SHOW_UPDATE",_=Object(j.a)(T,(function(e){return e})),A=Object(j.a)(w,(function(e){return e})),I=Object(j.a)(D,(function(e){return e})),L=Object(j.a)(k,(function(e){return e})),U=Object(j.a)(M),V=Object(j.a)(g),N=Object(j.a)(S),B=Object(j.a)(P),W=Object(j.a)(x,(function(e){return e})),H=Object(j.a)(C,(function(e){return e})),R=Object(l.b)((function(e){var t=e.BoardReducer;return{id:t.id,isDetail:t.isDetail,posts:t.posts,title:t.title,content:t.content,visible:t.visible,secondModalVisible:t.secondModalVisible}}),(function(e){return{appInit:function(t){return e(_(t))},addPost:function(t){return e(A(t))},updatePost:function(t){return e(I(t))},deletePost:function(){return e(L())},showModal:function(){return e(U())},showSecondModal:function(t){e(V(t))},closeModal:function(){return e(B())},inputTitle:function(t){e(W(t))},inputContent:function(t){return e(H(t))},showUpdate:function(){return e(N())}}}))((function(e){var t=e.id,n=e.key,c=e.isDetail,i=e.showUpdate,r=e.appInit,l=e.inputTitle,s=e.inputContent,u=e.posts,d=e.visible,f=e.secondModalVisible,v=e.showModal,O=e.showSecondModal,y=e.closeModal,E=e.addPost,j=e.updatePost,T=e.deletePost,w=e.title,D=e.content;return Object(a.useEffect)((function(){!function(){var e,t;p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.awrap(m.a.get("https://react-simple-board.firebaseio.com/post.json"));case 2:e=n.sent,(t=e.data)&&r(Object.values(t));case 5:case"end":return n.stop()}}))}()}),[r]),o.a.createElement("div",{className:"App"},o.a.createElement(b.a.Title,{level:1},"Simple Board"),o.a.createElement(h,{id:t,key:n,isDetail:c,showUpdate:i,posts:u,visible:d,secondModalVisible:f,showModal:v,showSecondModal:O,closeModal:y,addPost:E,updatePost:j,deletePost:T,inputTitle:l,inputContent:s,title:w,content:D}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(32),z={key:0,id:1,isDetail:!0,visible:!1,secondModalVisible:!1,title:"",content:"",posts:[]};var $,q=Object(s.c)({BoardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=e.posts.findIndex((function(t){return t.key===e.key})),a=e.posts.find((function(e){return e.key===t.payload}));switch(t.type){case T:return Object(J.a)({},e,{posts:e.posts.concat(t.payload)});case w:return Object(J.a)({},e,{posts:e.posts.concat({id:0===e.posts.length?1:e.posts[e.posts.length-1].id+1,key:t.payload.createdDate,title:e.title,content:e.content,createdDate:(new Date).toString().substring(3,21)}),id:e.id+1,title:"",content:"",visible:!1});case D:return Object(J.a)({},e,{posts:e.posts.fill({id:e.posts[n].id,key:e.posts[n].key,title:t.payload.title,content:t.payload.content,createdDate:e.posts[n].createdDate},n,n+1),secondModalVisible:!1,title:"",content:"",isDetail:!0});case k:return Object(J.a)({},e,{posts:e.posts.filter((function(t){return t.key!==e.key})),secondModalVisible:!1,isDetail:!0});case M:return Object(J.a)({},e,{visible:!0});case g:return Object(J.a)({},e,{key:t.payload,secondModalVisible:!0,title:a.title,content:a.content});case P:return Object(J.a)({},e,{visible:!1,secondModalVisible:!1,isDetail:!0,title:"",content:""});case x:return Object(J.a)({},e,{title:t.payload});case C:return Object(J.a)({},e,{content:t.payload});case S:return Object(J.a)({},e,{isDetail:!1});default:return Object(J.a)({},e)}}}),F=n(72),G=p.a.mark(Y),K=p.a.mark(Z),Q=p.a.mark(ee),X=p.a.mark(ne);function Y(e){var t,n,a;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,m.a.get("https://react-simple-board.firebaseio.com/post.json");case 2:return t=o.sent,n=t.data,a={id:n?Object.values(n)[Object.values(n).length-1].id+1:1,key:e.payload.createdDate,title:e.payload.title,content:e.payload.content,createdDate:(new Date).toString().substring(3,21)},o.next=7,m.a.put("https://react-simple-board.firebaseio.com/post/".concat(a.key,".json"),a);case 7:case"end":return o.stop()}}),G)}function Z(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.patch("https://react-simple-board.firebaseio.com/post/".concat($,".json"),{title:e.payload.title,content:e.payload.content});case 2:case"end":return t.stop()}}),K)}function ee(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("https://react-simple-board.firebaseio.com/post/".concat($,".json"));case 2:case"end":return e.stop()}}),Q)}function te(e){$=e.payload}function ne(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)("ADD_POST",Y);case 2:return e.next=4,Object(F.a)("DELETE_POST",ee);case 4:return e.next=6,Object(F.a)("UPDATE_POST",Z);case 6:return e.next=8,Object(F.a)("SHOW_SECOND_MODAL",te);case 8:case"end":return e.stop()}}),X)}var ae=Object(u.a)(),oe=Object(s.e)(q,Object(s.a)(ae));ae.run(ne),i.a.render(o.a.createElement(r.a,null,o.a.createElement(l.a,{store:oe},o.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[193,1,2]]]);
//# sourceMappingURL=main.a6f5608a.chunk.js.map