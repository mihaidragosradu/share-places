(this["webpackJsonpshare-places"]=this["webpackJsonpshare-places"]||[]).push([[0],Array(20).concat([function(e,t,i){},,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(1),a=i.n(c),s=i(9),l=i.n(s),r=(i(30),i(4)),o=i(2),d=i(7),j=(i(31),function(e){return Object(n.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(n.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})}),u=(i(32),function(e){return Object(n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}),b=(i(33),function(e){return Object(n.jsx)("li",{className:"user-item",children:Object(n.jsx)(u,{className:"user-item__content",children:Object(n.jsxs)(d.b,{to:"/".concat(e.id,"/places"),children:[Object(n.jsx)("div",{className:"user-item__image",children:Object(n.jsx)(j,{image:e.image,alt:e.name})}),Object(n.jsxs)("div",{className:"user-item__info",children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsxs)("h6",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})}),m=(i(39),function(e){return 0===e.items.length?Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(u,{children:Object(n.jsx)("h2",{children:"No users found."})})}):Object(n.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(n.jsx)(b,{id:e.id,image:e.image,name:e.name,placeCount:e.places},e.id)}))})}),h=function(){return Object(n.jsx)(m,{items:[{id:"u1",name:"John Smith",image:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",places:3}]})},p=i(6),O=i(22),x="REQUIRE",f="MINLENGTH",v="MAXLENGTH",g="EMAIL",N=function(){return{type:x}},w=function(e){return{type:f,val:e}},_=function(e,t){var i,n=!0,c=Object(O.a)(t);try{for(c.s();!(i=c.n()).done;){var a=i.value;a.type===x&&(n=n&&e.trim().length>0),a.type===f&&(n=n&&e.trim().length>=a.val),a.type===v&&(n=n&&e.trim().length<=a.val),"MIN"===a.type&&(n=n&&+e>=a.val),"MAX"===a.type&&(n=n&&+e<=a.val),a.type===g&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(s){c.e(s)}finally{c.f()}return n},C=(i(40),function(e,t){switch(t.type){case"CHANGE":return Object(p.a)(Object(p.a)({},e),{},{value:t.val,isValid:_(t.val,t.validators)});case"TOUCH":return Object(p.a)(Object(p.a)({},e),{},{isTouched:!0});default:return e}}),y=function(e){var t=Object(c.useReducer)(C,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),i=Object(r.a)(t,2),a=i[0],s=i[1],l=e.id,o=e.onInput,d=a.value,j=a.isValid;Object(c.useEffect)((function(){o(l,d,j)}),[l,d,j,o]);var u=function(t){s({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){s({type:"TOUCH"})},m="input"===e.element?Object(n.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:b,value:a.value}):Object(n.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:b,value:a.value});return Object(n.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[Object(n.jsx)("label",{htmlFor:e.id,children:e.label}),m,!a.isValid&&a.isTouched&&Object(n.jsx)("p",{children:e.errorText})]})},I=(i(41),function(e){return e.href?Object(n.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(n.jsx)(d.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(n.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}),k=i(13),E=function(e,t){switch(t.type){case"INPUT_CHANGE":var i=!0;for(var n in e.inputs)e.inputs[n]&&(i=n===t.inputId?i&&t.isValid:i&&e.inputs[n].isValid);return Object(p.a)(Object(p.a)({},e),{},{inputs:Object(p.a)(Object(p.a)({},e.inputs),{},Object(k.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:i});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},V=function(e,t){var i=Object(c.useReducer)(E,{inputs:e,isValid:t}),n=Object(r.a)(i,2),a=n[0],s=n[1];return[a,Object(c.useCallback)((function(e,t,i){s({type:"INPUT_CHANGE",value:t,isValid:i,inputId:e})}),[]),Object(c.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},S=(i(20),function(){var e=V({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1}},!1),t=Object(r.a)(e,2),i=t[0],c=t[1];return Object(n.jsxs)("form",{className:"place-form",onSubmit:function(e){e.preventDefault(),console.log(i.inputs)},children:[Object(n.jsx)(y,{id:"title",element:"input",type:"text",label:"Title",validators:[N()],errorText:"Please enter a valid title.",onInput:c}),Object(n.jsx)(y,{id:"description",element:"textarea",label:"Description",validators:[w(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:c}),Object(n.jsx)(y,{id:"address",element:"input",label:"Address",validators:[N()],errorText:"Please enter a valid address.",onInput:c}),Object(n.jsx)(I,{type:"submit",disabled:!i.isValid,children:"ADD PLACE"})]})}),T=i(53),P=(i(42),function(e){return l.a.createPortal(Object(n.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),A=(i(43),function(e){var t=Object(n.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(n.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(n.jsx)("h2",{children:e.header})}),Object(n.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(n.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(n.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return l.a.createPortal(t,document.getElementById("modal-hook"))}),L=function(e){return Object(n.jsxs)(a.a.Fragment,{children:[e.show&&Object(n.jsx)(P,{onClick:e.onCancel}),Object(n.jsx)(T.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(n.jsx)(A,Object(p.a)({},e))})]})},B=(i(44),function(e){var t=Object(c.useRef)(),i=e.center,a=e.zoom;return Object(c.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([i.lng,i.lat]),zoom:a})})}),[i,a]),Object(n.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),D=Object(c.createContext)({isLoggedIn:!1,login:function(){},logout:function(){}}),Y=(i(45),function(e){var t=Object(c.useContext)(D),i=Object(c.useState)(!1),s=Object(r.a)(i,2),l=s[0],o=s[1],d=Object(c.useState)(!1),j=Object(r.a)(d,2),b=j[0],m=j[1],h=function(){return o(!1)},p=function(){m(!1)};return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(L,{show:l,onCancel:h,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:Object(n.jsx)(I,{onClick:h,children:"CLOSE"}),children:Object(n.jsx)("div",{className:"map-container",children:Object(n.jsx)(B,{center:e.coordinates,zoom:18})})}),Object(n.jsx)(L,{show:b,onCancel:p,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(I,{inverse:!0,onClick:p,children:"Cancel"}),Object(n.jsx)(I,{danger:!0,onClick:function(){m(!1),console.log("deleting ...")},children:"Delete"})]}),children:Object(n.jsx)("p",{children:"Do you want to Delete this place?"})}),Object(n.jsx)("li",{className:"place-item",children:Object(n.jsxs)(u,{className:"place-item__content",children:[Object(n.jsx)("div",{className:"place-item__image",children:Object(n.jsx)("img",{src:e.image,alt:e.title})}),Object(n.jsxs)("div",{className:"place-item__info",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("h3",{children:e.address}),Object(n.jsx)("p",{children:e.description})]}),Object(n.jsxs)("div",{className:"place-item__actions",children:[Object(n.jsx)(I,{inverse:!0,onClick:function(){return o(!0)},children:"VIEW ON MAP"}),t.isLoggedIn&&Object(n.jsx)(I,{to:"/places/".concat(e.id),inverse:!0,children:"EDIT"}),t.isLoggedIn&&Object(n.jsx)(I,{inverse:!0,onClick:function(){m(!0)},children:"DELETE"})]})]})})]})}),M=(i(46),function(e){return 0===e.items.length?Object(n.jsx)("div",{className:"place-list center",children:Object(n.jsxs)(u,{children:[Object(n.jsx)("h2",{children:"No places found. Maybe create one?"}),Object(n.jsx)(I,{inverse:!0,to:"/places/new",children:"Share Place"})]})}):Object(n.jsx)("ul",{className:"place-list",children:e.items.map((function(e){return Object(n.jsx)(Y,{id:e.id,image:e.imageUrl,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location},e.id)}))})}),U=[{id:"p1",title:"Empire State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u1"},{id:"p2",title:"Empire State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u2"}],G=function(){var e=Object(o.g)().userId,t=U.filter((function(t){return t.creator===e}));return Object(n.jsx)(M,{items:t})},H=[{id:"p1",title:"Empire State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u1"},{id:"p2",title:"Empire State Building",description:"One of the most famous sky scrapers in the world!",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",address:"20 W 34th St, New York, NY 10001",location:{lat:40.7484405,lng:-73.9878584},creator:"u2"}],W=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),i=t[0],a=t[1],s=Object(o.g)().placeId,l=V({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),d=Object(r.a)(l,3),j=d[0],b=d[1],m=d[2],h=H.find((function(e){return e.id===s}));Object(c.useEffect)((function(){h&&m({title:{value:h.title,isValid:!0},description:{value:h.description,isValid:!0}},!0),a(!1)}),[m,h]);return h?i?Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("h2",{children:"Loading..."})}):Object(n.jsxs)("form",{className:"place-form",onSubmit:function(e){e.preventDefault(),console.log(j.inputs)},children:[Object(n.jsx)(y,{id:"title",element:"input",type:"text",label:"Title",validators:[N()],errorText:"Please enter a valid title.",onInput:b,initialValue:j.inputs.title.value,initialValid:j.inputs.title.isValid}),Object(n.jsx)(y,{id:"description",element:"textarea",label:"Description",validators:[w(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:b,initialValue:j.inputs.description.value,initialValid:j.inputs.description.isValid}),Object(n.jsx)(I,{type:"submit",disabled:!j.isValid,children:"UPDATE PLACE"})]}):Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(u,{children:Object(n.jsx)("h2",{children:"Could not find place!"})})})},z=(i(47),function(){var e=Object(c.useContext)(D),t=Object(c.useState)(!0),i=Object(r.a)(t,2),a=i[0],s=i[1],l=V({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),o=Object(r.a)(l,3),d=o[0],j=o[1],b=o[2];return Object(n.jsxs)(u,{className:"authentication",children:[Object(n.jsx)("h2",{children:"Login Required"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(d.inputs),e.login()},children:[!a&&Object(n.jsx)(y,{element:"input",id:"name",type:"text",label:"Your Name",validators:[N()],errorText:"Please enter a name.",onInput:j}),Object(n.jsx)(y,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:g}],errorText:"Please enter a valid email address.",onInput:j}),Object(n.jsx)(y,{element:"input",id:"password",type:"password",label:"Password",validators:[w(5)],errorText:"Please enter a valid password, at least 5 characters.",onInput:j}),Object(n.jsx)(I,{type:"submit",disabled:!d.isValid,children:a?"LOGIN":"SIGNUP"})]}),Object(n.jsxs)(I,{inverse:!0,onClick:function(){a?b(Object(p.a)(Object(p.a)({},d.inputs),{},{name:{value:"",isValid:!1}}),!1):b(Object(p.a)(Object(p.a)({},d.inputs),{},{name:void 0}),d.inputs.email.isValid&&d.inputs.password.isValid),s((function(e){return!e}))},children:["SWITCH TO ",a?"SIGNUP":"LOGIN"]})]})}),R=(i(48),function(e){return Object(n.jsx)("header",{className:"main-header",children:e.children})}),F=(i(49),function(e){var t=Object(c.useContext)(D);return Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{to:"/",exact:!0,children:"All Users"})}),t.isLoggedIn&&Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{to:"/u1/places",children:"My places"})}),t.isLoggedIn&&Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{to:"/places/new",children:"Add place"})}),!t.isLoggedIn&&Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{to:"/auth",children:"Authenticate"})}),t.isLoggedIn&&Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:t.logout,children:"LogOut"})})]})}),J=(i(50),function(e){var t=Object(n.jsx)(T.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(n.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return l.a.createPortal(t,document.getElementById("drawer-hook"))}),X=(i(51),function(e){var t=Object(c.useState)(!1),i=Object(r.a)(t,2),s=i[0],l=i[1],o=function(){l(!1)};return Object(n.jsxs)(a.a.Fragment,{children:[s&&Object(n.jsx)(P,{onClick:o}),Object(n.jsx)(J,{show:s,onClick:o,children:Object(n.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(n.jsx)(F,{})})}),Object(n.jsxs)(R,{children:[Object(n.jsxs)("button",{className:"main-navigation__menu-btn",onClick:function(){l(!0)},children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("h1",{className:"main-navigation__title",children:Object(n.jsx)(d.b,{to:"/",children:"Places I visited"})}),Object(n.jsx)("nav",{className:"main-navigation__header-nav",children:Object(n.jsx)(F,{})})]})]})}),q=function(){var e,t=Object(c.useState)(!1),i=Object(r.a)(t,2),a=i[0],s=i[1],l=Object(c.useCallback)((function(){s(!0)}),[]),j=Object(c.useCallback)((function(){s(!1)}),[]);return e=a?Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/",exact:!0,children:Object(n.jsx)(h,{})}),Object(n.jsx)(o.b,{path:"/:userId/places",exact:!0,children:Object(n.jsx)(G,{})}),Object(n.jsx)(o.b,{path:"/places/new",exact:!0,children:Object(n.jsx)(S,{})}),Object(n.jsx)(o.b,{path:"/places/:placeId",children:Object(n.jsx)(W,{})}),Object(n.jsx)(o.a,{to:"/"})]}):Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/",exact:!0,children:Object(n.jsx)(h,{})}),Object(n.jsx)(o.b,{path:"/:userId/places",exact:!0,children:Object(n.jsx)(G,{})}),Object(n.jsx)(o.b,{path:"/auth",children:Object(n.jsx)(z,{})}),Object(n.jsx)(o.a,{to:"/auth"})]}),Object(n.jsx)(D.Provider,{value:{isLoggedIn:a,login:l,logout:j},children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(X,{}),Object(n.jsx)("main",{children:e})]})})};l.a.render(Object(n.jsx)(q,{}),document.getElementById("root"))}]),[[52,1,2]]]);
//# sourceMappingURL=main.4c6b76e6.chunk.js.map