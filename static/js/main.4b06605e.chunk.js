(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{53:function(e,t,a){},54:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),i=(a(53),a(13)),s=(a(54),a(99)),l=a(94),d=a(100),x=a(98),b=a(95),j=a(28),p=a.n(j),h=a(27),m=a.n(h),u=a(92),f=a(3),g=Object(u.a)({editorNormal:{marginTop:"10px",marginBottom:"10px",boxShadow:"5px 5px 5px",width:"80%"},editorExpanded:{marginTop:"10px",marginBottom:"10px",boxShadow:"5px 5px 5px",width:"100%",height:"100vh"},editorAvatar:{color:"black"},header:{backgroundColor:"#87ceeb"},close:{width:"100%",overflow:"scroll !important",backgroundColor:"#f9f9f9",resize:"vertical",minHeight:"150px"},open:{width:"100%",overflow:"scroll",backgroundColor:"#f9f9f9",height:"100% !important",resize:"vertical"},icon:{transform:"rotate(45deg)"}});function v(e){var t=g(),a=Object(n.useState)(!1),o=Object(i.a)(a,2),r=o[0],c=o[1];return Object(f.jsxs)(s.a,{variant:"outlined",className:r?t.editorExpanded:t.editorNormal,children:[Object(f.jsx)(l.a,{className:t.header,avatar:Object(f.jsx)(d.a,{className:t.editorAvatar,children:"E"}),action:Object(f.jsx)(x.a,{onClick:function(){c(!r)},children:r?Object(f.jsx)(m.a,{}):Object(f.jsx)(p.a,{className:t.icon})}),title:"EDITOR"}),Object(f.jsx)(b.a,{id:"editor",className:r?t.open:t.close,placeholder:"Markdown Editor...",onChange:function(t){return e.updateText(t.target.value)},rowsMax:12,value:e.text})]})}var O=a(30),w=a(96),k=a(32),N=a.n(k),C=a(45),S=Object(u.a)({previewer:{display:"flex",flexDirection:"column",boxShadow:"5px 5px 5px",width:"100%",marginTop:"10px",flex:"1",marginBottom:"10px",backgroundColor:"#f9f9f9"},prevAvatar:{color:"black"},header:{display:"fixed",backgroundColor:"#87ceeb"},icon:{transform:"rotate(45deg)"},content:{overflowY:"scroll"}});function E(e){var t=S();return Object(f.jsxs)(s.a,{variant:"outlined",className:t.previewer,children:[Object(f.jsx)(l.a,{className:t.header,avatar:Object(f.jsx)(d.a,{className:t.prevAvatar,children:"P"}),action:Object(f.jsx)(x.a,{onClick:e.toggleShow,children:e.show?Object(f.jsx)(p.a,{className:t.icon}):Object(f.jsx)(m.a,{})}),title:"PREVIEWER"}),Object(f.jsx)(w.a,{className:t.content,children:Object(f.jsx)(O.a,{id:"preview",children:Object(C.a)(N()(e.text))})})]})}N.a.setOptions({gfm:!0,breaks:!0});var T=a(97),B=Object(u.a)({container:{display:"flex",height:"100vh",flexDirection:"column",alignItems:"center"}});var I=function(){var e=Object(n.useState)('# h1\r## h2\n[GitHub](http://github.com)\n\n`const name = "Brandon"`\n\n```\nconst foo = "bar"\nconsole.log(foo) // output: bar\n\n```\n**bold**\n\n> Block Quotes!\n\n![cat image](https://placekitten.com/g/200/300)\n\n- list item\n- list item\n- list item'),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!0),c=Object(i.a)(r,2),s=c[0],l=c[1],d=B();return Object(f.jsxs)(T.a,{className:d.container,children:[s&&Object(f.jsx)(v,{text:a,updateText:o}),Object(f.jsx)(E,{text:a,show:s,toggleShow:function(){l(!s)}})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),y()}},[[75,1,2]]]);
//# sourceMappingURL=main.4b06605e.chunk.js.map