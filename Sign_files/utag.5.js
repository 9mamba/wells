//tealium universal tag - utag.5 ut4.0.202303201648, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}
return b}
u.ev={"view":1};u.scriptrequested=false;u.rp=function(a,b){if(typeof a!=="undefined"&&a.indexOf("@@")>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return u.encode(b[d]);}else{return"";}});}
return a;};u.map={};u.extend=[function(a,b){try{if(1){try{b['gb_base_url']=b.tealium_js_path.replace("secure-auth/utag.js","gb/detector-dom.min.js")}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){var glassbox_server_host="https://rubicon.wellsfargo.com";var glassbox_server_path="/glassbox/reporting/0C458F45-AC71-02CE-34D8-401C8A313B38/cls_report";if(b!==undefined&&b.environment!==undefined&&b.gb_rubicon_host!==undefined){if(b.environment.toUpperCase()=="PROD"||b.environment.toUpperCase()=="PRODUCTION"){b.gb_rubicon_url=glassbox_server_host+glassbox_server_path;}else{b.gb_rubicon_url=b.gb_rubicon_host+glassbox_server_path;}}else{b.gb_rubicon_url=glassbox_server_host+glassbox_server_path;}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&"||"&","kvp_delim":"="||"=","qs_delim":"?"||"?","tag_type":"script","base_url":"https://static.wellsfargo.com/tracking/gb/detector-dom.min.js","secure_base_url":"","static_params":"","cachebust":"disabled","cachevar":""||"_rnd","requestscriptonce":"enabled"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};u.data.base_url=b.gb_base_url;utag.DB("send:5:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){c.push(e[f]+"##kvp_delim##"+u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
if(!u.data.base_url){if(!u.data.secure_base_url){utag.DB("Error: No Base URL or Secure HTTPS Override Provided.");return;}else{u.data.base_url=u.data.secure_base_url;utag.DB("No Base URL provided, using Secure HTTPS Override.");}}
u.data.secure_base_url=u.data.secure_base_url||u.data.base_url;u.data.url=(location.protocol==="https:"?u.data.secure_base_url:u.data.base_url);if(u.data.url.indexOf("http")!==0&&u.data.url.indexOf("/")!==0){u.data.url=location.protocol+"//"+u.data.url;}
if(u.data.static_params){c.push(u.data.static_params);}
var cb_check=new RegExp("(\\"+u.data.qs_delim+"|"+u.data.qsp_delim+")"+u.data.cachevar+"=");if(u.data.cachebust==="enabled"&&!cb_check.test(u.data.url)){c.push([u.data.cachevar,Math.random()].join(u.data.kvp_delim));}
if(c.length>0){if(u.data.url.indexOf(u.data.qs_delim)<0){u.data.url+=u.data.qs_delim;}else if(u.data.url.indexOf(u.data.qs_delim)!==(u.data.url.length-1)){u.data.url+=u.data.qsp_delim;}}
u.data.url=u.rp(u.data.url,b)+u.rp(c.join(u.data.qsp_delim),b);u.data.url=u.data.url.replace(/##kvp_delim##/g,u.data.kvp_delim);u.callback=u.callback||function(){};if(u.data.requestscriptonce==="enabled"&&u.data.tag_type==="script"){if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_5","cb":u.callback,"attrs":{"id":"_cls_detector","data-clsconfig":"reportURI="+b.gb_rubicon_url+";clientAttributesEnabled=true;clientAttributesMaxLength=150;recordConsoleErrors=true;recordScrolls=true;recordMouseMoves=true;recordErrors=true;recordHovers=true;idleEventTimeInterval=-1;reportInterval=60000;interceptAjax=true;ajaxRecordMetadata=never;domMaskingMode=blacklist;domBlacklistMaskContentByClass=pmask;valueMaskingMode=blacklist;maskBlacklistValueByClass=pmask;domKeepScriptMatching=utag_data;captureGlobalObjects=utag_data;domTamperingDetectionEnabled=true;domOmitById=keypad;captureGlobalObjectsOnSegmentChange=true;devToolsDebuggerBasedDetection=false;ajaxRecordRequestHeaders=hostMatches(wellsfargo);ajaxRecordResponseHeaders=hostMatches(wellsfargo);ajaxRecordStats=hostMatches(wellsfargo);"
}});}else{u.callback();}}else{u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_5","cb":u.callback,"attrs":{"id":"_cls_detector","data-clsconfig":"reportURI="+b.gb_rubicon_url+";clientAttributesEnabled=true;clientAttributesMaxLength=150;recordConsoleErrors=true;recordScrolls=true;recordMouseMoves=true;recordErrors=true;recordHovers=true;idleEventTimeInterval=-1;reportInterval=60000;interceptAjax=true;ajaxRecordMetadata=never;domMaskingMode=blacklist;domBlacklistMaskContentByClass=pmask;valueMaskingMode=blacklist;maskBlacklistValueByClass=pmask;domKeepScriptMatching=utag_data;captureGlobalObjects=utag_data;domTamperingDetectionEnabled=true;domOmitById=keypad;captureGlobalObjectsOnSegmentChange=true;devToolsDebuggerBasedDetection=false;ajaxRecordRequestHeaders=hostMatches(wellsfargo);ajaxRecordResponseHeaders=hostMatches(wellsfargo);ajaxRecordStats=hostMatches(wellsfargo);"}});}
utag.DB("send:5:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("5","wfc.secure-auth"));}catch(error){utag.DB(error);}
