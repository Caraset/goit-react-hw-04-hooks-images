(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),o=a.n(r),s=(a(16),a(9)),i=a(3),u=a(10),l=a.n(u),j=a(1);var b=function(){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(l.a,{type:"Grid",color:"#3f51b5",height:80,width:80})})},m=(a(38),a(39),a(8)),d=a.n(m),h=a(11),f="23292870-e9e1fc8f4fc8bd7151266ea82",O="https://pixabay.com/api/";function p(){return(p=Object(h.a)(d.a.mark((function e(t,a){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"?q=").concat(t,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e,t){return p.apply(this,arguments)};var v=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1];return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault();var a=r.trim();a?(t(a),o("")):alert("Please enter a search term to begin your search.")},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",onChange:function(e){o(e.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r})]})})};var x=function(e){var t=e.image,a=e.alt,c=e.onModalClick;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:c,children:Object(j.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image"})})};var y=function(e){var t=e.images,a=e.openModal;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.tags,c=e.webformatURL,n=e.id,r=e.largeImageURL;return Object(j.jsx)(x,{image:c,alt:t,onModalClick:function(){return a(r)}},n)}))})};var S=function(e){var t=e.onMoreClick;return Object(j.jsx)("button",{className:"Button",onClick:t,children:"Load more"})},w=document.querySelector("#modal-root");var k=function(e){var t=e.tags,a=e.modalImg,n=e.closeModal;return Object(c.useEffect)((function(){function e(e){"Escape"===e.code&&n()}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]),Object(r.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:a,alt:t})})}),w)};var N=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1],m=Object(c.useState)(0),d=Object(i.a)(m,2),h=d[0],f=d[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),x=p[0],w=p[1],N=Object(c.useState)(!1),M=Object(i.a)(N,2),C=M[0],I=M[1],E=Object(c.useState)(!1),F=Object(i.a)(E,2),L=F[0],G=F[1];return Object(c.useEffect)((function(){u&&(I(!0),g(u,h).then((function(e){n((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.hits))})),1!==h&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){console.log(e)})).finally((function(){return I(!1)})))}),[h,u]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{onSubmit:function(e){e!==u?(l(e),f(1),n([])):alert("already loaded")}}),Object(j.jsx)(y,{images:a,openModal:function(e){G(!0),w(e)}}),C&&Object(j.jsx)(b,{}),0!==a.length&&!0!==C&&Object(j.jsx)(S,{onMoreClick:function(){f((function(e){return e+1}))}}),L&&Object(j.jsx)(k,{closeModal:function(){G(!1)},modalImg:x})]})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.09f64f04.chunk.js.map