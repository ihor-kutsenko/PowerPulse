"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{844:function(e,t,r){var i=r(3329);t.Z=function(e){var t=e.text,r=e.className,s=e.disabled,n=e.type,c=e.onClick;return(0,i.jsx)("button",{className:r,disabled:s,type:n,onClick:c,children:t})}},7312:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(2791),s=r(4164),n=r(4067),c="BasicModalWindow_overlay__cp9tO",a="BasicModalWindow_modal_wrapper__La1IP",l="BasicModalWindow_btn_close__vCDpE",o="BasicModalWindow_icon_close__ADrBu",d=r(3329),u=document.querySelector("#root-modal"),m=function(e){var t=e.children,r=e.handleModalToggle;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&r()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);return(0,s.createPortal)((0,d.jsx)("div",{className:c,onClick:function(e){e.currentTarget===e.target&&r()},children:(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("button",{className:l,onClick:r,children:(0,d.jsx)(n.Z,{iconId:"icon-close",className:o})}),t]})}),u)}},6717:function(e,t,r){r.d(t,{Z:function(){return n}});var i="Section_section__0XkUm",s=r(3329),n=function(e){var t=e.children;return(0,s.jsx)("div",{className:i,children:t})}},5420:function(e,t,r){r.d(t,{Z:function(){return n}});var i="Title_title__IlEm8",s=r(3329),n=function(e){var t=e.text,r=e.className,n="".concat(i," ").concat(r||"");return(0,s.jsx)("h2",{className:n,children:t})}},6935:function(e,t,r){r.r(t),r.d(t,{default:function(){return qe}});var i=r(3409),s=r(6717),n=r(9439),c=r(2791),a=r(7689),l=r(9434),o=r(5420),d="ExercisesCategories_exercises_list__LOp4A",u="ExercisesCategories_exercises_btn__OeglZ",m="ExercisesCategories_active__qxgKv",x=r(3329),p=function(e){var t=e.activeFilter,r=e.handleFilterClick;return(0,x.jsxs)("ul",{className:d,children:[(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"".concat(u," ").concat("Body parts"===t?m:""," "),onClick:function(){return r("Body parts")},children:"Body parts"})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"".concat(u," ").concat("Muscles"===t?m:""),onClick:function(){return r("Muscles")},children:"Muscles"})}),(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"".concat(u," ").concat("Equipment"===t?m:""),onClick:function(){return r("Equipment")},children:"Equipment"})})]})},f=r(1087),h=r(2686),v=r(9577),b="ExercisesSubcategoriesItem_exercises_item__kdnUA",_="ExercisesSubcategoriesItem_exercises_img__TCder",g="ExercisesSubcategoriesItem_container__2+vs5",N="ExercisesSubcategoriesItem_title__+fpNs",j="ExercisesSubcategoriesItem_text__+Mh5X",E=function(e){var t=e.ExercisesSubcategoriesItem,r=e.onClick,i=e.setActiveFilter,s=t._id,n=t.name,c=t.filter,a=t.imgURL;return(0,x.jsx)("li",{className:b,onClick:function(){i(n),r()},children:(0,x.jsxs)(f.rU,{to:"".concat(h.ZT,"/").concat(s),children:[(0,x.jsx)("img",{src:a,alt:n,className:_}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("h3",{className:N,children:(0,v.Z)(n)}),(0,x.jsx)("p",{className:j,children:c})]})]})})},y=r(4067),Z="Pagination_pagination_list__Txpcr",V="Pagination_pagination_item__1PgFA",W="Pagination_pagination_btn__3j1Li",T="Pagination_active__q3h4d",q=function(e){var t=e.itemsPerPage,r=e.totalItems,i=e.currentPage,s=e.onPageChange,n=Math.ceil(r/t);return(0,x.jsx)("nav",{"aria-label":"Pagination",children:(0,x.jsx)("ul",{className:Z,children:function(){for(var e=[],t=function(t){e.push((0,x.jsx)("li",{className:"".concat(V," ").concat(t===i?T:""),children:(0,x.jsxs)("button",{className:W,onClick:function(){var e;(e=t)>=1&&e<=n&&s(e)},children:[t,t===i&&(0,x.jsx)(y.Z,{iconId:"icon-pagination"})]})},t))},r=1;r<=n;r++)t(r);return e}()})})},S="PaginationContainer_pagination_container__5bKvl",k=function(e){var t=e.children;return(0,x.jsx)("div",{className:S,children:t})},I=function(){var e=(0,c.useState)(10),t=(0,n.Z)(e,2),r=t[0],i=t[1];return(0,c.useEffect)((function(){var e=function(){i(function(){var e=window.innerWidth;return e>=768&&e<=1439?9:10}())};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),r},w=function(e){return e.exercises.exercisesCategory},L=function(e){return e.exercises.totalRecords},A=function(e){return e.exercises.page},K=function(e){return e.exercises.itemsCategory},F=function(e){return e.exercises.isLoading},U=function(e){return e.exercises.error},C=function(){return{exercisesCategory:(0,l.v9)(w),exercisesItemsCategory:(0,l.v9)(K),exercisesTotalRecords:(0,l.v9)(L),exercisesPage:(0,l.v9)(A),exercisesIsLoading:(0,l.v9)(F),exercisesError:(0,l.v9)(U)}},R=r(365),O="ExercisesSubcategoriesList_exercises_list__VBpsO",P=function(e){var t=e.filter,r=e.handleFilterClick,i=e.currentPage,s=e.setCurrentPage,n=e.setActiveFilter,c=C(),o=c.exercisesCategory,d=c.exercisesTotalRecords,u=(0,l.I0)(),m=(0,a.s0)(),p=I();return(0,x.jsxs)(k,{children:[(0,x.jsx)("ul",{className:O,children:o.map((function(e){return(0,x.jsx)(E,{ExercisesSubcategoriesItem:e,handleFilterClick:r,onClick:function(){return t=e._id,u((0,R.y)({id:t,page:1,limit:100})),void m("".concat(h.ZT,"/").concat(t));var t},setActiveFilter:n},e._id)}))}),p<d&&(0,x.jsx)(q,{itemsPerPage:p,totalItems:d,currentPage:i,onPageChange:function(e){s(e),u((0,R.B)({type:t,page:e,limit:p}))}})]})},X=r(7312),G=r(844),Y="undefined"==typeof window?c.useEffect:c.useLayoutEffect,z=function(e,t){return 0===e||e===t?0:"number"==typeof t?e-t:0},D=function(e){return{position:"relative",width:e,height:e}},J={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},H=function(e,t,r,i,s){return 0===i?t:t+r*((s?i-e:e)/i)},M=function(e){var t,r;return null!=(r=null==(t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,i){return"#".concat(t).concat(t).concat(r).concat(r).concat(i).concat(i)})).substring(1).match(/.{2}/g))?void 0:t.map((function(e){return parseInt(e,16)})))?r:[]},B=function(e,t){var r,i=e.colors,s=e.colorsTime,n=e.isSmoothColorTransition,c=void 0===n||n;if("string"==typeof i)return i;var a=null!=(r=null==s?void 0:s.findIndex((function(e,r){return e>=t&&t>=s[r+1]})))?r:-1;if(!s||-1===a)return i[0];if(!c)return i[a];var l=s[a]-t,o=s[a]-s[a+1],d=M(i[a]),u=M(i[a+1]),m=!!e.isGrowing;return"rgb(".concat(d.map((function(e,t){return 0|H(l,e,u[t]-e,o,m)})).join(","),")")},Q=function(e){var t=e.duration,r=e.initialRemainingTime,i=e.updateInterval,s=e.size,a=void 0===s?180:s,l=e.strokeWidth,o=void 0===l?12:l,d=e.trailStrokeWidth,u=e.isPlaying,m=void 0!==u&&u,x=e.isGrowing,p=void 0!==x&&x,f=e.rotation,h=void 0===f?"clockwise":f,v=e.onComplete,b=e.onUpdate,_=(0,c.useRef)(),g=function(e,t,r){var i=e/2,s=t/2,n=i-s,c=2*n,a="clockwise"===r?"1,0":"0,1",l=2*Math.PI*n;return{path:"m ".concat(i,",").concat(s," a ").concat(n,",").concat(n," 0 ").concat(a," 0,").concat(c," a ").concat(n,",").concat(n," 0 ").concat(a," 0,-").concat(c),pathLength:l}}(a,Math.max(o,null!=d?d:0),h),N=g.path,j=g.pathLength,E=function(e){var t=e.isPlaying,r=e.duration,i=e.startAt,s=void 0===i?0:i,a=e.updateInterval,l=void 0===a?0:a,o=e.onComplete,d=e.onUpdate,u=(0,c.useState)(s),m=(0,n.Z)(u,2),x=m[0],p=m[1],f=(0,c.useRef)(0),h=(0,c.useRef)(s),v=(0,c.useRef)(-1e3*s),b=(0,c.useRef)(null),_=(0,c.useRef)(null),g=(0,c.useRef)(null),N=function e(t){var i=t/1e3;if(null===_.current)return _.current=i,void(b.current=requestAnimationFrame(e));var s=i-_.current,n=f.current+s;_.current=i,f.current=n;var c=h.current+(0===l?n:(n/l|0)*l),a=h.current+n,o="number"==typeof r&&a>=r;p(o?r:c),o||(b.current=requestAnimationFrame(e))},j=function(){b.current&&cancelAnimationFrame(b.current),g.current&&clearTimeout(g.current),_.current=null},E=(0,c.useCallback)((function(e){j(),f.current=0;var r="number"==typeof e?e:s;h.current=r,p(r),t&&(b.current=requestAnimationFrame(N))}),[t,s]);return Y((function(){if(null==d||d(x),r&&x>=r){v.current+=1e3*r;var e=(null==o?void 0:o(v.current/1e3))||{},t=e.shouldRepeat,i=void 0!==t&&t,s=e.delay,n=void 0===s?0:s,c=e.newStartAt;i&&(g.current=setTimeout((function(){return E(c)}),1e3*n))}}),[x,r]),Y((function(){return t&&(b.current=requestAnimationFrame(N)),j}),[t,r,l]),{elapsedTime:x,reset:E}}({isPlaying:m,duration:t,startAt:z(t,r),updateInterval:i,onUpdate:"function"==typeof b?function(e){var r=Math.ceil(t-e);r!==_.current&&(_.current=r,b(r))}:void 0,onComplete:"function"==typeof v?function(e){var r,i=null!=(r=v(e))?r:{},s=i.shouldRepeat,n=i.delay,c=i.newInitialRemainingTime;if(s)return{shouldRepeat:s,delay:n,newStartAt:z(t,c)}}:void 0}),y=E.elapsedTime,Z=t-y;return{elapsedTime:y,path:N,pathLength:j,remainingTime:Math.ceil(Z),rotation:h,size:a,stroke:B(e,Z),strokeDashoffset:H(y,0,j,t,p),strokeWidth:o}},$=function(e){var t=e.children,r=e.strokeLinecap,i=e.trailColor,s=e.trailStrokeWidth,n=Q(e),a=n.path,l=n.pathLength,o=n.stroke,d=n.strokeDashoffset,u=n.remainingTime,m=n.elapsedTime,x=n.size,p=n.strokeWidth;return c.createElement("div",{style:D(x)},c.createElement("svg",{viewBox:"0 0 ".concat(x," ").concat(x),width:x,height:x,xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:a,fill:"none",stroke:null!=i?i:"#d9d9d9",strokeWidth:null!=s?s:p}),c.createElement("path",{d:a,fill:"none",stroke:o,strokeLinecap:null!=r?r:"round",strokeWidth:p,strokeDasharray:l,strokeDashoffset:d})),"function"==typeof t&&c.createElement("div",{style:J},t({remainingTime:u,elapsedTime:m,color:o})))};$.displayName="CountdownCircleTimer";var ee=function(e){var t=Math.floor(e/60),r=e%60,i=t<10?"0".concat(t):t,s=r<10?"0".concat(r):r;return"".concat(i,":").concat(s)},te="Timer_btn_wrapper__cvPFk",re="Timer_btn_timer__FzDQG",ie="Timer_icon_timer__ZbpBA",se="Timer_text__DT6oC",ne="Timer_calories__F7xVm",ce=function(e){var t=e.time,r=e.burnedCalories,i=e.dynamicCalories,s=e.setDynamicCalories,a=e.exerciseTime,l=e.setExerciseTime,o=(0,c.useState)(0),d=(0,n.Z)(o,2),u=d[0],m=d[1],p=(0,c.useState)(!1),f=(0,n.Z)(p,2),h=f[0],v=f[1],b=(0,c.useState)(""),_=(0,n.Z)(b,2),g=_[0],N=_[1];return(0,c.useEffect)((function(){if(h){var e=setInterval((function(){N((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[h]),(0,x.jsxs)("div",{children:[(0,x.jsx)($,{size:124,isPlaying:h,duration:60*t,colors:"#e6533c",strokeWidth:4,trailColor:" rgba(239, 237, 232, 0.3)",initialRemainingTime:60*t+g,onUpdate:function(e){!function(e){var i=e.remainingTime,n=60*Number(t),c=Number(n-i);l(c);var o=Math.floor(a*r/n);s(o)}({remainingTime:e})},children:function(e){var t=e.remainingTime;return(0,x.jsx)("div",{children:ee(t)})}},u),(0,x.jsxs)("div",{className:te,children:[(0,x.jsx)("button",{className:re,onClick:function(){v((function(e){return!e})),m((function(e){return e+1}))},children:(0,x.jsx)(y.Z,{iconId:h?"Pause":"Polygon",className:ie})}),(0,x.jsxs)("p",{className:se,children:["Burned calories:",(0,x.jsx)("span",{className:ne,children:i})]})]})]})},ae=r(838),le={container:"AddExercises_container__u9bmN",wrapper:"AddExercises_wrapper__zfqrx",img_wrapper:"AddExercises_img_wrapper__775Mc",img_gif:"AddExercises_img_gif__YICQW",time:"AddExercises_time__l6QuA",timer_wrapper:"AddExercises_timer_wrapper__+OIIv",info_wrapper:"AddExercises_info_wrapper__Ia6LV",info_list:"AddExercises_info_list__ufcUy",info_item:"AddExercises_info_item__fdZ9P",info_text:"AddExercises_info_text__JIusr",info_title:"AddExercises_info_title__qk2xJ",btn_add:"AddExercises_btn_add__1E24m"},oe=function(e){var t=e.exercise,r=e.handleModalExercise,i=e.handleModalSuccess,s=e.handleSelectedExercise,a=(0,c.useState)(""),l=(0,n.Z)(a,2),o=l[0],d=l[1],u=(0,c.useState)(0),m=(0,n.Z)(u,2),p=m[0],f=m[1],h=(0,ae.Z)(new Date);return(0,x.jsx)("div",{className:le.container,children:(0,x.jsxs)("div",{className:le.wrapper,children:[(0,x.jsxs)("div",{className:le.left_side,children:[(0,x.jsx)("div",{className:le.img_wrapper,children:(0,x.jsx)("img",{src:t.gifUrl,alt:"Exercise example",className:le.img_gif})}),(0,x.jsx)("p",{className:le.time,children:"Time"}),(0,x.jsx)("div",{className:le.timer_wrapper,children:(0,x.jsx)(ce,{time:t.time,burnedCalories:t.burnedCalories,dynamicCalories:o,setDynamicCalories:d,exerciseTime:p,setExerciseTime:f})})]}),(0,x.jsxs)("div",{className:le.info_wrapper,children:[(0,x.jsxs)("ul",{className:le.info_list,children:[(0,x.jsxs)("li",{className:le.info_item,children:[(0,x.jsx)("p",{className:le.info_text,children:"Name:"}),(0,x.jsx)("strong",{className:le.info_title,children:(0,v.Z)(t.name)})]}),(0,x.jsxs)("li",{className:le.info_item,children:[(0,x.jsx)("p",{className:le.info_text,children:"Body part:"}),(0,x.jsx)("strong",{className:le.info_title,children:(0,v.Z)(t.bodyPart)})]}),(0,x.jsxs)("li",{className:le.info_item,children:[(0,x.jsx)("p",{className:le.info_text,children:"Target:"}),(0,x.jsx)("strong",{className:le.info_title,children:(0,v.Z)(t.target)})]}),(0,x.jsxs)("li",{className:le.info_item,children:[(0,x.jsx)("p",{className:le.info_text,children:"Equipment:"}),(0,x.jsx)("strong",{className:le.info_title,children:(0,v.Z)(t.equipment)})]})]}),(0,x.jsx)(G.Z,{text:"Add to diary",type:"submit",className:le.btn_add,onClick:function(){var e={date:h,exercise:t._id,time:p,calories:o};r(),i(),s(e)}})]})]})})},de="AddExercisesSuccess_container__LIRXL",ue="AddExercisesSuccess_wrapper__Fn8K9",me="AddExercisesSuccess_img_wrapper__+wUdF",xe="AddExercisesSuccess_img__B1mq7",pe="AddExercisesSuccess_title__xd1+9",fe="AddExercisesSuccess_text__LK5B8",he="AddExercisesSuccess_span__omE7g",ve="AddExercisesSuccess_btn_next__awS84",be="AddExercisesSuccess_icon_right__PXvVB",_e="AddExercisesSuccess_link_wrapper__mabzF",ge=function(e){var t=e.handleModalSuccess,r=e.selectedExercise;return(0,x.jsx)("div",{className:de,children:(0,x.jsxs)("div",{className:ue,children:[(0,x.jsxs)("div",{className:me,children:[(0,x.jsx)("img",{src:"data:image/png;base64,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",alt:"Like",className:xe}),(0,x.jsx)("p",{className:pe,children:"Well done"}),(0,x.jsxs)("p",{className:fe,children:["Your time:",(0,x.jsx)("span",{className:he,children:r.time})]}),(0,x.jsxs)("p",{className:fe,children:["Burned calories:",(0,x.jsx)("span",{className:he,children:r.calories})]})]}),(0,x.jsx)(G.Z,{text:"Next exercise",type:"button",className:ve,onClick:t}),(0,x.jsx)(f.rU,{to:h.zw,onClick:t,children:(0,x.jsx)("div",{className:_e,children:(0,x.jsxs)("p",{className:fe,children:["To the diary",(0,x.jsx)(y.Z,{iconId:"icon-arrow-right",className:be})]})})})]})})},Ne=r(437),je=function(e){var t=e.exercise,r=(0,c.useState)(!1),i=(0,n.Z)(r,2),s=i[0],a=i[1],l=(0,c.useState)(!1),o=(0,n.Z)(l,2),d=o[0],u=o[1],m=(0,c.useState)(""),p=(0,n.Z)(m,2),f=p[0],h=p[1],v=function(){return u(!d)},b=function(){return a(!s)};return(0,x.jsxs)("div",{className:Ne.Z.exercisesItem_wrapper,children:[(0,x.jsxs)("div",{className:Ne.Z.exercisesItem_topWrapper,children:[(0,x.jsx)("p",{className:Ne.Z.exercisesItem_text,children:"workout"}),(0,x.jsxs)("button",{className:Ne.Z.exercisesItem_btnStart,onClick:function(){v()},children:["Start",(0,x.jsx)(y.Z,{iconId:"icon-arrow-right",className:Ne.Z.exercisesItem_iconArrowRight})]})]}),(0,x.jsxs)("div",{className:Ne.Z.exercisesItem_nameWrapper,children:[(0,x.jsx)(y.Z,{iconId:"icon-run",className:Ne.Z.exercisesItem_iconRun}),(0,x.jsx)("h3",{className:Ne.Z.exercisesItem_title,children:t.name})]}),(0,x.jsxs)("ul",{className:Ne.Z.exercisesItem_bottomList,children:[(0,x.jsxs)("li",{className:Ne.Z.exercisesItem_item,children:["Burned calories:",(0,x.jsx)("span",{className:Ne.Z.exercisesItem_itemText,children:t.burnedCalories})]}),(0,x.jsxs)("li",{className:Ne.Z.exercisesItem_item,children:["Body pat:",(0,x.jsx)("span",{className:Ne.Z.exercisesItem_itemText,children:t.bodyPart})]}),(0,x.jsxs)("li",{className:Ne.Z.exercisesItem_item,children:["Target:",(0,x.jsx)("span",{className:Ne.Z.exercisesItem_itemText,children:t.target})]})]}),d&&(0,x.jsx)(X.Z,{handleModalToggle:v,children:(0,x.jsx)(oe,{exercise:t,handleModalExercise:v,handleModalSuccess:b,handleSelectedExercise:function(e){h(e)}})}),s&&(0,x.jsx)(X.Z,{handleModalToggle:b,children:(0,x.jsx)(ge,{handleModalSuccess:b,selectedExercise:f})})]})},Ee=r.p+"static/media/exercise-list-bg.72abca79e2245951c40d.jpg",ye=r(2182),Ze=function(e){var t=e.activeFilter,r=e.filter,i=C().exercisesItemsCategory.filter((function(e){return e.bodyPart===t||e.equipment===t||e.target===t||e.name===t}));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:ye.Z.list,children:[(0,x.jsx)("div",{className:ye.Z.exercise_container,children:i.map((function(e){return(0,x.jsx)(je,{exercise:e,filter:r},e._id)}))}),(0,x.jsx)("img",{src:Ee,alt:"imag",className:ye.Z.img_bg})]})})},Ve="Exercises_wrapper__SE1Pu",We="Exercises_title__SMJv+",Te=function(){var e=(0,a.TH)(),t=(0,a.s0)(),r=(0,l.I0)(),i=(0,c.useState)("Body parts"),s=(0,n.Z)(i,2),d=s[0],u=s[1],m=(0,c.useState)(1),f=(0,n.Z)(m,2),v=f[0],b=f[1],_=(0,c.useState)(e.pathname),g=(0,n.Z)(_,2),N=g[0],j=g[1],E=I();(0,c.useEffect)((function(){r((0,R.B)({type:d,page:v,limit:E}))}),[r,d,v,E]);return(0,c.useEffect)((function(){j(e.pathname)}),[e.pathname]),(0,c.useEffect)((function(){b(1)}),[d]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:Ve,children:[(0,x.jsx)(o.Z,{text:N===h.ZT?"Exercises":d,className:We}),(0,x.jsx)(p,{activeFilter:d,handleFilterClick:function(e){u(e),b(1),t(h.ZT)}})]}),N===h.ZT?(0,x.jsx)(P,{filter:d,handleFilterClick:function(e){u(e),b(1),t(h.ZT)},setActiveFilter:u,currentPage:v,setCurrentPage:b}):(0,x.jsx)(Ze,{activeFilter:d,filter:d})]})},qe=function(){return(0,x.jsx)(i.Z,{children:(0,x.jsx)(s.Z,{children:(0,x.jsx)(Te,{})})})}},9577:function(e,t){t.Z=function(e){return e.slice(0,1).toUpperCase()+e.slice(1)}},838:function(e,t){t.Z=function(e){var t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),i=e.getFullYear();return"".concat(i,"-").concat(r,"-").concat(t)}},437:function(e,t){t.Z={exercisesItem_wrapper:"ExercisesItem_exercisesItem_wrapper__9tI51",exercisesItem_topWrapper:"ExercisesItem_exercisesItem_topWrapper__bQS1A",exercisesItem_text:"ExercisesItem_exercisesItem_text__MRQIi",exercisesItem_btnStart:"ExercisesItem_exercisesItem_btnStart__SvGPV",exercisesItem_iconArrowRight:"ExercisesItem_exercisesItem_iconArrowRight__pcf0G",exercisesItem_nameWrapper:"ExercisesItem_exercisesItem_nameWrapper__A6gsI",exercisesItem_iconRun:"ExercisesItem_exercisesItem_iconRun__as+U3",exercisesItem_title:"ExercisesItem_exercisesItem_title__zov1a",exercisesItem_bottomList:"ExercisesItem_exercisesItem_bottomList__eYrW1",exercisesItem_item:"ExercisesItem_exercisesItem_item__tyTTn",exercisesItem_itemText:"ExercisesItem_exercisesItem_itemText__uAydW",productRecommended:"ExercisesItem_productRecommended__COHlQ",productRecommendedTrue:"ExercisesItem_productRecommendedTrue__XMKfw",productRecommendedFalse:"ExercisesItem_productRecommendedFalse__-wl2E"}},2182:function(e,t){t.Z={exercise_container:"ExerciseList_exercise_container__8E+XZ",img_bg:"ExerciseList_img_bg__zqTJy",img_bgProducts:"ExerciseList_img_bgProducts__52HZk"}}}]);
//# sourceMappingURL=219.dc52a870.chunk.js.map