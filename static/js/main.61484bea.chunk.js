(this["webpackJsonpreact-study24-todo-styled-components-reduce-context-immer3"]=this["webpackJsonpreact-study24-todo-styled-components-reduce-context-immer3"]||[]).push([[0],{15:function(t,n,e){t.exports=e(23)},20:function(t,n,e){},23:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),c=e(10),u=e.n(c),a=(e(20),e(3)),i=e(1),l=e(2),f=e(5),s=e(7),d=function(t){return{type:"todos/SORT",show:t}},b=function(t,n,e){return{type:"todos/EDIT",id:t,name:n,value:e}},p=function(t,n){switch(n.type){case"todos/CREATE":return Object(s.a)(t,(function(t){t.todos.push({id:n.nextId,tit:n.tit,done:!1})}));case"todos/REMOVE":return Object(f.a)({},t,{todos:t.todos.filter((function(t){return t.id!==n.id}))});case"todos/SORT":return console.log(n.show),Object(f.a)({},t,{sort:n.show});case"todos/EDIT":return Object(s.a)(t,(function(t){t.todos.find((function(t){return t.id===n.id}))[n.name]=n.value}));default:throw new Error("\uc5d0\ub7ec\ubc1c\uc0dd - \ud574\ub2f9\ud558\ub294 \uc561\uc158\ud0c0\uc785(".concat(n.type,")\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."))}},m=Object(r.createContext)(null),h=Object(r.createContext)(null),x=Object(r.createContext)(null),v=function(){return null===m?null:m},g=function(){return null===h?null:h};localStorage["todo-store"]=localStorage["todo-store"]||JSON.stringify({todos:[],sort:"incomplete"});var j=function(t){var n=t.children,e=Object(r.useReducer)(p,JSON.parse(localStorage["todo-store"])),c=Object(a.a)(e,2),u=c[0],i=c[1],l=Object(r.useRef)(0);return Object(r.useEffect)((function(){localStorage["todo-store"]=JSON.stringify(u)}),[u]),o.a.createElement(m.Provider,{value:u},o.a.createElement(h.Provider,{value:i},o.a.createElement(x.Provider,{value:l},n)))};function O(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: gold;\n"]);return O=function(){return t},t}var E=l.c.header(O());var w=o.a.memo((function(t){var n=t.children;return o.a.createElement(E,null,n)}));function y(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 150px;\n\tfont-size: 30px;\n\ttext-align: right;\n"]);return y=function(){return t},t}function k(){var t=Object(i.a)(["display: block;"]);return k=function(){return t},t}function C(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 80px;\n\tmargin-left: 20px;\n"]);return C=function(){return t},t}function S(){var t=Object(i.a)(["font-weight: 600;"]);return S=function(){return t},t}function z(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tmargin-top: 2px;\n"]);return z=function(){return t},t}function M(){var t=Object(i.a)(["\n\tdisplay: block;\n\tmargin-top: 16px;\n\tfont-size: 16px;\n"]);return M=function(){return t},t}function R(){var t=Object(i.a)(["flex: 1;"]);return R=function(){return t},t}function I(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100px;\n\tfont-size: 48px;\n"]);return I=function(){return t},t}function D(){var t=Object(i.a)(["\n\tdisplay: flex;\n\theight: 70px;\n\tbackground-color: pink;\n"]);return D=function(){return t},t}var H=l.c.div(D()),T=l.c.h1(I()),A=l.c.p(R()),J=l.c.span(M()),P=l.c.span(z()),N=l.c.span(S()),B=l.c.time(C()),F=l.c.span(k()),L=l.c.h2(y());var V=function(t){var n=new Date,e=n.getDate(),c=n.toLocaleDateString("ko-kr",{year:"numeric"}),u=n.toLocaleDateString("ko-kr",{month:"long"}),i=Object(r.useState)(n.getHours()>=12?"PM":"AM"),l=Object(a.a)(i,2),s=l[0],d=l[1],b=Object(r.useCallback)((function(t){return("00"+t).substr(-2,2)}),[]),p=Object(r.useState)({hour:b("AM"===s?n.getHours():n.getHours()-12),min:b(n.getMinutes()),sec:b(n.getSeconds())}),m=Object(a.a)(p,2),h=m[0],x=m[1];Object(r.useEffect)((function(){setTimeout((function(){var t=new Date;t.getHours()>=12?d("PM"):d("AM"),x(Object(f.a)({},h,{hour:b("AM"===s?t.getHours():t.getHours()-12),min:b(t.getMinutes()),sec:b(t.getSeconds())}))}),1e3)}),[b,s,h]);var g=Object(r.useContext)(v()),j=Object(r.useMemo)((function(){return t=g.todos,"all"===(n=g.sort)?t.length:"complete"===n?t.filter((function(t){return t.done})).length:"incomplete"===n?t.filter((function(t){return!t.done})).length:void 0;var t,n}),[g]);return o.a.createElement(H,null,o.a.createElement(T,null,e,o.a.createElement("span",{className:"sr-only"},"\uc77c \ud560\uc77c")),o.a.createElement(A,null,o.a.createElement(J,null,c),o.a.createElement(P,null,o.a.createElement(N,null,u),o.a.createElement(B,null,h.hour,":",h.min,":",h.sec," ",o.a.createElement(F,null,s)))),o.a.createElement(L,null,"\ubaa8\ub450 ",j,"\uac1c"))},W=e(4);var $=function(t){var n=Object(r.useState)(""),e=Object(a.a)(n,2),o=e[0],c=e[1];return Object(r.useEffect)((function(){c(t)}),[t]),{text:o,fnChange:function(t){return c(t.target.value)},fnReset:function(){return c(t)}}};function q(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\tright: 18px;\n\ttop: 18px;\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\tbackground-color: gold;\n\tborder-radius: 50%;\n\tcursor: pointer;\n"]);return q=function(){return t},t}function G(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tflex: 1;\n\theight: 30px;\n\tpadding: 0 15px;\n\tfont-size: 12px;\n\tbackground-color: #fff;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n"]);return G=function(){return t},t}function K(){var t=Object(i.a)(["\n\tposition: relative;\n\tpadding: 15px;\n\tdisplay: flex;\n"]);return K=function(){return t},t}var Q=l.c.form(K()),U=l.c.input(G()),X=l.c.button(q());var Y=function(t){var n=$(""),e=n.text,c=n.fnChange,u=n.fnReset,a=Object(r.useRef)(),i=Object(r.useContext)(g()),l=Object(r.useContext)(null===x?null:x);return o.a.createElement(Q,{onSubmit:function(t){t.preventDefault(),e&&(i(function(t,n){return{type:"todos/CREATE",nextId:t,tit:n}}(l.current++,e)),u(),a.current.focus())}},o.a.createElement(U,{ref:a,value:e,onChange:c,autoFocus:!0}),o.a.createElement(X,null,o.a.createElement(W.a,null)))};function Z(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\tright: 18px;\n\ttop: 18px;\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\tbackground-color: pink;\n\tborder-radius: 50%;\n\tcursor: pointer;\n"]);return Z=function(){return t},t}function _(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tflex: 1;\n\theight: 30px;\n\tpadding: 0 15px;\n\tfont-size: 12px;\n\tbackground-color: #fff;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n"]);return _=function(){return t},t}function tt(){var t=Object(i.a)(["\n\tposition: relative;\n\tpadding: 15px;\n\tdisplay: flex;\n"]);return tt=function(){return t},t}var nt=l.c.form(tt()),et=l.c.input(_()),rt=l.c.button(Z());var ot=function(t){var n=t.editId,e=t.fnChoice,c=Object(r.useContext)(v()),u=Object(r.useContext)(g()),a=c.todos.filter((function(t){return t.id===n}))[0],i=$(a.tit),l=i.text,f=i.fnChange,s=i.fnReset;return o.a.createElement(nt,{onSubmit:function(t){t.preventDefault(),u(b(n,"tit",l)),e(!0),s()}},o.a.createElement(et,{value:l,onChange:f,autoFocus:!0}),o.a.createElement(rt,null,o.a.createElement(W.a,null)))};function ct(){var t=Object(i.a)(["height: 100%;"]);return ct=function(){return t},t}var ut=l.c.section(ct());var at=function(t){var n=t.children;return o.a.createElement(ut,null,n)};function it(){var t=Object(i.a)(["width:40px;font-size:20px;"]);return it=function(){return t},t}function lt(){var t=Object(i.a)(["width:40px;font-size:20px;"]);return lt=function(){return t},t}function ft(){var t=Object(i.a)(["\n\tflex: 1;\n\theight: 70px;\n\tline-height: 70px;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\t",";\n"]);return ft=function(){return t},t}function st(){var t=Object(i.a)([""]);return st=function(){return t},t}function dt(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: stretch;\n\twidth: 50px;\n\tfont-size: 25px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: #ff4562;\n\t}\n"]);return dt=function(){return t},t}function bt(){var t=Object(i.a)(["\n\tdisplay: flex;\n\theight: 70px;\n\tpadding: 0 10px;\n\talign-items: center;\n\tborder-bottom: 1px solid #555;\n"]);return bt=function(){return t},t}var pt=l.c.li(bt()),mt=l.c.span(dt()),ht=Object(l.c)(mt)(st()),xt=l.c.h3(ft(),(function(t){return t.done&&"color:#dedede;text-decoration:line-through;"})),vt=Object(l.c)(mt)(lt()),gt=Object(l.c)(mt)(it());var jt=function(t){var n=t.todo,e=t.fnChoice,c=t.fnEditId,u=n.id,a=n.tit,i=n.done,l=Object(r.useContext)(g());return o.a.createElement(pt,null,o.a.createElement(ht,{onClick:function(){return l(b(u,"done",!i))}},i?o.a.createElement(W.c,null):o.a.createElement(W.d,null)),o.a.createElement(xt,{done:i,onClick:function(){return l(b(u,"done",!i))}},a),o.a.createElement(vt,{onClick:function(){e(!1),c(u)}},o.a.createElement(W.b,null)),o.a.createElement(gt,{onClick:function(){e(!0),l(function(t){return{type:"todos/REMOVE",id:t}}(u))}},o.a.createElement(W.e,null)))};function Ot(){var t=Object(i.a)(["\n\toverflow-y: scroll;\n\t/* position: absolute;\n\tright: -17px;\n\twidth: calc(100% + 17px); */\n\theight: calc(100% - 210px);\n"]);return Ot=function(){return t},t}var Et=l.c.ul(Ot());var wt=function(t){var n=t.fnChoice,e=t.fnEditId,c=Object(r.useContext)(v()),u=c.todos,a=null;switch(c.sort){case"all":a=u;break;case"complete":a=u.filter((function(t){return t.done}));break;case"incomplete":a=u.filter((function(t){return!t.done}));break;default:return u}return o.a.createElement(Et,null,a.map((function(t){return o.a.createElement(jt,{key:t.id,todo:t,fnChoice:n,fnEditId:e})})))};function yt(){var t=Object(i.a)(["\n  background-color:gold;\n"]);return yt=function(){return t},t}function kt(){var t=Object(i.a)(["",""]);return kt=function(){return t},t}function Ct(){var t=Object(i.a)(["\n  background-color:gold;\n"]);return Ct=function(){return t},t}function St(){var t=Object(i.a)(["",""]);return St=function(){return t},t}function zt(){var t=Object(i.a)(["\n  background-color:gold;\n"]);return zt=function(){return t},t}function Mt(){var t=Object(i.a)(["",""]);return Mt=function(){return t},t}function Rt(){var t=Object(i.a)(["\n\tbackground: none;\n\toutline: none;\n\tborder: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 5px 10px;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tborder: 1px solid #333;\n\tborder-radius: 15px;\n\tcursor: pointer;\n"]);return Rt=function(){return t},t}function It(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: #fff;\n\tborder-top: 1px solid #555;\n"]);return It=function(){return t},t}var Dt=l.c.footer(It()),Ht=l.c.button(Rt()),Tt=Object(l.c)(Ht)(Mt(),(function(t){return"all"===t.show&&Object(l.b)(zt())})),At=Object(l.c)(Ht)(St(),(function(t){return"complete"===t.show&&Object(l.b)(Ct())})),Jt=Object(l.c)(Ht)(kt(),(function(t){return"incomplete"===t.show&&Object(l.b)(yt())}));var Pt=function(t){var n=Object(r.useState)("incomplete"),e=Object(a.a)(n,2),c=e[0],u=e[1],i=Object(r.useContext)(g());return o.a.createElement(Dt,null,o.a.createElement(Jt,{show:c,onClick:function(){u("incomplete"),i(d("incomplete"))}},"\ud574\uc57c\ud560\uc77c"),o.a.createElement(At,{show:c,onClick:function(){u("complete"),i(d("complete"))}},"\ubbf8\uc158\uc644\ub8cc"),o.a.createElement(Tt,{show:c,onClick:function(){u("all"),i(d("all"))}},"\uc804\uccb4\ubcf4\uae30"))};function Nt(){var t=Object(i.a)(["\n\t\theight:","px\n\t"]);return Nt=function(){return t},t}function Bt(){var t=Object(i.a)(["\n\toverflow: hidden;\n\tposition: relative;\n\tmax-width: 640px;\n\tmargin: 0 auto;\n\tborder-radius: 0 0 15px 15px;\n\t",";\n"]);return Bt=function(){return t},t}function Ft(){var t=Object(i.a)(["\n    *{margin:0;padding:0;}\n    ul,ol,li{list-style:none;}\n    a:link,a:hover,a:visited,a:active{text-decoration:none;}\n    body{color:#333;font-size:14px;}\n    .sr-only{position:absolute;left:-9999px;}\n  "]);return Ft=function(){return t},t}var Lt=Object(l.a)(Ft()),Vt=l.c.div(Bt(),(function(t){return t.height&&Object(l.b)(Nt(),t.height)}));var Wt=function(t){var n=Object(r.useState)(!0),e=Object(a.a)(n,2),c=e[0],u=e[1],i=function(t){u(t)},l=Object(r.useState)(null),f=Object(a.a)(l,2),s=f[0],d=f[1],b=Object(r.useState)(),p=Object(a.a)(b,2),m=p[0],h=p[1];return Object(r.useEffect)((function(){h(window.innerHeight)}),[]),o.a.createElement(j,null,o.a.createElement(Lt,null),o.a.createElement(Vt,{height:m},o.a.createElement(w,null,o.a.createElement(V,null),c?o.a.createElement(Y,null):o.a.createElement(ot,{editId:s,fnChoice:i})),o.a.createElement(at,null,o.a.createElement(wt,{fnChoice:i,fnEditId:function(t){return d(t)}})),o.a.createElement(Pt,null)))};var $t=function(t){return o.a.createElement(Wt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement($t,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.61484bea.chunk.js.map