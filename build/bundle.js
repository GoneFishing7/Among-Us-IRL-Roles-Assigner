var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,e,r){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(e,r))}function s(t,n,e,r){return t[1]&&r?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](r(n))):e.ctx}function i(t,n,e,r,l,o,c){const i=function(t,n,e,r){if(t[2]&&r){const l=t[2](r(e));if(void 0===n.dirty)return l;if("object"==typeof l){const t=[],e=Math.max(n.dirty.length,l.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|l[r];return t}return n.dirty|l}return n.dirty}(n,r,l,o);if(i){const l=s(n,e,r,c);t.p(l,i)}}function u(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function b(t,n){t.value=null==n?"":n}function x(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function w(t,n,e){t.classList[e?"add":"remove"](n)}let k;function M(t){k=t}function _(){if(!k)throw new Error("Function called outside component initialization");return k}function j(){const t=_();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const l=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach((n=>{n.call(t,l)}))}}}function z(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const E=[],O=[],A=[],C=[],R=Promise.resolve();let S=!1;function N(t){A.push(t)}let q=!1;const L=new Set;function F(){if(!q){q=!0;do{for(let t=0;t<E.length;t+=1){const n=E[t];M(n),P(n.$$)}for(M(null),E.length=0;O.length;)O.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];L.has(n)||(L.add(n),n())}A.length=0}while(E.length);for(;C.length;)C.pop()();S=!1,q=!1,L.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const T=new Set;let H;function U(){H={r:0,c:[],p:H}}function B(){H.r||r(H.c),H=H.p}function X(t,n){t&&t.i&&(T.delete(t),t.i(n))}function Y(t,n,e,r){if(t&&t.o){if(T.has(t))return;T.add(t),H.c.push((()=>{T.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function D(t,n){Y(t,1,1,(()=>{n.delete(t.key)}))}function G(t){t&&t.c()}function I(t,e,o){const{fragment:c,on_mount:s,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,o),N((()=>{const e=s.map(n).filter(l);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(N)}function J(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(E.push(t),S||(S=!0,R.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,l,o,c,s,i,u=[-1]){const a=k;M(n);const m=l.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=o?o(n,m,((t,e,...r)=>{const l=r.length?r[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=l)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](l),p&&K(n,t)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();l.intro&&X(n.$$.fragment),I(n,l.target,l.anchor),F()}M(a)}class V{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W=[];const Z=function(n,e=t){let r;const l=[];function c(t){if(o(n,t)&&(n=t,r)){const t=!W.length;for(let t=0;t<l.length;t+=1){const e=l[t];e[1](),W.push(e,n)}if(t){for(let t=0;t<W.length;t+=2)W[t][0](W[t+1]);W.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(o,s=t){const i=[o,s];return l.push(i),1===l.length&&(r=e(c)||t),o(n),()=>{const t=l.indexOf(i);-1!==t&&l.splice(t,1),0===l.length&&(r(),r=null)}}}}({players:new Array(5).fill({name:""}).map((()=>({name:""}))),gameMode:"default"});function tt(t){let n,e,l,o;const c=t[6].default,u=function(t,n,e,r){if(t){const l=s(t,n,e,r);return t[0](l)}}(c,t,t[5],null);return{c(){n=d("button"),u&&u.c(),v(n,"class","svelte-9kzc7g"),w(n,"center",t[2]),w(n,"small",t[0]),w(n,"no-outline",t[1]),w(n,"bottom-right",t[3]),w(n,"small-cursive",t[4])},m(r,c){a(r,n,c),u&&u.m(n,null),e=!0,l||(o=[h(n,"click",t[7]),h(n,"mouseenter",t[8])],l=!0)},p(t,[e]){u&&u.p&&32&e&&i(u,c,t,t[5],e,null,null),4&e&&w(n,"center",t[2]),1&e&&w(n,"small",t[0]),2&e&&w(n,"no-outline",t[1]),8&e&&w(n,"bottom-right",t[3]),16&e&&w(n,"small-cursive",t[4])},i(t){e||(X(u,t),e=!0)},o(t){Y(u,t),e=!1},d(t){t&&f(n),u&&u.d(t),l=!1,r(o)}}}function nt(t,n,e){let{$$slots:r={},$$scope:l}=n,{small:o=!1}=n,{noOutline:c=!1}=n,{center:s=!1}=n,{bottomRight:i=!1}=n,{smallCursive:u=!1}=n;return t.$$set=t=>{"small"in t&&e(0,o=t.small),"noOutline"in t&&e(1,c=t.noOutline),"center"in t&&e(2,s=t.center),"bottomRight"in t&&e(3,i=t.bottomRight),"smallCursive"in t&&e(4,u=t.smallCursive),"$$scope"in t&&e(5,l=t.$$scope)},[o,c,s,i,u,l,r,function(n){z(t,n)},function(n){z(t,n)}]}class et extends V{constructor(t){super(),Q(this,t,nt,tt,o,{small:0,noOutline:1,center:2,bottomRight:3,smallCursive:4})}}function rt(n){let e,r,l;return{c(){e=d("input"),v(e,"type","text"),v(e,"class","svelte-1lqpb6n"),w(e,"small",n[1])},m(t,o){a(t,e,o),b(e,n[0]),r||(l=h(e,"input",n[2]),r=!0)},p(t,[n]){1&n&&e.value!==t[0]&&b(e,t[0]),2&n&&w(e,"small",t[1])},i:t,o:t,d(t){t&&f(e),r=!1,l()}}}function lt(t,n,e){let{small:r=!1}=n,{value:l}=n;return t.$$set=t=>{"small"in t&&e(1,r=t.small),"value"in t&&e(0,l=t.value)},[l,r,function(){l=this.value,e(0,l)}]}class ot extends V{constructor(t){super(),Q(this,t,lt,rt,o,{small:1,value:0})}}function ct(t,n,e){const r=t.slice();return r[5]=n[e].name,r[6]=n,r[7]=e,r}function st(t){let n;return{c(){n=$("Add Player")},m(t,e){a(t,n,e)},d(t){t&&f(n)}}}function it(t){let n;return{c(){n=$("X")},m(t,e){a(t,n,e)},d(t){t&&f(n)}}}function ut(t,n){let e,r,l,o,c,s,i;function m(t){n[3].call(null,t,n[5],n[6],n[7])}let p={small:!0};return void 0!==n[5]&&(p.value=n[5]),r=new ot({props:p}),O.push((()=>function(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}(r,"value",m))),c=new et({props:{noOutline:!0,smallCursive:!0,$$slots:{default:[it]},$$scope:{ctx:n}}}),c.$on("click",(function(){return n[4](n[7])})),{key:t,first:null,c(){e=d("div"),G(r.$$.fragment),o=g(),G(c.$$.fragment),s=g(),v(e,"class","row svelte-2v4616"),this.first=e},m(t,n){a(t,e,n),I(r,e,null),u(e,o),I(c,e,null),u(e,s),i=!0},p(t,e){n=t;const o={};var s;!l&&1&e&&(l=!0,o.value=n[5],s=()=>l=!1,C.push(s)),r.$set(o);const i={};256&e&&(i.$$scope={dirty:e,ctx:n}),c.$set(i)},i(t){i||(X(r.$$.fragment,t),X(c.$$.fragment,t),i=!0)},o(t){Y(r.$$.fragment,t),Y(c.$$.fragment,t),i=!1},d(t){t&&f(e),J(r),J(c)}}}function at(t){let n,e,r,l,o=[],c=new Map;e=new et({props:{center:!0,smallCursive:!0,$$slots:{default:[st]},$$scope:{ctx:t}}}),e.$on("click",t[1]);let s=t[0].players;const i=t=>t[7];for(let n=0;n<s.length;n+=1){let e=ct(t,s,n),r=i(e);c.set(r,o[n]=ut(r,e))}return{c(){n=d("div"),G(e.$$.fragment),r=g();for(let t=0;t<o.length;t+=1)o[t].c();v(n,"class","col svelte-2v4616")},m(t,c){a(t,n,c),I(e,n,null),u(n,r);for(let t=0;t<o.length;t+=1)o[t].m(n,null);l=!0},p(t,[r]){const l={};if(256&r&&(l.$$scope={dirty:r,ctx:t}),e.$set(l),5&r){const e=t[0].players;U(),o=function(t,n,e,r,l,o,c,s,i,u,a,f){let m=t.length,d=o.length,p=m;const $={};for(;p--;)$[t[p].key]=p;const g=[],h=new Map,v=new Map;for(p=d;p--;){const t=f(l,o,p),s=e(t);let i=c.get(s);i?r&&i.p(t,n):(i=u(s,t),i.c()),h.set(s,g[p]=i),s in $&&v.set(s,Math.abs(p-$[s]))}const y=new Set,b=new Set;function x(t){X(t,1),t.m(s,a),c.set(t.key,t),a=t.first,d--}for(;m&&d;){const n=g[d-1],e=t[m-1],r=n.key,l=e.key;n===e?(a=n.first,m--,d--):h.has(l)?!c.has(r)||y.has(r)?x(n):b.has(l)?m--:v.get(r)>v.get(l)?(b.add(r),x(n)):(y.add(l),m--):(i(e,c),m--)}for(;m--;){const n=t[m];h.has(n.key)||i(n,c)}for(;d;)x(g[d-1]);return g}(o,r,i,1,t,e,c,n,D,ut,null,ct),B()}},i(t){if(!l){X(e.$$.fragment,t);for(let t=0;t<s.length;t+=1)X(o[t]);l=!0}},o(t){Y(e.$$.fragment,t);for(let t=0;t<o.length;t+=1)Y(o[t]);l=!1},d(t){t&&f(n),J(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function ft(t,n,e){let r;function l(t){r.players.length<=3||Z.update((n=>Object.assign(Object.assign({},n),{players:[...n.players.slice(0,t),...n.players.slice(t+1)]})))}c(t,Z,(t=>e(0,r=t)));return t.$$.update=()=>{1&t.$$.dirty&&console.log(r)},[r,function(){r.players.length>=10||Z.update((t=>Object.assign(Object.assign({},t),{players:[...t.players,{name:""}]})))},l,function(t,n,e,l){e[l].name=t,Z.set(r)},t=>{l(t)}]}class mt extends V{constructor(t){super(),Q(this,t,ft,at,o,{})}}function dt(t,n,e){const r=t.slice();return r[3]=n[e],r}function pt(t,n,e){const r=t.slice();return r[6]=n[e],r}function $t(t){let n,e,r,l;return{c(){n=d("span"),e=p("svg"),r=p("circle"),l=g(),v(r,"cx","5"),v(r,"cy","5"),v(r,"r","4"),v(r,"stroke","white"),v(r,"fill","white"),v(e,"width","10"),v(e,"height","10"),x(n,"left",t[6].x+"%"),x(n,"top",t[6].y+"%"),x(n,"transform","scale("+t[6].z+")"),v(n,"class","svelte-udu2is")},m(t,o){a(t,n,o),u(n,e),u(e,r),u(n,l)},p(t,e){1&e&&x(n,"left",t[6].x+"%"),1&e&&x(n,"top",t[6].y+"%"),1&e&&x(n,"transform","scale("+t[6].z+")")},d(t){t&&f(n)}}}function gt(t){let n;return{c(){n=d("span"),v(n,"class","floater svelte-udu2is"),x(n,"left",t[3].x+"%"),x(n,"top",t[3].y+"%"),x(n,"transform","scale("+t[3].z+") rotate("+t[3].r+"deg)"),x(n,"background-image","url(img/players/"+t[3].c+".png)"),x(n,"background-size","contain")},m(t,e){a(t,n,e)},p(t,e){2&e&&x(n,"left",t[3].x+"%"),2&e&&x(n,"top",t[3].y+"%"),2&e&&x(n,"transform","scale("+t[3].z+") rotate("+t[3].r+"deg)"),2&e&&x(n,"background-image","url(img/players/"+t[3].c+".png)")},d(t){t&&f(n)}}}function ht(n){let e,r,l,o,c=n[0],s=[];for(let t=0;t<c.length;t+=1)s[t]=$t(pt(n,c,t));let i=n[1],p=[];for(let t=0;t<i.length;t+=1)p[t]=gt(dt(n,i,t));return{c(){e=d("div"),r=d("div");for(let t=0;t<s.length;t+=1)s[t].c();l=g(),o=d("div");for(let t=0;t<p.length;t+=1)p[t].c();v(r,"class","stars"),v(o,"class","floaters"),v(e,"class","background svelte-udu2is")},m(t,n){a(t,e,n),u(e,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null);u(e,l),u(e,o);for(let t=0;t<p.length;t+=1)p[t].m(o,null)},p(t,[n]){if(1&n){let e;for(c=t[0],e=0;e<c.length;e+=1){const l=pt(t,c,e);s[e]?s[e].p(l,n):(s[e]=$t(l),s[e].c(),s[e].m(r,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=c.length}if(2&n){let e;for(i=t[1],e=0;e<i.length;e+=1){const r=dt(t,i,e);p[e]?p[e].p(r,n):(p[e]=gt(r),p[e].c(),p[e].m(o,null))}for(;e<p.length;e+=1)p[e].d(1);p.length=i.length}},i:t,o:t,d(t){t&&f(e),m(s,t),m(p,t)}}}function vt(t,n,e){const r=["black","blue","brown","cyan","green","lime","orange","pink","purple","red","white","yellow"];let l=new Array(100).fill({x:0,y:0,z:0}).map(((t,n)=>({x:200*Math.random()-100,y:100*Math.random(),z:.1+1*Math.random()}))).sort(((t,n)=>t.z-n.z)),o=new Array(10).fill({x:0,y:0,z:0,r:0,t:0,c:""}).map((()=>({x:200*Math.random()-100,y:100*Math.random(),z:2*Math.random()+.1,r:360*Math.random()-180,t:90*Math.random()-45,c:r[Math.floor(Math.random()*r.length)]}))).sort(((t,n)=>t.z-n.z));var c;return c=()=>{let t;return function n(){t=requestAnimationFrame(n),e(0,l=l.map((t=>(t.x+=.6*t.z,t.x>120&&(t.x=-20),t)))),e(1,o=o.map((t=>(t.x+=.3*t.z,t.r+=.1*t.t,t.x>120&&(t=Object.assign(Object.assign({},t),{x:-20,y:100*Math.random(),r:360*Math.random()-180,t:90*Math.random()-45,c:r[Math.floor(Math.random()*r.length)]})),t))))}(),()=>cancelAnimationFrame(t)},_().$$.on_mount.push(c),[l,o]}class yt extends V{constructor(t){super(),Q(this,t,vt,ht,o,{})}}function bt(t){let n;return{c(){n=$("Then continue")},m(t,e){a(t,n,e)},d(t){t&&f(n)}}}function xt(t){let n,e,r,l,o,c,s,i,m;return l=new yt({}),c=new mt({}),i=new et({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),i.$on("click",t[0]),{c(){n=d("div"),e=d("div"),e.textContent="Enter the names of each player here:",r=g(),G(l.$$.fragment),o=g(),G(c.$$.fragment),s=g(),G(i.$$.fragment),v(n,"class","main svelte-rzrsii")},m(t,f){a(t,n,f),u(n,e),u(n,r),I(l,n,null),u(n,o),I(c,n,null),u(n,s),I(i,n,null),m=!0},p(t,[n]){const e={};4&n&&(e.$$scope={dirty:n,ctx:t}),i.$set(e)},i(t){m||(X(l.$$.fragment,t),X(c.$$.fragment,t),X(i.$$.fragment,t),m=!0)},o(t){Y(l.$$.fragment,t),Y(c.$$.fragment,t),Y(i.$$.fragment,t),m=!1},d(t){t&&f(n),J(l),J(c),J(i)}}}function wt(t){const n=j();return[function(){n("submit")}]}class kt extends V{constructor(t){super(),Q(this,t,wt,xt,o,{})}}function Mt(t,n){var e=new Array(n),r=t.length,l=new Array(r);if(n>r)throw new RangeError("getRandom: more elements taken than available");for(;n--;){var o=Math.floor(Math.random()*r);e[n]=t[o in l?l[o]:o],l[o]=--r in l?l[r]:r}return e}function _t(t){let n,e,r,l,o,c,s,i,m,p,h,b=t[1].slice(0,1).toUpperCase()+t[1].slice(1)+"";function w(t,n){return t[0]?Et:zt}let k=w(t),M=k(t);return p=new et({props:{bottomRight:!0,$$slots:{default:[Ot]},$$scope:{ctx:t}}}),p.$on("click",t[4]),{c(){n=d("div"),e=d("div"),r=$(b),o=g(),c=d("span"),s=d("div"),M.c(),m=g(),G(p.$$.fragment),v(e,"class",l="role "+t[1]+" svelte-1jbilnf"),v(s,"class","svelte-1jbilnf"),v(c,"class","player svelte-1jbilnf"),x(c,"background-image","url(img/players/white.png)"),v(n,"class",i="reveal "+t[1]+" svelte-1jbilnf")},m(t,l){a(t,n,l),u(n,e),u(e,r),u(n,o),u(n,c),u(c,s),M.m(s,null),a(t,m,l),I(p,t,l),h=!0},p(t,o){(!h||2&o)&&b!==(b=t[1].slice(0,1).toUpperCase()+t[1].slice(1)+"")&&y(r,b),(!h||2&o&&l!==(l="role "+t[1]+" svelte-1jbilnf"))&&v(e,"class",l),k===(k=w(t))&&M?M.p(t,o):(M.d(1),M=k(t),M&&(M.c(),M.m(s,null))),(!h||2&o&&i!==(i="reveal "+t[1]+" svelte-1jbilnf"))&&v(n,"class",i);const c={};64&o&&(c.$$scope={dirty:o,ctx:t}),p.$set(c)},i(t){h||(X(p.$$.fragment,t),h=!0)},o(t){Y(p.$$.fragment,t),h=!1},d(t){t&&f(n),M.d(),t&&f(m),J(p,t)}}}function jt(t){let n,e,r,l;function o(t,n){return t[0]?Ct:At}let c=o(t),s=c(t);return r=new et({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),r.$on("click",t[3]),{c(){n=d("div"),s.c(),e=g(),G(r.$$.fragment)},m(t,o){a(t,n,o),s.m(n,null),a(t,e,o),I(r,t,o),l=!0},p(t,e){c===(c=o(t))&&s?s.p(t,e):(s.d(1),s=c(t),s&&(s.c(),s.m(n,null)));const l={};64&e&&(l.$$scope={dirty:e,ctx:t}),r.$set(l)},i(t){l||(X(r.$$.fragment,t),l=!0)},o(t){Y(r.$$.fragment,t),l=!1},d(t){t&&f(n),s.d(),t&&f(e),J(r,t)}}}function zt(n){let e;return{c(){e=$("You")},m(t,n){a(t,e,n)},p:t,d(t){t&&f(e)}}}function Et(t){let n;return{c(){n=$(t[0])},m(t,e){a(t,n,e)},p(t,e){1&e&&y(n,t[0])},d(t){t&&f(n)}}}function Ot(t){let n;return{c(){n=$("Next player")},m(t,e){a(t,n,e)},d(t){t&&f(n)}}}function At(n){let e;return{c(){e=$("Hello!")},m(t,n){a(t,e,n)},p:t,d(t){t&&f(e)}}}function Ct(t){let n,e,r;return{c(){n=$("Hello, "),e=$(t[0]),r=$("!")},m(t,l){a(t,n,l),a(t,e,l),a(t,r,l)},p(t,n){1&n&&y(e,t[0])},d(t){t&&f(n),t&&f(e),t&&f(r)}}}function Rt(t){let n;return{c(){n=$("Reveal Role")},m(t,e){a(t,n,e)},d(t){t&&f(n)}}}function St(t){let n,e,r,l;const o=[jt,_t],c=[];function s(t,n){return"preReveal"===t[2]?0:"reveal"===t[2]?1:-1}return~(e=s(t))&&(r=c[e]=o[e](t)),{c(){n=d("div"),r&&r.c(),v(n,"class","container svelte-1jbilnf")},m(t,r){a(t,n,r),~e&&c[e].m(n,null),l=!0},p(t,[l]){let i=e;e=s(t),e===i?~e&&c[e].p(t,l):(r&&(U(),Y(c[i],1,1,(()=>{c[i]=null})),B()),~e?(r=c[e],r?r.p(t,l):(r=c[e]=o[e](t),r.c()),X(r,1),r.m(n,null)):r=null)},i(t){l||(X(r),l=!0)},o(t){Y(r),l=!1},d(t){t&&f(n),~e&&c[e].d()}}}function Nt(t,n,e){let{name:r}=n,{role:l}=n;const o=j();let c="preReveal";return t.$$set=t=>{"name"in t&&e(0,r=t.name),"role"in t&&e(1,l=t.role)},t.$$.update=()=>{4&t.$$.dirty&&"reveal"===c&&new Audio(`audio/${"revealSound"}.mp3`).play()},[r,l,c,function(){e(2,c="reveal")},function(){e(2,c="preReveal"),o("finished")}]}class qt extends V{constructor(t){super(),Q(this,t,Nt,St,o,{name:0,role:1})}}function Lt(n){let e;return{c(){e=d("p"),e.textContent="Loading...",v(e,"class","svelte-xdf0ma")},m(t,n){a(t,e,n)},p:t,i:t,o:t,d(t){t&&f(e)}}}function Ft(t){let n,e;return n=new qt({props:{name:t[2][t[1]].name,role:t[2][t[1]].role}}),n.$on("finished",t[3]),{c(){G(n.$$.fragment)},m(t,r){I(n,t,r),e=!0},p(t,e){const r={};2&e&&(r.name=t[2][t[1]].name),2&e&&(r.role=t[2][t[1]].role),n.$set(r)},i(t){e||(X(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}function Pt(t){let n,e,r,l;const o=[Ft,Lt],c=[];function s(t,n){return"revealing"===t[0]?0:1}return e=s(t),r=c[e]=o[e](t),{c(){n=d("div"),r.c(),v(n,"class","svelte-xdf0ma")},m(t,r){a(t,n,r),c[e].m(n,null),l=!0},p(t,[l]){let i=e;e=s(t),e===i?c[e].p(t,l):(U(),Y(c[i],1,1,(()=>{c[i]=null})),B(),r=c[e],r?r.p(t,l):(r=c[e]=o[e](t),r.c()),X(r,1),r.m(n,null))},i(t){l||(X(r),l=!0)},o(t){Y(r),l=!1},d(t){t&&f(n),c[e].d()}}}function Tt(t,n,e){let r;c(t,Z,(t=>e(4,r=t)));let l=function(t,n="default"){let e,r;if("default"===n){const n=t.length>=7?2:1;return e="crewmate",r={impostor:Mt((l=0,o=t.length-1,c=l,[...Array(o-c+1).keys()].map((t=>t+c))),n)},t.map(((t,n)=>{var e,l;return{name:t.name,role:(null===(l=null===(e=Object.entries(r).filter((([t,e])=>e.includes(n))))||void 0===e?void 0:e[0])||void 0===l?void 0:l[0])||"crewmate"}}))}var l,o,c;return[]}(r.players,"default");const o=j();let s="revealing",i=0;return t.$$.update=()=>{1&t.$$.dirty&&"postreveal"===s&&o("finished")},[s,i,l,()=>{i>=l.length-1?e(0,s="postreveal"):e(1,i++,i)}]}class Ht extends V{constructor(t){super(),Q(this,t,Tt,Pt,o,{})}}function Ut(n){let e,r;return e=new Ht({}),e.$on("finished",n[2]),{c(){G(e.$$.fragment)},m(t,n){I(e,t,n),r=!0},p:t,i(t){r||(X(e.$$.fragment,t),r=!0)},o(t){Y(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Bt(n){let e,r;return e=new kt({}),e.$on("submit",n[1]),{c(){G(e.$$.fragment)},m(t,n){I(e,t,n),r=!0},p:t,i(t){r||(X(e.$$.fragment,t),r=!0)},o(t){Y(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Xt(t){let n,e,r,l;const o=[Bt,Ut],c=[];function s(t,n){return"options"===t[0]?0:1}return e=s(t),r=c[e]=o[e](t),{c(){n=d("main"),r.c(),v(n,"class","svelte-jli6qf")},m(t,r){a(t,n,r),c[e].m(n,null),l=!0},p(t,[l]){let i=e;e=s(t),e===i?c[e].p(t,l):(U(),Y(c[i],1,1,(()=>{c[i]=null})),B(),r=c[e],r?r.p(t,l):(r=c[e]=o[e](t),r.c()),X(r,1),r.m(n,null))},i(t){l||(X(r),l=!0)},o(t){Y(r),l=!1},d(t){t&&f(n),c[e].d()}}}function Yt(t,n,e){let r="options";return[r,()=>{e(0,r="reveal")},()=>{e(0,r="options")}]}return new class extends V{constructor(t){super(),Q(this,t,Yt,Xt,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
