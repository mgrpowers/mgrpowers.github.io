(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{171:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i);a(10),a(176),a(177),a(173);e.default=function(){var t={backgroundImage:"url("+a(180)+")"};return s.a.createElement("div",{style:t,className:"rm_hero"},s.a.createElement("div",{className:"rm_hero_cta"},s.a.createElement("h1",{className:"rm_hero_title"},"Technology!")))}},173:function(t,e,a){"use strict";var i=a(174),s=a(0),r=a.n(s),n=a(1),o=a.n(n),d=a(179),l=a.n(d);function c(t){var e=t.description,a=t.lang,s=t.meta,n=t.keywords,o=t.title,d=i.data.site,c=e||d.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(s)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=c},174:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},175:function(t,e,a){"use strict";var i=a(9);e.__esModule=!0,e.default=void 0;var s,r=i(a(5)),n=i(a(11)),o=i(a(83)),d=i(a(84)),l=i(a(0)),c=i(a(1)),f=function(t){var e=(0,d.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},u={},p=function(t){var e=f(t),a=e.fluid?e.fluid.src:e.fixed.src;return u[a]||!1},h=[];var g=function(t,e){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(s.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),s).observe(t),h.push([t,e])},b=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',a=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+a+"/>":"",s=t.srcSet?'srcset="'+t.srcSet+'" ':"",r=t.title?'title="'+t.title+'" ':"",n=t.alt?'alt="'+t.alt+'" ':'alt="" ',o=t.width?'width="'+t.width+'" ':"",d=t.height?'height="'+t.height+'" ':"",l=t.opacity?t.opacity:"1";return"<picture>"+i+"<img "+o+d+a+s+e+n+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(t,e){var a=t.sizes,i=t.srcSet,s=t.src,r=t.style,n=t.onLoad,c=t.onError,f=(0,o.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:i,src:s},f,{onLoad:n,onError:c,ref:e,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(t){function e(e){var a;a=t.call(this,e)||this;var i=!0,s=!1,r=e.fadeIn,o=p(e);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!0),"undefined"==typeof window&&(i=!1),e.critical&&(i=!0,s=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:s,fadeIn:r,hasNoScript:d,seenBefore:o},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,r.default)(e,t);var a=e.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},a.handleRef=function(t){var e=this;this.state.IOSupported&&t&&g(t,function(){var t=p(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0,imgLoaded:t})})},a.handleImageLoaded=function(){var t,e,a;t=this.props,e=f(t),a=e.fluid?e.fluid.src:e.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var t=f(this.props),e=t.title,a=t.alt,i=t.className,s=t.style,r=void 0===s?{}:s,n=t.imgStyle,o=void 0===n?{}:n,c=t.placeholderStyle,u=void 0===c?{}:c,p=t.placeholderClassName,h=t.fluid,g=t.fixed,y=t.backgroundColor,w=t.Tag,S=t.itemProp,v="boolean"==typeof y?"lightgray":y,E=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,u),R=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),A={title:e,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var I=h;return l.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},l.default.createElement(w,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),v&&l.default.createElement(w,{title:e,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),I.base64&&l.default.createElement(m,(0,d.default)({src:I.base64},A)),I.tracedSVG&&l.default.createElement(m,(0,d.default)({src:I.tracedSVG},A)),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement(m,{alt:a,title:e,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:a,title:e},I))}}))}if(g){var L=g,z=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete z.display,l.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},v&&l.default.createElement(w,{title:e,style:{backgroundColor:v,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),L.base64&&l.default.createElement(m,(0,d.default)({src:L.base64},A)),L.tracedSVG&&l.default.createElement(m,(0,d.default)({src:L.tracedSVG},A)),this.state.isVisible&&l.default.createElement("picture",null,L.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),l.default.createElement(m,{alt:a,title:e,width:L.width,height:L.height,sizes:L.sizes,src:L.src,srcSet:L.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,d.default)({alt:a,title:e,width:L.width,height:L.height},L))}}))}return null},e}(l.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=y;e.default=v},176:function(t,e,a){"use strict";var i=a(0),s=a.n(i);e.a=function(t){return s.a.createElement("button",{className:"button button-cta"},t.children)}},177:function(t,e,a){"use strict";a(178),a(0),a(10),a(175)},178:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},180:function(t,e,a){t.exports=a.p+"static/herobg-d09cf821f407a9141b14c2402de264fa.png"}}]);
//# sourceMappingURL=component---src-pages-technology-js-136df7959f7f0930956a.js.map