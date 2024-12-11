(function(){"use strict";var e={223:function(e,t,o){var n=o(5471),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"root"}},[t("div",{staticClass:"todo-container"},[t("div",{staticClass:"todo-wrap"},[t("MyHeader",{attrs:{recieve:e.recieve}}),t("MyList",{attrs:{todos:e.todos,changeTodo:e.changeTodo,deleteTodo:e.deleteTodo}}),t("MyFooter",{attrs:{todos:e.todos,checkAllTodo:e.checkAllTodo,clearDoneTodo:e.clearDoneTodo}})],1)])])},l=[],i=(o(8992),o(4520),o(3949),function(){var e=this,t=e._self._c;return t("div",{staticClass:"todo-header"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},domProps:{value:e.title},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add.apply(null,arguments)},input:function(t){t.target.composing||(e.title=t.target.value)}}})])}),s=[],a=o(1195),d={name:"MyHeader",data(){return{title:""}},props:["recieve"],methods:{add(){if(!this.title.trim())return alert("输入不能为空");const e={id:(0,a.Ak)(),title:this.title,done:!1};this.recieve(e),this.title=""}}},c=d,u=o(1656),h=(0,u.A)(c,i,s,!1,null,"49d1ec74",null),f=h.exports,p=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"todo-main"},e._l(e.todos,(function(o){return t("MyItem",{key:o.id,attrs:{todo:o,changeTodo:e.changeTodo,deleteTodo:e.deleteTodo}})})),1)},v=[],m=function(){var e=this,t=e._self._c;return t("li",[t("label",[t("input",{attrs:{type:"checkbox"},domProps:{checked:e.todo.done},on:{change:function(t){return e.handleCheck(e.todo.id)}}}),t("span",[e._v(e._s(e.todo.title))])]),t("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.handleDelete(e.todo.id)}}},[e._v("删除")])])},y=[],T={name:"MyItem",props:["todo","changeTodo","deleteTodo"],methods:{handleCheck(e){this.changeTodo(e)},handleDelete(e){confirm("请确认是否删除该任务？")&&this.deleteTodo(e)}}},g=T,A=(0,u.A)(g,m,y,!1,null,"3842e8be",null),k=A.exports,b={name:"MyList",components:{MyItem:k},props:["todos","changeTodo","deleteTodo"]},_=b,x=(0,u.A)(_,p,v,!1,null,"57d7f2c9",null),w=x.exports,O=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],staticClass:"todo-footer"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isAll)?e._i(e.isAll,null)>-1:e.isAll},on:{change:function(t){var o=e.isAll,n=t.target,r=!!n.checked;if(Array.isArray(o)){var l=null,i=e._i(o,l);n.checked?i<0&&(e.isAll=o.concat([l])):i>-1&&(e.isAll=o.slice(0,i).concat(o.slice(i+1)))}else e.isAll=r}}})]),t("span",[t("span",[e._v("已完成 "+e._s(e.doneTotal))]),e._v(" / 全部 "+e._s(e.total)+" ")]),t("button",{staticClass:"btn btn-danger",on:{click:e.clearDone}},[e._v("清除已完成任务")])])},C=[],M=(o(8872),{name:"MyFooter",props:["todos","checkAllTodo","clearDoneTodo"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((e,t)=>e+(t.done?1:0)),0)},isAll:{get(){return this.doneTotal===this.total},set(e){this.checkAllTodo(e)}}},methods:{clearDone(){confirm("请确认是否清除所有已完成任务")&&(this.doneTotal?(this.clearDoneTodo(),alert(`✅ 已清除 ${this.doneTotal} 条记录`)):alert("❗️ 当前没有已完成任务"))}}}),D=M,j=(0,u.A)(D,O,C,!1,null,"088dba5e",null),I=j.exports,N={name:"App",components:{MyHeader:f,MyList:w,MyFooter:I},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{recieve(e){this.todos.unshift(e)},changeTodo(e){this.todos.forEach((t=>{t.id===e&&(t.done=!t.done)}))},deleteTodo(e){this.todos=this.todos.filter((t=>t.id!==e))},checkAllTodo(e){this.todos.forEach((t=>{t.done=e}))},clearDoneTodo(){this.todos=this.todos.filter((e=>0==e.done))}},watch:{todos:{deep:!0,handler(e){localStorage.setItem("todos",JSON.stringify(e))}}}},P=N,E=(0,u.A)(P,r,l,!1,null,null,null),F=E.exports;n.Ay.config.productionTip=!1,new n.Ay({render:e=>e(F)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,l){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],l=e[c][2];for(var s=!0,a=0;a<n.length;a++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,r,l]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={57:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,i=n[0],s=n[1],a=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(a)var c=a(o)}for(t&&t(n);d<i.length;d++)l=i[d],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},n=self["webpackChunkvue_mytodo"]=self["webpackChunkvue_mytodo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(223)}));n=o.O(n)})();
//# sourceMappingURL=index.f7e2d9e7.js.map