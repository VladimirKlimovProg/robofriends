(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=t(8),s=t(3),l=t(17),u=(t(27),t(5)),h=t(6),d=t(9),f=t(7),b=t(10),g=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},p=function(e){var n=e.robots;return r.a.createElement("div",null,n.map(function(e,t){return r.a.createElement(g,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},E=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},m=function(e){return r.a.createElement("div",{style:{overflowY:"auto",border:"1px solid black",height:"800px"}},e.children)},v=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(d.a)(this,Object(f.a)(n).call(this,e))).state={hasError:!1},t}return Object(b.a)(n,e),Object(h.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(o.Component),w=(t(28),function(e){function n(){return Object(u.a)(this,n),Object(d.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,i=o.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(E,{searchChange:t}),r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(p,{robots:i}))))}}]),n}(o.Component)),O=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(w),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S={searchField:""},j={isPending:!1,robots:[],error:""},C=(t(29),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}})),k=Object(s.d)(C,Object(s.a)(l.a));i.a.render(r.a.createElement(c.a,{store:k},r.a.createElement(O,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofriends","/service-worker.js");R?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.d17b6d78.chunk.js.map