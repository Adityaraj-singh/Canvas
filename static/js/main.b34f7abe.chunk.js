(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),a=n.n(i),s=(n(18),n(7),n(3)),l=(n(19),n(9)),r=n(5),d=n(11),u=n(10),b=n(12),j=n(13),x=n(6),h=n(1),f=c.a.createContext(),m=function(t){var e=t.children,n=Object(o.useState)(!1),c=Object(s.a)(n,2),i=c[0],a=c[1],l=Object(o.useRef)(null),r=Object(o.useRef)(null);return Object(h.jsx)(f.Provider,{value:{canvasRef:l,contextRef:r,prepareCanvas:function(t){var e=l.current;e.width=2*window.innerWidth,e.height=2*window.innerHeight,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px"),e.style.backgroundColor="white";var n=e.getContext("2d");n.scale(2,2),n.lineCap="round",n.strokeStyle=t,n.lineWidth=5,r.current=n},startDrawing:function(t){var e=t.nativeEvent,n=e.offsetX,o=e.offsetY;r.current.beginPath(),r.current.moveTo(n,o),a(!0)},finishDrawing:function(){r.current.closePath(),a(!1)},clearCanvas:function(){var t=l.current,e=t.getContext("2d");e.fillStyle="white",e.fillRect(0,0,t.width,t.height)},draw:function(t,e){var n=t.nativeEvent;if(i){var o=n.offsetX,c=n.offsetY;r.current.lineTo(o,c),r.current.stroke()}},addtext:function(t,e){var n=t.nativeEvent,o=n.offsetX,c=n.offsetY;document.getElementById("typed-text").style.position="fixed",document.getElementById("typed-text").style.left=o,document.getElementById("typed-text").style.position=c}},children:e})},O=function(){return Object(o.useContext)(f)};n(21);var v=function(t){var e=Object(o.useState)("black"),n=Object(s.a)(e,2),c=n[0],i=n[1],a=Object(o.useState)(""),l=Object(s.a)(a,2),r=l[0],d=l[1],u=Object(o.useState)(!1),b=Object(s.a)(u,2);b[0],b[1],"Eraser"==t.tool&&i("white"),document.getElementById("text-bar")&&(document.getElementById("text-bar").style.position="absolute",document.getElementById("text-bar").style.left="50%",document.getElementById("text-bar").style.backgroundColor="red",document.getElementById("text-bar").style.zIndex="1000"),document.getElementById("typed-text");var j=O(),x=j.canvasRef,f=j.prepareCanvas,m=j.startDrawing,v=j.finishDrawing,g=j.draw,w=j.addtext;if(Object(o.useEffect)((function(){f(c)}),[c]),"Pencil"==t.tool||"Eraser"==t.tool||"Cursor"==t.tool||"Hand"==t.tool||"Upload"==t.tool||"Text"==t.tool||"Square"==t.tool)return Object(h.jsxs)("div",{className:"canvase",children:["Text"==t.tool?Object(h.jsx)("input",{type:"text",className:"text-bari",id:"text-bari",placeholder:"Text here",onChange:function(t){d(t.target.value)}}):null,"Text"==t.tool?Object(h.jsx)("div",{className:"typed-text",id:"typed-text",children:r}):null,Object(h.jsx)("canvas",{className:"canvas",id:"canvas",onMouseDown:"Text"!=t.tool?m:w,onMouseUp:"Text"!=t.tool?v:null,onMouseMove:"Text"!=t.tool?g:null,ref:x})]})},g=function(){var t=O().clearCanvas,e=Object(o.useState)("pencil"),n=Object(s.a)(e,2),c=(n[0],n[1],Object(o.useState)(!0)),i=Object(s.a)(c,2),a=(i[0],i[1],Object(o.useState)(2)),f=Object(s.a)(a,2),m=f[0],g=f[1],w=[{id:0,tool:"Hand",icon:Object(h.jsx)(l.a,{className:"icon",size:25,id:"0"}),status:!1},{id:1,tool:"Cursor",icon:Object(h.jsx)(r.a,{className:"icon",size:25,id:"1",onClick:y}),status:!1},{id:2,tool:"Pencil",icon:Object(h.jsx)(u.a,{className:"icon",size:25,id:"2",onClick:y}),status:!1},{id:3,tool:"Square",icon:Object(h.jsx)(d.a,{className:"icon",size:20,id:"3",onClick:y}),status:!1},{id:4,tool:"Text",icon:Object(h.jsx)(b.a,{size:25,className:"icon",id:"4",onClick:y}),status:!1},{id:5,tool:"Eraser",icon:Object(h.jsx)(j.a,{className:"icon",id:"5",size:25,onClick:t}),status:!1}];function y(t){var e=t.target.id;g(e?t.target.id:0)}function p(){alert("Undo")}function C(){alert("redo")}return Object(h.jsxs)("div",{className:"toolbar",id:"toolbar",children:[Object(h.jsxs)("div",{className:"inner-toolbar bg-gray-200",id:"inner-toolbar",children:[Object(h.jsx)("div",{className:"showbutton",id:"showbutton",children:Object(h.jsx)("button",{className:"show-hide bg-blue-500 rounded-xl p-1",children:"hide"})}),Object(h.jsxs)("div",{className:"all-tools",id:"all-tools",children:[w.map((function(e){return Object(h.jsx)("div",{className:"tool-iem ",id:e.id,onClick:5==e.id?t:y,children:Object(h.jsx)("button",{className:e.id==m?"tool bg-blue-500":"tool",id:e.id,onClick:5==e.id?t:y,children:e.icon})},e.id)})),Object(h.jsx)("div",{className:"tool-iem ",onClick:p,children:Object(h.jsx)("button",{className:"tool bg-gray-500",onClick:p,k:!0,children:Object(h.jsx)(x.b,{className:"icon",size:25,onClick:p})})}),Object(h.jsx)("div",{className:"tool-iem ",onClick:C,children:Object(h.jsx)("button",{className:"tool bg-gray-500",onClick:C,k:!0,children:Object(h.jsx)(x.a,{className:"icon",size:25,onClick:C})})})]})]}),Object(h.jsx)(v,{tool:w[m].tool})]})};n(22);var w=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(g,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{children:Object(h.jsx)(w,{})})}),document.getElementById("root")),y()},7:function(t,e,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.b34f7abe.chunk.js.map