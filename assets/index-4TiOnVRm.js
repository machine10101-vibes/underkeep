(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="170",jh=0,Ea=1,qh=2,Yh=0,Ql=1,$h=2,bi=3,ji=0,Bt=1,jt=2,Ai=0,In=1,so=2,Aa=3,Ca=4,Kh=5,rn=100,Zh=101,Jh=102,Qh=103,ec=104,tc=200,ic=201,nc=202,sc=203,ro=204,oo=205,rc=206,oc=207,ac=208,lc=209,hc=210,cc=211,dc=212,uc=213,fc=214,ao=0,lo=1,ho=2,Fn=3,co=4,uo=5,fo=6,po=7,eh=0,pc=1,mc=2,Xi=0,gc=1,vc=2,xc=3,th=4,yc=5,_c=6,Mc=7,ih=300,On=301,Bn=302,mo=303,go=304,cr=306,nr=1e3,an=1001,vo=1002,qt=1003,wc=1004,_s=1005,li=1006,vr=1007,Wi=1008,Li=1009,nh=1010,sh=1011,fs=1012,Ko=1013,hn=1014,fi=1015,Ci=1016,Zo=1017,Jo=1018,zn=1020,rh=35902,oh=1021,ah=1022,hi=1023,lh=1024,hh=1025,kn=1026,Hn=1027,Qo=1028,ea=1029,ch=1030,ta=1031,ia=1033,Ks=33776,Zs=33777,Js=33778,Qs=33779,xo=35840,yo=35841,_o=35842,Mo=35843,wo=36196,So=37492,bo=37496,To=37808,Eo=37809,Ao=37810,Co=37811,Po=37812,Ro=37813,Lo=37814,Do=37815,Io=37816,ko=37817,No=37818,Uo=37819,Fo=37820,Oo=37821,er=36492,Bo=36494,zo=36495,dh=36283,Ho=36284,Go=36285,Wo=36286,Sc=3200,bc=3201,uh=0,Tc=1,Ti="",Ut="srgb",Vn="srgb-linear",dr="linear",lt="srgb",fn=7680,Pa=519,Ec=512,Ac=513,Cc=514,fh=515,Pc=516,Rc=517,Lc=518,Dc=519,Ra=35044,Ic=35048,La="300 es",Ei=2e3,sr=2001;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Da=1234567;const Nn=Math.PI/180,ps=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function na(r,e){return(r%e+e)%e}function kc(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Nc(r,e,t){return r!==e?(t-r)/(e-r):0}function cs(r,e,t){return(1-t)*r+t*e}function Uc(r,e,t,i){return cs(r,e,1-Math.exp(-t*i))}function Fc(r,e=1){return e-Math.abs(na(r,e*2)-e)}function Oc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Bc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function zc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Hc(r,e){return r+Math.random()*(e-r)}function Gc(r){return r*(.5-Math.random())}function Wc(r){r!==void 0&&(Da=r);let e=Da+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vc(r){return r*Nn}function Xc(r){return r*ps}function jc(r){return(r&r-1)===0&&r!==0}function qc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $c(r,e,t,i,n){const s=Math.cos,o=Math.sin,l=s(t/2),a=o(t/2),h=s((e+i)/2),d=o((e+i)/2),c=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(l*d,a*c,a*u,l*h);break;case"YZY":r.set(a*u,l*d,a*c,l*h);break;case"ZXZ":r.set(a*c,a*u,l*d,l*h);break;case"XZX":r.set(l*d,a*g,a*f,l*h);break;case"YXY":r.set(a*f,l*d,a*g,l*h);break;case"ZYZ":r.set(a*g,a*f,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ia={DEG2RAD:Nn,RAD2DEG:ps,generateUUID:jn,clamp:At,euclideanModulo:na,mapLinear:kc,inverseLerp:Nc,lerp:cs,damp:Uc,pingpong:Fc,smoothstep:Oc,smootherstep:Bc,randInt:zc,randFloat:Hc,randFloatSpread:Gc,seededRandom:Wc,degToRad:Vc,radToDeg:Xc,isPowerOfTwo:jc,ceilPowerOfTwo:qc,floorPowerOfTwo:Yc,setQuaternionFromProperEuler:$c,normalize:It,denormalize:Rn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,n,s,o,l,a,h){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,l,a,h)}set(e,t,i,n,s,o,l,a,h){const d=this.elements;return d[0]=e,d[1]=n,d[2]=l,d[3]=t,d[4]=s,d[5]=a,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],l=i[3],a=i[6],h=i[1],d=i[4],c=i[7],u=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],x=n[1],S=n[4],_=n[7],I=n[2],P=n[5],R=n[8];return s[0]=o*v+l*x+a*I,s[3]=o*m+l*S+a*P,s[6]=o*p+l*_+a*R,s[1]=h*v+d*x+c*I,s[4]=h*m+d*S+c*P,s[7]=h*p+d*_+c*R,s[2]=u*v+f*x+g*I,s[5]=u*m+f*S+g*P,s[8]=u*p+f*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],a=e[6],h=e[7],d=e[8];return t*o*d-t*l*h-i*s*d+i*l*a+n*s*h-n*o*a}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],a=e[6],h=e[7],d=e[8],c=d*o-l*h,u=l*a-d*s,f=h*s-o*a,g=t*c+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=c*v,e[1]=(n*h-d*i)*v,e[2]=(l*i-n*o)*v,e[3]=u*v,e[4]=(d*t-n*a)*v,e[5]=(n*s-l*t)*v,e[6]=f*v,e[7]=(i*a-h*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,l){const a=Math.cos(s),h=Math.sin(s);return this.set(i*a,i*h,-i*(a*o+h*l)+o+e,-n*h,n*a,-n*(-h*o+a*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new He;function ph(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kc(){const r=rr("canvas");return r.style.display="block",r}const ka={};function ls(r){r in ka||(ka[r]=!0,console.warn(r))}function Zc(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Jc(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qc(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Vn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?dr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Un(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Na=[.64,.33,.3,.6,.15,.06],Ua=[.2126,.7152,.0722],Fa=[.3127,.329],Oa=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Vn]:{primaries:Na,whitePoint:Fa,transfer:dr,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:Ua,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Na,whitePoint:Fa,transfer:lt,toXYZ:Oa,fromXYZ:Ba,luminanceCoefficients:Ua,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let pn;class ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pn===void 0&&(pn=rr("canvas")),pn.width=e.width,pn.height=e.height;const i=pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let td=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,l=n.length;o<l;o++)n[o].isDataTexture?s.push(yr(n[o].image)):s.push(yr(n[o]))}else s=yr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function yr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ed.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let id=0;class Dt extends Xn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=an,n=an,s=li,o=Wi,l=hi,a=Li,h=Dt.DEFAULT_ANISOTROPY,d=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=jn(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=a,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=ih;Dt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const a=e.elements,h=a[0],d=a[4],c=a[8],u=a[1],f=a[5],g=a[9],v=a[2],m=a[6],p=a[10];if(Math.abs(d-u)<.01&&Math.abs(c-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(c+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(h+1)/2,_=(f+1)/2,I=(p+1)/2,P=(d+u)/4,R=(c+v)/4,L=(g+m)/4;return S>_&&S>I?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=P/i,s=R/i):_>I?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=P/n,s=L/n):I<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(I),i=R/s,n=L/s),this.set(i,n,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(c-v)*(c-v)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(c-v)/x,this.z=(u-d)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends Xn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,l){let a=i[n+0],h=i[n+1],d=i[n+2],c=i[n+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(l===0){e[t+0]=a,e[t+1]=h,e[t+2]=d,e[t+3]=c;return}if(l===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(c!==v||a!==u||h!==f||d!==g){let m=1-l;const p=a*u+h*f+d*g+c*v,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),P=Math.atan2(I,p*x);m=Math.sin(m*P)/I,l=Math.sin(l*P)/I}const _=l*x;if(a=a*m+u*_,h=h*m+f*_,d=d*m+g*_,c=c*m+v*_,m===1-l){const I=1/Math.sqrt(a*a+h*h+d*d+c*c);a*=I,h*=I,d*=I,c*=I}}e[t]=a,e[t+1]=h,e[t+2]=d,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,n,s,o){const l=i[n],a=i[n+1],h=i[n+2],d=i[n+3],c=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=l*g+d*c+a*f-h*u,e[t+1]=a*g+d*u+h*c-l*f,e[t+2]=h*g+d*f+l*u-a*c,e[t+3]=d*g-l*c-a*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,l=Math.cos,a=Math.sin,h=l(i/2),d=l(n/2),c=l(s/2),u=a(i/2),f=a(n/2),g=a(s/2);switch(o){case"XYZ":this._x=u*d*c+h*f*g,this._y=h*f*c-u*d*g,this._z=h*d*g+u*f*c,this._w=h*d*c-u*f*g;break;case"YXZ":this._x=u*d*c+h*f*g,this._y=h*f*c-u*d*g,this._z=h*d*g-u*f*c,this._w=h*d*c+u*f*g;break;case"ZXY":this._x=u*d*c-h*f*g,this._y=h*f*c+u*d*g,this._z=h*d*g+u*f*c,this._w=h*d*c-u*f*g;break;case"ZYX":this._x=u*d*c-h*f*g,this._y=h*f*c+u*d*g,this._z=h*d*g-u*f*c,this._w=h*d*c+u*f*g;break;case"YZX":this._x=u*d*c+h*f*g,this._y=h*f*c+u*d*g,this._z=h*d*g-u*f*c,this._w=h*d*c-u*f*g;break;case"XZY":this._x=u*d*c-h*f*g,this._y=h*f*c-u*d*g,this._z=h*d*g+u*f*c,this._w=h*d*c+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],l=t[5],a=t[9],h=t[2],d=t[6],c=t[10],u=i+l+c;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-a)*f,this._y=(s-h)*f,this._z=(o-n)*f}else if(i>l&&i>c){const f=2*Math.sqrt(1+i-l-c);this._w=(d-a)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+h)/f}else if(l>c){const f=2*Math.sqrt(1+l-i-c);this._w=(s-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(a+d)/f}else{const f=2*Math.sqrt(1+c-i-l);this._w=(o-n)/f,this._x=(s+h)/f,this._y=(a+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,l=t._x,a=t._y,h=t._z,d=t._w;return this._x=i*d+o*l+n*h-s*a,this._y=n*d+o*a+s*l-i*h,this._z=s*d+o*h+i*a-n*l,this._w=o*d-i*l-n*a-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+n*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const a=1-l*l;if(a<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(a),d=Math.atan2(h,l),c=Math.sin((1-t)*d)/h,u=Math.sin(t*d)/h;return this._w=o*c+this._w*u,this._x=i*c+this._x*u,this._y=n*c+this._y*u,this._z=s*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,l=e.z,a=e.w,h=2*(o*n-l*i),d=2*(l*t-s*n),c=2*(s*i-o*t);return this.x=t+a*h+o*c-l*d,this.y=i+a*d+l*h-s*c,this.z=n+a*c+s*d-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,l=t.y,a=t.z;return this.x=n*a-s*l,this.y=s*o-i*a,this.z=i*l-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new E,za=new ms;class dn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),ws.subVectors(this.max,Jn),mn.subVectors(e.a,Jn),gn.subVectors(e.b,Jn),vn.subVectors(e.c,Jn),ki.subVectors(gn,mn),Ni.subVectors(vn,gn),Yi.subVectors(mn,vn);let t=[0,-ki.z,ki.y,0,-Ni.z,Ni.y,0,-Yi.z,Yi.y,ki.z,0,-ki.x,Ni.z,0,-Ni.x,Yi.z,0,-Yi.x,-ki.y,ki.x,0,-Ni.y,Ni.x,0,-Yi.y,Yi.x,0];return!Mr(t,mn,gn,vn,ws)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,mn,gn,vn,ws))?!1:(Ss.crossVectors(ki,Ni),t=[Ss.x,Ss.y,Ss.z],Mr(t,mn,gn,vn,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new E,new E,new E,new E,new E,new E,new E,new E],ni=new E,Ms=new dn,mn=new E,gn=new E,vn=new E,ki=new E,Ni=new E,Yi=new E,Jn=new E,ws=new E,Ss=new E,$i=new E;function Mr(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){$i.fromArray(r,s);const l=n.x*Math.abs($i.x)+n.y*Math.abs($i.y)+n.z*Math.abs($i.z),a=e.dot($i),h=t.dot($i),d=i.dot($i);if(Math.max(-Math.max(a,h,d),Math.min(a,h,d))>l)return!1}return!0}const rd=new dn,Qn=new E,wr=new E;class qn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Qn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(wr)),this.expandByPoint(Qn.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new E,Sr=new E,bs=new E,Ui=new E,br=new E,Ts=new E,Tr=new E;class sa{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Sr.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Sr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bs),l=Ui.dot(this.direction),a=-Ui.dot(bs),h=Ui.lengthSq(),d=Math.abs(1-o*o);let c,u,f,g;if(d>0)if(c=o*a-l,u=o*l-a,g=s*d,c>=0)if(u>=-g)if(u<=g){const v=1/d;c*=v,u*=v,f=c*(c+o*u+2*l)+u*(o*c+u+2*a)+h}else u=s,c=Math.max(0,-(o*u+l)),f=-c*c+u*(u+2*a)+h;else u=-s,c=Math.max(0,-(o*u+l)),f=-c*c+u*(u+2*a)+h;else u<=-g?(c=Math.max(0,-(-o*s+l)),u=c>0?-s:Math.min(Math.max(-s,-a),s),f=-c*c+u*(u+2*a)+h):u<=g?(c=0,u=Math.min(Math.max(-s,-a),s),f=u*(u+2*a)+h):(c=Math.max(0,-(o*s+l)),u=c>0?s:Math.min(Math.max(-s,-a),s),f=-c*c+u*(u+2*a)+h);else u=o>0?-s:s,c=Math.max(0,-(o*u+l)),f=-c*c+u*(u+2*a)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),n&&n.copy(Sr).addScaledVector(bs,u),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),n=_i.dot(_i)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),l=i-o,a=i+o;return a<0?null:l<0?this.at(a,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,l,a;const h=1/this.direction.x,d=1/this.direction.y,c=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),c>=0?(l=(e.min.z-u.z)*c,a=(e.max.z-u.z)*c):(l=(e.max.z-u.z)*c,a=(e.min.z-u.z)*c),i>a||l>n)||((l>i||i!==i)&&(i=l),(a<n||n!==n)&&(n=a),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,n,s){br.subVectors(t,e),Ts.subVectors(i,e),Tr.crossVectors(br,Ts);let o=this.direction.dot(Tr),l;if(o>0){if(n)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const a=l*this.direction.dot(Ts.crossVectors(Ui,Ts));if(a<0)return null;const h=l*this.direction.dot(br.cross(Ui));if(h<0||a+h>o)return null;const d=-l*Ui.dot(Tr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,n,s,o,l,a,h,d,c,u,f,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,l,a,h,d,c,u,f,g,v,m)}set(e,t,i,n,s,o,l,a,h,d,c,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=l,p[13]=a,p[2]=h,p[6]=d,p[10]=c,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/xn.setFromMatrixColumn(e,0).length(),s=1/xn.setFromMatrixColumn(e,1).length(),o=1/xn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),a=Math.cos(n),h=Math.sin(n),d=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const u=o*d,f=o*c,g=l*d,v=l*c;t[0]=a*d,t[4]=-a*c,t[8]=h,t[1]=f+g*h,t[5]=u-v*h,t[9]=-l*a,t[2]=v-u*h,t[6]=g+f*h,t[10]=o*a}else if(e.order==="YXZ"){const u=a*d,f=a*c,g=h*d,v=h*c;t[0]=u+v*l,t[4]=g*l-f,t[8]=o*h,t[1]=o*c,t[5]=o*d,t[9]=-l,t[2]=f*l-g,t[6]=v+u*l,t[10]=o*a}else if(e.order==="ZXY"){const u=a*d,f=a*c,g=h*d,v=h*c;t[0]=u-v*l,t[4]=-o*c,t[8]=g+f*l,t[1]=f+g*l,t[5]=o*d,t[9]=v-u*l,t[2]=-o*h,t[6]=l,t[10]=o*a}else if(e.order==="ZYX"){const u=o*d,f=o*c,g=l*d,v=l*c;t[0]=a*d,t[4]=g*h-f,t[8]=u*h+v,t[1]=a*c,t[5]=v*h+u,t[9]=f*h-g,t[2]=-h,t[6]=l*a,t[10]=o*a}else if(e.order==="YZX"){const u=o*a,f=o*h,g=l*a,v=l*h;t[0]=a*d,t[4]=v-u*c,t[8]=g*c+f,t[1]=c,t[5]=o*d,t[9]=-l*d,t[2]=-h*d,t[6]=f*c+g,t[10]=u-v*c}else if(e.order==="XZY"){const u=o*a,f=o*h,g=l*a,v=l*h;t[0]=a*d,t[4]=-c,t[8]=h*d,t[1]=u*c+v,t[5]=o*d,t[9]=f*c-g,t[2]=g*c-f,t[6]=l*d,t[10]=v*c+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(od,e,ad)}lookAt(e,t,i){const n=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Fi.crossVectors(i,Ht),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Fi.crossVectors(i,Ht)),Fi.normalize(),Es.crossVectors(Ht,Fi),n[0]=Fi.x,n[4]=Es.x,n[8]=Ht.x,n[1]=Fi.y,n[5]=Es.y,n[9]=Ht.y,n[2]=Fi.z,n[6]=Es.z,n[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],l=i[4],a=i[8],h=i[12],d=i[1],c=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],S=i[7],_=i[11],I=i[15],P=n[0],R=n[4],L=n[8],b=n[12],M=n[1],D=n[5],V=n[9],W=n[13],K=n[2],te=n[6],$=n[10],se=n[14],q=n[3],de=n[7],ve=n[11],Pe=n[15];return s[0]=o*P+l*M+a*K+h*q,s[4]=o*R+l*D+a*te+h*de,s[8]=o*L+l*V+a*$+h*ve,s[12]=o*b+l*W+a*se+h*Pe,s[1]=d*P+c*M+u*K+f*q,s[5]=d*R+c*D+u*te+f*de,s[9]=d*L+c*V+u*$+f*ve,s[13]=d*b+c*W+u*se+f*Pe,s[2]=g*P+v*M+m*K+p*q,s[6]=g*R+v*D+m*te+p*de,s[10]=g*L+v*V+m*$+p*ve,s[14]=g*b+v*W+m*se+p*Pe,s[3]=x*P+S*M+_*K+I*q,s[7]=x*R+S*D+_*te+I*de,s[11]=x*L+S*V+_*$+I*ve,s[15]=x*b+S*W+_*se+I*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],l=e[5],a=e[9],h=e[13],d=e[2],c=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*a*c-n*h*c-s*l*u+i*h*u+n*l*f-i*a*f)+v*(+t*a*f-t*h*u+s*o*u-n*o*f+n*h*d-s*a*d)+m*(+t*h*c-t*l*f-s*o*c+i*o*f+s*l*d-i*h*d)+p*(-n*l*d-t*a*c+t*l*u+n*o*c-i*o*u+i*a*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],a=e[6],h=e[7],d=e[8],c=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=c*m*h-v*u*h+v*a*f-l*m*f-c*a*p+l*u*p,S=g*u*h-d*m*h-g*a*f+o*m*f+d*a*p-o*u*p,_=d*v*h-g*c*h+g*l*f-o*v*f-d*l*p+o*c*p,I=g*c*a-d*v*a-g*l*u+o*v*u+d*l*m-o*c*m,P=t*x+i*S+n*_+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=x*R,e[1]=(v*u*s-c*m*s-v*n*f+i*m*f+c*n*p-i*u*p)*R,e[2]=(l*m*s-v*a*s+v*n*h-i*m*h-l*n*p+i*a*p)*R,e[3]=(c*a*s-l*u*s-c*n*h+i*u*h+l*n*f-i*a*f)*R,e[4]=S*R,e[5]=(d*m*s-g*u*s+g*n*f-t*m*f-d*n*p+t*u*p)*R,e[6]=(g*a*s-o*m*s-g*n*h+t*m*h+o*n*p-t*a*p)*R,e[7]=(o*u*s-d*a*s+d*n*h-t*u*h-o*n*f+t*a*f)*R,e[8]=_*R,e[9]=(g*c*s-d*v*s-g*i*f+t*v*f+d*i*p-t*c*p)*R,e[10]=(o*v*s-g*l*s+g*i*h-t*v*h-o*i*p+t*l*p)*R,e[11]=(d*l*s-o*c*s-d*i*h+t*c*h+o*i*f-t*l*f)*R,e[12]=I*R,e[13]=(d*v*n-g*c*n+g*i*u-t*v*u-d*i*m+t*c*m)*R,e[14]=(g*l*n-o*v*n-g*i*a+t*v*a+o*i*m-t*l*m)*R,e[15]=(o*c*n-d*l*n+d*i*a-t*c*a-o*i*u+t*l*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,l=e.y,a=e.z,h=s*o,d=s*l;return this.set(h*o+i,h*l-n*a,h*a+n*l,0,h*l+n*a,d*l+i,d*a-n*o,0,h*a-n*l,d*a+n*o,s*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,l=t._z,a=t._w,h=s+s,d=o+o,c=l+l,u=s*h,f=s*d,g=s*c,v=o*d,m=o*c,p=l*c,x=a*h,S=a*d,_=a*c,I=i.x,P=i.y,R=i.z;return n[0]=(1-(v+p))*I,n[1]=(f+_)*I,n[2]=(g-S)*I,n[3]=0,n[4]=(f-_)*P,n[5]=(1-(u+p))*P,n[6]=(m+x)*P,n[7]=0,n[8]=(g+S)*R,n[9]=(m-x)*R,n[10]=(1-(u+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=xn.set(n[0],n[1],n[2]).length();const o=xn.set(n[4],n[5],n[6]).length(),l=xn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],si.copy(this);const h=1/s,d=1/o,c=1/l;return si.elements[0]*=h,si.elements[1]*=h,si.elements[2]*=h,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=c,si.elements[9]*=c,si.elements[10]*=c,t.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,o,l=Ei){const a=this.elements,h=2*s/(t-e),d=2*s/(i-n),c=(t+e)/(t-e),u=(i+n)/(i-n);let f,g;if(l===Ei)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(l===sr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=d,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o,l=Ei){const a=this.elements,h=1/(t-e),d=1/(i-n),c=1/(o-s),u=(t+e)*h,f=(i+n)*d;let g,v;if(l===Ei)g=(o+s)*c,v=-2*c;else if(l===sr)g=s*c,v=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*d,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=v,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xn=new E,si=new at,od=new E(0,0,0),ad=new E(1,1,1),Fi=new E,Es=new E,Ht=new E,Ha=new at,Ga=new ms;class mi{constructor(e=0,t=0,i=0,n=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],l=n[8],a=n[1],h=n[5],d=n[9],c=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ld=0;const Wa=new E,yn=new ms,Mi=new at,As=new E,es=new E,hd=new E,cd=new ms,Va=new E(1,0,0),Xa=new E(0,1,0),ja=new E(0,0,1),qa={type:"added"},dd={type:"removed"},_n={type:"childadded",child:null},Er={type:"childremoved",child:null};class wt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new E,t=new mi,i=new ms,n=new E(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new He}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(Va,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(ja,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Va,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(es,As,this.up):Mi.lookAt(As,es,this.up),this.quaternion.setFromRotationMatrix(Mi),n&&(Mi.extractRotation(n.matrixWorld),yn.setFromRotationMatrix(Mi),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qa),_n.child=e,this.dispatchEvent(_n),_n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dd),Er.child=e,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qa),_n.child=e,this.dispatchEvent(_n),_n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let h=0,d=a.length;h<d;h++){const c=a[h];s(e.shapes,c)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,h=this.material.length;a<h;a++)l.push(s(e.materials,this.material[a]));n.material=l}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let l=0;l<this.children.length;l++)n.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];n.animations.push(s(e.animations,a))}}if(t){const l=o(e.geometries),a=o(e.materials),h=o(e.textures),d=o(e.images),c=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),c.length>0&&(i.shapes=c),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(l){const a=[];for(const h in l){const d=l[h];delete d.metadata,a.push(d)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}wt.DEFAULT_UP=new E(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new E,wi=new E,Ar=new E,Si=new E,Mn=new E,wn=new E,Ya=new E,Cr=new E,Pr=new E,Rr=new E,Lr=new ht,Dr=new ht,Ir=new ht;class Qt{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ri.subVectors(e,t),n.cross(ri);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){ri.subVectors(n,t),wi.subVectors(i,t),Ar.subVectors(e,t);const o=ri.dot(ri),l=ri.dot(wi),a=ri.dot(Ar),h=wi.dot(wi),d=wi.dot(Ar),c=o*h-l*l;if(c===0)return s.set(0,0,0),null;const u=1/c,f=(h*a-l*d)*u,g=(o*d-l*a)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,n,s,o,l,a){return this.getBarycoord(e,t,i,n,Si)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,Si.x),a.addScaledVector(o,Si.y),a.addScaledVector(l,Si.z),a)}static getInterpolatedAttribute(e,t,i,n,s,o){return Lr.setScalar(0),Dr.setScalar(0),Ir.setScalar(0),Lr.fromBufferAttribute(e,t),Dr.fromBufferAttribute(e,i),Ir.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Lr,s.x),o.addScaledVector(Dr,s.y),o.addScaledVector(Ir,s.z),o}static isFrontFacing(e,t,i,n){return ri.subVectors(i,t),wi.subVectors(e,t),ri.cross(wi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ri.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,l;Mn.subVectors(n,i),wn.subVectors(s,i),Cr.subVectors(e,i);const a=Mn.dot(Cr),h=wn.dot(Cr);if(a<=0&&h<=0)return t.copy(i);Pr.subVectors(e,n);const d=Mn.dot(Pr),c=wn.dot(Pr);if(d>=0&&c<=d)return t.copy(n);const u=a*c-d*h;if(u<=0&&a>=0&&d<=0)return o=a/(a-d),t.copy(i).addScaledVector(Mn,o);Rr.subVectors(e,s);const f=Mn.dot(Rr),g=wn.dot(Rr);if(g>=0&&f<=g)return t.copy(s);const v=f*h-a*g;if(v<=0&&h>=0&&g<=0)return l=h/(h-g),t.copy(i).addScaledVector(wn,l);const m=d*g-f*c;if(m<=0&&c-d>=0&&f-g>=0)return Ya.subVectors(s,n),l=(c-d)/(c-d+(f-g)),t.copy(n).addScaledVector(Ya,l);const p=1/(m+v+u);return o=v*p,l=u*p,t.copy(i).addScaledVector(Mn,o).addScaledVector(wn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function kr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=na(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=kr(o,s,e+1/3),this.g=kr(o,s,e),this.b=kr(o,s,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],l=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return tt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(At(Lt.r*255,0,255))*65536+Math.round(At(Lt.g*255,0,255))*256+Math.round(At(Lt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,n=Lt.g,s=Lt.b,o=Math.max(i,n,s),l=Math.min(i,n,s);let a,h;const d=(l+o)/2;if(l===o)a=0,h=0;else{const c=o-l;switch(h=d<=.5?c/(o+l):c/(2-o-l),o){case i:a=(n-s)/c+(n<s?6:0);break;case n:a=(s-i)/c+2;break;case s:a=(i-n)/c+4;break}a/=6}return e.h=a,e.s=h,e.l=d,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ut){tt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,n=Lt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Cs);const i=cs(Oi.h,Cs.h,t),n=cs(Oi.s,Cs.s,t),s=cs(Oi.l,Cs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Xe;Xe.NAMES=vh;let ud=0;class Yn extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=jn(),this.name="",this.blending=In,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=oo,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fn,this.stencilZFail=fn,this.stencilZPass=fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==In&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ro&&(i.blendSrc=this.blendSrc),this.blendDst!==oo&&(i.blendDst=this.blendDst),this.blendEquation!==rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const l in s){const a=s[l];delete a.metadata,o.push(a)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Yn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new E,Ps=new le;class ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ra,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}}class xh extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yh extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fd=0;const Zt=new at,Nr=new wt,Sn=new E,Gt=new dn,ts=new dn,Et=new E;class Tt extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?yh:xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sn).negate(),this.translate(Sn.x,Sn.y,Sn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ts.setFromBufferAttribute(l),this.morphTargetsRelative?(Et.addVectors(Gt.min,ts.min),Gt.expandByPoint(Et),Et.addVectors(Gt.max,ts.max),Gt.expandByPoint(Et)):(Gt.expandByPoint(ts.min),Gt.expandByPoint(ts.max))}Gt.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],a=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Et.fromBufferAttribute(l,h),a&&(Sn.fromBufferAttribute(e,h),Et.add(Sn)),n=Math.max(n,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),l=[],a=[];for(let L=0;L<i.count;L++)l[L]=new E,a[L]=new E;const h=new E,d=new E,c=new E,u=new le,f=new le,g=new le,v=new E,m=new E;function p(L,b,M){h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,b),c.fromBufferAttribute(i,M),u.fromBufferAttribute(s,L),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),d.sub(h),c.sub(h),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(D),m.copy(c).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(D),l[L].add(v),l[b].add(v),l[M].add(v),a[L].add(m),a[b].add(m),a[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,b=x.length;L<b;++L){const M=x[L],D=M.start,V=M.count;for(let W=D,K=D+V;W<K;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new E,_=new E,I=new E,P=new E;function R(L){I.fromBufferAttribute(n,L),P.copy(I);const b=l[L];S.copy(b),S.sub(I.multiplyScalar(I.dot(b))).normalize(),_.crossVectors(P,b);const D=_.dot(a[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,b=x.length;L<b;++L){const M=x[L],D=M.start,V=M.count;for(let W=D,K=D+V;W<K;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new E,s=new E,o=new E,l=new E,a=new E,h=new E,d=new E,c=new E;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,s),c.subVectors(n,s),d.cross(c),l.fromBufferAttribute(i,g),a.fromBufferAttribute(i,v),h.fromBufferAttribute(i,m),l.add(d),a.add(d),h.add(d),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),c.subVectors(n,s),d.cross(c),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(l,a){const h=l.array,d=l.itemSize,c=l.normalized,u=new h.constructor(a.length*d);let f=0,g=0;for(let v=0,m=a.length;v<m;v++){l.isInterleavedBufferAttribute?f=a[v]*l.data.stride+l.offset:f=a[v]*d;for(let p=0;p<d;p++)u[g++]=h[f++]}return new ei(u,d,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,n=this.attributes;for(const l in n){const a=n[l],h=e(a,i);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const a=[],h=s[l];for(let d=0,c=h.length;d<c;d++){const u=h[d],f=e(u,i);a.push(f)}t.morphAttributes[l]=a}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(e[h]=a[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const a in i){const h=i[a];e.data.attributes[a]=h.toJSON(e.data)}const n={};let s=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],d=[];for(let c=0,u=h.length;c<u;c++){const f=h[c];d.push(f.toJSON(e.data))}d.length>0&&(n[a]=d,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const d=n[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],c=s[h];for(let u=0,f=c.length;u<f;u++)d.push(c[u].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,d=o.length;h<d;h++){const c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new at,Ki=new sa,Rs=new qn,Ka=new E,Ls=new E,Ds=new E,Is=new E,Ur=new E,ks=new E,Za=new E,Ns=new E;class O extends wt{constructor(e=new Tt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const l=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const l=this.morphTargetInfluences;if(s&&l){ks.set(0,0,0);for(let a=0,h=s.length;a<h;a++){const d=l[a],c=s[a];d!==0&&(Ur.fromBufferAttribute(c,e),o?ks.addScaledVector(Ur,d):ks.addScaledVector(Ur.sub(t),d))}t.add(ks)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(Rs.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Rs,Ka)===null||Ki.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&($a.copy(s).invert(),Ki.copy(e.ray).applyMatrix4($a),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,l=s.index,a=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,c=s.attributes.normal,u=s.groups,f=s.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,I=S;_<I;_+=3){const P=l.getX(_),R=l.getX(_+1),L=l.getX(_+2);n=Us(this,p,e,i,h,d,c,P,R,L),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=l.getX(m),S=l.getX(m+1),_=l.getX(m+2);n=Us(this,o,e,i,h,d,c,x,S,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,I=S;_<I;_+=3){const P=_,R=_+1,L=_+2;n=Us(this,p,e,i,h,d,c,P,R,L),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,S=m+1,_=m+2;n=Us(this,o,e,i,h,d,c,x,S,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function pd(r,e,t,i,n,s,o,l){let a;if(e.side===Bt?a=i.intersectTriangle(o,s,n,!0,l):a=i.intersectTriangle(n,s,o,e.side===ji,l),a===null)return null;Ns.copy(l),Ns.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ns);return h<t.near||h>t.far?null:{distance:h,point:Ns.clone(),object:r}}function Us(r,e,t,i,n,s,o,l,a,h){r.getVertexPosition(l,Ls),r.getVertexPosition(a,Ds),r.getVertexPosition(h,Is);const d=pd(r,e,t,i,Ls,Ds,Is,Za);if(d){const c=new E;Qt.getBarycoord(Za,Ls,Ds,Is,c),n&&(d.uv=Qt.getInterpolatedAttribute(n,l,a,h,c,new le)),s&&(d.uv1=Qt.getInterpolatedAttribute(s,l,a,h,c,new le)),o&&(d.normal=Qt.getInterpolatedAttribute(o,l,a,h,c,new E),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:l,b:a,c:h,normal:new E,materialIndex:0};Qt.getNormal(Ls,Ds,Is,u.normal),d.face=u,d.barycoord=c}return d}class Te extends Tt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const l=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const a=[],h=[],d=[],c=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(a),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(c,2));function g(v,m,p,x,S,_,I,P,R,L,b){const M=_/R,D=I/L,V=_/2,W=I/2,K=P/2,te=R+1,$=L+1;let se=0,q=0;const de=new E;for(let ve=0;ve<$;ve++){const Pe=ve*D-W;for(let qe=0;qe<te;qe++){const ct=qe*M-V;de[v]=ct*x,de[m]=Pe*S,de[p]=K,h.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=P>0?1:-1,d.push(de.x,de.y,de.z),c.push(qe/R),c.push(1-ve/L),se+=1}}for(let ve=0;ve<L;ve++)for(let Pe=0;Pe<R;Pe++){const qe=u+Pe+te*ve,ct=u+Pe+te*(ve+1),J=u+(Pe+1)+te*(ve+1),ae=u+(Pe+1)+te*ve;a.push(qe,ct,ae),a.push(ct,J,ae),q+=6}l.addGroup(f,q,b),f+=q,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Te(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const i=Gn(r[t]);for(const n in i)e[n]=i[n]}return e}function md(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _h(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const or={clone:Gn,merge:kt};var gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Yn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gn(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new E,Ja=new le,Qa=new le;class Xt extends Mh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Ja,Qa),t.subVectors(Qa,Ja)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/a,t-=o.offsetY*i/h,n*=o.width/a,i*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bn=-90,Tn=1;class xd extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Xt(bn,Tn,e,t);n.layers=this.layers,this.add(n);const s=new Xt(bn,Tn,e,t);s.layers=this.layers,this.add(s);const o=new Xt(bn,Tn,e,t);o.layers=this.layers,this.add(o);const l=new Xt(bn,Tn,e,t);l.layers=this.layers,this.add(l);const a=new Xt(bn,Tn,e,t);a.layers=this.layers,this.add(a);const h=new Xt(bn,Tn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,l,a]=t;for(const h of t)this.remove(h);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,a,h,d]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,l),e.setRenderTarget(i,3,n),e.render(t,a),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,d),e.setRenderTarget(c,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wh extends Dt{constructor(e,t,i,n,s,o,l,a,h,d){e=e!==void 0?e:[],t=t!==void 0?t:On,super(e,t,i,n,s,o,l,a,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new wh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Te(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Ai});s.uniforms.tEquirect.value=t;const o=new O(n,s),l=t.minFilter;return t.minFilter===Wi&&(t.minFilter=li),new xd(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const Fr=new E,_d=new E,Md=new He;class Hi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Fr.subVectors(i,t).cross(_d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Md.getNormalMatrix(e),n=this.coplanarPoint(Fr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new qn,Fs=new E;class oa{constructor(e=new Hi,t=new Hi,i=new Hi,n=new Hi,s=new Hi,o=new Hi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(n),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){const i=this.planes,n=e.elements,s=n[0],o=n[1],l=n[2],a=n[3],h=n[4],d=n[5],c=n[6],u=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],x=n[13],S=n[14],_=n[15];if(i[0].setComponents(a-s,u-h,m-f,_-p).normalize(),i[1].setComponents(a+s,u+h,m+f,_+p).normalize(),i[2].setComponents(a+o,u+d,m+g,_+x).normalize(),i[3].setComponents(a-o,u-d,m-g,_-x).normalize(),i[4].setComponents(a-l,u-c,m-v,_-S).normalize(),t===Ei)i[5].setComponents(a+l,u+c,m+v,_+S).normalize();else if(t===sr)i[5].setComponents(l,c,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Fs.x=n.normal.x>0?e.max.x:e.min.x,Fs.y=n.normal.y>0?e.max.y:e.min.y,Fs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function wd(r){const e=new WeakMap;function t(l,a){const h=l.array,d=l.usage,c=h.byteLength,u=r.createBuffer();r.bindBuffer(a,u),r.bufferData(a,h,d),l.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function i(l,a,h){const d=a.array,c=a.updateRanges;if(r.bindBuffer(h,l),c.length===0)r.bufferSubData(h,0,d);else{c.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<c.length;f++){const g=c[u],v=c[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,c[u]=v)}c.length=u+1;for(let f=0,g=c.length;f<g;f++){const v=c[f];r.bufferSubData(h,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function n(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=e.get(l);a&&(r.deleteBuffer(a.buffer),e.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,a));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,a),h.version=l.version}}return{get:n,remove:s,update:o}}class pi extends Tt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,l=Math.floor(i),a=Math.floor(n),h=l+1,d=a+1,c=e/l,u=t/a,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const x=p*u-o;for(let S=0;S<h;S++){const _=S*c-s;g.push(_,-x,0),v.push(0,0,1),m.push(S/l),m.push(1-p/a)}}for(let p=0;p<a;p++)for(let x=0;x<l;x++){const S=x+h*p,_=x+h*(p+1),I=x+1+h*(p+1),P=x+1+h*p;f.push(S,_,P),f.push(_,I,P)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
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
#endif`,Dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
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
}`,wu=`
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Du=`#if defined( USE_POINTS_UV )
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
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lf=`float getShadowMask() {
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
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
}`,Lf=`#define DISTANCE
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
}`,Df=`#define DISTANCE
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
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Ff=`#include <common>
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
}`,Of=`uniform vec3 diffuse;
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
}`,Bf=`#define LAMBERT
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
}`,zf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Gf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,Vf=`#define NORMAL
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
}`,Xf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,qf=`#define STANDARD
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
}`,Yf=`#define STANDARD
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
}`,$f=`#define TOON
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
}`,Kf=`#define TOON
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
}`,Zf=`uniform float size;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,ep=`uniform vec3 color;
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
}`,tp=`uniform float rotation;
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
}`,ip=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Sd,alphahash_pars_fragment:bd,alphamap_fragment:Td,alphamap_pars_fragment:Ed,alphatest_fragment:Ad,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Rd,batching_pars_vertex:Ld,batching_vertex:Dd,begin_vertex:Id,beginnormal_vertex:kd,bsdfs:Nd,iridescence_fragment:Ud,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Od,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Hd,color_fragment:Gd,color_pars_fragment:Wd,color_pars_vertex:Vd,color_vertex:Xd,common:jd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Yd,displacementmap_pars_vertex:$d,displacementmap_vertex:Kd,emissivemap_fragment:Zd,emissivemap_pars_fragment:Jd,colorspace_fragment:Qd,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:iu,envmap_pars_fragment:nu,envmap_pars_vertex:su,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:ou,fog_pars_vertex:au,fog_fragment:lu,fog_pars_fragment:hu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:du,lights_lambert_fragment:uu,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:vu,lights_phong_fragment:xu,lights_phong_pars_fragment:yu,lights_physical_fragment:_u,lights_physical_pars_fragment:Mu,lights_fragment_begin:wu,lights_fragment_maps:Su,lights_fragment_end:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Cu,map_fragment:Pu,map_pars_fragment:Ru,map_particle_fragment:Lu,map_particle_pars_fragment:Du,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Nu,morphcolor_vertex:Uu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:zu,normal_fragment_maps:Hu,normal_pars_fragment:Gu,normal_pars_vertex:Wu,normal_vertex:Vu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:$u,opaque_fragment:Ku,packing:Zu,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:sf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:of,shadowmap_vertex:af,shadowmask_pars_fragment:lf,skinbase_vertex:hf,skinning_pars_vertex:cf,skinning_vertex:df,skinnormal_vertex:uf,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:vf,transmission_pars_fragment:xf,uv_pars_fragment:yf,uv_pars_vertex:_f,uv_vertex:Mf,worldpos_vertex:wf,background_vert:Sf,background_frag:bf,backgroundCube_vert:Tf,backgroundCube_frag:Ef,cube_vert:Af,cube_frag:Cf,depth_vert:Pf,depth_frag:Rf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:If,equirect_frag:kf,linedashed_vert:Nf,linedashed_frag:Uf,meshbasic_vert:Ff,meshbasic_frag:Of,meshlambert_vert:Bf,meshlambert_frag:zf,meshmatcap_vert:Hf,meshmatcap_frag:Gf,meshnormal_vert:Wf,meshnormal_frag:Vf,meshphong_vert:Xf,meshphong_frag:jf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:$f,meshtoon_frag:Kf,points_vert:Zf,points_frag:Jf,shadow_vert:Qf,shadow_frag:ep,sprite_vert:tp,sprite_frag:ip},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ui={basic:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:kt([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:kt([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:kt([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:kt([he.common,he.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:kt([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ui.physical={uniforms:kt([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Os={r:0,b:0,g:0},Ji=new mi,np=new at;function sp(r,e,t,i,n,s,o){const l=new Xe(0);let a=s===!0?0:1,h,d,c=null,u=0,f=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function v(x){let S=!1;const _=g(x);_===null?p(l,a):_&&_.isColor&&(p(_,1),S=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===cr)?(d===void 0&&(d=new O(new Te(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Gn(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),Ji.copy(S.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(Ji)),d.material.toneMapped=tt.getTransfer(_.colorSpace)!==lt,(c!==_||u!==_.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,c=_,u=_.version,f=r.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new O(new pi(2,2),new Ot({name:"BackgroundMaterial",uniforms:Gn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=tt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||u!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,c=_,u=_.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function p(x,S){x.getRGB(Os,_h(r)),i.buffers.color.setClear(Os.r,Os.g,Os.b,S,o)}return{getClearColor:function(){return l},setClearColor:function(x,S=1){l.set(x),a=S,p(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(l,a)},render:v,addToRenderList:m}}function rp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,o=!1;function l(M,D,V,W,K){let te=!1;const $=c(W,V,D);s!==$&&(s=$,h(s.object)),te=f(M,W,V,K),te&&g(M,W,V,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,_(M,D,V,W),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function a(){return r.createVertexArray()}function h(M){return r.bindVertexArray(M)}function d(M){return r.deleteVertexArray(M)}function c(M,D,V){const W=V.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let te=K[D.id];te===void 0&&(te={},K[D.id]=te);let $=te[W];return $===void 0&&($=u(a()),te[W]=$),$}function u(M){const D=[],V=[],W=[];for(let K=0;K<t;K++)D[K]=0,V[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:W,object:M,attributes:{},index:null}}function f(M,D,V,W){const K=s.attributes,te=D.attributes;let $=0;const se=V.getAttributes();for(const q in se)if(se[q].location>=0){const ve=K[q];let Pe=te[q];if(Pe===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor)),ve===void 0||ve.attribute!==Pe||Pe&&ve.data!==Pe.data)return!0;$++}return s.attributesNum!==$||s.index!==W}function g(M,D,V,W){const K={},te=D.attributes;let $=0;const se=V.getAttributes();for(const q in se)if(se[q].location>=0){let ve=te[q];ve===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const Pe={};Pe.attribute=ve,ve&&ve.data&&(Pe.data=ve.data),K[q]=Pe,$++}s.attributes=K,s.attributesNum=$,s.index=W}function v(){const M=s.newAttributes;for(let D=0,V=M.length;D<V;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const V=s.newAttributes,W=s.enabledAttributes,K=s.attributeDivisors;V[M]=1,W[M]===0&&(r.enableVertexAttribArray(M),W[M]=1),K[M]!==D&&(r.vertexAttribDivisor(M,D),K[M]=D)}function x(){const M=s.newAttributes,D=s.enabledAttributes;for(let V=0,W=D.length;V<W;V++)D[V]!==M[V]&&(r.disableVertexAttribArray(V),D[V]=0)}function S(M,D,V,W,K,te,$){$===!0?r.vertexAttribIPointer(M,D,V,K,te):r.vertexAttribPointer(M,D,V,W,K,te)}function _(M,D,V,W){v();const K=W.attributes,te=V.getAttributes(),$=D.defaultAttributeValues;for(const se in te){const q=te[se];if(q.location>=0){let de=K[se];if(de===void 0&&(se==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),se==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const ve=de.normalized,Pe=de.itemSize,qe=e.get(de);if(qe===void 0)continue;const ct=qe.buffer,J=qe.type,ae=qe.bytesPerElement,Ee=J===r.INT||J===r.UNSIGNED_INT||de.gpuType===Ko;if(de.isInterleavedBufferAttribute){const ue=de.data,Ie=ue.stride,Oe=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Ye=0;Ye<q.locationSize;Ye++)p(q.location+Ye,ue.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ye=0;Ye<q.locationSize;Ye++)m(q.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let Ye=0;Ye<q.locationSize;Ye++)S(q.location+Ye,Pe/q.locationSize,J,ve,Ie*ae,(Oe+Pe/q.locationSize*Ye)*ae,Ee)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue,de.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue);r.bindBuffer(r.ARRAY_BUFFER,ct);for(let ue=0;ue<q.locationSize;ue++)S(q.location+ue,Pe/q.locationSize,J,ve,Pe*ae,Pe/q.locationSize*ue*ae,Ee)}}else if($!==void 0){const ve=$[se];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(q.location,ve);break;case 3:r.vertexAttrib3fv(q.location,ve);break;case 4:r.vertexAttrib4fv(q.location,ve);break;default:r.vertexAttrib1fv(q.location,ve)}}}}x()}function I(){L();for(const M in i){const D=i[M];for(const V in D){const W=D[V];for(const K in W)d(W[K].object),delete W[K];delete D[V]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const V in D){const W=D[V];for(const K in W)d(W[K].object),delete W[K];delete D[V]}delete i[M.id]}function R(M){for(const D in i){const V=i[D];if(V[M.id]===void 0)continue;const W=V[M.id];for(const K in W)d(W[K].object),delete W[K];delete V[M.id]}}function L(){b(),o=!0,s!==n&&(s=n,h(s.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:l,reset:L,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function op(r,e,t){let i;function n(h){i=h}function s(h,d){r.drawArrays(i,h,d),t.update(d,i,1)}function o(h,d,c){c!==0&&(r.drawArraysInstanced(i,h,d,c),t.update(d,i,c))}function l(h,d,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,c);let f=0;for(let g=0;g<c;g++)f+=d[g];t.update(f,i,1)}function a(h,d,c,u){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,d,0,u,0,c);let g=0;for(let v=0;v<c;v++)g+=d[v]*u[v];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function ap(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==hi&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const L=R===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Li&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!L)}function a(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=a(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const c=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:I,maxSamples:P}}function lp(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Hi,l=new He,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const f=c.length!==0||u||i!==0||n;return n=u,i=c.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,u){t=d(c,u,0)},this.setState=function(c,u,f){const g=c.clippingPlanes,v=c.clipIntersection,m=c.clipShadows,p=r.get(c);if(!n||g===null||g.length===0||s&&!m)s?d(null):h();else{const x=s?0:i,S=x*4;let _=p.clippingState||null;a.value=_,_=d(g,u,S,f);for(let I=0;I!==S;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(c,u,f,g){const v=c!==null?c.length:0;let m=null;if(v!==0){if(m=a.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==v;++S,_+=4)o.copy(c[S]).applyMatrix4(x,l),o.normal.toArray(m,_),m[_+3]=o.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function hp(r){let e=new WeakMap;function t(o,l){return l===mo?o.mapping=On:l===go&&(o.mapping=Bn),o}function i(o){if(o&&o.isTexture){const l=o.mapping;if(l===mo||l===go)if(e.has(o)){const a=e.get(o).texture;return t(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const h=new yd(a.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",n),t(h.texture,o.mapping)}else return null}}return o}function n(o){const l=o.target;l.removeEventListener("dispose",n);const a=e.get(l);a!==void 0&&(e.delete(l),a.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class aa extends Mh{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=n+t,a=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=d*this.view.offsetY,a=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ln=4,el=[.125,.215,.35,.446,.526,.582],on=20,Or=new aa,tl=new Xe;let Br=null,zr=0,Hr=0,Gr=!1;const nn=(1+Math.sqrt(5))/2,En=1/nn,il=[new E(-nn,En,0),new E(nn,En,0),new E(-En,0,nn),new E(En,0,nn),new E(0,nn,-En),new E(0,nn,En),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Br,zr,Hr),this._renderer.xr.enabled=Gr,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===On||e.mapping===Bn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Br=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ci,format:hi,colorSpace:Vn,depthBuffer:!1},n=sl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(s)),this._blurMaterial=dp(s,e,t)}return n}_compileMaterial(e){const t=new O(this._lodPlanes[0],e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,i,n){const l=new Xt(90,1,t,i),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,u=d.toneMapping;d.getClearColor(tl),d.toneMapping=Xi,d.autoClear=!1;const f=new Vt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new O(new Te,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(tl),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(l.up.set(0,a[p],0),l.lookAt(h[p],0,0)):x===1?(l.up.set(0,0,a[p]),l.lookAt(0,h[p],0)):(l.up.set(0,a[p],0),l.lookAt(0,0,h[p]));const S=this._cubeSize;Bs(n,x*S,p>2?S:0,S,S),d.setRenderTarget(n),v&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=c,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===On||e.mapping===Bn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const a=this._cubeSize;Bs(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(o,Or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=il[(n-s-1)%il.length];this._blur(e,s-1,s,o,l)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,l){const a=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,c=new O(this._lodPlanes[n],h),u=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*on-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):on;m>on&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${on}`);const p=[];let x=0;for(let R=0;R<on;++R){const L=R/v,b=Math.exp(-L*L/2);p.push(b),R===0?x+=b:R<m&&(x+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;const _=this._sizeLods[n],I=3*_*(n>S-Ln?n-S+Ln:0),P=4*(this._cubeSize-_);Bs(t,I,P,3*_,2*_),a.setRenderTarget(t),a.render(c,Or)}}function cp(r){const e=[],t=[],i=[];let n=r;const s=r-Ln+1+el.length;for(let o=0;o<s;o++){const l=Math.pow(2,n);t.push(l);let a=1/l;o>r-Ln?a=el[o-r+Ln-1]:o===0&&(a=0),i.push(a);const h=1/(l-2),d=-h,c=1+h,u=[d,d,c,d,c,c,d,d,c,c,d,c],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,L=P>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(b,v*g*P),S.set(u,m*g*P);const M=[P,P,P,P,P,P];_.set(M,p*g*P)}const I=new Tt;I.setAttribute("position",new ei(x,v)),I.setAttribute("uv",new ei(S,m)),I.setAttribute("faceIndex",new ei(_,p)),e.push(I),n>Ln&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sl(r,e,t){const i=new ci(r,e,t);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function dp(r,e,t){const i=new Float32Array(on),n=new E(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:on,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:la(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function rl(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ol(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function up(r){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const a=l.mapping,h=a===mo||a===go,d=a===On||a===Bn;if(h||d){let c=e.get(l);const u=c!==void 0?c.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return t===null&&(t=new nl(r)),c=h?t.fromEquirectangular(l,c):t.fromCubemap(l,c),c.texture.pmremVersion=l.pmremVersion,e.set(l,c),c.texture;if(c!==void 0)return c.texture;{const f=l.image;return h&&f&&f.height>0||d&&f&&n(f)?(t===null&&(t=new nl(r)),c=h?t.fromEquirectangular(l):t.fromCubemap(l),c.texture.pmremVersion=l.pmremVersion,e.set(l,c),l.addEventListener("dispose",s),c.texture):null}}}return l}function n(l){let a=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&a++;return a===h}function s(l){const a=l.target;a.removeEventListener("dispose",s);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fp(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ls("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function pp(r,e,t,i){const n={},s=new WeakMap;function o(c){const u=c.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(c,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function a(c){const u=c.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=c.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function h(c){const u=[],f=c.index,g=c.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let S=0,_=x.length;S<_;S+=3){const I=x[S+0],P=x[S+1],R=x[S+2];u.push(I,P,P,R,R,I)}}else if(g!==void 0){const x=g.array;v=g.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const I=S+0,P=S+1,R=S+2;u.push(I,P,P,R,R,I)}}else return;const m=new(ph(u)?yh:xh)(u,1);m.version=v;const p=s.get(c);p&&e.remove(p),s.set(c,m)}function d(c){const u=s.get(c);if(u){const f=c.index;f!==null&&u.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:l,update:a,getWireframeAttribute:d}}function mp(r,e,t){let i;function n(u){i=u}let s,o;function l(u){s=u.type,o=u.bytesPerElement}function a(u,f){r.drawElements(i,f,s,u*o),t.update(f,i,1)}function h(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,u*o,g),t.update(f,i,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function c(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];t.update(p,i,1)}}this.setMode=n,this.setIndex=l,this.render=a,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=c}function gp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function vp(r,e,t){const i=new WeakMap,n=new ht;function s(o,l,a){const h=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=d!==void 0?d.length:0;let u=i.get(l);if(u===void 0||u.count!==c){let M=function(){L.dispose(),i.delete(l),l.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let I=l.attributes.position.count*_,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*P*4*c),L=new gh(R,I,P,c);L.type=fi,L.needsUpdate=!0;const b=_*4;for(let D=0;D<c;D++){const V=p[D],W=x[D],K=S[D],te=I*P*4*D;for(let $=0;$<V.count;$++){const se=$*b;g===!0&&(n.fromBufferAttribute(V,$),R[te+se+0]=n.x,R[te+se+1]=n.y,R[te+se+2]=n.z,R[te+se+3]=0),v===!0&&(n.fromBufferAttribute(W,$),R[te+se+4]=n.x,R[te+se+5]=n.y,R[te+se+6]=n.z,R[te+se+7]=0),m===!0&&(n.fromBufferAttribute(K,$),R[te+se+8]=n.x,R[te+se+9]=n.y,R[te+se+10]=n.z,R[te+se+11]=K.itemSize===4?n.w:1)}}u={count:c,texture:L,size:new le(I,P)},i.set(l,u),l.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=l.morphTargetsRelative?1:1-g;a.getUniforms().setValue(r,"morphTargetBaseInfluence",v),a.getUniforms().setValue(r,"morphTargetInfluences",h)}a.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function xp(r,e,t,i){let n=new WeakMap;function s(a){const h=i.render.frame,d=a.geometry,c=e.get(a,d);if(n.get(c)!==h&&(e.update(c),n.set(c,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),n.get(a)!==h&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,h))),a.isSkinnedMesh){const u=a.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return c}function o(){n=new WeakMap}function l(a){const h=a.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class bh extends Dt{constructor(e,t,i,n,s,o,l,a,h,d=kn){if(d!==kn&&d!==Hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===kn&&(i=hn),i===void 0&&d===Hn&&(i=zn),super(null,n,s,o,l,a,d,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:qt,this.minFilter=a!==void 0?a:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Th=new Dt,al=new bh(1,1),Eh=new gh,Ah=new sd,Ch=new wh,ll=[],hl=[],cl=new Float32Array(16),dl=new Float32Array(9),ul=new Float32Array(4);function $n(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=ll[n];if(s===void 0&&(s=new Float32Array(n),ll[n]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ur(r,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function yp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function Sp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;ul.set(i),r.uniformMatrix2fv(this.addr,!1,ul),bt(t,i)}}function bp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;dl.set(i),r.uniformMatrix3fv(this.addr,!1,dl),bt(t,i)}}function Tp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;cl.set(i),r.uniformMatrix4fv(this.addr,!1,cl),bt(t,i)}}function Ep(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ap(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function Cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function Rp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function Dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function Ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function kp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(al.compareFunction=fh,s=al):s=Th,t.setTexture2D(e||s,n)}function Np(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ah,n)}function Up(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ch,n)}function Fp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Eh,n)}function Op(r){switch(r){case 5126:return yp;case 35664:return _p;case 35665:return Mp;case 35666:return wp;case 35674:return Sp;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return Ep;case 35667:case 35671:return Ap;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Rp;case 36294:return Lp;case 36295:return Dp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Fp}}function Bp(r,e){r.uniform1fv(this.addr,e)}function zp(r,e){const t=$n(e,this.size,2);r.uniform2fv(this.addr,t)}function Hp(r,e){const t=$n(e,this.size,3);r.uniform3fv(this.addr,t)}function Gp(r,e){const t=$n(e,this.size,4);r.uniform4fv(this.addr,t)}function Wp(r,e){const t=$n(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vp(r,e){const t=$n(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Xp(r,e){const t=$n(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jp(r,e){r.uniform1iv(this.addr,e)}function qp(r,e){r.uniform2iv(this.addr,e)}function Yp(r,e){r.uniform3iv(this.addr,e)}function $p(r,e){r.uniform4iv(this.addr,e)}function Kp(r,e){r.uniform1uiv(this.addr,e)}function Zp(r,e){r.uniform2uiv(this.addr,e)}function Jp(r,e){r.uniform3uiv(this.addr,e)}function Qp(r,e){r.uniform4uiv(this.addr,e)}function em(r,e,t){const i=this.cache,n=e.length,s=ur(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Th,s[o])}function tm(r,e,t){const i=this.cache,n=e.length,s=ur(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Ah,s[o])}function im(r,e,t){const i=this.cache,n=e.length,s=ur(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Ch,s[o])}function nm(r,e,t){const i=this.cache,n=e.length,s=ur(t,n);St(i,s)||(r.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Eh,s[o])}function sm(r){switch(r){case 5126:return Bp;case 35664:return zp;case 35665:return Hp;case 35666:return Gp;case 35674:return Wp;case 35675:return Vp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return nm}}class rm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Op(t.type)}}class om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sm(t.type)}}class am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const l=n[s];l.setValue(e,t[l.id],i)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function fl(r,e){r.seq.push(e),r.map[e.id]=e}function lm(r,e,t){const i=r.name,n=i.length;for(Wr.lastIndex=0;;){const s=Wr.exec(i),o=Wr.lastIndex;let l=s[1];const a=s[2]==="]",h=s[3];if(a&&(l=l|0),h===void 0||h==="["&&o+2===n){fl(t,h===void 0?new rm(l,r,e):new om(l,r,e));break}else{let c=t.map[l];c===void 0&&(c=new am(l),fl(t,c)),t=c}}}class tr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);lm(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const l=t[s],a=i[l.id];a.needsUpdate!==!1&&l.setValue(e,a.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function pl(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const hm=37297;let cm=0;function dm(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const ml=new He;function um(r){tt._getMatrix(ml,tt.workingColorSpace,r);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case dr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function gl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+dm(r.getShaderSource(e),o)}else return n}function fm(r,e){const t=um(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pm(r,e){let t;switch(e){case gc:t="Linear";break;case vc:t="Reinhard";break;case xc:t="Cineon";break;case th:t="ACESFilmic";break;case _c:t="AgX";break;case Mc:t="Neutral";break;case yc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new E;function mm(){tt.getLuminanceCoefficients(zs);const r=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function vm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xm(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function hs(r){return r!==""}function vl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(r){return r.replace(ym,Mm)}const _m=new Map;function Mm(r,e){let t=We[e];if(t===void 0){const i=_m.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(r){return r.replace(wm,Sm)}function Sm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function _l(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function bm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Tm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case On:case Bn:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Em(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bn:e="ENVMAP_MODE_REFRACTION";break}return e}function Am(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case eh:e="ENVMAP_BLENDING_MULTIPLY";break;case pc:e="ENVMAP_BLENDING_MIX";break;case mc:e="ENVMAP_BLENDING_ADD";break}return e}function Cm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Pm(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const a=bm(t),h=Tm(t),d=Em(t),c=Am(t),u=Cm(t),f=gm(t),g=vm(s),v=n.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[_l(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?We.tonemapping_pars_fragment:"",t.toneMapping!==Xi?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,fm("linearToOutputTexel",t.outputColorSpace),mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=Vo(o),o=vl(o,t),o=xl(o,t),l=Vo(l),l=vl(l,t),l=xl(l,t),o=yl(o),l=yl(l),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+o,_=x+p+l,I=pl(n,n.VERTEX_SHADER,S),P=pl(n,n.FRAGMENT_SHADER,_);n.attachShader(v,I),n.attachShader(v,P),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(D){if(r.debug.checkShaderErrors){const V=n.getProgramInfoLog(v).trim(),W=n.getShaderInfoLog(I).trim(),K=n.getShaderInfoLog(P).trim();let te=!0,$=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,I,P);else{const se=gl(n,I,"vertex"),q=gl(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+se+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||K==="")&&($=!1);$&&(D.diagnostics={runnable:te,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:K,prefix:p}})}n.deleteShader(I),n.deleteShader(P),L=new tr(n,v),b=xm(n,v)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,hm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=P,this}let Rm=0;class Lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Dm(e),t.set(e,i)),i}}class Dm{constructor(e){this.id=Rm++,this.code=e,this.usedTimes=0}}function Im(r,e,t,i,n,s,o){const l=new ra,a=new Lm,h=new Set,d=[],c=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,V,W){const K=V.fog,te=W.geometry,$=b.isMeshStandardMaterial?V.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),q=se&&se.mapping===cr?se.image.height:null,de=g[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ve=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Pe=ve!==void 0?ve.length:0;let qe=0;te.morphAttributes.position!==void 0&&(qe=1),te.morphAttributes.normal!==void 0&&(qe=2),te.morphAttributes.color!==void 0&&(qe=3);let ct,J,ae,Ee;if(de){const ot=ui[de];ct=ot.vertexShader,J=ot.fragmentShader}else ct=b.vertexShader,J=b.fragmentShader,a.update(b),ae=a.getVertexShaderID(b),Ee=a.getFragmentShaderID(b);const ue=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Oe=W.isInstancedMesh===!0,Ye=W.isBatchedMesh===!0,vt=!!b.map,Qe=!!b.matcap,_t=!!se,F=!!b.aoMap,$t=!!b.lightMap,$e=!!b.bumpMap,Ke=!!b.normalMap,Le=!!b.displacementMap,ft=!!b.emissiveMap,Re=!!b.metalnessMap,C=!!b.roughnessMap,y=b.anisotropy>0,z=b.clearcoat>0,Q=b.dispersion>0,ne=b.iridescence>0,Z=b.sheen>0,Ae=b.transmission>0,fe=y&&!!b.anisotropyMap,xe=z&&!!b.clearcoatMap,et=z&&!!b.clearcoatNormalMap,re=z&&!!b.clearcoatRoughnessMap,ye=ne&&!!b.iridescenceMap,De=ne&&!!b.iridescenceThicknessMap,Ne=Z&&!!b.sheenColorMap,_e=Z&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,Ge=!!b.specularColorMap,dt=!!b.specularIntensityMap,k=Ae&&!!b.transmissionMap,ce=Ae&&!!b.thicknessMap,j=!!b.gradientMap,ee=!!b.alphaMap,ge=b.alphaTest>0,pe=!!b.alphaHash,Be=!!b.extensions;let yt=Xi;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(yt=r.toneMapping);const Pt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:J,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&W._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&W.instanceColor!==null,instancingMorph:Oe&&W.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Vn,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:Qe,envMap:_t,envMapMode:_t&&se.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:$t,bumpMap:$e,normalMap:Ke,displacementMap:u&&Le,emissiveMap:ft,normalMapObjectSpace:Ke&&b.normalMapType===Tc,normalMapTangentSpace:Ke&&b.normalMapType===uh,metalnessMap:Re,roughnessMap:C,anisotropy:y,anisotropyMap:fe,clearcoat:z,clearcoatMap:xe,clearcoatNormalMap:et,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ne,iridescenceMap:ye,iridescenceThicknessMap:De,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:_e,specularMap:Ze,specularColorMap:Ge,specularIntensityMap:dt,transmission:Ae,transmissionMap:k,thicknessMap:ce,gradientMap:j,opaque:b.transparent===!1&&b.blending===In&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:pe,combine:b.combine,mapUv:vt&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:$t&&v(b.lightMap.channel),bumpMapUv:$e&&v(b.bumpMap.channel),normalMapUv:Ke&&v(b.normalMap.channel),displacementMapUv:Le&&v(b.displacementMap.channel),emissiveMapUv:ft&&v(b.emissiveMap.channel),metalnessMapUv:Re&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:xe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(b.sheenRoughnessMap.channel),specularMapUv:Ze&&v(b.specularMap.channel),specularColorMapUv:Ge&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:ce&&v(b.thicknessMap.channel),alphaMapUv:ee&&v(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ke||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!te.attributes.uv&&(vt||ee),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Ie,skinning:W.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:qe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===jt,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(M,b),S(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),b.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),b.push(l.mask)}function _(b){const M=g[b.type];let D;if(M){const V=ui[M];D=or.clone(V.uniforms)}else D=b.uniforms;return D}function I(b,M){let D;for(let V=0,W=d.length;V<W;V++){const K=d[V];if(K.cacheKey===M){D=K,++D.usedTimes;break}}return D===void 0&&(D=new Pm(r,M,b,s),d.push(D)),D}function P(b){if(--b.usedTimes===0){const M=d.indexOf(b);d[M]=d[d.length-1],d.pop(),b.destroy()}}function R(b){a.remove(b)}function L(){a.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:P,releaseShaderCache:R,programs:d,dispose:L}}function km(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function i(o){r.delete(o)}function n(o,l,a){r.get(o)[l]=a}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Nm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ml(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wl(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(c,u,f,g,v,m){let p=r[e];return p===void 0?(p={id:c.id,object:c,geometry:u,material:f,groupOrder:g,renderOrder:c.renderOrder,z:v,group:m},r[e]=p):(p.id=c.id,p.object=c,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=v,p.group=m),e++,p}function l(c,u,f,g,v,m){const p=o(c,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function a(c,u,f,g,v,m){const p=o(c,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function h(c,u){t.length>1&&t.sort(c||Nm),i.length>1&&i.sort(u||Ml),n.length>1&&n.sort(u||Ml)}function d(){for(let c=e,u=r.length;c<u;c++){const f=r[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:a,finish:d,sort:h}}function Um(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new wl,r.set(i,[o])):n>=s.length?(o=new wl,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Xe};break;case"SpotLight":t={position:new E,direction:new E,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function Om(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Bm=0;function zm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hm(r){const e=new Fm,t=Om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new E);const n=new E,s=new at,o=new at;function l(h){let d=0,c=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,S=0,_=0,I=0,P=0,R=0;h.sort(zm);for(let b=0,M=h.length;b<M;b++){const D=h[b],V=D.color,W=D.intensity,K=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=V.r*W,c+=V.g*W,u+=V.b*W;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],W);R++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,q=t.get(D);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=te,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=$,f++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(V).multiplyScalar(W),$.distance=K,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[v]=$;const se=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,se.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=se.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=te,_++}v++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(V).multiplyScalar(W),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const se=D.shadow,q=t.get(D);q.shadowIntensity=se.intensity,q.shadowBias=se.bias,q.shadowNormalBias=se.normalBias,q.shadowRadius=se.radius,q.shadowMapSize=se.mapSize,q.shadowCameraNear=se.camera.near,q.shadowCameraFar=se.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(W),$.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[p]=$,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=c,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==x||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==I||L.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=x,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=I,L.numLightProbes=R,i.version=Bm++)}function a(h,d){let c=0,u=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const S=h[p];if(S.isDirectionalLight){const _=i.directional[c];_.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),c++}else if(S.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:l,setupView:a,state:i}}function Sl(r){const e=new Hm(r),t=[],i=[];function n(d){h.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function l(){e.setup(t)}function a(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:l,setupLightsView:a,pushLight:s,pushShadow:o}}function Gm(r){let e=new WeakMap;function t(n,s=0){const o=e.get(n);let l;return o===void 0?(l=new Sl(r),e.set(n,[l])):s>=o.length?(l=new Sl(r),o.push(l)):l=o[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}class Wm extends Yn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vm extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function qm(r,e,t){let i=new oa;const n=new le,s=new le,o=new ht,l=new Wm({depthPacking:bc}),a=new Vm,h={},d=t.maxTextureSize,c={[ji]:Bt,[Bt]:ji,[jt]:jt},u=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Xm,fragmentShader:jm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new O(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let p=this.type;this.render=function(P,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=r.getRenderTarget(),M=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Ai),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=p!==bi&&this.type===bi,K=p===bi&&this.type!==bi;for(let te=0,$=P.length;te<$;te++){const se=P[te],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const de=q.getFrameExtents();if(n.multiply(de),s.copy(q.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(s.x=Math.floor(d/de.x),n.x=s.x*de.x,q.mapSize.x=s.x),n.y>d&&(s.y=Math.floor(d/de.y),n.y=s.y*de.y,q.mapSize.y=s.y)),q.map===null||W===!0||K===!0){const Pe=this.type!==bi?{minFilter:qt,magFilter:qt}:{};q.map!==null&&q.map.dispose(),q.map=new ci(n.x,n.y,Pe),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const ve=q.getViewportCount();for(let Pe=0;Pe<ve;Pe++){const qe=q.getViewport(Pe);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),V.viewport(o),q.updateMatrices(se,Pe),i=q.getFrustum(),_(R,L,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===bi&&x(q,L),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,M,D)};function x(P,R){const L=e.update(v);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ci(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(R,null,L,u,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(R,null,L,f,v,null)}function S(P,R,L,b){let M=null;const D=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?a:l,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=M.uuid,W=R.uuid;let K=h[V];K===void 0&&(K={},h[V]=K);let te=K[W];te===void 0&&(te=M.clone(),K[W]=te,R.addEventListener("dispose",I)),M=te}if(M.visible=R.visible,M.wireframe=R.wireframe,b===bi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:c[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=r.properties.get(M);V.light=L}return M}function _(P,R,L,b,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===bi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const W=e.update(P),K=P.material;if(Array.isArray(K)){const te=W.groups;for(let $=0,se=te.length;$<se;$++){const q=te[$],de=K[q.materialIndex];if(de&&de.visible){const ve=S(P,de,b,M);P.onBeforeShadow(r,P,R,L,W,ve,q),r.renderBufferDirect(L,null,W,ve,P,q),P.onAfterShadow(r,P,R,L,W,ve,q)}}}else if(K.visible){const te=S(P,K,b,M);P.onBeforeShadow(r,P,R,L,W,te,null),r.renderBufferDirect(L,null,W,te,P,null),P.onAfterShadow(r,P,R,L,W,te,null)}}const V=P.children;for(let W=0,K=V.length;W<K;W++)_(V[W],R,L,b,M)}function I(P){P.target.removeEventListener("dispose",I);for(const L in h){const b=h[L],M=P.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Ym={[ao]:lo,[ho]:fo,[co]:po,[Fn]:uo,[lo]:ao,[fo]:ho,[po]:co,[uo]:Fn};function $m(r,e){function t(){let k=!1;const ce=new ht;let j=null;const ee=new ht(0,0,0,0);return{setMask:function(ge){j!==ge&&!k&&(r.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){k=ge},setClear:function(ge,pe,Be,yt,Pt){Pt===!0&&(ge*=yt,pe*=yt,Be*=yt),ce.set(ge,pe,Be,yt),ee.equals(ce)===!1&&(r.clearColor(ge,pe,Be,yt),ee.copy(ce))},reset:function(){k=!1,j=null,ee.set(-1,0,0,0)}}}function i(){let k=!1,ce=!1,j=null,ee=null,ge=null;return{setReversed:function(pe){if(ce!==pe){const Be=e.get("EXT_clip_control");ce?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=ge;ge=null,this.setClear(yt)}ce=pe},getReversed:function(){return ce},setTest:function(pe){pe?ue(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(pe){j!==pe&&!k&&(r.depthMask(pe),j=pe)},setFunc:function(pe){if(ce&&(pe=Ym[pe]),ee!==pe){switch(pe){case ao:r.depthFunc(r.NEVER);break;case lo:r.depthFunc(r.ALWAYS);break;case ho:r.depthFunc(r.LESS);break;case Fn:r.depthFunc(r.LEQUAL);break;case co:r.depthFunc(r.EQUAL);break;case uo:r.depthFunc(r.GEQUAL);break;case fo:r.depthFunc(r.GREATER);break;case po:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ee=pe}},setLocked:function(pe){k=pe},setClear:function(pe){ge!==pe&&(ce&&(pe=1-pe),r.clearDepth(pe),ge=pe)},reset:function(){k=!1,j=null,ee=null,ge=null,ce=!1}}}function n(){let k=!1,ce=null,j=null,ee=null,ge=null,pe=null,Be=null,yt=null,Pt=null;return{setTest:function(ot){k||(ot?ue(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(ot){ce!==ot&&!k&&(r.stencilMask(ot),ce=ot)},setFunc:function(ot,ti,vi){(j!==ot||ee!==ti||ge!==vi)&&(r.stencilFunc(ot,ti,vi),j=ot,ee=ti,ge=vi)},setOp:function(ot,ti,vi){(pe!==ot||Be!==ti||yt!==vi)&&(r.stencilOp(ot,ti,vi),pe=ot,Be=ti,yt=vi)},setLocked:function(ot){k=ot},setClear:function(ot){Pt!==ot&&(r.clearStencil(ot),Pt=ot)},reset:function(){k=!1,ce=null,j=null,ee=null,ge=null,pe=null,Be=null,yt=null,Pt=null}}}const s=new t,o=new i,l=new n,a=new WeakMap,h=new WeakMap;let d={},c={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,S=null,_=null,I=null,P=null,R=new Xe(0,0,0),L=0,b=!1,M=null,D=null,V=null,W=null,K=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,se=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=se>=1):q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=se>=2);let de=null,ve={};const Pe=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),ct=new ht().fromArray(Pe),J=new ht().fromArray(qe);function ae(k,ce,j,ee){const ge=new Uint8Array(4),pe=r.createTexture();r.bindTexture(k,pe),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<j;Be++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(ce+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return pe}const Ee={};Ee[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ue(r.DEPTH_TEST),o.setFunc(Fn),$e(!1),Ke(Ea),ue(r.CULL_FACE),F(Ai);function ue(k){d[k]!==!0&&(r.enable(k),d[k]=!0)}function Ie(k){d[k]!==!1&&(r.disable(k),d[k]=!1)}function Oe(k,ce){return c[k]!==ce?(r.bindFramebuffer(k,ce),c[k]=ce,k===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=ce),k===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ye(k,ce){let j=f,ee=!1;if(k){j=u.get(ce),j===void 0&&(j=[],u.set(ce,j));const ge=k.textures;if(j.length!==ge.length||j[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Be=ge.length;pe<Be;pe++)j[pe]=r.COLOR_ATTACHMENT0+pe;j.length=ge.length,ee=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,ee=!0);ee&&r.drawBuffers(j)}function vt(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const Qe={[rn]:r.FUNC_ADD,[Zh]:r.FUNC_SUBTRACT,[Jh]:r.FUNC_REVERSE_SUBTRACT};Qe[Qh]=r.MIN,Qe[ec]=r.MAX;const _t={[tc]:r.ZERO,[ic]:r.ONE,[nc]:r.SRC_COLOR,[ro]:r.SRC_ALPHA,[hc]:r.SRC_ALPHA_SATURATE,[ac]:r.DST_COLOR,[rc]:r.DST_ALPHA,[sc]:r.ONE_MINUS_SRC_COLOR,[oo]:r.ONE_MINUS_SRC_ALPHA,[lc]:r.ONE_MINUS_DST_COLOR,[oc]:r.ONE_MINUS_DST_ALPHA,[cc]:r.CONSTANT_COLOR,[dc]:r.ONE_MINUS_CONSTANT_COLOR,[uc]:r.CONSTANT_ALPHA,[fc]:r.ONE_MINUS_CONSTANT_ALPHA};function F(k,ce,j,ee,ge,pe,Be,yt,Pt,ot){if(k===Ai){v===!0&&(Ie(r.BLEND),v=!1);return}if(v===!1&&(ue(r.BLEND),v=!0),k!==Kh){if(k!==m||ot!==b){if((p!==rn||_!==rn)&&(r.blendEquation(r.FUNC_ADD),p=rn,_=rn),ot)switch(k){case In:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case so:r.blendFunc(r.ONE,r.ONE);break;case Aa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ca:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case In:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case so:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Aa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ca:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,S=null,I=null,P=null,R.set(0,0,0),L=0,m=k,b=ot}return}ge=ge||ce,pe=pe||j,Be=Be||ee,(ce!==p||ge!==_)&&(r.blendEquationSeparate(Qe[ce],Qe[ge]),p=ce,_=ge),(j!==x||ee!==S||pe!==I||Be!==P)&&(r.blendFuncSeparate(_t[j],_t[ee],_t[pe],_t[Be]),x=j,S=ee,I=pe,P=Be),(yt.equals(R)===!1||Pt!==L)&&(r.blendColor(yt.r,yt.g,yt.b,Pt),R.copy(yt),L=Pt),m=k,b=!1}function $t(k,ce){k.side===jt?Ie(r.CULL_FACE):ue(r.CULL_FACE);let j=k.side===Bt;ce&&(j=!j),$e(j),k.blending===In&&k.transparent===!1?F(Ai):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ee=k.stencilWrite;l.setTest(ee),ee&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(k){M!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),M=k)}function Ke(k){k!==jh?(ue(r.CULL_FACE),k!==D&&(k===Ea?r.cullFace(r.BACK):k===qh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),D=k}function Le(k){k!==V&&($&&r.lineWidth(k),V=k)}function ft(k,ce,j){k?(ue(r.POLYGON_OFFSET_FILL),(W!==ce||K!==j)&&(r.polygonOffset(ce,j),W=ce,K=j)):Ie(r.POLYGON_OFFSET_FILL)}function Re(k){k?ue(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function C(k){k===void 0&&(k=r.TEXTURE0+te-1),de!==k&&(r.activeTexture(k),de=k)}function y(k,ce,j){j===void 0&&(de===null?j=r.TEXTURE0+te-1:j=de);let ee=ve[j];ee===void 0&&(ee={type:void 0,texture:void 0},ve[j]=ee),(ee.type!==k||ee.texture!==ce)&&(de!==j&&(r.activeTexture(j),de=j),r.bindTexture(k,ce||Ee[k]),ee.type=k,ee.texture=ce)}function z(){const k=ve[de];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){ct.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ct.copy(k))}function _e(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Ze(k,ce){let j=h.get(ce);j===void 0&&(j=new WeakMap,h.set(ce,j));let ee=j.get(k);ee===void 0&&(ee=r.getUniformBlockIndex(ce,k.name),j.set(k,ee))}function Ge(k,ce){const ee=h.get(ce).get(k);a.get(ce)!==ee&&(r.uniformBlockBinding(ce,ee,k.__bindingPointIndex),a.set(ce,ee))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},de=null,ve={},c={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,S=null,_=null,I=null,P=null,R=new Xe(0,0,0),L=0,b=!1,M=null,D=null,V=null,W=null,K=null,ct.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:ue,disable:Ie,bindFramebuffer:Oe,drawBuffers:Ye,useProgram:vt,setBlending:F,setMaterial:$t,setFlipSided:$e,setCullFace:Ke,setLineWidth:Le,setPolygonOffset:ft,setScissorTest:Re,activeTexture:C,bindTexture:y,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:ye,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:Ge,texStorage2D:et,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ne,viewport:_e,reset:dt}}function bl(r,e,t,i){const n=Km(i);switch(t){case oh:return r*e;case lh:return r*e;case hh:return r*e*2;case Qo:return r*e/n.components*n.byteLength;case ea:return r*e/n.components*n.byteLength;case ch:return r*e*2/n.components*n.byteLength;case ta:return r*e*2/n.components*n.byteLength;case ah:return r*e*3/n.components*n.byteLength;case hi:return r*e*4/n.components*n.byteLength;case ia:return r*e*4/n.components*n.byteLength;case Ks:case Zs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Js:case Qs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yo:case Mo:return Math.max(r,16)*Math.max(e,8)/4;case xo:case _o:return Math.max(r,8)*Math.max(e,8)/2;case wo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Io:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case er:case Bo:case zo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dh:case Ho:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Go:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Km(r){switch(r){case Li:case nh:return{byteLength:1,components:1};case fs:case sh:case Ci:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case hn:case Ko:case fi:return{byteLength:4,components:1};case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Zm(r,e,t,i,n,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,d=new WeakMap;let c;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):rr("canvas")}function v(C,y,z){let Q=1;const ne=Re(C);if((ne.width>z||ne.height>z)&&(Q=z/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*ne.width),Ae=Math.floor(Q*ne.height);c===void 0&&(c=g(Z,Ae));const fe=y?g(Z,Ae):c;return fe.width=Z,fe.height=Ae,fe.getContext("2d").drawImage(C,0,0,Z,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ae+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,y,z,Q,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=y;if(y===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),y===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),y===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),y===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),y===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),z===r.UNSIGNED_INT&&(Z=r.RGB32UI),z===r.BYTE&&(Z=r.RGB8I),z===r.SHORT&&(Z=r.RGB16I),z===r.INT&&(Z=r.RGB32I)),y===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),z===r.UNSIGNED_INT&&(Z=r.RGBA32UI),z===r.BYTE&&(Z=r.RGBA8I),z===r.SHORT&&(Z=r.RGBA16I),z===r.INT&&(Z=r.RGBA32I)),y===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),y===r.RGBA){const Ae=ne?dr:tt.getTransfer(Q);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=Ae===lt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(C,y){let z;return C?y===null||y===hn||y===zn?z=r.DEPTH24_STENCIL8:y===fi?z=r.DEPTH32F_STENCIL8:y===fs&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hn||y===zn?z=r.DEPTH_COMPONENT24:y===fi?z=r.DEPTH_COMPONENT32F:y===fs&&(z=r.DEPTH_COMPONENT16),z}function I(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==li?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function P(C){const y=C.target;y.removeEventListener("dispose",P),L(y),y.isVideoTexture&&d.delete(y)}function R(C){const y=C.target;y.removeEventListener("dispose",R),M(y)}function L(C){const y=i.get(C);if(y.__webglInit===void 0)return;const z=C.source,Q=u.get(z);if(Q){const ne=Q[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(C),Object.keys(Q).length===0&&u.delete(z)}i.remove(C)}function b(C){const y=i.get(C);r.deleteTexture(y.__webglTexture);const z=C.source,Q=u.get(z);delete Q[y.__cacheKey],o.memory.textures--}function M(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ne=0;ne<y.__webglFramebuffer[Q].length;ne++)r.deleteFramebuffer(y.__webglFramebuffer[Q][ne]);else r.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let Q=0,ne=z.length;Q<ne;Q++){const Z=i.get(z[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(C)}let D=0;function V(){D=0}function W(){const C=D;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function K(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function te(C,y){const z=i.get(C);if(C.isVideoTexture&&Le(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,C,y);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+y)}function $(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){J(z,C,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+y)}function se(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){J(z,C,y);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+y)}function q(C,y){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ae(z,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+y)}const de={[nr]:r.REPEAT,[an]:r.CLAMP_TO_EDGE,[vo]:r.MIRRORED_REPEAT},ve={[qt]:r.NEAREST,[wc]:r.NEAREST_MIPMAP_NEAREST,[_s]:r.NEAREST_MIPMAP_LINEAR,[li]:r.LINEAR,[vr]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},Pe={[Ec]:r.NEVER,[Dc]:r.ALWAYS,[Ac]:r.LESS,[fh]:r.LEQUAL,[Cc]:r.EQUAL,[Lc]:r.GEQUAL,[Pc]:r.GREATER,[Rc]:r.NOTEQUAL};function qe(C,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===li||y.magFilter===vr||y.magFilter===_s||y.magFilter===Wi||y.minFilter===li||y.minFilter===vr||y.minFilter===_s||y.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,de[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,de[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,de[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ve[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ve[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qt||y.minFilter!==_s&&y.minFilter!==Wi||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ct(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",P));const Q=y.source;let ne=u.get(Q);ne===void 0&&(ne={},u.set(Q,ne));const Z=K(y);if(Z!==C.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[Z].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(y)),C.__cacheKey=Z,C.__webglTexture=ne[Z].texture}return z}function J(C,y,z){let Q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=r.TEXTURE_3D);const ne=ct(C,y),Z=y.source;t.bindTexture(Q,C.__webglTexture,r.TEXTURE0+z);const Ae=i.get(Z);if(Z.version!==Ae.__version||ne===!0){t.activeTexture(r.TEXTURE0+z);const fe=tt.getPrimaries(tt.workingColorSpace),xe=y.colorSpace===Ti?null:tt.getPrimaries(y.colorSpace),et=y.colorSpace===Ti||fe===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let re=v(y.image,!1,n.maxTextureSize);re=ft(y,re);const ye=s.convert(y.format,y.colorSpace),De=s.convert(y.type);let Ne=S(y.internalFormat,ye,De,y.colorSpace,y.isVideoTexture);qe(Q,y);let _e;const Ze=y.mipmaps,Ge=y.isVideoTexture!==!0,dt=Ae.__version===void 0||ne===!0,k=Z.dataReady,ce=I(y,re);if(y.isDepthTexture)Ne=_(y.format===Hn,y.type),dt&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,De,null));else if(y.isDataTexture)if(Ze.length>0){Ge&&dt&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,Ze[0].width,Ze[0].height);for(let j=0,ee=Ze.length;j<ee;j++)_e=Ze[j],Ge?k&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,_e.width,_e.height,ye,De,_e.data):t.texImage2D(r.TEXTURE_2D,j,Ne,_e.width,_e.height,0,ye,De,_e.data);y.generateMipmaps=!1}else Ge?(dt&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,re.width,re.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,ye,De,re.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,re.width,re.height,0,ye,De,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,Ze[0].width,Ze[0].height,re.depth);for(let j=0,ee=Ze.length;j<ee;j++)if(_e=Ze[j],y.format!==hi)if(ye!==null)if(Ge){if(k)if(y.layerUpdates.size>0){const ge=bl(_e.width,_e.height,y.format,y.type);for(const pe of y.layerUpdates){const Be=_e.data.subarray(pe*ge/_e.data.BYTES_PER_ELEMENT,(pe+1)*ge/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,pe,_e.width,_e.height,1,ye,Be)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,re.depth,ye,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,_e.width,_e.height,re.depth,ye,De,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Ne,_e.width,_e.height,re.depth,0,ye,De,_e.data)}else{Ge&&dt&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,Ze[0].width,Ze[0].height);for(let j=0,ee=Ze.length;j<ee;j++)_e=Ze[j],y.format!==hi?ye!==null?Ge?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,_e.width,_e.height,ye,De,_e.data):t.texImage2D(r.TEXTURE_2D,j,Ne,_e.width,_e.height,0,ye,De,_e.data)}else if(y.isDataArrayTexture)if(Ge){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,re.width,re.height,re.depth),k)if(y.layerUpdates.size>0){const j=bl(re.width,re.height,y.format,y.type);for(const ee of y.layerUpdates){const ge=re.data.subarray(ee*j/re.data.BYTES_PER_ELEMENT,(ee+1)*j/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ye,De,ge)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,De,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,ye,De,re.data);else if(y.isData3DTexture)Ge?(dt&&t.texStorage3D(r.TEXTURE_3D,ce,Ne,re.width,re.height,re.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,De,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,ye,De,re.data);else if(y.isFramebufferTexture){if(dt)if(Ge)t.texStorage2D(r.TEXTURE_2D,ce,Ne,re.width,re.height);else{let j=re.width,ee=re.height;for(let ge=0;ge<ce;ge++)t.texImage2D(r.TEXTURE_2D,ge,Ne,j,ee,0,ye,De,null),j>>=1,ee>>=1}}else if(Ze.length>0){if(Ge&&dt){const j=Re(Ze[0]);t.texStorage2D(r.TEXTURE_2D,ce,Ne,j.width,j.height)}for(let j=0,ee=Ze.length;j<ee;j++)_e=Ze[j],Ge?k&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,ye,De,_e):t.texImage2D(r.TEXTURE_2D,j,Ne,ye,De,_e);y.generateMipmaps=!1}else if(Ge){if(dt){const j=Re(re);t.texStorage2D(r.TEXTURE_2D,ce,Ne,j.width,j.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ye,De,re)}else t.texImage2D(r.TEXTURE_2D,0,Ne,ye,De,re);m(y)&&p(Q),Ae.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ae(C,y,z){if(y.image.length!==6)return;const Q=ct(C,y),ne=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);const Z=i.get(ne);if(ne.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+z);const Ae=tt.getPrimaries(tt.workingColorSpace),fe=y.colorSpace===Ti?null:tt.getPrimaries(y.colorSpace),xe=y.colorSpace===Ti||Ae===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const et=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!et&&!re?ye[ee]=v(y.image[ee],!0,n.maxCubemapSize):ye[ee]=re?y.image[ee].image:y.image[ee],ye[ee]=ft(y,ye[ee]);const De=ye[0],Ne=s.convert(y.format,y.colorSpace),_e=s.convert(y.type),Ze=S(y.internalFormat,Ne,_e,y.colorSpace),Ge=y.isVideoTexture!==!0,dt=Z.__version===void 0||Q===!0,k=ne.dataReady;let ce=I(y,De);qe(r.TEXTURE_CUBE_MAP,y);let j;if(et){Ge&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ze,De.width,De.height);for(let ee=0;ee<6;ee++){j=ye[ee].mipmaps;for(let ge=0;ge<j.length;ge++){const pe=j[ge];y.format!==hi?Ne!==null?Ge?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,Ne,_e,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ze,pe.width,pe.height,0,Ne,_e,pe.data)}}}else{if(j=y.mipmaps,Ge&&dt){j.length>0&&ce++;const ee=Re(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Ge?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Ne,_e,ye[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,ye[ee].width,ye[ee].height,0,Ne,_e,ye[ee].data);for(let ge=0;ge<j.length;ge++){const Be=j[ge].image[ee].image;Ge?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Be.width,Be.height,Ne,_e,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ze,Be.width,Be.height,0,Ne,_e,Be.data)}}else{Ge?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,_e,ye[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Ne,_e,ye[ee]);for(let ge=0;ge<j.length;ge++){const pe=j[ge];Ge?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Ne,_e,pe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ze,Ne,_e,pe.image[ee])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),Z.__version=ne.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ee(C,y,z,Q,ne,Z){const Ae=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),xe=S(z.internalFormat,Ae,fe,z.colorSpace),et=i.get(y),re=i.get(z);if(re.__renderTarget=y,!et.__hasExternalTextures){const ye=Math.max(1,y.width>>Z),De=Math.max(1,y.height>>Z);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,xe,ye,De,y.depth,0,Ae,fe,null):t.texImage2D(ne,Z,xe,ye,De,0,Ae,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ke(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,ne,re.__webglTexture,0,$e(y)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,ne,re.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(C,y,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const Q=y.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,Z=_(y.stencilBuffer,ne),Ae=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=$e(y);Ke(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,Z,y.width,y.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,Z,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Z,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,C)}else{const Q=y.textures;for(let ne=0;ne<Q.length;ne++){const Z=Q[ne],Ae=s.convert(Z.format,Z.colorSpace),fe=s.convert(Z.type),xe=S(Z.internalFormat,Ae,fe,Z.colorSpace),et=$e(y);z&&Ke(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,xe,y.width,y.height):Ke(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,xe,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,xe,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te(y.depthTexture,0);const ne=Q.__webglTexture,Z=$e(y);if(y.depthTexture.format===kn)Ke(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Hn)Ke(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(C){const y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=Q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,C)}else if(z){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=r.createRenderbuffer(),ue(y.__webglDepthbuffer[Q],C,!1);else{const ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ue(y.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(C,y,z){const Q=i.get(C);y!==void 0&&Ee(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Oe(C)}function vt(C){const y=C.texture,z=i.get(C),Q=i.get(y);C.addEventListener("dispose",R);const ne=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=y.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let xe=0;xe<y.mipmaps.length;xe++)z.__webglFramebuffer[fe][xe]=r.createFramebuffer()}else z.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)z.__webglFramebuffer[fe]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let fe=0,xe=ne.length;fe<xe;fe++){const et=i.get(ne[fe]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const xe=ne[fe];z.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const et=s.convert(xe.format,xe.colorSpace),re=s.convert(xe.type),ye=S(xe.internalFormat,et,re,xe.colorSpace,C.isXRRenderTarget===!0),De=$e(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ye,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),qe(r.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)Ee(z.__webglFramebuffer[fe][xe],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Ee(z.__webglFramebuffer[fe],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,xe=ne.length;fe<xe;fe++){const et=ne[fe],re=i.get(et);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),qe(r.TEXTURE_2D,et),Ee(z.__webglFramebuffer,C,et,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),m(et)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,Q.__webglTexture),qe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)Ee(z.__webglFramebuffer[xe],C,y,r.COLOR_ATTACHMENT0,fe,xe);else Ee(z.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,fe,0);m(y)&&p(fe),t.unbindTexture()}C.depthBuffer&&Oe(C)}function Qe(C){const y=C.textures;for(let z=0,Q=y.length;z<Q;z++){const ne=y[z];if(m(ne)){const Z=x(C),Ae=i.get(ne).__webglTexture;t.bindTexture(Z,Ae),p(Z),t.unbindTexture()}}}const _t=[],F=[];function $t(C){if(C.samples>0){if(Ke(C)===!1){const y=C.textures,z=C.width,Q=C.height;let ne=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=i.get(C),fe=y.length>1;if(fe)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[xe]);const et=i.get(y[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,z,Q,0,0,z,Q,ne,r.NEAREST),a===!0&&(_t.length=0,F.length=0,_t.push(r.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_t.push(Z),F.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[xe]);const et=i.get(y[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&a){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function $e(C){return Math.min(n.maxSamples,C.samples)}function Ke(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(C){const y=o.render.frame;d.get(C)!==y&&(d.set(C,y),C.update())}function ft(C,y){const z=C.colorSpace,Q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Vn&&z!==Ti&&(tt.getTransfer(z)===lt?(Q!==hi||ne!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=te,this.setTexture2DArray=$,this.setTexture3D=se,this.setTextureCube=q,this.rebindTextures=Ye,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ke}function Jm(r,e){function t(i,n=Ti){let s;const o=tt.getTransfer(n);if(i===Li)return r.UNSIGNED_BYTE;if(i===Zo)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Jo)return r.UNSIGNED_SHORT_5_5_5_1;if(i===rh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===nh)return r.BYTE;if(i===sh)return r.SHORT;if(i===fs)return r.UNSIGNED_SHORT;if(i===Ko)return r.INT;if(i===hn)return r.UNSIGNED_INT;if(i===fi)return r.FLOAT;if(i===Ci)return r.HALF_FLOAT;if(i===oh)return r.ALPHA;if(i===ah)return r.RGB;if(i===hi)return r.RGBA;if(i===lh)return r.LUMINANCE;if(i===hh)return r.LUMINANCE_ALPHA;if(i===kn)return r.DEPTH_COMPONENT;if(i===Hn)return r.DEPTH_STENCIL;if(i===Qo)return r.RED;if(i===ea)return r.RED_INTEGER;if(i===ch)return r.RG;if(i===ta)return r.RG_INTEGER;if(i===ia)return r.RGBA_INTEGER;if(i===Ks||i===Zs||i===Js||i===Qs)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ks)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ks)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xo||i===yo||i===_o||i===Mo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wo||i===So||i===bo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wo||i===So)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===To||i===Eo||i===Ao||i===Co||i===Po||i===Ro||i===Lo||i===Do||i===Io||i===ko||i===No||i===Uo||i===Fo||i===Oo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===To)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ro)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Io)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===er||i===Bo||i===zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===er)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dh||i===Ho||i===Go||i===Wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===er)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Qm extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const l=this._targetRay,a=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],u=d.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return l!==null&&(l.visible=n!==null),a!==null&&(a.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`;class ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Dt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ot({vertexShader:tg,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new O(new pi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sg extends Xn{constructor(e,t){super();const i=this;let n=null,s=1,o=null,l="local-floor",a=1,h=null,d=null,c=null,u=null,f=null,g=null;const v=new ng,m=t.getContextAttributes();let p=null,x=null;const S=[],_=[],I=new le;let P=null;const R=new Xt;R.viewport=new ht;const L=new Xt;L.viewport=new ht;const b=[R,L],M=new Qm;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=S[J];return ae===void 0&&(ae=new Vr,S[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=S[J];return ae===void 0&&(ae=new Vr,S[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=S[J];return ae===void 0&&(ae=new Vr,S[J]=ae),ae.getHandSpace()};function W(J){const ae=_.indexOf(J.inputSource);if(ae===-1)return;const Ee=S[ae];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,h||o),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",te);for(let J=0;J<S.length;J++){const ae=_[J];ae!==null&&(_[J]=null,S[J].disconnect(ae))}D=null,V=null,v.reset(),e.setRenderTarget(p),f=null,u=null,c=null,n=null,x=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",K),n.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),n.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ee=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Hn:kn,Ee=m.stencil?zn:hn);const Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};c=new XRWebGLBinding(n,t),u=c.createProjectionLayer(Ie),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ci(u.textureWidth,u.textureHeight,{format:hi,type:Li,depthTexture:new bh(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(a),h=null,o=await n.requestReferenceSpace(l),ct.setContext(n),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te(J){for(let ae=0;ae<J.removed.length;ae++){const Ee=J.removed[ae],ue=_.indexOf(Ee);ue>=0&&(_[ue]=null,S[ue].disconnect(Ee))}for(let ae=0;ae<J.added.length;ae++){const Ee=J.added[ae];let ue=_.indexOf(Ee);if(ue===-1){for(let Oe=0;Oe<S.length;Oe++)if(Oe>=_.length){_.push(Ee),ue=Oe;break}else if(_[Oe]===null){_[Oe]=Ee,ue=Oe;break}if(ue===-1)break}const Ie=S[ue];Ie&&Ie.connect(Ee)}}const $=new E,se=new E;function q(J,ae,Ee){$.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(Ee.matrixWorld);const ue=$.distanceTo(se),Ie=ae.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,Ye=Ie[14]/(Ie[10]-1),vt=Ie[14]/(Ie[10]+1),Qe=(Ie[9]+1)/Ie[5],_t=(Ie[9]-1)/Ie[5],F=(Ie[8]-1)/Ie[0],$t=(Oe[8]+1)/Oe[0],$e=Ye*F,Ke=Ye*$t,Le=ue/(-F+$t),ft=Le*-F;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ft),J.translateZ(Le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Re=Ye+Le,C=vt+Le,y=$e-ft,z=Ke+(ue-ft),Q=Qe*vt/C*Re,ne=_t*vt/C*Re;J.projectionMatrix.makePerspective(y,z,Q,ne,Re,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ae=J.near,Ee=J.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),M.near=L.near=R.near=ae,M.far=L.far=R.far=Ee,(D!==M.near||V!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,V=M.far),R.layers.mask=J.layers.mask|2,L.layers.mask=J.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const ue=J.parent,Ie=M.cameras;de(M,ue);for(let Oe=0;Oe<Ie.length;Oe++)de(Ie[Oe],ue);Ie.length===2?q(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),ve(J,M,ue)};function ve(J,ae,Ee){Ee===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ps*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return a},this.setFoveation=function(J){a=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Pe=null;function qe(J,ae){if(d=ae.getViewerPose(h||o),g=ae,d!==null){const Ee=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ue=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Oe=0;Oe<Ee.length;Oe++){const Ye=Ee[Oe];let vt=null;if(f!==null)vt=f.getViewport(Ye);else{const _t=c.getViewSubImage(u,Ye);vt=_t.viewport,Oe===0&&(e.setRenderTargetTextures(x,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(x))}let Qe=b[Oe];Qe===void 0&&(Qe=new Xt,Qe.layers.enable(Oe),Qe.viewport=new ht,b[Oe]=Qe),Qe.matrix.fromArray(Ye.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ye.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(vt.x,vt.y,vt.width,vt.height),Oe===0&&(M.matrix.copy(Qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Qe)}const Ie=n.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Oe=c.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,n.renderState)}}for(let Ee=0;Ee<S.length;Ee++){const ue=_[Ee],Ie=S[Ee];ue!==null&&Ie!==void 0&&Ie.update(ue,ae,h||o)}Pe&&Pe(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const ct=new Sh;ct.setAnimationLoop(qe),this.setAnimationLoop=function(J){Pe=J},this.dispose=function(){}}}const Qi=new mi,rg=new at;function og(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_h(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),c(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?a(m,p,x,S):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),S=x.envMap,_=x.envMapRotation;S&&(m.envMap.value=S,Qi.copy(_),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Qi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ag(r,e,t,i){let n={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function a(x,S){const _=S.program;i.uniformBlockBinding(x,_)}function h(x,S){let _=n[x.id];_===void 0&&(g(x),_=d(x),n[x.id]=_,x.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(x,I);const P=e.render.frame;s[x.id]!==P&&(u(x),s[x.id]=P)}function d(x){const S=c();x.__bindingPointIndex=S;const _=r.createBuffer(),I=x.__size,P=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,I,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,_),_}function c(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=n[x.id],_=x.uniforms,I=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let P=0,R=_.length;P<R;P++){const L=Array.isArray(_[P])?_[P]:[_[P]];for(let b=0,M=L.length;b<M;b++){const D=L[b];if(f(D,P,b,I)===!0){const V=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let te=0;te<W.length;te++){const $=W[te],se=v($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,V+K,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,K),K+=se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,S,_,I){const P=x.value,R=S+"_"+_;if(I[R]===void 0)return typeof P=="number"||typeof P=="boolean"?I[R]=P:I[R]=P.clone(),!0;{const L=I[R];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return I[R]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(x){const S=x.uniforms;let _=0;const I=16;for(let R=0,L=S.length;R<L;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,D=b.length;M<D;M++){const V=b[M],W=Array.isArray(V.value)?V.value:[V.value];for(let K=0,te=W.length;K<te;K++){const $=W[K],se=v($),q=_%I,de=q%se.boundary,ve=q+de;_+=de,ve!==0&&I-ve<se.storage&&(_+=I-ve),V.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=se.storage}}}const P=_%I;return P>0&&(_+=I-P),x.__size=_,x.__cache={},this}function v(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function p(){for(const x in n)r.deleteBuffer(n[x]);o=[],n={},s={}}return{bind:a,update:h,dispose:p}}class lg{constructor(e={}){const{canvas:t=Kc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Xi,this.toneMappingExposure=1;const _=this;let I=!1,P=0,R=0,L=null,b=-1,M=null;const D=new ht,V=new ht;let W=null;const K=new Xe(0);let te=0,$=t.width,se=t.height,q=1,de=null,ve=null;const Pe=new ht(0,0,$,se),qe=new ht(0,0,$,se);let ct=!1;const J=new oa;let ae=!1,Ee=!1;const ue=new at,Ie=new at,Oe=new E,Ye=new ht,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function _t(){return L===null?q:1}let F=i;function $t(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:n,stencil:s,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const N="webgl2";if(F=$t(N,w),F===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,Ke,Le,ft,Re,C,y,z,Q,ne,Z,Ae,fe,xe,et,re,ye,De,Ne,_e,Ze,Ge,dt,k;function ce(){$e=new fp(F),$e.init(),Ge=new Jm(F,$e),Ke=new ap(F,$e,e,Ge),Le=new $m(F,$e),Ke.reverseDepthBuffer&&u&&Le.buffers.depth.setReversed(!0),ft=new gp(F),Re=new km,C=new Zm(F,$e,Le,Re,Ke,Ge,ft),y=new hp(_),z=new up(_),Q=new wd(F),dt=new rp(F,Q),ne=new pp(F,Q,ft,dt),Z=new xp(F,ne,Q,ft),Ne=new vp(F,Ke,C),re=new lp(Re),Ae=new Im(_,y,z,$e,Ke,dt,re),fe=new og(_,Re),xe=new Um,et=new Gm($e),De=new sp(_,y,z,Le,Z,f,a),ye=new qm(_,Z,Ke),k=new ag(F,ft,Ke,Le),_e=new op(F,$e,ft),Ze=new mp(F,$e,ft),ft.programs=Ae.programs,_.capabilities=Ke,_.extensions=$e,_.properties=Re,_.renderLists=xe,_.shadowMap=ye,_.state=Le,_.info=ft}ce();const j=new sg(_,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize($,se,!1))},this.getSize=function(w){return w.set($,se)},this.setSize=function(w,N,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,se=N,t.width=Math.floor(w*q),t.height=Math.floor(N*q),H===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set($*q,se*q).floor()},this.setDrawingBufferSize=function(w,N,H){$=w,se=N,q=H,t.width=Math.floor(w*H),t.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Pe)},this.setViewport=function(w,N,H,G){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,N,H,G),Le.viewport(D.copy(Pe).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(qe)},this.setScissor=function(w,N,H,G){w.isVector4?qe.set(w.x,w.y,w.z,w.w):qe.set(w,N,H,G),Le.scissor(V.copy(qe).multiplyScalar(q).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){Le.setScissorTest(ct=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,N=!0,H=!0){let G=0;if(w){let U=!1;if(L!==null){const oe=L.texture.format;U=oe===ia||oe===ta||oe===ea}if(U){const oe=L.texture.type,me=oe===Li||oe===hn||oe===fs||oe===zn||oe===Zo||oe===Jo,we=De.getClearColor(),Se=De.getClearAlpha(),Ue=we.r,ze=we.g,be=we.b;me?(g[0]=Ue,g[1]=ze,g[2]=be,g[3]=Se,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ue,v[1]=ze,v[2]=be,v[3]=Se,F.clearBufferiv(F.COLOR,0,v))}else G|=F.COLOR_BUFFER_BIT}N&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),et.dispose(),Re.dispose(),y.dispose(),z.dispose(),Z.dispose(),dt.dispose(),k.dispose(),Ae.dispose(),j.dispose(),j.removeEventListener("sessionstart",xa),j.removeEventListener("sessionend",ya),qi.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=ft.autoReset,N=ye.enabled,H=ye.autoUpdate,G=ye.needsUpdate,U=ye.type;ce(),ft.autoReset=w,ye.enabled=N,ye.autoUpdate=H,ye.needsUpdate=G,ye.type=U}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){const N=w.target;N.removeEventListener("dispose",Be),yt(N)}function yt(w){Pt(w),Re.remove(w)}function Pt(w){const N=Re.get(w).programs;N!==void 0&&(N.forEach(function(H){Ae.releaseProgram(H)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,G,U,oe){N===null&&(N=vt);const me=U.isMesh&&U.matrixWorld.determinant()<0,we=Wh(w,N,H,G,U);Le.setMaterial(G,me);let Se=H.index,Ue=1;if(G.wireframe===!0){if(Se=ne.getWireframeAttribute(H),Se===void 0)return;Ue=2}const ze=H.drawRange,be=H.attributes.position;let nt=ze.start*Ue,ut=(ze.start+ze.count)*Ue;oe!==null&&(nt=Math.max(nt,oe.start*Ue),ut=Math.min(ut,(oe.start+oe.count)*Ue)),Se!==null?(nt=Math.max(nt,0),ut=Math.min(ut,Se.count)):be!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,be.count));const pt=ut-nt;if(pt<0||pt===1/0)return;dt.setup(U,G,we,H,Se);let Ft,st=_e;if(Se!==null&&(Ft=Q.get(Se),st=Ze,st.setIndex(Ft)),U.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*_t()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(U.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),Le.setLineWidth(Ce*_t()),U.isLineSegments?st.setMode(F.LINES):U.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else U.isPoints?st.setMode(F.POINTS):U.isSprite&&st.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)st.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))st.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,xi=U._multiDrawCounts,rt=U._multiDrawCount,ii=Se?Q.get(Se).bytesPerElement:1,un=Re.get(G).currentProgram.getUniforms();for(let zt=0;zt<rt;zt++)un.setValue(F,"_gl_DrawID",zt),st.render(Ce[zt]/ii,xi[zt])}else if(U.isInstancedMesh)st.renderInstances(nt,pt,U.count);else if(H.isInstancedBufferGeometry){const Ce=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xi=Math.min(H.instanceCount,Ce);st.renderInstances(nt,pt,xi)}else st.render(nt,pt)};function ot(w,N,H){w.transparent===!0&&w.side===jt&&w.forceSinglePass===!1?(w.side=Bt,w.needsUpdate=!0,ys(w,N,H),w.side=ji,w.needsUpdate=!0,ys(w,N,H),w.side=jt):ys(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),p=et.get(H),p.init(N),S.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const we=oe[me];ot(we,H,U),G.add(we)}else ot(oe,H,U),G.add(oe)}),S.pop(),p=null,G},this.compileAsync=function(w,N,H=null){const G=this.compile(w,N,H);return new Promise(U=>{function oe(){if(G.forEach(function(me){Re.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){U(w);return}setTimeout(oe,10)}$e.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ti=null;function vi(w){ti&&ti(w)}function xa(){qi.stop()}function ya(){qi.start()}const qi=new Sh;qi.setAnimationLoop(vi),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){ti=w,j.setAnimationLoop(w),w===null?qi.stop():qi.start()},j.addEventListener("sessionstart",xa),j.addEventListener("sessionend",ya),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,L),p=et.get(w,S.length),p.init(N),S.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(Ie),Ee=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Ee),m=xe.get(w,x.length),m.init(),x.push(m),j.enabled===!0&&j.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&gr(oe,N,-1/0,_.sortObjects)}gr(w,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,ve),Qe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Qe&&De.addToRenderList(m,w),this.info.render.frame++,ae===!0&&re.beginShadows();const H=p.state.shadowsArray;ye.render(H,w,N),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const oe=N.cameras;if(U.length>0)for(let me=0,we=oe.length;me<we;me++){const Se=oe[me];Ma(G,U,w,Se)}Qe&&De.render(w);for(let me=0,we=oe.length;me<we;me++){const Se=oe[me];_a(m,w,Se,Se.viewport)}}else U.length>0&&Ma(G,U,w,N),Qe&&De.render(w),_a(m,w,N);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,N),dt.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ae===!0&&re.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function gr(w,N,H,G){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){G&&Ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);const me=Z.update(w),we=w.material;we.visible&&m.push(w,me,we,H,Ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const me=Z.update(w),we=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ye.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ye.copy(me.boundingSphere.center)),Ye.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(we)){const Se=me.groups;for(let Ue=0,ze=Se.length;Ue<ze;Ue++){const be=Se[Ue],nt=we[be.materialIndex];nt&&nt.visible&&m.push(w,me,nt,H,Ye.z,be)}}else we.visible&&m.push(w,me,we,H,Ye.z,null)}}const oe=w.children;for(let me=0,we=oe.length;me<we;me++)gr(oe[me],N,H,G)}function _a(w,N,H,G){const U=w.opaque,oe=w.transmissive,me=w.transparent;p.setupLightsView(H),ae===!0&&re.setGlobalState(_.clippingPlanes,H),G&&Le.viewport(D.copy(G)),U.length>0&&xs(U,N,H),oe.length>0&&xs(oe,N,H),me.length>0&&xs(me,N,H),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ma(w,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ci(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Ci:Li,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[G.id],me=G.viewport||D;oe.setSize(me.z,me.w);const we=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(K),te=_.getClearAlpha(),te<1&&_.setClearColor(16777215,.5),_.clear(),Qe&&De.render(H);const Se=_.toneMapping;_.toneMapping=Xi;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ae===!0&&re.setGlobalState(_.clippingPlanes,G),xs(w,H,G),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let be=0,nt=N.length;be<nt;be++){const ut=N[be],pt=ut.object,Ft=ut.geometry,st=ut.material,Ce=ut.group;if(st.side===jt&&pt.layers.test(G.layers)){const xi=st.side;st.side=Bt,st.needsUpdate=!0,wa(pt,H,G,Ft,st,Ce),st.side=xi,st.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}_.setRenderTarget(we),_.setClearColor(K,te),Ue!==void 0&&(G.viewport=Ue),_.toneMapping=Se}function xs(w,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,oe=w.length;U<oe;U++){const me=w[U],we=me.object,Se=me.geometry,Ue=G===null?me.material:G,ze=me.group;we.layers.test(H.layers)&&wa(we,N,H,Se,Ue,ze)}}function wa(w,N,H,G,U,oe){w.onBeforeRender(_,N,H,G,U,oe),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(_,N,H,G,w,oe),U.transparent===!0&&U.side===jt&&U.forceSinglePass===!1?(U.side=Bt,U.needsUpdate=!0,_.renderBufferDirect(H,N,G,U,w,oe),U.side=ji,U.needsUpdate=!0,_.renderBufferDirect(H,N,G,U,w,oe),U.side=jt):_.renderBufferDirect(H,N,G,U,w,oe),w.onAfterRender(_,N,H,G,U,oe)}function ys(w,N,H){N.isScene!==!0&&(N=vt);const G=Re.get(w),U=p.state.lights,oe=p.state.shadowsArray,me=U.state.version,we=Ae.getParameters(w,U.state,oe,N,H),Se=Ae.getProgramCacheKey(we);let Ue=G.programs;G.environment=w.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(w.isMeshStandardMaterial?z:y).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Be),Ue=new Map,G.programs=Ue);let ze=Ue.get(Se);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===me)return ba(w,we),ze}else we.uniforms=Ae.getUniforms(w),w.onBeforeCompile(we,_),ze=Ae.acquireProgram(we,Se),Ue.set(Se,ze),G.uniforms=we.uniforms;const be=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=re.uniform),ba(w,we),G.needsLights=Xh(w),G.lightsStateVersion=me,G.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Sa(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=tr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ba(w,N){const H=Re.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Wh(w,N,H,G,U){N.isScene!==!0&&(N=vt),C.resetTextureUnits();const oe=N.fog,me=G.isMeshStandardMaterial?N.environment:null,we=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Vn,Se=(G.isMeshStandardMaterial?z:y).get(G.envMap||me),Ue=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,ut=!!H.morphAttributes.color;let pt=Xi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=_.toneMapping);const Ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=Ft!==void 0?Ft.length:0,Ce=Re.get(G),xi=p.state.lights;if(ae===!0&&(Ee===!0||w!==M)){const Kt=w===M&&G.id===b;re.setState(G,w,Kt)}let rt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==xi.state.version||Ce.outputColorSpace!==we||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==Se||G.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==ze||Ce.morphTargets!==be||Ce.morphNormals!==nt||Ce.morphColors!==ut||Ce.toneMapping!==pt||Ce.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ce.__version=G.version);let ii=Ce.currentProgram;rt===!0&&(ii=ys(G,N,U));let un=!1,zt=!1,Kn=!1;const mt=ii.getUniforms(),di=Ce.uniforms;if(Le.useProgram(ii.program)&&(un=!0,zt=!0,Kn=!0),G.id!==b&&(b=G.id,zt=!0),un||M!==w){Le.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),Jc(ue),Qc(ue),mt.setValue(F,"projectionMatrix",ue)):mt.setValue(F,"projectionMatrix",w.projectionMatrix),mt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Di=mt.map.cameraPosition;Di!==void 0&&Di.setValue(F,Oe.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,zt=!0,Kn=!0)}if(U.isSkinnedMesh){mt.setOptional(F,U,"bindMatrix"),mt.setOptional(F,U,"bindMatrixInverse");const Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),mt.setValue(F,"boneTexture",Kt.boneTexture,C))}U.isBatchedMesh&&(mt.setOptional(F,U,"batchingTexture"),mt.setValue(F,"batchingTexture",U._matricesTexture,C),mt.setOptional(F,U,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",U._indirectTexture,C),mt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",U._colorsTexture,C));const Zn=H.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Ne.update(U,H,ii),(zt||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,mt.setValue(F,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(di.envMap.value=Se,di.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(di.envMapIntensity.value=N.environmentIntensity),zt&&(mt.setValue(F,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&Vh(di,Kn),oe&&G.fog===!0&&fe.refreshFogUniforms(di,oe),fe.refreshMaterialUniforms(di,G,q,se,p.state.transmissionRenderTarget[w.id]),tr.upload(F,Sa(Ce),di,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(tr.upload(F,Sa(Ce),di,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(F,"center",U.center),mt.setValue(F,"modelViewMatrix",U.modelViewMatrix),mt.setValue(F,"normalMatrix",U.normalMatrix),mt.setValue(F,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Kt=G.uniformsGroups;for(let Di=0,Ii=Kt.length;Di<Ii;Di++){const Ta=Kt[Di];k.update(Ta,ii),k.bind(Ta,ii)}}return ii}function Vh(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Xh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,H){Re.get(w.texture).__webglTexture=N,Re.get(w.depthTexture).__webglTexture=H;const G=Re.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=Re.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){L=w,P=N,R=H;let G=!0,U=null,oe=!1,me=!1;if(w){const Se=Re.get(w);if(Se.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Se.__hasExternalTextures)C.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(Se.__boundDepthTexture!==be){if(be!==null&&Re.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const ze=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?U=ze[N][H]:U=ze[N],oe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?U=ze[H]:U=ze,D.copy(w.viewport),V.copy(w.scissor),W=w.scissorTest}else D.copy(Pe).multiplyScalar(q).floor(),V.copy(qe).multiplyScalar(q).floor(),W=ct;if(Le.bindFramebuffer(F.FRAMEBUFFER,U)&&G&&Le.drawBuffers(w,U),Le.viewport(D),Le.scissor(V),Le.setScissorTest(W),oe){const Se=Re.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,H)}else if(me){const Se=Re.get(w.texture),Ue=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.__webglTexture,H||0,Ue)}b=-1},this.readRenderTargetPixels=function(w,N,H,G,U,oe,me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){Le.bindFramebuffer(F.FRAMEBUFFER,we);try{const Se=w.texture,Ue=Se.format,ze=Se.type;if(!Ke.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-G&&H>=0&&H<=w.height-U&&F.readPixels(N,H,G,U,Ge.convert(Ue),Ge.convert(ze),oe)}finally{const Se=L!==null?Re.get(L).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,G,U,oe,me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){const Se=w.texture,Ue=Se.format,ze=Se.type;if(!Ke.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-G&&H>=0&&H<=w.height-U){Le.bindFramebuffer(F.FRAMEBUFFER,we);const be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(N,H,G,U,Ge.convert(Ue),Ge.convert(ze),0);const nt=L!==null?Re.get(L).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,nt);const ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zc(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(be),F.deleteSync(ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(w.image.width*G),oe=Math.floor(w.image.height*G),me=N!==null?N.x:0,we=N!==null?N.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,me,we,U,oe),Le.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,G=null,U=0){w.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let oe,me,we,Se,Ue,ze,be,nt,ut;const pt=w.isCompressedTexture?w.mipmaps[U]:w.image;H!==null?(oe=H.max.x-H.min.x,me=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Ue=H.min.y,ze=H.isBox3?H.min.z:0):(oe=pt.width,me=pt.height,we=pt.depth||1,Se=0,Ue=0,ze=0),G!==null?(be=G.x,nt=G.y,ut=G.z):(be=0,nt=0,ut=0);const Ft=Ge.convert(N.format),st=Ge.convert(N.type);let Ce;N.isData3DTexture?(C.setTexture3D(N,0),Ce=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Ce=F.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Ce=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const xi=F.getParameter(F.UNPACK_ROW_LENGTH),rt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ii=F.getParameter(F.UNPACK_SKIP_PIXELS),un=F.getParameter(F.UNPACK_SKIP_ROWS),zt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Se),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze);const Kn=w.isDataArrayTexture||w.isData3DTexture,mt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const di=Re.get(w),Zn=Re.get(N),Kt=Re.get(di.__renderTarget),Di=Re.get(Zn.__renderTarget);Le.bindFramebuffer(F.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ii=0;Ii<we;Ii++)Kn&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,U,ze+Ii),w.isDepthTexture?(mt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(N).__webglTexture,U,ut+Ii),F.blitFramebuffer(Se,Ue,oe,me,be,nt,oe,me,F.DEPTH_BUFFER_BIT,F.NEAREST)):mt?F.copyTexSubImage3D(Ce,U,be,nt,ut+Ii,Se,Ue,oe,me):F.copyTexSubImage2D(Ce,U,be,nt,ut+Ii,Se,Ue,oe,me);Le.bindFramebuffer(F.READ_FRAMEBUFFER,null),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ce,U,be,nt,ut,oe,me,we,Ft,st,pt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,U,be,nt,ut,oe,me,we,Ft,pt.data):F.texSubImage3D(Ce,U,be,nt,ut,oe,me,we,Ft,st,pt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,be,nt,oe,me,Ft,st,pt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,be,nt,pt.width,pt.height,Ft,pt.data):F.texSubImage2D(F.TEXTURE_2D,U,be,nt,oe,me,Ft,st,pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,xi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ii),F.pixelStorei(F.UNPACK_SKIP_ROWS,un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zt),U===0&&N.generateMipmaps&&F.generateMipmap(Ce),Le.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,G=null,U=0){return w.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,H,G,U)},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){P=0,R=0,L=null,Le.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class ha{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hg extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cg extends Dt{constructor(e=null,t=1,i=1,n,s,o,l,a,h=qt,d=qt,c,u){super(null,o,l,a,h,d,n,s,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl extends ei{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const An=new at,El=new at,Hs=[],Al=new dn,dg=new at,is=new O,ns=new qn;class ug extends O{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,dg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,An),Al.copy(e.boundingBox).applyMatrix4(An),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,An),ns.copy(e.boundingSphere).applyMatrix4(An),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let l=0;l<i.length;l++)i[l]=n[o+l]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,An),El.multiplyMatrices(i,An),is.matrixWorld=El,is.raycast(e,Hs);for(let o=0,l=Hs.length;o<l;o++){const a=Hs[o];a.instanceId=s,a.object=this,t.push(a)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new cg(new Float32Array(n*this.count),n,this.count,Qo,fi));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const l=this.geometry.morphTargetsRelative?1:1-o,a=n*e;s[a]=l,s.set(i,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sn extends Yn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ar=new E,lr=new E,Cl=new at,ss=new sa,Gs=new qn,Xr=new E,Pl=new E;class Xo extends wt{constructor(e=new Tt,t=new sn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)ar.fromBufferAttribute(t,n-1),lr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ar.distanceTo(lr);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(n),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;Cl.copy(n).invert(),ss.copy(e.ray).applyMatrix4(Cl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=h){const p=d.getX(v),x=d.getX(v+1),S=Ws(this,e,ss,a,p,x);S&&t.push(S)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=Ws(this,e,ss,a,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=h){const p=Ws(this,e,ss,a,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ws(this,e,ss,a,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const l=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Ws(r,e,t,i,n,s){const o=r.geometry.attributes.position;if(ar.fromBufferAttribute(o,n),lr.fromBufferAttribute(o,s),t.distanceSqToSegment(ar,lr,Xr,Pl)>i)return;Xr.applyMatrix4(r.matrixWorld);const a=e.ray.origin.distanceTo(Xr);if(!(a<e.near||a>e.far))return{distance:a,point:Pl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const Rl=new E,Ll=new E;class fg extends Xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Rl.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Rl.distanceTo(Ll);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ph extends Dt{constructor(e,t,i,n,s,o,l,a,h){super(e,t,i,n,s,o,l,a,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let l=0,a=s-1,h;for(;l<=a;)if(n=Math.floor(l+(a-l)/2),h=i[n]-o,h<0)l=n+1;else if(h>0)a=n-1;else{a=n;break}if(n=a,i[n]===o)return n/(s-1);const d=i[n],u=i[n+1]-d,f=(o-d)/u;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),l=this.getPoint(s),a=t||(o.isVector2?new le:new E);return a.copy(l).sub(o).normalize(),a}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new E,n=[],s=[],o=[],l=new E,a=new at;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new E)}s[0]=new E,o[0]=new E;let h=Number.MAX_VALUE;const d=Math.abs(n[0].x),c=Math.abs(n[0].y),u=Math.abs(n[0].z);d<=h&&(h=d,i.set(1,0,0)),c<=h&&(h=c,i.set(0,1,0)),u<=h&&i.set(0,0,1),l.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],l),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(n[f-1],n[f]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(At(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(a.makeRotationAxis(l,g))}o[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(At(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(l.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(a.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ca extends gi{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(e,t=new le){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const l=this.aStartAngle+e*s;let a=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=a-this.aX,f=h-this.aY;a=u*d-f*c+this.aX,h=u*c+f*d+this.aY}return i.set(a,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pg extends ca{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let r=0,e=0,t=0,i=0;function n(s,o,l,a){r=s,e=l,t=-3*s+3*o-2*l-a,i=2*s-2*o+l+a}return{initCatmullRom:function(s,o,l,a,h){n(o,l,h*(l-s),h*(a-o))},initNonuniformCatmullRom:function(s,o,l,a,h,d,c){let u=(o-s)/h-(l-s)/(h+d)+(l-o)/d,f=(l-o)/d-(a-o)/(d+c)+(a-l)/c;u*=d,f*=d,n(o,l,u,f)},calc:function(s){const o=s*s,l=o*s;return r+e*s+t*o+i*l}}}const Vs=new E,jr=new da,qr=new da,Yr=new da;class mg extends gi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:a===0&&l===s-1&&(l=s-2,a=1);let h,d;this.closed||l>0?h=n[(l-1)%s]:(Vs.subVectors(n[0],n[1]).add(n[0]),h=Vs);const c=n[l%s],u=n[(l+1)%s];if(this.closed||l+2<s?d=n[(l+2)%s]:(Vs.subVectors(n[s-1],n[s-2]).add(n[s-1]),d=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(c),f),v=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),jr.initNonuniformCatmullRom(h.x,c.x,u.x,d.x,g,v,m),qr.initNonuniformCatmullRom(h.y,c.y,u.y,d.y,g,v,m),Yr.initNonuniformCatmullRom(h.z,c.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(jr.initCatmullRom(h.x,c.x,u.x,d.x,this.tension),qr.initCatmullRom(h.y,c.y,u.y,d.y,this.tension),Yr.initCatmullRom(h.z,c.z,u.z,d.z,this.tension));return i.set(jr.calc(a),qr.calc(a),Yr.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dl(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,l=r*r,a=r*l;return(2*t-2*i+s+o)*a+(-3*t+3*i-2*s-o)*l+s*r+t}function gg(r,e){const t=1-r;return t*t*e}function vg(r,e){return 2*(1-r)*r*e}function xg(r,e){return r*r*e}function ds(r,e,t,i){return gg(r,e)+vg(r,t)+xg(r,i)}function yg(r,e){const t=1-r;return t*t*t*e}function _g(r,e){const t=1-r;return 3*t*t*r*e}function Mg(r,e){return 3*(1-r)*r*r*e}function wg(r,e){return r*r*r*e}function us(r,e,t,i,n){return yg(r,e)+_g(r,t)+Mg(r,i)+wg(r,n)}class Rh extends gi{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){const i=t,n=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(us(e,n.x,s.x,o.x,l.x),us(e,n.y,s.y,o.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sg extends gi{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){const i=t,n=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(us(e,n.x,s.x,o.x,l.x),us(e,n.y,s.y,o.y,l.y),us(e,n.z,s.z,o.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lh extends gi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bg extends gi{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dh extends gi{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(ds(e,n.x,s.x,o.x),ds(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tg extends gi{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(ds(e,n.x,s.x,o.x),ds(e,n.y,s.y,o.y),ds(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),l=s-o,a=n[o===0?o:o-1],h=n[o],d=n[o>n.length-2?n.length-1:o+1],c=n[o>n.length-3?n.length-1:o+2];return i.set(Dl(l,a.x,h.x,d.x,c.x),Dl(l,a.y,h.y,d.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new le().fromArray(n))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:pg,CatmullRomCurve3:mg,CubicBezierCurve:Rh,CubicBezierCurve3:Sg,EllipseCurve:ca,LineCurve:Lh,LineCurve3:bg,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:Tg,SplineCurve:Ih});class Eg extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,l=this.curves[s],a=l.getLength(),h=a===0?0:1-o/a;return l.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,a=o.getPoints(l);for(let h=0;h<a.length;h++){const d=a[h];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Il[n.type]().fromJSON(n))}return this}}class Ag extends Eg{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Lh(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new Dh(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,o){const l=new Rh(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(s,o));return this.curves.push(l),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ih(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+l,t+a,i,n,s,o),this}absarc(e,t,i,n,s,o){return this.absellipse(e,t,i,i,n,s,o),this}ellipse(e,t,i,n,s,o,l,a){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,i,n,s,o,l,a),this}absellipse(e,t,i,n,s,o,l,a){const h=new ca(e,t,i,n,s,o,l,a);if(this.curves.length>0){const c=h.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ua extends Tt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=At(n,0,Math.PI*2);const s=[],o=[],l=[],a=[],h=[],d=1/t,c=new E,u=new le,f=new E,g=new E,v=new E;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),a.push(f.x,f.y,f.z);break;case e.length-1:a.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),a.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=t;x++){const S=i+x*d*n,_=Math.sin(S),I=Math.cos(S);for(let P=0;P<=e.length-1;P++){c.x=e[P].x*_,c.y=e[P].y,c.z=e[P].x*I,o.push(c.x,c.y,c.z),u.x=x/t,u.y=P/(e.length-1),l.push(u.x,u.y);const R=a[3*P+0]*_,L=a[3*P+1],b=a[3*P+0]*I;h.push(R,L,b)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){const _=S+x*e.length,I=_,P=_+e.length,R=_+e.length+1,L=_+1;s.push(I,P,L),s.push(R,L,P)}this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(l,2)),this.setAttribute("normal",new it(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.points,e.segments,e.phiStart,e.phiLength)}}class Wt extends ua{constructor(e=1,t=1,i=4,n=8){const s=new Ag;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Wt(e.radius,e.length,e.capSegments,e.radialSegments)}}class fa extends Tt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],l=[],a=[],h=new E,d=new le;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let c=0,u=3;c<=t;c++,u+=3){const f=i+c/t*n;h.x=e*Math.cos(f),h.y=e*Math.sin(f),o.push(h.x,h.y,h.z),l.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,a.push(d.x,d.y)}for(let c=1;c<=t;c++)s.push(c,c+1,0);this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fe extends Tt{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:a};const h=this;n=Math.floor(n),s=Math.floor(s);const d=[],c=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function x(){const _=new E,I=new E;let P=0;const R=(t-e)/i;for(let L=0;L<=s;L++){const b=[],M=L/s,D=M*(t-e)+e;for(let V=0;V<=n;V++){const W=V/n,K=W*a+l,te=Math.sin(K),$=Math.cos(K);I.x=D*te,I.y=-M*i+m,I.z=D*$,c.push(I.x,I.y,I.z),_.set(te,R,$).normalize(),u.push(_.x,_.y,_.z),f.push(W,1-M),b.push(g++)}v.push(b)}for(let L=0;L<n;L++)for(let b=0;b<s;b++){const M=v[b][L],D=v[b+1][L],V=v[b+1][L+1],W=v[b][L+1];(e>0||b!==0)&&(d.push(M,D,W),P+=3),(t>0||b!==s-1)&&(d.push(D,V,W),P+=3)}h.addGroup(p,P,0),p+=P}function S(_){const I=g,P=new le,R=new E;let L=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let V=1;V<=n;V++)c.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let V=0;V<=n;V++){const K=V/n*a+l,te=Math.cos(K),$=Math.sin(K);R.x=b*$,R.y=m*M,R.z=b*te,c.push(R.x,R.y,R.z),u.push(0,M,0),P.x=te*.5+.5,P.y=$*.5*M+.5,f.push(P.x,P.y),g++}for(let V=0;V<n;V++){const W=I+V,K=D+V;_===!0?d.push(K,K+1,W):d.push(K+1,K,W),L+=3}h.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ai extends Fe{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,l=Math.PI*2){super(0,e,t,i,n,s,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(e){return new ai(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fr extends Tt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],o=[];l(n),h(i),d(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const S=new E,_=new E,I=new E;for(let P=0;P<t.length;P+=3)f(t[P+0],S),f(t[P+1],_),f(t[P+2],I),a(S,_,I,x)}function a(x,S,_,I){const P=I+1,R=[];for(let L=0;L<=P;L++){R[L]=[];const b=x.clone().lerp(_,L/P),M=S.clone().lerp(_,L/P),D=P-L;for(let V=0;V<=D;V++)V===0&&L===P?R[L][V]=b:R[L][V]=b.clone().lerp(M,V/D)}for(let L=0;L<P;L++)for(let b=0;b<2*(P-L)-1;b++){const M=Math.floor(b/2);b%2===0?(u(R[L][M+1]),u(R[L+1][M]),u(R[L][M])):(u(R[L][M+1]),u(R[L+1][M+1]),u(R[L+1][M]))}}function h(x){const S=new E;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(x),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function d(){const x=new E;for(let S=0;S<s.length;S+=3){x.x=s[S+0],x.y=s[S+1],x.z=s[S+2];const _=m(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;o.push(_,1-I)}g(),c()}function c(){for(let x=0;x<o.length;x+=6){const S=o[x+0],_=o[x+2],I=o[x+4],P=Math.max(S,_,I),R=Math.min(S,_,I);P>.9&&R<.1&&(S<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,S){const _=x*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){const x=new E,S=new E,_=new E,I=new E,P=new le,R=new le,L=new le;for(let b=0,M=0;b<s.length;b+=9,M+=6){x.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),P.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),I.copy(x).add(S).add(_).divideScalar(3);const D=m(I);v(P,M+0,x,D),v(R,M+2,S,D),v(L,M+4,_,D)}}function v(x,S,_,I){I<0&&x.x===1&&(o[S]=x.x-1),_.x===0&&_.z===0&&(o[S]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.vertices,e.indices,e.radius,e.details)}}const Xs=new E,js=new E,$r=new E,qs=new Qt;class Cg extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),s=Math.cos(Nn*t),o=e.getIndex(),l=e.getAttribute("position"),a=o?o.count:l.count,h=[0,0,0],d=["a","b","c"],c=new Array(3),u={},f=[];for(let g=0;g<a;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:v,b:m,c:p}=qs;if(v.fromBufferAttribute(l,h[0]),m.fromBufferAttribute(l,h[1]),p.fromBufferAttribute(l,h[2]),qs.getNormal($r),c[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,c[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,c[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let x=0;x<3;x++){const S=(x+1)%3,_=c[x],I=c[S],P=qs[d[x]],R=qs[d[S]],L=`${_}_${I}`,b=`${I}_${_}`;b in u&&u[b]?($r.dot(u[b].normal)<=s&&(f.push(P.x,P.y,P.z),f.push(R.x,R.y,R.z)),u[b]=null):L in u||(u[L]={index0:h[x],index1:h[S],normal:$r.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Xs.fromBufferAttribute(l,v),js.fromBufferAttribute(l,m),f.push(Xs.x,Xs.y,Xs.z),f.push(js.x,js.y,js.z)}this.setAttribute("position",new it(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class pa extends fr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pa(e.radius,e.detail)}}class ma extends fr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ma(e.radius,e.detail)}}class pr extends Tt{constructor(e=.5,t=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const l=[],a=[],h=[],d=[];let c=e;const u=(t-e)/n,f=new E,g=new le;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=c*Math.cos(p),f.y=c*Math.sin(p),a.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}c+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const x=p+m,S=x,_=x+i+1,I=x+i+2,P=x+1;l.push(S,_,P),l.push(_,I,P)}}this.setIndex(l),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class je extends Tt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const a=Math.min(o+l,Math.PI);let h=0;const d=[],c=new E,u=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],S=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&a===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){const P=I/t;c.x=-e*Math.cos(n+P*s)*Math.sin(o+S*l),c.y=e*Math.cos(o+S*l),c.z=e*Math.sin(n+P*s)*Math.sin(o+S*l),g.push(c.x,c.y,c.z),u.copy(c).normalize(),v.push(u.x,u.y,u.z),m.push(P+_,1-S),x.push(h++)}d.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const S=d[p][x+1],_=d[p][x],I=d[p+1][x],P=d[p+1][x+1];(p!==0||o>0)&&f.push(S,_,P),(p!==i-1||a<Math.PI)&&f.push(_,I,P)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends Tt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],a=[],h=[],d=new E,c=new E,u=new E;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,m=f/i*Math.PI*2;c.x=(e+t*Math.cos(m))*Math.cos(v),c.y=(e+t*Math.cos(m))*Math.sin(v),c.z=t*Math.sin(m),l.push(c.x,c.y,c.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(c,d).normalize(),a.push(u.x,u.y,u.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,x=(n+1)*f+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Y extends Yn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Pg extends mr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kr=new at,kl=new E,Nl=new E;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(kl),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),Kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new at,rs=new E,Zr=new E;class Rg extends kh{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),i.position.copy(rs),Zr.copy(i.position),Zr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zr),i.updateMatrixWorld(),n.makeTranslation(-rs.x,-rs.y,-rs.z),Ul.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class Nh extends mr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Rg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Lg extends kh{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dg extends mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ol();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ol(){return performance.now()}const Bl=new at;class zl{constructor(e,t,i=0,n=1/0){this.ray=new sa(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bl),this}intersectObject(e,t=!0,i=[]){return jo(e,this,i,t),i.sort(Hl),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)jo(e[n],this,i,t);return i.sort(Hl),i}}function Hl(r,e){return r.distance-e.distance}function jo(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let o=0,l=s.length;o<l;o++)jo(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);const Ve=2;var A=(r=>(r[r.Rock=0]="Rock",r[r.Earth=1]="Earth",r[r.Gold=2]="Gold",r[r.Dirt=3]="Dirt",r[r.Claimed=4]="Claimed",r[r.Heart=5]="Heart",r[r.Wall=6]="Wall",r[r.Lava=7]="Lava",r[r.Water=8]="Water",r[r.BridgeWood=9]="BridgeWood",r[r.BridgeStone=10]="BridgeStone",r))(A||{}),T=(r=>(r[r.None=0]="None",r[r.Treasury=1]="Treasury",r[r.Lair=2]="Lair",r[r.Hatchery=3]="Hatchery",r[r.Training=4]="Training",r[r.Library=5]="Library",r[r.Portal=6]="Portal",r[r.Guard=7]="Guard",r[r.Workshop=8]="Workshop",r[r.Prison=9]="Prison",r[r.Torture=10]="Torture",r[r.Graveyard=11]="Graveyard",r))(T||{}),Je=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Open=2]="Open",r))(Je||{}),xt=(r=>(r[r.None=0]="None",r[r.Sentry=1]="Sentry",r))(xt||{}),ke=(r=>(r[r.None=0]="None",r[r.Dig=1]="Dig",r[r.Claim=2]="Claim",r[r.Fortify=3]="Fortify",r))(ke||{}),ie=(r=>(r.Scrabbler="scrabbler",r.Skitterwing="skitterwing",r.Rattlekin="rattlekin",r.Emberling="emberling",r.Gravemage="gravemage",r.Thornwitch="thornwitch",r.Bonewretch="bonewretch",r.HeroKnight="hero_knight",r.HeroArcher="hero_archer",r))(ie||{}),B=(r=>(r.Idle="idle",r.Dig="dig",r.Claim="claim",r.Fortify="fortify",r.Mine="mine",r.Haul="haul",r.Sleep="sleep",r.Eat="eat",r.Train="train",r.Research="research",r.Fight="fight",r.Flee="flee",r.Wander="wander",r.Guard="guard",r.AttackMove="attack",r.Craft="craft",r.DragPrisoner="drag",r))(B||{});const kg={0:0,1:50,2:100,3:150,4:200,5:250,6:300,7:175,8:200,9:225,10:275,11:250},Ng=75,Ug=150,Gl=40,Fg=60,Og=120,Cn=35,Jr=48,Jt=3,en=2500,tn=5,qo={scrabbler:{hp:40,speed:3.8,damage:4,goldWage:0,color:6982208,scale:1.55},skitterwing:{hp:50,speed:4,damage:6,goldWage:8,color:4243616,scale:.6},rattlekin:{hp:80,speed:2.6,damage:12,goldWage:15,color:9072720,scale:.75},emberling:{hp:90,speed:2.4,damage:16,goldWage:25,color:14700576,scale:.8},gravemage:{hp:70,speed:2.2,damage:10,goldWage:20,color:7360704,scale:.78},thornwitch:{hp:85,speed:2.5,damage:15,goldWage:22,color:10498144,scale:.78},bonewretch:{hp:55,speed:2.8,damage:11,goldWage:0,color:14209208,scale:.72},hero_knight:{hp:120,speed:2.2,damage:18,goldWage:0,color:12634328,scale:.85},hero_archer:{hp:70,speed:2.5,damage:14,goldWage:0,color:5275808,scale:.7}};function Ys(r){return r==="emberling"}function $s(r){return r==="skitterwing"}function os(r){return r<=1?0:Math.min(.5,(r-1)*.06)}let Bg=1;class zg{id;kind;isHero;isWorker;x;y;wx;wz;hp;maxHp;speed;damage;level=1;job=B.Idle;jobTarget=null;path=[];pathIndex=0;workTimer=0;stunTimer=0;speedBuff=0;hunger=0;sleepNeed=0;mood=72;leaveWarned=!1;efficiencyWarned=!1;selected=!1;trainNeed=0;held=!1;knockedOut=!1;isPrisoner=!1;convertProgress=0;fleeTimer=0;attackCooldown=0;goldCarried=0;alive=!0;mesh;bobPhase;digAnim=0;eatAnim=0;eatAnnounced=!1;restHealAcc=0;facing=0;facingTarget=0;pickaxe=null;selectRing=null;bedKey=null;tintPulse=0;tintMode=null;tintBase=new Map;constructor(e,t,i,n){this.id=Bg++,this.kind=e,this.isHero=e===ie.HeroKnight||e===ie.HeroArcher,this.isWorker=e===ie.Scrabbler;const s=qo[e];this.maxHp=s.hp,this.hp=s.hp,this.speed=s.speed,this.damage=s.damage,this.x=t,this.y=i;const o=n.tileToWorld(t,i);this.wx=o.x,this.wz=o.z,this.bobPhase=Math.random()*Math.PI*2,this.mesh=new gt}setMesh(e){this.mesh=e,this.syncMesh(0)}clampStats(){const e=(t,i=0)=>Number.isFinite(t)?t:i;this.maxHp=Math.max(1,e(this.maxHp,1)),this.hp=Math.max(0,Math.min(this.maxHp,e(this.hp,this.maxHp))),this.hunger=Math.max(0,Math.min(100,e(this.hunger))),this.sleepNeed=Math.max(0,Math.min(100,e(this.sleepNeed))),this.mood=Math.max(0,Math.min(100,e(this.mood,72))),this.wx=e(this.wx),this.wz=e(this.wz),Number.isFinite(this.x)||(this.x=0),Number.isFinite(this.y)||(this.y=0)}syncMesh(e){try{if(this.clampStats(),!this.mesh)return;this.mesh.visible=!0;const t=Number.isFinite(this.wx)?this.wx:0,i=Number.isFinite(this.wz)?this.wz:0;if(this.held){const c=Math.sin(e*10+this.bobPhase)*.08;this.mesh.position.set(t,1.35+c,i),this.mesh.rotation.x=.15,this.mesh.rotation.z=Math.sin(e*6)*.2,this.selectRing&&(this.selectRing.visible=!0,this.selectRing.rotation.z=e*3),this.pickaxe&&(this.pickaxe.visible=!1);return}if(this.knockedOut||this.isPrisoner){const c=Math.sin(e*1.5+this.bobPhase)*.01;this.mesh.position.set(t,.08+c,i),this.mesh.rotation.x=.05,this.mesh.rotation.z=this.knockedOut?1.35:.55,this.selectRing&&(this.selectRing.visible=this.selected||this.knockedOut,this.selectRing.rotation.z=e*1.2),this.pickaxe&&(this.pickaxe.visible=!1);return}const n=this.job===B.Dig||this.job===B.Mine||this.job===B.Claim||this.job===B.Fortify,s=this.job===B.Sleep,o=this.job===B.Eat;o&&(this.eatAnim+=.35);const l=this.kind===ie.Skitterwing?Math.sin(e*6+this.bobPhase)*.25+.4:n?Math.sin(e*14+this.bobPhase)*.06:s?Math.sin(e*2+this.bobPhase)*.02:o?Math.sin(this.eatAnim*14+this.bobPhase)*.1:Math.sin(e*8+this.bobPhase)*.04,a=s?.12:o?.05+Math.abs(Math.sin(this.eatAnim*14))*.08:0;this.mesh.position.set(this.wx,l+a,this.wz);let h=this.facing,d=this.facingTarget-h;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;if(h+=d*Math.min(1,10*(1/60)),this.facing=h,this.mesh.rotation.y=this.facing,this.stunTimer>0?this.mesh.rotation.z=Math.sin(e*20)*.3:s?(this.mesh.rotation.z=.35,this.mesh.rotation.x=.05):o?(this.mesh.rotation.x=Math.sin(this.eatAnim*14)*.35,this.mesh.rotation.z=Math.sin(this.eatAnim*10)*.12):(this.mesh.rotation.z=0,this.mesh.rotation.x=0),this.pickaxe)if(this.job===B.Dig||this.job===B.Mine){this.digAnim+=.45;const u=Math.sin(this.digAnim*11);this.pickaxe.rotation.x=-.9+u*1.35,this.pickaxe.rotation.z=.15+u*.55,this.pickaxe.rotation.y=u*.25,this.pickaxe.visible=!0}else if(n){this.digAnim+=.2;const u=Math.sin(this.digAnim*8);this.pickaxe.rotation.x=-.55+u*.5,this.pickaxe.rotation.z=.15+u*.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=!0}else this.pickaxe.rotation.x=-.45,this.pickaxe.rotation.z=.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=this.isWorker;this.selectRing&&(this.selectRing.visible=n||this.held||this.selected,this.selectRing.rotation.z=e*1.5),this.tintPulse>0&&(this.tintPulse=Math.max(0,this.tintPulse-1/60),this.tintPulse<=0&&(this.tintMode=null)),this.applyTintVisual()}catch(t){console.warn("[underkeep] syncMesh failed",t)}}workEfficiency(){const t=.5+(Number.isFinite(this.mood)?Math.max(0,Math.min(100,this.mood)):50)/100*.7;return Number.isFinite(t)?Math.max(.5,Math.min(1.2,t)):.85}pulseTint(e,t=.85){this.tintMode=e,this.tintPulse=Math.max(this.tintPulse,t)}applyTintVisual(){if(this.mesh)try{const e=[];this.mesh.traverse(t=>{const i=t.material;if(i)if(Array.isArray(i))for(const n of i)n instanceof Y&&e.push(n);else i instanceof Y&&e.push(i)});for(const t of e){this.tintBase.has(t)||this.tintBase.set(t,{emissive:t.emissive.clone(),intensity:t.emissiveIntensity});const i=this.tintBase.get(t);if(this.tintPulse>0&&this.tintMode){const n=.55+.45*Math.sin(this.tintPulse*14);this.tintMode==="heal"?(t.emissive.setRGB(.15*n,.95*n,.45*n),t.emissiveIntensity=Math.max(i.intensity,.85+n*.7)):(t.emissive.setRGB(1*n,.55*n,.12*n),t.emissiveIntensity=Math.max(i.intensity,.9+n*.75))}else t.emissive.copy(i.emissive),t.emissiveIntensity=i.intensity}}catch(e){console.warn("[underkeep] tint failed",e)}}tilePos(){return{x:this.x,y:this.y}}setPath(e){this.path=e??[],this.pathIndex=0}faceToward(e,t){const i=e-this.wx,n=t-this.wz;i*i+n*n<1e-6||(this.facingTarget=Math.atan2(i,n))}moveAlongPath(e,t){if(this.stunTimer>0||this.held||this.knockedOut||this.isPrisoner)return!1;if(this.pathIndex>=this.path.length)return!0;const i=this.path[this.pathIndex],n=t.tileToWorld(i.x,i.y),s=this.speed*(this.speedBuff>0?1.8:1)*Ve,o=n.x-this.wx,l=n.z-this.wz,a=Math.hypot(o,l);if(a<.12)return this.wx=n.x,this.wz=n.z,this.x=i.x,this.y=i.y,this.pathIndex++,this.pathIndex>=this.path.length;const h=Math.min(a,s*e);this.wx+=o/a*h,this.wz+=l/a*h,this.faceToward(n.x,n.z);let d=this.facingTarget-this.facing;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;this.facing+=d*Math.min(1,12*e);const c=t.worldToTile(this.wx,this.wz);return t.inBounds(c.x,c.y)&&(this.x=c.x,this.y=c.y),!1}takeDamage(e){this.alive&&(this.hp-=e,this.hp<=0&&(this.hp=0,this.alive=!1))}}const Uh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hg=new aa(-1,1,1,-1,0,1);class Gg extends Tt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const Wg=new Gg;class Fh{constructor(e){this._mesh=new O(Wg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Yo extends gs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=or.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wl extends gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Vg extends gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vl{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yo(Uh),this.copyPass.material.blending=Ai,this.clock=new Ig}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Wl!==void 0&&(o instanceof Wl?i=!0:o instanceof Vg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xl extends gs{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const Xg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cn extends gs{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(s,o,{type:Ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new ci(s,o,{type:Ci});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new ci(s,o,{type:Ci});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const l=Xg;this.highPassUniforms=or.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Uh;this.copyUniforms=or.clone(d.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:so,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new Vt,this.fsQuad=new Fh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=cn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=cn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}cn.BlurDirectionX=new le(1,0);cn.BlurDirectionY=new le(0,1);const Wn=new Map;function ln(r,e,t){const i=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function jg(r,e,t){const i=Math.floor(r),n=Math.floor(e),s=r-i,o=e-n,l=s*s*(3-2*s),a=o*o*(3-2*o),h=ln(i,n,t),d=ln(i+1,n,t),c=ln(i,n+1,t),u=ln(i+1,n+1,t);return h+(d-h)*l+(c-h)*a+(h-d-c+u)*l*a}function ir(r,e,t,i=4){let n=.5,s=1,o=0,l=0;for(let a=0;a<i;a++)o+=n*jg(r*s,e*s,t+a*19),l+=n,n*=.5,s*=2;return o/l}function ga(r){const e=document.createElement("canvas");e.width=r,e.height=r;const t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(r,r);return{canvas:e,ctx:t,data:i}}function Oh(r,e=2){const t=new Ph(r);return t.wrapS=t.wrapT=nr,t.repeat.set(e,e),t.colorSpace=Ut,t.magFilter=li,t.minFilter=Wi,t.generateMipmaps=!0,t.needsUpdate=!0,t}function Bh(r,e,t,i,n,s,o=255){const l=(t*r.width+e)*4;r.data[l]=i,r.data[l+1]=n,r.data[l+2]=s,r.data[l+3]=o}function Qr(r,e,t){return r+(e-r)*t}function Pn(r,e,t){return[Qr(r[0],e[0],t),Qr(r[1],e[1],t),Qr(r[2],e[2],t)]}function Yt(r,e){const t=JSON.stringify(e)+`|${r}`,i=Wn.get(t);if(i)return i;const{canvas:n,ctx:s,data:o}=ga(r),l=e.scale??4,a=e.contrast??1;for(let d=0;d<r;d++)for(let c=0;c<r;c++){const u=c/r*l,f=d/r*l;let g=ir(u,f,e.seed);g=(g-.5)*a+.5,g=Math.max(0,Math.min(1,g));let v=Pn(e.dark,e.base,g);if(g>.62&&(v=Pn(v,e.light,(g-.62)/.38)),e.bricks){const{bw:m,bh:p,mortar:x,mortarW:S}=e.bricks,I=Math.floor(d/p)%2===0?0:m*.5,P=(c+I)%m,R=d%p;if(P<S||R<S)v=x;else{const L=Math.floor((c+I)/m),b=Math.floor(d/p),M=ln(L,b,e.seed+9)*.18-.09;v=[Math.max(0,Math.min(255,v[0]*(1+M))),Math.max(0,Math.min(255,v[1]*(1+M))),Math.max(0,Math.min(255,v[2]*(1+M)))]}}if(e.veins){const m=ir(u*e.veins.scale,f*e.veins.scale,e.veins.seed);if(m>e.veins.thresh){const p=(m-e.veins.thresh)/(1-e.veins.thresh);v=Pn(v,e.veins.color,Math.min(1,p*1.4))}}if(e.speck&&ln(c,d,e.seed+3)<e.speck){const m=e.speckColor??e.light;v=Pn(v,m,.55)}if(e.cracks&&Math.abs(ir(u*2.5,f*.4,e.seed+40)-.5)<.035&&(v=Pn(v,e.dark,.7)),e.borderDark){const m=Math.min(c,d,r-1-c,r-1-d)/r;if(m<e.borderDark){const p=1-m/e.borderDark;v=Pn(v,e.dark,p*.55)}}Bh(o,c,d,v[0]|0,v[1]|0,v[2]|0)}s.putImageData(o,0,0);const h=Oh(n,1);return Wn.set(t,h),h}function qg(r,e=1){const t=`bump:${r.image.width}:${e}:${r.uuid}`,i=Wn.get(t);if(i)return i;const n=r.image,s=n.width,{canvas:o,ctx:l,data:a}=ga(s),d=n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,s,s);for(let u=0;u<s*s;u++){const f=d.data[u*4],g=d.data[u*4+1],v=d.data[u*4+2];let m=(.299*f+.587*g+.114*v)*e;m=Math.max(0,Math.min(255,m));const p=u*4;a.data[p]=m,a.data[p+1]=m,a.data[p+2]=m,a.data[p+3]=255}l.putImageData(a,0,0);const c=Oh(o,r.repeat.x);return c.colorSpace=Ti,Wn.set(t,c),c}function Yg(){return Yt(64,{seed:11,base:[168,108,52],dark:[92,52,22],light:[210,150,88],scale:5.5,contrast:1.45,speck:.05,speckColor:[140,90,40],cracks:!0})}function $g(){return Yt(64,{seed:22,base:[118,124,140],dark:[58,62,78],light:[175,182,198],scale:3.6,contrast:1.25,cracks:!0,speck:.05,speckColor:[210,215,230]})}function Kg(){return Yt(64,{seed:33,base:[88,58,36],dark:[42,28,16],light:[118,84,52],scale:6,contrast:1.25,speck:.07,speckColor:[70,50,30]})}function zh(){return Yt(64,{seed:44,base:[168,158,142],dark:[110,100,88],light:[210,200,185],scale:2.8,contrast:1.25,bricks:{bw:20,bh:14,mortar:[52,44,38],mortarW:2}})}function Zg(){return Yt(64,{seed:55,base:[128,122,112],dark:[70,66,60],light:[168,162,150],scale:3,contrast:1.1,bricks:{bw:14,bh:12,mortar:[42,40,38],mortarW:2},borderDark:.08})}function Jg(){return Yt(64,{seed:66,base:[180,120,28],dark:[90,50,10],light:[255,220,90],scale:4,contrast:1.5,veins:{color:[255,240,110],scale:1.25,thresh:.42,seed:99},speck:.18,speckColor:[255,250,180]})}function Qg(){return Yt(64,{seed:77,base:[90,40,48],dark:[40,16,22],light:[140,60,70],scale:3.8,contrast:1.2,veins:{color:[180,40,50],scale:1.2,thresh:.62,seed:12}})}function e0(){return Yt(64,{seed:81,base:[100,78,42],dark:[52,38,20],light:[180,140,60],scale:3.2,contrast:1.15,bricks:{bw:16,bh:16,mortar:[90,70,30],mortarW:1},veins:{color:[220,180,60],scale:.9,thresh:.7,seed:3}})}function t0(){return Yt(64,{seed:82,base:[92,62,88],dark:[48,30,50],light:[130,90,120],scale:5,contrast:1.15,speck:.08,speckColor:[160,120,140]})}function i0(){return Yt(64,{seed:83,base:[100,110,50],dark:[50,58,24],light:[150,160,80],scale:5.5,contrast:1.2,speck:.1,speckColor:[180,170,70]})}function eo(){return Yt(64,{seed:84,base:[110,70,60],dark:[55,35,30],light:[150,100,85],scale:4,contrast:1.25,cracks:!0,bricks:{bw:20,bh:12,mortar:[40,28,24],mortarW:1}})}function n0(){return Yt(64,{seed:85,base:[58,68,110],dark:[28,34,60],light:[90,105,160],scale:3.5,contrast:1.15,veins:{color:[140,160,220],scale:2.2,thresh:.68,seed:7}})}function s0(){return Yt(64,{seed:86,base:[70,40,100],dark:[30,16,48],light:[130,70,180],scale:4.5,contrast:1.3,veins:{color:[180,100,255],scale:1.5,thresh:.55,seed:21}})}function r0(r,e=1){return qg(r,e)}function o0(r,e){const t=`decal:${r}:${e.join(",")}`,i=Wn.get(t);if(i)return i;const n=64,{canvas:s,ctx:o,data:l}=ga(n),a=n/2,h=n/2;for(let c=0;c<n;c++)for(let u=0;u<n;u++){const f=(u+.5-a)/a,g=(c+.5-h)/h,v=Math.hypot(f,g);let m=0,p=e;if(r==="goldRing"){const x=Math.abs(v-.72);m=x<.12?(1-x/.12)*220:0,v<.35&&(m=Math.max(m,(1-v/.35)*90)),(Math.abs(f)>.78&&Math.abs(g)<.2||Math.abs(g)>.78&&Math.abs(f)<.2)&&(m=Math.max(m,180))}else if(r==="bedding"){const x=Math.sin((u+c)*.35)*.5+.5;m=v<.85?(1-v/.85)*(120+x*80):0}else if(r==="warmSpot")m=v<.9?Math.pow(1-v/.9,1.2)*180:0,ln(u,c,5)>.92&&v<.7&&(m=220,p=[220,200,80]);else if(r==="worn"){const x=ir(u*.12,c*.12,9);m=v<.9&&x>.45?(x-.45)*280:0}else if(r==="runes"){m=0,v>.55&&v<.78&&(m=160);const x=Math.atan2(g,f),S=Math.abs(x/(Math.PI*2)*8%1-.5);v>.35&&v<.85&&S<.06&&(m=210),v<.22&&(m=140)}else if(r==="swirl"){const x=Math.atan2(g,f),S=Math.sin(x*3+v*10);m=v<.92?Math.max(0,S)*(1-v)*255:0,v<.2&&(m=Math.max(m,200))}Bh(l,u,c,p[0],p[1],p[2],Math.max(0,Math.min(255,m|0)))}o.putImageData(l,0,0);const d=new Ph(s);return d.colorSpace=Ut,d.needsUpdate=!0,Wn.set(t,d),d}const jl=new Map,ql=new Map;function vs(r,e){let t=jl.get(r);return t||(t=e(),jl.set(r,t)),t}function Dn(r,e){let t=ql.get(r);return t||(t=e(),ql.set(r,t)),t}function va(r,e,t,i=.45){const n=r.attributes.position,s=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){const l=n.getY(o),a=Math.max(0,Math.min(1,(l-e)/(t*.45))),h=1-i*(1-a)*(1-a);s[o*3]=h,s[o*3+1]=h,s[o*3+2]=h}r.setAttribute("color",new ei(s,3))}function a0(r){const e=new gt,i={[T.Treasury]:13938752,[T.Lair]:11563168,[T.Hatchery]:10006592,[T.Training]:12607568,[T.Library]:5271752,[T.Portal]:10506448,[T.Guard]:7372944,[T.Workshop]:10516544,[T.Prison]:6318192,[T.Torture]:10502224,[T.Graveyard]:5271648}[r]??12101768,n=r===T.None?2761752:r===T.Treasury?4861968:r===T.Lair?4198440:r===T.Hatchery?3162128:r===T.Training?4198416:r===T.Library?1054792:r===T.Guard?2107440:r===T.Workshop?4204560:r===T.Prison?2107440:r===T.Torture?4198424:r===T.Graveyard?1585192:3149896,s=new Y({color:2761240,metalness:.04,roughness:.95}),o=new O(new Te(Ve*.98,.18,Ve*.98),s);o.position.y=.02,o.receiveShadow=!0,e.add(o);const l=new Y({color:i,metalness:r===T.Treasury?.45:r===T.Portal?.35:.18,roughness:r===T.Treasury?.4:.62,emissive:n,emissiveIntensity:r===T.None?.14:.28}),a=Ve*.44,h=.06,d=[-.5,.5];for(const u of d)for(const f of d){const g=new O(new Te(a,.12,a),l);g.position.set(u*(a/2+h),.16,f*(a/2+h)),g.receiveShadow=!0,g.castShadow=!1,e.add(g)}const c=new O(new Te(Ve*.99,.025,Ve*.99),new Y({color:13680808,metalness:.12,roughness:.55,emissive:3813408,emissiveIntensity:.1}));return c.position.y=.11,e.add(c),e}function l0(){return vs("floor",()=>{const r=new Te(Ve*.98,.28,Ve*.98,2,1,2);return r.translate(0,.02,0),r})}function Yl(r=!1){return vs(r?"wall-fort":"wall",()=>{const e=new Te(Ve*.96,2.35,Ve*.96,3,4,3),t=e.attributes.position;for(let i=0;i<t.count;i++){let n=t.getX(i),s=t.getY(i),o=t.getZ(i);r?(s>.95&&(n*=.94,o*=.94),n+=Math.sin(i*.7)*.012,o+=Math.cos(i*.9)*.012):(s>.85&&(n*=.88,o*=.88),n+=Math.sin(i*1.7)*.04,o+=Math.cos(i*2.1)*.04,s>-.3&&s<.5&&(s+=Math.sin(i*.9)*.06)),t.setXYZ(i,n,s,o)}return t.needsUpdate=!0,va(e,-1.175,2.35,r?.35:.5),e.computeVertexNormals(),e.translate(0,1.175,0),e})}function h0(){return vs("rock-v2",()=>{const r=new Te(Ve*.99,3.55,Ve*.99,3,5,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*3.1)*.045),e.setY(t,e.getY(t)+Math.cos(t*2.3)*.035),e.setZ(t,e.getZ(t)+Math.sin(t*4.7)*.045);return e.needsUpdate=!0,va(r,-1.775,3.55,.62),r.computeVertexNormals(),r.translate(0,1.775,0),r})}function c0(){return vs("gold",()=>{const r=new Te(Ve*.96,2.35,Ve*.96,3,4,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*5.1)*.05),e.setZ(t,e.getZ(t)+Math.cos(t*3.9)*.05),e.getY(t)>.9&&(e.setX(t,e.getX(t)*.9),e.setZ(t,e.getZ(t)*.9));return e.needsUpdate=!0,va(r,-1.175,2.35,.4),r.computeVertexNormals(),r.translate(0,1.175,0),r})}function d0(r){const e=Math.round(Math.max(.25,r)*4)/4;return vs(`edge-${e.toFixed(2)}`,()=>{const t=Ve*.5*.97,i=e,n=[new E(-t,i,-t),new E(t,i,-t),new E(t,i,t),new E(-t,i,t),new E(-t,i,-t)];return new Tt().setFromPoints(n)})}function u0(){const r=new gt,e=new O(new pa(.75,2),new Y({color:6952992,emissive:16724040,emissiveIntensity:.55,metalness:.35,roughness:.4}));e.position.y=1.05,r.add(e);const t=new O(new Ri(1.05,.1,10,32),new Y({color:3807264,emissive:11149360,emissiveIntensity:.45,metalness:.55,roughness:.35}));t.rotation.x=Math.PI/2,t.position.y=1.05,r.add(t);const i=new O(new Fe(1.05,1.25,.45,12),new Y({color:5915960,metalness:.35,roughness:.55,map:zh()}));i.position.y=.25,r.add(i);const n=new O(new fa(1.55,24),new Y({color:4853776,emissive:16723992,emissiveIntensity:.55,metalness:.2,roughness:.7,transparent:!0,opacity:.85}));n.rotation.x=-Math.PI/2,n.position.y=.13,r.add(n);for(let o=0;o<6;o++){const l=o/6*Math.PI*2,a=new O(new je(.06+o%3*.02,6,6),new Y({color:16736288,emissive:16728080,emissiveIntensity:1.2,roughness:1}));a.position.set(Math.cos(l)*1.15,.22,Math.sin(l)*1.15),r.add(a)}const s=new Nh(16728152,1.15,8,2);return s.position.y=1.35,s.castShadow=!1,r.add(s),r.heartCore=e,r.heartLight=s,r}function f0(r=!0){const e=new gt,t=new O(new Te(.12,.08,.18),new Y({color:4866104,metalness:.5,roughness:.5}));t.position.set(0,1.35,0),e.add(t);const i=new O(new Fe(.045,.065,.55,6),new Y({color:5914656,roughness:.85}));i.position.y=1.55,e.add(i);const n=new O(new ai(.11,.28,6),new Y({color:16755264,emissive:16742144,emissiveIntensity:1.5,roughness:1}));n.position.y=1.92,e.add(n);const s=new O(new je(.08,6,6),new Vt({color:16746544,transparent:!0,opacity:.55}));if(s.position.y=1.82,e.add(s),r){const o=new Nh(16750916,3.2,14,1.6);o.position.y=1.9,o.castShadow=!1,e.add(o),e.torchLight=o}return e.flame=n,e}function Ct(r,e,t,i,n,s=0,o=0,l=0){const a=new O(r,e);return a.position.set(t,i,n),a.rotation.set(s,o,l),a.castShadow=!0,a}function p0(r,e,t){const i=new gt,n=new Y({color:r,metalness:.18,roughness:.55,emissive:r,emissiveIntensity:.1});if(t==="scrabbler"){const s=new O(new je(.36,12,10),n);s.scale.set(1.2,.75,1.3),s.position.y=.38,s.castShadow=!0,i.add(s);const o=new O(new je(.32,10,8),new Y({color:4876336,metalness:.25,roughness:.45,emissive:2109456,emissiveIntensity:.15}));o.scale.set(1.15,.55,1.05),o.position.set(0,.5,-.06),i.add(o);const l=new O(new je(.2,10,8),new Y({color:9089104,metalness:.15,roughness:.55}));l.position.set(0,.44,.36),l.castShadow=!0,i.add(l);const a=new Y({color:16772744,emissive:16763972,emissiveIntensity:.85});for(const x of[-1,1]){const S=new O(new je(.05,6,6),a);S.position.set(x*.09,.48,.5),i.add(S)}const h=new Y({color:3819560,roughness:.7});for(const x of[-1,1]){for(const _ of[-.14,.16])i.add(Ct(new Fe(.035,.028,.32,5),h,x*.32,.14,_,0,0,x*.7));const S=new O(new ai(.08,.34,5),new Y({color:13684904,metalness:.7,roughness:.28}));S.rotation.z=x*.85,S.rotation.x=-.4,S.position.set(x*.32,.32,.42),S.castShadow=!0,i.add(S)}const d=new gt,c=new O(new Wt(.07,.28,3,6),new Y({color:5926960,roughness:.65}));c.position.set(0,.18,0),c.rotation.z=.35,d.add(c);const u=new gt,f=new O(new Fe(.04,.05,.85,6),new Y({color:8015912,roughness:.85}));f.position.y=.35,u.add(f);const g=new O(new Te(.48,.12,.12),new Y({color:13687016,metalness:.9,roughness:.22,emissive:4214880,emissiveIntensity:.25}));g.position.set(.08,.78,0),u.add(g);const v=new O(new ai(.08,.28,6),new Y({color:15266047,metalness:.85,roughness:.2}));v.rotation.z=Math.PI/2,v.position.set(.38,.78,0),u.add(v);const m=v.clone();m.rotation.z=-Math.PI/2,m.position.set(-.22,.78,0),u.add(m),u.position.set(.05,.05,.05),d.add(u),d.position.set(.42,.38,.22),d.rotation.z=.2,d.rotation.x=-.45,i.add(d),i.pickaxe=d;const p=new O(new pr(.42,.52,20),new Vt({color:11067488,transparent:!0,opacity:.75,side:jt,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.05,p.visible=!1,i.add(p),i.selectRing=p}else if(t==="skitterwing"){const s=new O(new je(.2,10,8),n);s.position.y=.95,s.castShadow=!0,i.add(s);const o=new O(new je(.16,8,8),new Y({color:2785392,metalness:.2,roughness:.5,emissive:1065008,emissiveIntensity:.2}));o.scale.set(.9,.8,1.3),o.position.set(0,.88,-.22),i.add(o);const l=new O(new je(.12,8,8),new Y({color:5296304,roughness:.5}));l.position.set(0,1,.22),i.add(l);for(const d of[-1,1]){const c=new O(new Fe(.012,.01,.22,4),new Y({color:2130016}));c.position.set(d*.06,1.14,.28),c.rotation.z=d*.4,c.rotation.x=-.5,i.add(c)}const a=new Y({color:11075560,emissive:3180656,emissiveIntensity:.4,transparent:!0,opacity:.7,side:jt,metalness:.1,roughness:.35});for(const d of[-1,1]){const c=new O(new pi(.75,.38),a);c.position.set(d*.38,1,0),c.rotation.y=d*.35,c.rotation.z=d*.25,i.add(c);const u=new O(new pi(.5,.28),a);u.position.set(d*.32,.88,-.08),u.rotation.y=d*.5,i.add(u)}const h=new Y({color:2121808,roughness:.65});for(const d of[-1,1])i.add(Ct(new Fe(.02,.015,.35,4),h,d*.14,.7,.05,.4,0,d*.5))}else if(t==="rattlekin"){const s=new Y({color:13154456,metalness:.15,roughness:.45,emissive:4206608,emissiveIntensity:.08}),o=new O(new Wt(.22,.35,4,8),s);o.position.y=.7,o.castShadow=!0,i.add(o);for(let c=0;c<3;c++){const u=new O(new Ri(.2,.025,4,10,Math.PI),s);u.rotation.x=Math.PI/2,u.position.set(0,.55+c*.12,.05),i.add(u)}const l=new O(new je(.2,10,8),s);l.scale.set(1,1.05,1.15),l.position.y=1.2,l.castShadow=!0,i.add(l);const a=new O(new Te(.22,.08,.16),s);a.position.set(0,1.05,.1),i.add(a);const h=new Y({color:2101256,emissive:16736288,emissiveIntensity:.7});for(const c of[-1,1]){const u=new O(new je(.045,6,6),h);u.position.set(c*.08,1.24,.16),i.add(u)}for(const c of[-1,1])i.add(Ct(new Fe(.045,.035,.45,5),s,c*.3,.75,0,0,0,c*.25)),i.add(Ct(new Fe(.05,.04,.4,5),s,c*.12,.28,0,.15,0,c*.1));const d=new O(new Te(.06,.5,.12),new Y({color:8949920,metalness:.8,roughness:.25}));d.position.set(.42,.7,.05),d.rotation.z=-.3,i.add(d)}else if(t==="emberling"){const s=new Y({color:14698528,emissive:16728088,emissiveIntensity:.65,metalness:.25,roughness:.35}),o=new O(new Wt(.26,.45,6,10),s);o.position.y=.7,o.castShadow=!0,i.add(o);const l=new O(new je(.2,10,8),s);l.position.y=1.2,i.add(l);const a=new O(new ai(.14,.42,6),new Y({color:16748576,emissive:16736272,emissiveIntensity:.95}));a.position.y=1.5,i.add(a);for(let d=0;d<3;d++){const c=new O(new ai(.06,.22,5),new Y({color:16740368,emissive:16728072,emissiveIntensity:.8}));c.position.set((d-1)*.12,1.38,-.12),c.rotation.x=-.5,i.add(c)}for(const d of[-1,1]){i.add(Ct(new Fe(.06,.04,.4,6),s,d*.32,.75,0,0,0,d*.45));const c=new O(new je(.08,6,6),new Y({color:16755264,emissive:16736272,emissiveIntensity:1}));c.position.set(d*.42,.55,.05),i.add(c)}const h=new O(new ai(.32,.35,8,1,!0),new Y({color:16732176,emissive:16723976,emissiveIntensity:.7,transparent:!0,opacity:.75,side:jt}));h.position.y=.28,i.add(h)}else if(t==="gravemage"){const s=new Y({color:4862080,metalness:.2,roughness:.55,emissive:3151968,emissiveIntensity:.25}),o=new O(new Wt(.24,.5,5,10),s);o.position.y=.7,o.castShadow=!0,i.add(o);const l=new O(new je(.22,10,8),new Y({color:2758728,roughness:.7,emissive:4202624,emissiveIntensity:.2}));l.position.y=1.22,i.add(l);const a=new O(new je(.12,8,6),new Y({color:13154520,roughness:.5}));a.position.set(0,1.18,.12),i.add(a);const h=new Y({color:11167487,emissive:8930559,emissiveIntensity:.9});for(const u of[-1,1]){const f=new O(new je(.035,6,6),h);f.position.set(u*.06,1.2,.2),i.add(f)}for(const u of[-1,1])i.add(Ct(new Fe(.045,.035,.4,5),s,u*.28,.7,0,0,0,u*.2)),i.add(Ct(new Fe(.05,.04,.38,5),s,u*.1,.28,0));const d=new O(new Fe(.03,.04,1.3,6),new Y({color:6965288,roughness:.7}));d.position.set(.38,.75,.05),i.add(d);const c=new O(new je(.1,10,8),new Y({color:8939263,emissive:11167487,emissiveIntensity:.85,metalness:.3,roughness:.35}));c.position.set(.38,1.45,.05),i.add(c)}else if(t==="thornwitch"){const s=new Y({color:10498144,metalness:.25,roughness:.45,emissive:6295592,emissiveIntensity:.35}),o=new O(new Wt(.22,.5,5,10),s);o.position.y=.72,o.castShadow=!0,i.add(o);const l=new O(new je(.18,10,8),new Y({color:13148336,roughness:.5}));l.position.y=1.22,i.add(l);const a=new Y({color:3149848,emissive:16719936,emissiveIntensity:.55});for(let d=0;d<5;d++){const c=new O(new ai(.04,.2,4),a),u=d/5*Math.PI*2;c.position.set(Math.cos(u)*.12,1.38,Math.sin(u)*.12),i.add(c)}for(const d of[-1,1])i.add(Ct(new Fe(.04,.03,.42,5),s,d*.28,.72,0,0,0,d*.35)),i.add(Ct(new Fe(.045,.035,.4,5),s,d*.1,.28,0));const h=new O(new Fe(.02,.015,.9,4),new Y({color:4198432,roughness:.6}));h.position.set(.4,.7,.05),h.rotation.z=-.4,i.add(h)}else if(t==="bonewretch"){const s=new Y({color:14209208,metalness:.2,roughness:.4,emissive:3162136,emissiveIntensity:.15}),o=new O(new Wt(.16,.32,4,8),s);o.position.y=.68,o.castShadow=!0,i.add(o);for(let h=0;h<3;h++){const d=new O(new Ri(.15,.02,4,10,Math.PI),s);d.rotation.x=Math.PI/2,d.position.set(0,.55+h*.1,.04),i.add(d)}const l=new O(new je(.17,10,8),s);l.scale.set(1,1.1,1.15),l.position.y=1.15,i.add(l);const a=new Y({color:1056776,emissive:8453952,emissiveIntensity:.95});for(const h of[-1,1]){const d=new O(new je(.04,6,6),a);d.position.set(h*.07,1.18,.14),i.add(d),i.add(Ct(new Fe(.03,.025,.42,4),s,h*.26,.7,0,0,0,h*.3)),i.add(Ct(new Fe(.035,.03,.38,4),s,h*.1,.26,0,.1,0,h*.08))}}else if(t==="hero_knight"||t==="hero"){const s=new Y({color:r||12634328,metalness:.75,roughness:.28}),o=new O(new Wt(.26,.5,6,10),s);o.position.y=.72,o.castShadow=!0,i.add(o);const l=new Y({color:11055296,metalness:.8,roughness:.25});for(const f of[-1,1]){const g=new O(new je(.14,8,6),l);g.scale.set(1.1,.7,1),g.position.set(f*.28,1,0),i.add(g),i.add(Ct(new Fe(.07,.055,.4,6),s,f*.34,.7,0,0,0,f*.2))}const a=new O(new je(.2,10,8),s);a.position.y=1.28,i.add(a);const h=new O(new Te(.22,.06,.08),new Y({color:1712176,metalness:.5,roughness:.4}));h.position.set(0,1.28,.16),i.add(h);const d=new O(new Te(.04,.22,.16),new Y({color:11542568,roughness:.6}));d.position.set(0,1.48,0),i.add(d);for(const f of[-1,1])i.add(Ct(new Fe(.08,.06,.4,6),s,f*.1,.28,0));const c=new O(new Te(.05,.55,.1),new Y({color:14213360,metalness:.9,roughness:.2}));c.position.set(.4,.75,.05),c.rotation.z=-.25,i.add(c);const u=new O(new Te(.14,.04,.06),new Y({color:9068592,metalness:.4,roughness:.5}));u.position.set(.38,.5,.05),i.add(u)}else if(t==="hero_archer"){const s=new Y({color:r||5275808,metalness:.15,roughness:.65}),o=new O(new Wt(.22,.45,6,10),s);o.position.y=.68,o.castShadow=!0,i.add(o);const l=new O(new je(.2,10,8),new Y({color:3823728,roughness:.7}));l.scale.set(1.05,1.1,1.15),l.position.y=1.2,i.add(l);const a=new O(new je(.12,8,8),new Y({color:12888200,roughness:.7}));a.position.set(0,1.15,.1),i.add(a);for(const c of[-1,1])i.add(Ct(new Fe(.05,.04,.35,5),s,c*.26,.7,0,0,0,c*.3)),i.add(Ct(new Fe(.055,.045,.38,5),s,c*.09,.28,0));const h=new O(new Ri(.28,.025,4,12,Math.PI),new Y({color:9068592,roughness:.6}));h.rotation.y=Math.PI/2,h.position.set(-.32,.75,.05),i.add(h);const d=new O(new Fe(.008,.008,.5,4),new Y({color:14209216}));d.position.set(-.2,.75,.05),i.add(d)}else{const s=new O(new Wt(.26,.45,6,10),n);s.position.y=.6,s.castShadow=!0,i.add(s);const o=new O(new je(.2,10,8),new Y({color:11178096,roughness:.6}));o.position.y=1.1,i.add(o);for(const l of[-1,1])i.add(Ct(new Fe(.05,.04,.35,5),n,l*.28,.6,0,0,0,l*.4)),i.add(Ct(new Fe(.055,.045,.35,5),n,l*.1,.25,0))}return i.scale.setScalar(e),i}function Nt(r,e,t={}){return Dn(r,()=>{const i=r0(e,t.bump??1);return new Y({map:e,bumpMap:i,bumpScale:t.bump??.08,color:t.color??16777215,metalness:t.metalness??.08,roughness:t.roughness??.82,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,vertexColors:t.vertexColors??!1})})}function zi(r,e){if(r===A.Lava)return Dn("floor-lava",()=>new Y({color:16728080,roughness:.4,metalness:.15,emissive:16722432,emissiveIntensity:1.2}));if(r===A.Water)return Dn("floor-water",()=>new Y({color:2777224,roughness:.2,metalness:.45,emissive:1325144,emissiveIntensity:.45}));if(r===A.BridgeWood)return Dn("floor-bridge-wood",()=>new Y({color:9067048,roughness:.85,metalness:.05,emissive:2758664,emissiveIntensity:.08}));if(r===A.BridgeStone)return Dn("floor-bridge-stone",()=>new Y({color:6975616,roughness:.65,metalness:.3,emissive:2106408,emissiveIntensity:.1}));if(r===A.Heart)return Nt("floor-heart",Qg(),{metalness:.3,roughness:.55,emissive:5249056,emissiveIntensity:.22,bump:.06});if(r===A.Dirt)return Nt("floor-dirt",Kg(),{metalness:.02,roughness:.95,emissive:657412,emissiveIntensity:.03,bump:.12});switch(e){case T.Treasury:return Nt("floor-treasury",e0(),{metalness:.55,roughness:.4,emissive:3811336,emissiveIntensity:.15,bump:.05});case T.Lair:return Nt("floor-lair",t0(),{metalness:.08,roughness:.85,emissive:2101272,emissiveIntensity:.1,bump:.09});case T.Hatchery:return Nt("floor-hatchery",i0(),{metalness:.05,roughness:.88,emissive:2105360,emissiveIntensity:.12,bump:.08});case T.Training:return Nt("floor-training",eo(),{metalness:.2,roughness:.7,emissive:2101264,emissiveIntensity:.08,bump:.1});case T.Library:return Nt("floor-library",n0(),{metalness:.15,roughness:.65,emissive:1054760,emissiveIntensity:.18,bump:.06});case T.Portal:return Nt("floor-portal",s0(),{metalness:.35,roughness:.45,emissive:4200552,emissiveIntensity:.35,bump:.07});case T.Guard:return Nt("floor-training",eo(),{metalness:.25,roughness:.68,emissive:1581096,emissiveIntensity:.12,bump:.1,color:8425632});case T.Workshop:return Nt("floor-training",eo(),{metalness:.35,roughness:.55,emissive:3151880,emissiveIntensity:.18,bump:.12,color:12093520});default:return Nt("floor-claimed-v2",zh(),{color:12101776,metalness:.2,roughness:.58,emissive:2761752,emissiveIntensity:.1,bump:.1})}}function m0(r){if(r===T.None)return null;const t={[T.Treasury]:{kind:"goldRing",color:[224,176,40],emissive:12619808,ei:.35,size:1.5},[T.Lair]:{kind:"bedding",color:[130,80,140],emissive:6303856,ei:.2,size:1.45},[T.Hatchery]:{kind:"warmSpot",color:[140,170,60],emissive:7372832,ei:.25,size:1.4},[T.Training]:{kind:"worn",color:[170,70,60],emissive:8396832,ei:.18,size:1.4},[T.Library]:{kind:"runes",color:[90,120,210],emissive:4219072,ei:.4,size:1.45},[T.Portal]:{kind:"swirl",color:[160,80,220],emissive:8401088,ei:.55,size:1.5},[T.Guard]:{kind:"worn",color:[100,120,140],emissive:4219008,ei:.22,size:1.4},[T.Workshop]:{kind:"worn",color:[170,120,60],emissive:8405008,ei:.28,size:1.4},[T.Prison]:{kind:"worn",color:[90,100,110],emissive:3162192,ei:.2,size:1.4},[T.Torture]:{kind:"worn",color:[160,50,60],emissive:8392736,ei:.35,size:1.4},[T.Graveyard]:{kind:"runes",color:[70,110,90],emissive:2121792,ei:.3,size:1.45}}[r];if(!t)return null;const i=o0(t.kind,t.color),n=new Y({map:i,transparent:!0,depthWrite:!1,color:16777215,emissive:t.emissive,emissiveIntensity:t.ei,metalness:r===T.Treasury?.65:.15,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-1}),s=new O(new pi(t.size,t.size),n);return s.rotation.x=-Math.PI/2,s.position.y=.14,s}function to(r,e,t){if(e)return Nt("fortified",Zg(),{metalness:.42,roughness:.48,emissive:2761760,emissiveIntensity:.06,bump:.06,vertexColors:!0});switch(r){case A.Rock:return Nt("rock-v3",$g(),{metalness:.18,roughness:.72,emissive:2631736,emissiveIntensity:.12,bump:.12,vertexColors:!0});case A.Earth:return Nt("earth-v2",Yg(),{metalness:.04,roughness:.9,emissive:3809288,emissiveIntensity:.16,bump:.15,vertexColors:!0});case A.Gold:return Nt("gold-v3",Jg(),{metalness:.88,roughness:.2,emissive:14721048,emissiveIntensity:.95,bump:.08,vertexColors:!0});case A.Dirt:return zi(A.Dirt,T.None);case A.Claimed:return zi(A.Claimed,t);case A.Heart:return zi(A.Heart,T.None);case A.Lava:return zi(A.Lava,T.None);case A.Water:return zi(A.Water,T.None);case A.BridgeWood:return zi(A.BridgeWood,T.None);case A.BridgeStone:return zi(A.BridgeStone,T.None);default:return Dn("default",()=>new Y({color:5592405}))}}function g0(r){if(r===T.None)return null;const e=new gt;if(r===T.Treasury){const t=new Y({color:14725160,metalness:.85,roughness:.3,emissive:10514448,emissiveIntensity:.45}),i=new O(new je(.35,10,8),t);i.scale.set(1.3,.55,1.1),i.position.set(-.35,.22,.15),i.castShadow=!0,e.add(i);const n=new O(new je(.22,8,6),t);n.scale.set(1.1,.5,1),n.position.set(.15,.16,-.35),e.add(n);const s=new O(new Te(.55,.35,.4),new Y({color:6961688,metalness:.25,roughness:.7}));s.position.set(.4,.28,.25),s.castShadow=!0,e.add(s);const o=new O(new Te(.55,.08,.42),new Y({color:9064480,metalness:.3,roughness:.65}));o.position.set(.4,.48,.25),e.add(o);const l=new O(new Te(.58,.06,.08),new Y({color:13934624,metalness:.8,roughness:.3,emissive:8409104,emissiveIntensity:.3}));l.position.set(.4,.3,.25),e.add(l)}else if(r===T.Lair){const t=new Y({color:6963304,roughness:.9,emissive:3149864,emissiveIntensity:.12}),i=new O(new Wt(.18,.55,4,8),t);i.rotation.z=Math.PI/2,i.position.set(-.2,.2,.1),i.castShadow=!0,e.add(i);const n=new O(new Wt(.15,.45,4,8),t);n.rotation.z=Math.PI/2,n.rotation.y=.4,n.position.set(.35,.18,-.25),e.add(n)}else if(r===T.Hatchery){const t=new O(new Ri(.55,.16,8,16),new Y({color:6979632,roughness:.85,emissive:4214808,emissiveIntensity:.28}));t.rotation.x=-Math.PI/2,t.position.y=.16,e.add(t);const i=new O(new je(.18,8,6),new Y({color:15253568,emissive:10518560,emissiveIntensity:.35,roughness:.5}));i.position.y=.22,e.add(i)}else if(r===T.Training){const t=new Y({color:6965288,roughness:.8}),i=new Y({color:8949920,metalness:.75,roughness:.35}),n=new O(new Fe(.06,.08,.9,6),t);n.position.set(-.35,.5,0),n.castShadow=!0,e.add(n);const s=new O(new Fe(.06,.08,.9,6),t);s.position.set(.35,.5,0),e.add(s);const o=new O(new Te(.85,.08,.12),t);o.position.set(0,.7,0),e.add(o);for(const h of[-.2,.05,.3]){const d=new O(new Te(.05,.45,.08),i);d.position.set(h,.55,.05),e.add(d)}const l=new O(new Fe(.18,.22,.7,8),new Y({color:9068624,roughness:.75,emissive:4198416,emissiveIntensity:.15}));l.position.set(0,.4,-.45),l.castShadow=!0,e.add(l);const a=new O(new je(.16,8,6),new Y({color:12619888,roughness:.7}));a.position.set(0,.85,-.45),e.add(a)}else if(r===T.Library){const t=new Y({color:5913122,roughness:.75}),i=new O(new Te(.7,.12,.45),t);i.position.set(0,.55,0),i.castShadow=!0,e.add(i);const n=new O(new Fe(.08,.12,.45,6),t);n.position.set(0,.28,0),e.add(n);const s=new O(new Te(.28,.06,.22),new Y({color:3166368,emissive:1056864,emissiveIntensity:.25,roughness:.6}));s.position.set(.05,.65,0),e.add(s);const o=new O(new Fe(.03,.035,.14,6),new Y({color:15259808,emissive:16755264,emissiveIntensity:.4}));o.position.set(-.22,.68,.08),e.add(o)}else if(r===T.Portal){const t=new Y({color:8401088,emissive:10502399,emissiveIntensity:.7,metalness:.4,roughness:.35,transparent:!0,opacity:.85}),i=new O(new Fe(.2,.28,1.4,10),t);i.position.y=.75,i.castShadow=!0,e.add(i);const n=new O(new Ri(.42,.06,8,20),t);n.position.y=1.15,n.rotation.x=Math.PI/2,e.add(n);const s=new O(new je(.18,10,8),new Y({color:14721279,emissive:12607743,emissiveIntensity:1.1,roughness:.3}));s.position.y=1.15,e.add(s)}else if(r===T.Guard){const t=new Y({color:5914672,roughness:.8}),i=new Y({color:9478320,metalness:.7,roughness:.35,emissive:2109504,emissiveIntensity:.15}),n=new O(new Fe(.07,.09,1.35,6),t);n.position.set(0,.7,0),n.castShadow=!0,e.add(n);const s=new O(new Te(.55,.7,.04),new Y({color:6303776,emissive:4198416,emissiveIntensity:.2,roughness:.75}));s.position.set(0,1.05,.08),e.add(s);const o=new O(new Fe(.28,.28,.06,8),i);o.rotation.x=Math.PI/2,o.position.set(.45,.55,-.2),e.add(o);const l=new O(new Te(.7,.08,.2),t);l.position.set(-.35,.35,.25),e.add(l)}else if(r===T.Workshop){const t=new Y({color:6965296,roughness:.75}),i=new Y({color:6318192,metalness:.85,roughness:.3,emissive:4200456,emissiveIntensity:.2}),n=new Y({color:16736288,emissive:16728080,emissiveIntensity:.9,metalness:.4,roughness:.4}),s=new O(new Te(1.1,.18,.55),t);s.position.set(-.15,.55,.1),s.castShadow=!0,e.add(s);const o=new O(new Te(.1,.5,.1),t);o.position.set(-.55,.28,.25),e.add(o);const l=new O(new Te(.1,.5,.1),t);l.position.set(.25,.28,-.05),e.add(l);const a=new O(new Te(.45,.22,.28),i);a.position.set(.45,.45,-.25),a.castShadow=!0,e.add(a);const h=new O(new Te(.22,.1,.14),i);h.position.set(.68,.5,-.25),e.add(h);const d=new O(new Fe(.18,.22,.28,8),i);d.position.set(-.45,.35,-.35),e.add(d);const c=new O(new je(.1,8,6),n);c.position.set(-.45,.48,-.35),e.add(c);const u=new O(new Te(.28,.35,.08),new Y({color:9068608,roughness:.7}));u.position.set(.1,.72,.15),e.add(u)}else if(r===T.Prison){const t=new Y({color:6318192,metalness:.85,roughness:.35,emissive:1054752,emissiveIntensity:.12}),i=new Y({color:4864040,roughness:.8});for(let l=0;l<4;l++){const a=new O(new Fe(.03,.03,1.2,5),t);a.position.set(-.45+l*.28,.7,.55),a.castShadow=!0,e.add(a)}const n=new O(new Te(1.05,.06,.06),t);n.position.set(-.05,.85,.55),e.add(n);const s=new O(new Te(.9,.12,.45),i);s.position.set(.15,.28,-.25),e.add(s);const o=new O(new Fe(.025,.025,.55,5),t);o.position.set(.55,.55,-.1),e.add(o)}else if(r===T.Torture){const t=new Y({color:5910560,roughness:.75}),i=new Y({color:7370880,metalness:.8,roughness:.3,emissive:4198416,emissiveIntensity:.25}),n=new O(new Te(1.15,.14,.55),t);n.position.set(0,.55,0),n.castShadow=!0,e.add(n);for(const l of[-1,1]){const a=new O(new Fe(.06,.07,.9,6),t);a.position.set(l*.5,.55,0),e.add(a)}const s=new O(new ai(.08,.28,5),new Y({color:10528944,metalness:.7,roughness:.3}));s.position.set(0,.85,.1),e.add(s);const o=new O(new Ri(.28,.04,6,12),i);o.position.set(-.35,.7,-.35),o.rotation.y=.4,e.add(o)}else if(r===T.Graveyard){const t=new Y({color:6846568,roughness:.7,metalness:.15,emissive:1585192,emissiveIntensity:.2}),i=new Y({color:4218952,emissive:2113576,emissiveIntensity:.25,roughness:.8}),n=new O(new Te(.55,.7,.12),t);n.position.set(-.35,.45,.2),n.castShadow=!0,e.add(n);const s=new O(new Te(.35,.08,.08),t);s.position.set(-.35,.7,.2),e.add(s);const o=new O(new je(.32,8,6),i);o.scale.set(1.2,.45,.9),o.position.set(.35,.22,-.15),e.add(o);const l=new O(new Fe(.03,.03,.35,5),new Y({color:14209200,roughness:.5}));l.rotation.z=.8,l.position.set(.2,.35,.25),e.add(l)}else return null;return e}function v0(){const r=new gt,e=new Y({color:16773280,emissive:16764992,emissiveIntensity:1.65,metalness:.98,roughness:.1}),t=[[.35,1.7,.2],[-.4,1.35,-.3],[.1,2,-.45],[-.25,1.9,.4],[.45,1.1,.35],[-.5,2.15,.05],[0,2.35,.15],[.55,1.55,-.2]];for(const[n,s,o]of t){const l=new O(new ma(.11+Math.abs(n)%.05,0),e);l.position.set(n,s,o),r.add(l)}const i=new O(new Te(.14,1.85,.14),new Y({color:16769136,emissive:16756768,emissiveIntensity:1.35,metalness:.95,roughness:.15}));return i.position.set(.15,1.45,-.1),i.rotation.z=.2,r.add(i),r}function x0(){const r=new gt,e=new O(new Te(Ve*.98,.18,Ve*.98),new Y({color:3805704,roughness:.85,metalness:.05,emissive:4853768,emissiveIntensity:.35}));e.position.y=.05,e.receiveShadow=!0,r.add(e);const t=new O(new Te(Ve*.82,.08,Ve*.82),new Y({color:16733456,roughness:.35,metalness:.2,emissive:16726528,emissiveIntensity:1.35}));t.position.y=.14,r.add(t);for(const[i,n,s]of[[-.45,-.3,.35],[.4,.35,.28],[.1,-.5,.22],[-.2,.45,.3]]){const o=new O(new Te(s,.06,s*.85),new Y({color:1706502,roughness:.95,emissive:8394752,emissiveIntensity:.45}));o.position.set(i,.17,n),r.add(o)}return r}function y0(){const r=new gt,e=new O(new Te(Ve*.98,.16,Ve*.98),new Y({color:1716296,roughness:.25,metalness:.35,emissive:663608,emissiveIntensity:.4}));e.position.y=.04,e.receiveShadow=!0,r.add(e);const t=new O(new Te(Ve*.78,.04,Ve*.78),new Y({color:3834032,roughness:.15,metalness:.55,emissive:1591400,emissiveIntensity:.55,transparent:!0,opacity:.92}));return t.position.y=.12,r.add(t),r}function _0(r){const e=new gt,t=new O(new Te(Ve*.95,.1,Ve*.95),new Y({color:r?1714232:4855816,roughness:.7,metalness:.1,emissive:r?1056816:12593152,emissiveIntensity:r?.25:.7}));t.position.y=.06,e.add(t);const i=new Y({color:r?6975616:9067048,roughness:r?.65:.82,metalness:r?.35:.08,emissive:r?2106408:3809296,emissiveIntensity:.12});for(let s=-2;s<=2;s++){const o=new O(new Te(Ve*.92,.12,.28),i);o.position.set(0,.2,s*.36),o.castShadow=!0,o.receiveShadow=!0,e.add(o)}const n=new Y({color:r?5265512:5913112,roughness:.75,metalness:r?.3:.05});for(const s of[-.85,.85]){const o=new O(new Te(.1,.35,Ve*.9),n);o.position.set(s,.38,0),e.add(o)}return e}function M0(r){const e=new gt,t=new Y({color:6964264,roughness:.78,metalness:.12,emissive:2758664,emissiveIntensity:.12}),i=new Y({color:8947864,metalness:.85,roughness:.3,emissive:2105384,emissiveIntensity:.1}),n=new O(new Te(.12,1.55,.18),t);n.position.set(-.72,.85,0),e.add(n);const s=n.clone();s.position.x=.72,e.add(s);const o=new O(new Te(1.56,.14,.2),t);o.position.set(0,1.62,0),e.add(o);const l=new O(new Te(1.2,1.4,.1),t);l.castShadow=!0,r===Je.Open?(l.position.set(.55,.78,.35),l.rotation.y=-1.05):l.position.set(0,.78,0),e.add(l);const a=new O(new Te(1.22,.08,.12),i);a.position.copy(l.position),a.position.y=.55,a.rotation.copy(l.rotation),e.add(a);const h=new O(new je(.06,8,6),i);return r===Je.Open?h.position.set(.35,.75,.55):h.position.set(.45,.75,.08),e.add(h),e}function w0(){const r=new gt,e=new Y({color:5920864,roughness:.7,metalness:.25,emissive:2103320,emissiveIntensity:.12}),t=new Y({color:11055296,metalness:.8,roughness:.28,emissive:4206624,emissiveIntensity:.2}),i=new O(new Fe(.35,.42,.22,8),e);i.position.y=.14,i.castShadow=!0,r.add(i);const n=new O(new Fe(.1,.12,.7,6),e);n.position.y=.55,r.add(n);const s=new O(new Te(.55,.22,.28),t);s.position.set(.05,.95,0),s.castShadow=!0,r.add(s);const o=new O(new Fe(.06,.08,.45,6),t);o.rotation.z=Math.PI/2,o.position.set(.4,.95,0),r.add(o);const l=new O(new ai(.05,.18,6),new Y({color:12634328,metalness:.9,roughness:.2,emissive:8405008,emissiveIntensity:.35}));return l.rotation.z=-Math.PI/2,l.position.set(.68,.95,0),r.add(l),r}function S0(){const r=new gt,e=new Y({color:5913122,roughness:.8}),t=new Y({color:11544616,emissive:6295568,emissiveIntensity:.35,roughness:.7}),i=new O(new Fe(.04,.05,1.6,6),e);i.position.y=.85,i.castShadow=!0,r.add(i);const n=new O(new Te(.55,.38,.03),t);n.position.set(.3,1.4,0),r.add(n);const s=new O(new je(.07,8,6),new Y({color:14729280,metalness:.7,emissive:10518560,emissiveIntensity:.4}));return s.position.y=1.68,r.add(s),r}const $l={uniforms:{tDiffuse:{value:null},uContrast:{value:1.05},uSaturation:{value:1.08},uVignette:{value:.22},uTint:{value:new Xe(1.02,.98,.92)}},vertexShader:`
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
  `};class b0{scene;camera;renderer;composer;bloomPass;gridGroup=new gt;entityGroup=new gt;fxGroup=new gt;tileMeshes=new Map;torches=[];heartGroup=null;markerMesh;selectRing;clock=0;edgeMat;earthEdgeMat;goldEdgeMat;rockEdgeMat;contextLost=!1;useComposer=!0;renderFails=0;onContextLost=null;onContextRestored=null;fxDebrisGeo=new Te(.1,.08,.1);fxSparkGeo=new je(.2,8,8);fxGlowGeo=new je(.4,10,10);FX_CAP=64;digLoad=!1;basePixelRatio=1;dirLight=null;markOverlay=new gt;markPlaneGeo=new pi(Ve*.7,Ve*.7);digWireGeo=new Cg(new Te(Ve*.92,2.2,Ve*.92));fogOverlay=new gt;fogBoxGeo=new Te(Ve*1.05,4.4,Ve*1.05);fogMat=new Vt({color:525834,depthWrite:!0});fogInstanced=null;fogCapacity=0;fogDummy=new wt;constructor(e){this.scene=new hg,this.scene.background=new Xe(2235428),this.scene.fog=new ha(1972256,.0055),this.camera=new Xt(52,1,.1,220),this.camera.position.set(0,32,24),this.camera.lookAt(0,0,0),this.renderer=new lg({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.basePixelRatio=Math.min(window.devicePixelRatio||1,t?1.15:1.5),this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.setClearColor(2235428,1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yh,this.renderer.toneMapping=th,this.renderer.toneMappingExposure=1.6,this.renderer.outputColorSpace=Ut;const i=new Dg(14734528,1);this.scene.add(i);const n=new Pg(16773860,4864072,.85);n.position.set(0,40,0),this.scene.add(n);const s=new Fl(16773856,1.25);s.position.set(22,48,14),s.castShadow=!0,s.shadow.mapSize.set(512,512),this.dirLight=s,s.shadow.camera.near=5,s.shadow.camera.far=120,s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,s.shadow.bias=-6e-4,s.shadow.intensity=.55,this.scene.add(s);const o=new Fl(9480400,.45);o.position.set(-18,28,-14),this.scene.add(o);const l=new O(new pi(200,200),new Y({color:1709080,metalness:.05,roughness:1}));l.rotation.x=-Math.PI/2,l.position.y=-.35,l.receiveShadow=!0,this.scene.add(l),this.scene.add(this.gridGroup),this.scene.add(this.markOverlay),this.scene.add(this.fogOverlay),this.scene.add(this.entityGroup),this.scene.add(this.fxGroup),this.edgeMat=new sn({color:2761240,transparent:!0,opacity:.55}),this.earthEdgeMat=new sn({color:10510376,transparent:!0,opacity:.85}),this.goldEdgeMat=new sn({color:16769126,transparent:!0,opacity:1}),this.rockEdgeMat=new sn({color:8949928,transparent:!0,opacity:.8}),this.markerMesh=new O(new pi(Ve*.9,Ve*.9),new Vt({color:16755232,transparent:!0,opacity:.35,depthWrite:!1})),this.markerMesh.rotation.x=-Math.PI/2,this.markerMesh.position.y=.14,this.markerMesh.visible=!1,this.scene.add(this.markerMesh),this.selectRing=new O(new pr(.4,.55,24),new Vt({color:16764006,transparent:!0,opacity:.8,side:jt})),this.selectRing.rotation.x=-Math.PI/2,this.selectRing.position.y=.16,this.selectRing.visible=!1,this.scene.add(this.selectRing),this.composer=new Vl(this.renderer),this.composer.addPass(new Xl(this.scene,this.camera));const a=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new cn(new le(1,1),a?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new Yo($l)),this.onResize(),window.addEventListener("resize",()=>this.onResize()),this.bindContextRecovery(e)}bindContextRecovery(e){e.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.useComposer=!1,console.warn("[underkeep] WebGL context lost"),this.onContextLost?.()},!1),e.addEventListener("webglcontextrestored",()=>{console.warn("[underkeep] WebGL context restored — reinit renderer pipeline"),this.contextLost=!1;try{this.reinitPipeline(),this.onContextRestored?.()}catch(t){console.error("[underkeep] context restore failed",t),this.onContextLost?.()}},!1)}reinitPipeline(){const e=new le;this.renderer.getSize(e),this.renderer.setClearColor(2235428,1),this.composer=new Vl(this.renderer),this.composer.addPass(new Xl(this.scene,this.camera));const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new cn(new le(e.x||1,e.y||1),t?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new Yo($l)),this.useComposer=!0,this.renderFails=0,this.onResize()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}disposeGridChild(e){e.traverse(t=>{const i=t;if(i.isMesh){const s=i.geometry;s&&(i.userData.disposeGeo||s.userData?.disposeGeo)&&s.dispose();const o=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const l of o)l&&l.userData?.disposeMat&&l.dispose()}t.isLight})}rebuildGrid(e){for(;this.gridGroup.children.length;){const t=this.gridGroup.children.pop();this.disposeGridChild(t),this.gridGroup.remove(t)}this.tileMeshes.clear(),this.torches=[],this.heartGroup=null;for(const t of e.tiles){const i=e.tileToWorld(t.x,t.y),n=`${t.x},${t.y}`;if(t.kind===A.Rock){const l=new O(h0(),to(A.Rock,!1,t.room));l.position.set(i.x,0,i.z),l.castShadow=!0,l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),this.addEdge(i.x,i.z,3.5,this.rockEdgeMat),this.tileMeshes.set(n,l);continue}if(t.fortified){const l=new O(Yl(!0),to(A.Earth,!0,t.room));l.position.set(i.x,0,i.z),l.castShadow=!0,l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),this.addEdge(i.x,i.z,2.45,this.edgeMat),this.tileMeshes.set(n,l);continue}if(t.kind===A.Earth||t.kind===A.Gold){const l=t.kind===A.Gold?c0():Yl(),a=new O(l,to(t.kind,!1,t.room));a.position.set(i.x,0,i.z);const h=Math.max(0,Math.min(.95,t.digProgress||0)),d=1-h*.7,c=1-h*.85;if(a.scale.set(d,c,d),a.position.y=-h*1.15,a.castShadow=!0,a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),t.kind===A.Gold&&h<.85){const f=v0();f.position.set(i.x,a.position.y,i.z),f.scale.set(d,c,d),f.userData.glitterFor=n,this.gridGroup.add(f)}const u=2.35*c+a.position.y;this.addEdge(i.x,i.z,Math.max(.4,u),t.kind===A.Gold?this.goldEdgeMat:this.earthEdgeMat),this.tileMeshes.set(n,a);continue}if(t.kind===A.Lava){const l=x0();l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l);continue}if(t.kind===A.Water){const l=y0();l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l);continue}if(t.kind===A.BridgeWood||t.kind===A.BridgeStone){const l=_0(t.kind===A.BridgeStone);l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l);continue}if(t.kind===A.Claimed){const l=a0(t.room);l.position.set(i.x,0,i.z),l.userData.tileX=t.x,l.userData.tileY=t.y,l.traverse(a=>{a.userData.tileX=t.x,a.userData.tileY=t.y}),this.gridGroup.add(l),this.tileMeshes.set(n,l)}else{const l=new O(l0(),zi(t.kind,t.room));l.position.set(i.x,0,i.z),l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),this.tileMeshes.set(n,l)}if(t.kind===A.Heart){const l=u0();l.position.set(i.x,0,i.z),this.gridGroup.add(l),this.heartGroup=l}const s=m0(t.room);s&&(s.position.set(i.x,.18,i.z),this.gridGroup.add(s));const o=g0(t.room);if(o&&(o.position.set(i.x,.14,i.z),this.gridGroup.add(o)),t.door===Je.Closed||t.door===Je.Open){const l=M0(t.door);l.position.set(i.x,.02,i.z),!!e.get(t.x+1,t.y)&&(e.get(t.x+1,t.y).fortified||e.get(t.x+1,t.y).kind===A.Earth||e.get(t.x+1,t.y).kind===A.Gold||e.get(t.x+1,t.y).kind===A.Rock)||!!e.get(t.x-1,t.y)&&(e.get(t.x-1,t.y).fortified||e.get(t.x-1,t.y).kind===A.Earth||e.get(t.x-1,t.y).kind===A.Gold||e.get(t.x-1,t.y).kind===A.Rock)||(l.rotation.y=Math.PI/2),this.gridGroup.add(l)}if(t.trap===xt.Sentry){const l=w0();l.position.set(i.x+.15,.02,i.z-.15),this.gridGroup.add(l)}if(t.rally){const l=S0();l.position.set(i.x-.25,.02,i.z+.25),this.gridGroup.add(l)}if(t.torch){const l=this.torches.filter(u=>u.torchLight).length<12,a=f0(l);let h=.65,d=0;const c=[[1,0,.65,0],[-1,0,-.65,0],[0,1,0,.65],[0,-1,0,-.65]];for(const[u,f,g,v]of c){const m=e.get(t.x+u,t.y+f);if(m&&(m.kind===A.Earth||m.kind===A.Gold||m.kind===A.Rock||m.fortified)){h=g,d=v;break}}a.position.set(i.x+h,0,i.z+d),this.gridGroup.add(a),this.torches.push(a)}}this.syncMarkOverlay(e),this.syncFogOverlay(e)}syncMarkOverlay(e){for(;this.markOverlay.children.length;){const t=this.markOverlay.children.pop();this.markOverlay.remove(t);const i=t;i.material&&i.material.userData?.disposeMat&&i.material.dispose()}for(const t of e.tiles){if(!t.mark)continue;const i=e.tileToWorld(t.x,t.y),n=Math.max(0,Math.min(.95,t.digProgress||0)),s=1-n*.85,o=t.kind===A.Earth||t.kind===A.Gold?Math.max(.5,2.42*s-n*1.15):.2,l=new Vt({color:t.mark===1?16724770:t.mark===2?4500223:13421738,transparent:!0,opacity:.7,depthWrite:!1});l.userData.disposeMat=!0;const a=new O(this.markPlaneGeo,l);if(a.rotation.x=-Math.PI/2,a.position.set(i.x,o,i.z),this.markOverlay.add(a),t.mark===1&&(t.kind===A.Earth||t.kind===A.Gold)){const h=new sn({color:16729122,transparent:!0,opacity:.85});h.userData.disposeMat=!0;const d=new fg(this.digWireGeo,h);d.position.set(i.x,1.1*s-n*1.15,i.z),d.scale.set(1,Math.max(.25,s),1),this.markOverlay.add(d)}}}syncFogOverlay(e){const t=[];for(const s of e.tiles){const o=`${s.x},${s.y}`,l=this.tileMeshes.get(o);s.explored?l&&!l.visible&&(l.visible=!0):(t.push(s),l&&(l.visible=!1))}const i=Math.max(t.length,1);if(!this.fogInstanced||this.fogCapacity<i){this.fogInstanced&&(this.fogOverlay.remove(this.fogInstanced),this.fogInstanced=null);const s=Math.max(i,256),o=new ug(this.fogBoxGeo,this.fogMat,s);o.instanceMatrix.setUsage(Ic),o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,this.fogInstanced=o,this.fogCapacity=s,this.fogOverlay.add(o)}const n=this.fogInstanced;for(let s=0;s<t.length;s++){const o=t[s],l=e.tileToWorld(o.x,o.y);this.fogDummy.position.set(l.x,1.9,l.z),this.fogDummy.scale.set(1,1,1),this.fogDummy.updateMatrix(),n.setMatrixAt(s,this.fogDummy.matrix)}n.count=t.length,n.instanceMatrix.needsUpdate=!0,n.visible=t.length>0}addEdge(e,t,i,n){const s=new Xo(d0(i),n);s.position.set(e,0,t),this.gridGroup.add(s)}updateDigVisual(e,t,i,n){const s=`${e},${t}`,o=this.tileMeshes.get(s);if(!o)return;const l=Math.max(0,Math.min(.95,i||0)),a=1-l*.7,h=1-l*.85;o.scale.set(a,h,a),o.position.y=-l*1.15;for(const d of this.gridGroup.children)d.userData?.glitterFor===s&&(d.position.y=o.position.y,d.scale.set(a,h,a),d.visible=l<.85&&n===A.Gold)}setHover(e,t,i,n=16755232){this.markerMesh.visible=i,i&&(this.markerMesh.position.x=e,this.markerMesh.position.z=t,this.markerMesh.material.color.setHex(n))}setSelectRing(e,t,i){this.selectRing.visible=i,i&&(this.selectRing.position.x=e,this.selectRing.position.z=t)}clearEntities(){for(;this.entityGroup.children.length;)this.entityGroup.remove(this.entityGroup.children[0])}addEntityMesh(e){this.entityGroup.add(e)}removeEntityMesh(e){this.entityGroup.remove(e)}createEntityVisual(e,t,i){return p0(t,i,e)}trimFx(){for(;this.fxGroup.children.length>this.FX_CAP;){const e=this.fxGroup.children[0];this.disposeFxChild(e),this.fxGroup.remove(e)}}disposeFxChild(e){const t=e;if(t.isMesh){const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}const i=e;if(i.isLine&&i.geometry&&i.geometry.userData?.disposeGeo&&i.geometry.dispose(),i.isLine){const n=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}}setDigLoad(e){this.digLoad!==e&&(this.digLoad=e,e?(this.useComposer=!1,this.bloomPass.enabled=!1,this.renderer.setPixelRatio(Math.min(this.basePixelRatio,1)),this.renderer.shadowMap.enabled=!1,this.dirLight&&(this.dirLight.castShadow=!1),this.trimFx()):(this.bloomPass.enabled=!0,this.useComposer=!this.contextLost,this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.shadowMap.enabled=!0,this.dirLight&&(this.dirLight.castShadow=!0),this.onResize()))}spawnFx(e,t,i=.6){if(this.fxGroup.children.length>=this.FX_CAP)return;const n=new Vt({color:t,transparent:!0,opacity:.9});n.userData.disposeMat=!0;const s=new O(this.fxSparkGeo,n);s.position.copy(e),s.position.y+=.5,this.fxGroup.add(s);const o=s;o._fxStart=this.clock,o._fxLife=i}spawnCareSparks(e,t,i,n=!1){this.fxGroup.children.length>this.FX_CAP-8&&this.trimFx();const s=i==="heal"?5636010:16763955,o=i==="heal"?13172712:16772795,l=i==="heal"?2817928:16755234,a=n?this.digLoad?6:10:this.digLoad?3:5;for(let h=0;h<a&&!(this.fxGroup.children.length>=this.FX_CAP);h++){const d=.7+Math.random()*.6,c=h%3===0?o:h%3===1?s:l,u=new Vt({color:c,transparent:!0,opacity:1,depthWrite:!1});u.userData.disposeMat=!0;const f=new O(this.fxSparkGeo,u);f.scale.setScalar(d),f.position.set(e+(Math.random()-.5)*.85,.45+Math.random()*.7,t+(Math.random()-.5)*.85);const g=f;g._fxStart=this.clock,g._fxLife=1.2+Math.random()*.7,g._vx=(Math.random()-.5)*1.4,g._vy=.9+Math.random()*1.6,g._vz=(Math.random()-.5)*1.4,g._fxFloat=!0,this.fxGroup.add(f)}if(this.fxGroup.children.length<this.FX_CAP){const h=new Vt({color:s,transparent:!0,opacity:.85,depthWrite:!1});h.userData.disposeMat=!0;const d=new O(this.fxGlowGeo,h);d.scale.setScalar(n?1.3:.95),d.position.set(e,.7,t);const c=d;c._fxStart=this.clock,c._fxLife=n?1.8:1.4,c._vx=0,c._vy=.55,c._vz=0,c._fxFloat=!0,this.fxGroup.add(d)}}spawnDigDebris(e,t,i=12615744){this.fxGroup.children.length>this.FX_CAP-4&&this.trimFx();const n=this.digLoad?2:4;for(let s=0;s<n&&!(this.fxGroup.children.length>=this.FX_CAP);s++){const o=new Vt({color:i,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const l=new O(this.fxDebrisGeo,o),a=.7+Math.random()*.8;l.scale.set(a,a*.8,a),l.position.set(e+(Math.random()-.5)*.6,.6+Math.random()*.8,t+(Math.random()-.5)*.6);const h=l;h._fxStart=this.clock,h._fxLife=.35+Math.random()*.25,h._vx=(Math.random()-.5)*3,h._vy=1.5+Math.random()*2.5,h._vz=(Math.random()-.5)*3,this.fxGroup.add(l)}}pickTile(e,t){const i=new zl;i.setFromCamera(new le(e,t),this.camera);const n=i.intersectObjects(this.gridGroup.children,!0);for(const o of n){let l=o.object;for(;l;){if(l.userData&&typeof l.userData.tileX=="number")return{x:o.point.x,z:o.point.z,tileX:l.userData.tileX,tileY:l.userData.tileY};l=l.parent}}const s=this.raycastGround(e,t);return s?{x:s.x,z:s.z}:null}spawnLightning(e,t){const i=[e.clone(),t.clone().add(new E(0,1,0))],n=e.clone().lerp(t,.5);n.y+=2+Math.random(),n.x+=(Math.random()-.5)*2,i.splice(1,0,n);const s=new Tt().setFromPoints(i);s.userData.disposeGeo=!0;const o=new sn({color:11197951,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const l=new Xo(s,o);this.fxGroup.add(l);const a=l;a._fxStart=this.clock,a._fxLife=.35}update(e){if(this.clock+=e,this.heartGroup?.heartCore){const t=1+Math.sin(this.clock*3)*.05;this.heartGroup.heartCore.scale.setScalar(t),this.heartGroup.heartLight&&(this.heartGroup.heartLight.intensity=1.1+Math.sin(this.clock*3)*.25),this.heartGroup.rotation.y+=e*.3}for(const t of this.torches)t.torchLight&&(t.torchLight.intensity=2.8+Math.random()*.8+Math.sin(this.clock*8+t.position.x)*.35),t.flame&&t.flame.scale.setScalar(.9+Math.random()*.25);for(let t=this.fxGroup.children.length-1;t>=0;t--){const i=this.fxGroup.children[t];if(i._fxStart!==void 0&&i._fxLife!==void 0){const n=this.clock-i._fxStart,s=i._fxLife;if(n>s)this.disposeFxChild(i),this.fxGroup.remove(i);else if(i.material){const o=i.material,l=n/s;o.opacity!==void 0&&(o.opacity=Math.max(0,1-l*l));const a=!!i._fxFloat;if(i._vx!==void 0)if(i.position.x+=(i._vx??0)*e,i.position.y+=(i._vy??0)*e,i.position.z+=(i._vz??0)*e,i._vy=(i._vy??0)-(a?1.2:6)*e,a){const h=1+Math.sin(l*Math.PI)*.45;i.scale.setScalar(h),i.rotation.y+=e*2}else i.rotation.x+=e*4,i.rotation.z+=e*3;else i.position.y+=e*1.5}}}}render(){if(!this.contextLost)try{this.useComposer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderFails=0}catch(e){this.renderFails++,console.error("[underkeep] render failed",e),this.useComposer=!1;try{this.renderer.render(this.scene,this.camera)}catch(t){console.error("[underkeep] fallback render failed",t),this.renderFails>=3&&(this.contextLost=!0,this.onContextLost?.())}}}raycastGround(e,t){const i=new zl;i.setFromCamera(new le(e,t),this.camera);const n=new Hi(new E(0,1,0),0),s=new E;return i.ray.intersectPlane(n,s)?s:null}}const Kl=["treasury","lair","hatchery","training","library","portal","guard","workshop","prison","torture","graveyard","door","sentry","rally","bridgeWood","bridgeStone"];class T0{goldEl;manaEl;manaBar;workersEl;creaturesEl;mentorEl;mentorText;tooltipEl;overlay;overlayTitle;overlayMsg;buildSheet;spellsSheet;btnBuild;btnSpells;mentorTimer=0;mentorQueue=[];inspectorEl;inspName;inspJob;inspHp;inspHpBar;inspHunger;inspTired;inspMood;inspMoodBar;inspEfficiency;minimap;minimapCtx;objectiveEl;kitsValueEl;createWorkerBtn;onToolChange=null;onSpell=null;onOverlayContinue=null;onNewGame=null;onInspectorClose=null;constructor(){this.goldEl=document.getElementById("gold-value"),this.manaEl=document.getElementById("mana-value"),this.manaBar=document.getElementById("mana-bar"),this.workersEl=document.getElementById("workers-value"),this.creaturesEl=document.getElementById("creatures-value"),this.mentorEl=document.getElementById("mentor"),this.mentorText=document.getElementById("mentor-text"),this.tooltipEl=document.getElementById("tooltip"),this.overlay=document.getElementById("overlay"),this.overlayTitle=document.getElementById("overlay-title"),this.overlayMsg=document.getElementById("overlay-msg"),this.buildSheet=document.getElementById("build-sheet"),this.spellsSheet=document.getElementById("spells-sheet"),this.btnBuild=document.getElementById("btn-build"),this.btnSpells=document.getElementById("btn-spells"),this.inspectorEl=document.getElementById("inspector"),this.inspName=document.getElementById("insp-name"),this.inspJob=document.getElementById("insp-job"),this.inspHp=document.getElementById("insp-hp"),this.inspHpBar=document.getElementById("insp-hp-bar"),this.inspHunger=document.getElementById("insp-hunger"),this.inspTired=document.getElementById("insp-tired"),this.inspMood=document.getElementById("insp-mood"),this.inspMoodBar=document.getElementById("insp-mood-bar"),this.inspEfficiency=document.getElementById("insp-efficiency"),this.minimap=document.getElementById("minimap"),this.minimapCtx=this.minimap?.getContext("2d")??null,this.objectiveEl=document.getElementById("objective-value"),this.kitsValueEl=document.getElementById("kits-value"),this.createWorkerBtn=document.getElementById("btn-create-worker")??document.querySelector('.spell[data-spell="createWorker"]'),document.getElementById("insp-close")?.addEventListener("click",()=>{this.hideInspector(),this.onInspectorClose?.()}),document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.tool;this.setActiveTool(t),this.onToolChange?.(t),Kl.includes(t)&&this.closeSheets()})}),document.querySelectorAll(".spell").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.spell;this.onSpell?.(t),(t==="speed"||t==="lightning"||t==="possess")&&this.closeSheet("spells")})}),document.getElementById("overlay-btn").addEventListener("click",()=>{this.hideOverlay(),this.onOverlayContinue?.()}),document.getElementById("overlay-btn-secondary")?.addEventListener("click",()=>{this.hideOverlay(),this.onNewGame?.()}),document.getElementById("btn-new-game")?.addEventListener("click",()=>{this.onNewGame?.()}),this.btnBuild?.addEventListener("click",()=>this.toggleSheet("build")),this.btnSpells?.addEventListener("click",()=>this.toggleSheet("spells")),document.getElementById("btn-build-desktop")?.addEventListener("click",()=>this.toggleSheet("build")),document.getElementById("btn-spells-desktop")?.addEventListener("click",()=>this.toggleSheet("spells")),document.querySelectorAll(".sheet-close").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.close;(t==="build"||t==="spells")&&this.closeSheet(t)})}),document.getElementById("mentor-dismiss")?.addEventListener("click",()=>this.dismissMentor())}sheetButtons(e){return(e==="build"?["btn-build","btn-build-desktop"]:["btn-spells","btn-spells-desktop"]).map(i=>document.getElementById(i)).filter(i=>!!i)}toggleSheet(e){const t=e==="build"?this.buildSheet:this.spellsSheet,i=e==="build"?this.spellsSheet:this.buildSheet,n=t.hasAttribute("hidden");i.setAttribute("hidden","");for(const s of[...this.sheetButtons("build"),...this.sheetButtons("spells")])s.classList.remove("active"),s.setAttribute("aria-expanded","false");if(n){t.removeAttribute("hidden");for(const s of this.sheetButtons(e))s.classList.add("active"),s.setAttribute("aria-expanded","true")}else t.setAttribute("hidden","")}closeSheet(e){(e==="build"?this.buildSheet:this.spellsSheet).setAttribute("hidden","");for(const i of this.sheetButtons(e))i.classList.remove("active"),i.setAttribute("aria-expanded","false")}closeSheets(){this.closeSheet("build"),this.closeSheet("spells")}setActiveTool(e){document.querySelectorAll(".tool").forEach(t=>{t.classList.toggle("active",t.dataset.tool===e)}),Kl.includes(e)?this.btnBuild?.classList.add("active"):(e==="select"||e==="dig"||e==="claim"||e==="fortify")&&this.btnBuild?.classList.remove("active")}updateStats(e,t,i,n,s){const o=Number.isFinite(e)?Math.max(0,e):0,l=Number.isFinite(i)&&i>0?i:1,a=Number.isFinite(t)?Math.max(0,Math.min(l,t)):0;this.goldEl.textContent=String(Math.floor(o)),this.manaEl.textContent=`${Math.floor(a)}/${Math.floor(l)}`;const h=Math.max(0,Math.min(100,a/l*100));this.manaBar.style.width=`${Number.isFinite(h)?h:0}%`,this.workersEl.textContent=String(Math.max(0,n|0)),this.creaturesEl.textContent=String(Math.max(0,s|0))}setSpellAffordable(e,t){document.querySelectorAll(`.spell[data-spell="${e}"]`).forEach(i=>{i.disabled=!t})}say(e){this.mentorQueue.push(e),this.mentorTimer<=0&&this.popMentor()}sayNow(e){this.mentorQueue.length=0,this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}dismissMentor(){this.mentorTimer=0,this.mentorQueue.length=0,this.mentorEl.classList.remove("visible")}popMentor(){const e=this.mentorQueue.shift();if(!e){this.mentorEl.classList.remove("visible");return}this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}setTooltip(e){this.tooltipEl.textContent=e}update(e){this.mentorTimer>0&&(this.mentorTimer-=e,this.mentorTimer<=0&&this.popMentor())}showInspector(e){try{const t=(u,f,g,v=f)=>Number.isFinite(u)?Math.max(f,Math.min(g,u)):v,i=t(e.maxHp,1,9999,1),n=t(e.hp,0,i,0),s=t(e.hunger,0,100,0),o=t(e.tired,0,100,0),l=t(e.mood,0,100,50);let a=Number.isFinite(e.efficiency)?e.efficiency:.85;a>1.5&&(a=a/100),a=t(a,0,1.2,.85);const h=Math.round(a*100);this.inspName.textContent=e.held?`${e.kind} (held)`:e.kind,this.inspJob.textContent=e.job||"Idle",this.inspHp.textContent=`${Math.ceil(n)}/${Math.ceil(i)}`;const d=t(n/i*100,0,100,0);this.inspHpBar.style.width=`${d}%`,this.inspHunger.textContent=`${Math.floor(s)}`,this.inspTired.textContent=`${Math.floor(o)}`;const c=l>=75?"Happy":l>=50?"Content":l>=30?"Grumpy":l>=15?"Angry":"Leaving?";this.inspMood.textContent=`${Math.floor(l)} · ${c}`,this.inspMoodBar.style.width=`${t(l,0,100,0)}%`,this.inspEfficiency.textContent=`${h}%`,this.inspectorEl.classList.remove("hidden")}catch(t){console.warn("[underkeep] showInspector failed",t);try{this.inspectorEl.classList.add("hidden")}catch{}}}hideInspector(){this.inspectorEl.classList.add("hidden")}setObjective(e){this.objectiveEl&&(this.objectiveEl.textContent=e)}setKits(e,t){this.kitsValueEl&&(this.kitsValueEl.textContent=`D${e} · S${t}`)}setWorkerCost(e){this.createWorkerBtn&&(this.createWorkerBtn.classList.contains("tool"),(this.createWorkerBtn.id==="btn-create-worker"||(this.createWorkerBtn.textContent||"").includes("Worker"))&&(this.createWorkerBtn.textContent=`✨ Worker ${e}g`),this.createWorkerBtn.title=`Create Scrabbler (Q) — ${e} gold (cost scales)`)}drawMinimap(e){const t=this.minimap,i=this.minimapCtx;if(!t||!i)return;const n=t.width,s=t.height;i.fillStyle="#0a0806",i.fillRect(0,0,n,s);const o=e.width,l=e.height,a=Math.min(n/o,s/l),h=(n-o*a)/2,d=(s-l*a)/2;for(let f=0;f<l;f++)for(let g=0;g<o;g++){if(!e.exploredAt(g,f))continue;const v=e.kindAt(g,f),m=e.roomAt(g,f);let p="#3a3028";v===0?p="#1a1820":v===1?p="#4a3828":v===2?p="#c0a020":v===3?p="#5a4838":v===4?p="#7a6848":v===5?p="#e04020":v===6?p="#686060":v===7?p="#e05010":v===8?p="#2060a0":(v===9||v===10)&&(p="#8a7050"),v===4&&m===8&&(p="#a07840"),v===4&&m===7&&(p="#607080"),v===4&&m===9&&(p="#506070"),v===4&&m===10&&(p="#a04050"),v===4&&m===11&&(p="#406850"),i.fillStyle=p,i.fillRect(h+g*a,d+f*a,Math.max(1,a),Math.max(1,a))}const c=h+(e.heartX+.5)*a,u=d+(e.heartY+.5)*a;i.strokeStyle="#ff6040",i.lineWidth=2,i.beginPath(),i.arc(c,u,Math.max(3,a*1.1),0,Math.PI*2),i.stroke(),i.fillStyle="#ff3020",i.beginPath(),i.arc(c,u,Math.max(1.5,a*.45),0,Math.PI*2),i.fill()}showOverlay(e,t,i="Continue",n){this.overlayTitle.textContent=e,this.overlayMsg.textContent=t,document.getElementById("overlay-btn").textContent=i;const s=document.getElementById("overlay-btn-secondary");s&&(n?(s.textContent=n,s.classList.remove("hidden")):s.classList.add("hidden")),this.overlay.classList.remove("hidden")}hideOverlay(){this.overlay.classList.add("hidden")}}const X={start:"The earth awaits your cruelty, Keeper. Dig. Claim. Thrive.",resume:"Welcome back, Keeper. Your dungeon endures — dig on.",newGame:"A fresh Underkeep. The old one is dust.",firstGold:"Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",firstRoom:"A room! How civilized. Your minions prefer beds to sleeping in the mud.",portal:"The Portal hums. Hungry things beyond the veil hear its song.",skitterwing:"A Skitterwing flutters in. Fragile, but it sees what you cannot.",rattlekin:"Rattlekin arrive — bony enthusiasm and questionable hygiene.",emberling:"An Emberling. Do try not to burn down your own treasury.",gravemage:"A Gravemage darkens the Portal. Point them at the Library — research feeds your spells.",researchHeal:"Library research unlocks Heal! Mend your bruised nightmares.",researchDone:"Research rank %r complete. Spells grow sharper in the dark.",levelUp:"Training pays off — a minion levels up!",heroes:"Heroes at the gate! How quaint. Show them the meaning of Underkeep.",worker:"Another Scrabbler clawed into being. Point it at dirt and watch miracles.",heartHurt:"Your Heart bleeds! Protect it, or this story ends poorly.",win:"The heroes fall. The dark endures. For now.",lose:"The Heart is silent. The Underkeep… underwhelms.",slap:"A firm slap. Back to work!",slapAlt:"A firm slap. Morale through violence — classic.",speed:"Haste, my little nightmares. The clock is cruel.",lightning:"Heaven's temper, redirected. Delightful.",heal:"Green fire stitches flesh. The Library earns its keep.",claim:"Claimed land feeds your mana. Ambition has a wattage.",lairBuilt:"A Lair. Beds for the weary and the wounded. Capacity equals tiles.",lairUse:"Minions claim their bedrolls. Tired claws seek the Lair.",bedClaim:"A minion claims a Lair bed.",lairResting:"A minion is resting in the Lair…",lairFull:"Every bed is taken. Expand the Lair or expect cranky minions.",hatcheryBuilt:"A Hatchery. Nest-food grows while you scheme — hungry mouths will come.",hatcheryUse:"Feast! The Hatchery soothes rumbling guts. Work resumes after.",feasting:"Feasting at the Hatchery.",hatcheryHungry:"The nests are bare. Wait for more Hatchery food… or build more nests.",pickUp:"Into the Hand. Drop them where the work is — or slap sense into them.",drop:"Back on their feet. Back to the dirt.",moodLow:"A minion's mood is crumbling. Beds, food, and space — or they may leave.",sluggishDig:"Sluggish claws… mood is dragging the dig.",leaveThreat:"A minion threatens to leave the Underkeep…",doorBuilt:"A wooden door bars the corridor. Heroes hate hinges.",doorOpen:"Door swings open — minions pass; heroes still hesitate if you close it again.",doorClosed:"Door sealed. Heroes bounce. Creatures can pry it open.",sentryBuilt:"Sentry trap armed. Heroes who tread here learn about arrows.",sentryFire:"Twang! The Sentry greets a hero with sharp hospitality.",guardBuilt:"Guard Room raised. Fighters will hold the line when idle.",rallyPlanted:"Rally flag planted! Call to arms — minions hold this tile.",rallyCleared:"Rally flag struck. Back to ordinary scheming.",groupSelect:"Squad marked. Shift-click or drag-box to gather more — then click a tile to attack-move.",attackMove:"Attack-move! Selected fighters advance and engage.",attackHero:"Hunt them down! Fighters surge toward the heroes.",fog:"Beyond the torchlight — unexplored dark. Dig and claim to push the fog back.",autoFortify:"Idle Scrabblers reinforce soft earth walls on their own. Rock still laughs at them.",lava:"Lava! It cooks the careless. Emberlings laugh; Scrabblers refuse the path — build a bridge.",bridgeWood:"Wooden planks over the fire. Crude, fragrant, and gloriously flammable.",bridgeStone:"Stone bridge — heavier gold, steadier nerves. The lava still sulks beneath.",possess:"Possession! Ride a minion's senses. WASD to steer, Esc to return to the Keeper throne.",possessArm:"Choose a vessel. Click any living minion to Possess them.",possessEnd:"Back in the Keeper's seat. The vessel blinks, confused but intact.",payday:"Payday! %g gold leaves the Treasury — wages keep moods from mutiny.",paydayFail:"Payday failed — the Treasury is empty! Moods crash. Mint gold or expect desertions.",heroesSoon:"Footsteps in the dark… heroes approach. Fortify doors, set traps, rally fighters.",heroesImminent:"Steel at the gate! Heroes arrive any moment.",heroEngage:"Heroes clash with your minions — doors and traps earn their keep.",heroDown:"A hero falls. The Underkeep drinks deep.",workshopBuilt:"Workshop raised! Scrabblers craft door and Sentry kits — or pay less gold at the bench.",craftKit:"Workshop finished a %k kit. Place it free from Build.",craftBusy:"Scrabblers hammer in the Workshop. Kits will stack for doors and traps.",missionBrief:"Mission: Survive %w hero waves — or amass %g gold in the Treasury. Protect the Heart.",waveCleared:"Wave %n cleared! Steel will return — prepare for wave %next of %w.",winWaves:"All hero waves broken. The Underkeep endures!",winGold:"Treasury overflows! Gold wins the day — heroes be damned.",workerSpawn:"Scrabbler forged for %g gold. Next costs %n. Point it at dirt!",prisonBuilt:"Prison raised! Knocked-out heroes can be dragged in — or drop them yourself.",tortureBuilt:"Torture Chamber humming. Prisoners will convert into loyal Thornwitches.",graveyardBuilt:"Graveyard consecrated. Corpses and starved captives rise as Bonewretches.",heroKnocked:"Hero knocked out! Drag them to Prison before they fade.",prisonerHeld:"Captive secured in the Prison. Starve them… or convert them.",converting:"Conversion underway — the hero's will cracks.",converted:"A Thornwitch joins your roster. Loyalty tastes like iron.",boneRaised:"A Bonewretch claws up from the Graveyard. Fearless bones.",starvedBones:"The prisoner starved — bones claim them for the dark.",roomSizeBonus:"Room size %n · +%p% efficiency"};class Zl{width;height;tiles;heartPos={x:0,y:0};constructor(e=48,t=48){this.width=e,this.height=t,this.tiles=[];for(let i=0;i<t;i++)for(let n=0;n<e;n++)this.tiles.push({x:n,y:i,kind:A.Earth,room:T.None,mark:ke.None,fortified:!1,goldAmount:0,claimedProgress:0,digProgress:0,torch:!1,door:Je.None,trap:xt.None,rally:!1,explored:!1});this.generate()}idx(e,t){return t*this.width+e}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}get(e,t){return this.inBounds(e,t)?this.tiles[this.idx(e,t)]:null}worldToTile(e,t){return{x:Math.floor(e/Ve+this.width/2),y:Math.floor(t/Ve+this.height/2)}}tileToWorld(e,t){return{x:(e-this.width/2+.5)*Ve,z:(t-this.height/2+.5)*Ve}}generate(){const e=Math.floor(this.width/2),t=Math.floor(this.height/2);this.heartPos={x:e,y:t};for(let n=0;n<this.height;n++)for(let s=0;s<this.width;s++){const o=this.get(s,n);(s<2||n<2||s>=this.width-2||n>=this.height-2)&&(o.kind=A.Rock)}for(let n=0;n<14;n++){let s=4+Math.floor(Math.random()*(this.width-8)),o=4+Math.floor(Math.random()*(this.height-8));const l=4+Math.floor(Math.random()*8);for(let a=0;a<l;a++){const h=this.get(s,o);h&&h.kind===A.Earth&&(h.kind=A.Gold,h.goldAmount=200+Math.floor(Math.random()*300)),s+=Math.floor(Math.random()*3)-1,o+=Math.floor(Math.random()*3)-1,s=Math.max(3,Math.min(this.width-4,s)),o=Math.max(3,Math.min(this.height-4,o))}}for(let n=0;n<8;n++){let s=5+Math.floor(Math.random()*(this.width-10)),o=5+Math.floor(Math.random()*(this.height-10));if(Math.abs(s-e)<7&&Math.abs(o-t)<7)continue;const l=2+Math.floor(Math.random()*3);for(let a=-l;a<=l;a++)for(let h=-l;h<=l;h++){if(Math.abs(h)+Math.abs(a)>l)continue;const d=this.get(s+h,o+a);d&&d.kind===A.Earth&&(d.kind=A.Rock,d.goldAmount=0)}}for(let n=-3;n<=3;n++)for(let s=-3;s<=3;s++){const o=this.get(e+s,t+n);if(!o)continue;if(s===0&&n===0){o.kind=A.Heart,o.room=T.None;continue}const l=Math.max(Math.abs(s),Math.abs(n));(l<=2||l===3&&s===0&&n===-3)&&(o.kind=A.Claimed,o.claimedProgress=1)}for(let n=t-8;n<t-3;n++)for(let s=e-1;s<=e+1;s++){const o=this.get(s,n);o&&o.kind!==A.Rock&&o.kind!==A.Heart&&(o.kind=A.Claimed,o.claimedProgress=1)}const i=(n,s,o)=>{const l=this.get(n,s);l&&(l.kind===A.Earth||l.kind===A.Gold)&&(l.kind=A.Gold,l.goldAmount=Math.max(l.goldAmount,o),l.fortified=!1)};for(let n=0;n<5;n++)i(e-1+n,t+3,380+n*30);for(let n=0;n<4;n++)i(e+n,t+4,320+n*40);for(let n=0;n<4;n++)i(e+3,t-1+n,360+n*25);for(let n=0;n<3;n++)i(e+4,t+n,300+n*35);this.paintHazardBlob(e-10,t+2,3,A.Lava),this.paintHazardBlob(e-12,t-1,2,A.Lava);for(let n=0;n<5;n++){const s=this.get(e+6+n%2,t+6+Math.floor(n/2));s&&(s.kind===A.Earth||s.kind===A.Gold)&&(s.kind=A.Lava,s.goldAmount=0,s.fortified=!1)}this.paintHazardBlob(e-8,t-8,2,A.Water),this.refreshTorches(),this.seedExploration()}paintHazardBlob(e,t,i,n){const s=this.heartPos.x,o=this.heartPos.y;for(let l=-i;l<=i;l++)for(let a=-i;a<=i;a++){if(a*a+l*l>i*i+.5)continue;const h=e+a,d=t+l;if(Math.abs(h-s)<5&&Math.abs(d-o)<5)continue;const c=this.get(h,d);c&&(c.kind===A.Earth||c.kind===A.Gold)&&(c.kind=n,c.goldAmount=0,c.fortified=!1,c.digProgress=0,c.room=T.None)}}refreshTorches(){for(const e of this.tiles)e.torch=!1;for(const e of this.tiles){if(e.kind!==A.Claimed&&e.kind!==A.Dirt&&e.kind!==A.Heart||(e.x+e.y)%4!==0)continue;const t=[[1,0],[-1,0],[0,1],[0,-1]];for(const[i,n]of t){const s=this.get(e.x+i,e.y+n);if(s&&(s.kind===A.Earth||s.kind===A.Gold||s.kind===A.Rock||s.fortified)){e.torch=!0;break}}}}isSolid(e,t){const i=this.get(e,t);return i?i.kind===A.Earth||i.kind===A.Gold||i.kind===A.Rock||i.fortified:!0}isHazard(e,t){const i=this.get(e,t);return!!i&&(i.kind===A.Lava||i.kind===A.Water)}isBridge(e,t){const i=this.get(e,t);return!!i&&(i.kind===A.BridgeWood||i.kind===A.BridgeStone)}isWalkable(e,t,i){const n=this.get(e,t);return!n||n.fortified?!1:!!(n.kind===A.Dirt||n.kind===A.Claimed||n.kind===A.Heart||n.kind===A.BridgeWood||n.kind===A.BridgeStone||i?.allowHazard&&(n.kind===A.Lava||n.kind===A.Water))}canPlaceBridge(e,t){const i=this.get(e,t);return!i||i.kind!==A.Lava&&i.kind!==A.Water?!1:this.neighbors4(e,t).some(n=>!n.fortified&&(n.kind===A.Dirt||n.kind===A.Claimed||n.kind===A.Heart||n.kind===A.BridgeWood||n.kind===A.BridgeStone))}isDiggable(e,t){const i=this.get(e,t);return!i||i.fortified?!1:i.kind===A.Earth||i.kind===A.Gold}countClaimed(){let e=0;for(const t of this.tiles)(t.kind===A.Claimed||t.kind===A.Heart)&&e++;return e}countRoom(e){let t=0;for(const i of this.tiles)i.room===e&&t++;return t}largestContiguousRoom(e){if(e===T.None)return 0;const t=new Set;let i=0;for(const n of this.tiles){if(n.room!==e)continue;const s=`${n.x},${n.y}`;if(t.has(s))continue;let o=0;const l=[n];for(t.add(s);l.length;){const a=l.pop();o++;for(const h of this.neighbors4(a.x,a.y)){const d=`${h.x},${h.y}`;h.room===e&&!t.has(d)&&(t.add(d),l.push(h))}}o>i&&(i=o)}return i}neighbors4(e,t){const i=[];for(const[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.get(e+n,t+s);o&&i.push(o)}return i}isReachableSolid(e,t){return this.neighbors4(e,t).some(i=>this.isWalkable(i.x,i.y))}hasAdjacentClaimed(e,t){return this.neighbors4(e,t).some(i=>i.kind===A.Claimed||i.kind===A.Heart)}blocksHero(e,t){const i=this.get(e,t);return!!i&&i.door===Je.Closed}canPlaceDoor(e,t){const i=this.get(e,t);if(!i||i.kind!==A.Claimed||i.room!==T.None)return!1;if(i.door!==Je.None)return!0;let n=0,s=0,o=!1;for(const l of this.neighbors4(e,t))(l.fortified||l.kind===A.Earth||l.kind===A.Gold||l.kind===A.Rock)&&n++,!l.fortified&&(l.kind===A.Dirt||l.kind===A.Claimed||l.kind===A.Heart||l.kind===A.BridgeWood||l.kind===A.BridgeStone)&&s++,l.room!==T.None&&(o=!0);return n>=1&&s>=1||o}seedExploration(){for(const e of this.tiles)e.explored=!1;for(const e of this.tiles)(e.kind===A.Claimed||e.kind===A.Heart||e.kind===A.Dirt)&&(e.explored=!0);for(const e of this.tiles)if(e.explored&&!(e.kind!==A.Claimed&&e.kind!==A.Heart&&e.kind!==A.Dirt))for(const t of this.neighbors4(e.x,e.y))t.explored=!0}revealTile(e,t){const i=this.get(e,t);return!i||i.explored?!1:(i.explored=!0,!0)}revealAround(e,t,i=1){let n=!1;for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)this.revealTile(e+o,t+s)&&(n=!0);return n}revealFromTerritory(){let e=!1;for(const t of this.tiles)if(!(t.kind!==A.Claimed&&t.kind!==A.Heart&&t.kind!==A.Dirt)){t.explored||(t.explored=!0,e=!0);for(const i of this.neighbors4(t.x,t.y))i.explored||(i.explored=!0,e=!0)}return e}isExplored(e,t){const i=this.get(e,t);return!!i&&i.explored}findPath(e,t,i,n,s){if(!this.inBounds(e,t)||!this.inBounds(i,n))return null;if(e===i&&t===n)return[{x:i,y:n}];const o=(p,x)=>x*this.width+p,l=[{x:e,y:t,f:0}],a=new Map,h=new Map;h.set(o(e,t),0);const d=new Set,c=(p,x)=>Math.abs(p-i)+Math.abs(x-n),u=!!s?.forHero,f=!!s?.allowHazard,g=(p,x)=>u&&this.blocksHero(p,x)?!1:!!(this.isWalkable(p,x,{allowHazard:f})||p===i&&x===n&&this.isDiggable(p,x)||p===i&&x===n&&p===this.heartPos.x&&x===this.heartPos.y),v=(p,x)=>{const S=this.get(p,x);return S?S.kind===A.Lava?4:S.kind===A.Water?3:1:1};let m=0;for(;l.length&&m++<5e3;){l.sort((S,_)=>S.f-_.f);const p=l.shift(),x=o(p.x,p.y);if(!d.has(x)){if(d.add(x),p.x===i&&p.y===n){const S=[{x:i,y:n}];let _=x;for(;a.has(_);){const I=a.get(_);S.push({x:I%this.width,y:Math.floor(I/this.width)}),_=I}return S.reverse(),S}for(const[S,_]of[[1,0],[-1,0],[0,1],[0,-1]]){const I=p.x+S,P=p.y+_;if(!this.inBounds(I,P)||!g(I,P))continue;const R=o(I,P);if(d.has(R))continue;const L=(h.get(x)??1/0)+v(I,P);L<(h.get(R)??1/0)&&(a.set(R,x),h.set(R,L),l.push({x:I,y:P,f:L+c(I,P)}))}}}return null}findPathAdjacent(e,t,i,n,s){let o=null;for(const[l,a]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=i+l,d=n+a;if(!this.isWalkable(h,d)||s?.forHero&&this.blocksHero(h,d))continue;const c=this.findPath(e,t,h,d,s);c&&(!o||c.length<o.length)&&(o=c)}return o}}const hr="underkeep-save-v1",E0=new Set(Object.values(ie)),A0=new Set([A.Rock,A.Earth,A.Gold,A.Dirt,A.Claimed,A.Heart,A.Wall,A.Lava,A.Water,A.BridgeWood,A.BridgeStone]);function oi(r){return typeof r=="number"&&Number.isFinite(r)}function Hh(r,e,t){if(!r||typeof r!="object")return"not-object";const i=r;if(i.v!==1)return"bad-version";if(i.width!==e||i.height!==t)return"size-mismatch";if(!i.heartPos||!oi(i.heartPos.x)||!oi(i.heartPos.y))return"bad-heartPos";if(i.heartPos.x<0||i.heartPos.y<0||i.heartPos.x>=e||i.heartPos.y>=t)return"heartPos-oob";if(!Array.isArray(i.tiles)||i.tiles.length!==e*t)return"bad-tiles-length";if(!oi(i.gold)||i.gold<0)return"bad-gold";if(!oi(i.mana)||i.mana<0)return"bad-mana";if(!Array.isArray(i.creatures))return"bad-creatures";let n=0,s=0;for(let a=0;a<i.tiles.length;a++){const h=i.tiles[a];if(!h||typeof h!="object")return"bad-tile";if(!A0.has(h.kind))return"bad-tile-kind";h.kind===A.Heart&&n++,(h.kind===A.Earth||h.kind===A.Gold)&&s++}if(n<1)return"no-heart-tile";const o=i.heartPos.y*e+i.heartPos.x;if(i.tiles[o]?.kind!==A.Heart)return"heartPos-mismatch";if(!i.gameOver&&s<1)return"no-diggable";let l=0;for(const a of i.creatures){if(!a||typeof a!="object")return"bad-creature";if(!E0.has(a.kind))return"bad-creature-kind";if(!oi(a.x)||!oi(a.y))return"bad-creature-pos";a.kind===ie.Scrabbler&&l++}if(!i.gameOver&&l<1)return"no-scrabbler";if(i.cam){const a=i.cam;if(!oi(a.tx)||!oi(a.tz)||!oi(a.cx)||!oi(a.cy)||!oi(a.cz))return"bad-cam"}return null}function C0(r,e){try{const t=localStorage.getItem(hr);if(!t)return null;const i=JSON.parse(t);if(r!=null&&e!=null){const s=Hh(i,r,e);if(s){console.warn("[underkeep] rejecting save:",s);try{localStorage.removeItem(hr)}catch{}return null}return i}if(!i||typeof i!="object")return null;const n=i;return n.v!==1||!Array.isArray(n.tiles)||!n.width||!n.height?null:n}catch(t){return console.warn("[underkeep] save parse failed",t),null}}function P0(r){try{localStorage.setItem(hr,JSON.stringify(r))}catch{}}function Gi(){try{localStorage.removeItem(hr)}catch{}}function R0(r){return r.map(e=>({kind:e.kind,room:e.room,mark:e.mark,fortified:e.fortified,goldAmount:e.goldAmount,claimedProgress:e.claimedProgress,digProgress:e.digProgress,torch:e.torch,door:e.door??Je.None,trap:e.trap??xt.None,rally:!!e.rally,explored:!!e.explored}))}function L0(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const n=r[i],s=e[i];n.kind=s.kind,n.room=s.room,n.mark=s.mark,n.fortified=!!s.fortified,n.goldAmount=s.goldAmount??0,n.claimedProgress=s.claimedProgress??0,n.digProgress=s.digProgress??0,n.torch=!!s.torch,n.door=s.door??Je.None,n.trap=s.trap??xt.None,n.rally=!!s.rally,n.explored=s.explored===void 0?!1:!!s.explored}}const D0=150,I0=100,io=25,no=40;class k0{grid;renderer;hud;creatures=[];gold=600;mana=50;tool="select";held=null;selected=null;selectedGroup=[];possessed=null;possessCamBackup=null;possessArmed=!1;lavaDmgAcc=0;paydayToastCooldown=0;wavesCleared=0;doorKits=0;sentryKits=0;goldEver=600;minimapAcc=0;nextKitIsDoor=!0;corpses=[];boxSelecting=!1;boxStartClient=null;boxMoved=!1;boxPointerId=null;pendingPrimary=null;marqueeEl=null;heroWarn30=!1;heroWarn10=!1;heroEngageAnnounced=!1;gridDirty=!0;time=0;workerCostScale=0;portalCooldown=0;attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1};heroWaveSpawned=!1;heroWaveTimer=90;gameOver=!1;won=!1;paint=!1;lastPaint=null;camTarget=new E(0,0,0);keys=new Set;mentored=new Set;touchMode="none";touchStartTime=0;touchStartClient={clientX:0,clientY:0};touchMoved=!1;longPressTimer=null;pinchStartDist=0;pinchStartCamY=0;activeTouches=new Map;ignoreMouseUntil=0;panAccum={x:0,y:0};saveAcc=0;restoredFromSave=!1;hatcheryFood=0;foodRegenAcc=0;bedOwners=new Map;contextRecoveryShown=!1;marksDirty=!1;fogDirty=!1;rebuildCooldown=0;pendingStructuralRebuild=!1;researchProgress=0;researchRank=0;healUnlocked=!1;constructor(e){this.hud=new T0,this.marqueeEl=document.getElementById("select-marquee"),this.hud.onToolChange=i=>{this.tool=i,i!=="select"&&this.cancelBoxSelect()},this.hud.onSpell=i=>this.castSpell(i),this.hud.onOverlayContinue=()=>{this.gameOver&&(Gi(),location.reload())},this.hud.onNewGame=()=>this.confirmNewGame(),this.hud.onInspectorClose=()=>this.clearSelection(),this.grid=new Zl(40,40),this.renderer=new b0(e),this.renderer.onContextLost=()=>this.handleContextLost(),this.renderer.onContextRestored=()=>this.handleContextRestored();let t=!1;try{t=this.bootFromSaveOrFresh()}catch(i){console.error("[underkeep] boot failed — clearing save and starting Intro",i),Gi(),this.resetRuntimeState(),this.startFresh(!0),t=!1}this.bindInput(e),this.rebuild(),this.syncAllEntityMeshes(),t&&this.isPlayableOrEnded()&&this.saveNow(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(i=>i.alive&&i.isWorker).length,this.creatures.filter(i=>i.alive&&!i.isWorker&&!i.isHero).length),this.markReady()}markReady(){document.body.classList.remove("booting")}handleContextLost(){this.contextRecoveryShown||(this.contextRecoveryShown=!0,this.hud.showOverlay("Graphics hiccup","The dungeon view lost its WebGL context (often after heavy digging). Reload to restore — your save is kept.","Reload Dungeon"),this.hud.onOverlayContinue=()=>{location.reload()})}handleContextRestored(){this.contextRecoveryShown=!1,this.gridDirty=!0,this.rebuild(),this.syncAllEntityMeshes(),this.hud.say("The Underkeep re-solidifies. Dig on, Keeper."),this.hud.hideOverlay()}isPlayableOrEnded(){if(this.gameOver)return!0;const e=this.grid.get(this.grid.heartPos.x,this.grid.heartPos.y);return!e||e.kind!==A.Heart||!this.grid.tiles.some(n=>n.kind===A.Earth||n.kind===A.Gold)?!1:this.creatures.filter(n=>n.alive&&n.isWorker).length>=1}syncAllEntityMeshes(){for(const e of this.creatures)e.alive&&e.syncMesh(this.time)}resetRuntimeState(){for(const e of this.creatures)try{this.renderer?.removeEntityMesh(e.mesh),e.mesh?.parent&&e.mesh.parent.remove(e.mesh)}catch{}this.creatures=[],this.gold=600,this.mana=50,this.tool="select",this.held=null,this.selected=null,this.selectedGroup=[],this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee(),this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1,this.hud.hideInspector(),this.time=0,this.workerCostScale=0,this.portalCooldown=0,this.attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1},this.heroWaveSpawned=!1,this.heroWaveTimer=90,this.wavesCleared=0,this.doorKits=0,this.sentryKits=0,this.goldEver=600,this.minimapAcc=0,this.nextKitIsDoor=!0,this.gameOver=!1,this.won=!1,this.mentored=new Set,this.wageAcc=0,this.heartHp=500,this.restoredFromSave=!1,this.hatcheryFood=0,this.foodRegenAcc=0,this.bedOwners.clear(),this.contextRecoveryShown=!1,this.researchProgress=0,this.researchRank=0,this.healUnlocked=!1,this.exitPossession(!0),this.possessArmed=!1,this.lavaDmgAcc=0,this.paydayToastCooldown=0,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=0,this.grid=new Zl(40,40)}bootFromSaveOrFresh(){const e=C0(this.grid.width,this.grid.height);if(!e)return this.startFresh(!0),!1;const t=Hh(e,this.grid.width,this.grid.height);if(t)return console.warn("[underkeep] invalid save on boot:",t),Gi(),this.startFresh(!0),!1;try{this.applySave(e)}catch(i){return console.error("[underkeep] applySave threw",i),Gi(),this.resetRuntimeState(),this.startFresh(!0),!1}return this.isPlayableOrEnded()?(this.restoredFromSave=!0,this.gameOver?this.hud.showOverlay(this.won?"Victory":"Defeat",this.won?X.win+" The Underkeep stands.":X.lose,"Try Again"):this.hud.say(X.resume),!0):(console.warn("[underkeep] restored state not playable — falling back to Intro"),Gi(),this.resetRuntimeState(),this.startFresh(!0),!1)}startFresh(e){this.creatures.length===0&&(this.spawnCreature(ie.Scrabbler,this.grid.heartPos.x+1,this.grid.heartPos.y),this.spawnCreature(ie.Scrabbler,this.grid.heartPos.x-1,this.grid.heartPos.y),this.spawnCreature(ie.Scrabbler,this.grid.heartPos.x,this.grid.heartPos.y+1));const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+4,28,t.z+18),this.renderer.camera.lookAt(this.camTarget),this.hud.say(X.start),e&&(this.hud.showOverlay("Mission Briefing",`You are the Keeper of the Underkeep. Dig, claim, raise rooms, and crush heroes — the Heart must not fall. Objective: Survive ${Jt} hero waves — OR gather ${en} gold in the Treasury. Workshop kits arm doors & traps.`,"Begin"),this.hud.say(X.missionBrief.replace("%w",String(Jt)).replace("%g",String(en))))}mentioneOnce(e,t){this.mentored.has(e)||(this.mentored.add(e),this.hud.say(t))}confirmNewGame(){this.hud.showOverlay("New Game?","This clears your saved dungeon and starts fresh. Hard refresh will no longer restore the old map.","Keep Playing","Erase & Restart");const e=this.hud.onNewGame,t=this.hud.onOverlayContinue;this.hud.onOverlayContinue=()=>{this.hud.onNewGame=e,this.hud.onOverlayContinue=t},this.hud.onNewGame=()=>{Gi();const i=new URL(location.href);i.searchParams.delete("shot"),i.searchParams.delete("pass"),location.replace(i.pathname+i.search+i.hash)}}buildSave(){return{v:1,width:this.grid.width,height:this.grid.height,heartPos:{...this.grid.heartPos},tiles:R0(this.grid.tiles),gold:this.gold,mana:this.mana,creatures:this.creatures.filter(e=>e.alive).map(e=>({kind:e.kind,x:e.x,y:e.y,wx:e.wx,wz:e.wz,hp:e.hp,maxHp:e.maxHp,level:e.level,goldCarried:e.goldCarried,hunger:e.hunger,sleepNeed:e.sleepNeed,trainNeed:e.trainNeed,isHero:e.isHero})),attracted:{...this.attracted},researchProgress:this.researchProgress,researchRank:this.researchRank,healUnlocked:this.healUnlocked,heroWaveSpawned:this.heroWaveSpawned,heroWaveTimer:this.heroWaveTimer,workerCostScale:this.workerCostScale,portalCooldown:this.portalCooldown,time:this.time,wageAcc:this.wageAcc,mentored:[...this.mentored],gameOver:this.gameOver,won:this.won,wavesCleared:this.wavesCleared,doorKits:this.doorKits,sentryKits:this.sentryKits,goldEver:this.goldEver,cam:{tx:this.camTarget.x,tz:this.camTarget.z,cx:this.renderer.camera.position.x,cy:this.renderer.camera.position.y,cz:this.renderer.camera.position.z}}}saveNow(){this.gameOver||this.isPlayableOrEnded()&&P0(this.buildSave())}applySave(e){if(e.width!==this.grid.width||e.height!==this.grid.height)throw new Error("save size mismatch");L0(this.grid.tiles,e.tiles),this.grid.heartPos={x:e.heartPos.x,y:e.heartPos.y},this.grid.tiles.some(i=>i.explored)?this.grid.revealFromTerritory():this.grid.seedExploration(),this.gold=e.gold,this.mana=e.mana,this.attracted={skitterwing:!!e.attracted?.skitterwing,rattlekin:!!e.attracted?.rattlekin,emberling:!!e.attracted?.emberling,gravemage:!!e.attracted?.gravemage},this.researchProgress=e.researchProgress??0,this.researchRank=e.researchRank??0,this.healUnlocked=!!e.healUnlocked,this.heroWaveSpawned=!!e.heroWaveSpawned,this.heroWaveTimer=e.heroWaveTimer??90,this.workerCostScale=e.workerCostScale??0,this.portalCooldown=e.portalCooldown??0,this.time=e.time??0,this.wageAcc=e.wageAcc??0,this.mentored=new Set(e.mentored??[]),this.gameOver=!!e.gameOver,this.won=!!e.won,this.wavesCleared=e.wavesCleared??0,this.doorKits=e.doorKits??0,this.sentryKits=e.sentryKits??0,this.goldEver=e.goldEver??Math.max(e.gold,600),this.heroWaveSpawned&&this.wavesCleared===0&&!this.won&&!this.gameOver&&!(e.creatures??[]).some(i=>i.isHero)&&(this.wavesCleared=1,this.wavesCleared<Jt&&(this.heroWaveSpawned=!1,this.heroWaveTimer=55,this.heroWarn30=!1,this.heroWarn10=!1));for(const i of this.creatures)this.renderer.removeEntityMesh(i.mesh),i.mesh.parent&&i.mesh.parent.remove(i.mesh);this.creatures=[];for(const i of e.creatures){const n=this.spawnCreature(i.kind,i.x,i.y);Number.isFinite(i.wx)&&Number.isFinite(i.wz)&&(n.wx=i.wx,n.wz=i.wz),n.hp=i.hp,n.maxHp=i.maxHp,n.level=i.level??1,n.goldCarried=i.goldCarried??0,n.hunger=i.hunger??0,n.sleepNeed=i.sleepNeed??0,n.trainNeed=i.trainNeed??0,n.mood=72,n.clampStats(),n.syncMesh(this.time)}const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);e.cam&&Number.isFinite(e.cam.tx)&&Number.isFinite(e.cam.tz)&&Number.isFinite(e.cam.cx)&&Number.isFinite(e.cam.cy)&&Number.isFinite(e.cam.cz)&&e.cam.cy>5?(this.camTarget.set(e.cam.tx,0,e.cam.tz),this.renderer.camera.position.set(e.cam.cx,e.cam.cy,e.cam.cz),this.renderer.camera.lookAt(this.camTarget)):(this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+4,28,t.z+18),this.renderer.camera.lookAt(this.camTarget)),this.gridDirty=!0}spawnCreature(e,t,i){const n=new zg(e,t,i,this.grid),s=qo[e],o=this.renderer.createEntityVisual(e,s.color,s.scale);n.setMesh(o);const l=o;return n.pickaxe=l.pickaxe??null,n.selectRing=l.selectRing??null,this.renderer.addEntityMesh(o),this.creatures.push(n),n}rebuild(){this.grid.refreshTorches(),this.renderer.rebuildGrid(this.grid),this.gridDirty=!1,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=.22}requestStructuralRebuild(){this.pendingStructuralRebuild=!0,this.gridDirty=!0}flushMarks(){this.marksDirty&&(this.renderer.syncMarkOverlay(this.grid),this.marksDirty=!1)}flushFog(){this.fogDirty&&(this.renderer.syncFogOverlay(this.grid),this.fogDirty=!1)}noteFogChange(e){e&&(this.fogDirty=!0)}safeMood(e,t){const i=Number.isFinite(e.mood)?e.mood:72,n=Number.isFinite(t)?t:i;e.mood=Math.max(0,Math.min(100,n))}pruneSelection(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero),this.selected&&(!this.selected.alive||this.selected.isHero)&&(this.selected=null),this.selected&&!this.selectedGroup.includes(this.selected)&&this.selectedGroup.push(this.selected),!this.selected&&this.selectedGroup.length&&(this.selected=this.selectedGroup[this.selectedGroup.length-1]),this.selectedGroup.length||(this.selected=null,this.hud.hideInspector())}catch(e){console.warn("[underkeep] pruneSelection failed",e),this.selected=null,this.selectedGroup=[];try{this.hud.hideInspector()}catch{}}}bindInput(e){window.addEventListener("keydown",n=>{this.keys.add(n.key.toLowerCase());const s={1:"select",2:"dig",3:"claim",4:"fortify",5:"treasury",6:"lair",7:"hatchery",8:"training",9:"library",0:"portal",g:"guard",u:"workshop",j:"prison",k:"torture",h:"graveyard",d:"door",f:"sentry",y:"rally"};if(s[n.key]&&(this.tool=s[n.key],this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="q"&&this.castSpell("createWorker"),n.key.toLowerCase()==="e"&&this.castSpell("speed"),n.key.toLowerCase()==="r"&&this.castSpell("lightning"),n.key.toLowerCase()==="t"&&this.castSpell("heal"),n.key.toLowerCase()==="p"&&this.castSpell("possess"),n.key.toLowerCase()==="b"&&(this.tool="bridgeWood",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="n"&&(this.tool="bridgeStone",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()===" "&&this.held&&(n.preventDefault(),this.dropHeld()),n.key==="Escape"){if(this.possessed){this.exitPossession();return}this.cancelBoxSelect(),this.clearSelection(),this.possessArmed=!1}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),e.addEventListener("contextmenu",n=>n.preventDefault());const t=n=>n.preventDefault();e.addEventListener("gesturestart",t,{passive:!1}),e.addEventListener("gesturechange",t,{passive:!1}),e.addEventListener("mousedown",n=>{if(performance.now()<this.ignoreMouseUntil||this.gameOver)return;const s=this.pointerToTile(n,e);if(!s)return;const o=this.pointerToWorld(n,e)??new E;if(n.button===2){this.cancelBoxSelect(),this.handleSecondaryAt(s.x,s.y,o);return}if(n.button===0){if(this.tool==="select"&&!this.held){const l=this.creatureAt(s.x,s.y,o);if(!l||l.isHero){this.boxSelecting=!0,this.boxMoved=!1,this.boxStartClient={x:n.clientX,y:n.clientY},this.pendingPrimary={tx:s.x,ty:s.y,hit:o.clone(),shift:n.shiftKey};return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey);return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey)}}),e.addEventListener("mouseup",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.boxSelecting&&this.boxStartClient){const s=this.boxStartClient;if(this.boxMoved)this.selectCreaturesInScreenBox(e,s.x,s.y,n.clientX,n.clientY,n.shiftKey||!!this.pendingPrimary?.shift);else if(this.pendingPrimary){const o=this.pendingPrimary;this.handlePrimaryAt(o.tx,o.ty,o.hit,o.shift||n.shiftKey)}this.cancelBoxSelect()}this.paint=!1,this.lastPaint=null,this.flushMarks()}}),e.addEventListener("mouseleave",()=>{this.boxSelecting&&this.cancelBoxSelect()}),e.addEventListener("mousemove",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.updatePointerHover(n,e),this.boxSelecting&&this.boxStartClient&&this.tool==="select"){const s=n.clientX-this.boxStartClient.x,o=n.clientY-this.boxStartClient.y;Math.hypot(s,o)>8&&(this.boxMoved=!0,this.updateMarquee(this.boxStartClient.x,this.boxStartClient.y,n.clientX,n.clientY))}if(this.paint&&this.tool!=="select"){const s=this.pointerToTile(n,e);if(!s)return;(!this.lastPaint||this.lastPaint.x!==s.x||this.lastPaint.y!==s.y)&&(this.applyTool(s.x,s.y),this.lastPaint={...s})}if(this.held)try{const s=this.pointerToWorld(n,e);s&&Number.isFinite(s.x)&&Number.isFinite(s.z)&&(this.held.wx=s.x,this.held.wz=s.z)}catch(s){console.warn("[underkeep] held follow failed",s)}}}),e.addEventListener("wheel",n=>{n.preventDefault(),this.zoomBy(-Math.sign(n.deltaY)*1.5)},{passive:!1}),e.addEventListener("touchstart",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++){const l=n.changedTouches[o];this.activeTouches.set(l.identifier,{clientX:l.clientX,clientY:l.clientY})}const s=[...this.activeTouches.values()];if(s.length>=2){this.clearLongPress();const[o,l]=s;if(this.pinchStartDist=Math.hypot(o.clientX-l.clientX,o.clientY-l.clientY),this.pinchStartCamY=this.renderer.camera.position.y,this.touchMode==="tap"&&!this.touchMoved&&performance.now()-this.touchStartTime<280){const a=this.pointerToTile(this.touchStartClient,e);a&&this.handleSecondaryAt(a.x,a.y),this.touchMode="none",this.activeTouches.clear();return}this.touchMode="pinch",this.paint=!1;return}if(s.length===1){const o=s[0];this.touchStartClient={clientX:o.clientX,clientY:o.clientY},this.touchStartTime=performance.now(),this.touchMoved=!1,this.panAccum={x:0,y:0},this.touchMode="tap",this.clearLongPress(),this.longPressTimer=window.setTimeout(()=>{if(this.touchMode!=="tap"||this.touchMoved)return;this.touchMode="longpress";const l=this.pointerToTile(this.touchStartClient,e);l&&this.handleSecondaryAt(l.x,l.y);try{navigator.vibrate?.(15)}catch{}},450)}},{passive:!1}),e.addEventListener("touchmove",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let d=0;d<n.changedTouches.length;d++){const c=n.changedTouches[d];this.activeTouches.set(c.identifier,{clientX:c.clientX,clientY:c.clientY})}const s=[...this.activeTouches.values()];if(this.touchMode==="pinch"||s.length>=2){if(this.clearLongPress(),this.touchMode="pinch",s.length>=2){const[d,c]=s,u=Math.hypot(d.clientX-c.clientX,d.clientY-c.clientY);if(this.pinchStartDist>0){const f=u/this.pinchStartDist,g=this.renderer.camera,v=Ia.clamp(this.pinchStartCamY/f,12,45),m=v-g.position.y;if(Math.abs(m)>.01){const p=new E;g.getWorldDirection(p),g.position.y=v;const x=m*.35;g.position.x+=p.x*-x,g.position.z+=p.z*-x,g.lookAt(this.camTarget.x,0,this.camTarget.z)}}}return}if(s.length!==1)return;const o=s[0],l=o.clientX-this.touchStartClient.clientX,a=o.clientY-this.touchStartClient.clientY,h=Math.hypot(l,a);if(!this.touchMoved&&h>12)if(this.touchMoved=!0,this.clearLongPress(),this.tool!=="select"&&!this.held){this.touchMode="paint",this.paint=!0;const d=this.pointerToTile(o,e);d&&(this.applyTool(d.x,d.y),this.lastPaint={...d})}else this.held?this.touchMode="tap":this.touchMode="pan";if(this.touchMode==="paint"){const d=this.pointerToTile(o,e);d&&((!this.lastPaint||this.lastPaint.x!==d.x||this.lastPaint.y!==d.y)&&(this.applyTool(d.x,d.y),this.lastPaint={...d}),this.updatePointerHover(o,e))}else if(this.touchMode==="pan"){const d=o.clientX-(this.touchStartClient.clientX+this.panAccum.x),c=o.clientY-(this.touchStartClient.clientY+this.panAccum.y);this.panAccum.x=l,this.panAccum.y=a,this.panCameraByScreen(-d,-c)}else if(this.held){try{const d=this.pointerToWorld(o,e);d&&Number.isFinite(d.x)&&Number.isFinite(d.z)&&(this.held.wx=d.x,this.held.wz=d.z)}catch{}this.updatePointerHover(o,e)}else this.updatePointerHover(o,e)},{passive:!1}),e.addEventListener("touchend",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++)this.activeTouches.delete(n.changedTouches[o].identifier);if(this.touchMode==="pinch"){this.activeTouches.size<2&&(this.touchMode=this.activeTouches.size===1?"pan":"none",this.pinchStartDist=0),this.activeTouches.size===0&&(this.touchMode="none",this.paint=!1,this.lastPaint=null);return}if(this.activeTouches.size>0)return;const s=this.touchMode;if(this.clearLongPress(),s==="tap"&&!this.touchMoved&&!this.gameOver){const o=this.pointerToTile(this.touchStartClient,e),l=this.pointerToWorld(this.touchStartClient,e);o&&l&&this.handlePrimaryAt(o.x,o.y,l)}this.touchMode="none",this.paint=!1,this.lastPaint=null},{passive:!1}),e.addEventListener("touchcancel",n=>{for(let s=0;s<n.changedTouches.length;s++)this.activeTouches.delete(n.changedTouches[s].identifier);this.clearLongPress(),this.touchMode="none",this.paint=!1,this.lastPaint=null,this.pinchStartDist=0});const i=document.getElementById("pan-zone");if(i){let n=null;i.addEventListener("touchstart",s=>{s.preventDefault();const o=s.changedTouches[0];n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchmove",s=>{s.preventDefault();const o=s.changedTouches[0];if(!n){n={x:o.clientX,y:o.clientY};return}this.panCameraByScreen(-(o.clientX-n.x),-(o.clientY-n.y)),n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchend",()=>{n=null}),i.addEventListener("touchcancel",()=>{n=null})}}clearLongPress(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}handlePrimaryAt(e,t,i,n=!1){try{if(this.tool==="select"){if(this.possessed){this.possessMoveTo(e,t);return}if(this.held){this.dropHeldAt(e,t);return}const s=this.creatureAt(e,t,i);if(this.possessArmed&&s&&!s.isHero){if(this.possessArmed=!1,this.mana<Cn){this.hud.say("Not enough mana to Possess.");return}this.mana-=Cn,this.enterPossession(s);return}if(s&&!s.isHero&&n){this.toggleSelectCreature(s);return}if(s&&s.isHero&&(s.knockedOut||s.isPrisoner)){this.pickUp(s);return}if(s&&s.isHero&&!s.knockedOut&&!s.isPrisoner&&this.selectedGroup.some(o=>o.alive&&!o.isWorker)){this.issueAttackMove(s.x,s.y,!0);return}if(s&&!s.isHero){this.selectCreature(s),this.pickUp(s);return}if(this.selectedGroup.some(o=>o.alive&&!o.held)&&(this.grid.isWalkable(e,t)||this.grid.get(e,t)?.kind===A.Heart)){this.issueAttackMove(e,t,!1);return}this.clearSelection()}else this.paint=!0,this.applyTool(e,t),this.lastPaint={x:e,y:t}}catch(s){console.warn("[underkeep] primary input failed",s)}}handleSecondaryAt(e,t,i){try{if(this.tool==="select"){let s=null;if(this.held&&!this.held.isHero?s=this.held:(s=this.creatureAt(e,t,i),(!s||s.isHero)&&this.selected&&this.selected.alive&&!this.selected.isHero&&(s=this.selected)),s&&!s.isHero){s.held||this.selectCreature(s),this.slap(s);return}}else if(this.held){this.dropHeld();return}const n=this.grid.get(e,t);n&&n.mark!==ke.None&&(n.mark=ke.None,this.marksDirty=!0,this.flushMarks())}catch(n){console.warn("[underkeep] secondary input failed",n)}}updatePointerHover(e,t){const i=this.pointerToTile(e,t);if(!i||!this.grid.inBounds(i.x,i.y)){this.renderer.setHover(0,0,!1);return}const n=this.grid.tileToWorld(i.x,i.y);this.renderer.setHover(n.x,n.z,!0,this.toolColor());const s=this.grid.get(i.x,i.y);if(s){let o=s.room!==T.None?` · ${["","Treasury","Lair","Hatchery","Training","Library","Portal","Guard","Workshop","Prison","Torture Chamber","Graveyard"][s.room]}`:"";if(s.room===T.Hatchery&&(o+=` · food ${Math.floor(this.hatcheryFood)}`),s.room===T.Workshop&&(o+=` · kits D${this.doorKits}/S${this.sentryKits}`),s.room===T.Lair||s.room===T.Hatchery||s.room===T.Library){const d=this.grid.largestContiguousRoom(s.room),c=os(d);d>0&&(o+=` · size ${d}`,c>0&&(o+=` · +${Math.round(c*100)}% eff`))}if(s.room===T.Prison){const d=this.creatures.filter(c=>c.alive&&c.isPrisoner).length;o+=` · prisoners ${d}`}if(s.room===T.Graveyard&&(o+=` · corpses ${this.corpses.length}`),s.door===Je.Closed&&(o+=" · Door (closed)"),s.door===Je.Open&&(o+=" · Door (open)"),s.trap===xt.Sentry&&(o+=" · Sentry trap"),s.rally&&(o+=" · Rally flag"),s.room===T.Lair){const d=this.grid.countRoom(T.Lair);o+=` · beds ${this.countOccupiedBeds()}/${d}`}const l=s.digProgress>0?` · dig ${Math.floor(s.digProgress*100)}%`:"",a=s.kind===A.Gold?"Gold":s.kind===A.Earth?"Earth":s.kind===A.Rock?"Rock":s.kind===A.Lava?"Lava":s.kind===A.Water?"Water":s.kind===A.BridgeWood?"Wood Bridge":s.kind===A.BridgeStone?"Stone Bridge":A[s.kind];let h=`(${i.x},${i.y}) ${a}${s.fortified?" [fortified]":""}${o}${l}`;if(this.tool==="select"){const d=this.creatureAt(i.x,i.y);d&&!d.isHero?h+=` · ${d.kind} mood ${Math.floor(d.mood)} · eff ${Math.round(d.workEfficiency()*100)}%`:this.held&&(h+=" · drop here")}this.hud.setTooltip(h)}}panCameraByScreen(e,t){const i=this.renderer.camera,n=new E;i.getWorldDirection(n),n.y=0,n.normalize();const s=new E().crossVectors(n,new E(0,1,0)).normalize(),o=i.position.y*.0028,l=s.multiplyScalar(e*o).add(n.multiplyScalar(-t*o));i.position.add(l),this.camTarget.add(l),i.lookAt(this.camTarget.x,0,this.camTarget.z)}zoomBy(e){const t=this.renderer.camera,i=new E;t.getWorldDirection(i),t.position.addScaledVector(i,e),t.position.y=Ia.clamp(t.position.y,12,45),t.lookAt(this.camTarget.x,0,this.camTarget.z)}pointerNdc(e,t){const i=t.getBoundingClientRect();return{nx:(e.clientX-i.left)/i.width*2-1,ny:-((e.clientY-i.top)/i.height)*2+1}}pointerToWorld(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?new E(s.x,0,s.z):null}pointerToTile(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?typeof s.tileX=="number"&&typeof s.tileY=="number"?{x:s.tileX,y:s.tileY}:this.grid.worldToTile(s.x,s.z):null}toolColor(){switch(this.tool){case"dig":return 16729122;case"claim":return 4491519;case"fortify":return 11184810;case"select":return 16764006;case"bridgeWood":return 12615744;case"bridgeStone":return 8425640;default:return 8978278}}creatureAt(e,t,i){let n=null,s=1.85;for(const o of this.creatures){if(!o.alive||o.held)continue;let l=Math.hypot(o.x-e,o.y-t);if(i){const a=Math.hypot(o.wx-i.x,o.wz-i.z)/Ve;l=Math.min(l,a)}l<s&&(s=l,n=o)}return n}hideMarquee(){this.marqueeEl&&(this.marqueeEl.classList.add("hidden"),this.marqueeEl.style.width="0",this.marqueeEl.style.height="0")}cancelBoxSelect(){this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee()}updateMarquee(e,t,i,n){if(!this.marqueeEl)return;const s=Math.min(e,i),o=Math.min(t,n),l=Math.abs(i-e),a=Math.abs(n-t);this.marqueeEl.classList.remove("hidden"),this.marqueeEl.style.left=`${s}px`,this.marqueeEl.style.top=`${o}px`,this.marqueeEl.style.width=`${l}px`,this.marqueeEl.style.height=`${a}px`}clearSelection(){for(const e of this.selectedGroup)e.selected=!1;this.selected&&(this.selected.selected=!1),this.selected=null,this.selectedGroup=[],this.hud.hideInspector()}syncSelectionPrimary(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero);for(const e of this.creatures)this.selectedGroup.includes(e)||(e.selected=!1);for(const e of this.selectedGroup)e.selected=!0;this.selected=this.selectedGroup.length?this.selectedGroup[this.selectedGroup.length-1]:null,this.refreshInspector()}catch(e){console.warn("[underkeep] syncSelectionPrimary failed",e),this.pruneSelection()}}selectCreature(e){if(!(!e||!e.alive||e.isHero)){for(const t of this.selectedGroup)t.selected=!1;this.selectedGroup=[e],this.selected=e,e.selected=!0,this.refreshInspector()}}toggleSelectCreature(e){if(!e||!e.alive||e.isHero)return;const t=this.selectedGroup.indexOf(e);t>=0?(e.selected=!1,this.selectedGroup.splice(t,1)):(this.selectedGroup.push(e),e.selected=!0,this.mentioneOnce("groupSelect",X.groupSelect)),this.syncSelectionPrimary()}selectCreaturesInScreenBox(e,t,i,n,s,o){try{const l=Math.min(t,n),a=Math.max(t,n),h=Math.min(i,s),d=Math.max(i,s);if(a-l<6&&d-h<6)return;const c=this.renderer.camera,u=e.getBoundingClientRect(),f=[],g=new E;for(const v of this.creatures){if(!v.alive||v.isHero||v.held||!Number.isFinite(v.wx)||!Number.isFinite(v.wz)||(g.set(v.wx,.6,v.wz),g.project(c),!Number.isFinite(g.x)||!Number.isFinite(g.y)))continue;const m=(g.x+1)/2*u.width+u.left,p=(-g.y+1)/2*u.height+u.top;m>=l&&m<=a&&p>=h&&p<=d&&f.push(v)}if(!o){for(const v of this.selectedGroup)v.selected=!1;this.selectedGroup=[]}for(const v of f)this.selectedGroup.includes(v)||this.selectedGroup.push(v),v.selected=!0;f.length&&this.mentioneOnce("groupSelect",X.groupSelect),this.syncSelectionPrimary()}catch(l){console.warn("[underkeep] box select failed",l)}}issueAttackMove(e,t,i=!1){try{this.pruneSelection();const n=this.selectedGroup.filter(o=>o.alive&&!o.isHero&&!o.isWorker&&!o.held);if(!n.length){const o=this.selectedGroup.filter(l=>l.alive&&!l.isHero&&!l.held);if(!o.length)return;for(const l of o)try{l.bedKey&&this.releaseBed(l),l.job=B.Wander,l.jobTarget={x:e,y:t},l.setPath(this.grid.findPath(l.x,l.y,e,t))}catch(a){console.warn("[underkeep] move order unit failed",a)}this.hud.sayNow("Move order issued.");return}let s=0;for(const o of n)try{o.bedKey&&this.releaseBed(o);const l=s%3-1,a=Math.floor(s/3)%2;s++;let h=e+l,d=t+a;this.grid.isWalkable(h,d)||(h=e,d=t),o.job=B.AttackMove,o.jobTarget={x:h,y:d};const c=this.grid.findPath(Number.isFinite(o.x)?o.x:h,Number.isFinite(o.y)?o.y:d,h,d);c?o.setPath(c):o.setPath(null),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+3),o.clampStats()}catch(l){console.warn("[underkeep] attack-move unit failed",l)}try{const o=this.grid.tileToWorld(e,t);Number.isFinite(o.x)&&Number.isFinite(o.z)&&this.renderer.spawnFx(new E(o.x,.9,o.z),i?16736320:16763972,.55)}catch{}this.hud.sayNow(i?X.attackHero:X.attackMove),this.refreshInspector()}catch(n){console.warn("[underkeep] issueAttackMove failed",n)}}refreshInspector(){try{const e=this.held??this.selected;if(!e||!e.alive){this.hud.hideInspector();return}e.clampStats();const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch",hero_knight:"Hero Knight",hero_archer:"Hero Archer"},i=typeof e.job=="string"&&e.job.length>0?e.job:"idle",n=e.held?"Held":e.isPrisoner?e.convertProgress>0?`Converting ${Math.floor(e.convertProgress)}%`:"Prisoner":e.knockedOut?"Knocked out":i===B.AttackMove?"Attack":i.charAt(0).toUpperCase()+i.slice(1),s=this.selectedGroup.filter(l=>l.alive).length,o=t[e.kind]??String(e.kind);this.hud.showInspector({kind:s>1?`${o} (+${s-1})`:o,job:s>1?`${n} · squad ${s}`:n,hp:e.hp,maxHp:e.maxHp,hunger:e.hunger,tired:e.sleepNeed,mood:e.mood,efficiency:e.workEfficiency(),held:e.held})}catch(e){console.warn("[underkeep] refreshInspector failed",e)}}applyTool(e,t){const i=this.grid.get(e,t);if(i)if(this.tool==="dig")this.grid.isDiggable(e,t)&&(i.mark=ke.Dig,i.digProgress<=0&&(i.digProgress=0),this.marksDirty=!0);else if(this.tool==="claim")i.kind===A.Dirt&&(i.mark=ke.Claim,this.marksDirty=!0);else if(this.tool==="fortify")(i.kind===A.Earth||i.kind===A.Gold)&&this.grid.hasAdjacentClaimed(e,t)&&(i.mark=ke.Fortify,this.marksDirty=!0);else if(this.tool==="bridgeWood"||this.tool==="bridgeStone")this.placeBridge(e,t,this.tool==="bridgeStone");else if(this.tool==="door"){if(this.grid.canPlaceDoor(e,t))if(i.door===Je.None){if(!this.spendDoorOrSentry("door"))return;i.door=Je.Closed,this.requestStructuralRebuild(),this.mentioneOnce("doorBuilt",X.doorBuilt),this.saveNow()}else i.door===Je.Closed?(i.door=Je.Open,this.requestStructuralRebuild(),this.hud.say(X.doorOpen),this.saveNow()):(i.door=Je.Closed,this.requestStructuralRebuild(),this.hud.say(X.doorClosed),this.saveNow())}else if(this.tool==="sentry"){if(i.kind===A.Claimed&&i.trap===xt.None){if(!this.spendDoorOrSentry("sentry"))return;i.trap=xt.Sentry,this.requestStructuralRebuild(),this.mentioneOnce("sentryBuilt",X.sentryBuilt),this.saveNow()}}else if(this.tool==="rally"){if(i.kind===A.Claimed){if(i.rally){i.rally=!1,this.hud.say(X.rallyCleared),this.requestStructuralRebuild(),this.saveNow();return}if(this.gold<Gl)return;this.gold-=Gl;for(const n of this.grid.tiles)n.rally=!1;i.rally=!0,this.requestStructuralRebuild(),this.hud.say(X.rallyPlanted);for(const n of this.creatures)if(!(!n.alive||n.isHero||n.isWorker||n.held)&&(n.kind===ie.Rattlekin||n.kind===ie.Emberling||n.kind===ie.Skitterwing)){n.job=B.Guard,n.jobTarget={x:e,y:t};const s=this.grid.findPath(n.x,n.y,e,t);s&&n.setPath(s)}this.saveNow()}}else{const s={treasury:T.Treasury,lair:T.Lair,hatchery:T.Hatchery,training:T.Training,library:T.Library,portal:T.Portal,guard:T.Guard,workshop:T.Workshop,prison:T.Prison,torture:T.Torture,graveyard:T.Graveyard}[this.tool];if(s&&i.kind===A.Claimed&&i.room===T.None){const o=kg[s];this.gold>=o&&(this.gold-=o,i.room=s,this.requestStructuralRebuild(),this.mentioneOnce("firstRoom",X.firstRoom),s===T.Portal&&this.mentioneOnce("portal",X.portal),s===T.Lair&&(this.mentioneOnce("lairBuilt",X.lairBuilt),this.spikeNeedsForRoom(T.Lair)),s===T.Hatchery&&(this.mentioneOnce("hatcheryBuilt",X.hatcheryBuilt),this.hatcheryFood=Math.max(this.hatcheryFood,4),this.spikeNeedsForRoom(T.Hatchery)),s===T.Guard&&this.mentioneOnce("guardBuilt",X.guardBuilt),s===T.Workshop&&this.mentioneOnce("workshopBuilt",X.workshopBuilt),s===T.Prison&&this.mentioneOnce("prisonBuilt",X.prisonBuilt),s===T.Torture&&this.mentioneOnce("tortureBuilt",X.tortureBuilt),s===T.Graveyard&&this.mentioneOnce("graveyardBuilt",X.graveyardBuilt),this.saveNow())}}}pickUp(e){try{if(!e||!e.alive||e.isHero&&!e.knockedOut&&!e.isPrisoner)return;e.bedKey&&this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null,e.clampStats(),e.held=!0,e.setPath(null),e.job=B.Idle,e.jobTarget=null,e.workTimer=0,this.held=e,this.selectCreature(e);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new E(t,1,i),16768392,.45),this.mentioneOnce("pickUp",X.pickUp),this.refreshInspector()}catch(t){console.warn("[underkeep] pickUp failed",t);try{e&&(e.held=!1,this.held===e&&(this.held=null))}catch{}}}dropHeld(){if(!this.held)return;const e=this.grid.worldToTile(this.held.wx,this.held.wz);this.dropHeldAt(e.x,e.y)}dropHeldAt(e,t){const i=this.held;if(i)try{if(!this.grid.isWalkable(e,t)&&this.grid.get(e,t)?.kind!==A.Heart){let o=!1;for(let l=0;l<4&&!o;l++)for(let a=-l;a<=l&&!o;a++)for(let h=-l;h<=l&&!o;h++)this.grid.isWalkable(e+h,t+a)&&(e=e+h,t=t+a,o=!0);if(!o)return}i.held=!1,i.x=e,i.y=t;const n=this.grid.tileToWorld(e,t);i.wx=n.x,i.wz=n.z;const s=this.grid.get(e,t);if(i.isHero&&(i.knockedOut||i.isPrisoner)&&s?.room===T.Prison){this.imprisonCreature(i,e,t),this.held=null,this.refreshInspector();return}if(i.isHero&&(i.knockedOut||i.isPrisoner)&&s?.room===T.Torture){this.imprisonCreature(i,e,t),i.convertProgress=Math.max(i.convertProgress,25),this.hud.sayNow(X.converting),this.held=null,this.refreshInspector();return}i.isHero||(this.creatures.some(l=>l.alive&&l!==i&&l.isHero!==i.isHero&&!l.knockedOut&&!l.isPrisoner&&Math.hypot(l.x-e,l.y-t)<2.5)&&(i.stunTimer=1.5),this.safeMood(i,(Number.isFinite(i.mood)?i.mood:72)+4)),this.held=null,i.clampStats(),this.mentioneOnce("drop",X.drop),this.refreshInspector()}catch(n){console.warn("[underkeep] dropHeldAt failed",n);try{i&&(i.held=!1,i.clampStats()),this.held=null}catch{}}}slap(e){try{if(!e||!e.alive||e.isHero)return;e.clampStats(),e.stunTimer=Math.max(e.stunTimer,1.35),e.speedBuff=Math.max(e.speedBuff,2.8),e.sleepNeed=Math.max(0,Math.min(100,e.sleepNeed-12)),e.hunger=Math.max(0,Math.min(100,e.hunger-4)),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+8),e.setPath(null),e.workTimer=0,e.job!==B.Sleep&&e.job!==B.Eat&&(e.job=B.Idle,e.jobTarget=null);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new E(t,.7,i),16772744,.7),this.renderer.spawnFx(new E(t,1.15,i),16755268,.55),this.renderer.spawnDigDebris(t,i,16768392),this.hud.sayNow(X.slap),this.refreshInspector()}catch(t){console.warn("[underkeep] slap failed",t);try{this.hud.sayNow(X.slap)}catch{}}}spendDoorOrSentry(e){if(e==="door"&&this.doorKits>0)return this.doorKits--,this.hud.sayNow(`Door kit spent (${this.doorKits} left).`),!0;if(e==="sentry"&&this.sentryKits>0)return this.sentryKits--,this.hud.sayNow(`Sentry kit spent (${this.sentryKits} left).`),!0;const t=this.grid.countRoom(T.Workshop)>0,i=e==="door"?Ng:Ug,n=t?Math.floor(i*.7):i;return this.gold<n?(this.hud.sayNow(t?`Need ${n}g (Workshop discount) or a ${e} kit.`:`Need ${n} gold — or craft kits in a Workshop.`),!1):(this.gold-=n,t&&this.hud.say(`Workshop discount — ${e} for ${n}g.`),!0)}syncMissionHud(){this.hud.setObjective(`W${this.wavesCleared}/${Jt} · ${Math.floor(this.gold)}/${en}g`),this.hud.setKits(this.doorKits,this.sentryKits),this.hud.setWorkerCost(this.workerCost())}updateMinimap(){this.hud.drawMinimap({width:this.grid.width,height:this.grid.height,heartX:this.grid.heartPos.x,heartY:this.grid.heartPos.y,kindAt:(e,t)=>this.grid.get(e,t)?.kind??0,exploredAt:(e,t)=>!!this.grid.get(e,t)?.explored,roomAt:(e,t)=>this.grid.get(e,t)?.room??0})}checkMissionWin(){if(!(this.won||this.gameOver)){if(this.gold>=en){this.won=!0,this.gameOver=!0,this.hud.sayNow(X.winGold),this.hud.showOverlay("Victory — Gold",X.winGold+" The Underkeep gleams.","Reign Again");return}this.wavesCleared>=Jt&&(this.won=!0,this.gameOver=!0,this.hud.sayNow(X.winWaves),this.hud.showOverlay("Victory",X.winWaves+" The dark endures.","Reign Again"))}}workerCost(){return D0+this.workerCostScale*50}castSpell(e){if(!this.gameOver){if(e==="createWorker"){const t=this.workerCost();if(this.gold<t){this.hud.sayNow(`Need ${t} gold to forge a Scrabbler.`);return}const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=i,o=n;for(let d=1;d<6;d++)for(let c=-d;c<=d;c++)for(let u=-d;u<=d;u++)if(this.grid.isWalkable(i+u,n+c)){s=i+u,o=n+c,d=99;break}this.gold-=t,this.workerCostScale++;const l=this.spawnCreature(ie.Scrabbler,s,o);l.pulseTint("heal",.9),l.speedBuff=Math.max(l.speedBuff,2.5);const a=this.grid.tileToWorld(s,o);this.renderer.spawnFx(new E(a.x,.6,a.z),8978272,.85),this.renderer.spawnFx(new E(a.x,1.2,a.z),16769152,.7),this.renderer.spawnCareSparks(a.x,a.z,"heal",!0);const h=this.workerCost();this.hud.sayNow(X.workerSpawn.replace("%g",String(t)).replace("%n",String(h))),this.hud.say(X.worker),this.hud.setWorkerCost(h);return}if(e==="speed"){if(this.mana<io)return;this.mana-=io;for(const t of this.creatures)t.alive&&!t.isHero&&(t.speedBuff=Math.max(t.speedBuff,6));this.hud.say(X.speed);return}if(e==="lightning"){if(this.mana<no)return;const t=this.creatures.filter(l=>l.alive&&l.isHero&&!l.knockedOut&&!l.isPrisoner);if(!t.length)return;this.mana-=no;const i=t.reduce((l,a)=>{const h=Math.hypot(l.x-this.grid.heartPos.x,l.y-this.grid.heartPos.y),d=Math.hypot(a.x-this.grid.heartPos.x,a.y-this.grid.heartPos.y);return h<d?l:a}),n=45+this.researchRank*12,s=i.alive;i.takeDamage(n),s&&!i.alive&&(this.grid.countRoom(T.Prison)>0?(i.alive=!0,i.hp=1,i.knockedOut=!0,i.job=B.Idle,i.jobTarget=null,i.setPath(null),this.hud.sayNow(X.heroKnocked)):this.spawnCorpse(i.x,i.y,!0));const o=new E(this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).x,4,this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).z);this.renderer.spawnLightning(o,new E(i.wx,1,i.wz)),this.hud.say(X.lightning);return}if(e==="heal"){if(!this.healUnlocked){this.hud.say("Heal is sealed. Staff a Library with Gravemages to research it.");return}const t=30;if(this.mana<t)return;this.mana-=t;let i=0;for(const n of this.creatures)!n.alive||n.isHero||n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+35+this.researchRank*8),n.pulseTint("heal",1.1),this.renderer.spawnCareSparks(n.wx,n.wz,"heal",!1),i++);this.hud.say(i?X.heal:"No wounds to mend — for now.");return}if(e==="possess"){if(this.possessed){this.exitPossession();return}if(this.mana<Cn){this.hud.say("Not enough mana to Possess.");return}const t=(this.held&&this.held.alive&&!this.held.isHero?this.held:null)||(this.selected&&this.selected.alive&&!this.selected.isHero?this.selected:null);if(t){this.mana-=Cn,this.held===t&&(t.held=!1,this.held=null),this.enterPossession(t);return}this.possessArmed=!0,this.hud.say(X.possessArm),this.hud.sayNow("Possess armed — click a minion to ride their senses. Esc exits.");return}}}maxMana(){return I0+Math.floor(this.grid.countClaimed()*.5)}preparePass4Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(a,h,d=T.None)=>{const c=this.grid.get(a,h);!c||c.kind===A.Heart||(c.kind=A.Claimed,c.claimedProgress=1,c.mark=ke.None,c.digProgress=0,c.fortified=!1,c.room=d)};for(let a=e-1;a<=e+5;a++)for(let h=t-1;h<=t+4;h++)i(a,h);i(e+2,t,T.Treasury),i(e+3,t,T.Treasury),i(e+2,t+1,T.Lair),i(e+3,t+1,T.Lair),i(e+2,t+2,T.Training),i(e+3,t+2,T.Training),i(e+4,t,T.Hatchery),i(e+4,t+1,T.Library),i(e+4,t+2,T.Portal);const n=t-3;for(let a=0;a<2;a++){const h=this.grid.get(e-1+a,n);h&&(h.kind=A.Rock,h.fortified=!1,h.mark=ke.None,h.room=T.None,h.digProgress=0,h.goldAmount=0)}for(let a=0;a<2;a++){const h=this.grid.get(e+1+a,n);h&&(h.kind=A.Earth,h.fortified=!1,h.mark=ke.Dig,h.digProgress=a===0?.4:.15,h.room=T.None,h.goldAmount=0)}for(let a=0;a<3;a++){const h=this.grid.get(e+3+a,n);h&&(h.kind=A.Gold,h.goldAmount=400,h.fortified=!1,h.mark=ke.Dig,h.digProgress=.08,h.room=T.None)}for(let a=e-1;a<=e+5;a++)i(a,t-2);const s=this.creatures.filter(a=>a.isWorker&&a.alive),o={x:e+1,y:n};for(let a=0;a<s.length;a++){const h=s[a],d=e+a%3,c=t-2,u=this.grid.tileToWorld(d,c);h.x=d,h.y=c,h.wx=u.x+(a-1)*.15,h.wz=u.z,h.job=B.Dig,h.jobTarget=o,h.workTimer=.25,h.digAnim=.4+a*.35,h.setPath(null);const f=this.grid.tileToWorld(o.x,o.y);if(h.mesh.lookAt(f.x,h.mesh.position.y,f.z),h.syncMesh(this.time+.5),h.pickaxe){const g=Math.sin(h.digAnim*11);h.pickaxe.rotation.x=-.9+g*1.35,h.pickaxe.rotation.z=.15+g*.55,h.pickaxe.visible=!0}h.selectRing&&(h.selectRing.visible=!0)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.saveNow();const l=this.grid.tileToWorld(e+2,t);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+3,24,l.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass5bShot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,l,a=T.None)=>{const h=this.grid.get(o,l);!h||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.mark=ke.None,h.digProgress=0,h.fortified=!1,h.room=a)};for(let o=e-1;o<=e+5;o++)for(let l=t-1;l<=t+4;l++)i(o,l);i(e+2,t+1,T.Lair),i(e+3,t+1,T.Lair),i(e+4,t,T.Hatchery),i(e+4,t+1,T.Hatchery),this.hatcheryFood=6,this.spikeNeedsForRoom(T.Lair),this.spikeNeedsForRoom(T.Hatchery);const n=this.creatures.filter(o=>o.isWorker&&o.alive);if(n[0]){const o=n[0],l=e+2,a=t+1,h=this.grid.tileToWorld(l,a);o.x=l,o.y=a,o.wx=h.x,o.wz=h.z,o.hp=o.maxHp*.45,o.sleepNeed=80,o.hunger=10;const d=`${l},${a}`;this.bedOwners.set(d,o.id),o.bedKey=d,o.job=B.Sleep,o.jobTarget={x:l,y:a},o.restHealAcc=1.7,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"heal",!0),o.pulseTint("heal",2.2)}if(n[1]){const o=n[1],l=e+4,a=t,h=this.grid.tileToWorld(l,a);o.x=l,o.y=a,o.wx=h.x,o.wz=h.z,o.hunger=60,o.job=B.Eat,o.jobTarget={x:l,y:a},o.eatAnnounced=!0,o.eatAnim=2.5,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"feast",!0),o.pulseTint("feast",2.2)}if(n[2]){const o=n[2],l=this.grid.tileToWorld(e+1,t+2);o.x=e+1,o.y=t+2,o.wx=l.x,o.wz=l.z,o.hunger=5,o.sleepNeed=5,o.job=B.Idle,o.setPath(null)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.hud.setTooltip(`(${e+2},${t+1}) Claimed · Lair · beds ${this.countOccupiedBeds()}/2`),this.hud.say(X.feasting),this.hud.say(X.bedClaim),this.hud.say(X.lairResting);const s=this.grid.tileToWorld(e+3,t+1);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,22,s.z+12),this.renderer.camera.lookAt(this.camTarget)}preparePass61Shot(){this.preparePass5bShot();const e=this.creatures.filter(i=>i.isWorker&&i.alive),t=e[2]??e[0];if(t){t.mood=38,t.hunger=55,t.sleepNeed=40,t.hp=t.maxHp*.7,this.selectCreature(t);const i=e.find(s=>s!==t&&s.job!==B.Sleep)??e[1];if(i){this.pickUp(i);const s=this.grid.tileToWorld(t.x,t.y);i.wx=s.x+1.2,i.wz=s.z+.4,i.syncMesh(this.time)}this.refreshInspector();const n=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,18,n.z+11),this.renderer.camera.lookAt(this.camTarget),this.hud.say(X.pickUp)}}preparePass61bShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job!==B.Sleep&&s.job!==B.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,this.held=null;for(const s of this.creatures)s.held=!1;this.selectCreature(i);const n=this.grid.tileToWorld(i.x,i.y);if(this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="efficiency")this.hud.sayNow(X.sluggishDig);else{const s=i.mood;this.slap(i),i.mood=s,this.refreshInspector(),e==="both"&&this.hud.sayNow(X.slap)}}preparePass61cShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(o=>o.isWorker&&o.alive),i=t.find(o=>o.job!==B.Sleep&&o.job!==B.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,i.clampStats(),this.mana=Math.max(0,this.mana),this.held=null;for(const o of this.creatures)o.held=!1;this.pickUp(i);const n=this.grid.tileToWorld(i.x,i.y);if(i.wx=n.x+.8,i.wz=n.z+.3,i.syncMesh(this.time),this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="pick"){this.hud.sayNow(X.sluggishDig),this.refreshInspector();return}const s=i.mood;this.slap(i),i.mood=s,i.clampStats(),this.refreshInspector(),this.hud.sayNow(X.slap)}preparePass5cShot(e="both"){this.preparePass5bShot();const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job===B.Sleep),n=t.find(s=>s.job===B.Eat);if(i&&(e==="both"||e==="heal")){this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0),i.pulseTint("heal",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0)}if(n&&(e==="both"||e==="feast")){this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0),n.pulseTint("feast",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0)}if(e==="heal"&&i){const s=this.grid.tileToWorld(i.x,i.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(X.lairResting)}else if(e==="feast"&&n){const s=this.grid.tileToWorld(n.x,n.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(X.feasting)}}preparePass3Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=[];for(let l=e-6;l<=e-3;l++)for(let a=t-1;a<=t+1;a++){const h=this.grid.get(l,a);!h||h.kind===A.Rock||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.mark=ke.None,h.digProgress=0,h.fortified=!1,i.push({x:l,y:a}))}for(const l of i.slice(0,2)){const a=this.grid.get(l.x,l.y);a.room=T.Treasury}for(let l=t-1;l<=t+1;l++){const a=this.grid.get(e-2,l);a&&a.kind!==A.Heart&&(a.kind=A.Dirt,a.room=T.None,a.mark=ke.None)}const n=[{x:e-1,y:t-4},{x:e,y:t-4},{x:e+1,y:t-4},{x:e-1,y:t-5}];for(const[l,a]of n.entries()){const h=this.grid.get(a.x,a.y);h&&(h.kind=A.Earth,h.fortified=!1,h.mark=ke.Dig,h.digProgress=l===1?.72:l===0?.45:l===2?.28:.12,h.room=T.None)}for(let l=t-3;l<=t-1;l++)for(let a=e-1;a<=e+1;a++){const h=this.grid.get(a,l);h&&h.kind!==A.Heart&&h.kind!==A.Rock&&(h.kind===A.Earth||h.kind===A.Gold)&&(h.kind=A.Claimed,h.claimedProgress=1,h.mark=ke.None,h.digProgress=0)}const s=this.creatures.filter(l=>l.isWorker&&l.alive);for(let l=0;l<s.length;l++){const a=s[l],h=e-1+l%3,d=t-3,c=this.grid.tileToWorld(h,d);a.x=h,a.y=d,a.wx=c.x,a.wz=c.z,a.job=B.Idle,a.jobTarget=n[Math.min(l,n.length-1)],a.workTimer=.15,a.setPath(null),a.job=B.Dig,a.selectRing&&(a.selectRing.visible=!0)}this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild();for(const[l,a]of n.entries()){const h=this.grid.get(a.x,a.y);h&&(h.kind=A.Earth,h.mark=ke.Dig,h.digProgress=l===1?.72:l===0?.48:l===2?.3:.15,h.fortified=!1)}this.rebuild();for(const l of n.slice(0,2)){const a=this.grid.tileToWorld(l.x,l.y);this.renderer.spawnDigDebris(a.x,a.z,12615744)}const o=this.grid.tileToWorld(e-2,t-2);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+5,26,o.z+16),this.renderer.camera.lookAt(this.camTarget)}preparePass62aStabShot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(let o=t-5;o<=t+2;o++)for(let l=e-4;l<=e+4;l++){const a=this.grid.get(l,o);!a||a.kind===A.Heart||a.kind===A.Rock||(a.kind===A.Earth||a.kind===A.Gold||a.kind===A.Dirt)&&(a.kind=A.Claimed,a.claimedProgress=1,a.mark=ke.None,a.digProgress=0)}const i=[];for(let o=e-5;o<=e+5;o++)i.push({x:o,y:t-6}),i.push({x:o,y:t+4});for(let o=t-5;o<=t+3;o++)i.push({x:e-5,y:o}),i.push({x:e+5,y:o});for(const o of i){const l=this.grid.get(o.x,o.y);!l||l.kind===A.Heart||l.kind===A.Rock||(l.kind=A.Earth,l.fortified=!1,l.mark=ke.Dig,l.digProgress=.15+Math.random()*.35,l.room=T.None)}for(;this.creatures.filter(o=>o.alive&&o.isWorker).length<6;)this.spawnCreature(ie.Scrabbler,e+1,t+1);const n=this.creatures.filter(o=>o.alive&&o.isWorker);for(let o=0;o<n.length;o++){const l=n[o],a=i[o%i.length],h=this.grid.findPathAdjacent(e,t,a.x,a.y),d=this.grid.tileToWorld(e+o%3-1,t-1);l.wx=d.x,l.wz=d.z,l.x=e+o%3-1,l.y=t-1,l.job=B.Dig,l.jobTarget=a,l.workTimer=.1,h&&l.setPath(h),l.mood=80}this.requestStructuralRebuild(),this.rebuild(),this.renderer.setDigLoad(!0),this.hud.sayNow("Stab dig load — watch for Graphics hiccup. Should stay solid.");const s=this.grid.tileToWorld(e,t-3);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+6,28,s.z+18),this.renderer.camera.lookAt(this.camTarget)}preparePass62Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,l,a=T.None)=>{const h=this.grid.get(o,l);!h||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.room=a,h.mark=ke.None,h.digProgress=0)};for(let o=t-2;o<=t+3;o++)for(let l=e-3;l<=e+5;l++)i(l,o);if(i(e-2,t+1,T.Lair),i(e-1,t+1,T.Lair),i(e,t+1,T.Lair),i(e+1,t+1,T.Lair),i(e-2,t+2,T.Hatchery),i(e-1,t+2,T.Hatchery),i(e+2,t+1,T.Training),i(e+3,t+1,T.Training),i(e+2,t+2,T.Training),i(e+3,t+2,T.Training),i(e+4,t+1,T.Library),i(e+5,t+1,T.Library),i(e+4,t+2,T.Library),i(e+5,t+2,T.Library),i(e+4,t-1,T.Portal),i(e+5,t-1,T.Portal),this.hatcheryFood=12,this.gold=400,this.grid.tileToWorld(e+4,t),this.creatures.some(o=>o.kind===ie.Skitterwing&&o.alive)||(this.spawnCreature(ie.Skitterwing,e+3,t),this.attracted.skitterwing=!0),!this.creatures.some(o=>o.kind===ie.Rattlekin&&o.alive)){const o=this.spawnCreature(ie.Rattlekin,e+2,t+1);o.trainNeed=60,o.job=B.Train,o.jobTarget={x:e+2,y:t+1},o.workTimer=7.2,o.level=1,this.attracted.rattlekin=!0}if(this.creatures.some(o=>o.kind===ie.Emberling&&o.alive)||(this.spawnCreature(ie.Emberling,e+3,t+2),this.attracted.emberling=!0),!this.creatures.some(o=>o.kind===ie.Gravemage&&o.alive)){const o=this.spawnCreature(ie.Gravemage,e+4,t+1);o.job=B.Research,o.jobTarget={x:e+4,y:t+1},this.attracted.gravemage=!0}this.researchProgress=88,this.researchRank=0,this.healUnlocked=!1,this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("A Gravemage has entered the Underkeep."),this.hud.say(X.gravemage);const n=this.grid.tileToWorld(e+2,t+1);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+4,24,n.z+14),this.renderer.camera.lookAt(this.camTarget);const s=this.creatures.find(o=>o.alive&&o.kind===ie.Rattlekin);s&&this.selectCreature(s)}preparePass63Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(c,u,f=T.None)=>{const g=this.grid.get(c,u);!g||g.kind===A.Heart||(g.kind=A.Claimed,g.claimedProgress=1,g.room=f,g.mark=ke.None,g.digProgress=0,g.door=Je.None,g.trap=xt.None,g.rally=!1,g.fortified=!1)};for(let c=t-3;c<=t+3;c++)for(let u=e-3;u<=e+5;u++)i(u,c);i(e+2,t+1,T.Training),i(e+3,t+1,T.Training),i(e+4,t+1,T.Library),i(e+5,t+1,T.Library),i(e+4,t-1,T.Portal),i(e+5,t-1,T.Portal),i(e-2,t+1,T.Lair),i(e-1,t+1,T.Lair),i(e-2,t+2,T.Hatchery),i(e+2,t+2,T.Guard),i(e+3,t+2,T.Guard);for(const[c,u]of[[e,t-2],[e+1,t-2],[e-1,t-2],[e+2,t-2]]){const f=this.grid.get(c,u);f&&f.kind!==A.Heart&&(f.kind=A.Earth,f.fortified=!0,f.room=T.None,f.door=Je.None)}i(e,t-1),i(e+1,t-1);const n=this.grid.get(e,t-1);n.door=Je.Closed;const s=this.grid.get(e+1,t-1);s.door=Je.Open,i(e,t-3),i(e+1,t-3),i(e,t-4);const o=this.grid.get(e,t-3);o.trap=xt.Sentry;const l=this.grid.get(e+2,t);i(e+2,t),l.rally=!0,this.hatcheryFood=8,this.gold=900;const a=this.spawnCreature(ie.HeroKnight,e,t-4);a.job=B.Fight,a.jobTarget={...this.grid.heartPos},this.creatures.some(c=>c.kind===ie.Rattlekin&&c.alive)||this.spawnCreature(ie.Rattlekin,e+2,t+2),this.creatures.some(c=>c.kind===ie.Emberling&&c.alive)||this.spawnCreature(ie.Emberling,e+3,t+2);for(const c of this.creatures)if(!(!c.alive||c.isHero||c.isWorker)&&(c.kind===ie.Rattlekin||c.kind===ie.Emberling)){const u=this.grid.tileToWorld(e+2,t);c.x=e+2,c.y=t,c.wx=u.x+(c.kind===ie.Emberling?.35:-.2),c.wz=u.z,c.job=B.Guard,c.jobTarget={x:e+2,y:t},c.setPath(null),c.syncMesh(this.time)}if(!this.creatures.some(c=>c.kind===ie.Gravemage&&c.alive)){const c=this.spawnCreature(ie.Gravemage,e+4,t+1);c.job=B.Research,c.jobTarget={x:e+4,y:t+1}}this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Doors sealed. Sentry armed. Rally flies — hold the line!"),this.hud.say(X.doorBuilt),this.hud.say(X.sentryBuilt),this.hud.say(X.rallyPlanted),this.hud.setTooltip(`(${e},${t-1}) Claimed · Door (closed)`);const h=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,22,h.z+13),this.renderer.camera.lookAt(this.camTarget);const d=this.creatures.find(c=>c.alive&&c.kind===ie.Rattlekin);d&&this.selectCreature(d)}preparePass71Shot(e="both"){this.hud.hideOverlay(),this.exitPossession(!0);const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(d,c,u=T.None)=>{const f=this.grid.get(d,c);!f||f.kind===A.Heart||(f.kind=A.Claimed,f.claimedProgress=1,f.room=u,f.mark=ke.None,f.digProgress=0,f.door=Je.None,f.trap=xt.None,f.rally=!1,f.fortified=!1,f.explored=!0,f.goldAmount=0)};for(let d=i-2;d<=i+2;d++)for(let c=t-2;c<=t+3;c++)n(c,d);n(t+2,i,T.Treasury),n(t+3,i,T.Treasury),n(t+2,i+1,T.Lair),n(t+3,i+1,T.Training),n(t+2,i+2,T.Library),n(t+3,i+2,T.Portal),n(t-2,i+1,T.Hatchery),n(t-1,i+1,T.Guard);for(let d=t-1;d<=t+4;d++)n(d,i+3);for(let d=t-1;d<=t+4;d++)for(let c=i+4;c<=i+6;c++){const u=this.grid.get(d,c);!u||u.kind===A.Heart||(u.kind=A.Lava,u.room=T.None,u.goldAmount=0,u.fortified=!1,u.mark=ke.None,u.explored=!0,u.digProgress=0)}for(let d=t;d<=t+3;d++)n(d,i+7),n(d,i+8);for(const[d,c]of[[t+5,i+1],[t+5,i+2],[t+6,i+1]]){const u=this.grid.get(d,c);u&&(u.kind=A.Gold,u.goldAmount=400,u.explored=!0,u.fortified=!1,u.room=T.None)}for(const[d,c]of[[t-4,i],[t-4,i+1],[t-5,i]]){const u=this.grid.get(d,c);u&&(u.kind=A.Water,u.explored=!0,u.room=T.None,u.goldAmount=0)}n(t-3,i),n(t-3,i+1);const s=this.grid.get(t+1,i+4);s&&(s.kind=A.BridgeWood,s.explored=!0);const o=this.grid.get(t+2,i+5);o&&(o.kind=A.BridgeStone,o.explored=!0),n(t,i-1),this.grid.get(t,i-1).door=Je.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=xt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=e==="payday"?12:900,this.mana=80,this.healUnlocked=!0,this.wageAcc=Jr-1.2;const l=this.creatures.filter(d=>d.isWorker&&d.alive);for(;l.length<3;)l.push(this.spawnCreature(ie.Scrabbler,t,i));for(let d=0;d<l.length;d++){const c=l[d],u=this.grid.tileToWorld(t-1+d%2,i);c.x=t-1+d%2,c.y=i,c.wx=u.x,c.wz=u.z,c.job=B.Idle,c.setPath(null),c.held=!1,c.mood=70}let a=this.creatures.find(d=>d.kind===ie.Emberling&&d.alive);a||(a=this.spawnCreature(ie.Emberling,t+1,i+3));{const d=this.grid.tileToWorld(t+1,i+3);a.x=t+1,a.y=i+3,a.wx=d.x,a.wz=d.z,a.job=B.Idle,a.setPath(null),a.mood=75}let h=this.creatures.find(d=>d.kind===ie.Rattlekin&&d.alive);if(h||(h=this.spawnCreature(ie.Rattlekin,t,i+1)),h.mood=70,h.goldCarried=0,this.creatures.some(d=>d.kind===ie.Gravemage&&d.alive)||this.spawnCreature(ie.Gravemage,t+2,i+2),this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="possess"&&(this.mana=Math.max(this.mana,Cn+10),this.enterPossession(a),setTimeout(()=>{try{this.hud.sayNow(X.possess)}catch{}},0)),(e==="lava"||e==="bridge"||e==="both")&&(this.hud.say(X.lava),this.hud.say(X.bridgeWood)),e==="payday")this.gold=8,this.wageAcc=Jr,this.payWages(.01),this.hud.sayNow(X.paydayFail),this.hud.setTooltip("Payday — empty Treasury crashes moods");else if(e==="lava"){const d=this.grid.tileToWorld(t+2,i+5);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,16,d.z+11),this.hud.setTooltip("Lava hazards · bridges · gold vein contrast")}else if(e==="bridge"){const d=this.grid.tileToWorld(t+1,i+5);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+1,14,d.z+10),this.hud.setTooltip("Wooden + stone bridges over lava")}else if(e==="possess")this.hud.setTooltip("Possession — FP follow · WASD move · Esc exits");else{const d=this.grid.tileToWorld(t+1,i+4);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,18,d.z+12),this.hud.setTooltip("Pass 7.1 — lava · bridges · possess · payday"),this.hud.sayNow("Pass 7.1 live — lava burns, bridges span, Possess rides, payday bites.")}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass72Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(a,h,d=T.None)=>{const c=this.grid.get(a,h);!c||c.kind===A.Heart||(c.kind=A.Claimed,c.claimedProgress=1,c.room=d,c.mark=ke.None,c.digProgress=0,c.door=Je.None,c.trap=xt.None,c.rally=!1,c.fortified=!1,c.explored=!0)};for(let a=i-3;a<=i+4;a++)for(let h=t-3;h<=t+5;h++)n(h,a);for(let a=t-1;a<=t+3;a++){const h=this.grid.get(a,i+5);h&&h.kind!==A.Heart&&(h.kind=A.Lava,h.room=T.None,h.explored=!0)}const s=this.grid.get(t+1,i+5);s.kind=A.BridgeWood,s.explored=!0;const o=this.grid.get(t+2,i+5);o.kind=A.BridgeStone,o.explored=!0,n(t+2,i,T.Treasury),n(t+3,i,T.Treasury),n(t+2,i+1,T.Lair),n(t+3,i+1,T.Hatchery),n(t+4,i+1,T.Training),n(t+4,i,T.Library),n(t+5,i,T.Portal),n(t-1,i+1,T.Guard),n(t+2,i+2,T.Workshop),n(t+3,i+2,T.Workshop),n(t+4,i+2,T.Workshop),n(t,i-1),this.grid.get(t,i-1).door=Je.Closed,n(t,i-2),this.grid.get(t,i-2).trap=xt.Sentry;for(let a=t+6;a<=t+9;a++){const h=this.grid.get(a,i);h&&h.kind!==A.Heart&&(h.kind=A.Dirt,h.explored=!0,h.room=T.None)}for(let a=t+10;a<=t+14;a++)for(let h=i-1;h<=i+1;h++){const d=this.grid.get(a,h);d&&(d.explored=!1)}this.gold=e==="mission"?2480:900,this.goldEver=this.gold,this.doorKits=2,this.sentryKits=1,this.wavesCleared=e==="mission"?2:1,this.heroWaveSpawned=!1,this.heroWaveTimer=40,this.mana=80,this.hatcheryFood=6,this.workerCostScale=1;const l=this.creatures.filter(a=>a.isWorker&&a.alive);for(;l.length<4;)l.push(this.spawnCreature(ie.Scrabbler,t-1,i));for(let a=0;a<Math.min(2,l.length);a++){const h=l[a],d=t+2+a,c=i+2,u=this.grid.tileToWorld(d,c);h.x=d,h.y=c,h.wx=u.x,h.wz=u.z,h.job=B.Craft,h.jobTarget={x:d,y:c},h.workTimer=3+a,h.setPath(null)}if(this.creatures.some(a=>a.kind===ie.Rattlekin&&a.alive)||this.spawnCreature(ie.Rattlekin,t-1,i+1),!this.creatures.some(a=>a.kind===ie.Emberling&&a.alive)){const a=this.spawnCreature(ie.Emberling,t+1,i+5);a.job=B.Idle}if(this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud(),e==="mission")this.hud.showOverlay("Mission Briefing",`Survive ${Jt} hero waves — OR gather ${en} gold. Heart must stand.`,"Begin"),this.hud.sayNow(X.missionBrief.replace("%w",String(Jt)).replace("%g",String(en))),this.hud.setTooltip(`Mission W${this.wavesCleared}/${Jt} · Gold ${this.gold}/${en}`);else if(e==="workshop"){this.hud.sayNow(X.workshopBuilt),this.hud.say(X.craftBusy),this.hud.setTooltip("Workshop — Scrabblers craft Door/Sentry kits");const a=this.grid.tileToWorld(t+3,i+2);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+2,16,a.z+11)}else if(e==="worker"){const a=this.workerCost();this.gold=Math.max(this.gold,a+50),this.castSpell("createWorker"),this.hud.setTooltip(`Create Scrabbler — ${a}g · cost scales`)}else if(e==="minimap"){this.hud.sayNow("Minimap — explored claim glow, Heart marker, fog beyond."),this.hud.setTooltip("Minimap · explored / claimed / Heart");const a=this.grid.tileToWorld(t+2,i+1);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,22,a.z+14)}else{this.hud.sayNow("Pass 7.2 — minimap, mission win, Workshop kits, Scrabbler polish."),this.hud.say(X.workshopBuilt),this.hud.setTooltip("Pass 7.2 — minimap · mission · Workshop · Worker");const a=this.grid.tileToWorld(t+2,i+2);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+2,18,a.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass73Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(c,u,f=T.None)=>{const g=this.grid.get(c,u);!g||g.kind===A.Heart||(g.kind=A.Claimed,g.claimedProgress=1,g.room=f,g.mark=ke.None,g.digProgress=0,g.door=Je.None,g.trap=xt.None,g.rally=!1,g.fortified=!1,g.explored=!0)};for(let c=i-3;c<=i+5;c++)for(let u=t-3;u<=t+6;u++)n(u,c);for(let c=t-1;c<=t+3;c++){const u=this.grid.get(c,i+6);u&&u.kind!==A.Heart&&(u.kind=A.Lava,u.room=T.None,u.explored=!0)}const s=this.grid.get(t+1,i+6);s.kind=A.BridgeWood,s.explored=!0,n(t+2,i,T.Treasury),n(t+3,i,T.Treasury);for(let c=t+2;c<=t+5;c++)for(let u=i+1;u<=i+2;u++)n(c,u,T.Lair);for(let c=t-2;c<=t;c++)n(c,i+1,T.Hatchery);for(let c=t+4;c<=t+6;c++)n(c,i,T.Library);n(t+5,i+3,T.Portal),n(t-1,i+2,T.Guard),n(t+2,i+3,T.Workshop),n(t+3,i+3,T.Workshop),n(t-2,i+3,T.Prison),n(t-1,i+3,T.Prison),n(t-2,i+4,T.Prison),n(t,i+3,T.Torture),n(t+1,i+3,T.Torture),n(t-2,i+5,T.Graveyard),n(t-1,i+5,T.Graveyard),n(t,i+5,T.Graveyard),n(t,i-1),this.grid.get(t,i-1).door=Je.Closed,n(t,i-2),this.grid.get(t,i-2).trap=xt.Sentry,this.gold=1100,this.goldEver=this.gold,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.mana=70,this.hatcheryFood=8,this.corpses=[{x:t-1,y:i+5,timer:5,fromHero:!0},{x:t,y:i+5,timer:3,fromHero:!1}];const o=this.creatures.filter(c=>c.isWorker&&c.alive);for(;o.length<3;)o.push(this.spawnCreature(ie.Scrabbler,t-1,i));for(const c of[...this.creatures])if(c.isHero){c.alive=!1;try{this.renderer.removeEntityMesh(c.mesh)}catch{}}this.creatures=this.creatures.filter(c=>c.alive);const l=this.spawnCreature(ie.HeroKnight,t+1,i+4);l.knockedOut=!0,l.hp=1,l.job=B.Idle,l.setPath(null);const a=this.spawnCreature(ie.HeroArcher,t-1,i+3);if(this.imprisonCreature(a,t-1,i+3),a.convertProgress=e==="torture"?72:35,a.hunger=e==="graveyard"?92:40,e==="torture"&&(this.imprisonCreature(a,t,i+3),a.convertProgress=78,!this.creatures.find(u=>u.kind===ie.Thornwitch&&u.alive))){const u=this.spawnCreature(ie.Thornwitch,t+1,i+3);u.mood=85}if(this.creatures.some(c=>c.kind===ie.Bonewretch&&c.alive)||(e==="graveyard"||e==="both")&&this.spawnCreature(ie.Bonewretch,t-2,i+5),this.creatures.some(c=>c.kind===ie.Rattlekin&&c.alive)||this.spawnCreature(ie.Rattlekin,t-1,i+2),e==="prison"||e==="both"){const c=o[0];this.grid.tileToWorld(t+1,i+4),c.x=t,c.y=i+4;const u=this.grid.tileToWorld(c.x,c.y);c.wx=u.x,c.wz=u.z,c.job=B.DragPrisoner,c.jobTarget={x:l.x,y:l.y},c.workTimer=0,c.setPath(this.grid.findPath(c.x,c.y,l.x,l.y))}this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud();const h=this.grid.largestContiguousRoom(T.Lair),d=Math.round(os(h)*100);if(e==="prison"){this.hud.sayNow(X.prisonBuilt),this.hud.say(X.heroKnocked),this.hud.setTooltip(`Prison — prisoners ${this.creatures.filter(u=>u.isPrisoner).length} · KO ready`);const c=this.grid.tileToWorld(t-1,i+3);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,16,c.z+11)}else if(e==="torture"){this.hud.sayNow(X.tortureBuilt),this.hud.say(X.converting),this.hud.setTooltip("Torture Chamber — converting captive → Thornwitch");const c=this.grid.tileToWorld(t,i+3);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,15,c.z+10)}else if(e==="graveyard"){this.hud.sayNow(X.graveyardBuilt),this.hud.say(X.boneRaised),this.hud.setTooltip(`Graveyard — corpses ${this.corpses.length} → Bonewretch`);const c=this.grid.tileToWorld(t-1,i+5);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,15,c.z+10)}else if(e==="efficiency"){this.hud.sayNow(X.roomSizeBonus.replace("%n",String(h)).replace("%p",String(d))),this.hud.setTooltip(`Lair size ${h} · +${d}% eff · Hatchery/Library scale too`);const c=this.grid.tileToWorld(t+3,i+1);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,18,c.z+12)}else{this.hud.sayNow("Pass 7.3 — Prison, Torture, Graveyard, room-size efficiency."),this.hud.say(X.prisonBuilt),this.hud.setTooltip(`Pass 7.3 — Prison · Torture · Graveyard · Lair size ${h} +${d}%`);const c=this.grid.tileToWorld(t-1,i+4);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,18,c.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass65Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(l,a,h=T.None)=>{const d=this.grid.get(l,a);!d||d.kind===A.Heart||(d.kind=A.Claimed,d.claimedProgress=1,d.room=h,d.mark=ke.None,d.digProgress=0,d.door=Je.None,d.trap=xt.None,d.rally=!1,d.fortified=!1,d.explored=!0)};for(let l=i-2;l<=i+2;l++)for(let a=t-2;a<=t+3;a++)n(a,l);n(t+2,i,T.Treasury),n(t+3,i,T.Treasury),n(t+2,i+1,T.Lair),n(t+3,i+1,T.Training),n(t+2,i+2,T.Library),n(t+3,i+2,T.Portal),n(t-2,i+1,T.Hatchery),n(t-1,i+1,T.Guard);for(const[l,a]of[[t-3,i],[t-3,i+1],[t-3,i-1],[t+4,i],[t+4,i+1],[t+4,i-1],[t,i+3],[t+1,i+3],[t+2,i+3],[t,i-3],[t+1,i-3]]){const h=this.grid.get(l,a);!h||h.kind===A.Heart||(h.kind=A.Earth,h.fortified=!1,h.mark=ke.None,h.room=T.None,h.goldAmount=0,h.digProgress=0,h.explored=!0)}const s=this.grid.get(t+5,i);s&&(s.kind=A.Rock,s.fortified=!1,s.mark=ke.None,s.explored=!0,s.room=T.None);for(let l=t+4;l<=t+7;l++)n(l,i-2);for(let l=0;l<this.grid.height;l++)for(let a=0;a<this.grid.width;a++){const h=this.grid.get(a,l);!(Math.abs(a-t)<=4&&Math.abs(l-i)<=3?!0:Math.abs(a-(t+5))<=2&&Math.abs(l-(i-2))<=1)&&h.kind!==A.Heart&&((h.kind===A.Claimed||h.kind===A.Dirt)&&(h.kind=A.Earth,h.claimedProgress=0,h.room=T.None),h.explored=!1,h.mark=ke.None,h.fortified=!1)}this.grid.revealFromTerritory(),n(t,i-1),this.grid.get(t,i-1).door=Je.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=xt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=900,this.healUnlocked=!0;const o=this.creatures.filter(l=>l.isWorker&&l.alive);for(;o.length<4;)o.push(this.spawnCreature(ie.Scrabbler,t,i));for(let l=0;l<o.length;l++){const a=o[l],h=t-1+l%3,d=i+l%2,c=this.grid.tileToWorld(h,d);a.x=h,a.y=d,a.wx=c.x,a.wz=c.z,a.hunger=5,a.sleepNeed=5,a.goldCarried=0,a.job=B.Idle,a.jobTarget=null,a.setPath(null),a.held=!1}if(!this.creatures.some(l=>l.kind===ie.Gravemage&&l.alive)){const l=this.spawnCreature(ie.Gravemage,t+2,i+2);l.job=B.Research,l.jobTarget={x:t+2,y:i+2}}if(this.creatures.some(l=>l.kind===ie.Rattlekin&&l.alive)||this.spawnCreature(ie.Rattlekin,t-1,i+1),e==="fortify"||e==="both"){for(const[c,u]of[[t-3,i],[t-3,i+1],[t+4,i],[t,i+3]]){const f=this.grid.get(c,u);f&&f.kind===A.Earth&&!f.fortified&&(f.mark=ke.Fortify,f.explored=!0)}const l=this.grid.get(t+1,i+3);l&&l.kind===A.Earth&&(l.fortified=!0,l.mark=ke.None,l.explored=!0);const a=o[0],h={x:t-3,y:i},d=this.grid.tileToWorld(t-2,i);a.x=t-2,a.y=i,a.wx=d.x,a.wz=d.z,a.job=B.Fortify,a.jobTarget=h,a.workTimer=.8,a.setPath(null),this.hud.sayNow(X.autoFortify)}if((e==="fow"||e==="both")&&(this.hud.say(X.fog),this.hud.sayNow("Fog of war — unexplored earth stays dark until dig/claim.")),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="fortify"){const l=this.grid.tileToWorld(t-2,i);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+3,20,l.z+12),this.hud.setTooltip("Idle Scrabblers auto-fortify soft earth · Rock impassable")}else{const l=this.grid.tileToWorld(t+2,i-1);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+6,32,l.z+22),this.hud.setTooltip("Fog of war — explored heart vs dark unexplored")}this.renderer.camera.lookAt(this.camTarget)}preparePass64bShot(){this.hud.hideOverlay(),this.preparePass64Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(const l of this.creatures)l.alive&&(l.clampStats(),this.safeMood(l,Number.isFinite(l.mood)?Math.max(40,l.mood):72),l.hunger=Math.max(0,Math.min(40,l.hunger)),l.sleepNeed=Math.max(0,Math.min(40,l.sleepNeed)));const i=this.creatures.find(l=>l.alive&&l.isWorker);i&&(this.tool="select",this.hud.setActiveTool("select"),this.pickUp(i));const n=this.creatures.filter(l=>l.alive&&!l.isHero&&!l.isWorker&&(l.kind===ie.Rattlekin||l.kind===ie.Emberling));this.held&&this.dropHeldAt(e,t),this.clearSelection();for(const l of n.slice(0,3))l.selected=!0,this.selectedGroup.includes(l)||this.selectedGroup.push(l);this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0);const s=n[0];s&&this.pickUp(s),this.hud.sayNow("Hand pick + squad Attack — no blackout."),this.hud.say(X.groupSelect),this.hud.say(X.attackMove),this.refreshInspector();const o=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+3,22,o.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass64Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(c,u,f=T.None)=>{const g=this.grid.get(c,u);!g||g.kind===A.Heart||(g.kind=A.Claimed,g.claimedProgress=1,g.room=f,g.mark=ke.None,g.digProgress=0,g.door=Je.None,g.trap=xt.None,g.rally=!1,g.fortified=!1)};for(let c=t-4;c<=t+3;c++)for(let u=e-3;u<=e+5;u++)i(u,c);i(e+2,t+1,T.Training),i(e+3,t+1,T.Training),i(e+4,t+1,T.Library),i(e+5,t+1,T.Library),i(e+4,t-1,T.Portal),i(e+5,t-1,T.Portal),i(e-2,t+1,T.Lair),i(e-1,t+1,T.Lair),i(e-2,t+2,T.Hatchery),i(e+2,t+2,T.Guard),i(e+3,t+2,T.Guard);for(const[c,u]of[[e-1,t-2],[e+1,t-2],[e+2,t-2]]){const f=this.grid.get(c,u);f&&f.kind!==A.Heart&&(f.kind=A.Earth,f.fortified=!0,f.room=T.None)}i(e,t-1),i(e,t-2),i(e,t-3),i(e,t-4),this.grid.get(e,t-1).door=Je.Closed,this.grid.get(e,t-3).trap=xt.Sentry,this.grid.get(e+2,t).rally=!0,this.hatcheryFood=8,this.gold=1e3,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.heroWarn30=!0,this.heroWarn10=!0;for(const c of[...this.creatures])if(c.isHero){c.alive=!1;try{this.renderer.removeEntityMesh(c.mesh)}catch{}}this.creatures=this.creatures.filter(c=>c.alive);const n=(c,u,f)=>{const g=this.spawnCreature(c,u,f),v=this.grid.tileToWorld(u,f);return g.x=u,g.y=f,g.wx=v.x,g.wz=v.z,g.held=!1,g.stunTimer=0,g.hunger=10,g.sleepNeed=10,g.trainNeed=0,g};for(const c of[...this.creatures])if(c.alive&&(c.kind===ie.Rattlekin||c.kind===ie.Emberling)){c.alive=!1;try{this.renderer.removeEntityMesh(c.mesh)}catch{}}this.creatures=this.creatures.filter(c=>c.alive);const s=n(ie.Rattlekin,e+1,t),o=n(ie.Rattlekin,e+2,t),l=n(ie.Emberling,e+3,t);if(!this.creatures.some(c=>c.kind===ie.Gravemage&&c.alive)){const c=this.spawnCreature(ie.Gravemage,e+4,t+1);c.job=B.Research,c.jobTarget={x:e+4,y:t+1}}const a=this.spawnCreature(ie.HeroKnight,e,t-4),h=this.spawnCreature(ie.HeroArcher,e+1,t-4);a.job=B.Fight,h.job=B.Fight,a.jobTarget={x:e,y:t},h.jobTarget={x:e,y:t},a.hp=Math.floor(a.maxHp*.7),h.hp=Math.floor(h.maxHp*.75),this.clearSelection(),this.selectedGroup=[s,o,l];for(const c of this.selectedGroup)c.selected=!0;this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0),this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Squad selected — attack-move into the heroes!"),this.hud.say(X.groupSelect),this.hud.say(X.attackHero),this.hud.say(X.heroEngage),this.hud.setTooltip(`(${e},${t}) Claimed · squad ${this.selectedGroup.length} attack-move`);const d=this.grid.tileToWorld(e+1,t-2);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+1.5,21,d.z+12),this.renderer.camera.lookAt(this.camTarget)}update(e){if(this.renderer.contextLost){try{this.hud.update(e)}catch{}return}try{if(Number.isFinite(this.mana)||(this.mana=0),this.mana=Math.max(0,Math.min(this.maxMana(),this.mana)),Number.isFinite(this.gold)||(this.gold=0),this.gold=Math.max(0,this.gold),this.gold>this.goldEver&&(this.goldEver=this.gold),!this.gameOver){this.time+=e;try{this.updateCamera(e)}catch(s){console.warn("[underkeep] camera",s)}try{this.regenMana(e)}catch(s){console.warn("[underkeep] mana",s)}try{this.regenHatcheryFood(e)}catch(s){console.warn("[underkeep] food",s)}try{this.assignJobs(e)}catch(s){console.warn("[underkeep] assignJobs",s)}try{this.updateMoods(e)}catch(s){console.warn("[underkeep] moods",s)}try{this.updateCreatures(e)}catch(s){console.warn("[underkeep] creatures",s)}try{this.updatePortal(e)}catch(s){console.warn("[underkeep] portal",s)}try{this.updateHeroWave(e)}catch(s){console.warn("[underkeep] heroes",s)}try{this.checkHeart()}catch(s){console.warn("[underkeep] heart",s)}try{this.payWages(e)}catch(s){console.warn("[underkeep] wages",s)}try{this.updateHazards(e)}catch(s){console.warn("[underkeep] hazards",s)}try{this.checkMissionWin()}catch(s){console.warn("[underkeep] mission",s)}if(this.saveAcc+=e,this.saveAcc>=4){this.saveAcc=0;try{this.saveNow()}catch(s){console.warn("[underkeep] save",s)}}}const t=this.grid.tiles.reduce((s,o)=>s+(o.mark===ke.Dig?1:0),0),i=this.creatures.filter(s=>s.alive&&(s.job===B.Dig||s.job===B.Mine)).length;this.renderer.setDigLoad(t>=6||i>=2),this.rebuildCooldown>0&&(this.rebuildCooldown-=e),this.pendingStructuralRebuild||this.gridDirty?this.rebuildCooldown<=0&&this.rebuild():(this.marksDirty&&!this.paint&&this.flushMarks(),this.fogDirty&&this.flushFog());for(const s of this.creatures)try{if(s.alive){s.clampStats(),s.syncMesh(this.time);try{if(s.mesh)if(s.held)s.mesh.visible=!0;else{const o=Number.isFinite(s.x)?Math.round(s.x):0,l=Number.isFinite(s.y)?Math.round(s.y):0;s.mesh.visible=this.grid.isExplored(o,l)}}catch{s.mesh&&(s.mesh.visible=!0)}}else s.mesh&&(s.mesh.visible=!1)}catch(o){console.warn("[underkeep] creature sync failed",s?.id,o)}if(this.renderer.update(e),this.hud.update(e),(this.selected||this.held)&&this.refreshInspector(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(s=>s.alive&&s.isWorker).length,this.creatures.filter(s=>s.alive&&!s.isWorker&&!s.isHero).length),this.hud.setSpellAffordable("createWorker",this.gold>=this.workerCost()),this.hud.setSpellAffordable("speed",this.mana>=io),this.hud.setSpellAffordable("lightning",this.mana>=no),this.hud.setSpellAffordable("heal",this.healUnlocked&&this.mana>=30),this.hud.setSpellAffordable("possess",this.possessed?!0:this.mana>=Cn),this.syncMissionHud(),this.minimapAcc+=e,this.minimapAcc>=.35){this.minimapAcc=0;try{this.updateMinimap()}catch{}}this.creatures=this.creatures.filter(s=>{if(!s.alive){try{this.renderer.removeEntityMesh(s.mesh)}catch{}return!1}return!0}),this.held&&!this.held.alive&&(this.held=null);const n=this.selectedGroup.length;this.selectedGroup=this.selectedGroup.filter(s=>s.alive),this.selected&&!this.selected.alive&&(this.selected=null),n!==this.selectedGroup.length?this.syncSelectionPrimary():!this.selected&&this.selectedGroup.length===0&&this.hud.hideInspector()}catch(t){throw console.error("[underkeep] update failed",t),t}}wageAcc=0;payWages(e){if(this.wageAcc+=e,this.paydayToastCooldown>0&&(this.paydayToastCooldown-=e),this.wageAcc<Jr)return;this.wageAcc=0;let t=0;const i=[];for(const n of this.creatures){if(!n.alive||n.isHero||n.isWorker)continue;const s=qo[n.kind].goldWage;s>0&&(t+=s,i.push(n))}if(!(t<=0||i.length===0))if(this.gold>=t){this.gold-=t,this.hud.say(X.payday.replace("%g",String(t)));for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)+4)}else{this.gold=0;for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)-32),n.leaveWarned=!0;this.hud.sayNow(X.paydayFail),this.paydayToastCooldown=8}}pathOptsFor(e){return{forHero:e.isHero,allowHazard:e.isHero||Ys(e.kind)||$s(e.kind)}}placeBridge(e,t,i){if(!this.grid.canPlaceBridge(e,t))return;const n=i?Og:Fg;if(this.gold<n){this.hud.say(i?"Need more gold for a stone bridge.":"Need more gold for a wooden bridge.");return}const s=this.grid.get(e,t);s&&(this.gold-=n,s.kind=i?A.BridgeStone:A.BridgeWood,s.goldAmount=0,s.digProgress=0,s.fortified=!1,s.mark=ke.None,s.room=T.None,s.explored=!0,this.requestStructuralRebuild(),this.fogDirty=!0,this.hud.say(i?X.bridgeStone:X.bridgeWood),this.mentioneOnce("bridge",X.bridgeWood),this.saveNow())}enterPossession(e){try{if(!e||!e.alive||e.isHero)return;this.possessed&&this.exitPossession(!0),e.clampStats(),e.held=!1,e.stunTimer=0,e.setPath(null),e.job=B.Idle,e.jobTarget=null,this.possessed=e,this.selectCreature(e);const t=this.renderer.camera;this.possessCamBackup={tx:this.camTarget.x,tz:this.camTarget.z,cx:t.position.x,cy:t.position.y,cz:t.position.z},this.hud.sayNow(X.possess),this.refreshInspector()}catch(t){console.warn("[underkeep] enterPossession failed",t),this.possessed=null}}exitPossession(e=!1){try{const t=this.possessed;if(this.possessed=null,this.possessArmed=!1,this.possessCamBackup){const i=this.possessCamBackup;this.camTarget.set(i.tx,0,i.tz),this.renderer.camera.position.set(i.cx,i.cy,i.cz),this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z),this.possessCamBackup=null}t&&t.alive&&(t.setPath(null),t.job=B.Idle),e||this.hud.say(X.possessEnd),this.refreshInspector()}catch(t){console.warn("[underkeep] exitPossession failed",t),this.possessed=null,this.possessCamBackup=null}}possessMoveTo(e,t){const i=this.possessed;if(!i||!i.alive){this.exitPossession(!0);return}const n=!i.isWorker||Ys(i.kind)||$s(i.kind);if(!this.grid.isWalkable(e,t,{allowHazard:n})&&this.grid.get(e,t)?.kind!==A.Heart)return;const s=this.grid.findPath(i.x,i.y,e,t,{allowHazard:!i.isWorker||Ys(i.kind)||$s(i.kind)});s&&(i.setPath(s),i.job=B.Wander,i.jobTarget={x:e,y:t})}updateHazards(e){if(this.lavaDmgAcc+=e,this.lavaDmgAcc<.45)return;const t=this.lavaDmgAcc;this.lavaDmgAcc=0;for(const i of this.creatures){if(!i.alive||i.held)continue;this.possessed;const n=this.grid.get(Math.round(i.x),Math.round(i.y));if(n)if(n.kind===A.Lava){if(Ys(i.kind)||$s(i.kind))continue;const s=8*t;if(i.takeDamage(s),i.alive){if(Math.random()<.08)try{this.renderer.spawnFx(new E(i.wx,.4,i.wz),16737826,.35)}catch{}}else{try{this.renderer.spawnFx(new E(i.wx,.6,i.wz),16729088,.7)}catch{}this.possessed===i&&this.exitPossession()}}else n.kind,A.Water}}updateCamera(e){const t=this.renderer.camera;if(this.possessed&&this.possessed.alive){const l=this.possessed,a=new E(l.wx,.35,l.wz);this.camTarget.lerp(a,Math.min(1,8*e));const h=new E(l.wx-Math.sin(l.facing)*3.2,2.55,l.wz-Math.cos(l.facing)*3.2);t.position.lerp(h,Math.min(1,6*e)),t.lookAt(l.wx,.9,l.wz);const d=Math.round(Math.sin(l.facing)),c=Math.round(Math.cos(l.facing));let u=0,f=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(u+=d,f+=c),(this.keys.has("s")||this.keys.has("arrowdown"))&&(u-=d,f-=c),(this.keys.has("a")||this.keys.has("arrowleft"))&&(u-=c,f+=d),(this.keys.has("d")||this.keys.has("arrowright"))&&(u+=c,f-=d),u!==0||f!==0){const g=Math.round(l.x)+Math.sign(u),v=Math.round(l.y)+Math.sign(f);if(l.path.length===0||l.pathIndex>=l.path.length)this.possessMoveTo(g,v);else{const m=l.path[l.path.length-1];(m.x!==g||m.y!==v)&&this.possessMoveTo(g,v)}}return}const i=18,n=new E;t.getWorldDirection(n),n.y=0,n.normalize();const s=new E().crossVectors(n,new E(0,1,0)).normalize(),o=new E;(this.keys.has("w")||this.keys.has("arrowup"))&&o.add(n),(this.keys.has("s")||this.keys.has("arrowdown"))&&o.sub(n),(this.keys.has("a")||this.keys.has("arrowleft"))&&o.sub(s),(this.keys.has("d")||this.keys.has("arrowright"))&&o.add(s),o.lengthSq()>0&&(o.normalize().multiplyScalar(i*e),t.position.add(o),this.camTarget.add(o),t.lookAt(this.camTarget.x,0,this.camTarget.z))}regenMana(e){const i=2+this.grid.countClaimed()*.08,n=Number.isFinite(this.mana)?this.mana:0;this.mana=Math.max(0,Math.min(this.maxMana(),n+i*e))}regenHatcheryFood(e){const t=this.grid.countRoom(T.Hatchery);if(t<=0){this.hatcheryFood=0;return}const i=os(this.grid.largestContiguousRoom(T.Hatchery));this.foodRegenAcc+=e*(1+i);const n=2.5;for(;this.foodRegenAcc>=n;){this.foodRegenAcc-=n;const s=t*4;this.hatcheryFood<s&&(this.hatcheryFood=Math.min(s,this.hatcheryFood+t))}}assignJobs(e){const t=this.creatures.filter(a=>a.alive&&a.isWorker&&!a.held&&a.stunTimer<=0);for(const a of t){const h=this.creatures.find(d=>d.alive&&d.isHero&&!d.knockedOut&&!d.isPrisoner&&Math.hypot(d.x-a.x,d.y-a.y)<5);if(h){a.job=B.Flee,a.fleeTimer=2;const d=a.x-h.x,c=a.y-h.y,u=Math.max(0,Math.min(this.grid.width-1,a.x+Math.sign(d||1)*3)),f=Math.max(0,Math.min(this.grid.height-1,a.y+Math.sign(c||1)*3));let g=null;for(let v=0;v<5&&!g;v++)for(let m=-v;m<=v&&!g;m++)for(let p=-v;p<=v&&!g;p++)this.grid.isWalkable(u+p,f+m)&&(g={x:u+p,y:f+m});g&&a.setPath(this.grid.findPath(a.x,a.y,g.x,g.y));continue}}const i=[],n=[],s=[];for(const a of this.grid.tiles)a.mark===ke.Dig&&this.grid.isDiggable(a.x,a.y)&&i.push({x:a.x,y:a.y}),a.mark===ke.Claim&&a.kind===A.Dirt&&n.push({x:a.x,y:a.y}),a.mark===ke.Fortify&&!a.fortified&&s.push({x:a.x,y:a.y});const o=new Set;for(const a of t)a.jobTarget&&(a.job===B.Dig||a.job===B.Mine||a.job===B.Claim||a.job===B.Fortify)&&o.add(`${a.jobTarget.x},${a.jobTarget.y}`),(a.job===B.Dig||a.job===B.Mine)&&a.jobTarget&&(!this.grid.get(a.jobTarget.x,a.jobTarget.y)||this.grid.get(a.jobTarget.x,a.jobTarget.y).mark!==ke.Dig||!this.grid.isDiggable(a.jobTarget.x,a.jobTarget.y))&&(a.job=B.Idle,a.jobTarget=null,a.setPath(null));const l=t.filter(a=>a.job===B.Idle||a.job===B.Flee&&a.fleeTimer<=0);for(const a of l){a.job=B.Idle,a.jobTarget=null;let h=!1;{const u=this.grid.countRoom(T.Hatchery)>0,f=this.grid.countRoom(T.Lair)>0,g=a.hunger>(u?26:55),v=a.sleepNeed>(f?30:70)||a.hp<a.maxHp*.65;if(g&&u&&(this.hatcheryFood>0||a.hunger>50)&&this.assignEat(a)||v&&f&&this.assignSleep(a))continue}if(a.goldCarried>=40){const u=this.grid.tiles.find(m=>m.room===T.Treasury),f=u?.x??this.grid.heartPos.x,g=u?.y??this.grid.heartPos.y,v=this.grid.findPath(a.x,a.y,f,g);v&&(a.job=B.Haul,a.jobTarget={x:f,y:g},a.setPath(v),h=!0)}if(h)continue;if(this.grid.countRoom(T.Prison)>0){const u=this.creatures.find(f=>f.alive&&f.isHero&&f.knockedOut&&!f.isPrisoner&&!f.held&&!this.creatures.some(g=>g.alive&&g.isWorker&&g.job===B.DragPrisoner&&g.jobTarget&&g.jobTarget.x===f.x&&g.jobTarget.y===f.y));if(u){const f=this.grid.findPath(a.x,a.y,u.x,u.y);f&&(a.job=B.DragPrisoner,a.jobTarget={x:u.x,y:u.y},a.setPath(f),a.workTimer=0,h=!0)}}if(h)continue;if(this.grid.countRoom(T.Workshop)>0&&(this.doorKits<tn||this.sentryKits<tn)){const u=this.findRoomTile(T.Workshop);if(u&&t.filter(g=>g.job===B.Craft).length<Math.max(1,Math.min(3,this.grid.countRoom(T.Workshop)))){const g=this.grid.findPath(a.x,a.y,u.x,u.y);g&&(a.job=B.Craft,a.jobTarget=u,a.setPath(g),a.workTimer=0,h=!0,this.mentioneOnce("craftBusy",X.craftBusy))}}if(h)continue;const d=i.map(u=>({m:u,d:Math.abs(u.x-a.x)+Math.abs(u.y-a.y)})).sort((u,f)=>u.d-f.d);for(const{m:u}of d){const f=`${u.x},${u.y}`;if(o.has(f)||!this.grid.isReachableSolid(u.x,u.y))continue;const g=this.grid.get(u.x,u.y),v=this.grid.findPathAdjacent(a.x,a.y,u.x,u.y);if(v){a.job=g.kind===A.Gold?B.Mine:B.Dig,a.jobTarget=u,a.setPath(v),a.workTimer=0,o.add(f),h=!0;break}}if(h)continue;const c=n.map(u=>({m:u,d:Math.abs(u.x-a.x)+Math.abs(u.y-a.y)})).sort((u,f)=>u.d-f.d);for(const{m:u}of c){const f=`${u.x},${u.y}`;if(o.has(f))continue;const g=this.grid.findPath(a.x,a.y,u.x,u.y);if(g){a.job=B.Claim,a.jobTarget=u,a.setPath(g),a.workTimer=0,o.add(f),h=!0;break}}if(!h){for(const u of s){const f=`${u.x},${u.y}`;if(o.has(f)||!this.grid.isReachableSolid(u.x,u.y))continue;const g=this.grid.findPathAdjacent(a.x,a.y,u.x,u.y);if(g){a.job=B.Fortify,a.jobTarget=u,a.setPath(g),a.workTimer=0,o.add(f),h=!0;break}}if(!h){let u=null,f=999;for(const g of this.grid.tiles)if(!(g.kind!==A.Claimed&&g.kind!==A.Heart))for(const v of this.grid.neighbors4(g.x,g.y)){if(v.kind!==A.Earth||v.fortified||v.mark===ke.Dig||!v.explored||!this.grid.isReachableSolid(v.x,v.y))continue;const m=`${v.x},${v.y}`;if(o.has(m))continue;const p=Math.abs(v.x-a.x)+Math.abs(v.y-a.y);p<f&&p<=16&&(f=p,u={x:v.x,y:v.y})}if(u){const g=this.grid.findPathAdjacent(a.x,a.y,u.x,u.y);if(g){const v=this.grid.get(u.x,u.y);v.mark!==ke.Fortify&&(v.mark=ke.Fortify,this.marksDirty=!0),a.job=B.Fortify,a.jobTarget=u,a.setPath(g),a.workTimer=0,o.add(`${u.x},${u.y}`),h=!0,this.mentioneOnce("autoFortify",X.autoFortify)}}}if(!h&&a.goldCarried>0){const u=this.grid.tiles.find(m=>m.room===T.Treasury),f=u?.x??this.grid.heartPos.x,g=u?.y??this.grid.heartPos.y,v=this.grid.findPath(a.x,a.y,f,g);v&&(a.job=B.Haul,a.jobTarget={x:f,y:g},a.setPath(v))}}}for(const a of t){if(a.job===B.Flee||a.held)continue;const h=this.grid.countRoom(T.Hatchery)>0,d=this.grid.countRoom(T.Lair)>0;if(a.hunger=Math.min(100,a.hunger+(h?7.5:2.8)*e),a.sleepNeed=Math.min(100,a.sleepNeed+(d?6.5:1.5)*e),a.job===B.Eat||a.job===B.Sleep)continue;const c=a.hunger>(h?26:55),u=a.sleepNeed>(d?30:70)||a.hp<a.maxHp*.65;!c&&!u||(c&&h&&(this.hatcheryFood>0||a.hunger>50)?this.assignEat(a):u&&d&&this.assignSleep(a))}for(const a of this.creatures){if(!a.alive||a.isWorker||a.isHero||a.held||a.stunTimer>0)continue;if(a.job===B.AttackMove&&a.jobTarget){const m=this.creatures.find(p=>p.alive&&p.isHero&&Math.hypot(p.x-a.x,p.y-a.y)<9);if(m)if(a.bedKey&&this.releaseBed(a),Math.hypot(a.x-m.x,a.y-m.y)>1.2){const p=this.grid.findPath(a.x,a.y,m.x,m.y);p&&a.setPath(p)}else a.setPath(null);else if(a.path.length===0){const p=a.jobTarget.x,x=a.jobTarget.y;if(a.x!==p||a.y!==x){const S=this.grid.findPath(a.x,a.y,p,x);S&&a.setPath(S)}}continue}const h=this.creatures.find(m=>m.alive&&m.isHero&&Math.hypot(m.x-a.x,m.y-a.y)<10);if(h){if(a.bedKey&&this.releaseBed(a),a.job=B.Fight,a.jobTarget={x:h.x,y:h.y},Math.hypot(a.x-h.x,a.y-h.y)>1.2){const m=this.grid.findPath(a.x,a.y,h.x,h.y);m&&a.setPath(m)}else a.setPath(null);continue}const d=this.grid.countRoom(T.Hatchery)>0,c=this.grid.countRoom(T.Lair)>0;if(a.hunger=Math.min(100,a.hunger+(d?8:4.5)*e),a.sleepNeed=Math.min(100,a.sleepNeed+(c?7:3)*e),a.trainNeed=Math.min(100,a.trainNeed+2.2*e),a.job===B.Eat||a.job===B.Sleep||a.job===B.Train||a.job===B.Research){if(a.job===B.Sleep&&a.jobTarget){const m=`${a.jobTarget.x},${a.jobTarget.y}`;a.bedKey!==m&&(a.bedKey=m),this.bedOwners.has(m)||this.bedOwners.set(m,a.id)}if(a.path.length===0&&a.jobTarget){const m=this.grid.findPath(a.x,a.y,a.jobTarget.x,a.jobTarget.y);m&&a.setPath(m)}continue}a.job===B.Fight&&(a.job=B.Idle),a.job===B.Guard&&(a.job=B.Idle);const u=a.hp<a.maxHp*.65;if(a.hunger>(d?24:40)&&d&&this.assignEat(a)||(a.sleepNeed>(c?28:50)||u)&&c&&this.assignSleep(a))continue;const f=a.kind===ie.Gravemage,g=a.kind===ie.Rattlekin||a.kind===ie.Emberling||a.kind===ie.Thornwitch||a.kind===ie.Bonewretch;if(f&&this.grid.countRoom(T.Library)>0){const m=this.findRoomTile(T.Library);if(m){a.job=B.Research,a.jobTarget=m,a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y));continue}}if(g&&a.trainNeed>28&&this.grid.countRoom(T.Training)>0&&a.level<4){const m=this.findRoomTile(T.Training);if(m){a.job=B.Train,a.jobTarget=m,a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y));continue}}const v=this.grid.tiles.find(m=>m.rally);if(v&&(g||a.kind===ie.Skitterwing)&&a.trainNeed<=50){a.job=B.Guard,a.jobTarget={x:v.x,y:v.y},a.x!==v.x||a.y!==v.y?a.setPath(this.grid.findPath(a.x,a.y,v.x,v.y)):a.setPath(null);continue}if(g&&this.grid.countRoom(T.Guard)>0&&a.trainNeed<=35){const m=this.findRoomTile(T.Guard);if(m){a.job=B.Guard,a.jobTarget=m,a.x!==m.x||a.y!==m.y?a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y)):a.setPath(null);continue}}if(!f&&a.trainNeed>45&&this.grid.countRoom(T.Training)>0&&a.level<4){const m=this.findRoomTile(T.Training);if(m){a.job=B.Train,a.jobTarget=m,a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y));continue}}if((a.job===B.Idle||a.job===B.Wander&&a.path.length===0)&&Math.random()<.008){const m=this.findFreeOrOwnedBed(a);if(m)a.job=B.Wander,a.setPath(this.grid.findPath(a.x,a.y,m.x,m.y));else{const p=this.grid.tiles.filter(x=>x.kind===A.Claimed);if(p.length){const x=p[Math.floor(Math.random()*p.length)];a.job=B.Wander,a.setPath(this.grid.findPath(a.x,a.y,x.x,x.y))}}}}for(const a of this.creatures){if(!a.alive||!a.isHero||a.stunTimer>0)continue;let h=null,d=8.5;for(const c of this.creatures){if(!c.alive||c.isHero||c.isWorker||c.held)continue;const u=Math.hypot(c.x-a.x,c.y-a.y);u<d&&(d=u,h=c)}if(h)a.job=B.Fight,a.jobTarget={x:h.x,y:h.y},Math.hypot(a.x-h.x,a.y-h.y)>1.15?a.setPath(this.grid.findPath(a.x,a.y,h.x,h.y,{forHero:!0,allowHazard:!0})):a.setPath(null);else{a.job=B.Fight;const c=this.grid.heartPos.x,u=this.grid.heartPos.y;if(a.path.length===0||Math.random()<.045){const f=this.grid.findPath(a.x,a.y,c,u,{forHero:!0,allowHazard:!0});if(f)a.setPath(f);else{let g=null,v=1/0;for(const m of this.grid.tiles){if(!this.grid.isWalkable(m.x,m.y)&&m.kind!==A.Heart)continue;const p=Math.hypot(m.x-c,m.y-u),x=Math.hypot(m.x-a.x,m.y-a.y);p<v&&x<20&&(v=p,g={x:m.x,y:m.y})}g&&a.setPath(this.grid.findPath(a.x,a.y,g.x,g.y,{forHero:!0,allowHazard:!0}))}}}}}findRoomTile(e){const t=this.grid.tiles.filter(n=>n.room===e);if(!t.length)return null;const i=t[Math.floor(Math.random()*t.length)];return{x:i.x,y:i.y}}releaseBed(e){e.bedKey&&(this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null)}findFreeOrOwnedBed(e){if(e.bedKey){const[i,n]=e.bedKey.split(",").map(Number),s=this.grid.get(i,n);if(s&&s.room===T.Lair)return{x:i,y:n};this.releaseBed(e)}const t=this.grid.tiles.filter(i=>i.room===T.Lair);for(const i of t){const n=`${i.x},${i.y}`,s=this.bedOwners.get(n);if(s===void 0||s===e.id)return{x:i.x,y:i.y}}return t.length?{x:t[0].x,y:t[0].y}:null}assignSleep(e){const t=this.findFreeOrOwnedBed(e);if(!t)return!1;const i=`${t.x},${t.y}`,n=this.bedOwners.get(i);if(n!==void 0&&n!==e.id){const s=this.grid.tiles.find(l=>{if(l.room!==T.Lair)return!1;const a=`${l.x},${l.y}`;return!this.bedOwners.has(a)});if(!s)return this.mentioneOnce("lairFull",X.lairFull),!1;const o=`${s.x},${s.y}`;return this.bedOwners.set(o,e.id),e.bedKey=o,e.job=B.Sleep,e.jobTarget={x:s.x,y:s.y},e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,s.x,s.y)),this.mentioneOnce("lairUse",X.lairUse),this.hud.say(X.bedClaim),!0}return this.bedOwners.set(i,e.id),e.bedKey=i,e.job=B.Sleep,e.jobTarget=t,e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("lairUse",X.lairUse),this.hud.say(X.bedClaim),!0}assignEat(e){this.hatcheryFood<=0&&this.grid.countRoom(T.Hatchery)>0&&this.mentioneOnce("hatcheryHungry",X.hatcheryHungry);const t=this.findRoomTile(T.Hatchery);return t?(e.job=B.Eat,e.jobTarget=t,e.eatAnnounced=!1,e.eatAnim=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("hatcheryUse",X.hatcheryUse),!0):!1}countOccupiedBeds(){let e=0;for(const t of this.creatures)!t.alive||t.job!==B.Sleep||!t.bedKey||e++;return e}spikeNeedsForRoom(e){for(const t of this.creatures)!t.alive||t.isHero||(e===T.Hatchery&&(t.hunger=Math.max(t.hunger,70)),e===T.Lair&&(t.sleepNeed=Math.max(t.sleepNeed,75),t.hp>t.maxHp*.55&&(t.hp=Math.min(t.hp,t.maxHp*.5))))}updateMoods(e){try{const t=this.grid.countRoom(T.Lair)>0,i=Math.max(1,this.grid.countRoom(T.Lair)),n=this.creatures.filter(o=>o.alive&&!o.isHero).length,s=t&&n>i+1;for(const o of this.creatures)try{if(!o.alive||o.isHero||o.held)continue;o.clampStats();let l=2*e;o.hunger>45&&(l-=10*e*((o.hunger-45)/55)),o.sleepNeed>40&&(l-=8*e*((o.sleepNeed-40)/60)),t||(l-=3.5*e),s&&(l-=4.5*e),(o.job===B.Sleep||o.job===B.Eat)&&(l+=12*e),o.hp<o.maxHp*.4&&(l-=3*e),Number.isFinite(l)||(l=0),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+l),o.mood<14&&!o.leaveWarned?(o.leaveWarned=!0,this.hud.say(X.leaveThreat),this.mentioneOnce("moodLow",X.moodLow)):o.mood>35&&(o.leaveWarned=!1);const a=o.workEfficiency();if(o.isWorker&&a<.75&&!o.efficiencyWarned?(o.efficiencyWarned=!0,this.hud.say(X.sluggishDig)):a>=.82&&(o.efficiencyWarned=!1),o.mood<6&&!o.isWorker&&o.job===B.Idle&&Math.random()<e*.015){o.alive=!1;try{o.mesh&&(o.mesh.visible=!1)}catch{}this.held===o&&(this.held=null),o.held=!1,o.selected=!1,this.selectedGroup=this.selectedGroup.filter(h=>h!==o&&h.alive),this.selected===o&&(this.selected=null),this.pruneSelection(),this.hud.say("A minion has left the Underkeep."),this.selected?this.refreshInspector():this.hud.hideInspector()}}catch(l){console.warn("[underkeep] mood tick failed",o?.id,l)}}catch(t){console.warn("[underkeep] updateMoods failed",t)}}updateCreatures(e){for(const t of this.creatures){if(!t.alive||t.held||t.knockedOut||t.isPrisoner)continue;if(t.stunTimer>0){t.stunTimer-=e;continue}t.speedBuff>0&&(t.speedBuff-=e),t.fleeTimer>0&&(t.fleeTimer-=e),t.attackCooldown>0&&(t.attackCooldown-=e);const i=t.moveAlongPath(e,this.grid);if(t.isHero)this.triggerTrapsForHero(t);else{const n=this.grid.get(t.x,t.y);n&&n.door===Je.Closed&&(n.door=Je.Open,this.requestStructuralRebuild())}t.isWorker?this.updateWorkerJob(t,e,i):t.isHero?this.updateHeroJob(t,e):this.updateMinionJob(t,e,i)}}triggerTrapsForHero(e){const t=this.grid.get(e.x,e.y);if(!t||t.trap!==xt.Sentry)return;const i=38;e.hp-=i,e.pulseTint("feast",.55),this.renderer.spawnFx(new E(e.wx,1.1,e.wz),16755268,.55),this.renderer.spawnFx(new E(e.wx,1.4,e.wz),16737826,.4),t.trap=xt.None,this.requestStructuralRebuild(),this.hud.say(X.sentryFire),e.hp<=0&&(this.grid.countRoom(T.Prison)>0?(e.alive=!0,e.hp=1,e.knockedOut=!0,e.job=B.Idle,e.jobTarget=null,e.setPath(null),this.hud.sayNow(X.heroKnocked)):(e.alive=!1,e.mesh.visible=!1,this.spawnCorpse(e.x,e.y,!0)))}updateWorkerJob(e,t,i){if(e.job===B.Flee){(i||e.fleeTimer<=0)&&(e.job=B.Idle,e.setPath(null));return}if(e.job===B.DragPrisoner){if(!e.jobTarget){e.job=B.Idle,e.workTimer=0;return}if(e.workTimer<=0){const l=this.creatures.find(d=>d.alive&&d.isHero&&d.knockedOut&&!d.isPrisoner&&!d.held&&Math.hypot(d.x-e.jobTarget.x,d.y-e.jobTarget.y)<2.2);if(!i&&e.pathIndex<e.path.length)return;if(!l){e.job=B.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-l.x,e.y-l.y)>1.6){const d=this.grid.findPath(e.x,e.y,l.x,l.y);d?(e.setPath(d),e.jobTarget={x:l.x,y:l.y}):(e.job=B.Idle,e.jobTarget=null);return}const a=this.findRoomTile(T.Prison);if(!a){e.job=B.Idle,e.jobTarget=null;return}e.workTimer=l.id,e.jobTarget=a;const h=this.grid.findPath(e.x,e.y,a.x,a.y);h?e.setPath(h):(e.job=B.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(l=>l.id===Math.floor(e.workTimer)&&l.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=B.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;o&&this.grid.get(o.x,o.y)?.room===T.Prison&&this.imprisonCreature(s,o.x,o.y),e.workTimer=0,e.job=B.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===B.Eat||e.job===B.Sleep){this.updateMinionJob(e,t,i);return}if(!e.jobTarget)return;const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n){e.job=B.Idle;return}if(e.job===B.Dig||e.job===B.Mine){if(!i&&e.pathIndex<e.path.length)return;if(Math.abs(e.x-n.x)+Math.abs(e.y-n.y)!==1&&Math.hypot(e.x-n.x,e.y-n.y)>1.55){const a=this.grid.findPathAdjacent(e.x,e.y,n.x,n.y);a?e.setPath(a):(e.job=B.Idle,e.jobTarget=null);return}const o=this.grid.tileToWorld(n.x,n.y);e.faceToward(o.x,o.z),e.workTimer+=t;const l=.38/Math.max(.5,Math.min(1.25,e.workEfficiency()));if(e.workTimer>=l){e.workTimer=0;const a=this.grid.tileToWorld(n.x,n.y);if(this.renderer.spawnDigDebris(a.x,a.z,n.kind===A.Gold?14725184:12615744),n.kind===A.Gold){const h=Math.min(40,n.goldAmount);n.goldAmount-=h,e.goldCarried+=h,n.digProgress=Math.min(1,n.digProgress+.2*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),this.mentioneOnce("firstGold",X.firstGold),n.goldAmount<=0?(n.kind=A.Dirt,n.mark=ke.None,n.goldAmount=0,n.digProgress=0,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=B.Idle,e.jobTarget=null):e.goldCarried>=120&&(e.job=B.Idle,e.jobTarget=null,e.setPath(null))}else n.kind===A.Earth?(n.digProgress=Math.min(1,n.digProgress+.34*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),n.digProgress>=1&&(n.kind=A.Dirt,n.mark=ke.None,n.digProgress=0,n.door=Je.None,n.trap=xt.None,n.rally=!1,n.room=T.None,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=B.Idle,e.jobTarget=null,this.saveNow())):(n.mark=ke.None,n.digProgress=0,e.job=B.Idle,e.jobTarget=null,this.marksDirty=!0)}}else if(e.job===B.Claim){if(!i&&e.pathIndex<e.path.length)return;if(Math.hypot(e.x-n.x,e.y-n.y)>1.2){const s=this.grid.findPath(e.x,e.y,n.x,n.y);s?e.setPath(s):(e.job=B.Idle,e.jobTarget=null);return}if(n.kind!==A.Dirt){n.mark=ke.None,e.job=B.Idle,e.jobTarget=null,this.marksDirty=!0;return}if(e.workTimer+=t,e.workTimer>=.35){n.kind=A.Claimed,n.claimedProgress=1,n.mark=ke.None,this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=B.Idle,e.jobTarget=null;const s=this.grid.tileToWorld(n.x,n.y);this.renderer.spawnFx(new E(s.x,.3,s.z),13155496,.4),this.mentioneOnce("claim",X.claim),this.mentioneOnce("fog",X.fog),this.saveNow()}}else if(e.job===B.Fortify){if(Math.hypot(e.x-n.x,e.y-n.y)>1.6)return;e.workTimer+=t,e.workTimer>=1.5&&(n.fortified=!0,n.mark=ke.None,this.requestStructuralRebuild(),e.job=B.Idle,e.jobTarget=null)}else if(e.job===B.Haul){if(!i)return;e.goldCarried>0&&(this.gold+=e.goldCarried,this.renderer.spawnFx(new E(e.wx,.6,e.wz),16764992,.55),this.mentioneOnce("firstGold",X.firstGold)),e.goldCarried=0,e.job=B.Idle,e.jobTarget=null}}updateMinionJob(e,t,i){if(e.job===B.Eat){if(!i&&e.pathIndex<e.path.length)return;e.eatAnnounced||(e.eatAnnounced=!0,this.hud.say(X.feasting),this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!0),e.pulseTint("feast",1.4)),this.hatcheryFood>0?(this.hatcheryFood=Math.max(0,this.hatcheryFood-1.8*t),e.hunger=Math.max(0,e.hunger-70*t),Math.random()<t*5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!1),e.pulseTint("feast",.7))):e.hunger=Math.max(0,e.hunger-12*t),e.hunger<5&&(e.job=B.Idle,e.jobTarget=null,e.eatAnnounced=!1)}else if(e.job===B.Sleep){if(!i&&e.pathIndex<e.path.length)return;if(e.jobTarget){const o=`${e.jobTarget.x},${e.jobTarget.y}`;e.bedKey=o,this.bedOwners.set(o,e.id)}const n=os(this.grid.largestContiguousRoom(T.Lair));e.sleepNeed=Math.max(0,e.sleepNeed-40*t*(1+n*.5));const s=e.hp;e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+12*t*(1+n))),e.hp>s&&(e.restHealAcc+=t,Math.random()<t*4.5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!1),e.pulseTint("heal",.75)),e.restHealAcc>=1.6&&(e.restHealAcc=0,this.hud.say(X.lairResting),this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!0),e.pulseTint("heal",1.5))),e.sleepNeed<5&&e.hp>=e.maxHp*.95&&(e.job=B.Idle,e.jobTarget=null)}else if(e.job===B.Craft){if(!e.jobTarget){e.job=B.Idle;return}const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n||n.room!==T.Workshop){e.job=B.Idle,e.jobTarget=null;return}if(!i){if(e.path.length===0){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s)}return}if(e.setPath(null),e.workTimer+=t*e.workEfficiency(),Math.random()<t*.5&&this.renderer.spawnFx(new E(e.wx,.7,e.wz),16755268,.3),e.workTimer>=6){e.workTimer=0;let s=null;this.nextKitIsDoor&&this.doorKits<tn?(this.doorKits++,s="door"):this.sentryKits<tn?(this.sentryKits++,s="sentry"):this.doorKits<tn&&(this.doorKits++,s="door"),this.nextKitIsDoor=!this.nextKitIsDoor,s&&(this.hud.sayNow(X.craftKit.replace("%k",s==="door"?"Door":"Sentry")),this.renderer.spawnFx(new E(e.wx,1.1,e.wz),16765040,.75)),this.doorKits>=tn&&this.sentryKits>=tn&&(e.job=B.Idle,e.jobTarget=null)}}else if(e.job===B.Research&&i){const n=os(this.grid.largestContiguousRoom(T.Library));this.researchProgress=Math.min(100,this.researchProgress+12*t*(1+n)),e.workTimer+=t,Math.random()<t*.35&&this.renderer.spawnFx(new E(e.wx,.9,e.wz),8939263,.35),this.researchProgress>=100&&(this.researchProgress=0,this.researchRank=Math.min(3,this.researchRank+1),this.researchRank>=1&&!this.healUnlocked?(this.healUnlocked=!0,this.hud.sayNow(X.researchHeal)):this.hud.sayNow(X.researchDone.replace("%r",String(this.researchRank))),this.renderer.spawnFx(new E(e.wx,1.2,e.wz),11176191,.8))}else if(e.job===B.Guard){if(!e.jobTarget){e.job=B.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null);return}else if(e.job===B.Train&&i){if(e.trainNeed=Math.max(0,e.trainNeed-30*t),e.workTimer+=t,e.workTimer>8&&e.level<4){e.level++,e.maxHp+=15,e.hp=e.maxHp,e.damage+=3,e.workTimer=0,this.renderer.spawnFx(new E(e.wx,1,e.wz),16755268,.6);const n={rattlekin:"Rattlekin",emberling:"Emberling",skitterwing:"Skitterwing",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"};this.hud.sayNow(`${n[e.kind]??"Minion"} reaches training level ${e.level}!`)}e.trainNeed<5&&(e.job=B.Idle)}else e.job===B.AttackMove?(this.doCombat(e,t),i&&e.jobTarget&&e.x===e.jobTarget.x&&e.y===e.jobTarget.y&&(this.creatures.some(s=>s.alive&&s.isHero&&Math.hypot(s.x-e.x,s.y-e.y)<12)||(e.job=B.Guard))):e.job===B.Fight?this.doCombat(e,t):e.job===B.Wander&&i&&(e.job=B.Idle)}updateHeroJob(e,t){const i=this.grid.heartPos.x,n=this.grid.heartPos.y;Math.hypot(e.x-i,e.y-n)<=1.5&&e.attackCooldown<=0&&(e.attackCooldown=1.2,this.heartHp-=e.damage,this.renderer.spawnFx(new E(this.grid.tileToWorld(i,n).x,1,this.grid.tileToWorld(i,n).z),16719936,.4),this.mentioneOnce("heartHurt",X.heartHurt)),this.doCombat(e,t)}heartHp=500;doCombat(e,t){try{const i=e.isHero?1.65:1.55,n=this.creatures.filter(c=>c.alive&&c!==e&&c.isHero!==e.isHero&&!c.isWorker&&!c.knockedOut&&!c.isPrisoner&&Math.hypot(c.x-e.x,c.y-e.y)<i),s=e.isHero?this.creatures.filter(c=>c.alive&&c.isWorker&&Math.hypot(c.x-e.x,c.y-e.y)<1.35):[],o=n.length?n:s;if(!o.length||(!this.heroEngageAnnounced&&(e.isHero||o.some(c=>c.isHero))&&(this.heroEngageAnnounced=!0,this.hud.say(X.heroEngage)),e.attackCooldown>0))return;const l=e.isHero?1:1+(e.level-1)*.12;e.attackCooldown=e.isHero?.85:.78;const a=o[0],h=a.alive,d=e.damage*(.95+Math.random()*.25)*l;a.takeDamage(d),this.renderer.spawnFx(new E(a.wx,.85,a.wz),e.isHero?8956671:16728128,.32),this.renderer.spawnFx(new E(a.wx,1.15,a.wz),16768426,.18),h&&!a.alive&&(a.isHero&&this.grid.countRoom(T.Prison)>0?(a.alive=!0,a.hp=1,a.knockedOut=!0,a.isPrisoner=!1,a.convertProgress=0,a.job=B.Idle,a.jobTarget=null,a.setPath(null),a.attackCooldown=0,this.hud.sayNow(X.heroKnocked),this.renderer.spawnFx(new E(a.wx,1.2,a.wz),10535167,.7)):(this.spawnCorpse(a.x,a.y,a.isHero),a.isHero&&(this.hud.sayNow(X.heroDown),this.renderer.spawnFx(new E(a.wx,1.2,a.wz),16772744,.7))))}catch(i){console.warn("[underkeep] doCombat failed",i)}}announceSpecies(e,t){const n={skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e]??"minion";this.hud.sayNow(`A ${n} has entered the Underkeep.`),this.hud.say(t)}updatePortal(e){if(this.portalCooldown-=e,this.portalCooldown>0)return;const t=this.grid.countRoom(T.Portal);if(t<=0)return;const i=this.grid.countRoom(T.Lair),n=this.grid.countRoom(T.Hatchery),s=this.grid.countRoom(T.Training),o=this.grid.countRoom(T.Library),l=this.grid.countRoom(T.Treasury),a=this.grid.countClaimed(),h=this.grid.tiles.find(u=>u.room===T.Portal);if(!h)return;let d=h.x,c=h.y;for(const u of this.grid.neighbors4(h.x,h.y))if(this.grid.isWalkable(u.x,u.y)){d=u.x,c=u.y;break}if(!this.attracted.skitterwing&&a>=16&&t>=1){this.spawnCreature(ie.Skitterwing,d,c),this.attracted.skitterwing=!0,this.portalCooldown=8,this.announceSpecies(ie.Skitterwing,X.skitterwing);return}if(!this.attracted.rattlekin&&i>=4&&n>=2){this.spawnCreature(ie.Rattlekin,d,c),this.attracted.rattlekin=!0,this.portalCooldown=10,this.announceSpecies(ie.Rattlekin,X.rattlekin);return}if(!this.attracted.emberling&&s>=4&&i>=6&&this.gold>=200){this.spawnCreature(ie.Emberling,d,c),this.attracted.emberling=!0,this.portalCooldown=12,this.announceSpecies(ie.Emberling,X.emberling);return}if(!this.attracted.gravemage&&o>=4&&i>=4){this.spawnCreature(ie.Gravemage,d,c),this.attracted.gravemage=!0,this.portalCooldown=12,this.announceSpecies(ie.Gravemage,X.gravemage);return}if(this.attracted.rattlekin&&i>=4&&n>=2&&Math.random()<.12&&this.creatures.filter(f=>f.alive&&f.kind===ie.Rattlekin).length<4){this.spawnCreature(ie.Rattlekin,d,c),this.portalCooldown=22,this.hud.sayNow("A Rattlekin has entered the Underkeep.");return}if(this.attracted.gravemage&&o>=4&&Math.random()<.1&&this.creatures.filter(f=>f.alive&&f.kind===ie.Gravemage).length<2){this.spawnCreature(ie.Gravemage,d,c),this.portalCooldown=28,this.hud.sayNow("A Gravemage has entered the Underkeep.");return}this.attracted.emberling&&s>=4&&l>=2&&Math.random()<.08&&this.creatures.filter(f=>f.alive&&f.kind===ie.Emberling).length<2&&(this.spawnCreature(ie.Emberling,d,c),this.portalCooldown=30,this.hud.sayNow("An Emberling has entered the Underkeep."))}spawnCorpse(e,t,i){this.corpses.push({x:e,y:t,timer:0,fromHero:i}),this.corpses.length>24&&this.corpses.shift()}imprisonCreature(e,t,i){e.knockedOut=!1,e.isPrisoner=!0,e.convertProgress=Math.max(0,e.convertProgress),e.hp=Math.max(1,Math.min(e.maxHp,e.hp)),e.alive=!0,e.held=!1,e.job=B.Idle,e.jobTarget=null,e.setPath(null),e.x=t,e.y=i;const n=this.grid.tileToWorld(t,i);e.wx=n.x,e.wz=n.z,e.hunger=Math.max(e.hunger,20),this.hud.sayNow(X.prisonerHeld),this.renderer.spawnFx(new E(e.wx,1,e.wz),8425640,.55)}convertPrisoner(e){const t=e.x,i=e.y;e.alive=!1;try{this.renderer.removeEntityMesh(e.mesh)}catch{}const n=Math.random()<.7?ie.Thornwitch:ie.Rattlekin,s=this.spawnCreature(n,t,i);s.mood=80,s.hunger=15,this.hud.sayNow(X.converted),this.renderer.spawnFx(new E(s.wx,1.2,s.wz),16728160,.8),this.announceSpecies(n,X.converted)}raiseBonewretch(e,t,i){const n=this.findRoomTile(T.Graveyard),s=n?.x??e,o=n?.y??t,l=this.spawnCreature(ie.Bonewretch,s,o);l.mood=90,l.hunger=0,l.sleepNeed=0,this.hud.sayNow(i),this.renderer.spawnFx(new E(l.wx,1.1,l.wz),8453984,.75)}updatePrisonEconomy(e){const t=this.grid.countRoom(T.Prison)>0,i=this.grid.countRoom(T.Torture)>0,n=this.grid.countRoom(T.Graveyard)>0;for(const s of this.creatures)!s.alive||!s.isHero||s.held||s.knockedOut&&!s.isPrisoner&&this.grid.get(s.x,s.y)?.room===T.Prison&&this.imprisonCreature(s,s.x,s.y);for(const s of this.creatures){if(!s.alive||!s.isPrisoner)continue;s.hunger=Math.min(100,s.hunger+6*e);const o=this.grid.get(s.x,s.y)?.room===T.Torture;if(!(this.grid.get(s.x,s.y)?.room===T.Prison)&&!o&&t){const a=this.findRoomTile(T.Prison);if(a){s.x=a.x,s.y=a.y;const h=this.grid.tileToWorld(a.x,a.y);s.wx=h.x,s.wz=h.z}}if(i){const a=o?9:4.5,h=s.convertProgress;if(s.convertProgress=Math.min(100,s.convertProgress+a*e),h<40&&s.convertProgress>=40&&this.hud.say(X.converting),s.convertProgress>=100){this.convertPrisoner(s);continue}}if(s.hunger>=100){const a=s.x,h=s.y;s.alive=!1;try{this.renderer.removeEntityMesh(s.mesh)}catch{}n?this.raiseBonewretch(a,h,X.starvedBones):(this.spawnCorpse(a,h,!0),this.hud.sayNow(X.starvedBones))}}if(n&&this.corpses.length){const s=[];for(const o of this.corpses){const l=this.grid.get(o.x,o.y)?.room===T.Graveyard;o.timer+=e*(l?1.6:1),o.timer>=8?this.raiseBonewretch(o.x,o.y,X.boneRaised):s.push(o)}this.corpses=s}else n||(this.corpses=this.corpses.filter(s=>(s.timer+=e*.25,s.timer<40)))}updateHeroWave(e){if(this.heroWaveSpawned){if(!this.won&&!this.gameOver&&!this.creatures.some(u=>u.alive&&u.isHero&&!u.knockedOut&&!u.isPrisoner)&&this.time>2){if(this.wavesCleared=Math.min(Jt,this.wavesCleared+1),this.heroWaveSpawned=!1,this.wavesCleared>=Jt){this.checkMissionWin();return}this.heroWaveTimer=50+this.wavesCleared*8,this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1;const u=this.wavesCleared+1;this.hud.sayNow(X.waveCleared.replace("%n",String(this.wavesCleared)).replace("%next",String(u)).replace("%w",String(Jt))),this.hud.say(X.win)}return}if(this.heroWaveTimer-=e,!this.heroWarn30&&this.heroWaveTimer<=30&&this.heroWaveTimer>10&&(this.heroWarn30=!0,this.hud.sayNow(X.heroesSoon)),!this.heroWarn10&&this.heroWaveTimer<=10&&this.heroWaveTimer>0&&(this.heroWarn10=!0,this.hud.sayNow(X.heroesImminent)),this.heroWaveTimer>0)return;this.heroWaveSpawned=!0;const t=this.wavesCleared+1;this.hud.sayNow(`${X.heroes} (Wave ${t}/${Jt})`),this.hud.say(X.heroes);const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=2,o=i;for(let c=2;c<Math.min(n-1,this.grid.height/2);c++)if(this.grid.isWalkable(i,c)){s=c,o=i;break}for(let c=s;c<=Math.min(s+4,n-2);c++)for(let u=i-1;u<=i+1;u++){const f=this.grid.get(u,c);!f||f.kind===A.Heart||f.kind===A.Rock||(f.kind===A.Earth||f.kind===A.Gold||f.kind===A.Wall)&&(f.kind=A.Dirt,f.fortified=!1,f.digProgress=0,this.gridDirty=!0)}if(!this.grid.isWalkable(o,s)){const c=this.grid.get(o,s);c&&c.kind!==A.Rock&&c.kind!==A.Heart&&(c.kind=A.Dirt,this.gridDirty=!0)}this.requestStructuralRebuild();const l=this.spawnCreature(ie.HeroKnight,o,s),a=this.spawnCreature(ie.HeroKnight,o+1,s),h=this.spawnCreature(ie.HeroArcher,o-1,s),d=1.05+this.wavesCleared*.12;for(const c of[l,a,h]){c.job=B.Fight,c.jobTarget={...this.grid.heartPos},c.hp=Math.floor(c.maxHp*d),c.maxHp=c.hp;const u=this.grid.tileToWorld(c.x,c.y);this.renderer.spawnFx(new E(u.x,1.2,u.z),10535167,.65)}if(this.grid.countClaimed()>=40){const c=this.spawnCreature(ie.HeroKnight,o,s+1);c.job=B.Fight,c.jobTarget={...this.grid.heartPos},this.renderer.spawnFx(new E(c.wx,1.2,c.wz),10535167,.5)}}checkHeart(){this.heartHp<=0&&!this.gameOver&&(this.gameOver=!0,this.hud.say(X.lose),this.hud.showOverlay("Defeat",X.lose,"Try Again"))}render(){this.renderer.render()}}const N0=document.getElementById("game-canvas");function U0(r){const e=document.getElementById("overlay"),t=document.getElementById("overlay-title"),i=document.getElementById("overlay-msg"),n=document.getElementById("overlay-btn"),s=document.getElementById("overlay-btn-secondary");if(!e||!t||!i||!n)return;t.textContent="Underkeep",i.textContent=r,n.textContent="New Game",s?.classList.add("hidden"),e.classList.remove("hidden");const o=()=>{Gi(),location.reload()};n.onclick=o,document.getElementById("btn-new-game")?.addEventListener("click",o,{once:!0})}let Vi=null;try{Vi=new k0(N0)}catch(r){console.error("[underkeep] fatal boot error — clearing save",r),Gi(),document.body.classList.remove("booting"),U0("Something went wrong loading your dungeon. Your save was cleared. Tap New Game to begin again.")}window.__underkeep=Vi;let Jl=performance.now(),as=0;function Gh(r){const e=Math.min(.05,(r-Jl)/1e3);if(Jl=r,Vi)try{Vi.update(e),Vi.render(),as=0}catch(t){as++,console.error("[underkeep] frame error",t);const i=Vi;i.renderer?.contextLost?(i.handleContextLost?.(),as=0):as>=8&&(console.warn("[underkeep] many frame errors — continuing without overlay"),as=0)}requestAnimationFrame(Gh)}requestAnimationFrame(Gh);const Me=new URLSearchParams(location.search);Vi&&(Me.get("shot")==="1"||Me.get("shot")==="4"||Me.get("shot")==="5b"||Me.get("shot")==="5c"||Me.get("shot")==="5c-heal"||Me.get("shot")==="5c-feast"||Me.get("shot")==="6.1"||Me.get("shot")==="61"||Me.get("shot")==="6.1b"||Me.get("shot")==="61b"||Me.get("shot")==="6.1b-slap"||Me.get("shot")==="6.1b-eff"||Me.get("shot")==="6.1c"||Me.get("shot")==="61c"||Me.get("shot")==="6.1c-pick"||Me.get("shot")==="6.1c-slap"||Me.get("shot")==="6.2a"||Me.get("shot")==="62a"||Me.get("shot")==="6.2"||Me.get("shot")==="62"||Me.get("shot")==="6.3"||Me.get("shot")==="63"||Me.get("shot")==="6.4"||Me.get("shot")==="64"||Me.get("shot")==="6.4b"||Me.get("shot")==="64b"||Me.get("shot")==="6.5"||Me.get("shot")==="65"||Me.get("shot")==="6.5-fow"||Me.get("shot")==="6.5-fortify"||Me.get("shot")==="7.1"||Me.get("shot")==="71"||Me.get("shot")==="7.1-lava"||Me.get("shot")==="71-lava"||Me.get("shot")==="7.1-bridge"||Me.get("shot")==="71-bridge"||Me.get("shot")==="7.1-possess"||Me.get("shot")==="71-possess"||Me.get("shot")==="7.1-payday"||Me.get("shot")==="71-payday"||Me.get("shot")==="7.2"||Me.get("shot")==="72"||Me.get("shot")==="7.2-minimap"||Me.get("shot")==="72-minimap"||Me.get("shot")==="7.2-mission"||Me.get("shot")==="72-mission"||Me.get("shot")==="7.2-workshop"||Me.get("shot")==="72-workshop"||Me.get("shot")==="7.2-worker"||Me.get("shot")==="72-worker"||Me.get("shot")==="7.3"||Me.get("shot")==="73"||Me.get("shot")==="7.3-prison"||Me.get("shot")==="73-prison"||Me.get("shot")==="7.3-torture"||Me.get("shot")==="73-torture"||Me.get("shot")==="7.3-graveyard"||Me.get("shot")==="73-graveyard"||Me.get("shot")==="7.3-efficiency"||Me.get("shot")==="73-efficiency")&&setTimeout(()=>{const r=Vi;r.hud.hideOverlay();const e=Me.get("shot");e==="7.3-prison"||e==="73-prison"?r.preparePass73Shot?.("prison"):e==="7.3-torture"||e==="73-torture"?r.preparePass73Shot?.("torture"):e==="7.3-graveyard"||e==="73-graveyard"?r.preparePass73Shot?.("graveyard"):e==="7.3-efficiency"||e==="73-efficiency"?r.preparePass73Shot?.("efficiency"):e==="7.3"||e==="73"?r.preparePass73Shot?.("both"):e==="7.2-minimap"||e==="72-minimap"?r.preparePass72Shot?.("minimap"):e==="7.2-mission"||e==="72-mission"?r.preparePass72Shot?.("mission"):e==="7.2-workshop"||e==="72-workshop"?r.preparePass72Shot?.("workshop"):e==="7.2-worker"||e==="72-worker"?r.preparePass72Shot?.("worker"):e==="7.2"||e==="72"?r.preparePass72Shot?.("both"):e==="7.1-lava"||e==="71-lava"?r.preparePass71Shot?.("lava"):e==="7.1-bridge"||e==="71-bridge"?r.preparePass71Shot?.("bridge"):e==="7.1-possess"||e==="71-possess"?r.preparePass71Shot?.("possess"):e==="7.1-payday"||e==="71-payday"?r.preparePass71Shot?.("payday"):e==="7.1"||e==="71"?r.preparePass71Shot?.("both"):e==="6.5-fortify"?r.preparePass65Shot?.("fortify"):e==="6.5-fow"?r.preparePass65Shot?.("fow"):e==="6.5"||e==="65"?r.preparePass65Shot?.("both"):e==="6.4b"||e==="64b"?r.preparePass64bShot?.():e==="6.4"||e==="64"?r.preparePass64Shot?.():e==="6.3"||e==="63"?r.preparePass63Shot?.():e==="6.2a"||e==="62a"?r.preparePass62aStabShot?.():e==="6.2"||e==="62"?r.preparePass62Shot?.():e==="6.1c-slap"?r.preparePass61cShot?.("slap"):e==="6.1c-pick"?r.preparePass61cShot?.("pick"):e==="6.1c"||e==="61c"?r.preparePass61cShot?.("both"):e==="6.1b-slap"?r.preparePass61bShot?.("slap"):e==="6.1b-eff"?r.preparePass61bShot?.("efficiency"):e==="6.1b"||e==="61b"?r.preparePass61bShot?.("both"):e==="6.1"||e==="61"?r.preparePass61Shot?.():e==="5c-heal"?r.preparePass5cShot?.("heal"):e==="5c-feast"?r.preparePass5cShot?.("feast"):e==="5c"||e==="5b"?r.preparePass5cShot?r.preparePass5cShot("both"):r.preparePass5bShot?.():e==="4"||!r.preparePass3Shot?r.preparePass4Shot?.():Me.get("pass")==="3"?r.preparePass3Shot?.():r.preparePass4Shot?.()},400);
