"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[354],{7052:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(4996),l="bookmarklet_nULg",s=n(7294);function p(){var e=s.useState(""),t=e[0],n=e[1],a=function(e,t){return e?'javascript: (function () { let scriptElement = document.createElement("script");scriptElement.src="'+t+"?t="+e+'";document.body.appendChild(scriptElement);})();':""},o=s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 48 48"},s.createElement("path",{fill:"currentColor",d:"M34 6h-20c-2.21 0-3.98 1.79-3.98 4l-.02 32 14-6 14 6v-32c0-2.21-1.79-4-4-4zm0 30l-10-4.35-10 4.35v-26h20v26z"}),s.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}));return s.createElement("div",{className:l},s.createElement("input",{onChange:function(e){return n((function(){return e.target.value}))}}),s.createElement("a",{href:a(t,"https://api.instantrecall.me/"),disabled:!t},o," Instant Recall Test"),s.createElement("a",{href:a(t,"https://api-ir.staging.missena.xyz/"),disabled:!t},o," Instant Recall Test DEV"))}var c=["components"],d={sidebar_position:3},u="Instant Recall",m={unversionedId:"instant-recall",id:"instant-recall",isDocsHomePage:!1,title:"Instant Recall",description:"Description",source:"@site/docs/instant-recall.mdx",sourceDirName:".",slug:"/instant-recall",permalink:"/documentation/docs/instant-recall",editUrl:"https://github.com/missena-corp/documentation/edit/main/docs/docs/instant-recall.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pass Sans Pub",permalink:"/documentation/docs/noad"}},g=[{value:"Description",id:"description",children:[],level:2},{value:"Integrate using Open Graph",id:"integrate-using-open-graph",children:[],level:2},{value:"Integrate using <code>window</code> object",id:"integrate-using-window-object",children:[],level:2},{value:"Integrate using Google Tag Manager",id:"integrate-using-google-tag-manager",children:[],level:2},{value:"Integration with Consent Management Platforms",id:"integration-with-consent-management-platforms",children:[],level:2},{value:"Bookmarklet",id:"bookmarklet",children:[],level:2}],h={toc:g};function k(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instant-recall"},"Instant Recall"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Intant Recall is a service that allows users to save to their email products from merchant websites. The product information that populates the email can be either extracted automatically from already present ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Facebook_Platform#Open_Graph_protocol"},"Open Graph Protocol")," data or it can be provided to the app programmatically.  "),(0,r.kt)("h2",{id:"integrate-using-open-graph"},"Integrate using Open Graph"),(0,r.kt)("p",null,"If there is already Open Graph Protocol data on your page, the Instant Recall app can use it. The following properties are required: ",(0,r.kt)("inlineCode",{parentName:"p"},"og:title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:price:amount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:price:currency")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta property="og:type" content="product">')," element to signify that this is a product page. Here is a sample section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="og:type" content="og:product" />\n<meta property="og:title" content="Friend Smash Coin" />\n<meta\n  property="og:image"\n  content="http://www.friendsmash.com/images/coin_600.png"\n/>\n<meta\n  property="og:description"\n  content="Friend Smash Coins to purchase upgrades and items!"\n/>\n<meta property="og:url" content="http://www.friendsmash.com/og/coins.html" />\n<meta property="og:price:amount" content="0.30" />\n<meta property="og:price:currency" content="EUR" />\n')),(0,r.kt)("p",null,"Once you ensure that the product metadata is present on the page, add the following element to the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," section of your product pages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://api.instantrecall.me/?t=merchantKey"><\/script>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantKey")," is the key provided to you by us during the on-boarding process."),(0,r.kt)("h2",{id:"integrate-using-window-object"},"Integrate using ",(0,r.kt)("inlineCode",{parentName:"h2"},"window")," object"),(0,r.kt)("p",null,"If you don't have Open Graph Protocol data on your page, you can provide the needed information through a function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\nwindow.irScrapper = function (){\n  return \n    { \n      locale: "fr-FR",\n      kind: "product-page",      \n      products: [\n        {\n          title: "Sample",\n          description: "Sample Description",\n          url: document.location.href,\n          type: "product",\n          image: "http://www.friendsmash.com/images/coin_600.png",\n          price: 3.5,\n          currency: "EUR",\n        },\n      ],\n    }\n};\n<\/script>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," field can be ommited if you only have one language on your website otherwise it should contain the relevant locale. "),(0,r.kt)("p",null,"Make sure this function is mounted before requesting the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://api.instantrecall.me/?t=merchantKey"><\/script>\n')),(0,r.kt)("h2",{id:"integrate-using-google-tag-manager"},"Integrate using Google Tag Manager"),(0,r.kt)("p",null,"Start by adding the Instant Recall widget template from the Community Template Gallery. "),(0,r.kt)("img",{alt:"Add Instant Recall template",src:(0,i.Z)("/img/tutorial/00addWidget.png")}),(0,r.kt)("p",null,"Create a Custom Variable that would provide the Instant Recall app with the necessary data.  "),(0,r.kt)("img",{alt:"Add Custom Variable",src:(0,i.Z)("/img/tutorial/01createVariable.png")}),(0,r.kt)("p",null,"You can extract the needed information from other custom variables or from elements on the page.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," field can be ommited if you only have one language on your website otherwise it should contain the relevant locale. "),(0,r.kt)("p",null,"Create the Instant Recall Tag using the custom variable defined above and the ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantKey")," provided durring on-boarding. "),(0,r.kt)("img",{alt:"Create Instant Recall Tag",src:(0,i.Z)("/img/tutorial/02createTag.png")}),(0,r.kt)("h2",{id:"integration-with-consent-management-platforms"},"Integration with Consent Management Platforms"),(0,r.kt)("p",null,"Instant Recall can integrate with your CMPs and its display can be tied into user consent (for example, it can display only for users who have refused the cookies). For this integration, we need to have a discussion with your technical team regarding the specific CMP used. "),(0,r.kt)("h2",{id:"bookmarklet"},"Bookmarklet"),(0,r.kt)("p",null,"If you want to test the integration before making changes to your website, input your ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantKey")," in the widget bellow and drag the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant Recall Test")," button to your bookmark toolbar. Navigate to a product page on your website and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant Recall Test")," button from your bookmark toolbar. You should see the Instant Recall bubble appear it its designated position. This works only for websites that already have Open Graph Protocol data available or have already implemented the ",(0,r.kt)("inlineCode",{parentName:"p"},"window.irScrapper")," function. "),(0,r.kt)(p,{mdxType:"Bookmarklet"}))}k.isMDXComponent=!0}}]);