(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"ToDoForm_form__2zwIl",inputArea:"ToDoForm_inputArea__9guhb",errorText:"ToDoForm_errorText__3_FD8"}},,,function(e,t,n){e.exports={task:"ToDoItem_task__1s_S2",text:"ToDoItem_text__24L36"}},,function(e,t,n){e.exports={section:"Section_section__3QN43"}},function(e,t,n){e.exports={container:"ToDos_container__1BaRk"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(8),r=n.n(o),c=(n(16),n(11)),i=n(3),s=n(1),a=n.n(s),l=n(9),u=n.n(l),j=n(0),d=function(e){return Object(j.jsx)("section",{className:u.a.section,children:e.children})},b=n(7),h=n.n(b),x=function(e){return Object(j.jsxs)("li",{className:h.a.task,children:[Object(j.jsxs)("div",{className:h.a.text,children:[Object(j.jsx)("h1",{children:e.task.title}),Object(j.jsx)("p",{children:e.task.description})]}),Object(j.jsx)("button",{onClick:e.onRemove,children:"Remove"})]})},m=n(10),f=n.n(m),O=function(e){var t=Object(j.jsx)("h2",{children:"No to dos found. Start adding some!"});e.items.length>0&&(t=Object(j.jsx)("ul",{children:e.items.map((function(t){return Object(j.jsx)(x,{task:t,onRemove:function(){return function(t){var n=e.items.filter((function(e){return e.id!==t}));e.onRemoveToDo(n)}(t.id)}},t.id)}))}));var n=t;return Object(j.jsx)(d,{children:Object(j.jsx)("div",{className:f.a.container,children:n})})},p=n(4),v=n.n(p),_=function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),o=n[0],r=n[1],c=Object(s.useState)(!1),a=Object(i.a)(c,2),l=a[0],u=a[1],j=e(o);return{value:o,isValid:j,hasError:!j&&l,handleValueChange:function(e){r(e.target.value)},handleInputBlur:function(){u(!0)},reset:function(){r(""),u(!1)}}},T=function(e){return""!==e.trim()},g=function(e){var t=_(T),n=t.value,o=t.isValid,r=t.hasError,c=t.handleValueChange,i=t.handleInputBlur,s=t.reset,a=_(T),l=a.value,u=a.isValid,d=a.hasError,b=a.handleValueChange,h=a.handleInputBlur,x=a.reset,m=!1;o&&u&&(m=!0);return Object(j.jsxs)("form",{className:v.a.form,onSubmit:function(t){t.preventDefault(),m&&(console.log(n),e.onEnterToDo(n,l),s(),x())},children:[Object(j.jsxs)("div",{className:v.a.inputArea,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:n,onChange:c,onBlur:i}),r&&Object(j.jsx)("p",{className:v.a.errorText,children:"Title must not be empty."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("input",{type:"text",value:l,onChange:b,onBlur:h}),d&&Object(j.jsx)("p",{className:v.a.errorText,children:"Description must not be empty."})]})]}),Object(j.jsx)("button",{disabled:!m,children:"Add To-Do"})]})},D=function(e){return Object(j.jsx)(d,{children:Object(j.jsx)(g,{onEnterToDo:function(t,n){var o={id:t.length+Math.random(),title:t,description:n};e.onAddToDo(o)}})})};var S=function(){var e=Object(s.useState)((function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]})),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h1",{style:{color:"white",textAlign:"center",fontSize:"2.5rem"},children:"My Simple To Do List"}),Object(j.jsx)(D,{onAddToDo:function(e){o((function(t){return[e].concat(Object(c.a)(t))}))}}),Object(j.jsx)(O,{items:n,onRemoveToDo:function(e){o(e)}})]})};r.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.a2c4546b.chunk.js.map