(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="170",Wh=0,Ma=1,Xh=2,jh=0,Zl=1,qh=2,Si=3,Wi=0,Ot=1,Xt=2,Ei=0,Pn=1,Qr=2,Sa=3,wa=4,Yh=5,en=100,$h=101,Kh=102,Zh=103,Jh=104,Qh=200,ec=201,tc=202,ic=203,eo=204,to=205,nc=206,sc=207,rc=208,oc=209,ac=210,lc=211,hc=212,cc=213,dc=214,io=0,no=1,so=2,Nn=3,ro=4,oo=5,ao=6,lo=7,Jl=0,uc=1,fc=2,Vi=0,pc=1,mc=2,gc=3,Ql=4,vc=5,xc=6,_c=7,eh=300,Un=301,kn=302,ho=303,co=304,or=306,Qs=1e3,nn=1001,uo=1002,jt=1003,yc=1004,gs=1005,oi=1006,fr=1007,Hi=1008,Ri=1009,th=1010,ih=1011,hs=1012,Xo=1013,rn=1014,di=1015,Ai=1016,jo=1017,qo=1018,Fn=1020,nh=35902,sh=1021,rh=1022,ai=1023,oh=1024,ah=1025,Ln=1026,On=1027,Yo=1028,$o=1029,lh=1030,Ko=1031,Zo=1033,js=33776,qs=33777,Ys=33778,$s=33779,fo=35840,po=35841,mo=35842,go=35843,vo=36196,xo=37492,_o=37496,yo=37808,Mo=37809,So=37810,wo=37811,bo=37812,To=37813,Eo=37814,Ao=37815,Co=37816,Ro=37817,Po=37818,Lo=37819,Do=37820,Io=37821,Ks=36492,No=36494,Uo=36495,hh=36283,ko=36284,Fo=36285,Oo=36286,Mc=3200,Sc=3201,ch=0,wc=1,wi="",Nt="srgb",Hn="srgb-linear",ar="linear",lt="srgb",cn=7680,ba=519,bc=512,Tc=513,Ec=514,dh=515,Ac=516,Cc=517,Rc=518,Pc=519,Ta=35044,Lc=35048,Ea="300 es",Ti=2e3,er=2001;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const Dn=Math.PI/180,cs=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Jo(s,e){return(s%e+e)%e}function Dc(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Ic(s,e,t){return s!==e?(t-s)/(e-s):0}function os(s,e,t){return(1-t)*s+t*e}function Nc(s,e,t,i){return os(s,e,1-Math.exp(-t*i))}function Uc(s,e=1){return e-Math.abs(Jo(s,e*2)-e)}function kc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Fc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Oc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bc(s,e){return s+Math.random()*(e-s)}function zc(s){return s*(.5-Math.random())}function Hc(s){s!==void 0&&(Aa=s);let e=Aa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gc(s){return s*Dn}function Vc(s){return s*cs}function Wc(s){return(s&s-1)===0&&s!==0}function Xc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qc(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+i)/2),c=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*c,l*d,l*u,a*h);break;case"YZY":s.set(l*u,a*c,l*d,a*h);break;case"ZXZ":s.set(l*d,l*u,a*c,a*h);break;case"XZX":s.set(a*c,l*g,l*f,a*h);break;case"YXY":s.set(l*f,a*c,l*g,a*h);break;case"ZYZ":s.set(l*g,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ca={DEG2RAD:Dn,RAD2DEG:cs,generateUUID:Vn,clamp:At,euclideanModulo:Jo,mapLinear:Dc,inverseLerp:Ic,lerp:os,damp:Nc,pingpong:Uc,smoothstep:kc,smootherstep:Fc,randInt:Oc,randFloat:Bc,randFloatSpread:zc,seededRandom:Hc,degToRad:Gc,radToDeg:Vc,isPowerOfTwo:Wc,ceilPowerOfTwo:Xc,floorPowerOfTwo:jc,setQuaternionFromProperEuler:qc,normalize:Dt,denormalize:An};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,n,r,o,a,l,h){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,h)}set(e,t,i,n,r,o,a,l,h){const c=this.elements;return c[0]=e,c[1]=n,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],x=n[1],w=n[4],y=n[7],I=n[2],C=n[5],R=n[8];return r[0]=o*v+a*x+l*I,r[3]=o*m+a*w+l*C,r[6]=o*p+a*y+l*R,r[1]=h*v+c*x+d*I,r[4]=h*m+c*w+d*C,r[7]=h*p+c*y+d*R,r[2]=u*v+f*x+g*I,r[5]=u*m+f*w+g*C,r[8]=u*p+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8];return t*o*c-t*a*h-i*r*c+i*a*l+n*r*h-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,g=t*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(n*h-c*i)*v,e[2]=(a*i-n*o)*v,e[3]=u*v,e[4]=(c*t-n*l)*v,e[5]=(n*r-a*t)*v,e[6]=f*v,e[7]=(i*l-h*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-n*h,n*l,-n*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new ze;function uh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yc(){const s=tr("canvas");return s.style.display="block",s}const Ra={};function ss(s){s in Ra||(Ra[s]=!0,console.warn(s))}function $c(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Kc(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zc(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function In(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Pa=[.64,.33,.3,.6,.15,.06],La=[.2126,.7152,.0722],Da=[.3127,.329],Ia=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Na=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Hn]:{primaries:Pa,whitePoint:Da,transfer:ar,toXYZ:Ia,fromXYZ:Na,luminanceCoefficients:La,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:Pa,whitePoint:Da,transfer:lt,toXYZ:Ia,fromXYZ:Na,luminanceCoefficients:La,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let dn;class Jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dn===void 0&&(dn=tr("canvas")),dn.width=e.width,dn.height=e.height;const i=dn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qc=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(mr(n[o].image)):r.push(mr(n[o]))}else r=mr(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ed=0;class Lt extends Gn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=nn,n=nn,r=oi,o=Hi,a=ai,l=Ri,h=Lt.DEFAULT_ANISOTROPY,c=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Vn(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=eh;Lt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,y=(f+1)/2,I=(p+1)/2,C=(c+u)/4,R=(d+v)/4,P=(g+m)/4;return w>y&&w>I?w<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(w),n=C/i,r=R/i):y>I?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=C/n,r=P/n):I<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(I),i=R/r,n=P/r),this.set(i,n,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-c)/x,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class td extends Gn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends td{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ph extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends Lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3];const u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||h!==f||c!==g){let m=1-a;const p=l*u+h*f+c*g+d*v,x=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const I=Math.sqrt(w),C=Math.atan2(I,p*x);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const y=a*x;if(l=l*m+u*y,h=h*m+f*y,c=c*m+g*y,d=d*m+v*y,m===1-a){const I=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=I,h*=I,c*=I,d*=I}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+c*d+l*f-h*u,e[t+1]=l*g+c*u+h*d-a*f,e[t+2]=h*g+c*f+a*u-l*d,e[t+3]=c*g-a*d-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-n)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+h)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+o*a+n*h-r*l,this._y=n*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-n*a,this._w=o*c-i*a-n*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),d=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*n-a*i),c=2*(a*t-r*n),d=2*(r*i-o*t);return this.x=t+l*h+o*d-a*c,this.y=i+l*c+a*h-r*d,this.z=n+l*d+r*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gr.copy(this).projectOnVector(e),this.sub(gr)}reflect(e){return this.sub(gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new E,Ua=new ds;class ln{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),xs.subVectors(this.max,$n),un.subVectors(e.a,$n),fn.subVectors(e.b,$n),pn.subVectors(e.c,$n),Di.subVectors(fn,un),Ii.subVectors(pn,fn),ji.subVectors(un,pn);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!vr(t,un,fn,pn,xs)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,un,fn,pn,xs))?!1:(_s.crossVectors(Di,Ii),t=[_s.x,_s.y,_s.z],vr(t,un,fn,pn,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new E,new E,new E,new E,new E,new E,new E,new E],ti=new E,vs=new ln,un=new E,fn=new E,pn=new E,Di=new E,Ii=new E,ji=new E,$n=new E,xs=new E,_s=new E,qi=new E;function vr(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){qi.fromArray(s,r);const a=n.x*Math.abs(qi.x)+n.y*Math.abs(qi.y)+n.z*Math.abs(qi.z),l=e.dot(qi),h=t.dot(qi),c=i.dot(qi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const nd=new ln,Kn=new E,xr=new E;class Wn{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nd.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kn.subVectors(e,this.center);const t=Kn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Kn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kn.copy(e.center).add(xr)),this.expandByPoint(Kn.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new E,_r=new E,ys=new E,Ni=new E,yr=new E,Ms=new E,Mr=new E;class Qo{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){_r.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(_r);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=Ni.dot(this.direction),l=-Ni.dot(ys),h=Ni.lengthSq(),c=Math.abs(1-o*o);let d,u,f,g;if(c>0)if(d=o*l-a,u=o*a-l,g=r*c,d>=0)if(u>=-g)if(u<=g){const v=1/c;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(_r).addScaledVector(ys,u),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),n=xi.dot(xi)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,n,r){yr.subVectors(t,e),Ms.subVectors(i,e),Mr.crossVectors(yr,Ms);let o=this.direction.dot(Mr),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ms.crossVectors(Ni,Ms));if(l<0)return null;const h=a*this.direction.dot(yr.cross(Ni));if(h<0||l+h>o)return null;const c=-a*Ni.dot(Mr);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,n,r,o,a,l,h,c,d,u,f,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,h,c,d,u,f,g,v,m)}set(e,t,i,n,r,o,a,l,h,c,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/mn.setFromMatrixColumn(e,0).length(),r=1/mn.setFromMatrixColumn(e,1).length(),o=1/mn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*c,f=o*d,g=a*c,v=a*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=f+g*h,t[5]=u-v*h,t[9]=-a*l,t[2]=v-u*h,t[6]=g+f*h,t[10]=o*l}else if(e.order==="YXZ"){const u=l*c,f=l*d,g=h*c,v=h*d;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*h,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*c,f=l*d,g=h*c,v=h*d;t[0]=u-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*c,t[9]=v-u*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*c,f=o*d,g=a*c,v=a*d;t[0]=l*c,t[4]=g*h-f,t[8]=u*h+v,t[1]=l*d,t[5]=v*h+u,t[9]=f*h-g,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*h,g=a*l,v=a*h;t[0]=l*c,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-h*c,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*l,f=o*h,g=a*l,v=a*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+v,t[5]=o*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*c,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sd,e,rd)}lookAt(e,t,i){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Ui.crossVectors(i,zt),Ui.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Ui.crossVectors(i,zt)),Ui.normalize(),Ss.crossVectors(zt,Ui),n[0]=Ui.x,n[4]=Ss.x,n[8]=zt.x,n[1]=Ui.y,n[5]=Ss.y,n[9]=zt.y,n[2]=Ui.z,n[6]=Ss.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],w=i[7],y=i[11],I=i[15],C=n[0],R=n[4],P=n[8],b=n[12],M=n[1],L=n[5],G=n[9],H=n[13],Y=n[2],Q=n[6],q=n[10],ie=n[14],j=n[3],de=n[7],ve=n[11],Ae=n[15];return r[0]=o*C+a*M+l*Y+h*j,r[4]=o*R+a*L+l*Q+h*de,r[8]=o*P+a*G+l*q+h*ve,r[12]=o*b+a*H+l*ie+h*Ae,r[1]=c*C+d*M+u*Y+f*j,r[5]=c*R+d*L+u*Q+f*de,r[9]=c*P+d*G+u*q+f*ve,r[13]=c*b+d*H+u*ie+f*Ae,r[2]=g*C+v*M+m*Y+p*j,r[6]=g*R+v*L+m*Q+p*de,r[10]=g*P+v*G+m*q+p*ve,r[14]=g*b+v*H+m*ie+p*Ae,r[3]=x*C+w*M+y*Y+I*j,r[7]=x*R+w*L+y*Q+I*de,r[11]=x*P+w*G+y*q+I*ve,r[15]=x*b+w*H+y*ie+I*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-n*h*d-r*a*u+i*h*u+n*a*f-i*l*f)+v*(+t*l*f-t*h*u+r*o*u-n*o*f+n*h*c-r*l*c)+m*(+t*h*d-t*a*f-r*o*d+i*o*f+r*a*c-i*h*c)+p*(-n*a*c-t*l*d+t*a*u+n*o*d-i*o*u+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=d*m*h-v*u*h+v*l*f-a*m*f-d*l*p+a*u*p,w=g*u*h-c*m*h-g*l*f+o*m*f+c*l*p-o*u*p,y=c*v*h-g*d*h+g*a*f-o*v*f-c*a*p+o*d*p,I=g*d*l-c*v*l-g*a*u+o*v*u+c*a*m-o*d*m,C=t*x+i*w+n*y+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=x*R,e[1]=(v*u*r-d*m*r-v*n*f+i*m*f+d*n*p-i*u*p)*R,e[2]=(a*m*r-v*l*r+v*n*h-i*m*h-a*n*p+i*l*p)*R,e[3]=(d*l*r-a*u*r-d*n*h+i*u*h+a*n*f-i*l*f)*R,e[4]=w*R,e[5]=(c*m*r-g*u*r+g*n*f-t*m*f-c*n*p+t*u*p)*R,e[6]=(g*l*r-o*m*r-g*n*h+t*m*h+o*n*p-t*l*p)*R,e[7]=(o*u*r-c*l*r+c*n*h-t*u*h-o*n*f+t*l*f)*R,e[8]=y*R,e[9]=(g*d*r-c*v*r-g*i*f+t*v*f+c*i*p-t*d*p)*R,e[10]=(o*v*r-g*a*r+g*i*h-t*v*h-o*i*p+t*a*p)*R,e[11]=(c*a*r-o*d*r-c*i*h+t*d*h+o*i*f-t*a*f)*R,e[12]=I*R,e[13]=(c*v*n-g*d*n+g*i*u-t*v*u-c*i*m+t*d*m)*R,e[14]=(g*a*n-o*v*n-g*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*d*n-c*a*n+c*i*l-t*d*l-o*i*u+t*a*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,c*a+i,c*l-n*o,0,h*l-n*a,c*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,g=r*d,v=o*c,m=o*d,p=a*d,x=l*h,w=l*c,y=l*d,I=i.x,C=i.y,R=i.z;return n[0]=(1-(v+p))*I,n[1]=(f+y)*I,n[2]=(g-w)*I,n[3]=0,n[4]=(f-y)*C,n[5]=(1-(u+p))*C,n[6]=(m+x)*C,n[7]=0,n[8]=(g+w)*R,n[9]=(m-x)*R,n[10]=(1-(u+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=mn.set(n[0],n[1],n[2]).length();const o=mn.set(n[4],n[5],n[6]).length(),a=mn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],ii.copy(this);const h=1/r,c=1/o,d=1/a;return ii.elements[0]*=h,ii.elements[1]*=h,ii.elements[2]*=h,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o,a=Ti){const l=this.elements,h=2*r/(t-e),c=2*r/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let f,g;if(a===Ti)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===er)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Ti){const l=this.elements,h=1/(t-e),c=1/(i-n),d=1/(o-r),u=(t+e)*h,f=(i+n)*c;let g,v;if(a===Ti)g=(o+r)*d,v=-2*d;else if(a===er)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mn=new E,ii=new at,sd=new E(0,0,0),rd=new E(1,1,1),Ui=new E,Ss=new E,zt=new E,ka=new at,Fa=new ds;class fi{constructor(e=0,t=0,i=0,n=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ka,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let od=0;const Oa=new E,gn=new ds,_i=new at,ws=new E,Zn=new E,ad=new E,ld=new ds,Ba=new E(1,0,0),za=new E(0,1,0),Ha=new E(0,0,1),Ga={type:"added"},hd={type:"removed"},vn={type:"childadded",child:null},Sr={type:"childremoved",child:null};class St extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new E,t=new fi,i=new ds,n=new E(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new ze}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Ba,e)}rotateY(e){return this.rotateOnAxis(za,e)}rotateZ(e){return this.rotateOnAxis(Ha,e)}translateOnAxis(e,t){return Oa.copy(e).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ba,e)}translateY(e){return this.translateOnAxis(za,e)}translateZ(e){return this.translateOnAxis(Ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Zn,ws,this.up):_i.lookAt(ws,Zn,this.up),this.quaternion.setFromRotationMatrix(_i),n&&(_i.extractRotation(n.matrixWorld),gn.setFromRotationMatrix(_i),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ga),vn.child=e,this.dispatchEvent(vn),vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ga),vn.child=e,this.dispatchEvent(vn),vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),c=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}St.DEFAULT_UP=new E(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new E,yi=new E,wr=new E,Mi=new E,xn=new E,_n=new E,Va=new E,br=new E,Tr=new E,Er=new E,Ar=new ht,Cr=new ht,Rr=new ht;class Zt{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ni.subVectors(e,t),n.cross(ni);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ni.subVectors(n,t),yi.subVectors(i,t),wr.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(yi),l=ni.dot(wr),h=yi.dot(yi),c=yi.dot(wr),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(h*l-a*c)*u,g=(o*c-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return Ar.setScalar(0),Cr.setScalar(0),Rr.setScalar(0),Ar.fromBufferAttribute(e,t),Cr.fromBufferAttribute(e,i),Rr.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Ar,r.x),o.addScaledVector(Cr,r.y),o.addScaledVector(Rr,r.z),o}static isFrontFacing(e,t,i,n){return ni.subVectors(i,t),yi.subVectors(e,t),ni.cross(yi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),ni.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;xn.subVectors(n,i),_n.subVectors(r,i),br.subVectors(e,i);const l=xn.dot(br),h=_n.dot(br);if(l<=0&&h<=0)return t.copy(i);Tr.subVectors(e,n);const c=xn.dot(Tr),d=_n.dot(Tr);if(c>=0&&d<=c)return t.copy(n);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(xn,o);Er.subVectors(e,r);const f=xn.dot(Er),g=_n.dot(Er);if(g>=0&&f<=g)return t.copy(r);const v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(i).addScaledVector(_n,a);const m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return Va.subVectors(r,n),a=(d-c)/(d-c+(f-g)),t.copy(n).addScaledVector(Va,a);const p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(xn,o).addScaledVector(_n,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=et.workingColorSpace){if(e=Jo(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pr(o,r,e+1/3),this.g=Pr(o,r,e),this.b=Pr(o,r,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return et.fromWorkingColorSpace(Pt.copy(this),e),Math.round(At(Pt.r*255,0,255))*65536+Math.round(At(Pt.g*255,0,255))*256+Math.round(At(Pt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,n=Pt.g,r=Pt.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Nt){et.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,n=Pt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(bs);const i=os(ki.h,bs.h,t),n=os(ki.s,bs.s,t),r=os(ki.l,bs.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new We;We.NAMES=mh;let cd=0;class Xn extends Gn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Vn(),this.name="",this.blending=Pn,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=en,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Nn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cn,this.stencilZFail=cn,this.stencilZPass=cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eo&&(i.blendSrc=this.blendSrc),this.blendDst!==to&&(i.blendDst=this.blendDst),this.blendEquation!==en&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new E,Ts=new le;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ta,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class gh extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vh extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tt extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dd=0;const Kt=new at,Lr=new St,yn=new E,Ht=new ln,Jn=new ln,Et=new E;class Tt extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?vh:gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(i,3))}else{for(let i=0,n=t.count;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Ht.min,Jn.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,Jn.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(Jn.min),Ht.expandByPoint(Jn.max))}Ht.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Et.fromBufferAttribute(a,h),l&&(yn.fromBufferAttribute(e,h),Et.add(yn)),n=Math.max(n,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new E,l[P]=new E;const h=new E,c=new E,d=new E,u=new le,f=new le,g=new le,v=new E,m=new E;function p(P,b,M){h.fromBufferAttribute(i,P),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),c.sub(h),d.sub(h),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(L),a[P].add(v),a[b].add(v),a[M].add(v),l[P].add(m),l[b].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],L=M.start,G=M.count;for(let H=L,Y=L+G;H<Y;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new E,y=new E,I=new E,C=new E;function R(P){I.fromBufferAttribute(n,P),C.copy(I);const b=a[P];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),y.crossVectors(C,b);const L=y.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,L)}for(let P=0,b=x.length;P<b;++P){const M=x[P],L=M.start,G=M.count;for(let H=L,Y=L+G;H<Y;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new E,r=new E,o=new E,a=new E,l=new E,h=new E,c=new E,d=new E;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,r),d.subVectors(n,r),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,m),a.add(c),l.add(c),h.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,r),d.subVectors(n,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let p=0;p<c;p++)u[g++]=h[f++]}return new Jt(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],h=e(l,i);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,c=o.length;h<c;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new at,Yi=new Qo,Es=new Wn,Xa=new E,As=new E,Cs=new E,Rs=new E,Dr=new E,Ps=new E,ja=new E,Ls=new E;class W extends St{constructor(e=new Tt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Ps.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],d=r[l];c!==0&&(Dr.fromBufferAttribute(d,e),o?Ps.addScaledVector(Dr,c):Ps.addScaledVector(Dr.sub(t),c))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Es.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Es,Xa)===null||Yi.origin.distanceToSquared(Xa)>(e.far-e.near)**2))&&(Wa.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Wa),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,I=w;y<I;y+=3){const C=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);n=Ds(this,p,e,i,h,c,d,C,R,P),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);n=Ds(this,o,e,i,h,c,d,x,w,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,I=w;y<I;y+=3){const C=y,R=y+1,P=y+2;n=Ds(this,p,e,i,h,c,d,C,R,P),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,w=m+1,y=m+2;n=Ds(this,o,e,i,h,c,d,x,w,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ud(s,e,t,i,n,r,o,a){let l;if(e.side===Ot?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Wi,a),l===null)return null;Ls.copy(a),Ls.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Ls);return h<t.near||h>t.far?null:{distance:h,point:Ls.clone(),object:s}}function Ds(s,e,t,i,n,r,o,a,l,h){s.getVertexPosition(a,As),s.getVertexPosition(l,Cs),s.getVertexPosition(h,Rs);const c=ud(s,e,t,i,As,Cs,Rs,ja);if(c){const d=new E;Zt.getBarycoord(ja,As,Cs,Rs,d),n&&(c.uv=Zt.getInterpolatedAttribute(n,a,l,h,d,new le)),r&&(c.uv1=Zt.getInterpolatedAttribute(r,a,l,h,d,new le)),o&&(c.normal=Zt.getInterpolatedAttribute(o,a,l,h,d,new E),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:l,c:h,normal:new E,materialIndex:0};Zt.getNormal(As,Cs,Rs,u.normal),c.face=u,c.barycoord=d}return c}class De extends Tt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(d,2));function g(v,m,p,x,w,y,I,C,R,P,b){const M=y/R,L=I/P,G=y/2,H=I/2,Y=C/2,Q=R+1,q=P+1;let ie=0,j=0;const de=new E;for(let ve=0;ve<q;ve++){const Ae=ve*L-H;for(let Xe=0;Xe<Q;Xe++){const ct=Xe*M-G;de[v]=ct*x,de[m]=Ae*w,de[p]=Y,h.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[p]=C>0?1:-1,c.push(de.x,de.y,de.z),d.push(Xe/R),d.push(1-ve/P),ie+=1}}for(let ve=0;ve<P;ve++)for(let Ae=0;Ae<R;Ae++){const Xe=u+Ae+Q*ve,ct=u+Ae+Q*(ve+1),K=u+(Ae+1)+Q*(ve+1),oe=u+(Ae+1)+Q*ve;l.push(Xe,ct,oe),l.push(ct,K,oe),j+=6}a.addGroup(f,j,b),f+=j,u+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new De(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bn(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const i=Bn(s[t]);for(const n in i)e[n]=i[n]}return e}function fd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ir={clone:Bn,merge:It};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends Xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bn(e.uniforms),this.uniformsGroups=fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _h extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new E,qa=new le,Ya=new le;class Wt extends _h{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Dn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,qa,Ya),t.subVectors(Ya,qa)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mn=-90,Sn=1;class gd extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(Mn,Sn,e,t);n.layers=this.layers,this.add(n);const r=new Wt(Mn,Sn,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Mn,Sn,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Mn,Sn,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Mn,Sn,e,t);l.layers=this.layers,this.add(l);const h=new Wt(Mn,Sn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(const h of t)this.remove(h);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yh extends Lt{constructor(e,t,i,n,r,o,a,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:Un,super(e,t,i,n,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vd extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new yh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new De(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:Bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Ei});r.uniforms.tEquirect.value=t;const o=new W(n,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=oi),new gd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}const Ir=new E,xd=new E,_d=new ze;class Bi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Ir.subVectors(i,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ir),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_d.getNormalMatrix(e),n=this.coplanarPoint(Ir).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Wn,Is=new E;class ta{constructor(e=new Bi,t=new Bi,i=new Bi,n=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){const i=this.planes,n=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],x=n[13],w=n[14],y=n[15];if(i[0].setComponents(l-r,u-h,m-f,y-p).normalize(),i[1].setComponents(l+r,u+h,m+f,y+p).normalize(),i[2].setComponents(l+o,u+c,m+g,y+x).normalize(),i[3].setComponents(l-o,u-c,m-g,y-x).normalize(),i[4].setComponents(l-a,u-d,m-v,y-w).normalize(),t===Ti)i[5].setComponents(l+a,u+d,m+v,y+w).normalize();else if(t===er)i[5].setComponents(a,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Is.x=n.normal.x>0?e.max.x:e.min.x,Is.y=n.normal.y>0?e.max.y:e.min.y,Is.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yd(s){const e=new WeakMap;function t(a,l){const h=a.array,c=a.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){const c=l.array,d=l.updateRanges;if(s.bindBuffer(h,a),d.length===0)s.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:n,remove:r,update:o}}class ui extends Tt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),h=a+1,c=l+1,d=e/a,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const x=p*u-o;for(let w=0;w<h;w++){const y=w*d-r;g.push(y,-x,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const w=x+h*p,y=x+h*(p+1),I=x+1+h*(p+1),C=x+1+h*p;f.push(w,y,C),f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,Cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
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
}`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uu=`uniform bool receiveShadow;
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
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
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
#endif`,_u=`struct PhysicalMaterial {
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
}`,yu=`
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pu=`#if defined( USE_POINTS_UV )
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
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vu=`#ifdef USE_NORMALMAP
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
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$u=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ju=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,of=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
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
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sf=`uniform sampler2D t2D;
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
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
}`,Cf=`#if DEPTH_PACKING == 3200
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
}`,Rf=`#define DISTANCE
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
}`,Pf=`#define DISTANCE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,kf=`uniform vec3 diffuse;
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define LAMBERT
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define MATCAP
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
}`,Hf=`#define NORMAL
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
}`,Gf=`#define NORMAL
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
}`,Vf=`#define PHONG
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Yf=`#define TOON
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
}`,$f=`uniform float size;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Jf=`uniform vec3 color;
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
}`,Qf=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Md,alphahash_pars_fragment:Sd,alphamap_fragment:wd,alphamap_pars_fragment:bd,alphatest_fragment:Td,alphatest_pars_fragment:Ed,aomap_fragment:Ad,aomap_pars_fragment:Cd,batching_pars_vertex:Rd,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Id,iridescence_fragment:Nd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Bd,color_fragment:zd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:Xd,defaultnormal_vertex:jd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:$d,emissivemap_pars_fragment:Kd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:eu,envmap_pars_fragment:tu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:fu,envmap_vertex:nu,fog_vertex:su,fog_pars_vertex:ru,fog_fragment:ou,fog_pars_fragment:au,gradientmap_pars_fragment:lu,lightmap_pars_fragment:hu,lights_lambert_fragment:cu,lights_lambert_pars_fragment:du,lights_pars_begin:uu,lights_toon_fragment:pu,lights_toon_pars_fragment:mu,lights_phong_fragment:gu,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:_u,lights_fragment_begin:yu,lights_fragment_maps:Mu,lights_fragment_end:Su,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:Tu,logdepthbuf_vertex:Eu,map_fragment:Au,map_pars_fragment:Cu,map_particle_fragment:Ru,map_particle_pars_fragment:Pu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Du,morphinstance_vertex:Iu,morphcolor_vertex:Nu,morphnormal_vertex:Uu,morphtarget_pars_vertex:ku,morphtarget_vertex:Fu,normal_fragment_begin:Ou,normal_fragment_maps:Bu,normal_pars_fragment:zu,normal_pars_vertex:Hu,normal_vertex:Gu,normalmap_pars_fragment:Vu,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:qu,opaque_fragment:Yu,packing:$u,premultiplied_alpha_fragment:Ku,project_vertex:Zu,dithering_fragment:Ju,dithering_pars_fragment:Qu,roughnessmap_fragment:ef,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:of,skinbase_vertex:af,skinning_pars_vertex:lf,skinning_vertex:hf,skinnormal_vertex:cf,specularmap_fragment:df,specularmap_pars_fragment:uf,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:vf,uv_pars_vertex:xf,uv_vertex:_f,worldpos_vertex:yf,background_vert:Mf,background_frag:Sf,backgroundCube_vert:wf,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:Ef,depth_vert:Af,depth_frag:Cf,distanceRGBA_vert:Rf,distanceRGBA_frag:Pf,equirect_vert:Lf,equirect_frag:Df,linedashed_vert:If,linedashed_frag:Nf,meshbasic_vert:Uf,meshbasic_frag:kf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:Bf,meshmatcap_frag:zf,meshnormal_vert:Hf,meshnormal_frag:Gf,meshphong_vert:Vf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:jf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:$f,points_frag:Kf,shadow_vert:Zf,shadow_frag:Jf,sprite_vert:Qf,sprite_frag:ep},he={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ci={basic:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:It([he.common,he.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:It([he.lights,he.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ci.physical={uniforms:It([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ns={r:0,b:0,g:0},Ki=new fi,tp=new at;function ip(s,e,t,i,n,r,o){const a=new We(0);let l=r===!0?0:1,h,c,d=null,u=0,f=null;function g(x){let w=x.isScene===!0?x.background:null;return w&&w.isTexture&&(w=(x.backgroundBlurriness>0?t:e).get(w)),w}function v(x){let w=!1;const y=g(x);y===null?p(a,l):y&&y.isColor&&(p(y,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===or)?(c===void 0&&(c=new W(new De(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Bn(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ki.copy(w.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(Ki)),c.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,(d!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new W(new ui(2,2),new Ft({name:"BackgroundMaterial",uniforms:Bn(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=et.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function p(x,w){x.getRGB(Ns,xh(s)),i.buffers.color.setClear(Ns.r,Ns.g,Ns.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:m}}function np(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,o=!1;function a(M,L,G,H,Y){let Q=!1;const q=d(H,G,L);r!==q&&(r=q,h(r.object)),Q=f(M,H,G,Y),Q&&g(M,H,G,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(M,L,G,H),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return s.createVertexArray()}function h(M){return s.bindVertexArray(M)}function c(M){return s.deleteVertexArray(M)}function d(M,L,G){const H=G.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let Q=Y[L.id];Q===void 0&&(Q={},Y[L.id]=Q);let q=Q[H];return q===void 0&&(q=u(l()),Q[H]=q),q}function u(M){const L=[],G=[],H=[];for(let Y=0;Y<t;Y++)L[Y]=0,G[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,L,G,H){const Y=r.attributes,Q=L.attributes;let q=0;const ie=G.getAttributes();for(const j in ie)if(ie[j].location>=0){const ve=Y[j];let Ae=Q[j];if(Ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(M,L,G,H){const Y={},Q=L.attributes;let q=0;const ie=G.getAttributes();for(const j in ie)if(ie[j].location>=0){let ve=Q[j];ve===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),Y[j]=Ae,q++}r.attributes=Y,r.attributesNum=q,r.index=H}function v(){const M=r.newAttributes;for(let L=0,G=M.length;L<G;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const G=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;G[M]=1,H[M]===0&&(s.enableVertexAttribArray(M),H[M]=1),Y[M]!==L&&(s.vertexAttribDivisor(M,L),Y[M]=L)}function x(){const M=r.newAttributes,L=r.enabledAttributes;for(let G=0,H=L.length;G<H;G++)L[G]!==M[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function w(M,L,G,H,Y,Q,q){q===!0?s.vertexAttribIPointer(M,L,G,Y,Q):s.vertexAttribPointer(M,L,G,H,Y,Q)}function y(M,L,G,H){v();const Y=H.attributes,Q=G.getAttributes(),q=L.defaultAttributeValues;for(const ie in Q){const j=Q[ie];if(j.location>=0){let de=Y[ie];if(de===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const ve=de.normalized,Ae=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const ct=Xe.buffer,K=Xe.type,oe=Xe.bytesPerElement,be=K===s.INT||K===s.UNSIGNED_INT||de.gpuType===Xo;if(de.isInterleavedBufferAttribute){const ue=de.data,Le=ue.stride,ke=de.offset;if(ue.isInstancedInterleavedBuffer){for(let je=0;je<j.locationSize;je++)p(j.location+je,ue.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let je=0;je<j.locationSize;je++)m(j.location+je);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let je=0;je<j.locationSize;je++)w(j.location+je,Ae/j.locationSize,K,ve,Le*oe,(ke+Ae/j.locationSize*je)*oe,be)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)p(j.location+ue,de.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<j.locationSize;ue++)m(j.location+ue);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let ue=0;ue<j.locationSize;ue++)w(j.location+ue,Ae/j.locationSize,K,ve,Ae*oe,Ae/j.locationSize*ue*oe,be)}}else if(q!==void 0){const ve=q[ie];if(ve!==void 0)switch(ve.length){case 2:s.vertexAttrib2fv(j.location,ve);break;case 3:s.vertexAttrib3fv(j.location,ve);break;case 4:s.vertexAttrib4fv(j.location,ve);break;default:s.vertexAttrib1fv(j.location,ve)}}}}x()}function I(){P();for(const M in i){const L=i[M];for(const G in L){const H=L[G];for(const Y in H)c(H[Y].object),delete H[Y];delete L[G]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const G in L){const H=L[G];for(const Y in H)c(H[Y].object),delete H[Y];delete L[G]}delete i[M.id]}function R(M){for(const L in i){const G=i[L];if(G[M.id]===void 0)continue;const H=G[M.id];for(const Y in H)c(H[Y].object),delete H[Y];delete G[M.id]}}function P(){b(),o=!0,r!==n&&(r=n,h(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function sp(s,e,t){let i;function n(h){i=h}function r(h,c){s.drawArrays(i,h,c),t.update(c,i,1)}function o(h,c,d){d!==0&&(s.drawArraysInstanced(i,h,c,d),t.update(c,i,d))}function a(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];t.update(f,i,1)}function l(h,c,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=c[v]*u[v];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rp(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==ai&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ri&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:I,maxSamples:C}}function op(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new Bi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?c(null):h();else{const x=r?0:i,w=x*4;let y=p.clippingState||null;l.value=y,y=c(g,u,w,f);for(let I=0;I!==w;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==v;++w,y+=4)o.copy(d[w]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ap(s){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=Un:a===co&&(o.mapping=kn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===co)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new vd(l.height);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",n),t(h.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class ia extends _h{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cn=4,$a=[.125,.215,.35,.446,.526,.582],tn=20,Nr=new ia,Ka=new We;let Ur=null,kr=0,Fr=0,Or=!1;const Ji=(1+Math.sqrt(5))/2,wn=1/Ji,Za=[new E(-Ji,wn,0),new E(Ji,wn,0),new E(-wn,0,Ji),new E(wn,0,Ji),new E(0,Ji,-wn),new E(0,Ji,wn),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ur=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur,kr,Fr),this._renderer.xr.enabled=Or,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Un||e.mapping===kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Ai,format:ai,colorSpace:Hn,depthBuffer:!1},n=Qa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(r)),this._blurMaterial=hp(r,e,t)}return n}_compileMaterial(e){const t=new W(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,n){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(Ka),c.toneMapping=Vi,c.autoClear=!1;const f=new Vt({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new W(new De,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Ka),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const w=this._cubeSize;Us(n,x*w,p>2?w:0,w,w),c.setRenderTarget(n),v&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Un||e.mapping===kn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Nr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Za[(n-r-1)%Za.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new W(this._lodPlanes[n],h),u=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*tn-1),v=r/g,m=isFinite(r)?1+Math.floor(c*v):tn;m>tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tn}`);const p=[];let x=0;for(let R=0;R<tn;++R){const P=R/v,b=Math.exp(-P*P/2);p.push(b),R===0?x+=b:R<m&&(x+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const y=this._sizeLods[n],I=3*y*(n>w-Cn?n-w+Cn:0),C=4*(this._cubeSize-y);Us(t,I,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Nr)}}function lp(s){const e=[],t=[],i=[];let n=s;const r=s-Cn+1+$a.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Cn?l=$a[o-s+Cn-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),w=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,P=C>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(b,v*g*C),w.set(u,m*g*C);const M=[C,C,C,C,C,C];y.set(M,p*g*C)}const I=new Tt;I.setAttribute("position",new Jt(x,v)),I.setAttribute("uv",new Jt(w,m)),I.setAttribute("faceIndex",new Jt(y,p)),e.push(I),n>Cn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qa(s,e,t){const i=new li(s,e,t);return i.texture.mapping=or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function hp(s,e,t){const i=new Float32Array(tn),n=new E(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:na(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function el(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function tl(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function na(){return`

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
	`}function cp(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===ho||l===co,c=l===Un||l===kn;if(h||c){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ja(s)),d=h?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&n(f)?(t===null&&(t=new Ja(s)),d=h?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function n(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dp(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function up(s,e,t,i){const n={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete n[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function h(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let w=0,y=x.length;w<y;w+=3){const I=x[w+0],C=x[w+1],R=x[w+2];u.push(I,C,C,R,R,I)}}else if(g!==void 0){const x=g.array;v=g.version;for(let w=0,y=x.length/3-1;w<y;w+=3){const I=w+0,C=w+1,R=w+2;u.push(I,C,C,R,R,I)}}else return;const m=new(uh(u)?vh:gh)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function c(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function fp(s,e,t){let i;function n(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*o),t.update(f,i,1)}function h(u,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function c(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)h(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function pp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function mp(s,e,t){const i=new WeakMap,n=new ht;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let I=a.attributes.position.count*y,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*C*4*d),P=new ph(R,I,C,d);P.type=di,P.needsUpdate=!0;const b=y*4;for(let L=0;L<d;L++){const G=p[L],H=x[L],Y=w[L],Q=I*C*4*L;for(let q=0;q<G.count;q++){const ie=q*b;g===!0&&(n.fromBufferAttribute(G,q),R[Q+ie+0]=n.x,R[Q+ie+1]=n.y,R[Q+ie+2]=n.z,R[Q+ie+3]=0),v===!0&&(n.fromBufferAttribute(H,q),R[Q+ie+4]=n.x,R[Q+ie+5]=n.y,R[Q+ie+6]=n.z,R[Q+ie+7]=0),m===!0&&(n.fromBufferAttribute(Y,q),R[Q+ie+8]=n.x,R[Q+ie+9]=n.y,R[Q+ie+10]=n.z,R[Q+ie+11]=Y.itemSize===4?n.w:1)}}u={count:d,texture:P,size:new le(I,C)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function gp(s,e,t,i){let n=new WeakMap;function r(l){const h=i.render.frame,c=l.geometry,d=e.get(l,c);if(n.get(d)!==h&&(e.update(d),n.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function o(){n=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class Sh extends Lt{constructor(e,t,i,n,r,o,a,l,h,c=Ln){if(c!==Ln&&c!==On)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ln&&(i=rn),i===void 0&&c===On&&(i=Fn),super(null,n,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wh=new Lt,il=new Sh(1,1),bh=new ph,Th=new id,Eh=new yh,nl=[],sl=[],rl=new Float32Array(16),ol=new Float32Array(9),al=new Float32Array(4);function jn(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=nl[n];if(r===void 0&&(r=new Float32Array(n),nl[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function lr(s,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function vp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function _p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function Mp(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,i))return;al.set(i),s.uniformMatrix2fv(this.addr,!1,al),bt(t,i)}}function Sp(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,i))return;ol.set(i),s.uniformMatrix3fv(this.addr,!1,ol),bt(t,i)}}function wp(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(wt(t,i))return;rl.set(i),s.uniformMatrix4fv(this.addr,!1,rl),bt(t,i)}}function bp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function Ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function Ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function Cp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function Pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function Lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function Dp(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(il.compareFunction=dh,r=il):r=wh,t.setTexture2D(e||r,n)}function Ip(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Th,n)}function Np(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Eh,n)}function Up(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||bh,n)}function kp(s){switch(s){case 5126:return vp;case 35664:return xp;case 35665:return _p;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return wp;case 5124:case 35670:return bp;case 35667:case 35671:return Tp;case 35668:case 35672:return Ep;case 35669:case 35673:return Ap;case 5125:return Cp;case 36294:return Rp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Up}}function Fp(s,e){s.uniform1fv(this.addr,e)}function Op(s,e){const t=jn(e,this.size,2);s.uniform2fv(this.addr,t)}function Bp(s,e){const t=jn(e,this.size,3);s.uniform3fv(this.addr,t)}function zp(s,e){const t=jn(e,this.size,4);s.uniform4fv(this.addr,t)}function Hp(s,e){const t=jn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Gp(s,e){const t=jn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Vp(s,e){const t=jn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wp(s,e){s.uniform1iv(this.addr,e)}function Xp(s,e){s.uniform2iv(this.addr,e)}function jp(s,e){s.uniform3iv(this.addr,e)}function qp(s,e){s.uniform4iv(this.addr,e)}function Yp(s,e){s.uniform1uiv(this.addr,e)}function $p(s,e){s.uniform2uiv(this.addr,e)}function Kp(s,e){s.uniform3uiv(this.addr,e)}function Zp(s,e){s.uniform4uiv(this.addr,e)}function Jp(s,e,t){const i=this.cache,n=e.length,r=lr(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||wh,r[o])}function Qp(s,e,t){const i=this.cache,n=e.length,r=lr(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Th,r[o])}function em(s,e,t){const i=this.cache,n=e.length,r=lr(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Eh,r[o])}function tm(s,e,t){const i=this.cache,n=e.length,r=lr(t,n);wt(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||bh,r[o])}function im(s){switch(s){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return Hp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return jp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return $p;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}class nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kp(t.type)}}class sm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=im(t.type)}}class rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function ll(s,e){s.seq.push(e),s.map[e.id]=e}function om(s,e,t){const i=s.name,n=i.length;for(Br.lastIndex=0;;){const r=Br.exec(i),o=Br.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){ll(t,h===void 0?new nm(a,s,e):new sm(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new rm(a),ll(t,d)),t=d}}}class Zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);om(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function hl(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const am=37297;let lm=0;function hm(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const cl=new ze;function cm(s){et._getMatrix(cl,et.workingColorSpace,s);const e=`mat3( ${cl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case ar:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dl(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+hm(s.getShaderSource(e),o)}else return n}function dm(s,e){const t=cm(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function um(s,e){let t;switch(e){case pc:t="Linear";break;case mc:t="Reinhard";break;case gc:t="Cineon";break;case Ql:t="ACESFilmic";break;case xc:t="AgX";break;case _c:t="Neutral";break;case vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new E;function fm(){et.getLuminanceCoefficients(ks);const s=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function mm(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gm(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rs(s){return s!==""}function ul(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bo(s){return s.replace(vm,_m)}const xm=new Map;function _m(s,e){let t=Ge[e];if(t===void 0){const i=xm.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bo(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(s){return s.replace(ym,Mm)}function Mm(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ml(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function wm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Un:case kn:e="ENVMAP_TYPE_CUBE";break;case or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case kn:e="ENVMAP_MODE_REFRACTION";break}return e}function Tm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jl:e="ENVMAP_BLENDING_MULTIPLY";break;case uc:e="ENVMAP_BLENDING_MIX";break;case fc:e="ENVMAP_BLENDING_ADD";break}return e}function Em(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Am(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sm(t),h=wm(t),c=bm(t),d=Tm(t),u=Em(t),f=pm(t),g=mm(r),v=n.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Vi?um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,dm("linearToOutputTexel",t.outputColorSpace),fm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=Bo(o),o=ul(o,t),o=fl(o,t),a=Bo(a),a=ul(a,t),a=fl(a,t),o=pl(o),a=pl(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=x+m+o,y=x+p+a,I=hl(n,n.VERTEX_SHADER,w),C=hl(n,n.FRAGMENT_SHADER,y);n.attachShader(v,I),n.attachShader(v,C),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(L){if(s.debug.checkShaderErrors){const G=n.getProgramInfoLog(v).trim(),H=n.getShaderInfoLog(I).trim(),Y=n.getShaderInfoLog(C).trim();let Q=!0,q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,I,C);else{const ie=dl(n,I,"vertex"),j=dl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ie+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||Y==="")&&(q=!1);q&&(L.diagnostics={runnable:Q,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}n.deleteShader(I),n.deleteShader(C),P=new Zs(n,v),b=gm(n,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,am)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let Cm=0;class Rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pm(e),t.set(e,i)),i}}class Pm{constructor(e){this.id=Cm++,this.code=e,this.usedTimes=0}}function Lm(s,e,t,i,n,r,o){const a=new ea,l=new Rm,h=new Set,c=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,G,H){const Y=G.fog,Q=H.geometry,q=b.isMeshStandardMaterial?G.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),j=ie&&ie.mapping===or?ie.image.height:null,de=g[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ve=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Xe=0;Q.morphAttributes.position!==void 0&&(Xe=1),Q.morphAttributes.normal!==void 0&&(Xe=2),Q.morphAttributes.color!==void 0&&(Xe=3);let ct,K,oe,be;if(de){const ot=ci[de];ct=ot.vertexShader,K=ot.fragmentShader}else ct=b.vertexShader,K=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const ue=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),ke=H.isInstancedMesh===!0,je=H.isBatchedMesh===!0,vt=!!b.map,Ze=!!b.matcap,_t=!!ie,F=!!b.aoMap,Yt=!!b.lightMap,qe=!!b.bumpMap,Ye=!!b.normalMap,Re=!!b.displacementMap,ft=!!b.emissiveMap,Ce=!!b.metalnessMap,T=!!b.roughnessMap,_=b.anisotropy>0,O=b.clearcoat>0,Z=b.dispersion>0,te=b.iridescence>0,$=b.sheen>0,Te=b.transmission>0,fe=_&&!!b.anisotropyMap,xe=O&&!!b.clearcoatMap,Je=O&&!!b.clearcoatNormalMap,se=O&&!!b.clearcoatRoughnessMap,_e=te&&!!b.iridescenceMap,Pe=te&&!!b.iridescenceThicknessMap,Ie=$&&!!b.sheenColorMap,ye=$&&!!b.sheenRoughnessMap,$e=!!b.specularMap,He=!!b.specularColorMap,dt=!!b.specularIntensityMap,N=Te&&!!b.transmissionMap,ce=Te&&!!b.thicknessMap,X=!!b.gradientMap,J=!!b.alphaMap,ge=b.alphaTest>0,pe=!!b.alphaHash,Oe=!!b.extensions;let xt=Vi;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(xt=s.toneMapping);const Ct={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:K,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:je,batchingColor:je&&H._colorsTexture!==null,instancing:ke,instancingColor:ke&&H.instanceColor!==null,instancingMorph:ke&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Hn,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:Ze,envMap:_t,envMapMode:_t&&ie.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:Yt,bumpMap:qe,normalMap:Ye,displacementMap:u&&Re,emissiveMap:ft,normalMapObjectSpace:Ye&&b.normalMapType===wc,normalMapTangentSpace:Ye&&b.normalMapType===ch,metalnessMap:Ce,roughnessMap:T,anisotropy:_,anisotropyMap:fe,clearcoat:O,clearcoatMap:xe,clearcoatNormalMap:Je,clearcoatRoughnessMap:se,dispersion:Z,iridescence:te,iridescenceMap:_e,iridescenceThicknessMap:Pe,sheen:$,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:$e,specularColorMap:He,specularIntensityMap:dt,transmission:Te,transmissionMap:N,thicknessMap:ce,gradientMap:X,opaque:b.transparent===!1&&b.blending===Pn&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ge,alphaHash:pe,combine:b.combine,mapUv:vt&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:Yt&&v(b.lightMap.channel),bumpMapUv:qe&&v(b.bumpMap.channel),normalMapUv:Ye&&v(b.normalMap.channel),displacementMapUv:Re&&v(b.displacementMap.channel),emissiveMapUv:ft&&v(b.emissiveMap.channel),metalnessMapUv:Ce&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:xe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(b.sheenRoughnessMap.channel),specularMapUv:$e&&v(b.specularMap.channel),specularColorMapUv:He&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ce&&v(b.thicknessMap.channel),alphaMapUv:J&&v(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ye||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(vt||J),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Le,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xt,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=h.has(1),Ct.vertexUv2s=h.has(2),Ct.vertexUv3s=h.has(3),h.clear(),Ct}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(M,b),w(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const M=g[b.type];let L;if(M){const G=ci[M];L=ir.clone(G.uniforms)}else L=b.uniforms;return L}function I(b,M){let L;for(let G=0,H=c.length;G<H;G++){const Y=c[G];if(Y.cacheKey===M){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new Am(s,M,b,r),c.push(L)),L}function C(b){if(--b.usedTimes===0){const M=c.indexOf(b);c[M]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:P}}function Dm(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vl(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(d,u,f,g,v,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function h(d,u){t.length>1&&t.sort(d||Im),i.length>1&&i.sort(u||gl),n.length>1&&n.sort(u||gl)}function c(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:c,sort:h}}function Nm(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new vl,s.set(i,[o])):n>=r.length?(o=new vl,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Um(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new We};break;case"SpotLight":t={position:new E,direction:new E,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function km(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Fm=0;function Om(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bm(s){const e=new Um,t=km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new E);const n=new E,r=new at,o=new at;function a(h){let c=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,w=0,y=0,I=0,C=0,R=0;h.sort(Om);for(let b=0,M=h.length;b<M;b++){const L=h[b],G=L.color,H=L.intensity,Y=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=G.r*H,d+=G.g*H,u+=G.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],H);R++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,j=t.get(L);j.shadowIntensity=ie.intensity,j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=Q,i.directionalShadowMatrix[f]=L.shadow.matrix,x++}i.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(G).multiplyScalar(H),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[v]=q;const ie=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,ie.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=ie.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=ie.intensity,j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=Q,y++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(G).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const ie=L.shadow,j=t.get(L);j.shadowIntensity=ie.intensity,j.shadowBias=ie.bias,j.shadowNormalBias=ie.normalBias,j.shadowRadius=ie.radius,j.shadowMapSize=ie.mapSize,j.shadowCameraNear=ie.camera.near,j.shadowCameraFar=ie.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,w++}i.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==I||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=I,P.numLightProbes=R,i.version=Fm++)}function l(h,c){let d=0,u=0,f=0,g=0,v=0;const m=c.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const w=h[p];if(w.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),d++}else if(w.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function xl(s){const e=new Bm(s),t=[],i=[];function n(c){h.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zm(s){let e=new WeakMap;function t(n,r=0){const o=e.get(n);let a;return o===void 0?(a=new xl(s),e.set(n,[a])):r>=o.length?(a=new xl(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Hm extends Xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gm extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(s,e,t){let i=new ta;const n=new le,r=new le,o=new ht,a=new Hm({depthPacking:Sc}),l=new Gm,h={},c=t.maxTextureSize,d={[Wi]:Ot,[Ot]:Wi,[Xt]:Xt},u=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new W(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(C,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ei),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=p!==Si&&this.type===Si,Y=p===Si&&this.type!==Si;for(let Q=0,q=C.length;Q<q;Q++){const ie=C[Q],j=ie.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);const de=j.getFrameExtents();if(n.multiply(de),r.copy(j.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/de.x),n.x=r.x*de.x,j.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/de.y),n.y=r.y*de.y,j.mapSize.y=r.y)),j.map===null||H===!0||Y===!0){const Ae=this.type!==Si?{minFilter:jt,magFilter:jt}:{};j.map!==null&&j.map.dispose(),j.map=new li(n.x,n.y,Ae),j.map.texture.name=ie.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const ve=j.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const Xe=j.getViewport(Ae);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),G.viewport(o),j.updateMatrices(ie,Ae),i=j.getFrustum(),y(R,P,j.camera,ie,this.type)}j.isPointLightShadow!==!0&&this.type===Si&&x(j,P),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,L)};function x(C,R){const P=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new li(n.x,n.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,P,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,P,f,v,null)}function w(C,R,P,b){let M=null;const L=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=M.uuid,H=R.uuid;let Y=h[G];Y===void 0&&(Y={},h[G]=Y);let Q=Y[H];Q===void 0&&(Q=M.clone(),Y[H]=Q,R.addEventListener("dispose",I)),M=Q}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Si?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=P}return M}function y(C,R,P,b,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const H=e.update(C),Y=C.material;if(Array.isArray(Y)){const Q=H.groups;for(let q=0,ie=Q.length;q<ie;q++){const j=Q[q],de=Y[j.materialIndex];if(de&&de.visible){const ve=w(C,de,b,M);C.onBeforeShadow(s,C,R,P,H,ve,j),s.renderBufferDirect(P,null,H,ve,C,j),C.onAfterShadow(s,C,R,P,H,ve,j)}}}else if(Y.visible){const Q=w(C,Y,b,M);C.onBeforeShadow(s,C,R,P,H,Q,null),s.renderBufferDirect(P,null,H,Q,C,null),C.onAfterShadow(s,C,R,P,H,Q,null)}}const G=C.children;for(let H=0,Y=G.length;H<Y;H++)y(G[H],R,P,b,M)}function I(C){C.target.removeEventListener("dispose",I);for(const P in h){const b=h[P],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const jm={[io]:no,[so]:ao,[ro]:lo,[Nn]:oo,[no]:io,[ao]:so,[lo]:ro,[oo]:Nn};function qm(s,e){function t(){let N=!1;const ce=new ht;let X=null;const J=new ht(0,0,0,0);return{setMask:function(ge){X!==ge&&!N&&(s.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){N=ge},setClear:function(ge,pe,Oe,xt,Ct){Ct===!0&&(ge*=xt,pe*=xt,Oe*=xt),ce.set(ge,pe,Oe,xt),J.equals(ce)===!1&&(s.clearColor(ge,pe,Oe,xt),J.copy(ce))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,X=null,J=null,ge=null;return{setReversed:function(pe){if(ce!==pe){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const xt=ge;ge=null,this.setClear(xt)}ce=pe},getReversed:function(){return ce},setTest:function(pe){pe?ue(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(pe){X!==pe&&!N&&(s.depthMask(pe),X=pe)},setFunc:function(pe){if(ce&&(pe=jm[pe]),J!==pe){switch(pe){case io:s.depthFunc(s.NEVER);break;case no:s.depthFunc(s.ALWAYS);break;case so:s.depthFunc(s.LESS);break;case Nn:s.depthFunc(s.LEQUAL);break;case ro:s.depthFunc(s.EQUAL);break;case oo:s.depthFunc(s.GEQUAL);break;case ao:s.depthFunc(s.GREATER);break;case lo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=pe}},setLocked:function(pe){N=pe},setClear:function(pe){ge!==pe&&(ce&&(pe=1-pe),s.clearDepth(pe),ge=pe)},reset:function(){N=!1,X=null,J=null,ge=null,ce=!1}}}function n(){let N=!1,ce=null,X=null,J=null,ge=null,pe=null,Oe=null,xt=null,Ct=null;return{setTest:function(ot){N||(ot?ue(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(ot){ce!==ot&&!N&&(s.stencilMask(ot),ce=ot)},setFunc:function(ot,Qt,mi){(X!==ot||J!==Qt||ge!==mi)&&(s.stencilFunc(ot,Qt,mi),X=ot,J=Qt,ge=mi)},setOp:function(ot,Qt,mi){(pe!==ot||Oe!==Qt||xt!==mi)&&(s.stencilOp(ot,Qt,mi),pe=ot,Oe=Qt,xt=mi)},setLocked:function(ot){N=ot},setClear:function(ot){Ct!==ot&&(s.clearStencil(ot),Ct=ot)},reset:function(){N=!1,ce=null,X=null,J=null,ge=null,pe=null,Oe=null,xt=null,Ct=null}}}const r=new t,o=new i,a=new n,l=new WeakMap,h=new WeakMap;let c={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,w=null,y=null,I=null,C=null,R=new We(0,0,0),P=0,b=!1,M=null,L=null,G=null,H=null,Y=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ie=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=ie>=1):j.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=ie>=2);let de=null,ve={};const Ae=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),ct=new ht().fromArray(Ae),K=new ht().fromArray(Xe);function oe(N,ce,X,J){const ge=new Uint8Array(4),pe=s.createTexture();s.bindTexture(N,pe),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<X;Oe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(ce+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return pe}const be={};be[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(s.DEPTH_TEST),o.setFunc(Nn),qe(!1),Ye(Ma),ue(s.CULL_FACE),F(Ei);function ue(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function Le(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function ke(N,ce){return d[N]!==ce?(s.bindFramebuffer(N,ce),d[N]=ce,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function je(N,ce){let X=f,J=!1;if(N){X=u.get(ce),X===void 0&&(X=[],u.set(ce,X));const ge=N.textures;if(X.length!==ge.length||X[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Oe=ge.length;pe<Oe;pe++)X[pe]=s.COLOR_ATTACHMENT0+pe;X.length=ge.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function vt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Ze={[en]:s.FUNC_ADD,[$h]:s.FUNC_SUBTRACT,[Kh]:s.FUNC_REVERSE_SUBTRACT};Ze[Zh]=s.MIN,Ze[Jh]=s.MAX;const _t={[Qh]:s.ZERO,[ec]:s.ONE,[tc]:s.SRC_COLOR,[eo]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[rc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[ic]:s.ONE_MINUS_SRC_COLOR,[to]:s.ONE_MINUS_SRC_ALPHA,[oc]:s.ONE_MINUS_DST_COLOR,[sc]:s.ONE_MINUS_DST_ALPHA,[lc]:s.CONSTANT_COLOR,[hc]:s.ONE_MINUS_CONSTANT_COLOR,[cc]:s.CONSTANT_ALPHA,[dc]:s.ONE_MINUS_CONSTANT_ALPHA};function F(N,ce,X,J,ge,pe,Oe,xt,Ct,ot){if(N===Ei){v===!0&&(Le(s.BLEND),v=!1);return}if(v===!1&&(ue(s.BLEND),v=!0),N!==Yh){if(N!==m||ot!==b){if((p!==en||y!==en)&&(s.blendEquation(s.FUNC_ADD),p=en,y=en),ot)switch(N){case Pn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qr:s.blendFunc(s.ONE,s.ONE);break;case Sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Pn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,w=null,I=null,C=null,R.set(0,0,0),P=0,m=N,b=ot}return}ge=ge||ce,pe=pe||X,Oe=Oe||J,(ce!==p||ge!==y)&&(s.blendEquationSeparate(Ze[ce],Ze[ge]),p=ce,y=ge),(X!==x||J!==w||pe!==I||Oe!==C)&&(s.blendFuncSeparate(_t[X],_t[J],_t[pe],_t[Oe]),x=X,w=J,I=pe,C=Oe),(xt.equals(R)===!1||Ct!==P)&&(s.blendColor(xt.r,xt.g,xt.b,Ct),R.copy(xt),P=Ct),m=N,b=!1}function Yt(N,ce){N.side===Xt?Le(s.CULL_FACE):ue(s.CULL_FACE);let X=N.side===Ot;ce&&(X=!X),qe(X),N.blending===Pn&&N.transparent===!1?F(Ei):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ft(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function Ye(N){N!==Wh?(ue(s.CULL_FACE),N!==L&&(N===Ma?s.cullFace(s.BACK):N===Xh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),L=N}function Re(N){N!==G&&(q&&s.lineWidth(N),G=N)}function ft(N,ce,X){N?(ue(s.POLYGON_OFFSET_FILL),(H!==ce||Y!==X)&&(s.polygonOffset(ce,X),H=ce,Y=X)):Le(s.POLYGON_OFFSET_FILL)}function Ce(N){N?ue(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function T(N){N===void 0&&(N=s.TEXTURE0+Q-1),de!==N&&(s.activeTexture(N),de=N)}function _(N,ce,X){X===void 0&&(de===null?X=s.TEXTURE0+Q-1:X=de);let J=ve[X];J===void 0&&(J={type:void 0,texture:void 0},ve[X]=J),(J.type!==N||J.texture!==ce)&&(de!==X&&(s.activeTexture(X),de=X),s.bindTexture(N,ce||be[N]),J.type=N,J.texture=ce)}function O(){const N=ve[de];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(N){ct.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function ye(N){K.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function $e(N,ce){let X=h.get(ce);X===void 0&&(X=new WeakMap,h.set(ce,X));let J=X.get(N);J===void 0&&(J=s.getUniformBlockIndex(ce,N.name),X.set(N,J))}function He(N,ce){const J=h.get(ce).get(N);l.get(ce)!==J&&(s.uniformBlockBinding(ce,J,N.__bindingPointIndex),l.set(ce,J))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},de=null,ve={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,w=null,y=null,I=null,C=null,R=new We(0,0,0),P=0,b=!1,M=null,L=null,G=null,H=null,Y=null,ct.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Le,bindFramebuffer:ke,drawBuffers:je,useProgram:vt,setBlending:F,setMaterial:Yt,setFlipSided:qe,setCullFace:Ye,setLineWidth:Re,setPolygonOffset:ft,setScissorTest:Ce,activeTexture:T,bindTexture:_,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:_e,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:He,texStorage2D:Je,texStorage3D:se,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ie,viewport:ye,reset:dt}}function _l(s,e,t,i){const n=Ym(i);switch(t){case sh:return s*e;case oh:return s*e;case ah:return s*e*2;case Yo:return s*e/n.components*n.byteLength;case $o:return s*e/n.components*n.byteLength;case lh:return s*e*2/n.components*n.byteLength;case Ko:return s*e*2/n.components*n.byteLength;case rh:return s*e*3/n.components*n.byteLength;case ai:return s*e*4/n.components*n.byteLength;case Zo:return s*e*4/n.components*n.byteLength;case js:case qs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ys:case $s:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(s,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(s,8)*Math.max(e,8)/2;case vo:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case So:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case To:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ks:case No:case Uo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hh:case ko:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fo:case Oo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(s){switch(s){case Ri:case th:return{byteLength:1,components:1};case hs:case ih:case Ai:return{byteLength:2,components:1};case jo:case qo:return{byteLength:2,components:4};case rn:case Xo:case di:return{byteLength:4,components:1};case nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function $m(s,e,t,i,n,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):tr("canvas")}function v(T,_,O){let Z=1;const te=Ce(T);if((te.width>O||te.height>O)&&(Z=O/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Z*te.width),Te=Math.floor(Z*te.height);d===void 0&&(d=g($,Te));const fe=_?g($,Te):d;return fe.width=$,fe.height=Te,fe.getContext("2d").drawImage(T,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Te+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(T,_,O,Z,te=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=_;if(_===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),_===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),_===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),_===s.RGBA){const Te=te?ar:et.getTransfer(Z);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=Te===lt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(T,_){let O;return T?_===null||_===rn||_===Fn?O=s.DEPTH24_STENCIL8:_===di?O=s.DEPTH32F_STENCIL8:_===hs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===rn||_===Fn?O=s.DEPTH_COMPONENT24:_===di?O=s.DEPTH_COMPONENT32F:_===hs&&(O=s.DEPTH_COMPONENT16),O}function I(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==oi?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){const _=T.target;_.removeEventListener("dispose",C),P(_),_.isVideoTexture&&c.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),M(_)}function P(T){const _=i.get(T);if(_.__webglInit===void 0)return;const O=T.source,Z=u.get(O);if(Z){const te=Z[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(T),Object.keys(Z).length===0&&u.delete(O)}i.remove(T)}function b(T){const _=i.get(T);s.deleteTexture(_.__webglTexture);const O=T.source,Z=u.get(O);delete Z[_.__cacheKey],o.memory.textures--}function M(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let te=0;te<_.__webglFramebuffer[Z].length;te++)s.deleteFramebuffer(_.__webglFramebuffer[Z][te]);else s.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[Z]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=T.textures;for(let Z=0,te=O.length;Z<te;Z++){const $=i.get(O[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(T)}let L=0;function G(){L=0}function H(){const T=L;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),L+=1,T}function Y(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Q(T,_){const O=i.get(T);if(T.isVideoTexture&&Re(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,T,_);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function q(T,_){const O=i.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function ie(T,_){const O=i.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,_);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function j(T,_){const O=i.get(T);if(T.version>0&&O.__version!==T.version){oe(O,T,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const de={[Qs]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[uo]:s.MIRRORED_REPEAT},ve={[jt]:s.NEAREST,[yc]:s.NEAREST_MIPMAP_NEAREST,[gs]:s.NEAREST_MIPMAP_LINEAR,[oi]:s.LINEAR,[fr]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},Ae={[bc]:s.NEVER,[Pc]:s.ALWAYS,[Tc]:s.LESS,[dh]:s.LEQUAL,[Ec]:s.EQUAL,[Rc]:s.GEQUAL,[Ac]:s.GREATER,[Cc]:s.NOTEQUAL};function Xe(T,_){if(_.type===di&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===oi||_.magFilter===fr||_.magFilter===gs||_.magFilter===Hi||_.minFilter===oi||_.minFilter===fr||_.minFilter===gs||_.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,de[_.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,de[_.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,de[_.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ve[_.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==gs&&_.minFilter!==Hi||_.type===di&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ct(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));const Z=_.source;let te=u.get(Z);te===void 0&&(te={},u.set(Z,te));const $=Y(_);if($!==T.__cacheKey){te[$]===void 0&&(te[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[$].usedTimes++;const Te=te[T.__cacheKey];Te!==void 0&&(te[T.__cacheKey].usedTimes--,Te.usedTimes===0&&b(_)),T.__cacheKey=$,T.__webglTexture=te[$].texture}return O}function K(T,_,O){let Z=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=s.TEXTURE_3D);const te=ct(T,_),$=_.source;t.bindTexture(Z,T.__webglTexture,s.TEXTURE0+O);const Te=i.get($);if($.version!==Te.__version||te===!0){t.activeTexture(s.TEXTURE0+O);const fe=et.getPrimaries(et.workingColorSpace),xe=_.colorSpace===wi?null:et.getPrimaries(_.colorSpace),Je=_.colorSpace===wi||fe===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let se=v(_.image,!1,n.maxTextureSize);se=ft(_,se);const _e=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type);let Ie=w(_.internalFormat,_e,Pe,_.colorSpace,_.isVideoTexture);Xe(Z,_);let ye;const $e=_.mipmaps,He=_.isVideoTexture!==!0,dt=Te.__version===void 0||te===!0,N=$.dataReady,ce=I(_,se);if(_.isDepthTexture)Ie=y(_.format===On,_.type),dt&&(He?t.texStorage2D(s.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Pe,null));else if(_.isDataTexture)if($e.length>0){He&&dt&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,$e[0].width,$e[0].height);for(let X=0,J=$e.length;X<J;X++)ye=$e[X],He?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,_e,Pe,ye.data):t.texImage2D(s.TEXTURE_2D,X,Ie,ye.width,ye.height,0,_e,Pe,ye.data);_.generateMipmaps=!1}else He?(dt&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,se.width,se.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,_e,Pe,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,se.width,se.height,0,_e,Pe,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,$e[0].width,$e[0].height,se.depth);for(let X=0,J=$e.length;X<J;X++)if(ye=$e[X],_.format!==ai)if(_e!==null)if(He){if(N)if(_.layerUpdates.size>0){const ge=_l(ye.width,ye.height,_.format,_.type);for(const pe of _.layerUpdates){const Oe=ye.data.subarray(pe*ge/ye.data.BYTES_PER_ELEMENT,(pe+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,pe,ye.width,ye.height,1,_e,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,_e,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ie,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,_e,Pe,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Ie,ye.width,ye.height,se.depth,0,_e,Pe,ye.data)}else{He&&dt&&t.texStorage2D(s.TEXTURE_2D,ce,Ie,$e[0].width,$e[0].height);for(let X=0,J=$e.length;X<J;X++)ye=$e[X],_.format!==ai?_e!==null?He?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,_e,Pe,ye.data):t.texImage2D(s.TEXTURE_2D,X,Ie,ye.width,ye.height,0,_e,Pe,ye.data)}else if(_.isDataArrayTexture)if(He){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Ie,se.width,se.height,se.depth),N)if(_.layerUpdates.size>0){const X=_l(se.width,se.height,_.format,_.type);for(const J of _.layerUpdates){const ge=se.data.subarray(J*X/se.data.BYTES_PER_ELEMENT,(J+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,_e,Pe,ge)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Pe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,_e,Pe,se.data);else if(_.isData3DTexture)He?(dt&&t.texStorage3D(s.TEXTURE_3D,ce,Ie,se.width,se.height,se.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Pe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,_e,Pe,se.data);else if(_.isFramebufferTexture){if(dt)if(He)t.texStorage2D(s.TEXTURE_2D,ce,Ie,se.width,se.height);else{let X=se.width,J=se.height;for(let ge=0;ge<ce;ge++)t.texImage2D(s.TEXTURE_2D,ge,Ie,X,J,0,_e,Pe,null),X>>=1,J>>=1}}else if($e.length>0){if(He&&dt){const X=Ce($e[0]);t.texStorage2D(s.TEXTURE_2D,ce,Ie,X.width,X.height)}for(let X=0,J=$e.length;X<J;X++)ye=$e[X],He?N&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,_e,Pe,ye):t.texImage2D(s.TEXTURE_2D,X,Ie,_e,Pe,ye);_.generateMipmaps=!1}else if(He){if(dt){const X=Ce(se);t.texStorage2D(s.TEXTURE_2D,ce,Ie,X.width,X.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,Pe,se)}else t.texImage2D(s.TEXTURE_2D,0,Ie,_e,Pe,se);m(_)&&p(Z),Te.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function oe(T,_,O){if(_.image.length!==6)return;const Z=ct(T,_),te=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const $=i.get(te);if(te.version!==$.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const Te=et.getPrimaries(et.workingColorSpace),fe=_.colorSpace===wi?null:et.getPrimaries(_.colorSpace),xe=_.colorSpace===wi||Te===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Je=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Je&&!se?_e[J]=v(_.image[J],!0,n.maxCubemapSize):_e[J]=se?_.image[J].image:_.image[J],_e[J]=ft(_,_e[J]);const Pe=_e[0],Ie=r.convert(_.format,_.colorSpace),ye=r.convert(_.type),$e=w(_.internalFormat,Ie,ye,_.colorSpace),He=_.isVideoTexture!==!0,dt=$.__version===void 0||Z===!0,N=te.dataReady;let ce=I(_,Pe);Xe(s.TEXTURE_CUBE_MAP,_);let X;if(Je){He&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,$e,Pe.width,Pe.height);for(let J=0;J<6;J++){X=_e[J].mipmaps;for(let ge=0;ge<X.length;ge++){const pe=X[ge];_.format!==ai?Ie!==null?He?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,Ie,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,Ie,ye,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,$e,pe.width,pe.height,0,Ie,ye,pe.data)}}}else{if(X=_.mipmaps,He&&dt){X.length>0&&ce++;const J=Ce(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,$e,J.width,J.height)}for(let J=0;J<6;J++)if(se){He?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ie,ye,_e[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,_e[J].width,_e[J].height,0,Ie,ye,_e[J].data);for(let ge=0;ge<X.length;ge++){const Oe=X[ge].image[J].image;He?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Oe.width,Oe.height,Ie,ye,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,$e,Oe.width,Oe.height,0,Ie,ye,Oe.data)}}else{He?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ye,_e[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,Ie,ye,_e[J]);for(let ge=0;ge<X.length;ge++){const pe=X[ge];He?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Ie,ye,pe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,$e,Ie,ye,pe.image[J])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),$.__version=te.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function be(T,_,O,Z,te,$){const Te=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),xe=w(O.internalFormat,Te,fe,O.colorSpace),Je=i.get(_),se=i.get(O);if(se.__renderTarget=_,!Je.__hasExternalTextures){const _e=Math.max(1,_.width>>$),Pe=Math.max(1,_.height>>$);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,$,xe,_e,Pe,_.depth,0,Te,fe,null):t.texImage2D(te,$,xe,_e,Pe,0,Te,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Ye(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,te,se.__webglTexture,0,qe(_)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,te,se.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(T,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,$=y(_.stencilBuffer,te),Te=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=qe(_);Ye(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,$,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,T)}else{const Z=_.textures;for(let te=0;te<Z.length;te++){const $=Z[te],Te=r.convert($.format,$.colorSpace),fe=r.convert($.type),xe=w($.internalFormat,Te,fe,$.colorSpace),Je=qe(_);O&&Ye(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,xe,_.width,_.height):Ye(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,xe,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,xe,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const te=Z.__webglTexture,$=qe(_);if(_.depthTexture.format===Ln)Ye(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(_.depthTexture.format===On)Ye(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ke(T){const _=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Le(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=s.createRenderbuffer(),ue(_.__webglDepthbuffer[Z],T,!1);else{const te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ue(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(T,_,O){const Z=i.get(T);_!==void 0&&be(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ke(T)}function vt(T){const _=T.texture,O=i.get(T),Z=i.get(_);T.addEventListener("dispose",R);const te=T.textures,$=T.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=_.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let xe=0;xe<_.mipmaps.length;xe++)O.__webglFramebuffer[fe][xe]=s.createFramebuffer()}else O.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)O.__webglFramebuffer[fe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Te)for(let fe=0,xe=te.length;fe<xe;fe++){const Je=i.get(te[fe]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Ye(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const xe=te[fe];O.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Je=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),_e=w(xe.internalFormat,Je,se,xe.colorSpace,T.isXRRenderTarget===!0),Pe=qe(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,_e,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)be(O.__webglFramebuffer[fe][xe],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else be(O.__webglFramebuffer[fe],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let fe=0,xe=te.length;fe<xe;fe++){const Je=te[fe],se=i.get(Je);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),Xe(s.TEXTURE_2D,Je),be(O.__webglFramebuffer,T,Je,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(Je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Xe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)be(O.__webglFramebuffer[xe],T,_,s.COLOR_ATTACHMENT0,fe,xe);else be(O.__webglFramebuffer,T,_,s.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}T.depthBuffer&&ke(T)}function Ze(T){const _=T.textures;for(let O=0,Z=_.length;O<Z;O++){const te=_[O];if(m(te)){const $=x(T),Te=i.get(te).__webglTexture;t.bindTexture($,Te),p($),t.unbindTexture()}}}const _t=[],F=[];function Yt(T){if(T.samples>0){if(Ye(T)===!1){const _=T.textures,O=T.width,Z=T.height;let te=s.COLOR_BUFFER_BIT;const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=i.get(T),fe=_.length>1;if(fe)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Je=i.get(_[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,te,s.NEAREST),l===!0&&(_t.length=0,F.length=0,_t.push(s.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_t.push($),F.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);const Je=i.get(_[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function qe(T){return Math.min(n.maxSamples,T.samples)}function Ye(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Re(T){const _=o.render.frame;c.get(T)!==_&&(c.set(T,_),T.update())}function ft(T,_){const O=T.colorSpace,Z=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Hn&&O!==wi&&(et.getTransfer(O)===lt?(Z!==ai||te!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=j,this.rebindTextures=je,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function Km(s,e){function t(i,n=wi){let r;const o=et.getTransfer(n);if(i===Ri)return s.UNSIGNED_BYTE;if(i===jo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===qo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return s.BYTE;if(i===ih)return s.SHORT;if(i===hs)return s.UNSIGNED_SHORT;if(i===Xo)return s.INT;if(i===rn)return s.UNSIGNED_INT;if(i===di)return s.FLOAT;if(i===Ai)return s.HALF_FLOAT;if(i===sh)return s.ALPHA;if(i===rh)return s.RGB;if(i===ai)return s.RGBA;if(i===oh)return s.LUMINANCE;if(i===ah)return s.LUMINANCE_ALPHA;if(i===Ln)return s.DEPTH_COMPONENT;if(i===On)return s.DEPTH_STENCIL;if(i===Yo)return s.RED;if(i===$o)return s.RED_INTEGER;if(i===lh)return s.RG;if(i===Ko)return s.RG_INTEGER;if(i===Zo)return s.RGBA_INTEGER;if(i===js||i===qs||i===Ys||i===$s)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vo||i===xo||i===_o)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vo||i===xo)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_o)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===Mo||i===So||i===wo||i===bo||i===To||i===Eo||i===Ao||i===Co||i===Ro||i===Po||i===Lo||i===Do||i===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===So)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===To)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ao)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Co)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ro)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Po)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lo)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Do)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Io)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ks||i===No||i===Uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ks)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hh||i===ko||i===Fo||i===Oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fn?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class Zm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Lt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ft({vertexShader:Qm,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ig extends Gn{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null;const v=new tg,m=t.getContextAttributes();let p=null,x=null;const w=[],y=[],I=new le;let C=null;const R=new Wt;R.viewport=new ht;const P=new Wt;P.viewport=new ht;const b=[R,P],M=new Zm;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=w[K];return oe===void 0&&(oe=new zr,w[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=w[K];return oe===void 0&&(oe=new zr,w[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=w[K];return oe===void 0&&(oe=new zr,w[K]=oe),oe.getHandSpace()};function H(K){const oe=y.indexOf(K.inputSource);if(oe===-1)return;const be=w[oe];be!==void 0&&(be.update(K.inputSource,K.frame,h||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",Q);for(let K=0;K<w.length;K++){const oe=y[K];oe!==null&&(y[K]=null,w[K].disconnect(oe))}L=null,G=null,v.reset(),e.setRenderTarget(p),f=null,u=null,d=null,n=null,x=null,ct.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),n.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,oe),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new li(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,be=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?On:Ln,be=m.stencil?Fn:rn);const Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Le),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new li(u.textureWidth,u.textureHeight,{format:ai,type:Ri,depthTexture:new Sh(u.textureWidth,u.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(a),ct.setContext(n),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(K){for(let oe=0;oe<K.removed.length;oe++){const be=K.removed[oe],ue=y.indexOf(be);ue>=0&&(y[ue]=null,w[ue].disconnect(be))}for(let oe=0;oe<K.added.length;oe++){const be=K.added[oe];let ue=y.indexOf(be);if(ue===-1){for(let ke=0;ke<w.length;ke++)if(ke>=y.length){y.push(be),ue=ke;break}else if(y[ke]===null){y[ke]=be,ue=ke;break}if(ue===-1)break}const Le=w[ue];Le&&Le.connect(be)}}const q=new E,ie=new E;function j(K,oe,be){q.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);const ue=q.distanceTo(ie),Le=oe.projectionMatrix.elements,ke=be.projectionMatrix.elements,je=Le[14]/(Le[10]-1),vt=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],_t=(Le[9]-1)/Le[5],F=(Le[8]-1)/Le[0],Yt=(ke[8]+1)/ke[0],qe=je*F,Ye=je*Yt,Re=ue/(-F+Yt),ft=Re*-F;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ft),K.translateZ(Re),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ce=je+Re,T=vt+Re,_=qe-ft,O=Ye+(ue-ft),Z=Ze*vt/T*Ce,te=_t*vt/T*Ce;K.projectionMatrix.makePerspective(_,O,Z,te,Ce,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let oe=K.near,be=K.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(be=v.depthFar)),M.near=P.near=R.near=oe,M.far=P.far=R.far=be,(L!==M.near||G!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,G=M.far),R.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;const ue=K.parent,Le=M.cameras;de(M,ue);for(let ke=0;ke<Le.length;ke++)de(Le[ke],ue);Le.length===2?j(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),ve(K,M,ue)};function ve(K,oe,be){be===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ae=null;function Xe(K,oe){if(c=oe.getViewerPose(h||o),g=oe,c!==null){const be=c.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ue=!1;be.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let ke=0;ke<be.length;ke++){const je=be[ke];let vt=null;if(f!==null)vt=f.getViewport(je);else{const _t=d.getViewSubImage(u,je);vt=_t.viewport,ke===0&&(e.setRenderTargetTextures(x,_t.colorTexture,u.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(x))}let Ze=b[ke];Ze===void 0&&(Ze=new Wt,Ze.layers.enable(ke),Ze.viewport=new ht,b[ke]=Ze),Ze.matrix.fromArray(je.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(je.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(vt.x,vt.y,vt.width,vt.height),ke===0&&(M.matrix.copy(Ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Ze)}const Le=n.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ke=d.getDepthInformation(be[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,n.renderState)}}for(let be=0;be<w.length;be++){const ue=y[be],Le=w[be];ue!==null&&Le!==void 0&&Le.update(ue,oe,h||o)}Ae&&Ae(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const ct=new Mh;ct.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Ae=K},this.dispose=function(){}}}const Zi=new fi,ng=new at;function sg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,xh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,w):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),w=x.envMap,y=x.envMapRotation;w&&(m.envMap.value=w,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Zi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function rg(s,e,t,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const y=w.program;i.uniformBlockBinding(x,y)}function h(x,w){let y=n[x.id];y===void 0&&(g(x),y=c(x),n[x.id]=y,x.addEventListener("dispose",m));const I=w.program;i.updateUBOMapping(x,I);const C=e.render.frame;r[x.id]!==C&&(u(x),r[x.id]=C)}function c(x){const w=d();x.__bindingPointIndex=w;const y=s.createBuffer(),I=x.__size,C=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=n[x.id],y=x.uniforms,I=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,R=y.length;C<R;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(f(L,C,b,I)===!0){const G=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Q=0;Q<H.length;Q++){const q=H[Q],ie=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,G+Y,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,w,y,I){const C=x.value,R=w+"_"+y;if(I[R]===void 0)return typeof C=="number"||typeof C=="boolean"?I[R]=C:I[R]=C.clone(),!0;{const P=I[R];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return I[R]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(x){const w=x.uniforms;let y=0;const I=16;for(let R=0,P=w.length;R<P;R++){const b=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,L=b.length;M<L;M++){const G=b[M],H=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,Q=H.length;Y<Q;Y++){const q=H[Y],ie=v(q),j=y%I,de=j%ie.boundary,ve=j+de;y+=de,ve!==0&&I-ve<ie.storage&&(y+=I-ve),G.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=ie.storage}}}const C=y%I;return C>0&&(y+=I-C),x.__size=y,x.__cache={},this}function v(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function m(x){const w=x.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function p(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},r={}}return{bind:l,update:h,dispose:p}}class og{constructor(e={}){const{canvas:t=Yc(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Vi,this.toneMappingExposure=1;const y=this;let I=!1,C=0,R=0,P=null,b=-1,M=null;const L=new ht,G=new ht;let H=null;const Y=new We(0);let Q=0,q=t.width,ie=t.height,j=1,de=null,ve=null;const Ae=new ht(0,0,q,ie),Xe=new ht(0,0,q,ie);let ct=!1;const K=new ta;let oe=!1,be=!1;const ue=new at,Le=new at,ke=new E,je=new ht,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function _t(){return P===null?j:1}let F=i;function Yt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),F===null){const U="webgl2";if(F=Yt(U,S),F===null)throw Yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let qe,Ye,Re,ft,Ce,T,_,O,Z,te,$,Te,fe,xe,Je,se,_e,Pe,Ie,ye,$e,He,dt,N;function ce(){qe=new dp(F),qe.init(),He=new Km(F,qe),Ye=new rp(F,qe,e,He),Re=new qm(F,qe),Ye.reverseDepthBuffer&&u&&Re.buffers.depth.setReversed(!0),ft=new pp(F),Ce=new Dm,T=new $m(F,qe,Re,Ce,Ye,He,ft),_=new ap(y),O=new cp(y),Z=new yd(F),dt=new np(F,Z),te=new up(F,Z,ft,dt),$=new gp(F,te,Z,ft),Ie=new mp(F,Ye,T),se=new op(Ce),Te=new Lm(y,_,O,qe,Ye,dt,se),fe=new sg(y,Ce),xe=new Nm,Je=new zm(qe),Pe=new ip(y,_,O,Re,$,f,l),_e=new Xm(y,$,Ye),N=new rg(F,ft,Ye,Re),ye=new sp(F,qe,ft),$e=new fp(F,qe,ft),ft.programs=Te.programs,y.capabilities=Ye,y.extensions=qe,y.properties=Ce,y.renderLists=xe,y.shadowMap=_e,y.state=Re,y.info=ft}ce();const X=new ig(y,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(q,ie,!1))},this.getSize=function(S){return S.set(q,ie)},this.setSize=function(S,U,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,ie=U,t.width=Math.floor(S*j),t.height=Math.floor(U*j),B===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*j,ie*j).floor()},this.setDrawingBufferSize=function(S,U,B){q=S,ie=U,j=B,t.width=Math.floor(S*B),t.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,U,B,z){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,U,B,z),Re.viewport(L.copy(Ae).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Xe)},this.setScissor=function(S,U,B,z){S.isVector4?Xe.set(S.x,S.y,S.z,S.w):Xe.set(S,U,B,z),Re.scissor(G.copy(Xe).multiplyScalar(j).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){Re.setScissorTest(ct=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(S=!0,U=!0,B=!0){let z=0;if(S){let k=!1;if(P!==null){const re=P.texture.format;k=re===Zo||re===Ko||re===$o}if(k){const re=P.texture.type,me=re===Ri||re===rn||re===hs||re===Fn||re===jo||re===qo,Me=Pe.getClearColor(),Se=Pe.getClearAlpha(),Ue=Me.r,Be=Me.g,we=Me.b;me?(g[0]=Ue,g[1]=Be,g[2]=we,g[3]=Se,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ue,v[1]=Be,v[2]=we,v[3]=Se,F.clearBufferiv(F.COLOR,0,v))}else z|=F.COLOR_BUFFER_BIT}U&&(z|=F.DEPTH_BUFFER_BIT),B&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Je.dispose(),Ce.dispose(),_.dispose(),O.dispose(),$.dispose(),dt.dispose(),N.dispose(),Te.dispose(),X.dispose(),X.removeEventListener("sessionstart",fa),X.removeEventListener("sessionend",pa),Xi.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=ft.autoReset,U=_e.enabled,B=_e.autoUpdate,z=_e.needsUpdate,k=_e.type;ce(),ft.autoReset=S,_e.enabled=U,_e.autoUpdate=B,_e.needsUpdate=z,_e.type=k}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){const U=S.target;U.removeEventListener("dispose",Oe),xt(U)}function xt(S){Ct(S),Ce.remove(S)}function Ct(S){const U=Ce.get(S).programs;U!==void 0&&(U.forEach(function(B){Te.releaseProgram(B)}),S.isShaderMaterial&&Te.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,z,k,re){U===null&&(U=vt);const me=k.isMesh&&k.matrixWorld.determinant()<0,Me=Hh(S,U,B,z,k);Re.setMaterial(z,me);let Se=B.index,Ue=1;if(z.wireframe===!0){if(Se=te.getWireframeAttribute(B),Se===void 0)return;Ue=2}const Be=B.drawRange,we=B.attributes.position;let it=Be.start*Ue,ut=(Be.start+Be.count)*Ue;re!==null&&(it=Math.max(it,re.start*Ue),ut=Math.min(ut,(re.start+re.count)*Ue)),Se!==null?(it=Math.max(it,0),ut=Math.min(ut,Se.count)):we!=null&&(it=Math.max(it,0),ut=Math.min(ut,we.count));const pt=ut-it;if(pt<0||pt===1/0)return;dt.setup(k,z,Me,B,Se);let Ut,nt=ye;if(Se!==null&&(Ut=Z.get(Se),nt=$e,nt.setIndex(Ut)),k.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*_t()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(k.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*_t()),k.isLineSegments?nt.setMode(F.LINES):k.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else k.isPoints?nt.setMode(F.POINTS):k.isSprite&&nt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)nt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ee=k._multiDrawStarts,gi=k._multiDrawCounts,st=k._multiDrawCount,ei=Se?Z.get(Se).bytesPerElement:1,hn=Ce.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<st;Bt++)hn.setValue(F,"_gl_DrawID",Bt),nt.render(Ee[Bt]/ei,gi[Bt])}else if(k.isInstancedMesh)nt.renderInstances(it,pt,k.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gi=Math.min(B.instanceCount,Ee);nt.renderInstances(it,pt,gi)}else nt.render(it,pt)};function ot(S,U,B){S.transparent===!0&&S.side===Xt&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,ms(S,U,B),S.side=Wi,S.needsUpdate=!0,ms(S,U,B),S.side=Xt):ms(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),p=Je.get(B),p.init(U),w.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==B&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const z=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const Me=re[me];ot(Me,B,k),z.add(Me)}else ot(re,B,k),z.add(re)}),w.pop(),p=null,z},this.compileAsync=function(S,U,B=null){const z=this.compile(S,U,B);return new Promise(k=>{function re(){if(z.forEach(function(me){Ce.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){k(S);return}setTimeout(re,10)}qe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Qt=null;function mi(S){Qt&&Qt(S)}function fa(){Xi.stop()}function pa(){Xi.start()}const Xi=new Mh;Xi.setAnimationLoop(mi),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(S){Qt=S,X.setAnimationLoop(S),S===null?Xi.stop():Xi.start()},X.addEventListener("sessionstart",fa),X.addEventListener("sessionend",pa),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,P),p=Je.get(S,w.length),p.init(U),w.push(p),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Le),be=this.localClippingEnabled,oe=se.init(this.clippingPlanes,be),m=xe.get(S,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&ur(re,U,-1/0,y.sortObjects)}ur(S,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(de,ve),Ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ze&&Pe.addToRenderList(m,S),this.info.render.frame++,oe===!0&&se.beginShadows();const B=p.state.shadowsArray;_e.render(B,S,U),oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,k=m.transmissive;if(p.setupLights(),U.isArrayCamera){const re=U.cameras;if(k.length>0)for(let me=0,Me=re.length;me<Me;me++){const Se=re[me];ga(z,k,S,Se)}Ze&&Pe.render(S);for(let me=0,Me=re.length;me<Me;me++){const Se=re[me];ma(m,S,Se,Se.viewport)}}else k.length>0&&ga(z,k,S,U),Ze&&Pe.render(S),ma(m,S,U);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(y,S,U),dt.resetDefaultState(),b=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],oe===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ur(S,U,B,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){z&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);const me=$.update(S),Me=S.material;Me.visible&&m.push(S,me,Me,B,je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const me=$.update(S),Me=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),je.copy(me.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),Array.isArray(Me)){const Se=me.groups;for(let Ue=0,Be=Se.length;Ue<Be;Ue++){const we=Se[Ue],it=Me[we.materialIndex];it&&it.visible&&m.push(S,me,it,B,je.z,we)}}else Me.visible&&m.push(S,me,Me,B,je.z,null)}}const re=S.children;for(let me=0,Me=re.length;me<Me;me++)ur(re[me],U,B,z)}function ma(S,U,B,z){const k=S.opaque,re=S.transmissive,me=S.transparent;p.setupLightsView(B),oe===!0&&se.setGlobalState(y.clippingPlanes,B),z&&Re.viewport(L.copy(z)),k.length>0&&ps(k,U,B),re.length>0&&ps(re,U,B),me.length>0&&ps(me,U,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ga(S,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new li(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Ai:Ri,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const re=p.state.transmissionRenderTarget[z.id],me=z.viewport||L;re.setSize(me.z,me.w);const Me=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(Y),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&Pe.render(B);const Se=y.toneMapping;y.toneMapping=Vi;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),oe===!0&&se.setGlobalState(y.clippingPlanes,z),ps(S,B,z),T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let we=0,it=U.length;we<it;we++){const ut=U[we],pt=ut.object,Ut=ut.geometry,nt=ut.material,Ee=ut.group;if(nt.side===Xt&&pt.layers.test(z.layers)){const gi=nt.side;nt.side=Ot,nt.needsUpdate=!0,va(pt,B,z,Ut,nt,Ee),nt.side=gi,nt.needsUpdate=!0,Be=!0}}Be===!0&&(T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re))}y.setRenderTarget(Me),y.setClearColor(Y,Q),Ue!==void 0&&(z.viewport=Ue),y.toneMapping=Se}function ps(S,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let k=0,re=S.length;k<re;k++){const me=S[k],Me=me.object,Se=me.geometry,Ue=z===null?me.material:z,Be=me.group;Me.layers.test(B.layers)&&va(Me,U,B,Se,Ue,Be)}}function va(S,U,B,z,k,re){S.onBeforeRender(y,U,B,z,k,re),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,U,B,z,S,re),k.transparent===!0&&k.side===Xt&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,y.renderBufferDirect(B,U,z,k,S,re),k.side=Wi,k.needsUpdate=!0,y.renderBufferDirect(B,U,z,k,S,re),k.side=Xt):y.renderBufferDirect(B,U,z,k,S,re),S.onAfterRender(y,U,B,z,k,re)}function ms(S,U,B){U.isScene!==!0&&(U=vt);const z=Ce.get(S),k=p.state.lights,re=p.state.shadowsArray,me=k.state.version,Me=Te.getParameters(S,k.state,re,U,B),Se=Te.getProgramCacheKey(Me);let Ue=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?O:_).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",Oe),Ue=new Map,z.programs=Ue);let Be=Ue.get(Se);if(Be!==void 0){if(z.currentProgram===Be&&z.lightsStateVersion===me)return _a(S,Me),Be}else Me.uniforms=Te.getUniforms(S),S.onBeforeCompile(Me,y),Be=Te.acquireProgram(Me,Se),Ue.set(Se,Be),z.uniforms=Me.uniforms;const we=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=se.uniform),_a(S,Me),z.needsLights=Vh(S),z.lightsStateVersion=me,z.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.directionalShadowMap.value=k.state.directionalShadowMap,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotShadowMap.value=k.state.spotShadowMap,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMap.value=k.state.pointShadowMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=Be,z.uniformsList=null,Be}function xa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Zs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function _a(S,U){const B=Ce.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Hh(S,U,B,z,k){U.isScene!==!0&&(U=vt),T.resetTextureUnits();const re=U.fog,me=z.isMeshStandardMaterial?U.environment:null,Me=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Hn,Se=(z.isMeshStandardMaterial?O:_).get(z.envMap||me),Ue=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Be=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!B.morphAttributes.position,it=!!B.morphAttributes.normal,ut=!!B.morphAttributes.color;let pt=Vi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=y.toneMapping);const Ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=Ut!==void 0?Ut.length:0,Ee=Ce.get(z),gi=p.state.lights;if(oe===!0&&(be===!0||S!==M)){const $t=S===M&&z.id===b;se.setState(z,S,$t)}let st=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==gi.state.version||Ee.outputColorSpace!==Me||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==Se||z.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==se.numPlanes||Ee.numIntersection!==se.numIntersection)||Ee.vertexAlphas!==Ue||Ee.vertexTangents!==Be||Ee.morphTargets!==we||Ee.morphNormals!==it||Ee.morphColors!==ut||Ee.toneMapping!==pt||Ee.morphTargetsCount!==nt)&&(st=!0):(st=!0,Ee.__version=z.version);let ei=Ee.currentProgram;st===!0&&(ei=ms(z,U,k));let hn=!1,Bt=!1,qn=!1;const mt=ei.getUniforms(),hi=Ee.uniforms;if(Re.useProgram(ei.program)&&(hn=!0,Bt=!0,qn=!0),z.id!==b&&(b=z.id,Bt=!0),hn||M!==S){Re.buffers.depth.getReversed()?(ue.copy(S.projectionMatrix),Kc(ue),Zc(ue),mt.setValue(F,"projectionMatrix",ue)):mt.setValue(F,"projectionMatrix",S.projectionMatrix),mt.setValue(F,"viewMatrix",S.matrixWorldInverse);const Pi=mt.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,ke.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&mt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Bt=!0,qn=!0)}if(k.isSkinnedMesh){mt.setOptional(F,k,"bindMatrix"),mt.setOptional(F,k,"bindMatrixInverse");const $t=k.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),mt.setValue(F,"boneTexture",$t.boneTexture,T))}k.isBatchedMesh&&(mt.setOptional(F,k,"batchingTexture"),mt.setValue(F,"batchingTexture",k._matricesTexture,T),mt.setOptional(F,k,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",k._indirectTexture,T),mt.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",k._colorsTexture,T));const Yn=B.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&Ie.update(k,B,ei),(Bt||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,mt.setValue(F,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=Se,hi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(hi.envMapIntensity.value=U.environmentIntensity),Bt&&(mt.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Gh(hi,qn),re&&z.fog===!0&&fe.refreshFogUniforms(hi,re),fe.refreshMaterialUniforms(hi,z,j,ie,p.state.transmissionRenderTarget[S.id]),Zs.upload(F,xa(Ee),hi,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zs.upload(F,xa(Ee),hi,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&mt.setValue(F,"center",k.center),mt.setValue(F,"modelViewMatrix",k.modelViewMatrix),mt.setValue(F,"normalMatrix",k.normalMatrix),mt.setValue(F,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const $t=z.uniformsGroups;for(let Pi=0,Li=$t.length;Pi<Li;Pi++){const ya=$t[Pi];N.update(ya,ei),N.bind(ya,ei)}}return ei}function Gh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Vh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,U,B){Ce.get(S.texture).__webglTexture=U,Ce.get(S.depthTexture).__webglTexture=B;const z=Ce.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const B=Ce.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){P=S,C=U,R=B;let z=!0,k=null,re=!1,me=!1;if(S){const Se=Ce.get(S);if(Se.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(F.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Se.__hasExternalTextures)T.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const we=S.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Be=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?k=Be[U][B]:k=Be[U],re=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?k=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[B]:k=Be,L.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest}else L.copy(Ae).multiplyScalar(j).floor(),G.copy(Xe).multiplyScalar(j).floor(),H=ct;if(Re.bindFramebuffer(F.FRAMEBUFFER,k)&&z&&Re.drawBuffers(S,k),Re.viewport(L),Re.scissor(G),Re.setScissorTest(H),re){const Se=Ce.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,B)}else if(me){const Se=Ce.get(S.texture),Ue=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.__webglTexture,B||0,Ue)}b=-1},this.readRenderTargetPixels=function(S,U,B,z,k,re,me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Re.bindFramebuffer(F.FRAMEBUFFER,Me);try{const Se=S.texture,Ue=Se.format,Be=Se.type;if(!Ye.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&B>=0&&B<=S.height-k&&F.readPixels(U,B,z,k,He.convert(Ue),He.convert(Be),re)}finally{const Se=P!==null?Ce.get(P).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,z,k,re,me){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){const Se=S.texture,Ue=Se.format,Be=Se.type;if(!Ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-z&&B>=0&&B<=S.height-k){Re.bindFramebuffer(F.FRAMEBUFFER,Me);const we=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,we),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),F.readPixels(U,B,z,k,He.convert(Ue),He.convert(Be),0);const it=P!==null?Ce.get(P).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,it);const ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $c(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,we),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(we),F.deleteSync(ut),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,B=0){S.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-B),k=Math.floor(S.image.width*z),re=Math.floor(S.image.height*z),me=U!==null?U.x:0,Me=U!==null?U.y:0;T.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,me,Me,k,re),Re.unbindTexture()},this.copyTextureToTexture=function(S,U,B=null,z=null,k=0){S.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],U=arguments[2],k=arguments[3]||0,B=null);let re,me,Me,Se,Ue,Be,we,it,ut;const pt=S.isCompressedTexture?S.mipmaps[k]:S.image;B!==null?(re=B.max.x-B.min.x,me=B.max.y-B.min.y,Me=B.isBox3?B.max.z-B.min.z:1,Se=B.min.x,Ue=B.min.y,Be=B.isBox3?B.min.z:0):(re=pt.width,me=pt.height,Me=pt.depth||1,Se=0,Ue=0,Be=0),z!==null?(we=z.x,it=z.y,ut=z.z):(we=0,it=0,ut=0);const Ut=He.convert(U.format),nt=He.convert(U.type);let Ee;U.isData3DTexture?(T.setTexture3D(U,0),Ee=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Ee=F.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Ee=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const gi=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ei=F.getParameter(F.UNPACK_SKIP_PIXELS),hn=F.getParameter(F.UNPACK_SKIP_ROWS),Bt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Se),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be);const qn=S.isDataArrayTexture||S.isData3DTexture,mt=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const hi=Ce.get(S),Yn=Ce.get(U),$t=Ce.get(hi.__renderTarget),Pi=Ce.get(Yn.__renderTarget);Re.bindFramebuffer(F.READ_FRAMEBUFFER,$t.__webglFramebuffer),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Li=0;Li<Me;Li++)qn&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.get(S).__webglTexture,k,Be+Li),S.isDepthTexture?(mt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,k,ut+Li),F.blitFramebuffer(Se,Ue,re,me,we,it,re,me,F.DEPTH_BUFFER_BIT,F.NEAREST)):mt?F.copyTexSubImage3D(Ee,k,we,it,ut+Li,Se,Ue,re,me):F.copyTexSubImage2D(Ee,k,we,it,ut+Li,Se,Ue,re,me);Re.bindFramebuffer(F.READ_FRAMEBUFFER,null),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ee,k,we,it,ut,re,me,Me,Ut,nt,pt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,k,we,it,ut,re,me,Me,Ut,pt.data):F.texSubImage3D(Ee,k,we,it,ut,re,me,Me,Ut,nt,pt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,we,it,re,me,Ut,nt,pt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,we,it,pt.width,pt.height,Ut,pt.data):F.texSubImage2D(F.TEXTURE_2D,k,we,it,re,me,Ut,nt,pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,gi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ei),F.pixelStorei(F.UNPACK_SKIP_ROWS,hn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt),k===0&&U.generateMipmaps&&F.generateMipmap(Ee),Re.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B=null,z=null,k=0){return S.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,S=arguments[2],U=arguments[3],k=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,B,z,k)},this.initRenderTarget=function(S){Ce.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){C=0,R=0,P=null,Re.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class sa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new sa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ag extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lg extends Lt{constructor(e=null,t=1,i=1,n,r,o,a,l,h=jt,c=jt,d,u){super(null,o,a,l,h,c,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl extends Jt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bn=new at,Ml=new at,Fs=[],Sl=new ln,hg=new at,Qn=new W,es=new Wn;class cg extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,hg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bn),Sl.copy(e.boundingBox).applyMatrix4(bn),this.boundingBox.union(Sl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bn),es.copy(e.boundingSphere).applyMatrix4(bn),this.boundingSphere.union(es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Qn.geometry=this.geometry,Qn.material=this.material,Qn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(i),e.ray.intersectsSphere(es)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,bn),Ml.multiplyMatrices(i,bn),Qn.matrixWorld=Ml,Qn.raycast(e,Fs);for(let o=0,a=Fs.length;o<a;o++){const l=Fs[o];l.instanceId=r,l.object=this,t.push(l)}Fs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new lg(new Float32Array(n*this.count),n,this.count,Yo,di));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qi extends Xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nr=new E,sr=new E,wl=new at,ts=new Qo,Os=new Wn,Hr=new E,bl=new E;class zo extends St{constructor(e=new Tt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)nr.fromBufferAttribute(t,n-1),sr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=nr.distanceTo(sr);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(n),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;wl.copy(n).invert(),ts.copy(e.ray).applyMatrix4(wl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=h){const p=c.getX(v),x=c.getX(v+1),w=Bs(this,e,ts,l,p,x);w&&t.push(w)}if(this.isLineLoop){const v=c.getX(g-1),m=c.getX(f),p=Bs(this,e,ts,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=h){const p=Bs(this,e,ts,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Bs(this,e,ts,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bs(s,e,t,i,n,r){const o=s.geometry.attributes.position;if(nr.fromBufferAttribute(o,n),sr.fromBufferAttribute(o,r),t.distanceSqToSegment(nr,sr,Hr,bl)>i)return;Hr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Hr);if(!(l<e.near||l>e.far))return{distance:l,point:bl.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const Tl=new E,El=new E;class dg extends zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Tl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Tl.distanceTo(El);e.setAttribute("lineDistance",new tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ah extends Lt{constructor(e,t,i,n,r,o,a,l,h){super(e,t,i,n,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const c=i[n],u=i[n+1]-c,f=(o-c)/u;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new le:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new E,n=[],r=[],o=[],a=new E,l=new at;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let h=Number.MAX_VALUE;const c=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(At(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ra extends pi{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ug extends ra{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oa(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){n(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,n(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+i*a}}}const zs=new E,Gr=new oa,Vr=new oa,Wr=new oa;class fg extends pi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){const i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=n[(a-1)%r]:(zs.subVectors(n[0],n[1]).add(n[0]),h=zs);const d=n[a%r],u=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(zs.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=zs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(c),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Gr.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,g,v,m),Vr.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,g,v,m),Wr.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(Gr.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),Vr.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),Wr.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(Gr.calc(l),Vr.calc(l),Wr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Al(s,e,t,i,n){const r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function pg(s,e){const t=1-s;return t*t*e}function mg(s,e){return 2*(1-s)*s*e}function gg(s,e){return s*s*e}function as(s,e,t,i){return pg(s,e)+mg(s,t)+gg(s,i)}function vg(s,e){const t=1-s;return t*t*t*e}function xg(s,e){const t=1-s;return 3*t*t*s*e}function _g(s,e){return 3*(1-s)*s*s*e}function yg(s,e){return s*s*s*e}function ls(s,e,t,i,n){return vg(s,e)+xg(s,t)+_g(s,i)+yg(s,n)}class Ch extends pi{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ls(e,n.x,r.x,o.x,a.x),ls(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mg extends pi{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ls(e,n.x,r.x,o.x,a.x),ls(e,n.y,r.y,o.y,a.y),ls(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rh extends pi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sg extends pi{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends pi{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(as(e,n.x,r.x,o.x),as(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wg extends pi{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(as(e,n.x,r.x,o.x),as(e,n.y,r.y,o.y),as(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lh extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],h=n[o],c=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Al(a,l.x,h.x,c.x,d.x),Al(a,l.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new le().fromArray(n))}return this}}var Cl=Object.freeze({__proto__:null,ArcCurve:ug,CatmullRomCurve3:fg,CubicBezierCurve:Ch,CubicBezierCurve3:Mg,EllipseCurve:ra,LineCurve:Rh,LineCurve3:Sg,QuadraticBezierCurve:Ph,QuadraticBezierCurve3:wg,SplineCurve:Lh});class bg extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Cl[n.type]().fromJSON(n))}return this}}class Tg extends bg{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Rh(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new Ph(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){const a=new Ch(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Lh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){const h=new ra(e,t,i,n,r,o,a,l);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class aa extends Tt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=At(n,0,Math.PI*2);const r=[],o=[],a=[],l=[],h=[],c=1/t,d=new E,u=new le,f=new E,g=new E,v=new E;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=t;x++){const w=i+x*c*n,y=Math.sin(w),I=Math.cos(w);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*y,d.y=e[C].y,d.z=e[C].x*I,o.push(d.x,d.y,d.z),u.x=x/t,u.y=C/(e.length-1),a.push(u.x,u.y);const R=l[3*C+0]*y,P=l[3*C+1],b=l[3*C+0]*I;h.push(R,P,b)}}for(let x=0;x<t;x++)for(let w=0;w<e.length-1;w++){const y=w+x*e.length,I=y,C=y+e.length,R=y+e.length+1,P=y+1;r.push(I,C,P),r.push(R,P,C)}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.points,e.segments,e.phiStart,e.phiLength)}}class ri extends aa{constructor(e=1,t=1,i=4,n=8){const r=new Tg;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new ri(e.radius,e.length,e.capSegments,e.radialSegments)}}class la extends Tt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],o=[],a=[],l=[],h=new E,c=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*n;h.x=e*Math.cos(f),h.y=e*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/e+1)/2,c.y=(o[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ke extends Tt{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;n=Math.floor(n),r=Math.floor(r);const c=[],d=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;x(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(f,2));function x(){const y=new E,I=new E;let C=0;const R=(t-e)/i;for(let P=0;P<=r;P++){const b=[],M=P/r,L=M*(t-e)+e;for(let G=0;G<=n;G++){const H=G/n,Y=H*l+a,Q=Math.sin(Y),q=Math.cos(Y);I.x=L*Q,I.y=-M*i+m,I.z=L*q,d.push(I.x,I.y,I.z),y.set(Q,R,q).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-M),b.push(g++)}v.push(b)}for(let P=0;P<n;P++)for(let b=0;b<r;b++){const M=v[b][P],L=v[b+1][P],G=v[b+1][P+1],H=v[b][P+1];(e>0||b!==0)&&(c.push(M,L,H),C+=3),(t>0||b!==r-1)&&(c.push(L,G,H),C+=3)}h.addGroup(p,C,0),p+=C}function w(y){const I=g,C=new le,R=new E;let P=0;const b=y===!0?e:t,M=y===!0?1:-1;for(let G=1;G<=n;G++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let G=0;G<=n;G++){const Y=G/n*l+a,Q=Math.cos(Y),q=Math.sin(Y);R.x=b*q,R.y=m*M,R.z=b*Q,d.push(R.x,R.y,R.z),u.push(0,M,0),C.x=Q*.5+.5,C.y=q*.5*M+.5,f.push(C.x,C.y),g++}for(let G=0;G<n;G++){const H=I+G,Y=L+G;y===!0?c.push(Y,Y+1,H):c.push(Y+1,Y,H),P+=3}h.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bi extends Ke{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hr extends Tt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],o=[];a(n),h(i),c(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const w=new E,y=new E,I=new E;for(let C=0;C<t.length;C+=3)f(t[C+0],w),f(t[C+1],y),f(t[C+2],I),l(w,y,I,x)}function l(x,w,y,I){const C=I+1,R=[];for(let P=0;P<=C;P++){R[P]=[];const b=x.clone().lerp(y,P/C),M=w.clone().lerp(y,P/C),L=C-P;for(let G=0;G<=L;G++)G===0&&P===C?R[P][G]=b:R[P][G]=b.clone().lerp(M,G/L)}for(let P=0;P<C;P++)for(let b=0;b<2*(C-P)-1;b++){const M=Math.floor(b/2);b%2===0?(u(R[P][M+1]),u(R[P+1][M]),u(R[P][M])):(u(R[P][M+1]),u(R[P+1][M+1]),u(R[P+1][M]))}}function h(x){const w=new E;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(x),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function c(){const x=new E;for(let w=0;w<r.length;w+=3){x.x=r[w+0],x.y=r[w+1],x.z=r[w+2];const y=m(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;o.push(y,1-I)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const w=o[x+0],y=o[x+2],I=o[x+4],C=Math.max(w,y,I),R=Math.min(w,y,I);C>.9&&R<.1&&(w<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,w){const y=x*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const x=new E,w=new E,y=new E,I=new E,C=new le,R=new le,P=new le;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),C.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),I.copy(x).add(w).add(y).divideScalar(3);const L=m(I);v(C,M+0,x,L),v(R,M+2,w,L),v(P,M+4,y,L)}}function v(x,w,y,I){I<0&&x.x===1&&(o[w]=x.x-1),y.x===0&&y.z===0&&(o[w]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.vertices,e.indices,e.radius,e.details)}}const Hs=new E,Gs=new E,Xr=new E,Vs=new Zt;class Eg extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(Dn*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:v,b:m,c:p}=Vs;if(v.fromBufferAttribute(a,h[0]),m.fromBufferAttribute(a,h[1]),p.fromBufferAttribute(a,h[2]),Vs.getNormal(Xr),d[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const w=(x+1)%3,y=d[x],I=d[w],C=Vs[c[x]],R=Vs[c[w]],P=`${y}_${I}`,b=`${I}_${y}`;b in u&&u[b]?(Xr.dot(u[b].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(R.x,R.y,R.z)),u[b]=null):P in u||(u[P]={index0:h[x],index1:h[w],normal:Xr.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Hs.fromBufferAttribute(a,v),Gs.fromBufferAttribute(a,m),f.push(Hs.x,Hs.y,Hs.z),f.push(Gs.x,Gs.y,Gs.z)}this.setAttribute("position",new tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ha extends hr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ha(e.radius,e.detail)}}class ca extends hr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ca(e.radius,e.detail)}}class cr extends Tt{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],h=[],c=[];let d=e;const u=(t-e)/n,f=new E,g=new le;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,c.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const x=p+m,w=x,y=x+i+1,I=x+i+2,C=x+1;a.push(w,y,C),a.push(y,I,C)}}this.setIndex(a),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qe extends Tt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const c=[],d=new E,u=new E,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],w=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){const C=I/t;d.x=-e*Math.cos(n+C*r)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(n+C*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+y,1-w),x.push(h++)}c.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const w=c[p][x+1],y=c[p][x],I=c[p+1][x],C=c[p+1][x+1];(p!==0||o>0)&&f.push(w,y,C),(p!==i-1||l<Math.PI)&&f.push(y,I,C)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class on extends Tt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],h=[],c=new E,d=new E,u=new E;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,x=(n+1)*f+g;o.push(v,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ee extends Xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ag extends dr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jr=new at,Rl=new E,Pl=new E;class Dh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pl),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ll=new at,is=new E,qr=new E;class Cg extends Dh{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),i.position.copy(is),qr.copy(i.position),qr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(qr),i.updateMatrixWorld(),n.makeTranslation(-is.x,-is.y,-is.z),Ll.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class Ih extends dr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Cg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rg extends Dh{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Rg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pg extends dr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Il();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Il(){return performance.now()}const Nl=new at;class Ul{constructor(e,t,i=0,n=1/0){this.ray=new Qo(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nl),this}intersectObject(e,t=!0,i=[]){return Ho(e,this,i,t),i.sort(kl),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Ho(e[n],this,i,t);return i.sort(kl),i}}function kl(s,e){return s.distance-e.distance}function Ho(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Ho(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);const Ve=2;var A=(s=>(s[s.Rock=0]="Rock",s[s.Earth=1]="Earth",s[s.Gold=2]="Gold",s[s.Dirt=3]="Dirt",s[s.Claimed=4]="Claimed",s[s.Heart=5]="Heart",s[s.Wall=6]="Wall",s[s.Lava=7]="Lava",s[s.Water=8]="Water",s[s.BridgeWood=9]="BridgeWood",s[s.BridgeStone=10]="BridgeStone",s))(A||{}),D=(s=>(s[s.None=0]="None",s[s.Treasury=1]="Treasury",s[s.Lair=2]="Lair",s[s.Hatchery=3]="Hatchery",s[s.Training=4]="Training",s[s.Library=5]="Library",s[s.Portal=6]="Portal",s[s.Guard=7]="Guard",s))(D||{}),rt=(s=>(s[s.None=0]="None",s[s.Closed=1]="Closed",s[s.Open=2]="Open",s))(rt||{}),Mt=(s=>(s[s.None=0]="None",s[s.Sentry=1]="Sentry",s))(Mt||{}),Ne=(s=>(s[s.None=0]="None",s[s.Dig=1]="Dig",s[s.Claim=2]="Claim",s[s.Fortify=3]="Fortify",s))(Ne||{}),ae=(s=>(s.Scrabbler="scrabbler",s.Skitterwing="skitterwing",s.Rattlekin="rattlekin",s.Emberling="emberling",s.Gravemage="gravemage",s.HeroKnight="hero_knight",s.HeroArcher="hero_archer",s))(ae||{}),V=(s=>(s.Idle="idle",s.Dig="dig",s.Claim="claim",s.Fortify="fortify",s.Mine="mine",s.Haul="haul",s.Sleep="sleep",s.Eat="eat",s.Train="train",s.Research="research",s.Fight="fight",s.Flee="flee",s.Wander="wander",s.Guard="guard",s.AttackMove="attack",s))(V||{});const Dg={0:0,1:50,2:100,3:150,4:200,5:250,6:300,7:175},Fl=75,Ol=150,Bl=40,Ig=60,Ng=120,Tn=35,Yr=48,Go={scrabbler:{hp:40,speed:3.8,damage:4,goldWage:0,color:6982208,scale:1.55},skitterwing:{hp:50,speed:4,damage:6,goldWage:8,color:4243616,scale:.6},rattlekin:{hp:80,speed:2.6,damage:12,goldWage:15,color:9072720,scale:.75},emberling:{hp:90,speed:2.4,damage:16,goldWage:25,color:14700576,scale:.8},gravemage:{hp:70,speed:2.2,damage:10,goldWage:20,color:7360704,scale:.78},hero_knight:{hp:120,speed:2.2,damage:18,goldWage:0,color:12634328,scale:.85},hero_archer:{hp:70,speed:2.5,damage:14,goldWage:0,color:5275808,scale:.7}};function Ws(s){return s==="emberling"}function Xs(s){return s==="skitterwing"}let Ug=1;class kg{id;kind;isHero;isWorker;x;y;wx;wz;hp;maxHp;speed;damage;level=1;job=V.Idle;jobTarget=null;path=[];pathIndex=0;workTimer=0;stunTimer=0;speedBuff=0;hunger=0;sleepNeed=0;mood=72;leaveWarned=!1;efficiencyWarned=!1;selected=!1;trainNeed=0;held=!1;fleeTimer=0;attackCooldown=0;goldCarried=0;alive=!0;mesh;bobPhase;digAnim=0;eatAnim=0;eatAnnounced=!1;restHealAcc=0;facing=0;facingTarget=0;pickaxe=null;selectRing=null;bedKey=null;tintPulse=0;tintMode=null;tintBase=new Map;constructor(e,t,i,n){this.id=Ug++,this.kind=e,this.isHero=e===ae.HeroKnight||e===ae.HeroArcher,this.isWorker=e===ae.Scrabbler;const r=Go[e];this.maxHp=r.hp,this.hp=r.hp,this.speed=r.speed,this.damage=r.damage,this.x=t,this.y=i;const o=n.tileToWorld(t,i);this.wx=o.x,this.wz=o.z,this.bobPhase=Math.random()*Math.PI*2,this.mesh=new gt}setMesh(e){this.mesh=e,this.syncMesh(0)}clampStats(){const e=(t,i=0)=>Number.isFinite(t)?t:i;this.maxHp=Math.max(1,e(this.maxHp,1)),this.hp=Math.max(0,Math.min(this.maxHp,e(this.hp,this.maxHp))),this.hunger=Math.max(0,Math.min(100,e(this.hunger))),this.sleepNeed=Math.max(0,Math.min(100,e(this.sleepNeed))),this.mood=Math.max(0,Math.min(100,e(this.mood,72))),this.wx=e(this.wx),this.wz=e(this.wz),Number.isFinite(this.x)||(this.x=0),Number.isFinite(this.y)||(this.y=0)}syncMesh(e){try{if(this.clampStats(),!this.mesh)return;this.mesh.visible=!0;const t=Number.isFinite(this.wx)?this.wx:0,i=Number.isFinite(this.wz)?this.wz:0;if(this.held){const d=Math.sin(e*10+this.bobPhase)*.08;this.mesh.position.set(t,1.35+d,i),this.mesh.rotation.x=.15,this.mesh.rotation.z=Math.sin(e*6)*.2,this.selectRing&&(this.selectRing.visible=!0,this.selectRing.rotation.z=e*3),this.pickaxe&&(this.pickaxe.visible=!1);return}const n=this.job===V.Dig||this.job===V.Mine||this.job===V.Claim||this.job===V.Fortify,r=this.job===V.Sleep,o=this.job===V.Eat;o&&(this.eatAnim+=.35);const a=this.kind===ae.Skitterwing?Math.sin(e*6+this.bobPhase)*.25+.4:n?Math.sin(e*14+this.bobPhase)*.06:r?Math.sin(e*2+this.bobPhase)*.02:o?Math.sin(this.eatAnim*14+this.bobPhase)*.1:Math.sin(e*8+this.bobPhase)*.04,l=r?.12:o?.05+Math.abs(Math.sin(this.eatAnim*14))*.08:0;this.mesh.position.set(this.wx,a+l,this.wz);let h=this.facing,c=this.facingTarget-h;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;if(h+=c*Math.min(1,10*(1/60)),this.facing=h,this.mesh.rotation.y=this.facing,this.stunTimer>0?this.mesh.rotation.z=Math.sin(e*20)*.3:r?(this.mesh.rotation.z=.35,this.mesh.rotation.x=.05):o?(this.mesh.rotation.x=Math.sin(this.eatAnim*14)*.35,this.mesh.rotation.z=Math.sin(this.eatAnim*10)*.12):(this.mesh.rotation.z=0,this.mesh.rotation.x=0),this.pickaxe)if(this.job===V.Dig||this.job===V.Mine){this.digAnim+=.45;const u=Math.sin(this.digAnim*11);this.pickaxe.rotation.x=-.9+u*1.35,this.pickaxe.rotation.z=.15+u*.55,this.pickaxe.rotation.y=u*.25,this.pickaxe.visible=!0}else if(n){this.digAnim+=.2;const u=Math.sin(this.digAnim*8);this.pickaxe.rotation.x=-.55+u*.5,this.pickaxe.rotation.z=.15+u*.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=!0}else this.pickaxe.rotation.x=-.45,this.pickaxe.rotation.z=.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=this.isWorker;this.selectRing&&(this.selectRing.visible=n||this.held||this.selected,this.selectRing.rotation.z=e*1.5),this.tintPulse>0&&(this.tintPulse=Math.max(0,this.tintPulse-1/60),this.tintPulse<=0&&(this.tintMode=null)),this.applyTintVisual()}catch(t){console.warn("[underkeep] syncMesh failed",t)}}workEfficiency(){const t=.5+(Number.isFinite(this.mood)?Math.max(0,Math.min(100,this.mood)):50)/100*.7;return Number.isFinite(t)?Math.max(.5,Math.min(1.2,t)):.85}pulseTint(e,t=.85){this.tintMode=e,this.tintPulse=Math.max(this.tintPulse,t)}applyTintVisual(){if(this.mesh)try{const e=[];this.mesh.traverse(t=>{const i=t.material;if(i)if(Array.isArray(i))for(const n of i)n instanceof ee&&e.push(n);else i instanceof ee&&e.push(i)});for(const t of e){this.tintBase.has(t)||this.tintBase.set(t,{emissive:t.emissive.clone(),intensity:t.emissiveIntensity});const i=this.tintBase.get(t);if(this.tintPulse>0&&this.tintMode){const n=.55+.45*Math.sin(this.tintPulse*14);this.tintMode==="heal"?(t.emissive.setRGB(.15*n,.95*n,.45*n),t.emissiveIntensity=Math.max(i.intensity,.85+n*.7)):(t.emissive.setRGB(1*n,.55*n,.12*n),t.emissiveIntensity=Math.max(i.intensity,.9+n*.75))}else t.emissive.copy(i.emissive),t.emissiveIntensity=i.intensity}}catch(e){console.warn("[underkeep] tint failed",e)}}tilePos(){return{x:this.x,y:this.y}}setPath(e){this.path=e??[],this.pathIndex=0}faceToward(e,t){const i=e-this.wx,n=t-this.wz;i*i+n*n<1e-6||(this.facingTarget=Math.atan2(i,n))}moveAlongPath(e,t){if(this.stunTimer>0||this.held)return!1;if(this.pathIndex>=this.path.length)return!0;const i=this.path[this.pathIndex],n=t.tileToWorld(i.x,i.y),r=this.speed*(this.speedBuff>0?1.8:1)*Ve,o=n.x-this.wx,a=n.z-this.wz,l=Math.hypot(o,a);if(l<.12)return this.wx=n.x,this.wz=n.z,this.x=i.x,this.y=i.y,this.pathIndex++,this.pathIndex>=this.path.length;const h=Math.min(l,r*e);this.wx+=o/l*h,this.wz+=a/l*h,this.faceToward(n.x,n.z);let c=this.facingTarget-this.facing;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.facing+=c*Math.min(1,12*e);const d=t.worldToTile(this.wx,this.wz);return t.inBounds(d.x,d.y)&&(this.x=d.x,this.y=d.y),!1}takeDamage(e){this.alive&&(this.hp-=e,this.hp<=0&&(this.hp=0,this.alive=!1))}}const Nh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class us{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fg=new ia(-1,1,1,-1,0,1);class Og extends Tt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const Bg=new Og;class Uh{constructor(e){this._mesh=new W(Bg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vo extends us{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ir.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Uh(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zl extends us{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class zg extends us{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hl{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vo(Nh),this.copyPass.material.blending=Ei,this.clock=new Lg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(o instanceof zl?i=!0:o instanceof zg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Gl extends us{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const Hg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class an extends us{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new li(r,o,{type:Ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new li(r,o,{type:Ai});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new li(r,o,{type:Ai});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Hg;this.highPassUniforms=ir.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=Nh;this.copyUniforms=ir.clone(c.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Qr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new Vt,this.fsQuad=new Uh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=an.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=an.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}an.BlurDirectionX=new le(1,0);an.BlurDirectionY=new le(0,1);const zn=new Map;function sn(s,e,t){const i=Math.sin(s*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function Gg(s,e,t){const i=Math.floor(s),n=Math.floor(e),r=s-i,o=e-n,a=r*r*(3-2*r),l=o*o*(3-2*o),h=sn(i,n,t),c=sn(i+1,n,t),d=sn(i,n+1,t),u=sn(i+1,n+1,t);return h+(c-h)*a+(d-h)*l+(h-c-d+u)*a*l}function Js(s,e,t,i=4){let n=.5,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=n*Gg(s*r,e*r,t+l*19),a+=n,n*=.5,r*=2;return o/a}function da(s){const e=document.createElement("canvas");e.width=s,e.height=s;const t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(s,s);return{canvas:e,ctx:t,data:i}}function kh(s,e=2){const t=new Ah(s);return t.wrapS=t.wrapT=Qs,t.repeat.set(e,e),t.colorSpace=Nt,t.magFilter=oi,t.minFilter=Hi,t.generateMipmaps=!0,t.needsUpdate=!0,t}function Fh(s,e,t,i,n,r,o=255){const a=(t*s.width+e)*4;s.data[a]=i,s.data[a+1]=n,s.data[a+2]=r,s.data[a+3]=o}function $r(s,e,t){return s+(e-s)*t}function En(s,e,t){return[$r(s[0],e[0],t),$r(s[1],e[1],t),$r(s[2],e[2],t)]}function qt(s,e){const t=JSON.stringify(e)+`|${s}`,i=zn.get(t);if(i)return i;const{canvas:n,ctx:r,data:o}=da(s),a=e.scale??4,l=e.contrast??1;for(let c=0;c<s;c++)for(let d=0;d<s;d++){const u=d/s*a,f=c/s*a;let g=Js(u,f,e.seed);g=(g-.5)*l+.5,g=Math.max(0,Math.min(1,g));let v=En(e.dark,e.base,g);if(g>.62&&(v=En(v,e.light,(g-.62)/.38)),e.bricks){const{bw:m,bh:p,mortar:x,mortarW:w}=e.bricks,I=Math.floor(c/p)%2===0?0:m*.5,C=(d+I)%m,R=c%p;if(C<w||R<w)v=x;else{const P=Math.floor((d+I)/m),b=Math.floor(c/p),M=sn(P,b,e.seed+9)*.18-.09;v=[Math.max(0,Math.min(255,v[0]*(1+M))),Math.max(0,Math.min(255,v[1]*(1+M))),Math.max(0,Math.min(255,v[2]*(1+M)))]}}if(e.veins){const m=Js(u*e.veins.scale,f*e.veins.scale,e.veins.seed);if(m>e.veins.thresh){const p=(m-e.veins.thresh)/(1-e.veins.thresh);v=En(v,e.veins.color,Math.min(1,p*1.4))}}if(e.speck&&sn(d,c,e.seed+3)<e.speck){const m=e.speckColor??e.light;v=En(v,m,.55)}if(e.cracks&&Math.abs(Js(u*2.5,f*.4,e.seed+40)-.5)<.035&&(v=En(v,e.dark,.7)),e.borderDark){const m=Math.min(d,c,s-1-d,s-1-c)/s;if(m<e.borderDark){const p=1-m/e.borderDark;v=En(v,e.dark,p*.55)}}Fh(o,d,c,v[0]|0,v[1]|0,v[2]|0)}r.putImageData(o,0,0);const h=kh(n,1);return zn.set(t,h),h}function Vg(s,e=1){const t=`bump:${s.image.width}:${e}:${s.uuid}`,i=zn.get(t);if(i)return i;const n=s.image,r=n.width,{canvas:o,ctx:a,data:l}=da(r),c=n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,r,r);for(let u=0;u<r*r;u++){const f=c.data[u*4],g=c.data[u*4+1],v=c.data[u*4+2];let m=(.299*f+.587*g+.114*v)*e;m=Math.max(0,Math.min(255,m));const p=u*4;l.data[p]=m,l.data[p+1]=m,l.data[p+2]=m,l.data[p+3]=255}a.putImageData(l,0,0);const d=kh(o,s.repeat.x);return d.colorSpace=wi,zn.set(t,d),d}function Wg(){return qt(64,{seed:11,base:[168,108,52],dark:[92,52,22],light:[210,150,88],scale:5.5,contrast:1.45,speck:.05,speckColor:[140,90,40],cracks:!0})}function Xg(){return qt(64,{seed:22,base:[118,124,140],dark:[58,62,78],light:[175,182,198],scale:3.6,contrast:1.25,cracks:!0,speck:.05,speckColor:[210,215,230]})}function jg(){return qt(64,{seed:33,base:[88,58,36],dark:[42,28,16],light:[118,84,52],scale:6,contrast:1.25,speck:.07,speckColor:[70,50,30]})}function Oh(){return qt(64,{seed:44,base:[168,158,142],dark:[110,100,88],light:[210,200,185],scale:2.8,contrast:1.25,bricks:{bw:20,bh:14,mortar:[52,44,38],mortarW:2}})}function qg(){return qt(64,{seed:55,base:[128,122,112],dark:[70,66,60],light:[168,162,150],scale:3,contrast:1.1,bricks:{bw:14,bh:12,mortar:[42,40,38],mortarW:2},borderDark:.08})}function Yg(){return qt(64,{seed:66,base:[180,120,28],dark:[90,50,10],light:[255,220,90],scale:4,contrast:1.5,veins:{color:[255,240,110],scale:1.25,thresh:.42,seed:99},speck:.18,speckColor:[255,250,180]})}function $g(){return qt(64,{seed:77,base:[90,40,48],dark:[40,16,22],light:[140,60,70],scale:3.8,contrast:1.2,veins:{color:[180,40,50],scale:1.2,thresh:.62,seed:12}})}function Kg(){return qt(64,{seed:81,base:[100,78,42],dark:[52,38,20],light:[180,140,60],scale:3.2,contrast:1.15,bricks:{bw:16,bh:16,mortar:[90,70,30],mortarW:1},veins:{color:[220,180,60],scale:.9,thresh:.7,seed:3}})}function Zg(){return qt(64,{seed:82,base:[92,62,88],dark:[48,30,50],light:[130,90,120],scale:5,contrast:1.15,speck:.08,speckColor:[160,120,140]})}function Jg(){return qt(64,{seed:83,base:[100,110,50],dark:[50,58,24],light:[150,160,80],scale:5.5,contrast:1.2,speck:.1,speckColor:[180,170,70]})}function Vl(){return qt(64,{seed:84,base:[110,70,60],dark:[55,35,30],light:[150,100,85],scale:4,contrast:1.25,cracks:!0,bricks:{bw:20,bh:12,mortar:[40,28,24],mortarW:1}})}function Qg(){return qt(64,{seed:85,base:[58,68,110],dark:[28,34,60],light:[90,105,160],scale:3.5,contrast:1.15,veins:{color:[140,160,220],scale:2.2,thresh:.68,seed:7}})}function e0(){return qt(64,{seed:86,base:[70,40,100],dark:[30,16,48],light:[130,70,180],scale:4.5,contrast:1.3,veins:{color:[180,100,255],scale:1.5,thresh:.55,seed:21}})}function t0(s,e=1){return Vg(s,e)}function i0(s,e){const t=`decal:${s}:${e.join(",")}`,i=zn.get(t);if(i)return i;const n=64,{canvas:r,ctx:o,data:a}=da(n),l=n/2,h=n/2;for(let d=0;d<n;d++)for(let u=0;u<n;u++){const f=(u+.5-l)/l,g=(d+.5-h)/h,v=Math.hypot(f,g);let m=0,p=e;if(s==="goldRing"){const x=Math.abs(v-.72);m=x<.12?(1-x/.12)*220:0,v<.35&&(m=Math.max(m,(1-v/.35)*90)),(Math.abs(f)>.78&&Math.abs(g)<.2||Math.abs(g)>.78&&Math.abs(f)<.2)&&(m=Math.max(m,180))}else if(s==="bedding"){const x=Math.sin((u+d)*.35)*.5+.5;m=v<.85?(1-v/.85)*(120+x*80):0}else if(s==="warmSpot")m=v<.9?Math.pow(1-v/.9,1.2)*180:0,sn(u,d,5)>.92&&v<.7&&(m=220,p=[220,200,80]);else if(s==="worn"){const x=Js(u*.12,d*.12,9);m=v<.9&&x>.45?(x-.45)*280:0}else if(s==="runes"){m=0,v>.55&&v<.78&&(m=160);const x=Math.atan2(g,f),w=Math.abs(x/(Math.PI*2)*8%1-.5);v>.35&&v<.85&&w<.06&&(m=210),v<.22&&(m=140)}else if(s==="swirl"){const x=Math.atan2(g,f),w=Math.sin(x*3+v*10);m=v<.92?Math.max(0,w)*(1-v)*255:0,v<.2&&(m=Math.max(m,200))}Fh(a,u,d,p[0],p[1],p[2],Math.max(0,Math.min(255,m|0)))}o.putImageData(a,0,0);const c=new Ah(r);return c.colorSpace=Nt,c.needsUpdate=!0,zn.set(t,c),c}const Wl=new Map,Xl=new Map;function fs(s,e){let t=Wl.get(s);return t||(t=e(),Wl.set(s,t)),t}function Rn(s,e){let t=Xl.get(s);return t||(t=e(),Xl.set(s,t)),t}function ua(s,e,t,i=.45){const n=s.attributes.position,r=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){const a=n.getY(o),l=Math.max(0,Math.min(1,(a-e)/(t*.45))),h=1-i*(1-l)*(1-l);r[o*3]=h,r[o*3+1]=h,r[o*3+2]=h}s.setAttribute("color",new Jt(r,3))}function n0(s){const e=new gt,i={[D.Treasury]:13938752,[D.Lair]:11563168,[D.Hatchery]:10006592,[D.Training]:12607568,[D.Library]:5271752,[D.Portal]:10506448,[D.Guard]:7372944}[s]??12101768,n=s===D.None?2761752:s===D.Treasury?4861968:s===D.Lair?4198440:s===D.Hatchery?3162128:s===D.Training?4198416:s===D.Library?1054792:s===D.Guard?2107440:3149896,r=new ee({color:2761240,metalness:.04,roughness:.95}),o=new W(new De(Ve*.98,.18,Ve*.98),r);o.position.y=.02,o.receiveShadow=!0,e.add(o);const a=new ee({color:i,metalness:s===D.Treasury?.45:s===D.Portal?.35:.18,roughness:s===D.Treasury?.4:.62,emissive:n,emissiveIntensity:s===D.None?.14:.28}),l=Ve*.44,h=.06,c=[-.5,.5];for(const u of c)for(const f of c){const g=new W(new De(l,.12,l),a);g.position.set(u*(l/2+h),.16,f*(l/2+h)),g.receiveShadow=!0,g.castShadow=!1,e.add(g)}const d=new W(new De(Ve*.99,.025,Ve*.99),new ee({color:13680808,metalness:.12,roughness:.55,emissive:3813408,emissiveIntensity:.1}));return d.position.y=.11,e.add(d),e}function s0(){return fs("floor",()=>{const s=new De(Ve*.98,.28,Ve*.98,2,1,2);return s.translate(0,.02,0),s})}function jl(s=!1){return fs(s?"wall-fort":"wall",()=>{const e=new De(Ve*.96,2.35,Ve*.96,3,4,3),t=e.attributes.position;for(let i=0;i<t.count;i++){let n=t.getX(i),r=t.getY(i),o=t.getZ(i);s?(r>.95&&(n*=.94,o*=.94),n+=Math.sin(i*.7)*.012,o+=Math.cos(i*.9)*.012):(r>.85&&(n*=.88,o*=.88),n+=Math.sin(i*1.7)*.04,o+=Math.cos(i*2.1)*.04,r>-.3&&r<.5&&(r+=Math.sin(i*.9)*.06)),t.setXYZ(i,n,r,o)}return t.needsUpdate=!0,ua(e,-1.175,2.35,s?.35:.5),e.computeVertexNormals(),e.translate(0,1.175,0),e})}function r0(){return fs("rock-v2",()=>{const s=new De(Ve*.99,3.55,Ve*.99,3,5,3),e=s.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*3.1)*.045),e.setY(t,e.getY(t)+Math.cos(t*2.3)*.035),e.setZ(t,e.getZ(t)+Math.sin(t*4.7)*.045);return e.needsUpdate=!0,ua(s,-1.775,3.55,.62),s.computeVertexNormals(),s.translate(0,1.775,0),s})}function o0(){return fs("gold",()=>{const s=new De(Ve*.96,2.35,Ve*.96,3,4,3),e=s.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*5.1)*.05),e.setZ(t,e.getZ(t)+Math.cos(t*3.9)*.05),e.getY(t)>.9&&(e.setX(t,e.getX(t)*.9),e.setZ(t,e.getZ(t)*.9));return e.needsUpdate=!0,ua(s,-1.175,2.35,.4),s.computeVertexNormals(),s.translate(0,1.175,0),s})}function a0(s){const e=Math.round(Math.max(.25,s)*4)/4;return fs(`edge-${e.toFixed(2)}`,()=>{const t=Ve*.5*.97,i=e,n=[new E(-t,i,-t),new E(t,i,-t),new E(t,i,t),new E(-t,i,t),new E(-t,i,-t)];return new Tt().setFromPoints(n)})}function l0(){const s=new gt,e=new W(new ha(.75,2),new ee({color:6952992,emissive:16724040,emissiveIntensity:.55,metalness:.35,roughness:.4}));e.position.y=1.05,s.add(e);const t=new W(new on(1.05,.1,10,32),new ee({color:3807264,emissive:11149360,emissiveIntensity:.45,metalness:.55,roughness:.35}));t.rotation.x=Math.PI/2,t.position.y=1.05,s.add(t);const i=new W(new Ke(1.05,1.25,.45,12),new ee({color:5915960,metalness:.35,roughness:.55,map:Oh()}));i.position.y=.25,s.add(i);const n=new W(new la(1.55,24),new ee({color:4853776,emissive:16723992,emissiveIntensity:.55,metalness:.2,roughness:.7,transparent:!0,opacity:.85}));n.rotation.x=-Math.PI/2,n.position.y=.13,s.add(n);for(let o=0;o<6;o++){const a=o/6*Math.PI*2,l=new W(new Qe(.06+o%3*.02,6,6),new ee({color:16736288,emissive:16728080,emissiveIntensity:1.2,roughness:1}));l.position.set(Math.cos(a)*1.15,.22,Math.sin(a)*1.15),s.add(l)}const r=new Ih(16728152,1.15,8,2);return r.position.y=1.35,r.castShadow=!1,s.add(r),s.heartCore=e,s.heartLight=r,s}function h0(s=!0){const e=new gt,t=new W(new De(.12,.08,.18),new ee({color:4866104,metalness:.5,roughness:.5}));t.position.set(0,1.35,0),e.add(t);const i=new W(new Ke(.045,.065,.55,6),new ee({color:5914656,roughness:.85}));i.position.y=1.55,e.add(i);const n=new W(new bi(.11,.28,6),new ee({color:16755264,emissive:16742144,emissiveIntensity:1.5,roughness:1}));n.position.y=1.92,e.add(n);const r=new W(new Qe(.08,6,6),new Vt({color:16746544,transparent:!0,opacity:.55}));if(r.position.y=1.82,e.add(r),s){const o=new Ih(16750916,3.2,14,1.6);o.position.y=1.9,o.castShadow=!1,e.add(o),e.torchLight=o}return e.flame=n,e}function Gt(s,e,t,i,n,r=0,o=0,a=0){const l=new W(s,e);return l.position.set(t,i,n),l.rotation.set(r,o,a),l.castShadow=!0,l}function c0(s,e,t){const i=new gt,n=new ee({color:s,metalness:.18,roughness:.55,emissive:s,emissiveIntensity:.1});if(t==="scrabbler"){const r=new W(new Qe(.36,12,10),n);r.scale.set(1.2,.75,1.3),r.position.y=.38,r.castShadow=!0,i.add(r);const o=new W(new Qe(.32,10,8),new ee({color:4876336,metalness:.25,roughness:.45,emissive:2109456,emissiveIntensity:.15}));o.scale.set(1.15,.55,1.05),o.position.set(0,.5,-.06),i.add(o);const a=new W(new Qe(.2,10,8),new ee({color:9089104,metalness:.15,roughness:.55}));a.position.set(0,.44,.36),a.castShadow=!0,i.add(a);const l=new ee({color:16772744,emissive:16763972,emissiveIntensity:.85});for(const x of[-1,1]){const w=new W(new Qe(.05,6,6),l);w.position.set(x*.09,.48,.5),i.add(w)}const h=new ee({color:3819560,roughness:.7});for(const x of[-1,1]){for(const y of[-.14,.16])i.add(Gt(new Ke(.035,.028,.32,5),h,x*.32,.14,y,0,0,x*.7));const w=new W(new bi(.08,.34,5),new ee({color:13684904,metalness:.7,roughness:.28}));w.rotation.z=x*.85,w.rotation.x=-.4,w.position.set(x*.32,.32,.42),w.castShadow=!0,i.add(w)}const c=new gt,d=new W(new ri(.07,.28,3,6),new ee({color:5926960,roughness:.65}));d.position.set(0,.18,0),d.rotation.z=.35,c.add(d);const u=new gt,f=new W(new Ke(.04,.05,.85,6),new ee({color:8015912,roughness:.85}));f.position.y=.35,u.add(f);const g=new W(new De(.48,.12,.12),new ee({color:13687016,metalness:.9,roughness:.22,emissive:4214880,emissiveIntensity:.25}));g.position.set(.08,.78,0),u.add(g);const v=new W(new bi(.08,.28,6),new ee({color:15266047,metalness:.85,roughness:.2}));v.rotation.z=Math.PI/2,v.position.set(.38,.78,0),u.add(v);const m=v.clone();m.rotation.z=-Math.PI/2,m.position.set(-.22,.78,0),u.add(m),u.position.set(.05,.05,.05),c.add(u),c.position.set(.42,.38,.22),c.rotation.z=.2,c.rotation.x=-.45,i.add(c),i.pickaxe=c;const p=new W(new cr(.42,.52,20),new Vt({color:11067488,transparent:!0,opacity:.75,side:Xt,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.05,p.visible=!1,i.add(p),i.selectRing=p}else if(t==="skitterwing"){const r=new W(new Qe(.2,10,8),n);r.position.y=.95,r.castShadow=!0,i.add(r);const o=new W(new Qe(.16,8,8),new ee({color:2785392,metalness:.2,roughness:.5,emissive:1065008,emissiveIntensity:.2}));o.scale.set(.9,.8,1.3),o.position.set(0,.88,-.22),i.add(o);const a=new W(new Qe(.12,8,8),new ee({color:5296304,roughness:.5}));a.position.set(0,1,.22),i.add(a);for(const c of[-1,1]){const d=new W(new Ke(.012,.01,.22,4),new ee({color:2130016}));d.position.set(c*.06,1.14,.28),d.rotation.z=c*.4,d.rotation.x=-.5,i.add(d)}const l=new ee({color:11075560,emissive:3180656,emissiveIntensity:.4,transparent:!0,opacity:.7,side:Xt,metalness:.1,roughness:.35});for(const c of[-1,1]){const d=new W(new ui(.75,.38),l);d.position.set(c*.38,1,0),d.rotation.y=c*.35,d.rotation.z=c*.25,i.add(d);const u=new W(new ui(.5,.28),l);u.position.set(c*.32,.88,-.08),u.rotation.y=c*.5,i.add(u)}const h=new ee({color:2121808,roughness:.65});for(const c of[-1,1])i.add(Gt(new Ke(.02,.015,.35,4),h,c*.14,.7,.05,.4,0,c*.5))}else if(t==="rattlekin"){const r=new ee({color:13154456,metalness:.15,roughness:.45,emissive:4206608,emissiveIntensity:.08}),o=new W(new ri(.22,.35,4,8),r);o.position.y=.7,o.castShadow=!0,i.add(o);for(let d=0;d<3;d++){const u=new W(new on(.2,.025,4,10,Math.PI),r);u.rotation.x=Math.PI/2,u.position.set(0,.55+d*.12,.05),i.add(u)}const a=new W(new Qe(.2,10,8),r);a.scale.set(1,1.05,1.15),a.position.y=1.2,a.castShadow=!0,i.add(a);const l=new W(new De(.22,.08,.16),r);l.position.set(0,1.05,.1),i.add(l);const h=new ee({color:2101256,emissive:16736288,emissiveIntensity:.7});for(const d of[-1,1]){const u=new W(new Qe(.045,6,6),h);u.position.set(d*.08,1.24,.16),i.add(u)}for(const d of[-1,1])i.add(Gt(new Ke(.045,.035,.45,5),r,d*.3,.75,0,0,0,d*.25)),i.add(Gt(new Ke(.05,.04,.4,5),r,d*.12,.28,0,.15,0,d*.1));const c=new W(new De(.06,.5,.12),new ee({color:8949920,metalness:.8,roughness:.25}));c.position.set(.42,.7,.05),c.rotation.z=-.3,i.add(c)}else if(t==="emberling"){const r=new ee({color:14698528,emissive:16728088,emissiveIntensity:.65,metalness:.25,roughness:.35}),o=new W(new ri(.26,.45,6,10),r);o.position.y=.7,o.castShadow=!0,i.add(o);const a=new W(new Qe(.2,10,8),r);a.position.y=1.2,i.add(a);const l=new W(new bi(.14,.42,6),new ee({color:16748576,emissive:16736272,emissiveIntensity:.95}));l.position.y=1.5,i.add(l);for(let c=0;c<3;c++){const d=new W(new bi(.06,.22,5),new ee({color:16740368,emissive:16728072,emissiveIntensity:.8}));d.position.set((c-1)*.12,1.38,-.12),d.rotation.x=-.5,i.add(d)}for(const c of[-1,1]){i.add(Gt(new Ke(.06,.04,.4,6),r,c*.32,.75,0,0,0,c*.45));const d=new W(new Qe(.08,6,6),new ee({color:16755264,emissive:16736272,emissiveIntensity:1}));d.position.set(c*.42,.55,.05),i.add(d)}const h=new W(new bi(.32,.35,8,1,!0),new ee({color:16732176,emissive:16723976,emissiveIntensity:.7,transparent:!0,opacity:.75,side:Xt}));h.position.y=.28,i.add(h)}else if(t==="gravemage"){const r=new ee({color:4862080,metalness:.2,roughness:.55,emissive:3151968,emissiveIntensity:.25}),o=new W(new ri(.24,.5,5,10),r);o.position.y=.7,o.castShadow=!0,i.add(o);const a=new W(new Qe(.22,10,8),new ee({color:2758728,roughness:.7,emissive:4202624,emissiveIntensity:.2}));a.position.y=1.22,i.add(a);const l=new W(new Qe(.12,8,6),new ee({color:13154520,roughness:.5}));l.position.set(0,1.18,.12),i.add(l);const h=new ee({color:11167487,emissive:8930559,emissiveIntensity:.9});for(const u of[-1,1]){const f=new W(new Qe(.035,6,6),h);f.position.set(u*.06,1.2,.2),i.add(f)}for(const u of[-1,1])i.add(Gt(new Ke(.045,.035,.4,5),r,u*.28,.7,0,0,0,u*.2)),i.add(Gt(new Ke(.05,.04,.38,5),r,u*.1,.28,0));const c=new W(new Ke(.03,.04,1.3,6),new ee({color:6965288,roughness:.7}));c.position.set(.38,.75,.05),i.add(c);const d=new W(new Qe(.1,10,8),new ee({color:8939263,emissive:11167487,emissiveIntensity:.85,metalness:.3,roughness:.35}));d.position.set(.38,1.45,.05),i.add(d)}else if(t==="hero_knight"||t==="hero"){const r=new ee({color:s||12634328,metalness:.75,roughness:.28}),o=new W(new ri(.26,.5,6,10),r);o.position.y=.72,o.castShadow=!0,i.add(o);const a=new ee({color:11055296,metalness:.8,roughness:.25});for(const f of[-1,1]){const g=new W(new Qe(.14,8,6),a);g.scale.set(1.1,.7,1),g.position.set(f*.28,1,0),i.add(g),i.add(Gt(new Ke(.07,.055,.4,6),r,f*.34,.7,0,0,0,f*.2))}const l=new W(new Qe(.2,10,8),r);l.position.y=1.28,i.add(l);const h=new W(new De(.22,.06,.08),new ee({color:1712176,metalness:.5,roughness:.4}));h.position.set(0,1.28,.16),i.add(h);const c=new W(new De(.04,.22,.16),new ee({color:11542568,roughness:.6}));c.position.set(0,1.48,0),i.add(c);for(const f of[-1,1])i.add(Gt(new Ke(.08,.06,.4,6),r,f*.1,.28,0));const d=new W(new De(.05,.55,.1),new ee({color:14213360,metalness:.9,roughness:.2}));d.position.set(.4,.75,.05),d.rotation.z=-.25,i.add(d);const u=new W(new De(.14,.04,.06),new ee({color:9068592,metalness:.4,roughness:.5}));u.position.set(.38,.5,.05),i.add(u)}else if(t==="hero_archer"){const r=new ee({color:s||5275808,metalness:.15,roughness:.65}),o=new W(new ri(.22,.45,6,10),r);o.position.y=.68,o.castShadow=!0,i.add(o);const a=new W(new Qe(.2,10,8),new ee({color:3823728,roughness:.7}));a.scale.set(1.05,1.1,1.15),a.position.y=1.2,i.add(a);const l=new W(new Qe(.12,8,8),new ee({color:12888200,roughness:.7}));l.position.set(0,1.15,.1),i.add(l);for(const d of[-1,1])i.add(Gt(new Ke(.05,.04,.35,5),r,d*.26,.7,0,0,0,d*.3)),i.add(Gt(new Ke(.055,.045,.38,5),r,d*.09,.28,0));const h=new W(new on(.28,.025,4,12,Math.PI),new ee({color:9068592,roughness:.6}));h.rotation.y=Math.PI/2,h.position.set(-.32,.75,.05),i.add(h);const c=new W(new Ke(.008,.008,.5,4),new ee({color:14209216}));c.position.set(-.2,.75,.05),i.add(c)}else{const r=new W(new ri(.26,.45,6,10),n);r.position.y=.6,r.castShadow=!0,i.add(r);const o=new W(new Qe(.2,10,8),new ee({color:11178096,roughness:.6}));o.position.y=1.1,i.add(o);for(const a of[-1,1])i.add(Gt(new Ke(.05,.04,.35,5),n,a*.28,.6,0,0,0,a*.4)),i.add(Gt(new Ke(.055,.045,.35,5),n,a*.1,.25,0))}return i.scale.setScalar(e),i}function kt(s,e,t={}){return Rn(s,()=>{const i=t0(e,t.bump??1);return new ee({map:e,bumpMap:i,bumpScale:t.bump??.08,color:t.color??16777215,metalness:t.metalness??.08,roughness:t.roughness??.82,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,vertexColors:t.vertexColors??!1})})}function Oi(s,e){if(s===A.Lava)return Rn("floor-lava",()=>new ee({color:16728080,roughness:.4,metalness:.15,emissive:16722432,emissiveIntensity:1.2}));if(s===A.Water)return Rn("floor-water",()=>new ee({color:2777224,roughness:.2,metalness:.45,emissive:1325144,emissiveIntensity:.45}));if(s===A.BridgeWood)return Rn("floor-bridge-wood",()=>new ee({color:9067048,roughness:.85,metalness:.05,emissive:2758664,emissiveIntensity:.08}));if(s===A.BridgeStone)return Rn("floor-bridge-stone",()=>new ee({color:6975616,roughness:.65,metalness:.3,emissive:2106408,emissiveIntensity:.1}));if(s===A.Heart)return kt("floor-heart",$g(),{metalness:.3,roughness:.55,emissive:5249056,emissiveIntensity:.22,bump:.06});if(s===A.Dirt)return kt("floor-dirt",jg(),{metalness:.02,roughness:.95,emissive:657412,emissiveIntensity:.03,bump:.12});switch(e){case D.Treasury:return kt("floor-treasury",Kg(),{metalness:.55,roughness:.4,emissive:3811336,emissiveIntensity:.15,bump:.05});case D.Lair:return kt("floor-lair",Zg(),{metalness:.08,roughness:.85,emissive:2101272,emissiveIntensity:.1,bump:.09});case D.Hatchery:return kt("floor-hatchery",Jg(),{metalness:.05,roughness:.88,emissive:2105360,emissiveIntensity:.12,bump:.08});case D.Training:return kt("floor-training",Vl(),{metalness:.2,roughness:.7,emissive:2101264,emissiveIntensity:.08,bump:.1});case D.Library:return kt("floor-library",Qg(),{metalness:.15,roughness:.65,emissive:1054760,emissiveIntensity:.18,bump:.06});case D.Portal:return kt("floor-portal",e0(),{metalness:.35,roughness:.45,emissive:4200552,emissiveIntensity:.35,bump:.07});case D.Guard:return kt("floor-training",Vl(),{metalness:.25,roughness:.68,emissive:1581096,emissiveIntensity:.12,bump:.1,color:8425632});default:return kt("floor-claimed-v2",Oh(),{color:12101776,metalness:.2,roughness:.58,emissive:2761752,emissiveIntensity:.1,bump:.1})}}function d0(s){if(s===D.None)return null;const t={[D.Treasury]:{kind:"goldRing",color:[224,176,40],emissive:12619808,ei:.35,size:1.5},[D.Lair]:{kind:"bedding",color:[130,80,140],emissive:6303856,ei:.2,size:1.45},[D.Hatchery]:{kind:"warmSpot",color:[140,170,60],emissive:7372832,ei:.25,size:1.4},[D.Training]:{kind:"worn",color:[170,70,60],emissive:8396832,ei:.18,size:1.4},[D.Library]:{kind:"runes",color:[90,120,210],emissive:4219072,ei:.4,size:1.45},[D.Portal]:{kind:"swirl",color:[160,80,220],emissive:8401088,ei:.55,size:1.5},[D.Guard]:{kind:"worn",color:[100,120,140],emissive:4219008,ei:.22,size:1.4}}[s];if(!t)return null;const i=i0(t.kind,t.color),n=new ee({map:i,transparent:!0,depthWrite:!1,color:16777215,emissive:t.emissive,emissiveIntensity:t.ei,metalness:s===D.Treasury?.65:.15,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-1}),r=new W(new ui(t.size,t.size),n);return r.rotation.x=-Math.PI/2,r.position.y=.14,r}function Kr(s,e,t){if(e)return kt("fortified",qg(),{metalness:.42,roughness:.48,emissive:2761760,emissiveIntensity:.06,bump:.06,vertexColors:!0});switch(s){case A.Rock:return kt("rock-v3",Xg(),{metalness:.18,roughness:.72,emissive:2631736,emissiveIntensity:.12,bump:.12,vertexColors:!0});case A.Earth:return kt("earth-v2",Wg(),{metalness:.04,roughness:.9,emissive:3809288,emissiveIntensity:.16,bump:.15,vertexColors:!0});case A.Gold:return kt("gold-v3",Yg(),{metalness:.88,roughness:.2,emissive:14721048,emissiveIntensity:.95,bump:.08,vertexColors:!0});case A.Dirt:return Oi(A.Dirt,D.None);case A.Claimed:return Oi(A.Claimed,t);case A.Heart:return Oi(A.Heart,D.None);case A.Lava:return Oi(A.Lava,D.None);case A.Water:return Oi(A.Water,D.None);case A.BridgeWood:return Oi(A.BridgeWood,D.None);case A.BridgeStone:return Oi(A.BridgeStone,D.None);default:return Rn("default",()=>new ee({color:5592405}))}}function u0(s){if(s===D.None)return null;const e=new gt;if(s===D.Treasury){const t=new ee({color:14725160,metalness:.85,roughness:.3,emissive:10514448,emissiveIntensity:.45}),i=new W(new Qe(.35,10,8),t);i.scale.set(1.3,.55,1.1),i.position.set(-.35,.22,.15),i.castShadow=!0,e.add(i);const n=new W(new Qe(.22,8,6),t);n.scale.set(1.1,.5,1),n.position.set(.15,.16,-.35),e.add(n);const r=new W(new De(.55,.35,.4),new ee({color:6961688,metalness:.25,roughness:.7}));r.position.set(.4,.28,.25),r.castShadow=!0,e.add(r);const o=new W(new De(.55,.08,.42),new ee({color:9064480,metalness:.3,roughness:.65}));o.position.set(.4,.48,.25),e.add(o);const a=new W(new De(.58,.06,.08),new ee({color:13934624,metalness:.8,roughness:.3,emissive:8409104,emissiveIntensity:.3}));a.position.set(.4,.3,.25),e.add(a)}else if(s===D.Lair){const t=new ee({color:6963304,roughness:.9,emissive:3149864,emissiveIntensity:.12}),i=new W(new ri(.18,.55,4,8),t);i.rotation.z=Math.PI/2,i.position.set(-.2,.2,.1),i.castShadow=!0,e.add(i);const n=new W(new ri(.15,.45,4,8),t);n.rotation.z=Math.PI/2,n.rotation.y=.4,n.position.set(.35,.18,-.25),e.add(n)}else if(s===D.Hatchery){const t=new W(new on(.55,.16,8,16),new ee({color:6979632,roughness:.85,emissive:4214808,emissiveIntensity:.28}));t.rotation.x=-Math.PI/2,t.position.y=.16,e.add(t);const i=new W(new Qe(.18,8,6),new ee({color:15253568,emissive:10518560,emissiveIntensity:.35,roughness:.5}));i.position.y=.22,e.add(i)}else if(s===D.Training){const t=new ee({color:6965288,roughness:.8}),i=new ee({color:8949920,metalness:.75,roughness:.35}),n=new W(new Ke(.06,.08,.9,6),t);n.position.set(-.35,.5,0),n.castShadow=!0,e.add(n);const r=new W(new Ke(.06,.08,.9,6),t);r.position.set(.35,.5,0),e.add(r);const o=new W(new De(.85,.08,.12),t);o.position.set(0,.7,0),e.add(o);for(const h of[-.2,.05,.3]){const c=new W(new De(.05,.45,.08),i);c.position.set(h,.55,.05),e.add(c)}const a=new W(new Ke(.18,.22,.7,8),new ee({color:9068624,roughness:.75,emissive:4198416,emissiveIntensity:.15}));a.position.set(0,.4,-.45),a.castShadow=!0,e.add(a);const l=new W(new Qe(.16,8,6),new ee({color:12619888,roughness:.7}));l.position.set(0,.85,-.45),e.add(l)}else if(s===D.Library){const t=new ee({color:5913122,roughness:.75}),i=new W(new De(.7,.12,.45),t);i.position.set(0,.55,0),i.castShadow=!0,e.add(i);const n=new W(new Ke(.08,.12,.45,6),t);n.position.set(0,.28,0),e.add(n);const r=new W(new De(.28,.06,.22),new ee({color:3166368,emissive:1056864,emissiveIntensity:.25,roughness:.6}));r.position.set(.05,.65,0),e.add(r);const o=new W(new Ke(.03,.035,.14,6),new ee({color:15259808,emissive:16755264,emissiveIntensity:.4}));o.position.set(-.22,.68,.08),e.add(o)}else if(s===D.Portal){const t=new ee({color:8401088,emissive:10502399,emissiveIntensity:.7,metalness:.4,roughness:.35,transparent:!0,opacity:.85}),i=new W(new Ke(.2,.28,1.4,10),t);i.position.y=.75,i.castShadow=!0,e.add(i);const n=new W(new on(.42,.06,8,20),t);n.position.y=1.15,n.rotation.x=Math.PI/2,e.add(n);const r=new W(new Qe(.18,10,8),new ee({color:14721279,emissive:12607743,emissiveIntensity:1.1,roughness:.3}));r.position.y=1.15,e.add(r)}else if(s===D.Guard){const t=new ee({color:5914672,roughness:.8}),i=new ee({color:9478320,metalness:.7,roughness:.35,emissive:2109504,emissiveIntensity:.15}),n=new W(new Ke(.07,.09,1.35,6),t);n.position.set(0,.7,0),n.castShadow=!0,e.add(n);const r=new W(new De(.55,.7,.04),new ee({color:6303776,emissive:4198416,emissiveIntensity:.2,roughness:.75}));r.position.set(0,1.05,.08),e.add(r);const o=new W(new Ke(.28,.28,.06,8),i);o.rotation.x=Math.PI/2,o.position.set(.45,.55,-.2),e.add(o);const a=new W(new De(.7,.08,.2),t);a.position.set(-.35,.35,.25),e.add(a)}else return null;return e}function f0(){const s=new gt,e=new ee({color:16773280,emissive:16764992,emissiveIntensity:1.65,metalness:.98,roughness:.1}),t=[[.35,1.7,.2],[-.4,1.35,-.3],[.1,2,-.45],[-.25,1.9,.4],[.45,1.1,.35],[-.5,2.15,.05],[0,2.35,.15],[.55,1.55,-.2]];for(const[n,r,o]of t){const a=new W(new ca(.11+Math.abs(n)%.05,0),e);a.position.set(n,r,o),s.add(a)}const i=new W(new De(.14,1.85,.14),new ee({color:16769136,emissive:16756768,emissiveIntensity:1.35,metalness:.95,roughness:.15}));return i.position.set(.15,1.45,-.1),i.rotation.z=.2,s.add(i),s}function p0(){const s=new gt,e=new W(new De(Ve*.98,.18,Ve*.98),new ee({color:3805704,roughness:.85,metalness:.05,emissive:4853768,emissiveIntensity:.35}));e.position.y=.05,e.receiveShadow=!0,s.add(e);const t=new W(new De(Ve*.82,.08,Ve*.82),new ee({color:16733456,roughness:.35,metalness:.2,emissive:16726528,emissiveIntensity:1.35}));t.position.y=.14,s.add(t);for(const[i,n,r]of[[-.45,-.3,.35],[.4,.35,.28],[.1,-.5,.22],[-.2,.45,.3]]){const o=new W(new De(r,.06,r*.85),new ee({color:1706502,roughness:.95,emissive:8394752,emissiveIntensity:.45}));o.position.set(i,.17,n),s.add(o)}return s}function m0(){const s=new gt,e=new W(new De(Ve*.98,.16,Ve*.98),new ee({color:1716296,roughness:.25,metalness:.35,emissive:663608,emissiveIntensity:.4}));e.position.y=.04,e.receiveShadow=!0,s.add(e);const t=new W(new De(Ve*.78,.04,Ve*.78),new ee({color:3834032,roughness:.15,metalness:.55,emissive:1591400,emissiveIntensity:.55,transparent:!0,opacity:.92}));return t.position.y=.12,s.add(t),s}function g0(s){const e=new gt,t=new W(new De(Ve*.95,.1,Ve*.95),new ee({color:s?1714232:4855816,roughness:.7,metalness:.1,emissive:s?1056816:12593152,emissiveIntensity:s?.25:.7}));t.position.y=.06,e.add(t);const i=new ee({color:s?6975616:9067048,roughness:s?.65:.82,metalness:s?.35:.08,emissive:s?2106408:3809296,emissiveIntensity:.12});for(let r=-2;r<=2;r++){const o=new W(new De(Ve*.92,.12,.28),i);o.position.set(0,.2,r*.36),o.castShadow=!0,o.receiveShadow=!0,e.add(o)}const n=new ee({color:s?5265512:5913112,roughness:.75,metalness:s?.3:.05});for(const r of[-.85,.85]){const o=new W(new De(.1,.35,Ve*.9),n);o.position.set(r,.38,0),e.add(o)}return e}function v0(s){const e=new gt,t=new ee({color:6964264,roughness:.78,metalness:.12,emissive:2758664,emissiveIntensity:.12}),i=new ee({color:8947864,metalness:.85,roughness:.3,emissive:2105384,emissiveIntensity:.1}),n=new W(new De(.12,1.55,.18),t);n.position.set(-.72,.85,0),e.add(n);const r=n.clone();r.position.x=.72,e.add(r);const o=new W(new De(1.56,.14,.2),t);o.position.set(0,1.62,0),e.add(o);const a=new W(new De(1.2,1.4,.1),t);a.castShadow=!0,s===rt.Open?(a.position.set(.55,.78,.35),a.rotation.y=-1.05):a.position.set(0,.78,0),e.add(a);const l=new W(new De(1.22,.08,.12),i);l.position.copy(a.position),l.position.y=.55,l.rotation.copy(a.rotation),e.add(l);const h=new W(new Qe(.06,8,6),i);return s===rt.Open?h.position.set(.35,.75,.55):h.position.set(.45,.75,.08),e.add(h),e}function x0(){const s=new gt,e=new ee({color:5920864,roughness:.7,metalness:.25,emissive:2103320,emissiveIntensity:.12}),t=new ee({color:11055296,metalness:.8,roughness:.28,emissive:4206624,emissiveIntensity:.2}),i=new W(new Ke(.35,.42,.22,8),e);i.position.y=.14,i.castShadow=!0,s.add(i);const n=new W(new Ke(.1,.12,.7,6),e);n.position.y=.55,s.add(n);const r=new W(new De(.55,.22,.28),t);r.position.set(.05,.95,0),r.castShadow=!0,s.add(r);const o=new W(new Ke(.06,.08,.45,6),t);o.rotation.z=Math.PI/2,o.position.set(.4,.95,0),s.add(o);const a=new W(new bi(.05,.18,6),new ee({color:12634328,metalness:.9,roughness:.2,emissive:8405008,emissiveIntensity:.35}));return a.rotation.z=-Math.PI/2,a.position.set(.68,.95,0),s.add(a),s}function _0(){const s=new gt,e=new ee({color:5913122,roughness:.8}),t=new ee({color:11544616,emissive:6295568,emissiveIntensity:.35,roughness:.7}),i=new W(new Ke(.04,.05,1.6,6),e);i.position.y=.85,i.castShadow=!0,s.add(i);const n=new W(new De(.55,.38,.03),t);n.position.set(.3,1.4,0),s.add(n);const r=new W(new Qe(.07,8,6),new ee({color:14729280,metalness:.7,emissive:10518560,emissiveIntensity:.4}));return r.position.y=1.68,s.add(r),s}const ql={uniforms:{tDiffuse:{value:null},uContrast:{value:1.05},uSaturation:{value:1.08},uVignette:{value:.22},uTint:{value:new We(1.02,.98,.92)}},vertexShader:`
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
  `};class y0{scene;camera;renderer;composer;bloomPass;gridGroup=new gt;entityGroup=new gt;fxGroup=new gt;tileMeshes=new Map;torches=[];heartGroup=null;markerMesh;selectRing;clock=0;edgeMat;earthEdgeMat;goldEdgeMat;rockEdgeMat;contextLost=!1;useComposer=!0;renderFails=0;onContextLost=null;onContextRestored=null;fxDebrisGeo=new De(.1,.08,.1);fxSparkGeo=new Qe(.2,8,8);fxGlowGeo=new Qe(.4,10,10);FX_CAP=64;digLoad=!1;basePixelRatio=1;dirLight=null;markOverlay=new gt;markPlaneGeo=new ui(Ve*.7,Ve*.7);digWireGeo=new Eg(new De(Ve*.92,2.2,Ve*.92));fogOverlay=new gt;fogBoxGeo=new De(Ve*1.05,4.4,Ve*1.05);fogMat=new Vt({color:525834,depthWrite:!0});fogInstanced=null;fogCapacity=0;fogDummy=new St;constructor(e){this.scene=new ag,this.scene.background=new We(2235428),this.scene.fog=new sa(1972256,.0055),this.camera=new Wt(52,1,.1,220),this.camera.position.set(0,32,24),this.camera.lookAt(0,0,0),this.renderer=new og({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.basePixelRatio=Math.min(window.devicePixelRatio||1,t?1.15:1.5),this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.setClearColor(2235428,1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jh,this.renderer.toneMapping=Ql,this.renderer.toneMappingExposure=1.6,this.renderer.outputColorSpace=Nt;const i=new Pg(14734528,1);this.scene.add(i);const n=new Ag(16773860,4864072,.85);n.position.set(0,40,0),this.scene.add(n);const r=new Dl(16773856,1.25);r.position.set(22,48,14),r.castShadow=!0,r.shadow.mapSize.set(512,512),this.dirLight=r,r.shadow.camera.near=5,r.shadow.camera.far=120,r.shadow.camera.left=-55,r.shadow.camera.right=55,r.shadow.camera.top=55,r.shadow.camera.bottom=-55,r.shadow.bias=-6e-4,r.shadow.intensity=.55,this.scene.add(r);const o=new Dl(9480400,.45);o.position.set(-18,28,-14),this.scene.add(o);const a=new W(new ui(200,200),new ee({color:1709080,metalness:.05,roughness:1}));a.rotation.x=-Math.PI/2,a.position.y=-.35,a.receiveShadow=!0,this.scene.add(a),this.scene.add(this.gridGroup),this.scene.add(this.markOverlay),this.scene.add(this.fogOverlay),this.scene.add(this.entityGroup),this.scene.add(this.fxGroup),this.edgeMat=new Qi({color:2761240,transparent:!0,opacity:.55}),this.earthEdgeMat=new Qi({color:10510376,transparent:!0,opacity:.85}),this.goldEdgeMat=new Qi({color:16769126,transparent:!0,opacity:1}),this.rockEdgeMat=new Qi({color:8949928,transparent:!0,opacity:.8}),this.markerMesh=new W(new ui(Ve*.9,Ve*.9),new Vt({color:16755232,transparent:!0,opacity:.35,depthWrite:!1})),this.markerMesh.rotation.x=-Math.PI/2,this.markerMesh.position.y=.14,this.markerMesh.visible=!1,this.scene.add(this.markerMesh),this.selectRing=new W(new cr(.4,.55,24),new Vt({color:16764006,transparent:!0,opacity:.8,side:Xt})),this.selectRing.rotation.x=-Math.PI/2,this.selectRing.position.y=.16,this.selectRing.visible=!1,this.scene.add(this.selectRing),this.composer=new Hl(this.renderer),this.composer.addPass(new Gl(this.scene,this.camera));const l=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new an(new le(1,1),l?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new Vo(ql)),this.onResize(),window.addEventListener("resize",()=>this.onResize()),this.bindContextRecovery(e)}bindContextRecovery(e){e.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.useComposer=!1,console.warn("[underkeep] WebGL context lost"),this.onContextLost?.()},!1),e.addEventListener("webglcontextrestored",()=>{console.warn("[underkeep] WebGL context restored — reinit renderer pipeline"),this.contextLost=!1;try{this.reinitPipeline(),this.onContextRestored?.()}catch(t){console.error("[underkeep] context restore failed",t),this.onContextLost?.()}},!1)}reinitPipeline(){const e=new le;this.renderer.getSize(e),this.renderer.setClearColor(2235428,1),this.composer=new Hl(this.renderer),this.composer.addPass(new Gl(this.scene,this.camera));const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new an(new le(e.x||1,e.y||1),t?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new Vo(ql)),this.useComposer=!0,this.renderFails=0,this.onResize()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}disposeGridChild(e){e.traverse(t=>{const i=t;if(i.isMesh){const r=i.geometry;r&&(i.userData.disposeGeo||r.userData?.disposeGeo)&&r.dispose();const o=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const a of o)a&&a.userData?.disposeMat&&a.dispose()}t.isLight})}rebuildGrid(e){for(;this.gridGroup.children.length;){const t=this.gridGroup.children.pop();this.disposeGridChild(t),this.gridGroup.remove(t)}this.tileMeshes.clear(),this.torches=[],this.heartGroup=null;for(const t of e.tiles){const i=e.tileToWorld(t.x,t.y),n=`${t.x},${t.y}`;if(t.kind===A.Rock){const a=new W(r0(),Kr(A.Rock,!1,t.room));a.position.set(i.x,0,i.z),a.castShadow=!0,a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),this.addEdge(i.x,i.z,3.5,this.rockEdgeMat),this.tileMeshes.set(n,a);continue}if(t.fortified){const a=new W(jl(!0),Kr(A.Earth,!0,t.room));a.position.set(i.x,0,i.z),a.castShadow=!0,a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),this.addEdge(i.x,i.z,2.45,this.edgeMat),this.tileMeshes.set(n,a);continue}if(t.kind===A.Earth||t.kind===A.Gold){const a=t.kind===A.Gold?o0():jl(),l=new W(a,Kr(t.kind,!1,t.room));l.position.set(i.x,0,i.z);const h=Math.max(0,Math.min(.95,t.digProgress||0)),c=1-h*.7,d=1-h*.85;if(l.scale.set(c,d,c),l.position.y=-h*1.15,l.castShadow=!0,l.receiveShadow=!0,l.userData.tileX=t.x,l.userData.tileY=t.y,this.gridGroup.add(l),t.kind===A.Gold&&h<.85){const f=f0();f.position.set(i.x,l.position.y,i.z),f.scale.set(c,d,c),f.userData.glitterFor=n,this.gridGroup.add(f)}const u=2.35*d+l.position.y;this.addEdge(i.x,i.z,Math.max(.4,u),t.kind===A.Gold?this.goldEdgeMat:this.earthEdgeMat),this.tileMeshes.set(n,l);continue}if(t.kind===A.Lava){const a=p0();a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(l=>{l.userData.tileX=t.x,l.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===A.Water){const a=m0();a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(l=>{l.userData.tileX=t.x,l.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===A.BridgeWood||t.kind===A.BridgeStone){const a=g0(t.kind===A.BridgeStone);a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(l=>{l.userData.tileX=t.x,l.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===A.Claimed){const a=n0(t.room);a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(l=>{l.userData.tileX=t.x,l.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a)}else{const a=new W(s0(),Oi(t.kind,t.room));a.position.set(i.x,0,i.z),a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),this.tileMeshes.set(n,a)}if(t.kind===A.Heart){const a=l0();a.position.set(i.x,0,i.z),this.gridGroup.add(a),this.heartGroup=a}const r=d0(t.room);r&&(r.position.set(i.x,.18,i.z),this.gridGroup.add(r));const o=u0(t.room);if(o&&(o.position.set(i.x,.14,i.z),this.gridGroup.add(o)),t.door===rt.Closed||t.door===rt.Open){const a=v0(t.door);a.position.set(i.x,.02,i.z),!!e.get(t.x+1,t.y)&&(e.get(t.x+1,t.y).fortified||e.get(t.x+1,t.y).kind===A.Earth||e.get(t.x+1,t.y).kind===A.Gold||e.get(t.x+1,t.y).kind===A.Rock)||!!e.get(t.x-1,t.y)&&(e.get(t.x-1,t.y).fortified||e.get(t.x-1,t.y).kind===A.Earth||e.get(t.x-1,t.y).kind===A.Gold||e.get(t.x-1,t.y).kind===A.Rock)||(a.rotation.y=Math.PI/2),this.gridGroup.add(a)}if(t.trap===Mt.Sentry){const a=x0();a.position.set(i.x+.15,.02,i.z-.15),this.gridGroup.add(a)}if(t.rally){const a=_0();a.position.set(i.x-.25,.02,i.z+.25),this.gridGroup.add(a)}if(t.torch){const a=this.torches.filter(u=>u.torchLight).length<12,l=h0(a);let h=.65,c=0;const d=[[1,0,.65,0],[-1,0,-.65,0],[0,1,0,.65],[0,-1,0,-.65]];for(const[u,f,g,v]of d){const m=e.get(t.x+u,t.y+f);if(m&&(m.kind===A.Earth||m.kind===A.Gold||m.kind===A.Rock||m.fortified)){h=g,c=v;break}}l.position.set(i.x+h,0,i.z+c),this.gridGroup.add(l),this.torches.push(l)}}this.syncMarkOverlay(e),this.syncFogOverlay(e)}syncMarkOverlay(e){for(;this.markOverlay.children.length;){const t=this.markOverlay.children.pop();this.markOverlay.remove(t);const i=t;i.material&&i.material.userData?.disposeMat&&i.material.dispose()}for(const t of e.tiles){if(!t.mark)continue;const i=e.tileToWorld(t.x,t.y),n=Math.max(0,Math.min(.95,t.digProgress||0)),r=1-n*.85,o=t.kind===A.Earth||t.kind===A.Gold?Math.max(.5,2.42*r-n*1.15):.2,a=new Vt({color:t.mark===1?16724770:t.mark===2?4500223:13421738,transparent:!0,opacity:.7,depthWrite:!1});a.userData.disposeMat=!0;const l=new W(this.markPlaneGeo,a);if(l.rotation.x=-Math.PI/2,l.position.set(i.x,o,i.z),this.markOverlay.add(l),t.mark===1&&(t.kind===A.Earth||t.kind===A.Gold)){const h=new Qi({color:16729122,transparent:!0,opacity:.85});h.userData.disposeMat=!0;const c=new dg(this.digWireGeo,h);c.position.set(i.x,1.1*r-n*1.15,i.z),c.scale.set(1,Math.max(.25,r),1),this.markOverlay.add(c)}}}syncFogOverlay(e){const t=[];for(const r of e.tiles){const o=`${r.x},${r.y}`,a=this.tileMeshes.get(o);r.explored?a&&!a.visible&&(a.visible=!0):(t.push(r),a&&(a.visible=!1))}const i=Math.max(t.length,1);if(!this.fogInstanced||this.fogCapacity<i){this.fogInstanced&&(this.fogOverlay.remove(this.fogInstanced),this.fogInstanced=null);const r=Math.max(i,256),o=new cg(this.fogBoxGeo,this.fogMat,r);o.instanceMatrix.setUsage(Lc),o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,this.fogInstanced=o,this.fogCapacity=r,this.fogOverlay.add(o)}const n=this.fogInstanced;for(let r=0;r<t.length;r++){const o=t[r],a=e.tileToWorld(o.x,o.y);this.fogDummy.position.set(a.x,1.9,a.z),this.fogDummy.scale.set(1,1,1),this.fogDummy.updateMatrix(),n.setMatrixAt(r,this.fogDummy.matrix)}n.count=t.length,n.instanceMatrix.needsUpdate=!0,n.visible=t.length>0}addEdge(e,t,i,n){const r=new zo(a0(i),n);r.position.set(e,0,t),this.gridGroup.add(r)}updateDigVisual(e,t,i,n){const r=`${e},${t}`,o=this.tileMeshes.get(r);if(!o)return;const a=Math.max(0,Math.min(.95,i||0)),l=1-a*.7,h=1-a*.85;o.scale.set(l,h,l),o.position.y=-a*1.15;for(const c of this.gridGroup.children)c.userData?.glitterFor===r&&(c.position.y=o.position.y,c.scale.set(l,h,l),c.visible=a<.85&&n===A.Gold)}setHover(e,t,i,n=16755232){this.markerMesh.visible=i,i&&(this.markerMesh.position.x=e,this.markerMesh.position.z=t,this.markerMesh.material.color.setHex(n))}setSelectRing(e,t,i){this.selectRing.visible=i,i&&(this.selectRing.position.x=e,this.selectRing.position.z=t)}clearEntities(){for(;this.entityGroup.children.length;)this.entityGroup.remove(this.entityGroup.children[0])}addEntityMesh(e){this.entityGroup.add(e)}removeEntityMesh(e){this.entityGroup.remove(e)}createEntityVisual(e,t,i){return c0(t,i,e)}trimFx(){for(;this.fxGroup.children.length>this.FX_CAP;){const e=this.fxGroup.children[0];this.disposeFxChild(e),this.fxGroup.remove(e)}}disposeFxChild(e){const t=e;if(t.isMesh){const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const r of n)r&&r.userData?.disposeMat&&r.dispose()}const i=e;if(i.isLine&&i.geometry&&i.geometry.userData?.disposeGeo&&i.geometry.dispose(),i.isLine){const n=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const r of n)r&&r.userData?.disposeMat&&r.dispose()}}setDigLoad(e){this.digLoad!==e&&(this.digLoad=e,e?(this.useComposer=!1,this.bloomPass.enabled=!1,this.renderer.setPixelRatio(Math.min(this.basePixelRatio,1)),this.renderer.shadowMap.enabled=!1,this.dirLight&&(this.dirLight.castShadow=!1),this.trimFx()):(this.bloomPass.enabled=!0,this.useComposer=!this.contextLost,this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.shadowMap.enabled=!0,this.dirLight&&(this.dirLight.castShadow=!0),this.onResize()))}spawnFx(e,t,i=.6){if(this.fxGroup.children.length>=this.FX_CAP)return;const n=new Vt({color:t,transparent:!0,opacity:.9});n.userData.disposeMat=!0;const r=new W(this.fxSparkGeo,n);r.position.copy(e),r.position.y+=.5,this.fxGroup.add(r);const o=r;o._fxStart=this.clock,o._fxLife=i}spawnCareSparks(e,t,i,n=!1){this.fxGroup.children.length>this.FX_CAP-8&&this.trimFx();const r=i==="heal"?5636010:16763955,o=i==="heal"?13172712:16772795,a=i==="heal"?2817928:16755234,l=n?this.digLoad?6:10:this.digLoad?3:5;for(let h=0;h<l&&!(this.fxGroup.children.length>=this.FX_CAP);h++){const c=.7+Math.random()*.6,d=h%3===0?o:h%3===1?r:a,u=new Vt({color:d,transparent:!0,opacity:1,depthWrite:!1});u.userData.disposeMat=!0;const f=new W(this.fxSparkGeo,u);f.scale.setScalar(c),f.position.set(e+(Math.random()-.5)*.85,.45+Math.random()*.7,t+(Math.random()-.5)*.85);const g=f;g._fxStart=this.clock,g._fxLife=1.2+Math.random()*.7,g._vx=(Math.random()-.5)*1.4,g._vy=.9+Math.random()*1.6,g._vz=(Math.random()-.5)*1.4,g._fxFloat=!0,this.fxGroup.add(f)}if(this.fxGroup.children.length<this.FX_CAP){const h=new Vt({color:r,transparent:!0,opacity:.85,depthWrite:!1});h.userData.disposeMat=!0;const c=new W(this.fxGlowGeo,h);c.scale.setScalar(n?1.3:.95),c.position.set(e,.7,t);const d=c;d._fxStart=this.clock,d._fxLife=n?1.8:1.4,d._vx=0,d._vy=.55,d._vz=0,d._fxFloat=!0,this.fxGroup.add(c)}}spawnDigDebris(e,t,i=12615744){this.fxGroup.children.length>this.FX_CAP-4&&this.trimFx();const n=this.digLoad?2:4;for(let r=0;r<n&&!(this.fxGroup.children.length>=this.FX_CAP);r++){const o=new Vt({color:i,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const a=new W(this.fxDebrisGeo,o),l=.7+Math.random()*.8;a.scale.set(l,l*.8,l),a.position.set(e+(Math.random()-.5)*.6,.6+Math.random()*.8,t+(Math.random()-.5)*.6);const h=a;h._fxStart=this.clock,h._fxLife=.35+Math.random()*.25,h._vx=(Math.random()-.5)*3,h._vy=1.5+Math.random()*2.5,h._vz=(Math.random()-.5)*3,this.fxGroup.add(a)}}pickTile(e,t){const i=new Ul;i.setFromCamera(new le(e,t),this.camera);const n=i.intersectObjects(this.gridGroup.children,!0);for(const o of n){let a=o.object;for(;a;){if(a.userData&&typeof a.userData.tileX=="number")return{x:o.point.x,z:o.point.z,tileX:a.userData.tileX,tileY:a.userData.tileY};a=a.parent}}const r=this.raycastGround(e,t);return r?{x:r.x,z:r.z}:null}spawnLightning(e,t){const i=[e.clone(),t.clone().add(new E(0,1,0))],n=e.clone().lerp(t,.5);n.y+=2+Math.random(),n.x+=(Math.random()-.5)*2,i.splice(1,0,n);const r=new Tt().setFromPoints(i);r.userData.disposeGeo=!0;const o=new Qi({color:11197951,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const a=new zo(r,o);this.fxGroup.add(a);const l=a;l._fxStart=this.clock,l._fxLife=.35}update(e){if(this.clock+=e,this.heartGroup?.heartCore){const t=1+Math.sin(this.clock*3)*.05;this.heartGroup.heartCore.scale.setScalar(t),this.heartGroup.heartLight&&(this.heartGroup.heartLight.intensity=1.1+Math.sin(this.clock*3)*.25),this.heartGroup.rotation.y+=e*.3}for(const t of this.torches)t.torchLight&&(t.torchLight.intensity=2.8+Math.random()*.8+Math.sin(this.clock*8+t.position.x)*.35),t.flame&&t.flame.scale.setScalar(.9+Math.random()*.25);for(let t=this.fxGroup.children.length-1;t>=0;t--){const i=this.fxGroup.children[t];if(i._fxStart!==void 0&&i._fxLife!==void 0){const n=this.clock-i._fxStart,r=i._fxLife;if(n>r)this.disposeFxChild(i),this.fxGroup.remove(i);else if(i.material){const o=i.material,a=n/r;o.opacity!==void 0&&(o.opacity=Math.max(0,1-a*a));const l=!!i._fxFloat;if(i._vx!==void 0)if(i.position.x+=(i._vx??0)*e,i.position.y+=(i._vy??0)*e,i.position.z+=(i._vz??0)*e,i._vy=(i._vy??0)-(l?1.2:6)*e,l){const h=1+Math.sin(a*Math.PI)*.45;i.scale.setScalar(h),i.rotation.y+=e*2}else i.rotation.x+=e*4,i.rotation.z+=e*3;else i.position.y+=e*1.5}}}}render(){if(!this.contextLost)try{this.useComposer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderFails=0}catch(e){this.renderFails++,console.error("[underkeep] render failed",e),this.useComposer=!1;try{this.renderer.render(this.scene,this.camera)}catch(t){console.error("[underkeep] fallback render failed",t),this.renderFails>=3&&(this.contextLost=!0,this.onContextLost?.())}}}raycastGround(e,t){const i=new Ul;i.setFromCamera(new le(e,t),this.camera);const n=new Bi(new E(0,1,0),0),r=new E;return i.ray.intersectPlane(n,r)?r:null}}const Yl=["treasury","lair","hatchery","training","library","portal","guard","door","sentry","rally","bridgeWood","bridgeStone"];class M0{goldEl;manaEl;manaBar;workersEl;creaturesEl;mentorEl;mentorText;tooltipEl;overlay;overlayTitle;overlayMsg;buildSheet;spellsSheet;btnBuild;btnSpells;mentorTimer=0;mentorQueue=[];inspectorEl;inspName;inspJob;inspHp;inspHpBar;inspHunger;inspTired;inspMood;inspMoodBar;inspEfficiency;onToolChange=null;onSpell=null;onOverlayContinue=null;onNewGame=null;onInspectorClose=null;constructor(){this.goldEl=document.getElementById("gold-value"),this.manaEl=document.getElementById("mana-value"),this.manaBar=document.getElementById("mana-bar"),this.workersEl=document.getElementById("workers-value"),this.creaturesEl=document.getElementById("creatures-value"),this.mentorEl=document.getElementById("mentor"),this.mentorText=document.getElementById("mentor-text"),this.tooltipEl=document.getElementById("tooltip"),this.overlay=document.getElementById("overlay"),this.overlayTitle=document.getElementById("overlay-title"),this.overlayMsg=document.getElementById("overlay-msg"),this.buildSheet=document.getElementById("build-sheet"),this.spellsSheet=document.getElementById("spells-sheet"),this.btnBuild=document.getElementById("btn-build"),this.btnSpells=document.getElementById("btn-spells"),this.inspectorEl=document.getElementById("inspector"),this.inspName=document.getElementById("insp-name"),this.inspJob=document.getElementById("insp-job"),this.inspHp=document.getElementById("insp-hp"),this.inspHpBar=document.getElementById("insp-hp-bar"),this.inspHunger=document.getElementById("insp-hunger"),this.inspTired=document.getElementById("insp-tired"),this.inspMood=document.getElementById("insp-mood"),this.inspMoodBar=document.getElementById("insp-mood-bar"),this.inspEfficiency=document.getElementById("insp-efficiency"),document.getElementById("insp-close")?.addEventListener("click",()=>{this.hideInspector(),this.onInspectorClose?.()}),document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.tool;this.setActiveTool(t),this.onToolChange?.(t),Yl.includes(t)&&this.closeSheets()})}),document.querySelectorAll(".spell").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.spell;this.onSpell?.(t),(t==="speed"||t==="lightning"||t==="possess")&&this.closeSheet("spells")})}),document.getElementById("overlay-btn").addEventListener("click",()=>{this.hideOverlay(),this.onOverlayContinue?.()}),document.getElementById("overlay-btn-secondary")?.addEventListener("click",()=>{this.hideOverlay(),this.onNewGame?.()}),document.getElementById("btn-new-game")?.addEventListener("click",()=>{this.onNewGame?.()}),this.btnBuild?.addEventListener("click",()=>this.toggleSheet("build")),this.btnSpells?.addEventListener("click",()=>this.toggleSheet("spells")),document.getElementById("btn-build-desktop")?.addEventListener("click",()=>this.toggleSheet("build")),document.getElementById("btn-spells-desktop")?.addEventListener("click",()=>this.toggleSheet("spells")),document.querySelectorAll(".sheet-close").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.close;(t==="build"||t==="spells")&&this.closeSheet(t)})}),document.getElementById("mentor-dismiss")?.addEventListener("click",()=>this.dismissMentor())}sheetButtons(e){return(e==="build"?["btn-build","btn-build-desktop"]:["btn-spells","btn-spells-desktop"]).map(i=>document.getElementById(i)).filter(i=>!!i)}toggleSheet(e){const t=e==="build"?this.buildSheet:this.spellsSheet,i=e==="build"?this.spellsSheet:this.buildSheet,n=t.hasAttribute("hidden");i.setAttribute("hidden","");for(const r of[...this.sheetButtons("build"),...this.sheetButtons("spells")])r.classList.remove("active"),r.setAttribute("aria-expanded","false");if(n){t.removeAttribute("hidden");for(const r of this.sheetButtons(e))r.classList.add("active"),r.setAttribute("aria-expanded","true")}else t.setAttribute("hidden","")}closeSheet(e){(e==="build"?this.buildSheet:this.spellsSheet).setAttribute("hidden","");for(const i of this.sheetButtons(e))i.classList.remove("active"),i.setAttribute("aria-expanded","false")}closeSheets(){this.closeSheet("build"),this.closeSheet("spells")}setActiveTool(e){document.querySelectorAll(".tool").forEach(t=>{t.classList.toggle("active",t.dataset.tool===e)}),Yl.includes(e)?this.btnBuild?.classList.add("active"):(e==="select"||e==="dig"||e==="claim"||e==="fortify")&&this.btnBuild?.classList.remove("active")}updateStats(e,t,i,n,r){const o=Number.isFinite(e)?Math.max(0,e):0,a=Number.isFinite(i)&&i>0?i:1,l=Number.isFinite(t)?Math.max(0,Math.min(a,t)):0;this.goldEl.textContent=String(Math.floor(o)),this.manaEl.textContent=`${Math.floor(l)}/${Math.floor(a)}`;const h=Math.max(0,Math.min(100,l/a*100));this.manaBar.style.width=`${Number.isFinite(h)?h:0}%`,this.workersEl.textContent=String(Math.max(0,n|0)),this.creaturesEl.textContent=String(Math.max(0,r|0))}setSpellAffordable(e,t){document.querySelectorAll(`.spell[data-spell="${e}"]`).forEach(i=>{i.disabled=!t})}say(e){this.mentorQueue.push(e),this.mentorTimer<=0&&this.popMentor()}sayNow(e){this.mentorQueue.length=0,this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}dismissMentor(){this.mentorTimer=0,this.mentorQueue.length=0,this.mentorEl.classList.remove("visible")}popMentor(){const e=this.mentorQueue.shift();if(!e){this.mentorEl.classList.remove("visible");return}this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}setTooltip(e){this.tooltipEl.textContent=e}update(e){this.mentorTimer>0&&(this.mentorTimer-=e,this.mentorTimer<=0&&this.popMentor())}showInspector(e){try{const t=(u,f,g,v=f)=>Number.isFinite(u)?Math.max(f,Math.min(g,u)):v,i=t(e.maxHp,1,9999,1),n=t(e.hp,0,i,0),r=t(e.hunger,0,100,0),o=t(e.tired,0,100,0),a=t(e.mood,0,100,50);let l=Number.isFinite(e.efficiency)?e.efficiency:.85;l>1.5&&(l=l/100),l=t(l,0,1.2,.85);const h=Math.round(l*100);this.inspName.textContent=e.held?`${e.kind} (held)`:e.kind,this.inspJob.textContent=e.job||"Idle",this.inspHp.textContent=`${Math.ceil(n)}/${Math.ceil(i)}`;const c=t(n/i*100,0,100,0);this.inspHpBar.style.width=`${c}%`,this.inspHunger.textContent=`${Math.floor(r)}`,this.inspTired.textContent=`${Math.floor(o)}`;const d=a>=75?"Happy":a>=50?"Content":a>=30?"Grumpy":a>=15?"Angry":"Leaving?";this.inspMood.textContent=`${Math.floor(a)} · ${d}`,this.inspMoodBar.style.width=`${t(a,0,100,0)}%`,this.inspEfficiency.textContent=`${h}%`,this.inspectorEl.classList.remove("hidden")}catch(t){console.warn("[underkeep] showInspector failed",t);try{this.inspectorEl.classList.add("hidden")}catch{}}}hideInspector(){this.inspectorEl.classList.add("hidden")}showOverlay(e,t,i="Continue",n){this.overlayTitle.textContent=e,this.overlayMsg.textContent=t,document.getElementById("overlay-btn").textContent=i;const r=document.getElementById("overlay-btn-secondary");r&&(n?(r.textContent=n,r.classList.remove("hidden")):r.classList.add("hidden")),this.overlay.classList.remove("hidden")}hideOverlay(){this.overlay.classList.add("hidden")}}const ne={start:"The earth awaits your cruelty, Keeper. Dig. Claim. Thrive.",resume:"Welcome back, Keeper. Your dungeon endures — dig on.",newGame:"A fresh Underkeep. The old one is dust.",firstGold:"Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",firstRoom:"A room! How civilized. Your minions prefer beds to sleeping in the mud.",portal:"The Portal hums. Hungry things beyond the veil hear its song.",skitterwing:"A Skitterwing flutters in. Fragile, but it sees what you cannot.",rattlekin:"Rattlekin arrive — bony enthusiasm and questionable hygiene.",emberling:"An Emberling. Do try not to burn down your own treasury.",gravemage:"A Gravemage darkens the Portal. Point them at the Library — research feeds your spells.",researchHeal:"Library research unlocks Heal! Mend your bruised nightmares.",researchDone:"Research rank %r complete. Spells grow sharper in the dark.",levelUp:"Training pays off — a minion levels up!",heroes:"Heroes at the gate! How quaint. Show them the meaning of Underkeep.",worker:"Another Scrabbler clawed into being. Point it at dirt and watch miracles.",heartHurt:"Your Heart bleeds! Protect it, or this story ends poorly.",win:"The heroes fall. The dark endures. For now.",lose:"The Heart is silent. The Underkeep… underwhelms.",slap:"A firm slap. Back to work!",slapAlt:"A firm slap. Morale through violence — classic.",speed:"Haste, my little nightmares. The clock is cruel.",lightning:"Heaven's temper, redirected. Delightful.",heal:"Green fire stitches flesh. The Library earns its keep.",claim:"Claimed land feeds your mana. Ambition has a wattage.",lairBuilt:"A Lair. Beds for the weary and the wounded. Capacity equals tiles.",lairUse:"Minions claim their bedrolls. Tired claws seek the Lair.",bedClaim:"A minion claims a Lair bed.",lairResting:"A minion is resting in the Lair…",lairFull:"Every bed is taken. Expand the Lair or expect cranky minions.",hatcheryBuilt:"A Hatchery. Nest-food grows while you scheme — hungry mouths will come.",hatcheryUse:"Feast! The Hatchery soothes rumbling guts. Work resumes after.",feasting:"Feasting at the Hatchery.",hatcheryHungry:"The nests are bare. Wait for more Hatchery food… or build more nests.",pickUp:"Into the Hand. Drop them where the work is — or slap sense into them.",drop:"Back on their feet. Back to the dirt.",moodLow:"A minion's mood is crumbling. Beds, food, and space — or they may leave.",sluggishDig:"Sluggish claws… mood is dragging the dig.",leaveThreat:"A minion threatens to leave the Underkeep…",doorBuilt:"A wooden door bars the corridor. Heroes hate hinges.",doorOpen:"Door swings open — minions pass; heroes still hesitate if you close it again.",doorClosed:"Door sealed. Heroes bounce. Creatures can pry it open.",sentryBuilt:"Sentry trap armed. Heroes who tread here learn about arrows.",sentryFire:"Twang! The Sentry greets a hero with sharp hospitality.",guardBuilt:"Guard Room raised. Fighters will hold the line when idle.",rallyPlanted:"Rally flag planted! Call to arms — minions hold this tile.",rallyCleared:"Rally flag struck. Back to ordinary scheming.",groupSelect:"Squad marked. Shift-click or drag-box to gather more — then click a tile to attack-move.",attackMove:"Attack-move! Selected fighters advance and engage.",attackHero:"Hunt them down! Fighters surge toward the heroes.",fog:"Beyond the torchlight — unexplored dark. Dig and claim to push the fog back.",autoFortify:"Idle Scrabblers reinforce soft earth walls on their own. Rock still laughs at them.",lava:"Lava! It cooks the careless. Emberlings laugh; Scrabblers refuse the path — build a bridge.",bridgeWood:"Wooden planks over the fire. Crude, fragrant, and gloriously flammable.",bridgeStone:"Stone bridge — heavier gold, steadier nerves. The lava still sulks beneath.",possess:"Possession! Ride a minion's senses. WASD to steer, Esc to return to the Keeper throne.",possessArm:"Choose a vessel. Click any living minion to Possess them.",possessEnd:"Back in the Keeper's seat. The vessel blinks, confused but intact.",payday:"Payday! %g gold leaves the Treasury — wages keep moods from mutiny.",paydayFail:"Payday failed — the Treasury is empty! Moods crash. Mint gold or expect desertions.",heroesSoon:"Footsteps in the dark… heroes approach. Fortify doors, set traps, rally fighters.",heroesImminent:"Steel at the gate! Heroes arrive any moment.",heroEngage:"Heroes clash with your minions — doors and traps earn their keep.",heroDown:"A hero falls. The Underkeep drinks deep."};class $l{width;height;tiles;heartPos={x:0,y:0};constructor(e=48,t=48){this.width=e,this.height=t,this.tiles=[];for(let i=0;i<t;i++)for(let n=0;n<e;n++)this.tiles.push({x:n,y:i,kind:A.Earth,room:D.None,mark:Ne.None,fortified:!1,goldAmount:0,claimedProgress:0,digProgress:0,torch:!1,door:rt.None,trap:Mt.None,rally:!1,explored:!1});this.generate()}idx(e,t){return t*this.width+e}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}get(e,t){return this.inBounds(e,t)?this.tiles[this.idx(e,t)]:null}worldToTile(e,t){return{x:Math.floor(e/Ve+this.width/2),y:Math.floor(t/Ve+this.height/2)}}tileToWorld(e,t){return{x:(e-this.width/2+.5)*Ve,z:(t-this.height/2+.5)*Ve}}generate(){const e=Math.floor(this.width/2),t=Math.floor(this.height/2);this.heartPos={x:e,y:t};for(let n=0;n<this.height;n++)for(let r=0;r<this.width;r++){const o=this.get(r,n);(r<2||n<2||r>=this.width-2||n>=this.height-2)&&(o.kind=A.Rock)}for(let n=0;n<14;n++){let r=4+Math.floor(Math.random()*(this.width-8)),o=4+Math.floor(Math.random()*(this.height-8));const a=4+Math.floor(Math.random()*8);for(let l=0;l<a;l++){const h=this.get(r,o);h&&h.kind===A.Earth&&(h.kind=A.Gold,h.goldAmount=200+Math.floor(Math.random()*300)),r+=Math.floor(Math.random()*3)-1,o+=Math.floor(Math.random()*3)-1,r=Math.max(3,Math.min(this.width-4,r)),o=Math.max(3,Math.min(this.height-4,o))}}for(let n=0;n<8;n++){let r=5+Math.floor(Math.random()*(this.width-10)),o=5+Math.floor(Math.random()*(this.height-10));if(Math.abs(r-e)<7&&Math.abs(o-t)<7)continue;const a=2+Math.floor(Math.random()*3);for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++){if(Math.abs(h)+Math.abs(l)>a)continue;const c=this.get(r+h,o+l);c&&c.kind===A.Earth&&(c.kind=A.Rock,c.goldAmount=0)}}for(let n=-3;n<=3;n++)for(let r=-3;r<=3;r++){const o=this.get(e+r,t+n);if(!o)continue;if(r===0&&n===0){o.kind=A.Heart,o.room=D.None;continue}const a=Math.max(Math.abs(r),Math.abs(n));(a<=2||a===3&&r===0&&n===-3)&&(o.kind=A.Claimed,o.claimedProgress=1)}for(let n=t-8;n<t-3;n++)for(let r=e-1;r<=e+1;r++){const o=this.get(r,n);o&&o.kind!==A.Rock&&o.kind!==A.Heart&&(o.kind=A.Claimed,o.claimedProgress=1)}const i=(n,r,o)=>{const a=this.get(n,r);a&&(a.kind===A.Earth||a.kind===A.Gold)&&(a.kind=A.Gold,a.goldAmount=Math.max(a.goldAmount,o),a.fortified=!1)};for(let n=0;n<5;n++)i(e-1+n,t+3,380+n*30);for(let n=0;n<4;n++)i(e+n,t+4,320+n*40);for(let n=0;n<4;n++)i(e+3,t-1+n,360+n*25);for(let n=0;n<3;n++)i(e+4,t+n,300+n*35);this.paintHazardBlob(e-10,t+2,3,A.Lava),this.paintHazardBlob(e-12,t-1,2,A.Lava);for(let n=0;n<5;n++){const r=this.get(e+6+n%2,t+6+Math.floor(n/2));r&&(r.kind===A.Earth||r.kind===A.Gold)&&(r.kind=A.Lava,r.goldAmount=0,r.fortified=!1)}this.paintHazardBlob(e-8,t-8,2,A.Water),this.refreshTorches(),this.seedExploration()}paintHazardBlob(e,t,i,n){const r=this.heartPos.x,o=this.heartPos.y;for(let a=-i;a<=i;a++)for(let l=-i;l<=i;l++){if(l*l+a*a>i*i+.5)continue;const h=e+l,c=t+a;if(Math.abs(h-r)<5&&Math.abs(c-o)<5)continue;const d=this.get(h,c);d&&(d.kind===A.Earth||d.kind===A.Gold)&&(d.kind=n,d.goldAmount=0,d.fortified=!1,d.digProgress=0,d.room=D.None)}}refreshTorches(){for(const e of this.tiles)e.torch=!1;for(const e of this.tiles){if(e.kind!==A.Claimed&&e.kind!==A.Dirt&&e.kind!==A.Heart||(e.x+e.y)%4!==0)continue;const t=[[1,0],[-1,0],[0,1],[0,-1]];for(const[i,n]of t){const r=this.get(e.x+i,e.y+n);if(r&&(r.kind===A.Earth||r.kind===A.Gold||r.kind===A.Rock||r.fortified)){e.torch=!0;break}}}}isSolid(e,t){const i=this.get(e,t);return i?i.kind===A.Earth||i.kind===A.Gold||i.kind===A.Rock||i.fortified:!0}isHazard(e,t){const i=this.get(e,t);return!!i&&(i.kind===A.Lava||i.kind===A.Water)}isBridge(e,t){const i=this.get(e,t);return!!i&&(i.kind===A.BridgeWood||i.kind===A.BridgeStone)}isWalkable(e,t,i){const n=this.get(e,t);return!n||n.fortified?!1:!!(n.kind===A.Dirt||n.kind===A.Claimed||n.kind===A.Heart||n.kind===A.BridgeWood||n.kind===A.BridgeStone||i?.allowHazard&&(n.kind===A.Lava||n.kind===A.Water))}canPlaceBridge(e,t){const i=this.get(e,t);return!i||i.kind!==A.Lava&&i.kind!==A.Water?!1:this.neighbors4(e,t).some(n=>!n.fortified&&(n.kind===A.Dirt||n.kind===A.Claimed||n.kind===A.Heart||n.kind===A.BridgeWood||n.kind===A.BridgeStone))}isDiggable(e,t){const i=this.get(e,t);return!i||i.fortified?!1:i.kind===A.Earth||i.kind===A.Gold}countClaimed(){let e=0;for(const t of this.tiles)(t.kind===A.Claimed||t.kind===A.Heart)&&e++;return e}countRoom(e){let t=0;for(const i of this.tiles)i.room===e&&t++;return t}neighbors4(e,t){const i=[];for(const[n,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.get(e+n,t+r);o&&i.push(o)}return i}isReachableSolid(e,t){return this.neighbors4(e,t).some(i=>this.isWalkable(i.x,i.y))}hasAdjacentClaimed(e,t){return this.neighbors4(e,t).some(i=>i.kind===A.Claimed||i.kind===A.Heart)}blocksHero(e,t){const i=this.get(e,t);return!!i&&i.door===rt.Closed}canPlaceDoor(e,t){const i=this.get(e,t);if(!i||i.kind!==A.Claimed||i.room!==D.None)return!1;if(i.door!==rt.None)return!0;let n=0,r=0,o=!1;for(const a of this.neighbors4(e,t))(a.fortified||a.kind===A.Earth||a.kind===A.Gold||a.kind===A.Rock)&&n++,!a.fortified&&(a.kind===A.Dirt||a.kind===A.Claimed||a.kind===A.Heart||a.kind===A.BridgeWood||a.kind===A.BridgeStone)&&r++,a.room!==D.None&&(o=!0);return n>=1&&r>=1||o}seedExploration(){for(const e of this.tiles)e.explored=!1;for(const e of this.tiles)(e.kind===A.Claimed||e.kind===A.Heart||e.kind===A.Dirt)&&(e.explored=!0);for(const e of this.tiles)if(e.explored&&!(e.kind!==A.Claimed&&e.kind!==A.Heart&&e.kind!==A.Dirt))for(const t of this.neighbors4(e.x,e.y))t.explored=!0}revealTile(e,t){const i=this.get(e,t);return!i||i.explored?!1:(i.explored=!0,!0)}revealAround(e,t,i=1){let n=!1;for(let r=-i;r<=i;r++)for(let o=-i;o<=i;o++)this.revealTile(e+o,t+r)&&(n=!0);return n}revealFromTerritory(){let e=!1;for(const t of this.tiles)if(!(t.kind!==A.Claimed&&t.kind!==A.Heart&&t.kind!==A.Dirt)){t.explored||(t.explored=!0,e=!0);for(const i of this.neighbors4(t.x,t.y))i.explored||(i.explored=!0,e=!0)}return e}isExplored(e,t){const i=this.get(e,t);return!!i&&i.explored}findPath(e,t,i,n,r){if(!this.inBounds(e,t)||!this.inBounds(i,n))return null;if(e===i&&t===n)return[{x:i,y:n}];const o=(p,x)=>x*this.width+p,a=[{x:e,y:t,f:0}],l=new Map,h=new Map;h.set(o(e,t),0);const c=new Set,d=(p,x)=>Math.abs(p-i)+Math.abs(x-n),u=!!r?.forHero,f=!!r?.allowHazard,g=(p,x)=>u&&this.blocksHero(p,x)?!1:!!(this.isWalkable(p,x,{allowHazard:f})||p===i&&x===n&&this.isDiggable(p,x)||p===i&&x===n&&p===this.heartPos.x&&x===this.heartPos.y),v=(p,x)=>{const w=this.get(p,x);return w?w.kind===A.Lava?4:w.kind===A.Water?3:1:1};let m=0;for(;a.length&&m++<5e3;){a.sort((w,y)=>w.f-y.f);const p=a.shift(),x=o(p.x,p.y);if(!c.has(x)){if(c.add(x),p.x===i&&p.y===n){const w=[{x:i,y:n}];let y=x;for(;l.has(y);){const I=l.get(y);w.push({x:I%this.width,y:Math.floor(I/this.width)}),y=I}return w.reverse(),w}for(const[w,y]of[[1,0],[-1,0],[0,1],[0,-1]]){const I=p.x+w,C=p.y+y;if(!this.inBounds(I,C)||!g(I,C))continue;const R=o(I,C);if(c.has(R))continue;const P=(h.get(x)??1/0)+v(I,C);P<(h.get(R)??1/0)&&(l.set(R,x),h.set(R,P),a.push({x:I,y:C,f:P+d(I,C)}))}}}return null}findPathAdjacent(e,t,i,n,r){let o=null;for(const[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=i+a,c=n+l;if(!this.isWalkable(h,c)||r?.forHero&&this.blocksHero(h,c))continue;const d=this.findPath(e,t,h,c,r);d&&(!o||d.length<o.length)&&(o=d)}return o}}const rr="underkeep-save-v1",S0=new Set(Object.values(ae)),w0=new Set([A.Rock,A.Earth,A.Gold,A.Dirt,A.Claimed,A.Heart,A.Wall,A.Lava,A.Water,A.BridgeWood,A.BridgeStone]);function si(s){return typeof s=="number"&&Number.isFinite(s)}function Bh(s,e,t){if(!s||typeof s!="object")return"not-object";const i=s;if(i.v!==1)return"bad-version";if(i.width!==e||i.height!==t)return"size-mismatch";if(!i.heartPos||!si(i.heartPos.x)||!si(i.heartPos.y))return"bad-heartPos";if(i.heartPos.x<0||i.heartPos.y<0||i.heartPos.x>=e||i.heartPos.y>=t)return"heartPos-oob";if(!Array.isArray(i.tiles)||i.tiles.length!==e*t)return"bad-tiles-length";if(!si(i.gold)||i.gold<0)return"bad-gold";if(!si(i.mana)||i.mana<0)return"bad-mana";if(!Array.isArray(i.creatures))return"bad-creatures";let n=0,r=0;for(let l=0;l<i.tiles.length;l++){const h=i.tiles[l];if(!h||typeof h!="object")return"bad-tile";if(!w0.has(h.kind))return"bad-tile-kind";h.kind===A.Heart&&n++,(h.kind===A.Earth||h.kind===A.Gold)&&r++}if(n<1)return"no-heart-tile";const o=i.heartPos.y*e+i.heartPos.x;if(i.tiles[o]?.kind!==A.Heart)return"heartPos-mismatch";if(!i.gameOver&&r<1)return"no-diggable";let a=0;for(const l of i.creatures){if(!l||typeof l!="object")return"bad-creature";if(!S0.has(l.kind))return"bad-creature-kind";if(!si(l.x)||!si(l.y))return"bad-creature-pos";l.kind===ae.Scrabbler&&a++}if(!i.gameOver&&a<1)return"no-scrabbler";if(i.cam){const l=i.cam;if(!si(l.tx)||!si(l.tz)||!si(l.cx)||!si(l.cy)||!si(l.cz))return"bad-cam"}return null}function b0(s,e){try{const t=localStorage.getItem(rr);if(!t)return null;const i=JSON.parse(t);if(s!=null&&e!=null){const r=Bh(i,s,e);if(r){console.warn("[underkeep] rejecting save:",r);try{localStorage.removeItem(rr)}catch{}return null}return i}if(!i||typeof i!="object")return null;const n=i;return n.v!==1||!Array.isArray(n.tiles)||!n.width||!n.height?null:n}catch(t){return console.warn("[underkeep] save parse failed",t),null}}function T0(s){try{localStorage.setItem(rr,JSON.stringify(s))}catch{}}function zi(){try{localStorage.removeItem(rr)}catch{}}function E0(s){return s.map(e=>({kind:e.kind,room:e.room,mark:e.mark,fortified:e.fortified,goldAmount:e.goldAmount,claimedProgress:e.claimedProgress,digProgress:e.digProgress,torch:e.torch,door:e.door??rt.None,trap:e.trap??Mt.None,rally:!!e.rally,explored:!!e.explored}))}function A0(s,e){const t=Math.min(s.length,e.length);for(let i=0;i<t;i++){const n=s[i],r=e[i];n.kind=r.kind,n.room=r.room,n.mark=r.mark,n.fortified=!!r.fortified,n.goldAmount=r.goldAmount??0,n.claimedProgress=r.claimedProgress??0,n.digProgress=r.digProgress??0,n.torch=!!r.torch,n.door=r.door??rt.None,n.trap=r.trap??Mt.None,n.rally=!!r.rally,n.explored=r.explored===void 0?!1:!!r.explored}}const C0=150,R0=100,Zr=25,Jr=40;class P0{grid;renderer;hud;creatures=[];gold=600;mana=50;tool="select";held=null;selected=null;selectedGroup=[];possessed=null;possessCamBackup=null;possessArmed=!1;lavaDmgAcc=0;paydayToastCooldown=0;boxSelecting=!1;boxStartClient=null;boxMoved=!1;boxPointerId=null;pendingPrimary=null;marqueeEl=null;heroWarn30=!1;heroWarn10=!1;heroEngageAnnounced=!1;gridDirty=!0;time=0;workerCostScale=0;portalCooldown=0;attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1};heroWaveSpawned=!1;heroWaveTimer=90;gameOver=!1;won=!1;paint=!1;lastPaint=null;camTarget=new E(0,0,0);keys=new Set;mentored=new Set;touchMode="none";touchStartTime=0;touchStartClient={clientX:0,clientY:0};touchMoved=!1;longPressTimer=null;pinchStartDist=0;pinchStartCamY=0;activeTouches=new Map;ignoreMouseUntil=0;panAccum={x:0,y:0};saveAcc=0;restoredFromSave=!1;hatcheryFood=0;foodRegenAcc=0;bedOwners=new Map;contextRecoveryShown=!1;marksDirty=!1;fogDirty=!1;rebuildCooldown=0;pendingStructuralRebuild=!1;researchProgress=0;researchRank=0;healUnlocked=!1;constructor(e){this.hud=new M0,this.marqueeEl=document.getElementById("select-marquee"),this.hud.onToolChange=i=>{this.tool=i,i!=="select"&&this.cancelBoxSelect()},this.hud.onSpell=i=>this.castSpell(i),this.hud.onOverlayContinue=()=>{this.gameOver&&(zi(),location.reload())},this.hud.onNewGame=()=>this.confirmNewGame(),this.hud.onInspectorClose=()=>this.clearSelection(),this.grid=new $l(40,40),this.renderer=new y0(e),this.renderer.onContextLost=()=>this.handleContextLost(),this.renderer.onContextRestored=()=>this.handleContextRestored();let t=!1;try{t=this.bootFromSaveOrFresh()}catch(i){console.error("[underkeep] boot failed — clearing save and starting Intro",i),zi(),this.resetRuntimeState(),this.startFresh(!0),t=!1}this.bindInput(e),this.rebuild(),this.syncAllEntityMeshes(),t&&this.isPlayableOrEnded()&&this.saveNow(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(i=>i.alive&&i.isWorker).length,this.creatures.filter(i=>i.alive&&!i.isWorker&&!i.isHero).length),this.markReady()}markReady(){document.body.classList.remove("booting")}handleContextLost(){this.contextRecoveryShown||(this.contextRecoveryShown=!0,this.hud.showOverlay("Graphics hiccup","The dungeon view lost its WebGL context (often after heavy digging). Reload to restore — your save is kept.","Reload Dungeon"),this.hud.onOverlayContinue=()=>{location.reload()})}handleContextRestored(){this.contextRecoveryShown=!1,this.gridDirty=!0,this.rebuild(),this.syncAllEntityMeshes(),this.hud.say("The Underkeep re-solidifies. Dig on, Keeper."),this.hud.hideOverlay()}isPlayableOrEnded(){if(this.gameOver)return!0;const e=this.grid.get(this.grid.heartPos.x,this.grid.heartPos.y);return!e||e.kind!==A.Heart||!this.grid.tiles.some(n=>n.kind===A.Earth||n.kind===A.Gold)?!1:this.creatures.filter(n=>n.alive&&n.isWorker).length>=1}syncAllEntityMeshes(){for(const e of this.creatures)e.alive&&e.syncMesh(this.time)}resetRuntimeState(){for(const e of this.creatures)try{this.renderer?.removeEntityMesh(e.mesh),e.mesh?.parent&&e.mesh.parent.remove(e.mesh)}catch{}this.creatures=[],this.gold=600,this.mana=50,this.tool="select",this.held=null,this.selected=null,this.selectedGroup=[],this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee(),this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1,this.hud.hideInspector(),this.time=0,this.workerCostScale=0,this.portalCooldown=0,this.attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1},this.heroWaveSpawned=!1,this.heroWaveTimer=90,this.gameOver=!1,this.won=!1,this.mentored=new Set,this.wageAcc=0,this.heartHp=500,this.restoredFromSave=!1,this.hatcheryFood=0,this.foodRegenAcc=0,this.bedOwners.clear(),this.contextRecoveryShown=!1,this.researchProgress=0,this.researchRank=0,this.healUnlocked=!1,this.exitPossession(!0),this.possessArmed=!1,this.lavaDmgAcc=0,this.paydayToastCooldown=0,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=0,this.grid=new $l(40,40)}bootFromSaveOrFresh(){const e=b0(this.grid.width,this.grid.height);if(!e)return this.startFresh(!0),!1;const t=Bh(e,this.grid.width,this.grid.height);if(t)return console.warn("[underkeep] invalid save on boot:",t),zi(),this.startFresh(!0),!1;try{this.applySave(e)}catch(i){return console.error("[underkeep] applySave threw",i),zi(),this.resetRuntimeState(),this.startFresh(!0),!1}return this.isPlayableOrEnded()?(this.restoredFromSave=!0,this.gameOver?this.hud.showOverlay(this.won?"Victory":"Defeat",this.won?ne.win+" The Underkeep stands.":ne.lose,"Try Again"):this.hud.say(ne.resume),!0):(console.warn("[underkeep] restored state not playable — falling back to Intro"),zi(),this.resetRuntimeState(),this.startFresh(!0),!1)}startFresh(e){this.creatures.length===0&&(this.spawnCreature(ae.Scrabbler,this.grid.heartPos.x+1,this.grid.heartPos.y),this.spawnCreature(ae.Scrabbler,this.grid.heartPos.x-1,this.grid.heartPos.y),this.spawnCreature(ae.Scrabbler,this.grid.heartPos.x,this.grid.heartPos.y+1));const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+4,28,t.z+18),this.renderer.camera.lookAt(this.camTarget),this.hud.say(ne.start),e&&this.hud.showOverlay("Underkeep","You are the Keeper of the Underkeep. Dig earth, claim territory, raise rooms, and crush the heroes who dare enter. The Dungeon Heart must not fall.","Begin")}mentioneOnce(e,t){this.mentored.has(e)||(this.mentored.add(e),this.hud.say(t))}confirmNewGame(){this.hud.showOverlay("New Game?","This clears your saved dungeon and starts fresh. Hard refresh will no longer restore the old map.","Keep Playing","Erase & Restart");const e=this.hud.onNewGame,t=this.hud.onOverlayContinue;this.hud.onOverlayContinue=()=>{this.hud.onNewGame=e,this.hud.onOverlayContinue=t},this.hud.onNewGame=()=>{zi();const i=new URL(location.href);i.searchParams.delete("shot"),i.searchParams.delete("pass"),location.replace(i.pathname+i.search+i.hash)}}buildSave(){return{v:1,width:this.grid.width,height:this.grid.height,heartPos:{...this.grid.heartPos},tiles:E0(this.grid.tiles),gold:this.gold,mana:this.mana,creatures:this.creatures.filter(e=>e.alive).map(e=>({kind:e.kind,x:e.x,y:e.y,wx:e.wx,wz:e.wz,hp:e.hp,maxHp:e.maxHp,level:e.level,goldCarried:e.goldCarried,hunger:e.hunger,sleepNeed:e.sleepNeed,trainNeed:e.trainNeed,isHero:e.isHero})),attracted:{...this.attracted},researchProgress:this.researchProgress,researchRank:this.researchRank,healUnlocked:this.healUnlocked,heroWaveSpawned:this.heroWaveSpawned,heroWaveTimer:this.heroWaveTimer,workerCostScale:this.workerCostScale,portalCooldown:this.portalCooldown,time:this.time,wageAcc:this.wageAcc,mentored:[...this.mentored],gameOver:this.gameOver,won:this.won,cam:{tx:this.camTarget.x,tz:this.camTarget.z,cx:this.renderer.camera.position.x,cy:this.renderer.camera.position.y,cz:this.renderer.camera.position.z}}}saveNow(){this.gameOver||this.isPlayableOrEnded()&&T0(this.buildSave())}applySave(e){if(e.width!==this.grid.width||e.height!==this.grid.height)throw new Error("save size mismatch");A0(this.grid.tiles,e.tiles),this.grid.heartPos={x:e.heartPos.x,y:e.heartPos.y},this.grid.tiles.some(i=>i.explored)?this.grid.revealFromTerritory():this.grid.seedExploration(),this.gold=e.gold,this.mana=e.mana,this.attracted={skitterwing:!!e.attracted?.skitterwing,rattlekin:!!e.attracted?.rattlekin,emberling:!!e.attracted?.emberling,gravemage:!!e.attracted?.gravemage},this.researchProgress=e.researchProgress??0,this.researchRank=e.researchRank??0,this.healUnlocked=!!e.healUnlocked,this.heroWaveSpawned=!!e.heroWaveSpawned,this.heroWaveTimer=e.heroWaveTimer??90,this.workerCostScale=e.workerCostScale??0,this.portalCooldown=e.portalCooldown??0,this.time=e.time??0,this.wageAcc=e.wageAcc??0,this.mentored=new Set(e.mentored??[]),this.gameOver=!!e.gameOver,this.won=!!e.won;for(const i of this.creatures)this.renderer.removeEntityMesh(i.mesh),i.mesh.parent&&i.mesh.parent.remove(i.mesh);this.creatures=[];for(const i of e.creatures){const n=this.spawnCreature(i.kind,i.x,i.y);Number.isFinite(i.wx)&&Number.isFinite(i.wz)&&(n.wx=i.wx,n.wz=i.wz),n.hp=i.hp,n.maxHp=i.maxHp,n.level=i.level??1,n.goldCarried=i.goldCarried??0,n.hunger=i.hunger??0,n.sleepNeed=i.sleepNeed??0,n.trainNeed=i.trainNeed??0,n.mood=72,n.clampStats(),n.syncMesh(this.time)}const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);e.cam&&Number.isFinite(e.cam.tx)&&Number.isFinite(e.cam.tz)&&Number.isFinite(e.cam.cx)&&Number.isFinite(e.cam.cy)&&Number.isFinite(e.cam.cz)&&e.cam.cy>5?(this.camTarget.set(e.cam.tx,0,e.cam.tz),this.renderer.camera.position.set(e.cam.cx,e.cam.cy,e.cam.cz),this.renderer.camera.lookAt(this.camTarget)):(this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+4,28,t.z+18),this.renderer.camera.lookAt(this.camTarget)),this.gridDirty=!0}spawnCreature(e,t,i){const n=new kg(e,t,i,this.grid),r=Go[e],o=this.renderer.createEntityVisual(e,r.color,r.scale);n.setMesh(o);const a=o;return n.pickaxe=a.pickaxe??null,n.selectRing=a.selectRing??null,this.renderer.addEntityMesh(o),this.creatures.push(n),n}rebuild(){this.grid.refreshTorches(),this.renderer.rebuildGrid(this.grid),this.gridDirty=!1,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=.22}requestStructuralRebuild(){this.pendingStructuralRebuild=!0,this.gridDirty=!0}flushMarks(){this.marksDirty&&(this.renderer.syncMarkOverlay(this.grid),this.marksDirty=!1)}flushFog(){this.fogDirty&&(this.renderer.syncFogOverlay(this.grid),this.fogDirty=!1)}noteFogChange(e){e&&(this.fogDirty=!0)}safeMood(e,t){const i=Number.isFinite(e.mood)?e.mood:72,n=Number.isFinite(t)?t:i;e.mood=Math.max(0,Math.min(100,n))}pruneSelection(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero),this.selected&&(!this.selected.alive||this.selected.isHero)&&(this.selected=null),this.selected&&!this.selectedGroup.includes(this.selected)&&this.selectedGroup.push(this.selected),!this.selected&&this.selectedGroup.length&&(this.selected=this.selectedGroup[this.selectedGroup.length-1]),this.selectedGroup.length||(this.selected=null,this.hud.hideInspector())}catch(e){console.warn("[underkeep] pruneSelection failed",e),this.selected=null,this.selectedGroup=[];try{this.hud.hideInspector()}catch{}}}bindInput(e){window.addEventListener("keydown",n=>{this.keys.add(n.key.toLowerCase());const r={1:"select",2:"dig",3:"claim",4:"fortify",5:"treasury",6:"lair",7:"hatchery",8:"training",9:"library",0:"portal",g:"guard",d:"door",f:"sentry",y:"rally"};if(r[n.key]&&(this.tool=r[n.key],this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="q"&&this.castSpell("createWorker"),n.key.toLowerCase()==="e"&&this.castSpell("speed"),n.key.toLowerCase()==="r"&&this.castSpell("lightning"),n.key.toLowerCase()==="t"&&this.castSpell("heal"),n.key.toLowerCase()==="p"&&this.castSpell("possess"),n.key.toLowerCase()==="b"&&(this.tool="bridgeWood",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="n"&&(this.tool="bridgeStone",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()===" "&&this.held&&(n.preventDefault(),this.dropHeld()),n.key==="Escape"){if(this.possessed){this.exitPossession();return}this.cancelBoxSelect(),this.clearSelection(),this.possessArmed=!1}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),e.addEventListener("contextmenu",n=>n.preventDefault());const t=n=>n.preventDefault();e.addEventListener("gesturestart",t,{passive:!1}),e.addEventListener("gesturechange",t,{passive:!1}),e.addEventListener("mousedown",n=>{if(performance.now()<this.ignoreMouseUntil||this.gameOver)return;const r=this.pointerToTile(n,e);if(!r)return;const o=this.pointerToWorld(n,e)??new E;if(n.button===2){this.cancelBoxSelect(),this.handleSecondaryAt(r.x,r.y,o);return}if(n.button===0){if(this.tool==="select"&&!this.held){const a=this.creatureAt(r.x,r.y,o);if(!a||a.isHero){this.boxSelecting=!0,this.boxMoved=!1,this.boxStartClient={x:n.clientX,y:n.clientY},this.pendingPrimary={tx:r.x,ty:r.y,hit:o.clone(),shift:n.shiftKey};return}this.handlePrimaryAt(r.x,r.y,o,n.shiftKey);return}this.handlePrimaryAt(r.x,r.y,o,n.shiftKey)}}),e.addEventListener("mouseup",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.boxSelecting&&this.boxStartClient){const r=this.boxStartClient;if(this.boxMoved)this.selectCreaturesInScreenBox(e,r.x,r.y,n.clientX,n.clientY,n.shiftKey||!!this.pendingPrimary?.shift);else if(this.pendingPrimary){const o=this.pendingPrimary;this.handlePrimaryAt(o.tx,o.ty,o.hit,o.shift||n.shiftKey)}this.cancelBoxSelect()}this.paint=!1,this.lastPaint=null,this.flushMarks()}}),e.addEventListener("mouseleave",()=>{this.boxSelecting&&this.cancelBoxSelect()}),e.addEventListener("mousemove",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.updatePointerHover(n,e),this.boxSelecting&&this.boxStartClient&&this.tool==="select"){const r=n.clientX-this.boxStartClient.x,o=n.clientY-this.boxStartClient.y;Math.hypot(r,o)>8&&(this.boxMoved=!0,this.updateMarquee(this.boxStartClient.x,this.boxStartClient.y,n.clientX,n.clientY))}if(this.paint&&this.tool!=="select"){const r=this.pointerToTile(n,e);if(!r)return;(!this.lastPaint||this.lastPaint.x!==r.x||this.lastPaint.y!==r.y)&&(this.applyTool(r.x,r.y),this.lastPaint={...r})}if(this.held)try{const r=this.pointerToWorld(n,e);r&&Number.isFinite(r.x)&&Number.isFinite(r.z)&&(this.held.wx=r.x,this.held.wz=r.z)}catch(r){console.warn("[underkeep] held follow failed",r)}}}),e.addEventListener("wheel",n=>{n.preventDefault(),this.zoomBy(-Math.sign(n.deltaY)*1.5)},{passive:!1}),e.addEventListener("touchstart",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++){const a=n.changedTouches[o];this.activeTouches.set(a.identifier,{clientX:a.clientX,clientY:a.clientY})}const r=[...this.activeTouches.values()];if(r.length>=2){this.clearLongPress();const[o,a]=r;if(this.pinchStartDist=Math.hypot(o.clientX-a.clientX,o.clientY-a.clientY),this.pinchStartCamY=this.renderer.camera.position.y,this.touchMode==="tap"&&!this.touchMoved&&performance.now()-this.touchStartTime<280){const l=this.pointerToTile(this.touchStartClient,e);l&&this.handleSecondaryAt(l.x,l.y),this.touchMode="none",this.activeTouches.clear();return}this.touchMode="pinch",this.paint=!1;return}if(r.length===1){const o=r[0];this.touchStartClient={clientX:o.clientX,clientY:o.clientY},this.touchStartTime=performance.now(),this.touchMoved=!1,this.panAccum={x:0,y:0},this.touchMode="tap",this.clearLongPress(),this.longPressTimer=window.setTimeout(()=>{if(this.touchMode!=="tap"||this.touchMoved)return;this.touchMode="longpress";const a=this.pointerToTile(this.touchStartClient,e);a&&this.handleSecondaryAt(a.x,a.y);try{navigator.vibrate?.(15)}catch{}},450)}},{passive:!1}),e.addEventListener("touchmove",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let c=0;c<n.changedTouches.length;c++){const d=n.changedTouches[c];this.activeTouches.set(d.identifier,{clientX:d.clientX,clientY:d.clientY})}const r=[...this.activeTouches.values()];if(this.touchMode==="pinch"||r.length>=2){if(this.clearLongPress(),this.touchMode="pinch",r.length>=2){const[c,d]=r,u=Math.hypot(c.clientX-d.clientX,c.clientY-d.clientY);if(this.pinchStartDist>0){const f=u/this.pinchStartDist,g=this.renderer.camera,v=Ca.clamp(this.pinchStartCamY/f,12,45),m=v-g.position.y;if(Math.abs(m)>.01){const p=new E;g.getWorldDirection(p),g.position.y=v;const x=m*.35;g.position.x+=p.x*-x,g.position.z+=p.z*-x,g.lookAt(this.camTarget.x,0,this.camTarget.z)}}}return}if(r.length!==1)return;const o=r[0],a=o.clientX-this.touchStartClient.clientX,l=o.clientY-this.touchStartClient.clientY,h=Math.hypot(a,l);if(!this.touchMoved&&h>12)if(this.touchMoved=!0,this.clearLongPress(),this.tool!=="select"&&!this.held){this.touchMode="paint",this.paint=!0;const c=this.pointerToTile(o,e);c&&(this.applyTool(c.x,c.y),this.lastPaint={...c})}else this.held?this.touchMode="tap":this.touchMode="pan";if(this.touchMode==="paint"){const c=this.pointerToTile(o,e);c&&((!this.lastPaint||this.lastPaint.x!==c.x||this.lastPaint.y!==c.y)&&(this.applyTool(c.x,c.y),this.lastPaint={...c}),this.updatePointerHover(o,e))}else if(this.touchMode==="pan"){const c=o.clientX-(this.touchStartClient.clientX+this.panAccum.x),d=o.clientY-(this.touchStartClient.clientY+this.panAccum.y);this.panAccum.x=a,this.panAccum.y=l,this.panCameraByScreen(-c,-d)}else if(this.held){try{const c=this.pointerToWorld(o,e);c&&Number.isFinite(c.x)&&Number.isFinite(c.z)&&(this.held.wx=c.x,this.held.wz=c.z)}catch{}this.updatePointerHover(o,e)}else this.updatePointerHover(o,e)},{passive:!1}),e.addEventListener("touchend",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++)this.activeTouches.delete(n.changedTouches[o].identifier);if(this.touchMode==="pinch"){this.activeTouches.size<2&&(this.touchMode=this.activeTouches.size===1?"pan":"none",this.pinchStartDist=0),this.activeTouches.size===0&&(this.touchMode="none",this.paint=!1,this.lastPaint=null);return}if(this.activeTouches.size>0)return;const r=this.touchMode;if(this.clearLongPress(),r==="tap"&&!this.touchMoved&&!this.gameOver){const o=this.pointerToTile(this.touchStartClient,e),a=this.pointerToWorld(this.touchStartClient,e);o&&a&&this.handlePrimaryAt(o.x,o.y,a)}this.touchMode="none",this.paint=!1,this.lastPaint=null},{passive:!1}),e.addEventListener("touchcancel",n=>{for(let r=0;r<n.changedTouches.length;r++)this.activeTouches.delete(n.changedTouches[r].identifier);this.clearLongPress(),this.touchMode="none",this.paint=!1,this.lastPaint=null,this.pinchStartDist=0});const i=document.getElementById("pan-zone");if(i){let n=null;i.addEventListener("touchstart",r=>{r.preventDefault();const o=r.changedTouches[0];n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchmove",r=>{r.preventDefault();const o=r.changedTouches[0];if(!n){n={x:o.clientX,y:o.clientY};return}this.panCameraByScreen(-(o.clientX-n.x),-(o.clientY-n.y)),n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchend",()=>{n=null}),i.addEventListener("touchcancel",()=>{n=null})}}clearLongPress(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}handlePrimaryAt(e,t,i,n=!1){try{if(this.tool==="select"){if(this.possessed){this.possessMoveTo(e,t);return}if(this.held){this.dropHeldAt(e,t);return}const r=this.creatureAt(e,t,i);if(this.possessArmed&&r&&!r.isHero){if(this.possessArmed=!1,this.mana<Tn){this.hud.say("Not enough mana to Possess.");return}this.mana-=Tn,this.enterPossession(r);return}if(r&&!r.isHero&&n){this.toggleSelectCreature(r);return}if(r&&r.isHero&&this.selectedGroup.some(o=>o.alive&&!o.isWorker)){this.issueAttackMove(r.x,r.y,!0);return}if(r&&!r.isHero){this.selectCreature(r),this.pickUp(r);return}if(this.selectedGroup.some(o=>o.alive&&!o.held)&&(this.grid.isWalkable(e,t)||this.grid.get(e,t)?.kind===A.Heart)){this.issueAttackMove(e,t,!1);return}this.clearSelection()}else this.paint=!0,this.applyTool(e,t),this.lastPaint={x:e,y:t}}catch(r){console.warn("[underkeep] primary input failed",r)}}handleSecondaryAt(e,t,i){try{if(this.tool==="select"){let r=null;if(this.held&&!this.held.isHero?r=this.held:(r=this.creatureAt(e,t,i),(!r||r.isHero)&&this.selected&&this.selected.alive&&!this.selected.isHero&&(r=this.selected)),r&&!r.isHero){r.held||this.selectCreature(r),this.slap(r);return}}else if(this.held){this.dropHeld();return}const n=this.grid.get(e,t);n&&n.mark!==Ne.None&&(n.mark=Ne.None,this.marksDirty=!0,this.flushMarks())}catch(n){console.warn("[underkeep] secondary input failed",n)}}updatePointerHover(e,t){const i=this.pointerToTile(e,t);if(!i||!this.grid.inBounds(i.x,i.y)){this.renderer.setHover(0,0,!1);return}const n=this.grid.tileToWorld(i.x,i.y);this.renderer.setHover(n.x,n.z,!0,this.toolColor());const r=this.grid.get(i.x,i.y);if(r){let o=r.room!==D.None?` · ${["","Treasury","Lair","Hatchery","Training","Library","Portal","Guard"][r.room]}`:"";if(r.room===D.Hatchery&&(o+=` · food ${Math.floor(this.hatcheryFood)}`),r.door===rt.Closed&&(o+=" · Door (closed)"),r.door===rt.Open&&(o+=" · Door (open)"),r.trap===Mt.Sentry&&(o+=" · Sentry trap"),r.rally&&(o+=" · Rally flag"),r.room===D.Lair){const c=this.grid.countRoom(D.Lair);o+=` · beds ${this.countOccupiedBeds()}/${c}`}const a=r.digProgress>0?` · dig ${Math.floor(r.digProgress*100)}%`:"",l=r.kind===A.Gold?"Gold":r.kind===A.Earth?"Earth":r.kind===A.Rock?"Rock":r.kind===A.Lava?"Lava":r.kind===A.Water?"Water":r.kind===A.BridgeWood?"Wood Bridge":r.kind===A.BridgeStone?"Stone Bridge":A[r.kind];let h=`(${i.x},${i.y}) ${l}${r.fortified?" [fortified]":""}${o}${a}`;if(this.tool==="select"){const c=this.creatureAt(i.x,i.y);c&&!c.isHero?h+=` · ${c.kind} mood ${Math.floor(c.mood)} · eff ${Math.round(c.workEfficiency()*100)}%`:this.held&&(h+=" · drop here")}this.hud.setTooltip(h)}}panCameraByScreen(e,t){const i=this.renderer.camera,n=new E;i.getWorldDirection(n),n.y=0,n.normalize();const r=new E().crossVectors(n,new E(0,1,0)).normalize(),o=i.position.y*.0028,a=r.multiplyScalar(e*o).add(n.multiplyScalar(-t*o));i.position.add(a),this.camTarget.add(a),i.lookAt(this.camTarget.x,0,this.camTarget.z)}zoomBy(e){const t=this.renderer.camera,i=new E;t.getWorldDirection(i),t.position.addScaledVector(i,e),t.position.y=Ca.clamp(t.position.y,12,45),t.lookAt(this.camTarget.x,0,this.camTarget.z)}pointerNdc(e,t){const i=t.getBoundingClientRect();return{nx:(e.clientX-i.left)/i.width*2-1,ny:-((e.clientY-i.top)/i.height)*2+1}}pointerToWorld(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),r=this.renderer.pickTile(i,n);return r?new E(r.x,0,r.z):null}pointerToTile(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),r=this.renderer.pickTile(i,n);return r?typeof r.tileX=="number"&&typeof r.tileY=="number"?{x:r.tileX,y:r.tileY}:this.grid.worldToTile(r.x,r.z):null}toolColor(){switch(this.tool){case"dig":return 16729122;case"claim":return 4491519;case"fortify":return 11184810;case"select":return 16764006;case"bridgeWood":return 12615744;case"bridgeStone":return 8425640;default:return 8978278}}creatureAt(e,t,i){let n=null,r=1.85;for(const o of this.creatures){if(!o.alive||o.held)continue;let a=Math.hypot(o.x-e,o.y-t);if(i){const l=Math.hypot(o.wx-i.x,o.wz-i.z)/Ve;a=Math.min(a,l)}a<r&&(r=a,n=o)}return n}hideMarquee(){this.marqueeEl&&(this.marqueeEl.classList.add("hidden"),this.marqueeEl.style.width="0",this.marqueeEl.style.height="0")}cancelBoxSelect(){this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee()}updateMarquee(e,t,i,n){if(!this.marqueeEl)return;const r=Math.min(e,i),o=Math.min(t,n),a=Math.abs(i-e),l=Math.abs(n-t);this.marqueeEl.classList.remove("hidden"),this.marqueeEl.style.left=`${r}px`,this.marqueeEl.style.top=`${o}px`,this.marqueeEl.style.width=`${a}px`,this.marqueeEl.style.height=`${l}px`}clearSelection(){for(const e of this.selectedGroup)e.selected=!1;this.selected&&(this.selected.selected=!1),this.selected=null,this.selectedGroup=[],this.hud.hideInspector()}syncSelectionPrimary(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero);for(const e of this.creatures)this.selectedGroup.includes(e)||(e.selected=!1);for(const e of this.selectedGroup)e.selected=!0;this.selected=this.selectedGroup.length?this.selectedGroup[this.selectedGroup.length-1]:null,this.refreshInspector()}catch(e){console.warn("[underkeep] syncSelectionPrimary failed",e),this.pruneSelection()}}selectCreature(e){if(!(!e||!e.alive||e.isHero)){for(const t of this.selectedGroup)t.selected=!1;this.selectedGroup=[e],this.selected=e,e.selected=!0,this.refreshInspector()}}toggleSelectCreature(e){if(!e||!e.alive||e.isHero)return;const t=this.selectedGroup.indexOf(e);t>=0?(e.selected=!1,this.selectedGroup.splice(t,1)):(this.selectedGroup.push(e),e.selected=!0,this.mentioneOnce("groupSelect",ne.groupSelect)),this.syncSelectionPrimary()}selectCreaturesInScreenBox(e,t,i,n,r,o){try{const a=Math.min(t,n),l=Math.max(t,n),h=Math.min(i,r),c=Math.max(i,r);if(l-a<6&&c-h<6)return;const d=this.renderer.camera,u=e.getBoundingClientRect(),f=[],g=new E;for(const v of this.creatures){if(!v.alive||v.isHero||v.held||!Number.isFinite(v.wx)||!Number.isFinite(v.wz)||(g.set(v.wx,.6,v.wz),g.project(d),!Number.isFinite(g.x)||!Number.isFinite(g.y)))continue;const m=(g.x+1)/2*u.width+u.left,p=(-g.y+1)/2*u.height+u.top;m>=a&&m<=l&&p>=h&&p<=c&&f.push(v)}if(!o){for(const v of this.selectedGroup)v.selected=!1;this.selectedGroup=[]}for(const v of f)this.selectedGroup.includes(v)||this.selectedGroup.push(v),v.selected=!0;f.length&&this.mentioneOnce("groupSelect",ne.groupSelect),this.syncSelectionPrimary()}catch(a){console.warn("[underkeep] box select failed",a)}}issueAttackMove(e,t,i=!1){try{this.pruneSelection();const n=this.selectedGroup.filter(o=>o.alive&&!o.isHero&&!o.isWorker&&!o.held);if(!n.length){const o=this.selectedGroup.filter(a=>a.alive&&!a.isHero&&!a.held);if(!o.length)return;for(const a of o)try{a.bedKey&&this.releaseBed(a),a.job=V.Wander,a.jobTarget={x:e,y:t},a.setPath(this.grid.findPath(a.x,a.y,e,t))}catch(l){console.warn("[underkeep] move order unit failed",l)}this.hud.sayNow("Move order issued.");return}let r=0;for(const o of n)try{o.bedKey&&this.releaseBed(o);const a=r%3-1,l=Math.floor(r/3)%2;r++;let h=e+a,c=t+l;this.grid.isWalkable(h,c)||(h=e,c=t),o.job=V.AttackMove,o.jobTarget={x:h,y:c};const d=this.grid.findPath(Number.isFinite(o.x)?o.x:h,Number.isFinite(o.y)?o.y:c,h,c);d?o.setPath(d):o.setPath(null),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+3),o.clampStats()}catch(a){console.warn("[underkeep] attack-move unit failed",a)}try{const o=this.grid.tileToWorld(e,t);Number.isFinite(o.x)&&Number.isFinite(o.z)&&this.renderer.spawnFx(new E(o.x,.9,o.z),i?16736320:16763972,.55)}catch{}this.hud.sayNow(i?ne.attackHero:ne.attackMove),this.refreshInspector()}catch(n){console.warn("[underkeep] issueAttackMove failed",n)}}refreshInspector(){try{const e=this.held??this.selected;if(!e||!e.alive){this.hud.hideInspector();return}e.clampStats();const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",hero_knight:"Hero Knight",hero_archer:"Hero Archer"},i=typeof e.job=="string"&&e.job.length>0?e.job:"idle",n=e.held?"Held":i===V.AttackMove?"Attack":i.charAt(0).toUpperCase()+i.slice(1),r=this.selectedGroup.filter(a=>a.alive).length,o=t[e.kind]??String(e.kind);this.hud.showInspector({kind:r>1?`${o} (+${r-1})`:o,job:r>1?`${n} · squad ${r}`:n,hp:e.hp,maxHp:e.maxHp,hunger:e.hunger,tired:e.sleepNeed,mood:e.mood,efficiency:e.workEfficiency(),held:e.held})}catch(e){console.warn("[underkeep] refreshInspector failed",e)}}applyTool(e,t){const i=this.grid.get(e,t);if(i)if(this.tool==="dig")this.grid.isDiggable(e,t)&&(i.mark=Ne.Dig,i.digProgress<=0&&(i.digProgress=0),this.marksDirty=!0);else if(this.tool==="claim")i.kind===A.Dirt&&(i.mark=Ne.Claim,this.marksDirty=!0);else if(this.tool==="fortify")(i.kind===A.Earth||i.kind===A.Gold)&&this.grid.hasAdjacentClaimed(e,t)&&(i.mark=Ne.Fortify,this.marksDirty=!0);else if(this.tool==="bridgeWood"||this.tool==="bridgeStone")this.placeBridge(e,t,this.tool==="bridgeStone");else if(this.tool==="door"){if(this.grid.canPlaceDoor(e,t))if(i.door===rt.None){if(this.gold<Fl)return;this.gold-=Fl,i.door=rt.Closed,this.requestStructuralRebuild(),this.mentioneOnce("doorBuilt",ne.doorBuilt),this.saveNow()}else i.door===rt.Closed?(i.door=rt.Open,this.requestStructuralRebuild(),this.hud.say(ne.doorOpen),this.saveNow()):(i.door=rt.Closed,this.requestStructuralRebuild(),this.hud.say(ne.doorClosed),this.saveNow())}else if(this.tool==="sentry"){if(i.kind===A.Claimed&&i.trap===Mt.None){if(this.gold<Ol)return;this.gold-=Ol,i.trap=Mt.Sentry,this.requestStructuralRebuild(),this.mentioneOnce("sentryBuilt",ne.sentryBuilt),this.saveNow()}}else if(this.tool==="rally"){if(i.kind===A.Claimed){if(i.rally){i.rally=!1,this.hud.say(ne.rallyCleared),this.requestStructuralRebuild(),this.saveNow();return}if(this.gold<Bl)return;this.gold-=Bl;for(const n of this.grid.tiles)n.rally=!1;i.rally=!0,this.requestStructuralRebuild(),this.hud.say(ne.rallyPlanted);for(const n of this.creatures)if(!(!n.alive||n.isHero||n.isWorker||n.held)&&(n.kind===ae.Rattlekin||n.kind===ae.Emberling||n.kind===ae.Skitterwing)){n.job=V.Guard,n.jobTarget={x:e,y:t};const r=this.grid.findPath(n.x,n.y,e,t);r&&n.setPath(r)}this.saveNow()}}else{const r={treasury:D.Treasury,lair:D.Lair,hatchery:D.Hatchery,training:D.Training,library:D.Library,portal:D.Portal,guard:D.Guard}[this.tool];if(r&&i.kind===A.Claimed&&i.room===D.None){const o=Dg[r];this.gold>=o&&(this.gold-=o,i.room=r,this.requestStructuralRebuild(),this.mentioneOnce("firstRoom",ne.firstRoom),r===D.Portal&&this.mentioneOnce("portal",ne.portal),r===D.Lair&&(this.mentioneOnce("lairBuilt",ne.lairBuilt),this.spikeNeedsForRoom(D.Lair)),r===D.Hatchery&&(this.mentioneOnce("hatcheryBuilt",ne.hatcheryBuilt),this.hatcheryFood=Math.max(this.hatcheryFood,4),this.spikeNeedsForRoom(D.Hatchery)),r===D.Guard&&this.mentioneOnce("guardBuilt",ne.guardBuilt),this.saveNow())}}}pickUp(e){try{if(!e||!e.alive||e.isHero)return;e.bedKey&&this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null,e.clampStats(),e.held=!0,e.setPath(null),e.job=V.Idle,e.jobTarget=null,e.workTimer=0,this.held=e,this.selectCreature(e);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new E(t,1,i),16768392,.45),this.mentioneOnce("pickUp",ne.pickUp),this.refreshInspector()}catch(t){console.warn("[underkeep] pickUp failed",t);try{e&&(e.held=!1,this.held===e&&(this.held=null))}catch{}}}dropHeld(){if(!this.held)return;const e=this.grid.worldToTile(this.held.wx,this.held.wz);this.dropHeldAt(e.x,e.y)}dropHeldAt(e,t){const i=this.held;if(i)try{if(!this.grid.isWalkable(e,t)&&this.grid.get(e,t)?.kind!==A.Heart){let o=!1;for(let a=0;a<4&&!o;a++)for(let l=-a;l<=a&&!o;l++)for(let h=-a;h<=a&&!o;h++)this.grid.isWalkable(e+h,t+l)&&(e=e+h,t=t+l,o=!0);if(!o)return}i.held=!1,i.x=e,i.y=t;const n=this.grid.tileToWorld(e,t);i.wx=n.x,i.wz=n.z,this.creatures.some(o=>o.alive&&o!==i&&o.isHero!==i.isHero&&Math.hypot(o.x-e,o.y-t)<2.5)&&(i.stunTimer=1.5),this.held=null,this.safeMood(i,(Number.isFinite(i.mood)?i.mood:72)+4),i.clampStats(),this.mentioneOnce("drop",ne.drop),this.refreshInspector()}catch(n){console.warn("[underkeep] dropHeldAt failed",n);try{i&&(i.held=!1,i.clampStats()),this.held=null}catch{}}}slap(e){try{if(!e||!e.alive||e.isHero)return;e.clampStats(),e.stunTimer=Math.max(e.stunTimer,1.35),e.speedBuff=Math.max(e.speedBuff,2.8),e.sleepNeed=Math.max(0,Math.min(100,e.sleepNeed-12)),e.hunger=Math.max(0,Math.min(100,e.hunger-4)),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+8),e.setPath(null),e.workTimer=0,e.job!==V.Sleep&&e.job!==V.Eat&&(e.job=V.Idle,e.jobTarget=null);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new E(t,.7,i),16772744,.7),this.renderer.spawnFx(new E(t,1.15,i),16755268,.55),this.renderer.spawnDigDebris(t,i,16768392),this.hud.sayNow(ne.slap),this.refreshInspector()}catch(t){console.warn("[underkeep] slap failed",t);try{this.hud.sayNow(ne.slap)}catch{}}}workerCost(){return C0+this.workerCostScale*50}castSpell(e){if(!this.gameOver){if(e==="createWorker"){const t=this.workerCost();if(this.gold<t)return;const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let r=i,o=n;for(let a=1;a<6;a++)for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++)if(this.grid.isWalkable(i+h,n+l)){r=i+h,o=n+l,a=99;break}this.gold-=t,this.workerCostScale++,this.spawnCreature(ae.Scrabbler,r,o),this.hud.say(ne.worker);return}if(e==="speed"){if(this.mana<Zr)return;this.mana-=Zr;for(const t of this.creatures)t.alive&&!t.isHero&&(t.speedBuff=Math.max(t.speedBuff,6));this.hud.say(ne.speed);return}if(e==="lightning"){if(this.mana<Jr)return;const t=this.creatures.filter(o=>o.alive&&o.isHero);if(!t.length)return;this.mana-=Jr;const i=t.reduce((o,a)=>{const l=Math.hypot(o.x-this.grid.heartPos.x,o.y-this.grid.heartPos.y),h=Math.hypot(a.x-this.grid.heartPos.x,a.y-this.grid.heartPos.y);return l<h?o:a}),n=45+this.researchRank*12;i.takeDamage(n);const r=new E(this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).x,4,this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).z);this.renderer.spawnLightning(r,new E(i.wx,1,i.wz)),this.hud.say(ne.lightning);return}if(e==="heal"){if(!this.healUnlocked){this.hud.say("Heal is sealed. Staff a Library with Gravemages to research it.");return}const t=30;if(this.mana<t)return;this.mana-=t;let i=0;for(const n of this.creatures)!n.alive||n.isHero||n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+35+this.researchRank*8),n.pulseTint("heal",1.1),this.renderer.spawnCareSparks(n.wx,n.wz,"heal",!1),i++);this.hud.say(i?ne.heal:"No wounds to mend — for now.");return}if(e==="possess"){if(this.possessed){this.exitPossession();return}if(this.mana<Tn){this.hud.say("Not enough mana to Possess.");return}const t=(this.held&&this.held.alive&&!this.held.isHero?this.held:null)||(this.selected&&this.selected.alive&&!this.selected.isHero?this.selected:null);if(t){this.mana-=Tn,this.held===t&&(t.held=!1,this.held=null),this.enterPossession(t);return}this.possessArmed=!0,this.hud.say(ne.possessArm),this.hud.sayNow("Possess armed — click a minion to ride their senses. Esc exits.");return}}}maxMana(){return R0+Math.floor(this.grid.countClaimed()*.5)}preparePass4Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(l,h,c=D.None)=>{const d=this.grid.get(l,h);!d||d.kind===A.Heart||(d.kind=A.Claimed,d.claimedProgress=1,d.mark=Ne.None,d.digProgress=0,d.fortified=!1,d.room=c)};for(let l=e-1;l<=e+5;l++)for(let h=t-1;h<=t+4;h++)i(l,h);i(e+2,t,D.Treasury),i(e+3,t,D.Treasury),i(e+2,t+1,D.Lair),i(e+3,t+1,D.Lair),i(e+2,t+2,D.Training),i(e+3,t+2,D.Training),i(e+4,t,D.Hatchery),i(e+4,t+1,D.Library),i(e+4,t+2,D.Portal);const n=t-3;for(let l=0;l<2;l++){const h=this.grid.get(e-1+l,n);h&&(h.kind=A.Rock,h.fortified=!1,h.mark=Ne.None,h.room=D.None,h.digProgress=0,h.goldAmount=0)}for(let l=0;l<2;l++){const h=this.grid.get(e+1+l,n);h&&(h.kind=A.Earth,h.fortified=!1,h.mark=Ne.Dig,h.digProgress=l===0?.4:.15,h.room=D.None,h.goldAmount=0)}for(let l=0;l<3;l++){const h=this.grid.get(e+3+l,n);h&&(h.kind=A.Gold,h.goldAmount=400,h.fortified=!1,h.mark=Ne.Dig,h.digProgress=.08,h.room=D.None)}for(let l=e-1;l<=e+5;l++)i(l,t-2);const r=this.creatures.filter(l=>l.isWorker&&l.alive),o={x:e+1,y:n};for(let l=0;l<r.length;l++){const h=r[l],c=e+l%3,d=t-2,u=this.grid.tileToWorld(c,d);h.x=c,h.y=d,h.wx=u.x+(l-1)*.15,h.wz=u.z,h.job=V.Dig,h.jobTarget=o,h.workTimer=.25,h.digAnim=.4+l*.35,h.setPath(null);const f=this.grid.tileToWorld(o.x,o.y);if(h.mesh.lookAt(f.x,h.mesh.position.y,f.z),h.syncMesh(this.time+.5),h.pickaxe){const g=Math.sin(h.digAnim*11);h.pickaxe.rotation.x=-.9+g*1.35,h.pickaxe.rotation.z=.15+g*.55,h.pickaxe.visible=!0}h.selectRing&&(h.selectRing.visible=!0)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.saveNow();const a=this.grid.tileToWorld(e+2,t);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,24,a.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass5bShot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,l=D.None)=>{const h=this.grid.get(o,a);!h||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.mark=Ne.None,h.digProgress=0,h.fortified=!1,h.room=l)};for(let o=e-1;o<=e+5;o++)for(let a=t-1;a<=t+4;a++)i(o,a);i(e+2,t+1,D.Lair),i(e+3,t+1,D.Lair),i(e+4,t,D.Hatchery),i(e+4,t+1,D.Hatchery),this.hatcheryFood=6,this.spikeNeedsForRoom(D.Lair),this.spikeNeedsForRoom(D.Hatchery);const n=this.creatures.filter(o=>o.isWorker&&o.alive);if(n[0]){const o=n[0],a=e+2,l=t+1,h=this.grid.tileToWorld(a,l);o.x=a,o.y=l,o.wx=h.x,o.wz=h.z,o.hp=o.maxHp*.45,o.sleepNeed=80,o.hunger=10;const c=`${a},${l}`;this.bedOwners.set(c,o.id),o.bedKey=c,o.job=V.Sleep,o.jobTarget={x:a,y:l},o.restHealAcc=1.7,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"heal",!0),o.pulseTint("heal",2.2)}if(n[1]){const o=n[1],a=e+4,l=t,h=this.grid.tileToWorld(a,l);o.x=a,o.y=l,o.wx=h.x,o.wz=h.z,o.hunger=60,o.job=V.Eat,o.jobTarget={x:a,y:l},o.eatAnnounced=!0,o.eatAnim=2.5,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"feast",!0),o.pulseTint("feast",2.2)}if(n[2]){const o=n[2],a=this.grid.tileToWorld(e+1,t+2);o.x=e+1,o.y=t+2,o.wx=a.x,o.wz=a.z,o.hunger=5,o.sleepNeed=5,o.job=V.Idle,o.setPath(null)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.hud.setTooltip(`(${e+2},${t+1}) Claimed · Lair · beds ${this.countOccupiedBeds()}/2`),this.hud.say(ne.feasting),this.hud.say(ne.bedClaim),this.hud.say(ne.lairResting);const r=this.grid.tileToWorld(e+3,t+1);this.camTarget.set(r.x,0,r.z),this.renderer.camera.position.set(r.x+2,22,r.z+12),this.renderer.camera.lookAt(this.camTarget)}preparePass61Shot(){this.preparePass5bShot();const e=this.creatures.filter(i=>i.isWorker&&i.alive),t=e[2]??e[0];if(t){t.mood=38,t.hunger=55,t.sleepNeed=40,t.hp=t.maxHp*.7,this.selectCreature(t);const i=e.find(r=>r!==t&&r.job!==V.Sleep)??e[1];if(i){this.pickUp(i);const r=this.grid.tileToWorld(t.x,t.y);i.wx=r.x+1.2,i.wz=r.z+.4,i.syncMesh(this.time)}this.refreshInspector();const n=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,18,n.z+11),this.renderer.camera.lookAt(this.camTarget),this.hud.say(ne.pickUp)}}preparePass61bShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(r=>r.isWorker&&r.alive),i=t.find(r=>r.job!==V.Sleep&&r.job!==V.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,this.held=null;for(const r of this.creatures)r.held=!1;this.selectCreature(i);const n=this.grid.tileToWorld(i.x,i.y);if(this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="efficiency")this.hud.sayNow(ne.sluggishDig);else{const r=i.mood;this.slap(i),i.mood=r,this.refreshInspector(),e==="both"&&this.hud.sayNow(ne.slap)}}preparePass61cShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(o=>o.isWorker&&o.alive),i=t.find(o=>o.job!==V.Sleep&&o.job!==V.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,i.clampStats(),this.mana=Math.max(0,this.mana),this.held=null;for(const o of this.creatures)o.held=!1;this.pickUp(i);const n=this.grid.tileToWorld(i.x,i.y);if(i.wx=n.x+.8,i.wz=n.z+.3,i.syncMesh(this.time),this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="pick"){this.hud.sayNow(ne.sluggishDig),this.refreshInspector();return}const r=i.mood;this.slap(i),i.mood=r,i.clampStats(),this.refreshInspector(),this.hud.sayNow(ne.slap)}preparePass5cShot(e="both"){this.preparePass5bShot();const t=this.creatures.filter(r=>r.isWorker&&r.alive),i=t.find(r=>r.job===V.Sleep),n=t.find(r=>r.job===V.Eat);if(i&&(e==="both"||e==="heal")){this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0),i.pulseTint("heal",2.4);for(let r=0;r<2;r++)this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0)}if(n&&(e==="both"||e==="feast")){this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0),n.pulseTint("feast",2.4);for(let r=0;r<2;r++)this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0)}if(e==="heal"&&i){const r=this.grid.tileToWorld(i.x,i.y);this.camTarget.set(r.x,0,r.z),this.renderer.camera.position.set(r.x+2,16,r.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(ne.lairResting)}else if(e==="feast"&&n){const r=this.grid.tileToWorld(n.x,n.y);this.camTarget.set(r.x,0,r.z),this.renderer.camera.position.set(r.x+2,16,r.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(ne.feasting)}}preparePass3Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=[];for(let a=e-6;a<=e-3;a++)for(let l=t-1;l<=t+1;l++){const h=this.grid.get(a,l);!h||h.kind===A.Rock||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.mark=Ne.None,h.digProgress=0,h.fortified=!1,i.push({x:a,y:l}))}for(const a of i.slice(0,2)){const l=this.grid.get(a.x,a.y);l.room=D.Treasury}for(let a=t-1;a<=t+1;a++){const l=this.grid.get(e-2,a);l&&l.kind!==A.Heart&&(l.kind=A.Dirt,l.room=D.None,l.mark=Ne.None)}const n=[{x:e-1,y:t-4},{x:e,y:t-4},{x:e+1,y:t-4},{x:e-1,y:t-5}];for(const[a,l]of n.entries()){const h=this.grid.get(l.x,l.y);h&&(h.kind=A.Earth,h.fortified=!1,h.mark=Ne.Dig,h.digProgress=a===1?.72:a===0?.45:a===2?.28:.12,h.room=D.None)}for(let a=t-3;a<=t-1;a++)for(let l=e-1;l<=e+1;l++){const h=this.grid.get(l,a);h&&h.kind!==A.Heart&&h.kind!==A.Rock&&(h.kind===A.Earth||h.kind===A.Gold)&&(h.kind=A.Claimed,h.claimedProgress=1,h.mark=Ne.None,h.digProgress=0)}const r=this.creatures.filter(a=>a.isWorker&&a.alive);for(let a=0;a<r.length;a++){const l=r[a],h=e-1+a%3,c=t-3,d=this.grid.tileToWorld(h,c);l.x=h,l.y=c,l.wx=d.x,l.wz=d.z,l.job=V.Idle,l.jobTarget=n[Math.min(a,n.length-1)],l.workTimer=.15,l.setPath(null),l.job=V.Dig,l.selectRing&&(l.selectRing.visible=!0)}this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild();for(const[a,l]of n.entries()){const h=this.grid.get(l.x,l.y);h&&(h.kind=A.Earth,h.mark=Ne.Dig,h.digProgress=a===1?.72:a===0?.48:a===2?.3:.15,h.fortified=!1)}this.rebuild();for(const a of n.slice(0,2)){const l=this.grid.tileToWorld(a.x,a.y);this.renderer.spawnDigDebris(l.x,l.z,12615744)}const o=this.grid.tileToWorld(e-2,t-2);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+5,26,o.z+16),this.renderer.camera.lookAt(this.camTarget)}preparePass62aStabShot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(let o=t-5;o<=t+2;o++)for(let a=e-4;a<=e+4;a++){const l=this.grid.get(a,o);!l||l.kind===A.Heart||l.kind===A.Rock||(l.kind===A.Earth||l.kind===A.Gold||l.kind===A.Dirt)&&(l.kind=A.Claimed,l.claimedProgress=1,l.mark=Ne.None,l.digProgress=0)}const i=[];for(let o=e-5;o<=e+5;o++)i.push({x:o,y:t-6}),i.push({x:o,y:t+4});for(let o=t-5;o<=t+3;o++)i.push({x:e-5,y:o}),i.push({x:e+5,y:o});for(const o of i){const a=this.grid.get(o.x,o.y);!a||a.kind===A.Heart||a.kind===A.Rock||(a.kind=A.Earth,a.fortified=!1,a.mark=Ne.Dig,a.digProgress=.15+Math.random()*.35,a.room=D.None)}for(;this.creatures.filter(o=>o.alive&&o.isWorker).length<6;)this.spawnCreature(ae.Scrabbler,e+1,t+1);const n=this.creatures.filter(o=>o.alive&&o.isWorker);for(let o=0;o<n.length;o++){const a=n[o],l=i[o%i.length],h=this.grid.findPathAdjacent(e,t,l.x,l.y),c=this.grid.tileToWorld(e+o%3-1,t-1);a.wx=c.x,a.wz=c.z,a.x=e+o%3-1,a.y=t-1,a.job=V.Dig,a.jobTarget=l,a.workTimer=.1,h&&a.setPath(h),a.mood=80}this.requestStructuralRebuild(),this.rebuild(),this.renderer.setDigLoad(!0),this.hud.sayNow("Stab dig load — watch for Graphics hiccup. Should stay solid.");const r=this.grid.tileToWorld(e,t-3);this.camTarget.set(r.x,0,r.z),this.renderer.camera.position.set(r.x+6,28,r.z+18),this.renderer.camera.lookAt(this.camTarget)}preparePass62Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,l=D.None)=>{const h=this.grid.get(o,a);!h||h.kind===A.Heart||(h.kind=A.Claimed,h.claimedProgress=1,h.room=l,h.mark=Ne.None,h.digProgress=0)};for(let o=t-2;o<=t+3;o++)for(let a=e-3;a<=e+5;a++)i(a,o);if(i(e-2,t+1,D.Lair),i(e-1,t+1,D.Lair),i(e,t+1,D.Lair),i(e+1,t+1,D.Lair),i(e-2,t+2,D.Hatchery),i(e-1,t+2,D.Hatchery),i(e+2,t+1,D.Training),i(e+3,t+1,D.Training),i(e+2,t+2,D.Training),i(e+3,t+2,D.Training),i(e+4,t+1,D.Library),i(e+5,t+1,D.Library),i(e+4,t+2,D.Library),i(e+5,t+2,D.Library),i(e+4,t-1,D.Portal),i(e+5,t-1,D.Portal),this.hatcheryFood=12,this.gold=400,this.grid.tileToWorld(e+4,t),this.creatures.some(o=>o.kind===ae.Skitterwing&&o.alive)||(this.spawnCreature(ae.Skitterwing,e+3,t),this.attracted.skitterwing=!0),!this.creatures.some(o=>o.kind===ae.Rattlekin&&o.alive)){const o=this.spawnCreature(ae.Rattlekin,e+2,t+1);o.trainNeed=60,o.job=V.Train,o.jobTarget={x:e+2,y:t+1},o.workTimer=7.2,o.level=1,this.attracted.rattlekin=!0}if(this.creatures.some(o=>o.kind===ae.Emberling&&o.alive)||(this.spawnCreature(ae.Emberling,e+3,t+2),this.attracted.emberling=!0),!this.creatures.some(o=>o.kind===ae.Gravemage&&o.alive)){const o=this.spawnCreature(ae.Gravemage,e+4,t+1);o.job=V.Research,o.jobTarget={x:e+4,y:t+1},this.attracted.gravemage=!0}this.researchProgress=88,this.researchRank=0,this.healUnlocked=!1,this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("A Gravemage has entered the Underkeep."),this.hud.say(ne.gravemage);const n=this.grid.tileToWorld(e+2,t+1);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+4,24,n.z+14),this.renderer.camera.lookAt(this.camTarget);const r=this.creatures.find(o=>o.alive&&o.kind===ae.Rattlekin);r&&this.selectCreature(r)}preparePass63Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(d,u,f=D.None)=>{const g=this.grid.get(d,u);!g||g.kind===A.Heart||(g.kind=A.Claimed,g.claimedProgress=1,g.room=f,g.mark=Ne.None,g.digProgress=0,g.door=rt.None,g.trap=Mt.None,g.rally=!1,g.fortified=!1)};for(let d=t-3;d<=t+3;d++)for(let u=e-3;u<=e+5;u++)i(u,d);i(e+2,t+1,D.Training),i(e+3,t+1,D.Training),i(e+4,t+1,D.Library),i(e+5,t+1,D.Library),i(e+4,t-1,D.Portal),i(e+5,t-1,D.Portal),i(e-2,t+1,D.Lair),i(e-1,t+1,D.Lair),i(e-2,t+2,D.Hatchery),i(e+2,t+2,D.Guard),i(e+3,t+2,D.Guard);for(const[d,u]of[[e,t-2],[e+1,t-2],[e-1,t-2],[e+2,t-2]]){const f=this.grid.get(d,u);f&&f.kind!==A.Heart&&(f.kind=A.Earth,f.fortified=!0,f.room=D.None,f.door=rt.None)}i(e,t-1),i(e+1,t-1);const n=this.grid.get(e,t-1);n.door=rt.Closed;const r=this.grid.get(e+1,t-1);r.door=rt.Open,i(e,t-3),i(e+1,t-3),i(e,t-4);const o=this.grid.get(e,t-3);o.trap=Mt.Sentry;const a=this.grid.get(e+2,t);i(e+2,t),a.rally=!0,this.hatcheryFood=8,this.gold=900;const l=this.spawnCreature(ae.HeroKnight,e,t-4);l.job=V.Fight,l.jobTarget={...this.grid.heartPos},this.creatures.some(d=>d.kind===ae.Rattlekin&&d.alive)||this.spawnCreature(ae.Rattlekin,e+2,t+2),this.creatures.some(d=>d.kind===ae.Emberling&&d.alive)||this.spawnCreature(ae.Emberling,e+3,t+2);for(const d of this.creatures)if(!(!d.alive||d.isHero||d.isWorker)&&(d.kind===ae.Rattlekin||d.kind===ae.Emberling)){const u=this.grid.tileToWorld(e+2,t);d.x=e+2,d.y=t,d.wx=u.x+(d.kind===ae.Emberling?.35:-.2),d.wz=u.z,d.job=V.Guard,d.jobTarget={x:e+2,y:t},d.setPath(null),d.syncMesh(this.time)}if(!this.creatures.some(d=>d.kind===ae.Gravemage&&d.alive)){const d=this.spawnCreature(ae.Gravemage,e+4,t+1);d.job=V.Research,d.jobTarget={x:e+4,y:t+1}}this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Doors sealed. Sentry armed. Rally flies — hold the line!"),this.hud.say(ne.doorBuilt),this.hud.say(ne.sentryBuilt),this.hud.say(ne.rallyPlanted),this.hud.setTooltip(`(${e},${t-1}) Claimed · Door (closed)`);const h=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,22,h.z+13),this.renderer.camera.lookAt(this.camTarget);const c=this.creatures.find(d=>d.alive&&d.kind===ae.Rattlekin);c&&this.selectCreature(c)}preparePass71Shot(e="both"){this.hud.hideOverlay(),this.exitPossession(!0);const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(c,d,u=D.None)=>{const f=this.grid.get(c,d);!f||f.kind===A.Heart||(f.kind=A.Claimed,f.claimedProgress=1,f.room=u,f.mark=Ne.None,f.digProgress=0,f.door=rt.None,f.trap=Mt.None,f.rally=!1,f.fortified=!1,f.explored=!0,f.goldAmount=0)};for(let c=i-2;c<=i+2;c++)for(let d=t-2;d<=t+3;d++)n(d,c);n(t+2,i,D.Treasury),n(t+3,i,D.Treasury),n(t+2,i+1,D.Lair),n(t+3,i+1,D.Training),n(t+2,i+2,D.Library),n(t+3,i+2,D.Portal),n(t-2,i+1,D.Hatchery),n(t-1,i+1,D.Guard);for(let c=t-1;c<=t+4;c++)n(c,i+3);for(let c=t-1;c<=t+4;c++)for(let d=i+4;d<=i+6;d++){const u=this.grid.get(c,d);!u||u.kind===A.Heart||(u.kind=A.Lava,u.room=D.None,u.goldAmount=0,u.fortified=!1,u.mark=Ne.None,u.explored=!0,u.digProgress=0)}for(let c=t;c<=t+3;c++)n(c,i+7),n(c,i+8);for(const[c,d]of[[t+5,i+1],[t+5,i+2],[t+6,i+1]]){const u=this.grid.get(c,d);u&&(u.kind=A.Gold,u.goldAmount=400,u.explored=!0,u.fortified=!1,u.room=D.None)}for(const[c,d]of[[t-4,i],[t-4,i+1],[t-5,i]]){const u=this.grid.get(c,d);u&&(u.kind=A.Water,u.explored=!0,u.room=D.None,u.goldAmount=0)}n(t-3,i),n(t-3,i+1);const r=this.grid.get(t+1,i+4);r&&(r.kind=A.BridgeWood,r.explored=!0);const o=this.grid.get(t+2,i+5);o&&(o.kind=A.BridgeStone,o.explored=!0),n(t,i-1),this.grid.get(t,i-1).door=rt.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=Mt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=e==="payday"?12:900,this.mana=80,this.healUnlocked=!0,this.wageAcc=Yr-1.2;const a=this.creatures.filter(c=>c.isWorker&&c.alive);for(;a.length<3;)a.push(this.spawnCreature(ae.Scrabbler,t,i));for(let c=0;c<a.length;c++){const d=a[c],u=this.grid.tileToWorld(t-1+c%2,i);d.x=t-1+c%2,d.y=i,d.wx=u.x,d.wz=u.z,d.job=V.Idle,d.setPath(null),d.held=!1,d.mood=70}let l=this.creatures.find(c=>c.kind===ae.Emberling&&c.alive);l||(l=this.spawnCreature(ae.Emberling,t+1,i+3));{const c=this.grid.tileToWorld(t+1,i+3);l.x=t+1,l.y=i+3,l.wx=c.x,l.wz=c.z,l.job=V.Idle,l.setPath(null),l.mood=75}let h=this.creatures.find(c=>c.kind===ae.Rattlekin&&c.alive);if(h||(h=this.spawnCreature(ae.Rattlekin,t,i+1)),h.mood=70,h.goldCarried=0,this.creatures.some(c=>c.kind===ae.Gravemage&&c.alive)||this.spawnCreature(ae.Gravemage,t+2,i+2),this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="possess"&&(this.mana=Math.max(this.mana,Tn+10),this.enterPossession(l),setTimeout(()=>{try{this.hud.sayNow(ne.possess)}catch{}},0)),(e==="lava"||e==="bridge"||e==="both")&&(this.hud.say(ne.lava),this.hud.say(ne.bridgeWood)),e==="payday")this.gold=8,this.wageAcc=Yr,this.payWages(.01),this.hud.sayNow(ne.paydayFail),this.hud.setTooltip("Payday — empty Treasury crashes moods");else if(e==="lava"){const c=this.grid.tileToWorld(t+2,i+5);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,16,c.z+11),this.hud.setTooltip("Lava hazards · bridges · gold vein contrast")}else if(e==="bridge"){const c=this.grid.tileToWorld(t+1,i+5);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+1,14,c.z+10),this.hud.setTooltip("Wooden + stone bridges over lava")}else if(e==="possess")this.hud.setTooltip("Possession — FP follow · WASD move · Esc exits");else{const c=this.grid.tileToWorld(t+1,i+4);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,18,c.z+12),this.hud.setTooltip("Pass 7.1 — lava · bridges · possess · payday"),this.hud.sayNow("Pass 7.1 live — lava burns, bridges span, Possess rides, payday bites.")}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass65Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(a,l,h=D.None)=>{const c=this.grid.get(a,l);!c||c.kind===A.Heart||(c.kind=A.Claimed,c.claimedProgress=1,c.room=h,c.mark=Ne.None,c.digProgress=0,c.door=rt.None,c.trap=Mt.None,c.rally=!1,c.fortified=!1,c.explored=!0)};for(let a=i-2;a<=i+2;a++)for(let l=t-2;l<=t+3;l++)n(l,a);n(t+2,i,D.Treasury),n(t+3,i,D.Treasury),n(t+2,i+1,D.Lair),n(t+3,i+1,D.Training),n(t+2,i+2,D.Library),n(t+3,i+2,D.Portal),n(t-2,i+1,D.Hatchery),n(t-1,i+1,D.Guard);for(const[a,l]of[[t-3,i],[t-3,i+1],[t-3,i-1],[t+4,i],[t+4,i+1],[t+4,i-1],[t,i+3],[t+1,i+3],[t+2,i+3],[t,i-3],[t+1,i-3]]){const h=this.grid.get(a,l);!h||h.kind===A.Heart||(h.kind=A.Earth,h.fortified=!1,h.mark=Ne.None,h.room=D.None,h.goldAmount=0,h.digProgress=0,h.explored=!0)}const r=this.grid.get(t+5,i);r&&(r.kind=A.Rock,r.fortified=!1,r.mark=Ne.None,r.explored=!0,r.room=D.None);for(let a=t+4;a<=t+7;a++)n(a,i-2);for(let a=0;a<this.grid.height;a++)for(let l=0;l<this.grid.width;l++){const h=this.grid.get(l,a);!(Math.abs(l-t)<=4&&Math.abs(a-i)<=3?!0:Math.abs(l-(t+5))<=2&&Math.abs(a-(i-2))<=1)&&h.kind!==A.Heart&&((h.kind===A.Claimed||h.kind===A.Dirt)&&(h.kind=A.Earth,h.claimedProgress=0,h.room=D.None),h.explored=!1,h.mark=Ne.None,h.fortified=!1)}this.grid.revealFromTerritory(),n(t,i-1),this.grid.get(t,i-1).door=rt.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=Mt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=900,this.healUnlocked=!0;const o=this.creatures.filter(a=>a.isWorker&&a.alive);for(;o.length<4;)o.push(this.spawnCreature(ae.Scrabbler,t,i));for(let a=0;a<o.length;a++){const l=o[a],h=t-1+a%3,c=i+a%2,d=this.grid.tileToWorld(h,c);l.x=h,l.y=c,l.wx=d.x,l.wz=d.z,l.hunger=5,l.sleepNeed=5,l.goldCarried=0,l.job=V.Idle,l.jobTarget=null,l.setPath(null),l.held=!1}if(!this.creatures.some(a=>a.kind===ae.Gravemage&&a.alive)){const a=this.spawnCreature(ae.Gravemage,t+2,i+2);a.job=V.Research,a.jobTarget={x:t+2,y:i+2}}if(this.creatures.some(a=>a.kind===ae.Rattlekin&&a.alive)||this.spawnCreature(ae.Rattlekin,t-1,i+1),e==="fortify"||e==="both"){for(const[d,u]of[[t-3,i],[t-3,i+1],[t+4,i],[t,i+3]]){const f=this.grid.get(d,u);f&&f.kind===A.Earth&&!f.fortified&&(f.mark=Ne.Fortify,f.explored=!0)}const a=this.grid.get(t+1,i+3);a&&a.kind===A.Earth&&(a.fortified=!0,a.mark=Ne.None,a.explored=!0);const l=o[0],h={x:t-3,y:i},c=this.grid.tileToWorld(t-2,i);l.x=t-2,l.y=i,l.wx=c.x,l.wz=c.z,l.job=V.Fortify,l.jobTarget=h,l.workTimer=.8,l.setPath(null),this.hud.sayNow(ne.autoFortify)}if((e==="fow"||e==="both")&&(this.hud.say(ne.fog),this.hud.sayNow("Fog of war — unexplored earth stays dark until dig/claim.")),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="fortify"){const a=this.grid.tileToWorld(t-2,i);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,20,a.z+12),this.hud.setTooltip("Idle Scrabblers auto-fortify soft earth · Rock impassable")}else{const a=this.grid.tileToWorld(t+2,i-1);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+6,32,a.z+22),this.hud.setTooltip("Fog of war — explored heart vs dark unexplored")}this.renderer.camera.lookAt(this.camTarget)}preparePass64bShot(){this.hud.hideOverlay(),this.preparePass64Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(const a of this.creatures)a.alive&&(a.clampStats(),this.safeMood(a,Number.isFinite(a.mood)?Math.max(40,a.mood):72),a.hunger=Math.max(0,Math.min(40,a.hunger)),a.sleepNeed=Math.max(0,Math.min(40,a.sleepNeed)));const i=this.creatures.find(a=>a.alive&&a.isWorker);i&&(this.tool="select",this.hud.setActiveTool("select"),this.pickUp(i));const n=this.creatures.filter(a=>a.alive&&!a.isHero&&!a.isWorker&&(a.kind===ae.Rattlekin||a.kind===ae.Emberling));this.held&&this.dropHeldAt(e,t),this.clearSelection();for(const a of n.slice(0,3))a.selected=!0,this.selectedGroup.includes(a)||this.selectedGroup.push(a);this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0);const r=n[0];r&&this.pickUp(r),this.hud.sayNow("Hand pick + squad Attack — no blackout."),this.hud.say(ne.groupSelect),this.hud.say(ne.attackMove),this.refreshInspector();const o=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+3,22,o.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass64Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(d,u,f=D.None)=>{const g=this.grid.get(d,u);!g||g.kind===A.Heart||(g.kind=A.Claimed,g.claimedProgress=1,g.room=f,g.mark=Ne.None,g.digProgress=0,g.door=rt.None,g.trap=Mt.None,g.rally=!1,g.fortified=!1)};for(let d=t-4;d<=t+3;d++)for(let u=e-3;u<=e+5;u++)i(u,d);i(e+2,t+1,D.Training),i(e+3,t+1,D.Training),i(e+4,t+1,D.Library),i(e+5,t+1,D.Library),i(e+4,t-1,D.Portal),i(e+5,t-1,D.Portal),i(e-2,t+1,D.Lair),i(e-1,t+1,D.Lair),i(e-2,t+2,D.Hatchery),i(e+2,t+2,D.Guard),i(e+3,t+2,D.Guard);for(const[d,u]of[[e-1,t-2],[e+1,t-2],[e+2,t-2]]){const f=this.grid.get(d,u);f&&f.kind!==A.Heart&&(f.kind=A.Earth,f.fortified=!0,f.room=D.None)}i(e,t-1),i(e,t-2),i(e,t-3),i(e,t-4),this.grid.get(e,t-1).door=rt.Closed,this.grid.get(e,t-3).trap=Mt.Sentry,this.grid.get(e+2,t).rally=!0,this.hatcheryFood=8,this.gold=1e3,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.heroWarn30=!0,this.heroWarn10=!0;for(const d of[...this.creatures])if(d.isHero){d.alive=!1;try{this.renderer.removeEntityMesh(d.mesh)}catch{}}this.creatures=this.creatures.filter(d=>d.alive);const n=(d,u,f)=>{const g=this.spawnCreature(d,u,f),v=this.grid.tileToWorld(u,f);return g.x=u,g.y=f,g.wx=v.x,g.wz=v.z,g.held=!1,g.stunTimer=0,g.hunger=10,g.sleepNeed=10,g.trainNeed=0,g};for(const d of[...this.creatures])if(d.alive&&(d.kind===ae.Rattlekin||d.kind===ae.Emberling)){d.alive=!1;try{this.renderer.removeEntityMesh(d.mesh)}catch{}}this.creatures=this.creatures.filter(d=>d.alive);const r=n(ae.Rattlekin,e+1,t),o=n(ae.Rattlekin,e+2,t),a=n(ae.Emberling,e+3,t);if(!this.creatures.some(d=>d.kind===ae.Gravemage&&d.alive)){const d=this.spawnCreature(ae.Gravemage,e+4,t+1);d.job=V.Research,d.jobTarget={x:e+4,y:t+1}}const l=this.spawnCreature(ae.HeroKnight,e,t-4),h=this.spawnCreature(ae.HeroArcher,e+1,t-4);l.job=V.Fight,h.job=V.Fight,l.jobTarget={x:e,y:t},h.jobTarget={x:e,y:t},l.hp=Math.floor(l.maxHp*.7),h.hp=Math.floor(h.maxHp*.75),this.clearSelection(),this.selectedGroup=[r,o,a];for(const d of this.selectedGroup)d.selected=!0;this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0),this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Squad selected — attack-move into the heroes!"),this.hud.say(ne.groupSelect),this.hud.say(ne.attackHero),this.hud.say(ne.heroEngage),this.hud.setTooltip(`(${e},${t}) Claimed · squad ${this.selectedGroup.length} attack-move`);const c=this.grid.tileToWorld(e+1,t-2);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+1.5,21,c.z+12),this.renderer.camera.lookAt(this.camTarget)}update(e){if(this.renderer.contextLost){try{this.hud.update(e)}catch{}return}try{if(Number.isFinite(this.mana)||(this.mana=0),this.mana=Math.max(0,Math.min(this.maxMana(),this.mana)),Number.isFinite(this.gold)||(this.gold=0),this.gold=Math.max(0,this.gold),!this.gameOver){this.time+=e;try{this.updateCamera(e)}catch(r){console.warn("[underkeep] camera",r)}try{this.regenMana(e)}catch(r){console.warn("[underkeep] mana",r)}try{this.regenHatcheryFood(e)}catch(r){console.warn("[underkeep] food",r)}try{this.assignJobs(e)}catch(r){console.warn("[underkeep] assignJobs",r)}try{this.updateMoods(e)}catch(r){console.warn("[underkeep] moods",r)}try{this.updateCreatures(e)}catch(r){console.warn("[underkeep] creatures",r)}try{this.updatePortal(e)}catch(r){console.warn("[underkeep] portal",r)}try{this.updateHeroWave(e)}catch(r){console.warn("[underkeep] heroes",r)}try{this.checkHeart()}catch(r){console.warn("[underkeep] heart",r)}try{this.payWages(e)}catch(r){console.warn("[underkeep] wages",r)}try{this.updateHazards(e)}catch(r){console.warn("[underkeep] hazards",r)}if(this.saveAcc+=e,this.saveAcc>=4){this.saveAcc=0;try{this.saveNow()}catch(r){console.warn("[underkeep] save",r)}}}const t=this.grid.tiles.reduce((r,o)=>r+(o.mark===Ne.Dig?1:0),0),i=this.creatures.filter(r=>r.alive&&(r.job===V.Dig||r.job===V.Mine)).length;this.renderer.setDigLoad(t>=6||i>=2),this.rebuildCooldown>0&&(this.rebuildCooldown-=e),this.pendingStructuralRebuild||this.gridDirty?this.rebuildCooldown<=0&&this.rebuild():(this.marksDirty&&!this.paint&&this.flushMarks(),this.fogDirty&&this.flushFog());for(const r of this.creatures)try{if(r.alive){r.clampStats(),r.syncMesh(this.time);try{if(r.mesh)if(r.held)r.mesh.visible=!0;else{const o=Number.isFinite(r.x)?Math.round(r.x):0,a=Number.isFinite(r.y)?Math.round(r.y):0;r.mesh.visible=this.grid.isExplored(o,a)}}catch{r.mesh&&(r.mesh.visible=!0)}}else r.mesh&&(r.mesh.visible=!1)}catch(o){console.warn("[underkeep] creature sync failed",r?.id,o)}this.renderer.update(e),this.hud.update(e),(this.selected||this.held)&&this.refreshInspector(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(r=>r.alive&&r.isWorker).length,this.creatures.filter(r=>r.alive&&!r.isWorker&&!r.isHero).length),this.hud.setSpellAffordable("createWorker",this.gold>=this.workerCost()),this.hud.setSpellAffordable("speed",this.mana>=Zr),this.hud.setSpellAffordable("lightning",this.mana>=Jr),this.hud.setSpellAffordable("heal",this.healUnlocked&&this.mana>=30),this.hud.setSpellAffordable("possess",this.possessed?!0:this.mana>=Tn),this.creatures=this.creatures.filter(r=>{if(!r.alive){try{this.renderer.removeEntityMesh(r.mesh)}catch{}return!1}return!0}),this.held&&!this.held.alive&&(this.held=null);const n=this.selectedGroup.length;this.selectedGroup=this.selectedGroup.filter(r=>r.alive),this.selected&&!this.selected.alive&&(this.selected=null),n!==this.selectedGroup.length?this.syncSelectionPrimary():!this.selected&&this.selectedGroup.length===0&&this.hud.hideInspector()}catch(t){throw console.error("[underkeep] update failed",t),t}}wageAcc=0;payWages(e){if(this.wageAcc+=e,this.paydayToastCooldown>0&&(this.paydayToastCooldown-=e),this.wageAcc<Yr)return;this.wageAcc=0;let t=0;const i=[];for(const n of this.creatures){if(!n.alive||n.isHero||n.isWorker)continue;const r=Go[n.kind].goldWage;r>0&&(t+=r,i.push(n))}if(!(t<=0||i.length===0))if(this.gold>=t){this.gold-=t,this.hud.say(ne.payday.replace("%g",String(t)));for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)+4)}else{this.gold=0;for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)-32),n.leaveWarned=!0;this.hud.sayNow(ne.paydayFail),this.paydayToastCooldown=8}}pathOptsFor(e){return{forHero:e.isHero,allowHazard:e.isHero||Ws(e.kind)||Xs(e.kind)}}placeBridge(e,t,i){if(!this.grid.canPlaceBridge(e,t))return;const n=i?Ng:Ig;if(this.gold<n){this.hud.say(i?"Need more gold for a stone bridge.":"Need more gold for a wooden bridge.");return}const r=this.grid.get(e,t);r&&(this.gold-=n,r.kind=i?A.BridgeStone:A.BridgeWood,r.goldAmount=0,r.digProgress=0,r.fortified=!1,r.mark=Ne.None,r.room=D.None,r.explored=!0,this.requestStructuralRebuild(),this.fogDirty=!0,this.hud.say(i?ne.bridgeStone:ne.bridgeWood),this.mentioneOnce("bridge",ne.bridgeWood),this.saveNow())}enterPossession(e){try{if(!e||!e.alive||e.isHero)return;this.possessed&&this.exitPossession(!0),e.clampStats(),e.held=!1,e.stunTimer=0,e.setPath(null),e.job=V.Idle,e.jobTarget=null,this.possessed=e,this.selectCreature(e);const t=this.renderer.camera;this.possessCamBackup={tx:this.camTarget.x,tz:this.camTarget.z,cx:t.position.x,cy:t.position.y,cz:t.position.z},this.hud.sayNow(ne.possess),this.refreshInspector()}catch(t){console.warn("[underkeep] enterPossession failed",t),this.possessed=null}}exitPossession(e=!1){try{const t=this.possessed;if(this.possessed=null,this.possessArmed=!1,this.possessCamBackup){const i=this.possessCamBackup;this.camTarget.set(i.tx,0,i.tz),this.renderer.camera.position.set(i.cx,i.cy,i.cz),this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z),this.possessCamBackup=null}t&&t.alive&&(t.setPath(null),t.job=V.Idle),e||this.hud.say(ne.possessEnd),this.refreshInspector()}catch(t){console.warn("[underkeep] exitPossession failed",t),this.possessed=null,this.possessCamBackup=null}}possessMoveTo(e,t){const i=this.possessed;if(!i||!i.alive){this.exitPossession(!0);return}const n=!i.isWorker||Ws(i.kind)||Xs(i.kind);if(!this.grid.isWalkable(e,t,{allowHazard:n})&&this.grid.get(e,t)?.kind!==A.Heart)return;const r=this.grid.findPath(i.x,i.y,e,t,{allowHazard:!i.isWorker||Ws(i.kind)||Xs(i.kind)});r&&(i.setPath(r),i.job=V.Wander,i.jobTarget={x:e,y:t})}updateHazards(e){if(this.lavaDmgAcc+=e,this.lavaDmgAcc<.45)return;const t=this.lavaDmgAcc;this.lavaDmgAcc=0;for(const i of this.creatures){if(!i.alive||i.held)continue;this.possessed;const n=this.grid.get(Math.round(i.x),Math.round(i.y));if(n)if(n.kind===A.Lava){if(Ws(i.kind)||Xs(i.kind))continue;const r=8*t;if(i.takeDamage(r),i.alive){if(Math.random()<.08)try{this.renderer.spawnFx(new E(i.wx,.4,i.wz),16737826,.35)}catch{}}else{try{this.renderer.spawnFx(new E(i.wx,.6,i.wz),16729088,.7)}catch{}this.possessed===i&&this.exitPossession()}}else n.kind,A.Water}}updateCamera(e){const t=this.renderer.camera;if(this.possessed&&this.possessed.alive){const a=this.possessed,l=new E(a.wx,.35,a.wz);this.camTarget.lerp(l,Math.min(1,8*e));const h=new E(a.wx-Math.sin(a.facing)*3.2,2.55,a.wz-Math.cos(a.facing)*3.2);t.position.lerp(h,Math.min(1,6*e)),t.lookAt(a.wx,.9,a.wz);const c=Math.round(Math.sin(a.facing)),d=Math.round(Math.cos(a.facing));let u=0,f=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(u+=c,f+=d),(this.keys.has("s")||this.keys.has("arrowdown"))&&(u-=c,f-=d),(this.keys.has("a")||this.keys.has("arrowleft"))&&(u-=d,f+=c),(this.keys.has("d")||this.keys.has("arrowright"))&&(u+=d,f-=c),u!==0||f!==0){const g=Math.round(a.x)+Math.sign(u),v=Math.round(a.y)+Math.sign(f);if(a.path.length===0||a.pathIndex>=a.path.length)this.possessMoveTo(g,v);else{const m=a.path[a.path.length-1];(m.x!==g||m.y!==v)&&this.possessMoveTo(g,v)}}return}const i=18,n=new E;t.getWorldDirection(n),n.y=0,n.normalize();const r=new E().crossVectors(n,new E(0,1,0)).normalize(),o=new E;(this.keys.has("w")||this.keys.has("arrowup"))&&o.add(n),(this.keys.has("s")||this.keys.has("arrowdown"))&&o.sub(n),(this.keys.has("a")||this.keys.has("arrowleft"))&&o.sub(r),(this.keys.has("d")||this.keys.has("arrowright"))&&o.add(r),o.lengthSq()>0&&(o.normalize().multiplyScalar(i*e),t.position.add(o),this.camTarget.add(o),t.lookAt(this.camTarget.x,0,this.camTarget.z))}regenMana(e){const i=2+this.grid.countClaimed()*.08,n=Number.isFinite(this.mana)?this.mana:0;this.mana=Math.max(0,Math.min(this.maxMana(),n+i*e))}regenHatcheryFood(e){const t=this.grid.countRoom(D.Hatchery);if(t<=0){this.hatcheryFood=0;return}this.foodRegenAcc+=e;const i=2.5;for(;this.foodRegenAcc>=i;){this.foodRegenAcc-=i;const n=t*4;this.hatcheryFood<n&&(this.hatcheryFood=Math.min(n,this.hatcheryFood+t))}}assignJobs(e){const t=this.creatures.filter(l=>l.alive&&l.isWorker&&!l.held&&l.stunTimer<=0);for(const l of t){const h=this.creatures.find(c=>c.alive&&c.isHero&&Math.hypot(c.x-l.x,c.y-l.y)<5);if(h){l.job=V.Flee,l.fleeTimer=2;const c=l.x-h.x,d=l.y-h.y,u=Math.max(0,Math.min(this.grid.width-1,l.x+Math.sign(c||1)*3)),f=Math.max(0,Math.min(this.grid.height-1,l.y+Math.sign(d||1)*3));let g=null;for(let v=0;v<5&&!g;v++)for(let m=-v;m<=v&&!g;m++)for(let p=-v;p<=v&&!g;p++)this.grid.isWalkable(u+p,f+m)&&(g={x:u+p,y:f+m});g&&l.setPath(this.grid.findPath(l.x,l.y,g.x,g.y));continue}}const i=[],n=[],r=[];for(const l of this.grid.tiles)l.mark===Ne.Dig&&this.grid.isDiggable(l.x,l.y)&&i.push({x:l.x,y:l.y}),l.mark===Ne.Claim&&l.kind===A.Dirt&&n.push({x:l.x,y:l.y}),l.mark===Ne.Fortify&&!l.fortified&&r.push({x:l.x,y:l.y});const o=new Set;for(const l of t)l.jobTarget&&(l.job===V.Dig||l.job===V.Mine||l.job===V.Claim||l.job===V.Fortify)&&o.add(`${l.jobTarget.x},${l.jobTarget.y}`),(l.job===V.Dig||l.job===V.Mine)&&l.jobTarget&&(!this.grid.get(l.jobTarget.x,l.jobTarget.y)||this.grid.get(l.jobTarget.x,l.jobTarget.y).mark!==Ne.Dig||!this.grid.isDiggable(l.jobTarget.x,l.jobTarget.y))&&(l.job=V.Idle,l.jobTarget=null,l.setPath(null));const a=t.filter(l=>l.job===V.Idle||l.job===V.Flee&&l.fleeTimer<=0);for(const l of a){l.job=V.Idle,l.jobTarget=null;let h=!1;{const u=this.grid.countRoom(D.Hatchery)>0,f=this.grid.countRoom(D.Lair)>0,g=l.hunger>(u?26:55),v=l.sleepNeed>(f?30:70)||l.hp<l.maxHp*.65;if(g&&u&&(this.hatcheryFood>0||l.hunger>50)&&this.assignEat(l)||v&&f&&this.assignSleep(l))continue}if(l.goldCarried>=40){const u=this.grid.tiles.find(m=>m.room===D.Treasury),f=u?.x??this.grid.heartPos.x,g=u?.y??this.grid.heartPos.y,v=this.grid.findPath(l.x,l.y,f,g);v&&(l.job=V.Haul,l.jobTarget={x:f,y:g},l.setPath(v),h=!0)}if(h)continue;const c=i.map(u=>({m:u,d:Math.abs(u.x-l.x)+Math.abs(u.y-l.y)})).sort((u,f)=>u.d-f.d);for(const{m:u}of c){const f=`${u.x},${u.y}`;if(o.has(f)||!this.grid.isReachableSolid(u.x,u.y))continue;const g=this.grid.get(u.x,u.y),v=this.grid.findPathAdjacent(l.x,l.y,u.x,u.y);if(v){l.job=g.kind===A.Gold?V.Mine:V.Dig,l.jobTarget=u,l.setPath(v),l.workTimer=0,o.add(f),h=!0;break}}if(h)continue;const d=n.map(u=>({m:u,d:Math.abs(u.x-l.x)+Math.abs(u.y-l.y)})).sort((u,f)=>u.d-f.d);for(const{m:u}of d){const f=`${u.x},${u.y}`;if(o.has(f))continue;const g=this.grid.findPath(l.x,l.y,u.x,u.y);if(g){l.job=V.Claim,l.jobTarget=u,l.setPath(g),l.workTimer=0,o.add(f),h=!0;break}}if(!h){for(const u of r){const f=`${u.x},${u.y}`;if(o.has(f)||!this.grid.isReachableSolid(u.x,u.y))continue;const g=this.grid.findPathAdjacent(l.x,l.y,u.x,u.y);if(g){l.job=V.Fortify,l.jobTarget=u,l.setPath(g),l.workTimer=0,o.add(f),h=!0;break}}if(!h){let u=null,f=999;for(const g of this.grid.tiles)if(!(g.kind!==A.Claimed&&g.kind!==A.Heart))for(const v of this.grid.neighbors4(g.x,g.y)){if(v.kind!==A.Earth||v.fortified||v.mark===Ne.Dig||!v.explored||!this.grid.isReachableSolid(v.x,v.y))continue;const m=`${v.x},${v.y}`;if(o.has(m))continue;const p=Math.abs(v.x-l.x)+Math.abs(v.y-l.y);p<f&&p<=16&&(f=p,u={x:v.x,y:v.y})}if(u){const g=this.grid.findPathAdjacent(l.x,l.y,u.x,u.y);if(g){const v=this.grid.get(u.x,u.y);v.mark!==Ne.Fortify&&(v.mark=Ne.Fortify,this.marksDirty=!0),l.job=V.Fortify,l.jobTarget=u,l.setPath(g),l.workTimer=0,o.add(`${u.x},${u.y}`),h=!0,this.mentioneOnce("autoFortify",ne.autoFortify)}}}if(!h&&l.goldCarried>0){const u=this.grid.tiles.find(m=>m.room===D.Treasury),f=u?.x??this.grid.heartPos.x,g=u?.y??this.grid.heartPos.y,v=this.grid.findPath(l.x,l.y,f,g);v&&(l.job=V.Haul,l.jobTarget={x:f,y:g},l.setPath(v))}}}for(const l of t){if(l.job===V.Flee||l.held)continue;const h=this.grid.countRoom(D.Hatchery)>0,c=this.grid.countRoom(D.Lair)>0;if(l.hunger=Math.min(100,l.hunger+(h?7.5:2.8)*e),l.sleepNeed=Math.min(100,l.sleepNeed+(c?6.5:1.5)*e),l.job===V.Eat||l.job===V.Sleep)continue;const d=l.hunger>(h?26:55),u=l.sleepNeed>(c?30:70)||l.hp<l.maxHp*.65;!d&&!u||(d&&h&&(this.hatcheryFood>0||l.hunger>50)?this.assignEat(l):u&&c&&this.assignSleep(l))}for(const l of this.creatures){if(!l.alive||l.isWorker||l.isHero||l.held||l.stunTimer>0)continue;if(l.job===V.AttackMove&&l.jobTarget){const m=this.creatures.find(p=>p.alive&&p.isHero&&Math.hypot(p.x-l.x,p.y-l.y)<9);if(m)if(l.bedKey&&this.releaseBed(l),Math.hypot(l.x-m.x,l.y-m.y)>1.2){const p=this.grid.findPath(l.x,l.y,m.x,m.y);p&&l.setPath(p)}else l.setPath(null);else if(l.path.length===0){const p=l.jobTarget.x,x=l.jobTarget.y;if(l.x!==p||l.y!==x){const w=this.grid.findPath(l.x,l.y,p,x);w&&l.setPath(w)}}continue}const h=this.creatures.find(m=>m.alive&&m.isHero&&Math.hypot(m.x-l.x,m.y-l.y)<10);if(h){if(l.bedKey&&this.releaseBed(l),l.job=V.Fight,l.jobTarget={x:h.x,y:h.y},Math.hypot(l.x-h.x,l.y-h.y)>1.2){const m=this.grid.findPath(l.x,l.y,h.x,h.y);m&&l.setPath(m)}else l.setPath(null);continue}const c=this.grid.countRoom(D.Hatchery)>0,d=this.grid.countRoom(D.Lair)>0;if(l.hunger=Math.min(100,l.hunger+(c?8:4.5)*e),l.sleepNeed=Math.min(100,l.sleepNeed+(d?7:3)*e),l.trainNeed=Math.min(100,l.trainNeed+2.2*e),l.job===V.Eat||l.job===V.Sleep||l.job===V.Train||l.job===V.Research){if(l.job===V.Sleep&&l.jobTarget){const m=`${l.jobTarget.x},${l.jobTarget.y}`;l.bedKey!==m&&(l.bedKey=m),this.bedOwners.has(m)||this.bedOwners.set(m,l.id)}if(l.path.length===0&&l.jobTarget){const m=this.grid.findPath(l.x,l.y,l.jobTarget.x,l.jobTarget.y);m&&l.setPath(m)}continue}l.job===V.Fight&&(l.job=V.Idle),l.job===V.Guard&&(l.job=V.Idle);const u=l.hp<l.maxHp*.65;if(l.hunger>(c?24:40)&&c&&this.assignEat(l)||(l.sleepNeed>(d?28:50)||u)&&d&&this.assignSleep(l))continue;const f=l.kind===ae.Gravemage,g=l.kind===ae.Rattlekin||l.kind===ae.Emberling;if(f&&this.grid.countRoom(D.Library)>0){const m=this.findRoomTile(D.Library);if(m){l.job=V.Research,l.jobTarget=m,l.setPath(this.grid.findPath(l.x,l.y,m.x,m.y));continue}}if(g&&l.trainNeed>28&&this.grid.countRoom(D.Training)>0&&l.level<4){const m=this.findRoomTile(D.Training);if(m){l.job=V.Train,l.jobTarget=m,l.setPath(this.grid.findPath(l.x,l.y,m.x,m.y));continue}}const v=this.grid.tiles.find(m=>m.rally);if(v&&(g||l.kind===ae.Skitterwing)&&l.trainNeed<=50){l.job=V.Guard,l.jobTarget={x:v.x,y:v.y},l.x!==v.x||l.y!==v.y?l.setPath(this.grid.findPath(l.x,l.y,v.x,v.y)):l.setPath(null);continue}if(g&&this.grid.countRoom(D.Guard)>0&&l.trainNeed<=35){const m=this.findRoomTile(D.Guard);if(m){l.job=V.Guard,l.jobTarget=m,l.x!==m.x||l.y!==m.y?l.setPath(this.grid.findPath(l.x,l.y,m.x,m.y)):l.setPath(null);continue}}if(!f&&l.trainNeed>45&&this.grid.countRoom(D.Training)>0&&l.level<4){const m=this.findRoomTile(D.Training);if(m){l.job=V.Train,l.jobTarget=m,l.setPath(this.grid.findPath(l.x,l.y,m.x,m.y));continue}}if((l.job===V.Idle||l.job===V.Wander&&l.path.length===0)&&Math.random()<.008){const m=this.findFreeOrOwnedBed(l);if(m)l.job=V.Wander,l.setPath(this.grid.findPath(l.x,l.y,m.x,m.y));else{const p=this.grid.tiles.filter(x=>x.kind===A.Claimed);if(p.length){const x=p[Math.floor(Math.random()*p.length)];l.job=V.Wander,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y))}}}}for(const l of this.creatures){if(!l.alive||!l.isHero||l.stunTimer>0)continue;let h=null,c=8.5;for(const d of this.creatures){if(!d.alive||d.isHero||d.isWorker||d.held)continue;const u=Math.hypot(d.x-l.x,d.y-l.y);u<c&&(c=u,h=d)}if(h)l.job=V.Fight,l.jobTarget={x:h.x,y:h.y},Math.hypot(l.x-h.x,l.y-h.y)>1.15?l.setPath(this.grid.findPath(l.x,l.y,h.x,h.y,{forHero:!0,allowHazard:!0})):l.setPath(null);else{l.job=V.Fight;const d=this.grid.heartPos.x,u=this.grid.heartPos.y;if(l.path.length===0||Math.random()<.045){const f=this.grid.findPath(l.x,l.y,d,u,{forHero:!0,allowHazard:!0});if(f)l.setPath(f);else{let g=null,v=1/0;for(const m of this.grid.tiles){if(!this.grid.isWalkable(m.x,m.y)&&m.kind!==A.Heart)continue;const p=Math.hypot(m.x-d,m.y-u),x=Math.hypot(m.x-l.x,m.y-l.y);p<v&&x<20&&(v=p,g={x:m.x,y:m.y})}g&&l.setPath(this.grid.findPath(l.x,l.y,g.x,g.y,{forHero:!0,allowHazard:!0}))}}}}}findRoomTile(e){const t=this.grid.tiles.filter(n=>n.room===e);if(!t.length)return null;const i=t[Math.floor(Math.random()*t.length)];return{x:i.x,y:i.y}}releaseBed(e){e.bedKey&&(this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null)}findFreeOrOwnedBed(e){if(e.bedKey){const[i,n]=e.bedKey.split(",").map(Number),r=this.grid.get(i,n);if(r&&r.room===D.Lair)return{x:i,y:n};this.releaseBed(e)}const t=this.grid.tiles.filter(i=>i.room===D.Lair);for(const i of t){const n=`${i.x},${i.y}`,r=this.bedOwners.get(n);if(r===void 0||r===e.id)return{x:i.x,y:i.y}}return t.length?{x:t[0].x,y:t[0].y}:null}assignSleep(e){const t=this.findFreeOrOwnedBed(e);if(!t)return!1;const i=`${t.x},${t.y}`,n=this.bedOwners.get(i);if(n!==void 0&&n!==e.id){const r=this.grid.tiles.find(a=>{if(a.room!==D.Lair)return!1;const l=`${a.x},${a.y}`;return!this.bedOwners.has(l)});if(!r)return this.mentioneOnce("lairFull",ne.lairFull),!1;const o=`${r.x},${r.y}`;return this.bedOwners.set(o,e.id),e.bedKey=o,e.job=V.Sleep,e.jobTarget={x:r.x,y:r.y},e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,r.x,r.y)),this.mentioneOnce("lairUse",ne.lairUse),this.hud.say(ne.bedClaim),!0}return this.bedOwners.set(i,e.id),e.bedKey=i,e.job=V.Sleep,e.jobTarget=t,e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("lairUse",ne.lairUse),this.hud.say(ne.bedClaim),!0}assignEat(e){this.hatcheryFood<=0&&this.grid.countRoom(D.Hatchery)>0&&this.mentioneOnce("hatcheryHungry",ne.hatcheryHungry);const t=this.findRoomTile(D.Hatchery);return t?(e.job=V.Eat,e.jobTarget=t,e.eatAnnounced=!1,e.eatAnim=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("hatcheryUse",ne.hatcheryUse),!0):!1}countOccupiedBeds(){let e=0;for(const t of this.creatures)!t.alive||t.job!==V.Sleep||!t.bedKey||e++;return e}spikeNeedsForRoom(e){for(const t of this.creatures)!t.alive||t.isHero||(e===D.Hatchery&&(t.hunger=Math.max(t.hunger,70)),e===D.Lair&&(t.sleepNeed=Math.max(t.sleepNeed,75),t.hp>t.maxHp*.55&&(t.hp=Math.min(t.hp,t.maxHp*.5))))}updateMoods(e){try{const t=this.grid.countRoom(D.Lair)>0,i=Math.max(1,this.grid.countRoom(D.Lair)),n=this.creatures.filter(o=>o.alive&&!o.isHero).length,r=t&&n>i+1;for(const o of this.creatures)try{if(!o.alive||o.isHero||o.held)continue;o.clampStats();let a=2*e;o.hunger>45&&(a-=10*e*((o.hunger-45)/55)),o.sleepNeed>40&&(a-=8*e*((o.sleepNeed-40)/60)),t||(a-=3.5*e),r&&(a-=4.5*e),(o.job===V.Sleep||o.job===V.Eat)&&(a+=12*e),o.hp<o.maxHp*.4&&(a-=3*e),Number.isFinite(a)||(a=0),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+a),o.mood<14&&!o.leaveWarned?(o.leaveWarned=!0,this.hud.say(ne.leaveThreat),this.mentioneOnce("moodLow",ne.moodLow)):o.mood>35&&(o.leaveWarned=!1);const l=o.workEfficiency();if(o.isWorker&&l<.75&&!o.efficiencyWarned?(o.efficiencyWarned=!0,this.hud.say(ne.sluggishDig)):l>=.82&&(o.efficiencyWarned=!1),o.mood<6&&!o.isWorker&&o.job===V.Idle&&Math.random()<e*.015){o.alive=!1;try{o.mesh&&(o.mesh.visible=!1)}catch{}this.held===o&&(this.held=null),o.held=!1,o.selected=!1,this.selectedGroup=this.selectedGroup.filter(h=>h!==o&&h.alive),this.selected===o&&(this.selected=null),this.pruneSelection(),this.hud.say("A minion has left the Underkeep."),this.selected?this.refreshInspector():this.hud.hideInspector()}}catch(a){console.warn("[underkeep] mood tick failed",o?.id,a)}}catch(t){console.warn("[underkeep] updateMoods failed",t)}}updateCreatures(e){for(const t of this.creatures){if(!t.alive||t.held)continue;if(t.stunTimer>0){t.stunTimer-=e;continue}t.speedBuff>0&&(t.speedBuff-=e),t.fleeTimer>0&&(t.fleeTimer-=e),t.attackCooldown>0&&(t.attackCooldown-=e);const i=t.moveAlongPath(e,this.grid);if(t.isHero)this.triggerTrapsForHero(t);else{const n=this.grid.get(t.x,t.y);n&&n.door===rt.Closed&&(n.door=rt.Open,this.requestStructuralRebuild())}t.isWorker?this.updateWorkerJob(t,e,i):t.isHero?this.updateHeroJob(t,e):this.updateMinionJob(t,e,i)}}triggerTrapsForHero(e){const t=this.grid.get(e.x,e.y);if(!t||t.trap!==Mt.Sentry)return;const i=38;e.hp-=i,e.pulseTint("feast",.55),this.renderer.spawnFx(new E(e.wx,1.1,e.wz),16755268,.55),this.renderer.spawnFx(new E(e.wx,1.4,e.wz),16737826,.4),t.trap=Mt.None,this.requestStructuralRebuild(),this.hud.say(ne.sentryFire),e.hp<=0&&(e.alive=!1,e.mesh.visible=!1)}updateWorkerJob(e,t,i){if(e.job===V.Flee){(i||e.fleeTimer<=0)&&(e.job=V.Idle,e.setPath(null));return}if(e.job===V.Eat||e.job===V.Sleep){this.updateMinionJob(e,t,i);return}if(!e.jobTarget)return;const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n){e.job=V.Idle;return}if(e.job===V.Dig||e.job===V.Mine){if(!i&&e.pathIndex<e.path.length)return;if(Math.abs(e.x-n.x)+Math.abs(e.y-n.y)!==1&&Math.hypot(e.x-n.x,e.y-n.y)>1.55){const l=this.grid.findPathAdjacent(e.x,e.y,n.x,n.y);l?e.setPath(l):(e.job=V.Idle,e.jobTarget=null);return}const o=this.grid.tileToWorld(n.x,n.y);e.faceToward(o.x,o.z),e.workTimer+=t;const a=.38/Math.max(.5,Math.min(1.25,e.workEfficiency()));if(e.workTimer>=a){e.workTimer=0;const l=this.grid.tileToWorld(n.x,n.y);if(this.renderer.spawnDigDebris(l.x,l.z,n.kind===A.Gold?14725184:12615744),n.kind===A.Gold){const h=Math.min(40,n.goldAmount);n.goldAmount-=h,e.goldCarried+=h,n.digProgress=Math.min(1,n.digProgress+.2*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),this.mentioneOnce("firstGold",ne.firstGold),n.goldAmount<=0?(n.kind=A.Dirt,n.mark=Ne.None,n.goldAmount=0,n.digProgress=0,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=V.Idle,e.jobTarget=null):e.goldCarried>=120&&(e.job=V.Idle,e.jobTarget=null,e.setPath(null))}else n.kind===A.Earth?(n.digProgress=Math.min(1,n.digProgress+.34*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),n.digProgress>=1&&(n.kind=A.Dirt,n.mark=Ne.None,n.digProgress=0,n.door=rt.None,n.trap=Mt.None,n.rally=!1,n.room=D.None,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=V.Idle,e.jobTarget=null,this.saveNow())):(n.mark=Ne.None,n.digProgress=0,e.job=V.Idle,e.jobTarget=null,this.marksDirty=!0)}}else if(e.job===V.Claim){if(!i&&e.pathIndex<e.path.length)return;if(Math.hypot(e.x-n.x,e.y-n.y)>1.2){const r=this.grid.findPath(e.x,e.y,n.x,n.y);r?e.setPath(r):(e.job=V.Idle,e.jobTarget=null);return}if(n.kind!==A.Dirt){n.mark=Ne.None,e.job=V.Idle,e.jobTarget=null,this.marksDirty=!0;return}if(e.workTimer+=t,e.workTimer>=.35){n.kind=A.Claimed,n.claimedProgress=1,n.mark=Ne.None,this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=V.Idle,e.jobTarget=null;const r=this.grid.tileToWorld(n.x,n.y);this.renderer.spawnFx(new E(r.x,.3,r.z),13155496,.4),this.mentioneOnce("claim",ne.claim),this.mentioneOnce("fog",ne.fog),this.saveNow()}}else if(e.job===V.Fortify){if(Math.hypot(e.x-n.x,e.y-n.y)>1.6)return;e.workTimer+=t,e.workTimer>=1.5&&(n.fortified=!0,n.mark=Ne.None,this.requestStructuralRebuild(),e.job=V.Idle,e.jobTarget=null)}else if(e.job===V.Haul){if(!i)return;e.goldCarried>0&&(this.gold+=e.goldCarried,this.renderer.spawnFx(new E(e.wx,.6,e.wz),16764992,.55),this.mentioneOnce("firstGold",ne.firstGold)),e.goldCarried=0,e.job=V.Idle,e.jobTarget=null}}updateMinionJob(e,t,i){if(e.job===V.Eat){if(!i&&e.pathIndex<e.path.length)return;e.eatAnnounced||(e.eatAnnounced=!0,this.hud.say(ne.feasting),this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!0),e.pulseTint("feast",1.4)),this.hatcheryFood>0?(this.hatcheryFood=Math.max(0,this.hatcheryFood-1.8*t),e.hunger=Math.max(0,e.hunger-70*t),Math.random()<t*5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!1),e.pulseTint("feast",.7))):e.hunger=Math.max(0,e.hunger-12*t),e.hunger<5&&(e.job=V.Idle,e.jobTarget=null,e.eatAnnounced=!1)}else if(e.job===V.Sleep){if(!i&&e.pathIndex<e.path.length)return;if(e.jobTarget){const r=`${e.jobTarget.x},${e.jobTarget.y}`;e.bedKey=r,this.bedOwners.set(r,e.id)}e.sleepNeed=Math.max(0,e.sleepNeed-40*t);const n=e.hp;e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+12*t)),e.hp>n&&(e.restHealAcc+=t,Math.random()<t*4.5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!1),e.pulseTint("heal",.75)),e.restHealAcc>=1.6&&(e.restHealAcc=0,this.hud.say(ne.lairResting),this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!0),e.pulseTint("heal",1.5))),e.sleepNeed<5&&e.hp>=e.maxHp*.95&&(e.job=V.Idle,e.jobTarget=null)}else if(e.job===V.Research&&i)this.researchProgress=Math.min(100,this.researchProgress+12*t),e.workTimer+=t,Math.random()<t*.35&&this.renderer.spawnFx(new E(e.wx,.9,e.wz),8939263,.35),this.researchProgress>=100&&(this.researchProgress=0,this.researchRank=Math.min(3,this.researchRank+1),this.researchRank>=1&&!this.healUnlocked?(this.healUnlocked=!0,this.hud.sayNow(ne.researchHeal)):this.hud.sayNow(ne.researchDone.replace("%r",String(this.researchRank))),this.renderer.spawnFx(new E(e.wx,1.2,e.wz),11176191,.8));else if(e.job===V.Guard){if(!e.jobTarget){e.job=V.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null);return}else if(e.job===V.Train&&i){if(e.trainNeed=Math.max(0,e.trainNeed-30*t),e.workTimer+=t,e.workTimer>8&&e.level<4){e.level++,e.maxHp+=15,e.hp=e.maxHp,e.damage+=3,e.workTimer=0,this.renderer.spawnFx(new E(e.wx,1,e.wz),16755268,.6);const n={rattlekin:"Rattlekin",emberling:"Emberling",skitterwing:"Skitterwing",gravemage:"Gravemage"};this.hud.sayNow(`${n[e.kind]??"Minion"} reaches training level ${e.level}!`)}e.trainNeed<5&&(e.job=V.Idle)}else e.job===V.AttackMove?(this.doCombat(e,t),i&&e.jobTarget&&e.x===e.jobTarget.x&&e.y===e.jobTarget.y&&(this.creatures.some(r=>r.alive&&r.isHero&&Math.hypot(r.x-e.x,r.y-e.y)<12)||(e.job=V.Guard))):e.job===V.Fight?this.doCombat(e,t):e.job===V.Wander&&i&&(e.job=V.Idle)}updateHeroJob(e,t){const i=this.grid.heartPos.x,n=this.grid.heartPos.y;Math.hypot(e.x-i,e.y-n)<=1.5&&e.attackCooldown<=0&&(e.attackCooldown=1.2,this.heartHp-=e.damage,this.renderer.spawnFx(new E(this.grid.tileToWorld(i,n).x,1,this.grid.tileToWorld(i,n).z),16719936,.4),this.mentioneOnce("heartHurt",ne.heartHurt)),this.doCombat(e,t)}heartHp=500;doCombat(e,t){try{const i=e.isHero?1.65:1.55,n=this.creatures.filter(d=>d.alive&&d!==e&&d.isHero!==e.isHero&&!d.isWorker&&Math.hypot(d.x-e.x,d.y-e.y)<i),r=e.isHero?this.creatures.filter(d=>d.alive&&d.isWorker&&Math.hypot(d.x-e.x,d.y-e.y)<1.35):[],o=n.length?n:r;if(!o.length||(!this.heroEngageAnnounced&&(e.isHero||o.some(d=>d.isHero))&&(this.heroEngageAnnounced=!0,this.hud.say(ne.heroEngage)),e.attackCooldown>0))return;const a=e.isHero?1:1+(e.level-1)*.12;e.attackCooldown=e.isHero?.85:.78;const l=o[0],h=l.alive,c=e.damage*(.95+Math.random()*.25)*a;l.takeDamage(c),this.renderer.spawnFx(new E(l.wx,.85,l.wz),e.isHero?8956671:16728128,.32),this.renderer.spawnFx(new E(l.wx,1.15,l.wz),16768426,.18),h&&!l.alive&&l.isHero&&(this.hud.sayNow(ne.heroDown),this.renderer.spawnFx(new E(l.wx,1.2,l.wz),16772744,.7))}catch(i){console.warn("[underkeep] doCombat failed",i)}}announceSpecies(e,t){const n={skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage"}[e]??"minion";this.hud.sayNow(`A ${n} has entered the Underkeep.`),this.hud.say(t)}updatePortal(e){if(this.portalCooldown-=e,this.portalCooldown>0)return;const t=this.grid.countRoom(D.Portal);if(t<=0)return;const i=this.grid.countRoom(D.Lair),n=this.grid.countRoom(D.Hatchery),r=this.grid.countRoom(D.Training),o=this.grid.countRoom(D.Library),a=this.grid.countRoom(D.Treasury),l=this.grid.countClaimed(),h=this.grid.tiles.find(u=>u.room===D.Portal);if(!h)return;let c=h.x,d=h.y;for(const u of this.grid.neighbors4(h.x,h.y))if(this.grid.isWalkable(u.x,u.y)){c=u.x,d=u.y;break}if(!this.attracted.skitterwing&&l>=16&&t>=1){this.spawnCreature(ae.Skitterwing,c,d),this.attracted.skitterwing=!0,this.portalCooldown=8,this.announceSpecies(ae.Skitterwing,ne.skitterwing);return}if(!this.attracted.rattlekin&&i>=4&&n>=2){this.spawnCreature(ae.Rattlekin,c,d),this.attracted.rattlekin=!0,this.portalCooldown=10,this.announceSpecies(ae.Rattlekin,ne.rattlekin);return}if(!this.attracted.emberling&&r>=4&&i>=6&&this.gold>=200){this.spawnCreature(ae.Emberling,c,d),this.attracted.emberling=!0,this.portalCooldown=12,this.announceSpecies(ae.Emberling,ne.emberling);return}if(!this.attracted.gravemage&&o>=4&&i>=4){this.spawnCreature(ae.Gravemage,c,d),this.attracted.gravemage=!0,this.portalCooldown=12,this.announceSpecies(ae.Gravemage,ne.gravemage);return}if(this.attracted.rattlekin&&i>=4&&n>=2&&Math.random()<.12&&this.creatures.filter(f=>f.alive&&f.kind===ae.Rattlekin).length<4){this.spawnCreature(ae.Rattlekin,c,d),this.portalCooldown=22,this.hud.sayNow("A Rattlekin has entered the Underkeep.");return}if(this.attracted.gravemage&&o>=4&&Math.random()<.1&&this.creatures.filter(f=>f.alive&&f.kind===ae.Gravemage).length<2){this.spawnCreature(ae.Gravemage,c,d),this.portalCooldown=28,this.hud.sayNow("A Gravemage has entered the Underkeep.");return}this.attracted.emberling&&r>=4&&a>=2&&Math.random()<.08&&this.creatures.filter(f=>f.alive&&f.kind===ae.Emberling).length<2&&(this.spawnCreature(ae.Emberling,c,d),this.portalCooldown=30,this.hud.sayNow("An Emberling has entered the Underkeep."))}updateHeroWave(e){if(this.heroWaveSpawned){!this.won&&!this.gameOver&&!this.creatures.some(c=>c.alive&&c.isHero)&&this.time>2&&(this.won=!0,this.hud.say(ne.win),this.hud.showOverlay("Victory",ne.win+" The Underkeep stands.","Reign Again"),this.gameOver=!0);return}if(this.heroWaveTimer-=e,!this.heroWarn30&&this.heroWaveTimer<=30&&this.heroWaveTimer>10&&(this.heroWarn30=!0,this.hud.sayNow(ne.heroesSoon)),!this.heroWarn10&&this.heroWaveTimer<=10&&this.heroWaveTimer>0&&(this.heroWarn10=!0,this.hud.sayNow(ne.heroesImminent)),this.heroWaveTimer>0)return;this.heroWaveSpawned=!0,this.hud.sayNow(ne.heroes),this.hud.say(ne.heroes);const t=this.grid.heartPos.x,i=this.grid.heartPos.y;let n=2,r=t;for(let h=2;h<Math.min(i-1,this.grid.height/2);h++)if(this.grid.isWalkable(t,h)){n=h,r=t;break}for(let h=n;h<=Math.min(n+4,i-2);h++)for(let c=t-1;c<=t+1;c++){const d=this.grid.get(c,h);!d||d.kind===A.Heart||d.kind===A.Rock||(d.kind===A.Earth||d.kind===A.Gold||d.kind===A.Wall)&&(d.kind=A.Dirt,d.fortified=!1,d.digProgress=0,this.gridDirty=!0)}if(!this.grid.isWalkable(r,n)){const h=this.grid.get(r,n);h&&h.kind!==A.Rock&&h.kind!==A.Heart&&(h.kind=A.Dirt,this.gridDirty=!0)}this.requestStructuralRebuild();const o=this.spawnCreature(ae.HeroKnight,r,n),a=this.spawnCreature(ae.HeroKnight,r+1,n),l=this.spawnCreature(ae.HeroArcher,r-1,n);for(const h of[o,a,l]){h.job=V.Fight,h.jobTarget={...this.grid.heartPos},h.hp=Math.floor(h.maxHp*1.05),h.maxHp=h.hp;const c=this.grid.tileToWorld(h.x,h.y);this.renderer.spawnFx(new E(c.x,1.2,c.z),10535167,.65)}if(this.grid.countClaimed()>=40){const h=this.spawnCreature(ae.HeroKnight,r,n+1);h.job=V.Fight,h.jobTarget={...this.grid.heartPos},this.renderer.spawnFx(new E(h.wx,1.2,h.wz),10535167,.5)}}checkHeart(){this.heartHp<=0&&!this.gameOver&&(this.gameOver=!0,this.hud.say(ne.lose),this.hud.showOverlay("Defeat",ne.lose,"Try Again"))}render(){this.renderer.render()}}const L0=document.getElementById("game-canvas");function D0(s){const e=document.getElementById("overlay"),t=document.getElementById("overlay-title"),i=document.getElementById("overlay-msg"),n=document.getElementById("overlay-btn"),r=document.getElementById("overlay-btn-secondary");if(!e||!t||!i||!n)return;t.textContent="Underkeep",i.textContent=s,n.textContent="New Game",r?.classList.add("hidden"),e.classList.remove("hidden");const o=()=>{zi(),location.reload()};n.onclick=o,document.getElementById("btn-new-game")?.addEventListener("click",o,{once:!0})}let Gi=null;try{Gi=new P0(L0)}catch(s){console.error("[underkeep] fatal boot error — clearing save",s),zi(),document.body.classList.remove("booting"),D0("Something went wrong loading your dungeon. Your save was cleared. Tap New Game to begin again.")}window.__underkeep=Gi;let Kl=performance.now(),ns=0;function zh(s){const e=Math.min(.05,(s-Kl)/1e3);if(Kl=s,Gi)try{Gi.update(e),Gi.render(),ns=0}catch(t){ns++,console.error("[underkeep] frame error",t);const i=Gi;i.renderer?.contextLost?(i.handleContextLost?.(),ns=0):ns>=8&&(console.warn("[underkeep] many frame errors — continuing without overlay"),ns=0)}requestAnimationFrame(zh)}requestAnimationFrame(zh);const Fe=new URLSearchParams(location.search);Gi&&(Fe.get("shot")==="1"||Fe.get("shot")==="4"||Fe.get("shot")==="5b"||Fe.get("shot")==="5c"||Fe.get("shot")==="5c-heal"||Fe.get("shot")==="5c-feast"||Fe.get("shot")==="6.1"||Fe.get("shot")==="61"||Fe.get("shot")==="6.1b"||Fe.get("shot")==="61b"||Fe.get("shot")==="6.1b-slap"||Fe.get("shot")==="6.1b-eff"||Fe.get("shot")==="6.1c"||Fe.get("shot")==="61c"||Fe.get("shot")==="6.1c-pick"||Fe.get("shot")==="6.1c-slap"||Fe.get("shot")==="6.2a"||Fe.get("shot")==="62a"||Fe.get("shot")==="6.2"||Fe.get("shot")==="62"||Fe.get("shot")==="6.3"||Fe.get("shot")==="63"||Fe.get("shot")==="6.4"||Fe.get("shot")==="64"||Fe.get("shot")==="6.4b"||Fe.get("shot")==="64b"||Fe.get("shot")==="6.5"||Fe.get("shot")==="65"||Fe.get("shot")==="6.5-fow"||Fe.get("shot")==="6.5-fortify"||Fe.get("shot")==="7.1"||Fe.get("shot")==="71"||Fe.get("shot")==="7.1-lava"||Fe.get("shot")==="71-lava"||Fe.get("shot")==="7.1-bridge"||Fe.get("shot")==="71-bridge"||Fe.get("shot")==="7.1-possess"||Fe.get("shot")==="71-possess"||Fe.get("shot")==="7.1-payday"||Fe.get("shot")==="71-payday")&&setTimeout(()=>{const s=Gi;s.hud.hideOverlay();const e=Fe.get("shot");e==="7.1-lava"||e==="71-lava"?s.preparePass71Shot?.("lava"):e==="7.1-bridge"||e==="71-bridge"?s.preparePass71Shot?.("bridge"):e==="7.1-possess"||e==="71-possess"?s.preparePass71Shot?.("possess"):e==="7.1-payday"||e==="71-payday"?s.preparePass71Shot?.("payday"):e==="7.1"||e==="71"?s.preparePass71Shot?.("both"):e==="6.5-fortify"?s.preparePass65Shot?.("fortify"):e==="6.5-fow"?s.preparePass65Shot?.("fow"):e==="6.5"||e==="65"?s.preparePass65Shot?.("both"):e==="6.4b"||e==="64b"?s.preparePass64bShot?.():e==="6.4"||e==="64"?s.preparePass64Shot?.():e==="6.3"||e==="63"?s.preparePass63Shot?.():e==="6.2a"||e==="62a"?s.preparePass62aStabShot?.():e==="6.2"||e==="62"?s.preparePass62Shot?.():e==="6.1c-slap"?s.preparePass61cShot?.("slap"):e==="6.1c-pick"?s.preparePass61cShot?.("pick"):e==="6.1c"||e==="61c"?s.preparePass61cShot?.("both"):e==="6.1b-slap"?s.preparePass61bShot?.("slap"):e==="6.1b-eff"?s.preparePass61bShot?.("efficiency"):e==="6.1b"||e==="61b"?s.preparePass61bShot?.("both"):e==="6.1"||e==="61"?s.preparePass61Shot?.():e==="5c-heal"?s.preparePass5cShot?.("heal"):e==="5c-feast"?s.preparePass5cShot?.("feast"):e==="5c"||e==="5b"?s.preparePass5cShot?s.preparePass5cShot("both"):s.preparePass5bShot?.():e==="4"||!s.preparePass3Shot?s.preparePass4Shot?.():Fe.get("pass")==="3"?s.preparePass3Shot?.():s.preparePass4Shot?.()},400);
