(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{34:function(e,t,c){},61:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(13),s=c.n(n),o=(c(61),c(8)),i=c(43),r=c(46),l=c.n(r),d=(c.p,c(34),c(14)),j=c(16),u=(c(35),c(95)),b=c(41),O=c.n(b),m=c(48),x=c(51),p=c.n(x),h=c(49),f=c.n(h),v=c(50),g=c.n(v),N=c(22),y=c.n(N),T=c(42),w=c.n(T),I="ADD_TO_LIST",L="DELETE_TO_LIST",_="Reset_Todo",k="CHECK_TO_LIST",D="Edit_TO_LIST",E="SET_FILTER",S=0,A=c(2);var C=Object(d.b)((function(e){return{todolist:e.ListData.data}}))((function(e){var t=Object(a.useState)(e.text),c=Object(j.a)(t,2),n=(c[0],c[1],Object(a.useState)(!1)),s=Object(j.a)(n,2),o=(s[0],s[1],function(){var t=Object(m.a)(O.a.mark((function t(){var c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.fire({title:"Update Your TodoItem ",input:"text",inputValue:e.text});case 2:c=t.sent,(a=c.value)&&(w.a.fire({title:"yeah!!!",text:"successfully Update Todo",icon:"success"}),e.dispatch((n=a,s=e.id,console.log(n),{type:D,data:n,id:s})));case 5:case"end":return t.stop()}var n,s}),t)})));return function(){return t.apply(this,arguments)}}());return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("li",{className:" pl-3 p-2 m-3  item",style:{textDecoration:e.cmpt?"line-through":"none",backgroundColor:"#00000013",fontSize:"1.5em",boxShadow:"10px 10px grey"},children:Object(A.jsxs)("div",{className:"row justify-content-center p-0 ",children:[Object(A.jsx)("div",{className:"col-12 text-center text-md-left col-md pl-xs-3 ",children:Object(A.jsxs)("span",{className:"text-break",children:[" ",e.text," "]})}),Object(A.jsx)("div",{className:"col-auto p-0",children:Object(A.jsx)(u.a,{onClick:function(t){var c;console.log(e.cmpt),e.dispatch((c=e.id,{type:k,id:c}))},children:Object(A.jsx)(f.a,{className:"text-success"})})}),Object(A.jsx)("div",{className:"col-auto p-0",children:Object(A.jsx)(u.a,{onClick:o,children:Object(A.jsx)(g.a,{className:"text-primary"})})}),Object(A.jsx)("div",{className:"col-auto p-0 ",children:Object(A.jsx)(u.a,{onClick:function(){y()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this item!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){var c;t&&(e.dispatch((c=e.id,console.log(c),{type:L,id:c})),y()("Deleted successfully!",{icon:"success"}))}))},children:Object(A.jsx)(p.a,{className:"text-danger"})})})]})})})})),U=c(20),M=Object(d.b)((function(e){return{todos:e.ListData.data}}))((function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(U.a,{onSelect:e.select,children:[Object(A.jsx)(U.a.Toggle,{variant:"info",id:"dropdown-basic",className:"btn btn-block",children:e.filter}),Object(A.jsxs)(U.a.Menu,{children:[Object(A.jsx)(U.a.Item,{eventKey:"All",children:"All"}),Object(A.jsx)(U.a.Item,{eventKey:"Completed",children:"Completed"}),Object(A.jsx)(U.a.Item,{eventKey:"Uncompleted",children:"Uncompleted"})]})]})})}));var R=Object(d.b)((function(e){return{todos:e.ListData.data2}}))((function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],s=c[1],o=Object(a.useState)(""),i=Object(j.a)(o,2),r=i[0],l=i[1],d=Object(a.useState)("All"),b=Object(j.a)(d,2),O=b[0],m=b[1];console.log(e.todos);var x=function(){""===n&&l("enter some todo item in list")};return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"m-md-5 m-1 todoItems",children:[Object(A.jsxs)("div",{className:"row justify-content-center",children:[Object(A.jsxs)("div",{className:"col-lg-8 pb-4",children:[Object(A.jsx)("input",{type:"text",placeholder:"What you Want to Do....!",className:"form-control ",onChange:function(e){s(e.target.value)},name:"userInpt",value:n,onKeyPress:function(t){"Enter"===t.key&&(l(""),""===n?x():(e.AddToListHandler(n),s("")))}}),Object(A.jsx)("span",{className:"text-danger ",children:Object(A.jsx)("b",{children:r})})]}),Object(A.jsx)("div",{className:"col-lg",children:Object(A.jsxs)("div",{className:"row justify-content-center",children:[Object(A.jsx)("div",{className:"col-3 col-sm-auto col-lg-3 col-xlg-auto pr-0 ",children:Object(A.jsx)(u.a,{variant:"contained",color:"primary",className:"h-100 btn btn-block",onClick:function(t){l(""),""===n?x():(e.AddToListHandler(n),s(""))},children:"ADD"})}),Object(A.jsx)("div",{className:"col-4  col-sm-auto col-lg-4 col-xlg-auto pr-0",children:Object(A.jsx)(u.a,{variant:"contained",color:"primary",className:"h-100 btn btn-block",onClick:function(t){y()({title:"Are you sure?",text:"Once Reset, you will not be able to recover this item!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&(e.dispatch({type:_}),y()("Reset successfully!",{icon:"success"}))})),t.preventDefault()},children:"Reset"})}),Object(A.jsx)("div",{className:"col-5 col-sm-4 col-lg-5 col-xlg-5 pl-2 pr-0",children:Object(A.jsx)(M,{select:function(t){m(t),e.dispatch({type:E,filter:t})},filter:O})})]})})]}),Object(A.jsx)("div",{className:"row  p-3",children:Object(A.jsx)("div",{className:"col p-0",children:0!=e.todos.length?Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("ul",{className:"list-inline  ",children:e.todos.map((function(e,t){return Object(A.jsx)(C,{text:e.data,id:e.id,cmpt:e.completed},t)}))})}):Object(A.jsx)("div",{className:"row justify-content-center",children:Object(A.jsxs)("div",{className:"col  text-center",children:[Object(A.jsx)("h2",{className:"text-dark",children:Object(A.jsx)("b",{children:"Nothing in todoList"})}),Object(A.jsx)("img",{src:"https://images.squarespace-cdn.com/content/v1/5bff12f036099b60838b10f7/1561757621406-SVJ2YX8DXFBLXEO1RBBS/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PITnpAyX_dGZoSaTWLsWN0zAj5xdGjLNRKp-vUPPLOxh8/book_scene1.gif?format=500w",className:"img-fluid"})]})})})})]})})})),F=c(23),K=c(7),P={data:[],data2:[]};var W=Object(d.b)((function(e){return{todos:e.ListData.data}}),(function(e){return{AddToListHandler:function(t){return e(function(e){return console.log(e),{type:I,data:e,id:S++,completed:!1}}(t))}}}))(R);var X=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"container-fluid ",children:[Object(A.jsx)("p",{className:"h2 text-center p-3 mt-4 text-info",children:"TODO MANAGER"}),Object(A.jsx)(W,{})]})})},H=c(52),Z=c.n(H),z=c(53),B=Object(o.c)({ListData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(e.data,e.filter,t.type){case I:return console.log(e),{data:[].concat(Object(K.a)(e.data),[{data:t.data,id:t.id,completed:!1}]),data2:[].concat(Object(K.a)(e.data),[{data:t.data,id:t.id,completed:!1}])};case L:var c=e.data.filter((function(e){return e.id!==t.id}));return Object(F.a)(Object(F.a)({},e),{},{data:c,data2:c});case k:var a=e.data.findIndex((function(e){return e.id===t.id}));return e.data[a].completed=!e.data[a].completed,{data:Object(K.a)(e.data),data2:Object(K.a)(e.data)};case D:var n=e.data.findIndex((function(e){return e.id===t.id}));return e.data[n].data=t.data,{data:Object(K.a)(e.data),data2:Object(K.a)(e.data)};case _:return P;case E:var s,o=t.filter,i=[],r=e.data;return i.push(r),console.log(i),s="Completed"===o?r.filter((function(e){return e.completed})):"Uncompleted"===o?r.filter((function(e){return!e.completed})):e.data,{data:Object(K.a)(e.data),data2:s};default:return e}}}),G={key:"root",storage:l.a},J=Object(i.a)(G,B),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,q=Object(o.e)(J,V(Object(o.a)(Z.a))),Y=Object(i.b)(q),Q=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(d.a,{store:q,children:Object(A.jsx)(z.a,{loading:null,persistor:Y,children:Object(A.jsx)(X,{})})})})};s.a.render(Object(A.jsx)(Q,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8b4e7f82.chunk.js.map