import{_ as a,c as r,d as l,w as n,a as o,b as s,r as t,o as c}from"./app.97ec5758.js";const H=JSON.parse('{"title":"Dropdown 下拉菜单","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"触发方式","slug":"触发方式","link":"#触发方式","children":[]},{"level":2,"title":"菜单隐藏方式","slug":"菜单隐藏方式","link":"#菜单隐藏方式","children":[]},{"level":2,"title":"自定义渲染","slug":"自定义渲染","link":"#自定义渲染","children":[]},{"level":2,"title":"按钮类型","slug":"按钮类型","link":"#按钮类型","children":[]},{"level":2,"title":"不同尺寸","slug":"不同尺寸","link":"#不同尺寸","children":[]},{"level":2,"title":"dark 模式","slug":"dark-模式","link":"#dark-模式","children":[]},{"level":2,"title":"按钮点击事件","slug":"按钮点击事件","link":"#按钮点击事件","children":[]}],"relativePath":"components/dropdown/index.md"}'),D={name:"components/dropdown/index.md"},F=o("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},[s("Dropdown 下拉菜单 "),o("a",{class:"header-anchor",href:"#dropdown-下拉菜单","aria-hidden":"true"},"#")],-1),y=o("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),o("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),d=o("p",null,"移动到下拉菜单上，展开更多操作。",-1),i=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"链接类型"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项一"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项二"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项三"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项四"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"按钮类型"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项一"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项二"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项三"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项四"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),C=o("h2",{id:"触发方式",tabindex:"-1"},[s("触发方式 "),o("a",{class:"header-anchor",href:"#触发方式","aria-hidden":"true"},"#")],-1),A=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"hover"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项一"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项二"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项三"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项四"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"click"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"trigger"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"click"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项一"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项二"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项三"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项四"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),m=o("h2",{id:"菜单隐藏方式",tabindex:"-1"},[s("菜单隐藏方式 "),o("a",{class:"header-anchor",href:"#菜单隐藏方式","aria-hidden":"true"},"#")],-1),w=o("p",null,"可以 hide-on-click 属性来配置。",-1),u=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"点击隐藏"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":hide-on-click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"true"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项一"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项二"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项三"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项四"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"点击不隐藏"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"h4"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":hide-on-click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"false"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项一"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项二"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项三"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"选项四"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),h=o("h2",{id:"自定义渲染",tabindex:"-1"},[s("自定义渲染 "),o("a",{class:"header-anchor",href:"#自定义渲染","aria-hidden":"true"},"#")],-1),E=o("p",null,[s("通过传默认插槽和"),o("code",null,"dropdown"),s("插槽,来自定义渲染组件")],-1),b=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"style"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"margin: 20px 100px"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":hide-on-click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"false"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-button"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"自定义渲染 "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-icon"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":component"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"ChevronDownOutline"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," /></"),o("span",{style:{color:"#F07178"}},"p-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"class"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"demo"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-input"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"placeholder"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"搜索关键词"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"            "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"prefix"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"              "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-icon"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},":component"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"SearchSharp"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"16"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"            "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-input"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"disabled"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 4 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 5"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 6"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"确认"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"          "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-button"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"info"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}},"取消"),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-button"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"div"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"style"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#FFCB6B"}},"demo"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#B2CCD6"}},"padding"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#F78C6C"}},"5px"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#B2CCD6"}},"width"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#F78C6C"}},"300px"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#FFCB6B"}},"demo"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#FFCB6B"}},"button"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#B2CCD6"}},"margin"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#F78C6C"}},"2px"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#FFCB6B"}},"demo"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"."),o("span",{style:{color:"#FFCB6B"}},"pui-input"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#B2CCD6"}},"margin"),o("span",{style:{color:"#89DDFF"}},":"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#F78C6C"}},"10px"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#F78C6C"}},"0"),o("span",{style:{color:"#89DDFF"}},";")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"style"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#C792EA"}},"setup"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"{"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"ChevronDownOutline"),o("span",{style:{color:"#89DDFF"}},","),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#A6ACCD"}},"SearchSharp"),o("span",{style:{color:"#F07178"}}," "),o("span",{style:{color:"#89DDFF"}},"}"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"'"),o("span",{style:{color:"#C3E88D"}},"@vicons/ionicons5"),o("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"script"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),g=o("h2",{id:"按钮类型",tabindex:"-1"},[s("按钮类型 "),o("a",{class:"header-anchor",href:"#按钮类型","aria-hidden":"true"},"#")],-1),_=o("p",null,[s("当"),o("code",null,"type"),s(" 为 "),o("code",null,"button"),s(" 时,设置"),o("code",null,"btnType"),s(" 可以设置按钮类型")],-1),v=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"btnType"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"default"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"btnType"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"primary"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"btnType"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"info"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),f=o("h2",{id:"不同尺寸",tabindex:"-1"},[s("不同尺寸 "),o("a",{class:"header-anchor",href:"#不同尺寸","aria-hidden":"true"},"#")],-1),k=o("p",null,[o("code",null,"Dropdown"),s(" 组件提供除了"),o("code",null,"sm"),s(),o("code",null,"md"),s(),o("code",null,"lg"),s("三种尺寸，可以在不同场景下选择合适的尺寸。")],-1),x=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"sm"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"md"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"lg"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"br"),o("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"sm"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"md"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"lg"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),z=o("h2",{id:"dark-模式",tabindex:"-1"},[s("dark 模式 "),o("a",{class:"header-anchor",href:"#dark-模式","aria-hidden":"true"},"#")],-1),B=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"sm"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"dark"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"md"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"dark"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"a"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"lg"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"dark"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"        "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-space"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),S=o("h2",{id:"按钮点击事件",tabindex:"-1"},[s("按钮点击事件 "),o("a",{class:"header-anchor",href:"#按钮点击事件","aria-hidden":"true"},"#")],-1),T=o("p",null,[o("code",null,"Dropdown"),s("的 "),o("code",null,"type"),s("为"),o("code",null,"button"),s("时的点击事件")],-1),O=o("div",{class:"language-vue"},[o("button",{title:"Copy Code",class:"copy"}),o("span",{class:"lang"},"vue"),o("pre",{class:"shiki material-palenight"},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"type"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"button"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"size"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"lg"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}}," "),o("span",{style:{color:"#C792EA"}},"@click"),o("span",{style:{color:"#89DDFF"}},"="),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#C3E88D"}},"$message.success('@click')"),o("span",{style:{color:"#89DDFF"}},'"'),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    下拉菜单")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#A6ACCD"}}," "),o("span",{style:{color:"#89DDFF"}},"#"),o("span",{style:{color:"#C792EA"}},"dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 1 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 2 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"      "),o("span",{style:{color:"#89DDFF"}},"<"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">"),o("span",{style:{color:"#A6ACCD"}}," item 3 "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown-item"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"    "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#A6ACCD"}},"  "),o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"p-dropdown"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"#89DDFF"}},"</"),o("span",{style:{color:"#F07178"}},"template"),o("span",{style:{color:"#89DDFF"}},">")]),s(`
`),o("span",{class:"line"})])])],-1);function $(N,V,J,P,j,q){const p=t("demo"),e=t("clientOnly");return c(),r("div",null,[F,y,d,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <h4>链接类型</h4>
  <p-dropdown type="a">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <h4>按钮类型</h4>
  <p-dropdown type="button">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[i]),_:1})]),_:1}),C,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <h4>hover</h4>
  <p-dropdown type="a">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <h4>click</h4>
  <p-dropdown type="a" trigger="click">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[A]),_:1})]),_:1}),m,w,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <h4>点击隐藏</h4>
  <p-dropdown type="a" :hide-on-click="true">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <h4>点击不隐藏</h4>
  <p-dropdown type="a" :hide-on-click="false">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item>选项一</p-dropdown-item>
      <p-dropdown-item>选项二</p-dropdown-item>
      <p-dropdown-item disabled>选项三</p-dropdown-item>
      <p-dropdown-item>选项四</p-dropdown-item>
    </template>
  </p-dropdown>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[u]),_:1})]),_:1}),h,E,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <div style="margin: 20px 100px">
    <p-dropdown :hide-on-click="false">
      <p-button>自定义渲染 <p-icon :component="ChevronDownOutline" /></p-button>
      <template #dropdown>
        <div class="demo">
          <p-input placeholder="搜索关键词">
            <template #prefix>
              <p-icon :component="SearchSharp" size="16" />
            </template>
          </p-input>
          <p-dropdown-item disabled> item 1 </p-dropdown-item>
          <p-dropdown-item> item 2 </p-dropdown-item>
          <p-dropdown-item> item 3 </p-dropdown-item>
          <p-dropdown-item> item 4 </p-dropdown-item>
          <p-dropdown-item> item 5</p-dropdown-item>
          <p-dropdown-item> item 6</p-dropdown-item>
          <p-button type="primary">确认</p-button>
          <p-button type="info">取消</p-button>
        </div>
      </template>
    </p-dropdown>
  </div>
</template>
<style>
  .demo {
    padding: 5px;
    width: 300px;
  }
  .demo button {
    margin: 2px;
  }
  .demo .pui-input {
    margin: 10px 0;
  }
</style>
<script setup>
  import { ChevronDownOutline, SearchSharp } from '@vicons/ionicons5'
<\/script>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[b]),_:1})]),_:1}),g,_,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <p-dropdown type="button" btnType="default">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <br />
  <p-dropdown type="button" btnType="primary">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
  <br />
  <br />
  <br />
  <p-dropdown type="button" btnType="info">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[v]),_:1})]),_:1}),f,k,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <p-space>
    <p-dropdown type="a" size="sm">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="md">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="lg">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
  </p-space>
  <br />
  <p-space>
    <p-dropdown type="button" size="sm">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="button" size="md">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="button" size="lg">
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
  </p-space>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[x]),_:1})]),_:1}),z,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <p-space>
    <p-dropdown type="a" size="sm" dark>
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="md" dark>
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
    <p-dropdown type="a" size="lg" dark>
      下拉菜单
      <template #dropdown>
        <p-dropdown-item> item 1 </p-dropdown-item>
        <p-dropdown-item> item 2 </p-dropdown-item>
        <p-dropdown-item> item 3 </p-dropdown-item>
      </template>
    </p-dropdown>
  </p-space>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[B]),_:1})]),_:1}),S,T,l(e,null,{default:n(()=>[l(p,{"initial-value":`<template>
  <p-dropdown type="button" size="lg" @click="$message.success('@click')">
    下拉菜单
    <template #dropdown>
      <p-dropdown-item> item 1 </p-dropdown-item>
      <p-dropdown-item> item 2 </p-dropdown-item>
      <p-dropdown-item> item 3 </p-dropdown-item>
    </template>
  </p-dropdown>
</template>
`,direction:"",lang:"vue",height:"undefined"},{default:n(()=>[O]),_:1})]),_:1})])}const I=a(D,[["render",$]]);export{H as __pageData,I as default};
