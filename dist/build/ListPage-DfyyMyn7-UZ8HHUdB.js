import{u as L,aN as O,q as I,n as N,r as M,aO as $,t as V,a3 as q,o as W,j as e,P as f,b,S as H,be as w,bf as U,y as z,bg as G,z as Q,A as _,C as x,T as i,V as J,D as K,bh as X,G as Y,bi as Z,bj as ee,bk as se,aa as te,E as p,F as ae,B as ne,I as oe,bl as le}from"./strapi-CH0gFqpy.js";import{u as ie}from"./useAdminRoles-H1TFksyF-B-bvW4Je.js";import{s as re}from"./selectors-D9-d7hGq-GIWJdkla.js";const de=({id:s,name:o,description:a,usersCount:d,icons:c,rowIndex:j,canUpdate:u})=>{const{formatMessage:g}=L(),[,r]=c,m=g({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:d});return e.jsxs(_,{"aria-rowindex":j,onClick:u?r.onClick:void 0,children:[e.jsx(p,{maxWidth:"13rem",children:e.jsx(i,{ellipsis:!0,textColor:"neutral800",children:o})}),e.jsx(p,{maxWidth:"25rem",children:e.jsx(i,{ellipsis:!0,textColor:"neutral800",children:a})}),e.jsx(p,{children:e.jsx(i,{textColor:"neutral800",children:m})}),e.jsx(p,{children:e.jsx(ae,{justifyContent:"flex-end",onClick:n=>n.stopPropagation(),children:c.map((n,h)=>n?e.jsx(ne,{paddingLeft:h===0?0:1,children:e.jsx(oe,{...n,variant:"ghost"})},n.label):null)})})]},s)},ce=()=>{const{formatMessage:s}=L(),o=O(re),{formatAPIError:a}=I(),{toggleNotification:d}=N(),[c,j]=M.useState(!1),[{query:u}]=$(),{isLoading:g,allowedActions:{canCreate:r,canDelete:m,canRead:n,canUpdate:h}}=V(o.settings?.roles),{roles:T,refetch:A}=ie({filters:u?._q?{name:{$containsi:u._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:g||!n}),E=q(),[{roleToDelete:y},C]=M.useReducer(ge,ue),{post:k}=W(),P=async()=>{try{C({type:"ON_REMOVE_ROLES"}),await k("/admin/roles/batch-delete",{ids:[y]}),await A(),C({type:"RESET_DATA_TO_DELETE"})}catch(t){le(t)&&d({type:"danger",message:a(t)})}},R=()=>E("new"),D=()=>j(t=>!t),S=t=>l=>{l.preventDefault(),l.stopPropagation(),t.usersCount?d({type:"info",message:s({id:"Roles.ListPage.notification.delete-not-allowed"})}):(C({type:"SET_ROLE_TO_DELETE",id:t.id}),D())},v=t=>l=>{l.preventDefault(),l.stopPropagation(),E(`duplicate/${t.id}`)},F=T.length+1,B=6;return g?e.jsx(f.Loading,{}):e.jsxs(f.Main,{children:[e.jsx(f.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(b.Header,{primaryAction:r?e.jsx(H,{onClick:R,startIcon:e.jsx(w,{}),size:"S",children:s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:s({id:"global.roles",defaultMessage:"roles"}),subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"})}),n&&e.jsx(b.Action,{startActions:e.jsx(U,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:s({id:"global.roles",defaultMessage:"roles"})})})}),n&&e.jsx(b.Content,{children:e.jsxs(z,{colCount:B,rowCount:F,footer:r?e.jsx(G,{onClick:R,icon:e.jsx(w,{}),children:s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[e.jsx(Q,{children:e.jsxs(_,{"aria-rowindex":1,children:[e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.name",defaultMessage:"Name"})})}),e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.description",defaultMessage:"Description"})})}),e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.users",defaultMessage:"Users"})})}),e.jsx(x,{children:e.jsx(J,{children:s({id:"global.actions",defaultMessage:"Actions"})})})]})}),e.jsx(K,{children:T?.map((t,l)=>e.jsx(de,{id:t.id,name:t.name,description:t.description,usersCount:t.usersCount,icons:[r&&{onClick:v(t),label:s({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),children:e.jsx(X,{})},h&&{onClick:()=>E(t.id.toString()),label:s({id:"app.utils.edit",defaultMessage:"Edit"}),children:e.jsx(Y,{})},m&&{onClick:S(t),label:s({id:"global.delete",defaultMessage:"Delete"}),children:e.jsx(Z,{})}].filter(Boolean),rowIndex:l+2,canUpdate:h},t.id))})]})}),e.jsx(ee.Root,{open:c,onOpenChange:D,children:e.jsx(se,{onConfirm:P})})]})},ue={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ge=(s,o)=>te(s,a=>{switch(o.type){case"ON_REMOVE_ROLES":{a.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{a.shouldRefetchData=!0,a.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{a.shouldRefetchData=!1,a.roleToDelete=null,a.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{a.roleToDelete=o.id;break}default:return a}}),fe=()=>{const s=O(o=>o.admin_app.permissions.settings?.roles.read);return e.jsx(f.Protect,{permissions:s,children:e.jsx(ce,{})})};export{ce as ListPage,fe as ProtectedListPage};
