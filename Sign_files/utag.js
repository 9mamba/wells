//tealium universal tag - utag.loader ut4.0.202303311922, Copyright 2023 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;window.__tealium_twc_switch=false;try{try{try
{if(utag_data&&utag_data.hasOwnProperty('tealium_js_path')){var new_path=utag_data.tealium_js_path.replace(/\/[^\/]+$/,'/');var utag_cfg_ovrd={path:new_path};}
utag_pad=function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}
return""+d+a};utag_visitor_id=function(t,a,b){a=utag_pad(t,12);b=""+Math.random();a+=utag_pad(b.substring(2,b.length),16);try{a+=utag_pad((navigator.plugins.length?navigator.plugins.length:0),2)}catch(e){};a+=utag_pad(navigator.userAgent.length,3);a+=utag_pad(top.document.URL.length,4);a+=utag_pad(navigator.appVersion.length,3);a+=utag_pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5);return a};var userAgentArr=['GomezAgent'];utag_data.isItDynatrace='false';userAgentArr.forEach(function(userAgentName){if(window.navigator.userAgent.indexOf(userAgentName)>-1){utag_data.isItDynatrace='true';}});}
catch(e){}}catch(e){console.log(e)}}catch(e){console.log(e);}
if(!utag_condload){try{(function(a,b,c){if(typeof utag_data=='undefined')utag_data={};a=location.pathname.split('/');b=(a.length>9)?9:a.length;for(c=1;c<b;c++){utag_data['_pathname'+c]=(typeof a[c]!='undefined')?a[c]:''}})();}catch(e){console.log(e);}}
if(!utag_condload){try{try{try
{switch(utag_data["app_id"].toString().toLowerCase()){case"loginapp":try{utag_data.gbKillSwitch="false";}catch(e){utag.DB(e);}
break;case"oam":try{utag_data.gbKillSwitch="false";}catch(e){utag.DB(e);}
break;case"directpay":try{utag_data.gbKillSwitch="false";}catch(e){utag.DB(e);}
break;}}
catch(e){}}catch(e){console.log(e)}}catch(e){console.log(e);}}
if(!utag_condload){try{try{try
{if(utag_data.app_id.toString().toLowerCase()==='loginapp'.toLowerCase()){utag_data.mpuid=utag_data.wfacookie;}}
catch(e){}}catch(e){console.log(e)}}catch(e){console.log(e);}}
if(!utag_condload){try{try{try
{if(utag_data!==undefined){utag_data.customer_status='n';if(typeof utag_data.customer_type!=='undefined'&&utag_data.customer_type.trim().length>0){utag_data.customer_status='y';}}}
catch(e){}}catch(e){console.log(e)}}catch(e){console.log(e);}}
if(!utag_condload){try{try{try
{function isNotUndefinedOrNull(value){if(typeof value!=="undefined"&&value){return true;}
return false;}
function getDocumentTitleLabel(){var title=utag_data["dom.title"]?utag_data["dom.title"]:document.title;var pageName="";if(isNotUndefinedOrNull(title)){pageName=title;if(title.indexOf(" | Wells Fargo")!==-1){pageName=title.split(" | Wells Fargo")[0];}
if(title.indexOf(" - Wells Fargo")!==-1){pageName=title.split(" - Wells Fargo")[0];}
if(title.indexOf(" – Wells Fargo")!==-1){pageName=title.split(" – Wells Fargo")[0];}
if(title.indexOf("Wells Fargo – ")!==-1){pageName=title.split("Wells Fargo – ")[1];}
if(title.indexOf("Wells Fargo - ")!==-1){pageName=title.split("Wells Fargo - ")[1];}}
return pageName;}
function sendDataToGA(objUtagData,dataObj){if(isNotUndefinedOrNull(dataObj.ga_nonInteraction)&&typeof(dataObj.ga_nonInteraction)=='string'){dataObj.ga_nonInteraction=dataObj.ga_nonInteraction=='false'?false:dataObj.ga_nonInteraction;}
var utagData=JSON.parse(JSON.stringify(objUtagData));for(var key in dataObj){if(dataObj.hasOwnProperty(key)){utagData[key]=dataObj[key]?dataObj[key]:(dataObj[key]===false?false:"");}}
utag.link(utagData,null,[10]);}}
catch(e){}}catch(e){console.log(e)}}catch(e){console.log(e);}}
if(!utag_condload){try{try{if(typeof utag_data.app_id!='undefined'){try{if(utag_data["app_id"].toString().toLowerCase()=="loginapp".toLowerCase()){utag_data.verizonKillSwitch="false";}}catch(e){}}}catch(e){console.log(e)}}catch(e){console.log(e);}}
if(!utag_condload){try{try{if(typeof utag_data.app_id!='undefined'){try{if(utag_data["app_id"].toString().toLowerCase()=="loginapp".toLowerCase()){utag_data.medalliaKillSwitch="false";}}catch(e){}
try{if(utag_data["app_id"].toString().toLowerCase()=="oam".toLowerCase()){utag_data.medalliaKillSwitch="false";}}catch(e){}}}catch(e){console.log(e)}}catch(e){console.log(e);}}
if(typeof utag=="undefined"&&!utag_condload){var utag={id:"wfc.secure-auth",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],db_log:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],lq:[],bq:{},bk:{},rf:0,ri:0,rp:0,rq:[],ready_q:[],sendq:{"pending":0},run_ready_q:function(){for(var i=0;i<utag.loader.ready_q.length;i++){utag.DB("READY_Q:"+i);try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};}},lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d,g){utag.DB('WQ:'+utag.loader.wq.length);try{if(utag.udoname&&utag.udoname.indexOf(".")<0){utag.ut.merge(utag.data,window[utag.udoname],0);}
if(utag.cfg.load_rules_at_wait){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};d=0;g=[];for(a=0;a<utag.loader.wq.length;a++){b=utag.loader.wq[a];b.load=utag.loader.cfg[b.id].load;if(b.load==4){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.load>0){g.push(b);d++;}else{this.f[b.id]=1;}}
for(a=0;a<g.length;a++){utag.loader.AS(g[a]);}
if(d==0){utag.loader.END();}},AS:function(a,b,c,d){utag.send[a.id]=a;if(typeof a.src=='undefined'||!utag.ut.hasOwn(a,'src')){a.src=utag.cfg.path+((typeof a.name!='undefined')?a.name:'ut'+'ag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+(a.v?utag.cfg.template+a.v:utag.cfg.v);utag.rpt['l_'+a.id]=a.src;b=document;this.f[a.id]=0;if(a.load==2){utag.DB("Attach sync: "+a.src);a.uid=a.id;b.write('<script id="utag_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')
if(typeof a.cb!='undefined')a.cb();}else if(a.load==1||a.load==3){if(b.createElement){c='utag_wfc.secure-auth_'+a.id;if(!b.getElementById(c)){d={src:a.src,id:c,uid:a.id,loc:a.loc}
if(a.load==3){d.type="iframe"};if(typeof a.cb!='undefined')d.cb=a.cb;utag.ut.loader(d);}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},OU:function(tid,tcat,a,b,c,d,f,g){g={};utag.loader.RDcp(g);try{if(typeof g['cp.OPTOUTMULTI']!='undefined'){c=utag.loader.cfg;a=utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');for(d=0;d<a.length;d++){b=a[d].split(':');if(b[1]*1!==0){if(b[0].indexOf('c')==0){for(f in utag.loader.GV(c)){if(c[f].tcat==b[0].substring(1))c[f].load=0;if(c[f].tid==tid&&c[f].tcat==b[0].substring(1))return true;}
if(tcat==b[0].substring(1))return true;}else if(b[0]*1==0){utag.cfg.nocookie=true}else{for(f in utag.loader.GV(c)){if(c[f].tid==b[0])c[f].load=0}
if(tid==b[0])return true;}}}}}catch(e){utag.DB(e)}
return false;},RDdom:function(o){var d=document||{},l=location||{};o["dom.referrer"]=d.referrer;o["dom.title"]=""+d.title;o["dom.domain"]=""+l.hostname;o["dom.query_string"]=(""+l.search).substring(1);o["dom.hash"]=(""+l.hash).substring(1);o["dom.url"]=""+d.URL;o["dom.pathname"]=""+l.pathname;o["dom.viewport_height"]=window.innerHeight||(d.documentElement?d.documentElement.clientHeight:960);o["dom.viewport_width"]=window.innerWidth||(d.documentElement?d.documentElement.clientWidth:960);},RDcp:function(o,b,c,d){b=utag.loader.RC();for(d in b){if(d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(utag.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=utag.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";utag.DB(e)};if(utag.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=utag.ut.flatten({va:JSON.parse(a)});utag.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){utag.DB(e)}},RDut:function(o,a){var t={};var d=new Date();var m=(utag.ut.typeOf(d.toISOString)=="function");o["ut.domain"]=utag.cfg.domain;o["ut.version"]=utag.cfg.v;t["tealium_event"]=o["ut.event"]=a||"view";t["tealium_visitor_id"]=o["ut.visitor_id"]=o["cp.utag_main_v_id"];t["tealium_session_id"]=o["ut.session_id"]=o["cp.utag_main_ses_id"];t["tealium_session_number"]=o["cp.utag_main__sn"];t["tealium_session_event_number"]=o["cp.utag_main__se"];try{t["tealium_datasource"]=utag.cfg.datasource;t["tealium_account"]=o["ut.account"]=utag.cfg.utid.split("/")[0];t["tealium_profile"]=o["ut.profile"]=utag.cfg.utid.split("/")[1];t["tealium_environment"]=o["ut.env"]="prod";}catch(e){utag.DB(e)}
t["tealium_random"]=Math.random().toFixed(16).substring(2);t["tealium_library_name"]="ut"+"ag.js";t["tealium_library_version"]=(utag.cfg.template+"0").substring(2);t["tealium_timestamp_epoch"]=Math.floor(d.getTime()/1000);t["tealium_timestamp_utc"]=(m?d.toISOString():"");d.setHours(d.getHours()-(d.getTimezoneOffset()/60));t["tealium_timestamp_local"]=(m?d.toISOString().replace("Z",""):"");utag.ut.merge(o,t,0);},RDses:function(o,a,c){a=(new Date()).getTime();c=(a+parseInt(utag.cfg.session_timeout))+"";if(!o["cp.utag_main_ses_id"]){o["cp.utag_main_ses_id"]=a+"";o["cp.utag_main__ss"]="1";o["cp.utag_main__se"]="1";o["cp.utag_main__sn"]=(1+parseInt(o["cp.utag_main__sn"]||0))+"";}else{o["cp.utag_main__ss"]="0";o["cp.utag_main__se"]=(1+parseInt(o["cp.utag_main__se"]||0))+"";}
o["cp.utag_main__pn"]=o["cp.utag_main__pn"]||"1";o["cp.utag_main__st"]=c;utag.loader.SC("utag_main",{"_sn":(o["cp.utag_main__sn"]||1),"_se":o["cp.utag_main__se"],"_ss":o["cp.utag_main__ss"],"_st":c,"ses_id":(o["cp.utag_main_ses_id"]||a)+";exp-session","_pn":o["cp.utag_main__pn"]+";exp-session"});},RDpv:function(o){if(typeof utag.pagevars=="function"){utag.DB("Read page variables");utag.pagevars(o);}},RDlocalStorage:function(o){if(utag.cfg.ignoreLocalStorage){return;}
Object.keys(window.localStorage).forEach(function(localStorageKey){o["ls."+localStorageKey]=window.localStorage[localStorageKey];});},RDsessionStorage:function(o){if(utag.cfg.ignoreSessionStorage){return;}
Object.keys(window.sessionStorage).forEach(function(sessionStorageKey){o["ss."+sessionStorageKey]=window.sessionStorage[sessionStorageKey];});},RD:function(o,a){utag.DB("utag.loader.RD");utag.DB(o);utag.loader.RDcp(o);if(!utag.loader.rd_flag){utag.loader.rd_flag=1;o["cp.utag_main_v_id"]=o["cp.utag_main_v_id"]||utag.ut.vi((new Date()).getTime());o["cp.utag_main__pn"]=(1+parseInt(o["cp.utag_main__pn"]||0))+"";utag.loader.SC("utag_main",{"v_id":o["cp.utag_main_v_id"]});utag.loader.RDses(o);}
if(a&&!utag.cfg.noview)utag.loader.RDses(o);utag.loader.RDqp(o);utag.loader.RDmeta(o);utag.loader.RDdom(o);utag.loader.RDut(o,a||"view");utag.loader.RDpv(o);utag.loader.RDva(o);utag.loader.RDlocalStorage(o);utag.loader.RDsessionStorage(o);},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)(;secure)?$/;t=(new Date()).getTime();for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){utag.DB(er)};}
o[ck]={};for(f in utag.loader.GV(j)){if(utag.ut.typeOf(j[f])=="array"){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=utag.loader.RC(a,0);for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)(;secure)?$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(utag.ut.typeOf(d[e])=="array")?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)(;secure)?$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in utag.loader.GV(d)){if(utag.ut.typeOf(d[g])=="array"){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x+";secure";return 1},LOAD:function(a,b,c,d){if(!utag.loader.cfg){return}
if(this.ol==0){if(utag.loader.cfg[a].block&&utag.loader.cfg[a].cbf){this.f[a]=1;delete utag.loader.bq[a];}
for(b in utag.loader.GV(utag.loader.bq)){if(utag.loader.cfg[a].load==4&&utag.loader.cfg[a].wait==0){utag.loader.bk[a]=1;utag.DB("blocked: "+a);}
utag.DB("blocking: "+b);return;}
utag.loader.INIT();return;}
utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(utag.cfg.noview!=true){if(utag.loader.cfg[a].send){utag.DB("SENDING: "+a);try{if(utag.loader.sendq.pending>0&&utag.loader.sendq[a]){utag.DB("utag.loader.LOAD:sendq: "+a);while(d=utag.loader.sendq[a].shift()){utag.DB(d);utag.sender[a].send(d.event,utag.handler.C(d.data));utag.loader.sendq.pending--;}}else{utag.sender[a].send('view',utag.handler.C(utag.data));}
utag.rpt['s_'+a]=0;}catch(e){utag.DB(e);utag.rpt['s_'+a]=1;}}}
if(utag.loader.rf==0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
utag.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!utag.data){try{utag.cl={'_all_':1};utag.loader.initdata();utag.loader.RD(utag.data);}catch(e){utag.DB(e)};}
if((document.attachEvent||utag.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;utag.DB("loader.END");b=utag.data;if(utag.handler.base&&utag.handler.base!='*'){e=utag.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")utag.handler.df[e[d]]=b[e[d]]}}else if(utag.handler.base=='*'){utag.ut.merge(utag.handler.df,b,1);}
utag.rpt['r_0']="t";for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}
utag.rpt.ts['s']=new Date();if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");utag.handler.INIT();}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){var t;if(utag.ut.typeOf(a)=="object"){t=utag.handler.C(a)}else{t=a}
utag.db_log.push(t);try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+encodeURIComponent(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a||{},cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a||{},cfg:{cb:c,uids:d}})},track:function(a,b,c,d,e){a=a||{};if(typeof a=="string"){a={event:a,data:b||{},cfg:{cb:c,uids:d}}}
for(e in utag.loader.GV(utag.o)){utag.o[e].handler.trigger(a.event||"view",a.data||a,a.cfg||{cb:b,uids:c})}
a.cfg=a.cfg||{cb:b};if(typeof a.cfg.cb=="function")a.cfg.cb();return true},handler:{base:"page_id,product_code,subproduct_code,app_id,page_type",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){utag.DB('utag.handler.INIT');if(utag.initcatch){utag.initcatch=0;return}
this.iflag=1;a=utag.loader.q.length;if(a>0){utag.DB("Loader queue");for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){utag.DB("Load Rules");for(var d in utag.loader.GV(utag.cond)){utag.cond[d]=false;}
utag.DB(b);utag.loader.loadrules(b);utag.DB(utag.cond);utag.loader.initcfg();utag.loader.OU();for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
utag.DB("RE: "+c);if(c=="alr")utag.DB("All Tags EXTENSIONS");utag.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);utag.rpt['ex_'+d]=0}}catch(er){utag.DB(er);utag.rpt['ex_'+d]=1;utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});}}
utag.DB(b);return g;}},trigger:function(a,b,c,d,e,f){utag.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};utag.DB(b);if(!this.iflag){utag.DB("trigger:called before tags loaded");for(d in utag.loader.f){if(!(utag.loader.f[d]===1))utag.DB('Tag '+d+' did not LOAD')}
utag.loader.q.push({a:a,b:utag.handler.C(b),c:c});return;}
utag.ut.merge(b,this.df,0);utag.loader.RD(b,a);utag.cfg.noview=false;function sendTag(a,b,d){try{if(typeof utag.sender[d]!="undefined"){utag.DB("SENDING: "+d);utag.sender[d].send(a,utag.handler.C(b));utag.rpt['s_'+d]=0;}else if(utag.loader.cfg[d].load!=2){utag.loader.sendq[d]=utag.loader.sendq[d]||[];utag.loader.sendq[d].push({"event":a,"data":utag.handler.C(b)});utag.loader.sendq.pending++;utag.loader.AS({id:d,load:1});}}catch(e){utag.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];if(!utag.loader.OU(utag.loader.cfg[d].tid)){sendTag(a,b,d);}}}else if(utag.cfg.load_rules_ajax){this.RE(a,b,"blr");this.LR(b);this.RE(a,b,"alr");for(f=0;f<utag.loader.cfgsort.length;f++){d=utag.loader.cfgsort[f];if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in utag.loader.GV(utag.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");},C:function(a,b,c){b={};for(c in utag.loader.GV(a)){if(utag.ut.typeOf(a[c])=="array"){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!utag.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;}
return utag.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=utag.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return utag.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||utag.ut.typeOf(c)=="array"){a[p]=c;}else{if(utag.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d]}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){utag.DB(e)};return b},encode:function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e)};return b},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}},loader:function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){m.parentNode.removeChild(m);}
b=a.createElement("iframe");o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}
if(o.id){b.id=o.id};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
if(typeof o.error=="function"){utag.loader.EV(b,"error",o.error);}
if(o.type!="img"){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}}};utag.o['wfc.secure-auth']=utag;utag.cfg={template:"ut4.49.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,noconsole:false,session_timeout:1800000,readywait:0,noload:0,domain:utag.loader.lh(),datasource:"##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),secure_cookie:("##UTSECURECOOKIE##".replace("##"+"UTSECURECOOKIE##","")==="true")?true:false,path:"//static.wellsfargo.com/tracking/secure-auth/",utid:"wfc/secure-auth/202303311922",ignoreSessionStorage:true,ignoreLocalStorage:true};utag.cfg.v=utag.cfg.template+"202303311922";utag.cond={10:0,12:0,13:0,14:0,2:0,7:0,9:0};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(_pd,_pc){var d=_pd||utag.data;var c=_pc||utag.cond;for(var l in utag.loader.GV(c)){switch(l){case'10':try{c[10]|=(d['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&d['page_id'].toString().toLowerCase()=='LOGOUT'.toLowerCase()&&d['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())}catch(e){utag.DB(e)};break;case'12':try{c[12]|=(d['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase())||(d['app_id'].toString().toLowerCase()=='DirectPay'.toLowerCase())||(d['app_id'].toString().toLowerCase()=='OAM'.toLowerCase()&&d['page_id'].toString().toLowerCase()!='INTERDICTION'.toLowerCase())}catch(e){utag.DB(e)};break;case'13':try{c[13]|=(d['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&d['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())||(d['app_id'].toString().toLowerCase()=='oam'.toLowerCase()&&d['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())}catch(e){utag.DB(e)};break;case'14':try{c[14]|=(typeof d['medalliaKillSwitch']!='undefined'&&d['medalliaKillSwitch'].toString().toLowerCase()=='false'.toLowerCase())}catch(e){utag.DB(e)};break;case'2':try{c[2]|=(d['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&d['isItDynatrace'].toString().toLowerCase()=='false'.toLowerCase())}catch(e){utag.DB(e)};break;case'7':try{c[7]|=(d['gbKillSwitch'].toString().toLowerCase()=='false'.toLowerCase())}catch(e){utag.DB(e)};break;case'9':try{c[9]|=(d['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&d['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase()&&d['isItDynatrace'].toString().toLowerCase()=='false'.toLowerCase())}catch(e){utag.DB(e)};break;}}};utag.pre=function(){utag.loader.initdata();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){try{if(1){function isAndroid8(){var pattern=/Android 8/gi;return pattern.test(window.navigator.userAgent);}
utag_data.isAndroid8=isAndroid8();if(isAndroid8()){utag_data.medalliaKillSwitch="true";}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){try{b['random']=(Math.random()*10000000000000)+""}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(typeof b['cp.utag_main_v_id']=='undefined'){try{b['visitor_id']=utag_visitor_id((new Date()).getTime())}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(typeof b['cp.utag_main_v_id']!='undefined'){b['visitor_id']=b['cp.utag_main_v_id']}}catch(e){utag.DB(e);}},function(a,b){try{if(typeof b['cp.utag_main_v_id']=='undefined'){utag.loader.SC('utag_main',{'v_id':b['visitor_id']});b['cp.utag_main_v_id']=b['visitor_id'];}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['gtag_base_url']=b.tealium_js_path.replace("secure-auth/utag.js","ga/gtag.js")}catch(e){};try{b['ga_analytics_base_url']=b.tealium_js_path.replace("secure-auth/utag.js","ga/ga.js")}catch(e){};try{b['ga_conversion_async_base_url']=b.tealium_js_path.replace("secure-auth/utag.js","ga/ga_conversion_async.js")}catch(e){};try{b['gtag_base_path']=b.tealium_js_path.replace("secure-auth/utag.js","ga/")}catch(e){};try{b['gtag_domain']=b.tealium_js_path.split('/')[2].split(':')[0]}catch(e){};try{b['gtag_port']=b.tealium_js_path.indexOf('24800')!==-1?24800:443;}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(utag_data.page_id.toString().toLowerCase()=="LOGIN".toLowerCase()){var signOnButton=document.querySelector("[class^=Login__signOnButton]>button");signOnButton.addEventListener("click",function(event){var signOnObj={};signOnObj.ga_eventName="sign_on_click";signOnObj.ga_eventCategory="account";signOnObj.ga_eventAction="login page sign on click";signOnObj.ga_nonInteraction="false";signOnObj.ga_eventLabel=getDocumentTitleLabel();sendDataToGA(utag_data,signOnObj);});}}}catch(e){utag.DB(e)}},function(a,b){try{if((b['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&b['page_id'].toString().toLowerCase()=='LOGIN'.toLowerCase()&&b['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())||(b['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&b['page_id'].toString().toLowerCase()=='BIZ_LOGIN'.toLowerCase()&&b['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())){var enrollButton=document.querySelector("a[data-accessible-id] div");enrollButton.addEventListener("click",function(event){var evt=event.currentTarget;var enrollButtonObj={};enrollButtonObj.ga_eventName="key_interaction";enrollButtonObj.ga_eventCategory="navigation";enrollButtonObj.ga_eventAction="top nav";enrollButtonObj.ga_nonInteraction="false";enrollButtonObj.ga_eventLabel=evt.innerText?evt.innerText:"";sendDataToGA(utag.data,enrollButtonObj);});}}catch(e){utag.DB(e)}},function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[59]=='undefined'){utag.runonce.ext[59]=1;if((b['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&b['device_type'].toString().toLowerCase()=='MOBILE'.toLowerCase()&&b['page_id'].toString().toLowerCase()=='MOBILEBROWSER_LOGIN'.toLowerCase()&&b['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())){var loginPageObj=function(evtCat,evtAction,evtLabel){var dataObj={};dataObj.ga_eventName="key_interaction";dataObj.ga_eventCategory=evtCat;dataObj.ga_eventAction=evtAction;dataObj.ga_eventLabel=evtLabel;dataObj.ga_nonInteraction="false";sendDataToGA(utag.data,dataObj);};var unPWSUFields=document.querySelectorAll("[class*=WFInput__inputContainer], [class*=Login__checkboxLabel]");var menuButton=document.querySelector("[class*=MenuButton__button]");if(unPWSUFields.length){Array.prototype.forEach.call(unPWSUFields,function(actionBtn){actionBtn.addEventListener('click',function(event){var evt=event.currentTarget;if(evt.className.indexOf("WFInput__inputContainer")!==-1){var evtActionGrab=this.querySelector("[class*=WFInput__inputContainer] > label");var evtAction=evtActionGrab?evtActionGrab.innerText+" click":"";}else if(evt.className.indexOf("WFField__field")!==-1){var inputName=evt.innerText;var inputValueGrab=document.querySelector("[class*=Login__checkboxLabel] > div > input").value;var inputValue=inputValueGrab?inputValueGrab:"";if(inputValue==="true"){var evtAction=inputName+": "+"false";}else if(inputValue==="false"){var evtAction=inputName+": "+"true";}}
loginPageObj("account",evtAction,utag.data["dom.title"]);});});}
if(menuButton){menuButton.addEventListener('click',function(event){setTimeout(function(){var enrollButton=document.querySelector("[class*=Enroll__enroll]");if(isNotUndefinedOrNull(enrollButton)){enrollButton.addEventListener('click',function(event){var evt=event.currentTarget;var evtLabel=evt.innerText?evt.innerText:"";loginPageObj("navigation","top nav",evtLabel);});}},50);});}}}}catch(e){utag.DB(e)}}];utag.handler.cfg_extend=[{"id":"83","bwq":0,"alr":0,"blr":1,"end":0},{"alr":1,"blr":0,"end":0,"id":"8","bwq":0},{"alr":1,"blr":0,"end":0,"id":"9","bwq":0},{"end":0,"blr":0,"alr":1,"bwq":0,"id":"10"},{"alr":1,"blr":0,"end":0,"id":"12","bwq":0},{"alr":1,"blr":0,"end":0,"id":"38","bwq":0},{"id":"53","bwq":0,"alr":0,"blr":0,"end":1},{"id":"70","bwq":0,"alr":0,"blr":0,"end":1},{"end":1,"blr":0,"alr":0,"bwq":0,"id":"59"}];utag.loader.initcfg=function(){utag.loader.cfg={"3":{load:utag.cond[2],send:1,v:202112091836,wait:1,tid:4001},"4":{load:utag.cond[2],send:1,v:202108231941,wait:1,tid:20011},"5":{load:(utag.cond[12]&&utag.cond[7]),send:1,v:202303201648,wait:1,tid:20067},"7":{load:utag.cond[9],send:1,v:202010230514,wait:1,tid:7132},"10":{load:utag.cond[9],send:1,v:202302082203,wait:1,tid:7133},"9":{load:utag.cond[2],send:1,v:202108231941,wait:1,tid:4049},"14":{load:utag.cond[10],send:1,v:202107202210,wait:1,tid:20011},"15":{load:utag.cond[2],send:1,v:202109220050,wait:1,tid:25016},"21":{load:(utag.cond[14]&&utag.cond[13]),send:1,v:202210132016,wait:1,tid:20067}};utag.loader.cfgsort=["3","4","5","7","10","9","14","15","21"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};utag.loader.PINIT=function(a,b,c){utag.DB("Pre-INIT");if(utag.cfg.noload){return;}
try{this.GET();if(utag.handler.RE('view',utag.data,"blr")){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr");utag.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1){if(utag.loader.bk[b.id]||((utag.cfg.readywait||utag.cfg.noview)&&b.load==4)){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.wait==1&&utag.loader.rf==0){utag.DB('utag.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){utag.DB('utag.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();}});else if(this.lq.length>0)utag.loader.rf=1;else if(this.lq.length==0)utag.loader.END();return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{try{if((utag.data['app_id'].toString().toLowerCase()=='loginapp'.toLowerCase()&&utag.data['page_type'].toString().toLowerCase()=='BROWSER'.toLowerCase())){function checkStorage(key){if(!!window.sessionStorage&&window.sessionStorage.getItem(key)){return window.sessionStorage.getItem(key);}
return null;}
function setStorage(key,val){if(!!window.sessionStorage){window.sessionStorage.setItem(key,val);}}
function idlResponseHandler(){if(this.readyState===4&&this.status===200){if(this.responseText&&this.responseText!=="{}"){try{var data=JSON.parse(this.responseText);if(data&&data.idl&&(data.idl.length===49||data.idl.length===70)){utag_data.idl=data.idl;setStorage(idlStorageKey,data.idl);}}catch(e){}}}}
function getIDL(){var xhr=new XMLHttpRequest();xhr.open("GET","https://api.rlcdn.com/api/identity/idl?pid=1317");xhr.withCredentials=true;xhr.timeout=250;xhr.onreadystatechange=idlResponseHandler;xhr.send();}
var idlStorageKey="liveramp-idl";var idl=checkStorage(idlStorageKey);if(!idl){if(window.utag_cfg_ovrd!==undefined&&window.utag_cfg_ovrd.dom_complete!==undefined&&window.utag_cfg_ovrd.dom_complete===true){setTimeout(getIDL,25);}
else{getIDL();}}
else{utag_data.idl=idl;}}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};}})
if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.cfg.readywait=1;utag.DB('READY:utag.cfg.readywait');setTimeout(function(){utag.loader.PINIT()},utag.cfg.waittimer||1);}})}else{utag.loader.PINIT()}}