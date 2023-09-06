"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[78855],{6470:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(59496),r=n(13352),s=n(7426);function i(e){let{name:t}=e;const n=(0,s.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),i=[];let l=[];for(let s=0;s<n.docs.length;s++){const{contentTitle:e,excerpt:t,path:g,frontMatter:a}=n.docs[s];l.push(o.createElement(r.Z,{to:g,size:"sm",title:a?.title||e,description:a?.description||t})),(2==l.length||n.docs.length<2||s==n.docs.length-1)&&(i.push(o.createElement("div",{className:"ngrok--cards ngrok--cards-row"},l)),l=[])}return o.createElement(o.Fragment,null,i)}},13352:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(59496),r=n(45924),s=n(62515);function i(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return o.createElement("h4",{className:"fw-600"},n);case"xl":return o.createElement("h2",{className:"fw-600"},n);default:return o.createElement("h3",{className:"fw-600"},n)}}function l(e){let{size:t,title:n,icon:r}=e;return r?o.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&o.createElement(i,{size:t,title:n}),r):n?o.createElement("div",{className:"ngrok--card-heading"},o.createElement(i,{size:t,title:n})):null}function g(e){let{to:t,note:n=!1,size:i="",title:g,img:a="",icon:c=!1,description:d=!1,descriptionLink:u=!1}=e;i=i.toLowerCase();let m=(0,r.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==i,"ngrok--card-lg":"lg"==i,"ngrok--card-xl":"xl"==i});return o.createElement(s.Z,{to:t},o.createElement("div",{className:m},a&&o.createElement("img",{src:a}),o.createElement(l,{size:i,title:g,icon:c}),d&&o.createElement("p",null,d),u&&o.createElement("a",null,u)))}},64533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>c});var o=n(51163),r=(n(59496),n(49613)),s=n(6470);const i={name:"google-gke",title:"Google Kubernetes Engine (GKE)",sidebar_label:"Google Kubernetes Engine (GKE)",description:"Use the ngrok Ingress Controller on Google Kubernetes Engine (GKE) to provide instant ingress to your production services\n",excerpt:"Run the ngrok Kubernetes Ingress Controller on Google Kubernetes Engine (GKE).\n"},l=void 0,g={unversionedId:"integrations/google-gke/index",id:"integrations/google-gke/index",title:"Google Kubernetes Engine (GKE)",description:"Use the ngrok Ingress Controller on Google Kubernetes Engine (GKE) to provide instant ingress to your production services\n",source:"@site/docs/integrations/google-gke/index.mdx",sourceDirName:"integrations/google-gke",slug:"/integrations/google-gke/",permalink:"/docs/integrations/google-gke/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/google-gke/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1692824825,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{name:"google-gke",title:"Google Kubernetes Engine (GKE)",sidebar_label:"Google Kubernetes Engine (GKE)",description:"Use the ngrok Ingress Controller on Google Kubernetes Engine (GKE) to provide instant ingress to your production services\n",excerpt:"Run the ngrok Kubernetes Ingress Controller on Google Kubernetes Engine (GKE).\n"},sidebar:"docs",previous:{title:"Google",permalink:"/docs/integrations/google/oauth"},next:{title:"Getting Started",permalink:"/docs/integrations/google-gke/google-kubernetes-engine"}},a={},c=[],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,i.description),(0,r.kt)(s.Z,{name:i.name,mdxType:"IntegrationPageList"}))}m.isMDXComponent=!0}}]);