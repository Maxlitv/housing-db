(this.webpackJsonphousing=this.webpackJsonphousing||[]).push([[0],[,,function(e,r,n){e.exports={input_block:"Personer_input_block__wi42g",label:"Personer_label__1k61l",drop_open:"Personer_drop_open__2hxx9",drop_open_hide:"Personer_drop_open_hide__d206O",container_row:"Personer_container_row__2u4TV",row_padding:"Personer_row_padding__3aF47",name:"Personer_name__4626w",born_flex:"Personer_born_flex__1PlwB",born_description:"Personer_born_description__3z8uG",button_set:"Personer_button_set__ZVf4C",renderAmount:"Personer_renderAmount__JI9gw",counter:"Personer_counter__2e770",arrow:"Personer_arrow__pSZA5",arrow_up:"Personer_arrow_up__ii5u1"}},function(e,r,n){e.exports={input_block:"Biler_input_block__192nn",arrow:"Biler_arrow__2SV4_",arrow_up:"Biler_arrow_up__2-eBt",label:"Biler_label__2OId_",drop_open:"Biler_drop_open__1BEN2",drop_open_hide:"Biler_drop_open_hide__E1haj",container_row:"Biler_container_row__93blu",name:"Biler_name__1GwDc",born_flex:"Biler_born_flex__3U0Ej",born_description:"Biler_born_description__1te7Z",button_set:"Biler_button_set__3gZgT",renderAmount:"Biler_renderAmount__WToiL",counter:"Biler_counter__18B9U"}},,,function(e,r,n){e.exports={container_row:"ButtonSet_container_row__2CIUI",name:"ButtonSet_name__33QdZ",born_flex:"ButtonSet_born_flex__1beI5",born_description:"ButtonSet_born_description__vcwbs",button_set:"ButtonSet_button_set__2NsPf",renderAmount:"ButtonSet_renderAmount__2jZzZ",counter:"ButtonSet_counter__3puzR"}},,function(e,r,n){e.exports={container:"Savings_container__3aj3T",label:"Savings_label__nEEpA",input_savings:"Savings_input_savings__8iMHh",input_saving:"Savings_input_saving__2BHrO",error_msg:"Savings_error_msg__1sS3-"}},function(e,r,n){e.exports={container:"Income_container__2uciV",label:"Income_label__2cUYj",input_savings:"Income_input_savings__2InZD",input_saving:"Income_input_saving__3Ta8V",error_msg:"Income_error_msg__3scdK"}},,,function(e,r,n){e.exports={button:"SubmitBtn_button__Bn2nZ"}},,,,,function(e,r,n){},function(e,r,n){},,function(e,r,n){"use strict";n.r(r);var a=n(4),t=n.n(a),c=n(11),s=n.n(c),o=(n(17),n(7)),i=n(5),l=n(1),_=(n.p,n(18),n(2)),b=n.n(_),d=n(6),u=n.n(d),j=n(0);var p=function(e){var r=e.ageSpecs,n=e.numberOfChildren,a=e.dispatch,t=e.marker,c=e.total;return Object(j.jsxs)("div",{className:u.a.container_row,children:[Object(j.jsxs)("div",{className:u.a.born_flex,children:[Object(j.jsx)("div",{className:u.a.name,children:"B\xf8rn"}),Object(j.jsx)("div",{className:u.a.born_description,children:r})]}),Object(j.jsxs)("div",{className:u.a.button_set,children:[Object(j.jsx)("button",{onClick:function(){n<=0||a({type:"numberDown",marker:t})},className:u.a.counter,children:"-"}),Object(j.jsx)("div",{className:u.a.renderAmount,children:Object(j.jsx)("p",{children:n})}),Object(j.jsx)("button",{onClick:function(){c>=8||a({type:"numberChange",marker:t})},className:u.a.counter,children:"+"})]})]})},m={personerData:{numberOfAdults:1,numberOfCars:0,numberOfAllPeople:0,income:"",downPayment:""},errorTips:{savings:!1,downPayment:!1},ageSpecs:{age0_2:"0-2 \xe5r",age3_5:"3-5 \xe5r",age6_9:"6-9 \xe5r",age10_17:"10-17 \xe5r",age18up:"18+ \xe5r"},numberOfChildren:{age0_2:0,age3_5:0,age6_9:0,age10_17:0,age18up:0,total:0}},O=n.p+"static/media/arrow-down.62cd43fe.svg";var h=function(e){var r=e.data,n=e.dispatch,t=Object(a.useState)(!1),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:b.a.label,children:"Personer"}),Object(j.jsx)("div",{onClick:function(){i(!s)},className:b.a.input_block,children:Object(j.jsxs)("div",{className:b.a.container_row,children:[Object(j.jsx)("p",{children:r.numberOfChildren.total+r.personerData.numberOfAdults}),Object(j.jsx)("img",{className:"".concat(b.a.arrow," ").concat(s?"":b.a.arrow_up),src:O,alt:""})]})}),Object(j.jsxs)("div",{className:"".concat(b.a.drop_open," ").concat(s?"":b.a.drop_open_hide),children:[Object(j.jsxs)("div",{className:"".concat(b.a.container_row," ").concat(b.a.row_padding),children:[Object(j.jsx)("div",{className:b.a.name,children:"Voksne"}),Object(j.jsxs)("div",{className:b.a.button_set,children:[Object(j.jsx)("button",{onClick:function(){r.personerData.numberOfAdults<=0||n({type:"adultMinus"})},className:b.a.counter,children:"-"}),Object(j.jsx)("div",{className:b.a.renderAmount,children:r.personerData.numberOfAdults}),Object(j.jsx)("button",{onClick:function(){r.personerData.numberOfAdults>=2||n({type:"adultPlus"})},className:b.a.counter,children:"+"})]})]}),Object(j.jsx)(p,{total:r.numberOfChildren.total,marker:"age0_2",dispatch:n,numberOfChildren:r.numberOfChildren.age0_2,ageSpecs:r.ageSpecs.age0_2}),Object(j.jsx)(p,{total:r.numberOfChildren.total,marker:"age3_5",dispatch:n,numberOfChildren:r.numberOfChildren.age3_5,ageSpecs:r.ageSpecs.age3_5}),Object(j.jsx)(p,{total:r.numberOfChildren.total,marker:"age6_9",dispatch:n,numberOfChildren:r.numberOfChildren.age6_9,ageSpecs:r.ageSpecs.age6_9}),Object(j.jsx)(p,{total:r.numberOfChildren.total,marker:"age10_17",dispatch:n,numberOfChildren:r.numberOfChildren.age10_17,ageSpecs:r.ageSpecs.age10_17}),Object(j.jsx)(p,{total:r.numberOfChildren.total,marker:"age18up",dispatch:n,numberOfChildren:r.numberOfChildren.age18up,ageSpecs:r.ageSpecs.age18up})]})]})},g=n(3),f=n.n(g);var v=function(e){var r=e.numberOfCars,n=e.dispatch,t=Object(a.useState)(!1),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:f.a.label,children:"Biler"}),Object(j.jsx)("div",{onClick:function(){i(!s)},className:f.a.input_block,children:Object(j.jsxs)("div",{className:f.a.container_row,children:[Object(j.jsx)("p",{children:r}),Object(j.jsx)("img",{className:"".concat(f.a.arrow," ").concat(s?"":f.a.arrow_up),src:O,alt:""})]})}),Object(j.jsx)("div",{className:"".concat(f.a.drop_open," ").concat(s?"":f.a.drop_open_hide),children:Object(j.jsxs)("div",{className:"".concat(f.a.container_row," ").concat(f.a.row_padding),children:[Object(j.jsx)("div",{className:f.a.name,children:"Biler"}),Object(j.jsxs)("div",{className:f.a.button_set,children:[Object(j.jsx)("button",{onClick:function(){r<=0||n({type:"carMinus"})},className:f.a.counter,children:"-"}),Object(j.jsx)("div",{className:f.a.renderAmount,children:r}),Object(j.jsx)("button",{onClick:function(){r>=8||n({type:"carPlus"})},className:f.a.counter,children:"+"})]})]})})]})},x=n(8),w=n.n(x);var C=function(e){var r=e.savings,n=e.dispatch,a=e.showErrorTip;return Object(j.jsxs)("div",{className:w.a.container,children:[Object(j.jsx)("p",{className:w.a.label,children:"Din opsparing til ny bolig"}),Object(j.jsx)("input",{onChange:function(e){var r=Number(e.target.value);n(r>=1e8?{type:"showErrorTip",marker:"savings"}:{type:"hideErrorTip",marker:"savings"}),n({type:"savings",payload:r})},placeholder:"0 kr.",className:w.a.input_savings,controls:"no",type:"number",value:r}),a&&Object(j.jsx)("p",{className:w.a.error_msg,children:"Bel\xf8bet skal v\xe6re mindre end 100.000.000"})]})},N=n(9),k=n.n(N);var P=function(e){var r=e.downPayment,n=e.dispatch,a=e.showErrorTip;return Object(j.jsxs)("div",{className:k.a.container,children:[Object(j.jsx)("p",{className:k.a.label,children:"Samlet indkomst efter skat pr. md."}),Object(j.jsx)("input",{value:r,onChange:function(e){var r=Number(e.target.value);n(r>=1e6?{type:"showErrorTipDown",marker:"downPayment"}:{type:"hideErrorTipDown",marker:"downPayment"}),n({type:"downPayment",payload:r})},placeholder:"0 kr./md.",className:k.a.input_savings,controls:"no",type:"number"}),a&&Object(j.jsx)("p",{className:k.a.error_msg,children:"Skal v\xe6re et positivt tal mindre end 1.000.000"})]})},S=n(12),D=n.n(S);var y=function(e){var r=e.isHidden;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{disabled:r,className:D.a.button,children:"Se boliger"})})},B=function(e,r){var n,a;switch(r.type){case"numberChange":return Object(l.a)(Object(l.a)({},e),{},{numberOfChildren:Object(l.a)(Object(l.a)({},e.numberOfChildren),{},(n={},Object(i.a)(n,r.marker,e.numberOfChildren[r.marker]+1),Object(i.a)(n,"total",e.numberOfChildren.total+1),n))});case"numberDown":return Object(l.a)(Object(l.a)({},e),{},{numberOfChildren:Object(l.a)(Object(l.a)({},e.numberOfChildren),{},(a={},Object(i.a)(a,r.marker,e.numberOfChildren[r.marker]-1),Object(i.a)(a,"total",e.numberOfChildren.total-1),a))});case"adultPlus":return Object(l.a)(Object(l.a)({},e),{},{personerData:Object(l.a)(Object(l.a)({},e.personerData),{},{numberOfAdults:e.personerData.numberOfAdults+1})});case"adultMinus":return Object(l.a)(Object(l.a)({},e),{},{personerData:Object(l.a)(Object(l.a)({},e.personerData),{},{numberOfAdults:e.personerData.numberOfAdults-1})});case"carPlus":return Object(l.a)(Object(l.a)({},e),{},{personerData:Object(l.a)(Object(l.a)({},e.personerData),{},{numberOfCars:e.personerData.numberOfCars+1})});case"carMinus":return Object(l.a)(Object(l.a)({},e),{},{personerData:Object(l.a)(Object(l.a)({},e.personerData),{},{numberOfCars:e.personerData.numberOfCars-1})});case"savings":return Object(l.a)(Object(l.a)({},e),{},{personerData:Object(l.a)(Object(l.a)({},e.personerData),{},{income:r.payload})});case"showErrorTip":return Object(l.a)(Object(l.a)({},e),{},{errorTips:Object(l.a)(Object(l.a)({},e.errorTips),{},Object(i.a)({},r.marker,!0))});case"hideErrorTip":return Object(l.a)(Object(l.a)({},e),{},{errorTips:Object(l.a)(Object(l.a)({},e.errorTips),{},Object(i.a)({},r.marker,!1))});case"downPayment":return Object(l.a)(Object(l.a)({},e),{},{personerData:Object(l.a)(Object(l.a)({},e.personerData),{},{downPayment:r.payload})});case"showErrorTipDown":return Object(l.a)(Object(l.a)({},e),{},{errorTips:Object(l.a)(Object(l.a)({},e.errorTips),{},Object(i.a)({},r.marker,!0))});case"hideErrorTipDown":return Object(l.a)(Object(l.a)({},e),{},{errorTips:Object(l.a)(Object(l.a)({},e.errorTips),{},Object(i.a)({},r.marker,!1))});default:return e}};var T=function(){var e=Object(a.useReducer)(B,m),r=Object(o.a)(e,2),n=r[0],t=r[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"flex-item",children:Object(j.jsx)(h,{data:n,dispatch:t})}),Object(j.jsx)("div",{className:"flex-item",children:Object(j.jsx)(v,{dispatch:t,numberOfCars:n.personerData.numberOfCars})}),Object(j.jsx)("div",{className:"flex-item",children:Object(j.jsx)(C,{dispatch:t,savings:n.personerData.income,showErrorTip:n.errorTips.savings})}),Object(j.jsx)("div",{className:"flex-item",children:Object(j.jsx)(P,{dispatch:t,showErrorTip:n.errorTips.downPayment,downPayment:n.personerData.downPayment})}),Object(j.jsx)("div",{className:"flex-item",children:Object(j.jsx)(y,{isHidden:n.errorTips.downPayment||n.errorTips.savings})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(r){var n=r.getCLS,a=r.getFID,t=r.getFCP,c=r.getLCP,s=r.getTTFB;n(e),a(e),t(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(T,{data:m})}),document.getElementById("root")),A()}],[[20,1,2]]]);
//# sourceMappingURL=main.16fc3f0d.chunk.js.map