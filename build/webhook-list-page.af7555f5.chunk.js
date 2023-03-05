"use strict";(self.webpackChunkecommerce_cloth=self.webpackChunkecommerce_cloth||[]).push([[4121],{11199:(We,S,t)=>{t.r(S),t.d(S,{default:()=>ge});var e=t(67294),s=t(68547),W=t(87751),B=t(49656),U=t(97132),F=t(17034),X=t(67838),j=t(36989),J=t(49066),Q=t(89722),M=t(11047),Y=t(7681),A=t(12028),x=t(41451),q=t(11057),_=t(49386),ee=t(63985),$=t(47144),d=t(18374),te=t(550),g=t(75515),H=t(29728),ne=t(63237),b=t(45697),P=t(71893),K=t(41580);const y=P.default.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,oe=P.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${y} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${y}:before {
    transform: translateX(1rem);
  }
`,T=e.forwardRef(({label:o,onChange:i,onLabel:a,offLabel:r,selected:h,visibleLabels:m,...E},l)=>e.createElement(oe,{ref:l,role:"switch","aria-checked":h,"aria-label":o,onClick:i,visibleLabels:m,type:"button",...E},e.createElement(M.k,null,e.createElement(y,null,e.createElement("span",null,a),e.createElement("span",null,r)),m&&e.createElement(K.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:h?"success600":"danger600"},h?a:r))));T.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},T.propTypes={label:b.string.isRequired,offLabel:b.string,onChange:b.func.isRequired,onLabel:b.string,selected:b.bool.isRequired,visibleLabels:b.bool},T.displayName="Switch";var le=t(185),ae=t(14087),C=t(96315),se=t(4585),G=t(20022),ie=t(86031),re=t(18172),de=t(36968),ce=t.n(de);const Ee={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},ue=(o,i)=>(0,re.default)(o,a=>{switch(i.type){case"GET_DATA_SUCCEEDED":{a.webhooks=i.data,a.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{a.loadingWebhooks=!o.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{ce()(a,["webhooks",...i.keys],i.value);break}case"SET_WEBHOOK_TO_DELETE":{a.webhookToDelete=i.id;break}case"SET_WEBHOOKS_TO_DELETE":{i.value?a.webhooksToDelete.push(i.id):a.webhooksToDelete=o.webhooksToDelete.filter(r=>r!==i.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{o.webhooksToDelete.length===0?a.webhooksToDelete=o.webhooks.map(r=>r.id):a.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{a.webhooks=o.webhooks.filter(r=>!o.webhooksToDelete.includes(r.id)),a.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{a.webhooks=o.webhooks.filter((r,h)=>h!==i.index),a.webhookToDelete=null;break}default:return a}});var he=t(25108);const me=()=>{const{isLoading:o,allowedActions:{canCreate:i,canRead:a,canUpdate:r,canDelete:h}}=(0,s.useRBAC)(W.Z.settings.webhooks),m=(0,s.useNotification)(),E=(0,e.useRef)(!0),{formatMessage:l}=(0,U.useIntl)(),[be,v]=(0,e.useState)(!1),[{webhooks:L,webhooksToDelete:O,webhookToDelete:w,loadingWebhooks:p},u]=(0,e.useReducer)(ue,Ee),{notifyStatus:fe}=(0,ae.G)();(0,s.useFocusWhenNavigate)();const{push:Te}=(0,B.useHistory)(),{pathname:N}=(0,B.useLocation)(),D=L.length,f=O.length,I=n=>L.findIndex(c=>c.id===n);(0,e.useEffect)(()=>(E.current=!0,()=>{E.current=!1}),[]),(0,e.useEffect)(()=>{a&&ve()},[a]);const ve=async()=>{try{const{data:n}=await(0,s.request)("/admin/webhooks",{method:"GET"});E.current&&(u({type:"GET_DATA_SUCCEEDED",data:n}),fe("webhooks have been loaded"))}catch(n){he.log(n),E.current&&(n.code!==20&&m({type:"warning",message:{id:"notification.error"}}),u({type:"TOGGLE_LOADING"}))}},Le=()=>{v(n=>!n)},De=()=>{w?ke():ye()},ke=async()=>{try{await(0,s.request)(`/admin/webhooks/${w}`,{method:"DELETE"}),u({type:"WEBHOOK_DELETED",index:I(w)})}catch(n){n.code!==20&&m({type:"warning",message:{id:"notification.error"}})}v(!1)},ye=async()=>{const n={ids:O};try{await(0,s.request)("/admin/webhooks/batch-delete",{method:"POST",body:n}),E.current&&u({type:"WEBHOOKS_DELETED"})}catch(c){E.current&&c.code!==20&&m({type:"warning",message:{id:"notification.error"}})}v(!1)},R=n=>{v(!0),n!=="all"&&u({type:"SET_WEBHOOK_TO_DELETE",id:n})},Ce=async(n,c)=>{const V=I(c),pe=L[V],Z=[V,"isEnabled"],z={...pe,isEnabled:n};delete z.id;try{u({type:"SET_WEBHOOK_ENABLED",keys:Z,value:n}),await(0,s.request)(`/admin/webhooks/${c}`,{method:"PUT",body:z})}catch(Se){E.current&&(u({type:"SET_WEBHOOK_ENABLED",keys:Z,value:!n}),Se.code!==20&&m({type:"warning",message:{id:"notification.error"}}))}},Oe=()=>{u({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},we=(n,c)=>{u({type:"SET_WEBHOOKS_TO_DELETE",value:n,id:c})},k=n=>{Te(`${N}/${n}`)};return e.createElement(F.A,null,e.createElement(s.SettingsPageTitle,{name:"Webhooks"}),e.createElement(le.o,{"aria-busy":o||p},e.createElement(X.T,{title:l({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:l({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:i&&!p&&e.createElement(s.LinkButton,{startIcon:e.createElement(C.default,null),variant:"default",to:`${N}/create`,size:"S"},l({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),f>0&&h&&e.createElement(j.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(g.Z,{variant:"epsilon",textColor:"neutral600"},l({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:f})),e.createElement(H.z,{onClick:()=>R("all"),startIcon:e.createElement(G.default,null),size:"L",variant:"danger-light"},l({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(J.D,null,o||p?e.createElement(K.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.LoadingIndicatorPage,null)):e.createElement(e.Fragment,null,D>0?e.createElement(q.i,{colCount:5,rowCount:D+1,footer:e.createElement(_.c,{onClick:()=>i?k("create"):{},icon:e.createElement(C.default,null)},l({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(ee.h,null,e.createElement($.Tr,null,e.createElement(d.Th,null,e.createElement(x.C,{"aria-label":l({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:f>0&&f<D,value:f===D,onValueChange:Oe})),e.createElement(d.Th,{width:"20%"},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,{width:"60%"},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(d.Th,{width:"20%"},e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(d.Th,null,e.createElement(ne.T,null,l({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(te.p,null,L.map(n=>e.createElement($.Tr,{key:n.id,...(0,s.onRowClick)({fn:()=>k(n.id),condition:r})},e.createElement(d.Td,{...s.stopPropagation},e.createElement(x.C,{"aria-label":`${l({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:O?.includes(n.id),onValueChange:c=>we(c,n.id),id:"select",name:"select"})),e.createElement(d.Td,null,e.createElement(g.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(d.Td,null,e.createElement(g.Z,{textColor:"neutral800"},n.url)),e.createElement(d.Td,null,e.createElement(M.k,{...s.stopPropagation},e.createElement(T,{onLabel:l({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:l({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${l({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:()=>Ce(!n.isEnabled,n.id),visibleLabels:!0}))),e.createElement(d.Td,null,e.createElement(Y.K,{horizontal:!0,spacing:1,...s.stopPropagation},r&&e.createElement(A.h,{onClick:()=>{k(n.id)},label:l({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(se.Z,null),noBorder:!0}),h&&e.createElement(A.h,{onClick:()=>R(n.id),label:l({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(G.default,null),noBorder:!0,id:`delete-${n.id}`}))))))):e.createElement(Q.x,{icon:e.createElement(ie.default,{width:"160px"}),content:l({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(H.z,{variant:"secondary",startIcon:e.createElement(C.default,null),onClick:()=>i?k("create"):{}},l({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),e.createElement(s.ConfirmDialog,{isOpen:be,onToggleDialog:Le,onConfirm:De}))},ge=()=>e.createElement(s.CheckPagePermissions,{permissions:W.Z.settings.webhooks.main},e.createElement(me,null))}}]);
