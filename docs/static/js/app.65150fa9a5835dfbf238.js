webpackJsonp([1],{"1/oy":function(e,t){},"72Bt":function(e,t){},"9M+g":function(e,t){},D4uH:function(e,t,i){"use strict";var n={},s={name:"icon",props:{name:{type:String,validator:function(e){return e?e in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,i=e.height;return Math.max(t,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,i,n){var s="fa-"+(a++).toString(16);return t[n]=s,' id="'+s+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,i,n,s){var a=i||s;return a&&t[a]?"#"+t[a]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,i=0;this.$children.forEach(function(e){t=Math.max(t,e.width),i=Math.max(i,e.height)}),this.childrenWidth=t,this.childrenHeight=i,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(i-e.height)/2})}},register:function(e){for(var t in e){var i=e[t];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),n[t]=i}},icons:n},a=870711;var r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,n){return i("path",e._b({key:"path-"+n},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,n){return i("polygon",e._b({key:"polygon-"+n},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[i("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var o=i("VU/8")(s,r,!1,function(e){i("g2YT")},null,null);t.a=o.exports},Id91:function(e,t){},Jmt5:function(e,t){},Ktsd:function(e,t){},LYq2:function(e,t){},Lug3:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[t("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),this._v(" "),t("b-navbar-brand",{attrs:{href:"#/"}},[this._v("Home")]),this._v(" "),t("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item",{attrs:{href:"#/hello"}},[this._v("Hello")]),this._v(" "),t("b-nav-item",{attrs:{href:"#/profile"}},[this._v("Profile")])],1)],1)],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"app"},s,!1,function(e){i("72Bt")},null,null).exports,r=i("/ocq"),o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("h1",[e._v(e._s(e.msg))]),e._v(" "),i("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),i("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),i("br"),e._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(e){i("Ugm9")},"data-v-694cd902",null).exports;var c=i("Sazm"),l=i.n(c).a.initializeApp({apiKey:"AIzaSyC6tc3IppNH21xgta6KSTAd4hmJT0iZ1L8",authDomain:"recipe-box-162b0.firebaseapp.com",databaseURL:"https://recipe-box-162b0.firebaseio.com",projectId:"recipe-box-162b0",storageBucket:"recipe-box-162b0.appspot.com",messagingSenderId:"423983415012"}),p=l.database(),d={db:p,recipesRef:p.ref("recipes"),firebaseApp:l},u={name:"Recipes",firebase:{recipes:d.recipesRef},data:function(){return{newRecipe:{title:"",ingredients:[],description:""}}},methods:{addRecipe:function(){d.recipesRef.push(this.newRecipe),this.newRecipe.title="",this.newRecipe.ingredients=[],this.newRecipe.description=""},removeBook:function(e){toastr.success("Recipe removed successfully")}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",attrs:{id:"recipes"}},[e._m(0),e._v(" "),i("div",{staticClass:"panel panel-default"},[e._m(1),e._v(" "),i("div",{staticClass:"panel-body"},[i("form",{staticClass:"form-inline",attrs:{id:"form"},on:{submit:function(t){t.preventDefault(),e.addRecipe(t)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"recipeTitle"}},[e._v("Title:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.title,expression:"newRecipe.title"}],staticClass:"form-control",attrs:{type:"text",id:"recipeTitle"},domProps:{value:e.newRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"title",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"recipeDescription"}},[e._v("Description:")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.description,expression:"newRecipe.description"}],staticClass:"form-control",attrs:{rows:"5",cols:"50",id:"recipeDescription"},domProps:{value:e.newRecipe.description},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"description",t.target.value)}}})]),e._v(" "),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Add Recipe"}})])])]),e._v(" "),i("div",{staticClass:"panel panel-default"},[e._m(2),e._v(" "),i("div",{staticClass:"panel-body"},[i("table",{staticClass:"table table-striped"},[e._m(3),e._v(" "),i("tbody",e._l(e.recipes,function(t,n){return i("tr",{key:n},[i("td",[e._v(e._s(t.title))]),e._v(" "),i("td",[e._v(e._s(t.description))]),e._v(" "),i("td",[i("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true"},on:{click:function(i){e.removeRecipe(t)}}})])])}))])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-header"},[t("h1",[this._v("Recipe Box")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title"},[this._v("Add New Recipe")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title"},[this._v("Recipe List")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Title")]),this._v(" "),t("th",[this._v("Description")]),this._v(" "),t("th")])])}]};i("VU/8")(u,v,!1,function(e){i("Lug3")},null,null).exports;var h={name:"RecipeDetail",firebase:{recipes:d.recipesRef},data:function(){return{}},props:["selected"]},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",attrs:{id:"RecipeDetail"}},[i("div",{attrs:{id:"recipeTitle"}},[i("h2",[e._v(e._s(e.selected.title))]),e._v(" "),i("hr")]),e._v(" "),i("div",{staticClass:"container col-xs-6"},[i("h3",[e._v("Ingredients:")]),e._v(" "),i("p",[e._v(" "+e._s(e.selected.ingredients))])]),e._v(" "),i("div",{staticClass:"container col-xs-6"},[i("h3",[e._v("Description:")]),e._v(" "),i("p",[e._v(" "+e._s(e.selected.description))])])])},staticRenderFns:[]};var f=i("VU/8")(h,m,!1,function(e){i("LYq2")},null,null).exports,_=(i("5O9v"),i("D4uH")),g={name:"Recipebox",firebase:{recipes:d.recipesRef},data:function(){return{selected:null}},methods:{showDetail:function(e){this.selected=e}},components:{"recipe-detail":f}},b={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"recipes"}},[i("div",{staticClass:"container",attrs:{id:"recipebox"}},[i("h1",[e._v("Recipe Box")]),e._v(" "),i("div",{staticClass:"container"},[i("table",{staticClass:"table table-fixed"},[e._m(0),e._v(" "),i("tbody",e._l(e.recipes,function(t,n){return i("tr",{key:n},[i("td",{staticClass:"col-xs-3"},[e._v(e._s(t.title))]),e._v(" "),i("td",{staticClass:"col-xs-9"},[i("span",{attrs:{"aria-hidden":"true"},on:{click:function(i){e.showDetail(t)}}},[i("icon",{attrs:{name:"eye"}})],1)])])}))])]),e._v(" "),null!=e.selected?i("div",[i("recipe-detail",{attrs:{selected:e.selected}})],1):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",{staticClass:"col-xs-3"},[this._v("Title")]),this._v(" "),t("th",{staticClass:"col xs-9"},[this._v("View Recipe")])])])}]};var w=i("VU/8")(g,b,!1,function(e){i("X3id")},null,null).exports,y={name:"Recipes",firebase:{recipes:d.recipesRef},data:function(){return{newRecipe:{title:"",ingredients:[],description:""},newIngredient:{item:"",quantity:"",measure:""},addIngredientFlag:!1}},methods:{addRecipe:function(){d.recipesRef.push(this.newRecipe),this.newRecipe.title="",this.newRecipe.ingredients=[],this.newRecipe.description=""},addIngredient:function(){this.addIngredientFlag=!0},cancelIngredient:function(){this.newIngredient.item="",this.newIngredient.measure="",this.newIngredient.quantity="",this.addIngredientFlag=!1},saveIngredient:function(){var e={item:this.newIngredient.item,quantity:this.newIngredient.quantity,measure:this.newIngredient.measure};this.newRecipe.ingredients.push(e),this.newIngredient.item="",this.newIngredient.measure="",this.newIngredient.quantity="",this.addIngredientFlag=!1}}},R={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-recipe"}},[i("div",{staticClass:"container",attrs:{id:"recipes"}},[e._m(0),e._v(" "),i("div",{staticClass:"panel panel-default"},[e._m(1),e._v(" "),i("div",{staticClass:"panel-body"},[i("form",{staticClass:"form-inline",attrs:{id:"form"},on:{submit:function(t){t.preventDefault(),e.addRecipe(t)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"recipeTitle"}},[e._v("Title:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.title,expression:"newRecipe.title"}],staticClass:"form-control",attrs:{type:"text",id:"recipeTitle"},domProps:{value:e.newRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"title",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"recipeDescription"}},[e._v("Description:")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.description,expression:"newRecipe.description"}],staticClass:"form-control",attrs:{rows:"5",cols:"50",id:"recipeDescription"},domProps:{value:e.newRecipe.description},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"description",t.target.value)}}})]),e._v(" "),i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:0==e.newRecipe.title.length||0==e.newRecipe.description.length,value:"Save Recipe"}})]),e._v(" "),i("div",[i("input",{staticClass:"btn btn-primary",attrs:{type:"button",value:"Add Ingredient"},on:{click:e.addIngredient}})]),e._v(" "),i("div",[i("ul",{staticClass:"added-ingredients"},e._l(e.newRecipe.ingredients,function(t,n){return i("li",{key:n},[i("span",[e._v("Item: "+e._s(t.item))]),e._v(" "),i("span",[e._v("Quantity: "+e._s(t.quantity))]),e._v(" "),i("span",[e._v("Measure: "+e._s(t.measure))])])}))]),e._v(" "),e.addIngredientFlag?i("div",[i("form",{staticClass:"form-inline",attrs:{id:"addIngredient"},on:{submit:function(t){t.preventDefault(),e.saveIngredient(t)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"ingredientItem"}},[e._v("Item:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newIngredient.item,expression:"newIngredient.item"}],staticClass:"form-control",attrs:{type:"text",id:"ingredientItem"},domProps:{value:e.newIngredient.item},on:{input:function(t){t.target.composing||e.$set(e.newIngredient,"item",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"ingredinetQuantity"}},[e._v("Quantity:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newIngredient.quantity,expression:"newIngredient.quantity"}],staticClass:"form-control",attrs:{type:"text",id:"ingredientQuantity"},domProps:{value:e.newIngredient.quantity},on:{input:function(t){t.target.composing||e.$set(e.newIngredient,"quantity",t.target.value)}}})]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"ingredientMeasure"}},[e._v("Measure:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newIngredient.measure,expression:"newIngredient.measure"}],staticClass:"form-control",attrs:{type:"text",id:"ingredientMeasure"},domProps:{value:e.newIngredient.measure},on:{input:function(t){t.target.composing||e.$set(e.newIngredient,"measure",t.target.value)}}})]),e._v(" "),i("div",[i("input",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:0==e.newIngredient.item.length||0==e.newIngredient.quantity.length||0==e.newIngredient.measure.length,value:"save"}}),e._v(" "),i("input",{staticClass:"btn btn-primary",attrs:{type:"button",value:"cancel"},on:{click:e.cancelIngredient}})])])]):e._e()])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-header"},[t("h1",[this._v("Recipe Box")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title"},[this._v("Add New Recipe")])])}]};var C=i("VU/8")(y,R,!1,function(e){i("Ktsd")},null,null).exports,x=i("U0v6"),I=i.n(x),k=i("F4Gy"),$=i.n(k),E={name:"FAEye",computed:{icon:function(){return $.a}},components:{FontAwesomeIcon:I.a}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("font-awesome-icon",{attrs:{icon:this.icon}})],1)},staticRenderFns:[]},S=i("VU/8")(E,D,!1,null,null,null).exports,T=i("e6fC");n.a.use(r.a),n.a.use(T.a);var F=new r.a({routes:[{path:"/",name:"Recipebox",component:w},{path:"/new",name:"RecipeEntry",component:C},{path:"/icon",name:"icon",component:S}]}),N=i("1mcD"),q=i.n(N);i("Jmt5"),i("9M+g");n.a.component("icon",_.a),n.a.use(q.a);i("K3J8");n.a.config.productionTip=!1,new n.a({el:"#app",router:F,components:{App:a},template:"<App/>"})},Ugm9:function(e,t){},X3id:function(e,t){},g2YT:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.65150fa9a5835dfbf238.js.map