if (self.CavalryLogger) { CavalryLogger.start_js(["3yDMG"]); }

__d("ContextualLayerFollowCursor",["Event","SubscriptionsHandler","getContextualLayerCursorOffset"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._onMouseMove=function(event){if(!event&&!this._mouseX&&!this._mouseY)return;this._mouseX=event?event.clientX:this._mouseX;this._mouseY=event?event.clientY:this._mouseY;var a=b("getContextualLayerCursorOffset")(this._layer,this._mouseX,this._mouseY),c=a.offsetX;a=a.offsetY;this._layer.setOffsetX(this._originalOffsetX+c).setOffsetY(this._originalOffsetY+a)}.bind(this),this._layer=a}a.prototype.enable=function(){"use strict";this._subscriptionsHandler=new(b("SubscriptionsHandler"))(),this._subscriptionsHandler.addSubscriptions(this._layer.subscribe("adjust",function(a,b){typeof this._originalOffsetX!=="number"&&(this._originalOffsetX=b.getOffsetX(),this._originalOffsetY=b.getOffsetY()),this._onMouseMove()}.bind(this)),this._layer.subscribe("aftershow",function(){this._onMouseMove()}.bind(this)),b("Event").listen(this._layer.getContext(),"mousemove",this._onMouseMove)),this._layer.updatePosition()};a.prototype.disable=function(){"use strict";this._subscriptionsHandler.release()};e.exports=a}),null);
__d("FBTooltipFollowCursor.react",["ContextualLayer.react","ContextualLayerFollowCursor","React","ReactDOM","areEqual"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"FBTooltipFollowCursor",propTypes:{position:a.oneOf(["above","below","left","right"]).isRequired,tooltip:a.any,padding:a.number,margin:a.number,backgroundColor:a.string,textColor:a.string,borderRadius:a.number},getDefaultProps:function(){return{padding:5,margin:10,backgroundColor:"#272727",textColor:"white",borderRadius:2}},getInitialState:function(){return{shown:!1,triangleStyle:null}},componentDidMount:function(){var a=this.refs.contextualLayer.layer;this._subscription=a.subscribe("adjust",this._computeTriangleStyle)},shouldComponentUpdate:function(a,c){return!b("areEqual")(this.props,a)||!b("areEqual")(this.state,c)},render:function(){return b("React").createElement("span",babelHelpers["extends"]({},this.props,{onMouseOver:this._onMouseOver,onMouseOut:this._onMouseOut}),this.props.children,this.renderTooltip())},_onMouseOver:function(){this.setState({shown:!0})},_onMouseOut:function(){this.setState({shown:!1})},componentWillUnmount:function(){this._subscription.unsubscribe(),this._subscription=null},_onToggle:function(a){this.setState({shown:a})},renderTooltip:function(){__p&&__p();var a,c,d=0,e=0;switch(this.props.position){case"above":a="above";c="center";e=-this.props.margin;break;case"left":a="left";c="left";d=-this.props.margin;break;case"right":a="right";c="right";d=this.props.margin;break;case"below":a="below";c="center";e=this.props.margin;break}return b("React").createElement(b("ContextualLayer.react"),{ref:"contextualLayer",behaviors:{ContextualLayerFollowCursor:b("ContextualLayerFollowCursor")},context:this,shown:this.state.shown,position:a,alignment:c,offsetX:d,offsetY:e,onToggle:this._onToggle},b("React").createElement("div",{ref:"tooltip",style:{padding:this.props.padding,backgroundColor:this.props.backgroundColor,borderRadius:this.props.borderRadius,color:this.props.textColor}},this.state.triangleStyle?b("React").createElement("div",{style:this.state.triangleStyle}):null,this.props.tooltip))},_computeTriangleStyle:function(){__p&&__p();var a=this.props.margin/2+"px solid transparent",c=this.props.margin/2+"px solid "+this.props.backgroundColor,d=b("ReactDOM").findDOMNode(this.refs.tooltip),e=d.offsetWidth;d=d.offsetHeight;var f={position:"absolute",zIndex:1};switch(this.props.position){case"above":f.top=d;f.left=(e-this.props.margin)/2;f.borderTop=c;f.borderLeft=a;f.borderRight=a;break;case"left":f.top=(d-this.props.margin)/2;f.left=e;f.borderLeft=c;f.borderTop=a;f.borderBottom=a;break;case"right":f.top=(d-this.props.margin)/2;f.left=-this.props.margin/2;f.borderRight=c;f.borderTop=a;f.borderBottom=a;break;case"below":f.top=-this.props.margin/2;f.left=(e-this.props.margin)/2;f.borderBottom=c;f.borderLeft=a;f.borderRight=a;break}this.setState({triangleStyle:f})}});e.exports=c}),null);
__d("PopularHoursTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:PopularHoursLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:PopularHoursLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PopularHoursLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEventDescription=function(a){this.$1.event_description=a;return this};a.prototype.setEventType=function(a){this.$1.event_type=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={event_description:!0,event_type:!0,page_id:!0,surface:!0,vc:!0};e.exports=a}),null);
__d("PageHoursHistogram.react",["cx","DateConsts","FBTooltipFollowCursor.react","List.react","PopularHoursTypedLogger","React","XUICard.react","XUICardSection.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=[6,9,12,15,18,21,24,3],j=5,k=4;function l(a){var b=a<12||a>=24?"AM":"PM";a=a%12===0?12:a%12;return a+b}c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a),this.date=new Date(),this.state={firstDraw:!0,dayShown:(this.date.getDay()+6)%b("DateConsts").DAYS_PER_WEEK}}a.prototype.render=function(){return b("React").createElement(b("XUICard.react"),{className:"_5x_j"},b("React").createElement(b("XUICardSection.react"),{className:"_5x_k _2pid"},this.$1(),this.$2(),this.$3()))};a.prototype.$2=function(){if(this.props.trafficInfo===null)return null;var a=this.state.firstDraw,c=(this.state.dayShown+1)%b("DateConsts").DAYS_PER_WEEK;c=this.props.trafficInfo[this.state.dayShown].slice(j).concat(this.props.trafficInfo[c].slice(0,k));var d=Math.max.apply(Math,c)||1;c=c.map(function(c,e){c=c*100/d;return b("React").createElement("li",{className:"_5x_l",key:e},b("React").createElement("div",{className:"_5x_m",style:{height:a?"0":c+"%"}},b("React").createElement(b("FBTooltipFollowCursor.react"),{position:"above",tooltip:l(j+e)+" - "+l(j+1+e)})))});return b("React").createElement(b("List.react"),{border:"none",className:"_5x_n",direction:"horizontal",spacing:"none"},c)};a.prototype.$1=function(){if(this.props.trafficInfo===null)return null;var a=this.props.days.map(function(a,c){return b("React").createElement("li",{className:"_5x_o"+(c===this.state.dayShown?" _5x_r":""),key:c,onClick:function(){return this.$4(c)}.bind(this)},a)}.bind(this));return b("React").createElement(b("List.react"),{border:"none",className:"_5x_u",direction:"horizontal",spacing:"none"},a)};a.prototype.componentDidMount=function(){this.setState({firstDraw:!1}),this.$5("react_render","")};a.prototype.$4=function(a){this.setState({dayShown:a}),this.$6(a)};a.prototype.$5=function(a,c){new(b("PopularHoursTypedLogger"))().setPageID(this.props.pageId).setEventType(a).setSurface(this.props.surface).setEventDescription(c).log()};a.prototype.$6=function(a){this.$5("interaction",a.toString())};a.prototype.$3=function(){if(this.props.trafficInfo===null)return null;var a=i.map(function(a,c){return b("React").createElement("li",{className:"_5y0l",key:c},l(a))});return b("React").createElement(b("List.react"),{border:"none",className:"_2pic",direction:"horizontal",spacing:"none"},a)};e.exports=a}),null);
__d("PageContentTabRightsManagerBootloader",["PageContentTabRightsManagerStore"],(function(a,b,c,d,e,f){"use strict";e.exports={bootloadRightsManagerStore:function(a){b("PageContentTabRightsManagerStore").init(a.userAccessToken,a.rightsManagerVersion,a.hasUploadedReferenceFiles,a.hasSetUpMatchSettings,a.numVideosImported,a.totalVideosToImport)}}}),null);
__d("ReactComposerWorkFeedActionTypes",["keyMirror"],(function(a,b,c,d,e,f){e.exports=b("keyMirror")({SET_DISPLAY_STATE:null,SET_TARGET:null,SET_WORK_PROPS:null})}),null);
__d("Video.react",["React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.componentDidMount=function(){"use strict";var a=b("ReactDOM").findDOMNode(this.refs.video);this.props.paused&&a&&a.pause&&a.pause()};a.prototype.UNSAFE_componentWillUpdate=function(a,c){"use strict";c=b("ReactDOM").findDOMNode(this.refs.video);a.playbackRate&&(c.playbackRate=a.playbackRate);a.paused!=this.props.paused&&c&&(a.paused&&c.pause?c.pause():c.play&&c.play())};a.prototype.render=function(){"use strict";return b("React").createElement("video",babelHelpers["extends"]({},this.props,{ref:"video"}))};function a(){"use strict";g.apply(this,arguments)}a.propTypes={autoPlay:c.bool,paused:c.bool,controls:c.bool,height:c.oneOfType([c.string,c.number]),loop:c.bool,muted:c.bool,onAbort:c.func,onCanPlay:c.func,onCanPlayThrough:c.func,onDurationChange:c.func,onEmptied:c.func,onEncrypted:c.func,onEnded:c.func,onError:c.func,onLoadedData:c.func,onLoadedMetadata:c.func,onLoadStart:c.func,onPause:c.func,onPlay:c.func,onPlaying:c.func,onProgress:c.func,onRateChange:c.func,onSeeked:c.func,onSeeking:c.func,onStalled:c.func,onSuspend:c.func,onTimeUpdate:c.func,onVolumeChange:c.func,onWaiting:c.func,playbackRate:c.number,poster:c.string,src:c.string.isRequired,width:c.oneOfType([c.string,c.number])};e.exports=a}),null);
__d("getRangeBoundingClientRect",["getRangeClientRects"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();a=b("getRangeClientRects")(a);var c=0,d=0,e=0,f=0;if(a.length){if(a.length>1&&a[0].width===0){var g=a[1];c=g.top;d=g.right;e=g.bottom;f=g.left}else{g=a[0];c=g.top;d=g.right;e=g.bottom;f=g.left}for(var g=1;g<a.length;g++){var h=a[g];h.height!==0&&h.width!==0&&(c=Math.min(c,h.top),d=Math.max(d,h.right),e=Math.max(e,h.bottom),f=Math.min(f,h.left))}}return{top:c,right:d,bottom:e,left:f,width:d-f,height:e-c}}e.exports=a}),null);
__d("ComposedLinkEntityProperties",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({URL:"url",SHIMMED_URL:"shimmedURL",HOVERCARD_ENDPOINT:"hovercard_endpoint"})}),null);
__d("XReactComposerTargetChangeController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/target/change/",{composer_id:{type:"String",required:!0},composer_type:{type:"Enum",required:!0,enumType:1},target_id:{type:"String"}})}),null);