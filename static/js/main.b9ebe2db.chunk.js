(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(6),r=c.n(s),i=(c(12),c(3)),d=c(2),o=(c(13),c.p+"static/media/card-background.5464d3f5.png"),u=c(0);function j(e){var t=e.card,c=e.handleChoice,a=e.flipped,n=e.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:a?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:t.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:o,onClick:function(){n||c(t)},alt:"card-back"})]})})}c(5);function l(e){var t=e.shuffleCards;return Object(u.jsx)("div",{className:"modal-backdrop",children:Object(u.jsxs)("div",{className:"modal",children:[Object(u.jsx)("h3",{children:"Sorry!"}),Object(u.jsx)("p",{children:"You flipped a few too many cards,"}),Object(u.jsx)("p",{children:"a few too many times..."}),Object(u.jsx)("p",{}),Object(u.jsx)("button",{className:"play-again",onClick:t,children:"Play Again"})]})})}function b(e){e.shuffleCards;return Object(u.jsx)("div",{className:"modal-backdrop",children:Object(u.jsx)("div",{className:"modal",children:Object(u.jsx)("h1",{children:"You Win!"})})})}var m=c(7),f=(c(15),[{src:c.p+"static/media/lou-in-snow.04f399b8.png",matched:!1},{src:c.p+"static/media/jo-in-snow.b9a6264d.png",matched:!1},{src:c.p+"static/media/beach-babies.b64899ed.png",matched:!1},{src:c.p+"static/media/jojo-goggles.f18b4d60.png",matched:!1},{src:c.p+"static/media/lou-sunglasses.7128cbc7.png",matched:!1},{src:c.p+"static/media/rain-boots.75904f9a.png",matched:!1}]);var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(12),r=Object(d.a)(s,2),o=r[0],h=r[1],O=Object(a.useState)(null),p=Object(d.a)(O,2),x=p[0],g=p[1],v=Object(a.useState)(null),N=Object(d.a)(v,2),k=N[0],C=N[1],S=Object(a.useState)(!1),y=Object(d.a)(S,2),w=y[0],M=y[1],T=Object(a.useState)(!1),E=Object(d.a)(T,2),Y=E[0],A=E[1],J=Object(a.useState)(!1),B=Object(d.a)(J,2),G=B[0],I=B[1],L=Object(a.useState)(!0),P=Object(d.a)(L,2),W=P[0],q=P[1],z=function(){var e=[].concat(f,f).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));q(!0),n(e),h(12),A(!1),I(!1)};console.log(c);var D=function(e){x?C(e):g(e)};Object(a.useEffect)((function(){x&&k&&(M(!0),x.src===k.src?(n((function(e){return e.map((function(e){return e.src===x.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),H()):setTimeout((function(){return H()}),1e3))}),[x,k]);var F=c.filter((function(e){return!0===e.matched})).length;Object(a.useEffect)((function(){0===o&&F>0?(A(!0),n([]),q(!1)):12===F&&(I(!0),q(!1),setTimeout((function(){Object(m.a)({particleCount:200,spread:180})}),1e3),setTimeout((function(){return I(!1)}),3500),setTimeout((function(){return q(!0)}),3500))}),[o,F]);var H=function(){g(null),C(null),h((function(e){return e-1})),M(!1)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory Match"}),Object(u.jsx)("p",{children:"You have twelve turns to make a match."}),W&&Object(u.jsx)("button",{onClick:z,children:"New Game"}),Y&&Object(u.jsx)(l,{shuffleCards:z}),G&&Object(u.jsx)(b,{shuffleCards:z,className:"card-grid"}),!G&&Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(j,{card:e,handleChoice:D,flipped:e===x||e===k||e.matched,disabled:w},e.id)}))}),Object(u.jsxs)("p",{children:["Turns Left: ",o]})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b9ebe2db.chunk.js.map