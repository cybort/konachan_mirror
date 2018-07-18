webpackJsonp([0],[,,,,function(t,e,n){"use strict";function i(t){n(17)}var a=n(18),r=n(20),s=n(0),o=i,u=s(a.a,r.a,!1,o,"data-v-4c15fbea",null);e.a=u.exports},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(7),n(11));n(51),i.a.$mount("#app")},function(t,e,n){"use strict";var i=n(8),a=n.n(i);window.Promise=window.Promise||a.a},,,,function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n(2),a=n(12),r=(n.n(a),n(13)),s=n(22),o=n(49);Object(a.sync)(o.a,s.a);var u=new i.a(Object.assign({router:s.a,store:o.a},r.a))},,function(t,e,n){"use strict";function i(t){n(14)}var a=n(16),r=n(21),s=n(0),o=i,u=s(a.a,r.a,!1,o,null,null);e.a=u.exports},function(t,e){},,function(t,e,n){"use strict";var i=n(4);e.a={components:{headerbar:i.a}}},function(t,e){},function(t,e,n){"use strict";var i=n(5),a=n.n(i);e.a={name:"headerbar",props:{query:{type:Array,default:function(){return[]}},rating:{type:String,default:"s"}},data:function(){return{iquery:this.query||[],irating:this.rating||"s",queryStr:a.a.remove(this.iquery,function(t){return/\brating:\w\b/i.test(t)}).join(" "),isErr:!1}},computed:{isSafeMode:function(){return"s"==this.irating}},watch:{queryStr:function(){this.iquery=a.a.without(this.queryStr.split(" "),""),this.queryStr.replace(/\b(unsafe|safe) /i,""),console.log(this.iquery),this.isErr=this.iquery.length>5,this.irating=/\b(rating:[^sS]|unsafe) /i.test(this.queryStr)?"e":/\b(rating:[sS]|safe) /i.test(this.queryStr)?"s":this.irating}},methods:{searchQueryChanged:function(){},submitQuery:function(t){console.log("Enter key fired!"),console.log(t),this.$emit("querySubmission",this.iquery,this.irating)}}}},,function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"url"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.queryStr,expression:"queryStr"}],staticClass:"url-text",class:{err:t.isErr},attrs:{id:"url-text",type:"text",placeholder:"your_tags"},domProps:{value:t.queryStr},on:{keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submitQuery(e)},change:function(e){t.searchQueryChanged()},input:function(e){e.target.composing||(t.queryStr=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"user"})])},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"router-view",attrs:{"keep-alive":""}})],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";var i=n(2),a=n(23),r=n(24),s=n(41),o=n(45);i.a.use(a.a),e.a=new a.a({mode:"hash",routes:[{path:"/",component:r.a,props:function(t){return{startPage:t.query.page?parseInt(t.query.page):1,startTags:t.query.tags?decodeURIComponent(t.query.tags).split("+"):[]}}},{path:"/:id",component:s.a,props:function(t){return{id:parseInt(t.params.id)}}},{path:"/e/:number",component:o.a,props:function(t){return{number:t.params.number}}}]})},,function(t,e,n){"use strict";function i(t){n(25),n(26)}var a=n(27),r=n(40),s=n(0),o=i,u=s(a.a,r.a,!1,o,null,null);e.a=u.exports},function(t,e){},function(t,e){},function(t,e,n){"use strict";var i=n(4),a=n(28),r=n(32),s=n(36);e.a={name:"post",props:{mirrorRoot:String,startPage:{type:Number,default:1},startTags:{type:Array,default:[]},startRatingFlag:{type:String,default:"s"}},components:{Waterfall:a.a,WaterfallSlot:r.a,headerbar:i.a,waterfallImage:s.a},data:function(){return{rating:"s",scrollMargin:1}},computed:{isBusy:function(){return this.$store.state.busyState},reachingEnd:function(){return this.$store.state.reachingEnd},notError:function(){return!this.$store.state.errorState},errorMsg:function(){return this.$store.state.errorMsg},imgsArr:function(){return this.$store.state.imgsArr},page:function(){return this.$store.state.page},tags:{get:function(){return this.$store.state.tags},set:function(t){this.$store.commit("setTags",t)}}},created:function(){},mounted:function(){var t=this;this.imgsArr.length||(this.$route.query.tags&&this.$store.commit("setTags",this.$route.query.tags.split("+")),this.getPosts(),this.startPage&&this.$store.commit("setPage",this.startPage)),window.addEventListener("scroll",this.checkScrollingAndCallUpdate),this.$refs.waterfall.$emit("reflow"),this.$nextTick(function(){t.$store.state.scrollPosition&&(document.documentElement.scrollTop=t.$store.scrollPosition)})},beforeRouteLeave:function(t,e,n){this.$store.commit("setScroll",document.documentElement.scrollTop),window.removeEventListener("scroll",this.checkScrollingAndCallUpdate),this.reachingEnd=!1,n()},watch:{},methods:{querySubmission:function(t,e){this.rating=e,this.tags=t,this.$store.commit("resetPage"),this.getPosts(this.$store.state.page,!0),this.$router.push("/?tags="+this.$store.getters.queryTags)},checkScrollingAndCallUpdate:function(){(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight>=document.body.clientHeight-this.scrollMargin&&!this.isBusy&&!this.reachingEnd&&this.loadNextPage()},loadNextPage:function(){this.isBusy||(this.$store.commit("nextPage"),this.getPosts(this.$store.state.page,!1))},getPosts:function(){var t=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1]);if(this.reachingEnd)return-1;t&&this.$store.commit("resetImageArr"),this.$store.dispatch("getPosts",{refresh:t,rating:this.rating})},calcHeight:function(t){return t.isPageInd?48:t.preview_height+128},updateHeight:function(t,e,n){var i=t[0];this.$store.commit("commitRealHeight",{index:n,height:i}),this.$forceUpdate()}}}},function(t,e,n){"use strict";function i(t){n(29)}var a=n(30),r=n(31),s=n(0),o=i,u=s(a.a,r.a,!1,o,null,null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";function i(t){!1!==t&&this.autoResize?C(window,"resize",this.reflowHandler,!1):$(window,"resize",this.reflowHandler,!1)}function a(t){var e=t.target,n=e[S];n&&_(e,n)}function r(){clearTimeout(this.token),this.token=setTimeout(this.reflow,this.interval)}function s(){var t=this;if(this.$el){var e=this.$el.clientWidth,n=this.$children.map(function(t){return t.getMeta()});n.sort(function(t,e){return t.order-e.order}),this.virtualRects=n.map(function(){return{}}),u(this,n,this.virtualRects),setTimeout(function(){o(t.$el,e)&&u(t,n,t.virtualRects),t.style.overflow="hidden",d(t.virtualRects,n),t.$emit("reflowed",t)},0)}}function o(t,e){return e!==t.clientWidth}function u(t,e,n){var i=c(t);("h"===t.line?q:E).calculate(t,i,e,n)}function c(t){var e=t.maxLineGap?+t.maxLineGap:t.lineGap;return{align:~["left","right","center"].indexOf(t.align)?t.align:"left",line:~["v","h"].indexOf(t.line)?t.line:"v",lineGap:+t.lineGap,minLineGap:t.minLineGap?+t.minLineGap:t.lineGap,maxLineGap:e,singleMaxWidth:Math.max(t.singleMaxWidth||0,e),fixedHeight:!!t.fixedHeight,grow:t.grow&&t.grow.map(function(t){return+t})}}function l(t,e,n){switch(n){case"right":return t-e;case"center":return(t-e)/2;default:return 0}}function h(t){return t.reduce(function(t,e){return t+e})}function d(t,e){var n=e.filter(function(t){return t.moveClass}),i=f(n);g(t,e);var a=f(n);n.forEach(function(t,e){t.node[S]=t.moveClass,p(t.node,i[e],a[e])}),document.body.clientWidth,n.forEach(function(t){y(t.node,t.moveClass),m(t.node)})}function f(t){return t.map(function(t){return t.vm.rect})}function g(t,e){t.forEach(function(t,n){var i=e[n].node.style;e[n].vm.rect=t;for(var a in t)i[a]=t[a]+"px"})}function p(t,e,n){var i=e.left-n.left,a=e.top-n.top,r=e.width/n.width,s=e.height/n.height;t.style.transform=t.style.WebkitTransform="translate("+i+"px,"+a+"px) scale("+r+","+s+")",t.style.transitionDuration="0s"}function m(t){t.style.transform=t.style.WebkitTransform="",t.style.transitionDuration=""}function v(){return void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend?"webkitTransitionEnd":"transitionend"}function w(t,e){for(var n="function"==typeof t?function(){return t()}:function(){return t},i=[],a=0;a<e;a++)i[a]=n();return i}function y(t,e){if(!x(t,e)){b(t,"class",(b(t,"class").trim()+" "+e).trim())}}function _(t,e){var n=new RegExp("\\s*\\b"+e+"\\b\\s*","g");b(t,"class",b(t,"class").replace(n," ").trim())}function x(t,e){return new RegExp("\\b"+e+"\\b").test(b(t,"class"))}function b(t,e,n){if(void 0===n)return t.getAttribute(e)||"";t.setAttribute(e,n)}function C(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.addEventListener(e,n,i)}function $(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.removeEventListener(e,n,i)}var S="_wfMoveClass";e.a={props:{autoResize:{default:!0},interval:{default:200,validator:function(t){return t>=0}},align:{default:"left",validator:function(t){return~["left","right","center"].indexOf(t)}},line:{default:"v",validator:function(t){return~["v","h"].indexOf(t)}},lineGap:{required:!0,validator:function(t){return t>=0}},minLineGap:{validator:function(t){return t>=0}},maxLineGap:{validator:function(t){return t>=0}},singleMaxWidth:{validator:function(t){return t>=0}},fixedHeight:{default:!1},grow:{validator:function(t){return t instanceof Array}},watch:{default:function(){return{}}}},data:function(){return{style:{height:"",overflow:""},token:null}},methods:{reflowHandler:r,autoResizeHandler:i,reflow:s},created:function(){var t=this;this.virtualRects=[],this.$on("reflow",function(){t.reflowHandler()}),this.$watch(function(){return t.align,t.line,t.lineGap,t.minLineGap,t.maxLineGap,t.singleMaxWidth,t.fixedHeight,t.watch},this.reflowHandler),this.$watch("grow",this.reflowHandler)},mounted:function(){this.$watch("autoResize",this.autoResizeHandler),C(this.$el,v(),a,!0),this.autoResizeHandler(this.autoResize)},beforeDestroy:function(){this.autoResizeHandler(!1),$(this.$el,v(),a,!0)}};var E=function(){function t(t,i,a,r){var s=t.$el.clientWidth,o=i.grow,u=o?n(s,o):e(s,i),c=w(0,u.count);a.forEach(function(t,e){var n=c.reduce(function(t,e,n){return e<c[t]?n:t},0),a=u.width[n%u.count],s=r[e];s.top=c[n],s.left=u.left+(n?h(u.width.slice(0,n)):0),s.width=a,s.height=t.height*(i.fixedHeight?1:a/t.width),c[n]=c[n]+s.height}),t.style.height=Math.max.apply(Math,c)+"px"}function e(t,e){var n=t/e.lineGap,i=void 0;if(e.singleMaxWidth>=t)n=1,i=Math.max(t,e.minLineGap);else{var a=e.maxLineGap*~~n,r=e.minLineGap*~~(n+1),s=a>=t,o=r<=t;s&&o?(n=Math.round(n),i=t/n):s?(n=~~n,i=t/n):o?(n=~~(n+1),i=t/n):(n=~~n,i=e.maxLineGap),1===n&&(i=Math.min(t,e.singleMaxWidth),i=Math.max(i,e.minLineGap))}return{width:w(i,n),count:n,left:l(t,i*n,e.align)}}function n(t,e){var n=h(e);return{width:e.map(function(e){return t*e/n}),count:e.length,left:0}}return{calculate:t}}(),q=function(){function t(t,n,i,a){for(var r=t.$el.clientWidth,s=i.length,o=0,u=0;u<s;){for(var c,l,h=e(r,n,i,u),d=0,f=0;d<h.count;d++)c=i[u+d],l=a[u+d],l.top=o,l.left=h.left+f,l.width=c.width*h.height/c.height,l.height=h.height,f+=l.width;u+=h.count,o+=h.height}t.style.height=o+"px"}function e(t,e,r,s){var o=n(t,e.lineGap,r,s),u=Math.max(o-1,1),c=i(t,e,r,s,o),h=i(t,e,r,s,u),d=a(h,c,t),f=d.height,g=d.width;return 1===d.count&&(g=Math.min(e.singleMaxWidth,t),f=r[s].height*g/r[s].width),{left:l(t,g,e.align),count:d.count,height:f}}function n(t,e,n,i){for(var a=0,r=i,s=0;r<n.length&&s<=t;r++)s+=n[r].width*e/n[r].height,a++;return a}function i(t,e,n,i,a){for(var r=0,s=a-1;s>=0;s--){var o=n[i+s];r+=o.width*e.lineGap/o.height}var u=e.lineGap*t/r;if(u<=e.maxLineGap&&u>=e.minLineGap)return{cost:Math.abs(e.lineGap-u),count:a,width:t,height:u};var c=r>t?e.minLineGap:e.maxLineGap;return{cost:1/0,count:a,width:r*c/e.lineGap,height:c}}function a(t,e,n){return t.cost===1/0&&e.cost===1/0?e.width<n?e:t:e.cost>=t.cost?t:e}return{calculate:t}}()},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vue-waterfall",style:t.style},[t._t("default")],2)},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";function i(t){n(33)}var a=n(34),r=n(35),s=n(0),o=i,u=s(a.a,r.a,!1,o,null,null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";e.a={data:function(){return{isShow:!1}},props:{width:{required:!0,validator:function(t){return t>=0}},height:{required:!0,validator:function(t){return t>=0}},order:{default:0},moveClass:{default:""}},methods:{notify:function(){this.$parent.$emit("reflow",this)},getMeta:function(){return{vm:this,node:this.$el,order:this.order,width:this.width,height:this.height,moveClass:this.moveClass}}},created:function(){var t=this;this.rect={top:0,left:0,width:0,height:0},this.$watch(function(){return t.width,t.height},this.notify)},mounted:function(){var t=this;this.$parent.$once("reflowed",function(){t.isShow=!0}),this.notify()},destroyed:function(){this.notify()}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"vue-waterfall-slot"},[t._t("default")],2)},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";function i(t){n(37)}var a=n(38),r=n(39),s=n(0),o=i,u=s(a.a,r.a,!1,o,"data-v-e1d6dc74",null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"waterfallImage",props:{id:Number,tags:String,author:String,created_at:Number,source:String,score:Number,file_size:Number,file_url:String,width:Number,height:Number,preview_url:String,actual_preview_width:Number,actual_preview_height:Number,sample_url:String,sample_width:Number,sample_height:Number,sample_file_size:Number,jpeg_url:String,jpeg_file_size:Number,rating:String,isPageInd:{type:Boolean,default:!1},page:Number},methods:{onHover:function(){this.loaded&&(this.hover=!0)},onHoverOff:function(){this.hover=!1},recalculateHeight:function(t){var e=void 0;0!=(e=this.$refs.wrapper.offsetHeight)&&(console.log("#"+this.id+" loaded!"),this.loaded=!0,this.$emit("height-change",e))}},data:function(){return{loaded:!1,hover:!1,placeholderStyle:{}}},computed:{tagsArr:function(){return this.tags.split(" ")}},created:function(){this.isPageInd},mounted:function(){var t=this;this.$nextTick(function(){var e=Math.ceil(parseInt(window.getComputedStyle(t.$refs.wrapper,null).width)*(t.sample_height/t.sample_width));console.log(e,window.getComputedStyle(t.$refs.wrapper,null).width);var n={height:e+"px",marginBottom:-e+"px"};t.placeholderStyle=n,console.log("#"+t.id+" placeholder drawn!")})}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"",name:"slide-fade"}},[n("div",{ref:"wrapper",staticClass:"wf-wrapper",on:{mouseover:t.onHover,mouseout:t.onHoverOff}},[t.isPageInd?n("div",[n("div",{staticClass:"wf-pageindicator"},[t._v("\r\n        Page "+t._s(t.page)+"\r\n      ")])]):n("div",[n("div",{staticClass:"wfimg-container"},[n("router-link",{attrs:{to:"/"+t.id}},[n("transition",{attrs:{name:"placeholder-fade-away"}},[~t.loaded?n("div",{staticClass:"placeholder",style:t.placeholderStyle}):t._e()]),t._v(" "),n("img",{staticClass:"wfimg",attrs:{src:t.preview_url,alt:t.id},on:{loadend:t.recalculateHeight}})],1)],1),t._v(" "),n("div",{staticClass:"wfdesc"},[n("div",{staticClass:"wfdesc-row"},[n("div",{staticClass:"wfdesc-resolution",on:{click:function(e){t.loaded=!1}}},[t._v(t._s(t.width)+" x "+t._s(t.height))])]),t._v(" "),n("div",{staticClass:"wfdesc-row"},[n("span",{staticClass:"wfdesc-author"},[t._v("uploaded by "+t._s(t.author))])])]),t._v(" "),n("transition",{attrs:{name:"slide-fade"}},[t.hover?n("div",{staticClass:"wfextra"},[n("div",{staticClass:"wfextra-tags"},t._l(t.tagsArr,function(e){return n("div",{staticClass:"tag"},[n("span",{staticClass:"tag-hash"},[t._v("#")]),t._v(t._s(e))])}))]):t._e()])],1)])])},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._m(0,!1,!1),t._v(" "),n("headerbar",{staticClass:"header",attrs:{query:t.startTags,ratingFlag:t.rating},on:{querySubmission:t.querySubmission}}),t._v(" "),n("div",{staticClass:"page"},[t.notError?n("waterfall",{ref:"waterfall",staticClass:"waterfall",attrs:{"line-gap":256,watch:t.imgsArr,align:"center"}},t._l(t.imgsArr,function(e,i){return n("waterfall-slot",{key:i,staticClass:"wfslot",attrs:{width:240,height:e.realHeight||t.calcHeight(e),order:i,"move-class":"move"}},[n("waterfall-image",t._b({attrs:{"move-class":"move"},on:{"height-change":function(n){t.updateHeight(arguments,e,i)}}},"waterfall-image",e,!1))],1)})):n("div",{staticClass:"errorMsg"})],1),t._v(" "),n("div",{staticClass:"loader-wrapper"},[t.isBusy?n("div",{staticClass:"loading"},[t._v("\r\n      loading next page...\r\n    ")]):t.reachingEnd?n("div",{staticClass:"reaching-end"},[t._v("\r\n      Nothing more to show.\r\n    ")]):n("div",{staticClass:"loadnext"},[n("button",{on:{click:t.loadNextPage}},[t._v("load the next page")])])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("img",{staticClass:"favico",attrs:{src:"/icon/icon.png",alt:""}}),t._v(" "),n("p",[t._v("konamirr")])])}],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";function i(t){n(42)}var a=n(43),r=n(44),s=n(0),o=i,u=s(a.a,r.a,!1,o,"data-v-401025be",null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";var i=n(5),a=n.n(i);e.a={name:"image",props:{id:Number},created:function(){this.updateData()},data:function(){return{imageInfo:new Object,comments:new Array}},watch:{$route:function(t,e){/\/\d+/.test(e)||this.updateData()}},computed:{tagsArr:function(){return this.imageInfo.tags?this.imageInfo.tags.split(" "):[]},hasJpegVariant:function(){return!/(\.jpg|\.jpeg)/i.test(this.imageInfo.file_url)}},methods:{fetchImageData:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE)if(200===e.status){var n=JSON.parse(e.responseText);console.log(n),n[0]&&(t.imageInfo=a.a.assign({},t.imageInfo,n[0]))}else e.status>=400&&console.log("Error: HTTP "+e.status)};var n="https://konachan.kcsl.ink/kona-api/post.json?tags=id:"+this.id;e.open("GET",n),e.send(),console.log("Request sent!",n)},fetchCommentData:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE)if(200===e.status){var n=JSON.parse(e.responseText);t.comments=n}else e.status>=400&&console.log("Error: HTTP "+e.status)};var n="https://konachan.kcsl.ink/kona-api/comment.json?post_id="+this.id;e.open("GET",n),e.send(),console.log("Request sent!",n)},updateData:function(){this.fetchImageData(),this.fetchCommentData()},regulateComment:function(t){}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"img-desc-wrapper"},[n("div",{staticClass:"image-wrapper"},[n("img",{staticClass:"image",attrs:{src:t.imageInfo.jpeg_url,alt:t.imageInfo.tags?t.imageInfo.tags:""}})]),t._v(" "),n("div",{staticClass:"desc"},[n("div",{staticClass:"title-id"},[t._v("\n        # "+t._s(t.id)+"\n      ")]),t._v(" "),n("div",{staticClass:"tags"},t._l(t.tagsArr,function(e,i){return n("div",{key:i,staticClass:"tag"},[n("span",{staticClass:"tag-hash"},[t._v("# ")]),t._v(t._s(e.replace("_"," ")))])})),t._v(" "),n("div",{staticClass:"download"},[n("p",[t._v("\n          * Please use right-click download for the following links\n        ")]),t._v(" "),n("a",{staticClass:"download-link",attrs:{href:t.imageInfo.file_url,download:""}},[t._v("Download Original picture ("+t._s((t.imageInfo.file_size/1048576).toFixed(2))+"MiB)")]),t._v(" "),t.hasJpegVariant?n("a",{staticClass:"download-link",attrs:{href:t.imageInfo.jpeg_url,download:""}},[t._v("Download JPEG Variant ("+t._s((t.imageInfo.jpeg_file_size/1048576).toFixed(2))+"MiB)")]):t._e()])])]),t._v(" "),n("div",{staticClass:"comments"},t._l(t.comments,function(e,i){return n("div",{key:i,staticClass:"comment"},[t._v("\n      "+t._s(e.creator)+":"),n("br"),t._v(" "+t._s(e.body)+"\n    ")])}))])},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";function i(t){n(46)}var a=n(47),r=n(48),s=n(0),o=i,u=s(a.a,r.a,!1,o,null,null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";e.a={name:"errorPage",props:["number"]}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"page"},[t._v("\r\n  \r\n  ERROR: "+t._s(t.number)+"\r\n")])},a=[],r={render:i,staticRenderFns:a};e.a=r},function(t,e,n){"use strict";var i=n(2),a=n(50);i.a.use(a.a);var r={imgsArr:[],tags:[],page:1,errorState:!1,errorMsg:"",reachingEnd:!1,busyState:!1,scrollPosition:0},s={resetImageArr:function(t){t.imgsArr=[]},appendImageArr:function(t,e){t.imgsArr.push.apply(t.imgsArr,e)},setPage:function(t,e){t.page=e},nextPage:function(t){t.page++},resetPage:function(t){t.page=1},setTags:function(t,e){t.tags=e},commitRealHeight:function(t,e){var n=e.index,a=e.height;i.a.set(t.imgsArr[n],"realHeight",a)},resetStates:function(t){t.errorState=!1,t.reachingEnd=!1},recvError:function(t,e){t.errorState=!0,t.errorMsg=e,t.reachingEnd=!0},reachEnd:function(t){t.reachingEnd=!0},setBusy:function(t,e){t.busyState=e},setScroll:function(t,e){t.scrollPosition=e}},o={getPosts:function(t,e){var n=e.nextPage,i=void 0!==n&&n,a=(e.refresh,e.rating),s=void 0===a?"s":a;if(1!=t.state.isBusy){i&&t.commit("nextPage"),t.commit("setBusy",!0);var o=r.page,u=new XMLHttpRequest;u.onreadystatechange=function(){if(u.readyState===XMLHttpRequest.DONE)if(200===u.status){var e=JSON.parse(u.responseText);0==e.length||0==e.success?(t.commit("reachEnd"),console.log("Nothing more to show.")):("s"==s&&_.remove(e,function(t){return"s"!=t.rating}),e.unshift({isPageInd:!0,page:o}),t.commit("appendImageArr",e))}else if(u.status>=400){console.log("Error: HTTP "+u.status);var n=JSON.parse(u.responseText).reason;t.commit("recvError",n)}t.commit("setBusy",!1)};var c="https://konachan.kcsl.ink/kona-api/post.json?tags="+t.getters.queryTags+"&page="+t.state.page;u.open("GET",c),u.send(),console.log("Request sent!",c)}}},u={queryTags:function(t){return t.tags?t.tags.join("+"):""}},c=new a.a.Store({state:r,mutations:s,getters:u,actions:o});e.a=c},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(52),a=n.n(i);a.a.install({onUpdateReady:function(){console.log("update ready"),a.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})}],[6]);
//# sourceMappingURL=client.df85d261.js.map