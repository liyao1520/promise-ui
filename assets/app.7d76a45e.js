function kr(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Al="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Ol=kr(Al);function zn(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=ye(r)?Ll(r):zn(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(ye(e))return e;if(he(e))return e}}const Rl=/;(?![^(]*\))/g,Il=/:([^]+)/,Vl=/\/\*.*?\*\//gs;function Ll(e){const t={};return e.replace(Vl,"").split(Rl).forEach(n=>{if(n){const r=n.split(Il);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function me(e){let t="";if(ye(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=me(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Hl(e){if(!e)return null;let{class:t,style:n}=e;return t&&!ye(t)&&(e.class=me(t)),n&&(e.style=zn(n)),e}const $l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bl=kr($l);function Ei(e){return!!e||e===""}function Dl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Et(e[r],t[r]);return n}function Et(e,t){if(e===t)return!0;let n=xs(e),r=xs(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Vn(e),r=Vn(t),n||r)return e===t;if(n=D(e),r=D(t),n||r)return n&&r?Dl(e,t):!1;if(n=he(e),r=he(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!Et(e[i],t[i]))return!1}}return String(e)===String(t)}function Sr(e,t){return e.findIndex(n=>Et(n,t))}const ie=e=>ye(e)?e:e==null?"":D(e)||he(e)&&(e.toString===Pi||!Z(e.toString))?JSON.stringify(e,Ti,2):String(e),Ti=(e,t)=>t&&t.__v_isRef?Ti(e,t.value):tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:qt(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!D(t)&&!Ni(t)?String(t):t,fe={},en=[],Je=()=>{},Fl=()=>!1,Ul=/^on[^a-z]/,jn=e=>Ul.test(e),Ho=e=>e.startsWith("onUpdate:"),xe=Object.assign,$o=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zl=Object.prototype.hasOwnProperty,ae=(e,t)=>zl.call(e,t),D=Array.isArray,tn=e=>Kn(e)==="[object Map]",qt=e=>Kn(e)==="[object Set]",xs=e=>Kn(e)==="[object Date]",Z=e=>typeof e=="function",ye=e=>typeof e=="string",Vn=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Bo=e=>he(e)&&Z(e.then)&&Z(e.catch),Pi=Object.prototype.toString,Kn=e=>Pi.call(e),jl=e=>Kn(e).slice(8,-1),Ni=e=>Kn(e)==="[object Object]",Do=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ar=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Kl=/-(\w)/g,Ve=Ar(e=>e.replace(Kl,(t,n)=>n?n.toUpperCase():"")),Gl=/\B([A-Z])/g,Ge=Ar(e=>e.replace(Gl,"-$1").toLowerCase()),Gn=Ar(e=>e.charAt(0).toUpperCase()+e.slice(1)),Nn=Ar(e=>e?`on${Gn(e)}`:""),cn=(e,t)=>!Object.is(e,t),nn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ut=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Cs;const Wl=()=>Cs||(Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let $e;class Fo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}run(t){if(this.active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function ql(e){return new Fo(e)}function Mi(e,t=$e){t&&t.active&&t.effects.push(e)}function ki(){return $e}function Si(e){$e&&$e.cleanups.push(e)}const Uo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ai=e=>(e.w&Tt)>0,Oi=e=>(e.n&Tt)>0,Yl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Tt},Jl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Ai(o)&&!Oi(o)?o.delete(e):t[n++]=o,o.w&=~Tt,o.n&=~Tt}t.length=n}},po=new WeakMap;let wn=0,Tt=1;const fo=30;let Ye;const Bt=Symbol(""),mo=Symbol("");class Wn{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mi(this,r)}run(){if(!this.active)return this.fn();let t=Ye,n=xt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ye,Ye=this,xt=!0,Tt=1<<++wn,wn<=fo?Yl(this):ws(this),this.fn()}finally{wn<=fo&&Jl(this),Tt=1<<--wn,Ye=this.parent,xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(ws(this),this.onStop&&this.onStop(),this.active=!1)}}function ws(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function Xl(e,t){e.effect&&(e=e.effect.fn);const n=new Wn(e);t&&(xe(n,t),t.scope&&Mi(n,t.scope)),(!t||!t.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function Ql(e){e.effect.stop()}let xt=!0;const Ri=[];function mn(){Ri.push(xt),xt=!1}function hn(){const e=Ri.pop();xt=e===void 0?!0:e}function Ue(e,t,n){if(xt&&Ye){let r=po.get(e);r||po.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Uo()),Ii(o)}}function Ii(e,t){let n=!1;wn<=fo?Oi(e)||(e.n|=Tt,n=!Ai(e)):n=!e.has(Ye),n&&(e.add(Ye),Ye.deps.push(e))}function dt(e,t,n,r,o,s){const i=po.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&D(e)){const l=ut(r);i.forEach((c,p)=>{(p==="length"||p>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":D(e)?Do(n)&&a.push(i.get("length")):(a.push(i.get(Bt)),tn(e)&&a.push(i.get(mo)));break;case"delete":D(e)||(a.push(i.get(Bt)),tn(e)&&a.push(i.get(mo)));break;case"set":tn(e)&&a.push(i.get(Bt));break}if(a.length===1)a[0]&&ho(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ho(Uo(l))}}function ho(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&Es(r);for(const r of n)r.computed||Es(r)}function Es(e,t){(e!==Ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Zl=kr("__proto__,__v_isRef,__isVue"),Vi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vn)),ec=Or(),tc=Or(!1,!0),nc=Or(!0),rc=Or(!0,!0),Ts=oc();function oc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=le(this);for(let s=0,i=this.length;s<i;s++)Ue(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(le)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){mn();const r=le(this)[t].apply(this,n);return hn(),r}}),e}function Or(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Ui:Fi:t?Di:Bi).get(r))return r;const i=D(r);if(!e&&i&&ae(Ts,o))return Reflect.get(Ts,o,s);const a=Reflect.get(r,o,s);return(Vn(o)?Vi.has(o):Zl(o))||(e||Ue(r,"get",o),t)?a:Ee(a)?i&&Do(o)?a:a.value:he(a)?e?Vr(a):qn(a):a}}const sc=Li(),ic=Li(!0);function Li(e=!1){return function(n,r,o,s){let i=n[r];if(zt(i)&&Ee(i)&&!Ee(o))return!1;if(!e&&(!Ln(o)&&!zt(o)&&(i=le(i),o=le(o)),!D(n)&&Ee(i)&&!Ee(o)))return i.value=o,!0;const a=D(n)&&Do(r)?Number(r)<n.length:ae(n,r),l=Reflect.set(n,r,o,s);return n===le(s)&&(a?cn(o,i)&&dt(n,"set",r,o):dt(n,"add",r,o)),l}}function ac(e,t){const n=ae(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&dt(e,"delete",t,void 0),r}function lc(e,t){const n=Reflect.has(e,t);return(!Vn(t)||!Vi.has(t))&&Ue(e,"has",t),n}function cc(e){return Ue(e,"iterate",D(e)?"length":Bt),Reflect.ownKeys(e)}const Hi={get:ec,set:sc,deleteProperty:ac,has:lc,ownKeys:cc},$i={get:nc,set(e,t){return!0},deleteProperty(e,t){return!0}},uc=xe({},Hi,{get:tc,set:ic}),dc=xe({},$i,{get:rc}),zo=e=>e,Rr=e=>Reflect.getPrototypeOf(e);function or(e,t,n=!1,r=!1){e=e.__v_raw;const o=le(e),s=le(t);n||(t!==s&&Ue(o,"get",t),Ue(o,"get",s));const{has:i}=Rr(o),a=r?zo:n?Ko:Hn;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function sr(e,t=!1){const n=this.__v_raw,r=le(n),o=le(e);return t||(e!==o&&Ue(r,"has",e),Ue(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ir(e,t=!1){return e=e.__v_raw,!t&&Ue(le(e),"iterate",Bt),Reflect.get(e,"size",e)}function Ps(e){e=le(e);const t=le(this);return Rr(t).has.call(t,e)||(t.add(e),dt(t,"add",e,e)),this}function Ns(e,t){t=le(t);const n=le(this),{has:r,get:o}=Rr(n);let s=r.call(n,e);s||(e=le(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?cn(t,i)&&dt(n,"set",e,t):dt(n,"add",e,t),this}function Ms(e){const t=le(this),{has:n,get:r}=Rr(t);let o=n.call(t,e);o||(e=le(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&dt(t,"delete",e,void 0),s}function ks(){const e=le(this),t=e.size!==0,n=e.clear();return t&&dt(e,"clear",void 0,void 0),n}function ar(e,t){return function(r,o){const s=this,i=s.__v_raw,a=le(i),l=t?zo:e?Ko:Hn;return!e&&Ue(a,"iterate",Bt),i.forEach((c,p)=>r.call(o,l(c),l(p),s))}}function lr(e,t,n){return function(...r){const o=this.__v_raw,s=le(o),i=tn(s),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=o[e](...r),p=n?zo:t?Ko:Hn;return!t&&Ue(s,"iterate",l?mo:Bt),{next(){const{value:f,done:g}=c.next();return g?{value:f,done:g}:{value:a?[p(f[0]),p(f[1])]:p(f),done:g}},[Symbol.iterator](){return this}}}}function ht(e){return function(...t){return e==="delete"?!1:this}}function pc(){const e={get(s){return or(this,s)},get size(){return ir(this)},has:sr,add:Ps,set:Ns,delete:Ms,clear:ks,forEach:ar(!1,!1)},t={get(s){return or(this,s,!1,!0)},get size(){return ir(this)},has:sr,add:Ps,set:Ns,delete:Ms,clear:ks,forEach:ar(!1,!0)},n={get(s){return or(this,s,!0)},get size(){return ir(this,!0)},has(s){return sr.call(this,s,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:ar(!0,!1)},r={get(s){return or(this,s,!0,!0)},get size(){return ir(this,!0)},has(s){return sr.call(this,s,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=lr(s,!1,!1),n[s]=lr(s,!0,!1),t[s]=lr(s,!1,!0),r[s]=lr(s,!0,!0)}),[e,n,t,r]}const[fc,mc,hc,gc]=pc();function Ir(e,t){const n=t?e?gc:hc:e?mc:fc;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ae(n,o)&&o in r?n:r,o,s)}const _c={get:Ir(!1,!1)},vc={get:Ir(!1,!0)},yc={get:Ir(!0,!1)},bc={get:Ir(!0,!0)},Bi=new WeakMap,Di=new WeakMap,Fi=new WeakMap,Ui=new WeakMap;function xc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cc(e){return e.__v_skip||!Object.isExtensible(e)?0:xc(jl(e))}function qn(e){return zt(e)?e:Lr(e,!1,Hi,_c,Bi)}function zi(e){return Lr(e,!1,uc,vc,Di)}function Vr(e){return Lr(e,!0,$i,yc,Fi)}function wc(e){return Lr(e,!0,dc,bc,Ui)}function Lr(e,t,n,r,o){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Cc(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return o.set(e,a),a}function Dt(e){return zt(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function zt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function jo(e){return Dt(e)||zt(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function rn(e){return yr(e,"__v_skip",!0),e}const Hn=e=>he(e)?qn(e):e,Ko=e=>he(e)?Vr(e):e;function Go(e){xt&&Ye&&(e=le(e),Ii(e.dep||(e.dep=Uo())))}function Hr(e,t){e=le(e),e.dep&&ho(e.dep)}function Ee(e){return!!(e&&e.__v_isRef===!0)}function ue(e){return Ki(e,!1)}function ji(e){return Ki(e,!0)}function Ki(e,t){return Ee(e)?e:new Ec(e,t)}class Ec{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:Hn(t)}get value(){return Go(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||zt(t);t=n?t:le(t),cn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Hn(t),Hr(this))}}function Tc(e){Hr(e)}function w(e){return Ee(e)?e.value:e}const Pc={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Ee(o)&&!Ee(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Wo(e){return Dt(e)?e:new Proxy(e,Pc)}class Nc{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Go(this),()=>Hr(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Mc(e){return new Nc(e)}function kc(e){const t=D(e)?new Array(e.length):{};for(const n in e)t[n]=Gi(e,n);return t}class Sc{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Gi(e,t,n){const r=e[t];return Ee(r)?r:new Sc(e,t,n)}var Wi;class Ac{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Wi]=!1,this._dirty=!0,this.effect=new Wn(t,()=>{this._dirty||(this._dirty=!0,Hr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=le(this);return Go(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Wi="__v_isReadonly";function Oc(e,t,n=!1){let r,o;const s=Z(e);return s?(r=e,o=Je):(r=e.get,o=e.set),new Ac(r,o,s||!o,n)}function Rc(e,...t){}function ct(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){Yt(s,t,n)}return o}function De(e,t,n,r){if(Z(e)){const s=ct(e,t,n,r);return s&&Bo(s)&&s.catch(i=>{Yt(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(De(e[s],t,n,r));return o}function Yt(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,i,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){ct(l,null,10,[e,i,a]);return}}Ic(e,n,o,r)}function Ic(e,t,n,r=!0){console.error(e)}let $n=!1,go=!1;const ke=[];let et=0;const on=[];let at=null,It=0;const qi=Promise.resolve();let qo=null;function Jt(e){const t=qo||qi;return e?t.then(this?e.bind(this):e):t}function Vc(e){let t=et+1,n=ke.length;for(;t<n;){const r=t+n>>>1;Bn(ke[r])<e?t=r+1:n=r}return t}function $r(e){(!ke.length||!ke.includes(e,$n&&e.allowRecurse?et+1:et))&&(e.id==null?ke.push(e):ke.splice(Vc(e.id),0,e),Yi())}function Yi(){!$n&&!go&&(go=!0,qo=qi.then(Ji))}function Lc(e){const t=ke.indexOf(e);t>et&&ke.splice(t,1)}function Yo(e){D(e)?on.push(...e):(!at||!at.includes(e,e.allowRecurse?It+1:It))&&on.push(e),Yi()}function Ss(e,t=$n?et+1:0){for(;t<ke.length;t++){const n=ke[t];n&&n.pre&&(ke.splice(t,1),t--,n())}}function br(e){if(on.length){const t=[...new Set(on)];if(on.length=0,at){at.push(...t);return}for(at=t,at.sort((n,r)=>Bn(n)-Bn(r)),It=0;It<at.length;It++)at[It]();at=null,It=0}}const Bn=e=>e.id==null?1/0:e.id,Hc=(e,t)=>{const n=Bn(e)-Bn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ji(e){go=!1,$n=!0,ke.sort(Hc);const t=Je;try{for(et=0;et<ke.length;et++){const n=ke[et];n&&n.active!==!1&&ct(n,null,14)}}finally{et=0,ke.length=0,br(),$n=!1,qo=null,(ke.length||on.length)&&Ji()}}let Zt,cr=[];function Xi(e,t){var n,r;Zt=e,Zt?(Zt.enabled=!0,cr.forEach(({event:o,args:s})=>Zt.emit(o,...s)),cr=[]):typeof window<"u"&&window.HTMLElement&&!(!((r=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||r===void 0)&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Xi(s,t)}),setTimeout(()=>{Zt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,cr=[])},3e3)):cr=[]}function $c(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||fe;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:g}=r[p]||fe;g&&(o=n.map(y=>ye(y)?y.trim():y)),f&&(o=n.map(ut))}let a,l=r[a=Nn(t)]||r[a=Nn(Ve(t))];!l&&s&&(l=r[a=Nn(Ge(t))]),l&&De(l,e,6,o);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,De(c,e,6,o)}}function Qi(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!Z(e)){const l=c=>{const p=Qi(c,t,!0);p&&(a=!0,xe(i,p))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(he(e)&&r.set(e,null),null):(D(s)?s.forEach(l=>i[l]=null):xe(i,s),he(e)&&r.set(e,i),i)}function Br(e,t){return!e||!jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Ge(t))||ae(e,t))}let Pe=null,Dr=null;function Dn(e){const t=Pe;return Pe=e,Dr=e&&e.type.__scopeId||null,t}function ze(e){Dr=e}function je(){Dr=null}const Bc=e=>X;function X(e,t=Pe,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Eo(-1);const s=Dn(t);let i;try{i=e(...o)}finally{Dn(s),r._d&&Eo(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function _r(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:p,renderCache:f,data:g,setupState:y,ctx:P,inheritAttrs:R}=e;let z,C;const h=Dn(e);try{if(n.shapeFlag&4){const k=o||r;z=Be(p.call(k,k,f,s,y,g,P)),C=l}else{const k=t;z=Be(k.length>1?k(s,{attrs:l,slots:a,emit:c}):k(s,null)),C=t.props?l:Fc(l)}}catch(k){Sn.length=0,Yt(k,e,1),z=O(Se)}let b=z;if(C&&R!==!1){const k=Object.keys(C),{shapeFlag:H}=b;k.length&&H&7&&(i&&k.some(Ho)&&(C=Uc(C,i)),b=rt(b,C))}return n.dirs&&(b=rt(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),z=b,Dn(h),z}function Dc(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(Pt(r)){if(r.type!==Se||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||jn(n))&&((t||(t={}))[n]=e[n]);return t},Uc=(e,t)=>{const n={};for(const r in e)(!Ho(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zc(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?As(r,i,c):!!i;if(l&8){const p=t.dynamicProps;for(let f=0;f<p.length;f++){const g=p[f];if(i[g]!==r[g]&&!Br(c,g))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?As(r,i,c):!0:!!i;return!1}function As(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Br(n,s))return!0}return!1}function Jo({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Zi=e=>e.__isSuspense,jc={name:"Suspense",__isSuspense:!0,process(e,t,n,r,o,s,i,a,l,c){e==null?Gc(t,n,r,o,s,i,a,l,c):Wc(e,t,n,r,o,i,a,l,c)},hydrate:qc,create:Xo,normalize:Yc},Kc=jc;function Fn(e,t){const n=e.props&&e.props[t];Z(n)&&n()}function Gc(e,t,n,r,o,s,i,a,l){const{p:c,o:{createElement:p}}=l,f=p("div"),g=e.suspense=Xo(e,o,r,t,f,n,s,i,a,l);c(null,g.pendingBranch=e.ssContent,f,null,r,g,s,i),g.deps>0?(Fn(e,"onPending"),Fn(e,"onFallback"),c(null,e.ssFallback,t,n,r,null,s,i),sn(g,e.ssFallback)):g.resolve()}function Wc(e,t,n,r,o,s,i,a,{p:l,um:c,o:{createElement:p}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const g=t.ssContent,y=t.ssFallback,{activeBranch:P,pendingBranch:R,isInFallback:z,isHydrating:C}=f;if(R)f.pendingBranch=g,tt(g,R)?(l(R,g,f.hiddenContainer,null,o,f,s,i,a),f.deps<=0?f.resolve():z&&(l(P,y,n,r,o,null,s,i,a),sn(f,y))):(f.pendingId++,C?(f.isHydrating=!1,f.activeBranch=R):c(R,o,f),f.deps=0,f.effects.length=0,f.hiddenContainer=p("div"),z?(l(null,g,f.hiddenContainer,null,o,f,s,i,a),f.deps<=0?f.resolve():(l(P,y,n,r,o,null,s,i,a),sn(f,y))):P&&tt(g,P)?(l(P,g,n,r,o,f,s,i,a),f.resolve(!0)):(l(null,g,f.hiddenContainer,null,o,f,s,i,a),f.deps<=0&&f.resolve()));else if(P&&tt(g,P))l(P,g,n,r,o,f,s,i,a),sn(f,g);else if(Fn(t,"onPending"),f.pendingBranch=g,f.pendingId++,l(null,g,f.hiddenContainer,null,o,f,s,i,a),f.deps<=0)f.resolve();else{const{timeout:h,pendingId:b}=f;h>0?setTimeout(()=>{f.pendingId===b&&f.fallback(y)},h):h===0&&f.fallback(y)}}function Xo(e,t,n,r,o,s,i,a,l,c,p=!1){const{p:f,m:g,um:y,n:P,o:{parentNode:R,remove:z}}=c,C=ut(e.props&&e.props.timeout),h={vnode:e,parent:t,parentComponent:n,isSVG:i,container:r,hiddenContainer:o,anchor:s,deps:0,pendingId:0,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:p,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:k,activeBranch:H,pendingBranch:j,pendingId:F,effects:M,parentComponent:W,container:G}=h;if(h.isHydrating)h.isHydrating=!1;else if(!b){const oe=H&&j.transition&&j.transition.mode==="out-in";oe&&(H.transition.afterLeave=()=>{F===h.pendingId&&g(j,G,K,0)});let{anchor:K}=h;H&&(K=P(H),y(H,W,h,!0)),oe||g(j,G,K,0)}sn(h,j),h.pendingBranch=null,h.isInFallback=!1;let J=h.parent,B=!1;for(;J;){if(J.pendingBranch){J.effects.push(...M),B=!0;break}J=J.parent}B||Yo(M),h.effects=[],Fn(k,"onResolve")},fallback(b){if(!h.pendingBranch)return;const{vnode:k,activeBranch:H,parentComponent:j,container:F,isSVG:M}=h;Fn(k,"onFallback");const W=P(H),G=()=>{h.isInFallback&&(f(null,b,F,W,j,null,M,a,l),sn(h,b))},J=b.transition&&b.transition.mode==="out-in";J&&(H.transition.afterLeave=G),h.isInFallback=!0,y(H,j,null,!0),J||G()},move(b,k,H){h.activeBranch&&g(h.activeBranch,b,k,H),h.container=b},next(){return h.activeBranch&&P(h.activeBranch)},registerDep(b,k){const H=!!h.pendingBranch;H&&h.deps++;const j=b.vnode.el;b.asyncDep.catch(F=>{Yt(F,b,0)}).then(F=>{if(b.isUnmounted||h.isUnmounted||h.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:M}=b;To(b,F,!1),j&&(M.el=j);const W=!j&&b.subTree.el;k(b,M,R(j||b.subTree.el),j?null:P(b.subTree),h,i,l),W&&z(W),Jo(b,M.el),H&&--h.deps===0&&h.resolve()})},unmount(b,k){h.isUnmounted=!0,h.activeBranch&&y(h.activeBranch,n,b,k),h.pendingBranch&&y(h.pendingBranch,n,b,k)}};return h}function qc(e,t,n,r,o,s,i,a,l){const c=t.suspense=Xo(t,r,n,e.parentNode,document.createElement("div"),null,o,s,i,a,!0),p=l(e,c.pendingBranch=t.ssContent,n,c,s,i);return c.deps===0&&c.resolve(),p}function Yc(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Os(r?n.default:n),e.ssFallback=r?Os(n.fallback):O(Se)}function Os(e){let t;if(Z(e)){const n=Gt&&e._c;n&&(e._d=!1,d()),e=e(),n&&(e._d=!0,t=Ie,Ta())}return D(e)&&(e=Dc(e)),e=Be(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function ea(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Yo(e)}function sn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,o=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=o,Jo(r,o))}function Fr(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function nt(e,t,n=!1){const r=we||Pe;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Z(t)?t.call(r.proxy):t}}function gn(e,t){return Yn(e,null,t)}function Qo(e,t){return Yn(e,null,{flush:"post"})}function Jc(e,t){return Yn(e,null,{flush:"sync"})}const ur={};function Fe(e,t,n){return Yn(e,t,n)}function Yn(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=fe){const a=we;let l,c=!1,p=!1;if(Ee(e)?(l=()=>e.value,c=Ln(e)):Dt(e)?(l=()=>e,r=!0):D(e)?(p=!0,c=e.some(b=>Dt(b)||Ln(b)),l=()=>e.map(b=>{if(Ee(b))return b.value;if(Dt(b))return Ht(b);if(Z(b))return ct(b,a,2)})):Z(e)?t?l=()=>ct(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),De(e,a,3,[g])}:l=Je,t&&r){const b=l;l=()=>Ht(b())}let f,g=b=>{f=C.onStop=()=>{ct(b,a,4)}},y;if(dn)if(g=Je,t?n&&De(t,a,3,[l(),p?[]:void 0,g]):l(),o==="sync"){const b=La();y=b.__watcherHandles||(b.__watcherHandles=[])}else return Je;let P=p?new Array(e.length).fill(ur):ur;const R=()=>{if(C.active)if(t){const b=C.run();(r||c||(p?b.some((k,H)=>cn(k,P[H])):cn(b,P)))&&(f&&f(),De(t,a,3,[b,P===ur?void 0:p&&P[0]===ur?[]:P,g]),P=b)}else C.run()};R.allowRecurse=!!t;let z;o==="sync"?z=R:o==="post"?z=()=>Te(R,a&&a.suspense):(R.pre=!0,a&&(R.id=a.uid),z=()=>$r(R));const C=new Wn(l,z);t?n?R():P=C.run():o==="post"?Te(C.run.bind(C),a&&a.suspense):C.run();const h=()=>{C.stop(),a&&a.scope&&$o(a.scope.effects,C)};return y&&y.push(h),h}function Xc(e,t,n){const r=this.proxy,o=ye(e)?e.includes(".")?ta(r,e):()=>r[e]:e.bind(r,r);let s;Z(t)?s=t:(s=t.handler,n=t);const i=we;Nt(this);const a=Yn(o,s.bind(r),n);return i?Nt(i):wt(),a}function ta(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function Ht(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))Ht(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)Ht(e[n],t);else if(qt(e)||tn(e))e.forEach(n=>{Ht(n,t)});else if(Ni(e))for(const n in e)Ht(e[n],t);return e}function Zo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return We(()=>{e.isMounted=!0}),jr(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],Qc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},setup(e,{slots:t}){const n=mt(),r=Zo();let o;return()=>{const s=t.default&&Ur(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const R of s)if(R.type!==Se){i=R;break}}const a=le(e),{mode:l}=a;if(r.isLeaving)return eo(i);const c=Rs(i);if(!c)return eo(i);const p=un(c,a,r,n);jt(c,p);const f=n.subTree,g=f&&Rs(f);let y=!1;const{getTransitionKey:P}=c.type;if(P){const R=P();o===void 0?o=R:R!==o&&(o=R,y=!0)}if(g&&g.type!==Se&&(!tt(c,g)||y)){const R=un(g,a,r,n);if(jt(g,R),l==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},eo(i);l==="in-out"&&c.type!==Se&&(R.delayLeave=(z,C,h)=>{const b=na(r,g);b[String(g.key)]=g,z._leaveCb=()=>{C(),z._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=h})}return i}}},es=Qc;function na(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function un(e,t,n,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:p,onBeforeLeave:f,onLeave:g,onAfterLeave:y,onLeaveCancelled:P,onBeforeAppear:R,onAppear:z,onAfterAppear:C,onAppearCancelled:h}=t,b=String(e.key),k=na(n,e),H=(M,W)=>{M&&De(M,r,9,W)},j=(M,W)=>{const G=W[1];H(M,W),D(M)?M.every(J=>J.length<=1)&&G():M.length<=1&&G()},F={mode:s,persisted:i,beforeEnter(M){let W=a;if(!n.isMounted)if(o)W=R||a;else return;M._leaveCb&&M._leaveCb(!0);const G=k[b];G&&tt(e,G)&&G.el._leaveCb&&G.el._leaveCb(),H(W,[M])},enter(M){let W=l,G=c,J=p;if(!n.isMounted)if(o)W=z||l,G=C||c,J=h||p;else return;let B=!1;const oe=M._enterCb=K=>{B||(B=!0,K?H(J,[M]):H(G,[M]),F.delayedLeave&&F.delayedLeave(),M._enterCb=void 0)};W?j(W,[M,oe]):oe()},leave(M,W){const G=String(e.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return W();H(f,[M]);let J=!1;const B=M._leaveCb=oe=>{J||(J=!0,W(),oe?H(P,[M]):H(y,[M]),M._leaveCb=void 0,k[G]===e&&delete k[G])};k[G]=e,g?j(g,[M,B]):B()},clone(M){return un(M,t,n,r)}};return F}function eo(e){if(Jn(e))return e=rt(e),e.children=null,e}function Rs(e){return Jn(e)?e.children?e.children[0]:void 0:e}function jt(e,t){e.shapeFlag&6&&e.component?jt(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ur(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===ne?(i.patchFlag&128&&o++,r=r.concat(Ur(i.children,t,a))):(t||i.type!==Se)&&r.push(a!=null?rt(i,{key:a}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function S(e){return Z(e)?{setup:e,name:e.name}:e}const Ft=e=>!!e.type.__asyncLoader;function ra(e){Z(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:o=200,timeout:s,suspensible:i=!0,onError:a}=e;let l=null,c,p=0;const f=()=>(p++,l=null,g()),g=()=>{let y;return l||(y=l=t().catch(P=>{if(P=P instanceof Error?P:new Error(String(P)),a)return new Promise((R,z)=>{a(P,()=>R(f()),()=>z(P),p+1)});throw P}).then(P=>y!==l&&l?l:(P&&(P.__esModule||P[Symbol.toStringTag]==="Module")&&(P=P.default),c=P,P)))};return S({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return c},setup(){const y=we;if(c)return()=>to(c,y);const P=h=>{l=null,Yt(h,y,13,!r)};if(i&&y.suspense||dn)return g().then(h=>()=>to(h,y)).catch(h=>(P(h),()=>r?O(r,{error:h}):null));const R=ue(!1),z=ue(),C=ue(!!o);return o&&setTimeout(()=>{C.value=!1},o),s!=null&&setTimeout(()=>{if(!R.value&&!z.value){const h=new Error(`Async component timed out after ${s}ms.`);P(h),z.value=h}},s),g().then(()=>{R.value=!0,y.parent&&Jn(y.parent.vnode)&&$r(y.parent.update)}).catch(h=>{P(h),z.value=h}),()=>{if(R.value&&c)return to(c,y);if(z.value&&r)return O(r,{error:z.value});if(n&&!C.value)return O(n)}}})}function to(e,t){const{ref:n,props:r,children:o,ce:s}=t.vnode,i=O(e,r,o);return i.ref=n,i.ce=s,delete t.vnode.ce,i}const Jn=e=>e.type.__isKeepAlive,Zc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=mt(),r=n.ctx;if(!r.renderer)return()=>{const h=t.default&&t.default();return h&&h.length===1?h[0]:h};const o=new Map,s=new Set;let i=null;const a=n.suspense,{renderer:{p:l,m:c,um:p,o:{createElement:f}}}=r,g=f("div");r.activate=(h,b,k,H,j)=>{const F=h.component;c(h,b,k,0,a),l(F.vnode,h,b,k,F,a,H,h.slotScopeIds,j),Te(()=>{F.isDeactivated=!1,F.a&&nn(F.a);const M=h.props&&h.props.onVnodeMounted;M&&Re(M,F.parent,h)},a)},r.deactivate=h=>{const b=h.component;c(h,g,null,1,a),Te(()=>{b.da&&nn(b.da);const k=h.props&&h.props.onVnodeUnmounted;k&&Re(k,b.parent,h),b.isDeactivated=!0},a)};function y(h){no(h),p(h,n,a,!0)}function P(h){o.forEach((b,k)=>{const H=No(b.type);H&&(!h||!h(H))&&R(k)})}function R(h){const b=o.get(h);!i||b.type!==i.type?y(b):i&&no(i),o.delete(h),s.delete(h)}Fe(()=>[e.include,e.exclude],([h,b])=>{h&&P(k=>En(h,k)),b&&P(k=>!En(b,k))},{flush:"post",deep:!0});let z=null;const C=()=>{z!=null&&o.set(z,ro(n.subTree))};return We(C),_n(C),jr(()=>{o.forEach(h=>{const{subTree:b,suspense:k}=n,H=ro(b);if(h.type===H.type){no(H);const j=H.component.da;j&&Te(j,k);return}y(h)})}),()=>{if(z=null,!t.default)return null;const h=t.default(),b=h[0];if(h.length>1)return i=null,h;if(!Pt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return i=null,b;let k=ro(b);const H=k.type,j=No(Ft(k)?k.type.__asyncResolved||{}:H),{include:F,exclude:M,max:W}=e;if(F&&(!j||!En(F,j))||M&&j&&En(M,j))return i=k,b;const G=k.key==null?H:k.key,J=o.get(G);return k.el&&(k=rt(k),b.shapeFlag&128&&(b.ssContent=k)),z=G,J?(k.el=J.el,k.component=J.component,k.transition&&jt(k,k.transition),k.shapeFlag|=512,s.delete(G),s.add(G)):(s.add(G),W&&s.size>parseInt(W,10)&&R(s.values().next().value)),k.shapeFlag|=256,i=k,Zi(b.type)?b:k}}},eu=Zc;function En(e,t){return D(e)?e.some(n=>En(n,t)):ye(e)?e.split(",").includes(t):e.test?e.test(t):!1}function oa(e,t){ia(e,"a",t)}function sa(e,t){ia(e,"da",t)}function ia(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(zr(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Jn(o.parent.vnode)&&tu(r,t,n,o),o=o.parent}}function tu(e,t,n,r){const o=zr(t,e,r,!0);ft(()=>{$o(r[t],o)},n)}function no(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ro(e){return e.shapeFlag&128?e.ssContent:e}function zr(e,t,n=we,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;mn(),Nt(n);const a=De(t,n,e,i);return wt(),hn(),a});return r?o.unshift(s):o.push(s),s}}const pt=e=>(t,n=we)=>(!dn||e==="sp")&&zr(e,(...r)=>t(...r),n),ts=pt("bm"),We=pt("m"),aa=pt("bu"),_n=pt("u"),jr=pt("bum"),ft=pt("um"),la=pt("sp"),ca=pt("rtg"),ua=pt("rtc");function da(e,t=we){zr("ec",e,t)}function _o(e,t){const n=Pe;if(n===null)return e;const r=Wr(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=fe]=t[s];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&Ht(a),o.push({dir:i,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Ze(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let l=a.dir[r];l&&(mn(),De(l,n,8,[e.el,a,e,t]),hn())}}const ns="components",nu="directives";function Ct(e,t){return rs(ns,e,!0,t)||e}const pa=Symbol();function Xn(e){return ye(e)?rs(ns,e,!1)||e:e||pa}function ru(e){return rs(nu,e)}function rs(e,t,n=!0,r=!1){const o=Pe||we;if(o){const s=o.type;if(e===ns){const a=No(s,!1);if(a&&(a===t||a===Ve(t)||a===Gn(Ve(t))))return s}const i=Is(o[e]||s[e],t)||Is(o.appContext[e],t);return!i&&r?s:i}}function Is(e,t){return e&&(e[t]||e[Ve(t)]||e[Gn(Ve(t))])}function Ne(e,t,n,r){let o;const s=n&&n[r];if(D(e)||ye(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(he(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const c=i[a];o[a]=t(e[c],c,a,s&&s[a])}}else o=[];return n&&(n[r]=o),o}function ou(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(D(r))for(let o=0;o<r.length;o++)e[r[o].name]=r[o].fn;else r&&(e[r.name]=r.key?(...o)=>{const s=r.fn(...o);return s&&(s.key=r.key),s}:r.fn)}return e}function Q(e,t,n={},r,o){if(Pe.isCE||Pe.parent&&Ft(Pe.parent)&&Pe.parent.isCE)return t!=="default"&&(n.name=t),O("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),d();const i=s&&fa(s(n)),a=re(ne,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function fa(e){return e.some(t=>Pt(t)?!(t.type===Se||t.type===ne&&!fa(t.children)):!0)?e:null}function su(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:Nn(r)]=e[r];return n}const vo=e=>e?Sa(e)?Wr(e)||e.proxy:vo(e.parent):null,Mn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vo(e.parent),$root:e=>vo(e.root),$emit:e=>e.emit,$options:e=>os(e),$forceUpdate:e=>e.f||(e.f=()=>$r(e.update)),$nextTick:e=>e.n||(e.n=Jt.bind(e.proxy)),$watch:e=>Xc.bind(e)}),oo=(e,t)=>e!==fe&&!e.__isScriptSetup&&ae(e,t),yo={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(oo(r,t))return i[t]=1,r[t];if(o!==fe&&ae(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&ae(c,t))return i[t]=3,s[t];if(n!==fe&&ae(n,t))return i[t]=4,n[t];bo&&(i[t]=0)}}const p=Mn[t];let f,g;if(p)return t==="$attrs"&&Ue(e,"get",t),p(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==fe&&ae(n,t))return i[t]=4,n[t];if(g=l.config.globalProperties,ae(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return oo(o,t)?(o[t]=n,!0):r!==fe&&ae(r,t)?(r[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||e!==fe&&ae(e,i)||oo(t,i)||(a=s[0])&&ae(a,i)||ae(r,i)||ae(Mn,i)||ae(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},iu=xe({},yo,{get(e,t){if(t!==Symbol.unscopables)return yo.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Ol(t)}});let bo=!0;function au(e){const t=os(e),n=e.proxy,r=e.ctx;bo=!1,t.beforeCreate&&Vs(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:l,inject:c,created:p,beforeMount:f,mounted:g,beforeUpdate:y,updated:P,activated:R,deactivated:z,beforeDestroy:C,beforeUnmount:h,destroyed:b,unmounted:k,render:H,renderTracked:j,renderTriggered:F,errorCaptured:M,serverPrefetch:W,expose:G,inheritAttrs:J,components:B,directives:oe,filters:K}=t;if(c&&lu(c,r,null,e.appContext.config.unwrapInjectedRef),i)for(const be in i){const ge=i[be];Z(ge)&&(r[be]=ge.bind(n))}if(o){const be=o.call(n,n);he(be)&&(e.data=qn(be))}if(bo=!0,s)for(const be in s){const ge=s[be],kt=Z(ge)?ge.bind(n,n):Z(ge.get)?ge.get.bind(n,n):Je,nr=!Z(ge)&&Z(ge.set)?ge.set.bind(n):Je,St=ve({get:kt,set:nr});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>St.value,set:Xe=>St.value=Xe})}if(a)for(const be in a)ma(a[be],r,n,be);if(l){const be=Z(l)?l.call(n):l;Reflect.ownKeys(be).forEach(ge=>{Fr(ge,be[ge])})}p&&Vs(p,e,"c");function de(be,ge){D(ge)?ge.forEach(kt=>be(kt.bind(n))):ge&&be(ge.bind(n))}if(de(ts,f),de(We,g),de(aa,y),de(_n,P),de(oa,R),de(sa,z),de(da,M),de(ua,j),de(ca,F),de(jr,h),de(ft,k),de(la,W),D(G))if(G.length){const be=e.exposed||(e.exposed={});G.forEach(ge=>{Object.defineProperty(be,ge,{get:()=>n[ge],set:kt=>n[ge]=kt})})}else e.exposed||(e.exposed={});H&&e.render===Je&&(e.render=H),J!=null&&(e.inheritAttrs=J),B&&(e.components=B),oe&&(e.directives=oe)}function lu(e,t,n=Je,r=!1){D(e)&&(e=xo(e));for(const o in e){const s=e[o];let i;he(s)?"default"in s?i=nt(s.from||o,s.default,!0):i=nt(s.from||o):i=nt(s),Ee(i)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function Vs(e,t,n){De(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ma(e,t,n,r){const o=r.includes(".")?ta(n,r):()=>n[r];if(ye(e)){const s=t[e];Z(s)&&Fe(o,s)}else if(Z(e))Fe(o,e.bind(n));else if(he(e))if(D(e))e.forEach(s=>ma(s,t,n,r));else{const s=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(s)&&Fe(o,s,e)}}function os(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let l;return a?l=a:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(c=>xr(l,c,i,!0)),xr(l,t,i)),he(t)&&s.set(t,l),l}function xr(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&xr(e,s,n,!0),o&&o.forEach(i=>xr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=cu[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const cu={data:Ls,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Rt,directives:Rt,watch:du,provide:Ls,inject:uu};function Ls(e,t){return t?e?function(){return xe(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function uu(e,t){return Rt(xo(e),xo(t))}function xo(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function Rt(e,t){return e?xe(xe(Object.create(null),e),t):t}function du(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=Oe(e[r],t[r]);return n}function pu(e,t,n,r=!1){const o={},s={};yr(s,Kr,1),e.propsDefaults=Object.create(null),ha(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:zi(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function fu(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=le(o),[l]=e.propsOptions;let c=!1;if((r||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let g=p[f];if(Br(e.emitsOptions,g))continue;const y=t[g];if(l)if(ae(s,g))y!==s[g]&&(s[g]=y,c=!0);else{const P=Ve(g);o[P]=Co(l,a,P,y,e,!1)}else y!==s[g]&&(s[g]=y,c=!0)}}}else{ha(e,t,o,s)&&(c=!0);let p;for(const f in a)(!t||!ae(t,f)&&((p=Ge(f))===f||!ae(t,p)))&&(l?n&&(n[f]!==void 0||n[p]!==void 0)&&(o[f]=Co(l,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!ae(t,f))&&(delete s[f],c=!0)}c&&dt(e,"set","$attrs")}function ha(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let p;o&&ae(o,p=Ve(l))?!s||!s.includes(p)?n[p]=c:(a||(a={}))[p]=c:Br(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,i=!0)}if(s){const l=le(n),c=a||fe;for(let p=0;p<s.length;p++){const f=s[p];n[f]=Co(o,l,f,c[f],e,!ae(c,f))}}return i}function Co(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=ae(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&Z(l)){const{propsDefaults:c}=o;n in c?r=c[n]:(Nt(o),r=c[n]=l.call(null,t),wt())}else r=l}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===Ge(n))&&(r=!0))}return r}function ga(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let l=!1;if(!Z(e)){const p=f=>{l=!0;const[g,y]=ga(f,t,!0);xe(i,g),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!l)return he(e)&&r.set(e,en),en;if(D(s))for(let p=0;p<s.length;p++){const f=Ve(s[p]);Hs(f)&&(i[f]=fe)}else if(s)for(const p in s){const f=Ve(p);if(Hs(f)){const g=s[p],y=i[f]=D(g)||Z(g)?{type:g}:Object.assign({},g);if(y){const P=Ds(Boolean,y.type),R=Ds(String,y.type);y[0]=P>-1,y[1]=R<0||P<R,(P>-1||ae(y,"default"))&&a.push(f)}}}const c=[i,a];return he(e)&&r.set(e,c),c}function Hs(e){return e[0]!=="$"}function $s(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Bs(e,t){return $s(e)===$s(t)}function Ds(e,t){return D(t)?t.findIndex(n=>Bs(n,e)):Z(t)&&Bs(t,e)?0:-1}const _a=e=>e[0]==="_"||e==="$stable",ss=e=>D(e)?e.map(Be):[Be(e)],mu=(e,t,n)=>{if(t._n)return t;const r=X((...o)=>ss(t(...o)),n);return r._c=!1,r},va=(e,t,n)=>{const r=e._ctx;for(const o in e){if(_a(o))continue;const s=e[o];if(Z(s))t[o]=mu(o,s,r);else if(s!=null){const i=ss(s);t[o]=()=>i}}},ya=(e,t)=>{const n=ss(t);e.slots.default=()=>n},hu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),yr(t,"_",n)):va(t,e.slots={})}else e.slots={},t&&ya(e,t);yr(e.slots,Kr,1)},gu=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=fe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(xe(o,t),!n&&a===1&&delete o._):(s=!t.$stable,va(t,o)),i=t}else t&&(ya(e,t),i={default:1});if(s)for(const a in o)!_a(a)&&!(a in i)&&delete o[a]};function ba(){return{app:null,config:{isNativeTag:Fl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _u=0;function vu(e,t){return function(r,o=null){Z(r)||(r=Object.assign({},r)),o!=null&&!he(o)&&(o=null);const s=ba(),i=new Set;let a=!1;const l=s.app={_uid:_u++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:$a,get config(){return s.config},set config(c){},use(c,...p){return i.has(c)||(c&&Z(c.install)?(i.add(c),c.install(l,...p)):Z(c)&&(i.add(c),c(l,...p))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,p){return p?(s.components[c]=p,l):s.components[c]},directive(c,p){return p?(s.directives[c]=p,l):s.directives[c]},mount(c,p,f){if(!a){const g=O(r,o);return g.appContext=s,p&&t?t(g,c):e(g,c,f),a=!0,l._container=c,c.__vue_app__=l,Wr(g.component)||g.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,p){return s.provides[c]=p,l}};return l}}function Cr(e,t,n,r,o=!1){if(D(e)){e.forEach((g,y)=>Cr(g,t&&(D(t)?t[y]:t),n,r,o));return}if(Ft(r)&&!o)return;const s=r.shapeFlag&4?Wr(r.component)||r.component.proxy:r.el,i=o?null:s,{i:a,r:l}=e,c=t&&t.r,p=a.refs===fe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ye(c)?(p[c]=null,ae(f,c)&&(f[c]=null)):Ee(c)&&(c.value=null)),Z(l))ct(l,a,12,[i,p]);else{const g=ye(l),y=Ee(l);if(g||y){const P=()=>{if(e.f){const R=g?ae(f,l)?f[l]:p[l]:l.value;o?D(R)&&$o(R,s):D(R)?R.includes(s)||R.push(s):g?(p[l]=[s],ae(f,l)&&(f[l]=p[l])):(l.value=[s],e.k&&(p[e.k]=l.value))}else g?(p[l]=i,ae(f,l)&&(f[l]=i)):y&&(l.value=i,e.k&&(p[e.k]=i))};i?(P.id=-1,Te(P,n)):P()}}}let gt=!1;const dr=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",pr=e=>e.nodeType===8;function yu(e){const{mt:t,p:n,o:{patchProp:r,createText:o,nextSibling:s,parentNode:i,remove:a,insert:l,createComment:c}}=e,p=(C,h)=>{if(!h.hasChildNodes()){n(null,C,h),br(),h._vnode=C;return}gt=!1,f(h.firstChild,C,null,null,null),br(),h._vnode=C,gt&&console.error("Hydration completed but contains mismatches.")},f=(C,h,b,k,H,j=!1)=>{const F=pr(C)&&C.data==="[",M=()=>R(C,h,b,k,H,F),{type:W,ref:G,shapeFlag:J,patchFlag:B}=h;let oe=C.nodeType;h.el=C,B===-2&&(j=!1,h.dynamicChildren=null);let K=null;switch(W){case Kt:oe!==3?h.children===""?(l(h.el=o(""),i(C),C),K=C):K=M():(C.data!==h.children&&(gt=!0,C.data=h.children),K=s(C));break;case Se:oe!==8||F?K=M():K=s(C);break;case Ut:if(F&&(C=s(C),oe=C.nodeType),oe===1||oe===3){K=C;const Le=!h.children.length;for(let de=0;de<h.staticCount;de++)Le&&(h.children+=K.nodeType===1?K.outerHTML:K.data),de===h.staticCount-1&&(h.anchor=K),K=s(K);return F?s(K):K}else M();break;case ne:F?K=P(C,h,b,k,H,j):K=M();break;default:if(J&1)oe!==1||h.type.toLowerCase()!==C.tagName.toLowerCase()?K=M():K=g(C,h,b,k,H,j);else if(J&6){h.slotScopeIds=H;const Le=i(C);if(t(h,Le,null,b,k,dr(Le),j),K=F?z(C):s(C),K&&pr(K)&&K.data==="teleport end"&&(K=s(K)),Ft(h)){let de;F?(de=O(ne),de.anchor=K?K.previousSibling:Le.lastChild):de=C.nodeType===3?Ae(""):O("div"),de.el=C,h.component.subTree=de}}else J&64?oe!==8?K=M():K=h.type.hydrate(C,h,b,k,H,j,e,y):J&128&&(K=h.type.hydrate(C,h,b,k,dr(i(C)),H,j,e,f))}return G!=null&&Cr(G,null,k,h),K},g=(C,h,b,k,H,j)=>{j=j||!!h.dynamicChildren;const{type:F,props:M,patchFlag:W,shapeFlag:G,dirs:J}=h,B=F==="input"&&J||F==="option";if(B||W!==-1){if(J&&Ze(h,null,b,"created"),M)if(B||!j||W&48)for(const K in M)(B&&K.endsWith("value")||jn(K)&&!Pn(K))&&r(C,K,null,M[K],!1,void 0,b);else M.onClick&&r(C,"onClick",null,M.onClick,!1,void 0,b);let oe;if((oe=M&&M.onVnodeBeforeMount)&&Re(oe,b,h),J&&Ze(h,null,b,"beforeMount"),((oe=M&&M.onVnodeMounted)||J)&&ea(()=>{oe&&Re(oe,b,h),J&&Ze(h,null,b,"mounted")},k),G&16&&!(M&&(M.innerHTML||M.textContent))){let K=y(C.firstChild,h,C,b,k,H,j);for(;K;){gt=!0;const Le=K;K=K.nextSibling,a(Le)}}else G&8&&C.textContent!==h.children&&(gt=!0,C.textContent=h.children)}return C.nextSibling},y=(C,h,b,k,H,j,F)=>{F=F||!!h.dynamicChildren;const M=h.children,W=M.length;for(let G=0;G<W;G++){const J=F?M[G]:M[G]=Be(M[G]);if(C)C=f(C,J,k,H,j,F);else{if(J.type===Kt&&!J.children)continue;gt=!0,n(null,J,b,null,k,H,dr(b),j)}}return C},P=(C,h,b,k,H,j)=>{const{slotScopeIds:F}=h;F&&(H=H?H.concat(F):F);const M=i(C),W=y(s(C),h,M,b,k,H,j);return W&&pr(W)&&W.data==="]"?s(h.anchor=W):(gt=!0,l(h.anchor=c("]"),M,W),W)},R=(C,h,b,k,H,j)=>{if(gt=!0,h.el=null,j){const W=z(C);for(;;){const G=s(C);if(G&&G!==W)a(G);else break}}const F=s(C),M=i(C);return a(C),n(null,h,M,F,b,k,dr(M),H),F},z=C=>{let h=0;for(;C;)if(C=s(C),C&&pr(C)&&(C.data==="["&&h++,C.data==="]")){if(h===0)return s(C);h--}return C};return[p,f]}const Te=ea;function xa(e){return wa(e)}function Ca(e){return wa(e,yu)}function wa(e,t){const n=Wl();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:l,setText:c,setElementText:p,parentNode:f,nextSibling:g,setScopeId:y=Je,insertStaticContent:P}=e,R=(u,m,x,T=null,E=null,I=null,L=!1,A=null,V=!!m.dynamicChildren)=>{if(u===m)return;u&&!tt(u,m)&&(T=rr(u),Xe(u,E,I,!0),u=null),m.patchFlag===-2&&(V=!1,m.dynamicChildren=null);const{type:N,ref:q,shapeFlag:U}=m;switch(N){case Kt:z(u,m,x,T);break;case Se:C(u,m,x,T);break;case Ut:u==null&&h(m,x,T,L);break;case ne:B(u,m,x,T,E,I,L,A,V);break;default:U&1?H(u,m,x,T,E,I,L,A,V):U&6?oe(u,m,x,T,E,I,L,A,V):(U&64||U&128)&&N.process(u,m,x,T,E,I,L,A,V,Xt)}q!=null&&E&&Cr(q,u&&u.ref,I,m||u,!m)},z=(u,m,x,T)=>{if(u==null)r(m.el=a(m.children),x,T);else{const E=m.el=u.el;m.children!==u.children&&c(E,m.children)}},C=(u,m,x,T)=>{u==null?r(m.el=l(m.children||""),x,T):m.el=u.el},h=(u,m,x,T)=>{[u.el,u.anchor]=P(u.children,m,x,T,u.el,u.anchor)},b=({el:u,anchor:m},x,T)=>{let E;for(;u&&u!==m;)E=g(u),r(u,x,T),u=E;r(m,x,T)},k=({el:u,anchor:m})=>{let x;for(;u&&u!==m;)x=g(u),o(u),u=x;o(m)},H=(u,m,x,T,E,I,L,A,V)=>{L=L||m.type==="svg",u==null?j(m,x,T,E,I,L,A,V):W(u,m,E,I,L,A,V)},j=(u,m,x,T,E,I,L,A)=>{let V,N;const{type:q,props:U,shapeFlag:Y,transition:te,dirs:se}=u;if(V=u.el=i(u.type,I,U&&U.is,U),Y&8?p(V,u.children):Y&16&&M(u.children,V,null,T,E,I&&q!=="foreignObject",L,A),se&&Ze(u,null,T,"created"),U){for(const pe in U)pe!=="value"&&!Pn(pe)&&s(V,pe,null,U[pe],I,u.children,T,E,st);"value"in U&&s(V,"value",null,U.value),(N=U.onVnodeBeforeMount)&&Re(N,T,u)}F(V,u,u.scopeId,L,T),se&&Ze(u,null,T,"beforeMount");const _e=(!E||E&&!E.pendingBranch)&&te&&!te.persisted;_e&&te.beforeEnter(V),r(V,m,x),((N=U&&U.onVnodeMounted)||_e||se)&&Te(()=>{N&&Re(N,T,u),_e&&te.enter(V),se&&Ze(u,null,T,"mounted")},E)},F=(u,m,x,T,E)=>{if(x&&y(u,x),T)for(let I=0;I<T.length;I++)y(u,T[I]);if(E){let I=E.subTree;if(m===I){const L=E.vnode;F(u,L,L.scopeId,L.slotScopeIds,E.parent)}}},M=(u,m,x,T,E,I,L,A,V=0)=>{for(let N=V;N<u.length;N++){const q=u[N]=A?yt(u[N]):Be(u[N]);R(null,q,m,x,T,E,I,L,A)}},W=(u,m,x,T,E,I,L)=>{const A=m.el=u.el;let{patchFlag:V,dynamicChildren:N,dirs:q}=m;V|=u.patchFlag&16;const U=u.props||fe,Y=m.props||fe;let te;x&&At(x,!1),(te=Y.onVnodeBeforeUpdate)&&Re(te,x,m,u),q&&Ze(m,u,x,"beforeUpdate"),x&&At(x,!0);const se=E&&m.type!=="foreignObject";if(N?G(u.dynamicChildren,N,A,x,T,se,I):L||ge(u,m,A,null,x,T,se,I,!1),V>0){if(V&16)J(A,m,U,Y,x,T,E);else if(V&2&&U.class!==Y.class&&s(A,"class",null,Y.class,E),V&4&&s(A,"style",U.style,Y.style,E),V&8){const _e=m.dynamicProps;for(let pe=0;pe<_e.length;pe++){const Ce=_e[pe],qe=U[Ce],Qt=Y[Ce];(Qt!==qe||Ce==="value")&&s(A,Ce,qe,Qt,E,u.children,x,T,st)}}V&1&&u.children!==m.children&&p(A,m.children)}else!L&&N==null&&J(A,m,U,Y,x,T,E);((te=Y.onVnodeUpdated)||q)&&Te(()=>{te&&Re(te,x,m,u),q&&Ze(m,u,x,"updated")},T)},G=(u,m,x,T,E,I,L)=>{for(let A=0;A<m.length;A++){const V=u[A],N=m[A],q=V.el&&(V.type===ne||!tt(V,N)||V.shapeFlag&70)?f(V.el):x;R(V,N,q,null,T,E,I,L,!0)}},J=(u,m,x,T,E,I,L)=>{if(x!==T){if(x!==fe)for(const A in x)!Pn(A)&&!(A in T)&&s(u,A,x[A],null,L,m.children,E,I,st);for(const A in T){if(Pn(A))continue;const V=T[A],N=x[A];V!==N&&A!=="value"&&s(u,A,N,V,L,m.children,E,I,st)}"value"in T&&s(u,"value",x.value,T.value)}},B=(u,m,x,T,E,I,L,A,V)=>{const N=m.el=u?u.el:a(""),q=m.anchor=u?u.anchor:a("");let{patchFlag:U,dynamicChildren:Y,slotScopeIds:te}=m;te&&(A=A?A.concat(te):te),u==null?(r(N,x,T),r(q,x,T),M(m.children,x,q,E,I,L,A,V)):U>0&&U&64&&Y&&u.dynamicChildren?(G(u.dynamicChildren,Y,x,E,I,L,A),(m.key!=null||E&&m===E.subTree)&&is(u,m,!0)):ge(u,m,x,q,E,I,L,A,V)},oe=(u,m,x,T,E,I,L,A,V)=>{m.slotScopeIds=A,u==null?m.shapeFlag&512?E.ctx.activate(m,x,T,L,V):K(m,x,T,E,I,L,V):Le(u,m,V)},K=(u,m,x,T,E,I,L)=>{const A=u.component=ka(u,T,E);if(Jn(u)&&(A.ctx.renderer=Xt),Aa(A),A.asyncDep){if(E&&E.registerDep(A,de),!u.el){const V=A.subTree=O(Se);C(null,V,m,x)}return}de(A,u,m,x,E,I,L)},Le=(u,m,x)=>{const T=m.component=u.component;if(zc(u,m,x))if(T.asyncDep&&!T.asyncResolved){be(T,m,x);return}else T.next=m,Lc(T.update),T.update();else m.el=u.el,T.vnode=m},de=(u,m,x,T,E,I,L)=>{const A=()=>{if(u.isMounted){let{next:q,bu:U,u:Y,parent:te,vnode:se}=u,_e=q,pe;At(u,!1),q?(q.el=se.el,be(u,q,L)):q=se,U&&nn(U),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&Re(pe,te,q,se),At(u,!0);const Ce=_r(u),qe=u.subTree;u.subTree=Ce,R(qe,Ce,f(qe.el),rr(qe),u,E,I),q.el=Ce.el,_e===null&&Jo(u,Ce.el),Y&&Te(Y,E),(pe=q.props&&q.props.onVnodeUpdated)&&Te(()=>Re(pe,te,q,se),E)}else{let q;const{el:U,props:Y}=m,{bm:te,m:se,parent:_e}=u,pe=Ft(m);if(At(u,!1),te&&nn(te),!pe&&(q=Y&&Y.onVnodeBeforeMount)&&Re(q,_e,m),At(u,!0),U&&Zr){const Ce=()=>{u.subTree=_r(u),Zr(U,u.subTree,u,E,null)};pe?m.type.__asyncLoader().then(()=>!u.isUnmounted&&Ce()):Ce()}else{const Ce=u.subTree=_r(u);R(null,Ce,x,T,u,E,I),m.el=Ce.el}if(se&&Te(se,E),!pe&&(q=Y&&Y.onVnodeMounted)){const Ce=m;Te(()=>Re(q,_e,Ce),E)}(m.shapeFlag&256||_e&&Ft(_e.vnode)&&_e.vnode.shapeFlag&256)&&u.a&&Te(u.a,E),u.isMounted=!0,m=x=T=null}},V=u.effect=new Wn(A,()=>$r(N),u.scope),N=u.update=()=>V.run();N.id=u.uid,At(u,!0),N()},be=(u,m,x)=>{m.component=u;const T=u.vnode.props;u.vnode=m,u.next=null,fu(u,m.props,T,x),gu(u,m.children,x),mn(),Ss(),hn()},ge=(u,m,x,T,E,I,L,A,V=!1)=>{const N=u&&u.children,q=u?u.shapeFlag:0,U=m.children,{patchFlag:Y,shapeFlag:te}=m;if(Y>0){if(Y&128){nr(N,U,x,T,E,I,L,A,V);return}else if(Y&256){kt(N,U,x,T,E,I,L,A,V);return}}te&8?(q&16&&st(N,E,I),U!==N&&p(x,U)):q&16?te&16?nr(N,U,x,T,E,I,L,A,V):st(N,E,I,!0):(q&8&&p(x,""),te&16&&M(U,x,T,E,I,L,A,V))},kt=(u,m,x,T,E,I,L,A,V)=>{u=u||en,m=m||en;const N=u.length,q=m.length,U=Math.min(N,q);let Y;for(Y=0;Y<U;Y++){const te=m[Y]=V?yt(m[Y]):Be(m[Y]);R(u[Y],te,x,null,E,I,L,A,V)}N>q?st(u,E,I,!0,!1,U):M(m,x,T,E,I,L,A,V,U)},nr=(u,m,x,T,E,I,L,A,V)=>{let N=0;const q=m.length;let U=u.length-1,Y=q-1;for(;N<=U&&N<=Y;){const te=u[N],se=m[N]=V?yt(m[N]):Be(m[N]);if(tt(te,se))R(te,se,x,null,E,I,L,A,V);else break;N++}for(;N<=U&&N<=Y;){const te=u[U],se=m[Y]=V?yt(m[Y]):Be(m[Y]);if(tt(te,se))R(te,se,x,null,E,I,L,A,V);else break;U--,Y--}if(N>U){if(N<=Y){const te=Y+1,se=te<q?m[te].el:T;for(;N<=Y;)R(null,m[N]=V?yt(m[N]):Be(m[N]),x,se,E,I,L,A,V),N++}}else if(N>Y)for(;N<=U;)Xe(u[N],E,I,!0),N++;else{const te=N,se=N,_e=new Map;for(N=se;N<=Y;N++){const He=m[N]=V?yt(m[N]):Be(m[N]);He.key!=null&&_e.set(He.key,N)}let pe,Ce=0;const qe=Y-se+1;let Qt=!1,vs=0;const bn=new Array(qe);for(N=0;N<qe;N++)bn[N]=0;for(N=te;N<=U;N++){const He=u[N];if(Ce>=qe){Xe(He,E,I,!0);continue}let Qe;if(He.key!=null)Qe=_e.get(He.key);else for(pe=se;pe<=Y;pe++)if(bn[pe-se]===0&&tt(He,m[pe])){Qe=pe;break}Qe===void 0?Xe(He,E,I,!0):(bn[Qe-se]=N+1,Qe>=vs?vs=Qe:Qt=!0,R(He,m[Qe],x,null,E,I,L,A,V),Ce++)}const ys=Qt?bu(bn):en;for(pe=ys.length-1,N=qe-1;N>=0;N--){const He=se+N,Qe=m[He],bs=He+1<q?m[He+1].el:T;bn[N]===0?R(null,Qe,x,bs,E,I,L,A,V):Qt&&(pe<0||N!==ys[pe]?St(Qe,x,bs,2):pe--)}}},St=(u,m,x,T,E=null)=>{const{el:I,type:L,transition:A,children:V,shapeFlag:N}=u;if(N&6){St(u.component.subTree,m,x,T);return}if(N&128){u.suspense.move(m,x,T);return}if(N&64){L.move(u,m,x,Xt);return}if(L===ne){r(I,m,x);for(let U=0;U<V.length;U++)St(V[U],m,x,T);r(u.anchor,m,x);return}if(L===Ut){b(u,m,x);return}if(T!==2&&N&1&&A)if(T===0)A.beforeEnter(I),r(I,m,x),Te(()=>A.enter(I),E);else{const{leave:U,delayLeave:Y,afterLeave:te}=A,se=()=>r(I,m,x),_e=()=>{U(I,()=>{se(),te&&te()})};Y?Y(I,se,_e):_e()}else r(I,m,x)},Xe=(u,m,x,T=!1,E=!1)=>{const{type:I,props:L,ref:A,children:V,dynamicChildren:N,shapeFlag:q,patchFlag:U,dirs:Y}=u;if(A!=null&&Cr(A,null,x,u,!0),q&256){m.ctx.deactivate(u);return}const te=q&1&&Y,se=!Ft(u);let _e;if(se&&(_e=L&&L.onVnodeBeforeUnmount)&&Re(_e,m,u),q&6)Sl(u.component,x,T);else{if(q&128){u.suspense.unmount(x,T);return}te&&Ze(u,null,m,"beforeUnmount"),q&64?u.type.remove(u,m,x,E,Xt,T):N&&(I!==ne||U>0&&U&64)?st(N,m,x,!1,!0):(I===ne&&U&384||!E&&q&16)&&st(V,m,x),T&&gs(u)}(se&&(_e=L&&L.onVnodeUnmounted)||te)&&Te(()=>{_e&&Re(_e,m,u),te&&Ze(u,null,m,"unmounted")},x)},gs=u=>{const{type:m,el:x,anchor:T,transition:E}=u;if(m===ne){kl(x,T);return}if(m===Ut){k(u);return}const I=()=>{o(x),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(u.shapeFlag&1&&E&&!E.persisted){const{leave:L,delayLeave:A}=E,V=()=>L(x,I);A?A(u.el,I,V):V()}else I()},kl=(u,m)=>{let x;for(;u!==m;)x=g(u),o(u),u=x;o(m)},Sl=(u,m,x)=>{const{bum:T,scope:E,update:I,subTree:L,um:A}=u;T&&nn(T),E.stop(),I&&(I.active=!1,Xe(L,u,m,x)),A&&Te(A,m),Te(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},st=(u,m,x,T=!1,E=!1,I=0)=>{for(let L=I;L<u.length;L++)Xe(u[L],m,x,T,E)},rr=u=>u.shapeFlag&6?rr(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),_s=(u,m,x)=>{u==null?m._vnode&&Xe(m._vnode,null,null,!0):R(m._vnode||null,u,m,null,null,null,x),Ss(),br(),m._vnode=u},Xt={p:R,um:Xe,m:St,r:gs,mt:K,mc:M,pc:ge,pbc:G,n:rr,o:e};let Qr,Zr;return t&&([Qr,Zr]=t(Xt)),{render:_s,hydrate:Qr,createApp:vu(_s,Qr)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function is(e,t,n=!1){const r=e.children,o=t.children;if(D(r)&&D(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=yt(o[s]),a.el=i.el),n||is(i,a)),a.type===Kt&&(a.el=i.el)}}function bu(e){const t=e.slice(),n=[0];let r,o,s,i,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<c?s=a+1:i=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const xu=e=>e.__isTeleport,kn=e=>e&&(e.disabled||e.disabled===""),Fs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,wo=(e,t)=>{const n=e&&e.to;return ye(n)?t?t(n):null:n},Cu={__isTeleport:!0,process(e,t,n,r,o,s,i,a,l,c){const{mc:p,pc:f,pbc:g,o:{insert:y,querySelector:P,createText:R,createComment:z}}=c,C=kn(t.props);let{shapeFlag:h,children:b,dynamicChildren:k}=t;if(e==null){const H=t.el=R(""),j=t.anchor=R("");y(H,n,r),y(j,n,r);const F=t.target=wo(t.props,P),M=t.targetAnchor=R("");F&&(y(M,F),i=i||Fs(F));const W=(G,J)=>{h&16&&p(b,G,J,o,s,i,a,l)};C?W(n,j):F&&W(F,M)}else{t.el=e.el;const H=t.anchor=e.anchor,j=t.target=e.target,F=t.targetAnchor=e.targetAnchor,M=kn(e.props),W=M?n:j,G=M?H:F;if(i=i||Fs(j),k?(g(e.dynamicChildren,k,W,o,s,i,a),is(e,t,!0)):l||f(e,t,W,G,o,s,i,a,!1),C)M||fr(t,n,H,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=wo(t.props,P);J&&fr(t,J,null,c,0)}else M&&fr(t,j,F,c,1)}Ea(t)},remove(e,t,n,r,{um:o,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetAnchor:p,target:f,props:g}=e;if(f&&s(p),(i||!kn(g))&&(s(c),a&16))for(let y=0;y<l.length;y++){const P=l[y];o(P,t,n,!0,!!P.dynamicChildren)}},move:fr,hydrate:wu};function fr(e,t,n,{o:{insert:r},m:o},s=2){s===0&&r(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:l,children:c,props:p}=e,f=s===2;if(f&&r(i,t,n),(!f||kn(p))&&l&16)for(let g=0;g<c.length;g++)o(c[g],t,n,2);f&&r(a,t,n)}function wu(e,t,n,r,o,s,{o:{nextSibling:i,parentNode:a,querySelector:l}},c){const p=t.target=wo(t.props,l);if(p){const f=p._lpa||p.firstChild;if(t.shapeFlag&16)if(kn(t.props))t.anchor=c(i(e),t,a(e),n,r,o,s),t.targetAnchor=f;else{t.anchor=i(e);let g=f;for(;g;)if(g=i(g),g&&g.nodeType===8&&g.data==="teleport anchor"){t.targetAnchor=g,p._lpa=t.targetAnchor&&i(t.targetAnchor);break}c(f,t,p,n,r,o,s)}Ea(t)}return t.anchor&&i(t.anchor)}const Eu=Cu;function Ea(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ne=Symbol(void 0),Kt=Symbol(void 0),Se=Symbol(void 0),Ut=Symbol(void 0),Sn=[];let Ie=null;function d(e=!1){Sn.push(Ie=e?null:[])}function Ta(){Sn.pop(),Ie=Sn[Sn.length-1]||null}let Gt=1;function Eo(e){Gt+=e}function Pa(e){return e.dynamicChildren=Gt>0?Ie||en:null,Ta(),Gt>0&&Ie&&Ie.push(e),e}function v(e,t,n,r,o,s){return Pa(_(e,t,n,r,o,s,!0))}function re(e,t,n,r,o){return Pa(O(e,t,n,r,o,!0))}function Pt(e){return e?e.__v_isVNode===!0:!1}function tt(e,t){return e.type===t.type&&e.key===t.key}function Tu(e){}const Kr="__vInternal",Na=({key:e})=>e??null,vr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ye(e)||Ee(e)||Z(e)?{i:Pe,r:e,k:t,f:!!n}:e:null;function _(e,t=null,n=null,r=0,o=null,s=e===ne?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Na(t),ref:t&&vr(t),scopeId:Dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Pe};return a?(as(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),Gt>0&&!i&&Ie&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ie.push(l),l}const O=Pu;function Pu(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===pa)&&(e=Se),Pt(e)){const a=rt(e,t,!0);return n&&as(a,n),Gt>0&&!s&&Ie&&(a.shapeFlag&6?Ie[Ie.indexOf(e)]=a:Ie.push(a)),a.patchFlag|=-2,a}if(Ru(e)&&(e=e.__vccOpts),t){t=Ma(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=me(a)),he(l)&&(jo(l)&&!D(l)&&(l=xe({},l)),t.style=zn(l))}const i=ye(e)?1:Zi(e)?128:xu(e)?64:he(e)?4:Z(e)?2:0;return _(e,t,n,r,o,i,s,!0)}function Ma(e){return e?jo(e)||Kr in e?xe({},e):e:null}function rt(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,a=t?An(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Na(a),ref:t&&t.ref?n&&o?D(o)?o.concat(vr(t)):[o,vr(t)]:vr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ne?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rt(e.ssContent),ssFallback:e.ssFallback&&rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Ae(e=" ",t=0){return O(Kt,null,e,t)}function Gr(e,t){const n=O(Ut,null,e);return n.staticCount=t,n}function ee(e="",t=!1){return t?(d(),re(Se,null,e)):O(Se,null,e)}function Be(e){return e==null||typeof e=="boolean"?O(Se):D(e)?O(ne,null,e.slice()):typeof e=="object"?yt(e):O(Kt,null,String(e))}function yt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rt(e)}function as(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),as(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Kr in t)?t._ctx=Pe:o===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[Ae(t)]):n=8);e.children=t,e.shapeFlag|=n}function An(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=me([t.class,r.class]));else if(o==="style")t.style=zn([t.style,r.style]);else if(jn(o)){const s=t[o],i=r[o];i&&s!==i&&!(D(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function Re(e,t,n,r=null){De(e,t,7,[n,r])}const Nu=ba();let Mu=0;function ka(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Nu,s={uid:Mu++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ga(r,o),emitsOptions:Qi(r,o),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:r.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=$c.bind(null,s),e.ce&&e.ce(s),s}let we=null;const mt=()=>we||Pe,Nt=e=>{we=e,e.scope.on()},wt=()=>{we&&we.scope.off(),we=null};function Sa(e){return e.vnode.shapeFlag&4}let dn=!1;function Aa(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,o=Sa(e);pu(e,n,o,t),hu(e,r);const s=o?ku(e,t):void 0;return dn=!1,s}function ku(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=rn(new Proxy(e.ctx,yo));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?Ra(e):null;Nt(e),mn();const s=ct(r,e,0,[e.props,o]);if(hn(),wt(),Bo(s)){if(s.then(wt,wt),t)return s.then(i=>{To(e,i,t)}).catch(i=>{Yt(i,e,0)});e.asyncDep=s}else To(e,s,t)}else Oa(e,t)}function To(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Wo(t)),Oa(e,n)}let wr,Po;function Su(e){wr=e,Po=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,iu))}}const Au=()=>!wr;function Oa(e,t,n){const r=e.type;if(!e.render){if(!t&&wr&&!r.render){const o=r.template||os(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=xe(xe({isCustomElement:s,delimiters:a},i),l);r.render=wr(o,c)}}e.render=r.render||Je,Po&&Po(e)}Nt(e),mn(),au(e),hn(),wt()}function Ou(e){return new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}})}function Ra(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ou(e))},slots:e.slots,emit:e.emit,expose:t}}function Wr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wo(rn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mn)return Mn[n](e)},has(t,n){return n in t||n in Mn}}))}function No(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function Ru(e){return Z(e)&&"__vccOpts"in e}const ve=(e,t)=>Oc(e,t,dn);function Iu(){return null}function Vu(){return null}function Lu(e){}function Hu(e,t){return null}function $u(){return Ia().slots}function Bu(){return Ia().attrs}function Ia(){const e=mt();return e.setupContext||(e.setupContext=Ra(e))}function Du(e,t){const n=D(e)?e.reduce((r,o)=>(r[o]={},r),{}):e;for(const r in t){const o=n[r];o?D(o)||Z(o)?n[r]={type:o,default:t[r]}:o.default=t[r]:o===null&&(n[r]={default:t[r]})}return n}function Fu(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Uu(e){const t=mt();let n=e();return wt(),Bo(n)&&(n=n.catch(r=>{throw Nt(t),r})),[n,()=>Nt(t)]}function Wt(e,t,n){const r=arguments.length;return r===2?he(t)&&!D(t)?Pt(t)?O(e,null,[t]):O(e,t):O(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pt(n)&&(n=[n]),O(e,t,n))}const Va=Symbol(""),La=()=>nt(Va);function zu(){}function ju(e,t,n,r){const o=n[r];if(o&&Ha(o,e))return o;const s=t();return s.memo=e.slice(),n[r]=s}function Ha(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(cn(n[r],t[r]))return!1;return Gt>0&&Ie&&Ie.push(e),!0}const $a="3.2.45",Ku={createComponentInstance:ka,setupComponent:Aa,renderComponentRoot:_r,setCurrentRenderingInstance:Dn,isVNode:Pt,normalizeVNode:Be},Gu=Ku,Wu=null,qu=null,Yu="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,Us=Vt&&Vt.createElement("template"),Ju={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?Vt.createElementNS(Yu,e):Vt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Vt.createTextNode(e),createComment:e=>Vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Us.innerHTML=r?`<svg>${e}</svg>`:e;const a=Us.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Xu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Qu(e,t,n){const r=e.style,o=ye(n);if(n&&!o){for(const s in n)Mo(r,s,n[s]);if(t&&!ye(t))for(const s in t)n[s]==null&&Mo(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const zs=/\s*!important$/;function Mo(e,t,n){if(D(n))n.forEach(r=>Mo(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zu(e,t);zs.test(n)?e.setProperty(Ge(r),n.replace(zs,""),"important"):e[r]=n}}const js=["Webkit","Moz","ms"],so={};function Zu(e,t){const n=so[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return so[t]=r;r=Gn(r);for(let o=0;o<js.length;o++){const s=js[o]+r;if(s in e)return so[t]=s}return t}const Ks="http://www.w3.org/1999/xlink";function ed(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ks,t.slice(6,t.length)):e.setAttributeNS(Ks,t,n);else{const s=Bl(t);n==null||s&&!Ei(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function td(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ei(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function lt(e,t,n,r){e.addEventListener(t,n,r)}function nd(e,t,n,r){e.removeEventListener(t,n,r)}function rd(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[a,l]=od(t);if(r){const c=s[t]=ad(r,o);lt(e,a,c,l)}else i&&(nd(e,a,i,l),s[t]=void 0)}}const Gs=/(?:Once|Passive|Capture)$/;function od(e){let t;if(Gs.test(e)){t={};let r;for(;r=e.match(Gs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ge(e.slice(2)),t]}let io=0;const sd=Promise.resolve(),id=()=>io||(sd.then(()=>io=0),io=Date.now());function ad(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(ld(r,n.value),t,5,[r])};return n.value=e,n.attached=id(),n}function ld(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Ws=/^on[a-z]/,cd=(e,t,n,r,o=!1,s,i,a,l)=>{t==="class"?Xu(e,r,o):t==="style"?Qu(e,n,r):jn(t)?Ho(t)||rd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ud(e,t,r,o))?td(e,t,r,s,i,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ed(e,t,r,o))};function ud(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ws.test(t)&&Z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ws.test(t)&&ye(n)?!1:t in e}function Ba(e,t){const n=S(e);class r extends qr{constructor(s){super(n,s,t)}}return r.def=n,r}const dd=e=>Ba(e,el),pd=typeof HTMLElement<"u"?HTMLElement:class{};class qr extends pd{constructor(t,n={},r){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Jt(()=>{this._connected||(Ao(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const o of r)this._setAttr(o.attributeName)}).observe(this,{attributes:!0});const t=(r,o=!1)=>{const{props:s,styles:i}=r;let a;if(s&&!D(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ut(this._props[l])),(a||(a=Object.create(null)))[Ve(l)]=!0)}this._numberProps=a,o&&this._resolveProps(r),this._applyStyles(i),this._update()},n=this._def.__asyncLoader;n?n().then(r=>t(r,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,r=D(n)?n:Object.keys(n||{});for(const o of Object.keys(this))o[0]!=="_"&&r.includes(o)&&this._setProp(o,this[o],!0,!1);for(const o of r.map(Ve))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(s){this._setProp(o,s)}})}_setAttr(t){let n=this.getAttribute(t);const r=Ve(t);this._numberProps&&this._numberProps[r]&&(n=ut(n)),this._setProp(r,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,r=!0,o=!0){n!==this._props[t]&&(this._props[t]=n,o&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Ge(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ge(t),n+""):n||this.removeAttribute(Ge(t))))}_update(){Ao(this._createVNode(),this.shadowRoot)}_createVNode(){const t=O(this._def,xe({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const r=(s,i)=>{this.dispatchEvent(new CustomEvent(s,{detail:i}))};n.emit=(s,...i)=>{r(s,i),Ge(s)!==s&&r(Ge(s),i)};let o=this;for(;o=o&&(o.parentNode||o.host);)if(o instanceof qr){n.parent=o._instance,n.provides=o._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function fd(e="$style"){{const t=mt();if(!t)return fe;const n=t.type.__cssModules;if(!n)return fe;const r=n[e];return r||fe}}function md(e){const t=mt();if(!t)return;const n=t.ut=(o=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s=>So(s,o))},r=()=>{const o=e(t.proxy);ko(t.subTree,o),n(o)};Qo(r),We(()=>{const o=new MutationObserver(r);o.observe(t.subTree.el.parentNode,{childList:!0}),ft(()=>o.disconnect())})}function ko(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ko(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)So(e.el,t);else if(e.type===ne)e.children.forEach(n=>ko(n,t));else if(e.type===Ut){let{el:n,anchor:r}=e;for(;n&&(So(n,t),n!==r);)n=n.nextSibling}}function So(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const _t="transition",xn="animation",Qn=(e,{slots:t})=>Wt(es,Fa(e),t);Qn.displayName="Transition";const Da={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hd=Qn.props=xe({},es.props,Da),Ot=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},qs=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Fa(e){const t={};for(const B in e)B in Da||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=i,appearToClass:p=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,P=gd(o),R=P&&P[0],z=P&&P[1],{onBeforeEnter:C,onEnter:h,onEnterCancelled:b,onLeave:k,onLeaveCancelled:H,onBeforeAppear:j=C,onAppear:F=h,onAppearCancelled:M=b}=t,W=(B,oe,K)=>{vt(B,oe?p:a),vt(B,oe?c:i),K&&K()},G=(B,oe)=>{B._isLeaving=!1,vt(B,f),vt(B,y),vt(B,g),oe&&oe()},J=B=>(oe,K)=>{const Le=B?F:h,de=()=>W(oe,B,K);Ot(Le,[oe,de]),Ys(()=>{vt(oe,B?l:s),it(oe,B?p:a),qs(Le)||Js(oe,r,R,de)})};return xe(t,{onBeforeEnter(B){Ot(C,[B]),it(B,s),it(B,i)},onBeforeAppear(B){Ot(j,[B]),it(B,l),it(B,c)},onEnter:J(!1),onAppear:J(!0),onLeave(B,oe){B._isLeaving=!0;const K=()=>G(B,oe);it(B,f),za(),it(B,g),Ys(()=>{B._isLeaving&&(vt(B,f),it(B,y),qs(k)||Js(B,r,z,K))}),Ot(k,[B,K])},onEnterCancelled(B){W(B,!1),Ot(b,[B])},onAppearCancelled(B){W(B,!0),Ot(M,[B])},onLeaveCancelled(B){G(B),Ot(H,[B])}})}function gd(e){if(e==null)return null;if(he(e))return[ao(e.enter),ao(e.leave)];{const t=ao(e);return[t,t]}}function ao(e){return ut(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function vt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ys(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _d=0;function Js(e,t,n,r){const o=e._endId=++_d,s=()=>{o===e._endId&&r()};if(n)return setTimeout(s,n);const{type:i,timeout:a,propCount:l}=Ua(e,t);if(!i)return r();const c=i+"end";let p=0;const f=()=>{e.removeEventListener(c,g),s()},g=y=>{y.target===e&&++p>=l&&f()};setTimeout(()=>{p<l&&f()},a+1),e.addEventListener(c,g)}function Ua(e,t){const n=window.getComputedStyle(e),r=P=>(n[P]||"").split(", "),o=r(`${_t}Delay`),s=r(`${_t}Duration`),i=Xs(o,s),a=r(`${xn}Delay`),l=r(`${xn}Duration`),c=Xs(a,l);let p=null,f=0,g=0;t===_t?i>0&&(p=_t,f=i,g=s.length):t===xn?c>0&&(p=xn,f=c,g=l.length):(f=Math.max(i,c),p=f>0?i>c?_t:xn:null,g=p?p===_t?s.length:l.length:0);const y=p===_t&&/\b(transform|all)(,|$)/.test(r(`${_t}Property`).toString());return{type:p,timeout:f,propCount:g,hasTransform:y}}function Xs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Qs(n)+Qs(e[r])))}function Qs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function za(){return document.body.offsetHeight}const ja=new WeakMap,Ka=new WeakMap,vd={name:"TransitionGroup",props:xe({},hd,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=mt(),r=Zo();let o,s;return _n(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!wd(o[0].el,n.vnode.el,i))return;o.forEach(bd),o.forEach(xd);const a=o.filter(Cd);za(),a.forEach(l=>{const c=l.el,p=c.style;it(c,i),p.transform=p.webkitTransform=p.transitionDuration="";const f=c._moveCb=g=>{g&&g.target!==c||(!g||/transform$/.test(g.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,vt(c,i))};c.addEventListener("transitionend",f)})}),()=>{const i=le(e),a=Fa(i);let l=i.tag||ne;o=s,s=t.default?Ur(t.default()):[];for(let c=0;c<s.length;c++){const p=s[c];p.key!=null&&jt(p,un(p,a,r,n))}if(o)for(let c=0;c<o.length;c++){const p=o[c];jt(p,un(p,a,r,n)),ja.set(p,p.el.getBoundingClientRect())}return O(l,null,s)}}},yd=vd;function bd(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function xd(e){Ka.set(e,e.el.getBoundingClientRect())}function Cd(e){const t=ja.get(e),n=Ka.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${o}px)`,s.transitionDuration="0s",e}}function wd(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&r.classList.add(i)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=Ua(r);return o.removeChild(r),s}const Mt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>nn(t,n):t};function Ed(e){e.target.composing=!0}function Zs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Er={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=Mt(o);const s=r||o.props&&o.props.type==="number";lt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=ut(a)),e._assign(a)}),n&&lt(e,"change",()=>{e.value=e.value.trim()}),t||(lt(e,"compositionstart",Ed),lt(e,"compositionend",Zs),lt(e,"change",Zs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e._assign=Mt(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&ut(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},ls={deep:!0,created(e,t,n){e._assign=Mt(n),lt(e,"change",()=>{const r=e._modelValue,o=pn(e),s=e.checked,i=e._assign;if(D(r)){const a=Sr(r,o),l=a!==-1;if(s&&!l)i(r.concat(o));else if(!s&&l){const c=[...r];c.splice(a,1),i(c)}}else if(qt(r)){const a=new Set(r);s?a.add(o):a.delete(o),i(a)}else i(Wa(e,s))})},mounted:ei,beforeUpdate(e,t,n){e._assign=Mt(n),ei(e,t,n)}};function ei(e,{value:t,oldValue:n},r){e._modelValue=t,D(t)?e.checked=Sr(t,r.props.value)>-1:qt(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Et(t,Wa(e,!0)))}const cs={created(e,{value:t},n){e.checked=Et(t,n.props.value),e._assign=Mt(n),lt(e,"change",()=>{e._assign(pn(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Mt(r),t!==n&&(e.checked=Et(t,r.props.value))}},Ga={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const o=qt(t);lt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?ut(pn(i)):pn(i));e._assign(e.multiple?o?new Set(s):s:s[0])}),e._assign=Mt(r)},mounted(e,{value:t}){ti(e,t)},beforeUpdate(e,t,n){e._assign=Mt(n)},updated(e,{value:t}){ti(e,t)}};function ti(e,t){const n=e.multiple;if(!(n&&!D(t)&&!qt(t))){for(let r=0,o=e.options.length;r<o;r++){const s=e.options[r],i=pn(s);if(n)D(t)?s.selected=Sr(t,i)>-1:s.selected=t.has(i);else if(Et(pn(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function pn(e){return"_value"in e?e._value:e.value}function Wa(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const qa={created(e,t,n){mr(e,t,n,null,"created")},mounted(e,t,n){mr(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){mr(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){mr(e,t,n,r,"updated")}};function Ya(e,t){switch(e){case"SELECT":return Ga;case"TEXTAREA":return Er;default:switch(t){case"checkbox":return ls;case"radio":return cs;default:return Er}}}function mr(e,t,n,r,o){const i=Ya(e.tagName,n.props&&n.props.type)[o];i&&i(e,t,n,r)}function Td(){Er.getSSRProps=({value:e})=>({value:e}),cs.getSSRProps=({value:e},t)=>{if(t.props&&Et(t.props.value,e))return{checked:!0}},ls.getSSRProps=({value:e},t)=>{if(D(e)){if(t.props&&Sr(e,t.props.value)>-1)return{checked:!0}}else if(qt(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},qa.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=Ya(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const Pd=["ctrl","shift","alt","meta"],Nd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Pd.some(n=>e[`${n}Key`]&&!t.includes(n))},Ja=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const s=Nd[t[o]];if(s&&s(n,t))return}return e(n,...r)},Md={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},kd=(e,t)=>n=>{if(!("key"in n))return;const r=Ge(n.key);if(t.some(o=>o===r||Md[o]===r))return e(n)},Tr={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Cn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Cn(e,!0),r.enter(e)):r.leave(e,()=>{Cn(e,!1)}):Cn(e,t))},beforeUnmount(e,{value:t}){Cn(e,t)}};function Cn(e,t){e.style.display=t?e._vod:"none"}function Sd(){Tr.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Xa=xe({patchProp:cd},Ju);let On,ni=!1;function Qa(){return On||(On=xa(Xa))}function Za(){return On=ni?On:Ca(Xa),ni=!0,On}const Ao=(...e)=>{Qa().render(...e)},el=(...e)=>{Za().hydrate(...e)},Ad=(...e)=>{const t=Qa().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=nl(r);if(!o)return;const s=t._component;!Z(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t},tl=(...e)=>{const t=Za().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=nl(r);if(o)return n(o,!0,o instanceof SVGElement)},t};function nl(e){return ye(e)?document.querySelector(e):e}let ri=!1;const Od=()=>{ri||(ri=!0,Td(),Sd())},Rd=()=>{},oi=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:es,Comment:Se,EffectScope:Fo,Fragment:ne,KeepAlive:eu,ReactiveEffect:Wn,Static:Ut,Suspense:Kc,Teleport:Eu,Text:Kt,Transition:Qn,TransitionGroup:yd,VueElement:qr,callWithAsyncErrorHandling:De,callWithErrorHandling:ct,camelize:Ve,capitalize:Gn,cloneVNode:rt,compatUtils:qu,compile:Rd,computed:ve,createApp:Ad,createBlock:re,createCommentVNode:ee,createElementBlock:v,createElementVNode:_,createHydrationRenderer:Ca,createPropsRestProxy:Fu,createRenderer:xa,createSSRApp:tl,createSlots:ou,createStaticVNode:Gr,createTextVNode:Ae,createVNode:O,customRef:Mc,defineAsyncComponent:ra,defineComponent:S,defineCustomElement:Ba,defineEmits:Vu,defineExpose:Lu,defineProps:Iu,defineSSRCustomElement:dd,get devtools(){return Zt},effect:Xl,effectScope:ql,getCurrentInstance:mt,getCurrentScope:ki,getTransitionRawChildren:Ur,guardReactiveProps:Ma,h:Wt,handleError:Yt,hydrate:el,initCustomFormatter:zu,initDirectivesForSSR:Od,inject:nt,isMemoSame:Ha,isProxy:jo,isReactive:Dt,isReadonly:zt,isRef:Ee,isRuntimeOnly:Au,isShallow:Ln,isVNode:Pt,markRaw:rn,mergeDefaults:Du,mergeProps:An,nextTick:Jt,normalizeClass:me,normalizeProps:Hl,normalizeStyle:zn,onActivated:oa,onBeforeMount:ts,onBeforeUnmount:jr,onBeforeUpdate:aa,onDeactivated:sa,onErrorCaptured:da,onMounted:We,onRenderTracked:ua,onRenderTriggered:ca,onScopeDispose:Si,onServerPrefetch:la,onUnmounted:ft,onUpdated:_n,openBlock:d,popScopeId:je,provide:Fr,proxyRefs:Wo,pushScopeId:ze,queuePostFlushCb:Yo,reactive:qn,readonly:Vr,ref:ue,registerRuntimeCompiler:Su,render:Ao,renderList:Ne,renderSlot:Q,resolveComponent:Ct,resolveDirective:ru,resolveDynamicComponent:Xn,resolveFilter:Wu,resolveTransitionHooks:un,setBlockTracking:Eo,setDevtoolsHook:Xi,setTransitionHooks:jt,shallowReactive:zi,shallowReadonly:wc,shallowRef:ji,ssrContextKey:Va,ssrUtils:Gu,stop:Ql,toDisplayString:ie,toHandlerKey:Nn,toHandlers:su,toRaw:le,toRef:Gi,toRefs:kc,transformVNodeArgs:Tu,triggerRef:Tc,unref:w,useAttrs:Bu,useCssModule:fd,useCssVars:md,useSSRContext:La,useSlots:$u,useTransitionState:Zo,vModelCheckbox:ls,vModelDynamic:qa,vModelRadio:cs,vModelSelect:Ga,vModelText:Er,vShow:Tr,version:$a,warn:Rc,watch:Fe,watchEffect:gn,watchPostEffect:Qo,watchSyncEffect:Jc,withAsyncContext:Uu,withCtx:X,withDefaults:Hu,withDirectives:_o,withKeys:kd,withMemo:ju,withModifiers:Ja,withScopeId:Bc},Symbol.toStringTag,{value:"Module"})),$=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Id="modulepreload",Vd=function(e){return"/promise-ui/"+e},si={},bt=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Vd(s),s in si)return;si[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let p=o.length-1;p>=0;p--){const f=o[p];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Id,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((p,f)=>{c.addEventListener("load",p),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};const Ld=JSON.parse('{"lang":"zh-CN","dir":"ltr","title":"PromiseUI","description":"一个vue3组件库","base":"/promise-ui","head":[],"appearance":true,"themeConfig":{"sidebar":{"/":[{"text":"开始","items":[{"text":"安装使用","link":"/quick-start/"},{"text":"变更日志","link":"/change-log/"}]},{"text":"通用","items":[{"text":"Button 按钮","link":"/components/button/"},{"text":"Overlay 遮罩层","link":"/components/overlay/"},{"text":"Scrollbar 滚动条","link":"/components/scrollbar/"},{"text":"VirtualScroll 虚拟滚动","link":"/components/virtualScroll/"}]},{"text":"数据展示","items":[{"text":"Table 表格","link":"/components/table/"},{"text":"Tag 标签","link":"/components/tag/"}]},{"text":"导航","items":[{"text":"Dropdown 下拉菜单","link":"/components/dropdown/"},{"text":"LoadingBar 加载条","link":"/components/loadingBar/"},{"text":"Tabs 标签页","link":"/components/tabs/"}]},{"text":"反馈","items":[{"text":"Message 消息","link":"/components/message/"},{"text":"MessageBox 消息弹出框","link":"/components/messageBox/"},{"text":"Modal 模态框","link":"/components/modal/"},{"text":"Popover 悬浮提示","link":"/components/popover/"}]},{"text":"数据录入","items":[{"text":"AutoComplete 自动填充","link":"/components/autoComplete/"},{"text":"Checkbox 多选框","link":"/components/checkbox/"},{"text":"Form 表单","link":"/components/form/"},{"text":"Input 输入框","link":"/components/input/"},{"text":"Radio 单选框","link":"/components/radio/"},{"text":"Select 选择器","link":"/components/select/"},{"text":"Switch 开关","link":"/components/switch/"},{"text":"DatePicker 日期选择器","link":"/components/datePicker/"}]},{"text":"布局","items":[]}]},"nav":[{"text":"组件文档","link":"/quick-start/","target":"_self"},{"text":"playground","link":"/playground/"},{"text":"Github","link":"https://github.com/liyao1520/promise-ui","target":"_blank","rel":""}],"search":true,"logo":"/logo.svg"},"locales":{},"scrollOffset":90,"cleanUrls":"disabled"}'),rl=/^[a-z]+:/i,ol=/#.*$/,Hd=/(index)?\.(md|html)$/,Me=typeof window<"u",sl={relativePath:"",title:"404",description:"Not Found",headers:[],frontmatter:{sidebar:!1,layout:"page"},lastUpdated:0};function $d(e,t,n=!1){if(t===void 0)return!1;if(e=ii(`/${e}`),n)return new RegExp(t).test(e);if(ii(t)!==e)return!1;const r=t.match(ol);return r?(Me?location.hash:"")===r[0]:!0}function ii(e){return decodeURI(e).replace(ol,"").replace(Hd,"")}function Bd(e){return rl.test(e)}function Dd(e,t){var r,o,s,i,a,l,c;const n=Object.keys(e.locales).find(p=>p!=="root"&&!Bd(p)&&$d(t,`/${p}/`,!0))||"root";return Object.assign({},e,{localeIndex:n,lang:((r=e.locales[n])==null?void 0:r.lang)??e.lang,dir:((o=e.locales[n])==null?void 0:o.dir)??e.dir,title:((s=e.locales[n])==null?void 0:s.title)??e.title,titleTemplate:((i=e.locales[n])==null?void 0:i.titleTemplate)??e.titleTemplate,description:((a=e.locales[n])==null?void 0:a.description)??e.description,head:al(e.head,((l=e.locales[n])==null?void 0:l.head)??[]),themeConfig:{...e.themeConfig,...(c=e.locales[n])==null?void 0:c.themeConfig}})}function il(e,t){const n=t.title||e.title,r=t.titleTemplate??e.titleTemplate;if(typeof r=="string"&&r.includes(":title"))return r.replace(/:title/g,n);const o=Fd(e.title,r);return`${n}${o}`}function Fd(e,t){return t===!1?"":t===!0||t===void 0?` | ${e}`:e===t?"":` | ${t}`}function Ud(e,t){const[n,r]=t;if(n!=="meta")return!1;const o=Object.entries(r)[0];return o==null?!1:e.some(([s,i])=>s===n&&i[o[0]]===o[1])}function al(e,t){return[...e.filter(n=>!Ud(t,n)),...t]}const zd=/[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,jd=/^[a-z]:/i;function ai(e){const t=jd.exec(e),n=t?t[0]:"";return n+e.slice(n.length).replace(zd,"_").replace(/(^|\/)_+(?=[^/]*$)/,"$1")}const ll=Symbol(),fn=ji(Ld);function Kd(e){const t=ve(()=>Dd(fn.value,e.data.relativePath));return{site:t,theme:ve(()=>t.value.themeConfig),page:ve(()=>e.data),frontmatter:ve(()=>e.data.frontmatter),lang:ve(()=>t.value.lang),dir:ve(()=>t.value.dir),localeIndex:ve(()=>t.value.localeIndex||"root"),title:ve(()=>il(t.value,e.data)),description:ve(()=>e.data.description||t.value.description),isDark:ue(!1)}}function ce(){const e=nt(ll);if(!e)throw new Error("vitepress data not properly injected in app");return e}function Gd(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function Un(e){return rl.test(e)||e.startsWith(".")?e:Gd(fn.value.base,e)}function cl(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t=t.replace(/\/$/,"/index"),Me){const n="/promise-ui";t=ai(t.slice(n.length).replace(/\//g,"_")||"index")+".md";let r=__VP_HASH_MAP__[t.toLowerCase()];r||(t=t.endsWith("_index.md")?t.slice(0,-9)+".md":t.slice(0,-3)+"_index.md",r=__VP_HASH_MAP__[t.toLowerCase()]),t=`${n}assets/${t}.${r}.js`}else t=`./${ai(t.slice(1).replace(/\//g,"_"))}.md.js`;return t}const ul=Symbol(),li="http://a.com",Wd=()=>({path:"/",component:null,data:sl});function qd(e,t){const n=qn(Wd()),r={route:n,go:o};async function o(a=Me?location.href:"/"){var c,p;await((c=r.onBeforeRouteChange)==null?void 0:c.call(r,a));const l=new URL(a,li);fn.value.cleanUrls==="disabled"&&!l.pathname.endsWith("/")&&!l.pathname.endsWith(".html")&&(l.pathname+=".html",a=l.pathname+l.search+l.hash),Me&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",a)),await i(a),await((p=r.onAfterRouteChanged)==null?void 0:p.call(r,a))}let s=null;async function i(a,l=0,c=!1){const p=new URL(a,li),f=s=p.pathname;try{let g=await e(f);if(s===f){s=null;const{default:y,__pageData:P}=g;if(!y)throw new Error(`Invalid route component: ${y}`);n.path=Me?f:Un(f),n.component=rn(y),n.data=rn(P),Me&&Jt(()=>{if(p.hash&&!l){let R=null;try{R=document.querySelector(decodeURIComponent(p.hash))}catch(z){console.warn(z)}if(R){ci(R,p.hash);return}}window.scrollTo(0,l)})}}catch(g){if(!/fetch/.test(g.message)&&!/^\/404(\.html|\/)?$/.test(a)&&console.error(g),!c)try{const y=await fetch(fn.value.base+"hashmap.json");window.__VP_HASH_MAP__=await y.json(),await i(a,l,!0);return}catch{}s===f&&(s=null,n.path=Me?f:Un(f),n.component=t?rn(t):null,n.data=sl)}}return Me&&(window.addEventListener("click",a=>{if(a.target.closest("button"))return;const c=a.target.closest("a");if(c&&!c.closest(".vp-raw")&&!c.download){const{href:p,origin:f,pathname:g,hash:y,search:P,target:R}=c,z=window.location,C=g.match(/\.\w+$/);!a.ctrlKey&&!a.shiftKey&&!a.altKey&&!a.metaKey&&R!=="_blank"&&f===z.origin&&!(C&&C[0]!==".html")&&(a.preventDefault(),g===z.pathname&&P===z.search?y&&y!==z.hash&&(history.pushState(null,"",y),window.dispatchEvent(new Event("hashchange")),ci(c,y,c.classList.contains("header-anchor"))):o(p))}},{capture:!0}),window.addEventListener("popstate",a=>{i(location.href,a.state&&a.state.scrollPosition||0)}),window.addEventListener("hashchange",a=>{a.preventDefault()})),r}function Yd(){const e=nt(ul);if(!e)throw new Error("useRouter() is called without provider.");return e}function vn(){return Yd().route}function ci(e,t,n=!1){let r=null;try{r=e.classList.contains("header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(o){console.warn(o)}if(r){let o=fn.value.scrollOffset;typeof o=="string"&&(o=document.querySelector(o).getBoundingClientRect().bottom+24);const s=parseInt(window.getComputedStyle(r).paddingTop,10),i=window.scrollY+r.getBoundingClientRect().top-o+s;!n||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({left:0,top:i,behavior:"smooth"})}}const Jd=S({name:"VitePressContent",props:{onContentUpdated:Function},setup(e){const t=vn();return _n(()=>{var n;(n=e.onContentUpdated)==null||n.call(e)}),()=>Wt("div",{style:{position:"relative"}},[t.component?Wt(t.component):null])}}),dl=/#.*$/,Xd=/(index)?\.(md|html)$/,Qd=/^[a-z]+:/i,Zd=typeof window<"u",ep=ue(Zd?location.hash:"");function tp(e){return Qd.test(e)}function np(e,t){let n,r=!1;return()=>{n&&clearTimeout(n),r?n=setTimeout(e,t):(e(),r=!0,setTimeout(()=>{r=!1},t))}}function Zn(e,t,n=!1){if(t===void 0)return!1;if(e=di(`/${e}`),n)return new RegExp(t).test(e);if(di(t)!==e)return!1;const r=t.match(dl);return r?ep.value===r[0]:!0}function ui(e){return/^\//.test(e)?e:`/${e}`}function di(e){return decodeURI(e).replace(dl,"").replace(Xd,"")}function Oo(e){if(tp(e))return e;const{pathname:t,search:n,hash:r}=new URL(e,"http://example.com"),o=t.endsWith("/")||t.endsWith(".html")?e:`${t.replace(/(\.md)?$/,".html")}${n}${r}`;return Un(o)}function pl(e,t){if(Array.isArray(e))return e;t=ui(t);for(const n in e)if(t.startsWith(ui(n)))return e[n];return[]}function rp(e){const t=[];for(const n of e)for(const r of n.items)t.push(r);return t}function ot(){const e=vn(),{theme:t,frontmatter:n}=ce(),r=ue(!1),o=ve(()=>{const c=t.value.sidebar,p=e.data.relativePath;return c?pl(c,p):[]}),s=ve(()=>n.value.sidebar!==!1&&o.value.length>0&&n.value.layout!=="home");function i(){r.value=!0}function a(){r.value=!1}function l(){r.value?a():i()}return{isOpen:r,sidebar:o,hasSidebar:s,open:i,close:a,toggle:l}}function op(e,t){let n;gn(()=>{n=e.value?document.activeElement:void 0}),We(()=>{window.addEventListener("keyup",r)}),ft(()=>{window.removeEventListener("keyup",r)});function r(o){o.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}const sp=S({__name:"VPSkipLink",setup(e){const t=vn(),n=ue();Fe(()=>t.path,()=>n.value.focus());function r({target:o}){const s=document.querySelector(o.hash);if(s){const i=()=>{s.removeAttribute("tabindex"),s.removeEventListener("blur",i)};s.setAttribute("tabindex","-1"),s.addEventListener("blur",i),s.focus(),window.scrollTo(0,0)}}return(o,s)=>(d(),v(ne,null,[_("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),_("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}});const ip=$(sp,[["__scopeId","data-v-f0f9d4ba"]]),ap={key:0,class:"VPBackdrop"},lp=S({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(d(),re(Qn,{name:"fade"},{default:X(()=>[e.show?(d(),v("div",ap)):ee("",!0)]),_:1}))}});const cp=$(lp,[["__scopeId","data-v-84b730bb"]]);function up(){const e=ue(!1);function t(){e.value=!0,window.addEventListener("resize",o)}function n(){e.value=!1,window.removeEventListener("resize",o)}function r(){e.value?n():t()}function o(){window.outerWidth>=768&&n()}return{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:r}}const dp=["src"],pp={inheritAttrs:!1},fp=S({...pp,__name:"VPImage",props:{image:null},setup(e){return(t,n)=>{const r=Ct("VPImage",!0);return e.image?(d(),v(ne,{key:0},[typeof e.image=="string"||"src"in e.image?(d(),v("img",An({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:w(Un)(typeof e.image=="string"?e.image:e.image.src)}),null,16,dp)):(d(),v(ne,{key:1},[O(r,An({class:"dark",image:e.image.dark},t.$attrs),null,16,["image"]),O(r,An({class:"light",image:e.image.light},t.$attrs),null,16,["image"])],64))],64)):ee("",!0)}}});const fl=$(fp,[["__scopeId","data-v-64d21350"]]),mp=["href"],hp=S({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=ce(),{hasSidebar:r}=ot();return(o,s)=>(d(),v("div",{class:me(["VPNavBarTitle",{"has-sidebar":w(r)}])},[_("a",{class:"title",href:w(t).base},[O(fl,{class:"logo",image:w(n).logo},null,8,["image"]),w(n).siteTitle?(d(),v(ne,{key:0},[Ae(ie(w(n).siteTitle),1)],64)):w(n).siteTitle===void 0?(d(),v(ne,{key:1},[Ae(ie(w(t).title),1)],64)):ee("",!0)],8,mp)],2))}});const gp=$(hp,[["__scopeId","data-v-e1971e4e"]]);const _p={key:0,class:"VPNavBarSearch"},vp={type:"button",class:"DocSearch DocSearch-Button","aria-label":"Search"},yp=_("span",{class:"DocSearch-Button-Container"},[_("svg",{class:"DocSearch-Search-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},[_("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"})]),_("span",{class:"DocSearch-Button-Placeholder"},"Search")],-1),bp={class:"DocSearch-Button-Keys"},xp=_("kbd",{class:"DocSearch-Button-Key"},"K",-1),Cp=S({__name:"VPNavBarSearch",setup(e){const t=()=>null,{theme:n}=ce(),r=ue(!1),o=ue();We(()=>{if(!n.value.algolia)return;o.value.textContent=/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"⌘":"Ctrl";const i=l=>{l.key==="k"&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),s(),a())},a=()=>{window.removeEventListener("keydown",i)};window.addEventListener("keydown",i),ft(a)});function s(){r.value||(r.value=!0)}return(i,a)=>w(n).algolia?(d(),v("div",_p,[r.value?(d(),re(w(t),{key:0})):(d(),v("div",{key:1,id:"docsearch",onClick:s},[_("button",vp,[yp,_("span",bp,[_("kbd",{class:"DocSearch-Button-Key",ref_key:"metaKey",ref:o},"Meta",512),xp])])]))])):ee("",!0)}});const wp={},Ep={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px"},Tp=_("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Pp=_("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"},null,-1),Np=[Tp,Pp];function Mp(e,t){return d(),v("svg",Ep,Np)}const kp=$(wp,[["render",Mp]]),Sp=S({__name:"VPLink",props:{href:null,noIcon:{type:Boolean}},setup(e){const t=e,n=ve(()=>t.href&&/^[a-z]+:/i.test(t.href));return(r,o)=>(d(),re(Xn(e.href?"a":"span"),{class:me(["VPLink",{link:e.href}]),href:e.href?w(Oo)(e.href):void 0,target:w(n)?"_blank":void 0,rel:w(n)?"noopener noreferrer":void 0},{default:X(()=>[Q(r.$slots,"default",{},void 0,!0),w(n)&&!e.noIcon?(d(),re(kp,{key:0,class:"icon"})):ee("",!0)]),_:3},8,["class","href","target","rel"]))}});const yn=$(Sp,[["__scopeId","data-v-081c93d1"]]),Ap=S({__name:"VPNavBarMenuLink",props:{item:null},setup(e){const{page:t}=ce();return(n,r)=>(d(),re(yn,{class:me({VPNavBarMenuLink:!0,active:w(Zn)(w(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,noIcon:!0},{default:X(()=>[Ae(ie(e.item.text),1)]),_:1},8,["class","href"]))}});const Op=$(Ap,[["__scopeId","data-v-c483828e"]]),us=ue();let ml=!1,lo=0;function Rp(e){const t=ue(!1);if(typeof window<"u"){!ml&&Ip(),lo++;const n=Fe(us,r=>{var o,s,i;r===e.el.value||(o=e.el.value)!=null&&o.contains(r)?(t.value=!0,(s=e.onFocus)==null||s.call(e)):(t.value=!1,(i=e.onBlur)==null||i.call(e))});ft(()=>{n(),lo--,lo||Vp()})}return Vr(t)}function Ip(){document.addEventListener("focusin",hl),ml=!0,us.value=document.activeElement}function Vp(){document.removeEventListener("focusin",hl)}function hl(){us.value=document.activeElement}const Lp={},Hp={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},$p=_("path",{d:"M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"},null,-1),Bp=[$p];function Dp(e,t){return d(),v("svg",Hp,Bp)}const gl=$(Lp,[["render",Dp]]),Fp={},Up={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},zp=_("circle",{cx:"12",cy:"12",r:"2"},null,-1),jp=_("circle",{cx:"19",cy:"12",r:"2"},null,-1),Kp=_("circle",{cx:"5",cy:"12",r:"2"},null,-1),Gp=[zp,jp,Kp];function Wp(e,t){return d(),v("svg",Up,Gp)}const qp=$(Fp,[["render",Wp]]),Yp={class:"VPMenuLink"},Jp=S({__name:"VPMenuLink",props:{item:null},setup(e){const{page:t}=ce();return(n,r)=>(d(),v("div",Yp,[O(yn,{class:me({active:w(Zn)(w(t).relativePath,e.item.activeMatch||e.item.link)}),href:e.item.link},{default:X(()=>[Ae(ie(e.item.text),1)]),_:1},8,["class","href"])]))}});const Yr=$(Jp,[["__scopeId","data-v-a76962c6"]]),Xp={class:"VPMenuGroup"},Qp={key:0,class:"title"},Zp=S({__name:"VPMenuGroup",props:{text:null,items:null},setup(e){return(t,n)=>(d(),v("div",Xp,[e.text?(d(),v("p",Qp,ie(e.text),1)):ee("",!0),(d(!0),v(ne,null,Ne(e.items,r=>(d(),v(ne,null,["link"in r?(d(),re(Yr,{key:0,item:r},null,8,["item"])):ee("",!0)],64))),256))]))}});const ef=$(Zp,[["__scopeId","data-v-fa9601ff"]]),tf={class:"VPMenu"},nf={key:0,class:"items"},rf=S({__name:"VPMenu",props:{items:null},setup(e){return(t,n)=>(d(),v("div",tf,[e.items?(d(),v("div",nf,[(d(!0),v(ne,null,Ne(e.items,r=>(d(),v(ne,{key:r.text},["link"in r?(d(),re(Yr,{key:0,item:r},null,8,["item"])):(d(),re(ef,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):ee("",!0),Q(t.$slots,"default",{},void 0,!0)]))}});const of=$(rf,[["__scopeId","data-v-de7bf24f"]]),sf=["aria-expanded","aria-label"],af={key:0,class:"text"},lf={class:"menu"},cf=S({__name:"VPFlyout",props:{icon:null,button:null,label:null,items:null},setup(e){const t=ue(!1),n=ue();Rp({el:n,onBlur:r});function r(){t.value=!1}return(o,s)=>(d(),v("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:s[1]||(s[1]=i=>t.value=!0),onMouseleave:s[2]||(s[2]=i=>t.value=!1)},[_("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:s[0]||(s[0]=i=>t.value=!t.value)},[e.button||e.icon?(d(),v("span",af,[e.icon?(d(),re(Xn(e.icon),{key:0,class:"option-icon"})):ee("",!0),Ae(" "+ie(e.button)+" ",1),O(gl,{class:"text-icon"})])):(d(),re(qp,{key:1,class:"icon"}))],8,sf),_("div",lf,[O(of,{items:e.items},{default:X(()=>[Q(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}});const ds=$(cf,[["__scopeId","data-v-8e1d81ed"]]),uf=S({__name:"VPNavBarMenuGroup",props:{item:null},setup(e){const{page:t}=ce();return(n,r)=>(d(),re(ds,{class:me({VPNavBarMenuGroup:!0,active:w(Zn)(w(t).relativePath,e.item.activeMatch,!!e.item.activeMatch)}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),df=e=>(ze("data-v-f1061362"),e=e(),je(),e),pf={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ff=df(()=>_("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),mf=S({__name:"VPNavBarMenu",setup(e){const{theme:t}=ce();return(n,r)=>w(t).nav?(d(),v("nav",pf,[ff,(d(!0),v(ne,null,Ne(w(t).nav,o=>(d(),v(ne,{key:o.text},["link"in o?(d(),re(Op,{key:0,item:o},null,8,["item"])):(d(),re(uf,{key:1,item:o},null,8,["item"]))],64))),128))])):ee("",!0)}});const hf=$(mf,[["__scopeId","data-v-f1061362"]]),gf={},_f={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},vf=_("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),yf=_("path",{d:" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",class:"css-c4d79v"},null,-1),bf=[vf,yf];function xf(e,t){return d(),v("svg",_f,bf)}const _l=$(gf,[["render",xf]]),Cf={class:"items"},wf={class:"title"},Ef=S({__name:"VPNavBarTranslations",setup(e){const{theme:t}=ce();return(n,r)=>w(t).localeLinks?(d(),re(ds,{key:0,class:"VPNavBarTranslations",icon:_l},{default:X(()=>[_("div",Cf,[_("p",wf,ie(w(t).localeLinks.text),1),(d(!0),v(ne,null,Ne(w(t).localeLinks.items,o=>(d(),re(Yr,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1})):ee("",!0)}});const Tf=$(Ef,[["__scopeId","data-v-2569f9c3"]]),pi="vitepress-theme-appearance";const Pf={},Nf={class:"VPSwitch",type:"button",role:"switch"},Mf={class:"check"},kf={key:0,class:"icon"};function Sf(e,t){return d(),v("button",Nf,[_("span",Mf,[e.$slots.default?(d(),v("span",kf,[Q(e.$slots,"default",{},void 0,!0)])):ee("",!0)])])}const Af=$(Pf,[["render",Sf],["__scopeId","data-v-ff5e2c52"]]),Of={},Rf={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},If=Gr('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),Vf=[If];function Lf(e,t){return d(),v("svg",Rf,Vf)}const Hf=$(Of,[["render",Lf]]),$f={},Bf={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Df=_("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),Ff=[Df];function Uf(e,t){return d(),v("svg",Bf,Ff)}const zf=$($f,[["render",Uf]]),jf=S({__name:"VPSwitchAppearance",setup(e){const t=typeof localStorage<"u"?n():()=>{};function n(){const r=window.matchMedia("(prefers-color-scheme: dark)"),o=document.documentElement.classList;let s=localStorage.getItem(pi)||"auto",i=s==="auto"?r.matches:s==="dark";r.onchange=c=>{s==="auto"&&l(i=c.matches)};function a(){l(i=!i),s=i?r.matches?"auto":"dark":r.matches?"light":"auto",localStorage.setItem(pi,s)}function l(c){o[c?"add":"remove"]("dark")}return a}return(r,o)=>(d(),re(Af,{class:"VPSwitchAppearance","aria-label":"toggle dark mode",onClick:w(t)},{default:X(()=>[O(Hf,{class:"sun"}),O(zf,{class:"moon"})]),_:1},8,["onClick"]))}});const ps=$(jf,[["__scopeId","data-v-1ae688fd"]]),Kf={key:0,class:"VPNavBarAppearance"},Gf=S({__name:"VPNavBarAppearance",setup(e){const{site:t}=ce();return(n,r)=>w(t).appearance?(d(),v("div",Kf,[O(ps)])):ee("",!0)}});const Wf=$(Gf,[["__scopeId","data-v-8f99d391"]]),qf={},Yf={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Jf=_("path",{d:"M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"},null,-1),Xf=[Jf];function Qf(e,t){return d(),v("svg",Yf,Xf)}const Zf=$(qf,[["render",Qf]]),em={},tm={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},nm=_("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"},null,-1),rm=[nm];function om(e,t){return d(),v("svg",tm,rm)}const sm=$(em,[["render",om]]),im={},am={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},lm=_("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),cm=[lm];function um(e,t){return d(),v("svg",am,cm)}const dm=$(im,[["render",um]]),pm={},fm={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},mm=_("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},null,-1),hm=[mm];function gm(e,t){return d(),v("svg",fm,hm)}const _m=$(pm,[["render",gm]]),vm={},ym={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},bm=_("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"},null,-1),xm=[bm];function Cm(e,t){return d(),v("svg",ym,xm)}const wm=$(vm,[["render",Cm]]),Em={},Tm={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Pm=_("path",{d:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"},null,-1),Nm=[Pm];function Mm(e,t){return d(),v("svg",Tm,Nm)}const km=$(Em,[["render",Mm]]),Sm={},Am={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Om=_("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"},null,-1),Rm=[Om];function Im(e,t){return d(),v("svg",Am,Rm)}const Vm=$(Sm,[["render",Im]]),Lm={},Hm={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},$m=_("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),Bm=[$m];function Dm(e,t){return d(),v("svg",Hm,Bm)}const Fm=$(Lm,[["render",Dm]]),Um=["href","title"],zm={class:"visually-hidden"},jm=S({__name:"VPSocialLink",props:{icon:null,link:null},setup(e){const t={discord:Zf,facebook:sm,github:dm,instagram:wm,linkedin:_m,slack:km,twitter:Vm,youtube:Fm};return(n,r)=>(d(),v("a",{class:"VPSocialLink",href:e.link,title:e.icon,target:"_blank",rel:"noopener noreferrer"},[(d(),re(Xn(t[e.icon]),{class:"icon"})),_("span",zm,ie(e.icon),1)],8,Um))}});const Km=$(jm,[["__scopeId","data-v-8c8a7dad"]]),Gm={class:"VPSocialLinks"},Wm=S({__name:"VPSocialLinks",props:{links:null},setup(e){return(t,n)=>(d(),v("div",Gm,[(d(!0),v(ne,null,Ne(e.links,({link:r,icon:o})=>(d(),re(Km,{key:r,icon:o,link:r},null,8,["icon","link"]))),128))]))}});const fs=$(Wm,[["__scopeId","data-v-6a54b76d"]]),qm=S({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=ce();return(n,r)=>w(t).socialLinks?(d(),re(fs,{key:0,class:"VPNavBarSocialLinks",links:w(t).socialLinks},null,8,["links"])):ee("",!0)}});const Ym=$(qm,[["__scopeId","data-v-bc448e16"]]),Jm=e=>(ze("data-v-469c69b0"),e=e(),je(),e),Xm={key:0,class:"group"},Qm={class:"trans-title"},Zm={key:1,class:"group"},eh={class:"item appearance"},th=Jm(()=>_("p",{class:"label"},"Appearance",-1)),nh={class:"appearance-action"},rh={key:2,class:"group"},oh={class:"item social-links"},sh=S({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=ce();return(r,o)=>(d(),re(ds,{class:"VPNavBarExtra",label:"extra navigation"},{default:X(()=>[w(n).localeLinks?(d(),v("div",Xm,[_("p",Qm,ie(w(n).localeLinks.text),1),(d(!0),v(ne,null,Ne(w(n).localeLinks.items,s=>(d(),re(Yr,{key:s.link,item:s},null,8,["item"]))),128))])):ee("",!0),w(t).appearance?(d(),v("div",Zm,[_("div",eh,[th,_("div",nh,[O(ps)])])])):ee("",!0),w(n).socialLinks?(d(),v("div",rh,[_("div",oh,[O(fs,{class:"social-links-list",links:w(n).socialLinks},null,8,["links"])])])):ee("",!0)]),_:1}))}});const ih=$(sh,[["__scopeId","data-v-469c69b0"]]),ah=e=>(ze("data-v-3173f44a"),e=e(),je(),e),lh=["aria-expanded"],ch=ah(()=>_("span",{class:"container"},[_("span",{class:"top"}),_("span",{class:"middle"}),_("span",{class:"bottom"})],-1)),uh=[ch],dh=S({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(d(),v("button",{type:"button",class:me(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=r=>t.$emit("click"))},uh,10,lh))}});const ph=$(dh,[["__scopeId","data-v-3173f44a"]]),fh={class:"container"},mh={class:"content"},hh=S({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const{hasSidebar:t}=ot();return(n,r)=>(d(),v("div",{class:me(["VPNavBar",{"has-sidebar":w(t)}])},[_("div",fh,[O(gp),_("div",mh,[O(Cp,{class:"search"}),O(hf,{class:"menu"}),O(Tf,{class:"translations"}),O(Wf,{class:"appearance"}),O(Ym,{class:"social-links"}),O(ih,{class:"extra"}),O(ph,{class:"hamburger",active:e.isScreenOpen,onClick:r[0]||(r[0]=o=>n.$emit("toggle-screen"))},null,8,["active"])])])],2))}});const gh=$(hh,[["__scopeId","data-v-71f19ec8"]]);function _h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var ms=!1;if(typeof window<"u"){var fi={get passive(){ms=!0}};window.addEventListener("testPassive",null,fi),window.removeEventListener("testPassive",null,fi)}var Pr=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),an=[],Nr=!1,hs=-1,Rn=void 0,Lt=void 0,In=void 0,vl=function(t){return an.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(t))})},Mr=function(t){var n=t||window.event;return vl(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},vh=function(t){if(In===void 0){var n=!!t&&t.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;if(n&&r>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);In=document.body.style.paddingRight,document.body.style.paddingRight=o+r+"px"}}Rn===void 0&&(Rn=document.body.style.overflow,document.body.style.overflow="hidden")},yh=function(){In!==void 0&&(document.body.style.paddingRight=In,In=void 0),Rn!==void 0&&(document.body.style.overflow=Rn,Rn=void 0)},bh=function(){return window.requestAnimationFrame(function(){if(Lt===void 0){Lt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,n=t.scrollY,r=t.scrollX,o=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-r,setTimeout(function(){return window.requestAnimationFrame(function(){var s=o-window.innerHeight;s&&n>=o&&(document.body.style.top=-(n+s))})},300)}})},xh=function(){if(Lt!==void 0){var t=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=Lt.position,document.body.style.top=Lt.top,document.body.style.left=Lt.left,window.scrollTo(n,t),Lt=void 0}},Ch=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},wh=function(t,n){var r=t.targetTouches[0].clientY-hs;return vl(t.target)?!1:n&&n.scrollTop===0&&r>0||Ch(n)&&r<0?Mr(t):(t.stopPropagation(),!0)},Eh=function(t,n){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!an.some(function(o){return o.targetElement===t})){var r={targetElement:t,options:n||{}};an=[].concat(_h(an),[r]),Pr?bh():vh(n),Pr&&(t.ontouchstart=function(o){o.targetTouches.length===1&&(hs=o.targetTouches[0].clientY)},t.ontouchmove=function(o){o.targetTouches.length===1&&wh(o,t)},Nr||(document.addEventListener("touchmove",Mr,ms?{passive:!1}:void 0),Nr=!0))}},Th=function(){Pr&&(an.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),Nr&&(document.removeEventListener("touchmove",Mr,ms?{passive:!1}:void 0),Nr=!1),hs=-1),Pr?xh():yh(),an=[]};const Ph=S({__name:"VPNavScreenMenuLink",props:{text:null,link:null},setup(e){const t=nt("close-screen");return(n,r)=>(d(),re(yn,{class:"VPNavScreenMenuLink",href:e.link,onClick:w(t)},{default:X(()=>[Ae(ie(e.text),1)]),_:1},8,["href","onClick"]))}});const Nh=$(Ph,[["__scopeId","data-v-81e9aa33"]]),Mh={},kh={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},Sh=_("path",{d:"M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"},null,-1),Ah=[Sh];function Oh(e,t){return d(),v("svg",kh,Ah)}const Rh=$(Mh,[["render",Oh]]),Ih=S({__name:"VPNavScreenMenuGroupLink",props:{text:null,link:null},setup(e){const t=nt("close-screen");return(n,r)=>(d(),re(yn,{class:"VPNavScreenMenuGroupLink",href:e.link,onClick:w(t)},{default:X(()=>[Ae(ie(e.text),1)]),_:1},8,["href","onClick"]))}});const yl=$(Ih,[["__scopeId","data-v-14f08ba8"]]),Vh={class:"VPNavScreenMenuGroupSection"},Lh={key:0,class:"title"},Hh=S({__name:"VPNavScreenMenuGroupSection",props:{text:null,items:null},setup(e){return(t,n)=>(d(),v("div",Vh,[e.text?(d(),v("p",Lh,ie(e.text),1)):ee("",!0),(d(!0),v(ne,null,Ne(e.items,r=>(d(),re(yl,{key:r.text,text:r.text,link:r.link},null,8,["text","link"]))),128))]))}});const $h=$(Hh,[["__scopeId","data-v-49f4d29a"]]),Bh=["aria-controls","aria-expanded"],Dh={class:"button-text"},Fh=["id"],Uh={key:1,class:"group"},zh=S({__name:"VPNavScreenMenuGroup",props:{text:null,items:null},setup(e){const t=e,n=ue(!1),r=ve(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function o(){n.value=!n.value}return(s,i)=>(d(),v("div",{class:me(["VPNavScreenMenuGroup",{open:n.value}])},[_("button",{class:"button","aria-controls":w(r),"aria-expanded":n.value,onClick:o},[_("span",Dh,ie(e.text),1),O(Rh,{class:"button-icon"})],8,Bh),_("div",{id:w(r),class:"items"},[(d(!0),v(ne,null,Ne(e.items,a=>(d(),v(ne,{key:a.text},["link"in a?(d(),v("div",{key:a.text,class:"item"},[O(yl,{text:a.text,link:a.link},null,8,["text","link"])])):(d(),v("div",Uh,[O($h,{text:a.text,items:a.items},null,8,["text","items"])]))],64))),128))],8,Fh)],2))}});const jh=$(zh,[["__scopeId","data-v-f67f7c57"]]),Kh={key:0,class:"VPNavScreenMenu"},Gh=S({__name:"VPNavScreenMenu",setup(e){const{theme:t}=ce();return(n,r)=>w(t).nav?(d(),v("nav",Kh,[(d(!0),v(ne,null,Ne(w(t).nav,o=>(d(),v(ne,{key:o.text},["link"in o?(d(),re(Nh,{key:0,text:o.text,link:o.link},null,8,["text","link"])):(d(),re(jh,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):ee("",!0)}}),Wh=e=>(ze("data-v-7327c7e9"),e=e(),je(),e),qh={key:0,class:"VPNavScreenAppearance"},Yh=Wh(()=>_("p",{class:"text"},"Appearance",-1)),Jh=S({__name:"VPNavScreenAppearance",setup(e){const{site:t}=ce();return(n,r)=>w(t).appearance?(d(),v("div",qh,[Yh,O(ps)])):ee("",!0)}});const Xh=$(Jh,[["__scopeId","data-v-7327c7e9"]]),Qh={class:"list"},Zh=["href"],eg=S({__name:"VPNavScreenTranslations",setup(e){const{theme:t}=ce(),n=ue(!1);function r(){n.value=!n.value}return(o,s)=>w(t).localeLinks?(d(),v("div",{key:0,class:me(["VPNavScreenTranslations",{open:n.value}])},[_("button",{class:"title",onClick:r},[O(_l,{class:"icon lang"}),Ae(" "+ie(w(t).localeLinks.text)+" ",1),O(gl,{class:"icon chevron"})]),_("ul",Qh,[(d(!0),v(ne,null,Ne(w(t).localeLinks.items,i=>(d(),v("li",{key:i.link,class:"item"},[_("a",{class:"link",href:i.link},ie(i.text),9,Zh)]))),128))])],2)):ee("",!0)}});const tg=$(eg,[["__scopeId","data-v-8ecfa666"]]),ng=S({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=ce();return(n,r)=>w(t).socialLinks?(d(),re(fs,{key:0,class:"VPNavScreenSocialLinks",links:w(t).socialLinks},null,8,["links"])):ee("",!0)}}),rg={class:"container"},og=S({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=ue(null);function n(){Eh(t.value,{reserveScrollBarGap:!0})}function r(){Th()}return(o,s)=>(d(),re(Qn,{name:"fade",onEnter:n,onAfterLeave:r},{default:X(()=>[e.open?(d(),v("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t},[_("div",rg,[O(Gh,{class:"menu"}),O(tg,{class:"translations"}),O(Xh,{class:"appearance"}),O(ng,{class:"social-links"})])],512)):ee("",!0)]),_:1}))}});const sg=$(og,[["__scopeId","data-v-7df69748"]]),ig=S({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:r}=up(),{hasSidebar:o}=ot();return Fr("close-screen",n),(s,i)=>(d(),v("header",{class:me(["VPNav",{"no-sidebar":!w(o)}])},[O(gh,{"is-screen-open":w(t),onToggleScreen:w(r)},null,8,["is-screen-open","onToggleScreen"]),O(sg,{open:w(t)},null,8,["open"])],2))}});const ag=$(ig,[["__scopeId","data-v-461425e6"]]),lg={},cg={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24"},ug=_("path",{d:"M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"},null,-1),dg=_("path",{d:"M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"},null,-1),pg=_("path",{d:"M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"},null,-1),fg=_("path",{d:"M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"},null,-1),mg=[ug,dg,pg,fg];function hg(e,t){return d(),v("svg",cg,mg)}const gg=$(lg,[["render",hg]]),_g=e=>(ze("data-v-aa0e63d4"),e=e(),je(),e),vg={key:0,class:"VPLocalNav"},yg=["aria-expanded"],bg=_g(()=>_("span",{class:"menu-text"},"Menu",-1)),xg=S({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{hasSidebar:t}=ot();function n(){window.scrollTo({top:0,left:0,behavior:"smooth"})}return(r,o)=>w(t)?(d(),v("div",vg,[_("button",{class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:o[0]||(o[0]=s=>r.$emit("open-menu"))},[O(gg,{class:"menu-icon"}),bg],8,yg),_("a",{class:"top-link",href:"#",onClick:n}," Return to top ")])):ee("",!0)}});const Cg=$(xg,[["__scopeId","data-v-aa0e63d4"]]),wg={},Eg={version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Tg=_("path",{d:"M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"},null,-1),Pg=_("path",{d:"M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z"},null,-1),Ng=[Tg,Pg];function Mg(e,t){return d(),v("svg",Eg,Ng)}const kg=$(wg,[["render",Mg]]),Sg={},Ag={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Og=_("path",{d:"M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"},null,-1),Rg=_("path",{d:"M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z"},null,-1),Ig=[Og,Rg];function Vg(e,t){return d(),v("svg",Ag,Ig)}const Lg=$(Sg,[["render",Vg]]),Hg={class:"link-text"},$g=S({__name:"VPSidebarLink",props:{item:null},setup(e){const{page:t}=ce(),n=nt("close-sidebar");return(r,o)=>(d(),re(yn,{class:me({active:w(Zn)(w(t).relativePath,e.item.link)}),href:e.item.link,onClick:w(n)},{default:X(()=>[_("span",Hg,ie(e.item.text),1)]),_:1},8,["class","href","onClick"]))}});const Bg=$($g,[["__scopeId","data-v-74419bfe"]]),Dg=["role"],Fg={class:"title-text"},Ug={class:"action"},zg={class:"items"},jg=S({__name:"VPSidebarGroup",props:{text:null,items:null,collapsible:{type:Boolean},collapsed:{type:Boolean}},setup(e){const t=e,n=ue(!1);gn(()=>{n.value=!!(t.collapsible&&t.collapsed)});function r(){t.collapsible&&(n.value=!n.value)}return(o,s)=>(d(),v("section",{class:me(["VPSidebarGroup",{collapsible:e.collapsible,collapsed:n.value}])},[e.text?(d(),v("div",{key:0,class:"title",role:e.collapsible?"button":void 0,onClick:r},[_("h2",Fg,ie(e.text),1),_("div",Ug,[O(Lg,{class:"icon minus"}),O(kg,{class:"icon plus"})])],8,Dg)):ee("",!0),_("div",zg,[(d(!0),v(ne,null,Ne(e.items,i=>(d(),re(Bg,{key:i.link,item:i},null,8,["item"]))),128))])],2))}});const Kg=$(jg,[["__scopeId","data-v-c870be2d"]]),Gg=e=>(ze("data-v-c1056ac5"),e=e(),je(),e),Wg={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},qg=Gg(()=>_("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Yg=S({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const t=e,{sidebar:n,hasSidebar:r}=ot();let o=ue(null);return Qo(async()=>{var s;t.open&&(await Jt(),(s=o.value)==null||s.focus())}),(s,i)=>w(r)?(d(),v("aside",{key:0,class:me(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:o,onClick:i[0]||(i[0]=Ja(()=>{},["stop"]))},[_("nav",Wg,[qg,(d(!0),v(ne,null,Ne(w(n),a=>(d(),v("div",{key:a.text,class:"group"},[O(Kg,{text:a.text,items:a.items,collapsible:a.collapsible,collapsed:a.collapsed},null,8,["text","items","collapsible","collapsed"])]))),128))])],2)):ee("",!0)}});const Jg=$(Yg,[["__scopeId","data-v-c1056ac5"]]);function Xg(){const{page:e}=ce();Me&&Fe(()=>e.value.relativePath,()=>{Jt(()=>{document.querySelectorAll('.vp-doc div[class*="language-"]>span.copy').forEach(Zg)})},{immediate:!0,flush:"post"})}async function Qg(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const r=document.getSelection(),o=r?r.rangeCount>0&&r.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus()}}function Zg(e){e.onclick=()=>{const t=e.parentElement;if(!t)return;const n=t.classList.contains("language-sh")||t.classList.contains("language-bash");let{innerText:r=""}=t;n&&(r=r.replace(/^ *\$ /gm,"")),Qg(r).then(()=>{e.classList.add("copied"),setTimeout(()=>{e.classList.remove("copied")},3e3)})}}const Jr=e=>(ze("data-v-82fed80a"),e=e(),je(),e),e_={class:"NotFound"},t_=Jr(()=>_("p",{class:"code"},"404",-1)),n_=Jr(()=>_("h1",{class:"title"},"PAGE NOT FOUND",-1)),r_=Jr(()=>_("div",{class:"divider"},null,-1)),o_=Jr(()=>_("blockquote",{class:"quote"}," But if you don't change your direction, and if you keep looking, you may end up where you are heading. ",-1)),s_={class:"action"},i_=["href"],a_=S({__name:"NotFound",setup(e){const{site:t}=ce();return(n,r)=>(d(),v("div",e_,[t_,n_,r_,o_,_("div",s_,[_("a",{class:"link",href:w(t).base,"aria-label":"go to home"}," Take me home ",8,i_)])]))}});const Ro=$(a_,[["__scopeId","data-v-82fed80a"]]),l_={},c_={class:"VPPage"};function u_(e,t){const n=Ct("Content");return d(),v("div",c_,[O(n)])}const d_=$(l_,[["render",u_]]),p_=S({__name:"VPButton",props:{tag:null,size:null,theme:null,text:null,href:null},setup(e){const t=e,n=ve(()=>[t.size??"medium",t.theme??"brand"]),r=ve(()=>t.href&&/^[a-z]+:/i.test(t.href)),o=ve(()=>t.tag?t.tag:t.href?"a":"button");return(s,i)=>(d(),re(Xn(w(o)),{class:me(["VPButton",w(n)]),href:e.href?w(Un)(e.href):void 0,target:w(r)?"_blank":void 0,rel:w(r)?"noopener noreferrer":void 0},{default:X(()=>[Ae(ie(e.text),1)]),_:1},8,["class","href","target","rel"]))}});const f_=$(p_,[["__scopeId","data-v-8c890be5"]]),m_=e=>(ze("data-v-4c9fdded"),e=e(),je(),e),h_={class:"container"},g_={class:"main"},__={key:0,class:"name"},v_={class:"clip"},y_={key:1,class:"text"},b_={key:2,class:"tagline"},x_={key:3,class:"actions"},C_={key:0,class:"image"},w_={class:"image-container"},E_=m_(()=>_("div",{class:"image-bg"},null,-1)),T_=S({__name:"VPHero",props:{name:null,text:null,tagline:null,image:null,actions:null},setup(e){return(t,n)=>(d(),v("div",{class:me(["VPHero",{"has-image":e.image}])},[_("div",h_,[_("div",g_,[e.name?(d(),v("h1",__,[_("span",v_,ie(e.name),1)])):ee("",!0),e.text?(d(),v("p",y_,ie(e.text),1)):ee("",!0),e.tagline?(d(),v("p",b_,ie(e.tagline),1)):ee("",!0),e.actions?(d(),v("div",x_,[(d(!0),v(ne,null,Ne(e.actions,r=>(d(),v("div",{key:r.link,class:"action"},[O(f_,{tag:"a",size:"medium",theme:r.theme,text:r.text,href:r.link},null,8,["theme","text","href"])]))),128))])):ee("",!0)]),e.image?(d(),v("div",C_,[_("div",w_,[E_,O(fl,{class:"image-src",image:e.image},null,8,["image"])])])):ee("",!0)])],2))}});const P_=$(T_,[["__scopeId","data-v-4c9fdded"]]),N_=S({__name:"VPHomeHero",setup(e){const{frontmatter:t}=ce();return(n,r)=>w(t).hero?(d(),re(P_,{key:0,class:"VPHomeHero",name:w(t).hero.name,text:w(t).hero.text,tagline:w(t).hero.tagline,image:w(t).hero.image,actions:w(t).hero.actions},null,8,["name","text","tagline","image","actions"])):ee("",!0)}}),M_={class:"VPFeature"},k_={key:0,class:"icon"},S_={class:"title"},A_={class:"details"},O_=S({__name:"VPFeature",props:{icon:null,title:null,details:null},setup(e){return(t,n)=>(d(),v("article",M_,[e.icon?(d(),v("div",k_,ie(e.icon),1)):ee("",!0),_("h2",S_,ie(e.title),1),_("p",A_,ie(e.details),1)]))}});const R_=$(O_,[["__scopeId","data-v-8620384d"]]),I_={key:0,class:"VPFeatures"},V_={class:"container"},L_={class:"items"},H_=S({__name:"VPFeatures",props:{features:null},setup(e){const t=e,n=ve(()=>{const r=t.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r%2===0)return"grid-4"}else return});return(r,o)=>e.features?(d(),v("div",I_,[_("div",V_,[_("div",L_,[(d(!0),v(ne,null,Ne(e.features,s=>(d(),v("div",{key:s.title,class:me(["item",[w(n)]])},[O(R_,{icon:s.icon,title:s.title,details:s.details},null,8,["icon","title","details"])],2))),128))])])])):ee("",!0)}});const $_=$(H_,[["__scopeId","data-v-2d93c1ee"]]),B_=S({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=ce();return(n,r)=>w(t).features?(d(),re($_,{key:0,class:"VPHomeFeatures",features:w(t).features},null,8,["features"])):ee("",!0)}}),D_={class:"VPHome"},F_=S({__name:"VPHome",setup(e){return(t,n)=>{const r=Ct("Content");return d(),v("div",D_,[Q(t.$slots,"home-hero-before",{},void 0,!0),O(N_),Q(t.$slots,"home-hero-after",{},void 0,!0),Q(t.$slots,"home-features-before",{},void 0,!0),O(B_),Q(t.$slots,"home-features-after",{},void 0,!0),O(r)])}}});const U_=$(F_,[["__scopeId","data-v-5e8e1e17"]]);var mi;const er=typeof window<"u",z_=e=>typeof e=="string",co=()=>{};er&&((mi=window==null?void 0:window.navigator)!=null&&mi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function j_(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function K_(e,t=!0,n=!0){let r=0,o,s=!0;const i=()=>{o&&(clearTimeout(o),o=void 0)};return l=>{const c=w(e),p=Date.now()-r;if(i(),c<=0)return r=Date.now(),l();p>c&&(n||!s)?(r=Date.now(),l()):t&&(o=setTimeout(()=>{r=Date.now(),s=!0,i(),l()},c)),!n&&!o&&(o=setTimeout(()=>s=!0,c)),s=!1}}function Xr(e){return ki()?(Si(e),!0):!1}function t0(e,t=200,n=!0,r=!0){return j_(K_(t,n,r),e)}function G_(e,t=!0){mt()?ts(e):t?e():Jt(e)}function $t(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const tr=er?window:void 0;er&&window.document;er&&window.navigator;er&&window.location;function hr(...e){let t,n,r,o;if(z_(e[0])?([n,r,o]=e,t=tr):[t,n,r,o]=e,!t)return co;let s=co;const i=Fe(()=>$t(t),l=>{s(),l&&(l.addEventListener(n,r,o),s=()=>{l.removeEventListener(n,r,o),s=co})},{immediate:!0,flush:"post"}),a=()=>{i(),s()};return Xr(a),a}function n0(e,t,n={}){const{window:r=tr,ignore:o,capture:s=!0,detectIframe:i=!1}=n;if(!r)return;const a=ue(!0);let l;const c=g=>{r.clearTimeout(l);const y=$t(e),P=g.composedPath();!y||y===g.target||P.includes(y)||!a.value||o&&o.length>0&&o.some(R=>{const z=$t(R);return z&&(g.target===z||P.includes(z))})||t(g)},p=[hr(r,"click",c,{passive:!0,capture:s}),hr(r,"pointerdown",g=>{const y=$t(e);a.value=!!y&&!g.composedPath().includes(y)},{passive:!0}),hr(r,"pointerup",g=>{if(g.button===0){const y=g.composedPath();g.composedPath=()=>y,l=r.setTimeout(()=>c(g),50)}},{passive:!0}),i&&hr(r,"blur",g=>{var y;const P=$t(e);((y=document.activeElement)==null?void 0:y.tagName)==="IFRAME"&&!(P!=null&&P.contains(document.activeElement))&&t(g)})].filter(Boolean);return()=>p.forEach(g=>g())}function hi(e,t={}){const{window:n=tr}=t,r=Boolean(n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=ue(!1),i=()=>{r&&(o||(o=n.matchMedia(e)),s.value=o.matches)};return G_(()=>{i(),o&&("addEventListener"in o?o.addEventListener("change",i):o.addListener(i),Xr(()=>{"removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i)}))}),s}const Io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo="__vueuse_ssr_handlers__";Io[Vo]=Io[Vo]||{};Io[Vo];var gi=Object.getOwnPropertySymbols,W_=Object.prototype.hasOwnProperty,q_=Object.prototype.propertyIsEnumerable,Y_=(e,t)=>{var n={};for(var r in e)W_.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&gi)for(var r of gi(e))t.indexOf(r)<0&&q_.call(e,r)&&(n[r]=e[r]);return n};function r0(e,t,n={}){const r=n,{window:o=tr}=r,s=Y_(r,["window"]);let i;const a=o&&"ResizeObserver"in o,l=()=>{i&&(i.disconnect(),i=void 0)},c=Fe(()=>$t(e),f=>{l(),a&&o&&f&&(i=new ResizeObserver(t),i.observe(f,s))},{immediate:!0,flush:"post"}),p=()=>{l(),c()};return Xr(p),{isSupported:a,stop:p}}var _i=Object.getOwnPropertySymbols,J_=Object.prototype.hasOwnProperty,X_=Object.prototype.propertyIsEnumerable,Q_=(e,t)=>{var n={};for(var r in e)J_.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&_i)for(var r of _i(e))t.indexOf(r)<0&&X_.call(e,r)&&(n[r]=e[r]);return n};function o0(e,t,n={}){const r=n,{window:o=tr}=r,s=Q_(r,["window"]);let i;const a=o&&"MutationObserver"in o,l=()=>{i&&(i.disconnect(),i=void 0)},c=Fe(()=>$t(e),f=>{l(),a&&o&&f&&(i=new MutationObserver(t),i.observe(f,s))},{immediate:!0}),p=()=>{l(),c()};return Xr(p),{isSupported:a,stop:p}}var vi;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(vi||(vi={}));function Z_(){const{hasSidebar:e}=ot(),t=hi("(min-width: 960px)"),n=hi("(min-width: 1280px)");return{isAsideEnabled:ve(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const e1=56;function t1(){const{page:e}=ce();return{hasOutline:ve(()=>e.value.headers.length>0)}}function n1(e){return bl(r1(e))}function r1(e){e=e.map(n=>Object.assign({},n));let t;for(const n of e)n.level===2?t=n:t&&n.level<=3&&(t.children||(t.children=[])).push(n);return e.filter(n=>n.level===2)}function bl(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?bl(t.children):void 0,hidden:t.hidden}))}function o1(e,t){const{isAsideEnabled:n}=Z_(),r=np(s,100);let o=null;We(()=>{requestAnimationFrame(s),window.addEventListener("scroll",r)}),_n(()=>{i(location.hash)}),ft(()=>{window.removeEventListener("scroll",r)});function s(){if(!n.value)return;const a=[].slice.call(e.value.querySelectorAll(".outline-link")),l=[].slice.call(document.querySelectorAll(".content .header-anchor")).filter(y=>a.some(P=>P.hash===y.hash&&y.offsetParent!==null)),c=window.scrollY,p=window.innerHeight,f=document.body.offsetHeight,g=c+p===f;if(l.length&&g){i(l[l.length-1].hash);return}for(let y=0;y<l.length;y++){const P=l[y],R=l[y+1],[z,C]=s1(y,P,R);if(z){history.replaceState(null,document.title,C||" "),i(C);return}}}function i(a){o&&o.classList.remove("active"),a!==null&&(o=e.value.querySelector(`a[href="${decodeURIComponent(a)}"]`));const l=o;l?(l.classList.add("active"),t.value.style.top=l.offsetTop+33+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function yi(e){return e.parentElement.offsetTop-e1-15}function s1(e,t,n){const r=window.scrollY;return e===0&&r===0?[!0,null]:r<yi(t)?[!1,null]:!n||r<yi(n)?[!0,t.hash]:[!1,null]}const i1=e=>(ze("data-v-0a3228a2"),e=e(),je(),e),a1={class:"content"},l1={class:"outline-title"},c1={"aria-labelledby":"doc-outline-aria-label"},u1=i1(()=>_("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),d1={class:"root"},p1=["href"],f1={key:0},m1=["href"],h1=S({__name:"VPDocAsideOutline",setup(e){const{page:t,frontmatter:n,theme:r}=ce(),{hasOutline:o}=t1(),s=ue(),i=ue();o1(s,i);const a=ve(()=>n1(t.value.headers));function l({target:c}){const p="#"+c.href.split("#")[1],f=document.querySelector(p);f==null||f.focus()}return(c,p)=>(d(),v("div",{class:me(["VPDocAsideOutline",{"has-outline":w(o)}]),ref_key:"container",ref:s},[_("div",a1,[_("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),_("div",l1,ie(w(r).outlineTitle||"On this page"),1),_("nav",c1,[u1,_("ul",d1,[(d(!0),v(ne,null,Ne(w(a),({text:f,link:g,children:y,hidden:P})=>_o((d(),v("li",null,[_("a",{class:"outline-link",href:g,onClick:l},ie(f),9,p1),y&&w(n).outline==="deep"?(d(),v("ul",f1,[(d(!0),v(ne,null,Ne(y,({text:R,link:z,hidden:C})=>_o((d(),v("li",null,[_("a",{class:"outline-link nested",href:z,onClick:l},ie(R),9,m1)],512)),[[Tr,!C]])),256))])):ee("",!0)],512)),[[Tr,!P]])),256))])])])],2))}});const g1=$(h1,[["__scopeId","data-v-0a3228a2"]]),_1={class:"VPDocAsideCarbonAds"},v1=S({__name:"VPDocAsideCarbonAds",setup(e){const t=()=>null;return(n,r)=>(d(),v("div",_1,[O(w(t))]))}}),y1=e=>(ze("data-v-72c2a845"),e=e(),je(),e),b1={class:"VPDocAside"},x1=y1(()=>_("div",{class:"spacer"},null,-1)),C1=S({__name:"VPDocAside",setup(e){const{page:t,theme:n}=ce();return(r,o)=>(d(),v("div",b1,[Q(r.$slots,"aside-top",{},void 0,!0),Q(r.$slots,"aside-outline-before",{},void 0,!0),w(t).headers.length?(d(),re(g1,{key:0})):ee("",!0),Q(r.$slots,"aside-outline-after",{},void 0,!0),x1,Q(r.$slots,"aside-ads-before",{},void 0,!0),w(n).carbonAds?(d(),re(v1,{key:1})):ee("",!0),Q(r.$slots,"aside-ads-after",{},void 0,!0),Q(r.$slots,"aside-bottom",{},void 0,!0)]))}});const w1=$(C1,[["__scopeId","data-v-72c2a845"]]);function E1(){const{theme:e,page:t}=ce();return ve(()=>{const{text:n="Edit this page",pattern:r}=e.value.editLink||{},{relativePath:o}=t.value;return{url:r.replace(/:path/g,o),text:n}})}function T1(){const{page:e,theme:t}=ce();return ve(()=>{const n=pl(t.value.sidebar,e.value.relativePath),r=rp(n),o=r.findIndex(s=>Zn(e.value.relativePath,s.link));return{prev:r[o-1],next:r[o+1]}})}const P1={},N1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},M1=_("path",{d:"M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"},null,-1),k1=_("path",{d:"M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"},null,-1),S1=[M1,k1];function A1(e,t){return d(),v("svg",N1,S1)}const O1=$(P1,[["render",A1]]),R1={class:"VPLastUpdated"},I1=["datatime"],V1=S({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n}=ce(),r=new Date(n.value.lastUpdated),o=r.toISOString(),s=ue("");return We(()=>{gn(()=>{s.value=r.toLocaleString(window.navigator.language)})}),(i,a)=>(d(),v("p",R1,[Ae(ie(w(t).lastUpdatedText??"Last updated")+": ",1),_("time",{datatime:w(o)},ie(s.value),9,I1)]))}});const L1=$(V1,[["__scopeId","data-v-5ff67119"]]),xl=e=>(ze("data-v-7f8655b6"),e=e(),je(),e),H1={class:"VPDocFooter"},$1={class:"edit-info"},B1={key:0,class:"edit-link"},D1={key:1,class:"last-updated"},F1={key:0,class:"prev-next"},U1={class:"pager"},z1=["href"],j1=xl(()=>_("span",{class:"desc"},"Previous page",-1)),K1={class:"title"},G1=["href"],W1=xl(()=>_("span",{class:"desc"},"Next page",-1)),q1={class:"title"},Y1=S({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:r}=ce(),o=E1(),s=T1(),i=ve(()=>n.value.lastUpdated&&r.value.lastUpdated!==!1);return(a,l)=>(d(),v("footer",H1,[_("div",$1,[w(t).editLink&&w(r).editLink!==!1?(d(),v("div",B1,[O(yn,{class:"edit-link-button",href:w(o).url,"no-icon":!0},{default:X(()=>[O(O1,{class:"edit-link-icon"}),Ae(" "+ie(w(o).text),1)]),_:1},8,["href"])])):ee("",!0),w(i)?(d(),v("div",D1,[O(L1)])):ee("",!0)]),w(s).prev||w(s).next?(d(),v("div",F1,[_("div",U1,[w(s).prev?(d(),v("a",{key:0,class:"pager-link prev",href:w(Oo)(w(s).prev.link)},[j1,_("span",K1,ie(w(s).prev.text),1)],8,z1)):ee("",!0)]),_("div",{class:me(["pager",{"has-prev":w(s).prev}])},[w(s).next?(d(),v("a",{key:0,class:"pager-link next",href:w(Oo)(w(s).next.link)},[W1,_("span",q1,ie(w(s).next.text),1)],8,G1)):ee("",!0)],2)])):ee("",!0)]))}});const J1=$(Y1,[["__scopeId","data-v-7f8655b6"]]),X1=e=>(ze("data-v-d8aba4c8"),e=e(),je(),e),Q1={class:"container"},Z1={class:"aside"},ev=X1(()=>_("div",{class:"aside-curtain"},null,-1)),tv={class:"aside-container"},nv={class:"aside-content"},rv={class:"content"},ov={class:"content-container"},sv={class:"main"},iv=S({__name:"VPDoc",setup(e){const{path:t}=vn(),{hasSidebar:n}=ot(),r=t.replace(/[./]+/g,"_").replace(/_html$/,"");return(o,s)=>{const i=Ct("Content");return d(),v("div",{class:me(["VPDoc",{"has-sidebar":w(n)}])},[_("div",Q1,[_("div",Z1,[ev,_("div",tv,[_("div",nv,[O(w1,null,{"aside-top":X(()=>[Q(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":X(()=>[Q(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":X(()=>[Q(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":X(()=>[Q(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":X(()=>[Q(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":X(()=>[Q(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])]),_("div",rv,[_("div",ov,[Q(o.$slots,"doc-before",{},void 0,!0),_("main",sv,[O(i,{class:me(["vp-doc",w(r)])},null,8,["class"])]),O(J1),Q(o.$slots,"doc-after",{},void 0,!0)])])])],2)}}});const av=$(iv,[["__scopeId","data-v-d8aba4c8"]]),lv=S({__name:"VPContent",setup(e){const t=vn(),{frontmatter:n}=ce(),{hasSidebar:r}=ot();return Xg(),(o,s)=>(d(),v("div",{class:me(["VPContent",{"has-sidebar":w(r),"is-home":w(n).layout==="home"}]),id:"VPContent"},[w(t).component===Ro?(d(),re(Ro,{key:0})):w(n).layout==="page"?(d(),re(d_,{key:1})):w(n).layout==="home"?(d(),re(U_,{key:2},{"home-hero-before":X(()=>[Q(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-after":X(()=>[Q(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":X(()=>[Q(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":X(()=>[Q(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):(d(),re(av,{key:3},{"doc-before":X(()=>[Q(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":X(()=>[Q(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":X(()=>[Q(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":X(()=>[Q(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":X(()=>[Q(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":X(()=>[Q(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":X(()=>[Q(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":X(()=>[Q(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}});const cv=$(lv,[["__scopeId","data-v-b97b5181"]]),uv={class:"container"},dv={class:"message"},pv={class:"copyright"},fv=S({__name:"VPFooter",setup(e){const{theme:t}=ce(),{hasSidebar:n}=ot();return(r,o)=>w(t).footer?(d(),v("footer",{key:0,class:me(["VPFooter",{"has-sidebar":w(n)}])},[_("div",uv,[_("p",dv,ie(w(t).footer.message),1),_("p",pv,ie(w(t).footer.copyright),1)])],2)):ee("",!0)}});const mv=$(fv,[["__scopeId","data-v-947b1f9a"]]),hv={class:"Layout"},gv=S({__name:"Layout",setup(e){const{isOpen:t,open:n,close:r}=ot();return op(t,r),Fr("close-sidebar",r),(o,s)=>(d(),v("div",hv,[Q(o.$slots,"layout-top",{},void 0,!0),O(ip),O(cp,{class:"backdrop",show:w(t),onClick:w(r)},null,8,["show","onClick"]),O(ag),O(Cg,{open:w(t),onOpenMenu:w(n)},null,8,["open","onOpenMenu"]),O(Jg,{open:w(t)},null,8,["open"]),O(cv,null,{"home-hero-before":X(()=>[Q(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-after":X(()=>[Q(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":X(()=>[Q(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":X(()=>[Q(o.$slots,"home-features-after",{},void 0,!0)]),"doc-before":X(()=>[Q(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":X(()=>[Q(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":X(()=>[Q(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":X(()=>[Q(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":X(()=>[Q(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":X(()=>[Q(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":X(()=>[Q(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":X(()=>[Q(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),O(mv),Q(o.$slots,"layout-bottom",{},void 0,!0)]))}});const _v=$(gv,[["__scopeId","data-v-2682923f"]]);const Cl={Layout:_v,NotFound:Ro};const{Layout:vv}=Cl,yv=S({async mounted(){const{default:e}=await bt(()=>import("./chunks/index.7895b845.js"),[]),t=r=>{r?e.use("dark"):e.use("light")};new MutationObserver(r=>{r.forEach(o=>{const s=o.target;t(s.classList.contains("dark"))})}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),t(document.documentElement.classList.contains("dark"))},render(){return Wt(vv)}});let wl={},El={};function bv(e){wl=e}function xv(e){El=e}function s0(){Cv(),wv()}function Cv(){const e=window;e._vue||(e._vue=wl)}function wv(){const e=window;e._app||(e._app=El)}const Ev=`import { camelize } from '@vue/shared';\r
import { capitalize } from '@vue/shared';\r
import { ComponentPropsOptions as ComponentPropsOptions_2 } from '@vue/runtime-core';\r
import { computed as computed_2 } from '@vue/reactivity';\r
import { ComputedGetter } from '@vue/reactivity';\r
import { ComputedRef } from '@vue/reactivity';\r
import { ComputedSetter } from '@vue/reactivity';\r
import { customRef } from '@vue/reactivity';\r
import { CustomRefFactory } from '@vue/reactivity';\r
import { DebuggerEvent } from '@vue/reactivity';\r
import { DebuggerEventExtraInfo } from '@vue/reactivity';\r
import { DebuggerOptions } from '@vue/reactivity';\r
import { DeepReadonly } from '@vue/reactivity';\r
import { effect } from '@vue/reactivity';\r
import { EffectScheduler } from '@vue/reactivity';\r
import { EffectScope } from '@vue/reactivity';\r
import { effectScope } from '@vue/reactivity';\r
import { getCurrentScope } from '@vue/reactivity';\r
import { IfAny } from '@vue/shared';\r
import { isProxy } from '@vue/reactivity';\r
import { isReactive } from '@vue/reactivity';\r
import { isReadonly } from '@vue/reactivity';\r
import { isRef } from '@vue/reactivity';\r
import { isShallow } from '@vue/reactivity';\r
import { LooseRequired } from '@vue/shared';\r
import { markRaw } from '@vue/reactivity';\r
import { normalizeClass } from '@vue/shared';\r
import { normalizeProps } from '@vue/shared';\r
import { normalizeStyle } from '@vue/shared';\r
import { onScopeDispose } from '@vue/reactivity';\r
import { proxyRefs } from '@vue/reactivity';\r
import { reactive } from '@vue/reactivity';\r
import { ReactiveEffect } from '@vue/reactivity';\r
import { ReactiveEffectOptions } from '@vue/reactivity';\r
import { ReactiveEffectRunner } from '@vue/reactivity';\r
import { ReactiveFlags } from '@vue/reactivity';\r
import { readonly } from '@vue/reactivity';\r
import { Ref } from '@vue/reactivity';\r
import { ref } from '@vue/reactivity';\r
import { ShallowReactive } from '@vue/reactivity';\r
import { shallowReactive } from '@vue/reactivity';\r
import { shallowReadonly } from '@vue/reactivity';\r
import { ShallowRef } from '@vue/reactivity';\r
import { shallowRef } from '@vue/reactivity';\r
import { ShallowUnwrapRef } from '@vue/reactivity';\r
import { ShapeFlags } from '@vue/shared';\r
import { SlotFlags } from '@vue/shared';\r
import { stop as stop_2 } from '@vue/reactivity';\r
import { toDisplayString } from '@vue/shared';\r
import { toHandlerKey } from '@vue/shared';\r
import { toRaw } from '@vue/reactivity';\r
import { ToRef } from '@vue/reactivity';\r
import { toRef } from '@vue/reactivity';\r
import { ToRefs } from '@vue/reactivity';\r
import { toRefs } from '@vue/reactivity';\r
import { TrackOpTypes } from '@vue/reactivity';\r
import { TriggerOpTypes } from '@vue/reactivity';\r
import { triggerRef } from '@vue/reactivity';\r
import { UnionToIntersection } from '@vue/shared';\r
import { unref } from '@vue/reactivity';\r
import { UnwrapNestedRefs } from '@vue/reactivity';\r
import { UnwrapRef } from '@vue/reactivity';\r
import { WritableComputedOptions } from '@vue/reactivity';\r
import { WritableComputedRef } from '@vue/reactivity';\r
\r
/**\r
 * Default allowed non-declared props on component in TSX\r
 */\r
export declare interface AllowedComponentProps {\r
    class?: unknown;\r
    style?: unknown;\r
}\r
\r
export declare interface App<HostElement = any> {\r
    version: string;\r
    config: AppConfig;\r
    use(plugin: Plugin_2, ...options: any[]): this;\r
    mixin(mixin: ComponentOptions): this;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): this;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): this;\r
    mount(rootContainer: HostElement | string, isHydrate?: boolean, isSVG?: boolean): ComponentPublicInstance;\r
    unmount(): void;\r
    provide<T>(key: InjectionKey<T> | string, value: T): this;\r
    _uid: number;\r
    _component: ConcreteComponent;\r
    _props: Data | null;\r
    _container: HostElement | null;\r
    _context: AppContext;\r
    _instance: ComponentInternalInstance | null;\r
    /**\r
     * v2 compat only\r
     */\r
    filter?(name: string): Function | undefined;\r
    filter?(name: string, filter: Function): this;\r
    /* Excluded from this release type: _createRoot */\r
}\r
\r
export declare interface AppConfig {\r
    readonly isNativeTag?: (tag: string) => boolean;\r
    performance: boolean;\r
    optionMergeStrategies: Record<string, OptionMergeFunction>;\r
    globalProperties: Record<string, any>;\r
    errorHandler?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => void;\r
    warnHandler?: (msg: string, instance: ComponentPublicInstance | null, trace: string) => void;\r
    /**\r
     * Options to pass to \`@vue/compiler-dom\`.\r
     * Only supported in runtime compiler build.\r
     */\r
    compilerOptions: RuntimeCompilerOptions;\r
    /**\r
     * @deprecated use config.compilerOptions.isCustomElement\r
     */\r
    isCustomElement?: (tag: string) => boolean;\r
    /**\r
     * Temporary config for opt-in to unwrap injected refs.\r
     * TODO deprecate in 3.3\r
     */\r
    unwrapInjectedRef?: boolean;\r
}\r
\r
export declare interface AppContext {\r
    app: App;\r
    config: AppConfig;\r
    mixins: ComponentOptions[];\r
    components: Record<string, Component>;\r
    directives: Record<string, Directive>;\r
    provides: Record<string | symbol, any>;\r
    /* Excluded from this release type: optionsCache */\r
    /* Excluded from this release type: propsCache */\r
    /* Excluded from this release type: emitsCache */\r
    /* Excluded from this release type: reload */\r
    /* Excluded from this release type: filters */\r
}\r
\r
declare interface AppRecord {\r
    id: number;\r
    app: App;\r
    version: string;\r
    types: Record<string, string | Symbol>;\r
}\r
\r
export declare type AsyncComponentLoader<T = any> = () => Promise<AsyncComponentResolveResult<T>>;\r
\r
export declare interface AsyncComponentOptions<T = any> {\r
    loader: AsyncComponentLoader<T>;\r
    loadingComponent?: Component;\r
    errorComponent?: Component;\r
    delay?: number;\r
    timeout?: number;\r
    suspensible?: boolean;\r
    onError?: (error: Error, retry: () => void, fail: () => void, attempts: number) => any;\r
}\r
\r
declare type AsyncComponentResolveResult<T = Component> = T | {\r
    default: T;\r
};\r
\r
export declare const BaseTransition: new () => {\r
    $props: BaseTransitionProps<any>;\r
};\r
\r
export declare interface BaseTransitionProps<HostElement = RendererElement> {\r
    mode?: 'in-out' | 'out-in' | 'default';\r
    appear?: boolean;\r
    persisted?: boolean;\r
    onBeforeEnter?: Hook<(el: HostElement) => void>;\r
    onEnter?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterEnter?: Hook<(el: HostElement) => void>;\r
    onEnterCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeLeave?: Hook<(el: HostElement) => void>;\r
    onLeave?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterLeave?: Hook<(el: HostElement) => void>;\r
    onLeaveCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeAppear?: Hook<(el: HostElement) => void>;\r
    onAppear?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterAppear?: Hook<(el: HostElement) => void>;\r
    onAppearCancelled?: Hook<(el: HostElement) => void>;\r
}\r
\r
declare const enum BooleanFlags {\r
    shouldCast = 0,\r
    shouldCastTrue = 1\r
}\r
\r
export declare function callWithAsyncErrorHandling(fn: Function | Function[], instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any[];\r
\r
export declare function callWithErrorHandling(fn: Function, instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any;\r
\r
export { camelize }\r
\r
export { capitalize }\r
\r
/**\r
 * Use this for features with the same syntax but with mutually exclusive\r
 * behavior in 2 vs 3. Only warn if compat is enabled.\r
 * e.g. render function\r
 */\r
declare function checkCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
declare interface ClassComponent {\r
    new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>;\r
    __vccOpts: ComponentOptions;\r
}\r
\r
export declare function cloneVNode<T, U>(vnode: VNode<T, U>, extraProps?: (Data & VNodeProps) | null, mergeRef?: boolean): VNode<T, U>;\r
\r
declare const Comment_2: unique symbol;\r
export { Comment_2 as Comment }\r
\r
declare type CompatConfig = Partial<Record<DeprecationTypes, boolean | 'suppress-warning'>> & {\r
    MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);\r
};\r
\r
/* Excluded from this release type: compatUtils */\r
\r
/**\r
 * @deprecated the default \`Vue\` export has been removed in Vue 3. The type for\r
 * the default export is provided only for migration purposes. Please use\r
 * named imports instead - e.g. \`import { createApp } from 'vue'\`.\r
 */\r
export declare type CompatVue = Pick<App, 'version' | 'component' | 'directive'> & {\r
    configureCompat: typeof configureCompat;\r
    new (options?: ComponentOptions): LegacyPublicInstance;\r
    version: string;\r
    config: AppConfig & LegacyConfig;\r
    nextTick: typeof nextTick;\r
    use(plugin: Plugin_2, ...options: any[]): CompatVue;\r
    mixin(mixin: ComponentOptions): CompatVue;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): CompatVue;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): CompatVue;\r
    compile(template: string): RenderFunction;\r
    /**\r
     * @deprecated Vue 3 no longer supports extending constructors.\r
     */\r
    extend: (options?: ComponentOptions) => CompatVue;\r
    /**\r
     * @deprecated Vue 3 no longer needs set() for adding new properties.\r
     */\r
    set(target: any, key: string | number | symbol, value: any): void;\r
    /**\r
     * @deprecated Vue 3 no longer needs delete() for property deletions.\r
     */\r
    delete(target: any, key: string | number | symbol): void;\r
    /**\r
     * @deprecated use \`reactive\` instead.\r
     */\r
    observable: typeof reactive;\r
    /**\r
     * @deprecated filters have been removed from Vue 3.\r
     */\r
    filter(name: string, arg?: any): null;\r
    /* Excluded from this release type: cid */\r
    /* Excluded from this release type: options */\r
    /* Excluded from this release type: util */\r
    /* Excluded from this release type: super */\r
};\r
\r
declare interface CompiledSlotDescriptor {\r
    name: string;\r
    fn: Slot;\r
}\r
\r
/**\r
 * A type used in public APIs where a component type is expected.\r
 * The constructor type is an artificial type returned by defineComponent().\r
 */\r
export declare type Component<Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ConcreteComponent<Props, RawBindings, D, C, M> | ComponentPublicInstanceConstructor<Props>;\r
\r
/**\r
 * Interface for declaring custom options.\r
 *\r
 * @example\r
 * \`\`\`ts\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomOptions {\r
 *     beforeRouteUpdate?(\r
 *       to: Route,\r
 *       from: Route,\r
 *       next: () => void\r
 *     ): void\r
 *   }\r
 * }\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomOptions {\r
}\r
\r
/**\r
 * Custom properties added to component instances in any way and can be accessed through \`this\`\r
 *\r
 * @example\r
 * Here is an example of adding a property \`$router\` to every component instance:\r
 * \`\`\`ts\r
 * import { createApp } from 'vue'\r
 * import { Router, createRouter } from 'vue-router'\r
 *\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomProperties {\r
 *     $router: Router\r
 *   }\r
 * }\r
 *\r
 * // effectively adding the router to every component instance\r
 * const app = createApp({})\r
 * const router = createRouter()\r
 * app.config.globalProperties.$router = router\r
 *\r
 * const vm = app.mount('#app')\r
 * // we can access the router from the instance\r
 * vm.$router.push('/')\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomProperties {\r
}\r
\r
/**\r
 * For extending allowed non-declared props on components in TSX\r
 */\r
export declare interface ComponentCustomProps {\r
}\r
\r
declare type ComponentInjectOptions = string[] | ObjectInjectOptions;\r
\r
/**\r
 * We expose a subset of properties on the internal instance as they are\r
 * useful for advanced external libraries and tools.\r
 */\r
export declare interface ComponentInternalInstance {\r
    uid: number;\r
    type: ConcreteComponent;\r
    parent: ComponentInternalInstance | null;\r
    root: ComponentInternalInstance;\r
    appContext: AppContext;\r
    /**\r
     * Vnode representing this component in its parent's vdom tree\r
     */\r
    vnode: VNode;\r
    /* Excluded from this release type: next */\r
    /**\r
     * Root vnode of this component's own vdom tree\r
     */\r
    subTree: VNode;\r
    /**\r
     * Render effect instance\r
     */\r
    effect: ReactiveEffect;\r
    /**\r
     * Bound effect runner to be passed to schedulers\r
     */\r
    update: SchedulerJob;\r
    /* Excluded from this release type: render */\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: provides */\r
    /* Excluded from this release type: scope */\r
    /* Excluded from this release type: accessCache */\r
    /* Excluded from this release type: renderCache */\r
    /* Excluded from this release type: components */\r
    /* Excluded from this release type: directives */\r
    /* Excluded from this release type: filters */\r
    /* Excluded from this release type: propsOptions */\r
    /* Excluded from this release type: emitsOptions */\r
    /* Excluded from this release type: inheritAttrs */\r
    /**\r
     * is custom element?\r
     */\r
    isCE?: boolean;\r
    /**\r
     * custom element specific HMR method\r
     */\r
    ceReload?: (newStyles?: string[]) => void;\r
    proxy: ComponentPublicInstance | null;\r
    exposed: Record<string, any> | null;\r
    exposeProxy: Record<string, any> | null;\r
    /* Excluded from this release type: withProxy */\r
    /* Excluded from this release type: ctx */\r
    data: Data;\r
    props: Data;\r
    attrs: Data;\r
    slots: InternalSlots;\r
    refs: Data;\r
    emit: EmitFn;\r
    /* Excluded from this release type: emitted */\r
    /* Excluded from this release type: propsDefaults */\r
    /* Excluded from this release type: setupState */\r
    /* Excluded from this release type: devtoolsRawSetupState */\r
    /* Excluded from this release type: setupContext */\r
    /* Excluded from this release type: suspense */\r
    /* Excluded from this release type: suspenseId */\r
    /* Excluded from this release type: asyncDep */\r
    /* Excluded from this release type: asyncResolved */\r
    isMounted: boolean;\r
    isUnmounted: boolean;\r
    isDeactivated: boolean;\r
    /* Excluded from this release type: bc */\r
    /* Excluded from this release type: c */\r
    /* Excluded from this release type: bm */\r
    /* Excluded from this release type: m */\r
    /* Excluded from this release type: bu */\r
    /* Excluded from this release type: u */\r
    /* Excluded from this release type: bum */\r
    /* Excluded from this release type: um */\r
    /* Excluded from this release type: rtc */\r
    /* Excluded from this release type: rtg */\r
    /* Excluded from this release type: a */\r
    /* Excluded from this release type: da */\r
    /* Excluded from this release type: ec */\r
    /* Excluded from this release type: sp */\r
    /**\r
     * For caching bound $forceUpdate on public proxy access\r
     */\r
    f?: () => void;\r
    /**\r
     * For caching bound $nextTick on public proxy access\r
     */\r
    n?: () => Promise<void>;\r
}\r
\r
declare interface ComponentInternalOptions {\r
    /* Excluded from this release type: __scopeId */\r
    /* Excluded from this release type: __cssModules */\r
    /* Excluded from this release type: __hmrId */\r
    /**\r
     * Compat build only, for bailing out of certain compatibility behavior\r
     */\r
    __isBuiltIn?: boolean;\r
    /**\r
     * This one should be exposed so that devtools can make use of it\r
     */\r
    __file?: string;\r
    /**\r
     * name inferred from filename\r
     */\r
    __name?: string;\r
}\r
\r
export declare type ComponentObjectPropsOptions<P = Data> = {\r
    [K in keyof P]: Prop<P[K]> | null;\r
};\r
\r
export declare type ComponentOptions<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = any, M extends MethodOptions = any, Mixin extends ComponentOptionsMixin = any, Extends extends ComponentOptionsMixin = any, E extends EmitsOptions = any> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E> & ThisType<CreateComponentPublicInstance<{}, RawBindings, D, C, M, Mixin, Extends, E, Readonly<Props>>>;\r
\r
export declare interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin, E extends EmitsOptions, EE extends string = string, Defaults = {}> extends LegacyOptions<Props, D, C, M, Mixin, Extends>, ComponentInternalOptions, ComponentCustomOptions {\r
    setup?: (this: void, props: Readonly<LooseRequired<Props & UnionToIntersection<ExtractOptionProp<Mixin>> & UnionToIntersection<ExtractOptionProp<Extends>>>>, ctx: SetupContext<E>) => Promise<RawBindings> | RawBindings | RenderFunction | void;\r
    name?: string;\r
    template?: string | object;\r
    render?: Function;\r
    components?: Record<string, Component>;\r
    directives?: Record<string, Directive>;\r
    inheritAttrs?: boolean;\r
    emits?: (E | EE[]) & ThisType<void>;\r
    expose?: string[];\r
    serverPrefetch?(): Promise<any>;\r
    compilerOptions?: RuntimeCompilerOptions;\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: __ssrInlineRender */\r
    /* Excluded from this release type: __asyncLoader */\r
    /* Excluded from this release type: __asyncResolved */\r
    call?: (this: unknown, ...args: unknown[]) => never;\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    __defaults?: Defaults;\r
}\r
\r
export declare type ComponentOptionsMixin = ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>;\r
\r
export declare type ComponentOptionsWithArrayProps<PropNames extends string = string, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<{\r
    [key in PropNames]?: any;\r
}> & EmitsToProps<E>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props: PropNames[];\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentOptionsWithObjectProps<PropsOptions = ComponentObjectPropsOptions, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<ExtractPropTypes<PropsOptions>> & EmitsToProps<E>, Defaults = ExtractDefaultPropTypes<PropsOptions>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & {\r
    props: PropsOptions & ThisType<void>;\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, Props, Defaults, false>>;\r
\r
export declare type ComponentOptionsWithoutProps<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, PE = Props & EmitsToProps<E>> = ComponentOptionsBase<PE, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props?: undefined;\r
} & ThisType<CreateComponentPublicInstance<PE, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentPropsOptions<P = Data> = ComponentObjectPropsOptions<P> | string[];\r
\r
export declare type ComponentProvideOptions = ObjectProvideOptions | Function;\r
\r
export declare type ComponentPublicInstance<P = {}, // props type extracted from props option\r
B = {}, // raw bindings returned from setup()\r
D = {}, // return from data()\r
C extends ComputedOptions = {}, M extends MethodOptions = {}, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, Options = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>> = {\r
    $: ComponentInternalInstance;\r
    $data: D;\r
    $props: MakeDefaultsOptional extends true ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults> : P & PublicProps;\r
    $attrs: Data;\r
    $refs: Data;\r
    $slots: Slots;\r
    $root: ComponentPublicInstance | null;\r
    $parent: ComponentPublicInstance | null;\r
    $emit: EmitFn<E>;\r
    $el: any;\r
    $options: Options & MergedComponentOptionsOverride;\r
    $forceUpdate: () => void;\r
    $nextTick: typeof nextTick;\r
    $watch(source: string | Function, cb: Function, options?: WatchOptions): WatchStopHandle;\r
} & P & ShallowUnwrapRef<B> & UnwrapNestedRefs<D> & ExtractComputedReturns<C> & M & ComponentCustomProperties;\r
\r
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>, Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): T;\r
};\r
\r
declare type ComponentWatchOptionItem = WatchOptionItem | WatchOptionItem[];\r
\r
declare type ComponentWatchOptions = Record<string, ComponentWatchOptionItem>;\r
\r
export declare const computed: typeof computed_2;\r
\r
export { ComputedGetter }\r
\r
export declare type ComputedOptions = Record<string, ComputedGetter<any> | WritableComputedOptions<any>>;\r
\r
export { ComputedRef }\r
\r
export { ComputedSetter }\r
\r
/**\r
 * Concrete component type matches its actual value: it's either an options\r
 * object, or a function. Use this where the code expects to work with actual\r
 * values, e.g. checking if its a function or not. This is mostly for internal\r
 * implementation code.\r
 */\r
export declare type ConcreteComponent<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ComponentOptions<Props, RawBindings, D, C, M> | FunctionalComponent<Props, any>;\r
\r
declare function configureCompat(config: CompatConfig): void;\r
\r
declare interface Constructor<P = any> {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): {\r
        $props: P;\r
    };\r
}\r
\r
export declare type CreateAppFunction<HostElement> = (rootComponent: Component, rootProps?: Data | null) => App<HostElement>;\r
\r
/**\r
 * Create a block root vnode. Takes the same exact arguments as \`createVNode\`.\r
 * A block root keeps track of dynamic nodes within the block in the\r
 * \`dynamicChildren\` array.\r
 *\r
 * @private\r
 */\r
export declare function createBlock(type: VNodeTypes | ClassComponent, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[]): VNode;\r
\r
/**\r
 * @private\r
 */\r
export declare function createCommentVNode(text?: string, asBlock?: boolean): VNode;\r
\r
declare function createCompatVue(createApp: CreateAppFunction<Element>, createSingletonApp: CreateAppFunction<Element>): CompatVue;\r
\r
declare function createComponentInstance(vnode: VNode, parent: ComponentInternalInstance | null, suspense: SuspenseBoundary | null): ComponentInternalInstance;\r
\r
export declare type CreateComponentPublicInstance<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>, PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>, PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>, PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>, PublicC extends ComputedOptions = UnwrapMixinsType<PublicMixin, 'C'> & EnsureNonVoid<C>, PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> & EnsureNonVoid<M>, PublicDefaults = UnwrapMixinsType<PublicMixin, 'Defaults'> & EnsureNonVoid<Defaults>> = ComponentPublicInstance<PublicP, PublicB, PublicD, PublicC, PublicM, E, PublicProps, PublicDefaults, MakeDefaultsOptional, ComponentOptionsBase<P, B, D, C, M, Mixin, Extends, E, string, Defaults>>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createElementBlock(type: string | typeof Fragment, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[], shapeFlag?: number): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createElementVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, shapeFlag?: number | ShapeFlags, isBlockNode?: boolean, needFullChildrenNormalization?: boolean): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createHydrationRenderer(options: RendererOptions<Node, Element>): HydrationRenderer;\r
\r
/* Excluded from this release type: createPropsRestProxy */\r
\r
declare function createRecord(id: string, initialDef: HMRComponent): boolean;\r
\r
/**\r
 * The createRenderer function accepts two generic arguments:\r
 * HostNode and HostElement, corresponding to Node and Element types in the\r
 * host environment. For example, for runtime-dom, HostNode would be the DOM\r
 * \`Node\` interface and HostElement would be the DOM \`Element\` interface.\r
 *\r
 * Custom renderers can pass in the platform specific types like this:\r
 *\r
 * \`\`\` js\r
 * const { render, createApp } = createRenderer<Node, Element>({\r
 *   patchProp,\r
 *   ...nodeOps\r
 * })\r
 * \`\`\`\r
 */\r
export declare function createRenderer<HostNode = RendererNode, HostElement = RendererElement>(options: RendererOptions<HostNode, HostElement>): Renderer<HostElement>;\r
\r
/**\r
 * Compiler runtime helper for creating dynamic slots object\r
 * @private\r
 */\r
export declare function createSlots(slots: Record<string, Slot>, dynamicSlots: (CompiledSlotDescriptor | CompiledSlotDescriptor[] | undefined)[]): Record<string, Slot>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createStaticVNode(content: string, numberOfNodes: number): VNode;\r
\r
declare function createSuspenseBoundary(vnode: VNode, parent: SuspenseBoundary | null, parentComponent: ComponentInternalInstance | null, container: RendererElement, hiddenContainer: RendererElement, anchor: RendererNode | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, isHydrating?: boolean): SuspenseBoundary;\r
\r
/**\r
 * @private\r
 */\r
export declare function createTextVNode(text?: string, flag?: number): VNode;\r
\r
export declare const createVNode: typeof _createVNode;\r
\r
declare function _createVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, isBlockNode?: boolean): VNode;\r
\r
export { customRef }\r
\r
export { CustomRefFactory }\r
\r
declare type Data = Record<string, unknown>;\r
\r
export { DebuggerEvent }\r
\r
export { DebuggerEventExtraInfo }\r
\r
declare type DebuggerHook = (e: DebuggerEvent) => void;\r
\r
export { DebuggerOptions }\r
\r
export { DeepReadonly }\r
\r
declare type DefaultFactory<T> = (props: Data) => T | null | undefined;\r
\r
declare type DefaultKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        type: BooleanConstructor;\r
        required: true;\r
    } ? never : K : never;\r
}[keyof T];\r
\r
export declare function defineAsyncComponent<T extends Component = {\r
    new (): ComponentPublicInstance;\r
}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T;\r
\r
export declare type DefineComponent<PropsOrPropOptions = {}, RawBindings = {}, D = {}, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, EE extends string = string, PP = PublicProps, Props = Readonly<PropsOrPropOptions extends ComponentPropsOptions ? ExtractPropTypes<PropsOrPropOptions> : PropsOrPropOptions> & ({} extends E ? {} : EmitsToProps<E>), Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>> = ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, PP & Props, Defaults, true> & Props> & ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & PP;\r
\r
export declare function defineComponent<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): DefineComponent<Props, RawBindings>;\r
\r
export declare function defineComponent<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Readonly<{\r
    [key in PropNames]?: any;\r
}>, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's emitted\r
 * events. The expected argument is the same as the component \`emits\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * const emit = defineEmits(['change', 'update'])\r
 * \`\`\`\r
 *\r
 * Example type-based declaration:\r
 * \`\`\`ts\r
 * const emit = defineEmits<{\r
 *   (event: 'change'): void\r
 *   (event: 'update', id: number): void\r
 * }>()\r
 *\r
 * emit('change')\r
 * emit('update', 1)\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineEmits<EE extends string = string>(emitOptions: EE[]): EmitFn<EE[]>;\r
\r
export declare function defineEmits<E extends EmitsOptions = EmitsOptions>(emitOptions: E): EmitFn<E>;\r
\r
export declare function defineEmits<TypeEmit>(): TypeEmit;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's exposed\r
 * instance properties when it is accessed by a parent component via template\r
 * refs.\r
 *\r
 * \`<script setup>\` components are closed by default - i.e. variables inside\r
 * the \`<script setup>\` scope is not exposed to parent unless explicitly exposed\r
 * via \`defineExpose\`.\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineExpose<Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed): void;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring component props. The\r
 * expected argument is the same as the component \`props\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * // using Array syntax\r
 * const props = defineProps(['foo', 'bar'])\r
 * // using Object syntax\r
 * const props = defineProps({\r
 *   foo: String,\r
 *   bar: {\r
 *     type: Number,\r
 *     required: true\r
 *   }\r
 * })\r
 * \`\`\`\r
 *\r
 * Equivalent type-based declaration:\r
 * \`\`\`ts\r
 * // will be compiled into equivalent runtime declarations\r
 * const props = defineProps<{\r
 *   foo?: string\r
 *   bar: number\r
 * }>()\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineProps<PropNames extends string = string>(props: PropNames[]): Readonly<{\r
    [key in PropNames]?: any;\r
}>;\r
\r
export declare function defineProps<PP extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(props: PP): Readonly<ExtractPropTypes<PP>>;\r
\r
export declare function defineProps<TypeProps>(): Readonly<TypeProps>;\r
\r
export declare const enum DeprecationTypes {\r
    GLOBAL_MOUNT = "GLOBAL_MOUNT",\r
    GLOBAL_MOUNT_CONTAINER = "GLOBAL_MOUNT_CONTAINER",\r
    GLOBAL_EXTEND = "GLOBAL_EXTEND",\r
    GLOBAL_PROTOTYPE = "GLOBAL_PROTOTYPE",\r
    GLOBAL_SET = "GLOBAL_SET",\r
    GLOBAL_DELETE = "GLOBAL_DELETE",\r
    GLOBAL_OBSERVABLE = "GLOBAL_OBSERVABLE",\r
    GLOBAL_PRIVATE_UTIL = "GLOBAL_PRIVATE_UTIL",\r
    CONFIG_SILENT = "CONFIG_SILENT",\r
    CONFIG_DEVTOOLS = "CONFIG_DEVTOOLS",\r
    CONFIG_KEY_CODES = "CONFIG_KEY_CODES",\r
    CONFIG_PRODUCTION_TIP = "CONFIG_PRODUCTION_TIP",\r
    CONFIG_IGNORED_ELEMENTS = "CONFIG_IGNORED_ELEMENTS",\r
    CONFIG_WHITESPACE = "CONFIG_WHITESPACE",\r
    CONFIG_OPTION_MERGE_STRATS = "CONFIG_OPTION_MERGE_STRATS",\r
    INSTANCE_SET = "INSTANCE_SET",\r
    INSTANCE_DELETE = "INSTANCE_DELETE",\r
    INSTANCE_DESTROY = "INSTANCE_DESTROY",\r
    INSTANCE_EVENT_EMITTER = "INSTANCE_EVENT_EMITTER",\r
    INSTANCE_EVENT_HOOKS = "INSTANCE_EVENT_HOOKS",\r
    INSTANCE_CHILDREN = "INSTANCE_CHILDREN",\r
    INSTANCE_LISTENERS = "INSTANCE_LISTENERS",\r
    INSTANCE_SCOPED_SLOTS = "INSTANCE_SCOPED_SLOTS",\r
    INSTANCE_ATTRS_CLASS_STYLE = "INSTANCE_ATTRS_CLASS_STYLE",\r
    OPTIONS_DATA_FN = "OPTIONS_DATA_FN",\r
    OPTIONS_DATA_MERGE = "OPTIONS_DATA_MERGE",\r
    OPTIONS_BEFORE_DESTROY = "OPTIONS_BEFORE_DESTROY",\r
    OPTIONS_DESTROYED = "OPTIONS_DESTROYED",\r
    WATCH_ARRAY = "WATCH_ARRAY",\r
    PROPS_DEFAULT_THIS = "PROPS_DEFAULT_THIS",\r
    V_ON_KEYCODE_MODIFIER = "V_ON_KEYCODE_MODIFIER",\r
    CUSTOM_DIR = "CUSTOM_DIR",\r
    ATTR_FALSE_VALUE = "ATTR_FALSE_VALUE",\r
    ATTR_ENUMERATED_COERCION = "ATTR_ENUMERATED_COERCION",\r
    TRANSITION_CLASSES = "TRANSITION_CLASSES",\r
    TRANSITION_GROUP_ROOT = "TRANSITION_GROUP_ROOT",\r
    COMPONENT_ASYNC = "COMPONENT_ASYNC",\r
    COMPONENT_FUNCTIONAL = "COMPONENT_FUNCTIONAL",\r
    COMPONENT_V_MODEL = "COMPONENT_V_MODEL",\r
    RENDER_FUNCTION = "RENDER_FUNCTION",\r
    FILTERS = "FILTERS",\r
    PRIVATE_APIS = "PRIVATE_APIS"\r
}\r
\r
export declare let devtools: DevtoolsHook;\r
\r
declare interface DevtoolsHook {\r
    enabled?: boolean;\r
    emit: (event: string, ...payload: any[]) => void;\r
    on: (event: string, handler: Function) => void;\r
    once: (event: string, handler: Function) => void;\r
    off: (event: string, handler: Function) => void;\r
    appRecords: AppRecord[];\r
}\r
\r
export declare type Directive<T = any, V = any> = ObjectDirective<T, V> | FunctionDirective<T, V>;\r
\r
export declare type DirectiveArguments = Array<[Directive] | [Directive, any] | [Directive, any, string] | [Directive, any, string, DirectiveModifiers]>;\r
\r
export declare interface DirectiveBinding<V = any> {\r
    instance: ComponentPublicInstance | null;\r
    value: V;\r
    oldValue: V | null;\r
    arg?: string;\r
    modifiers: DirectiveModifiers;\r
    dir: ObjectDirective<any, V>;\r
}\r
\r
export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;\r
\r
declare type DirectiveModifiers = Record<string, boolean>;\r
\r
export { effect }\r
\r
export { EffectScheduler }\r
\r
export { EffectScope }\r
\r
export { effectScope }\r
\r
declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{\r
    [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;\r
}[Event]>;\r
\r
export declare type EmitsOptions = ObjectEmitsOptions | string[];\r
\r
declare type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {\r
    [K in string & \`on\${Capitalize<T[number]>}\`]?: (...args: any[]) => any;\r
} : T extends ObjectEmitsOptions ? {\r
    [K in string & \`on\${Capitalize<string & keyof T>}\`]?: K extends \`on\${infer C}\` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;\r
} : {};\r
\r
declare type EnsureNonVoid<T> = T extends void ? {} : T;\r
\r
declare type ErrorCapturedHook<TError = unknown> = (err: TError, instance: ComponentPublicInstance | null, info: string) => boolean | void;\r
\r
export declare const enum ErrorCodes {\r
    SETUP_FUNCTION = 0,\r
    RENDER_FUNCTION = 1,\r
    WATCH_GETTER = 2,\r
    WATCH_CALLBACK = 3,\r
    WATCH_CLEANUP = 4,\r
    NATIVE_EVENT_HANDLER = 5,\r
    COMPONENT_EVENT_HANDLER = 6,\r
    VNODE_HOOK = 7,\r
    DIRECTIVE_HOOK = 8,\r
    TRANSITION_HOOK = 9,\r
    APP_ERROR_HANDLER = 10,\r
    APP_WARN_HANDLER = 11,\r
    FUNCTION_REF = 12,\r
    ASYNC_COMPONENT_LOADER = 13,\r
    SCHEDULER = 14\r
}\r
\r
declare type ErrorTypes = LifecycleHooks | ErrorCodes;\r
\r
declare type ExtractComputedReturns<T extends any> = {\r
    [key in keyof T]: T[key] extends {\r
        get: (...args: any[]) => infer TReturn;\r
    } ? TReturn : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never;\r
};\r
\r
export declare type ExtractDefaultPropTypes<O> = O extends object ? {\r
    [K in keyof Pick<O, DefaultKeys<O>>]: InferPropType<O[K]>;\r
} : {};\r
\r
declare type ExtractMixin<T> = {\r
    Mixin: MixinToOptionTypes<T>;\r
}[T extends ComponentOptionsMixin ? 'Mixin' : never];\r
\r
declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<infer P, // Props\r
any, // RawBindings\r
any, // D\r
any, // C\r
any, // M\r
any, // Mixin\r
any, // Extends\r
any> ? unknown extends P ? {} : P : {};\r
\r
export declare type ExtractPropTypes<O> = {\r
    [K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>;\r
} & {\r
    [K in keyof Pick<O, OptionalKeys<O>>]?: InferPropType<O[K]>;\r
};\r
\r
export declare const Fragment: {\r
    new (): {\r
        $props: VNodeProps;\r
    };\r
    __isFragment: true;\r
};\r
\r
export declare interface FunctionalComponent<P = {}, E extends EmitsOptions = {}> extends ComponentInternalOptions {\r
    (props: P, ctx: Omit<SetupContext<E>, 'expose'>): any;\r
    props?: ComponentPropsOptions<P>;\r
    emits?: E | (keyof E)[];\r
    inheritAttrs?: boolean;\r
    displayName?: string;\r
    compatConfig?: CompatConfig;\r
}\r
\r
export declare type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>;\r
\r
export declare const getCurrentInstance: () => ComponentInternalInstance | null;\r
\r
export { getCurrentScope }\r
\r
export declare function getTransitionRawChildren(children: VNode[], keepComment?: boolean, parentKey?: VNode['key']): VNode[];\r
\r
export declare function guardReactiveProps(props: (Data & VNodeProps) | null): (Data & VNodeProps) | null;\r
\r
export declare function h(type: string, children?: RawChildren): VNode;\r
\r
export declare function h(type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, props?: null, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Fragment, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Fragment, props?: RawProps | null, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Teleport, props: RawProps & TeleportProps, children: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, children?: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, props?: (RawProps & SuspenseProps) | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P, E extends EmitsOptions = {}>(type: FunctionalComponent<P, E>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Component, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent | string, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent<P> | string, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren): VNode;\r
\r
export declare function h(type: Component, props: null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P>(type: ComponentOptions<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Constructor, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: Constructor<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: DefineComponent, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: DefineComponent<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function handleError(err: unknown, instance: ComponentInternalInstance | null, type: ErrorTypes, throwInDev?: boolean): void;\r
\r
declare type HMRComponent = ComponentOptions | ClassComponent;\r
\r
export declare interface HMRRuntime {\r
    createRecord: typeof createRecord;\r
    rerender: typeof rerender;\r
    reload: typeof reload;\r
}\r
\r
declare type Hook<T = () => void> = T | T[];\r
\r
declare function hydrateSuspense(node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, hydrateNode: (node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
declare function hydrateTeleport(node: Node, vnode: TeleportVNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean, { o: { nextSibling, parentNode, querySelector } }: RendererInternals<Node, Element>, hydrateChildren: (node: Node | null, vnode: VNode, container: Element, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
export declare interface HydrationRenderer extends Renderer<Element | ShadowRoot> {\r
    hydrate: RootHydrateFunction;\r
}\r
\r
declare type InferDefault<P, T> = T extends null | number | string | boolean | symbol | Function ? T | ((props: P) => T) : (props: P) => T;\r
\r
declare type InferDefaults<T> = {\r
    [K in keyof T]?: InferDefault<T, NotUndefined<T[K]>>;\r
};\r
\r
declare type InferPropType<T> = [T] extends [null] ? any : [T] extends [{\r
    type: null | true;\r
}] ? any : [T] extends [ObjectConstructor | {\r
    type: ObjectConstructor;\r
}] ? Record<string, any> : [T] extends [BooleanConstructor | {\r
    type: BooleanConstructor;\r
}] ? boolean : [T] extends [DateConstructor | {\r
    type: DateConstructor;\r
}] ? Date : [T] extends [(infer U)[] | {\r
    type: (infer U)[];\r
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? IfAny<V, V, D> : V : T;\r
\r
export declare function initCustomFormatter(): void;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string): T | undefined;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T, treatDefaultAsFactory?: false): T;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T | (() => T), treatDefaultAsFactory: true): T;\r
\r
export declare interface InjectionKey<T> extends Symbol {\r
}\r
\r
/* Excluded from this release type: InternalRenderFunction */\r
\r
declare type InternalSlots = {\r
    [name: string]: Slot | undefined;\r
};\r
\r
declare type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true ? OptionTypesType<{}, {}, {}, {}, {}> : UnionToIntersection<ExtractMixin<T>>;\r
\r
declare function isCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, enableForBuiltIn?: boolean): boolean;\r
\r
declare type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin ? ComponentOptionsMixin extends T ? true : false : false;\r
\r
export declare function isMemoSame(cached: VNode, memo: any[]): boolean;\r
\r
export { isProxy }\r
\r
export { isReactive }\r
\r
export { isReadonly }\r
\r
export { isRef }\r
\r
export declare const isRuntimeOnly: () => boolean;\r
\r
export { isShallow }\r
\r
export declare function isVNode(value: any): value is VNode;\r
\r
export declare const KeepAlive: {\r
    new (): {\r
        $props: VNodeProps & KeepAliveProps;\r
    };\r
    __isKeepAlive: true;\r
};\r
\r
export declare interface KeepAliveProps {\r
    include?: MatchPattern;\r
    exclude?: MatchPattern;\r
    max?: number | string;\r
}\r
\r
export declare type LegacyConfig = {\r
    /**\r
     * @deprecated \`config.silent\` option has been removed\r
     */\r
    silent?: boolean;\r
    /**\r
     * @deprecated use false compile-time feature flag instead\r
     * https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags\r
     */\r
    devtools?: boolean;\r
    /**\r
     * @deprecated use \`config.isCustomElement\` instead\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-ignoredelements-is-now-config-iscustomelement\r
     */\r
    ignoredElements?: (string | RegExp)[];\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html\r
     */\r
    keyCodes?: Record<string, number | number[]>;\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed\r
     */\r
    productionTip?: boolean;\r
};\r
\r
declare interface LegacyOptions<Props, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin> {\r
    compatConfig?: CompatConfig;\r
    [key: string]: any;\r
    data?: (this: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>, vm: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>) => D;\r
    computed?: C;\r
    methods?: M;\r
    watch?: ComponentWatchOptions;\r
    provide?: ComponentProvideOptions;\r
    inject?: ComponentInjectOptions;\r
    filters?: Record<string, Function>;\r
    mixins?: Mixin[];\r
    extends?: Extends;\r
    beforeCreate?(): void;\r
    created?(): void;\r
    beforeMount?(): void;\r
    mounted?(): void;\r
    beforeUpdate?(): void;\r
    updated?(): void;\r
    activated?(): void;\r
    deactivated?(): void;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?(): void;\r
    beforeUnmount?(): void;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?(): void;\r
    unmounted?(): void;\r
    renderTracked?: DebuggerHook;\r
    renderTriggered?: DebuggerHook;\r
    errorCaptured?: ErrorCapturedHook;\r
    /**\r
     * runtime compile only\r
     * @deprecated use \`compilerOptions.delimiters\` instead.\r
     */\r
    delimiters?: [string, string];\r
    /**\r
     * #3468\r
     *\r
     * type-only, used to assist Mixin's type inference,\r
     * typescript will try to simplify the inferred \`Mixin\` type,\r
     * with the \`__differentiator\`, typescript won't be able to combine different mixins,\r
     * because the \`__differentiator\` will be different\r
     */\r
    __differentiator?: keyof D | keyof C | keyof M;\r
}\r
\r
declare type LegacyPublicInstance = ComponentPublicInstance & LegacyPublicProperties;\r
\r
declare interface LegacyPublicProperties {\r
    $set(target: object, key: string, value: any): void;\r
    $delete(target: object, key: string): void;\r
    $mount(el?: string | Element): this;\r
    $destroy(): void;\r
    $scopedSlots: Slots;\r
    $on(event: string | string[], fn: Function): this;\r
    $once(event: string, fn: Function): this;\r
    $off(event?: string | string[], fn?: Function): this;\r
    $children: LegacyPublicProperties[];\r
    $listeners: Record<string, Function | Function[]>;\r
}\r
\r
declare type LifecycleHook<TFn = Function> = TFn[] | null;\r
\r
declare const enum LifecycleHooks {\r
    BEFORE_CREATE = "bc",\r
    CREATED = "c",\r
    BEFORE_MOUNT = "bm",\r
    MOUNTED = "m",\r
    BEFORE_UPDATE = "bu",\r
    UPDATED = "u",\r
    BEFORE_UNMOUNT = "bum",\r
    UNMOUNTED = "um",\r
    DEACTIVATED = "da",\r
    ACTIVATED = "a",\r
    RENDER_TRIGGERED = "rtg",\r
    RENDER_TRACKED = "rtc",\r
    ERROR_CAPTURED = "ec",\r
    SERVER_PREFETCH = "sp"\r
}\r
\r
declare type MapSources<T, Immediate> = {\r
    [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : T[K] extends object ? Immediate extends true ? T[K] | undefined : T[K] : never;\r
};\r
\r
export { markRaw }\r
\r
declare type MatchPattern = string | RegExp | (string | RegExp)[];\r
\r
declare type MergedComponentOptions = ComponentOptions & MergedComponentOptionsOverride;\r
\r
declare type MergedComponentOptionsOverride = {\r
    beforeCreate?: MergedHook;\r
    created?: MergedHook;\r
    beforeMount?: MergedHook;\r
    mounted?: MergedHook;\r
    beforeUpdate?: MergedHook;\r
    updated?: MergedHook;\r
    activated?: MergedHook;\r
    deactivated?: MergedHook;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?: MergedHook;\r
    beforeUnmount?: MergedHook;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?: MergedHook;\r
    unmounted?: MergedHook;\r
    renderTracked?: MergedHook<DebuggerHook>;\r
    renderTriggered?: MergedHook<DebuggerHook>;\r
    errorCaptured?: MergedHook<ErrorCapturedHook>;\r
};\r
\r
/* Excluded from this release type: mergeDefaults */\r
\r
declare type MergedHook<T = () => void> = T | T[];\r
\r
export declare function mergeProps(...args: (Data & VNodeProps)[]): Data;\r
\r
export declare interface MethodOptions {\r
    [key: string]: Function;\r
}\r
\r
declare type MixinToOptionTypes<T> = T extends ComponentOptionsBase<infer P, infer B, infer D, infer C, infer M, infer Mixin, infer Extends, any, any, infer Defaults> ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}, Defaults & {}> & IntersectionMixin<Mixin> & IntersectionMixin<Extends> : never;\r
\r
declare type MountChildrenFn = (children: VNodeArrayChildren, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, start?: number) => void;\r
\r
declare type MountComponentFn = (initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
declare type MoveFn = (vnode: VNode, container: RendererElement, anchor: RendererNode | null, type: MoveType, parentSuspense?: SuspenseBoundary | null) => void;\r
\r
declare function moveTeleport(vnode: VNode, container: RendererElement, parentAnchor: RendererNode | null, { o: { insert }, m: move }: RendererInternals, moveType?: TeleportMoveTypes): void;\r
\r
declare const enum MoveType {\r
    ENTER = 0,\r
    LEAVE = 1,\r
    REORDER = 2\r
}\r
\r
declare type MultiWatchSources = (WatchSource<unknown> | object)[];\r
\r
declare type NextFn = (vnode: VNode) => RendererNode | null;\r
\r
export declare function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void>;\r
\r
export { normalizeClass }\r
\r
declare type NormalizedProp = null | (PropOptions & {\r
    [BooleanFlags.shouldCast]?: boolean;\r
    [BooleanFlags.shouldCastTrue]?: boolean;\r
});\r
\r
declare type NormalizedProps = Record<string, NormalizedProp>;\r
\r
declare type NormalizedPropsOptions = [NormalizedProps, string[]] | [];\r
\r
export { normalizeProps }\r
\r
export { normalizeStyle }\r
\r
declare function normalizeSuspenseChildren(vnode: VNode): void;\r
\r
declare function normalizeVNode(child: VNodeChild): VNode;\r
\r
declare type NotUndefined<T> = T extends undefined ? never : T;\r
\r
declare const NULL_DYNAMIC_COMPONENT: unique symbol;\r
\r
export declare interface ObjectDirective<T = any, V = any> {\r
    created?: DirectiveHook<T, null, V>;\r
    beforeMount?: DirectiveHook<T, null, V>;\r
    mounted?: DirectiveHook<T, null, V>;\r
    beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;\r
    updated?: DirectiveHook<T, VNode<any, T>, V>;\r
    beforeUnmount?: DirectiveHook<T, null, V>;\r
    unmounted?: DirectiveHook<T, null, V>;\r
    getSSRProps?: SSRDirectiveHook;\r
    deep?: boolean;\r
}\r
\r
export declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;\r
\r
declare type ObjectInjectOptions = Record<string | symbol, string | symbol | {\r
    from?: string | symbol;\r
    default?: unknown;\r
}>;\r
\r
declare type ObjectProvideOptions = Record<string | symbol, unknown>;\r
\r
declare type ObjectWatchOptionItem = {\r
    handler: WatchCallback | string;\r
} & WatchOptions;\r
\r
export declare function onActivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onBeforeMount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUpdate: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
declare type OnCleanup = (cleanupFn: () => void) => void;\r
\r
export declare function onDeactivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare function onErrorCaptured<TError = Error>(hook: ErrorCapturedHook<TError>, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onMounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTracked: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTriggered: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export { onScopeDispose }\r
\r
export declare const onServerPrefetch: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUnmounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUpdated: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
/**\r
 * Open a block.\r
 * This must be called before \`createBlock\`. It cannot be part of \`createBlock\`\r
 * because the children of the block are evaluated before \`createBlock\` itself\r
 * is called. The generated code typically looks like this:\r
 *\r
 * \`\`\`js\r
 * function render() {\r
 *   return (openBlock(),createBlock('div', null, [...]))\r
 * }\r
 * \`\`\`\r
 * disableTracking is true when creating a v-for fragment block, since a v-for\r
 * fragment always diffs its children.\r
 *\r
 * @private\r
 */\r
export declare function openBlock(disableTracking?: boolean): void;\r
\r
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;\r
\r
export declare type OptionMergeFunction = (to: unknown, from: unknown) => any;\r
\r
declare type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M' | 'Defaults';\r
\r
declare type OptionTypesType<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Defaults = {}> = {\r
    P: P;\r
    B: B;\r
    D: D;\r
    C: C;\r
    M: M;\r
    Defaults: Defaults;\r
};\r
\r
declare type PatchBlockChildrenFn = (oldChildren: VNode[], newChildren: VNode[], fallbackContainer: RendererElement, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null) => void;\r
\r
declare type PatchChildrenFn = (n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean) => void;\r
\r
declare type PatchFn = (n1: VNode | null, // null means this is a mount\r
n2: VNode, container: RendererElement, anchor?: RendererNode | null, parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, isSVG?: boolean, slotScopeIds?: string[] | null, optimized?: boolean) => void;\r
\r
declare type Plugin_2 = (PluginInstallFunction & {\r
    install?: PluginInstallFunction;\r
}) | {\r
    install: PluginInstallFunction;\r
};\r
export { Plugin_2 as Plugin }\r
\r
declare type PluginInstallFunction = (app: App, ...options: any[]) => any;\r
\r
/**\r
 * Technically we no longer need this after 3.0.8 but we need to keep the same\r
 * API for backwards compat w/ code generated by compilers.\r
 * @private\r
 */\r
export declare function popScopeId(): void;\r
\r
export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;\r
\r
declare type PropConstructor<T = any> = {\r
    new (...args: any[]): T & {};\r
} | {\r
    (): T;\r
} | PropMethod<T>;\r
\r
declare type PropMethod<T, TConstructor = any> = [T] extends [\r
((...args: any) => any) | undefined\r
] ? {\r
    new (): TConstructor;\r
    (): T;\r
    readonly prototype: TConstructor;\r
} : never;\r
\r
declare interface PropOptions<T = any, D = T> {\r
    type?: PropType<T> | true | null;\r
    required?: boolean;\r
    default?: D | DefaultFactory<D> | null | undefined | object;\r
    validator?(value: unknown): boolean;\r
}\r
\r
declare type PropsWithDefaults<Base, Defaults> = Base & {\r
    [K in keyof Defaults]: K extends keyof Base ? NotUndefined<Base[K]> : never;\r
};\r
\r
export declare type PropType<T> = PropConstructor<T> | PropConstructor<T>[];\r
\r
export declare function provide<T>(key: InjectionKey<T> | string | number, value: T): void;\r
\r
export { proxyRefs }\r
\r
declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;\r
\r
/**\r
 * Set scope id when creating hoisted vnodes.\r
 * @private compiler helper\r
 */\r
export declare function pushScopeId(id: string | null): void;\r
\r
export declare function queuePostFlushCb(cb: SchedulerJobs): void;\r
\r
declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);\r
\r
declare type RawProps = VNodeProps & {\r
    __v_isVNode?: never;\r
    [Symbol.iterator]?: never;\r
} & Record<string, any>;\r
\r
declare type RawSlots = {\r
    [name: string]: unknown;\r
    $stable?: boolean;\r
    /* Excluded from this release type: _ctx */\r
    /* Excluded from this release type: _ */\r
};\r
\r
export { reactive }\r
\r
export { ReactiveEffect }\r
\r
export { ReactiveEffectOptions }\r
\r
export { ReactiveEffectRunner }\r
\r
export { ReactiveFlags }\r
\r
export { readonly }\r
\r
export { Ref }\r
\r
export { ref }\r
\r
/**\r
 * For runtime-dom to register the compiler.\r
 * Note the exported method uses any to avoid d.ts relying on the compiler types.\r
 */\r
export declare function registerRuntimeCompiler(_compile: any): void;\r
\r
declare function reload(id: string, newComp: HMRComponent): void;\r
\r
declare type RemoveFn = (vnode: VNode) => void;\r
\r
declare function renderComponentRoot(instance: ComponentInternalInstance): VNode;\r
\r
export declare interface Renderer<HostElement = RendererElement> {\r
    render: RootRenderFunction<HostElement>;\r
    createApp: CreateAppFunction<HostElement>;\r
}\r
\r
export declare interface RendererElement extends RendererNode {\r
}\r
\r
declare interface RendererInternals<HostNode = RendererNode, HostElement = RendererElement> {\r
    p: PatchFn;\r
    um: UnmountFn;\r
    r: RemoveFn;\r
    m: MoveFn;\r
    mt: MountComponentFn;\r
    mc: MountChildrenFn;\r
    pc: PatchChildrenFn;\r
    pbc: PatchBlockChildrenFn;\r
    n: NextFn;\r
    o: RendererOptions<HostNode, HostElement>;\r
}\r
\r
export declare interface RendererNode {\r
    [key: string]: any;\r
}\r
\r
export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {\r
    patchProp(el: HostElement, key: string, prevValue: any, nextValue: any, isSVG?: boolean, prevChildren?: VNode<HostNode, HostElement>[], parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, unmountChildren?: UnmountChildrenFn): void;\r
    insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;\r
    remove(el: HostNode): void;\r
    createElement(type: string, isSVG?: boolean, isCustomizedBuiltIn?: string, vnodeProps?: (VNodeProps & {\r
        [key: string]: any;\r
    }) | null): HostElement;\r
    createText(text: string): HostNode;\r
    createComment(text: string): HostNode;\r
    setText(node: HostNode, text: string): void;\r
    setElementText(node: HostElement, text: string): void;\r
    parentNode(node: HostNode): HostElement | null;\r
    nextSibling(node: HostNode): HostNode | null;\r
    querySelector?(selector: string): HostElement | null;\r
    setScopeId?(el: HostElement, id: string): void;\r
    cloneNode?(node: HostNode): HostNode;\r
    insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean, start?: HostNode | null, end?: HostNode | null): [HostNode, HostNode];\r
}\r
\r
export declare type RenderFunction = () => VNodeChild;\r
\r
/**\r
 * v-for string\r
 * @private\r
 */\r
export declare function renderList(source: string, renderItem: (value: string, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for number\r
 */\r
export declare function renderList(source: number, renderItem: (value: number, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for array\r
 */\r
export declare function renderList<T>(source: T[], renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for iterable\r
 */\r
export declare function renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for object\r
 */\r
export declare function renderList<T>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * Compiler runtime helper for rendering \`<slot/>\`\r
 * @private\r
 */\r
export declare function renderSlot(slots: Slots, name: string, props?: Data, fallback?: () => VNodeArrayChildren, noSlotted?: boolean): VNode;\r
\r
declare type RequiredKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        required: true;\r
    } | {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        default: undefined | (() => undefined);\r
    } ? never : K : never;\r
}[keyof T];\r
\r
declare function rerender(id: string, newRender?: Function): void;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveComponent(name: string, maybeSelfReference?: boolean): ConcreteComponent | string;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDirective(name: string): Directive | undefined;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDynamicComponent(component: unknown): VNodeTypes;\r
\r
/* Excluded from this release type: resolveFilter */\r
\r
/* Excluded from this release type: resolveFilter_2 */\r
\r
export declare function resolveTransitionHooks(vnode: VNode, props: BaseTransitionProps<any>, state: TransitionState, instance: ComponentInternalInstance): TransitionHooks;\r
\r
export declare type RootHydrateFunction = (vnode: VNode<Node, Element>, container: (Element | ShadowRoot) & {\r
    _vnode?: VNode;\r
}) => void;\r
\r
export declare type RootRenderFunction<HostElement = RendererElement> = (vnode: VNode | null, container: HostElement, isSVG?: boolean) => void;\r
\r
/**\r
 * Subset of compiler options that makes sense for the runtime.\r
 */\r
export declare interface RuntimeCompilerOptions {\r
    isCustomElement?: (tag: string) => boolean;\r
    whitespace?: 'preserve' | 'condense';\r
    comments?: boolean;\r
    delimiters?: [string, string];\r
}\r
\r
declare interface SchedulerJob extends Function {\r
    id?: number;\r
    active?: boolean;\r
    computed?: boolean;\r
    /**\r
     * Indicates whether the effect is allowed to recursively trigger itself\r
     * when managed by the scheduler.\r
     *\r
     * By default, a job cannot trigger itself because some built-in method calls,\r
     * e.g. Array.prototype.push actually performs reads as well (#1740) which\r
     * can lead to confusing infinite loops.\r
     * The allowed cases are component update functions and watch callbacks.\r
     * Component update functions may update child component props, which in turn\r
     * trigger flush: "pre" watch callbacks that mutates state that the parent\r
     * relies on (#1801). Watch callbacks doesn't track its dependencies so if it\r
     * triggers itself again, it's likely intentional and it is the user's\r
     * responsibility to perform recursive state mutation that eventually\r
     * stabilizes (#1727).\r
     */\r
    allowRecurse?: boolean;\r
    /**\r
     * Attached by renderer.ts when setting up a component's render effect\r
     * Used to obtain component information when reporting max recursive updates.\r
     * dev only.\r
     */\r
    ownerInstance?: ComponentInternalInstance;\r
}\r
\r
declare type SchedulerJobs = SchedulerJob | SchedulerJob[];\r
\r
/**\r
 * Block tracking sometimes needs to be disabled, for example during the\r
 * creation of a tree that needs to be cached by v-once. The compiler generates\r
 * code like this:\r
 *\r
 * \`\`\` js\r
 * _cache[1] || (\r
 *   setBlockTracking(-1),\r
 *   _cache[1] = createVNode(...),\r
 *   setBlockTracking(1),\r
 *   _cache[1]\r
 * )\r
 * \`\`\`\r
 *\r
 * @private\r
 */\r
export declare function setBlockTracking(value: number): void;\r
\r
/**\r
 * Note: rendering calls maybe nested. The function returns the parent rendering\r
 * instance if present, which should be restored after the render is done:\r
 *\r
 * \`\`\`js\r
 * const prev = setCurrentRenderingInstance(i)\r
 * // ...render\r
 * setCurrentRenderingInstance(prev)\r
 * \`\`\`\r
 */\r
declare function setCurrentRenderingInstance(instance: ComponentInternalInstance | null): ComponentInternalInstance | null;\r
\r
export declare function setDevtoolsHook(hook: DevtoolsHook, target: any): void;\r
\r
export declare function setTransitionHooks(vnode: VNode, hooks: TransitionHooks): void;\r
\r
declare function setupComponent(instance: ComponentInternalInstance, isSSR?: boolean): Promise<void> | undefined;\r
\r
export declare interface SetupContext<E = EmitsOptions> {\r
    attrs: Data;\r
    slots: Slots;\r
    emit: EmitFn<E>;\r
    expose: (exposed?: Record<string, any>) => void;\r
}\r
\r
declare type SetupRenderEffectFn = (instance: ComponentInternalInstance, initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
export { ShallowReactive }\r
\r
export { shallowReactive }\r
\r
export { shallowReadonly }\r
\r
export { ShallowRef }\r
\r
export { shallowRef }\r
\r
export { ShallowUnwrapRef }\r
\r
export declare type Slot = (...args: any[]) => VNode[];\r
\r
export declare type Slots = Readonly<InternalSlots>;\r
\r
/**\r
 * Use this for features where legacy usage is still possible, but will likely\r
 * lead to runtime error if compat is disabled. (warn in all cases)\r
 */\r
declare function softAssertCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
export declare const ssrContextKey: unique symbol;\r
\r
declare type SSRDirectiveHook = (binding: DirectiveBinding, vnode: VNode) => Data | undefined;\r
\r
/* Excluded from this release type: ssrUtils */\r
\r
export declare const Static: unique symbol;\r
\r
export { stop_2 as stop }\r
\r
export declare const Suspense: {\r
    new (): {\r
        $props: VNodeProps & SuspenseProps;\r
    };\r
    __isSuspense: true;\r
};\r
\r
export declare interface SuspenseBoundary {\r
    vnode: VNode<RendererNode, RendererElement, SuspenseProps>;\r
    parent: SuspenseBoundary | null;\r
    parentComponent: ComponentInternalInstance | null;\r
    isSVG: boolean;\r
    container: RendererElement;\r
    hiddenContainer: RendererElement;\r
    anchor: RendererNode | null;\r
    activeBranch: VNode | null;\r
    pendingBranch: VNode | null;\r
    deps: number;\r
    pendingId: number;\r
    timeout: number;\r
    isInFallback: boolean;\r
    isHydrating: boolean;\r
    isUnmounted: boolean;\r
    effects: Function[];\r
    resolve(force?: boolean): void;\r
    fallback(fallbackVNode: VNode): void;\r
    move(container: RendererElement, anchor: RendererNode | null, type: MoveType): void;\r
    next(): RendererNode | null;\r
    registerDep(instance: ComponentInternalInstance, setupRenderEffect: SetupRenderEffectFn): void;\r
    unmount(parentSuspense: SuspenseBoundary | null, doRemove?: boolean): void;\r
}\r
\r
declare const SuspenseImpl: {\r
    name: string;\r
    __isSuspense: boolean;\r
    process(n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals): void;\r
    hydrate: typeof hydrateSuspense;\r
    create: typeof createSuspenseBoundary;\r
    normalize: typeof normalizeSuspenseChildren;\r
};\r
\r
export declare interface SuspenseProps {\r
    onResolve?: () => void;\r
    onPending?: () => void;\r
    onFallback?: () => void;\r
    timeout?: string | number;\r
}\r
\r
export declare const Teleport: {\r
    new (): {\r
        $props: VNodeProps & TeleportProps;\r
    };\r
    __isTeleport: true;\r
};\r
\r
declare const TeleportImpl: {\r
    __isTeleport: boolean;\r
    process(n1: TeleportVNode | null, n2: TeleportVNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, internals: RendererInternals): void;\r
    remove(vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean, { um: unmount, o: { remove: hostRemove } }: RendererInternals, doRemove: Boolean): void;\r
    move: typeof moveTeleport;\r
    hydrate: typeof hydrateTeleport;\r
};\r
\r
declare const enum TeleportMoveTypes {\r
    TARGET_CHANGE = 0,\r
    TOGGLE = 1,\r
    REORDER = 2\r
}\r
\r
export declare interface TeleportProps {\r
    to: string | RendererElement | null | undefined;\r
    disabled?: boolean;\r
}\r
\r
declare type TeleportVNode = VNode<RendererNode, RendererElement, TeleportProps>;\r
\r
declare const Text_2: unique symbol;\r
export { Text_2 as Text }\r
\r
export { toDisplayString }\r
\r
export { toHandlerKey }\r
\r
/**\r
 * For prefixing keys in v-on="obj" with "on"\r
 * @private\r
 */\r
export declare function toHandlers(obj: Record<string, any>): Record<string, any>;\r
\r
export { toRaw }\r
\r
export { ToRef }\r
\r
export { toRef }\r
\r
export { ToRefs }\r
\r
export { toRefs }\r
\r
export { TrackOpTypes }\r
\r
/**\r
 * Internal API for registering an arguments transform for createVNode\r
 * used for creating stubs in the test-utils\r
 * It is *internal* but needs to be exposed for test-utils to pick up proper\r
 * typings\r
 */\r
export declare function transformVNodeArgs(transformer?: typeof vnodeArgsTransformer): void;\r
\r
export declare interface TransitionHooks<HostElement extends RendererElement = RendererElement> {\r
    mode: BaseTransitionProps['mode'];\r
    persisted: boolean;\r
    beforeEnter(el: HostElement): void;\r
    enter(el: HostElement): void;\r
    leave(el: HostElement, remove: () => void): void;\r
    clone(vnode: VNode): TransitionHooks<HostElement>;\r
    afterLeave?(): void;\r
    delayLeave?(el: HostElement, earlyRemove: () => void, delayedLeave: () => void): void;\r
    delayedLeave?(): void;\r
}\r
\r
export declare interface TransitionState {\r
    isMounted: boolean;\r
    isLeaving: boolean;\r
    isUnmounting: boolean;\r
    leavingVNodes: Map<any, Record<string, VNode>>;\r
}\r
\r
export { TriggerOpTypes }\r
\r
export { triggerRef }\r
\r
declare type UnmountChildrenFn = (children: VNode[], parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean, start?: number) => void;\r
\r
declare type UnmountFn = (vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean) => void;\r
\r
export { unref }\r
\r
declare type UnwrapMixinsType<T, Type extends OptionTypesKeys> = T extends OptionTypesType ? T[Type] : never;\r
\r
export { UnwrapNestedRefs }\r
\r
export { UnwrapRef }\r
\r
export declare function useAttrs(): SetupContext['attrs'];\r
\r
export declare function useSlots(): SetupContext['slots'];\r
\r
export declare const useSSRContext: <T = Record<string, any>>() => T | undefined;\r
\r
export declare function useTransitionState(): TransitionState;\r
\r
export declare const version: string;\r
\r
export declare interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = {\r
    [key: string]: any;\r
}> {\r
    /* Excluded from this release type: __v_isVNode */\r
    /* Excluded from this release type: __v_skip */\r
    type: VNodeTypes;\r
    props: (VNodeProps & ExtraProps) | null;\r
    key: string | number | symbol | null;\r
    ref: VNodeNormalizedRef | null;\r
    /**\r
     * SFC only. This is assigned on vnode creation using currentScopeId\r
     * which is set alongside currentRenderingInstance.\r
     */\r
    scopeId: string | null;\r
    /* Excluded from this release type: slotScopeIds */\r
    children: VNodeNormalizedChildren;\r
    component: ComponentInternalInstance | null;\r
    dirs: DirectiveBinding[] | null;\r
    transition: TransitionHooks<HostElement> | null;\r
    el: HostNode | null;\r
    anchor: HostNode | null;\r
    target: HostElement | null;\r
    targetAnchor: HostNode | null;\r
    /* Excluded from this release type: staticCount */\r
    suspense: SuspenseBoundary | null;\r
    /* Excluded from this release type: ssContent */\r
    /* Excluded from this release type: ssFallback */\r
    shapeFlag: number;\r
    patchFlag: number;\r
    /* Excluded from this release type: dynamicProps */\r
    /* Excluded from this release type: dynamicChildren */\r
    appContext: AppContext | null;\r
    /* Excluded from this release type: memo */\r
    /* Excluded from this release type: isCompatRoot */\r
    /* Excluded from this release type: ce */\r
}\r
\r
declare let vnodeArgsTransformer: ((args: Parameters<typeof _createVNode>, instance: ComponentInternalInstance | null) => Parameters<typeof _createVNode>) | undefined;\r
\r
export declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;\r
\r
export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;\r
\r
declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;\r
\r
declare type VNodeMountHook = (vnode: VNode) => void;\r
\r
export declare type VNodeNormalizedChildren = string | VNodeArrayChildren | RawSlots | null;\r
\r
declare type VNodeNormalizedRef = VNodeNormalizedRefAtom | VNodeNormalizedRefAtom[];\r
\r
declare type VNodeNormalizedRefAtom = {\r
    i: ComponentInternalInstance;\r
    r: VNodeRef;\r
    k?: string;\r
    f?: boolean;\r
};\r
\r
export declare type VNodeProps = {\r
    key?: string | number | symbol;\r
    ref?: VNodeRef;\r
    ref_for?: boolean;\r
    ref_key?: string;\r
    onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeMounted?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];\r
};\r
\r
export declare type VNodeRef = string | Ref | ((ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void);\r
\r
export declare type VNodeTypes = string | VNode | Component | typeof Text_2 | typeof Static | typeof Comment_2 | typeof Fragment | typeof TeleportImpl | typeof SuspenseImpl;\r
\r
declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;\r
\r
export declare function warn(msg: string, ...args: any[]): void;\r
\r
declare function warnDeprecation(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): void;\r
\r
export declare function watch<T extends MultiWatchSources, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends Readonly<MultiWatchSources>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV, onCleanup: OnCleanup) => any;\r
\r
export declare type WatchEffect = (onCleanup: OnCleanup) => void;\r
\r
export declare function watchEffect(effect: WatchEffect, options?: WatchOptionsBase): WatchStopHandle;\r
\r
declare type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem;\r
\r
export declare interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {\r
    immediate?: Immediate;\r
    deep?: boolean;\r
}\r
\r
export declare interface WatchOptionsBase extends DebuggerOptions {\r
    flush?: 'pre' | 'post' | 'sync';\r
}\r
\r
export declare function watchPostEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);\r
\r
export declare type WatchStopHandle = () => void;\r
\r
export declare function watchSyncEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
/* Excluded from this release type: withAsyncContext */\r
\r
/**\r
 * Wrap a slot function to memoize current rendering instance\r
 * @private compiler helper\r
 */\r
export declare function withCtx(fn: Function, ctx?: ComponentInternalInstance | null, isNonScopedSlot?: boolean): Function;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for providing props default values when\r
 * using type-based \`defineProps\` declaration.\r
 *\r
 * Example usage:\r
 * \`\`\`ts\r
 * withDefaults(defineProps<{\r
 *   size?: number\r
 *   labels?: string[]\r
 * }>(), {\r
 *   size: 3,\r
 *   labels: () => ['default label']\r
 * })\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the output\r
 * and should **not** be actually called at runtime.\r
 */\r
export declare function withDefaults<Props, Defaults extends InferDefaults<Props>>(props: Props, defaults: Defaults): PropsWithDefaults<Props, Defaults>;\r
\r
/**\r
 * Adds directives to a VNode.\r
 */\r
export declare function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;\r
\r
export declare function withMemo(memo: any[], render: () => VNode<any, any>, cache: any[], index: number): VNode<any, any, {\r
    [key: string]: any;\r
}>;\r
\r
/**\r
 * Only for backwards compat\r
 * @private\r
 */\r
export declare const withScopeId: (_id: string) => typeof withCtx;\r
\r
export { WritableComputedOptions }\r
\r
export { WritableComputedRef }\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeCoreBailTypes:
      | VNode
      | {
          // directly bailing on ComponentPublicInstance results in recursion
          // so we use this as a bail hint
          $: ComponentInternalInstance
        }
  }
}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.
type _defineProps = typeof defineProps
type _defineEmits = typeof defineEmits
type _defineExpose = typeof defineExpose
type _withDefaults = typeof withDefaults

declare global {
  const defineProps: _defineProps
  const defineEmits: _defineEmits
  const defineExpose: _defineExpose
  const withDefaults: _withDefaults
}
`,Tv=`import { BaseTransitionProps } from '@vue/runtime-core';\r
import { ComponentInternalInstance } from '@vue/runtime-core';\r
import { ComponentOptionsMixin } from '@vue/runtime-core';\r
import { ComponentOptionsWithArrayProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithObjectProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithoutProps } from '@vue/runtime-core';\r
import { ComponentPropsOptions } from '@vue/runtime-core';\r
import { ComponentPublicInstance } from '@vue/runtime-core';\r
import { ComputedOptions } from '@vue/runtime-core';\r
import { ConcreteComponent } from '@vue/runtime-core';\r
import { CreateAppFunction } from '@vue/runtime-core';\r
import { EmitsOptions } from '@vue/runtime-core';\r
import { ExtractPropTypes } from '@vue/runtime-core';\r
import { FunctionalComponent } from '@vue/runtime-core';\r
import { MethodOptions } from '@vue/runtime-core';\r
import { ObjectDirective } from '@vue/runtime-core';\r
import { RenderFunction } from '@vue/runtime-core';\r
import { RootHydrateFunction } from '@vue/runtime-core';\r
import { RootRenderFunction } from '@vue/runtime-core';\r
import { SetupContext } from '@vue/runtime-core';\r
\r
declare const ANIMATION = "animation";\r
\r
declare type AssignerFn = (value: any) => void;\r
\r
declare const BaseClass: {\r
    new (): HTMLElement;\r
    prototype: HTMLElement;\r
};\r
\r
export declare const createApp: CreateAppFunction<Element>;\r
\r
export declare const createSSRApp: CreateAppFunction<Element>;\r
\r
export declare function defineCustomElement<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<{\r
    [K in PropNames]: any;\r
}>;\r
\r
export declare function defineCustomElement<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<ExtractPropTypes<PropsOptions>>;\r
\r
export declare function defineCustomElement(options: {\r
    new (...args: any[]): ComponentPublicInstance;\r
}): VueElementConstructor;\r
\r
export declare const defineSSRCustomElement: typeof defineCustomElement;\r
\r
export declare const hydrate: RootHydrateFunction;\r
\r
/* Excluded from this release type: initDirectivesForSSR */\r
\r
declare type InnerComponentDef = ConcreteComponent & {\r
    styles?: string[];\r
};\r
\r
declare type ModelDirective<T> = ObjectDirective<T & {\r
    _assign: AssignerFn;\r
}>;\r
\r
export declare const render: RootRenderFunction<Element | ShadowRoot>;\r
\r
declare const TRANSITION = "transition";\r
\r
export declare const Transition: FunctionalComponent<TransitionProps>;\r
\r
export declare const TransitionGroup: new () => {\r
    $props: TransitionGroupProps;\r
};\r
\r
export declare type TransitionGroupProps = Omit<TransitionProps, 'mode'> & {\r
    tag?: string;\r
    moveClass?: string;\r
};\r
\r
export declare interface TransitionProps extends BaseTransitionProps<Element> {\r
    name?: string;\r
    type?: typeof TRANSITION | typeof ANIMATION;\r
    css?: boolean;\r
    duration?: number | {\r
        enter: number;\r
        leave: number;\r
    };\r
    enterFromClass?: string;\r
    enterActiveClass?: string;\r
    enterToClass?: string;\r
    appearFromClass?: string;\r
    appearActiveClass?: string;\r
    appearToClass?: string;\r
    leaveFromClass?: string;\r
    leaveActiveClass?: string;\r
    leaveToClass?: string;\r
}\r
\r
export declare function useCssModule(name?: string): Record<string, string>;\r
\r
/**\r
 * Runtime helper for SFC's CSS variable injection feature.\r
 * @private\r
 */\r
export declare function useCssVars(getter: (ctx: any) => Record<string, string>): void;\r
\r
export declare const vModelCheckbox: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelDynamic: ObjectDirective<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;\r
\r
export declare const vModelRadio: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelSelect: ModelDirective<HTMLSelectElement>;\r
\r
export declare const vModelText: ModelDirective<HTMLInputElement | HTMLTextAreaElement>;\r
\r
export declare const vShow: ObjectDirective<VShowElement>;\r
\r
declare interface VShowElement extends HTMLElement {\r
    _vod: string;\r
}\r
\r
export declare class VueElement extends BaseClass {\r
    private _def;\r
    private _props;\r
    /* Excluded from this release type: _instance */\r
    private _connected;\r
    private _resolved;\r
    private _numberProps;\r
    private _styles?;\r
    constructor(_def: InnerComponentDef, _props?: Record<string, any>, hydrate?: RootHydrateFunction);\r
    connectedCallback(): void;\r
    disconnectedCallback(): void;\r
    /**\r
     * resolve inner component definition (handle possible async component)\r
     */\r
    private _resolveDef;\r
    protected _setAttr(key: string): void;\r
    /* Excluded from this release type: _getProp */\r
    /* Excluded from this release type: _setProp */\r
    private _update;\r
    private _createVNode;\r
    private _applyStyles;\r
}\r
\r
export declare type VueElementConstructor<P = {}> = {\r
    new (initialProps?: Record<string, any>): VueElement & P;\r
};\r
\r
/**\r
 * @private\r
 */\r
export declare const withKeys: (fn: Function, modifiers: string[]) => (event: KeyboardEvent) => any;\r
\r
/**\r
 * @private\r
 */\r
export declare const withModifiers: (fn: Function, modifiers: string[]) => (event: Event, ...args: unknown[]) => any;\r
\r
\r
export * from "@vue/runtime-core";\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

// This code is based on react definition in DefinitelyTyped published under the MIT license.
//      Repository: https://github.com/DefinitelyTyped/DefinitelyTyped
//      Path in the repository: types/react/index.d.ts
//
// Copyrights of original definition are:
//      AssureSign <http://www.assuresign.com>
//      Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//      Benoit Benezech <https://github.com/bbenezech>
//      Patricio Zavolinsky <https://github.com/pzavolinsky>
//      Digiguru <https://github.com/digiguru>
//      Eric Anderson <https://github.com/ericanderson>
//      Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>

import { VNode } from '@vue/runtime-core'
import * as CSS from 'csstype'

export interface CSSProperties
  extends CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: \`--\${string}\`]: string | number | undefined
}

type Booleanish = boolean | 'true' | 'false'
type Numberish = number | string

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Booleanish
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: Booleanish | 'mixed'
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: Numberish
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Numberish
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Numberish
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Booleanish
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Booleanish
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Booleanish
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: Booleanish | 'grammar' | 'spelling'
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: Numberish
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical'
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: Numberish
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: Booleanish | 'mixed'
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Booleanish
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text'
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: Numberish
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Numberish
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Numberish
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Numberish
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Numberish
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Numberish
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Numberish
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string
}

// Vue's style normalization supports nested arrays
export type StyleValue = string | CSSProperties | Array<StyleValue>

export interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  class?: any
  style?: StyleValue

  // Standard HTML Attributes
  accesskey?: string
  contenteditable?: Booleanish | 'inherit'
  contextmenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: Booleanish
  id?: string
  lang?: string
  placeholder?: string
  spellcheck?: Booleanish
  tabindex?: Numberish
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radiogroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autocapitalize?: string
  autocorrect?: string
  autosave?: string
  color?: string
  itemprop?: string
  itemscope?: Booleanish
  itemtype?: string
  itemid?: string
  itemref?: string
  results?: Numberish
  security?: string
  unselectable?: 'on' | 'off'

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}

export interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any
  href?: string
  hreflang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerpolicy?: string
}

export interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string
  coords?: string
  download?: any
  href?: string
  hreflang?: string
  media?: string
  rel?: string
  shape?: string
  target?: string
}

export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string
  target?: string
}

export interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  name?: string
  type?: 'submit' | 'reset' | 'button'
  value?: string | string[] | number
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  width?: Numberish
}

export interface ColHTMLAttributes extends HTMLAttributes {
  span?: Numberish
  width?: Numberish
}

export interface ColgroupHTMLAttributes extends HTMLAttributes {
  span?: Numberish
}

export interface DataHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface DialogHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  src?: string
  type?: string
  width?: Numberish
}

export interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  form?: string
  name?: string
}

export interface FormHTMLAttributes extends HTMLAttributes {
  acceptcharset?: string
  action?: string
  autocomplete?: string
  enctype?: string
  method?: string
  name?: string
  novalidate?: Booleanish
  target?: string
}

export interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string
}

export interface IframeHTMLAttributes extends HTMLAttributes {
  allow?: string
  allowfullscreen?: Booleanish
  allowtransparency?: Booleanish
  frameborder?: Numberish
  height?: Numberish
  marginheight?: Numberish
  marginwidth?: Numberish
  name?: string
  referrerpolicy?: string
  sandbox?: string
  scrolling?: string
  seamless?: Booleanish
  src?: string
  srcdoc?: string
  width?: Numberish
}

export interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  decoding?: 'async' | 'auto' | 'sync'
  height?: Numberish
  sizes?: string
  src?: string
  srcset?: string
  usemap?: string
  width?: Numberish
}

export interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string
  alt?: string
  autocomplete?: string
  autofocus?: Booleanish
  capture?: boolean | 'user' | 'environment' // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
  checked?: Booleanish | any[] | Set<any> // for IDE v-model multi-checkbox support
  crossorigin?: string
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  height?: Numberish
  indeterminate?: boolean
  list?: string
  max?: Numberish
  maxlength?: Numberish
  min?: Numberish
  minlength?: Numberish
  multiple?: Booleanish
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: Booleanish
  required?: Booleanish
  size?: Numberish
  src?: string
  step?: Numberish
  type?: string
  value?: any // we support :value to be bound to anything w/ v-model
  width?: Numberish
}

export interface KeygenHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  challenge?: string
  disabled?: Booleanish
  form?: string
  keytype?: string
  keyparams?: string
  name?: string
}

export interface LabelHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
}

export interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface LinkHTMLAttributes extends HTMLAttributes {
  as?: string
  crossorigin?: string
  href?: string
  hreflang?: string
  integrity?: string
  media?: string
  rel?: string
  sizes?: string
  type?: string
}

export interface MapHTMLAttributes extends HTMLAttributes {
  name?: string
}

export interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string
}

export interface MediaHTMLAttributes extends HTMLAttributes {
  autoplay?: Booleanish
  controls?: Booleanish
  controlslist?: string
  crossorigin?: string
  loop?: Booleanish
  mediagroup?: string
  muted?: Booleanish
  playsinline?: Booleanish
  preload?: string
  src?: string
}

export interface MetaHTMLAttributes extends HTMLAttributes {
  charset?: string
  content?: string
  httpequiv?: string
  name?: string
}

export interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string
  high?: Numberish
  low?: Numberish
  max?: Numberish
  min?: Numberish
  optimum?: Numberish
  value?: string | string[] | number
}

export interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ObjectHTMLAttributes extends HTMLAttributes {
  classid?: string
  data?: string
  form?: string
  height?: Numberish
  name?: string
  type?: string
  usemap?: string
  width?: Numberish
  wmode?: string
}

export interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: Booleanish
  start?: Numberish
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

export interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
}

export interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
  selected?: Booleanish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface OutputHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
  name?: string
}

export interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string
  value?: string | string[] | number
}

export interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: Numberish
  value?: string | string[] | number
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: Booleanish
  charset?: string
  crossorigin?: string
  defer?: Booleanish
  integrity?: string
  nomodule?: Booleanish
  nonce?: string
  src?: string
  type?: string
}

export interface SelectHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  multiple?: Booleanish
  name?: string
  required?: Booleanish
  size?: Numberish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface SourceHTMLAttributes extends HTMLAttributes {
  media?: string
  sizes?: string
  src?: string
  srcset?: string
  type?: string
}

export interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string
  nonce?: string
  scoped?: Booleanish
  type?: string
}

export interface TableHTMLAttributes extends HTMLAttributes {
  cellpadding?: Numberish
  cellspacing?: Numberish
  summary?: string
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  cols?: Numberish
  dirname?: string
  disabled?: Booleanish
  form?: string
  maxlength?: Numberish
  minlength?: Numberish
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: Booleanish
  rows?: Numberish
  value?: string | string[] | number
  wrap?: string
}

export interface TdHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

export interface ThHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
}

export interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string
}

export interface TrackHTMLAttributes extends HTMLAttributes {
  default?: Booleanish
  kind?: string
  label?: string
  src?: string
  srclang?: string
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: Numberish
  playsinline?: Booleanish
  poster?: string
  width?: Numberish
  disablePictureInPicture?: Booleanish
}

export interface WebViewHTMLAttributes extends HTMLAttributes {
  allowfullscreen?: Booleanish
  allowpopups?: Booleanish
  autoFocus?: Booleanish
  autosize?: Booleanish
  blinkfeatures?: string
  disableblinkfeatures?: string
  disableguestresize?: Booleanish
  disablewebsecurity?: Booleanish
  guestinstance?: string
  httpreferrer?: string
  nodeintegration?: Booleanish
  partition?: string
  plugins?: Booleanish
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}

export interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  /**
   * SVG Styling Attributes
   * @see https://www.w3.org/TR/SVG/styling.html#ElementSpecificStyling
   */
  class?: any
  style?: string | CSSProperties

  color?: string
  height?: Numberish
  id?: string
  lang?: string
  max?: Numberish
  media?: string
  method?: string
  min?: Numberish
  name?: string
  target?: string
  type?: string
  width?: Numberish

  // Other HTML properties supported by SVG elements in browsers
  role?: string
  tabindex?: Numberish

  // SVG Specific attributes
  'accent-height'?: Numberish
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'
  allowReorder?: 'no' | 'yes'
  alphabetic?: Numberish
  amplitude?: Numberish
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  ascent?: Numberish
  attributeName?: string
  attributeType?: string
  autoReverse?: Numberish
  azimuth?: Numberish
  baseFrequency?: Numberish
  'baseline-shift'?: Numberish
  baseProfile?: Numberish
  bbox?: Numberish
  begin?: Numberish
  bias?: Numberish
  by?: Numberish
  calcMode?: Numberish
  'cap-height'?: Numberish
  clip?: Numberish
  'clip-path'?: string
  clipPathUnits?: Numberish
  'clip-rule'?: Numberish
  'color-interpolation'?: Numberish
  'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
  'color-profile'?: Numberish
  'color-rendering'?: Numberish
  contentScriptType?: Numberish
  contentStyleType?: Numberish
  cursor?: Numberish
  cx?: Numberish
  cy?: Numberish
  d?: string
  decelerate?: Numberish
  descent?: Numberish
  diffuseConstant?: Numberish
  direction?: Numberish
  display?: Numberish
  divisor?: Numberish
  'dominant-baseline'?: Numberish
  dur?: Numberish
  dx?: Numberish
  dy?: Numberish
  edgeMode?: Numberish
  elevation?: Numberish
  'enable-background'?: Numberish
  end?: Numberish
  exponent?: Numberish
  externalResourcesRequired?: Numberish
  fill?: string
  'fill-opacity'?: Numberish
  'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
  filter?: string
  filterRes?: Numberish
  filterUnits?: Numberish
  'flood-color'?: Numberish
  'flood-opacity'?: Numberish
  focusable?: Numberish
  'font-family'?: string
  'font-size'?: Numberish
  'font-size-adjust'?: Numberish
  'font-stretch'?: Numberish
  'font-style'?: Numberish
  'font-variant'?: Numberish
  'font-weight'?: Numberish
  format?: Numberish
  from?: Numberish
  fx?: Numberish
  fy?: Numberish
  g1?: Numberish
  g2?: Numberish
  'glyph-name'?: Numberish
  'glyph-orientation-horizontal'?: Numberish
  'glyph-orientation-vertical'?: Numberish
  glyphRef?: Numberish
  gradientTransform?: string
  gradientUnits?: string
  hanging?: Numberish
  'horiz-adv-x'?: Numberish
  'horiz-origin-x'?: Numberish
  href?: string
  ideographic?: Numberish
  'image-rendering'?: Numberish
  in2?: Numberish
  in?: string
  intercept?: Numberish
  k1?: Numberish
  k2?: Numberish
  k3?: Numberish
  k4?: Numberish
  k?: Numberish
  kernelMatrix?: Numberish
  kernelUnitLength?: Numberish
  kerning?: Numberish
  keyPoints?: Numberish
  keySplines?: Numberish
  keyTimes?: Numberish
  lengthAdjust?: Numberish
  'letter-spacing'?: Numberish
  'lighting-color'?: Numberish
  limitingConeAngle?: Numberish
  local?: Numberish
  'marker-end'?: string
  markerHeight?: Numberish
  'marker-mid'?: string
  'marker-start'?: string
  markerUnits?: Numberish
  markerWidth?: Numberish
  mask?: string
  maskContentUnits?: Numberish
  maskUnits?: Numberish
  mathematical?: Numberish
  mode?: Numberish
  numOctaves?: Numberish
  offset?: Numberish
  opacity?: Numberish
  operator?: Numberish
  order?: Numberish
  orient?: Numberish
  orientation?: Numberish
  origin?: Numberish
  overflow?: Numberish
  'overline-position'?: Numberish
  'overline-thickness'?: Numberish
  'paint-order'?: Numberish
  'panose-1'?: Numberish
  pathLength?: Numberish
  patternContentUnits?: string
  patternTransform?: Numberish
  patternUnits?: string
  'pointer-events'?: Numberish
  points?: string
  pointsAtX?: Numberish
  pointsAtY?: Numberish
  pointsAtZ?: Numberish
  preserveAlpha?: Numberish
  preserveAspectRatio?: string
  primitiveUnits?: Numberish
  r?: Numberish
  radius?: Numberish
  refX?: Numberish
  refY?: Numberish
  renderingIntent?: Numberish
  repeatCount?: Numberish
  repeatDur?: Numberish
  requiredExtensions?: Numberish
  requiredFeatures?: Numberish
  restart?: Numberish
  result?: string
  rotate?: Numberish
  rx?: Numberish
  ry?: Numberish
  scale?: Numberish
  seed?: Numberish
  'shape-rendering'?: Numberish
  slope?: Numberish
  spacing?: Numberish
  specularConstant?: Numberish
  specularExponent?: Numberish
  speed?: Numberish
  spreadMethod?: string
  startOffset?: Numberish
  stdDeviation?: Numberish
  stemh?: Numberish
  stemv?: Numberish
  stitchTiles?: Numberish
  'stop-color'?: string
  'stop-opacity'?: Numberish
  'strikethrough-position'?: Numberish
  'strikethrough-thickness'?: Numberish
  string?: Numberish
  stroke?: string
  'stroke-dasharray'?: Numberish
  'stroke-dashoffset'?: Numberish
  'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-miterlimit'?: Numberish
  'stroke-opacity'?: Numberish
  'stroke-width'?: Numberish
  surfaceScale?: Numberish
  systemLanguage?: Numberish
  tableValues?: Numberish
  targetX?: Numberish
  targetY?: Numberish
  'text-anchor'?: string
  'text-decoration'?: Numberish
  textLength?: Numberish
  'text-rendering'?: Numberish
  to?: Numberish
  transform?: string
  u1?: Numberish
  u2?: Numberish
  'underline-position'?: Numberish
  'underline-thickness'?: Numberish
  unicode?: Numberish
  'unicode-bidi'?: Numberish
  'unicode-range'?: Numberish
  'unitsPer-em'?: Numberish
  'v-alphabetic'?: Numberish
  values?: string
  'vector-effect'?: Numberish
  version?: string
  'vert-adv-y'?: Numberish
  'vert-origin-x'?: Numberish
  'vert-origin-y'?: Numberish
  'v-hanging'?: Numberish
  'v-ideographic'?: Numberish
  viewBox?: string
  viewTarget?: Numberish
  visibility?: Numberish
  'v-mathematical'?: Numberish
  widths?: Numberish
  'word-spacing'?: Numberish
  'writing-mode'?: Numberish
  x1?: Numberish
  x2?: Numberish
  x?: Numberish
  xChannelSelector?: string
  'x-height'?: Numberish
  xlinkActuate?: string
  xlinkArcrole?: string
  xlinkHref?: string
  xlinkRole?: string
  xlinkShow?: string
  xlinkTitle?: string
  xlinkType?: string
  xmlns?: string
  y1?: Numberish
  y2?: Numberish
  y?: Numberish
  yChannelSelector?: string
  z?: Numberish
  zoomAndPan?: string
}

interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes
  abbr: HTMLAttributes
  address: HTMLAttributes
  area: AreaHTMLAttributes
  article: HTMLAttributes
  aside: HTMLAttributes
  audio: AudioHTMLAttributes
  b: HTMLAttributes
  base: BaseHTMLAttributes
  bdi: HTMLAttributes
  bdo: HTMLAttributes
  blockquote: BlockquoteHTMLAttributes
  body: HTMLAttributes
  br: HTMLAttributes
  button: ButtonHTMLAttributes
  canvas: CanvasHTMLAttributes
  caption: HTMLAttributes
  cite: HTMLAttributes
  code: HTMLAttributes
  col: ColHTMLAttributes
  colgroup: ColgroupHTMLAttributes
  data: DataHTMLAttributes
  datalist: HTMLAttributes
  dd: HTMLAttributes
  del: DelHTMLAttributes
  details: DetailsHTMLAttributes
  dfn: HTMLAttributes
  dialog: DialogHTMLAttributes
  div: HTMLAttributes
  dl: HTMLAttributes
  dt: HTMLAttributes
  em: HTMLAttributes
  embed: EmbedHTMLAttributes
  fieldset: FieldsetHTMLAttributes
  figcaption: HTMLAttributes
  figure: HTMLAttributes
  footer: HTMLAttributes
  form: FormHTMLAttributes
  h1: HTMLAttributes
  h2: HTMLAttributes
  h3: HTMLAttributes
  h4: HTMLAttributes
  h5: HTMLAttributes
  h6: HTMLAttributes
  head: HTMLAttributes
  header: HTMLAttributes
  hgroup: HTMLAttributes
  hr: HTMLAttributes
  html: HtmlHTMLAttributes
  i: HTMLAttributes
  iframe: IframeHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  ins: InsHTMLAttributes
  kbd: HTMLAttributes
  keygen: KeygenHTMLAttributes
  label: LabelHTMLAttributes
  legend: HTMLAttributes
  li: LiHTMLAttributes
  link: LinkHTMLAttributes
  main: HTMLAttributes
  map: MapHTMLAttributes
  mark: HTMLAttributes
  menu: MenuHTMLAttributes
  meta: MetaHTMLAttributes
  meter: MeterHTMLAttributes
  nav: HTMLAttributes
  noindex: HTMLAttributes
  noscript: HTMLAttributes
  object: ObjectHTMLAttributes
  ol: OlHTMLAttributes
  optgroup: OptgroupHTMLAttributes
  option: OptionHTMLAttributes
  output: OutputHTMLAttributes
  p: HTMLAttributes
  param: ParamHTMLAttributes
  picture: HTMLAttributes
  pre: HTMLAttributes
  progress: ProgressHTMLAttributes
  q: QuoteHTMLAttributes
  rp: HTMLAttributes
  rt: HTMLAttributes
  ruby: HTMLAttributes
  s: HTMLAttributes
  samp: HTMLAttributes
  script: ScriptHTMLAttributes
  section: HTMLAttributes
  select: SelectHTMLAttributes
  small: HTMLAttributes
  source: SourceHTMLAttributes
  span: HTMLAttributes
  strong: HTMLAttributes
  style: StyleHTMLAttributes
  sub: HTMLAttributes
  summary: HTMLAttributes
  sup: HTMLAttributes
  table: TableHTMLAttributes
  template: HTMLAttributes
  tbody: HTMLAttributes
  td: TdHTMLAttributes
  textarea: TextareaHTMLAttributes
  tfoot: HTMLAttributes
  th: ThHTMLAttributes
  thead: HTMLAttributes
  time: TimeHTMLAttributes
  title: HTMLAttributes
  tr: HTMLAttributes
  track: TrackHTMLAttributes
  u: HTMLAttributes
  ul: HTMLAttributes
  var: HTMLAttributes
  video: VideoHTMLAttributes
  wbr: HTMLAttributes
  webview: WebViewHTMLAttributes

  // SVG
  svg: SVGAttributes

  animate: SVGAttributes
  animateMotion: SVGAttributes
  animateTransform: SVGAttributes
  circle: SVGAttributes
  clipPath: SVGAttributes
  defs: SVGAttributes
  desc: SVGAttributes
  ellipse: SVGAttributes
  feBlend: SVGAttributes
  feColorMatrix: SVGAttributes
  feComponentTransfer: SVGAttributes
  feComposite: SVGAttributes
  feConvolveMatrix: SVGAttributes
  feDiffuseLighting: SVGAttributes
  feDisplacementMap: SVGAttributes
  feDistantLight: SVGAttributes
  feDropShadow: SVGAttributes
  feFlood: SVGAttributes
  feFuncA: SVGAttributes
  feFuncB: SVGAttributes
  feFuncG: SVGAttributes
  feFuncR: SVGAttributes
  feGaussianBlur: SVGAttributes
  feImage: SVGAttributes
  feMerge: SVGAttributes
  feMergeNode: SVGAttributes
  feMorphology: SVGAttributes
  feOffset: SVGAttributes
  fePointLight: SVGAttributes
  feSpecularLighting: SVGAttributes
  feSpotLight: SVGAttributes
  feTile: SVGAttributes
  feTurbulence: SVGAttributes
  filter: SVGAttributes
  foreignObject: SVGAttributes
  g: SVGAttributes
  image: SVGAttributes
  line: SVGAttributes
  linearGradient: SVGAttributes
  marker: SVGAttributes
  mask: SVGAttributes
  metadata: SVGAttributes
  mpath: SVGAttributes
  path: SVGAttributes
  pattern: SVGAttributes
  polygon: SVGAttributes
  polyline: SVGAttributes
  radialGradient: SVGAttributes
  rect: SVGAttributes
  stop: SVGAttributes
  switch: SVGAttributes
  symbol: SVGAttributes
  text: SVGAttributes
  textPath: SVGAttributes
  tspan: SVGAttributes
  use: SVGAttributes
  view: SVGAttributes
}

export interface Events {
  // clipboard events
  onCopy: ClipboardEvent
  onCut: ClipboardEvent
  onPaste: ClipboardEvent

  // composition events
  onCompositionend: CompositionEvent
  onCompositionstart: CompositionEvent
  onCompositionupdate: CompositionEvent

  // drag drop events
  onDrag: DragEvent
  onDragend: DragEvent
  onDragenter: DragEvent
  onDragexit: DragEvent
  onDragleave: DragEvent
  onDragover: DragEvent
  onDragstart: DragEvent
  onDrop: DragEvent

  // focus events
  onFocus: FocusEvent
  onFocusin: FocusEvent
  onFocusout: FocusEvent
  onBlur: FocusEvent

  // form events
  onChange: Event
  onBeforeinput: Event
  onInput: Event
  onReset: Event
  onSubmit: Event
  onInvalid: Event

  // image events
  onLoad: Event
  onError: Event

  // keyboard events
  onKeydown: KeyboardEvent
  onKeypress: KeyboardEvent
  onKeyup: KeyboardEvent

  // mouse events
  onAuxclick: MouseEvent
  onClick: MouseEvent
  onContextmenu: MouseEvent
  onDblclick: MouseEvent
  onMousedown: MouseEvent
  onMouseenter: MouseEvent
  onMouseleave: MouseEvent
  onMousemove: MouseEvent
  onMouseout: MouseEvent
  onMouseover: MouseEvent
  onMouseup: MouseEvent

  // media events
  onAbort: Event
  onCanplay: Event
  onCanplaythrough: Event
  onDurationchange: Event
  onEmptied: Event
  onEncrypted: Event
  onEnded: Event
  onLoadeddata: Event
  onLoadedmetadata: Event
  onLoadstart: Event
  onPause: Event
  onPlay: Event
  onPlaying: Event
  onProgress: Event
  onRatechange: Event
  onSeeked: Event
  onSeeking: Event
  onStalled: Event
  onSuspend: Event
  onTimeupdate: Event
  onVolumechange: Event
  onWaiting: Event

  // selection events
  onSelect: Event

  // UI events
  onScroll: UIEvent

  // touch events
  onTouchcancel: TouchEvent
  onTouchend: TouchEvent
  onTouchmove: TouchEvent
  onTouchstart: TouchEvent

  // pointer events
  onPointerdown: PointerEvent
  onPointermove: PointerEvent
  onPointerup: PointerEvent
  onPointercancel: PointerEvent
  onPointerenter: PointerEvent
  onPointerleave: PointerEvent
  onPointerover: PointerEvent
  onPointerout: PointerEvent

  // wheel events
  onWheel: WheelEvent

  // animation events
  onAnimationstart: AnimationEvent
  onAnimationend: AnimationEvent
  onAnimationiteration: AnimationEvent

  // transition events
  onTransitionend: TransitionEvent
  onTransitionstart: TransitionEvent
}

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
}

// use namespace import to avoid collision with generated types which use
// named imports.
import * as RuntimeCore from '@vue/runtime-core'

type ReservedProps = {
  key?: string | number | symbol
  ref?: RuntimeCore.VNodeRef
  ref_for?: boolean
  ref_key?: string
}

type ElementAttrs<T> = T & ReservedProps

type NativeElements = {
  [K in keyof IntrinsicElementAttributes]: ElementAttrs<
    IntrinsicElementAttributes[K]
  >
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicElements extends NativeElements {
      // allow arbitrary elements
      // @ts-ignore suppress ts:2374 = Duplicate string index signature.
      [name: string]: any
    }
    interface IntrinsicAttributes extends ReservedProps {}
  }
}

// suppress ts:2669
export {}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window
  }
}
`;let bi=!0,Lo;async function i0(){const e=await bt(()=>import("./chunks/editor.main.d83c2780.2efa1cf7.js"),[]).then(t=>t.e);return bi&&typeof Lo=="function"&&(bi=!1,Lo(e)),e.languages.typescript.typescriptDefaults.setCompilerOptions({target:e.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,module:e.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:e.languages.typescript.JsxEmit.Preserve,allowJs:!0}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),e.languages.typescript.typescriptDefaults.addExtraLib(Tv,"jsx:type"),e.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module 'vue' { ${Ev} }
  `,"ts:vue"),await Promise.all([(async()=>{const[{default:t},{default:n},{default:r}]=await Promise.all([bt(()=>import("./chunks/editor.worker.9c35f395.dcede9b5.js"),[]),bt(()=>import("./chunks/html.worker.b57725c2.47285f38.js"),[]),bt(()=>import("./chunks/ts.worker.3260b66b.5dceb272.js"),[])]);window.MonacoEnvironment={getWorker(o,s){return s==="html"||s==="handlebars"||s==="razor"?new n:s==="typescript"||s==="javascript"?new r:new t}}})()]),e}function Pv(e){Lo=e||null}const Nv=Symbol(),Tn={};function xi(e,t){Tn[e]=t}function a0(e){const t=window;return t.importMaps||(t.importMaps=Tn),e=Mv(e),e=e.replace(/import(.*?)from\s+['"](.*?)['"]/g,(n,r,o)=>{const s=o,i=Tn[s];return i?(Tn[`${s}`]||(Tn[`${s}`]=i),`const ${r} = importMaps['${o}']`):n}),e}function Mv(e){return e.replace(/import(.*?)from\s+['"]vue['"]/g,(t,n)=>(n=n.replace(/\sas\s/g,":"),`const ${n} = _vue`)).replace(/import 'vue'/g,"")}const l0=()=>Math.random().toString(36).slice(2,12),kv=e=>typeof e=="object"&&e!==null,Sv=e=>function(t,n,r,...o){return Array.isArray(r)&&(r=r.map(s=>Array.isArray(s)?s:kv(s)&&!s.__v_isVNode?e.createTextVNode(String(s)):s)),e.createVNode(t,n,r,...o)},Av=function(e,t){t=Object.assign({ms:300,defaultDirection:"row"},t);const n=ra(()=>bt(()=>import("./chunks/Demo.10a78ca5.394cf0a1.js"),[]));e.component("Demo",n),e.config.errorHandler=function(r){console.error(r)},bv(Object.assign({},oi,{createVNode:Sv(oi)})),xv(e),e.provide(Nv,t),Pv(t.onMonacoCreated)};const Ci=`<template>
  <PSpace>
    <PButton>默认</PButton>
    <PButton type="primary">Primary</PButton>
    <PButton type="danger">Danger</PButton>
    <PButton type="info">Info</PButton>
    <PButton type="warning">Warning</PButton>
    <PButton type="success">Success</PButton>
  </PSpace>
</template>
`,Ov=`import { defineComponent} from "vue";
import { Button, Space } from 'promiseui-vue'
export default defineComponent({
  setup() {
    return () => <Space>
      <Button>默认</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="success">Success</Button>
    </Space>
  }
})`,Tl=[];let Pl=!1;function Rv(e){Pl?e():Tl.push(e)}function Iv(){Tl.forEach(e=>e()),Pl=!0}const Vv={key:0},Lv={class:"btns"},Hv=S({__name:"index",setup(e){const t=ue(!1),n=ue("vue"),r=ue(Ci);return Rv(()=>{t.value=!0}),Fe(n,o=>{r.value=o==="vue"?Ci:Ov}),(o,s)=>{const i=Ct("Demo"),a=Ct("p-radio-button"),l=Ct("p-radio-group");return t.value?(d(),v(ne,{key:1},[(d(),re(i,{initialValue:r.value,style:{height:"calc(100vh - 100px)"},lang:n.value,key:n.value},null,8,["initialValue","lang"])),_("div",Lv,[O(l,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=c=>n.value=c),size:"sm"},{default:X(()=>[O(a,{key:"vue",value:"vue"},{default:X(()=>[Ae("sfc")]),_:1}),O(a,{key:"jsx",value:"jsx"},{default:X(()=>[Ae("jsx")]),_:1})]),_:1},8,["modelValue"])])],64)):(d(),v("div",Vv," 加载中... "))}}});const $v=$(Hv,[["__scopeId","data-v-522f579f"]]),Bv=`import type { App } from 'vue';
import { Button } from './button';
import { Space } from './space';
import { Icon } from './icon';
import { Message } from './message';
import { Input } from './input';
import { Overlay } from './overlay';
import { Dropdown, DropdownItem } from './dropdown';
import { Tabs, TabPane } from './tabs';
import { Switch } from './switch';
import { Radio, RadioGroup } from './radio';
import { Checkbox, CheckboxGroup } from './checkbox';
import { Select } from './select';
import { Scrollbar } from './scrollbar';
import { VirtualScroll } from './virtualScroll';
import { Tag } from './tag';
import { AutoComplete } from './autoComplete';
import { Form, FormItem } from './form';
import { Popover } from './popover';
import { Modal } from './modal';
import { MessageBox } from './messageBox';
import { useLoadingBar } from './loadingBar';
import { Table } from './table';
import { DatePicker } from './datePicker';
export { Button, Space, Icon, Message, Input, Overlay, Dropdown, DropdownItem, Tabs, TabPane, Switch, Radio, RadioGroup, Checkbox, CheckboxGroup, Select, Scrollbar, VirtualScroll, Tag, AutoComplete, Form, FormItem, Popover, Modal, MessageBox, useLoadingBar, Table, DatePicker };
declare const _default: {
    version: string;
    install(app: App): void;
};
export default _default;
`,Dv={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fv=_("path",{d:"M448 112c-66.82 17.92-119.55 32-192 32s-125.18-14.08-192-32l-16 51c48 20.53 96.71 35.16 147.2 53.2L144 496l56.4 16L246 336h20l45.6 176l56.4-16l-51.2-279.8C367.26 199.93 416 183.53 464 164z",fill:"currentColor"},null,-1),Uv=_("path",{d:"M256 112a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56z",fill:"currentColor"},null,-1),zv=[Fv,Uv],jv=S({name:"AccessibilitySharp",render:function(t,n){return d(),v("svg",Dv,zv)}}),Kv={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Gv=_("path",{d:"M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61l-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 0 1 0 .15a15.42 15.42 0 0 0-.53 1.58L15.86 352h51.78l45.45-55l96.77 2.17L135.24 464h63l133-161.75l57.77 1.54c4.29.23 16 .31 18.66.31c24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z",fill:"currentColor"},null,-1),Wv=[Gv],qv=S({name:"AirplaneSharp",render:function(t,n){return d(),v("svg",Kv,Wv)}}),Yv={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Jv=_("circle",{fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"48",cx:"256",cy:"256",r:"200"},null,-1),Xv=_("path",{stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"48",d:"M114.58 114.58l282.84 282.84",fill:"currentColor"},null,-1),Qv=[Jv,Xv],Zv=S({name:"Ban",render:function(t,n){return d(),v("svg",Yv,Qv)}}),ey={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ty=_("rect",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",x:"48",y:"80",width:"416",height:"384",rx:"48"},null,-1),ny=_("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32","stroke-linecap":"round",d:"M128 48v32"},null,-1),ry=_("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32","stroke-linecap":"round",d:"M384 48v32"},null,-1),oy=_("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32","stroke-linecap":"round",d:"M464 160H48"},null,-1),sy=[ty,ny,ry,oy],c0=S({name:"CalendarClearOutline",render:function(t,n){return d(),v("svg",ey,sy)}}),iy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ay=_("path",{d:"M64 144l192 224l192-224H64z",fill:"currentColor"},null,-1),ly=[ay],u0=S({name:"CaretDownSharp",render:function(t,n){return d(),v("svg",iy,ly)}}),cy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},uy=_("path",{d:"M448 368L256 144L64 368h384z",fill:"currentColor"},null,-1),dy=[uy],d0=S({name:"CaretUpSharp",render:function(t,n){return d(),v("svg",cy,dy)}}),py={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},fy=_("path",{d:"M128 464v-80H56a24 24 0 0 1-24-24V72a24 24 0 0 1 24-24h400a24 24 0 0 1 24 24v288a24 24 0 0 1-24 24H245.74zM456 80z",fill:"currentColor"},null,-1),my=[fy],hy=S({name:"ChatboxSharp",render:function(t,n){return d(),v("svg",py,my)}}),gy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_y=_("path",{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58z",fill:"currentColor"},null,-1),vy=[_y],p0=S({name:"CheckmarkCircle",render:function(t,n){return d(),v("svg",gy,vy)}}),yy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},by=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"44",d:"M416 128L192 384l-96-96"},null,-1),xy=[by],Cy=S({name:"CheckmarkSharp",render:function(t,n){return d(),v("svg",yy,xy)}}),wy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ey=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M112 184l144 144l144-144"},null,-1),Ty=[Ey],f0=S({name:"ChevronDownOutline",render:function(t,n){return d(),v("svg",wy,Ty)}}),Py={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ny=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48",d:"M112 184l144 144l144-144"},null,-1),My=[Ny],m0=S({name:"ChevronDownSharp",render:function(t,n){return d(),v("svg",Py,My)}}),ky={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Sy=_("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Ay=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M320 320L192 192"},null,-1),Oy=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M192 320l128-128"},null,-1),Ry=[Sy,Ay,Oy],h0=S({name:"CloseCircleOutline",render:function(t,n){return d(),v("svg",ky,Ry)}}),Iy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Vy=_("path",{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64l-64 64L169.37 320l64-64l-64-64L192 169.37l64 64l64-64L342.63 192l-64 64z",fill:"currentColor"},null,-1),Ly=[Vy],g0=S({name:"CloseCircleSharp",render:function(t,n){return d(),v("svg",Iy,Ly)}}),Hy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$y=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144"},null,-1),By=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 144L144 368"},null,-1),Dy=[$y,By],_0=S({name:"CloseOutline",render:function(t,n){return d(),v("svg",Hy,Dy)}}),Fy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Uy=_("path",{d:"M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z",fill:"currentColor"},null,-1),zy=[Uy],jy=S({name:"CloseSharp",render:function(t,n){return d(),v("svg",Fy,zy)}}),Ky={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Gy=Gr('<path d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998z" fill="currentColor"></path><path d="M259.34 192.09l60.57 60.57a64.07 64.07 0 0 0-60.57-60.57z" fill="currentColor"></path><path d="M252.66 319.91l-60.57-60.57a64.07 64.07 0 0 0 60.57 60.57z" fill="currentColor"></path><path d="M256 352a96 96 0 0 1-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 0 0 335 402.2l-53.61-53.6A95.84 95.84 0 0 1 256 352z" fill="currentColor"></path><path d="M256 160a96 96 0 0 1 92.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96c-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 0 0-78.21 14.29l53.11 53.11A95.84 95.84 0 0 1 256 160z" fill="currentColor"></path>',5),Wy=[Gy],v0=S({name:"EyeOffSharp",render:function(t,n){return d(),v("svg",Ky,Wy)}}),qy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Yy=_("circle",{cx:"256",cy:"256",r:"64",fill:"currentColor"},null,-1),Jy=_("path",{d:"M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82zM256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96z",fill:"currentColor"},null,-1),Xy=[Yy,Jy],y0=S({name:"EyeSharp",render:function(t,n){return d(),v("svg",qy,Xy)}}),Qy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Zy=_("path",{d:"M394.24 197.56a300.67 300.67 0 0 0-53.38-90C301.2 61.65 240 32 192 32c19 70-14.36 117.12-44.79 163.77C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.76-122.44zM288.33 418.69C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78c6.48-14.07 14.66-27.22 15.11-44.49c11.3 5.88 23.67 16.91 34.54 31.28c18.17 24 29 52.42 29 76c.01 22.23-5.41 39.76-15.66 50.68z",fill:"currentColor"},null,-1),eb=[Zy],tb=S({name:"FlameSharp",render:function(t,n){return d(),v("svg",Qy,eb)}}),nb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},rb=_("path",{d:"M0 48l192 240v128l128 48V288L512 48H0z",fill:"currentColor"},null,-1),ob=[rb],b0=S({name:"FunnelSharp",render:function(t,n){return d(),v("svg",nb,ob)}}),sb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ib=_("circle",{cx:"184",cy:"232",r:"24",fill:"currentColor"},null,-1),ab=_("path",{d:"M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z",fill:"currentColor"},null,-1),lb=_("circle",{cx:"328",cy:"232",r:"24",fill:"currentColor"},null,-1),cb=_("circle",{cx:"256",cy:"256",r:"208",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ub=[ib,ab,lb,cb],db=S({name:"HappyOutline",render:function(t,n){return d(),v("svg",sb,ub)}}),pb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},fb=_("path",{d:"M288.55 150.84c-8.09-3.86-20-6-32.72-5.82c-18 .22-33.13 5.2-45 14.78c-23 18.48-24.55 40.37-24.77 42.8a61.69 61.69 0 0 0-.09 12a3 3 0 0 0 3 2.69h21.23a3 3 0 0 0 3-3A65.7 65.7 0 0 1 214 204c0-.11 1.14-11.7 14.36-22.34c7-5.64 16.11-8.44 27.83-8.59c9.32-.11 16.93 1.47 20.34 3.09C291 183 298 192.31 298 204.57c0 18-10.9 26.23-30.18 39.18C247.08 257.68 237 275.1 237 297v11a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-11c0-9.16 2.23-19.13 18.44-30c19.95-13.41 42.56-28.6 42.56-62.43c0-23.14-13.3-42.23-37.45-53.73z",fill:"none"},null,-1),mb=_("path",{d:"M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64zm10.44 302h-30.21a2.57 2.57 0 0 1-2.56-2.57v-30.2a2.57 2.57 0 0 1 2.56-2.57h30.21a2.57 2.57 0 0 1 2.56 2.57v30.2a2.57 2.57 0 0 1-2.56 2.57zm17-99C267.23 277.88 265 287.85 265 297v11a3 3 0 0 1-3 3h-22a3 3 0 0 1-3-3v-11c0-21.91 10.08-39.33 30.82-53.26C287.1 230.8 298 222.6 298 204.57c0-12.26-7-21.57-21.49-28.46c-3.41-1.62-11-3.2-20.34-3.09c-11.72.15-20.82 2.95-27.83 8.59C215.12 192.25 214 203.84 214 204a65.7 65.7 0 0 0-.84 10.28a3 3 0 0 1-3 3h-21.25a3 3 0 0 1-3-2.69a61.69 61.69 0 0 1 .09-12c.22-2.43 1.8-24.32 24.77-42.8c11.91-9.58 27.06-14.56 45-14.78c12.7-.15 24.63 2 32.72 5.82c24.21 11.51 37.51 30.6 37.51 53.74c0 33.83-22.61 49.02-42.56 62.43z",fill:"currentColor"},null,-1),hb=[fb,mb],x0=S({name:"HelpCircleSharp",render:function(t,n){return d(),v("svg",pb,hb)}}),gb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_b=_("path",{d:"M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26zm48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32z",fill:"currentColor"},null,-1),vb=[_b],C0=S({name:"InformationCircle",render:function(t,n){return d(),v("svg",gb,vb)}}),yb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bb=_("path",{d:"M429.46 32.07c-23.6 6.53-205.55 58.81-250.54 71.43a4 4 0 0 0-2.92 3.83v247a2 2 0 0 1-1.33 1.89l-27.85 9.55c-19 7.44-66.82 16.68-66.82 59.19c0 35.54 24.63 51.54 45.86 54.28a52.06 52.06 0 0 0 7.81.8c7.37 0 36.38-7.08 53.3-18.08C208 448.25 208 448 208 412V202c0-.9.62-.84 1.48-1.07l188-51.92a2 2 0 0 1 2.53 2v155.54a2 2 0 0 1-1.36 1.89c-8.9 3-19.23 6.5-26.48 9.12C341.39 328.68 304 335.65 304 376c0 38.51 28.26 54.58 46.3 55.83a87.37 87.37 0 0 0 21.33-1c9-1.38 24.09-5.9 38.14-14.86C432 401.79 432 401.51 432 360V34a2 2 0 0 0-2.54-1.93z",fill:"currentColor"},null,-1),xb=[bb],Cb=S({name:"MusicalNotesSharp",render:function(t,n){return d(),v("svg",yb,xb)}}),wb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Eb=Gr('<path d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12c-17.23-10.71-33.5-20.83-44.14-39c-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08c-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 0 0-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464S448 430.85 448 390.11a78.3 78.3 0 0 0-5.2-28.29z" fill="currentColor"></path><ellipse cx="72" cy="216" rx="56" ry="72" fill="currentColor"></ellipse><ellipse cx="184" cy="120" rx="56" ry="72" fill="currentColor"></ellipse><ellipse cx="328" cy="120" rx="56" ry="72" fill="currentColor"></ellipse><ellipse cx="440" cy="216" rx="56" ry="72" fill="currentColor"></ellipse>',5),Tb=[Eb],Pb=S({name:"PawSharp",render:function(t,n){return d(),v("svg",wb,Tb)}}),Nb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Mb=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1),kb=[Mb],w0=S({name:"RemoveSharp",render:function(t,n){return d(),v("svg",Nb,kb)}}),Sb={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ab=_("path",{d:"M464 428L339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37a110.5 110.5 0 0 1-110.37 110.37z",fill:"currentColor"},null,-1),Ob=[Ab],Rb=S({name:"SearchSharp",render:function(t,n){return d(),v("svg",Sb,Ob)}}),Ib={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Vb=_("path",{d:"M479 447.77L268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79zm-197.62-36.29h-40v-40h40zm-4-63.92h-32l-6-160h44z",fill:"currentColor"},null,-1),Lb=[Vb],E0=S({name:"WarningSharp",render:function(t,n){return d(),v("svg",Ib,Lb)}});const Hb={AirplaneSharp:qv,AccessibilitySharp:jv,Ban:Zv,SearchSharp:Rb,ChatboxSharp:hy,PawSharp:Pb,CheckmarkSharp:Cy,CloseSharp:jy,MusicalNotesSharp:Cb,FlameSharp:tb,HappyOutline:db};let wi=!0;function $b(e){xi("@vicons/ionicons5",Hb),e.component("Playground",$v),e.use(Av,{onMonacoCreated(t){t.languages.typescript.typescriptDefaults.addExtraLib(`
        declare module 'promiseui-vue' { ${Bv} }
      `,"promiseui-vue")}}),e.mixin({async mounted(){wi&&(wi=!1,await bt(()=>import("./chunks/index.b9cb07b2.js"),["assets/chunks/index.b9cb07b2.js","assets/chunks/commonjsHelpers.28e086c5.js","assets/chunks/index.7895b845.js"]).then(t=>{xi("promiseui-vue",t),e.use(t.default),Iv()}))}})}const ln={...Cl,Layout:()=>Wt(yv),enhanceApp({app:e}){$b(e)}};function Bb(e,t){let n=[],r=!0;const o=s=>{if(r){r=!1;return}n.forEach(i=>document.head.removeChild(i)),n=[],s.forEach(i=>{const a=Db(i);document.head.appendChild(a),n.push(a)})};gn(()=>{const s=e.data,i=t.value,a=s&&s.description,l=s&&s.frontmatter.head||[];document.title=il(i,s),document.querySelector("meta[name=description]").setAttribute("content",a||i.description),o(al(i.head,Ub(l)))})}function Db([e,t,n]){const r=document.createElement(e);for(const o in t)r.setAttribute(o,t[o]);return n&&(r.innerHTML=n),r}function Fb(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Ub(e){return e.filter(t=>!Fb(t))}const uo=new Set,Nl=()=>document.createElement("link"),zb=e=>{const t=Nl();t.rel="prefetch",t.href=e,document.head.appendChild(t)},jb=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let gr;const Kb=Me&&(gr=Nl())&&gr.relList&&gr.relList.supports&&gr.relList.supports("prefetch")?zb:jb;function Gb(){if(!Me||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const r=()=>{n&&n.disconnect(),n=new IntersectionObserver(s=>{s.forEach(i=>{if(i.isIntersecting){const a=i.target;n.unobserve(a);const{pathname:l}=a;if(!uo.has(l)){uo.add(l);const c=cl(l);Kb(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(s=>{const{target:i,hostname:a,pathname:l}=s,c=l.match(/\.\w+$/);c&&c[0]!==".html"||i!=="_blank"&&a===location.hostname&&(l!==location.pathname?n.observe(s):uo.add(l))})})};We(r);const o=vn();Fe(()=>o.path,r),ft(()=>{n&&n.disconnect()})}const Wb=S({setup(e,{slots:t}){const n=ue(!1);return We(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}});function qb(){if(Me){const e=new Map;window.addEventListener("click",t=>{var r;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const o=n.parentElement,s=(r=n.nextElementSibling)==null?void 0:r.nextElementSibling;if(!o||!s)return;const i=/language-(shellscript|shell|bash|sh|zsh)/.test(o.className);let a="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(l=>a+=(l.textContent||"")+`
`),a=a.slice(0,-1),i&&(a=a.replace(/^ *(\$|>) /gm,"").trim()),Yb(a).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const l=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,l)})}})}}async function Yb(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const r=document.getSelection(),o=r?r.rangeCount>0&&r.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus()}}function Jb(){Me&&window.addEventListener("click",e=>{var n,r;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement,s=Array.from((o==null?void 0:o.querySelectorAll("input"))||[]).indexOf(t),i=o==null?void 0:o.querySelector('div[class*="language-"].active'),a=(r=o==null?void 0:o.querySelectorAll('div[class*="language-"]'))==null?void 0:r[s];i&&a&&i!==a&&(i.classList.remove("active"),a.classList.add("active"))}})}const Ml=ln.NotFound||(()=>"404 Not Found"),Xb=S({name:"VitePressApp",setup(){const{site:e}=ce();return We(()=>{gn(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),Gb(),qb(),Jb(),ln.setup&&ln.setup(),()=>Wt(ln.Layout)}});async function Qb(){const e=e0(),t=Zb();t.provide(ul,e);const n=Kd(e.route);return t.provide(ll,n),t.provide("NotFound",Ml),t.component("Content",Jd),t.component("ClientOnly",Wb),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),ln.enhanceApp&&await ln.enhanceApp({app:t,router:e,siteData:fn}),{app:t,router:e,data:n}}function Zb(){return tl(Xb)}function e0(){let e=Me,t;return qd(n=>{let r=cl(n);return e&&(t=r),(e||t===r)&&(r=r.replace(/\.js$/,".lean.js")),Me&&(e=!1),bt(()=>import(r),[])},Ml)}Me&&Qb().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Bb(t.route,n.site),e.mount("#app")})});export{x0 as $,gn as A,r0 as B,p0 as C,Gi as D,v0 as E,n0 as F,Eu as G,_o as H,C0 as I,Tr as J,f0 as K,qn as L,ft as M,Jt as N,_0 as O,Cy as P,ne as Q,w0 as R,t0 as S,Qn as T,o0 as U,ji as V,E0 as W,m0 as X,h0 as Y,Er as Z,$ as _,_ as a,b0 as a0,d0 as a1,u0 as a2,c0 as a3,eu as a4,bt as a5,Nv as a6,l0 as a7,Ne as a8,ie as a9,ee as aa,zn as ab,w as ac,re as ad,ou as ae,i0 as af,ze as ag,je as ah,s0 as ai,a0 as aj,Ae as b,v as c,Qb as createApp,O as d,Gr as e,S as f,Q as g,ve as h,ts as i,Wt as j,nt as k,ue as l,An as m,Fe as n,d as o,Fr as p,We as q,Ct as r,mt as s,kc as t,g0 as u,jy as v,X as w,Ad as x,Ja as y,y0 as z};
