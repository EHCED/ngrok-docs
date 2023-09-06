"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[60565],{58829:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=o(51163),n=(o(59496),o(49613));const a={title:"Securing your applications with OAuth 2.0"},r="Overview",s={unversionedId:"guides/securing-with-oauth",id:"guides/securing-with-oauth",title:"Securing your applications with OAuth 2.0",description:"Ngrok simplifies networking by creating secure ingress to any app, device, or service with a single command or line of code. It's an ingress-as-a-service platform that decouples ingress from infrastructure, removing the hassle of getting code online without provisioning proxies or VPNs.",source:"@site/docs/guides/securing-with-oauth.md",sourceDirName:"guides",slug:"/guides/securing-with-oauth",permalink:"/docs/guides/securing-with-oauth",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/guides/securing-with-oauth.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Securing your applications with OAuth 2.0"},sidebar:"docs",previous:{title:"Corporate Firewall",permalink:"/docs/guides/running-behind-firewalls"},next:{title:"Securing ngrok",permalink:"/docs/guides/securing-your-tunnels"}},u={},l=[],c={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Ngrok simplifies networking by creating secure ingress to any app, device, or service with a single command or line of code. It's an ingress-as-a-service platform that decouples ingress from infrastructure, removing the hassle of getting code online without provisioning proxies or VPNs."),(0,n.kt)("p",null,"If you're exposing endpoints with ngrok, it's important to keep them safe and secure. One way to protect them is by using OAuth, which requires visitors to sign in to view your app or webpage. This guide will walk you through the process of securing your ngrok endpoints with OAuth 2.0."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: OAuth is included on the ngrok free plan up to 5 MAUs.")),(0,n.kt)("h1",{id:"adding-oauth-authentication"},"Adding OAuth Authentication"),(0,n.kt)("p",null,"To secure your applications with OAuth 2.0, you need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"--oauth=")," flag to your tunnel command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ngrok http 80 --oauth=github\n")),(0,n.kt)("p",null,"By adding the OAuth flag in the example above, only users who log into GitHub can access your applications."),(0,n.kt)("p",null,"ngrok supports various major OAuth providers such as Google, GitHub, and Microsoft, as well as any solution compatible with OAuth, including OpenID Connect and SAML. This includes Okta, Auth0, and many other identity providers. ",(0,n.kt)("a",{parentName:"p",href:"https://ngrok.com/docs/cloud-edge/modules/oauth/google/#creating-a-custom-google-oauth-application"},"Learn more about creating custom OAuth applications here.")),(0,n.kt)("h1",{id:"granular-authorization-requests"},"Granular Authorization Requests"),(0,n.kt)("p",null,"After you add OAuth to secure your application, you may want to further restrict access to specific domains or individual users. This granularity is supported by the ",(0,n.kt)("inlineCode",{parentName:"p"},"--oauth-allow")," flags."),(0,n.kt)("p",null,"To restrict access by domain use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--oauth-allow-domain")," flag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ngrok http 8080 --oauth=google --oauth-allow-domain=acme.com,doe.com\n")),(0,n.kt)("p",null,"To restrict access by email use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--oauth-allow-email")," flag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ngrok http 8080 --oauth=google --oauth-allow-email=john@acme.com,jane@doe.com\n")),(0,n.kt)("h1",{id:"additional-security-controls"},"Additional Security Controls"),(0,n.kt)("p",null,"Besides OAuth 2.0, ngrok offers other access controls such as Webhook Verification, Basic Authentication, IP restrictions, and Mutual TLS. Depending on what you\u2019re building, your combination of these controls may differ."))}p.isMDXComponent=!0}}]);