"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"quickstart/post-install",id:"quickstart/post-install",title:"post-install",description:"If you're new to NeoVim/Vim",source:"@site/docs/quickstart/post-install.md",sourceDirName:"quickstart",slug:"/quickstart/post-install",permalink:"/quickstart/post-install",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"Install",permalink:"/quickstart/install"},next:{title:"learn-lua",permalink:"/quickstart/learn-lua"}},s={},u=[{value:"If you&#39;re new to NeoVim/Vim",id:"if-youre-new-to-neovimvim",level:2},{value:"Setup your custom config",id:"setup-your-custom-config",level:2},{value:"Install Treesitter Parsers",id:"install-treesitter-parsers",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"if-youre-new-to-neovimvim"},"If you're new to NeoVim/Vim"),(0,a.kt)("p",null,"We strongly encourage you to learn how to use NeoVim/Vim. If you are totally new to vim then you cannot use nvchad, you need to at least have some basic knowledge."),(0,a.kt)("p",null,"These are highly recommend and a ",(0,a.kt)("strong",{parentName:"p"},"must do for any new Vimmer")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim tutor",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},":Tutor\n"))),(0,a.kt)("li",{parentName:"ul"},"In-built help docs",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},":h <cmd>\n:h autocommand\n:h vim.api\n:h insert\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://google.com"},"Google your issue"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Example format query, ",(0,a.kt)("inlineCode",{parentName:"li"},"neovim how to delete 10 lines")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://neovim.io/doc/user/quickref.html"},"NeoVim quick reference")),(0,a.kt)("li",{parentName:"ul"},"Vim movement games",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vim-adventures.com/"},"Vim Adventures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.vimgenius.com/"},"Vim Genius"))))),(0,a.kt)("p",null,"After the initial installation, we recommend setting up a few things based on your needs."),(0,a.kt)("h2",{id:"setup-your-custom-config"},"Setup your custom config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NvChad gitignores the ",(0,a.kt)("inlineCode",{parentName:"p"},"lua/custom")," dir so when nvchad update doesnt mess this dir, it's preserved and all of your changes are supposed to be done within this dir only")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"custom/init.lua")," gets loaded at the end in the main init.lua file, add your commands, autocmds here etc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"custom/chadrc.lua")," is used to override ",(0,a.kt)("inlineCode",{parentName:"p"},"core/default_config.lua")," and basically control whole of nvchad, you only need to include values that you wish to change from the default file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It can be used to override & add vim options, mappings, plugin management etc"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"NvChad provides ",(0,a.kt)("inlineCode",{parentName:"p"},"init.lua")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"chadrc.lua")," inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"examples")," folder."),(0,a.kt)("p",null,"To start setting up NvChad to your needs, copy these template files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir lua/custom\ncp examples/init.lua lua/custom/init.lua\ncp examples/chadrc.lua lua/custom/chadrc.lua\n")),(0,a.kt)("h2",{id:"install-treesitter-parsers"},"Install Treesitter Parsers"),(0,a.kt)("p",null,"The goal of ",(0,a.kt)("inlineCode",{parentName:"p"},"nvim-treesitter")," is to provide basic functionality such as syntax-highlighting for various languages. For more info check out their repository at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter"),"."),(0,a.kt)("p",null,"For example, to install the treesitter parser for ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},":TSInstall css html\n")),(0,a.kt)("p",null,"For a list of supported languages, please checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages"},"docs"),"."))}m.isMDXComponent=!0}}]);