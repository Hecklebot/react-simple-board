(this["webpackJsonpreact-simple-board"]=this["webpackJsonpreact-simple-board"]||[]).push([[0],{193:function(e,t,n){e.exports=n(376)},198:function(e,t,n){},204:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),i=n(188),l=(n(198),n(96)),s=n(36),u=n(189),d=n(31),p=n.n(d),b=(n(204),n(379)),f=(n(205),n(54)),m=n.n(f),v=n(30),O=n(378),y=n(380),h=n(381),k=function(e){var t,n=e.id,a=e.key,r=e.posts,c=e.visible,i=e.secondModalVisible,l=e.showModal,s=e.showSecondModal,u=e.closeModal,d=e.addPost,p=e.updatePost,f=e.deletePost,m=e.inputTitle,k=e.inputContent,E=e.title,T=e.content,j=[{title:"\ubc88\ud638",dataIndex:"id",key:"id"},{title:"\uc81c\ubaa9",dataIndex:"title",key:"title"},{title:"\uc791\uc131\uc77c",dataIndex:"createdDate",key:"createdDate"},{title:"",dataIndex:"",key:"",render:function(){return o.a.createElement(v.a,{type:"danger",onClick:function(){return f(t)}},"Delete")}},{title:"",dataIndex:"",key:"",render:function(e,t){var n=t.key,a=t.title,r=t.content;return o.a.createElement(v.a,{type:"primary",onClick:function(){return s({key:n,title:a,content:r})}},"Update")}}],w={id:n,title:E,content:T};return o.a.createElement("div",{className:"boardList"},o.a.createElement(O.a,{dataSource:r,columns:j,expandedRowRender:function(e){return o.a.createElement("p",null,e.content)},pagination:{pageSize:20},onRow:function(e){return{onMouseEnter:function(){t=e.key},onMouseLeave:function(){t=e.key}}}}),o.a.createElement(v.a,{type:"primary",onClick:l},"\uc0c8 \uae00"),o.a.createElement(y.a,{title:o.a.createElement(b.a.Title,{level:2},"Create post"),visible:c,onOk:function(){return d(w)},onCancel:u,okText:"\uc791\uc131",cancelText:"\ucde8\uc18c"},o.a.createElement(b.a.Title,{level:4},"Title"),o.a.createElement(h.a,{value:E,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return m(e.target.value,t)}}),o.a.createElement(b.a.Title,{level:4},"Content"),o.a.createElement(h.a.TextArea,{value:T,rows:6,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return k(e.target.value,t)}})),o.a.createElement(y.a,{title:o.a.createElement(b.a.Title,{level:2},"Update post"),visible:i,onOk:function(){return p({key:a,title:E,content:T})},onCancel:u,okText:"\uc218\uc815",cancelText:"\ucde8\uc18c"},o.a.createElement(b.a.Title,{level:4},"Title"),o.a.createElement(h.a,{value:E,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return m(e.target.value,a)}}),o.a.createElement(b.a.Title,{level:4},"Content"),o.a.createElement(h.a.TextArea,{value:T,rows:6,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){return k(e.target.value,t)}})))},E=n(382),T="APP_INIT",j="ADD_POST",w="UPDATE_POST",g="DELETE_POST",x="SHOW_MODAL",M="SHOW_SECOND_MODAL",D="CLOSE_MODAL",P="INPUT_TITLE",S="INPUT_CONTENT",C=Object(E.a)(T,(function(e){return e})),I=Object(E.a)(j,(function(e){return e})),_=Object(E.a)(w,(function(e){return e})),A=Object(E.a)(g,(function(e){return e})),L=Object(E.a)(x),N=Object(E.a)(M),V=Object(E.a)(D),U=Object(E.a)(P,(function(e){return e})),B=Object(E.a)(S,(function(e){return e})),R=Object(l.b)((function(e){var t=e.BoardReducer;return{id:t.id,isLoading:t.isLoading,posts:t.posts,title:t.title,content:t.content,visible:t.visible,secondModalVisible:t.secondModalVisible}}),(function(e){return{appInit:function(t){return e(C(t))},addPost:function(t){return e(I(t))},updatePost:function(t){return e(_(t))},deletePost:function(t){return e(A(t))},showModal:function(){return e(L())},showSecondModal:function(t){e(N(t))},closeModal:function(){return e(V())},inputTitle:function(t){e(U(t))},inputContent:function(t){return e(B(t))}}}))((function(e){var t=e.id,n=e.key,r=e.appInit,c=e.inputTitle,i=e.inputContent,l=e.posts,s=e.visible,u=e.secondModalVisible,d=e.showModal,f=e.showSecondModal,v=e.closeModal,O=e.addPost,y=e.updatePost,h=e.deletePost,E=e.title,T=e.content;return Object(a.useEffect)((function(){!function(){var e,t;p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.awrap(m.a.get("https://react-simple-board.firebaseio.com/post.json"));case 2:e=n.sent,(t=e.data)&&r(Object.values(t));case 5:case"end":return n.stop()}}))}()}),[r]),o.a.createElement("div",{className:"App"},o.a.createElement(b.a.Title,{level:1},"Simple Board"),o.a.createElement(k,{id:t,key:n,posts:l,visible:s,secondModalVisible:u,showModal:d,showSecondModal:f,closeModal:v,addPost:O,updatePost:y,deletePost:h,inputTitle:c,inputContent:i,title:E,content:T}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(34),H={key:0,id:1,visible:!1,secondModalVisible:!1,title:"",content:"",posts:[]};var J,z=Object(s.c)({BoardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=e.posts.findIndex((function(t){return t.key===e.key}));switch(t.type){case T:return Object(W.a)({},e,{posts:e.posts.concat(t.payload)});case j:return Object(W.a)({},e,{posts:e.posts.concat({id:0===e.posts.length?1:e.posts[e.posts.length-1].id+1,key:(new Date).getTime(),title:e.title,content:e.content,createdDate:(new Date).toString().substring(3,21)}),id:e.id+1,title:"",content:"",visible:!1});case w:return Object(W.a)({},e,{posts:e.posts.fill({id:e.posts[n].id,key:e.posts[n].key,title:t.payload.title,content:t.payload.content,createdDate:e.posts[n].createdDate},n,n+1),secondModalVisible:!1,title:"",content:""});case g:return Object(W.a)({},e,{posts:e.posts.filter((function(e){return e.key!==parseInt(t.payload,10)}))});case x:return Object(W.a)({},e,{visible:!0});case M:return Object(W.a)({},e,{key:t.payload.key,secondModalVisible:!0,title:t.payload.title,content:t.payload.content});case D:return Object(W.a)({},e,{visible:!1,secondModalVisible:!1,title:"",content:""});case P:return Object(W.a)({},e,{title:t.payload});case S:return Object(W.a)({},e,{content:t.payload});default:return Object(W.a)({},e)}}}),$=n(72),q=p.a.mark(Q),F=p.a.mark(X),G=p.a.mark(Y),K=p.a.mark(ee);function Q(e){var t,n,a;return p.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,m.a.get("https://react-simple-board.firebaseio.com/post.json");case 2:return t=o.sent,n=t.data,a={id:n?Object.values(n)[Object.values(n).length-1].id+1:1,key:(new Date).getTime(),title:e.payload.title,content:e.payload.content,createdDate:(new Date).toString().substring(3,21)},o.next=7,m.a.put("https://react-simple-board.firebaseio.com/post/".concat(a.key,".json"),a);case 7:case"end":return o.stop()}}),q)}function X(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.patch("https://react-simple-board.firebaseio.com/post/".concat(J,".json"),{title:e.payload.title,content:e.payload.content});case 2:case"end":return t.stop()}}),F)}function Y(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("https://react-simple-board.firebaseio.com/post/".concat(e.payload,".json"));case 2:case"end":return t.stop()}}),G)}function Z(e){J=e.payload.key}function ee(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)("ADD_POST",Q);case 2:return e.next=4,Object($.a)("DELETE_POST",Y);case 4:return e.next=6,Object($.a)("UPDATE_POST",X);case 6:return e.next=8,Object($.a)("SHOW_SECOND_MODAL",Z);case 8:case"end":return e.stop()}}),K)}var te=Object(u.a)(),ne=Object(s.e)(z,Object(s.a)(te));te.run(ee),c.a.render(o.a.createElement(i.a,null,o.a.createElement(l.a,{store:ne},o.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[193,1,2]]]);
//# sourceMappingURL=main.710495ba.chunk.js.map