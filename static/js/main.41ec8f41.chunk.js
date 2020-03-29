(this["webpackJsonpreact-study24-todo-styled-components-reduce-context-immer3"]=this["webpackJsonpreact-study24-todo-styled-components-reduce-context-immer3"]||[]).push([[0],{14:function(n,t,e){n.exports=e(22)},19:function(n,t,e){},22:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),c=e(9),a=e.n(c),u=(e(19),e(3)),i=e(1),l=e(2),f=e(5),s=function(n){return{type:"todos/SORT",show:n}},d={todos:[{id:0,tit:"\ub9ac\uc561\ud2b8 \uc5f0\uc2b5",done:!0,nextCommentIdx:2,comment:[{idx:0,cont:"\ucf54\uba58\ud2b8-1"},{idx:1,cont:"\ucf54\uba58\ud2b8-2"}]},{id:1,tit:"\ub9ac\uc561\ud2b8 \ud504\ub85c\uc81d\ud2b8",done:!1,nextCommentIdx:2,comment:[{idx:0,cont:"\ud22c\ub450-1"},{idx:1,cont:"\ud22c\ub450-2"}]}],sort:"all"},p=function(n,t){switch(console.log(n),t.type){case"todos/CREATE":return Object(f.a)({},n,{todos:n.todos.concat({id:t.nextId,tit:t.tit,done:!1,nextCommentIdx:0,comment:[]})});case"todos/REMOVE":return Object(f.a)({},n,{todos:n.todos.filter((function(n){return n.id!==t.id}))});case"todos/FINISH":return Object(f.a)({},n,{todos:n.todos.map((function(n){return n.id===t.id?Object(f.a)({},n,{done:!n.done}):n}))});case"todos/SORT":return console.log(t.show),Object(f.a)({},n,{sort:t.show});case"todos/EDIT":return null;default:throw new Error("\uc5d0\ub7ec\ubc1c\uc0dd - \ud574\ub2f9\ud558\ub294 \uc561\uc158\ud0c0\uc785(".concat(t.type,")\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."))}},b=Object(r.createContext)(null),m=Object(r.createContext)(null),x=Object(r.createContext)(null),v=function(){return null===b?null:b},j=function(){return null===m?null:m};var g=function(n){var t=n.children,e=Object(r.useReducer)(p,d),c=Object(u.a)(e,2),a=c[0],i=c[1],l=Object(r.useRef)(2);return o.a.createElement(b.Provider,{value:a},o.a.createElement(m.Provider,{value:i},o.a.createElement(x.Provider,{value:l},t)))};function O(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: gold;\n"]);return O=function(){return n},n}var h=l.c.header(O());var E=o.a.memo((function(n){var t=n.children;return o.a.createElement(h,null,t)}));function y(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 150px;\n\tfont-size: 30px;\n\ttext-align: right;\n"]);return y=function(){return n},n}function w(){var n=Object(i.a)(["display: block;"]);return w=function(){return n},n}function k(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 80px;\n\tmargin-left: 20px;\n"]);return k=function(){return n},n}function C(){var n=Object(i.a)(["font-weight: 600;"]);return C=function(){return n},n}function S(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tmargin-top: 2px;\n"]);return S=function(){return n},n}function z(){var n=Object(i.a)(["\n\tdisplay: block;\n\tmargin-top: 16px;\n\tfont-size: 16px;\n"]);return z=function(){return n},n}function M(){var n=Object(i.a)(["flex: 1;"]);return M=function(){return n},n}function I(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100px;\n\tfont-size: 48px;\n"]);return I=function(){return n},n}function R(){var n=Object(i.a)(["\n\tdisplay: flex;\n\theight: 70px;\n\tbackground-color: pink;\n"]);return R=function(){return n},n}var D=l.c.div(R()),H=l.c.h1(I()),A=l.c.p(M()),T=l.c.span(z()),P=l.c.span(S()),F=l.c.span(C()),N=l.c.time(k()),B=l.c.span(w()),J=l.c.h2(y());var L=function(n){var t=new Date,e=t.getDate(),c=t.toLocaleDateString("ko-kr",{year:"numeric"}),a=t.toLocaleDateString("ko-kr",{month:"long"}),i=Object(r.useState)(t.getHours()>=12?"PM":"AM"),l=Object(u.a)(i,2),s=l[0],d=l[1],p=Object(r.useCallback)((function(n){return("00"+n).substr(-2,2)}),[]),b=Object(r.useState)({hour:p("AM"===s?t.getHours():t.getHours()-12),min:p(t.getMinutes()),sec:p(t.getSeconds())}),m=Object(u.a)(b,2),x=m[0],j=m[1];Object(r.useEffect)((function(){setTimeout((function(){var n=new Date;n.getHours()>=12?d("PM"):d("AM"),j(Object(f.a)({},x,{hour:p("AM"===s?n.getHours():n.getHours()-12),min:p(n.getMinutes()),sec:p(n.getSeconds())}))}),1e3)}),[p,s,x]);var g=Object(r.useContext)(v()),O=Object(r.useMemo)((function(){return n=g.todos,"all"===(t=g.sort)?n.length:"complete"===t?n.filter((function(n){return n.done})).length:"incomplete"===t?n.filter((function(n){return!n.done})).length:void 0;var n,t}),[g]);return o.a.createElement(D,null,o.a.createElement(H,null,e,o.a.createElement("span",{className:"sr-only"},"\uc77c \ud560\uc77c")),o.a.createElement(A,null,o.a.createElement(T,null,c),o.a.createElement(P,null,o.a.createElement(F,null,a),o.a.createElement(N,null,x.hour,":",x.min,":",x.sec," ",o.a.createElement(B,null,s)))),o.a.createElement(J,null,"\ubaa8\ub450 ",O,"\uac1c"))},V=e(4);var W=function(n){var t=Object(r.useState)(n),e=Object(u.a)(t,2),o=e[0],c=e[1];return{inputs:o,fnChange:function(n){return c(n.target.value)},fnReset:function(){return c(n)}}};function $(){var n=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\tright: 18px;\n\ttop: 18px;\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\tbackground-color: gold;\n\tborder-radius: 50%;\n\tcursor: pointer;\n"]);return $=function(){return n},n}function q(){var n=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tflex: 1;\n\theight: 30px;\n\tpadding: 0 15px;\n\tfont-size: 12px;\n\tbackground-color: #fff;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n"]);return q=function(){return n},n}function G(){var n=Object(i.a)(["\n\tposition: relative;\n\tpadding: 15px;\n\tdisplay: flex;\n"]);return G=function(){return n},n}var K=l.c.form(G()),Q=l.c.input(q()),U=l.c.button($());var X=function(n){var t=W(""),e=t.inputs,c=t.fnChange,a=t.fnReset,u=Object(r.useRef)(),i=Object(r.useContext)(j()),l=Object(r.useContext)(null===x?null:x);return o.a.createElement(K,{onSubmit:function(n){n.preventDefault(),i(function(n,t){return{type:"todos/CREATE",tit:n,nextId:t}}(e,l.current++)),a(),u.current.focus()}},o.a.createElement(Q,{ref:u,value:e,onChange:c}),o.a.createElement(U,null,o.a.createElement(V.a,null)))};function Y(){var n=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\tright: 18px;\n\ttop: 18px;\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\tbackground-color: pink;\n\tborder-radius: 50%;\n\tcursor: pointer;\n"]);return Y=function(){return n},n}function Z(){var n=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tflex: 1;\n\theight: 30px;\n\tpadding: 0 15px;\n\tfont-size: 12px;\n\tbackground-color: #fff;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n"]);return Z=function(){return n},n}function _(){var n=Object(i.a)(["\n\tposition: relative;\n\tpadding: 15px;\n\tdisplay: flex;\n"]);return _=function(){return n},n}var nn=l.c.form(_()),tn=l.c.input(Z()),en=l.c.button(Y());var rn=function(n){return o.a.createElement(nn,{onSubmit:function(n){n.preventDefault()}},o.a.createElement(tn,null),o.a.createElement(en,null,o.a.createElement(V.a,null)))};function on(){var n=Object(i.a)([""]);return on=function(){return n},n}var cn=l.c.section(on());var an=function(n){var t=n.children;return o.a.createElement(cn,null,t)};function un(){var n=Object(i.a)(["width:40px;font-size:20px;"]);return un=function(){return n},n}function ln(){var n=Object(i.a)(["width:40px;font-size:20px;"]);return ln=function(){return n},n}function fn(){var n=Object(i.a)(["\n\tflex: 1;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n"]);return fn=function(){return n},n}function sn(){var n=Object(i.a)([""]);return sn=function(){return n},n}function dn(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: stretch;\n\twidth: 50px;\n\tfont-size: 25px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: #345343;\n\t}\n"]);return dn=function(){return n},n}function pn(){var n=Object(i.a)(["\n\tdisplay: flex;\n\theight: 70px;\n\talign-items: center;\n\tborder-bottom: 1px solid #555;\n"]);return pn=function(){return n},n}var bn=l.c.li(pn()),mn=l.c.span(dn()),xn=Object(l.c)(mn)(sn()),vn=l.c.h3(fn()),jn=Object(l.c)(mn)(ln()),gn=Object(l.c)(mn)(un());var On=function(n){var t=n.todo,e=t.id,c=t.tit,a=t.done,u=Object(r.useContext)(j());return o.a.createElement(bn,null,o.a.createElement(xn,{onClick:function(){return u(function(n){return{type:"todos/FINISH",id:n}}(e))}},a?o.a.createElement(V.c,null):o.a.createElement(V.d,null)),o.a.createElement(vn,null,c),o.a.createElement(jn,null,o.a.createElement(V.b,null)),o.a.createElement(gn,{onClick:function(){return u(function(n){return{type:"todos/REMOVE",id:n}}(e))}},o.a.createElement(V.e,null)))};function hn(){var n=Object(i.a)([""]);return hn=function(){return n},n}var En=l.c.ul(hn());var yn=function(n){n.fnSelForm;var t=Object(r.useContext)(v()),e=t.todos,c=t.sort;return o.a.createElement(En,null,"all"===c&&e.map((function(n){return o.a.createElement(On,{key:n.id,todo:n})})),"complete"===c&&e.filter((function(n){return n.done})).map((function(n){return o.a.createElement(On,{key:n.id,todo:n})})),"incomplete"===c&&e.filter((function(n){return!n.done})).map((function(n){return o.a.createElement(On,{key:n.id,todo:n})})))};function wn(){var n=Object(i.a)(["\n  background-color:gold;\n"]);return wn=function(){return n},n}function kn(){var n=Object(i.a)(["",""]);return kn=function(){return n},n}function Cn(){var n=Object(i.a)(["\n  background-color:gold;\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(i.a)(["",""]);return Sn=function(){return n},n}function zn(){var n=Object(i.a)(["\n  background-color:gold;\n"]);return zn=function(){return n},n}function Mn(){var n=Object(i.a)(["",""]);return Mn=function(){return n},n}function In(){var n=Object(i.a)(["\n\tbackground: none;\n\toutline: none;\n\tborder: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 5px 10px;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tborder: 1px solid #333;\n\tborder-radius: 15px;\n\tcursor: pointer;\n"]);return In=function(){return n},n}function Rn(){var n=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tpadding: 15px;\n"]);return Rn=function(){return n},n}var Dn=l.c.footer(Rn()),Hn=l.c.button(In()),An=Object(l.c)(Hn)(Mn(),(function(n){return"all"===n.show&&Object(l.b)(zn())})),Tn=Object(l.c)(Hn)(Sn(),(function(n){return"complete"===n.show&&Object(l.b)(Cn())})),Pn=Object(l.c)(Hn)(kn(),(function(n){return"incomplete"===n.show&&Object(l.b)(wn())}));var Fn=function(n){var t=Object(r.useState)("all"),e=Object(u.a)(t,2),c=e[0],a=e[1],i=Object(r.useContext)(j());return o.a.createElement(Dn,null,o.a.createElement(An,{show:c,onClick:function(){a("all"),i(s("all"))}},"\uc804\uccb4\ubcf4\uae30"),o.a.createElement(Tn,{show:c,onClick:function(){a("complete"),i(s("complete"))}},"\ubbf8\uc158\uc644\ub8cc"),o.a.createElement(Pn,{show:c,onClick:function(){a("incomplete"),i(s("incomplete"))}},"\uc544\uc9c1\ubbf8\uc644"))};function Nn(){var n=Object(i.a)(["\n    *{margin:0;padding:0;}\n    ul,ol,li{list-style:none;}\n    a:link,a:hover,a:visited,a:active{text-decoration:none;}\n    body{color:#333;font-size:14px;}\n    .sr-only{position:absolute;left:-9999px;}\n  "]);return Nn=function(){return n},n}function Bn(){var n=Object(i.a)(["\n\tposition: relative;\n\tmax-width: 640px;\n\tmargin: 0 auto;\n\tborder: 1px solid #333;\n\tborder-radius: 0 0 15px 15px;\n"]);return Bn=function(){return n},n}var Jn=l.c.div(Bn()),Ln=Object(l.a)(Nn());var Vn=function(n){var t=Object(r.useState)(!0),e=Object(u.a)(t,2),c=e[0],a=e[1];return o.a.createElement(g,null,o.a.createElement(Ln,null),o.a.createElement(Jn,null,o.a.createElement(E,null,o.a.createElement(L,null),c?o.a.createElement(X,null):o.a.createElement(rn,null)),o.a.createElement(an,null,o.a.createElement(yn,{fnSelForm:function(){a(!c)}})),o.a.createElement(Fn,null)))};var Wn=function(n){return o.a.createElement(Vn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.41ec8f41.chunk.js.map