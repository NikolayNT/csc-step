(function(){"use strict";var e={3761:function(e,t,n){var a=n(3751),r=n(641);function s(e,t,n,a,s,o){const i=(0,r.g2)("HeaderVue"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(i),(0,r.bF)(u)],64)}var o=n.p+"img/logo.cf7a0fdc.png";const i=e=>((0,r.Qi)("data-v-fa5aabec"),e=e(),(0,r.jt)(),e),u={class:"header"},d=i((()=>(0,r.Lk)("a",{class:"header__link",href:"https://it.cscentr.com/ru/"},[(0,r.Lk)("img",{class:"header__logo",src:o})],-1))),l={class:"header__menu"};function c(e,t,n,a,s,o){const i=(0,r.g2)("ButtonMenu");return(0,r.uX)(),(0,r.CE)("div",u,[d,(0,r.Lk)("div",l,[(0,r.bF)(i,{path:"/newsfeed",name:"Лента"}),(0,r.bF)(i,{path:"/overall",name:"Общие результаты"}),(0,r.bF)(i,{path:"/team",name:"Командные результаты"}),(0,r.bF)(i,{path:"/",name:"Личные результаты"}),(0,r.bF)(i,{path:"/rules",name:"Правила участия"}),(0,r.bF)(i,{path:"/profile",name:"Профиль",img:s.personal.img},null,8,["img"])])])}var p=n(3959),h=n(33);const f={class:"button__div"},m=["src"],g={key:1,class:"button__text"};function b(e,t,n,a,s,o){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.Wv)(i,{to:n.path,class:"button__link"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",f,["Профиль"==n.name?((0,r.uX)(),(0,r.CE)("img",{key:0,alt:"фото",src:n.img,class:"button__foto"},null,8,m)):((0,r.uX)(),(0,r.CE)("p",g,(0,h.v_)(n.name),1))])])),_:1},8,["to"])}var y={name:"ButtonMenu",props:{path:String,name:String,img:{type:String,default:""}}},k=n(6262);const _=(0,k.A)(y,[["render",b],["__scopeId","data-v-03ede100"]]);var v=_,j={name:"HeaderVue",data(){return{personal:p.xO}},components:{ButtonMenu:v}};const z=(0,k.A)(j,[["render",c],["__scopeId","data-v-fa5aabec"]]);var N=z,w={name:"AppVue",components:{HeaderVue:N}};const x=(0,k.A)(w,[["render",s]]);var E=x,S=n(5220);const C=e=>((0,r.Qi)("data-v-71a2b4e0"),e=e(),(0,r.jt)(),e),O={class:"news"},L=C((()=>(0,r.Lk)("h2",null,"Новостная лента",-1))),M=C((()=>(0,r.Lk)("p",null,"Новость смогут задать заранее определённые сотрудники.",-1))),P=["innerHTML"];function A(e,t,n,a,s,o){const i=(0,r.g2)("QuillEditor");return(0,r.uX)(),(0,r.CE)("div",O,[L,M,(0,r.Lk)("div",{innerHTML:s.text,id:"newContent"},null,8,P),(0,r.bF)(i,{modules:e.modules,toolbar:"full",id:"editor"},null,8,["modules"]),(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.save&&o.save(...e)),class:"news__button"},"Сохранить")])}var T=n(9950),F={name:"HomeView",components:{QuillEditor:T.tB},data(){const e="";return{text:e}},methods:{save(){const e=document.getElementById("editor");this.text=e.querySelector(".ql-editor").getInnerHTML()}}};const B=(0,k.A)(F,[["render",A],["__scopeId","data-v-71a2b4e0"]]);var H=B;const I=[{path:"/profile",name:"profile",component:()=>n.e(594).then(n.bind(n,6967))},{path:"/rules",name:"rules",component:()=>n.e(594).then(n.bind(n,319))},{path:"/",name:"personal",component:()=>n.e(594).then(n.bind(n,2557))},{path:"/team",name:"team",component:()=>Promise.all([n.e(905),n.e(202)]).then(n.bind(n,5495))},{path:"/overall",name:"overall",component:()=>Promise.all([n.e(905),n.e(286)]).then(n.bind(n,2979))},{path:"/newsfeed",name:"newsfeed",component:H}],X=(0,S.aE)({history:(0,S.LA)("/"),routes:I});var V=X;const q=(e,t)=>{let n=null;return function(){let a=this,r=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(a,r)}),t)}},Q=window.ResizeObserver;window.ResizeObserver=class extends Q{constructor(e){e=q(e,16),super(e)}},(0,a.Ef)(E).use(V).mount("#app")},3959:function(e,t,n){n.d(t,{iM:function(){return s},vB:function(){return r},wT:function(){return o},xO:function(){return a}});const a={img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg","full-name":"Петров Иван Сергеевич",department:"Отдел настройки и администрирования роботов",position:"Специалист","E-mail":"example@cscentr.com",team:"Скороходы",telegram:"@example","plan-steps":"4500",achievements:[{id:"123",text:"Лучший в команде",img:"https://ogorodniku.com/uploads/posts/2023-01/1674192805_ogorodniku-com-p-peizazhi-prirodi-foto-56.jpg",date:"11.03.2024",description:"Набрать за день максимальный результат среди команды"},{id:"124",text:"Лучший результат",img:"https://gas-kvas.com/uploads/posts/2023-02/1675483689_gas-kvas-com-p-fonovii-risunok-dlya-kompyutera-priroda-15.jpg",date:"11.03.2024",description:"Набрать за день максимальный результат среди всех участников"}]},r=[{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:123,date:"05.03.2024",steps:8e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:124,date:"06.03.2024",steps:5e3,screenshot:""},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:125,date:"07.03.2024",steps:3e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:126,date:"08.03.2024",steps:4e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:127,date:"09.03.2024",steps:7e3,screenshot:""},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:128,date:"10.03.2024",steps:1e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:129,date:"11.03.2024",steps:"",screenshot:""}],s=[{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:123,date:"05.03.2024",steps:8e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:124,date:"06.03.2024",steps:5e3,screenshot:""},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:125,date:"07.03.2024",steps:3e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:126,date:"08.03.2024",steps:4e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:127,date:"09.03.2024",steps:7e3,screenshot:""},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:128,date:"10.03.2024",steps:1e3,screenshot:"link"},{fullName:"Петров Иван Сергеевич",img:"https://img2.akspic.ru/attachments/originals/1/3/9/8/2/128931-flora-peyzash-okruzhayushchaya_sreda-gora-prirodnyj_landshaft-3840x2400.jpg",id:129,date:"11.03.2024",steps:"4563",screenshot:""},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1291,date:"05.03.2024",steps:8e3,screenshot:"link"},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1241,date:"06.03.2024",steps:5e3,screenshot:""},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1251,date:"07.03.2024",steps:3e3,screenshot:"link"},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1261,date:"08.03.2024",steps:4900,screenshot:"link"},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1271,date:"09.03.2024",steps:7800,screenshot:""},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1281,date:"10.03.2024",steps:1090,screenshot:"link"},{fullName:"Иванов Сергей Павлович",img:"https://w.forfun.com/fetch/7d/7db7d55995bd8690e98b42b2d57aa496.jpeg",id:1291,date:"11.03.2024",steps:8500,screenshot:""},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12912,date:"05.03.2024",steps:7e3,screenshot:"link"},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12412,date:"06.03.2024",steps:5e3,screenshot:""},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12512,date:"07.03.2024",steps:2e3,screenshot:"link"},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12612,date:"08.03.2024",steps:1900,screenshot:"link"},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12712,date:"09.03.2024",steps:8800,screenshot:""},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12812,date:"10.03.2024",steps:9090,screenshot:"link"},{fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12912,date:"11.03.2024",steps:9e3,screenshot:""}],o=[{team:"Скороходы",fullName:"Миронов Алексей Павлович",img:"https://s1.1zoom.ru/big7/18/Scenery_Mountains_Parks_356732.jpg",id:12912,date:"11.03.2024",steps:9e3,screenshot:""},{team:"Бегуны",fullName:"Петров Владимир Павлович",img:"https://gas-kvas.com/uploads/posts/2023-02/1675465078_gas-kvas-com-p-fonovie-risunki-na-rabochi-stol-35.jpg",id:12912,date:"11.03.2024",steps:7e3,screenshot:""},{team:"Идущие в даль",fullName:"Александров Кирилл Евгеньевич",img:"https://w.forfun.com/fetch/71/71f0c755f4b257fb9987c25743d16388.jpeg",id:12912,date:"11.03.2024",steps:4500,screenshot:""}]}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],s=e[l][2];for(var i=!0,u=0;u<a.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(i=!1,s<o&&(o=s));if(i){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{202:"02ba3cdb",286:"9b8ff875",594:"bb72d6e6",905:"1a33fcc5"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(594===e?"about":e)+"."+{202:"65f93898",286:"2c9d046b",594:"d58e91fe"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="steps:";n.l=function(a,r,s,o){if(e[a])e[a].push(r);else{var i,u;if(void 0!==s)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+s){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+s),i.src=a),e[a]=[r];var p=function(t,n){i.onerror=i.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,r,s){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&n.type,i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,o.parentNode&&o.parentNode.removeChild(o),s(u)}};return o.onerror=o.onload=i,o.href=t,a?a.parentNode.insertBefore(o,a.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){r=o[a],s=r.getAttribute("data-href");if(s===e||s===t)return r}},a=function(a){return new Promise((function(r,s){var o=n.miniCssF(a),i=n.p+o;if(t(o,i))return r();e(a,i,null,r,s)}))},r={524:0};n.f.miniCss=function(e,t){var n={202:1,286:1,594:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=s);var o=n.p+n.u(t),i=new Error,u=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,r[1](i)}};n.l(o,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],i=a[1],u=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var l=u(n)}for(t&&t(a);d<o.length;d++)s=o[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},a=self["webpackChunksteps"]=self["webpackChunksteps"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(3761)}));a=n.O(a)})();
//# sourceMappingURL=app.001cf279.js.map