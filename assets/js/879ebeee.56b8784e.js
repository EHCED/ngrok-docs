"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[94583],{50194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var r=a(51163),o=(a(59496),a(49613));const n={sidebar_position:1},d="HTTPS Edge",s={unversionedId:"cloud-edge/edges/https",id:"cloud-edge/edges/https",title:"HTTPS Edge",description:"---",source:"@site/docs/cloud-edge/edges/https.md",sourceDirName:"cloud-edge/edges",slug:"/cloud-edge/edges/https",permalink:"/docs/cloud-edge/edges/https",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/cloud-edge/edges/https.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Edges",permalink:"/docs/cloud-edge/edges/"},next:{title:"TCP Edge",permalink:"/docs/cloud-edge/edges/tcp"}},l={},i=[{value:"HTTPS Edge Routes",id:"https-edge-routes",level:3},{value:"HTTPS Edge Modules",id:"https-edge-modules",level:3}],u={toc:i},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"https-edge"},"HTTPS Edge"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code."),(0,o.kt)("h3",{id:"https-edge-routes"},"HTTPS Edge Routes"),(0,o.kt)("p",null,"The HTTPS edges allows you to define one or more routes, each with their own custom set of modules. Each route is defined using a path selector, which will match a path on the request to that endpoint. This can be useful for adding OAuth to specific areas of your website, or stitching multiple services together into a single website. Routes can share the same backend, or you can use a different backend for each route."),(0,o.kt)("h3",{id:"https-edge-modules"},"HTTPS Edge Modules"),(0,o.kt)("p",null,"Modules can be added to each route of an HTTPS edge to change the behavior of the traffic flowing through that edge. Here are the available modules for the HTTPS edge."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Module"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/mutual-tls"},"Mutual TLS")),(0,o.kt)("td",{parentName:"tr",align:null},'Also known as "TLS client authentication", connections must complete a mutual TLS handshake in which the client presents a valid certificate signed by any of the root certificate authorities that you upload.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/tls-termination"},"TLS")),(0,o.kt)("td",{parentName:"tr",align:null},"Allows you to configure whether ngrok terminates TLS traffic at its edge or forwards the TLS traffic through unterminated.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/circuit-breaker"},"Circuit Breaker")),(0,o.kt)("td",{parentName:"tr",align:null},"Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/compression"},"Compression")),(0,o.kt)("td",{parentName:"tr",align:null},"If an HTTP request includes an Accept-Encoding header, HTTP responses will be automatically compressed and a Content-Encoding response header will be added.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/ip-restrictions"},"IP Restrictions")),(0,o.kt)("td",{parentName:"tr",align:null},"IP Restrictions allow you to attach one or more IP policies to the route.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/oauth"},"OAuth")),(0,o.kt)("td",{parentName:"tr",align:null},"The OAuth module enforces an OAuth authentication flow in front of any route it is enabled on.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/openid-connect"},"OpenID Connect (OIDC)")),(0,o.kt)("td",{parentName:"tr",align:null},"This module restricts endpoint access to only users authorized by a OpenID Identity Provider.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/request-headers"},"Request Headers")),(0,o.kt)("td",{parentName:"tr",align:null},"The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/response-headers"},"Response Headers")),(0,o.kt)("td",{parentName:"tr",align:null},"The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/saml"},"SAML")),(0,o.kt)("td",{parentName:"tr",align:null},"This module restricts endpoint access to only users authorized by a SAML IdP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-edge/modules/webhook-verification"},"Webhook Verification")),(0,o.kt)("td",{parentName:"tr",align:null},"The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or GitHub.")))))}p.isMDXComponent=!0}}]);