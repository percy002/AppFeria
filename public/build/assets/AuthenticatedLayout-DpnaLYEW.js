import{r as o,d as i}from"./app-DzJNCemg.js";import{q as f}from"./transition-Cbx_lerg.js";const g=o.createContext(),l=({children:e})=>{const[t,a]=o.useState(!1),r=()=>{a(n=>!n)};return React.createElement(g.Provider,{value:{open:t,setOpen:a,toggleOpen:r}},React.createElement("div",{className:"relative"},e))},x=({children:e})=>{const{open:t,setOpen:a,toggleOpen:r}=o.useContext(g);return React.createElement(React.Fragment,null,React.createElement("div",{onClick:r},e),t&&React.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>a(!1)}))},h=({align:e="right",width:t="48",contentClasses:a="py-1 bg-white",children:r})=>{const{open:n,setOpen:m}=o.useContext(g);let s="origin-top";e==="left"?s="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(s="ltr:origin-top-right rtl:origin-top-left end-0");let p="";return t==="48"&&(p="w-48"),React.createElement(React.Fragment,null,React.createElement(f,{as:o.Fragment,show:n,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},React.createElement("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${s} ${p}`,onClick:()=>m(!1)},React.createElement("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+a},r))))},v=({className:e="",children:t,...a})=>React.createElement(i,{...a,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e},t);l.Trigger=x;l.Content=h;l.Link=v;const c=l;function d({active:e=!1,className:t="",children:a,...r}){return React.createElement(i,{...r,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t},a)}function u({active:e=!1,className:t="",children:a,...r}){return React.createElement(i,{...r,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`},a)}function b({user:e,header:t,children:a,client:r}){const[n,m]=o.useState(!1);return React.createElement("div",{className:"min-h-screen bg-gray-100"},React.createElement("nav",{className:"bg-white border-b border-gray-100"},React.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},React.createElement("div",{className:"flex justify-between h-16"},React.createElement("div",{className:"flex"},React.createElement("div",{className:"shrink-0 flex items-center"},React.createElement(i,{href:"/"},React.createElement("img",{src:"/images/logo_Gerepro.svg",alt:"logo gerepro"}))),React.createElement("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},React.createElement(d,{href:route("dashboard"),active:route().current("dashboard")},"Inicio"),!r&&React.createElement(d,{href:route("clientes"),active:route().current("clientes")},"Clientes"),r&&r.id&&React.createElement(d,{href:route("reservaciones.index",{id:r.id}),active:route().current("reservaciones.index")},"Reservas"))),React.createElement("div",{className:"hidden sm:flex sm:items-center sm:ms-6"},React.createElement("div",{className:"ms-3 relative"},React.createElement(c,null,React.createElement(c.Trigger,null,React.createElement("span",{className:"inline-flex rounded-md"},React.createElement("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},e.name,React.createElement("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},React.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))))),React.createElement(c.Content,null,React.createElement(c.Link,{href:route("profile.edit")},"Perfil"),React.createElement(c.Link,{href:route("logout"),method:"post",as:"button"},"Cerrar sesion"))))),React.createElement("div",{className:"-me-2 flex items-center sm:hidden"},React.createElement("button",{onClick:()=>m(s=>!s),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},React.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},React.createElement("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),React.createElement("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))))),React.createElement("div",{className:(n?"block":"hidden")+" sm:hidden"},React.createElement("div",{className:"pt-2 pb-3 space-y-1"},React.createElement(u,{href:route("dashboard"),active:route().current("dashboard")},"Dashboard")),React.createElement("div",{className:"pt-4 pb-1 border-t border-gray-200"},React.createElement("div",{className:"px-4"},React.createElement("div",{className:"font-medium text-base text-gray-800"},e.name),React.createElement("div",{className:"font-medium text-sm text-gray-500"},e.email)),React.createElement("div",{className:"mt-3 space-y-1"},React.createElement(u,{href:route("profile.edit")},"Profile"),React.createElement(u,{method:"post",href:route("logout"),as:"button"},"Log Out"))))),t&&React.createElement("header",{className:"bg-white shadow"},React.createElement("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},t)),React.createElement("main",null,a))}export{b as A};
