"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[118],{6717:function(s,t,a){a.d(t,{Z:function(){return c}});var e="Section_section__0XkUm",i=a(184),c=function(s){var t=s.children;return(0,i.jsx)("div",{className:e,children:t})}},6696:function(s,t,a){a.d(t,{Z:function(){return r}});var e=a(4067),i={statistics__wrapper:"StatisticsCard_statistics__wrapper__+UJLB",statistics__titleWrapper:"StatisticsCard_statistics__titleWrapper__jsud-",statistics__icon:"StatisticsCard_statistics__icon__bNpXs",statistics__title:"StatisticsCard_statistics__title__gSTpp",statistics____value:"StatisticsCard_statistics____value__uNSIA",statisticsPrimaryItem:"StatisticsCard_statisticsPrimaryItem__rsYFp",statisticsPrimaryTitle:"StatisticsCard_statisticsPrimaryTitle__mWDRn",statisticItemPositive:"StatisticsCard_statisticItemPositive__oufnX",statisticItemNegative:"StatisticsCard_statisticItemNegative__OkLEy"},c=a(184),r=function(s){var t=s.statisticsName,a=s.statisticsIcon,r=s.statisticsValue,l=s.statisticsPrimary,n=s.fulfilledNorm,o=void 0===n?"":n,d=[i.statistics__wrapper,l&&i.statisticsPrimaryItem];return"positive"===o?d.push(i.statisticItemPositive):"negative"===o&&d.push(i.statisticItemNegative),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:d.join(" "),children:[(0,c.jsxs)("div",{className:i.statistics__titleWrapper,children:[(0,c.jsx)(e.Z,{className:i.statistics__icon,iconId:a}),(0,c.jsx)("p",{className:"".concat(i.statistics__title," ").concat(l&&i.statisticsPrimaryTitle),children:t})]}),(0,c.jsx)("div",{className:i.statistics__value,children:r})]})})}},5420:function(s,t,a){a.d(t,{Z:function(){return c}});var e="Title_title__IlEm8",i=a(184),c=function(s){var t=s.text,a=s.className,c="".concat(e," ").concat(a||"");return(0,i.jsx)("h2",{className:c,children:t})}},6118:function(s,t,a){a.r(t),a.d(t,{default:function(){return G}});var e=a(3409),i=a(6717),c=a(5420),r=a(6696),l=a(4067),n="DayDashboard_dashboard_wrapper__6W+IM",o="DayDashboard_dashboard_list__ZUAVD",d="DayDashboard_warning_wrapper__F0eky",_="DayDashboard_warning_icon__cgqqJ",m="DayDashboard_warning_text__ByUKG",u=a(184),h=function(){var s=2200,t=2300,a="positive";return(0,u.jsxs)("div",{className:n,children:[(0,u.jsxs)("ul",{className:o,children:[(0,u.jsx)(r.Z,{statisticsName:"Daily calorie intake",statisticsIcon:"icon-fluent-food",statisticsValue:"".concat(s),statisticsPrimary:!0}),(0,u.jsx)(r.Z,{statisticsName:"Daily physical activity",statisticsIcon:"icon-dumbbell",statisticsValue:"".concat(110," min"),statisticsPrimary:!0}),(0,u.jsx)(r.Z,{statisticsName:"Calories consumed",statisticsIcon:"icon-apple",statisticsValue:"".concat(t)}),(0,u.jsx)(r.Z,{statisticsName:"Calories burned",statisticsIcon:"icon-calories",statisticsValue:"".concat(855)}),(0,u.jsx)(r.Z,{statisticsName:"Calories remaining",statisticsIcon:"icon-bubble",statisticsValue:"".concat(-100),fulfilledNorm:"negative"}),(0,u.jsx)(r.Z,{statisticsName:"Sports remaining",statisticsIcon:"icon-runner",statisticsValue:"+".concat(30," min"),fulfilledNorm:a})]}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)(l.Z,{iconId:"icon-warning",className:_}),(0,u.jsx)("p",{className:m,children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},N=a(1087),x="AddItemDiaryBtn_add_link__abf-C",p="AddItemDiaryBtn_icon_right__e0L3A",j=function(s){var t=s.titleLink,a=s.titleRoute;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(N.OL,{className:x,to:a,children:[t,(0,u.jsx)(l.Z,{className:p,iconId:"icon-arrow-right"})]})})},f="EmptyList_wrapper__mKeVv",y="EmptyList_text__gT5eN",b=function(s){var t=s.listName;return(0,u.jsx)("div",{className:f,children:(0,u.jsxs)("p",{className:y,children:["Not found ",t]})})},v="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",g=a(9577),w="ProductsTable_list__6Ic6Q",P="ProductsTable_item__4bJoZ",D="ProductsTable_title__6wE9J",I="ProductsTable_element__ocxDE",T="ProductsTable_table__SsleE",C="ProductsTable_table_body__DZju2",Z="ProductsTable_value__eaVm3",k="ProductsTable_title_trash__PG9m7",A="ProductsTable_product_wrapper__t72MC",S="ProductsTable_recommend_wrapper__PJMnn",L="ProductsTable_recommend_yes__E0Tf4",V="ProductsTable_recommend_not__QvAeI",B="ProductsTable_value_trash__TOlpz",E="ProductsTable_icon_trash__2Ce63",J=function(s){var t=s.products;return(0,u.jsx)("ul",{className:w,children:t.map((function(s){s._id;var t=s.title,a=s.category,e=s.calories,i=s.weight,c=s.groupBloodNotAllowed,r=Object.values(c).some((function(s){return!s}));return(0,u.jsx)("li",{className:P,children:(0,u.jsxs)("table",{className:T,children:[(0,u.jsxs)("tbody",{className:C,children:[(0,u.jsxs)("tr",{className:I,children:[(0,u.jsx)("th",{className:D,children:"Title"}),(0,u.jsx)("td",{className:Z,children:(0,g.Z)(t)})]}),(0,u.jsxs)("tr",{className:I,children:[(0,u.jsx)("th",{className:D,children:"Category"}),(0,u.jsx)("td",{className:Z,children:(0,g.Z)(a)})]})]}),(0,u.jsxs)("tbody",{className:A,children:[(0,u.jsxs)("tr",{className:I,children:[(0,u.jsx)("th",{className:D,children:"Calories"}),(0,u.jsx)("td",{className:Z,children:e})]}),(0,u.jsxs)("tr",{className:I,children:[(0,u.jsx)("th",{className:D,children:"Weight"}),(0,u.jsx)("td",{className:Z,children:i})]}),(0,u.jsxs)("tr",{className:I,children:[(0,u.jsx)("th",{className:D,children:"Recommend"}),(0,u.jsx)("td",{className:Z,children:(0,u.jsxs)("div",{className:S,children:[(0,u.jsx)("span",{className:"".concat(r?L:V)}),r?"Yes":"No"]})})]}),(0,u.jsxs)("tr",{className:I,children:[(0,u.jsx)("th",{className:"".concat(D," ").concat(k),children:"Trash"}),(0,u.jsx)("td",{className:B,children:(0,u.jsx)(l.Z,{className:E,iconId:"icon-trash"})})]})]})]})},function(){for(var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",a=crypto.getRandomValues(new Uint8Array(s));s--;)t+=v[63&a[s]];return t}())}))})},R=a(2686),W=JSON.parse('[{"_id":{"$oid":"5d51694902b2373622ff5773"},"weight":100,"calories":340,"category":"dairy","title":"Danbo cheese","groupBloodNotAllowed":{"1":true,"2":true,"3":false,"4":false}},{"_id":{"$oid":"5d51694902b2373622ff5b7f"},"weight":100,"calories":112,"category":"fish","title":"marlin","groupBloodNotAllowed":{"1":true,"2":true,"3":true,"4":true}},{"_id":{"$oid":"5d51694902b2373622ff583d"},"weight":100,"calories":130,"category":"dairy","title":"Cottage cheese Chudo strawberry","groupBloodNotAllowed":{"1":true,"2":true,"3":true,"4":true}},{"_id":{"$oid":"5d51694902b2373622ff5b6f"},"weight":100,"calories":160,"category":"fish","title":"Cold smoked bream","groupBloodNotAllowed":{"1":false,"2":false,"3":false,"4":false}},{"_id":{"$oid":"5d51694902b2373622ff5b8d"},"weight":100,"calories":281,"category":"fish","title":"Pollock in batter","groupBloodNotAllowed":{"1":false,"2":false,"3":false,"4":false}},{"_id":{"$oid":"5d51694902b2373622ff590d"},"weight":100,"calories":232,"category":"meat","title":"Lamb ham","groupBloodNotAllowed":{"1":false,"2":true,"3":false,"4":true}}]'),U="DayProducts_container__kRZ31",F="DayProducts_container_scroll__g4aVJ",O="DayProducts_title_wrapper__pN9XH",$="DayProducts_title__hI+f+",X=function(){return(0,u.jsx)("div",{className:U,children:(0,u.jsxs)("div",{className:F,children:[(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)("h3",{className:$,children:"Products"}),(0,u.jsx)(j,{titleLink:"Add product",titleRoute:R.nn})]}),0===W.length?(0,u.jsx)(b,{listName:"products"}):(0,u.jsx)(J,{products:W})]})})},q=function(){return(0,u.jsx)("div",{className:U,children:(0,u.jsxs)("div",{className:F,children:[(0,u.jsxs)("div",{className:O,children:[(0,u.jsx)("h3",{className:$,children:"Exercises"}),(0,u.jsx)(j,{titleLink:"Add exercise",titleRoute:R.ZT})]}),(0,u.jsx)(b,{listName:"exercises"})]})})},M={wrapper_diary:"Diary_wrapper_diary__Wqsg1",wrapper_calendar:"Diary_wrapper_calendar__xNL4c",calendar:"Diary_calendar__JmY5k",section_diary:"Diary_section_diary__pbrL+"},Y=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:M.wrapper_diary,children:[(0,u.jsxs)("div",{className:M.wrapper_calendar,children:[(0,u.jsx)(c.Z,{text:"Diary",className:M.title}),(0,u.jsx)("div",{className:M.calendar,children:"Calendar"})]}),(0,u.jsxs)("div",{className:M.section_diary,children:[(0,u.jsx)(h,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)(X,{}),(0,u.jsx)(q,{})]})]})]})})},G=function(){return(0,u.jsx)(e.Z,{children:(0,u.jsx)(i.Z,{children:(0,u.jsx)(Y,{})})})}},9577:function(s,t){t.Z=function(s){return s.slice(0,1).toUpperCase()+s.slice(1)}}}]);
//# sourceMappingURL=118.c63ceefd.chunk.js.map