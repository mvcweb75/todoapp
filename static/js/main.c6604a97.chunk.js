(this["webpackJsonpreact-study24-todo-styled-components-reduce-context-immer3"]=this["webpackJsonpreact-study24-todo-styled-components-reduce-context-immer3"]||[]).push([[0],{15:function(t,n,e){t.exports=e(23)},20:function(t,n,e){},23:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),c=e(10),a=e.n(c),u=(e(20),e(3)),i=e(1),l=e(2),f=e(5),s=e(7),d=Object(r.useCallback)((function(t,n){return{type:"todos/CREATE",nextId:t,tit:n}}),[]),b=Object(r.useCallback)((function(t){return{type:"todos/REMOVE",id:t}}),[]),p=Object(r.useCallback)((function(t){return{type:"todos/SORT",show:t}}),[]),m=Object(r.useCallback)((function(t,n,e){return{type:"todos/EDIT",id:t,name:n,value:e}}),[]),j={todos:[],sort:"all"},O=function(t,n){switch(n.type){case"todos/CREATE":return Object(s.a)(t,(function(t){t.todos.push({id:n.nextId,tit:n.tit,done:!1})}));case"todos/REMOVE":return Object(f.a)({},t,{todos:t.todos.filter((function(t){return t.id!==n.id}))});case"todos/SORT":return console.log(n.show),Object(f.a)({},t,{sort:n.show});case"todos/EDIT":return Object(s.a)(t,(function(t){t.todos.find((function(t){return t.id===n.id}))[n.name]=n.value}));default:throw new Error("\uc5d0\ub7ec\ubc1c\uc0dd - \ud574\ub2f9\ud558\ub294 \uc561\uc158\ud0c0\uc785(".concat(n.type,")\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."))}},v=Object(r.createContext)(null),h=Object(r.createContext)(null),x=Object(r.createContext)(null),g=Object(r.useCallback)((function(){return null===v?null:v}),[]),E=Object(r.useCallback)((function(){return null===h?null:h}),[]),k=Object(r.useCallback)((function(){return null===x?null:x}),[]);var C=o.a.memo((function(t){var n=t.children,e=Object(r.useReducer)(O,JSON.parse(localStorage["todo-store"]||JSON.stringify(j))),c=Object(u.a)(e,2),a=c[0],i=c[1],l=Object(r.useRef)(0);return Object(r.useEffect)((function(){localStorage["todo-store"]=JSON.stringify(a)}),[a]),o.a.createElement(v.Provider,{value:a},o.a.createElement(h.Provider,{value:i},o.a.createElement(x.Provider,{value:l},n)))}));function w(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: gold;\n"]);return w=function(){return t},t}var y=l.c.header(w());var S=o.a.memo((function(t){var n=t.children;return o.a.createElement(y,null,n)}));function z(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 150px;\n\tfont-size: 30px;\n\ttext-align: right;\n"]);return z=function(){return t},t}function R(){var t=Object(i.a)([""]);return R=function(){return t},t}function I(){var t=Object(i.a)(["\n\tjustify-content: space-between;\n\twidth: 62px;\n"]);return I=function(){return t},t}function D(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tmargin-top: 2px;\n"]);return D=function(){return t},t}function T(){var t=Object(i.a)([""]);return T=function(){return t},t}function M(){var t=Object(i.a)(["margin-right: 10px;"]);return M=function(){return t},t}function H(){var t=Object(i.a)(["\n\tmargin-top: 16px;\n\tfont-size: 16px;\n"]);return H=function(){return t},t}function J(){var t=Object(i.a)(["flex: 1;"]);return J=function(){return t},t}function N(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100px;\n\tfont-size: 48px;\n"]);return N=function(){return t},t}function L(){var t=Object(i.a)(["\n\tdisplay: flex;\n\theight: 70px;\n\tbackground-color: pink;\n"]);return L=function(){return t},t}var P=l.c.div(L()),A=l.c.h1(N()),B=l.c.div(J()),F=l.c.p(H()),V=l.c.span(M()),W=l.c.span(T()),K=l.c.span(D()),$=l.c.time(I()),q=l.c.span(R()),G=l.c.h2(z()),Q=Object(r.useCallback)((function(t,n){return"all"===n?t.length:"complete"===n?t.filter((function(t){return t.done})).length:"incomplete"===n?t.filter((function(t){return!t.done})).length:void 0}),[]);var U=o.a.memo((function(t){var n=new Date,e=n.getDate(),c=n.toLocaleDateString("ko-kr",{year:"numeric"}),a=n.toLocaleDateString("ko-kr",{month:"long"}),i=n.toLocaleDateString("ko-KR",{weekday:"long"}),l=Object(r.useCallback)((function(t){return("00"+t).substr(-2,2)}),[]),s=Object(r.useState)({hour:l(n.getHours()>=13&&n.getHours()-12),min:l(n.getMinutes()),sec:l(n.getSeconds())}),d=Object(u.a)(s,2),b=d[0],p=d[1];Object(r.useEffect)((function(){setTimeout((function(){var t=new Date;p(Object(f.a)({},b,{hour:l(t.getHours()>=13&&t.getHours()-12),min:l(t.getMinutes()),sec:l(t.getSeconds())}))}),1e3)}),[l,b]);var m=Object(r.useContext)(g()),j=Object(r.useMemo)((function(){return Q(m.todos,m.sort)}),[m]);return o.a.createElement(P,null,o.a.createElement(A,null,e,o.a.createElement("span",{className:"sr-only"},"\uc77c \ud560\uc77c")),o.a.createElement(B,null,o.a.createElement(F,null,o.a.createElement(V,null,c),o.a.createElement(W,null,a)),o.a.createElement(K,null,o.a.createElement($,null,b.hour,":",b.min,":",b.sec),o.a.createElement(q,null,i))),o.a.createElement(G,null,"\ubaa8\ub450 ",j,"\uac1c"))})),X=e(4);var Y=function(t){var n=Object(r.useState)(""),e=Object(u.a)(n,2),o=e[0],c=e[1],a=Object(r.useCallback)((function(t){return c(t.target.value)}),[]),i=Object(r.useCallback)((function(){return c(t)}),[]);return Object(r.useEffect)((function(){c(t)}),[t]),{text:o,fnChange:a,fnReset:i}};function Z(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\tright: 18px;\n\ttop: 18px;\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\tbackground-color: gold;\n\tborder-radius: 50%;\n\tcursor: pointer;\n"]);return Z=function(){return t},t}function _(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tflex: 1;\n\theight: 30px;\n\tpadding: 0 15px;\n\tfont-size: 12px;\n\tbackground-color: #fff;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n"]);return _=function(){return t},t}function tt(){var t=Object(i.a)(["\n\tposition: relative;\n\tpadding: 15px;\n\tdisplay: flex;\n"]);return tt=function(){return t},t}var nt=l.c.form(tt()),et=l.c.input(_()),rt=l.c.button(Z());var ot=o.a.memo((function(t){var n=Y(""),e=n.text,c=n.fnChange,a=n.fnReset,u=Object(r.useRef)(),i=Object(r.useContext)(E()),l=Object(r.useContext)(k());return o.a.createElement(nt,{onSubmit:function(t){t.preventDefault(),e&&(i(d(l.current++,e)),a(),u.current.focus())}},o.a.createElement(et,{ref:u,value:e,onChange:c,autoFocus:!0}),o.a.createElement(rt,null,o.a.createElement(X.a,null)))}));function ct(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\tright: 18px;\n\ttop: 18px;\n\twidth: 24px;\n\theight: 24px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\tbackground-color: pink;\n\tborder-radius: 50%;\n\tcursor: pointer;\n"]);return ct=function(){return t},t}function at(){var t=Object(i.a)(["\n\tborder: none;\n\toutline: none;\n\tbackground: none;\n\tflex: 1;\n\theight: 30px;\n\tpadding: 0 15px;\n\tfont-size: 12px;\n\tbackground-color: #fff;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n"]);return at=function(){return t},t}function ut(){var t=Object(i.a)(["\n\tposition: relative;\n\tpadding: 15px;\n\tdisplay: flex;\n"]);return ut=function(){return t},t}var it=l.c.form(ut()),lt=l.c.input(at()),ft=l.c.button(ct());var st=o.a.memo((function(t){var n=t.editId,e=t.fnChoice,c=Object(r.useContext)(g()),a=Object(r.useContext)(E()),u=c.todos.filter((function(t){return t.id===n}))[0],i=Y(u.tit),l=i.text,f=i.fnChange,s=i.fnReset;return o.a.createElement(it,{onSubmit:function(t){t.preventDefault(),a(m(n,"tit",l)),e(!0),s()}},o.a.createElement(lt,{value:l,onChange:f,autoFocus:!0}),o.a.createElement(ft,null,o.a.createElement(X.a,null)))}));function dt(){var t=Object(i.a)(["height: 100%;"]);return dt=function(){return t},t}var bt=l.c.section(dt());var pt=o.a.memo((function(t){var n=t.children;return o.a.createElement(bt,null,n)}));function mt(){var t=Object(i.a)(["width:40px;font-size:20px;"]);return mt=function(){return t},t}function jt(){var t=Object(i.a)(["width:40px;font-size:20px;"]);return jt=function(){return t},t}function Ot(){var t=Object(i.a)(["\n\tflex: 1;\n\theight: 70px;\n\tline-height: 70px;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\t",";\n"]);return Ot=function(){return t},t}function vt(){var t=Object(i.a)([""]);return vt=function(){return t},t}function ht(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: stretch;\n\twidth: 50px;\n\tfont-size: 25px;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tcolor: #ff4562;\n\t}\n"]);return ht=function(){return t},t}function xt(){var t=Object(i.a)(["\n\tdisplay: flex;\n\theight: 70px;\n\tpadding: 0 10px;\n\talign-items: center;\n\tborder-bottom: 1px solid #555;\n"]);return xt=function(){return t},t}var gt=l.c.li(xt()),Et=l.c.span(ht()),kt=Object(l.c)(Et)(vt()),Ct=l.c.h3(Ot(),(function(t){return t.done&&"color:#dedede;text-decoration:line-through;"})),wt=Object(l.c)(Et)(jt()),yt=Object(l.c)(Et)(mt());var St=o.a.memo((function(t){var n=t.todo,e=t.fnChoice,c=t.fnEditId,a=n.id,u=n.tit,i=n.done,l=Object(r.useContext)(E());return o.a.createElement(gt,null,o.a.createElement(kt,{onClick:function(){return l(m(a,"done",!i))}},i?o.a.createElement(X.c,null):o.a.createElement(X.d,null)),o.a.createElement(Ct,{done:i,onClick:function(){return l(m(a,"done",!i))}},u),o.a.createElement(wt,{onClick:function(){e(!1),c(a)}},o.a.createElement(X.b,null)),o.a.createElement(yt,{onClick:function(){e(!0),l(b(a))}},o.a.createElement(X.e,null)))}));function zt(){var t=Object(i.a)(["\n\toverflow-y: scroll;\n\theight: calc(100% - 210px);\n"]);return zt=function(){return t},t}var Rt=l.c.ul(zt());var It=o.a.memo((function(t){var n=t.fnChoice,e=t.fnEditId,c=Object(r.useContext)(g()),a=c.todos,u=null;switch(c.sort){case"all":u=a;break;case"complete":u=a.filter((function(t){return t.done}));break;case"incomplete":u=a.filter((function(t){return!t.done}));break;default:return a}return o.a.createElement(Rt,null,u.map((function(t){return o.a.createElement(St,{key:t.id,todo:t,fnChoice:n,fnEditId:e})})))}));function Dt(){var t=Object(i.a)(["\n  background-color:gold;\n"]);return Dt=function(){return t},t}function Tt(){var t=Object(i.a)(["",""]);return Tt=function(){return t},t}function Mt(){var t=Object(i.a)(["\n  background-color:gold;\n"]);return Mt=function(){return t},t}function Ht(){var t=Object(i.a)(["",""]);return Ht=function(){return t},t}function Jt(){var t=Object(i.a)(["\n  background-color:gold;\n"]);return Jt=function(){return t},t}function Nt(){var t=Object(i.a)(["",""]);return Nt=function(){return t},t}function Lt(){var t=Object(i.a)(["\n\tbackground: none;\n\toutline: none;\n\tborder: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 5px 10px;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tborder: 1px solid #333;\n\tborder-radius: 15px;\n\tcursor: pointer;\n"]);return Lt=function(){return t},t}function Pt(){var t=Object(i.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n\twidth: 100%;\n\theight: 80px;\n\tbackground-color: #fff;\n\tborder-top: 1px solid #555;\n"]);return Pt=function(){return t},t}var At=l.c.footer(Pt()),Bt=l.c.button(Lt()),Ft=Object(l.c)(Bt)(Nt(),(function(t){return"all"===t.show&&Object(l.b)(Jt())})),Vt=Object(l.c)(Bt)(Ht(),(function(t){return"complete"===t.show&&Object(l.b)(Mt())})),Wt=Object(l.c)(Bt)(Tt(),(function(t){return"incomplete"===t.show&&Object(l.b)(Dt())}));var Kt=o.a.memo((function(t){var n=Object(r.useContext)(g()).sort,e=Object(r.useContext)(E()),c=Object(r.useState)(n),a=Object(u.a)(c,2),i=a[0],l=a[1];return o.a.createElement(At,null,o.a.createElement(Ft,{show:i,onClick:function(){l("all"),e(p("all"))}},"\uc804\uccb4\ubcf4\uae30"),o.a.createElement(Wt,{show:i,onClick:function(){l("incomplete"),e(p("incomplete"))}},"\ud574\uc57c\ud560\uc77c"),o.a.createElement(Vt,{show:i,onClick:function(){l("complete"),e(p("complete"))}},"\ubbf8\uc158\uc644\ub8cc"))}));function $t(){var t=Object(i.a)(["\n\t\theight:","px\n\t"]);return $t=function(){return t},t}function qt(){var t=Object(i.a)(["\n\toverflow: hidden;\n\tposition: relative;\n\tmax-width: 640px;\n\tmargin: 0 auto;\n\tborder-radius: 0 0 15px 15px;\n\t",";\n"]);return qt=function(){return t},t}function Gt(){var t=Object(i.a)(["\n    *{margin:0;padding:0;}\n    ul,ol,li{list-style:none;}\n    a:link,a:hover,a:visited,a:active{text-decoration:none;}\n    body{color:#333;font-size:14px;}\n    .sr-only{position:absolute;left:-9999px;}\n  "]);return Gt=function(){return t},t}var Qt=Object(l.a)(Gt()),Ut=l.c.div(qt(),(function(t){return t.height&&Object(l.b)($t(),t.height)}));var Xt=o.a.memo((function(t){var n=Object(r.useState)(!0),e=Object(u.a)(n,2),c=e[0],a=e[1],i=Object(r.useCallback)((function(t){a(t)}),[]),l=Object(r.useState)(null),f=Object(u.a)(l,2),s=f[0],d=f[1],b=Object(r.useCallback)((function(t){return d(t)}),[]),p=Object(r.useState)(),m=Object(u.a)(p,2),j=m[0],O=m[1];return Object(r.useEffect)((function(){O(window.innerHeight)}),[]),o.a.createElement(C,null,o.a.createElement(Qt,null),o.a.createElement(Ut,{height:j},o.a.createElement(S,null,o.a.createElement(U,null),c?o.a.createElement(ot,null):o.a.createElement(st,{editId:s,fnChoice:i})),o.a.createElement(pt,null,o.a.createElement(It,{fnChoice:i,fnEditId:b})),o.a.createElement(Kt,null)))}));var Yt=function(t){return o.a.createElement(Xt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Yt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c6604a97.chunk.js.map