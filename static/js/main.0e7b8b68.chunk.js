(this["webpackJsonpstar-wars-proj"]=this["webpackJsonpstar-wars-proj"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),r=c.n(a),n=c(21),i=c.n(n),j=(c(32),c(7)),l=c.n(j),d=c(13),h=c(10),b=c.p+"static/media/star-wars-logo.70060ecb.png",x=(c(34),c(4)),o=c(22),O=c(23),p=c(11),u=c(26),m=c(25);c(9);var f=function(e){return Object(s.jsx)("a",{href:e.url,children:Object(s.jsx)("li",{className:"searchResults",children:e.item},e.item)})},v=c(14),g=function(e){Object(u.a)(c,e);var t=Object(m.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={text:"",url:"https://swapi.dev/api/people/?search="},s.getDataFromFetch=s.getDataFromFetch.bind(Object(p.a)(s)),s.handleChange=s.handleChange.bind(Object(p.a)(s)),s.handleFlagChange=s.handleFlagChange.bind(Object(p.a)(s)),s.handleList=s.handleList.bind(Object(p.a)(s)),s}return Object(O.a)(c,[{key:"componentDidMount",value:function(){this.getDataFromFetch()}},{key:"componentDidUpdate",value:function(e,t,c){this.state.text!==t.text&&this.getDataFromFetch()}},{key:"getDataFromFetch",value:function(){var e=this;fetch(this.state.url+this.state.text,{}).then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleFlagChange",value:function(){this.setState({flag:!this.state.flag})}},{key:"handleList",value:function(){return this.state.data.results.map((function(e){return Object(s.jsx)(f,{item:e.name})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"searchContainer",children:[Object(s.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.text}),Object(s.jsx)("button",{onClick:this.handleList,children:Object(s.jsx)(v.d,{})})]})}}]),c}(r.a.Component),N=function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"topHeader",children:[Object(s.jsx)("div",{className:"logo-header",children:Object(s.jsx)(x.b,{to:"/",children:Object(s.jsx)("img",{src:b,alt:"Star Wars Logo"})})}),Object(s.jsx)("nav",{className:"nav",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)(x.b,{to:"/people",children:Object(s.jsx)("li",{children:"CHARACTERS"})}),Object(s.jsx)(x.b,{to:"/planets",children:Object(s.jsx)("li",{children:"PLANETS"})}),Object(s.jsx)(x.b,{to:"/films",children:Object(s.jsx)("li",{children:"FILMS"})}),Object(s.jsx)(x.b,{to:"/vehicles",children:Object(s.jsx)("li",{children:"VEHICLES"})}),Object(s.jsx)(x.b,{to:"/starships",children:Object(s.jsx)("li",{children:"STARSHIPS"})}),Object(s.jsx)(x.b,{to:"/species",children:Object(s.jsx)("li",{children:"SPECIES"})})]})}),Object(s.jsx)(g,{})]}),Object(s.jsx)("hr",{className:"hr"})]})},y=(c(40),function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{className:"hr"}),Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("nav",{className:"footerNav",children:[Object(s.jsxs)("ul",{children:[Object(s.jsx)(x.b,{to:"/people",children:Object(s.jsx)("li",{children:"Characters"})}),Object(s.jsx)(x.b,{to:"/planets",children:Object(s.jsx)("li",{children:"Planets"})}),Object(s.jsx)(x.b,{to:"/films",children:Object(s.jsx)("li",{children:"Films"})})]}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(x.b,{to:"/vehicles",children:Object(s.jsx)("li",{children:"Vehicles"})}),Object(s.jsx)(x.b,{to:"/starships",children:Object(s.jsx)("li",{children:"Starships"})}),Object(s.jsx)(x.b,{to:"/species",children:Object(s.jsx)("li",{children:"Species"})})]})]}),Object(s.jsxs)("div",{className:"starWarsLogo",children:[Object(s.jsx)("img",{src:b,alt:"Star Wars Logo"}),Object(s.jsx)("p",{className:"footerDescr",children:"All you want to know about Star Wars world"})]}),Object(s.jsxs)("div",{className:"footerIcons",children:[Object(s.jsx)("p",{className:"authorDescr",children:"exam project by Volodymyr Zvenyhorodskyi"}),Object(s.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)(v.a,{})}),Object(s.jsx)("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)(v.c,{})}),Object(s.jsx)("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer noopener",children:Object(s.jsx)(v.b,{})})]})]})]})}),C=c(2);function S(e){var t=e.data;return Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)("h1",{className:"pageTitle",children:"CHARACTERS"}),Object(s.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"cardContent",children:[Object(s.jsx)("div",{className:"cardHeader",children:e.name}),Object(s.jsxs)("div",{className:"cardDescr",children:[Object(s.jsxs)("p",{children:["Height: ",Object(s.jsx)("b",{children:e.height})]}),Object(s.jsxs)("p",{children:["Mass: ",Object(s.jsx)("b",{children:e.mass})]}),Object(s.jsxs)("p",{children:["Hair color: ",Object(s.jsx)("b",{children:e.hair_color})]}),Object(s.jsxs)("p",{children:["Eye color: ",Object(s.jsx)("b",{children:e.eye_color})]}),Object(s.jsxs)("p",{children:["Skin color: ",Object(s.jsx)("b",{children:e.skin_color})]}),Object(s.jsxs)("p",{children:["Birth year: ",Object(s.jsx)("b",{children:e.birth_year})]})]})]})},t)}))})]})}function w(e){var t=e.data;return Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)("h1",{className:"pageTitle",children:"PLANETS"}),Object(s.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"cardContent",children:[Object(s.jsx)("div",{className:"cardHeader",children:e.name}),Object(s.jsxs)("div",{className:"cardDescr",children:[Object(s.jsxs)("p",{children:["Terrain: ",Object(s.jsx)("b",{children:e.terrain})]}),Object(s.jsxs)("p",{children:["Climate: ",Object(s.jsx)("b",{children:e.climate})]}),Object(s.jsxs)("p",{children:["Diameter: ",Object(s.jsx)("b",{children:e.diameter})]}),Object(s.jsxs)("p",{children:["Gravity: ",Object(s.jsx)("b",{children:e.gravity})]}),Object(s.jsxs)("p",{children:["Orbital period: ",Object(s.jsx)("b",{children:e.orbital_period})]}),Object(s.jsxs)("p",{children:["Population: ",Object(s.jsx)("b",{children:e.population})]}),Object(s.jsxs)("p",{children:["Rotation period: ",Object(s.jsx)("b",{children:e.rotation_period})]})]})]})},t)}))})]})}function _(e){var t=e.data;return Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)("h1",{className:"pageTitle",children:"FILMS"}),Object(s.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"cardContent",children:[Object(s.jsx)("div",{className:"cardHeader",children:e.title}),Object(s.jsxs)("div",{className:"cardDescr",children:[Object(s.jsxs)("p",{children:["Release date: ",Object(s.jsx)("b",{children:e.release_date})]}),Object(s.jsxs)("p",{children:["Director: ",Object(s.jsx)("b",{children:e.director})]}),Object(s.jsxs)("p",{children:["Producer: ",Object(s.jsx)("b",{children:e.producer})]})]})]})},t)}))})]})}function k(e){var t=e.data;return Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)("h1",{className:"pageTitle",children:"VEHICLES"}),Object(s.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"cardContent",children:[Object(s.jsx)("div",{className:"cardHeader",children:e.name}),Object(s.jsxs)("div",{className:"cardDescr",children:[Object(s.jsxs)("p",{children:["Cargo capacity: ",Object(s.jsx)("b",{children:e.cargo_capacity})]}),Object(s.jsxs)("p",{children:["Consumables: ",Object(s.jsx)("b",{children:e.consumables})]}),Object(s.jsxs)("p",{children:["Cost in credits: ",Object(s.jsx)("b",{children:e.cost_in_credits})]}),Object(s.jsxs)("p",{children:["Crew: ",Object(s.jsx)("b",{children:e.crew})]}),Object(s.jsxs)("p",{children:["Length: ",Object(s.jsx)("b",{children:e.length})]}),Object(s.jsxs)("p",{children:["Manufacturer: ",Object(s.jsx)("b",{children:e.manufacturer})]}),Object(s.jsxs)("p",{children:["Max atmosphering speed: ",Object(s.jsx)("b",{children:e.max_atmosphering_speed})]}),Object(s.jsxs)("p",{children:["Model: ",Object(s.jsx)("b",{children:e.model})]}),Object(s.jsxs)("p",{children:["Passengers: ",Object(s.jsx)("b",{children:e.passengers})]}),Object(s.jsxs)("p",{children:["Vehicle class: ",Object(s.jsx)("b",{children:e.vehicle_class})]})]})]})},t)}))})]})}function F(e){var t=e.data;return Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)("h1",{className:"pageTitle",children:"STARSHIPS"}),Object(s.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"cardContent",children:[Object(s.jsx)("div",{className:"cardHeader",children:e.name}),Object(s.jsxs)("div",{className:"cardDescr",children:[Object(s.jsxs)("p",{children:["Starship class: ",Object(s.jsx)("b",{children:e.starship_class})]}),Object(s.jsxs)("p",{children:["Passengers: ",Object(s.jsx)("b",{children:e.passengers})]}),Object(s.jsxs)("p",{children:["Classification: ",Object(s.jsx)("b",{children:e.classification})]}),Object(s.jsxs)("p",{children:["Model: ",Object(s.jsx)("b",{children:e.model})]}),Object(s.jsxs)("p",{children:["Max atmosphering speed: ",Object(s.jsx)("b",{children:e.max_atmosphering_speed})]}),Object(s.jsxs)("p",{children:["Manufacturer: ",Object(s.jsx)("b",{children:e.manufacturer})]}),Object(s.jsxs)("p",{children:["Length: ",Object(s.jsx)("b",{children:e.length})]}),Object(s.jsxs)("p",{children:["Hyperdrive rating: ",Object(s.jsx)("b",{children:e.hyperdrive_rating})]}),Object(s.jsxs)("p",{children:["Crew: ",Object(s.jsx)("b",{children:e.crew})]}),Object(s.jsxs)("p",{children:["Cost in credits: ",Object(s.jsx)("b",{children:e.cost_in_credits})]}),Object(s.jsxs)("p",{children:["Consumables: ",Object(s.jsx)("b",{children:e.consumables})]}),Object(s.jsxs)("p",{children:["Cargo capacity: ",Object(s.jsx)("b",{children:e.cargo_capacity})]}),Object(s.jsxs)("p",{children:["MGLT: ",Object(s.jsx)("b",{children:e.MGLT})]})]})]})},t)}))})]})}function L(e){var t=e.data;return Object(s.jsxs)("div",{className:"pages",children:[Object(s.jsx)("h1",{className:"pageTitle",children:"SPECIES"}),Object(s.jsx)("div",{className:"cards",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"cardContent",children:[Object(s.jsx)("div",{className:"cardHeader",children:e.name}),Object(s.jsxs)("div",{className:"cardDescr",children:[Object(s.jsxs)("p",{children:["Average height: ",Object(s.jsx)("b",{children:e.average_height})]}),Object(s.jsxs)("p",{children:["Average lifespan: ",Object(s.jsx)("b",{children:e.average_lifespan})]}),Object(s.jsxs)("p",{children:["Classification: ",Object(s.jsx)("b",{children:e.classification})]}),Object(s.jsxs)("p",{children:["Designation: ",Object(s.jsx)("b",{children:e.designation})]}),Object(s.jsxs)("p",{children:["Eye colors: ",Object(s.jsx)("b",{children:e.eye_colors})]}),Object(s.jsxs)("p",{children:["Hair colors: ",Object(s.jsx)("b",{children:e.hair_colors})]}),Object(s.jsxs)("p",{children:["Language: ",Object(s.jsx)("b",{children:e.language})]}),Object(s.jsxs)("p",{children:["Skin colors: ",Object(s.jsx)("b",{children:e.skin_colors})]})]})]})},t)}))})]})}var D=c.p+"static/media/text.2e2621c6.png",H=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"mainPage",children:Object(s.jsx)("img",{src:D,alt:"Star Wars text",className:"textImg"})})})};var T=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),i=Object(h.a)(n,2),j=i[0],b=i[1],o=Object(a.useState)([]),O=Object(h.a)(o,2),p=O[0],u=O[1],m=Object(a.useState)([]),f=Object(h.a)(m,2),v=f[0],g=f[1],D=Object(a.useState)([]),T=Object(h.a)(D,2),E=T[0],P=T[1],M=Object(a.useState)([]),I=Object(h.a)(M,2),A=I[0],R=I[1],V=Object(a.useState)([]),W=Object(h.a)(V,1)[0];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,r(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,b(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/films/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,u(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/vehicles/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,g(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/starships/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,P(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/species/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,R(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){c.apply(this,arguments)}(),function(){s.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(x.a,{children:[Object(s.jsx)(N,{}),Object(s.jsxs)(C.c,{children:[Object(s.jsx)(C.a,{exact:!0,path:"/",children:Object(s.jsx)(H,{data:W})}),Object(s.jsx)(C.a,{exact:!0,path:"/people",children:Object(s.jsx)(S,{data:c})}),Object(s.jsx)(C.a,{exact:!0,path:"/planets",children:Object(s.jsx)(w,{data:j})}),Object(s.jsx)(C.a,{exact:!0,path:"/films",children:Object(s.jsx)(_,{data:p})}),Object(s.jsx)(C.a,{exact:!0,path:"/vehicles",children:Object(s.jsx)(k,{data:v})}),Object(s.jsx)(C.a,{exact:!0,path:"/starships",children:Object(s.jsx)(F,{data:E})}),Object(s.jsx)(C.a,{exact:!0,path:"/species",children:Object(s.jsx)(L,{data:A})})]}),Object(s.jsx)(H,{}),Object(s.jsx)(y,{})]})})};var E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),E()},9:function(e,t,c){}},[[41,1,2]]]);
//# sourceMappingURL=main.0e7b8b68.chunk.js.map