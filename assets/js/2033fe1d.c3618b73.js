"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3470],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19538:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={sidebar_label:"Overview",sidebar_position:2,hide_table_of_contents:!1},s="Staking",d={unversionedId:"stake/Staking",id:"stake/Staking",isDocsHomePage:!1,title:"Staking",description:"BNB Smart Chain is an innovative solution to bring programmability and interoperability to Beacon Chain. BNB Smart Chain relies on a system of 21 validators with Proof of Staked Authority (PoSA) consensus that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality.",source:"@site/docs/stake/Staking.md",sourceDirName:"stake",slug:"/stake/Staking",permalink:"/docs/stake/Staking",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/stake/Staking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Overview",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Common Problems With Connectivity",permalink:"/docs/validator/commonproblems"},next:{title:"CLI Commands",permalink:"/docs/stake/cli-commands"}},c=[{value:"Staking Economics",id:"staking-economics",children:[],level:2},{value:"Ranking Algorithm",id:"ranking-algorithm",children:[],level:2},{value:"Reward Distrubution",id:"reward-distrubution",children:[{value:"Main Workflow:",id:"main-workflow",children:[],level:3},{value:"Details",id:"details",children:[],level:3},{value:"Error handling:",id:"error-handling",children:[],level:3}],level:2},{value:"Fee Table",id:"fee-table",children:[],level:2}],h={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking"},"Staking"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.binance.org/topic/2686"},"BNB Smart Chain")," is an innovative solution to bring programmability and interoperability to ",(0,o.kt)("a",{parentName:"p",href:"https://www.binance.org"},"Beacon Chain"),". BNB Smart Chain relies on a system of 21 validators with Proof of ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/consensus"},"Staked Authority (PoSA) consensus")," that can support short block time and lower fees. The most bonded validator candidates of staking will become validators and produce blocks. The double-sign detection and other slashing logic guarantee security, stability, and chain finality."),(0,o.kt)("p",null,"Ideally, BNB Smart Chain should build such staking and reward logic into the blockchain, and automatically distribute rewards as the blocking happens. ",(0,o.kt)("a",{parentName:"p",href:"https://hub.cosmos.network/"},"Cosmos Hub"),", who also build on top of Tendermint consensus like Beacon Chain, works in this way."),(0,o.kt)("p",null,"However, as BSC wants to remain compatible with Ethereum as much as possible. On the other side, Beacon Chain already has a staking module and could be extended to support both BC and BSC. In this way, all the staking related operations are recorded in BC. Once there are any changes about BSC's validator set or voting power, the new message will be transferred to BSC through cross-chain communication."),(0,o.kt)("h2",{id:"staking-economics"},"Staking Economics"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The staking token is ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.binance.com/cn/trade/BNB_USDT"},"BNB")),", as it is a native token on both blockchains anyway"),(0,o.kt)("li",{parentName:"ol"},"The staking, i.e. token bond and delegation actions and records for BSC, happens on BC."),(0,o.kt)("li",{parentName:"ol"},"The BSC validator set is determined by its staking and delegation logic, via a staking module built on BC for BSC, and propagated every day UTC 00:00 from BC to BSC via Cross-Chain communication."),(0,o.kt)("li",{parentName:"ol"},"The reward distribution happens on BC around every day UTC 00:00 after.")),(0,o.kt)("h2",{id:"ranking-algorithm"},"Ranking Algorithm"),(0,o.kt)("p",null,"Validators are ranked by their power and operator address. The more its delegation tokens, the higher ranking is. If two validators get the same amount of delegated tokens, validator with smaller address bytes has higher ranking."),(0,o.kt)("h2",{id:"reward-distrubution"},"Reward Distrubution"),(0,o.kt)("p",null,"Since BSC uses PoSA as its consensus engine, all the delegators of validators can receive some share of the validators\u2019 reward."),(0,o.kt)("p",null,"However, the rewards(fees) are collected on BSC while the staking info is stored on BC."),(0,o.kt)("p",null,"So the main idea is we transfer all the rewards from BSC to BC once every day and execute the distribution on BC."),(0,o.kt)("h3",{id:"main-workflow"},"Main Workflow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ValidatorSet is updated in BreatheBlock, the frequency is once a day. let\u2019s assume it happens on day N."),(0,o.kt)("li",{parentName:"ol"},"The info of validator set changes of day N would be transmitted to BSCthrough interchain communication."),(0,o.kt)("li",{parentName:"ol"},"The validator set contract on BSC would receive and update the new validatorset. After that, it would trigger several interchain transfer to transfer the fees that every ",(0,o.kt)("strong",{parentName:"li"},"previous validators")," collected in this period to their addresses on BC. we can see that fees belongs to the validators of day N-1."),(0,o.kt)("li",{parentName:"ol"},"To make some room for the error handling, we distribute the fees of day N-1 in the next breathe block (day N+1).")),(0,o.kt)("h3",{id:"details"},"Details"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"even if validator set or any their voting powers are not changed on that day, we still transmit the validator set info to BSC."),(0,o.kt)("li",{parentName:"ol"},"the validator set contract maintains the history of the fees that every validators collected after the previous period(We define the ",(0,o.kt)("strong",{parentName:"li"},"period")," as the time between two contract calls of validator set changes). The actual fees are collected on the contract address."),(0,o.kt)("li",{parentName:"ol"},"the interchain transfer to send fees from the contract address to each validator\u2019s distribution address on BC. Note the distribution address is ",(0,o.kt)("strong",{parentName:"li"},"auto generated")," on BC when handling the create-validator tx, so no private key is corresponded to that address and no one except the distribution module can move the tokens on that address. This address is displayed as ",(0,o.kt)("strong",{parentName:"li"},"Distribution Addr")," in validator info.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Validator\nFee Address: tbnb15mgzha93ny878kuvjl0pnqmjygwccdadpw5dxf\nOperator Address: bva15mgzha93ny878kuvjl0pnqmjygwccdad08uecu\nValidator Consensus Pubkey:\nJailed: false\nStatus: Bonded\nTokens: 5000000000000\nDelegator Shares: 5000000000000\nDescription: {Elbrus "" www.binance.org This is Elbrus org on chapel network.}\nBond Height: 74158\nUnbonding Height: 0\nMinimum Unbonding Time: 1970-01-01 00:00:00 +0000 UTC\nCommission: {rate: 75000000, maxRate: 90000000, maxChangeRate: 3000000, updateTime: 2020-05-22 12:24:19.478568234 +0000 UTC}\nDistribution Addr: tbnb1srkkfjk8qctvvy4s3cllhpnkz9679jphr30t2c\nSide Chain Id: chapel\nConsensus Addr on Side Chain: 0xF474Cf03ccEfF28aBc65C9cbaE594F725c80e12d\nFee Addr on Side Chain: 0xe61a183325A18a173319dD8E19c8d069459E2175\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"we have a lower limit of the value of interchain transfer, at least the value can cover the transfer fee. Also, interchain transfer will only allow max 8 decimals for the amount. The tiny left part would be kept in the contract or put into the system reward pool."),(0,o.kt)("li",{parentName:"ol"},"the reward: (totalfees ","*"," (1-commissionRate)) would be distributed in proportion to the delegations, the left part would be sent to the validator fee address.")),(0,o.kt)("h3",{id:"error-handling"},"Error handling:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"if the cross-chain transfer failed, the tokens would be sent back to a specified address(i.e. the  ",(0,o.kt)("inlineCode",{parentName:"li"},"SideFeeAddr")," in the store section, validators can change this address via the EditValidator tx). After that, validators can manually deposit the tokens to its own ",(0,o.kt)("inlineCode",{parentName:"li"},"DistributionAddr")," on BC via Transfer tx. We do not force the validator to do so, but it\u2019s an indicator that can help delegators choose validators.")),(0,o.kt)("h2",{id:"fee-table"},"Fee Table"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Pay in BNB"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create A New Smart Chain Validator"),(0,o.kt)("td",{parentName:"tr",align:null},"10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Edit Smart Chain Validator Information"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Delegate Smart Chain Validator"),(0,o.kt)("td",{parentName:"tr",align:null},"0.001")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Redelegate Smart Chain Validator"),(0,o.kt)("td",{parentName:"tr",align:null},"0.003")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Undelegate Smart Chain Validator"),(0,o.kt)("td",{parentName:"tr",align:null},"0.002")))))}u.isMDXComponent=!0}}]);