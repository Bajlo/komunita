/*! jQuery UI - v1.9.2 - 2014-05-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.menu.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,n,r,o=t.nodeName.toLowerCase();return"area"===o?(s=t.parentNode,n=s.name,t.href&&n&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&a(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,i){return"number"==typeof t?this.each(function(){var a=this;setTimeout(function(){e(a).focus(),i&&i.call(a)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,s,n=e(this[0]);n.length&&n[0]!==document;){if(a=n.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),s=isNaN(a);return(s||a>=0)&&i(t,!s)}}),e(function(){var t=document.body,i=t.appendChild(i=document.createElement("div"));i.offsetHeight,e.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===i.offsetHeight,e.support.selectstart="onselectstart"in i,t.removeChild(i).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function s(t,i,a,s){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,s(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,s(this,t,!0,i)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=6===parseFloat(t[1],10)}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,a){var s,n=e.ui[t].prototype;for(s in a)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([i,a[s]])},call:function(e,t,i){var a,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;s.length>a;a++)e.options[s[a][0]]&&s[a][1].apply(e.element,i)}},contains:e.contains,hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[a]>0?!0:(t[a]=1,s=t[a]>0,t[a]=0,s)},isOverAxis:function(e,t,i){return e>t&&t+i>e},isOver:function(t,i,a,s,n,r){return e.ui.isOverAxis(t,a,n)&&e.ui.isOverAxis(i,s,r)}}))})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l=i.split(".")[0];i=i.split(".")[1],n=l+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},r=e[l][i],o=e[l][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(t,i){e.isFunction(i)&&(a[t]=function(){var e=function(){return s.prototype[t].apply(this,arguments)},a=function(e){return s.prototype[t].apply(this,e)};return function(){var t,s=this._super,n=this._superApply;return this._super=e,this._superApply=a,t=i.apply(this,arguments),this._super=s,this._superApply=n,t}}())}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},a,{constructor:o,namespace:l,widgetName:i,widgetBaseClass:n,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetName,this),e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&(e.effects.effect[o]||e.uiBackCompat!==!1&&e.effects[o])?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){function i(e,t,i){return[parseInt(e[0],10)*(d.test(e[0])?t/100:1),parseInt(e[1],10)*(d.test(e[1])?i/100:1)]}function s(t,i){return parseInt(e.css(t,i),10)||0}e.ui=e.ui||{};var a,n=Math.max,r=Math.abs,o=Math.round,l=/left|center|right/,h=/top|center|bottom/,u=/[\+\-]\d+%?/,c=/^\w+/,d=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(a!==t)return a;var i,s,n=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=n.children()[0];return e("body").append(n),i=r.offsetWidth,n.css("overflow","scroll"),s=r.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),s=t.isWindow?"":t.element.css("overflow-y"),a="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,n="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return p.apply(this,arguments);t=e.extend({},t);var a,d,f,m,g,v=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),_=v[0],x=(t.collision||"flip").split(" "),k={};return 9===_.nodeType?(d=v.width(),f=v.height(),m={top:0,left:0}):e.isWindow(_)?(d=v.width(),f=v.height(),m={top:v.scrollTop(),left:v.scrollLeft()}):_.preventDefault?(t.at="left top",d=f=0,m={top:_.pageY,left:_.pageX}):(d=v.outerWidth(),f=v.outerHeight(),m=v.offset()),g=e.extend({},m),e.each(["my","at"],function(){var e,i,s=(t[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):h.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=h.test(s[1])?s[1]:"center",e=u.exec(s[0]),i=u.exec(s[1]),k[this]=[e?e[0]:0,i?i[0]:0],t[this]=[c.exec(s[0])[0],c.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===t.at[0]?g.left+=d:"center"===t.at[0]&&(g.left+=d/2),"bottom"===t.at[1]?g.top+=f:"center"===t.at[1]&&(g.top+=f/2),a=i(k.at,d,f),g.left+=a[0],g.top+=a[1],this.each(function(){var l,h,u=e(this),c=u.outerWidth(),p=u.outerHeight(),_=s(this,"marginLeft"),w=s(this,"marginTop"),D=c+_+s(this,"marginRight")+b.width,T=p+w+s(this,"marginBottom")+b.height,S=e.extend({},g),M=i(k.my,u.outerWidth(),u.outerHeight());"right"===t.my[0]?S.left-=c:"center"===t.my[0]&&(S.left-=c/2),"bottom"===t.my[1]?S.top-=p:"center"===t.my[1]&&(S.top-=p/2),S.left+=M[0],S.top+=M[1],e.support.offsetFractions||(S.left=o(S.left),S.top=o(S.top)),l={marginLeft:_,marginTop:w},e.each(["left","top"],function(i,s){e.ui.position[x[i]]&&e.ui.position[x[i]][s](S,{targetWidth:d,targetHeight:f,elemWidth:c,elemHeight:p,collisionPosition:l,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:t.my,at:t.at,within:y,elem:u})}),e.fn.bgiframe&&u.bgiframe(),t.using&&(h=function(e){var i=m.left-S.left,s=i+d-c,a=m.top-S.top,o=a+f-p,l={target:{element:v,left:m.left,top:m.top,width:d,height:f},element:{element:u,left:S.left,top:S.top,width:c,height:p},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":a>0?"bottom":"middle"};c>d&&d>r(i+s)&&(l.horizontal="center"),p>f&&f>r(a+o)&&(l.vertical="middle"),l.important=n(r(i),r(s))>n(r(a),r(o))?"horizontal":"vertical",t.using.call(this,e,l)}),u.offset(e.extend(S,{using:h}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollLeft:s.offset.left,r=s.width,o=e.left-t.collisionPosition.marginLeft,l=a-o,h=o+t.collisionWidth-r-a;t.collisionWidth>r?l>0&&0>=h?(i=e.left+l+t.collisionWidth-r-a,e.left+=l-i):e.left=h>0&&0>=l?a:l>h?a+r-t.collisionWidth:a:l>0?e.left+=l:h>0?e.left-=h:e.left=n(e.left-o,e.left)},top:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollTop:s.offset.top,r=t.within.height,o=e.top-t.collisionPosition.marginTop,l=a-o,h=o+t.collisionHeight-r-a;t.collisionHeight>r?l>0&&0>=h?(i=e.top+l+t.collisionHeight-r-a,e.top+=l-i):e.top=h>0&&0>=l?a:l>h?a+r-t.collisionHeight:a:l>0?e.top+=l:h>0?e.top-=h:e.top=n(e.top-o,e.top)}},flip:{left:function(e,t){var i,s,a=t.within,n=a.offset.left+a.scrollLeft,o=a.width,l=a.isWindow?a.scrollLeft:a.offset.left,h=e.left-t.collisionPosition.marginLeft,u=h-l,c=h+t.collisionWidth-o-l,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+d+p+f+t.collisionWidth-o-n,(0>i||r(u)>i)&&(e.left+=d+p+f)):c>0&&(s=e.left-t.collisionPosition.marginLeft+d+p+f-l,(s>0||c>r(s))&&(e.left+=d+p+f))},top:function(e,t){var i,s,a=t.within,n=a.offset.top+a.scrollTop,o=a.height,l=a.isWindow?a.scrollTop:a.offset.top,h=e.top-t.collisionPosition.marginTop,u=h-l,c=h+t.collisionHeight-o-l,d="top"===t.my[1],p=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-n,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):c>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-l,e.top+p+f+m>c&&(i>0||c>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,a,n,r=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(n in s)t.style[n]=s[n];t.appendChild(o),i=r||document.documentElement,i.insertBefore(t,i.firstChild),o.style.cssText="position: absolute; left: 10.7432222px;",a=e(o).offset().left,e.support.offsetFractions=a>10&&11>a,t.innerHTML="",i.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var i=e.fn.position;e.fn.position=function(s){if(!s||!s.offset)return i.call(this,s);var a=s.offset.split(" "),n=s.at.split(" ");return 1===a.length&&(a[1]=a[0]),/^\d/.test(a[0])&&(a[0]="+"+a[0]),/^\d/.test(a[1])&&(a[1]="+"+a[1]),1===n.length&&(/left|center|right/.test(n[0])?n[1]="center":(n[1]=n[0],n[0]="center")),i.call(this,e.extend(s,{at:n[0]+a[0]+" "+n[1]+a[1],offset:t}))}}(jQuery)})(jQuery);(function(e){var t=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,i,a;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(s){if(this.element.prop("readOnly"))return t=!0,a=!0,i=!0,undefined;t=!1,a=!1,i=!1;var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:t=!0,this._move("previousPage",s);break;case n.PAGE_DOWN:t=!0,this._move("nextPage",s);break;case n.UP:t=!0,this._keyEvent("previous",s);break;case n.DOWN:t=!0,this._keyEvent("next",s);break;case n.ENTER:case n.NUMPAD_ENTER:this.menu.active&&(t=!0,s.preventDefault(),this.menu.select(s));break;case n.TAB:this.menu.active&&this.menu.select(s);break;case n.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(s),s.preventDefault());break;default:i=!0,this._searchTimeout(s)}},keypress:function(a){if(t)return t=!1,a.preventDefault(),undefined;if(!i){var s=e.ui.keyCode;switch(a.keyCode){case s.PAGE_UP:this._move("previousPage",a);break;case s.PAGE_DOWN:this._move("nextPage",a);break;case s.UP:this._keyEvent("previous",a);break;case s.DOWN:this._keyEvent("next",a)}}},input:function(e){return a?(a=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(a){a.target===t.element[0]||a.target===i||e.contains(i,a.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var a=i.item.data("ui-autocomplete-item")||i.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:a})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(a.value):this.liveRegion.text(a.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete"),a=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=a,this._delay(function(){this.previous=a,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this.document.find(t||"body")[0]),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,i,a=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,a){a(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,s){a.xhr&&a.xhr.abort(),a.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){s(e)},error:function(){s([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,i=++t;return function(a){i===t&&e.__response(a),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(i,t),this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var a=this;e.each(i,function(e,i){a._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var a=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return a.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(e){var t=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(i){var s=e(i.target).closest(".ui-menu-item");!t&&s.not(".ui-state-disabled").length&&(t=!0,this.select(i),s.has(".ui-menu").length?this.expand(i):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var i=e(t.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(i){e(i.target).closest(".ui-menu").length||this.collapseAll(i),t=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,a,n,r,o,h=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:h=!1,a=this.previousFilter||"",n=String.fromCharCode(t.keyCode),r=!1,clearTimeout(this.filterTimer),n===a?r=!0:n=a+n,o=RegExp("^"+i(n),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),s=r&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(n=String.fromCharCode(t.keyCode),o=RegExp("^"+i(n),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),s.length?(this.focus(t,s),s.length>1?(this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),s=t.prev("a"),a=e("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(a),t.attr("aria-labelledby",s.attr("id"))}),t=s.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,a,n,r,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,a=t.offset().top-this.activeMenu.offset().top-i-s,n=this.activeMenu.scrollTop(),r=this.activeMenu.height(),o=t.height(),0>a?this.activeMenu.scrollTop(n+a):a+o>r&&this.activeMenu.scrollTop(n+a-r+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[t]()),this.focus(i,s)},nextPage:function(t){var i,s,a;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,a=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-a}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(t),undefined)},previousPage:function(t){var i,s,a;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,a=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+a>0}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(t),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)}})})(jQuery);

!function($){$.fn.highlight=function(pat,ignore){function replaceDiacritics(str){var diacritics=[[/[\u00c0-\u00c6]/g,"A"],[/[\u00e0-\u00e6]/g,"a"],[/[\u010c]/g,"C"],[/[\u010d]/g,"c"],[/[\u010e]/g,"D"],[/[\u010f]/g,"d"],[/[\u00c8-\u00cb]/g,"E"],[/[\u00e8-\u00eb]/g,"e"],[/[\u00cc-\u00cf]/g,"I"],[/[\u00ec-\u00ef]/g,"i"],[/[\u0139|\u013d]/g,"L"],[/[\u013a|\u013e]/g,"l"],[/[\u00d1|\u0147]/g,"N"],[/[\u00f1|\u0148]/g,"n"],[/[\u00d2-\u00d8|\u0150]/g,"O"],[/[\u00f2-\u00f8|\u0151]/g,"o"],[/[\u0154|\u0158]/g,"R"],[/[\u0155|\u0159]/g,"r"],[/[\u0160]/g,"S"],[/[\u0161]/g,"s"],[/[\u0164]/g,"T"],[/[\u0165]/g,"t"],[/[\u00d9-\u00dc]/g,"U"],[/[\u00f9-\u00fc]/g,"u"],[/[\u00dd]/g,"Y"],[/[\u00fd]/g,"y"],[/[\u017d]/g,"Z"],[/[\u017e]/g,"z"],[/[\u011a]/g,"E"],[/[\u011b]/g,"e"],[/[\u016e]/g,"U"],[/[\u016f]/g,"u"]];for(var i=0;i<diacritics.length;i++){str=str.replace(diacritics[i][0],diacritics[i][1])}return str}function innerHighlight(node,pat,ignore){var skip=0;if(node.nodeType==3){var isPatternArray=$.isArray(pat);if(!isPatternArray){pat=[pat]}var patternCount=pat.length;for(var ii=0;ii<patternCount;ii++){if(patternCount>1){}var currentTerm=(ignore?replaceDiacritics(pat[ii]):pat[ii]).toUpperCase();var pos=(ignore?replaceDiacritics(node.data):node.data).toUpperCase().indexOf(currentTerm);var prevchar=currentTerm.substr(0,0);if(pos>=0){var spannode=document.createElement("span");spannode.className="highlight";var middlebit=node.splitText(pos);var endbit=middlebit.splitText((currentTerm.length));var middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);skip=1}}}else{if(node.nodeType==1&&node.childNodes&&!/(script|style)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;++i){i+=innerHighlight(node.childNodes[i],pat,ignore)}}}return skip}return this.length&&pat&&pat.length?this.each(function(){ignore=typeof ignore!=="undefined"?ignore:$.fn.highlight.defaults.ignore;innerHighlight(this,pat,ignore)}):this};$.fn.highlight.defaults={ignore:false};$.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode){replaceChild(this.firstChild,this);normalize()}}).end()}}(window.jQuery);

function popupwindow(url, title, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2)-50;
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

$(function(){  

  var ctext = 'Tubazar používa súbory cookie pre skvalitnenie služieb. Používaním webstránky s tým súhlasíte.'; // Tubazar používá soubory cookie pro zkvalitnění služeb. Používáním webstránky s tím souhlasíte.
  var ctextc = 'Rozumiem'; // Rozumím
  if(localStorage.coff !== '1') {
    $('body').prepend('<div id="cookie_note"><div class="wrap">'+ctext+' <a href="#" class="close radius">'+ctextc+'</a></div></div>')
    $('body').on('click', '#cookie_note .close', function() {$(this).parent().hide();localStorage.coff='1';}); 
  };

	$('.scat a').click(function() {
		var href = $(this).attr('href');
    $(this).closest('form').attr("action", href).trigger('submit');
		return false;
	});
  
  $('#searchbut').click(function() {
		var sw = $('#sw').val();
		var sm = $('#sm').val();
		var spf = $('#spf').val();
		var spt = $('#spt').val();
    if (!sw && !sm && !spf && !spt) {$(".focus").select();return false;}
	});
  
  $('#type').change(function() {
    var type = $(this).val();
    if(type) {
    
      $.ajax({
        type: "GET",
        url: "/api/sections",
        dataType: "json",
        data: {
          id: type
        },
        cache: false,
        success: function(data){
           var array = data[type];
           $("#subtype").empty().show().append('<option value="">[Kategória]</option>');
           for (var i=0; i<array.length; i++) {
            $("#subtype").append('<option value="'+array[i].id+'">'+array[i].title+'</option>');
           }
           console.log(array);
        }
      });
      
    }
    else {
      $("#subtype").empty().hide();
    }
    $('.next_step').hide();
  });
  
  $('#subtype').change(function() {
    var type = $(this).val();
    if(type) {
      if(type==2) {
        $('#url').show();
        $('#address').show();
      }
      else {
        $('#url').hide();
        $('#address').hide();
      }
      $('.next_step').show();
      sleep(100).then(() => {
        $('#title').focus();
      });
    }
    else {
      $('.next_step').hide();
    }
  });

    //   var subcat = array_subcat[this_val];
    //   if(subcat) {
    //     $("#subcategories").empty().append('Specific Services *<br />');
    //     for (var i=0; i<subcat.length; i++) {
    //       $("#subcategories").append('<input type="checkbox" name="subcategories[]" id="sc' + subcat[i].id + '" value="' + subcat[i].id + '" /><label for="sc' + subcat[i].id + '">' + subcat[i].title + '</label><br />');
    //     }        
    //   }
    //   else {
    //     $("#subcategories").empty().append('<input type="checkbox" name="subcategories[]" value="' + this_val + '" class="hide" checked />');            
    //   }  
    // }
    // else {
    //   $("#subcategories, #sizes").empty();
    //   $(".tr_sizes").hide();
    // }





  $('#add_phone').click(function() {
    $(this).hide().next().show();
  });
  

  
	$('.sdis a').click(function() {
		var smdis = $(this).attr('class');
    $('#smdis').val(smdis);
    if($('#sm').val()) $(this).closest('form').trigger('submit');
    else $(this).closest('ul').hide();
		return false;
	});
  
  $('.select div').click(function() {
    $('.select ul').not($(this).next('ul')).hide();
    if($(this).attr('class')!='off') $(this).next('ul').toggle();
	});  
	$(document).click(function(e) {
		if ($(event.target).parent().hasClass("select")) {}
		else $('.select ul').hide();
	}).keyup(function(e) {
    if (e.keyCode == 27) $('.select ul').hide();
	});

  $('#location').autocomplete({
		delay: 1,
		source:'/api/locations',
		open: function( event, ui ) {
			var term_null = this.value.split(' ');
			var term = term_null.filter(function(v){return v!==''});

			for (var i=0;i<term.length;i++) {
				if(i<term.length-1 && term[i].length<3) term[i]=term[i]+' ';
				else {if(this.value.slice(-1)==' ' && i>0) term[i]=term[i]+' ';}
			}
			var dp = term[0].toLowerCase();

			term.sort(function(a, b) { 
    		return b.length - a.length; 
			});

			$('ul.ui-autocomplete').highlight(term,true); 
		},
    select: function (event, ui) {
      $(this).val(ui.item.value);  
      $('#location_id').val(ui.item.id);  
      $(this).closest('form').trigger('submit');
    },
		minLength:2
  }).focus(function() {
		if($(this).val()=='') $(this).autocomplete("search");   
  }).on('keyup', function() {
    //if($(this).val()!='') $(".sdis div").removeClass( "off" );
    //else $(".sdis div").addClass( "off" );  
    $('#location_id').val(''); 
  });

  $('#job').autocomplete({
		delay: 1,
		source:'/api/titles',
		open: function( event, ui ) {
			var term_null = this.value.split(' ');
			var term = term_null.filter(function(v){return v!==''});

			for (var i=0;i<term.length;i++) {
				if(i<term.length-1 && term[i].length<3) term[i]=term[i]+' ';
				else {if(this.value.slice(-1)==' ' && i>0) term[i]=term[i]+' ';}
			}
			var dp = term[0].toLowerCase();

			term.sort(function(a, b) { 
    		return b.length - a.length; 
			});

			$('ul.ui-autocomplete').highlight(term,true); 
		},
    select: function (event, ui) {
      $(this).val(ui.item.value);  
      //$(this).closest('form').trigger('submit');
    },
		minLength:1
  })
  

  $("#spf, #spt").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && e.which != 32 && e.which != 13 && (e.which < 48 || e.which > 57) ) {
      return false;
    }
  });  
  $(".focus").select();

	$('.home_cat div').click(function() {
    var href = $(this).next().children().attr('href');
    window.open (href,'_self',false);
		return false;
	});

  var ticker = $('.homediv ul');
  ticker.children('li:first').show().siblings().hide();
  
  setInterval(function() {
    ticker.find('li:visible').fadeOut(100,function() {
      $(this).appendTo(ticker);
      ticker.children('li:first').show();
    });
  },8000); 

	$(".prev").click(function(){
    $(".sliderads").animate({scrollLeft: $( ".sliderads" ).scrollLeft()-1030},150);
    return false;
	});	
	$(".next").click(function(){
    $(".sliderads").animate({scrollLeft: $( ".sliderads" ).scrollLeft()+1030},150);
    return false;
	});

  $('.menus li a').click(function () {
    var hash = $(this).attr('href');
    if($(hash).is(":hidden")) {
      $(this).parent().addClass('active').siblings().removeClass('active');
      $(hash).show(0).siblings().hide(0);
      return false;
    }  
  });



  function h(e) {
    $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight - 12);
  }
  
  $('textarea.resize').each(function () {
    h(this);
  }).on('input', function () {
    h(this);
  });

  

  $('.remove').on('click', function() {
    $('.embed_url').hide();
    $('#video_url').val('');
    $('.iframe_video').html(''); 
    $('#url').val('').prop('readonly',false).focus();
    $('#title').val('').hide().next().hide();
    isurl = false;
    return false;
  });

var isurl;
$('#url').on('input', function () {
  if(!isurl) {
    var url = $(this).val();
    if (url) {
      $.ajax({
        url: '/api/catch_url',
        dataType: 'json',
        data: {url: url},
        success: function(data) {
          console.log(data);
          isurl = true;
          $('#url').prop('readonly', true);

          if(data.type=='image') {
            $('.image').find('img').prop('src',url);
          }
          else if(data.type=='video') {
            $('.iframe_video').html('<iframe width="200" height="100" src="'+data.video+'" frameborder="0" allowfullscreen wmode="Opaque"></iframe>'); 
          }   

          $('.embed_url').show();
          $('#title').val(data.title).show().prop('required',true).next().show().removeClass('only500').focus();
        },
        error: function (data) { console.log('error : ' + data.responseText); }
      });
    }
  }
});

$('.play').click( function() {
  var vcode = $(this).data('video_id');
  $(this).parent().html('<iframe width="100" height="50" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&showinfo=0&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
});

      
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function send_form(href) {
  if (typeof(href) === 'undefined') { href=$(".search_form").attr("action") }
  $(':input').filter(function(index, element) {return $(element).val() == "";}).attr('disabled', true);
  if($('#location').val()=='') $('#location_id').attr('disabled', true);

  var params = $(".search_form").serialize();
  if(params) href = href+'?'+params;
  if(href) window.location.href=href;
  return false;
}

$('#subnav li a').click(function() {
  var href = $(this).attr('href');
  send_form(href);
  return false;
});



  // Standard alert
  $('.alert').on('click', function() {

    $.alertable.alert('Howdy!').always(function() {
      console.log('Alert dismissed');
    });
  });


  // Standard confirm
  $('.remove-post').on('click', function() {
    var href = $(this).data("href");
    var id = $(this).data("id");
    var title = $(this).data("title");

    $.alertable.confirm('Naozaj chcete vymazať nasledovný inzerát? <br><br><b>'+title+'</b>',{html:true}).then(function() {

      $.ajax({
        url: href,
        type: 'DELETE',
        dataType: 'json',
        success: function(result) {
            //result = JSON.stringify(result);
            if(result.result) {
              $("#post-"+id).html('<div class="title">'+title+'</div><div class="info">Inzerát vymazaný.</div>');
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }   
    });

    }, function() {
      console.log('Confirmation canceled');      
    });
  });




});
