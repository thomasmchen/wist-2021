(this["webpackJsonpuist-2021"]=this["webpackJsonpuist-2021"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"id":0,"value":"diversity"},{"id":1,"value":"chipotle"},{"id":2,"value":"elisa_villanueva"},{"id":3,"value":"ray_dalio"},{"id":4,"value":"m_night_shyamalan"},{"id":5,"value":"health"},{"id":6,"value":"ackman"},{"id":7,"value":"meeting"}]')},28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),c=a(21),n=a.n(c),l=(a(28),a(7)),d=a(8),r=a(10),o=a(9),u=[{title:"Explore",url:"/uist-2021/data/explore",cName:"nav-links"},{title:"Q&A",url:"/uist-2021/data/qa",cName:"nav-links"},{title:"Speakers",url:"/uist-2021/data/speaker",cName:"nav-links"},{title:"About Us",url:"/uist-2021/static/about",cName:"nav-links-mobile"}],j=(a(29),a(0)),b=["btn--primary","btn--outline"],m=["btn--medium","btn--large"],h=function(e){var t=e.children,a=e.type,s=e.onClick,i=e.buttonStyle,c=e.buttonSize,n=b.includes(i)?i:b[0],l=m.includes(c)?c:m[0];return Object(j.jsx)("button",{className:"btn ".concat(n," ").concat(l),onClick:s,type:a,children:t})},O=(a(31),a(15)),x=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"NavbarItems",children:[Object(j.jsx)("h1",{className:"navbar-logo",children:"UIST 2021"}),Object(j.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(j.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(j.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:u.map((function(e,t){return Object(j.jsx)("li",{className:e.cName,children:Object(j.jsx)(O.b,{to:e.url,children:e.title})},t)}))}),Object(j.jsx)(h,{children:Object(j.jsx)(O.b,{to:"/static/about",children:"About Us"})})]})}}]),a}(s.Component),p=a(12),v=a(2),f=a(11),N=a.n(f);var S=function(e){var t=a(37),s=e.start-2,i=e.end;return Object(j.jsx)("div",{className:"Segment",children:Object(j.jsxs)("div",{className:null!=e.sequence?"SegmentDataContainer":"SegmentDataContainerWithoutId",children:[null!=e.speaker&&Object(j.jsxs)("div",{className:"SegmentSpeakerContainer",children:[e.start&&e.end&&Object(j.jsx)("div",{className:"SegmentAudioContainer",children:Object(j.jsx)("audio",{className:"AudioPlayer",src:"http://dev.thomaschen.org/uist2021/"+e.audioName+".mp3#t="+s+","+i,controls:!0})}),Object(j.jsxs)("p",{className:N()({SegmentSpeakerTime:!e.label},{SegmentSpeakerText1:"0"===e.speaker},{SegmentSpeakerText2:"1"===e.speaker}),children:[e.label," ",e.speaker]})]}),null!=e.sequence?Object(j.jsx)("div",{className:"SegmentIdContainer",children:Object(j.jsx)("p",{className:"SegmentIdText",children:e.sequence})}):Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:"SegmentTextContainer",children:null!=e.phrase&&e.isSelected?Object(j.jsx)(t,{className:"SegmentTextText",search:e.phrase,children:e.text}):Object(j.jsx)("p",{className:"SegmentTextText",children:e.text})})]})})},g=(a(43),function(e,t){for(var a=new Set(t),s=0;s<e.length;s++)if(a.has(e[s]))return!0;return!1});function k(e){return Object(j.jsxs)("div",{className:"TitleViewContainer",children:[Object(j.jsx)("div",{className:"TitleViewImageContainer",children:Object(j.jsx)("img",{className:"TitleViewImage",src:e.image})}),Object(j.jsx)("div",{className:"TitleViewTextContainer",children:Object(j.jsxs)("div",{className:"TitleViewTextWrapper",children:[Object(j.jsx)("div",{className:"TitleViewSubtitle",children:e.subtitle?e.subtitle:"Subtitle Not Found"}),Object(j.jsx)("div",{className:"TitleViewTitle",children:e.title?e.title:"Title Not Found"}),Object(j.jsx)("div",{className:"TitleViewDate",children:e.date?e.date:"Date Not Found"})]})})]})}function C(e){var t=Object(s.useState)([]),a=Object(p.a)(t,2),i=a[0],c=a[1],n=Object(s.useState)([]),l=Object(p.a)(n,2),d=l[0],r=l[1],o=Object(s.useState)([]),u=Object(p.a)(o,2),b=u[0],m=u[1],h=Object(s.useState)([]),O=Object(p.a)(h,2),x=O[0],v=O[1],f=e.raw;return Object(s.useEffect)((function(){if(e.raw){var t=e.raw[0].start,a=e.raw[e.raw.length-1].end-t,s=e.raw.map((function(e){return{name:e.id[0],duration:(e.end-e.start)/a,ids:e.id}})),i={};s.forEach((function(e){return i[e.name]=e.duration}));var n=e.low.map((function(e){return{name:e.id.join(", "),duration:e.id.reduce((function(e,t){return e+i[t]}),0),ids:e.id}})),l=e.med.map((function(e){return{name:e.id.join(", "),duration:e.id.reduce((function(e,t){return e+i[t]}),0),ids:e.id}})),d=e.high.map((function(e){return{name:e.id.join(", "),duration:e.id.reduce((function(e,t){return e+i[t]}),0),ids:e.id}}));c(s),r(n),m(l),v(d)}}),[f]),Object(j.jsxs)("div",{className:"temporal",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Orig"}),Object(j.jsx)("div",{className:"data raw",children:i.map((function(t,a){return Object(j.jsx)("div",{className:N()({selected:g(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){e.setSelected(t.ids),e.setHighSelected(a)}},a)}))})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Long"}),Object(j.jsx)("div",{className:"data low",children:d.map((function(t,a){return Object(j.jsx)("div",{className:N()({selected:g(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){e.setSelected(t.ids),e.setHighSelected(a)}},a)}))})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Med"}),Object(j.jsx)("div",{className:"data med",children:b.map((function(t,a){return Object(j.jsx)("div",{className:N()({selected:g(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){e.setSelected(t.ids),e.setHighSelected(a)}},a)}))})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("p",{className:"label",children:"Short"}),Object(j.jsx)("div",{className:"data high",children:x.map((function(t,a){return Object(j.jsx)("div",{className:N()({selected:g(t.ids,e.selectedIds),item:!0}),style:{flex:"".concat((100*t.duration).toFixed(2)," 1 auto")},onClick:function(){e.setSelected(t.ids),e.setHighSelected(a)}},a)}))})]})]})}function w(e){return Object(j.jsxs)("div",{className:"SegmentColumn High",children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsxs)("h2",{className:"ColumnTitle",children:[e.title," Summary"]})}),Object(j.jsx)("div",{className:"data",children:e.segments.map((function(t,a){return Object(j.jsx)("div",{onClick:function(){e.setSelected(t.id)},className:N()({selected:g(t.id,e.selectedIds),item:!0}),ref:g(t.id,e.selectedIds)?e.selectedRef:null,children:Object(j.jsx)(S,{text:t.text,id:t.id.join(", "),sequence:t.sequence,phrase:t.phrase?t.phrase:null,isSelected:g(t.id,e.selectedIds),speaker:t.duration})},a)}))})]})}function T(e){return Object(j.jsxs)("div",{className:"SegmentColumn notclickable ".concat(e.title),children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsxs)("h2",{className:"ColumnTitle",children:[e.title," ","Original"!==e.title?"Summary":"Transcript"]})}),Object(j.jsx)("div",{className:"data",children:e.segments.filter((function(t){return g(t.id,e.selectedIds)})).map((function(t,a){return Object(j.jsx)("div",{className:N()({selected:!0,item:!0}),children:t.start&&t.end?Object(j.jsx)(S,{text:t.text,id:t.id.join(", "),speaker:t.speaker?t.speaker:null,phrase:t.phrase?t.phrase:null,isSelected:g(t.id,e.selectedIds),audioName:e.audioName,start:t.start,end:t.end,label:"Speaker"}):Object(j.jsx)(S,{text:t.text,id:t.id.join(", "),speaker:t.speaker?t.speaker:null,phrase:t.phrase?t.phrase:null,isSelected:g(t.id,e.selectedIds),label:"Speaker"})},a)}))})]})}var A=function(e){var t=Object(s.useState)([]),a=Object(p.a)(t,2),i=a[0],c=a[1],n=Object(s.useState)(null),l=Object(p.a)(n,2),d=l[0],r=l[1],o=Object(s.useRef)(null),u=e.audioData;return Object(s.useEffect)((function(){return c(null)}),[u]),Object(s.useEffect)((function(){null!==d&&o.current&&o.current.scrollIntoView({behavior:"smooth",block:"center"})}),[o,d]),e.audioData?Object(j.jsxs)("div",{className:"Parent",children:[Object(j.jsx)("div",{className:"HighSegmentViewColumn",children:Object(j.jsx)(w,{title:"Short",segments:e.audioData.high.segments,selectedIds:i,setSelected:c,selectedRef:o})}),Object(j.jsxs)("div",{className:"DataViewColumn",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{title:e.audioData.title,subtitle:e.audioData.subtitle,date:e.audioData.date,audioName:e.audioName,image:e.audioData.image}),Object(j.jsx)(C,{raw:e.audioData.raw.segments,high:e.audioData.high.segments,med:e.audioData.med.segments,low:e.audioData.low.segments,selectedIds:i,setSelected:c,setHighSelected:r})]}),Object(j.jsxs)("div",{className:"SegmentColumnContainer",children:[Object(j.jsx)(T,{title:"Medium",segments:e.audioData.med.segments,selectedIds:i,label:"speaker"}),Object(j.jsx)(T,{title:"Long",segments:e.audioData.low.segments,selectedIds:i,label:"speaker"}),Object(j.jsx)(T,{title:"Original",segments:e.audioData.raw.segments,selectedIds:i,audioName:e.audioName,label:"speaker"})]})]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Explore View"}),Object(j.jsx)("p",{children:"No audio sample selected"})]})},y=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"QAView"})})}}]),a}(s.Component);var D=function(e){return Object(j.jsx)("div",{className:"Speech",children:Object(j.jsx)("div",{className:"0"===e.speaker?"LeftSpeakerContainer":"RightSpeakerContainer",children:Object(j.jsx)("p",{className:"0"===e.speaker?"LeftText":"RightText",children:e.text})})})};a(44);var I=function(e){return e.audioData?Object(j.jsxs)("div",{className:"SpeakerParentContainer",children:[Object(j.jsxs)("div",{className:"SpeakerTitleContainer",children:[Object(j.jsx)("h2",{className:"FirstSpeakerTitle",children:"First Speaker"}),Object(j.jsx)("h2",{className:"SecondSpeakerTitle",children:"Second Speaker"})]}),Object(j.jsx)("div",{className:"SpeakerDataContainer",children:e.audioData.raw.segments.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(D,{text:e.text,speaker:e.speaker})},t)}))})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Speaker View"}),Object(j.jsx)("p",{children:"No audio sample selected"})]})},V=(a(45),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"AboutView"})})}}]),a}(s.Component));var F=function(e){var t=Object(s.useState)(null),a=Object(p.a)(t,2),i=a[0],c=a[1],n=e.audioName;return Object(s.useEffect)((function(){if(n){fetch("../data/".concat(n,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.log(e)}))}}),[n]),Object(j.jsx)("div",{className:"DataContainer",children:Object(j.jsxs)(v.c,{children:[Object(j.jsx)(v.a,{path:"/uist-2021/data/explore",children:Object(j.jsx)(A,{audioName:e.audioName,audioData:i})}),Object(j.jsx)(v.a,{path:"/uist-2021/data/qa",children:Object(j.jsx)(y,{audioName:e.audioName,audioData:i})}),Object(j.jsx)(v.a,{path:"/uist-2021/data/speaker",children:Object(j.jsx)(I,{audioName:e.audioName,audioData:i})}),Object(j.jsx)(v.a,{path:"/uist-2021/static/about",children:Object(j.jsx)(V,{})}),Object(j.jsx)(v.a,{children:Object(j.jsx)("p",{children:"Welcome! Navigate to the Explore Page to Begin."})})]})})},E=(a(46),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"AudioSelectionContainer",children:[Object(j.jsxs)("p",{className:"CurrentAudioLabel",children:["Currently Analyzing Audio: ",Object(j.jsx)("strong",{children:this.props.selectedAudio?this.props.selectedAudio:Object(j.jsx)("samp",{className:"NoAudioSelectedText",children:"No Audio Selected"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"SelectAudioLabel",children:"Select an Audio:"}),Object(j.jsxs)("select",{className:"AudioSelector",name:"AudioSelect",onChange:function(t){return e.props.onChange(t.target.value)},children:[Object(j.jsx)("option",{defaultValue:!0,selected:!0,disabled:!0,children:"Please Select An Audio"}),this.props.audios.map((function(e){return Object(j.jsx)("option",{children:e.value},e.id)}))]})]})]})}}]),a}(s.Component)),L=a(23),q=(a(47),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){if(""===e)return s.setState({selectedAudio:""}),void s.setState({selectedAudioData:""});s.setState({selectedAudio:e})},s.state={audios:L,selectedAudio:""},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(E,{audios:this.state.audios,selectedAudio:this.state.selectedAudio,onChange:this.handleChange}),Object(j.jsx)(F,{audioName:this.state.selectedAudio})]})})}}]),a}(i.a.Component)),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),c(e),n(e)}))};n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),H()}},[[48,1,2]]]);
//# sourceMappingURL=main.afdff426.chunk.js.map