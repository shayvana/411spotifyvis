(this.webpackJsonpdemoproject=this.webpackJsonpdemoproject||[]).push([[0],{19:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(14),s=n.n(a),j=n(3),o=(n(19),n(4)),i=n.n(o),b=n(0);var u=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=(e[0],e[1],Object(c.useState)("")),a=Object(j.a)(n,2),s=(a[0],a[1],Object(c.useState)([])),o=Object(j.a)(s,2),u=o[0],l=o[1],r=Object(c.useState)(""),O=Object(j.a)(r,2),h=O[0],d=O[1],p=Object(c.useState)(""),f=Object(j.a)(p,2),m=f[0],x=f[1],g=Object(c.useState)([]),S=Object(j.a)(g,2),v=S[0],N=S[1],A=Object(c.useState)([]),C=Object(j.a)(A,2),y=C[0],_=C[1],k=Object(c.useState)(1),D=Object(j.a)(k,2),I=(D[0],D[1]);return Object(c.useEffect)((function(){i.a.get("http://localhost:3002/api/get").then((function(t){l(t.data)}))}),[]),Object(c.useEffect)((function(){i.a.get("http://localhost:3002/api/query1").then((function(t){N(t.data)}))}),[]),Object(c.useEffect)((function(){i.a.get("http://localhost:3002/api/query2").then((function(t){_(t.data)}))}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:" CRUD APPLICATIONS"}),Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("label",{children:" Song Name:"}),Object(b.jsx)("input",{type:"text",name:"movieName",onChange:function(t){x(t.target.value)}}),Object(b.jsx)("button",{onClick:function(){i.a.post("http://localhost:3002/api/insert",{songName:m})},children:" Insert"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onSubmit:function(){I(0)},children:"Get All Albums and Songs For Artist"}),v.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsxs)("h4",{children:[t.song_name," | ",t.album_name]})})})),Object(b.jsx)("br",{}),Object(b.jsx)("button",{children:"Get All Playlists for User: Cloud"}),y.map((function(t){return Object(b.jsx)("div",{children:t.name})})),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:"Search Songs"}),Object(b.jsx)("input",{}),Object(b.jsx)("h2",{children:"All Songs"}),u.map((function(t){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("h3",{children:[" Song Name: ",t.song_name," "]}),Object(b.jsxs)("p",{children:["Dance Value: ",t.song_dance]}),Object(b.jsxs)("button",{onClick:function(){!function(t){i.a.delete("http://localhost:3002/api/delete/".concat(t))}(t.song_name)},children:[" ","Delete"]}),Object(b.jsx)("input",{type:"number",id:"updateDanceInput",onChange:function(t){d(t.target.value)}}),Object(b.jsxs)("button",{onClick:function(){!function(t){i.a.put("http://localhost:3002/api/update",{songName:t,newDanceVal:h})}(t.song_name)},children:[" ","Update"]})]})}))]})]})};s.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c83714a7.chunk.js.map