(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{1546:(e,r,a)=>{Promise.resolve().then(a.bind(a,4919))},4919:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>k});var l=a(5155),t=a(2115),o=a(8412),n=a(810),s=a(8998),d=a(1050),i=a(8416),c=a(6417),u=a(7753),h=a(152),g=a(6214),x=a(3391),m=a(4075);let j=e=>{let{setShow:r}=e,[a,o]=(0,t.useState)({es:"",en:"",pt:""}),n=(0,x.wA)();return(0,l.jsxs)(i.A,{open:!0,onClose:()=>r(!1),children:[(0,l.jsx)(c.A,{children:"Add Word"}),(0,l.jsxs)(u.A,{children:[(0,l.jsx)(h.A,{label:"Spanish",variant:"outlined",fullWidth:!0,value:a.es,onChange:e=>o({...a,es:e.target.value}),margin:"normal"}),(0,l.jsx)(h.A,{label:"English",variant:"outlined",fullWidth:!0,value:a.en,onChange:e=>o({...a,en:e.target.value}),margin:"normal"}),(0,l.jsx)(h.A,{label:"Portuguese",variant:"outlined",fullWidth:!0,value:a.pt,onChange:e=>o({...a,pt:e.target.value}),margin:"normal"})]}),(0,l.jsxs)(g.A,{children:[(0,l.jsx)(d.A,{onClick:()=>r(!1),color:"secondary",children:"Cancel"}),(0,l.jsx)(d.A,{onClick:()=>{n((0,m.KW)(a)),r(!1)},color:"primary",children:"Add"})]})]})},A=e=>{let{setShow:r}=e,[a,o]=(0,t.useState)(""),n=(0,x.wA)();return(0,l.jsxs)(i.A,{open:!0,onClose:()=>r(!1),children:[(0,l.jsx)(c.A,{children:"Remove Word"}),(0,l.jsx)(u.A,{children:(0,l.jsx)(h.A,{label:"Enter Word to Remove",variant:"outlined",fullWidth:!0,value:a,onChange:e=>o(e.target.value),margin:"normal"})}),(0,l.jsxs)(g.A,{children:[(0,l.jsx)(d.A,{onClick:()=>r(!1),color:"secondary",children:"Cancel"}),(0,l.jsx)(d.A,{onClick:()=>{n((0,m.Td)(a)),r(!1)},color:"primary",children:"Remove"})]})]})};var v=a(2111),p=a(507),S=a(6999),w=a(5480);let y=e=>{let{setShow:r}=e,[a,o]=(0,t.useState)(""),[n,s]=(0,t.useState)("es"),[j,A]=(0,t.useState)(""),y=(0,x.wA)(),f=async()=>{let e=await y((0,m.rr)({word:a,language:n}));A(e.words?e.words:"Not Found")};return(0,l.jsxs)(i.A,{open:!0,onClose:()=>r(!1),children:[(0,l.jsx)(c.A,{children:"USIP translator"}),(0,l.jsxs)(u.A,{children:[(0,l.jsx)(h.A,{label:"Enter Word to Translate",variant:"outlined",fullWidth:!0,value:a,onChange:e=>o(e.target.value),margin:"normal"}),(0,l.jsxs)(v.A,{fullWidth:!0,margin:"normal",children:[(0,l.jsx)(p.A,{children:"Language"}),(0,l.jsxs)(S.A,{value:n,onChange:e=>s(e.target.value),label:"Language",children:[(0,l.jsx)(w.A,{value:"es",children:"Spanish (es)"}),(0,l.jsx)(w.A,{value:"en",children:"English (en)"}),(0,l.jsx)(w.A,{value:"pt",children:"Portuguese (pt)"})]})]}),(0,l.jsx)(h.A,{variant:"outlined",fullWidth:!0,multiline:!0,rows:4,value:j,disabled:!0,margin:"normal"})]}),(0,l.jsxs)(g.A,{children:[(0,l.jsx)(d.A,{onClick:()=>r(!1),color:"secondary",children:"Close"}),(0,l.jsx)(d.A,{onClick:f,color:"primary",children:"Translate"})]})]})};var f=a(8173),C=a.n(f);let W=()=>{let[e,r]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1);return(0,l.jsxs)(o.default,{children:[(0,l.jsx)(n.default,{variant:"h4",gutterBottom:!0,children:"Dictionary USIP"}),(0,l.jsxs)(n.default,{variant:"h6",children:["Este modulo(diccionario) corresponde al recuperatorio del"," ",(0,l.jsx)("span",{style:{color:"red"},children:"modulo-7"})]}),(0,l.jsx)(n.default,{variant:"h7",children:(0,l.jsx)(C(),{href:"https://github.com/yitzhakmatias/RecuperatorioMod7",target:"_blank",rel:"noopener",children:"React URL: https://github.com/yitzhakmatias/RecuperatorioMod7"})}),(0,l.jsx)(s.default,{mb:2}),(0,l.jsx)(d.A,{variant:"contained",color:"primary",onClick:()=>r(!0),style:{marginRight:"10px"},children:"Add Word"}),(0,l.jsx)(d.A,{variant:"contained",color:"secondary",onClick:()=>i(!0),style:{marginRight:"10px"},children:"Remove Word"}),(0,l.jsx)(s.default,{mb:2}),(0,l.jsx)(d.A,{variant:"contained",color:"info",onClick:()=>u(!0),children:"Translate Word"}),e&&(0,l.jsx)(j,{setShow:r}),a&&(0,l.jsx)(A,{setShow:i}),c&&(0,l.jsx)(y,{setShow:u})]})};class b extends t.Component{render(){return(0,l.jsx)(W,{})}}let k=b},4075:(e,r,a)=>{"use strict";a.d(r,{Ay:()=>d,KW:()=>o,Td:()=>n,aA:()=>t,rr:()=>s});let l=(0,a(8943).Z0)({name:"dictionary",initialState:{words:[]},reducers:{setWords:(e,r)=>{e.words=r.payload,localStorage.setItem("words",JSON.stringify(e.words))},addWord:(e,r)=>{let a=localStorage.getItem("words")?JSON.parse(localStorage.getItem("words")):[];e.words=[...a,r.payload],localStorage.setItem("words",JSON.stringify(e.words))},removeWord:(e,r)=>{let a=localStorage.getItem("words")?JSON.parse(localStorage.getItem("words")):[];e.words=a.filter(e=>!Object.values(e).includes(r.payload)),localStorage.setItem("words",JSON.stringify(e.words))},translateWord:(e,r)=>{let{word:a,language:l}=r.payload,t=(localStorage.getItem("words")?JSON.parse(localStorage.getItem("words")):[]).find(e=>{if(e.es===a)return e[l]});return t?r.words=t[l]:r.words="Not Found",r.payload}}}),{setWords:t,addWord:o,removeWord:n,translateWord:s}=l.actions,d=l.reducer}},e=>{var r=r=>e(e.s=r);e.O(0,[592,269,803,441,517,358],()=>r(1546)),_N_E=e.O()}]);