if (self.CavalryLogger) { CavalryLogger.start_js(["bgcN3"]); }

__d("AdsStockImageSourceImageProviderPlugin",["AdsStockImageSourceDataLoaderV2","AdsStockImageSourceImageListLoadedAction","LoadObjectMap","LoadObjectMapMutationUtil","promiseDone","promiseLoadObjectsFromKeys"],(function(a,b,c,d,e,f){"use strict";a={initialState:function(a){return new(b("LoadObjectMap"))(function(c){a(function(a){return b("LoadObjectMapMutationUtil").setValueListToLoading(a,c)}),b("promiseDone")(b("promiseLoadObjectsFromKeys")(c,b("AdsStockImageSourceDataLoaderV2").loadOne),function(a){b("AdsStockImageSourceImageListLoadedAction").dispatch({imageDataList:Array.from(a.values()).map(function(a){return a.getValueEnforcing()}),imageIDList:Array.from(a.keys())})})},function(a){return a.isDone()&&!a.hasValue()})}};e.exports=a}),null);