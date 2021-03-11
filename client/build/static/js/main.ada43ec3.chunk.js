(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},75:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(39),r=n.n(o),i=(n(46),n(23)),c=n(2),l=n(3),u=n(5),h=n(4),d=(n(47),n(9)),j=n.n(d),b=function(e,t){return j.a.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},p=function(e,t){return j.a.post("/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},m=function(){return j.a.delete("/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))},O=n(6),g=n(8),x=n(0),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).handleLogout=function(){m().then((function(){e.props.setUser(null)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.props.user?Object(x.jsxs)("div",{children:[Object(x.jsx)(g.b,{to:"/journal",children:"Journal"}),Object(x.jsx)(g.b,{to:"/routine",children:"Daily Routine"}),Object(x.jsx)(g.b,{to:"/moodtracker",children:"Mood Tracker"}),Object(x.jsx)(g.b,{to:"/visionboard",children:"Vision Board"}),Object(x.jsx)(g.b,{to:"/logout",onClick:function(){return e.handleLogout()},children:"Logout"})]}):Object(x.jsx)(O.a,{to:"/"})}}]),n}(a.Component),v=n(14),y=(n(75),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={date:"",question1:"",question2:"",question3:"",ratingMood:"",ratingMotivation:"",journal:[]},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(v.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),j.a.post("/entries",{date:e.state.date,question1:e.state.question1,question2:e.state.question2,question3:e.state.question3,ratingMood:e.state.ratingMood,ratingMotivation:e.state.ratingMotivation}).then((function(t){e.setState({journal:t.data,date:"",question1:"",question2:"",question3:"",ratingMood:"",ratingMotivation:""})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"entryBox",children:[Object(x.jsx)("h1",{id:"header",children:"Add a new entry"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{className:"option",htmlFor:"date",children:" "}),Object(x.jsx)("input",{type:"date",id:"date",name:"date",value:this.state.date,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"option",htmlFor:"question1",children:" "}),Object(x.jsx)("input",{type:"text",id:"question1",name:"question1",placeholder:"What are you looking forward for today?",value:this.state.question1,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"option",htmlFor:"question2"}),Object(x.jsx)("input",{type:"text",id:"question2",name:"question2",placeholder:"What are you grateful for today?",value:this.state.question2,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"option",htmlFor:"question3"}),Object(x.jsx)("input",{type:"text",id:"question3",name:"question3",placeholder:"What is your focus today?",value:this.state.question3,onChange:this.handleChange}),Object(x.jsx)("p",{className:"question",children:"How would you describe your current mood?"}),Object(x.jsx)("div",{className:"optionBoxes",children:Object(x.jsxs)("div",{className:"moodBoxes",children:[Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",name:"ratingMood",value:"happy",onChange:this.handleChange}),Object(x.jsx)("img",{src:"/images/Happy.png"})]}),Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",name:"ratingMood",value:"ratherHappy",onChange:this.handleChange}),Object(x.jsx)("img",{src:"/images/ratherHappy.png"})]}),Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",value:"ratherUnhappy",name:"ratingMood",onChange:this.handleChange}),Object(x.jsx)("img",{src:"/images/ratherUnhappy.png"})]}),Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",value:"unhappy",name:"ratingMood",onChange:this.handleChange}),Object(x.jsx)("img",{src:"./images/Unhappy.png"})]})]})}),Object(x.jsx)("p",{className:"question",children:"How motivated to you feel?"}),Object(x.jsx)("div",{className:"optionBoxes",children:Object(x.jsxs)("fieldset",{className:"moodBoxes",children:[Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",name:"ratingMotivation",value:"motivated",onChange:this.handleChange}),Object(x.jsx)("img",{src:"./images/fullEnergy.png"})]}),Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",name:"ratingMotivation",value:"ratherMotivated",onChange:this.handleChange}),Object(x.jsx)("img",{src:"./images/muchEnergy.png"})]}),Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",name:"ratingMotivation",value:"littleMotivated",onChange:this.handleChange}),Object(x.jsx)("img",{src:"./images/littleEnergy.png"})]}),Object(x.jsxs)("label",{className:"box",children:[Object(x.jsx)("input",{type:"radio",name:"ratingMotivation",value:"notMotivated",onChange:this.handleChange}),Object(x.jsx)("img",{src:"./images/noEnergy.png"})]})]})}),Object(x.jsx)("button",{id:"btn",type:"submit",children:"Create entry"})]})]})}}]),n}(a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={entry:null},e.getData=function(){e.props.selectedDay&&j.a.get("/getSelectedEntry?date=".concat(e.props.selectedDay)).then((function(t){e.setState({entry:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){t!=this.props&&this.getData()}},{key:"render",value:function(){return this.state.entry?Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["Date: ",this.state.entry.date," "]}),Object(x.jsxs)("p",{children:["you looked forward to: ",this.state.entry.question1]}),Object(x.jsxs)("p",{children:["you were grateful for: ",this.state.entry.question2]}),Object(x.jsxs)("p",{children:["you were focused on: ",this.state.entry.question3]}),Object(x.jsxs)("p",{children:["Your Mood: ",this.state.entry.ratingMood," "]}),Object(x.jsxs)("p",{children:["Your Motivation: ",this.state.entry.ratingMotivation]})]}):Object(x.jsx)("p",{children:"Please select a day"})}}]),n}(a.Component),D=(n(76),n(22)),w=n(41),S=n.n(w),N=(n(85),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleDayClick=a.handleDayClick.bind(Object(D.a)(a)),a.state={selectedDay:null},a}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){this.props.selectedDay!==this.state.selectedDay&&this.props.getDates(this.state.selectedDay)}},{key:"handleDayClick",value:function(e,t){var n=t.selected;this.setState({selectedDay:n?void 0:e})}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(S.a,{selectedDays:this.state.selectedDay,onDayClick:this.handleDayClick}),Object(x.jsx)("p",{})]})}}]),n}(s.a.Component)),q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedDay:null},e.getDates=function(t){e.setState({selectedDay:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{getDates:this.getDates,selectedDay:this.state.selectedDay}),Object(x.jsx)(C,{selectedDay:this.state.selectedDay}),Object(x.jsx)(y,{})]})}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{}),Object(x.jsx)("h2",{children:"This is another mental health app"}),Object(x.jsx)(g.b,{to:"/journal",children:"Journal"}),Object(x.jsx)(g.b,{to:"/dashboard",children:"Dashboard"})]})}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:"You are on the dashboard"})}}]),n}(a.Component),A=(n(27),n(38),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(v.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;p(a,s).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(console.log(t),e.props.setUser(t),e.props.history.push("/dashboard"))}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"container d-flex justify-content-center pt-5",children:Object(x.jsx)("div",{id:"theContainer",className:"card shadow p-3 mb-5 bg-black rounded",children:Object(x.jsxs)("div",{className:"container-lg mt-2 card-body",children:[Object(x.jsx)("h2",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{htmlFor:"username",children:" "}),Object(x.jsx)("input",{placeholder:"Username",className:"usernameText form-control rounded-pill",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",required:!0,autofocus:!0}),Object(x.jsx)("label",{htmlFor:"password",children:" "}),Object(x.jsx)("input",{placeholder:"Password",className:"passwordText form-control rounded-pill pt-3",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",required:!0,autofocus:!0}),Object(x.jsx)("button",{className:"w-50 btn btn-lg mt-3 rounded-pill border",type:"submit",children:"Log in"}),this.state.message&&Object(x.jsx)("h3",{children:this.state.message})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center pt-5",children:Object(x.jsx)(g.b,{to:"/signup",children:"New User? Sign up here!"})})]})})})}}]),n}(a.Component)),U=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(v.a)({},a,s))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,s=n.password;b(a,s).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(console.log(t),e.props.setUser(t),e.props.history.push("/dashboard"))}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"container d-flex justify-content-center pt-5",children:Object(x.jsx)("div",{id:"theContainer",className:"card shadow p-3 mb-5 bg-black rounded",children:Object(x.jsxs)("div",{className:"container-lg mt-2 card-body",children:[Object(x.jsx)("h2",{children:"Signup"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{htmlFor:"username",children:" "}),Object(x.jsx)("input",{placeholder:"Username",className:"usernameText form-control rounded-pill",type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username",required:!0,autofocus:!0}),Object(x.jsx)("label",{htmlFor:"password"}),Object(x.jsx)("input",{placeholder:"Password",className:"passwordText form-control rounded-pill pt-3",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password",required:!0,autofocus:!0}),Object(x.jsx)("button",{className:"w-50 btn btn-lg mt-3 rounded-pill border",type:"submit",children:"Sign Up"}),this.state.message&&Object(x.jsx)("h3",{children:this.state.message})]})]})})})}}]),n}(a.Component);function T(e){return Object(x.jsx)("div",{children:e.entries.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:e})})})}))})}var F=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){console.log("SUBMIT"),e.preventDefault(),j.a.post("/items",{todo:a.state.todo}).then((function(){console.log("GET DATA"),a.getData(),a.setState({todo:""})}))},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(v.a)({},t,n))},a.getData=function(){console.log("STEP ONE"),j.a.get("/items").then((function(e){console.log("RESPONSE",e.data),a.setState({entries:e.data})})).catch((function(e){return console.log(e)}))},a.state={todo:"",entries:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return this.state.entries?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Test"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{children:["ToDo:",Object(x.jsx)("input",{type:"text",name:"todo",id:"todo",value:this.state.todo.value,onChange:this.handleChange})]}),Object(x.jsx)("button",{id:"btn",type:"submit",children:"Add to Do"})]}),Object(x.jsx)(T,{entries:this.state.entries})]}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Test"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{children:["ToDo:",Object(x.jsx)("input",{type:"text",name:"todo",id:"todo",value:this.state.todo.value,onChange:this.handleChange})]}),Object(x.jsx)("button",{id:"btn",type:"submit",children:"Add to Do"})]})]})}}]),n}(s.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={goal:"",positiveAffirmation:""},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(v.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),j.a.post("http://localhost:5005/entries",{date:e.state.goal,positiveAffirmation:e.state.positiveAffirmation}).then((function(t){e.setState({goal:"",positiveAffirmation:""})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Your Vision Board"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{className:"option",htmlFor:"goal",children:" "}),Object(x.jsx)("input",{type:"text",id:"goal",name:"goal",value:this.state.goal,onChange:this.handleChange,placeholder:"Your monthly goal"}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{className:"option",htmlFor:"positiveAffirmation",children:" "}),Object(x.jsx)("input",{type:"text",id:"positiveAffirmation",name:"positiveAffirmation",value:this.state.positiveAffirmation,onChange:this.handleChange,placeholder:"Your positive Affirmation"})]})]})}}]),n}(a.Component),B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{user:this.state.user,setUser:this.setUser}),Object(x.jsx)(O.b,{exact:!0,path:"/",render:function(t){return e.state.user?Object(x.jsx)(k,Object(i.a)({},t)):Object(x.jsx)(O.a,{to:"/login"})}}),Object(x.jsx)(O.b,{exact:!0,path:"/signup",render:function(t){return Object(x.jsx)(U,Object(i.a)({setUser:e.setUser},t))}}),Object(x.jsx)(O.b,{exact:!0,path:"/login",render:function(t){return Object(x.jsx)(A,Object(i.a)({setUser:e.setUser},t))}}),Object(x.jsx)(O.b,{exact:!0,path:"/welcomepage",component:k}),Object(x.jsx)(O.b,{exact:!0,path:"/dashboard",component:M}),Object(x.jsx)(O.b,{exact:!0,path:"/journal",component:q,user:this.state.user}),Object(x.jsx)(O.b,{exact:!0,path:"/routine",component:F,user:this.state.user}),Object(x.jsx)(O.b,{exact:!0,path:"/visionboard",component:E})]})}}]),n}(s.a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),o(e),r(e)}))};j.a.get("http://localhost:5005/auth/loggedin").then((function(e){var t=e.data;r.a.render(Object(x.jsx)(g.a,{children:Object(x.jsx)(B,{user:t})}),document.getElementById("root"))})).catch((function(e){console.log(e)})),L()}},[[86,1,2]]]);
//# sourceMappingURL=main.ada43ec3.chunk.js.map