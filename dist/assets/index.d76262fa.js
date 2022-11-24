import{w as de,T as be,W as pe,S as _e,G as we,P as xe,O as ve,A as ke,D as ye,a as $e,b as A,i as E,s as C,e as d,c as k,n as L,d as y,o as he,f as Le,g as W,h as $,j as h,t as G,k as u,l as F,m as J,p as K,q as b,r as O,u as q,v as U,x as v,y as R,z as j,B as z,C as V}from"./vendor.c3f7df06.js";const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Me();const X=de(null),Z=de([300,0,0]);window.THREE=be;let H,T,I,B,ge=[];Z.subscribe(l=>ge=l);function Se(l){console.log("init"),I=new pe({antialias:!0,canvas:l}),H=new _e;let t=new we;T=new xe(40,window.innerWidth/window.innerHeight,1,5e3),T.rotation.y=45/180*Math.PI,T.position.set(...ge),T.lookAt(H.position),B=new ve(T,I.domElement),B.enableZoom=!1,B.autoRotate=!0,B.rotateSpeed=.5;let n=new ke(4210752,100);H.add(n);let e=new ye(16777215,100);e.position.set(0,1,0),e.castShadow=!0,H.add(e);let i=new $e(12895428,10);i.position.set(0,300,500),H.add(i),t.load("scene.gltf",function(o){o.scene.children[0].scale.set(.2,.2,.2),H.add(o.scene)}),me()}function me(){let{x:l,y:t,z:n}=T.position;T.position.y=0,Z.set([l,t,n]),B.update(),I.render(H,T)}const Y=()=>{console.log("resize"),I.setSize(window.innerWidth,window.innerHeight),T.aspect=window.innerWidth/window.innerHeight,T.updateProjectionMatrix()},Te=l=>{console.log("createScene"),Se(l),Y(),I.setAnimationLoop(me),window.addEventListener("resize",Y)};function He(l){let t;return{c(){t=d("canvas")},m(n,e){k(n,t,e),l[1](t)},p:L,i:L,o:L,d(n){n&&y(t),l[1](null)}}}function Ae(l,t,n){let e;he(async()=>{Te(e)}),Le(async()=>{console.log("onDestroy")});function i(o){W[o?"unshift":"push"](()=>{e=o,n(0,e)})}return[e,i]}class Ee extends A{constructor(t){super();E(this,t,Ae,He,C,{})}}function Ce(l){let t,n,e;return{c(){t=d("div"),t.innerHTML=`<div class="tracking-wide grid justify-center text-gray-400 text-xl font-bold mb-2">Contact:</div> 

	<div class="block uppercase tracking-wide text-orange-500 text-lg font-bold mb-6 px-3">ExequielAntonioB@gmail.com</div>`,n=$(),e=d("div"),e.innerHTML='<div class="py-0 "><a href="https://www.linkedin.com/in/exequiel-bartolomeu-54b7a51b7/"><button class="hover:bg-gray-600 duration-300 bg-black mb-3 text-xl font-semibold text-orange-600 ">Linkedin</button></a></div>',h(t,"class","grid justify-center px-6 "),h(e,"class","grid justify-center")},m(i,o){k(i,t,o),k(i,n,o),k(i,e,o)},p:L,i:L,o:L,d(i){i&&y(t),i&&y(n),i&&y(e)}}}class Pe extends A{constructor(t){super();E(this,t,null,Ce,C,{})}}function Oe(l){let t;return{c(){t=d("section"),t.innerHTML=`<div class="container mx-auto flex flex-wrap pb-12 "><h1 class="w-full my-2 text-6xl font-bold leading-tight text-center text-gray-500">Exequiel Bartolomeu</h1> 
		<h2 class="w-full my-2 text-4xl font-bold leading-tight text-center text-orange-600">Fronted Developer</h2></div>`,h(t,"class","bg-black ")},m(n,e){k(n,t,e)},p:L,i:L,o:L,d(n){n&&y(t)}}}function qe(l,t,n){let{header:e=[]}=t;return l.$$set=i=>{"header"in i&&n(0,e=i.header)},l.$$.update=()=>{l.$$.dirty&1&&console.log(e)},[e]}class Re extends A{constructor(t){super();E(this,t,qe,Oe,C,{header:0})}}function ee(l,t,n){const e=l.slice();return e[1]=t[n],e}function te(l){let t,n,e,i=l[1]+"",o,s;return{c(){t=d("div"),n=d("div"),e=d("p"),o=G(i),s=$(),h(e,"class","text-center w-full font-semibold text-xl text-gray-400 px-6"),h(n,"class","flex-1 bg-black"),h(t,"class","w-full flex flex-col flex-grow flex-shrink p-2 rounded-t rounded-b-none ")},m(r,c){k(r,t,c),u(t,n),u(n,e),u(e,o),u(t,s)},p(r,c){c&1&&i!==(i=r[1]+"")&&F(o,i)},d(r){r&&y(t)}}}function je(l){let t,n,e,i,o,s,r=l[0],c=[];for(let a=0;a<r.length;a+=1)c[a]=te(ee(l,r,a));return{c(){t=d("section"),n=d("div"),e=d("h1"),e.textContent="Hobbies",i=$(),o=d("div"),o.innerHTML='<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>',s=$();for(let a=0;a<c.length;a+=1)c[a].c();h(e,"class","w-full my-2 text-5xl font-bold leading-tight text-center text-orange-600"),h(o,"class","w-full mb-4 "),h(n,"class","container mx-auto flex flex-wrap pb-12 "),h(t,"class","bg-black ")},m(a,p){k(a,t,p),u(t,n),u(n,e),u(n,i),u(n,o),u(n,s);for(let f=0;f<c.length;f+=1)c[f].m(n,null)},p(a,[p]){if(p&1){r=a[0];let f;for(f=0;f<r.length;f+=1){const M=ee(a,r,f);c[f]?c[f].p(M,p):(c[f]=te(M),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=r.length}},i:L,o:L,d(a){a&&y(t),J(c,a)}}}function ze(l,t,n){let{hobbies:e=[]}=t;return l.$$set=i=>{"hobbies"in i&&n(0,e=i.hobbies)},[e]}class Be extends A{constructor(t){super();E(this,t,ze,je,C,{hobbies:0})}}function ne(l,t,n){const e=l.slice();return e[1]=t[n],e}function ie(l){let t,n,e,i=l[1]+"",o,s;return{c(){t=d("div"),n=d("div"),e=d("p"),o=G(i),s=$(),h(e,"class","text-center w-full font-semibold text-lg text-gray-400 mt-3 px-6"),h(n,"class","flex-1 bg-black"),h(t,"class","w-full flex flex-col flex-grow flex-shrink p-2 rounded-t rounded-b-none ")},m(r,c){k(r,t,c),u(t,n),u(n,e),u(e,o),u(t,s)},p(r,c){c&1&&i!==(i=r[1]+"")&&F(o,i)},d(r){r&&y(t)}}}function Ie(l){let t,n,e,i,o=l[0],s=[];for(let r=0;r<o.length;r+=1)s[r]=ie(ne(l,o,r));return{c(){t=d("section"),n=d("div"),e=d("h1"),e.textContent="Studies Mechanics",i=$();for(let r=0;r<s.length;r+=1)s[r].c();h(e,"class","w-full my-2 text-5xl font-bold leading-tight text-center text-orange-600"),h(n,"class","container mx-auto flex flex-wrap pb-12"),h(t,"class","bg-black ")},m(r,c){k(r,t,c),u(t,n),u(n,e),u(n,i);for(let a=0;a<s.length;a+=1)s[a].m(n,null)},p(r,[c]){if(c&1){o=r[0];let a;for(a=0;a<o.length;a+=1){const p=ne(r,o,a);s[a]?s[a].p(p,c):(s[a]=ie(p),s[a].c(),s[a].m(n,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=o.length}},i:L,o:L,d(r){r&&y(t),J(s,r)}}}function Ne(l,t,n){let{studiesmechanics:e=[]}=t;return l.$$set=i=>{"studiesmechanics"in i&&n(0,e=i.studiesmechanics)},l.$$.update=()=>{l.$$.dirty&1&&console.log(e)},[e]}class We extends A{constructor(t){super();E(this,t,Ne,Ie,C,{studiesmechanics:0})}}function le(l,t,n){const e=l.slice();return e[1]=t[n],e}function oe(l){let t,n,e,i=l[1]+"",o,s;return{c(){t=d("div"),n=d("div"),e=d("p"),o=G(i),s=$(),h(e,"class","w-full font-semibold text-lg text-gray-400 px-6"),h(n,"class","flex-1 bg-black"),h(t,"class","flex flex-grow flex-shrink p-3 rounded-t rounded-b-none overflow-hidden shadow")},m(r,c){k(r,t,c),u(t,n),u(n,e),u(e,o),u(t,s)},p(r,c){c&1&&i!==(i=r[1]+"")&&F(o,i)},d(r){r&&y(t)}}}function De(l){let t,n,e,i,o,s,r=l[0],c=[];for(let a=0;a<r.length;a+=1)c[a]=oe(le(l,r,a));return{c(){t=d("section"),n=d("div"),e=d("h1"),e.textContent="Technologies",i=$(),o=d("div"),o.innerHTML='<div class="h-1 mx-auto gradient w-64 opacity-25 "></div>',s=$();for(let a=0;a<c.length;a+=1)c[a].c();h(e,"class","w-full my-2 text-5xl font-bold leading-tight text-center text-orange-600"),h(o,"class","w-full mb-4"),h(n,"class","container mx-auto flex flex-wrap pb-12"),h(t,"class","bg-black ")},m(a,p){k(a,t,p),u(t,n),u(n,e),u(n,i),u(n,o),u(n,s);for(let f=0;f<c.length;f+=1)c[f].m(n,null)},p(a,[p]){if(p&1){r=a[0];let f;for(f=0;f<r.length;f+=1){const M=le(a,r,f);c[f]?c[f].p(M,p):(c[f]=oe(M),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=r.length}},i:L,o:L,d(a){a&&y(t),J(c,a)}}}function Ge(l,t,n){let{technologies:e=[]}=t;return l.$$set=i=>{"technologies"in i&&n(0,e=i.technologies)},l.$$.update=()=>{l.$$.dirty&1&&console.log(e)},[e]}class Fe extends A{constructor(t){super();E(this,t,Ge,De,C,{technologies:0})}}var Je={name:"exequiel",lastname:"bartolomeu",information:{email:"exequielantoniob@gmail.com"},hobbies:["Car Mechanic","Performance Mechanic","Fan Of The Motor World And Drift Racing"],studiesmechanics:["ATEMA 2018-2019","Group Experience PSA,Grupo VAG,MITSUBISHI MOTORS","Mechanical Workshop Practices 'BLANCO MALBORO"],technologies:["Java Script","React Js","Type Script","Tailwind","CSS","HTML5","Svelte","E2E Testing","Cypress"]};function se(l){let t,n,e=l[1]&&re(l);return{c(){e&&e.c(),t=K()},m(i,o){e&&e.m(i,o),k(i,t,o),n=!0},p(i,o){i[1]?e?(e.p(i,o),o&2&&b(e,1)):(e=re(i),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(z(),v(e,1,1,()=>{e=null}),j())},i(i){n||(b(e),n=!0)},o(i){v(e),n=!1},d(i){e&&e.d(i),i&&y(t)}}}function re(l){let t,n,e;function i(s){l[7](s)}let o={};return l[1]!==void 0&&(o.studiesmechanics=l[1]),t=new We({props:o}),W.push(()=>V(t,"studiesmechanics",i)),{c(){O(t.$$.fragment)},m(s,r){q(t,s,r),e=!0},p(s,r){const c={};!n&&r&2&&(n=!0,c.studiesmechanics=s[1],U(()=>n=!1)),t.$set(c)},i(s){e||(b(t.$$.fragment,s),e=!0)},o(s){v(t.$$.fragment,s),e=!1},d(s){R(t,s)}}}function ce(l){let t,n,e=l[3]&&ae(l);return{c(){e&&e.c(),t=K()},m(i,o){e&&e.m(i,o),k(i,t,o),n=!0},p(i,o){i[3]?e?(e.p(i,o),o&8&&b(e,1)):(e=ae(i),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(z(),v(e,1,1,()=>{e=null}),j())},i(i){n||(b(e),n=!0)},o(i){v(e),n=!1},d(i){e&&e.d(i),i&&y(t)}}}function ae(l){let t,n,e;function i(s){l[8](s)}let o={};return l[3]!==void 0&&(o.technologies=l[3]),t=new Fe({props:o}),W.push(()=>V(t,"technologies",i)),{c(){O(t.$$.fragment)},m(s,r){q(t,s,r),e=!0},p(s,r){const c={};!n&&r&8&&(n=!0,c.technologies=s[3],U(()=>n=!1)),t.$set(c)},i(s){e||(b(t.$$.fragment,s),e=!0)},o(s){v(t.$$.fragment,s),e=!1},d(s){R(t,s)}}}function fe(l){let t,n,e=l[2]&&ue(l);return{c(){e&&e.c(),t=K()},m(i,o){e&&e.m(i,o),k(i,t,o),n=!0},p(i,o){i[2]?e?(e.p(i,o),o&4&&b(e,1)):(e=ue(i),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(z(),v(e,1,1,()=>{e=null}),j())},i(i){n||(b(e),n=!0)},o(i){v(e),n=!1},d(i){e&&e.d(i),i&&y(t)}}}function ue(l){let t,n,e;function i(s){l[9](s)}let o={};return l[2]!==void 0&&(o.hobbies=l[2]),t=new Be({props:o}),W.push(()=>V(t,"hobbies",i)),{c(){O(t.$$.fragment)},m(s,r){q(t,s,r),e=!0},p(s,r){const c={};!n&&r&4&&(n=!0,c.hobbies=s[2],U(()=>n=!1)),t.$set(c)},i(s){e||(b(t.$$.fragment,s),e=!0)},o(s){v(t.$$.fragment,s),e=!1},d(s){R(t,s)}}}function Ke(l){let t,n,e,i,o,s,r,c,a,p,f,M,m,P,Q,D,N;e=new Ee({}),s=new Re({});let _=0<l[0]&&l[0]<120&&se(l),w=121<l[0]&&l[0]<240&&ce(l),x=241<l[0]&&l[0]<360&&fe(l);return P=new Pe({}),{c(){t=d("div"),n=d("div"),O(e.$$.fragment),i=$(),o=d("div"),O(s.$$.fragment),r=$(),c=d("div"),a=d("div"),_&&_.c(),p=$(),w&&w.c(),f=$(),x&&x.c(),M=$(),m=d("footer"),O(P.$$.fragment),Q=$(),D=d("span"),h(n,"class","absolute w-screen h-1/3 grow"),h(o,"class","absolute w-screen h-1/3 grow mt-14"),h(t,"class","flex items-center justify-center w-full relative"),h(a,"class","bg-black"),h(D,"class","text-sm text-gray-500 sm:text-center dark:text-gray-400"),h(m,"class","fixed bottom-0 left-0 z-20 w-full shadow md:justify-between dark:bg-gray-800 dark:border-gray-600"),h(c,"class","relative top-96 mt-24")},m(g,S){k(g,t,S),u(t,n),q(e,n,null),u(t,i),u(t,o),q(s,o,null),k(g,r,S),k(g,c,S),u(c,a),_&&_.m(a,null),u(a,p),w&&w.m(a,null),u(a,f),x&&x.m(a,null),u(c,M),u(c,m),q(P,m,null),u(m,Q),u(m,D),N=!0},p(g,[S]){0<g[0]&&g[0]<120?_?(_.p(g,S),S&1&&b(_,1)):(_=se(g),_.c(),b(_,1),_.m(a,p)):_&&(z(),v(_,1,1,()=>{_=null}),j()),121<g[0]&&g[0]<240?w?(w.p(g,S),S&1&&b(w,1)):(w=ce(g),w.c(),b(w,1),w.m(a,f)):w&&(z(),v(w,1,1,()=>{w=null}),j()),241<g[0]&&g[0]<360?x?(x.p(g,S),S&1&&b(x,1)):(x=fe(g),x.c(),b(x,1),x.m(a,null)):x&&(z(),v(x,1,1,()=>{x=null}),j())},i(g){N||(b(e.$$.fragment,g),b(s.$$.fragment,g),b(_),b(w),b(x),b(P.$$.fragment,g),N=!0)},o(g){v(e.$$.fragment,g),v(s.$$.fragment,g),v(_),v(w),v(x),v(P.$$.fragment,g),N=!1},d(g){g&&y(t),R(e),R(s),g&&y(r),g&&y(c),_&&_.d(),w&&w.d(),x&&x.d(),R(P)}}}function Ue(l,t,n,e){return(180+Math.atan2(e-t,n-l)*180/Math.PI)%360}function Ve(l,t,n){let e=0,i=[],o=[],s=[],r=[],c=[],a=[];Z.subscribe(m=>{console.log(m),n(0,e=Ue(0,0,m[0],m[2]))}),X.subscribe(m=>{n(4,i=m==null?void 0:m.hobbies),n(5,o=m==null?void 0:m.studiesmechanics),n(6,s=m==null?void 0:m.technologies)}),he(async()=>{X.set(Je)});function p(m){r=m,n(1,r),n(5,o)}function f(m){a=m,n(3,a),n(6,s)}function M(m){c=m,n(2,c),n(4,i)}return l.$$.update=()=>{l.$$.dirty&1&&console.log("grados",e),l.$$.dirty&32&&o&&n(1,r=o),l.$$.dirty&16&&i&&n(2,c=i),l.$$.dirty&64&&s&&n(3,a=s)},[e,r,c,a,i,o,s,p,f,M]}class Ze extends A{constructor(t){super();E(this,t,Ve,Ke,C,{})}}new Ze({target:document.getElementById("app")});
