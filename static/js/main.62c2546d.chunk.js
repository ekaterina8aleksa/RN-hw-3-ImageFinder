(this.webpackJsonpimagefinder=this.webpackJsonpimagefinder||[]).push([[0],{10:function(e,a,t){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1R1Ka",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__1kBpN"}},11:function(e,a,t){e.exports={overlay:"Modal_overlay__22Lk-",modal:"Modal_modal__3pqGL"}},23:function(e,a,t){e.exports={container:"Container_container__2proz"}},24:function(e,a,t){e.exports={imageGalleryList:"ImageGalleryList_imageGalleryList__364BU"}},25:function(e,a,t){e.exports={button:"Button_button__3lJXn"}},28:function(e,a,t){e.exports=t(75)},33:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),c=t.n(o),l=(t(33),t(12)),i=t(4),s=t(5),u=t(7),m=t(6),h=t(8),g=t.n(h),p=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={query:""},e.handleChange=function(a){e.setState({query:a.currentTarget.value})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.query;e.props.onSubmit(t),e.setState({query:""})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:g.a.searchBar},r.a.createElement("form",{className:g.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:g.a.searchFormButton},r.a.createElement("span",{className:g.a.searchFormButtonLabel},"Search")),r.a.createElement("input",{className:g.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),t}(n.Component),d=t(23),y=t.n(d),f=function(e){var a=e.children;return r.a.createElement("div",{className:y.a.container},a)},v=t(10),_=t.n(v),b=function(e){var a=e.id,t=e.tags,n=e.previewImg,o=e.largeImageURL,c=e.onImgClick;return r.a.createElement("li",{key:a,className:_.a.imageGalleryItem},r.a.createElement("img",{src:n,alt:t,onClick:function(){return c(o)},className:_.a.imageGalleryItemImage}))};b.defaultProps={previewImg:"https://pypik.ru/uploads/posts/2018-09/1536907413_foto-net-no-ya-krasivaya-4.jpg",largeImageURL:"https://pypik.ru/uploads/posts/2018-09/1536907413_foto-net-no-ya-krasivaya-4.jpg",tags:"sorry =( no info"};var I=b,E=t(24),k=t.n(E),w=function(e){var a=e.images,t=e.onImgClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:k.a.imageGalleryList},a.map((function(e){var a=e.id,n=e.tags,o=e.webformatURL,c=e.largeImageURL;return r.a.createElement(I,{key:a,tags:n,previewImg:o,largeImageURL:c,onImgClick:t})}))))},B=t(11),C=t.n(B),L=document.querySelector("#modal-root"),S=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e.handleBackdropClick=function(a){a.currentTarget===a.target&&e.props.onClose()},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(r.a.createElement("div",{className:C.a.overlay,onClick:this.handleBackdropClick},r.a.createElement("div",{className:C.a.modal},this.props.children)),L)}}]),t}(n.Component),F=t(25),j=t.n(F),M=function(e){var a=e.nameBtn,t=e.onLoadMoreBtnClick;return r.a.createElement("button",{type:"button",className:j.a.button,onClick:t},r.a.createElement("span",null," ",a))},O=t(26),N=t.n(O),G=(t(55),function(){return r.a.createElement(N.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,timeout:2e3})}),Q=t(27),x=t.n(Q),P=function(e){var a=e.searchQuery,t=e.currentPage,n=void 0===t?1:t,r=e.pageSize,o=void 0===r?12:r;return x.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(a,"&per_page=").concat(o,"&key=").concat("16137003-a99878a83e3cf9a5973a72148","&page=").concat(n)).then((function(e){return e.data.hits}))},R=t(13),U=(t(73),t(74),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,largeImageURL:"",modalImage:""},e.onChangeQuery=function(a){e.setState({searchQuery:a,images:[],currentPage:1})},e.fetchImg=function(){var a=e.state,t=a.currentPage,n=a.searchQuery,r={searchQuery:n,currentPage:t};n&&(e.setState({isLoading:!0}),P(r).then((function(a){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a)),currentPage:e.currentPage+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(a){return e.setState({error:a})})).finally((function(){e.setState({isLoading:!1})})))},e.openModal=function(a){e.setState({showModal:!0,modalImage:a})},e.closeModal=function(){return e.setState({showModal:!1,modalImage:""})},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.fetchImg()}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.error,o=e.showModal,c=e.modalImage,l=a.length>0&&!t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null),r.a.createElement(p,{onSubmit:this.onChangeQuery}),r.a.createElement(f,null,n&&R.b.warn("Error is discipline through which we advance ".concat(n)),a.length>0&&r.a.createElement(w,{images:a,onImgClick:this.openModal}),l&&r.a.createElement(M,{nameBtn:"Load More",onLoadMoreBtnClick:this.fetchImg}),t&&r.a.createElement(G,null),o&&r.a.createElement(S,{onClose:this.closeModal},r.a.createElement("img",{src:c,alt:""}))))}}]),t}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,{className:U})),document.getElementById("root"))},8:function(e,a,t){e.exports={searchBar:"SearchBar_searchBar__bICFD",searchForm:"SearchBar_searchForm__3EgQR",searchFormButton:"SearchBar_searchFormButton__3RXjb",searchFormButtonLabel:"SearchBar_searchFormButtonLabel__1wLZa",searchFormInput:"SearchBar_searchFormInput__18E7e"}}},[[28,1,2]]]);
//# sourceMappingURL=main.62c2546d.chunk.js.map