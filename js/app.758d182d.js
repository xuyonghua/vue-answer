(function(t){function e(e){for(var a,r,o=e[0],c=e[1],_=e[2],d=0,p=[];d<o.length;d++)r=o[d],n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,_||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f2dc9309"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise(function(e,a){i=n[t]=[e,a]});e.push(i[2]=a);var s,c=document.getElementsByTagName("head")[0],_=document.createElement("script");_.charset="utf-8",_.timeout=120,o.nc&&_.setAttribute("nonce",o.nc),_.src=r(t),s=function(e){_.onerror=_.onload=null,clearTimeout(d);var i=n[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,i[1](r)}n[t]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:_})},12e4);_.onerror=_.onload=s,c.appendChild(_)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-answer/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],_=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=_;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"26a0":function(t,e,i){},2856:function(t,e,i){},"3a32":function(t,e,i){t.exports=i.p+"img/4-4.8fd8320f.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],r=(i("5c0b"),i("2877")),o={},c=Object(r["a"])(o,n,s,!1,null,null,null);c.options.__file="App.vue";var _=c.exports,d=i("8c4f"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("QuestionItem")],1)},p=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"top-tips"},["home"==t.page?i("span",{staticClass:"num-tip"},[t._v(t._s(t.level))]):i("span",{staticClass:"num-tip"},[t._v("题目"+t._s(t.itemNum))])]),"home"==t.page?i("div",{staticClass:"home-logo"}):t._e(),"question"==t.page?i("div",{staticClass:"question-item"},[i("div",{staticClass:"options"},[i("header",{staticClass:"item-title"},[t._v(t._s(t.itemDetail[t.itemNum-1].topic_name))]),t._l(t.itemDetail[t.itemNum-1].topic_answer,function(e,a){return i("div",{key:e.index,staticClass:"item-option",attrs:{"flex-row":""},on:{click:function(i){t.select(a,e.topic_answer_id)}}},[i("div",{staticClass:"option-check",class:{selected:t.choosedNum==a},attrs:{"flex-center":""}},[t._v("\n                    "+t._s(t.optionType(a))+"\n                ")]),i("div",{staticClass:"option-detail"},[t._v(t._s(e.answer_name))])])})],2)]):t._e(),i("div",["home"==t.page?i("span",{staticClass:"start button-style",on:{click:t.start}}):t._e(),t.itemNum>0?i("span",{staticClass:"next button-style",on:{click:t.next}}):t._e(),t.itemNum==t.itemDetail.length?i("span",{staticClass:"submit button-style",on:{click:t.submit}}):t._e()])])},m=[],v=i("c93e"),w=i("2f62"),f={name:"QuestionItem",data:function(){return{choosedNum:null,answerId:0}},computed:Object(w["c"])(["itemNum","level","itemDetail","page"]),methods:Object(v["a"])({},Object(w["b"])(["addNum","change"]),{optionType:function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}},start:function(){this.addNum(-1),this.change("question")},next:function(){null!=this.choosedNum?(this.choosedNum=null,this.addNum(this.answerId)):alert("您还没有选择答案哦")},submit:function(){null!=this.choosedNum?(this.choosedNum=null,this.addNum(this.answerId),this.$router.push("Score")):alert("您还没有选择答案哦")},select:function(t,e){this.choosedNum=t,this.answerId=e}})},h=f,b=(i("7d38"),Object(r["a"])(h,l,m,!1,null,"62641bf2",null));b.options.__file="QuestionItem.vue";var g=b.exports,C={name:"home",components:{QuestionItem:g}},y=C,N=(i("cccb"),Object(r["a"])(y,u,p,!1,null,null,null));N.options.__file="Home.vue";var O=N.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"score-container"},[a("div",{staticClass:"score"},[t._v(t._s(t.score)+"分！")]),a("div",{staticClass:"score-tips"},[t._v(t._s(t.scoreTips))])]),a("div",{staticClass:"share-button",on:{click:t.showCover}}),t._m(0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"share-cover",on:{click:t.showCover}},[a("img",{attrs:{src:i("6447")}})])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share-code"},[a("header",{staticClass:"share-header"},[t._v("关注葡萄之家，获取答案。")]),a("img",{staticClass:"share-image",attrs:{src:i("3a32")}})])}],x=(i("ac6a"),{name:"Score",data:function(){return{isShow:!1,score:0,scoreTips:"",rightAnswer:[2,7,12,13,18],scoreTipsArr:["你说，是不是把知识都还给小学老师了？","还不错，但还需要继续加油哦！","不要嘚瑟还有进步的空间！","智商离爆表只差一步了！","你也太聪明啦，葡萄之家欢迎你！"]}},computed:Object(w["c"])(["answerIds"]),methods:{showCover:function(){this.isShow=!this.isShow},computedScore:function(){var t=this;this.answerIds.forEach(function(e,i){e===t.rightAnswer[i]&&(t.score+=20)})},getScoreTip:function(){var t=Math.ceil(this.score/20)-1;this.scoreTips=this.scoreTipsArr[t]}},created:function(){console.log("answerIds",this.answerIds),this.computedScore(),this.getScoreTip()}}),E=x,T=(i("8a86"),Object(r["a"])(E,j,S,!1,null,"48f18eee",null));T.options.__file="Score.vue";var A=T.exports;a["a"].use(d["a"]);var I,D=new d["a"]({mode:"history",base:"/vue-answer/",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}},{path:"/score",name:"Score",component:A}]}),k=i("a322");a["a"].use(w["a"]);var M="ADD_ITEM",B="ADD_ANSWER",P="CHANGE_PAGE",$=new w["a"].Store({state:{level:"第一周",page:"home",itemNum:0,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerIds:[]},mutations:(I={},Object(k["a"])(I,M,function(t,e){t.itemNum+=e}),Object(k["a"])(I,B,function(t,e){t.answerIds.push(e)}),Object(k["a"])(I,P,function(t,e){t.page=e}),I),actions:{addNum:function(t,e){var i=t.commit,a=t.state;-1!=e&&i(B,e),a.itemNum<a.itemDetail.length&&i(M,1)},change:function(t,e){var i=t.commit;t.state;i(P,e)}}});a["a"].config.productionTip=!1,new a["a"]({router:D,store:$,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var a=i("2856"),n=i.n(a);n.a},6447:function(t,e,i){t.exports=i.p+"img/5-2.2de14b27.png"},"7d38":function(t,e,i){"use strict";var a=i("a28f"),n=i.n(a);n.a},"8a86":function(t,e,i){"use strict";var a=i("26a0"),n=i.n(a);n.a},"8f59":function(t,e,i){},a28f:function(t,e,i){},cccb:function(t,e,i){"use strict";var a=i("8f59"),n=i.n(a);n.a}});