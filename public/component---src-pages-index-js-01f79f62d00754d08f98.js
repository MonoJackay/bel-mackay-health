(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,o=a(r("PJYZ")),n=a(r("VbXa")),l=a(r("8OQS")),s=a(r("pVnL")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,r=e.fixed;return m(t||r).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},p=Object.create({}),b=function(e){var t=u(e),r=g(t);return p[r]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function O(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,o=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:o}),c.default.createElement("source",{media:i,srcSet:r,sizes:o}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var P=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+n+l+r+a+t+o+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=c.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,o=e.spreadProps,n=e.ariaHidden,l=c.default.createElement(C,(0,s.default)({ref:t,src:r},o,{ariaHidden:n}));return a.length>1?c.default.createElement("picture",null,i(a),l):l})),C=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,o=e.style,n=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":g,sizes:r,srcSet:a,src:i},m,{onLoad:n,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&b(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!h&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(h||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,n.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=P(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=g(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,o=void 0===i?{}:i,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,b=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,x=e.loading,k=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,s.default)({opacity:P?1:0,transition:A?"opacity "+y+"ms":"none"},l),F="boolean"==typeof h?"lightgray":h,L={transitionDelay:y+"ms"},W=(0,s.default)({opacity:this.state.imgLoaded?0:1},A&&L,l,f),D={title:t,alt:this.state.isVisible?"":r,style:W,className:g,itemProp:w};if(p){var R=p,B=m(p);return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:B.maxWidth?B.maxWidth+"px":null,maxHeight:B.maxHeight?B.maxHeight+"px":null},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),F&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:F,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&L)}),B.base64&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:D,imageVariants:R,generateSources:S}),B.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:D,imageVariants:R,generateSources:j}),this.state.isVisible&&c.default.createElement("picture",null,O(R),c.default.createElement(C,{alt:r,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:r,title:t,loading:x},B,{imageVariants:R}))}}))}if(b){var H=b,G=m(b),T=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},o);return"inherit"===o.display&&delete T.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},F&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:F,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},A&&L)}),G.base64&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:D,imageVariants:H,generateSources:S}),G.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:D,imageVariants:H,generateSources:j}),this.state.isVisible&&c.default.createElement("picture",null,O(H),c.default.createElement(C,{alt:r,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:r,title:t,loading:x},G,{imageVariants:H}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),F=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});A.propTypes={resolutions:I,sizes:F,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([F,d.default.arrayOf(F)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=A;t.default=L},"PZd/":function(e,t,r){var a=r("P8UN"),i=r("ys0W")(!0);a(a.S,"Object",{entries:function(e){return i(e)}})},RXBc:function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"default",(function(){return A})),r.d(a,"znCn",(function(){return F}));var i={};r.r(i),r.d(i,"default",(function(){return J})),r.d(i,"EndUser",(function(){return J})),r.d(i,"Corporate",(function(){return X})),r.d(i,"Gyms",(function(){return _})),r.d(i,"Wellness",(function(){return te}));var o=r("q1tI"),n=r.n(o),l=(r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("sc67"),r("4DPX"),r("E5k/"),r("vOnD")),s=[0,1,2];s.zero=s[0],s.small=s[1],s.medium=s[2];var c=s,d={xxs:{width:0,margin:20,gutter:16},xs:{width:360,margin:20,gutter:16},sm:{width:480,margin:20,gutter:16},md:{width:768,margin:20,gutter:16},lg:{width:1024,margin:71,gutter:24},xl:{width:1200,margin:71,gutter:24},xxl:{width:1366,margin:71,gutter:24},xxxl:{width:1600,margin:71,gutter:24}},u={madrid:["#FDE5E2","#FAB9B2","#F78D82","#F46152"],milan:["#FFF6E6","#FFE5B3","#FFD380","#FFC24C"],saoPaulo:["#B5DAD5","#55A99E","#2B9486","#22766B"],newYork:["#D7DAF3","#5F6BD2","#3847C7","#27318B"],paris:["#BFA8F0","#A07CE9","#8051E1","#652CDB"],buenosAires:["#A3C2E9","#4686D3","#1968C9","#1453A0"],positive:["#DEF8E9","#1E854A"],negative:["#FCEAE9","#CB3530"],informative:["#E9F3FC","#2186D9"],warning:["#FBFBBE","#CB9303"],gray:["#FFFFFF","#F5F5FA","#E6E6F0","#DBDBE8","#D3D3E2","#C5C5D6","#A9A9B8","#9898A6","#6B6B78","#41414A"],white:"#FFFFFF",dark:"#41414A"},f=[{family:"Open Sans",weight:[400,600,700,"400i","600i","700i"]}];f.openSans=f[0];var g=f,m=[10,12,14,16,20,24,32];m.xxsmall=m[0],m.xsmall=m[1],m.small=m[2],m.medium=m[3],m.large=m[4],m.xlarge=m[5],m.xxlarge=m[6];var p=m,b=[400,600,700];b.regular=b[0],b.semibold=b[1],b.bold=b[2];var h=b,y=[12,16,20,24,32,40];y.xxsmall=y[0],y.xsmall=y[1],y.small=y[2],y.medium=y[3],y.large=y[4],y.xlarge=y[5];var v=y,w=[0,4,8,9999];w.sharp=w[0],w.semiRounded=w[1],w.rounded=w[2],w.circle=w[3];var O=w,x=(r("C8Qj"),r("MIFh"),r("m210"),r("YbXK"),r("cFtU"),r("pJf4"),r("q8oJ"),r("C9fy"),r("uMMV"));function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var S,k,P=Object(x.a)(u.gray[7]),E=(k=4,function(e){if(Array.isArray(e))return e}(S=P)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,i=!1,o=void 0;try{for(var n,l=e[Symbol.iterator]();!(a=(n=l.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(s){i=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(i)throw o}}return r}}(S,k)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(S,k)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());P.zero=E[0],P.small=E[1],P.medium=E[2],P.large=E[3];var z=P,C=[0,4,8,12,16,20,24,40,56,72];C.zero=C[0],C.xxsmall=C[1],C.xsmall=C[2],C.small=C[3],C.medium=C[4],C.large=C[5],C.xlarge=C[6],C.xxlarge=C[7],C.xxxlarge=C[8],C.huge=C[9];var A={borders:c,breakpoints:d,colors:u,fonts:g,fontSizes:p,fontWeights:h,lineHeights:v,radii:O,elevations:z,spacing:C,transition:{duration:[200,500],timing:[[0,.75,.1,1]]}},I={positive:["#FCEAE9","#CB3530"],negative:["#DEF8E9","#1E854A"]},F=Object(x.c)(A,{colors:I}),L=(r("R48M"),r("+ar0"),r("xtjI"),r("JHok"),r("OeI1"),r("HQhv"),r("PZd/"),r("DrhF"),r("aHCT"),function(e){var t=e.colors,r=e.fontSizes,a=e.fontWeights,i=e.borders,o=e.radii,n=e.spacing;return{width:320,height:52,font:{color:{default:t.gray.medium,focus:t.gray.darker},size:r.small,weight:a.regular},border:{width:i.small,radius:o.rounded,color:{default:t.gray[4],typed:t.gray.darker}},padding:{top:n.medium,right:n.medium,bottom:n.medium,left:n.medium},label:{color:{default:t.gray.medium,focus:t.gray.darker},padding:{right:n.xxsmall,left:n.xxsmall},font:{size:{default:r.small,typed:r.xsmall},weight:{default:a.regular,typed:a.bold}}},helper:{color:t.gray.medium,margin:{top:n.xxsmall},font:{size:r.xsmall}}}});function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,i=!1,o=void 0;try{for(var n,l=e[Symbol.iterator]();!(a=(n=l.next()).done)&&(r.push(n.value),!t||r.length!==t);a=!0);}catch(s){i=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var M={AutoComplete$AutoComplete:function(e){return D(D({},L(e)),{},{field:{backgroundColor:e.colors.white},list:{padding:{top:e.spacing.medium,right:e.spacing.medium,bottom:e.spacing.medium,left:e.spacing.medium},font:{size:e.fontSizes.small,weight:{default:e.fontWeights.regular,matched:e.fontWeights.bold},lineHeight:e.lineHeights.small},backgroundColor:{default:e.colors.white,hover:e.colors.gray.background}}})},Button$Button:function(e){var t=e.spacing,r=e.fontSizes,a=e.borders,i=e.radii,o=e.colors,n=e.fontWeights;return{padding:{right:t.xlarge,left:t.xlarge},height:{default:48,small:32},font:{size:r.small,weight:n.bold},border:{small:{width:a.small},default:{width:a.medium},radius:i.circle},types:{contained:{backgroundColor:{disabled:o.gray[3],default:o.primary[3],pressed:o.primary[2]},font:{default:{color:o.white},disabled:{color:o.gray[7]},pressed:{color:o.white}}},outline:{backgroundColor:{disabled:"transparent",default:"transparent",pressed:"transparent",hover:Object(x.b)(o.primary[3],.3)},font:{default:{color:o.primary[3]},disabled:{color:o.gray[7]},pressed:{color:o.primary[2]}}},text:{backgroundColor:{disabled:"transparent",default:"transparent",pressed:"transparent",hover:Object(x.b)(o.primary[3],.3)},font:{default:{color:o.primary[3]},disabled:{color:o.gray[7]},pressed:{color:o.primary[2]}}},link:{font:{disabled:{color:o.gray[7]}},margin:{top:t.medium,bottom:t.xsmall}}}}},Card$Card:function(e){var t=e.colors,r=e.spacing,a=e.radii,i=e.elevations,o=e.borders,n=e.fontWeights;return{backgroundColor:t.white,padding:{top:r.medium,right:r.medium,bottom:r.medium,left:r.medium},radii:a.rounded,elevation:i.small,ribbon:{radius:a.circle},plan:{title:{margin:{top:r.xsmall,bottom:r.small}},price:{margin:{top:r.small}},period:{margin:{bottom:r.xsmall}}},gym:{checkIn:{header:{margin:{bottom:r.medium}},avatar:{border:{radius:a.rounded,width:o.small}},content:{margin:{top:r.medium}},title:{font:{weight:n.regular},margin:{bottom:r.xsmall}}}},event:{icon:{fill:t.dark},info:{padding:{top:r.medium,right:r.medium,left:r.medium,bottom:r.medium},name:{height:r.large,fontWeight:n.semibold,marginBottom:r.xsmall},place:{height:r.large,color:t.gray[8],marginBottom:r.xsmall}},date:{radius:a.rounded,dayOfWeek:{fontWeight:n.regular,marginBottom:r.xsmall},month:{fontWeight:n.semibold}}}}},Checkbox$Checkbox:function(e){var t=e.spacing,r=e.colors,a=e.borders,i=e.radii,o=e.fontSizes;return{size:24,margin:{right:t.xsmall},border:{width:a.medium,radius:i.semiRounded},label:{padding:{left:t.xsmall},font:{size:o.small,color:r.dark}},helper:{margin:{top:t.xxsmall},font:{size:o.small,color:r.gray[7]}},hover:{border:{radius:i.circle}},checked:{icon:{color:r.white}},disabled:{backgroundColor:r.gray[7],border:{color:r.gray[7]}}}},Checkbox$CheckboxSwitch:function(e){var t=e.colors,r=e.radii,a=e.transition,i=e.spacing,o=e.elevations;return{track:{width:48,height:24,backgroundColor:t.gray[3],radii:r.circle,transition:{duration:a.duration[1]},checked:{backgroundColor:t.primary[3]},disabled:{backgroundColor:t.gray[1]}},thumb:{width:i.medium,height:i.medium,left:i.xxsmall,radii:r.circle,backgroundColor:t.white,shadow:o.small,transition:{duration:a.duration[1]},checked:{backgroundColor:t.primary[3]},disabled:{backgroundColor:t.gray[3]}},focus:{checked:{backgroundColor:Object(x.b)(t.primary[3],.2)},disabled:{backgroundColor:Object(x.b)(t.gray[7],.2)}}}},Dropdown$Dropdown:function(e){var t=e.colors,r=e.fontSizes,a=e.fontWeights,i=e.lineHeights,o=e.radii,n=e.spacing,l=e.borders;return{width:320,selector:{background:t.white,padding:{top:n.medium,right:n.medium,bottom:n.medium,left:n.medium},border:{width:l.small,radius:o.rounded,color:t.gray[4]}},arrow:{fill:t.gray[7]},input:{font:{color:t.gray[7],size:r.small,lineHeight:i.small}},button:{padding:{right:n.medium}},optionsList:{backgroundColor:t.white,border:{radius:{topLeft:o.sharp,topRight:o.sharp,bottomRight:o.rounded,bottomLeft:o.rounded},width:l.small,color:t.dark}},option:{height:n.xxlarge,backgroundColor:t.white,padding:{top:n.zero,right:n.medium,bottom:n.zero,left:n.medium},border:{width:l.small,color:t.gray[1],radius:{topLeft:o.sharp,topRight:o.sharp,bottomRight:o.rounded,bottomLeft:o.rounded}},font:{color:t.gray.dark,size:r.small,lineHeight:i.small,weight:a.regular}},backdrop:{content:{height:320,backgroundColor:t.white,border:{radius:{topLeft:o.rounded,topRight:o.rounded}},title:{padding:{top:n.large,right:n.zero,bottom:n.large,left:n.zero}},option:{padding:{top:n.large,right:n.large,bottom:n.large,left:n.large}},actions:{padding:{top:n.zero,right:n.large,bottom:n.large,left:n.large}}}},hover:{selector:{border:{color:t.dark}},option:{backgroundColor:t.gray[1]}},disabled:{selector:{border:{color:t.gray[3]}},input:{font:{color:t.gray[3]}},arrow:{fill:t.gray[3]}},selected:{selector:{border:{color:t.dark}},arrow:{fill:t.primary[3]},input:{font:{color:t.dark}},optionsList:{border:{color:t.dark}},option:{font:{color:t.dark,weight:a.bold}}}}},Grid$Grid:function(){return{gutter:{desktop:24,mobile:16},container:{width:1600,margin:{desktop:{left:71,right:71},mobile:{left:20,right:20}}}}},Input$Input:L,List$List:function(e){var t=e.spacing,r=e.borders,a=e.colors;return{listItem:{padding:{top:t.large,right:t.xlarge,bottom:t.large,left:t.xlarge}},border:{width:r.small,color:a.gray[3]}}},Progress$Progress:function(e){var t=e.spacing,r=e.colors,a=e.radii,i=e.fontSizes;return{height:t.xsmall,backgroundColor:{bar:r.gray[1]},border:{radius:a.rounded},label:{font:{size:i.xsmall}}}},RadioGroup$RadioGroup:function(e){var t=e.radii,r=e.colors,a=e.fontWeights,i=e.spacing,o=e.borders,n=e.fontSizes;return{button:{border:{radius:t.circle,width:o.small,color:r.gray[3]},backgroundColor:"transparent",padding:{right:i.xlarge,left:i.xlarge},height:{normal:40,small:32}},radio:{size:20,backgroundColor:r.gray[6],border:{radius:t.circle}},font:{size:n.small},hover:{backgroundColor:r.gray[2]},disabled:{backgroundColor:r.gray[5]},checked:{backgroundColor:r.primary[3],font:{color:r.white,weight:a.bold},hover:{backgroundColor:r.primary[0]}}}},Rating$Rating:function(e){var t=e.spacing;return{backgroundColor:e.colors.rating,icon:{size:12},gutter:t.xxsmall}},Slider$Slider:function(e){var t=e.colors,r=e.radii,a=e.elevations,i=e.spacing,o=e.fontWeights;return{track:{backgroundColor:{active:t.primary[3],inactive:t.gray[3]},border:{radius:r.circle}},step:{backgroundColor:{active:t.primary[3],inactive:t.gray[3]},border:{radius:r.circle}},marker:{backgroundColor:t.primary[3],border:{color:t.white,radius:r.circle},shadow:a.small},tooltip:{shadow:a.small,radius:r.rounded,backgroundColor:t.gray[1],distance:i.large,padding:{top:i.xxsmall,right:i.xsmall,bottom:i.xxsmall,left:i.xsmall},font:{color:t.gray[8],title:{weight:o.regular},description:{weight:o.regular}},ribbon:{backgroundColor:t.secondary[3],radius:r.rounded,padding:{top:i.xxsmall,right:i.xsmall,bottom:i.xxsmall,left:i.xsmall},font:{color:t.white,weight:o.bold}}}}},Stepper$Stepper:function(e){var t=e.colors,r=e.spacing,a=e.fontWeights,i=e.radii;return{padding:{left:r.xxlarge,right:r.xxlarge},line:{backgroundColor:{active:t.primary[3],inactive:t.gray[3]}},dot:{radius:i.circle,backgroundColor:{active:t.primary[3],inactive:t.gray[3]}},label:{font:{weight:a.bold},color:{active:t.primary[3],inactive:t.gray[7]}}}},Tag$Tag:function(e){var t=e.spacing,r=e.fontSizes,a=e.fontWeights,i=e.radii;return{icon:{margin:{right:t.xxsmall}},font:{size:r.xsmall,weight:a.bold},padding:{top:t.xsmall,right:t.xsmall,bottom:t.xsmall,left:t.xsmall},border:{radius:i.rounded}}},Text$Text:function(e){var t=e.fontSizes,r=e.lineHeights,a=e.fontWeights;return{h1:{fontsize:t.xxlarge,lineHeight:r.xlarge,fontWeight:a.bold},h2:{fontsize:t.xlarge,lineHeight:r.large,fontWeight:a.bold},h3:{fontsize:t.large,lineHeight:r.medium,fontWeight:a.bold},h4:{fontsize:t.medium,lineHeight:r.small,fontWeight:a.bold},p:{fontsize:t.medium,lineHeight:r.small,fontWeight:a.regular},small:{fontsize:t.small,lineHeight:r.small,fontWeight:a.regular},tiny:{fontsize:t.xsmall,lineHeight:r.xsmall,fontWeight:a.regular}}},TextArea$TextArea:L};Object.freeze(M);var q=function(e){var t=e.primary,r=e.secondary,a=e.tertiary,i=A.fonts.openSans,o=A.fontSizes.medium,n={primary:t,secondary:r,tertiary:a,gray:A.colors.gray,white:A.colors.white,dark:A.colors.dark,positive:A.colors.positive,negative:A.colors.negative,informative:A.colors.informative,warning:A.colors.warning,disabled:{background:A.colors.gray[4],content:A.colors.gray[7]},rating:A.colors.milan[3]};n.gray.surface=A.colors.gray[0],n.gray.background=A.colors.gray[1],n.gray.medium=A.colors.gray[7],n.gray.dark=A.colors.gray[8],n.gray.darker=A.colors.gray[9];var l={};return Object.entries(M).forEach((function(e){var t=T(e,2),r=t[0],a=t[1],s=T(r.split("$"),2)[1];l[s.toLowerCase()]=a(H(H({},A),{},{colors:n,baseFont:i,baseFontSize:o}))})),H(H({},A),{},{components:l,colors:n,baseFont:i,baseFontSize:o})};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X=function(e){var t={primary:e.colors.buenosAires,secondary:e.colors.saoPaulo};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({colors:t},q(t))};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=function(e){var t={primary:e.colors.madrid,secondary:e.colors.paris,tertiary:e.colors.saoPaulo};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({colors:t},q(t))};function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e){var t={primary:e.colors.newYork,secondary:e.colors.saoPaulo};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({colors:t},q(t))};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=function(e){var t={primary:e.colors.paris,secondary:e.colors.madrid,tertiary:e.colors.saoPaulo};return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){ee(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({colors:t},q(t))};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ie=function(e){var t=e.theme,r=e.locale;return(i[t]||J)(a[r]||A)},oe=function(e){var t=e.theme,r=e.locale,a=ae(e,["theme","locale"]);return n.a.createElement(l.a,re({theme:{yoga:ie({theme:t,locale:r})}},a))};oe.defaultProps={theme:"endUser",locale:"pt-BR"};var ne=oe;function le(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n"]);return le=function(){return e},e}var se=Object(l.b)(le(),(function(e){var t=e.theme.yoga.baseFont.family;return'\n    body {\n      font-family: "'.concat(t,'";\n    }\n  ')}));function ce(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var de=function(e){var t=e.children,r=ce(e,["children"]);return n.a.createElement(ne,r,n.a.createElement(se,null),t)},ue=r("RVSr"),fe=r("Bl7J"),ge=r("pcsK"),me=r("9eSz"),pe=r.n(me),be=function(){var e=ge.data;return n.a.createElement(pe.a,{fluid:e.placeholderImage.childImageSharp.fluid})},he=r("vrFN");t.default=function(){return n.a.createElement(de,{theme:"Wellness"},n.a.createElement(fe.a,null,n.a.createElement(he.a,{title:"Home"}),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h1",null,"Welcome!"),n.a.createElement("p",null,"This is my Yoga Website!"),n.a.createElement("p",null,"Going to be adding my stuff soon so we can do yoga!"),n.a.createElement("div",{style:{paddingRight:"1rem"}},n.a.createElement(ue.a,null,"Make a Booking"),n.a.createElement(ue.a.Outline,null,"Contact Info"))),n.a.createElement("div",{style:{maxWidth:"450px",marginBottom:"1.45rem"}},n.a.createElement(be,null)))))}},SGlo:function(e,t,r){"use strict";var a=r("rj/q"),i=r("N+BI").getWeak,o=r("1a8y"),n=r("BjK0"),l=r("xa9o"),s=r("yde8"),c=r("Wadk"),d=r("qDzq"),u=r("O1i0"),f=c(5),g=c(6),m=0,p=function(e){return e._l||(e._l=new b)},b=function(){this.a=[]},h=function(e,t){return f(e.a,(function(e){return e[0]===t}))};b.prototype={get:function(e){var t=h(this,e);if(t)return t[1]},has:function(e){return!!h(this,e)},set:function(e,t){var r=h(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,o){var c=e((function(e,a){l(e,c,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=a&&s(a,r,e[o],e)}));return a(c.prototype,{delete:function(e){if(!n(e))return!1;var r=i(e);return!0===r?p(u(this,t)).delete(e):r&&d(r,this._i)&&delete r[this._i]},has:function(e){if(!n(e))return!1;var r=i(e);return!0===r?p(u(this,t)).has(e):r&&d(r,this._i)}}),c},def:function(e,t,r){var a=i(o(t),!0);return!0===a?p(e).set(t,r):a[e._i]=r,e},ufstore:p}},aHCT:function(e,t,r){"use strict";r("t+fG")("bold",(function(e){return function(){return e(this,"b","","")}}))},eMsz:function(e,t,r){"use strict";var a,i=r("emib"),o=r("Wadk")(0),n=r("IYdN"),l=r("N+BI"),s=r("k5Iv"),c=r("SGlo"),d=r("BjK0"),u=r("O1i0"),f=r("O1i0"),g=!i.ActiveXObject&&"ActiveXObject"in i,m=l.getWeak,p=Object.isExtensible,b=c.ufstore,h=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(d(e)){var t=m(e);return!0===t?b(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},v=e.exports=r("94Pd")("WeakMap",h,y,c,!0,!0);f&&g&&(s((a=c.getConstructor(h,"WeakMap")).prototype,y),l.NEED=!0,o(["delete","has","get","set"],(function(e){var t=v.prototype,r=t[e];n(t,e,(function(t,i){if(d(t)&&!p(t)){this._f||(this._f=new a);var o=this._f[e](t,i);return"set"==e?this:o}return r.call(this,t,i)}))})))},pcsK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEFklEQVQ4y2NgwAPunNjNEG9vA2bPbqhkqIgIYYqxMgPzszxdGUgC21qyGcrD/cHsDF8vRpi4uboZQ7GzMZgdYW5EvIGLCxPAdLYfxLDuqfM5c4IC1WDyEzNCGEgGs2vywYYt6K0XnF2Zd7ws2O9/uKVVLEgs1t6eeVZhIHEGfbh3g2F3bzVDrK01M4if7uqQsakq7f/qivT/vvqG5z+0moAtCjUyYLizaTJhA++smwCmHTS0mcAR4GbXvyw35v+u2sw/8TaW3yLtrKVB4j66eowPNkwkzpVPt8xg0BRXABuYaG81fVJC6P8ttTm/oi3N//tpaZmDxOsjfJmJMuzF4QUM969dB3vr/5MLkb2ZiW/6UsL/755Y98dXW/v/pu7yZf///+IAyd9b20vYwPNTq8GGHarPEL29qvfDyWUT/++cP+nP2U2L/s9tq/vz7fKu/4+2zgBHzqMdc5jPTqzEb+CJvmKwgWcnFEudmVn77OHxrf9fXjvx9+X1U//eP7z+58XxTf8fbZuVBVLzcMc85tvLu3AbdnvrbIYTnblgA891Z0tdmNP07NqOpf/vnd339/HFo//vnT/y69mhNf/vbZhSAlJzd9MMlgvzGhj2teSgGvTo+G6Gx/t2MPz//5/hbA/EwBO1sTJXF7S+ubZ2ys+HJ7f/e3b56P/HZ/d9ublx5vcHW2eCk8L9bbNYQfS1Ff1IXuyqYjjSWgZm76svZLy1fAI7OMC3zai+sWrC/2OrZr27f3LH/1dXjvw/unXN87PLJi25t2HSx20VEcIgdacmVzJdm9GGMPDu8plgem9tITzPPjy9x+TVgWUfl3bXzTR28PsYFBr3PyEx85+1k99/C0OzoHc7Z526u27ySnBK+P+fEUojubK3Fix4uLvW4fKMprI72xZfby/J26eoabXTzN7/v759wF8th8C/OhYe/2VVze9r61rM2zej9dvzHbMzQfr+HVjJDjfs1a41DHuKU8CJdFdR6oR3yyb8b+zq+GXoG/3L0iXov7Gl218jS/f/7j7B/xdUZ/3tz074XxcZ/N/fyfXPuvrcP1d6Sq8cai9PgRt4uKWUAVKiTGQ7VpbeOqGl9aV7cdN/C6+I/8bekT+1bXz+SGvb/q4tyPu9f1bzn7acpF+J/v6/dAxtfwf7Bv94u7T//5n+2li4gU26MmA6p6icBUS75lZl+BbU/Df1jv7hF5r4Pzun6P/8/q7/YdFJ/7WALtW28f2v5xgEtDD8v3ta0f+e0uIXd3urs7Z1VnLCDd2UHAwpGLrqwLSIW4zstPyMHUfn9p5+sHvprM/H11YlxCfn6Vt7lFm5Bk43cwlaY+kTucIrp3RaUkef+Zv2QpGjU1q4wJoPNuYxrM9PB7Pbk8JB0QVm359SZ0RqGQoAHzfZGZIc7MwAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/704cff6cb5c597ba6d44106cf8c6a393/b5e6b/bel-pose.png","srcSet":"/static/704cff6cb5c597ba6d44106cf8c6a393/40943/bel-pose.png 113w,\\n/static/704cff6cb5c597ba6d44106cf8c6a393/668a7/bel-pose.png 225w,\\n/static/704cff6cb5c597ba6d44106cf8c6a393/b5e6b/bel-pose.png 450w,\\n/static/704cff6cb5c597ba6d44106cf8c6a393/c07e8/bel-pose.png 455w","sizes":"(max-width: 450px) 100vw, 450px"}}}}}')},ys0W:function(e,t,r){var a=r("QPJK"),i=r("2mBY"),o=r("5SQf"),n=r("BnbX").f;e.exports=function(e){return function(t){for(var r,l=o(t),s=i(l),c=s.length,d=0,u=[];c>d;)r=s[d++],a&&!n.call(l,r)||u.push(e?[r,l[r]]:l[r]);return u}}},zTTH:function(e,t,r){"use strict";var a=r("P8UN"),i=r("Wadk")(6),o="findIndex",n=!0;o in[]&&Array(1)[o]((function(){n=!1})),a(a.P+a.F*n,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(o)}}]);
//# sourceMappingURL=component---src-pages-index-js-01f79f62d00754d08f98.js.map