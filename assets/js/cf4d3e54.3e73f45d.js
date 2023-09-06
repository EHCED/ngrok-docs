"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[73226],{13089:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=o(51163),a=(o(59496),o(49613));const r={description:"Develop and test HostedHooks webhooks from localhost"},s="HostedHooks Webhooks",p={unversionedId:"integrations/hostedhooks/webhooks",id:"integrations/hostedhooks/webhooks",title:"HostedHooks Webhooks",description:"Develop and test HostedHooks webhooks from localhost",source:"@site/docs/integrations/hostedhooks/webhooks.md",sourceDirName:"integrations/hostedhooks",slug:"/integrations/hostedhooks/webhooks",permalink:"/docs/integrations/hostedhooks/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/hostedhooks/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test HostedHooks webhooks from localhost"},sidebar:"docs",previous:{title:"HoostedHooks",permalink:"/docs/integrations/hostedhooks/"},next:{title:"HubSpot",permalink:"/docs/integrations/hubspot/"}},i={},l=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate HostedHooks",id:"setup-webhook",level:2},{value:"Run Webhooks with HostedHooks and ngrok",id:"run-webhook",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:l},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hostedhooks-webhooks"},"HostedHooks Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate HostedHooks webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure HostedHooks webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with HostedHooks by using Webhooks.\nHostedHooks webhooks can be used to route requests to HostedHooks servers to your localhost app."),(0,a.kt)("p",null,"By integrating ngrok with HostedHooks, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test HostedHooks webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from HostedHooks")," in real-time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay HostedHooks Webhook requests")," with a single click and without spending time reproducing events manually in your HostedHooks account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with HostedHooks validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with HostedHooks).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:o(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate HostedHooks"),(0,a.kt)("p",null,"To register a webhook on your HostedHooks account follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access ",(0,a.kt)("a",{parentName:"p",href:"https://www.hostedhooks.com/"},"HostedHooks")," and sign in using your HostedHooks account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Apps")," on the left menu, and then click ",(0,a.kt)("strong",{parentName:"p"},"Setup New App"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Setup Your Application")," page, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"My App")," in the ",(0,a.kt)("strong",{parentName:"p"},"App Name")," field and then click ",(0,a.kt)("strong",{parentName:"p"},"Save App"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the app page, click ",(0,a.kt)("strong",{parentName:"p"},"Create Your Webhook Event")," (Step 1), enter ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.event")," in the ",(0,a.kt)("strong",{parentName:"p"},"Event Type")," field, and then click ",(0,a.kt)("strong",{parentName:"p"},"Save Webhook Event"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the app page, click ",(0,a.kt)("strong",{parentName:"p"},"Create your first Subscriber")," (Step 2), enter ",(0,a.kt)("inlineCode",{parentName:"p"},"My Localhost App")," in the ",(0,a.kt)("strong",{parentName:"p"},"Subscription Name")," field, and then click ",(0,a.kt)("strong",{parentName:"p"},"Save Subscription"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"My Localhost App Subscription")," page, click ",(0,a.kt)("strong",{parentName:"p"},"+ New Endpoint"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"New Endpoint")," page, enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,a.kt)("strong",{parentName:"p"},"Webhook URL")," field (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"hostedhooks URL to Publish",src:o(3563).Z,width:"1138",height:"527"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0")," in the ",(0,a.kt)("strong",{parentName:"p"},"Version")," field, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok")," in the ",(0,a.kt)("strong",{parentName:"p"},"Description")," field, and then click ",(0,a.kt)("strong",{parentName:"p"},"Save Endpoint"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the left arrow to go back to the app page and then click ",(0,a.kt)("strong",{parentName:"p"},"Subscribe to a webhook event")," (Step 4).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Details")," page, select ",(0,a.kt)("strong",{parentName:"p"},"myapp.event")," in the ",(0,a.kt)("strong",{parentName:"p"},"Subscribed Events")," selector and then click ",(0,a.kt)("strong",{parentName:"p"},"Add Event"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the left arrow twice to go back to the app page and then click ",(0,a.kt)("strong",{parentName:"p"},"Send a test webhook message"),"."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives the ",(0,a.kt)("strong",{parentName:"p"},"myapp.event")," event notification and logs both headers and body in the terminal."))),(0,a.kt)("h3",{id:"run-webhook"},"Run Webhooks with HostedHooks and ngrok"),(0,a.kt)("p",null,"Whenever you post a message to the HostedHooks message endpoint using the value ",(0,a.kt)("strong",{parentName:"p"},"myapp.event")," as the event type inside the body of the request, HostedHooks routes this message to your localhost app through your ngrok URL.\nYou can trigger new calls from HostedHooks to your application by following the instructions below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a terminal window and run the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST --url https://hostedhooks.com/api/v1/apps/APP_ID/messages\n\\\n--header \'Authorization: Bearer API_KEY\' \\\n--header \'Content-Type: application/json\' --data \'{\n    "data": {\n        "foo": "bar"\n    },\n    "event_type": "myapp.event",\n    "version": "1.0",\n    "event_id": "00001"\n}\'\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Replace the following with the corresponding values:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APP_ID: The ID of your application. Copy the value from your app page on HostedHooks, in the ",(0,a.kt)("strong",{parentName:"li"},"My App")," section."),(0,a.kt)("li",{parentName:"ul"},"API_KEY: The ",(0,a.kt)("strong",{parentName:"li"},"API Key")," value from the ",(0,a.kt)("strong",{parentName:"li"},"Settings")," page on HostedHooks.")),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives the event notification and logs both headers and body in the terminal."))),(0,a.kt)("p",null,"Alternatively, you can verify the log of the webhook call in HostedHooks:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://www.hostedhooks.com/"},"HostedHooks Dashboard"),", click ",(0,a.kt)("strong",{parentName:"p"},"Apps")," on the left menu, and then click your app tile.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On your app page, scroll down to the ",(0,a.kt)("strong",{parentName:"p"},"Inbound Messages")," section and verify the messages sent to your app.\n",(0,a.kt)("img",{alt:"Webhook Logs",src:o(52062).Z,width:"1133",height:"536"})))),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect HostedHooks' webhooks call, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by HostedHooks."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:o(26985).Z,width:"1431",height:"573"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from HostedHooks. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from HostedHooks.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"type")," field inside the body of the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the new request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your HostedHooks webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://www.hostedhooks.com/"},"HostedHooks Dashboard"),", click ",(0,a.kt)("strong",{parentName:"p"},"Apps")," on the left menu, and then click your app tile.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the app page, click ",(0,a.kt)("strong",{parentName:"p"},"View")," in the ",(0,a.kt)("strong",{parentName:"p"},"Subscribers")," section and click ",(0,a.kt)("strong",{parentName:"p"},"View")," in the ",(0,a.kt)("strong",{parentName:"p"},"Endpoints")," section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Endpoint")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Reveal")," in the ",(0,a.kt)("strong",{parentName:"p"},"Signing Secret")," field and copy the value that appears.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{app sign secret}")," with the value you copied before:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook hostedhooks --verify-webhook-secret {app sign secret}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Post a new message to the message endpoint of HostedHooks by following the same procedure as the ",(0,a.kt)("a",{parentName:"p",href:"#run-webhook"},"Run Webhooks with HostedHooks and ngrok")," section.\n",(0,a.kt)("strong",{parentName:"p"},"Tip"),": Modify the value of the ",(0,a.kt)("strong",{parentName:"p"},"event_id")," field in the JSON body. This value must be unique per app."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}u.isMDXComponent=!0},26985:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_introspection_hostedhooks_webhooks-fc4f6fe1048de7d43d8b57125f1457dc.png"},52062:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_logs_hostedhooks-fe3fd7906c65d17b756ded626fefb4ff.png"},3563:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_url_configuration_hostedhooks-161d040bb2d55d40c6efaa8c363734b4.png"},84162:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);