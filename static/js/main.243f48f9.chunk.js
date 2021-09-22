(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,t,o){},17:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var c=o(0),r=o(2),n=o.n(r),a=o(9),s=o.n(a),i=(o(16),o(3)),l=(o(17),function(e){var t=Object(r.useState)([]),o=Object(i.a)(t,2),n=o[0],a=o[1];return Object(r.useEffect)((function(){fetch(e.textPath).then((function(e){return e.text()})).then((function(e){a(e.split("\n"))}))}),[]),Object(c.jsxs)("div",{className:"project-content",children:[Object(c.jsxs)("h4",{style:{color:"".concat(e.color)},children:[" ",e.hook,": "]}),Object(c.jsxs)("h3",{style:{color:"".concat(e.color)},children:[" ",e.title," "]}),n.map((function(e){return function(e){for(var t=[".jpg",".png",".jpeg",".svg",".webp"],o=0;o<t.length;o++)if(e.includes(t[o]))return!0;return!1}(e)?Object(c.jsx)("img",{src:""+e,alt:e}):(t=e).includes("github.com/")||t.includes("devpost.com/software")||t.includes("https://")?Object(c.jsx)("p",{className:"text",children:Object(c.jsx)("a",{className:"collapsible-link",href:e,target:"_blank",rel:"noreferrer",children:e})}):Object(c.jsx)("p",{className:"text",children:e});var t})),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})}),j=function(e){return Object(c.jsxs)("div",{className:"ProjectGroup",children:[Object(c.jsx)("button",{type:"button",className:"project-group-title",id:e.scroll,style:{borderColor:"".concat(e.color)},children:e.group}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),e.projects.map((function(t){return Object(c.jsx)(l,{hook:t.projectHook,title:t.projectName,id:t.projectName,textPath:t.textPath,color:e.color})}))]})},u=o(6),d=o(5),p=o(10),b=function(){var e=Object(r.useState)("inactive"),t=Object(i.a)(e,2),o=t[0],n=t[1];function a(e){"is-responsive"===o&&n("inactive"),document.getElementById(e).scrollIntoView({behavior:"smooth"})}return Object(c.jsxs)("nav",{className:"navbar ".concat(o),id:"navbar",children:[Object(c.jsx)("a",{className:"nav-link",onClick:function(){return a("About")},children:Object(c.jsx)("span",{className:"name",children:"Dylan Vu"})}),Object(c.jsx)("a",{className:"nav-link",style:{color:"#c0392b"},onClick:function(){return a("JS")},children:Object(c.jsx)("span",{children:"JavaScript/NodeJS"})}),Object(c.jsx)("a",{className:"nav-link",style:{color:"#2081C3"},onClick:function(){return a("Python")},children:Object(c.jsx)("span",{children:"Python"})}),Object(c.jsx)("a",{className:"nav-link",style:{color:"#6DA34D"},onClick:function(){return a("C")},children:Object(c.jsx)("span",{children:"C++/C#"})}),Object(c.jsx)("a",{className:"nav-link",style:{color:"#FE5D26"},href:"/about/Dylan Vu Resume.pdf",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("span",{children:"Resume"})}),Object(c.jsx)("a",{href:"https://github.com/vu-dylan",target:"_blank",rel:"noreferrer",style:{color:"#f2f2f2"},children:Object(c.jsx)(u.a,{icon:d.a,id:"github",className:"icon"})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/dylanvu9/",target:"_blank",rel:"noreferrer",style:{color:"#f2f2f2"},children:Object(c.jsx)(u.a,{icon:d.b,className:"icon"})}),Object(c.jsx)("a",{href:"mailto:dylanvu@ucsb.edu",target:"_blank",rel:"noreferrer",style:{color:"#f2f2f2"},children:Object(c.jsx)(u.a,{icon:p.a,className:"icon"})}),Object(c.jsxs)("div",{className:"hamburger ".concat(o),id:"hamburger",onClick:function(){n("inactive"===o?"is-responsive":"inactive")},children:[Object(c.jsx)("span",{className:"line"}),Object(c.jsx)("span",{className:"line"}),Object(c.jsx)("span",{className:"line"})]})]})},h=[{projectHook:"My name is Dylan Vu",projectName:"",textPath:"/about/about.txt"}],m=[{projectHook:"Convert your Spotify playlist to a YouTube playlist",projectName:"You-tify",textPath:"/projectgroup/python/youtify/youtify.txt"},{projectHook:"Record the current UCSB course availability with the click of a button",projectName:"GoldWebscraper",textPath:"/projectgroup/python/goldwebscraper/goldwebscraper.txt"},{projectHook:"Draw on a projector and a computer for a seamless hybrid learning experience",projectName:"GRIP Board",textPath:"/projectgroup/python/gripboard/gripboard.txt"}],x=[{projectHook:"Add and save your favorite movies through a social media app",projectName:"SeenIt",textPath:"/projectgroup/javascript/seenit/seenit.txt"},{projectHook:"Draw with your friends in a collaborative whiteboard",projectName:"SketchedOut",textPath:"/projectgroup/javascript/sketchedout/sketchedout.txt"},{projectHook:"Increase engagement in your Discord server",projectName:"Discord Question of the Day (QOTD)",textPath:"/projectgroup/javascript/discordqotd/discordqotd.txt"},{projectHook:"Modernize your club website",projectName:"UCSB Robotics Website",textPath:"/projectgroup/javascript/ucsbrobotics/ucsbrobotics.txt"}],f=[{projectHook:"Use a VR controller that gives tactile feedback",projectName:"GRIP Controller",textPath:"/projectgroup/clangs/grip/grip.txt"}];var v=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),o=t[0],n=t[1];return Object(r.useEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){document.getElementById("video").muted=!0})),document.getElementById("video").play(),function(){var e="Hi, I'm Dylan Vu. Welcome to my site!",t=e[0],o=0;setTimeout((function(){var c=setInterval((function(){n(t),o++,t+=e[o],o>=e.length&&(setTimeout((function(){document.documentElement.scrollTop||document.body.scrollTop||(document.getElementById("header").style.height="85vh")}),500),clearInterval(c))}),60)}),600)}()}),[]),window.onbeforeunload=function(){window.scrollTo(0,0)},Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"header",id:"header",children:[Object(c.jsx)("div",{className:"welcome",children:o}),Object(c.jsxs)("video",{className:"video",preload:"auto",id:"video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(c.jsx)("source",{src:"/header.mp4",type:"video/mp4"}),"Video tag not supported"]})]}),Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(j,{projects:h,color:"#36393f",group:"About",scroll:"About"}),Object(c.jsx)(j,{projects:x,color:"#c0392b",group:"NodeJS",scroll:"JS"}),Object(c.jsx)(j,{projects:m,color:"#2081C3",group:"Python",scroll:"Python"}),Object(c.jsx)(j,{projects:f,color:"#6DA34D",group:"C++/C#",scroll:"C"})]})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,24)).then((function(t){var o=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;o(e),c(e),r(e),n(e),a(e)}))};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()}},[[23,1,2]]]);
//# sourceMappingURL=main.243f48f9.chunk.js.map