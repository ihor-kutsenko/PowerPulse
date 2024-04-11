"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[816],{844:function(e,s,a){var r=a(184);s.Z=function(e){var s=e.text,a=e.className,c=e.disabled,i=e.type,n=e.onClick;return(0,r.jsx)("button",{className:a,disabled:c,type:i,onClick:n,children:s})}},5420:function(e,s,a){a.d(s,{Z:function(){return i}});var r="Title_title__IlEm8",c=a(184),i=function(e){var s=e.text,a=e.className,i="".concat(r," ").concat(a||"");return(0,c.jsx)("h2",{className:i,children:s})}},7816:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var r=a(1087),c=a(3409),i=a(7098),n=a(5679),o=a(9439),t=a(5705),m=a(2791),l=a(4067),d=a(844),p=a(7670),u=p.Ry().shape({name:p.Z_().min(2,"Too Short! Must be minimum 2 symbols").max(32,"Too Long! 32symbols - is maximum.").required("Name is required!"),email:p.Z_().email("Invalid email format. Here is a valid email: example@gmail.com").required("Email is required!"),password:p.Z_().min(6,"Must contain minimum 6 symbols!").max(32,"Too Long! 32 symbols - is maximum.").required("Password is required!")}),g=a(987),_=a(184),Z=function(){var e=(0,m.useState)(!1),s=(0,o.Z)(e,2),a=s[0],r=s[1];return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(t.J9,{initialValues:{name:"",email:"",password:""},validationSchema:u,onSubmit:function(e,s){e.name,e.email,e.password;(0,s.resetForm)()},children:function(e){return(0,_.jsxs)(t.l0,{className:g.Z.form,children:[(0,_.jsxs)("div",{className:g.Z.formWrapper,children:[(0,_.jsxs)("div",{className:"".concat(g.Z.fieldWrapper," ").concat(e.touched.name&&e.errors.name?"".concat(g.Z.error):e.touched.name&&!e.errors.name?"".concat(g.Z.success):""),children:[(0,_.jsx)(t.gN,{className:g.Z.field,type:"name",name:"name",placeholder:"Name"}),(0,_.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,_.jsx)(l.Z,{"data-status":"error",className:g.Z.svgError,iconId:"icon-error"}),(0,_.jsx)(t.Bc,{className:g.Z.errorMessage,name:"name",component:"div"})]}),e.touched.name&&!e.errors.name&&(0,_.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,_.jsx)(l.Z,{"data-status":"success",className:g.Z.svgSuccess,iconId:"icon-success"}),(0,_.jsx)("div",{className:g.Z.successMessage,children:"Success name"})]})]}),(0,_.jsxs)("div",{className:"".concat(g.Z.fieldWrapper," ").concat(e.touched.email&&e.errors.email?"".concat(g.Z.error):e.touched.email&&!e.errors.email?"".concat(g.Z.success):""),children:[(0,_.jsx)(t.gN,{className:g.Z.field,type:"email",name:"email",placeholder:"Email"}),(0,_.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,_.jsx)(l.Z,{"data-status":"error",className:g.Z.svgError,iconId:"icon-error"}),(0,_.jsx)(t.Bc,{className:g.Z.errorMessage,name:"email",component:"div"})]}),e.touched.email&&!e.errors.email&&(0,_.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,_.jsx)(l.Z,{"data-status":"success",className:g.Z.svgSuccess,iconId:"icon-success"}),(0,_.jsx)("div",{className:g.Z.successMessage,children:"Success email"})]})]}),(0,_.jsxs)("div",{className:"".concat(g.Z.fieldWrapper," ").concat(e.touched.password&&e.errors.password?"".concat(g.Z.error):e.touched.password&&!e.errors.password?"".concat(g.Z.success):""),children:[(0,_.jsx)(t.gN,{className:g.Z.field,type:a?"text":"password",name:"password",placeholder:"Password"}),(0,_.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,_.jsx)(l.Z,{"data-status":"error",className:g.Z.svgError,iconId:"icon-error"}),(0,_.jsx)(t.Bc,{className:g.Z.errorMessage,name:"password",component:"div"})]}),e.touched.password&&!e.errors.password&&(0,_.jsxs)("div",{className:g.Z.messageWrapper,children:[(0,_.jsx)(l.Z,{"data-status":"success",className:g.Z.svgSuccess,iconId:"icon-success"}),(0,_.jsx)("div",{className:g.Z.successMessage,children:"Success password"})]}),(0,_.jsx)("button",{className:g.Z.buttonEye,type:"button",onClick:function(){return r(!a)},children:a?(0,_.jsx)(l.Z,{className:g.Z.svgEye,iconId:"icon-eye"}):(0,_.jsx)(l.Z,{className:g.Z.svgEye,iconId:"icon-eye-off"})})]})]}),(0,_.jsx)(d.Z,{type:"submit",text:"Sign Up",className:g.Z.button})]})}})})},x=a(5420),h=a(2686),j=a(7122),N=a(2280),v=function(){return(0,_.jsx)(c.Z,{children:(0,_.jsxs)(i.Z,{children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:N.Z.wrapperTitle,children:[(0,_.jsx)(x.Z,{text:"Sign Up",className:N.Z.title}),(0,_.jsx)("p",{className:N.Z.text,children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."})]}),(0,_.jsx)(Z,{}),(0,_.jsxs)("div",{className:N.Z.textWrapper,children:[(0,_.jsx)("p",{className:N.Z.textHint,children:"Already have account? "}),(0,_.jsx)(r.rU,{className:N.Z.textLink,to:h.vf,children:"Sign In"})]})]}),(0,_.jsx)(n.Z,{className:j.Z.auth,children:(0,_.jsx)("div",{})})]})})}},987:function(e,s){s.Z={form:"SignUpForm_form__CGOfo",formWrapper:"SignUpForm_formWrapper__IUMSk",fieldWrapper:"SignUpForm_fieldWrapper__GDU0i",error:"SignUpForm_error__YZ0dN",success:"SignUpForm_success__fasOJ",svgError:"SignUpForm_svgError__luZjn",field:"SignUpForm_field__JbRwK",messageWrapper:"SignUpForm_messageWrapper__Xb+yB",svgSuccess:"SignUpForm_svgSuccess__HWjAm",errorMessage:"SignUpForm_errorMessage__-LhBb",successMessage:"SignUpForm_successMessage__6py5I",buttonEye:"SignUpForm_buttonEye__r-Qpc",svgEye:"SignUpForm_svgEye__NaKlJ",button:"SignUpForm_button__Zna-C"}},2280:function(e,s){s.Z={wrapperTitle:"SignUpPage_wrapperTitle__yH+iR",title:"SignUpPage_title__jeE8g",text:"SignUpPage_text__hZwhQ",textWrapper:"SignUpPage_textWrapper__N1Qto",textHint:"SignUpPage_textHint__rH3Zo",textLink:"SignUpPage_textLink__wBuPq"}}}]);
//# sourceMappingURL=816.9176b0fb.chunk.js.map