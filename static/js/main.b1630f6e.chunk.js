(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(e,t,c){},61:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(12),s=c.n(a),o=(c(61),c(7)),i=c(43),r=c(46),d=c.n(r),l=(c.p,c(33),c(13)),j=c(15),u=(c(34),c(95)),b=c(40),O=c.n(b),m=c(48),x=c(51),h=c.n(x),f=c(49),p=c.n(f),v=c(50),y=c.n(v),g=c(22),N=c.n(g),T=c(41),w=c.n(T),I="ADD_TO_LIST",S="DELETE_TO_LIST",_="Reset_Todo",E="CHECK_TO_LIST",L="Edit_TO_LIST",A="SET_FILTER",k=0,D=c(2);var C=Object(l.b)((function(e){return{todolist:e.todos.data}}))((function(e){var t=Object(n.useState)(e.text),c=Object(j.a)(t,2),a=(c[0],c[1],Object(n.useState)(!1)),s=Object(j.a)(a,2),o=(s[0],s[1],function(){var t=Object(m.a)(O.a.mark((function t(){var c,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.fire({title:"Update Your TodoItem ",input:"text",inputValue:e.text});case 2:c=t.sent,(n=c.value)&&(w.a.fire({title:"yeah!!!",text:"successfully Update Todo",icon:"success"}),e.dispatch((a=n,s=e.id,console.log(a),{type:L,data:a,id:s})));case 5:case"end":return t.stop()}var a,s}),t)})));return function(){return t.apply(this,arguments)}}());return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("li",{className:" pl-3 p-2 m-3  item",style:{textDecoration:e.cmpt?"line-through":"none",backgroundColor:"#00000013",fontSize:"1.5em",boxShadow:"10px 10px grey"},children:Object(D.jsxs)("div",{className:"row justify-content-center p-0 ",children:[Object(D.jsx)("div",{className:"col-12 text-center text-md-left col-md pl-xs-3 ",children:Object(D.jsxs)("span",{className:"text-break",children:[" ",e.text," "]})}),Object(D.jsx)("div",{className:"col-auto p-0",children:Object(D.jsx)(u.a,{onClick:function(t){var c;console.log(e.cmpt),e.dispatch((c=e.id,{type:E,id:c}))},children:Object(D.jsx)(p.a,{className:"text-success"})})}),Object(D.jsx)("div",{className:"col-auto ",children:Object(D.jsx)(u.a,{onClick:o,children:Object(D.jsx)(y.a,{className:"text-primary"})})}),Object(D.jsx)("div",{className:"col-auto ",children:Object(D.jsx)(u.a,{onClick:function(){N()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this item!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){var c;t&&(e.dispatch((c=e.id,console.log(c),{type:S,id:c})),N()("Deleted successfully!",{icon:"success"}))}))},children:Object(D.jsx)(h.a,{className:"text-danger"})})})]})})})})),F=c(20),R=Object(l.b)((function(e){return{todos:e.todos.data}}))((function(e){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(F.a,{onSelect:e.select,children:[Object(D.jsx)(F.a.Toggle,{variant:"info",id:"dropdown-basic",children:e.filter}),Object(D.jsxs)(F.a.Menu,{children:[Object(D.jsx)(F.a.Item,{eventKey:"All",children:"All"}),Object(D.jsx)(F.a.Item,{eventKey:"Completed",children:"Completed"}),Object(D.jsx)(F.a.Item,{eventKey:"Uncompleted",children:"Uncompleted"})]})]})})}));var U=Object(l.b)((function(e){return{todos:e.todos.data,filter:e.todos.filter}}))((function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),r=i[0],d=i[1],l=Object(n.useState)("All"),b=Object(j.a)(l,2),O=b[0],m=b[1],x=Object(n.useState)(e.todos),h=Object(j.a)(x,2),f=h[0],p=h[1];console.log(e.todos);var v=function(){""===a&&d("enter some todo item in list")};return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"m-md-5 m-1 todoItems",children:[Object(D.jsxs)("div",{className:"row justify-content-center",children:[Object(D.jsxs)("div",{className:"col-sm-8 pb-4",children:[Object(D.jsx)("input",{type:"text",placeholder:"What you Want to Do....!",className:"form-control ",onChange:function(e){s(e.target.value)},name:"userInpt",value:a,onKeyPress:function(t){"Enter"===t.key&&(d(""),""===a?v():(e.AddToListHandler(a),s("")))}}),Object(D.jsx)("span",{className:"text-danger ",children:Object(D.jsx)("b",{children:r})})]}),Object(D.jsx)("div",{className:"col-sm-auto",children:Object(D.jsxs)("div",{className:"row justify-content-center",children:[Object(D.jsx)("div",{className:"col-auto",children:Object(D.jsx)(u.a,{variant:"contained",color:"primary",className:"h-100",onClick:function(t){d(""),""===a?v():(e.AddToListHandler(a),s(""))},children:"ADD"})}),Object(D.jsx)("div",{className:"col-auto",children:Object(D.jsx)(u.a,{variant:"contained",color:"primary",className:"h-100",onClick:function(){N()({title:"Are you sure?",text:"Once Reset, you will not be able to recover this item!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&(e.dispatch({type:_}),N()("Reset successfully!",{icon:"success"}))}))},children:"Reset"})}),Object(D.jsx)("div",{className:"col-auto",children:Object(D.jsx)(R,{select:function(t){if(m(t),e.dispatch(function(e){return{type:"SET_FILTER",filter:e}}(t)),"All"===t)p(e.todos);else if("Uncompleted"===t){var c=e.todos.filter((function(e){return!e.completed}));p(c)}else"Completed"===t&&p(e.todos.filter((function(e){return e.completed})))},filter:O})})]})})]}),Object(D.jsx)("div",{className:"row  p-3",children:Object(D.jsx)("div",{className:"col p-0",children:0!=e.todos.length?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("ul",{className:"list-inline  ",children:f.map((function(e,t){return Object(D.jsx)(C,{text:e.data,id:e.id,cmpt:e.completed},t)}))})}):Object(D.jsx)("div",{className:"row justify-content-center",children:Object(D.jsxs)("div",{className:"col  text-center",children:[Object(D.jsx)("h2",{className:"text-dark",children:Object(D.jsx)("b",{children:"ADD Somthing in TodoList"})}),Object(D.jsx)("img",{src:"https://images.squarespace-cdn.com/content/v1/5bff12f036099b60838b10f7/1561757621406-SVJ2YX8DXFBLXEO1RBBS/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITnpAyX_dGZoSaTWLsWN0zAj5xdGjLNRKp-vUPPLOxh8/book_scene1.gif?format=500w",className:"img-fluid"})]})})})})]})})})),M=c(42),W=c(14),H={data:[]};var K=Object(l.b)((function(e){return{todos:e.todos.data}}),(function(e){return{AddToListHandler:function(t){return e(function(e){return console.log(e),{type:I,data:e,id:k++,completed:!1}}(t))}}}))(U);var P=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"container-fluid ",children:[Object(D.jsx)("p",{className:"h2 text-center p-3 mt-4 text-info",children:"TODO MANAGER"}),Object(D.jsx)(K,{})]})})},X=c(52),Z=c.n(X),z=c(53),B={todos:[],visibilityFilter:"SHOW_ALL"},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.filter;default:return e}},J=Object(o.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return console.log(e),{data:[].concat(Object(W.a)(e.data),[{data:t.data,id:t.id,completed:!1}])};case S:var c=e.data.filter((function(e){return e.id!==t.id}));return Object(M.a)(Object(M.a)({},e),{},{data:c});case E:var n=e.data.findIndex((function(e){return e.id===t.id}));return e.data[n].completed=!e.data[n].completed,{data:Object(W.a)(e.data)};case L:var a=e.data.findIndex((function(e){return e.id===t.id}));return e.data[a].data=t.data,{data:Object(W.a)(e.data)};case _:return H;default:return e}},visibilityFilter:G}),V={key:"root",storage:d.a},q=Object(i.a)(V,J),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Q=Object(o.e)(q,Y(Object(o.a)(Z.a))),$=Object(i.b)(Q),ee=function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(l.a,{store:Q,children:Object(D.jsx)(z.a,{loading:null,persistor:$,children:Object(D.jsx)(P,{})})})})};s.a.render(Object(D.jsx)(ee,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.b1630f6e.chunk.js.map