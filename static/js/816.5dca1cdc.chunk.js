"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[816],{2609:function(e,s,a){var r=a(184);s.Z=function(e){var s=e.text,a=e.className,c=e.disabled,n=e.type;return(0,r.jsx)("button",{className:a,disabled:c,type:n,children:s})}},4067:function(e,s,a){a.d(s,{Z:function(){return n}});a(2791);var r=a.p+"static/media/sprite.1349f0844272f41521ea45d520bec657.svg",c=a(184);var n=function(e){var s=e.className,a=e.iconId,n=e.onClick;return(0,c.jsx)("svg",{className:s,preserveAspectRatio:"none",onClick:n,children:(0,c.jsx)("use",{href:"".concat(r,"#").concat(a)})})}},5420:function(e,s,a){a.d(s,{Z:function(){return n}});var r="Title_title__IlEm8",c=a(184),n=function(e){var s=e.text,a=e.className,n="".concat(r," ").concat(a||"");return(0,c.jsx)("h2",{className:n,children:s})}},7816:function(e,s,a){a.r(s),a.d(s,{default:function(){return N}});var r=a(1087),c=a(3409),n=a(7098),i=a(5679),o=a(9439),t=a(5705),m=a(2791),l=a(4067),d=a(2609),p=a(7670),u=p.Ry().shape({name:p.Z_().min(2,"Too Short! Must be minimum 2 symbols").max(32,"Too Long! 32symbols - is maximum.").required("Name is required!"),email:p.Z_().email("Invalid email format. Here is a valid email: example@gmail.com").required("Email is required!"),password:p.Z_().min(6,"Must contain minimum 6 symbols!").max(32,"Too Long! 32 symbols - is maximum.").required("Password is required!")}),g=a(987),x=a(184),Z=function(){var e=(0,m.useState)(!1),s=(0,o.Z)(e,2),a=s[0],r=s[1];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(t.J9,{initialValues:{name:"",email:"",password:""},validationSchema:u,onSubmit:function(e,s){e.name,e.email,e.password;(0,s.resetForm)()},children:function(e){return(0,x.jsxs)(t.l0,{className:g.Z.form,children:[(0,x.jsxs)("div",{className:g.Z.formWrapper,children:[(0,x.jsxs)("div",{className:"".concat(g.Z.fieldWrapper," ").concat(e.touched.name&&e.errors.name?"".concat(g.Z.error):e.touched.name&&!e.errors.name?"".concat(g.Z.success):""),children:[(0,x.jsx)(t.gN,{className:g.Z.field,type:"name",name:"name",placeholder:"Name"}),(0,x.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,x.jsx)(l.Z,{"data-status":"error",className:g.Z.svgError,iconId:"icon-error"}),(0,x.jsx)(t.Bc,{className:g.Z.errorMessage,name:"name",component:"div"})]}),e.touched.name&&!e.errors.name&&(0,x.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,x.jsx)(l.Z,{"data-status":"success",className:g.Z.svgSuccess,iconId:"icon-success"}),(0,x.jsx)("div",{className:g.Z.successMessage,children:"Success name"})]})]}),(0,x.jsxs)("div",{className:"".concat(g.Z.fieldWrapper," ").concat(e.touched.email&&e.errors.email?"".concat(g.Z.error):e.touched.email&&!e.errors.email?"".concat(g.Z.success):""),children:[(0,x.jsx)(t.gN,{className:g.Z.field,type:"email",name:"email",placeholder:"Email"}),(0,x.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,x.jsx)(l.Z,{"data-status":"error",className:g.Z.svgError,iconId:"icon-error"}),(0,x.jsx)(t.Bc,{className:g.Z.errorMessage,name:"email",component:"div"})]}),e.touched.email&&!e.errors.email&&(0,x.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,x.jsx)(l.Z,{"data-status":"success",className:g.Z.svgSuccess,iconId:"icon-success"}),(0,x.jsx)("div",{className:g.Z.successMessage,children:"Success email"})]})]}),(0,x.jsxs)("div",{className:"".concat(g.Z.fieldWrapper," ").concat(e.touched.password&&e.errors.password?"".concat(g.Z.error):e.touched.password&&!e.errors.password?"".concat(g.Z.success):""),children:[(0,x.jsx)(t.gN,{className:g.Z.field,type:a?"text":"password",name:"password",placeholder:"Password"}),(0,x.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,x.jsx)(l.Z,{"data-status":"error",className:g.Z.svgError,iconId:"icon-error"}),(0,x.jsx)(t.Bc,{className:g.Z.errorMessage,name:"password",component:"div"})]}),e.touched.password&&!e.errors.password&&(0,x.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,x.jsx)(l.Z,{"data-status":"success",className:g.Z.svgSuccess,iconId:"icon-success"}),(0,x.jsx)("div",{className:g.Z.successMessage,children:"Success password"})]}),(0,x.jsx)("button",{className:g.Z.buttonEye,type:"button",onClick:function(){return r(!a)},children:a?(0,x.jsx)(l.Z,{className:g.Z.svgEye,iconId:"icon-eye"}):(0,x.jsx)(l.Z,{className:g.Z.svgEye,iconId:"icon-eye-off"})})]})]}),(0,x.jsx)(d.Z,{type:"submit",text:"Sign In",className:g.Z.button})]})}})})},_=a(5420),h=a(5806),v=a(7122),j=a(2280),N=function(){return(0,x.jsx)(c.Z,{children:(0,x.jsxs)(n.Z,{children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:j.Z.wrapperTitle,children:[(0,x.jsx)(_.Z,{text:"Sign Up",className:j.Z.title}),(0,x.jsx)("p",{className:j.Z.text,children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),(0,x.jsx)(Z,{}),(0,x.jsxs)("div",{className:j.Z.textWrapper,children:[(0,x.jsx)("p",{className:j.Z.textHint,children:"Already have account? "}),(0,x.jsx)(r.rU,{className:j.Z.textLink,to:h.vf,children:"Sign In"})]})]}),(0,x.jsx)(i.Z,{className:v.Z.auth,children:(0,x.jsx)("div",{})})]})})}},987:function(e,s){s.Z={form:"SignUpForm_form__CGOfo",formWrapper:"SignUpForm_formWrapper__IUMSk",fieldWrapper:"SignUpForm_fieldWrapper__GDU0i",error:"SignUpForm_error__YZ0dN",success:"SignUpForm_success__fasOJ",svgError:"SignUpForm_svgError__luZjn",field:"SignUpForm_field__JbRwK",messageWrapper:"SignUpForm_messageWrapper__Xb+yB",svgSuccess:"SignUpForm_svgSuccess__HWjAm",errorMessage:"SignUpForm_errorMessage__-LhBb",successMessage:"SignUpForm_successMessage__6py5I",buttonEye:"SignUpForm_buttonEye__r-Qpc",svgEye:"SignUpForm_svgEye__NaKlJ",button:"SignUpForm_button__Zna-C"}},2280:function(e,s){s.Z={wrapperTitle:"SignUpPage_wrapperTitle__yH+iR",title:"SignUpPage_title__jeE8g",text:"SignUpPage_text__hZwhQ",textWrapper:"SignUpPage_textWrapper__N1Qto",textHint:"SignUpPage_textHint__rH3Zo",textLink:"SignUpPage_textLink__wBuPq"}}}]);
//# sourceMappingURL=816.5dca1cdc.chunk.js.map