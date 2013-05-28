/*!
 * Narya.js Wandoujia 2.0 Doraemon JavaScript SDK v0.5
 * https://github.com/wandoulabs/Narya
 *
 * Copyright 2010 - 2012 WandouLabs
 * Release under GPL License.
 *
 * Read sourece code? Join us! We're hiring WEB front-end engineer
 * with curiosity like U!
 * http://www.wandoujia.com/join
 */
((function(){function a(b,c,d){if(b===c)return b!==0||1/b==1/c;if(b==null||c==null)return b===c;b._chain&&(b=b._wrapped),c._chain&&(c=c._wrapped);if(b.isEqual&&x.isFunction(b.isEqual))return b.isEqual(c);if(c.isEqual&&x.isFunction(c.isEqual))return c.isEqual(b);var e=j.call(b);if(e!=j.call(c))return!1;switch(e){case"[object String]":return b==String(c);case"[object Number]":return b!=+b?c!=+c:b==0?1/b==1/c:b==+c;case"[object Date]":case"[object Boolean]":return+b==+c;case"[object RegExp]":return b.source==c.source&&b.global==c.global&&b.multiline==c.multiline&&b.ignoreCase==c.ignoreCase}if(typeof b!="object"||typeof c!="object")return!1;var f=d.length;while(f--)if(d[f]==b)return!0;d.push(b);var g=0,h=!0;if(e=="[object Array]"){g=b.length,h=g==c.length;if(h)while(g--)if(!(h=g in b==g in c&&a(b[g],c[g],d)))break}else{if("constructor"in b!="constructor"in c||b.constructor!=c.constructor)return!1;for(var i in b)if(x.has(b,i)){g++;if(!(h=x.has(c,i)&&a(b[i],c[i],d)))break}if(h){for(i in c)if(x.has(c,i)&&!(g--))break;h=!g}}return d.pop(),h}var b=this,c=b._,d={},e=Array.prototype,f=Object.prototype,g=Function.prototype,h=e.slice,i=e.unshift,j=f.toString,k=f.hasOwnProperty,l=e.forEach,m=e.map,n=e.reduce,o=e.reduceRight,p=e.filter,q=e.every,r=e.some,s=e.indexOf,t=e.lastIndexOf,u=Array.isArray,v=Object.keys,w=g.bind,x=function(a){return new I(a)};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=x),exports._=x):b._=x,x.VERSION="1.3.3";var y=x.each=x.forEach=function(a,b,c){if(a==null)return;if(l&&a.forEach===l)a.forEach(b,c);else if(a.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call(c,a[e],e,a)===d)return}else for(var g in a)if(x.has(a,g)&&b.call(c,a[g],g,a)===d)return};x.map=x.collect=function(a,b,c){var d=[];return a==null?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),a.length===+a.length&&(d.length=a.length),d)},x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]);if(n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value");return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;a==null&&(a=[]);if(o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=x.toArray(a).reverse();return d&&!e&&(b=x.bind(b,d)),e?x.reduce(f,b,c,d):x.reduce(f,b)},x.find=x.detect=function(a,b,c){var d;return z(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},x.filter=x.select=function(a,b,c){var d=[];return a==null?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},x.reject=function(a,b,c){var d=[];return a==null?d:(y(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},x.every=x.all=function(a,b,c){var e=!0;return a==null?e:q&&a.every===q?a.every(b,c):(y(a,function(a,f,g){if(!(e=e&&b.call(c,a,f,g)))return d}),!!e)};var z=x.some=x.any=function(a,b,c){b||(b=x.identity);var e=!1;return a==null?e:r&&a.some===r?a.some(b,c):(y(a,function(a,f,g){if(e||(e=b.call(c,a,f,g)))return d}),!!e)};x.include=x.contains=function(a,b){var c=!1;return a==null?c:s&&a.indexOf===s?a.indexOf(b)!=-1:(c=z(a,function(a){return a===b}),c)},x.invoke=function(a,b){var c=h.call(arguments,2);return x.map(a,function(a){return(x.isFunction(b)?b||a:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,function(a){return a[b]})},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!b&&x.isEmpty(a))return-Infinity;var d={computed:-Infinity};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!b&&x.isEmpty(a))return Infinity;var d={computed:Infinity};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},x.shuffle=function(a){var b=[],c;return y(a,function(a,d,e){c=Math.floor(Math.random()*(d+1)),b[d]=b[c],b[c]=a}),b},x.sortBy=function(a,b,c){var d=x.isFunction(b)?b:function(a){return a[b]};return x.pluck(x.map(a,function(a,b,e){return{value:a,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")},x.groupBy=function(a,b){var c={},d=x.isFunction(b)?b:function(a){return a[b]};return y(a,function(a,b){var e=d(a,b);(c[e]||(c[e]=[])).push(a)}),c},x.sortedIndex=function(a,b,c){c||(c=x.identity);var d=0,e=a.length;while(d<e){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},x.toArray=function(a){return a?x.isArray(a)?h.call(a):x.isArguments(a)?h.call(a):a.toArray&&x.isFunction(a.toArray)?a.toArray():x.values(a):[]},x.size=function(a){return x.isArray(a)?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return b!=null&&!c?h.call(a,0,b):a[0]},x.initial=function(a,b,c){return h.call(a,0,a.length-(b==null||c?1:b))},x.last=function(a,b,c){return b!=null&&!c?h.call(a,Math.max(a.length-b,0)):a[a.length-1]},x.rest=x.tail=function(a,b,c){return h.call(a,b==null||c?1:b)},x.compact=function(a){return x.filter(a,function(a){return!!a})},x.flatten=function(a,b){return x.reduce(a,function(a,c){return x.isArray(c)?a.concat(b?c:x.flatten(c)):(a[a.length]=c,a)},[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.uniq=x.unique=function(a,b,c){var d=c?x.map(a,c):a,e=[];return a.length<3&&(b=!0),x.reduce(d,function(c,d,f){if(b?x.last(c)!==d||!c.length:!x.include(c,d))c.push(d),e.push(a[f]);return c},[]),e},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=x.intersect=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.indexOf(b,a)>=0})})},x.difference=function(a){var b=x.flatten(h.call(arguments,1),!0);return x.filter(a,function(a){return!x.include(b,a)})},x.zip=function(){var a=h.call(arguments),b=x.max(x.pluck(a,"length")),c=new Array(b);for(var d=0;d<b;d++)c[d]=x.pluck(a,""+d);return c},x.indexOf=function(a,b,c){if(a==null)return-1;var d,e;if(c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;if(s&&a.indexOf===s)return a.indexOf(b);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===b)return d;return-1},x.lastIndexOf=function(a,b){if(a==null)return-1;if(t&&a.lastIndexOf===t)return a.lastIndexOf(b);var c=a.length;while(c--)if(c in a&&a[c]===b)return c;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);while(e<d)f[e++]=a,a+=c;return f};var A=function(){};x.bind=function(a,b){var c,d;if(a.bind===w&&w)return w.apply(a,h.call(arguments,1));if(!x.isFunction(a))throw new TypeError;return d=h.call(arguments,2),c=function(){if(this instanceof c){A.prototype=a.prototype;var e=new A,f=a.apply(e,d.concat(h.call(arguments)));return Object(f)===f?f:e}return a.apply(b,d.concat(h.call(arguments)))}},x.bindAll=function(a){var b=h.call(arguments,1);return b.length==0&&(b=x.functions(a)),y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b){var c,d,e,f,g,h,i=x.debounce(function(){g=f=!1},b);return function(){c=this,d=arguments;var j=function(){e=null,g&&a.apply(c,d),i()};return e||(e=setTimeout(j,b)),f?g=!0:h=a.apply(c,d),i(),f=!0,h}},x.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)};c&&!d&&a.apply(e,f),clearTimeout(d),d=setTimeout(g,b)}},x.once=function(a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply(this,arguments))}},x.wrap=function(a,b){return function(){var c=[a].concat(h.call(arguments,0));return b.apply(this,c)}},x.compose=function(){var a=arguments;return function(){var b=arguments;for(var c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}},x.keys=v||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)x.has(a,c)&&(b[b.length]=c);return b},x.values=function(a){return x.map(a,x.identity)},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={};return y(x.flatten(h.call(arguments,1)),function(c){c in a&&(b[c]=a[c])}),b},x.defaults=function(a){return y(h.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a},x.isEqual=function(b,c){return a(b,c,[])},x.isEmpty=function(a){if(a==null)return!0;if(x.isArray(a)||x.isString(a))return a.length===0;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!!a&&a.nodeType==1},x.isArray=u||function(a){return j.call(a)=="[object Array]"},x.isObject=function(a){return a===Object(a)},x.isArguments=function(a){return j.call(a)=="[object Arguments]"},x.isArguments(arguments)||(x.isArguments=function(a){return!!a&&!!x.has(a,"callee")}),x.isFunction=function(a){return j.call(a)=="[object Function]"},x.isString=function(a){return j.call(a)=="[object String]"},x.isNumber=function(a){return j.call(a)=="[object Number]"},x.isFinite=function(a){return x.isNumber(a)&&isFinite(a)},x.isNaN=function(a){return a!==a},x.isBoolean=function(a){return a===!0||a===!1||j.call(a)=="[object Boolean]"},x.isDate=function(a){return j.call(a)=="[object Date]"},x.isRegExp=function(a){return j.call(a)=="[object RegExp]"},x.isNull=function(a){return a===null},x.isUndefined=function(a){return a===void 0},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return b._=c,this},x.identity=function(a){return a},x.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},x.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},x.result=function(a,b){if(a==null)return null;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){K(b,x[b]=a[b])})};var B=0;x.uniqueId=function(a){var b=B++;return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/.^/,D={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"};for(var E in D)D[D[E]]=E;var F=/\\|'|\r|\n|\t|\u2028|\u2029/g,G=/\\(\\|'|r|n|t|u2028|u2029)/g,H=function(a){return a.replace(G,function(a,b){return D[b]})};x.template=function(a,b,c){c=x.defaults(c||{},x.templateSettings);var d="__p+='"+a.replace(F,function(a){return"\\"+D[a]}).replace(c.escape||C,function(a,b){return"'+\n_.escape("+H(b)+")+\n'"}).replace(c.interpolate||C,function(a,b){return"'+\n("+H(b)+")+\n'"}).replace(c.evaluate||C,function(a,b){return"';\n"+H(b)+"\n;__p+='"})+"';\n";c.variable||(d="with(obj||{}){\n"+d+"}\n"),d="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+d+"return __p;\n";var e=new Function(c.variable||"obj","_",d);if(b)return e(b,x);var f=function(a){return e.call(this,a,x)};return f.source="function("+(c.variable||"obj")+"){\n"+d+"}",f},x.chain=function(a){return x(a).chain()};var I=function(a){this._wrapped=a};x.prototype=I.prototype;var J=function(a,b){return b?x(a).chain():a},K=function(a,b){I.prototype[a]=function(){var a=h.call(arguments);return i.call(a,this._wrapped),J(b.apply(x,a),this._chain)}};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=e[a];I.prototype[a]=function(){var c=this._wrapped;b.apply(c,arguments);var d=c.length;return(a=="shift"||a=="splice")&&d===0&&delete c[0],J(c,this._chain)}}),y(["concat","join","slice"],function(a){var b=e[a];I.prototype[a]=function(){return J(b.apply(this._wrapped,arguments),this._chain)}}),I.prototype.chain=function(){return this._chain=!0,this},I.prototype.value=function(){return this._wrapped},typeof define=="function"&&define.amd&&define("underscore",[],function(){return x})})).call(this),function(a,b){typeof exports!="undefined"?b(a,exports,require("underscore")):typeof define=="function"&&define.amd?define("backbone",["underscore","exports"],function(c,d){a.Backbone=b(a,d,c,$)}):a.Backbone=b(a,{},a._)}(this,function(a,b,c){var d=a.Backbone,e=Array.prototype.slice,f=Array.prototype.splice;b.VERSION="0.9.2",b.setDomLibrary=function(a){$=a},b.noConflict=function(){return a.Backbone=d,b},b.emulateHTTP=!1,b.emulateJSON=!1;var g=/\s+/,h=b.Events={on:function(a,b,c){var d,e,f,h,i;if(!b)return this;a=a.split(g),d=this._callbacks||(this._callbacks={});while(e=a.shift())i=d[e],f=i?i.tail:{},f.next=h={},f.context=c,f.callback=b,d[e]={tail:h,next:i?i.next:f};return this},off:function(a,b,d){var e,f,h,i,j,k;if(!(f=this._callbacks))return;if(!(a||b||d))return delete this._callbacks,this;a=a?a.split(g):c.keys(f);while(e=a.shift()){h=f[e],delete f[e];if(!h||!b&&!d)continue;i=h.tail;while((h=h.next)!==i)j=h.callback,k=h.context,(b&&j!==b||d&&k!==d)&&this.on(e,j,k)}return this},trigger:function(a){var b,c,d,f,h,i,j;if(!(d=this._callbacks))return this;i=d.all,a=a.split(g),j=e.call(arguments,1);while(b=a.shift()){if(c=d[b]){f=c.tail;while((c=c.next)!==f)c.callback.apply(c.context||this,j)}if(c=i){f=c.tail,h=[b].concat(j);while((c=c.next)!==f)c.callback.apply(c.context||this,h)}}return this}};h.bind=h.on,h.unbind=h.off;var i=b.Model=function(a,b){var d;a||(a={}),b&&b.parse&&(a=this.parse(a));if(d=z(this,"defaults"))a=c.extend({},d,a);b&&b.collection&&(this.collection=b.collection),this.attributes={},this._escapedAttributes={},this.cid=c.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(a,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=c.clone(this.attributes),this.initialize.apply(this,arguments)};c.extend(i.prototype,h,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(a){return c.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;var d=this.get(a);return this._escapedAttributes[a]=c.escape(d==null?"":""+d)},has:function(a){return this.get(a)!=null},set:function(a,b,d){var e,f,g;c.isObject(a)||a==null?(e=a,d=b):(e={},e[a]=b),d||(d={});if(!e)return this;e instanceof i&&(e=e.attributes);if(d.unset)for(f in e)e[f]=void 0;if(!this._validate(e,d))return!1;this.idAttribute in e&&(this.id=e[this.idAttribute]);var h=d.changes={},j=this.attributes,k=this._escapedAttributes,l=this._previousAttributes||{};for(f in e){g=e[f];if(!c.isEqual(j[f],g)||d.unset&&c.has(j,f))delete k[f],(d.silent?this._silent:h)[f]=!0;d.unset?delete j[f]:j[f]=g,!c.isEqual(l[f],g)||c.has(j,f)!=c.has(l,f)?(this.changed[f]=g,d.silent||(this._pending[f]=!0)):(delete this.changed[f],delete this._pending[f])}return d.silent||this.change(d),this},unset:function(a,b){return(b||(b={})).unset=!0,this.set(a,null,b)},clear:function(a){return(a||(a={})).unset=!0,this.set(c.clone(this.attributes),a)},fetch:function(a){a=a?c.clone(a):{};var d=this,e=a.success;return a.success=function(b,c,f){if(!d.set(d.parse(b,f),a))return!1;e&&e(d,b)},a.error=b.wrapError(a.error,d,a),(this.sync||b.sync).call(this,"read",this,a)},save:function(a,d,e){var f,g;c.isObject(a)||a==null?(f=a,e=d):(f={},f[a]=d),e=e?c.clone(e):{};if(e.wait){if(!this._validate(f,e))return!1;g=c.clone(this.attributes)}var h=c.extend({},e,{silent:!0});if(f&&!this.set(f,e.wait?h:e))return!1;var i=this,j=e.success;e.success=function(a,b,d){var g=i.parse(a,d);e.wait&&(delete e.wait,g=c.extend(f||{},g));if(!i.set(g,e))return!1;j?j(i,a):i.trigger("sync",i,a,e)},e.error=b.wrapError(e.error,i,e);var k=this.isNew()?"create":"update",l=(this.sync||b.sync).call(this,k,this,e);return e.wait&&this.set(g,h),l},destroy:function(a){a=a?c.clone(a):{};var d=this,e=a.success,f=function(){d.trigger("destroy",d,d.collection,a)};if(this.isNew())return f(),!1;a.success=function(b){a.wait&&f(),e?e(d,b):d.trigger("sync",d,b,a)},a.error=b.wrapError(a.error,d,a);var g=(this.sync||b.sync).call(this,"delete",this,a);return a.wait||f(),g},url:function(){var a=z(this,"urlRoot")||z(this.collection,"url")||A();return this.isNew()?a:a+(a.charAt(a.length-1)=="/"?"":"/")+encodeURIComponent(this.id)},parse:function(a,b){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var d in this._silent)this._pending[d]=!0;var e=c.extend({},a.changes,this._silent);this._silent={};for(var d in e)this.trigger("change:"+d,this,this.get(d),a);if(b)return this;while(!c.isEmpty(this._pending)){this._pending={},this.trigger("change",this,a);for(var d in this.changed){if(this._pending[d]||this._silent[d])continue;delete this.changed[d]}this._previousAttributes=c.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(a){return arguments.length?c.has(this.changed,a):!c.isEmpty(this.changed)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var b,d=!1,e=this._previousAttributes;for(var f in a){if(c.isEqual(e[f],b=a[f]))continue;(d||(d={}))[f]=b}return d},previous:function(a){return!arguments.length||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return c.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validate(a,b);return d?(b&&b.error?b.error(this,d,b):this.trigger("error",this,d,b),!1):!0}});var j=b.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,{silent:!0,parse:b.parse})};c.extend(j.prototype,h,{model:i,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var d,e,g,h,i,j,k={},l={},m=[];b||(b={}),a=c.isArray(a)?a.slice():[a];for(d=0,g=a.length;d<g;d++){if(!(h=a[d]=this._prepareModel(a[d],b)))throw new Error("Can't add an invalid model to a collection");i=h.cid,j=h.id;if(k[i]||this._byCid[i]||j!=null&&(l[j]||this._byId[j])){m.push(d);continue}k[i]=l[j]=h}d=m.length;while(d--)a.splice(m[d],1);for(d=0,g=a.length;d<g;d++)(h=a[d]).on("all",this._onModelEvent,this),this._byCid[h.cid]=h,h.id!=null&&(this._byId[h.id]=h);this.length+=g,e=b.at!=null?b.at:this.models.length,f.apply(this.models,[e,0].concat(a)),this.comparator&&this.sort({silent:!0});if(b.silent)return this;for(d=0,g=this.models.length;d<g;d++){if(!k[(h=this.models[d]).cid])continue;b.index=d,h.trigger("add",h,this,b)}return this},remove:function(a,b){var d,e,f,g;b||(b={}),a=c.isArray(a)?a.slice():[a];for(d=0,e=a.length;d<e;d++){g=this.getByCid(a[d])||this.get(a[d]);if(!g)continue;delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g)}return this},push:function(a,b){return a=this._prepareModel(a,b),this.add(a,b),a},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return a=this._prepareModel(a,b),this.add(a,c.extend({at:0},b)),a},shift:function(a){var b=this.at(0);return this.remove(b,a),b},get:function(a){return a==null?void 0:this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return c.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw new Error("Cannot sort a set without a comparator");var b=c.bind(this.comparator,this);return this.comparator.length==1?this.models=this.sortBy(b):this.models.sort(b),a.silent||this.trigger("reset",this,a),this},pluck:function(a){return c.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]),b||(b={});for(var d=0,e=this.models.length;d<e;d++)this._removeReference(this.models[d]);return this._reset(),this.add(a,c.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),this},fetch:function(a){a=a?c.clone(a):{},a.parse===undefined&&(a.parse=!0);var d=this,e=a.success;return a.success=function(b,c,f){d[a.add?"add":"reset"](d.parse(b,f),a),e&&e(d,b)},a.error=b.wrapError(a.error,d,a),(this.sync||b.sync).call(this,"read",this,a)},create:function(a,b){var d=this;b=b?c.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||d.add(a,b);var e=b.success;return b.success=function(c,f,g){b.wait&&d.add(c,b),e?e(c,f):c.trigger("sync",a,f,b)},a.save(null,b),a},parse:function(a,b){return a},chain:function(){return c(this.models).chain()},_reset:function(a){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(a,b){b||(b={});if(a instanceof i)a.collection||(a.collection=this);else{var c=a;b.collection=this,a=new this.model(c,b),a._validate(a.attributes,b)||(a=!1)}return a},_removeReference:function(a){this==a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){if(a!="add"&&a!="remove"||c==this)a=="destroy"&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,arguments);else return}});var k=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];c.each(k,function(a){j.prototype[a]=function(){return c[a].apply(c,[this.models].concat(c.toArray(arguments)))}});var l=b.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},m=/:\w+/g,n=/\*\w+/g,o=/[-[\]{}()+?.,\\^$|#\s]/g;c.extend(l.prototype,h,{initialize:function(){},route:function(a,d,e){return b.history||(b.history=new p),c.isRegExp(a)||(a=this._routeToRegExp(a)),e||(e=this[d]),b.history.route(a,c.bind(function(c){var f=this._extractParameters(a,c);e&&e.apply(this,f),this.trigger.apply(this,["route:"+d].concat(f)),b.history.trigger("route",this,d,f)},this)),this},navigate:function(a,c){b.history.navigate(a,c)},_bindRoutes:function(){if(!this.routes)return;var a=[];for(var b in this.routes)a.unshift([b,this.routes[b]]);for(var c=0,d=a.length;c<d;c++)this.route(a[c][0],a[c][1],this[a[c][1]])},_routeToRegExp:function(a){return a=a.replace(o,"\\$&").replace(m,"([^/]+)").replace(n,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var p=b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl")},q=/^[#\/]/,r=/msie [\w.]+/;p.started=!1,c.extend(p.prototype,h,{interval:50,getHash:function(a){var b=a?a.location:window.location,c=b.href.match(/#(.*)$/);return c?c[1]:""},getFragment:function(a,b){if(a==null)if(this._hasPushState||b){a=window.location.pathname;var c=window.location.search;c&&(a+=c)}else a=this.getHash();return a.indexOf(this.options.root)||(a=a.substr(this.options.root.length)),a.replace(q,"")},start:function(a){if(p.started)throw new Error("Backbone.history has already been started");p.started=!0,this.options=c.extend({},{root:"/"},this.options,a),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var b=this.getFragment(),d=document.documentMode,e=r.exec(navigator.userAgent.toLowerCase())&&(!d||d<=7);e&&(this.iframe=$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(b)),this._hasPushState?$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!e?$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=b;var f=window.location,g=f.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!g)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&g&&f.hash&&(this.fragment=this.getHash().replace(q,""),window.history.replaceState({},document.title,f.protocol+"//"+f.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},stop:function(){$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),p.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(a){var b=this.getFragment();b==this.fragment&&this.iframe&&(b=this.getFragment(this.getHash(this.iframe)));if(b==this.fragment)return!1;this.iframe&&this.navigate(b),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a),d=c.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0});return d},navigate:function(a,b){if(!p.started)return!1;if(!b||b===!0)b={trigger:b};var c=(a||"").replace(q,"");if(this.fragment==c)return;this._hasPushState?(c.indexOf(this.options.root)!=0&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a)},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var s=b.View=function(a){this.cid=c.uniqueId("view"),this._configure(a||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},t=/^(\S+)\s*(.*)$/,u=["model","collection","el","id","attributes","className","tagName"];c.extend(s.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(a,b,c){var d=document.createElement(a);return b&&$(d).attr(b),c!=null&&$(d).html(c),d},setElement:function(a,b){return this.$el&&this.undelegateEvents(),this.$el=a instanceof $?a:$(a),this.el=this.$el[0],b!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=z(this,"events")))return;this.undelegateEvents();for(var b in a){var d=a[b];c.isFunction(d)||(d=this[a[b]]);if(!d)throw new Error('Method "'+a[b]+'" does not exist');var e=b.match(t),f=e[1],g=e[2];d=c.bind(d,this),f+=".delegateEvents"+this.cid,g===""?this.$el.bind(f,d):this.$el.delegate(g,f,d)}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=c.extend({},this.options,a));for(var b=0,d=u.length;b<d;b++){var e=u[b];a[e]&&(this[e]=a[e])}this.options=a},_ensureElement:function(){if(!this.el){var a=z(this,"attributes")||{};this.id&&(a.id=this.id),this.className&&(a["class"]=this.className),this.setElement(this.make(this.tagName,a),!1)}else this.setElement(this.el,!1)}});var v=function(a,b){var c=y(this,a,b);return c.extend=this.extend,c};i.extend=j.extend=l.extend=s.extend=v;var w={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};b.sync=function(a,d,e){var f=w[a];e||(e={});var g={type:f,dataType:"json"};return e.url||(g.url=z(d,"url")||A()),!e.data&&d&&(a=="create"||a=="update")&&(g.contentType="application/json",g.data=JSON.stringify(d.toJSON())),b.emulateJSON&&(g.contentType="application/x-www-form-urlencoded",g.data=g.data?{model:g.data}:{}),b.emulateHTTP&&(f==="PUT"||f==="DELETE")&&(b.emulateJSON&&(g.data._method=f),g.type="POST",g.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",f)}),g.type!=="GET"&&!b.emulateJSON&&(g.processData=!1),$.ajax(c.extend(g,e))},b.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d,a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},y=function(a,b,d){var e;return b&&b.hasOwnProperty("constructor")?e=b.constructor:e=function(){a.apply(this,arguments)},c.extend(e,a),x.prototype=a.prototype,e.prototype=new x,b&&c.extend(e.prototype,b),d&&c.extend(e,d),e.prototype.constructor=e,e.__super__=a.prototype,e},z=function(a,b){return!a||!a[b]?null:c.isFunction(a[b])?a[b]():a[b]},A=function(){throw new Error('A "url" property or function must be specified')};return b}),function(a,b){define("utils/SetImmediate",[],function(){a.setImmediate===b&&(a.setImmediate=function(a){return setTimeout(a,0)}),a.clearImmediate===b&&(a.clearImmediate=a.clearTimeout)})}(this),function(a,b){define("IO/BackendSocket",["utils/SetImmediate"],function(b){console.log("BackendSocket - File loaded.");var c=a.setTimeout,d=a.clearTimeout,e=a.setImmediate,f=0,g=1,h=2,i=3,j=/^wdjs\:\/\//i,k=function(b){var c=this,d=f,k,l,m,n;if(!j.test(b))throw new Error('URL should be started with "wdjs://"');Object.defineProperty(this,"readyState",{get:function(){return d}}),Object.defineProperty(this,"extensions",{value:""}),Object.defineProperty(this,"protocol",{value:""}),Object.defineProperty(this,"onopen",{get:function(){return k},set:function(a){return k=a,c}}),Object.defineProperty(this,"onerror",{get:function(){return l},set:function(a){return l=a,c}}),Object.defineProperty(this,"onclose",{get:function(){return m},set:function(a){return m=a,c}}),Object.defineProperty(this,"onmessage",{get:function(){return n},set:function(a){return n=a,c}}),this.close=function(){if(d===h||d===i)return;d=h,e(function(){d=i,typeof m=="function"&&m()})},this.send=function(){throw new Error("send is disabled and not implemented in BackendSocket")},e(function(){if(d!==f)return;a.OneRingStreaming("*",function(a,b,c){typeof n=="function"&&!!b&&!!c&&n({data:{deviceId:a,channel:b,data:c}})}),d=g,typeof k=="function"&&k()})};return k})}(this),function(a,b){define("utils/FilterFunction",[],function(){var a={},b="data",c=function(a){return JSON.stringify(a)},d=function(a){var b=a.split("."),d=b.map(c);return"["+d.join("][")+"]"},e=a.operators={};return e[""]=e.eq=function(a,b){var e,f=arguments.callee;if(a.constructor===String||a.constructor===Number||a.constructor===Boolean)e=b+"==="+c(a);else if(a instanceof Array){e=b+".length==="+a.length;for(var g=0,h=a.length;g<h;g++)e+="&&"+f(a[g],b+"["+g+"]")}else e="Object.keys("+b+").length==="+Object.keys(a).length,Object.keys(a).forEach(function(c){e+="&&"+f(a[c],b+d(c))});return e},e.ne=function(a,b){var c=e.eq(a,b);return"!("+c+")"},e.lt=function(a,b){return b+"<"+c(a)},e.lte=function(a,b){return b+"<="+c(a)},e.gt=function(a,b){return b+">"+c(a)},e.gte=function(a,b){return b+">="+c(a)},a.generate=function(a){var c="return true";return Object.keys(a).forEach(function(f){var g=a[f];if(g.constructor===String||g.constructor===Number||g.constructor===Boolean)""in e&&(c+="&&"+e[""](g,b+d(f)));else{var h=!1;Object.keys(g).forEach(function(a){if(a.indexOf("$")===0){h=!0;var i=a.substr(1);i in e&&(c+="&&"+e[i](g[a],b+d(f)))}}),h||(c+="&&"+e[""](g,b+d(f)))}}),c+=";",new Function(b,c)},a})}(this),function(a,b){define("IO/MessageRouterMixin",["underscore","backbone","utils/FilterFunction"],function(c,d,e){console.log("MessageRouterMixin - File loaded.");var f=1,g=c.extend(function(){},d.Events),h=function(b,c,d){return f++,this.callbackList.push({id:f,route:b,filter:e.generate(b),callback:c,context:d||a}),f},i=function(a){var c=this.callbackList,d=e.generate({id:a}),f;for(f=c.length;f--;b)if(d(c[f])){c.splice(f,1);break}},j=function(a){c.each(this.callbackList,function(b){b.filter(a)&&b.callback.call(b.context,JSON.parse(a.data.data))})};return g.mixin=function(a){a.onmessage=h.bind(a),a.offmessage=i.bind(a),a.on("message",j.bind(a)),a.callbackList=[]},g})}(this),function(a,b){define("IO/IO",["underscore","backbone","IO/BackendSocket","IO/MessageRouterMixin"],function(b,c,d,e){var f=b.extend(function(){},c.Events);e.mixin(f),f.Backend=b.extend(function(){},c.Events),e.mixin(f.Backend),f.Backend.socket=new d("wdjs://window/events"),f.Backend.socket.onmessage=function(a){f.Backend.trigger("message",a)},f.Backend.requestAsync=function(b,c){var d=$.Deferred();typeof b!="string"&&(c=b,b=c.url);var e=b;c=c||{},c.type=c.type||"get",c.data=c.data||{};var f=function(b){b=JSON.parse(b),b.state_line=b.state_line||b.state_code,c.success&&c.success.call(a,b),d.resolve(b)};switch(c.type.toLowerCase()){case"get":var g=[],h;for(h in c.data)g.push(h+"="+a.encodeURIComponent(c.data[h]));g.length>0&&(b+="?"+g.join("&")),a.OneRingRequest(c.type,b,null,f);break;case"post":a.OneRingRequest(c.type,b,a.encodeURIComponent(JSON.stringify(c.data)),f)}return d.promise()},f.Cloud=b.extend(function(){},c.Events),e(f.Cloud),f.Cloud.requestAsync=$.ajax,f.requestAsync=function(a,b){var c=typeof a=="string"?a:a.url;return/^wdj:/.test(c)?f.Backend.requestAsync.apply(f.Backend,arguments):f.Cloud.requestAsync.apply(f.Cloud,arguments)},f.Backend.on("message",function(a){f.trigger("message",b.extend(a,{source:"backend"}))}),f.Cloud.on("message",function(a){f.trigger("message",b.extend(a,{source:"cloud"}))});if(c&&c.sync){var g={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};c.sync=function(a,b,c){var d=b.url,e={url:b.url,type:g[a],contentType:"application/json",data:b.data||{},dataType:"json",processData:!1,success:c.success,error:c.error};f.requestAsync(d,e)}}return f})}(this),function(a,b){define("Doraemon/Doraemon",["IO/IO"],function(a){var b={};return b.openExtensionAsync=function(b,c,d){var e=$.Deferred();return a.requestAsync({url:"wdj://window/publish.json",data:{channel:"sidebar.preview",value:JSON.stringify({id:b,name:c,targetURL:d})},success:function(a){a.state_code===200?e.resolve(a):e.reject(a)}}),e.promise()},b.downloadAsync=function(b,c,d,e,f){var g=$.Deferred(),h;switch(b){case"app":h="wdj://apps/download.json";break;case"app-data":h="wdj://apps_data/download.json";break;case"music":h="wdj://music/download.json";break;case"photo":h="wdj://photo/download.json";break;case"video":h="wdj://video/download.json";break;case"book":h="wdj://book/download.json";break;default:h="wdj://apps/download.json"}return a.requestAsync({url:h,data:{url:c,name:d,icon:e,source:"SnapPea SDK",format:f||""},success:function(a){a.state_code===200?g.resolve(a):g.reject(a)}}),g.promise()},b})}(this),function(a,b){define("Social/Social",["IO/IO"],function(a){var b={};return b.share=function(b,c,d,e){var f=$.Deferred();return a.requestAsync({url:"wdj://social/doraemon_share",data:{extension_id:b,title:c||"",content:d||"",image:e||""},success:function(a){a.state_code===200?f.resolve(a):f.reject(a)}}),f.promise()},b})}(this),function(a,b){define("utils/QueryString",[],function(){var b="[?&#]",c="=([^&]*)",d={};return d.get=function(d,e){var e=e||a.location.search,f=e.match(new RegExp(b+d+c,"i")),g=f&&f[1],h=g&&decodeURIComponent(g);return h},d})}(this),function(a,b){define("Device/Device",["IO/IO","utils/QueryString"],function(b,c){var d=a.alert,e=Backbone.Model.extend({defaults:{isConnected:!1,isMounted:!1,hasSDCard:!1,hasEmulatedSD:!1,isUSB:!1,isWifi:!1,isInternet:!1,SDKVersion:0,productId:"",isRoot:!1,deviceName:"",screen:new Backbone.Model,build:new Backbone.Model},initialize:function(){this.on("change:isConnected",function(a,c){c&&(b.requestAsync("wdj://device/screen.json").done(function(a){a.state_code===200&&this.get("screen").set({height:a.body.height,width:a.body.width,rotation:a.body.rotation,pixelFormat:a.body.pixel_format,refreshRate:a.body.refresh_rate})}.bind(this)),b.requestAsync("wdj://device/build.json").done(function(a){a.state_code===200&&this.get("build").set({brand:a.body.brand,device:a.body.device,display:a.body.display,manufacturer:a.body.manufacturer,model:a.body.model,product:a.body.product,release:a.body.release,sdk:a.body.sdk})}.bind(this)),b.requestAsync("wdj://device/features.json").done(function(a){a.state_code===200&&this.set("features",a.body.value)}.bind(this)))},this),b.requestAsync("wdj://device/state.json").done(function(a){a.state_code===200&&this.changeHandler(a.body)}.bind(this)),b.onmessage({"data.channel":"device.state_changed"},this.changeHandler,this)},changeHandler:function(a){this.set({isConnected:a.connection_state,isMounted:a.mmount_state===1?!0:!1,hasSDCard:a.mmount_state===2?!1:!0,hasEmulatedSD:!a.has_non_emulated_external_storage,isUSB:a.type===1,isWifi:a.type===3,isInternet:a.type===4,SDKVersion:a.sdk_version,productId:a.product_id,isRoot:a.is_root,deviceName:a.device_name})}}),f=new e;return f})}(this),function(a,b){define("App/AppsCollection",["backbone","underscore","IO/IO","Device/Device"],function(a,b,c,d){var e=a.Collection.extend({url:"wdj://apps/show.json",data:{upgrade_info:1},parse:function(a){a.state_code===202&&d.get("isConnected")&&(this.syncing=!0,this.trigger("syncStart")),this.loadingUpdateInfo=a.state_code===251||a.state_code===202;var c=b.map(a.body.app,function(a){return{id:a.base_info.package_name,packageName:a.base_info.package_name,versionCode:a.base_info.version_code}});return c},initialize:function(){var a=!1,b=!1,d=!1;Object.defineProperties(this,{loading:{set:function(b){a=b},get:function(){return a}},loadingUpdateInfo:{set:function(a){b=a},get:function(){return b}},syncing:{set:function(a){d=a},get:function(){return d}}}),this.on("update",function(){a||(a=!0,this.fetch({success:function(b){a=!1,b.trigger("refresh",b)}}))},this),c.Backend.onmessage({"data.channel":"apps.updated"},function(b){d&&(d=!1,this.trigger("syncEnd")),b?this.trigger("update"):a=!1},this)}}),f,g=b.extend({getInstance:function(){return f||(f=new e,f.trigger("update")),f}});return g})}(this),function(a,b){define("App/App",["underscore","backbone","IO/IO","App/AppsCollection"],function(a,b,c,d){var e=d.getInstance(),f=a.extend({},b.Events);return e.on("refresh",function(){f.trigger("refresh")}),f.detectApp=function(a,b){var c=e.get("packageName"),d=0;return c?c.get("versionCode")>=b?d=1:d=2:d=0,d},f.detectApps=function(b){return a.map(b,function(a){return{packageName:a.packageName,result:f.detectApp(a.packageName,a.versionCode)}})},f})}(this),function(a,b){require.config({paths:{underscore:"libraries/underscore-1.4.4",backbone:"libraries/backbone-1.0.0"},shim:{underscore:{exports:"_"},backbone:{deps:["underscore"],exports:"Backbone"}}}),require(["Doraemon/Doraemon","IO/IO","Social/Social","Device/Device","App/App"],function(b,c,d,e,f){console.log("OneRing is now ruling Narya ...");var g=a,h={App:f,Doraemon:b,IO:c,Social:d,Device:e};return g.Narya=g.SnapPea=h,h})}(this),define("Narya",function(){})