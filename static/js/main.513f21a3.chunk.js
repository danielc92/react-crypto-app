(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a.p+"static/media/CoinGecko.896961f6.png"},212:function(e,t,a){e.exports=a.p+"static/media/001-bitcoin.4522051b.svg"},213:function(e,t,a){e.exports=a.p+"static/media/002-bitcoin-1.856832ef.svg"},214:function(e,t,a){e.exports=a.p+"static/media/003-bitcoin-2.4426262c.svg"},217:function(e,t,a){e.exports=a(425)},423:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=a(17),o=a(18),s=a(20),m=a(19),u=a(21),d=a(26),p=a(32),g=a.n(p),E=a(428),h=a(432),y=a(435),f=a(111),b=a(430),v={background:"#ffffff",padding:"2rem",margin:0,minHeight:700},k={height:"100%"},x={marginBottom:"1rem"},_={backgroundColor:"#031529",color:"white",textAlign:"center"},O={fontSize:"1.25rem"},j={marginTop:"3rem"},C=E.a.Content,I=h.a.Title,w=h.a.Paragraph,S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={coinsList:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/coins/list").then(function(t){e.setState({coinsList:t.data},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.coinsList,a=e.loading,n=[{title:"Id",dataIndex:"id",key:"id"},{title:"Symbol",dataIndex:"symbol",key:"symbol"},{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement(y.a,{color:"purple"},e)}},{title:"View Details",dataIndex:"id",key:"id",render:function(e){return l.a.createElement(f.a,{type:"primary"},l.a.createElement(d.b,{to:"/coins/".concat(e)},"View"))}}];return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(C,{style:v},l.a.createElement(I,{level:2},"Coins List"),l.a.createElement(w,null,"This page lists all available coins..."),l.a.createElement(b.a,{bordered:!0,loading:a,dataSource:t,columns:n})))}}]),t}(n.Component),T=a(434),A=a(429),P=a(72),L=a(37),D=a(431),M=a(433);function q(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.a,{gutter:16,style:{textAlign:"center"},type:"flex"},l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:"community_score",value:e.community_score}))),l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:"coingecko_score",value:e.coingecko_score}))),l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:"developer_score",value:e.developer_score}))),l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:"liquitidy_score",value:e.liquitidy_score}))),l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:"market_cap_rank",value:e.market_cap_rank}))),l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:"coingecko_rank",value:e.coingecko_rank})))))}var F=a(210),z=E.a.Content,U=h.a.Title,G=h.a.Paragraph,H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.coinId,a="https://api.coingecko.com/api/v3/coins/".concat(t,"?localization=false&tickers=false&market_data=true&community_data=false&sparkline=true&developer_data=false");g.a.get(a).then(function(t){e.setState({data:t.data},function(){return e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.data).length,a={labels:t>0?this.state.data.market_data.sparkline_7d.price.map(function(e,t){return t}):[],datasets:[{label:"Sparkline 7d",data:t>0?this.state.data.market_data.sparkline_7d.price:[],backgroundColor:"rgba(55, 144, 255, 0.8)"}]};return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(z,{style:v},this.state.loading?l.a.createElement(l.a.Fragment,null,l.a.createElement(T.a,{active:!0}),l.a.createElement(T.a,{active:!0}),l.a.createElement(T.a,{active:!0}),l.a.createElement(T.a,{active:!0})):l.a.createElement(l.a.Fragment,null,l.a.createElement(U,{level:2},l.a.createElement(A.a,{shape:"square",size:"large",src:this.state.data.image.large,style:{marginRight:"1rem"}}),this.state.data.name),l.a.createElement(G,null,"Last updated on ",l.a.createElement(y.a,{color:"green"},this.state.data.last_updated)),l.a.createElement(f.a,{style:{marginBottom:"1rem"}},l.a.createElement(d.b,{to:"/coins"},"Back to coins list")),l.a.createElement(U,{level:3,style:{marginTop:"3rem"}},"Scores and Ranks"),l.a.createElement(q,{coingecko_rank:this.state.data.coingecko_rank,market_cap_rank:this.state.data.market_cap_rank,developer_score:this.state.data.developer_score,community_score:this.state.data.community_score,liquidity_score:this.state.data.liquidity_score,coingecko_score:this.state.data.coingecko_score}),l.a.createElement(U,{level:3,style:j},"Market Stats"),l.a.createElement(P.a,{gutter:16,style:{textAlign:"center"},type:"flex"},["circulating_supply","total_supply","public_interest_score","market_cap_change_24h","market_cap_change_percentage_24h","price_change_percentage_14d","price_change_percentage_1y","price_change_percentage_200d","price_change_percentage_24h","price_change_percentage_30d","price_change_percentage_60d","price_change_percentage_7d"].map(function(t){return l.a.createElement(L.a,{xs:24,sm:24,md:12,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k},l.a.createElement(M.a,{title:t,value:e.state.data.market_data[t]})))})),l.a.createElement(U,{level:3,style:j},"7 Day Sparkline"),l.a.createElement(G,null,"Each unit on the x-axis represents 1 hour."),l.a.createElement(F.a,{data:a,options:{scales:{xAxes:[{gridLines:{display:!1},ticks:{maxTicksLimit:16}}],yAxes:[{gridLines:{display:!1},ticks:{maxTicksLimit:6}}]}}}))))}}]),t}(n.Component),N=a(212),R=a.n(N),B=a(213),V=a.n(B),K=a(214),W=a.n(K),J=E.a.Content,Y=D.a.Meta,Q=h.a.Title,X=h.a.Paragraph,Z=[R.a,V.a,W.a],$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(J,{className:"text-focus-in",style:v},l.a.createElement(Q,{level:2},"Home Page"),l.a.createElement(X,null,"Consequat fugiat exercitation cillum proident aliquip irure non. Ad ad qui labore do nulla. Est pariatur culpa laborum labore aliqua incididunt. Sunt do ex aliqua irure magna adipisicing sint exercitation pariatur adipisicing. Tempor eiusmod minim officia nostrud eiusmod sunt veniam ipsum cillum enim ut consequat. Fugiat eiusmod ut sit ea commodo do eiusmod ex deserunt."),l.a.createElement(Q,{level:2},"Cards"),l.a.createElement(P.a,{gutter:16,style:{textAlign:"center"},type:"flex"},Z.map(function(e){return l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:{border:"none"},cover:l.a.createElement("img",{style:{padding:"2rem",maxWidth:"200px",margin:"auto"},src:e})},l.a.createElement(Y,{title:"svg-image",description:"Id mollit dolore tempor nulla ad aliqua irure aute reprehenderit commodo officia."})))}))))}}]),t}(n.Component),ee=a(215),te=a(145),ae=a.n(te),ne=E.a.Content,le=h.a.Title,re=h.a.Paragraph,ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[{title:"Name",dataIndex:"name",key:"name"},{title:"Version",dataIndex:"version",key:"version",render:function(e){return l.a.createElement(y.a,{color:"green"},e)}}];return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(ne,{className:"text-focus-in",style:Object(ee.a)({},v)},l.a.createElement(le,{level:2},"About Page"),l.a.createElement(re,null,"Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. "),l.a.createElement(le,{level:4},"Purpose"),l.a.createElement(re,null,"This project was built in order to further learning and development of React applications, especially those involving connecting to third party APIs."),l.a.createElement(le,{level:4},"Packages used in this project"),l.a.createElement(re,null,"The following packages were installed via ",l.a.createElement("strong",null,"npm")),l.a.createElement(b.a,{pagination:!1,dataSource:[{name:"antd",version:"^3.20.6",purpose:""},{name:"gh-pages",version:"^2.0.1",purpose:""},{name:"react",version:"^16.8.6",purpose:""},{name:"react-dom",version:"^16.8.6",purpose:""},{name:"react-router-dom",version:"^5.0.1",purpose:""},{name:"react-scripts",version:"3.0.1",purpose:""}],columns:e}),l.a.createElement(re,null),l.a.createElement(le,{level:4},"Data source"),l.a.createElement(re,null,"All the data which this application ingests and displays is processed from the CoinGecko API. A free and publicly available cryptocurrency api. Click below to visit CoinGecko official website."),l.a.createElement("a",{href:"https://www.coingecko.com/en/api#"},l.a.createElement("img",{style:{border:"1px solid #f3f3f3"},width:"550",src:ae.a}))))}}]),t}(n.Component),ie=a(437),oe=a(436),se=a(11),me=h.a.Title,ue=h.a.Paragraph,de=E.a.Content,pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],count:null,loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/events").then(function(t){console.log(t.data.data),e.setState({data:t.data.data,count:t.data.count},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(de,{style:v},l.a.createElement(me,{level:2},"Events"),l.a.createElement(ue,null,"This page shows cryptocurrency related events around the globe..."),l.a.createElement(ie.a,{loading:this.state.loading,itemLayout:"vertical",size:"large",dataSource:this.state.data,renderItem:function(e){return l.a.createElement(ie.a.Item,{key:e.title,extra:l.a.createElement("img",{width:450,alt:e.title,src:e.screenshot})},l.a.createElement(ie.a.Item.Meta,{title:l.a.createElement("a",{href:e.website},e.title),description:e.venue}),e.description.slice(0,500),"...",l.a.createElement("div",{style:{margin:"1.5rem 0rem"}},l.a.createElement(y.a,{color:"blue"},"Type: ",e.type),l.a.createElement(y.a,{color:"blue"},"Location: ",e.country)),l.a.createElement(oe.a,null,l.a.createElement(oe.a.Item,{color:"blue",dot:l.a.createElement(se.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Event starts on ",l.a.createElement("span",{style:{fontWeight:500}},e.start_date)),l.a.createElement(oe.a.Item,{color:"red",dot:l.a.createElement(se.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Event ends on ",l.a.createElement("span",{style:{fontWeight:500}},e.end_date))))}})))}}]),t}(n.Component),ge=a(71),Ee=E.a.Content,he=h.a.Title,ye=(h.a.Paragraph,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(Ee,{className:"text-focus-in",style:v},l.a.createElement(he,{level:2},"In development"),l.a.createElement(ge.a,{description:"This page is currently in development. Please check on it at a later time..."})))}}]),t}(n.Component)),fe=(D.a.Meta,E.a.Content),be=h.a.Paragraph,ve=h.a.Title,ke=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:{},loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/global").then(function(t){return e.setState({data:t.data.data},e.setState({loading:!e.state.loading}))})}},{key:"render",value:function(){var e=this.state.data,t=(e.loading,e.active_cryptocurrencies),a=e.market_cap_change_percentage_24h_usd,n=e.ongoing_icos,r=e.upcoming_icos,c=e.ended_icos,i=(e.updated_at,e.markets);return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(fe,{style:v},l.a.createElement(ve,{level:2},"Global Data"),l.a.createElement(be,null,"This page lists global data. Prices were last updated at "),l.a.createElement(P.a,{gutter:16,style:{textAlign:"center"},type:"flex"},l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k,loading:this.state.loading},l.a.createElement(M.a,{title:"Markets",value:i}))),l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k,loading:this.state.loading},l.a.createElement(M.a,{suffix:"%",precision:2,title:"Market Cap Change Percent (24hr USD)",value:a}))),l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k,loading:this.state.loading},l.a.createElement(M.a,{title:"Active Cryptocurrencies",value:t}))),l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k,loading:this.state.loading},l.a.createElement(M.a,{title:"Ongoing Initial Coin Offerings (ICOS)",value:n}))),l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k,loading:this.state.loading},l.a.createElement(M.a,{title:"Upcoming Initial Coin Offerings (ICOS)",value:r}))),l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x},l.a.createElement(D.a,{style:k,loading:this.state.loading},l.a.createElement(M.a,{title:"Ended Initial Coin Offerings (ICOS)",value:c}))))))}}]),t}(n.Component),xe=a(54),_e=a(150),Oe=E.a.Header,je=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={iconType:"twoTone"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.state.iconType;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Oe,{className:"header"},l.a.createElement(_e.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["home"],style:{lineHeight:"64px"}},l.a.createElement(_e.a.Item,{key:"home"},l.a.createElement(d.b,{to:"/"},l.a.createElement(se.a,{type:"home",style:O}),"Home")),l.a.createElement(_e.a.Item,{key:"about"},l.a.createElement(d.b,{to:"/about"},l.a.createElement(se.a,{type:"info-circle",style:O}),"About")),l.a.createElement(_e.a.Item,{key:"source"},l.a.createElement("a",{target:"_blank",href:"https://github.com/danielc92/react-crypto-app"},l.a.createElement(se.a,{theme:"filled",type:"github",style:O}),"Source")))))}}]),t}(n.Component),Ce=E.a.Sider,Ie=(E.a.Content,_e.a.SubMenu),we=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ce,{width:200,style:{background:"#fff"}},l.a.createElement(_e.a,{mode:"inline",defaultSelectedKeys:["menu-updates"],defaultOpenKeys:["menu-updates","menu-coins","menu-events","menu-global","menu-exchanges"],style:{height:"100%",borderRight:0}},l.a.createElement(Ie,{key:"menu-updates",title:l.a.createElement("span",null,l.a.createElement(se.a,{type:"alert",style:O}),"Updates")},l.a.createElement(_e.a.Item,{key:"status-list"},l.a.createElement(d.b,{to:"/status/list"},"Updates Listing"))),l.a.createElement(Ie,{key:"menu-coins",title:l.a.createElement("span",null,l.a.createElement(se.a,{type:"dollar",style:O}),"Coins")},l.a.createElement(_e.a.Item,{key:"coin-list"},l.a.createElement(d.b,{to:"/coins"},"Coin Listing")),l.a.createElement(_e.a.Item,{key:"coin-detail"},l.a.createElement(d.b,{to:"/coins/bitcoin"},"Coin Detail View")),l.a.createElement(_e.a.Item,{key:"coin-market"},l.a.createElement(d.b,{to:"/empty"},"Coin Markets"))),l.a.createElement(Ie,{key:"menu-events",title:l.a.createElement("span",null,l.a.createElement(se.a,{type:"team",style:O}),"Events")},l.a.createElement(_e.a.Item,{key:"events-list"},l.a.createElement(d.b,{to:"/events/list"},"Events Listing"))),l.a.createElement(Ie,{key:"menu-exchanges",title:l.a.createElement("span",null,l.a.createElement(se.a,{type:"bank",style:O}),"Exchanges")},l.a.createElement(_e.a.Item,{key:"exchanges-list"},l.a.createElement(d.b,{to:"/exchanges/list"},"Exchanges Listing"))),l.a.createElement(Ie,{key:"menu-global",title:l.a.createElement("span",null,l.a.createElement(se.a,{type:"global",style:O}),"Global")},l.a.createElement(_e.a.Item,{key:"global-main"},l.a.createElement(d.b,{to:"/global"},"Data"))))))}}]),t}(n.Component),Se=E.a.Content,Te=h.a.Paragraph,Ae=h.a.Title,Pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={exchanges:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/exchanges").then(function(t){return e.setState({exchanges:t.data},e.setState({loading:!e.state.loading}))})}},{key:"render",value:function(){var e=[{title:"Id",dataIndex:"id",key:"id"},{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement(y.a,{color:"purple"},e)}},{title:"Year est.",dataIndex:"year_established",key:"year_established"},{title:"Country",dataIndex:"country",key:"country",render:function(e){return l.a.createElement(y.a,{color:"blue"},e)}},{title:"Trade 24h BTC",dataIndex:"trade_volume_24h_btc",key:"trade_volume_24h_btc"}];return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(Se,{style:v},l.a.createElement(Ae,{level:2},"Exchanges List"),l.a.createElement(Te,null,"This page lists available exchanges."),l.a.createElement(b.a,{bordered:!0,loading:this.state.loading,dataSource:this.state.exchanges,columns:e})))}}]),t}(n.Component),Le=E.a.Footer;function De(){return l.a.createElement(Le,{style:_},"Developed by ",l.a.createElement("strong",null,"Daniel Corcoran"),".",l.a.createElement("br",null),"Built with ",l.a.createElement("strong",null,"React")," and Ant Design UI.",l.a.createElement("br",null),"Powered by ",l.a.createElement("strong",null,"CoinGecko")," API.")}a(423);var Me=E.a.Content,qe=h.a.Title,Fe=h.a.Paragraph,ze=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.coingecko.com/api/v3/status_updates").then(function(t){e.setState({data:t.data.status_updates},function(){e.setState({loading:!e.state.loading})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return l.a.createElement(E.a,{style:{padding:"1rem"}},l.a.createElement(Me,{style:v},l.a.createElement(qe,{level:2},"Status Updates"),l.a.createElement(Fe,null,"This feature is currently in beta. List all status_updates with data (description, category, created_at, user, user_title and pin)"),l.a.createElement(P.a,{gutter:16,style:{textAlign:"center"},type:"flex"},l.a.createElement(L.a,{xs:24,sm:24,md:8,lg:8,xl:8,style:x})),l.a.createElement(ie.a,{pagination:!this.state.loading,loading:this.state.loading,itemLayout:"vertical",size:"large",dataSource:this.state.data,renderItem:function(e){return l.a.createElement(ie.a.Item,{key:e.project.name,extra:l.a.createElement("img",{width:120,alt:e.project.name,src:e.project.image.large})},l.a.createElement(ie.a.Item.Meta,{title:e.project.name,description:"Posted by: ".concat(e.user," - ").concat(e.user_title," on ").concat(e.created_at)}),e.description,l.a.createElement("div",{style:{marginTop:"1rem"}},l.a.createElement(y.a,{color:"orange"},e.category)))}})))}}]),t}(n.Component),Ue=(E.a.Content,E.a.Sider,E.a.Footer,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{style:{minHeight:"100vh",lineHeight:"1.6rem"}},l.a.createElement(je,null),l.a.createElement(E.a,null,l.a.createElement(we,null),l.a.createElement(xe.a,{path:"/",exact:!0,component:$}),l.a.createElement(xe.a,{path:"/about",exact:!0,component:ce}),l.a.createElement(xe.a,{path:"/coins",exact:!0,component:S}),l.a.createElement(xe.a,{path:"/coins/:coinId/",exact:!0,component:H}),l.a.createElement(xe.a,{path:"/exchanges/list",exact:!0,component:Pe}),l.a.createElement(xe.a,{path:"/global",exact:!0,component:ke}),l.a.createElement(xe.a,{path:"/empty",exact:!0,component:ye}),l.a.createElement(xe.a,{path:"/events/list",exact:!0,component:pe}),l.a.createElement(xe.a,{path:"/status/list",exact:!0,component:ze})),l.a.createElement(De,null))}}]),t}(n.Component));a(424);c.a.render(l.a.createElement(d.a,null,l.a.createElement(Ue,null)),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.513f21a3.chunk.js.map