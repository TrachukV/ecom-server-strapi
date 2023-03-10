"use strict";(self.webpackChunkecommerce_cloth=self.webpackChunkecommerce_cloth||[]).push([[5905],{57134:(_,A,n)=>{n.r(A),n.d(A,{default:()=>it});var e=n(67294),r=n(68547),s=n(96315),B=n(67109),M=n(85018),z=n(4585),W=n(29728),J=n(11047),k=n(7681),x=n(41580),H=n(67838),le=n(49066),S=n(27361),l=n.n(S),v=n(18721),f=n.n(v),u=n(18446),T=n.n(u),O=n(11700),j=n.n(O),I=n(97132),Q=n(49656),ee=n(45697),o=n.n(ee),Z=n(75515),ye=n(11057),he=n(63985),Ee=n(47144),te=n(18374),Be=n(49386),ve=n(26478),X=n(13588),C=n(27821),b=n(5002),G=n(28702),ke=n(70968);const Ie=(0,C.default)(G.Flex)`
  border-radius: 50%;
  color: ${({theme:t,isActive:a})=>a?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function re({isActive:t}){return e.createElement(Ie,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}re.defaultProps={isActive:!1},re.propTypes={isActive:o().bool};const be=(0,C.default)(G.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,r.pxToRem)(8)};

  svg {
    width: ${(0,r.pxToRem)(10)};
    height: ${(0,r.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Fe=(0,C.default)(G.Flex)`
  width: ${(0,r.pxToRem)(140)};
  height: ${(0,r.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${be} {
      display: block;
    }

    ${G.Typography} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function ie({component:t,dzName:a,index:i,isActive:d,isInDevelopmentMode:p,onClick:c}){const{modifiedData:y,removeComponentFromDynamicZone:L}=(0,X.Z)(),{schema:{displayName:$}}=l()(y,["components",t],{schema:{}}),R=h=>{h.stopPropagation(),L(a,i)};return e.createElement(Fe,{as:"button",alignItems:"center",direction:"column",className:d?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:c},e.createElement(re,{isActive:d}),e.createElement(G.Box,{marginTop:1,maxWidth:"100%"},e.createElement(G.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},$)),p&&e.createElement(be,{as:"button",onClick:R,type:"button"},e.createElement(ke.default,null)))}ie.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},ie.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Pe=ie,Te=C.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,r.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,r.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:i})=>a?`background-color: ${i.colors.primary200};`:t?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function se({customRowComponent:t,component:a,isFromDynamicZone:i,isNestedInDZComponent:d,firstLoopComponentUid:p}){const{modifiedData:c}=(0,X.Z)(),{schema:{attributes:y}}=l()(c,["components",a],{schema:{attributes:[]}});return e.createElement(Te,{isChildOfDynamicZone:i,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Re,{customRowComponent:t,items:y,targetUid:a,firstLoopComponentUid:p||a,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:d,isSub:!0,secondLoopComponentUid:p?a:null})))}se.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},se.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ce=se,ze=(0,C.default)(s.default)`
  width: ${(0,r.pxToRem)(32)};
  height: ${(0,r.pxToRem)(32)};
  padding: ${(0,r.pxToRem)(9)};
  border-radius: ${(0,r.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Se=(0,C.default)(x.x)`
  height: ${(0,r.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Oe=(0,C.default)(k.K)`
  width: 100%;
  overflow-x: auto;
`,Ne=(0,C.default)(x.x)`
  padding-top: ${(0,r.pxToRem)(90)};
`,Ue=(0,C.default)(k.K)`
  flex-shrink: 0;
  width: ${(0,r.pxToRem)(140)};
  height: ${(0,r.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function ce({customRowComponent:t,components:a,addComponent:i,name:d,targetUid:p}){const{isInDevelopmentMode:c}=(0,X.Z)(),[y,L]=(0,e.useState)(0),{formatMessage:$}=(0,I.useIntl)(),R=m=>{y!==m&&L(m)},h=()=>{i(d)};return e.createElement(Te,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Se,{paddingLeft:8},e.createElement(Oe,{horizontal:!0,spacing:2},c&&e.createElement("button",{type:"button",onClick:h},e.createElement(Ue,{spacing:1},e.createElement(ze,null),e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},$({id:(0,b.Z)("button.component.add"),formatMessage:"Add a component"})))),a.map((m,g)=>e.createElement(Pe,{key:m,dzName:d,index:g,component:m,isActive:y===g,isInDevelopmentMode:c,onClick:()=>R(g)})))),e.createElement(Ne,null,a.map((m,g)=>{const E={customRowComponent:t,component:m};return e.createElement(x.x,{tabId:`${g}`,key:m,style:{display:y===g?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ce,{...E,isFromDynamicZone:!0,targetUid:p,key:m}))))}))))}ce.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ce.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const We=ce,je=(0,C.default)(x.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,Ve=(0,C.default)(x.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,Ke=(0,C.default)(x.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,xe=({children:t,icon:a,color:i,...d})=>e.createElement(Ke,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...d},e.createElement(J.k,null,e.createElement(Ve,{color:i,"aria-hidden":!0,background:`${i}200`},a),e.createElement(x.x,{paddingLeft:3},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:`${i}600`},t))));xe.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const He=xe;function de({addComponentToDZ:t,customRowComponent:a,editTarget:i,firstLoopComponentUid:d,isFromDynamicZone:p,isMain:c,isNestedInDZComponent:y,isSub:L,items:$,secondLoopComponentUid:R,targetUid:h}){const{formatMessage:m}=(0,I.useIntl)(),{trackUsage:g}=(0,r.useTracking)(),{isInDevelopmentMode:E,modifiedData:V,isInContentTypeView:F}=(0,X.Z)(),{onOpenModalAddField:N}=(0,ve.Z)(),w=()=>{g("hasClickedCTBAddFieldBanner"),N({forTarget:i,targetUid:h})};return h?$.length===0&&c?e.createElement(ye.i,{colCount:2,rowCount:2},e.createElement(he.h,null,e.createElement(Ee.Tr,null,e.createElement(te.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.name",defaultMessage:"Name"}))),e.createElement(te.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.EmptyBodyTable,{action:e.createElement(W.z,{onClick:w,size:"L",startIcon:e.createElement(s.default,null),variant:"secondary"},m({id:(0,b.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:F?{id:(0,b.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,b.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(je,null,e.createElement(x.x,{paddingLeft:6,paddingRight:c?6:0,...c&&{style:{overflowX:"auto"}}},e.createElement("table",null,c&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,$.map(P=>{const{type:K}=P,Y=a;return e.createElement(e.Fragment,{key:P.name},e.createElement(Y,{...P,isNestedInDZComponent:y,targetUid:h,editTarget:i,firstLoopComponentUid:d,isFromDynamicZone:p,secondLoopComponentUid:R}),K==="component"&&e.createElement(Ce,{...P,customRowComponent:a,targetUid:h,isNestedInDZComponent:p,editTarget:i,firstLoopComponentUid:d}),K==="dynamiczone"&&e.createElement(We,{...P,customRowComponent:a,addComponent:t,targetUid:h}))})))),c&&E&&e.createElement(Be.c,{icon:e.createElement(s.default,null),onClick:w},m({id:(0,b.Z)(`form.button.add.field.to.${V.contentType?V.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})),L&&E&&e.createElement(He,{icon:e.createElement(s.default,null),onClick:w,color:p?"primary":"neutral"},m({id:(0,b.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(ye.i,{colCount:2,rowCount:2},e.createElement(he.h,null,e.createElement(Ee.Tr,null,e.createElement(te.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.name",defaultMessage:"Name"}))),e.createElement(te.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.EmptyBodyTable,{colSpan:2,content:{id:(0,b.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}de.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},de.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const Re=de;var Me=n(12028),Xe=n(49358),Ge=n(20022);const Je=(0,C.default)(x.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Qe=C.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Ze=t=>e.createElement(Je,null,e.createElement(Qe,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ze.propTypes={color:o().string.isRequired};const Ye=Ze,me=({content:t})=>j()(t);me.defaultProps={content:null},me.propTypes={content:o().string};const qe=me,_e=(0,C.default)(x.x)`
  position: relative;
`;var et=n(66848);const pe=({type:t,customField:a,repeatable:i})=>{const{formatMessage:d}=(0,I.useIntl)();let p=t;return["integer","biginteger","float","decimal"].includes(t)?p="number":["string"].includes(t)&&(p="text"),a?e.createElement(Z.Z,null,d({id:(0,b.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(Z.Z,null,d({id:(0,b.Z)(`attribute.${p}`),defaultMessage:t}),"\xA0",i&&d({id:(0,b.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};pe.defaultProps={customField:null,repeatable:!1},pe.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const tt=pe;function ue({configurable:t,customField:a,editTarget:i,firstLoopComponentUid:d,isFromDynamicZone:p,name:c,onClick:y,relation:L,repeatable:$,secondLoopComponentUid:R,target:h,targetUid:m,type:g}){const{contentTypes:E,isInDevelopmentMode:V,removeAttribute:F}=(0,X.Z)(),{formatMessage:N}=(0,I.useIntl)(),w=g==="relation"&&L.includes("morph"),P=["integer","biginteger","float","decimal"].includes(g)?"number":g,K=l()(E,[h],{}),Y=l()(K,["schema","displayName"],""),q=l()(K,"plugin"),fe=h?"relation":P,ne=()=>{w||t!==!1&&y(i,R||d||m,c,g,a)};let U;return R&&d?U=2:d?U=1:U=0,e.createElement(_e,{as:"tr",...(0,r.onRowClick)({fn:ne,condition:V&&t&&!w})},e.createElement("td",{style:{position:"relative"}},U!==0&&e.createElement(Ye,{color:p?"primary200":"neutral150"}),e.createElement(k.K,{paddingLeft:2,spacing:4,horizontal:!0},e.createElement(et.Z,{type:fe,customField:a}),e.createElement(Z.Z,{fontWeight:"bold"},c))),e.createElement("td",null,h?e.createElement(Z.Z,null,N({id:(0,b.Z)(`modelPage.attribute.${w?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${N({id:(0,b.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(tt,{type:g,customField:a,repeatable:$})),e.createElement("td",null,V?e.createElement(J.k,{justifyContent:"flex-end",...r.stopPropagation},t?e.createElement(k.K,{horizontal:!0,spacing:1},!w&&e.createElement(Me.h,{onClick:ne,label:`${N({id:"app.utils.edit",defaultMessage:"Edit"})} ${c}`,noBorder:!0,icon:e.createElement(z.Z,null)}),e.createElement(Me.h,{onClick:oe=>{oe.stopPropagation(),F(i,c,R||d||"")},label:`${N({id:"global.delete",defaultMessage:"Delete"})} ${c}`,noBorder:!0,icon:e.createElement(Ge.default,null)})):e.createElement(Xe.Z,null)):e.createElement(x.x,{height:(0,r.pxToRem)(32)})))}ue.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},ue.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const nt=(0,e.memo)(ue),ot=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var at=n(98432);const lt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},ge=({disabled:t,isTemporary:a,isInContentTypeView:i,contentTypeKind:d,targetUid:p})=>{const{formatMessage:c}=(0,I.useIntl)(),{push:y}=(0,Q.useHistory)(),{collectionTypesConfigurations:L,componentsConfigurations:$,singleTypesConfigurations:R}=lt,h=c({id:"content-type-builder.form.button.configure-view"});let m=L;const g=()=>(a||y(i?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return i&&d==="singleType"&&(m=R),i||(m=$),e.createElement(r.CheckPermissions,{permissions:m},e.createElement(W.z,{startIcon:e.createElement(at.Z,null),variant:"tertiary",onClick:g,disabled:a||t},h))};ge.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},ge.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const rt=(0,e.memo)(ge),it=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:i,isInContentTypeView:d,submitData:p}=(0,X.Z)(),{formatMessage:c}=(0,I.useIntl)(),{trackUsage:y}=(0,r.useTracking)(),L=(0,Q.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:$,onOpenModalAddField:R,onOpenModalEditField:h,onOpenModalEditSchema:m,onOpenModalEditCustomField:g}=(0,ve.Z)(),E=d?"contentType":"component",V=[E,"schema","attributes"],F=l()(a,[E,"uid"]),N=l()(a,[E,"isTemporary"],!1),w=l()(a,[E,"schema","kind"],null),P=l()(a,V,[]),K=f()(t,[E,"plugin"]),Y=!T()(a,t),q=d?"contentType":"component",fe=D=>{$({dynamicZoneTarget:D,targetUid:F})},ne=async(D,$e,Le,Ae,we)=>{const De=ot(Ae);we?g({forTarget:D,targetUid:$e,attributeName:Le,attributeType:De,customFieldUid:we}):h({forTarget:D,targetUid:$e,attributeName:Le,attributeType:De,step:Ae==="component"?"2":null})};let U=l()(a,[E,"schema","displayName"],"");const oe=l()(a,[E,"schema","kind"],""),ae=L?.params.currentUID==="create-content-type";!U&&ae&&(U=c({id:(0,b.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const st=()=>{const D=oe||E;D==="collectionType"&&y("willEditNameOfContentType"),D==="singleType"&&y("willEditNameOfSingleType"),m({modalType:E,forTarget:E,targetUid:F,kind:D})};return e.createElement(e.Fragment,null,e.createElement(Q.Prompt,{message:c({id:(0,b.Z)("prompt.unsaved")}),when:Y}),e.createElement(H.T,{id:"title",primaryAction:i&&e.createElement(k.K,{horizontal:!0,spacing:2},!ae&&e.createElement(W.z,{startIcon:e.createElement(s.default,null),variant:"secondary",onClick:()=>{R({forTarget:q,targetUid:F})}},c({id:(0,b.Z)("button.attributes.add.another")})),e.createElement(W.z,{startIcon:e.createElement(M.Z,null),onClick:()=>p(),type:"submit",disabled:T()(a,t)},c({id:"global.save",defaultMessage:"Save"}))),secondaryAction:i&&!K&&!ae&&e.createElement(W.z,{startIcon:e.createElement(z.Z,null),variant:"tertiary",onClick:st},c({id:"app.utils.edit",defaultMessage:"Edit"})),title:j()(U),subtitle:c({id:(0,b.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(r.Link,{startIcon:e.createElement(B.Z,null),to:"/plugins/content-type-builder/"},c({id:"global.back",defaultMessage:"Back"}))}),e.createElement(le.D,null,e.createElement(k.K,{spacing:4},e.createElement(J.k,{justifyContent:"flex-end"},e.createElement(k.K,{horizontal:!0,spacing:2},e.createElement(rt,{key:"link-to-cm-settings-view",targetUid:F,isTemporary:N,isInContentTypeView:d,contentTypeKind:w,disabled:ae}))),e.createElement(x.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Re,{items:P,customRowComponent:D=>e.createElement(nt,{...D,onClick:ne}),addComponentToDZ:fe,targetUid:F,editTarget:q,isMain:!0})))))}},49066:(_,A,n)=>{n.d(A,{D:()=>B});var e=n(67294),r=n(45697),s=n(41580);const B=({children:M})=>e.createElement(s.x,{paddingLeft:10,paddingRight:10},M);B.propTypes={children:r.node.isRequired}},67838:(_,A,n)=>{n.d(A,{A:()=>S,T:()=>H});var e=n(67294),r=n(27821),s=n(45697),B=n(75515),M=n(41580),z=n(11047);const W=l=>{const v=(0,e.useRef)(null),[f,u]=(0,e.useState)(!0),T=([O])=>{u(O.isIntersecting)};return(0,e.useEffect)(()=>{const O=v.current,j=new IntersectionObserver(T,l);return O&&j.observe(v.current),()=>{O&&j.disconnect()}},[v,l]),[v,f]};var J=n(98402);const k=(l,v)=>{const f=(0,J.useCallbackRef)(v);(0,e.useLayoutEffect)(()=>{const u=new ResizeObserver(f);return Array.isArray(l)?l.forEach(T=>{T.current&&u.observe(T.current)}):l.current&&u.observe(l.current),()=>{u.disconnect()}},[l,f])},x=()=>{const l=(0,e.useRef)(null),[v,f]=(0,e.useState)(null),[u,T]=W({root:null,rootMargin:"0px",threshold:0});return k(u,()=>{u.current&&f(u.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{l.current&&f(l.current.getBoundingClientRect())},[l]),{containerRef:u,isVisible:T,baseHeaderLayoutRef:l,headerSize:v}},H=l=>{const{containerRef:v,isVisible:f,baseHeaderLayoutRef:u,headerSize:T}=x();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:T?.height},ref:v},f&&e.createElement(S,{ref:u,...l})),!f&&e.createElement(S,{...l,sticky:!0,width:T?.width}))};H.displayName="HeaderLayout";const le=(0,r.default)(M.x)`
  width: ${l=>l.width}px;
`,S=e.forwardRef(({navigationAction:l,primaryAction:v,secondaryAction:f,subtitle:u,title:T,sticky:O,width:j,...I},Q)=>{const ee=typeof u=="string";return O?e.createElement(le,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(z.k,{justifyContent:"space-between"},e.createElement(z.k,null,l&&e.createElement(M.x,{paddingRight:3},l),e.createElement(M.x,null,e.createElement(B.Z,{variant:"beta",as:"h1",...I},T),ee?e.createElement(B.Z,{variant:"pi",textColor:"neutral600"},u):u),f?e.createElement(M.x,{paddingLeft:4},f):null),e.createElement(z.k,null,v?e.createElement(M.x,{paddingLeft:2},v):void 0))):e.createElement(M.x,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0},l?e.createElement(M.x,{paddingBottom:2},l):null,e.createElement(z.k,{justifyContent:"space-between"},e.createElement(z.k,null,e.createElement(B.Z,{as:"h1",variant:"alpha",...I},T),f?e.createElement(M.x,{paddingLeft:4},f):null),v),ee?e.createElement(B.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},u):u)});S.displayName="BaseHeaderLayout",S.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},S.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,sticky:s.bool,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired,width:s.number},H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},H.propTypes={navigationAction:s.node,primaryAction:s.node,secondaryAction:s.node,subtitle:s.oneOfType([s.string,s.node]),title:s.string.isRequired}},67109:(_,A,n)=>{n.d(A,{Z:()=>r});var e=n(85893);function r(s){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"})})}},98432:(_,A,n)=>{n.d(A,{Z:()=>r});var e=n(85893);function r(s){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,e.jsx)("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"})})}}}]);
