import{r as i,W as w,a as b,d as x,y as F}from"./app-DzJNCemg.js";import{G as S}from"./GuestLayout-BdURPZAV.js";import{I as c}from"./InputError-BTLVavbV.js";import{I as l}from"./InputLabel-DiylpYse.js";import{P as T}from"./PrimaryButton-DZAeqy1T.js";import{T as n}from"./TextInput-DmPXqyFA.js";import{S as g}from"./Toast-DAXrZqWn.js";import"./jsx-runtime-CoOgG5aM.js";import{S as E}from"./sweetalert2.all-4F1A6Uy4.js";function B(){const[u,R]=i.useState(),[m,d]=i.useState([]),{data:t,setData:r,post:f,processing:v,errors:s,reset:N}=w({selectedType:"personaJuridica",ruc:"",company_name:"",category_id:"",subCategory_id:"",name:"",last_name:"",dni:"",position:"",phone_number:"",email:"",password:"",password_confirmation:""});i.useEffect(()=>{(()=>{axios.get(route("categorias.all")).then(a=>{const o=a.data;R(o.categorias)}).catch(a=>{console.error(a)})})()},[]);const y=e=>{console.log(e),axios.get(route("categorias.subCategories"),{params:{category_id:e}}).then(a=>{const o=a.data;d(o.subcategorias)}).catch(a=>{console.error(a)})};i.useEffect(()=>{},[]),i.useEffect(()=>()=>{N("password","password_confirmation")},[]);const h=e=>{e.preventDefault(),f(route("client.register"),{data:t,onSuccess:()=>{E.fire({position:"center",icon:"success",title:"Registrado con éxito",showConfirmButton:!1,timer:1500}),F.get("/login")},onError:a=>{let o="";for(let _ in a)o+=`${a[_]} `;E.fire("Error",o,"error")}})},p=e=>{const{value:a}=e.target;r({selectedType:a,ruc:"",company_name:"",category_id:"",subCategory_id:"",name:"",last_name:"",dni:"",position:"",phone_number:"",email:"",password:"",password_confirmation:""})},C=e=>{const{value:a}=e.target;if(r("category_id",a),a==="0"){d([]);return}y(a),console.log(m)};return React.createElement("div",{className:"bg-gray-400"},React.createElement(S,{type:"register"},React.createElement(b,{title:"Registro"}),React.createElement("form",{onSubmit:h,className:""},React.createElement("div",{className:"flex justify-around my-2"},React.createElement("div",{className:""},React.createElement("input",{type:"radio",id:"personaJuridica",name:"identificationType",value:"personaJuridica",checked:t.selectedType==="personaJuridica",onChange:p,className:"mx-1"}),React.createElement("label",{htmlFor:"personaJuridica"},"Persona Juridica")),React.createElement("div",{className:""},React.createElement("input",{type:"radio",id:"personaNatural",name:"identificationType",value:"personaNatural",checked:t.selectedType==="personaNatural",onChange:p,className:"mx-1"}),React.createElement("label",{htmlFor:"personaNatural"},"Persona Natural"))),React.createElement("div",{className:"flex gap-4 mt-4"},React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"category_id",value:"Categoría"}),React.createElement("div",{className:`${m&&Array.isArray(m)&&m.length==0?"w-1/2":""}`},React.createElement(g,{id:"category_id",name:"category_id",value:t.category_id,onChange:C,className:"mt-1 block w-full",required:!0},React.createElement("option",{value:"0"},"Selecciona una categoría"),u&&u.map((e,a)=>React.createElement("option",{key:a,value:e.id},e.name)))),React.createElement(c,{message:s.category_id,className:"mt-2"})),m&&Array.isArray(m)&&m.length>0&&React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"subCategory_id",value:"Provincia"}),React.createElement("div",{className:""},React.createElement(g,{id:"subCategory_id",name:"subCategory_id",value:t.subCategory_id,onChange:e=>r("subCategory_id",e.target.value),className:"mt-1 block w-full",required:!0},React.createElement("option",{value:""},"Selecciona una Provincia"),m&&m.map((e,a)=>React.createElement("option",{key:a,value:e.id},e.name)))),React.createElement(c,{message:s.subCategory_id,className:"mt-2"}))),t.selectedType=="personaJuridica"&&React.createElement(React.Fragment,null,React.createElement("div",{className:"flex gap-4 mt-4"},React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"ruc",value:"RUC"}),React.createElement(n,{id:"ruc",name:"ruc",value:t.ruc,className:"mt-1 block w-full",autoComplete:"ruc",isFocused:!0,onChange:e=>r("ruc",e.target.value),required:!0}),React.createElement(c,{message:s.name,className:"mt-2"})),React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"company_name",value:"Razón Social"}),React.createElement(n,{id:"company_name",name:"company_name",value:t.company_name,className:"mt-1 block w-full",autoComplete:"company_name",onChange:e=>r("company_name",e.target.value),required:!0}),React.createElement(c,{message:s.company_name,className:"mt-2"}))),React.createElement("p",{className:"text-center mt-4"},"Persona Registrante")),React.createElement("div",{className:"flex gap-4 mt-4"},React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"name",value:"Nombre(s)"}),React.createElement(n,{id:"name",name:"name",value:t.name,className:"w-full",isFocused:t.selectedType==="pNatural",autoComplete:"name",onChange:e=>r("name",e.target.value),required:!0}),React.createElement(c,{message:s.name,className:"mt-2"})),React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"last_name",value:"Apellidos"}),React.createElement(n,{id:"last_name",name:"last_name",value:t.last_name,className:"w-full",autoComplete:"last_name",onChange:e=>r("last_name",e.target.value),required:!0}),React.createElement(c,{message:s.last_name,className:"mt-2"}))),React.createElement("div",{className:"flex mt-4 gap-4"},React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"dni",value:"DNI"}),React.createElement(n,{id:"dni",name:"dni",value:t.dni,className:`${t.selectedType!=="personaJuridica"?"w-1/2 pl-3":"w-full"}`,autoComplete:"dni",onChange:e=>r("dni",e.target.value),required:!0}),React.createElement(c,{message:s.dni,className:"mt-2"})),t.selectedType=="personaJuridica"&&React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"position",value:"Cargo"}),React.createElement(n,{id:"position",name:"position",value:t.position,className:"w-full",autoComplete:"position",onChange:e=>r("position",e.target.value),required:!0}),React.createElement(c,{message:s.position,className:"mt-2"}))),React.createElement("div",{className:"flex mt-4 gap-4"},React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"phone_number",value:"Celular"}),React.createElement(n,{id:"phone_number",name:"phone_number",value:t.phone_number,className:"w-full",autoComplete:"phone_number",onChange:e=>r("phone_number",e.target.value),required:!0}),React.createElement(c,{message:s.phone_number,className:"mt-2"})),React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"email",value:"Correo Electrónico"}),React.createElement(n,{id:"email",type:"email",name:"email",value:t.email,className:"w-full",autoComplete:"email",onChange:e=>r("email",e.target.value),required:!0}),React.createElement(c,{message:s.email,className:"mt-2"}))),React.createElement("div",{className:"flex gap-4 mt-4"},React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"password",value:"Contraseña"}),React.createElement(n,{id:"password",type:"password",name:"password",value:t.password,className:"w-full",autoComplete:"off",onChange:e=>r("password",e.target.value),required:!0}),React.createElement(c,{message:s.password,className:"mt-2"})),React.createElement("div",{className:"flex-1"},React.createElement(l,{htmlFor:"password_confirmation",value:"Confirmar Contraseña"}),React.createElement(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:t.password_confirmation,className:"w-full",autoComplete:"off",onChange:e=>r("password_confirmation",e.target.value),required:!0}),React.createElement(c,{message:s.password_confirmation,className:"mt-2"}))),React.createElement("div",{className:"flex items-center justify-end mt-4"},React.createElement(x,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"¿Ya esta registrado ?"),React.createElement(T,{className:"ms-4",disabled:v},"Registrar")))))}export{B as default};
