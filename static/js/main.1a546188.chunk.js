(this["webpackJsonpreact-hw4"]=this["webpackJsonpreact-hw4"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/padlock.d964e0b3.svg"},23:function(e,t,a){e.exports=a.p+"static/media/help.7dea2ccf.png"},24:function(e,t,a){e.exports=a.p+"static/media/succes.58b149e3.jpg"},25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),l=a.n(r),c=(a(30),a(9)),i=a(10),o=a(11),m=a(14),d=a(13),p=a(12),u=a.n(p),h=a(5),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",rememberUser:!1,validity:!1},e.handleChange=function(t,a){var n=a.target.value;e.setState(Object(c.a)({},t,n))},e.checkBoxRememberMe=function(){e.state.rememberUser?e.state.rememberUser&&e.setState({rememberUser:!1}):e.setState({rememberUser:!0})},e.SignIn=function(){var t=localStorage.getItem("mail"),a=localStorage.getItem("password"),n=document.getElementById("emailInput"),s=document.getElementById("passwordInput");n.style.borderColor="red",s.style.borderColor="red",e.state.email===t&&(n.style.borderColor="green",e.state.password===a&&(s.style.borderColor="green",e.setState({validity:!0})))},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"signIn-wrapper"},s.a.createElement("div",{className:"signIn-body"},s.a.createElement("img",{src:u.a,alt:"icon",id:"lockImg"}),s.a.createElement("input",{type:"text",placeholder:"Email",id:"emailInput",onChange:this.handleChange.bind(this,"email"),value:this.state.email}),s.a.createElement("input",{type:"password",placeholder:"Password",id:"passwordInput",onChange:this.handleChange.bind(this,"password"),value:this.state.password}),s.a.createElement("div",{className:"remind"},s.a.createElement("input",{type:"checkbox",name:"spam",className:"remember",onClick:this.checkBoxRememberMe}),s.a.createElement("div",{className:"checkBox-text"},"Remember me")),this.state.validity?s.a.createElement("button",{className:"btn",type:"button",onDoubleClick:this.SignIn},s.a.createElement(h.b,{to:"/success"},"Sign In")):s.a.createElement("button",{className:"btn",type:"button",onClick:this.SignIn},"Sign In"),s.a.createElement("div",{className:"entrancePage-nav"},s.a.createElement("span",null,s.a.createElement(h.b,{to:"reset"},"Forgot password?")),s.a.createElement("span",null,s.a.createElement(h.b,{to:"/signUp"},"Don't have an account? Sign Up")))))}}]),a}(n.Component),E=a(23),v=a.n(E),b=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]{3,}/i,f=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}/,w=/^([a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]{3,})+@([a-zA-Z0-9-]{2,})+\.([a-zA-Z0-9-]{2,})$/,y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={firstName:"",lastName:"",email:"",password:"",mailing:!1,firstNameValid:!1,lastNameValid:!1,emailValid:!1,passwordValid:!1},e.handleChange=function(t,a){var n=a.target.value;if(e.setState(Object(c.a)({},t,n)),a.target.style.borderColor="green","email"===t)w.test(n)||(a.target.style.borderColor="red");else if("password"===t){f.test(n)||(a.target.style.borderColor="red")}else if("firstName"===t||"lastName"===t){b.test(n)||(a.target.style.borderColor="red")}w.test(e.state.email)&&e.setState({emailValid:!0}),f.test(e.state.password)&&e.setState({passwordValid:!0}),b.test(e.state.firstName)&&e.setState({firstNameValid:!0}),b.test(e.state.lastName)&&e.setState({lastNameValid:!0})},e.checkMailing=function(){e.state.mailing?e.state.mailing&&e.setState({mailing:!1}):e.setState({mailing:!0})},e.completionOfSignUp=function(){var t=e.state.firstNameValid,a=e.state.lastNameValid,n=e.state.emailValid,s=e.state.passwordValid;t&&a&&n&&s&&(localStorage.setItem("mail",e.state.email),localStorage.setItem("password",e.state.password))},e}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"signIn-wrapper"},s.a.createElement("div",{className:"signIn-body"},s.a.createElement("img",{src:u.a,alt:"icon",id:"lockImg"}),s.a.createElement("h3",null,"Sign Up"),s.a.createElement("input",{type:"text",placeholder:"First name",value:this.state.firstName,onChange:this.handleChange.bind(this,"firstName")}),s.a.createElement("input",{type:"text",placeholder:"Last name",value:this.state.lastName,onChange:this.handleChange.bind(this,"lastName")}),s.a.createElement("input",{type:"text",placeholder:"Email",value:this.state.email,onChange:this.handleChange.bind(this,"email")}),s.a.createElement("div",{className:"signIn-password",id:"pass","data-title":"\u0421\u043e\u0444\u0438\u0439\u0441\u043a\u0438\u0439 \u0441\u043e\u0431\u043e\u0440"},s.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange.bind(this,"password")}),s.a.createElement("div",{className:"password-help","data-title":"Password must have at least 8 characters, number, uppercase and lowercase letter"},s.a.createElement("img",{src:v.a,alt:"help",id:"help-img"}))),s.a.createElement("div",{className:"remind"},s.a.createElement("input",{type:"checkbox",name:"spam",className:"spam",id:"mailing",onClick:this.checkMailing}),s.a.createElement("div",{className:"checkBox-text"},"I want to receive inspiration, marketing promotions and updates via email.")),s.a.createElement("button",{className:"btn",type:"button",onClick:this.completionOfSignUp},s.a.createElement(h.b,{to:"/",state:this.props.state},"Sign Up")),s.a.createElement("div",{className:"entrancePage-nav"},s.a.createElement("span",null,s.a.createElement(h.b,{to:"reset"},"Forgot password?")),s.a.createElement("span",null,s.a.createElement(h.b,{to:"/"},"Do have an account? Sign In")))))}}]),a}(n.Component),N=(a(36),a(1)),C=(a(37),function(){return s.a.createElement("div",{class:"outer-track"},s.a.createElement("div",{class:"inner-track"},s.a.createElement("div",{class:"tractor-container"},s.a.createElement("div",{class:"tractor"},s.a.createElement("div",{class:"body"},s.a.createElement("div",{class:"light"}),s.a.createElement("div",{class:"grill"}),s.a.createElement("div",{class:"exhaust"}),s.a.createElement("div",{class:"steering"}),s.a.createElement("div",{class:"seat"}),s.a.createElement("div",{class:"wheel-front"}),s.a.createElement("div",{class:"fender"}),s.a.createElement("div",{class:"wheel-back"}),s.a.createElement("div",{class:"hitch"})))),s.a.createElement("div",{class:"rope"}),s.a.createElement("div",{class:"tractor-container"},s.a.createElement("div",{class:"tractor"},s.a.createElement("div",{class:"body"},s.a.createElement("div",{class:"light"}),s.a.createElement("div",{class:"grill"}),s.a.createElement("div",{class:"exhaust"}),s.a.createElement("div",{class:"steering"}),s.a.createElement("div",{class:"seat"}),s.a.createElement("div",{class:"wheel-front"}),s.a.createElement("div",{class:"fender"}),s.a.createElement("div",{class:"wheel-back"}),s.a.createElement("div",{class:"hitch"}))))))}),S=a(24),k=a.n(S),I=(a(38),function(){return s.a.createElement("div",{className:"success-Image"},s.a.createElement("img",{src:k.a,alt:"SuccessPage"}))}),x=function(){return s.a.createElement("div",{className:"EntrancePage"},s.a.createElement(h.a,null,s.a.createElement(N.c,null,s.a.createElement(N.a,{path:"/",exact:!0,render:function(){return s.a.createElement(g,null)}}),s.a.createElement(N.a,{path:"/signUp",exact:!0,render:function(){return s.a.createElement(y,null)}}),s.a.createElement(N.a,{path:"/success",exact:!0,render:function(){return s.a.createElement(I,null)}}),s.a.createElement(N.a,{component:function(){return s.a.createElement(C,null)}}))))},O=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.1a546188.chunk.js.map