var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function u(t,e,n,r,o,l,s){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,l);if(c){const o=i(e,n,r,s);t.p(o,c)}}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function v(){return g("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function k(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function E(t,e,n){t.classList[n?"add":"remove"](e)}let z;function O(t){z=t}function M(){if(!z)throw new Error("Function called outside component initialization");return z}function T(){const t=M();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const C=[],j=[],A=[],_=[],R=Promise.resolve();let I=!1;function q(t){A.push(t)}let P=!1;const L=new Set;function N(){if(!P){P=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];O(e),S(e.$$)}for(O(null),C.length=0;j.length;)j.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];L.has(e)||(L.add(e),e())}A.length=0}while(C.length);for(;_.length;)_.pop()();I=!1,P=!1,L.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const H=new Set;let U;function Y(){U={r:0,c:[],p:U}}function X(){U.r||o(U.c),U=U.p}function F(t,e){t&&t.i&&(H.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),U.c.push((()=>{H.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function G(t,e){B(t,1,1,(()=>{e.delete(t.key)}))}function V(t){t&&t.c()}function D(t,e,r){const{fragment:s,on_mount:c,on_destroy:i,after_update:u}=t.$$;s&&s.m(e,r),q((()=>{const e=c.map(n).filter(l);i?i.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(q)}function J(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(C.push(t),I||(I=!0,R.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,l,s,c,i,u=[-1]){const a=z;O(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=l?l(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&K(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&F(e.$$.fragment),D(e,n.target,n.anchor),N()}O(a)}class W{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=["black","blue","brown","cyan","green","lime","orange","pink","purple","red","white","yellow"],tt=()=>et(Z,1)[0];function et(t,e){var n=new Array(e),r=t.length,o=new Array(r);if(e>r)throw new RangeError("getRandom: more elements taken than available");for(;e--;){var l=Math.floor(Math.random()*r);n[e]=t[l in o?o[l]:l],o[l]=--r in o?o[r]:r}return n}function nt(t,e){return n=t,[...Array(e-n+1).keys()].map((t=>t+n));var n}function rt(t,e,n){const r=t.slice();return r[2]=e[n],r}function ot(t,e,n){const r=t.slice();return r[5]=e[n],r}function lt(t){let e,n,r,o;return{c(){e=d("span"),n=$("svg"),r=$("circle"),o=h(),x(r,"cx","5"),x(r,"cy","5"),x(r,"r","4"),x(r,"stroke","white"),x(r,"fill","white"),x(n,"width","10"),x(n,"height","10"),k(e,"left",t[5].x+"%"),k(e,"top",t[5].y+"%"),k(e,"transform","scale("+t[5].z+")"),x(e,"class","svelte-12efows")},m(t,l){f(t,e,l),a(e,n),a(n,r),a(e,o)},p(t,n){1&n&&k(e,"left",t[5].x+"%"),1&n&&k(e,"top",t[5].y+"%"),1&n&&k(e,"transform","scale("+t[5].z+")")},d(t){t&&m(e)}}}function st(t){let e;return{c(){e=d("span"),x(e,"class","floater svelte-12efows"),k(e,"left",t[2].x+"%"),k(e,"top",t[2].y+"%"),k(e,"transform","scale("+t[2].z+") rotate("+t[2].r+"deg)"),k(e,"background-image","url(img/players/"+t[2].c+".png)"),k(e,"background-size","contain")},m(t,n){f(t,e,n)},p(t,n){2&n&&k(e,"left",t[2].x+"%"),2&n&&k(e,"top",t[2].y+"%"),2&n&&k(e,"transform","scale("+t[2].z+") rotate("+t[2].r+"deg)"),2&n&&k(e,"background-image","url(img/players/"+t[2].c+".png)")},d(t){t&&m(e)}}}function ct(e){let n,r,o,l,s=e[0],c=[];for(let t=0;t<s.length;t+=1)c[t]=lt(ot(e,s,t));let i=e[1],u=[];for(let t=0;t<i.length;t+=1)u[t]=st(rt(e,i,t));return{c(){n=d("div"),r=d("div");for(let t=0;t<c.length;t+=1)c[t].c();o=h(),l=d("div");for(let t=0;t<u.length;t+=1)u[t].c();x(r,"class","stars"),x(l,"class","floaters"),x(n,"class","background svelte-12efows")},m(t,e){f(t,n,e),a(n,r);for(let t=0;t<c.length;t+=1)c[t].m(r,null);a(n,o),a(n,l);for(let t=0;t<u.length;t+=1)u[t].m(l,null)},p(t,[e]){if(1&e){let n;for(s=t[0],n=0;n<s.length;n+=1){const o=ot(t,s,n);c[n]?c[n].p(o,e):(c[n]=lt(o),c[n].c(),c[n].m(r,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=s.length}if(2&e){let n;for(i=t[1],n=0;n<i.length;n+=1){const r=rt(t,i,n);u[n]?u[n].p(r,e):(u[n]=st(r),u[n].c(),u[n].m(l,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=i.length}},i:t,o:t,d(t){t&&m(n),p(c,t),p(u,t)}}}function it(t,e,n){let r=new Array(100).fill({x:0,y:0,z:0}).map(((t,e)=>({x:200*Math.random()-100,y:100*Math.random(),z:.1+1*Math.random()}))).sort(((t,e)=>t.z-e.z)),o=new Array(10).fill({x:0,y:0,z:0,r:0,t:0,c:""}).map((()=>({x:200*Math.random()-100,y:100*Math.random(),z:2*Math.random()+.1,r:360*Math.random()-180,t:90*Math.random()-45,c:tt()}))).sort(((t,e)=>t.z-e.z));var l;return l=()=>{let t;return function e(){t=requestAnimationFrame(e),n(0,r=r.map((t=>(t.x+=.6*t.z,t.x>120&&(t.x=-20),t)))),n(1,o=o.map((t=>(t.x+=.2*t.z,t.r+=.1*t.t,t.x>120&&(t=Object.assign(Object.assign({},t),{x:-20,y:100*Math.random(),r:360*Math.random()-180,t:90*Math.random()-45,c:tt()})),t))))}(),()=>cancelAnimationFrame(t)},M().$$.on_mount.push(l),[r,o]}class ut extends W{constructor(t){super(),Q(this,t,it,ct,s,{})}}function at(t){new Audio(`audio/${t}.mp3`).play()}function ft(t){let e,n,r,l,s;const c=t[7].default,a=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(c,t,t[6],null);return{c(){e=d("button"),a&&a.c(),x(e,"style",n="z-index: "+t[5]),x(e,"class","svelte-9kzc7g"),E(e,"center",t[2]),E(e,"small",t[0]),E(e,"no-outline",t[1]),E(e,"bottom-right",t[3]),E(e,"small-cursive",t[4])},m(n,o){f(n,e,o),a&&a.m(e,null),r=!0,l||(s=[y(e,"click",t[8]),y(e,"mouseenter",t[9])],l=!0)},p(t,[o]){a&&a.p&&64&o&&u(a,c,t,t[6],o,null,null),(!r||32&o&&n!==(n="z-index: "+t[5]))&&x(e,"style",n),4&o&&E(e,"center",t[2]),1&o&&E(e,"small",t[0]),2&o&&E(e,"no-outline",t[1]),8&o&&E(e,"bottom-right",t[3]),16&o&&E(e,"small-cursive",t[4])},i(t){r||(F(a,t),r=!0)},o(t){B(a,t),r=!1},d(t){t&&m(e),a&&a.d(t),l=!1,o(s)}}}function mt(t,e,n){let{$$slots:r={},$$scope:o}=e,{small:l=!1}=e,{noOutline:s=!1}=e,{center:c=!1}=e,{bottomRight:i=!1}=e,{smallCursive:u=!1}=e,{zIndex:a=0}=e;return t.$$set=t=>{"small"in t&&n(0,l=t.small),"noOutline"in t&&n(1,s=t.noOutline),"center"in t&&n(2,c=t.center),"bottomRight"in t&&n(3,i=t.bottomRight),"smallCursive"in t&&n(4,u=t.smallCursive),"zIndex"in t&&n(5,a=t.zIndex),"$$scope"in t&&n(6,o=t.$$scope)},[l,s,c,i,u,a,o,r,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}(t,e)},()=>{at("buttonSound")}]}class pt extends W{constructor(t){super(),Q(this,t,mt,ft,s,{small:0,noOutline:1,center:2,bottomRight:3,smallCursive:4,zIndex:5})}}function dt(t){let e;return{c(){e=g("Instructions")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function $t(t){let e;return{c(){e=g("Play")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function gt(t){let e,n,r,o,s,c,i,u,p;return c=new pt({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c.$on("click",(function(){l(t[0])&&t[0].apply(this,arguments)})),u=new pt({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),u.$on("click",(function(){l(t[1])&&t[1].apply(this,arguments)})),{c(){e=d("div"),n=d("header"),n.innerHTML='<img src="img/Among Us A.png" alt="Among Us Logo" class="svelte-8kah3t"/>mong Us IRL Roles\n    Assigner',r=h(),o=d("div"),o.textContent="I know, not the catchiest name",s=h(),V(c.$$.fragment),i=h(),V(u.$$.fragment),x(n,"class","svelte-8kah3t")},m(t,l){f(t,e,l),a(e,n),a(e,r),a(e,o),a(e,s),D(c,e,null),a(e,i),D(u,e,null),p=!0},p(e,[n]){t=e;const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),u.$set(o)},i(t){p||(F(c.$$.fragment,t),F(u.$$.fragment,t),p=!0)},o(t){B(c.$$.fragment,t),B(u.$$.fragment,t),p=!1},d(t){t&&m(e),J(c),J(u)}}}function ht(t,e,n){let{goToInstructions:r}=e,{goToPlayerEditor:o}=e;return t.$$set=t=>{"goToInstructions"in t&&n(0,r=t.goToInstructions),"goToPlayerEditor"in t&&n(1,o=t.goToPlayerEditor)},[r,o]}class vt extends W{constructor(t){super(),Q(this,t,ht,gt,s,{goToInstructions:0,goToPlayerEditor:1})}}function yt(t){let e;return{c(){e=g("Back to Main Screen")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function xt(t){let e,n,r,o,l,s;return l=new pt({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),l.$on("click",t[0]),{c(){e=d("h1"),e.textContent="TO USE THIS SITE:",n=h(),r=d("div"),r.innerHTML='<p class="svelte-5dftxf">1. Go to the main screen (refresh page if needed)</p> \n  <p class="svelte-5dftxf">2. Press the &quot;PLAY&quot; button</p> \n  <p class="svelte-5dftxf">3. Enter the names of each player in each text box</p> \n  <p class="svelte-5dftxf">4. Click on the smaller characters beside each text box to toggle their\n    color</p> \n  <p class="svelte-5dftxf">5. Click &quot;THEN CONTINUE&quot;.</p> \n  <p class="svelte-5dftxf">6. Have each person use the computer in the order that you entered their\n    names. Each player will click &quot;REVEAL ROLE&quot;, and then &quot;NEXT PLAYER&quot; once\n    they&#39;ve memorized their role.</p>',o=h(),V(l.$$.fragment)},m(t,c){f(t,e,c),f(t,n,c),f(t,r,c),f(t,o,c),D(l,t,c),s=!0},p(t,[e]){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n)},i(t){s||(F(l.$$.fragment,t),s=!0)},o(t){B(l.$$.fragment,t),s=!1},d(t){t&&m(e),t&&m(n),t&&m(r),t&&m(o),J(l,t)}}}function bt(t){const e=T();return[function(){e("back")}]}class wt extends W{constructor(t){super(),Q(this,t,bt,xt,s,{})}}const kt=[];const Et=function(e,n=t){let r;const o=[];function l(t){if(s(e,t)&&(e=t,r)){const t=!kt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),kt.push(n,e)}if(t){for(let t=0;t<kt.length;t+=2)kt[t][0](kt[t+1]);kt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,c=t){const i=[s,c];return o.push(i),1===o.length&&(r=n(l)||t),s(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}({players:nt(0,4).map((t=>({name:"",color:t}))),gameMode:"default"});function zt(e){let n,r,o;return{c(){n=d("input"),x(n,"type","text"),x(n,"class","svelte-1lqpb6n"),E(n,"small",e[1])},m(t,l){f(t,n,l),w(n,e[0]),r||(o=y(n,"input",e[2]),r=!0)},p(t,[e]){1&e&&n.value!==t[0]&&w(n,t[0]),2&e&&E(n,"small",t[1])},i:t,o:t,d(t){t&&m(n),r=!1,o()}}}function Ot(t,e,n){let{small:r=!1}=e,{value:o}=e;return t.$$set=t=>{"small"in t&&n(1,r=t.small),"value"in t&&n(0,o=t.value)},[o,r,function(){o=this.value,n(0,o)}]}class Mt extends W{constructor(t){super(),Q(this,t,Ot,zt,s,{small:1,value:0})}}function Tt(e){let n,r,o,l;return{c(){n=d("button"),x(n,"class","color-chooser svelte-rhufat"),x(n,"style",r=`background-image: url(img/players/${Z[e[0]]}.png)`)},m(t,r){f(t,n,r),o||(l=y(n,"click",e[2]),o=!0)},p(t,[e]){1&e&&r!==(r=`background-image: url(img/players/${Z[t[0]]}.png)`)&&x(n,"style",r)},i:t,o:t,d(t){t&&m(n),o=!1,l()}}}function Ct(t,e,n){const r=T();let{color:o=0}=e;function l(){r("updateColor")}return t.$$set=t=>{"color"in t&&n(0,o=t.color)},[o,l,()=>{l()}]}class jt extends W{constructor(t){super(),Q(this,t,Ct,Tt,s,{color:0})}}function At(t,e,n){const r=t.slice();return r[10]=e[n],r[11]=e,r[12]=n,r}function _t(t){let e;return{c(){e=g("Add Player")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Rt(t){let e;return{c(){e=g("X")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function It(t,e){let n,r,o,l,s,c,i,u,p;function $(t){e[4].call(null,t,e[10])}let g={small:!0};return void 0!==e[10].name&&(g.value=e[10].name),r=new Mt({props:g}),j.push((()=>function(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}(r,"value",$))),s=new jt({props:{color:e[10].color}}),s.$on("updateColor",(function(){return e[5](e[12])})),i=new pt({props:{noOutline:!0,smallCursive:!0,$$slots:{default:[Rt]},$$scope:{ctx:e}}}),i.$on("click",(function(){return e[6](e[12])})),{key:t,first:null,c(){n=d("div"),V(r.$$.fragment),l=h(),V(s.$$.fragment),c=h(),V(i.$$.fragment),u=h(),x(n,"class","row svelte-t5l8q0"),this.first=n},m(t,e){f(t,n,e),D(r,n,null),a(n,l),D(s,n,null),a(n,c),D(i,n,null),a(n,u),p=!0},p(t,n){e=t;const l={};var c;!o&&1&n&&(o=!0,l.value=e[10].name,c=()=>o=!1,_.push(c)),r.$set(l);const u={};1&n&&(u.color=e[10].color),s.$set(u);const a={};8192&n&&(a.$$scope={dirty:n,ctx:e}),i.$set(a)},i(t){p||(F(r.$$.fragment,t),F(s.$$.fragment,t),F(i.$$.fragment,t),p=!0)},o(t){B(r.$$.fragment,t),B(s.$$.fragment,t),B(i.$$.fragment,t),p=!1},d(t){t&&m(n),J(r),J(s),J(i)}}}function qt(t){let e,n,r,o,l=[],s=new Map;n=new pt({props:{center:!0,smallCursive:!0,$$slots:{default:[_t]},$$scope:{ctx:t}}}),n.$on("click",t[1]);let c=t[0].players;const i=t=>t[12];for(let e=0;e<c.length;e+=1){let n=At(t,c,e),r=i(n);s.set(r,l[e]=It(r,n))}return{c(){e=d("div"),V(n.$$.fragment),r=h();for(let t=0;t<l.length;t+=1)l[t].c();x(e,"class","col svelte-t5l8q0")},m(t,s){f(t,e,s),D(n,e,null),a(e,r);for(let t=0;t<l.length;t+=1)l[t].m(e,null);o=!0},p(t,[r]){const o={};if(8192&r&&(o.$$scope={dirty:r,ctx:t}),n.$set(o),13&r){const n=t[0].players;Y(),l=function(t,e,n,r,o,l,s,c,i,u,a,f){let m=t.length,p=l.length,d=m;const $={};for(;d--;)$[t[d].key]=d;const g=[],h=new Map,v=new Map;for(d=p;d--;){const t=f(o,l,d),c=n(t);let i=s.get(c);i?r&&i.p(t,e):(i=u(c,t),i.c()),h.set(c,g[d]=i),c in $&&v.set(c,Math.abs(d-$[c]))}const y=new Set,x=new Set;function b(t){F(t,1),t.m(c,a),s.set(t.key,t),a=t.first,p--}for(;m&&p;){const e=g[p-1],n=t[m-1],r=e.key,o=n.key;e===n?(a=e.first,m--,p--):h.has(o)?!s.has(r)||y.has(r)?b(e):x.has(o)?m--:v.get(r)>v.get(o)?(x.add(r),b(e)):(y.add(o),m--):(i(n,s),m--)}for(;m--;){const e=t[m];h.has(e.key)||i(e,s)}for(;p;)b(g[p-1]);return g}(l,r,i,1,t,n,s,e,G,It,null,At),X()}},i(t){if(!o){F(n.$$.fragment,t);for(let t=0;t<c.length;t+=1)F(l[t]);o=!0}},o(t){B(n.$$.fragment,t);for(let t=0;t<l.length;t+=1)B(l[t]);o=!1},d(t){t&&m(e),J(n);for(let t=0;t<l.length;t+=1)l[t].d()}}}function Pt(t,e,n){let r;function o(t){r.players.length<=3||Et.update((e=>Object.assign(Object.assign({},e),{players:[...e.players.slice(0,t),...e.players.slice(t+1)]})))}function l(t){Et.update((e=>Object.assign(Object.assign({},e),{players:[...e.players.slice(0,t),Object.assign(Object.assign({},e.players[t]),{color:i().length>2?s(e.players[t].color):e.players[t].color}),...e.players.slice(t+1)]})))}function s(t){const e=[...i(),t].sort(((t,e)=>t-e));return e[(e.indexOf(t)+1)%(e.length-1)]}function i(){return nt(0,Z.length).filter((t=>!r.players.map((t=>t.color)).includes(t)))}c(t,Et,(t=>n(0,r=t)));return[r,function(){r.players.length>=10||Et.update((t=>{return Object.assign(Object.assign({},t),{players:[...t.players,{name:"",color:(null===(e=i())||void 0===e?void 0:e[0])||0}]});var e}))},o,l,function(t,e){e.name=t,Et.set(r)},t=>{l(t)},t=>{o(t)}]}class Lt extends W{constructor(t){super(),Q(this,t,Pt,qt,s,{})}}function Nt(t){let e;return{c(){e=g("Then continue")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function St(t){let e,n,r,o,s,c,i;return o=new Lt({}),c=new pt({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),c.$on("click",(function(){l(t[0])&&t[0].apply(this,arguments)})),{c(){e=d("div"),n=d("div"),n.textContent="Enter the names of each player here:",r=h(),V(o.$$.fragment),s=h(),V(c.$$.fragment),x(e,"class","playerEditorPage svelte-178ks5j")},m(t,l){f(t,e,l),a(e,n),a(e,r),D(o,e,null),a(e,s),D(c,e,null),i=!0},p(e,[n]){t=e;const r={};2&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i(t){i||(F(o.$$.fragment,t),F(c.$$.fragment,t),i=!0)},o(t){B(o.$$.fragment,t),B(c.$$.fragment,t),i=!1},d(t){t&&m(e),J(o),J(c)}}}function Ht(t,e,n){let{submit:r}=e;return t.$$set=t=>{"submit"in t&&n(0,r=t.submit)},[r]}class Ut extends W{constructor(t){super(),Q(this,t,Ht,St,s,{submit:0})}}function Yt(e){let n,r;return n=new Ut({props:{submit:e[4]}}),{c(){V(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){J(n,t)}}}function Xt(e){let n,r;return n=new wt({}),n.$on("back",e[1]),{c(){V(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){J(n,t)}}}function Ft(e){let n,r;return n=new vt({props:{goToInstructions:e[2],goToPlayerEditor:e[3]}}),{c(){V(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){J(n,t)}}}function Bt(t){let e,n,r,o,l,s;n=new ut({});const c=[Ft,Xt,Yt],i=[];function u(t,e){return"general"===t[0]?0:"instructions"===t[0]?1:2}return o=u(t),l=i[o]=c[o](t),{c(){e=d("div"),V(n.$$.fragment),r=h(),l.c(),x(e,"class","main svelte-12eghle")},m(t,l){f(t,e,l),D(n,e,null),a(e,r),i[o].m(e,null),s=!0},p(t,[n]){let r=o;o=u(t),o===r?i[o].p(t,n):(Y(),B(i[r],1,1,(()=>{i[r]=null})),X(),l=i[o],l?l.p(t,n):(l=i[o]=c[o](t),l.c()),F(l,1),l.m(e,null))},i(t){s||(F(n.$$.fragment,t),F(l),s=!0)},o(t){B(n.$$.fragment,t),B(l),s=!1},d(t){t&&m(e),J(n),i[o].d()}}}function Gt(t,e,n){const r=T();let o="general";return[o,function(){n(0,o="general")},function(){n(0,o="instructions")},function(){n(0,o="players")},function(){r("submit")}]}class Vt extends W{constructor(t){super(),Q(this,t,Gt,Bt,s,{})}}function Dt(t,e,n){const r=t.slice();return r[14]=e[n],r[13]=n,r}function Jt(t,e,n){const r=t.slice();return r[11]=e[n],r[13]=n,r}function Kt(t){let e,n,r,o,l,s,c,i,u,p,$,v,y,w,E,z,O=t[1].slice(0,1).toUpperCase()+t[1].slice(1)+"",M=(t[0]||"You")+"",T="impostor"!==t[1]&&Wt(t);function C(t,e){return"impostor"!==t[1]?te:Zt}let j=C(t),A=j(t);return E=new pt({props:{zIndex:13,bottomRight:!0,$$slots:{default:[re]},$$scope:{ctx:t}}}),E.$on("click",t[8]),{c(){e=d("div"),n=h(),r=d("div"),o=d("div"),l=g(O),c=h(),T&&T.c(),i=h(),u=d("div"),p=d("span"),$=g(M),v=h(),A.c(),w=h(),V(E.$$.fragment),x(e,"class","shadow-mask svelte-1m3o3r3"),x(o,"class",s="role "+t[1]+" svelte-1m3o3r3"),x(p,"class","name svelte-1m3o3r3"),x(u,"class","player svelte-1m3o3r3"),k(u,"background-image","url(img/players/"+Z[t[2]]+".png)"),x(r,"class",y="reveal "+t[1]+" svelte-1m3o3r3")},m(t,s){f(t,e,s),f(t,n,s),f(t,r,s),a(r,o),a(o,l),a(r,c),T&&T.m(r,null),a(r,i),a(r,u),a(u,p),a(p,$),a(r,v),A.m(r,null),f(t,w,s),D(E,t,s),z=!0},p(t,e){(!z||2&e)&&O!==(O=t[1].slice(0,1).toUpperCase()+t[1].slice(1)+"")&&b(l,O),(!z||2&e&&s!==(s="role "+t[1]+" svelte-1m3o3r3"))&&x(o,"class",s),"impostor"!==t[1]?T?T.p(t,e):(T=Wt(t),T.c(),T.m(r,i)):T&&(T.d(1),T=null),(!z||1&e)&&M!==(M=(t[0]||"You")+"")&&b($,M),(!z||4&e)&&k(u,"background-image","url(img/players/"+Z[t[2]]+".png)"),j===(j=C(t))&&A?A.p(t,e):(A.d(1),A=j(t),A&&(A.c(),A.m(r,null))),(!z||2&e&&y!==(y="reveal "+t[1]+" svelte-1m3o3r3"))&&x(r,"class",y);const n={};65536&e&&(n.$$scope={dirty:e,ctx:t}),E.$set(n)},i(t){z||(F(E.$$.fragment,t),z=!0)},o(t){B(E.$$.fragment,t),z=!1},d(t){t&&m(e),t&&m(n),t&&m(r),T&&T.d(),A.d(),t&&m(w),J(E,t)}}}function Qt(t){let e,n,r,o;function l(t,e){return t[0]?le:oe}let s=l(t),c=s(t);return r=new pt({props:{$$slots:{default:[se]},$$scope:{ctx:t}}}),r.$on("click",t[7]),{c(){e=d("div"),c.c(),n=h(),V(r.$$.fragment)},m(t,l){f(t,e,l),c.m(e,null),f(t,n,l),D(r,t,l),o=!0},p(t,n){s===(s=l(t))&&c?c.p(t,n):(c.d(1),c=s(t),c&&(c.c(),c.m(e,null)));const o={};65536&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o)},i(t){o||(F(r.$$.fragment,t),o=!0)},o(t){B(r.$$.fragment,t),o=!1},d(t){t&&m(e),c.d(),t&&m(n),J(r,t)}}}function Wt(t){let e,n,r,o,l,s,c,i,u,p=t[5]>1?"are":"is",$=t[5]>1?"s":"";return{c(){e=d("div"),n=g("There\n          "),r=g(p),o=h(),l=d("span"),s=g(t[5]),c=g("\n            impostor"),i=g($),u=g("\n          among us"),x(l,"class","impostor svelte-1m3o3r3"),x(e,"class","num-impostors svelte-1m3o3r3")},m(t,m){f(t,e,m),a(e,n),a(e,r),a(e,o),a(e,l),a(l,s),a(l,c),a(l,i),a(e,u)},p(t,e){32&e&&p!==(p=t[5]>1?"are":"is")&&b(r,p),32&e&&b(s,t[5]),32&e&&$!==($=t[5]>1?"s":"")&&b(i,$)},d(t){t&&m(e)}}}function Zt(t){let e,n=t[3].filter(ie),r=[];for(let e=0;e<n.length;e+=1)r[e]=ee(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=v()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);f(t,e,n)},p(t,o){if(72&o){let l;for(n=t[3].filter(ie),l=0;l<n.length;l+=1){const s=Dt(t,n,l);r[l]?r[l].p(s,o):(r[l]=ee(s),r[l].c(),r[l].m(e.parentNode,e))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},d(t){p(r,t),t&&m(e)}}}function te(t){let e,n=t[3],r=[];for(let e=0;e<n.length;e+=1)r[e]=ne(Jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=v()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);f(t,e,n)},p(t,o){if(72&o){let l;for(n=t[3],l=0;l<n.length;l+=1){const s=Jt(t,n,l);r[l]?r[l].p(s,o):(r[l]=ne(s),r[l].c(),r[l].m(e.parentNode,e))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},d(t){p(r,t),t&&m(e)}}}function ee(t){let e,n,r,o,l,s=(t[14].name||"")+"";return{c(){e=d("div"),n=d("span"),r=g(s),o=h(),x(n,"class","name svelte-1m3o3r3"),x(e,"class","other svelte-1m3o3r3"),x(e,"style",l=t[6](t[14].color,t[13]))},m(t,l){f(t,e,l),a(e,n),a(n,r),a(e,o)},p(t,n){8&n&&s!==(s=(t[14].name||"")+"")&&b(r,s),8&n&&l!==(l=t[6](t[14].color,t[13]))&&x(e,"style",l)},d(t){t&&m(e)}}}function ne(t){let e,n;return{c(){e=d("div"),x(e,"class","other svelte-1m3o3r3"),x(e,"style",n=t[6](t[11].color,t[13]))},m(t,n){f(t,e,n)},p(t,r){8&r&&n!==(n=t[6](t[11].color,t[13]))&&x(e,"style",n)},d(t){t&&m(e)}}}function re(t){let e;return{c(){e=g("Next player")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function oe(e){let n;return{c(){n=g("Hello!")},m(t,e){f(t,n,e)},p:t,d(t){t&&m(n)}}}function le(t){let e,n,r;return{c(){e=g("Hello, "),n=g(t[0]),r=g("!")},m(t,o){f(t,e,o),f(t,n,o),f(t,r,o)},p(t,e){1&e&&b(n,t[0])},d(t){t&&m(e),t&&m(n),t&&m(r)}}}function se(t){let e;return{c(){e=g("Reveal Role")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function ce(t){let e,n,r,o;const l=[Qt,Kt],s=[];function c(t,e){return"preReveal"===t[4]?0:"reveal"===t[4]?1:-1}return~(n=c(t))&&(r=s[n]=l[n](t)),{c(){e=d("div"),r&&r.c(),x(e,"class","container svelte-1m3o3r3")},m(t,r){f(t,e,r),~n&&s[n].m(e,null),o=!0},p(t,[o]){let i=n;n=c(t),n===i?~n&&s[n].p(t,o):(r&&(Y(),B(s[i],1,1,(()=>{s[i]=null})),X()),~n?(r=s[n],r?r.p(t,o):(r=s[n]=l[n](t),r.c()),F(r,1),r.m(e,null)):r=null)},i(t){o||(F(r),o=!0)},o(t){B(r),o=!1},d(t){t&&m(e),~n&&s[n].d()}}}const ie=t=>"impostor"===t.role;function ue(t,e,n){let{name:r}=e,{role:o}=e,{color:l}=e,{others:s}=e;const c=[11,22,30,35,39],i=T();let u,a="preReveal";return t.$$set=t=>{"name"in t&&n(0,r=t.name),"role"in t&&n(1,o=t.role),"color"in t&&n(2,l=t.color),"others"in t&&n(3,s=t.others)},t.$$.update=()=>{8&t.$$.dirty&&n(5,u=s.filter((t=>"impostor"===t.role)).length),16&t.$$.dirty&&"reveal"===a&&at("revealSound")},[r,o,l,s,a,u,function(t,e){return e%2==0?`\n        top: ${50-(e/2+1)}%; left: ${50-c[e/2]}%; \n        transform: translateX(-50%) translateY(-50%) scale(${1-(e/2+1)/8}); \n        background-image: url(img/players/${Z[t]}.png); \n        filter: brightness(${100-10*(e/2+1)}%);\n        z-index: ${10-e};`:`\n        top: ${50-(e+1)/2}%; left: ${47+c[(e+1)/2-1]}%; \n        transform: translateX(-50%) translateY(-50%) scaleX(-1) scale(${1-(e/2+1)/8}); \n        background-image: url(img/players/${Z[t]}.png); \n        filter: brightness(${100-10*((e+1)/2-1)}%);\n        z-index: ${10-e};`},function(){n(4,a="reveal")},function(){n(4,a="preReveal"),i("finished")}]}class ae extends W{constructor(t){super(),Q(this,t,ue,ce,s,{name:0,role:1,color:2,others:3})}}function fe(e){let n;return{c(){n=d("p"),n.textContent="Loading...",x(n,"class","svelte-xdf0ma")},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}function me(t){let n,r;const o=[t[2][t[1]],{others:t[2].filter(t[3])}];let l={};for(let t=0;t<o.length;t+=1)l=e(l,o[t]);return n=new ae({props:l}),n.$on("finished",t[4]),{c(){V(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p(t,e){const r=6&e?function(t,e){const n={},r={},o={$$scope:1};let l=t.length;for(;l--;){const s=t[l],c=e[l];if(c){for(const t in s)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[l]=c}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}(o,[(l=t[2][t[1]],"object"==typeof l&&null!==l?l:{}),{others:t[2].filter(t[3])}]):{};var l;n.$set(r)},i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){J(n,t)}}}function pe(t){let e,n,r,o;const l=[me,fe],s=[];function c(t,e){return"revealing"===t[0]?0:1}return n=c(t),r=s[n]=l[n](t),{c(){e=d("div"),r.c(),x(e,"class","svelte-xdf0ma")},m(t,r){f(t,e,r),s[n].m(e,null),o=!0},p(t,[o]){let i=n;n=c(t),n===i?s[n].p(t,o):(Y(),B(s[i],1,1,(()=>{s[i]=null})),X(),r=s[n],r?r.p(t,o):(r=s[n]=l[n](t),r.c()),F(r,1),r.m(e,null))},i(t){o||(F(r),o=!0)},o(t){B(r),o=!1},d(t){t&&m(e),s[n].d()}}}function de(t,e,n){let r;c(t,Et,(t=>n(5,r=t)));let o=function(t,e="default"){let n,r;if("default"===e){const e=t.length>=7?2:1;return n="crewmate",r={impostor:et(nt(0,t.length-1),e)},t.map(((t,e)=>{var n,o;return Object.assign(Object.assign({},t),{role:(null===(o=null===(n=Object.entries(r).filter((([t,n])=>n.includes(e))))||void 0===n?void 0:n[0])||void 0===o?void 0:o[0])||"crewmate"})}))}return[]}(r.players,"default");const l=T();let s="revealing",i=0;return t.$$.update=()=>{1&t.$$.dirty&&"postreveal"===s&&l("finished")},[s,i,o,t=>t.color!==o[i].color,()=>{i>=o.length-1?n(0,s="postreveal"):n(1,i++,i)}]}class $e extends W{constructor(t){super(),Q(this,t,de,pe,s,{})}}function ge(e){let n,r;return n=new $e({}),n.$on("finished",e[2]),{c(){V(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){J(n,t)}}}function he(e){let n,r;return n=new Vt({}),n.$on("submit",e[1]),{c(){V(n.$$.fragment)},m(t,e){D(n,t,e),r=!0},p:t,i(t){r||(F(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){J(n,t)}}}function ve(t){let e,n,r,o;const l=[he,ge],s=[];function c(t,e){return"options"===t[0]?0:1}return n=c(t),r=s[n]=l[n](t),{c(){e=d("main"),r.c(),x(e,"class","svelte-jli6qf")},m(t,r){f(t,e,r),s[n].m(e,null),o=!0},p(t,[o]){let i=n;n=c(t),n===i?s[n].p(t,o):(Y(),B(s[i],1,1,(()=>{s[i]=null})),X(),r=s[n],r?r.p(t,o):(r=s[n]=l[n](t),r.c()),F(r,1),r.m(e,null))},i(t){o||(F(r),o=!0)},o(t){B(r),o=!1},d(t){t&&m(e),s[n].d()}}}function ye(t,e,n){let r="options";return[r,()=>{n(0,r="reveal")},()=>{n(0,r="options")}]}return new class extends W{constructor(t){super(),Q(this,t,ye,ve,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map