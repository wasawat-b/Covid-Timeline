(this["webpackJsonpcovid-timeline"]=this["webpackJsonpcovid-timeline"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"card_container__mh2eK",success:"card_success__1_emx",deleteButton:"card_deleteButton__2wJea"}},17:function(e,t,n){e.exports={coverBlock:"App_coverBlock__17ARy",headLine:"App_headLine__1xDOm"}},2:function(e,t,n){e.exports={timeline:"TimelineDetail_timeline__1R6j4",dateClass:"TimelineDetail_dateClass__23uyD",detail:"TimelineDetail_detail__1-UzC",timeClassCover:"TimelineDetail_timeClassCover__2e_e1",timeClass:"TimelineDetail_timeClass__1at34",span:"TimelineDetail_span__16-0w",deleteButton:"TimelineDetail_deleteButton__155Mi"}},20:function(e,t,n){e.exports={backdrop:"overlay_backdrop__my1r2",overlay:"overlay_overlay__uqVFE","slide-down":"overlay_slide-down__3kyW6"}},26:function(e,t,n){},3:function(e,t,n){e.exports={coverBorder:"Timeline_coverBorder__35Go8",header:"Timeline_header__2GGWD",patientDetail:"Timeline_patientDetail__JFXsu",upFont:"Timeline_upFont__38puB",bellowFont:"Timeline_bellowFont__13bOZ",selectClass:"Timeline_selectClass__1kusa",loading:"Timeline_loading__3UFCd"}},35:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=(n(26),n(1)),i=n.n(r),s=n(15),l=n(9),o=function(){return Object(l.b)()},d=l.c,u=n(11),j=n(14),m=Object(j.b)({name:"dataStorage",initialState:{items:[{id:"",gender:"",age:"",job:"",detail:[{id:"",date:"",description:""}]}],change:!1,deleteTrigger:!1,showSuccess:!1},reducers:{receiveData:function(e,t){e.items=t.payload.items},addData:function(e,t){var n=t.payload.items;e.change=!0;var a=e.items.find((function(e){return e.gender===n.gender&&e.age===n.age&&e.job===n.job}));if(a){a.detail.push({id:n.detail.id,date:n.detail.date,description:n.detail.description});var c=e.items.reduce((function(e,t){return t.id===a.id?[].concat(Object(u.a)(e),[a]):[].concat(Object(u.a)(e),[t])}),[]);e.items=c}else e.items.push({id:n.id,gender:n.gender,age:n.age,job:n.job,detail:[{id:n.detail.id,date:n.detail.date,description:n.detail.description}]})},changeDeleteTriggerDefault:function(e,t){e.deleteTrigger="true"===t.payload},removeData:function(e,t){var n=e.items.findIndex((function(e){return e.detail.some((function(e){return e.id===t.payload}))})),a=e.items[n].detail.findIndex((function(e){return e.id===t.payload}));if(1===e.items[n].detail.length){var c=e.items.reduce((function(t,a){return a.id!==e.items[n].id?[].concat(Object(u.a)(t),[a]):Object(u.a)(t)}),[]);e.items=c,e.deleteTrigger=!0}else e.items[n].detail.splice(a,1),e.deleteTrigger=!1;e.change=!0},showSuccess:function(e,t){e.showSuccess="true"===t.payload}}}),b=m.actions,f=m,p=n(7),h=n.n(p),v=n(0),x=function(){var e=o(),t=i.a.useState(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(r.useRef)(null),d=Object(r.useRef)(null),u=Object(r.useRef)(null),j=Object(r.useRef)(null);return Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=(new Date).toISOString(),r={items:{id:n,gender:l.current.value,age:d.current.value,job:u.current.value,detail:{id:n,date:j.current.value,description:a}}};e(b.addData(r)),e(b.showSuccess("true")),j.current.value="",c("")},children:[Object(v.jsxs)("div",{className:"container-lg mb-4 p-4 ".concat(h.a.coverBlock),children:[Object(v.jsx)("h2",{className:h.a.header,children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22"}),Object(v.jsxs)("div",{className:"mb-3 row",children:[Object(v.jsxs)("div",{className:"col-md-6 col-12",children:[Object(v.jsx)("label",{className:"form-label",children:"\u0e40\u0e1e\u0e28"}),Object(v.jsxs)("select",{className:"form-select",ref:l,required:!0,children:[Object(v.jsx)("option",{children:"\u0e0a\u0e32\u0e22"}),Object(v.jsx)("option",{children:"\u0e2b\u0e0d\u0e34\u0e07"})]})]}),Object(v.jsxs)("div",{className:"col-md-6 col-12",children:[Object(v.jsx)("label",{className:"form-label",children:"\u0e2d\u0e32\u0e22\u0e38"}),Object(v.jsx)("input",{className:"form-control",type:"number",min:"1",ref:d,required:!0})]})]}),Object(v.jsx)("label",{className:"form-label",children:"\u0e2d\u0e32\u0e0a\u0e35\u0e1e"}),Object(v.jsx)("input",{className:"form-control",type:"text",ref:u,required:!0})]}),Object(v.jsxs)("div",{className:"container-lg mb-4 p-4 ".concat(h.a.coverBlock),children:[Object(v.jsx)("h2",{className:h.a.header,children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e17\u0e21\u0e4c\u0e44\u0e25\u0e19\u0e4c"}),Object(v.jsx)("label",{className:"form-label",children:"\u0e27\u0e31\u0e19\u0e40\u0e27\u0e25\u0e32"}),Object(v.jsx)("input",{className:"mb-3 form-control",type:"datetime-local",ref:j,required:!0}),Object(v.jsx)("label",{className:"form-label",children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"}),Object(v.jsx)("textarea",{className:"mb-3 form-control",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(v.jsx)("button",{className:h.a.button,children:"+ \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"})]})]})},O=n(13),_=n(6),g=n(2),N=n.n(g),w=function(e){var t=o();return Object(v.jsx)("div",{className:"container-lg m-0 p-0",children:Object(v.jsx)("p",{className:"".concat(N.a.deleteButton),onClick:function(){window.confirm("Do you want to remove this detail?")&&t(b.removeData(e.sentId))},children:"x"})})},y=function(e){var t=e.receivedDate,n=t.reduce((function(e,t){return Object(_.a)(Object(_.a)({},e),{},Object(O.a)({},t.day,(e[t.day]||[]).concat(t)))}),{}),a=Object.keys(n);return Object(v.jsx)("div",{className:"container-lg m-0 p-0",children:a.sort((function(e,t){return parseInt(e)-parseInt(t)})).map((function(e){return Object(v.jsx)("div",{className:"container-lg m-0 p-0",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"container-lg col-3 col-sm-2 m-0 p-0 ".concat(N.a.timeline),children:Object(v.jsx)("p",{className:"".concat(N.a.dateClass),children:e})}),Object(v.jsx)("div",{className:"container-lg col-8 col-sm-9 mb-4 p-2 ".concat(N.a.detail),children:t.sort((function(e,t){return parseInt(e.time)-parseInt(t.time)})).map((function(t){return Object(v.jsx)("div",{className:"".concat(N.a.timeClassCover),children:e===t.day&&Object(v.jsxs)("div",{className:"".concat(N.a.timeClass),children:[Object(v.jsxs)("p",{className:"mb-2",children:[t.time," ",Object(v.jsx)("span",{className:"".concat(N.a.span),children:t.description})]}),Object(v.jsx)(w,{sentId:t.id})]})},t.id)}))})]})},e)}))})},C=n(3),D=n.n(C),k=function(){var e=o(),t=d((function(e){return e.items.items})),n=d((function(e){return e.items.deleteTrigger})),a=i.a.useState(0),c=Object(s.a)(a,2),r=c[0],l=c[1],u=0,j=[],m=0;return!1===n&&(m=r),t[m].detail.map((function(e){var t="",n="";if(e.date){var a=new Date(e.date);t=new Intl.DateTimeFormat("en-GB").format(a);var c=new Date(a).getHours(),r=new Date(a).getMinutes();n=(c<10?"0"+c:c.toString())+":"+(r<10?"0"+r:r.toString())}j.push({id:e.id,day:t,time:n,description:e.description})})),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"mb-4 d-flex justify-content-center",children:t[0].id?Object(v.jsxs)("div",{className:"btn ".concat(D.a.patientDetail),children:[Object(v.jsxs)("div",{"data-bs-toggle":"collapse","data-bs-target":"#collapse-content",children:[Object(v.jsxs)("p",{className:"m-0 ".concat(D.a.upFont),children:["\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22",t[m].gender," \u0e2d\u0e32\u0e22\u0e38 ",t[m].age," \u0e1b\u0e35"]}),Object(v.jsxs)("p",{className:"m-0 ".concat(D.a.bellowFont),children:["\u0e2d\u0e32\u0e0a\u0e35\u0e1e ",t[m].job]})]}),Object(v.jsx)("select",{id:"collapse-content",className:"collapse p-1 ".concat(D.a.selectClass),onChange:function(n){u=t.findIndex((function(e){return e.id===n.target.value})),e(b.changeDeleteTriggerDefault("false")),l(u)},children:t.map((function(e){return Object(v.jsxs)("option",{value:e.id,children:["\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22",e.gender," \u0e2d\u0e32\u0e22\u0e38 ",e.age," \u0e1b\u0e35 \u0e2d\u0e32\u0e0a\u0e35\u0e1e ",e.job]},e.id)}))})]}):Object(v.jsx)("p",{className:D.a.loading,children:"Loading"})}),t[0].id?Object(v.jsx)(y,{receivedDate:j}):null]})},T=function(){return Object(v.jsxs)("div",{className:"container-lg mb-4 py-3 ".concat(D.a.coverBorder),children:[Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)("h1",{className:D.a.header,children:"Timeline"})}),Object(v.jsx)(k,{})]})},B=n(20),S=n.n(B),F=function(e){return Object(v.jsx)("div",{className:S.a.backdrop,onClick:e.onClose})},I=function(e){return Object(v.jsx)("div",{className:S.a.overlay,children:Object(v.jsx)("div",{children:e.children})})},E=document.getElementById("overlay"),q=function(e){return Object(v.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(v.jsx)(F,{onClose:e.onCloseCard}),E),c.a.createPortal(Object(v.jsx)(I,{children:e.children}),E)]})},R=n(16),G=n.n(R),J=function(){var e=o(),t=function(){e(b.showSuccess("false"))};return Object(v.jsx)(q,{onCloseCard:t,children:Object(v.jsxs)("div",{className:G.a.container,children:[Object(v.jsx)("p",{className:G.a.success,children:"Successfully sent!"}),Object(v.jsx)("div",{className:"container-lg m-0 p-0",children:Object(v.jsx)("p",{className:"".concat(G.a.deleteButton),onClick:t,children:"x"})})]})})},L=n(4),A=n.n(L),K=n(10),P=n(17),U=n.n(P);var W=function(){var e=o(),t=d((function(e){return e.items}));return Object(r.useEffect)((function(){e(function(){var e=Object(K.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(K.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-timeline-f6472-default-rtdb.firebaseio.com/data.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not fetch data!");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,n();case 4:a=e.sent,t(b.receiveData(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.useEffect)((function(){var n;t.change&&e((n=t,Object(K.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(K.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-timeline-f6472-default-rtdb.firebaseio.com/data.json",{method:"PUT",body:JSON.stringify({data:n}),headers:{"Content-Type":"application/json"}});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Could not send data!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,t();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))))}),[t,e]),Object(v.jsxs)("div",{className:U.a.coverBlock,children:[Object(v.jsxs)("div",{className:"container-lg pt-4 ".concat(U.a.containerCover),children:[Object(v.jsx)("h1",{className:"".concat(U.a.headLine),children:"COVID Timeline Generator"}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-xl-5 col-lg-5 col-md-4",children:Object(v.jsx)(x,{})}),Object(v.jsx)("div",{className:"col-xl-7 col-lg-7 col-md-8",children:Object(v.jsx)(T,{})})]})]}),t.showSuccess&&Object(v.jsx)("div",{children:Object(v.jsx)(J,{})})]})},M=Object(j.a)({reducer:{items:f.reducer}});c.a.render(Object(v.jsx)(l.a,{store:M,children:Object(v.jsx)(W,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={coverBlock:"NewForm_coverBlock__3Wlxu",header:"NewForm_header__2I93Q",button:"NewForm_button__3hlXK","form-label":"NewForm_form-label__vd3SK"}}},[[35,1,2]]]);
//# sourceMappingURL=main.f0dc07bf.chunk.js.map