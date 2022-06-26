"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,f=g["".concat(u,".").concat(m)]||g[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"debugging-config",title:"Debugging config"},l=void 0,o={unversionedId:"debugging-config",id:"debugging-config",title:"Debugging config",description:"Basic Debugging",source:"@site/docs/support.md",sourceDirName:".",slug:"/debugging-config",permalink:"/debugging-config",tags:[],version:"current",frontMatter:{id:"debugging-config",title:"Debugging config"},sidebar:"docs",previous:{title:"Features",permalink:"/features"},next:{title:"Contribute",permalink:"/contribute"}},u={},p=[{value:"Basic Debugging",id:"basic-debugging",level:2},{value:"Before logging an issue:",id:"before-logging-an-issue",level:2},{value:"How to gather fundamental debugging info for GitHub issues",id:"how-to-gather-fundamental-debugging-info-for-github-issues",level:2},{value:"NeoVim debugging options",id:"neovim-debugging-options",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-debugging"},"Basic Debugging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you have trouble with plugins, your first place to look is the packer log"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"less ~/.cache/nvim/packer.nvim.log\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you still can't figure out what's going wrong, you can remove your compiled Packer plugins with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rm -r ~/.config/nvim/plugin`\n")),(0,r.kt)("p",{parentName:"li"},"Then in NeoVim run ",(0,r.kt)("inlineCode",{parentName:"p"},":PackerSync")," and ",(0,r.kt)("strong",{parentName:"p"},"restart NeoVim"),".\nThis will redownload and install all plugins.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can check the health of NeoVim with the built-in health check command. In nvim run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},":checkhealth\n")))),(0,r.kt)("h2",{id:"before-logging-an-issue"},"Before logging an issue:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad/issues?q=is%3Aissue"},"Search the GitHub issue list")),(0,r.kt)("li",{parentName:"ul"},"Then ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NvChad/NvChad/issues/new/choose"},"log an issue, be sure to provide ",(0,r.kt)("strong",{parentName:"a"},"all prompted information")))),(0,r.kt)("h2",{id:"how-to-gather-fundamental-debugging-info-for-github-issues"},"How to gather fundamental debugging info for GitHub issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get your current NvChad version",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shel"},"$ git rev-parse --short HEAD\n"))),(0,r.kt)("li",{parentName:"ul"},"Get all the differences between your local config & NvChad",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git diff origin/HEAD > diff.txt\n"))),(0,r.kt)("li",{parentName:"ul"},"Get the Packer log",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ less ~/.cache/nvim/packer.nvim.log\n")))),(0,r.kt)("h2",{id:"neovim-debugging-options"},"NeoVim debugging options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verbosity will show what is being executed by NeoVim",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Primarily through the use of ",(0,r.kt)("inlineCode",{parentName:"li"},":set verbose=9")," (or another number 0<= num < 10)"),(0,r.kt)("li",{parentName:"ul"},"Or start NeoVim with ",(0,r.kt)("inlineCode",{parentName:"li"},"nvim -v9")))),(0,r.kt)("li",{parentName:"ul"},"Use the NeoVim command line to call Lua & VimL functions & examine code",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neovim.io/doc/user/lua.html#vim.inspect()"},"Print a lua table in readable format"),", like the")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},":lua print(vim.inspect())\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neovim.io/doc/user/lua.html#lua-require"},"Call a lua function manually"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},":lua require('<FILE PATH FROM /lua>').function()\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://neovim.io/doc/user/lua.html#vim.g"},"Print a buffer option variable"),", for example the current filetype")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},":lua print(vim.bo.ft)\n:echo &ft\n")))))}c.isMDXComponent=!0}}]);