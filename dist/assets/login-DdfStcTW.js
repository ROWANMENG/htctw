import{g as _,a as O,s as H,q as de,_ as c,t as ee,r as L,b as W,v as ue,w as oe,j as e,c as q,e as F,d as U,x as Z,f as pe,u as se,y as me,T as R,S as $,z as he,R as Q,G as m,O as J,I as xe,A as Ce,L as be,C as te,D as ge,P as fe}from"./index-DB_W6nDf.js";import{F as ve,c as we,a as X,I as Y,b as N,E as ke,d as je,A as ye,e as Pe}from"./EyeInvisibleOutlined-Zp4kUnyN.js";import{B as V}from"./Button-AUEcI-4o.js";function Fe(o){return _("PrivateSwitchBase",o)}O("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ie=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Be=o=>{const{classes:s,checked:t,disabled:r,edge:n}=o,a={root:["root",t&&"checked",r&&"disabled",n&&`edge${F(n)}`],input:["input"]};return U(a,Fe,s)},Le=H(de)(({ownerState:o})=>c({padding:9,borderRadius:"50%"},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12})),$e=H("input",{shouldForwardProp:ee})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Re=L.forwardRef(function(s,t){const{autoFocus:r,checked:n,checkedIcon:a,className:u,defaultChecked:l,disabled:p,disableFocusRipple:i=!1,edge:g=!1,icon:j,id:d,inputProps:h,inputRef:y,name:I,onBlur:x,onChange:f,onFocus:C,readOnly:E,required:D=!1,tabIndex:S,type:v,value:B}=s,w=W(s,Ie),[P,ae]=ue({controlled:n,default:!!l,name:"SwitchBase",state:"checked"}),k=oe(),re=b=>{C&&C(b),k&&k.onFocus&&k.onFocus(b)},le=b=>{x&&x(b),k&&k.onBlur&&k.onBlur(b)},ie=b=>{if(b.nativeEvent.defaultPrevented)return;const K=b.target.checked;ae(K),f&&f(b,K)};let z=p;k&&typeof z>"u"&&(z=k.disabled);const ce=v==="checkbox"||v==="radio",A=c({},s,{checked:P,disabled:z,disableFocusRipple:i,edge:g}),G=Be(A);return e.jsxs(Le,c({component:"span",className:q(G.root,u),centerRipple:!0,focusRipple:!i,disabled:z,tabIndex:null,role:void 0,onFocus:re,onBlur:le,ownerState:A,ref:t},w,{children:[e.jsx($e,c({autoFocus:r,checked:n,defaultChecked:l,className:G.input,disabled:z,id:ce?d:void 0,name:I,onChange:ie,readOnly:E,ref:y,required:D,ownerState:A,tabIndex:S,type:v},v==="checkbox"&&B===void 0?{}:{value:B},h)),P?a:j]}))}),Se=Z(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ze=Z(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Me=Z(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function He(o){return _("MuiCheckbox",o)}const T=O("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Ee=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ve=o=>{const{classes:s,indeterminate:t,color:r,size:n}=o,a={root:["root",t&&"indeterminate",`color${F(r)}`,`size${F(n)}`]},u=U(a,He,s);return c({},s,u)},qe=H(Re,{shouldForwardProp:o=>ee(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.indeterminate&&s.indeterminate,s[`size${F(t.size)}`],t.color!=="default"&&s[`color${F(t.color)}`]]}})(({theme:o,ownerState:s})=>c({color:(o.vars||o).palette.text.secondary},!s.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${s.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[s.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:pe(s.color==="default"?o.palette.action.active:o.palette[s.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},s.color!=="default"&&{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(o.vars||o).palette[s.color].main},[`&.${T.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),De=e.jsx(ze,{}),Ae=e.jsx(Se,{}),Ne=e.jsx(Me,{}),Te=L.forwardRef(function(s,t){var r,n;const a=se({props:s,name:"MuiCheckbox"}),{checkedIcon:u=De,color:l="primary",icon:p=Ae,indeterminate:i=!1,indeterminateIcon:g=Ne,inputProps:j,size:d="medium",className:h}=a,y=W(a,Ee),I=i?g:p,x=i?g:u,f=c({},a,{color:l,indeterminate:i,size:d}),C=Ve(f);return e.jsx(qe,c({type:"checkbox",inputProps:c({"data-indeterminate":i},j),icon:L.cloneElement(I,{fontSize:(r=I.props.fontSize)!=null?r:d}),checkedIcon:L.cloneElement(x,{fontSize:(n=x.props.fontSize)!=null?n:d}),ownerState:f,ref:t,className:q(C.root,h)},y,{classes:C}))});function _e(o){return _("MuiFormControlLabel",o)}const M=O("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Oe=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],We=o=>{const{classes:s,disabled:t,labelPlacement:r,error:n,required:a}=o,u={root:["root",t&&"disabled",`labelPlacement${F(r)}`,n&&"error",a&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",n&&"error"]};return U(u,_e,s)},Ue=H("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[{[`& .${M.label}`]:s.label},s.root,s[`labelPlacement${F(t.labelPlacement)}`]]}})(({theme:o,ownerState:s})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${M.disabled}`]:{cursor:"default"}},s.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},s.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},s.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${M.label}`]:{[`&.${M.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),Ze=H("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,s)=>s.asterisk})(({theme:o})=>({[`&.${M.error}`]:{color:(o.vars||o).palette.error.main}})),Ge=L.forwardRef(function(s,t){var r,n;const a=se({props:s,name:"MuiFormControlLabel"}),{className:u,componentsProps:l={},control:p,disabled:i,disableTypography:g,label:j,labelPlacement:d="end",required:h,slotProps:y={}}=a,I=W(a,Oe),x=oe(),f=(r=i??p.props.disabled)!=null?r:x==null?void 0:x.disabled,C=h??p.props.required,E={disabled:f,required:C};["checked","name","onChange","value","inputRef"].forEach(P=>{typeof p.props[P]>"u"&&typeof a[P]<"u"&&(E[P]=a[P])});const D=me({props:a,muiFormControl:x,states:["error"]}),S=c({},a,{disabled:f,labelPlacement:d,required:C,error:D.error}),v=We(S),B=(n=y.typography)!=null?n:l.typography;let w=j;return w!=null&&w.type!==R&&!g&&(w=e.jsx(R,c({component:"span"},B,{className:q(v.label,B==null?void 0:B.className),children:w}))),e.jsxs(Ue,c({className:q(v.root,u),ownerState:S,ref:t},I,{children:[L.cloneElement(p,E),C?e.jsxs($,{display:"block",children:[w,e.jsxs(Ze,{ownerState:S,"aria-hidden":!0,className:v.asterisk,children:[" ","*"]})]}):w]}))}),Ke="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.6871%206.53113H15.083V6.5H8.33301V9.5H12.5716C11.9533%2011.2464%2010.2916%2012.5%208.33301%2012.5C5.84788%2012.5%203.83301%2010.4851%203.83301%208C3.83301%205.51487%205.84788%203.5%208.33301%203.5C9.48013%203.5%2010.5238%203.93275%2011.3184%204.63962L13.4398%202.51825C12.1003%201.26987%2010.3085%200.5%208.33301%200.5C4.19113%200.5%200.833008%203.85812%200.833008%208C0.833008%2012.1419%204.19113%2015.5%208.33301%2015.5C12.4749%2015.5%2015.833%2012.1419%2015.833%208C15.833%207.49713%2015.7813%207.00625%2015.6871%206.53113Z'%20fill='%23FFC107'/%3e%3cpath%20d='M1.69824%204.50913L4.16237%206.31625C4.82912%204.6655%206.44387%203.5%208.33349%203.5C9.48062%203.5%2010.5242%203.93275%2011.3189%204.63963L13.4402%202.51825C12.1007%201.26988%2010.309%200.5%208.33349%200.5C5.45274%200.5%202.95449%202.12638%201.69824%204.50913Z'%20fill='%23FF3D00'/%3e%3cpath%20d='M8.33312%2015.5C10.2704%2015.5%2012.0306%2014.7586%2013.3615%2013.553L11.0402%2011.5888C10.2872%2012.1591%209.35125%2012.5%208.33312%2012.5C6.38237%2012.5%204.726%2011.2561%204.102%209.52026L1.65625%2011.4046C2.8975%2013.8335%205.41825%2015.5%208.33312%2015.5Z'%20fill='%234CAF50'/%3e%3cpath%20d='M15.6871%206.53113H15.083V6.5H8.33301V9.5H12.5716C12.2746%2010.3389%2011.735%2011.0622%2011.039%2011.5891C11.0394%2011.5887%2011.0398%2011.5887%2011.0401%2011.5884L13.3614%2013.5526C13.1971%2013.7019%2015.833%2011.75%2015.833%208C15.833%207.49713%2015.7813%207.00625%2015.6871%206.53113Z'%20fill='%231976D2'/%3e%3c/svg%3e",Qe="data:image/svg+xml,%3csvg%20width='16'%20height='13'%20viewBox='0%200%2016%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.5%201.42863C14.9488%201.67278%2014.3559%201.83568%2013.7306%201.91276C14.3663%201.53529%2014.8555%200.933256%2015.085%200.222065C14.4901%200.570786%2013.831%200.827014%2013.1298%200.962003C12.5698%200.368303%2011.7711%200%2010.8862%200C9.18636%200%207.80856%201.36572%207.80856%203.04975C7.80856%203.28806%207.83647%203.52012%207.88897%203.74552C5.33168%203.6172%203.06354%202.40147%201.54616%200.55662C1.27952%201.00742%201.12953%201.53529%201.12953%202.09233C1.12953%203.15099%201.67157%204.08299%202.49817%204.63211C1.99363%204.6167%201.51866%204.47629%201.10287%204.25131C1.10287%204.26048%201.10287%204.27423%201.10287%204.28714C1.10287%205.7666%202.16403%206.99858%203.57058%207.27898C3.31352%207.34939%203.04187%207.38855%202.76189%207.38855C2.56316%207.38855%202.36943%207.36605%202.18194%207.33231C2.57358%208.54137%203.70973%209.42505%205.05587%209.4513C4.00262%2010.2679%202.67607%2010.757%201.23369%2010.757C0.984543%2010.757%200.740813%2010.7429%200.5%2010.7137C1.8628%2011.5765%203.481%2012.0823%205.21794%2012.0823C10.8779%2012.0823%2013.9743%207.43438%2013.9743%203.40222C13.9743%203.27014%2013.9701%203.13849%2013.9639%203.0085C14.568%202.58187%2015.0888%202.04358%2015.5%201.42863Z'%20fill='%2303A9F4'/%3e%3c/svg%3e",Je="data:image/svg+xml,%3csvg%20width='9'%20height='16'%20viewBox='0%200%209%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.04102%200.125034C3.96989%200.125034%202.29102%201.80391%202.29102%203.87503V5.75003H0.0410156V8.75003H2.29102V15.875H5.29102V8.75003H7.91602L8.29102%205.75003H5.29102V4.25003C5.29102%203.42166%205.96264%202.75003%206.79102%202.75003H8.29102V0.245784C7.57514%200.171909%206.76139%200.123534%206.04102%200.125034Z'%20fill='%234267B2'/%3e%3c/svg%3e";function Xe(){const o=he(n=>n.breakpoints.down("sm")),s=async()=>{},t=async()=>{},r=async()=>{};return e.jsxs($,{direction:"row",spacing:{xs:1,sm:2},justifyContent:{xs:"space-around",sm:"space-between"},sx:{"& .MuiButton-startIcon":{mr:{xs:0,sm:1},ml:{xs:0,sm:-.5}}},children:[e.jsx(V,{variant:"outlined",color:"secondary",fullWidth:!o,startIcon:e.jsx("img",{src:Ke,alt:"Google"}),onClick:s,children:!o&&"Google"}),e.jsx(V,{variant:"outlined",color:"secondary",fullWidth:!o,startIcon:e.jsx("img",{src:Qe,alt:"Twitter"}),onClick:t,children:!o&&"Twitter"}),e.jsx(V,{variant:"outlined",color:"secondary",fullWidth:!o,startIcon:e.jsx("img",{src:Je,alt:"Facebook"}),onClick:r,children:!o&&"Facebook"})]})}function ne({isDemo:o=!1}){const[s,t]=Q.useState(!1),[r,n]=Q.useState(!1),a=()=>{n(!r)},u=l=>{l.preventDefault()};return e.jsx(e.Fragment,{children:e.jsx(ve,{initialValues:{email:"",password:"",submit:null},validationSchema:we().shape({email:X().email("Must be a valid email").max(255).required("Email is required"),password:X().max(255).required("Password is required")}),children:({errors:l,handleBlur:p,handleChange:i,handleSubmit:g,isSubmitting:j,touched:d,values:h})=>e.jsx("form",{noValidate:!0,onSubmit:g,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{item:!0,xs:12,children:[e.jsxs($,{spacing:1,children:[e.jsx(Y,{htmlFor:"email-login",children:"Email Address"}),e.jsx(J,{id:"email-login",type:"email",value:h.email,name:"email",onBlur:p,onChange:i,placeholder:"Enter email address",fullWidth:!0,error:!!(d.email&&l.email)})]}),d.email&&l.email&&e.jsx(N,{error:!0,id:"standard-weight-helper-text-email-login",children:l.email})]}),e.jsxs(m,{item:!0,xs:12,children:[e.jsxs($,{spacing:1,children:[e.jsx(Y,{htmlFor:"password-login",children:"Password"}),e.jsx(J,{fullWidth:!0,error:!!(d.password&&l.password),id:"-password-login",type:r?"text":"password",value:h.password,name:"password",onBlur:p,onChange:i,endAdornment:e.jsx(xe,{position:"end",children:e.jsx(Ce,{"aria-label":"toggle password visibility",onClick:a,onMouseDown:u,edge:"end",color:"secondary",children:r?e.jsx(ke,{}):e.jsx(je,{})})}),placeholder:"Enter password"})]}),d.password&&l.password&&e.jsx(N,{error:!0,id:"standard-weight-helper-text-password-login",children:l.password})]}),e.jsx(m,{item:!0,xs:12,sx:{mt:-1},children:e.jsxs($,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[e.jsx(Ge,{control:e.jsx(Te,{checked:s,onChange:y=>t(y.target.checked),name:"checked",color:"primary",size:"small"}),label:e.jsx(R,{variant:"h6",children:"Keep me sign in"})}),e.jsx(be,{variant:"h6",component:te,color:"text.primary",children:"Forgot Password?"})]})}),l.submit&&e.jsx(m,{item:!0,xs:12,children:e.jsx(N,{error:!0,children:l.submit})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(ye,{children:e.jsx(V,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(ge,{children:e.jsx(R,{variant:"caption",children:" Login with"})})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(Xe,{})})]})})})})}ne.propTypes={isDemo:fe.bool};function so(){return e.jsx(Pe,{children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsx(m,{item:!0,xs:12,children:e.jsxs($,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(R,{variant:"h3",children:"Login"}),e.jsx(R,{component:te,to:"/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),e.jsx(m,{item:!0,xs:12,children:e.jsx(ne,{})})]})})}export{so as default};