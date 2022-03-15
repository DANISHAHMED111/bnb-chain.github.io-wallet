"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[8994],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},60381:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={},s=void 0,c={unversionedId:"beaconchain/keys",id:"beaconchain/keys",isDocsHomePage:!1,title:"keys",description:"Introduction",source:"@site/docs/beaconchain/keys.md",sourceDirName:"beaconchain",slug:"/beaconchain/keys",permalink:"/docs/beaconchain/keys",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/beaconchain/keys.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"mnemonic",id:"mnemonic",children:[],level:3},{value:"add",id:"add",children:[{value:"create a new key",id:"create-a-new-key",children:[],level:4},{value:"import from seed",id:"import-from-seed",children:[],level:4}],level:3},{value:"list",id:"list",children:[],level:3},{value:"show",id:"show",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"update",id:"update",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"BNB Chain CLI has a sub-command named ",(0,o.kt)("inlineCode",{parentName:"p"},"keys")," to manage private keys.",(0,o.kt)("br",null),"\nIt is a key store to manage keys for users."),(0,o.kt)("p",null,"You can add a new key or import a key from seed.",(0,o.kt)("br",null),"\nThen you can list the keys added and show the detailed info of a specific key.",(0,o.kt)("br",null),"\nYou can also delete the given key or update the password used to protect private key.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"BNB Chain CLI use the keys you add to sign transactions for you.",(0,o.kt)("br",null),"\nFor example, if you want to transfer tokens to someone else, you just need to specify the name of\nthe key you want to use, and input the password of the key, then BNB Chain CLI will sign the\ntransaction for you if the password is right."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The usage is the same for ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./bnbcli keys\nKeys allows you to manage your local keystore for tendermint.\n\n  These keys may be in any format supported by go-crypto and can be\n  used by light-clients, full nodes, or any other application that\n  needs to sign with a private key.\n\nUsage:\n  bnbcli keys [command]\n\nAvailable Commands:\n  mnemonic    Compute the bip39 mnemonic for some input entropy\n  add         Create a new key, or import from seed\n  list        List all keys\n  show        Show key info for the given name\n\n  delete      Delete the given key\n  update      Change the password used to protect private key\n\nFlags:\n  -h, --help   help for keys\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding (hex|b64|btc) (default "hex")\n      --home string       directory for config and data (default "/Users/yourname/.bnbcli")\n  -o, --output string     Output format (text|json) (default "text")\n      --trace             print out full stack trace on errors\n\nUse "bnbcli keys [command] --help" for more information about a command.\n')),(0,o.kt)("h3",{id:"mnemonic"},"mnemonic"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mnemonic")," is used to generate bip39 mnemonic.",(0,o.kt)("br",null),"\nYou can restore key from the mnemonic generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys mnemonic\nuncle mule squirrel cover theory oven rookie dry intact alert right afraid differ ability mule struggle spray usual must purity social ball flat short\n")),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," to create a new key or import from seed (mnemonic).",(0,o.kt)("br",null),"\nYou have to specify the name for the key you want to create."),(0,o.kt)("p",null,"To import with a mnemonic phrase, you need to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"--recover")," flag in the command."),(0,o.kt)("h4",{id:"create-a-new-key"},"create a new key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys add testkey\nEnter a passphrase for your key:\nRepeat the passphrase:\nNAME:   TYPE:   ADDRESS: PUBKEY:\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n**Important** write this seed phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\npoverty joke nominee enough harsh elder flush noodle gift one limit tree sponsor sun radio above acid air winter inflict profit there brand water\n")),(0,o.kt)("h4",{id:"import-from-seed"},"import from seed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys add testkey --recover\nEnter a passphrase for your key:\nRepeat the passphrase:\n> Enter your recovery seed phrase:\npoverty joke nominee enough harsh elder flush noodle gift one limit tree sponsor sun radio above acid air winter inflict profit there brand water\nNAME:   TYPE:   ADDRESS:    PUBKEY:\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n")),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"list")," can list all the keys you have."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys list\nNAME:   TYPE:   ADDRESS:    PUBKEY:\ntest    local   bnc16jv838jw8zcgucvrhreen73adwgnue6ujcz2cf  bncp1addwnpepqgxacvpgnvss94zs363lheuh2xldj0hvymftuds8d69u5cau5kz3y23rj6l\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n")),(0,o.kt)("h3",{id:"show"},"show"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"show")," is used to show the detail of the key by the name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys show testkey\nNAME:   TYPE:   ADDRESS:    PUBKEY:\ntestkey local   bnc1e8zhj9wmgq4pwzrv264gfru2fk8x2hdvpclx3n  bncp1addwnpepqffepxlkrka9n33vyzmjwkpy05gpm46cn5de3x9v0vqswk7st5lkc7alhjv\n")),(0,o.kt)("h3",{id:"delete"},"delete"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"delete")," is used to delete the key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys delete testkey\nDANGER - enter password to permanently delete key:\nPassword deleted forever (uh oh!)\n")),(0,o.kt)("h3",{id:"update"},"update"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"update")," is used to update the password that is currently used to protect the private key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./bnbcli keys update test\nEnter the current passphrase:\nEnter the new passphrase:\nRepeat the new passphrase:\nPassword successfully updated!\n")))}u.isMDXComponent=!0}}]);