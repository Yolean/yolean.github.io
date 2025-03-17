"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8514"],{1338:function(e,t,n){n.r(t),n.d(t,{default:()=>p});var a=n("5893");n("7294");var r=n("7026"),l=n("7262"),i=n("357"),s=n("6171"),o=n("187"),c=n("7914"),d=n("2901"),u=n("6802"),g=n("1199"),m=n("8141");function h(e){let t=(0,m.CS)(e);return(0,a.jsx)(g.Z,{children:(0,a.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){let{metadata:t}=e,{siteConfig:{title:n}}=(0,l.Z)(),{blogDescription:r,blogTitle:s,permalink:o}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.d,{title:"/"===o?n:s,description:r}),(0,a.jsx)(d.Z,{tag:"blog_posts_list"})]})}function j(e){let{metadata:t,items:n,sidebar:r}=e;return(0,a.jsxs)(o.Z,{sidebar:r,children:[(0,a.jsx)(u.Z,{items:n}),(0,a.jsx)(c.Z,{metadata:t})]})}function p(e){return(0,a.jsxs)(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage),children:[(0,a.jsx)(x,{...e}),(0,a.jsx)(h,{...e}),(0,a.jsx)(j,{...e})]})}},7914:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(5893);n(7294);var r=n(7670),l=n(8007);function i(e){let{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(l.Z,{permalink:n,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,a.jsx)(l.Z,{permalink:i,title:(0,a.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},7352:function(e,t,n){n.d(t,{Z:()=>R});var a=n("5893");n("7294");var r=n("7026"),l=n("8141");function i(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}var s=n("3367");function o(e){let{className:t}=e,{metadata:n,isBlogPostPage:i}=(0,l.nO)(),{permalink:o,title:c}=n;return(0,a.jsx)(i?"h1":"h2",{className:(0,r.Z)("title_f1Hy",t),children:i?c:(0,a.jsx)(s.Z,{to:o,children:c})})}var c=n("7670"),d=n("1107"),u=n("4221");function g(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,d.c)();return t=>{let n=Math.ceil(t);return e(n,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,a.jsx)(a.Fragment,{children:n(t)})}function m(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function h(){return(0,a.jsx)(a.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e,{metadata:n}=(0,l.nO)(),{date:i,readingTime:s}=n,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsxs)("div",{className:(0,r.Z)("container_mt6G","margin-vert--md",t),children:[(0,a.jsx)(m,{date:i,formattedDate:o.format(new Date(i))}),void 0!==s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{}),(0,a.jsx)(g,{readingTime:s})]})]})}var j=n("6230");let p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e,{metadata:{authors:n},assets:i}=(0,l.nO)();if(0===n.length)return null;let s=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,a.jsx)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?p.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,a.jsx)("div",{className:(0,r.Z)(!s&&(o?"col col--12":"col col--6"),s?p.imageOnlyAuthorCol:p.authorCol),children:(0,a.jsx)(j.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t))})}function b(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(o,{}),(0,a.jsx)(x,{}),(0,a.jsx)(f,{})]})}var v=n("3781"),Z=n("666");function _(e){let{children:t,className:n}=e,{isBlogPostPage:i}=(0,l.nO)();return(0,a.jsx)("div",{id:i?v.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),children:(0,a.jsx)(Z.Z,{children:t})})}var N=n("6171"),w=n("6360"),k=n("6671");function y(){return(0,a.jsx)("b",{children:(0,a.jsx)(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function O(e){let{blogPostTitle:t,...n}=e;return(0,a.jsx)(s.Z,{"aria-label":(0,c.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(y,{})})}function C(){let{metadata:e,isBlogPostPage:t}=(0,l.nO)(),{tags:n,title:i,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=n.length>0;if(!(g||u||s))return null;if(!t)return(0,a.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,a.jsx)("div",{className:(0,r.Z)("col",{"col--9":u}),children:(0,a.jsx)(k.Z,{tags:n})}),u&&(0,a.jsx)("div",{className:(0,r.Z)("col text--right",{"col--3":g}),children:(0,a.jsx)(O,{blogPostTitle:i,to:e.permalink})})]});{let e=!!(s||d||c);return(0,a.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,a.jsx)("div",{className:(0,r.Z)("row","margin-top--sm",N.k.blog.blogFooterEditMetaRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(k.Z,{tags:n})})}),e&&(0,a.jsx)(w.Z,{className:(0,r.Z)("margin-top--sm",N.k.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:d,lastUpdatedBy:c})]})}}function R(e){let{children:t,className:n}=e,s=function(){let{isBlogPostPage:e}=(0,l.nO)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsxs)(i,{className:(0,r.Z)(s,n),children:[(0,a.jsx)(b,{}),(0,a.jsx)(_,{children:t}),(0,a.jsx)(C,{})]})}},6802:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(5893);n(7294);var r=n(8141),l=n(7352);function i(e){let{items:t,component:n=l.Z}=e;return(0,a.jsx)(a.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,a.jsx)(r.n4,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)})})}},8007:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(5893);n(7294);var r=n(7026),l=n(3367);function i(e){let{permalink:t,title:n,subLabel:i,isNext:s}=e;return(0,a.jsxs)(l.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},2684:function(e,t,n){n.d(t,{Z:()=>s});var a=n("5893");n("7294");var r=n("7026"),l=n("3367");let i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:n,count:s,description:o}=e;return(0,a.jsxs)(l.Z,{href:t,title:o,className:(0,r.Z)(i.tag,s?i.tagWithCount:i.tagRegular),children:[n,s&&(0,a.jsx)("span",{children:s})]})}},6671:function(e,t,n){n.d(t,{Z:()=>s});var a=n("5893");n("7294");var r=n("7026"),l=n("7670"),i=n("2684");function s(e){let{tags:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,r.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,a.jsx)("li",{className:"tag_QGVx",children:(0,a.jsx)(i.Z,{...e})},e.permalink))})]})}}}]);