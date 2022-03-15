"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9462],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8677:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="BSC Relayer",s={unversionedId:"learn/bsc-relayer",id:"learn/bsc-relayer",isDocsHomePage:!1,title:"BSC Relayer",description:"Relayers are responsible for submitting Cross-Chain Communication Packages between the two blockchains. Due to the heterogeneous parallel chain structure, two different types of Relayers are created.",source:"@site/docs/learn/bsc-relayer.md",sourceDirName:"learn",slug:"/learn/bsc-relayer",permalink:"/docs/learn/bsc-relayer",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/learn/bsc-relayer.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Cross-Chain Transfer Token Transfer",permalink:"/docs/learn/cross-chain-transfer"},next:{title:"Incentive Mechanism for BSC Relayer",permalink:"/docs/learn/incentives"}},d=[{value:"Monitor and Parse Cross Chain Event",id:"monitor-and-parse-cross-chain-event",children:[],level:2},{value:"Build Tendermint Header and Query Cross Chain Package",id:"build-tendermint-header-and-query-cross-chain-package",children:[{value:"Build Tendermint Header",id:"build-tendermint-header",children:[],level:3},{value:"Query Cross Chain Package With Merkle Proof",id:"query-cross-chain-package-with-merkle-proof",children:[],level:3}],level:2},{value:"Call Build-In System Contract",id:"call-build-in-system-contract",children:[{value:"Sync BC Header",id:"sync-bc-header",children:[],level:3},{value:"Deliver Cross Chain Package",id:"deliver-cross-chain-package",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bsc-relayer"},"BSC Relayer"),(0,l.kt)("p",null,"Relayers are responsible for submitting Cross-Chain Communication Packages between the two blockchains. Due to the heterogeneous parallel chain structure, two different types of Relayers are created."),(0,l.kt)("p",null,"Relayers for BC-to-BSC communication referred to as ",(0,l.kt)("strong",{parentName:"p"},"BSC Relayers")," are a standalone process that can be run by anyone, and anywhere, except that Relayers must register themselves onto BSC and deposit a certain amount of BNB. Only relaying requests from the registered Relayers will be accepted by BSC."),(0,l.kt)("p",null,"GitHub Implementation link: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-relayer"},"https://github.com/binance-chain/bsc-relayer")),(0,l.kt)("p",null,"Config Files: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/bsc-relayer-config"},"https://github.com/binance-chain/bsc-relayer-config")),(0,l.kt)("h2",{id:"monitor-and-parse-cross-chain-event"},"Monitor and Parse Cross Chain Event"),(0,l.kt)("p",null,"As a BSC relayer, it must have proper configurations on the following three items:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"srcCrossChainID"),(0,l.kt)("td",{parentName:"tr",align:null},"uint16"),(0,l.kt)("td",{parentName:"tr",align:null},"CrossChainID of BC, the value is 1 for testnet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destCrossChainID"),(0,l.kt)("td",{parentName:"tr",align:null},"uint16"),(0,l.kt)("td",{parentName:"tr",align:null},"CrossChainID of BSC, the value is 96 for testnet")))),(0,l.kt)("p",null,"A BSC relayer is required to parse all block results and pick out all events with event type \u201cIBCPackage\u201d from endBlock event table. This is an cross chain package event example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "IBCPackage",\n  "attributes":\n  [\n    {\n      "key": "IBCPackageInfo",\n      "value": "96::8::19"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"BSC relayer should iterate all the attributes and parse the attribute value:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Split the value with \u201c::\u201d and get a 4-length string array"),(0,l.kt)("li",{parentName:"ol"},"Follow the following table to parse the 4 elements:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"CrossChainID of destination chain"),(0,l.kt)("td",{parentName:"tr",align:null},"int16"),(0,l.kt)("td",{parentName:"tr",align:null},"96")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"channel id"),(0,l.kt)("td",{parentName:"tr",align:null},"int8"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"sequence"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"19")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Filter out attributes with mismatched destination chain CrossChainID.")),(0,l.kt)("h2",{id:"build-tendermint-header-and-query-cross-chain-package"},"Build Tendermint Header and Query Cross Chain Package"),(0,l.kt)("h3",{id:"build-tendermint-header"},"Build Tendermint Header"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'import tmtypes "github.com/tendermint/tendermint/types"\ntype Header struct {\n  tmtypes.SignedHeader\n  ValidatorSet     *tmtypes.ValidatorSet `json:"validator_set"`\n  NextValidatorSet *tmtypes.ValidatorSet `json:"next_validator_set"`\n}\n')),(0,l.kt)("p",null,"If a cross chain package event is found at height ",(0,l.kt)("strong",{parentName:"p"},"H"),", wait for block ",(0,l.kt)("strong",{parentName:"p"},"H+1")," and call the following rpc methods to build the above ",(0,l.kt)("strong",{parentName:"p"},"Header")," object:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Method"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tmtypes.SignedHeader"),(0,l.kt)("td",{parentName:"tr",align:null},"{rpcEndpoint}/commit?height=",(0,l.kt)("strong",{parentName:"td"},"H+1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ValidatorSet"),(0,l.kt)("td",{parentName:"tr",align:null},"{rpcEndpoint}/validators?height=",(0,l.kt)("strong",{parentName:"td"},"H+1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NextValidatorSet"),(0,l.kt)("td",{parentName:"tr",align:null},"{rpcEndpoint}/validators?height=",(0,l.kt)("strong",{parentName:"td"},"H+2"))))),(0,l.kt)("p",null,"Header Encoding in golang:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Add dependency on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tendermint/go-amino/tree/v0.14.1"},"go-amino v0.14.1")),(0,l.kt)("li",{parentName:"ol"},"Add dependency on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/tree/v0.32.3"},"tendermint v0.32.3"),":"),(0,l.kt)("li",{parentName:"ol"},"Example golang code to encode ",(0,l.kt)("strong",{parentName:"li"},"Header"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-golang"},'\nimport (\n  amino "github.com/tendermint/go-amino"\n  tmtypes "github.com/tendermint/tendermint/types"\n)\n\nvar cdc = amino.NewCodec()\n\nfunc init() {\n  tmtypes.RegisterBlockAmino(cdc)\n}\n\nfunc EncodeHeader(h *Header) ([]byte, error) {\n  bz, err := cdc.MarshalBinaryLengthPrefixed(h)\n  if err != nil {\n     return nil, err\n  }\n  return bz, nil\n}\n\n')),(0,l.kt)("h3",{id:"query-cross-chain-package-with-merkle-proof"},"Query Cross Chain Package With Merkle Proof"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Query height: ",(0,l.kt)("strong",{parentName:"li"},"H")),(0,l.kt)("li",{parentName:"ol"},"Query path: ",(0,l.kt)("strong",{parentName:"li"},"/store/ibc/key")),(0,l.kt)("li",{parentName:"ol"},"Follow the table to build a 14-length byte array as query key:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Length"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"0x00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source chain CrossChainID"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"srcCrossChainID in bsc relayer configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination chain CrossChainID"),(0,l.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"destCrossChainID in bsc relayer configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelID"),(0,l.kt)("td",{parentName:"tr",align:null},"1 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"channelID from event attribute")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sequence"),(0,l.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"sequence from event attribute")))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Assemble the above parameters to the following rpc call.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{rpcEndpoint}/abci_query?path={queryPath}&data={queryKey}&height={queryHeight}&prove=true\n")),(0,l.kt)("h2",{id:"call-build-in-system-contract"},"Call Build-In System Contract"),(0,l.kt)("h3",{id:"sync-bc-header"},"Sync BC Header"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"function ",(0,l.kt)("strong",{parentName:"p"},"syncTendermintHeader"),"(bytes calldata header, uint64 height)"),(0,l.kt)("p",{parentName:"li"},"  Call ",(0,l.kt)("strong",{parentName:"p"},"syncTendermintHeader")," of TendermintLightClient contract to sync BC header. The contract address is 0x0000000000000000000000000000000000001003. The \u201cheader\u201d is the encoding result of ",(0,l.kt)("strong",{parentName:"p"},"Header")," and the height should be ",(0,l.kt)("strong",{parentName:"p"},"H+1")))),(0,l.kt)("h3",{id:"deliver-cross-chain-package"},"Deliver Cross Chain Package"),(0,l.kt)("p",null,"Call ",(0,l.kt)("strong",{parentName:"p"},"handlePackage")," of crosschain contract(0x0000000000000000000000000000000000002000) to deliver the cross chain packages:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,l.kt)("td",{parentName:"tr",align:null},"package bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proof"),(0,l.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,l.kt)("td",{parentName:"tr",align:null},"merkle proof bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"H+1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"packageSequence"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"sequence from attribution value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channelId"),(0,l.kt)("td",{parentName:"tr",align:null},"uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"channle id")))))}u.isMDXComponent=!0}}]);