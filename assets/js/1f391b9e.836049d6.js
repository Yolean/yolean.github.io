"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2493"],{7739:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(5893);t(7294);var r=t(7026),l=t(4385),s=t(6171),a=t(4926);function c(e){let{className:n}=e;return(0,i.jsx)(a.Z,{type:"caution",title:(0,i.jsx)(l.cI,{}),className:(0,r.Z)(n,s.k.common.unlistedBanner),children:(0,i.jsx)(l.eU,{})})}function o(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.T$,{}),(0,i.jsx)(c,{...e})]})}},1046:function(e,n,t){t.d(n,{Z:()=>d});var i=t("5893");t("7294");var r=t("7026"),l=t("4385"),s=t("6171"),a=t("4926");function c(e){let{className:n}=e;return(0,i.jsx)(a.Z,{type:"caution",title:(0,i.jsx)(l.ht,{}),className:(0,r.Z)(n,s.k.common.draftBanner),children:(0,i.jsx)(l.xo,{})})}var o=t("7739");function d(e){let{metadata:n}=e,{unlisted:t,frontMatter:r}=n;return(0,i.jsxs)(i.Fragment,{children:[(t||r.unlisted)&&(0,i.jsx)(o.Z,{}),r.draft&&(0,i.jsx)(c,{})]})}},3219:function(e,n,t){t.r(n),t.d(n,{default:()=>f});var i=t("5893");t("7294");var r=t("7026"),l=t("357"),s=t("6171"),a=t("3347"),c=t("666"),o=t("9521"),d=t("1046"),u=t("6360");function f(e){let{content:n}=e,{metadata:t,assets:f}=n,{title:m,editUrl:h,description:x,frontMatter:v,lastUpdatedBy:g,lastUpdatedAt:j}=t,{keywords:p,wrapperClassName:b,hide_table_of_contents:Z}=v,_=f.image??v.image,y=!!(h||j||g);return(0,i.jsx)(l.FG,{className:(0,r.Z)(b??s.k.wrapper.mdxPages,s.k.page.mdxPage),children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(l.d,{title:m,description:x,keywords:p,image:_}),(0,i.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,i.jsxs)("div",{className:(0,r.Z)("row","mdxPageWrapper_j9I6"),children:[(0,i.jsxs)("div",{className:(0,r.Z)("col",!Z&&"col--8"),children:[(0,i.jsx)(d.Z,{metadata:t}),(0,i.jsx)("article",{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(n,{})})}),y&&(0,i.jsx)(u.Z,{className:(0,r.Z)("margin-top--sm",s.k.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:j,lastUpdatedBy:g})]}),!Z&&n.toc.length>0&&(0,i.jsx)("div",{className:"col col--2",children:(0,i.jsx)(o.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})})]})})]})})}},9521:function(e,n,t){t.d(n,{Z:()=>s});var i=t("5893");t("7294");var r=t("7026"),l=t("6643");function s(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,r.Z)("tableOfContents_bqdL","thin-scrollbar",n),children:(0,i.jsx)(l.Z,{...t,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},6643:function(e,n,t){t.d(n,{Z:()=>o});var i=t("5893"),r=t("7294"),l=t("6009");function s(e){let n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}var a=t("3367");let c=r.memo(function e(n){let{toc:t,className:r,linkClassName:l,isChild:s}=n;return t.length?(0,i.jsx)("ul",{className:s?void 0:r,children:t.map(n=>(0,i.jsxs)("li",{children:[(0,i.jsx)(a.Z,{to:`#${n.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,i.jsx)(e,{isChild:!0,toc:n.children,className:r,linkClassName:l})]},n.id))}):null});function o(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...f}=e,m=(0,l.L)(),h=d??m.tableOfContents.minHeadingLevel,x=u??m.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,r.useMemo)(()=>(function e(n){let{toc:t,minHeadingLevel:i,maxHeadingLevel:r}=n;return t.flatMap(n=>{let t=e({toc:n.children,minHeadingLevel:i,maxHeadingLevel:r});return n.level>=i&&n.level<=r?[{...n,children:t}]:t})})({toc:function(e){let n=e.map(e=>({...e,parentIndex:-1,children:[]})),t=Array(7).fill(-1);n.forEach((e,n)=>{let i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n});let i=[];return n.forEach(e=>{let{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):i.push(r)}),i}(n),minHeadingLevel:t,maxHeadingLevel:i}),[n,t,i])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return!function(e){let n=(0,r.useRef)(void 0),t=function(){let e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,r.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,r.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:a}=e;function c(){let e=Array.from(document.getElementsByClassName(i)),c=function(e,n){let{anchorTopOffset:t}=n,i=e.find(e=>s(e).top>=t);if(i){var r;return(r=s(i)).top>0&&r.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e,i=[];for(let e=n;e<=t;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:t.current}),o=e.find(e=>c&&c.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===o?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)})}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}},[e,t])}((0,r.useMemo)(()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:x}},[a,o,h,x])),(0,i.jsx)(c,{toc:v,className:t,linkClassName:a,...f})}},4385:function(e,n,t){t.d(n,{T$:function(){return c},cI:function(){return s},eU:function(){return a},ht:function(){return o},xo:function(){return d}});var i=t(5893);t(7294);var r=t(7670),l=t(1199);function s(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(l.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(r.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);