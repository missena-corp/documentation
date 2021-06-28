(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[354],{402:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i="bookmarklet_nULg",s=n(7294);function p(){var e=s.useState(""),t=e[0],n=e[1],a=function(e,t){return e?'javascript: (function () { let scriptElement = document.createElement("script");scriptElement.src="'+t+"?t="+e+'";document.body.appendChild(scriptElement);})();':""},o=s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 48 48"},s.createElement("path",{fill:"currentColor",d:"M34 6h-20c-2.21 0-3.98 1.79-3.98 4l-.02 32 14-6 14 6v-32c0-2.21-1.79-4-4-4zm0 30l-10-4.35-10 4.35v-26h20v26z"}),s.createElement("path",{d:"M0 0h48v48h-48z",fill:"none"}));return s.createElement("div",{className:i},s.createElement("input",{onChange:function(e){return n((function(){return e.target.value}))}}),s.createElement("a",{href:a(t,"https://api.instantrecall.me/"),disabled:!t},o," Instant Recall Test"),s.createElement("a",{href:a(t,"https://api-ir.staging.missena.xyz/"),disabled:!t},o," Instant Recall Test DEV"))}var c=["components"],l={sidebar_position:3},d={unversionedId:"instant-recall",id:"instant-recall",isDocsHomePage:!1,title:"Instant Recall",description:"Description",source:"@site/docs/instant-recall.mdx",sourceDirName:".",slug:"/instant-recall",permalink:"/documentation/fr/docs/instant-recall",editUrl:"https://github.com/missena-corp/documentation/edit/main/docs/docs/instant-recall.mdx",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pass Sans Pub",permalink:"/documentation/fr/docs/noad"}},m=[{value:"Description",id:"description",children:[]},{value:"Integrate using Open Graph",id:"integrate-using-open-graph",children:[]},{value:"Integrate using <code>window</code> object",id:"integrate-using-window-object",children:[]},{value:"Bookmarklet",id:"bookmarklet",children:[]}],u={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Intant Recall is a service that allows users to save to their email products from merchant websites."),(0,r.kt)("h2",{id:"integrate-using-open-graph"},"Integrate using Open Graph"),(0,r.kt)("p",null,"The service relies on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Facebook_Platform#Open_Graph_protocol"},"Open Graph Protocol")," data about the product displayed on the page. The following properties are required: ",(0,r.kt)("inlineCode",{parentName:"p"},"og:title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:price:amount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:price:currency")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta property="og:type" content="product">')," element to signify that this is a product page. Here is a sample section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="og:type" content="og:product" />\n<meta property="og:title" content="Friend Smash Coin" />\n<meta\n  property="og:image"\n  content="http://www.friendsmash.com/images/coin_600.png"\n/>\n<meta\n  property="og:description"\n  content="Friend Smash Coins to purchase upgrades and items!"\n/>\n<meta property="og:url" content="http://www.friendsmash.com/og/coins.html" />\n<meta property="og:price:amount" content="0.30" />\n<meta property="og:price:currency" content="EUR" />\n')),(0,r.kt)("h2",{id:"integrate-using-window-object"},"Integrate using ",(0,r.kt)("inlineCode",{parentName:"h2"},"window")," object"),(0,r.kt)("p",null,"If for some reason you do not wish to add this meta data to your page head element, you need to ensure that a javascript object named ",(0,r.kt)("inlineCode",{parentName:"p"},"__ir_metadata")," with the meta data of the product is created and added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\nwindow.__ir_metadata = {\n  title: "Friend Smash Coin",\n  description: "Friend Smash Coins to purchase upgrades and items!",\n  url: "http://www.friendsmash.com/og/coins.html",\n  image: "http://www.friendsmash.com/images/coin_600.png",\n  ammount: 0.30,\n  currency: "EUR",\n};\n<\/script>\n')),(0,r.kt)("p",null,"Once you ensure that the product metadata is present on the page, add the following element to the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," section of your product pages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://api-ir.missena.xyz/?t=merchantKey"><\/script>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantKey")," is the key provided to you by us during the on-boarding process."),(0,r.kt)("h2",{id:"bookmarklet"},"Bookmarklet"),(0,r.kt)("p",null,"If you want to test the integration before making changes to your website, input your ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantKey")," in the widget bellow and drag the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant Recall Test")," button to your bookmark toolbar. Navigate to a product page on your website and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instant Recall Test")," button from your bookmark toolbar. You should see the Instant Recall bubble appear it its designated position."),(0,r.kt)(p,{mdxType:"Bookmarklet"}))}h.isMDXComponent=!0}}]);