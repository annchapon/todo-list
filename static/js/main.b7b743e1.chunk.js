(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n(7),s=n.n(c),i=(n(15),function(t){var e=t.toDo,n=t.done;return Object(o.jsxs)("div",{className:"app-header d-flex",children:[Object(o.jsx)("h1",{children:"Todo List"}),Object(o.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})}),r=(n(16),function(){return Object(o.jsx)("input",{className:"form-control search-input",placeholder:"type to search"})}),l=n(2),b=n(3),u=n(5),j=n(4),d=(n(17),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-info",children:"All"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Active"}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Done"})]})}}]),n}(a.Component)),p=n(8),m=n(9),h=(n(18),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={done:!1,important:!1},t.onLabelClick=function(){t.setState((function(t){return{done:!t.done}}))},t.onMarkImportant=function(){t.setState((function(t){return{important:!t.important}}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props.label,e=this.state,n="todo-list-item";return e.done&&(n+=" done"),e.important&&(n+=" important"),Object(o.jsxs)("span",{className:n,children:[Object(o.jsx)("span",{className:"todo-list-item-label",onClick:this.onLabelClick,children:t}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:this.onMarkImportant,children:Object(o.jsx)("i",{className:"fa fa-exclamation"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",children:Object(o.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(a.Component)),f=(n(19),function(t){var e=t.todos.map((function(t){var e=t.id,n=Object(m.a)(t,["id"]);return Object(o.jsx)("li",{className:"list-group-item",children:Object(o.jsx)(h,Object(p.a)({},n))},e)}));return Object(o.jsx)("ul",{className:"list-group todo-list",children:e})}),O=(n(20),function(){return Object(o.jsxs)("div",{className:"todo-app",children:[Object(o.jsx)(i,{toDo:1,done:3}),Object(o.jsxs)("div",{className:"top-panel d-flex",children:[Object(o.jsx)(r,{}),Object(o.jsx)(d,{})]}),Object(o.jsx)(f,{todos:[{label:"Drink coffee",important:!1,id:1},{label:"Drink tea",important:!1,id:2},{label:"Build react app",important:!0,id:3},{label:"Have a lunch",important:!1,id:4}]})]})});s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.b7b743e1.chunk.js.map