(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38],{4151:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],p={sidebar_position:3},s={unversionedId:"instant-recall",id:"instant-recall",isDocsHomePage:!1,title:"Instant Recall",description:"Description",source:"@site/docs/instant-recall.md",sourceDirName:".",slug:"/instant-recall",permalink:"/documentation/fr/docs/instant-recall",editUrl:"https://github.com/missena-corp/documentation/edit/main/docs/docs/instant-recall.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pass Sans Pub",permalink:"/documentation/fr/docs/noad"}},c=[{value:"Description",id:"description",children:[]},{value:"Integration",id:"integration",children:[]}],d={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Intant Recall is a service that allows users to save to their email products from merchant websites."),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"The service relies on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Facebook_Platform#Open_Graph_protocol"},"Open Graph Protocol")," data about the product displayed on the page. The following properties are required: ",(0,r.kt)("inlineCode",{parentName:"p"},"og:title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:price:amount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"og:price:currency")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},'<meta property="og:type" content="product">')," element to signify that this is a product page. Here is a sample section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<meta property="og:type" content="og:product" />\n<meta property="og:title" content="Friend Smash Coin" />\n<meta\n  property="og:image"\n  content="http://www.friendsmash.com/images/coin_600.png"\n/>\n<meta\n  property="og:description"\n  content="Friend Smash Coins to purchase upgrades and items!"\n/>\n<meta property="og:url" content="http://www.friendsmash.com/og/coins.html" />\n<meta property="og:price:amount" content="0.30" />\n<meta property="og:price:currency" content="EUR" />\n')),(0,r.kt)("p",null,"If for some reason you do not wish to add this meta data to your page head element, you need to ensure that a javascript object named ",(0,r.kt)("inlineCode",{parentName:"p"},"__ir_metadata")," with the meta data of the product is created and added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script>\nwindow.__ir_metadata = {\n  title: "Friend Smash Coin",\n  description: "Friend Smash Coins to purchase upgrades and items!",\n  url: "http://www.friendsmash.com/og/coins.html",\n  image: "http://www.friendsmash.com/images/coin_600.png",\n  ammount: 0.30,\n  currency: "EUR",\n};\n<\/script>\n')),(0,r.kt)("p",null,"Once you ensure that the product metadata is present on the page, add the following element to the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," section of your product pages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://api-ir.missena.xyz/?t=merchantKey"><\/script>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"merchantKey")," is the key provided to you by us during the on-boarding process."))}l.isMDXComponent=!0}}]);