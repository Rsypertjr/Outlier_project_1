(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";var _var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),MutableIngdredients=function(_Component){function MutableIngdredients(e){var t;return Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,MutableIngdredients),(t=Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(MutableIngdredients).call(this,e))).handleSubmitIngredient=function(e){e.preventDefault(),t.props.ingredients.push(t.state.ingredient),t.handleResetIngredient()},t.handleIngredientInputChange=function(e){t.setState(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)({},e.target.name,e.target.value))},t.handleResetIngredient=function(){t.setState({ingredients:t.state.ingredients,ingredient:""})},t.state={ingredients:e.ingredients,ingredient:""},t.handleIngredientInputChange=t.handleIngredientInputChange.bind(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(t))),t.handleSubmitIngredient=t.handleSubmitIngredient.bind(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(t))),t.handleClickIndex=t.handleClickIndex.bind(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(t))),t}return Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(MutableIngdredients,_Component),Object(_var_www_React_project1_app_20241008T143330Z_001_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(MutableIngdredients,[{key:"handleClickIndex",value:function handleClickIndex(index,event){eval(this[event.target.name]).bind(this)(index,event)}},{key:"removeIngredient",value:function(e,t){var a=this.props.ingredients;a.splice(e,1),this.setState({ingredients:{ingredients:a},ingredient:""})}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,"List of ingredients"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul",null,this.props.ingredients.map(function(t,a){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li",{key:a},t,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{name:"removeIngredient",type:"button",className:"btn btn-warning",onClick:function(t){return e.handleClickIndex(a,t)}},"x"))})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form",{onSubmit:this.handleSubmitIngredient},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",{type:"text",placeholder:"ingredient",className:"form-control",name:"ingredient",onChange:this.handleIngredientInputChange,value:this.state.ingredient})),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add ingredient")))))}}]),MutableIngdredients}(react__WEBPACK_IMPORTED_MODULE_7__.Component);__webpack_exports__.a=MutableIngdredients},34:function(e,t){},37:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),_=a.n(i),l=a(8),c=a(9),s=a(12),o=a(10),u=a(13),p=(a(42),a(11)),d="ADD_RECIPE",m="DELETE_RECIPE",h="UPDATE_RECIPE",E="FETCH_RECIPES",b="FETCH_RECIPE",f=a(16),g=a.n(f),v="http://localhost:3000/recipes/",O=function(e){return{type:d,payload:{id:e.id,title:e.title,instruction:e.instruction,mealPrepTime:e.mealPrepTime,sourceUrl:e.sourceUrl,ingredients:e.ingredients}}},w=function(e){return function(t){return g.a.put("".concat(v,"/").concat(e.id),e).then(function(e){return t(P(e.data))}).then(t(T())).catch(function(e){throw e})}},P=function(e){return{type:h,payload:e}},T=function(){return function(e){return g.a.get(v).then(function(t){var a;e((a=t.data,{type:E,recipes:a}))}).catch(function(e){throw e})}},C=a(7),I=a(69),R=a(17),M=function(e){var t=e.formErrors;return r.a.createElement("div",{className:"formErrors"},Object.keys(t).map(function(e,a){return t[e].length>0?r.a.createElement("p",{key:a},e," ",t[e]):""}))},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",instruction:"",ingredients:[],mealPrepTime:"",sourceUrl:"",redirect:!1,formErrors:{title:"",mealPrepTime:""}},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(C.a)({},t,n),function(){a.validateField(t,n)}),a.setState(Object(C.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.state.title.trim()&&a.state.instruction.trim()&&(a.props.onAddRecipe(a.state),a.handleReset())},a.handleReset=function(){a.setState({title:"",instruction:"",ingredients:[],mealPrepTime:"",sourceUrl:"",redirect:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.titleValid,r=this.state.mealPrepTimeValid;switch(e){case"title":n=t.length<20&&t.length>0,a.title=n?"":" must be less than 20 characters, cannot be empty";break;case"mealPrepTime":r=t>0,a.mealPrepTime=r?"":" must be bigger than 0"}this.setState({formErrors:a,titleValid:n,mealPrepTimeValid:r},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.titleValid&&this.state.mealPrepTimeValid})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(R.a,{ingredients:this.state.ingredients}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Title",className:"form-control",name:"title",onChange:this.handleInputChange,value:this.state.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{cols:"19",rows:"8",placeholder:"Instruction",className:"form-control",name:"instruction",onChange:this.handleInputChange,value:this.state.instruction})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",placeholder:"Meal preparation time (in minutes)",className:"form-control",name:"mealPrepTime",onChange:this.handleInputChange,value:this.state.mealPrepTime})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"url",placeholder:"Source URL",className:"form-control",name:"sourceUrl",onChange:this.handleInputChange,value:this.state.sourceUrl})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",disabled:!this.state.formValid,className:"btn btn-primary"},"Add Recipe"),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.handleReset},"Reset"))),r.a.createElement("div",{className:"panel panel-default"},r.a.createElement(M,{formErrors:this.state.formErrors})))}}]),t}(r.a.Component),j=Object(p.b)(null,function(e){return{onAddRecipe:function(t){e(function(e){var t=e.title,a=e.instruction,n=e.ingredients,r=e.mealPrepTime,i=e.sourceUrl;return function(e){return g.a.post("".concat(v),{title:t,instruction:a,ingredients:n,mealPrepTime:r,sourceUrl:i}).then(function(t){e(O(t.data))}).catch(function(e){throw e})}}(t))}}})(D),y=a(34),U=a.n(y),k=a(4),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).componentWillReceiveProps=function(e){a.setState({id:e.recipe.id,title:e.recipe.title,instruction:e.recipe.instruction,mealPrepTime:e.recipe.mealPrepTime,sourceUrl:e.recipe.sourceUrl,ingredients:e.recipe.ingredients})},a.componentDidMount=function(){a.props.match.params.id&&a.props.fetchRecipe(a.props.match.params.id)},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(C.a)({},t,n),function(){a.validateField(t,n)}),a.setState(Object(C.a)({},e.target.name,e.target.value))},a.handleReset=function(){a.setState({title:"",instruction:"",mealPrepTime:"",sourceUrl:"",ingredients:[""],redirect:!0})},a.handleSubmit=function(e){e.preventDefault(),a.state.title.trim()&&a.state.instruction.trim()&&(a.props.onUpdateRecipe(a.state),a.handleReset())},a.state={id:0,title:"",instruction:"",mealPrepTime:"",sourceUrl:"",ingredients:[""],formErrors:{title:"",mealPrepTime:""}},a.handleInputChange=a.handleInputChange.bind(Object(k.a)(Object(k.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.titleValid,r=this.state.mealPrepTimeValid;switch(e){case"title":n=t.length<30&&t.length>0,a.title=n?"":" must be less than 30 characters, cannot be empty";break;case"mealPrepTime":r=t>0,a.mealPrepTime=r?"":" must be bigger than 0"}this.setState({formErrors:a,titleValid:n,mealPrepTimeValid:r},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.titleValid&&this.state.mealPrepTimeValid})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(R.a,{ingredients:this.state.ingredients}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Title",className:"form-control",name:"title",onChange:this.handleInputChange,value:this.state.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{cols:"19",rows:"8",placeholder:"Instruction",className:"form-control",name:"instruction",onChange:this.handleInputChange,value:this.state.instruction})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",placeholder:"Meal preparation time (in minutes)",className:"form-control",name:"mealPrepTime",onChange:this.handleInputChange,value:this.state.mealPrepTime})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"url",placeholder:"Source URL",className:"form-control",name:"sourceUrl",onChange:this.handleInputChange,value:this.state.sourceUrl})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",disabled:!this.state.formValid,className:"btn btn-primary"},"Update recipe"),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.handleReset},"Reset"))),r.a.createElement("div",{className:"panel panel-default"},r.a.createElement(M,{formErrors:this.state.formErrors})))}}]),t}(n.Component),W=Object(p.b)(function(e){return{recipe:e.recipes.recipe}},{updateRecipe:w,fetchRecipe:function(e){return function(t){return g.a.get("".concat(v,"/").concat(e)).then(function(e){t({type:b,payload:e.data})}).catch(function(e){throw e})}}})(A),L=Object(p.b)(null,function(e){return{onUpdateRecipe:function(t){e(w(t))}}})(W),B=a(70),K=a(71),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(B.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(K.a,{exact:!0,path:"/",component:U.a}),r.a.createElement(K.a,{path:"/new",component:j}),r.a.createElement(K.a,{path:"/edit/:id",component:L})))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var x=a(14),V=a(35),q=a(36),F=a(22);var z=Object(x.c)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[].concat(Object(F.a)(e),[t.payload]);case m:return e.filter(function(e){return e.id!==t.payload});case E:return t.recipes;case h:return[t.payload].concat(Object(F.a)(e));case b:return Object(q.a)({},e,{recipe:t.payload});default:return e}}}),H=Object(x.d)(z,Object(x.a)(V.a));H.dispatch(T()),_.a.render(r.a.createElement(p.a,{store:H},r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");S?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Z(t,e)})}}()}},[[37,2,1]]]);
//# sourceMappingURL=main.a993b1f2.chunk.js.map