(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(3),o=n(4),m=n(7),h=n(6),l=(n(15),n(16),n(17),n(0));var u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{className:"header__title",children:"Meme Generator"})})})},j=n(9),b=n(5),d=n(2);n(19);var g=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{className:"main-formulary",onSubmit:e.handleSubmit,children:[Object(l.jsx)("input",{type:"text",name:"topText",onChange:e.handleChange,placeholder:"Top Text"}),Object(l.jsx)("input",{type:"text",name:"bottomText",onChange:e.handleChange,placeholder:"Bottom Text"}),Object(l.jsx)("button",{className:"main-formulary__btn",children:"GEN"})]}),Object(l.jsx)("div",{className:"main-meme-maker",children:Object(l.jsxs)("picture",{className:"img-container",children:[Object(l.jsx)("h1",{className:"top-text",children:e.topText}),Object(l.jsx)("h1",{className:"bottom-text",children:e.bottomText}),Object(l.jsx)("img",{className:"img-container__meme-img",src:e.randomImg,alt:""})]})})]})},O=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={allMemesImgs:[],topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg"},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.getRandomInt=e.getRandomInt.bind(Object(d.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){return e.data})).then((function(t){return e.setState({allMemesImgs:t.memes})}))}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(b.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({randomImg:this.state.allMemesImgs[this.getRandomInt(this.state.allMemesImgs.length)].url})}},{key:"render",value:function(){return Object(l.jsx)(g,Object(j.a)(Object(j.a)({},this.state),{},{handleChange:this.handleChange,handleSubmit:this.handleSubmit}))}}]),n}(a.Component),f=(n(20),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{})]})}}]),n}(c.a.Component));i.a.render(Object(l.jsx)(f,{}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.4fa13feb.chunk.js.map