"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9348"],{8986:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);n(7294);var a=n(7026),s=n(357),l=n(6171),i=n(2817),o=n(3367),u=n(8141),c=n(187),d=n(7914),h=n(2901),g=n(6802),m=n(6230);function p(e){let{author:t}=e,n=(0,i.ds)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{title:n}),(0,r.jsx)(h.Z,{tag:"blog_authors_posts"})]})}function x(){let{authorsListPath:e}=(0,u.wj)();return(0,r.jsx)(o.Z,{href:e,children:(0,r.jsx)(i.fw,{})})}function j(e){let{author:t,items:n,sidebar:a,listMetadata:s}=e;return(0,r.jsxs)(c.Z,{sidebar:a,children:[(0,r.jsxs)("header",{className:"margin-bottom--xl",children:[(0,r.jsx)(m.Z,{as:"h1",author:t}),t.description&&(0,r.jsx)("p",{children:t.description}),(0,r.jsx)(x,{})]}),0===n.length?(0,r.jsx)("p",{children:(0,r.jsx)(i.J$,{})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)(g.Z,{items:n}),(0,r.jsx)(d.Z,{metadata:s})]})]})}function f(e){return(0,r.jsxs)(s.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogAuthorsPostsPage),children:[(0,r.jsx)(p,{...e}),(0,r.jsx)(j,{...e})]})}},7914:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);n(7294);var a=n(7670),s=n(8007);function l(e){let{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.Z,{permalink:n,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(s.Z,{permalink:l,title:(0,r.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},7352:function(e,t,n){n.d(t,{Z:()=>A});var r=n("5893");n("7294");var a=n("7026"),s=n("8141");function l(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var i=n("3367");function o(e){let{className:t}=e,{metadata:n,isBlogPostPage:l}=(0,s.nO)(),{permalink:o,title:u}=n;return(0,r.jsx)(l?"h1":"h2",{className:(0,a.Z)("title_f1Hy",t),children:l?u:(0,r.jsx)(i.Z,{to:o,children:u})})}var u=n("7670"),c=n("1107"),d=n("4221");function h(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,c.c)();return t=>{let n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function g(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function m(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e,{metadata:n}=(0,s.nO)(),{date:l,readingTime:i}=n,o=(0,d.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.Z)("container_mt6G","margin-vert--md",t),children:[(0,r.jsx)(g,{date:l,formattedDate:o.format(new Date(l))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(h,{readingTime:i})]})]})}var x=n("6230");let j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e,{metadata:{authors:n},assets:l}=(0,s.nO)();if(0===n.length)return null;let i=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,r.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",i?j.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,r.jsx)("div",{className:(0,a.Z)(!i&&(o?"col col--12":"col col--6"),i?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(x.Z,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t))})}function b(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(o,{}),(0,r.jsx)(p,{}),(0,r.jsx)(f,{})]})}var v=n("3781"),Z=n("666");function w(e){let{children:t,className:n}=e,{isBlogPostPage:l}=(0,s.nO)();return(0,r.jsx)("div",{id:l?v.blogPostContainerID:void 0,className:(0,a.Z)("markdown",n),children:(0,r.jsx)(Z.Z,{children:t})})}var N=n("6171"),_=n("6360"),T=n("6671");function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function y(e){let{blogPostTitle:t,...n}=e;return(0,r.jsx)(i.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(k,{})})}function O(){let{metadata:e,isBlogPostPage:t}=(0,s.nO)(),{tags:n,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:u,lastUpdatedAt:c}=e,d=!t&&o,h=n.length>0;if(!(h||d||i))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,a.Z)("col",{"col--9":d}),children:(0,r.jsx)(T.Z,{tags:n})}),d&&(0,r.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":h}),children:(0,r.jsx)(y,{blogPostTitle:l,to:e.permalink})})]});{let e=!!(i||c||u);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,r.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",N.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(T.Z,{tags:n})})}),e&&(0,r.jsx)(_.Z,{className:(0,a.Z)("margin-top--sm",N.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:c,lastUpdatedBy:u})]})}}function A(e){let{children:t,className:n}=e,i=function(){let{isBlogPostPage:e}=(0,s.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,a.Z)(i,n),children:[(0,r.jsx)(b,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(O,{})]})}},6802:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);n(7294);var a=n(8141),s=n(7352);function l(e){let{items:t,component:n=s.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,r.jsx)(a.n4,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)})})}},8007:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);n(7294);var a=n(7026),s=n(3367);function l(e){let{permalink:t,title:n,subLabel:l,isNext:i}=e;return(0,r.jsxs)(s.Z,{className:(0,a.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},2684:function(e,t,n){n.d(t,{Z:()=>i});var r=n("5893");n("7294");var a=n("7026"),s=n("3367");let l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:n,count:i,description:o}=e;return(0,r.jsxs)(s.Z,{href:t,title:o,className:(0,a.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[n,i&&(0,r.jsx)("span",{children:i})]})}},6671:function(e,t,n){n.d(t,{Z:()=>i});var r=n("5893");n("7294");var a=n("7026"),s=n("7670"),l=n("2684");function i(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,a.Z)("tags_jXut","padding--none","margin-left--sm"),children:t.map(e=>(0,r.jsx)("li",{className:"tag_QGVx",children:(0,r.jsx)(l.Z,{...e})},e.permalink))})]})}},2817:function(e,t,n){n.d(t,{HV:function(){return u},J$:function(){return d},Wi:function(){return i},ds:function(){return o},fw:function(){return c}});var r=n(5893);n(7294);var a=n(7670),s=n(1107);function l(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){let t=l();return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){let t=l();return(0,a.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let u=()=>(0,a.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function c(){return(0,r.jsx)(a.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function d(){return(0,r.jsx)(a.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);