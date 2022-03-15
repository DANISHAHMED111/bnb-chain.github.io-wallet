"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1861],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46022:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_label:"Sync Token Supply",hide_table_of_contents:!1,sidebar_position:2},p="Sync BEP2 and BEP20 Token Supply",c={unversionedId:"sync",id:"sync",isDocsHomePage:!1,title:"Sync BEP2 and BEP20 Token Supply",description:"Prerequisite",source:"@site/docs/sync.md",sourceDirName:".",slug:"/sync",permalink:"/docs/sync",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/sync.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Sync Token Supply",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Token Circulation Model",permalink:"/docs/circulation-model"},next:{title:"Cross Chain Transfer",permalink:"/docs/cross-chain-transfer"}},s=[{value:"Prerequisite",id:"prerequisite",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"What happens under the hood",id:"what-happens-under-the-hood",children:[],level:2},{value:"Fee Table",id:"fee-table",children:[],level:2},{value:"Mirror With MyEtherWallet",id:"mirror-with-myetherwallet",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sync-bep2-and-bep20-token-supply"},"Sync BEP2 and BEP20 Token Supply"),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("p",null,"This BEP20 token is ",(0,l.kt)("a",{parentName:"p",href:"/docs/mirror"},"mirrored")," to a BEP2 token."),(0,l.kt)("h2",{id:"motivation"},"Motivation"),(0,l.kt)("p",null,"For a BEP20 token which has been mirrored to BC, anyone can call the ",(0,l.kt)("inlineCode",{parentName:"p"},"sync")," method to balance the total supply on BC and BSC. Thus, the total supply among two Blockchains will remain the same."),(0,l.kt)("h2",{id:"what-happens-under-the-hood"},"What happens under the hood"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify there is already mirrored"),(0,l.kt)("li",{parentName:"ul"},"Check the total supply and token symbol is valid"),(0,l.kt)("li",{parentName:"ul"},"Send a cross-chain package to modify a BEP2 token total supply on Binance Chain")),(0,l.kt)("p",null,"After syncing, the total supply on BC and BSC are the same."),(0,l.kt)("h2",{id:"fee-table"},"Fee Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fee Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"syncFee"),(0,l.kt)("td",{parentName:"tr",align:null},"it's 0.002BNB on mainnet now")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relayFee"),(0,l.kt)("td",{parentName:"tr",align:null},"it's 0.002BNB on mainnet now")))),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"syncFee")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"relayFee")," can be changed by on-chain governance"),(0,l.kt)("p",null,"To query ",(0,l.kt)("inlineCode",{parentName:"p"},"syncFee")," from system contract;"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Call ",(0,l.kt)("inlineCode",{parentName:"p"},"Tokenmanager")," ",(0,l.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/address/0x0000000000000000000000000000000000001008#writeContract"},"Contract")," with the latest ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-genesis-contract/blob/master/abi/tokenmanager.abi"},"ABI"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query ",(0,l.kt)("inlineCode",{parentName:"p"},"syncFee")," function"))),(0,l.kt)("p",null,"Fee= result/1e18"),(0,l.kt)("p",null,"To query ",(0,l.kt)("inlineCode",{parentName:"p"},"relayFee")," from system contract;"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Call ",(0,l.kt)("inlineCode",{parentName:"p"},"TokenHub")," ",(0,l.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/address/0x0000000000000000000000000000000000001008#writeContract"},"Contract")," with the latest ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-genesis-contract/blob/master/abi/tokenhub.abi"},"ABI"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Query ",(0,l.kt)("inlineCode",{parentName:"p"},"getMiniRelayFee")," function"))),(0,l.kt)("p",null,"Fee= result/1e18"),(0,l.kt)("h2",{id:"mirror-with-myetherwallet"},"Mirror With MyEtherWallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Call ",(0,l.kt)("inlineCode",{parentName:"li"},"Tokenmanager")," Contract")),(0,l.kt)("p",null,"Use the latest ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-genesis-contract/blob/master/abi/tokenmanager.abi"},"ABI")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/SYyvWVcLHELSE72JSXqBwMJB6Y50jMz5HgH6irmCbyxGwr-W_Hz-vbm4IqWXAqE2hvCAXaqNKfs28ZhGFtMrMrDgWvDfEkHPunnSuxSKPpLBtuxmiX-b5yRjfczENJxKDrqSAYWy",alt:"img"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("inlineCode",{parentName:"li"},"sync")," function and fill-in with your BEP20 address")),(0,l.kt)("p",null,"The value here should be no less than  ",(0,l.kt)("inlineCode",{parentName:"p"},"syncFee"),"+ ",(0,l.kt)("inlineCode",{parentName:"p"},"relayFee"),"."),(0,l.kt)("p",null,"Time stamp should be greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"unix_timestamp(now())"),". The difference should be between 120 and 86400. It's recommended to use ",(0,l.kt)("inlineCode",{parentName:"p"},"unix_timestamp(now())+1000")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/EIgRKIBY8unMsuSBa88jY_EXdJeO1WtaXTQLV905AZmPJDsN72chHcPZrDEWOeD8m1a1awEwP43Uh0eFURLXSKQvnfc3J9YzWLYuBvAeVwIwicKfLUZlCkvkR0NdWxkYWAQKa3Ii",alt:"img"})),(0,l.kt)("p",null,"All set!"))}m.isMDXComponent=!0}}]);