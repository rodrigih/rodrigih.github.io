(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,n){e.exports=n(380)},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},373:function(e,t,n){e.exports=n.p+"static/media/pokeball.16c5ec21.png"},380:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(65),l=n.n(i),o=(n(188),n(12)),c=n(13),u=n(15),s=n(14),m=n(16),p=n(34);n(189);var f=function(){return r.a.createElement("div",null,r.a.createElement("h2",null," About "),r.a.createElement("p",null,"Welcome to the pok\xe9-app!",r.a.createElement("br",null),"Find information about all things pok\xe9mon, including moves, berries, and items. This is currently a work in progress. More to come soon."),r.a.createElement("h2",null," Credits "),r.a.createElement("p",null,"This site is only provides a front-end for the existing API,"," ",r.a.createElement("a",{href:"https://pokeapi.co",target:"_blank",rel:"noopener noreferrer"},"Pok\xe9API.")),r.a.createElement("h2",null," Source code "),r.a.createElement("p",null,"This project was made for educational purposes and is under the GNU General Public License.",r.a.createElement("br",null),"Source code for this project can be found"," ",r.a.createElement("a",{href:"https://github.com/rodrigih/poke-project",target:"_blank",rel:"noopener noreferrer"},"here"),"."))},h=n(9),d=n(4),b=n.n(d),v=n(7),E=n(8);n(190);function g(){var e=Object(v.a)(["\n      background: ",";\n    "]);return g=function(){return e},e}function k(){var e=Object(v.a)(["\n  display: inline-block;\n  text-transform: capitalize;\n  border-radius: 10%;\n  padding: 5px 10px;\n  margin: 5px;\n  color: #eee;\n  font-weight: bold;\n"]);return k=function(){return e},e}var y={bug:"#2A8E16",dark:"#424242",dragon:"linear-gradient(0deg, rgba(214,12,33,1) 35%, rgba(3,94,219,1) 64%)",electric:"#FFCE0E",fairy:"#FF93F2",fighting:"#F38D33",fire:"#FF5733",flying:"#48D6BB",grass:"#60E73F",ghost:"#B55AFD",ground:"#D8B528",ice:"#85DFD9",normal:"#B1B1B1",poison:"#8244BF",psychic:"#FE24E0",rock:"#9A6D13",steel:"#7D9597",water:"#4E6BF9"},j=E.a.span(k()),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.type,t=Object(E.a)(j)(g(),y[e]);return r.a.createElement(t,null," ",e," ")}}]),t}(a.Component);function x(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}function D(e){return e.find(function(e){return"en"===e.language.name})}function w(e){return e?e[0].toUpperCase()+e.slice(1).toLowerCase():e}function A(e){if(!e||0===Object.keys(e).length)return 0;var t=e.stat,n=e.baseStat,a=e.iv,r=e.ev,i=e.level,l=e.natureMult,o=(2*n+a+Math.floor(r/4))*i,c=Math.floor(o/100);return"hp"===t.toLowerCase()?c+i+10:Math.floor((c+5)*l)}function S(e,t){return e.slot-t.slot}function C(){var e=Object(v.a)(["\n  color: #eee;\n  font-weight: bold;\n"]);return C=function(){return e},e}function L(){var e=Object(v.a)(["\n  width: 10%;\n"]);return L=function(){return e},e}var _=E.a.div(L()),G=E.a.div(C());var N=r.a.memo(function(e){var t=e.spriteUrl,n=e.pokemonName,a=e.pokemonGenus,i=e.pokemonTypes.slice();return i.sort(S),r.a.createElement("div",{className:"flex pokemon-header"},r.a.createElement("div",{className:"flex flex-column content-center"},r.a.createElement(G,null,"#132"),r.a.createElement("div",{className:"sprite-container",style:{alignSelf:"center"}},r.a.createElement("img",{alt:"Pokemon sprite",src:t})),r.a.createElement("div",{className:"flex type-container"},i.map(function(e,t){return r.a.createElement(O,{key:"type-".concat(t),type:e.type.name})}))),r.a.createElement("div",{className:"flex flex-column pokemon-header-text"},r.a.createElement(G,null," ",w(n)," "),r.a.createElement(_,null),r.a.createElement("div",null," ",a," ")))});function P(){var e=Object(v.a)(["\n  background-color: #e74c3c;\n  color: #eee;\n  font-size: calc(10px + 2vmin);\n  font-weight: bold;\n  padding: 5px;\n  text-align: center;\n"]);return P=function(){return e},e}function M(){var e=Object(v.a)(["\n  width: 95%;\n  margin: 1em auto;\n  text-align: left;\n"]);return M=function(){return e},e}var I=E.a.div(M()),F=E.a.div(P()),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(I,null,r.a.createElement(F,{role:"heading","aria-level":"2"},this.props.title),this.props.children)}}]),t}(a.Component);function T(){var e=Object(v.a)(["\n  column-count: 2;\n  line-height: 2em;\n"]);return T=function(){return e},e}var U=E.a.div(T());function K(e){var t=x(3.937*e,0),n=Math.floor(t/12);return t=0===n?t:t%n,"".concat(n," ft. ").concat(t," in.")}var V=r.a.memo(function(e){var t=e.pokemonData,n=e.speciesData,a=t.height,i=t.weight,l=t.stats,o=n.flavor_text_entries,c=n.gender_rate,u=n.capture_rate,s=n.hatch_counter,m=n.egg_groups,p=D(o).flavor_text;return r.a.createElement(B,{title:"General"},r.a.createElement("div",null,r.a.createElement("h2",null," Description:"),r.a.createElement("p",null," ",p," "),r.a.createElement("h2",null," General Info:"),r.a.createElement(U,null,r.a.createElement("div",null," ",r.a.createElement("b",null,"Height:")," ",K(a)," "),r.a.createElement("div",null," ",r.a.createElement("b",null,"Weight:")," ",x(i/4.536,1)," lbs."),r.a.createElement("div",null," ",r.a.createElement("b",null,"Gender Ratio:")," ",function(e){var t=e/8*100,n=100-t;return r.a.createElement("span",null,n,"% \u2642 ",t,"% \u2640")}(c)," "),r.a.createElement("div",null," ",r.a.createElement("b",null,"Capture Rate:")," ",u," "),r.a.createElement("div",null," ",r.a.createElement("b",null,"Hatch Counter:")," ",s," (",257*s," steps)"),r.a.createElement("div",null," ",r.a.createElement("b",null,"Egg Groups:")," ",function(e){return e.map(function(e){var t=e.name;return"no-eggs"===(t=t.replace(/(\w)(\d)/,"$1 $2"))?"No egg group":w(t)}).join(", ")}(m)," "),r.a.createElement("div",null," ",r.a.createElement("b",null,"Effort Values:")," ",function(e){return e.filter(function(e){return 0!==e.effort}).map(function(e){var t=e.stat.name.replace("-"," ");return"".concat(w(t)," (").concat(e.effort,")")}).join(", ")}(l)," "))))});function W(){var e=Object(v.a)(["\n  margin-left: 1.5em;\n  padding-left: 1.5em;\n  border-left: 3px solid grey;\n"]);return W=function(){return e},e}var R=E.a.div(W());var z=r.a.memo(function(e){return r.a.createElement(B,{title:"Abilities"}," ",function(e){var t=e.abilityDataArr;if(!t||0===t.length)return r.a.createElement("div",null);var n=t.map(function(e){return D(e.names)});return t.map(function(e,t){var a=e.flavor_text_entries,i=e.effect_entries,l=D(a).flavor_text,o=D(i).effect,c=e.name,u=n[t].is_hidden?" (hidden)":"";return r.a.createElement("div",{key:"ability-".concat(t)},r.a.createElement("h2",null,w(c),u,":"),r.a.createElement(R,null,r.a.createElement("p",null," ",r.a.createElement("b",null,"In-game text:")," ",l," "),r.a.createElement("p",null," ",r.a.createElement("b",null,"Description:")," ",o," ")))})}(e)," ")}),H=n(157),$="/getPokemon",J="/getSpecies",Y="/getAbility",q="/getType",Q={fluffy:[{type:"fire",mult:2}],levitate:[{type:"ground",mult:0}],filter:[{type:"super-effective",mult:.75}],"dry-skin":[{type:"water",mult:0},{type:"fire",mult:1.25}],"flash-fire":[{type:"fire",mult:0}],"lightning-rod":[{type:"electric",mult:0}],"motor-drive":[{type:"electric",mult:0}],"sap-sipper":[{type:"grass",mult:0}],"storm-drain":[{type:"water",mult:0}],"volt-absorb":[{type:"electric",mult:0}],"water-absorb":[{type:"water",mult:0}],"solid-rock":[{type:"super-effective",mult:.75}],"wonder-guard":[{type:"non super-effective",mult:0}],"thick-fat":[{type:"ice",mult:.5},{type:"fire",mult:.5}]};function X(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 4em;\n"]);return X=function(){return e},e}function Z(){var e=Object(v.a)(["\n  border-bottom: 2px solid black;\n"]);return Z=function(){return e},e}var ee=E.a.h3(Z()),te=E.a.div(X());function ne(e){var t=e.typeDataArr;if(!t||0===t.length)return r.a.createElement("div",null);var n=function(e){var t=function(e,t){return t[1]-e[1]},n={weaknesses:[],resistances:[],immunities:[]};return Object.entries(e).forEach(function(e){var t=Number(e[1]);0===t?n.immunities.push(e):t>1?n.weaknesses.push(e):t<1&&n.resistances.push(e)}),n.weaknesses=n.weaknesses.sort(t),n.resistances=n.resistances.sort(t),n.immunities=n.immunities.sort(t),n}(function(e){var t={},n=function(e,t,n){var a=e.name;n.hasOwnProperty(a)?n[a]=t*n[a]:n[a]=t};return e.forEach(function(e){var a=e.damage_relations,r=a.double_damage_from,i=a.half_damage_from,l=a.no_damage_from;r.forEach(function(e){n(e,2,t)}),i.forEach(function(e){n(e,.5,t)}),l.forEach(function(e){n(e,0,t)})}),t}(t)),a=Object.keys(n).sort().reverse().map(function(e,t){var a=w(e),i=n[e].map(function(e,t){var n=Object(H.a)(e,2),i=n[0],l=n[1];return r.a.createElement("div",{key:"".concat(a,"-type-").concat(t)},r.a.createElement(O,{type:i})," (x",l,")")});return r.a.createElement(te,{key:"matchup-column-".concat(t)},r.a.createElement(ee,null,a),i)});return r.a.createElement("div",{className:"flex",style:{justifyContent:"center"}},a)}function ae(e){if(0===e.length)return r.a.createElement("div",null);var t=e.map(function(e){return function(e){var t=e.name,n=e.typeEffectArr,a=r.a.createElement("span",null,"If this pokemon has the ability ",r.a.createElement("b",null,t)),i=n.map(function(e,t,n){var a=e.type,i=e.mult,l=t<n.length-1?"and":"";return r.a.createElement("span",{key:"phrase-".concat(t)},"the effectiveness of ",r.a.createElement("b",null,a)," moves is ",r.a.createElement("b",null,"x",i)," ",l," ")});return r.a.createElement("span",null,a,", ",i)}(e)});return r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:"ability-info-".concat(t)},e)}))}var re=r.a.memo(function(e){var t=function(e){var t=e.abilityDataArr,n=[];return t&&0!==t.length?(t.map(function(e){return{key:e.name,name:D(e.names).name.toLowerCase()}}).forEach(function(e){var t=e.key,a=e.name,r=Q[t];if(r){var i={name:a,typeEffectArr:r};n.push(i)}}),n):n}(e);return r.a.createElement(B,{title:"Type Matchup"},r.a.createElement("div",{className:"flex flex-column content-center"},ne(e)," ",ae(t)))}),ie=n(92),le=n(27);function oe(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return oe=function(){return e},e}function ce(){var e=Object(v.a)(["\n  text-align: center;\n  border-bottom: 2px solid black;\n  display: inline-block;\n  margin: inherit auto;\n"]);return ce=function(){return e},e}var ue=E.a.h3(ce()),se=E.a.div(oe()),me={iv:31,ev:252,level:100,natureMult:1.1},pe={iv:0,ev:0,level:100,natureMult:.9},fe=r.a.createElement(le.f,{width:200,dataKey:"name",type:"category",tickLine:!1,axisLine:!1,tick:{fill:"black",fontWeight:"bold"}}),he=function(e){e.type,e.tickLine;var t=Object(ie.a)(e,["type","tickLine"]);return r.a.createElement(le.e,Object.assign({},t,{type:"number",tickLine:!1}))},de=function(e){e.label,e.isAnimationActive;var t=Object(ie.a)(e,["label","isAnimationActive"]);return r.a.createElement(le.a,Object.assign({},t,{label:{position:"right",fill:"black"},isAnimationActive:!1}))};var be=r.a.memo(function(e){var t=e.statData.slice().reverse(),n=function(e){return e.map(function(e){var t=e.stat.name,n=e.base_stat;return{name:"hp"===t?t.toUpperCase():w(t.replace("-"," ")),baseStat:n}})}(t),a=function(e,t){var n=e.pokemonName;return t.map(function(e){var t=e.stat.name,a=e.base_stat,r="hp"===t?t.toUpperCase():w(t.replace("-"," ")),i={stat:t,statName:r,baseStat:a},l=Object.assign(Object.create(i),pe),o=Object.assign(Object.create(i),me);return"hp"===t&&"shedinja"===n?{name:r,minStat:1,maxStat:1}:{name:r,minStat:A(l),maxStat:A(o)}})}(e,t);return r.a.createElement(B,{title:"Stats"},r.a.createElement("div",{className:"flex flex-column content-center"},r.a.createElement(ue,null,"Base Stats"),r.a.createElement(le.d,{width:"80%",height:400},r.a.createElement(le.b,{data:n,layout:"vertical",margin:{right:50}},de({dataKey:"baseStat",fill:"#4FA4E4"}),he({dataKey:"baseStat",domain:[0,255]}),fe)),r.a.createElement(ue,null," Stat Range (Lv. 100)"),r.a.createElement(le.d,{width:"80%",height:400},r.a.createElement(le.b,{data:a,layout:"vertical",margin:{right:50}},de({dataKey:"maxStat",fill:"#4FA4E4",name:"Max Stat"}),de({dataKey:"minStat",fill:"#E45010",name:"Min Stat"}),he({domain:[0,714]}),fe,r.a.createElement(le.c,{verticalAlign:"top",height:36}))),r.a.createElement(se,null,r.a.createElement("p",null,r.a.createElement("b",null,"Note:")," Above stats are calculated for the pokemon at level 100 in the following manner:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Minimum stat uses no EVs, no IVs, and a detremental nature (if applicable)."),r.a.createElement("li",null,"Maximum stat uses 252 EVs, 31 IVs, and a beneficial nature (if applicable).")))))}),ve=n(26),Ee=n.n(ve),ge=n(52),ke=$,ye=J,je=Y,Oe=q,xe=function(){var e=Object(ge.a)(Ee.a.mark(function e(t){var n,a,r;return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toLowerCase(),e.next=3,fetch("".concat(ke,"/").concat(n));case 3:if(a=e.sent,r=a.json(),200===a.status){e.next=7;break}throw Error(r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(ge.a)(Ee.a.mark(function e(t){var n,a,r;return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toLowerCase(),e.next=3,fetch("".concat(ye,"/").concat(n));case 3:if(a=e.sent,r=a.json(),200===a.status){e.next=7;break}throw Error(r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(ge.a)(Ee.a.mark(function e(t){var n,a,r;return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.toLowerCase()).replace(" ","-"),e.next=4,fetch("".concat(je,"/").concat(n));case 4:if(a=e.sent,r=a.json(),200===a.status){e.next=8;break}throw Error(r.message);case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(ge.a)(Ee.a.mark(function e(t){var n,a,r;return Ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.toLowerCase(),e.next=3,fetch("".concat(Oe,"/").concat(n));case 3:if(a=e.sent,r=a.json(),200===a.status){e.next=7;break}throw Error(r.message);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Se=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pokemonData:null,speciesData:null,abilityDataArr:[],typeDataArr:[],isLoading:!1,hasError:!1},n.handleGettingPokemonData=n.handleGettingPokemonData.bind(Object(h.a)(Object(h.a)(n))),n.handleGettingSpeciesData=n.handleGettingSpeciesData.bind(Object(h.a)(Object(h.a)(n))),n.handleGettingAbilityData=n.handleGettingAbilityData.bind(Object(h.a)(Object(h.a)(n))),n.handleGettingTypeData=n.handleGettingTypeData.bind(Object(h.a)(Object(h.a)(n))),n.handleError=n.handleError.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getAllPokemonData",value:function(){var e=this,t=this.props.match.params.pokemon;t&&this.setState({isLoading:!0,hasError:!1}),xe(t).then(function(t){e.handleGettingPokemonData(t);var n=t.abilities,a=t.types,r=t.species,i=n.slice();i=n.sort(S);var l=a.slice();l.sort(S),De(r.name).then(e.handleGettingSpeciesData).catch(e.handleError),i.forEach(function(t){var n=t.ability.name;we(n).then(e.handleGettingAbilityData).catch(e.handleError)}),l.forEach(function(t){var n=t.type.name;Ae(n).then(e.handleGettingTypeData).catch(e.handleError)})}).catch(this.handleError)}},{key:"handleGettingPokemonData",value:function(e){this.setState({pokemonData:e,isLoading:!1,hasError:!1})}},{key:"handleGettingSpeciesData",value:function(e){this.setState({speciesData:e,isLoading:!1,hasError:!1})}},{key:"handleGettingAbilityData",value:function(e){var t=this.state.abilityDataArr.slice();t.push(e),this.setState({abilityDataArr:t})}},{key:"handleGettingTypeData",value:function(e){var t=this.state.typeDataArr.slice();t.push(e),this.setState({typeDataArr:t})}},{key:"handleError",value:function(e){this.setState({hasError:!0,isLoading:!1})}},{key:"componentDidMount",value:function(){this.props.match.params.pokemon&&(this.setState({isLoading:!0,hasError:!1}),this.getAllPokemonData())}},{key:"componentDidUpdate",value:function(e){var t=e.match.params.pokemon,n=this.props.match.params.pokemon;t!==n&&n.length&&(this.setState({abilityDataArr:[],typeDataArr:[],isLoading:!0,hasError:!1}),this.getAllPokemonData())}},{key:"render",value:function(){var e=this.state,t=e.pokemonData,n=e.speciesData,a=e.abilityDataArr,i=e.typeDataArr,l=e.isLoading,o=e.hasError,c=this.props.match.params.pokemon;if(o)return r.a.createElement("p",null," Could not find ",c);if(l)return r.a.createElement("p",null," Loading... ");if(!t||!n)return r.a.createElement("div",null);var u=t.species.name,s=t.sprites.front_default,m=t.types,p=t.stats,f=D(n.genera).genus;return r.a.createElement("div",null,r.a.createElement(N,{spriteUrl:s,pokemonName:u,pokemonGenus:f,pokemonTypes:m}),r.a.createElement(V,{pokemonData:t,speciesData:n}),r.a.createElement(z,{abilityDataArr:a}),r.a.createElement(re,{abilityDataArr:a,typeDataArr:i}),r.a.createElement(be,{pokemonName:u,statData:p}))}}]),t}(a.Component),Ce=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pokemonInput:"",data:null},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.pokemon;e&&this.setState({pokemonInput:e})}},{key:"handleChange",value:function(e){this.setState({pokemonInput:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.pokemonInput;this.props.history.push("/Pokemon/".concat(t))}},{key:"render",value:function(){var e=this.props.match.isExact;return r.a.createElement("div",null,r.a.createElement("p",{className:b()({hidden:!e})},"Enter a pok\xe9mon name below."),r.a.createElement("form",{style:{marginTop:"1em"},onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"pokemon-input"}," Go "),r.a.createElement("img",{id:"pokeball-img",alt:"",src:n(373)}),r.a.createElement("input",{id:"pokemon-input",type:"text",name:"pokemon",placeholder:"Bulbasaur",onChange:this.handleChange,value:this.state.pokemonInput}),",",r.a.createElement("button",{id:"btn-go"}," I Choose You! ")),r.a.createElement(p.a,{path:"/Pokemon/:pokemon",component:Se}))}}]),t}(a.Component),Le=Object(p.e)(Ce),_e=n(40);function Ge(){var e=Object(v.a)(["\n  display: flex;\n"]);return Ge=function(){return e},e}var Ne=E.a.ul(Ge()),Pe=[{url:"/",text:"Home",idStr:"home-link"},{url:"/Pokemon",text:"Pokemon",idStr:"pokemon-link"},{url:"/Moves",text:"Moves",idStr:"moves-link"},{url:"/Items",text:"Items",idStr:"items-link"},{url:"/Berries",text:"Berries",idStr:"berries-link"}],Me=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).renderLinks=n.renderLinks.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderLinks",value:function(){var e=this;return Pe.map(function(t,n){var a=t.url,i=t.text,l=t.idStr,o=e.props.location.pathname,c=o===a||n>0&&o.includes(a);return r.a.createElement(_e.b,{className:b()({"active-link":c}),to:a,key:l},i)})}},{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(Ne,null,this.renderLinks()))}}]),t}(a.Component);function Ie(){return r.a.createElement("h2",null," Moves page ")}function Fe(){return r.a.createElement("h2",null," Items page ")}function Be(){return r.a.createElement("h2",null," Berries page ")}function Te(){return r.a.createElement("h2",null," Page does not exist ")}var Ue=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null," Pok\xe9mon Info App "),r.a.createElement(p.a,{component:Me})),r.a.createElement("div",{className:"App-content"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:f}),r.a.createElement(p.a,{path:"/Pokemon",component:Le}),r.a.createElement(p.a,{path:"/Moves",component:Ie}),r.a.createElement(p.a,{path:"/Items",component:Fe}),r.a.createElement(p.a,{path:"/Berries",component:Be}),r.a.createElement(p.a,{component:Te}))),r.a.createElement("footer",{className:"App-footer"},"Created using"," ",r.a.createElement("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"React"),". Uses the"," ",r.a.createElement("a",{href:"https://pokeapi.co",target:"_blank",rel:"noopener noreferrer"},"Pok\xe9API.")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(_e.a,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[183,1,2]]]);
//# sourceMappingURL=main.0ef2c547.chunk.js.map