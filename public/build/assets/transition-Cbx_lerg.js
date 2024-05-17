import{r as a,R as y,b as le}from"./app-DzJNCemg.js";var Ce=Object.defineProperty,Oe=(e,t,r)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t,r)=>(Oe(e,typeof t!="symbol"?t+"":t,r),r);let Ne=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},U=new Ne,L=(e,t)=>{U.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function x(e){let t=a.useRef(e);return L(()=>{t.current=e},[e]),t}let F=function(e){let t=x(e);return y.useCallback((...r)=>t.current(...r),[t])};function Re(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function k(){let e=[],t={addEventListener(r,n,i,f){return r.addEventListener(n,i,f),t.add(()=>r.removeEventListener(n,i,f))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Re(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,i){let f=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:i}),this.add(()=>{Object.assign(r.style,{[n]:f})})},group(r){let n=k();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let i of e.splice(n,1))i()}},dispose(){for(let r of e.splice(0))r()}};return t}function ue(){let[e]=a.useState(k);return a.useEffect(()=>()=>e.dispose(),[e]),e}function $e(){let e=typeof document>"u";return"useSyncExternalStore"in le?(t=>t.useSyncExternalStore)(le)(()=>()=>{},()=>!1,()=>!e):!1}function ce(){let e=$e(),[t,r]=a.useState(U.isHandoffComplete);return t&&U.isHandoffComplete===!1&&r(!1),a.useEffect(()=>{t!==!0&&r(!0)},[t]),a.useEffect(()=>U.handoff(),[]),e?!1:t}function E(e,t,...r){if(e in t){let i=t[e];return typeof i=="function"?i(...r):i}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}let fe=Symbol();function _e(e,t=!0){return Object.assign(e,{[fe]:t})}function de(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let r=F(n=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(n):i.current=n)});return e.every(n=>n==null||(n==null?void 0:n[fe]))?void 0:r}function I(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var me=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(me||{}),C=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(C||{});function pe({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:f=!0,name:m,mergeRefs:c}){c=c??je;let l=he(t,e);if(f)return M(l,r,n,m,c);let s=i??0;if(s&2){let{static:o=!1,...g}=l;if(o)return M(g,r,n,m,c)}if(s&1){let{unmount:o=!0,...g}=l;return E(o?0:1,{0(){return null},1(){return M({...g,hidden:!0,style:{display:"none"}},r,n,m,c)}})}return M(l,r,n,m,c)}function M(e,t={},r,n,i){let{as:f=r,children:m,refName:c="ref",...l}=_(e,["unmount","static"]),s=e.ref!==void 0?{[c]:e.ref}:{},o=typeof m=="function"?m(t):m;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let g={};if(t){let v=!1,h=[];for(let[d,p]of Object.entries(t))typeof p=="boolean"&&(v=!0),p===!0&&h.push(d);v&&(g["data-headlessui-state"]=h.join(" "))}if(f===a.Fragment&&Object.keys(se(l)).length>0){if(!a.isValidElement(o)||Array.isArray(o)&&o.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let v=o.props,h=typeof(v==null?void 0:v.className)=="function"?(...p)=>I(v==null?void 0:v.className(...p),l.className):I(v==null?void 0:v.className,l.className),d=h?{className:h}:{};return a.cloneElement(o,Object.assign({},he(o.props,se(_(l,["ref"]))),g,s,{ref:i(o.ref,s.ref)},d))}return a.createElement(f,Object.assign({},_(l,["ref"]),f!==a.Fragment&&s,f!==a.Fragment&&g),o)}function je(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let i in n)i.startsWith("on")&&typeof n[i]=="function"?(r[i]!=null||(r[i]=[]),r[i].push(n[i])):t[i]=n[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](i,...f){let m=r[n];for(let c of m){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;c(i,...f)}}});return t}function ee(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function se(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function _(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let te=a.createContext(null);te.displayName="OpenClosedContext";var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function ve(){return a.useContext(te)}function xe({value:e,children:t}){return y.createElement(te.Provider,{value:e},t)}function re(){let e=a.useRef(!1);return L(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Pe(e=0){let[t,r]=a.useState(e),n=re(),i=a.useCallback(l=>{n.current&&r(s=>s|l)},[t,n]),f=a.useCallback(l=>!!(t&l),[t]),m=a.useCallback(l=>{n.current&&r(s=>s&~l)},[r,n]),c=a.useCallback(l=>{n.current&&r(s=>s^l)},[r]);return{flags:t,addFlag:i,hasFlag:f,removeFlag:m,toggleFlag:c}}function Le(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function J(e,...t){e&&t.length>0&&e.classList.add(...t)}function X(e,...t){e&&t.length>0&&e.classList.remove(...t)}function ke(e,t){let r=k();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[f,m]=[n,i].map(l=>{let[s=0]=l.split(",").filter(Boolean).map(o=>o.includes("ms")?parseFloat(o):parseFloat(o)*1e3).sort((o,g)=>g-o);return s}),c=f+m;if(c!==0){r.group(s=>{s.setTimeout(()=>{t(),s.dispose()},c),s.addEventListener(e,"transitionrun",o=>{o.target===o.currentTarget&&s.dispose()})});let l=r.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(t(),l())})}else t();return r.add(()=>t()),r.dispose}function Ae(e,t,r,n){let i=r?"enter":"leave",f=k(),m=n!==void 0?Le(n):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let c=E(i,{enter:()=>t.enter,leave:()=>t.leave}),l=E(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),s=E(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return X(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),J(e,...t.base,...c,...s),f.nextFrame(()=>{X(e,...t.base,...c,...s),J(e,...t.base,...c,...l),ke(e,()=>(X(e,...t.base,...c),J(e,...t.base,...t.entered),m()))}),f.dispose}function He({immediate:e,container:t,direction:r,classes:n,onStart:i,onStop:f}){let m=re(),c=ue(),l=x(r);L(()=>{e&&(l.current="enter")},[e]),L(()=>{let s=k();c.add(s.dispose);let o=t.current;if(o&&l.current!=="idle"&&m.current)return s.dispose(),i.current(l.current),s.add(Ae(o,n.current,l.current==="enter",()=>{s.dispose(),f.current(l.current)})),s.dispose},[r])}function w(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let B=a.createContext(null);B.displayName="TransitionContext";var qe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(qe||{});function De(){let e=a.useContext(B);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Me(){let e=a.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let V=a.createContext(null);V.displayName="NestingContext";function Y(e){return"children"in e?Y(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ge(e,t){let r=x(e),n=a.useRef([]),i=re(),f=ue(),m=F((h,d=C.Hidden)=>{let p=n.current.findIndex(({el:u})=>u===h);p!==-1&&(E(d,{[C.Unmount](){n.current.splice(p,1)},[C.Hidden](){n.current[p].state="hidden"}}),f.microTask(()=>{var u;!Y(n)&&i.current&&((u=r.current)==null||u.call(r))}))}),c=F(h=>{let d=n.current.find(({el:p})=>p===h);return d?d.state!=="visible"&&(d.state="visible"):n.current.push({el:h,state:"visible"}),()=>m(h,C.Unmount)}),l=a.useRef([]),s=a.useRef(Promise.resolve()),o=a.useRef({enter:[],leave:[],idle:[]}),g=F((h,d,p)=>{l.current.splice(0),t&&(t.chains.current[d]=t.chains.current[d].filter(([u])=>u!==h)),t==null||t.chains.current[d].push([h,new Promise(u=>{l.current.push(u)})]),t==null||t.chains.current[d].push([h,new Promise(u=>{Promise.all(o.current[d].map(([R,$])=>$)).then(()=>u())})]),d==="enter"?s.current=s.current.then(()=>t==null?void 0:t.wait.current).then(()=>p(d)):p(d)}),v=F((h,d,p)=>{Promise.all(o.current[d].splice(0).map(([u,R])=>R)).then(()=>{var u;(u=l.current.shift())==null||u()}).then(()=>p(d))});return a.useMemo(()=>({children:n,register:c,unregister:m,onStart:g,onStop:v,wait:s,chains:o}),[c,m,n,g,v,o,s])}function Ue(){}let Ie=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function oe(e){var t;let r={};for(let n of Ie)r[n]=(t=e[n])!=null?t:Ue;return r}function Be(e){let t=a.useRef(oe(e));return a.useEffect(()=>{t.current=oe(e)},[e]),t}let Ve="div",be=me.RenderStrategy;function Ye(e,t){var r,n;let{beforeEnter:i,afterEnter:f,beforeLeave:m,afterLeave:c,enter:l,enterFrom:s,enterTo:o,entered:g,leave:v,leaveFrom:h,leaveTo:d,...p}=e,u=a.useRef(null),R=de(u,t),$=(r=p.unmount)==null||r?C.Unmount:C.Hidden,{show:b,appear:O,initial:ne}=De(),[N,z]=a.useState(b?"visible":"hidden"),ie=Me(),{register:A,unregister:H}=ie;a.useEffect(()=>A(u),[A,u]),a.useEffect(()=>{if($===C.Hidden&&u.current){if(b&&N!=="visible"){z("visible");return}return E(N,{hidden:()=>H(u),visible:()=>A(u)})}},[N,u,A,H,b,$]);let G=x({base:w(p.className),enter:w(l),enterFrom:w(s),enterTo:w(o),entered:w(g),leave:w(v),leaveFrom:w(h),leaveTo:w(d)}),q=Be({beforeEnter:i,afterEnter:f,beforeLeave:m,afterLeave:c}),K=ce();a.useEffect(()=>{if(K&&N==="visible"&&u.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[u,N,K]);let Ee=ne&&!O,ae=O&&b&&ne,Te=!K||Ee?"idle":b?"enter":"leave",P=Pe(0),Fe=F(S=>E(S,{enter:()=>{P.addFlag(T.Opening),q.current.beforeEnter()},leave:()=>{P.addFlag(T.Closing),q.current.beforeLeave()},idle:()=>{}})),Se=F(S=>E(S,{enter:()=>{P.removeFlag(T.Opening),q.current.afterEnter()},leave:()=>{P.removeFlag(T.Closing),q.current.afterLeave()},idle:()=>{}})),D=ge(()=>{z("hidden"),H(u)},ie),Q=a.useRef(!1);He({immediate:ae,container:u,classes:G,direction:Te,onStart:x(S=>{Q.current=!0,D.onStart(u,S,Fe)}),onStop:x(S=>{Q.current=!1,D.onStop(u,S,Se),S==="leave"&&!Y(D)&&(z("hidden"),H(u))})});let j=p,we={ref:R};return ae?j={...j,className:I(p.className,...G.current.enter,...G.current.enterFrom)}:Q.current&&(j.className=I(p.className,(n=u.current)==null?void 0:n.className),j.className===""&&delete j.className),y.createElement(V.Provider,{value:D},y.createElement(xe,{value:E(N,{visible:T.Open,hidden:T.Closed})|P.flags},pe({ourProps:we,theirProps:j,defaultTag:Ve,features:be,visible:N==="visible",name:"Transition.Child"})))}function ze(e,t){let{show:r,appear:n=!1,unmount:i=!0,...f}=e,m=a.useRef(null),c=de(m,t);ce();let l=ve();if(r===void 0&&l!==null&&(r=(l&T.Open)===T.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[s,o]=a.useState(r?"visible":"hidden"),g=ge(()=>{o("hidden")}),[v,h]=a.useState(!0),d=a.useRef([r]);L(()=>{v!==!1&&d.current[d.current.length-1]!==r&&(d.current.push(r),h(!1))},[d,r]);let p=a.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);a.useEffect(()=>{if(r)o("visible");else if(!Y(g))o("hidden");else{let b=m.current;if(!b)return;let O=b.getBoundingClientRect();O.x===0&&O.y===0&&O.width===0&&O.height===0&&o("hidden")}},[r,g]);let u={unmount:i},R=F(()=>{var b;v&&h(!1),(b=e.beforeEnter)==null||b.call(e)}),$=F(()=>{var b;v&&h(!1),(b=e.beforeLeave)==null||b.call(e)});return y.createElement(V.Provider,{value:g},y.createElement(B.Provider,{value:p},pe({ourProps:{...u,as:a.Fragment,children:y.createElement(ye,{ref:c,...u,...f,beforeEnter:R,beforeLeave:$})},theirProps:{},defaultTag:a.Fragment,features:be,visible:s==="visible",name:"Transition"})))}function Ge(e,t){let r=a.useContext(B)!==null,n=ve()!==null;return y.createElement(y.Fragment,null,!r&&n?y.createElement(Z,{ref:t,...e}):y.createElement(ye,{ref:t,...e}))}let Z=ee(ze),ye=ee(Ye),Ke=ee(Ge),Je=Object.assign(Z,{Child:Ke,Root:Z});export{pe as C,me as O,_e as T,ee as U,L as a,x as b,k as c,ve as d,T as e,re as f,ce as l,F as o,ue as p,Je as q,U as s,Re as t,E as u,de as y};
