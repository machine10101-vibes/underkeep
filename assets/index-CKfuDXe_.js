(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="170",qh=0,Ea=1,Yh=2,$h=0,eh=1,Kh=2,Ti=3,ji=0,Bt=1,jt=2,Ci=0,kn=1,so=2,Aa=3,Ca=4,Zh=5,rn=100,Jh=101,Qh=102,ec=103,tc=104,ic=200,nc=201,sc=202,rc=203,ro=204,oo=205,oc=206,ac=207,lc=208,hc=209,cc=210,dc=211,uc=212,fc=213,pc=214,ao=0,lo=1,ho=2,Fn=3,co=4,uo=5,fo=6,po=7,th=0,mc=1,gc=2,Xi=0,vc=1,xc=2,yc=3,ih=4,_c=5,wc=6,Mc=7,nh=300,On=301,Bn=302,mo=303,go=304,dr=306,sr=1e3,an=1001,vo=1002,qt=1003,Sc=1004,_s=1005,li=1006,xr=1007,Wi=1008,Li=1009,sh=1010,rh=1011,fs=1012,Ko=1013,hn=1014,fi=1015,Pi=1016,Zo=1017,Jo=1018,zn=1020,oh=35902,ah=1021,lh=1022,hi=1023,hh=1024,ch=1025,In=1026,Hn=1027,Qo=1028,ea=1029,dh=1030,ta=1031,ia=1033,Zs=33776,Js=33777,Qs=33778,er=33779,xo=35840,yo=35841,_o=35842,wo=35843,Mo=36196,So=37492,bo=37496,To=37808,Eo=37809,Ao=37810,Co=37811,Po=37812,Ro=37813,Lo=37814,Do=37815,ko=37816,Io=37817,No=37818,Uo=37819,Fo=37820,Oo=37821,tr=36492,Bo=36494,zo=36495,uh=36283,Ho=36284,Go=36285,Wo=36286,bc=3200,Tc=3201,fh=0,Ec=1,Ei="",Ut="srgb",Vn="srgb-linear",ur="linear",lt="srgb",fn=7680,Pa=519,Ac=512,Cc=513,Pc=514,ph=515,Rc=516,Lc=517,Dc=518,kc=519,Ra=35044,Ic=35048,La="300 es",Ai=2e3,rr=2001;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Da=1234567;const Nn=Math.PI/180,ps=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function na(r,e){return(r%e+e)%e}function Nc(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Uc(r,e,t){return r!==e?(t-r)/(e-r):0}function cs(r,e,t){return(1-t)*r+t*e}function Fc(r,e,t,i){return cs(r,e,1-Math.exp(-t*i))}function Oc(r,e=1){return e-Math.abs(na(r,e*2)-e)}function Bc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gc(r,e){return r+Math.random()*(e-r)}function Wc(r){return r*(.5-Math.random())}function Vc(r){r!==void 0&&(Da=r);let e=Da+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xc(r){return r*Nn}function jc(r){return r*ps}function qc(r){return(r&r-1)===0&&r!==0}function Yc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $c(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kc(r,e,t,i,n){const s=Math.cos,o=Math.sin,l=s(t/2),a=o(t/2),h=s((e+i)/2),c=o((e+i)/2),d=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(n){case"XYX":r.set(l*c,a*d,a*u,l*h);break;case"YZY":r.set(a*u,l*c,a*d,l*h);break;case"ZXZ":r.set(a*d,a*u,l*c,l*h);break;case"XZX":r.set(l*c,a*m,a*f,l*h);break;case"YXY":r.set(a*f,l*c,a*m,l*h);break;case"ZYZ":r.set(a*m,a*f,l*c,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ka={DEG2RAD:Nn,RAD2DEG:ps,generateUUID:jn,clamp:At,euclideanModulo:na,mapLinear:Nc,inverseLerp:Uc,lerp:cs,damp:Fc,pingpong:Oc,smoothstep:Bc,smootherstep:zc,randInt:Hc,randFloat:Gc,randFloatSpread:Wc,seededRandom:Vc,degToRad:Xc,radToDeg:jc,isPowerOfTwo:qc,ceilPowerOfTwo:Yc,floorPowerOfTwo:$c,setQuaternionFromProperEuler:Kc,normalize:It,denormalize:Rn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,n,s,o,l,a,h){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,l,a,h)}set(e,t,i,n,s,o,l,a,h){const c=this.elements;return c[0]=e,c[1]=n,c[2]=l,c[3]=t,c[4]=s,c[5]=a,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],l=i[3],a=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],m=i[8],v=n[0],g=n[3],p=n[6],x=n[1],b=n[4],w=n[7],I=n[2],P=n[5],R=n[8];return s[0]=o*v+l*x+a*I,s[3]=o*g+l*b+a*P,s[6]=o*p+l*w+a*R,s[1]=h*v+c*x+d*I,s[4]=h*g+c*b+d*P,s[7]=h*p+c*w+d*R,s[2]=u*v+f*x+m*I,s[5]=u*g+f*b+m*P,s[8]=u*p+f*w+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],a=e[6],h=e[7],c=e[8];return t*o*c-t*l*h-i*s*c+i*l*a+n*s*h-n*o*a}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],a=e[6],h=e[7],c=e[8],d=c*o-l*h,u=l*a-c*s,f=h*s-o*a,m=t*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(n*h-c*i)*v,e[2]=(l*i-n*o)*v,e[3]=u*v,e[4]=(c*t-n*a)*v,e[5]=(n*s-l*t)*v,e[6]=f*v,e[7]=(i*a-h*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,l){const a=Math.cos(s),h=Math.sin(s);return this.set(i*a,i*h,-i*(a*o+h*l)+o+e,-n*h,n*a,-n*(-h*o+a*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(yr.makeScale(e,t)),this}rotate(e){return this.premultiply(yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new He;function mh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zc(){const r=or("canvas");return r.style.display="block",r}const Ia={};function ls(r){r in Ia||(Ia[r]=!0,console.warn(r))}function Jc(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Qc(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ed(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?ur:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Un(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Na=[.64,.33,.3,.6,.15,.06],Ua=[.2126,.7152,.0722],Fa=[.3127,.329],Oa=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Vn]:{primaries:Na,whitePoint:Fa,transfer:ur,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:Ua,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Na,whitePoint:Fa,transfer:lt,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:Ua,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let pn;class td{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pn===void 0&&(pn=or("canvas")),pn.width=e.width,pn.height=e.height;const i=pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let id=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,l=n.length;o<l;o++)n[o].isDataTexture?s.push(_r(n[o].image)):s.push(_r(n[o]))}else s=_r(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function _r(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?td.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nd=0;class kt extends Xn{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=an,n=an,s=li,o=Wi,l=hi,a=Li,h=kt.DEFAULT_ANISOTROPY,c=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=jn(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=a,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=nh;kt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const a=e.elements,h=a[0],c=a[4],d=a[8],u=a[1],f=a[5],m=a[9],v=a[2],g=a[6],p=a[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,w=(f+1)/2,I=(p+1)/2,P=(c+u)/4,R=(d+v)/4,L=(m+g)/4;return b>w&&b>I?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=P/i,s=R/i):w>I?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=P/n,s=L/n):I<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(I),i=R/s,n=L/s),this.set(i,n,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-v)/x,this.z=(u-c)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sd extends Xn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new kt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vh extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,l){let a=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3];const u=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(l===0){e[t+0]=a,e[t+1]=h,e[t+2]=c,e[t+3]=d;return}if(l===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(d!==v||a!==u||h!==f||c!==m){let g=1-l;const p=a*u+h*f+c*m+d*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const I=Math.sqrt(b),P=Math.atan2(I,p*x);g=Math.sin(g*P)/I,l=Math.sin(l*P)/I}const w=l*x;if(a=a*g+u*w,h=h*g+f*w,c=c*g+m*w,d=d*g+v*w,g===1-l){const I=1/Math.sqrt(a*a+h*h+c*c+d*d);a*=I,h*=I,c*=I,d*=I}}e[t]=a,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,o){const l=i[n],a=i[n+1],h=i[n+2],c=i[n+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return e[t]=l*m+c*d+a*f-h*u,e[t+1]=a*m+c*u+h*d-l*f,e[t+2]=h*m+c*f+l*u-a*d,e[t+3]=c*m-l*d-a*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,l=Math.cos,a=Math.sin,h=l(i/2),c=l(n/2),d=l(s/2),u=a(i/2),f=a(n/2),m=a(s/2);switch(o){case"XYZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"YXZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"ZXY":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"ZYX":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"YZX":this._x=u*c*d+h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d-u*f*m;break;case"XZY":this._x=u*c*d-h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],l=t[5],a=t[9],h=t[2],c=t[6],d=t[10],u=i+l+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-a)*f,this._y=(s-h)*f,this._z=(o-n)*f}else if(i>l&&i>d){const f=2*Math.sqrt(1+i-l-d);this._w=(c-a)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+h)/f}else if(l>d){const f=2*Math.sqrt(1+l-i-d);this._w=(s-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(a+c)/f}else{const f=2*Math.sqrt(1+d-i-l);this._w=(o-n)/f,this._x=(s+h)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,l=t._x,a=t._y,h=t._z,c=t._w;return this._x=i*c+o*l+n*h-s*a,this._y=n*c+o*a+s*l-i*h,this._z=s*c+o*h+i*a-n*l,this._w=o*c-i*l-n*a-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+n*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const a=1-l*l;if(a<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(a),c=Math.atan2(h,l),d=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,l=e.z,a=e.w,h=2*(o*n-l*i),c=2*(l*t-s*n),d=2*(s*i-o*t);return this.x=t+a*h+o*d-l*c,this.y=i+a*c+l*h-s*d,this.z=n+a*d+s*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,l=t.y,a=t.z;return this.x=n*a-s*l,this.y=s*o-i*a,this.z=i*l-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new E,za=new ms;class dn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),Ms.subVectors(this.max,Jn),mn.subVectors(e.a,Jn),gn.subVectors(e.b,Jn),vn.subVectors(e.c,Jn),Ii.subVectors(gn,mn),Ni.subVectors(vn,gn),Yi.subVectors(mn,vn);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-Yi.z,Yi.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,Yi.z,0,-Yi.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-Yi.y,Yi.x,0];return!Mr(t,mn,gn,vn,Ms)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,mn,gn,vn,Ms))?!1:(Ss.crossVectors(Ii,Ni),t=[Ss.x,Ss.y,Ss.z],Mr(t,mn,gn,vn,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new E,new E,new E,new E,new E,new E,new E,new E],si=new E,ws=new dn,mn=new E,gn=new E,vn=new E,Ii=new E,Ni=new E,Yi=new E,Jn=new E,Ms=new E,Ss=new E,$i=new E;function Mr(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){$i.fromArray(r,s);const l=n.x*Math.abs($i.x)+n.y*Math.abs($i.y)+n.z*Math.abs($i.z),a=e.dot($i),h=t.dot($i),c=i.dot($i);if(Math.max(-Math.max(a,h,c),Math.min(a,h,c))>l)return!1}return!0}const od=new dn,Qn=new E,Sr=new E;class qn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):od.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Qn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(Sr)),this.expandByPoint(Qn.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new E,br=new E,bs=new E,Ui=new E,Tr=new E,Ts=new E,Er=new E;class sa{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){br.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(br);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),l=Ui.dot(this.direction),a=-Ui.dot(bs),h=Ui.lengthSq(),c=Math.abs(1-o*o);let d,u,f,m;if(c>0)if(d=o*a-l,u=o*l-a,m=s*c,d>=0)if(u>=-m)if(u<=m){const v=1/c;d*=v,u*=v,f=d*(d+o*u+2*l)+u*(o*d+u+2*a)+h}else u=s,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*a)+h;else u=-s,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*a)+h;else u<=-m?(d=Math.max(0,-(-o*s+l)),u=d>0?-s:Math.min(Math.max(-s,-a),s),f=-d*d+u*(u+2*a)+h):u<=m?(d=0,u=Math.min(Math.max(-s,-a),s),f=u*(u+2*a)+h):(d=Math.max(0,-(o*s+l)),u=d>0?s:Math.min(Math.max(-s,-a),s),f=-d*d+u*(u+2*a)+h);else u=o>0?-s:s,d=Math.max(0,-(o*u+l)),f=-d*d+u*(u+2*a)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(br).addScaledVector(bs,u),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),n=wi.dot(wi)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),l=i-o,a=i+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,l,a;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),c>=0?(s=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(l=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),i>a||l>n)||((l>i||i!==i)&&(i=l),(a<n||n!==n)&&(n=a),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,n,s){Tr.subVectors(t,e),Ts.subVectors(i,e),Er.crossVectors(Tr,Ts);let o=this.direction.dot(Er),l;if(o>0){if(n)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const a=l*this.direction.dot(Ts.crossVectors(Ui,Ts));if(a<0)return null;const h=l*this.direction.dot(Tr.cross(Ui));if(h<0||a+h>o)return null;const c=-l*Ui.dot(Er);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,n,s,o,l,a,h,c,d,u,f,m,v,g){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,l,a,h,c,d,u,f,m,v,g)}set(e,t,i,n,s,o,l,a,h,c,d,u,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=l,p[13]=a,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/xn.setFromMatrixColumn(e,0).length(),s=1/xn.setFromMatrixColumn(e,1).length(),o=1/xn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),a=Math.cos(n),h=Math.sin(n),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*c,f=o*d,m=l*c,v=l*d;t[0]=a*c,t[4]=-a*d,t[8]=h,t[1]=f+m*h,t[5]=u-v*h,t[9]=-l*a,t[2]=v-u*h,t[6]=m+f*h,t[10]=o*a}else if(e.order==="YXZ"){const u=a*c,f=a*d,m=h*c,v=h*d;t[0]=u+v*l,t[4]=m*l-f,t[8]=o*h,t[1]=o*d,t[5]=o*c,t[9]=-l,t[2]=f*l-m,t[6]=v+u*l,t[10]=o*a}else if(e.order==="ZXY"){const u=a*c,f=a*d,m=h*c,v=h*d;t[0]=u-v*l,t[4]=-o*d,t[8]=m+f*l,t[1]=f+m*l,t[5]=o*c,t[9]=v-u*l,t[2]=-o*h,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const u=o*c,f=o*d,m=l*c,v=l*d;t[0]=a*c,t[4]=m*h-f,t[8]=u*h+v,t[1]=a*d,t[5]=v*h+u,t[9]=f*h-m,t[2]=-h,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const u=o*a,f=o*h,m=l*a,v=l*h;t[0]=a*c,t[4]=v-u*d,t[8]=m*d+f,t[1]=d,t[5]=o*c,t[9]=-l*c,t[2]=-h*c,t[6]=f*d+m,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*a,f=o*h,m=l*a,v=l*h;t[0]=a*c,t[4]=-d,t[8]=h*c,t[1]=u*d+v,t[5]=o*c,t[9]=f*d-m,t[2]=m*d-f,t[6]=l*c,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,ld)}lookAt(e,t,i){const n=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Fi.crossVectors(i,Ht),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Fi.crossVectors(i,Ht)),Fi.normalize(),Es.crossVectors(Ht,Fi),n[0]=Fi.x,n[4]=Es.x,n[8]=Ht.x,n[1]=Fi.y,n[5]=Es.y,n[9]=Ht.y,n[2]=Fi.z,n[6]=Es.z,n[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],l=i[4],a=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],x=i[3],b=i[7],w=i[11],I=i[15],P=n[0],R=n[4],L=n[8],T=n[12],M=n[1],k=n[5],X=n[9],V=n[13],Z=n[2],ie=n[6],$=n[10],se=n[14],q=n[3],ue=n[7],xe=n[11],Pe=n[15];return s[0]=o*P+l*M+a*Z+h*q,s[4]=o*R+l*k+a*ie+h*ue,s[8]=o*L+l*X+a*$+h*xe,s[12]=o*T+l*V+a*se+h*Pe,s[1]=c*P+d*M+u*Z+f*q,s[5]=c*R+d*k+u*ie+f*ue,s[9]=c*L+d*X+u*$+f*xe,s[13]=c*T+d*V+u*se+f*Pe,s[2]=m*P+v*M+g*Z+p*q,s[6]=m*R+v*k+g*ie+p*ue,s[10]=m*L+v*X+g*$+p*xe,s[14]=m*T+v*V+g*se+p*Pe,s[3]=x*P+b*M+w*Z+I*q,s[7]=x*R+b*k+w*ie+I*ue,s[11]=x*L+b*X+w*$+I*xe,s[15]=x*T+b*V+w*se+I*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],l=e[5],a=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*a*d-n*h*d-s*l*u+i*h*u+n*l*f-i*a*f)+v*(+t*a*f-t*h*u+s*o*u-n*o*f+n*h*c-s*a*c)+g*(+t*h*d-t*l*f-s*o*d+i*o*f+s*l*c-i*h*c)+p*(-n*l*c-t*a*d+t*l*u+n*o*d-i*o*u+i*a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],a=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=d*g*h-v*u*h+v*a*f-l*g*f-d*a*p+l*u*p,b=m*u*h-c*g*h-m*a*f+o*g*f+c*a*p-o*u*p,w=c*v*h-m*d*h+m*l*f-o*v*f-c*l*p+o*d*p,I=m*d*a-c*v*a-m*l*u+o*v*u+c*l*g-o*d*g,P=t*x+i*b+n*w+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=x*R,e[1]=(v*u*s-d*g*s-v*n*f+i*g*f+d*n*p-i*u*p)*R,e[2]=(l*g*s-v*a*s+v*n*h-i*g*h-l*n*p+i*a*p)*R,e[3]=(d*a*s-l*u*s-d*n*h+i*u*h+l*n*f-i*a*f)*R,e[4]=b*R,e[5]=(c*g*s-m*u*s+m*n*f-t*g*f-c*n*p+t*u*p)*R,e[6]=(m*a*s-o*g*s-m*n*h+t*g*h+o*n*p-t*a*p)*R,e[7]=(o*u*s-c*a*s+c*n*h-t*u*h-o*n*f+t*a*f)*R,e[8]=w*R,e[9]=(m*d*s-c*v*s-m*i*f+t*v*f+c*i*p-t*d*p)*R,e[10]=(o*v*s-m*l*s+m*i*h-t*v*h-o*i*p+t*l*p)*R,e[11]=(c*l*s-o*d*s-c*i*h+t*d*h+o*i*f-t*l*f)*R,e[12]=I*R,e[13]=(c*v*n-m*d*n+m*i*u-t*v*u-c*i*g+t*d*g)*R,e[14]=(m*l*n-o*v*n-m*i*a+t*v*a+o*i*g-t*l*g)*R,e[15]=(o*d*n-c*l*n+c*i*a-t*d*a-o*i*u+t*l*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,l=e.y,a=e.z,h=s*o,c=s*l;return this.set(h*o+i,h*l-n*a,h*a+n*l,0,h*l+n*a,c*l+i,c*a-n*o,0,h*a-n*l,c*a+n*o,s*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,l=t._z,a=t._w,h=s+s,c=o+o,d=l+l,u=s*h,f=s*c,m=s*d,v=o*c,g=o*d,p=l*d,x=a*h,b=a*c,w=a*d,I=i.x,P=i.y,R=i.z;return n[0]=(1-(v+p))*I,n[1]=(f+w)*I,n[2]=(m-b)*I,n[3]=0,n[4]=(f-w)*P,n[5]=(1-(u+p))*P,n[6]=(g+x)*P,n[7]=0,n[8]=(m+b)*R,n[9]=(g-x)*R,n[10]=(1-(u+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=xn.set(n[0],n[1],n[2]).length();const o=xn.set(n[4],n[5],n[6]).length(),l=xn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ri.copy(this);const h=1/s,c=1/o,d=1/l;return ri.elements[0]*=h,ri.elements[1]*=h,ri.elements[2]*=h,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,o,l=Ai){const a=this.elements,h=2*s/(t-e),c=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let f,m;if(l===Ai)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(l===rr)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o,l=Ai){const a=this.elements,h=1/(t-e),c=1/(i-n),d=1/(o-s),u=(t+e)*h,f=(i+n)*c;let m,v;if(l===Ai)m=(o+s)*d,v=-2*d;else if(l===rr)m=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=v,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xn=new E,ri=new at,ad=new E(0,0,0),ld=new E(1,1,1),Fi=new E,Es=new E,Ht=new E,Ha=new at,Ga=new ms;class gi{constructor(e=0,t=0,i=0,n=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],l=n[8],a=n[1],h=n[5],c=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hd=0;const Wa=new E,yn=new ms,Mi=new at,As=new E,es=new E,cd=new E,dd=new ms,Va=new E(1,0,0),Xa=new E(0,1,0),ja=new E(0,0,1),qa={type:"added"},ud={type:"removed"},_n={type:"childadded",child:null},Ar={type:"childremoved",child:null};class Mt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new E,t=new gi,i=new ms,n=new E(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new He}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(Va,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Va,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(es,As,this.up):Mi.lookAt(As,es,this.up),this.quaternion.setFromRotationMatrix(Mi),n&&(Mi.extractRotation(n.matrixWorld),yn.setFromRotationMatrix(Mi),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qa),_n.child=e,this.dispatchEvent(_n),_n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ud),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qa),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let h=0,c=a.length;h<c;h++){const d=a[h];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,h=this.material.length;a<h;a++)l.push(s(e.materials,this.material[a]));n.material=l}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let l=0;l<this.children.length;l++)n.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];n.animations.push(s(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),h=o(e.textures),c=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),m=o(e.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(l){const a=[];for(const h in l){const c=l[h];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new E(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new E,Si=new E,Cr=new E,bi=new E,wn=new E,Mn=new E,Ya=new E,Pr=new E,Rr=new E,Lr=new E,Dr=new ht,kr=new ht,Ir=new ht;class ei{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),oi.subVectors(e,t),n.cross(oi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){oi.subVectors(n,t),Si.subVectors(i,t),Cr.subVectors(e,t);const o=oi.dot(oi),l=oi.dot(Si),a=oi.dot(Cr),h=Si.dot(Si),c=Si.dot(Cr),d=o*h-l*l;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(h*a-l*c)*u,m=(o*c-l*a)*u;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,n,s,o,l,a){return this.getBarycoord(e,t,i,n,bi)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,bi.x),a.addScaledVector(o,bi.y),a.addScaledVector(l,bi.z),a)}static getInterpolatedAttribute(e,t,i,n,s,o){return Dr.setScalar(0),kr.setScalar(0),Ir.setScalar(0),Dr.fromBufferAttribute(e,t),kr.fromBufferAttribute(e,i),Ir.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Dr,s.x),o.addScaledVector(kr,s.y),o.addScaledVector(Ir,s.z),o}static isFrontFacing(e,t,i,n){return oi.subVectors(i,t),Si.subVectors(e,t),oi.cross(Si).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),oi.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,l;wn.subVectors(n,i),Mn.subVectors(s,i),Pr.subVectors(e,i);const a=wn.dot(Pr),h=Mn.dot(Pr);if(a<=0&&h<=0)return t.copy(i);Rr.subVectors(e,n);const c=wn.dot(Rr),d=Mn.dot(Rr);if(c>=0&&d<=c)return t.copy(n);const u=a*d-c*h;if(u<=0&&a>=0&&c<=0)return o=a/(a-c),t.copy(i).addScaledVector(wn,o);Lr.subVectors(e,s);const f=wn.dot(Lr),m=Mn.dot(Lr);if(m>=0&&f<=m)return t.copy(s);const v=f*h-a*m;if(v<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(i).addScaledVector(Mn,l);const g=c*m-f*d;if(g<=0&&d-c>=0&&f-m>=0)return Ya.subVectors(s,n),l=(d-c)/(d-c+(f-m)),t.copy(n).addScaledVector(Ya,l);const p=1/(g+v+u);return o=v*p,l=u*p,t.copy(i).addScaledVector(wn,o).addScaledVector(Mn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Nr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=na(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Nr(o,s,e+1/3),this.g=Nr(o,s,e),this.b=Nr(o,s,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],l=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=xh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(At(Dt.r*255,0,255))*65536+Math.round(At(Dt.g*255,0,255))*256+Math.round(At(Dt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,n=Dt.g,s=Dt.b,o=Math.max(i,n,s),l=Math.min(i,n,s);let a,h;const c=(l+o)/2;if(l===o)a=0,h=0;else{const d=o-l;switch(h=c<=.5?d/(o+l):d/(2-o-l),o){case i:a=(n-s)/d+(n<s?6:0);break;case n:a=(s-i)/d+2;break;case s:a=(i-n)/d+4;break}a/=6}return e.h=a,e.s=h,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ut){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,n=Dt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Cs);const i=cs(Oi.h,Cs.h,t),n=cs(Oi.s,Cs.s,t),s=cs(Oi.l,Cs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=xh;let fd=0;class Yn extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=jn(),this.name="",this.blending=kn,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=oo,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fn,this.stencilZFail=fn,this.stencilZPass=fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ro&&(i.blendSrc=this.blendSrc),this.blendDst!==oo&&(i.blendDst=this.blendDst),this.blendEquation!==rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const l in s){const a=s[l];delete a.metadata,o.push(a)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new E,Ps=new le;class ti{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ra,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class yh extends ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _h extends ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pd=0;const Zt=new at,Ur=new Mt,Sn=new E,Gt=new dn,ts=new dn,Et=new E;class Tt extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?_h:yh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sn).negate(),this.translate(Sn.x,Sn.y,Sn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ts.setFromBufferAttribute(l),this.morphTargetsRelative?(Et.addVectors(Gt.min,ts.min),Gt.expandByPoint(Et),Et.addVectors(Gt.max,ts.max),Gt.expandByPoint(Et)):(Gt.expandByPoint(ts.min),Gt.expandByPoint(ts.max))}Gt.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],a=this.morphTargetsRelative;for(let h=0,c=l.count;h<c;h++)Et.fromBufferAttribute(l,h),a&&(Sn.fromBufferAttribute(e,h),Et.add(Sn)),n=Math.max(n,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],a=[];for(let L=0;L<i.count;L++)l[L]=new E,a[L]=new E;const h=new E,c=new E,d=new E,u=new le,f=new le,m=new le,v=new E,g=new E;function p(L,T,M){h.fromBufferAttribute(i,L),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),u.fromBufferAttribute(s,L),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,M),c.sub(h),d.sub(h),f.sub(u),m.sub(u);const k=1/(f.x*m.y-m.x*f.y);isFinite(k)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(k),g.copy(d).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(k),l[L].add(v),l[T].add(v),l[M].add(v),a[L].add(g),a[T].add(g),a[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,T=x.length;L<T;++L){const M=x[L],k=M.start,X=M.count;for(let V=k,Z=k+X;V<Z;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new E,w=new E,I=new E,P=new E;function R(L){I.fromBufferAttribute(n,L),P.copy(I);const T=l[L];b.copy(T),b.sub(I.multiplyScalar(I.dot(T))).normalize(),w.crossVectors(P,T);const k=w.dot(a[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,k)}for(let L=0,T=x.length;L<T;++L){const M=x[L],k=M.start,X=M.count;for(let V=k,Z=k+X;V<Z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new E,s=new E,o=new E,l=new E,a=new E,h=new E,c=new E,d=new E;if(e)for(let u=0,f=e.count;u<f;u+=3){const m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),c.subVectors(o,s),d.subVectors(n,s),c.cross(d),l.fromBufferAttribute(i,m),a.fromBufferAttribute(i,v),h.fromBufferAttribute(i,g),l.add(c),a.add(c),h.add(c),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,s),d.subVectors(n,s),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(l,a){const h=l.array,c=l.itemSize,d=l.normalized,u=new h.constructor(a.length*c);let f=0,m=0;for(let v=0,g=a.length;v<g;v++){l.isInterleavedBufferAttribute?f=a[v]*l.data.stride+l.offset:f=a[v]*c;for(let p=0;p<c;p++)u[m++]=h[f++]}return new ti(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,n=this.attributes;for(const l in n){const a=n[l],h=e(a,i);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const a=[],h=s[l];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=e(u,i);a.push(f)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(e[h]=a[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const a in i){const h=i[a];e.data.attributes[a]=h.toJSON(e.data)}const n={};let s=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(n[a]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],d=s[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,c=o.length;h<c;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new at,Ki=new sa,Rs=new qn,Ka=new E,Ls=new E,Ds=new E,ks=new E,Fr=new E,Is=new E,Za=new E,Ns=new E;class B extends Mt{constructor(e=new Tt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const l=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const l=this.morphTargetInfluences;if(s&&l){Is.set(0,0,0);for(let a=0,h=s.length;a<h;a++){const c=l[a],d=s[a];c!==0&&(Fr.fromBufferAttribute(d,e),o?Is.addScaledVector(Fr,c):Is.addScaledVector(Fr.sub(t),c))}t.add(Is)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(Rs.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Rs,Ka)===null||Ki.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&($a.copy(s).invert(),Ki.copy(e.ray).applyMatrix4($a),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,l=s.index,a=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(l!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,I=b;w<I;w+=3){const P=l.getX(w),R=l.getX(w+1),L=l.getX(w+2);n=Us(this,p,e,i,h,c,d,P,R,L),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=l.getX(g),b=l.getX(g+1),w=l.getX(g+2);n=Us(this,o,e,i,h,c,d,x,b,w),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,I=b;w<I;w+=3){const P=w,R=w+1,L=w+2;n=Us(this,p,e,i,h,c,d,P,R,L),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const x=g,b=g+1,w=g+2;n=Us(this,o,e,i,h,c,d,x,b,w),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function md(r,e,t,i,n,s,o,l){let a;if(e.side===Bt?a=i.intersectTriangle(o,s,n,!0,l):a=i.intersectTriangle(n,s,o,e.side===ji,l),a===null)return null;Ns.copy(l),Ns.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ns);return h<t.near||h>t.far?null:{distance:h,point:Ns.clone(),object:r}}function Us(r,e,t,i,n,s,o,l,a,h){r.getVertexPosition(l,Ls),r.getVertexPosition(a,Ds),r.getVertexPosition(h,ks);const c=md(r,e,t,i,Ls,Ds,ks,Za);if(c){const d=new E;ei.getBarycoord(Za,Ls,Ds,ks,d),n&&(c.uv=ei.getInterpolatedAttribute(n,l,a,h,d,new le)),s&&(c.uv1=ei.getInterpolatedAttribute(s,l,a,h,d,new le)),o&&(c.normal=ei.getInterpolatedAttribute(o,l,a,h,d,new E),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:l,b:a,c:h,normal:new E,materialIndex:0};ei.getNormal(Ls,Ds,ks,u.normal),c.face=u,c.barycoord=d}return c}class Me extends Tt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const l=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const a=[],h=[],c=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,s,4),m("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(a),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(d,2));function m(v,g,p,x,b,w,I,P,R,L,T){const M=w/R,k=I/L,X=w/2,V=I/2,Z=P/2,ie=R+1,$=L+1;let se=0,q=0;const ue=new E;for(let xe=0;xe<$;xe++){const Pe=xe*k-V;for(let qe=0;qe<ie;qe++){const ct=qe*M-X;ue[v]=ct*x,ue[g]=Pe*b,ue[p]=Z,h.push(ue.x,ue.y,ue.z),ue[v]=0,ue[g]=0,ue[p]=P>0?1:-1,c.push(ue.x,ue.y,ue.z),d.push(qe/R),d.push(1-xe/L),se+=1}}for(let xe=0;xe<L;xe++)for(let Pe=0;Pe<R;Pe++){const qe=u+Pe+ie*xe,ct=u+Pe+ie*(xe+1),Q=u+(Pe+1)+ie*(xe+1),ae=u+(Pe+1)+ie*xe;a.push(qe,ct,ae),a.push(ct,Q,ae),q+=6}l.addGroup(f,q,T),f+=q,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Me(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const i=Gn(r[t]);for(const n in i)e[n]=i[n]}return e}function gd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function wh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ar={clone:Gn,merge:Nt};var vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gn(e.uniforms),this.uniformsGroups=gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new E,Ja=new le,Qa=new le;class Xt extends Mh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,Qa),t.subVectors(Qa,Ja)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/a,t-=o.offsetY*i/h,n*=o.width/a,i*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bn=-90,Tn=1;class yd extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xt(bn,Tn,e,t);n.layers=this.layers,this.add(n);const s=new Xt(bn,Tn,e,t);s.layers=this.layers,this.add(s);const o=new Xt(bn,Tn,e,t);o.layers=this.layers,this.add(o);const l=new Xt(bn,Tn,e,t);l.layers=this.layers,this.add(l);const a=new Xt(bn,Tn,e,t);a.layers=this.layers,this.add(a);const h=new Xt(bn,Tn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,l,a]=t;for(const h of t)this.remove(h);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,a,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,l),e.setRenderTarget(i,3,n),e.render(t,a),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Sh extends kt{constructor(e,t,i,n,s,o,l,a,h,c){e=e!==void 0?e:[],t=t!==void 0?t:On,super(e,t,i,n,s,o,l,a,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _d extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Sh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Me(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Ci});s.uniforms.tEquirect.value=t;const o=new B(n,s),l=t.minFilter;return t.minFilter===Wi&&(t.minFilter=li),new yd(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const Or=new E,wd=new E,Md=new He;class Hi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Or.subVectors(i,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Or),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Md.getNormalMatrix(e),n=this.coplanarPoint(Or).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new qn,Fs=new E;class oa{constructor(e=new Hi,t=new Hi,i=new Hi,n=new Hi,s=new Hi,o=new Hi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(n),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,n=e.elements,s=n[0],o=n[1],l=n[2],a=n[3],h=n[4],c=n[5],d=n[6],u=n[7],f=n[8],m=n[9],v=n[10],g=n[11],p=n[12],x=n[13],b=n[14],w=n[15];if(i[0].setComponents(a-s,u-h,g-f,w-p).normalize(),i[1].setComponents(a+s,u+h,g+f,w+p).normalize(),i[2].setComponents(a+o,u+c,g+m,w+x).normalize(),i[3].setComponents(a-o,u-c,g-m,w-x).normalize(),i[4].setComponents(a-l,u-d,g-v,w-b).normalize(),t===Ai)i[5].setComponents(a+l,u+d,g+v,w+b).normalize();else if(t===rr)i[5].setComponents(l,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Fs.x=n.normal.x>0?e.max.x:e.min.x,Fs.y=n.normal.y>0?e.max.y:e.min.y,Fs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bh(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Sd(r){const e=new WeakMap;function t(l,a){const h=l.array,c=l.usage,d=h.byteLength,u=r.createBuffer();r.bindBuffer(a,u),r.bufferData(a,h,c),l.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function i(l,a,h){const c=a.array,d=a.updateRanges;if(r.bindBuffer(h,l),d.length===0)r.bufferSubData(h,0,c);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];r.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function n(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(r.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,a));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,a),h.version=l.version}}return{get:n,remove:s,update:o}}class mi extends Tt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,l=Math.floor(i),a=Math.floor(n),h=l+1,c=a+1,d=e/l,u=t/a,f=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const x=p*u-o;for(let b=0;b<h;b++){const w=b*d-s;m.push(w,-x,0),v.push(0,0,1),g.push(b/l),g.push(1-p/a)}}for(let p=0;p<a;p++)for(let x=0;x<l;x++){const b=x+h*p,w=x+h*(p+1),I=x+1+h*(p+1),P=x+1+h*p;f.push(b,w,P),f.push(w,I,P)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Od=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$d=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,du=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ku=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$f=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:bd,alphahash_pars_fragment:Td,alphamap_fragment:Ed,alphamap_pars_fragment:Ad,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Rd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:kd,begin_vertex:Id,beginnormal_vertex:Nd,bsdfs:Ud,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:zd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Vd,color_pars_vertex:Xd,color_vertex:jd,common:qd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Kd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:eu,colorspace_pars_fragment:tu,envmap_fragment:iu,envmap_common_pars_fragment:nu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:ou,fog_vertex:au,fog_pars_vertex:lu,fog_fragment:hu,fog_pars_fragment:cu,gradientmap_pars_fragment:du,lightmap_pars_fragment:uu,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:vu,lights_toon_pars_fragment:xu,lights_phong_fragment:yu,lights_phong_pars_fragment:_u,lights_physical_fragment:wu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:bu,lights_fragment_end:Tu,logdepthbuf_fragment:Eu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Pu,map_fragment:Ru,map_pars_fragment:Lu,map_particle_fragment:Du,map_particle_pars_fragment:ku,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Nu,morphinstance_vertex:Uu,morphcolor_vertex:Fu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:Hu,normal_fragment_maps:Gu,normal_pars_fragment:Wu,normal_pars_vertex:Vu,normal_vertex:Xu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:$u,iridescence_pars_fragment:Ku,opaque_fragment:Zu,packing:Ju,premultiplied_alpha_fragment:Qu,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:af,shadowmap_vertex:lf,shadowmask_pars_fragment:hf,skinbase_vertex:cf,skinning_pars_vertex:df,skinning_vertex:uf,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:vf,transmission_fragment:xf,transmission_pars_fragment:yf,uv_pars_fragment:_f,uv_pars_vertex:wf,uv_vertex:Mf,worldpos_vertex:Sf,background_vert:bf,background_frag:Tf,backgroundCube_vert:Ef,backgroundCube_frag:Af,cube_vert:Cf,cube_frag:Pf,depth_vert:Rf,depth_frag:Lf,distanceRGBA_vert:Df,distanceRGBA_frag:kf,equirect_vert:If,equirect_frag:Nf,linedashed_vert:Uf,linedashed_frag:Ff,meshbasic_vert:Of,meshbasic_frag:Bf,meshlambert_vert:zf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:Wf,meshnormal_vert:Vf,meshnormal_frag:Xf,meshphong_vert:jf,meshphong_frag:qf,meshphysical_vert:Yf,meshphysical_frag:$f,meshtoon_vert:Kf,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:ep,shadow_frag:tp,sprite_vert:ip,sprite_frag:np},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ui={basic:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Nt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Nt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Nt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Nt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Nt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Nt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Nt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Nt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Nt([he.common,he.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Nt([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ui.physical={uniforms:Nt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Os={r:0,b:0,g:0},Ji=new gi,sp=new at;function rp(r,e,t,i,n,s,o){const l=new je(0);let a=s===!0?0:1,h,c,d=null,u=0,f=null;function m(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function v(x){let b=!1;const w=m(x);w===null?p(l,a):w&&w.isColor&&(p(w,1),b=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,b){const w=m(b);w&&(w.isCubeTexture||w.mapping===dr)?(c===void 0&&(c=new B(new Me(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Gn(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ji.copy(b.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Ji)),c.material.toneMapped=tt.getTransfer(w.colorSpace)!==lt,(d!==w||u!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new B(new mi(2,2),new Ot({name:"BackgroundMaterial",uniforms:Gn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=tt.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function p(x,b){x.getRGB(Os,wh(r)),i.buffers.color.setClear(Os.r,Os.g,Os.b,b,o)}return{getClearColor:function(){return l},setClearColor:function(x,b=1){l.set(x),a=b,p(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(l,a)},render:v,addToRenderList:g}}function op(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,o=!1;function l(M,k,X,V,Z){let ie=!1;const $=d(V,X,k);s!==$&&(s=$,h(s.object)),ie=f(M,V,X,Z),ie&&m(M,V,X,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,w(M,k,X,V),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function a(){return r.createVertexArray()}function h(M){return r.bindVertexArray(M)}function c(M){return r.deleteVertexArray(M)}function d(M,k,X){const V=X.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let ie=Z[k.id];ie===void 0&&(ie={},Z[k.id]=ie);let $=ie[V];return $===void 0&&($=u(a()),ie[V]=$),$}function u(M){const k=[],X=[],V=[];for(let Z=0;Z<t;Z++)k[Z]=0,X[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,k,X,V){const Z=s.attributes,ie=k.attributes;let $=0;const se=X.getAttributes();for(const q in se)if(se[q].location>=0){const xe=Z[q];let Pe=ie[q];if(Pe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor)),xe===void 0||xe.attribute!==Pe||Pe&&xe.data!==Pe.data)return!0;$++}return s.attributesNum!==$||s.index!==V}function m(M,k,X,V){const Z={},ie=k.attributes;let $=0;const se=X.getAttributes();for(const q in se)if(se[q].location>=0){let xe=ie[q];xe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Pe={};Pe.attribute=xe,xe&&xe.data&&(Pe.data=xe.data),Z[q]=Pe,$++}s.attributes=Z,s.attributesNum=$,s.index=V}function v(){const M=s.newAttributes;for(let k=0,X=M.length;k<X;k++)M[k]=0}function g(M){p(M,0)}function p(M,k){const X=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;X[M]=1,V[M]===0&&(r.enableVertexAttribArray(M),V[M]=1),Z[M]!==k&&(r.vertexAttribDivisor(M,k),Z[M]=k)}function x(){const M=s.newAttributes,k=s.enabledAttributes;for(let X=0,V=k.length;X<V;X++)k[X]!==M[X]&&(r.disableVertexAttribArray(X),k[X]=0)}function b(M,k,X,V,Z,ie,$){$===!0?r.vertexAttribIPointer(M,k,X,Z,ie):r.vertexAttribPointer(M,k,X,V,Z,ie)}function w(M,k,X,V){v();const Z=V.attributes,ie=X.getAttributes(),$=k.defaultAttributeValues;for(const se in ie){const q=ie[se];if(q.location>=0){let ue=Z[se];if(ue===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const xe=ue.normalized,Pe=ue.itemSize,qe=e.get(ue);if(qe===void 0)continue;const ct=qe.buffer,Q=qe.type,ae=qe.bytesPerElement,Ee=Q===r.INT||Q===r.UNSIGNED_INT||ue.gpuType===Ko;if(ue.isInterleavedBufferAttribute){const fe=ue.data,Ne=fe.stride,Oe=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<q.locationSize;Ye++)p(q.location+Ye,fe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ye=0;Ye<q.locationSize;Ye++)g(q.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let Ye=0;Ye<q.locationSize;Ye++)b(q.location+Ye,Pe/q.locationSize,Q,xe,Ne*ae,(Oe+Pe/q.locationSize*Ye)*ae,Ee)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)p(q.location+fe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<q.locationSize;fe++)g(q.location+fe);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let fe=0;fe<q.locationSize;fe++)b(q.location+fe,Pe/q.locationSize,Q,xe,Pe*ae,Pe/q.locationSize*fe*ae,Ee)}}else if($!==void 0){const xe=$[se];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(q.location,xe);break;case 3:r.vertexAttrib3fv(q.location,xe);break;case 4:r.vertexAttrib4fv(q.location,xe);break;default:r.vertexAttrib1fv(q.location,xe)}}}}x()}function I(){L();for(const M in i){const k=i[M];for(const X in k){const V=k[X];for(const Z in V)c(V[Z].object),delete V[Z];delete k[X]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const k=i[M.id];for(const X in k){const V=k[X];for(const Z in V)c(V[Z].object),delete V[Z];delete k[X]}delete i[M.id]}function R(M){for(const k in i){const X=i[k];if(X[M.id]===void 0)continue;const V=X[M.id];for(const Z in V)c(V[Z].object),delete V[Z];delete X[M.id]}}function L(){T(),o=!0,s!==n&&(s=n,h(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:l,reset:L,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function ap(r,e,t){let i;function n(h){i=h}function s(h,c){r.drawArrays(i,h,c),t.update(c,i,1)}function o(h,c,d){d!==0&&(r.drawArraysInstanced(i,h,c,d),t.update(c,i,d))}function l(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let f=0;for(let m=0;m<d;m++)f+=c[m];t.update(f,i,1)}function a(h,c,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)o(h[m],c[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v]*u[v];t.update(m,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function lp(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==hi&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const L=R===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Li&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!L)}function a(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=a(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:I,maxSamples:P}}function hp(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Hi,l=new He,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=r.get(d);if(!n||m===null||m.length===0||s&&!g)s?c(null):h();else{const x=s?0:i,b=x*4;let w=p.clippingState||null;a.value=w,w=c(m,u,b,f);for(let I=0;I!==b;++I)w[I]=t[I];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,f,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=a.value,m!==!0||g===null){const p=f+v*4,x=u.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,w=f;b!==v;++b,w+=4)o.copy(d[b]).applyMatrix4(x,l),o.normal.toArray(g,w),g[w+3]=o.constant}a.value=g,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function cp(r){let e=new WeakMap;function t(o,l){return l===mo?o.mapping=On:l===go&&(o.mapping=Bn),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===mo||l===go)if(e.has(o)){const a=e.get(o).texture;return t(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const h=new _d(a.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",n),t(h.texture,o.mapping)}else return null}}return o}function n(o){const l=o.target;l.removeEventListener("dispose",n);const a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class aa extends Mh{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=n+t,a=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=c*this.view.offsetY,a=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ln=4,el=[.125,.215,.35,.446,.526,.582],on=20,Br=new aa,tl=new je;let zr=null,Hr=0,Gr=0,Wr=!1;const nn=(1+Math.sqrt(5))/2,En=1/nn,il=[new E(-nn,En,0),new E(nn,En,0),new E(-En,0,nn),new E(En,0,nn),new E(0,nn,-En),new E(0,nn,En),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Hr,Gr),this._renderer.xr.enabled=Wr,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===On||e.mapping===Bn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Pi,format:hi,colorSpace:Vn,depthBuffer:!1},n=sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(s)),this._blurMaterial=up(s,e,t)}return n}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,i,n){const l=new Xt(90,1,t,i),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(tl),c.toneMapping=Xi,c.autoClear=!1;const f=new Vt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new B(new Me,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(tl),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(l.up.set(0,a[p],0),l.lookAt(h[p],0,0)):x===1?(l.up.set(0,0,a[p]),l.lookAt(0,h[p],0)):(l.up.set(0,a[p],0),l.lookAt(0,0,h[p]));const b=this._cubeSize;Bs(n,x*b,p>2?b:0,b,b),c.setRenderTarget(n),v&&c.render(m,l),c.render(e,l)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=u,c.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===On||e.mapping===Bn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const a=this._cubeSize;Bs(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(o,Br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=il[(n-s-1)%il.length];this._blur(e,s-1,s,o,l)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,l){const a=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new B(this._lodPlanes[n],h),u=h.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*on-1),v=s/m,g=isFinite(s)?1+Math.floor(c*v):on;g>on&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${on}`);const p=[];let x=0;for(let R=0;R<on;++R){const L=R/v,T=Math.exp(-L*L/2);p.push(T),R===0?x+=T:R<g&&(x+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:b}=this;u.dTheta.value=m,u.mipInt.value=b-i;const w=this._sizeLods[n],I=3*w*(n>b-Ln?n-b+Ln:0),P=4*(this._cubeSize-w);Bs(t,I,P,3*w,2*w),a.setRenderTarget(t),a.render(d,Br)}}function dp(r){const e=[],t=[],i=[];let n=r;const s=r-Ln+1+el.length;for(let o=0;o<s;o++){const l=Math.pow(2,n);t.push(l);let a=1/l;o>r-Ln?a=el[o-r+Ln-1]:o===0&&(a=0),i.push(a);const h=1/(l-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),b=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,L=P>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(T,v*m*P),b.set(u,g*m*P);const M=[P,P,P,P,P,P];w.set(M,p*m*P)}const I=new Tt;I.setAttribute("position",new ti(x,v)),I.setAttribute("uv",new ti(b,g)),I.setAttribute("faceIndex",new ti(w,p)),e.push(I),n>Ln&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sl(r,e,t){const i=new ci(r,e,t);return i.texture.mapping=dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function up(r,e,t){const i=new Float32Array(on),n=new E(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:on,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function rl(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ol(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fp(r){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const a=l.mapping,h=a===mo||a===go,c=a===On||a===Bn;if(h||c){let d=e.get(l);const u=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return t===null&&(t=new nl(r)),d=h?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const f=l.image;return h&&f&&f.height>0||c&&f&&n(f)?(t===null&&(t=new nl(r)),d=h?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function n(l){let a=0;const h=6;for(let c=0;c<h;c++)l[c]!==void 0&&a++;return a===h}function s(l){const a=l.target;a.removeEventListener("dispose",s);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pp(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function mp(r,e,t,i){const n={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const v=u.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}u.removeEventListener("dispose",o),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const m in u)e.update(u[m],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],r.ARRAY_BUFFER)}}function h(d){const u=[],f=d.index,m=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let b=0,w=x.length;b<w;b+=3){const I=x[b+0],P=x[b+1],R=x[b+2];u.push(I,P,P,R,R,I)}}else if(m!==void 0){const x=m.array;v=m.version;for(let b=0,w=x.length/3-1;b<w;b+=3){const I=b+0,P=b+1,R=b+2;u.push(I,P,P,R,R,I)}}else return;const g=new(mh(u)?_h:yh)(u,1);g.version=v;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function c(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return s.get(d)}return{get:l,update:a,getWireframeAttribute:c}}function gp(r,e,t){let i;function n(u){i=u}let s,o;function l(u){s=u.type,o=u.bytesPerElement}function a(u,f){r.drawElements(i,f,s,u*o),t.update(f,i,1)}function h(u,f,m){m!==0&&(r.drawElementsInstanced(i,f,s,u*o,m),t.update(f,i,m))}function c(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function d(u,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)h(u[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*v[x];t.update(p,i,1)}}this.setMode=n,this.setIndex=l,this.render=a,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function vp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function xp(r,e,t){const i=new WeakMap,n=new ht;function s(o,l,a){const h=o.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(l);if(u===void 0||u.count!==d){let M=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let w=0;m===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let I=l.attributes.position.count*w,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*P*4*d),L=new vh(R,I,P,d);L.type=fi,L.needsUpdate=!0;const T=w*4;for(let k=0;k<d;k++){const X=p[k],V=x[k],Z=b[k],ie=I*P*4*k;for(let $=0;$<X.count;$++){const se=$*T;m===!0&&(n.fromBufferAttribute(X,$),R[ie+se+0]=n.x,R[ie+se+1]=n.y,R[ie+se+2]=n.z,R[ie+se+3]=0),v===!0&&(n.fromBufferAttribute(V,$),R[ie+se+4]=n.x,R[ie+se+5]=n.y,R[ie+se+6]=n.z,R[ie+se+7]=0),g===!0&&(n.fromBufferAttribute(Z,$),R[ie+se+8]=n.x,R[ie+se+9]=n.y,R[ie+se+10]=n.z,R[ie+se+11]=Z.itemSize===4?n.w:1)}}u={count:d,texture:L,size:new le(I,P)},i.set(l,u),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const v=l.morphTargetsRelative?1:1-m;a.getUniforms().setValue(r,"morphTargetBaseInfluence",v),a.getUniforms().setValue(r,"morphTargetInfluences",h)}a.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function yp(r,e,t,i){let n=new WeakMap;function s(a){const h=i.render.frame,c=a.geometry,d=e.get(a,c);if(n.get(d)!==h&&(e.update(d),n.set(d,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),n.get(a)!==h&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,h))),a.isSkinnedMesh){const u=a.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function o(){n=new WeakMap}function l(a){const h=a.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class Th extends kt{constructor(e,t,i,n,s,o,l,a,h,c=In){if(c!==In&&c!==Hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===In&&(i=hn),i===void 0&&c===Hn&&(i=zn),super(null,n,s,o,l,a,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:qt,this.minFilter=a!==void 0?a:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Eh=new kt,al=new Th(1,1),Ah=new vh,Ch=new rd,Ph=new Sh,ll=[],hl=[],cl=new Float32Array(16),dl=new Float32Array(9),ul=new Float32Array(4);function $n(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=ll[n];if(s===void 0&&(s=new Float32Array(n),ll[n]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function fr(r,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function _p(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function Sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function bp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;ul.set(i),r.uniformMatrix2fv(this.addr,!1,ul),bt(t,i)}}function Tp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;dl.set(i),r.uniformMatrix3fv(this.addr,!1,dl),bt(t,i)}}function Ep(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;cl.set(i),r.uniformMatrix4fv(this.addr,!1,cl),bt(t,i)}}function Ap(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function Rp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function Lp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function Ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function Np(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(al.compareFunction=ph,s=al):s=Eh,t.setTexture2D(e||s,n)}function Up(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ch,n)}function Fp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ph,n)}function Op(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ah,n)}function Bp(r){switch(r){case 5126:return _p;case 35664:return wp;case 35665:return Mp;case 35666:return Sp;case 35674:return bp;case 35675:return Tp;case 35676:return Ep;case 5124:case 35670:return Ap;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Rp;case 5125:return Lp;case 36294:return Dp;case 36295:return kp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function zp(r,e){r.uniform1fv(this.addr,e)}function Hp(r,e){const t=$n(e,this.size,2);r.uniform2fv(this.addr,t)}function Gp(r,e){const t=$n(e,this.size,3);r.uniform3fv(this.addr,t)}function Wp(r,e){const t=$n(e,this.size,4);r.uniform4fv(this.addr,t)}function Vp(r,e){const t=$n(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xp(r,e){const t=$n(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jp(r,e){const t=$n(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function qp(r,e){r.uniform1iv(this.addr,e)}function Yp(r,e){r.uniform2iv(this.addr,e)}function $p(r,e){r.uniform3iv(this.addr,e)}function Kp(r,e){r.uniform4iv(this.addr,e)}function Zp(r,e){r.uniform1uiv(this.addr,e)}function Jp(r,e){r.uniform2uiv(this.addr,e)}function Qp(r,e){r.uniform3uiv(this.addr,e)}function em(r,e){r.uniform4uiv(this.addr,e)}function tm(r,e,t){const i=this.cache,n=e.length,s=fr(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Eh,s[o])}function im(r,e,t){const i=this.cache,n=e.length,s=fr(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Ch,s[o])}function nm(r,e,t){const i=this.cache,n=e.length,s=fr(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Ph,s[o])}function sm(r,e,t){const i=this.cache,n=e.length,s=fr(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Ah,s[o])}function rm(r){switch(r){case 5126:return zp;case 35664:return Hp;case 35665:return Gp;case 35666:return Wp;case 35674:return Vp;case 35675:return Xp;case 35676:return jp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return $p;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}}class am{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const l=n[s];l.setValue(e,t[l.id],i)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function fl(r,e){r.seq.push(e),r.map[e.id]=e}function hm(r,e,t){const i=r.name,n=i.length;for(Vr.lastIndex=0;;){const s=Vr.exec(i),o=Vr.lastIndex;let l=s[1];const a=s[2]==="]",h=s[3];if(a&&(l=l|0),h===void 0||h==="["&&o+2===n){fl(t,h===void 0?new om(l,r,e):new am(l,r,e));break}else{let d=t.map[l];d===void 0&&(d=new lm(l),fl(t,d)),t=d}}}class ir{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);hm(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const l=t[s],a=i[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function pl(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const cm=37297;let dm=0;function um(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const ml=new He;function fm(r){tt._getMatrix(ml,tt.workingColorSpace,r);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case ur:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+um(r.getShaderSource(e),o)}else return n}function pm(r,e){const t=fm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mm(r,e){let t;switch(e){case vc:t="Linear";break;case xc:t="Reinhard";break;case yc:t="Cineon";break;case ih:t="ACESFilmic";break;case wc:t="AgX";break;case Mc:t="Neutral";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new E;function gm(){tt.getLuminanceCoefficients(zs);const r=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function xm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ym(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function hs(r){return r!==""}function vl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _m=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(r){return r.replace(_m,Mm)}const wm=new Map;function Mm(r,e){let t=We[e];if(t===void 0){const i=wm.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(r){return r.replace(Sm,bm)}function bm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function _l(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Em(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case On:case Bn:e="ENVMAP_TYPE_CUBE";break;case dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bn:e="ENVMAP_MODE_REFRACTION";break}return e}function Cm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case mc:e="ENVMAP_BLENDING_MIX";break;case gc:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rm(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=Tm(t),h=Em(t),c=Am(t),d=Cm(t),u=Pm(t),f=vm(t),m=xm(s),v=n.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(g=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?We.tonemapping_pars_fragment:"",t.toneMapping!==Xi?mm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,pm("linearToOutputTexel",t.outputColorSpace),gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=Vo(o),o=vl(o,t),o=xl(o,t),l=Vo(l),l=vl(l,t),l=xl(l,t),o=yl(o),l=yl(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+g+o,w=x+p+l,I=pl(n,n.VERTEX_SHADER,b),P=pl(n,n.FRAGMENT_SHADER,w);n.attachShader(v,I),n.attachShader(v,P),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(k){if(r.debug.checkShaderErrors){const X=n.getProgramInfoLog(v).trim(),V=n.getShaderInfoLog(I).trim(),Z=n.getShaderInfoLog(P).trim();let ie=!0,$=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,I,P);else{const se=gl(n,I,"vertex"),q=gl(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+se+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||Z==="")&&($=!1);$&&(k.diagnostics={runnable:ie,programLog:X,vertexShader:{log:V,prefix:g},fragmentShader:{log:Z,prefix:p}})}n.deleteShader(I),n.deleteShader(P),L=new ir(n,v),T=ym(n,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,cm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=P,this}let Lm=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new km(e),t.set(e,i)),i}}class km{constructor(e){this.id=Lm++,this.code=e,this.usedTimes=0}}function Im(r,e,t,i,n,s,o){const l=new ra,a=new Dm,h=new Set,c=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return h.add(T),T===0?"uv":`uv${T}`}function g(T,M,k,X,V){const Z=X.fog,ie=V.geometry,$=T.isMeshStandardMaterial?X.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),q=se&&se.mapping===dr?se.image.height:null,ue=m[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const xe=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Pe=xe!==void 0?xe.length:0;let qe=0;ie.morphAttributes.position!==void 0&&(qe=1),ie.morphAttributes.normal!==void 0&&(qe=2),ie.morphAttributes.color!==void 0&&(qe=3);let ct,Q,ae,Ee;if(ue){const ot=ui[ue];ct=ot.vertexShader,Q=ot.fragmentShader}else ct=T.vertexShader,Q=T.fragmentShader,a.update(T),ae=a.getVertexShaderID(T),Ee=a.getFragmentShaderID(T);const fe=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Oe=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,xt=!!T.map,Qe=!!T.matcap,_t=!!se,O=!!T.aoMap,$t=!!T.lightMap,Ke=!!T.bumpMap,Ze=!!T.normalMap,Le=!!T.displacementMap,ft=!!T.emissiveMap,Re=!!T.metalnessMap,C=!!T.roughnessMap,_=T.anisotropy>0,z=T.clearcoat>0,ee=T.dispersion>0,ne=T.iridescence>0,J=T.sheen>0,Ae=T.transmission>0,pe=_&&!!T.anisotropyMap,ye=z&&!!T.clearcoatMap,et=z&&!!T.clearcoatNormalMap,re=z&&!!T.clearcoatRoughnessMap,_e=ne&&!!T.iridescenceMap,De=ne&&!!T.iridescenceThicknessMap,Ue=J&&!!T.sheenColorMap,we=J&&!!T.sheenRoughnessMap,Je=!!T.specularMap,Ge=!!T.specularColorMap,dt=!!T.specularIntensityMap,N=Ae&&!!T.transmissionMap,ce=Ae&&!!T.thicknessMap,j=!!T.gradientMap,te=!!T.alphaMap,ve=T.alphaTest>0,me=!!T.alphaHash,Be=!!T.extensions;let yt=Xi;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(yt=r.toneMapping);const Rt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:ct,fragmentShader:Q,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&V.instanceColor!==null,instancingMorph:Oe&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Vn,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:Qe,envMap:_t,envMapMode:_t&&se.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:$t,bumpMap:Ke,normalMap:Ze,displacementMap:u&&Le,emissiveMap:ft,normalMapObjectSpace:Ze&&T.normalMapType===Ec,normalMapTangentSpace:Ze&&T.normalMapType===fh,metalnessMap:Re,roughnessMap:C,anisotropy:_,anisotropyMap:pe,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:et,clearcoatRoughnessMap:re,dispersion:ee,iridescence:ne,iridescenceMap:_e,iridescenceThicknessMap:De,sheen:J,sheenColorMap:Ue,sheenRoughnessMap:we,specularMap:Je,specularColorMap:Ge,specularIntensityMap:dt,transmission:Ae,transmissionMap:N,thicknessMap:ce,gradientMap:j,opaque:T.transparent===!1&&T.blending===kn&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:me,combine:T.combine,mapUv:xt&&v(T.map.channel),aoMapUv:O&&v(T.aoMap.channel),lightMapUv:$t&&v(T.lightMap.channel),bumpMapUv:Ke&&v(T.bumpMap.channel),normalMapUv:Ze&&v(T.normalMap.channel),displacementMapUv:Le&&v(T.displacementMap.channel),emissiveMapUv:ft&&v(T.emissiveMap.channel),metalnessMapUv:Re&&v(T.metalnessMap.channel),roughnessMapUv:C&&v(T.roughnessMap.channel),anisotropyMapUv:pe&&v(T.anisotropyMap.channel),clearcoatMapUv:ye&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(T.sheenRoughnessMap.channel),specularMapUv:Je&&v(T.specularMap.channel),specularColorMapUv:Ge&&v(T.specularColorMap.channel),specularIntensityMapUv:dt&&v(T.specularIntensityMap.channel),transmissionMapUv:N&&v(T.transmissionMap.channel),thicknessMapUv:ce&&v(T.thicknessMap.channel),alphaMapUv:te&&v(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ze||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ie.attributes.uv&&(xt||te),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ne,skinning:V.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===lt,decodeVideoTextureEmissive:ft&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jt,flipSided:T.side===Bt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Rt.vertexUv1s=h.has(1),Rt.vertexUv2s=h.has(2),Rt.vertexUv3s=h.has(3),h.clear(),Rt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)M.push(k),M.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(x(M,T),b(M,T),M.push(r.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),T.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),T.push(l.mask)}function w(T){const M=m[T.type];let k;if(M){const X=ui[M];k=ar.clone(X.uniforms)}else k=T.uniforms;return k}function I(T,M){let k;for(let X=0,V=c.length;X<V;X++){const Z=c[X];if(Z.cacheKey===M){k=Z,++k.usedTimes;break}}return k===void 0&&(k=new Rm(r,M,T,s),c.push(k)),k}function P(T){if(--T.usedTimes===0){const M=c.indexOf(T);c[M]=c[c.length-1],c.pop(),T.destroy()}}function R(T){a.remove(T)}function L(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:L}}function Nm(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function i(o){r.delete(o)}function n(o,l,a){r.get(o)[l]=a}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Um(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ml(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(d,u,f,m,v,g){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},r[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function l(d,u,f,m,v,g){const p=o(d,u,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function a(d,u,f,m,v,g){const p=o(d,u,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function h(d,u){t.length>1&&t.sort(d||Um),i.length>1&&i.sort(u||wl),n.length>1&&n.sort(u||wl)}function c(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:a,finish:c,sort:h}}function Fm(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new Ml,r.set(i,[o])):n>=s.length?(o=new Ml,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Om(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new je};break;case"SpotLight":t={position:new E,direction:new E,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function Bm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zm=0;function Hm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gm(r){const e=new Om,t=Bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new E);const n=new E,s=new at,o=new at;function l(h){let c=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,b=0,w=0,I=0,P=0,R=0;h.sort(Hm);for(let T=0,M=h.length;T<M;T++){const k=h[T],X=k.color,V=k.intensity,Z=k.distance,ie=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)c+=X.r*V,d+=X.g*V,u+=X.b*V;else if(k.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(k.sh.coefficients[$],V);R++}else if(k.isDirectionalLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const se=k.shadow,q=t.get(k);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=ie,i.directionalShadowMatrix[f]=k.shadow.matrix,x++}i.directional[f]=$,f++}else if(k.isSpotLight){const $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(X).multiplyScalar(V),$.distance=Z,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,i.spot[v]=$;const se=k.shadow;if(k.map&&(i.spotLightMap[I]=k.map,I++,se.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[v]=se.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=ie,w++}v++}else if(k.isRectAreaLight){const $=e.get(k);$.color.copy(X).multiplyScalar(V),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),i.rectArea[g]=$,g++}else if(k.isPointLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){const se=k.shadow,q=t.get(k);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=ie,i.pointShadowMatrix[m]=k.shadow.matrix,b++}i.point[m]=$,m++}else if(k.isHemisphereLight){const $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(V),$.groundColor.copy(k.groundColor).multiplyScalar(V),i.hemi[p]=$,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==I||L.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=v,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=I,L.numLightProbes=R,i.version=zm++)}function a(h,c){let d=0,u=0,f=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const b=h[p];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),d++}else if(b.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const w=i.rectArea[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(b.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const w=i.point[u];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),u++}else if(b.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:l,setupView:a,state:i}}function Sl(r){const e=new Gm(r),t=[],i=[];function n(c){h.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function l(){e.setup(t)}function a(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:l,setupLightsView:a,pushLight:s,pushShadow:o}}function Wm(r){let e=new WeakMap;function t(n,s=0){const o=e.get(n);let l;return o===void 0?(l=new Sl(r),e.set(n,[l])):s>=o.length?(l=new Sl(r),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}class Vm extends Yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ym(r,e,t){let i=new oa;const n=new le,s=new le,o=new ht,l=new Vm({depthPacking:Tc}),a=new Xm,h={},c=t.maxTextureSize,d={[ji]:Bt,[Bt]:ji,[jt]:jt},u=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:jm,fragmentShader:qm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new Tt;m.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new B(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let p=this.type;this.render=function(P,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const T=r.getRenderTarget(),M=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Ci),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=p!==Ti&&this.type===Ti,Z=p===Ti&&this.type!==Ti;for(let ie=0,$=P.length;ie<$;ie++){const se=P[ie],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const ue=q.getFrameExtents();if(n.multiply(ue),s.copy(q.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/ue.x),n.x=s.x*ue.x,q.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/ue.y),n.y=s.y*ue.y,q.mapSize.y=s.y)),q.map===null||V===!0||Z===!0){const Pe=this.type!==Ti?{minFilter:qt,magFilter:qt}:{};q.map!==null&&q.map.dispose(),q.map=new ci(n.x,n.y,Pe),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const xe=q.getViewportCount();for(let Pe=0;Pe<xe;Pe++){const qe=q.getViewport(Pe);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),X.viewport(o),q.updateMatrices(se,Pe),i=q.getFrustum(),w(R,L,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===Ti&&x(q,L),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(T,M,k)};function x(P,R){const L=e.update(v);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ci(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(R,null,L,u,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(R,null,L,f,v,null)}function b(P,R,L,T){let M=null;const k=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)M=k;else if(M=L.isPointLight===!0?a:l,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=M.uuid,V=R.uuid;let Z=h[X];Z===void 0&&(Z={},h[X]=Z);let ie=Z[V];ie===void 0&&(ie=M.clone(),Z[V]=ie,R.addEventListener("dispose",I)),M=ie}if(M.visible=R.visible,M.wireframe=R.wireframe,T===Ti?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=r.properties.get(M);X.light=L}return M}function w(P,R,L,T,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Ti)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const V=e.update(P),Z=P.material;if(Array.isArray(Z)){const ie=V.groups;for(let $=0,se=ie.length;$<se;$++){const q=ie[$],ue=Z[q.materialIndex];if(ue&&ue.visible){const xe=b(P,ue,T,M);P.onBeforeShadow(r,P,R,L,V,xe,q),r.renderBufferDirect(L,null,V,xe,P,q),P.onAfterShadow(r,P,R,L,V,xe,q)}}}else if(Z.visible){const ie=b(P,Z,T,M);P.onBeforeShadow(r,P,R,L,V,ie,null),r.renderBufferDirect(L,null,V,ie,P,null),P.onAfterShadow(r,P,R,L,V,ie,null)}}const X=P.children;for(let V=0,Z=X.length;V<Z;V++)w(X[V],R,L,T,M)}function I(P){P.target.removeEventListener("dispose",I);for(const L in h){const T=h[L],M=P.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const $m={[ao]:lo,[ho]:fo,[co]:po,[Fn]:uo,[lo]:ao,[fo]:ho,[po]:co,[uo]:Fn};function Km(r,e){function t(){let N=!1;const ce=new ht;let j=null;const te=new ht(0,0,0,0);return{setMask:function(ve){j!==ve&&!N&&(r.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){N=ve},setClear:function(ve,me,Be,yt,Rt){Rt===!0&&(ve*=yt,me*=yt,Be*=yt),ce.set(ve,me,Be,yt),te.equals(ce)===!1&&(r.clearColor(ve,me,Be,yt),te.copy(ce))},reset:function(){N=!1,j=null,te.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,j=null,te=null,ve=null;return{setReversed:function(me){if(ce!==me){const Be=e.get("EXT_clip_control");ce?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=ve;ve=null,this.setClear(yt)}ce=me},getReversed:function(){return ce},setTest:function(me){me?fe(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(me){j!==me&&!N&&(r.depthMask(me),j=me)},setFunc:function(me){if(ce&&(me=$m[me]),te!==me){switch(me){case ao:r.depthFunc(r.NEVER);break;case lo:r.depthFunc(r.ALWAYS);break;case ho:r.depthFunc(r.LESS);break;case Fn:r.depthFunc(r.LEQUAL);break;case co:r.depthFunc(r.EQUAL);break;case uo:r.depthFunc(r.GEQUAL);break;case fo:r.depthFunc(r.GREATER);break;case po:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=me}},setLocked:function(me){N=me},setClear:function(me){ve!==me&&(ce&&(me=1-me),r.clearDepth(me),ve=me)},reset:function(){N=!1,j=null,te=null,ve=null,ce=!1}}}function n(){let N=!1,ce=null,j=null,te=null,ve=null,me=null,Be=null,yt=null,Rt=null;return{setTest:function(ot){N||(ot?fe(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(ot){ce!==ot&&!N&&(r.stencilMask(ot),ce=ot)},setFunc:function(ot,ii,xi){(j!==ot||te!==ii||ve!==xi)&&(r.stencilFunc(ot,ii,xi),j=ot,te=ii,ve=xi)},setOp:function(ot,ii,xi){(me!==ot||Be!==ii||yt!==xi)&&(r.stencilOp(ot,ii,xi),me=ot,Be=ii,yt=xi)},setLocked:function(ot){N=ot},setClear:function(ot){Rt!==ot&&(r.clearStencil(ot),Rt=ot)},reset:function(){N=!1,ce=null,j=null,te=null,ve=null,me=null,Be=null,yt=null,Rt=null}}}const s=new t,o=new i,l=new n,a=new WeakMap,h=new WeakMap;let c={},d={},u=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,b=null,w=null,I=null,P=null,R=new je(0,0,0),L=0,T=!1,M=null,k=null,X=null,V=null,Z=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,se=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=se>=2);let ue=null,xe={};const Pe=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),ct=new ht().fromArray(Pe),Q=new ht().fromArray(qe);function ae(N,ce,j,te){const ve=new Uint8Array(4),me=r.createTexture();r.bindTexture(N,me),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<j;Be++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(ce+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return me}const Ee={};Ee[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),fe(r.DEPTH_TEST),o.setFunc(Fn),Ke(!1),Ze(Ea),fe(r.CULL_FACE),O(Ci);function fe(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function Ne(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function Oe(N,ce){return d[N]!==ce?(r.bindFramebuffer(N,ce),d[N]=ce,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ce),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ye(N,ce){let j=f,te=!1;if(N){j=u.get(ce),j===void 0&&(j=[],u.set(ce,j));const ve=N.textures;if(j.length!==ve.length||j[0]!==r.COLOR_ATTACHMENT0){for(let me=0,Be=ve.length;me<Be;me++)j[me]=r.COLOR_ATTACHMENT0+me;j.length=ve.length,te=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,te=!0);te&&r.drawBuffers(j)}function xt(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const Qe={[rn]:r.FUNC_ADD,[Jh]:r.FUNC_SUBTRACT,[Qh]:r.FUNC_REVERSE_SUBTRACT};Qe[ec]=r.MIN,Qe[tc]=r.MAX;const _t={[ic]:r.ZERO,[nc]:r.ONE,[sc]:r.SRC_COLOR,[ro]:r.SRC_ALPHA,[cc]:r.SRC_ALPHA_SATURATE,[lc]:r.DST_COLOR,[oc]:r.DST_ALPHA,[rc]:r.ONE_MINUS_SRC_COLOR,[oo]:r.ONE_MINUS_SRC_ALPHA,[hc]:r.ONE_MINUS_DST_COLOR,[ac]:r.ONE_MINUS_DST_ALPHA,[dc]:r.CONSTANT_COLOR,[uc]:r.ONE_MINUS_CONSTANT_COLOR,[fc]:r.CONSTANT_ALPHA,[pc]:r.ONE_MINUS_CONSTANT_ALPHA};function O(N,ce,j,te,ve,me,Be,yt,Rt,ot){if(N===Ci){v===!0&&(Ne(r.BLEND),v=!1);return}if(v===!1&&(fe(r.BLEND),v=!0),N!==Zh){if(N!==g||ot!==T){if((p!==rn||w!==rn)&&(r.blendEquation(r.FUNC_ADD),p=rn,w=rn),ot)switch(N){case kn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case so:r.blendFunc(r.ONE,r.ONE);break;case Aa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ca:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case kn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case so:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Aa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ca:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,b=null,I=null,P=null,R.set(0,0,0),L=0,g=N,T=ot}return}ve=ve||ce,me=me||j,Be=Be||te,(ce!==p||ve!==w)&&(r.blendEquationSeparate(Qe[ce],Qe[ve]),p=ce,w=ve),(j!==x||te!==b||me!==I||Be!==P)&&(r.blendFuncSeparate(_t[j],_t[te],_t[me],_t[Be]),x=j,b=te,I=me,P=Be),(yt.equals(R)===!1||Rt!==L)&&(r.blendColor(yt.r,yt.g,yt.b,Rt),R.copy(yt),L=Rt),g=N,T=!1}function $t(N,ce){N.side===jt?Ne(r.CULL_FACE):fe(r.CULL_FACE);let j=N.side===Bt;ce&&(j=!j),Ke(j),N.blending===kn&&N.transparent===!1?O(Ci):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const te=N.stencilWrite;l.setTest(te),te&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){M!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),M=N)}function Ze(N){N!==qh?(fe(r.CULL_FACE),N!==k&&(N===Ea?r.cullFace(r.BACK):N===Yh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),k=N}function Le(N){N!==X&&($&&r.lineWidth(N),X=N)}function ft(N,ce,j){N?(fe(r.POLYGON_OFFSET_FILL),(V!==ce||Z!==j)&&(r.polygonOffset(ce,j),V=ce,Z=j)):Ne(r.POLYGON_OFFSET_FILL)}function Re(N){N?fe(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function C(N){N===void 0&&(N=r.TEXTURE0+ie-1),ue!==N&&(r.activeTexture(N),ue=N)}function _(N,ce,j){j===void 0&&(ue===null?j=r.TEXTURE0+ie-1:j=ue);let te=xe[j];te===void 0&&(te={type:void 0,texture:void 0},xe[j]=te),(te.type!==N||te.texture!==ce)&&(ue!==j&&(r.activeTexture(j),ue=j),r.bindTexture(N,ce||Ee[N]),te.type=N,te.texture=ce)}function z(){const N=xe[ue];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){ct.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function we(N){Q.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Je(N,ce){let j=h.get(ce);j===void 0&&(j=new WeakMap,h.set(ce,j));let te=j.get(N);te===void 0&&(te=r.getUniformBlockIndex(ce,N.name),j.set(N,te))}function Ge(N,ce){const te=h.get(ce).get(N);a.get(ce)!==te&&(r.uniformBlockBinding(ce,te,N.__bindingPointIndex),a.set(ce,te))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},ue=null,xe={},d={},u=new WeakMap,f=[],m=null,v=!1,g=null,p=null,x=null,b=null,w=null,I=null,P=null,R=new je(0,0,0),L=0,T=!1,M=null,k=null,X=null,V=null,Z=null,ct.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:fe,disable:Ne,bindFramebuffer:Oe,drawBuffers:Ye,useProgram:xt,setBlending:O,setMaterial:$t,setFlipSided:Ke,setCullFace:Ze,setLineWidth:Le,setPolygonOffset:ft,setScissorTest:Re,activeTexture:C,bindTexture:_,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:_e,texImage3D:De,updateUBOMapping:Je,uniformBlockBinding:Ge,texStorage2D:et,texStorage3D:re,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Ue,viewport:we,reset:dt}}function bl(r,e,t,i){const n=Zm(i);switch(t){case ah:return r*e;case hh:return r*e;case ch:return r*e*2;case Qo:return r*e/n.components*n.byteLength;case ea:return r*e/n.components*n.byteLength;case dh:return r*e*2/n.components*n.byteLength;case ta:return r*e*2/n.components*n.byteLength;case lh:return r*e*3/n.components*n.byteLength;case hi:return r*e*4/n.components*n.byteLength;case ia:return r*e*4/n.components*n.byteLength;case Zs:case Js:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qs:case er:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yo:case wo:return Math.max(r,16)*Math.max(e,8)/4;case xo:case _o:return Math.max(r,8)*Math.max(e,8)/2;case Mo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tr:case Bo:case zo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uh:case Ho:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Go:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zm(r){switch(r){case Li:case sh:return{byteLength:1,components:1};case fs:case rh:case Pi:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case hn:case Ko:case fi:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Jm(r,e,t,i,n,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,_){return f?new OffscreenCanvas(C,_):or("canvas")}function v(C,_,z){let ee=1;const ne=Re(C);if((ne.width>z||ne.height>z)&&(ee=z/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(ee*ne.width),Ae=Math.floor(ee*ne.height);d===void 0&&(d=m(J,Ae));const pe=_?m(J,Ae):d;return pe.width=J,pe.height=Ae,pe.getContext("2d").drawImage(C,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ae+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(C,_,z,ee,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=_;if(_===r.RED&&(z===r.FLOAT&&(J=r.R32F),z===r.HALF_FLOAT&&(J=r.R16F),z===r.UNSIGNED_BYTE&&(J=r.R8)),_===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.R8UI),z===r.UNSIGNED_SHORT&&(J=r.R16UI),z===r.UNSIGNED_INT&&(J=r.R32UI),z===r.BYTE&&(J=r.R8I),z===r.SHORT&&(J=r.R16I),z===r.INT&&(J=r.R32I)),_===r.RG&&(z===r.FLOAT&&(J=r.RG32F),z===r.HALF_FLOAT&&(J=r.RG16F),z===r.UNSIGNED_BYTE&&(J=r.RG8)),_===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.RG8UI),z===r.UNSIGNED_SHORT&&(J=r.RG16UI),z===r.UNSIGNED_INT&&(J=r.RG32UI),z===r.BYTE&&(J=r.RG8I),z===r.SHORT&&(J=r.RG16I),z===r.INT&&(J=r.RG32I)),_===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.RGB8UI),z===r.UNSIGNED_SHORT&&(J=r.RGB16UI),z===r.UNSIGNED_INT&&(J=r.RGB32UI),z===r.BYTE&&(J=r.RGB8I),z===r.SHORT&&(J=r.RGB16I),z===r.INT&&(J=r.RGB32I)),_===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),z===r.UNSIGNED_INT&&(J=r.RGBA32UI),z===r.BYTE&&(J=r.RGBA8I),z===r.SHORT&&(J=r.RGBA16I),z===r.INT&&(J=r.RGBA32I)),_===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),_===r.RGBA){const Ae=ne?ur:tt.getTransfer(ee);z===r.FLOAT&&(J=r.RGBA32F),z===r.HALF_FLOAT&&(J=r.RGBA16F),z===r.UNSIGNED_BYTE&&(J=Ae===lt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(C,_){let z;return C?_===null||_===hn||_===zn?z=r.DEPTH24_STENCIL8:_===fi?z=r.DEPTH32F_STENCIL8:_===fs&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hn||_===zn?z=r.DEPTH_COMPONENT24:_===fi?z=r.DEPTH_COMPONENT32F:_===fs&&(z=r.DEPTH_COMPONENT16),z}function I(C,_){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==li?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function P(C){const _=C.target;_.removeEventListener("dispose",P),L(_),_.isVideoTexture&&c.delete(_)}function R(C){const _=C.target;_.removeEventListener("dispose",R),M(_)}function L(C){const _=i.get(C);if(_.__webglInit===void 0)return;const z=C.source,ee=u.get(z);if(ee){const ne=ee[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(C),Object.keys(ee).length===0&&u.delete(z)}i.remove(C)}function T(C){const _=i.get(C);r.deleteTexture(_.__webglTexture);const z=C.source,ee=u.get(z);delete ee[_.__cacheKey],o.memory.textures--}function M(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let ne=0;ne<_.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(_.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)r.deleteFramebuffer(_.__webglFramebuffer[ee]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=C.textures;for(let ee=0,ne=z.length;ee<ne;ee++){const J=i.get(z[ee]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(C)}let k=0;function X(){k=0}function V(){const C=k;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),k+=1,C}function Z(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function ie(C,_){const z=i.get(C);if(C.isVideoTexture&&Le(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,C,_);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+_)}function $(C,_){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Q(z,C,_);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+_)}function se(C,_){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Q(z,C,_);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+_)}function q(C,_){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ae(z,C,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+_)}const ue={[sr]:r.REPEAT,[an]:r.CLAMP_TO_EDGE,[vo]:r.MIRRORED_REPEAT},xe={[qt]:r.NEAREST,[Sc]:r.NEAREST_MIPMAP_NEAREST,[_s]:r.NEAREST_MIPMAP_LINEAR,[li]:r.LINEAR,[xr]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},Pe={[Ac]:r.NEVER,[kc]:r.ALWAYS,[Cc]:r.LESS,[ph]:r.LEQUAL,[Pc]:r.EQUAL,[Dc]:r.GEQUAL,[Rc]:r.GREATER,[Lc]:r.NOTEQUAL};function qe(C,_){if(_.type===fi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===li||_.magFilter===xr||_.magFilter===_s||_.magFilter===Wi||_.minFilter===li||_.minFilter===xr||_.minFilter===_s||_.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ue[_.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ue[_.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ue[_.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,xe[_.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==_s&&_.minFilter!==Wi||_.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ct(C,_){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",P));const ee=_.source;let ne=u.get(ee);ne===void 0&&(ne={},u.set(ee,ne));const J=Z(_);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[J].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(_)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return z}function Q(C,_,z){let ee=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=r.TEXTURE_3D);const ne=ct(C,_),J=_.source;t.bindTexture(ee,C.__webglTexture,r.TEXTURE0+z);const Ae=i.get(J);if(J.version!==Ae.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),ye=_.colorSpace===Ei?null:tt.getPrimaries(_.colorSpace),et=_.colorSpace===Ei||pe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let re=v(_.image,!1,n.maxTextureSize);re=ft(_,re);const _e=s.convert(_.format,_.colorSpace),De=s.convert(_.type);let Ue=b(_.internalFormat,_e,De,_.colorSpace,_.isVideoTexture);qe(ee,_);let we;const Je=_.mipmaps,Ge=_.isVideoTexture!==!0,dt=Ae.__version===void 0||ne===!0,N=J.dataReady,ce=I(_,re);if(_.isDepthTexture)Ue=w(_.format===Hn,_.type),dt&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ue,re.width,re.height,0,_e,De,null));else if(_.isDataTexture)if(Je.length>0){Ge&&dt&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,Je[0].width,Je[0].height);for(let j=0,te=Je.length;j<te;j++)we=Je[j],Ge?N&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,we.width,we.height,_e,De,we.data):t.texImage2D(r.TEXTURE_2D,j,Ue,we.width,we.height,0,_e,De,we.data);_.generateMipmaps=!1}else Ge?(dt&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,re.width,re.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,_e,De,re.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,re.width,re.height,0,_e,De,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ue,Je[0].width,Je[0].height,re.depth);for(let j=0,te=Je.length;j<te;j++)if(we=Je[j],_.format!==hi)if(_e!==null)if(Ge){if(N)if(_.layerUpdates.size>0){const ve=bl(we.width,we.height,_.format,_.type);for(const me of _.layerUpdates){const Be=we.data.subarray(me*ve/we.data.BYTES_PER_ELEMENT,(me+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,me,we.width,we.height,1,_e,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,re.depth,_e,we.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Ue,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,re.depth,_e,De,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Ue,we.width,we.height,re.depth,0,_e,De,we.data)}else{Ge&&dt&&t.texStorage2D(r.TEXTURE_2D,ce,Ue,Je[0].width,Je[0].height);for(let j=0,te=Je.length;j<te;j++)we=Je[j],_.format!==hi?_e!==null?Ge?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,we.width,we.height,_e,we.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?N&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,we.width,we.height,_e,De,we.data):t.texImage2D(r.TEXTURE_2D,j,Ue,we.width,we.height,0,_e,De,we.data)}else if(_.isDataArrayTexture)if(Ge){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ue,re.width,re.height,re.depth),N)if(_.layerUpdates.size>0){const j=bl(re.width,re.height,_.format,_.type);for(const te of _.layerUpdates){const ve=re.data.subarray(te*j/re.data.BYTES_PER_ELEMENT,(te+1)*j/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,_e,De,ve)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,De,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,_e,De,re.data);else if(_.isData3DTexture)Ge?(dt&&t.texStorage3D(r.TEXTURE_3D,ce,Ue,re.width,re.height,re.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,De,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,_e,De,re.data);else if(_.isFramebufferTexture){if(dt)if(Ge)t.texStorage2D(r.TEXTURE_2D,ce,Ue,re.width,re.height);else{let j=re.width,te=re.height;for(let ve=0;ve<ce;ve++)t.texImage2D(r.TEXTURE_2D,ve,Ue,j,te,0,_e,De,null),j>>=1,te>>=1}}else if(Je.length>0){if(Ge&&dt){const j=Re(Je[0]);t.texStorage2D(r.TEXTURE_2D,ce,Ue,j.width,j.height)}for(let j=0,te=Je.length;j<te;j++)we=Je[j],Ge?N&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,_e,De,we):t.texImage2D(r.TEXTURE_2D,j,Ue,_e,De,we);_.generateMipmaps=!1}else if(Ge){if(dt){const j=Re(re);t.texStorage2D(r.TEXTURE_2D,ce,Ue,j.width,j.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,De,re)}else t.texImage2D(r.TEXTURE_2D,0,Ue,_e,De,re);g(_)&&p(ee),Ae.__version=J.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function ae(C,_,z){if(_.image.length!==6)return;const ee=ct(C,_),ne=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);const J=i.get(ne);if(ne.version!==J.__version||ee===!0){t.activeTexture(r.TEXTURE0+z);const Ae=tt.getPrimaries(tt.workingColorSpace),pe=_.colorSpace===Ei?null:tt.getPrimaries(_.colorSpace),ye=_.colorSpace===Ei||Ae===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const et=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!et&&!re?_e[te]=v(_.image[te],!0,n.maxCubemapSize):_e[te]=re?_.image[te].image:_.image[te],_e[te]=ft(_,_e[te]);const De=_e[0],Ue=s.convert(_.format,_.colorSpace),we=s.convert(_.type),Je=b(_.internalFormat,Ue,we,_.colorSpace),Ge=_.isVideoTexture!==!0,dt=J.__version===void 0||ee===!0,N=ne.dataReady;let ce=I(_,De);qe(r.TEXTURE_CUBE_MAP,_);let j;if(et){Ge&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Je,De.width,De.height);for(let te=0;te<6;te++){j=_e[te].mipmaps;for(let ve=0;ve<j.length;ve++){const me=j[ve];_.format!==hi?Ue!==null?Ge?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Ue,we,me.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Je,me.width,me.height,0,Ue,we,me.data)}}}else{if(j=_.mipmaps,Ge&&dt){j.length>0&&ce++;const te=Re(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Je,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ge?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ue,we,_e[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,_e[te].width,_e[te].height,0,Ue,we,_e[te].data);for(let ve=0;ve<j.length;ve++){const Be=j[ve].image[te].image;Ge?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Be.width,Be.height,Ue,we,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Je,Be.width,Be.height,0,Ue,we,Be.data)}}else{Ge?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,we,_e[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ue,we,_e[te]);for(let ve=0;ve<j.length;ve++){const me=j[ve];Ge?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Ue,we,me.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Je,Ue,we,me.image[te])}}}g(_)&&p(r.TEXTURE_CUBE_MAP),J.__version=ne.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ee(C,_,z,ee,ne,J){const Ae=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),ye=b(z.internalFormat,Ae,pe,z.colorSpace),et=i.get(_),re=i.get(z);if(re.__renderTarget=_,!et.__hasExternalTextures){const _e=Math.max(1,_.width>>J),De=Math.max(1,_.height>>J);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,ye,_e,De,_.depth,0,Ae,pe,null):t.texImage2D(ne,J,ye,_e,De,0,Ae,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ze(_)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ne,re.__webglTexture,0,Ke(_)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ne,re.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(C,_,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),_.depthBuffer){const ee=_.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,J=w(_.stencilBuffer,ne),Ae=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=Ke(_);Ze(_)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,J,_.width,_.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,J,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,J,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,C)}else{const ee=_.textures;for(let ne=0;ne<ee.length;ne++){const J=ee[ne],Ae=s.convert(J.format,J.colorSpace),pe=s.convert(J.type),ye=b(J.internalFormat,Ae,pe,J.colorSpace),et=Ke(_);z&&Ze(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,ye,_.width,_.height):Ze(_)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,ye,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ye,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(_.depthTexture);ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);const ne=ee.__webglTexture,J=Ke(_);if(_.depthTexture.format===In)Ze(_)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Hn)Ze(_)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(C){const _=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=ee}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(_.__webglFramebuffer,C)}else if(z){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=r.createRenderbuffer(),fe(_.__webglDepthbuffer[ee],C,!1);else{const ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),fe(_.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(C,_,z){const ee=i.get(C);_!==void 0&&Ee(ee.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Oe(C)}function xt(C){const _=C.texture,z=i.get(C),ee=i.get(_);C.addEventListener("dispose",R);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=_.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)z.__webglFramebuffer[pe][ye]=r.createFramebuffer()}else z.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)z.__webglFramebuffer[pe]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let pe=0,ye=ne.length;pe<ye;pe++){const et=i.get(ne[pe]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ze(C)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const ye=ne[pe];z.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const et=s.convert(ye.format,ye.colorSpace),re=s.convert(ye.type),_e=b(ye.internalFormat,et,re,ye.colorSpace,C.isXRRenderTarget===!0),De=Ke(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,_e,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),qe(r.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Ee(z.__webglFramebuffer[pe][ye],C,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else Ee(z.__webglFramebuffer[pe],C,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(_)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ye=ne.length;pe<ye;pe++){const et=ne[pe],re=i.get(et);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),qe(r.TEXTURE_2D,et),Ee(z.__webglFramebuffer,C,et,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,0),g(et)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),qe(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Ee(z.__webglFramebuffer[ye],C,_,r.COLOR_ATTACHMENT0,pe,ye);else Ee(z.__webglFramebuffer,C,_,r.COLOR_ATTACHMENT0,pe,0);g(_)&&p(pe),t.unbindTexture()}C.depthBuffer&&Oe(C)}function Qe(C){const _=C.textures;for(let z=0,ee=_.length;z<ee;z++){const ne=_[z];if(g(ne)){const J=x(C),Ae=i.get(ne).__webglTexture;t.bindTexture(J,Ae),p(J),t.unbindTexture()}}}const _t=[],O=[];function $t(C){if(C.samples>0){if(Ze(C)===!1){const _=C.textures,z=C.width,ee=C.height;let ne=r.COLOR_BUFFER_BIT;const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=i.get(C),pe=_.length>1;if(pe)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const et=i.get(_[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,z,ee,0,0,z,ee,ne,r.NEAREST),a===!0&&(_t.length=0,O.length=0,_t.push(r.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_t.push(J),O.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const et=i.get(_[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&a){const _=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function Ke(C){return Math.min(n.maxSamples,C.samples)}function Ze(C){const _=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Le(C){const _=o.render.frame;c.get(C)!==_&&(c.set(C,_),C.update())}function ft(C,_){const z=C.colorSpace,ee=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Vn&&z!==Ei&&(tt.getTransfer(z)===lt?(ee!==hi||ne!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=Ye,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ze}function Qm(r,e){function t(i,n=Ei){let s;const o=tt.getTransfer(n);if(i===Li)return r.UNSIGNED_BYTE;if(i===Zo)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===oh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===sh)return r.BYTE;if(i===rh)return r.SHORT;if(i===fs)return r.UNSIGNED_SHORT;if(i===Ko)return r.INT;if(i===hn)return r.UNSIGNED_INT;if(i===fi)return r.FLOAT;if(i===Pi)return r.HALF_FLOAT;if(i===ah)return r.ALPHA;if(i===lh)return r.RGB;if(i===hi)return r.RGBA;if(i===hh)return r.LUMINANCE;if(i===ch)return r.LUMINANCE_ALPHA;if(i===In)return r.DEPTH_COMPONENT;if(i===Hn)return r.DEPTH_STENCIL;if(i===Qo)return r.RED;if(i===ea)return r.RED_INTEGER;if(i===dh)return r.RG;if(i===ta)return r.RG_INTEGER;if(i===ia)return r.RGBA_INTEGER;if(i===Zs||i===Js||i===Qs||i===er)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xo||i===yo||i===_o||i===wo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===So||i===bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mo||i===So)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===To||i===Eo||i===Ao||i===Co||i===Po||i===Ro||i===Lo||i===Do||i===ko||i===Io||i===No||i===Uo||i===Fo||i===Oo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===To)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ro)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ko)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Io)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tr||i===Bo||i===zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tr)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uh||i===Ho||i===Go||i===Wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class eg extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const l=this._targetRay,a=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return l!==null&&(l.visible=n!==null),a!==null&&(a.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new kt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ot({vertexShader:ig,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends Xn{constructor(e,t){super();const i=this;let n=null,s=1,o=null,l="local-floor",a=1,h=null,c=null,d=null,u=null,f=null,m=null;const v=new sg,g=t.getContextAttributes();let p=null,x=null;const b=[],w=[],I=new le;let P=null;const R=new Xt;R.viewport=new ht;const L=new Xt;L.viewport=new ht;const T=[R,L],M=new eg;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=b[Q];return ae===void 0&&(ae=new Xr,b[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=b[Q];return ae===void 0&&(ae=new Xr,b[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=b[Q];return ae===void 0&&(ae=new Xr,b[Q]=ae),ae.getHandSpace()};function V(Q){const ae=w.indexOf(Q.inputSource);if(ae===-1)return;const Ee=b[ae];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,h||o),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",Z),n.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<b.length;Q++){const ae=w[Q];ae!==null&&(w[Q]=null,b[Q].disconnect(ae))}k=null,X=null,v.reset(),e.setRenderTarget(p),f=null,u=null,d=null,n=null,x=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",Z),n.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),n.renderState.layers===void 0){const ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,Ee=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?Hn:In,Ee=g.stencil?zn:hn);const Ne={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Ne),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ci(u.textureWidth,u.textureHeight,{format:hi,type:Li,depthTexture:new Th(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(a),h=null,o=await n.requestReferenceSpace(l),ct.setContext(n),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(Q){for(let ae=0;ae<Q.removed.length;ae++){const Ee=Q.removed[ae],fe=w.indexOf(Ee);fe>=0&&(w[fe]=null,b[fe].disconnect(Ee))}for(let ae=0;ae<Q.added.length;ae++){const Ee=Q.added[ae];let fe=w.indexOf(Ee);if(fe===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=w.length){w.push(Ee),fe=Oe;break}else if(w[Oe]===null){w[Oe]=Ee,fe=Oe;break}if(fe===-1)break}const Ne=b[fe];Ne&&Ne.connect(Ee)}}const $=new E,se=new E;function q(Q,ae,Ee){$.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(Ee.matrixWorld);const fe=$.distanceTo(se),Ne=ae.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,Ye=Ne[14]/(Ne[10]-1),xt=Ne[14]/(Ne[10]+1),Qe=(Ne[9]+1)/Ne[5],_t=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],$t=(Oe[8]+1)/Oe[0],Ke=Ye*O,Ze=Ye*$t,Le=fe/(-O+$t),ft=Le*-O;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(Le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Re=Ye+Le,C=xt+Le,_=Ke-ft,z=Ze+(fe-ft),ee=Qe*xt/C*Re,ne=_t*xt/C*Re;Q.projectionMatrix.makePerspective(_,z,ee,ne,Re,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let ae=Q.near,Ee=Q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),M.near=L.near=R.near=ae,M.far=L.far=R.far=Ee,(k!==M.near||X!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,X=M.far),R.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const fe=Q.parent,Ne=M.cameras;ue(M,fe);for(let Oe=0;Oe<Ne.length;Oe++)ue(Ne[Oe],fe);Ne.length===2?q(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),xe(Q,M,fe)};function xe(Q,ae,Ee){Ee===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ps*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return a},this.setFoveation=function(Q){a=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Pe=null;function qe(Q,ae){if(c=ae.getViewerPose(h||o),m=ae,c!==null){const Ee=c.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let fe=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Oe=0;Oe<Ee.length;Oe++){const Ye=Ee[Oe];let xt=null;if(f!==null)xt=f.getViewport(Ye);else{const _t=d.getViewSubImage(u,Ye);xt=_t.viewport,Oe===0&&(e.setRenderTargetTextures(x,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(x))}let Qe=T[Oe];Qe===void 0&&(Qe=new Xt,Qe.layers.enable(Oe),Qe.viewport=new ht,T[Oe]=Qe),Qe.matrix.fromArray(Ye.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ye.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),Oe===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Qe)}const Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Oe=d.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,n.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const fe=w[Ee],Ne=b[Ee];fe!==null&&Ne!==void 0&&Ne.update(fe,ae,h||o)}Pe&&Pe(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}const ct=new bh;ct.setAnimationLoop(qe),this.setAnimationLoop=function(Q){Pe=Q},this.dispose=function(){}}}const Qi=new gi,og=new at;function ag(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,wh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,b,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),c(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?a(g,p,x,b):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Bt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Bt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,w=x.envMapRotation;b&&(g.envMap.value=b,Qi.copy(w),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),g.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(Qi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,x,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function lg(r,e,t,i){let n={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function a(x,b){const w=b.program;i.uniformBlockBinding(x,w)}function h(x,b){let w=n[x.id];w===void 0&&(m(x),w=c(x),n[x.id]=w,x.addEventListener("dispose",g));const I=b.program;i.updateUBOMapping(x,I);const P=e.render.frame;s[x.id]!==P&&(u(x),s[x.id]=P)}function c(x){const b=d();x.__bindingPointIndex=b;const w=r.createBuffer(),I=x.__size,P=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,I,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,w),w}function d(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const b=n[x.id],w=x.uniforms,I=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let P=0,R=w.length;P<R;P++){const L=Array.isArray(w[P])?w[P]:[w[P]];for(let T=0,M=L.length;T<M;T++){const k=L[T];if(f(k,P,T,I)===!0){const X=k.__offset,V=Array.isArray(k.value)?k.value:[k.value];let Z=0;for(let ie=0;ie<V.length;ie++){const $=V[ie],se=v($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,X+Z,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,Z),Z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,b,w,I){const P=x.value,R=b+"_"+w;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const L=I[R];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return I[R]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function m(x){const b=x.uniforms;let w=0;const I=16;for(let R=0,L=b.length;R<L;R++){const T=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,k=T.length;M<k;M++){const X=T[M],V=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,ie=V.length;Z<ie;Z++){const $=V[Z],se=v($),q=w%I,ue=q%se.boundary,xe=q+ue;w+=ue,xe!==0&&I-xe<se.storage&&(w+=I-xe),X.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=se.storage}}}const P=w%I;return P>0&&(w+=I-P),x.__size=w,x.__cache={},this}function v(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function g(x){const b=x.target;b.removeEventListener("dispose",g);const w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function p(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:a,update:h,dispose:p}}class hg{constructor(e={}){const{canvas:t=Zc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Xi,this.toneMappingExposure=1;const w=this;let I=!1,P=0,R=0,L=null,T=-1,M=null;const k=new ht,X=new ht;let V=null;const Z=new je(0);let ie=0,$=t.width,se=t.height,q=1,ue=null,xe=null;const Pe=new ht(0,0,$,se),qe=new ht(0,0,$,se);let ct=!1;const Q=new oa;let ae=!1,Ee=!1;const fe=new at,Ne=new at,Oe=new E,Ye=new ht,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function _t(){return L===null?q:1}let O=i;function $t(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:n,stencil:s,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){const U="webgl2";if(O=$t(U,S),O===null)throw $t(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ke,Ze,Le,ft,Re,C,_,z,ee,ne,J,Ae,pe,ye,et,re,_e,De,Ue,we,Je,Ge,dt,N;function ce(){Ke=new pp(O),Ke.init(),Ge=new Qm(O,Ke),Ze=new lp(O,Ke,e,Ge),Le=new Km(O,Ke),Ze.reverseDepthBuffer&&u&&Le.buffers.depth.setReversed(!0),ft=new vp(O),Re=new Nm,C=new Jm(O,Ke,Le,Re,Ze,Ge,ft),_=new cp(w),z=new fp(w),ee=new Sd(O),dt=new op(O,ee),ne=new mp(O,ee,ft,dt),J=new yp(O,ne,ee,ft),Ue=new xp(O,Ze,C),re=new hp(Re),Ae=new Im(w,_,z,Ke,Ze,dt,re),pe=new ag(w,Re),ye=new Fm,et=new Wm(Ke),De=new rp(w,_,z,Le,J,f,a),_e=new Ym(w,J,Ze),N=new lg(O,ft,Ze,Le),we=new ap(O,Ke,ft),Je=new gp(O,Ke,ft),ft.programs=Ae.programs,w.capabilities=Ze,w.extensions=Ke,w.properties=Re,w.renderLists=ye,w.shadowMap=_e,w.state=Le,w.info=ft}ce();const j=new rg(w,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize($,se,!1))},this.getSize=function(S){return S.set($,se)},this.setSize=function(S,U,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,se=U,t.width=Math.floor(S*q),t.height=Math.floor(U*q),G===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set($*q,se*q).floor()},this.setDrawingBufferSize=function(S,U,G){$=S,se=U,q=G,t.width=Math.floor(S*G),t.height=Math.floor(U*G),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(k)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,U,G,W){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,U,G,W),Le.viewport(k.copy(Pe).multiplyScalar(q).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,U,G,W){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,U,G,W),Le.scissor(X.copy(qe).multiplyScalar(q).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){Le.setScissorTest(ct=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(S=!0,U=!0,G=!0){let W=0;if(S){let F=!1;if(L!==null){const oe=L.texture.format;F=oe===ia||oe===ta||oe===ea}if(F){const oe=L.texture.type,ge=oe===Li||oe===hn||oe===fs||oe===zn||oe===Zo||oe===Jo,Se=De.getClearColor(),be=De.getClearAlpha(),Fe=Se.r,ze=Se.g,Te=Se.b;ge?(m[0]=Fe,m[1]=ze,m[2]=Te,m[3]=be,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Fe,v[1]=ze,v[2]=Te,v[3]=be,O.clearBufferiv(O.COLOR,0,v))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),et.dispose(),Re.dispose(),_.dispose(),z.dispose(),J.dispose(),dt.dispose(),N.dispose(),Ae.dispose(),j.dispose(),j.removeEventListener("sessionstart",xa),j.removeEventListener("sessionend",ya),qi.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=ft.autoReset,U=_e.enabled,G=_e.autoUpdate,W=_e.needsUpdate,F=_e.type;ce(),ft.autoReset=S,_e.enabled=U,_e.autoUpdate=G,_e.needsUpdate=W,_e.type=F}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const U=S.target;U.removeEventListener("dispose",Be),yt(U)}function yt(S){Rt(S),Re.remove(S)}function Rt(S){const U=Re.get(S).programs;U!==void 0&&(U.forEach(function(G){Ae.releaseProgram(G)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,G,W,F,oe){U===null&&(U=xt);const ge=F.isMesh&&F.matrixWorld.determinant()<0,Se=Vh(S,U,G,W,F);Le.setMaterial(W,ge);let be=G.index,Fe=1;if(W.wireframe===!0){if(be=ne.getWireframeAttribute(G),be===void 0)return;Fe=2}const ze=G.drawRange,Te=G.attributes.position;let nt=ze.start*Fe,ut=(ze.start+ze.count)*Fe;oe!==null&&(nt=Math.max(nt,oe.start*Fe),ut=Math.min(ut,(oe.start+oe.count)*Fe)),be!==null?(nt=Math.max(nt,0),ut=Math.min(ut,be.count)):Te!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Te.count));const pt=ut-nt;if(pt<0||pt===1/0)return;dt.setup(F,W,Se,G,be);let Ft,st=we;if(be!==null&&(Ft=ee.get(be),st=Je,st.setIndex(Ft)),F.isMesh)W.wireframe===!0?(Le.setLineWidth(W.wireframeLinewidth*_t()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(F.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Le.setLineWidth(Ce*_t()),F.isLineSegments?st.setMode(O.LINES):F.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else F.isPoints?st.setMode(O.POINTS):F.isSprite&&st.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,yi=F._multiDrawCounts,rt=F._multiDrawCount,ni=be?ee.get(be).bytesPerElement:1,un=Re.get(W).currentProgram.getUniforms();for(let zt=0;zt<rt;zt++)un.setValue(O,"_gl_DrawID",zt),st.render(Ce[zt]/ni,yi[zt])}else if(F.isInstancedMesh)st.renderInstances(nt,pt,F.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yi=Math.min(G.instanceCount,Ce);st.renderInstances(nt,pt,yi)}else st.render(nt,pt)};function ot(S,U,G){S.transparent===!0&&S.side===jt&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,ys(S,U,G),S.side=ji,S.needsUpdate=!0,ys(S,U,G),S.side=jt):ys(S,U,G)}this.compile=function(S,U,G=null){G===null&&(G=S),p=et.get(G),p.init(U),b.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==G&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){const Se=oe[ge];ot(Se,G,F),W.add(Se)}else ot(oe,G,F),W.add(oe)}),b.pop(),p=null,W},this.compileAsync=function(S,U,G=null){const W=this.compile(S,U,G);return new Promise(F=>{function oe(){if(W.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){F(S);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ii=null;function xi(S){ii&&ii(S)}function xa(){qi.stop()}function ya(){qi.start()}const qi=new bh;qi.setAnimationLoop(xi),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(S){ii=S,j.setAnimationLoop(S),S===null?qi.stop():qi.start()},j.addEventListener("sessionstart",xa),j.addEventListener("sessionend",ya),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,U,L),p=et.get(S,b.length),p.init(U),b.push(p),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(Ne),Ee=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Ee),g=ye.get(S,x.length),g.init(),x.push(g),j.enabled===!0&&j.isPresenting===!0){const oe=w.xr.getDepthSensingMesh();oe!==null&&vr(oe,U,-1/0,w.sortObjects)}vr(S,U,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(ue,xe),Qe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Qe&&De.addToRenderList(g,S),this.info.render.frame++,ae===!0&&re.beginShadows();const G=p.state.shadowsArray;_e.render(G,S,U),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,F=g.transmissive;if(p.setupLights(),U.isArrayCamera){const oe=U.cameras;if(F.length>0)for(let ge=0,Se=oe.length;ge<Se;ge++){const be=oe[ge];wa(W,F,S,be)}Qe&&De.render(S);for(let ge=0,Se=oe.length;ge<Se;ge++){const be=oe[ge];_a(g,S,be,be.viewport)}}else F.length>0&&wa(W,F,S,U),Qe&&De.render(S),_a(g,S,U);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(w,S,U),dt.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ae===!0&&re.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function vr(S,U,G,W){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){W&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const ge=J.update(S),Se=S.material;Se.visible&&g.push(S,ge,Se,G,Ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){const ge=J.update(S),Se=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ye.copy(ge.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Se)){const be=ge.groups;for(let Fe=0,ze=be.length;Fe<ze;Fe++){const Te=be[Fe],nt=Se[Te.materialIndex];nt&&nt.visible&&g.push(S,ge,nt,G,Ye.z,Te)}}else Se.visible&&g.push(S,ge,Se,G,Ye.z,null)}}const oe=S.children;for(let ge=0,Se=oe.length;ge<Se;ge++)vr(oe[ge],U,G,W)}function _a(S,U,G,W){const F=S.opaque,oe=S.transmissive,ge=S.transparent;p.setupLightsView(G),ae===!0&&re.setGlobalState(w.clippingPlanes,G),W&&Le.viewport(k.copy(W)),F.length>0&&xs(F,U,G),oe.length>0&&xs(oe,U,G),ge.length>0&&xs(ge,U,G),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function wa(S,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ci(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Pi:Li,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[W.id],ge=W.viewport||k;oe.setSize(ge.z,ge.w);const Se=w.getRenderTarget();w.setRenderTarget(oe),w.getClearColor(Z),ie=w.getClearAlpha(),ie<1&&w.setClearColor(16777215,.5),w.clear(),Qe&&De.render(G);const be=w.toneMapping;w.toneMapping=Xi;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ae===!0&&re.setGlobalState(w.clippingPlanes,W),xs(S,G,W),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,nt=U.length;Te<nt;Te++){const ut=U[Te],pt=ut.object,Ft=ut.geometry,st=ut.material,Ce=ut.group;if(st.side===jt&&pt.layers.test(W.layers)){const yi=st.side;st.side=Bt,st.needsUpdate=!0,Ma(pt,G,W,Ft,st,Ce),st.side=yi,st.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}w.setRenderTarget(Se),w.setClearColor(Z,ie),Fe!==void 0&&(W.viewport=Fe),w.toneMapping=be}function xs(S,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,oe=S.length;F<oe;F++){const ge=S[F],Se=ge.object,be=ge.geometry,Fe=W===null?ge.material:W,ze=ge.group;Se.layers.test(G.layers)&&Ma(Se,U,G,be,Fe,ze)}}function Ma(S,U,G,W,F,oe){S.onBeforeRender(w,U,G,W,F,oe),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(w,U,G,W,S,oe),F.transparent===!0&&F.side===jt&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,w.renderBufferDirect(G,U,W,F,S,oe),F.side=ji,F.needsUpdate=!0,w.renderBufferDirect(G,U,W,F,S,oe),F.side=jt):w.renderBufferDirect(G,U,W,F,S,oe),S.onAfterRender(w,U,G,W,F,oe)}function ys(S,U,G){U.isScene!==!0&&(U=xt);const W=Re.get(S),F=p.state.lights,oe=p.state.shadowsArray,ge=F.state.version,Se=Ae.getParameters(S,F.state,oe,U,G),be=Ae.getProgramCacheKey(Se);let Fe=W.programs;W.environment=S.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(S.isMeshStandardMaterial?z:_).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Be),Fe=new Map,W.programs=Fe);let ze=Fe.get(be);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ge)return ba(S,Se),ze}else Se.uniforms=Ae.getUniforms(S),S.onBeforeCompile(Se,w),ze=Ae.acquireProgram(Se,be),Fe.set(be,ze),W.uniforms=Se.uniforms;const Te=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=re.uniform),ba(S,Se),W.needsLights=jh(S),W.lightsStateVersion=ge,W.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Sa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ir.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ba(S,U){const G=Re.get(S);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Vh(S,U,G,W,F){U.isScene!==!0&&(U=xt),C.resetTextureUnits();const oe=U.fog,ge=W.isMeshStandardMaterial?U.environment:null,Se=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vn,be=(W.isMeshStandardMaterial?z:_).get(W.envMap||ge),Fe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color;let pt=Xi;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=w.toneMapping);const Ft=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=Ft!==void 0?Ft.length:0,Ce=Re.get(W),yi=p.state.lights;if(ae===!0&&(Ee===!0||S!==M)){const Kt=S===M&&W.id===T;re.setState(W,S,Kt)}let rt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==yi.state.version||Ce.outputColorSpace!==Se||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==be||W.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ze||Ce.morphTargets!==Te||Ce.morphNormals!==nt||Ce.morphColors!==ut||Ce.toneMapping!==pt||Ce.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ce.__version=W.version);let ni=Ce.currentProgram;rt===!0&&(ni=ys(W,U,F));let un=!1,zt=!1,Kn=!1;const mt=ni.getUniforms(),di=Ce.uniforms;if(Le.useProgram(ni.program)&&(un=!0,zt=!0,Kn=!0),W.id!==T&&(T=W.id,zt=!0),un||M!==S){Le.buffers.depth.getReversed()?(fe.copy(S.projectionMatrix),Qc(fe),ed(fe),mt.setValue(O,"projectionMatrix",fe)):mt.setValue(O,"projectionMatrix",S.projectionMatrix),mt.setValue(O,"viewMatrix",S.matrixWorldInverse);const Di=mt.map.cameraPosition;Di!==void 0&&Di.setValue(O,Oe.setFromMatrixPosition(S.matrixWorld)),Ze.logarithmicDepthBuffer&&mt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,zt=!0,Kn=!0)}if(F.isSkinnedMesh){mt.setOptional(O,F,"bindMatrix"),mt.setOptional(O,F,"bindMatrixInverse");const Kt=F.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),mt.setValue(O,"boneTexture",Kt.boneTexture,C))}F.isBatchedMesh&&(mt.setOptional(O,F,"batchingTexture"),mt.setValue(O,"batchingTexture",F._matricesTexture,C),mt.setOptional(O,F,"batchingIdTexture"),mt.setValue(O,"batchingIdTexture",F._indirectTexture,C),mt.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(O,"batchingColorTexture",F._colorsTexture,C));const Zn=G.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Ue.update(F,G,ni),(zt||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,mt.setValue(O,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(di.envMap.value=be,di.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(di.envMapIntensity.value=U.environmentIntensity),zt&&(mt.setValue(O,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&Xh(di,Kn),oe&&W.fog===!0&&pe.refreshFogUniforms(di,oe),pe.refreshMaterialUniforms(di,W,q,se,p.state.transmissionRenderTarget[S.id]),ir.upload(O,Sa(Ce),di,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ir.upload(O,Sa(Ce),di,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(O,"center",F.center),mt.setValue(O,"modelViewMatrix",F.modelViewMatrix),mt.setValue(O,"normalMatrix",F.normalMatrix),mt.setValue(O,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Kt=W.uniformsGroups;for(let Di=0,ki=Kt.length;Di<ki;Di++){const Ta=Kt[Di];N.update(Ta,ni),N.bind(Ta,ni)}}return ni}function Xh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function jh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,G){Re.get(S.texture).__webglTexture=U,Re.get(S.depthTexture).__webglTexture=G;const W=Re.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const G=Re.get(S);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,G=0){L=S,P=U,R=G;let W=!0,F=null,oe=!1,ge=!1;if(S){const be=Re.get(S);if(be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(be.__hasExternalTextures)C.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Te=S.depthTexture;if(be.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const ze=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?F=ze[U][G]:F=ze[U],oe=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?F=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[G]:F=ze,k.copy(S.viewport),X.copy(S.scissor),V=S.scissorTest}else k.copy(Pe).multiplyScalar(q).floor(),X.copy(qe).multiplyScalar(q).floor(),V=ct;if(Le.bindFramebuffer(O.FRAMEBUFFER,F)&&W&&Le.drawBuffers(S,F),Le.viewport(k),Le.scissor(X),Le.setScissorTest(V),oe){const be=Re.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,G)}else if(ge){const be=Re.get(S.texture),Fe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Fe)}T=-1},this.readRenderTargetPixels=function(S,U,G,W,F,oe,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){Le.bindFramebuffer(O.FRAMEBUFFER,Se);try{const be=S.texture,Fe=be.format,ze=be.type;if(!Ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-W&&G>=0&&G<=S.height-F&&O.readPixels(U,G,W,F,Ge.convert(Fe),Ge.convert(ze),oe)}finally{const be=L!==null?Re.get(L).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,U,G,W,F,oe,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){const be=S.texture,Fe=be.format,ze=be.type;if(!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-W&&G>=0&&G<=S.height-F){Le.bindFramebuffer(O.FRAMEBUFFER,Se);const Te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Te),O.bufferData(O.PIXEL_PACK_BUFFER,oe.byteLength,O.STREAM_READ),O.readPixels(U,G,W,F,Ge.convert(Fe),Ge.convert(ze),0);const nt=L!==null?Re.get(L).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,nt);const ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jc(O,ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,oe),O.deleteBuffer(Te),O.deleteSync(ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,G=0){S.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(S.image.width*W),oe=Math.floor(S.image.height*W),ge=U!==null?U.x:0,Se=U!==null?U.y:0;C.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,ge,Se,F,oe),Le.unbindTexture()},this.copyTextureToTexture=function(S,U,G=null,W=null,F=0){S.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let oe,ge,Se,be,Fe,ze,Te,nt,ut;const pt=S.isCompressedTexture?S.mipmaps[F]:S.image;G!==null?(oe=G.max.x-G.min.x,ge=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Fe=G.min.y,ze=G.isBox3?G.min.z:0):(oe=pt.width,ge=pt.height,Se=pt.depth||1,be=0,Fe=0,ze=0),W!==null?(Te=W.x,nt=W.y,ut=W.z):(Te=0,nt=0,ut=0);const Ft=Ge.convert(U.format),st=Ge.convert(U.type);let Ce;U.isData3DTexture?(C.setTexture3D(U,0),Ce=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Ce=O.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Ce=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const yi=O.getParameter(O.UNPACK_ROW_LENGTH),rt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ni=O.getParameter(O.UNPACK_SKIP_PIXELS),un=O.getParameter(O.UNPACK_SKIP_ROWS),zt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Kn=S.isDataArrayTexture||S.isData3DTexture,mt=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const di=Re.get(S),Zn=Re.get(U),Kt=Re.get(di.__renderTarget),Di=Re.get(Zn.__renderTarget);Le.bindFramebuffer(O.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let ki=0;ki<Se;ki++)Kn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(S).__webglTexture,F,ze+ki),S.isDepthTexture?(mt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.get(U).__webglTexture,F,ut+ki),O.blitFramebuffer(be,Fe,oe,ge,Te,nt,oe,ge,O.DEPTH_BUFFER_BIT,O.NEAREST)):mt?O.copyTexSubImage3D(Ce,F,Te,nt,ut+ki,be,Fe,oe,ge):O.copyTexSubImage2D(Ce,F,Te,nt,ut+ki,be,Fe,oe,ge);Le.bindFramebuffer(O.READ_FRAMEBUFFER,null),Le.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Ce,F,Te,nt,ut,oe,ge,Se,Ft,st,pt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,F,Te,nt,ut,oe,ge,Se,Ft,pt.data):O.texSubImage3D(Ce,F,Te,nt,ut,oe,ge,Se,Ft,st,pt):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,Te,nt,oe,ge,Ft,st,pt.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,Te,nt,pt.width,pt.height,Ft,pt.data):O.texSubImage2D(O.TEXTURE_2D,F,Te,nt,oe,ge,Ft,st,pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,yi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ni),O.pixelStorei(O.UNPACK_SKIP_ROWS,un),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt),F===0&&U.generateMipmaps&&O.generateMipmap(Ce),Le.unbindTexture()},this.copyTextureToTexture3D=function(S,U,G=null,W=null,F=0){return S.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,S=arguments[2],U=arguments[3],F=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,G,W,F)},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Le.unbindTexture()},this.resetState=function(){P=0,R=0,L=null,Le.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class ha{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cg extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dg extends kt{constructor(e=null,t=1,i=1,n,s,o,l,a,h=qt,c=qt,d,u){super(null,o,l,a,h,c,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends ti{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const An=new at,El=new at,Hs=[],Al=new dn,ug=new at,is=new B,ns=new qn;class fg extends B{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,ug)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,An),Al.copy(e.boundingBox).applyMatrix4(An),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,An),ns.copy(e.boundingSphere).applyMatrix4(An),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let l=0;l<i.length;l++)i[l]=n[o+l]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,An),El.multiplyMatrices(i,An),is.matrixWorld=El,is.raycast(e,Hs);for(let o=0,l=Hs.length;o<l;o++){const a=Hs[o];a.instanceId=s,a.object=this,t.push(a)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new dg(new Float32Array(n*this.count),n,this.count,Qo,fi));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const l=this.geometry.morphTargetsRelative?1:1-o,a=n*e;s[a]=l,s.set(i,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sn extends Yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lr=new E,hr=new E,Cl=new at,ss=new sa,Gs=new qn,jr=new E,Pl=new E;class Xo extends Mt{constructor(e=new Tt,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)lr.fromBufferAttribute(t,n-1),hr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=lr.distanceTo(hr);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(n),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;Cl.copy(n).invert(),ss.copy(e.ray).applyMatrix4(Cl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=h){const p=c.getX(v),x=c.getX(v+1),b=Ws(this,e,ss,a,p,x);b&&t.push(b)}if(this.isLineLoop){const v=c.getX(m-1),g=c.getX(f),p=Ws(this,e,ss,a,v,g);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=h){const p=Ws(this,e,ss,a,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ws(this,e,ss,a,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const l=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Ws(r,e,t,i,n,s){const o=r.geometry.attributes.position;if(lr.fromBufferAttribute(o,n),hr.fromBufferAttribute(o,s),t.distanceSqToSegment(lr,hr,jr,Pl)>i)return;jr.applyMatrix4(r.matrixWorld);const a=e.ray.origin.distanceTo(jr);if(!(a<e.near||a>e.far))return{distance:a,point:Pl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const Rl=new E,Ll=new E;class pg extends Xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Rl.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Rl.distanceTo(Ll);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rh extends kt{constructor(e,t,i,n,s,o,l,a,h){super(e,t,i,n,s,o,l,a,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let l=0,a=s-1,h;for(;l<=a;)if(n=Math.floor(l+(a-l)/2),h=i[n]-o,h<0)l=n+1;else if(h>0)a=n-1;else{a=n;break}if(n=a,i[n]===o)return n/(s-1);const c=i[n],u=i[n+1]-c,f=(o-c)/u;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),l=this.getPoint(s),a=t||(o.isVector2?new le:new E);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new E,n=[],s=[],o=[],l=new E,a=new at;for(let f=0;f<=e;f++){const m=f/e;n[f]=this.getTangentAt(m,new E)}s[0]=new E,o[0]=new E;let h=Number.MAX_VALUE;const c=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),l.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],l),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(n[f-1],n[f]),l.length()>Number.EPSILON){l.normalize();const m=Math.acos(At(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(a.makeRotationAxis(l,m))}o[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(At(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(l.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(a.makeRotationAxis(n[m],f*m)),o[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ca extends vi{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new le){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const l=this.aStartAngle+e*s;let a=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=a-this.aX,f=h-this.aY;a=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(a,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mg extends ca{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let r=0,e=0,t=0,i=0;function n(s,o,l,a){r=s,e=l,t=-3*s+3*o-2*l-a,i=2*s-2*o+l+a}return{initCatmullRom:function(s,o,l,a,h){n(o,l,h*(l-s),h*(a-o))},initNonuniformCatmullRom:function(s,o,l,a,h,c,d){let u=(o-s)/h-(l-s)/(h+c)+(l-o)/c,f=(l-o)/c-(a-o)/(c+d)+(a-l)/d;u*=c,f*=c,n(o,l,u,f)},calc:function(s){const o=s*s,l=o*s;return r+e*s+t*o+i*l}}}const Vs=new E,qr=new da,Yr=new da,$r=new da;class gg extends vi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:a===0&&l===s-1&&(l=s-2,a=1);let h,c;this.closed||l>0?h=n[(l-1)%s]:(Vs.subVectors(n[0],n[1]).add(n[0]),h=Vs);const d=n[l%s],u=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(Vs.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(c),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),qr.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,m,v,g),Yr.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,m,v,g),$r.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,m,v,g)}else this.curveType==="catmullrom"&&(qr.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),Yr.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),$r.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(qr.calc(a),Yr.calc(a),$r.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dl(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,l=r*r,a=r*l;return(2*t-2*i+s+o)*a+(-3*t+3*i-2*s-o)*l+s*r+t}function vg(r,e){const t=1-r;return t*t*e}function xg(r,e){return 2*(1-r)*r*e}function yg(r,e){return r*r*e}function ds(r,e,t,i){return vg(r,e)+xg(r,t)+yg(r,i)}function _g(r,e){const t=1-r;return t*t*t*e}function wg(r,e){const t=1-r;return 3*t*t*r*e}function Mg(r,e){return 3*(1-r)*r*r*e}function Sg(r,e){return r*r*r*e}function us(r,e,t,i,n){return _g(r,e)+wg(r,t)+Mg(r,i)+Sg(r,n)}class Lh extends vi{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){const i=t,n=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(us(e,n.x,s.x,o.x,l.x),us(e,n.y,s.y,o.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bg extends vi{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){const i=t,n=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(us(e,n.x,s.x,o.x,l.x),us(e,n.y,s.y,o.y,l.y),us(e,n.z,s.z,o.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dh extends vi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tg extends vi{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends vi{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(ds(e,n.x,s.x,o.x),ds(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eg extends vi{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(ds(e,n.x,s.x,o.x),ds(e,n.y,s.y,o.y),ds(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),l=s-o,a=n[o===0?o:o-1],h=n[o],c=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Dl(l,a.x,h.x,c.x,d.x),Dl(l,a.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new le().fromArray(n))}return this}}var kl=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:Lh,CubicBezierCurve3:bg,EllipseCurve:ca,LineCurve:Dh,LineCurve3:Tg,QuadraticBezierCurve:kh,QuadraticBezierCurve3:Eg,SplineCurve:Ih});class Ag extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,l=this.curves[s],a=l.getLength(),h=a===0?0:1-o/a;return l.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let h=0;h<a.length;h++){const c=a[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new kl[n.type]().fromJSON(n))}return this}}class Cg extends Ag{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Dh(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new kh(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,o){const l=new Lh(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(s,o));return this.curves.push(l),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ih(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,i,n,s,o),this}absarc(e,t,i,n,s,o){return this.absellipse(e,t,i,i,n,s,o),this}ellipse(e,t,i,n,s,o,l,a){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,s,o,l,a),this}absellipse(e,t,i,n,s,o,l,a){const h=new ca(e,t,i,n,s,o,l,a);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ua extends Tt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=At(n,0,Math.PI*2);const s=[],o=[],l=[],a=[],h=[],c=1/t,d=new E,u=new le,f=new E,m=new E,v=new E;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case e.length-1:a.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),a.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=t;x++){const b=i+x*c*n,w=Math.sin(b),I=Math.cos(b);for(let P=0;P<=e.length-1;P++){d.x=e[P].x*w,d.y=e[P].y,d.z=e[P].x*I,o.push(d.x,d.y,d.z),u.x=x/t,u.y=P/(e.length-1),l.push(u.x,u.y);const R=a[3*P+0]*w,L=a[3*P+1],T=a[3*P+0]*I;h.push(R,L,T)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){const w=b+x*e.length,I=w,P=w+e.length,R=w+e.length+1,L=w+1;s.push(I,P,L),s.push(R,L,P)}this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(l,2)),this.setAttribute("normal",new it(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.points,e.segments,e.phiStart,e.phiLength)}}class Wt extends ua{constructor(e=1,t=1,i=4,n=8){const s=new Cg;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Wt(e.radius,e.length,e.capSegments,e.radialSegments)}}class fa extends Tt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],l=[],a=[],h=new E,c=new le;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*n;h.x=e*Math.cos(f),h.y=e*Math.sin(f),o.push(h.x,h.y,h.z),l.push(0,0,1),c.x=(o[u]/e+1)/2,c.y=(o[u+1]/e+1)/2,a.push(c.x,c.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ie extends Tt{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:a};const h=this;n=Math.floor(n),s=Math.floor(s);const c=[],d=[],u=[],f=[];let m=0;const v=[],g=i/2;let p=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function x(){const w=new E,I=new E;let P=0;const R=(t-e)/i;for(let L=0;L<=s;L++){const T=[],M=L/s,k=M*(t-e)+e;for(let X=0;X<=n;X++){const V=X/n,Z=V*a+l,ie=Math.sin(Z),$=Math.cos(Z);I.x=k*ie,I.y=-M*i+g,I.z=k*$,d.push(I.x,I.y,I.z),w.set(ie,R,$).normalize(),u.push(w.x,w.y,w.z),f.push(V,1-M),T.push(m++)}v.push(T)}for(let L=0;L<n;L++)for(let T=0;T<s;T++){const M=v[T][L],k=v[T+1][L],X=v[T+1][L+1],V=v[T][L+1];(e>0||T!==0)&&(c.push(M,k,V),P+=3),(t>0||T!==s-1)&&(c.push(k,X,V),P+=3)}h.addGroup(p,P,0),p+=P}function b(w){const I=m,P=new le,R=new E;let L=0;const T=w===!0?e:t,M=w===!0?1:-1;for(let X=1;X<=n;X++)d.push(0,g*M,0),u.push(0,M,0),f.push(.5,.5),m++;const k=m;for(let X=0;X<=n;X++){const Z=X/n*a+l,ie=Math.cos(Z),$=Math.sin(Z);R.x=T*$,R.y=g*M,R.z=T*ie,d.push(R.x,R.y,R.z),u.push(0,M,0),P.x=ie*.5+.5,P.y=$*.5*M+.5,f.push(P.x,P.y),m++}for(let X=0;X<n;X++){const V=I+X,Z=k+X;w===!0?c.push(Z,Z+1,V):c.push(Z+1,Z,V),L+=3}h.addGroup(p,L,w===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qt extends Ie{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,l=Math.PI*2){super(0,e,t,i,n,s,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Qt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends Tt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],o=[];l(n),h(i),c(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const b=new E,w=new E,I=new E;for(let P=0;P<t.length;P+=3)f(t[P+0],b),f(t[P+1],w),f(t[P+2],I),a(b,w,I,x)}function a(x,b,w,I){const P=I+1,R=[];for(let L=0;L<=P;L++){R[L]=[];const T=x.clone().lerp(w,L/P),M=b.clone().lerp(w,L/P),k=P-L;for(let X=0;X<=k;X++)X===0&&L===P?R[L][X]=T:R[L][X]=T.clone().lerp(M,X/k)}for(let L=0;L<P;L++)for(let T=0;T<2*(P-L)-1;T++){const M=Math.floor(T/2);T%2===0?(u(R[L][M+1]),u(R[L+1][M]),u(R[L][M])):(u(R[L][M+1]),u(R[L+1][M+1]),u(R[L+1][M]))}}function h(x){const b=new E;for(let w=0;w<s.length;w+=3)b.x=s[w+0],b.y=s[w+1],b.z=s[w+2],b.normalize().multiplyScalar(x),s[w+0]=b.x,s[w+1]=b.y,s[w+2]=b.z}function c(){const x=new E;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];const w=g(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;o.push(w,1-I)}m(),d()}function d(){for(let x=0;x<o.length;x+=6){const b=o[x+0],w=o[x+2],I=o[x+4],P=Math.max(b,w,I),R=Math.min(b,w,I);P>.9&&R<.1&&(b<.2&&(o[x+0]+=1),w<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,b){const w=x*3;b.x=e[w+0],b.y=e[w+1],b.z=e[w+2]}function m(){const x=new E,b=new E,w=new E,I=new E,P=new le,R=new le,L=new le;for(let T=0,M=0;T<s.length;T+=9,M+=6){x.set(s[T+0],s[T+1],s[T+2]),b.set(s[T+3],s[T+4],s[T+5]),w.set(s[T+6],s[T+7],s[T+8]),P.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),I.copy(x).add(b).add(w).divideScalar(3);const k=g(I);v(P,M+0,x,k),v(R,M+2,b,k),v(L,M+4,w,k)}}function v(x,b,w,I){I<0&&x.x===1&&(o[b]=x.x-1),w.x===0&&w.z===0&&(o[b]=I/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.vertices,e.indices,e.radius,e.details)}}const Xs=new E,js=new E,Kr=new E,qs=new ei;class Pg extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),s=Math.cos(Nn*t),o=e.getIndex(),l=e.getAttribute("position"),a=o?o.count:l.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<a;m+=3){o?(h[0]=o.getX(m),h[1]=o.getX(m+1),h[2]=o.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);const{a:v,b:g,c:p}=qs;if(v.fromBufferAttribute(l,h[0]),g.fromBufferAttribute(l,h[1]),p.fromBufferAttribute(l,h[2]),qs.getNormal(Kr),d[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,d[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const b=(x+1)%3,w=d[x],I=d[b],P=qs[c[x]],R=qs[c[b]],L=`${w}_${I}`,T=`${I}_${w}`;T in u&&u[T]?(Kr.dot(u[T].normal)<=s&&(f.push(P.x,P.y,P.z),f.push(R.x,R.y,R.z)),u[T]=null):L in u||(u[L]={index0:h[x],index1:h[b],normal:Kr.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:g}=u[m];Xs.fromBufferAttribute(l,v),js.fromBufferAttribute(l,g),f.push(Xs.x,Xs.y,Xs.z),f.push(js.x,js.y,js.z)}this.setAttribute("position",new it(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class pa extends pr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pa(e.radius,e.detail)}}class ma extends pr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ma(e.radius,e.detail)}}class mr extends Tt{constructor(e=.5,t=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const l=[],a=[],h=[],c=[];let d=e;const u=(t-e)/n,f=new E,m=new le;for(let v=0;v<=n;v++){for(let g=0;g<=i;g++){const p=s+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),a.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,c.push(m.x,m.y)}d+=u}for(let v=0;v<n;v++){const g=v*(i+1);for(let p=0;p<i;p++){const x=p+g,b=x,w=x+i+1,I=x+i+2,P=x+1;l.push(b,w,P),l.push(w,I,P)}}this.setIndex(l),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ve extends Tt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const a=Math.min(o+l,Math.PI);let h=0;const c=[],d=new E,u=new E,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const x=[],b=p/i;let w=0;p===0&&o===0?w=.5/t:p===i&&a===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const P=I/t;d.x=-e*Math.cos(n+P*s)*Math.sin(o+b*l),d.y=e*Math.cos(o+b*l),d.z=e*Math.sin(n+P*s)*Math.sin(o+b*l),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(P+w,1-b),x.push(h++)}c.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const b=c[p][x+1],w=c[p][x],I=c[p+1][x],P=c[p+1][x+1];(p!==0||o>0)&&f.push(b,w,P),(p!==i-1||a<Math.PI)&&f.push(w,I,P)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pi extends Tt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],a=[],h=[],c=new E,d=new E,u=new E;for(let f=0;f<=i;f++)for(let m=0;m<=n;m++){const v=m/n*s,g=f/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),l.push(d.x,d.y,d.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),u.subVectors(d,c).normalize(),a.push(u.x,u.y,u.z),h.push(m/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=n;m++){const v=(n+1)*f+m-1,g=(n+1)*(f-1)+m-1,p=(n+1)*(f-1)+m,x=(n+1)*f+m;o.push(v,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Y extends Yn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gr extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Rg extends gr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zr=new at,Il=new E,Nl=new E;class Nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),Zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new at,rs=new E,Jr=new E;class Lg extends Nh{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),i.position.copy(rs),Jr.copy(i.position),Jr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jr),i.updateMatrixWorld(),n.makeTranslation(-rs.x,-rs.y,-rs.z),Ul.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class Uh extends gr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Lg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dg extends Nh{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kg extends gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ol(){return performance.now()}const Bl=new at;class zl{constructor(e,t,i=0,n=1/0){this.ray=new sa(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bl),this}intersectObject(e,t=!0,i=[]){return jo(e,this,i,t),i.sort(Hl),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)jo(e[n],this,i,t);return i.sort(Hl),i}}function Hl(r,e){return r.distance-e.distance}function jo(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let o=0,l=s.length;o<l;o++)jo(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);const Xe=2;var A=(r=>(r[r.Rock=0]="Rock",r[r.Earth=1]="Earth",r[r.Gold=2]="Gold",r[r.Dirt=3]="Dirt",r[r.Claimed=4]="Claimed",r[r.Heart=5]="Heart",r[r.Wall=6]="Wall",r[r.Lava=7]="Lava",r[r.Water=8]="Water",r[r.BridgeWood=9]="BridgeWood",r[r.BridgeStone=10]="BridgeStone",r))(A||{}),y=(r=>(r[r.None=0]="None",r[r.Treasury=1]="Treasury",r[r.Lair=2]="Lair",r[r.Hatchery=3]="Hatchery",r[r.Training=4]="Training",r[r.Library=5]="Library",r[r.Portal=6]="Portal",r[r.Guard=7]="Guard",r[r.Workshop=8]="Workshop",r[r.Prison=9]="Prison",r[r.Torture=10]="Torture",r[r.Graveyard=11]="Graveyard",r[r.Temple=12]="Temple",r[r.CombatPit=13]="CombatPit",r))(y||{}),$e=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Open=2]="Open",r))($e||{}),gt=(r=>(r[r.None=0]="None",r[r.Sentry=1]="Sentry",r))(gt||{}),ke=(r=>(r[r.None=0]="None",r[r.Dig=1]="Dig",r[r.Claim=2]="Claim",r[r.Fortify=3]="Fortify",r))(ke||{}),K=(r=>(r.Scrabbler="scrabbler",r.Skitterwing="skitterwing",r.Rattlekin="rattlekin",r.Emberling="emberling",r.Gravemage="gravemage",r.Thornwitch="thornwitch",r.Bonewretch="bonewretch",r.HeroKnight="hero_knight",r.HeroArcher="hero_archer",r))(K||{}),D=(r=>(r.Idle="idle",r.Dig="dig",r.Claim="claim",r.Fortify="fortify",r.Mine="mine",r.Haul="haul",r.Sleep="sleep",r.Eat="eat",r.Train="train",r.Research="research",r.Fight="fight",r.Flee="flee",r.Wander="wander",r.Guard="guard",r.AttackMove="attack",r.Craft="craft",r.DragPrisoner="drag",r.Pray="pray",r.DragWounded="dragwounded",r))(D||{});const Ng={0:0,1:50,2:100,3:150,4:200,5:250,6:300,7:175,8:200,9:225,10:275,11:250,12:300,13:350},Ug=75,Fg=150,Gl=40,Og=60,Bg=120,Cn=35,Qr=48,Jt=3,en=2500,tn=5,qo={scrabbler:{hp:40,speed:3.8,damage:4,goldWage:0,color:6982208,scale:1.55},skitterwing:{hp:50,speed:4,damage:6,goldWage:8,color:4243616,scale:.6},rattlekin:{hp:80,speed:2.6,damage:12,goldWage:15,color:9072720,scale:.75},emberling:{hp:90,speed:2.4,damage:16,goldWage:25,color:14700576,scale:.8},gravemage:{hp:70,speed:2.2,damage:10,goldWage:20,color:7360704,scale:.78},thornwitch:{hp:85,speed:2.5,damage:15,goldWage:22,color:10498144,scale:.78},bonewretch:{hp:55,speed:2.8,damage:11,goldWage:0,color:14209208,scale:.72},hero_knight:{hp:120,speed:2.2,damage:18,goldWage:0,color:12634328,scale:.85},hero_archer:{hp:70,speed:2.5,damage:14,goldWage:0,color:5275808,scale:.7}};function Ys(r){return r==="emberling"}function $s(r){return r==="skitterwing"}function os(r){return r<=1?0:Math.min(.5,(r-1)*.06)}let zg=1;class Hg{id;kind;isHero;isWorker;x;y;wx;wz;hp;maxHp;speed;damage;level=1;job=D.Idle;jobTarget=null;path=[];pathIndex=0;workTimer=0;stunTimer=0;speedBuff=0;hunger=0;sleepNeed=0;mood=72;leaveWarned=!1;efficiencyWarned=!1;selected=!1;trainNeed=0;held=!1;knockedOut=!1;isPrisoner=!1;convertProgress=0;fleeTimer=0;prayerBuff=0;hasTalisman=!1;attackCooldown=0;goldCarried=0;alive=!0;mesh;bobPhase;digAnim=0;eatAnim=0;eatAnnounced=!1;restHealAcc=0;facing=0;facingTarget=0;pickaxe=null;selectRing=null;bedKey=null;tintPulse=0;tintMode=null;tintBase=new Map;constructor(e,t,i,n){this.id=zg++,this.kind=e,this.isHero=e===K.HeroKnight||e===K.HeroArcher,this.isWorker=e===K.Scrabbler;const s=qo[e];this.maxHp=s.hp,this.hp=s.hp,this.speed=s.speed,this.damage=s.damage,this.x=t,this.y=i;const o=n.tileToWorld(t,i);this.wx=o.x,this.wz=o.z,this.bobPhase=Math.random()*Math.PI*2,this.mesh=new vt}setMesh(e){this.mesh=e,this.syncMesh(0)}clampStats(){const e=(t,i=0)=>Number.isFinite(t)?t:i;this.maxHp=Math.max(1,e(this.maxHp,1)),this.hp=Math.max(0,Math.min(this.maxHp,e(this.hp,this.maxHp))),this.hunger=Math.max(0,Math.min(100,e(this.hunger))),this.sleepNeed=Math.max(0,Math.min(100,e(this.sleepNeed))),this.mood=Math.max(0,Math.min(100,e(this.mood,72))),this.wx=e(this.wx),this.wz=e(this.wz),Number.isFinite(this.x)||(this.x=0),Number.isFinite(this.y)||(this.y=0)}syncMesh(e){try{if(this.clampStats(),!this.mesh)return;this.mesh.visible=!0;const t=Number.isFinite(this.wx)?this.wx:0,i=Number.isFinite(this.wz)?this.wz:0;if(this.held){const d=Math.sin(e*10+this.bobPhase)*.08;this.mesh.position.set(t,1.35+d,i),this.mesh.rotation.x=.15,this.mesh.rotation.z=Math.sin(e*6)*.2,this.selectRing&&(this.selectRing.visible=!0,this.selectRing.rotation.z=e*3),this.pickaxe&&(this.pickaxe.visible=!1);return}if(this.knockedOut||this.isPrisoner){const d=Math.sin(e*1.5+this.bobPhase)*.01;this.mesh.position.set(t,.08+d,i),this.mesh.rotation.x=.05,this.mesh.rotation.z=this.knockedOut?1.35:.55,this.selectRing&&(this.selectRing.visible=this.selected||this.knockedOut,this.selectRing.rotation.z=e*1.2),this.pickaxe&&(this.pickaxe.visible=!1);return}const n=this.job===D.Dig||this.job===D.Mine||this.job===D.Claim||this.job===D.Fortify,s=this.job===D.Sleep,o=this.job===D.Eat;o&&(this.eatAnim+=.35);const l=this.kind===K.Skitterwing?Math.sin(e*6+this.bobPhase)*.25+.4:n?Math.sin(e*14+this.bobPhase)*.06:s?Math.sin(e*2+this.bobPhase)*.02:o?Math.sin(this.eatAnim*14+this.bobPhase)*.1:Math.sin(e*8+this.bobPhase)*.04,a=s?.12:o?.05+Math.abs(Math.sin(this.eatAnim*14))*.08:0;this.mesh.position.set(this.wx,l+a,this.wz);let h=this.facing,c=this.facingTarget-h;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;if(h+=c*Math.min(1,10*(1/60)),this.facing=h,this.mesh.rotation.y=this.facing,this.stunTimer>0?this.mesh.rotation.z=Math.sin(e*20)*.3:s?(this.mesh.rotation.z=.35,this.mesh.rotation.x=.05):o?(this.mesh.rotation.x=Math.sin(this.eatAnim*14)*.35,this.mesh.rotation.z=Math.sin(this.eatAnim*10)*.12):(this.mesh.rotation.z=0,this.mesh.rotation.x=0),this.pickaxe)if(this.job===D.Dig||this.job===D.Mine){this.digAnim+=.45;const u=Math.sin(this.digAnim*11);this.pickaxe.rotation.x=-.9+u*1.35,this.pickaxe.rotation.z=.15+u*.55,this.pickaxe.rotation.y=u*.25,this.pickaxe.visible=!0}else if(n){this.digAnim+=.2;const u=Math.sin(this.digAnim*8);this.pickaxe.rotation.x=-.55+u*.5,this.pickaxe.rotation.z=.15+u*.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=!0}else this.pickaxe.rotation.x=-.45,this.pickaxe.rotation.z=.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=this.isWorker;this.selectRing&&(this.selectRing.visible=n||this.held||this.selected,this.selectRing.rotation.z=e*1.5),this.tintPulse>0&&(this.tintPulse=Math.max(0,this.tintPulse-1/60),this.tintPulse<=0&&(this.tintMode=null)),this.applyTintVisual()}catch(t){console.warn("[underkeep] syncMesh failed",t)}}workEfficiency(){let t=.5+(Number.isFinite(this.mood)?Math.max(0,Math.min(100,this.mood)):50)/100*.7;return this.prayerBuff>0&&(t+=.05),this.hasTalisman&&(t+=.03),Number.isFinite(t)?Math.max(.5,Math.min(1.25,t)):.85}pulseTint(e,t=.85){this.tintMode=e,this.tintPulse=Math.max(this.tintPulse,t)}applyTintVisual(){if(this.mesh)try{const e=[];this.mesh.traverse(t=>{const i=t.material;if(i)if(Array.isArray(i))for(const n of i)n instanceof Y&&e.push(n);else i instanceof Y&&e.push(i)});for(const t of e){this.tintBase.has(t)||this.tintBase.set(t,{emissive:t.emissive.clone(),intensity:t.emissiveIntensity});const i=this.tintBase.get(t);if(this.tintPulse>0&&this.tintMode){const n=.55+.45*Math.sin(this.tintPulse*14);this.tintMode==="heal"?(t.emissive.setRGB(.15*n,.95*n,.45*n),t.emissiveIntensity=Math.max(i.intensity,.85+n*.7)):(t.emissive.setRGB(1*n,.55*n,.12*n),t.emissiveIntensity=Math.max(i.intensity,.9+n*.75))}else t.emissive.copy(i.emissive),t.emissiveIntensity=i.intensity}}catch(e){console.warn("[underkeep] tint failed",e)}}tilePos(){return{x:this.x,y:this.y}}setPath(e){this.path=e??[],this.pathIndex=0}faceToward(e,t){const i=e-this.wx,n=t-this.wz;i*i+n*n<1e-6||(this.facingTarget=Math.atan2(i,n))}moveAlongPath(e,t){if(this.stunTimer>0||this.held||this.knockedOut||this.isPrisoner)return!1;if(this.pathIndex>=this.path.length)return!0;const i=this.path[this.pathIndex],n=t.tileToWorld(i.x,i.y),s=this.speed*(this.speedBuff>0?1.8:1)*Xe,o=n.x-this.wx,l=n.z-this.wz,a=Math.hypot(o,l);if(a<.12)return this.wx=n.x,this.wz=n.z,this.x=i.x,this.y=i.y,this.pathIndex++,this.pathIndex>=this.path.length;const h=Math.min(a,s*e);this.wx+=o/a*h,this.wz+=l/a*h,this.faceToward(n.x,n.z);let c=this.facingTarget-this.facing;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.facing+=c*Math.min(1,12*e);const d=t.worldToTile(this.wx,this.wz);return t.inBounds(d.x,d.y)&&(this.x=d.x,this.y=d.y),!1}takeDamage(e){this.alive&&(this.hp-=e,this.hp<=0&&(this.hp=0,this.alive=!1))}}const Fh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gg=new aa(-1,1,1,-1,0,1);class Wg extends Tt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const Vg=new Wg;class Oh{constructor(e){this._mesh=new B(Vg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Yo extends gs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ar.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Oh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wl extends gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Xg extends gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vl{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yo(Fh),this.copyPass.material.blending=Ci,this.clock=new Ig}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Wl!==void 0&&(o instanceof Wl?i=!0:o instanceof Xg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xl extends gs{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const jg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cn extends gs{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(s,o,{type:Pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new ci(s,o,{type:Pi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new ci(s,o,{type:Pi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const l=jg;this.highPassUniforms=ar.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=Fh;this.copyUniforms=ar.clone(c.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:so,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new je,this.oldClearAlpha=1,this.basic=new Vt,this.fsQuad=new Oh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=cn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=cn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}cn.BlurDirectionX=new le(1,0);cn.BlurDirectionY=new le(0,1);const Wn=new Map;function ln(r,e,t){const i=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function qg(r,e,t){const i=Math.floor(r),n=Math.floor(e),s=r-i,o=e-n,l=s*s*(3-2*s),a=o*o*(3-2*o),h=ln(i,n,t),c=ln(i+1,n,t),d=ln(i,n+1,t),u=ln(i+1,n+1,t);return h+(c-h)*l+(d-h)*a+(h-c-d+u)*l*a}function nr(r,e,t,i=4){let n=.5,s=1,o=0,l=0;for(let a=0;a<i;a++)o+=n*qg(r*s,e*s,t+a*19),l+=n,n*=.5,s*=2;return o/l}function ga(r){const e=document.createElement("canvas");e.width=r,e.height=r;const t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(r,r);return{canvas:e,ctx:t,data:i}}function Bh(r,e=2){const t=new Rh(r);return t.wrapS=t.wrapT=sr,t.repeat.set(e,e),t.colorSpace=Ut,t.magFilter=li,t.minFilter=Wi,t.generateMipmaps=!0,t.needsUpdate=!0,t}function zh(r,e,t,i,n,s,o=255){const l=(t*r.width+e)*4;r.data[l]=i,r.data[l+1]=n,r.data[l+2]=s,r.data[l+3]=o}function eo(r,e,t){return r+(e-r)*t}function Pn(r,e,t){return[eo(r[0],e[0],t),eo(r[1],e[1],t),eo(r[2],e[2],t)]}function Yt(r,e){const t=JSON.stringify(e)+`|${r}`,i=Wn.get(t);if(i)return i;const{canvas:n,ctx:s,data:o}=ga(r),l=e.scale??4,a=e.contrast??1;for(let c=0;c<r;c++)for(let d=0;d<r;d++){const u=d/r*l,f=c/r*l;let m=nr(u,f,e.seed);m=(m-.5)*a+.5,m=Math.max(0,Math.min(1,m));let v=Pn(e.dark,e.base,m);if(m>.62&&(v=Pn(v,e.light,(m-.62)/.38)),e.bricks){const{bw:g,bh:p,mortar:x,mortarW:b}=e.bricks,I=Math.floor(c/p)%2===0?0:g*.5,P=(d+I)%g,R=c%p;if(P<b||R<b)v=x;else{const L=Math.floor((d+I)/g),T=Math.floor(c/p),M=ln(L,T,e.seed+9)*.18-.09;v=[Math.max(0,Math.min(255,v[0]*(1+M))),Math.max(0,Math.min(255,v[1]*(1+M))),Math.max(0,Math.min(255,v[2]*(1+M)))]}}if(e.veins){const g=nr(u*e.veins.scale,f*e.veins.scale,e.veins.seed);if(g>e.veins.thresh){const p=(g-e.veins.thresh)/(1-e.veins.thresh);v=Pn(v,e.veins.color,Math.min(1,p*1.4))}}if(e.speck&&ln(d,c,e.seed+3)<e.speck){const g=e.speckColor??e.light;v=Pn(v,g,.55)}if(e.cracks&&Math.abs(nr(u*2.5,f*.4,e.seed+40)-.5)<.035&&(v=Pn(v,e.dark,.7)),e.borderDark){const g=Math.min(d,c,r-1-d,r-1-c)/r;if(g<e.borderDark){const p=1-g/e.borderDark;v=Pn(v,e.dark,p*.55)}}zh(o,d,c,v[0]|0,v[1]|0,v[2]|0)}s.putImageData(o,0,0);const h=Bh(n,1);return Wn.set(t,h),h}function Yg(r,e=1){const t=`bump:${r.image.width}:${e}:${r.uuid}`,i=Wn.get(t);if(i)return i;const n=r.image,s=n.width,{canvas:o,ctx:l,data:a}=ga(s),c=n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,s,s);for(let u=0;u<s*s;u++){const f=c.data[u*4],m=c.data[u*4+1],v=c.data[u*4+2];let g=(.299*f+.587*m+.114*v)*e;g=Math.max(0,Math.min(255,g));const p=u*4;a.data[p]=g,a.data[p+1]=g,a.data[p+2]=g,a.data[p+3]=255}l.putImageData(a,0,0);const d=Bh(o,r.repeat.x);return d.colorSpace=Ei,Wn.set(t,d),d}function $g(){return Yt(64,{seed:11,base:[168,108,52],dark:[92,52,22],light:[210,150,88],scale:5.5,contrast:1.45,speck:.05,speckColor:[140,90,40],cracks:!0})}function Kg(){return Yt(64,{seed:22,base:[118,124,140],dark:[58,62,78],light:[175,182,198],scale:3.6,contrast:1.25,cracks:!0,speck:.05,speckColor:[210,215,230]})}function Zg(){return Yt(64,{seed:33,base:[88,58,36],dark:[42,28,16],light:[118,84,52],scale:6,contrast:1.25,speck:.07,speckColor:[70,50,30]})}function Hh(){return Yt(64,{seed:44,base:[168,158,142],dark:[110,100,88],light:[210,200,185],scale:2.8,contrast:1.25,bricks:{bw:20,bh:14,mortar:[52,44,38],mortarW:2}})}function Jg(){return Yt(64,{seed:55,base:[128,122,112],dark:[70,66,60],light:[168,162,150],scale:3,contrast:1.1,bricks:{bw:14,bh:12,mortar:[42,40,38],mortarW:2},borderDark:.08})}function Qg(){return Yt(64,{seed:66,base:[180,120,28],dark:[90,50,10],light:[255,220,90],scale:4,contrast:1.5,veins:{color:[255,240,110],scale:1.25,thresh:.42,seed:99},speck:.18,speckColor:[255,250,180]})}function e0(){return Yt(64,{seed:77,base:[90,40,48],dark:[40,16,22],light:[140,60,70],scale:3.8,contrast:1.2,veins:{color:[180,40,50],scale:1.2,thresh:.62,seed:12}})}function t0(){return Yt(64,{seed:81,base:[100,78,42],dark:[52,38,20],light:[180,140,60],scale:3.2,contrast:1.15,bricks:{bw:16,bh:16,mortar:[90,70,30],mortarW:1},veins:{color:[220,180,60],scale:.9,thresh:.7,seed:3}})}function i0(){return Yt(64,{seed:82,base:[92,62,88],dark:[48,30,50],light:[130,90,120],scale:5,contrast:1.15,speck:.08,speckColor:[160,120,140]})}function n0(){return Yt(64,{seed:83,base:[100,110,50],dark:[50,58,24],light:[150,160,80],scale:5.5,contrast:1.2,speck:.1,speckColor:[180,170,70]})}function Ks(){return Yt(64,{seed:84,base:[110,70,60],dark:[55,35,30],light:[150,100,85],scale:4,contrast:1.25,cracks:!0,bricks:{bw:20,bh:12,mortar:[40,28,24],mortarW:1}})}function jl(){return Yt(64,{seed:85,base:[58,68,110],dark:[28,34,60],light:[90,105,160],scale:3.5,contrast:1.15,veins:{color:[140,160,220],scale:2.2,thresh:.68,seed:7}})}function s0(){return Yt(64,{seed:86,base:[70,40,100],dark:[30,16,48],light:[130,70,180],scale:4.5,contrast:1.3,veins:{color:[180,100,255],scale:1.5,thresh:.55,seed:21}})}function r0(r,e=1){return Yg(r,e)}function o0(r,e){const t=`decal:${r}:${e.join(",")}`,i=Wn.get(t);if(i)return i;const n=64,{canvas:s,ctx:o,data:l}=ga(n),a=n/2,h=n/2;for(let d=0;d<n;d++)for(let u=0;u<n;u++){const f=(u+.5-a)/a,m=(d+.5-h)/h,v=Math.hypot(f,m);let g=0,p=e;if(r==="goldRing"){const x=Math.abs(v-.72);g=x<.12?(1-x/.12)*220:0,v<.35&&(g=Math.max(g,(1-v/.35)*90)),(Math.abs(f)>.78&&Math.abs(m)<.2||Math.abs(m)>.78&&Math.abs(f)<.2)&&(g=Math.max(g,180))}else if(r==="bedding"){const x=Math.sin((u+d)*.35)*.5+.5;g=v<.85?(1-v/.85)*(120+x*80):0}else if(r==="warmSpot")g=v<.9?Math.pow(1-v/.9,1.2)*180:0,ln(u,d,5)>.92&&v<.7&&(g=220,p=[220,200,80]);else if(r==="worn"){const x=nr(u*.12,d*.12,9);g=v<.9&&x>.45?(x-.45)*280:0}else if(r==="runes"){g=0,v>.55&&v<.78&&(g=160);const x=Math.atan2(m,f),b=Math.abs(x/(Math.PI*2)*8%1-.5);v>.35&&v<.85&&b<.06&&(g=210),v<.22&&(g=140)}else if(r==="swirl"){const x=Math.atan2(m,f),b=Math.sin(x*3+v*10);g=v<.92?Math.max(0,b)*(1-v)*255:0,v<.2&&(g=Math.max(g,200))}zh(l,u,d,p[0],p[1],p[2],Math.max(0,Math.min(255,g|0)))}o.putImageData(l,0,0);const c=new Rh(s);return c.colorSpace=Ut,c.needsUpdate=!0,Wn.set(t,c),c}const ql=new Map,Yl=new Map;function vs(r,e){let t=ql.get(r);return t||(t=e(),ql.set(r,t)),t}function Dn(r,e){let t=Yl.get(r);return t||(t=e(),Yl.set(r,t)),t}function va(r,e,t,i=.45){const n=r.attributes.position,s=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){const l=n.getY(o),a=Math.max(0,Math.min(1,(l-e)/(t*.45))),h=1-i*(1-a)*(1-a);s[o*3]=h,s[o*3+1]=h,s[o*3+2]=h}r.setAttribute("color",new ti(s,3))}function a0(r){const e=new vt,i={[y.Treasury]:13938752,[y.Lair]:11563168,[y.Hatchery]:10006592,[y.Training]:12607568,[y.Library]:5271752,[y.Portal]:10506448,[y.Guard]:7372944,[y.Workshop]:10516544,[y.Prison]:6318192,[y.Torture]:10502224,[y.Graveyard]:5271648,[y.Temple]:12623952,[y.CombatPit]:10506304}[r]??12101768,n=r===y.None?2761752:r===y.Treasury?4861968:r===y.Lair?4198440:r===y.Hatchery?3162128:r===y.Training?4198416:r===y.Library?1054792:r===y.Guard?2107440:r===y.Workshop?4204560:r===y.Prison?2107440:r===y.Torture?4198424:r===y.Graveyard?1585192:r===y.Temple?4206608:r===y.CombatPit?4200464:3149896,s=new Y({color:2761240,metalness:.04,roughness:.95}),o=new B(new Me(Xe*.98,.18,Xe*.98),s);o.position.y=.02,o.receiveShadow=!0,e.add(o);const l=new Y({color:i,metalness:r===y.Treasury?.45:r===y.Portal?.35:.18,roughness:r===y.Treasury?.4:.62,emissive:n,emissiveIntensity:r===y.None?.14:.28}),a=Xe*.44,h=.06,c=[-.5,.5];for(const u of c)for(const f of c){const m=new B(new Me(a,.12,a),l);m.position.set(u*(a/2+h),.16,f*(a/2+h)),m.receiveShadow=!0,m.castShadow=!1,e.add(m)}const d=new B(new Me(Xe*.99,.025,Xe*.99),new Y({color:13680808,metalness:.12,roughness:.55,emissive:3813408,emissiveIntensity:.1}));return d.position.y=.11,e.add(d),e}function l0(){return vs("floor",()=>{const r=new Me(Xe*.98,.28,Xe*.98,2,1,2);return r.translate(0,.02,0),r})}function $l(r=!1){return vs(r?"wall-fort":"wall",()=>{const e=new Me(Xe*.96,2.35,Xe*.96,3,4,3),t=e.attributes.position;for(let i=0;i<t.count;i++){let n=t.getX(i),s=t.getY(i),o=t.getZ(i);r?(s>.95&&(n*=.94,o*=.94),n+=Math.sin(i*.7)*.012,o+=Math.cos(i*.9)*.012):(s>.85&&(n*=.88,o*=.88),n+=Math.sin(i*1.7)*.04,o+=Math.cos(i*2.1)*.04,s>-.3&&s<.5&&(s+=Math.sin(i*.9)*.06)),t.setXYZ(i,n,s,o)}return t.needsUpdate=!0,va(e,-1.175,2.35,r?.35:.5),e.computeVertexNormals(),e.translate(0,1.175,0),e})}function h0(){return vs("rock-v2",()=>{const r=new Me(Xe*.99,3.55,Xe*.99,3,5,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*3.1)*.045),e.setY(t,e.getY(t)+Math.cos(t*2.3)*.035),e.setZ(t,e.getZ(t)+Math.sin(t*4.7)*.045);return e.needsUpdate=!0,va(r,-1.775,3.55,.62),r.computeVertexNormals(),r.translate(0,1.775,0),r})}function c0(){return vs("gold",()=>{const r=new Me(Xe*.96,2.35,Xe*.96,3,4,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*5.1)*.05),e.setZ(t,e.getZ(t)+Math.cos(t*3.9)*.05),e.getY(t)>.9&&(e.setX(t,e.getX(t)*.9),e.setZ(t,e.getZ(t)*.9));return e.needsUpdate=!0,va(r,-1.175,2.35,.4),r.computeVertexNormals(),r.translate(0,1.175,0),r})}function d0(r){const e=Math.round(Math.max(.25,r)*4)/4;return vs(`edge-${e.toFixed(2)}`,()=>{const t=Xe*.5*.97,i=e,n=[new E(-t,i,-t),new E(t,i,-t),new E(t,i,t),new E(-t,i,t),new E(-t,i,-t)];return new Tt().setFromPoints(n)})}function u0(){const r=new vt,e=new B(new pa(.75,2),new Y({color:6952992,emissive:16724040,emissiveIntensity:.55,metalness:.35,roughness:.4}));e.position.y=1.05,r.add(e);const t=new B(new pi(1.05,.1,10,32),new Y({color:3807264,emissive:11149360,emissiveIntensity:.45,metalness:.55,roughness:.35}));t.rotation.x=Math.PI/2,t.position.y=1.05,r.add(t);const i=new B(new Ie(1.05,1.25,.45,12),new Y({color:5915960,metalness:.35,roughness:.55,map:Hh()}));i.position.y=.25,r.add(i);const n=new B(new fa(1.55,24),new Y({color:4853776,emissive:16723992,emissiveIntensity:.55,metalness:.2,roughness:.7,transparent:!0,opacity:.85}));n.rotation.x=-Math.PI/2,n.position.y=.13,r.add(n);for(let o=0;o<6;o++){const l=o/6*Math.PI*2,a=new B(new Ve(.06+o%3*.02,6,6),new Y({color:16736288,emissive:16728080,emissiveIntensity:1.2,roughness:1}));a.position.set(Math.cos(l)*1.15,.22,Math.sin(l)*1.15),r.add(a)}const s=new Uh(16728152,1.15,8,2);return s.position.y=1.35,s.castShadow=!1,r.add(s),r.heartCore=e,r.heartLight=s,r}function f0(r=!0){const e=new vt,t=new B(new Me(.12,.08,.18),new Y({color:4866104,metalness:.5,roughness:.5}));t.position.set(0,1.35,0),e.add(t);const i=new B(new Ie(.045,.065,.55,6),new Y({color:5914656,roughness:.85}));i.position.y=1.55,e.add(i);const n=new B(new Qt(.11,.28,6),new Y({color:16755264,emissive:16742144,emissiveIntensity:1.5,roughness:1}));n.position.y=1.92,e.add(n);const s=new B(new Ve(.08,6,6),new Vt({color:16746544,transparent:!0,opacity:.55}));if(s.position.y=1.82,e.add(s),r){const o=new Uh(16750916,3.2,14,1.6);o.position.y=1.9,o.castShadow=!1,e.add(o),e.torchLight=o}return e.flame=n,e}function Ct(r,e,t,i,n,s=0,o=0,l=0){const a=new B(r,e);return a.position.set(t,i,n),a.rotation.set(s,o,l),a.castShadow=!0,a}function p0(r,e,t){const i=new vt,n=new Y({color:r,metalness:.18,roughness:.55,emissive:r,emissiveIntensity:.1});if(t==="scrabbler"){const s=new B(new Ve(.36,12,10),n);s.scale.set(1.2,.75,1.3),s.position.y=.38,s.castShadow=!0,i.add(s);const o=new B(new Ve(.32,10,8),new Y({color:4876336,metalness:.25,roughness:.45,emissive:2109456,emissiveIntensity:.15}));o.scale.set(1.15,.55,1.05),o.position.set(0,.5,-.06),i.add(o);const l=new B(new Ve(.2,10,8),new Y({color:9089104,metalness:.15,roughness:.55}));l.position.set(0,.44,.36),l.castShadow=!0,i.add(l);const a=new Y({color:16772744,emissive:16763972,emissiveIntensity:.85});for(const x of[-1,1]){const b=new B(new Ve(.05,6,6),a);b.position.set(x*.09,.48,.5),i.add(b)}const h=new Y({color:3819560,roughness:.7});for(const x of[-1,1]){for(const w of[-.14,.16])i.add(Ct(new Ie(.035,.028,.32,5),h,x*.32,.14,w,0,0,x*.7));const b=new B(new Qt(.08,.34,5),new Y({color:13684904,metalness:.7,roughness:.28}));b.rotation.z=x*.85,b.rotation.x=-.4,b.position.set(x*.32,.32,.42),b.castShadow=!0,i.add(b)}const c=new vt,d=new B(new Wt(.07,.28,3,6),new Y({color:5926960,roughness:.65}));d.position.set(0,.18,0),d.rotation.z=.35,c.add(d);const u=new vt,f=new B(new Ie(.04,.05,.85,6),new Y({color:8015912,roughness:.85}));f.position.y=.35,u.add(f);const m=new B(new Me(.48,.12,.12),new Y({color:13687016,metalness:.9,roughness:.22,emissive:4214880,emissiveIntensity:.25}));m.position.set(.08,.78,0),u.add(m);const v=new B(new Qt(.08,.28,6),new Y({color:15266047,metalness:.85,roughness:.2}));v.rotation.z=Math.PI/2,v.position.set(.38,.78,0),u.add(v);const g=v.clone();g.rotation.z=-Math.PI/2,g.position.set(-.22,.78,0),u.add(g),u.position.set(.05,.05,.05),c.add(u),c.position.set(.42,.38,.22),c.rotation.z=.2,c.rotation.x=-.45,i.add(c),i.pickaxe=c;const p=new B(new mr(.42,.52,20),new Vt({color:11067488,transparent:!0,opacity:.75,side:jt,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.05,p.visible=!1,i.add(p),i.selectRing=p}else if(t==="skitterwing"){const s=new B(new Ve(.2,10,8),n);s.position.y=.95,s.castShadow=!0,i.add(s);const o=new B(new Ve(.16,8,8),new Y({color:2785392,metalness:.2,roughness:.5,emissive:1065008,emissiveIntensity:.2}));o.scale.set(.9,.8,1.3),o.position.set(0,.88,-.22),i.add(o);const l=new B(new Ve(.12,8,8),new Y({color:5296304,roughness:.5}));l.position.set(0,1,.22),i.add(l);for(const c of[-1,1]){const d=new B(new Ie(.012,.01,.22,4),new Y({color:2130016}));d.position.set(c*.06,1.14,.28),d.rotation.z=c*.4,d.rotation.x=-.5,i.add(d)}const a=new Y({color:11075560,emissive:3180656,emissiveIntensity:.4,transparent:!0,opacity:.7,side:jt,metalness:.1,roughness:.35});for(const c of[-1,1]){const d=new B(new mi(.75,.38),a);d.position.set(c*.38,1,0),d.rotation.y=c*.35,d.rotation.z=c*.25,i.add(d);const u=new B(new mi(.5,.28),a);u.position.set(c*.32,.88,-.08),u.rotation.y=c*.5,i.add(u)}const h=new Y({color:2121808,roughness:.65});for(const c of[-1,1])i.add(Ct(new Ie(.02,.015,.35,4),h,c*.14,.7,.05,.4,0,c*.5))}else if(t==="rattlekin"){const s=new Y({color:13154456,metalness:.15,roughness:.45,emissive:4206608,emissiveIntensity:.08}),o=new B(new Wt(.22,.35,4,8),s);o.position.y=.7,o.castShadow=!0,i.add(o);for(let d=0;d<3;d++){const u=new B(new pi(.2,.025,4,10,Math.PI),s);u.rotation.x=Math.PI/2,u.position.set(0,.55+d*.12,.05),i.add(u)}const l=new B(new Ve(.2,10,8),s);l.scale.set(1,1.05,1.15),l.position.y=1.2,l.castShadow=!0,i.add(l);const a=new B(new Me(.22,.08,.16),s);a.position.set(0,1.05,.1),i.add(a);const h=new Y({color:2101256,emissive:16736288,emissiveIntensity:.7});for(const d of[-1,1]){const u=new B(new Ve(.045,6,6),h);u.position.set(d*.08,1.24,.16),i.add(u)}for(const d of[-1,1])i.add(Ct(new Ie(.045,.035,.45,5),s,d*.3,.75,0,0,0,d*.25)),i.add(Ct(new Ie(.05,.04,.4,5),s,d*.12,.28,0,.15,0,d*.1));const c=new B(new Me(.06,.5,.12),new Y({color:8949920,metalness:.8,roughness:.25}));c.position.set(.42,.7,.05),c.rotation.z=-.3,i.add(c)}else if(t==="emberling"){const s=new Y({color:14698528,emissive:16728088,emissiveIntensity:.65,metalness:.25,roughness:.35}),o=new B(new Wt(.26,.45,6,10),s);o.position.y=.7,o.castShadow=!0,i.add(o);const l=new B(new Ve(.2,10,8),s);l.position.y=1.2,i.add(l);const a=new B(new Qt(.14,.42,6),new Y({color:16748576,emissive:16736272,emissiveIntensity:.95}));a.position.y=1.5,i.add(a);for(let c=0;c<3;c++){const d=new B(new Qt(.06,.22,5),new Y({color:16740368,emissive:16728072,emissiveIntensity:.8}));d.position.set((c-1)*.12,1.38,-.12),d.rotation.x=-.5,i.add(d)}for(const c of[-1,1]){i.add(Ct(new Ie(.06,.04,.4,6),s,c*.32,.75,0,0,0,c*.45));const d=new B(new Ve(.08,6,6),new Y({color:16755264,emissive:16736272,emissiveIntensity:1}));d.position.set(c*.42,.55,.05),i.add(d)}const h=new B(new Qt(.32,.35,8,1,!0),new Y({color:16732176,emissive:16723976,emissiveIntensity:.7,transparent:!0,opacity:.75,side:jt}));h.position.y=.28,i.add(h)}else if(t==="gravemage"){const s=new Y({color:4862080,metalness:.2,roughness:.55,emissive:3151968,emissiveIntensity:.25}),o=new B(new Wt(.24,.5,5,10),s);o.position.y=.7,o.castShadow=!0,i.add(o);const l=new B(new Ve(.22,10,8),new Y({color:2758728,roughness:.7,emissive:4202624,emissiveIntensity:.2}));l.position.y=1.22,i.add(l);const a=new B(new Ve(.12,8,6),new Y({color:13154520,roughness:.5}));a.position.set(0,1.18,.12),i.add(a);const h=new Y({color:11167487,emissive:8930559,emissiveIntensity:.9});for(const u of[-1,1]){const f=new B(new Ve(.035,6,6),h);f.position.set(u*.06,1.2,.2),i.add(f)}for(const u of[-1,1])i.add(Ct(new Ie(.045,.035,.4,5),s,u*.28,.7,0,0,0,u*.2)),i.add(Ct(new Ie(.05,.04,.38,5),s,u*.1,.28,0));const c=new B(new Ie(.03,.04,1.3,6),new Y({color:6965288,roughness:.7}));c.position.set(.38,.75,.05),i.add(c);const d=new B(new Ve(.1,10,8),new Y({color:8939263,emissive:11167487,emissiveIntensity:.85,metalness:.3,roughness:.35}));d.position.set(.38,1.45,.05),i.add(d)}else if(t==="thornwitch"){const s=new Y({color:10498144,metalness:.25,roughness:.45,emissive:6295592,emissiveIntensity:.35}),o=new B(new Wt(.22,.5,5,10),s);o.position.y=.72,o.castShadow=!0,i.add(o);const l=new B(new Ve(.18,10,8),new Y({color:13148336,roughness:.5}));l.position.y=1.22,i.add(l);const a=new Y({color:3149848,emissive:16719936,emissiveIntensity:.55});for(let c=0;c<5;c++){const d=new B(new Qt(.04,.2,4),a),u=c/5*Math.PI*2;d.position.set(Math.cos(u)*.12,1.38,Math.sin(u)*.12),i.add(d)}for(const c of[-1,1])i.add(Ct(new Ie(.04,.03,.42,5),s,c*.28,.72,0,0,0,c*.35)),i.add(Ct(new Ie(.045,.035,.4,5),s,c*.1,.28,0));const h=new B(new Ie(.02,.015,.9,4),new Y({color:4198432,roughness:.6}));h.position.set(.4,.7,.05),h.rotation.z=-.4,i.add(h)}else if(t==="bonewretch"){const s=new Y({color:14209208,metalness:.2,roughness:.4,emissive:3162136,emissiveIntensity:.15}),o=new B(new Wt(.16,.32,4,8),s);o.position.y=.68,o.castShadow=!0,i.add(o);for(let h=0;h<3;h++){const c=new B(new pi(.15,.02,4,10,Math.PI),s);c.rotation.x=Math.PI/2,c.position.set(0,.55+h*.1,.04),i.add(c)}const l=new B(new Ve(.17,10,8),s);l.scale.set(1,1.1,1.15),l.position.y=1.15,i.add(l);const a=new Y({color:1056776,emissive:8453952,emissiveIntensity:.95});for(const h of[-1,1]){const c=new B(new Ve(.04,6,6),a);c.position.set(h*.07,1.18,.14),i.add(c),i.add(Ct(new Ie(.03,.025,.42,4),s,h*.26,.7,0,0,0,h*.3)),i.add(Ct(new Ie(.035,.03,.38,4),s,h*.1,.26,0,.1,0,h*.08))}}else if(t==="hero_knight"||t==="hero"){const s=new Y({color:r||12634328,metalness:.75,roughness:.28}),o=new B(new Wt(.26,.5,6,10),s);o.position.y=.72,o.castShadow=!0,i.add(o);const l=new Y({color:11055296,metalness:.8,roughness:.25});for(const f of[-1,1]){const m=new B(new Ve(.14,8,6),l);m.scale.set(1.1,.7,1),m.position.set(f*.28,1,0),i.add(m),i.add(Ct(new Ie(.07,.055,.4,6),s,f*.34,.7,0,0,0,f*.2))}const a=new B(new Ve(.2,10,8),s);a.position.y=1.28,i.add(a);const h=new B(new Me(.22,.06,.08),new Y({color:1712176,metalness:.5,roughness:.4}));h.position.set(0,1.28,.16),i.add(h);const c=new B(new Me(.04,.22,.16),new Y({color:11542568,roughness:.6}));c.position.set(0,1.48,0),i.add(c);for(const f of[-1,1])i.add(Ct(new Ie(.08,.06,.4,6),s,f*.1,.28,0));const d=new B(new Me(.05,.55,.1),new Y({color:14213360,metalness:.9,roughness:.2}));d.position.set(.4,.75,.05),d.rotation.z=-.25,i.add(d);const u=new B(new Me(.14,.04,.06),new Y({color:9068592,metalness:.4,roughness:.5}));u.position.set(.38,.5,.05),i.add(u)}else if(t==="hero_archer"){const s=new Y({color:r||5275808,metalness:.15,roughness:.65}),o=new B(new Wt(.22,.45,6,10),s);o.position.y=.68,o.castShadow=!0,i.add(o);const l=new B(new Ve(.2,10,8),new Y({color:3823728,roughness:.7}));l.scale.set(1.05,1.1,1.15),l.position.y=1.2,i.add(l);const a=new B(new Ve(.12,8,8),new Y({color:12888200,roughness:.7}));a.position.set(0,1.15,.1),i.add(a);for(const d of[-1,1])i.add(Ct(new Ie(.05,.04,.35,5),s,d*.26,.7,0,0,0,d*.3)),i.add(Ct(new Ie(.055,.045,.38,5),s,d*.09,.28,0));const h=new B(new pi(.28,.025,4,12,Math.PI),new Y({color:9068592,roughness:.6}));h.rotation.y=Math.PI/2,h.position.set(-.32,.75,.05),i.add(h);const c=new B(new Ie(.008,.008,.5,4),new Y({color:14209216}));c.position.set(-.2,.75,.05),i.add(c)}else{const s=new B(new Wt(.26,.45,6,10),n);s.position.y=.6,s.castShadow=!0,i.add(s);const o=new B(new Ve(.2,10,8),new Y({color:11178096,roughness:.6}));o.position.y=1.1,i.add(o);for(const l of[-1,1])i.add(Ct(new Ie(.05,.04,.35,5),n,l*.28,.6,0,0,0,l*.4)),i.add(Ct(new Ie(.055,.045,.35,5),n,l*.1,.25,0))}return i.scale.setScalar(e),i}function Pt(r,e,t={}){return Dn(r,()=>{const i=r0(e,t.bump??1);return new Y({map:e,bumpMap:i,bumpScale:t.bump??.08,color:t.color??16777215,metalness:t.metalness??.08,roughness:t.roughness??.82,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,vertexColors:t.vertexColors??!1})})}function zi(r,e){if(r===A.Lava)return Dn("floor-lava",()=>new Y({color:16728080,roughness:.4,metalness:.15,emissive:16722432,emissiveIntensity:1.2}));if(r===A.Water)return Dn("floor-water",()=>new Y({color:2777224,roughness:.2,metalness:.45,emissive:1325144,emissiveIntensity:.45}));if(r===A.BridgeWood)return Dn("floor-bridge-wood",()=>new Y({color:9067048,roughness:.85,metalness:.05,emissive:2758664,emissiveIntensity:.08}));if(r===A.BridgeStone)return Dn("floor-bridge-stone",()=>new Y({color:6975616,roughness:.65,metalness:.3,emissive:2106408,emissiveIntensity:.1}));if(r===A.Heart)return Pt("floor-heart",e0(),{metalness:.3,roughness:.55,emissive:5249056,emissiveIntensity:.22,bump:.06});if(r===A.Dirt)return Pt("floor-dirt",Zg(),{metalness:.02,roughness:.95,emissive:657412,emissiveIntensity:.03,bump:.12});switch(e){case y.Treasury:return Pt("floor-treasury",t0(),{metalness:.55,roughness:.4,emissive:3811336,emissiveIntensity:.15,bump:.05});case y.Lair:return Pt("floor-lair",i0(),{metalness:.08,roughness:.85,emissive:2101272,emissiveIntensity:.1,bump:.09});case y.Hatchery:return Pt("floor-hatchery",n0(),{metalness:.05,roughness:.88,emissive:2105360,emissiveIntensity:.12,bump:.08});case y.Training:return Pt("floor-training",Ks(),{metalness:.2,roughness:.7,emissive:2101264,emissiveIntensity:.08,bump:.1});case y.Library:return Pt("floor-library",jl(),{metalness:.15,roughness:.65,emissive:1054760,emissiveIntensity:.18,bump:.06});case y.Portal:return Pt("floor-portal",s0(),{metalness:.35,roughness:.45,emissive:4200552,emissiveIntensity:.35,bump:.07});case y.Guard:return Pt("floor-training",Ks(),{metalness:.25,roughness:.68,emissive:1581096,emissiveIntensity:.12,bump:.1,color:8425632});case y.Workshop:return Pt("floor-training",Ks(),{metalness:.35,roughness:.55,emissive:3151880,emissiveIntensity:.18,bump:.12,color:12093520});case y.Temple:return Pt("floor-library",jl(),{metalness:.35,roughness:.5,emissive:4206616,emissiveIntensity:.28,bump:.06,color:13676640});case y.CombatPit:return Pt("floor-training",Ks(),{metalness:.22,roughness:.72,emissive:4198416,emissiveIntensity:.2,bump:.12,color:11554880});default:return Pt("floor-claimed-v2",Hh(),{color:12101776,metalness:.2,roughness:.58,emissive:2761752,emissiveIntensity:.1,bump:.1})}}function m0(r){if(r===y.None)return null;const t={[y.Treasury]:{kind:"goldRing",color:[224,176,40],emissive:12619808,ei:.35,size:1.5},[y.Lair]:{kind:"bedding",color:[130,80,140],emissive:6303856,ei:.2,size:1.45},[y.Hatchery]:{kind:"warmSpot",color:[140,170,60],emissive:7372832,ei:.25,size:1.4},[y.Training]:{kind:"worn",color:[170,70,60],emissive:8396832,ei:.18,size:1.4},[y.Library]:{kind:"runes",color:[90,120,210],emissive:4219072,ei:.4,size:1.45},[y.Portal]:{kind:"swirl",color:[160,80,220],emissive:8401088,ei:.55,size:1.5},[y.Guard]:{kind:"worn",color:[100,120,140],emissive:4219008,ei:.22,size:1.4},[y.Workshop]:{kind:"worn",color:[170,120,60],emissive:8405008,ei:.28,size:1.4},[y.Prison]:{kind:"worn",color:[90,100,110],emissive:3162192,ei:.2,size:1.4},[y.Torture]:{kind:"worn",color:[160,50,60],emissive:8392736,ei:.35,size:1.4},[y.Graveyard]:{kind:"runes",color:[70,110,90],emissive:2121792,ei:.3,size:1.45},[y.Temple]:{kind:"runes",color:[200,170,80],emissive:12619824,ei:.45,size:1.5},[y.CombatPit]:{kind:"worn",color:[180,70,50],emissive:10498080,ei:.3,size:1.45}}[r];if(!t)return null;const i=o0(t.kind,t.color),n=new Y({map:i,transparent:!0,depthWrite:!1,color:16777215,emissive:t.emissive,emissiveIntensity:t.ei,metalness:r===y.Treasury?.65:.15,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-1}),s=new B(new mi(t.size,t.size),n);return s.rotation.x=-Math.PI/2,s.position.y=.14,s}function to(r,e,t){if(e)return Pt("fortified",Jg(),{metalness:.42,roughness:.48,emissive:2761760,emissiveIntensity:.06,bump:.06,vertexColors:!0});switch(r){case A.Rock:return Pt("rock-v3",Kg(),{metalness:.18,roughness:.72,emissive:2631736,emissiveIntensity:.12,bump:.12,vertexColors:!0});case A.Earth:return Pt("earth-v2",$g(),{metalness:.04,roughness:.9,emissive:3809288,emissiveIntensity:.16,bump:.15,vertexColors:!0});case A.Gold:return Pt("gold-v3",Qg(),{metalness:.88,roughness:.2,emissive:14721048,emissiveIntensity:.95,bump:.08,vertexColors:!0});case A.Dirt:return zi(A.Dirt,y.None);case A.Claimed:return zi(A.Claimed,t);case A.Heart:return zi(A.Heart,y.None);case A.Lava:return zi(A.Lava,y.None);case A.Water:return zi(A.Water,y.None);case A.BridgeWood:return zi(A.BridgeWood,y.None);case A.BridgeStone:return zi(A.BridgeStone,y.None);default:return Dn("default",()=>new Y({color:5592405}))}}function g0(r){if(r===y.None)return null;const e=new vt;if(r===y.Treasury){const t=new Y({color:14725160,metalness:.85,roughness:.3,emissive:10514448,emissiveIntensity:.45}),i=new B(new Ve(.35,10,8),t);i.scale.set(1.3,.55,1.1),i.position.set(-.35,.22,.15),i.castShadow=!0,e.add(i);const n=new B(new Ve(.22,8,6),t);n.scale.set(1.1,.5,1),n.position.set(.15,.16,-.35),e.add(n);const s=new B(new Me(.55,.35,.4),new Y({color:6961688,metalness:.25,roughness:.7}));s.position.set(.4,.28,.25),s.castShadow=!0,e.add(s);const o=new B(new Me(.55,.08,.42),new Y({color:9064480,metalness:.3,roughness:.65}));o.position.set(.4,.48,.25),e.add(o);const l=new B(new Me(.58,.06,.08),new Y({color:13934624,metalness:.8,roughness:.3,emissive:8409104,emissiveIntensity:.3}));l.position.set(.4,.3,.25),e.add(l)}else if(r===y.Lair){const t=new Y({color:6963304,roughness:.9,emissive:3149864,emissiveIntensity:.12}),i=new B(new Wt(.18,.55,4,8),t);i.rotation.z=Math.PI/2,i.position.set(-.2,.2,.1),i.castShadow=!0,e.add(i);const n=new B(new Wt(.15,.45,4,8),t);n.rotation.z=Math.PI/2,n.rotation.y=.4,n.position.set(.35,.18,-.25),e.add(n)}else if(r===y.Hatchery){const t=new B(new pi(.55,.16,8,16),new Y({color:6979632,roughness:.85,emissive:4214808,emissiveIntensity:.28}));t.rotation.x=-Math.PI/2,t.position.y=.16,e.add(t);const i=new B(new Ve(.18,8,6),new Y({color:15253568,emissive:10518560,emissiveIntensity:.35,roughness:.5}));i.position.y=.22,e.add(i)}else if(r===y.Training){const t=new Y({color:6965288,roughness:.8}),i=new Y({color:8949920,metalness:.75,roughness:.35}),n=new B(new Ie(.06,.08,.9,6),t);n.position.set(-.35,.5,0),n.castShadow=!0,e.add(n);const s=new B(new Ie(.06,.08,.9,6),t);s.position.set(.35,.5,0),e.add(s);const o=new B(new Me(.85,.08,.12),t);o.position.set(0,.7,0),e.add(o);for(const h of[-.2,.05,.3]){const c=new B(new Me(.05,.45,.08),i);c.position.set(h,.55,.05),e.add(c)}const l=new B(new Ie(.18,.22,.7,8),new Y({color:9068624,roughness:.75,emissive:4198416,emissiveIntensity:.15}));l.position.set(0,.4,-.45),l.castShadow=!0,e.add(l);const a=new B(new Ve(.16,8,6),new Y({color:12619888,roughness:.7}));a.position.set(0,.85,-.45),e.add(a)}else if(r===y.Library){const t=new Y({color:5913122,roughness:.75}),i=new B(new Me(.7,.12,.45),t);i.position.set(0,.55,0),i.castShadow=!0,e.add(i);const n=new B(new Ie(.08,.12,.45,6),t);n.position.set(0,.28,0),e.add(n);const s=new B(new Me(.28,.06,.22),new Y({color:3166368,emissive:1056864,emissiveIntensity:.25,roughness:.6}));s.position.set(.05,.65,0),e.add(s);const o=new B(new Ie(.03,.035,.14,6),new Y({color:15259808,emissive:16755264,emissiveIntensity:.4}));o.position.set(-.22,.68,.08),e.add(o)}else if(r===y.Portal){const t=new Y({color:8401088,emissive:10502399,emissiveIntensity:.7,metalness:.4,roughness:.35,transparent:!0,opacity:.85}),i=new B(new Ie(.2,.28,1.4,10),t);i.position.y=.75,i.castShadow=!0,e.add(i);const n=new B(new pi(.42,.06,8,20),t);n.position.y=1.15,n.rotation.x=Math.PI/2,e.add(n);const s=new B(new Ve(.18,10,8),new Y({color:14721279,emissive:12607743,emissiveIntensity:1.1,roughness:.3}));s.position.y=1.15,e.add(s)}else if(r===y.Guard){const t=new Y({color:5914672,roughness:.8}),i=new Y({color:9478320,metalness:.7,roughness:.35,emissive:2109504,emissiveIntensity:.15}),n=new B(new Ie(.07,.09,1.35,6),t);n.position.set(0,.7,0),n.castShadow=!0,e.add(n);const s=new B(new Me(.55,.7,.04),new Y({color:6303776,emissive:4198416,emissiveIntensity:.2,roughness:.75}));s.position.set(0,1.05,.08),e.add(s);const o=new B(new Ie(.28,.28,.06,8),i);o.rotation.x=Math.PI/2,o.position.set(.45,.55,-.2),e.add(o);const l=new B(new Me(.7,.08,.2),t);l.position.set(-.35,.35,.25),e.add(l)}else if(r===y.Workshop){const t=new Y({color:6965296,roughness:.75}),i=new Y({color:6318192,metalness:.85,roughness:.3,emissive:4200456,emissiveIntensity:.2}),n=new Y({color:16736288,emissive:16728080,emissiveIntensity:.9,metalness:.4,roughness:.4}),s=new B(new Me(1.1,.18,.55),t);s.position.set(-.15,.55,.1),s.castShadow=!0,e.add(s);const o=new B(new Me(.1,.5,.1),t);o.position.set(-.55,.28,.25),e.add(o);const l=new B(new Me(.1,.5,.1),t);l.position.set(.25,.28,-.05),e.add(l);const a=new B(new Me(.45,.22,.28),i);a.position.set(.45,.45,-.25),a.castShadow=!0,e.add(a);const h=new B(new Me(.22,.1,.14),i);h.position.set(.68,.5,-.25),e.add(h);const c=new B(new Ie(.18,.22,.28,8),i);c.position.set(-.45,.35,-.35),e.add(c);const d=new B(new Ve(.1,8,6),n);d.position.set(-.45,.48,-.35),e.add(d);const u=new B(new Me(.28,.35,.08),new Y({color:9068608,roughness:.7}));u.position.set(.1,.72,.15),e.add(u)}else if(r===y.Prison){const t=new Y({color:6318192,metalness:.85,roughness:.35,emissive:1054752,emissiveIntensity:.12}),i=new Y({color:4864040,roughness:.8});for(let l=0;l<4;l++){const a=new B(new Ie(.03,.03,1.2,5),t);a.position.set(-.45+l*.28,.7,.55),a.castShadow=!0,e.add(a)}const n=new B(new Me(1.05,.06,.06),t);n.position.set(-.05,.85,.55),e.add(n);const s=new B(new Me(.9,.12,.45),i);s.position.set(.15,.28,-.25),e.add(s);const o=new B(new Ie(.025,.025,.55,5),t);o.position.set(.55,.55,-.1),e.add(o)}else if(r===y.Torture){const t=new Y({color:5910560,roughness:.75}),i=new Y({color:7370880,metalness:.8,roughness:.3,emissive:4198416,emissiveIntensity:.25}),n=new B(new Me(1.15,.14,.55),t);n.position.set(0,.55,0),n.castShadow=!0,e.add(n);for(const l of[-1,1]){const a=new B(new Ie(.06,.07,.9,6),t);a.position.set(l*.5,.55,0),e.add(a)}const s=new B(new Qt(.08,.28,5),new Y({color:10528944,metalness:.7,roughness:.3}));s.position.set(0,.85,.1),e.add(s);const o=new B(new pi(.28,.04,6,12),i);o.position.set(-.35,.7,-.35),o.rotation.y=.4,e.add(o)}else if(r===y.Graveyard){const t=new Y({color:6846568,roughness:.7,metalness:.15,emissive:1585192,emissiveIntensity:.2}),i=new Y({color:4218952,emissive:2113576,emissiveIntensity:.25,roughness:.8}),n=new B(new Me(.55,.7,.12),t);n.position.set(-.35,.45,.2),n.castShadow=!0,e.add(n);const s=new B(new Me(.35,.08,.08),t);s.position.set(-.35,.7,.2),e.add(s);const o=new B(new Ve(.32,8,6),i);o.scale.set(1.2,.45,.9),o.position.set(.35,.22,-.15),e.add(o);const l=new B(new Ie(.03,.03,.35,5),new Y({color:14209200,roughness:.5}));l.rotation.z=.8,l.position.set(.2,.35,.25),e.add(l)}else if(r===y.Temple){const t=new Y({color:13938768,metalness:.7,roughness:.35,emissive:8413216,emissiveIntensity:.45}),i=new Y({color:3811352,roughness:.75}),n=new B(new Ie(.35,.42,.35,8),i);n.position.set(0,.28,0),n.castShadow=!0,e.add(n);const s=new B(new Qt(.22,.55,6),t);s.position.set(0,.72,0),s.castShadow=!0,e.add(s);const o=new B(new Ve(.1,8,8),new Y({color:16769152,emissive:16760896,emissiveIntensity:1.1,metalness:.4,roughness:.3}));o.position.set(0,1.05,0),e.add(o);for(const l of[-.55,.55]){const a=new B(new Ie(.04,.05,.35,5),i);a.position.set(l,.35,-.4),e.add(a);const h=new B(new Ve(.06,6,6),new Y({color:16755264,emissive:16744480,emissiveIntensity:1.2}));h.position.set(l,.58,-.4),e.add(h)}}else if(r===y.CombatPit){const t=new Y({color:10514496,roughness:.9,metalness:.05,emissive:3151880,emissiveIntensity:.12}),i=new Y({color:7370880,metalness:.8,roughness:.35,emissive:4198416,emissiveIntensity:.2}),n=new B(new Ie(.7,.78,.18,12),t);n.position.set(0,.2,0),n.receiveShadow=!0,e.add(n);const s=new B(new pi(.72,.05,6,16),i);s.rotation.x=Math.PI/2,s.position.set(0,.28,0),e.add(s);for(const[l,a]of[[-.45,.35],[.4,-.3]]){const h=new B(new Ie(.07,.08,.95,6),i);h.position.set(l,.55,a),h.castShadow=!0,e.add(h)}const o=new B(new Me(.08,.55,.04),new Y({color:12634320,metalness:.85,roughness:.25}));o.position.set(.35,.55,.35),o.rotation.z=.35,e.add(o)}else return null;return e}function v0(){const r=new vt,e=new Y({color:16773280,emissive:16764992,emissiveIntensity:1.65,metalness:.98,roughness:.1}),t=[[.35,1.7,.2],[-.4,1.35,-.3],[.1,2,-.45],[-.25,1.9,.4],[.45,1.1,.35],[-.5,2.15,.05],[0,2.35,.15],[.55,1.55,-.2]];for(const[n,s,o]of t){const l=new B(new ma(.11+Math.abs(n)%.05,0),e);l.position.set(n,s,o),r.add(l)}const i=new B(new Me(.14,1.85,.14),new Y({color:16769136,emissive:16756768,emissiveIntensity:1.35,metalness:.95,roughness:.15}));return i.position.set(.15,1.45,-.1),i.rotation.z=.2,r.add(i),r}function x0(){const r=new vt,e=new B(new Me(Xe*.98,.18,Xe*.98),new Y({color:3805704,roughness:.85,metalness:.05,emissive:4853768,emissiveIntensity:.35}));e.position.y=.05,e.receiveShadow=!0,r.add(e);const t=new B(new Me(Xe*.82,.08,Xe*.82),new Y({color:16733456,roughness:.35,metalness:.2,emissive:16726528,emissiveIntensity:1.35}));t.position.y=.14,r.add(t);for(const[i,n,s]of[[-.45,-.3,.35],[.4,.35,.28],[.1,-.5,.22],[-.2,.45,.3]]){const o=new B(new Me(s,.06,s*.85),new Y({color:1706502,roughness:.95,emissive:8394752,emissiveIntensity:.45}));o.position.set(i,.17,n),r.add(o)}return r}function y0(){const r=new vt,e=new B(new Me(Xe*.98,.16,Xe*.98),new Y({color:1716296,roughness:.25,metalness:.35,emissive:663608,emissiveIntensity:.4}));e.position.y=.04,e.receiveShadow=!0,r.add(e);const t=new B(new Me(Xe*.78,.04,Xe*.78),new Y({color:3834032,roughness:.15,metalness:.55,emissive:1591400,emissiveIntensity:.55,transparent:!0,opacity:.92}));return t.position.y=.12,r.add(t),r}function _0(r){const e=new vt,t=new B(new Me(Xe*.95,.1,Xe*.95),new Y({color:r?1714232:4855816,roughness:.7,metalness:.1,emissive:r?1056816:12593152,emissiveIntensity:r?.25:.7}));t.position.y=.06,e.add(t);const i=new Y({color:r?6975616:9067048,roughness:r?.65:.82,metalness:r?.35:.08,emissive:r?2106408:3809296,emissiveIntensity:.12});for(let s=-2;s<=2;s++){const o=new B(new Me(Xe*.92,.12,.28),i);o.position.set(0,.2,s*.36),o.castShadow=!0,o.receiveShadow=!0,e.add(o)}const n=new Y({color:r?5265512:5913112,roughness:.75,metalness:r?.3:.05});for(const s of[-.85,.85]){const o=new B(new Me(.1,.35,Xe*.9),n);o.position.set(s,.38,0),e.add(o)}return e}function w0(r){const e=new vt,t=new Y({color:6964264,roughness:.78,metalness:.12,emissive:2758664,emissiveIntensity:.12}),i=new Y({color:8947864,metalness:.85,roughness:.3,emissive:2105384,emissiveIntensity:.1}),n=new B(new Me(.12,1.55,.18),t);n.position.set(-.72,.85,0),e.add(n);const s=n.clone();s.position.x=.72,e.add(s);const o=new B(new Me(1.56,.14,.2),t);o.position.set(0,1.62,0),e.add(o);const l=new B(new Me(1.2,1.4,.1),t);l.castShadow=!0,r===$e.Open?(l.position.set(.55,.78,.35),l.rotation.y=-1.05):l.position.set(0,.78,0),e.add(l);const a=new B(new Me(1.22,.08,.12),i);a.position.copy(l.position),a.position.y=.55,a.rotation.copy(l.rotation),e.add(a);const h=new B(new Ve(.06,8,6),i);return r===$e.Open?h.position.set(.35,.75,.55):h.position.set(.45,.75,.08),e.add(h),e}function M0(){const r=new vt,e=new Y({color:5920864,roughness:.7,metalness:.25,emissive:2103320,emissiveIntensity:.12}),t=new Y({color:11055296,metalness:.8,roughness:.28,emissive:4206624,emissiveIntensity:.2}),i=new B(new Ie(.35,.42,.22,8),e);i.position.y=.14,i.castShadow=!0,r.add(i);const n=new B(new Ie(.1,.12,.7,6),e);n.position.y=.55,r.add(n);const s=new B(new Me(.55,.22,.28),t);s.position.set(.05,.95,0),s.castShadow=!0,r.add(s);const o=new B(new Ie(.06,.08,.45,6),t);o.rotation.z=Math.PI/2,o.position.set(.4,.95,0),r.add(o);const l=new B(new Qt(.05,.18,6),new Y({color:12634328,metalness:.9,roughness:.2,emissive:8405008,emissiveIntensity:.35}));return l.rotation.z=-Math.PI/2,l.position.set(.68,.95,0),r.add(l),r}function S0(){const r=new vt,e=new Y({color:5913122,roughness:.8}),t=new Y({color:11544616,emissive:6295568,emissiveIntensity:.35,roughness:.7}),i=new B(new Ie(.04,.05,1.6,6),e);i.position.y=.85,i.castShadow=!0,r.add(i);const n=new B(new Me(.55,.38,.03),t);n.position.set(.3,1.4,0),r.add(n);const s=new B(new Ve(.07,8,6),new Y({color:14729280,metalness:.7,emissive:10518560,emissiveIntensity:.4}));return s.position.y=1.68,r.add(s),r}const Kl={uniforms:{tDiffuse:{value:null},uContrast:{value:1.05},uSaturation:{value:1.08},uVignette:{value:.22},uTint:{value:new je(1.02,.98,.92)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uContrast;
    uniform float uSaturation;
    uniform float uVignette;
    uniform vec3 uTint;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      c.rgb = (c.rgb - 0.5) * uContrast + 0.5;
      float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(luma), c.rgb, uSaturation);
      c.rgb *= uTint;
      float d = distance(vUv, vec2(0.5));
      // Soft vignette — keep map readable on phones
      c.rgb *= mix(1.0, smoothstep(1.05, 0.25, d), uVignette);
      gl_FragColor = c;
    }
  `};class b0{scene;camera;renderer;composer;bloomPass;gridGroup=new vt;entityGroup=new vt;fxGroup=new vt;tileMeshes=new Map;torches=[];heartGroup=null;markerMesh;selectRing;clock=0;edgeMat;earthEdgeMat;goldEdgeMat;rockEdgeMat;contextLost=!1;useComposer=!0;renderFails=0;onContextLost=null;onContextRestored=null;fxDebrisGeo=new Me(.1,.08,.1);fxSparkGeo=new Ve(.2,8,8);fxGlowGeo=new Ve(.4,10,10);FX_CAP=64;digLoad=!1;basePixelRatio=1;dirLight=null;markOverlay=new vt;markPlaneGeo=new mi(Xe*.7,Xe*.7);digWireGeo=new Pg(new Me(Xe*.92,2.2,Xe*.92));fogOverlay=new vt;fogBoxGeo=new Me(Xe*1.05,4.4,Xe*1.05);fogMat=new Vt({color:525834,depthWrite:!0});fogInstanced=null;fogCapacity=0;fogDummy=new Mt;constructor(e){this.scene=new cg,this.scene.background=new je(2235428),this.scene.fog=new ha(1972256,.0055),this.camera=new Xt(52,1,.1,220),this.camera.position.set(0,32,24),this.camera.lookAt(0,0,0),this.renderer=new hg({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.basePixelRatio=Math.min(window.devicePixelRatio||1,t?1.15:1.5),this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.setClearColor(2235428,1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$h,this.renderer.toneMapping=ih,this.renderer.toneMappingExposure=1.6,this.renderer.outputColorSpace=Ut;const i=new kg(14734528,1);this.scene.add(i);const n=new Rg(16773860,4864072,.85);n.position.set(0,40,0),this.scene.add(n);const s=new Fl(16773856,1.25);s.position.set(22,48,14),s.castShadow=!0,s.shadow.mapSize.set(512,512),this.dirLight=s,s.shadow.camera.near=5,s.shadow.camera.far=120,s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,s.shadow.bias=-6e-4,s.shadow.intensity=.55,this.scene.add(s);const o=new Fl(9480400,.45);o.position.set(-18,28,-14),this.scene.add(o);const l=new B(new mi(200,200),new Y({color:1709080,metalness:.05,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-.35,l.receiveShadow=!0,this.scene.add(l),this.scene.add(this.gridGroup),this.scene.add(this.markOverlay),this.scene.add(this.fogOverlay),this.scene.add(this.entityGroup),this.scene.add(this.fxGroup),this.edgeMat=new sn({color:2761240,transparent:!0,opacity:.55}),this.earthEdgeMat=new sn({color:10510376,transparent:!0,opacity:.85}),this.goldEdgeMat=new sn({color:16769126,transparent:!0,opacity:1}),this.rockEdgeMat=new sn({color:8949928,transparent:!0,opacity:.8}),this.markerMesh=new B(new mi(Xe*.9,Xe*.9),new Vt({color:16755232,transparent:!0,opacity:.35,depthWrite:!1})),this.markerMesh.rotation.x=-Math.PI/2,this.markerMesh.position.y=.14,this.markerMesh.visible=!1,this.scene.add(this.markerMesh),this.selectRing=new B(new mr(.4,.55,24),new Vt({color:16764006,transparent:!0,opacity:.8,side:jt})),this.selectRing.rotation.x=-Math.PI/2,this.selectRing.position.y=.16,this.selectRing.visible=!1,this.scene.add(this.selectRing),this.composer=new Vl(this.renderer),this.composer.addPass(new Xl(this.scene,this.camera));const a=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new cn(new le(1,1),a?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new Yo(Kl)),this.onResize(),window.addEventListener("resize",()=>this.onResize()),this.bindContextRecovery(e)}bindContextRecovery(e){e.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.useComposer=!1,console.warn("[underkeep] WebGL context lost"),this.onContextLost?.()},!1),e.addEventListener("webglcontextrestored",()=>{console.warn("[underkeep] WebGL context restored — reinit renderer pipeline"),this.contextLost=!1;try{this.reinitPipeline(),this.onContextRestored?.()}catch(t){console.error("[underkeep] context restore failed",t),this.onContextLost?.()}},!1)}reinitPipeline(){const e=new le;this.renderer.getSize(e),this.renderer.setClearColor(2235428,1),this.composer=new Vl(this.renderer),this.composer.addPass(new Xl(this.scene,this.camera));const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new cn(new le(e.x||1,e.y||1),t?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new Yo(Kl)),this.useComposer=!0,this.renderFails=0,this.onResize()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}disposeGridChild(e){e.traverse(t=>{const i=t;if(i.isMesh){const s=i.geometry;s&&(i.userData.disposeGeo||s.userData?.disposeGeo)&&s.dispose();const o=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const l of o)l&&l.userData?.disposeMat&&l.dispose()}t.isLight})}rebuildGrid(e){for(;this.gridGroup.children.length;){const t=this.gridGroup.children.pop();this.disposeGridChild(t),this.gridGroup.remove(t)}this.tileMeshes.clear(),this.torches=[],this.heartGroup=null;for(const t of e.tiles){const i=e.tileToWorld(t.x,t.y),n=`${t.x},${t.y}`;if(t.kind===A.Rock){const l=new B(h0(),to(A.Rock,!1,t.room));l.position.set(i.x,0,i.z),l.castShadow=!0,l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),this.addEdge(i.x,i.z,3.5,this.rockEdgeMat),this.tileMeshes.set(n,l);continue}if(t.fortified){const l=new B($l(!0),to(A.Earth,!0,t.room));l.position.set(i.x,0,i.z),l.castShadow=!0,l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),this.addEdge(i.x,i.z,2.45,this.edgeMat),this.tileMeshes.set(n,l);continue}if(t.kind===A.Earth||t.kind===A.Gold){const l=t.kind===A.Gold?c0():$l(),a=new B(l,to(t.kind,!1,t.room));a.position.set(i.x,0,i.z);const h=Math.max(0,Math.min(.95,t.digProgress||0)),c=1-h*.7,d=1-h*.85;if(a.scale.set(c,d,c),a.position.y=-h*1.15,a.castShadow=!0,a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),t.kind===A.Gold&&h<.85){const f=v0();f.position.set(i.x,a.position.y,i.z),f.scale.set(c,d,c),f.userData.glitterFor=n,this.gridGroup.add(f)}const u=2.35*d+a.position.y;this.addEdge(i.x,i.z,Math.max(.4,u),t.kind===A.Gold?this.goldEdgeMat:this.earthEdgeMat),this.tileMeshes.set(n,a);continue}if(t.kind===A.Lava){const l=x0();l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l);continue}if(t.kind===A.Water){const l=y0();l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l);continue}if(t.kind===A.BridgeWood||t.kind===A.BridgeStone){const l=_0(t.kind===A.BridgeStone);l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l);continue}if(t.kind===A.Claimed){const l=a0(t.room);l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l)}else{const l=new B(l0(),zi(t.kind,t.room));l.position.set(i.x,0,i.z),l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),this.tileMeshes.set(n,l)}if(t.kind===A.Heart){const l=u0();l.position.set(i.x,0,i.z),this.gridGroup.add(l),this.heartGroup=l}const s=m0(t.room);s&&(s.position.set(i.x,.18,i.z),this.gridGroup.add(s));const o=g0(t.room);if(o&&(o.position.set(i.x,.14,i.z),this.gridGroup.add(o)),t.door===$e.Closed||t.door===$e.Open){const l=w0(t.door);l.position.set(i.x,.02,i.z),!!e.get(t.x+1,t.y)&&(e.get(t.x+1,t.y).fortified||e.get(t.x+1,t.y).kind===A.Earth||e.get(t.x+1,t.y).kind===A.Gold||e.get(t.x+1,t.y).kind===A.Rock)||!!e.get(t.x-1,t.y)&&(e.get(t.x-1,t.y).fortified||e.get(t.x-1,t.y).kind===A.Earth||e.get(t.x-1,t.y).kind===A.Gold||e.get(t.x-1,t.y).kind===A.Rock)||(l.rotation.y=Math.PI/2),this.gridGroup.add(l)}if(t.trap===gt.Sentry){const l=M0();l.position.set(i.x+.15,.02,i.z-.15),this.gridGroup.add(l)}if(t.rally){const l=S0();l.position.set(i.x-.25,.02,i.z+.25),this.gridGroup.add(l)}if(t.torch){const l=this.torches.filter(u=>u.torchLight).length<12,a=f0(l);let h=.65,c=0;const d=[[1,0,.65,0],[-1,0,-.65,0],[0,1,0,.65],[0,-1,0,-.65]];for(const[u,f,m,v]of d){const g=e.get(t.x+u,t.y+f);if(g&&(g.kind===A.Earth||g.kind===A.Gold||g.kind===A.Rock||g.fortified)){h=m,c=v;break}}a.position.set(i.x+h,0,i.z+c),this.gridGroup.add(a),this.torches.push(a)}}this.syncMarkOverlay(e),this.syncFogOverlay(e)}syncMarkOverlay(e){for(;this.markOverlay.children.length;){const t=this.markOverlay.children.pop();this.markOverlay.remove(t);const i=t;i.material&&i.material.userData?.disposeMat&&i.material.dispose()}for(const t of e.tiles){if(!t.mark)continue;const i=e.tileToWorld(t.x,t.y),n=Math.max(0,Math.min(.95,t.digProgress||0)),s=1-n*.85,o=t.kind===A.Earth||t.kind===A.Gold?Math.max(.5,2.42*s-n*1.15):.2,l=new Vt({color:t.mark===1?16724770:t.mark===2?4500223:13421738,transparent:!0,opacity:.7,depthWrite:!1});l.userData.disposeMat=!0;const a=new B(this.markPlaneGeo,l);if(a.rotation.x=-Math.PI/2,a.position.set(i.x,o,i.z),this.markOverlay.add(a),t.mark===1&&(t.kind===A.Earth||t.kind===A.Gold)){const h=new sn({color:16729122,transparent:!0,opacity:.85});h.userData.disposeMat=!0;const c=new pg(this.digWireGeo,h);c.position.set(i.x,1.1*s-n*1.15,i.z),c.scale.set(1,Math.max(.25,s),1),this.markOverlay.add(c)}}}syncFogOverlay(e){const t=[];for(const s of e.tiles){const o=`${s.x},${s.y}`,l=this.tileMeshes.get(o);s.explored?l&&!l.visible&&(l.visible=!0):(t.push(s),l&&(l.visible=!1))}const i=Math.max(t.length,1);if(!this.fogInstanced||this.fogCapacity<i){this.fogInstanced&&(this.fogOverlay.remove(this.fogInstanced),this.fogInstanced=null);const s=Math.max(i,256),o=new fg(this.fogBoxGeo,this.fogMat,s);o.instanceMatrix.setUsage(Ic),o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,this.fogInstanced=o,this.fogCapacity=s,this.fogOverlay.add(o)}const n=this.fogInstanced;for(let s=0;s<t.length;s++){const o=t[s],l=e.tileToWorld(o.x,o.y);this.fogDummy.position.set(l.x,1.9,l.z),this.fogDummy.scale.set(1,1,1),this.fogDummy.updateMatrix(),n.setMatrixAt(s,this.fogDummy.matrix)}n.count=t.length,n.instanceMatrix.needsUpdate=!0,n.visible=t.length>0}addEdge(e,t,i,n){const s=new Xo(d0(i),n);s.position.set(e,0,t),this.gridGroup.add(s)}updateDigVisual(e,t,i,n){const s=`${e},${t}`,o=this.tileMeshes.get(s);if(!o)return;const l=Math.max(0,Math.min(.95,i||0)),a=1-l*.7,h=1-l*.85;o.scale.set(a,h,a),o.position.y=-l*1.15;for(const c of this.gridGroup.children)c.userData?.glitterFor===s&&(c.position.y=o.position.y,c.scale.set(a,h,a),c.visible=l<.85&&n===A.Gold)}setHover(e,t,i,n=16755232){this.markerMesh.visible=i,i&&(this.markerMesh.position.x=e,this.markerMesh.position.z=t,this.markerMesh.material.color.setHex(n))}setSelectRing(e,t,i){this.selectRing.visible=i,i&&(this.selectRing.position.x=e,this.selectRing.position.z=t)}clearEntities(){for(;this.entityGroup.children.length;)this.entityGroup.remove(this.entityGroup.children[0])}addEntityMesh(e){this.entityGroup.add(e)}removeEntityMesh(e){this.entityGroup.remove(e)}createEntityVisual(e,t,i){return p0(t,i,e)}trimFx(){for(;this.fxGroup.children.length>this.FX_CAP;){const e=this.fxGroup.children[0];this.disposeFxChild(e),this.fxGroup.remove(e)}}disposeFxChild(e){const t=e;if(t.isMesh){const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}const i=e;if(i.isLine&&i.geometry&&i.geometry.userData?.disposeGeo&&i.geometry.dispose(),i.isLine){const n=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}}setDigLoad(e){this.digLoad!==e&&(this.digLoad=e,e?(this.useComposer=!1,this.bloomPass.enabled=!1,this.renderer.setPixelRatio(Math.min(this.basePixelRatio,1)),this.renderer.shadowMap.enabled=!1,this.dirLight&&(this.dirLight.castShadow=!1),this.trimFx()):(this.bloomPass.enabled=!0,this.useComposer=!this.contextLost,this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.shadowMap.enabled=!0,this.dirLight&&(this.dirLight.castShadow=!0),this.onResize()))}spawnFx(e,t,i=.6){if(this.fxGroup.children.length>=this.FX_CAP)return;const n=new Vt({color:t,transparent:!0,opacity:.9});n.userData.disposeMat=!0;const s=new B(this.fxSparkGeo,n);s.position.copy(e),s.position.y+=.5,this.fxGroup.add(s);const o=s;o._fxStart=this.clock,o._fxLife=i}spawnCareSparks(e,t,i,n=!1){this.fxGroup.children.length>this.FX_CAP-8&&this.trimFx();const s=i==="heal"?5636010:16763955,o=i==="heal"?13172712:16772795,l=i==="heal"?2817928:16755234,a=n?this.digLoad?6:10:this.digLoad?3:5;for(let h=0;h<a&&!(this.fxGroup.children.length>=this.FX_CAP);h++){const c=.7+Math.random()*.6,d=h%3===0?o:h%3===1?s:l,u=new Vt({color:d,transparent:!0,opacity:1,depthWrite:!1});u.userData.disposeMat=!0;const f=new B(this.fxSparkGeo,u);f.scale.setScalar(c),f.position.set(e+(Math.random()-.5)*.85,.45+Math.random()*.7,t+(Math.random()-.5)*.85);const m=f;m._fxStart=this.clock,m._fxLife=1.2+Math.random()*.7,m._vx=(Math.random()-.5)*1.4,m._vy=.9+Math.random()*1.6,m._vz=(Math.random()-.5)*1.4,m._fxFloat=!0,this.fxGroup.add(f)}if(this.fxGroup.children.length<this.FX_CAP){const h=new Vt({color:s,transparent:!0,opacity:.85,depthWrite:!1});h.userData.disposeMat=!0;const c=new B(this.fxGlowGeo,h);c.scale.setScalar(n?1.3:.95),c.position.set(e,.7,t);const d=c;d._fxStart=this.clock,d._fxLife=n?1.8:1.4,d._vx=0,d._vy=.55,d._vz=0,d._fxFloat=!0,this.fxGroup.add(c)}}spawnDigDebris(e,t,i=12615744){this.fxGroup.children.length>this.FX_CAP-4&&this.trimFx();const n=this.digLoad?2:4;for(let s=0;s<n&&!(this.fxGroup.children.length>=this.FX_CAP);s++){const o=new Vt({color:i,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const l=new B(this.fxDebrisGeo,o),a=.7+Math.random()*.8;l.scale.set(a,a*.8,a),l.position.set(e+(Math.random()-.5)*.6,.6+Math.random()*.8,t+(Math.random()-.5)*.6);const h=l;h._fxStart=this.clock,h._fxLife=.35+Math.random()*.25,h._vx=(Math.random()-.5)*3,h._vy=1.5+Math.random()*2.5,h._vz=(Math.random()-.5)*3,this.fxGroup.add(l)}}pickTile(e,t){const i=new zl;i.setFromCamera(new le(e,t),this.camera);const n=i.intersectObjects(this.gridGroup.children,!0);for(const o of n){let l=o.object;for(;l;){if(l.userData&&typeof l.userData.tileX=="number")return{x:o.point.x,z:o.point.z,tileX:l.userData.tileX,tileY:l.userData.tileY};l=l.parent}}const s=this.raycastGround(e,t);return s?{x:s.x,z:s.z}:null}spawnLightning(e,t){const i=[e.clone(),t.clone().add(new E(0,1,0))],n=e.clone().lerp(t,.5);n.y+=2+Math.random(),n.x+=(Math.random()-.5)*2,i.splice(1,0,n);const s=new Tt().setFromPoints(i);s.userData.disposeGeo=!0;const o=new sn({color:11197951,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const l=new Xo(s,o);this.fxGroup.add(l);const a=l;a._fxStart=this.clock,a._fxLife=.35}update(e){if(this.clock+=e,this.heartGroup?.heartCore){const t=1+Math.sin(this.clock*3)*.05;this.heartGroup.heartCore.scale.setScalar(t),this.heartGroup.heartLight&&(this.heartGroup.heartLight.intensity=1.1+Math.sin(this.clock*3)*.25),this.heartGroup.rotation.y+=e*.3}for(const t of this.torches)t.torchLight&&(t.torchLight.intensity=2.8+Math.random()*.8+Math.sin(this.clock*8+t.position.x)*.35),t.flame&&t.flame.scale.setScalar(.9+Math.random()*.25);for(let t=this.fxGroup.children.length-1;t>=0;t--){const i=this.fxGroup.children[t];if(i._fxStart!==void 0&&i._fxLife!==void 0){const n=this.clock-i._fxStart,s=i._fxLife;if(n>s)this.disposeFxChild(i),this.fxGroup.remove(i);else if(i.material){const o=i.material,l=n/s;o.opacity!==void 0&&(o.opacity=Math.max(0,1-l*l));const a=!!i._fxFloat;if(i._vx!==void 0)if(i.position.x+=(i._vx??0)*e,i.position.y+=(i._vy??0)*e,i.position.z+=(i._vz??0)*e,i._vy=(i._vy??0)-(a?1.2:6)*e,a){const h=1+Math.sin(l*Math.PI)*.45;i.scale.setScalar(h),i.rotation.y+=e*2}else i.rotation.x+=e*4,i.rotation.z+=e*3;else i.position.y+=e*1.5}}}}render(){if(!this.contextLost)try{this.useComposer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderFails=0}catch(e){this.renderFails++,console.error("[underkeep] render failed",e),this.useComposer=!1;try{this.renderer.render(this.scene,this.camera)}catch(t){console.error("[underkeep] fallback render failed",t),this.renderFails>=3&&(this.contextLost=!0,this.onContextLost?.())}}}raycastGround(e,t){const i=new zl;i.setFromCamera(new le(e,t),this.camera);const n=new Hi(new E(0,1,0),0),s=new E;return i.ray.intersectPlane(n,s)?s:null}}const Zl=["treasury","lair","hatchery","training","library","portal","guard","workshop","prison","torture","graveyard","temple","combatPit","door","sentry","rally","bridgeWood","bridgeStone"];class T0{goldEl;manaEl;manaBar;workersEl;creaturesEl;mentorEl;mentorText;tooltipEl;overlay;overlayTitle;overlayMsg;buildSheet;spellsSheet;btnBuild;btnSpells;mentorTimer=0;mentorQueue=[];inspectorEl;inspName;inspJob;inspHp;inspHpBar;inspHunger;inspTired;inspMood;inspMoodBar;inspEfficiency;minimap;minimapCtx;objectiveEl;kitsValueEl;createWorkerBtn;rosterSheet;rosterList;btnRoster;onToolChange=null;onSpell=null;onOverlayContinue=null;onNewGame=null;onInspectorClose=null;onRosterSelect=null;constructor(){this.goldEl=document.getElementById("gold-value"),this.manaEl=document.getElementById("mana-value"),this.manaBar=document.getElementById("mana-bar"),this.workersEl=document.getElementById("workers-value"),this.creaturesEl=document.getElementById("creatures-value"),this.mentorEl=document.getElementById("mentor"),this.mentorText=document.getElementById("mentor-text"),this.tooltipEl=document.getElementById("tooltip"),this.overlay=document.getElementById("overlay"),this.overlayTitle=document.getElementById("overlay-title"),this.overlayMsg=document.getElementById("overlay-msg"),this.buildSheet=document.getElementById("build-sheet"),this.spellsSheet=document.getElementById("spells-sheet"),this.btnBuild=document.getElementById("btn-build"),this.btnSpells=document.getElementById("btn-spells"),this.inspectorEl=document.getElementById("inspector"),this.inspName=document.getElementById("insp-name"),this.inspJob=document.getElementById("insp-job"),this.inspHp=document.getElementById("insp-hp"),this.inspHpBar=document.getElementById("insp-hp-bar"),this.inspHunger=document.getElementById("insp-hunger"),this.inspTired=document.getElementById("insp-tired"),this.inspMood=document.getElementById("insp-mood"),this.inspMoodBar=document.getElementById("insp-mood-bar"),this.inspEfficiency=document.getElementById("insp-efficiency"),this.minimap=document.getElementById("minimap"),this.minimapCtx=this.minimap?.getContext("2d")??null,this.objectiveEl=document.getElementById("objective-value"),this.kitsValueEl=document.getElementById("kits-value"),this.createWorkerBtn=document.getElementById("btn-create-worker")??document.querySelector('.spell[data-spell="createWorker"]'),this.rosterSheet=document.getElementById("roster-sheet"),this.rosterList=document.getElementById("roster-list"),this.btnRoster=document.getElementById("btn-roster"),document.getElementById("insp-close")?.addEventListener("click",()=>{this.hideInspector(),this.onInspectorClose?.()}),document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.tool;this.setActiveTool(t),this.onToolChange?.(t),Zl.includes(t)&&this.closeSheets()})}),document.querySelectorAll(".spell").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.spell;this.onSpell?.(t),(t==="speed"||t==="lightning"||t==="possess")&&this.closeSheet("spells")})}),document.getElementById("overlay-btn").addEventListener("click",()=>{this.hideOverlay(),this.onOverlayContinue?.()}),document.getElementById("overlay-btn-secondary")?.addEventListener("click",()=>{this.hideOverlay(),this.onNewGame?.()}),document.getElementById("btn-new-game")?.addEventListener("click",()=>{this.onNewGame?.()}),this.btnBuild?.addEventListener("click",()=>this.toggleSheet("build")),this.btnSpells?.addEventListener("click",()=>this.toggleSheet("spells")),this.btnRoster?.addEventListener("click",()=>this.toggleSheet("roster")),document.getElementById("btn-build-desktop")?.addEventListener("click",()=>this.toggleSheet("build")),document.getElementById("btn-spells-desktop")?.addEventListener("click",()=>this.toggleSheet("spells")),document.getElementById("btn-roster-desktop")?.addEventListener("click",()=>this.toggleSheet("roster")),document.querySelectorAll(".sheet-close").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.close;(t==="build"||t==="spells"||t==="roster")&&this.closeSheet(t)})}),document.getElementById("mentor-dismiss")?.addEventListener("click",()=>this.dismissMentor())}sheetButtons(e){return(e==="build"?["btn-build","btn-build-desktop"]:e==="spells"?["btn-spells","btn-spells-desktop"]:["btn-roster","btn-roster-desktop"]).map(i=>document.getElementById(i)).filter(i=>!!i)}sheetEl(e){return e==="build"?this.buildSheet:e==="spells"?this.spellsSheet:this.rosterSheet}toggleSheet(e){const t=this.sheetEl(e);if(!t)return;const i=t.hasAttribute("hidden");for(const n of["build","spells","roster"])if(n!==e){this.sheetEl(n)?.setAttribute("hidden","");for(const s of this.sheetButtons(n))s.classList.remove("active"),s.setAttribute("aria-expanded","false")}if(i){t.removeAttribute("hidden");for(const n of this.sheetButtons(e))n.classList.add("active"),n.setAttribute("aria-expanded","true")}else{t.setAttribute("hidden","");for(const n of this.sheetButtons(e))n.classList.remove("active"),n.setAttribute("aria-expanded","false")}}closeSheet(e){this.sheetEl(e)?.setAttribute("hidden","");for(const i of this.sheetButtons(e))i.classList.remove("active"),i.setAttribute("aria-expanded","false")}closeSheets(){this.closeSheet("build"),this.closeSheet("spells"),this.closeSheet("roster")}openRoster(){this.toggleSheet("roster")}isRosterOpen(){return!!this.rosterSheet&&!this.rosterSheet.hasAttribute("hidden")}updateRoster(e){if(this.rosterList){if(this.rosterList.innerHTML="",!e.length){const t=document.createElement("div");t.className="roster-hint",t.textContent="No minions yet — dig, claim, and open a Portal.",this.rosterList.appendChild(t);return}for(const t of e){const i=document.createElement("button");i.type="button",i.className="roster-row",i.setAttribute("role","listitem"),i.dataset.id=String(t.id),t.knockedOut&&i.classList.add("ko"),t.hp<t.maxHp*.4&&i.classList.add("hurt"),i.innerHTML=`<span class="r-name">${t.name}</span><span class="r-job">${t.job}</span><span class="r-hp">${Math.floor(t.hp)}/${Math.floor(t.maxHp)}</span><span class="r-mood">${Math.floor(t.mood)}</span>`,i.addEventListener("click",()=>{this.onRosterSelect?.(t.id),this.closeSheet("roster")}),this.rosterList.appendChild(i)}}}setActiveTool(e){document.querySelectorAll(".tool").forEach(t=>{t.classList.toggle("active",t.dataset.tool===e)}),Zl.includes(e)?this.btnBuild?.classList.add("active"):(e==="select"||e==="dig"||e==="claim"||e==="fortify")&&this.btnBuild?.classList.remove("active")}updateStats(e,t,i,n,s){const o=Number.isFinite(e)?Math.max(0,e):0,l=Number.isFinite(i)&&i>0?i:1,a=Number.isFinite(t)?Math.max(0,Math.min(l,t)):0;this.goldEl.textContent=String(Math.floor(o)),this.manaEl.textContent=`${Math.floor(a)}/${Math.floor(l)}`;const h=Math.max(0,Math.min(100,a/l*100));this.manaBar.style.width=`${Number.isFinite(h)?h:0}%`,this.workersEl.textContent=String(Math.max(0,n|0)),this.creaturesEl.textContent=String(Math.max(0,s|0))}setSpellAffordable(e,t){document.querySelectorAll(`.spell[data-spell="${e}"]`).forEach(i=>{i.disabled=!t})}say(e){this.mentorQueue.push(e),this.mentorTimer<=0&&this.popMentor()}sayNow(e){this.mentorQueue.length=0,this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}dismissMentor(){this.mentorTimer=0,this.mentorQueue.length=0,this.mentorEl.classList.remove("visible")}popMentor(){const e=this.mentorQueue.shift();if(!e){this.mentorEl.classList.remove("visible");return}this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}setTooltip(e){this.tooltipEl.textContent=e}update(e){this.mentorTimer>0&&(this.mentorTimer-=e,this.mentorTimer<=0&&this.popMentor())}showInspector(e){try{const t=(u,f,m,v=f)=>Number.isFinite(u)?Math.max(f,Math.min(m,u)):v,i=t(e.maxHp,1,9999,1),n=t(e.hp,0,i,0),s=t(e.hunger,0,100,0),o=t(e.tired,0,100,0),l=t(e.mood,0,100,50);let a=Number.isFinite(e.efficiency)?e.efficiency:.85;a>1.5&&(a=a/100),a=t(a,0,1.2,.85);const h=Math.round(a*100);this.inspName.textContent=e.held?`${e.kind} (held)`:e.kind,this.inspJob.textContent=e.job||"Idle",this.inspHp.textContent=`${Math.ceil(n)}/${Math.ceil(i)}`;const c=t(n/i*100,0,100,0);this.inspHpBar.style.width=`${c}%`,this.inspHunger.textContent=`${Math.floor(s)}`,this.inspTired.textContent=`${Math.floor(o)}`;const d=l>=75?"Happy":l>=50?"Content":l>=30?"Grumpy":l>=15?"Angry":"Leaving?";this.inspMood.textContent=`${Math.floor(l)} · ${d}`,this.inspMoodBar.style.width=`${t(l,0,100,0)}%`,this.inspEfficiency.textContent=`${h}%`,this.inspectorEl.classList.remove("hidden")}catch(t){console.warn("[underkeep] showInspector failed",t);try{this.inspectorEl.classList.add("hidden")}catch{}}}hideInspector(){this.inspectorEl.classList.add("hidden")}setObjective(e){this.objectiveEl&&(this.objectiveEl.textContent=e)}setKits(e,t){this.kitsValueEl&&(this.kitsValueEl.textContent=`D${e} · S${t}`)}setWorkerCost(e){this.createWorkerBtn&&(this.createWorkerBtn.classList.contains("tool"),(this.createWorkerBtn.id==="btn-create-worker"||(this.createWorkerBtn.textContent||"").includes("Worker"))&&(this.createWorkerBtn.textContent=`✨ Worker ${e}g`),this.createWorkerBtn.title=`Create Scrabbler (Q) — ${e} gold (cost scales)`)}drawMinimap(e){const t=this.minimap,i=this.minimapCtx;if(!t||!i)return;const n=t.width,s=t.height;i.fillStyle="#0a0806",i.fillRect(0,0,n,s);const o=e.width,l=e.height,a=Math.min(n/o,s/l),h=(n-o*a)/2,c=(s-l*a)/2;for(let f=0;f<l;f++)for(let m=0;m<o;m++){if(!e.exploredAt(m,f))continue;const v=e.kindAt(m,f),g=e.roomAt(m,f);let p="#3a3028";v===0?p="#1a1820":v===1?p="#4a3828":v===2?p="#c0a020":v===3?p="#5a4838":v===4?p="#7a6848":v===5?p="#e04020":v===6?p="#686060":v===7?p="#e05010":v===8?p="#2060a0":(v===9||v===10)&&(p="#8a7050"),v===4&&g===8&&(p="#a07840"),v===4&&g===7&&(p="#607080"),v===4&&g===9&&(p="#506070"),v===4&&g===10&&(p="#a04050"),v===4&&g===11&&(p="#406850"),v===4&&g===12&&(p="#c0a040"),v===4&&g===13&&(p="#a04030"),i.fillStyle=p,i.fillRect(h+m*a,c+f*a,Math.max(1,a),Math.max(1,a))}const d=h+(e.heartX+.5)*a,u=c+(e.heartY+.5)*a;i.strokeStyle="#ff6040",i.lineWidth=2,i.beginPath(),i.arc(d,u,Math.max(3,a*1.1),0,Math.PI*2),i.stroke(),i.fillStyle="#ff3020",i.beginPath(),i.arc(d,u,Math.max(1.5,a*.45),0,Math.PI*2),i.fill()}showOverlay(e,t,i="Continue",n){this.overlayTitle.textContent=e,this.overlayMsg.textContent=t,document.getElementById("overlay-btn").textContent=i;const s=document.getElementById("overlay-btn-secondary");s&&(n?(s.textContent=n,s.classList.remove("hidden")):s.classList.add("hidden")),this.overlay.classList.remove("hidden")}hideOverlay(){this.overlay.classList.add("hidden")}}const H={start:"The earth awaits your cruelty, Keeper. Dig. Claim. Thrive.",resume:"Welcome back, Keeper. Your dungeon endures — dig on.",newGame:"A fresh Underkeep. The old one is dust.",firstGold:"Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",firstRoom:"A room! How civilized. Your minions prefer beds to sleeping in the mud.",portal:"The Portal hums. Hungry things beyond the veil hear its song.",skitterwing:"A Skitterwing flutters in. Fragile, but it sees what you cannot.",rattlekin:"Rattlekin arrive — bony enthusiasm and questionable hygiene.",emberling:"An Emberling. Do try not to burn down your own treasury.",gravemage:"A Gravemage darkens the Portal. Point them at the Library — research feeds your spells.",researchHeal:"Library research unlocks Heal! Mend your bruised nightmares.",researchDone:"Research rank %r complete. Spells grow sharper in the dark.",levelUp:"Training pays off — a minion levels up!",heroes:"Heroes at the gate! How quaint. Show them the meaning of Underkeep.",worker:"Another Scrabbler clawed into being. Point it at dirt and watch miracles.",heartHurt:"Your Heart bleeds! Protect it, or this story ends poorly.",win:"The heroes fall. The dark endures. For now.",lose:"The Heart is silent. The Underkeep… underwhelms.",slap:"A firm slap. Back to work!",slapAlt:"A firm slap. Morale through violence — classic.",speed:"Haste, my little nightmares. The clock is cruel.",lightning:"Heaven's temper, redirected. Delightful.",heal:"Green fire stitches flesh. The Library earns its keep.",claim:"Claimed land feeds your mana. Ambition has a wattage.",lairBuilt:"A Lair. Beds for the weary and the wounded. Capacity equals tiles.",lairUse:"Minions claim their bedrolls. Tired claws seek the Lair.",bedClaim:"A minion claims a Lair bed.",lairResting:"A minion is resting in the Lair…",lairFull:"Every bed is taken. Expand the Lair or expect cranky minions.",hatcheryBuilt:"A Hatchery. Nest-food grows while you scheme — hungry mouths will come.",hatcheryUse:"Feast! The Hatchery soothes rumbling guts. Work resumes after.",feasting:"Feasting at the Hatchery.",hatcheryHungry:"The nests are bare. Wait for more Hatchery food… or build more nests.",pickUp:"Into the Hand. Drop them where the work is — or slap sense into them.",drop:"Back on their feet. Back to the dirt.",moodLow:"A minion's mood is crumbling. Beds, food, and space — or they may leave.",sluggishDig:"Sluggish claws… mood is dragging the dig.",leaveThreat:"A minion threatens to leave the Underkeep…",doorBuilt:"A wooden door bars the corridor. Heroes hate hinges.",doorOpen:"Door swings open — minions pass; heroes still hesitate if you close it again.",doorClosed:"Door sealed. Heroes bounce. Creatures can pry it open.",sentryBuilt:"Sentry trap armed. Heroes who tread here learn about arrows.",sentryFire:"Twang! The Sentry greets a hero with sharp hospitality.",guardBuilt:"Guard Room raised. Fighters will hold the line when idle.",rallyPlanted:"Rally flag planted! Call to arms — minions hold this tile.",rallyCleared:"Rally flag struck. Back to ordinary scheming.",groupSelect:"Squad marked. Shift-click or drag-box to gather more — then click a tile to attack-move.",attackMove:"Attack-move! Selected fighters advance and engage.",attackHero:"Hunt them down! Fighters surge toward the heroes.",fog:"Beyond the torchlight — unexplored dark. Dig and claim to push the fog back.",autoFortify:"Idle Scrabblers reinforce soft earth walls on their own. Rock still laughs at them.",lava:"Lava! It cooks the careless. Emberlings laugh; Scrabblers refuse the path — build a bridge.",bridgeWood:"Wooden planks over the fire. Crude, fragrant, and gloriously flammable.",bridgeStone:"Stone bridge — heavier gold, steadier nerves. The lava still sulks beneath.",possess:"Possession! Ride a minion's senses. WASD to steer, Esc to return to the Keeper throne.",possessArm:"Choose a vessel. Click any living minion to Possess them.",possessEnd:"Back in the Keeper's seat. The vessel blinks, confused but intact.",payday:"Payday! %g gold leaves the Treasury — wages keep moods from mutiny.",paydayFail:"Payday failed — the Treasury is empty! Moods crash. Mint gold or expect desertions.",heroesSoon:"Footsteps in the dark… heroes approach. Fortify doors, set traps, rally fighters.",heroesImminent:"Steel at the gate! Heroes arrive any moment.",heroEngage:"Heroes clash with your minions — doors and traps earn their keep.",heroDown:"A hero falls. The Underkeep drinks deep.",workshopBuilt:"Workshop raised! Scrabblers craft door and Sentry kits — or pay less gold at the bench.",craftKit:"Workshop finished a %k kit. Place it free from Build.",craftBusy:"Scrabblers hammer in the Workshop. Kits will stack for doors and traps.",missionBrief:"Mission: Survive %w hero waves — or amass %g gold in the Treasury. Protect the Heart.",waveCleared:"Wave %n cleared! Steel will return — prepare for wave %next of %w.",winWaves:"All hero waves broken. The Underkeep endures!",winGold:"Treasury overflows! Gold wins the day — heroes be damned.",workerSpawn:"Scrabbler forged for %g gold. Next costs %n. Point it at dirt!",prisonBuilt:"Prison raised! Knocked-out heroes can be dragged in — or drop them yourself.",tortureBuilt:"Torture Chamber humming. Prisoners will convert into loyal Thornwitches.",graveyardBuilt:"Graveyard consecrated. Corpses and starved captives rise as Bonewretches.",heroKnocked:"Hero knocked out! Drag them to Prison before they fade.",prisonerHeld:"Captive secured in the Prison. Starve them… or convert them.",converting:"Conversion underway — the hero's will cracks.",converted:"A Thornwitch joins your roster. Loyalty tastes like iron.",boneRaised:"A Bonewretch claws up from the Graveyard. Fearless bones.",starvedBones:"The prisoner starved — bones claim them for the dark.",roomSizeBonus:"Room size %n · +%p% efficiency",templeBuilt:"Temple raised. Prayer soothes moods — and may gift a talisman.",combatPitBuilt:"Combat Pit ready. Veterans past training level 4 fight for glory here.",praying:"A minion kneels in the Temple. Mood climbs with the incense.",prayerBuff:"Prayer buff granted — claws steadier, spirits higher.",talismanGift:"A talisman forms in the Temple haze. Keep them close.",combatLevelUp:"%n rises to Combat Pit level %l!",fleeLair:"Wounded minions flee toward the Lair!",dragWounded:"Scrabblers drag the wounded home to their beds.",allyKnocked:"A minion collapses! Scrabblers can haul them to a Lair bed."};class Jl{width;height;tiles;heartPos={x:0,y:0};constructor(e=48,t=48){this.width=e,this.height=t,this.tiles=[];for(let i=0;i<t;i++)for(let n=0;n<e;n++)this.tiles.push({x:n,y:i,kind:A.Earth,room:y.None,mark:ke.None,fortified:!1,goldAmount:0,claimedProgress:0,digProgress:0,torch:!1,door:$e.None,trap:gt.None,rally:!1,explored:!1});this.generate()}idx(e,t){return t*this.width+e}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}get(e,t){return this.inBounds(e,t)?this.tiles[this.idx(e,t)]:null}worldToTile(e,t){return{x:Math.floor(e/Xe+this.width/2),y:Math.floor(t/Xe+this.height/2)}}tileToWorld(e,t){return{x:(e-this.width/2+.5)*Xe,z:(t-this.height/2+.5)*Xe}}generate(){const e=Math.floor(this.width/2),t=Math.floor(this.height/2);this.heartPos={x:e,y:t};for(let n=0;n<this.height;n++)for(let s=0;s<this.width;s++){const o=this.get(s,n);(s<2||n<2||s>=this.width-2||n>=this.height-2)&&(o.kind=A.Rock)}for(let n=0;n<14;n++){let s=4+Math.floor(Math.random()*(this.width-8)),o=4+Math.floor(Math.random()*(this.height-8));const l=4+Math.floor(Math.random()*8);for(let a=0;a<l;a++){const h=this.get(s,o);h&&h.kind===A.Earth&&(h.kind=A.Gold,h.goldAmount=200+Math.floor(Math.random()*300)),s+=Math.floor(Math.random()*3)-1,o+=Math.floor(Math.random()*3)-1,s=Math.max(3,Math.min(this.width-4,s)),o=Math.max(3,Math.min(this.height-4,o))}}for(let n=0;n<8;n++){let s=5+Math.floor(Math.random()*(this.width-10)),o=5+Math.floor(Math.random()*(this.height-10));if(Math.abs(s-e)<7&&Math.abs(o-t)<7)continue;const l=2+Math.floor(Math.random()*3);for(let a=-l;a<=l;a++)for(let h=-l;h<=l;h++){if(Math.abs(h)+Math.abs(a)>l)continue;const c=this.get(s+h,o+a);c&&c.kind===A.Earth&&(c.kind=A.Rock,c.goldAmount=0)}}for(let n=-3;n<=3;n++)for(let s=-3;s<=3;s++){const o=this.get(e+s,t+n);if(!o)continue;if(s===0&&n===0){o.kind=A.Heart,o.room=y.None;continue}const l=Math.max(Math.abs(s),Math.abs(n));(l<=2||l===3&&s===0&&n===-3)&&(o.kind=A.Claimed,o.claimedProgress=1)}for(let n=t-8;n<t-3;n++)for(let s=e-1;s<=e+1;s++){const o=this.get(s,n);o&&o.kind!==A.Rock&&o.kind!==A.Heart&&(o.kind=A.Claimed,o.claimedProgress=1)}const i=(n,s,o)=>{const l=this.get(n,s);l&&(l.kind===A.Earth||l.kind===A.Gold)&&(l.kind=A.Gold,l.goldAmount=Math.max(l.goldAmount,o),l.fortified=!1)};for(let n=0;n<5;n++)i(e-1+n,t+3,380+n*30);for(let n=0;n<4;n++)i(e+n,t+4,320+n*40);for(let n=0;n<4;n++)i(e+3,t-1+n,360+n*25);for(let n=0;n<3;n++)i(e+4,t+n,300+n*35);this.paintHazardBlob(e-10,t+2,3,A.Lava),this.paintHazardBlob(e-12,t-1,2,A.Lava);for(let n=0;n<5;n++){const s=this.get(e+6+n%2,t+6+Math.floor(n/2));s&&(s.kind===A.Earth||s.kind===A.Gold)&&(s.kind=A.Lava,s.goldAmount=0,s.fortified=!1)}this.paintHazardBlob(e-8,t-8,2,A.Water),this.refreshTorches(),this.seedExploration()}paintHazardBlob(e,t,i,n){const s=this.heartPos.x,o=this.heartPos.y;for(let l=-i;l<=i;l++)for(let a=-i;a<=i;a++){if(a*a+l*l>i*i+.5)continue;const h=e+a,c=t+l;if(Math.abs(h-s)<5&&Math.abs(c-o)<5)continue;const d=this.get(h,c);d&&(d.kind===A.Earth||d.kind===A.Gold)&&(d.kind=n,d.goldAmount=0,d.fortified=!1,d.digProgress=0,d.room=y.None)}}refreshTorches(){for(const e of this.tiles)e.torch=!1;for(const e of this.tiles){if(e.kind!==A.Claimed&&e.kind!==A.Dirt&&e.kind!==A.Heart||(e.x+e.y)%4!==0)continue;const t=[[1,0],[-1,0],[0,1],[0,-1]];for(const[i,n]of t){const s=this.get(e.x+i,e.y+n);if(s&&(s.kind===A.Earth||s.kind===A.Gold||s.kind===A.Rock||s.fortified)){e.torch=!0;break}}}}isSolid(e,t){const i=this.get(e,t);return i?i.kind===A.Earth||i.kind===A.Gold||i.kind===A.Rock||i.fortified:!0}isHazard(e,t){const i=this.get(e,t);return!!i&&(i.kind===A.Lava||i.kind===A.Water)}isBridge(e,t){const i=this.get(e,t);return!!i&&(i.kind===A.BridgeWood||i.kind===A.BridgeStone)}isWalkable(e,t,i){const n=this.get(e,t);return!n||n.fortified?!1:!!(n.kind===A.Dirt||n.kind===A.Claimed||n.kind===A.Heart||n.kind===A.BridgeWood||n.kind===A.BridgeStone||i?.allowHazard&&(n.kind===A.Lava||n.kind===A.Water))}canPlaceBridge(e,t){const i=this.get(e,t);return!i||i.kind!==A.Lava&&i.kind!==A.Water?!1:this.neighbors4(e,t).some(n=>!n.fortified&&(n.kind===A.Dirt||n.kind===A.Claimed||n.kind===A.Heart||n.kind===A.BridgeWood||n.kind===A.BridgeStone))}isDiggable(e,t){const i=this.get(e,t);return!i||i.fortified?!1:i.kind===A.Earth||i.kind===A.Gold}countClaimed(){let e=0;for(const t of this.tiles)(t.kind===A.Claimed||t.kind===A.Heart)&&e++;return e}countRoom(e){let t=0;for(const i of this.tiles)i.room===e&&t++;return t}largestContiguousRoom(e){if(e===y.None)return 0;const t=new Set;let i=0;for(const n of this.tiles){if(n.room!==e)continue;const s=`${n.x},${n.y}`;if(t.has(s))continue;let o=0;const l=[n];for(t.add(s);l.length;){const a=l.pop();o++;for(const h of this.neighbors4(a.x,a.y)){const c=`${h.x},${h.y}`;h.room===e&&!t.has(c)&&(t.add(c),l.push(h))}}o>i&&(i=o)}return i}neighbors4(e,t){const i=[];for(const[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.get(e+n,t+s);o&&i.push(o)}return i}isReachableSolid(e,t){return this.neighbors4(e,t).some(i=>this.isWalkable(i.x,i.y))}hasAdjacentClaimed(e,t){return this.neighbors4(e,t).some(i=>i.kind===A.Claimed||i.kind===A.Heart)}blocksHero(e,t){const i=this.get(e,t);return!!i&&i.door===$e.Closed}canPlaceDoor(e,t){const i=this.get(e,t);if(!i||i.kind!==A.Claimed||i.room!==y.None)return!1;if(i.door!==$e.None)return!0;let n=0,s=0,o=!1;for(const l of this.neighbors4(e,t))(l.fortified||l.kind===A.Earth||l.kind===A.Gold||l.kind===A.Rock)&&n++,!l.fortified&&(l.kind===A.Dirt||l.kind===A.Claimed||l.kind===A.Heart||l.kind===A.BridgeWood||l.kind===A.BridgeStone)&&s++,l.room!==y.None&&(o=!0);return n>=1&&s>=1||o}seedExploration(){for(const e of this.tiles)e.explored=!1;for(const e of this.tiles)(e.kind===A.Claimed||e.kind===A.Heart||e.kind===A.Dirt)&&(e.explored=!0);for(const e of this.tiles)if(e.explored&&!(e.kind!==A.Claimed&&e.kind!==A.Heart&&e.kind!==A.Dirt))for(const t of this.neighbors4(e.x,e.y))t.explored=!0}revealTile(e,t){const i=this.get(e,t);return!i||i.explored?!1:(i.explored=!0,!0)}revealAround(e,t,i=1){let n=!1;for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)this.revealTile(e+o,t+s)&&(n=!0);return n}revealFromTerritory(){let e=!1;for(const t of this.tiles)if(!(t.kind!==A.Claimed&&t.kind!==A.Heart&&t.kind!==A.Dirt)){t.explored||(t.explored=!0,e=!0);for(const i of this.neighbors4(t.x,t.y))i.explored||(i.explored=!0,e=!0)}return e}isExplored(e,t){const i=this.get(e,t);return!!i&&i.explored}findPath(e,t,i,n,s){if(!this.inBounds(e,t)||!this.inBounds(i,n))return null;if(e===i&&t===n)return[{x:i,y:n}];const o=(p,x)=>x*this.width+p,l=[{x:e,y:t,f:0}],a=new Map,h=new Map;h.set(o(e,t),0);const c=new Set,d=(p,x)=>Math.abs(p-i)+Math.abs(x-n),u=!!s?.forHero,f=!!s?.allowHazard,m=(p,x)=>u&&this.blocksHero(p,x)?!1:!!(this.isWalkable(p,x,{allowHazard:f})||p===i&&x===n&&this.isDiggable(p,x)||p===i&&x===n&&p===this.heartPos.x&&x===this.heartPos.y),v=(p,x)=>{const b=this.get(p,x);return b?b.kind===A.Lava?4:b.kind===A.Water?3:1:1};let g=0;for(;l.length&&g++<5e3;){l.sort((b,w)=>b.f-w.f);const p=l.shift(),x=o(p.x,p.y);if(!c.has(x)){if(c.add(x),p.x===i&&p.y===n){const b=[{x:i,y:n}];let w=x;for(;a.has(w);){const I=a.get(w);b.push({x:I%this.width,y:Math.floor(I/this.width)}),w=I}return b.reverse(),b}for(const[b,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const I=p.x+b,P=p.y+w;if(!this.inBounds(I,P)||!m(I,P))continue;const R=o(I,P);if(c.has(R))continue;const L=(h.get(x)??1/0)+v(I,P);L<(h.get(R)??1/0)&&(a.set(R,x),h.set(R,L),l.push({x:I,y:P,f:L+d(I,P)}))}}}return null}findPathAdjacent(e,t,i,n,s){let o=null;for(const[l,a]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=i+l,c=n+a;if(!this.isWalkable(h,c)||s?.forHero&&this.blocksHero(h,c))continue;const d=this.findPath(e,t,h,c,s);d&&(!o||d.length<o.length)&&(o=d)}return o}}const cr="underkeep-save-v1",E0=new Set(Object.values(K)),A0=new Set([A.Rock,A.Earth,A.Gold,A.Dirt,A.Claimed,A.Heart,A.Wall,A.Lava,A.Water,A.BridgeWood,A.BridgeStone]);function ai(r){return typeof r=="number"&&Number.isFinite(r)}function Gh(r,e,t){if(!r||typeof r!="object")return"not-object";const i=r;if(i.v!==1)return"bad-version";if(i.width!==e||i.height!==t)return"size-mismatch";if(!i.heartPos||!ai(i.heartPos.x)||!ai(i.heartPos.y))return"bad-heartPos";if(i.heartPos.x<0||i.heartPos.y<0||i.heartPos.x>=e||i.heartPos.y>=t)return"heartPos-oob";if(!Array.isArray(i.tiles)||i.tiles.length!==e*t)return"bad-tiles-length";if(!ai(i.gold)||i.gold<0)return"bad-gold";if(!ai(i.mana)||i.mana<0)return"bad-mana";if(!Array.isArray(i.creatures))return"bad-creatures";let n=0,s=0;for(let a=0;a<i.tiles.length;a++){const h=i.tiles[a];if(!h||typeof h!="object")return"bad-tile";if(!A0.has(h.kind))return"bad-tile-kind";h.kind===A.Heart&&n++,(h.kind===A.Earth||h.kind===A.Gold)&&s++}if(n<1)return"no-heart-tile";const o=i.heartPos.y*e+i.heartPos.x;if(i.tiles[o]?.kind!==A.Heart)return"heartPos-mismatch";if(!i.gameOver&&s<1)return"no-diggable";let l=0;for(const a of i.creatures){if(!a||typeof a!="object")return"bad-creature";if(!E0.has(a.kind))return"bad-creature-kind";if(!ai(a.x)||!ai(a.y))return"bad-creature-pos";a.kind===K.Scrabbler&&l++}if(!i.gameOver&&l<1)return"no-scrabbler";if(i.cam){const a=i.cam;if(!ai(a.tx)||!ai(a.tz)||!ai(a.cx)||!ai(a.cy)||!ai(a.cz))return"bad-cam"}return null}function C0(r,e){try{const t=localStorage.getItem(cr);if(!t)return null;const i=JSON.parse(t);if(r!=null&&e!=null){const s=Gh(i,r,e);if(s){console.warn("[underkeep] rejecting save:",s);try{localStorage.removeItem(cr)}catch{}return null}return i}if(!i||typeof i!="object")return null;const n=i;return n.v!==1||!Array.isArray(n.tiles)||!n.width||!n.height?null:n}catch(t){return console.warn("[underkeep] save parse failed",t),null}}function P0(r){try{localStorage.setItem(cr,JSON.stringify(r))}catch{}}function Gi(){try{localStorage.removeItem(cr)}catch{}}function R0(r){return r.map(e=>({kind:e.kind,room:e.room,mark:e.mark,fortified:e.fortified,goldAmount:e.goldAmount,claimedProgress:e.claimedProgress,digProgress:e.digProgress,torch:e.torch,door:e.door??$e.None,trap:e.trap??gt.None,rally:!!e.rally,explored:!!e.explored}))}function L0(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const n=r[i],s=e[i];n.kind=s.kind,n.room=s.room,n.mark=s.mark,n.fortified=!!s.fortified,n.goldAmount=s.goldAmount??0,n.claimedProgress=s.claimedProgress??0,n.digProgress=s.digProgress??0,n.torch=!!s.torch,n.door=s.door??$e.None,n.trap=s.trap??gt.None,n.rally=!!s.rally,n.explored=s.explored===void 0?!1:!!s.explored}}const D0=150,k0=100,io=25,no=40;class I0{grid;renderer;hud;creatures=[];gold=600;mana=50;tool="select";held=null;selected=null;selectedGroup=[];possessed=null;possessCamBackup=null;possessArmed=!1;lavaDmgAcc=0;paydayToastCooldown=0;wavesCleared=0;doorKits=0;sentryKits=0;goldEver=600;minimapAcc=0;nextKitIsDoor=!0;corpses=[];rosterAcc=0;templePrayCount=0;boxSelecting=!1;boxStartClient=null;boxMoved=!1;boxPointerId=null;pendingPrimary=null;marqueeEl=null;heroWarn30=!1;heroWarn10=!1;heroEngageAnnounced=!1;gridDirty=!0;time=0;workerCostScale=0;portalCooldown=0;attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1};heroWaveSpawned=!1;heroWaveTimer=90;gameOver=!1;won=!1;paint=!1;lastPaint=null;camTarget=new E(0,0,0);keys=new Set;mentored=new Set;touchMode="none";touchStartTime=0;touchStartClient={clientX:0,clientY:0};touchMoved=!1;longPressTimer=null;pinchStartDist=0;pinchStartCamY=0;activeTouches=new Map;ignoreMouseUntil=0;panAccum={x:0,y:0};saveAcc=0;restoredFromSave=!1;hatcheryFood=0;foodRegenAcc=0;bedOwners=new Map;contextRecoveryShown=!1;marksDirty=!1;fogDirty=!1;rebuildCooldown=0;pendingStructuralRebuild=!1;researchProgress=0;researchRank=0;healUnlocked=!1;constructor(e){this.hud=new T0,this.marqueeEl=document.getElementById("select-marquee"),this.hud.onToolChange=i=>{this.tool=i,i!=="select"&&this.cancelBoxSelect()},this.hud.onSpell=i=>this.castSpell(i),this.hud.onOverlayContinue=()=>{this.gameOver&&(Gi(),location.reload())},this.hud.onNewGame=()=>this.confirmNewGame(),this.hud.onInspectorClose=()=>this.clearSelection(),this.hud.onRosterSelect=i=>this.focusCreatureById(i),this.grid=new Jl(40,40),this.renderer=new b0(e),this.renderer.onContextLost=()=>this.handleContextLost(),this.renderer.onContextRestored=()=>this.handleContextRestored();let t=!1;try{t=this.bootFromSaveOrFresh()}catch(i){console.error("[underkeep] boot failed — clearing save and starting Intro",i),Gi(),this.resetRuntimeState(),this.startFresh(!0),t=!1}this.bindInput(e),this.rebuild(),this.syncAllEntityMeshes(),t&&this.isPlayableOrEnded()&&this.saveNow(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(i=>i.alive&&i.isWorker).length,this.creatures.filter(i=>i.alive&&!i.isWorker&&!i.isHero).length),this.markReady()}markReady(){document.body.classList.remove("booting")}handleContextLost(){this.contextRecoveryShown||(this.contextRecoveryShown=!0,this.hud.showOverlay("Graphics hiccup","The dungeon view lost its WebGL context (often after heavy digging). Reload to restore — your save is kept.","Reload Dungeon"),this.hud.onOverlayContinue=()=>{location.reload()})}handleContextRestored(){this.contextRecoveryShown=!1,this.gridDirty=!0,this.rebuild(),this.syncAllEntityMeshes(),this.hud.say("The Underkeep re-solidifies. Dig on, Keeper."),this.hud.hideOverlay()}isPlayableOrEnded(){if(this.gameOver)return!0;const e=this.grid.get(this.grid.heartPos.x,this.grid.heartPos.y);return!e||e.kind!==A.Heart||!this.grid.tiles.some(n=>n.kind===A.Earth||n.kind===A.Gold)?!1:this.creatures.filter(n=>n.alive&&n.isWorker).length>=1}syncAllEntityMeshes(){for(const e of this.creatures)e.alive&&e.syncMesh(this.time)}resetRuntimeState(){for(const e of this.creatures)try{this.renderer?.removeEntityMesh(e.mesh),e.mesh?.parent&&e.mesh.parent.remove(e.mesh)}catch{}this.creatures=[],this.gold=600,this.mana=50,this.tool="select",this.held=null,this.selected=null,this.selectedGroup=[],this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee(),this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1,this.hud.hideInspector(),this.time=0,this.workerCostScale=0,this.portalCooldown=0,this.attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1},this.heroWaveSpawned=!1,this.heroWaveTimer=90,this.wavesCleared=0,this.doorKits=0,this.sentryKits=0,this.goldEver=600,this.minimapAcc=0,this.nextKitIsDoor=!0,this.gameOver=!1,this.won=!1,this.mentored=new Set,this.wageAcc=0,this.heartHp=500,this.restoredFromSave=!1,this.hatcheryFood=0,this.foodRegenAcc=0,this.bedOwners.clear(),this.contextRecoveryShown=!1,this.researchProgress=0,this.researchRank=0,this.healUnlocked=!1,this.exitPossession(!0),this.possessArmed=!1,this.lavaDmgAcc=0,this.paydayToastCooldown=0,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=0,this.grid=new Jl(40,40)}bootFromSaveOrFresh(){const e=C0(this.grid.width,this.grid.height);if(!e)return this.startFresh(!0),!1;const t=Gh(e,this.grid.width,this.grid.height);if(t)return console.warn("[underkeep] invalid save on boot:",t),Gi(),this.startFresh(!0),!1;try{this.applySave(e)}catch(i){return console.error("[underkeep] applySave threw",i),Gi(),this.resetRuntimeState(),this.startFresh(!0),!1}return this.isPlayableOrEnded()?(this.restoredFromSave=!0,this.gameOver?this.hud.showOverlay(this.won?"Victory":"Defeat",this.won?H.win+" The Underkeep stands.":H.lose,"Try Again"):this.hud.say(H.resume),!0):(console.warn("[underkeep] restored state not playable — falling back to Intro"),Gi(),this.resetRuntimeState(),this.startFresh(!0),!1)}startFresh(e){this.creatures.length===0&&(this.spawnCreature(K.Scrabbler,this.grid.heartPos.x+1,this.grid.heartPos.y),this.spawnCreature(K.Scrabbler,this.grid.heartPos.x-1,this.grid.heartPos.y),this.spawnCreature(K.Scrabbler,this.grid.heartPos.x,this.grid.heartPos.y+1));const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+4,28,t.z+18),this.renderer.camera.lookAt(this.camTarget),this.hud.say(H.start),e&&(this.hud.showOverlay("Mission Briefing",`You are the Keeper of the Underkeep. Dig, claim, raise rooms, and crush heroes — the Heart must not fall. Objective: Survive ${Jt} hero waves — OR gather ${en} gold in the Treasury. Workshop kits arm doors & traps.`,"Begin"),this.hud.say(H.missionBrief.replace("%w",String(Jt)).replace("%g",String(en))))}mentioneOnce(e,t){this.mentored.has(e)||(this.mentored.add(e),this.hud.say(t))}confirmNewGame(){this.hud.showOverlay("New Game?","This clears your saved dungeon and starts fresh. Hard refresh will no longer restore the old map.","Keep Playing","Erase & Restart");const e=this.hud.onNewGame,t=this.hud.onOverlayContinue;this.hud.onOverlayContinue=()=>{this.hud.onNewGame=e,this.hud.onOverlayContinue=t},this.hud.onNewGame=()=>{Gi();const i=new URL(location.href);i.searchParams.delete("shot"),i.searchParams.delete("pass"),location.replace(i.pathname+i.search+i.hash)}}buildSave(){return{v:1,width:this.grid.width,height:this.grid.height,heartPos:{...this.grid.heartPos},tiles:R0(this.grid.tiles),gold:this.gold,mana:this.mana,creatures:this.creatures.filter(e=>e.alive).map(e=>({kind:e.kind,x:e.x,y:e.y,wx:e.wx,wz:e.wz,hp:e.hp,maxHp:e.maxHp,level:e.level,goldCarried:e.goldCarried,hunger:e.hunger,sleepNeed:e.sleepNeed,trainNeed:e.trainNeed,isHero:e.isHero})),attracted:{...this.attracted},researchProgress:this.researchProgress,researchRank:this.researchRank,healUnlocked:this.healUnlocked,heroWaveSpawned:this.heroWaveSpawned,heroWaveTimer:this.heroWaveTimer,workerCostScale:this.workerCostScale,portalCooldown:this.portalCooldown,time:this.time,wageAcc:this.wageAcc,mentored:[...this.mentored],gameOver:this.gameOver,won:this.won,wavesCleared:this.wavesCleared,doorKits:this.doorKits,sentryKits:this.sentryKits,goldEver:this.goldEver,cam:{tx:this.camTarget.x,tz:this.camTarget.z,cx:this.renderer.camera.position.x,cy:this.renderer.camera.position.y,cz:this.renderer.camera.position.z}}}saveNow(){this.gameOver||this.isPlayableOrEnded()&&P0(this.buildSave())}applySave(e){if(e.width!==this.grid.width||e.height!==this.grid.height)throw new Error("save size mismatch");L0(this.grid.tiles,e.tiles),this.grid.heartPos={x:e.heartPos.x,y:e.heartPos.y},this.grid.tiles.some(i=>i.explored)?this.grid.revealFromTerritory():this.grid.seedExploration(),this.gold=e.gold,this.mana=e.mana,this.attracted={skitterwing:!!e.attracted?.skitterwing,rattlekin:!!e.attracted?.rattlekin,emberling:!!e.attracted?.emberling,gravemage:!!e.attracted?.gravemage},this.researchProgress=e.researchProgress??0,this.researchRank=e.researchRank??0,this.healUnlocked=!!e.healUnlocked,this.heroWaveSpawned=!!e.heroWaveSpawned,this.heroWaveTimer=e.heroWaveTimer??90,this.workerCostScale=e.workerCostScale??0,this.portalCooldown=e.portalCooldown??0,this.time=e.time??0,this.wageAcc=e.wageAcc??0,this.mentored=new Set(e.mentored??[]),this.gameOver=!!e.gameOver,this.won=!!e.won,this.wavesCleared=e.wavesCleared??0,this.doorKits=e.doorKits??0,this.sentryKits=e.sentryKits??0,this.goldEver=e.goldEver??Math.max(e.gold,600),this.heroWaveSpawned&&this.wavesCleared===0&&!this.won&&!this.gameOver&&!(e.creatures??[]).some(i=>i.isHero)&&(this.wavesCleared=1,this.wavesCleared<Jt&&(this.heroWaveSpawned=!1,this.heroWaveTimer=55,this.heroWarn30=!1,this.heroWarn10=!1));for(const i of this.creatures)this.renderer.removeEntityMesh(i.mesh),i.mesh.parent&&i.mesh.parent.remove(i.mesh);this.creatures=[];for(const i of e.creatures){const n=this.spawnCreature(i.kind,i.x,i.y);Number.isFinite(i.wx)&&Number.isFinite(i.wz)&&(n.wx=i.wx,n.wz=i.wz),n.hp=i.hp,n.maxHp=i.maxHp,n.level=i.level??1,n.goldCarried=i.goldCarried??0,n.hunger=i.hunger??0,n.sleepNeed=i.sleepNeed??0,n.trainNeed=i.trainNeed??0,n.mood=72,n.clampStats(),n.syncMesh(this.time)}const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);e.cam&&Number.isFinite(e.cam.tx)&&Number.isFinite(e.cam.tz)&&Number.isFinite(e.cam.cx)&&Number.isFinite(e.cam.cy)&&Number.isFinite(e.cam.cz)&&e.cam.cy>5?(this.camTarget.set(e.cam.tx,0,e.cam.tz),this.renderer.camera.position.set(e.cam.cx,e.cam.cy,e.cam.cz),this.renderer.camera.lookAt(this.camTarget)):(this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+4,28,t.z+18),this.renderer.camera.lookAt(this.camTarget)),this.gridDirty=!0}spawnCreature(e,t,i){const n=new Hg(e,t,i,this.grid),s=qo[e],o=this.renderer.createEntityVisual(e,s.color,s.scale);n.setMesh(o);const l=o;return n.pickaxe=l.pickaxe??null,n.selectRing=l.selectRing??null,this.renderer.addEntityMesh(o),this.creatures.push(n),n}rebuild(){this.grid.refreshTorches(),this.renderer.rebuildGrid(this.grid),this.gridDirty=!1,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=.22}requestStructuralRebuild(){this.pendingStructuralRebuild=!0,this.gridDirty=!0}flushMarks(){this.marksDirty&&(this.renderer.syncMarkOverlay(this.grid),this.marksDirty=!1)}flushFog(){this.fogDirty&&(this.renderer.syncFogOverlay(this.grid),this.fogDirty=!1)}noteFogChange(e){e&&(this.fogDirty=!0)}safeMood(e,t){const i=Number.isFinite(e.mood)?e.mood:72,n=Number.isFinite(t)?t:i;e.mood=Math.max(0,Math.min(100,n))}pruneSelection(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero),this.selected&&(!this.selected.alive||this.selected.isHero)&&(this.selected=null),this.selected&&!this.selectedGroup.includes(this.selected)&&this.selectedGroup.push(this.selected),!this.selected&&this.selectedGroup.length&&(this.selected=this.selectedGroup[this.selectedGroup.length-1]),this.selectedGroup.length||(this.selected=null,this.hud.hideInspector())}catch(e){console.warn("[underkeep] pruneSelection failed",e),this.selected=null,this.selectedGroup=[];try{this.hud.hideInspector()}catch{}}}bindInput(e){window.addEventListener("keydown",n=>{this.keys.add(n.key.toLowerCase());const s={1:"select",2:"dig",3:"claim",4:"fortify",5:"treasury",6:"lair",7:"hatchery",8:"training",9:"library",0:"portal",g:"guard",u:"workshop",j:"prison",k:"torture",h:"graveyard",m:"temple",c:"combatPit",d:"door",f:"sentry",y:"rally"};if(s[n.key]&&(this.tool=s[n.key],this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="q"&&this.castSpell("createWorker"),n.key.toLowerCase()==="e"&&this.castSpell("speed"),n.key.toLowerCase()==="r"&&this.castSpell("lightning"),n.key.toLowerCase()==="t"&&this.castSpell("heal"),n.key.toLowerCase()==="p"&&this.castSpell("possess"),n.key.toLowerCase()==="b"&&(this.tool="bridgeWood",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="n"&&(this.tool="bridgeStone",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()===" "&&this.held&&(n.preventDefault(),this.dropHeld()),n.key==="Escape"){if(this.possessed){this.exitPossession();return}this.cancelBoxSelect(),this.clearSelection(),this.possessArmed=!1}n.key.toLowerCase()==="l"&&!n.metaKey&&!n.ctrlKey&&(this.refreshRosterUi(!0),this.hud.openRoster())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),e.addEventListener("contextmenu",n=>n.preventDefault());const t=n=>n.preventDefault();e.addEventListener("gesturestart",t,{passive:!1}),e.addEventListener("gesturechange",t,{passive:!1}),e.addEventListener("mousedown",n=>{if(performance.now()<this.ignoreMouseUntil||this.gameOver)return;const s=this.pointerToTile(n,e);if(!s)return;const o=this.pointerToWorld(n,e)??new E;if(n.button===2){this.cancelBoxSelect(),this.handleSecondaryAt(s.x,s.y,o);return}if(n.button===0){if(this.tool==="select"&&!this.held){const l=this.creatureAt(s.x,s.y,o);if(!l||l.isHero){this.boxSelecting=!0,this.boxMoved=!1,this.boxStartClient={x:n.clientX,y:n.clientY},this.pendingPrimary={tx:s.x,ty:s.y,hit:o.clone(),shift:n.shiftKey};return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey);return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey)}}),e.addEventListener("mouseup",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.boxSelecting&&this.boxStartClient){const s=this.boxStartClient;if(this.boxMoved)this.selectCreaturesInScreenBox(e,s.x,s.y,n.clientX,n.clientY,n.shiftKey||!!this.pendingPrimary?.shift);else if(this.pendingPrimary){const o=this.pendingPrimary;this.handlePrimaryAt(o.tx,o.ty,o.hit,o.shift||n.shiftKey)}this.cancelBoxSelect()}this.paint=!1,this.lastPaint=null,this.flushMarks()}}),e.addEventListener("mouseleave",()=>{this.boxSelecting&&this.cancelBoxSelect()}),e.addEventListener("mousemove",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.updatePointerHover(n,e),this.boxSelecting&&this.boxStartClient&&this.tool==="select"){const s=n.clientX-this.boxStartClient.x,o=n.clientY-this.boxStartClient.y;Math.hypot(s,o)>8&&(this.boxMoved=!0,this.updateMarquee(this.boxStartClient.x,this.boxStartClient.y,n.clientX,n.clientY))}if(this.paint&&this.tool!=="select"){const s=this.pointerToTile(n,e);if(!s)return;(!this.lastPaint||this.lastPaint.x!==s.x||this.lastPaint.y!==s.y)&&(this.applyTool(s.x,s.y),this.lastPaint={...s})}if(this.held)try{const s=this.pointerToWorld(n,e);s&&Number.isFinite(s.x)&&Number.isFinite(s.z)&&(this.held.wx=s.x,this.held.wz=s.z)}catch(s){console.warn("[underkeep] held follow failed",s)}}}),e.addEventListener("wheel",n=>{n.preventDefault(),this.zoomBy(-Math.sign(n.deltaY)*1.5)},{passive:!1}),e.addEventListener("touchstart",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++){const l=n.changedTouches[o];this.activeTouches.set(l.identifier,{clientX:l.clientX,clientY:l.clientY})}const s=[...this.activeTouches.values()];if(s.length>=2){this.clearLongPress();const[o,l]=s;if(this.pinchStartDist=Math.hypot(o.clientX-l.clientX,o.clientY-l.clientY),this.pinchStartCamY=this.renderer.camera.position.y,this.touchMode==="tap"&&!this.touchMoved&&performance.now()-this.touchStartTime<280){const a=this.pointerToTile(this.touchStartClient,e);a&&this.handleSecondaryAt(a.x,a.y),this.touchMode="none",this.activeTouches.clear();return}this.touchMode="pinch",this.paint=!1;return}if(s.length===1){const o=s[0];this.touchStartClient={clientX:o.clientX,clientY:o.clientY},this.touchStartTime=performance.now(),this.touchMoved=!1,this.panAccum={x:0,y:0},this.touchMode="tap",this.clearLongPress(),this.longPressTimer=window.setTimeout(()=>{if(this.touchMode!=="tap"||this.touchMoved)return;this.touchMode="longpress";const l=this.pointerToTile(this.touchStartClient,e);l&&this.handleSecondaryAt(l.x,l.y);try{navigator.vibrate?.(15)}catch{}},450)}},{passive:!1}),e.addEventListener("touchmove",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let c=0;c<n.changedTouches.length;c++){const d=n.changedTouches[c];this.activeTouches.set(d.identifier,{clientX:d.clientX,clientY:d.clientY})}const s=[...this.activeTouches.values()];if(this.touchMode==="pinch"||s.length>=2){if(this.clearLongPress(),this.touchMode="pinch",s.length>=2){const[c,d]=s,u=Math.hypot(c.clientX-d.clientX,c.clientY-d.clientY);if(this.pinchStartDist>0){const f=u/this.pinchStartDist,m=this.renderer.camera,v=ka.clamp(this.pinchStartCamY/f,12,45),g=v-m.position.y;if(Math.abs(g)>.01){const p=new E;m.getWorldDirection(p),m.position.y=v;const x=g*.35;m.position.x+=p.x*-x,m.position.z+=p.z*-x,m.lookAt(this.camTarget.x,0,this.camTarget.z)}}}return}if(s.length!==1)return;const o=s[0],l=o.clientX-this.touchStartClient.clientX,a=o.clientY-this.touchStartClient.clientY,h=Math.hypot(l,a);if(!this.touchMoved&&h>12)if(this.touchMoved=!0,this.clearLongPress(),this.tool!=="select"&&!this.held){this.touchMode="paint",this.paint=!0;const c=this.pointerToTile(o,e);c&&(this.applyTool(c.x,c.y),this.lastPaint={...c})}else this.held?this.touchMode="tap":this.touchMode="pan";if(this.touchMode==="paint"){const c=this.pointerToTile(o,e);c&&((!this.lastPaint||this.lastPaint.x!==c.x||this.lastPaint.y!==c.y)&&(this.applyTool(c.x,c.y),this.lastPaint={...c}),this.updatePointerHover(o,e))}else if(this.touchMode==="pan"){const c=o.clientX-(this.touchStartClient.clientX+this.panAccum.x),d=o.clientY-(this.touchStartClient.clientY+this.panAccum.y);this.panAccum.x=l,this.panAccum.y=a,this.panCameraByScreen(-c,-d)}else if(this.held){try{const c=this.pointerToWorld(o,e);c&&Number.isFinite(c.x)&&Number.isFinite(c.z)&&(this.held.wx=c.x,this.held.wz=c.z)}catch{}this.updatePointerHover(o,e)}else this.updatePointerHover(o,e)},{passive:!1}),e.addEventListener("touchend",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++)this.activeTouches.delete(n.changedTouches[o].identifier);if(this.touchMode==="pinch"){this.activeTouches.size<2&&(this.touchMode=this.activeTouches.size===1?"pan":"none",this.pinchStartDist=0),this.activeTouches.size===0&&(this.touchMode="none",this.paint=!1,this.lastPaint=null);return}if(this.activeTouches.size>0)return;const s=this.touchMode;if(this.clearLongPress(),s==="tap"&&!this.touchMoved&&!this.gameOver){const o=this.pointerToTile(this.touchStartClient,e),l=this.pointerToWorld(this.touchStartClient,e);o&&l&&this.handlePrimaryAt(o.x,o.y,l)}this.touchMode="none",this.paint=!1,this.lastPaint=null},{passive:!1}),e.addEventListener("touchcancel",n=>{for(let s=0;s<n.changedTouches.length;s++)this.activeTouches.delete(n.changedTouches[s].identifier);this.clearLongPress(),this.touchMode="none",this.paint=!1,this.lastPaint=null,this.pinchStartDist=0});const i=document.getElementById("pan-zone");if(i){let n=null;i.addEventListener("touchstart",s=>{s.preventDefault();const o=s.changedTouches[0];n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchmove",s=>{s.preventDefault();const o=s.changedTouches[0];if(!n){n={x:o.clientX,y:o.clientY};return}this.panCameraByScreen(-(o.clientX-n.x),-(o.clientY-n.y)),n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchend",()=>{n=null}),i.addEventListener("touchcancel",()=>{n=null})}}clearLongPress(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}handlePrimaryAt(e,t,i,n=!1){try{if(this.tool==="select"){if(this.possessed){this.possessMoveTo(e,t);return}if(this.held){this.dropHeldAt(e,t);return}const s=this.creatureAt(e,t,i);if(this.possessArmed&&s&&!s.isHero){if(this.possessArmed=!1,this.mana<Cn){this.hud.say("Not enough mana to Possess.");return}this.mana-=Cn,this.enterPossession(s);return}if(s&&!s.isHero&&n){this.toggleSelectCreature(s);return}if(s&&s.isHero&&(s.knockedOut||s.isPrisoner)){this.pickUp(s);return}if(s&&s.isHero&&!s.knockedOut&&!s.isPrisoner&&this.selectedGroup.some(o=>o.alive&&!o.isWorker)){this.issueAttackMove(s.x,s.y,!0);return}if(s&&!s.isHero){this.selectCreature(s),this.pickUp(s);return}if(this.selectedGroup.some(o=>o.alive&&!o.held)&&(this.grid.isWalkable(e,t)||this.grid.get(e,t)?.kind===A.Heart)){this.issueAttackMove(e,t,!1);return}this.clearSelection()}else this.paint=!0,this.applyTool(e,t),this.lastPaint={x:e,y:t}}catch(s){console.warn("[underkeep] primary input failed",s)}}handleSecondaryAt(e,t,i){try{if(this.tool==="select"){let s=null;if(this.held&&!this.held.isHero?s=this.held:(s=this.creatureAt(e,t,i),(!s||s.isHero)&&this.selected&&this.selected.alive&&!this.selected.isHero&&(s=this.selected)),s&&!s.isHero){s.held||this.selectCreature(s),this.slap(s);return}}else if(this.held){this.dropHeld();return}const n=this.grid.get(e,t);n&&n.mark!==ke.None&&(n.mark=ke.None,this.marksDirty=!0,this.flushMarks())}catch(n){console.warn("[underkeep] secondary input failed",n)}}updatePointerHover(e,t){const i=this.pointerToTile(e,t);if(!i||!this.grid.inBounds(i.x,i.y)){this.renderer.setHover(0,0,!1);return}const n=this.grid.tileToWorld(i.x,i.y);this.renderer.setHover(n.x,n.z,!0,this.toolColor());const s=this.grid.get(i.x,i.y);if(s){let o=s.room!==y.None?` · ${["","Treasury","Lair","Hatchery","Training","Library","Portal","Guard","Workshop","Prison","Torture Chamber","Graveyard","Temple","Combat Pit"][s.room]}`:"";if(s.room===y.Hatchery&&(o+=` · food ${Math.floor(this.hatcheryFood)}`),s.room===y.Workshop&&(o+=` · kits D${this.doorKits}/S${this.sentryKits}`),s.room===y.Lair||s.room===y.Hatchery||s.room===y.Library){const c=this.grid.largestContiguousRoom(s.room),d=os(c);c>0&&(o+=` · size ${c}`,d>0&&(o+=` · +${Math.round(d*100)}% eff`))}if(s.room===y.Prison){const c=this.creatures.filter(d=>d.alive&&d.isPrisoner).length;o+=` · prisoners ${c}`}if(s.room===y.Graveyard&&(o+=` · corpses ${this.corpses.length}`),s.room===y.Temple&&(o+=` · praying ${this.templePrayCount}`),s.room===y.CombatPit){const c=this.creatures.filter(d=>d.alive&&!d.isHero&&d.job===D.Train&&this.grid.get(d.x,d.y)?.room===y.CombatPit).length;o+=` · sparring ${c}`}if(s.door===$e.Closed&&(o+=" · Door (closed)"),s.door===$e.Open&&(o+=" · Door (open)"),s.trap===gt.Sentry&&(o+=" · Sentry trap"),s.rally&&(o+=" · Rally flag"),s.room===y.Lair){const c=this.grid.countRoom(y.Lair);o+=` · beds ${this.countOccupiedBeds()}/${c}`}const l=s.digProgress>0?` · dig ${Math.floor(s.digProgress*100)}%`:"",a=s.kind===A.Gold?"Gold":s.kind===A.Earth?"Earth":s.kind===A.Rock?"Rock":s.kind===A.Lava?"Lava":s.kind===A.Water?"Water":s.kind===A.BridgeWood?"Wood Bridge":s.kind===A.BridgeStone?"Stone Bridge":A[s.kind];let h=`(${i.x},${i.y}) ${a}${s.fortified?" [fortified]":""}${o}${l}`;if(this.tool==="select"){const c=this.creatureAt(i.x,i.y);c&&!c.isHero?h+=` · ${c.kind} mood ${Math.floor(c.mood)} · eff ${Math.round(c.workEfficiency()*100)}%`:this.held&&(h+=" · drop here")}this.hud.setTooltip(h)}}panCameraByScreen(e,t){const i=this.renderer.camera,n=new E;i.getWorldDirection(n),n.y=0,n.normalize();const s=new E().crossVectors(n,new E(0,1,0)).normalize(),o=i.position.y*.0028,l=s.multiplyScalar(e*o).add(n.multiplyScalar(-t*o));i.position.add(l),this.camTarget.add(l),i.lookAt(this.camTarget.x,0,this.camTarget.z)}zoomBy(e){const t=this.renderer.camera,i=new E;t.getWorldDirection(i),t.position.addScaledVector(i,e),t.position.y=ka.clamp(t.position.y,12,45),t.lookAt(this.camTarget.x,0,this.camTarget.z)}pointerNdc(e,t){const i=t.getBoundingClientRect();return{nx:(e.clientX-i.left)/i.width*2-1,ny:-((e.clientY-i.top)/i.height)*2+1}}pointerToWorld(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?new E(s.x,0,s.z):null}pointerToTile(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?typeof s.tileX=="number"&&typeof s.tileY=="number"?{x:s.tileX,y:s.tileY}:this.grid.worldToTile(s.x,s.z):null}toolColor(){switch(this.tool){case"dig":return 16729122;case"claim":return 4491519;case"fortify":return 11184810;case"select":return 16764006;case"bridgeWood":return 12615744;case"bridgeStone":return 8425640;default:return 8978278}}creatureAt(e,t,i){let n=null,s=1.85;for(const o of this.creatures){if(!o.alive||o.held)continue;let l=Math.hypot(o.x-e,o.y-t);if(i){const a=Math.hypot(o.wx-i.x,o.wz-i.z)/Xe;l=Math.min(l,a)}l<s&&(s=l,n=o)}return n}hideMarquee(){this.marqueeEl&&(this.marqueeEl.classList.add("hidden"),this.marqueeEl.style.width="0",this.marqueeEl.style.height="0")}cancelBoxSelect(){this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee()}updateMarquee(e,t,i,n){if(!this.marqueeEl)return;const s=Math.min(e,i),o=Math.min(t,n),l=Math.abs(i-e),a=Math.abs(n-t);this.marqueeEl.classList.remove("hidden"),this.marqueeEl.style.left=`${s}px`,this.marqueeEl.style.top=`${o}px`,this.marqueeEl.style.width=`${l}px`,this.marqueeEl.style.height=`${a}px`}clearSelection(){for(const e of this.selectedGroup)e.selected=!1;this.selected&&(this.selected.selected=!1),this.selected=null,this.selectedGroup=[],this.hud.hideInspector()}syncSelectionPrimary(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero);for(const e of this.creatures)this.selectedGroup.includes(e)||(e.selected=!1);for(const e of this.selectedGroup)e.selected=!0;this.selected=this.selectedGroup.length?this.selectedGroup[this.selectedGroup.length-1]:null,this.refreshInspector()}catch(e){console.warn("[underkeep] syncSelectionPrimary failed",e),this.pruneSelection()}}selectCreature(e){if(!(!e||!e.alive||e.isHero)){for(const t of this.selectedGroup)t.selected=!1;this.selectedGroup=[e],this.selected=e,e.selected=!0,this.refreshInspector()}}toggleSelectCreature(e){if(!e||!e.alive||e.isHero)return;const t=this.selectedGroup.indexOf(e);t>=0?(e.selected=!1,this.selectedGroup.splice(t,1)):(this.selectedGroup.push(e),e.selected=!0,this.mentioneOnce("groupSelect",H.groupSelect)),this.syncSelectionPrimary()}selectCreaturesInScreenBox(e,t,i,n,s,o){try{const l=Math.min(t,n),a=Math.max(t,n),h=Math.min(i,s),c=Math.max(i,s);if(a-l<6&&c-h<6)return;const d=this.renderer.camera,u=e.getBoundingClientRect(),f=[],m=new E;for(const v of this.creatures){if(!v.alive||v.isHero||v.held||!Number.isFinite(v.wx)||!Number.isFinite(v.wz)||(m.set(v.wx,.6,v.wz),m.project(d),!Number.isFinite(m.x)||!Number.isFinite(m.y)))continue;const g=(m.x+1)/2*u.width+u.left,p=(-m.y+1)/2*u.height+u.top;g>=l&&g<=a&&p>=h&&p<=c&&f.push(v)}if(!o){for(const v of this.selectedGroup)v.selected=!1;this.selectedGroup=[]}for(const v of f)this.selectedGroup.includes(v)||this.selectedGroup.push(v),v.selected=!0;f.length&&this.mentioneOnce("groupSelect",H.groupSelect),this.syncSelectionPrimary()}catch(l){console.warn("[underkeep] box select failed",l)}}issueAttackMove(e,t,i=!1){try{this.pruneSelection();const n=this.selectedGroup.filter(o=>o.alive&&!o.isHero&&!o.isWorker&&!o.held);if(!n.length){const o=this.selectedGroup.filter(l=>l.alive&&!l.isHero&&!l.held);if(!o.length)return;for(const l of o)try{l.bedKey&&this.releaseBed(l),l.job=D.Wander,l.jobTarget={x:e,y:t},l.setPath(this.grid.findPath(l.x,l.y,e,t))}catch(a){console.warn("[underkeep] move order unit failed",a)}this.hud.sayNow("Move order issued.");return}let s=0;for(const o of n)try{o.bedKey&&this.releaseBed(o);const l=s%3-1,a=Math.floor(s/3)%2;s++;let h=e+l,c=t+a;this.grid.isWalkable(h,c)||(h=e,c=t),o.job=D.AttackMove,o.jobTarget={x:h,y:c};const d=this.grid.findPath(Number.isFinite(o.x)?o.x:h,Number.isFinite(o.y)?o.y:c,h,c);d?o.setPath(d):o.setPath(null),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+3),o.clampStats()}catch(l){console.warn("[underkeep] attack-move unit failed",l)}try{const o=this.grid.tileToWorld(e,t);Number.isFinite(o.x)&&Number.isFinite(o.z)&&this.renderer.spawnFx(new E(o.x,.9,o.z),i?16736320:16763972,.55)}catch{}this.hud.sayNow(i?H.attackHero:H.attackMove),this.refreshInspector()}catch(n){console.warn("[underkeep] issueAttackMove failed",n)}}refreshInspector(){try{const e=this.held??this.selected;if(!e||!e.alive){this.hud.hideInspector();return}e.clampStats();const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch",hero_knight:"Hero Knight",hero_archer:"Hero Archer"},i=typeof e.job=="string"&&e.job.length>0?e.job:"idle",n=e.held?"Held":e.isPrisoner?e.convertProgress>0?`Converting ${Math.floor(e.convertProgress)}%`:"Prisoner":e.knockedOut?"Knocked out":i===D.AttackMove?"Attack":i===D.Pray?"Praying":i===D.DragWounded?"Dragging wounded":i===D.Flee?"Fleeing":i.charAt(0).toUpperCase()+i.slice(1),s=this.selectedGroup.filter(l=>l.alive).length,o=t[e.kind]??String(e.kind);this.hud.showInspector({kind:s>1?`${o} (+${s-1})`:o,job:s>1?`${n} · squad ${s}`:n,hp:e.hp,maxHp:e.maxHp,hunger:e.hunger,tired:e.sleepNeed,mood:e.mood,efficiency:e.workEfficiency(),held:e.held})}catch(e){console.warn("[underkeep] refreshInspector failed",e)}}applyTool(e,t){const i=this.grid.get(e,t);if(i)if(this.tool==="dig")this.grid.isDiggable(e,t)&&(i.mark=ke.Dig,i.digProgress<=0&&(i.digProgress=0),this.marksDirty=!0);else if(this.tool==="claim")i.kind===A.Dirt&&(i.mark=ke.Claim,this.marksDirty=!0);else if(this.tool==="fortify")(i.kind===A.Earth||i.kind===A.Gold)&&this.grid.hasAdjacentClaimed(e,t)&&(i.mark=ke.Fortify,this.marksDirty=!0);else if(this.tool==="bridgeWood"||this.tool==="bridgeStone")this.placeBridge(e,t,this.tool==="bridgeStone");else if(this.tool==="door"){if(this.grid.canPlaceDoor(e,t))if(i.door===$e.None){if(!this.spendDoorOrSentry("door"))return;i.door=$e.Closed,this.requestStructuralRebuild(),this.mentioneOnce("doorBuilt",H.doorBuilt),this.saveNow()}else i.door===$e.Closed?(i.door=$e.Open,this.requestStructuralRebuild(),this.hud.say(H.doorOpen),this.saveNow()):(i.door=$e.Closed,this.requestStructuralRebuild(),this.hud.say(H.doorClosed),this.saveNow())}else if(this.tool==="sentry"){if(i.kind===A.Claimed&&i.trap===gt.None){if(!this.spendDoorOrSentry("sentry"))return;i.trap=gt.Sentry,this.requestStructuralRebuild(),this.mentioneOnce("sentryBuilt",H.sentryBuilt),this.saveNow()}}else if(this.tool==="rally"){if(i.kind===A.Claimed){if(i.rally){i.rally=!1,this.hud.say(H.rallyCleared),this.requestStructuralRebuild(),this.saveNow();return}if(this.gold<Gl)return;this.gold-=Gl;for(const n of this.grid.tiles)n.rally=!1;i.rally=!0,this.requestStructuralRebuild(),this.hud.say(H.rallyPlanted);for(const n of this.creatures)if(!(!n.alive||n.isHero||n.isWorker||n.held)&&(n.kind===K.Rattlekin||n.kind===K.Emberling||n.kind===K.Skitterwing)){n.job=D.Guard,n.jobTarget={x:e,y:t};const s=this.grid.findPath(n.x,n.y,e,t);s&&n.setPath(s)}this.saveNow()}}else{const s={treasury:y.Treasury,lair:y.Lair,hatchery:y.Hatchery,training:y.Training,library:y.Library,portal:y.Portal,guard:y.Guard,workshop:y.Workshop,prison:y.Prison,torture:y.Torture,graveyard:y.Graveyard,temple:y.Temple,combatPit:y.CombatPit}[this.tool];if(s&&i.kind===A.Claimed&&i.room===y.None){const o=Ng[s];this.gold>=o&&(this.gold-=o,i.room=s,this.requestStructuralRebuild(),this.mentioneOnce("firstRoom",H.firstRoom),s===y.Portal&&this.mentioneOnce("portal",H.portal),s===y.Lair&&(this.mentioneOnce("lairBuilt",H.lairBuilt),this.spikeNeedsForRoom(y.Lair)),s===y.Hatchery&&(this.mentioneOnce("hatcheryBuilt",H.hatcheryBuilt),this.hatcheryFood=Math.max(this.hatcheryFood,4),this.spikeNeedsForRoom(y.Hatchery)),s===y.Guard&&this.mentioneOnce("guardBuilt",H.guardBuilt),s===y.Workshop&&this.mentioneOnce("workshopBuilt",H.workshopBuilt),s===y.Prison&&this.mentioneOnce("prisonBuilt",H.prisonBuilt),s===y.Torture&&this.mentioneOnce("tortureBuilt",H.tortureBuilt),s===y.Graveyard&&this.mentioneOnce("graveyardBuilt",H.graveyardBuilt),s===y.Temple&&this.mentioneOnce("templeBuilt",H.templeBuilt),s===y.CombatPit&&this.mentioneOnce("combatPitBuilt",H.combatPitBuilt),this.saveNow())}}}pickUp(e){try{if(!e||!e.alive||e.isHero&&!e.knockedOut&&!e.isPrisoner)return;e.bedKey&&this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null,e.clampStats(),e.held=!0,e.setPath(null),e.job=D.Idle,e.jobTarget=null,e.workTimer=0,this.held=e,this.selectCreature(e);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new E(t,1,i),16768392,.45),this.mentioneOnce("pickUp",H.pickUp),this.refreshInspector()}catch(t){console.warn("[underkeep] pickUp failed",t);try{e&&(e.held=!1,this.held===e&&(this.held=null))}catch{}}}dropHeld(){if(!this.held)return;const e=this.grid.worldToTile(this.held.wx,this.held.wz);this.dropHeldAt(e.x,e.y)}dropHeldAt(e,t){const i=this.held;if(i)try{if(!this.grid.isWalkable(e,t)&&this.grid.get(e,t)?.kind!==A.Heart){let o=!1;for(let l=0;l<4&&!o;l++)for(let a=-l;a<=l&&!o;a++)for(let h=-l;h<=l&&!o;h++)this.grid.isWalkable(e+h,t+a)&&(e=e+h,t=t+a,o=!0);if(!o)return}i.held=!1,i.x=e,i.y=t;const n=this.grid.tileToWorld(e,t);i.wx=n.x,i.wz=n.z;const s=this.grid.get(e,t);if(i.isHero&&(i.knockedOut||i.isPrisoner)&&s?.room===y.Prison){this.imprisonCreature(i,e,t),this.held=null,this.refreshInspector();return}if(i.isHero&&(i.knockedOut||i.isPrisoner)&&s?.room===y.Torture){this.imprisonCreature(i,e,t),i.convertProgress=Math.max(i.convertProgress,25),this.hud.sayNow(H.converting),this.held=null,this.refreshInspector();return}if(!i.isHero&&i.knockedOut&&s?.room===y.Lair){i.knockedOut=!1,i.hp=Math.max(i.hp,Math.floor(i.maxHp*.25)),i.job=D.Sleep,i.jobTarget={x:e,y:t},i.bedKey=`${e},${t}`,this.bedOwners.set(i.bedKey,i.id),i.setPath(null),this.hud.sayNow(H.lairResting),this.held=null,this.refreshInspector();return}if(!i.isHero){const o=s?.room===y.CombatPit;this.creatures.some(a=>a.alive&&a!==i&&a.isHero!==i.isHero&&!a.knockedOut&&!a.isPrisoner&&Math.hypot(a.x-e,a.y-t)<2.5)&&!o&&(i.stunTimer=1.5),this.safeMood(i,(Number.isFinite(i.mood)?i.mood:72)+4)}this.held=null,i.clampStats(),this.mentioneOnce("drop",H.drop),this.refreshInspector()}catch(n){console.warn("[underkeep] dropHeldAt failed",n);try{i&&(i.held=!1,i.clampStats()),this.held=null}catch{}}}slap(e){try{if(!e||!e.alive||e.isHero)return;e.clampStats(),e.stunTimer=Math.max(e.stunTimer,1.35),e.speedBuff=Math.max(e.speedBuff,2.8),e.sleepNeed=Math.max(0,Math.min(100,e.sleepNeed-12)),e.hunger=Math.max(0,Math.min(100,e.hunger-4)),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+8),e.setPath(null),e.workTimer=0,e.job!==D.Sleep&&e.job!==D.Eat&&(e.job=D.Idle,e.jobTarget=null);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new E(t,.7,i),16772744,.7),this.renderer.spawnFx(new E(t,1.15,i),16755268,.55),this.renderer.spawnDigDebris(t,i,16768392),this.hud.sayNow(H.slap),this.refreshInspector()}catch(t){console.warn("[underkeep] slap failed",t);try{this.hud.sayNow(H.slap)}catch{}}}spendDoorOrSentry(e){if(e==="door"&&this.doorKits>0)return this.doorKits--,this.hud.sayNow(`Door kit spent (${this.doorKits} left).`),!0;if(e==="sentry"&&this.sentryKits>0)return this.sentryKits--,this.hud.sayNow(`Sentry kit spent (${this.sentryKits} left).`),!0;const t=this.grid.countRoom(y.Workshop)>0,i=e==="door"?Ug:Fg,n=t?Math.floor(i*.7):i;return this.gold<n?(this.hud.sayNow(t?`Need ${n}g (Workshop discount) or a ${e} kit.`:`Need ${n} gold — or craft kits in a Workshop.`),!1):(this.gold-=n,t&&this.hud.say(`Workshop discount — ${e} for ${n}g.`),!0)}syncMissionHud(){this.hud.setObjective(`W${this.wavesCleared}/${Jt} · ${Math.floor(this.gold)}/${en}g`),this.hud.setKits(this.doorKits,this.sentryKits),this.hud.setWorkerCost(this.workerCost())}updateMinimap(){this.hud.drawMinimap({width:this.grid.width,height:this.grid.height,heartX:this.grid.heartPos.x,heartY:this.grid.heartPos.y,kindAt:(e,t)=>this.grid.get(e,t)?.kind??0,exploredAt:(e,t)=>!!this.grid.get(e,t)?.explored,roomAt:(e,t)=>this.grid.get(e,t)?.room??0})}checkMissionWin(){if(!(this.won||this.gameOver)){if(this.gold>=en){this.won=!0,this.gameOver=!0,this.hud.sayNow(H.winGold),this.hud.showOverlay("Victory — Gold",H.winGold+" The Underkeep gleams.","Reign Again");return}this.wavesCleared>=Jt&&(this.won=!0,this.gameOver=!0,this.hud.sayNow(H.winWaves),this.hud.showOverlay("Victory",H.winWaves+" The dark endures.","Reign Again"))}}workerCost(){return D0+this.workerCostScale*50}castSpell(e){if(!this.gameOver){if(e==="createWorker"){const t=this.workerCost();if(this.gold<t){this.hud.sayNow(`Need ${t} gold to forge a Scrabbler.`);return}const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=i,o=n;for(let c=1;c<6;c++)for(let d=-c;d<=c;d++)for(let u=-c;u<=c;u++)if(this.grid.isWalkable(i+u,n+d)){s=i+u,o=n+d,c=99;break}this.gold-=t,this.workerCostScale++;const l=this.spawnCreature(K.Scrabbler,s,o);l.pulseTint("heal",.9),l.speedBuff=Math.max(l.speedBuff,2.5);const a=this.grid.tileToWorld(s,o);this.renderer.spawnFx(new E(a.x,.6,a.z),8978272,.85),this.renderer.spawnFx(new E(a.x,1.2,a.z),16769152,.7),this.renderer.spawnCareSparks(a.x,a.z,"heal",!0);const h=this.workerCost();this.hud.sayNow(H.workerSpawn.replace("%g",String(t)).replace("%n",String(h))),this.hud.say(H.worker),this.hud.setWorkerCost(h);return}if(e==="speed"){if(this.mana<io)return;this.mana-=io;for(const t of this.creatures)t.alive&&!t.isHero&&(t.speedBuff=Math.max(t.speedBuff,6));this.hud.say(H.speed);return}if(e==="lightning"){if(this.mana<no)return;const t=this.creatures.filter(l=>l.alive&&l.isHero&&!l.knockedOut&&!l.isPrisoner);if(!t.length)return;this.mana-=no;const i=t.reduce((l,a)=>{const h=Math.hypot(l.x-this.grid.heartPos.x,l.y-this.grid.heartPos.y),c=Math.hypot(a.x-this.grid.heartPos.x,a.y-this.grid.heartPos.y);return h<c?l:a}),n=45+this.researchRank*12,s=i.alive;i.takeDamage(n),s&&!i.alive&&(this.grid.countRoom(y.Prison)>0?(i.alive=!0,i.hp=1,i.knockedOut=!0,i.job=D.Idle,i.jobTarget=null,i.setPath(null),this.hud.sayNow(H.heroKnocked)):this.spawnCorpse(i.x,i.y,!0));const o=new E(this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).x,4,this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).z);this.renderer.spawnLightning(o,new E(i.wx,1,i.wz)),this.hud.say(H.lightning);return}if(e==="heal"){if(!this.healUnlocked){this.hud.say("Heal is sealed. Staff a Library with Gravemages to research it.");return}const t=30;if(this.mana<t)return;this.mana-=t;let i=0;for(const n of this.creatures)!n.alive||n.isHero||n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+35+this.researchRank*8),n.pulseTint("heal",1.1),this.renderer.spawnCareSparks(n.wx,n.wz,"heal",!1),i++);this.hud.say(i?H.heal:"No wounds to mend — for now.");return}if(e==="possess"){if(this.possessed){this.exitPossession();return}if(this.mana<Cn){this.hud.say("Not enough mana to Possess.");return}const t=(this.held&&this.held.alive&&!this.held.isHero?this.held:null)||(this.selected&&this.selected.alive&&!this.selected.isHero?this.selected:null);if(t){this.mana-=Cn,this.held===t&&(t.held=!1,this.held=null),this.enterPossession(t);return}this.possessArmed=!0,this.hud.say(H.possessArm),this.hud.sayNow("Possess armed — click a minion to ride their senses. Esc exits.");return}}}maxMana(){return k0+Math.floor(this.grid.countClaimed()*.5)}preparePass4Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(a,h,c=y.None)=>{const d=this.grid.get(a,h);!d||d.kind===A.Heart||(d.kind=A.Claimed,d.claimedProgress=1,d.mark=ke.None,d.digProgress=0,d.fortified=!1,d.room=c)};for(let a=e-1;a<=e+5;a++)for(let h=t-1;h<=t+4;h++)i(a,h);i(e+2,t,y.Treasury),i(e+3,t,y.Treasury),i(e+2,t+1,y.Lair),i(e+3,t+1,y.Lair),i(e+2,t+2,y.Training),i(e+3,t+2,y.Training),i(e+4,t,y.Hatchery),i(e+4,t+1,y.Library),i(e+4,t+2,y.Portal);const n=t-3;for(let a=0;a<2;a++){const h=this.grid.get(e-1+a,n);h&&(h.kind=A.Rock,h.fortified=!1,h.mark=ke.None,h.room=y.None,h.digProgress=0,h.goldAmount=0)}for(let a=0;a<2;a++){const h=this.grid.get(e+1+a,n);h&&(h.kind=A.Earth,h.fortified=!1,h.mark=ke.Dig,h.digProgress=a===0?.4:.15,h.room=y.None,h.goldAmount=0)}for(let a=0;a<3;a++){const h=this.grid.get(e+3+a,n);h&&(h.kind=A.Gold,h.goldAmount=400,h.fortified=!1,h.mark=ke.Dig,h.digProgress=.08,h.room=y.None)}for(let a=e-1;a<=e+5;a++)i(a,t-2);const s=this.creatures.filter(a=>a.isWorker&&a.alive),o={x:e+1,y:n};for(let a=0;a<s.length;a++){const h=s[a],c=e+a%3,d=t-2,u=this.grid.tileToWorld(c,d);h.x=c,h.y=d,h.wx=u.x+(a-1)*.15,h.wz=u.z,h.job=D.Dig,h.jobTarget=o,h.workTimer=.25,h.digAnim=.4+a*.35,h.setPath(null);const f=this.grid.tileToWorld(o.x,o.y);if(h.mesh.lookAt(f.x,h.mesh.position.y,f.z),h.syncMesh(this.time+.5),h.pickaxe){const m=Math.sin(h.digAnim*11);h.pickaxe.rotation.x=-.9+m*1.35,h.pickaxe.rotation.z=.15+m*.55,h.pickaxe.visible=!0}h.selectRing&&(h.selectRing.visible=!0)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.saveNow();const l=this.grid.tileToWorld(e+2,t);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+3,24,l.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass5bShot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,l,a=y.None)=>{const h=this.grid.get(o,l);!h||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.mark=ke.None,h.digProgress=0,h.fortified=!1,h.room=a)};for(let o=e-1;o<=e+5;o++)for(let l=t-1;l<=t+4;l++)i(o,l);i(e+2,t+1,y.Lair),i(e+3,t+1,y.Lair),i(e+4,t,y.Hatchery),i(e+4,t+1,y.Hatchery),this.hatcheryFood=6,this.spikeNeedsForRoom(y.Lair),this.spikeNeedsForRoom(y.Hatchery);const n=this.creatures.filter(o=>o.isWorker&&o.alive);if(n[0]){const o=n[0],l=e+2,a=t+1,h=this.grid.tileToWorld(l,a);o.x=l,o.y=a,o.wx=h.x,o.wz=h.z,o.hp=o.maxHp*.45,o.sleepNeed=80,o.hunger=10;const c=`${l},${a}`;this.bedOwners.set(c,o.id),o.bedKey=c,o.job=D.Sleep,o.jobTarget={x:l,y:a},o.restHealAcc=1.7,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"heal",!0),o.pulseTint("heal",2.2)}if(n[1]){const o=n[1],l=e+4,a=t,h=this.grid.tileToWorld(l,a);o.x=l,o.y=a,o.wx=h.x,o.wz=h.z,o.hunger=60,o.job=D.Eat,o.jobTarget={x:l,y:a},o.eatAnnounced=!0,o.eatAnim=2.5,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"feast",!0),o.pulseTint("feast",2.2)}if(n[2]){const o=n[2],l=this.grid.tileToWorld(e+1,t+2);o.x=e+1,o.y=t+2,o.wx=l.x,o.wz=l.z,o.hunger=5,o.sleepNeed=5,o.job=D.Idle,o.setPath(null)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.hud.setTooltip(`(${e+2},${t+1}) Claimed · Lair · beds ${this.countOccupiedBeds()}/2`),this.hud.say(H.feasting),this.hud.say(H.bedClaim),this.hud.say(H.lairResting);const s=this.grid.tileToWorld(e+3,t+1);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,22,s.z+12),this.renderer.camera.lookAt(this.camTarget)}preparePass61Shot(){this.preparePass5bShot();const e=this.creatures.filter(i=>i.isWorker&&i.alive),t=e[2]??e[0];if(t){t.mood=38,t.hunger=55,t.sleepNeed=40,t.hp=t.maxHp*.7,this.selectCreature(t);const i=e.find(s=>s!==t&&s.job!==D.Sleep)??e[1];if(i){this.pickUp(i);const s=this.grid.tileToWorld(t.x,t.y);i.wx=s.x+1.2,i.wz=s.z+.4,i.syncMesh(this.time)}this.refreshInspector();const n=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,18,n.z+11),this.renderer.camera.lookAt(this.camTarget),this.hud.say(H.pickUp)}}preparePass61bShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job!==D.Sleep&&s.job!==D.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,this.held=null;for(const s of this.creatures)s.held=!1;this.selectCreature(i);const n=this.grid.tileToWorld(i.x,i.y);if(this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="efficiency")this.hud.sayNow(H.sluggishDig);else{const s=i.mood;this.slap(i),i.mood=s,this.refreshInspector(),e==="both"&&this.hud.sayNow(H.slap)}}preparePass61cShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(o=>o.isWorker&&o.alive),i=t.find(o=>o.job!==D.Sleep&&o.job!==D.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,i.clampStats(),this.mana=Math.max(0,this.mana),this.held=null;for(const o of this.creatures)o.held=!1;this.pickUp(i);const n=this.grid.tileToWorld(i.x,i.y);if(i.wx=n.x+.8,i.wz=n.z+.3,i.syncMesh(this.time),this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="pick"){this.hud.sayNow(H.sluggishDig),this.refreshInspector();return}const s=i.mood;this.slap(i),i.mood=s,i.clampStats(),this.refreshInspector(),this.hud.sayNow(H.slap)}preparePass5cShot(e="both"){this.preparePass5bShot();const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job===D.Sleep),n=t.find(s=>s.job===D.Eat);if(i&&(e==="both"||e==="heal")){this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0),i.pulseTint("heal",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0)}if(n&&(e==="both"||e==="feast")){this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0),n.pulseTint("feast",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0)}if(e==="heal"&&i){const s=this.grid.tileToWorld(i.x,i.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(H.lairResting)}else if(e==="feast"&&n){const s=this.grid.tileToWorld(n.x,n.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(H.feasting)}}preparePass3Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=[];for(let l=e-6;l<=e-3;l++)for(let a=t-1;a<=t+1;a++){const h=this.grid.get(l,a);!h||h.kind===A.Rock||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.mark=ke.None,h.digProgress=0,h.fortified=!1,i.push({x:l,y:a}))}for(const l of i.slice(0,2)){const a=this.grid.get(l.x,l.y);a.room=y.Treasury}for(let l=t-1;l<=t+1;l++){const a=this.grid.get(e-2,l);a&&a.kind!==A.Heart&&(a.kind=A.Dirt,a.room=y.None,a.mark=ke.None)}const n=[{x:e-1,y:t-4},{x:e,y:t-4},{x:e+1,y:t-4},{x:e-1,y:t-5}];for(const[l,a]of n.entries()){const h=this.grid.get(a.x,a.y);h&&(h.kind=A.Earth,h.fortified=!1,h.mark=ke.Dig,h.digProgress=l===1?.72:l===0?.45:l===2?.28:.12,h.room=y.None)}for(let l=t-3;l<=t-1;l++)for(let a=e-1;a<=e+1;a++){const h=this.grid.get(a,l);h&&h.kind!==A.Heart&&h.kind!==A.Rock&&(h.kind===A.Earth||h.kind===A.Gold)&&(h.kind=A.Claimed,h.claimedProgress=1,h.mark=ke.None,h.digProgress=0)}const s=this.creatures.filter(l=>l.isWorker&&l.alive);for(let l=0;l<s.length;l++){const a=s[l],h=e-1+l%3,c=t-3,d=this.grid.tileToWorld(h,c);a.x=h,a.y=c,a.wx=d.x,a.wz=d.z,a.job=D.Idle,a.jobTarget=n[Math.min(l,n.length-1)],a.workTimer=.15,a.setPath(null),a.job=D.Dig,a.selectRing&&(a.selectRing.visible=!0)}this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild();for(const[l,a]of n.entries()){const h=this.grid.get(a.x,a.y);h&&(h.kind=A.Earth,h.mark=ke.Dig,h.digProgress=l===1?.72:l===0?.48:l===2?.3:.15,h.fortified=!1)}this.rebuild();for(const l of n.slice(0,2)){const a=this.grid.tileToWorld(l.x,l.y);this.renderer.spawnDigDebris(a.x,a.z,12615744)}const o=this.grid.tileToWorld(e-2,t-2);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+5,26,o.z+16),this.renderer.camera.lookAt(this.camTarget)}preparePass62aStabShot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(let o=t-5;o<=t+2;o++)for(let l=e-4;l<=e+4;l++){const a=this.grid.get(l,o);!a||a.kind===A.Heart||a.kind===A.Rock||(a.kind===A.Earth||a.kind===A.Gold||a.kind===A.Dirt)&&(a.kind=A.Claimed,a.claimedProgress=1,a.mark=ke.None,a.digProgress=0)}const i=[];for(let o=e-5;o<=e+5;o++)i.push({x:o,y:t-6}),i.push({x:o,y:t+4});for(let o=t-5;o<=t+3;o++)i.push({x:e-5,y:o}),i.push({x:e+5,y:o});for(const o of i){const l=this.grid.get(o.x,o.y);!l||l.kind===A.Heart||l.kind===A.Rock||(l.kind=A.Earth,l.fortified=!1,l.mark=ke.Dig,l.digProgress=.15+Math.random()*.35,l.room=y.None)}for(;this.creatures.filter(o=>o.alive&&o.isWorker).length<6;)this.spawnCreature(K.Scrabbler,e+1,t+1);const n=this.creatures.filter(o=>o.alive&&o.isWorker);for(let o=0;o<n.length;o++){const l=n[o],a=i[o%i.length],h=this.grid.findPathAdjacent(e,t,a.x,a.y),c=this.grid.tileToWorld(e+o%3-1,t-1);l.wx=c.x,l.wz=c.z,l.x=e+o%3-1,l.y=t-1,l.job=D.Dig,l.jobTarget=a,l.workTimer=.1,h&&l.setPath(h),l.mood=80}this.requestStructuralRebuild(),this.rebuild(),this.renderer.setDigLoad(!0),this.hud.sayNow("Stab dig load — watch for Graphics hiccup. Should stay solid.");const s=this.grid.tileToWorld(e,t-3);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+6,28,s.z+18),this.renderer.camera.lookAt(this.camTarget)}preparePass62Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,l,a=y.None)=>{const h=this.grid.get(o,l);!h||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.room=a,h.mark=ke.None,h.digProgress=0)};for(let o=t-2;o<=t+3;o++)for(let l=e-3;l<=e+5;l++)i(l,o);if(i(e-2,t+1,y.Lair),i(e-1,t+1,y.Lair),i(e,t+1,y.Lair),i(e+1,t+1,y.Lair),i(e-2,t+2,y.Hatchery),i(e-1,t+2,y.Hatchery),i(e+2,t+1,y.Training),i(e+3,t+1,y.Training),i(e+2,t+2,y.Training),i(e+3,t+2,y.Training),i(e+4,t+1,y.Library),i(e+5,t+1,y.Library),i(e+4,t+2,y.Library),i(e+5,t+2,y.Library),i(e+4,t-1,y.Portal),i(e+5,t-1,y.Portal),this.hatcheryFood=12,this.gold=400,this.grid.tileToWorld(e+4,t),this.creatures.some(o=>o.kind===K.Skitterwing&&o.alive)||(this.spawnCreature(K.Skitterwing,e+3,t),this.attracted.skitterwing=!0),!this.creatures.some(o=>o.kind===K.Rattlekin&&o.alive)){const o=this.spawnCreature(K.Rattlekin,e+2,t+1);o.trainNeed=60,o.job=D.Train,o.jobTarget={x:e+2,y:t+1},o.workTimer=7.2,o.level=1,this.attracted.rattlekin=!0}if(this.creatures.some(o=>o.kind===K.Emberling&&o.alive)||(this.spawnCreature(K.Emberling,e+3,t+2),this.attracted.emberling=!0),!this.creatures.some(o=>o.kind===K.Gravemage&&o.alive)){const o=this.spawnCreature(K.Gravemage,e+4,t+1);o.job=D.Research,o.jobTarget={x:e+4,y:t+1},this.attracted.gravemage=!0}this.researchProgress=88,this.researchRank=0,this.healUnlocked=!1,this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("A Gravemage has entered the Underkeep."),this.hud.say(H.gravemage);const n=this.grid.tileToWorld(e+2,t+1);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+4,24,n.z+14),this.renderer.camera.lookAt(this.camTarget);const s=this.creatures.find(o=>o.alive&&o.kind===K.Rattlekin);s&&this.selectCreature(s)}preparePass63Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(d,u,f=y.None)=>{const m=this.grid.get(d,u);!m||m.kind===A.Heart||(m.kind=A.Claimed,m.claimedProgress=1,m.room=f,m.mark=ke.None,m.digProgress=0,m.door=$e.None,m.trap=gt.None,m.rally=!1,m.fortified=!1)};for(let d=t-3;d<=t+3;d++)for(let u=e-3;u<=e+5;u++)i(u,d);i(e+2,t+1,y.Training),i(e+3,t+1,y.Training),i(e+4,t+1,y.Library),i(e+5,t+1,y.Library),i(e+4,t-1,y.Portal),i(e+5,t-1,y.Portal),i(e-2,t+1,y.Lair),i(e-1,t+1,y.Lair),i(e-2,t+2,y.Hatchery),i(e+2,t+2,y.Guard),i(e+3,t+2,y.Guard);for(const[d,u]of[[e,t-2],[e+1,t-2],[e-1,t-2],[e+2,t-2]]){const f=this.grid.get(d,u);f&&f.kind!==A.Heart&&(f.kind=A.Earth,f.fortified=!0,f.room=y.None,f.door=$e.None)}i(e,t-1),i(e+1,t-1);const n=this.grid.get(e,t-1);n.door=$e.Closed;const s=this.grid.get(e+1,t-1);s.door=$e.Open,i(e,t-3),i(e+1,t-3),i(e,t-4);const o=this.grid.get(e,t-3);o.trap=gt.Sentry;const l=this.grid.get(e+2,t);i(e+2,t),l.rally=!0,this.hatcheryFood=8,this.gold=900;const a=this.spawnCreature(K.HeroKnight,e,t-4);a.job=D.Fight,a.jobTarget={...this.grid.heartPos},this.creatures.some(d=>d.kind===K.Rattlekin&&d.alive)||this.spawnCreature(K.Rattlekin,e+2,t+2),this.creatures.some(d=>d.kind===K.Emberling&&d.alive)||this.spawnCreature(K.Emberling,e+3,t+2);for(const d of this.creatures)if(!(!d.alive||d.isHero||d.isWorker)&&(d.kind===K.Rattlekin||d.kind===K.Emberling)){const u=this.grid.tileToWorld(e+2,t);d.x=e+2,d.y=t,d.wx=u.x+(d.kind===K.Emberling?.35:-.2),d.wz=u.z,d.job=D.Guard,d.jobTarget={x:e+2,y:t},d.setPath(null),d.syncMesh(this.time)}if(!this.creatures.some(d=>d.kind===K.Gravemage&&d.alive)){const d=this.spawnCreature(K.Gravemage,e+4,t+1);d.job=D.Research,d.jobTarget={x:e+4,y:t+1}}this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Doors sealed. Sentry armed. Rally flies — hold the line!"),this.hud.say(H.doorBuilt),this.hud.say(H.sentryBuilt),this.hud.say(H.rallyPlanted),this.hud.setTooltip(`(${e},${t-1}) Claimed · Door (closed)`);const h=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,22,h.z+13),this.renderer.camera.lookAt(this.camTarget);const c=this.creatures.find(d=>d.alive&&d.kind===K.Rattlekin);c&&this.selectCreature(c)}preparePass71Shot(e="both"){this.hud.hideOverlay(),this.exitPossession(!0);const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(c,d,u=y.None)=>{const f=this.grid.get(c,d);!f||f.kind===A.Heart||(f.kind=A.Claimed,f.claimedProgress=1,f.room=u,f.mark=ke.None,f.digProgress=0,f.door=$e.None,f.trap=gt.None,f.rally=!1,f.fortified=!1,f.explored=!0,f.goldAmount=0)};for(let c=i-2;c<=i+2;c++)for(let d=t-2;d<=t+3;d++)n(d,c);n(t+2,i,y.Treasury),n(t+3,i,y.Treasury),n(t+2,i+1,y.Lair),n(t+3,i+1,y.Training),n(t+2,i+2,y.Library),n(t+3,i+2,y.Portal),n(t-2,i+1,y.Hatchery),n(t-1,i+1,y.Guard);for(let c=t-1;c<=t+4;c++)n(c,i+3);for(let c=t-1;c<=t+4;c++)for(let d=i+4;d<=i+6;d++){const u=this.grid.get(c,d);!u||u.kind===A.Heart||(u.kind=A.Lava,u.room=y.None,u.goldAmount=0,u.fortified=!1,u.mark=ke.None,u.explored=!0,u.digProgress=0)}for(let c=t;c<=t+3;c++)n(c,i+7),n(c,i+8);for(const[c,d]of[[t+5,i+1],[t+5,i+2],[t+6,i+1]]){const u=this.grid.get(c,d);u&&(u.kind=A.Gold,u.goldAmount=400,u.explored=!0,u.fortified=!1,u.room=y.None)}for(const[c,d]of[[t-4,i],[t-4,i+1],[t-5,i]]){const u=this.grid.get(c,d);u&&(u.kind=A.Water,u.explored=!0,u.room=y.None,u.goldAmount=0)}n(t-3,i),n(t-3,i+1);const s=this.grid.get(t+1,i+4);s&&(s.kind=A.BridgeWood,s.explored=!0);const o=this.grid.get(t+2,i+5);o&&(o.kind=A.BridgeStone,o.explored=!0),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=gt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=e==="payday"?12:900,this.mana=80,this.healUnlocked=!0,this.wageAcc=Qr-1.2;const l=this.creatures.filter(c=>c.isWorker&&c.alive);for(;l.length<3;)l.push(this.spawnCreature(K.Scrabbler,t,i));for(let c=0;c<l.length;c++){const d=l[c],u=this.grid.tileToWorld(t-1+c%2,i);d.x=t-1+c%2,d.y=i,d.wx=u.x,d.wz=u.z,d.job=D.Idle,d.setPath(null),d.held=!1,d.mood=70}let a=this.creatures.find(c=>c.kind===K.Emberling&&c.alive);a||(a=this.spawnCreature(K.Emberling,t+1,i+3));{const c=this.grid.tileToWorld(t+1,i+3);a.x=t+1,a.y=i+3,a.wx=c.x,a.wz=c.z,a.job=D.Idle,a.setPath(null),a.mood=75}let h=this.creatures.find(c=>c.kind===K.Rattlekin&&c.alive);if(h||(h=this.spawnCreature(K.Rattlekin,t,i+1)),h.mood=70,h.goldCarried=0,this.creatures.some(c=>c.kind===K.Gravemage&&c.alive)||this.spawnCreature(K.Gravemage,t+2,i+2),this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="possess"&&(this.mana=Math.max(this.mana,Cn+10),this.enterPossession(a),setTimeout(()=>{try{this.hud.sayNow(H.possess)}catch{}},0)),(e==="lava"||e==="bridge"||e==="both")&&(this.hud.say(H.lava),this.hud.say(H.bridgeWood)),e==="payday")this.gold=8,this.wageAcc=Qr,this.payWages(.01),this.hud.sayNow(H.paydayFail),this.hud.setTooltip("Payday — empty Treasury crashes moods");else if(e==="lava"){const c=this.grid.tileToWorld(t+2,i+5);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,16,c.z+11),this.hud.setTooltip("Lava hazards · bridges · gold vein contrast")}else if(e==="bridge"){const c=this.grid.tileToWorld(t+1,i+5);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+1,14,c.z+10),this.hud.setTooltip("Wooden + stone bridges over lava")}else if(e==="possess")this.hud.setTooltip("Possession — FP follow · WASD move · Esc exits");else{const c=this.grid.tileToWorld(t+1,i+4);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,18,c.z+12),this.hud.setTooltip("Pass 7.1 — lava · bridges · possess · payday"),this.hud.sayNow("Pass 7.1 live — lava burns, bridges span, Possess rides, payday bites.")}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass72Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(a,h,c=y.None)=>{const d=this.grid.get(a,h);!d||d.kind===A.Heart||(d.kind=A.Claimed,d.claimedProgress=1,d.room=c,d.mark=ke.None,d.digProgress=0,d.door=$e.None,d.trap=gt.None,d.rally=!1,d.fortified=!1,d.explored=!0)};for(let a=i-3;a<=i+4;a++)for(let h=t-3;h<=t+5;h++)n(h,a);for(let a=t-1;a<=t+3;a++){const h=this.grid.get(a,i+5);h&&h.kind!==A.Heart&&(h.kind=A.Lava,h.room=y.None,h.explored=!0)}const s=this.grid.get(t+1,i+5);s.kind=A.BridgeWood,s.explored=!0;const o=this.grid.get(t+2,i+5);o.kind=A.BridgeStone,o.explored=!0,n(t+2,i,y.Treasury),n(t+3,i,y.Treasury),n(t+2,i+1,y.Lair),n(t+3,i+1,y.Hatchery),n(t+4,i+1,y.Training),n(t+4,i,y.Library),n(t+5,i,y.Portal),n(t-1,i+1,y.Guard),n(t+2,i+2,y.Workshop),n(t+3,i+2,y.Workshop),n(t+4,i+2,y.Workshop),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t,i-2),this.grid.get(t,i-2).trap=gt.Sentry;for(let a=t+6;a<=t+9;a++){const h=this.grid.get(a,i);h&&h.kind!==A.Heart&&(h.kind=A.Dirt,h.explored=!0,h.room=y.None)}for(let a=t+10;a<=t+14;a++)for(let h=i-1;h<=i+1;h++){const c=this.grid.get(a,h);c&&(c.explored=!1)}this.gold=e==="mission"?2480:900,this.goldEver=this.gold,this.doorKits=2,this.sentryKits=1,this.wavesCleared=e==="mission"?2:1,this.heroWaveSpawned=!1,this.heroWaveTimer=40,this.mana=80,this.hatcheryFood=6,this.workerCostScale=1;const l=this.creatures.filter(a=>a.isWorker&&a.alive);for(;l.length<4;)l.push(this.spawnCreature(K.Scrabbler,t-1,i));for(let a=0;a<Math.min(2,l.length);a++){const h=l[a],c=t+2+a,d=i+2,u=this.grid.tileToWorld(c,d);h.x=c,h.y=d,h.wx=u.x,h.wz=u.z,h.job=D.Craft,h.jobTarget={x:c,y:d},h.workTimer=3+a,h.setPath(null)}if(this.creatures.some(a=>a.kind===K.Rattlekin&&a.alive)||this.spawnCreature(K.Rattlekin,t-1,i+1),!this.creatures.some(a=>a.kind===K.Emberling&&a.alive)){const a=this.spawnCreature(K.Emberling,t+1,i+5);a.job=D.Idle}if(this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud(),e==="mission")this.hud.showOverlay("Mission Briefing",`Survive ${Jt} hero waves — OR gather ${en} gold. Heart must stand.`,"Begin"),this.hud.sayNow(H.missionBrief.replace("%w",String(Jt)).replace("%g",String(en))),this.hud.setTooltip(`Mission W${this.wavesCleared}/${Jt} · Gold ${this.gold}/${en}`);else if(e==="workshop"){this.hud.sayNow(H.workshopBuilt),this.hud.say(H.craftBusy),this.hud.setTooltip("Workshop — Scrabblers craft Door/Sentry kits");const a=this.grid.tileToWorld(t+3,i+2);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+2,16,a.z+11)}else if(e==="worker"){const a=this.workerCost();this.gold=Math.max(this.gold,a+50),this.castSpell("createWorker"),this.hud.setTooltip(`Create Scrabbler — ${a}g · cost scales`)}else if(e==="minimap"){this.hud.sayNow("Minimap — explored claim glow, Heart marker, fog beyond."),this.hud.setTooltip("Minimap · explored / claimed / Heart");const a=this.grid.tileToWorld(t+2,i+1);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,22,a.z+14)}else{this.hud.sayNow("Pass 7.2 — minimap, mission win, Workshop kits, Scrabbler polish."),this.hud.say(H.workshopBuilt),this.hud.setTooltip("Pass 7.2 — minimap · mission · Workshop · Worker");const a=this.grid.tileToWorld(t+2,i+2);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+2,18,a.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}focusCreatureById(e){try{const t=this.creatures.find(n=>n.id===e&&n.alive&&!n.isHero);if(!t)return;this.selectCreature(t);const i=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(i.x,0,i.z),this.renderer.camera.position.set(i.x+4,26,i.z+16),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector()}catch(t){console.warn("[underkeep] focusCreatureById failed",t)}}refreshRosterUi(e=!1){try{if(!e&&!this.hud.isRosterOpen())return;const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"},i=this.creatures.filter(n=>n.alive&&!n.isHero).map(n=>{const s=typeof n.job=="string"?n.job:"idle";let o=n.held?"Held":n.knockedOut?"Knocked out":s===D.AttackMove?"Attack":s===D.Pray?"Praying":s===D.DragWounded?"Hauling":s.charAt(0).toUpperCase()+s.slice(1);return n.hasTalisman&&(o+=" ✦"),{id:n.id,name:`${t[n.kind]??n.kind} Lv${n.level}`,job:o,hp:n.hp,maxHp:n.maxHp,mood:n.mood,knockedOut:n.knockedOut}});this.hud.updateRoster(i)}catch(t){console.warn("[underkeep] roster ui failed",t)}}preparePass74Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(u,f,m=y.None)=>{const v=this.grid.get(u,f);!v||v.kind===A.Heart||(v.kind=A.Claimed,v.claimedProgress=1,v.room=m,v.mark=ke.None,v.digProgress=0,v.door=$e.None,v.trap=gt.None,v.rally=!1,v.fortified=!1,v.explored=!0)};for(let u=i-3;u<=i+5;u++)for(let f=t-3;f<=t+6;f++)n(f,u);n(t-2,i+3,y.Prison),n(t-1,i+3,y.Prison),n(t,i+3,y.Torture),n(t-2,i+5,y.Graveyard),n(t-1,i+5,y.Graveyard),n(t+2,i,y.Treasury),n(t+3,i,y.Treasury);for(let u=t+2;u<=t+5;u++)for(let f=i+1;f<=i+2;f++)n(u,f,y.Lair);for(let u=t-2;u<=t;u++)n(u,i+1,y.Hatchery);n(t+4,i,y.Library),n(t+5,i,y.Library),n(t+5,i+3,y.Portal),n(t+2,i+3,y.Workshop),n(t+3,i+1,y.Training),n(t+4,i+1,y.Training),n(t+2,i+4,y.Temple),n(t+3,i+4,y.Temple),n(t+4,i+4,y.Temple),n(t+5,i+4,y.CombatPit),n(t+5,i+5,y.CombatPit),n(t+4,i+5,y.CombatPit),this.gold=1400,this.goldEver=this.gold,this.mana=80,this.hatcheryFood=8,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0;const s=this.creatures.filter(u=>u.isWorker&&u.alive);for(;s.length<3;)s.push(this.spawnCreature(K.Scrabbler,t-1,i));this.creatures.some(u=>u.kind===K.Rattlekin&&u.alive)||this.spawnCreature(K.Rattlekin,t+1,i),this.creatures.some(u=>u.kind===K.Emberling&&u.alive)||this.spawnCreature(K.Emberling,t+2,i),this.creatures.some(u=>u.kind===K.Gravemage&&u.alive)||this.spawnCreature(K.Gravemage,t+3,i),this.creatures.some(u=>u.kind===K.Thornwitch&&u.alive)||this.spawnCreature(K.Thornwitch,t+1,i+2),this.creatures.some(u=>u.kind===K.Bonewretch&&u.alive)||this.spawnCreature(K.Bonewretch,t-1,i+5);const o=this.creatures.find(u=>u.kind===K.Gravemage&&u.alive);if(o){o.x=t+3,o.y=i+4;const u=this.grid.tileToWorld(o.x,o.y);o.wx=u.x,o.wz=u.z,o.mood=42,o.job=D.Pray,o.jobTarget={x:t+3,y:i+4},o.workTimer=2.8,o.prayerBuff=12,o.setPath(null)}const l=this.creatures.find(u=>u.kind===K.Emberling&&u.alive);if(l){l.x=t+5,l.y=i+4;const u=this.grid.tileToWorld(l.x,l.y);l.wx=u.x,l.wz=u.z,l.level=4,l.trainNeed=80,l.job=D.Train,l.jobTarget={x:t+5,y:i+4},l.workTimer=11.2,l.setPath(null)}const a=this.creatures.find(u=>u.kind===K.Rattlekin&&u.alive);if(a){a.x=t+1,a.y=i+4;const u=this.grid.tileToWorld(a.x,a.y);a.wx=u.x,a.wz=u.z,a.hp=1,a.knockedOut=!0,a.job=D.Idle,a.setPath(null)}const h=s[0];if(h&&a){h.x=t+1,h.y=i+3;const u=this.grid.tileToWorld(h.x,h.y);h.wx=u.x,h.wz=u.z,h.job=D.DragWounded,h.jobTarget={x:a.x,y:a.y},h.workTimer=0;const f=this.grid.findPath(h.x,h.y,a.x,a.y);f&&h.setPath(f)}const c=this.creatures.find(u=>u.kind===K.Thornwitch&&u.alive);if(c){c.x=t,c.y=i+4;const u=this.grid.tileToWorld(c.x,c.y);c.wx=u.x,c.wz=u.z,c.hp=c.maxHp*.28,c.job=D.Flee,c.fleeTimer=3,c.jobTarget={x:t+3,y:i+1};const f=this.grid.findPath(c.x,c.y,t+3,i+1);f&&c.setPath(f)}this.requestStructuralRebuild(),this.rebuild();const d=this.grid.tileToWorld(t+3,i+4);if(this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+3,24,d.z+14),this.renderer.camera.lookAt(this.camTarget),e==="temple"){const u=this.grid.tileToWorld(t+3,i+4);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),o&&this.selectCreature(o),this.hud.setTooltip("Temple — prayer mood buff · talisman hook"),this.hud.sayNow(H.praying)}else if(e==="combatPit"){const u=this.grid.tileToWorld(t+5,i+4);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),l&&this.selectCreature(l),this.hud.setTooltip("Combat Pit — veteran leveling past 4"),this.hud.sayNow(H.combatLevelUp.replace("%n","Emberling").replace("%l","5"))}else if(e==="roster")this.refreshRosterUi(!0),this.hud.openRoster(),this.hud.sayNow("Creature roster — HP · job · mood. Click to focus.");else if(e==="flee"){const u=this.grid.tileToWorld(t+1,i+3);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Flee / drag wounded → Lair beds"),this.hud.sayNow(H.dragWounded)}else this.refreshRosterUi(!0),this.hud.openRoster(),this.hud.sayNow("Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag wounded."),this.hud.setTooltip("Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag")}preparePass73Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(d,u,f=y.None)=>{const m=this.grid.get(d,u);!m||m.kind===A.Heart||(m.kind=A.Claimed,m.claimedProgress=1,m.room=f,m.mark=ke.None,m.digProgress=0,m.door=$e.None,m.trap=gt.None,m.rally=!1,m.fortified=!1,m.explored=!0)};for(let d=i-3;d<=i+5;d++)for(let u=t-3;u<=t+6;u++)n(u,d);for(let d=t-1;d<=t+3;d++){const u=this.grid.get(d,i+6);u&&u.kind!==A.Heart&&(u.kind=A.Lava,u.room=y.None,u.explored=!0)}const s=this.grid.get(t+1,i+6);s.kind=A.BridgeWood,s.explored=!0,n(t+2,i,y.Treasury),n(t+3,i,y.Treasury);for(let d=t+2;d<=t+5;d++)for(let u=i+1;u<=i+2;u++)n(d,u,y.Lair);for(let d=t-2;d<=t;d++)n(d,i+1,y.Hatchery);for(let d=t+4;d<=t+6;d++)n(d,i,y.Library);n(t+5,i+3,y.Portal),n(t-1,i+2,y.Guard),n(t+2,i+3,y.Workshop),n(t+3,i+3,y.Workshop),n(t-2,i+3,y.Prison),n(t-1,i+3,y.Prison),n(t-2,i+4,y.Prison),n(t,i+3,y.Torture),n(t+1,i+3,y.Torture),n(t-2,i+5,y.Graveyard),n(t-1,i+5,y.Graveyard),n(t,i+5,y.Graveyard),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t,i-2),this.grid.get(t,i-2).trap=gt.Sentry,this.gold=1100,this.goldEver=this.gold,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.mana=70,this.hatcheryFood=8,this.corpses=[{x:t-1,y:i+5,timer:5,fromHero:!0},{x:t,y:i+5,timer:3,fromHero:!1}];const o=this.creatures.filter(d=>d.isWorker&&d.alive);for(;o.length<3;)o.push(this.spawnCreature(K.Scrabbler,t-1,i));for(const d of[...this.creatures])if(d.isHero){d.alive=!1;try{this.renderer.removeEntityMesh(d.mesh)}catch{}}this.creatures=this.creatures.filter(d=>d.alive);const l=this.spawnCreature(K.HeroKnight,t+1,i+4);l.knockedOut=!0,l.hp=1,l.job=D.Idle,l.setPath(null);const a=this.spawnCreature(K.HeroArcher,t-1,i+3);if(this.imprisonCreature(a,t-1,i+3),a.convertProgress=e==="torture"?72:35,a.hunger=e==="graveyard"?92:40,e==="torture"&&(this.imprisonCreature(a,t,i+3),a.convertProgress=78,!this.creatures.find(u=>u.kind===K.Thornwitch&&u.alive))){const u=this.spawnCreature(K.Thornwitch,t+1,i+3);u.mood=85}if(this.creatures.some(d=>d.kind===K.Bonewretch&&d.alive)||(e==="graveyard"||e==="both")&&this.spawnCreature(K.Bonewretch,t-2,i+5),this.creatures.some(d=>d.kind===K.Rattlekin&&d.alive)||this.spawnCreature(K.Rattlekin,t-1,i+2),e==="prison"||e==="both"){const d=o[0];this.grid.tileToWorld(t+1,i+4),d.x=t,d.y=i+4;const u=this.grid.tileToWorld(d.x,d.y);d.wx=u.x,d.wz=u.z,d.job=D.DragPrisoner,d.jobTarget={x:l.x,y:l.y},d.workTimer=0,d.setPath(this.grid.findPath(d.x,d.y,l.x,l.y))}this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud();const h=this.grid.largestContiguousRoom(y.Lair),c=Math.round(os(h)*100);if(e==="prison"){this.hud.sayNow(H.prisonBuilt),this.hud.say(H.heroKnocked),this.hud.setTooltip(`Prison — prisoners ${this.creatures.filter(u=>u.isPrisoner).length} · KO ready`);const d=this.grid.tileToWorld(t-1,i+3);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,16,d.z+11)}else if(e==="torture"){this.hud.sayNow(H.tortureBuilt),this.hud.say(H.converting),this.hud.setTooltip("Torture Chamber — converting captive → Thornwitch");const d=this.grid.tileToWorld(t,i+3);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,15,d.z+10)}else if(e==="graveyard"){this.hud.sayNow(H.graveyardBuilt),this.hud.say(H.boneRaised),this.hud.setTooltip(`Graveyard — corpses ${this.corpses.length} → Bonewretch`);const d=this.grid.tileToWorld(t-1,i+5);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,15,d.z+10)}else if(e==="efficiency"){this.hud.sayNow(H.roomSizeBonus.replace("%n",String(h)).replace("%p",String(c))),this.hud.setTooltip(`Lair size ${h} · +${c}% eff · Hatchery/Library scale too`);const d=this.grid.tileToWorld(t+3,i+1);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,18,d.z+12)}else{this.hud.sayNow("Pass 7.3 — Prison, Torture, Graveyard, room-size efficiency."),this.hud.say(H.prisonBuilt),this.hud.setTooltip(`Pass 7.3 — Prison · Torture · Graveyard · Lair size ${h} +${c}%`);const d=this.grid.tileToWorld(t-1,i+4);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,18,d.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass65Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(l,a,h=y.None)=>{const c=this.grid.get(l,a);!c||c.kind===A.Heart||(c.kind=A.Claimed,c.claimedProgress=1,c.room=h,c.mark=ke.None,c.digProgress=0,c.door=$e.None,c.trap=gt.None,c.rally=!1,c.fortified=!1,c.explored=!0)};for(let l=i-2;l<=i+2;l++)for(let a=t-2;a<=t+3;a++)n(a,l);n(t+2,i,y.Treasury),n(t+3,i,y.Treasury),n(t+2,i+1,y.Lair),n(t+3,i+1,y.Training),n(t+2,i+2,y.Library),n(t+3,i+2,y.Portal),n(t-2,i+1,y.Hatchery),n(t-1,i+1,y.Guard);for(const[l,a]of[[t-3,i],[t-3,i+1],[t-3,i-1],[t+4,i],[t+4,i+1],[t+4,i-1],[t,i+3],[t+1,i+3],[t+2,i+3],[t,i-3],[t+1,i-3]]){const h=this.grid.get(l,a);!h||h.kind===A.Heart||(h.kind=A.Earth,h.fortified=!1,h.mark=ke.None,h.room=y.None,h.goldAmount=0,h.digProgress=0,h.explored=!0)}const s=this.grid.get(t+5,i);s&&(s.kind=A.Rock,s.fortified=!1,s.mark=ke.None,s.explored=!0,s.room=y.None);for(let l=t+4;l<=t+7;l++)n(l,i-2);for(let l=0;l<this.grid.height;l++)for(let a=0;a<this.grid.width;a++){const h=this.grid.get(a,l);!(Math.abs(a-t)<=4&&Math.abs(l-i)<=3?!0:Math.abs(a-(t+5))<=2&&Math.abs(l-(i-2))<=1)&&h.kind!==A.Heart&&((h.kind===A.Claimed||h.kind===A.Dirt)&&(h.kind=A.Earth,h.claimedProgress=0,h.room=y.None),h.explored=!1,h.mark=ke.None,h.fortified=!1)}this.grid.revealFromTerritory(),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=gt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=900,this.healUnlocked=!0;const o=this.creatures.filter(l=>l.isWorker&&l.alive);for(;o.length<4;)o.push(this.spawnCreature(K.Scrabbler,t,i));for(let l=0;l<o.length;l++){const a=o[l],h=t-1+l%3,c=i+l%2,d=this.grid.tileToWorld(h,c);a.x=h,a.y=c,a.wx=d.x,a.wz=d.z,a.hunger=5,a.sleepNeed=5,a.goldCarried=0,a.job=D.Idle,a.jobTarget=null,a.setPath(null),a.held=!1}if(!this.creatures.some(l=>l.kind===K.Gravemage&&l.alive)){const l=this.spawnCreature(K.Gravemage,t+2,i+2);l.job=D.Research,l.jobTarget={x:t+2,y:i+2}}if(this.creatures.some(l=>l.kind===K.Rattlekin&&l.alive)||this.spawnCreature(K.Rattlekin,t-1,i+1),e==="fortify"||e==="both"){for(const[d,u]of[[t-3,i],[t-3,i+1],[t+4,i],[t,i+3]]){const f=this.grid.get(d,u);f&&f.kind===A.Earth&&!f.fortified&&(f.mark=ke.Fortify,f.explored=!0)}const l=this.grid.get(t+1,i+3);l&&l.kind===A.Earth&&(l.fortified=!0,l.mark=ke.None,l.explored=!0);const a=o[0],h={x:t-3,y:i},c=this.grid.tileToWorld(t-2,i);a.x=t-2,a.y=i,a.wx=c.x,a.wz=c.z,a.job=D.Fortify,a.jobTarget=h,a.workTimer=.8,a.setPath(null),this.hud.sayNow(H.autoFortify)}if((e==="fow"||e==="both")&&(this.hud.say(H.fog),this.hud.sayNow("Fog of war — unexplored earth stays dark until dig/claim.")),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="fortify"){const l=this.grid.tileToWorld(t-2,i);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+3,20,l.z+12),this.hud.setTooltip("Idle Scrabblers auto-fortify soft earth · Rock impassable")}else{const l=this.grid.tileToWorld(t+2,i-1);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+6,32,l.z+22),this.hud.setTooltip("Fog of war — explored heart vs dark unexplored")}this.renderer.camera.lookAt(this.camTarget)}preparePass64bShot(){this.hud.hideOverlay(),this.preparePass64Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(const l of this.creatures)l.alive&&(l.clampStats(),this.safeMood(l,Number.isFinite(l.mood)?Math.max(40,l.mood):72),l.hunger=Math.max(0,Math.min(40,l.hunger)),l.sleepNeed=Math.max(0,Math.min(40,l.sleepNeed)));const i=this.creatures.find(l=>l.alive&&l.isWorker);i&&(this.tool="select",this.hud.setActiveTool("select"),this.pickUp(i));const n=this.creatures.filter(l=>l.alive&&!l.isHero&&!l.isWorker&&(l.kind===K.Rattlekin||l.kind===K.Emberling));this.held&&this.dropHeldAt(e,t),this.clearSelection();for(const l of n.slice(0,3))l.selected=!0,this.selectedGroup.includes(l)||this.selectedGroup.push(l);this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0);const s=n[0];s&&this.pickUp(s),this.hud.sayNow("Hand pick + squad Attack — no blackout."),this.hud.say(H.groupSelect),this.hud.say(H.attackMove),this.refreshInspector();const o=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+3,22,o.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass64Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(d,u,f=y.None)=>{const m=this.grid.get(d,u);!m||m.kind===A.Heart||(m.kind=A.Claimed,m.claimedProgress=1,m.room=f,m.mark=ke.None,m.digProgress=0,m.door=$e.None,m.trap=gt.None,m.rally=!1,m.fortified=!1)};for(let d=t-4;d<=t+3;d++)for(let u=e-3;u<=e+5;u++)i(u,d);i(e+2,t+1,y.Training),i(e+3,t+1,y.Training),i(e+4,t+1,y.Library),i(e+5,t+1,y.Library),i(e+4,t-1,y.Portal),i(e+5,t-1,y.Portal),i(e-2,t+1,y.Lair),i(e-1,t+1,y.Lair),i(e-2,t+2,y.Hatchery),i(e+2,t+2,y.Guard),i(e+3,t+2,y.Guard);for(const[d,u]of[[e-1,t-2],[e+1,t-2],[e+2,t-2]]){const f=this.grid.get(d,u);f&&f.kind!==A.Heart&&(f.kind=A.Earth,f.fortified=!0,f.room=y.None)}i(e,t-1),i(e,t-2),i(e,t-3),i(e,t-4),this.grid.get(e,t-1).door=$e.Closed,this.grid.get(e,t-3).trap=gt.Sentry,this.grid.get(e+2,t).rally=!0,this.hatcheryFood=8,this.gold=1e3,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.heroWarn30=!0,this.heroWarn10=!0;for(const d of[...this.creatures])if(d.isHero){d.alive=!1;try{this.renderer.removeEntityMesh(d.mesh)}catch{}}this.creatures=this.creatures.filter(d=>d.alive);const n=(d,u,f)=>{const m=this.spawnCreature(d,u,f),v=this.grid.tileToWorld(u,f);return m.x=u,m.y=f,m.wx=v.x,m.wz=v.z,m.held=!1,m.stunTimer=0,m.hunger=10,m.sleepNeed=10,m.trainNeed=0,m};for(const d of[...this.creatures])if(d.alive&&(d.kind===K.Rattlekin||d.kind===K.Emberling)){d.alive=!1;try{this.renderer.removeEntityMesh(d.mesh)}catch{}}this.creatures=this.creatures.filter(d=>d.alive);const s=n(K.Rattlekin,e+1,t),o=n(K.Rattlekin,e+2,t),l=n(K.Emberling,e+3,t);if(!this.creatures.some(d=>d.kind===K.Gravemage&&d.alive)){const d=this.spawnCreature(K.Gravemage,e+4,t+1);d.job=D.Research,d.jobTarget={x:e+4,y:t+1}}const a=this.spawnCreature(K.HeroKnight,e,t-4),h=this.spawnCreature(K.HeroArcher,e+1,t-4);a.job=D.Fight,h.job=D.Fight,a.jobTarget={x:e,y:t},h.jobTarget={x:e,y:t},a.hp=Math.floor(a.maxHp*.7),h.hp=Math.floor(h.maxHp*.75),this.clearSelection(),this.selectedGroup=[s,o,l];for(const d of this.selectedGroup)d.selected=!0;this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0),this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Squad selected — attack-move into the heroes!"),this.hud.say(H.groupSelect),this.hud.say(H.attackHero),this.hud.say(H.heroEngage),this.hud.setTooltip(`(${e},${t}) Claimed · squad ${this.selectedGroup.length} attack-move`);const c=this.grid.tileToWorld(e+1,t-2);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+1.5,21,c.z+12),this.renderer.camera.lookAt(this.camTarget)}update(e){if(this.renderer.contextLost){try{this.hud.update(e)}catch{}return}try{if(Number.isFinite(this.mana)||(this.mana=0),this.mana=Math.max(0,Math.min(this.maxMana(),this.mana)),Number.isFinite(this.gold)||(this.gold=0),this.gold=Math.max(0,this.gold),this.gold>this.goldEver&&(this.goldEver=this.gold),!this.gameOver){this.time+=e;try{this.updateCamera(e)}catch(s){console.warn("[underkeep] camera",s)}try{this.regenMana(e)}catch(s){console.warn("[underkeep] mana",s)}try{this.regenHatcheryFood(e)}catch(s){console.warn("[underkeep] food",s)}try{this.assignJobs(e)}catch(s){console.warn("[underkeep] assignJobs",s)}try{this.updateMoods(e)}catch(s){console.warn("[underkeep] moods",s)}try{this.updateCreatures(e)}catch(s){console.warn("[underkeep] creatures",s)}try{this.updatePortal(e)}catch(s){console.warn("[underkeep] portal",s)}try{this.updateHeroWave(e)}catch(s){console.warn("[underkeep] heroes",s)}try{this.checkHeart()}catch(s){console.warn("[underkeep] heart",s)}try{this.payWages(e)}catch(s){console.warn("[underkeep] wages",s)}try{this.updateHazards(e)}catch(s){console.warn("[underkeep] hazards",s)}try{this.checkMissionWin()}catch(s){console.warn("[underkeep] mission",s)}if(this.saveAcc+=e,this.saveAcc>=4){this.saveAcc=0;try{this.saveNow()}catch(s){console.warn("[underkeep] save",s)}}}const t=this.grid.tiles.reduce((s,o)=>s+(o.mark===ke.Dig?1:0),0),i=this.creatures.filter(s=>s.alive&&(s.job===D.Dig||s.job===D.Mine)).length;this.renderer.setDigLoad(t>=6||i>=2),this.rebuildCooldown>0&&(this.rebuildCooldown-=e),this.pendingStructuralRebuild||this.gridDirty?this.rebuildCooldown<=0&&this.rebuild():(this.marksDirty&&!this.paint&&this.flushMarks(),this.fogDirty&&this.flushFog());for(const s of this.creatures)try{if(s.alive){s.clampStats(),s.syncMesh(this.time);try{if(s.mesh)if(s.held)s.mesh.visible=!0;else{const o=Number.isFinite(s.x)?Math.round(s.x):0,l=Number.isFinite(s.y)?Math.round(s.y):0;s.mesh.visible=this.grid.isExplored(o,l)}}catch{s.mesh&&(s.mesh.visible=!0)}}else s.mesh&&(s.mesh.visible=!1)}catch(o){console.warn("[underkeep] creature sync failed",s?.id,o)}this.renderer.update(e),this.hud.update(e),this.templePrayCount=0;for(const s of this.creatures)s.alive&&(s.prayerBuff>0&&(s.prayerBuff=Math.max(0,s.prayerBuff-e)),s.job===D.Pray&&!s.isHero&&this.templePrayCount++);if(this.rosterAcc+=e,this.rosterAcc>=.45&&(this.rosterAcc=0,this.refreshRosterUi(!1)),(this.selected||this.held)&&this.refreshInspector(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(s=>s.alive&&s.isWorker).length,this.creatures.filter(s=>s.alive&&!s.isWorker&&!s.isHero).length),this.hud.setSpellAffordable("createWorker",this.gold>=this.workerCost()),this.hud.setSpellAffordable("speed",this.mana>=io),this.hud.setSpellAffordable("lightning",this.mana>=no),this.hud.setSpellAffordable("heal",this.healUnlocked&&this.mana>=30),this.hud.setSpellAffordable("possess",this.possessed?!0:this.mana>=Cn),this.syncMissionHud(),this.minimapAcc+=e,this.minimapAcc>=.35){this.minimapAcc=0;try{this.updateMinimap()}catch{}}this.creatures=this.creatures.filter(s=>{if(!s.alive){try{this.renderer.removeEntityMesh(s.mesh)}catch{}return!1}return!0}),this.held&&!this.held.alive&&(this.held=null);const n=this.selectedGroup.length;this.selectedGroup=this.selectedGroup.filter(s=>s.alive),this.selected&&!this.selected.alive&&(this.selected=null),n!==this.selectedGroup.length?this.syncSelectionPrimary():!this.selected&&this.selectedGroup.length===0&&this.hud.hideInspector()}catch(t){throw console.error("[underkeep] update failed",t),t}}wageAcc=0;payWages(e){if(this.wageAcc+=e,this.paydayToastCooldown>0&&(this.paydayToastCooldown-=e),this.wageAcc<Qr)return;this.wageAcc=0;let t=0;const i=[];for(const n of this.creatures){if(!n.alive||n.isHero||n.isWorker)continue;const s=qo[n.kind].goldWage;s>0&&(t+=s,i.push(n))}if(!(t<=0||i.length===0))if(this.gold>=t){this.gold-=t,this.hud.say(H.payday.replace("%g",String(t)));for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)+4)}else{this.gold=0;for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)-32),n.leaveWarned=!0;this.hud.sayNow(H.paydayFail),this.paydayToastCooldown=8}}pathOptsFor(e){return{forHero:e.isHero,allowHazard:e.isHero||Ys(e.kind)||$s(e.kind)}}placeBridge(e,t,i){if(!this.grid.canPlaceBridge(e,t))return;const n=i?Bg:Og;if(this.gold<n){this.hud.say(i?"Need more gold for a stone bridge.":"Need more gold for a wooden bridge.");return}const s=this.grid.get(e,t);s&&(this.gold-=n,s.kind=i?A.BridgeStone:A.BridgeWood,s.goldAmount=0,s.digProgress=0,s.fortified=!1,s.mark=ke.None,s.room=y.None,s.explored=!0,this.requestStructuralRebuild(),this.fogDirty=!0,this.hud.say(i?H.bridgeStone:H.bridgeWood),this.mentioneOnce("bridge",H.bridgeWood),this.saveNow())}enterPossession(e){try{if(!e||!e.alive||e.isHero)return;this.possessed&&this.exitPossession(!0),e.clampStats(),e.held=!1,e.stunTimer=0,e.setPath(null),e.job=D.Idle,e.jobTarget=null,this.possessed=e,this.selectCreature(e);const t=this.renderer.camera;this.possessCamBackup={tx:this.camTarget.x,tz:this.camTarget.z,cx:t.position.x,cy:t.position.y,cz:t.position.z},this.hud.sayNow(H.possess),this.refreshInspector()}catch(t){console.warn("[underkeep] enterPossession failed",t),this.possessed=null}}exitPossession(e=!1){try{const t=this.possessed;if(this.possessed=null,this.possessArmed=!1,this.possessCamBackup){const i=this.possessCamBackup;this.camTarget.set(i.tx,0,i.tz),this.renderer.camera.position.set(i.cx,i.cy,i.cz),this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z),this.possessCamBackup=null}t&&t.alive&&(t.setPath(null),t.job=D.Idle),e||this.hud.say(H.possessEnd),this.refreshInspector()}catch(t){console.warn("[underkeep] exitPossession failed",t),this.possessed=null,this.possessCamBackup=null}}possessMoveTo(e,t){const i=this.possessed;if(!i||!i.alive){this.exitPossession(!0);return}const n=!i.isWorker||Ys(i.kind)||$s(i.kind);if(!this.grid.isWalkable(e,t,{allowHazard:n})&&this.grid.get(e,t)?.kind!==A.Heart)return;const s=this.grid.findPath(i.x,i.y,e,t,{allowHazard:!i.isWorker||Ys(i.kind)||$s(i.kind)});s&&(i.setPath(s),i.job=D.Wander,i.jobTarget={x:e,y:t})}updateHazards(e){if(this.lavaDmgAcc+=e,this.lavaDmgAcc<.45)return;const t=this.lavaDmgAcc;this.lavaDmgAcc=0;for(const i of this.creatures){if(!i.alive||i.held)continue;this.possessed;const n=this.grid.get(Math.round(i.x),Math.round(i.y));if(n)if(n.kind===A.Lava){if(Ys(i.kind)||$s(i.kind))continue;const s=8*t;if(i.takeDamage(s),i.alive){if(Math.random()<.08)try{this.renderer.spawnFx(new E(i.wx,.4,i.wz),16737826,.35)}catch{}}else{try{this.renderer.spawnFx(new E(i.wx,.6,i.wz),16729088,.7)}catch{}this.possessed===i&&this.exitPossession()}}else n.kind,A.Water}}updateCamera(e){const t=this.renderer.camera;if(this.possessed&&this.possessed.alive){const l=this.possessed,a=new E(l.wx,.35,l.wz);this.camTarget.lerp(a,Math.min(1,8*e));const h=new E(l.wx-Math.sin(l.facing)*3.2,2.55,l.wz-Math.cos(l.facing)*3.2);t.position.lerp(h,Math.min(1,6*e)),t.lookAt(l.wx,.9,l.wz);const c=Math.round(Math.sin(l.facing)),d=Math.round(Math.cos(l.facing));let u=0,f=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(u+=c,f+=d),(this.keys.has("s")||this.keys.has("arrowdown"))&&(u-=c,f-=d),(this.keys.has("a")||this.keys.has("arrowleft"))&&(u-=d,f+=c),(this.keys.has("d")||this.keys.has("arrowright"))&&(u+=d,f-=c),u!==0||f!==0){const m=Math.round(l.x)+Math.sign(u),v=Math.round(l.y)+Math.sign(f);if(l.path.length===0||l.pathIndex>=l.path.length)this.possessMoveTo(m,v);else{const g=l.path[l.path.length-1];(g.x!==m||g.y!==v)&&this.possessMoveTo(m,v)}}return}const i=18,n=new E;t.getWorldDirection(n),n.y=0,n.normalize();const s=new E().crossVectors(n,new E(0,1,0)).normalize(),o=new E;(this.keys.has("w")||this.keys.has("arrowup"))&&o.add(n),(this.keys.has("s")||this.keys.has("arrowdown"))&&o.sub(n),(this.keys.has("a")||this.keys.has("arrowleft"))&&o.sub(s),(this.keys.has("d")||this.keys.has("arrowright"))&&o.add(s),o.lengthSq()>0&&(o.normalize().multiplyScalar(i*e),t.position.add(o),this.camTarget.add(o),t.lookAt(this.camTarget.x,0,this.camTarget.z))}regenMana(e){const t=this.grid.countClaimed(),i=this.grid.countRoom(y.Temple),n=this.templePrayCount*.55+i*.12,s=2+t*.08+n,o=Number.isFinite(this.mana)?this.mana:0;this.mana=Math.max(0,Math.min(this.maxMana(),o+s*e))}regenHatcheryFood(e){const t=this.grid.countRoom(y.Hatchery);if(t<=0){this.hatcheryFood=0;return}const i=os(this.grid.largestContiguousRoom(y.Hatchery));this.foodRegenAcc+=e*(1+i);const n=2.5;for(;this.foodRegenAcc>=n;){this.foodRegenAcc-=n;const s=t*4;this.hatcheryFood<s&&(this.hatcheryFood=Math.min(s,this.hatcheryFood+t))}}assignJobs(e){const t=this.creatures.filter(a=>a.alive&&a.isWorker&&!a.held&&a.stunTimer<=0);for(const a of t){if(a.job===D.DragPrisoner||a.job===D.DragWounded)continue;const h=this.creatures.find(c=>c.alive&&c.isHero&&!c.knockedOut&&!c.isPrisoner&&Math.hypot(c.x-a.x,c.y-a.y)<5);if(h){a.job=D.Flee,a.fleeTimer=2;const c=a.x-h.x,d=a.y-h.y,u=Math.max(0,Math.min(this.grid.width-1,a.x+Math.sign(c||1)*3)),f=Math.max(0,Math.min(this.grid.height-1,a.y+Math.sign(d||1)*3));let m=null;for(let v=0;v<5&&!m;v++)for(let g=-v;g<=v&&!m;g++)for(let p=-v;p<=v&&!m;p++)this.grid.isWalkable(u+p,f+g)&&(m={x:u+p,y:f+g});m&&a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y));continue}}const i=[],n=[],s=[];for(const a of this.grid.tiles)a.mark===ke.Dig&&this.grid.isDiggable(a.x,a.y)&&i.push({x:a.x,y:a.y}),a.mark===ke.Claim&&a.kind===A.Dirt&&n.push({x:a.x,y:a.y}),a.mark===ke.Fortify&&!a.fortified&&s.push({x:a.x,y:a.y});const o=new Set;for(const a of t)a.jobTarget&&(a.job===D.Dig||a.job===D.Mine||a.job===D.Claim||a.job===D.Fortify)&&o.add(`${a.jobTarget.x},${a.jobTarget.y}`),(a.job===D.Dig||a.job===D.Mine)&&a.jobTarget&&(!this.grid.get(a.jobTarget.x,a.jobTarget.y)||this.grid.get(a.jobTarget.x,a.jobTarget.y).mark!==ke.Dig||!this.grid.isDiggable(a.jobTarget.x,a.jobTarget.y))&&(a.job=D.Idle,a.jobTarget=null,a.setPath(null));const l=t.filter(a=>a.job===D.Idle||a.job===D.Flee&&a.fleeTimer<=0);for(const a of l){a.job=D.Idle,a.jobTarget=null;let h=!1;{const u=this.grid.countRoom(y.Hatchery)>0,f=this.grid.countRoom(y.Lair)>0,m=a.hunger>(u?26:55),v=a.sleepNeed>(f?30:70)||a.hp<a.maxHp*.65;if(m&&u&&(this.hatcheryFood>0||a.hunger>50)&&this.assignEat(a)||v&&f&&this.assignSleep(a))continue}if(a.goldCarried>=40){const u=this.grid.tiles.find(g=>g.room===y.Treasury),f=u?.x??this.grid.heartPos.x,m=u?.y??this.grid.heartPos.y,v=this.grid.findPath(a.x,a.y,f,m);v&&(a.job=D.Haul,a.jobTarget={x:f,y:m},a.setPath(v),h=!0)}if(h)continue;if(this.grid.countRoom(y.Prison)>0){const u=this.creatures.find(f=>f.alive&&f.isHero&&f.knockedOut&&!f.isPrisoner&&!f.held&&!this.creatures.some(m=>m.alive&&m.isWorker&&m.job===D.DragPrisoner&&m.jobTarget&&m.jobTarget.x===f.x&&m.jobTarget.y===f.y));if(u){const f=this.grid.findPath(a.x,a.y,u.x,u.y);f&&(a.job=D.DragPrisoner,a.jobTarget={x:u.x,y:u.y},a.setPath(f),a.workTimer=0,h=!0)}}if(h)continue;if(this.grid.countRoom(y.Lair)>0){const u=this.creatures.find(f=>f.alive&&!f.isHero&&!f.isWorker&&f.knockedOut&&!f.held&&!this.creatures.some(m=>m.alive&&m.isWorker&&m.job===D.DragWounded&&(Math.floor(m.workTimer)===f.id||m.jobTarget&&m.jobTarget.x===f.x&&m.jobTarget.y===f.y)));if(u){const f=this.grid.findPath(a.x,a.y,u.x,u.y);f&&(a.job=D.DragWounded,a.jobTarget={x:u.x,y:u.y},a.setPath(f),a.workTimer=0,h=!0,this.mentioneOnce("dragWounded",H.dragWounded))}}if(h)continue;if(this.grid.countRoom(y.Workshop)>0&&(this.doorKits<tn||this.sentryKits<tn)){const u=this.findRoomTile(y.Workshop);if(u&&t.filter(m=>m.job===D.Craft).length<Math.max(1,Math.min(3,this.grid.countRoom(y.Workshop)))){const m=this.grid.findPath(a.x,a.y,u.x,u.y);m&&(a.job=D.Craft,a.jobTarget=u,a.setPath(m),a.workTimer=0,h=!0,this.mentioneOnce("craftBusy",H.craftBusy))}}if(h)continue;const c=i.map(u=>({m:u,d:Math.abs(u.x-a.x)+Math.abs(u.y-a.y)})).sort((u,f)=>u.d-f.d);for(const{m:u}of c){const f=`${u.x},${u.y}`;if(o.has(f)||!this.grid.isReachableSolid(u.x,u.y))continue;const m=this.grid.get(u.x,u.y),v=this.grid.findPathAdjacent(a.x,a.y,u.x,u.y);if(v){a.job=m.kind===A.Gold?D.Mine:D.Dig,a.jobTarget=u,a.setPath(v),a.workTimer=0,o.add(f),h=!0;break}}if(h)continue;const d=n.map(u=>({m:u,d:Math.abs(u.x-a.x)+Math.abs(u.y-a.y)})).sort((u,f)=>u.d-f.d);for(const{m:u}of d){const f=`${u.x},${u.y}`;if(o.has(f))continue;const m=this.grid.findPath(a.x,a.y,u.x,u.y);if(m){a.job=D.Claim,a.jobTarget=u,a.setPath(m),a.workTimer=0,o.add(f),h=!0;break}}if(!h){for(const u of s){const f=`${u.x},${u.y}`;if(o.has(f)||!this.grid.isReachableSolid(u.x,u.y))continue;const m=this.grid.findPathAdjacent(a.x,a.y,u.x,u.y);if(m){a.job=D.Fortify,a.jobTarget=u,a.setPath(m),a.workTimer=0,o.add(f),h=!0;break}}if(!h){let u=null,f=999;for(const m of this.grid.tiles)if(!(m.kind!==A.Claimed&&m.kind!==A.Heart))for(const v of this.grid.neighbors4(m.x,m.y)){if(v.kind!==A.Earth||v.fortified||v.mark===ke.Dig||!v.explored||!this.grid.isReachableSolid(v.x,v.y))continue;const g=`${v.x},${v.y}`;if(o.has(g))continue;const p=Math.abs(v.x-a.x)+Math.abs(v.y-a.y);p<f&&p<=16&&(f=p,u={x:v.x,y:v.y})}if(u){const m=this.grid.findPathAdjacent(a.x,a.y,u.x,u.y);if(m){const v=this.grid.get(u.x,u.y);v.mark!==ke.Fortify&&(v.mark=ke.Fortify,this.marksDirty=!0),a.job=D.Fortify,a.jobTarget=u,a.setPath(m),a.workTimer=0,o.add(`${u.x},${u.y}`),h=!0,this.mentioneOnce("autoFortify",H.autoFortify)}}}if(!h&&a.goldCarried>0){const u=this.grid.tiles.find(g=>g.room===y.Treasury),f=u?.x??this.grid.heartPos.x,m=u?.y??this.grid.heartPos.y,v=this.grid.findPath(a.x,a.y,f,m);v&&(a.job=D.Haul,a.jobTarget={x:f,y:m},a.setPath(v))}}}for(const a of t){if(a.job===D.Flee||a.held)continue;const h=this.grid.countRoom(y.Hatchery)>0,c=this.grid.countRoom(y.Lair)>0;if(a.hunger=Math.min(100,a.hunger+(h?7.5:2.8)*e),a.sleepNeed=Math.min(100,a.sleepNeed+(c?6.5:1.5)*e),a.job===D.Eat||a.job===D.Sleep)continue;const d=a.hunger>(h?26:55),u=a.sleepNeed>(c?30:70)||a.hp<a.maxHp*.65;!d&&!u||(d&&h&&(this.hatcheryFood>0||a.hunger>50)?this.assignEat(a):u&&c&&this.assignSleep(a))}for(const a of this.creatures){if(!a.alive||a.isWorker||a.isHero||a.held||a.stunTimer>0||a.knockedOut)continue;if(a.job===D.AttackMove&&a.jobTarget){const p=this.creatures.find(x=>x.alive&&x.isHero&&Math.hypot(x.x-a.x,x.y-a.y)<9);if(p)if(a.bedKey&&this.releaseBed(a),Math.hypot(a.x-p.x,a.y-p.y)>1.2){const x=this.grid.findPath(a.x,a.y,p.x,p.y);x&&a.setPath(x)}else a.setPath(null);else if(a.path.length===0){const x=a.jobTarget.x,b=a.jobTarget.y;if(a.x!==x||a.y!==b){const w=this.grid.findPath(a.x,a.y,x,b);w&&a.setPath(w)}}continue}const h=this.creatures.find(p=>p.alive&&p.isHero&&Math.hypot(p.x-a.x,p.y-a.y)<10);if(h){if(a.bedKey&&this.releaseBed(a),a.job=D.Fight,a.jobTarget={x:h.x,y:h.y},Math.hypot(a.x-h.x,a.y-h.y)>1.2){const p=this.grid.findPath(a.x,a.y,h.x,h.y);p&&a.setPath(p)}else a.setPath(null);continue}const c=this.grid.countRoom(y.Hatchery)>0,d=this.grid.countRoom(y.Lair)>0;if(a.hunger=Math.min(100,a.hunger+(c?8:4.5)*e),a.sleepNeed=Math.min(100,a.sleepNeed+(d?7:3)*e),a.trainNeed=Math.min(100,a.trainNeed+2.2*e),a.job===D.Eat||a.job===D.Sleep||a.job===D.Train||a.job===D.Research||a.job===D.Pray||a.job===D.Flee){if(a.job===D.Sleep&&a.jobTarget){const p=`${a.jobTarget.x},${a.jobTarget.y}`;a.bedKey!==p&&(a.bedKey=p),this.bedOwners.has(p)||this.bedOwners.set(p,a.id)}if(a.path.length===0&&a.jobTarget){const p=this.grid.findPath(a.x,a.y,a.jobTarget.x,a.jobTarget.y);p&&a.setPath(p)}continue}a.job===D.Fight&&(a.job=D.Idle),a.job===D.Guard&&(a.job=D.Idle);const u=a.hp<a.maxHp*.35,f=a.hp<a.maxHp*.65;if(u&&d){const p=this.findFreeOrOwnedBed(a);if(p){a.job=D.Flee,a.fleeTimer=4,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y)),this.mentioneOnce("fleeLair",H.fleeLair);continue}}if(a.hunger>(c?24:40)&&c&&this.assignEat(a)||(a.sleepNeed>(d?28:50)||f)&&d&&this.assignSleep(a))continue;const m=a.kind===K.Gravemage,v=a.kind===K.Rattlekin||a.kind===K.Emberling||a.kind===K.Thornwitch||a.kind===K.Bonewretch;if(a.mood<58&&this.grid.countRoom(y.Temple)>0){const p=this.findRoomTile(y.Temple);if(p){a.job=D.Pray,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));continue}}if(m&&this.grid.countRoom(y.Library)>0){const p=this.findRoomTile(y.Library);if(p){a.job=D.Research,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));continue}}if(v&&a.trainNeed>22&&a.level>=4&&a.level<10&&this.grid.countRoom(y.CombatPit)>0){const p=this.findRoomTile(y.CombatPit);if(p){a.job=D.Train,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));continue}}if(v&&a.trainNeed>28&&this.grid.countRoom(y.Training)>0&&a.level<4){const p=this.findRoomTile(y.Training);if(p){a.job=D.Train,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));continue}}const g=this.grid.tiles.find(p=>p.rally);if(g&&(v||a.kind===K.Skitterwing)&&a.trainNeed<=50){a.job=D.Guard,a.jobTarget={x:g.x,y:g.y},a.x!==g.x||a.y!==g.y?a.setPath(this.grid.findPath(a.x,a.y,g.x,g.y)):a.setPath(null);continue}if(v&&this.grid.countRoom(y.Guard)>0&&a.trainNeed<=35){const p=this.findRoomTile(y.Guard);if(p){a.job=D.Guard,a.jobTarget=p,a.x!==p.x||a.y!==p.y?a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y)):a.setPath(null);continue}}if(!m&&a.trainNeed>45&&a.level<4&&this.grid.countRoom(y.Training)>0){const p=this.findRoomTile(y.Training);if(p){a.job=D.Train,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));continue}}if(!m&&a.trainNeed>40&&a.level>=4&&a.level<10&&this.grid.countRoom(y.CombatPit)>0){const p=this.findRoomTile(y.CombatPit);if(p){a.job=D.Train,a.jobTarget=p,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));continue}}if((a.job===D.Idle||a.job===D.Wander&&a.path.length===0)&&Math.random()<.008){const p=this.findFreeOrOwnedBed(a);if(p)a.job=D.Wander,a.setPath(this.grid.findPath(a.x,a.y,p.x,p.y));else{const x=this.grid.tiles.filter(b=>b.kind===A.Claimed);if(x.length){const b=x[Math.floor(Math.random()*x.length)];a.job=D.Wander,a.setPath(this.grid.findPath(a.x,a.y,b.x,b.y))}}}}for(const a of this.creatures){if(!a.alive||!a.isHero||a.stunTimer>0)continue;let h=null,c=8.5;for(const d of this.creatures){if(!d.alive||d.isHero||d.isWorker||d.held)continue;const u=Math.hypot(d.x-a.x,d.y-a.y);u<c&&(c=u,h=d)}if(h)a.job=D.Fight,a.jobTarget={x:h.x,y:h.y},Math.hypot(a.x-h.x,a.y-h.y)>1.15?a.setPath(this.grid.findPath(a.x,a.y,h.x,h.y,{forHero:!0,allowHazard:!0})):a.setPath(null);else{a.job=D.Fight;const d=this.grid.heartPos.x,u=this.grid.heartPos.y;if(a.path.length===0||Math.random()<.045){const f=this.grid.findPath(a.x,a.y,d,u,{forHero:!0,allowHazard:!0});if(f)a.setPath(f);else{let m=null,v=1/0;for(const g of this.grid.tiles){if(!this.grid.isWalkable(g.x,g.y)&&g.kind!==A.Heart)continue;const p=Math.hypot(g.x-d,g.y-u),x=Math.hypot(g.x-a.x,g.y-a.y);p<v&&x<20&&(v=p,m={x:g.x,y:g.y})}m&&a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y,{forHero:!0,allowHazard:!0}))}}}}}findRoomTile(e){const t=this.grid.tiles.filter(n=>n.room===e);if(!t.length)return null;const i=t[Math.floor(Math.random()*t.length)];return{x:i.x,y:i.y}}releaseBed(e){e.bedKey&&(this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null)}findFreeOrOwnedBed(e){if(e.bedKey){const[i,n]=e.bedKey.split(",").map(Number),s=this.grid.get(i,n);if(s&&s.room===y.Lair)return{x:i,y:n};this.releaseBed(e)}const t=this.grid.tiles.filter(i=>i.room===y.Lair);for(const i of t){const n=`${i.x},${i.y}`,s=this.bedOwners.get(n);if(s===void 0||s===e.id)return{x:i.x,y:i.y}}return t.length?{x:t[0].x,y:t[0].y}:null}assignSleep(e){const t=this.findFreeOrOwnedBed(e);if(!t)return!1;const i=`${t.x},${t.y}`,n=this.bedOwners.get(i);if(n!==void 0&&n!==e.id){const s=this.grid.tiles.find(l=>{if(l.room!==y.Lair)return!1;const a=`${l.x},${l.y}`;return!this.bedOwners.has(a)});if(!s)return this.mentioneOnce("lairFull",H.lairFull),!1;const o=`${s.x},${s.y}`;return this.bedOwners.set(o,e.id),e.bedKey=o,e.job=D.Sleep,e.jobTarget={x:s.x,y:s.y},e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,s.x,s.y)),this.mentioneOnce("lairUse",H.lairUse),this.hud.say(H.bedClaim),!0}return this.bedOwners.set(i,e.id),e.bedKey=i,e.job=D.Sleep,e.jobTarget=t,e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("lairUse",H.lairUse),this.hud.say(H.bedClaim),!0}assignEat(e){this.hatcheryFood<=0&&this.grid.countRoom(y.Hatchery)>0&&this.mentioneOnce("hatcheryHungry",H.hatcheryHungry);const t=this.findRoomTile(y.Hatchery);return t?(e.job=D.Eat,e.jobTarget=t,e.eatAnnounced=!1,e.eatAnim=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("hatcheryUse",H.hatcheryUse),!0):!1}countOccupiedBeds(){let e=0;for(const t of this.creatures)!t.alive||t.job!==D.Sleep||!t.bedKey||e++;return e}spikeNeedsForRoom(e){for(const t of this.creatures)!t.alive||t.isHero||(e===y.Hatchery&&(t.hunger=Math.max(t.hunger,70)),e===y.Lair&&(t.sleepNeed=Math.max(t.sleepNeed,75),t.hp>t.maxHp*.55&&(t.hp=Math.min(t.hp,t.maxHp*.5))))}updateMoods(e){try{const t=this.grid.countRoom(y.Lair)>0,i=Math.max(1,this.grid.countRoom(y.Lair)),n=this.creatures.filter(o=>o.alive&&!o.isHero).length,s=t&&n>i+1;for(const o of this.creatures)try{if(!o.alive||o.isHero||o.held)continue;o.clampStats();let l=2*e;o.hunger>45&&(l-=10*e*((o.hunger-45)/55)),o.sleepNeed>40&&(l-=8*e*((o.sleepNeed-40)/60)),t||(l-=3.5*e),s&&(l-=4.5*e),(o.job===D.Sleep||o.job===D.Eat)&&(l+=12*e),o.job===D.Pray&&(l+=16*e),o.prayerBuff>0&&(l+=4*e),o.hasTalisman&&(l+=1.5*e),this.grid.countRoom(y.Temple)>0&&o.mood<50&&(l+=1.2*e),o.hp<o.maxHp*.4&&(l-=3*e),Number.isFinite(l)||(l=0),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+l),o.mood<14&&!o.leaveWarned?(o.leaveWarned=!0,this.hud.say(H.leaveThreat),this.mentioneOnce("moodLow",H.moodLow)):o.mood>35&&(o.leaveWarned=!1);const a=o.workEfficiency();if(o.isWorker&&a<.75&&!o.efficiencyWarned?(o.efficiencyWarned=!0,this.hud.say(H.sluggishDig)):a>=.82&&(o.efficiencyWarned=!1),o.mood<6&&!o.isWorker&&o.job===D.Idle&&Math.random()<e*.015){o.alive=!1;try{o.mesh&&(o.mesh.visible=!1)}catch{}this.held===o&&(this.held=null),o.held=!1,o.selected=!1,this.selectedGroup=this.selectedGroup.filter(h=>h!==o&&h.alive),this.selected===o&&(this.selected=null),this.pruneSelection(),this.hud.say("A minion has left the Underkeep."),this.selected?this.refreshInspector():this.hud.hideInspector()}}catch(l){console.warn("[underkeep] mood tick failed",o?.id,l)}}catch(t){console.warn("[underkeep] updateMoods failed",t)}}updateCreatures(e){for(const t of this.creatures){if(!t.alive||t.held||t.knockedOut||t.isPrisoner)continue;if(t.stunTimer>0){t.stunTimer-=e;continue}t.speedBuff>0&&(t.speedBuff-=e),t.fleeTimer>0&&(t.fleeTimer-=e),t.attackCooldown>0&&(t.attackCooldown-=e);const i=t.moveAlongPath(e,this.grid);if(t.isHero)this.triggerTrapsForHero(t);else{const n=this.grid.get(t.x,t.y);n&&n.door===$e.Closed&&(n.door=$e.Open,this.requestStructuralRebuild())}t.isWorker?this.updateWorkerJob(t,e,i):t.isHero?this.updateHeroJob(t,e):this.updateMinionJob(t,e,i)}}triggerTrapsForHero(e){const t=this.grid.get(e.x,e.y);if(!t||t.trap!==gt.Sentry)return;const i=38;e.hp-=i,e.pulseTint("feast",.55),this.renderer.spawnFx(new E(e.wx,1.1,e.wz),16755268,.55),this.renderer.spawnFx(new E(e.wx,1.4,e.wz),16737826,.4),t.trap=gt.None,this.requestStructuralRebuild(),this.hud.say(H.sentryFire),e.hp<=0&&(this.grid.countRoom(y.Prison)>0?(e.alive=!0,e.hp=1,e.knockedOut=!0,e.job=D.Idle,e.jobTarget=null,e.setPath(null),this.hud.sayNow(H.heroKnocked)):(e.alive=!1,e.mesh.visible=!1,this.spawnCorpse(e.x,e.y,!0)))}updateWorkerJob(e,t,i){if(e.job===D.Flee){(i||e.fleeTimer<=0)&&(e.job=D.Idle,e.setPath(null));return}if(e.job===D.DragPrisoner){if(!e.jobTarget){e.job=D.Idle,e.workTimer=0;return}if(e.workTimer<=0){const l=this.creatures.find(c=>c.alive&&c.isHero&&c.knockedOut&&!c.isPrisoner&&!c.held&&Math.hypot(c.x-e.jobTarget.x,c.y-e.jobTarget.y)<2.2);if(!i&&e.pathIndex<e.path.length)return;if(!l){e.job=D.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-l.x,e.y-l.y)>1.6){const c=this.grid.findPath(e.x,e.y,l.x,l.y);c?(e.setPath(c),e.jobTarget={x:l.x,y:l.y}):(e.job=D.Idle,e.jobTarget=null);return}const a=this.findRoomTile(y.Prison);if(!a){e.job=D.Idle,e.jobTarget=null;return}e.workTimer=l.id,e.jobTarget=a;const h=this.grid.findPath(e.x,e.y,a.x,a.y);h?e.setPath(h):(e.job=D.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(l=>l.id===Math.floor(e.workTimer)&&l.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=D.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;o&&this.grid.get(o.x,o.y)?.room===y.Prison&&this.imprisonCreature(s,o.x,o.y),e.workTimer=0,e.job=D.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===D.DragWounded){if(!e.jobTarget){e.job=D.Idle,e.workTimer=0;return}if(e.workTimer<=0){const l=this.creatures.find(c=>c.alive&&!c.isHero&&!c.isWorker&&c.knockedOut&&!c.held&&Math.hypot(c.x-e.jobTarget.x,c.y-e.jobTarget.y)<2.4);if(!i&&e.pathIndex<e.path.length)return;if(!l){e.job=D.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-l.x,e.y-l.y)>1.6){const c=this.grid.findPath(e.x,e.y,l.x,l.y);c?(e.setPath(c),e.jobTarget={x:l.x,y:l.y}):(e.job=D.Idle,e.jobTarget=null);return}const a=this.findFreeOrOwnedBed(l)??this.findRoomTile(y.Lair);if(!a){e.job=D.Idle,e.jobTarget=null;return}e.workTimer=l.id,e.jobTarget=a;const h=this.grid.findPath(e.x,e.y,a.x,a.y);h?e.setPath(h):(e.job=D.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(l=>l.id===Math.floor(e.workTimer)&&l.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=D.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;if(o&&this.grid.get(o.x,o.y)?.room===y.Lair){s.knockedOut=!1,s.hp=Math.max(s.hp,Math.floor(s.maxHp*.3)),s.x=o.x,s.y=o.y;const l=this.grid.tileToWorld(o.x,o.y);s.wx=l.x,s.wz=l.z,s.job=D.Sleep,s.jobTarget={x:o.x,y:o.y},s.bedKey=`${o.x},${o.y}`,this.bedOwners.set(s.bedKey,s.id),s.setPath(null),this.hud.sayNow(H.lairResting),this.renderer.spawnFx(new E(s.wx,.9,s.wz),6348944,.55)}e.workTimer=0,e.job=D.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===D.Eat||e.job===D.Sleep){this.updateMinionJob(e,t,i);return}if(!e.jobTarget)return;const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n){e.job=D.Idle;return}if(e.job===D.Dig||e.job===D.Mine){if(!i&&e.pathIndex<e.path.length)return;if(Math.abs(e.x-n.x)+Math.abs(e.y-n.y)!==1&&Math.hypot(e.x-n.x,e.y-n.y)>1.55){const a=this.grid.findPathAdjacent(e.x,e.y,n.x,n.y);a?e.setPath(a):(e.job=D.Idle,e.jobTarget=null);return}const o=this.grid.tileToWorld(n.x,n.y);e.faceToward(o.x,o.z),e.workTimer+=t;const l=.38/Math.max(.5,Math.min(1.25,e.workEfficiency()));if(e.workTimer>=l){e.workTimer=0;const a=this.grid.tileToWorld(n.x,n.y);if(this.renderer.spawnDigDebris(a.x,a.z,n.kind===A.Gold?14725184:12615744),n.kind===A.Gold){const h=Math.min(40,n.goldAmount);n.goldAmount-=h,e.goldCarried+=h,n.digProgress=Math.min(1,n.digProgress+.2*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),this.mentioneOnce("firstGold",H.firstGold),n.goldAmount<=0?(n.kind=A.Dirt,n.mark=ke.None,n.goldAmount=0,n.digProgress=0,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=D.Idle,e.jobTarget=null):e.goldCarried>=120&&(e.job=D.Idle,e.jobTarget=null,e.setPath(null))}else n.kind===A.Earth?(n.digProgress=Math.min(1,n.digProgress+.34*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),n.digProgress>=1&&(n.kind=A.Dirt,n.mark=ke.None,n.digProgress=0,n.door=$e.None,n.trap=gt.None,n.rally=!1,n.room=y.None,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=D.Idle,e.jobTarget=null,this.saveNow())):(n.mark=ke.None,n.digProgress=0,e.job=D.Idle,e.jobTarget=null,this.marksDirty=!0)}}else if(e.job===D.Claim){if(!i&&e.pathIndex<e.path.length)return;if(Math.hypot(e.x-n.x,e.y-n.y)>1.2){const s=this.grid.findPath(e.x,e.y,n.x,n.y);s?e.setPath(s):(e.job=D.Idle,e.jobTarget=null);return}if(n.kind!==A.Dirt){n.mark=ke.None,e.job=D.Idle,e.jobTarget=null,this.marksDirty=!0;return}if(e.workTimer+=t,e.workTimer>=.35){n.kind=A.Claimed,n.claimedProgress=1,n.mark=ke.None,this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=D.Idle,e.jobTarget=null;const s=this.grid.tileToWorld(n.x,n.y);this.renderer.spawnFx(new E(s.x,.3,s.z),13155496,.4),this.mentioneOnce("claim",H.claim),this.mentioneOnce("fog",H.fog),this.saveNow()}}else if(e.job===D.Fortify){if(Math.hypot(e.x-n.x,e.y-n.y)>1.6)return;e.workTimer+=t,e.workTimer>=1.5&&(n.fortified=!0,n.mark=ke.None,this.requestStructuralRebuild(),e.job=D.Idle,e.jobTarget=null)}else if(e.job===D.Haul){if(!i)return;e.goldCarried>0&&(this.gold+=e.goldCarried,this.renderer.spawnFx(new E(e.wx,.6,e.wz),16764992,.55),this.mentioneOnce("firstGold",H.firstGold)),e.goldCarried=0,e.job=D.Idle,e.jobTarget=null}}updateMinionJob(e,t,i){if(e.job===D.Eat){if(!i&&e.pathIndex<e.path.length)return;e.eatAnnounced||(e.eatAnnounced=!0,this.hud.say(H.feasting),this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!0),e.pulseTint("feast",1.4)),this.hatcheryFood>0?(this.hatcheryFood=Math.max(0,this.hatcheryFood-1.8*t),e.hunger=Math.max(0,e.hunger-70*t),Math.random()<t*5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!1),e.pulseTint("feast",.7))):e.hunger=Math.max(0,e.hunger-12*t),e.hunger<5&&(e.job=D.Idle,e.jobTarget=null,e.eatAnnounced=!1)}else if(e.job===D.Sleep){if(!i&&e.pathIndex<e.path.length)return;if(e.jobTarget){const o=`${e.jobTarget.x},${e.jobTarget.y}`;e.bedKey=o,this.bedOwners.set(o,e.id)}const n=os(this.grid.largestContiguousRoom(y.Lair));e.sleepNeed=Math.max(0,e.sleepNeed-40*t*(1+n*.5));const s=e.hp;e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+12*t*(1+n))),e.hp>s&&(e.restHealAcc+=t,Math.random()<t*4.5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!1),e.pulseTint("heal",.75)),e.restHealAcc>=1.6&&(e.restHealAcc=0,this.hud.say(H.lairResting),this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!0),e.pulseTint("heal",1.5))),e.sleepNeed<5&&e.hp>=e.maxHp*.95&&(e.job=D.Idle,e.jobTarget=null)}else if(e.job===D.Craft){if(!e.jobTarget){e.job=D.Idle;return}const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n||n.room!==y.Workshop){e.job=D.Idle,e.jobTarget=null;return}if(!i){if(e.path.length===0){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s)}return}if(e.setPath(null),e.workTimer+=t*e.workEfficiency(),Math.random()<t*.5&&this.renderer.spawnFx(new E(e.wx,.7,e.wz),16755268,.3),e.workTimer>=6){e.workTimer=0;let s=null;this.nextKitIsDoor&&this.doorKits<tn?(this.doorKits++,s="door"):this.sentryKits<tn?(this.sentryKits++,s="sentry"):this.doorKits<tn&&(this.doorKits++,s="door"),this.nextKitIsDoor=!this.nextKitIsDoor,s&&(this.hud.sayNow(H.craftKit.replace("%k",s==="door"?"Door":"Sentry")),this.renderer.spawnFx(new E(e.wx,1.1,e.wz),16765040,.75)),this.doorKits>=tn&&this.sentryKits>=tn&&(e.job=D.Idle,e.jobTarget=null)}}else if(e.job===D.Research&&i){const n=os(this.grid.largestContiguousRoom(y.Library));this.researchProgress=Math.min(100,this.researchProgress+12*t*(1+n)),e.workTimer+=t,Math.random()<t*.35&&this.renderer.spawnFx(new E(e.wx,.9,e.wz),8939263,.35),this.researchProgress>=100&&(this.researchProgress=0,this.researchRank=Math.min(3,this.researchRank+1),this.researchRank>=1&&!this.healUnlocked?(this.healUnlocked=!0,this.hud.sayNow(H.researchHeal)):this.hud.sayNow(H.researchDone.replace("%r",String(this.researchRank))),this.renderer.spawnFx(new E(e.wx,1.2,e.wz),11176191,.8))}else if(e.job===D.Guard){if(!e.jobTarget){e.job=D.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null);return}else if(e.job===D.Train&&i){e.trainNeed=Math.max(0,e.trainNeed-30*t),e.workTimer+=t;const s=this.grid.get(e.x,e.y)?.room===y.CombatPit,l={rattlekin:"Rattlekin",emberling:"Emberling",skitterwing:"Skitterwing",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e.kind]??"Minion";!s&&e.workTimer>8&&e.level<4&&(e.level++,e.maxHp+=15,e.hp=e.maxHp,e.damage+=3,e.workTimer=0,this.renderer.spawnFx(new E(e.wx,1,e.wz),16755268,.6),this.hud.sayNow(`${l} reaches training level ${e.level}!`)),s&&e.workTimer>12&&e.level>=4&&e.level<10&&(e.level++,e.maxHp+=18,e.hp=e.maxHp,e.damage+=4,e.workTimer=0,this.renderer.spawnFx(new E(e.wx,1.15,e.wz),16736320,.75),this.renderer.spawnFx(new E(e.wx,.7,e.wz),16755302,.45),this.hud.sayNow(H.combatLevelUp.replace("%n",l).replace("%l",String(e.level)))),(!s&&e.level>=4&&this.grid.countRoom(y.CombatPit)>0||e.trainNeed<5||s&&e.level>=10)&&(e.job=D.Idle,e.jobTarget=null)}else if(e.job===D.Pray){if(!e.jobTarget){e.job=D.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s);return}const n=this.grid.get(e.x,e.y);if(!n||n.room!==y.Temple){e.job=D.Idle,e.jobTarget=null;return}e.setPath(null),e.workTimer+=t,this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+18*t),Math.random()<t*.4&&this.renderer.spawnFx(new E(e.wx,1,e.wz),16769152,.35),e.workTimer>=3.5&&(e.prayerBuff=Math.max(e.prayerBuff,28),e.workTimer=0,this.mentioneOnce("prayerBuff",H.prayerBuff),this.renderer.spawnFx(new E(e.wx,1.3,e.wz),16765024,.7),!e.hasTalisman&&e.mood>70&&Math.random()<.35?(e.hasTalisman=!0,this.safeMood(e,Math.min(100,e.mood+8)),this.hud.sayNow(H.talismanGift),this.renderer.spawnFx(new E(e.wx,1.5,e.wz),16773280,.9)):this.mentioneOnce("praying",H.praying)),e.mood>=88&&e.prayerBuff>10&&(e.job=D.Idle,e.jobTarget=null)}else e.job===D.Flee?(i||e.fleeTimer<=0)&&(e.jobTarget&&this.grid.get(e.jobTarget.x,e.jobTarget.y)?.room===y.Lair?this.assignSleep(e):(e.job=D.Idle,e.setPath(null))):e.job===D.AttackMove?(this.doCombat(e,t),i&&e.jobTarget&&e.x===e.jobTarget.x&&e.y===e.jobTarget.y&&(this.creatures.some(s=>s.alive&&s.isHero&&Math.hypot(s.x-e.x,s.y-e.y)<12)||(e.job=D.Guard))):e.job===D.Fight?this.doCombat(e,t):e.job===D.Wander&&i&&(e.job=D.Idle)}updateHeroJob(e,t){const i=this.grid.heartPos.x,n=this.grid.heartPos.y;Math.hypot(e.x-i,e.y-n)<=1.5&&e.attackCooldown<=0&&(e.attackCooldown=1.2,this.heartHp-=e.damage,this.renderer.spawnFx(new E(this.grid.tileToWorld(i,n).x,1,this.grid.tileToWorld(i,n).z),16719936,.4),this.mentioneOnce("heartHurt",H.heartHurt)),this.doCombat(e,t)}heartHp=500;doCombat(e,t){try{const i=e.isHero?1.65:1.55,n=this.creatures.filter(f=>f.alive&&f!==e&&f.isHero!==e.isHero&&!f.isWorker&&!f.knockedOut&&!f.isPrisoner&&Math.hypot(f.x-e.x,f.y-e.y)<i),s=e.isHero?this.creatures.filter(f=>f.alive&&f.isWorker&&Math.hypot(f.x-e.x,f.y-e.y)<1.35):[],o=n.length?n:s;if(!o.length||(!this.heroEngageAnnounced&&(e.isHero||o.some(f=>f.isHero))&&(this.heroEngageAnnounced=!0,this.hud.say(H.heroEngage)),e.attackCooldown>0))return;const l=e.isHero?1:1+(e.level-1)*.12,a=!e.isHero&&e.prayerBuff>0?1.08:1,h=!e.isHero&&e.hasTalisman?1.05:1;e.attackCooldown=e.isHero?.85:.78;const c=o[0],d=c.alive,u=e.damage*(.95+Math.random()*.25)*l*a*h;c.takeDamage(u),this.renderer.spawnFx(new E(c.wx,.85,c.wz),e.isHero?8956671:16728128,.32),this.renderer.spawnFx(new E(c.wx,1.15,c.wz),16768426,.18),d&&!c.alive&&(c.isHero&&this.grid.countRoom(y.Prison)>0?(c.alive=!0,c.hp=1,c.knockedOut=!0,c.isPrisoner=!1,c.convertProgress=0,c.job=D.Idle,c.jobTarget=null,c.setPath(null),c.attackCooldown=0,this.hud.sayNow(H.heroKnocked),this.renderer.spawnFx(new E(c.wx,1.2,c.wz),10535167,.7)):!c.isHero&&!c.isWorker&&this.grid.countRoom(y.Lair)>0?(c.alive=!0,c.hp=1,c.knockedOut=!0,c.job=D.Idle,c.jobTarget=null,c.setPath(null),c.attackCooldown=0,this.hud.sayNow(H.allyKnocked),this.renderer.spawnFx(new E(c.wx,1.1,c.wz),16746592,.65)):(this.spawnCorpse(c.x,c.y,c.isHero),c.isHero&&(this.hud.sayNow(H.heroDown),this.renderer.spawnFx(new E(c.wx,1.2,c.wz),16772744,.7))))}catch(i){console.warn("[underkeep] doCombat failed",i)}}announceSpecies(e,t){const n={skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e]??"minion";this.hud.sayNow(`A ${n} has entered the Underkeep.`),this.hud.say(t)}updatePortal(e){if(this.portalCooldown-=e,this.portalCooldown>0)return;const t=this.grid.countRoom(y.Portal);if(t<=0)return;const i=this.grid.countRoom(y.Lair),n=this.grid.countRoom(y.Hatchery),s=this.grid.countRoom(y.Training),o=this.grid.countRoom(y.Library),l=this.grid.countRoom(y.Treasury),a=this.grid.countClaimed(),h=this.grid.tiles.find(u=>u.room===y.Portal);if(!h)return;let c=h.x,d=h.y;for(const u of this.grid.neighbors4(h.x,h.y))if(this.grid.isWalkable(u.x,u.y)){c=u.x,d=u.y;break}if(!this.attracted.skitterwing&&a>=16&&t>=1){this.spawnCreature(K.Skitterwing,c,d),this.attracted.skitterwing=!0,this.portalCooldown=8,this.announceSpecies(K.Skitterwing,H.skitterwing);return}if(!this.attracted.rattlekin&&i>=4&&n>=2){this.spawnCreature(K.Rattlekin,c,d),this.attracted.rattlekin=!0,this.portalCooldown=10,this.announceSpecies(K.Rattlekin,H.rattlekin);return}if(!this.attracted.emberling&&s>=4&&i>=6&&this.gold>=200){this.spawnCreature(K.Emberling,c,d),this.attracted.emberling=!0,this.portalCooldown=12,this.announceSpecies(K.Emberling,H.emberling);return}if(!this.attracted.gravemage&&o>=4&&i>=4){this.spawnCreature(K.Gravemage,c,d),this.attracted.gravemage=!0,this.portalCooldown=12,this.announceSpecies(K.Gravemage,H.gravemage);return}if(this.attracted.rattlekin&&i>=4&&n>=2&&Math.random()<.12&&this.creatures.filter(f=>f.alive&&f.kind===K.Rattlekin).length<4){this.spawnCreature(K.Rattlekin,c,d),this.portalCooldown=22,this.hud.sayNow("A Rattlekin has entered the Underkeep.");return}if(this.attracted.gravemage&&o>=4&&Math.random()<.1&&this.creatures.filter(f=>f.alive&&f.kind===K.Gravemage).length<2){this.spawnCreature(K.Gravemage,c,d),this.portalCooldown=28,this.hud.sayNow("A Gravemage has entered the Underkeep.");return}this.attracted.emberling&&s>=4&&l>=2&&Math.random()<.08&&this.creatures.filter(f=>f.alive&&f.kind===K.Emberling).length<2&&(this.spawnCreature(K.Emberling,c,d),this.portalCooldown=30,this.hud.sayNow("An Emberling has entered the Underkeep."))}spawnCorpse(e,t,i){this.corpses.push({x:e,y:t,timer:0,fromHero:i}),this.corpses.length>24&&this.corpses.shift()}imprisonCreature(e,t,i){e.knockedOut=!1,e.isPrisoner=!0,e.convertProgress=Math.max(0,e.convertProgress),e.hp=Math.max(1,Math.min(e.maxHp,e.hp)),e.alive=!0,e.held=!1,e.job=D.Idle,e.jobTarget=null,e.setPath(null),e.x=t,e.y=i;const n=this.grid.tileToWorld(t,i);e.wx=n.x,e.wz=n.z,e.hunger=Math.max(e.hunger,20),this.hud.sayNow(H.prisonerHeld),this.renderer.spawnFx(new E(e.wx,1,e.wz),8425640,.55)}convertPrisoner(e){const t=e.x,i=e.y;e.alive=!1;try{this.renderer.removeEntityMesh(e.mesh)}catch{}const n=Math.random()<.7?K.Thornwitch:K.Rattlekin,s=this.spawnCreature(n,t,i);s.mood=80,s.hunger=15,this.hud.sayNow(H.converted),this.renderer.spawnFx(new E(s.wx,1.2,s.wz),16728160,.8),this.announceSpecies(n,H.converted)}raiseBonewretch(e,t,i){const n=this.findRoomTile(y.Graveyard),s=n?.x??e,o=n?.y??t,l=this.spawnCreature(K.Bonewretch,s,o);l.mood=90,l.hunger=0,l.sleepNeed=0,this.hud.sayNow(i),this.renderer.spawnFx(new E(l.wx,1.1,l.wz),8453984,.75)}updatePrisonEconomy(e){const t=this.grid.countRoom(y.Prison)>0,i=this.grid.countRoom(y.Torture)>0,n=this.grid.countRoom(y.Graveyard)>0;for(const s of this.creatures)!s.alive||!s.isHero||s.held||s.knockedOut&&!s.isPrisoner&&this.grid.get(s.x,s.y)?.room===y.Prison&&this.imprisonCreature(s,s.x,s.y);for(const s of this.creatures){if(!s.alive||!s.isPrisoner)continue;s.hunger=Math.min(100,s.hunger+6*e);const o=this.grid.get(s.x,s.y)?.room===y.Torture;if(!(this.grid.get(s.x,s.y)?.room===y.Prison)&&!o&&t){const a=this.findRoomTile(y.Prison);if(a){s.x=a.x,s.y=a.y;const h=this.grid.tileToWorld(a.x,a.y);s.wx=h.x,s.wz=h.z}}if(i){const a=o?9:4.5,h=s.convertProgress;if(s.convertProgress=Math.min(100,s.convertProgress+a*e),h<40&&s.convertProgress>=40&&this.hud.say(H.converting),s.convertProgress>=100){this.convertPrisoner(s);continue}}if(s.hunger>=100){const a=s.x,h=s.y;s.alive=!1;try{this.renderer.removeEntityMesh(s.mesh)}catch{}n?this.raiseBonewretch(a,h,H.starvedBones):(this.spawnCorpse(a,h,!0),this.hud.sayNow(H.starvedBones))}}if(n&&this.corpses.length){const s=[];for(const o of this.corpses){const l=this.grid.get(o.x,o.y)?.room===y.Graveyard;o.timer+=e*(l?1.6:1),o.timer>=8?this.raiseBonewretch(o.x,o.y,H.boneRaised):s.push(o)}this.corpses=s}else n||(this.corpses=this.corpses.filter(s=>(s.timer+=e*.25,s.timer<40)))}updateHeroWave(e){if(this.heroWaveSpawned){if(!this.won&&!this.gameOver&&!this.creatures.some(u=>u.alive&&u.isHero&&!u.knockedOut&&!u.isPrisoner)&&this.time>2){if(this.wavesCleared=Math.min(Jt,this.wavesCleared+1),this.heroWaveSpawned=!1,this.wavesCleared>=Jt){this.checkMissionWin();return}this.heroWaveTimer=50+this.wavesCleared*8,this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1;const u=this.wavesCleared+1;this.hud.sayNow(H.waveCleared.replace("%n",String(this.wavesCleared)).replace("%next",String(u)).replace("%w",String(Jt))),this.hud.say(H.win)}return}if(this.heroWaveTimer-=e,!this.heroWarn30&&this.heroWaveTimer<=30&&this.heroWaveTimer>10&&(this.heroWarn30=!0,this.hud.sayNow(H.heroesSoon)),!this.heroWarn10&&this.heroWaveTimer<=10&&this.heroWaveTimer>0&&(this.heroWarn10=!0,this.hud.sayNow(H.heroesImminent)),this.heroWaveTimer>0)return;this.heroWaveSpawned=!0;const t=this.wavesCleared+1;this.hud.sayNow(`${H.heroes} (Wave ${t}/${Jt})`),this.hud.say(H.heroes);const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=2,o=i;for(let d=2;d<Math.min(n-1,this.grid.height/2);d++)if(this.grid.isWalkable(i,d)){s=d,o=i;break}for(let d=s;d<=Math.min(s+4,n-2);d++)for(let u=i-1;u<=i+1;u++){const f=this.grid.get(u,d);!f||f.kind===A.Heart||f.kind===A.Rock||(f.kind===A.Earth||f.kind===A.Gold||f.kind===A.Wall)&&(f.kind=A.Dirt,f.fortified=!1,f.digProgress=0,this.gridDirty=!0)}if(!this.grid.isWalkable(o,s)){const d=this.grid.get(o,s);d&&d.kind!==A.Rock&&d.kind!==A.Heart&&(d.kind=A.Dirt,this.gridDirty=!0)}this.requestStructuralRebuild();const l=this.spawnCreature(K.HeroKnight,o,s),a=this.spawnCreature(K.HeroKnight,o+1,s),h=this.spawnCreature(K.HeroArcher,o-1,s),c=1.05+this.wavesCleared*.12;for(const d of[l,a,h]){d.job=D.Fight,d.jobTarget={...this.grid.heartPos},d.hp=Math.floor(d.maxHp*c),d.maxHp=d.hp;const u=this.grid.tileToWorld(d.x,d.y);this.renderer.spawnFx(new E(u.x,1.2,u.z),10535167,.65)}if(this.grid.countClaimed()>=40){const d=this.spawnCreature(K.HeroKnight,o,s+1);d.job=D.Fight,d.jobTarget={...this.grid.heartPos},this.renderer.spawnFx(new E(d.wx,1.2,d.wz),10535167,.5)}}checkHeart(){this.heartHp<=0&&!this.gameOver&&(this.gameOver=!0,this.hud.say(H.lose),this.hud.showOverlay("Defeat",H.lose,"Try Again"))}render(){this.renderer.render()}}const N0=document.getElementById("game-canvas");function U0(r){const e=document.getElementById("overlay"),t=document.getElementById("overlay-title"),i=document.getElementById("overlay-msg"),n=document.getElementById("overlay-btn"),s=document.getElementById("overlay-btn-secondary");if(!e||!t||!i||!n)return;t.textContent="Underkeep",i.textContent=r,n.textContent="New Game",s?.classList.add("hidden"),e.classList.remove("hidden");const o=()=>{Gi(),location.reload()};n.onclick=o,document.getElementById("btn-new-game")?.addEventListener("click",o,{once:!0})}let Vi=null;try{Vi=new I0(N0)}catch(r){console.error("[underkeep] fatal boot error — clearing save",r),Gi(),document.body.classList.remove("booting"),U0("Something went wrong loading your dungeon. Your save was cleared. Tap New Game to begin again.")}window.__underkeep=Vi;let Ql=performance.now(),as=0;function Wh(r){const e=Math.min(.05,(r-Ql)/1e3);if(Ql=r,Vi)try{Vi.update(e),Vi.render(),as=0}catch(t){as++,console.error("[underkeep] frame error",t);const i=Vi;i.renderer?.contextLost?(i.handleContextLost?.(),as=0):as>=8&&(console.warn("[underkeep] many frame errors — continuing without overlay"),as=0)}requestAnimationFrame(Wh)}requestAnimationFrame(Wh);const de=new URLSearchParams(location.search);Vi&&(de.get("shot")==="1"||de.get("shot")==="4"||de.get("shot")==="5b"||de.get("shot")==="5c"||de.get("shot")==="5c-heal"||de.get("shot")==="5c-feast"||de.get("shot")==="6.1"||de.get("shot")==="61"||de.get("shot")==="6.1b"||de.get("shot")==="61b"||de.get("shot")==="6.1b-slap"||de.get("shot")==="6.1b-eff"||de.get("shot")==="6.1c"||de.get("shot")==="61c"||de.get("shot")==="6.1c-pick"||de.get("shot")==="6.1c-slap"||de.get("shot")==="6.2a"||de.get("shot")==="62a"||de.get("shot")==="6.2"||de.get("shot")==="62"||de.get("shot")==="6.3"||de.get("shot")==="63"||de.get("shot")==="6.4"||de.get("shot")==="64"||de.get("shot")==="6.4b"||de.get("shot")==="64b"||de.get("shot")==="6.5"||de.get("shot")==="65"||de.get("shot")==="6.5-fow"||de.get("shot")==="6.5-fortify"||de.get("shot")==="7.1"||de.get("shot")==="71"||de.get("shot")==="7.1-lava"||de.get("shot")==="71-lava"||de.get("shot")==="7.1-bridge"||de.get("shot")==="71-bridge"||de.get("shot")==="7.1-possess"||de.get("shot")==="71-possess"||de.get("shot")==="7.1-payday"||de.get("shot")==="71-payday"||de.get("shot")==="7.2"||de.get("shot")==="72"||de.get("shot")==="7.2-minimap"||de.get("shot")==="72-minimap"||de.get("shot")==="7.2-mission"||de.get("shot")==="72-mission"||de.get("shot")==="7.2-workshop"||de.get("shot")==="72-workshop"||de.get("shot")==="7.2-worker"||de.get("shot")==="72-worker"||de.get("shot")==="7.3"||de.get("shot")==="73"||de.get("shot")==="7.3-prison"||de.get("shot")==="73-prison"||de.get("shot")==="7.3-torture"||de.get("shot")==="73-torture"||de.get("shot")==="7.3-graveyard"||de.get("shot")==="73-graveyard"||de.get("shot")==="7.3-efficiency"||de.get("shot")==="73-efficiency"||de.get("shot")==="7.4"||de.get("shot")==="74"||de.get("shot")==="7.4-temple"||de.get("shot")==="74-temple"||de.get("shot")==="7.4-combat"||de.get("shot")==="74-combat"||de.get("shot")==="7.4-roster"||de.get("shot")==="74-roster"||de.get("shot")==="7.4-flee"||de.get("shot")==="74-flee")&&setTimeout(()=>{const r=Vi;r.hud.hideOverlay();const e=de.get("shot");e==="7.4-temple"||e==="74-temple"?r.preparePass74Shot?.("temple"):e==="7.4-combat"||e==="74-combat"?r.preparePass74Shot?.("combatPit"):e==="7.4-roster"||e==="74-roster"?r.preparePass74Shot?.("roster"):e==="7.4-flee"||e==="74-flee"?r.preparePass74Shot?.("flee"):e==="7.4"||e==="74"?r.preparePass74Shot?.("both"):e==="7.3-prison"||e==="73-prison"?r.preparePass73Shot?.("prison"):e==="7.3-torture"||e==="73-torture"?r.preparePass73Shot?.("torture"):e==="7.3-graveyard"||e==="73-graveyard"?r.preparePass73Shot?.("graveyard"):e==="7.3-efficiency"||e==="73-efficiency"?r.preparePass73Shot?.("efficiency"):e==="7.3"||e==="73"?r.preparePass73Shot?.("both"):e==="7.2-minimap"||e==="72-minimap"?r.preparePass72Shot?.("minimap"):e==="7.2-mission"||e==="72-mission"?r.preparePass72Shot?.("mission"):e==="7.2-workshop"||e==="72-workshop"?r.preparePass72Shot?.("workshop"):e==="7.2-worker"||e==="72-worker"?r.preparePass72Shot?.("worker"):e==="7.2"||e==="72"?r.preparePass72Shot?.("both"):e==="7.1-lava"||e==="71-lava"?r.preparePass71Shot?.("lava"):e==="7.1-bridge"||e==="71-bridge"?r.preparePass71Shot?.("bridge"):e==="7.1-possess"||e==="71-possess"?r.preparePass71Shot?.("possess"):e==="7.1-payday"||e==="71-payday"?r.preparePass71Shot?.("payday"):e==="7.1"||e==="71"?r.preparePass71Shot?.("both"):e==="6.5-fortify"?r.preparePass65Shot?.("fortify"):e==="6.5-fow"?r.preparePass65Shot?.("fow"):e==="6.5"||e==="65"?r.preparePass65Shot?.("both"):e==="6.4b"||e==="64b"?r.preparePass64bShot?.():e==="6.4"||e==="64"?r.preparePass64Shot?.():e==="6.3"||e==="63"?r.preparePass63Shot?.():e==="6.2a"||e==="62a"?r.preparePass62aStabShot?.():e==="6.2"||e==="62"?r.preparePass62Shot?.():e==="6.1c-slap"?r.preparePass61cShot?.("slap"):e==="6.1c-pick"?r.preparePass61cShot?.("pick"):e==="6.1c"||e==="61c"?r.preparePass61cShot?.("both"):e==="6.1b-slap"?r.preparePass61bShot?.("slap"):e==="6.1b-eff"?r.preparePass61bShot?.("efficiency"):e==="6.1b"||e==="61b"?r.preparePass61bShot?.("both"):e==="6.1"||e==="61"?r.preparePass61Shot?.():e==="5c-heal"?r.preparePass5cShot?.("heal"):e==="5c-feast"?r.preparePass5cShot?.("feast"):e==="5c"||e==="5b"?r.preparePass5cShot?r.preparePass5cShot("both"):r.preparePass5bShot?.():e==="4"||!r.preparePass3Shot?r.preparePass4Shot?.():de.get("pass")==="3"?r.preparePass3Shot?.():r.preparePass4Shot?.()},400);
