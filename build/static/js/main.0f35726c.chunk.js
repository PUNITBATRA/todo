(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(16),i=n.n(a),r=(n(21),n(11)),d=n(9),s=(n(22),n(30)),j=(n(23),n(31)),l=n(5);function u(e){var t=e.todo,n=e.index,c=e.cancelTodo,o=e.deleteTodo;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("span",{style:{textDecoration:t.done?"line-through":""},children:t.text}),Object(l.jsxs)("div",{children:[Object(l.jsx)(j.a,{variant:"outline-success",onClick:function(){return c(n)},children:"Cancel"}),Object(l.jsx)(j.a,{variant:"outline-danger",onClick:function(){return o(n)},children:"Delete"})]})]})}var b=n(29);function x(e){var t=e.addTodo,n=o.a.useState(""),c=Object(d.a)(n,2),a=c[0],i=c[1];return Object(l.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),a&&(t(a),i(""))},children:[Object(l.jsxs)(b.a.Group,{children:[Object(l.jsx)(b.a.Label,{children:Object(l.jsx)("b",{children:"Add Todo"})}),Object(l.jsx)(b.a.Control,{type:"text",className:"input",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Add new todo"})]}),Object(l.jsx)(j.a,{variant:"primary mb-3",type:"submit",children:"Submit"})]})}var h=function(){var e=o.a.useState([{text:"This is a default initial todo",done:!1}]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=function(e){var t=Object(r.a)(n);t[e].done=!0,c(t)},i=function(e){var t=Object(r.a)(n);t.splice(e,1),c(t)};return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"text-center mb-4",children:"Todo List"}),Object(l.jsx)(x,{addTodo:function(e){var t=[].concat(Object(r.a)(n),[{text:e}]);c(t)}}),Object(l.jsx)("div",{children:n.map((function(e,t){return Object(l.jsx)(s.a,{children:Object(l.jsx)(s.a.Body,{children:Object(l.jsx)(u,{index:t,todo:e,cancelTodo:a,deleteTodo:i},t)})})}))})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.0f35726c.chunk.js.map