if (self.CavalryLogger) { CavalryLogger.start_js(["pBswb"]); }

__d("AARRGGBBColor",[],(function(a,b,c,d,e,f){"use strict";function a(a){return"#"+a.slice(2)}e.exports={toHex:a}}),null);
__d("MessengerColors",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){b===void 0&&(b=!1);var c=100/(a.length-1);b=b?a.slice():a.slice().reverse();a=b.map(function(a,b){return a+" "+b*c+"%"}).join(",");return"radial-gradient(circle at center 75%, "+a+")"}e.exports={makeRadialGradient:a}}),null);
__d("MessengerThreadTheme",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a&&a.gradient_colors&&a.gradient_colors.length}e.exports={isGradient:a}}),null);
__d("CustomizeChatColorItem.react",["CustomizeChatGradientItem.react","CustomizeChatSolidItem.react","MessengerThreadTheme","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("MessengerThreadTheme").isGradient;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props.theme;return h(a)?b("React").createElement(b("CustomizeChatGradientItem.react"),this.props):b("React").createElement(b("CustomizeChatSolidItem.react"),this.props)};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("CustomizeChatGrid.react",["cx","Grid.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("Grid.react").GridItem;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.items,d=a.isSelectedAccessor,e=a.renderItem,f=a.onSelect;a=a.cols;return b("React").createElement(b("Grid.react"),{cols:a,className:"_3dz6",alignh:"center"},c.map(function(a,c){var g=d(a);return b("React").createElement(i,{key:c,onClick:function(){return f(a)},className:"_3dz9"},b("React").createElement("div",{className:"_3dza"+(g?" _3dzb":"")},e(a,g)))}))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("SpinnerWithTimeout.react",["FDSSpinner.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={showSpinner:!1},b}a.prototype.componentDidMount=function(){this.$2=!0};a.prototype.componentWillUnmount=function(){this.$1&&clearTimeout(this.$1),this.$2=!1};a.prototype.$3=function(){this.$2&&this.setState({showSpinner:!0})};a.prototype.render=function(){var a=this.props,c=a.timeout;a=babelHelpers.objectWithoutProperties(a,["timeout"]);this.$1||(this.$1=setTimeout(function(){this.$3()}.bind(this),c));c=this.state.showSpinner;return c?b("React").createElement(b("FDSSpinner.react"),a):b("React").createElement("div",null)};a.defaultProps={shade:"dark",size:"large"};e.exports=a}),null);
__d("CustomizeChatColorGrid.react",["cx","CustomizeChatColorItem.react","CustomizeChatGrid.react","SpinnerWithTimeout.react","MercuryThreadActions","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("MercuryThreadActions").get(),j="196241301102133";c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.$1=function(a){var b=this.props.threadID;i.changeThreadTheme(b,a.id,"SETTINGS");this.props.onSelect()}.bind(this),b}a.prototype.render=function(){var a=this.props,c=a.thread;a=a.themes;if(!a||a.length===0||!c)return b("React").createElement("div",{className:"_1s20"},b("React").createElement(b("SpinnerWithTimeout.react"),{timeout:1e3,center:!0}));var d=c.theme_id||j;return b("React").createElement(b("CustomizeChatGrid.react"),{items:a,cols:4,isSelectedAccessor:function(a){return a.id==d},onSelect:this.$1,renderItem:function(a,c){return b("React").createElement(b("CustomizeChatColorItem.react"),{theme:a,isSelected:c})}})};e.exports=a}),null);
__d("ChatEmojiCategories",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a=[{name:g._("Smileys & People"),icon:[128515],emojis:[[128512],[128556],[128513],[128514],[128515],[128516],[128517],[128518],[128519],[128521],[128522],[128578],[128579],[9786],[128523],[128524],[128525],[128536],[128535],[128537],[128538],[128540],[128541],[128539],[129297],[129299],[128526],[129303],[128527],[128566],[128528],[128529],[128530],[128580],[129300],[128563],[128542],[128543],[128544],[128545],[128532],[128533],[128577],[9785],[128547],[128534],[128555],[128553],[128548],[128558],[128561],[128552],[128560],[128559],[128550],[128551],[128549],[128546],[128554],[128531],[128557],[128565],[128562],[129296],[128567],[129298],[129301],[128564],[128164],[128169],[128520],[128127],[128121],[128122],[128128],[128123],[128125],[129302],[128570],[128568],[128569],[128571],[128572],[128573],[128576],[128575],[128574],[128588],[128079],[128075],[128077],[128078],[128074],[9994],[9996],[128076],[9995],[128080],[128170],[128591],[9757],[128070],[128071],[128072],[128073],[128405],[128400],[129304],[128406],[9997],[128133],[128068],[128069],[128066],[128067],[128065],[128064],[128100],[128101],[128483],[128118],[128102],[128103],[128104],[128105],[128113],[128116],[128117],[128114],[128115],[128110],[128119],[9937],[128130],[128373],[127877],[128124],[128120],[128112],[128694],[127939],[128131],[128111],[128107],[128108],[128109],[128583],[128129],[128581],[128582],[128587],[128590],[128589],[128135],[128134],[128145],[128105,8205,10084,65039,8205,128104],[128104,8205,10084,65039,8205,128104],[128105,8205,10084,65039,8205,128105],[128143],[128105,8205,10084,65039,8205,128139,8205,128104],[128104,8205,10084,65039,8205,128139,8205,128104],[128105,8205,10084,65039,8205,128139,8205,128105],[128106],[128104,8205,128105,8205,128102],[128104,8205,128105,8205,128103],[128104,8205,128105,8205,128103,8205,128102],[128104,8205,128105,8205,128102,8205,128102],[128104,8205,128105,8205,128103,8205,128103],[128105,8205,128105,8205,128102],[128105,8205,128105,8205,128103],[128105,8205,128105,8205,128103,8205,128102],[128105,8205,128105,8205,128102,8205,128102],[128105,8205,128105,8205,128103,8205,128103],[127995],[127996],[127997],[127998],[127999],[128104,8205,128104,8205,128102],[128104,8205,128104,8205,128103],[128104,8205,128104,8205,128103,8205,128102],[128104,8205,128104,8205,128102,8205,128102],[128104,8205,128104,8205,128103,8205,128103],[128090],[128085],[128086],[128084],[128087],[128089],[128088],[128132],[128139],[128099],[128096],[128097],[128098],[128094],[128095],[128082],[127913],[127891],[128081],[127890],[128093],[128091],[128092],[128188],[128083],[128374],[128141],[127746]]},{name:g._("Animals & Nature"),icon:[128059],emojis:[[128054],[128049],[128045],[128057],[128048],[128059],[128060],[128040],[128047],[129409],[128046],[128055],[128061],[128056],[128025],[128053],[128584],[128585],[128586],[128018],[128039],[128038],[128036],[128035],[128037],[128058],[128023],[128052],[129412],[128029],[128027],[128012],[128030],[128028],[128375],[129410],[129408],[128013],[128034],[128032],[128031],[128033],[128044],[128051],[128011],[128010],[128006],[128005],[128003],[128002],[128020],[128004],[128042],[128043],[128024],[128016],[128015],[128017],[128014],[128022],[128e3],[128001],[128019],[129411],[128330],[128021],[128041],[128008],[128007],[128063],[128062],[128009],[128050],[127797],[127876],[127794],[127795],[127796],[127793],[127807],[9752],[127808],[127885],[127883],[127811],[127810],[127809],[127806],[127802],[127803],[127801],[127804],[127799],[127800],[127812],[128144],[127792],[127875],[128026],[128376],[127758],[127757],[127759],[127765],[127766],[127767],[127768],[127761],[127762],[127763],[127764],[127770],[127773],[127771],[127772],[127774],[127769],[11088],[127775],[128171],[10024],[9732],[9728],[9925],[127780],[127781],[127782],[9729],[127783],[9928],[127785],[9889],[128293],[128165],[10052],[127784],[9731],[9924],[127788],[128168],[127786],[127787],[9730],[9748],[128167],[128166],[127754]]},{name:g._("Food & Drink"),icon:[127828],emojis:[[127823],[127822],[127824],[127818],[127819],[127820],[127817],[127815],[127827],[127816],[127826],[127825],[127821],[127813],[127814],[127798],[127805],[127840],[127838],[129472],[127831],[127830],[127844],[127859],[127828],[127839],[127789],[127829],[127837],[127790],[127791],[127836],[127858],[127845],[127843],[127857],[127835],[127833],[127834],[127832],[127842],[127841],[127847],[127848],[127846],[127856],[127855],[127874],[127854],[127852],[127853],[127851],[127871],[127849],[127850],[127866],[127867],[127863],[127864],[127865],[127870],[127862],[127861],[9749],[127868],[127860],[127869]]},{name:g._("Activities"),icon:[9917],emojis:[[9917],[127936],[127944],[9918],[127934],[127952],[127945],[127921],[9971],[127948],[127955],[127992],[127954],[127953],[127951],[127935],[9975],[127938],[9976],[127993],[127907],[128675],[127946],[127940],[9977],[127947],[128692],[128693],[127943],[128372],[127942],[127933],[127894],[127941],[127895],[127989],[127915],[127903],[127917],[127912],[127914],[127908],[127911],[127932],[127929],[127927],[127930],[127928],[127931],[127916],[127918],[128126],[127919],[127922],[127920],[127923]]},{name:g._("Travel & Places"),icon:[128662],emojis:[[128663],[128661],[128647],[128665],[128652],[128654],[127950],[128659],[128657],[128658],[128656],[128666],[128667],[128668],[127949],[128690],[128680],[128653],[128664],[128660],[128662],[128673],[128672],[128671],[128643],[128651],[128669],[128644],[128645],[128648],[128670],[128642],[128646],[128650],[128649],[128641],[128745],[9992],[128747],[128748],[9973],[128741],[128676],[9972],[128755],[128640],[128752],[128186],[9875],[128679],[9981],[128655],[128678],[128677],[127937],[128674],[127905],[127906],[127959],[127904],[127745],[128508],[127981],[9970],[127889],[9968],[127956],[128507],[127755],[128510],[127957],[127966],[128739],[128740],[127749],[127748],[127964],[127958],[9969],[127965],[127751],[127750],[127961],[127747],[127753],[127756],[127879],[127878],[127752],[127960],[127984],[127983],[127967],[128509],[127968],[127969],[127962],[127970],[127980],[9978],[127971],[127972],[127973],[127974],[127976],[127978],[127979],[127977],[127963],[128146],[9962],[128332],[128333],[128331],[9961],[127776]]},{name:g._("Objects"),icon:[128161],emojis:[[8986],[128241],[128242],[128187],[9e3],[128421],[128424],[128433],[128434],[128377],[128189],[128190],[128191],[128192],[128252],[128247],[128248],[128249],[127909],[128253],[127902],[128222],[9742],[128223],[128224],[128250],[128251],[127897],[127898],[127899],[9201],[9202],[9200],[128368],[8987],[9203],[128225],[128267],[128268],[128161],[128294],[128367],[128465],[128738],[128184],[128181],[128180],[128182],[128183],[128176],[128179],[128142],[9878],[128295],[128296],[9874],[128736],[9935],[128297],[128476],[9881],[9939],[128299],[128163],[128298],[128481],[9876],[128737],[128684],[9760],[9904],[9905],[127994],[128302],[128255],[128136],[9879],[128301],[128300],[128371],[128138],[128137],[127777],[127991],[128278],[128701],[128703],[128704],[128705],[128273],[128477],[128715],[128716],[128719],[128682],[128718],[128444],[128506],[128511],[128717],[127880],[127887],[127872],[127873],[127882],[127881],[127886],[127888],[127884],[127982],[9993],[128233],[128232],[128140],[128231],[128238],[128234],[128235],[128236],[128237],[128230],[128239],[128229],[128228],[128220],[128195],[128209],[128202],[128200],[128201],[128196],[128197],[128198],[128467],[128199],[128451],[128499],[128452],[128203],[128466],[128193],[128478],[128194],[128450],[128240],[128211],[128213],[128215],[128216],[128217],[128212],[128210],[128218],[128214],[128279],[128206],[128391],[9986],[128208],[128207],[128204],[128205],[128681],[127987],[127988],[128272],[128274],[128275],[128271],[128394],[128395],[10002],[128221],[9999],[128397],[128396],[128269],[128270]]},{name:g._("Symbols"),icon:[10084],emojis:[[10084,65039],[128155],[128154],[128153],[128148],[128156],[10083],[128149],[128147],[128158],[128151],[128152],[128150],[128157],[128159],[9774],[10013],[9770],[128329],[9784],[10017],[128303],[128334],[9775],[9766],[128720],[9934],[9800],[9801],[9802],[9803],[9804],[9805],[9806],[9807],[9808],[9809],[9810],[9811],[127380],[9883],[9762],[9763],[128244],[128243],[127543],[127386],[128174],[127344],[127345],[127374],[127377],[127358],[127384],[9940],[128219],[128683],[10060],[11093],[128162],[9832],[128695],[128687],[128691],[128689],[128286],[128245],[10071],[10069],[10067],[10068],[8252,65039],[8265,65039],[128175],[128261],[128262],[128305],[9884],[12349],[9888],[128696],[128304],[127535],[128185],[10035],[10062],[9989],[128160],[127744],[127760],[9410],[127975],[127490],[128706],[128707],[128708],[128709],[9855],[128685],[128702],[10036],[127359],[128688],[128697],[128698],[128700],[128699],[128686],[127910],[128246],[9167],[127489],[127382],[9851],[127383],[127378],[10055],[127381],[127379],[35,8419],[42,8419],[48,8419],[49,8419],[50,8419],[51,8419],[52,8419],[53,8419],[54,8419],[55,8419],[56,8419],[57,8419],[128287],[128290],[9654],[9208],[9199],[9209],[9210],[9197],[9198],[9194],[128256],[128257],[9193],[128258],[9664],[128316],[128317],[9195],[9196],[127385],[10145],[11013],[11014],[11015],[8599],[8600],[8601],[8598],[8596],[8618],[128260],[8617],[10548],[10549],[8505],[8597],[128292],[128289],[128288],[128291],[127925],[127926],[12336],[10175],[10004],[128259],[10133],[10134],[10135],[10006],[10160],[128178],[128177],[169,65039],[174,65039],[8482,65039],[128282],[128281],[128283],[128285],[128284],[9745],[128280],[9898],[9899],[128308],[128309],[128313],[128312],[128310],[128311],[128314],[9642],[9643],[9724],[9723],[128315],[11035],[11036],[9726],[9725],[128306],[128307],[128264],[128265],[128266],[128263],[128227],[128226],[128276],[126980],[128277],[127183],[9824],[9827],[9829],[9830],[127924],[128065,8205,128488],[128488],[128173],[128495],[128172],[128336],[128337],[128338],[128339],[128340],[128341],[128342],[128343],[128344],[128345],[128346],[128347],[128348],[128349],[128350],[128351],[128352],[128353],[128354],[128355],[128356],[128357],[128358],[128359],[127542],[127568],[127545],[127514],[127538],[127569],[127544],[127540],[127539],[12951,65039],[12953,65039],[127546],[127541]]},{name:g._("Flags"),icon:[983041],emojis:[[127482,127480],[127462,127466],[127483,127475],[127462,127481],[127462,127482],[127487,127462],[127463,127466],[127463,127479],[127464,127462],[127464,127469],[127464,127473],[127464,127475],[127464,127476],[127465,127466],[127465,127472],[127466,127480],[127467,127470],[127467,127479],[127468,127463],[127469,127472],[127470,127465],[127470,127466],[127470,127473],[127470,127475],[127470,127481],[127471,127477],[127472,127479],[127474,127476],[127474,127485],[127474,127486],[127475,127473],[127475,127476],[127475,127487],[127477,127469],[127477,127473],[127477,127479],[127477,127481],[127479,127482],[127480,127462],[127480,127466],[127480,127468],[127481,127479]]}];e.exports={categories:a}}),null);
__d("CustomizeTabs",[],(function(a,b,c,d,e,f){a=Object.freeze({EMOJI:"EMOJI",COLOR:"COLOR"});e.exports={CustomizeTitleEnum:a}}),null);
__d("CustomizeThreadDialogEmojiTabPage.react",["cx","ChatEmojiCategories","ChatEmojiPicker.react","EmojiLikeConstants","MessagingThreadCustomizationSource","React","MercuryThreadActions","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("MercuryThreadActions").get();c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={emojis:this.getInitialEmojis(),currentCategoryIndex:1},this.$1=!1,this.handleEmojiChange=function(a){i.changeThreadEmoji(this.props.threadID,a,b("MessagingThreadCustomizationSource").SETTINGS),this.props.onSelect&&this.props.onSelect()}.bind(this),this.$2=function(){__p&&__p();if(this.$1)return;this.$1=!0;var a=this.state.currentCategoryIndex,c=Math.min(b("ChatEmojiCategories").categories.length,a+2),d=b("ChatEmojiCategories").categories.slice(a,c).reduce(function(a,b){b.emojis&&b.emojis.length>0&&(a=a.concat(b.emojis));return a},[]).filter(function(a){return a&&a.length<=2});this.setState(function(a){this.$1=!1;c===b("ChatEmojiCategories").categories.length&&(this.$2=b("emptyFunction"));return{emojis:a.emojis.concat(d),currentCategoryIndex:c}}.bind(this))}.bind(this),c}a.prototype.getInitialEmojis=function(){var a=b("ChatEmojiCategories").categories[0].emojis;return[b("EmojiLikeConstants").FB_THUMBS_UP_EMOJI].concat(a).filter(function(a){return a&&a.length<=2})};a.prototype.render=function(){var a=this.props.thread;a=a&&a.custom_like_icon?a.custom_like_icon.emoji:String.fromCodePoint.apply(String,b("EmojiLikeConstants").FB_THUMBS_UP_EMOJI);return b("React").createElement("div",{className:"_69n_"},b("React").createElement(b("ChatEmojiPicker.react"),{emojiChoices:this.state.emojis,emojiSize:b("EmojiLikeConstants").size.LARGE,onSelect:this.handleEmojiChange,columns:5,alignh:"center",currentEmoji:a,onScroll:this.$2}))};e.exports=a}),null);
__d("CustomizeThreadDialogTabPages.react",["cx","React","XUIPageNavigation.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("XUIPageNavigation.react").Group,j=b("XUIPageNavigation.react").Item;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={activePageKey:this.findPage().key},this.$1=function(a){this.setState({activePageKey:a});return!0}.bind(this),b}a.prototype.findPage=function(a){var b=this.props.pages.find(function(b){return b.key===a});return b||this.props.pages[0]};a.prototype.render=function(){return b("React").createElement("div",{className:"_1pff"},b("React").createElement(b("XUIPageNavigation.react"),{defaultActiveTabKey:this.state.activePageKey,onTabClick:this.$1},b("React").createElement(i,null,this.props.pages.map(function(a){return b("React").createElement(j,{key:a.key,className:"_1pfn"},a.title)}))),b("React").createElement("div",{className:"_1pfo"},this.findPage(this.state.activePageKey).content))};e.exports=a}),null);
__d("MessengerThreadThemesWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1938553679488985"};c.getQueryID=function(){"use strict";return"496396380778038"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("CustomizeThreadThemeUtil",["MessengerThreadThemesWebGraphQLQuery","WebGraphQL","gkx","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=b("gkx")("AT4vZBWyiZL1KZrir2lJt4vVNMIYu8sDbA3PtNwJWZh5seJSYZeYdmCgqH3wgiUS4PfslnEPm3wz9jSsjDINBCSy")?"M4_VERSION0":"LEGACY";b("promiseDone")(b("WebGraphQL").exec(new(b("MessengerThreadThemesWebGraphQLQuery"))({version:c})),function(b){__p&&__p();if(b&&b.messenger_thread_themes&&Array.isArray(b.messenger_thread_themes)){var c=[];b.messenger_thread_themes.forEach(function(a){if(!a.id)return;if(!a.fallback_color)return;if(!a.accessibility_label)return;a={id:a.id,fallback_color:a.fallback_color,accessibility_label:a.accessibility_label,gradient_colors:a.gradient_colors};c.push(a)});a(c)}})}e.exports={fetchThemes:a}}),null);
__d("CustomizeThreadDialog.react",["fbt","CustomizeChatColorGrid.react","CustomizeTabs","CustomizeThreadDialogEmojiTabPage.react","CustomizeThreadDialogTabPages.react","CustomizeThreadThemeUtil","FDSModal.react","FDSModalHeader.react","FDSSection.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("CustomizeTabs").CustomizeTitleEnum,j=b("CustomizeThreadThemeUtil").fetchThemes;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={themes:null},b}a.prototype.componentDidMount=function(){this.$1=!0,j(function(a){this.$1&&this.setState({themes:a})}.bind(this))};a.prototype.componentWillUnmount=function(){this.$1=!1};a.prototype.render=function(){if(!this.props.show)return null;var a=this.props.threadID,c=g._("Customize your chat");a=[{key:i.COLOR,title:g._("Color"),content:b("React").createElement(b("CustomizeChatColorGrid.react"),{thread:this.props.thread,threadID:a,onSelect:this.props.onHide,themes:this.state.themes})},{key:i.EMOJI,title:g._("Emoji"),content:b("React").createElement(b("CustomizeThreadDialogEmojiTabPage.react"),{thread:this.props.thread,threadID:a,onSelect:this.props.onHide})}];return b("React").createElement(b("FDSModal.react"),{header:b("React").createElement(b("FDSModalHeader.react"),{title:c}),footer:null,isShown:!0,label:"Customize Chat",onHide:this.props.onHide,width:400},b("React").createElement(b("FDSSection.react"),{hasPadding:!1},b("React").createElement(b("CustomizeThreadDialogTabPages.react"),{pages:a})))};e.exports=a}),null);