(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(31)},28:function(e,n,t){},29:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=t(8),s=t(3),l=t(17),u=t(18),h=(t(28),t(5)),d=t(6),f=t(9),g=t(7),b=t(10),p=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},E=function(e){var n=e.robots;return r.a.createElement("div",null,n.map(function(e,t){return r.a.createElement(p,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},m=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},w=function(e){function n(e){var t;return Object(h.a)(this,n),(t=Object(f.a)(this,Object(g.a)(n).call(this,e))).state={hasError:!1},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(o.Component),O=(t(29),function(e){function n(){return Object(h.a)(this,n),Object(f.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,i=o.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(m,{searchChange:t}),r.a.createElement(v,null,r.a.createElement(w,null,r.a.createElement(E,{robots:i}))))}}]),n}(o.Component)),y=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(O),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var j={searchField:""},C={isPending:!1,robots:[],error:""},k=(t(30),Object(l.createLogger)()),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(u.a,k));i.a.render(r.a.createElement(c.a,{store:T},r.a.createElement(y,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");R?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.84c166ee.chunk.js.map