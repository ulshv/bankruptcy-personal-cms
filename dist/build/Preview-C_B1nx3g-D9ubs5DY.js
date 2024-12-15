import{d as v,ex as h,cv as y,j as e,cw as C,cx as T,bn as j,t as L,P as u,B as f,cz as I,u as p,aO as x,r as M,cD as D,cu as F,ey as H,cA as R,cB as B,F as E,n as k,bD as A,Q as g,I as P,dH as S,T as z,b7 as N,bw as q,bV as Q,cH as $}from"./strapi-CH0gFqpy.js";import{getDocumentStatus as b}from"./EditViewPage-B11aeMcf-Bh1O3iGf.js";import"./Field-Bj_RgtGo-e1yBKzPz.js";import"./Relations-C6pwmDXh-BmOuTmk_.js";import"./useDragAndDrop-DdHgKsqq-DzCxVEnp.js";import"./relations-BdnxoX6f-CQbFYT7U.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-BUOyUFoI.js";import"./objects-D6yBsdmx-BW3FhFoV.js";import"./useDebounce-DmuSJIF3-DCowMsiS.js";const O=()=>{const t=c("PreviewContent",r=>r.url),{formatMessage:s}=p();return e.jsx(f,{src:t,title:s({id:"content-manager.preview.panel.title",defaultMessage:"Preview"}),width:"100%",height:"100%",borderWidth:0,tag:"iframe"})},U=()=>{const[{query:t}]=x(),{formatMessage:s}=p();return e.jsx(P,{tag:N,relative:"path",to:{pathname:"..",search:q.stringify({plugins:t.plugins},{encode:!1})},label:s({id:"content-manager.preview.header.close",defaultMessage:"Close preview"}),children:e.jsx(Q,{})})},V=()=>{const t=c("PreviewHeader",a=>a.document),s=c("PreviewHeader",a=>a.schema),r=c("PreviewHeader",a=>a.meta);if(!(s?.options?.draftAndPublish??!1))return null;const i=b(t,r);return e.jsx($,{status:i,size:"XS"})},W=()=>{const{formatMessage:t}=p(),[{query:s},r]=x(),o=c("PreviewHeader",d=>d.document),i=c("PreviewHeader",d=>d.schema),a=c("PreviewHeader",d=>d.meta),l=i?.options?.draftAndPublish??!1,n=b(o,a),m=d=>{(d==="published"||d==="draft")&&r({status:d},"push",!0)};return l?e.jsx(e.Fragment,{children:e.jsx(h.Root,{variant:"simple",value:s.status||"draft",onValueChange:m,children:e.jsxs(h.List,{"aria-label":t({id:"preview.tabs.label",defaultMessage:"Document status"}),children:[e.jsx(w,{value:"draft",children:t({id:"content-manager.containers.List.draft",defaultMessage:"draft"})}),e.jsx(w,{value:"published",disabled:n==="draft",children:t({id:"content-manager.containers.List.published",defaultMessage:"published"})})]})})}):null},G=()=>{const t=c("PreviewHeader",n=>n.mainField),r=c("PreviewHeader",n=>n.document)[t],{formatMessage:o}=p(),{toggleNotification:i}=k(),{copy:a}=A(),l=()=>{a(window.location.href),i({message:o({id:"content-manager.preview.copy.success",defaultMessage:"Copied preview link"}),type:"success"})};return e.jsxs(g.Root,{gap:3,gridCols:3,paddingLeft:2,paddingRight:2,background:"neutral0",borderColor:"neutral150",tag:"header",children:[e.jsxs(g.Item,{xs:1,paddingTop:2,paddingBottom:2,gap:3,children:[e.jsx(U,{}),e.jsx(X,{tag:"h1",fontWeight:600,fontSize:2,maxWidth:"200px",children:r}),e.jsx(V,{})]}),e.jsx(g.Item,{xs:1,marginBottom:"-1px",alignItems:"end",margin:"auto",children:e.jsx(W,{})}),e.jsx(g.Item,{xs:1,justifyContent:"end",paddingTop:2,paddingBottom:2,children:e.jsx(P,{type:"button",label:o({id:"preview.copy.label",defaultMessage:"Copy preview link"}),onClick:l,children:e.jsx(S,{})})})]})},X=v(z)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=v(h.Trigger)`
  text-transform: uppercase;
`,[Y,c]=y("PreviewPage"),_=()=>{const{formatMessage:t}=p(),{slug:s,id:r,collectionType:o}=j(),[{query:i}]=x(),a=M.useMemo(()=>D(i),[i]);if(!o)throw new Error("Could not find collectionType in url params");if(!s)throw new Error("Could not find model in url params");if(o===F&&!r)throw new Error("Could not find documentId in url params");const l=H({params:{contentType:s},query:{documentId:r,locale:a.locale,status:a.status}}),n=R({model:s,collectionType:o,documentId:r,params:a}),m=B(s);return n.isLoading||l.isLoading||m.isLoading?e.jsx(u.Loading,{}):l.error||m.error||!n.document||!n.meta||!n.schema?e.jsx(u.Error,{}):l.data?.data?.url?e.jsxs(e.Fragment,{children:[e.jsx(u.Title,{children:t({id:"content-manager.preview.page-title",defaultMessage:"{contentType} preview"},{contentType:m.edit.settings.displayName})}),e.jsx(Y,{url:l.data.data.url,mainField:m.edit.settings.mainField,document:n.document,meta:n.meta,schema:n.schema,children:e.jsxs(E,{direction:"column",height:"100%",alignItems:"stretch",children:[e.jsx(G,{}),e.jsx(O,{})]})})]}):e.jsx(u.NoData,{})},J=()=>{const{slug:t}=j(),{permissions:s=[],isLoading:r,error:o}=L([{action:"plugin::content-manager.explorer.read",subject:t}]);return r?e.jsx(u.Loading,{}):o||!t?e.jsx(f,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(u.Error,{})}):e.jsx(f,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(u.Protect,{permissions:s,children:({permissions:i})=>e.jsx(I,{permissions:i,children:e.jsx(_,{})})})})},de=()=>e.jsx(C,{children:e.jsx(T,{children:e.jsx(J,{})})});export{de as ProtectedPreviewPage,c as usePreviewContext};