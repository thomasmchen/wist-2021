(this["webpackJsonpuist-2021"]=this["webpackJsonpuist-2021"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"id":0,"value":"woke-long"},{"id":1,"value":"woke-short"},{"id":2,"value":"woke-full"},{"id":2,"value":"woke-full-new"}]')},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),i=n.n(s),l=(n(28),n(6)),d=n(7),r=n(9),o=n(8),u=[{title:"Home",url:"/uist-2021",cName:"nav-links"},{title:"Explore",url:"/uist-2021/data/spans",cName:"nav-links"},{title:"Q&A",url:"/uist-2021/data/qa",cName:"nav-links"},{title:"Speakers",url:"/uist-2021/data/speaker",cName:"nav-links"},{title:"About Us",url:"/uist-2021/static/about",cName:"nav-links-mobile"}],j=(n(29),n(0)),b=["btn--primary","btn--outline"],m=["btn--medium","btn--large"],h=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,s=e.buttonSize,i=b.includes(c)?c:b[0],l=m.includes(s)?s:m[0];return Object(j.jsx)("button",{className:"btn ".concat(i," ").concat(l),onClick:a,type:n,children:t})},O=(n(31),n(14)),x=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"NavbarItems",children:[Object(j.jsxs)("h1",{className:"navbar-logo",children:["Contoso ",Object(j.jsx)("i",{className:"fab fa-affiliatetheme"})]}),Object(j.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(j.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(j.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:u.map((function(e,t){return Object(j.jsx)("li",{className:e.cName,children:Object(j.jsx)(O.b,{to:e.url,children:e.title})},t)}))}),Object(j.jsx)(h,{children:Object(j.jsx)(O.b,{to:"/static/about",children:"About Us"})})]})}}]),n}(a.Component),f=n(11),p=n(2);var v=function(e){return Object(j.jsx)("div",{className:"Segment",children:Object(j.jsxs)("div",{className:"SegmentDataContainer",children:[Object(j.jsx)("div",{className:"SegmentIdContainer",children:Object(j.jsx)("p",{className:"SegmentIdText",children:e.id})}),Object(j.jsx)("div",{className:"SegmentTextContainer",children:Object(j.jsx)("p",{className:"SegmentTextText",children:e.text})})]})})},N=(n(37),n(13)),g=n.n(N),S=function(e,t){for(var n=new Set(t),a=0;a<e.length;a++)if(n.has(e[a]))return!0;return!1};function C(e){var t=Object(a.useState)([]),n=Object(f.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)([]),l=Object(f.a)(i,2),d=l[0],r=l[1],o=Object(a.useState)([]),u=Object(f.a)(o,2),b=u[0],m=u[1],h=Object(a.useState)([]),O=Object(f.a)(h,2),x=O[0],p=O[1],v=e.raw;return Object(a.useEffect)((function(){if(e.raw){var t=e.raw[0].start,n=e.raw[e.raw.length-1].end-t,a=e.raw.map((function(e){return{name:e.id[0],duration:(e.end-e.start)/n,ids:e.id}})),c={};a.forEach((function(e){return c[e.name]=e.duration}));var i=e.low.map((function(e){return{name:e.id.join(", "),duration:e.id.reduce((function(e,t){return e+c[t]}),0),ids:e.id}})),l=e.med.map((function(e){return{name:e.id.join(", "),duration:e.id.reduce((function(e,t){return e+c[t]}),0),ids:e.id}})),d=e.high.map((function(e){return{name:e.id.join(", "),duration:e.id.reduce((function(e,t){return e+c[t]}),0),ids:e.id}}));s(a),r(i),m(l),p(d)}}),[v]),Object(j.jsxs)("div",{className:"temporal",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Raw"}),Object(j.jsx)("div",{className:"data raw",children:c.map((function(t,n){return Object(j.jsx)("div",{className:g()({selected:S(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){return e.setSelected(t.ids)}},n)}))})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Low"}),Object(j.jsx)("div",{className:"data low",children:d.map((function(t,n){return Object(j.jsx)("div",{className:g()({selected:S(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){return e.setSelected(t.ids)}},n)}))})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Med"}),Object(j.jsx)("div",{className:"data med",children:b.map((function(t,n){return Object(j.jsx)("div",{className:g()({selected:S(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){return e.setSelected(t.ids)}},n)}))})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"High"}),Object(j.jsx)("div",{className:"data high",children:x.map((function(t,n){return Object(j.jsx)("div",{className:g()({selected:S(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){return e.setSelected(t.ids)}},n)}))})]})]})}function w(e){return Object(j.jsxs)("div",{className:"SegmentColumn High",children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsx)("h2",{className:"ColumnTitle",children:"High Pass"})}),Object(j.jsx)("div",{className:"data",children:e.segments.map((function(t,n){return Object(j.jsx)("div",{onClick:function(){return e.setSelected(t.id)},className:g()({selected:S(t.id,e.selectedIds),item:!0}),children:Object(j.jsx)(v,{text:t.text,id:t.id.join(", ")})},n)}))})]})}function k(e){return Object(j.jsxs)("div",{className:"SegmentColumn notclickable ".concat(e.title),children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsxs)("h2",{className:"ColumnTitle",children:[e.title," Pass"]})}),Object(j.jsx)("div",{className:"data",children:e.segments.filter((function(t){return S(t.id,e.selectedIds)})).map((function(e,t){return Object(j.jsx)("div",{className:g()({selected:!0,item:!0}),children:Object(j.jsx)(v,{text:e.text,id:e.id.join(", ")})},t)}))})]})}var A=function(e){var t=Object(a.useState)([]),n=Object(f.a)(t,2),c=n[0],s=n[1],i=e.audioData;return Object(a.useEffect)((function(){return s(null)}),[i]),e.audioData?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"Title",children:"Explore View"}),Object(j.jsx)("div",{children:Object(j.jsx)(C,{raw:e.audioData.raw.segments,high:e.audioData.high.segments,med:e.audioData.med.segments,low:e.audioData.low.segments,selectedIds:c,setSelected:s})}),Object(j.jsxs)("div",{className:"SegmentColumnContainer",children:[Object(j.jsx)(w,{segments:e.audioData.high.segments,selectedIds:c,setSelected:s}),Object(j.jsx)(k,{title:"Medium",segments:e.audioData.med.segments,selectedIds:c}),Object(j.jsx)(k,{title:"Low",segments:e.audioData.low.segments,selectedIds:c}),Object(j.jsx)(k,{title:"Raw",segments:e.audioData.raw.segments,selectedIds:c})]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Explore View"}),Object(j.jsx)("p",{children:"No audio sample selected"})]})},y=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"QAView"})})}}]),n}(a.Component),D=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"SpeakerView"})})}}]),n}(a.Component),I=(n(38),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"AboutView"})})}}]),n}(a.Component));var T=function(e){var t=Object(a.useState)(null),n=Object(f.a)(t,2),c=n[0],s=n[1],i=e.audioName;return Object(a.useEffect)((function(){if(i){fetch("../data/".concat(i,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.log(e)}))}}),[i]),Object(j.jsx)("div",{className:"DataContainer",children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/uist-2021/data/spans",children:Object(j.jsx)(A,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/data/qa",children:Object(j.jsx)(y,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/data/speaker",children:Object(j.jsx)(D,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/static/about",children:Object(j.jsx)(I,{})}),Object(j.jsx)(p.a,{path:"/uist-2021",children:Object(j.jsx)("p",{children:"Home"})})]})})},E=(n(39),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"AudioSelectionContainer",children:[Object(j.jsxs)("p",{className:"CurrentAudioLabel",children:["Currently Analyzing Audio: ",Object(j.jsx)("strong",{children:this.props.selectedAudio?this.props.selectedAudio:Object(j.jsx)("samp",{className:"NoAudioSelectedText",children:"No Audio Selected"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"SelectAudioLabel",children:"Select an Audio:"}),Object(j.jsx)("select",{className:"AudioSelector",name:"AudioSelect",onChange:function(t){return e.props.onChange(t.target.value)},children:this.props.audios.map((function(e){return Object(j.jsx)("option",{children:e.value},e.id)}))})]})]})}}]),n}(a.Component)),F=n(23),V=(n(40),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){if(""===e)return a.setState({selectedAudio:""}),void a.setState({selectedAudioData:""});a.setState({selectedAudio:e})},a.state={audios:F,selectedAudio:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(E,{audios:this.state.audios,selectedAudio:this.state.selectedAudio,onChange:this.handleChange}),Object(j.jsx)(T,{audioName:this.state.selectedAudio})]})})}}]),n}(c.a.Component)),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root")),L()}},[[41,1,2]]]);
//# sourceMappingURL=main.84165d78.chunk.js.map