(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ha="170",cc=0,Ha=1,dc=2,uc=0,gh=1,vh=2,Ri=3,Ki=0,jt=1,Nt=2,Di=0,Bn=1,mr=2,Ga=3,Wa=4,fc=5,cn=100,pc=101,mc=102,gc=103,vc=104,xc=200,yc=201,_c=202,wc=203,yo=204,_o=205,Mc=206,bc=207,Sc=208,Tc=209,Ec=210,Ac=211,Cc=212,Pc=213,Rc=214,wo=0,Mo=1,bo=2,Wn=3,So=4,To=5,Eo=6,Ao=7,xh=0,kc=1,Lc=2,$i=0,Dc=1,Ic=2,Nc=3,yh=4,Uc=5,Fc=6,Oc=7,_h=300,Vn=301,jn=302,Co=303,Po=304,Sr=306,gr=1e3,un=1001,Ro=1002,Jt=1003,Bc=1004,Es=1005,ui=1006,Rr=1007,Yi=1008,Ui=1009,wh=1010,Mh=1011,xs=1012,ca=1013,pn=1014,xi=1015,Ii=1016,da=1017,ua=1018,Xn=1020,bh=35902,Sh=1021,Th=1022,fi=1023,Eh=1024,Ah=1025,zn=1026,qn=1027,fa=1028,pa=1029,Ch=1030,ma=1031,ga=1033,ar=33776,lr=33777,hr=33778,cr=33779,ko=35840,Lo=35841,Do=35842,Io=35843,No=36196,Uo=37492,Fo=37496,Oo=37808,Bo=37809,zo=37810,Ho=37811,Go=37812,Wo=37813,Vo=37814,jo=37815,Xo=37816,qo=37817,Yo=37818,$o=37819,Ko=37820,Zo=37821,dr=36492,Jo=36494,Qo=36495,Ph=36283,ea=36284,ta=36285,ia=36286,zc=3200,Hc=3201,Rh=0,Gc=1,ki="",zt="srgb",Kn="srgb-linear",Tr="linear",ht="srgb",_n=7680,Va=519,Wc=512,Vc=513,jc=514,kh=515,Xc=516,qc=517,Yc=518,$c=519,ja=35044,Kc=35048,Xa="300 es",Li=2e3,vr=2001;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qa=1234567;const Hn=Math.PI/180,ys=180/Math.PI;function Jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Pt(r,e,t){return Math.max(e,Math.min(t,r))}function va(r,e){return(r%e+e)%e}function Zc(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Jc(r,e,t){return r!==e?(t-r)/(e-r):0}function ms(r,e,t){return(1-t)*r+t*e}function Qc(r,e,t,i){return ms(r,e,1-Math.exp(-t*i))}function ed(r,e=1){return e-Math.abs(va(r,e*2)-e)}function td(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function id(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function nd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function sd(r,e){return r+Math.random()*(e-r)}function rd(r){return r*(.5-Math.random())}function od(r){r!==void 0&&(qa=r);let e=qa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ad(r){return r*Hn}function ld(r){return r*ys}function hd(r){return(r&r-1)===0&&r!==0}function cd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function dd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ud(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),h=o(t/2),d=s((e+i)/2),l=o((e+i)/2),c=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(a*l,h*c,h*u,a*d);break;case"YZY":r.set(h*u,a*l,h*c,a*d);break;case"ZXZ":r.set(h*c,h*u,a*l,a*d);break;case"XZX":r.set(a*l,h*g,h*f,a*d);break;case"YXY":r.set(h*f,a*l,h*g,a*d);break;case"ZYZ":r.set(h*g,h*f,a*l,a*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ya={DEG2RAD:Hn,RAD2DEG:ys,generateUUID:Jn,clamp:Pt,euclideanModulo:va,mapLinear:Zc,inverseLerp:Jc,lerp:ms,damp:Qc,pingpong:ed,smoothstep:td,smootherstep:id,randInt:nd,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:ld,isPowerOfTwo:hd,ceilPowerOfTwo:cd,floorPowerOfTwo:dd,setQuaternionFromProperEuler:ud,normalize:Ft,denormalize:Fn};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,n,s,o,a,h,d){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,h,d)}set(e,t,i,n,s,o,a,h,d){const l=this.elements;return l[0]=e,l[1]=n,l[2]=a,l[3]=t,l[4]=s,l[5]=h,l[6]=i,l[7]=o,l[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],h=i[6],d=i[1],l=i[4],c=i[7],u=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],y=n[1],x=n[4],w=n[7],N=n[2],P=n[5],R=n[8];return s[0]=o*v+a*y+h*N,s[3]=o*m+a*x+h*P,s[6]=o*p+a*w+h*R,s[1]=d*v+l*y+c*N,s[4]=d*m+l*x+c*P,s[7]=d*p+l*w+c*R,s[2]=u*v+f*y+g*N,s[5]=u*m+f*x+g*P,s[8]=u*p+f*w+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],h=e[6],d=e[7],l=e[8];return t*o*l-t*a*d-i*s*l+i*a*h+n*s*d-n*o*h}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],h=e[6],d=e[7],l=e[8],c=l*o-a*d,u=a*h-l*s,f=d*s-o*h,g=t*c+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=c*v,e[1]=(n*d-l*i)*v,e[2]=(a*i-n*o)*v,e[3]=u*v,e[4]=(l*t-n*h)*v,e[5]=(n*s-a*t)*v,e[6]=f*v,e[7]=(i*h-d*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const h=Math.cos(s),d=Math.sin(s);return this.set(i*h,i*d,-i*(h*o+d*a)+o+e,-n*d,n*h,-n*(-d*o+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new He;function Lh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fd(){const r=xr("canvas");return r.style.display="block",r}const $a={};function fs(r){r in $a||($a[r]=!0,console.warn(r))}function pd(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function md(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Tr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ka=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],Ja=[.3127,.329],Qa=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Kn]:{primaries:Ka,whitePoint:Ja,transfer:Tr,toXYZ:Qa,fromXYZ:el,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:Ka,whitePoint:Ja,transfer:ht,toXYZ:Qa,fromXYZ:el,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let wn;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wn===void 0&&(wn=xr("canvas")),wn.width=e.width,wn.height=e.height;const i=wn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xd=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Lr(n[o].image)):s.push(Lr(n[o]))}else s=Lr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Lr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yd=0;class Ut extends Zn{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=un,n=un,s=ui,o=Yi,a=fi,h=Ui,d=Ut.DEFAULT_ANISOTROPY,l=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Jn(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=h,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=_h;Ut.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,n=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const h=e.elements,d=h[0],l=h[4],c=h[8],u=h[1],f=h[5],g=h[9],v=h[2],m=h[6],p=h[10];if(Math.abs(l-u)<.01&&Math.abs(c-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+v)<.1&&Math.abs(g+m)<.1&&Math.abs(d+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(d+1)/2,w=(f+1)/2,N=(p+1)/2,P=(l+u)/4,R=(c+v)/4,D=(g+m)/4;return x>w&&x>N?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=P/i,s=R/i):w>N?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=P/n,s=D/n):N<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(N),i=R/s,n=D/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(c-v)*(c-v)+(u-l)*(u-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(c-v)/y,this.z=(u-l)/y,this.w=Math.acos((d+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _d extends Zn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ut(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends _d{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ih extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Ut{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let h=i[n+0],d=i[n+1],l=i[n+2],c=i[n+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=h,e[t+1]=d,e[t+2]=l,e[t+3]=c;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(c!==v||h!==u||d!==f||l!==g){let m=1-a;const p=h*u+d*f+l*g+c*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const N=Math.sqrt(x),P=Math.atan2(N,p*y);m=Math.sin(m*P)/N,a=Math.sin(a*P)/N}const w=a*y;if(h=h*m+u*w,d=d*m+f*w,l=l*m+g*w,c=c*m+v*w,m===1-a){const N=1/Math.sqrt(h*h+d*d+l*l+c*c);h*=N,d*=N,l*=N,c*=N}}e[t]=h,e[t+1]=d,e[t+2]=l,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],h=i[n+1],d=i[n+2],l=i[n+3],c=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+l*c+h*f-d*u,e[t+1]=h*g+l*u+d*c-a*f,e[t+2]=d*g+l*f+a*u-h*c,e[t+3]=l*g-a*c-h*u-d*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,h=Math.sin,d=a(i/2),l=a(n/2),c=a(s/2),u=h(i/2),f=h(n/2),g=h(s/2);switch(o){case"XYZ":this._x=u*l*c+d*f*g,this._y=d*f*c-u*l*g,this._z=d*l*g+u*f*c,this._w=d*l*c-u*f*g;break;case"YXZ":this._x=u*l*c+d*f*g,this._y=d*f*c-u*l*g,this._z=d*l*g-u*f*c,this._w=d*l*c+u*f*g;break;case"ZXY":this._x=u*l*c-d*f*g,this._y=d*f*c+u*l*g,this._z=d*l*g+u*f*c,this._w=d*l*c-u*f*g;break;case"ZYX":this._x=u*l*c-d*f*g,this._y=d*f*c+u*l*g,this._z=d*l*g-u*f*c,this._w=d*l*c+u*f*g;break;case"YZX":this._x=u*l*c+d*f*g,this._y=d*f*c+u*l*g,this._z=d*l*g-u*f*c,this._w=d*l*c-u*f*g;break;case"XZY":this._x=u*l*c-d*f*g,this._y=d*f*c-u*l*g,this._z=d*l*g+u*f*c,this._w=d*l*c+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],h=t[9],d=t[2],l=t[6],c=t[10],u=i+a+c;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(l-h)*f,this._y=(s-d)*f,this._z=(o-n)*f}else if(i>a&&i>c){const f=2*Math.sqrt(1+i-a-c);this._w=(l-h)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+d)/f}else if(a>c){const f=2*Math.sqrt(1+a-i-c);this._w=(s-d)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(h+l)/f}else{const f=2*Math.sqrt(1+c-i-a);this._w=(o-n)/f,this._x=(s+d)/f,this._y=(h+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,h=t._y,d=t._z,l=t._w;return this._x=i*l+o*a+n*d-s*h,this._y=n*l+o*h+s*a-i*d,this._z=s*l+o*d+i*h-n*a,this._w=o*l-i*a-n*h-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const h=1-a*a;if(h<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const d=Math.sqrt(h),l=Math.atan2(d,a),c=Math.sin((1-t)*l)/d,u=Math.sin(t*l)/d;return this._w=o*c+this._w*u,this._x=i*c+this._x*u,this._y=n*c+this._y*u,this._z=s*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,i=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,h=e.w,d=2*(o*n-a*i),l=2*(a*t-s*n),c=2*(s*i-o*t);return this.x=t+h*d+o*c-a*l,this.y=i+h*l+a*d-s*c,this.z=n+h*c+s*l-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,h=t.z;return this.x=n*h-s*a,this.y=s*o-i*h,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new A,tl=new _s;class gn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Cs.subVectors(this.max,is),Mn.subVectors(e.a,is),bn.subVectors(e.b,is),Sn.subVectors(e.c,is),Bi.subVectors(bn,Mn),zi.subVectors(Sn,bn),Ji.subVectors(Mn,Sn);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-Ji.z,Ji.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,Ji.z,0,-Ji.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-Ji.y,Ji.x,0];return!Ir(t,Mn,bn,Sn,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,Mn,bn,Sn,Cs))?!1:(Ps.crossVectors(Bi,zi),t=[Ps.x,Ps.y,Ps.z],Ir(t,Mn,bn,Sn,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new A,new A,new A,new A,new A,new A,new A,new A],ai=new A,As=new gn,Mn=new A,bn=new A,Sn=new A,Bi=new A,zi=new A,Ji=new A,is=new A,Cs=new A,Ps=new A,Qi=new A;function Ir(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Qi.fromArray(r,s);const a=n.x*Math.abs(Qi.x)+n.y*Math.abs(Qi.y)+n.z*Math.abs(Qi.z),h=e.dot(Qi),d=t.dot(Qi),l=i.dot(Qi);if(Math.max(-Math.max(h,d,l),Math.min(h,d,l))>a)return!1}return!0}const Md=new gn,ns=new A,Nr=new A;class vn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Md.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ns,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(Nr)),this.expandByPoint(ns.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new A,Ur=new A,Rs=new A,Hi=new A,Fr=new A,ks=new A,Or=new A;class Er{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ur.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Ur);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=Hi.dot(this.direction),h=-Hi.dot(Rs),d=Hi.lengthSq(),l=Math.abs(1-o*o);let c,u,f,g;if(l>0)if(c=o*h-a,u=o*a-h,g=s*l,c>=0)if(u>=-g)if(u<=g){const v=1/l;c*=v,u*=v,f=c*(c+o*u+2*a)+u*(o*c+u+2*h)+d}else u=s,c=Math.max(0,-(o*u+a)),f=-c*c+u*(u+2*h)+d;else u=-s,c=Math.max(0,-(o*u+a)),f=-c*c+u*(u+2*h)+d;else u<=-g?(c=Math.max(0,-(-o*s+a)),u=c>0?-s:Math.min(Math.max(-s,-h),s),f=-c*c+u*(u+2*h)+d):u<=g?(c=0,u=Math.min(Math.max(-s,-h),s),f=u*(u+2*h)+d):(c=Math.max(0,-(o*s+a)),u=c>0?s:Math.min(Math.max(-s,-h),s),f=-c*c+u*(u+2*h)+d);else u=o>0?-s:s,c=Math.max(0,-(o*u+a)),f=-c*c+u*(u+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,c),n&&n.copy(Ur).addScaledVector(Rs,u),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),n=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,h;const d=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,u=this.origin;return d>=0?(i=(e.min.x-u.x)*d,n=(e.max.x-u.x)*d):(i=(e.max.x-u.x)*d,n=(e.min.x-u.x)*d),l>=0?(s=(e.min.y-u.y)*l,o=(e.max.y-u.y)*l):(s=(e.max.y-u.y)*l,o=(e.min.y-u.y)*l),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),c>=0?(a=(e.min.z-u.z)*c,h=(e.max.z-u.z)*c):(a=(e.max.z-u.z)*c,h=(e.min.z-u.z)*c),i>h||a>n)||((a>i||i!==i)&&(i=a),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,n,s){Fr.subVectors(t,e),ks.subVectors(i,e),Or.crossVectors(Fr,ks);let o=this.direction.dot(Or),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const h=a*this.direction.dot(ks.crossVectors(Hi,ks));if(h<0)return null;const d=a*this.direction.dot(Fr.cross(Hi));if(d<0||h+d>o)return null;const l=-a*Hi.dot(Or);return l<0?null:this.at(l/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,n,s,o,a,h,d,l,c,u,f,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,h,d,l,c,u,f,g,v,m)}set(e,t,i,n,s,o,a,h,d,l,c,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=h,p[2]=d,p[6]=l,p[10]=c,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Tn.setFromMatrixColumn(e,0).length(),s=1/Tn.setFromMatrixColumn(e,1).length(),o=1/Tn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(n),d=Math.sin(n),l=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const u=o*l,f=o*c,g=a*l,v=a*c;t[0]=h*l,t[4]=-h*c,t[8]=d,t[1]=f+g*d,t[5]=u-v*d,t[9]=-a*h,t[2]=v-u*d,t[6]=g+f*d,t[10]=o*h}else if(e.order==="YXZ"){const u=h*l,f=h*c,g=d*l,v=d*c;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*d,t[1]=o*c,t[5]=o*l,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*h}else if(e.order==="ZXY"){const u=h*l,f=h*c,g=d*l,v=d*c;t[0]=u-v*a,t[4]=-o*c,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*l,t[9]=v-u*a,t[2]=-o*d,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){const u=o*l,f=o*c,g=a*l,v=a*c;t[0]=h*l,t[4]=g*d-f,t[8]=u*d+v,t[1]=h*c,t[5]=v*d+u,t[9]=f*d-g,t[2]=-d,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=h*l,t[4]=v-u*c,t[8]=g*c+f,t[1]=c,t[5]=o*l,t[9]=-a*l,t[2]=-d*l,t[6]=f*c+g,t[10]=u-v*c}else if(e.order==="XZY"){const u=o*h,f=o*d,g=a*h,v=a*d;t[0]=h*l,t[4]=-c,t[8]=d*l,t[1]=u*c+v,t[5]=o*l,t[9]=f*c-g,t[2]=g*c-f,t[6]=a*l,t[10]=v*c+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Sd)}lookAt(e,t,i){const n=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Gi.crossVectors(i,Yt),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Gi.crossVectors(i,Yt)),Gi.normalize(),Ls.crossVectors(Yt,Gi),n[0]=Gi.x,n[4]=Ls.x,n[8]=Yt.x,n[1]=Gi.y,n[5]=Ls.y,n[9]=Yt.y,n[2]=Gi.z,n[6]=Ls.z,n[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],h=i[8],d=i[12],l=i[1],c=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],x=i[7],w=i[11],N=i[15],P=n[0],R=n[4],D=n[8],T=n[12],b=n[1],I=n[5],j=n[9],V=n[13],Z=n[2],ie=n[6],K=n[10],se=n[14],Y=n[3],fe=n[7],ye=n[11],Re=n[15];return s[0]=o*P+a*b+h*Z+d*Y,s[4]=o*R+a*I+h*ie+d*fe,s[8]=o*D+a*j+h*K+d*ye,s[12]=o*T+a*V+h*se+d*Re,s[1]=l*P+c*b+u*Z+f*Y,s[5]=l*R+c*I+u*ie+f*fe,s[9]=l*D+c*j+u*K+f*ye,s[13]=l*T+c*V+u*se+f*Re,s[2]=g*P+v*b+m*Z+p*Y,s[6]=g*R+v*I+m*ie+p*fe,s[10]=g*D+v*j+m*K+p*ye,s[14]=g*T+v*V+m*se+p*Re,s[3]=y*P+x*b+w*Z+N*Y,s[7]=y*R+x*I+w*ie+N*fe,s[11]=y*D+x*j+w*K+N*ye,s[15]=y*T+x*V+w*se+N*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],h=e[9],d=e[13],l=e[2],c=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*h*c-n*d*c-s*a*u+i*d*u+n*a*f-i*h*f)+v*(+t*h*f-t*d*u+s*o*u-n*o*f+n*d*l-s*h*l)+m*(+t*d*c-t*a*f-s*o*c+i*o*f+s*a*l-i*d*l)+p*(-n*a*l-t*h*c+t*a*u+n*o*c-i*o*u+i*h*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],h=e[6],d=e[7],l=e[8],c=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=c*m*d-v*u*d+v*h*f-a*m*f-c*h*p+a*u*p,x=g*u*d-l*m*d-g*h*f+o*m*f+l*h*p-o*u*p,w=l*v*d-g*c*d+g*a*f-o*v*f-l*a*p+o*c*p,N=g*c*h-l*v*h-g*a*u+o*v*u+l*a*m-o*c*m,P=t*y+i*x+n*w+s*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=y*R,e[1]=(v*u*s-c*m*s-v*n*f+i*m*f+c*n*p-i*u*p)*R,e[2]=(a*m*s-v*h*s+v*n*d-i*m*d-a*n*p+i*h*p)*R,e[3]=(c*h*s-a*u*s-c*n*d+i*u*d+a*n*f-i*h*f)*R,e[4]=x*R,e[5]=(l*m*s-g*u*s+g*n*f-t*m*f-l*n*p+t*u*p)*R,e[6]=(g*h*s-o*m*s-g*n*d+t*m*d+o*n*p-t*h*p)*R,e[7]=(o*u*s-l*h*s+l*n*d-t*u*d-o*n*f+t*h*f)*R,e[8]=w*R,e[9]=(g*c*s-l*v*s-g*i*f+t*v*f+l*i*p-t*c*p)*R,e[10]=(o*v*s-g*a*s+g*i*d-t*v*d-o*i*p+t*a*p)*R,e[11]=(l*a*s-o*c*s-l*i*d+t*c*d+o*i*f-t*a*f)*R,e[12]=N*R,e[13]=(l*v*n-g*c*n+g*i*u-t*v*u-l*i*m+t*c*m)*R,e[14]=(g*a*n-o*v*n-g*i*h+t*v*h+o*i*m-t*a*m)*R,e[15]=(o*c*n-l*a*n+l*i*h-t*c*h-o*i*u+t*a*u)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,h=e.z,d=s*o,l=s*a;return this.set(d*o+i,d*a-n*h,d*h+n*a,0,d*a+n*h,l*a+i,l*h-n*o,0,d*h-n*a,l*h+n*o,s*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,h=t._w,d=s+s,l=o+o,c=a+a,u=s*d,f=s*l,g=s*c,v=o*l,m=o*c,p=a*c,y=h*d,x=h*l,w=h*c,N=i.x,P=i.y,R=i.z;return n[0]=(1-(v+p))*N,n[1]=(f+w)*N,n[2]=(g-x)*N,n[3]=0,n[4]=(f-w)*P,n[5]=(1-(u+p))*P,n[6]=(m+y)*P,n[7]=0,n[8]=(g+x)*R,n[9]=(m-y)*R,n[10]=(1-(u+v))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Tn.set(n[0],n[1],n[2]).length();const o=Tn.set(n[4],n[5],n[6]).length(),a=Tn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],li.copy(this);const d=1/s,l=1/o,c=1/a;return li.elements[0]*=d,li.elements[1]*=d,li.elements[2]*=d,li.elements[4]*=l,li.elements[5]*=l,li.elements[6]*=l,li.elements[8]*=c,li.elements[9]*=c,li.elements[10]*=c,t.setFromRotationMatrix(li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Li){const h=this.elements,d=2*s/(t-e),l=2*s/(i-n),c=(t+e)/(t-e),u=(i+n)/(i-n);let f,g;if(a===Li)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=l,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Li){const h=this.elements,d=1/(t-e),l=1/(i-n),c=1/(o-s),u=(t+e)*d,f=(i+n)*l;let g,v;if(a===Li)g=(o+s)*c,v=-2*c;else if(a===vr)g=s*c,v=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-u,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=v,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tn=new A,li=new at,bd=new A(0,0,0),Sd=new A(1,1,1),Gi=new A,Ls=new A,Yt=new A,il=new at,nl=new _s;class wi{constructor(e=0,t=0,i=0,n=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],h=n[1],d=n[5],l=n[9],c=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,d),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Td=0;const sl=new A,En=new _s,Ai=new at,Ds=new A,ss=new A,Ed=new A,Ad=new _s,rl=new A(1,0,0),ol=new A(0,1,0),al=new A(0,0,1),ll={type:"added"},Cd={type:"removed"},An={type:"childadded",child:null},Br={type:"childremoved",child:null};class St extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new A,t=new wi,i=new _s,n=new A(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new He}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.multiply(En),this}rotateOnWorldAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.premultiply(En),this}rotateX(e){return this.rotateOnAxis(rl,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return sl.copy(e).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rl,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ds.copy(e):Ds.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ss,Ds,this.up):Ai.lookAt(Ds,ss,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),En.setFromRotationMatrix(Ai),this.quaternion.premultiply(En.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),An.child=e,this.dispatchEvent(An),An.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cd),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),An.child=e,this.dispatchEvent(An),An.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let d=0,l=h.length;d<l;d++){const c=h[d];s(e.shapes,c)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,d=this.material.length;h<d;h++)a.push(s(e.materials,this.material[h]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];n.animations.push(s(e.animations,h))}}if(t){const a=o(e.geometries),h=o(e.materials),d=o(e.textures),l=o(e.images),c=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),l.length>0&&(i.images=l),c.length>0&&(i.shapes=c),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const h=[];for(const d in a){const l=a[d];delete l.metadata,h.push(l)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}St.DEFAULT_UP=new A(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new A,Ci=new A,zr=new A,Pi=new A,Cn=new A,Pn=new A,hl=new A,Hr=new A,Gr=new A,Wr=new A,Vr=new ct,jr=new ct,Xr=new ct;class si{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),hi.subVectors(e,t),n.cross(hi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){hi.subVectors(n,t),Ci.subVectors(i,t),zr.subVectors(e,t);const o=hi.dot(hi),a=hi.dot(Ci),h=hi.dot(zr),d=Ci.dot(Ci),l=Ci.dot(zr),c=o*d-a*a;if(c===0)return s.set(0,0,0),null;const u=1/c,f=(d*h-a*l)*u,g=(o*l-a*h)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,n,s,o,a,h){return this.getBarycoord(e,t,i,n,Pi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Pi.x),h.addScaledVector(o,Pi.y),h.addScaledVector(a,Pi.z),h)}static getInterpolatedAttribute(e,t,i,n,s,o){return Vr.setScalar(0),jr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,i),Xr.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Vr,s.x),o.addScaledVector(jr,s.y),o.addScaledVector(Xr,s.z),o}static isFrontFacing(e,t,i,n){return hi.subVectors(i,t),Ci.subVectors(e,t),hi.cross(Ci).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),hi.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return si.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Cn.subVectors(n,i),Pn.subVectors(s,i),Hr.subVectors(e,i);const h=Cn.dot(Hr),d=Pn.dot(Hr);if(h<=0&&d<=0)return t.copy(i);Gr.subVectors(e,n);const l=Cn.dot(Gr),c=Pn.dot(Gr);if(l>=0&&c<=l)return t.copy(n);const u=h*c-l*d;if(u<=0&&h>=0&&l<=0)return o=h/(h-l),t.copy(i).addScaledVector(Cn,o);Wr.subVectors(e,s);const f=Cn.dot(Wr),g=Pn.dot(Wr);if(g>=0&&f<=g)return t.copy(s);const v=f*d-h*g;if(v<=0&&d>=0&&g<=0)return a=d/(d-g),t.copy(i).addScaledVector(Pn,a);const m=l*g-f*c;if(m<=0&&c-l>=0&&f-g>=0)return hl.subVectors(s,n),a=(c-l)/(c-l+(f-g)),t.copy(n).addScaledVector(hl,a);const p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(Cn,o).addScaledVector(Pn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Is={h:0,s:0,l:0};function qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=va(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qr(o,s,e+1/3),this.g=qr(o,s,e),this.b=qr(o,s,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Pt(Dt.r*255,0,255))*65536+Math.round(Pt(Dt.g*255,0,255))*256+Math.round(Pt(Dt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,n=Dt.g,s=Dt.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let h,d;const l=(a+o)/2;if(a===o)h=0,d=0;else{const c=o-a;switch(d=l<=.5?c/(o+a):c/(2-o-a),o){case i:h=(n-s)/c+(n<s?6:0);break;case n:h=(s-i)/c+2;break;case s:h=(i-n)/c+4;break}h/=6}return e.h=h,e.s=d,e.l=l,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=zt){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,n=Dt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Is);const i=ms(Wi.h,Is.h,t),n=ms(Wi.s,Is.s,t),s=ms(Wi.l,Is.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ge;Ge.NAMES=Nh;let Pd=0;class xn extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Jn(),this.name="",this.blending=Bn,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=_o,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Wn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_n,this.stencilZFail=_n,this.stencilZPass=_n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==_o&&(i.blendDst=this.blendDst),this.blendEquation!==cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bt extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new A,Ns=new le;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}}class Uh extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fh extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class it extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rd=0;const ii=new at,Yr=new St,Rn=new A,$t=new gn,rs=new gn,Ct=new A;class Mt extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?Fh:Uh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rn).negate(),this.translate(Rn.x,Rn.y,Rn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors($t.min,rs.min),$t.expandByPoint(Ct),Ct.addVectors($t.max,rs.max),$t.expandByPoint(Ct)):($t.expandByPoint(rs.min),$t.expandByPoint(rs.max))}$t.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],h=this.morphTargetsRelative;for(let d=0,l=a.count;d<l;d++)Ct.fromBufferAttribute(a,d),h&&(Rn.fromBufferAttribute(e,d),Ct.add(Rn)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let D=0;D<i.count;D++)a[D]=new A,h[D]=new A;const d=new A,l=new A,c=new A,u=new le,f=new le,g=new le,v=new A,m=new A;function p(D,T,b){d.fromBufferAttribute(i,D),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,b),u.fromBufferAttribute(s,D),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),l.sub(d),c.sub(d),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(c,-f.y).multiplyScalar(I),m.copy(c).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(I),a[D].add(v),a[T].add(v),a[b].add(v),h[D].add(m),h[T].add(m),h[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,T=y.length;D<T;++D){const b=y[D],I=b.start,j=b.count;for(let V=I,Z=I+j;V<Z;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new A,w=new A,N=new A,P=new A;function R(D){N.fromBufferAttribute(n,D),P.copy(N);const T=a[D];x.copy(T),x.sub(N.multiplyScalar(N.dot(T))).normalize(),w.crossVectors(P,T);const I=w.dot(h[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,I)}for(let D=0,T=y.length;D<T;++D){const b=y[D],I=b.start,j=b.count;for(let V=I,Z=I+j;V<Z;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new A,s=new A,o=new A,a=new A,h=new A,d=new A,l=new A,c=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),l.subVectors(o,s),c.subVectors(n,s),l.cross(c),a.fromBufferAttribute(i,g),h.fromBufferAttribute(i,v),d.fromBufferAttribute(i,m),a.add(l),h.add(l),d.add(l),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),l.subVectors(o,s),c.subVectors(n,s),l.cross(c),i.setXYZ(u+0,l.x,l.y,l.z),i.setXYZ(u+1,l.x,l.y,l.z),i.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,h){const d=a.array,l=a.itemSize,c=a.normalized,u=new d.constructor(h.length*l);let f=0,g=0;for(let v=0,m=h.length;v<m;v++){a.isInterleavedBufferAttribute?f=h[v]*a.data.stride+a.offset:f=h[v]*l;for(let p=0;p<l;p++)u[g++]=d[f++]}return new Qt(u,l,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,n=this.attributes;for(const a in n){const h=n[a],d=e(h,i);t.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const h=[],d=s[a];for(let l=0,c=d.length;l<c;l++){const u=d[l],f=e(u,i);h.push(f)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const d=o[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const n={};let s=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],l=[];for(let c=0,u=d.length;c<u;c++){const f=d[c];l.push(f.toJSON(e.data))}l.length>0&&(n[h]=l,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const d in n){const l=n[d];this.setAttribute(d,l.clone(t))}const s=e.morphAttributes;for(const d in s){const l=[],c=s[d];for(let u=0,f=c.length;u<f;u++)l.push(c[u].clone(t));this.morphAttributes[d]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,l=o.length;d<l;d++){const c=o[d];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new at,en=new Er,Us=new vn,dl=new A,Fs=new A,Os=new A,Bs=new A,$r=new A,zs=new A,ul=new A,Hs=new A;class L extends St{constructor(e=new Mt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){zs.set(0,0,0);for(let h=0,d=s.length;h<d;h++){const l=a[h],c=s[h];l!==0&&($r.fromBufferAttribute(c,e),o?zs.addScaledVector($r,l):zs.addScaledVector($r.sub(t),l))}t.add(zs)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),en.copy(e.ray).recast(e.near),!(Us.containsPoint(en.origin)===!1&&(en.intersectSphere(Us,dl)===null||en.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(cl.copy(s).invert(),en.copy(e.ray).applyMatrix4(cl),!(i.boundingBox!==null&&en.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,en)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,d=s.attributes.uv,l=s.attributes.uv1,c=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,N=x;w<N;w+=3){const P=a.getX(w),R=a.getX(w+1),D=a.getX(w+2);n=Gs(this,p,e,i,d,l,c,P,R,D),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);n=Gs(this,o,e,i,d,l,c,y,x,w),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let w=y,N=x;w<N;w+=3){const P=w,R=w+1,D=w+2;n=Gs(this,p,e,i,d,l,c,P,R,D),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(h.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,w=m+2;n=Gs(this,o,e,i,d,l,c,y,x,w),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function kd(r,e,t,i,n,s,o,a){let h;if(e.side===jt?h=i.intersectTriangle(o,s,n,!0,a):h=i.intersectTriangle(n,s,o,e.side===Ki,a),h===null)return null;Hs.copy(a),Hs.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Hs);return d<t.near||d>t.far?null:{distance:d,point:Hs.clone(),object:r}}function Gs(r,e,t,i,n,s,o,a,h,d){r.getVertexPosition(a,Fs),r.getVertexPosition(h,Os),r.getVertexPosition(d,Bs);const l=kd(r,e,t,i,Fs,Os,Bs,ul);if(l){const c=new A;si.getBarycoord(ul,Fs,Os,Bs,c),n&&(l.uv=si.getInterpolatedAttribute(n,a,h,d,c,new le)),s&&(l.uv1=si.getInterpolatedAttribute(s,a,h,d,c,new le)),o&&(l.normal=si.getInterpolatedAttribute(o,a,h,d,c,new A),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:h,c:d,normal:new A,materialIndex:0};si.getNormal(Fs,Os,Bs,u.normal),l.face=u,l.barycoord=c}return l}class de extends Mt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const h=[],d=[],l=[],c=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new it(d,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2));function g(v,m,p,y,x,w,N,P,R,D,T){const b=w/R,I=N/D,j=w/2,V=N/2,Z=P/2,ie=R+1,K=D+1;let se=0,Y=0;const fe=new A;for(let ye=0;ye<K;ye++){const Re=ye*I-V;for(let qe=0;qe<ie;qe++){const dt=qe*b-j;fe[v]=dt*y,fe[m]=Re*x,fe[p]=Z,d.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[p]=P>0?1:-1,l.push(fe.x,fe.y,fe.z),c.push(qe/R),c.push(1-ye/D),se+=1}}for(let ye=0;ye<D;ye++)for(let Re=0;Re<R;Re++){const qe=u+Re+ie*ye,dt=u+Re+ie*(ye+1),Q=u+(Re+1)+ie*(ye+1),ae=u+(Re+1)+ie*ye;h.push(qe,dt,ae),h.push(dt,Q,ae),Y+=6}a.addGroup(f,Y,T),f+=Y,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const i=Yn(r[t]);for(const n in i)e[n]=i[n]}return e}function Ld(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Oh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const yr={clone:Yn,merge:Ot};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=Ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bh extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new A,fl=new le,pl=new le;class Zt extends Bh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Hn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,fl,pl),t.subVectors(pl,fl)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,d=o.fullHeight;s+=o.offsetX*n/h,t-=o.offsetY*i/d,n*=o.width/h,i*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kn=-90,Ln=1;class Nd extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Zt(kn,Ln,e,t);n.layers=this.layers,this.add(n);const s=new Zt(kn,Ln,e,t);s.layers=this.layers,this.add(s);const o=new Zt(kn,Ln,e,t);o.layers=this.layers,this.add(o);const a=new Zt(kn,Ln,e,t);a.layers=this.layers,this.add(a);const h=new Zt(kn,Ln,e,t);h.layers=this.layers,this.add(h);const d=new Zt(kn,Ln,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,h]=t;for(const d of t)this.remove(d);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,d,l]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,h),e.setRenderTarget(i,4,n),e.render(t,d),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,l),e.setRenderTarget(c,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zh extends Ut{constructor(e,t,i,n,s,o,a,h,d,l){e=e!==void 0?e:[],t=t!==void 0?t:Vn,super(e,t,i,n,s,o,a,h,d,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new zh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new de(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Yn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Di});s.uniforms.tEquirect.value=t;const o=new L(n,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=ui),new Nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const Kr=new A,Fd=new A,Od=new He;class Xi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Kr.subVectors(i,t).cross(Fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Od.getNormalMatrix(e),n=this.coplanarPoint(Kr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tn=new vn,Ws=new A;class ya{constructor(e=new Xi,t=new Xi,i=new Xi,n=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],h=n[3],d=n[4],l=n[5],c=n[6],u=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],y=n[13],x=n[14],w=n[15];if(i[0].setComponents(h-s,u-d,m-f,w-p).normalize(),i[1].setComponents(h+s,u+d,m+f,w+p).normalize(),i[2].setComponents(h+o,u+l,m+g,w+y).normalize(),i[3].setComponents(h-o,u-l,m-g,w-y).normalize(),i[4].setComponents(h-a,u-c,m-v,w-x).normalize(),t===Li)i[5].setComponents(h+a,u+c,m+v,w+x).normalize();else if(t===vr)i[5].setComponents(a,c,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(e){return tn.center.set(0,0,0),tn.radius=.7071067811865476,tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ws.x=n.normal.x>0?e.max.x:e.min.x,Ws.y=n.normal.y>0?e.max.y:e.min.y,Ws.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bd(r){const e=new WeakMap;function t(a,h){const d=a.array,l=a.usage,c=d.byteLength,u=r.createBuffer();r.bindBuffer(h,u),r.bufferData(h,d,l),a.onUploadCallback();let f;if(d instanceof Float32Array)f=r.FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)f=r.SHORT;else if(d instanceof Uint32Array)f=r.UNSIGNED_INT;else if(d instanceof Int32Array)f=r.INT;else if(d instanceof Int8Array)f=r.BYTE;else if(d instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:f,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,h,d){const l=h.array,c=h.updateRanges;if(r.bindBuffer(d,a),c.length===0)r.bufferSubData(d,0,l);else{c.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<c.length;f++){const g=c[u],v=c[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,c[u]=v)}c.length=u+1;for(let f=0,g=c.length;f<g;f++){const v=c[f];r.bufferSubData(d,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=e.get(a);h&&(r.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=e.get(a);if(d===void 0)e.set(a,t(a,h));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,a,h),d.version=a.version}}return{get:n,remove:s,update:o}}class mi extends Mt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),h=Math.floor(n),d=a+1,l=h+1,c=e/a,u=t/h,f=[],g=[],v=[],m=[];for(let p=0;p<l;p++){const y=p*u-o;for(let x=0;x<d;x++){const w=x*c-s;g.push(w,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let y=0;y<a;y++){const x=y+d*p,w=y+d*(p+1),N=y+1+d*(p+1),P=y+1+d*p;f.push(x,w,P),f.push(w,N,P)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hu=`#define PI 3.141592653589793
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
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,du=`vec3 transformedNormal = objectNormal;
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
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",vu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
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
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
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
#endif`,Ou=`struct PhysicalMaterial {
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
}`,Bu=`
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$u=`#if defined( USE_POINTS_UV )
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
#endif`,Ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
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
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hf=`#ifdef USE_NORMALMAP
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
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tf=`float getShadowMask() {
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
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pf=`#ifdef USE_SKINNING
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
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
}`,qf=`#if DEPTH_PACKING == 3200
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
}`,Yf=`#define DISTANCE
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
}`,$f=`#define DISTANCE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`uniform float scale;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 diffuse;
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
}`,ip=`#define LAMBERT
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
}`,np=`#define LAMBERT
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
}`,sp=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,op=`#define NORMAL
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
}`,ap=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,hp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,dp=`#define STANDARD
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
}`,up=`#define TOON
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
}`,fp=`#define TOON
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
}`,pp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,vp=`uniform vec3 color;
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
}`,xp=`uniform float rotation;
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
}`,yp=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:zd,alphahash_pars_fragment:Hd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:Vd,alphatest_pars_fragment:jd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:$d,begin_vertex:Kd,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:Qd,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:iu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:su,color_fragment:ru,color_pars_fragment:ou,color_pars_vertex:au,color_vertex:lu,common:hu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:du,displacementmap_pars_vertex:uu,displacementmap_vertex:fu,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:vu,envmap_fragment:xu,envmap_common_pars_fragment:yu,envmap_pars_fragment:_u,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Lu,envmap_vertex:Mu,fog_vertex:bu,fog_pars_vertex:Su,fog_fragment:Tu,fog_pars_fragment:Eu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Cu,lights_lambert_fragment:Pu,lights_lambert_pars_fragment:Ru,lights_pars_begin:ku,lights_toon_fragment:Du,lights_toon_pars_fragment:Iu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:Hu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:Wu,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:ju,map_fragment:Xu,map_pars_fragment:qu,map_particle_fragment:Yu,map_particle_pars_fragment:$u,metalnessmap_fragment:Ku,metalnessmap_pars_fragment:Zu,morphinstance_vertex:Ju,morphcolor_vertex:Qu,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:lf,normalmap_pars_fragment:hf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:uf,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:vf,dithering_fragment:xf,dithering_pars_fragment:yf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:bf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Tf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Pf,specularmap_fragment:Rf,specularmap_pars_fragment:kf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:If,transmission_pars_fragment:Nf,uv_pars_fragment:Uf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:Bf,background_vert:zf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Wf,cube_vert:Vf,cube_frag:jf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:$f,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:Jf,linedashed_frag:Qf,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:ip,meshlambert_frag:np,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:lp,meshphong_frag:hp,meshphysical_vert:cp,meshphysical_frag:dp,meshtoon_vert:up,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:vp,sprite_vert:xp,sprite_frag:yp},ce={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},vi={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};vi.physical={uniforms:Ot([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Vs={r:0,b:0,g:0},nn=new wi,_p=new at;function wp(r,e,t,i,n,s,o){const a=new Ge(0);let h=s===!0?0:1,d,l,c=null,u=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const w=g(y);w===null?p(a,h):w&&w.isColor&&(p(w,1),x=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Sr)?(l===void 0&&(l=new L(new de(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Yn(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(N,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),nn.copy(x.backgroundRotation),nn.x*=-1,nn.y*=-1,nn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(nn.y*=-1,nn.z*=-1),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(nn)),l.material.toneMapped=tt.getTransfer(w.colorSpace)!==ht,(c!==w||u!==w.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,c=w,u=w.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new L(new mi(2,2),new Vt({name:"BackgroundMaterial",uniforms:Yn(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.toneMapped=tt.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(c!==w||u!==w.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,c=w,u=w.version,f=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function p(y,x){y.getRGB(Vs,Oh(r)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),h=x,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,p(a,h)},render:v,addToRenderList:m}}function Mp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,o=!1;function a(b,I,j,V,Z){let ie=!1;const K=c(V,j,I);s!==K&&(s=K,d(s.object)),ie=f(b,V,j,Z),ie&&g(b,V,j,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,w(b,I,j,V),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return r.createVertexArray()}function d(b){return r.bindVertexArray(b)}function l(b){return r.deleteVertexArray(b)}function c(b,I,j){const V=j.wireframe===!0;let Z=i[b.id];Z===void 0&&(Z={},i[b.id]=Z);let ie=Z[I.id];ie===void 0&&(ie={},Z[I.id]=ie);let K=ie[V];return K===void 0&&(K=u(h()),ie[V]=K),K}function u(b){const I=[],j=[],V=[];for(let Z=0;Z<t;Z++)I[Z]=0,j[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,I,j,V){const Z=s.attributes,ie=I.attributes;let K=0;const se=j.getAttributes();for(const Y in se)if(se[Y].location>=0){const ye=Z[Y];let Re=ie[Y];if(Re===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),ye===void 0||ye.attribute!==Re||Re&&ye.data!==Re.data)return!0;K++}return s.attributesNum!==K||s.index!==V}function g(b,I,j,V){const Z={},ie=I.attributes;let K=0;const se=j.getAttributes();for(const Y in se)if(se[Y].location>=0){let ye=ie[Y];ye===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor));const Re={};Re.attribute=ye,ye&&ye.data&&(Re.data=ye.data),Z[Y]=Re,K++}s.attributes=Z,s.attributesNum=K,s.index=V}function v(){const b=s.newAttributes;for(let I=0,j=b.length;I<j;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){const j=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;j[b]=1,V[b]===0&&(r.enableVertexAttribArray(b),V[b]=1),Z[b]!==I&&(r.vertexAttribDivisor(b,I),Z[b]=I)}function y(){const b=s.newAttributes,I=s.enabledAttributes;for(let j=0,V=I.length;j<V;j++)I[j]!==b[j]&&(r.disableVertexAttribArray(j),I[j]=0)}function x(b,I,j,V,Z,ie,K){K===!0?r.vertexAttribIPointer(b,I,j,Z,ie):r.vertexAttribPointer(b,I,j,V,Z,ie)}function w(b,I,j,V){v();const Z=V.attributes,ie=j.getAttributes(),K=I.defaultAttributeValues;for(const se in ie){const Y=ie[se];if(Y.location>=0){let fe=Z[se];if(fe===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const ye=fe.normalized,Re=fe.itemSize,qe=e.get(fe);if(qe===void 0)continue;const dt=qe.buffer,Q=qe.type,ae=qe.bytesPerElement,Ae=Q===r.INT||Q===r.UNSIGNED_INT||fe.gpuType===ca;if(fe.isInterleavedBufferAttribute){const pe=fe.data,Ne=pe.stride,Oe=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Y.locationSize;Ye++)p(Y.location+Ye,pe.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ye=0;Ye<Y.locationSize;Ye++)m(Y.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let Ye=0;Ye<Y.locationSize;Ye++)x(Y.location+Ye,Re/Y.locationSize,Q,ye,Ne*ae,(Oe+Re/Y.locationSize*Ye)*ae,Ae)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe,fe.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let pe=0;pe<Y.locationSize;pe++)x(Y.location+pe,Re/Y.locationSize,Q,ye,Re*ae,Re/Y.locationSize*pe*ae,Ae)}}else if(K!==void 0){const ye=K[se];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(Y.location,ye);break;case 3:r.vertexAttrib3fv(Y.location,ye);break;case 4:r.vertexAttrib4fv(Y.location,ye);break;default:r.vertexAttrib1fv(Y.location,ye)}}}}y()}function N(){D();for(const b in i){const I=i[b];for(const j in I){const V=I[j];for(const Z in V)l(V[Z].object),delete V[Z];delete I[j]}delete i[b]}}function P(b){if(i[b.id]===void 0)return;const I=i[b.id];for(const j in I){const V=I[j];for(const Z in V)l(V[Z].object),delete V[Z];delete I[j]}delete i[b.id]}function R(b){for(const I in i){const j=i[I];if(j[b.id]===void 0)continue;const V=j[b.id];for(const Z in V)l(V[Z].object),delete V[Z];delete j[b.id]}}function D(){T(),o=!0,s!==n&&(s=n,d(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function bp(r,e,t){let i;function n(d){i=d}function s(d,l){r.drawArrays(i,d,l),t.update(l,i,1)}function o(d,l,c){c!==0&&(r.drawArraysInstanced(i,d,l,c),t.update(l,i,c))}function a(d,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,l,0,c);let f=0;for(let g=0;g<c;g++)f+=l[g];t.update(f,i,1)}function h(d,l,c,u){if(c===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d.length;g++)o(d[g],l[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,d,0,l,0,u,0,c);let g=0;for(let v=0;v<c;v++)g+=l[v]*u[v];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Sp(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==fi&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ui&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!D)}function h(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const l=h(d);l!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",l,"instead."),d=l);const c=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:c,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:N,maxSamples:P}}function Tp(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new Xi,a=new He,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const f=c.length!==0||u||i!==0||n;return n=u,i=c.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,u){t=l(c,u,0)},this.setState=function(c,u,f){const g=c.clippingPlanes,v=c.clipIntersection,m=c.clipShadows,p=r.get(c);if(!n||g===null||g.length===0||s&&!m)s?l(null):d();else{const y=s?0:i,x=y*4;let w=p.clippingState||null;h.value=w,w=l(g,u,x,f);for(let N=0;N!==x;++N)w[N]=t[N];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(c,u,f,g){const v=c!==null?c.length:0;let m=null;if(v!==0){if(m=h.value,g!==!0||m===null){const p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=f;x!==v;++x,w+=4)o.copy(c[x]).applyMatrix4(y,a),o.normal.toArray(m,w),m[w+3]=o.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ep(r){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Vn:a===Po&&(o.mapping=jn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Po)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const d=new Ud(h.height);return d.fromEquirectangularTexture(r,o),e.set(o,d),o.addEventListener("dispose",n),t(d.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _a extends Bh{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,h=n-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=l*this.view.offsetY,h=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const On=4,ml=[.125,.215,.35,.446,.526,.582],dn=20,Zr=new _a,gl=new Ge;let Jr=null,Qr=0,eo=0,to=!1;const ln=(1+Math.sqrt(5))/2,Dn=1/ln,vl=[new A(-ln,Dn,0),new A(ln,Dn,0),new A(-Dn,0,ln),new A(Dn,0,ln),new A(0,ln,-Dn),new A(0,ln,Dn),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,Qr,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),Qr=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Ii,format:fi,colorSpace:Kn,depthBuffer:!1},n=yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(s)),this._blurMaterial=Cp(s,e,t)}return n}_compileMaterial(e){const t=new L(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,n){const a=new Zt(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(gl),l.toneMapping=$i,l.autoClear=!1;const f=new Bt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new L(new de,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(gl),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,h[p],0),a.lookAt(d[p],0,0)):y===1?(a.up.set(0,0,h[p]),a.lookAt(0,d[p],0)):(a.up.set(0,h[p],0),a.lookAt(0,0,d[p]));const x=this._cubeSize;js(n,y*x,p>2?x:0,x,x),l.setRenderTarget(n),v&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Vn||e.mapping===jn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const h=this._cubeSize;js(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(o,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vl[(n-s-1)%vl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const h=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,c=new L(this._lodPlanes[n],d),u=d.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*dn-1),v=s/g,m=isFinite(s)?1+Math.floor(l*v):dn;m>dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dn}`);const p=[];let y=0;for(let R=0;R<dn;++R){const D=R/v,T=Math.exp(-D*D/2);p.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const w=this._sizeLods[n],N=3*w*(n>x-On?n-x+On:0),P=4*(this._cubeSize-w);js(t,N,P,3*w,2*w),h.setRenderTarget(t),h.render(c,Zr)}}function Ap(r){const e=[],t=[],i=[];let n=r;const s=r-On+1+ml.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let h=1/a;o>r-On?h=ml[o-r+On-1]:o===0&&(h=0),i.push(h);const d=1/(a-2),l=-d,c=1+d,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),x=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,D=P>2?0:-1,T=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];y.set(T,v*g*P),x.set(u,m*g*P);const b=[P,P,P,P,P,P];w.set(b,p*g*P)}const N=new Mt;N.setAttribute("position",new Qt(y,v)),N.setAttribute("uv",new Qt(x,m)),N.setAttribute("faceIndex",new Qt(w,p)),e.push(N),n>On&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yl(r,e,t){const i=new pi(r,e,t);return i.texture.mapping=Sr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function js(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Cp(r,e,t){const i=new Float32Array(dn),n=new A(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function _l(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function wl(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function Pp(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const h=a.mapping,d=h===Co||h===Po,l=h===Vn||h===jn;if(d||l){let c=e.get(a);const u=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new xl(r)),c=d?t.fromEquirectangular(a,c):t.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return d&&f&&f.height>0||l&&f&&n(f)?(t===null&&(t=new xl(r)),c=d?t.fromEquirectangular(a):t.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function n(a){let h=0;const d=6;for(let l=0;l<d;l++)a[l]!==void 0&&h++;return h===d}function s(a){const h=a.target;h.removeEventListener("dispose",s);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Rp(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function kp(r,e,t,i){const n={},s=new WeakMap;function o(c){const u=c.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(c,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function h(c){const u=c.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=c.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function d(c){const u=[],f=c.index,g=c.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,w=y.length;x<w;x+=3){const N=y[x+0],P=y[x+1],R=y[x+2];u.push(N,P,P,R,R,N)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,w=y.length/3-1;x<w;x+=3){const N=x+0,P=x+1,R=x+2;u.push(N,P,P,R,R,N)}}else return;const m=new(Lh(u)?Fh:Uh)(u,1);m.version=v;const p=s.get(c);p&&e.remove(p),s.set(c,m)}function l(c){const u=s.get(c);if(u){const f=c.index;f!==null&&u.version<f.version&&d(c)}else d(c);return s.get(c)}return{get:a,update:h,getWireframeAttribute:l}}function Lp(r,e,t){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function h(u,f){r.drawElements(i,f,s,u*o),t.update(f,i,1)}function d(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,u*o,g),t.update(f,i,g))}function l(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function c(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)d(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=h,this.renderInstances=d,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function Dp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Ip(r,e,t){const i=new WeakMap,n=new ct;function s(o,a,h){const d=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=l!==void 0?l.length:0;let u=i.get(a);if(u===void 0||u.count!==c){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let N=a.attributes.position.count*w,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const R=new Float32Array(N*P*4*c),D=new Ih(R,N,P,c);D.type=xi,D.needsUpdate=!0;const T=w*4;for(let I=0;I<c;I++){const j=p[I],V=y[I],Z=x[I],ie=N*P*4*I;for(let K=0;K<j.count;K++){const se=K*T;g===!0&&(n.fromBufferAttribute(j,K),R[ie+se+0]=n.x,R[ie+se+1]=n.y,R[ie+se+2]=n.z,R[ie+se+3]=0),v===!0&&(n.fromBufferAttribute(V,K),R[ie+se+4]=n.x,R[ie+se+5]=n.y,R[ie+se+6]=n.z,R[ie+se+7]=0),m===!0&&(n.fromBufferAttribute(Z,K),R[ie+se+8]=n.x,R[ie+se+9]=n.y,R[ie+se+10]=n.z,R[ie+se+11]=Z.itemSize===4?n.w:1)}}u={count:c,texture:D,size:new le(N,P)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<d.length;m++)g+=d[m];const v=a.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",d)}h.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Np(r,e,t,i){let n=new WeakMap;function s(h){const d=i.render.frame,l=h.geometry,c=e.get(h,l);if(n.get(c)!==d&&(e.update(c),n.set(c,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),n.get(h)!==d&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),n.set(h,d))),h.isSkinnedMesh){const u=h.skeleton;n.get(u)!==d&&(u.update(),n.set(u,d))}return c}function o(){n=new WeakMap}function a(h){const d=h.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}class Gh extends Ut{constructor(e,t,i,n,s,o,a,h,d,l=zn){if(l!==zn&&l!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===zn&&(i=pn),i===void 0&&l===qn&&(i=Xn),super(null,n,s,o,a,h,l,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=h!==void 0?h:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wh=new Ut,Ml=new Gh(1,1),Vh=new Ih,jh=new wd,Xh=new zh,bl=[],Sl=[],Tl=new Float32Array(16),El=new Float32Array(9),Al=new Float32Array(4);function Qn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=bl[n];if(s===void 0&&(s=new Float32Array(n),bl[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ar(r,e){let t=Sl[e];t===void 0&&(t=new Int32Array(e),Sl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Up(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function zp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Al.set(i),r.uniformMatrix2fv(this.addr,!1,Al),At(t,i)}}function Hp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;El.set(i),r.uniformMatrix3fv(this.addr,!1,El),At(t,i)}}function Gp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Tl.set(i),r.uniformMatrix4fv(this.addr,!1,Tl),At(t,i)}}function Wp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function Xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function $p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function Zp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Ml.compareFunction=kh,s=Ml):s=Wh,t.setTexture2D(e||s,n)}function Jp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||jh,n)}function Qp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Xh,n)}function em(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Vh,n)}function tm(r){switch(r){case 5126:return Up;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Wp;case 35667:case 35671:return Vp;case 35668:case 35672:return jp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}function im(r,e){r.uniform1fv(this.addr,e)}function nm(r,e){const t=Qn(e,this.size,2);r.uniform2fv(this.addr,t)}function sm(r,e){const t=Qn(e,this.size,3);r.uniform3fv(this.addr,t)}function rm(r,e){const t=Qn(e,this.size,4);r.uniform4fv(this.addr,t)}function om(r,e){const t=Qn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function am(r,e){const t=Qn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lm(r,e){const t=Qn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hm(r,e){r.uniform1iv(this.addr,e)}function cm(r,e){r.uniform2iv(this.addr,e)}function dm(r,e){r.uniform3iv(this.addr,e)}function um(r,e){r.uniform4iv(this.addr,e)}function fm(r,e){r.uniform1uiv(this.addr,e)}function pm(r,e){r.uniform2uiv(this.addr,e)}function mm(r,e){r.uniform3uiv(this.addr,e)}function gm(r,e){r.uniform4uiv(this.addr,e)}function vm(r,e,t){const i=this.cache,n=e.length,s=Ar(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Wh,s[o])}function xm(r,e,t){const i=this.cache,n=e.length,s=Ar(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||jh,s[o])}function ym(r,e,t){const i=this.cache,n=e.length,s=Ar(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Xh,s[o])}function _m(r,e,t){const i=this.cache,n=e.length,s=Ar(t,n);Et(i,s)||(r.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Vh,s[o])}function wm(r){switch(r){case 5126:return im;case 35664:return nm;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return cm;case 35668:case 35672:return dm;case 35669:case 35673:return um;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return _m}}class Mm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tm(t.type)}}class bm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Cl(r,e){r.seq.push(e),r.map[e.id]=e}function Tm(r,e,t){const i=r.name,n=i.length;for(io.lastIndex=0;;){const s=io.exec(i),o=io.lastIndex;let a=s[1];const h=s[2]==="]",d=s[3];if(h&&(a=a|0),d===void 0||d==="["&&o+2===n){Cl(t,d===void 0?new Mm(a,r,e):new bm(a,r,e));break}else{let c=t.map[a];c===void 0&&(c=new Sm(a),Cl(t,c)),t=c}}}class ur{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Tm(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],h=i[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Pl(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Em=37297;let Am=0;function Cm(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Rl=new He;function Pm(r){tt._getMatrix(Rl,tt.workingColorSpace,r);const e=`mat3( ${Rl.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case Tr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Cm(r.getShaderSource(e),o)}else return n}function Rm(r,e){const t=Pm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function km(r,e){let t;switch(e){case Dc:t="Linear";break;case Ic:t="Reinhard";break;case Nc:t="Cineon";break;case yh:t="ACESFilmic";break;case Fc:t="AgX";break;case Oc:t="Neutral";break;case Uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new A;function Lm(){tt.getLuminanceCoefficients(Xs);const r=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Im(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nm(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ps(r){return r!==""}function Ll(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(r){return r.replace(Um,Om)}const Fm=new Map;function Om(r,e){let t=Ve[e];if(t===void 0){const i=Fm.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(r){return r.replace(Bm,zm)}function zm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Nl(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Hm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Gm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Vn:case jn:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jn:e="ENVMAP_MODE_REFRACTION";break}return e}function Vm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xh:e="ENVMAP_BLENDING_MULTIPLY";break;case kc:e="ENVMAP_BLENDING_MIX";break;case Lc:e="ENVMAP_BLENDING_ADD";break}return e}function jm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Xm(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const h=Hm(t),d=Gm(t),l=Wm(t),c=Vm(t),u=jm(t),f=Dm(t),g=Im(s),v=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?Ve.tonemapping_pars_fragment:"",t.toneMapping!==$i?km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),o=na(o),o=Ll(o,t),o=Dl(o,t),a=na(a),a=Ll(a,t),a=Dl(a,t),o=Il(o),a=Il(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,w=y+p+a,N=Pl(n,n.VERTEX_SHADER,x),P=Pl(n,n.FRAGMENT_SHADER,w);n.attachShader(v,N),n.attachShader(v,P),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function R(I){if(r.debug.checkShaderErrors){const j=n.getProgramInfoLog(v).trim(),V=n.getShaderInfoLog(N).trim(),Z=n.getShaderInfoLog(P).trim();let ie=!0,K=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,N,P);else{const se=kl(n,N,"vertex"),Y=kl(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+se+`
`+Y)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||Z==="")&&(K=!1);K&&(I.diagnostics={runnable:ie,programLog:j,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}n.deleteShader(N),n.deleteShader(P),D=new ur(n,v),T=Nm(n,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(v,Em)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=P,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $m(e),t.set(e,i)),i}}class $m{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function Km(r,e,t,i,n,s,o){const a=new xa,h=new Ym,d=new Set,l=[],c=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return d.add(T),T===0?"uv":`uv${T}`}function m(T,b,I,j,V){const Z=j.fog,ie=V.geometry,K=T.isMeshStandardMaterial?j.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),Y=se&&se.mapping===Sr?se.image.height:null,fe=g[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ye=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Re=ye!==void 0?ye.length:0;let qe=0;ie.morphAttributes.position!==void 0&&(qe=1),ie.morphAttributes.normal!==void 0&&(qe=2),ie.morphAttributes.color!==void 0&&(qe=3);let dt,Q,ae,Ae;if(fe){const lt=vi[fe];dt=lt.vertexShader,Q=lt.fragmentShader}else dt=T.vertexShader,Q=T.fragmentShader,h.update(T),ae=h.getVertexShaderID(T),Ae=h.getFragmentShaderID(T);const pe=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Oe=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,xt=!!T.map,Qe=!!T.matcap,wt=!!se,B=!!T.aoMap,ei=!!T.lightMap,Ke=!!T.bumpMap,Ze=!!T.normalMap,De=!!T.displacementMap,mt=!!T.emissiveMap,Le=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,H=T.clearcoat>0,ee=T.dispersion>0,ne=T.iridescence>0,J=T.sheen>0,Ce=T.transmission>0,me=M&&!!T.anisotropyMap,_e=H&&!!T.clearcoatMap,et=H&&!!T.clearcoatNormalMap,re=H&&!!T.clearcoatRoughnessMap,we=ne&&!!T.iridescenceMap,Ie=ne&&!!T.iridescenceThicknessMap,Ue=J&&!!T.sheenColorMap,Me=J&&!!T.sheenRoughnessMap,Je=!!T.specularMap,We=!!T.specularColorMap,ut=!!T.specularIntensityMap,U=Ce&&!!T.transmissionMap,ue=Ce&&!!T.thicknessMap,q=!!T.gradientMap,te=!!T.alphaMap,xe=T.alphaTest>0,ge=!!T.alphaHash,Be=!!T.extensions;let yt=$i;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(yt=r.toneMapping);const kt={shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:Q,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&V.instanceColor!==null,instancingMorph:Oe&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Kn,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:Qe,envMap:wt,envMapMode:wt&&se.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:ei,bumpMap:Ke,normalMap:Ze,displacementMap:u&&De,emissiveMap:mt,normalMapObjectSpace:Ze&&T.normalMapType===Gc,normalMapTangentSpace:Ze&&T.normalMapType===Rh,metalnessMap:Le,roughnessMap:C,anisotropy:M,anisotropyMap:me,clearcoat:H,clearcoatMap:_e,clearcoatNormalMap:et,clearcoatRoughnessMap:re,dispersion:ee,iridescence:ne,iridescenceMap:we,iridescenceThicknessMap:Ie,sheen:J,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:Je,specularColorMap:We,specularIntensityMap:ut,transmission:Ce,transmissionMap:U,thicknessMap:ue,gradientMap:q,opaque:T.transparent===!1&&T.blending===Bn&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:ge,combine:T.combine,mapUv:xt&&v(T.map.channel),aoMapUv:B&&v(T.aoMap.channel),lightMapUv:ei&&v(T.lightMap.channel),bumpMapUv:Ke&&v(T.bumpMap.channel),normalMapUv:Ze&&v(T.normalMap.channel),displacementMapUv:De&&v(T.displacementMap.channel),emissiveMapUv:mt&&v(T.emissiveMap.channel),metalnessMapUv:Le&&v(T.metalnessMap.channel),roughnessMapUv:C&&v(T.roughnessMap.channel),anisotropyMapUv:me&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(T.sheenRoughnessMap.channel),specularMapUv:Je&&v(T.specularMap.channel),specularColorMapUv:We&&v(T.specularColorMap.channel),specularIntensityMapUv:ut&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:ue&&v(T.thicknessMap.channel),alphaMapUv:te&&v(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ze||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ie.attributes.uv&&(xt||te),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Ne,skinning:V.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:mt&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Nt,flipSided:T.side===jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Be&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&T.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return kt.vertexUv1s=d.has(1),kt.vertexUv2s=d.has(2),kt.vertexUv3s=d.has(3),d.clear(),kt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)b.push(I),b.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(y(b,T),x(b,T),b.push(r.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function x(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function w(T){const b=g[T.type];let I;if(b){const j=vi[b];I=yr.clone(j.uniforms)}else I=T.uniforms;return I}function N(T,b){let I;for(let j=0,V=l.length;j<V;j++){const Z=l[j];if(Z.cacheKey===b){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new Xm(r,b,T,s),l.push(I)),I}function P(T){if(--T.usedTimes===0){const b=l.indexOf(T);l[b]=l[l.length-1],l.pop(),T.destroy()}}function R(T){h.remove(T)}function D(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:N,releaseProgram:P,releaseShaderCache:R,programs:l,dispose:D}}function Zm(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,h){r.get(o)[a]=h}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Jm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ul(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fl(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(c,u,f,g,v,m){let p=r[e];return p===void 0?(p={id:c.id,object:c,geometry:u,material:f,groupOrder:g,renderOrder:c.renderOrder,z:v,group:m},r[e]=p):(p.id=c.id,p.object=c,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=v,p.group=m),e++,p}function a(c,u,f,g,v,m){const p=o(c,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function h(c,u,f,g,v,m){const p=o(c,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function d(c,u){t.length>1&&t.sort(c||Jm),i.length>1&&i.sort(u||Ul),n.length>1&&n.sort(u||Ul)}function l(){for(let c=e,u=r.length;c<u;c++){const f=r[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:h,finish:l,sort:d}}function Qm(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new Fl,r.set(i,[o])):n>=s.length?(o=new Fl,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function eg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ge};break;case"SpotLight":t={position:new A,direction:new A,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function tg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ig=0;function ng(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sg(r){const e=new eg,t=tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new A);const n=new A,s=new at,o=new at;function a(d){let l=0,c=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,x=0,w=0,N=0,P=0,R=0;d.sort(ng);for(let T=0,b=d.length;T<b;T++){const I=d[T],j=I.color,V=I.intensity,Z=I.distance,ie=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)l+=j.r*V,c+=j.g*V,u+=j.b*V;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],V);R++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,Y=t.get(I);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=ie,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=K,f++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(j).multiplyScalar(V),K.distance=Z,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[v]=K;const se=I.shadow;if(I.map&&(i.spotLightMap[N]=I.map,N++,se.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[v]=se.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=ie,w++}v++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(j).multiplyScalar(V),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const se=I.shadow,Y=t.get(I);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(V),K.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=K,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==w||D.numSpotMaps!==N||D.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=w,D.numSpotMaps=N,D.numLightProbes=R,i.version=ig++)}function h(d,l){let c=0,u=0,f=0,g=0,v=0;const m=l.matrixWorldInverse;for(let p=0,y=d.length;p<y;p++){const x=d[p];if(x.isDirectionalLight){const w=i.directional[c];w.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),c++}else if(x.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const w=i.point[u];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:h,state:i}}function Ol(r){const e=new sg(r),t=[],i=[];function n(l){d.camera=l,t.length=0,i.length=0}function s(l){t.push(l)}function o(l){i.push(l)}function a(){e.setup(t)}function h(l){e.setupView(t,l)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:d,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function rg(r){let e=new WeakMap;function t(n,s=0){const o=e.get(n);let a;return o===void 0?(a=new Ol(r),e.set(n,[a])):s>=o.length?(a=new Ol(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class og extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ag extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`;function cg(r,e,t){let i=new ya;const n=new le,s=new le,o=new ct,a=new og({depthPacking:Hc}),h=new ag,d={},l=t.maxTextureSize,c={[Ki]:jt,[jt]:Ki,[Nt]:Nt},u=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:lg,fragmentShader:hg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new L(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(P,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=r.getRenderTarget(),b=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Di),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=p!==Ri&&this.type===Ri,Z=p===Ri&&this.type!==Ri;for(let ie=0,K=P.length;ie<K;ie++){const se=P[ie],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const fe=Y.getFrameExtents();if(n.multiply(fe),s.copy(Y.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/fe.x),n.x=s.x*fe.x,Y.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/fe.y),n.y=s.y*fe.y,Y.mapSize.y=s.y)),Y.map===null||V===!0||Z===!0){const Re=this.type!==Ri?{minFilter:Jt,magFilter:Jt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pi(n.x,n.y,Re),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ye=Y.getViewportCount();for(let Re=0;Re<ye;Re++){const qe=Y.getViewport(Re);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),j.viewport(o),Y.updateMatrices(se,Re),i=Y.getFrustum(),w(R,D,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&y(Y,D),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,b,I)};function y(P,R){const D=e.update(v);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pi(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(R,null,D,u,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(R,null,D,f,v,null)}function x(P,R,D,T){let b=null;const I=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)b=I;else if(b=D.isPointLight===!0?h:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=b.uuid,V=R.uuid;let Z=d[j];Z===void 0&&(Z={},d[j]=Z);let ie=Z[V];ie===void 0&&(ie=b.clone(),Z[V]=ie,R.addEventListener("dispose",N)),b=ie}if(b.visible=R.visible,b.wireframe=R.wireframe,T===Ri?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:c[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=r.properties.get(b);j.light=D}return b}function w(P,R,D,T,b){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Ri)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const V=e.update(P),Z=P.material;if(Array.isArray(Z)){const ie=V.groups;for(let K=0,se=ie.length;K<se;K++){const Y=ie[K],fe=Z[Y.materialIndex];if(fe&&fe.visible){const ye=x(P,fe,T,b);P.onBeforeShadow(r,P,R,D,V,ye,Y),r.renderBufferDirect(D,null,V,ye,P,Y),P.onAfterShadow(r,P,R,D,V,ye,Y)}}}else if(Z.visible){const ie=x(P,Z,T,b);P.onBeforeShadow(r,P,R,D,V,ie,null),r.renderBufferDirect(D,null,V,ie,P,null),P.onAfterShadow(r,P,R,D,V,ie,null)}}const j=P.children;for(let V=0,Z=j.length;V<Z;V++)w(j[V],R,D,T,b)}function N(P){P.target.removeEventListener("dispose",N);for(const D in d){const T=d[D],b=P.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const dg={[wo]:Mo,[bo]:Eo,[So]:Ao,[Wn]:To,[Mo]:wo,[Eo]:bo,[Ao]:So,[To]:Wn};function ug(r,e){function t(){let U=!1;const ue=new ct;let q=null;const te=new ct(0,0,0,0);return{setMask:function(xe){q!==xe&&!U&&(r.colorMask(xe,xe,xe,xe),q=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ge,Be,yt,kt){kt===!0&&(xe*=yt,ge*=yt,Be*=yt),ue.set(xe,ge,Be,yt),te.equals(ue)===!1&&(r.clearColor(xe,ge,Be,yt),te.copy(ue))},reset:function(){U=!1,q=null,te.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,q=null,te=null,xe=null;return{setReversed:function(ge){if(ue!==ge){const Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const yt=xe;xe=null,this.setClear(yt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(ge){q!==ge&&!U&&(r.depthMask(ge),q=ge)},setFunc:function(ge){if(ue&&(ge=dg[ge]),te!==ge){switch(ge){case wo:r.depthFunc(r.NEVER);break;case Mo:r.depthFunc(r.ALWAYS);break;case bo:r.depthFunc(r.LESS);break;case Wn:r.depthFunc(r.LEQUAL);break;case So:r.depthFunc(r.EQUAL);break;case To:r.depthFunc(r.GEQUAL);break;case Eo:r.depthFunc(r.GREATER);break;case Ao:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=ge}},setLocked:function(ge){U=ge},setClear:function(ge){xe!==ge&&(ue&&(ge=1-ge),r.clearDepth(ge),xe=ge)},reset:function(){U=!1,q=null,te=null,xe=null,ue=!1}}}function n(){let U=!1,ue=null,q=null,te=null,xe=null,ge=null,Be=null,yt=null,kt=null;return{setTest:function(lt){U||(lt?pe(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!U&&(r.stencilMask(lt),ue=lt)},setFunc:function(lt,ri,bi){(q!==lt||te!==ri||xe!==bi)&&(r.stencilFunc(lt,ri,bi),q=lt,te=ri,xe=bi)},setOp:function(lt,ri,bi){(ge!==lt||Be!==ri||yt!==bi)&&(r.stencilOp(lt,ri,bi),ge=lt,Be=ri,yt=bi)},setLocked:function(lt){U=lt},setClear:function(lt){kt!==lt&&(r.clearStencil(lt),kt=lt)},reset:function(){U=!1,ue=null,q=null,te=null,xe=null,ge=null,Be=null,yt=null,kt=null}}}const s=new t,o=new i,a=new n,h=new WeakMap,d=new WeakMap;let l={},c={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,w=null,N=null,P=null,R=new Ge(0,0,0),D=0,T=!1,b=null,I=null,j=null,V=null,Z=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=se>=2);let fe=null,ye={};const Re=r.getParameter(r.SCISSOR_BOX),qe=r.getParameter(r.VIEWPORT),dt=new ct().fromArray(Re),Q=new ct().fromArray(qe);function ae(U,ue,q,te){const xe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(U,ge),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<q;Be++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(ue+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ge}const Ae={};Ae[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(r.DEPTH_TEST),o.setFunc(Wn),Ke(!1),Ze(Ha),pe(r.CULL_FACE),B(Di);function pe(U){l[U]!==!0&&(r.enable(U),l[U]=!0)}function Ne(U){l[U]!==!1&&(r.disable(U),l[U]=!1)}function Oe(U,ue){return c[U]!==ue?(r.bindFramebuffer(U,ue),c[U]=ue,U===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=ue),U===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ye(U,ue){let q=f,te=!1;if(U){q=u.get(ue),q===void 0&&(q=[],u.set(ue,q));const xe=U.textures;if(q.length!==xe.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Be=xe.length;ge<Be;ge++)q[ge]=r.COLOR_ATTACHMENT0+ge;q.length=xe.length,te=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,te=!0);te&&r.drawBuffers(q)}function xt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Qe={[cn]:r.FUNC_ADD,[pc]:r.FUNC_SUBTRACT,[mc]:r.FUNC_REVERSE_SUBTRACT};Qe[gc]=r.MIN,Qe[vc]=r.MAX;const wt={[xc]:r.ZERO,[yc]:r.ONE,[_c]:r.SRC_COLOR,[yo]:r.SRC_ALPHA,[Ec]:r.SRC_ALPHA_SATURATE,[Sc]:r.DST_COLOR,[Mc]:r.DST_ALPHA,[wc]:r.ONE_MINUS_SRC_COLOR,[_o]:r.ONE_MINUS_SRC_ALPHA,[Tc]:r.ONE_MINUS_DST_COLOR,[bc]:r.ONE_MINUS_DST_ALPHA,[Ac]:r.CONSTANT_COLOR,[Cc]:r.ONE_MINUS_CONSTANT_COLOR,[Pc]:r.CONSTANT_ALPHA,[Rc]:r.ONE_MINUS_CONSTANT_ALPHA};function B(U,ue,q,te,xe,ge,Be,yt,kt,lt){if(U===Di){v===!0&&(Ne(r.BLEND),v=!1);return}if(v===!1&&(pe(r.BLEND),v=!0),U!==fc){if(U!==m||lt!==T){if((p!==cn||w!==cn)&&(r.blendEquation(r.FUNC_ADD),p=cn,w=cn),lt)switch(U){case Bn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mr:r.blendFunc(r.ONE,r.ONE);break;case Ga:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Bn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ga:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,N=null,P=null,R.set(0,0,0),D=0,m=U,T=lt}return}xe=xe||ue,ge=ge||q,Be=Be||te,(ue!==p||xe!==w)&&(r.blendEquationSeparate(Qe[ue],Qe[xe]),p=ue,w=xe),(q!==y||te!==x||ge!==N||Be!==P)&&(r.blendFuncSeparate(wt[q],wt[te],wt[ge],wt[Be]),y=q,x=te,N=ge,P=Be),(yt.equals(R)===!1||kt!==D)&&(r.blendColor(yt.r,yt.g,yt.b,kt),R.copy(yt),D=kt),m=U,T=!1}function ei(U,ue){U.side===Nt?Ne(r.CULL_FACE):pe(r.CULL_FACE);let q=U.side===jt;ue&&(q=!q),Ke(q),U.blending===Bn&&U.transparent===!1?B(Di):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){b!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),b=U)}function Ze(U){U!==cc?(pe(r.CULL_FACE),U!==I&&(U===Ha?r.cullFace(r.BACK):U===dc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),I=U}function De(U){U!==j&&(K&&r.lineWidth(U),j=U)}function mt(U,ue,q){U?(pe(r.POLYGON_OFFSET_FILL),(V!==ue||Z!==q)&&(r.polygonOffset(ue,q),V=ue,Z=q)):Ne(r.POLYGON_OFFSET_FILL)}function Le(U){U?pe(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+ie-1),fe!==U&&(r.activeTexture(U),fe=U)}function M(U,ue,q){q===void 0&&(fe===null?q=r.TEXTURE0+ie-1:q=fe);let te=ye[q];te===void 0&&(te={type:void 0,texture:void 0},ye[q]=te),(te.type!==U||te.texture!==ue)&&(fe!==q&&(r.activeTexture(q),fe=q),r.bindTexture(U,ue||Ae[U]),te.type=U,te.texture=ue)}function H(){const U=ye[fe];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){dt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function Me(U){Q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Je(U,ue){let q=d.get(ue);q===void 0&&(q=new WeakMap,d.set(ue,q));let te=q.get(U);te===void 0&&(te=r.getUniformBlockIndex(ue,U.name),q.set(U,te))}function We(U,ue){const te=d.get(ue).get(U);h.get(ue)!==te&&(r.uniformBlockBinding(ue,te,U.__bindingPointIndex),h.set(ue,te))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},fe=null,ye={},c={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,w=null,N=null,P=null,R=new Ge(0,0,0),D=0,T=!1,b=null,I=null,j=null,V=null,Z=null,dt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ne,bindFramebuffer:Oe,drawBuffers:Ye,useProgram:xt,setBlending:B,setMaterial:ei,setFlipSided:Ke,setCullFace:Ze,setLineWidth:De,setPolygonOffset:mt,setScissorTest:Le,activeTexture:C,bindTexture:M,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:we,texImage3D:Ie,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:et,texStorage3D:re,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:Ue,viewport:Me,reset:ut}}function Bl(r,e,t,i){const n=fg(i);switch(t){case Sh:return r*e;case Eh:return r*e;case Ah:return r*e*2;case fa:return r*e/n.components*n.byteLength;case pa:return r*e/n.components*n.byteLength;case Ch:return r*e*2/n.components*n.byteLength;case ma:return r*e*2/n.components*n.byteLength;case Th:return r*e*3/n.components*n.byteLength;case fi:return r*e*4/n.components*n.byteLength;case ga:return r*e*4/n.components*n.byteLength;case ar:case lr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hr:case cr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lo:case Io:return Math.max(r,16)*Math.max(e,8)/4;case ko:case Do:return Math.max(r,8)*Math.max(e,8)/2;case No:case Uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dr:case Jo:case Qo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ph:case ea:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ta:case ia:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fg(r){switch(r){case Ui:case wh:return{byteLength:1,components:1};case xs:case Mh:case Ii:return{byteLength:2,components:1};case da:case ua:return{byteLength:2,components:4};case pn:case ca:case xi:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function pg(r,e,t,i,n,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,l=new WeakMap;let c;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):xr("canvas")}function v(C,M,H){let ee=1;const ne=Le(C);if((ne.width>H||ne.height>H)&&(ee=H/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(ee*ne.width),Ce=Math.floor(ee*ne.height);c===void 0&&(c=g(J,Ce));const me=M?g(J,Ce):c;return me.width=J,me.height=Ce,me.getContext("2d").drawImage(C,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ce+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(C,M,H,ee,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=M;if(M===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),M===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),M===r.RGBA){const Ce=ne?Tr:tt.getTransfer(ee);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=Ce===ht?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(C,M){let H;return C?M===null||M===pn||M===Xn?H=r.DEPTH24_STENCIL8:M===xi?H=r.DEPTH32F_STENCIL8:M===xs&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pn||M===Xn?H=r.DEPTH_COMPONENT24:M===xi?H=r.DEPTH_COMPONENT32F:M===xs&&(H=r.DEPTH_COMPONENT16),H}function N(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==ui?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){const M=C.target;M.removeEventListener("dispose",P),D(M),M.isVideoTexture&&l.delete(M)}function R(C){const M=C.target;M.removeEventListener("dispose",R),b(M)}function D(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,ee=u.get(H);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(C),Object.keys(ee).length===0&&u.delete(H)}i.remove(C)}function T(C){const M=i.get(C);r.deleteTexture(M.__webglTexture);const H=C.source,ee=u.get(H);delete ee[M.__cacheKey],o.memory.textures--}function b(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)r.deleteFramebuffer(M.__webglFramebuffer[ee]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let ee=0,ne=H.length;ee<ne;ee++){const J=i.get(H[ee]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[ee])}i.remove(C)}let I=0;function j(){I=0}function V(){const C=I;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),I+=1,C}function Z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ie(C,M){const H=i.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,C,M);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function K(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Q(H,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function se(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){Q(H,C,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function Y(C,M){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ae(H,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const fe={[gr]:r.REPEAT,[un]:r.CLAMP_TO_EDGE,[Ro]:r.MIRRORED_REPEAT},ye={[Jt]:r.NEAREST,[Bc]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[ui]:r.LINEAR,[Rr]:r.LINEAR_MIPMAP_NEAREST,[Yi]:r.LINEAR_MIPMAP_LINEAR},Re={[Wc]:r.NEVER,[$c]:r.ALWAYS,[Vc]:r.LESS,[kh]:r.LEQUAL,[jc]:r.EQUAL,[Yc]:r.GEQUAL,[Xc]:r.GREATER,[qc]:r.NOTEQUAL};function qe(C,M){if(M.type===xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ui||M.magFilter===Rr||M.magFilter===Es||M.magFilter===Yi||M.minFilter===ui||M.minFilter===Rr||M.minFilter===Es||M.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,fe[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,fe[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,fe[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ye[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Es&&M.minFilter!==Yi||M.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function dt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const ee=M.source;let ne=u.get(ee);ne===void 0&&(ne={},u.set(ee,ne));const J=Z(M);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[J].usedTimes++;const Ce=ne[C.__cacheKey];Ce!==void 0&&(ne[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(M)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return H}function Q(C,M,H){let ee=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=r.TEXTURE_3D);const ne=dt(C,M),J=M.source;t.bindTexture(ee,C.__webglTexture,r.TEXTURE0+H);const Ce=i.get(J);if(J.version!==Ce.__version||ne===!0){t.activeTexture(r.TEXTURE0+H);const me=tt.getPrimaries(tt.workingColorSpace),_e=M.colorSpace===ki?null:tt.getPrimaries(M.colorSpace),et=M.colorSpace===ki||me===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let re=v(M.image,!1,n.maxTextureSize);re=mt(M,re);const we=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type);let Ue=x(M.internalFormat,we,Ie,M.colorSpace,M.isVideoTexture);qe(ee,M);let Me;const Je=M.mipmaps,We=M.isVideoTexture!==!0,ut=Ce.__version===void 0||ne===!0,U=J.dataReady,ue=N(M,re);if(M.isDepthTexture)Ue=w(M.format===qn,M.type),ut&&(We?t.texStorage2D(r.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ue,re.width,re.height,0,we,Ie,null));else if(M.isDataTexture)if(Je.length>0){We&&ut&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,Je[0].width,Je[0].height);for(let q=0,te=Je.length;q<te;q++)Me=Je[q],We?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,we,Ie,Me.data):t.texImage2D(r.TEXTURE_2D,q,Ue,Me.width,Me.height,0,we,Ie,Me.data);M.generateMipmaps=!1}else We?(ut&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,re.width,re.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,we,Ie,re.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,re.width,re.height,0,we,Ie,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ue,Je[0].width,Je[0].height,re.depth);for(let q=0,te=Je.length;q<te;q++)if(Me=Je[q],M.format!==fi)if(we!==null)if(We){if(U)if(M.layerUpdates.size>0){const xe=Bl(Me.width,Me.height,M.format,M.type);for(const ge of M.layerUpdates){const Be=Me.data.subarray(ge*xe/Me.data.BYTES_PER_ELEMENT,(ge+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ge,Me.width,Me.height,1,we,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,re.depth,we,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Ue,Me.width,Me.height,re.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,re.depth,we,Ie,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Ue,Me.width,Me.height,re.depth,0,we,Ie,Me.data)}else{We&&ut&&t.texStorage2D(r.TEXTURE_2D,ue,Ue,Je[0].width,Je[0].height);for(let q=0,te=Je.length;q<te;q++)Me=Je[q],M.format!==fi?we!==null?We?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Ue,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,Me.width,Me.height,we,Ie,Me.data):t.texImage2D(r.TEXTURE_2D,q,Ue,Me.width,Me.height,0,we,Ie,Me.data)}else if(M.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ue,re.width,re.height,re.depth),U)if(M.layerUpdates.size>0){const q=Bl(re.width,re.height,M.format,M.type);for(const te of M.layerUpdates){const xe=re.data.subarray(te*q/re.data.BYTES_PER_ELEMENT,(te+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,we,Ie,xe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,we,Ie,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,we,Ie,re.data);else if(M.isData3DTexture)We?(ut&&t.texStorage3D(r.TEXTURE_3D,ue,Ue,re.width,re.height,re.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,we,Ie,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,we,Ie,re.data);else if(M.isFramebufferTexture){if(ut)if(We)t.texStorage2D(r.TEXTURE_2D,ue,Ue,re.width,re.height);else{let q=re.width,te=re.height;for(let xe=0;xe<ue;xe++)t.texImage2D(r.TEXTURE_2D,xe,Ue,q,te,0,we,Ie,null),q>>=1,te>>=1}}else if(Je.length>0){if(We&&ut){const q=Le(Je[0]);t.texStorage2D(r.TEXTURE_2D,ue,Ue,q.width,q.height)}for(let q=0,te=Je.length;q<te;q++)Me=Je[q],We?U&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,we,Ie,Me):t.texImage2D(r.TEXTURE_2D,q,Ue,we,Ie,Me);M.generateMipmaps=!1}else if(We){if(ut){const q=Le(re);t.texStorage2D(r.TEXTURE_2D,ue,Ue,q.width,q.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ie,re)}else t.texImage2D(r.TEXTURE_2D,0,Ue,we,Ie,re);m(M)&&p(ee),Ce.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ae(C,M,H){if(M.image.length!==6)return;const ee=dt(C,M),ne=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const J=i.get(ne);if(ne.version!==J.__version||ee===!0){t.activeTexture(r.TEXTURE0+H);const Ce=tt.getPrimaries(tt.workingColorSpace),me=M.colorSpace===ki?null:tt.getPrimaries(M.colorSpace),_e=M.colorSpace===ki||Ce===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const et=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,we=[];for(let te=0;te<6;te++)!et&&!re?we[te]=v(M.image[te],!0,n.maxCubemapSize):we[te]=re?M.image[te].image:M.image[te],we[te]=mt(M,we[te]);const Ie=we[0],Ue=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),Je=x(M.internalFormat,Ue,Me,M.colorSpace),We=M.isVideoTexture!==!0,ut=J.__version===void 0||ee===!0,U=ne.dataReady;let ue=N(M,Ie);qe(r.TEXTURE_CUBE_MAP,M);let q;if(et){We&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Je,Ie.width,Ie.height);for(let te=0;te<6;te++){q=we[te].mipmaps;for(let xe=0;xe<q.length;xe++){const ge=q[xe];M.format!==fi?Ue!==null?We?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,ge.width,ge.height,Ue,ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Je,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,ge.width,ge.height,Ue,Me,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Je,ge.width,ge.height,0,Ue,Me,ge.data)}}}else{if(q=M.mipmaps,We&&ut){q.length>0&&ue++;const te=Le(we[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Je,te.width,te.height)}for(let te=0;te<6;te++)if(re){We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we[te].width,we[te].height,Ue,Me,we[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,we[te].width,we[te].height,0,Ue,Me,we[te].data);for(let xe=0;xe<q.length;xe++){const Be=q[xe].image[te].image;We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Be.width,Be.height,Ue,Me,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Je,Be.width,Be.height,0,Ue,Me,Be.data)}}else{We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,Me,we[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ue,Me,we[te]);for(let xe=0;xe<q.length;xe++){const ge=q[xe];We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ue,Me,ge.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Je,Ue,Me,ge.image[te])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ae(C,M,H,ee,ne,J){const Ce=s.convert(H.format,H.colorSpace),me=s.convert(H.type),_e=x(H.internalFormat,Ce,me,H.colorSpace),et=i.get(M),re=i.get(H);if(re.__renderTarget=M,!et.__hasExternalTextures){const we=Math.max(1,M.width>>J),Ie=Math.max(1,M.height>>J);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,_e,we,Ie,M.depth,0,Ce,me,null):t.texImage2D(ne,J,_e,we,Ie,0,Ce,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ze(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ne,re.__webglTexture,0,Ke(M)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ne,re.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(C,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,J=w(M.stencilBuffer,ne),Ce=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=Ke(M);Ze(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,J,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,J,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,J,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,C)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const J=ee[ne],Ce=s.convert(J.format,J.colorSpace),me=s.convert(J.type),_e=x(J.internalFormat,Ce,me,J.colorSpace),et=Ke(M);H&&Ze(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,_e,M.width,M.height):Ze(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,_e,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,_e,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const ne=ee.__webglTexture,J=Ke(M);if(M.depthTexture.format===zn)Ze(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(M.depthTexture.format===qn)Ze(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=ee}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=r.createRenderbuffer(),pe(M.__webglDepthbuffer[ee],C,!1);else{const ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(C,M,H){const ee=i.get(C);M!==void 0&&Ae(ee.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Oe(C)}function xt(C){const M=C.texture,H=i.get(C),ee=i.get(M);C.addEventListener("dispose",R);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let _e=0;_e<M.mipmaps.length;_e++)H.__webglFramebuffer[me][_e]=r.createFramebuffer()}else H.__webglFramebuffer[me]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[me]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let me=0,_e=ne.length;me<_e;me++){const et=i.get(ne[me]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ze(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const _e=ne[me];H.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const et=s.convert(_e.format,_e.colorSpace),re=s.convert(_e.type),we=x(_e.internalFormat,et,re,_e.colorSpace,C.isXRRenderTarget===!0),Ie=Ke(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,we,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,H.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),qe(r.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ae(H.__webglFramebuffer[me][_e],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Ae(H.__webglFramebuffer[me],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,_e=ne.length;me<_e;me++){const et=ne[me],re=i.get(et);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),qe(r.TEXTURE_2D,et),Ae(H.__webglFramebuffer,C,et,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,0),m(et)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,ee.__webglTexture),qe(me,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ae(H.__webglFramebuffer[_e],C,M,r.COLOR_ATTACHMENT0,me,_e);else Ae(H.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,me,0);m(M)&&p(me),t.unbindTexture()}C.depthBuffer&&Oe(C)}function Qe(C){const M=C.textures;for(let H=0,ee=M.length;H<ee;H++){const ne=M[H];if(m(ne)){const J=y(C),Ce=i.get(ne).__webglTexture;t.bindTexture(J,Ce),p(J),t.unbindTexture()}}}const wt=[],B=[];function ei(C){if(C.samples>0){if(Ze(C)===!1){const M=C.textures,H=C.width,ee=C.height;let ne=r.COLOR_BUFFER_BIT;const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=i.get(C),me=M.length>1;if(me)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const et=i.get(M[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,H,ee,0,0,H,ee,ne,r.NEAREST),h===!0&&(wt.length=0,B.length=0,wt.push(r.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(wt.push(J),B.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const et=i.get(M[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ke(C){return Math.min(n.maxSamples,C.samples)}function Ze(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(C){const M=o.render.frame;l.get(C)!==M&&(l.set(C,M),C.update())}function mt(C,M){const H=C.colorSpace,ee=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Kn&&H!==ki&&(tt.getTransfer(H)===ht?(ee!==fi||ne!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=Ye,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ei,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ze}function mg(r,e){function t(i,n=ki){let s;const o=tt.getTransfer(n);if(i===Ui)return r.UNSIGNED_BYTE;if(i===da)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ua)return r.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return r.BYTE;if(i===Mh)return r.SHORT;if(i===xs)return r.UNSIGNED_SHORT;if(i===ca)return r.INT;if(i===pn)return r.UNSIGNED_INT;if(i===xi)return r.FLOAT;if(i===Ii)return r.HALF_FLOAT;if(i===Sh)return r.ALPHA;if(i===Th)return r.RGB;if(i===fi)return r.RGBA;if(i===Eh)return r.LUMINANCE;if(i===Ah)return r.LUMINANCE_ALPHA;if(i===zn)return r.DEPTH_COMPONENT;if(i===qn)return r.DEPTH_STENCIL;if(i===fa)return r.RED;if(i===pa)return r.RED_INTEGER;if(i===Ch)return r.RG;if(i===ma)return r.RG_INTEGER;if(i===ga)return r.RGBA_INTEGER;if(i===ar||i===lr||i===hr||i===cr)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ko||i===Lo||i===Do||i===Io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===No||i===Uo||i===Fo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===No||i===Uo)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oo||i===Bo||i===zo||i===Ho||i===Go||i===Wo||i===Vo||i===jo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Oo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Go)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ko)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dr||i===Jo||i===Qo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dr)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ph||i===ea||i===ta||i===ia)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class gg extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class st extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(d,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=d.joints["index-finger-tip"],c=d.joints["thumb-tip"],u=l.position.distanceTo(c.position),f=.02,g=.005;d.inputState.pinching&&u>f+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&u<=f-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=n!==null),h!==null&&(h.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new st;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ut,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vt({vertexShader:xg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wg extends Zn{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",h=1,d=null,l=null,c=null,u=null,f=null,g=null;const v=new _g,m=t.getContextAttributes();let p=null,y=null;const x=[],w=[],N=new le;let P=null;const R=new Zt;R.viewport=new ct;const D=new Zt;D.viewport=new ct;const T=[R,D],b=new gg;let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=x[Q];return ae===void 0&&(ae=new no,x[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=x[Q];return ae===void 0&&(ae=new no,x[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=x[Q];return ae===void 0&&(ae=new no,x[Q]=ae),ae.getHandSpace()};function V(Q){const ae=w.indexOf(Q.inputSource);if(ae===-1)return;const Ae=x[ae];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,d||o),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",Z),n.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<x.length;Q++){const ae=w[Q];ae!==null&&(w[Q]=null,x[Q].disconnect(ae))}I=null,j=null,v.reset(),e.setRenderTarget(p),f=null,u=null,c=null,n=null,y=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",Z),n.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),n.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new pi(f.framebufferWidth,f.framebufferHeight,{format:fi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ae=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?qn:zn,Ae=m.stencil?Xn:pn);const Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};c=new XRWebGLBinding(n,t),u=c.createProjectionLayer(Ne),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new pi(u.textureWidth,u.textureHeight,{format:fi,type:Ui,depthTexture:new Gh(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),d=null,o=await n.requestReferenceSpace(a),dt.setContext(n),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(Q){for(let ae=0;ae<Q.removed.length;ae++){const Ae=Q.removed[ae],pe=w.indexOf(Ae);pe>=0&&(w[pe]=null,x[pe].disconnect(Ae))}for(let ae=0;ae<Q.added.length;ae++){const Ae=Q.added[ae];let pe=w.indexOf(Ae);if(pe===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=w.length){w.push(Ae),pe=Oe;break}else if(w[Oe]===null){w[Oe]=Ae,pe=Oe;break}if(pe===-1)break}const Ne=x[pe];Ne&&Ne.connect(Ae)}}const K=new A,se=new A;function Y(Q,ae,Ae){K.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(Ae.matrixWorld);const pe=K.distanceTo(se),Ne=ae.projectionMatrix.elements,Oe=Ae.projectionMatrix.elements,Ye=Ne[14]/(Ne[10]-1),xt=Ne[14]/(Ne[10]+1),Qe=(Ne[9]+1)/Ne[5],wt=(Ne[9]-1)/Ne[5],B=(Ne[8]-1)/Ne[0],ei=(Oe[8]+1)/Oe[0],Ke=Ye*B,Ze=Ye*ei,De=pe/(-B+ei),mt=De*-B;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(De),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Le=Ye+De,C=xt+De,M=Ke-mt,H=Ze+(pe-mt),ee=Qe*xt/C*Le,ne=wt*xt/C*Le;Q.projectionMatrix.makePerspective(M,H,ee,ne,Le,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let ae=Q.near,Ae=Q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),b.near=D.near=R.near=ae,b.far=D.far=R.far=Ae,(I!==b.near||j!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,j=b.far),R.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,b.layers.mask=R.layers.mask|D.layers.mask;const pe=Q.parent,Ne=b.cameras;fe(b,pe);for(let Oe=0;Oe<Ne.length;Oe++)fe(Ne[Oe],pe);Ne.length===2?Y(b,R,D):b.projectionMatrix.copy(R.projectionMatrix),ye(Q,b,pe)};function ye(Q,ae,Ae){Ae===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ys*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return h},this.setFoveation=function(Q){h=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Re=null;function qe(Q,ae){if(l=ae.getViewerPose(d||o),g=ae,l!==null){const Ae=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let pe=!1;Ae.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Oe=0;Oe<Ae.length;Oe++){const Ye=Ae[Oe];let xt=null;if(f!==null)xt=f.getViewport(Ye);else{const wt=c.getViewSubImage(u,Ye);xt=wt.viewport,Oe===0&&(e.setRenderTargetTextures(y,wt.colorTexture,u.ignoreDepthValues?void 0:wt.depthStencilTexture),e.setRenderTarget(y))}let Qe=T[Oe];Qe===void 0&&(Qe=new Zt,Qe.layers.enable(Oe),Qe.viewport=new ct,T[Oe]=Qe),Qe.matrix.fromArray(Ye.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ye.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(xt.x,xt.y,xt.width,xt.height),Oe===0&&(b.matrix.copy(Qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(Qe)}const Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Oe=c.getDepthInformation(Ae[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,n.renderState)}}for(let Ae=0;Ae<x.length;Ae++){const pe=w[Ae],Ne=x[Ae];pe!==null&&Ne!==void 0&&Ne.update(pe,ae,d||o)}Re&&Re(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const dt=new Hh;dt.setAnimationLoop(qe),this.setAnimationLoop=function(Q){Re=Q},this.dispose=function(){}}}const sn=new wi,Mg=new at;function bg(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Oh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),c(m,p)):p.isMeshPhongMaterial?(s(m,p),l(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?h(m,p,y,x):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,w=y.envMapRotation;x&&(m.envMap.value=x,sn.copy(w),sn.x*=-1,sn.y*=-1,sn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(sn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sg(r,e,t,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,x){const w=x.program;i.uniformBlockBinding(y,w)}function d(y,x){let w=n[y.id];w===void 0&&(g(y),w=l(y),n[y.id]=w,y.addEventListener("dispose",m));const N=x.program;i.updateUBOMapping(y,N);const P=e.render.frame;s[y.id]!==P&&(u(y),s[y.id]=P)}function l(y){const x=c();y.__bindingPointIndex=x;const w=r.createBuffer(),N=y.__size,P=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,N,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,w),w}function c(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=n[y.id],w=y.uniforms,N=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let P=0,R=w.length;P<R;P++){const D=Array.isArray(w[P])?w[P]:[w[P]];for(let T=0,b=D.length;T<b;T++){const I=D[T];if(f(I,P,T,N)===!0){const j=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let ie=0;ie<V.length;ie++){const K=V[ie],se=v(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,j+Z,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,Z),Z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,w,N){const P=y.value,R=x+"_"+w;if(N[R]===void 0)return typeof P=="number"||typeof P=="boolean"?N[R]=P:N[R]=P.clone(),!0;{const D=N[R];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return N[R]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(y){const x=y.uniforms;let w=0;const N=16;for(let R=0,D=x.length;R<D;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,I=T.length;b<I;b++){const j=T[b],V=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,ie=V.length;Z<ie;Z++){const K=V[Z],se=v(K),Y=w%N,fe=Y%se.boundary,ye=Y+fe;w+=fe,ye!==0&&N-ye<se.storage&&(w+=N-ye),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=se.storage}}}const P=w%N;return P>0&&(w+=N-P),y.__size=w,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(const y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:h,update:d,dispose:p}}class Tg{constructor(e={}){const{canvas:t=fd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=$i,this.toneMappingExposure=1;const w=this;let N=!1,P=0,R=0,D=null,T=-1,b=null;const I=new ct,j=new ct;let V=null;const Z=new Ge(0);let ie=0,K=t.width,se=t.height,Y=1,fe=null,ye=null;const Re=new ct(0,0,K,se),qe=new ct(0,0,K,se);let dt=!1;const Q=new ya;let ae=!1,Ae=!1;const pe=new at,Ne=new at,Oe=new A,Ye=new ct,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function wt(){return D===null?Y:1}let B=i;function ei(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){const F="webgl2";if(B=ei(F,S),B===null)throw ei(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ke,Ze,De,mt,Le,C,M,H,ee,ne,J,Ce,me,_e,et,re,we,Ie,Ue,Me,Je,We,ut,U;function ue(){Ke=new Rp(B),Ke.init(),We=new mg(B,Ke),Ze=new Sp(B,Ke,e,We),De=new ug(B,Ke),Ze.reverseDepthBuffer&&u&&De.buffers.depth.setReversed(!0),mt=new Dp(B),Le=new Zm,C=new pg(B,Ke,De,Le,Ze,We,mt),M=new Ep(w),H=new Pp(w),ee=new Bd(B),ut=new Mp(B,ee),ne=new kp(B,ee,mt,ut),J=new Np(B,ne,ee,mt),Ue=new Ip(B,Ze,C),re=new Tp(Le),Ce=new Km(w,M,H,Ke,Ze,ut,re),me=new bg(w,Le),_e=new Qm,et=new rg(Ke),Ie=new wp(w,M,H,De,J,f,h),we=new cg(w,J,Ze),U=new Sg(B,mt,Ze,De),Me=new bp(B,Ke,mt),Je=new Lp(B,Ke,mt),mt.programs=Ce.programs,w.capabilities=Ze,w.extensions=Ke,w.properties=Le,w.renderLists=_e,w.shadowMap=we,w.state=De,w.info=mt}ue();const q=new wg(w,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(K,se,!1))},this.getSize=function(S){return S.set(K,se)},this.setSize=function(S,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,se=F,t.width=Math.floor(S*Y),t.height=Math.floor(F*Y),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(K*Y,se*Y).floor()},this.setDrawingBufferSize=function(S,F,G){K=S,se=F,Y=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,F,G,W){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,F,G,W),De.viewport(I.copy(Re).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,F,G,W){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,F,G,W),De.scissor(j.copy(qe).multiplyScalar(Y).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(S){De.setScissorTest(dt=S)},this.setOpaqueSort=function(S){fe=S},this.setTransparentSort=function(S){ye=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,F=!0,G=!0){let W=0;if(S){let O=!1;if(D!==null){const oe=D.texture.format;O=oe===ga||oe===ma||oe===pa}if(O){const oe=D.texture.type,ve=oe===Ui||oe===pn||oe===xs||oe===Xn||oe===da||oe===ua,be=Ie.getClearColor(),Se=Ie.getClearAlpha(),Fe=be.r,ze=be.g,Te=be.b;ve?(g[0]=Fe,g[1]=ze,g[2]=Te,g[3]=Se,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Fe,v[1]=ze,v[2]=Te,v[3]=Se,B.clearBufferiv(B.COLOR,0,v))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),et.dispose(),Le.dispose(),M.dispose(),H.dispose(),J.dispose(),ut.dispose(),U.dispose(),Ce.dispose(),q.dispose(),q.removeEventListener("sessionstart",Da),q.removeEventListener("sessionend",Ia),Zi.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const S=mt.autoReset,F=we.enabled,G=we.autoUpdate,W=we.needsUpdate,O=we.type;ue(),mt.autoReset=S,we.enabled=F,we.autoUpdate=G,we.needsUpdate=W,we.type=O}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const F=S.target;F.removeEventListener("dispose",Be),yt(F)}function yt(S){kt(S),Le.remove(S)}function kt(S){const F=Le.get(S).programs;F!==void 0&&(F.forEach(function(G){Ce.releaseProgram(G)}),S.isShaderMaterial&&Ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,W,O,oe){F===null&&(F=xt);const ve=O.isMesh&&O.matrixWorld.determinant()<0,be=ac(S,F,G,W,O);De.setMaterial(W,ve);let Se=G.index,Fe=1;if(W.wireframe===!0){if(Se=ne.getWireframeAttribute(G),Se===void 0)return;Fe=2}const ze=G.drawRange,Te=G.attributes.position;let nt=ze.start*Fe,ft=(ze.start+ze.count)*Fe;oe!==null&&(nt=Math.max(nt,oe.start*Fe),ft=Math.min(ft,(oe.start+oe.count)*Fe)),Se!==null?(nt=Math.max(nt,0),ft=Math.min(ft,Se.count)):Te!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,Te.count));const gt=ft-nt;if(gt<0||gt===1/0)return;ut.setup(O,W,be,G,Se);let Gt,rt=Me;if(Se!==null&&(Gt=ee.get(Se),rt=Je,rt.setIndex(Gt)),O.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*wt()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(O.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),De.setLineWidth(Pe*wt()),O.isLineSegments?rt.setMode(B.LINES):O.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else O.isPoints?rt.setMode(B.POINTS):O.isSprite&&rt.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,Si=O._multiDrawCounts,ot=O._multiDrawCount,oi=Se?ee.get(Se).bytesPerElement:1,yn=Le.get(W).currentProgram.getUniforms();for(let qt=0;qt<ot;qt++)yn.setValue(B,"_gl_DrawID",qt),rt.render(Pe[qt]/oi,Si[qt])}else if(O.isInstancedMesh)rt.renderInstances(nt,gt,O.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Si=Math.min(G.instanceCount,Pe);rt.renderInstances(nt,gt,Si)}else rt.render(nt,gt)};function lt(S,F,G){S.transparent===!0&&S.side===Nt&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Ts(S,F,G),S.side=Ki,S.needsUpdate=!0,Ts(S,F,G),S.side=Nt):Ts(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),p=et.get(G),p.init(F),x.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const be=oe[ve];lt(be,G,O),W.add(be)}else lt(oe,G,O),W.add(oe)}),x.pop(),p=null,W},this.compileAsync=function(S,F,G=null){const W=this.compile(S,F,G);return new Promise(O=>{function oe(){if(W.forEach(function(ve){Le.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){O(S);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ri=null;function bi(S){ri&&ri(S)}function Da(){Zi.stop()}function Ia(){Zi.start()}const Zi=new Hh;Zi.setAnimationLoop(bi),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(S){ri=S,q.setAnimationLoop(S),S===null?Zi.stop():Zi.start()},q.addEventListener("sessionstart",Da),q.addEventListener("sessionend",Ia),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,F,D),p=et.get(S,x.length),p.init(F),x.push(p),Ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Ne),Ae=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Ae),m=_e.get(S,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const oe=w.xr.getDepthSensingMesh();oe!==null&&Pr(oe,F,-1/0,w.sortObjects)}Pr(S,F,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(fe,ye),Qe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qe&&Ie.addToRenderList(m,S),this.info.render.frame++,ae===!0&&re.beginShadows();const G=p.state.shadowsArray;we.render(G,S,F),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let ve=0,be=oe.length;ve<be;ve++){const Se=oe[ve];Ua(W,O,S,Se)}Qe&&Ie.render(S);for(let ve=0,be=oe.length;ve<be;ve++){const Se=oe[ve];Na(m,S,Se,Se.viewport)}}else O.length>0&&Ua(W,O,S,F),Qe&&Ie.render(S),Na(m,S,F);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(w,S,F),ut.resetDefaultState(),T=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],ae===!0&&re.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Pr(S,F,G,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){W&&Ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const ve=J.update(S),be=S.material;be.visible&&m.push(S,ve,be,G,Ye.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){const ve=J.update(S),be=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ye.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ye.copy(ve.boundingSphere.center)),Ye.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(be)){const Se=ve.groups;for(let Fe=0,ze=Se.length;Fe<ze;Fe++){const Te=Se[Fe],nt=be[Te.materialIndex];nt&&nt.visible&&m.push(S,ve,nt,G,Ye.z,Te)}}else be.visible&&m.push(S,ve,be,G,Ye.z,null)}}const oe=S.children;for(let ve=0,be=oe.length;ve<be;ve++)Pr(oe[ve],F,G,W)}function Na(S,F,G,W){const O=S.opaque,oe=S.transmissive,ve=S.transparent;p.setupLightsView(G),ae===!0&&re.setGlobalState(w.clippingPlanes,G),W&&De.viewport(I.copy(W)),O.length>0&&Ss(O,F,G),oe.length>0&&Ss(oe,F,G),ve.length>0&&Ss(ve,F,G),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ua(S,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new pi(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Ii:Ui,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[W.id],ve=W.viewport||I;oe.setSize(ve.z,ve.w);const be=w.getRenderTarget();w.setRenderTarget(oe),w.getClearColor(Z),ie=w.getClearAlpha(),ie<1&&w.setClearColor(16777215,.5),w.clear(),Qe&&Ie.render(G);const Se=w.toneMapping;w.toneMapping=$i;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ae===!0&&re.setGlobalState(w.clippingPlanes,W),Ss(S,G,W),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,nt=F.length;Te<nt;Te++){const ft=F[Te],gt=ft.object,Gt=ft.geometry,rt=ft.material,Pe=ft.group;if(rt.side===Nt&&gt.layers.test(W.layers)){const Si=rt.side;rt.side=jt,rt.needsUpdate=!0,Fa(gt,G,W,Gt,rt,Pe),rt.side=Si,rt.needsUpdate=!0,ze=!0}}ze===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}w.setRenderTarget(be),w.setClearColor(Z,ie),Fe!==void 0&&(W.viewport=Fe),w.toneMapping=Se}function Ss(S,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=S.length;O<oe;O++){const ve=S[O],be=ve.object,Se=ve.geometry,Fe=W===null?ve.material:W,ze=ve.group;be.layers.test(G.layers)&&Fa(be,F,G,Se,Fe,ze)}}function Fa(S,F,G,W,O,oe){S.onBeforeRender(w,F,G,W,O,oe),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(w,F,G,W,S,oe),O.transparent===!0&&O.side===Nt&&O.forceSinglePass===!1?(O.side=jt,O.needsUpdate=!0,w.renderBufferDirect(G,F,W,O,S,oe),O.side=Ki,O.needsUpdate=!0,w.renderBufferDirect(G,F,W,O,S,oe),O.side=Nt):w.renderBufferDirect(G,F,W,O,S,oe),S.onAfterRender(w,F,G,W,O,oe)}function Ts(S,F,G){F.isScene!==!0&&(F=xt);const W=Le.get(S),O=p.state.lights,oe=p.state.shadowsArray,ve=O.state.version,be=Ce.getParameters(S,O.state,oe,F,G),Se=Ce.getProgramCacheKey(be);let Fe=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?H:M).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Be),Fe=new Map,W.programs=Fe);let ze=Fe.get(Se);if(ze!==void 0){if(W.currentProgram===ze&&W.lightsStateVersion===ve)return Ba(S,be),ze}else be.uniforms=Ce.getUniforms(S),S.onBeforeCompile(be,w),ze=Ce.acquireProgram(be,Se),Fe.set(Se,ze),W.uniforms=be.uniforms;const Te=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=re.uniform),Ba(S,be),W.needsLights=hc(S),W.lightsStateVersion=ve,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ze,W.uniformsList=null,ze}function Oa(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ur.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Ba(S,F){const G=Le.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function ac(S,F,G,W,O){F.isScene!==!0&&(F=xt),C.resetTextureUnits();const oe=F.fog,ve=W.isMeshStandardMaterial?F.environment:null,be=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Kn,Se=(W.isMeshStandardMaterial?H:M).get(W.envMap||ve),Fe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color;let gt=$i;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=w.toneMapping);const Gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=Gt!==void 0?Gt.length:0,Pe=Le.get(W),Si=p.state.lights;if(ae===!0&&(Ae===!0||S!==b)){const ti=S===b&&W.id===T;re.setState(W,S,ti)}let ot=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Si.state.version||Pe.outputColorSpace!==be||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Se||W.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==ze||Pe.morphTargets!==Te||Pe.morphNormals!==nt||Pe.morphColors!==ft||Pe.toneMapping!==gt||Pe.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Pe.__version=W.version);let oi=Pe.currentProgram;ot===!0&&(oi=Ts(W,F,O));let yn=!1,qt=!1,es=!1;const vt=oi.getUniforms(),gi=Pe.uniforms;if(De.useProgram(oi.program)&&(yn=!0,qt=!0,es=!0),W.id!==T&&(T=W.id,qt=!0),yn||b!==S){De.buffers.depth.getReversed()?(pe.copy(S.projectionMatrix),md(pe),gd(pe),vt.setValue(B,"projectionMatrix",pe)):vt.setValue(B,"projectionMatrix",S.projectionMatrix),vt.setValue(B,"viewMatrix",S.matrixWorldInverse);const Fi=vt.map.cameraPosition;Fi!==void 0&&Fi.setValue(B,Oe.setFromMatrixPosition(S.matrixWorld)),Ze.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,qt=!0,es=!0)}if(O.isSkinnedMesh){vt.setOptional(B,O,"bindMatrix"),vt.setOptional(B,O,"bindMatrixInverse");const ti=O.skeleton;ti&&(ti.boneTexture===null&&ti.computeBoneTexture(),vt.setValue(B,"boneTexture",ti.boneTexture,C))}O.isBatchedMesh&&(vt.setOptional(B,O,"batchingTexture"),vt.setValue(B,"batchingTexture",O._matricesTexture,C),vt.setOptional(B,O,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",O._indirectTexture,C),vt.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",O._colorsTexture,C));const ts=G.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&Ue.update(O,G,oi),(qt||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,vt.setValue(B,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gi.envMap.value=Se,gi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(gi.envMapIntensity.value=F.environmentIntensity),qt&&(vt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Pe.needsLights&&lc(gi,es),oe&&W.fog===!0&&me.refreshFogUniforms(gi,oe),me.refreshMaterialUniforms(gi,W,Y,se,p.state.transmissionRenderTarget[S.id]),ur.upload(B,Oa(Pe),gi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ur.upload(B,Oa(Pe),gi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(B,"center",O.center),vt.setValue(B,"modelViewMatrix",O.modelViewMatrix),vt.setValue(B,"normalMatrix",O.normalMatrix),vt.setValue(B,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ti=W.uniformsGroups;for(let Fi=0,Oi=ti.length;Fi<Oi;Fi++){const za=ti[Fi];U.update(za,oi),U.bind(za,oi)}}return oi}function lc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function hc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,F,G){Le.get(S.texture).__webglTexture=F,Le.get(S.depthTexture).__webglTexture=G;const W=Le.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const G=Le.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){D=S,P=F,R=G;let W=!0,O=null,oe=!1,ve=!1;if(S){const Se=Le.get(S);if(Se.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(Se.__hasExternalTextures)C.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Te=S.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Le.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const ze=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?O=ze[F][G]:O=ze[F],oe=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?O=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[G]:O=ze,I.copy(S.viewport),j.copy(S.scissor),V=S.scissorTest}else I.copy(Re).multiplyScalar(Y).floor(),j.copy(qe).multiplyScalar(Y).floor(),V=dt;if(De.bindFramebuffer(B.FRAMEBUFFER,O)&&W&&De.drawBuffers(S,O),De.viewport(I),De.scissor(j),De.setScissorTest(V),oe){const Se=Le.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,G)}else if(ve){const Se=Le.get(S.texture),Fe=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Fe)}T=-1},this.readRenderTargetPixels=function(S,F,G,W,O,oe,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){De.bindFramebuffer(B.FRAMEBUFFER,be);try{const Se=S.texture,Fe=Se.format,ze=Se.type;if(!Ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O&&B.readPixels(F,G,W,O,We.convert(Fe),We.convert(ze),oe)}finally{const Se=D!==null?Le.get(D).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,W,O,oe,ve){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){const Se=S.texture,Fe=Se.format,ze=Se.type;if(!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O){De.bindFramebuffer(B.FRAMEBUFFER,be);const Te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.bufferData(B.PIXEL_PACK_BUFFER,oe.byteLength,B.STREAM_READ),B.readPixels(F,G,W,O,We.convert(Fe),We.convert(ze),0);const nt=D!==null?Le.get(D).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,nt);const ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await pd(B,ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,oe),B.deleteBuffer(Te),B.deleteSync(ft),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,G=0){S.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(S.image.width*W),oe=Math.floor(S.image.height*W),ve=F!==null?F.x:0,be=F!==null?F.y:0;C.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,ve,be,O,oe),De.unbindTexture()},this.copyTextureToTexture=function(S,F,G=null,W=null,O=0){S.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let oe,ve,be,Se,Fe,ze,Te,nt,ft;const gt=S.isCompressedTexture?S.mipmaps[O]:S.image;G!==null?(oe=G.max.x-G.min.x,ve=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Se=G.min.x,Fe=G.min.y,ze=G.isBox3?G.min.z:0):(oe=gt.width,ve=gt.height,be=gt.depth||1,Se=0,Fe=0,ze=0),W!==null?(Te=W.x,nt=W.y,ft=W.z):(Te=0,nt=0,ft=0);const Gt=We.convert(F.format),rt=We.convert(F.type);let Pe;F.isData3DTexture?(C.setTexture3D(F,0),Pe=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Pe=B.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Si=B.getParameter(B.UNPACK_ROW_LENGTH),ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oi=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Se),B.pixelStorei(B.UNPACK_SKIP_ROWS,Fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze);const es=S.isDataArrayTexture||S.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const gi=Le.get(S),ts=Le.get(F),ti=Le.get(gi.__renderTarget),Fi=Le.get(ts.__renderTarget);De.bindFramebuffer(B.READ_FRAMEBUFFER,ti.__webglFramebuffer),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Oi=0;Oi<be;Oi++)es&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,O,ze+Oi),S.isDepthTexture?(vt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(F).__webglTexture,O,ft+Oi),B.blitFramebuffer(Se,Fe,oe,ve,Te,nt,oe,ve,B.DEPTH_BUFFER_BIT,B.NEAREST)):vt?B.copyTexSubImage3D(Pe,O,Te,nt,ft+Oi,Se,Fe,oe,ve):B.copyTexSubImage2D(Pe,O,Te,nt,ft+Oi,Se,Fe,oe,ve);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Pe,O,Te,nt,ft,oe,ve,be,Gt,rt,gt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,O,Te,nt,ft,oe,ve,be,Gt,gt.data):B.texSubImage3D(Pe,O,Te,nt,ft,oe,ve,be,Gt,rt,gt):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,Te,nt,oe,ve,Gt,rt,gt.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,Te,nt,gt.width,gt.height,Gt,gt.data):B.texSubImage2D(B.TEXTURE_2D,O,Te,nt,oe,ve,Gt,rt,gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Si),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oi),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qt),O===0&&F.generateMipmaps&&B.generateMipmap(Pe),De.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G=null,W=null,O=0){return S.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,G,W,O)},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,De.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Ma{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eg extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ag extends Ut{constructor(e=null,t=1,i=1,n,s,o,a,h,d=Jt,l=Jt,c,u){super(null,o,a,h,d,l,n,s,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends Qt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const In=new at,Hl=new at,qs=[],Gl=new gn,Cg=new at,os=new L,as=new vn;class Pg extends L{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Cg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,In),Gl.copy(e.boundingBox).applyMatrix4(In),this.boundingBox.union(Gl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,In),as.copy(e.boundingSphere).applyMatrix4(In),this.boundingSphere.union(as)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(i),e.ray.intersectsSphere(as)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,In),Hl.multiplyMatrices(i,In),os.matrixWorld=Hl,os.raycast(e,qs);for(let o=0,a=qs.length;o<a;o++){const h=qs[o];h.instanceId=s,h.object=this,t.push(h)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ag(new Float32Array(n*this.count),n,this.count,fa,xi));const s=this.morphTexture.source.data.data;let o=0;for(let d=0;d<i.length;d++)o+=i[d];const a=this.geometry.morphTargetsRelative?1:1-o,h=n*e;s[h]=a,s.set(i,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hn extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _r=new A,wr=new A,Wl=new at,ls=new Er,Ys=new vn,so=new A,Vl=new A;class sa extends St{constructor(e=new Mt,t=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)_r.fromBufferAttribute(t,n-1),wr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=_r.distanceTo(wr);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(n),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;Wl.copy(n).invert(),ls.copy(e.ray).applyMatrix4(Wl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,d=this.isLineSegments?2:1,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=d){const p=l.getX(v),y=l.getX(v+1),x=$s(this,e,ls,h,p,y);x&&t.push(x)}if(this.isLineLoop){const v=l.getX(g-1),m=l.getX(f),p=$s(this,e,ls,h,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=d){const p=$s(this,e,ls,h,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=$s(this,e,ls,h,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $s(r,e,t,i,n,s){const o=r.geometry.attributes.position;if(_r.fromBufferAttribute(o,n),wr.fromBufferAttribute(o,s),t.distanceSqToSegment(_r,wr,so,Vl)>i)return;so.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(so);if(!(h<e.near||h>e.far))return{distance:h,point:Vl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const jl=new A,Xl=new A;class Rg extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)jl.fromBufferAttribute(t,n),Xl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jl.distanceTo(Xl);e.setAttribute("lineDistance",new it(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qh extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ql=new at,ra=new Er,Ks=new vn,Zs=new A;class kg extends St{constructor(e=new Mt,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(n),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;ql.copy(n).invert(),ra.copy(e.ray).applyMatrix4(ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,d=i.index,c=i.attributes.position;if(d!==null){const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=d.getX(g);Zs.fromBufferAttribute(c,m),Yl(Zs,m,h,n,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++)Zs.fromBufferAttribute(c,g),Yl(Zs,g,h,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yl(r,e,t,i,n,s,o){const a=ra.distanceSqToPoint(r);if(a<t){const h=new A;ra.closestPointToPoint(r,h),h.applyMatrix4(i);const d=n.ray.origin.distanceTo(h);if(d<n.near||d>n.far)return;s.push({distance:d,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yh extends Ut{constructor(e,t,i,n,s,o,a,h,d){super(e,t,i,n,s,o,a,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,h=s-1,d;for(;a<=h;)if(n=Math.floor(a+(h-a)/2),d=i[n]-o,d<0)a=n+1;else if(d>0)h=n-1;else{h=n;break}if(n=h,i[n]===o)return n/(s-1);const l=i[n],u=i[n+1]-l,f=(o-l)/u;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),h=t||(o.isVector2?new le:new A);return h.copy(a).sub(o).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new A,n=[],s=[],o=[],a=new A,h=new at;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let d=Number.MAX_VALUE;const l=Math.abs(n[0].x),c=Math.abs(n[0].y),u=Math.abs(n[0].z);l<=d&&(d=l,i.set(1,0,0)),c<=d&&(d=c,i.set(0,1,0)),u<=d&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(h.makeRotationAxis(a,g))}o[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(Pt(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(h.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ba extends Mi{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(e,t=new le){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+e*s;let h=this.aX+this.xRadius*Math.cos(a),d=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),c=Math.sin(this.aRotation),u=h-this.aX,f=d-this.aY;h=u*l-f*c+this.aX,d=u*c+f*l+this.aY}return i.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lg extends ba{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sa(){let r=0,e=0,t=0,i=0;function n(s,o,a,h){r=s,e=a,t=-3*s+3*o-2*a-h,i=2*s-2*o+a+h}return{initCatmullRom:function(s,o,a,h,d){n(o,a,d*(a-s),d*(h-o))},initNonuniformCatmullRom:function(s,o,a,h,d,l,c){let u=(o-s)/d-(a-s)/(d+l)+(a-o)/l,f=(a-o)/l-(h-o)/(l+c)+(h-a)/c;u*=l,f*=l,n(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+i*a}}}const Js=new A,ro=new Sa,oo=new Sa,ao=new Sa;class Dg extends Mi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:h===0&&a===s-1&&(a=s-2,h=1);let d,l;this.closed||a>0?d=n[(a-1)%s]:(Js.subVectors(n[0],n[1]).add(n[0]),d=Js);const c=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?l=n[(a+2)%s]:(Js.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Js),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(d.distanceToSquared(c),f),v=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(l),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ro.initNonuniformCatmullRom(d.x,c.x,u.x,l.x,g,v,m),oo.initNonuniformCatmullRom(d.y,c.y,u.y,l.y,g,v,m),ao.initNonuniformCatmullRom(d.z,c.z,u.z,l.z,g,v,m)}else this.curveType==="catmullrom"&&(ro.initCatmullRom(d.x,c.x,u.x,l.x,this.tension),oo.initCatmullRom(d.y,c.y,u.y,l.y,this.tension),ao.initCatmullRom(d.z,c.z,u.z,l.z,this.tension));return i.set(ro.calc(h),oo.calc(h),ao.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $l(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,a=r*r,h=r*a;return(2*t-2*i+s+o)*h+(-3*t+3*i-2*s-o)*a+s*r+t}function Ig(r,e){const t=1-r;return t*t*e}function Ng(r,e){return 2*(1-r)*r*e}function Ug(r,e){return r*r*e}function gs(r,e,t,i){return Ig(r,e)+Ng(r,t)+Ug(r,i)}function Fg(r,e){const t=1-r;return t*t*t*e}function Og(r,e){const t=1-r;return 3*t*t*r*e}function Bg(r,e){return 3*(1-r)*r*r*e}function zg(r,e){return r*r*r*e}function vs(r,e,t,i,n){return Fg(r,e)+Og(r,t)+Bg(r,i)+zg(r,n)}class $h extends Mi{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(vs(e,n.x,s.x,o.x,a.x),vs(e,n.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hg extends Mi{constructor(e=new A,t=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(vs(e,n.x,s.x,o.x,a.x),vs(e,n.y,s.y,o.y,a.y),vs(e,n.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kh extends Mi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gg extends Mi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends Mi{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(gs(e,n.x,s.x,o.x),gs(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wg extends Mi{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(gs(e,n.x,s.x,o.x),gs(e,n.y,s.y,o.y),gs(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),a=s-o,h=n[o===0?o:o-1],d=n[o],l=n[o>n.length-2?n.length-1:o+1],c=n[o>n.length-3?n.length-1:o+2];return i.set($l(a,h.x,d.x,l.x,c.x),$l(a,h.y,d.y,l.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new le().fromArray(n))}return this}}var Kl=Object.freeze({__proto__:null,ArcCurve:Lg,CatmullRomCurve3:Dg,CubicBezierCurve:$h,CubicBezierCurve3:Hg,EllipseCurve:ba,LineCurve:Kh,LineCurve3:Gg,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:Wg,SplineCurve:Jh});class Vg extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],h=a.getLength(),d=h===0?0:1-o/h;return a.getPointAt(d,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,h=o.getPoints(a);for(let d=0;d<h.length;d++){const l=h[d];i&&i.equals(l)||(t.push(l),i=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Kl[n.type]().fromJSON(n))}return this}}class jg extends Vg{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Kh(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new Zh(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,o){const a=new $h(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Jh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,o){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+a,t+h,i,n,s,o),this}absarc(e,t,i,n,s,o){return this.absellipse(e,t,i,i,n,s,o),this}ellipse(e,t,i,n,s,o,a,h){const d=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+d,t+l,i,n,s,o,a,h),this}absellipse(e,t,i,n,s,o,a,h){const d=new ba(e,t,i,n,s,o,a,h);if(this.curves.length>0){const c=d.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(d);const l=d.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ta extends Mt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Pt(n,0,Math.PI*2);const s=[],o=[],a=[],h=[],d=[],l=1/t,c=new A,u=new le,f=new A,g=new A,v=new A;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),h.push(f.x,f.y,f.z);break;case e.length-1:h.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),h.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){const x=i+y*l*n,w=Math.sin(x),N=Math.cos(x);for(let P=0;P<=e.length-1;P++){c.x=e[P].x*w,c.y=e[P].y,c.z=e[P].x*N,o.push(c.x,c.y,c.z),u.x=y/t,u.y=P/(e.length-1),a.push(u.x,u.y);const R=h[3*P+0]*w,D=h[3*P+1],T=h[3*P+0]*N;d.push(R,D,T)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const w=x+y*e.length,N=w,P=w+e.length,R=w+e.length+1,D=w+1;s.push(N,P,D),s.push(R,D,P)}this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.points,e.segments,e.phiStart,e.phiLength)}}class Kt extends Ta{constructor(e=1,t=1,i=4,n=8){const s=new jg;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Kt(e.radius,e.length,e.capSegments,e.radialSegments)}}class Mr extends Mt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],a=[],h=[],d=new A,l=new le;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let c=0,u=3;c<=t;c++,u+=3){const f=i+c/t*n;d.x=e*Math.cos(f),d.y=e*Math.sin(f),o.push(d.x,d.y,d.z),a.push(0,0,1),l.x=(o[u]/e+1)/2,l.y=(o[u+1]/e+1)/2,h.push(l.x,l.y)}for(let c=1;c<=t;c++)s.push(c,c+1,0);this.setIndex(s),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ke extends Mt{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};const d=this;n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(f,2));function y(){const w=new A,N=new A;let P=0;const R=(t-e)/i;for(let D=0;D<=s;D++){const T=[],b=D/s,I=b*(t-e)+e;for(let j=0;j<=n;j++){const V=j/n,Z=V*h+a,ie=Math.sin(Z),K=Math.cos(Z);N.x=I*ie,N.y=-b*i+m,N.z=I*K,c.push(N.x,N.y,N.z),w.set(ie,R,K).normalize(),u.push(w.x,w.y,w.z),f.push(V,1-b),T.push(g++)}v.push(T)}for(let D=0;D<n;D++)for(let T=0;T<s;T++){const b=v[T][D],I=v[T+1][D],j=v[T+1][D+1],V=v[T][D+1];(e>0||T!==0)&&(l.push(b,I,V),P+=3),(t>0||T!==s-1)&&(l.push(I,j,V),P+=3)}d.addGroup(p,P,0),p+=P}function x(w){const N=g,P=new le,R=new A;let D=0;const T=w===!0?e:t,b=w===!0?1:-1;for(let j=1;j<=n;j++)c.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;const I=g;for(let j=0;j<=n;j++){const Z=j/n*h+a,ie=Math.cos(Z),K=Math.sin(Z);R.x=T*K,R.y=m*b,R.z=T*ie,c.push(R.x,R.y,R.z),u.push(0,b,0),P.x=ie*.5+.5,P.y=K*.5*b+.5,f.push(P.x,P.y),g++}for(let j=0;j<n;j++){const V=N+j,Z=I+j;w===!0?l.push(Z,Z+1,V):l.push(Z+1,Z,V),D+=3}d.addGroup(p,D,w===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wt extends ke{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends Mt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],o=[];a(n),d(i),l(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new A,w=new A,N=new A;for(let P=0;P<t.length;P+=3)f(t[P+0],x),f(t[P+1],w),f(t[P+2],N),h(x,w,N,y)}function h(y,x,w,N){const P=N+1,R=[];for(let D=0;D<=P;D++){R[D]=[];const T=y.clone().lerp(w,D/P),b=x.clone().lerp(w,D/P),I=P-D;for(let j=0;j<=I;j++)j===0&&D===P?R[D][j]=T:R[D][j]=T.clone().lerp(b,j/I)}for(let D=0;D<P;D++)for(let T=0;T<2*(P-D)-1;T++){const b=Math.floor(T/2);T%2===0?(u(R[D][b+1]),u(R[D+1][b]),u(R[D][b])):(u(R[D][b+1]),u(R[D+1][b+1]),u(R[D+1][b]))}}function d(y){const x=new A;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(y),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function l(){const y=new A;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const w=m(y)/2/Math.PI+.5,N=p(y)/Math.PI+.5;o.push(w,1-N)}g(),c()}function c(){for(let y=0;y<o.length;y+=6){const x=o[y+0],w=o[y+2],N=o[y+4],P=Math.max(x,w,N),R=Math.min(x,w,N);P>.9&&R<.1&&(x<.2&&(o[y+0]+=1),w<.2&&(o[y+2]+=1),N<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,x){const w=y*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function g(){const y=new A,x=new A,w=new A,N=new A,P=new le,R=new le,D=new le;for(let T=0,b=0;T<s.length;T+=9,b+=6){y.set(s[T+0],s[T+1],s[T+2]),x.set(s[T+3],s[T+4],s[T+5]),w.set(s[T+6],s[T+7],s[T+8]),P.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),D.set(o[b+4],o[b+5]),N.copy(y).add(x).add(w).divideScalar(3);const I=m(N);v(P,b+0,y,I),v(R,b+2,x,I),v(D,b+4,w,I)}}function v(y,x,w,N){N<0&&y.x===1&&(o[x]=y.x-1),w.x===0&&w.z===0&&(o[x]=N/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.vertices,e.indices,e.radius,e.details)}}class Ea extends ws{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ea(e.radius,e.detail)}}const Qs=new A,er=new A,lo=new A,tr=new si;class Xg extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),s=Math.cos(Hn*t),o=e.getIndex(),a=e.getAttribute("position"),h=o?o.count:a.count,d=[0,0,0],l=["a","b","c"],c=new Array(3),u={},f=[];for(let g=0;g<h;g+=3){o?(d[0]=o.getX(g),d[1]=o.getX(g+1),d[2]=o.getX(g+2)):(d[0]=g,d[1]=g+1,d[2]=g+2);const{a:v,b:m,c:p}=tr;if(v.fromBufferAttribute(a,d[0]),m.fromBufferAttribute(a,d[1]),p.fromBufferAttribute(a,d[2]),tr.getNormal(lo),c[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,c[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,c[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let y=0;y<3;y++){const x=(y+1)%3,w=c[y],N=c[x],P=tr[l[y]],R=tr[l[x]],D=`${w}_${N}`,T=`${N}_${w}`;T in u&&u[T]?(lo.dot(u[T].normal)<=s&&(f.push(P.x,P.y,P.z),f.push(R.x,R.y,R.z)),u[T]=null):D in u||(u[D]={index0:d[y],index1:d[x],normal:lo.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Qs.fromBufferAttribute(a,v),er.fromBufferAttribute(a,m),f.push(Qs.x,Qs.y,Qs.z),f.push(er.x,er.y,er.z)}this.setAttribute("position",new it(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Aa extends ws{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class _i extends ws{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _i(e.radius,e.detail)}}class Ms extends Mt{constructor(e=.5,t=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],h=[],d=[],l=[];let c=e;const u=(t-e)/n,f=new A,g=new le;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=c*Math.cos(p),f.y=c*Math.sin(p),h.push(f.x,f.y,f.z),d.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,l.push(g.x,g.y)}c+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,x=y,w=y+i+1,N=y+i+2,P=y+1;a.push(x,w,P),a.push(w,N,P)}}this.setIndex(a),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class je extends Mt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(o+a,Math.PI);let d=0;const l=[],c=new A,u=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let w=0;p===0&&o===0?w=.5/t:p===i&&h===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const P=N/t;c.x=-e*Math.cos(n+P*s)*Math.sin(o+x*a),c.y=e*Math.cos(o+x*a),c.z=e*Math.sin(n+P*s)*Math.sin(o+x*a),g.push(c.x,c.y,c.z),u.copy(c).normalize(),v.push(u.x,u.y,u.z),m.push(P+w,1-x),y.push(d++)}l.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const x=l[p][y+1],w=l[p][y],N=l[p+1][y],P=l[p+1][y+1];(p!==0||o>0)&&f.push(x,w,P),(p!==i-1||h<Math.PI)&&f.push(w,N,P)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class di extends Mt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],h=[],d=[],l=new A,c=new A,u=new A;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,m=f/i*Math.PI*2;c.x=(e+t*Math.cos(m))*Math.cos(v),c.y=(e+t*Math.cos(m))*Math.sin(v),c.z=t*Math.sin(m),a.push(c.x,c.y,c.z),l.x=e*Math.cos(v),l.y=e*Math.sin(v),u.subVectors(c,l).normalize(),h.push(u.x,u.y,u.z),d.push(g/n),d.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class X extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qg extends Cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ho=new at,Zl=new A,Jl=new A;class Qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new at,hs=new A,co=new A;class Yg extends Qh{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(hs),co.copy(i.position),co.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(co),i.updateMatrixWorld(),n.makeTranslation(-hs.x,-hs.y,-hs.z),Ql.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql)}}class Ca extends Cr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Yg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $g extends Qh{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eh extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new $g}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kg extends Cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function th(){return performance.now()}const ih=new at;class nh{constructor(e,t,i=0,n=1/0){this.ray=new Er(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(e,t=!0,i=[]){return oa(e,this,i,t),i.sort(sh),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)oa(e[n],this,i,t);return i.sort(sh),i}}function sh(r,e){return r.distance-e.distance}function oa(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)oa(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);const Xe=2;var E=(r=>(r[r.Rock=0]="Rock",r[r.Earth=1]="Earth",r[r.Gold=2]="Gold",r[r.Dirt=3]="Dirt",r[r.Claimed=4]="Claimed",r[r.Heart=5]="Heart",r[r.Wall=6]="Wall",r[r.Lava=7]="Lava",r[r.Water=8]="Water",r[r.BridgeWood=9]="BridgeWood",r[r.BridgeStone=10]="BridgeStone",r[r.Gem=11]="Gem",r))(E||{}),_=(r=>(r[r.None=0]="None",r[r.Treasury=1]="Treasury",r[r.Lair=2]="Lair",r[r.Hatchery=3]="Hatchery",r[r.Training=4]="Training",r[r.Library=5]="Library",r[r.Portal=6]="Portal",r[r.Guard=7]="Guard",r[r.Workshop=8]="Workshop",r[r.Prison=9]="Prison",r[r.Torture=10]="Torture",r[r.Graveyard=11]="Graveyard",r[r.Temple=12]="Temple",r[r.CombatPit=13]="CombatPit",r[r.Casino=14]="Casino",r))(_||{}),$e=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Open=2]="Open",r))($e||{}),pt=(r=>(r[r.None=0]="None",r[r.Sentry=1]="Sentry",r))(pt||{}),Ee=(r=>(r[r.None=0]="None",r[r.Dig=1]="Dig",r[r.Claim=2]="Claim",r[r.Fortify=3]="Fortify",r))(Ee||{}),$=(r=>(r.Scrabbler="scrabbler",r.Skitterwing="skitterwing",r.Rattlekin="rattlekin",r.Emberling="emberling",r.Gravemage="gravemage",r.Thornwitch="thornwitch",r.Bonewretch="bonewretch",r.HeroKnight="hero_knight",r.HeroArcher="hero_archer",r))($||{}),k=(r=>(r.Idle="idle",r.Dig="dig",r.Claim="claim",r.Fortify="fortify",r.Mine="mine",r.Haul="haul",r.Sleep="sleep",r.Eat="eat",r.Train="train",r.Research="research",r.Fight="fight",r.Flee="flee",r.Wander="wander",r.Guard="guard",r.AttackMove="attack",r.Craft="craft",r.DragPrisoner="drag",r.Pray="pray",r.DragWounded="dragwounded",r.Gamble="gamble",r))(k||{});const rh={0:0,1:50,2:100,3:150,4:200,5:250,6:300,7:175,8:200,9:225,10:275,11:250,12:300,13:350,14:225},uo=75,fo=150,ir=40,Jg=60,Qg=120,Nn=35,nr=22,sr=28,e0=1e3,t0=200,i0=8,n0=3,s0=4,rn=48,po=500,ni=3,on=2500,an=5,fr={scrabbler:{hp:40,speed:4.6,damage:4,goldWage:0,color:6982208,scale:1.55},skitterwing:{hp:50,speed:4.6,damage:6,goldWage:8,color:4243616,scale:.6},rattlekin:{hp:80,speed:3.1,damage:12,goldWage:15,color:9072720,scale:.75},emberling:{hp:90,speed:2.9,damage:16,goldWage:25,color:14700576,scale:.8},gravemage:{hp:70,speed:2.6,damage:10,goldWage:20,color:7360704,scale:.78},thornwitch:{hp:85,speed:2.9,damage:15,goldWage:22,color:10498144,scale:.78},bonewretch:{hp:55,speed:3.2,damage:11,goldWage:0,color:14209208,scale:.72},hero_knight:{hp:120,speed:2.55,damage:18,goldWage:0,color:12634328,scale:.85},hero_archer:{hp:70,speed:2.9,damage:14,goldWage:0,color:5275808,scale:.7}};function It(r){return r===1||r===2||r===11}function r0(r){return e0+Math.max(0,r)*t0}function o0(r){return r<=0?0:i0+Math.max(0,r-1)*n0}function rr(r){return r==="emberling"}function or(r){return r==="skitterwing"}function cs(r){return r<=1?0:Math.min(.5,(r-1)*.06)}let a0=1;class l0{id;kind;isHero;isWorker;x;y;wx;wz;hp;maxHp;speed;damage;level=1;job=k.Idle;jobTarget=null;path=[];pathIndex=0;workTimer=0;stunTimer=0;speedBuff=0;hunger=0;sleepNeed=0;mood=72;leaveWarned=!1;efficiencyWarned=!1;slapWorkBuff=0;selected=!1;trainNeed=0;held=!1;knockedOut=!1;isPrisoner=!1;convertProgress=0;fleeTimer=0;prayerBuff=0;hasTalisman=!1;attackCooldown=0;goldCarried=0;alive=!0;mesh;bobPhase;digAnim=0;eatAnim=0;eatAnnounced=!1;restHealAcc=0;facing=0;facingTarget=0;pickaxe=null;selectRing=null;healthFlower=null;goldBag=null;walkCycle=0;moving=!1;attackPulse=0;bedKey=null;tintPulse=0;tintMode=null;tintBase=new Map;constructor(e,t,i,n){this.id=a0++,this.kind=e,this.isHero=e===$.HeroKnight||e===$.HeroArcher,this.isWorker=e===$.Scrabbler;const s=fr[e];this.maxHp=s.hp,this.hp=s.hp,this.speed=s.speed,this.damage=s.damage,this.x=t,this.y=i;const o=n.tileToWorld(t,i);this.wx=o.x,this.wz=o.z,this.bobPhase=Math.random()*Math.PI*2,this.mesh=new st}setMesh(e){this.mesh=e,this.syncMesh(0)}clampStats(){const e=(t,i=0)=>Number.isFinite(t)?t:i;this.maxHp=Math.max(1,e(this.maxHp,1)),this.hp=Math.max(0,Math.min(this.maxHp,e(this.hp,this.maxHp))),this.hunger=this.isWorker?0:Math.max(0,Math.min(100,e(this.hunger))),this.sleepNeed=this.isWorker?0:Math.max(0,Math.min(100,e(this.sleepNeed))),this.mood=Math.max(0,Math.min(100,e(this.mood,72))),this.wx=e(this.wx),this.wz=e(this.wz),Number.isFinite(this.x)||(this.x=0),Number.isFinite(this.y)||(this.y=0)}syncMesh(e,t=1/60){try{if(this.clampStats(),!this.mesh)return;this.mesh.visible=!0;const i=Number.isFinite(this.wx)?this.wx:0,n=Number.isFinite(this.wz)?this.wz:0;if(this.held){const g=Math.sin(e*10+this.bobPhase)*.08;this.mesh.position.set(i,1.35+g,n),this.mesh.rotation.x=.15,this.mesh.rotation.z=Math.sin(e*6)*.2,this.selectRing&&(this.selectRing.visible=!0,this.selectRing.rotation.z=e*3),this.pickaxe&&(this.pickaxe.visible=!1),this.updateHealthFlower(e),this.goldBag&&(this.goldBag.visible=this.goldCarried>0);return}if(this.knockedOut||this.isPrisoner){const g=Math.sin(e*1.5+this.bobPhase)*.01;this.mesh.position.set(i,.08+g,n),this.mesh.rotation.x=.05,this.mesh.rotation.z=this.knockedOut?1.35:.55,this.selectRing&&(this.selectRing.visible=this.selected||this.knockedOut,this.selectRing.rotation.z=e*1.2),this.pickaxe&&(this.pickaxe.visible=!1);return}const s=this.job===k.Dig||this.job===k.Mine||this.job===k.Claim||this.job===k.Fortify,o=this.job===k.Sleep,a=this.job===k.Eat,h=this.job===k.Claim,d=this.job===k.Fight;a&&(this.eatAnim+=t*21),this.moving&&(this.walkCycle+=t*10),this.attackPulse>0&&(this.attackPulse=Math.max(0,this.attackPulse-t*4));const l=this.kind===$.Skitterwing?Math.sin(e*6+this.bobPhase)*.25+.4:s&&!h?Math.sin(e*14+this.bobPhase)*.06:h?Math.abs(Math.sin(e*11+this.bobPhase))*.38:o?Math.sin(e*2+this.bobPhase)*.02:a?Math.sin(this.eatAnim*14+this.bobPhase)*.1:this.moving?Math.abs(Math.sin(this.walkCycle))*.06:Math.sin(e*8+this.bobPhase)*.04,c=o?.12:a?.05+Math.abs(Math.sin(this.eatAnim*14))*.08:h?.04:0;this.mesh.position.set(this.wx,l+c,this.wz);let u=this.facing,f=this.facingTarget-u;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;if(u+=f*Math.min(1,12*t),this.facing=u,this.mesh.rotation.y=this.facing,this.stunTimer>0?this.mesh.rotation.z=Math.sin(e*20)*.3:o?(this.mesh.rotation.z=.35,this.mesh.rotation.x=.05):a?(this.mesh.rotation.x=Math.sin(this.eatAnim*14)*.35,this.mesh.rotation.z=Math.sin(this.eatAnim*10)*.12):d&&this.attackPulse>0?(this.mesh.rotation.x=this.attackPulse*.45,this.mesh.rotation.z=0):(this.mesh.rotation.z=0,this.mesh.rotation.x=0),this.pickaxe)if(this.job===k.Dig||this.job===k.Mine){this.digAnim+=t*27;const v=Math.sin(this.digAnim*11);this.pickaxe.rotation.x=-.9+v*1.35,this.pickaxe.rotation.z=.15+v*.55,this.pickaxe.rotation.y=v*.25,this.pickaxe.visible=!0}else if(s){this.digAnim+=t*12;const v=Math.sin(this.digAnim*8);this.pickaxe.rotation.x=-.55+v*.5,this.pickaxe.rotation.z=.15+v*.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=!0}else this.pickaxe.rotation.x=-.45,this.pickaxe.rotation.z=.2,this.pickaxe.rotation.y=0,this.pickaxe.visible=this.isWorker;this.applyWalkLimbs(o||a||this.stunTimer>0),this.selectRing&&(this.selectRing.visible=s||this.held||this.selected,this.selectRing.rotation.z=e*1.5),this.goldBag&&(this.goldBag.visible=this.goldCarried>8),this.updateHealthFlower(e),this.tintPulse>0&&(this.tintPulse=Math.max(0,this.tintPulse-t),this.tintPulse<=0&&(this.tintMode=null)),this.applyTintVisual()}catch(i){console.warn("[underkeep] syncMesh failed",i)}}applyWalkLimbs(e=!1){const t=e?0:this.moving?.55:0,i=this.walkCycle;this.mesh.traverse(n=>{const s=n.userData?.walkLimb;if(!s)return;const o=n.userData.baseRot,a=o?.x??0,h=o?.y??0,d=o?.z??0;s==="legL"||s==="armR"?n.rotation.set(a+Math.sin(i)*t,h,d):(s==="legR"||s==="armL")&&n.rotation.set(a+Math.sin(i+Math.PI)*t,h,d)})}updateHealthFlower(e){if(!this.healthFlower)return;const t=this.maxHp>0?Math.max(0,Math.min(1,this.hp/this.maxHp)):1,i=this.healthFlower.petals;if(i){const n=Math.max(0,Math.ceil(t*5));for(let s=0;s<i.length;s++)i[s].visible=s<n}this.healthFlower.position.y=2.05/Math.max(.35,this.mesh.scale.x||1)+Math.sin(e*2.4+this.bobPhase)*.04,this.healthFlower.rotation.y=e*.6,this.healthFlower.visible=this.alive&&!this.held}workEfficiency(){let t=.5+(Number.isFinite(this.mood)?Math.max(0,Math.min(100,this.mood)):50)/100*.7;return this.prayerBuff>0&&(t+=.05),this.hasTalisman&&(t+=.03),this.slapWorkBuff>0&&(t+=.12),Number.isFinite(t)?Math.max(.5,Math.min(1.35,t)):.85}pulseTint(e,t=.85){this.tintMode=e,this.tintPulse=Math.max(this.tintPulse,t)}applyTintVisual(){if(this.mesh)try{const e=[];this.mesh.traverse(t=>{const i=t.material;if(i)if(Array.isArray(i))for(const n of i)n instanceof X&&e.push(n);else i instanceof X&&e.push(i)});for(const t of e){this.tintBase.has(t)||this.tintBase.set(t,{emissive:t.emissive.clone(),intensity:t.emissiveIntensity});const i=this.tintBase.get(t);if(this.tintPulse>0&&this.tintMode){const n=.55+.45*Math.sin(this.tintPulse*14);this.tintMode==="heal"?(t.emissive.setRGB(.15*n,.95*n,.45*n),t.emissiveIntensity=Math.max(i.intensity,.85+n*.7)):(t.emissive.setRGB(1*n,.55*n,.12*n),t.emissiveIntensity=Math.max(i.intensity,.9+n*.75))}else t.emissive.copy(i.emissive),t.emissiveIntensity=i.intensity}}catch(e){console.warn("[underkeep] tint failed",e)}}tilePos(){return{x:this.x,y:this.y}}setPath(e){this.path=e??[],this.pathIndex=0}faceToward(e,t){const i=e-this.wx,n=t-this.wz;i*i+n*n<1e-6||(this.facingTarget=Math.atan2(i,n))}moveAlongPath(e,t){if(this.stunTimer>0||this.held||this.knockedOut||this.isPrisoner)return this.moving=!1,!1;if(this.pathIndex>=this.path.length)return this.moving=!1,!0;const i=this.path[this.pathIndex],n=t.tileToWorld(i.x,i.y),s=this.speed*(this.speedBuff>0?1.8:1)*Xe,o=n.x-this.wx,a=n.z-this.wz,h=Math.hypot(o,a);if(h<.1)return this.wx=n.x,this.wz=n.z,this.x=i.x,this.y=i.y,this.pathIndex++,this.moving=this.pathIndex<this.path.length,this.pathIndex>=this.path.length;const d=Math.min(h,s*e);this.wx+=o/h*d,this.wz+=a/h*d,this.moving=!0,this.faceToward(n.x,n.z);let l=this.facingTarget-this.facing;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;this.facing+=l*Math.min(1,14*e);const c=t.worldToTile(this.wx,this.wz);return t.inBounds(c.x,c.y)&&(this.x=c.x,this.y=c.y),!1}takeDamage(e){this.alive&&(this.hp-=e,this.hp<=0&&(this.hp=0,this.alive=!1))}}const ec={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class bs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const h0=new _a(-1,1,1,-1,0,1);class c0 extends Mt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}}const d0=new c0;class tc{constructor(e){this._mesh=new L(d0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,h0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class aa extends bs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yr.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class oh extends bs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class u0 extends bs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ah{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aa(ec),this.copyPass.material.blending=Di,this.clock=new Zg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oh!==void 0&&(o instanceof oh?i=!0:o instanceof u0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lh extends bs{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ge}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const f0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class mn extends bs{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pi(s,o,{type:Ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new pi(s,o,{type:Ii});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new pi(s,o,{type:Ii});f.texture.name="UnrealBloomPass.v"+c,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=f0;this.highPassUniforms=yr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=ec;this.copyUniforms=yr.clone(l.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:mr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ge,this.oldClearAlpha=1,this.basic=new Bt,this.fsQuad=new tc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[h].uniforms.direction.value=mn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=mn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}mn.BlurDirectionX=new le(1,0);mn.BlurDirectionY=new le(0,1);const $n=new Map;function fn(r,e,t){const i=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function p0(r,e,t){const i=Math.floor(r),n=Math.floor(e),s=r-i,o=e-n,a=s*s*(3-2*s),h=o*o*(3-2*o),d=fn(i,n,t),l=fn(i+1,n,t),c=fn(i,n+1,t),u=fn(i+1,n+1,t);return d+(l-d)*a+(c-d)*h+(d-l-c+u)*a*h}function pr(r,e,t,i=4){let n=.5,s=1,o=0,a=0;for(let h=0;h<i;h++)o+=n*p0(r*s,e*s,t+h*19),a+=n,n*=.5,s*=2;return o/a}function Pa(r){const e=document.createElement("canvas");e.width=r,e.height=r;const t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(r,r);return{canvas:e,ctx:t,data:i}}function ic(r,e=2){const t=new Yh(r);return t.wrapS=t.wrapT=gr,t.repeat.set(e,e),t.colorSpace=zt,t.magFilter=ui,t.minFilter=Yi,t.generateMipmaps=!0,t.needsUpdate=!0,t}function nc(r,e,t,i,n,s,o=255){const a=(t*r.width+e)*4;r.data[a]=i,r.data[a+1]=n,r.data[a+2]=s,r.data[a+3]=o}function mo(r,e,t){return r+(e-r)*t}function Un(r,e,t){return[mo(r[0],e[0],t),mo(r[1],e[1],t),mo(r[2],e[2],t)]}function Xt(r,e){const t=JSON.stringify(e)+`|${r}`,i=$n.get(t);if(i)return i;const{canvas:n,ctx:s,data:o}=Pa(r),a=e.scale??4,h=e.contrast??1;for(let l=0;l<r;l++)for(let c=0;c<r;c++){const u=c/r*a,f=l/r*a;let g=pr(u,f,e.seed);g=(g-.5)*h+.5,g=Math.max(0,Math.min(1,g));let v=Un(e.dark,e.base,g);if(g>.62&&(v=Un(v,e.light,(g-.62)/.38)),e.bricks){const{bw:m,bh:p,mortar:y,mortarW:x}=e.bricks,N=Math.floor(l/p)%2===0?0:m*.5,P=(c+N)%m,R=l%p;if(P<x||R<x)v=y;else{const D=Math.floor((c+N)/m),T=Math.floor(l/p),b=fn(D,T,e.seed+9)*.18-.09;v=[Math.max(0,Math.min(255,v[0]*(1+b))),Math.max(0,Math.min(255,v[1]*(1+b))),Math.max(0,Math.min(255,v[2]*(1+b)))]}}if(e.veins){const m=pr(u*e.veins.scale,f*e.veins.scale,e.veins.seed);if(m>e.veins.thresh){const p=(m-e.veins.thresh)/(1-e.veins.thresh);v=Un(v,e.veins.color,Math.min(1,p*1.4))}}if(e.speck&&fn(c,l,e.seed+3)<e.speck){const m=e.speckColor??e.light;v=Un(v,m,.55)}if(e.cracks&&Math.abs(pr(u*2.5,f*.4,e.seed+40)-.5)<.035&&(v=Un(v,e.dark,.7)),e.borderDark){const m=Math.min(c,l,r-1-c,r-1-l)/r;if(m<e.borderDark){const p=1-m/e.borderDark;v=Un(v,e.dark,p*.55)}}nc(o,c,l,v[0]|0,v[1]|0,v[2]|0)}s.putImageData(o,0,0);const d=ic(n,1);return $n.set(t,d),d}function m0(r,e=1){const t=`bump:${r.image.width}:${e}:${r.uuid}`,i=$n.get(t);if(i)return i;const n=r.image,s=n.width,{canvas:o,ctx:a,data:h}=Pa(s),l=n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,s,s);for(let u=0;u<s*s;u++){const f=l.data[u*4],g=l.data[u*4+1],v=l.data[u*4+2];let m=(.299*f+.587*g+.114*v)*e;m=Math.max(0,Math.min(255,m));const p=u*4;h.data[p]=m,h.data[p+1]=m,h.data[p+2]=m,h.data[p+3]=255}a.putImageData(h,0,0);const c=ic(o,r.repeat.x);return c.colorSpace=ki,$n.set(t,c),c}function g0(){return Xt(64,{seed:11,base:[186,118,48],dark:[98,48,18],light:[228,162,82],scale:5.8,contrast:1.55,speck:.06,speckColor:[150,86,32],cracks:!0,borderDark:.07})}function v0(){return Xt(64,{seed:22,base:[118,124,140],dark:[58,62,78],light:[175,182,198],scale:3.6,contrast:1.25,cracks:!0,speck:.05,speckColor:[210,215,230]})}function x0(){return Xt(64,{seed:33,base:[78,50,30],dark:[36,22,12],light:[112,76,46],scale:6.4,contrast:1.3,speck:.08,speckColor:[62,42,24],cracks:!0})}function Ra(){return Xt(64,{seed:44,base:[152,146,138],dark:[88,82,76],light:[198,192,182],scale:2.6,contrast:1.3,bricks:{bw:18,bh:12,mortar:[42,36,32],mortarW:2}})}function y0(){return Xt(64,{seed:55,base:[128,122,112],dark:[70,66,60],light:[168,162,150],scale:3,contrast:1.1,bricks:{bw:14,bh:12,mortar:[42,40,38],mortarW:2},borderDark:.08})}function _0(){return Xt(64,{seed:71,base:[28,140,128],dark:[8,48,52],light:[140,255,230],scale:3.4,contrast:1.55,veins:{color:[180,255,240],scale:1.05,thresh:.36,seed:111},speck:.24,speckColor:[220,255,250]})}function w0(){return Xt(64,{seed:66,base:[196,128,22],dark:[96,48,8],light:[255,228,96],scale:3.8,contrast:1.62,veins:{color:[255,244,120],scale:1.15,thresh:.38,seed:99},speck:.22,speckColor:[255,252,190]})}function M0(){return Xt(64,{seed:77,base:[90,40,48],dark:[40,16,22],light:[140,60,70],scale:3.8,contrast:1.2,veins:{color:[180,40,50],scale:1.2,thresh:.62,seed:12}})}function b0(){return Xt(64,{seed:81,base:[100,78,42],dark:[52,38,20],light:[180,140,60],scale:3.2,contrast:1.15,bricks:{bw:16,bh:16,mortar:[90,70,30],mortarW:1},veins:{color:[220,180,60],scale:.9,thresh:.7,seed:3}})}function S0(){return Xt(64,{seed:82,base:[92,62,88],dark:[48,30,50],light:[130,90,120],scale:5,contrast:1.15,speck:.08,speckColor:[160,120,140]})}function T0(){return Xt(64,{seed:83,base:[100,110,50],dark:[50,58,24],light:[150,160,80],scale:5.5,contrast:1.2,speck:.1,speckColor:[180,170,70]})}function ds(){return Xt(64,{seed:84,base:[110,70,60],dark:[55,35,30],light:[150,100,85],scale:4,contrast:1.25,cracks:!0,bricks:{bw:20,bh:12,mortar:[40,28,24],mortarW:1}})}function hh(){return Xt(64,{seed:85,base:[58,68,110],dark:[28,34,60],light:[90,105,160],scale:3.5,contrast:1.15,veins:{color:[140,160,220],scale:2.2,thresh:.68,seed:7}})}function E0(){return Xt(64,{seed:86,base:[70,40,100],dark:[30,16,48],light:[130,70,180],scale:4.5,contrast:1.3,veins:{color:[180,100,255],scale:1.5,thresh:.55,seed:21}})}function A0(r,e=1){return m0(r,e)}function C0(r,e){const t=`decal:${r}:${e.join(",")}`,i=$n.get(t);if(i)return i;const n=64,{canvas:s,ctx:o,data:a}=Pa(n),h=n/2,d=n/2;for(let c=0;c<n;c++)for(let u=0;u<n;u++){const f=(u+.5-h)/h,g=(c+.5-d)/d,v=Math.hypot(f,g);let m=0,p=e;if(r==="goldRing"){const y=Math.abs(v-.72);m=y<.12?(1-y/.12)*220:0,v<.35&&(m=Math.max(m,(1-v/.35)*90)),(Math.abs(f)>.78&&Math.abs(g)<.2||Math.abs(g)>.78&&Math.abs(f)<.2)&&(m=Math.max(m,180))}else if(r==="bedding"){const y=Math.sin((u+c)*.35)*.5+.5;m=v<.85?(1-v/.85)*(120+y*80):0}else if(r==="warmSpot")m=v<.9?Math.pow(1-v/.9,1.2)*180:0,fn(u,c,5)>.92&&v<.7&&(m=220,p=[220,200,80]);else if(r==="worn"){const y=pr(u*.12,c*.12,9);m=v<.9&&y>.45?(y-.45)*280:0}else if(r==="runes"){m=0,v>.55&&v<.78&&(m=160);const y=Math.atan2(g,f),x=Math.abs(y/(Math.PI*2)*8%1-.5);v>.35&&v<.85&&x<.06&&(m=210),v<.22&&(m=140)}else if(r==="swirl"){const y=Math.atan2(g,f),x=Math.sin(y*3+v*10);m=v<.92?Math.max(0,x)*(1-v)*255:0,v<.2&&(m=Math.max(m,200))}nc(a,u,c,p[0],p[1],p[2],Math.max(0,Math.min(255,m|0)))}o.putImageData(a,0,0);const l=new Yh(s);return l.colorSpace=zt,l.needsUpdate=!0,$n.set(t,l),l}const ch=new Map,dh=new Map;function _t(r,e){let t=ch.get(r);return t||(t=e(),ch.set(r,t)),t}function Ht(r,e){let t=dh.get(r);return t||(t=e(),dh.set(r,t)),t}function ka(r,e,t,i=.45){const n=r.attributes.position,s=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){const a=n.getY(o),h=Math.max(0,Math.min(1,(a-e)/(t*.45))),d=1-i*(1-h)*(1-h);s[o*3]=d,s[o*3+1]=d,s[o*3+2]=d}r.setAttribute("color",new Qt(s,3))}function La(){return Ht("claimed-gold-trim-v8",()=>new X({color:14199368,metalness:.82,roughness:.32,emissive:6962188,emissiveIntensity:.28}))}function P0(r,e=.17){const t=La(),i=Xe*.97,n=.09,s=.13,o=i*.5-n*.35,a=_t("gold-bar-ns-v7",()=>new de(i,s,n)),h=_t("gold-bar-ew-v7",()=>new de(n,s,i)),d=new L(a,t);d.position.set(0,e,o),r.add(d);const l=new L(a,t);l.position.set(0,e,-o),r.add(l);const c=new L(h,t);c.position.set(o,e,0),r.add(c);const u=new L(h,t);u.position.set(-o,e,0),r.add(u);const f=_t("gold-corner-v7",()=>new de(.16,.18,.16));for(const g of[-1,1])for(const v of[-1,1]){const m=new L(f,t);m.position.set(g*o,e+.02,v*o),r.add(m)}}function R0(r){const e=new st,i={[_.Treasury]:13938752,[_.Lair]:11563168,[_.Hatchery]:10006592,[_.Training]:12607568,[_.Library]:5271752,[_.Portal]:10506448,[_.Guard]:7372944,[_.Workshop]:10516544,[_.Prison]:6318192,[_.Torture]:10502224,[_.Graveyard]:5271648,[_.Temple]:12623952,[_.CombatPit]:10506304,[_.Casino]:12607648}[r]??12760480,n=r===_.None?2236440:r===_.Treasury?4861968:r===_.Lair?4198440:r===_.Hatchery?3162128:r===_.Training?4198416:r===_.Library?1054792:r===_.Guard?2107440:r===_.Workshop?4204560:r===_.Prison?2107440:r===_.Torture?4198424:r===_.Graveyard?1585192:r===_.Temple?4206608:r===_.CombatPit?4200464:r===_.Casino?4198440:3149896,s=new L(_t("claimed-under-v7",()=>new de(Xe*.98,.14,Xe*.98)),Ht("claimed-under-mat-v7",()=>new X({color:1840658,metalness:.04,roughness:.96})));s.position.y=.02,s.receiveShadow=!0,e.add(s);const o=Ht(`claimed-slab-v7-${r}`,()=>new X({color:i,metalness:r===_.Treasury?.48:r===_.Portal?.35:.16,roughness:r===_.Treasury?.38:.62,emissive:n,emissiveIntensity:(r===_.None,.2),map:r===_.None?Ra():null})),a=Xe*.72,h=new L(_t("claimed-inner-v7",()=>new de(a,.1,a)),o);h.position.y=.13,h.receiveShadow=!0,e.add(h);const d=Ht("claimed-seam-v7",()=>new X({color:2761756,roughness:.9,metalness:.05})),l=new L(_t("claimed-seam-h-v7",()=>new de(a,.04,.04)),d);l.position.y=.19,e.add(l);const c=new L(_t("claimed-seam-v-v7",()=>new de(.04,.04,a)),d);return c.position.y=.19,e.add(c),P0(e,.16),e}function k0(){return _t("floor",()=>{const r=new de(Xe*.98,.28,Xe*.98,2,1,2);return r.translate(0,.02,0),r})}function sc(r=!1){return _t(r?"wall-fort-v7":"wall-v7",()=>{const e=new de(Xe*.9,2.42,Xe*.9,3,4,3),t=e.attributes.position;for(let i=0;i<t.count;i++){let n=t.getX(i),s=t.getY(i),o=t.getZ(i);r?(s>.95&&(n*=.9,o*=.9),n+=Math.sin(i*.7)*.01,o+=Math.cos(i*.9)*.01):(s>.85&&(n*=.86,o*=.86),n+=Math.sin(i*1.7)*.038,o+=Math.cos(i*2.1)*.038,s>-.3&&s<.5&&(s+=Math.sin(i*.9)*.05)),t.setXYZ(i,n,s,o)}return t.needsUpdate=!0,ka(e,-1.21,2.42,r?.32:.52),e.computeVertexNormals(),e.translate(0,1.21,0),e})}function L0(){return _t("rock-v7",()=>{const r=new de(Xe*.94,3.7,Xe*.94,3,5,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*3.1)*.045),e.setY(t,e.getY(t)+Math.cos(t*2.3)*.035),e.setZ(t,e.getZ(t)+Math.sin(t*4.7)*.045);return e.needsUpdate=!0,ka(r,-1.85,3.7,.62),r.computeVertexNormals(),r.translate(0,1.85,0),r})}function D0(){return _t("gold-v7",()=>{const r=new de(Xe*.9,2.42,Xe*.9,3,4,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*5.1)*.05),e.setZ(t,e.getZ(t)+Math.cos(t*3.9)*.05),e.getY(t)>.9&&(e.setX(t,e.getX(t)*.9),e.setZ(t,e.getZ(t)*.9));return e.needsUpdate=!0,ka(r,-1.21,2.42,.4),r.computeVertexNormals(),r.translate(0,1.21,0),r})}function I0(r,e=!1){const t=new st,i=r===E.Gold,n=r===E.Gem,s=r===E.Rock,o=Ht(e?"wall-face-fort-v8":n?"wall-face-gem-v8":i?"wall-face-gold-v8":s?"wall-face-rock-v8":"wall-face-earth-v8",()=>new X({color:e?9538178:n?2793616:i?10906404:s?7370628:10182704,metalness:e?.32:n?.55:i?.35:.06,roughness:e?.58:n?.22:.88,emissive:n?1337432:i?6961416:525828,emissiveIntensity:n?.45:i?.3:.04})),a=_t("wall-face-stone-v8",()=>new Ea(.24,0)),h=_t("wall-face-ledge-v8",()=>new de(1.58,.13,.18));for(let l=0;l<3;l++){const c=new L(h,o);c.position.set((l%2?-1:1)*.06,.48+l*.58,.87),c.scale.x=.78+l*.08,c.rotation.z=(l-1)*.025,c.castShadow=!0,t.add(c)}for(let l=0;l<5;l++){const c=new L(a,o);c.position.set(-.66+l*.33,.25+l%2*.25,.91);const u=.72+l%3*.13;c.scale.set(u,u*.58,.42),c.rotation.set(l*.17,l*.31,l*.11),c.castShadow=!0,t.add(c)}const d=s?3.52:2.28;for(let l=0;l<3;l++){const c=new L(a,o);c.position.set(-.58+l*.58,d+l%2*.08,.58+l%2*.16),c.scale.set(1.2,.55+l*.08,1),c.rotation.set(l*.2,l*.55,l*.16),c.castShadow=!0,t.add(c)}if(i){const l=Ht("wall-face-crystal-v8",()=>new X({color:16766282,emissive:16753936,emissiveIntensity:1.1,metalness:.82,roughness:.18})),c=_t("wall-face-crystal-v8",()=>new _i(.14,0));for(let u=0;u<4;u++){const f=new L(c,l);f.position.set(-.48+u*.31,.72+u%2*.48,1),f.scale.set(.75,1.8+u*.15,.55),f.rotation.z=(u-1.5)*.2,t.add(f)}}if(e){const l=La(),c=_t("wall-face-brace-v8",()=>new de(.1,2.05,.12));for(const u of[-.72,.72]){const f=new L(c,l);f.position.set(u,1.08,.98),t.add(f)}}return t}function N0(r){const e=Math.round(Math.max(.25,r)*4)/4;return _t(`edge-${e.toFixed(2)}`,()=>{const t=Xe*.5*.97,i=e,n=[new A(-t,i,-t),new A(t,i,-t),new A(t,i,t),new A(-t,i,t),new A(-t,i,-t)];return new Mt().setFromPoints(n)})}function U0(){const r=new st,e=new X({color:3155498,metalness:.72,roughness:.35,emissive:2361356,emissiveIntensity:.25}),t=new X({color:9050152,emissive:16719928,emissiveIntensity:1.15,metalness:.38,roughness:.26}),i=new L(new ke(1.6,1.82,.26,12),e);i.position.y=.18,i.castShadow=!0,i.receiveShadow=!0,r.add(i);const n=new L(new ke(1.15,1.42,.42,12),new X({color:5915960,metalness:.35,roughness:.55,map:Ra()}));n.position.y=.48,n.castShadow=!0,r.add(n);const s=new L(new Aa(.82,2),t);s.scale.set(.92,1.2,.92),s.position.y=1.48,s.castShadow=!0,r.add(s);const o=new L(new di(1.18,.075,8,36),t);o.rotation.x=Math.PI/2,o.position.y=1.48,r.add(o);const a=new st;for(let l=0;l<4;l++){const c=l*Math.PI*.5+Math.PI*.25,u=new L(new Wt(.18,1.25,5),e);u.position.set(Math.cos(c)*1.12,1.22,Math.sin(c)*1.12),u.rotation.z=Math.cos(c)*-.5,u.rotation.x=Math.sin(c)*.5,u.castShadow=!0,a.add(u);const f=new L(new _i(.12,0),t);f.position.set(Math.cos(c)*1.24,.78,Math.sin(c)*1.24),a.add(f)}r.add(a),r.heartCrown=a;const h=new L(new Ms(1.38,1.72,32),new X({color:4853776,emissive:16723992,emissiveIntensity:.9,metalness:.2,roughness:.7,transparent:!0,opacity:.85}));h.rotation.x=-Math.PI/2,h.position.y=.13,r.add(h);for(let l=0;l<10;l++){const c=l/10*Math.PI*2,u=new L(new de(.2,.045,.06),t);u.position.set(Math.cos(c)*1.53,.34,Math.sin(c)*1.53),u.rotation.y=-c,r.add(u)}const d=new Ca(16728152,2.2,12,2);return d.position.y=1.8,d.castShadow=!1,r.add(d),r.heartCore=s,r.heartLight=d,r}function F0(r=!0){const e=new st,t=new L(new de(.12,.08,.18),new X({color:4866104,metalness:.5,roughness:.5}));t.position.set(0,1.35,0),e.add(t);const i=new L(new ke(.045,.065,.55,6),new X({color:5914656,roughness:.85}));i.position.y=1.55,e.add(i);const n=new L(new Wt(.11,.28,6),new X({color:16755264,emissive:16742144,emissiveIntensity:1.5,roughness:1}));n.position.y=1.92,e.add(n);const s=new L(new je(.08,6,6),new Bt({color:16746544,transparent:!0,opacity:.55}));if(s.position.y=1.82,e.add(s),r){const o=new Ca(16750916,3.2,14,1.6);o.position.y=1.9,o.castShadow=!1,e.add(o),e.torchLight=o}return e.flame=n,e}function Rt(r,e,t,i,n,s=0,o=0,a=0,h){const d=new L(r,e);return d.position.set(t,i,n),d.rotation.set(s,o,a),d.castShadow=!0,d.userData.baseRot={x:s,y:o,z:a},h&&(d.userData.walkLimb=h),d}function O0(r,e,t){const i=new st,n=new X({color:r,metalness:.18,roughness:.55,emissive:r,emissiveIntensity:.1});if(t==="scrabbler"){const o=new L(new je(.36,12,10),n);o.scale.set(1.2,.75,1.3),o.position.y=.38,o.castShadow=!0,i.add(o);const a=new L(new je(.32,10,8),new X({color:4876336,metalness:.25,roughness:.45,emissive:2109456,emissiveIntensity:.15}));a.scale.set(1.15,.55,1.05),a.position.set(0,.5,-.06),i.add(a);const h=new L(new je(.2,10,8),new X({color:9089104,metalness:.15,roughness:.55}));h.position.set(0,.44,.36),h.castShadow=!0,i.add(h);const d=new X({color:16772744,emissive:16763972,emissiveIntensity:.85});for(const x of[-1,1]){const w=new L(new je(.05,6,6),d);w.position.set(x*.09,.48,.5),i.add(w)}const l=new X({color:3819560,roughness:.7});for(const x of[-1,1]){for(const N of[-.14,.16])i.add(Rt(new ke(.035,.028,.32,5),l,x*.32,.14,N,0,0,x*.7));const w=new L(new Wt(.08,.34,5),new X({color:13684904,metalness:.7,roughness:.28}));w.rotation.z=x*.85,w.rotation.x=-.4,w.position.set(x*.32,.32,.42),w.castShadow=!0,i.add(w)}const c=new st,u=new L(new Kt(.07,.28,3,6),new X({color:5926960,roughness:.65}));u.position.set(0,.18,0),u.rotation.z=.35,c.add(u);const f=new st,g=new L(new ke(.04,.05,.85,6),new X({color:8015912,roughness:.85}));g.position.y=.35,f.add(g);const v=new L(new de(.48,.12,.12),new X({color:13687016,metalness:.9,roughness:.22,emissive:4214880,emissiveIntensity:.25}));v.position.set(.08,.78,0),f.add(v);const m=new L(new Wt(.08,.28,6),new X({color:15266047,metalness:.85,roughness:.2}));m.rotation.z=Math.PI/2,m.position.set(.38,.78,0),f.add(m);const p=m.clone();p.rotation.z=-Math.PI/2,p.position.set(-.22,.78,0),f.add(p),f.position.set(.05,.05,.05),c.add(f),c.position.set(.42,.38,.22),c.rotation.z=.2,c.rotation.x=-.45,i.add(c),i.pickaxe=c;const y=new L(new Ms(.42,.52,20),new Bt({color:11067488,transparent:!0,opacity:.75,side:Nt,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=.05,y.visible=!1,i.add(y),i.selectRing=y}else if(t==="skitterwing"){const o=new L(new je(.2,10,8),n);o.position.y=.95,o.castShadow=!0,i.add(o);const a=new L(new je(.16,8,8),new X({color:2785392,metalness:.2,roughness:.5,emissive:1065008,emissiveIntensity:.2}));a.scale.set(.9,.8,1.3),a.position.set(0,.88,-.22),i.add(a);const h=new L(new je(.12,8,8),new X({color:5296304,roughness:.5}));h.position.set(0,1,.22),i.add(h);for(const c of[-1,1]){const u=new L(new ke(.012,.01,.22,4),new X({color:2130016}));u.position.set(c*.06,1.14,.28),u.rotation.z=c*.4,u.rotation.x=-.5,i.add(u)}const d=new X({color:11075560,emissive:3180656,emissiveIntensity:.4,transparent:!0,opacity:.7,side:Nt,metalness:.1,roughness:.35});for(const c of[-1,1]){const u=new L(new mi(.75,.38),d);u.position.set(c*.38,1,0),u.rotation.y=c*.35,u.rotation.z=c*.25,i.add(u);const f=new L(new mi(.5,.28),d);f.position.set(c*.32,.88,-.08),f.rotation.y=c*.5,i.add(f)}const l=new X({color:2121808,roughness:.65});for(const c of[-1,1])i.add(Rt(new ke(.02,.015,.35,4),l,c*.14,.7,.05,.4,0,c*.5))}else if(t==="rattlekin"){const o=new X({color:13154456,metalness:.15,roughness:.45,emissive:4206608,emissiveIntensity:.08}),a=new L(new Kt(.22,.35,4,8),o);a.position.y=.7,a.castShadow=!0,i.add(a);for(let u=0;u<3;u++){const f=new L(new di(.2,.025,4,10,Math.PI),o);f.rotation.x=Math.PI/2,f.position.set(0,.55+u*.12,.05),i.add(f)}const h=new L(new je(.2,10,8),o);h.scale.set(1,1.05,1.15),h.position.y=1.2,h.castShadow=!0,i.add(h);const d=new L(new de(.22,.08,.16),o);d.position.set(0,1.05,.1),i.add(d);const l=new X({color:2101256,emissive:16736288,emissiveIntensity:.7});for(const u of[-1,1]){const f=new L(new je(.045,6,6),l);f.position.set(u*.08,1.24,.16),i.add(f)}for(const u of[-1,1])i.add(Rt(new ke(.045,.035,.45,5),o,u*.3,.75,0,0,0,u*.25,u<0?"armL":"armR")),i.add(Rt(new ke(.05,.04,.4,5),o,u*.12,.28,0,.15,0,u*.1,u<0?"legL":"legR"));const c=new L(new de(.06,.5,.12),new X({color:8949920,metalness:.8,roughness:.25}));c.position.set(.42,.7,.05),c.rotation.z=-.3,i.add(c)}else if(t==="emberling"){const o=new X({color:14698528,emissive:16728088,emissiveIntensity:.65,metalness:.25,roughness:.35}),a=new L(new Kt(.26,.45,6,10),o);a.position.y=.7,a.castShadow=!0,i.add(a);const h=new L(new je(.2,10,8),o);h.position.y=1.2,i.add(h);const d=new L(new Wt(.14,.42,6),new X({color:16748576,emissive:16736272,emissiveIntensity:.95}));d.position.y=1.5,i.add(d);for(let c=0;c<3;c++){const u=new L(new Wt(.06,.22,5),new X({color:16740368,emissive:16728072,emissiveIntensity:.8}));u.position.set((c-1)*.12,1.38,-.12),u.rotation.x=-.5,i.add(u)}for(const c of[-1,1]){i.add(Rt(new ke(.06,.04,.4,6),o,c*.32,.75,0,0,0,c*.45,c<0?"armL":"armR"));const u=new L(new je(.08,6,6),new X({color:16755264,emissive:16736272,emissiveIntensity:1}));u.position.set(c*.42,.55,.05),i.add(u)}const l=new L(new Wt(.32,.35,8,1,!0),new X({color:16732176,emissive:16723976,emissiveIntensity:.7,transparent:!0,opacity:.75,side:Nt}));l.position.y=.28,i.add(l)}else if(t==="gravemage"){const o=new X({color:4862080,metalness:.2,roughness:.55,emissive:3151968,emissiveIntensity:.25}),a=new L(new Kt(.24,.5,5,10),o);a.position.y=.7,a.castShadow=!0,i.add(a);const h=new L(new je(.22,10,8),new X({color:2758728,roughness:.7,emissive:4202624,emissiveIntensity:.2}));h.position.y=1.22,i.add(h);const d=new L(new je(.12,8,6),new X({color:13154520,roughness:.5}));d.position.set(0,1.18,.12),i.add(d);const l=new X({color:11167487,emissive:8930559,emissiveIntensity:.9});for(const f of[-1,1]){const g=new L(new je(.035,6,6),l);g.position.set(f*.06,1.2,.2),i.add(g)}for(const f of[-1,1])i.add(Rt(new ke(.045,.035,.4,5),o,f*.28,.7,0,0,0,f*.2,f<0?"armL":"armR")),i.add(Rt(new ke(.05,.04,.38,5),o,f*.1,.28,0,0,0,0,f<0?"legL":"legR"));const c=new L(new ke(.03,.04,1.3,6),new X({color:6965288,roughness:.7}));c.position.set(.38,.75,.05),i.add(c);const u=new L(new je(.1,10,8),new X({color:8939263,emissive:11167487,emissiveIntensity:.85,metalness:.3,roughness:.35}));u.position.set(.38,1.45,.05),i.add(u)}else if(t==="thornwitch"){const o=new X({color:10498144,metalness:.25,roughness:.45,emissive:6295592,emissiveIntensity:.35}),a=new L(new Kt(.22,.5,5,10),o);a.position.y=.72,a.castShadow=!0,i.add(a);const h=new L(new je(.18,10,8),new X({color:13148336,roughness:.5}));h.position.y=1.22,i.add(h);const d=new X({color:3149848,emissive:16719936,emissiveIntensity:.55});for(let c=0;c<5;c++){const u=new L(new Wt(.04,.2,4),d),f=c/5*Math.PI*2;u.position.set(Math.cos(f)*.12,1.38,Math.sin(f)*.12),i.add(u)}for(const c of[-1,1])i.add(Rt(new ke(.04,.03,.42,5),o,c*.28,.72,0,0,0,c*.35)),i.add(Rt(new ke(.045,.035,.4,5),o,c*.1,.28,0));const l=new L(new ke(.02,.015,.9,4),new X({color:4198432,roughness:.6}));l.position.set(.4,.7,.05),l.rotation.z=-.4,i.add(l)}else if(t==="bonewretch"){const o=new X({color:14209208,metalness:.2,roughness:.4,emissive:3162136,emissiveIntensity:.15}),a=new L(new Kt(.16,.32,4,8),o);a.position.y=.68,a.castShadow=!0,i.add(a);for(let l=0;l<3;l++){const c=new L(new di(.15,.02,4,10,Math.PI),o);c.rotation.x=Math.PI/2,c.position.set(0,.55+l*.1,.04),i.add(c)}const h=new L(new je(.17,10,8),o);h.scale.set(1,1.1,1.15),h.position.y=1.15,i.add(h);const d=new X({color:1056776,emissive:8453952,emissiveIntensity:.95});for(const l of[-1,1]){const c=new L(new je(.04,6,6),d);c.position.set(l*.07,1.18,.14),i.add(c),i.add(Rt(new ke(.03,.025,.42,4),o,l*.26,.7,0,0,0,l*.3)),i.add(Rt(new ke(.035,.03,.38,4),o,l*.1,.26,0,.1,0,l*.08))}}else if(t==="hero_knight"||t==="hero"){const o=new X({color:r||12634328,metalness:.75,roughness:.28}),a=new L(new Kt(.26,.5,6,10),o);a.position.y=.72,a.castShadow=!0,i.add(a);const h=new X({color:11055296,metalness:.8,roughness:.25});for(const g of[-1,1]){const v=new L(new je(.14,8,6),h);v.scale.set(1.1,.7,1),v.position.set(g*.28,1,0),i.add(v),i.add(Rt(new ke(.07,.055,.4,6),o,g*.34,.7,0,0,0,g*.2,g<0?"armL":"armR"))}const d=new L(new je(.2,10,8),o);d.position.y=1.28,i.add(d);const l=new L(new de(.22,.06,.08),new X({color:1712176,metalness:.5,roughness:.4}));l.position.set(0,1.28,.16),i.add(l);const c=new L(new de(.04,.22,.16),new X({color:11542568,roughness:.6}));c.position.set(0,1.48,0),i.add(c);for(const g of[-1,1])i.add(Rt(new ke(.08,.06,.4,6),o,g*.1,.28,0,0,0,0,g<0?"legL":"legR"));const u=new L(new de(.05,.55,.1),new X({color:14213360,metalness:.9,roughness:.2}));u.position.set(.4,.75,.05),u.rotation.z=-.25,i.add(u);const f=new L(new de(.14,.04,.06),new X({color:9068592,metalness:.4,roughness:.5}));f.position.set(.38,.5,.05),i.add(f)}else if(t==="hero_archer"){const o=new X({color:r||5275808,metalness:.15,roughness:.65}),a=new L(new Kt(.22,.45,6,10),o);a.position.y=.68,a.castShadow=!0,i.add(a);const h=new L(new je(.2,10,8),new X({color:3823728,roughness:.7}));h.scale.set(1.05,1.1,1.15),h.position.y=1.2,i.add(h);const d=new L(new je(.12,8,8),new X({color:12888200,roughness:.7}));d.position.set(0,1.15,.1),i.add(d);for(const u of[-1,1])i.add(Rt(new ke(.05,.04,.35,5),o,u*.26,.7,0,0,0,u*.3,u<0?"armL":"armR")),i.add(Rt(new ke(.055,.045,.38,5),o,u*.09,.28,0,0,0,0,u<0?"legL":"legR"));const l=new L(new di(.28,.025,4,12,Math.PI),new X({color:9068592,roughness:.6}));l.rotation.y=Math.PI/2,l.position.set(-.32,.75,.05),i.add(l);const c=new L(new ke(.008,.008,.5,4),new X({color:14209216}));c.position.set(-.2,.75,.05),i.add(c)}else{const o=new L(new Kt(.26,.45,6,10),n);o.position.y=.6,o.castShadow=!0,i.add(o);const a=new L(new je(.2,10,8),new X({color:11178096,roughness:.6}));a.position.y=1.1,i.add(a);for(const h of[-1,1])i.add(Rt(new ke(.05,.04,.35,5),n,h*.28,.6,0,0,0,h*.4,h<0?"armL":"armR")),i.add(Rt(new ke(.055,.045,.35,5),n,h*.1,.25,0,0,0,0,h<0?"legL":"legR"))}const s=K0(t==="hero_knight"||t==="hero_archer"||t==="hero");if(s.scale.setScalar(1/Math.max(.35,e)),s.position.y=2.05/Math.max(.35,e),i.add(s),i.healthFlower=s,t==="scrabbler"){const o=Z0();o.position.set(-.22,.28,-.32),o.visible=!1,i.add(o),i.goldBag=o}return i.scale.setScalar(e),i}function Tt(r,e,t={}){return Ht(r,()=>{const i=A0(e,t.bump??1);return new X({map:e,bumpMap:i,bumpScale:t.bump??.08,color:t.color??16777215,metalness:t.metalness??.08,roughness:t.roughness??.82,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,vertexColors:t.vertexColors??!1})})}function ji(r,e){if(r===E.Lava)return Ht("floor-lava",()=>new X({color:16728080,roughness:.4,metalness:.15,emissive:16722432,emissiveIntensity:1.2}));if(r===E.Water)return Ht("floor-water",()=>new X({color:2777224,roughness:.2,metalness:.45,emissive:1325144,emissiveIntensity:.45}));if(r===E.BridgeWood)return Ht("floor-bridge-wood",()=>new X({color:9067048,roughness:.85,metalness:.05,emissive:2758664,emissiveIntensity:.08}));if(r===E.BridgeStone)return Ht("floor-bridge-stone",()=>new X({color:6975616,roughness:.65,metalness:.3,emissive:2106408,emissiveIntensity:.1}));if(r===E.Heart)return Tt("floor-heart",M0(),{metalness:.3,roughness:.55,emissive:5249056,emissiveIntensity:.22,bump:.06});if(r===E.Dirt)return Tt("floor-dirt",x0(),{metalness:.02,roughness:.95,emissive:657412,emissiveIntensity:.03,bump:.12});switch(e){case _.Treasury:return Tt("floor-treasury",b0(),{metalness:.55,roughness:.4,emissive:3811336,emissiveIntensity:.15,bump:.05});case _.Lair:return Tt("floor-lair",S0(),{metalness:.08,roughness:.85,emissive:2101272,emissiveIntensity:.1,bump:.09});case _.Hatchery:return Tt("floor-hatchery",T0(),{metalness:.05,roughness:.88,emissive:2105360,emissiveIntensity:.12,bump:.08});case _.Training:return Tt("floor-training",ds(),{metalness:.2,roughness:.7,emissive:2101264,emissiveIntensity:.08,bump:.1});case _.Library:return Tt("floor-library",hh(),{metalness:.15,roughness:.65,emissive:1054760,emissiveIntensity:.18,bump:.06});case _.Portal:return Tt("floor-portal",E0(),{metalness:.35,roughness:.45,emissive:4200552,emissiveIntensity:.35,bump:.07});case _.Guard:return Tt("floor-training",ds(),{metalness:.25,roughness:.68,emissive:1581096,emissiveIntensity:.12,bump:.1,color:8425632});case _.Workshop:return Tt("floor-training",ds(),{metalness:.35,roughness:.55,emissive:3151880,emissiveIntensity:.18,bump:.12,color:12093520});case _.Temple:return Tt("floor-library",hh(),{metalness:.35,roughness:.5,emissive:4206616,emissiveIntensity:.28,bump:.06,color:13676640});case _.CombatPit:return Tt("floor-training",ds(),{metalness:.22,roughness:.72,emissive:4198416,emissiveIntensity:.2,bump:.12,color:11554880});case _.Casino:return Tt("floor-training",ds(),{metalness:.28,roughness:.55,emissive:4198440,emissiveIntensity:.22,bump:.1,color:12611744});default:return Tt("floor-claimed-v2",Ra(),{color:12101776,metalness:.2,roughness:.58,emissive:2761752,emissiveIntensity:.1,bump:.1})}}function B0(r){if(r===_.None)return null;const t={[_.Treasury]:{kind:"goldRing",color:[224,176,40],emissive:12619808,ei:.35,size:1.5},[_.Lair]:{kind:"bedding",color:[130,80,140],emissive:6303856,ei:.2,size:1.45},[_.Hatchery]:{kind:"warmSpot",color:[140,170,60],emissive:7372832,ei:.25,size:1.4},[_.Training]:{kind:"worn",color:[170,70,60],emissive:8396832,ei:.18,size:1.4},[_.Library]:{kind:"runes",color:[90,120,210],emissive:4219072,ei:.4,size:1.45},[_.Portal]:{kind:"swirl",color:[160,80,220],emissive:8401088,ei:.55,size:1.5},[_.Guard]:{kind:"worn",color:[100,120,140],emissive:4219008,ei:.22,size:1.4},[_.Workshop]:{kind:"worn",color:[170,120,60],emissive:8405008,ei:.28,size:1.4},[_.Prison]:{kind:"worn",color:[90,100,110],emissive:3162192,ei:.2,size:1.4},[_.Torture]:{kind:"worn",color:[160,50,60],emissive:8392736,ei:.35,size:1.4},[_.Graveyard]:{kind:"runes",color:[70,110,90],emissive:2121792,ei:.3,size:1.45},[_.Temple]:{kind:"runes",color:[200,170,80],emissive:12619824,ei:.45,size:1.5},[_.CombatPit]:{kind:"worn",color:[180,70,50],emissive:10498080,ei:.3,size:1.45},[_.Casino]:{kind:"goldRing",color:[210,80,160],emissive:12599424,ei:.4,size:1.45}}[r];if(!t)return null;const i=C0(t.kind,t.color),n=new X({map:i,transparent:!0,depthWrite:!1,color:16777215,emissive:t.emissive,emissiveIntensity:t.ei,metalness:r===_.Treasury?.65:.15,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-1}),s=new L(new mi(t.size,t.size),n);return s.rotation.x=-Math.PI/2,s.position.y=.14,s}function la(r,e,t){if(e)return Tt("fortified",y0(),{metalness:.42,roughness:.48,emissive:2761760,emissiveIntensity:.06,bump:.06,vertexColors:!0});switch(r){case E.Rock:return Tt("rock-v3",v0(),{metalness:.18,roughness:.72,emissive:2631736,emissiveIntensity:.12,bump:.12,vertexColors:!0});case E.Earth:return Tt("earth-v2",g0(),{metalness:.04,roughness:.9,emissive:3809288,emissiveIntensity:.16,bump:.15,vertexColors:!0});case E.Gold:return Tt("gold-v3",w0(),{metalness:.88,roughness:.2,emissive:14721048,emissiveIntensity:.95,bump:.08,vertexColors:!0});case E.Gem:return Tt("gem-v1",_0(),{metalness:.92,roughness:.16,emissive:2146464,emissiveIntensity:1.05,bump:.07,vertexColors:!0});case E.Dirt:return ji(E.Dirt,_.None);case E.Claimed:return ji(E.Claimed,t);case E.Heart:return ji(E.Heart,_.None);case E.Lava:return ji(E.Lava,_.None);case E.Water:return ji(E.Water,_.None);case E.BridgeWood:return ji(E.BridgeWood,_.None);case E.BridgeStone:return ji(E.BridgeStone,_.None);default:return Ht("default",()=>new X({color:5592405}))}}function z0(r,e=0){if(r===_.None)return null;const t=new st;if(r===_.Treasury){const i=new X({color:14725160,metalness:.85,roughness:.3,emissive:10514448,emissiveIntensity:.45}),n=new L(new je(.35,10,8),i);n.scale.set(1.3,.55,1.1),n.position.set(-.35,.22,.15),n.castShadow=!0,t.add(n);const s=new L(new je(.22,8,6),i);s.scale.set(1.1,.5,1),s.position.set(.15,.16,-.35),t.add(s);const o=new L(new de(.55,.35,.4),new X({color:6961688,metalness:.25,roughness:.7}));o.position.set(.4,.28,.25),o.castShadow=!0,t.add(o);const a=new L(new de(.55,.08,.42),new X({color:9064480,metalness:.3,roughness:.65}));a.position.set(.4,.48,.25),t.add(a);const h=new L(new de(.58,.06,.08),new X({color:13934624,metalness:.8,roughness:.3,emissive:8409104,emissiveIntensity:.3}));h.position.set(.4,.3,.25),t.add(h)}else if(r===_.Lair){const i=new X({color:6963304,roughness:.9,emissive:3149864,emissiveIntensity:.12}),n=new L(new Kt(.18,.55,4,8),i);n.rotation.z=Math.PI/2,n.position.set(-.2,.2,.1),n.castShadow=!0,t.add(n);const s=new L(new Kt(.15,.45,4,8),i);s.rotation.z=Math.PI/2,s.rotation.y=.4,s.position.set(.35,.18,-.25),t.add(s)}else if(r===_.Hatchery){const i=new L(new di(.55,.16,8,16),new X({color:6979632,roughness:.85,emissive:4214808,emissiveIntensity:.28}));i.rotation.x=-Math.PI/2,i.position.y=.16,t.add(i);const n=new L(new je(.18,8,6),new X({color:15253568,emissive:10518560,emissiveIntensity:.35,roughness:.5}));n.position.y=.22,t.add(n)}else if(r===_.Training){const i=new X({color:6965288,roughness:.8}),n=new X({color:8949920,metalness:.75,roughness:.35}),s=new L(new ke(.06,.08,.9,6),i);s.position.set(-.35,.5,0),s.castShadow=!0,t.add(s);const o=new L(new ke(.06,.08,.9,6),i);o.position.set(.35,.5,0),t.add(o);const a=new L(new de(.85,.08,.12),i);a.position.set(0,.7,0),t.add(a);for(const l of[-.2,.05,.3]){const c=new L(new de(.05,.45,.08),n);c.position.set(l,.55,.05),t.add(c)}const h=new L(new ke(.18,.22,.7,8),new X({color:9068624,roughness:.75,emissive:4198416,emissiveIntensity:.15}));h.position.set(0,.4,-.45),h.castShadow=!0,t.add(h);const d=new L(new je(.16,8,6),new X({color:12619888,roughness:.7}));d.position.set(0,.85,-.45),t.add(d)}else if(r===_.Library){const i=new X({color:5913122,roughness:.75}),n=new L(new de(.7,.12,.45),i);n.position.set(0,.55,0),n.castShadow=!0,t.add(n);const s=new L(new ke(.08,.12,.45,6),i);s.position.set(0,.28,0),t.add(s);const o=new L(new de(.28,.06,.22),new X({color:3166368,emissive:1056864,emissiveIntensity:.25,roughness:.6}));o.position.set(.05,.65,0),t.add(o);const a=new L(new ke(.03,.035,.14,6),new X({color:15259808,emissive:16755264,emissiveIntensity:.4}));a.position.set(-.22,.68,.08),t.add(a)}else if(r===_.Portal){const i=new X({color:3422275,emissive:1054764,emissiveIntensity:.3,metalness:.35,roughness:.48}),n=new X({color:7988991,emissive:2140927,emissiveIntensity:1.35,metalness:.25,roughness:.18,transparent:!0,opacity:.9}),s=new X({color:16738852,emissive:16724488,emissiveIntensity:1.35,transparent:!0,opacity:.68,side:Nt,depthWrite:!1,blending:mr});if(e%4!==0){const u=new _i(.13,0),f=2+e%2;for(let g=0;g<f;g++){const v=new L(u,n);v.scale.set(.7,1.8+g*.35,.7),v.position.set(-.35+g*.34,.26+g*.08,(g%2?-1:1)*.25),v.rotation.z=(g-1)*.25,t.add(v)}return t}const o=new L(new ke(.67,.82,.28,10),i);o.position.y=.2,o.castShadow=!0,t.add(o);for(const u of[-1,1]){const f=new L(new de(.3,2.5,.34),n);f.position.set(u*.82,1.48,0),f.rotation.z=u*-.06,f.castShadow=!0,t.add(f);const g=new L(new _i(.27,0),n);g.scale.set(.8,1.7,.8),g.position.set(u*.9,2.83,0),g.rotation.z=u*-.1,t.add(g)}const a=new L(new de(1.72,.2,.3),n);a.position.y=2.68,a.castShadow=!0,t.add(a);const h=new L(new _i(.22,0),n);h.scale.set(1,1.45,.8),h.position.y=2.93,t.add(h);const d=new L(new di(.55,.07,8,28),n);d.position.y=1.57,d.scale.set(1,1.72,1),t.add(d);const l=new L(new mi(1.12,2.08),s);l.position.set(0,1.48,.04),t.add(l);const c=new Ca(5622015,1.8,7,2);c.position.y=1.85,t.add(c),t.userData.portalAnimated=!0,t.userData.portalRing=d,t.userData.portalCore=l,t.scale.setScalar(1.18)}else if(r===_.Guard){const i=new X({color:5914672,roughness:.8}),n=new X({color:9478320,metalness:.7,roughness:.35,emissive:2109504,emissiveIntensity:.15}),s=new L(new ke(.07,.09,1.35,6),i);s.position.set(0,.7,0),s.castShadow=!0,t.add(s);const o=new L(new de(.55,.7,.04),new X({color:6303776,emissive:4198416,emissiveIntensity:.2,roughness:.75}));o.position.set(0,1.05,.08),t.add(o);const a=new L(new ke(.28,.28,.06,8),n);a.rotation.x=Math.PI/2,a.position.set(.45,.55,-.2),t.add(a);const h=new L(new de(.7,.08,.2),i);h.position.set(-.35,.35,.25),t.add(h)}else if(r===_.Workshop){const i=new X({color:6965296,roughness:.75}),n=new X({color:6318192,metalness:.85,roughness:.3,emissive:4200456,emissiveIntensity:.2}),s=new X({color:16736288,emissive:16728080,emissiveIntensity:.9,metalness:.4,roughness:.4}),o=new L(new de(1.1,.18,.55),i);o.position.set(-.15,.55,.1),o.castShadow=!0,t.add(o);const a=new L(new de(.1,.5,.1),i);a.position.set(-.55,.28,.25),t.add(a);const h=new L(new de(.1,.5,.1),i);h.position.set(.25,.28,-.05),t.add(h);const d=new L(new de(.45,.22,.28),n);d.position.set(.45,.45,-.25),d.castShadow=!0,t.add(d);const l=new L(new de(.22,.1,.14),n);l.position.set(.68,.5,-.25),t.add(l);const c=new L(new ke(.18,.22,.28,8),n);c.position.set(-.45,.35,-.35),t.add(c);const u=new L(new je(.1,8,6),s);u.position.set(-.45,.48,-.35),t.add(u);const f=new L(new de(.28,.35,.08),new X({color:9068608,roughness:.7}));f.position.set(.1,.72,.15),t.add(f)}else if(r===_.Prison){const i=new X({color:6318192,metalness:.85,roughness:.35,emissive:1054752,emissiveIntensity:.12}),n=new X({color:4864040,roughness:.8});for(let h=0;h<4;h++){const d=new L(new ke(.03,.03,1.2,5),i);d.position.set(-.45+h*.28,.7,.55),d.castShadow=!0,t.add(d)}const s=new L(new de(1.05,.06,.06),i);s.position.set(-.05,.85,.55),t.add(s);const o=new L(new de(.9,.12,.45),n);o.position.set(.15,.28,-.25),t.add(o);const a=new L(new ke(.025,.025,.55,5),i);a.position.set(.55,.55,-.1),t.add(a)}else if(r===_.Torture){const i=new X({color:5910560,roughness:.75}),n=new X({color:7370880,metalness:.8,roughness:.3,emissive:4198416,emissiveIntensity:.25}),s=new L(new de(1.15,.14,.55),i);s.position.set(0,.55,0),s.castShadow=!0,t.add(s);for(const h of[-1,1]){const d=new L(new ke(.06,.07,.9,6),i);d.position.set(h*.5,.55,0),t.add(d)}const o=new L(new Wt(.08,.28,5),new X({color:10528944,metalness:.7,roughness:.3}));o.position.set(0,.85,.1),t.add(o);const a=new L(new di(.28,.04,6,12),n);a.position.set(-.35,.7,-.35),a.rotation.y=.4,t.add(a)}else if(r===_.Graveyard){const i=new X({color:6846568,roughness:.7,metalness:.15,emissive:1585192,emissiveIntensity:.2}),n=new X({color:4218952,emissive:2113576,emissiveIntensity:.25,roughness:.8}),s=new L(new de(.55,.7,.12),i);s.position.set(-.35,.45,.2),s.castShadow=!0,t.add(s);const o=new L(new de(.35,.08,.08),i);o.position.set(-.35,.7,.2),t.add(o);const a=new L(new je(.32,8,6),n);a.scale.set(1.2,.45,.9),a.position.set(.35,.22,-.15),t.add(a);const h=new L(new ke(.03,.03,.35,5),new X({color:14209200,roughness:.5}));h.rotation.z=.8,h.position.set(.2,.35,.25),t.add(h)}else if(r===_.Temple){const i=new X({color:13938768,metalness:.7,roughness:.35,emissive:8413216,emissiveIntensity:.45}),n=new X({color:3811352,roughness:.75}),s=new L(new ke(.35,.42,.35,8),n);s.position.set(0,.28,0),s.castShadow=!0,t.add(s);const o=new L(new Wt(.22,.55,6),i);o.position.set(0,.72,0),o.castShadow=!0,t.add(o);const a=new L(new je(.1,8,8),new X({color:16769152,emissive:16760896,emissiveIntensity:1.1,metalness:.4,roughness:.3}));a.position.set(0,1.05,0),t.add(a);for(const h of[-.55,.55]){const d=new L(new ke(.04,.05,.35,5),n);d.position.set(h,.35,-.4),t.add(d);const l=new L(new je(.06,6,6),new X({color:16755264,emissive:16744480,emissiveIntensity:1.2}));l.position.set(h,.58,-.4),t.add(l)}}else if(r===_.CombatPit){const i=new X({color:10514496,roughness:.9,metalness:.05,emissive:3151880,emissiveIntensity:.12}),n=new X({color:7370880,metalness:.8,roughness:.35,emissive:4198416,emissiveIntensity:.2}),s=new L(new ke(.7,.78,.18,12),i);s.position.set(0,.2,0),s.receiveShadow=!0,t.add(s);const o=new L(new di(.72,.05,6,16),n);o.rotation.x=Math.PI/2,o.position.set(0,.28,0),t.add(o);for(const[h,d]of[[-.45,.35],[.4,-.3]]){const l=new L(new ke(.07,.08,.95,6),n);l.position.set(h,.55,d),l.castShadow=!0,t.add(l)}const a=new L(new de(.08,.55,.04),new X({color:12634320,metalness:.85,roughness:.25}));a.position.set(.35,.55,.35),a.rotation.z=.35,t.add(a)}else if(r===_.Casino){const i=new X({color:6955080,roughness:.7,metalness:.12,emissive:4198432,emissiveIntensity:.25}),n=new X({color:13934656,metalness:.8,roughness:.3,emissive:8405008,emissiveIntensity:.35}),s=new L(new ke(.62,.66,.16,12),i);s.position.set(0,.28,0),s.receiveShadow=!0,t.add(s);const o=new L(new di(.64,.04,6,16),n);o.rotation.x=Math.PI/2,o.position.set(0,.36,0),t.add(o);for(const[a,h]of[[-.22,.12],[.18,-.16],[.08,.2]]){const d=new L(new ke(.08,.08,.03,8),n);d.position.set(a,.4,h),t.add(d)}}else return null;return t}function H0(){const r=new st,e=new X({color:13172724,emissive:4251840,emissiveIntensity:1.7,metalness:.95,roughness:.08}),t=[[.32,1.75,.18],[-.38,1.4,-.28],[.08,2.05,-.4],[-.22,1.95,.38],[.42,1.15,.3],[-.48,2.2,.08]];for(const[i,n,s]of t){const o=new L(new _i(.12,0),e);o.position.set(i,n,s),r.add(o)}return r}function G0(){const r=new st,e=new X({color:16773280,emissive:16764992,emissiveIntensity:1.65,metalness:.98,roughness:.1}),t=[[.35,1.7,.2],[-.4,1.35,-.3],[.1,2,-.45],[-.25,1.9,.4],[.45,1.1,.35],[-.5,2.15,.05],[0,2.35,.15],[.55,1.55,-.2]];for(const[n,s,o]of t){const a=new L(new _i(.11+Math.abs(n)%.05,0),e);a.position.set(n,s,o),r.add(a)}const i=new L(new de(.14,1.85,.14),new X({color:16769136,emissive:16756768,emissiveIntensity:1.35,metalness:.95,roughness:.15}));return i.position.set(.15,1.45,-.1),i.rotation.z=.2,r.add(i),r}function W0(){const r=new st,e=new L(new de(Xe*.98,.18,Xe*.98),new X({color:3805704,roughness:.85,metalness:.05,emissive:4853768,emissiveIntensity:.35}));e.position.y=.05,e.receiveShadow=!0,r.add(e);const t=new L(new de(Xe*.82,.08,Xe*.82),new X({color:16733456,roughness:.35,metalness:.2,emissive:16726528,emissiveIntensity:1.35}));t.position.y=.14,r.add(t);for(const[i,n,s]of[[-.45,-.3,.35],[.4,.35,.28],[.1,-.5,.22],[-.2,.45,.3]]){const o=new L(new de(s,.06,s*.85),new X({color:1706502,roughness:.95,emissive:8394752,emissiveIntensity:.45}));o.position.set(i,.17,n),r.add(o)}return r}function V0(){const r=new st,e=new L(new de(Xe*.98,.16,Xe*.98),new X({color:1716296,roughness:.25,metalness:.35,emissive:663608,emissiveIntensity:.4}));e.position.y=.04,e.receiveShadow=!0,r.add(e);const t=new L(new de(Xe*.78,.04,Xe*.78),new X({color:3834032,roughness:.15,metalness:.55,emissive:1591400,emissiveIntensity:.55,transparent:!0,opacity:.92}));return t.position.y=.12,r.add(t),r}function j0(r){const e=new st,t=new L(new de(Xe*.95,.1,Xe*.95),new X({color:r?1714232:4855816,roughness:.7,metalness:.1,emissive:r?1056816:12593152,emissiveIntensity:r?.25:.7}));t.position.y=.06,e.add(t);const i=new X({color:r?6975616:9067048,roughness:r?.65:.82,metalness:r?.35:.08,emissive:r?2106408:3809296,emissiveIntensity:.12});for(let s=-2;s<=2;s++){const o=new L(new de(Xe*.92,.12,.28),i);o.position.set(0,.2,s*.36),o.castShadow=!0,o.receiveShadow=!0,e.add(o)}const n=new X({color:r?5265512:5913112,roughness:.75,metalness:r?.3:.05});for(const s of[-.85,.85]){const o=new L(new de(.1,.35,Xe*.9),n);o.position.set(s,.38,0),e.add(o)}return e}function X0(r){const e=new st,t=new X({color:6964264,roughness:.78,metalness:.12,emissive:2758664,emissiveIntensity:.12}),i=new X({color:8947864,metalness:.85,roughness:.3,emissive:2105384,emissiveIntensity:.1}),n=new L(new de(.12,1.55,.18),t);n.position.set(-.72,.85,0),e.add(n);const s=n.clone();s.position.x=.72,e.add(s);const o=new L(new de(1.56,.14,.2),t);o.position.set(0,1.62,0),e.add(o);const a=new L(new de(1.2,1.4,.1),t);a.castShadow=!0,r===$e.Open?(a.position.set(.55,.78,.35),a.rotation.y=-1.05):a.position.set(0,.78,0),e.add(a);const h=new L(new de(1.22,.08,.12),i);h.position.copy(a.position),h.position.y=.55,h.rotation.copy(a.rotation),e.add(h);const d=new L(new je(.06,8,6),i);return r===$e.Open?d.position.set(.35,.75,.55):d.position.set(.45,.75,.08),e.add(d),e}function q0(){const r=new st,e=new X({color:5920864,roughness:.7,metalness:.25,emissive:2103320,emissiveIntensity:.12}),t=new X({color:11055296,metalness:.8,roughness:.28,emissive:4206624,emissiveIntensity:.2}),i=new L(new ke(.35,.42,.22,8),e);i.position.y=.14,i.castShadow=!0,r.add(i);const n=new L(new ke(.1,.12,.7,6),e);n.position.y=.55,r.add(n);const s=new L(new de(.55,.22,.28),t);s.position.set(.05,.95,0),s.castShadow=!0,r.add(s);const o=new L(new ke(.06,.08,.45,6),t);o.rotation.z=Math.PI/2,o.position.set(.4,.95,0),r.add(o);const a=new L(new Wt(.05,.18,6),new X({color:12634328,metalness:.9,roughness:.2,emissive:8405008,emissiveIntensity:.35}));return a.rotation.z=-Math.PI/2,a.position.set(.68,.95,0),r.add(a),r}function Y0(){const r=new st,e=new X({color:5913122,roughness:.8}),t=new X({color:11544616,emissive:6295568,emissiveIntensity:.35,roughness:.7}),i=new L(new ke(.04,.05,1.6,6),e);i.position.y=.85,i.castShadow=!0,r.add(i);const n=new L(new de(.55,.38,.03),t);n.position.set(.3,1.4,0),r.add(n);const s=new L(new je(.07,8,6),new X({color:14729280,metalness:.7,emissive:10518560,emissiveIntensity:.4}));return s.position.y=1.68,r.add(s),r}function $0(){const r=new st,e=new L(sc(!0),la(E.Earth,!0,_.None));e.castShadow=!0,e.receiveShadow=!0,r.add(e);const t=La(),i=_t("fort-gold-post-v7",()=>new de(.12,2.2,.12)),n=_t("fort-gold-cap-v7",()=>new de(.18,.1,.18)),s=Xe*.42;for(const o of[-1,1])for(const a of[-1,1]){const h=new L(i,t);h.position.set(o*s,1.15,a*s),r.add(h);const d=new L(n,t);d.position.set(o*s,2.28,a*s),r.add(d)}return r}function K0(r=!1){const e=new st,t=new Bt({color:r?16183516:14690344,side:Nt,depthWrite:!1,transparent:!0,opacity:.95}),i=[],n=_t("flower-petal-v7",()=>new Mr(.18,8));for(let o=0;o<5;o++){const a=new L(n,t),h=o/5*Math.PI*2-Math.PI/2;a.position.set(Math.cos(h)*.18,.01,Math.sin(h)*.18),a.rotation.x=-Math.PI/2,a.rotation.z=h,e.add(a),i.push(a)}const s=new L(_t("flower-center-v7",()=>new Mr(.08,8)),new Bt({color:r?16769152:4855816,side:Nt,depthWrite:!1}));return s.rotation.x=-Math.PI/2,e.add(s),e.petals=i,e}function Z0(){const r=new st,e=Ht("gold-bag-v7",()=>new X({color:15249448,metalness:.85,roughness:.28,emissive:10514448,emissiveIntensity:.55})),t=new L(_t("gold-bag-body-v7",()=>new je(.16,8,6)),e);t.scale.set(1.1,.75,1),t.position.y=.12,t.castShadow=!0,r.add(t);const i=new L(_t("gold-bag-nugget-v7",()=>new _i(.07,0)),e);return i.position.set(.04,.22,.02),r.add(i),r}function J0(){const r=new st,e=Ht("hand-flesh-v7",()=>new X({color:9064512,metalness:.12,roughness:.62,emissive:4198416,emissiveIntensity:.18})),t=Ht("hand-claw-v7",()=>new X({color:15259808,metalness:.55,roughness:.35,emissive:4206608,emissiveIntensity:.2})),i=new L(new de(.42,.12,.5),e);i.position.y=.06,r.add(i);for(let s=0;s<4;s++){const o=new L(new de(.08,.08,.32),e);o.position.set((s-1.5)*.1,.08,-.34),r.add(o);const a=new L(new Wt(.04,.14,5),t);a.rotation.x=Math.PI/2,a.position.set((s-1.5)*.1,.08,-.52),r.add(a)}const n=new L(new de(.08,.08,.22),e);return n.position.set(.28,.06,-.08),n.rotation.y=.6,r.add(n),r.scale.setScalar(1.15),r}const uh={uniforms:{tDiffuse:{value:null},uContrast:{value:1.05},uSaturation:{value:1.08},uVignette:{value:.22},uTint:{value:new Ge(1.02,.98,.92)}},vertexShader:`
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
  `};class Q0{scene;camera;renderer;composer;bloomPass;gridGroup=new st;entityGroup=new st;fxGroup=new st;tileMeshes=new Map;torches=[];portals=[];heartGroup=null;dust;markerMesh;selectRing;clock=0;edgeMat;earthEdgeMat;goldEdgeMat;rockEdgeMat;contextLost=!1;useComposer=!0;renderFails=0;onContextLost=null;onContextRestored=null;fxDebrisGeo=new de(.1,.08,.1);fxSparkGeo=new je(.2,8,8);fxGlowGeo=new je(.4,10,10);FX_CAP=64;digLoad=!1;basePixelRatio=1;dirLight=null;markOverlay=new st;markPlaneGeo=new mi(Xe*.7,Xe*.7);digWireGeo=new Xg(new de(Xe*.92,2.2,Xe*.92));fogOverlay=new st;fogBoxGeo=new de(Xe*1.05,4.4,Xe*1.05);fogMat=new Bt({color:657420,transparent:!0,opacity:.38,depthWrite:!1});fogInstanced=null;fogCapacity=0;fogDummy=new St;keeperHand;goldHoard=new st;goldHoardScale=0;constructor(e){this.scene=new Eg,this.scene.background=new Ge(2761256),this.scene.fog=new Ma(2366498,.0038),this.camera=new Zt(46,1,.1,240),this.camera.position.set(0,34,22),this.camera.lookAt(0,0,0),this.renderer=new Tg({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.basePixelRatio=Math.min(window.devicePixelRatio||1,t?1.15:1.5),this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.setClearColor(2761256,1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=t?uc:vh,this.renderer.toneMapping=yh,this.renderer.toneMappingExposure=1.28,this.renderer.outputColorSpace=zt;const i=new Kg(14734528,.8);this.scene.add(i);const n=new qg(16771276,3811384,.72);n.position.set(0,40,0),this.scene.add(n);const s=new eh(16773336,1.45);s.position.set(22,48,14),s.castShadow=!0,s.shadow.mapSize.set(512,512),this.dirLight=s,s.shadow.camera.near=5,s.shadow.camera.far=120,s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,s.shadow.bias=-6e-4,s.shadow.intensity=.62,this.scene.add(s);const o=new eh(8427720,.38);o.position.set(-18,28,-14),this.scene.add(o);const a=new Float32Array(260*3);for(let c=0;c<a.length;c+=3)a[c]=(Math.random()-.5)*90,a[c+1]=.5+Math.random()*13,a[c+2]=(Math.random()-.5)*90;const h=new Mt;h.setAttribute("position",new Qt(a,3)),this.dust=new kg(h,new qh({color:13933141,size:.07,transparent:!0,opacity:.38,depthWrite:!1,sizeAttenuation:!0})),this.scene.add(this.dust);const d=new L(new mi(200,200),new X({color:1709080,metalness:.05,roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=-.35,d.receiveShadow=!0,this.scene.add(d),this.scene.add(this.gridGroup),this.scene.add(this.markOverlay),this.scene.add(this.fogOverlay),this.scene.add(this.entityGroup),this.scene.add(this.fxGroup),this.edgeMat=new hn({color:2761240,transparent:!0,opacity:.55}),this.earthEdgeMat=new hn({color:10510376,transparent:!0,opacity:.85}),this.goldEdgeMat=new hn({color:16769126,transparent:!0,opacity:1}),this.rockEdgeMat=new hn({color:8949928,transparent:!0,opacity:.8}),this.markerMesh=new L(new mi(Xe*.9,Xe*.9),new Bt({color:16755232,transparent:!0,opacity:.35,depthWrite:!1})),this.markerMesh.rotation.x=-Math.PI/2,this.markerMesh.position.y=.14,this.markerMesh.visible=!1,this.scene.add(this.markerMesh),this.selectRing=new L(new Ms(.4,.55,24),new Bt({color:16764006,transparent:!0,opacity:.8,side:Nt})),this.selectRing.rotation.x=-Math.PI/2,this.selectRing.position.y=.16,this.selectRing.visible=!1,this.scene.add(this.selectRing),this.keeperHand=J0(),this.keeperHand.visible=!1,this.scene.add(this.keeperHand),this.goldHoard.visible=!1,this.scene.add(this.goldHoard),this.composer=new ah(this.renderer),this.composer.addPass(new lh(this.scene,this.camera));const l=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new mn(new le(1,1),l?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new aa(uh)),this.onResize(),window.addEventListener("resize",()=>this.onResize()),this.bindContextRecovery(e)}bindContextRecovery(e){e.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.useComposer=!1,console.warn("[underkeep] WebGL context lost"),this.onContextLost?.()},!1),e.addEventListener("webglcontextrestored",()=>{console.warn("[underkeep] WebGL context restored — reinit renderer pipeline"),this.contextLost=!1;try{this.reinitPipeline(),this.onContextRestored?.()}catch(t){console.error("[underkeep] context restore failed",t),this.onContextLost?.()}},!1)}reinitPipeline(){const e=new le;this.renderer.getSize(e),this.renderer.setClearColor(2761256,1),this.composer=new ah(this.renderer),this.composer.addPass(new lh(this.scene,this.camera));const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new mn(new le(e.x||1,e.y||1),t?.08:.12,.35,.96),this.composer.addPass(this.bloomPass),this.composer.addPass(new aa(uh)),this.useComposer=!0,this.renderFails=0,this.onResize()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}disposeGridChild(e){e.traverse(t=>{const i=t;if(i.isMesh){const s=i.geometry;s&&(i.userData.disposeGeo||s.userData?.disposeGeo)&&s.dispose();const o=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const a of o)a&&a.userData?.disposeMat&&a.dispose()}t.isLight})}rebuildGrid(e){for(;this.gridGroup.children.length;){const t=this.gridGroup.children.pop();this.disposeGridChild(t),this.gridGroup.remove(t)}this.tileMeshes.clear(),this.torches=[],this.portals=[],this.heartGroup=null;for(const t of e.tiles){const i=e.tileToWorld(t.x,t.y),n=`${t.x},${t.y}`;if(t.kind===E.Rock){const a=new L(L0(),la(E.Rock,!1,t.room));a.position.set(i.x,0,i.z),a.rotation.y=this.tileRotation(t.x,t.y),a.castShadow=!0,a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.addExposedWallFaces(e,t.x,t.y,a,E.Rock,!1),this.gridGroup.add(a),this.addEdge(i.x,i.z,3.5,this.rockEdgeMat),this.tileMeshes.set(n,a);continue}if(t.fortified){const a=$0();a.position.set(i.x,0,i.z),a.rotation.y=this.tileRotation(t.x,t.y),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.addExposedWallFaces(e,t.x,t.y,a,t.kind,!0),this.gridGroup.add(a),this.addEdge(i.x,i.z,2.5,this.edgeMat),this.tileMeshes.set(n,a);continue}if(It(t.kind)){const a=t.kind===E.Gold||t.kind===E.Gem?D0():sc(),h=new L(a,la(t.kind,!1,t.room));h.position.set(i.x,0,i.z),h.rotation.y=this.tileRotation(t.x,t.y);const d=Math.max(0,Math.min(.95,t.digProgress||0)),l=1-d*.7,c=1-d*.85;if(h.scale.set(l,c,l),h.position.y=-d*1.15,h.castShadow=!0,h.receiveShadow=!0,h.userData.tileX=t.x,h.userData.tileY=t.y,this.addExposedWallFaces(e,t.x,t.y,h,t.kind,!1),this.gridGroup.add(h),(t.kind===E.Gold||t.kind===E.Gem)&&d<.85){const f=t.kind===E.Gem?H0():G0();f.position.set(i.x,h.position.y,i.z),f.scale.set(l,c,l),f.userData.glitterFor=n,f.userData.glitterSpin=!0,this.gridGroup.add(f)}const u=2.35*c+h.position.y;this.addEdge(i.x,i.z,Math.max(.4,u),t.kind===E.Gem?this.goldEdgeMat:t.kind===E.Gold?this.goldEdgeMat:this.earthEdgeMat),this.tileMeshes.set(n,h);continue}if(t.kind===E.Lava){const a=W0();a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===E.Water){const a=V0();a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===E.BridgeWood||t.kind===E.BridgeStone){const a=j0(t.kind===E.BridgeStone);a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===E.Claimed){const a=R0(t.room);a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a)}else{const a=new L(k0(),ji(t.kind,t.room));a.position.set(i.x,0,i.z),a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),this.tileMeshes.set(n,a)}if(t.kind===E.Heart){const a=U0();a.position.set(i.x,0,i.z),this.gridGroup.add(a),this.heartGroup=a}const s=B0(t.room);s&&(s.position.set(i.x,.18,i.z),this.gridGroup.add(s));const o=z0(t.room,Math.abs(t.x*3+t.y*5));if(o&&(o.position.set(i.x,.14,i.z),this.gridGroup.add(o),o.userData.portalAnimated&&this.portals.push(o)),t.door===$e.Closed||t.door===$e.Open){const a=X0(t.door);a.position.set(i.x,.02,i.z),!!e.get(t.x+1,t.y)&&(e.get(t.x+1,t.y).fortified||It(e.get(t.x+1,t.y).kind)||e.get(t.x+1,t.y).kind===E.Rock)||!!e.get(t.x-1,t.y)&&(e.get(t.x-1,t.y).fortified||It(e.get(t.x-1,t.y).kind)||e.get(t.x-1,t.y).kind===E.Rock)||(a.rotation.y=Math.PI/2),this.gridGroup.add(a)}if(t.trap===pt.Sentry){const a=q0();a.position.set(i.x+.15,.02,i.z-.15),this.gridGroup.add(a)}if(t.rally){const a=Y0();a.position.set(i.x-.25,.02,i.z+.25),this.gridGroup.add(a)}if(t.torch){const a=this.torches.filter(u=>u.torchLight).length<12,h=F0(a);let d=.65,l=0;const c=[[1,0,.65,0],[-1,0,-.65,0],[0,1,0,.65],[0,-1,0,-.65]];for(const[u,f,g,v]of c){const m=e.get(t.x+u,t.y+f);if(m&&(It(m.kind)||m.kind===E.Rock||m.fortified)){d=g,l=v;break}}h.position.set(i.x+d,0,i.z+l),this.gridGroup.add(h),this.torches.push(h)}}this.syncMarkOverlay(e),this.syncFogOverlay(e)}addExposedWallFaces(e,t,i,n,s,o){const a=[[0,1,0],[1,0,Math.PI/2],[0,-1,Math.PI],[-1,0,-Math.PI/2]];for(const[h,d,l]of a){const c=e.get(t+h,i+d);if(!c||e.isSolid(c.x,c.y))continue;const u=I0(s,o);u.rotation.y=l-n.rotation.y,n.add(u)}}tileRotation(e,t){return Math.abs(e*7+t*13)%4*Math.PI*.5}syncMarkOverlay(e){for(;this.markOverlay.children.length;){const t=this.markOverlay.children.pop();this.markOverlay.remove(t);const i=t;i.material&&i.material.userData?.disposeMat&&i.material.dispose()}for(const t of e.tiles){if(!t.mark)continue;const i=e.tileToWorld(t.x,t.y),n=Math.max(0,Math.min(.95,t.digProgress||0)),s=1-n*.85,o=It(t.kind)?Math.max(.5,2.42*s-n*1.15):.2,a=new Bt({color:t.mark===1?16724770:t.mark===2?4500223:13421738,transparent:!0,opacity:.7,depthWrite:!1});a.userData.disposeMat=!0;const h=new L(this.markPlaneGeo,a);if(h.rotation.x=-Math.PI/2,h.position.set(i.x,o,i.z),this.markOverlay.add(h),t.mark===1&&It(t.kind)){const d=new hn({color:16729122,transparent:!0,opacity:.85});d.userData.disposeMat=!0;const l=new Rg(this.digWireGeo,d);l.position.set(i.x,1.1*s-n*1.15,i.z),l.scale.set(1,Math.max(.25,s),1),this.markOverlay.add(l)}}}syncFogOverlay(e){const t=[];for(const s of e.tiles){const o=`${s.x},${s.y}`,a=this.tileMeshes.get(o);s.explored?a&&!a.visible&&(a.visible=!0):(It(s.kind)||s.kind===E.Rock||s.fortified||t.push(s),a&&(a.visible=!0))}const i=Math.max(t.length,1);if(!this.fogInstanced||this.fogCapacity<i){this.fogInstanced&&(this.fogOverlay.remove(this.fogInstanced),this.fogInstanced=null);const s=Math.max(i,256),o=new Pg(this.fogBoxGeo,this.fogMat,s);o.instanceMatrix.setUsage(Kc),o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,this.fogInstanced=o,this.fogCapacity=s,this.fogOverlay.add(o)}const n=this.fogInstanced;for(let s=0;s<t.length;s++){const o=t[s],a=e.tileToWorld(o.x,o.y);this.fogDummy.position.set(a.x,1.9,a.z),this.fogDummy.scale.set(1,1,1),this.fogDummy.updateMatrix(),n.setMatrixAt(s,this.fogDummy.matrix)}n.count=t.length,n.instanceMatrix.needsUpdate=!0,n.visible=t.length>0}addEdge(e,t,i,n){const s=new sa(N0(i),n);s.position.set(e,0,t),this.gridGroup.add(s)}updateDigVisual(e,t,i,n){const s=`${e},${t}`,o=this.tileMeshes.get(s);if(!o)return;const a=Math.max(0,Math.min(.95,i||0)),h=1-a*.7,d=1-a*.85;o.scale.set(h,d,h),o.position.y=-a*1.15;for(const l of this.gridGroup.children)l.userData?.glitterFor===s&&(l.position.y=o.position.y,l.scale.set(h,d,h),l.visible=a<.85&&(n===E.Gold||n===E.Gem))}setHover(e,t,i,n=16755232){this.markerMesh.visible=i,i&&(this.markerMesh.position.x=e,this.markerMesh.position.z=t,this.markerMesh.material.color.setHex(n))}setSelectRing(e,t,i){this.selectRing.visible=i,i&&(this.selectRing.position.x=e,this.selectRing.position.z=t)}setKeeperHand(e,t,i,n=!1){this.keeperHand.visible=i,i&&(this.keeperHand.position.set(e,n?1.55:1.15,t),this.keeperHand.rotation.x=n?.55:.18,this.keeperHand.rotation.z=n?-.25:Math.sin(this.clock*3)*.06,this.keeperHand.rotation.y=n?.35:.15)}setHeartGold(e,t,i){if(this.goldHoard.children.length===0){const o=new X({color:15249448,metalness:.88,roughness:.28,emissive:10514448,emissiveIntensity:.5}),a=[[1.35,.18,.55],[1.55,.12,-.35],[-1.4,.16,.4],[-1.15,.1,-.7],[.4,.14,1.45]];for(const[h,d,l]of a){const c=new L(new je(.32,8,6),o);c.scale.set(1.25,.55,1.1),c.position.set(h,d,l),c.castShadow=!0,this.goldHoard.add(c)}}this.goldHoard.position.set(t,0,i);const n=Math.max(0,Math.min(1,e/2800));this.goldHoardScale=n;const s=.35+n*1.15;this.goldHoard.scale.setScalar(s),this.goldHoard.visible=e>=80}clearEntities(){for(;this.entityGroup.children.length;)this.entityGroup.remove(this.entityGroup.children[0])}addEntityMesh(e){this.entityGroup.add(e)}removeEntityMesh(e){this.entityGroup.remove(e)}createEntityVisual(e,t,i){return O0(t,i,e)}trimFx(){for(;this.fxGroup.children.length>this.FX_CAP;){const e=this.fxGroup.children[0];this.disposeFxChild(e),this.fxGroup.remove(e)}}disposeFxChild(e){const t=e;if(t.isMesh){const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}const i=e;if(i.isLine&&i.geometry&&i.geometry.userData?.disposeGeo&&i.geometry.dispose(),i.isLine){const n=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}}setDigLoad(e){this.digLoad!==e&&(this.digLoad=e,e?(this.useComposer=!1,this.bloomPass.enabled=!1,this.renderer.toneMappingExposure=1.08,this.renderer.setPixelRatio(Math.min(this.basePixelRatio,1)),this.renderer.shadowMap.enabled=!1,this.dirLight&&(this.dirLight.castShadow=!1),this.trimFx()):(this.bloomPass.enabled=!0,this.useComposer=!this.contextLost,this.renderer.toneMappingExposure=1.28,this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.shadowMap.enabled=!0,this.dirLight&&(this.dirLight.castShadow=!0),this.onResize()))}spawnFx(e,t,i=.6){if(this.fxGroup.children.length>=this.FX_CAP)return;const n=new Bt({color:t,transparent:!0,opacity:.9});n.userData.disposeMat=!0;const s=new L(this.fxSparkGeo,n);s.position.copy(e),s.position.y+=.5,this.fxGroup.add(s);const o=s;o._fxStart=this.clock,o._fxLife=i}spawnCareSparks(e,t,i,n=!1){this.fxGroup.children.length>this.FX_CAP-8&&this.trimFx();const s=i==="heal"?5636010:16763955,o=i==="heal"?13172712:16772795,a=i==="heal"?2817928:16755234,h=n?this.digLoad?6:10:this.digLoad?3:5;for(let d=0;d<h&&!(this.fxGroup.children.length>=this.FX_CAP);d++){const l=.7+Math.random()*.6,c=d%3===0?o:d%3===1?s:a,u=new Bt({color:c,transparent:!0,opacity:1,depthWrite:!1});u.userData.disposeMat=!0;const f=new L(this.fxSparkGeo,u);f.scale.setScalar(l),f.position.set(e+(Math.random()-.5)*.85,.45+Math.random()*.7,t+(Math.random()-.5)*.85);const g=f;g._fxStart=this.clock,g._fxLife=1.2+Math.random()*.7,g._vx=(Math.random()-.5)*1.4,g._vy=.9+Math.random()*1.6,g._vz=(Math.random()-.5)*1.4,g._fxFloat=!0,this.fxGroup.add(f)}if(this.fxGroup.children.length<this.FX_CAP){const d=new Bt({color:s,transparent:!0,opacity:.85,depthWrite:!1});d.userData.disposeMat=!0;const l=new L(this.fxGlowGeo,d);l.scale.setScalar(n?1.3:.95),l.position.set(e,.7,t);const c=l;c._fxStart=this.clock,c._fxLife=n?1.8:1.4,c._vx=0,c._vy=.55,c._vz=0,c._fxFloat=!0,this.fxGroup.add(l)}}spawnDigDebris(e,t,i=12615744){this.fxGroup.children.length>this.FX_CAP-4&&this.trimFx();const n=this.digLoad?2:4;for(let s=0;s<n&&!(this.fxGroup.children.length>=this.FX_CAP);s++){const o=new Bt({color:i,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const a=new L(this.fxDebrisGeo,o),h=.7+Math.random()*.8;a.scale.set(h,h*.8,h),a.position.set(e+(Math.random()-.5)*.6,.6+Math.random()*.8,t+(Math.random()-.5)*.6);const d=a;d._fxStart=this.clock,d._fxLife=.35+Math.random()*.25,d._vx=(Math.random()-.5)*3,d._vy=1.5+Math.random()*2.5,d._vz=(Math.random()-.5)*3,this.fxGroup.add(a)}}pickTile(e,t){const i=new nh;i.setFromCamera(new le(e,t),this.camera);const n=i.intersectObjects(this.gridGroup.children,!0);for(const o of n){let a=o.object;for(;a;){if(a.userData&&typeof a.userData.tileX=="number")return{x:o.point.x,z:o.point.z,tileX:a.userData.tileX,tileY:a.userData.tileY};a=a.parent}}const s=this.raycastGround(e,t);return s?{x:s.x,z:s.z}:null}spawnLightning(e,t){const i=[e.clone(),t.clone().add(new A(0,1,0))],n=e.clone().lerp(t,.5);n.y+=2+Math.random(),n.x+=(Math.random()-.5)*2,i.splice(1,0,n);const s=new Mt().setFromPoints(i);s.userData.disposeGeo=!0;const o=new hn({color:11197951,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const a=new sa(s,o);this.fxGroup.add(a);const h=a;h._fxStart=this.clock,h._fxLife=.35}update(e){if(this.clock+=e,this.heartGroup?.heartCore){const t=1+Math.sin(this.clock*3)*.05;this.heartGroup.heartCore.scale.setScalar(t),this.heartGroup.heartLight&&(this.heartGroup.heartLight.intensity=1.1+Math.sin(this.clock*3)*.25),this.heartGroup.rotation.y+=e*.3,this.heartGroup.heartCrown&&(this.heartGroup.heartCrown.rotation.y-=e*.45)}this.dust.rotation.y+=e*.012,this.dust.position.y=Math.sin(this.clock*.18)*.3;for(const t of this.portals){const i=t.userData.portalRing,n=t.userData.portalCore;if(i&&(i.rotation.z+=e*.85,i.rotation.y=Math.sin(this.clock*.7+t.position.x)*.18),n){const s=.94+Math.sin(this.clock*4+t.position.z)*.08;n.scale.setScalar(s)}}for(const t of this.torches)t.torchLight&&(t.torchLight.intensity=2.8+Math.random()*.8+Math.sin(this.clock*8+t.position.x)*.35),t.flame&&t.flame.scale.setScalar(.9+Math.random()*.25);for(const t of this.gridGroup.children)t.userData?.glitterSpin&&(t.rotation.y+=e*1.1);this.goldHoard.visible&&(this.goldHoard.rotation.y+=e*.15);for(let t=this.fxGroup.children.length-1;t>=0;t--){const i=this.fxGroup.children[t];if(i._fxStart!==void 0&&i._fxLife!==void 0){const n=this.clock-i._fxStart,s=i._fxLife;if(n>s)this.disposeFxChild(i),this.fxGroup.remove(i);else if(i.material){const o=i.material,a=n/s;o.opacity!==void 0&&(o.opacity=Math.max(0,1-a*a));const h=!!i._fxFloat;if(i._vx!==void 0)if(i.position.x+=(i._vx??0)*e,i.position.y+=(i._vy??0)*e,i.position.z+=(i._vz??0)*e,i._vy=(i._vy??0)-(h?1.2:6)*e,h){const d=1+Math.sin(a*Math.PI)*.45;i.scale.setScalar(d),i.rotation.y+=e*2}else i.rotation.x+=e*4,i.rotation.z+=e*3;else i.position.y+=e*1.5}}}}render(){if(!this.contextLost)try{this.useComposer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderFails=0}catch(e){this.renderFails++,console.error("[underkeep] render failed",e),this.useComposer=!1;try{this.renderer.render(this.scene,this.camera)}catch(t){console.error("[underkeep] fallback render failed",t),this.renderFails>=3&&(this.contextLost=!0,this.onContextLost?.())}}}raycastGround(e,t){const i=new nh;i.setFromCamera(new le(e,t),this.camera);const n=new Xi(new A(0,1,0),0),s=new A;return i.ray.intersectPlane(n,s)?s:null}}const fh=["treasury","lair","hatchery","training","library","portal","guard","workshop","prison","torture","graveyard","temple","combatPit","casino","door","sentry","rally","bridgeWood","bridgeStone","sell"];class ev{goldEl;manaEl;manaBar;workersEl;creaturesEl;mentorEl;mentorText;tooltipEl;overlay;overlayTitle;overlayMsg;buildSheet;spellsSheet;btnBuild;btnSpells;mentorTimer=0;mentorQueue=[];inspectorEl;inspName;inspJob;inspHp;inspHpBar;inspHunger;inspTired;inspMood;inspMoodBar;inspEfficiency;minimap;minimapCtx;objectiveEl;kitsValueEl;createWorkerBtn;rosterSheet;rosterList;btnRoster;goldCapEl;heartEl;heartBar;paydayEl;inspHungerRow;inspTiredRow;onToolChange=null;onSpell=null;onOverlayContinue=null;onNewGame=null;onInspectorClose=null;onRosterSelect=null;constructor(){this.goldEl=document.getElementById("gold-value"),this.manaEl=document.getElementById("mana-value"),this.manaBar=document.getElementById("mana-bar"),this.workersEl=document.getElementById("workers-value"),this.creaturesEl=document.getElementById("creatures-value"),this.mentorEl=document.getElementById("mentor"),this.mentorText=document.getElementById("mentor-text"),this.tooltipEl=document.getElementById("tooltip"),this.overlay=document.getElementById("overlay"),this.overlayTitle=document.getElementById("overlay-title"),this.overlayMsg=document.getElementById("overlay-msg"),this.buildSheet=document.getElementById("build-sheet"),this.spellsSheet=document.getElementById("spells-sheet"),this.btnBuild=document.getElementById("btn-build"),this.btnSpells=document.getElementById("btn-spells"),this.inspectorEl=document.getElementById("inspector"),this.inspName=document.getElementById("insp-name"),this.inspJob=document.getElementById("insp-job"),this.inspHp=document.getElementById("insp-hp"),this.inspHpBar=document.getElementById("insp-hp-bar"),this.inspHunger=document.getElementById("insp-hunger"),this.inspTired=document.getElementById("insp-tired"),this.inspMood=document.getElementById("insp-mood"),this.inspMoodBar=document.getElementById("insp-mood-bar"),this.inspEfficiency=document.getElementById("insp-efficiency"),this.minimap=document.getElementById("minimap"),this.minimapCtx=this.minimap?.getContext("2d")??null,this.objectiveEl=document.getElementById("objective-value"),this.kitsValueEl=document.getElementById("kits-value"),this.createWorkerBtn=document.getElementById("btn-create-worker")??document.querySelector('.spell[data-spell="createWorker"]'),this.rosterSheet=document.getElementById("roster-sheet"),this.rosterList=document.getElementById("roster-list"),this.btnRoster=document.getElementById("btn-roster"),this.goldCapEl=document.getElementById("gold-cap"),this.heartEl=document.getElementById("heart-value"),this.heartBar=document.getElementById("heart-bar"),this.paydayEl=document.getElementById("payday-value"),this.inspHungerRow=document.getElementById("insp-hunger-row"),this.inspTiredRow=document.getElementById("insp-tired-row"),document.getElementById("insp-close")?.addEventListener("click",()=>{this.hideInspector(),this.onInspectorClose?.()}),document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.tool;this.setActiveTool(t),this.onToolChange?.(t),fh.includes(t)&&this.closeSheets()})}),document.querySelectorAll(".spell").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.spell;this.onSpell?.(t),(t==="speed"||t==="lightning"||t==="possess"||t==="sight"||t==="callToArms")&&this.closeSheet("spells")})}),document.getElementById("overlay-btn").addEventListener("click",()=>{this.hideOverlay(),this.onOverlayContinue?.()}),document.getElementById("overlay-btn-secondary")?.addEventListener("click",()=>{this.hideOverlay(),this.onNewGame?.()}),document.getElementById("btn-new-game")?.addEventListener("click",()=>{this.onNewGame?.()}),this.btnBuild?.addEventListener("click",()=>this.toggleSheet("build")),this.btnSpells?.addEventListener("click",()=>this.toggleSheet("spells")),this.btnRoster?.addEventListener("click",()=>this.toggleSheet("roster")),document.getElementById("btn-build-desktop")?.addEventListener("click",()=>this.toggleSheet("build")),document.getElementById("btn-spells-desktop")?.addEventListener("click",()=>this.toggleSheet("spells")),document.getElementById("btn-roster-desktop")?.addEventListener("click",()=>this.toggleSheet("roster")),document.querySelectorAll(".sheet-close").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.close;(t==="build"||t==="spells"||t==="roster")&&this.closeSheet(t)})}),document.getElementById("mentor-dismiss")?.addEventListener("click",()=>this.dismissMentor())}sheetButtons(e){return(e==="build"?["btn-build","btn-build-desktop"]:e==="spells"?["btn-spells","btn-spells-desktop"]:["btn-roster","btn-roster-desktop"]).map(i=>document.getElementById(i)).filter(i=>!!i)}sheetEl(e){return e==="build"?this.buildSheet:e==="spells"?this.spellsSheet:this.rosterSheet}toggleSheet(e){const t=this.sheetEl(e);if(!t)return;const i=t.hasAttribute("hidden");for(const n of["build","spells","roster"])if(n!==e){this.sheetEl(n)?.setAttribute("hidden","");for(const s of this.sheetButtons(n))s.classList.remove("active"),s.setAttribute("aria-expanded","false")}if(i){t.removeAttribute("hidden");for(const n of this.sheetButtons(e))n.classList.add("active"),n.setAttribute("aria-expanded","true")}else{t.setAttribute("hidden","");for(const n of this.sheetButtons(e))n.classList.remove("active"),n.setAttribute("aria-expanded","false")}}closeSheet(e){this.sheetEl(e)?.setAttribute("hidden","");for(const i of this.sheetButtons(e))i.classList.remove("active"),i.setAttribute("aria-expanded","false")}closeSheets(){this.closeSheet("build"),this.closeSheet("spells"),this.closeSheet("roster")}openRoster(){this.toggleSheet("roster")}isRosterOpen(){return!!this.rosterSheet&&!this.rosterSheet.hasAttribute("hidden")}updateRoster(e){if(this.rosterList){if(this.rosterList.innerHTML="",!e.length){const t=document.createElement("div");t.className="roster-hint",t.textContent="No minions yet — dig, claim, and open a Portal.",this.rosterList.appendChild(t);return}for(const t of e){const i=document.createElement("button");i.type="button",i.className="roster-row",i.setAttribute("role","listitem"),i.dataset.id=String(t.id),t.knockedOut&&i.classList.add("ko"),t.hp<t.maxHp*.4&&i.classList.add("hurt"),i.innerHTML=`<span class="r-name">${t.name}</span><span class="r-job">${t.job}</span><span class="r-hp">${Math.floor(t.hp)}/${Math.floor(t.maxHp)}</span><span class="r-mood">${Math.floor(t.mood)}</span>`,i.addEventListener("click",()=>{this.onRosterSelect?.(t.id),this.closeSheet("roster")}),this.rosterList.appendChild(i)}}}setActiveTool(e){document.querySelectorAll(".tool").forEach(t=>{t.classList.toggle("active",t.dataset.tool===e)}),fh.includes(e)?this.btnBuild?.classList.add("active"):(e==="select"||e==="dig"||e==="claim"||e==="fortify")&&this.btnBuild?.classList.remove("active")}updateStats(e,t,i,n,s){const o=Number.isFinite(e)?Math.max(0,e):0,a=Number.isFinite(i)&&i>0?i:1,h=Number.isFinite(t)?Math.max(0,Math.min(a,t)):0;this.goldEl.textContent=String(Math.floor(o)),this.manaEl.textContent=`${Math.floor(h)}/${Math.floor(a)}`;const d=Math.max(0,Math.min(100,h/a*100));this.manaBar.style.width=`${Number.isFinite(d)?d:0}%`,this.workersEl.textContent=String(Math.max(0,n|0)),this.creaturesEl.textContent=String(Math.max(0,s|0))}updateKeepVitals(e){if(this.goldCapEl&&(this.goldCapEl.textContent=`/${Math.floor(e.goldCap)}`),this.heartEl&&(this.heartEl.textContent=`${Math.max(0,Math.ceil(e.heartHp))}`),this.heartBar){const t=e.heartMax>0?Math.max(0,Math.min(100,e.heartHp/e.heartMax*100)):0;this.heartBar.style.width=`${t}%`}if(this.paydayEl){const t=Math.max(0,Math.ceil(e.paydayIn));this.paydayEl.textContent=e.paydayDue>0?`${t}s · ${e.paydayDue}g`:`${t}s`}e.portalCap>0&&(this.creaturesEl.textContent=`${Math.max(0,e.portalCount|0)}/${e.portalCap}`)}setSpellAffordable(e,t){document.querySelectorAll(`.spell[data-spell="${e}"]`).forEach(i=>{i.disabled=!t})}say(e){this.mentorQueue.push(e),this.mentorTimer<=0&&this.popMentor()}sayNow(e){this.mentorQueue.length=0,this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}dismissMentor(){this.mentorTimer=0,this.mentorQueue.length=0,this.mentorEl.classList.remove("visible")}popMentor(){const e=this.mentorQueue.shift();if(!e){this.mentorEl.classList.remove("visible");return}this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}setTooltip(e){this.tooltipEl.textContent=e}update(e){this.mentorTimer>0&&(this.mentorTimer-=e,this.mentorTimer<=0&&this.popMentor())}showInspector(e){try{const t=(u,f,g,v=f)=>Number.isFinite(u)?Math.max(f,Math.min(g,u)):v,i=t(e.maxHp,1,9999,1),n=t(e.hp,0,i,0),s=t(e.hunger,0,100,0),o=t(e.tired,0,100,0),a=t(e.mood,0,100,50);let h=Number.isFinite(e.efficiency)?e.efficiency:.85;h>1.5&&(h=h/100),h=t(h,0,1.2,.85);const d=Math.round(h*100);this.inspName.textContent=e.held?`${e.kind} (held)`:e.kind,this.inspJob.textContent=e.job||"Idle",this.inspHp.textContent=`${Math.ceil(n)}/${Math.ceil(i)}`;const l=t(n/i*100,0,100,0);this.inspHpBar.style.width=`${l}%`,e.worker?(this.inspHunger.textContent="None",this.inspTired.textContent="None",this.inspHungerRow?.classList.add("insp-na"),this.inspTiredRow?.classList.add("insp-na")):(this.inspHunger.textContent=`${Math.floor(s)}`,this.inspTired.textContent=`${Math.floor(o)}`,this.inspHungerRow?.classList.remove("insp-na"),this.inspTiredRow?.classList.remove("insp-na"));const c=a>=75?"Happy":a>=50?"Content":a>=30?"Grumpy":a>=15?"Angry":"Leaving?";this.inspMood.textContent=`${Math.floor(a)} · ${c}`,this.inspMoodBar.style.width=`${t(a,0,100,0)}%`,this.inspEfficiency.textContent=`${d}%`,this.inspectorEl.classList.remove("hidden")}catch(t){console.warn("[underkeep] showInspector failed",t);try{this.inspectorEl.classList.add("hidden")}catch{}}}hideInspector(){this.inspectorEl.classList.add("hidden")}setObjective(e){this.objectiveEl&&(this.objectiveEl.textContent=e)}setKits(e,t){this.kitsValueEl&&(this.kitsValueEl.textContent=`D${e} · S${t}`)}setWorkerCost(e){this.createWorkerBtn&&(this.createWorkerBtn.classList.contains("tool"),(this.createWorkerBtn.id==="btn-create-worker"||(this.createWorkerBtn.textContent||"").includes("Worker"))&&(this.createWorkerBtn.textContent=`✨ Worker ${e}g`),this.createWorkerBtn.title=`Create Scrabbler (Q) — ${e} gold (cost scales)`)}drawMinimap(e){const t=this.minimap,i=this.minimapCtx;if(!t||!i)return;const n=t.width,s=t.height;i.fillStyle="#0a0806",i.fillRect(0,0,n,s);const o=e.width,a=e.height,h=Math.min(n/o,s/a),d=(n-o*h)/2,l=(s-a*h)/2;for(let f=0;f<a;f++)for(let g=0;g<o;g++){if(!e.exploredAt(g,f))continue;const v=e.kindAt(g,f),m=e.roomAt(g,f);let p="#3a3028";v===0?p="#1a1820":v===1?p="#4a3828":v===2?p="#c0a020":v===3?p="#5a4838":v===4?p="#7a6848":v===5?p="#e04020":v===6?p="#686060":v===7?p="#e05010":v===8?p="#2060a0":v===9||v===10?p="#8a7050":v===11&&(p="#40e0c0"),v===4&&m===8&&(p="#a07840"),v===4&&m===7&&(p="#607080"),v===4&&m===9&&(p="#506070"),v===4&&m===10&&(p="#a04050"),v===4&&m===11&&(p="#406850"),v===4&&m===12&&(p="#c0a040"),v===4&&m===13&&(p="#a04030"),v===4&&m===14&&(p="#c060a0"),i.fillStyle=p,i.fillRect(d+g*h,l+f*h,Math.max(1,h),Math.max(1,h))}const c=d+(e.heartX+.5)*h,u=l+(e.heartY+.5)*h;i.strokeStyle="#ff6040",i.lineWidth=2,i.beginPath(),i.arc(c,u,Math.max(3,h*1.1),0,Math.PI*2),i.stroke(),i.fillStyle="#ff3020",i.beginPath(),i.arc(c,u,Math.max(1.5,h*.45),0,Math.PI*2),i.fill()}showOverlay(e,t,i="Continue",n){this.overlayTitle.textContent=e,this.overlayMsg.textContent=t,document.getElementById("overlay-btn").textContent=i;const s=document.getElementById("overlay-btn-secondary");s&&(n?(s.textContent=n,s.classList.remove("hidden")):s.classList.add("hidden")),this.overlay.classList.remove("hidden")}hideOverlay(){this.overlay.classList.add("hidden")}}const z={start:"The earth awaits your cruelty, Keeper. Dig. Claim. Thrive.",resume:"Welcome back, Keeper. Your dungeon endures — dig on.",newGame:"A fresh Underkeep. The old one is dust.",firstGold:"Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",firstRoom:"A room! How civilized. Your minions prefer beds to sleeping in the mud.",needGold:"The Treasury is too light. You need %g gold.",cannotDig:"That rock laughs at your marks. Earth, gold, and gem seams only.",cannotClaim:"Only freshly dug dirt can be claimed.",cannotFortify:"Fortify soft earth beside your land — never gold, never rock.",cannotRoom:"Rooms sit on claimed flagstones that are still empty.",marksFirst:"Your marks come first. Scrabblers drop chores and go to the tagged earth.",portal:"The Portal hums. Hungry things beyond the veil hear its song.",skitterwing:"A Skitterwing flutters in. Fragile, but it sees what you cannot.",rattlekin:"Rattlekin arrive — bony enthusiasm and questionable hygiene.",emberling:"An Emberling. Do try not to burn down your own treasury.",gravemage:"A Gravemage darkens the Portal. Point them at the Library — research feeds your spells.",researchHeal:"Library research unlocks Heal! Mend your bruised nightmares.",researchDone:"Research rank %r complete. Spells grow sharper in the dark.",levelUp:"Training pays off — a minion levels up!",heroes:"Heroes at the gate! How quaint. Show them the meaning of Underkeep.",worker:"Another Scrabbler clawed into being. Point it at dirt and watch miracles.",heartHurt:"Your Heart bleeds! Protect it, or this story ends poorly.",win:"The heroes fall. The dark endures. For now.",lose:"The Heart is silent. The Underkeep… underwhelms.",slap:"A firm slap. Back to work!",slapAlt:"A firm slap. Morale through violence — classic.",speed:"Haste, my little nightmares. The clock is cruel.",lightning:"Heaven's temper, redirected. Delightful.",heal:"Green fire stitches flesh. The Library earns its keep.",claim:"Claimed land feeds your mana. Ambition has a wattage.",lairBuilt:"A Lair. Beds for the weary and the wounded. Capacity equals tiles.",lairUse:"Minions claim their bedrolls. Tired claws seek the Lair.",bedClaim:"A minion claims a Lair bed.",lairResting:"A minion is resting in the Lair…",lairFull:"Every bed is taken. Expand the Lair or expect cranky minions.",hatcheryBuilt:"A Hatchery. Nest-food grows while you scheme — hungry mouths will come.",hatcheryUse:"Feast! The Hatchery soothes rumbling guts. Work resumes after.",feasting:"Feasting at the Hatchery.",hatcheryHungry:"The nests are bare. Wait for more Hatchery food… or build more nests.",pickUp:"Into the Hand. Drop them where the work is — or slap sense into them.",drop:"Back on their feet. Back to the dirt.",moodLow:"A minion's mood is crumbling. Beds, food, and space — or they may leave.",sluggishDig:"Sluggish claws… mood is dragging the dig.",leaveThreat:"A minion threatens to leave the Underkeep…",doorBuilt:"A wooden door bars the corridor. Heroes hate hinges.",doorOpen:"Door swings open — minions pass; heroes still hesitate if you close it again.",doorClosed:"Door sealed. Heroes bounce. Creatures can pry it open.",sentryBuilt:"Sentry trap armed. Heroes who tread here learn about arrows.",sentryFire:"Twang! The Sentry greets a hero with sharp hospitality.",guardBuilt:"Guard Room raised. Fighters will hold the line when idle.",rallyPlanted:"Rally flag planted! Call to arms — minions hold this tile.",rallyCleared:"Rally flag struck. Back to ordinary scheming.",groupSelect:"Squad marked. Shift-click or drag-box to gather more — then click a tile to attack-move.",attackMove:"Attack-move! Selected fighters advance and engage.",attackHero:"Hunt them down! Fighters surge toward the heroes.",fog:"Beyond the torchlight — unexplored dark. Dig and claim to push the fog back.",autoFortify:"Idle Scrabblers reinforce soft earth walls on their own. Rock still laughs at them.",autoClaim:"Scrabblers claim freshly dug earth on their own. Gold borders mean the land is yours.",lava:"Lava! It cooks the careless. Emberlings laugh; Scrabblers refuse the path — build a bridge.",bridgeWood:"Wooden planks over the fire. Crude, fragrant, and gloriously flammable.",bridgeStone:"Stone bridge — heavier gold, steadier nerves. The lava still sulks beneath.",possess:"Possession! Ride a minion's senses. WASD to steer, Esc to return to the Keeper throne.",possessArm:"Choose a vessel. Click any living minion to Possess them.",possessEnd:"Back in the Keeper's seat. The vessel blinks, confused but intact.",payday:"Payday! %g gold leaves the Treasury — wages keep moods from mutiny.",paydayFail:"Payday failed — the Treasury is empty! Moods crash. Mint gold or expect desertions.",heroesSoon:"Footsteps in the dark… heroes approach. Fortify doors, set traps, rally fighters.",heroesImminent:"Steel at the gate! Heroes arrive any moment.",heroEngage:"Heroes clash with your minions — doors and traps earn their keep.",heroDown:"A hero falls. The Underkeep drinks deep.",workshopBuilt:"Workshop raised! Scrabblers craft door and Sentry kits — or pay less gold at the bench.",craftKit:"Workshop finished a %k kit. Place it free from Build.",craftBusy:"Scrabblers hammer in the Workshop. Kits will stack for doors and traps.",missionBrief:"Mission: Survive %w hero waves — or amass %g gold in the Treasury. Protect the Heart.",waveCleared:"Wave %n cleared! Steel will return — prepare for wave %next of %w.",winWaves:"All hero waves broken. The Underkeep endures!",winGold:"Treasury overflows! Gold wins the day — heroes be damned.",workerSpawn:"Scrabbler forged for %g gold. Next costs %n. Point it at dirt!",prisonBuilt:"Prison raised! Knocked-out heroes can be dragged in — or drop them yourself.",tortureBuilt:"Torture Chamber humming. Prisoners will convert into loyal Thornwitches.",graveyardBuilt:"Graveyard consecrated. Corpses and starved captives rise as Bonewretches.",heroKnocked:"Hero knocked out! Drag them to Prison before they fade.",prisonerHeld:"Captive secured in the Prison. Starve them… or convert them.",converting:"Conversion underway — the hero's will cracks.",converted:"A Thornwitch joins your roster. Loyalty tastes like iron.",boneRaised:"A Bonewretch claws up from the Graveyard. Fearless bones.",starvedBones:"The prisoner starved — bones claim them for the dark.",roomSizeBonus:"Room size %n · +%p% efficiency",templeBuilt:"Temple raised. Prayer soothes moods — and may gift a talisman.",combatPitBuilt:"Combat Pit ready. Veterans past training level 4 fight for glory here.",praying:"A minion kneels in the Temple. Mood climbs with the incense.",prayerBuff:"Prayer buff granted — claws steadier, spirits higher.",talismanGift:"A talisman forms in the Temple haze. Keep them close.",combatLevelUp:"%n rises to Combat Pit level %l!",fleeLair:"Wounded minions flee toward the Lair!",dragWounded:"Scrabblers drag the wounded home to their beds.",allyKnocked:"A minion collapses! Scrabblers can haul them to a Lair bed.",sellRoom:"Sold for %g gold. The flagstones remember nothing.",cannotSell:"Nothing to sell — rooms and doors only, never the Heart.",workerRefund:"The Heart reclaims a Scrabbler. %g gold returns to the vault.",slapWork:"A sting of purpose. The Scrabbler digs harder.",slapWitch:"The Thornwitch smiles. Pain is a language she speaks.",slapAnger:"That minion did not enjoy the Hand. Mood sours.",sightArm:"Sight of Evil armed — click the dark to peel the fog.",sightCast:"The veil lifts. What was hidden now belongs to you.",callToArms:"Call to Arms! Fighters muster to the banner.",gemSeam:"A gem seam! It never runs dry — haul until the vault groans.",treasuryFull:"The vault is full. Build more Treasury, or gold stays in their claws.",trainGold:"Training costs gold. Empty coffers mean idle claws.",portalFull:"The Portal is crowded. Expand it — or the veil stays shut.",casinoBuilt:"Wagerden opens. Idle minions will gamble their moods into shape.",gambling:"Dice clatter in the Wagerden. Fortune is a cheap friend.",heartDefend:"Scrabblers defend the Heart! Even workers have teeth when home burns."};class ph{width;height;tiles;heartPos={x:0,y:0};constructor(e=48,t=48){this.width=e,this.height=t,this.tiles=[];for(let i=0;i<t;i++)for(let n=0;n<e;n++)this.tiles.push({x:n,y:i,kind:E.Earth,room:_.None,mark:Ee.None,fortified:!1,goldAmount:0,claimedProgress:0,digProgress:0,torch:!1,door:$e.None,trap:pt.None,rally:!1,explored:!1});this.generate()}idx(e,t){return t*this.width+e}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}get(e,t){return this.inBounds(e,t)?this.tiles[this.idx(e,t)]:null}worldToTile(e,t){return{x:Math.floor(e/Xe+this.width/2),y:Math.floor(t/Xe+this.height/2)}}tileToWorld(e,t){return{x:(e-this.width/2+.5)*Xe,z:(t-this.height/2+.5)*Xe}}generate(){const e=Math.floor(this.width/2),t=Math.floor(this.height/2);this.heartPos={x:e,y:t};for(let n=0;n<this.height;n++)for(let s=0;s<this.width;s++){const o=this.get(s,n);(s<2||n<2||s>=this.width-2||n>=this.height-2)&&(o.kind=E.Rock)}for(let n=0;n<14;n++){let s=4+Math.floor(Math.random()*(this.width-8)),o=4+Math.floor(Math.random()*(this.height-8));const a=4+Math.floor(Math.random()*8);for(let h=0;h<a;h++){const d=this.get(s,o);d&&d.kind===E.Earth&&(d.kind=E.Gold,d.goldAmount=200+Math.floor(Math.random()*300)),s+=Math.floor(Math.random()*3)-1,o+=Math.floor(Math.random()*3)-1,s=Math.max(3,Math.min(this.width-4,s)),o=Math.max(3,Math.min(this.height-4,o))}}for(let n=0;n<8;n++){let s=5+Math.floor(Math.random()*(this.width-10)),o=5+Math.floor(Math.random()*(this.height-10));if(Math.abs(s-e)<7&&Math.abs(o-t)<7)continue;const a=2+Math.floor(Math.random()*3);for(let h=-a;h<=a;h++)for(let d=-a;d<=a;d++){if(Math.abs(d)+Math.abs(h)>a)continue;const l=this.get(s+d,o+h);l&&l.kind===E.Earth&&(l.kind=E.Rock,l.goldAmount=0)}}for(let n=-3;n<=3;n++)for(let s=-3;s<=3;s++){const o=this.get(e+s,t+n);if(!o)continue;if(s===0&&n===0){o.kind=E.Heart,o.room=_.None;continue}const a=Math.max(Math.abs(s),Math.abs(n));(a<=2||a===3&&s===0&&n===-3)&&(o.kind=E.Claimed,o.claimedProgress=1)}for(let n=t-8;n<t-3;n++)for(let s=e-1;s<=e+1;s++){const o=this.get(s,n);o&&o.kind!==E.Rock&&o.kind!==E.Heart&&(o.kind=E.Claimed,o.claimedProgress=1)}const i=(n,s,o)=>{const a=this.get(n,s);a&&(a.kind===E.Earth||a.kind===E.Gold)&&(a.kind=E.Gold,a.goldAmount=Math.max(a.goldAmount,o),a.fortified=!1)};for(let n=0;n<5;n++)i(e-1+n,t+3,380+n*30);for(let n=0;n<4;n++)i(e+n,t+4,320+n*40);for(let n=0;n<4;n++)i(e+3,t-1+n,360+n*25);for(let n=0;n<3;n++)i(e+4,t+n,300+n*35);this.paintHazardBlob(e-10,t+2,3,E.Lava),this.paintHazardBlob(e-12,t-1,2,E.Lava);for(let n=0;n<5;n++){const s=this.get(e+6+n%2,t+6+Math.floor(n/2));s&&(s.kind===E.Earth||s.kind===E.Gold)&&(s.kind=E.Lava,s.goldAmount=0,s.fortified=!1)}this.paintHazardBlob(e-8,t-8,2,E.Water);{const n=Math.min(this.width-6,e+9),s=Math.max(4,t+1);for(const[o,a]of[[0,0],[1,0],[0,1],[1,1],[2,0]]){const h=this.get(n+o,s+a);h&&(h.kind===E.Earth||h.kind===E.Gold)&&(h.kind=E.Gem,h.goldAmount=9999,h.fortified=!1)}}this.refreshTorches(),this.seedExploration()}paintHazardBlob(e,t,i,n){const s=this.heartPos.x,o=this.heartPos.y;for(let a=-i;a<=i;a++)for(let h=-i;h<=i;h++){if(h*h+a*a>i*i+.5)continue;const d=e+h,l=t+a;if(Math.abs(d-s)<5&&Math.abs(l-o)<5)continue;const c=this.get(d,l);c&&(c.kind===E.Earth||c.kind===E.Gold)&&(c.kind=n,c.goldAmount=0,c.fortified=!1,c.digProgress=0,c.room=_.None)}}refreshTorches(){for(const e of this.tiles)e.torch=!1;for(const e of this.tiles){if(e.kind!==E.Claimed&&e.kind!==E.Dirt&&e.kind!==E.Heart||(e.x+e.y)%4!==0)continue;const t=[[1,0],[-1,0],[0,1],[0,-1]];for(const[i,n]of t){const s=this.get(e.x+i,e.y+n);if(s&&(It(s.kind)||s.kind===E.Rock||s.fortified)){e.torch=!0;break}}}}isSolid(e,t){const i=this.get(e,t);return i?It(i.kind)||i.kind===E.Rock||i.fortified:!0}isHazard(e,t){const i=this.get(e,t);return!!i&&(i.kind===E.Lava||i.kind===E.Water)}isBridge(e,t){const i=this.get(e,t);return!!i&&(i.kind===E.BridgeWood||i.kind===E.BridgeStone)}isWalkable(e,t,i){const n=this.get(e,t);return!n||n.fortified?!1:!!(n.kind===E.Dirt||n.kind===E.Claimed||n.kind===E.Heart||n.kind===E.BridgeWood||n.kind===E.BridgeStone||i?.allowHazard&&(n.kind===E.Lava||n.kind===E.Water))}canPlaceBridge(e,t){const i=this.get(e,t);return!i||i.kind!==E.Lava&&i.kind!==E.Water?!1:this.neighbors4(e,t).some(n=>!n.fortified&&(n.kind===E.Dirt||n.kind===E.Claimed||n.kind===E.Heart||n.kind===E.BridgeWood||n.kind===E.BridgeStone))}isDiggable(e,t){const i=this.get(e,t);return!(!i||!It(i.kind)||i.fortified&&i.mark!==Ee.Dig)}countClaimed(){let e=0;for(const t of this.tiles)(t.kind===E.Claimed||t.kind===E.Heart)&&e++;return e}countRoom(e){let t=0;for(const i of this.tiles)i.room===e&&t++;return t}largestContiguousRoom(e){if(e===_.None)return 0;const t=new Set;let i=0;for(const n of this.tiles){if(n.room!==e)continue;const s=`${n.x},${n.y}`;if(t.has(s))continue;let o=0;const a=[n];for(t.add(s);a.length;){const h=a.pop();o++;for(const d of this.neighbors4(h.x,h.y)){const l=`${d.x},${d.y}`;d.room===e&&!t.has(l)&&(t.add(l),a.push(d))}}o>i&&(i=o)}return i}neighbors4(e,t){const i=[];for(const[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.get(e+n,t+s);o&&i.push(o)}return i}isReachableSolid(e,t){return this.neighbors4(e,t).some(i=>this.isWalkable(i.x,i.y))}findDiggableFace(e,t){const i=this.get(e,t);if(!i||!It(i.kind))return null;if(this.isReachableSolid(e,t))return{x:e,y:t};const n=new Set([`${e},${t}`]),s=[{x:e,y:t}];let o=0;for(;s.length&&o++<256;){const a=s.shift();for(const h of this.neighbors4(a.x,a.y)){const d=`${h.x},${h.y}`;if(!n.has(d)&&(n.add(d),!!It(h.kind)&&!(h.fortified&&h.mark!==Ee.Dig))){if(this.isReachableSolid(h.x,h.y))return{x:h.x,y:h.y};s.push({x:h.x,y:h.y})}}}return null}hasAdjacentClaimed(e,t){return this.neighbors4(e,t).some(i=>i.kind===E.Claimed||i.kind===E.Heart)}blocksHero(e,t){const i=this.get(e,t);return!!i&&i.door===$e.Closed}canPlaceDoor(e,t){const i=this.get(e,t);if(!i||i.kind!==E.Claimed||i.room!==_.None)return!1;if(i.door!==$e.None)return!0;let n=0,s=0,o=!1;for(const a of this.neighbors4(e,t))(a.fortified||It(a.kind)||a.kind===E.Rock)&&n++,!a.fortified&&(a.kind===E.Dirt||a.kind===E.Claimed||a.kind===E.Heart||a.kind===E.BridgeWood||a.kind===E.BridgeStone)&&s++,a.room!==_.None&&(o=!0);return n>=1&&s>=1||o}seedExploration(){for(const e of this.tiles)e.explored=!1;for(const e of this.tiles)(e.kind===E.Claimed||e.kind===E.Heart||e.kind===E.Dirt)&&(e.explored=!0);for(const e of this.tiles)if(e.explored&&!(e.kind!==E.Claimed&&e.kind!==E.Heart&&e.kind!==E.Dirt))for(const t of this.neighbors4(e.x,e.y))t.explored=!0}revealTile(e,t){const i=this.get(e,t);return!i||i.explored?!1:(i.explored=!0,!0)}revealAround(e,t,i=1){let n=!1;for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)this.revealTile(e+o,t+s)&&(n=!0);return n}revealFromTerritory(){let e=!1;for(const t of this.tiles)if(!(t.kind!==E.Claimed&&t.kind!==E.Heart&&t.kind!==E.Dirt)){t.explored||(t.explored=!0,e=!0);for(const i of this.neighbors4(t.x,t.y))i.explored||(i.explored=!0,e=!0)}return e}isExplored(e,t){const i=this.get(e,t);return!!i&&i.explored}findPath(e,t,i,n,s){if(e=Math.round(e),t=Math.round(t),i=Math.round(i),n=Math.round(n),!this.inBounds(e,t)||!this.inBounds(i,n))return null;if(e===i&&t===n)return[{x:i,y:n}];const o=(p,y)=>y*this.width+p,a=[{x:e,y:t,f:0}],h=new Map,d=new Map;d.set(o(e,t),0);const l=new Set,c=(p,y)=>Math.abs(p-i)+Math.abs(y-n),u=!!s?.forHero,f=!!s?.allowHazard,g=(p,y)=>u&&this.blocksHero(p,y)?!1:!!(this.isWalkable(p,y,{allowHazard:f})||p===i&&y===n&&this.isDiggable(p,y)||p===i&&y===n&&p===this.heartPos.x&&y===this.heartPos.y),v=(p,y)=>{const x=this.get(p,y);return x?x.kind===E.Lava?4:x.kind===E.Water?3:1:1};let m=0;for(;a.length&&m++<5e3;){a.sort((x,w)=>x.f-w.f);const p=a.shift(),y=o(p.x,p.y);if(!l.has(y)){if(l.add(y),p.x===i&&p.y===n){const x=[{x:i,y:n}];let w=y;for(;h.has(w);){const N=h.get(w);x.push({x:N%this.width,y:Math.floor(N/this.width)}),w=N}return x.reverse(),x}for(const[x,w]of[[1,0],[-1,0],[0,1],[0,-1]]){const N=p.x+x,P=p.y+w;if(!this.inBounds(N,P)||!g(N,P))continue;const R=o(N,P);if(l.has(R))continue;const D=(d.get(y)??1/0)+v(N,P);D<(d.get(R)??1/0)&&(h.set(R,y),d.set(R,D),a.push({x:N,y:P,f:D+c(N,P)}))}}}return null}findPathAdjacent(e,t,i,n,s){let o=null;for(const[a,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const d=i+a,l=n+h;if(!this.isWalkable(d,l)||s?.forHero&&this.blocksHero(d,l))continue;const c=this.findPath(e,t,d,l,s);c&&(!o||c.length<o.length)&&(o=c)}return o}}const br="underkeep-save-v1",tv=new Set(Object.values($)),iv=new Set([E.Rock,E.Earth,E.Gold,E.Dirt,E.Claimed,E.Heart,E.Wall,E.Lava,E.Water,E.BridgeWood,E.BridgeStone,E.Gem]);function ci(r){return typeof r=="number"&&Number.isFinite(r)}function rc(r,e,t){if(!r||typeof r!="object")return"not-object";const i=r;if(i.v!==1)return"bad-version";if(i.width!==e||i.height!==t)return"size-mismatch";if(!i.heartPos||!ci(i.heartPos.x)||!ci(i.heartPos.y))return"bad-heartPos";if(i.heartPos.x<0||i.heartPos.y<0||i.heartPos.x>=e||i.heartPos.y>=t)return"heartPos-oob";if(!Array.isArray(i.tiles)||i.tiles.length!==e*t)return"bad-tiles-length";if(!ci(i.gold)||i.gold<0)return"bad-gold";if(!ci(i.mana)||i.mana<0)return"bad-mana";if(!Array.isArray(i.creatures))return"bad-creatures";let n=0,s=0;for(let h=0;h<i.tiles.length;h++){const d=i.tiles[h];if(!d||typeof d!="object")return"bad-tile";if(!iv.has(d.kind))return"bad-tile-kind";d.kind===E.Heart&&n++,(d.kind===E.Earth||d.kind===E.Gold)&&s++}if(n<1)return"no-heart-tile";const o=i.heartPos.y*e+i.heartPos.x;if(i.tiles[o]?.kind!==E.Heart)return"heartPos-mismatch";if(!i.gameOver&&s<1)return"no-diggable";let a=0;for(const h of i.creatures){if(!h||typeof h!="object")return"bad-creature";if(!tv.has(h.kind))return"bad-creature-kind";if(!ci(h.x)||!ci(h.y))return"bad-creature-pos";h.kind===$.Scrabbler&&a++}if(!i.gameOver&&a<1)return"no-scrabbler";if(i.cam){const h=i.cam;if(!ci(h.tx)||!ci(h.tz)||!ci(h.cx)||!ci(h.cy)||!ci(h.cz))return"bad-cam"}return null}function nv(r,e){try{const t=localStorage.getItem(br);if(!t)return null;const i=JSON.parse(t);if(r!=null&&e!=null){const s=rc(i,r,e);if(s){console.warn("[underkeep] rejecting save:",s);try{localStorage.removeItem(br)}catch{}return null}return i}if(!i||typeof i!="object")return null;const n=i;return n.v!==1||!Array.isArray(n.tiles)||!n.width||!n.height?null:n}catch(t){return console.warn("[underkeep] save parse failed",t),null}}function sv(r){try{localStorage.setItem(br,JSON.stringify(r))}catch{}}function qi(){try{localStorage.removeItem(br)}catch{}}function rv(r){return r.map(e=>({kind:e.kind,room:e.room,mark:e.mark,fortified:e.fortified,goldAmount:e.goldAmount,claimedProgress:e.claimedProgress,digProgress:e.digProgress,torch:e.torch,door:e.door??$e.None,trap:e.trap??pt.None,rally:!!e.rally,explored:!!e.explored}))}function ov(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const n=r[i],s=e[i];n.kind=s.kind,n.room=s.room,n.mark=s.mark,n.fortified=!!s.fortified,n.goldAmount=s.goldAmount??0,n.claimedProgress=s.claimedProgress??0,n.digProgress=s.digProgress??0,n.torch=!!s.torch,n.door=s.door??$e.None,n.trap=s.trap??pt.None,n.rally=!!s.rally,n.explored=s.explored===void 0?!1:!!s.explored}}const go=150,av=100,vo=25,xo=40;class lv{grid;renderer;hud;creatures=[];gold=600;mana=50;tool="select";held=null;selected=null;selectedGroup=[];possessed=null;possessCamBackup=null;possessArmed=!1;sightArmed=!1;callArmed=!1;lavaDmgAcc=0;paydayToastCooldown=0;wavesCleared=0;doorKits=0;sentryKits=0;goldEver=600;minimapAcc=0;nextKitIsDoor=!0;corpses=[];rosterAcc=0;templePrayCount=0;boxSelecting=!1;boxStartClient=null;boxMoved=!1;boxPointerId=null;pendingPrimary=null;marqueeEl=null;heroWarn30=!1;heroWarn10=!1;heroEngageAnnounced=!1;gridDirty=!0;time=0;workerCostScale=0;portalCooldown=0;attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1};heroWaveSpawned=!1;heroWaveTimer=90;gameOver=!1;won=!1;paint=!1;lastPaint=null;camTarget=new A(0,0,0);camVel=new A;zoomPending=0;canvas;lastHand=null;keys=new Set;mentored=new Set;touchMode="none";touchStartTime=0;touchStartClient={clientX:0,clientY:0};touchMoved=!1;longPressTimer=null;pinchStartDist=0;pinchStartCamY=0;activeTouches=new Map;ignoreMouseUntil=0;panAccum={x:0,y:0};saveAcc=0;restoredFromSave=!1;hatcheryFood=0;foodRegenAcc=0;bedOwners=new Map;contextRecoveryShown=!1;marksDirty=!1;fogDirty=!1;rebuildCooldown=0;pendingStructuralRebuild=!1;researchProgress=0;researchRank=0;healUnlocked=!1;constructor(e){this.canvas=e,this.hud=new ev,this.marqueeEl=document.getElementById("select-marquee"),this.hud.onToolChange=i=>{this.tool=i,i!=="select"&&this.cancelBoxSelect(),this.canvas.style.cursor=i==="select"?"none":"crosshair",i!=="select"&&this.renderer.setKeeperHand(0,0,!1)},this.hud.onSpell=i=>this.castSpell(i),this.hud.onOverlayContinue=()=>{this.gameOver&&(qi(),location.reload())},this.hud.onNewGame=()=>this.confirmNewGame(),this.hud.onInspectorClose=()=>this.clearSelection(),this.hud.onRosterSelect=i=>this.focusCreatureById(i),this.grid=new ph(40,40),this.renderer=new Q0(e),this.renderer.onContextLost=()=>this.handleContextLost(),this.renderer.onContextRestored=()=>this.handleContextRestored();let t=!1;try{t=this.bootFromSaveOrFresh()}catch(i){console.error("[underkeep] boot failed — clearing save and starting Intro",i),qi(),this.resetRuntimeState(),this.startFresh(!0),t=!1}this.bindInput(e),this.canvas.style.cursor=this.tool==="select"?"none":"crosshair",e.addEventListener("mouseleave",()=>this.renderer.setKeeperHand(0,0,!1)),this.rebuild(),this.syncAllEntityMeshes(),t&&this.isPlayableOrEnded()&&this.saveNow(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(i=>i.alive&&i.isWorker).length,this.creatures.filter(i=>i.alive&&!i.isWorker&&!i.isHero).length),this.hud.updateKeepVitals({goldCap:this.vaultCap(),heartHp:this.heartHp,heartMax:po,paydayIn:rn,paydayDue:this.paydayDueNow(),portalCount:this.attractedCount(),portalCap:this.portalCap()}),this.markReady()}markReady(){document.body.classList.remove("booting")}handleContextLost(){this.contextRecoveryShown||(this.contextRecoveryShown=!0,this.hud.showOverlay("Graphics hiccup","The dungeon view lost its WebGL context (often after heavy digging). Reload to restore — your save is kept.","Reload Dungeon"),this.hud.onOverlayContinue=()=>{location.reload()})}handleContextRestored(){this.contextRecoveryShown=!1,this.gridDirty=!0,this.rebuild(),this.syncAllEntityMeshes(),this.hud.say("The Underkeep re-solidifies. Dig on, Keeper."),this.hud.hideOverlay()}isPlayableOrEnded(){if(this.gameOver)return!0;const e=this.grid.get(this.grid.heartPos.x,this.grid.heartPos.y);return!e||e.kind!==E.Heart||!this.grid.tiles.some(n=>It(n.kind))?!1:this.creatures.filter(n=>n.alive&&n.isWorker).length>=1}syncAllEntityMeshes(){for(const e of this.creatures)e.alive&&e.syncMesh(this.time)}resetRuntimeState(){for(const e of this.creatures)try{this.renderer?.removeEntityMesh(e.mesh),e.mesh?.parent&&e.mesh.parent.remove(e.mesh)}catch{}this.creatures=[],this.gold=600,this.mana=50,this.tool="select",this.held=null,this.selected=null,this.selectedGroup=[],this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee(),this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1,this.hud.hideInspector(),this.time=0,this.workerCostScale=0,this.portalCooldown=0,this.attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1},this.heroWaveSpawned=!1,this.heroWaveTimer=90,this.wavesCleared=0,this.doorKits=0,this.sentryKits=0,this.goldEver=600,this.minimapAcc=0,this.nextKitIsDoor=!0,this.gameOver=!1,this.won=!1,this.mentored=new Set,this.wageAcc=0,this.heartHp=po,this.restoredFromSave=!1,this.hatcheryFood=0,this.foodRegenAcc=0,this.bedOwners.clear(),this.contextRecoveryShown=!1,this.researchProgress=0,this.researchRank=0,this.healUnlocked=!1,this.exitPossession(!0),this.possessArmed=!1,this.sightArmed=!1,this.callArmed=!1,this.lavaDmgAcc=0,this.paydayToastCooldown=0,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=0,this.grid=new ph(40,40)}bootFromSaveOrFresh(){const e=nv(this.grid.width,this.grid.height);if(!e)return this.startFresh(!0),!1;const t=rc(e,this.grid.width,this.grid.height);if(t)return console.warn("[underkeep] invalid save on boot:",t),qi(),this.startFresh(!0),!1;try{this.applySave(e)}catch(i){return console.error("[underkeep] applySave threw",i),qi(),this.resetRuntimeState(),this.startFresh(!0),!1}return this.isPlayableOrEnded()?(this.restoredFromSave=!0,this.gameOver?this.hud.showOverlay(this.won?"Victory":"Defeat",this.won?z.win+" The Underkeep stands.":z.lose,"Try Again"):this.hud.say(z.resume),!0):(console.warn("[underkeep] restored state not playable — falling back to Intro"),qi(),this.resetRuntimeState(),this.startFresh(!0),!1)}startFresh(e){this.creatures.length===0&&(this.spawnCreature($.Scrabbler,this.grid.heartPos.x+1,this.grid.heartPos.y),this.spawnCreature($.Scrabbler,this.grid.heartPos.x-1,this.grid.heartPos.y),this.spawnCreature($.Scrabbler,this.grid.heartPos.x,this.grid.heartPos.y+1));const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+6,34,t.z+22),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.start),e&&(this.hud.showOverlay("Mission Briefing",`You are the Keeper of the Underkeep. Dig, claim, raise rooms, and crush heroes — the Heart must not fall. Objective: Survive ${ni} hero waves — OR gather ${on} gold in the Treasury. Workshop kits arm doors & traps.`,"Begin"),this.hud.say(z.missionBrief.replace("%w",String(ni)).replace("%g",String(on))))}mentioneOnce(e,t){this.mentored.has(e)||(this.mentored.add(e),this.hud.say(t))}confirmNewGame(){this.hud.showOverlay("New Game?","This clears your saved dungeon and starts fresh. Hard refresh will no longer restore the old map.","Keep Playing","Erase & Restart");const e=this.hud.onNewGame,t=this.hud.onOverlayContinue;this.hud.onOverlayContinue=()=>{this.hud.onNewGame=e,this.hud.onOverlayContinue=t},this.hud.onNewGame=()=>{qi();const i=new URL(location.href);i.searchParams.delete("shot"),i.searchParams.delete("pass"),location.replace(i.pathname+i.search+i.hash)}}buildSave(){return{v:1,width:this.grid.width,height:this.grid.height,heartPos:{...this.grid.heartPos},tiles:rv(this.grid.tiles),gold:this.gold,mana:this.mana,creatures:this.creatures.filter(e=>e.alive).map(e=>({kind:e.kind,x:e.x,y:e.y,wx:e.wx,wz:e.wz,hp:e.hp,maxHp:e.maxHp,level:e.level,goldCarried:e.goldCarried,hunger:e.hunger,sleepNeed:e.sleepNeed,trainNeed:e.trainNeed,isHero:e.isHero})),attracted:{...this.attracted},researchProgress:this.researchProgress,researchRank:this.researchRank,healUnlocked:this.healUnlocked,heroWaveSpawned:this.heroWaveSpawned,heroWaveTimer:this.heroWaveTimer,workerCostScale:this.workerCostScale,portalCooldown:this.portalCooldown,time:this.time,wageAcc:this.wageAcc,mentored:[...this.mentored],gameOver:this.gameOver,won:this.won,wavesCleared:this.wavesCleared,doorKits:this.doorKits,sentryKits:this.sentryKits,goldEver:this.goldEver,cam:{tx:this.camTarget.x,tz:this.camTarget.z,cx:this.renderer.camera.position.x,cy:this.renderer.camera.position.y,cz:this.renderer.camera.position.z}}}saveNow(){this.gameOver||this.isPlayableOrEnded()&&sv(this.buildSave())}applySave(e){if(e.width!==this.grid.width||e.height!==this.grid.height)throw new Error("save size mismatch");ov(this.grid.tiles,e.tiles),this.grid.heartPos={x:e.heartPos.x,y:e.heartPos.y},this.grid.tiles.some(i=>i.explored)?this.grid.revealFromTerritory():this.grid.seedExploration(),this.gold=e.gold,this.mana=e.mana,this.attracted={skitterwing:!!e.attracted?.skitterwing,rattlekin:!!e.attracted?.rattlekin,emberling:!!e.attracted?.emberling,gravemage:!!e.attracted?.gravemage},this.researchProgress=e.researchProgress??0,this.researchRank=e.researchRank??0,this.healUnlocked=!!e.healUnlocked,this.heroWaveSpawned=!!e.heroWaveSpawned,this.heroWaveTimer=e.heroWaveTimer??90,this.workerCostScale=e.workerCostScale??0,this.portalCooldown=e.portalCooldown??0,this.time=e.time??0,this.wageAcc=e.wageAcc??0,this.mentored=new Set(e.mentored??[]),this.gameOver=!!e.gameOver,this.won=!!e.won,this.wavesCleared=e.wavesCleared??0,this.doorKits=e.doorKits??0,this.sentryKits=e.sentryKits??0,this.goldEver=e.goldEver??Math.max(e.gold,600),this.heroWaveSpawned&&this.wavesCleared===0&&!this.won&&!this.gameOver&&!(e.creatures??[]).some(i=>i.isHero)&&(this.wavesCleared=1,this.wavesCleared<ni&&(this.heroWaveSpawned=!1,this.heroWaveTimer=55,this.heroWarn30=!1,this.heroWarn10=!1));for(const i of this.creatures)this.renderer.removeEntityMesh(i.mesh),i.mesh.parent&&i.mesh.parent.remove(i.mesh);this.creatures=[];for(const i of e.creatures){const n=this.spawnCreature(i.kind,i.x,i.y);Number.isFinite(i.wx)&&Number.isFinite(i.wz)&&(n.wx=i.wx,n.wz=i.wz),n.hp=i.hp,n.maxHp=i.maxHp,n.level=i.level??1,n.goldCarried=i.goldCarried??0,n.hunger=i.hunger??0,n.sleepNeed=i.sleepNeed??0,n.trainNeed=i.trainNeed??0,n.mood=72,n.clampStats(),n.syncMesh(this.time)}const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);e.cam&&Number.isFinite(e.cam.tx)&&Number.isFinite(e.cam.tz)&&Number.isFinite(e.cam.cx)&&Number.isFinite(e.cam.cy)&&Number.isFinite(e.cam.cz)&&e.cam.cy>5?(this.camTarget.set(e.cam.tx,0,e.cam.tz),this.renderer.camera.position.set(e.cam.cx,e.cam.cy,e.cam.cz),this.renderer.camera.lookAt(this.camTarget)):(this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+6,34,t.z+22),this.renderer.camera.lookAt(this.camTarget)),this.gridDirty=!0}spawnCreature(e,t,i){const n=new l0(e,t,i,this.grid),s=fr[e],o=this.renderer.createEntityVisual(e,s.color,s.scale);n.setMesh(o);const a=o;return n.pickaxe=a.pickaxe??null,n.selectRing=a.selectRing??null,n.healthFlower=a.healthFlower??null,n.goldBag=a.goldBag??null,this.renderer.addEntityMesh(o),this.creatures.push(n),n}rebuild(){this.grid.refreshTorches(),this.renderer.rebuildGrid(this.grid),this.gridDirty=!1,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=.22}requestStructuralRebuild(){this.pendingStructuralRebuild=!0,this.gridDirty=!0}flushMarks(){this.marksDirty&&(this.renderer.syncMarkOverlay(this.grid),this.marksDirty=!1)}flushFog(){this.fogDirty&&(this.renderer.syncFogOverlay(this.grid),this.fogDirty=!1)}noteFogChange(e){e&&(this.fogDirty=!0)}safeMood(e,t){const i=Number.isFinite(e.mood)?e.mood:72,n=Number.isFinite(t)?t:i;e.mood=Math.max(0,Math.min(100,n))}pruneSelection(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero),this.selected&&(!this.selected.alive||this.selected.isHero)&&(this.selected=null),this.selected&&!this.selectedGroup.includes(this.selected)&&this.selectedGroup.push(this.selected),!this.selected&&this.selectedGroup.length&&(this.selected=this.selectedGroup[this.selectedGroup.length-1]),this.selectedGroup.length||(this.selected=null,this.hud.hideInspector())}catch(e){console.warn("[underkeep] pruneSelection failed",e),this.selected=null,this.selectedGroup=[];try{this.hud.hideInspector()}catch{}}}bindInput(e){window.addEventListener("keydown",n=>{this.keys.add(n.key.toLowerCase());const s=n.key.toLowerCase();if(n.shiftKey&&!n.metaKey&&!n.ctrlKey){if(s==="h"){n.preventDefault(),this.focusKeepPoint("heart");return}if(s==="f"){n.preventDefault(),this.focusKeepPoint("fight");return}if(s==="o"){n.preventDefault(),this.focusKeepPoint("portal");return}}const o={1:"select",2:"dig",3:"claim",4:"fortify",5:"treasury",6:"lair",7:"hatchery",8:"training",9:"library",0:"portal",g:"guard",u:"workshop",j:"prison",k:"torture",h:"graveyard",m:"temple",c:"combatPit",d:"door",f:"sentry",y:"rally",x:"sell"};if(o[n.key]&&(this.tool=o[n.key],this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="q"&&this.castSpell("createWorker"),n.key.toLowerCase()==="e"&&this.castSpell("speed"),n.key.toLowerCase()==="r"&&this.castSpell("lightning"),n.key.toLowerCase()==="t"&&this.castSpell("heal"),n.key.toLowerCase()==="p"&&this.castSpell("possess"),n.key.toLowerCase()==="i"&&this.castSpell("sight"),n.key.toLowerCase()==="z"&&this.castSpell("callToArms"),n.key.toLowerCase()==="b"&&(this.tool="bridgeWood",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="n"&&(this.tool="bridgeStone",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()===" "&&this.held&&(n.preventDefault(),this.dropHeld()),n.key==="Escape"){if(this.possessed){this.exitPossession();return}this.cancelBoxSelect(),this.clearSelection(),this.possessArmed=!1,this.sightArmed=!1,this.callArmed=!1}n.key.toLowerCase()==="l"&&!n.metaKey&&!n.ctrlKey&&(this.refreshRosterUi(!0),this.hud.openRoster())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),e.addEventListener("contextmenu",n=>n.preventDefault());const t=n=>n.preventDefault();e.addEventListener("gesturestart",t,{passive:!1}),e.addEventListener("gesturechange",t,{passive:!1}),e.addEventListener("mousedown",n=>{if(performance.now()<this.ignoreMouseUntil||this.gameOver)return;const s=this.pointerToTile(n,e);if(!s)return;const o=this.pointerToWorld(n,e)??new A;if(n.button===2){this.cancelBoxSelect(),this.handleSecondaryAt(s.x,s.y,o);return}if(n.button===0){if(this.tool==="select"&&!this.held){const a=this.creatureAt(s.x,s.y,o);if(!a||a.isHero){this.boxSelecting=!0,this.boxMoved=!1,this.boxStartClient={x:n.clientX,y:n.clientY},this.pendingPrimary={tx:s.x,ty:s.y,hit:o.clone(),shift:n.shiftKey};return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey);return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey)}}),e.addEventListener("mouseup",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.boxSelecting&&this.boxStartClient){const s=this.boxStartClient;if(this.boxMoved)this.selectCreaturesInScreenBox(e,s.x,s.y,n.clientX,n.clientY,n.shiftKey||!!this.pendingPrimary?.shift);else if(this.pendingPrimary){const o=this.pendingPrimary;this.handlePrimaryAt(o.tx,o.ty,o.hit,o.shift||n.shiftKey)}this.cancelBoxSelect()}this.paint=!1,this.lastPaint=null,this.flushMarks()}}),e.addEventListener("mouseleave",()=>{this.boxSelecting&&this.cancelBoxSelect()}),e.addEventListener("mousemove",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.updatePointerHover(n,e),this.boxSelecting&&this.boxStartClient&&this.tool==="select"){const s=n.clientX-this.boxStartClient.x,o=n.clientY-this.boxStartClient.y;Math.hypot(s,o)>8&&(this.boxMoved=!0,this.updateMarquee(this.boxStartClient.x,this.boxStartClient.y,n.clientX,n.clientY))}if(this.paint&&this.tool!=="select"){const s=this.pointerToTile(n,e);if(!s)return;(!this.lastPaint||this.lastPaint.x!==s.x||this.lastPaint.y!==s.y)&&(this.applyTool(s.x,s.y),this.lastPaint={...s})}if(this.held)try{const s=this.pointerToWorld(n,e);s&&Number.isFinite(s.x)&&Number.isFinite(s.z)&&(this.held.wx+=(s.x-this.held.wx)*.42,this.held.wz+=(s.z-this.held.wz)*.42)}catch(s){console.warn("[underkeep] held follow failed",s)}}}),e.addEventListener("wheel",n=>{n.preventDefault(),this.zoomPending+=-Math.sign(n.deltaY)*1.8},{passive:!1}),e.addEventListener("touchstart",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++){const a=n.changedTouches[o];this.activeTouches.set(a.identifier,{clientX:a.clientX,clientY:a.clientY})}const s=[...this.activeTouches.values()];if(s.length>=2){this.clearLongPress();const[o,a]=s;if(this.pinchStartDist=Math.hypot(o.clientX-a.clientX,o.clientY-a.clientY),this.pinchStartCamY=this.renderer.camera.position.y,this.touchMode==="tap"&&!this.touchMoved&&performance.now()-this.touchStartTime<280){const h=this.pointerToTile(this.touchStartClient,e);h&&this.handleSecondaryAt(h.x,h.y),this.touchMode="none",this.activeTouches.clear();return}this.touchMode="pinch",this.paint=!1;return}if(s.length===1){const o=s[0];this.touchStartClient={clientX:o.clientX,clientY:o.clientY},this.touchStartTime=performance.now(),this.touchMoved=!1,this.panAccum={x:0,y:0},this.touchMode="tap",this.clearLongPress(),this.longPressTimer=window.setTimeout(()=>{if(this.touchMode!=="tap"||this.touchMoved)return;this.touchMode="longpress";const a=this.pointerToTile(this.touchStartClient,e);a&&this.handleSecondaryAt(a.x,a.y);try{navigator.vibrate?.(15)}catch{}},450)}},{passive:!1}),e.addEventListener("touchmove",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let l=0;l<n.changedTouches.length;l++){const c=n.changedTouches[l];this.activeTouches.set(c.identifier,{clientX:c.clientX,clientY:c.clientY})}const s=[...this.activeTouches.values()];if(this.touchMode==="pinch"||s.length>=2){if(this.clearLongPress(),this.touchMode="pinch",s.length>=2){const[l,c]=s,u=Math.hypot(l.clientX-c.clientX,l.clientY-c.clientY);if(this.pinchStartDist>0){const f=u/this.pinchStartDist,g=this.renderer.camera,v=Ya.clamp(this.pinchStartCamY/f,10,48),m=v-g.position.y;if(Math.abs(m)>.01){const p=new A;g.getWorldDirection(p),g.position.y=v;const y=m*.35;g.position.x+=p.x*-y,g.position.z+=p.z*-y,g.lookAt(this.camTarget.x,0,this.camTarget.z)}}}return}if(s.length!==1)return;const o=s[0],a=o.clientX-this.touchStartClient.clientX,h=o.clientY-this.touchStartClient.clientY,d=Math.hypot(a,h);if(!this.touchMoved&&d>12)if(this.touchMoved=!0,this.clearLongPress(),this.tool!=="select"&&!this.held){this.touchMode="paint",this.paint=!0;const l=this.pointerToTile(o,e);l&&(this.applyTool(l.x,l.y),this.lastPaint={...l})}else this.held?this.touchMode="tap":this.touchMode="pan";if(this.touchMode==="paint"){const l=this.pointerToTile(o,e);l&&((!this.lastPaint||this.lastPaint.x!==l.x||this.lastPaint.y!==l.y)&&(this.applyTool(l.x,l.y),this.lastPaint={...l}),this.updatePointerHover(o,e))}else if(this.touchMode==="pan"){const l=o.clientX-(this.touchStartClient.clientX+this.panAccum.x),c=o.clientY-(this.touchStartClient.clientY+this.panAccum.y);this.panAccum.x=a,this.panAccum.y=h,this.panCameraByScreen(-l,-c)}else if(this.held){try{const l=this.pointerToWorld(o,e);l&&Number.isFinite(l.x)&&Number.isFinite(l.z)&&(this.held.wx+=(l.x-this.held.wx)*.42,this.held.wz+=(l.z-this.held.wz)*.42)}catch{}this.updatePointerHover(o,e)}else this.updatePointerHover(o,e)},{passive:!1}),e.addEventListener("touchend",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++)this.activeTouches.delete(n.changedTouches[o].identifier);if(this.touchMode==="pinch"){this.activeTouches.size<2&&(this.touchMode=this.activeTouches.size===1?"pan":"none",this.pinchStartDist=0),this.activeTouches.size===0&&(this.touchMode="none",this.paint=!1,this.lastPaint=null);return}if(this.activeTouches.size>0)return;const s=this.touchMode;if(this.clearLongPress(),s==="tap"&&!this.touchMoved&&!this.gameOver){const o=this.pointerToTile(this.touchStartClient,e),a=this.pointerToWorld(this.touchStartClient,e);o&&a&&this.handlePrimaryAt(o.x,o.y,a)}this.touchMode="none",this.paint=!1,this.lastPaint=null},{passive:!1}),e.addEventListener("touchcancel",n=>{for(let s=0;s<n.changedTouches.length;s++)this.activeTouches.delete(n.changedTouches[s].identifier);this.clearLongPress(),this.touchMode="none",this.paint=!1,this.lastPaint=null,this.pinchStartDist=0});const i=document.getElementById("pan-zone");if(i){let n=null;i.addEventListener("touchstart",s=>{s.preventDefault();const o=s.changedTouches[0];n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchmove",s=>{s.preventDefault();const o=s.changedTouches[0];if(!n){n={x:o.clientX,y:o.clientY};return}this.panCameraByScreen(-(o.clientX-n.x),-(o.clientY-n.y)),n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchend",()=>{n=null}),i.addEventListener("touchcancel",()=>{n=null})}}clearLongPress(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}handlePrimaryAt(e,t,i,n=!1){try{if(this.tool==="select"){if(this.possessed){this.possessMoveTo(e,t);return}if(this.held){this.dropHeldAt(e,t);return}if(this.sightArmed){this.sightArmed=!1,this.castSightAt(e,t);return}if(this.callArmed){this.callArmed=!1,this.musterAt(e,t);return}const s=this.creatureAt(e,t,i);if(this.possessArmed&&s&&!s.isHero){if(this.possessArmed=!1,this.mana<Nn){this.hud.say("Not enough mana to Possess.");return}this.mana-=Nn,this.enterPossession(s);return}if(s&&!s.isHero&&n){this.toggleSelectCreature(s);return}if(s&&s.isHero&&(s.knockedOut||s.isPrisoner)){this.pickUp(s);return}if(s&&s.isHero&&!s.knockedOut&&!s.isPrisoner&&this.selectedGroup.some(o=>o.alive&&!o.isWorker)){this.issueAttackMove(s.x,s.y,!0);return}if(s&&!s.isHero){this.selectCreature(s),this.pickUp(s);return}if(this.selectedGroup.some(o=>o.alive&&!o.held)&&(this.grid.isWalkable(e,t)||this.grid.get(e,t)?.kind===E.Heart)){this.issueAttackMove(e,t,!1);return}this.clearSelection()}else this.paint=!0,this.applyTool(e,t),this.lastPaint={x:e,y:t}}catch(s){console.warn("[underkeep] primary input failed",s)}}handleSecondaryAt(e,t,i){try{if(this.tool==="select"){let s=null;if(this.held&&!this.held.isHero?s=this.held:(s=this.creatureAt(e,t,i),(!s||s.isHero)&&this.selected&&this.selected.alive&&!this.selected.isHero&&(s=this.selected)),s&&!s.isHero){s.held||this.selectCreature(s),this.slap(s);return}}else if(this.held){this.dropHeld();return}const n=this.grid.get(e,t);n&&n.mark!==Ee.None&&(n.mark=Ee.None,this.marksDirty=!0,this.flushMarks())}catch(n){console.warn("[underkeep] secondary input failed",n)}}updatePointerHover(e,t){const i=this.pointerToTile(e,t);if(!i||!this.grid.inBounds(i.x,i.y)){this.renderer.setHover(0,0,!1),this.renderer.setKeeperHand(0,0,!1);return}const n=this.grid.tileToWorld(i.x,i.y);this.renderer.setHover(n.x,n.z,!0,this.toolColor());const s=this.pointerToWorld(e,t);s&&this.tool==="select"?(this.lastHand={x:s.x,z:s.z},this.renderer.setKeeperHand(s.x,s.z,!0,!!this.held)):this.renderer.setKeeperHand(0,0,!1);const o=this.grid.get(i.x,i.y);if(o){let a=o.room!==_.None?` · ${["","Treasury","Lair","Hatchery","Training","Library","Portal","Guard","Workshop","Prison","Torture Chamber","Graveyard","Temple","Combat Pit","Wagerden"][o.room]}`:"";if(o.room===_.Hatchery&&(a+=` · food ${Math.floor(this.hatcheryFood)}`),o.room===_.Workshop&&(a+=` · kits D${this.doorKits}/S${this.sentryKits}`),o.room===_.Lair||o.room===_.Hatchery||o.room===_.Library){const c=this.grid.largestContiguousRoom(o.room),u=cs(c);c>0&&(a+=` · size ${c}`,u>0&&(a+=` · +${Math.round(u*100)}% eff`))}if(o.room===_.Prison){const c=this.creatures.filter(u=>u.alive&&u.isPrisoner).length;a+=` · prisoners ${c}`}if(o.room===_.Graveyard&&(a+=` · corpses ${this.corpses.length}`),o.room===_.Temple&&(a+=` · praying ${this.templePrayCount}`),o.room===_.CombatPit){const c=this.creatures.filter(u=>u.alive&&!u.isHero&&u.job===k.Train&&this.grid.get(u.x,u.y)?.room===_.CombatPit).length;a+=` · sparring ${c}`}if(o.door===$e.Closed&&(a+=" · Door (closed)"),o.door===$e.Open&&(a+=" · Door (open)"),o.trap===pt.Sentry&&(a+=" · Sentry trap"),o.rally&&(a+=" · Rally flag"),o.room===_.Lair){const c=this.grid.countRoom(_.Lair);a+=` · beds ${this.countOccupiedBeds()}/${c}`}const h=o.digProgress>0?` · dig ${Math.floor(o.digProgress*100)}%`:"",d=o.kind===E.Gem?"Gem seam":o.kind===E.Gold?"Gold":o.kind===E.Earth?"Earth":o.kind===E.Rock?"Rock":o.kind===E.Lava?"Lava":o.kind===E.Water?"Water":o.kind===E.BridgeWood?"Wood Bridge":o.kind===E.BridgeStone?"Stone Bridge":E[o.kind];let l=`(${i.x},${i.y}) ${d}${o.fortified?" [fortified]":""}${a}${h}`;if(this.tool==="select"){const c=this.creatureAt(i.x,i.y);c&&!c.isHero?l+=` · ${c.kind} mood ${Math.floor(c.mood)} · eff ${Math.round(c.workEfficiency()*100)}%`:this.held&&(l+=" · drop here")}this.hud.setTooltip(l)}}panCameraByScreen(e,t){const i=this.renderer.camera,n=new A;i.getWorldDirection(n),n.y=0,n.normalize();const s=new A().crossVectors(n,new A(0,1,0)).normalize(),o=i.position.y*.0028,a=s.multiplyScalar(e*o).add(n.multiplyScalar(-t*o));i.position.add(a),this.camTarget.add(a),i.lookAt(this.camTarget.x,0,this.camTarget.z)}zoomBy(e){this.zoomPending+=e}applyZoom(e){const t=this.renderer.camera,i=new A;t.getWorldDirection(i),t.position.addScaledVector(i,e),t.position.y=Ya.clamp(t.position.y,10,48),t.lookAt(this.camTarget.x,0,this.camTarget.z)}pointerNdc(e,t){const i=t.getBoundingClientRect();return{nx:(e.clientX-i.left)/i.width*2-1,ny:-((e.clientY-i.top)/i.height)*2+1}}pointerToWorld(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?new A(s.x,0,s.z):null}pointerToTile(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?typeof s.tileX=="number"&&typeof s.tileY=="number"?{x:s.tileX,y:s.tileY}:this.grid.worldToTile(s.x,s.z):null}toolColor(){switch(this.tool){case"dig":return 16729122;case"claim":return 4491519;case"fortify":return 11184810;case"select":return 16764006;case"bridgeWood":return 12615744;case"bridgeStone":return 8425640;default:return 8978278}}creatureAt(e,t,i){let n=null,s=1.85;for(const o of this.creatures){if(!o.alive||o.held)continue;let a=Math.hypot(o.x-e,o.y-t);if(i){const h=Math.hypot(o.wx-i.x,o.wz-i.z)/Xe;a=Math.min(a,h)}a<s&&(s=a,n=o)}return n}hideMarquee(){this.marqueeEl&&(this.marqueeEl.classList.add("hidden"),this.marqueeEl.style.width="0",this.marqueeEl.style.height="0")}cancelBoxSelect(){this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee()}updateMarquee(e,t,i,n){if(!this.marqueeEl)return;const s=Math.min(e,i),o=Math.min(t,n),a=Math.abs(i-e),h=Math.abs(n-t);this.marqueeEl.classList.remove("hidden"),this.marqueeEl.style.left=`${s}px`,this.marqueeEl.style.top=`${o}px`,this.marqueeEl.style.width=`${a}px`,this.marqueeEl.style.height=`${h}px`}clearSelection(){for(const e of this.selectedGroup)e.selected=!1;this.selected&&(this.selected.selected=!1),this.selected=null,this.selectedGroup=[],this.hud.hideInspector()}syncSelectionPrimary(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero);for(const e of this.creatures)this.selectedGroup.includes(e)||(e.selected=!1);for(const e of this.selectedGroup)e.selected=!0;this.selected=this.selectedGroup.length?this.selectedGroup[this.selectedGroup.length-1]:null,this.refreshInspector()}catch(e){console.warn("[underkeep] syncSelectionPrimary failed",e),this.pruneSelection()}}selectCreature(e){if(!(!e||!e.alive||e.isHero)){for(const t of this.selectedGroup)t.selected=!1;this.selectedGroup=[e],this.selected=e,e.selected=!0,this.refreshInspector()}}toggleSelectCreature(e){if(!e||!e.alive||e.isHero)return;const t=this.selectedGroup.indexOf(e);t>=0?(e.selected=!1,this.selectedGroup.splice(t,1)):(this.selectedGroup.push(e),e.selected=!0,this.mentioneOnce("groupSelect",z.groupSelect)),this.syncSelectionPrimary()}selectCreaturesInScreenBox(e,t,i,n,s,o){try{const a=Math.min(t,n),h=Math.max(t,n),d=Math.min(i,s),l=Math.max(i,s);if(h-a<6&&l-d<6)return;const c=this.renderer.camera,u=e.getBoundingClientRect(),f=[],g=new A;for(const v of this.creatures){if(!v.alive||v.isHero||v.held||!Number.isFinite(v.wx)||!Number.isFinite(v.wz)||(g.set(v.wx,.6,v.wz),g.project(c),!Number.isFinite(g.x)||!Number.isFinite(g.y)))continue;const m=(g.x+1)/2*u.width+u.left,p=(-g.y+1)/2*u.height+u.top;m>=a&&m<=h&&p>=d&&p<=l&&f.push(v)}if(!o){for(const v of this.selectedGroup)v.selected=!1;this.selectedGroup=[]}for(const v of f)this.selectedGroup.includes(v)||this.selectedGroup.push(v),v.selected=!0;f.length&&this.mentioneOnce("groupSelect",z.groupSelect),this.syncSelectionPrimary()}catch(a){console.warn("[underkeep] box select failed",a)}}issueAttackMove(e,t,i=!1){try{this.pruneSelection();const n=this.selectedGroup.filter(o=>o.alive&&!o.isHero&&!o.isWorker&&!o.held);if(!n.length){const o=this.selectedGroup.filter(a=>a.alive&&!a.isHero&&!a.held);if(!o.length)return;for(const a of o)try{a.bedKey&&this.releaseBed(a),a.job=k.Wander,a.jobTarget={x:e,y:t},a.setPath(this.grid.findPath(a.x,a.y,e,t))}catch(h){console.warn("[underkeep] move order unit failed",h)}this.hud.sayNow("Move order issued.");return}let s=0;for(const o of n)try{o.bedKey&&this.releaseBed(o);const a=s%3-1,h=Math.floor(s/3)%2;s++;let d=e+a,l=t+h;this.grid.isWalkable(d,l)||(d=e,l=t),o.job=k.AttackMove,o.jobTarget={x:d,y:l};const c=this.grid.findPath(Number.isFinite(o.x)?o.x:d,Number.isFinite(o.y)?o.y:l,d,l);c?o.setPath(c):o.setPath(null),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+3),o.clampStats()}catch(a){console.warn("[underkeep] attack-move unit failed",a)}try{const o=this.grid.tileToWorld(e,t);Number.isFinite(o.x)&&Number.isFinite(o.z)&&this.renderer.spawnFx(new A(o.x,.9,o.z),i?16736320:16763972,.55)}catch{}this.hud.sayNow(i?z.attackHero:z.attackMove),this.refreshInspector()}catch(n){console.warn("[underkeep] issueAttackMove failed",n)}}refreshInspector(){try{const e=this.held??this.selected;if(!e||!e.alive){this.hud.hideInspector();return}e.clampStats();const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch",hero_knight:"Hero Knight",hero_archer:"Hero Archer"},i=typeof e.job=="string"&&e.job.length>0?e.job:"idle",n=e.held?"Held":e.isPrisoner?e.convertProgress>0?`Converting ${Math.floor(e.convertProgress)}%`:"Prisoner":e.knockedOut?"Knocked out":i===k.AttackMove?"Attack":i===k.Pray?"Praying":i===k.DragWounded?"Dragging wounded":i===k.Flee?"Fleeing":i.charAt(0).toUpperCase()+i.slice(1),s=this.selectedGroup.filter(a=>a.alive).length,o=t[e.kind]??String(e.kind);this.hud.showInspector({kind:s>1?`${o} (+${s-1})`:o,job:s>1?`${n} · squad ${s}`:n,hp:e.hp,maxHp:e.maxHp,hunger:e.hunger,tired:e.sleepNeed,mood:e.mood,efficiency:e.workEfficiency(),held:e.held,worker:e.isWorker})}catch(e){console.warn("[underkeep] refreshInspector failed",e)}}applyTool(e,t){const i=this.grid.get(e,t);if(i)if(this.tool==="sell")this.sellAt(e,t);else if(this.tool==="dig")if(It(i.kind)){i.fortified&&(i.fortified=!1),i.mark=Ee.Dig,i.digProgress<=0&&(i.digProgress=0);const n=this.grid.findDiggableFace(e,t);if(n&&(n.x!==e||n.y!==t)){const s=this.grid.get(n.x,n.y);s&&It(s.kind)&&(s.fortified&&(s.fortified=!1),s.mark=Ee.Dig)}this.marksDirty=!0}else!this.lastPaint&&i.kind===E.Rock&&this.hud.sayNow(z.cannotDig);else if(this.tool==="claim")i.kind===E.Dirt?(i.mark=Ee.Claim,this.marksDirty=!0):!this.lastPaint&&i.kind!==E.Claimed&&i.kind!==E.Heart&&this.hud.sayNow(z.cannotClaim);else if(this.tool==="fortify")i.kind===E.Earth&&this.grid.hasAdjacentClaimed(e,t)?(i.mark=Ee.Fortify,this.marksDirty=!0):!this.lastPaint&&(i.kind===E.Gold||i.kind===E.Gem||i.kind===E.Rock||i.fortified)&&this.hud.sayNow(z.cannotFortify);else if(this.tool==="bridgeWood"||this.tool==="bridgeStone")this.placeBridge(e,t,this.tool==="bridgeStone");else if(this.tool==="door"){if(this.grid.canPlaceDoor(e,t))if(i.door===$e.None){if(!this.spendDoorOrSentry("door"))return;i.door=$e.Closed,this.requestStructuralRebuild(),this.mentioneOnce("doorBuilt",z.doorBuilt),this.saveNow()}else i.door===$e.Closed?(i.door=$e.Open,this.requestStructuralRebuild(),this.hud.say(z.doorOpen),this.saveNow()):(i.door=$e.Closed,this.requestStructuralRebuild(),this.hud.say(z.doorClosed),this.saveNow())}else if(this.tool==="sentry"){if(i.kind===E.Claimed&&i.trap===pt.None){if(!this.spendDoorOrSentry("sentry"))return;i.trap=pt.Sentry,this.requestStructuralRebuild(),this.mentioneOnce("sentryBuilt",z.sentryBuilt),this.saveNow()}}else if(this.tool==="rally"){if(i.kind===E.Claimed){if(i.rally){i.rally=!1,this.hud.say(z.rallyCleared),this.requestStructuralRebuild(),this.saveNow();return}if(this.gold<ir)return;this.gold-=ir;for(const n of this.grid.tiles)n.rally=!1;i.rally=!0,this.requestStructuralRebuild(),this.hud.say(z.rallyPlanted);for(const n of this.creatures)if(!(!n.alive||n.isHero||n.isWorker||n.held)&&(n.kind===$.Rattlekin||n.kind===$.Emberling||n.kind===$.Skitterwing)){n.job=k.Guard,n.jobTarget={x:e,y:t};const s=this.grid.findPath(n.x,n.y,e,t);s&&n.setPath(s)}this.saveNow()}}else{const s={treasury:_.Treasury,lair:_.Lair,hatchery:_.Hatchery,training:_.Training,library:_.Library,portal:_.Portal,guard:_.Guard,workshop:_.Workshop,prison:_.Prison,torture:_.Torture,graveyard:_.Graveyard,temple:_.Temple,combatPit:_.CombatPit,casino:_.Casino}[this.tool];if(s){if(i.kind!==E.Claimed||i.room!==_.None){this.lastPaint||this.hud.sayNow(z.cannotRoom);return}const o=rh[s];if(this.gold<o){this.lastPaint||this.hud.sayNow(z.needGold.replace("%g",String(o)));return}this.gold>=o&&(this.gold-=o,i.room=s,this.requestStructuralRebuild(),this.mentioneOnce("firstRoom",z.firstRoom),s===_.Portal&&this.mentioneOnce("portal",z.portal),s===_.Lair&&this.mentioneOnce("lairBuilt",z.lairBuilt),s===_.Hatchery&&(this.mentioneOnce("hatcheryBuilt",z.hatcheryBuilt),this.hatcheryFood=Math.max(this.hatcheryFood,6)),s===_.Guard&&this.mentioneOnce("guardBuilt",z.guardBuilt),s===_.Workshop&&this.mentioneOnce("workshopBuilt",z.workshopBuilt),s===_.Prison&&this.mentioneOnce("prisonBuilt",z.prisonBuilt),s===_.Torture&&this.mentioneOnce("tortureBuilt",z.tortureBuilt),s===_.Graveyard&&this.mentioneOnce("graveyardBuilt",z.graveyardBuilt),s===_.Temple&&this.mentioneOnce("templeBuilt",z.templeBuilt),s===_.CombatPit&&this.mentioneOnce("combatPitBuilt",z.combatPitBuilt),s===_.Casino&&this.mentioneOnce("casinoBuilt",z.casinoBuilt),this.saveNow())}}}pickUp(e){try{if(!e||!e.alive||e.isHero&&!e.knockedOut&&!e.isPrisoner)return;e.bedKey&&this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null,e.clampStats(),e.held=!0,e.setPath(null),e.job=k.Idle,e.jobTarget=null,e.workTimer=0,this.held=e,this.selectCreature(e);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new A(t,1,i),16768392,.45),this.mentioneOnce("pickUp",z.pickUp),this.refreshInspector()}catch(t){console.warn("[underkeep] pickUp failed",t);try{e&&(e.held=!1,this.held===e&&(this.held=null))}catch{}}}dropHeld(){if(!this.held)return;const e=this.grid.worldToTile(this.held.wx,this.held.wz);this.dropHeldAt(e.x,e.y)}dropHeldAt(e,t){const i=this.held;if(i)try{if(!this.grid.isWalkable(e,t)&&this.grid.get(e,t)?.kind!==E.Heart){let a=!1;for(let h=0;h<4&&!a;h++)for(let d=-h;d<=h&&!a;d++)for(let l=-h;l<=h&&!a;l++)this.grid.isWalkable(e+l,t+d)&&(e=e+l,t=t+d,a=!0);if(!a)return}i.held=!1,i.x=e,i.y=t;const n=this.grid.tileToWorld(e,t);i.wx=n.x,i.wz=n.z;const s=this.grid.get(e,t)?.kind;if(i.isWorker&&s===E.Heart){const a=this.workerRefundAmount();this.workerCostScale=Math.max(0,this.workerCostScale-1);const h=this.addGold(a);this.hud.sayNow(z.workerRefund.replace("%g",String(h))),this.renderer.spawnFx(new A(n.x,1.1,n.z),16769152,.8),i.alive=!1;try{this.renderer.removeEntityMesh(i.mesh)}catch{}this.held=null,this.refreshInspector(),this.hud.setWorkerCost(this.workerCost());return}const o=this.grid.get(e,t);if(i.isHero&&(i.knockedOut||i.isPrisoner)&&o?.room===_.Prison){this.imprisonCreature(i,e,t),this.held=null,this.refreshInspector();return}if(i.isHero&&(i.knockedOut||i.isPrisoner)&&o?.room===_.Torture){this.imprisonCreature(i,e,t),i.convertProgress=Math.max(i.convertProgress,25),this.hud.sayNow(z.converting),this.held=null,this.refreshInspector();return}if(!i.isHero&&i.knockedOut&&o?.room===_.Lair){i.knockedOut=!1,i.hp=Math.max(i.hp,Math.floor(i.maxHp*.25)),i.job=k.Sleep,i.jobTarget={x:e,y:t},i.bedKey=`${e},${t}`,this.bedOwners.set(i.bedKey,i.id),i.setPath(null),this.hud.sayNow(z.lairResting),this.held=null,this.refreshInspector();return}if(!i.isHero){const a=o?.room===_.CombatPit;this.creatures.some(d=>d.alive&&d!==i&&d.isHero!==i.isHero&&!d.knockedOut&&!d.isPrisoner&&Math.hypot(d.x-e,d.y-t)<2.5)&&!a&&(i.stunTimer=1.5),this.safeMood(i,(Number.isFinite(i.mood)?i.mood:72)+4)}this.held=null,i.clampStats(),this.mentioneOnce("drop",z.drop),this.refreshInspector()}catch(n){console.warn("[underkeep] dropHeldAt failed",n);try{i&&(i.held=!1,i.clampStats()),this.held=null}catch{}}}slap(e){try{if(!e||!e.alive||e.isHero)return;e.clampStats();const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;if(this.renderer.spawnFx(new A(t,.7,i),16772744,.7),this.renderer.spawnFx(new A(t,1.15,i),16755268,.55),this.renderer.spawnDigDebris(t,i,16768392),e.isWorker){e.slapWorkBuff=Math.max(e.slapWorkBuff,10),e.speedBuff=Math.max(e.speedBuff,3.2),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+4),this.hud.sayNow(z.slapWork),this.refreshInspector();return}if(e.kind===$.Thornwitch){e.speedBuff=Math.max(e.speedBuff,2.4),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+14),this.hud.sayNow(z.slapWitch),this.refreshInspector();return}this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)-10),e.stunTimer=Math.max(e.stunTimer,.45),this.hud.sayNow(z.slapAnger),this.refreshInspector()}catch(t){console.warn("[underkeep] slap failed",t);try{this.hud.sayNow(z.slap)}catch{}}}spendDoorOrSentry(e){if(e==="door"&&this.doorKits>0)return this.doorKits--,this.hud.sayNow(`Door kit spent (${this.doorKits} left).`),!0;if(e==="sentry"&&this.sentryKits>0)return this.sentryKits--,this.hud.sayNow(`Sentry kit spent (${this.sentryKits} left).`),!0;const t=this.grid.countRoom(_.Workshop)>0,i=e==="door"?uo:fo,n=t?Math.floor(i*.7):i;return this.gold<n?(this.hud.sayNow(t?`Need ${n}g (Workshop discount) or a ${e} kit.`:`Need ${n} gold — or craft kits in a Workshop.`),!1):(this.gold-=n,t&&this.hud.say(`Workshop discount — ${e} for ${n}g.`),!0)}syncMissionHud(){this.hud.setObjective(`W${this.wavesCleared}/${ni} · ${Math.floor(this.gold)}/${on}g`),this.hud.setKits(this.doorKits,this.sentryKits),this.hud.setWorkerCost(this.workerCost())}updateMinimap(){this.hud.drawMinimap({width:this.grid.width,height:this.grid.height,heartX:this.grid.heartPos.x,heartY:this.grid.heartPos.y,kindAt:(e,t)=>this.grid.get(e,t)?.kind??0,exploredAt:(e,t)=>!!this.grid.get(e,t)?.explored,roomAt:(e,t)=>this.grid.get(e,t)?.room??0})}checkMissionWin(){if(!(this.won||this.gameOver)){if(this.gold>=on){this.won=!0,this.gameOver=!0,this.hud.sayNow(z.winGold),this.hud.showOverlay("Victory — Gold",z.winGold+" The Underkeep gleams.","Reign Again");return}this.wavesCleared>=ni&&(this.won=!0,this.gameOver=!0,this.hud.sayNow(z.winWaves),this.hud.showOverlay("Victory",z.winWaves+" The dark endures.","Reign Again"))}}workerCost(){return go+this.workerCostScale*50}workerRefundAmount(){return this.workerCostScale>0?Math.floor((go+(this.workerCostScale-1)*50)/2):Math.floor(go/2)}vaultCap(){return r0(this.grid.countRoom(_.Treasury))}addGold(e){const t=Math.max(0,Math.floor(e));if(t<=0)return 0;const i=Math.max(0,this.vaultCap()-this.gold),n=Math.min(t,i);return this.gold+=n,this.gold>this.goldEver&&(this.goldEver=this.gold),n}paydayDueNow(){let e=0;for(const t of this.creatures)!t.alive||t.isHero||t.isWorker||(e+=fr[t.kind].goldWage);return e}attractedCount(){return this.creatures.filter(e=>e.alive&&!e.isHero&&!e.isWorker).length}portalCap(){return o0(this.grid.countRoom(_.Portal))}sellAt(e,t){const i=this.grid.get(e,t);if(!i)return;if(i.kind===E.Heart){this.lastPaint||this.hud.sayNow(z.cannotSell);return}if(i.door!==$e.None){i.door=$e.None,this.addGold(Math.floor(uo*.5)),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(Math.floor(uo*.5)))),this.saveNow();return}if(i.trap!==pt.None){i.trap=pt.None,this.addGold(Math.floor(fo*.5)),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(Math.floor(fo*.5)))),this.saveNow();return}if(i.rally){i.rally=!1,this.addGold(Math.floor(ir*.5)),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(Math.floor(ir*.5)))),this.saveNow();return}if(i.room===_.None){this.lastPaint||this.hud.sayNow(z.cannotSell);return}const n=Math.floor(rh[i.room]*.5);i.room=_.None,this.addGold(n),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(n))),this.saveNow()}castSightAt(e,t){if(this.mana<nr){this.hud.sayNow("Not enough mana for Sight of Evil.");return}this.mana-=nr,this.grid.revealAround(e,t,4)&&(this.fogDirty=!0);const n=this.grid.tileToWorld(e,t);this.renderer.spawnFx(new A(n.x,1.4,n.z),8969727,1.1),this.renderer.spawnFx(new A(n.x,.4,n.z),4219072,.7),this.hud.sayNow(z.sightCast)}musterAt(e,t){if(this.mana<sr){this.hud.sayNow("Not enough mana to Call to Arms.");return}const i=this.grid.get(e,t);if(!(this.grid.isWalkable(e,t)||i?.kind===E.Heart)){this.hud.sayNow("Call to Arms needs claimed land."),this.callArmed=!0;return}this.mana-=sr;for(const s of this.grid.tiles)s.rally=!1;i&&i.kind===E.Claimed&&(i.rally=!0),this.requestStructuralRebuild();for(const s of this.creatures)if(!(!s.alive||s.isHero||s.isWorker||s.held||s.knockedOut)&&(s.kind===$.Rattlekin||s.kind===$.Emberling||s.kind===$.Skitterwing||s.kind===$.Thornwitch||s.kind===$.Bonewretch)){s.job=k.Guard,s.jobTarget={x:e,y:t};const o=this.grid.findPath(s.x,s.y,e,t);o&&s.setPath(o)}this.hud.sayNow(z.callToArms),this.saveNow()}focusKeepPoint(e){let t=this.grid.heartPos.x,i=this.grid.heartPos.y;if(e==="portal"){const o=this.grid.tiles.find(a=>a.room===_.Portal);if(o)t=o.x,i=o.y;else{this.hud.sayNow("No Portal to focus.");return}}else if(e==="fight"){let o=null,a=1/0;for(const h of this.creatures){if(!h.alive||!(h.job===k.Fight||h.isHero&&!h.knockedOut||h.job===k.AttackMove))continue;const l=Math.hypot(h.x-this.grid.heartPos.x,h.y-this.grid.heartPos.y);l<a&&(a=l,o=h)}if(!o){this.hud.sayNow("No fight to focus.");return}t=Math.round(o.x),i=Math.round(o.y)}const n=this.grid.tileToWorld(t,i);this.camTarget.set(n.x,0,n.z);const s=this.renderer.camera;s.position.set(n.x+4,Math.max(16,s.position.y),n.z+14),s.lookAt(this.camTarget)}castSpell(e){if(!this.gameOver){if(e==="createWorker"){const t=this.workerCost();if(this.gold<t){this.hud.sayNow(`Need ${t} gold to forge a Scrabbler.`);return}const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=i,o=n;for(let l=1;l<6;l++)for(let c=-l;c<=l;c++)for(let u=-l;u<=l;u++)if(this.grid.isWalkable(i+u,n+c)){s=i+u,o=n+c,l=99;break}this.gold-=t,this.workerCostScale++;const a=this.spawnCreature($.Scrabbler,s,o);a.pulseTint("heal",.9),a.speedBuff=Math.max(a.speedBuff,2.5);const h=this.grid.tileToWorld(s,o);this.renderer.spawnFx(new A(h.x,.6,h.z),8978272,.85),this.renderer.spawnFx(new A(h.x,1.2,h.z),16769152,.7),this.renderer.spawnCareSparks(h.x,h.z,"heal",!0);const d=this.workerCost();this.hud.sayNow(z.workerSpawn.replace("%g",String(t)).replace("%n",String(d))),this.hud.say(z.worker),this.hud.setWorkerCost(d);return}if(e==="speed"){if(this.mana<vo)return;this.mana-=vo;for(const t of this.creatures)t.alive&&!t.isHero&&(t.speedBuff=Math.max(t.speedBuff,6));this.hud.say(z.speed);return}if(e==="lightning"){if(this.mana<xo)return;const t=this.creatures.filter(a=>a.alive&&a.isHero&&!a.knockedOut&&!a.isPrisoner);if(!t.length)return;this.mana-=xo;const i=t.reduce((a,h)=>{const d=Math.hypot(a.x-this.grid.heartPos.x,a.y-this.grid.heartPos.y),l=Math.hypot(h.x-this.grid.heartPos.x,h.y-this.grid.heartPos.y);return d<l?a:h}),n=45+this.researchRank*12,s=i.alive;i.takeDamage(n),s&&!i.alive&&(this.grid.countRoom(_.Prison)>0?(i.alive=!0,i.hp=1,i.knockedOut=!0,i.job=k.Idle,i.jobTarget=null,i.setPath(null),this.hud.sayNow(z.heroKnocked)):this.spawnCorpse(i.x,i.y,!0));const o=new A(this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).x,4,this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).z);this.renderer.spawnLightning(o,new A(i.wx,1,i.wz)),this.hud.say(z.lightning);return}if(e==="heal"){if(!this.healUnlocked){this.hud.say("Heal is sealed. Staff a Library with Gravemages to research it.");return}const t=30;if(this.mana<t)return;this.mana-=t;let i=0;for(const n of this.creatures)!n.alive||n.isHero||n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+35+this.researchRank*8),n.pulseTint("heal",1.1),this.renderer.spawnCareSparks(n.wx,n.wz,"heal",!1),i++);this.hud.say(i?z.heal:"No wounds to mend — for now.");return}if(e==="possess"){if(this.possessed){this.exitPossession();return}if(this.mana<Nn){this.hud.say("Not enough mana to Possess.");return}const t=(this.held&&this.held.alive&&!this.held.isHero?this.held:null)||(this.selected&&this.selected.alive&&!this.selected.isHero?this.selected:null);if(t){this.mana-=Nn,this.held===t&&(t.held=!1,this.held=null),this.enterPossession(t);return}this.possessArmed=!0,this.hud.say(z.possessArm),this.hud.sayNow("Possess armed — click a minion to ride their senses. Esc exits.");return}if(e==="sight"){if(this.mana<nr){this.hud.sayNow("Not enough mana for Sight of Evil.");return}this.sightArmed=!0,this.callArmed=!1,this.possessArmed=!1,this.hud.sayNow(z.sightArm);return}if(e==="callToArms"){if(this.mana<sr){this.hud.sayNow("Not enough mana to Call to Arms.");return}this.callArmed=!0,this.sightArmed=!1,this.possessArmed=!1,this.hud.sayNow("Call to Arms armed — click claimed land to plant the banner.");return}}}maxMana(){return av+Math.floor(this.grid.countClaimed()*.5)}preparePass4Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(h,d,l=_.None)=>{const c=this.grid.get(h,d);!c||c.kind===E.Heart||(c.kind=E.Claimed,c.claimedProgress=1,c.mark=Ee.None,c.digProgress=0,c.fortified=!1,c.room=l)};for(let h=e-1;h<=e+5;h++)for(let d=t-1;d<=t+4;d++)i(h,d);i(e+2,t,_.Treasury),i(e+3,t,_.Treasury),i(e+2,t+1,_.Lair),i(e+3,t+1,_.Lair),i(e+2,t+2,_.Training),i(e+3,t+2,_.Training),i(e+4,t,_.Hatchery),i(e+4,t+1,_.Library),i(e+4,t+2,_.Portal);const n=t-3;for(let h=0;h<2;h++){const d=this.grid.get(e-1+h,n);d&&(d.kind=E.Rock,d.fortified=!1,d.mark=Ee.None,d.room=_.None,d.digProgress=0,d.goldAmount=0)}for(let h=0;h<2;h++){const d=this.grid.get(e+1+h,n);d&&(d.kind=E.Earth,d.fortified=!1,d.mark=Ee.Dig,d.digProgress=h===0?.4:.15,d.room=_.None,d.goldAmount=0)}for(let h=0;h<3;h++){const d=this.grid.get(e+3+h,n);d&&(d.kind=E.Gold,d.goldAmount=400,d.fortified=!1,d.mark=Ee.Dig,d.digProgress=.08,d.room=_.None)}for(let h=e-1;h<=e+5;h++)i(h,t-2);const s=this.creatures.filter(h=>h.isWorker&&h.alive),o={x:e+1,y:n};for(let h=0;h<s.length;h++){const d=s[h],l=e+h%3,c=t-2,u=this.grid.tileToWorld(l,c);d.x=l,d.y=c,d.wx=u.x+(h-1)*.15,d.wz=u.z,d.job=k.Dig,d.jobTarget=o,d.workTimer=.25,d.digAnim=.4+h*.35,d.setPath(null);const f=this.grid.tileToWorld(o.x,o.y);if(d.mesh.lookAt(f.x,d.mesh.position.y,f.z),d.syncMesh(this.time+.5),d.pickaxe){const g=Math.sin(d.digAnim*11);d.pickaxe.rotation.x=-.9+g*1.35,d.pickaxe.rotation.z=.15+g*.55,d.pickaxe.visible=!0}d.selectRing&&(d.selectRing.visible=!0)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.saveNow();const a=this.grid.tileToWorld(e+2,t);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,24,a.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass5bShot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,h=_.None)=>{const d=this.grid.get(o,a);!d||d.kind===E.Heart||(d.kind=E.Claimed,d.claimedProgress=1,d.mark=Ee.None,d.digProgress=0,d.fortified=!1,d.room=h)};for(let o=e-1;o<=e+5;o++)for(let a=t-1;a<=t+4;a++)i(o,a);i(e+2,t+1,_.Lair),i(e+3,t+1,_.Lair),i(e+4,t,_.Hatchery),i(e+4,t+1,_.Hatchery),this.hatcheryFood=6,this.spikeNeedsForRoom(_.Lair),this.spikeNeedsForRoom(_.Hatchery);const n=this.creatures.filter(o=>o.isWorker&&o.alive);if(n[0]){const o=n[0],a=e+2,h=t+1,d=this.grid.tileToWorld(a,h);o.x=a,o.y=h,o.wx=d.x,o.wz=d.z,o.hp=o.maxHp*.45,o.sleepNeed=80,o.hunger=10;const l=`${a},${h}`;this.bedOwners.set(l,o.id),o.bedKey=l,o.job=k.Sleep,o.jobTarget={x:a,y:h},o.restHealAcc=1.7,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"heal",!0),o.pulseTint("heal",2.2)}if(n[1]){const o=n[1],a=e+4,h=t,d=this.grid.tileToWorld(a,h);o.x=a,o.y=h,o.wx=d.x,o.wz=d.z,o.hunger=60,o.job=k.Eat,o.jobTarget={x:a,y:h},o.eatAnnounced=!0,o.eatAnim=2.5,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"feast",!0),o.pulseTint("feast",2.2)}if(n[2]){const o=n[2],a=this.grid.tileToWorld(e+1,t+2);o.x=e+1,o.y=t+2,o.wx=a.x,o.wz=a.z,o.hunger=5,o.sleepNeed=5,o.job=k.Idle,o.setPath(null)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.hud.setTooltip(`(${e+2},${t+1}) Claimed · Lair · beds ${this.countOccupiedBeds()}/2`),this.hud.say(z.feasting),this.hud.say(z.bedClaim),this.hud.say(z.lairResting);const s=this.grid.tileToWorld(e+3,t+1);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,22,s.z+12),this.renderer.camera.lookAt(this.camTarget)}preparePass61Shot(){this.preparePass5bShot();const e=this.creatures.filter(i=>i.isWorker&&i.alive),t=e[2]??e[0];if(t){t.mood=38,t.hunger=55,t.sleepNeed=40,t.hp=t.maxHp*.7,this.selectCreature(t);const i=e.find(s=>s!==t&&s.job!==k.Sleep)??e[1];if(i){this.pickUp(i);const s=this.grid.tileToWorld(t.x,t.y);i.wx=s.x+1.2,i.wz=s.z+.4,i.syncMesh(this.time)}this.refreshInspector();const n=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,18,n.z+11),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.pickUp)}}preparePass61bShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job!==k.Sleep&&s.job!==k.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,this.held=null;for(const s of this.creatures)s.held=!1;this.selectCreature(i);const n=this.grid.tileToWorld(i.x,i.y);if(this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="efficiency")this.hud.sayNow(z.sluggishDig);else{const s=i.mood;this.slap(i),i.mood=s,this.refreshInspector(),e==="both"&&this.hud.sayNow(z.slap)}}preparePass61cShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(o=>o.isWorker&&o.alive),i=t.find(o=>o.job!==k.Sleep&&o.job!==k.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,i.clampStats(),this.mana=Math.max(0,this.mana),this.held=null;for(const o of this.creatures)o.held=!1;this.pickUp(i);const n=this.grid.tileToWorld(i.x,i.y);if(i.wx=n.x+.8,i.wz=n.z+.3,i.syncMesh(this.time),this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="pick"){this.hud.sayNow(z.sluggishDig),this.refreshInspector();return}const s=i.mood;this.slap(i),i.mood=s,i.clampStats(),this.refreshInspector(),this.hud.sayNow(z.slap)}preparePass5cShot(e="both"){this.preparePass5bShot();const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job===k.Sleep),n=t.find(s=>s.job===k.Eat);if(i&&(e==="both"||e==="heal")){this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0),i.pulseTint("heal",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0)}if(n&&(e==="both"||e==="feast")){this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0),n.pulseTint("feast",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0)}if(e==="heal"&&i){const s=this.grid.tileToWorld(i.x,i.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.lairResting)}else if(e==="feast"&&n){const s=this.grid.tileToWorld(n.x,n.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.feasting)}}preparePass3Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=[];for(let a=e-6;a<=e-3;a++)for(let h=t-1;h<=t+1;h++){const d=this.grid.get(a,h);!d||d.kind===E.Rock||d.kind===E.Heart||(d.kind=E.Claimed,d.claimedProgress=1,d.mark=Ee.None,d.digProgress=0,d.fortified=!1,i.push({x:a,y:h}))}for(const a of i.slice(0,2)){const h=this.grid.get(a.x,a.y);h.room=_.Treasury}for(let a=t-1;a<=t+1;a++){const h=this.grid.get(e-2,a);h&&h.kind!==E.Heart&&(h.kind=E.Dirt,h.room=_.None,h.mark=Ee.None)}const n=[{x:e-1,y:t-4},{x:e,y:t-4},{x:e+1,y:t-4},{x:e-1,y:t-5}];for(const[a,h]of n.entries()){const d=this.grid.get(h.x,h.y);d&&(d.kind=E.Earth,d.fortified=!1,d.mark=Ee.Dig,d.digProgress=a===1?.72:a===0?.45:a===2?.28:.12,d.room=_.None)}for(let a=t-3;a<=t-1;a++)for(let h=e-1;h<=e+1;h++){const d=this.grid.get(h,a);d&&d.kind!==E.Heart&&d.kind!==E.Rock&&(d.kind===E.Earth||d.kind===E.Gold)&&(d.kind=E.Claimed,d.claimedProgress=1,d.mark=Ee.None,d.digProgress=0)}const s=this.creatures.filter(a=>a.isWorker&&a.alive);for(let a=0;a<s.length;a++){const h=s[a],d=e-1+a%3,l=t-3,c=this.grid.tileToWorld(d,l);h.x=d,h.y=l,h.wx=c.x,h.wz=c.z,h.job=k.Idle,h.jobTarget=n[Math.min(a,n.length-1)],h.workTimer=.15,h.setPath(null),h.job=k.Dig,h.selectRing&&(h.selectRing.visible=!0)}this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild();for(const[a,h]of n.entries()){const d=this.grid.get(h.x,h.y);d&&(d.kind=E.Earth,d.mark=Ee.Dig,d.digProgress=a===1?.72:a===0?.48:a===2?.3:.15,d.fortified=!1)}this.rebuild();for(const a of n.slice(0,2)){const h=this.grid.tileToWorld(a.x,a.y);this.renderer.spawnDigDebris(h.x,h.z,12615744)}const o=this.grid.tileToWorld(e-2,t-2);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+5,26,o.z+16),this.renderer.camera.lookAt(this.camTarget)}preparePass62aStabShot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(let o=t-5;o<=t+2;o++)for(let a=e-4;a<=e+4;a++){const h=this.grid.get(a,o);!h||h.kind===E.Heart||h.kind===E.Rock||(h.kind===E.Earth||h.kind===E.Gold||h.kind===E.Dirt)&&(h.kind=E.Claimed,h.claimedProgress=1,h.mark=Ee.None,h.digProgress=0)}const i=[];for(let o=e-5;o<=e+5;o++)i.push({x:o,y:t-6}),i.push({x:o,y:t+4});for(let o=t-5;o<=t+3;o++)i.push({x:e-5,y:o}),i.push({x:e+5,y:o});for(const o of i){const a=this.grid.get(o.x,o.y);!a||a.kind===E.Heart||a.kind===E.Rock||(a.kind=E.Earth,a.fortified=!1,a.mark=Ee.Dig,a.digProgress=.15+Math.random()*.35,a.room=_.None)}for(;this.creatures.filter(o=>o.alive&&o.isWorker).length<6;)this.spawnCreature($.Scrabbler,e+1,t+1);const n=this.creatures.filter(o=>o.alive&&o.isWorker);for(let o=0;o<n.length;o++){const a=n[o],h=i[o%i.length],d=this.grid.findPathAdjacent(e,t,h.x,h.y),l=this.grid.tileToWorld(e+o%3-1,t-1);a.wx=l.x,a.wz=l.z,a.x=e+o%3-1,a.y=t-1,a.job=k.Dig,a.jobTarget=h,a.workTimer=.1,d&&a.setPath(d),a.mood=80}this.requestStructuralRebuild(),this.rebuild(),this.renderer.setDigLoad(!0),this.hud.sayNow("Stab dig load — watch for Graphics hiccup. Should stay solid.");const s=this.grid.tileToWorld(e,t-3);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+6,28,s.z+18),this.renderer.camera.lookAt(this.camTarget)}preparePass62Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,h=_.None)=>{const d=this.grid.get(o,a);!d||d.kind===E.Heart||(d.kind=E.Claimed,d.claimedProgress=1,d.room=h,d.mark=Ee.None,d.digProgress=0)};for(let o=t-2;o<=t+3;o++)for(let a=e-3;a<=e+5;a++)i(a,o);if(i(e-2,t+1,_.Lair),i(e-1,t+1,_.Lair),i(e,t+1,_.Lair),i(e+1,t+1,_.Lair),i(e-2,t+2,_.Hatchery),i(e-1,t+2,_.Hatchery),i(e+2,t+1,_.Training),i(e+3,t+1,_.Training),i(e+2,t+2,_.Training),i(e+3,t+2,_.Training),i(e+4,t+1,_.Library),i(e+5,t+1,_.Library),i(e+4,t+2,_.Library),i(e+5,t+2,_.Library),i(e+4,t-1,_.Portal),i(e+5,t-1,_.Portal),this.hatcheryFood=12,this.gold=400,this.grid.tileToWorld(e+4,t),this.creatures.some(o=>o.kind===$.Skitterwing&&o.alive)||(this.spawnCreature($.Skitterwing,e+3,t),this.attracted.skitterwing=!0),!this.creatures.some(o=>o.kind===$.Rattlekin&&o.alive)){const o=this.spawnCreature($.Rattlekin,e+2,t+1);o.trainNeed=60,o.job=k.Train,o.jobTarget={x:e+2,y:t+1},o.workTimer=7.2,o.level=1,this.attracted.rattlekin=!0}if(this.creatures.some(o=>o.kind===$.Emberling&&o.alive)||(this.spawnCreature($.Emberling,e+3,t+2),this.attracted.emberling=!0),!this.creatures.some(o=>o.kind===$.Gravemage&&o.alive)){const o=this.spawnCreature($.Gravemage,e+4,t+1);o.job=k.Research,o.jobTarget={x:e+4,y:t+1},this.attracted.gravemage=!0}this.researchProgress=88,this.researchRank=0,this.healUnlocked=!1,this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("A Gravemage has entered the Underkeep."),this.hud.say(z.gravemage);const n=this.grid.tileToWorld(e+2,t+1);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+4,24,n.z+14),this.renderer.camera.lookAt(this.camTarget);const s=this.creatures.find(o=>o.alive&&o.kind===$.Rattlekin);s&&this.selectCreature(s)}preparePass63Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(c,u,f=_.None)=>{const g=this.grid.get(c,u);!g||g.kind===E.Heart||(g.kind=E.Claimed,g.claimedProgress=1,g.room=f,g.mark=Ee.None,g.digProgress=0,g.door=$e.None,g.trap=pt.None,g.rally=!1,g.fortified=!1)};for(let c=t-3;c<=t+3;c++)for(let u=e-3;u<=e+5;u++)i(u,c);i(e+2,t+1,_.Training),i(e+3,t+1,_.Training),i(e+4,t+1,_.Library),i(e+5,t+1,_.Library),i(e+4,t-1,_.Portal),i(e+5,t-1,_.Portal),i(e-2,t+1,_.Lair),i(e-1,t+1,_.Lair),i(e-2,t+2,_.Hatchery),i(e+2,t+2,_.Guard),i(e+3,t+2,_.Guard);for(const[c,u]of[[e,t-2],[e+1,t-2],[e-1,t-2],[e+2,t-2]]){const f=this.grid.get(c,u);f&&f.kind!==E.Heart&&(f.kind=E.Earth,f.fortified=!0,f.room=_.None,f.door=$e.None)}i(e,t-1),i(e+1,t-1);const n=this.grid.get(e,t-1);n.door=$e.Closed;const s=this.grid.get(e+1,t-1);s.door=$e.Open,i(e,t-3),i(e+1,t-3),i(e,t-4);const o=this.grid.get(e,t-3);o.trap=pt.Sentry;const a=this.grid.get(e+2,t);i(e+2,t),a.rally=!0,this.hatcheryFood=8,this.gold=900;const h=this.spawnCreature($.HeroKnight,e,t-4);h.job=k.Fight,h.jobTarget={...this.grid.heartPos},this.creatures.some(c=>c.kind===$.Rattlekin&&c.alive)||this.spawnCreature($.Rattlekin,e+2,t+2),this.creatures.some(c=>c.kind===$.Emberling&&c.alive)||this.spawnCreature($.Emberling,e+3,t+2);for(const c of this.creatures)if(!(!c.alive||c.isHero||c.isWorker)&&(c.kind===$.Rattlekin||c.kind===$.Emberling)){const u=this.grid.tileToWorld(e+2,t);c.x=e+2,c.y=t,c.wx=u.x+(c.kind===$.Emberling?.35:-.2),c.wz=u.z,c.job=k.Guard,c.jobTarget={x:e+2,y:t},c.setPath(null),c.syncMesh(this.time)}if(!this.creatures.some(c=>c.kind===$.Gravemage&&c.alive)){const c=this.spawnCreature($.Gravemage,e+4,t+1);c.job=k.Research,c.jobTarget={x:e+4,y:t+1}}this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Doors sealed. Sentry armed. Rally flies — hold the line!"),this.hud.say(z.doorBuilt),this.hud.say(z.sentryBuilt),this.hud.say(z.rallyPlanted),this.hud.setTooltip(`(${e},${t-1}) Claimed · Door (closed)`);const d=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,22,d.z+13),this.renderer.camera.lookAt(this.camTarget);const l=this.creatures.find(c=>c.alive&&c.kind===$.Rattlekin);l&&this.selectCreature(l)}preparePass71Shot(e="both"){this.hud.hideOverlay(),this.exitPossession(!0);const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(l,c,u=_.None)=>{const f=this.grid.get(l,c);!f||f.kind===E.Heart||(f.kind=E.Claimed,f.claimedProgress=1,f.room=u,f.mark=Ee.None,f.digProgress=0,f.door=$e.None,f.trap=pt.None,f.rally=!1,f.fortified=!1,f.explored=!0,f.goldAmount=0)};for(let l=i-2;l<=i+2;l++)for(let c=t-2;c<=t+3;c++)n(c,l);n(t+2,i,_.Treasury),n(t+3,i,_.Treasury),n(t+2,i+1,_.Lair),n(t+3,i+1,_.Training),n(t+2,i+2,_.Library),n(t+3,i+2,_.Portal),n(t-2,i+1,_.Hatchery),n(t-1,i+1,_.Guard);for(let l=t-1;l<=t+4;l++)n(l,i+3);for(let l=t-1;l<=t+4;l++)for(let c=i+4;c<=i+6;c++){const u=this.grid.get(l,c);!u||u.kind===E.Heart||(u.kind=E.Lava,u.room=_.None,u.goldAmount=0,u.fortified=!1,u.mark=Ee.None,u.explored=!0,u.digProgress=0)}for(let l=t;l<=t+3;l++)n(l,i+7),n(l,i+8);for(const[l,c]of[[t+5,i+1],[t+5,i+2],[t+6,i+1]]){const u=this.grid.get(l,c);u&&(u.kind=E.Gold,u.goldAmount=400,u.explored=!0,u.fortified=!1,u.room=_.None)}for(const[l,c]of[[t-4,i],[t-4,i+1],[t-5,i]]){const u=this.grid.get(l,c);u&&(u.kind=E.Water,u.explored=!0,u.room=_.None,u.goldAmount=0)}n(t-3,i),n(t-3,i+1);const s=this.grid.get(t+1,i+4);s&&(s.kind=E.BridgeWood,s.explored=!0);const o=this.grid.get(t+2,i+5);o&&(o.kind=E.BridgeStone,o.explored=!0),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=pt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=e==="payday"?12:900,this.mana=80,this.healUnlocked=!0,this.wageAcc=rn-1.2;const a=this.creatures.filter(l=>l.isWorker&&l.alive);for(;a.length<3;)a.push(this.spawnCreature($.Scrabbler,t,i));for(let l=0;l<a.length;l++){const c=a[l],u=this.grid.tileToWorld(t-1+l%2,i);c.x=t-1+l%2,c.y=i,c.wx=u.x,c.wz=u.z,c.job=k.Idle,c.setPath(null),c.held=!1,c.mood=70}let h=this.creatures.find(l=>l.kind===$.Emberling&&l.alive);h||(h=this.spawnCreature($.Emberling,t+1,i+3));{const l=this.grid.tileToWorld(t+1,i+3);h.x=t+1,h.y=i+3,h.wx=l.x,h.wz=l.z,h.job=k.Idle,h.setPath(null),h.mood=75}let d=this.creatures.find(l=>l.kind===$.Rattlekin&&l.alive);if(d||(d=this.spawnCreature($.Rattlekin,t,i+1)),d.mood=70,d.goldCarried=0,this.creatures.some(l=>l.kind===$.Gravemage&&l.alive)||this.spawnCreature($.Gravemage,t+2,i+2),this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="possess"&&(this.mana=Math.max(this.mana,Nn+10),this.enterPossession(h),setTimeout(()=>{try{this.hud.sayNow(z.possess)}catch{}},0)),(e==="lava"||e==="bridge"||e==="both")&&(this.hud.say(z.lava),this.hud.say(z.bridgeWood)),e==="payday")this.gold=8,this.wageAcc=rn,this.payWages(.01),this.hud.sayNow(z.paydayFail),this.hud.setTooltip("Payday — empty Treasury crashes moods");else if(e==="lava"){const l=this.grid.tileToWorld(t+2,i+5);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,16,l.z+11),this.hud.setTooltip("Lava hazards · bridges · gold vein contrast")}else if(e==="bridge"){const l=this.grid.tileToWorld(t+1,i+5);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+1,14,l.z+10),this.hud.setTooltip("Wooden + stone bridges over lava")}else if(e==="possess")this.hud.setTooltip("Possession — FP follow · WASD move · Esc exits");else{const l=this.grid.tileToWorld(t+1,i+4);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,18,l.z+12),this.hud.setTooltip("Pass 7.1 — lava · bridges · possess · payday"),this.hud.sayNow("Pass 7.1 live — lava burns, bridges span, Possess rides, payday bites.")}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass72Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(h,d,l=_.None)=>{const c=this.grid.get(h,d);!c||c.kind===E.Heart||(c.kind=E.Claimed,c.claimedProgress=1,c.room=l,c.mark=Ee.None,c.digProgress=0,c.door=$e.None,c.trap=pt.None,c.rally=!1,c.fortified=!1,c.explored=!0)};for(let h=i-3;h<=i+4;h++)for(let d=t-3;d<=t+5;d++)n(d,h);for(let h=t-1;h<=t+3;h++){const d=this.grid.get(h,i+5);d&&d.kind!==E.Heart&&(d.kind=E.Lava,d.room=_.None,d.explored=!0)}const s=this.grid.get(t+1,i+5);s.kind=E.BridgeWood,s.explored=!0;const o=this.grid.get(t+2,i+5);o.kind=E.BridgeStone,o.explored=!0,n(t+2,i,_.Treasury),n(t+3,i,_.Treasury),n(t+2,i+1,_.Lair),n(t+3,i+1,_.Hatchery),n(t+4,i+1,_.Training),n(t+4,i,_.Library),n(t+5,i,_.Portal),n(t-1,i+1,_.Guard),n(t+2,i+2,_.Workshop),n(t+3,i+2,_.Workshop),n(t+4,i+2,_.Workshop),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t,i-2),this.grid.get(t,i-2).trap=pt.Sentry;for(let h=t+6;h<=t+9;h++){const d=this.grid.get(h,i);d&&d.kind!==E.Heart&&(d.kind=E.Dirt,d.explored=!0,d.room=_.None)}for(let h=t+10;h<=t+14;h++)for(let d=i-1;d<=i+1;d++){const l=this.grid.get(h,d);l&&(l.explored=!1)}this.gold=e==="mission"?2480:900,this.goldEver=this.gold,this.doorKits=2,this.sentryKits=1,this.wavesCleared=e==="mission"?2:1,this.heroWaveSpawned=!1,this.heroWaveTimer=40,this.mana=80,this.hatcheryFood=6,this.workerCostScale=1;const a=this.creatures.filter(h=>h.isWorker&&h.alive);for(;a.length<4;)a.push(this.spawnCreature($.Scrabbler,t-1,i));for(let h=0;h<Math.min(2,a.length);h++){const d=a[h],l=t+2+h,c=i+2,u=this.grid.tileToWorld(l,c);d.x=l,d.y=c,d.wx=u.x,d.wz=u.z,d.job=k.Craft,d.jobTarget={x:l,y:c},d.workTimer=3+h,d.setPath(null)}if(this.creatures.some(h=>h.kind===$.Rattlekin&&h.alive)||this.spawnCreature($.Rattlekin,t-1,i+1),!this.creatures.some(h=>h.kind===$.Emberling&&h.alive)){const h=this.spawnCreature($.Emberling,t+1,i+5);h.job=k.Idle}if(this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud(),e==="mission")this.hud.showOverlay("Mission Briefing",`Survive ${ni} hero waves — OR gather ${on} gold. Heart must stand.`,"Begin"),this.hud.sayNow(z.missionBrief.replace("%w",String(ni)).replace("%g",String(on))),this.hud.setTooltip(`Mission W${this.wavesCleared}/${ni} · Gold ${this.gold}/${on}`);else if(e==="workshop"){this.hud.sayNow(z.workshopBuilt),this.hud.say(z.craftBusy),this.hud.setTooltip("Workshop — Scrabblers craft Door/Sentry kits");const h=this.grid.tileToWorld(t+3,i+2);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,16,h.z+11)}else if(e==="worker"){const h=this.workerCost();this.gold=Math.max(this.gold,h+50),this.castSpell("createWorker"),this.hud.setTooltip(`Create Scrabbler — ${h}g · cost scales`)}else if(e==="minimap"){this.hud.sayNow("Minimap — explored claim glow, Heart marker, fog beyond."),this.hud.setTooltip("Minimap · explored / claimed / Heart");const h=this.grid.tileToWorld(t+2,i+1);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+3,22,h.z+14)}else{this.hud.sayNow("Pass 7.2 — minimap, mission win, Workshop kits, Scrabbler polish."),this.hud.say(z.workshopBuilt),this.hud.setTooltip("Pass 7.2 — minimap · mission · Workshop · Worker");const h=this.grid.tileToWorld(t+2,i+2);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,18,h.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}focusCreatureById(e){try{const t=this.creatures.find(n=>n.id===e&&n.alive&&!n.isHero);if(!t)return;this.selectCreature(t);const i=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(i.x,0,i.z),this.renderer.camera.position.set(i.x+4,26,i.z+16),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector()}catch(t){console.warn("[underkeep] focusCreatureById failed",t)}}refreshRosterUi(e=!1){try{if(!e&&!this.hud.isRosterOpen())return;const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"},i=this.creatures.filter(n=>n.alive&&!n.isHero).map(n=>{const s=typeof n.job=="string"?n.job:"idle";let o=n.held?"Held":n.knockedOut?"Knocked out":s===k.AttackMove?"Attack":s===k.Pray?"Praying":s===k.DragWounded?"Hauling":s.charAt(0).toUpperCase()+s.slice(1);return n.hasTalisman&&(o+=" ✦"),{id:n.id,name:`${t[n.kind]??n.kind} Lv${n.level}`,job:o,hp:n.hp,maxHp:n.maxHp,mood:n.mood,knockedOut:n.knockedOut}});this.hud.updateRoster(i)}catch(t){console.warn("[underkeep] roster ui failed",t)}}preparePass74Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(u,f,g=_.None)=>{const v=this.grid.get(u,f);!v||v.kind===E.Heart||(v.kind=E.Claimed,v.claimedProgress=1,v.room=g,v.mark=Ee.None,v.digProgress=0,v.door=$e.None,v.trap=pt.None,v.rally=!1,v.fortified=!1,v.explored=!0)};for(let u=i-3;u<=i+5;u++)for(let f=t-3;f<=t+6;f++)n(f,u);n(t-2,i+3,_.Prison),n(t-1,i+3,_.Prison),n(t,i+3,_.Torture),n(t-2,i+5,_.Graveyard),n(t-1,i+5,_.Graveyard),n(t+2,i,_.Treasury),n(t+3,i,_.Treasury);for(let u=t+2;u<=t+5;u++)for(let f=i+1;f<=i+2;f++)n(u,f,_.Lair);for(let u=t-2;u<=t;u++)n(u,i+1,_.Hatchery);n(t+4,i,_.Library),n(t+5,i,_.Library),n(t+5,i+3,_.Portal),n(t+2,i+3,_.Workshop),n(t+3,i+1,_.Training),n(t+4,i+1,_.Training),n(t+2,i+4,_.Temple),n(t+3,i+4,_.Temple),n(t+4,i+4,_.Temple),n(t+5,i+4,_.CombatPit),n(t+5,i+5,_.CombatPit),n(t+4,i+5,_.CombatPit),this.gold=1400,this.goldEver=this.gold,this.mana=80,this.hatcheryFood=8,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0;const s=this.creatures.filter(u=>u.isWorker&&u.alive);for(;s.length<3;)s.push(this.spawnCreature($.Scrabbler,t-1,i));this.creatures.some(u=>u.kind===$.Rattlekin&&u.alive)||this.spawnCreature($.Rattlekin,t+1,i),this.creatures.some(u=>u.kind===$.Emberling&&u.alive)||this.spawnCreature($.Emberling,t+2,i),this.creatures.some(u=>u.kind===$.Gravemage&&u.alive)||this.spawnCreature($.Gravemage,t+3,i),this.creatures.some(u=>u.kind===$.Thornwitch&&u.alive)||this.spawnCreature($.Thornwitch,t+1,i+2),this.creatures.some(u=>u.kind===$.Bonewretch&&u.alive)||this.spawnCreature($.Bonewretch,t-1,i+5);const o=this.creatures.find(u=>u.kind===$.Gravemage&&u.alive);if(o){o.x=t+3,o.y=i+4;const u=this.grid.tileToWorld(o.x,o.y);o.wx=u.x,o.wz=u.z,o.mood=42,o.job=k.Pray,o.jobTarget={x:t+3,y:i+4},o.workTimer=2.8,o.prayerBuff=12,o.setPath(null)}const a=this.creatures.find(u=>u.kind===$.Emberling&&u.alive);if(a){a.x=t+5,a.y=i+4;const u=this.grid.tileToWorld(a.x,a.y);a.wx=u.x,a.wz=u.z,a.level=4,a.trainNeed=80,a.job=k.Train,a.jobTarget={x:t+5,y:i+4},a.workTimer=11.2,a.setPath(null)}const h=this.creatures.find(u=>u.kind===$.Rattlekin&&u.alive);if(h){h.x=t+1,h.y=i+4;const u=this.grid.tileToWorld(h.x,h.y);h.wx=u.x,h.wz=u.z,h.hp=1,h.knockedOut=!0,h.job=k.Idle,h.setPath(null)}const d=s[0];if(d&&h){d.x=t+1,d.y=i+3;const u=this.grid.tileToWorld(d.x,d.y);d.wx=u.x,d.wz=u.z,d.job=k.DragWounded,d.jobTarget={x:h.x,y:h.y},d.workTimer=0;const f=this.grid.findPath(d.x,d.y,h.x,h.y);f&&d.setPath(f)}const l=this.creatures.find(u=>u.kind===$.Thornwitch&&u.alive);if(l){l.x=t,l.y=i+4;const u=this.grid.tileToWorld(l.x,l.y);l.wx=u.x,l.wz=u.z,l.hp=l.maxHp*.28,l.job=k.Flee,l.fleeTimer=3,l.jobTarget={x:t+3,y:i+1};const f=this.grid.findPath(l.x,l.y,t+3,i+1);f&&l.setPath(f)}this.requestStructuralRebuild(),this.rebuild();const c=this.grid.tileToWorld(t+3,i+4);if(this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+3,24,c.z+14),this.renderer.camera.lookAt(this.camTarget),e==="temple"){const u=this.grid.tileToWorld(t+3,i+4);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),o&&this.selectCreature(o),this.hud.setTooltip("Temple — prayer mood buff · talisman hook"),this.hud.sayNow(z.praying)}else if(e==="combatPit"){const u=this.grid.tileToWorld(t+5,i+4);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),a&&this.selectCreature(a),this.hud.setTooltip("Combat Pit — veteran leveling past 4"),this.hud.sayNow(z.combatLevelUp.replace("%n","Emberling").replace("%l","5"))}else if(e==="roster")this.refreshRosterUi(!0),this.hud.openRoster(),this.hud.sayNow("Creature roster — HP · job · mood. Click to focus.");else if(e==="flee"){const u=this.grid.tileToWorld(t+1,i+3);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Flee / drag wounded → Lair beds"),this.hud.sayNow(z.dragWounded)}else this.refreshRosterUi(!0),this.hud.openRoster(),this.hud.sayNow("Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag wounded."),this.hud.setTooltip("Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag")}preparePass73Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(c,u,f=_.None)=>{const g=this.grid.get(c,u);!g||g.kind===E.Heart||(g.kind=E.Claimed,g.claimedProgress=1,g.room=f,g.mark=Ee.None,g.digProgress=0,g.door=$e.None,g.trap=pt.None,g.rally=!1,g.fortified=!1,g.explored=!0)};for(let c=i-3;c<=i+5;c++)for(let u=t-3;u<=t+6;u++)n(u,c);for(let c=t-1;c<=t+3;c++){const u=this.grid.get(c,i+6);u&&u.kind!==E.Heart&&(u.kind=E.Lava,u.room=_.None,u.explored=!0)}const s=this.grid.get(t+1,i+6);s.kind=E.BridgeWood,s.explored=!0,n(t+2,i,_.Treasury),n(t+3,i,_.Treasury);for(let c=t+2;c<=t+5;c++)for(let u=i+1;u<=i+2;u++)n(c,u,_.Lair);for(let c=t-2;c<=t;c++)n(c,i+1,_.Hatchery);for(let c=t+4;c<=t+6;c++)n(c,i,_.Library);n(t+5,i+3,_.Portal),n(t-1,i+2,_.Guard),n(t+2,i+3,_.Workshop),n(t+3,i+3,_.Workshop),n(t-2,i+3,_.Prison),n(t-1,i+3,_.Prison),n(t-2,i+4,_.Prison),n(t,i+3,_.Torture),n(t+1,i+3,_.Torture),n(t-2,i+5,_.Graveyard),n(t-1,i+5,_.Graveyard),n(t,i+5,_.Graveyard),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t,i-2),this.grid.get(t,i-2).trap=pt.Sentry,this.gold=1100,this.goldEver=this.gold,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.mana=70,this.hatcheryFood=8,this.corpses=[{x:t-1,y:i+5,timer:5,fromHero:!0},{x:t,y:i+5,timer:3,fromHero:!1}];const o=this.creatures.filter(c=>c.isWorker&&c.alive);for(;o.length<3;)o.push(this.spawnCreature($.Scrabbler,t-1,i));for(const c of[...this.creatures])if(c.isHero){c.alive=!1;try{this.renderer.removeEntityMesh(c.mesh)}catch{}}this.creatures=this.creatures.filter(c=>c.alive);const a=this.spawnCreature($.HeroKnight,t+1,i+4);a.knockedOut=!0,a.hp=1,a.job=k.Idle,a.setPath(null);const h=this.spawnCreature($.HeroArcher,t-1,i+3);if(this.imprisonCreature(h,t-1,i+3),h.convertProgress=e==="torture"?72:35,h.hunger=e==="graveyard"?92:40,e==="torture"&&(this.imprisonCreature(h,t,i+3),h.convertProgress=78,!this.creatures.find(u=>u.kind===$.Thornwitch&&u.alive))){const u=this.spawnCreature($.Thornwitch,t+1,i+3);u.mood=85}if(this.creatures.some(c=>c.kind===$.Bonewretch&&c.alive)||(e==="graveyard"||e==="both")&&this.spawnCreature($.Bonewretch,t-2,i+5),this.creatures.some(c=>c.kind===$.Rattlekin&&c.alive)||this.spawnCreature($.Rattlekin,t-1,i+2),e==="prison"||e==="both"){const c=o[0];this.grid.tileToWorld(t+1,i+4),c.x=t,c.y=i+4;const u=this.grid.tileToWorld(c.x,c.y);c.wx=u.x,c.wz=u.z,c.job=k.DragPrisoner,c.jobTarget={x:a.x,y:a.y},c.workTimer=0,c.setPath(this.grid.findPath(c.x,c.y,a.x,a.y))}this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud();const d=this.grid.largestContiguousRoom(_.Lair),l=Math.round(cs(d)*100);if(e==="prison"){this.hud.sayNow(z.prisonBuilt),this.hud.say(z.heroKnocked),this.hud.setTooltip(`Prison — prisoners ${this.creatures.filter(u=>u.isPrisoner).length} · KO ready`);const c=this.grid.tileToWorld(t-1,i+3);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,16,c.z+11)}else if(e==="torture"){this.hud.sayNow(z.tortureBuilt),this.hud.say(z.converting),this.hud.setTooltip("Torture Chamber — converting captive → Thornwitch");const c=this.grid.tileToWorld(t,i+3);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,15,c.z+10)}else if(e==="graveyard"){this.hud.sayNow(z.graveyardBuilt),this.hud.say(z.boneRaised),this.hud.setTooltip(`Graveyard — corpses ${this.corpses.length} → Bonewretch`);const c=this.grid.tileToWorld(t-1,i+5);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,15,c.z+10)}else if(e==="efficiency"){this.hud.sayNow(z.roomSizeBonus.replace("%n",String(d)).replace("%p",String(l))),this.hud.setTooltip(`Lair size ${d} · +${l}% eff · Hatchery/Library scale too`);const c=this.grid.tileToWorld(t+3,i+1);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,18,c.z+12)}else{this.hud.sayNow("Pass 7.3 — Prison, Torture, Graveyard, room-size efficiency."),this.hud.say(z.prisonBuilt),this.hud.setTooltip(`Pass 7.3 — Prison · Torture · Graveyard · Lair size ${d} +${l}%`);const c=this.grid.tileToWorld(t-1,i+4);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,18,c.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass65Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(a,h,d=_.None)=>{const l=this.grid.get(a,h);!l||l.kind===E.Heart||(l.kind=E.Claimed,l.claimedProgress=1,l.room=d,l.mark=Ee.None,l.digProgress=0,l.door=$e.None,l.trap=pt.None,l.rally=!1,l.fortified=!1,l.explored=!0)};for(let a=i-2;a<=i+2;a++)for(let h=t-2;h<=t+3;h++)n(h,a);n(t+2,i,_.Treasury),n(t+3,i,_.Treasury),n(t+2,i+1,_.Lair),n(t+3,i+1,_.Training),n(t+2,i+2,_.Library),n(t+3,i+2,_.Portal),n(t-2,i+1,_.Hatchery),n(t-1,i+1,_.Guard);for(const[a,h]of[[t-3,i],[t-3,i+1],[t-3,i-1],[t+4,i],[t+4,i+1],[t+4,i-1],[t,i+3],[t+1,i+3],[t+2,i+3],[t,i-3],[t+1,i-3]]){const d=this.grid.get(a,h);!d||d.kind===E.Heart||(d.kind=E.Earth,d.fortified=!1,d.mark=Ee.None,d.room=_.None,d.goldAmount=0,d.digProgress=0,d.explored=!0)}const s=this.grid.get(t+5,i);s&&(s.kind=E.Rock,s.fortified=!1,s.mark=Ee.None,s.explored=!0,s.room=_.None);for(let a=t+4;a<=t+7;a++)n(a,i-2);for(let a=0;a<this.grid.height;a++)for(let h=0;h<this.grid.width;h++){const d=this.grid.get(h,a);!(Math.abs(h-t)<=4&&Math.abs(a-i)<=3?!0:Math.abs(h-(t+5))<=2&&Math.abs(a-(i-2))<=1)&&d.kind!==E.Heart&&((d.kind===E.Claimed||d.kind===E.Dirt)&&(d.kind=E.Earth,d.claimedProgress=0,d.room=_.None),d.explored=!1,d.mark=Ee.None,d.fortified=!1)}this.grid.revealFromTerritory(),n(t,i-1),this.grid.get(t,i-1).door=$e.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=pt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=900,this.healUnlocked=!0;const o=this.creatures.filter(a=>a.isWorker&&a.alive);for(;o.length<4;)o.push(this.spawnCreature($.Scrabbler,t,i));for(let a=0;a<o.length;a++){const h=o[a],d=t-1+a%3,l=i+a%2,c=this.grid.tileToWorld(d,l);h.x=d,h.y=l,h.wx=c.x,h.wz=c.z,h.hunger=5,h.sleepNeed=5,h.goldCarried=0,h.job=k.Idle,h.jobTarget=null,h.setPath(null),h.held=!1}if(!this.creatures.some(a=>a.kind===$.Gravemage&&a.alive)){const a=this.spawnCreature($.Gravemage,t+2,i+2);a.job=k.Research,a.jobTarget={x:t+2,y:i+2}}if(this.creatures.some(a=>a.kind===$.Rattlekin&&a.alive)||this.spawnCreature($.Rattlekin,t-1,i+1),e==="fortify"||e==="both"){for(const[c,u]of[[t-3,i],[t-3,i+1],[t+4,i],[t,i+3]]){const f=this.grid.get(c,u);f&&f.kind===E.Earth&&!f.fortified&&(f.mark=Ee.Fortify,f.explored=!0)}const a=this.grid.get(t+1,i+3);a&&a.kind===E.Earth&&(a.fortified=!0,a.mark=Ee.None,a.explored=!0);const h=o[0],d={x:t-3,y:i},l=this.grid.tileToWorld(t-2,i);h.x=t-2,h.y=i,h.wx=l.x,h.wz=l.z,h.job=k.Fortify,h.jobTarget=d,h.workTimer=.8,h.setPath(null),this.hud.sayNow(z.autoFortify)}if((e==="fow"||e==="both")&&(this.hud.say(z.fog),this.hud.sayNow("Fog of war — unexplored earth stays dark until dig/claim.")),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="fortify"){const a=this.grid.tileToWorld(t-2,i);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,20,a.z+12),this.hud.setTooltip("Idle Scrabblers auto-fortify soft earth · Rock impassable")}else{const a=this.grid.tileToWorld(t+2,i-1);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+6,32,a.z+22),this.hud.setTooltip("Fog of war — explored heart vs dark unexplored")}this.renderer.camera.lookAt(this.camTarget)}preparePass7Shot(){this.hud.hideOverlay(),this.preparePass4Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;this.gold=2200;const i=this.grid.get(e+1,t+3);i&&i.kind!==E.Heart&&(i.kind=E.Dirt,i.room=_.None,i.mark=Ee.Claim,i.fortified=!1);for(const o of this.creatures)o.alive&&(o.clampStats(),o.isWorker?(o.goldCarried=90,o.job=k.Idle,o.hp=o.maxHp*.55):o.isHero||(o.hp=o.maxHp*.7),o.syncMesh(this.time,.016));const n=this.spawnCreature($.Rattlekin,e-1,t+1);n.hp=n.maxHp*.4,n.syncMesh(this.time,.016),this.rebuild();const s=this.grid.tileToWorld(e+1,t+1);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+5,28,s.z+18),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Gold-border claimed tiles · health flowers · gold haul"),this.hud.sayNow("Claimed land wears gold. Flowers measure health. Scrabblers haul the glitter home.")}preparePass10Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,h=_.None)=>{const d=this.grid.get(o,a);!d||d.kind===E.Heart||(d.kind=E.Claimed,d.room=h,d.mark=Ee.None,d.digProgress=0,d.claimedProgress=1,d.fortified=!1,d.explored=!0)};i(e+2,t,_.Treasury),i(e+3,t,_.Treasury),i(e+2,t+1,_.Casino),i(e+3,t+1,_.Casino),this.gold=Math.min(this.vaultCap(),Math.max(this.gold,720)),this.wageAcc=rn-12;const n=this.creatures.find(o=>o.alive&&o.isWorker);n&&(n.slapWorkBuff=8,n.goldCarried=80),this.grid.revealAround(e+8,t+1,3),this.requestStructuralRebuild(),this.rebuild();const s=this.grid.tileToWorld(e+2,t);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+5,26,s.z+16),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Pass 10 — Heart · payday · vault cap · Wagerden · slap-work"),this.hud.sayNow("Scrabblers never rest. Sell rooms. Sight peels the fog. The Heart keeps score.")}runGuideSmoke(e=16){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=this.gold;this.tool="dig",this.lastPaint=null;for(let u=0;u<4;u++)this.applyTool(t+3,i-1+u);for(let u=0;u<5;u++)this.applyTool(t-1+u,i+3);const s=Math.max(1,Math.ceil(e/.05));for(let u=0;u<s;u++)this.update(.05);const o=this.creatures.filter(u=>u.alive&&u.isWorker).reduce((u,f)=>u+f.goldCarried,0);let a=0;const h=t+1,d=i+1,l=this.grid.get(h,d);if(l&&l.kind===E.Claimed){l.room=_.None,this.tool="treasury",this.lastPaint=null,this.gold,this.applyTool(h,d),this.tool="sell",this.lastPaint=null;const u=this.gold;this.applyTool(h,d),a=this.gold-u}const c=this.creatures.find(u=>u.alive&&u.isWorker);return c&&this.slap(c),this.castSightAt(t+6,i-5),{goldBefore:n,goldAfter:this.gold,carried:o,vaultCap:this.vaultCap(),soldRefund:a,slapBuff:c?.slapWorkBuff??0,workerHunger:c?.hunger??-1,workerSleep:c?.sleepNeed??-1,heartHp:this.heartHp,paydayIn:Math.max(0,rn-this.wageAcc),mined:this.gold+o>n}}preparePass8Shot(){this.preparePass7Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(a,h,d=_.None)=>{const l=this.grid.get(a,h);!l||l.kind===E.Heart||(l.kind=E.Claimed,l.room=d,l.mark=Ee.None,l.digProgress=0,l.claimedProgress=1,l.fortified=!1,l.explored=!0)};for(let a=t+2;a<=t+3;a++)for(let h=e+3;h<=e+4;h++)i(h,a,_.Portal);const n=this.grid.get(e-2,t+2);n&&(n.kind=E.Earth,n.fortified=!0,n.room=_.None,n.explored=!0);const s=this.grid.get(e-1,t+3);s&&(s.kind=E.Gold,s.goldAmount=900,s.fortified=!1,s.explored=!0),this.rebuild();const o=this.grid.tileToWorld(e+1.5,t+1.5);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+4.5,19.5,o.z+15.5),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Layered cavern walls · ritual Heart · crystal Portal · airborne ash"),this.hud.sayNow("The Underkeep gains depth: carved strata, ritual iron, crystal fire.")}preparePass64bShot(){this.hud.hideOverlay(),this.preparePass64Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(const a of this.creatures)a.alive&&(a.clampStats(),this.safeMood(a,Number.isFinite(a.mood)?Math.max(40,a.mood):72),a.hunger=Math.max(0,Math.min(40,a.hunger)),a.sleepNeed=Math.max(0,Math.min(40,a.sleepNeed)));const i=this.creatures.find(a=>a.alive&&a.isWorker);i&&(this.tool="select",this.hud.setActiveTool("select"),this.pickUp(i));const n=this.creatures.filter(a=>a.alive&&!a.isHero&&!a.isWorker&&(a.kind===$.Rattlekin||a.kind===$.Emberling));this.held&&this.dropHeldAt(e,t),this.clearSelection();for(const a of n.slice(0,3))a.selected=!0,this.selectedGroup.includes(a)||this.selectedGroup.push(a);this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0);const s=n[0];s&&this.pickUp(s),this.hud.sayNow("Hand pick + squad Attack — no blackout."),this.hud.say(z.groupSelect),this.hud.say(z.attackMove),this.refreshInspector();const o=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+3,22,o.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass64Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(c,u,f=_.None)=>{const g=this.grid.get(c,u);!g||g.kind===E.Heart||(g.kind=E.Claimed,g.claimedProgress=1,g.room=f,g.mark=Ee.None,g.digProgress=0,g.door=$e.None,g.trap=pt.None,g.rally=!1,g.fortified=!1)};for(let c=t-4;c<=t+3;c++)for(let u=e-3;u<=e+5;u++)i(u,c);i(e+2,t+1,_.Training),i(e+3,t+1,_.Training),i(e+4,t+1,_.Library),i(e+5,t+1,_.Library),i(e+4,t-1,_.Portal),i(e+5,t-1,_.Portal),i(e-2,t+1,_.Lair),i(e-1,t+1,_.Lair),i(e-2,t+2,_.Hatchery),i(e+2,t+2,_.Guard),i(e+3,t+2,_.Guard);for(const[c,u]of[[e-1,t-2],[e+1,t-2],[e+2,t-2]]){const f=this.grid.get(c,u);f&&f.kind!==E.Heart&&(f.kind=E.Earth,f.fortified=!0,f.room=_.None)}i(e,t-1),i(e,t-2),i(e,t-3),i(e,t-4),this.grid.get(e,t-1).door=$e.Closed,this.grid.get(e,t-3).trap=pt.Sentry,this.grid.get(e+2,t).rally=!0,this.hatcheryFood=8,this.gold=1e3,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.heroWarn30=!0,this.heroWarn10=!0;for(const c of[...this.creatures])if(c.isHero){c.alive=!1;try{this.renderer.removeEntityMesh(c.mesh)}catch{}}this.creatures=this.creatures.filter(c=>c.alive);const n=(c,u,f)=>{const g=this.spawnCreature(c,u,f),v=this.grid.tileToWorld(u,f);return g.x=u,g.y=f,g.wx=v.x,g.wz=v.z,g.held=!1,g.stunTimer=0,g.hunger=10,g.sleepNeed=10,g.trainNeed=0,g};for(const c of[...this.creatures])if(c.alive&&(c.kind===$.Rattlekin||c.kind===$.Emberling)){c.alive=!1;try{this.renderer.removeEntityMesh(c.mesh)}catch{}}this.creatures=this.creatures.filter(c=>c.alive);const s=n($.Rattlekin,e+1,t),o=n($.Rattlekin,e+2,t),a=n($.Emberling,e+3,t);if(!this.creatures.some(c=>c.kind===$.Gravemage&&c.alive)){const c=this.spawnCreature($.Gravemage,e+4,t+1);c.job=k.Research,c.jobTarget={x:e+4,y:t+1}}const h=this.spawnCreature($.HeroKnight,e,t-4),d=this.spawnCreature($.HeroArcher,e+1,t-4);h.job=k.Fight,d.job=k.Fight,h.jobTarget={x:e,y:t},d.jobTarget={x:e,y:t},h.hp=Math.floor(h.maxHp*.7),d.hp=Math.floor(d.maxHp*.75),this.clearSelection(),this.selectedGroup=[s,o,a];for(const c of this.selectedGroup)c.selected=!0;this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0),this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Squad selected — attack-move into the heroes!"),this.hud.say(z.groupSelect),this.hud.say(z.attackHero),this.hud.say(z.heroEngage),this.hud.setTooltip(`(${e},${t}) Claimed · squad ${this.selectedGroup.length} attack-move`);const l=this.grid.tileToWorld(e+1,t-2);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+1.5,21,l.z+12),this.renderer.camera.lookAt(this.camTarget)}update(e){if(this.renderer.contextLost){try{this.hud.update(e)}catch{}return}try{if(Number.isFinite(this.mana)||(this.mana=0),this.mana=Math.max(0,Math.min(this.maxMana(),this.mana)),Number.isFinite(this.gold)||(this.gold=0),this.gold=Math.max(0,this.gold),this.gold>this.goldEver&&(this.goldEver=this.gold),!this.gameOver){this.time+=e;try{this.updateCamera(e)}catch(o){console.warn("[underkeep] camera",o)}try{this.regenMana(e)}catch(o){console.warn("[underkeep] mana",o)}try{this.regenHatcheryFood(e)}catch(o){console.warn("[underkeep] food",o)}try{this.assignJobs(e)}catch(o){console.warn("[underkeep] assignJobs",o)}try{this.updateMoods(e)}catch(o){console.warn("[underkeep] moods",o)}try{this.updateCreatures(e)}catch(o){console.warn("[underkeep] creatures",o)}try{this.updatePortal(e)}catch(o){console.warn("[underkeep] portal",o)}try{this.updateHeroWave(e)}catch(o){console.warn("[underkeep] heroes",o)}try{this.checkHeart()}catch(o){console.warn("[underkeep] heart",o)}try{this.payWages(e)}catch(o){console.warn("[underkeep] wages",o)}try{this.updateHazards(e)}catch(o){console.warn("[underkeep] hazards",o)}try{this.checkMissionWin()}catch(o){console.warn("[underkeep] mission",o)}if(this.saveAcc+=e,this.saveAcc>=4){this.saveAcc=0;try{this.saveNow()}catch(o){console.warn("[underkeep] save",o)}}}const t=this.grid.tiles.reduce((o,a)=>o+(a.mark===Ee.Dig?1:0),0),i=this.creatures.filter(o=>o.alive&&(o.job===k.Dig||o.job===k.Mine)).length;this.renderer.setDigLoad(t>=6||i>=2),this.rebuildCooldown>0&&(this.rebuildCooldown-=e),this.pendingStructuralRebuild||this.gridDirty?this.rebuildCooldown<=0&&this.rebuild():(this.marksDirty&&!this.paint&&this.flushMarks(),this.fogDirty&&this.flushFog());for(const o of this.creatures)try{if(o.alive){o.clampStats(),o.syncMesh(this.time,e);try{if(o.mesh)if(o.held)o.mesh.visible=!0;else{const a=Number.isFinite(o.x)?Math.round(o.x):0,h=Number.isFinite(o.y)?Math.round(o.y):0;o.mesh.visible=this.grid.isExplored(a,h)}}catch{o.mesh&&(o.mesh.visible=!0)}}else o.mesh&&(o.mesh.visible=!1)}catch(a){console.warn("[underkeep] creature sync failed",o?.id,a)}this.renderer.update(e);const n=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.renderer.setHeartGold(this.gold,n.x,n.z),this.hud.update(e),this.templePrayCount=0;for(const o of this.creatures)o.alive&&(o.prayerBuff>0&&(o.prayerBuff=Math.max(0,o.prayerBuff-e)),o.slapWorkBuff>0&&(o.slapWorkBuff=Math.max(0,o.slapWorkBuff-e)),o.job===k.Pray&&!o.isHero&&this.templePrayCount++);if(this.rosterAcc+=e,this.rosterAcc>=.45&&(this.rosterAcc=0,this.refreshRosterUi(!1)),(this.selected||this.held)&&this.refreshInspector(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(o=>o.alive&&o.isWorker).length,this.creatures.filter(o=>o.alive&&!o.isWorker&&!o.isHero).length),this.hud.updateKeepVitals({goldCap:this.vaultCap(),heartHp:this.heartHp,heartMax:po,paydayIn:Math.max(0,rn-this.wageAcc),paydayDue:this.paydayDueNow(),portalCount:this.attractedCount(),portalCap:this.portalCap()}),this.hud.setSpellAffordable("createWorker",this.gold>=this.workerCost()),this.hud.setSpellAffordable("speed",this.mana>=vo),this.hud.setSpellAffordable("lightning",this.mana>=xo),this.hud.setSpellAffordable("heal",this.healUnlocked&&this.mana>=30),this.hud.setSpellAffordable("possess",this.possessed?!0:this.mana>=Nn),this.hud.setSpellAffordable("sight",this.mana>=nr),this.hud.setSpellAffordable("callToArms",this.mana>=sr),this.syncMissionHud(),this.minimapAcc+=e,this.minimapAcc>=.35){this.minimapAcc=0;try{this.updateMinimap()}catch{}}this.creatures=this.creatures.filter(o=>{if(!o.alive){try{this.renderer.removeEntityMesh(o.mesh)}catch{}return!1}return!0}),this.held&&!this.held.alive&&(this.held=null);const s=this.selectedGroup.length;this.selectedGroup=this.selectedGroup.filter(o=>o.alive),this.selected&&!this.selected.alive&&(this.selected=null),s!==this.selectedGroup.length?this.syncSelectionPrimary():!this.selected&&this.selectedGroup.length===0&&this.hud.hideInspector()}catch(t){throw console.error("[underkeep] update failed",t),t}}wageAcc=0;payWages(e){if(this.wageAcc+=e,this.paydayToastCooldown>0&&(this.paydayToastCooldown-=e),this.wageAcc<rn)return;this.wageAcc=0;let t=0;const i=[];for(const n of this.creatures){if(!n.alive||n.isHero||n.isWorker)continue;const s=fr[n.kind].goldWage;s>0&&(t+=s,i.push(n))}if(!(t<=0||i.length===0))if(this.gold>=t){this.gold-=t,this.hud.say(z.payday.replace("%g",String(t)));for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)+4)}else{this.gold=0;for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)-32),n.leaveWarned=!0;this.hud.sayNow(z.paydayFail),this.paydayToastCooldown=8}}pathOptsFor(e){return{forHero:e.isHero,allowHazard:e.isHero||rr(e.kind)||or(e.kind)}}placeBridge(e,t,i){if(!this.grid.canPlaceBridge(e,t))return;const n=i?Qg:Jg;if(this.gold<n){this.hud.say(i?"Need more gold for a stone bridge.":"Need more gold for a wooden bridge.");return}const s=this.grid.get(e,t);s&&(this.gold-=n,s.kind=i?E.BridgeStone:E.BridgeWood,s.goldAmount=0,s.digProgress=0,s.fortified=!1,s.mark=Ee.None,s.room=_.None,s.explored=!0,this.requestStructuralRebuild(),this.fogDirty=!0,this.hud.say(i?z.bridgeStone:z.bridgeWood),this.mentioneOnce("bridge",z.bridgeWood),this.saveNow())}enterPossession(e){try{if(!e||!e.alive||e.isHero)return;this.possessed&&this.exitPossession(!0),e.clampStats(),e.held=!1,e.stunTimer=0,e.setPath(null),e.job=k.Idle,e.jobTarget=null,this.possessed=e,this.selectCreature(e);const t=this.renderer.camera;this.possessCamBackup={tx:this.camTarget.x,tz:this.camTarget.z,cx:t.position.x,cy:t.position.y,cz:t.position.z},this.hud.sayNow(z.possess),this.refreshInspector()}catch(t){console.warn("[underkeep] enterPossession failed",t),this.possessed=null}}exitPossession(e=!1){try{const t=this.possessed;if(this.possessed=null,this.possessArmed=!1,this.possessCamBackup){const i=this.possessCamBackup;this.camTarget.set(i.tx,0,i.tz),this.renderer.camera.position.set(i.cx,i.cy,i.cz),this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z),this.possessCamBackup=null}t&&t.alive&&(t.setPath(null),t.job=k.Idle),e||this.hud.say(z.possessEnd),this.refreshInspector()}catch(t){console.warn("[underkeep] exitPossession failed",t),this.possessed=null,this.possessCamBackup=null}}possessMoveTo(e,t){const i=this.possessed;if(!i||!i.alive){this.exitPossession(!0);return}const n=!i.isWorker||rr(i.kind)||or(i.kind);if(!this.grid.isWalkable(e,t,{allowHazard:n})&&this.grid.get(e,t)?.kind!==E.Heart)return;const s=this.grid.findPath(i.x,i.y,e,t,{allowHazard:!i.isWorker||rr(i.kind)||or(i.kind)});s&&(i.setPath(s),i.job=k.Wander,i.jobTarget={x:e,y:t})}updateHazards(e){if(this.lavaDmgAcc+=e,this.lavaDmgAcc<.45)return;const t=this.lavaDmgAcc;this.lavaDmgAcc=0;for(const i of this.creatures){if(!i.alive||i.held)continue;this.possessed;const n=this.grid.get(Math.round(i.x),Math.round(i.y));if(n)if(n.kind===E.Lava){if(rr(i.kind)||or(i.kind))continue;const s=8*t;if(i.takeDamage(s),i.alive){if(Math.random()<.08)try{this.renderer.spawnFx(new A(i.wx,.4,i.wz),16737826,.35)}catch{}}else{try{this.renderer.spawnFx(new A(i.wx,.6,i.wz),16729088,.7)}catch{}this.possessed===i&&this.exitPossession()}}else n.kind,E.Water}}updateCamera(e){const t=this.renderer.camera;if(this.possessed&&this.possessed.alive){const a=this.possessed,h=new A(a.wx,.35,a.wz);this.camTarget.lerp(h,Math.min(1,8*e));const d=new A(a.wx-Math.sin(a.facing)*3.2,2.55,a.wz-Math.cos(a.facing)*3.2);t.position.lerp(d,Math.min(1,6*e)),t.lookAt(a.wx,.9,a.wz);const l=Math.round(Math.sin(a.facing)),c=Math.round(Math.cos(a.facing));let u=0,f=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(u+=l,f+=c),(this.keys.has("s")||this.keys.has("arrowdown"))&&(u-=l,f-=c),(this.keys.has("a")||this.keys.has("arrowleft"))&&(u-=c,f+=l),(this.keys.has("d")||this.keys.has("arrowright"))&&(u+=c,f-=l),u!==0||f!==0){const g=Math.round(a.x)+Math.sign(u),v=Math.round(a.y)+Math.sign(f);if(a.path.length===0||a.pathIndex>=a.path.length)this.possessMoveTo(g,v);else{const m=a.path[a.path.length-1];(m.x!==g||m.y!==v)&&this.possessMoveTo(g,v)}}return}const i=36,n=new A;t.getWorldDirection(n),n.y=0,n.normalize();const s=new A().crossVectors(n,new A(0,1,0)).normalize(),o=new A;if((this.keys.has("w")||this.keys.has("arrowup"))&&o.add(n),(this.keys.has("s")||this.keys.has("arrowdown"))&&o.sub(n),(this.keys.has("a")||this.keys.has("arrowleft"))&&o.sub(s),(this.keys.has("d")||this.keys.has("arrowright"))&&o.add(s),o.lengthSq()>0?(o.normalize().multiplyScalar(i),this.camVel.lerp(o,1-Math.exp(-10*e))):this.camVel.multiplyScalar(Math.exp(-8*e)),this.camVel.lengthSq()>1e-6){const a=this.camVel.clone().multiplyScalar(e);t.position.add(a),this.camTarget.add(a)}if(Math.abs(this.zoomPending)>.002){const a=this.zoomPending*(1-Math.exp(-14*e));this.zoomPending-=a,this.applyZoom(a)}else this.zoomPending=0;t.lookAt(this.camTarget.x,0,this.camTarget.z)}regenMana(e){const t=this.grid.countClaimed(),i=this.grid.countRoom(_.Temple),n=this.templePrayCount*.55+i*.12,s=2+t*.08+n,o=Number.isFinite(this.mana)?this.mana:0;this.mana=Math.max(0,Math.min(this.maxMana(),o+s*e))}regenHatcheryFood(e){const t=this.grid.countRoom(_.Hatchery);if(t<=0){this.hatcheryFood=0;return}const i=cs(this.grid.largestContiguousRoom(_.Hatchery));this.foodRegenAcc+=e*(1+i);const n=2.5;for(;this.foodRegenAcc>=n;){this.foodRegenAcc-=n;const s=t*4;this.hatcheryFood<s&&(this.hatcheryFood=Math.min(s,this.hatcheryFood+t))}}assignJobs(e){const t=this.creatures.filter(l=>l.alive&&l.isWorker&&!l.held&&l.stunTimer<=0),i=this.grid.heartPos.x,n=this.grid.heartPos.y;for(const l of t){if(l.job===k.DragPrisoner||l.job===k.DragWounded)continue;const c=this.creatures.find(u=>u.alive&&u.isHero&&!u.knockedOut&&!u.isPrisoner&&Math.hypot(u.x-l.x,u.y-l.y)<5);if(c){if(Math.hypot(l.x-i,l.y-n)<8&&Math.hypot(c.x-i,c.y-n)<7){if(l.job=k.Fight,l.jobTarget={x:c.x,y:c.y},Math.hypot(l.x-c.x,l.y-c.y)>1.2){const y=this.grid.findPath(l.x,l.y,c.x,c.y);y&&l.setPath(y)}else l.setPath(null);this.mentioneOnce("heartDefend",z.heartDefend);continue}l.job=k.Flee,l.fleeTimer=2;const f=l.x-c.x,g=l.y-c.y,v=Math.max(0,Math.min(this.grid.width-1,l.x+Math.sign(f||1)*3)),m=Math.max(0,Math.min(this.grid.height-1,l.y+Math.sign(g||1)*3));let p=null;for(let y=0;y<5&&!p;y++)for(let x=-y;x<=y&&!p;x++)for(let w=-y;w<=y&&!p;w++)this.grid.isWalkable(v+w,m+x)&&(p={x:v+w,y:m+x});p&&l.setPath(this.grid.findPath(l.x,l.y,p.x,p.y));continue}}const s=[],o=[],a=[];for(const l of this.grid.tiles)l.mark===Ee.Dig&&this.grid.isDiggable(l.x,l.y)&&s.push({x:l.x,y:l.y}),l.mark===Ee.Claim&&l.kind===E.Dirt&&o.push({x:l.x,y:l.y}),l.mark===Ee.Fortify&&!l.fortified&&a.push({x:l.x,y:l.y});const h=new Set;for(const l of t)l.jobTarget&&(l.job===k.Dig||l.job===k.Mine||l.job===k.Claim||l.job===k.Fortify)&&h.add(`${l.jobTarget.x},${l.jobTarget.y}`),(l.job===k.Dig||l.job===k.Mine)&&l.jobTarget&&(!this.grid.get(l.jobTarget.x,l.jobTarget.y)||this.grid.get(l.jobTarget.x,l.jobTarget.y).mark!==Ee.Dig||!this.grid.isDiggable(l.jobTarget.x,l.jobTarget.y))&&(l.job=k.Idle,l.jobTarget=null,l.setPath(null));if(s.length+o.length>0){let l=!1;for(const c of t){if(c.job===k.Flee||c.job===k.DragPrisoner||c.job===k.DragWounded||c.job===k.Dig||c.job===k.Mine||c.job===k.Claim||c.job===k.Haul)continue;const u=c.hunger>78||c.sleepNeed>82||c.hp<c.maxHp*.4;(c.job===k.Eat||c.job===k.Sleep)&&u||(c.job===k.Fortify||c.job===k.Craft||c.job===k.Idle||c.job===k.Eat||c.job===k.Sleep)&&(c.job=k.Idle,c.jobTarget=null,c.setPath(null),l=!0)}l&&this.mentioneOnce("marksFirst",z.marksFirst)}const d=t.filter(l=>l.job===k.Idle||l.job===k.Flee&&l.fleeTimer<=0);for(const l of d){l.job=k.Idle,l.jobTarget=null;let c=!1;if(l.goldCarried>=40){const g=this.grid.tiles.find(y=>y.room===_.Treasury),v=g?.x??this.grid.heartPos.x,m=g?.y??this.grid.heartPos.y,p=this.grid.findPath(l.x,l.y,v,m);p&&(l.job=k.Haul,l.jobTarget={x:v,y:m},l.setPath(p),c=!0)}if(c)continue;if(this.grid.countRoom(_.Prison)>0){const g=this.creatures.find(v=>v.alive&&v.isHero&&v.knockedOut&&!v.isPrisoner&&!v.held&&!this.creatures.some(m=>m.alive&&m.isWorker&&m.job===k.DragPrisoner&&m.jobTarget&&m.jobTarget.x===v.x&&m.jobTarget.y===v.y));if(g){const v=this.grid.findPath(l.x,l.y,g.x,g.y);v&&(l.job=k.DragPrisoner,l.jobTarget={x:g.x,y:g.y},l.setPath(v),l.workTimer=0,c=!0)}}if(c)continue;if(this.grid.countRoom(_.Lair)>0){const g=this.creatures.find(v=>v.alive&&!v.isHero&&!v.isWorker&&v.knockedOut&&!v.held&&!this.creatures.some(m=>m.alive&&m.isWorker&&m.job===k.DragWounded&&(Math.floor(m.workTimer)===v.id||m.jobTarget&&m.jobTarget.x===v.x&&m.jobTarget.y===v.y)));if(g){const v=this.grid.findPath(l.x,l.y,g.x,g.y);v&&(l.job=k.DragWounded,l.jobTarget={x:g.x,y:g.y},l.setPath(v),l.workTimer=0,c=!0,this.mentioneOnce("dragWounded",z.dragWounded))}}if(c)continue;if(s.length===0&&o.length===0&&this.grid.countRoom(_.Workshop)>0&&(this.doorKits<an||this.sentryKits<an)){const g=this.findRoomTile(_.Workshop);if(g&&t.filter(m=>m.job===k.Craft).length<Math.max(1,Math.min(3,this.grid.countRoom(_.Workshop)))){const m=this.grid.findPath(l.x,l.y,g.x,g.y);m&&(l.job=k.Craft,l.jobTarget=g,l.setPath(m),l.workTimer=0,c=!0,this.mentioneOnce("craftBusy",z.craftBusy))}}if(c)continue;const u=s.map(g=>({m:g,d:Math.abs(g.x-l.x)+Math.abs(g.y-l.y)})).sort((g,v)=>g.d-v.d);for(const{m:g}of u){const v=this.grid.findDiggableFace(g.x,g.y)??(this.grid.isReachableSolid(g.x,g.y)?g:null);if(!v)continue;const m=`${v.x},${v.y}`;if(h.has(m))continue;const p=this.grid.get(v.x,v.y);p.mark!==Ee.Dig&&(p.mark=Ee.Dig,this.marksDirty=!0);const y=this.grid.findPathAdjacent(l.x,l.y,v.x,v.y);if(y){l.job=p.kind===E.Gold||p.kind===E.Gem?k.Mine:k.Dig,l.jobTarget=v,l.setPath(y),l.workTimer=0,h.add(m),c=!0;break}}if(c)continue;const f=o.map(g=>({m:g,d:Math.abs(g.x-l.x)+Math.abs(g.y-l.y)})).sort((g,v)=>g.d-v.d);for(const{m:g}of f){const v=`${g.x},${g.y}`;if(h.has(v))continue;const m=this.grid.findPath(l.x,l.y,g.x,g.y);if(m){l.job=k.Claim,l.jobTarget=g,l.setPath(m),l.workTimer=0,h.add(v),c=!0;break}}if(!c){if(!c){let g=null,v=999;for(const m of this.grid.tiles){if(m.kind!==E.Dirt||!m.explored||!this.grid.hasAdjacentClaimed(m.x,m.y))continue;const p=`${m.x},${m.y}`;if(h.has(p))continue;const y=Math.abs(m.x-l.x)+Math.abs(m.y-l.y);y<v&&y<=18&&(v=y,g={x:m.x,y:m.y})}if(g){const m=this.grid.findPath(l.x,l.y,g.x,g.y);if(m){const p=this.grid.get(g.x,g.y);p.mark!==Ee.Claim&&(p.mark=Ee.Claim,this.marksDirty=!0),l.job=k.Claim,l.jobTarget=g,l.setPath(m),l.workTimer=0,h.add(`${g.x},${g.y}`),c=!0,this.mentioneOnce("autoClaim",z.autoClaim)}}}if(!c){for(const g of a){const v=`${g.x},${g.y}`;if(h.has(v)||!this.grid.isReachableSolid(g.x,g.y))continue;const m=this.grid.findPathAdjacent(l.x,l.y,g.x,g.y);if(m){l.job=k.Fortify,l.jobTarget=g,l.setPath(m),l.workTimer=0,h.add(v),c=!0;break}}if(!c&&this.time>=40&&s.length===0&&o.length===0){let g=null,v=999;for(const m of this.grid.tiles)if(!(m.kind!==E.Claimed&&m.kind!==E.Heart))for(const p of this.grid.neighbors4(m.x,m.y)){if(p.kind!==E.Earth||p.fortified||p.mark===Ee.Dig||!p.explored||!this.grid.isReachableSolid(p.x,p.y))continue;const y=`${p.x},${p.y}`;if(h.has(y))continue;const x=Math.abs(p.x-l.x)+Math.abs(p.y-l.y);x<v&&x<=16&&(v=x,g={x:p.x,y:p.y})}if(g){const m=this.grid.findPathAdjacent(l.x,l.y,g.x,g.y);if(m){const p=this.grid.get(g.x,g.y);p.mark!==Ee.Fortify&&(p.mark=Ee.Fortify,this.marksDirty=!0),l.job=k.Fortify,l.jobTarget=g,l.setPath(m),l.workTimer=0,h.add(`${g.x},${g.y}`),c=!0,this.mentioneOnce("autoFortify",z.autoFortify)}}}if(!c&&l.goldCarried>0){const g=this.grid.tiles.find(y=>y.room===_.Treasury),v=g?.x??this.grid.heartPos.x,m=g?.y??this.grid.heartPos.y,p=this.grid.findPath(l.x,l.y,v,m);p&&(l.job=k.Haul,l.jobTarget={x:v,y:m},l.setPath(p))}}}}for(const l of t)l.hunger=0,l.sleepNeed=0;for(const l of this.creatures){if(!l.alive||l.isWorker||l.isHero||l.held||l.stunTimer>0||l.knockedOut)continue;if(l.job===k.AttackMove&&l.jobTarget){const x=this.creatures.find(w=>w.alive&&w.isHero&&Math.hypot(w.x-l.x,w.y-l.y)<9);if(x)if(l.bedKey&&this.releaseBed(l),Math.hypot(l.x-x.x,l.y-x.y)>1.2){const w=this.grid.findPath(l.x,l.y,x.x,x.y);w&&l.setPath(w)}else l.setPath(null);else if(l.path.length===0){const w=l.jobTarget.x,N=l.jobTarget.y;if(l.x!==w||l.y!==N){const P=this.grid.findPath(l.x,l.y,w,N);P&&l.setPath(P)}}continue}const c=this.creatures.find(x=>x.alive&&x.isHero&&Math.hypot(x.x-l.x,x.y-l.y)<10);if(c){if(l.bedKey&&this.releaseBed(l),l.job=k.Fight,l.jobTarget={x:c.x,y:c.y},Math.hypot(l.x-c.x,l.y-c.y)>1.2){const x=this.grid.findPath(l.x,l.y,c.x,c.y);x&&l.setPath(x)}else l.setPath(null);continue}const u=this.grid.countRoom(_.Hatchery)>0,f=this.grid.countRoom(_.Lair)>0;if(l.hunger=Math.min(100,l.hunger+(u?1.15:.7)*e),l.sleepNeed=Math.min(100,l.sleepNeed+(f?.95:.55)*e),l.trainNeed=Math.min(100,l.trainNeed+1.1*e),l.job===k.Eat||l.job===k.Sleep||l.job===k.Train||l.job===k.Research||l.job===k.Pray||l.job===k.Flee||l.job===k.Gamble){if(l.job===k.Sleep&&l.jobTarget){const x=`${l.jobTarget.x},${l.jobTarget.y}`;l.bedKey!==x&&(l.bedKey=x),this.bedOwners.has(x)||this.bedOwners.set(x,l.id)}if(l.path.length===0&&l.jobTarget){const x=this.grid.findPath(l.x,l.y,l.jobTarget.x,l.jobTarget.y);x&&l.setPath(x)}continue}l.job===k.Fight&&(l.job=k.Idle),l.job===k.Guard&&(l.job=k.Idle);const g=l.hp<l.maxHp*.35,v=l.hp<l.maxHp*.65;if(g&&f){const x=this.findFreeOrOwnedBed(l);if(x){l.job=k.Flee,l.fleeTimer=4,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y)),this.mentioneOnce("fleeLair",z.fleeLair);continue}}if(l.hunger>(u?55:70)&&u&&this.assignEat(l)||(l.sleepNeed>(f?58:75)||v)&&f&&this.assignSleep(l))continue;const m=l.kind===$.Gravemage,p=l.kind===$.Rattlekin||l.kind===$.Emberling||l.kind===$.Thornwitch||l.kind===$.Bonewretch;if(l.mood<58&&this.grid.countRoom(_.Temple)>0){const x=this.findRoomTile(_.Temple);if(x){l.job=k.Pray,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(m&&this.grid.countRoom(_.Library)>0){const x=this.findRoomTile(_.Library);if(x){l.job=k.Research,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(p&&l.trainNeed>22&&l.level>=4&&l.level<10&&this.grid.countRoom(_.CombatPit)>0){const x=this.findRoomTile(_.CombatPit);if(x){l.job=k.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(p&&l.trainNeed>28&&this.grid.countRoom(_.Training)>0&&l.level<4){const x=this.findRoomTile(_.Training);if(x){l.job=k.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}const y=this.grid.tiles.find(x=>x.rally);if(y&&(p||l.kind===$.Skitterwing)&&l.trainNeed<=50){l.job=k.Guard,l.jobTarget={x:y.x,y:y.y},l.x!==y.x||l.y!==y.y?l.setPath(this.grid.findPath(l.x,l.y,y.x,y.y)):l.setPath(null);continue}if(p&&this.grid.countRoom(_.Guard)>0&&l.trainNeed<=35){const x=this.findRoomTile(_.Guard);if(x){l.job=k.Guard,l.jobTarget=x,l.x!==x.x||l.y!==x.y?l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y)):l.setPath(null);continue}}if(!m&&l.trainNeed>45&&l.level<4&&this.grid.countRoom(_.Training)>0){const x=this.findRoomTile(_.Training);if(x){l.job=k.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(!m&&l.trainNeed>40&&l.level>=4&&l.level<10&&this.grid.countRoom(_.CombatPit)>0){const x=this.findRoomTile(_.CombatPit);if(x){l.job=k.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(l.job===k.Idle||l.job===k.Wander&&l.path.length===0){if(this.grid.countRoom(_.Casino)>0&&l.mood<82&&Math.random()<.35){const x=this.findRoomTile(_.Casino);if(x){l.job=k.Gamble,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y)),this.mentioneOnce("gambling",z.gambling);continue}}if(Math.random()<.008){const x=this.findFreeOrOwnedBed(l);if(x)l.job=k.Wander,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));else{const w=this.grid.tiles.filter(N=>N.kind===E.Claimed);if(w.length){const N=w[Math.floor(Math.random()*w.length)];l.job=k.Wander,l.setPath(this.grid.findPath(l.x,l.y,N.x,N.y))}}}}}for(const l of this.creatures){if(!l.alive||!l.isHero||l.stunTimer>0)continue;let c=null,u=8.5;for(const f of this.creatures){if(!f.alive||f.isHero||f.isWorker||f.held)continue;const g=Math.hypot(f.x-l.x,f.y-l.y);g<u&&(u=g,c=f)}if(c)l.job=k.Fight,l.jobTarget={x:c.x,y:c.y},Math.hypot(l.x-c.x,l.y-c.y)>1.15?l.setPath(this.grid.findPath(l.x,l.y,c.x,c.y,{forHero:!0,allowHazard:!0})):l.setPath(null);else{l.job=k.Fight;const f=this.grid.heartPos.x,g=this.grid.heartPos.y;if(l.path.length===0||Math.random()<.045){const v=this.grid.findPath(l.x,l.y,f,g,{forHero:!0,allowHazard:!0});if(v)l.setPath(v);else{let m=null,p=1/0;for(const y of this.grid.tiles){if(!this.grid.isWalkable(y.x,y.y)&&y.kind!==E.Heart)continue;const x=Math.hypot(y.x-f,y.y-g),w=Math.hypot(y.x-l.x,y.y-l.y);x<p&&w<20&&(p=x,m={x:y.x,y:y.y})}m&&l.setPath(this.grid.findPath(l.x,l.y,m.x,m.y,{forHero:!0,allowHazard:!0}))}}}}}findRoomTile(e){const t=this.grid.tiles.filter(n=>n.room===e);if(!t.length)return null;const i=t[Math.floor(Math.random()*t.length)];return{x:i.x,y:i.y}}releaseBed(e){e.bedKey&&(this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null)}findFreeOrOwnedBed(e){if(e.bedKey){const[i,n]=e.bedKey.split(",").map(Number),s=this.grid.get(i,n);if(s&&s.room===_.Lair)return{x:i,y:n};this.releaseBed(e)}const t=this.grid.tiles.filter(i=>i.room===_.Lair);for(const i of t){const n=`${i.x},${i.y}`,s=this.bedOwners.get(n);if(s===void 0||s===e.id)return{x:i.x,y:i.y}}return t.length?{x:t[0].x,y:t[0].y}:null}assignSleep(e){const t=this.findFreeOrOwnedBed(e);if(!t)return!1;const i=`${t.x},${t.y}`,n=this.bedOwners.get(i);if(n!==void 0&&n!==e.id){const s=this.grid.tiles.find(a=>{if(a.room!==_.Lair)return!1;const h=`${a.x},${a.y}`;return!this.bedOwners.has(h)});if(!s)return this.mentioneOnce("lairFull",z.lairFull),!1;const o=`${s.x},${s.y}`;return this.bedOwners.set(o,e.id),e.bedKey=o,e.job=k.Sleep,e.jobTarget={x:s.x,y:s.y},e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,s.x,s.y)),this.mentioneOnce("lairUse",z.lairUse),this.hud.say(z.bedClaim),!0}return this.bedOwners.set(i,e.id),e.bedKey=i,e.job=k.Sleep,e.jobTarget=t,e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("lairUse",z.lairUse),this.hud.say(z.bedClaim),!0}assignEat(e){this.hatcheryFood<=0&&this.grid.countRoom(_.Hatchery)>0&&this.mentioneOnce("hatcheryHungry",z.hatcheryHungry);const t=this.findRoomTile(_.Hatchery);return t?(e.job=k.Eat,e.jobTarget=t,e.eatAnnounced=!1,e.eatAnim=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("hatcheryUse",z.hatcheryUse),!0):!1}countOccupiedBeds(){let e=0;for(const t of this.creatures)!t.alive||t.job!==k.Sleep||!t.bedKey||e++;return e}spikeNeedsForRoom(e){const t=this.creatures.find(i=>i.alive&&!i.isHero&&!i.held&&i.job===k.Idle);t&&(e===_.Hatchery&&(t.hunger=Math.max(t.hunger,55)),e===_.Lair&&(t.sleepNeed=Math.max(t.sleepNeed,55)))}updateMoods(e){try{const t=this.grid.countRoom(_.Lair)>0,i=Math.max(1,this.grid.countRoom(_.Lair)),n=this.creatures.filter(o=>o.alive&&!o.isHero).length,s=t&&n>i+1;for(const o of this.creatures)try{if(!o.alive||o.isHero||o.held)continue;o.clampStats();let a=2*e;o.hunger>45&&(a-=10*e*((o.hunger-45)/55)),o.sleepNeed>40&&(a-=8*e*((o.sleepNeed-40)/60)),t||(a-=3.5*e),s&&(a-=4.5*e),(o.job===k.Sleep||o.job===k.Eat)&&(a+=12*e),o.job===k.Pray&&(a+=16*e),o.prayerBuff>0&&(a+=4*e),o.hasTalisman&&(a+=1.5*e),this.grid.countRoom(_.Temple)>0&&o.mood<50&&(a+=1.2*e),o.hp<o.maxHp*.4&&(a-=3*e),Number.isFinite(a)||(a=0),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+a),o.mood<14&&!o.leaveWarned?(o.leaveWarned=!0,this.hud.say(z.leaveThreat),this.mentioneOnce("moodLow",z.moodLow)):o.mood>35&&(o.leaveWarned=!1);const h=o.workEfficiency();if(o.isWorker&&h<.75&&!o.efficiencyWarned?(o.efficiencyWarned=!0,this.hud.say(z.sluggishDig)):h>=.82&&(o.efficiencyWarned=!1),o.mood<6&&!o.isWorker&&o.job===k.Idle&&Math.random()<e*.015){o.alive=!1;try{o.mesh&&(o.mesh.visible=!1)}catch{}this.held===o&&(this.held=null),o.held=!1,o.selected=!1,this.selectedGroup=this.selectedGroup.filter(d=>d!==o&&d.alive),this.selected===o&&(this.selected=null),this.pruneSelection(),this.hud.say("A minion has left the Underkeep."),this.selected?this.refreshInspector():this.hud.hideInspector()}}catch(a){console.warn("[underkeep] mood tick failed",o?.id,a)}}catch(t){console.warn("[underkeep] updateMoods failed",t)}}updateCreatures(e){for(const t of this.creatures){if(!t.alive||t.held||t.knockedOut||t.isPrisoner)continue;if(t.stunTimer>0){t.stunTimer-=e;continue}t.speedBuff>0&&(t.speedBuff-=e),t.fleeTimer>0&&(t.fleeTimer-=e),t.attackCooldown>0&&(t.attackCooldown-=e);const i=t.moveAlongPath(e,this.grid);if(t.isHero)this.triggerTrapsForHero(t);else{const n=this.grid.get(t.x,t.y);n&&n.door===$e.Closed&&(n.door=$e.Open,this.requestStructuralRebuild())}t.isWorker?this.updateWorkerJob(t,e,i):t.isHero?this.updateHeroJob(t,e):this.updateMinionJob(t,e,i)}}triggerTrapsForHero(e){const t=this.grid.get(e.x,e.y);if(!t||t.trap!==pt.Sentry)return;const i=38;e.hp-=i,e.pulseTint("feast",.55),this.renderer.spawnFx(new A(e.wx,1.1,e.wz),16755268,.55),this.renderer.spawnFx(new A(e.wx,1.4,e.wz),16737826,.4),t.trap=pt.None,this.requestStructuralRebuild(),this.hud.say(z.sentryFire),e.hp<=0&&(this.grid.countRoom(_.Prison)>0?(e.alive=!0,e.hp=1,e.knockedOut=!0,e.job=k.Idle,e.jobTarget=null,e.setPath(null),this.hud.sayNow(z.heroKnocked)):(e.alive=!1,e.mesh.visible=!1,this.spawnCorpse(e.x,e.y,!0)))}updateWorkerJob(e,t,i){if(e.job===k.Fight){if(!this.creatures.find(o=>o.alive&&o.isHero&&!o.knockedOut&&!o.isPrisoner&&Math.hypot(o.x-e.x,o.y-e.y)<7)){e.job=k.Idle,e.jobTarget=null;return}this.doCombat(e,t);return}if(e.job===k.Flee){(i||e.fleeTimer<=0)&&(e.job=k.Idle,e.setPath(null));return}if(e.job===k.DragPrisoner){if(!e.jobTarget){e.job=k.Idle,e.workTimer=0;return}if(e.workTimer<=0){const a=this.creatures.find(l=>l.alive&&l.isHero&&l.knockedOut&&!l.isPrisoner&&!l.held&&Math.hypot(l.x-e.jobTarget.x,l.y-e.jobTarget.y)<2.2);if(!i&&e.pathIndex<e.path.length)return;if(!a){e.job=k.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-a.x,e.y-a.y)>1.6){const l=this.grid.findPath(e.x,e.y,a.x,a.y);l?(e.setPath(l),e.jobTarget={x:a.x,y:a.y}):(e.job=k.Idle,e.jobTarget=null);return}const h=this.findRoomTile(_.Prison);if(!h){e.job=k.Idle,e.jobTarget=null;return}e.workTimer=a.id,e.jobTarget=h;const d=this.grid.findPath(e.x,e.y,h.x,h.y);d?e.setPath(d):(e.job=k.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(a=>a.id===Math.floor(e.workTimer)&&a.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=k.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;o&&this.grid.get(o.x,o.y)?.room===_.Prison&&this.imprisonCreature(s,o.x,o.y),e.workTimer=0,e.job=k.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===k.DragWounded){if(!e.jobTarget){e.job=k.Idle,e.workTimer=0;return}if(e.workTimer<=0){const a=this.creatures.find(l=>l.alive&&!l.isHero&&!l.isWorker&&l.knockedOut&&!l.held&&Math.hypot(l.x-e.jobTarget.x,l.y-e.jobTarget.y)<2.4);if(!i&&e.pathIndex<e.path.length)return;if(!a){e.job=k.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-a.x,e.y-a.y)>1.6){const l=this.grid.findPath(e.x,e.y,a.x,a.y);l?(e.setPath(l),e.jobTarget={x:a.x,y:a.y}):(e.job=k.Idle,e.jobTarget=null);return}const h=this.findFreeOrOwnedBed(a)??this.findRoomTile(_.Lair);if(!h){e.job=k.Idle,e.jobTarget=null;return}e.workTimer=a.id,e.jobTarget=h;const d=this.grid.findPath(e.x,e.y,h.x,h.y);d?e.setPath(d):(e.job=k.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(a=>a.id===Math.floor(e.workTimer)&&a.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=k.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;if(o&&this.grid.get(o.x,o.y)?.room===_.Lair){s.knockedOut=!1,s.hp=Math.max(s.hp,Math.floor(s.maxHp*.3)),s.x=o.x,s.y=o.y;const a=this.grid.tileToWorld(o.x,o.y);s.wx=a.x,s.wz=a.z,s.job=k.Sleep,s.jobTarget={x:o.x,y:o.y},s.bedKey=`${o.x},${o.y}`,this.bedOwners.set(s.bedKey,s.id),s.setPath(null),this.hud.sayNow(z.lairResting),this.renderer.spawnFx(new A(s.wx,.9,s.wz),6348944,.55)}e.workTimer=0,e.job=k.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===k.Eat||e.job===k.Sleep){this.updateMinionJob(e,t,i);return}if(!e.jobTarget)return;const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n){e.job=k.Idle;return}if(e.job===k.Dig||e.job===k.Mine){if(!i&&e.pathIndex<e.path.length)return;if(Math.abs(e.x-n.x)+Math.abs(e.y-n.y)!==1&&Math.hypot(e.x-n.x,e.y-n.y)>1.55){const u=this.grid.findPathAdjacent(e.x,e.y,n.x,n.y);u?e.setPath(u):(e.job=k.Idle,e.jobTarget=null);return}const o=this.grid.tileToWorld(n.x,n.y);e.faceToward(o.x,o.z);const a=this.grid.tileToWorld(e.x,e.y),h=.36,d=a.x+(o.x-a.x)*h,l=a.z+(o.z-a.z)*h;e.wx+=(d-e.wx)*Math.min(1,10*t),e.wz+=(l-e.wz)*Math.min(1,10*t),e.moving=!1,e.workTimer+=t;const c=.32/Math.max(.5,Math.min(1.25,e.workEfficiency()));if(e.workTimer>=c){e.workTimer=0;const u=this.grid.tileToWorld(n.x,n.y);if(this.renderer.spawnDigDebris(u.x,u.z,n.kind===E.Gem?4251840:n.kind===E.Gold?14725184:12615744),n.kind===E.Gold||n.kind===E.Gem){const f=n.kind===E.Gem?40:Math.min(40,n.goldAmount);n.kind===E.Gold&&(n.goldAmount-=f),e.goldCarried+=f,n.digProgress=Math.min(n.kind===E.Gem?.35:1,n.digProgress+.2*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),this.mentioneOnce("firstGold",z.firstGold),n.kind===E.Gem&&this.mentioneOnce("gemSeam",z.gemSeam),n.kind===E.Gold&&n.goldAmount<=0?(n.kind=E.Dirt,n.mark=Ee.None,n.goldAmount=0,n.digProgress=0,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=k.Idle,e.jobTarget=null):e.goldCarried>=120&&(e.job=k.Idle,e.jobTarget=null,e.setPath(null))}else n.kind===E.Earth?(n.digProgress=Math.min(1,n.digProgress+.34*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),n.digProgress>=1&&(n.kind=E.Dirt,n.mark=Ee.None,n.digProgress=0,n.door=$e.None,n.trap=pt.None,n.rally=!1,n.room=_.None,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=k.Idle,e.jobTarget=null,this.saveNow())):(n.mark=Ee.None,n.digProgress=0,e.job=k.Idle,e.jobTarget=null,this.marksDirty=!0)}}else if(e.job===k.Claim){if(!i&&e.pathIndex<e.path.length)return;if(Math.hypot(e.x-n.x,e.y-n.y)>1.2){const s=this.grid.findPath(e.x,e.y,n.x,n.y);s?e.setPath(s):(e.job=k.Idle,e.jobTarget=null);return}if(n.kind!==E.Dirt){n.mark=Ee.None,e.job=k.Idle,e.jobTarget=null,this.marksDirty=!0;return}if(e.workTimer+=t,e.workTimer>=.28){n.kind=E.Claimed,n.claimedProgress=1,n.mark=Ee.None,this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=k.Idle,e.jobTarget=null;const s=this.grid.tileToWorld(n.x,n.y);this.renderer.spawnFx(new A(s.x,.3,s.z),13155496,.4),this.mentioneOnce("claim",z.claim),this.mentioneOnce("fog",z.fog),this.saveNow()}}else if(e.job===k.Fortify){if(Math.hypot(e.x-n.x,e.y-n.y)>1.6)return;e.workTimer+=t,e.workTimer>=1.15&&(n.fortified=!0,n.mark=Ee.None,this.requestStructuralRebuild(),e.job=k.Idle,e.jobTarget=null)}else if(e.job===k.Haul){if(!i)return;if(e.goldCarried>0){const s=this.addGold(e.goldCarried);e.goldCarried-=s,this.renderer.spawnFx(new A(e.wx,.6,e.wz),16764992,.55),this.mentioneOnce("firstGold",z.firstGold),e.goldCarried>0&&this.mentioneOnce("treasuryFull",z.treasuryFull)}e.goldCarried<=0&&(e.goldCarried=0,e.job=k.Idle,e.jobTarget=null)}}updateMinionJob(e,t,i){if(e.job===k.Eat){if(!i&&e.pathIndex<e.path.length)return;e.eatAnnounced||(e.eatAnnounced=!0,this.hud.say(z.feasting),this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!0),e.pulseTint("feast",1.4)),this.hatcheryFood>0?(this.hatcheryFood=Math.max(0,this.hatcheryFood-1.8*t),e.hunger=Math.max(0,e.hunger-70*t),Math.random()<t*5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!1),e.pulseTint("feast",.7))):e.hunger=Math.max(0,e.hunger-12*t),e.hunger<5&&(e.job=k.Idle,e.jobTarget=null,e.eatAnnounced=!1)}else if(e.job===k.Sleep){if(!i&&e.pathIndex<e.path.length)return;if(e.jobTarget){const o=`${e.jobTarget.x},${e.jobTarget.y}`;e.bedKey=o,this.bedOwners.set(o,e.id)}const n=cs(this.grid.largestContiguousRoom(_.Lair));e.sleepNeed=Math.max(0,e.sleepNeed-40*t*(1+n*.5));const s=e.hp;e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+12*t*(1+n))),e.hp>s&&(e.restHealAcc+=t,Math.random()<t*4.5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!1),e.pulseTint("heal",.75)),e.restHealAcc>=1.6&&(e.restHealAcc=0,this.hud.say(z.lairResting),this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!0),e.pulseTint("heal",1.5))),e.sleepNeed<5&&e.hp>=e.maxHp*.95&&(e.job=k.Idle,e.jobTarget=null)}else if(e.job===k.Craft){if(!e.jobTarget){e.job=k.Idle;return}const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n||n.room!==_.Workshop){e.job=k.Idle,e.jobTarget=null;return}if(!i){if(e.path.length===0){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s)}return}if(e.setPath(null),e.workTimer+=t*e.workEfficiency(),Math.random()<t*.5&&this.renderer.spawnFx(new A(e.wx,.7,e.wz),16755268,.3),e.workTimer>=6){e.workTimer=0;let s=null;this.nextKitIsDoor&&this.doorKits<an?(this.doorKits++,s="door"):this.sentryKits<an?(this.sentryKits++,s="sentry"):this.doorKits<an&&(this.doorKits++,s="door"),this.nextKitIsDoor=!this.nextKitIsDoor,s&&(this.hud.sayNow(z.craftKit.replace("%k",s==="door"?"Door":"Sentry")),this.renderer.spawnFx(new A(e.wx,1.1,e.wz),16765040,.75)),this.doorKits>=an&&this.sentryKits>=an&&(e.job=k.Idle,e.jobTarget=null)}}else if(e.job===k.Research&&i){const n=cs(this.grid.largestContiguousRoom(_.Library));this.researchProgress=Math.min(100,this.researchProgress+12*t*(1+n)),e.workTimer+=t,Math.random()<t*.35&&this.renderer.spawnFx(new A(e.wx,.9,e.wz),8939263,.35),this.researchProgress>=100&&(this.researchProgress=0,this.researchRank=Math.min(3,this.researchRank+1),this.researchRank>=1&&!this.healUnlocked?(this.healUnlocked=!0,this.hud.sayNow(z.researchHeal)):this.hud.sayNow(z.researchDone.replace("%r",String(this.researchRank))),this.renderer.spawnFx(new A(e.wx,1.2,e.wz),11176191,.8))}else if(e.job===k.Guard){if(!e.jobTarget){e.job=k.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null);return}else if(e.job===k.Train&&i){const n=s0*t;if(this.gold<n){this.mentioneOnce("trainGold",z.trainGold),e.job=k.Idle,e.jobTarget=null;return}this.gold=Math.max(0,this.gold-n),e.trainNeed=Math.max(0,e.trainNeed-30*t),e.workTimer+=t;const o=this.grid.get(e.x,e.y)?.room===_.CombatPit,h={rattlekin:"Rattlekin",emberling:"Emberling",skitterwing:"Skitterwing",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e.kind]??"Minion";!o&&e.workTimer>8&&e.level<4&&(e.level++,e.maxHp+=15,e.hp=e.maxHp,e.damage+=3,e.workTimer=0,this.renderer.spawnFx(new A(e.wx,1,e.wz),16755268,.6),this.hud.sayNow(`${h} reaches training level ${e.level}!`)),o&&e.workTimer>12&&e.level>=4&&e.level<10&&(e.level++,e.maxHp+=18,e.hp=e.maxHp,e.damage+=4,e.workTimer=0,this.renderer.spawnFx(new A(e.wx,1.15,e.wz),16736320,.75),this.renderer.spawnFx(new A(e.wx,.7,e.wz),16755302,.45),this.hud.sayNow(z.combatLevelUp.replace("%n",h).replace("%l",String(e.level)))),(!o&&e.level>=4&&this.grid.countRoom(_.CombatPit)>0||e.trainNeed<5||o&&e.level>=10)&&(e.job=k.Idle,e.jobTarget=null)}else if(e.job===k.Pray){if(!e.jobTarget){e.job=k.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s);return}const n=this.grid.get(e.x,e.y);if(!n||n.room!==_.Temple){e.job=k.Idle,e.jobTarget=null;return}e.setPath(null),e.workTimer+=t,this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+18*t),Math.random()<t*.4&&this.renderer.spawnFx(new A(e.wx,1,e.wz),16769152,.35),e.workTimer>=3.5&&(e.prayerBuff=Math.max(e.prayerBuff,28),e.workTimer=0,this.mentioneOnce("prayerBuff",z.prayerBuff),this.renderer.spawnFx(new A(e.wx,1.3,e.wz),16765024,.7),!e.hasTalisman&&e.mood>70&&Math.random()<.35?(e.hasTalisman=!0,this.safeMood(e,Math.min(100,e.mood+8)),this.hud.sayNow(z.talismanGift),this.renderer.spawnFx(new A(e.wx,1.5,e.wz),16773280,.9)):this.mentioneOnce("praying",z.praying)),e.mood>=88&&e.prayerBuff>10&&(e.job=k.Idle,e.jobTarget=null)}else if(e.job===k.Flee)(i||e.fleeTimer<=0)&&(e.jobTarget&&this.grid.get(e.jobTarget.x,e.jobTarget.y)?.room===_.Lair?this.assignSleep(e):(e.job=k.Idle,e.setPath(null)));else if(e.job===k.AttackMove)this.doCombat(e,t),i&&e.jobTarget&&e.x===e.jobTarget.x&&e.y===e.jobTarget.y&&(this.creatures.some(s=>s.alive&&s.isHero&&Math.hypot(s.x-e.x,s.y-e.y)<12)||(e.job=k.Guard));else if(e.job===k.Gamble){if(!e.jobTarget){e.job=k.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+8*t),e.workTimer+=t,Math.random()<t*.8&&this.renderer.spawnFx(new A(e.wx,.7,e.wz),15777856,.25),e.workTimer>=3.2&&(e.workTimer=0,Math.random()<.32?this.addGold(6):this.gold>=2&&(this.gold-=2)),e.mood>=88&&(e.job=k.Idle,e.jobTarget=null)}else e.job===k.Fight?this.doCombat(e,t):e.job===k.Wander&&i&&(e.job=k.Idle)}updateHeroJob(e,t){if(e.path.length===0||e.pathIndex>=e.path.length){const s=this.grid.heartPos.x,o=this.grid.heartPos.y,a=this.creatures.find(l=>l.alive&&!l.isHero&&!l.isWorker&&!l.held&&Math.hypot(l.x-e.x,l.y-e.y)<8),h=a?a.x:s,d=a?a.y:o;if(Math.hypot(e.x-h,e.y-d)>1.2){const l=this.grid.findPath(e.x,e.y,h,d,{forHero:!0,allowHazard:!0});l&&e.setPath(l)}}const i=this.grid.heartPos.x,n=this.grid.heartPos.y;Math.hypot(e.x-i,e.y-n)<=1.5&&e.attackCooldown<=0&&(e.attackCooldown=1.2,this.heartHp-=e.damage,this.renderer.spawnFx(new A(this.grid.tileToWorld(i,n).x,1,this.grid.tileToWorld(i,n).z),16719936,.4),this.mentioneOnce("heartHurt",z.heartHurt)),this.doCombat(e,t)}heartHp=500;doCombat(e,t){try{const i=e.isHero?1.65:1.55,n=this.creatures.filter(m=>m.alive&&m!==e&&m.isHero!==e.isHero&&!m.isWorker&&!m.knockedOut&&!m.isPrisoner&&Math.hypot(m.x-e.x,m.y-e.y)<i),s=e.isHero?this.creatures.filter(m=>m.alive&&m.isWorker&&Math.hypot(m.x-e.x,m.y-e.y)<1.35):[],o=n.length?n:s;if(!o.length||(!this.heroEngageAnnounced&&(e.isHero||o.some(m=>m.isHero))&&(this.heroEngageAnnounced=!0,this.hud.say(z.heroEngage)),e.attackCooldown>0))return;const a=e.isHero?1:1+(e.level-1)*.12,h=!e.isHero&&e.prayerBuff>0?1.08:1,d=!e.isHero&&e.hasTalisman?1.05:1;e.attackCooldown=e.isHero?.85:.78;const l=o[0],c=l.alive,u=e.damage*(.95+Math.random()*.25)*a*h*d;l.takeDamage(u),e.attackPulse=1,e.faceToward(l.wx,l.wz);const f=l.wx-e.wx,g=l.wz-e.wz,v=Math.hypot(f,g)||1;l.wx+=f/v*.12,l.wz+=g/v*.12,this.renderer.spawnFx(new A(l.wx,.85,l.wz),e.isHero?8956671:16728128,.32),this.renderer.spawnFx(new A(l.wx,1.15,l.wz),16768426,.18),c&&!l.alive&&(l.isHero&&this.grid.countRoom(_.Prison)>0?(l.alive=!0,l.hp=1,l.knockedOut=!0,l.isPrisoner=!1,l.convertProgress=0,l.job=k.Idle,l.jobTarget=null,l.setPath(null),l.attackCooldown=0,this.hud.sayNow(z.heroKnocked),this.renderer.spawnFx(new A(l.wx,1.2,l.wz),10535167,.7)):!l.isHero&&!l.isWorker&&this.grid.countRoom(_.Lair)>0?(l.alive=!0,l.hp=1,l.knockedOut=!0,l.job=k.Idle,l.jobTarget=null,l.setPath(null),l.attackCooldown=0,this.hud.sayNow(z.allyKnocked),this.renderer.spawnFx(new A(l.wx,1.1,l.wz),16746592,.65)):(this.spawnCorpse(l.x,l.y,l.isHero),l.isHero&&(this.hud.sayNow(z.heroDown),this.renderer.spawnFx(new A(l.wx,1.2,l.wz),16772744,.7))))}catch(i){console.warn("[underkeep] doCombat failed",i)}}announceSpecies(e,t){const n={skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e]??"minion";this.hud.sayNow(`A ${n} has entered the Underkeep.`),this.hud.say(t)}updatePortal(e){if(this.portalCooldown-=e,this.portalCooldown>0)return;const t=this.grid.countRoom(_.Portal);if(t<=0)return;if(this.attractedCount()>=this.portalCap()){this.mentioneOnce("portalFull",z.portalFull),this.portalCooldown=6;return}const i=this.grid.countRoom(_.Lair),n=this.grid.countRoom(_.Hatchery),s=this.grid.countRoom(_.Training),o=this.grid.countRoom(_.Library),a=this.grid.countRoom(_.Treasury),h=this.grid.countClaimed(),d=this.grid.tiles.find(u=>u.room===_.Portal);if(!d)return;let l=d.x,c=d.y;for(const u of this.grid.neighbors4(d.x,d.y))if(this.grid.isWalkable(u.x,u.y)){l=u.x,c=u.y;break}if(!this.attracted.skitterwing&&h>=16&&t>=1){this.spawnCreature($.Skitterwing,l,c),this.attracted.skitterwing=!0,this.portalCooldown=8,this.announceSpecies($.Skitterwing,z.skitterwing);return}if(!this.attracted.rattlekin&&i>=2&&n>=1){this.spawnCreature($.Rattlekin,l,c),this.attracted.rattlekin=!0,this.portalCooldown=10,this.announceSpecies($.Rattlekin,z.rattlekin);return}if(!this.attracted.emberling&&s>=2&&i>=3&&this.gold>=200){this.spawnCreature($.Emberling,l,c),this.attracted.emberling=!0,this.portalCooldown=12,this.announceSpecies($.Emberling,z.emberling);return}if(!this.attracted.gravemage&&o>=2&&i>=2){this.spawnCreature($.Gravemage,l,c),this.attracted.gravemage=!0,this.portalCooldown=12,this.announceSpecies($.Gravemage,z.gravemage);return}if(this.attracted.rattlekin&&i>=2&&n>=1&&Math.random()<.12&&this.creatures.filter(f=>f.alive&&f.kind===$.Rattlekin).length<4){this.spawnCreature($.Rattlekin,l,c),this.portalCooldown=22,this.hud.sayNow("A Rattlekin has entered the Underkeep.");return}if(this.attracted.gravemage&&o>=4&&Math.random()<.1&&this.creatures.filter(f=>f.alive&&f.kind===$.Gravemage).length<2){this.spawnCreature($.Gravemage,l,c),this.portalCooldown=28,this.hud.sayNow("A Gravemage has entered the Underkeep.");return}this.attracted.emberling&&s>=4&&a>=2&&Math.random()<.08&&this.creatures.filter(f=>f.alive&&f.kind===$.Emberling).length<2&&(this.spawnCreature($.Emberling,l,c),this.portalCooldown=30,this.hud.sayNow("An Emberling has entered the Underkeep."))}spawnCorpse(e,t,i){this.corpses.push({x:e,y:t,timer:0,fromHero:i}),this.corpses.length>24&&this.corpses.shift()}imprisonCreature(e,t,i){e.knockedOut=!1,e.isPrisoner=!0,e.convertProgress=Math.max(0,e.convertProgress),e.hp=Math.max(1,Math.min(e.maxHp,e.hp)),e.alive=!0,e.held=!1,e.job=k.Idle,e.jobTarget=null,e.setPath(null),e.x=t,e.y=i;const n=this.grid.tileToWorld(t,i);e.wx=n.x,e.wz=n.z,e.hunger=Math.max(e.hunger,20),this.hud.sayNow(z.prisonerHeld),this.renderer.spawnFx(new A(e.wx,1,e.wz),8425640,.55)}convertPrisoner(e){const t=e.x,i=e.y;e.alive=!1;try{this.renderer.removeEntityMesh(e.mesh)}catch{}const n=Math.random()<.7?$.Thornwitch:$.Rattlekin,s=this.spawnCreature(n,t,i);s.mood=80,s.hunger=15,this.hud.sayNow(z.converted),this.renderer.spawnFx(new A(s.wx,1.2,s.wz),16728160,.8),this.announceSpecies(n,z.converted)}raiseBonewretch(e,t,i){const n=this.findRoomTile(_.Graveyard),s=n?.x??e,o=n?.y??t,a=this.spawnCreature($.Bonewretch,s,o);a.mood=90,a.hunger=0,a.sleepNeed=0,this.hud.sayNow(i),this.renderer.spawnFx(new A(a.wx,1.1,a.wz),8453984,.75)}updatePrisonEconomy(e){const t=this.grid.countRoom(_.Prison)>0,i=this.grid.countRoom(_.Torture)>0,n=this.grid.countRoom(_.Graveyard)>0;for(const s of this.creatures)!s.alive||!s.isHero||s.held||s.knockedOut&&!s.isPrisoner&&this.grid.get(s.x,s.y)?.room===_.Prison&&this.imprisonCreature(s,s.x,s.y);for(const s of this.creatures){if(!s.alive||!s.isPrisoner)continue;s.hunger=Math.min(100,s.hunger+6*e);const o=this.grid.get(s.x,s.y)?.room===_.Torture;if(!(this.grid.get(s.x,s.y)?.room===_.Prison)&&!o&&t){const h=this.findRoomTile(_.Prison);if(h){s.x=h.x,s.y=h.y;const d=this.grid.tileToWorld(h.x,h.y);s.wx=d.x,s.wz=d.z}}if(i){const h=o?9:4.5,d=s.convertProgress;if(s.convertProgress=Math.min(100,s.convertProgress+h*e),d<40&&s.convertProgress>=40&&this.hud.say(z.converting),s.convertProgress>=100){this.convertPrisoner(s);continue}}if(s.hunger>=100){const h=s.x,d=s.y;s.alive=!1;try{this.renderer.removeEntityMesh(s.mesh)}catch{}n?this.raiseBonewretch(h,d,z.starvedBones):(this.spawnCorpse(h,d,!0),this.hud.sayNow(z.starvedBones))}}if(n&&this.corpses.length){const s=[];for(const o of this.corpses){const a=this.grid.get(o.x,o.y)?.room===_.Graveyard;o.timer+=e*(a?1.6:1),o.timer>=8?this.raiseBonewretch(o.x,o.y,z.boneRaised):s.push(o)}this.corpses=s}else n||(this.corpses=this.corpses.filter(s=>(s.timer+=e*.25,s.timer<40)))}updateHeroWave(e){if(this.heroWaveSpawned){if(!this.won&&!this.gameOver&&!this.creatures.some(u=>u.alive&&u.isHero&&!u.knockedOut&&!u.isPrisoner)&&this.time>2){if(this.wavesCleared=Math.min(ni,this.wavesCleared+1),this.heroWaveSpawned=!1,this.wavesCleared>=ni){this.checkMissionWin();return}this.heroWaveTimer=50+this.wavesCleared*8,this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1;const u=this.wavesCleared+1;this.hud.sayNow(z.waveCleared.replace("%n",String(this.wavesCleared)).replace("%next",String(u)).replace("%w",String(ni))),this.hud.say(z.win)}return}if(this.heroWaveTimer-=e,!this.heroWarn30&&this.heroWaveTimer<=30&&this.heroWaveTimer>10&&(this.heroWarn30=!0,this.hud.sayNow(z.heroesSoon)),!this.heroWarn10&&this.heroWaveTimer<=10&&this.heroWaveTimer>0&&(this.heroWarn10=!0,this.hud.sayNow(z.heroesImminent)),this.heroWaveTimer>0)return;this.heroWaveSpawned=!0;const t=this.wavesCleared+1;this.hud.sayNow(`${z.heroes} (Wave ${t}/${ni})`),this.hud.say(z.heroes);const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=2,o=i;for(let c=2;c<Math.min(n-1,this.grid.height/2);c++)if(this.grid.isWalkable(i,c)){s=c,o=i;break}for(let c=s;c<=Math.min(s+4,n-2);c++)for(let u=i-1;u<=i+1;u++){const f=this.grid.get(u,c);!f||f.kind===E.Heart||f.kind===E.Rock||(f.kind===E.Earth||f.kind===E.Gold||f.kind===E.Wall)&&(f.kind=E.Dirt,f.fortified=!1,f.digProgress=0,this.gridDirty=!0)}if(!this.grid.isWalkable(o,s)){const c=this.grid.get(o,s);c&&c.kind!==E.Rock&&c.kind!==E.Heart&&(c.kind=E.Dirt,this.gridDirty=!0)}this.requestStructuralRebuild();const a=this.spawnCreature($.HeroKnight,o,s),h=this.spawnCreature($.HeroKnight,o+1,s),d=this.spawnCreature($.HeroArcher,o-1,s),l=1.05+this.wavesCleared*.12;for(const c of[a,h,d]){c.job=k.Fight,c.jobTarget={...this.grid.heartPos},c.hp=Math.floor(c.maxHp*l),c.maxHp=c.hp;const u=this.grid.tileToWorld(c.x,c.y);this.renderer.spawnFx(new A(u.x,1.2,u.z),10535167,.65)}if(this.grid.countClaimed()>=40){const c=this.spawnCreature($.HeroKnight,o,s+1);c.job=k.Fight,c.jobTarget={...this.grid.heartPos},this.renderer.spawnFx(new A(c.wx,1.2,c.wz),10535167,.5)}}checkHeart(){this.heartHp<=0&&!this.gameOver&&(this.gameOver=!0,this.hud.say(z.lose),this.hud.showOverlay("Defeat",z.lose,"Try Again"))}render(){this.renderer.render()}}const hv=document.getElementById("game-canvas");function cv(r){const e=document.getElementById("overlay"),t=document.getElementById("overlay-title"),i=document.getElementById("overlay-msg"),n=document.getElementById("overlay-btn"),s=document.getElementById("overlay-btn-secondary");if(!e||!t||!i||!n)return;t.textContent="Underkeep",i.textContent=r,n.textContent="New Game",s?.classList.add("hidden"),e.classList.remove("hidden");const o=()=>{qi(),location.reload()};n.onclick=o,document.getElementById("btn-new-game")?.addEventListener("click",o,{once:!0})}let yi=null;try{yi=new lv(hv)}catch(r){console.error("[underkeep] fatal boot error — clearing save",r),qi(),document.body.classList.remove("booting"),cv("Something went wrong loading your dungeon. Your save was cleared. Tap New Game to begin again.")}window.__underkeep=yi;let mh=performance.now(),us=0;function oc(r){const e=Math.min(.05,(r-mh)/1e3);if(mh=r,yi)try{yi.update(e),yi.render(),us=0}catch(t){us++,console.error("[underkeep] frame error",t);const i=yi;i.renderer?.contextLost?(i.handleContextLost?.(),us=0):us>=8&&(console.warn("[underkeep] many frame errors — continuing without overlay"),us=0)}requestAnimationFrame(oc)}requestAnimationFrame(oc);const he=new URLSearchParams(location.search);yi&&(he.get("shot")==="1"||he.get("shot")==="4"||he.get("shot")==="5b"||he.get("shot")==="5c"||he.get("shot")==="5c-heal"||he.get("shot")==="5c-feast"||he.get("shot")==="6.1"||he.get("shot")==="61"||he.get("shot")==="6.1b"||he.get("shot")==="61b"||he.get("shot")==="6.1b-slap"||he.get("shot")==="6.1b-eff"||he.get("shot")==="6.1c"||he.get("shot")==="61c"||he.get("shot")==="6.1c-pick"||he.get("shot")==="6.1c-slap"||he.get("shot")==="6.2a"||he.get("shot")==="62a"||he.get("shot")==="6.2"||he.get("shot")==="62"||he.get("shot")==="6.3"||he.get("shot")==="63"||he.get("shot")==="6.4"||he.get("shot")==="64"||he.get("shot")==="6.4b"||he.get("shot")==="64b"||he.get("shot")==="6.5"||he.get("shot")==="65"||he.get("shot")==="6.5-fow"||he.get("shot")==="6.5-fortify"||he.get("shot")==="7"||he.get("shot")==="7.0"||he.get("shot")==="8"||he.get("shot")==="8.0"||he.get("shot")==="7.1"||he.get("shot")==="71"||he.get("shot")==="7.1-lava"||he.get("shot")==="71-lava"||he.get("shot")==="7.1-bridge"||he.get("shot")==="71-bridge"||he.get("shot")==="7.1-possess"||he.get("shot")==="71-possess"||he.get("shot")==="7.1-payday"||he.get("shot")==="71-payday"||he.get("shot")==="7.2"||he.get("shot")==="72"||he.get("shot")==="7.2-minimap"||he.get("shot")==="72-minimap"||he.get("shot")==="7.2-mission"||he.get("shot")==="72-mission"||he.get("shot")==="7.2-workshop"||he.get("shot")==="72-workshop"||he.get("shot")==="7.2-worker"||he.get("shot")==="72-worker"||he.get("shot")==="7.3"||he.get("shot")==="73"||he.get("shot")==="7.3-prison"||he.get("shot")==="73-prison"||he.get("shot")==="7.3-torture"||he.get("shot")==="73-torture"||he.get("shot")==="7.3-graveyard"||he.get("shot")==="73-graveyard"||he.get("shot")==="7.3-efficiency"||he.get("shot")==="73-efficiency"||he.get("shot")==="7.4"||he.get("shot")==="74"||he.get("shot")==="7.4-temple"||he.get("shot")==="74-temple"||he.get("shot")==="7.4-combat"||he.get("shot")==="74-combat"||he.get("shot")==="7.4-roster"||he.get("shot")==="74-roster"||he.get("shot")==="7.4-flee"||he.get("shot")==="74-flee"||he.get("shot")==="10"||he.get("shot")==="pass10")&&setTimeout(()=>{const r=yi;r.hud.hideOverlay();const e=he.get("shot");e==="10"||e==="pass10"?r.preparePass10Shot?.():e==="8"||e==="8.0"?r.preparePass8Shot?.():e==="7"||e==="7.0"?r.preparePass7Shot?.():e==="7.4-temple"||e==="74-temple"?r.preparePass74Shot?.("temple"):e==="7.4-combat"||e==="74-combat"?r.preparePass74Shot?.("combatPit"):e==="7.4-roster"||e==="74-roster"?r.preparePass74Shot?.("roster"):e==="7.4-flee"||e==="74-flee"?r.preparePass74Shot?.("flee"):e==="7.4"||e==="74"?r.preparePass74Shot?.("both"):e==="7.3-prison"||e==="73-prison"?r.preparePass73Shot?.("prison"):e==="7.3-torture"||e==="73-torture"?r.preparePass73Shot?.("torture"):e==="7.3-graveyard"||e==="73-graveyard"?r.preparePass73Shot?.("graveyard"):e==="7.3-efficiency"||e==="73-efficiency"?r.preparePass73Shot?.("efficiency"):e==="7.3"||e==="73"?r.preparePass73Shot?.("both"):e==="7.2-minimap"||e==="72-minimap"?r.preparePass72Shot?.("minimap"):e==="7.2-mission"||e==="72-mission"?r.preparePass72Shot?.("mission"):e==="7.2-workshop"||e==="72-workshop"?r.preparePass72Shot?.("workshop"):e==="7.2-worker"||e==="72-worker"?r.preparePass72Shot?.("worker"):e==="7.2"||e==="72"?r.preparePass72Shot?.("both"):e==="7.1-lava"||e==="71-lava"?r.preparePass71Shot?.("lava"):e==="7.1-bridge"||e==="71-bridge"?r.preparePass71Shot?.("bridge"):e==="7.1-possess"||e==="71-possess"?r.preparePass71Shot?.("possess"):e==="7.1-payday"||e==="71-payday"?r.preparePass71Shot?.("payday"):e==="7.1"||e==="71"?r.preparePass71Shot?.("both"):e==="6.5-fortify"?r.preparePass65Shot?.("fortify"):e==="6.5-fow"?r.preparePass65Shot?.("fow"):e==="6.5"||e==="65"?r.preparePass65Shot?.("both"):e==="6.4b"||e==="64b"?r.preparePass64bShot?.():e==="6.4"||e==="64"?r.preparePass64Shot?.():e==="6.3"||e==="63"?r.preparePass63Shot?.():e==="6.2a"||e==="62a"?r.preparePass62aStabShot?.():e==="6.2"||e==="62"?r.preparePass62Shot?.():e==="6.1c-slap"?r.preparePass61cShot?.("slap"):e==="6.1c-pick"?r.preparePass61cShot?.("pick"):e==="6.1c"||e==="61c"?r.preparePass61cShot?.("both"):e==="6.1b-slap"?r.preparePass61bShot?.("slap"):e==="6.1b-eff"?r.preparePass61bShot?.("efficiency"):e==="6.1b"||e==="61b"?r.preparePass61bShot?.("both"):e==="6.1"||e==="61"?r.preparePass61Shot?.():e==="5c-heal"?r.preparePass5cShot?.("heal"):e==="5c-feast"?r.preparePass5cShot?.("feast"):e==="5c"||e==="5b"?r.preparePass5cShot?r.preparePass5cShot("both"):r.preparePass5bShot?.():e==="4"||!r.preparePass3Shot?r.preparePass4Shot?.():he.get("pass")==="3"?r.preparePass3Shot?.():r.preparePass4Shot?.()},400);yi&&he.get("smoke")==="1"&&setTimeout(()=>{const r=yi;r.hud.hideOverlay();const e=r.runGuideSmoke?.(16);let t=document.getElementById("smoke-result");t||(t=document.createElement("pre"),t.id="smoke-result",t.setAttribute("data-smoke","1"),document.body.appendChild(t)),t.textContent=JSON.stringify(e??{error:"no-smoke"}),document.title=`smoke:${e?.mined?"ok":"fail"}`},600);
