if (self.CavalryLogger) { CavalryLogger.start_js(["eK++4"]); }

__d("adsCanvasUnifiedBuilderProductSetElementSelector",["invariant","AdsAPIObjectives","AdsCanvasProductSetElement","AdsDynamicTemplatePluginResolver","adsCanvasEditingDisabledSelector","adsCanvasElementSelector","adsCreateStoreSelector","adsProductSetVerticalSelector"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("adsCreateStoreSelector")([].concat(b("adsCanvasElementSelector").getStores(),b("adsProductSetVerticalSelector").getStores(),b("adsCanvasEditingDisabledSelector").getStores()),function(a){a=b("adsCanvasElementSelector")(a);if(!a.hasValue())return{isReady:!1};a=a.getValueEnforcing();a instanceof b("AdsCanvasProductSetElement")||g(0);var c=b("adsProductSetVerticalSelector")(a.setID);return{disabled:b("adsCanvasEditingDisabledSelector")(),isReady:!0,productSetElement:a,showAdvancedOption:a.setID!=null,templatePlugin:c.map(function(a){return b("AdsDynamicTemplatePluginResolver").resolve({objective:b("AdsAPIObjectives").NONE,vertical:a})})}},e.id+".selector");e.exports=a}),null);