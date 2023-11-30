var ge=Object.defineProperty;var je=(t,s,i)=>s in t?ge(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i;var y=(t,s,i)=>(je(t,typeof s!="symbol"?s+"":s,i),i);import{c as me,j as e,i as k,u as pe,d as O,G as l,F as fe,I as ve,S as K,M as v,B as x,D as V,T as g,C as A,A as R,a as G,r as b,P as _,b as Z,l as ee,e as te,f as ye,g as we,R as j,L as be,h as Se,k as Te,m as Ce,n as ke,o as _e,p as se,q as ie,s as z,t as T,v as re,w as Ie,V as $e,x as Pe,y as De,z as Fe,E as Ee,H as $,J as Oe,K as ze,N as Ae,O as Re,Q as ne,U as Ge,W as Le,X as Me,Y as We,Z as Be}from"./vendor-da67081a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const Ne=me({shape:{borderRadius:0},palette:{primary:{light:"#ed5455",main:"#ed0400",dark:"#d40400",contrastText:"#fff"},secondary:{light:"#61a0ff",main:"#3c7fdd",dark:"#61a0ff",contrastText:"#000"}},typography:{button:{fontWeight:"bold"},fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),He="modulepreload",Ve=function(t){return"/"+t},U={},C=function(s,i,r){if(!i||i.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(i.map(a=>{if(a=Ve(a),a in U)return;U[a]=!0;const c=a.endsWith(".css"),o=c?'[rel="stylesheet"]':"";if(!!r)for(let u=n.length-1;u>=0;u--){const p=n[u];if(p.href===a&&(!c||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${o}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":He,c||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),c)return new Promise((u,p)=>{d.addEventListener("load",u),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>s()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})},Ue=({api:t})=>({loader:()=>t.getVersion()});class w{constructor(){y(this,"at",0);y(this,"ch","");y(this,"text","");y(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(s){throw{name:"SyntaxError",message:s,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(s){s!==this.ch&&this.error(`Expected '${s}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var s="";if(this.ch==="-"&&(s="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)s+=this.ch,this.next();if(this.ch===".")for(s+=".";this.next()&&this.ch>="0"&&this.ch<="9";)s+=this.ch;if(this.ch==="e"||this.ch==="E")for(s+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(s+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)s+=this.ch,this.next();return+s}string(){var s,i,r="",n;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),r;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(n=0,i=0;i<4&&(s=parseInt(this.next(),16),!!isFinite(s));i++)n=n*16+s;r+=String.fromCharCode(n)}else if(this.escapee[this.ch])r+=this.escapee[this.ch];else break;else r+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var s=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),s;for(;this.ch;){if(s.push(this.value()),this.white(),this.ch==="]")return this.check("]"),s;this.check(","),this.white()}}this.error("Bad array")}object(){var s,i={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),i;for(;this.ch;){if(s=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(i,s)&&this.error('Duplicate key "'+s+'"'),i[s]=this.value(),this.white(),this.ch==="}")return this.check("}"),i;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(s,i){let r;return this.text=s,this.at=0,this.ch=" ",r=this.value(),this.white(),this.ch&&this.error("Syntax error"),i!==void 0?function n(a,c){var o,h,d=a[c];if(d&&typeof d=="object")for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(h=n(d,o),h!==void 0?d[o]=h:delete d[o]);return i.call(a,c,d)}({"":r},""):r}}class Ye{constructor(s){y(this,"endpoint");this.endpoint=s}async getAdditionalGraphData(s,i,r){const n=await fetch(`${this.endpoint}/projects/${s}/${i}/graphs_data/${r}`);if(n.ok)return new w().parse(await n.text());throw Error(`${n.status}, ${n.statusText}`)}async getAdditionalWidgetData(s,i,r){const n=await fetch(`${this.endpoint}/projects/${s}/${i}/graphs_data/${r}`);if(n.ok)return new w().parse(await n.text());throw Error(`${n.status}, ${n.statusText}`)}async getDashboard(s,i){const r=await fetch(`${this.endpoint}/projects/${s}/${i}/data`);if(r.ok)return new w().parse(await r.text());throw Error(`${r.status}, ${r.statusText}`)}async getProjects(){const s=await fetch(`${this.endpoint}/projects`);if(s.ok){let i=new w().parse(await s.text());return console.log(i),i}throw Error(`${s.status}, ${s.statusText}`)}async getProjectDashboard(s,i,r,n){const a=new URLSearchParams;i&&a.append("timestamp_start",i),r&&a.append("timestamp_end",r);const c=await fetch(`${this.endpoint}/projects/${s}/dashboard?${a.toString()}`,{signal:n});if(c.ok)return new w().parse(await c.text());throw Error(`${c.status}, ${c.statusText}`)}async getReports(s){const i=await fetch(`${this.endpoint}/projects/${s}/reports`);if(i.ok)return new w().parse(await i.text());throw Error(`${i.status}, ${i.statusText}`)}async getTestSuites(s){const i=await fetch(`${this.endpoint}/projects/${s}/test_suites`);if(i.ok)return new w().parse(await i.text());throw Error(`${i.status}, ${i.statusText}`)}async getProjectInfo(s){const i=await fetch(`${this.endpoint}/projects/${s}/info`);if(i.ok)return new w().parse(await i.text());throw Error(`${i.status}, ${i.statusText}`)}async getVersion(){const s=await fetch(`${this.endpoint}/version`);if(s.ok)return await s.json();throw Error(`${s.status}, ${s.statusText}`)}async editProjectInfo(s){const i=await fetch(`${this.endpoint}/projects/${s.id}/info`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!i.ok)throw Error(`${i.status}, ${i.statusText}`);return i}}const S=new Ye("/api"),qe="/static/img/logo.png",{loader:Je}=Ue({api:S}),Xe={path:"/",lazy:async()=>{const{HomeComponentTemplate:t,...s}=await C(()=>import("./index-85fad7ff.js"),["static/js/index-85fad7ff.js","static/js/vendor-da67081a.js"]);return{Component:()=>e.jsx(t,{logoSrc:qe}),...s}},loader:Je},Qe=({api:t})=>({loader:({params:s})=>{const{projectId:i}=s;return k(i,"missing projectId"),t.getProjectInfo(i)}}),Ke=t=>{if(t.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})};function I(t){return typeof t!=typeof new Date?(console.log(`not a date ${typeof t}: ${t}`),t):`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}T${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`}const m={FROM:"date_from",TO:"date_to"},Ze=t=>{let s=t.get(m.FROM),i=t.get(m.TO);return{date_from:s,date_to:i}},et=({dataRanges:t})=>{const[s,i]=pe(),{date_from:r,date_to:n}=Ze(s),a=O(r||t.minDate),c=O(n||t.maxDate);return{isCorrectTimeInterval:a.isValid()&&c.isValid()&&a.isBefore(c),date_from:a,date_to:c,setSearchParams:i}},ts=({dataRanges:t})=>{const{isCorrectTimeInterval:s,date_from:i,date_to:r,setSearchParams:n}=et({dataRanges:t}),a=s?"":"incorrect time interval",c=o=>h=>{n(d=>(d.delete(o),h&&d.append(o,I(h.toDate())),d),{preventScrollReset:!0,replace:!0})};return e.jsxs(l,{container:!0,padding:1,zIndex:1,my:3,gap:2,justifyContent:"flex-end",justifyItems:"center",children:[e.jsx(l,{item:!0,xs:12,md:2,children:e.jsxs(fe,{fullWidth:!0,children:[e.jsx(ve,{children:"Period"}),e.jsxs(K,{variant:"standard",defaultValue:"",onChange:o=>{const[h,d]=o.target.value.split(",");if(h===""){n(f=>(f.delete(m.FROM),f.delete(m.TO),f.append(m.FROM,I(t.minDate.toDate())),f.append(m.TO,I(t.maxDate.toDate())),f),{preventScrollReset:!0,replace:!0});return}const[u,p]=[Number(h),d],H=t.maxDate.subtract(u,p);n(f=>(f.delete(m.FROM),f.delete(m.TO),f.append(m.FROM,I(H.isBefore(t.minDate)?t.minDate.toDate():H.toDate())),f.append(m.TO,I(t.maxDate.toDate())),f),{preventScrollReset:!0,replace:!0})},children:[e.jsx(v,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(v,{value:"10,minutes",children:"Last 10 Minutes"}),e.jsx(v,{value:"30,minutes",children:"Last 30 Minutes"}),e.jsx(v,{value:"1,hours",children:"Last 1 Hours"}),e.jsx(v,{value:"2,hours",children:"Last 2 Hours"}),e.jsx(v,{value:"8,hours",children:"Last 8 Hours"}),e.jsx(v,{value:"24,hours",children:"Last 24 Hours"}),e.jsx(v,{value:"7,days",children:"Last 7 Days"}),e.jsx(v,{value:"14,days",children:"Last 14 Days"}),e.jsx(v,{value:"28,days",children:"Last 28 Days"}),e.jsx(v,{value:"60,days",children:"Last 60 Days"})]})]})}),e.jsx(l,{item:!0,children:e.jsxs(x,{display:"flex",alignItems:"center",gap:2,children:[e.jsx(V,{minDate:t.minDate,maxDate:t.maxDate&&r,slotProps:{textField:{variant:"standard"}},label:"From",value:i,onChange:c(m.FROM)}),e.jsx(x,{height:1,display:"flex",alignItems:"center",children:e.jsx(g,{children:" - "})}),e.jsx(V,{minDate:t.minDate&&i,maxDate:t.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:r,onChange:c(m.TO)})]})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(A,{unmountOnExit:!0,in:!s,children:e.jsxs(R,{severity:"error",children:[e.jsx(G,{children:"Error"}),a]})})})]})},tt=({api:t})=>({loader:({params:s,request:i})=>{k(s.projectId,"missing projectId");const{searchParams:r}=new URL(i.url);let n=r.get(m.FROM),a=r.get(m.TO);return n&&!O(n).isValid()&&(n=null),a&&!O(a).isValid()&&(a=null),t.getProjectDashboard(s.projectId,n,a)}});var E=(t=>(t[t.Small=0]="Small",t[t.Medium=1]="Medium",t[t.Big=2]="Big",t))(E||{});function D(t){return t.palette.mode==="dark"?ee:te}function F(t){return t.palette.mode==="light"?te:ee}const M=t=>{const[s,i]=b.useState({open:!1});return e.jsxs(_,{elevation:0,onClick:r=>i(n=>({open:!n.open,anchorEl:r.currentTarget})),sx:[{color:r=>F(r)(r.palette.info.main,.6),backgroundColor:r=>D(r)(r.palette.info.main,.9)},t.data.state==="success"&&{color:r=>F(r)(r.palette.success.main,.6),backgroundColor:r=>D(r)(r.palette.success.main,.9)},t.data.state==="warning"&&{color:r=>F(r)(r.palette.warning.main,.6),backgroundColor:r=>D(r)(r.palette.warning.main,.9)},t.data.state==="error"&&{color:r=>F(r)(r.palette.error.main,.6),backgroundColor:r=>D(r)(r.palette.error.main,.9)}],children:[e.jsx(g,{align:"center",variant:"h6",component:"div",children:t.data.value}),e.jsx(g,{align:"center",variant:"body1",component:"div",children:t.data.text}),e.jsx(Z,{open:s.open,anchorEl:s.anchorEl,anchorOrigin:{horizontal:"left",vertical:"bottom"},children:t.customPopup??e.jsx(g,{padding:1,children:t.data.longText})})]})},ae=t=>e.jsxs(R,{severity:t.data.severity,children:[e.jsx(G,{children:t.data.title}),t.data.text]}),Y=t=>{const{alertStats:s}=t;return e.jsx(M,{data:{value:`${s.triggered.last_24h}`,state:"info",text:"alerts in the last 24 hours",longText:"alerts triggered in the period / alerts triggered in 24 hours / alerts active "},customPopup:e.jsx(g,{sx:{pr:1},children:e.jsxs("ul",{children:[e.jsxs("li",{children:[s.triggered.period," alerts triggered in the period"]}),e.jsxs("li",{children:[s.triggered.last_24h," alerts triggered in 24 hours"]}),e.jsxs("li",{children:[s.active," total active alerts"]})]})})})};function st(t){return t===12?{xs:12,sm:12,md:12,lg:12}:t===6?{xs:12,sm:12,md:6,lg:6}:t===3?{xs:12,sm:6,md:3,lg:3}:{xs:6,sm:3,md:1,lg:1}}const it=t=>{const{size:s}=t,i=t.children.alertsPosition??"row",{title:r,details:n,content:a,alerts:c,alertStats:o,insights:h}=t.children,d=c===void 0?!1:c.length>0,u=h===void 0?!1:h.length>0;return e.jsx(l,{item:!0,...st(s),children:e.jsx(ye,{square:!0,elevation:2,children:e.jsx(we,{children:e.jsxs(l,{container:!0,spacing:1,direction:"column",children:[i==="row"?e.jsxs(l,{container:!0,spacing:1,item:!0,children:[e.jsxs(l,{item:!0,xs:d&&i==="row"?9:12,children:[r?e.jsx(g,{variant:"h5",children:r}):e.jsx("div",{}),e.jsx("div",{children:a}),n?e.jsx(g,{variant:"subtitle1",children:n}):e.jsx("div",{})]}),d?e.jsx(l,{container:!0,spacing:1,direction:"column",justifyContent:"center",item:!0,xs:3,children:c?e.jsxs(j.Fragment,{children:[o?e.jsx(l,{item:!0,children:e.jsx(Y,{alertStats:o})}):e.jsx("div",{}),c.map(p=>e.jsx(l,{item:!0,children:e.jsx(M,{data:p})}))]}):e.jsx("div",{})}):e.jsx("div",{})]}):e.jsxs(j.Fragment,{children:[e.jsxs(l,{item:!0,children:[r?e.jsx(g,{variant:"h5",children:r}):e.jsx("div",{}),e.jsx("div",{children:a}),n?e.jsx(g,{variant:"subtitle1",children:n}):e.jsx("div",{})]}),d?e.jsx(l,{item:!0,xs:!0,children:e.jsx(l,{container:!0,direction:"row",spacing:1,children:c?e.jsxs(j.Fragment,{children:[o?e.jsx(l,{item:!0,xs:!0,children:e.jsx(Y,{alertStats:o})}):e.jsx("div",{}),c.map(p=>e.jsx(l,{item:!0,xs:!0,children:e.jsx(M,{data:p})}))]}):e.jsx("div",{})})}):e.jsx("div",{})]}),u?h.map(p=>e.jsx(l,{item:!0,xs:!0,sm:!0,md:!0,children:e.jsx(ae,{data:p})})):e.jsx("div",{})]})})})})},q=t=>e.jsxs("div",{children:[e.jsx(g,{sx:{fontSize:36,textAlign:"center"},children:t.value}),e.jsx(g,{sx:{fontSize:24,textAlign:"center"},children:t.label})]}),rt=t=>e.jsx(j.Fragment,{children:t.counters.length===1?e.jsx(q,{...t.counters[0]}):e.jsx(l,{container:!0,spacing:1,direction:"row",alignItems:"center",children:t.counters.map((s,i)=>e.jsx(l,{item:!0,xs:!0,component:x,height:"100%",children:e.jsx(_,{children:e.jsx(q,{...s})})},i))})}),nt=t=>e.jsxs("div",{children:[e.jsxs(x,{display:"flex",alignItems:"center",children:[e.jsx(x,{width:"100%",mr:1,children:e.jsx(be,{variant:"determinate",value:t.value/t.maxValue*100})}),e.jsx(x,{minWidth:35,children:e.jsx(g,{variant:"body2",color:"textSecondary",children:`${Math.round(t.value/t.maxValue*100)}%`})})]}),e.jsx(x,{width:"100%",children:e.jsx(g,{variant:"body2",color:"textSecondary",children:t.details??""})})]}),ce=Se(Te),L=t=>e.jsx("div",{children:e.jsx(ce,{data:t.data,layout:{...t.layout,title:void 0},config:{responsive:!0},style:{width:"100%",minHeight:300+100*(1+t.widgetSize/2),maxHeight:400}})});class oe extends j.Component{render(){return e.jsx(l,{container:!0,alignItems:"stretch",spacing:1,direction:"row",mt:1,children:this.props.children})}}const le=()=>e.jsx("div",{children:"Not implemented"}),at=t=>{const s=t.activeTab===-1?0:t.activeTab;return e.jsxs("div",{children:[e.jsx(Ce,{value:s,onChange:t.onNewTabSelected,indicatorColor:"primary",textColor:"primary",children:t.tabs.map((i,r)=>e.jsx(ke,{disabled:i.disabled??!1,label:e.jsx(x,{className:t.tabStyle,children:e.jsxs(x,{display:"flex",children:[e.jsx("span",{children:i.icon}),i.title]})})},r))}),e.jsx(x,{children:t.tabs.map((i,r)=>e.jsx("div",{hidden:(t.activeTab===-1?0:t.activeTab)!==r,children:(t.activeTab===-1?0:t.activeTab)!==r?e.jsx("div",{}):i.tab},r))})]})},B=t=>{const[s,i]=b.useState({activeTab:0});return e.jsx(j.Fragment,{children:e.jsx(at,{activeTab:s.activeTab,onNewTabSelected:(r,n)=>i(a=>({...a,activeTab:n})),tabs:t.tabs})})},ct=t=>e.jsx(B,{tabs:t.graphs.map(s=>({title:s.title,tab:e.jsx(L,{widgetSize:t.widgetSize,data:s.graph.data,layout:s.graph.layout})}))}),ot=t=>e.jsx(_e,{component:_,children:e.jsxs(se,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[e.jsx(ie,{children:e.jsxs(z,{children:[e.jsx(T,{children:t.header[0]},-1),t.header.slice(1).map((s,i)=>e.jsx(T,{align:"right",children:s},i))]})}),e.jsx(re,{children:t.data.map(s=>e.jsxs(z,{children:[e.jsx(T,{component:"th",scope:"row",children:s[0]},-1),s.slice(1).map((i,r)=>e.jsx(T,{align:"right",children:i},r))]},s[0]))})]})});class lt{constructor(s){y(this,"cachedGraphs");y(this,"cachedWidgets");y(this,"inner");this.inner=s,this.cachedGraphs=new Map,this.cachedWidgets=new Map}async getAdditionGraphData(s){let i=this.cachedGraphs.get(s);return i!==void 0||(i=await this.inner.getAdditionGraphData(s),this.cachedGraphs.set(s,i)),i}async getAdditionWidgetData(s){let i=this.cachedWidgets.get(s);return i!==void 0||(i=await this.inner.getAdditionWidgetData(s),this.cachedWidgets.set(s,i)),i}}const de=j.createContext({getAdditionGraphData:()=>new Promise((t,s)=>s("default context doesn't contain methods to get data")),getAdditionWidgetData:()=>new Promise((t,s)=>s("default context doesn't contain methods to get data"))});function ss(t){return new lt(t)}const W=t=>{const[s,i]=b.useState(()=>({status:0}));return b.useEffect(()=>{i({status:1,func:t.func})},[t.func]),s.status===1&&(i(r=>({...r,status:2})),s.func().then(r=>i(n=>({status:3,func:n.func,result:r})))),e.jsx(j.Fragment,{children:s.status===3?t.children?t.children(s.result):e.jsx("div",{}):e.jsx(x,{textAlign:"center",children:e.jsx(Ie,{})})})},dt=t=>e.jsx(de.Consumer,{children:s=>e.jsx(W,{func:()=>s.getAdditionGraphData(t.graphId),children:i=>e.jsx(L,{...i,widgetSize:t.widgetSize})})}),ht=t=>e.jsx(x,{sx:{maxWidth:200,height:50},children:e.jsx($e,{data:[{id:"1",data:t.data[t.xField].map((s,i)=>({x:s,y:t.data[t.yField][i]}))}],margin:{top:0,right:0,bottom:0,left:0},xScale:{type:"linear",min:0,max:25},axisTop:null,colors:[t.color],axisRight:null,enableGridX:!1,enableGridY:!1})}),ut=ht,xt=t=>e.jsx(x,{sx:{maxWidth:200,height:50},children:e.jsx(Pe,{data:[{id:"1",data:t.data[t.xField].map((s,i)=>({x:s,y:t.data[t.yField][i]}))}],margin:{top:3,right:3,bottom:3,left:3},xScale:{type:"linear",min:0,max:1e3},nodeSize:4,colors:[t.color],useMesh:!1,axisTop:null,axisRight:null,enableGridX:!1,enableGridY:!1})}),gt=xt,jt=t=>e.jsx(x,{sx:{maxWidth:200,height:50},children:e.jsx(De,{data:t.data[t.xField].map((s,i)=>({id:s,x:t.data[t.yField][i]})),margin:{top:3,right:3,bottom:3,left:3},indexBy:"id",keys:["x"],colors:[t.color],axisTop:null,axisRight:null,enableGridX:!1,enableGridY:!1})}),mt=jt,pt=t=>t.type??"graph",J=(t,s,i)=>{switch(pt(s)){case"graph":{const r=()=>t.getAdditionGraphData(s.id),n=a=>e.jsx(L,{...a,widgetSize:i});return e.jsx(W,{func:r,children:n})}case"widget":{const r=()=>t.getAdditionWidgetData(s.id),n=a=>P(s.id,a);return e.jsx(W,{func:r,children:n})}default:return e.jsx(le,{})}},N=t=>e.jsx(de.Consumer,{children:s=>e.jsxs(x,{children:[t.details.parts.length>1?e.jsx(B,{tabs:t.details.parts.map(i=>({title:i.title,tab:J(s,i,t.widgetSize)}))}):J(s,t.details.parts[0],t.widgetSize),t.details.insights===void 0?e.jsx(e.Fragment,{}):t.details.insights.map(i=>e.jsx(ae,{data:i}))]})}),ft=new Map([["line",(t,s)=>s[t.field]?e.jsx(ut,{xField:t.options.xField,yField:t.options.yField,color:t.options.color,data:s[t.field]}):e.jsx("div",{})],["scatter",(t,s)=>s[t.field]?e.jsx(gt,{xField:t.options.xField,yField:t.options.yField,color:t.options.color,data:s[t.field]}):e.jsx("div",{})],["histogram",(t,s)=>s[t.field]?e.jsx(mt,{xField:t.options.xField,yField:t.options.yField,color:t.options.color,data:s[t.field]}):e.jsx("div",{})]]),X=t=>t.map(s=>({def:s,gen:ft.get(s.type??"string")})).map(({def:s,gen:i})=>i?{...s,type:void 0,render:r=>i(s,r)}:{...s,sorting:!0,defaultSort:s.sort,type:"string"}),vt=t=>{const[s,i]=b.useState({open:!1,anchorEl:void 0});return e.jsxs(x,{sx:{width:50},onClick:r=>i(n=>({open:!n.open,anchorEl:r.currentTarget})),children:[e.jsx(Ee,{}),e.jsx(Z,{open:s.open,anchorEl:s.anchorEl,anchorOrigin:{horizontal:"left",vertical:"bottom"},children:e.jsx(g,{p:1,children:t.longText})})]})},yt=t=>{const{columns:s,data:i}=t,r={search:!0,showTitle:!1,minBodyHeight:"10vh",pageSize:t.rowsPerPage??5,detailPanelColumnStyle:{minWidth:42}};return e.jsx(j.Fragment,{children:e.jsx(Fe,{columns:t.showInfoColumn??!1?[...X(s),{title:"Info",render:n=>{var a,c,o;return e.jsx(j.Fragment,{children:(a=n.details)!=null&&a.insights?e.jsx(vt,{longText:`${(c=n.details)==null?void 0:c.insights[0].title}: ${(o=n.details)==null?void 0:o.insights[0].text}`}):e.jsx("div",{})})},width:50}]:[...X(s)],data:i,detailPanel:({rowData:n})=>n.graphId?e.jsx(dt,{graphId:n.graphId,widgetSize:t.widgetSize}):n.details?e.jsx(N,{details:n.details,widgetSize:t.widgetSize}):null,options:r})})},wt=t=>e.jsx(B,{tabs:t.tabs.map(s=>({title:s.title,tab:P(t.id+"1",s.widget)}))}),bt=t=>{const[s,i]=b.useState(!1);return e.jsx(j.Fragment,{children:e.jsxs(l,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[e.jsxs(l,{item:!0,xs:2,children:[e.jsx(g,{variant:"h5",children:t.header}),e.jsx(g,{variant:"subtitle1",children:t.description})]}),e.jsx(l,{item:!0,xs:t.graph===void 0?10:5,children:e.jsxs(se,{children:[e.jsx(ie,{children:e.jsx(z,{children:t.metricsValuesHeaders.map((r,n)=>e.jsx(T,{children:r},r+n))})}),e.jsx(re,{children:t.metrics.map((r,n)=>e.jsxs(z,{children:[e.jsx(T,{children:r.label}),r.values.map((a,c)=>e.jsx(T,{children:a},String(a)+c))]},r.label+n))})]})}),t.graph===void 0?e.jsx(e.Fragment,{}):e.jsx(l,{item:!0,xs:5,children:e.jsx(ce,{data:t.graph.data,layout:{...t.graph.layout,title:void 0},config:{responsive:!0},style:{width:"100%",minHeight:150+100*(1+t.widgetSize/2),maxHeight:250}})}),t.details===void 0||t.details.parts.length===0?e.jsx(e.Fragment,{}):e.jsxs(e.Fragment,{children:[e.jsx(l,{item:!0,xs:12,children:e.jsx($,{variant:"outlined",startIcon:s?e.jsx(Oe,{}):e.jsx(ze,{}),onClick:()=>i(r=>!r),children:"Details"})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(A,{in:s,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(N,{details:t.details,widgetSize:t.widgetSize})})})]})]})})},St=t=>{const[s,i]=j.useState({page:0}),r=t.widgets.slice(s.page*t.pageSize,(s.page+1)*t.pageSize);return e.jsxs(oe,{children:[r.map((n,a)=>P(`wi_${a}`,n)),e.jsxs(l,{item:!0,xs:12,children:[e.jsx($,{startIcon:e.jsx(Ae,{}),disabled:s.page===0,onClick:()=>i(n=>({page:n.page-1})),children:"Previous"}),e.jsxs("span",{children:[s.page+1," / ",Math.round(t.widgets.length/t.pageSize)]}),e.jsx($,{endIcon:e.jsx(Re,{}),disabled:s.page>=t.widgets.length/t.pageSize-1,onClick:()=>i(n=>({page:n.page+1})),children:"Next"})]})]})},Tt=t=>e.jsx(e.Fragment,{children:e.jsx(ne,{children:t.text})}),Q=["unknown","success","warning","fail"],he=t=>{switch(t){case"error":case"unknown":return"info";case"success":return"success";case"warning":return"warning";case"fail":return"error"}},ue=({title:t,description:s,state:i,details:r})=>{const[n,a]=b.useState({active:!1}),c=r!=null&&r.parts.length>0;return Q.includes(i)||(console.error(`unexpected state: ${i} (expected one of [${Q.join(", ")}])`),i="unknown"),e.jsx(e.Fragment,{children:e.jsxs(_,{children:[e.jsxs(R,{severity:he(i),action:c?e.jsx($,{onClick:()=>a(o=>({active:!o.active})),color:"inherit",size:"small",children:"Details"}):null,children:[e.jsx(G,{children:t}),e.jsx(ne,{children:s})]}),c?e.jsx(A,{in:n.active,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(_,{style:{padding:"2px"},children:e.jsx(N,{details:r,widgetSize:2})})}):e.jsx(e.Fragment,{})]})})},Ct=({type:t,availableTypes:s,onChange:i})=>e.jsx(e.Fragment,{children:e.jsx(K,{variant:"standard",value:t,onChange:r=>i(r.target.value),native:!0,children:s.map(r=>e.jsx("option",{value:r.id,children:r.title},r.id))})}),kt=({groupInfo:t,tests:s})=>{const[i,r]=b.useState({active:!1});return e.jsx(e.Fragment,{children:e.jsxs(_,{children:[e.jsxs(R,{severity:he(t.severity??"unknown"),icon:!1,action:e.jsx($,{onClick:()=>r(n=>({active:!n.active})),color:"inherit",size:"small",children:i.active?"Hide":"Show"}),children:[e.jsx(G,{children:t.title}),t.description]}),e.jsx(A,{in:i.active,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(l,{container:!0,spacing:2,style:{padding:10,paddingTop:20},children:s.map((n,a)=>e.jsx(l,{item:!0,xs:12,children:e.jsx(ue,{...n})},a))})})]})})},_t=({type:t,groupsInfo:s,tests:i})=>{function r(o){if(o==="status")return[s.find(u=>u.id===o).values,u=>u.state];const h=s.find(u=>u.id===o);if(h===void 0)throw"unexpected type";return[h.values.find(u=>u.id=="no group")!==void 0?h.values:[...h.values,{id:"no group",title:"No Group",sortIndex:-1,description:"No group of this type was provided"}],u=>u.groups[o]??"no group"]}const[n,a]=r(t),c=i.reduce((o,h)=>(o.set(a(h),[...o.get(a(h))??[],h]),o),new Map);return e.jsx(e.Fragment,{children:e.jsx(l,{container:!0,spacing:2,children:Array.from(c.entries()).map(([o,h])=>[n.find(d=>d.id===o)??{id:o,title:o},h]).sort((o,h)=>(o[0].sortIndex??0)-(h[0].sortIndex??0)).map(([o,h],d)=>e.jsx(l,{item:!0,xs:12,children:e.jsx(kt,{groupInfo:o,tests:h})},`test_${d}`))})})},It=[{id:"none",title:"All tests",values:[]},{id:"status",title:"By test status",values:[{id:"success",title:"Passed tests",sortIndex:3,description:"",severity:"success"},{id:"fail",title:"Failed tests",sortIndex:1,description:"",severity:"fail"},{id:"warning",title:"Failed non-critical tests",sortIndex:2,description:"",severity:"warning"},{id:"error",title:"Tests with execution errors",sortIndex:2,description:"",severity:"error"}]}],$t=({tests:t,testGroupTypes:s})=>{const[i,r]=j.useState({group_type:"none"}),n=[];for(let c=0;c<t.length;c++){const o=t[c],h=Object.keys(o.groups);for(const d of h)n.findIndex(u=>u===d)===-1&&n.push(d)}const a=[...It,...(s??[]).filter(c=>n.findIndex(o=>o===c.id)!==-1)];return e.jsx(e.Fragment,{children:e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,children:e.jsx(Ct,{type:i.group_type,availableTypes:a,onChange:c=>r({group_type:c})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(l,{container:!0,spacing:2,children:i.group_type==="none"?t.map((c,o)=>e.jsx(l,{item:!0,xs:12,children:e.jsx(ue,{...c})},`test_${o}`)):e.jsx(_t,{type:i.group_type,groupsInfo:a,tests:t})})})]})})};function Pt(t){return t===E.Small?3:t===E.Medium?6:(t===E.Big,12)}function P(t,s){let i=e.jsx(le,{});if(s.type==="counter")i=e.jsx(rt,{...s.params});else if(s.type==="percent")i=e.jsx(nt,{...s.params});else if(s.type==="big_graph")i=e.jsx(L,{...s.params,widgetSize:s.size});else if(s.type==="tabbed_graph")i=e.jsx(ct,{...s.params,widgetSize:s.size});else if(s.type==="tabs")i=e.jsx(wt,{...s,widgetSize:s.size,id:"twc_"});else if(s.type==="table")i=e.jsx(ot,{...s.params});else if(s.type==="big_table")i=e.jsx(yt,{...s.params,widgetSize:s.size});else if(s.type==="group")i=e.jsx(oe,{children:s.widgets.map((r,n)=>P(`wi_${n}`,r))});else if(s.type==="rich_data")i=e.jsx(bt,{...s.params,widgetSize:s.size});else if(s.type==="list"){const r=s;i=e.jsx(St,{widgets:r.widgets,pageSize:r.pageSize,widgetSize:s.size})}else s.type==="text"?i=e.jsx(Tt,{...s.params}):s.type==="test_suite"&&(i=e.jsx($t,{...s.params}));return e.jsx(it,{size:Pt(s.size),children:{...s,content:i}},t)}const Dt=({widgets:t})=>e.jsx(j.Fragment,{children:t.map((s,i)=>P(`wi_${i}`,s))}),Ft=({widgets:t})=>e.jsx(e.Fragment,{children:e.jsx(l,{container:!0,spacing:3,direction:"row",alignItems:"stretch",children:e.jsx(Dt,{widgets:t})})}),{loader:Et}=tt({api:S}),Ot={index:!0,id:"dashboard",lazy:async()=>{const{DashboardComponentTemplate:t}=await C(()=>import("./index-486b410b.js"),["static/js/index-486b410b.js","static/js/vendor-da67081a.js"]);return{Component:()=>e.jsx(t,{Dashboard:({data:{widgets:s}})=>e.jsx(Ft,{widgets:s})})}},loader:Et},zt=({api:t})=>({loader:({params:s})=>(k(s.projectId,"missing projectId"),t.getReports(s.projectId))}),At=({api:t})=>({loader:({params:s})=>(k(s.projectId,"missing projectId"),t.getTestSuites(s.projectId))}),Rt=({api:t})=>({loader:({params:s})=>{const{projectId:i,snapshotId:r}=s;return k(i,"missing projectId"),k(r,"missing testSuiteId"),t.getDashboard(i,r)}}),{loader:Gt}=Rt({api:S}),xe={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:t,...s}=await C(()=>import("./index-3952a82e.js"),["static/js/index-3952a82e.js","static/js/vendor-da67081a.js"]);return{Component:()=>e.jsx(t,{api:S}),...s}},loader:Gt},{loader:Lt}=zt({api:S}),Mt={id:"reports",path:"reports",lazy:async()=>{const{SnapshotTemplate:t,...s}=await C(()=>import("./index-f77b4e23.js"),["static/js/index-f77b4e23.js","static/js/vendor-da67081a.js","static/js/index-2a2fe5f8.js","static/js/ContentCopy-495ced59.js","static/css/index2.css"]);return{...s,Component:()=>e.jsx(t,{type:"report"})}},loader:Lt,children:[xe]},{loader:Wt}=At({api:S}),Bt={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotTemplate:t,...s}=await C(()=>import("./index-f77b4e23.js"),["static/js/index-f77b4e23.js","static/js/vendor-da67081a.js","static/js/index-2a2fe5f8.js","static/js/ContentCopy-495ced59.js","static/css/index2.css"]);return{...s,Component:()=>e.jsx(t,{type:"test-suite"})}},loader:Wt,children:[xe]},Nt={path:"test_suites/*",loader:({request:t})=>Ge(t.url.replace("/test_suites","/test-suites"))},{loader:Ht}=Qe({api:S}),Vt={path:"projects/:projectId",lazy:()=>C(()=>import("./index-fd2cdb4e.js"),["static/js/index-fd2cdb4e.js","static/js/vendor-da67081a.js","static/js/ContentCopy-495ced59.js"]),loader:Ht,children:[Ot,Mt,Bt,Nt]},Ut=({api:t})=>({loader:()=>t.getProjects(),action:async({request:s})=>{Ke(s);const i=await s.json();return t.editProjectInfo(i)}}),{loader:Yt,action:qt}=Ut({api:S}),Jt={index:!0,lazy:()=>C(()=>import("./index-c1544ac2.js"),["static/js/index-c1544ac2.js","static/js/vendor-da67081a.js","static/js/index-2a2fe5f8.js"]),loader:Yt,action:qt},Xt={path:"*",Component:()=>e.jsx(x,{display:"flex",justifyContent:"center",children:e.jsx(g,{variant:"h4",children:"Page Not Found"})})},Qt={...Xe,children:[Jt,Vt,Xt]},Kt=Le([Qt]);Me.createRoot(document.getElementById("root")).render(e.jsx(j.StrictMode,{children:e.jsx(We,{theme:Ne,children:e.jsx(Be,{router:Kt})})}));export{ss as C,ts as D,de as a,Dt as b,et as u};
