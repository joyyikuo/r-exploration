if (self.CavalryLogger) { CavalryLogger.start_js(["OC\/ve"]); }

__d("FantaReducersSharePreview",["Bootloader","FantaMessageActions","FantaTypeSharePreview","immutable","ifRequired","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FantaMessageActions").Types,h="scraperLastPermissiveMatch";function a(a,b){switch(b.type){case g.COMPOSER_TEXT_UPDATE:var c=b.message,d=b.threadID;b=b.composer;var e=a.mercury.tabContents.get(d);if(!e||e&&e.composer.version!==b.version)return a;a=i(a,c,d)}return a}function i(a,c,d){__p&&__p();b("ifRequired")("URLMatcher",function(e){__p&&__p();b("ifRequired")("DataStore",function(b){__p&&__p();if(c.length===0)b.remove(d,h);else{var f=a.mercury.tabContents.get(d);if(!f)return a;if(!e.trigger(c+" ")){f=e.match(c);var g=e.permissiveMatch(c);g&&g!==b.get(d,h)&&(b.set(d,h,g),a=a.mergeIn(["mercury","tabContents",d,"composer","sharePreview"],{params:null,type:null,uri:f||g}))}}})},function(){b("Bootloader").loadModules(["URLMatcher","DataStore"],function(e,f){if(c.length>0){e=a.mercury.tabContents.get(d);var g=e&&e.composer;b("setImmediate")(function(){b("FantaMessageActions").composerTextUpdate(d,c,g)})}},"FantaReducersSharePreview")});return a}function c(a,b){switch(b.type){case g.LINK_PREVIEW:var c=b.uri;b=b.tabID;if(!a.mercury.tabContents.get(b))return a;a=a.mergeIn(["mercury","tabContents",b,"composer","sharePreview"],{params:null,type:null,uri:c})}return a}function d(a,c){switch(c.type){case g.LOADED_SHARE_DATA:var d=c.attachmentData,e=c.composer;c=c.tabID;d=d.share_data;var f=a.mercury.tabContents.get(c);if(!f||f.composer.version!==e.version)return a;a=a.mergeIn(["mercury","tabContents",c,"composer","sharePreview"],{isLoading:!1,params:b("immutable").Map({data:d.share_params}),type:d.share_type})}return a}function f(a,b){switch(b.type){case g.LOADING_SHARE_DATA:var c=b.composer;b=b.tabID;var d=a.mercury.tabContents.get(b);if(!d||d.composer.version!==c.version)return a;a=a.mergeIn(["mercury","tabContents",b,"composer","sharePreview"],{isLoading:!0,params:null,type:null})}return a}function j(a,b){switch(b.type){case g.REMOVE_SHARE_PREVIEW:b=b.tabID;a=k(a,b)}return a}function k(a,c){return!a.mercury.tabContents.get(c)?a:a.setIn(["mercury","tabContents",c,"composer","sharePreview"],new(b("FantaTypeSharePreview"))())}e.exports={closeTab:j,composerTextUpdate:a,linkPreview:c,loadedShareData:d,loadingShareData:f}}),null);
__d("DesktopConfirmationCloseButtonHandler",["DOM","TimelineController","$"],(function(a,b,c,d,e,f){"use strict";a={adjustOnClick:function(a){b("DOM").remove(b("$")(a)),b("TimelineController").dismissStickyHeaderConfirmationBar()}};e.exports=a}),null);