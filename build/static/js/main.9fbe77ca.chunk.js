(this.webpackJsonphw=this.webpackJsonphw||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(10),c=n.n(r),s=(n(72),n(18)),i=n(19),d=n(22),l=n(21),u=(n(73),n(39)),j=n(127),b=n(29),m=n(14),p=n(58),h=n(131),O=n(123),g=n(129),x=n(126),f=n(130),v=n(55),C=n.n(v),I=n(51),k=n(118),w=n(121),y=n(56),T=n.n(y),L=n(57),D=n.n(L),S=n(125),A=n(124),N=n(5),P=Object(k.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(11),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(12)},submit:{margin:e.spacing(10,0,10)}}}));function R(){var e,t=P(),n=a.a.useState({amount:"",password:"",showPassword:!1}),o=Object(p.a)(n,2),r=o[0],c=o[1];return Object(N.jsxs)(w.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(O.a,{}),Object(N.jsxs)("div",{className:t.paper,children:[Object(N.jsx)(h.a,{className:t.avatar,children:Object(N.jsx)(C.a,{})}),Object(N.jsx)(I.a,{component:"h1",variant:"h4",children:"Sign in"}),Object(N.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(N.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(N.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:r.showPassword?"text":"password",value:r.password,onChange:(e="password",function(t){c(Object(m.a)(Object(m.a)({},r),{},Object(b.a)({},e,t.target.value)))}),id:"password",autoComplete:"current-password",endAdornment:Object(N.jsx)(A.a,{position:"end",children:Object(N.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(m.a)(Object(m.a)({},r),{},{showPassword:!r.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:r.showPassword?Object(N.jsx)(T.a,{}):Object(N.jsx)(D.a,{})})})}),Object(N.jsx)(x.a,{control:Object(N.jsx)(f.a,{value:"remember",color:"primary"}),label:"Remember me"})]})]})]})}var W=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).todoRef=a.a.createRef(),e.addItemOnList=function(t){t.preventDefault();var n={todo:e.todoRef.current.value,isCompleted:!1};e.props.addToDoItems(n),t.currentTarget.reset()},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("form",{id:"todoList-form",onSubmit:this.addItemOnList,children:[Object(N.jsx)("input",{type:"text",name:"todosTxtbx",ref:this.todoRef,required:!0}),Object(N.jsx)("button",{children:"+"})]})}}]),n}(a.a.Component),q=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleChange=function(t){var n=Object(m.a)(Object(m.a)({},e.props.todoItems),{},Object(b.a)({},t.currentTarget.name,t.currentTarget.value));console.log(t.currentTarget.value),e.props.updateTodos(e.props.index,n)},e.toggleCheckbox=function(t){var n=Object(m.a)(Object(m.a)({},e.props.todoItems),{},Object(b.a)({},t.currentTarget.name,t.currentTarget.checked));e.props.updateTodos(e.props.index,n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("li",{className:this.props.todoItems.isCompleted?"done":null,children:[Object(N.jsx)("input",{type:"checkbox",name:"isCompleted",checked:this.props.todoItems.isCompleted,onChange:this.toggleCheckbox}),Object(N.jsx)("input",{type:"text",name:"todo",value:this.props.todoItems.todo,onChange:this.handleChange}),Object(N.jsx)("button",{className:"del-btn",onClick:function(){return e.props.removeToDoItem(e.props.index)},children:"x"})]})}}]),n}(a.a.Component);var E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},B=function(){return Object(N.jsx)("header",{style:E,children:Object(N.jsx)("h1",{children:"CGU List"})})},J=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todoItems:{}},e.addToDoItems=function(t){var n=Object(m.a)({},e.state.todoItems);console.log(n),n["item".concat(Date.now())]=t,e.setState({todoItems:n})},e.removeToDoItem=function(t){var n=Object(m.a)({},e.state.todoItems);delete n[t],e.setState({todoItems:n})},e.updateTodos=function(t,n){var o=Object(m.a)({},e.state.todoItems);o[t]=n,e.setState({todoItems:o})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(B,{}),Object(N.jsx)(W,{addToDoItems:this.addToDoItems}),Object(N.jsx)("ul",{children:Object.keys(this.state.todoItems).map((function(t){return Object(N.jsx)(q,{index:t,todoItems:e.state.todoItems[t],removeToDoItem:e.removeToDoItem,updateTodos:e.updateTodos},t)}))})]})}}]),n}(o.Component);function F(e){return Object(N.jsx)(R,{})}function G(e){return Object(N.jsx)(J,{})}function M(e){return e.isLoggedIn?Object(N.jsx)(G,{}):Object(N.jsx)(F,{})}c.a.render(Object(N.jsx)(M,{isLoggedIn:!1}),document.getElementById("root"));var U=M,V=n(128);function z(e){return Object(N.jsx)(j.a,{onClick:e.onClick,type:"submit",fullWidth:!0,variant:"contained",color:"primary",margin:"theme.spacing(10, 0, 10)",children:Object(N.jsx)(V.a,{color:"inherit",children:"Sign In"})})}function H(e){return Object(N.jsx)("button",{onClick:e.onClick,children:"Logout"})}var K=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).handleLoginClick=o.handleLoginClick.bind(Object(u.a)(o)),o.handleLogoutClick=o.handleLogoutClick.bind(Object(u.a)(o)),o.state={isLoggedIn:!1},o}return Object(i.a)(n,[{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=this.state.isLoggedIn,t=null;return t=e?Object(N.jsx)(H,{onClick:this.handleLogoutClick}):Object(N.jsx)(z,{onClick:this.handleLoginClick}),Object(N.jsxs)("div",{children:[Object(N.jsx)(U,{isLoggedIn:e}),t]})}}]),n}(a.a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("section",{children:Object(N.jsx)(K,{})})})}}]),n}(o.Component);c.a.render(Object(N.jsx)(Q,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.9fbe77ca.chunk.js.map