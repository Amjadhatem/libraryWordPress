this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(e){function t(t){for(var r,l,a=t[0],i=t[1],s=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],r=!0,a=1;a<c.length;a++){var i=c[a];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var r={},n={52:0},o=[];function l(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=r,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(c,r,function(t){return e[t]}.bind(null,r));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([562,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.htmlEntities},107:function(e,t,c){"use strict";c.d(t,"a",(function(){return w}));var r=c(0),n=c(1),o=c(2),l=c(68),a=c(632),i=c(5),s=c.n(i),u=c(11),b=c(16),d=c(35),m=c(631),g=c(10);c(55);const p=({id:e,label:t,popoverContents:c,remove:a,screenReaderLabel:i,className:b=""})=>{const[d,h]=Object(r.useState)(!1),O=Object(u.useInstanceId)(p);if(i=i||t,!t)return null;t=Object(g.decodeEntities)(t);const E=s()("woocommerce-tag",b,{"has-remove":!!a}),j=`woocommerce-tag__label-${O}`,f=Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"screen-reader-text"},i),Object(r.createElement)("span",{"aria-hidden":"true"},t));return Object(r.createElement)("span",{className:E},c?Object(r.createElement)(o.Button,{className:"woocommerce-tag__text",id:j,onClick:()=>h(!0)},f):Object(r.createElement)("span",{className:"woocommerce-tag__text",id:j},f),c&&d&&Object(r.createElement)(o.Popover,{onClose:()=>h(!1)},c),a&&Object(r.createElement)(o.Button,{className:"woocommerce-tag__remove",onClick:a(e),label:Object(n.sprintf)(
// Translators: %s label.
Object(n.__)("Remove %s","woocommerce"),t),"aria-describedby":j},Object(r.createElement)(l.a,{icon:m.a,size:20,className:"clear-icon"})))};var h=p;c(54);const O=e=>Object(r.createElement)(d.b,{...e}),E=e=>{const{list:t,selected:c,renderItem:n,depth:o=0,onSelect:l,instanceId:a,isSingle:i,search:s,useExpandedPanelId:u}=e,[b]=u;return t?Object(r.createElement)(r.Fragment,null,t.map((t=>{var d,m;const g=null!==(d=t.children)&&void 0!==d&&d.length&&!i?t.children.every((({id:e})=>c.find((t=>t.id===e)))):!!c.find((({id:e})=>e===t.id)),p=(null===(m=t.children)||void 0===m?void 0:m.length)&&b===t.id;return Object(r.createElement)(r.Fragment,{key:t.id},Object(r.createElement)("li",null,n({item:t,isSelected:g,onSelect:l,isSingle:i,selected:c,search:s,depth:o,useExpandedPanelId:u,controlId:a})),p?Object(r.createElement)(E,{...e,list:t.children,depth:o+1}):null)}))):null},j=({isLoading:e,isSingle:t,selected:c,messages:l,onChange:a,onRemove:i})=>{if(e||t||!c)return null;const s=c.length;return Object(r.createElement)("div",{className:"woocommerce-search-list__selected"},Object(r.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(r.createElement)("strong",null,l.selected(s)),s>0?Object(r.createElement)(o.Button,{isLink:!0,isDestructive:!0,onClick:()=>a([]),"aria-label":l.clear},Object(n.__)("Clear all","woocommerce")):null),s>0?Object(r.createElement)("ul",null,c.map(((e,t)=>Object(r.createElement)("li",{key:t},Object(r.createElement)(h,{label:e.name,id:e.id,remove:i}))))):null)},f=({filteredList:e,search:t,onSelect:c,instanceId:o,useExpandedPanelId:i,...s})=>{const{messages:u,renderItem:b,selected:d,isSingle:m}=s,g=b||O;return 0===e.length?Object(r.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(r.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(r.createElement)(l.a,{icon:a.a})),Object(r.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?Object(n.sprintf)(u.noResults,t):u.noItems)):Object(r.createElement)("ul",{className:"woocommerce-search-list__list"},Object(r.createElement)(E,{useExpandedPanelId:i,list:e,selected:d,renderItem:g,onSelect:c,instanceId:o,isSingle:m,search:t}))},w=e=>{const{className:t="",isCompact:c,isHierarchical:l,isLoading:a,isSingle:i,list:d,messages:m=b.a,onChange:g,onSearch:p,selected:h,type:O="text",debouncedSpeak:E}=e,[y,_]=Object(r.useState)(""),k=Object(r.useState)(-1),x=Object(u.useInstanceId)(w),v=Object(r.useMemo)((()=>({...b.a,...m})),[m]),S=Object(r.useMemo)((()=>Object(b.c)(d,y,l)),[d,y,l]);Object(r.useEffect)((()=>{E&&E(v.updated)}),[E,v]),Object(r.useEffect)((()=>{"function"==typeof p&&p(y)}),[y,p]);const C=Object(r.useCallback)((e=>()=>{i&&g([]);const t=h.findIndex((({id:t})=>t===e));g([...h.slice(0,t),...h.slice(t+1)])}),[i,h,g]),A=Object(r.useCallback)((e=>()=>{Array.isArray(e)?g(e):-1===h.findIndex((({id:t})=>t===e.id))?g(i?[e]:[...h,e]):C(e.id)()}),[i,C,g,h]),P=Object(r.useCallback)((e=>{const[t]=h.filter((t=>!e.find((e=>t.id===e.id))));C(t.id)()}),[C,h]);return Object(r.createElement)("div",{className:s()("woocommerce-search-list",t,{"is-compact":c,"is-loading":a,"is-token":"token"===O})},"text"===O&&Object(r.createElement)(j,{...e,onRemove:C,messages:v}),Object(r.createElement)("div",{className:"woocommerce-search-list__search"},"text"===O?Object(r.createElement)(o.TextControl,{label:v.search,type:"search",value:y,onChange:e=>_(e)}):Object(r.createElement)(o.FormTokenField,{disabled:a,label:v.search,onChange:P,onInputChange:e=>_(e),suggestions:[],__experimentalValidateInput:()=>!1,value:a?[Object(n.__)("Loading…","woocommerce")]:h.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),a?Object(r.createElement)("div",{className:"woocommerce-search-list__list"},Object(r.createElement)(o.Spinner,null)):Object(r.createElement)(f,{...e,search:y,filteredList:S,messages:v,onSelect:A,instanceId:x,useExpandedPanelId:k}))};Object(o.withSpokenMessages)(w)},11:function(e,t){e.exports=window.wp.compose},121:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);t.a=({value:e,setAttributes:t})=>Object(r.createElement)(o.SelectControl,{label:Object(n.__)("Order products by","woocommerce"),value:e,options:[{label:Object(n.__)("Newness - newest first","woocommerce"),value:"date"},{label:Object(n.__)("Price - low to high","woocommerce"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woocommerce"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woocommerce"),value:"rating"},{label:Object(n.__)("Sales - most first","woocommerce"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woocommerce"),value:"title"},{label:Object(n.__)("Menu Order","woocommerce"),value:"menu_order"}],onChange:e=>t({orderby:e})})},14:function(e,t){e.exports=window.wp.apiFetch},149:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return a}));var r=c(21);const n=e=>Object(r.c)(e,"count")&&Object(r.c)(e,"description")&&Object(r.c)(e,"id")&&Object(r.c)(e,"name")&&Object(r.c)(e,"parent")&&Object(r.c)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,o=e=>Array.isArray(e)&&e.every(n),l=e=>Object(r.c)(e,"attribute")&&Object(r.c)(e,"operator")&&Object(r.c)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every((e=>"string"==typeof e)),a=e=>Array.isArray(e)&&e.every(l)},15:function(e,t){e.exports=window.wp.url},153:function(e,t,c){"use strict";var r=c(0),n=c(5),o=c.n(n),l=c(1),a=c(35),i=c(107),s=c(2),u=c(11),b=c(23),d=c(29),m=c(34),g=c(75),p=c(162);c(241),t.a=Object(u.withInstanceId)((({onChange:e,onOperatorChange:t,instanceId:c,isCompact:n=!1,messages:u={},operator:h="any",selected:O,type:E="text"})=>{const{errorLoadingAttributes:j,isLoadingAttributes:f,productsAttributes:w}=function(e){const[t,c]=Object(r.useState)(null),[n,o]=Object(r.useState)(!1),[l,a]=Object(r.useState)([]),i=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{if(!n&&!i.current)return async function(){o(!0);try{const e=await Object(b.b)(),t=[];for(const c of e){const e=await Object(b.i)(c.id);t.push({...c,parent:0,terms:e.map((e=>({...e,attr_slug:c.taxonomy,parent:c.id})))})}a(t),i.current=!0}catch(e){e instanceof Error&&c(await Object(d.a)(e))}finally{o(!1)}}(),()=>{i.current=!0}}),[n,true]),{errorLoadingAttributes:t,isLoadingAttributes:n,productsAttributes:l}}(),y=w.reduce(((e,t)=>{const{terms:c,...r}=t;return[...e,Object(p.a)(r),...c.map(p.a)]}),[]);return u={clear:Object(l.__)("Clear all product attributes","woocommerce"),noItems:Object(l.__)("Your store doesn't have any product attributes.","woocommerce"),search:Object(l.__)("Search for product attributes","woocommerce"),selected:e=>Object(l.sprintf)(/* translators: %d is the count of attributes selected. */
Object(l._n)("%d attribute selected","%d attributes selected",e,"woocommerce"),e),updated:Object(l.__)("Product attribute search results updated.","woocommerce"),...u},j?Object(r.createElement)(m.a,{error:j}):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.a,{className:"woocommerce-product-attributes",isCompact:n,isHierarchical:!0,isLoading:f,isSingle:!1,list:y,messages:u,onChange:e,renderItem:e=>{const{item:t,search:n,depth:i=0}=e,s=t.count||0,u=["woocommerce-product-attributes__item","woocommerce-search-list__item",{"is-searching":n.length>0,"is-skip-level":0===i&&0!==t.parent}];if(!t.breadcrumbs.length)return Object(r.createElement)(g.a,{...e,className:o()(u),item:t,isLoading:f,disabled:0===t.count,name:`attributes-${c}`,countLabel:Object(l.sprintf)(/* translators: %d is the count of terms. */
Object(l._n)("%d term","%d terms",s,"woocommerce"),s),"aria-label":Object(l.sprintf)(/* translators: %1$s is the item name, %2$d is the count of terms for the item. */
Object(l._n)("%1$s, has %2$d term","%1$s, has %2$d terms",s,"woocommerce"),t.name,s)});const b=`${t.breadcrumbs[0]}: ${t.name}`;return Object(r.createElement)(a.a,{...e,name:`terms-${c}`,className:o()(...u,"has-count"),countLabel:Object(l.sprintf)(/* translators: %d is the count of products. */
Object(l._n)("%d product","%d products",s,"woocommerce"),s),"aria-label":Object(l.sprintf)(/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
Object(l._n)("%1$s, has %2$d product","%1$s, has %2$d products",s,"woocommerce"),b,s)})},selected:O.map((({id:e})=>y.find((t=>t.id===e)))).filter(Boolean),type:E}),!!t&&Object(r.createElement)("div",{hidden:O.length<2},Object(r.createElement)(s.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(l.__)("Display products matching","woocommerce"),help:Object(l.__)("Pick at least two attributes to use this setting.","woocommerce"),value:h,onChange:t,options:[{label:Object(l.__)("Any selected attributes","woocommerce"),value:"any"},{label:Object(l.__)("All selected attributes","woocommerce"),value:"all"}]})))}))},16:function(e,t,c){"use strict";c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return i})),c.d(t,"d",(function(){return s})),c.d(t,"b",(function(){return u}));var r=c(0),n=c(1),o=c(57);const l={clear:Object(n.__)("Clear all selected items","woocommerce"),noItems:Object(n.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woocommerce"),search:Object(n.__)("Search for items","woocommerce"),selected:e=>Object(n.sprintf)(/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:Object(n.__)("Search results updated.","woocommerce")},a=(e,t=e)=>{const c=e.reduce(((e,t)=>{const c=t.parent||0;return e[c]||(e[c]=[]),e[c].push(t),e}),{}),r=Object(o.a)(t,"id"),n=["0"],l=(e={})=>e.parent?[...l(r[e.parent]),e.name]:e.name?[e.name]:[],a=e=>e.map((e=>{const t=c[e.id];return n.push(""+e.id),{...e,breadcrumbs:l(r[e.parent]),children:t&&t.length?a(t):[]}})),i=a(c[0]||[]);return Object.entries(c).forEach((([e,t])=>{n.includes(e)||i.push(...a(t||[]))})),i},i=(e,t,c)=>{if(!t)return c?a(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!r.test(e.name)&&e)).filter(Boolean);return c?a(n,e):n},s=(e,t)=>{if(!t)return e;const c=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(c).map(((e,t)=>c.test(e)?Object(r.createElement)("strong",{key:t},e):Object(r.createElement)(r.Fragment,{key:t},e)))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},162:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return s})),c.d(t,"d",(function(){return u}));var r=c(3),n=c(149),o=c(6);const l=Object(r.getSetting)("attributes",[]).reduce(((e,t)=>{const c=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;var r;return c&&c.id&&e.push(c),e}),[]),a=e=>{const{count:t,id:c,name:r,parent:o}=e;return{count:t,id:c,name:r,parent:o,breadcrumbs:[],children:[],value:Object(n.b)(e)?e.attr_slug:""}},i=e=>{if(e)return l.find((t=>t.id===e))},s=e=>{if(e)return l.find((t=>t.taxonomy===e))},u=(e,t,c,r)=>{const n=Object(o.select)("core/block-editor"),l=Object(o.dispatch)("core/block-editor"),a=n.getBlockParents(e);let i="";a.forEach((e=>{const t=n.getBlock(e).innerBlocks.find((e=>e.name===r));t&&(i=t.clientId)})),l.updateBlockAttributes(i,{[t]:c})}},17:function(e,t,c){"use strict";c.d(t,"p",(function(){return o})),c.d(t,"n",(function(){return l})),c.d(t,"m",(function(){return a})),c.d(t,"o",(function(){return i})),c.d(t,"k",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"h",(function(){return b})),c.d(t,"l",(function(){return d})),c.d(t,"c",(function(){return m})),c.d(t,"d",(function(){return g})),c.d(t,"g",(function(){return p})),c.d(t,"a",(function(){return E})),c.d(t,"b",(function(){return j})),c.d(t,"i",(function(){return f})),c.d(t,"j",(function(){return w})),c.d(t,"f",(function(){return y}));var r,n=c(3);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",i=o.buildPhase,s=null===(r=n.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=n.STORE_PAGES.checkout.id,b=(n.STORE_PAGES.checkout.permalink,n.STORE_PAGES.privacy.permalink),d=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),m=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),g=n.STORE_PAGES.cart.permalink,p=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("localPickupEnabled",!1)),h=Object(n.getSetting)("countries",{}),O=Object(n.getSetting)("countryData",{}),E=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,h[e]||""]))),j=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowBilling)).map((e=>[e,O[e].states||[]]))),f=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,h[e]||""]))),w=Object.fromEntries(Object.keys(O).filter((e=>!0===O[e].allowShipping)).map((e=>[e,O[e].states||[]]))),y=Object.fromEntries(Object.keys(O).map((e=>[e,O[e].locale||[]])))},171:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var r=c(0);const n=Object(r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(r.createElement)("title",null,"Grid Block Preview"),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(r.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(r.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},2:function(e,t){e.exports=window.wp.components},21:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return o})),c.d(t,"a",(function(){return l}));var r=c(42);const n=e=>!Object(r.a)(e)&&e instanceof Object&&e.constructor===Object;function o(e,t){return n(e)&&t in e}const l=e=>0===Object.keys(e).length},23:function(e,t,c){"use strict";c.d(t,"h",(function(){return s})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return b})),c.d(t,"i",(function(){return d})),c.d(t,"f",(function(){return m})),c.d(t,"c",(function(){return g})),c.d(t,"d",(function(){return p})),c.d(t,"g",(function(){return h})),c.d(t,"a",(function(){return O}));var r=c(15),n=c(14),o=c.n(n),l=c(3),a=c(17);const i=(e,t)=>{const c=new Map;return e.filter((e=>{const r=t(e);return!c.has(r)&&(c.set(r,e),!0)}))},s=({selected:e=[],search:t="",queryArgs:c={}})=>{const n=(({selected:e=[],search:t="",queryArgs:c={}})=>{const n=a.p.productCount>100,o={per_page:n?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},l=[Object(r.addQueryArgs)("/wc/store/v1/products",{...o,...c})];return n&&e.length&&l.push(Object(r.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),l})({selected:e,search:t,queryArgs:c});return Promise.all(n.map((e=>o()({path:e})))).then((e=>{const t=e.flat();return i(t,(e=>e.id)).map((e=>({...e,parent:0})))})).catch((e=>{throw e}))},u=e=>o()({path:`/wc/store/v1/products/${e}`}),b=()=>o()({path:"wc/store/v1/products/attributes"}),d=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=({selected:e=[],search:t})=>{const c=(({selected:e=[],search:t})=>{const c=Object(l.getSetting)("limitTags",!1),n=[Object(r.addQueryArgs)("wc/store/v1/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:t})];return c&&e.length&&n.push(Object(r.addQueryArgs)("wc/store/v1/products/tags",{include:e})),n})({selected:e,search:t});return Promise.all(c.map((e=>o()({path:e})))).then((e=>{const t=e.flat();return i(t,(e=>e.id))}))},g=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),p=e=>o()({path:`wc/store/v1/products/categories/${e}`}),h=e=>o()({path:Object(r.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),O=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter((t=>t.title.raw===e.title.raw)).length;return e.title.raw+(c?"":` - ${e.slug}`)}},241:function(e,t){},29:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}}},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t){e.exports=window.wp.escapeHtml},34:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(31);t.a=({error:e})=>Object(r.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?Object(r.createElement)("span",null,Object(n.__)("The following error was returned","woocommerce"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(e))):"api"===t?Object(r.createElement)("span",null,Object(n.__)("The following error was returned from the API","woocommerce"),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(o.escapeHTML)(e))):e:Object(n.__)("An error has prevented the block from being updated.","woocommerce"))(e))},35:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var r=c(0),n=c(5),o=c.n(n),l=c(2);function a(e,t,c){const r=new Set(t.map((e=>e[c])));return e.filter((e=>!r.has(e[c])))}var i=c(10),s=c(16);const u=({label:e})=>Object(r.createElement)("span",{className:"woocommerce-search-list__item-count"},e),b=e=>{const{item:t,search:c}=e,n=t.breadcrumbs&&t.breadcrumbs.length;return Object(r.createElement)("span",{className:"woocommerce-search-list__item-label"},n?Object(r.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(s.b)(t.breadcrumbs)):null,Object(r.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(s.d)(Object(i.decodeEntities)(t.name),c)))},d=({countLabel:e,className:t,depth:c=0,controlId:n="",item:d,isSelected:m,isSingle:g,onSelect:p,search:h="",selected:O,useExpandedPanelId:E,...j})=>{var f,w;const[y,_]=E,k=null!=e&&void 0!==d.count&&null!==d.count,x=!(null===(f=d.breadcrumbs)||void 0===f||!f.length),v=!(null===(w=d.children)||void 0===w||!w.length),S=y===d.id,C=o()(["woocommerce-search-list__item",`depth-${c}`,t],{"has-breadcrumbs":x,"has-children":v,"has-count":k,"is-expanded":S,"is-radio-button":g}),A=j.name||`search-list-item-${n}`,P=`${A}-${d.id}`,N=Object(r.useCallback)((()=>{_(S?-1:Number(d.id))}),[S,d.id,_]);return v?Object(r.createElement)("div",{className:C,onClick:N,onKeyDown:e=>"Enter"===e.key||" "===e.key?N():null,role:"treeitem",tabIndex:0},g?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("input",{type:"radio",id:P,name:A,value:d.value,onChange:p(d),onClick:e=>e.stopPropagation(),checked:m,className:"woocommerce-search-list__item-input",...j}),Object(r.createElement)(b,{item:d,search:h}),k?Object(r.createElement)(u,{label:e||d.count}):null):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:m,...!m&&d.children.some((e=>O.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:Object(s.d)(Object(i.decodeEntities)(d.name),h),onChange:()=>{m?p(a(O,d.children,"id"))():p(function(e,t,c){const r=a(t,e,"id");return[...e,...r]}(O,d.children))()},onClick:e=>e.stopPropagation()}),k?Object(r.createElement)(u,{label:e||d.count}):null)):Object(r.createElement)("label",{htmlFor:P,className:C},g?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("input",{...j,type:"radio",id:P,name:A,value:d.value,onChange:p(d),checked:m,className:"woocommerce-search-list__item-input"}),Object(r.createElement)(b,{item:d,search:h})):Object(r.createElement)(l.CheckboxControl,{...j,id:P,name:A,className:"woocommerce-search-list__item-input",value:Object(i.decodeEntities)(d.value),label:Object(s.d)(Object(i.decodeEntities)(d.name),h),onChange:p(d),checked:m}),k?Object(r.createElement)(u,{label:e||d.count}):null)};t.b=d},357:function(e){e.exports=JSON.parse('{"name":"woocommerce/products-by-attribute","title":"Products by Attribute","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of products with selected attributes.","supports":{"align":["wide","full"],"html":false},"attributes":{"attributes":{"type":"array","default":[]},"attrOperator":{"type":"string","enum":["all","any"],"default":"any"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},390:function(e,t){},4:function(e,t){e.exports=window.wp.blockEditor},42:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=e=>null===e},54:function(e,t){},55:function(e,t){},562:function(e,t,c){e.exports=c(596)},57:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));const r=(e,t)=>e.reduce(((e,c)=>(e[String(t?c[t]:c)]=c,e)),{})},596:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(68),o=c(646),l=c(7),a=c(3),i=(c(390),c(357)),s=c(4),u=c(2),b=c(1),d=c(76),m=c(77),g=c(153),p=c(121),h=c(99);const O=e=>{const{setAttributes:t}=e,{attributes:c,attrOperator:n,columns:o,contentVisibility:l,orderby:i,rows:O,alignButtons:E,stockStatus:j}=e.attributes;return Object(r.createElement)(s.InspectorControls,{key:"inspector"},Object(r.createElement)(u.PanelBody,{title:Object(b.__)("Layout","woocommerce"),initialOpen:!0},Object(r.createElement)(d.a,{columns:o,rows:O,alignButtons:E,setAttributes:t,minColumns:Object(a.getSetting)("minColumns",1),maxColumns:Object(a.getSetting)("maxColumns",6),minRows:Object(a.getSetting)("minRows",1),maxRows:Object(a.getSetting)("maxRows",6)})),Object(r.createElement)(u.PanelBody,{title:Object(b.__)("Content","woocommerce"),initialOpen:!0},Object(r.createElement)(m.a,{settings:l,onChange:e=>t({contentVisibility:e})})),Object(r.createElement)(u.PanelBody,{title:Object(b.__)("Filter by Product Attribute","woocommerce"),initialOpen:!1},Object(r.createElement)(g.a,{selected:c,onChange:(e=[])=>{const c=e.map((({id:e,attr_slug:t})=>({id:e,attr_slug:t})));t({attributes:c})},operator:n,onOperatorChange:(e="any")=>t({attrOperator:e}),isCompact:!0})),Object(r.createElement)(u.PanelBody,{title:Object(b.__)("Order By","woocommerce"),initialOpen:!1},Object(r.createElement)(p.a,{setAttributes:t,value:i})),Object(r.createElement)(u.PanelBody,{title:Object(b.__)("Filter by stock status","woocommerce"),initialOpen:!1},Object(r.createElement)(h.a,{setAttributes:t,value:j})))},E=e=>{const{attributes:t,setAttributes:c,setIsEditing:l,isEditing:a,debouncedSpeak:i}=e;return Object(r.createElement)(u.Placeholder,{icon:Object(r.createElement)(n.a,{icon:o.a}),label:Object(b.__)("Products by Attribute","woocommerce"),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(b.__)("Display a grid of products from your selected attributes.","woocommerce"),Object(r.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(r.createElement)(g.a,{selected:t.attributes,onChange:(e=[])=>{const t=e.map((({id:e,value:t})=>({id:e,attr_slug:t})));c({attributes:t})},operator:t.attrOperator,onOperatorChange:(e="any")=>c({attrOperator:e})}),Object(r.createElement)(u.Button,{isPrimary:!0,onClick:()=>{l(!a),i(Object(b.__)("Showing Products by Attribute block preview.","woocommerce"))}},Object(b.__)("Done","woocommerce"))))};var j=c(63),f=c.n(j),w=c(171);const y=e=>{const{attributes:t,name:c}=e;return t.isPreview?w.a:Object(r.createElement)(f.a,{block:c,attributes:t})},_=Object(u.withSpokenMessages)((e=>{const t=Object(s.useBlockProps)(),{attributes:{attributes:c}}=e,[n,o]=Object(r.useState)(!c.length);return Object(r.createElement)("div",{...t},Object(r.createElement)(s.BlockControls,null,Object(r.createElement)(u.ToolbarGroup,{controls:[{icon:"edit",title:Object(b.__)("Edit selected attribute","woocommerce"),onClick:()=>o(!n),isActive:n}]})),Object(r.createElement)(O,{...e}),n?Object(r.createElement)(E,{isEditing:n,setIsEditing:o,...e}):Object(r.createElement)(u.Disabled,null,Object(r.createElement)(y,{...e})))}));Object(l.registerBlockType)(i,{icon:{src:Object(r.createElement)(n.a,{icon:o.a,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes,columns:{type:"number",default:Object(a.getSetting)("defaultColumns",3)},rows:{type:"number",default:Object(a.getSetting)("defaultRows",3)},stockStatus:{type:"array",default:Object.keys(Object(a.getSetting)("stockStatusOptions",[]))}},edit:_,save:()=>null})},6:function(e,t){e.exports=window.wp.data},63:function(e,t){e.exports=window.wp.serverSideRender},7:function(e,t){e.exports=window.wp.blocks},75:function(e,t,c){"use strict";var r=c(0),n=c(2),o=c(35),l=c(5),a=c.n(l);t.a=({className:e,item:t,isSelected:c,isLoading:l,onSelect:i,disabled:s,...u})=>Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.a,{...u,key:t.id,className:e,isSelected:c,item:t,onSelect:i,disabled:s}),c&&l&&Object(r.createElement)("div",{key:"loading",className:a()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(r.createElement)(n.Spinner,null)))},76:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);const l=(e,t,c)=>c?Math.min(e,t)===e?t:Math.max(e,c)===e?c:e:Math.max(e,t)===t?e:t;t.a=({columns:e,rows:t,setAttributes:c,alignButtons:a,minColumns:i=1,maxColumns:s=6,minRows:u=1,maxRows:b=6})=>Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Columns","woocommerce"),value:e,onChange:e=>{const t=l(e,i,s);c({columns:Number.isNaN(t)?"":t})},min:i,max:s}),Object(r.createElement)(o.RangeControl,{label:Object(n.__)("Rows","woocommerce"),value:t,onChange:e=>{const t=l(e,u,b);c({rows:Number.isNaN(t)?"":t})},min:u,max:b}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woocommerce"),help:a?Object(n.__)("Align the last block to the bottom.","woocommerce"):Object(n.__)("The last inner block will follow other content.","woocommerce"),checked:a,onChange:()=>c({alignButtons:!a})}))},77:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(2);t.a=({onChange:e,settings:t})=>{const{image:c,button:l,price:a,rating:i,title:s}=t,u=!1!==c;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woocommerce"),checked:u,onChange:()=>e({...t,image:!u})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woocommerce"),checked:s,onChange:()=>e({...t,title:!s})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woocommerce"),checked:a,onChange:()=>e({...t,price:!a})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woocommerce"),checked:i,onChange:()=>e({...t,rating:!i})}),Object(r.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woocommerce"),checked:l,onChange:()=>e({...t,button:!l})}))}},9:function(e,t){e.exports=window.wp.primitives},99:function(e,t,c){"use strict";var r=c(0),n=c(1),o=c(3),l=c(2);const a=Object(o.getSetting)("hideOutOfStockItems",!1),i=Object(o.getSetting)("stockStatusOptions",{});t.a=({value:e,setAttributes:t})=>{const{outofstock:c,...o}=i,s=a?o:i,u=Object.entries(s).map((([e,t])=>({value:e,label:t}))).filter((e=>!!e.label)),b=Object.keys(s).filter((e=>!!e)),[d,m]=Object(r.useState)(e||b);Object(r.useEffect)((()=>{t({stockStatus:["",...d]})}),[d,t]);const g=Object(r.useCallback)((e=>{const t=d.includes(e),c=d.filter((t=>t!==e));t||(c.push(e),c.sort()),m(c)}),[d]);return Object(r.createElement)(r.Fragment,null,u.map((e=>{const t=d.includes(e.value)?/* translators: %s stock status. */Object(n.__)('Stock status "%s" visible.',"woocommerce"):/* translators: %s stock status. */Object(n.__)('Stock status "%s" hidden.',"woocommerce");return Object(r.createElement)(l.ToggleControl,{label:e.label,key:e.value,help:Object(n.sprintf)(t,e.label),checked:d.includes(e.value),onChange:()=>g(e.value)})})))}}});