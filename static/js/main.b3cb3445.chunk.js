(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,function(e,c,t){},,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(6),r=t.n(s),i=(t(12),t(3)),o=t(2),u=(t(13),t(0));function d(e){var c=e.card,t=e.handleChoice,n=e.flipped,a=e.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:c.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/img/card-background.png",onClick:function(){a||t(c)},alt:"card-back"})]})})}t(5);function j(e){var c=e.shuffleCards;return Object(u.jsx)("div",{className:"modal-backdrop",children:Object(u.jsxs)("div",{className:"modal",children:[Object(u.jsx)("h3",{children:"Sorry!"}),Object(u.jsx)("p",{children:"You flipped a few too many cards,"}),Object(u.jsx)("p",{children:"a few too many times..."}),Object(u.jsx)("p",{}),Object(u.jsx)("button",{className:"play-again",onClick:c,children:"Play Again"})]})})}function l(e){e.shuffleCards;return Object(u.jsx)("div",{className:"modal-backdrop",children:Object(u.jsx)("div",{className:"modal",children:Object(u.jsx)("h1",{children:"You Win!"})})})}var b=t(7),m=(t(15),[{src:"/img/lou-in-snow.png",matched:!1},{src:"/img/jo-in-snow.png",matched:!1},{src:"/img/lou-sunglasses.png",matched:!1},{src:"/img/rain-boots.png",matched:!1},{src:"/img/jojo-goggles.png",matched:!1},{src:"/img/beach-babies.png",matched:!1}]);var f=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(12),r=Object(o.a)(s,2),f=r[0],h=r[1],O=Object(n.useState)(null),p=Object(o.a)(O,2),g=p[0],x=p[1],v=Object(n.useState)(null),N=Object(o.a)(v,2),k=N[0],C=N[1],S=Object(n.useState)(!1),y=Object(o.a)(S,2),w=y[0],M=y[1],T=Object(n.useState)(!1),E=Object(o.a)(T,2),Y=E[0],A=E[1],J=Object(n.useState)(!1),B=Object(o.a)(J,2),G=B[0],I=B[1],L=Object(n.useState)(!0),P=Object(o.a)(L,2),W=P[0],q=P[1],z=function(){var e=[].concat(m,m).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));q(!0),a(e),h(12),A(!1),I(!1)},D=function(e){g?C(e):x(e)};Object(n.useEffect)((function(){g&&k&&(M(!0),g.src===k.src?(a((function(e){return e.map((function(e){return e.src===g.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),H()):setTimeout((function(){return H()}),1e3))}),[g,k]);var F=t.filter((function(e){return!0===e.matched})).length;Object(n.useEffect)((function(){0===f?(A(!0),a([]),q(!1)):12===F&&(I(!0),q(!1),setTimeout((function(){Object(b.a)({particleCount:200,spread:180})}),1e3),setTimeout((function(){return I(!1)}),3500),setTimeout((function(){return q(!0)}),4500))}),[f,F]);var H=function(){x(null),C(null),h((function(e){return e-1})),M(!1)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory Match"}),Object(u.jsx)("p",{children:"You have twelve turns to make a match."}),W&&Object(u.jsx)("button",{onClick:z,children:"New Game"}),Y&&Object(u.jsx)(j,{shuffleCards:z}),G&&Object(u.jsx)(l,{shuffleCards:z,className:"card-grid"}),!G&&Object(u.jsx)("div",{className:"card-grid",children:t.map((function(e){return Object(u.jsx)(d,{card:e,handleChoice:D,flipped:e===g||e===k||e.matched,disabled:w},e.id)}))}),Object(u.jsxs)("p",{children:["Turns Left: ",f]})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b3cb3445.chunk.js.map