"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[58862],{6470:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(59496),o=n(13352),a=n(7426);function i(e){let{name:t}=e;const n=(0,a.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),i=[];let l=[];for(let a=0;a<n.docs.length;a++){const{contentTitle:e,excerpt:t,path:s,frontMatter:c}=n.docs[a];l.push(r.createElement(o.Z,{to:s,size:"sm",title:c?.title||e,description:c?.description||t})),(2==l.length||n.docs.length<2||a==n.docs.length-1)&&(i.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},l)),l=[])}return r.createElement(r.Fragment,null,i)}},13352:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59496),o=n(45924),a=n(62515);function i(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function l(e){let{size:t,title:n,icon:o}=e;return o?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(i,{size:t,title:n}),o):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(i,{size:t,title:n})):null}function s(e){let{to:t,note:n=!1,size:i="",title:s,img:c="",icon:d=!1,description:g=!1,descriptionLink:m=!1}=e;i=i.toLowerCase();let u=(0,o.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==i,"ngrok--card-lg":"lg"==i,"ngrok--card-xl":"xl"==i});return r.createElement(a.Z,{to:t},r.createElement("div",{className:u},c&&r.createElement("img",{src:c}),r.createElement(l,{size:i,title:s,icon:d}),g&&r.createElement("p",null,g),m&&r.createElement("a",null,m)))}},76936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(51163),o=(n(59496),n(49613)),a=n(6470);const i={name:"clerk",title:"Clerk Integration Hub",sidebar_label:"Clerk",description:"Keep your local store in sync, send a welcome email, or get notified of an organizational status change. \nAll without changing code or poking your firewall.\n",excerpt:"Securely sync your store, send emails, or get Clerk notifications with ngrok.\n"},l=void 0,s={unversionedId:"integrations/clerk/index",id:"integrations/clerk/index",title:"Clerk Integration Hub",description:"Keep your local store in sync, send a welcome email, or get notified of an organizational status change. \nAll without changing code or poking your firewall.\n",source:"@site/docs/integrations/clerk/index.mdx",sourceDirName:"integrations/clerk",slug:"/integrations/clerk/",permalink:"/docs/integrations/clerk/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/clerk/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"clerk",title:"Clerk Integration Hub",sidebar_label:"Clerk",description:"Keep your local store in sync, send a welcome email, or get notified of an organizational status change. \nAll without changing code or poking your firewall.\n",excerpt:"Securely sync your store, send emails, or get Clerk notifications with ngrok.\n"},sidebar:"docs",previous:{title:"Clearbit Webhooks",permalink:"/docs/integrations/clearbit/webhooks"},next:{title:"Clerk Webhooks",permalink:"/docs/integrations/clerk/webhooks"}},c={},d=[],g={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,i.description),(0,o.kt)(a.Z,{name:i.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);