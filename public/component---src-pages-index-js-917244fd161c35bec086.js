(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=z([].concat(t.fluid))),t.fixed&&(t.fixed=z([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function z(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(V,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),V=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,z=e.loading,L=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,G=(0,o.default)({opacity:x?1:0,transition:R?"opacity "+v+"ms":"none"},d),O="boolean"==typeof b?"lightgray":b,q={transitionDelay:v+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&q,d,f),C={title:t,alt:this.state.isVisible?"":a,style:W,className:g,itemProp:S};if(h){var H=h,T=p(h);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&q)}),T.base64&&l.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:C,imageVariants:H,generateSources:I}),T.tracedSVG&&l.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:C,imageVariants:H,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(V,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:G,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:z,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,o.default)({alt:a,title:t,loading:z},T,{imageVariants:H}))}}))}if(m){var N=m,M=p(m),j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&q)}),M.base64&&l.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:C,imageVariants:N,generateSources:I}),M.tracedSVG&&l.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:C,imageVariants:N,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(N),l.default.createElement(V,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:G,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:z,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,o.default)({alt:a,title:t,loading:z},M,{imageVariants:N}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var G=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),O=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});R.propTypes={resolutions:G,sizes:O,fixed:u.default.oneOfType([G,u.default.arrayOf(G)]),fluid:u.default.oneOfType([O,u.default.arrayOf(O)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var q=R;t.default=q},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=a("pcsK"),d=a("9eSz"),o=a.n(d),l=function(){var e=s.data;return i.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},u=a("vrFN");t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h1",null,"Welcome!"),i.a.createElement("p",null,"This is my Yoga Website!"),i.a.createElement("p",null,"Going to be adding my stuff soon so we can do yoga!")),i.a.createElement("div",{style:{maxWidth:"450px",marginBottom:"1.45rem"}},i.a.createElement(l,null))))}},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),d=a("xa9o"),o=a("yde8"),l=a("Wadk"),u=a("qDzq"),c=a("O1i0"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){d(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&o(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),d=a("N+BI"),o=a("k5Iv"),l=a("SGlo"),u=a("BjK0"),c=a("O1i0"),f=a("O1i0"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=d.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",b,v,l,!0,!0);f&&g&&(o((r=l.getConstructor(b,"WeakMap")).prototype,v),d.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},pcsK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEFklEQVQ4y2NgwAPunNjNEG9vA2bPbqhkqIgIYYqxMgPzszxdGUgC21qyGcrD/cHsDF8vRpi4uboZQ7GzMZgdYW5EvIGLCxPAdLYfxLDuqfM5c4IC1WDyEzNCGEgGs2vywYYt6K0XnF2Zd7ws2O9/uKVVLEgs1t6eeVZhIHEGfbh3g2F3bzVDrK01M4if7uqQsakq7f/qivT/vvqG5z+0moAtCjUyYLizaTJhA++smwCmHTS0mcAR4GbXvyw35v+u2sw/8TaW3yLtrKVB4j66eowPNkwkzpVPt8xg0BRXABuYaG81fVJC6P8ttTm/oi3N//tpaZmDxOsjfJmJMuzF4QUM969dB3vr/5MLkb2ZiW/6UsL/755Y98dXW/v/pu7yZf///+IAyd9b20vYwPNTq8GGHarPEL29qvfDyWUT/++cP+nP2U2L/s9tq/vz7fKu/4+2zgBHzqMdc5jPTqzEb+CJvmKwgWcnFEudmVn77OHxrf9fXjvx9+X1U//eP7z+58XxTf8fbZuVBVLzcMc85tvLu3AbdnvrbIYTnblgA891Z0tdmNP07NqOpf/vnd339/HFo//vnT/y69mhNf/vbZhSAlJzd9MMlgvzGhj2teSgGvTo+G6Gx/t2MPz//5/hbA/EwBO1sTJXF7S+ubZ2ys+HJ7f/e3b56P/HZ/d9ublx5vcHW2eCk8L9bbNYQfS1Ff1IXuyqYjjSWgZm76svZLy1fAI7OMC3zai+sWrC/2OrZr27f3LH/1dXjvw/unXN87PLJi25t2HSx20VEcIgdacmVzJdm9GGMPDu8plgem9tITzPPjy9x+TVgWUfl3bXzTR28PsYFBr3PyEx85+1k99/C0OzoHc7Z526u27ySnBK+P+fEUojubK3Fix4uLvW4fKMprI72xZfby/J26eoabXTzN7/v759wF8th8C/OhYe/2VVze9r61rM2zej9dvzHbMzQfr+HVjJDjfs1a41DHuKU8CJdFdR6oR3yyb8b+zq+GXoG/3L0iXov7Gl218jS/f/7j7B/xdUZ/3tz074XxcZ/N/fyfXPuvrcP1d6Sq8cai9PgRt4uKWUAVKiTGQ7VpbeOqGl9aV7cdN/C6+I/8bekT+1bXz+SGvb/q4tyPu9f1bzn7acpF+J/v6/dAxtfwf7Bv94u7T//5n+2li4gU26MmA6p6icBUS75lZl+BbU/Df1jv7hF5r4Pzun6P/8/q7/YdFJ/7WALtW28f2v5xgEtDD8v3ta0f+e0uIXd3urs7Z1VnLCDd2UHAwpGLrqwLSIW4zstPyMHUfn9p5+sHvprM/H11YlxCfn6Vt7lFm5Bk43cwlaY+kTucIrp3RaUkef+Zv2QpGjU1q4wJoPNuYxrM9PB7Pbk8JB0QVm359SZ0RqGQoAHzfZGZIc7MwAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/704cff6cb5c597ba6d44106cf8c6a393/b5e6b/bel-pose.png","srcSet":"/static/704cff6cb5c597ba6d44106cf8c6a393/40943/bel-pose.png 113w,\\n/static/704cff6cb5c597ba6d44106cf8c6a393/668a7/bel-pose.png 225w,\\n/static/704cff6cb5c597ba6d44106cf8c6a393/b5e6b/bel-pose.png 450w,\\n/static/704cff6cb5c597ba6d44106cf8c6a393/c07e8/bel-pose.png 455w","sizes":"(max-width: 450px) 100vw, 450px"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,d=function(e,t,a,r){var i=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-index-js-917244fd161c35bec086.js.map