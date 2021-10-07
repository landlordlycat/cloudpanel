(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f940af7"],{"324a":function(e,r,o){},"3e05":function(e,r,o){"use strict";var s=o("324a"),t=o.n(s);t.a},9683:function(e,r,o){},afb8:function(e,r,o){"use strict";var s=o("9683"),t=o.n(s);t.a},f667:function(e,r,o){"use strict";o.r(r);var s=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"regForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("注册账号")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username",error:e.errorRegForm.username}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"username",attrs:{placeholder:"登录账号",name:"username",type:"text",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"email",error:e.errorRegForm.email}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"email"}})],1),e._v(" "),o("el-input",{ref:"email",attrs:{placeholder:"注册邮箱",name:"email",type:"text",autocomplete:"on"},model:{value:e.loginForm.email,callback:function(r){e.$set(e.loginForm,"email",r)},expression:"loginForm.email"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password",error:e.errorRegForm.password}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"登录密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{prop:"password2",error:e.errorRegForm.password2}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password2",attrs:{type:e.passwordType,placeholder:"确认密码",name:"password2",autocomplete:"on"},on:{blur:function(r){e.capsTooltip=!1}},nativeOn:{keyup:[function(r){return e.checkCapslock(r)},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit(r)}]},model:{value:e.loginForm.password2,callback:function(r){e.$set(e.loginForm,"password2",r)},expression:"loginForm.password2"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(r){return r.preventDefault(),e.onSubmit(r)}}},[e._v("注册")]),e._v(" "),o("div",{staticStyle:{"font-size":"13px"}},[o("span",{staticStyle:{color:"#ffffff"}},[e._v("已经注册? "),o("router-link",{staticStyle:{color:"#4A9FF9"},attrs:{to:"/login"}},[e._v("返回登录")])],1)])],1)],1)},t=[],a=(o("ac6a"),o("456d"),o("c24f")),n=o("4328"),i=o.n(n),l={name:"Login",data:function(){return{loginForm:{email:"",username:"",password:"",password2:""},loginRules:{username:[{required:!0,message:"登录账号必须填写",trigger:"blur"}],password:[{required:!0,message:"登录密码必须填写",trigger:"blur"}],password2:[{required:!0,message:"确认密码必须填写",trigger:"blur"}],email:[{required:!0,message:"邮件地址必须填写",trigger:"blur"}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,errorRegForm:{},otherQuery:{}}},watch:{$route:{handler:function(e){var r=e.query;r&&(this.redirect=r.redirect,this.otherQuery=this.getOtherQuery(r))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.shiftKey,o=e.key;o&&1===o.length&&(this.capsTooltip=!!(r&&o>="a"&&o<="z"||!r&&o>="A"&&o<="Z")),"CapsLock"===o&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1}).catch(function(){e.loading=!1})})},onSubmit:function(){var e=this;this.errorRegForm={username:"",email:"",password2:"",password:""},this.$refs.regForm.validate(function(r){Object(a["register"])(i.a.stringify(e.loginForm)).then(function(r){e.$notify({title:r.title,message:r.message,type:"success",duration:2e3}),e.showDialog=!1,e.$router.push("/login")}).catch(function(r){if(e.dialogLoading=!1,r.error_data)for(var o in r.error_data){var s=r.error_data[o][0];e.errorRegForm[o]=s}})})},getOtherQuery:function(e){return Object.keys(e).reduce(function(r,o){return"redirect"!==o&&(r[o]=e[o]),r},{})}}},c=l,p=(o("3e05"),o("afb8"),o("2877")),u=Object(p["a"])(c,s,t,!1,null,"5f1ca375",null);r["default"]=u.exports}}]);