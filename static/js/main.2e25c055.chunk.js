(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=a(3),s=a(4),u=a(5),m=a(7),i=a(6),p=a(8),g=function(e){var t=e.state,a=e.getTotal,n=e.percentage,l=t.good,c=t.neutral,o=t.bad;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Good :",l),r.a.createElement("p",null,"Neutral :",c),r.a.createElement("p",null,"Bad :",o),r.a.createElement("p",null,"Total feedback :",a()),r.a.createElement("p",null,"Positive feedback :",n(),"%"))},d=function(e){var t=e.handleIncrement;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{name:"good",type:"button",onClick:t},"Good"),r.a.createElement("button",{name:"neutral",type:"button",onClick:t},"Neutral"),r.a.createElement("button",{name:"bad",type:"button",onClick:t},"Bad"))},b=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t))},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.handleIncrement=function(e){var t=a.props.step,n=e.target.name;a.setState(Object(o.a)({},n,a.state[n]+t))},a.getTotal=function(){var e=a.state,t=e.good,n=e.bad;return t+e.neutral+n},a.percentage=function(){var e=a.getTotal();return Math.floor(100/e*a.state.good)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:this.props.title[0]},r.a.createElement(d,{handleIncrement:this.handleIncrement})),0!==this.getTotal()?r.a.createElement("section",{className:this.props.title[1]},r.a.createElement(g,{state:this.state,getTotal:this.getTotal,percentage:this.percentage})):r.a.createElement(b,{message:"No feedback given"}))}}]),t}(n.Component);E.defaultProps={step:1};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{title:["buttons","statistics"]}))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.2e25c055.chunk.js.map