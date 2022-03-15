"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9247],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_label:"Using Truffle",hide_table_of_contents:!1,sidebar_position:2},c="Using Truffle",s={unversionedId:"truffle-new",id:"truffle-new",isDocsHomePage:!1,title:"Using Truffle",description:"Setting up the development environment",source:"@site/docs/truffle-new.md",sourceDirName:".",slug:"/truffle-new",permalink:"/docs/truffle-new",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/truffle-new.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using Truffle",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using Remix IDE",permalink:"/docs/remix"},next:{title:"Using HardHat",permalink:"/docs/hardhat-new"}},u=[{value:"Setting up the development environment",id:"setting-up-the-development-environment",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Installing Truffle",id:"installing-truffle",children:[],level:3}],level:2},{value:"Project Creation, Compilation, and Configuration",id:"project-creation-compilation-and-configuration",children:[{value:"Create a new directory for your Truffle project",id:"create-a-new-directory-for-your-truffle-project",children:[],level:3},{value:"Intialize your project:",id:"intialize-your-project",children:[],level:3},{value:"Create Contract",id:"create-contract",children:[],level:3},{value:"Compile Contract",id:"compile-contract",children:[],level:3},{value:"Config Truffle for BSC",id:"config-truffle-for-bsc",children:[],level:3}],level:2},{value:"Deploying on BSC Network",id:"deploying-on-bsc-network",children:[],level:2},{value:"BscSCAN plugin for Truffle",id:"bscscan-plugin-for-truffle",children:[{value:"Install the plugin",id:"install-the-plugin",children:[],level:3},{value:"Configure the plugin",id:"configure-the-plugin",children:[],level:3},{value:"Verification Command",id:"verification-command",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-truffle"},"Using Truffle"),(0,i.kt)("h2",{id:"setting-up-the-development-environment"},"Setting up the development environment"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"There are a few technical requirements before we start. Please install the following:\nRequirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows, Linux or Mac OS X"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v8.9.4 LTS or later")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Recommendations for Windows"),"\nIf you're running Truffle on Windows, you may encounter some naming conflicts that could prevent Truffle from executing properly. Please see the section on resolving naming conflicts for solutions."),(0,i.kt)("h3",{id:"installing-truffle"},"Installing Truffle"),(0,i.kt)("p",null,"Once we have those installed, we only need one command to install Truffle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -g truffle\n")),(0,i.kt)("p",null,"To verify that Truffle is installed properly, type ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"truffle version"))," on a terminal. If you see an error, make sure that your npm modules are added to your path."),(0,i.kt)("h2",{id:"project-creation-compilation-and-configuration"},"Project Creation, Compilation, and Configuration"),(0,i.kt)("p",null,"The first step is to create a Truffle project. We'll use the *MegaCoin as an example, which creates a token that can be transferred between accounts:"),(0,i.kt)("h3",{id:"create-a-new-directory-for-your-truffle-project"},"Create a new directory for your Truffle project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir MegaCoin\ncd MegaCoin\n")),(0,i.kt)("h3",{id:"intialize-your-project"},"Intialize your project:"),(0,i.kt)("p",null,"To initialize your project use the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"truffle init\n")),(0,i.kt)("p",null,"Once this operation is completed, you'll now have a project structure with the following items:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contracts/: Directory for Solidity contracts"),(0,i.kt)("li",{parentName:"ul"},"migrations/: Directory for scriptable deployment files"),(0,i.kt)("li",{parentName:"ul"},"test/: Directory for test files for testing your application and contracts"),(0,i.kt)("li",{parentName:"ul"},"truffle-config.js: Truffle configuration file")),(0,i.kt)("h3",{id:"create-contract"},"Create Contract"),(0,i.kt)("p",null,"You can write your own smart contract or download the BEP20 token smart contract template."),(0,i.kt)("h3",{id:"compile-contract"},"Compile Contract"),(0,i.kt)("p",null,"To compile a Truffle project, change to the root of the directory where the project is located and then type the following into a terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"truffle compile\n")),(0,i.kt)("h3",{id:"config-truffle-for-bsc"},"Config Truffle for BSC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to truffle-config.js"),(0,i.kt)("li",{parentName:"ul"},"Update the truffle-config with bsc-network-crendentials.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const HDWalletProvider = require(\'@truffle/hdwallet-provider\');\nconst fs = require(\'fs\');\nconst mnemonic = fs.readFileSync(".secret").toString().trim();\n\nmodule.exports = {\n  networks: {\n    development: {\n      host: "127.0.0.1",     // Localhost (default: none)\n      port: 8545,            // Standard BSC port (default: none)\n      network_id: "*",       // Any network (default: none)\n    },\n    testnet: {\n      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),\n      network_id: 97,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n    bsc: {\n      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),\n      network_id: 56,\n      confirmations: 10,\n      timeoutBlocks: 200,\n      skipDryRun: true\n    },\n  },\n\n  // Set default mocha options here, use special reporters etc.\n  mocha: {\n    // timeout: 100000\n  },\n\n  // Configure your compilers\n  compilers: {\n    solc: {\n      version: "^0.6.12", // A version or constraint - Ex. "^0.5.0"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Notice, it requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new .secret file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words."),(0,i.kt)("h2",{id:"deploying-on-bsc-network"},"Deploying on BSC Network"),(0,i.kt)("p",null,"Run this command in root of the project directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$ truffle migrate --network testnet\n")),(0,i.kt)("p",null,"Contract will be deployed on Binance Chain Chapel Testnet, it look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"1_initial_migration.js\n======================\n\n   Deploying 'Migrations'\n   ----------------------\n   > transaction hash:    0xaf4502198400bde2148eb4274b08d727a17080b685cd2dcd4aee13d8eb954adc\n   > Blocks: 3            Seconds: 9\n   > contract address:    0x81eCD10b61978D9160428943a0c0Fb31a5460466\n   > block number:        3223948\n   > block timestamp:     1604049862\n   > account:             0x623ac9f6E62A8134bBD5Dc96D9B8b29b4B60e45F\n   > balance:             6.24574114\n   > gas used:            191943 (0x2edc7)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.00383886 ETH\n\n   Pausing for 5 confirmations...\n   ------------------------------\n   > confirmation number: 2 (block: 3223952)\n   > confirmation number: 3 (block: 3223953)\n   > confirmation number: 4 (block: 3223954)\n   > confirmation number: 6 (block: 3223956)\n\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:          0.00383886 ETH\n\n\nSummary\n=======\n> Total deployments:   1\n> Final cost:          0.00383886 ETH\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Remember your address, transaction_hash and other details provided would differ, Above is just to provide an idea of structure.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed BEP20 Smart Contract. Now you can interact with the Smart Contract."),(0,i.kt)("p",null,"You can check the deployment status here: ",(0,i.kt)("a",{parentName:"p",href:"https://bscscan.com/"},"https://bscscan.com/")," or ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/")),(0,i.kt)("h1",{id:"verify-your-contract-on-bscscan"},"Verify Your Contract on BscScan"),(0,i.kt)("p",null,"The recommended way to verify a smart contract is using plugin. It is easier to read, imports are maintained, licenses are maintained."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Verified using Truffle")),(0,i.kt)("p",null,"Example: ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/token/0x68D2E27940CA48109Fa3DaD0D2C8B27E64a0c6cf"},"https://testnet.bscscan.com/token/0x68D2E27940CA48109Fa3DaD0D2C8B27E64a0c6cf")),(0,i.kt)("p",null,"GitHub Project: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huangsuyu/verify-example"},"https://github.com/huangsuyu/verify-example")),(0,i.kt)("h2",{id:"bscscan-plugin-for-truffle"},"BscSCAN plugin for Truffle"),(0,i.kt)("p",null,"Truffle has an BscScan plugin: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rkalis/truffle-plugin-verify"},"truffle-plugin-verify")),(0,i.kt)("p",null,"You need to deploy with Truffle to verify with the Truffle verify plugin."),(0,i.kt)("p",null,"Get API key: ",(0,i.kt)("a",{parentName:"p",href:"https://bscscan.com/myapikey"},"https://bscscan.com/myapikey")),(0,i.kt)("h3",{id:"install-the-plugin"},"Install the plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D truffle-plugin-verify\n")),(0,i.kt)("h3",{id:"configure-the-plugin"},"Configure the plugin"),(0,i.kt)("p",null,"Configure the plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," using the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const HDWalletProvider = require("@truffle/hdwallet-provider");\n\n// const infuraKey = "fj4jll3k.....";\n//\nconst { mnemonic, BSCSCANAPIKEY} = require(\'./env.json\');\n\nmodule.exports = {\n\n  plugins: [\n    \'truffle-plugin-verify\'\n  ],\n  api_keys: {\n    bscscan: BSCSCANAPIKEY\n  },\n  networks: {\n\n    testnet: {\n        provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),\n        network_id: 97,\n        timeoutBlocks: 200,\n        confirmations: 5,\n        production: true    // Treats this network as if it was a public net. (default: false)\n    }\n  },\n\n  // Set default mocha options here, use special reporters etc.\n  mocha: {\n    timeout: 100000\n  },\n\n  // Configure your compilers\n  compilers: {\n    solc: {\n       version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle\'s version)\n      // docker: true,        // Use "0.5.1" you\'ve installed locally with docker (default: false)\n      settings: {          // See the solidity docs for advice about optimization and evmVersion\n       optimizer: {\n         enabled: false,\n         runs: 200\n       },\n       evmVersion: "byzantium"\n      }\n    },\n  },\n};\n\n')),(0,i.kt)("h3",{id:"verification-command"},"Verification Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"truffle run verify BEP20Token@{contract-address} --network testnet\n")),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Verifying BEP20Token@0x68D2E27940CA48109Fa3DaD0D2C8B27E64a0c6cf\nPass - Verified: https://testnet.bscscan.com/address/0x68D2E27940CA48109Fa3DaD0D2C8B27E64a0c6cf#contracts\nSuccessfully verified 1 contract(s).\n")))}f.isMDXComponent=!0}}]);