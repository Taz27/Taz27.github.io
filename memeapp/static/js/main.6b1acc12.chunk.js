(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),i=a.n(m);a(15);var r=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"problem?"}),l.a.createElement("p",null,"Meme Generator"))},o=a(4),c=a(5),s=a(6),u=a(8),h=a(7),d=a(1),p=a(9),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[],isLoading:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,allMemeImgs:t.data.memes})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.topText,name:"topText",placeholder:"Top Text",onChange:this.handleChange}),l.a.createElement("input",{type:"text",value:this.state.bottomText,name:"bottomText",placeholder:"Bottom Text",onChange:this.handleChange}),l.a.createElement("button",null,"Gen")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:"meme"}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)));return l.a.createElement("div",null,this.state.isLoading?l.a.createElement("div",{style:{maxWidth:500,margin:"0 auto"}},l.a.createElement("img",{src:"https://media.giphy.com/media/MDrmyLuEV8XFOe7lU6/giphy.gif",alt:"loading_gif"})):e)}}]),t}(l.a.Component);var f=function(){return l.a.createElement("div",{style:{position:"fixed",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"left",width:400,bottom:0,left:0}},"Coded with ",l.a.createElement("span",{role:"img","aria-label":"Love emoji"},"\u2764\ufe0f")," in ",l.a.createElement("em",null,l.a.createElement("strong",null,"ReactJS"))," by ",l.a.createElement("strong",null,"TARAN MAND"))};var b=function(){return l.a.createElement("div",null,l.a.createElement(r,null),l.a.createElement(g,null),l.a.createElement(f,null))};var E=function(){return l.a.createElement(b,null)};i.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6b1acc12.chunk.js.map