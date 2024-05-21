import{R as m,r as s,h as nt,b as re,W as rt}from"./app-DzJNCemg.js";import{I as ot}from"./InputError-BTLVavbV.js";import{I as at}from"./InputLabel-DiylpYse.js";import{l as Q,s as B,a as N,u as A,b as ce,o as h,U as T,C as x,t as de,y as S,p as lt,f as xe,T as it,c as Re,O as we,d as ut,e as G,q as ee}from"./transition-Cbx_lerg.js";import{T as st}from"./TextInput-DmPXqyFA.js";var ye;let O=(ye=m.useId)!=null?ye:function(){let e=Q(),[t,n]=m.useState(e?()=>B.nextId():null);return N(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Se(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let oe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),ct=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ct||{});function dt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(oe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Le=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Le||{});function ft(e,t=0){var n;return e===((n=Se(e))==null?void 0:n.body)?!1:A(t,{0(){return e.matches(oe)},1(){let r=e;for(;r!==null;){if(r.matches(oe))return!0;r=r.parentElement}return!1}})}var mt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(mt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function C(e){e==null||e.focus({preventScroll:!0})}let pt=["textarea","input"].join(",");function gt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,pt))!=null?n:!1}function vt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let a=o.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?vt(e):e:dt(e);o.length>0&&a.length>1&&(a=a.filter(p=>!o.includes(p))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=a.length,v;do{if(c>=d||c+d<=0)return 0;let p=u+c;if(t&16)p=(p+d)%d;else{if(p<0)return 3;if(p>=d)return 1}v=a[p],v==null||v.focus(f),c+=i}while(v!==l.activeElement);return t&6&&gt(v)&&v.select(),2}function De(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ht(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return De()||ht()}function K(e,t,n){let r=ce(t);s.useEffect(()=>{function o(l){r.current(l)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Fe(e,t,n){let r=ce(t);s.useEffect(()=>{function o(l){r.current(l)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function wt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(a,i){if(!r.current||a.defaultPrevented)return;let u=i(a);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(u)||a.composed&&a.composedPath().includes(d))return}return!ft(u,Le.Loose)&&u.tabIndex!==-1&&a.preventDefault(),t(a,u)}let l=s.useRef(null);K("pointerdown",a=>{var i,u;r.current&&(l.current=((u=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:u[0])||a.target)},!0),K("mousedown",a=>{var i,u;r.current&&(l.current=((u=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:u[0])||a.target)},!0),K("click",a=>{Et()||l.current&&(o(a,()=>l.current),l.current=null)},!0),K("touchend",a=>o(a,()=>a.target instanceof HTMLElement?a.target:null),!0),Fe("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>Se(...e),[...e])}function fe(e,t){let n=s.useRef([]),r=h(e);s.useEffect(()=>{let o=[...n.current];for(let[l,a]of t.entries())if(n.current[l]!==a){let i=r(t,o);return n.current=t,i}},[r,...t])}let yt="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function bt(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return x({ourProps:l,theirProps:o,slot:{},defaultTag:yt,name:"Hidden"})}let ae=T(bt);function $t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let L=[];$t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&L[0]!==t.target&&(L.unshift(t.target),L=L.filter(n=>n!=null&&n.isConnected),L.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Tt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&xt(n)?!1:r}function xt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Ce=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ce||{});function Ne(e,t,n,r){let o=ce(n);s.useEffect(()=>{e=e??window;function l(a){o.current(a)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function Me(e){let t=h(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,de(()=>{n.current&&t()})}),[t])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Rt(){let e=s.useRef(0);return Fe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ae(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let St="div";var Oe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Oe||{});function Pt(e,t){let n=s.useRef(null),r=S(n,t),{initialFocus:o,containers:l,features:a=30,...i}=e;Q()||(a=1);let u=U(n);Ft({ownerDocument:u},!!(a&16));let f=Ct({ownerDocument:u,container:n,initialFocus:o},!!(a&2));Nt({ownerDocument:u,container:n,containers:l,previousActiveElement:f},!!(a&8));let c=Rt(),d=h(b=>{let E=n.current;E&&(P=>P())(()=>{A(c.current,{[H.Forwards]:()=>{X(E,D.First,{skipElements:[b.relatedTarget]})},[H.Backwards]:()=>{X(E,D.Last,{skipElements:[b.relatedTarget]})}})})}),v=lt(),p=s.useRef(!1),$={ref:r,onKeyDown(b){b.key=="Tab"&&(p.current=!0,v.requestAnimationFrame(()=>{p.current=!1}))},onBlur(b){let E=Ae(l);n.current instanceof HTMLElement&&E.add(n.current);let P=b.relatedTarget;P instanceof HTMLElement&&P.dataset.headlessuiFocusGuard!=="true"&&(ke(E,P)||(p.current?X(n.current,A(c.current,{[H.Forwards]:()=>D.Next,[H.Backwards]:()=>D.Previous})|D.WrapAround,{relativeTo:b.target}):b.target instanceof HTMLElement&&C(b.target)))}};return m.createElement(m.Fragment,null,!!(a&4)&&m.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:z.Focusable}),x({ourProps:$,theirProps:i,defaultTag:St,name:"FocusTrap"}),!!(a&4)&&m.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:z.Focusable}))}let Lt=T(Pt),k=Object.assign(Lt,{features:Oe});function Dt(e=!0){let t=s.useRef(L.slice());return fe(([n],[r])=>{r===!0&&n===!1&&de(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=L.slice())},[e,L,t]),h(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ft({ownerDocument:e},t){let n=Dt(t);fe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&C(n())},[t]),Me(()=>{t&&C(n())})}function Ct({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),l=xe();return fe(()=>{if(!r)return;let a=t.current;a&&de(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(a.contains(i)){o.current=i;return}n!=null&&n.current?C(n.current):X(a,D.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Nt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=xe();Ne(e==null?void 0:e.defaultView,"focus",a=>{if(!o||!l.current)return;let i=Ae(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let f=a.target;f&&f instanceof HTMLElement?ke(i,f)?(r.current=f,C(f)):(a.preventDefault(),a.stopPropagation(),C(u)):C(r.current)},!0)}function ke(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ie=s.createContext(!1);function Mt(){return s.useContext(Ie)}function le(e){return m.createElement(Ie.Provider,{value:e.force},e.children)}function At(e){let t=Mt(),n=s.useContext(He),r=U(e),[o,l]=s.useState(()=>{if(!t&&n!==null||B.isServer)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Ot=s.Fragment;function kt(e,t){let n=e,r=s.useRef(null),o=S(it(c=>{r.current=c}),t),l=U(r),a=At(r),[i]=s.useState(()=>{var c;return B.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),u=s.useContext(ie),f=Q();return N(()=>{!a||!i||a.contains(i)||(i.setAttribute("data-headlessui-portal",""),a.appendChild(i))},[a,i]),N(()=>{if(i&&u)return u.register(i)},[u,i]),Me(()=>{var c;!a||!i||(i instanceof Node&&a.contains(i)&&a.removeChild(i),a.childNodes.length<=0&&((c=a.parentElement)==null||c.removeChild(a)))}),f?!a||!i?null:nt.createPortal(x({ourProps:{ref:o},theirProps:n,defaultTag:Ot,name:"Portal"}),i):null}let It=s.Fragment,He=s.createContext(null);function Ht(e,t){let{target:n,...r}=e,o={ref:S(t)};return m.createElement(He.Provider,{value:n},x({ourProps:o,theirProps:r,defaultTag:It,name:"Popover.Group"}))}let ie=s.createContext(null);function Bt(){let e=s.useContext(ie),t=s.useRef([]),n=h(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=h(l=>{let a=t.current.indexOf(l);a!==-1&&t.current.splice(a,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return m.createElement(ie.Provider,{value:o},l)},[o])]}let Ut=T(kt),Wt=T(Ht),ue=Object.assign(Ut,{Group:Wt});function _t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const jt=typeof Object.is=="function"?Object.is:_t,{useState:Yt,useEffect:Vt,useLayoutEffect:qt,useDebugValue:Gt}=re;function Kt(e,t,n){const r=t(),[{inst:o},l]=Yt({inst:{value:r,getSnapshot:t}});return qt(()=>{o.value=r,o.getSnapshot=t,te(o)&&l({inst:o})},[e,r,t]),Vt(()=>(te(o)&&l({inst:o}),e(()=>{te(o)&&l({inst:o})})),[e]),Gt(r),r}function te(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!jt(n,r)}catch{return!0}}function Xt(e,t,n){return t()}const zt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jt=!zt,Qt=Jt?Xt:Kt,Zt="useSyncExternalStore"in re?(e=>e.useSyncExternalStore)(re):Qt;function en(e){return Zt(e.subscribe,e.getSnapshot,e.getSnapshot)}function tn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let a=t[o].call(n,...l);a&&(n=a,r.forEach(i=>i()))}}}function nn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,l=e-o;n.style(r,"paddingRight",`${l}px`)}}}function rn(){return De()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=Re();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,a=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:f}=new URL(u.href),c=e.querySelector(f);c&&!r(c)&&(a=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;l!==u&&window.scrollTo(0,l),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}:{}}function on(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function an(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let F=tn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Re(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:an(n)},o=[rn(),nn(),on()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});F.subscribe(()=>{let e=F.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&F.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&F.dispatch("TEARDOWN",n)}});function ln(e,t,n){let r=en(F),o=e?r.get(e):void 0,l=o?o.count>0:!1;return N(()=>{if(!(!e||!t))return F.dispatch("PUSH",e,n),()=>F.dispatch("POP",e,n)},[t,e]),l}let ne=new Map,I=new Map;function be(e,t=!0){N(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var a;if(!r)return;let i=(a=I.get(r))!=null?a:1;if(i===1?I.delete(r):I.set(r,i-1),i!==1)return;let u=ne.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,ne.delete(r))}let l=(n=I.get(r))!=null?n:0;return I.set(r,l+1),l!==0||(ne.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function un({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),l=U(o),a=h(()=>{var i,u,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((f=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:f.host)||c.some(v=>d.contains(v))||c.push(d));return c});return{resolveContainers:a,contains:h(i=>a().some(u=>u.contains(i))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:m.createElement(ae,{features:z.Hidden,ref:o})},[o,n])}}let me=s.createContext(()=>{});me.displayName="StackContext";var se=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(se||{});function sn(){return s.useContext(me)}function cn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=sn(),a=h((...i)=>{t==null||t(...i),l(...i)});return N(()=>{let i=o===void 0||o===!0;return i&&a(0,n,r),()=>{i&&a(1,n,r)}},[a,n,r,o]),m.createElement(me.Provider,{value:a},e)}let Be=s.createContext(null);function Ue(){let e=s.useContext(Be);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function dn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=h(l=>(t(a=>[...a,l]),()=>t(a=>{let i=a.slice(),u=i.indexOf(l);return u!==-1&&i.splice(u,1),i}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Be.Provider,{value:o},n.children)},[t])]}let fn="p";function mn(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...o}=e,l=Ue(),a=S(t);N(()=>l.register(r),[r,l.register]);let i={ref:a,...l.props,id:r};return x({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:fn,name:l.name||"Description"})}let pn=T(mn),gn=Object.assign(pn,{});var vn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vn||{}),hn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(hn||{});let En={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=s.createContext(null);J.displayName="DialogContext";function W(e){let t=s.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function wn(e,t,n=()=>[document.body]){ln(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function yn(e,t){return A(t.type,En,e,t)}let bn="div",$n=we.RenderStrategy|we.Static;function Tn(e,t){let n=O(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:a,role:i="dialog",__demoMode:u=!1,...f}=e,[c,d]=s.useState(0),v=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(v.current||(v.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let p=ut();o===void 0&&p!==null&&(o=(p&G.Open)===G.Open);let $=s.useRef(null),b=S($,t),E=U($),P=e.hasOwnProperty("open")||p!==null,pe=e.hasOwnProperty("onClose");if(!P&&!pe)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!pe)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let w=o?0:1,[_,We]=s.useReducer(yn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),M=h(()=>l(!1)),ge=h(g=>We({type:0,id:g})),j=Q()?u?!1:w===0:!1,Y=c>1,ve=s.useContext(J)!==null,[_e,je]=Bt(),Ye={get current(){var g;return(g=_.panelRef.current)!=null?g:$.current}},{resolveContainers:Z,mainTreeNodeRef:V,MainTreeNode:Ve}=un({portals:_e,defaultContainers:[Ye]}),qe=Y?"parent":"leaf",he=p!==null?(p&G.Closing)===G.Closing:!1,Ge=ve||he?!1:j,Ke=s.useCallback(()=>{var g,R;return(R=Array.from((g=E==null?void 0:E.querySelectorAll("body > *"))!=null?g:[]).find(y=>y.id==="headlessui-portal-root"?!1:y.contains(V.current)&&y instanceof HTMLElement))!=null?R:null},[V]);be(Ke,Ge);let Xe=Y?!0:j,ze=s.useCallback(()=>{var g,R;return(R=Array.from((g=E==null?void 0:E.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(y=>y.contains(V.current)&&y instanceof HTMLElement))!=null?R:null},[V]);be(ze,Xe),wt(Z,M,!(!j||Y));let Je=!(Y||w!==0);Ne(E==null?void 0:E.defaultView,"keydown",g=>{Je&&(g.defaultPrevented||g.key===Ce.Escape&&(g.preventDefault(),g.stopPropagation(),M()))}),wn(E,!(he||w!==0||ve),Z),s.useEffect(()=>{if(w!==0||!$.current)return;let g=new ResizeObserver(R=>{for(let y of R){let q=y.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&M()}});return g.observe($.current),()=>g.disconnect()},[w,$,M]);let[Qe,Ze]=dn(),et=s.useMemo(()=>[{dialogState:w,close:M,setTitleId:ge},_],[w,_,M,ge]),Ee=s.useMemo(()=>({open:w===0}),[w]),tt={ref:b,id:r,role:i,"aria-modal":w===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Qe};return m.createElement(cn,{type:"Dialog",enabled:w===0,element:$,onUpdate:h((g,R)=>{R==="Dialog"&&A(g,{[se.Add]:()=>d(y=>y+1),[se.Remove]:()=>d(y=>y-1)})})},m.createElement(le,{force:!0},m.createElement(ue,null,m.createElement(J.Provider,{value:et},m.createElement(ue.Group,{target:$},m.createElement(le,{force:!1},m.createElement(Ze,{slot:Ee,name:"Dialog.Description"},m.createElement(k,{initialFocus:a,containers:Z,features:j?A(qe,{parent:k.features.RestoreFocus,leaf:k.features.All&~k.features.FocusLock}):k.features.None},m.createElement(je,null,x({ourProps:tt,theirProps:f,slot:Ee,defaultTag:bn,features:$n,visible:w===0,name:"Dialog"}))))))))),m.createElement(Ve,null))}let xn="div";function Rn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=W("Dialog.Overlay"),i=S(t),u=h(c=>{if(c.target===c.currentTarget){if(Tt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),a()}}),f=s.useMemo(()=>({open:l===0}),[l]);return x({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:f,defaultTag:xn,name:"Dialog.Overlay"})}let Sn="div";function Pn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=W("Dialog.Backdrop"),i=S(t);s.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let u=s.useMemo(()=>({open:l===0}),[l]);return m.createElement(le,{force:!0},m.createElement(ue,null,x({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Sn,name:"Dialog.Backdrop"})))}let Ln="div";function Dn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=W("Dialog.Panel"),i=S(t,a.panelRef),u=s.useMemo(()=>({open:l===0}),[l]),f=h(c=>{c.stopPropagation()});return x({ourProps:{ref:i,id:r,onClick:f},theirProps:o,slot:u,defaultTag:Ln,name:"Dialog.Panel"})}let Fn="h2";function Cn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=W("Dialog.Title"),i=S(t);s.useEffect(()=>(a(r),()=>a(null)),[r,a]);let u=s.useMemo(()=>({open:l===0}),[l]);return x({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:Fn,name:"Dialog.Title"})}let Nn=T(Tn),Mn=T(Pn),An=T(Dn),On=T(Rn),kn=T(Cn),$e=Object.assign(Nn,{Backdrop:Mn,Panel:An,Overlay:On,Title:kn,Description:gn});function Te({className:e="",disabled:t,children:n,...r}){return React.createElement("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t},n)}function In({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},a={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return React.createElement(ee,{show:t,as:s.Fragment,leave:"duration-200"},React.createElement($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l},React.createElement(ee.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},React.createElement("div",{className:"absolute inset-0 bg-gray-500/75"})),React.createElement(ee.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},React.createElement($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${a}`},e))))}function Hn({type:e="button",className:t="",disabled:n,children:r,...o}){return React.createElement("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n},r)}function qn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:l,delete:a,processing:i,reset:u,errors:f}=rt({password:""}),c=()=>{n(!0)},d=p=>{p.preventDefault(),a(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>r.current.focus(),onFinish:()=>u()})},v=()=>{n(!1),u()};return React.createElement("section",{className:`space-y-6 ${e}`},React.createElement("header",null,React.createElement("h2",{className:"text-lg font-medium text-gray-900"},"Delete Account"),React.createElement("p",{className:"mt-1 text-sm text-gray-600"},"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.")),React.createElement(Te,{onClick:c},"Delete Account"),React.createElement(In,{show:t,onClose:v},React.createElement("form",{onSubmit:d,className:"p-6"},React.createElement("h2",{className:"text-lg font-medium text-gray-900"},"Are you sure you want to delete your account?"),React.createElement("p",{className:"mt-1 text-sm text-gray-600"},"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."),React.createElement("div",{className:"mt-6"},React.createElement(at,{htmlFor:"password",value:"Password",className:"sr-only"}),React.createElement(st,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:p=>l("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),React.createElement(ot,{message:f.password,className:"mt-2"})),React.createElement("div",{className:"mt-6 flex justify-end"},React.createElement(Hn,{onClick:v},"Cancel"),React.createElement(Te,{className:"ms-3",disabled:i},"Delete Account")))))}export{qn as default};