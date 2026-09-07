(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="170",Vc=0,sl=1,jc=2,Xc=0,Lh=1,Dh=2,Li=3,en=0,qt=1,Lt=2,Ui=0,Gn=1,Sr=2,rl=3,ol=4,qc=5,pn=100,Yc=101,$c=102,Kc=103,Zc=104,Jc=200,Qc=201,ed=202,td=203,Po=204,Ro=205,id=206,nd=207,sd=208,rd=209,od=210,ad=211,ld=212,hd=213,cd=214,ko=0,Lo=1,Do=2,Xn=3,Io=4,No=5,Uo=6,Fo=7,Ih=0,dd=1,ud=2,Qi=0,fd=1,pd=2,md=3,Nh=4,gd=5,vd=6,xd=7,Uh=300,qn=301,Yn=302,Oo=303,Bo=304,Dr=306,Tr=1e3,gn=1001,zo=1002,Qt=1003,yd=1004,Is=1005,pi=1006,Br=1007,Ji=1008,Bi=1009,Fh=1010,Oh=1011,Es=1012,Ma=1013,xn=1014,_i=1015,Fi=1016,ba=1017,Sa=1018,$n=1020,Bh=35902,zh=1021,Hh=1022,mi=1023,Gh=1024,Wh=1025,Wn=1026,Kn=1027,Ta=1028,Ea=1029,Vh=1030,Aa=1031,Ca=1033,gr=33776,vr=33777,xr=33778,yr=33779,Ho=35840,Go=35841,Wo=35842,Vo=35843,jo=36196,Xo=37492,qo=37496,Yo=37808,$o=37809,Ko=37810,Zo=37811,Jo=37812,Qo=37813,ea=37814,ta=37815,ia=37816,na=37817,sa=37818,ra=37819,oa=37820,aa=37821,_r=36492,la=36494,ha=36495,jh=36283,ca=36284,da=36285,ua=36286,_d=3200,wd=3201,Xh=0,Md=1,Ii="",zt="srgb",Qn="srgb-linear",Ir="linear",ht="srgb",bn=7680,al=519,bd=512,Sd=513,Td=514,qh=515,Ed=516,Ad=517,Cd=518,Pd=519,ll=35044,Rd=35048,hl="300 es",Ni=2e3,Er=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Vn=Math.PI/180,As=180/Math.PI;function ts(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function Pa(r,e){return(r%e+e)%e}function kd(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Ld(r,e,t){return r!==e?(t-r)/(e-r):0}function ws(r,e,t){return(1-t)*r+t*e}function Dd(r,e,t,i){return ws(r,e,1-Math.exp(-t*i))}function Id(r,e=1){return e-Math.abs(Pa(r,e*2)-e)}function Nd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ud(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Fd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Od(r,e){return r+Math.random()*(e-r)}function Bd(r){return r*(.5-Math.random())}function zd(r){r!==void 0&&(cl=r);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hd(r){return r*Vn}function Gd(r){return r*As}function Wd(r){return(r&r-1)===0&&r!==0}function Vd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xd(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),h=o(t/2),c=s((e+i)/2),d=o((e+i)/2),l=s((e-i)/2),u=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(a*d,h*l,h*u,a*c);break;case"YZY":r.set(h*u,a*d,h*l,a*c);break;case"ZXZ":r.set(h*l,h*u,a*d,a*c);break;case"XZX":r.set(a*d,h*g,h*f,a*c);break;case"YXY":r.set(h*f,a*d,h*g,a*c);break;case"ZYZ":r.set(h*g,h*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const dl={DEG2RAD:Vn,RAD2DEG:As,generateUUID:ts,clamp:Et,euclideanModulo:Pa,mapLinear:kd,inverseLerp:Ld,lerp:ws,damp:Dd,pingpong:Id,smoothstep:Nd,smootherstep:Ud,randInt:Fd,randFloat:Od,randFloatSpread:Bd,seededRandom:zd,degToRad:Hd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Vd,floorPowerOfTwo:jd,setQuaternionFromProperEuler:Xd,normalize:Ot,denormalize:zn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,n,s,o,a,h,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,h,c)}set(e,t,i,n,s,o,a,h,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=a,d[3]=t,d[4]=s,d[5]=h,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],h=i[6],c=i[1],d=i[4],l=i[7],u=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],y=n[1],w=n[4],x=n[7],C=n[2],P=n[5],k=n[8];return s[0]=o*v+a*y+h*C,s[3]=o*m+a*w+h*P,s[6]=o*p+a*x+h*k,s[1]=c*v+d*y+l*C,s[4]=c*m+d*w+l*P,s[7]=c*p+d*x+l*k,s[2]=u*v+f*y+g*C,s[5]=u*m+f*w+g*P,s[8]=u*p+f*x+g*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],h=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*h+n*s*c-n*o*h}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],h=e[6],c=e[7],d=e[8],l=d*o-a*c,u=a*h-d*s,f=c*s-o*h,g=t*l+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=l*v,e[1]=(n*c-d*i)*v,e[2]=(a*i-n*o)*v,e[3]=u*v,e[4]=(d*t-n*h)*v,e[5]=(n*s-a*t)*v,e[6]=f*v,e[7]=(i*h-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const h=Math.cos(s),c=Math.sin(s);return this.set(i*h,i*c,-i*(h*o+c*a)+o+e,-n*c,n*h,-n*(-c*o+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zr.makeScale(e,t)),this}rotate(e){return this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Ge;function Yh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qd(){const r=Ar("canvas");return r.style.display="block",r}const ul={};function xs(r){r in ul||(ul[r]=!0,console.warn(r))}function Yd(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function $d(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?Ir:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const fl=[.64,.33,.3,.6,.15,.06],pl=[.2126,.7152,.0722],ml=[.3127,.329],gl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Qn]:{primaries:fl,whitePoint:ml,transfer:Ir,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:pl,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:fl,whitePoint:ml,transfer:ht,toXYZ:gl,fromXYZ:vl,luminanceCoefficients:pl,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let Sn;class Zd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sn===void 0&&(Sn=Ar("canvas")),Sn.width=e.width,Sn.height=e.height;const i=Sn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jd=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Hr(n[o].image)):s.push(Hr(n[o]))}else s=Hr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qd=0;class Ft extends es{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=gn,n=gn,s=pi,o=Ji,a=mi,h=Bi,c=Ft.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ts(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=h,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Uh;Ft.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,n=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const h=e.elements,c=h[0],d=h[4],l=h[8],u=h[1],f=h[5],g=h[9],v=h[2],m=h[6],p=h[10];if(Math.abs(d-u)<.01&&Math.abs(l-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(l+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(f+1)/2,C=(p+1)/2,P=(d+u)/4,k=(l+v)/4,I=(g+m)/4;return w>x&&w>C?w<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(w),n=P/i,s=k/i):x>C?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=P/n,s=I/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=k/s,n=I/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(l-v)*(l-v)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(l-v)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eu extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends eu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kh extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tu extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let h=i[n+0],c=i[n+1],d=i[n+2],l=i[n+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=h,e[t+1]=c,e[t+2]=d,e[t+3]=l;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(l!==v||h!==u||c!==f||d!==g){let m=1-a;const p=h*u+c*f+d*g+l*v,y=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const C=Math.sqrt(w),P=Math.atan2(C,p*y);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const x=a*y;if(h=h*m+u*x,c=c*m+f*x,d=d*m+g*x,l=l*m+v*x,m===1-a){const C=1/Math.sqrt(h*h+c*c+d*d+l*l);h*=C,c*=C,d*=C,l*=C}}e[t]=h,e[t+1]=c,e[t+2]=d,e[t+3]=l}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],h=i[n+1],c=i[n+2],d=i[n+3],l=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+d*l+h*f-c*u,e[t+1]=h*g+d*u+c*l-a*f,e[t+2]=c*g+d*f+a*u-h*l,e[t+3]=d*g-a*l-h*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,h=Math.sin,c=a(i/2),d=a(n/2),l=a(s/2),u=h(i/2),f=h(n/2),g=h(s/2);switch(o){case"XYZ":this._x=u*d*l+c*f*g,this._y=c*f*l-u*d*g,this._z=c*d*g+u*f*l,this._w=c*d*l-u*f*g;break;case"YXZ":this._x=u*d*l+c*f*g,this._y=c*f*l-u*d*g,this._z=c*d*g-u*f*l,this._w=c*d*l+u*f*g;break;case"ZXY":this._x=u*d*l-c*f*g,this._y=c*f*l+u*d*g,this._z=c*d*g+u*f*l,this._w=c*d*l-u*f*g;break;case"ZYX":this._x=u*d*l-c*f*g,this._y=c*f*l+u*d*g,this._z=c*d*g-u*f*l,this._w=c*d*l+u*f*g;break;case"YZX":this._x=u*d*l+c*f*g,this._y=c*f*l+u*d*g,this._z=c*d*g-u*f*l,this._w=c*d*l-u*f*g;break;case"XZY":this._x=u*d*l-c*f*g,this._y=c*f*l-u*d*g,this._z=c*d*g+u*f*l,this._w=c*d*l+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],h=t[9],c=t[2],d=t[6],l=t[10],u=i+a+l;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-h)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>l){const f=2*Math.sqrt(1+i-a-l);this._w=(d-h)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>l){const f=2*Math.sqrt(1+a-i-l);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(h+d)/f}else{const f=2*Math.sqrt(1+l-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(h+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,h=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+n*c-s*h,this._y=n*d+o*h+s*a-i*c,this._z=s*d+o*c+i*h-n*a,this._w=o*d-i*a-n*h-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const h=1-a*a;if(h<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(h),d=Math.atan2(c,a),l=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*l+this._w*u,this._x=i*l+this._x*u,this._y=n*l+this._y*u,this._z=s*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,i=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,h=e.w,c=2*(o*n-a*i),d=2*(a*t-s*n),l=2*(s*i-o*t);return this.x=t+h*c+o*l-a*d,this.y=i+h*d+a*c-s*l,this.z=n+h*l+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,h=t.z;return this.x=n*h-s*a,this.y=s*o-i*h,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new A,xl=new Ps;class tn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Us.subVectors(this.max,os),Tn.subVectors(e.a,os),En.subVectors(e.b,os),An.subVectors(e.c,os),Gi.subVectors(En,Tn),Wi.subVectors(An,En),sn.subVectors(Tn,An);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-sn.z,sn.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,sn.z,0,-sn.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-sn.y,sn.x,0];return!Wr(t,Tn,En,An,Us)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,Tn,En,An,Us))?!1:(Fs.crossVectors(Gi,Wi),t=[Fs.x,Fs.y,Fs.z],Wr(t,Tn,En,An,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new A,new A,new A,new A,new A,new A,new A,new A],hi=new A,Ns=new tn,Tn=new A,En=new A,An=new A,Gi=new A,Wi=new A,sn=new A,os=new A,Us=new A,Fs=new A,rn=new A;function Wr(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){rn.fromArray(r,s);const a=n.x*Math.abs(rn.x)+n.y*Math.abs(rn.y)+n.z*Math.abs(rn.z),h=e.dot(rn),c=t.dot(rn),d=i.dot(rn);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>a)return!1}return!0}const iu=new tn,as=new A,Vr=new A;class _n{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iu.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(as,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Vr)),this.expandByPoint(as.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new A,jr=new A,Os=new A,Vi=new A,Xr=new A,Bs=new A,qr=new A;class Nr{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){jr.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(jr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Os),a=Vi.dot(this.direction),h=-Vi.dot(Os),c=Vi.lengthSq(),d=Math.abs(1-o*o);let l,u,f,g;if(d>0)if(l=o*h-a,u=o*a-h,g=s*d,l>=0)if(u>=-g)if(u<=g){const v=1/d;l*=v,u*=v,f=l*(l+o*u+2*a)+u*(o*l+u+2*h)+c}else u=s,l=Math.max(0,-(o*u+a)),f=-l*l+u*(u+2*h)+c;else u=-s,l=Math.max(0,-(o*u+a)),f=-l*l+u*(u+2*h)+c;else u<=-g?(l=Math.max(0,-(-o*s+a)),u=l>0?-s:Math.min(Math.max(-s,-h),s),f=-l*l+u*(u+2*h)+c):u<=g?(l=0,u=Math.min(Math.max(-s,-h),s),f=u*(u+2*h)+c):(l=Math.max(0,-(o*s+a)),u=l>0?s:Math.min(Math.max(-s,-h),s),f=-l*l+u*(u+2*h)+c);else u=o>0?-s:s,l=Math.max(0,-(o*u+a)),f=-l*l+u*(u+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,l),n&&n.copy(jr).addScaledVector(Os,u),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),n=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,h;const c=1/this.direction.x,d=1/this.direction.y,l=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),l>=0?(a=(e.min.z-u.z)*l,h=(e.max.z-u.z)*l):(a=(e.max.z-u.z)*l,h=(e.min.z-u.z)*l),i>h||a>n)||((a>i||i!==i)&&(i=a),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,n,s){Xr.subVectors(t,e),Bs.subVectors(i,e),qr.crossVectors(Xr,Bs);let o=this.direction.dot(qr),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const h=a*this.direction.dot(Bs.crossVectors(Vi,Bs));if(h<0)return null;const c=a*this.direction.dot(Xr.cross(Vi));if(c<0||h+c>o)return null;const d=-a*Vi.dot(qr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,n,s,o,a,h,c,d,l,u,f,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,h,c,d,l,u,f,g,v,m)}set(e,t,i,n,s,o,a,h,c,d,l,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=h,p[2]=c,p[6]=d,p[10]=l,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Cn.setFromMatrixColumn(e,0).length(),s=1/Cn.setFromMatrixColumn(e,1).length(),o=1/Cn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(n),c=Math.sin(n),d=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const u=o*d,f=o*l,g=a*d,v=a*l;t[0]=h*d,t[4]=-h*l,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*h,t[2]=v-u*c,t[6]=g+f*c,t[10]=o*h}else if(e.order==="YXZ"){const u=h*d,f=h*l,g=c*d,v=c*l;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*l,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*h}else if(e.order==="ZXY"){const u=h*d,f=h*l,g=c*d,v=c*l;t[0]=u-v*a,t[4]=-o*l,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){const u=o*d,f=o*l,g=a*d,v=a*l;t[0]=h*d,t[4]=g*c-f,t[8]=u*c+v,t[1]=h*l,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){const u=o*h,f=o*c,g=a*h,v=a*c;t[0]=h*d,t[4]=v-u*l,t[8]=g*l+f,t[1]=l,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*l+g,t[10]=u-v*l}else if(e.order==="XZY"){const u=o*h,f=o*c,g=a*h,v=a*c;t[0]=h*d,t[4]=-l,t[8]=c*d,t[1]=u*l+v,t[5]=o*d,t[9]=f*l-g,t[2]=g*l-f,t[6]=a*d,t[10]=v*l+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nu,e,su)}lookAt(e,t,i){const n=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ji.crossVectors(i,Kt),ji.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ji.crossVectors(i,Kt)),ji.normalize(),zs.crossVectors(Kt,ji),n[0]=ji.x,n[4]=zs.x,n[8]=Kt.x,n[1]=ji.y,n[5]=zs.y,n[9]=Kt.y,n[2]=ji.z,n[6]=zs.z,n[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],h=i[8],c=i[12],d=i[1],l=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],w=i[7],x=i[11],C=i[15],P=n[0],k=n[4],I=n[8],T=n[12],b=n[1],N=n[5],j=n[9],V=n[13],Z=n[2],ie=n[6],K=n[10],se=n[14],$=n[3],fe=n[7],ye=n[11],Re=n[15];return s[0]=o*P+a*b+h*Z+c*$,s[4]=o*k+a*N+h*ie+c*fe,s[8]=o*I+a*j+h*K+c*ye,s[12]=o*T+a*V+h*se+c*Re,s[1]=d*P+l*b+u*Z+f*$,s[5]=d*k+l*N+u*ie+f*fe,s[9]=d*I+l*j+u*K+f*ye,s[13]=d*T+l*V+u*se+f*Re,s[2]=g*P+v*b+m*Z+p*$,s[6]=g*k+v*N+m*ie+p*fe,s[10]=g*I+v*j+m*K+p*ye,s[14]=g*T+v*V+m*se+p*Re,s[3]=y*P+w*b+x*Z+C*$,s[7]=y*k+w*N+x*ie+C*fe,s[11]=y*I+w*j+x*K+C*ye,s[15]=y*T+w*V+x*se+C*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],h=e[9],c=e[13],d=e[2],l=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*h*l-n*c*l-s*a*u+i*c*u+n*a*f-i*h*f)+v*(+t*h*f-t*c*u+s*o*u-n*o*f+n*c*d-s*h*d)+m*(+t*c*l-t*a*f-s*o*l+i*o*f+s*a*d-i*c*d)+p*(-n*a*d-t*h*l+t*a*u+n*o*l-i*o*u+i*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],h=e[6],c=e[7],d=e[8],l=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=l*m*c-v*u*c+v*h*f-a*m*f-l*h*p+a*u*p,w=g*u*c-d*m*c-g*h*f+o*m*f+d*h*p-o*u*p,x=d*v*c-g*l*c+g*a*f-o*v*f-d*a*p+o*l*p,C=g*l*h-d*v*h-g*a*u+o*v*u+d*a*m-o*l*m,P=t*y+i*w+n*x+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return e[0]=y*k,e[1]=(v*u*s-l*m*s-v*n*f+i*m*f+l*n*p-i*u*p)*k,e[2]=(a*m*s-v*h*s+v*n*c-i*m*c-a*n*p+i*h*p)*k,e[3]=(l*h*s-a*u*s-l*n*c+i*u*c+a*n*f-i*h*f)*k,e[4]=w*k,e[5]=(d*m*s-g*u*s+g*n*f-t*m*f-d*n*p+t*u*p)*k,e[6]=(g*h*s-o*m*s-g*n*c+t*m*c+o*n*p-t*h*p)*k,e[7]=(o*u*s-d*h*s+d*n*c-t*u*c-o*n*f+t*h*f)*k,e[8]=x*k,e[9]=(g*l*s-d*v*s-g*i*f+t*v*f+d*i*p-t*l*p)*k,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*p+t*a*p)*k,e[11]=(d*a*s-o*l*s-d*i*c+t*l*c+o*i*f-t*a*f)*k,e[12]=C*k,e[13]=(d*v*n-g*l*n+g*i*u-t*v*u-d*i*m+t*l*m)*k,e[14]=(g*a*n-o*v*n-g*i*h+t*v*h+o*i*m-t*a*m)*k,e[15]=(o*l*n-d*a*n+d*i*h-t*l*h-o*i*u+t*a*u)*k,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,h=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-n*h,c*h+n*a,0,c*a+n*h,d*a+i,d*h-n*o,0,c*h-n*a,d*h+n*o,s*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,h=t._w,c=s+s,d=o+o,l=a+a,u=s*c,f=s*d,g=s*l,v=o*d,m=o*l,p=a*l,y=h*c,w=h*d,x=h*l,C=i.x,P=i.y,k=i.z;return n[0]=(1-(v+p))*C,n[1]=(f+x)*C,n[2]=(g-w)*C,n[3]=0,n[4]=(f-x)*P,n[5]=(1-(u+p))*P,n[6]=(m+y)*P,n[7]=0,n[8]=(g+w)*k,n[9]=(m-y)*k,n[10]=(1-(u+v))*k,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Cn.set(n[0],n[1],n[2]).length();const o=Cn.set(n[4],n[5],n[6]).length(),a=Cn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ci.copy(this);const c=1/s,d=1/o,l=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=d,ci.elements[5]*=d,ci.elements[6]*=d,ci.elements[8]*=l,ci.elements[9]*=l,ci.elements[10]*=l,t.setFromRotationMatrix(ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Ni){const h=this.elements,c=2*s/(t-e),d=2*s/(i-n),l=(t+e)/(t-e),u=(i+n)/(i-n);let f,g;if(a===Ni)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Er)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=d,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Ni){const h=this.elements,c=1/(t-e),d=1/(i-n),l=1/(o-s),u=(t+e)*c,f=(i+n)*d;let g,v;if(a===Ni)g=(o+s)*l,v=-2*l;else if(a===Er)g=s*l,v=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-u,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=v,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Cn=new A,ci=new at,nu=new A(0,0,0),su=new A(1,1,1),ji=new A,zs=new A,Kt=new A,yl=new at,_l=new Ps;class Mi{constructor(e=0,t=0,i=0,n=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],h=n[1],c=n[5],d=n[9],l=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ru=0;const wl=new A,Pn=new Ps,Ci=new at,Hs=new A,ls=new A,ou=new A,au=new Ps,Ml=new A(1,0,0),bl=new A(0,1,0),Sl=new A(0,0,1),Tl={type:"added"},lu={type:"removed"},Rn={type:"childadded",child:null},Yr={type:"childremoved",child:null};class St extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new A,t=new Mi,i=new Ps,n=new A(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hs.copy(e):Hs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(ls,Hs,this.up):Ci.lookAt(Hs,ls,this.up),this.quaternion.setFromRotationMatrix(Ci),n&&(Ci.extractRotation(n.matrixWorld),Pn.setFromRotationMatrix(Ci),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tl),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tl),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,ou),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let c=0,d=h.length;c<d;c++){const l=h[c];s(e.shapes,l)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,c=this.material.length;h<c;h++)a.push(s(e.materials,this.material[h]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];n.animations.push(s(e.animations,h))}}if(t){const a=o(e.geometries),h=o(e.materials),c=o(e.textures),d=o(e.images),l=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),l.length>0&&(i.shapes=l),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const h=[];for(const c in a){const d=a[c];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}St.DEFAULT_UP=new A(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new A,Pi=new A,$r=new A,Ri=new A,kn=new A,Ln=new A,El=new A,Kr=new A,Zr=new A,Jr=new A,Qr=new ct,eo=new ct,to=new ct;class ri{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),di.subVectors(e,t),n.cross(di);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){di.subVectors(n,t),Pi.subVectors(i,t),$r.subVectors(e,t);const o=di.dot(di),a=di.dot(Pi),h=di.dot($r),c=Pi.dot(Pi),d=Pi.dot($r),l=o*c-a*a;if(l===0)return s.set(0,0,0),null;const u=1/l,f=(c*h-a*d)*u,g=(o*d-a*h)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,n,s,o,a,h){return this.getBarycoord(e,t,i,n,Ri)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Ri.x),h.addScaledVector(o,Ri.y),h.addScaledVector(a,Ri.z),h)}static getInterpolatedAttribute(e,t,i,n,s,o){return Qr.setScalar(0),eo.setScalar(0),to.setScalar(0),Qr.fromBufferAttribute(e,t),eo.fromBufferAttribute(e,i),to.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Qr,s.x),o.addScaledVector(eo,s.y),o.addScaledVector(to,s.z),o}static isFrontFacing(e,t,i,n){return di.subVectors(i,t),Pi.subVectors(e,t),di.cross(Pi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),di.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;kn.subVectors(n,i),Ln.subVectors(s,i),Kr.subVectors(e,i);const h=kn.dot(Kr),c=Ln.dot(Kr);if(h<=0&&c<=0)return t.copy(i);Zr.subVectors(e,n);const d=kn.dot(Zr),l=Ln.dot(Zr);if(d>=0&&l<=d)return t.copy(n);const u=h*l-d*c;if(u<=0&&h>=0&&d<=0)return o=h/(h-d),t.copy(i).addScaledVector(kn,o);Jr.subVectors(e,s);const f=kn.dot(Jr),g=Ln.dot(Jr);if(g>=0&&f<=g)return t.copy(s);const v=f*c-h*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ln,a);const m=d*g-f*l;if(m<=0&&l-d>=0&&f-g>=0)return El.subVectors(s,n),a=(l-d)/(l-d+(f-g)),t.copy(n).addScaledVector(El,a);const p=1/(m+v+u);return o=v*p,a=u*p,t.copy(i).addScaledVector(kn,o).addScaledVector(Ln,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=nt.workingColorSpace){if(e=Pa(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=io(o,s,e+1/3),this.g=io(o,s,e),this.b=io(o,s,e-1/3)}return nt.toWorkingColorSpace(this,n),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=Zh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return nt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Et(Nt.r*255,0,255))*65536+Math.round(Et(Nt.g*255,0,255))*256+Math.round(Et(Nt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,n=Nt.g,s=Nt.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let h,c;const d=(a+o)/2;if(a===o)h=0,c=0;else{const l=o-a;switch(c=d<=.5?l/(o+a):l/(2-o-a),o){case i:h=(n-s)/l+(n<s?6:0);break;case n:h=(s-i)/l+2;break;case s:h=(i-n)/l+4;break}h/=6}return e.h=h,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=zt){nt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,n=Nt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(Gs);const i=ws(Xi.h,Gs.h,t),n=ws(Xi.s,Gs.s,t),s=ws(Xi.l,Gs.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ue;Ue.NAMES=Zh;let hu=0;class wn extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=ts(),this.name="",this.blending=Gn,this.side=en,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Ro,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bn,this.stencilZFail=bn,this.stencilZPass=bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gn&&(i.blending=this.blending),this.side!==en&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Po&&(i.blendSrc=this.blendSrc),this.blendDst!==Ro&&(i.blendDst=this.blendDst),this.blendEquation!==pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ut extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new A,Ws=new he;class ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ll,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Jh extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qh extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ze extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cu=0;const ni=new at,no=new St,Dn=new A,Zt=new tn,hs=new tn,Pt=new A;class wt extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?Qh:Jh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Zt.min,hs.min),Zt.expandByPoint(Pt),Pt.addVectors(Zt.max,hs.max),Zt.expandByPoint(Pt)):(Zt.expandByPoint(hs.min),Zt.expandByPoint(hs.max))}Zt.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],h=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),h&&(Dn.fromBufferAttribute(e,c),Pt.add(Dn)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let I=0;I<i.count;I++)a[I]=new A,h[I]=new A;const c=new A,d=new A,l=new A,u=new he,f=new he,g=new he,v=new A,m=new A;function p(I,T,b){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,T),l.fromBufferAttribute(i,b),u.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),d.sub(c),l.sub(c),f.sub(u),g.sub(u);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(l,-f.y).multiplyScalar(N),m.copy(l).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(N),a[I].add(v),a[T].add(v),a[b].add(v),h[I].add(m),h[T].add(m),h[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,T=y.length;I<T;++I){const b=y[I],N=b.start,j=b.count;for(let V=N,Z=N+j;V<Z;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new A,x=new A,C=new A,P=new A;function k(I){C.fromBufferAttribute(n,I),P.copy(C);const T=a[I];w.copy(T),w.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(P,T);const N=x.dot(h[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,N)}for(let I=0,T=y.length;I<T;++I){const b=y[I],N=b.start,j=b.count;for(let V=N,Z=N+j;V<Z;V+=3)k(e.getX(V+0)),k(e.getX(V+1)),k(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new A,s=new A,o=new A,a=new A,h=new A,c=new A,d=new A,l=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,s),l.subVectors(n,s),d.cross(l),a.fromBufferAttribute(i,g),h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),h.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),l.subVectors(n,s),d.cross(l),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,h){const c=a.array,d=a.itemSize,l=a.normalized,u=new c.constructor(h.length*d);let f=0,g=0;for(let v=0,m=h.length;v<m;v++){a.isInterleavedBufferAttribute?f=h[v]*a.data.stride+a.offset:f=h[v]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new ei(u,d,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,n=this.attributes;for(const a in n){const h=n[a],c=e(h,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const h=[],c=s[a];for(let d=0,l=c.length;d<l;d++){const u=c[d],f=e(u,i);h.push(f)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const c=i[h];e.data.attributes[h]=c.toJSON(e.data)}const n={};let s=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],d=[];for(let l=0,u=c.length;l<u;l++){const f=c[l];d.push(f.toJSON(e.data))}d.length>0&&(n[h]=d,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],l=s[c];for(let u=0,f=l.length;u<f;u++)d.push(l[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const l=o[c];this.addGroup(l.start,l.count,l.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new at,on=new Nr,Vs=new _n,Cl=new A,js=new A,Xs=new A,qs=new A,so=new A,Ys=new A,Pl=new A,$s=new A;class D extends St{constructor(e=new wt,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Ys.set(0,0,0);for(let h=0,c=s.length;h<c;h++){const d=a[h],l=s[h];d!==0&&(so.fromBufferAttribute(l,e),o?Ys.addScaledVector(so,d):Ys.addScaledVector(so.sub(t),d))}t.add(Ys)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(s),on.copy(e.ray).recast(e.near),!(Vs.containsPoint(on.origin)===!1&&(on.intersectSphere(Vs,Cl)===null||on.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Al.copy(s).invert(),on.copy(e.ray).applyMatrix4(Al),!(i.boundingBox!==null&&on.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,on)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,l=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=w;x<C;x+=3){const P=a.getX(x),k=a.getX(x+1),I=a.getX(x+2);n=Ks(this,p,e,i,c,d,l,P,k,I),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);n=Ks(this,o,e,i,c,d,l,y,w,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=w;x<C;x+=3){const P=x,k=x+1,I=x+2;n=Ks(this,p,e,i,c,d,l,P,k,I),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(h.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,w=m+1,x=m+2;n=Ks(this,o,e,i,c,d,l,y,w,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function du(r,e,t,i,n,s,o,a){let h;if(e.side===qt?h=i.intersectTriangle(o,s,n,!0,a):h=i.intersectTriangle(n,s,o,e.side===en,a),h===null)return null;$s.copy(a),$s.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:r}}function Ks(r,e,t,i,n,s,o,a,h,c){r.getVertexPosition(a,js),r.getVertexPosition(h,Xs),r.getVertexPosition(c,qs);const d=du(r,e,t,i,js,Xs,qs,Pl);if(d){const l=new A;ri.getBarycoord(Pl,js,Xs,qs,l),n&&(d.uv=ri.getInterpolatedAttribute(n,a,h,c,l,new he)),s&&(d.uv1=ri.getInterpolatedAttribute(s,a,h,c,l,new he)),o&&(d.normal=ri.getInterpolatedAttribute(o,a,h,c,l,new A),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:h,c,normal:new A,materialIndex:0};ri.getNormal(js,Xs,qs,u.normal),d.face=u,d.barycoord=l}return d}class de extends wt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const h=[],c=[],d=[],l=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(l,2));function g(v,m,p,y,w,x,C,P,k,I,T){const b=x/k,N=C/I,j=x/2,V=C/2,Z=P/2,ie=k+1,K=I+1;let se=0,$=0;const fe=new A;for(let ye=0;ye<K;ye++){const Re=ye*N-V;for(let Ye=0;Ye<ie;Ye++){const dt=Ye*b-j;fe[v]=dt*y,fe[m]=Re*w,fe[p]=Z,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[p]=P>0?1:-1,d.push(fe.x,fe.y,fe.z),l.push(Ye/k),l.push(1-ye/I),se+=1}}for(let ye=0;ye<I;ye++)for(let Re=0;Re<k;Re++){const Ye=u+Re+ie*ye,dt=u+Re+ie*(ye+1),Q=u+(Re+1)+ie*(ye+1),ae=u+(Re+1)+ie*ye;h.push(Ye,dt,ae),h.push(dt,Q,ae),$+=6}a.addGroup(f,$,T),f+=$,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Bt(r){const e={};for(let t=0;t<r.length;t++){const i=Zn(r[t]);for(const n in i)e[n]=i[n]}return e}function uu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ec(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Cr={clone:Zn,merge:Bt};var fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new A,Rl=new he,kl=new he;class jt extends tc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Vn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Rl,kl),t.subVectors(kl,Rl)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/h,t-=o.offsetY*i/c,n*=o.width/h,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const In=-90,Nn=1;class mu extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new jt(In,Nn,e,t);n.layers=this.layers,this.add(n);const s=new jt(In,Nn,e,t);s.layers=this.layers,this.add(s);const o=new jt(In,Nn,e,t);o.layers=this.layers,this.add(o);const a=new jt(In,Nn,e,t);a.layers=this.layers,this.add(a);const h=new jt(In,Nn,e,t);h.layers=this.layers,this.add(h);const c=new jt(In,Nn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,h]=t;for(const c of t)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,c,d]=this.children,l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,h),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,d),e.setRenderTarget(l,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ic extends Ft{constructor(e,t,i,n,s,o,a,h,c,d){e=e!==void 0?e:[],t=t!==void 0?t:qn,super(e,t,i,n,s,o,a,h,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gu extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ic(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new de(5,5,5),s=new Xt({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Ui});s.uniforms.tEquirect.value=t;const o=new D(n,s),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=pi),new mu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const ro=new A,vu=new A,xu=new Ge;class $i{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ro.subVectors(i,t).cross(vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ro),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xu.getNormalMatrix(e),n=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const an=new _n,Zs=new A;class ka{constructor(e=new $i,t=new $i,i=new $i,n=new $i,s=new $i,o=new $i){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],h=n[3],c=n[4],d=n[5],l=n[6],u=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],y=n[13],w=n[14],x=n[15];if(i[0].setComponents(h-s,u-c,m-f,x-p).normalize(),i[1].setComponents(h+s,u+c,m+f,x+p).normalize(),i[2].setComponents(h+o,u+d,m+g,x+y).normalize(),i[3].setComponents(h-o,u-d,m-g,x-y).normalize(),i[4].setComponents(h-a,u-l,m-v,x-w).normalize(),t===Ni)i[5].setComponents(h+a,u+l,m+v,x+w).normalize();else if(t===Er)i[5].setComponents(a,l,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),an.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),an.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(an)}intersectsSprite(e){return an.center.set(0,0,0),an.radius=.7071067811865476,an.applyMatrix4(e.matrixWorld),this.intersectsSphere(an)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Zs.x=n.normal.x>0?e.max.x:e.min.x,Zs.y=n.normal.y>0?e.max.y:e.min.y,Zs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yu(r){const e=new WeakMap;function t(a,h){const c=a.array,d=a.usage,l=c.byteLength,u=r.createBuffer();r.bindBuffer(h,u),r.bufferData(h,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:l}}function i(a,h,c){const d=h.array,l=h.updateRanges;if(r.bindBuffer(c,a),l.length===0)r.bufferSubData(c,0,d);else{l.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<l.length;f++){const g=l[u],v=l[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,l[u]=v)}l.length=u+1;for(let f=0,g=l.length;f<g;f++){const v=l[f];r.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}h.clearUpdateRanges()}h.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=e.get(a);h&&(r.deleteBuffer(h.buffer),e.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,h));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,h),c.version=a.version}}return{get:n,remove:s,update:o}}class vi extends wt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),h=Math.floor(n),c=a+1,d=h+1,l=e/a,u=t/h,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const y=p*u-o;for(let w=0;w<c;w++){const x=w*l-s;g.push(x,-y,0),v.push(0,0,1),m.push(w/a),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let y=0;y<a;y++){const w=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),P=y+1+c*p;f.push(w,x,P),f.push(x,C,P)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
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
#endif`,Au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
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
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Du=`#ifdef USE_IRIDESCENCE
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
#endif`,Iu=`#ifdef USE_BUMPMAP
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
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wu=`#define PI 3.141592653589793
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
} // validated`,Vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
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
}`,hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
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
#endif`,yf=`struct PhysicalMaterial {
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
}`,_f=`
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Wp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,jp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Zp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:_u,alphahash_pars_fragment:wu,alphamap_fragment:Mu,alphamap_pars_fragment:bu,alphatest_fragment:Su,alphatest_pars_fragment:Tu,aomap_fragment:Eu,aomap_pars_fragment:Au,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Ru,beginnormal_vertex:ku,bsdfs:Lu,iridescence_fragment:Du,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Nu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Ou,color_fragment:Bu,color_pars_fragment:zu,color_pars_vertex:Hu,color_vertex:Gu,common:Wu,cube_uv_reflection_fragment:Vu,defaultnormal_vertex:ju,displacementmap_pars_vertex:Xu,displacementmap_vertex:qu,emissivemap_fragment:Yu,emissivemap_pars_fragment:$u,colorspace_fragment:Ku,colorspace_pars_fragment:Zu,envmap_fragment:Ju,envmap_common_pars_fragment:Qu,envmap_pars_fragment:ef,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:of,fog_pars_fragment:af,gradientmap_pars_fragment:lf,lightmap_pars_fragment:hf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:df,lights_pars_begin:uf,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:vf,lights_physical_fragment:xf,lights_physical_pars_fragment:yf,lights_fragment_begin:_f,lights_fragment_maps:wf,lights_fragment_end:Mf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Ef,map_fragment:Af,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:Rf,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Lf,morphinstance_vertex:Df,morphcolor_vertex:If,morphnormal_vertex:Nf,morphtarget_pars_vertex:Uf,morphtarget_vertex:Ff,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:Hf,normal_vertex:Gf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:qf,opaque_fragment:Yf,packing:$f,premultiplied_alpha_fragment:Kf,project_vertex:Zf,dithering_fragment:Jf,dithering_pars_fragment:Qf,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:np,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:op,skinning_pars_vertex:ap,skinning_vertex:lp,skinnormal_vertex:hp,specularmap_fragment:cp,specularmap_pars_fragment:dp,tonemapping_fragment:up,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:vp,uv_vertex:xp,worldpos_vertex:yp,background_vert:_p,background_frag:wp,backgroundCube_vert:Mp,backgroundCube_frag:bp,cube_vert:Sp,cube_frag:Tp,depth_vert:Ep,depth_frag:Ap,distanceRGBA_vert:Cp,distanceRGBA_frag:Pp,equirect_vert:Rp,equirect_frag:kp,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Ip,meshbasic_frag:Np,meshlambert_vert:Up,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:Hp,meshphong_vert:Gp,meshphong_frag:Wp,meshphysical_vert:Vp,meshphysical_frag:jp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:$p,shadow_vert:Kp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:Qp},ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},yi={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yi.physical={uniforms:Bt([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Js={r:0,b:0,g:0},ln=new Mi,em=new at;function tm(r,e,t,i,n,s,o){const a=new Ue(0);let h=s===!0?0:1,c,d,l=null,u=0,f=null;function g(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?t:e).get(w)),w}function v(y){let w=!1;const x=g(y);x===null?p(a,h):x&&x.isColor&&(p(x,1),w=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,w){const x=g(w);x&&(x.isCubeTexture||x.mapping===Dr)?(d===void 0&&(d=new D(new de(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Zn(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),ln.copy(w.backgroundRotation),ln.x*=-1,ln.y*=-1,ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(ln)),d.material.toneMapped=nt.getTransfer(x.colorSpace)!==ht,(l!==x||u!==x.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,l=x,u=x.version,f=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new D(new vi(2,2),new Xt({name:"BackgroundMaterial",uniforms:Zn(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||u!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,l=x,u=x.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,w){y.getRGB(Js,ec(r)),i.buffers.color.setClear(Js.r,Js.g,Js.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),h=w,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,p(a,h)},render:v,addToRenderList:m}}function im(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,o=!1;function a(b,N,j,V,Z){let ie=!1;const K=l(V,j,N);s!==K&&(s=K,c(s.object)),ie=f(b,V,j,Z),ie&&g(b,V,j,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,x(b,N,j,V),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function h(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function d(b){return r.deleteVertexArray(b)}function l(b,N,j){const V=j.wireframe===!0;let Z=i[b.id];Z===void 0&&(Z={},i[b.id]=Z);let ie=Z[N.id];ie===void 0&&(ie={},Z[N.id]=ie);let K=ie[V];return K===void 0&&(K=u(h()),ie[V]=K),K}function u(b){const N=[],j=[],V=[];for(let Z=0;Z<t;Z++)N[Z]=0,j[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,N,j,V){const Z=s.attributes,ie=N.attributes;let K=0;const se=j.getAttributes();for(const $ in se)if(se[$].location>=0){const ye=Z[$];let Re=ie[$];if(Re===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),ye===void 0||ye.attribute!==Re||Re&&ye.data!==Re.data)return!0;K++}return s.attributesNum!==K||s.index!==V}function g(b,N,j,V){const Z={},ie=N.attributes;let K=0;const se=j.getAttributes();for(const $ in se)if(se[$].location>=0){let ye=ie[$];ye===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor));const Re={};Re.attribute=ye,ye&&ye.data&&(Re.data=ye.data),Z[$]=Re,K++}s.attributes=Z,s.attributesNum=K,s.index=V}function v(){const b=s.newAttributes;for(let N=0,j=b.length;N<j;N++)b[N]=0}function m(b){p(b,0)}function p(b,N){const j=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;j[b]=1,V[b]===0&&(r.enableVertexAttribArray(b),V[b]=1),Z[b]!==N&&(r.vertexAttribDivisor(b,N),Z[b]=N)}function y(){const b=s.newAttributes,N=s.enabledAttributes;for(let j=0,V=N.length;j<V;j++)N[j]!==b[j]&&(r.disableVertexAttribArray(j),N[j]=0)}function w(b,N,j,V,Z,ie,K){K===!0?r.vertexAttribIPointer(b,N,j,Z,ie):r.vertexAttribPointer(b,N,j,V,Z,ie)}function x(b,N,j,V){v();const Z=V.attributes,ie=j.getAttributes(),K=N.defaultAttributeValues;for(const se in ie){const $=ie[se];if($.location>=0){let fe=Z[se];if(fe===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){const ye=fe.normalized,Re=fe.itemSize,Ye=e.get(fe);if(Ye===void 0)continue;const dt=Ye.buffer,Q=Ye.type,ae=Ye.bytesPerElement,Ae=Q===r.INT||Q===r.UNSIGNED_INT||fe.gpuType===Ma;if(fe.isInterleavedBufferAttribute){const pe=fe.data,Ne=pe.stride,Be=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let $e=0;$e<$.locationSize;$e++)p($.location+$e,pe.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let $e=0;$e<$.locationSize;$e++)m($.location+$e);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let $e=0;$e<$.locationSize;$e++)w($.location+$e,Re/$.locationSize,Q,ye,Ne*ae,(Be+Re/$.locationSize*$e)*ae,Ae)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<$.locationSize;pe++)p($.location+pe,fe.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<$.locationSize;pe++)m($.location+pe);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let pe=0;pe<$.locationSize;pe++)w($.location+pe,Re/$.locationSize,Q,ye,Re*ae,Re/$.locationSize*pe*ae,Ae)}}else if(K!==void 0){const ye=K[se];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv($.location,ye);break;case 3:r.vertexAttrib3fv($.location,ye);break;case 4:r.vertexAttrib4fv($.location,ye);break;default:r.vertexAttrib1fv($.location,ye)}}}}y()}function C(){I();for(const b in i){const N=i[b];for(const j in N){const V=N[j];for(const Z in V)d(V[Z].object),delete V[Z];delete N[j]}delete i[b]}}function P(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const j in N){const V=N[j];for(const Z in V)d(V[Z].object),delete V[Z];delete N[j]}delete i[b.id]}function k(b){for(const N in i){const j=i[N];if(j[b.id]===void 0)continue;const V=j[b.id];for(const Z in V)d(V[Z].object),delete V[Z];delete j[b.id]}}function I(){T(),o=!0,s!==n&&(s=n,c(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function nm(r,e,t){let i;function n(c){i=c}function s(c,d){r.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,l){l!==0&&(r.drawArraysInstanced(i,c,d,l),t.update(d,i,l))}function a(c,d,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,l);let f=0;for(let g=0;g<l;g++)f+=d[g];t.update(f,i,1)}function h(c,d,l,u){if(l===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,l);let g=0;for(let v=0;v<l;v++)g+=d[v]*u[v];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function sm(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(k){return!(k!==mi&&i.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(k){const I=k===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Bi&&i.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==_i&&!I)}function h(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=h(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const l=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:l,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:C,maxSamples:P}}function rm(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new $i,a=new Ge,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const f=l.length!==0||u||i!==0||n;return n=u,i=l.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,u){t=d(l,u,0)},this.setState=function(l,u,f){const g=l.clippingPlanes,v=l.clipIntersection,m=l.clipShadows,p=r.get(l);if(!n||g===null||g.length===0||s&&!m)s?d(null):c();else{const y=s?0:i,w=y*4;let x=p.clippingState||null;h.value=x,x=d(g,u,w,f);for(let C=0;C!==w;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(l,u,f,g){const v=l!==null?l.length:0;let m=null;if(v!==0){if(m=h.value,g!==!0||m===null){const p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==v;++w,x+=4)o.copy(l[w]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function om(r){let e=new WeakMap;function t(o,a){return a===Oo?o.mapping=qn:a===Bo&&(o.mapping=Yn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oo||a===Bo)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const c=new gu(h.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class La extends tc{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,h=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,h=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hn=4,Ll=[.125,.215,.35,.446,.526,.582],mn=20,oo=new La,Dl=new Ue;let ao=null,lo=0,ho=0,co=!1;const fn=(1+Math.sqrt(5))/2,Un=1/fn,Il=[new A(-fn,Un,0),new A(fn,Un,0),new A(-Un,0,fn),new A(Un,0,fn),new A(0,fn,-Un),new A(0,fn,Un),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,lo,ho),this._renderer.xr.enabled=co,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===Yn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Fi,format:mi,colorSpace:Qn,depthBuffer:!1},n=Ul(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(s)),this._blurMaterial=lm(s,e,t)}return n}_compileMaterial(e){const t=new D(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,i,n){const a=new jt(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,l=d.autoClear,u=d.toneMapping;d.getClearColor(Dl),d.toneMapping=Qi,d.autoClear=!1;const f=new Ut({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new D(new de,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Dl),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,h[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,h[p]),a.lookAt(0,c[p],0)):(a.up.set(0,h[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Qs(n,y*w,p>2?w:0,w,w),d.setRenderTarget(n),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=l,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===qn||e.mapping===Yn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new D(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const h=this._cubeSize;Qs(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(o,oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Il[(n-s-1)%Il.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const h=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,l=new D(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*mn-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):mn;m>mn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mn}`);const p=[];let y=0;for(let k=0;k<mn;++k){const I=k/v,T=Math.exp(-I*I/2);p.push(T),k===0?y+=T:k<m&&(y+=2*T)}for(let k=0;k<p.length;k++)p[k]=p[k]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;const x=this._sizeLods[n],C=3*x*(n>w-Hn?n-w+Hn:0),P=4*(this._cubeSize-x);Qs(t,C,P,3*x,2*x),h.setRenderTarget(t),h.render(l,oo)}}function am(r){const e=[],t=[],i=[];let n=r;const s=r-Hn+1+Ll.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let h=1/a;o>r-Hn?h=Ll[o-r+Hn-1]:o===0&&(h=0),i.push(h);const c=1/(a-2),d=-c,l=1+c,u=[d,d,l,d,l,l,d,d,l,l,d,l],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),w=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let P=0;P<f;P++){const k=P%3*2/3-1,I=P>2?0:-1,T=[k,I,0,k+2/3,I,0,k+2/3,I+1,0,k,I,0,k+2/3,I+1,0,k,I+1,0];y.set(T,v*g*P),w.set(u,m*g*P);const b=[P,P,P,P,P,P];x.set(b,p*g*P)}const C=new wt;C.setAttribute("position",new ei(y,v)),C.setAttribute("uv",new ei(w,m)),C.setAttribute("faceIndex",new ei(x,p)),e.push(C),n>Hn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ul(r,e,t){const i=new gi(r,e,t);return i.texture.mapping=Dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function lm(r,e,t){const i=new Float32Array(mn),n=new A(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Fl(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ol(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function hm(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const h=a.mapping,c=h===Oo||h===Bo,d=h===qn||h===Yn;if(c||d){let l=e.get(a);const u=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Nl(r)),l=c?t.fromEquirectangular(a,l):t.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),l.texture;if(l!==void 0)return l.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&n(f)?(t===null&&(t=new Nl(r)),l=c?t.fromEquirectangular(a):t.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),a.addEventListener("dispose",s),l.texture):null}}}return a}function n(a){let h=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&h++;return h===c}function s(a){const h=a.target;h.removeEventListener("dispose",s);const c=e.get(h);c!==void 0&&(e.delete(h),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cm(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&xs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function dm(r,e,t,i){const n={},s=new WeakMap;function o(l){const u=l.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(l,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function h(l){const u=l.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=l.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],r.ARRAY_BUFFER)}}function c(l){const u=[],f=l.index,g=l.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let w=0,x=y.length;w<x;w+=3){const C=y[w+0],P=y[w+1],k=y[w+2];u.push(C,P,P,k,k,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let w=0,x=y.length/3-1;w<x;w+=3){const C=w+0,P=w+1,k=w+2;u.push(C,P,P,k,k,C)}}else return;const m=new(Yh(u)?Qh:Jh)(u,1);m.version=v;const p=s.get(l);p&&e.remove(p),s.set(l,m)}function d(l){const u=s.get(l);if(u){const f=l.index;f!==null&&u.version<f.version&&c(l)}else c(l);return s.get(l)}return{get:a,update:h,getWireframeAttribute:d}}function um(r,e,t){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function h(u,f){r.drawElements(i,f,s,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,u*o,g),t.update(f,i,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function l(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=h,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=l}function fm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function pm(r,e,t){const i=new WeakMap,n=new ct;function s(o,a,h){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==l){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const k=new Float32Array(C*P*4*l),I=new Kh(k,C,P,l);I.type=_i,I.needsUpdate=!0;const T=x*4;for(let N=0;N<l;N++){const j=p[N],V=y[N],Z=w[N],ie=C*P*4*N;for(let K=0;K<j.count;K++){const se=K*T;g===!0&&(n.fromBufferAttribute(j,K),k[ie+se+0]=n.x,k[ie+se+1]=n.y,k[ie+se+2]=n.z,k[ie+se+3]=0),v===!0&&(n.fromBufferAttribute(V,K),k[ie+se+4]=n.x,k[ie+se+5]=n.y,k[ie+se+6]=n.z,k[ie+se+7]=0),m===!0&&(n.fromBufferAttribute(Z,K),k[ie+se+8]=n.x,k[ie+se+9]=n.y,k[ie+se+10]=n.z,k[ie+se+11]=Z.itemSize===4?n.w:1)}}u={count:l,texture:I,size:new he(C,P)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",c)}h.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function mm(r,e,t,i){let n=new WeakMap;function s(h){const c=i.render.frame,d=h.geometry,l=e.get(h,d);if(n.get(l)!==c&&(e.update(l),n.set(l,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),n.get(h)!==c&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){const u=h.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return l}function o(){n=new WeakMap}function a(h){const c=h.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class sc extends Ft{constructor(e,t,i,n,s,o,a,h,c,d=Wn){if(d!==Wn&&d!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Wn&&(i=xn),i===void 0&&d===Kn&&(i=$n),super(null,n,s,o,a,h,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=h!==void 0?h:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rc=new Ft,Bl=new sc(1,1),oc=new Kh,ac=new tu,lc=new ic,zl=[],Hl=[],Gl=new Float32Array(16),Wl=new Float32Array(9),Vl=new Float32Array(4);function is(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=zl[n];if(s===void 0&&(s=new Float32Array(n),zl[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ur(r,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function gm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function _m(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Vl.set(i),r.uniformMatrix2fv(this.addr,!1,Vl),Ct(t,i)}}function wm(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Wl.set(i),r.uniformMatrix3fv(this.addr,!1,Wl),Ct(t,i)}}function Mm(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;Gl.set(i),r.uniformMatrix4fv(this.addr,!1,Gl),Ct(t,i)}}function bm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function Tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function Em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function Am(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function Pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function Rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function km(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Bl.compareFunction=qh,s=Bl):s=rc,t.setTexture2D(e||s,n)}function Lm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||ac,n)}function Dm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||lc,n)}function Im(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||oc,n)}function Nm(r){switch(r){case 5126:return gm;case 35664:return vm;case 35665:return xm;case 35666:return ym;case 35674:return _m;case 35675:return wm;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return Tm;case 35669:case 35673:return Em;case 5125:return Am;case 36294:return Cm;case 36295:return Pm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}function Um(r,e){r.uniform1fv(this.addr,e)}function Fm(r,e){const t=is(e,this.size,2);r.uniform2fv(this.addr,t)}function Om(r,e){const t=is(e,this.size,3);r.uniform3fv(this.addr,t)}function Bm(r,e){const t=is(e,this.size,4);r.uniform4fv(this.addr,t)}function zm(r,e){const t=is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hm(r,e){const t=is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Gm(r,e){const t=is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wm(r,e){r.uniform1iv(this.addr,e)}function Vm(r,e){r.uniform2iv(this.addr,e)}function jm(r,e){r.uniform3iv(this.addr,e)}function Xm(r,e){r.uniform4iv(this.addr,e)}function qm(r,e){r.uniform1uiv(this.addr,e)}function Ym(r,e){r.uniform2uiv(this.addr,e)}function $m(r,e){r.uniform3uiv(this.addr,e)}function Km(r,e){r.uniform4uiv(this.addr,e)}function Zm(r,e,t){const i=this.cache,n=e.length,s=Ur(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||rc,s[o])}function Jm(r,e,t){const i=this.cache,n=e.length,s=Ur(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||ac,s[o])}function Qm(r,e,t){const i=this.cache,n=e.length,s=Ur(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||lc,s[o])}function eg(r,e,t){const i=this.cache,n=e.length,s=Ur(t,n);At(i,s)||(r.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||oc,s[o])}function tg(r){switch(r){case 5126:return Um;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Vm;case 35668:case 35672:return jm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return eg}}class ig{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}}class ng{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tg(t.type)}}class sg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function jl(r,e){r.seq.push(e),r.map[e.id]=e}function rg(r,e,t){const i=r.name,n=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),o=uo.lastIndex;let a=s[1];const h=s[2]==="]",c=s[3];if(h&&(a=a|0),c===void 0||c==="["&&o+2===n){jl(t,c===void 0?new ig(a,r,e):new ng(a,r,e));break}else{let l=t.map[a];l===void 0&&(l=new sg(a),jl(t,l)),t=l}}}class wr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);rg(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],h=i[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Xl(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const og=37297;let ag=0;function lg(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ql=new Ge;function hg(r){nt._getMatrix(ql,nt.workingColorSpace,r);const e=`mat3( ${ql.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(r)){case Ir:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+lg(r.getShaderSource(e),o)}else return n}function cg(r,e){const t=hg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dg(r,e){let t;switch(e){case fd:t="Linear";break;case pd:t="Reinhard";break;case md:t="Cineon";break;case Nh:t="ACESFilmic";break;case vd:t="AgX";break;case xd:t="Neutral";break;case gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const er=new A;function ug(){nt.getLuminanceCoefficients(er);const r=er.x.toFixed(4),e=er.y.toFixed(4),t=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function pg(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mg(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ys(r){return r!==""}function $l(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(r){return r.replace(gg,xg)}const vg=new Map;function xg(r,e){let t=Ve[e];if(t===void 0){const i=vg.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fa(t)}const yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(r){return r.replace(yg,_g)}function _g(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Jl(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function wg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Mg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qn:case Yn:e="ENVMAP_TYPE_CUBE";break;case Dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Yn:e="ENVMAP_MODE_REFRACTION";break}return e}function Sg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ih:e="ENVMAP_BLENDING_MULTIPLY";break;case dd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function Tg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Eg(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const h=wg(t),c=Mg(t),d=bg(t),l=Sg(t),u=Tg(t),f=fg(t),g=pg(s),v=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[Jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Qi?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=fa(o),o=$l(o,t),o=Kl(o,t),a=fa(a),a=$l(a,t),a=Kl(a,t),o=Zl(o),a=Zl(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+o,x=y+p+a,C=Xl(n,n.VERTEX_SHADER,w),P=Xl(n,n.FRAGMENT_SHADER,x);n.attachShader(v,C),n.attachShader(v,P),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function k(N){if(r.debug.checkShaderErrors){const j=n.getProgramInfoLog(v).trim(),V=n.getShaderInfoLog(C).trim(),Z=n.getShaderInfoLog(P).trim();let ie=!0,K=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,C,P);else{const se=Yl(n,C,"vertex"),$=Yl(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+se+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||Z==="")&&(K=!1);K&&(N.diagnostics={runnable:ie,programLog:j,vertexShader:{log:V,prefix:m},fragmentShader:{log:Z,prefix:p}})}n.deleteShader(C),n.deleteShader(P),I=new wr(n,v),T=mg(n,v)}let I;this.getUniforms=function(){return I===void 0&&k(this),I};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(v,og)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ag++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=P,this}let Ag=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pg(e),t.set(e,i)),i}}class Pg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Rg(r,e,t,i,n,s,o){const a=new Ra,h=new Cg,c=new Set,d=[],l=n.logarithmicDepthBuffer,u=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,N,j,V){const Z=j.fog,ie=V.geometry,K=T.isMeshStandardMaterial?j.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),$=se&&se.mapping===Dr?se.image.height:null,fe=g[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ye=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Re=ye!==void 0?ye.length:0;let Ye=0;ie.morphAttributes.position!==void 0&&(Ye=1),ie.morphAttributes.normal!==void 0&&(Ye=2),ie.morphAttributes.color!==void 0&&(Ye=3);let dt,Q,ae,Ae;if(fe){const lt=yi[fe];dt=lt.vertexShader,Q=lt.fragmentShader}else dt=T.vertexShader,Q=T.fragmentShader,h.update(T),ae=h.getVertexShaderID(T),Ae=h.getFragmentShaderID(T);const pe=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Be=V.isInstancedMesh===!0,$e=V.isBatchedMesh===!0,xt=!!T.map,tt=!!T.matcap,Mt=!!se,B=!!T.aoMap,ti=!!T.lightMap,Je=!!T.bumpMap,Qe=!!T.normalMap,De=!!T.displacementMap,mt=!!T.emissiveMap,Le=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,H=T.clearcoat>0,ee=T.dispersion>0,ne=T.iridescence>0,J=T.sheen>0,Ce=T.transmission>0,me=M&&!!T.anisotropyMap,_e=H&&!!T.clearcoatMap,it=H&&!!T.clearcoatNormalMap,re=H&&!!T.clearcoatRoughnessMap,we=ne&&!!T.iridescenceMap,Ie=ne&&!!T.iridescenceThicknessMap,Fe=J&&!!T.sheenColorMap,Me=J&&!!T.sheenRoughnessMap,et=!!T.specularMap,We=!!T.specularColorMap,ut=!!T.specularIntensityMap,U=Ce&&!!T.transmissionMap,ue=Ce&&!!T.thicknessMap,Y=!!T.gradientMap,te=!!T.alphaMap,xe=T.alphaTest>0,ge=!!T.alphaHash,ze=!!T.extensions;let yt=Qi;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(yt=r.toneMapping);const Dt={shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:Q,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:$e,batchingColor:$e&&V._colorsTexture!==null,instancing:Be,instancingColor:Be&&V.instanceColor!==null,instancingMorph:Be&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Qn,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:tt,envMap:Mt,envMapMode:Mt&&se.mapping,envMapCubeUVHeight:$,aoMap:B,lightMap:ti,bumpMap:Je,normalMap:Qe,displacementMap:u&&De,emissiveMap:mt,normalMapObjectSpace:Qe&&T.normalMapType===Md,normalMapTangentSpace:Qe&&T.normalMapType===Xh,metalnessMap:Le,roughnessMap:R,anisotropy:M,anisotropyMap:me,clearcoat:H,clearcoatMap:_e,clearcoatNormalMap:it,clearcoatRoughnessMap:re,dispersion:ee,iridescence:ne,iridescenceMap:we,iridescenceThicknessMap:Ie,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:Me,specularMap:et,specularColorMap:We,specularIntensityMap:ut,transmission:Ce,transmissionMap:U,thicknessMap:ue,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Gn&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:ge,combine:T.combine,mapUv:xt&&v(T.map.channel),aoMapUv:B&&v(T.aoMap.channel),lightMapUv:ti&&v(T.lightMap.channel),bumpMapUv:Je&&v(T.bumpMap.channel),normalMapUv:Qe&&v(T.normalMap.channel),displacementMapUv:De&&v(T.displacementMap.channel),emissiveMapUv:mt&&v(T.emissiveMap.channel),metalnessMapUv:Le&&v(T.metalnessMap.channel),roughnessMapUv:R&&v(T.roughnessMap.channel),anisotropyMapUv:me&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(T.sheenRoughnessMap.channel),specularMapUv:et&&v(T.specularMap.channel),specularColorMapUv:We&&v(T.specularColorMap.channel),specularIntensityMapUv:ut&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:ue&&v(T.thicknessMap.channel),alphaMapUv:te&&v(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Qe||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ie.attributes.uv&&(xt||te),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:Ne,skinning:V.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ye,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:mt&&T.emissiveMap.isVideoTexture===!0&&nt.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Lt,flipSided:T.side===qt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)b.push(N),b.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(y(b,T),w(b,T),b.push(r.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function w(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=g[T.type];let N;if(b){const j=yi[b];N=Cr.clone(j.uniforms)}else N=T.uniforms;return N}function C(T,b){let N;for(let j=0,V=d.length;j<V;j++){const Z=d[j];if(Z.cacheKey===b){N=Z,++N.usedTimes;break}}return N===void 0&&(N=new Eg(r,b,T,s),d.push(N)),N}function P(T){if(--T.usedTimes===0){const b=d.indexOf(T);d[b]=d[d.length-1],d.pop(),T.destroy()}}function k(T){h.remove(T)}function I(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:P,releaseShaderCache:k,programs:d,dispose:I}}function kg(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,h){r.get(o)[a]=h}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ql(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function eh(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(l,u,f,g,v,m){let p=r[e];return p===void 0?(p={id:l.id,object:l,geometry:u,material:f,groupOrder:g,renderOrder:l.renderOrder,z:v,group:m},r[e]=p):(p.id=l.id,p.object=l,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=l.renderOrder,p.z=v,p.group=m),e++,p}function a(l,u,f,g,v,m){const p=o(l,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function h(l,u,f,g,v,m){const p=o(l,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(l,u){t.length>1&&t.sort(l||Lg),i.length>1&&i.sort(u||Ql),n.length>1&&n.sort(u||Ql)}function d(){for(let l=e,u=r.length;l<u;l++){const f=r[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:h,finish:d,sort:c}}function Dg(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new eh,r.set(i,[o])):n>=s.length?(o=new eh,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ig(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ue};break;case"SpotLight":t={position:new A,direction:new A,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function Ng(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ug=0;function Fg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Og(r){const e=new Ig,t=Ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);const n=new A,s=new at,o=new at;function a(c){let d=0,l=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,w=0,x=0,C=0,P=0,k=0;c.sort(Fg);for(let T=0,b=c.length;T<b;T++){const N=c[T],j=N.color,V=N.intensity,Z=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=j.r*V,l+=j.g*V,u+=j.b*V;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],V);k++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const se=N.shadow,$=t.get(N);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=ie,i.directionalShadowMatrix[f]=N.shadow.matrix,y++}i.directional[f]=K,f++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(j).multiplyScalar(V),K.distance=Z,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[v]=K;const se=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,se.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[v]=se.matrix,N.castShadow){const $=t.get(N);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=ie,x++}v++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(j).multiplyScalar(V),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=K,m++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const se=N.shadow,$=t.get(N);$.shadowIntensity=se.intensity,$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,$.shadowCameraNear=se.camera.near,$.shadowCameraFar=se.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=N.shadow.matrix,w++}i.point[g]=K,g++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(V),K.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[p]=K,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=l,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==C||I.numLightProbes!==k)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=x+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=k,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=C,I.numLightProbes=k,i.version=Ug++)}function h(c,d){let l=0,u=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const w=c[p];if(w.isDirectionalLight){const x=i.directional[l];x.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),l++}else if(w.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:h,state:i}}function th(r){const e=new Og(r),t=[],i=[];function n(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function h(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function Bg(r){let e=new WeakMap;function t(n,s=0){const o=e.get(n);let a;return o===void 0?(a=new th(r),e.set(n,[a])):s>=o.length?(a=new th(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class zg extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
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
}`;function Vg(r,e,t){let i=new ka;const n=new he,s=new he,o=new ct,a=new zg({depthPacking:wd}),h=new Hg,c={},d=t.maxTextureSize,l={[en]:qt,[qt]:en,[Lt]:Lt},u=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Gg,fragmentShader:Wg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(P,k,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=r.getRenderTarget(),b=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ui),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=p!==Li&&this.type===Li,Z=p===Li&&this.type!==Li;for(let ie=0,K=P.length;ie<K;ie++){const se=P[ie],$=se.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);const fe=$.getFrameExtents();if(n.multiply(fe),s.copy($.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(s.x=Math.floor(d/fe.x),n.x=s.x*fe.x,$.mapSize.x=s.x),n.y>d&&(s.y=Math.floor(d/fe.y),n.y=s.y*fe.y,$.mapSize.y=s.y)),$.map===null||V===!0||Z===!0){const Re=this.type!==Li?{minFilter:Qt,magFilter:Qt}:{};$.map!==null&&$.map.dispose(),$.map=new gi(n.x,n.y,Re),$.map.texture.name=se.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const ye=$.getViewportCount();for(let Re=0;Re<ye;Re++){const Ye=$.getViewport(Re);o.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),j.viewport(o),$.updateMatrices(se,Re),i=$.getFrustum(),x(k,I,$.camera,se,this.type)}$.isPointLightShadow!==!0&&this.type===Li&&y($,I),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,b,N)};function y(P,k){const I=e.update(v);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gi(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(k,null,I,u,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(k,null,I,f,v,null)}function w(P,k,I,T){let b=null;const N=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)b=N;else if(b=I.isPointLight===!0?h:a,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const j=b.uuid,V=k.uuid;let Z=c[j];Z===void 0&&(Z={},c[j]=Z);let ie=Z[V];ie===void 0&&(ie=b.clone(),Z[V]=ie,k.addEventListener("dispose",C)),b=ie}if(b.visible=k.visible,b.wireframe=k.wireframe,T===Li?b.side=k.shadowSide!==null?k.shadowSide:k.side:b.side=k.shadowSide!==null?k.shadowSide:l[k.side],b.alphaMap=k.alphaMap,b.alphaTest=k.alphaTest,b.map=k.map,b.clipShadows=k.clipShadows,b.clippingPlanes=k.clippingPlanes,b.clipIntersection=k.clipIntersection,b.displacementMap=k.displacementMap,b.displacementScale=k.displacementScale,b.displacementBias=k.displacementBias,b.wireframeLinewidth=k.wireframeLinewidth,b.linewidth=k.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const j=r.properties.get(b);j.light=I}return b}function x(P,k,I,T,b){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Li)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const V=e.update(P),Z=P.material;if(Array.isArray(Z)){const ie=V.groups;for(let K=0,se=ie.length;K<se;K++){const $=ie[K],fe=Z[$.materialIndex];if(fe&&fe.visible){const ye=w(P,fe,T,b);P.onBeforeShadow(r,P,k,I,V,ye,$),r.renderBufferDirect(I,null,V,ye,P,$),P.onAfterShadow(r,P,k,I,V,ye,$)}}}else if(Z.visible){const ie=w(P,Z,T,b);P.onBeforeShadow(r,P,k,I,V,ie,null),r.renderBufferDirect(I,null,V,ie,P,null),P.onAfterShadow(r,P,k,I,V,ie,null)}}const j=P.children;for(let V=0,Z=j.length;V<Z;V++)x(j[V],k,I,T,b)}function C(P){P.target.removeEventListener("dispose",C);for(const I in c){const T=c[I],b=P.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const jg={[ko]:Lo,[Do]:Uo,[Io]:Fo,[Xn]:No,[Lo]:ko,[Uo]:Do,[Fo]:Io,[No]:Xn};function Xg(r,e){function t(){let U=!1;const ue=new ct;let Y=null;const te=new ct(0,0,0,0);return{setMask:function(xe){Y!==xe&&!U&&(r.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ge,ze,yt,Dt){Dt===!0&&(xe*=yt,ge*=yt,ze*=yt),ue.set(xe,ge,ze,yt),te.equals(ue)===!1&&(r.clearColor(xe,ge,ze,yt),te.copy(ue))},reset:function(){U=!1,Y=null,te.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,Y=null,te=null,xe=null;return{setReversed:function(ge){if(ue!==ge){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const yt=xe;xe=null,this.setClear(yt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!U&&(r.depthMask(ge),Y=ge)},setFunc:function(ge){if(ue&&(ge=jg[ge]),te!==ge){switch(ge){case ko:r.depthFunc(r.NEVER);break;case Lo:r.depthFunc(r.ALWAYS);break;case Do:r.depthFunc(r.LESS);break;case Xn:r.depthFunc(r.LEQUAL);break;case Io:r.depthFunc(r.EQUAL);break;case No:r.depthFunc(r.GEQUAL);break;case Uo:r.depthFunc(r.GREATER);break;case Fo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=ge}},setLocked:function(ge){U=ge},setClear:function(ge){xe!==ge&&(ue&&(ge=1-ge),r.clearDepth(ge),xe=ge)},reset:function(){U=!1,Y=null,te=null,xe=null,ue=!1}}}function n(){let U=!1,ue=null,Y=null,te=null,xe=null,ge=null,ze=null,yt=null,Dt=null;return{setTest:function(lt){U||(lt?pe(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!U&&(r.stencilMask(lt),ue=lt)},setFunc:function(lt,ai,Si){(Y!==lt||te!==ai||xe!==Si)&&(r.stencilFunc(lt,ai,Si),Y=lt,te=ai,xe=Si)},setOp:function(lt,ai,Si){(ge!==lt||ze!==ai||yt!==Si)&&(r.stencilOp(lt,ai,Si),ge=lt,ze=ai,yt=Si)},setLocked:function(lt){U=lt},setClear:function(lt){Dt!==lt&&(r.clearStencil(lt),Dt=lt)},reset:function(){U=!1,ue=null,Y=null,te=null,xe=null,ge=null,ze=null,yt=null,Dt=null}}}const s=new t,o=new i,a=new n,h=new WeakMap,c=new WeakMap;let d={},l={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,w=null,x=null,C=null,P=null,k=new Ue(0,0,0),I=0,T=!1,b=null,N=null,j=null,V=null,Z=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec($)[1]),K=se>=1):$.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=se>=2);let fe=null,ye={};const Re=r.getParameter(r.SCISSOR_BOX),Ye=r.getParameter(r.VIEWPORT),dt=new ct().fromArray(Re),Q=new ct().fromArray(Ye);function ae(U,ue,Y,te){const xe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(U,ge),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ze=0;ze<Y;ze++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(ue+ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ge}const Ae={};Ae[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(r.DEPTH_TEST),o.setFunc(Xn),Je(!1),Qe(sl),pe(r.CULL_FACE),B(Ui);function pe(U){d[U]!==!0&&(r.enable(U),d[U]=!0)}function Ne(U){d[U]!==!1&&(r.disable(U),d[U]=!1)}function Be(U,ue){return l[U]!==ue?(r.bindFramebuffer(U,ue),l[U]=ue,U===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=ue),U===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function $e(U,ue){let Y=f,te=!1;if(U){Y=u.get(ue),Y===void 0&&(Y=[],u.set(ue,Y));const xe=U.textures;if(Y.length!==xe.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,ze=xe.length;ge<ze;ge++)Y[ge]=r.COLOR_ATTACHMENT0+ge;Y.length=xe.length,te=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,te=!0);te&&r.drawBuffers(Y)}function xt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const tt={[pn]:r.FUNC_ADD,[Yc]:r.FUNC_SUBTRACT,[$c]:r.FUNC_REVERSE_SUBTRACT};tt[Kc]=r.MIN,tt[Zc]=r.MAX;const Mt={[Jc]:r.ZERO,[Qc]:r.ONE,[ed]:r.SRC_COLOR,[Po]:r.SRC_ALPHA,[od]:r.SRC_ALPHA_SATURATE,[sd]:r.DST_COLOR,[id]:r.DST_ALPHA,[td]:r.ONE_MINUS_SRC_COLOR,[Ro]:r.ONE_MINUS_SRC_ALPHA,[rd]:r.ONE_MINUS_DST_COLOR,[nd]:r.ONE_MINUS_DST_ALPHA,[ad]:r.CONSTANT_COLOR,[ld]:r.ONE_MINUS_CONSTANT_COLOR,[hd]:r.CONSTANT_ALPHA,[cd]:r.ONE_MINUS_CONSTANT_ALPHA};function B(U,ue,Y,te,xe,ge,ze,yt,Dt,lt){if(U===Ui){v===!0&&(Ne(r.BLEND),v=!1);return}if(v===!1&&(pe(r.BLEND),v=!0),U!==qc){if(U!==m||lt!==T){if((p!==pn||x!==pn)&&(r.blendEquation(r.FUNC_ADD),p=pn,x=pn),lt)switch(U){case Gn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sr:r.blendFunc(r.ONE,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ol:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ol:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,w=null,C=null,P=null,k.set(0,0,0),I=0,m=U,T=lt}return}xe=xe||ue,ge=ge||Y,ze=ze||te,(ue!==p||xe!==x)&&(r.blendEquationSeparate(tt[ue],tt[xe]),p=ue,x=xe),(Y!==y||te!==w||ge!==C||ze!==P)&&(r.blendFuncSeparate(Mt[Y],Mt[te],Mt[ge],Mt[ze]),y=Y,w=te,C=ge,P=ze),(yt.equals(k)===!1||Dt!==I)&&(r.blendColor(yt.r,yt.g,yt.b,Dt),k.copy(yt),I=Dt),m=U,T=!1}function ti(U,ue){U.side===Lt?Ne(r.CULL_FACE):pe(r.CULL_FACE);let Y=U.side===qt;ue&&(Y=!Y),Je(Y),U.blending===Gn&&U.transparent===!1?B(Ui):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){b!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),b=U)}function Qe(U){U!==Vc?(pe(r.CULL_FACE),U!==N&&(U===sl?r.cullFace(r.BACK):U===jc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),N=U}function De(U){U!==j&&(K&&r.lineWidth(U),j=U)}function mt(U,ue,Y){U?(pe(r.POLYGON_OFFSET_FILL),(V!==ue||Z!==Y)&&(r.polygonOffset(ue,Y),V=ue,Z=Y)):Ne(r.POLYGON_OFFSET_FILL)}function Le(U){U?pe(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function R(U){U===void 0&&(U=r.TEXTURE0+ie-1),fe!==U&&(r.activeTexture(U),fe=U)}function M(U,ue,Y){Y===void 0&&(fe===null?Y=r.TEXTURE0+ie-1:Y=fe);let te=ye[Y];te===void 0&&(te={type:void 0,texture:void 0},ye[Y]=te),(te.type!==U||te.texture!==ue)&&(fe!==Y&&(r.activeTexture(Y),fe=Y),r.bindTexture(U,ue||Ae[U]),te.type=U,te.texture=ue)}function H(){const U=ye[fe];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){dt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),dt.copy(U))}function Me(U){Q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function et(U,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let te=Y.get(U);te===void 0&&(te=r.getUniformBlockIndex(ue,U.name),Y.set(U,te))}function We(U,ue){const te=c.get(ue).get(U);h.get(ue)!==te&&(r.uniformBlockBinding(ue,te,U.__bindingPointIndex),h.set(ue,te))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},fe=null,ye={},l={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,w=null,x=null,C=null,P=null,k=new Ue(0,0,0),I=0,T=!1,b=null,N=null,j=null,V=null,Z=null,dt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ne,bindFramebuffer:Be,drawBuffers:$e,useProgram:xt,setBlending:B,setMaterial:ti,setFlipSided:Je,setCullFace:Qe,setLineWidth:De,setPolygonOffset:mt,setScissorTest:Le,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:we,texImage3D:Ie,updateUBOMapping:et,uniformBlockBinding:We,texStorage2D:it,texStorage3D:re,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:Fe,viewport:Me,reset:ut}}function ih(r,e,t,i){const n=qg(i);switch(t){case zh:return r*e;case Gh:return r*e;case Wh:return r*e*2;case Ta:return r*e/n.components*n.byteLength;case Ea:return r*e/n.components*n.byteLength;case Vh:return r*e*2/n.components*n.byteLength;case Aa:return r*e*2/n.components*n.byteLength;case Hh:return r*e*3/n.components*n.byteLength;case mi:return r*e*4/n.components*n.byteLength;case Ca:return r*e*4/n.components*n.byteLength;case gr:case vr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xr:case yr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Go:case Vo:return Math.max(r,16)*Math.max(e,8)/4;case Ho:case Wo:return Math.max(r,8)*Math.max(e,8)/2;case jo:case Xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ia:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case na:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case oa:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case aa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case _r:case la:case ha:return Math.ceil(r/4)*Math.ceil(e/4)*16;case jh:case ca:return Math.ceil(r/4)*Math.ceil(e/4)*8;case da:case ua:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qg(r){switch(r){case Bi:case Fh:return{byteLength:1,components:1};case Es:case Oh:case Fi:return{byteLength:2,components:1};case ba:case Sa:return{byteLength:2,components:4};case xn:case Ma:case _i:return{byteLength:4,components:1};case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Yg(r,e,t,i,n,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,d=new WeakMap;let l;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):Ar("canvas")}function v(R,M,H){let ee=1;const ne=Le(R);if((ne.width>H||ne.height>H)&&(ee=H/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ee*ne.width),Ce=Math.floor(ee*ne.height);l===void 0&&(l=g(J,Ce));const me=M?g(J,Ce):l;return me.width=J,me.height=Ce,me.getContext("2d").drawImage(R,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ce+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(R,M,H,ee,ne=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),M===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),M===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),M===r.RGBA){const Ce=ne?Ir:nt.getTransfer(ee);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=Ce===ht?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(R,M){let H;return R?M===null||M===xn||M===$n?H=r.DEPTH24_STENCIL8:M===_i?H=r.DEPTH32F_STENCIL8:M===Es&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xn||M===$n?H=r.DEPTH_COMPONENT24:M===_i?H=r.DEPTH_COMPONENT32F:M===Es&&(H=r.DEPTH_COMPONENT16),H}function C(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==pi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),I(M),M.isVideoTexture&&d.delete(M)}function k(R){const M=R.target;M.removeEventListener("dispose",k),b(M)}function I(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,ee=u.get(H);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(R),Object.keys(ee).length===0&&u.delete(H)}i.remove(R)}function T(R){const M=i.get(R);r.deleteTexture(M.__webglTexture);const H=R.source,ee=u.get(H);delete ee[M.__cacheKey],o.memory.textures--}function b(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)r.deleteFramebuffer(M.__webglFramebuffer[ee]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=R.textures;for(let ee=0,ne=H.length;ee<ne;ee++){const J=i.get(H[ee]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(H[ee])}i.remove(R)}let N=0;function j(){N=0}function V(){const R=N;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),N+=1,R}function Z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ie(R,M){const H=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,R,M);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function K(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Q(H,R,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function se(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Q(H,R,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function $(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ae(H,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const fe={[Tr]:r.REPEAT,[gn]:r.CLAMP_TO_EDGE,[zo]:r.MIRRORED_REPEAT},ye={[Qt]:r.NEAREST,[yd]:r.NEAREST_MIPMAP_NEAREST,[Is]:r.NEAREST_MIPMAP_LINEAR,[pi]:r.LINEAR,[Br]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},Re={[bd]:r.NEVER,[Pd]:r.ALWAYS,[Sd]:r.LESS,[qh]:r.LEQUAL,[Td]:r.EQUAL,[Cd]:r.GEQUAL,[Ed]:r.GREATER,[Ad]:r.NOTEQUAL};function Ye(R,M){if(M.type===_i&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===pi||M.magFilter===Br||M.magFilter===Is||M.magFilter===Ji||M.minFilter===pi||M.minFilter===Br||M.minFilter===Is||M.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,fe[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,fe[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,fe[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ye[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Is&&M.minFilter!==Ji||M.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function dt(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const ee=M.source;let ne=u.get(ee);ne===void 0&&(ne={},u.set(ee,ne));const J=Z(M);if(J!==R.__cacheKey){ne[J]===void 0&&(ne[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[J].usedTimes++;const Ce=ne[R.__cacheKey];Ce!==void 0&&(ne[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&T(M)),R.__cacheKey=J,R.__webglTexture=ne[J].texture}return H}function Q(R,M,H){let ee=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=r.TEXTURE_3D);const ne=dt(R,M),J=M.source;t.bindTexture(ee,R.__webglTexture,r.TEXTURE0+H);const Ce=i.get(J);if(J.version!==Ce.__version||ne===!0){t.activeTexture(r.TEXTURE0+H);const me=nt.getPrimaries(nt.workingColorSpace),_e=M.colorSpace===Ii?null:nt.getPrimaries(M.colorSpace),it=M.colorSpace===Ii||me===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let re=v(M.image,!1,n.maxTextureSize);re=mt(M,re);const we=s.convert(M.format,M.colorSpace),Ie=s.convert(M.type);let Fe=w(M.internalFormat,we,Ie,M.colorSpace,M.isVideoTexture);Ye(ee,M);let Me;const et=M.mipmaps,We=M.isVideoTexture!==!0,ut=Ce.__version===void 0||ne===!0,U=J.dataReady,ue=C(M,re);if(M.isDepthTexture)Fe=x(M.format===Kn,M.type),ut&&(We?t.texStorage2D(r.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Fe,re.width,re.height,0,we,Ie,null));else if(M.isDataTexture)if(et.length>0){We&&ut&&t.texStorage2D(r.TEXTURE_2D,ue,Fe,et[0].width,et[0].height);for(let Y=0,te=et.length;Y<te;Y++)Me=et[Y],We?U&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Me.width,Me.height,we,Ie,Me.data):t.texImage2D(r.TEXTURE_2D,Y,Fe,Me.width,Me.height,0,we,Ie,Me.data);M.generateMipmaps=!1}else We?(ut&&t.texStorage2D(r.TEXTURE_2D,ue,Fe,re.width,re.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,we,Ie,re.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,re.width,re.height,0,we,Ie,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Fe,et[0].width,et[0].height,re.depth);for(let Y=0,te=et.length;Y<te;Y++)if(Me=et[Y],M.format!==mi)if(we!==null)if(We){if(U)if(M.layerUpdates.size>0){const xe=ih(Me.width,Me.height,M.format,M.type);for(const ge of M.layerUpdates){const ze=Me.data.subarray(ge*xe/Me.data.BYTES_PER_ELEMENT,(ge+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,ge,Me.width,Me.height,1,we,ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,re.depth,we,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Fe,Me.width,Me.height,re.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,re.depth,we,Ie,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Fe,Me.width,Me.height,re.depth,0,we,Ie,Me.data)}else{We&&ut&&t.texStorage2D(r.TEXTURE_2D,ue,Fe,et[0].width,et[0].height);for(let Y=0,te=et.length;Y<te;Y++)Me=et[Y],M.format!==mi?we!==null?We?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Me.width,Me.height,we,Ie,Me.data):t.texImage2D(r.TEXTURE_2D,Y,Fe,Me.width,Me.height,0,we,Ie,Me.data)}else if(M.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Fe,re.width,re.height,re.depth),U)if(M.layerUpdates.size>0){const Y=ih(re.width,re.height,M.format,M.type);for(const te of M.layerUpdates){const xe=re.data.subarray(te*Y/re.data.BYTES_PER_ELEMENT,(te+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,we,Ie,xe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,we,Ie,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,we,Ie,re.data);else if(M.isData3DTexture)We?(ut&&t.texStorage3D(r.TEXTURE_3D,ue,Fe,re.width,re.height,re.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,we,Ie,re.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,we,Ie,re.data);else if(M.isFramebufferTexture){if(ut)if(We)t.texStorage2D(r.TEXTURE_2D,ue,Fe,re.width,re.height);else{let Y=re.width,te=re.height;for(let xe=0;xe<ue;xe++)t.texImage2D(r.TEXTURE_2D,xe,Fe,Y,te,0,we,Ie,null),Y>>=1,te>>=1}}else if(et.length>0){if(We&&ut){const Y=Le(et[0]);t.texStorage2D(r.TEXTURE_2D,ue,Fe,Y.width,Y.height)}for(let Y=0,te=et.length;Y<te;Y++)Me=et[Y],We?U&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,we,Ie,Me):t.texImage2D(r.TEXTURE_2D,Y,Fe,we,Ie,Me);M.generateMipmaps=!1}else if(We){if(ut){const Y=Le(re);t.texStorage2D(r.TEXTURE_2D,ue,Fe,Y.width,Y.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ie,re)}else t.texImage2D(r.TEXTURE_2D,0,Fe,we,Ie,re);m(M)&&p(ee),Ce.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ae(R,M,H){if(M.image.length!==6)return;const ee=dt(R,M),ne=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);const J=i.get(ne);if(ne.version!==J.__version||ee===!0){t.activeTexture(r.TEXTURE0+H);const Ce=nt.getPrimaries(nt.workingColorSpace),me=M.colorSpace===Ii?null:nt.getPrimaries(M.colorSpace),_e=M.colorSpace===Ii||Ce===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const it=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,we=[];for(let te=0;te<6;te++)!it&&!re?we[te]=v(M.image[te],!0,n.maxCubemapSize):we[te]=re?M.image[te].image:M.image[te],we[te]=mt(M,we[te]);const Ie=we[0],Fe=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),et=w(M.internalFormat,Fe,Me,M.colorSpace),We=M.isVideoTexture!==!0,ut=J.__version===void 0||ee===!0,U=ne.dataReady;let ue=C(M,Ie);Ye(r.TEXTURE_CUBE_MAP,M);let Y;if(it){We&&ut&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,et,Ie.width,Ie.height);for(let te=0;te<6;te++){Y=we[te].mipmaps;for(let xe=0;xe<Y.length;xe++){const ge=Y[xe];M.format!==mi?Fe!==null?We?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,et,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,ge.width,ge.height,Fe,Me,ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,et,ge.width,ge.height,0,Fe,Me,ge.data)}}}else{if(Y=M.mipmaps,We&&ut){Y.length>0&&ue++;const te=Le(we[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,et,te.width,te.height)}for(let te=0;te<6;te++)if(re){We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we[te].width,we[te].height,Fe,Me,we[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,we[te].width,we[te].height,0,Fe,Me,we[te].data);for(let xe=0;xe<Y.length;xe++){const ze=Y[xe].image[te].image;We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,ze.width,ze.height,Fe,Me,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,et,ze.width,ze.height,0,Fe,Me,ze.data)}}else{We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Me,we[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,et,Fe,Me,we[te]);for(let xe=0;xe<Y.length;xe++){const ge=Y[xe];We?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Fe,Me,ge.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,et,Fe,Me,ge.image[te])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ae(R,M,H,ee,ne,J){const Ce=s.convert(H.format,H.colorSpace),me=s.convert(H.type),_e=w(H.internalFormat,Ce,me,H.colorSpace),it=i.get(M),re=i.get(H);if(re.__renderTarget=M,!it.__hasExternalTextures){const we=Math.max(1,M.width>>J),Ie=Math.max(1,M.height>>J);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,_e,we,Ie,M.depth,0,Ce,me,null):t.texImage2D(ne,J,_e,we,Ie,0,Ce,me,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Qe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ne,re.__webglTexture,0,Je(M)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ne,re.__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(R,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,J=x(M.stencilBuffer,ne),Ce=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=Je(M);Qe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,J,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,J,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,J,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,R)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const J=ee[ne],Ce=s.convert(J.format,J.colorSpace),me=s.convert(J.type),_e=w(J.internalFormat,Ce,me,J.colorSpace),it=Je(M);H&&Qe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,_e,M.width,M.height):Qe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,_e,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,_e,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);const ne=ee.__webglTexture,J=Je(M);if(M.depthTexture.format===Wn)Qe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Kn)Qe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Be(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=ee}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=r.createRenderbuffer(),pe(M.__webglDepthbuffer[ee],R,!1);else{const ne=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,J)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),pe(M.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(R,M,H){const ee=i.get(R);M!==void 0&&Ae(ee.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Be(R)}function xt(R){const M=R.texture,H=i.get(R),ee=i.get(M);R.addEventListener("dispose",k);const ne=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ce=ne.length>1;if(Ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=M.version,o.memory.textures++),J){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let _e=0;_e<M.mipmaps.length;_e++)H.__webglFramebuffer[me][_e]=r.createFramebuffer()}else H.__webglFramebuffer[me]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[me]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let me=0,_e=ne.length;me<_e;me++){const it=i.get(ne[me]);it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Qe(R)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const _e=ne[me];H.__webglColorRenderbuffer[me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const it=s.convert(_e.format,_e.colorSpace),re=s.convert(_e.type),we=w(_e.internalFormat,it,re,_e.colorSpace,R.isXRRenderTarget===!0),Ie=Je(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,we,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,H.__webglColorRenderbuffer[me])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Ye(r.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ae(H.__webglFramebuffer[me][_e],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Ae(H.__webglFramebuffer[me],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,_e=ne.length;me<_e;me++){const it=ne[me],re=i.get(it);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),Ye(r.TEXTURE_2D,it),Ae(H.__webglFramebuffer,R,it,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,0),m(it)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let me=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,ee.__webglTexture),Ye(me,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ae(H.__webglFramebuffer[_e],R,M,r.COLOR_ATTACHMENT0,me,_e);else Ae(H.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,me,0);m(M)&&p(me),t.unbindTexture()}R.depthBuffer&&Be(R)}function tt(R){const M=R.textures;for(let H=0,ee=M.length;H<ee;H++){const ne=M[H];if(m(ne)){const J=y(R),Ce=i.get(ne).__webglTexture;t.bindTexture(J,Ce),p(J),t.unbindTexture()}}}const Mt=[],B=[];function ti(R){if(R.samples>0){if(Qe(R)===!1){const M=R.textures,H=R.width,ee=R.height;let ne=r.COLOR_BUFFER_BIT;const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=i.get(R),me=M.length>1;if(me)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const it=i.get(M[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,H,ee,0,0,H,ee,ne,r.NEAREST),h===!0&&(Mt.length=0,B.length=0,Mt.push(r.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Mt.push(J),B.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const it=i.get(M[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,it,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Je(R){return Math.min(n.maxSamples,R.samples)}function Qe(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function mt(R,M){const H=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Qn&&H!==Ii&&(nt.getTransfer(H)===ht?(ee!==mi||ne!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=ie,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=$,this.rebindTextures=$e,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ti,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Qe}function $g(r,e){function t(i,n=Ii){let s;const o=nt.getTransfer(n);if(i===Bi)return r.UNSIGNED_BYTE;if(i===ba)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Sa)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Bh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return r.BYTE;if(i===Oh)return r.SHORT;if(i===Es)return r.UNSIGNED_SHORT;if(i===Ma)return r.INT;if(i===xn)return r.UNSIGNED_INT;if(i===_i)return r.FLOAT;if(i===Fi)return r.HALF_FLOAT;if(i===zh)return r.ALPHA;if(i===Hh)return r.RGB;if(i===mi)return r.RGBA;if(i===Gh)return r.LUMINANCE;if(i===Wh)return r.LUMINANCE_ALPHA;if(i===Wn)return r.DEPTH_COMPONENT;if(i===Kn)return r.DEPTH_STENCIL;if(i===Ta)return r.RED;if(i===Ea)return r.RED_INTEGER;if(i===Vh)return r.RG;if(i===Aa)return r.RG_INTEGER;if(i===Ca)return r.RGBA_INTEGER;if(i===gr||i===vr||i===xr||i===yr)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ho||i===Go||i===Wo||i===Vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jo||i===Xo||i===qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jo||i===Xo)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yo||i===$o||i===Ko||i===Zo||i===Jo||i===Qo||i===ea||i===ta||i===ia||i===na||i===sa||i===ra||i===oa||i===aa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$o)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ea)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ta)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ia)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===na)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ra)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===aa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_r||i===la||i===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_r)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===la)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jh||i===ca||i===da||i===ua)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_r)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$n?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Kg extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ke extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zg={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],u=d.position.distanceTo(l.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=n!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ft,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xt({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t0 extends es{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",h=1,c=null,d=null,l=null,u=null,f=null,g=null;const v=new e0,m=t.getContextAttributes();let p=null,y=null;const w=[],x=[],C=new he;let P=null;const k=new jt;k.viewport=new ct;const I=new jt;I.viewport=new ct;const T=[k,I],b=new Kg;let N=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=w[Q];return ae===void 0&&(ae=new fo,w[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=w[Q];return ae===void 0&&(ae=new fo,w[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=w[Q];return ae===void 0&&(ae=new fo,w[Q]=ae),ae.getHandSpace()};function V(Q){const ae=x.indexOf(Q.inputSource);if(ae===-1)return;const Ae=w[ae];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,c||o),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",Z),n.removeEventListener("inputsourceschange",ie);for(let Q=0;Q<w.length;Q++){const ae=x[Q];ae!==null&&(x[Q]=null,w[Q].disconnect(ae))}N=null,j=null,v.reset(),e.setRenderTarget(p),f=null,u=null,l=null,n=null,y=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Q){if(n=Q,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",Z),n.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new gi(f.framebufferWidth,f.framebufferHeight,{format:mi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ae=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Kn:Wn,Ae=m.stencil?$n:xn);const Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};l=new XRWebGLBinding(n,t),u=l.createProjectionLayer(Ne),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new gi(u.textureWidth,u.textureHeight,{format:mi,type:Bi,depthTexture:new sc(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),c=null,o=await n.requestReferenceSpace(a),dt.setContext(n),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(Q){for(let ae=0;ae<Q.removed.length;ae++){const Ae=Q.removed[ae],pe=x.indexOf(Ae);pe>=0&&(x[pe]=null,w[pe].disconnect(Ae))}for(let ae=0;ae<Q.added.length;ae++){const Ae=Q.added[ae];let pe=x.indexOf(Ae);if(pe===-1){for(let Be=0;Be<w.length;Be++)if(Be>=x.length){x.push(Ae),pe=Be;break}else if(x[Be]===null){x[Be]=Ae,pe=Be;break}if(pe===-1)break}const Ne=w[pe];Ne&&Ne.connect(Ae)}}const K=new A,se=new A;function $(Q,ae,Ae){K.setFromMatrixPosition(ae.matrixWorld),se.setFromMatrixPosition(Ae.matrixWorld);const pe=K.distanceTo(se),Ne=ae.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,$e=Ne[14]/(Ne[10]-1),xt=Ne[14]/(Ne[10]+1),tt=(Ne[9]+1)/Ne[5],Mt=(Ne[9]-1)/Ne[5],B=(Ne[8]-1)/Ne[0],ti=(Be[8]+1)/Be[0],Je=$e*B,Qe=$e*ti,De=pe/(-B+ti),mt=De*-B;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(De),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Le=$e+De,R=xt+De,M=Je-mt,H=Qe+(pe-mt),ee=tt*xt/R*Le,ne=Mt*xt/R*Le;Q.projectionMatrix.makePerspective(M,H,ee,ne,Le,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(n===null)return;let ae=Q.near,Ae=Q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),b.near=I.near=k.near=ae,b.far=I.far=k.far=Ae,(N!==b.near||j!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,j=b.far),k.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,b.layers.mask=k.layers.mask|I.layers.mask;const pe=Q.parent,Ne=b.cameras;fe(b,pe);for(let Be=0;Be<Ne.length;Be++)fe(Ne[Be],pe);Ne.length===2?$(b,k,I):b.projectionMatrix.copy(k.projectionMatrix),ye(Q,b,pe)};function ye(Q,ae,Ae){Ae===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=As*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return h},this.setFoveation=function(Q){h=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Re=null;function Ye(Q,ae){if(d=ae.getViewerPose(c||o),g=ae,d!==null){const Ae=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let pe=!1;Ae.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let Be=0;Be<Ae.length;Be++){const $e=Ae[Be];let xt=null;if(f!==null)xt=f.getViewport($e);else{const Mt=l.getViewSubImage(u,$e);xt=Mt.viewport,Be===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(y))}let tt=T[Be];tt===void 0&&(tt=new jt,tt.layers.enable(Be),tt.viewport=new ct,T[Be]=tt),tt.matrix.fromArray($e.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray($e.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(xt.x,xt.y,xt.width,xt.height),Be===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(tt)}const Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Be=l.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,n.renderState)}}for(let Ae=0;Ae<w.length;Ae++){const pe=x[Ae],Ne=w[Ae];pe!==null&&Ne!==void 0&&Ne.update(pe,ae,c||o)}Re&&Re(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const dt=new nc;dt.setAnimationLoop(Ye),this.setAnimationLoop=function(Q){Re=Q},this.dispose=function(){}}}const hn=new Mi,i0=new at;function n0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ec(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),l(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?h(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,x=y.envMapRotation;w&&(m.envMap.value=w,hn.copy(x),hn.x*=-1,hn.y*=-1,hn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),m.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(hn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function s0(r,e,t,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,w){const x=w.program;i.uniformBlockBinding(y,x)}function c(y,w){let x=n[y.id];x===void 0&&(g(y),x=d(y),n[y.id]=x,y.addEventListener("dispose",m));const C=w.program;i.updateUBOMapping(y,C);const P=e.render.frame;s[y.id]!==P&&(u(y),s[y.id]=P)}function d(y){const w=l();y.__bindingPointIndex=w;const x=r.createBuffer(),C=y.__size,P=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,x),x}function l(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const w=n[y.id],x=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,k=x.length;P<k;P++){const I=Array.isArray(x[P])?x[P]:[x[P]];for(let T=0,b=I.length;T<b;T++){const N=I[T];if(f(N,P,T,C)===!0){const j=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let Z=0;for(let ie=0;ie<V.length;ie++){const K=V[ie],se=v(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,j+Z,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,Z),Z+=se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,w,x,C){const P=y.value,k=w+"_"+x;if(C[k]===void 0)return typeof P=="number"||typeof P=="boolean"?C[k]=P:C[k]=P.clone(),!0;{const I=C[k];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return C[k]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(y){const w=y.uniforms;let x=0;const C=16;for(let k=0,I=w.length;k<I;k++){const T=Array.isArray(w[k])?w[k]:[w[k]];for(let b=0,N=T.length;b<N;b++){const j=T[b],V=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,ie=V.length;Z<ie;Z++){const K=V[Z],se=v(K),$=x%C,fe=$%se.boundary,ye=$+fe;x+=fe,ye!==0&&C-ye<se.storage&&(x+=C-ye),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=se.storage}}}const P=x%C;return P>0&&(x+=C-P),y.__size=x,y.__cache={},this}function v(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){const w=y.target;w.removeEventListener("dispose",m);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(n[w.id]),delete n[w.id],delete s[w.id]}function p(){for(const y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:h,update:c,dispose:p}}class r0{constructor(e={}){const{canvas:t=qd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=Qi,this.toneMappingExposure=1;const x=this;let C=!1,P=0,k=0,I=null,T=-1,b=null;const N=new ct,j=new ct;let V=null;const Z=new Ue(0);let ie=0,K=t.width,se=t.height,$=1,fe=null,ye=null;const Re=new ct(0,0,K,se),Ye=new ct(0,0,K,se);let dt=!1;const Q=new ka;let ae=!1,Ae=!1;const pe=new at,Ne=new at,Be=new A,$e=new ct,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Mt(){return I===null?$:1}let B=i;function ti(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wa}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){const F="webgl2";if(B=ti(F,S),B===null)throw ti(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Je,Qe,De,mt,Le,R,M,H,ee,ne,J,Ce,me,_e,it,re,we,Ie,Fe,Me,et,We,ut,U;function ue(){Je=new cm(B),Je.init(),We=new $g(B,Je),Qe=new sm(B,Je,e,We),De=new Xg(B,Je),Qe.reverseDepthBuffer&&u&&De.buffers.depth.setReversed(!0),mt=new fm(B),Le=new kg,R=new Yg(B,Je,De,Le,Qe,We,mt),M=new om(x),H=new hm(x),ee=new yu(B),ut=new im(B,ee),ne=new dm(B,ee,mt,ut),J=new mm(B,ne,ee,mt),Fe=new pm(B,Qe,R),re=new rm(Le),Ce=new Rg(x,M,H,Je,Qe,ut,re),me=new n0(x,Le),_e=new Dg,it=new Bg(Je),Ie=new tm(x,M,H,De,J,f,h),we=new Vg(x,J,Qe),U=new s0(B,mt,Qe,De),Me=new nm(B,Je,mt),et=new um(B,Je,mt),mt.programs=Ce.programs,x.capabilities=Qe,x.extensions=Je,x.properties=Le,x.renderLists=_e,x.shadowMap=we,x.state=De,x.info=mt}ue();const Y=new t0(x,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(K,se,!1))},this.getSize=function(S){return S.set(K,se)},this.setSize=function(S,F,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,se=F,t.width=Math.floor(S*$),t.height=Math.floor(F*$),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(K*$,se*$).floor()},this.setDrawingBufferSize=function(S,F,G){K=S,se=F,$=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,F,G,W){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,F,G,W),De.viewport(N.copy(Re).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(Ye)},this.setScissor=function(S,F,G,W){S.isVector4?Ye.set(S.x,S.y,S.z,S.w):Ye.set(S,F,G,W),De.scissor(j.copy(Ye).multiplyScalar($).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(S){De.setScissorTest(dt=S)},this.setOpaqueSort=function(S){fe=S},this.setTransparentSort=function(S){ye=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(S=!0,F=!0,G=!0){let W=0;if(S){let O=!1;if(I!==null){const oe=I.texture.format;O=oe===Ca||oe===Aa||oe===Ea}if(O){const oe=I.texture.type,ve=oe===Bi||oe===xn||oe===Es||oe===$n||oe===ba||oe===Sa,Se=Ie.getClearColor(),Te=Ie.getClearAlpha(),Oe=Se.r,He=Se.g,Ee=Se.b;ve?(g[0]=Oe,g[1]=He,g[2]=Ee,g[3]=Te,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Oe,v[1]=He,v[2]=Ee,v[3]=Te,B.clearBufferiv(B.COLOR,0,v))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),it.dispose(),Le.dispose(),M.dispose(),H.dispose(),J.dispose(),ut.dispose(),U.dispose(),Ce.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ka),Y.removeEventListener("sessionend",Za),nn.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=mt.autoReset,F=we.enabled,G=we.autoUpdate,W=we.needsUpdate,O=we.type;ue(),mt.autoReset=S,we.enabled=F,we.autoUpdate=G,we.needsUpdate=W,we.type=O}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ze(S){const F=S.target;F.removeEventListener("dispose",ze),yt(F)}function yt(S){Dt(S),Le.remove(S)}function Dt(S){const F=Le.get(S).programs;F!==void 0&&(F.forEach(function(G){Ce.releaseProgram(G)}),S.isShaderMaterial&&Ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,W,O,oe){F===null&&(F=xt);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Se=Hc(S,F,G,W,O);De.setMaterial(W,ve);let Te=G.index,Oe=1;if(W.wireframe===!0){if(Te=ne.getWireframeAttribute(G),Te===void 0)return;Oe=2}const He=G.drawRange,Ee=G.attributes.position;let st=He.start*Oe,ft=(He.start+He.count)*Oe;oe!==null&&(st=Math.max(st,oe.start*Oe),ft=Math.min(ft,(oe.start+oe.count)*Oe)),Te!==null?(st=Math.max(st,0),ft=Math.min(ft,Te.count)):Ee!=null&&(st=Math.max(st,0),ft=Math.min(ft,Ee.count));const gt=ft-st;if(gt<0||gt===1/0)return;ut.setup(O,W,Se,G,Te);let Wt,rt=Me;if(Te!==null&&(Wt=ee.get(Te),rt=et,rt.setIndex(Wt)),O.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*Mt()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(O.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),De.setLineWidth(Pe*Mt()),O.isLineSegments?rt.setMode(B.LINES):O.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else O.isPoints?rt.setMode(B.POINTS):O.isSprite&&rt.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,Ti=O._multiDrawCounts,ot=O._multiDrawCount,li=Te?ee.get(Te).bytesPerElement:1,Mn=Le.get(W).currentProgram.getUniforms();for(let $t=0;$t<ot;$t++)Mn.setValue(B,"_gl_DrawID",$t),rt.render(Pe[$t]/li,Ti[$t])}else if(O.isInstancedMesh)rt.renderInstances(st,gt,O.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ti=Math.min(G.instanceCount,Pe);rt.renderInstances(st,gt,Ti)}else rt.render(st,gt)};function lt(S,F,G){S.transparent===!0&&S.side===Lt&&S.forceSinglePass===!1?(S.side=qt,S.needsUpdate=!0,Ds(S,F,G),S.side=en,S.needsUpdate=!0,Ds(S,F,G),S.side=Lt):Ds(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),p=it.get(G),p.init(F),w.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==G&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const Se=oe[ve];lt(Se,G,O),W.add(Se)}else lt(oe,G,O),W.add(oe)}),w.pop(),p=null,W},this.compileAsync=function(S,F,G=null){const W=this.compile(S,F,G);return new Promise(O=>{function oe(){if(W.forEach(function(ve){Le.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){O(S);return}setTimeout(oe,10)}Je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ai=null;function Si(S){ai&&ai(S)}function Ka(){nn.stop()}function Za(){nn.start()}const nn=new nc;nn.setAnimationLoop(Si),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(S){ai=S,Y.setAnimationLoop(S),S===null?nn.stop():nn.start()},Y.addEventListener("sessionstart",Ka),Y.addEventListener("sessionend",Za),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,F,I),p=it.get(S,w.length),p.init(F),w.push(p),Ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(Ne),Ae=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Ae),m=_e.get(S,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Or(oe,F,-1/0,x.sortObjects)}Or(S,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(fe,ye),tt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,tt&&Ie.addToRenderList(m,S),this.info.render.frame++,ae===!0&&re.beginShadows();const G=p.state.shadowsArray;we.render(G,S,F),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let ve=0,Se=oe.length;ve<Se;ve++){const Te=oe[ve];Qa(W,O,S,Te)}tt&&Ie.render(S);for(let ve=0,Se=oe.length;ve<Se;ve++){const Te=oe[ve];Ja(m,S,Te,Te.viewport)}}else O.length>0&&Qa(W,O,S,F),tt&&Ie.render(S),Ja(m,S,F);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,F),ut.resetDefaultState(),T=-1,b=null,w.pop(),w.length>0?(p=w[w.length-1],ae===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Or(S,F,G,W){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){W&&$e.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const ve=J.update(S),Se=S.material;Se.visible&&m.push(S,ve,Se,G,$e.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){const ve=J.update(S),Se=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$e.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),$e.copy(ve.boundingSphere.center)),$e.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Se)){const Te=ve.groups;for(let Oe=0,He=Te.length;Oe<He;Oe++){const Ee=Te[Oe],st=Se[Ee.materialIndex];st&&st.visible&&m.push(S,ve,st,G,$e.z,Ee)}}else Se.visible&&m.push(S,ve,Se,G,$e.z,null)}}const oe=S.children;for(let ve=0,Se=oe.length;ve<Se;ve++)Or(oe[ve],F,G,W)}function Ja(S,F,G,W){const O=S.opaque,oe=S.transmissive,ve=S.transparent;p.setupLightsView(G),ae===!0&&re.setGlobalState(x.clippingPlanes,G),W&&De.viewport(N.copy(W)),O.length>0&&Ls(O,F,G),oe.length>0&&Ls(oe,F,G),ve.length>0&&Ls(ve,F,G),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Qa(S,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new gi(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Fi:Bi,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[W.id],ve=W.viewport||N;oe.setSize(ve.z,ve.w);const Se=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(Z),ie=x.getClearAlpha(),ie<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Ie.render(G);const Te=x.toneMapping;x.toneMapping=Qi;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ae===!0&&re.setGlobalState(x.clippingPlanes,W),Ls(S,G,W),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ee=0,st=F.length;Ee<st;Ee++){const ft=F[Ee],gt=ft.object,Wt=ft.geometry,rt=ft.material,Pe=ft.group;if(rt.side===Lt&&gt.layers.test(W.layers)){const Ti=rt.side;rt.side=qt,rt.needsUpdate=!0,el(gt,G,W,Wt,rt,Pe),rt.side=Ti,rt.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}x.setRenderTarget(Se),x.setClearColor(Z,ie),Oe!==void 0&&(W.viewport=Oe),x.toneMapping=Te}function Ls(S,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=S.length;O<oe;O++){const ve=S[O],Se=ve.object,Te=ve.geometry,Oe=W===null?ve.material:W,He=ve.group;Se.layers.test(G.layers)&&el(Se,F,G,Te,Oe,He)}}function el(S,F,G,W,O,oe){S.onBeforeRender(x,F,G,W,O,oe),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,F,G,W,S,oe),O.transparent===!0&&O.side===Lt&&O.forceSinglePass===!1?(O.side=qt,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,S,oe),O.side=en,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,S,oe),O.side=Lt):x.renderBufferDirect(G,F,W,O,S,oe),S.onAfterRender(x,F,G,W,O,oe)}function Ds(S,F,G){F.isScene!==!0&&(F=xt);const W=Le.get(S),O=p.state.lights,oe=p.state.shadowsArray,ve=O.state.version,Se=Ce.getParameters(S,O.state,oe,F,G),Te=Ce.getProgramCacheKey(Se);let Oe=W.programs;W.environment=S.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(S.isMeshStandardMaterial?H:M).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",ze),Oe=new Map,W.programs=Oe);let He=Oe.get(Te);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===ve)return il(S,Se),He}else Se.uniforms=Ce.getUniforms(S),S.onBeforeCompile(Se,x),He=Ce.acquireProgram(Se,Te),Oe.set(Te,He),W.uniforms=Se.uniforms;const Ee=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=re.uniform),il(S,Se),W.needsLights=Wc(S),W.lightsStateVersion=ve,W.needsLights&&(Ee.ambientLightColor.value=O.state.ambient,Ee.lightProbe.value=O.state.probe,Ee.directionalLights.value=O.state.directional,Ee.directionalLightShadows.value=O.state.directionalShadow,Ee.spotLights.value=O.state.spot,Ee.spotLightShadows.value=O.state.spotShadow,Ee.rectAreaLights.value=O.state.rectArea,Ee.ltc_1.value=O.state.rectAreaLTC1,Ee.ltc_2.value=O.state.rectAreaLTC2,Ee.pointLights.value=O.state.point,Ee.pointLightShadows.value=O.state.pointShadow,Ee.hemisphereLights.value=O.state.hemi,Ee.directionalShadowMap.value=O.state.directionalShadowMap,Ee.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ee.spotShadowMap.value=O.state.spotShadowMap,Ee.spotLightMatrix.value=O.state.spotLightMatrix,Ee.spotLightMap.value=O.state.spotLightMap,Ee.pointShadowMap.value=O.state.pointShadowMap,Ee.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function tl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=wr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function il(S,F){const G=Le.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Hc(S,F,G,W,O){F.isScene!==!0&&(F=xt),R.resetTextureUnits();const oe=F.fog,ve=W.isMeshStandardMaterial?F.environment:null,Se=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qn,Te=(W.isMeshStandardMaterial?H:M).get(W.envMap||ve),Oe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ee=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color;let gt=Qi;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=Wt!==void 0?Wt.length:0,Pe=Le.get(W),Ti=p.state.lights;if(ae===!0&&(Ae===!0||S!==b)){const ii=S===b&&W.id===T;re.setState(W,S,ii)}let ot=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ti.state.version||Pe.outputColorSpace!==Se||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Te||W.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==He||Pe.morphTargets!==Ee||Pe.morphNormals!==st||Pe.morphColors!==ft||Pe.toneMapping!==gt||Pe.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,Pe.__version=W.version);let li=Pe.currentProgram;ot===!0&&(li=Ds(W,F,O));let Mn=!1,$t=!1,ss=!1;const vt=li.getUniforms(),xi=Pe.uniforms;if(De.useProgram(li.program)&&(Mn=!0,$t=!0,ss=!0),W.id!==T&&(T=W.id,$t=!0),Mn||b!==S){De.buffers.depth.getReversed()?(pe.copy(S.projectionMatrix),$d(pe),Kd(pe),vt.setValue(B,"projectionMatrix",pe)):vt.setValue(B,"projectionMatrix",S.projectionMatrix),vt.setValue(B,"viewMatrix",S.matrixWorldInverse);const zi=vt.map.cameraPosition;zi!==void 0&&zi.setValue(B,Be.setFromMatrixPosition(S.matrixWorld)),Qe.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,$t=!0,ss=!0)}if(O.isSkinnedMesh){vt.setOptional(B,O,"bindMatrix"),vt.setOptional(B,O,"bindMatrixInverse");const ii=O.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),vt.setValue(B,"boneTexture",ii.boneTexture,R))}O.isBatchedMesh&&(vt.setOptional(B,O,"batchingTexture"),vt.setValue(B,"batchingTexture",O._matricesTexture,R),vt.setOptional(B,O,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",O._indirectTexture,R),vt.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",O._colorsTexture,R));const rs=G.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Fe.update(O,G,li),($t||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,vt.setValue(B,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xi.envMap.value=Te,xi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(xi.envMapIntensity.value=F.environmentIntensity),$t&&(vt.setValue(B,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Gc(xi,ss),oe&&W.fog===!0&&me.refreshFogUniforms(xi,oe),me.refreshMaterialUniforms(xi,W,$,se,p.state.transmissionRenderTarget[S.id]),wr.upload(B,tl(Pe),xi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wr.upload(B,tl(Pe),xi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(B,"center",O.center),vt.setValue(B,"modelViewMatrix",O.modelViewMatrix),vt.setValue(B,"normalMatrix",O.normalMatrix),vt.setValue(B,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ii=W.uniformsGroups;for(let zi=0,Hi=ii.length;zi<Hi;zi++){const nl=ii[zi];U.update(nl,li),U.bind(nl,li)}}return li}function Gc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Wc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,F,G){Le.get(S.texture).__webglTexture=F,Le.get(S.depthTexture).__webglTexture=G;const W=Le.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const G=Le.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){I=S,P=F,k=G;let W=!0,O=null,oe=!1,ve=!1;if(S){const Te=Le.get(S);if(Te.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(Te.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(Te.__hasExternalTextures)R.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ee=S.depthTexture;if(Te.__boundDepthTexture!==Ee){if(Ee!==null&&Le.has(Ee)&&(S.width!==Ee.image.width||S.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const He=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[F])?O=He[F][G]:O=He[F],oe=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?O=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[G]:O=He,N.copy(S.viewport),j.copy(S.scissor),V=S.scissorTest}else N.copy(Re).multiplyScalar($).floor(),j.copy(Ye).multiplyScalar($).floor(),V=dt;if(De.bindFramebuffer(B.FRAMEBUFFER,O)&&W&&De.drawBuffers(S,O),De.viewport(N),De.scissor(j),De.setScissorTest(V),oe){const Te=Le.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,G)}else if(ve){const Te=Le.get(S.texture),Oe=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Oe)}T=-1},this.readRenderTargetPixels=function(S,F,G,W,O,oe,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){De.bindFramebuffer(B.FRAMEBUFFER,Se);try{const Te=S.texture,Oe=Te.format,He=Te.type;if(!Qe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O&&B.readPixels(F,G,W,O,We.convert(Oe),We.convert(He),oe)}finally{const Te=I!==null?Le.get(I).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,W,O,oe,ve){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){const Te=S.texture,Oe=Te.format,He=Te.type;if(!Qe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-W&&G>=0&&G<=S.height-O){De.bindFramebuffer(B.FRAMEBUFFER,Se);const Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,oe.byteLength,B.STREAM_READ),B.readPixels(F,G,W,O,We.convert(Oe),We.convert(He),0);const st=I!==null?Le.get(I).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,st);const ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Yd(B,ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,oe),B.deleteBuffer(Ee),B.deleteSync(ft),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,G=0){S.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(S.image.width*W),oe=Math.floor(S.image.height*W),ve=F!==null?F.x:0,Se=F!==null?F.y:0;R.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,ve,Se,O,oe),De.unbindTexture()},this.copyTextureToTexture=function(S,F,G=null,W=null,O=0){S.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let oe,ve,Se,Te,Oe,He,Ee,st,ft;const gt=S.isCompressedTexture?S.mipmaps[O]:S.image;G!==null?(oe=G.max.x-G.min.x,ve=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Te=G.min.x,Oe=G.min.y,He=G.isBox3?G.min.z:0):(oe=gt.width,ve=gt.height,Se=gt.depth||1,Te=0,Oe=0,He=0),W!==null?(Ee=W.x,st=W.y,ft=W.z):(Ee=0,st=0,ft=0);const Wt=We.convert(F.format),rt=We.convert(F.type);let Pe;F.isData3DTexture?(R.setTexture3D(F,0),Pe=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Pe=B.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Ti=B.getParameter(B.UNPACK_ROW_LENGTH),ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),li=B.getParameter(B.UNPACK_SKIP_PIXELS),Mn=B.getParameter(B.UNPACK_SKIP_ROWS),$t=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He);const ss=S.isDataArrayTexture||S.isData3DTexture,vt=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const xi=Le.get(S),rs=Le.get(F),ii=Le.get(xi.__renderTarget),zi=Le.get(rs.__renderTarget);De.bindFramebuffer(B.READ_FRAMEBUFFER,ii.__webglFramebuffer),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Hi=0;Hi<Se;Hi++)ss&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,O,He+Hi),S.isDepthTexture?(vt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(F).__webglTexture,O,ft+Hi),B.blitFramebuffer(Te,Oe,oe,ve,Ee,st,oe,ve,B.DEPTH_BUFFER_BIT,B.NEAREST)):vt?B.copyTexSubImage3D(Pe,O,Ee,st,ft+Hi,Te,Oe,oe,ve):B.copyTexSubImage2D(Pe,O,Ee,st,ft+Hi,Te,Oe,oe,ve);De.bindFramebuffer(B.READ_FRAMEBUFFER,null),De.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Pe,O,Ee,st,ft,oe,ve,Se,Wt,rt,gt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,O,Ee,st,ft,oe,ve,Se,Wt,gt.data):B.texSubImage3D(Pe,O,Ee,st,ft,oe,ve,Se,Wt,rt,gt):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,Ee,st,oe,ve,Wt,rt,gt.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,Ee,st,gt.width,gt.height,Wt,gt.data):B.texSubImage2D(B.TEXTURE_2D,O,Ee,st,oe,ve,Wt,rt,gt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ti),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,li),B.pixelStorei(B.UNPACK_SKIP_ROWS,Mn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$t),O===0&&F.generateMipmaps&&B.generateMipmap(Pe),De.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G=null,W=null,O=0){return S.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,S=arguments[2],F=arguments[3],O=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,G,W,O)},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){P=0,k=0,I=null,De.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Ia{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Na{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new Na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class o0 extends Ft{constructor(e=null,t=1,i=1,n,s,o,a,h,c=Qt,d=Qt,l,u){super(null,o,a,h,c,d,n,s,l,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends ei{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fn=new at,sh=new at,tr=[],rh=new tn,a0=new at,cs=new D,ds=new _n;class l0 extends D{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,a0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fn),rh.copy(e.boundingBox).applyMatrix4(Fn),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fn),ds.copy(e.boundingSphere).applyMatrix4(Fn),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(i),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Fn),sh.multiplyMatrices(i,Fn),cs.matrixWorld=sh,cs.raycast(e,tr);for(let o=0,a=tr.length;o<a;o++){const h=tr[o];h.instanceId=s,h.object=this,t.push(h)}tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new o0(new Float32Array(n*this.count),n,this.count,Ta,_i));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,h=n*e;s[h]=a,s.set(i,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ki extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pr=new A,Rr=new A,oh=new at,us=new Nr,ir=new _n,po=new A,ah=new A;class pa extends St{constructor(e=new wt,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Pr.fromBufferAttribute(t,n-1),Rr.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Pr.distanceTo(Rr);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(n),ir.radius+=s,e.ray.intersectsSphere(ir)===!1)return;oh.copy(n).invert(),us.copy(e.ray).applyMatrix4(oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),y=d.getX(v+1),w=nr(this,e,us,h,p,y);w&&t.push(w)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=nr(this,e,us,h,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=nr(this,e,us,h,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=nr(this,e,us,h,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nr(r,e,t,i,n,s){const o=r.geometry.attributes.position;if(Pr.fromBufferAttribute(o,n),Rr.fromBufferAttribute(o,s),t.distanceSqToSegment(Pr,Rr,po,ah)>i)return;po.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(po);if(!(h<e.near||h>e.far))return{distance:h,point:ah.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const lh=new A,hh=new A;class cc extends pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)lh.fromBufferAttribute(t,n),hh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+lh.distanceTo(hh);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dc extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ch=new at,ma=new Nr,sr=new _n,rr=new A;class h0 extends St{constructor(e=new wt,t=new dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(n),sr.radius+=s,e.ray.intersectsSphere(sr)===!1)return;ch.copy(n).invert(),ma.copy(e.ray).applyMatrix4(ch);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,c=i.index,l=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=c.getX(g);rr.fromBufferAttribute(l,m),dh(rr,m,h,n,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,v=f;g<v;g++)rr.fromBufferAttribute(l,g),dh(rr,g,h,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function dh(r,e,t,i,n,s,o){const a=ma.distanceSqToPoint(r);if(a<t){const h=new A;ma.closestPointToPoint(r,h),h.applyMatrix4(i);const c=n.ray.origin.distanceTo(h);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class uc extends Ft{constructor(e,t,i,n,s,o,a,h,c){super(e,t,i,n,s,o,a,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,h=s-1,c;for(;a<=h;)if(n=Math.floor(a+(h-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)h=n-1;else{h=n;break}if(n=h,i[n]===o)return n/(s-1);const d=i[n],u=i[n+1]-d,f=(o-d)/u;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),h=t||(o.isVector2?new he:new A);return h.copy(a).sub(o).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new A,n=[],s=[],o=[],a=new A,h=new at;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const d=Math.abs(n[0].x),l=Math.abs(n[0].y),u=Math.abs(n[0].z);d<=c&&(c=d,i.set(1,0,0)),l<=c&&(c=l,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Et(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(h.makeRotationAxis(a,g))}o[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(Et(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(h.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ua extends bi{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(e,t=new he){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+e*s;let h=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),l=Math.sin(this.aRotation),u=h-this.aX,f=c-this.aY;h=u*d-f*l+this.aX,c=u*l+f*d+this.aY}return i.set(h,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c0 extends Ua{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fa(){let r=0,e=0,t=0,i=0;function n(s,o,a,h){r=s,e=a,t=-3*s+3*o-2*a-h,i=2*s-2*o+a+h}return{initCatmullRom:function(s,o,a,h,c){n(o,a,c*(a-s),c*(h-o))},initNonuniformCatmullRom:function(s,o,a,h,c,d,l){let u=(o-s)/c-(a-s)/(c+d)+(a-o)/d,f=(a-o)/d-(h-o)/(d+l)+(h-a)/l;u*=d,f*=d,n(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+i*a}}}const or=new A,mo=new Fa,go=new Fa,vo=new Fa;class d0 extends bi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:h===0&&a===s-1&&(a=s-2,h=1);let c,d;this.closed||a>0?c=n[(a-1)%s]:(or.subVectors(n[0],n[1]).add(n[0]),c=or);const l=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?d=n[(a+2)%s]:(or.subVectors(n[s-1],n[s-2]).add(n[s-1]),d=or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(l),f),v=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),mo.initNonuniformCatmullRom(c.x,l.x,u.x,d.x,g,v,m),go.initNonuniformCatmullRom(c.y,l.y,u.y,d.y,g,v,m),vo.initNonuniformCatmullRom(c.z,l.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(c.x,l.x,u.x,d.x,this.tension),go.initCatmullRom(c.y,l.y,u.y,d.y,this.tension),vo.initCatmullRom(c.z,l.z,u.z,d.z,this.tension));return i.set(mo.calc(h),go.calc(h),vo.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uh(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,a=r*r,h=r*a;return(2*t-2*i+s+o)*h+(-3*t+3*i-2*s-o)*a+s*r+t}function u0(r,e){const t=1-r;return t*t*e}function f0(r,e){return 2*(1-r)*r*e}function p0(r,e){return r*r*e}function Ms(r,e,t,i){return u0(r,e)+f0(r,t)+p0(r,i)}function m0(r,e){const t=1-r;return t*t*t*e}function g0(r,e){const t=1-r;return 3*t*t*r*e}function v0(r,e){return 3*(1-r)*r*r*e}function x0(r,e){return r*r*r*e}function bs(r,e,t,i,n){return m0(r,e)+g0(r,t)+v0(r,i)+x0(r,n)}class fc extends bi{constructor(e=new he,t=new he,i=new he,n=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new he){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bs(e,n.x,s.x,o.x,a.x),bs(e,n.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y0 extends bi{constructor(e=new A,t=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){const i=t,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bs(e,n.x,s.x,o.x,a.x),bs(e,n.y,s.y,o.y,a.y),bs(e,n.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pc extends bi{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _0 extends bi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mc extends bi{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(Ms(e,n.x,s.x,o.x),Ms(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w0 extends bi{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(Ms(e,n.x,s.x,o.x),Ms(e,n.y,s.y,o.y),Ms(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),a=s-o,h=n[o===0?o:o-1],c=n[o],d=n[o>n.length-2?n.length-1:o+1],l=n[o>n.length-3?n.length-1:o+2];return i.set(uh(a,h.x,c.x,d.x,l.x),uh(a,h.y,c.y,d.y,l.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new he().fromArray(n))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:c0,CatmullRomCurve3:d0,CubicBezierCurve:fc,CubicBezierCurve3:y0,EllipseCurve:Ua,LineCurve:pc,LineCurve3:_0,QuadraticBezierCurve:mc,QuadraticBezierCurve3:w0,SplineCurve:gc});class M0 extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],h=a.getLength(),c=h===0?0:1-o/h;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,h=o.getPoints(a);for(let c=0;c<h.length;c++){const d=h[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new fh[n.type]().fromJSON(n))}return this}}class b0 extends M0{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new pc(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new mc(this.currentPoint.clone(),new he(e,t),new he(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,o){const a=new fc(this.currentPoint.clone(),new he(e,t),new he(i,n),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new gc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,o){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+a,t+h,i,n,s,o),this}absarc(e,t,i,n,s,o){return this.absellipse(e,t,i,i,n,s,o),this}ellipse(e,t,i,n,s,o,a,h){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,n,s,o,a,h),this}absellipse(e,t,i,n,s,o,a,h){const c=new Ua(e,t,i,n,s,o,a,h);if(this.curves.length>0){const l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Oa extends wt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Et(n,0,Math.PI*2);const s=[],o=[],a=[],h=[],c=[],d=1/t,l=new A,u=new he,f=new A,g=new A,v=new A;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),h.push(f.x,f.y,f.z);break;case e.length-1:h.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),h.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){const w=i+y*d*n,x=Math.sin(w),C=Math.cos(w);for(let P=0;P<=e.length-1;P++){l.x=e[P].x*x,l.y=e[P].y,l.z=e[P].x*C,o.push(l.x,l.y,l.z),u.x=y/t,u.y=P/(e.length-1),a.push(u.x,u.y);const k=h[3*P+0]*x,I=h[3*P+1],T=h[3*P+0]*C;c.push(k,I,T)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){const x=w+y*e.length,C=x,P=x+e.length,k=x+e.length+1,I=x+1;s.push(C,P,I),s.push(k,I,P)}this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.points,e.segments,e.phiStart,e.phiLength)}}class Jt extends Oa{constructor(e=1,t=1,i=4,n=8){const s=new b0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Jt(e.radius,e.length,e.capSegments,e.radialSegments)}}class Cs extends wt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],o=[],a=[],h=[],c=new A,d=new he;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let l=0,u=3;l<=t;l++,u+=3){const f=i+l/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,h.push(d.x,d.y)}for(let l=1;l<=t;l++)s.push(l,l+1,0);this.setIndex(s),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ke extends wt{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};const c=this;n=Math.floor(n),s=Math.floor(s);const d=[],l=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function y(){const x=new A,C=new A;let P=0;const k=(t-e)/i;for(let I=0;I<=s;I++){const T=[],b=I/s,N=b*(t-e)+e;for(let j=0;j<=n;j++){const V=j/n,Z=V*h+a,ie=Math.sin(Z),K=Math.cos(Z);C.x=N*ie,C.y=-b*i+m,C.z=N*K,l.push(C.x,C.y,C.z),x.set(ie,k,K).normalize(),u.push(x.x,x.y,x.z),f.push(V,1-b),T.push(g++)}v.push(T)}for(let I=0;I<n;I++)for(let T=0;T<s;T++){const b=v[T][I],N=v[T+1][I],j=v[T+1][I+1],V=v[T][I+1];(e>0||T!==0)&&(d.push(b,N,V),P+=3),(t>0||T!==s-1)&&(d.push(N,j,V),P+=3)}c.addGroup(p,P,0),p+=P}function w(x){const C=g,P=new he,k=new A;let I=0;const T=x===!0?e:t,b=x===!0?1:-1;for(let j=1;j<=n;j++)l.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;const N=g;for(let j=0;j<=n;j++){const Z=j/n*h+a,ie=Math.cos(Z),K=Math.sin(Z);k.x=T*K,k.y=m*b,k.z=T*ie,l.push(k.x,k.y,k.z),u.push(0,b,0),P.x=ie*.5+.5,P.y=K*.5*b+.5,f.push(P.x,P.y),g++}for(let j=0;j<n;j++){const V=C+j,Z=N+j;x===!0?d.push(Z,Z+1,V):d.push(Z+1,Z,V),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ht extends ke{constructor(e=1,t=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ht(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends wt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],o=[];a(n),c(i),d(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const w=new A,x=new A,C=new A;for(let P=0;P<t.length;P+=3)f(t[P+0],w),f(t[P+1],x),f(t[P+2],C),h(w,x,C,y)}function h(y,w,x,C){const P=C+1,k=[];for(let I=0;I<=P;I++){k[I]=[];const T=y.clone().lerp(x,I/P),b=w.clone().lerp(x,I/P),N=P-I;for(let j=0;j<=N;j++)j===0&&I===P?k[I][j]=T:k[I][j]=T.clone().lerp(b,j/N)}for(let I=0;I<P;I++)for(let T=0;T<2*(P-I)-1;T++){const b=Math.floor(T/2);T%2===0?(u(k[I][b+1]),u(k[I+1][b]),u(k[I][b])):(u(k[I][b+1]),u(k[I+1][b+1]),u(k[I+1][b]))}}function c(y){const w=new A;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(y),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function d(){const y=new A;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];const x=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(x,1-C)}g(),l()}function l(){for(let y=0;y<o.length;y+=6){const w=o[y+0],x=o[y+2],C=o[y+4],P=Math.max(w,x,C),k=Math.min(w,x,C);P>.9&&k<.1&&(w<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,w){const x=y*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){const y=new A,w=new A,x=new A,C=new A,P=new he,k=new he,I=new he;for(let T=0,b=0;T<s.length;T+=9,b+=6){y.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),P.set(o[b+0],o[b+1]),k.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),C.copy(y).add(w).add(x).divideScalar(3);const N=m(C);v(P,b+0,y,N),v(k,b+2,w,N),v(I,b+4,x,N)}}function v(y,w,x,C){C<0&&y.x===1&&(o[w]=y.x-1),x.x===0&&x.z===0&&(o[w]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.vertices,e.indices,e.radius,e.details)}}class Ba extends Rs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ba(e.radius,e.detail)}}const ar=new A,lr=new A,xo=new A,hr=new ri;class S0 extends wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),s=Math.cos(Vn*t),o=e.getIndex(),a=e.getAttribute("position"),h=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],l=new Array(3),u={},f=[];for(let g=0;g<h;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=hr;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),hr.getNormal(xo),l[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,l[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,l[2]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,!(l[0]===l[1]||l[1]===l[2]||l[2]===l[0]))for(let y=0;y<3;y++){const w=(y+1)%3,x=l[y],C=l[w],P=hr[d[y]],k=hr[d[w]],I=`${x}_${C}`,T=`${C}_${x}`;T in u&&u[T]?(xo.dot(u[T].normal)<=s&&(f.push(P.x,P.y,P.z),f.push(k.x,k.y,k.z)),u[T]=null):I in u||(u[I]={index0:c[y],index1:c[w],normal:xo.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];ar.fromBufferAttribute(a,v),lr.fromBufferAttribute(a,m),f.push(ar.x,ar.y,ar.z),f.push(lr.x,lr.y,lr.z)}this.setAttribute("position",new Ze(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class za extends Rs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new za(e.radius,e.detail)}}class wi extends Rs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wi(e.radius,e.detail)}}class ns extends wt{constructor(e=.5,t=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],h=[],c=[],d=[];let l=e;const u=(t-e)/n,f=new A,g=new he;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=l*Math.cos(p),f.y=l*Math.sin(p),h.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}l+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,w=y,x=y+i+1,C=y+i+2,P=y+1;a.push(w,x,P),a.push(x,C,P)}}this.setIndex(a),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class je extends wt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(o+a,Math.PI);let c=0;const d=[],l=new A,u=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],w=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&h===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const P=C/t;l.x=-e*Math.cos(n+P*s)*Math.sin(o+w*a),l.y=e*Math.cos(o+w*a),l.z=e*Math.sin(n+P*s)*Math.sin(o+w*a),g.push(l.x,l.y,l.z),u.copy(l).normalize(),v.push(u.x,u.y,u.z),m.push(P+x,1-w),y.push(c++)}d.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const w=d[p][y+1],x=d[p][y],C=d[p+1][y],P=d[p+1][y+1];(p!==0||o>0)&&f.push(w,x,P),(p!==i-1||h<Math.PI)&&f.push(x,C,P)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fi extends wt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],h=[],c=[],d=new A,l=new A,u=new A;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,m=f/i*Math.PI*2;l.x=(e+t*Math.cos(m))*Math.cos(v),l.y=(e+t*Math.cos(m))*Math.sin(v),l.z=t*Math.sin(m),a.push(l.x,l.y,l.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),u.subVectors(l,d).normalize(),h.push(u.x,u.y,u.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class X extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vc extends Fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yo=new at,ph=new A,mh=new A;class xc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gh=new at,fs=new A,_o=new A;class T0 extends xc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),i.position.copy(fs),_o.copy(i.position),_o.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_o),i.updateMatrixWorld(),n.makeTranslation(-fs.x,-fs.y,-fs.z),gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh)}}class Ha extends Fr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class E0 extends xc{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ss extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new E0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yc extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class A0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vh(){return performance.now()}const xh=new at;class yh{constructor(e,t,i=0,n=1/0){this.ray=new Nr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xh),this}intersectObject(e,t=!0,i=[]){return ga(e,this,i,t),i.sort(_h),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)ga(e[n],this,i,t);return i.sort(_h),i}}function _h(r,e){return r.distance-e.distance}function ga(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ga(s[o],e,t,!0)}}class C0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class P0 extends cc{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ue(i),n=new Ue(n);const s=t/2,o=e/t,a=e/2,h=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){h.push(-a,0,g,a,0,g),h.push(g,0,-a,g,0,a);const v=u===s?i:n;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const d=new wt;d.setAttribute("position",new Ze(h,3)),d.setAttribute("color",new Ze(c,3));const l=new Ki({vertexColors:!0,toneMapped:!1});super(d,l),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);const Xe=2;var E=(r=>(r[r.Rock=0]="Rock",r[r.Earth=1]="Earth",r[r.Gold=2]="Gold",r[r.Dirt=3]="Dirt",r[r.Claimed=4]="Claimed",r[r.Heart=5]="Heart",r[r.Wall=6]="Wall",r[r.Lava=7]="Lava",r[r.Water=8]="Water",r[r.BridgeWood=9]="BridgeWood",r[r.BridgeStone=10]="BridgeStone",r[r.Gem=11]="Gem",r))(E||{}),_=(r=>(r[r.None=0]="None",r[r.Treasury=1]="Treasury",r[r.Lair=2]="Lair",r[r.Hatchery=3]="Hatchery",r[r.Training=4]="Training",r[r.Library=5]="Library",r[r.Portal=6]="Portal",r[r.Guard=7]="Guard",r[r.Workshop=8]="Workshop",r[r.Prison=9]="Prison",r[r.Torture=10]="Torture",r[r.Graveyard=11]="Graveyard",r[r.Temple=12]="Temple",r[r.CombatPit=13]="CombatPit",r[r.Casino=14]="Casino",r))(_||{}),qe=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Open=2]="Open",r))(qe||{}),pt=(r=>(r[r.None=0]="None",r[r.Sentry=1]="Sentry",r))(pt||{}),be=(r=>(r[r.None=0]="None",r[r.Dig=1]="Dig",r[r.Claim=2]="Claim",r[r.Fortify=3]="Fortify",r))(be||{}),q=(r=>(r.Scrabbler="scrabbler",r.Skitterwing="skitterwing",r.Rattlekin="rattlekin",r.Emberling="emberling",r.Gravemage="gravemage",r.Thornwitch="thornwitch",r.Bonewretch="bonewretch",r.HeroKnight="hero_knight",r.HeroArcher="hero_archer",r))(q||{}),L=(r=>(r.Idle="idle",r.Dig="dig",r.Claim="claim",r.Fortify="fortify",r.Mine="mine",r.Haul="haul",r.Sleep="sleep",r.Eat="eat",r.Train="train",r.Research="research",r.Fight="fight",r.Flee="flee",r.Wander="wander",r.Guard="guard",r.AttackMove="attack",r.Craft="craft",r.DragPrisoner="drag",r.Pray="pray",r.DragWounded="dragwounded",r.Gamble="gamble",r))(L||{});const wh={0:0,1:50,2:100,3:150,4:200,5:250,6:300,7:175,8:200,9:225,10:275,11:250,12:300,13:350,14:225},wo=75,Mo=150,cr=40,R0=60,k0=120,On=35,dr=22,ur=28,L0=1e3,D0=200,I0=8,N0=3,U0=4,cn=48,bo=500,si=3,F0=240,ps=90,O0=480,dn=2500,un=5,Ts={scrabbler:{hp:40,speed:4.6,damage:4,goldWage:0,color:6982208,scale:1.55},skitterwing:{hp:50,speed:4.6,damage:6,goldWage:8,color:4243616,scale:.6},rattlekin:{hp:80,speed:3.1,damage:12,goldWage:15,color:9072720,scale:.75},emberling:{hp:90,speed:2.9,damage:16,goldWage:25,color:14700576,scale:.8},gravemage:{hp:70,speed:2.6,damage:10,goldWage:20,color:7360704,scale:.78},thornwitch:{hp:85,speed:2.9,damage:15,goldWage:22,color:10498144,scale:.78},bonewretch:{hp:55,speed:3.2,damage:11,goldWage:0,color:14209208,scale:.72},hero_knight:{hp:120,speed:2.55,damage:18,goldWage:0,color:12634328,scale:.85},hero_archer:{hp:70,speed:2.9,damage:14,goldWage:0,color:5275808,scale:.7}};function kt(r){return r===1||r===2||r===11}function B0(r){return L0+Math.max(0,r)*D0}function z0(r){return r<=0?0:I0+Math.max(0,r-1)*N0}function fr(r){return r==="emberling"}function pr(r){return r==="skitterwing"}function ms(r){return r<=1?0:Math.min(.5,(r-1)*.06)}const Jn=new Map;function vn(r,e,t){const i=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return i-Math.floor(i)}function H0(r,e,t){const i=Math.floor(r),n=Math.floor(e),s=r-i,o=e-n,a=s*s*(3-2*s),h=o*o*(3-2*o),c=vn(i,n,t),d=vn(i+1,n,t),l=vn(i,n+1,t),u=vn(i+1,n+1,t);return c+(d-c)*a+(l-c)*h+(c-d-l+u)*a*h}function Mr(r,e,t,i=4){let n=.5,s=1,o=0,a=0;for(let h=0;h<i;h++)o+=n*H0(r*s,e*s,t+h*19),a+=n,n*=.5,s*=2;return o/a}function Ga(r){const e=document.createElement("canvas");e.width=r,e.height=r;const t=e.getContext("2d",{willReadFrequently:!0}),i=t.createImageData(r,r);return{canvas:e,ctx:t,data:i}}function _c(r,e=2){const t=new uc(r);return t.wrapS=t.wrapT=Tr,t.repeat.set(e,e),t.colorSpace=zt,t.magFilter=pi,t.minFilter=Ji,t.generateMipmaps=!0,t.needsUpdate=!0,t}function wc(r,e,t,i,n,s,o=255){const a=(t*r.width+e)*4;r.data[a]=i,r.data[a+1]=n,r.data[a+2]=s,r.data[a+3]=o}function So(r,e,t){return r+(e-r)*t}function Bn(r,e,t){return[So(r[0],e[0],t),So(r[1],e[1],t),So(r[2],e[2],t)]}function Yt(r,e){const t=JSON.stringify(e)+`|${r}`,i=Jn.get(t);if(i)return i;const{canvas:n,ctx:s,data:o}=Ga(r),a=e.scale??4,h=e.contrast??1;for(let d=0;d<r;d++)for(let l=0;l<r;l++){const u=l/r*a,f=d/r*a;let g=Mr(u,f,e.seed);g=(g-.5)*h+.5,g=Math.max(0,Math.min(1,g));let v=Bn(e.dark,e.base,g);if(g>.62&&(v=Bn(v,e.light,(g-.62)/.38)),e.bricks){const{bw:m,bh:p,mortar:y,mortarW:w}=e.bricks,C=Math.floor(d/p)%2===0?0:m*.5,P=(l+C)%m,k=d%p;if(P<w||k<w)v=y;else{const I=Math.floor((l+C)/m),T=Math.floor(d/p),b=vn(I,T,e.seed+9)*.18-.09;v=[Math.max(0,Math.min(255,v[0]*(1+b))),Math.max(0,Math.min(255,v[1]*(1+b))),Math.max(0,Math.min(255,v[2]*(1+b)))]}}if(e.veins){const m=Mr(u*e.veins.scale,f*e.veins.scale,e.veins.seed);if(m>e.veins.thresh){const p=(m-e.veins.thresh)/(1-e.veins.thresh);v=Bn(v,e.veins.color,Math.min(1,p*1.4))}}if(e.speck&&vn(l,d,e.seed+3)<e.speck){const m=e.speckColor??e.light;v=Bn(v,m,.55)}if(e.cracks&&Math.abs(Mr(u*2.5,f*.4,e.seed+40)-.5)<.035&&(v=Bn(v,e.dark,.7)),e.borderDark){const m=Math.min(l,d,r-1-l,r-1-d)/r;if(m<e.borderDark){const p=1-m/e.borderDark;v=Bn(v,e.dark,p*.55)}}wc(o,l,d,v[0]|0,v[1]|0,v[2]|0)}s.putImageData(o,0,0);const c=_c(n,1);return Jn.set(t,c),c}function G0(r,e=1){const t=`bump:${r.image.width}:${e}:${r.uuid}`,i=Jn.get(t);if(i)return i;const n=r.image,s=n.width,{canvas:o,ctx:a,data:h}=Ga(s),d=n.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,s,s);for(let u=0;u<s*s;u++){const f=d.data[u*4],g=d.data[u*4+1],v=d.data[u*4+2];let m=(.299*f+.587*g+.114*v)*e;m=Math.max(0,Math.min(255,m));const p=u*4;h.data[p]=m,h.data[p+1]=m,h.data[p+2]=m,h.data[p+3]=255}a.putImageData(h,0,0);const l=_c(o,r.repeat.x);return l.colorSpace=Ii,Jn.set(t,l),l}function W0(){return Yt(64,{seed:11,base:[186,118,48],dark:[98,48,18],light:[228,162,82],scale:5.8,contrast:1.55,speck:.06,speckColor:[150,86,32],cracks:!0,borderDark:.07})}function V0(){return Yt(64,{seed:22,base:[118,124,140],dark:[58,62,78],light:[175,182,198],scale:3.6,contrast:1.25,cracks:!0,speck:.05,speckColor:[210,215,230]})}function j0(){return Yt(64,{seed:33,base:[78,50,30],dark:[36,22,12],light:[112,76,46],scale:6.4,contrast:1.3,speck:.08,speckColor:[62,42,24],cracks:!0})}function Wa(){return Yt(64,{seed:44,base:[152,146,138],dark:[88,82,76],light:[198,192,182],scale:2.6,contrast:1.3,bricks:{bw:18,bh:12,mortar:[42,36,32],mortarW:2}})}function X0(){return Yt(64,{seed:55,base:[128,122,112],dark:[70,66,60],light:[168,162,150],scale:3,contrast:1.1,bricks:{bw:14,bh:12,mortar:[42,40,38],mortarW:2},borderDark:.08})}function q0(){return Yt(64,{seed:71,base:[28,140,128],dark:[8,48,52],light:[140,255,230],scale:3.4,contrast:1.55,veins:{color:[180,255,240],scale:1.05,thresh:.36,seed:111},speck:.24,speckColor:[220,255,250]})}function Y0(){return Yt(64,{seed:66,base:[196,128,22],dark:[96,48,8],light:[255,228,96],scale:3.8,contrast:1.62,veins:{color:[255,244,120],scale:1.15,thresh:.38,seed:99},speck:.22,speckColor:[255,252,190]})}function $0(){return Yt(64,{seed:77,base:[90,40,48],dark:[40,16,22],light:[140,60,70],scale:3.8,contrast:1.2,veins:{color:[180,40,50],scale:1.2,thresh:.62,seed:12}})}function K0(){return Yt(64,{seed:81,base:[100,78,42],dark:[52,38,20],light:[180,140,60],scale:3.2,contrast:1.15,bricks:{bw:16,bh:16,mortar:[90,70,30],mortarW:1},veins:{color:[220,180,60],scale:.9,thresh:.7,seed:3}})}function Z0(){return Yt(64,{seed:82,base:[92,62,88],dark:[48,30,50],light:[130,90,120],scale:5,contrast:1.15,speck:.08,speckColor:[160,120,140]})}function J0(){return Yt(64,{seed:83,base:[100,110,50],dark:[50,58,24],light:[150,160,80],scale:5.5,contrast:1.2,speck:.1,speckColor:[180,170,70]})}function gs(){return Yt(64,{seed:84,base:[110,70,60],dark:[55,35,30],light:[150,100,85],scale:4,contrast:1.25,cracks:!0,bricks:{bw:20,bh:12,mortar:[40,28,24],mortarW:1}})}function Mh(){return Yt(64,{seed:85,base:[58,68,110],dark:[28,34,60],light:[90,105,160],scale:3.5,contrast:1.15,veins:{color:[140,160,220],scale:2.2,thresh:.68,seed:7}})}function Q0(){return Yt(64,{seed:86,base:[70,40,100],dark:[30,16,48],light:[130,70,180],scale:4.5,contrast:1.3,veins:{color:[180,100,255],scale:1.5,thresh:.55,seed:21}})}function ev(r,e=1){return G0(r,e)}function tv(r,e){const t=`decal:${r}:${e.join(",")}`,i=Jn.get(t);if(i)return i;const n=64,{canvas:s,ctx:o,data:a}=Ga(n),h=n/2,c=n/2;for(let l=0;l<n;l++)for(let u=0;u<n;u++){const f=(u+.5-h)/h,g=(l+.5-c)/c,v=Math.hypot(f,g);let m=0,p=e;if(r==="goldRing"){const y=Math.abs(v-.72);m=y<.12?(1-y/.12)*220:0,v<.35&&(m=Math.max(m,(1-v/.35)*90)),(Math.abs(f)>.78&&Math.abs(g)<.2||Math.abs(g)>.78&&Math.abs(f)<.2)&&(m=Math.max(m,180))}else if(r==="bedding"){const y=Math.sin((u+l)*.35)*.5+.5;m=v<.85?(1-v/.85)*(120+y*80):0}else if(r==="warmSpot")m=v<.9?Math.pow(1-v/.9,1.2)*180:0,vn(u,l,5)>.92&&v<.7&&(m=220,p=[220,200,80]);else if(r==="worn"){const y=Mr(u*.12,l*.12,9);m=v<.9&&y>.45?(y-.45)*280:0}else if(r==="runes"){m=0,v>.55&&v<.78&&(m=160);const y=Math.atan2(g,f),w=Math.abs(y/(Math.PI*2)*8%1-.5);v>.35&&v<.85&&w<.06&&(m=210),v<.22&&(m=140)}else if(r==="swirl"){const y=Math.atan2(g,f),w=Math.sin(y*3+v*10);m=v<.92?Math.max(0,w)*(1-v)*255:0,v<.2&&(m=Math.max(m,200))}wc(a,u,l,p[0],p[1],p[2],Math.max(0,Math.min(255,m|0)))}o.putImageData(a,0,0);const d=new uc(s);return d.colorSpace=zt,d.needsUpdate=!0,Jn.set(t,d),d}const bh=new Map,Sh=new Map;function _t(r,e){let t=bh.get(r);return t||(t=e(),bh.set(r,t)),t}function Gt(r,e){let t=Sh.get(r);return t||(t=e(),Sh.set(r,t)),t}function Va(r,e,t,i=.45){const n=r.attributes.position,s=new Float32Array(n.count*3);for(let o=0;o<n.count;o++){const a=n.getY(o),h=Math.max(0,Math.min(1,(a-e)/(t*.45))),c=1-i*(1-h)*(1-h);s[o*3]=c,s[o*3+1]=c,s[o*3+2]=c}r.setAttribute("color",new ei(s,3))}function ja(){return Gt("claimed-gold-trim-v8",()=>new X({color:14199368,metalness:.82,roughness:.32,emissive:6962188,emissiveIntensity:.28}))}function iv(r,e=.17){const t=ja(),i=Xe*.97,n=.09,s=.13,o=i*.5-n*.35,a=_t("gold-bar-ns-v7",()=>new de(i,s,n)),h=_t("gold-bar-ew-v7",()=>new de(n,s,i)),c=new D(a,t);c.position.set(0,e,o),r.add(c);const d=new D(a,t);d.position.set(0,e,-o),r.add(d);const l=new D(h,t);l.position.set(o,e,0),r.add(l);const u=new D(h,t);u.position.set(-o,e,0),r.add(u);const f=_t("gold-corner-v7",()=>new de(.16,.18,.16));for(const g of[-1,1])for(const v of[-1,1]){const m=new D(f,t);m.position.set(g*o,e+.02,v*o),r.add(m)}}function Xa(r){const e=new Ke,i={[_.Treasury]:13938752,[_.Lair]:11563168,[_.Hatchery]:10006592,[_.Training]:12607568,[_.Library]:5271752,[_.Portal]:10506448,[_.Guard]:7372944,[_.Workshop]:10516544,[_.Prison]:6318192,[_.Torture]:10502224,[_.Graveyard]:5271648,[_.Temple]:12623952,[_.CombatPit]:10506304,[_.Casino]:12607648}[r]??12760480,n=r===_.None?2236440:r===_.Treasury?4861968:r===_.Lair?4198440:r===_.Hatchery?3162128:r===_.Training?4198416:r===_.Library?1054792:r===_.Guard?2107440:r===_.Workshop?4204560:r===_.Prison?2107440:r===_.Torture?4198424:r===_.Graveyard?1585192:r===_.Temple?4206608:r===_.CombatPit?4200464:r===_.Casino?4198440:3149896,s=new D(_t("claimed-under-v7",()=>new de(Xe*.98,.14,Xe*.98)),Gt("claimed-under-mat-v7",()=>new X({color:1840658,metalness:.04,roughness:.96})));s.position.y=.02,s.receiveShadow=!0,e.add(s);const o=Gt(`claimed-slab-v7-${r}`,()=>new X({color:i,metalness:r===_.Treasury?.48:r===_.Portal?.35:.16,roughness:r===_.Treasury?.38:.62,emissive:n,emissiveIntensity:r===_.None?.08:.1,map:r===_.None?Wa():null})),a=Xe*.72,h=new D(_t("claimed-inner-v7",()=>new de(a,.1,a)),o);h.position.y=.13,h.receiveShadow=!0,e.add(h);const c=Gt("claimed-seam-v7",()=>new X({color:2761756,roughness:.9,metalness:.05})),d=new D(_t("claimed-seam-h-v7",()=>new de(a,.04,.04)),c);d.position.y=.19,e.add(d);const l=new D(_t("claimed-seam-v-v7",()=>new de(.04,.04,a)),c);return l.position.y=.19,e.add(l),iv(e,.16),e}function Mc(){return _t("floor",()=>{const r=new de(Xe*.98,.28,Xe*.98,2,1,2);return r.translate(0,.02,0),r})}function qa(r=!1){return _t(r?"wall-fort-v7":"wall-v7",()=>{const e=new de(Xe*.9,2.42,Xe*.9,3,4,3),t=e.attributes.position;for(let i=0;i<t.count;i++){let n=t.getX(i),s=t.getY(i),o=t.getZ(i);r?(s>.95&&(n*=.9,o*=.9),n+=Math.sin(i*.7)*.01,o+=Math.cos(i*.9)*.01):(s>.85&&(n*=.86,o*=.86),n+=Math.sin(i*1.7)*.038,o+=Math.cos(i*2.1)*.038,s>-.3&&s<.5&&(s+=Math.sin(i*.9)*.05)),t.setXYZ(i,n,s,o)}return t.needsUpdate=!0,Va(e,-1.21,2.42,r?.32:.52),e.computeVertexNormals(),e.translate(0,1.21,0),e})}function bc(){return _t("rock-v7",()=>{const r=new de(Xe*.94,3.7,Xe*.94,3,5,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*3.1)*.045),e.setY(t,e.getY(t)+Math.cos(t*2.3)*.035),e.setZ(t,e.getZ(t)+Math.sin(t*4.7)*.045);return e.needsUpdate=!0,Va(r,-1.85,3.7,.62),r.computeVertexNormals(),r.translate(0,1.85,0),r})}function Sc(){return _t("gold-v7",()=>{const r=new de(Xe*.9,2.42,Xe*.9,3,4,3),e=r.attributes.position;for(let t=0;t<e.count;t++)e.setX(t,e.getX(t)+Math.sin(t*5.1)*.05),e.setZ(t,e.getZ(t)+Math.cos(t*3.9)*.05),e.getY(t)>.9&&(e.setX(t,e.getX(t)*.9),e.setZ(t,e.getZ(t)*.9));return e.needsUpdate=!0,Va(r,-1.21,2.42,.4),r.computeVertexNormals(),r.translate(0,1.21,0),r})}function nv(r,e=!1){const t=new Ke,i=r===E.Gold,n=r===E.Gem,s=r===E.Rock,o=Gt(e?"wall-face-fort-v8":n?"wall-face-gem-v8":i?"wall-face-gold-v8":s?"wall-face-rock-v8":"wall-face-earth-v8",()=>new X({color:e?9538178:n?2793616:i?10906404:s?7370628:10182704,metalness:e?.32:n?.55:i?.35:.06,roughness:e?.58:n?.22:.88,emissive:n?1337432:i?6961416:525828,emissiveIntensity:n?.45:i?.3:.04})),a=_t("wall-face-stone-v8",()=>new Ba(.24,0)),h=_t("wall-face-ledge-v8",()=>new de(1.58,.13,.18));for(let d=0;d<3;d++){const l=new D(h,o);l.position.set((d%2?-1:1)*.06,.48+d*.58,.87),l.scale.x=.78+d*.08,l.rotation.z=(d-1)*.025,l.castShadow=!0,t.add(l)}for(let d=0;d<5;d++){const l=new D(a,o);l.position.set(-.66+d*.33,.25+d%2*.25,.91);const u=.72+d%3*.13;l.scale.set(u,u*.58,.42),l.rotation.set(d*.17,d*.31,d*.11),l.castShadow=!0,t.add(l)}const c=s?3.52:2.28;for(let d=0;d<3;d++){const l=new D(a,o);l.position.set(-.58+d*.58,c+d%2*.08,.58+d%2*.16),l.scale.set(1.2,.55+d*.08,1),l.rotation.set(d*.2,d*.55,d*.16),l.castShadow=!0,t.add(l)}if(i){const d=Gt("wall-face-crystal-v8",()=>new X({color:16766282,emissive:16753936,emissiveIntensity:1.1,metalness:.82,roughness:.18})),l=_t("wall-face-crystal-v8",()=>new wi(.14,0));for(let u=0;u<4;u++){const f=new D(l,d);f.position.set(-.48+u*.31,.72+u%2*.48,1),f.scale.set(.75,1.8+u*.15,.55),f.rotation.z=(u-1.5)*.2,t.add(f)}}if(e){const d=ja(),l=_t("wall-face-brace-v8",()=>new de(.1,2.05,.12));for(const u of[-.72,.72]){const f=new D(l,d);f.position.set(u,1.08,.98),t.add(f)}}return t}function sv(r){const e=Math.round(Math.max(.25,r)*4)/4;return _t(`edge-${e.toFixed(2)}`,()=>{const t=Xe*.5*.97,i=e,n=[new A(-t,i,-t),new A(t,i,-t),new A(t,i,t),new A(-t,i,t),new A(-t,i,-t)];return new wt().setFromPoints(n)})}function Tc(){const r=new Ke,e=new X({color:3155498,metalness:.72,roughness:.35,emissive:2361356,emissiveIntensity:.25}),t=new X({color:9050152,emissive:16719928,emissiveIntensity:1.15,metalness:.38,roughness:.26}),i=new D(new ke(1.6,1.82,.26,12),e);i.position.y=.18,i.castShadow=!0,i.receiveShadow=!0,r.add(i);const n=new D(new ke(1.15,1.42,.42,12),new X({color:5915960,metalness:.35,roughness:.55,map:Wa()}));n.position.y=.48,n.castShadow=!0,r.add(n);const s=new D(new za(.82,2),t);s.scale.set(.92,1.2,.92),s.position.y=1.48,s.castShadow=!0,r.add(s);const o=new D(new fi(1.18,.075,8,36),t);o.rotation.x=Math.PI/2,o.position.y=1.48,r.add(o);const a=new Ke;for(let d=0;d<4;d++){const l=d*Math.PI*.5+Math.PI*.25,u=new D(new Ht(.18,1.25,5),e);u.position.set(Math.cos(l)*1.12,1.22,Math.sin(l)*1.12),u.rotation.z=Math.cos(l)*-.5,u.rotation.x=Math.sin(l)*.5,u.castShadow=!0,a.add(u);const f=new D(new wi(.12,0),t);f.position.set(Math.cos(l)*1.24,.78,Math.sin(l)*1.24),a.add(f)}r.add(a),r.heartCrown=a;const h=new D(new ns(1.38,1.72,32),new X({color:4853776,emissive:16723992,emissiveIntensity:.9,metalness:.2,roughness:.7,transparent:!0,opacity:.85}));h.rotation.x=-Math.PI/2,h.position.y=.13,r.add(h);for(let d=0;d<10;d++){const l=d/10*Math.PI*2,u=new D(new de(.2,.045,.06),t);u.position.set(Math.cos(l)*1.53,.34,Math.sin(l)*1.53),u.rotation.y=-l,r.add(u)}const c=new Ha(16728152,3.4,16,1.8);return c.position.y=1.8,c.castShadow=!1,r.add(c),r.heartCore=s,r.heartLight=c,r}function Ec(r=!0){const e=new Ke,t=new D(new de(.12,.08,.18),new X({color:4866104,metalness:.5,roughness:.5}));t.position.set(0,1.35,0),e.add(t);const i=new D(new ke(.045,.065,.55,6),new X({color:5914656,roughness:.85}));i.position.y=1.55,e.add(i);const n=new D(new Ht(.11,.28,6),new X({color:16755264,emissive:16742144,emissiveIntensity:1.5,roughness:1}));n.position.y=1.92,e.add(n);const s=new D(new je(.08,6,6),new Ut({color:16746544,transparent:!0,opacity:.55}));if(s.position.y=1.82,e.add(s),r){const o=new Ha(16750916,4.4,18,1.5);o.position.y=1.9,o.castShadow=!1,e.add(o),e.torchLight=o}return e.flame=n,e}function Rt(r,e,t,i,n,s=0,o=0,a=0,h){const c=new D(r,e);return c.position.set(t,i,n),c.rotation.set(s,o,a),c.castShadow=!0,c.userData.baseRot={x:s,y:o,z:a},h&&(c.userData.walkLimb=h),c}function Ac(r,e,t){const i=new Ke,n=new X({color:r,metalness:.18,roughness:.55,emissive:r,emissiveIntensity:.1});if(t==="scrabbler"){const o=new D(new je(.36,12,10),n);o.scale.set(1.2,.75,1.3),o.position.y=.38,o.castShadow=!0,i.add(o);const a=new D(new je(.32,10,8),new X({color:4876336,metalness:.25,roughness:.45,emissive:2109456,emissiveIntensity:.15}));a.scale.set(1.15,.55,1.05),a.position.set(0,.5,-.06),i.add(a);const h=new D(new je(.2,10,8),new X({color:9089104,metalness:.15,roughness:.55}));h.position.set(0,.44,.36),h.castShadow=!0,i.add(h);const c=new X({color:16772744,emissive:16763972,emissiveIntensity:.85});for(const C of[-1,1]){const P=new D(new je(.05,6,6),c);P.position.set(C*.09,.48,.5),i.add(P)}const d=new X({color:3819560,roughness:.7});for(const C of[-1,1]){for(const k of[-.14,.16])i.add(Rt(new ke(.035,.028,.32,5),d,C*.32,.14,k,0,0,C*.7));const P=new D(new Ht(.08,.34,5),new X({color:13684904,metalness:.7,roughness:.28}));P.rotation.z=C*.85,P.rotation.x=-.4,P.position.set(C*.32,.32,.42),P.castShadow=!0,i.add(P)}const l=new Ke,u=new D(new Jt(.07,.28,3,6),new X({color:5926960,roughness:.65}));u.position.set(.02,.08,.12),u.rotation.x=.85,u.rotation.z=.18,l.add(u);const f=new Ke,g=new X({color:8015912,roughness:.85}),v=new X({color:13687016,metalness:.9,roughness:.22,emissive:4214880,emissiveIntensity:.25}),m=new D(new ke(.04,.05,.72,6),g);m.rotation.x=Math.PI/2,m.position.set(0,.02,.3),f.add(m);const p=new D(new de(.16,.16,.2),v);p.position.set(0,.02,.66),f.add(p);const y=new D(new Ht(.09,.36,6),new X({color:15266047,metalness:.85,roughness:.2}));y.rotation.x=Math.PI/2,y.position.set(0,.02,.9),f.add(y);const w=new D(new Ht(.07,.2,6),v);w.rotation.x=-Math.PI/2,w.position.set(0,.02,.54),f.add(w),f.position.set(.02,.02,.08),f.rotation.x=.12,l.add(f),l.position.set(.28,1.02,.36),l.rotation.set(-.28,0,.04),i.add(l),i.pickaxe=l;const x=new D(new ns(.42,.52,20),new Ut({color:11067488,transparent:!0,opacity:.75,side:Lt,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.y=.05,x.visible=!1,i.add(x),i.selectRing=x}else if(t==="skitterwing"){const o=new D(new je(.2,10,8),n);o.position.y=.95,o.castShadow=!0,i.add(o);const a=new D(new je(.16,8,8),new X({color:2785392,metalness:.2,roughness:.5,emissive:1065008,emissiveIntensity:.2}));a.scale.set(.9,.8,1.3),a.position.set(0,.88,-.22),i.add(a);const h=new D(new je(.12,8,8),new X({color:5296304,roughness:.5}));h.position.set(0,1,.22),i.add(h);for(const l of[-1,1]){const u=new D(new ke(.012,.01,.22,4),new X({color:2130016}));u.position.set(l*.06,1.14,.28),u.rotation.z=l*.4,u.rotation.x=-.5,i.add(u)}const c=new X({color:11075560,emissive:3180656,emissiveIntensity:.4,transparent:!0,opacity:.7,side:Lt,metalness:.1,roughness:.35});for(const l of[-1,1]){const u=new D(new vi(.75,.38),c);u.position.set(l*.38,1,0),u.rotation.y=l*.35,u.rotation.z=l*.25,i.add(u);const f=new D(new vi(.5,.28),c);f.position.set(l*.32,.88,-.08),f.rotation.y=l*.5,i.add(f)}const d=new X({color:2121808,roughness:.65});for(const l of[-1,1])i.add(Rt(new ke(.02,.015,.35,4),d,l*.14,.7,.05,.4,0,l*.5))}else if(t==="rattlekin"){const o=new X({color:13154456,metalness:.15,roughness:.45,emissive:4206608,emissiveIntensity:.08}),a=new D(new Jt(.22,.35,4,8),o);a.position.y=.7,a.castShadow=!0,i.add(a);for(let u=0;u<3;u++){const f=new D(new fi(.2,.025,4,10,Math.PI),o);f.rotation.x=Math.PI/2,f.position.set(0,.55+u*.12,.05),i.add(f)}const h=new D(new je(.2,10,8),o);h.scale.set(1,1.05,1.15),h.position.y=1.2,h.castShadow=!0,i.add(h);const c=new D(new de(.22,.08,.16),o);c.position.set(0,1.05,.1),i.add(c);const d=new X({color:2101256,emissive:16736288,emissiveIntensity:.7});for(const u of[-1,1]){const f=new D(new je(.045,6,6),d);f.position.set(u*.08,1.24,.16),i.add(f)}for(const u of[-1,1])i.add(Rt(new ke(.045,.035,.45,5),o,u*.3,.75,0,0,0,u*.25,u<0?"armL":"armR")),i.add(Rt(new ke(.05,.04,.4,5),o,u*.12,.28,0,.15,0,u*.1,u<0?"legL":"legR"));const l=new D(new de(.06,.5,.12),new X({color:8949920,metalness:.8,roughness:.25}));l.position.set(.42,.7,.05),l.rotation.z=-.3,i.add(l)}else if(t==="emberling"){const o=new X({color:14698528,emissive:16728088,emissiveIntensity:.65,metalness:.25,roughness:.35}),a=new D(new Jt(.26,.45,6,10),o);a.position.y=.7,a.castShadow=!0,i.add(a);const h=new D(new je(.2,10,8),o);h.position.y=1.2,i.add(h);const c=new D(new Ht(.14,.42,6),new X({color:16748576,emissive:16736272,emissiveIntensity:.95}));c.position.y=1.5,i.add(c);for(let l=0;l<3;l++){const u=new D(new Ht(.06,.22,5),new X({color:16740368,emissive:16728072,emissiveIntensity:.8}));u.position.set((l-1)*.12,1.38,-.12),u.rotation.x=-.5,i.add(u)}for(const l of[-1,1]){i.add(Rt(new ke(.06,.04,.4,6),o,l*.32,.75,0,0,0,l*.45,l<0?"armL":"armR"));const u=new D(new je(.08,6,6),new X({color:16755264,emissive:16736272,emissiveIntensity:1}));u.position.set(l*.42,.55,.05),i.add(u)}const d=new D(new Ht(.32,.35,8,1,!0),new X({color:16732176,emissive:16723976,emissiveIntensity:.7,transparent:!0,opacity:.75,side:Lt}));d.position.y=.28,i.add(d)}else if(t==="gravemage"){const o=new X({color:4862080,metalness:.2,roughness:.55,emissive:3151968,emissiveIntensity:.25}),a=new D(new Jt(.24,.5,5,10),o);a.position.y=.7,a.castShadow=!0,i.add(a);const h=new D(new je(.22,10,8),new X({color:2758728,roughness:.7,emissive:4202624,emissiveIntensity:.2}));h.position.y=1.22,i.add(h);const c=new D(new je(.12,8,6),new X({color:13154520,roughness:.5}));c.position.set(0,1.18,.12),i.add(c);const d=new X({color:11167487,emissive:8930559,emissiveIntensity:.9});for(const f of[-1,1]){const g=new D(new je(.035,6,6),d);g.position.set(f*.06,1.2,.2),i.add(g)}for(const f of[-1,1])i.add(Rt(new ke(.045,.035,.4,5),o,f*.28,.7,0,0,0,f*.2,f<0?"armL":"armR")),i.add(Rt(new ke(.05,.04,.38,5),o,f*.1,.28,0,0,0,0,f<0?"legL":"legR"));const l=new D(new ke(.03,.04,1.3,6),new X({color:6965288,roughness:.7}));l.position.set(.38,.75,.05),i.add(l);const u=new D(new je(.1,10,8),new X({color:8939263,emissive:11167487,emissiveIntensity:.85,metalness:.3,roughness:.35}));u.position.set(.38,1.45,.05),i.add(u)}else if(t==="thornwitch"){const o=new X({color:10498144,metalness:.25,roughness:.45,emissive:6295592,emissiveIntensity:.35}),a=new D(new Jt(.22,.5,5,10),o);a.position.y=.72,a.castShadow=!0,i.add(a);const h=new D(new je(.18,10,8),new X({color:13148336,roughness:.5}));h.position.y=1.22,i.add(h);const c=new X({color:3149848,emissive:16719936,emissiveIntensity:.55});for(let l=0;l<5;l++){const u=new D(new Ht(.04,.2,4),c),f=l/5*Math.PI*2;u.position.set(Math.cos(f)*.12,1.38,Math.sin(f)*.12),i.add(u)}for(const l of[-1,1])i.add(Rt(new ke(.04,.03,.42,5),o,l*.28,.72,0,0,0,l*.35)),i.add(Rt(new ke(.045,.035,.4,5),o,l*.1,.28,0));const d=new D(new ke(.02,.015,.9,4),new X({color:4198432,roughness:.6}));d.position.set(.4,.7,.05),d.rotation.z=-.4,i.add(d)}else if(t==="bonewretch"){const o=new X({color:14209208,metalness:.2,roughness:.4,emissive:3162136,emissiveIntensity:.15}),a=new D(new Jt(.16,.32,4,8),o);a.position.y=.68,a.castShadow=!0,i.add(a);for(let d=0;d<3;d++){const l=new D(new fi(.15,.02,4,10,Math.PI),o);l.rotation.x=Math.PI/2,l.position.set(0,.55+d*.1,.04),i.add(l)}const h=new D(new je(.17,10,8),o);h.scale.set(1,1.1,1.15),h.position.y=1.15,i.add(h);const c=new X({color:1056776,emissive:8453952,emissiveIntensity:.95});for(const d of[-1,1]){const l=new D(new je(.04,6,6),c);l.position.set(d*.07,1.18,.14),i.add(l),i.add(Rt(new ke(.03,.025,.42,4),o,d*.26,.7,0,0,0,d*.3)),i.add(Rt(new ke(.035,.03,.38,4),o,d*.1,.26,0,.1,0,d*.08))}}else if(t==="hero_knight"||t==="hero"){const o=new X({color:r||12634328,metalness:.75,roughness:.28}),a=new D(new Jt(.26,.5,6,10),o);a.position.y=.72,a.castShadow=!0,i.add(a);const h=new X({color:11055296,metalness:.8,roughness:.25});for(const g of[-1,1]){const v=new D(new je(.14,8,6),h);v.scale.set(1.1,.7,1),v.position.set(g*.28,1,0),i.add(v),i.add(Rt(new ke(.07,.055,.4,6),o,g*.34,.7,0,0,0,g*.2,g<0?"armL":"armR"))}const c=new D(new je(.2,10,8),o);c.position.y=1.28,i.add(c);const d=new D(new de(.22,.06,.08),new X({color:1712176,metalness:.5,roughness:.4}));d.position.set(0,1.28,.16),i.add(d);const l=new D(new de(.04,.22,.16),new X({color:11542568,roughness:.6}));l.position.set(0,1.48,0),i.add(l);for(const g of[-1,1])i.add(Rt(new ke(.08,.06,.4,6),o,g*.1,.28,0,0,0,0,g<0?"legL":"legR"));const u=new D(new de(.05,.55,.1),new X({color:14213360,metalness:.9,roughness:.2}));u.position.set(.4,.75,.05),u.rotation.z=-.25,i.add(u);const f=new D(new de(.14,.04,.06),new X({color:9068592,metalness:.4,roughness:.5}));f.position.set(.38,.5,.05),i.add(f)}else if(t==="hero_archer"){const o=new X({color:r||5275808,metalness:.15,roughness:.65}),a=new D(new Jt(.22,.45,6,10),o);a.position.y=.68,a.castShadow=!0,i.add(a);const h=new D(new je(.2,10,8),new X({color:3823728,roughness:.7}));h.scale.set(1.05,1.1,1.15),h.position.y=1.2,i.add(h);const c=new D(new je(.12,8,8),new X({color:12888200,roughness:.7}));c.position.set(0,1.15,.1),i.add(c);for(const u of[-1,1])i.add(Rt(new ke(.05,.04,.35,5),o,u*.26,.7,0,0,0,u*.3,u<0?"armL":"armR")),i.add(Rt(new ke(.055,.045,.38,5),o,u*.09,.28,0,0,0,0,u<0?"legL":"legR"));const d=new D(new fi(.28,.025,4,12,Math.PI),new X({color:9068592,roughness:.6}));d.rotation.y=Math.PI/2,d.position.set(-.32,.75,.05),i.add(d);const l=new D(new ke(.008,.008,.5,4),new X({color:14209216}));l.position.set(-.2,.75,.05),i.add(l)}else{const o=new D(new Jt(.26,.45,6,10),n);o.position.y=.6,o.castShadow=!0,i.add(o);const a=new D(new je(.2,10,8),new X({color:11178096,roughness:.6}));a.position.y=1.1,i.add(a);for(const h of[-1,1])i.add(Rt(new ke(.05,.04,.35,5),n,h*.28,.6,0,0,0,h*.4,h<0?"armL":"armR")),i.add(Rt(new ke(.055,.045,.35,5),n,h*.1,.25,0,0,0,0,h<0?"legL":"legR"))}const s=ya(t==="hero_knight"||t==="hero_archer"||t==="hero");if(s.scale.setScalar(1/Math.max(.35,e)),s.position.y=2.05/Math.max(.35,e),i.add(s),i.healthFlower=s,t==="scrabbler"){const o=Nc();o.position.set(-.22,.28,-.32),o.visible=!1,i.add(o),i.goldBag=o}return i.scale.setScalar(e),i}function Tt(r,e,t={}){return Gt(r,()=>{const i=ev(e,t.bump??1);return new X({map:e,bumpMap:i,bumpScale:t.bump??.08,color:t.color??16777215,metalness:t.metalness??.08,roughness:t.roughness??.82,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??0,vertexColors:t.vertexColors??!1})})}function Di(r,e){if(r===E.Lava)return Gt("floor-lava",()=>new X({color:16728080,roughness:.4,metalness:.15,emissive:16722432,emissiveIntensity:1.2}));if(r===E.Water)return Gt("floor-water",()=>new X({color:2777224,roughness:.2,metalness:.45,emissive:1325144,emissiveIntensity:.45}));if(r===E.BridgeWood)return Gt("floor-bridge-wood",()=>new X({color:9067048,roughness:.85,metalness:.05,emissive:2758664,emissiveIntensity:.08}));if(r===E.BridgeStone)return Gt("floor-bridge-stone",()=>new X({color:6975616,roughness:.65,metalness:.3,emissive:2106408,emissiveIntensity:.1}));if(r===E.Heart)return Tt("floor-heart",$0(),{metalness:.3,roughness:.55,emissive:5249056,emissiveIntensity:.22,bump:.06});if(r===E.Dirt)return Tt("floor-dirt",j0(),{metalness:.02,roughness:.95,emissive:657412,emissiveIntensity:.03,bump:.12});switch(e){case _.Treasury:return Tt("floor-treasury",K0(),{metalness:.55,roughness:.4,emissive:3811336,emissiveIntensity:.15,bump:.05});case _.Lair:return Tt("floor-lair",Z0(),{metalness:.08,roughness:.85,emissive:2101272,emissiveIntensity:.1,bump:.09});case _.Hatchery:return Tt("floor-hatchery",J0(),{metalness:.05,roughness:.88,emissive:2105360,emissiveIntensity:.12,bump:.08});case _.Training:return Tt("floor-training",gs(),{metalness:.2,roughness:.7,emissive:2101264,emissiveIntensity:.08,bump:.1});case _.Library:return Tt("floor-library",Mh(),{metalness:.15,roughness:.65,emissive:1054760,emissiveIntensity:.18,bump:.06});case _.Portal:return Tt("floor-portal",Q0(),{metalness:.35,roughness:.45,emissive:4200552,emissiveIntensity:.35,bump:.07});case _.Guard:return Tt("floor-training",gs(),{metalness:.25,roughness:.68,emissive:1581096,emissiveIntensity:.12,bump:.1,color:8425632});case _.Workshop:return Tt("floor-training",gs(),{metalness:.35,roughness:.55,emissive:3151880,emissiveIntensity:.18,bump:.12,color:12093520});case _.Temple:return Tt("floor-library",Mh(),{metalness:.35,roughness:.5,emissive:4206616,emissiveIntensity:.28,bump:.06,color:13676640});case _.CombatPit:return Tt("floor-training",gs(),{metalness:.22,roughness:.72,emissive:4198416,emissiveIntensity:.2,bump:.12,color:11554880});case _.Casino:return Tt("floor-training",gs(),{metalness:.28,roughness:.55,emissive:4198440,emissiveIntensity:.22,bump:.1,color:12611744});default:return Tt("floor-claimed-v2",Wa(),{color:12101776,metalness:.2,roughness:.58,emissive:2761752,emissiveIntensity:.1,bump:.1})}}function Cc(r){if(r===_.None)return null;const t={[_.Treasury]:{kind:"goldRing",color:[224,176,40],emissive:12619808,ei:.35,size:1.5},[_.Lair]:{kind:"bedding",color:[130,80,140],emissive:6303856,ei:.2,size:1.45},[_.Hatchery]:{kind:"warmSpot",color:[140,170,60],emissive:7372832,ei:.25,size:1.4},[_.Training]:{kind:"worn",color:[170,70,60],emissive:8396832,ei:.18,size:1.4},[_.Library]:{kind:"runes",color:[90,120,210],emissive:4219072,ei:.4,size:1.45},[_.Portal]:{kind:"swirl",color:[160,80,220],emissive:8401088,ei:.55,size:1.5},[_.Guard]:{kind:"worn",color:[100,120,140],emissive:4219008,ei:.22,size:1.4},[_.Workshop]:{kind:"worn",color:[170,120,60],emissive:8405008,ei:.28,size:1.4},[_.Prison]:{kind:"worn",color:[90,100,110],emissive:3162192,ei:.2,size:1.4},[_.Torture]:{kind:"worn",color:[160,50,60],emissive:8392736,ei:.35,size:1.4},[_.Graveyard]:{kind:"runes",color:[70,110,90],emissive:2121792,ei:.3,size:1.45},[_.Temple]:{kind:"runes",color:[200,170,80],emissive:12619824,ei:.45,size:1.5},[_.CombatPit]:{kind:"worn",color:[180,70,50],emissive:10498080,ei:.3,size:1.45},[_.Casino]:{kind:"goldRing",color:[210,80,160],emissive:12599424,ei:.4,size:1.45}}[r];if(!t)return null;const i=tv(t.kind,t.color),n=new X({map:i,transparent:!0,depthWrite:!1,color:16777215,emissive:t.emissive,emissiveIntensity:t.ei,metalness:r===_.Treasury?.65:.15,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-1}),s=new D(new vi(t.size,t.size),n);return s.rotation.x=-Math.PI/2,s.position.y=.14,s}function kr(r,e,t){if(e)return Tt("fortified",X0(),{metalness:.42,roughness:.48,emissive:2761760,emissiveIntensity:.06,bump:.06,vertexColors:!0});switch(r){case E.Rock:return Tt("rock-v3",V0(),{metalness:.18,roughness:.72,emissive:2631736,emissiveIntensity:.12,bump:.12,vertexColors:!0});case E.Earth:return Tt("earth-v2",W0(),{metalness:.04,roughness:.9,emissive:3809288,emissiveIntensity:.16,bump:.15,vertexColors:!0});case E.Gold:return Tt("gold-v3",Y0(),{metalness:.88,roughness:.2,emissive:14721048,emissiveIntensity:.95,bump:.08,vertexColors:!0});case E.Gem:return Tt("gem-v1",q0(),{metalness:.92,roughness:.16,emissive:2146464,emissiveIntensity:1.05,bump:.07,vertexColors:!0});case E.Dirt:return Di(E.Dirt,_.None);case E.Claimed:return Di(E.Claimed,t);case E.Heart:return Di(E.Heart,_.None);case E.Lava:return Di(E.Lava,_.None);case E.Water:return Di(E.Water,_.None);case E.BridgeWood:return Di(E.BridgeWood,_.None);case E.BridgeStone:return Di(E.BridgeStone,_.None);default:return Gt("default",()=>new X({color:5592405}))}}function Pc(r,e=0){if(r===_.None)return null;const t=new Ke;if(r===_.Treasury){const i=new X({color:14725160,metalness:.85,roughness:.3,emissive:10514448,emissiveIntensity:.45}),n=new D(new je(.35,10,8),i);n.scale.set(1.3,.55,1.1),n.position.set(-.35,.22,.15),n.castShadow=!0,t.add(n);const s=new D(new je(.22,8,6),i);s.scale.set(1.1,.5,1),s.position.set(.15,.16,-.35),t.add(s);const o=new D(new de(.55,.35,.4),new X({color:6961688,metalness:.25,roughness:.7}));o.position.set(.4,.28,.25),o.castShadow=!0,t.add(o);const a=new D(new de(.55,.08,.42),new X({color:9064480,metalness:.3,roughness:.65}));a.position.set(.4,.48,.25),t.add(a);const h=new D(new de(.58,.06,.08),new X({color:13934624,metalness:.8,roughness:.3,emissive:8409104,emissiveIntensity:.3}));h.position.set(.4,.3,.25),t.add(h)}else if(r===_.Lair){const i=new X({color:6963304,roughness:.9,emissive:3149864,emissiveIntensity:.12}),n=new D(new Jt(.18,.55,4,8),i);n.rotation.z=Math.PI/2,n.position.set(-.2,.2,.1),n.castShadow=!0,t.add(n);const s=new D(new Jt(.15,.45,4,8),i);s.rotation.z=Math.PI/2,s.rotation.y=.4,s.position.set(.35,.18,-.25),t.add(s)}else if(r===_.Hatchery){const i=new D(new fi(.55,.16,8,16),new X({color:6979632,roughness:.85,emissive:4214808,emissiveIntensity:.28}));i.rotation.x=-Math.PI/2,i.position.y=.16,t.add(i);const n=new D(new je(.18,8,6),new X({color:15253568,emissive:10518560,emissiveIntensity:.35,roughness:.5}));n.position.y=.22,t.add(n)}else if(r===_.Training){const i=new X({color:6965288,roughness:.8}),n=new X({color:8949920,metalness:.75,roughness:.35}),s=new D(new ke(.06,.08,.9,6),i);s.position.set(-.35,.5,0),s.castShadow=!0,t.add(s);const o=new D(new ke(.06,.08,.9,6),i);o.position.set(.35,.5,0),t.add(o);const a=new D(new de(.85,.08,.12),i);a.position.set(0,.7,0),t.add(a);for(const d of[-.2,.05,.3]){const l=new D(new de(.05,.45,.08),n);l.position.set(d,.55,.05),t.add(l)}const h=new D(new ke(.18,.22,.7,8),new X({color:9068624,roughness:.75,emissive:4198416,emissiveIntensity:.15}));h.position.set(0,.4,-.45),h.castShadow=!0,t.add(h);const c=new D(new je(.16,8,6),new X({color:12619888,roughness:.7}));c.position.set(0,.85,-.45),t.add(c)}else if(r===_.Library){const i=new X({color:5913122,roughness:.75}),n=new D(new de(.7,.12,.45),i);n.position.set(0,.55,0),n.castShadow=!0,t.add(n);const s=new D(new ke(.08,.12,.45,6),i);s.position.set(0,.28,0),t.add(s);const o=new D(new de(.28,.06,.22),new X({color:3166368,emissive:1056864,emissiveIntensity:.25,roughness:.6}));o.position.set(.05,.65,0),t.add(o);const a=new D(new ke(.03,.035,.14,6),new X({color:15259808,emissive:16755264,emissiveIntensity:.4}));a.position.set(-.22,.68,.08),t.add(a)}else if(r===_.Portal){const i=new X({color:3422275,emissive:1054764,emissiveIntensity:.3,metalness:.35,roughness:.48}),n=new X({color:7988991,emissive:2140927,emissiveIntensity:1.35,metalness:.25,roughness:.18,transparent:!0,opacity:.9}),s=new X({color:16738852,emissive:16724488,emissiveIntensity:1.35,transparent:!0,opacity:.68,side:Lt,depthWrite:!1,blending:Sr});if(e%4!==0){const u=new wi(.13,0),f=2+e%2;for(let g=0;g<f;g++){const v=new D(u,n);v.scale.set(.7,1.8+g*.35,.7),v.position.set(-.35+g*.34,.26+g*.08,(g%2?-1:1)*.25),v.rotation.z=(g-1)*.25,t.add(v)}return t}const o=new D(new ke(.67,.82,.28,10),i);o.position.y=.2,o.castShadow=!0,t.add(o);for(const u of[-1,1]){const f=new D(new de(.3,2.5,.34),n);f.position.set(u*.82,1.48,0),f.rotation.z=u*-.06,f.castShadow=!0,t.add(f);const g=new D(new wi(.27,0),n);g.scale.set(.8,1.7,.8),g.position.set(u*.9,2.83,0),g.rotation.z=u*-.1,t.add(g)}const a=new D(new de(1.72,.2,.3),n);a.position.y=2.68,a.castShadow=!0,t.add(a);const h=new D(new wi(.22,0),n);h.scale.set(1,1.45,.8),h.position.y=2.93,t.add(h);const c=new D(new fi(.55,.07,8,28),n);c.position.y=1.57,c.scale.set(1,1.72,1),t.add(c);const d=new D(new vi(1.12,2.08),s);d.position.set(0,1.48,.04),t.add(d);const l=new Ha(5622015,1.8,7,2);l.position.y=1.85,t.add(l),t.userData.portalAnimated=!0,t.userData.portalRing=c,t.userData.portalCore=d,t.scale.setScalar(1.18)}else if(r===_.Guard){const i=new X({color:5914672,roughness:.8}),n=new X({color:9478320,metalness:.7,roughness:.35,emissive:2109504,emissiveIntensity:.15}),s=new D(new ke(.07,.09,1.35,6),i);s.position.set(0,.7,0),s.castShadow=!0,t.add(s);const o=new D(new de(.55,.7,.04),new X({color:6303776,emissive:4198416,emissiveIntensity:.2,roughness:.75}));o.position.set(0,1.05,.08),t.add(o);const a=new D(new ke(.28,.28,.06,8),n);a.rotation.x=Math.PI/2,a.position.set(.45,.55,-.2),t.add(a);const h=new D(new de(.7,.08,.2),i);h.position.set(-.35,.35,.25),t.add(h)}else if(r===_.Workshop){const i=new X({color:6965296,roughness:.75}),n=new X({color:6318192,metalness:.85,roughness:.3,emissive:4200456,emissiveIntensity:.2}),s=new X({color:16736288,emissive:16728080,emissiveIntensity:.9,metalness:.4,roughness:.4}),o=new D(new de(1.1,.18,.55),i);o.position.set(-.15,.55,.1),o.castShadow=!0,t.add(o);const a=new D(new de(.1,.5,.1),i);a.position.set(-.55,.28,.25),t.add(a);const h=new D(new de(.1,.5,.1),i);h.position.set(.25,.28,-.05),t.add(h);const c=new D(new de(.45,.22,.28),n);c.position.set(.45,.45,-.25),c.castShadow=!0,t.add(c);const d=new D(new de(.22,.1,.14),n);d.position.set(.68,.5,-.25),t.add(d);const l=new D(new ke(.18,.22,.28,8),n);l.position.set(-.45,.35,-.35),t.add(l);const u=new D(new je(.1,8,6),s);u.position.set(-.45,.48,-.35),t.add(u);const f=new D(new de(.28,.35,.08),new X({color:9068608,roughness:.7}));f.position.set(.1,.72,.15),t.add(f)}else if(r===_.Prison){const i=new X({color:6318192,metalness:.85,roughness:.35,emissive:1054752,emissiveIntensity:.12}),n=new X({color:4864040,roughness:.8});for(let h=0;h<4;h++){const c=new D(new ke(.03,.03,1.2,5),i);c.position.set(-.45+h*.28,.7,.55),c.castShadow=!0,t.add(c)}const s=new D(new de(1.05,.06,.06),i);s.position.set(-.05,.85,.55),t.add(s);const o=new D(new de(.9,.12,.45),n);o.position.set(.15,.28,-.25),t.add(o);const a=new D(new ke(.025,.025,.55,5),i);a.position.set(.55,.55,-.1),t.add(a)}else if(r===_.Torture){const i=new X({color:5910560,roughness:.75}),n=new X({color:7370880,metalness:.8,roughness:.3,emissive:4198416,emissiveIntensity:.25}),s=new D(new de(1.15,.14,.55),i);s.position.set(0,.55,0),s.castShadow=!0,t.add(s);for(const h of[-1,1]){const c=new D(new ke(.06,.07,.9,6),i);c.position.set(h*.5,.55,0),t.add(c)}const o=new D(new Ht(.08,.28,5),new X({color:10528944,metalness:.7,roughness:.3}));o.position.set(0,.85,.1),t.add(o);const a=new D(new fi(.28,.04,6,12),n);a.position.set(-.35,.7,-.35),a.rotation.y=.4,t.add(a)}else if(r===_.Graveyard){const i=new X({color:6846568,roughness:.7,metalness:.15,emissive:1585192,emissiveIntensity:.2}),n=new X({color:4218952,emissive:2113576,emissiveIntensity:.25,roughness:.8}),s=new D(new de(.55,.7,.12),i);s.position.set(-.35,.45,.2),s.castShadow=!0,t.add(s);const o=new D(new de(.35,.08,.08),i);o.position.set(-.35,.7,.2),t.add(o);const a=new D(new je(.32,8,6),n);a.scale.set(1.2,.45,.9),a.position.set(.35,.22,-.15),t.add(a);const h=new D(new ke(.03,.03,.35,5),new X({color:14209200,roughness:.5}));h.rotation.z=.8,h.position.set(.2,.35,.25),t.add(h)}else if(r===_.Temple){const i=new X({color:13938768,metalness:.7,roughness:.35,emissive:8413216,emissiveIntensity:.45}),n=new X({color:3811352,roughness:.75}),s=new D(new ke(.35,.42,.35,8),n);s.position.set(0,.28,0),s.castShadow=!0,t.add(s);const o=new D(new Ht(.22,.55,6),i);o.position.set(0,.72,0),o.castShadow=!0,t.add(o);const a=new D(new je(.1,8,8),new X({color:16769152,emissive:16760896,emissiveIntensity:1.1,metalness:.4,roughness:.3}));a.position.set(0,1.05,0),t.add(a);for(const h of[-.55,.55]){const c=new D(new ke(.04,.05,.35,5),n);c.position.set(h,.35,-.4),t.add(c);const d=new D(new je(.06,6,6),new X({color:16755264,emissive:16744480,emissiveIntensity:1.2}));d.position.set(h,.58,-.4),t.add(d)}}else if(r===_.CombatPit){const i=new X({color:10514496,roughness:.9,metalness:.05,emissive:3151880,emissiveIntensity:.12}),n=new X({color:7370880,metalness:.8,roughness:.35,emissive:4198416,emissiveIntensity:.2}),s=new D(new ke(.7,.78,.18,12),i);s.position.set(0,.2,0),s.receiveShadow=!0,t.add(s);const o=new D(new fi(.72,.05,6,16),n);o.rotation.x=Math.PI/2,o.position.set(0,.28,0),t.add(o);for(const[h,c]of[[-.45,.35],[.4,-.3]]){const d=new D(new ke(.07,.08,.95,6),n);d.position.set(h,.55,c),d.castShadow=!0,t.add(d)}const a=new D(new de(.08,.55,.04),new X({color:12634320,metalness:.85,roughness:.25}));a.position.set(.35,.55,.35),a.rotation.z=.35,t.add(a)}else if(r===_.Casino){const i=new X({color:6955080,roughness:.7,metalness:.12,emissive:4198432,emissiveIntensity:.25}),n=new X({color:13934656,metalness:.8,roughness:.3,emissive:8405008,emissiveIntensity:.35}),s=new D(new ke(.62,.66,.16,12),i);s.position.set(0,.28,0),s.receiveShadow=!0,t.add(s);const o=new D(new fi(.64,.04,6,16),n);o.rotation.x=Math.PI/2,o.position.set(0,.36,0),t.add(o);for(const[a,h]of[[-.22,.12],[.18,-.16],[.08,.2]]){const c=new D(new ke(.08,.08,.03,8),n);c.position.set(a,.4,h),t.add(c)}}else return null;return t}function Ya(){const r=new Ke,e=new X({color:13172724,emissive:4251840,emissiveIntensity:1.7,metalness:.95,roughness:.08}),t=[[.32,1.75,.18],[-.38,1.4,-.28],[.08,2.05,-.4],[-.22,1.95,.38],[.42,1.15,.3],[-.48,2.2,.08]];for(const[i,n,s]of t){const o=new D(new wi(.12,0),e);o.position.set(i,n,s),r.add(o)}return r}function $a(){const r=new Ke,e=new X({color:16773280,emissive:16764992,emissiveIntensity:1.65,metalness:.98,roughness:.1}),t=[[.35,1.7,.2],[-.4,1.35,-.3],[.1,2,-.45],[-.25,1.9,.4],[.45,1.1,.35],[-.5,2.15,.05],[0,2.35,.15],[.55,1.55,-.2]];for(const[n,s,o]of t){const a=new D(new wi(.11+Math.abs(n)%.05,0),e);a.position.set(n,s,o),r.add(a)}const i=new D(new de(.14,1.85,.14),new X({color:16769136,emissive:16756768,emissiveIntensity:1.35,metalness:.95,roughness:.15}));return i.position.set(.15,1.45,-.1),i.rotation.z=.2,r.add(i),r}function Rc(){const r=new Ke,e=new D(new de(Xe*.98,.18,Xe*.98),new X({color:3805704,roughness:.85,metalness:.05,emissive:4853768,emissiveIntensity:.35}));e.position.y=.05,e.receiveShadow=!0,r.add(e);const t=new D(new de(Xe*.82,.08,Xe*.82),new X({color:16733456,roughness:.35,metalness:.2,emissive:16726528,emissiveIntensity:1.35}));t.position.y=.14,r.add(t);for(const[i,n,s]of[[-.45,-.3,.35],[.4,.35,.28],[.1,-.5,.22],[-.2,.45,.3]]){const o=new D(new de(s,.06,s*.85),new X({color:1706502,roughness:.95,emissive:8394752,emissiveIntensity:.45}));o.position.set(i,.17,n),r.add(o)}return r}function kc(){const r=new Ke,e=new D(new de(Xe*.98,.16,Xe*.98),new X({color:1716296,roughness:.25,metalness:.35,emissive:663608,emissiveIntensity:.4}));e.position.y=.04,e.receiveShadow=!0,r.add(e);const t=new D(new de(Xe*.78,.04,Xe*.78),new X({color:3834032,roughness:.15,metalness:.55,emissive:1591400,emissiveIntensity:.55,transparent:!0,opacity:.92}));return t.position.y=.12,r.add(t),r}function va(r){const e=new Ke,t=new D(new de(Xe*.95,.1,Xe*.95),new X({color:r?1714232:4855816,roughness:.7,metalness:.1,emissive:r?1056816:12593152,emissiveIntensity:r?.25:.7}));t.position.y=.06,e.add(t);const i=new X({color:r?6975616:9067048,roughness:r?.65:.82,metalness:r?.35:.08,emissive:r?2106408:3809296,emissiveIntensity:.12});for(let s=-2;s<=2;s++){const o=new D(new de(Xe*.92,.12,.28),i);o.position.set(0,.2,s*.36),o.castShadow=!0,o.receiveShadow=!0,e.add(o)}const n=new X({color:r?5265512:5913112,roughness:.75,metalness:r?.3:.05});for(const s of[-.85,.85]){const o=new D(new de(.1,.35,Xe*.9),n);o.position.set(s,.38,0),e.add(o)}return e}function xa(r){const e=new Ke,t=new X({color:6964264,roughness:.78,metalness:.12,emissive:2758664,emissiveIntensity:.12}),i=new X({color:8947864,metalness:.85,roughness:.3,emissive:2105384,emissiveIntensity:.1}),n=new D(new de(.12,1.55,.18),t);n.position.set(-.72,.85,0),e.add(n);const s=n.clone();s.position.x=.72,e.add(s);const o=new D(new de(1.56,.14,.2),t);o.position.set(0,1.62,0),e.add(o);const a=new D(new de(1.2,1.4,.1),t);a.castShadow=!0,r===qe.Open?(a.position.set(.55,.78,.35),a.rotation.y=-1.05):a.position.set(0,.78,0),e.add(a);const h=new D(new de(1.22,.08,.12),i);h.position.copy(a.position),h.position.y=.55,h.rotation.copy(a.rotation),e.add(h);const c=new D(new je(.06,8,6),i);return r===qe.Open?c.position.set(.35,.75,.55):c.position.set(.45,.75,.08),e.add(c),e}function Lc(){const r=new Ke,e=new X({color:5920864,roughness:.7,metalness:.25,emissive:2103320,emissiveIntensity:.12}),t=new X({color:11055296,metalness:.8,roughness:.28,emissive:4206624,emissiveIntensity:.2}),i=new D(new ke(.35,.42,.22,8),e);i.position.y=.14,i.castShadow=!0,r.add(i);const n=new D(new ke(.1,.12,.7,6),e);n.position.y=.55,r.add(n);const s=new D(new de(.55,.22,.28),t);s.position.set(.05,.95,0),s.castShadow=!0,r.add(s);const o=new D(new ke(.06,.08,.45,6),t);o.rotation.z=Math.PI/2,o.position.set(.4,.95,0),r.add(o);const a=new D(new Ht(.05,.18,6),new X({color:12634328,metalness:.9,roughness:.2,emissive:8405008,emissiveIntensity:.35}));return a.rotation.z=-Math.PI/2,a.position.set(.68,.95,0),r.add(a),r}function Dc(){const r=new Ke,e=new X({color:5913122,roughness:.8}),t=new X({color:11544616,emissive:6295568,emissiveIntensity:.35,roughness:.7}),i=new D(new ke(.04,.05,1.6,6),e);i.position.y=.85,i.castShadow=!0,r.add(i);const n=new D(new de(.55,.38,.03),t);n.position.set(.3,1.4,0),r.add(n);const s=new D(new je(.07,8,6),new X({color:14729280,metalness:.7,emissive:10518560,emissiveIntensity:.4}));return s.position.y=1.68,r.add(s),r}function Ic(){const r=new Ke,e=new D(qa(!0),kr(E.Earth,!0,_.None));e.castShadow=!0,e.receiveShadow=!0,r.add(e);const t=ja(),i=_t("fort-gold-post-v7",()=>new de(.12,2.2,.12)),n=_t("fort-gold-cap-v7",()=>new de(.18,.1,.18)),s=Xe*.42;for(const o of[-1,1])for(const a of[-1,1]){const h=new D(i,t);h.position.set(o*s,1.15,a*s),r.add(h);const c=new D(n,t);c.position.set(o*s,2.28,a*s),r.add(c)}return r}function ya(r=!1){const e=new Ke,t=new Ut({color:r?16183516:14690344,side:Lt,depthWrite:!1,transparent:!0,opacity:.95}),i=[],n=_t("flower-petal-v7",()=>new Cs(.18,8));for(let o=0;o<5;o++){const a=new D(n,t),h=o/5*Math.PI*2-Math.PI/2;a.position.set(Math.cos(h)*.18,.01,Math.sin(h)*.18),a.rotation.x=-Math.PI/2,a.rotation.z=h,e.add(a),i.push(a)}const s=new D(_t("flower-center-v7",()=>new Cs(.08,8)),new Ut({color:r?16769152:4855816,side:Lt,depthWrite:!1}));return s.rotation.x=-Math.PI/2,e.add(s),e.petals=i,e}function Nc(){const r=new Ke,e=Gt("gold-bag-v7",()=>new X({color:15249448,metalness:.85,roughness:.28,emissive:10514448,emissiveIntensity:.55})),t=new D(_t("gold-bag-body-v7",()=>new je(.16,8,6)),e);t.scale.set(1.1,.75,1),t.position.y=.12,t.castShadow=!0,r.add(t);const i=new D(_t("gold-bag-nugget-v7",()=>new wi(.07,0)),e);return i.position.set(.04,.22,.02),r.add(i),r}function br(r,e,t){if(r.visible=!0,!t){r.rotation.set(-.16,0,.04);return}const i=1.25,n=e%i/i;let s=0;if(n<.58)s=0;else if(n<.74){const o=(n-.58)/.16;s=o*o}else s=1-(n-.74)/.26;r.rotation.x=-.32+s*.4,r.rotation.y=0,r.rotation.z=.04}function Uc(){const r=new Ke,e=Gt("hand-flesh-v7",()=>new X({color:9064512,metalness:.12,roughness:.62,emissive:4198416,emissiveIntensity:.18})),t=Gt("hand-claw-v7",()=>new X({color:15259808,metalness:.55,roughness:.35,emissive:4206608,emissiveIntensity:.2})),i=new D(new de(.42,.12,.5),e);i.position.y=.06,r.add(i);for(let s=0;s<4;s++){const o=new D(new de(.08,.08,.32),e);o.position.set((s-1.5)*.1,.08,-.34),r.add(o);const a=new D(new Ht(.04,.14,5),t);a.rotation.x=Math.PI/2,a.position.set((s-1.5)*.1,.08,-.52),r.add(a)}const n=new D(new de(.08,.08,.22),e);return n.position.set(.28,.06,-.08),n.rotation.y=.6,r.add(n),r.scale.setScalar(1.32),r.traverse(s=>{s.renderOrder=12;const o=s;if(o.isMesh&&o.material){const a=Array.isArray(o.material)?o.material:[o.material];for(const h of a)h.depthTest=!1,h.depthWrite=!1}}),r}let rv=1;class ov{id;kind;isHero;isWorker;x;y;wx;wz;hp;maxHp;speed;damage;level=1;job=L.Idle;jobTarget=null;path=[];pathIndex=0;workTimer=0;stunTimer=0;speedBuff=0;hunger=0;sleepNeed=0;mood=72;leaveWarned=!1;efficiencyWarned=!1;slapWorkBuff=0;selected=!1;trainNeed=0;held=!1;knockedOut=!1;isPrisoner=!1;convertProgress=0;fleeTimer=0;prayerBuff=0;hasTalisman=!1;attackCooldown=0;goldCarried=0;alive=!0;mesh;bobPhase;digAnim=0;eatAnim=0;eatAnnounced=!1;restHealAcc=0;facing=0;facingTarget=0;pickaxe=null;selectRing=null;healthFlower=null;goldBag=null;walkCycle=0;moving=!1;attackPulse=0;bedKey=null;tintPulse=0;tintMode=null;tintBase=new Map;constructor(e,t,i,n){this.id=rv++,this.kind=e,this.isHero=e===q.HeroKnight||e===q.HeroArcher,this.isWorker=e===q.Scrabbler;const s=Ts[e];this.maxHp=s.hp,this.hp=s.hp,this.speed=s.speed,this.damage=s.damage,this.x=t,this.y=i;const o=n.tileToWorld(t,i);this.wx=o.x,this.wz=o.z,this.bobPhase=Math.random()*Math.PI*2,this.mesh=new Ke}setMesh(e){this.mesh=e,this.syncMesh(0)}clampStats(){const e=(t,i=0)=>Number.isFinite(t)?t:i;this.maxHp=Math.max(1,e(this.maxHp,1)),this.hp=Math.max(0,Math.min(this.maxHp,e(this.hp,this.maxHp))),this.hunger=this.isWorker?0:Math.max(0,Math.min(100,e(this.hunger))),this.sleepNeed=this.isWorker?0:Math.max(0,Math.min(100,e(this.sleepNeed))),this.mood=Math.max(0,Math.min(100,e(this.mood,72))),this.wx=e(this.wx),this.wz=e(this.wz),Number.isFinite(this.x)||(this.x=0),Number.isFinite(this.y)||(this.y=0)}syncMesh(e,t=1/60){try{if(this.clampStats(),!this.mesh)return;this.mesh.visible=!0;const i=Number.isFinite(this.wx)?this.wx:0,n=Number.isFinite(this.wz)?this.wz:0;if(this.held){const g=Math.sin(e*10+this.bobPhase)*.08;this.mesh.position.set(i,1.35+g,n),this.mesh.rotation.x=.15,this.mesh.rotation.z=Math.sin(e*6)*.2,this.selectRing&&(this.selectRing.visible=!0,this.selectRing.rotation.z=e*3),this.pickaxe&&(this.pickaxe.visible=!1),this.updateHealthFlower(e),this.goldBag&&(this.goldBag.visible=this.goldCarried>0);return}if(this.knockedOut||this.isPrisoner){const g=Math.sin(e*1.5+this.bobPhase)*.01;this.mesh.position.set(i,.08+g,n),this.mesh.rotation.x=.05,this.mesh.rotation.z=this.knockedOut?1.35:.55,this.selectRing&&(this.selectRing.visible=this.selected||this.knockedOut,this.selectRing.rotation.z=e*1.2),this.pickaxe&&(this.pickaxe.visible=!1);return}const s=this.job===L.Dig||this.job===L.Mine||this.job===L.Claim||this.job===L.Fortify,o=this.job===L.Sleep,a=this.job===L.Eat,h=this.job===L.Claim,c=this.job===L.Fight;a&&(this.eatAnim+=t*21),this.moving&&(this.walkCycle+=t*10),this.attackPulse>0&&(this.attackPulse=Math.max(0,this.attackPulse-t*4));const d=this.kind===q.Skitterwing?Math.sin(e*6+this.bobPhase)*.25+.4:s&&!h?Math.sin(e*4.2+this.bobPhase)*.04:h?Math.abs(Math.sin(e*11+this.bobPhase))*.38:o?Math.sin(e*2+this.bobPhase)*.02:a?Math.sin(this.eatAnim*14+this.bobPhase)*.1:this.moving?Math.abs(Math.sin(this.walkCycle))*.06:Math.sin(e*8+this.bobPhase)*.04,l=o?.12:a?.05+Math.abs(Math.sin(this.eatAnim*14))*.08:h?.04:0;this.mesh.position.set(this.wx,d+l,this.wz);let u=this.facing,f=this.facingTarget-u;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;u+=f*Math.min(1,12*t),this.facing=u,this.mesh.rotation.y=this.facing,this.stunTimer>0?this.mesh.rotation.z=Math.sin(e*20)*.3:o?(this.mesh.rotation.z=.35,this.mesh.rotation.x=.05):a?(this.mesh.rotation.x=Math.sin(this.eatAnim*14)*.35,this.mesh.rotation.z=Math.sin(this.eatAnim*10)*.12):c&&this.attackPulse>0?(this.mesh.rotation.x=this.attackPulse*.45,this.mesh.rotation.z=0):(this.mesh.rotation.z=0,this.mesh.rotation.x=0),this.pickaxe&&(this.job===L.Dig||this.job===L.Mine?(this.digAnim+=t,br(this.pickaxe,this.digAnim,!0)):s?(this.digAnim+=t*.35,br(this.pickaxe,this.digAnim,!0)):(br(this.pickaxe,0,!1),this.pickaxe.visible=this.isWorker)),this.applyWalkLimbs(o||a||this.stunTimer>0),this.selectRing&&(this.selectRing.visible=s||this.held||this.selected,this.selectRing.rotation.z=e*1.5),this.goldBag&&(this.goldBag.visible=this.goldCarried>8),this.updateHealthFlower(e),this.tintPulse>0&&(this.tintPulse=Math.max(0,this.tintPulse-t),this.tintPulse<=0&&(this.tintMode=null)),this.applyTintVisual()}catch(i){console.warn("[underkeep] syncMesh failed",i)}}applyWalkLimbs(e=!1){const t=e?0:this.moving?.55:0,i=this.walkCycle;this.mesh.traverse(n=>{const s=n.userData?.walkLimb;if(!s)return;const o=n.userData.baseRot,a=o?.x??0,h=o?.y??0,c=o?.z??0;s==="legL"||s==="armR"?n.rotation.set(a+Math.sin(i)*t,h,c):(s==="legR"||s==="armL")&&n.rotation.set(a+Math.sin(i+Math.PI)*t,h,c)})}updateHealthFlower(e){if(!this.healthFlower)return;const t=this.maxHp>0?Math.max(0,Math.min(1,this.hp/this.maxHp)):1,i=this.healthFlower.petals;if(i){const n=Math.max(0,Math.ceil(t*5));for(let s=0;s<i.length;s++)i[s].visible=s<n}this.healthFlower.position.y=2.05/Math.max(.35,this.mesh.scale.x||1)+Math.sin(e*2.4+this.bobPhase)*.04,this.healthFlower.rotation.y=e*.6,this.healthFlower.visible=this.alive&&!this.held}workEfficiency(){let t=.5+(Number.isFinite(this.mood)?Math.max(0,Math.min(100,this.mood)):50)/100*.7;return this.prayerBuff>0&&(t+=.05),this.hasTalisman&&(t+=.03),this.slapWorkBuff>0&&(t+=.12),Number.isFinite(t)?Math.max(.5,Math.min(1.35,t)):.85}pulseTint(e,t=.85){this.tintMode=e,this.tintPulse=Math.max(this.tintPulse,t)}applyTintVisual(){if(this.mesh)try{const e=[];this.mesh.traverse(t=>{const i=t.material;if(i)if(Array.isArray(i))for(const n of i)n instanceof X&&e.push(n);else i instanceof X&&e.push(i)});for(const t of e){this.tintBase.has(t)||this.tintBase.set(t,{emissive:t.emissive.clone(),intensity:t.emissiveIntensity});const i=this.tintBase.get(t);if(this.tintPulse>0&&this.tintMode){const n=.55+.45*Math.sin(this.tintPulse*14);this.tintMode==="heal"?(t.emissive.setRGB(.15*n,.95*n,.45*n),t.emissiveIntensity=Math.max(i.intensity,.85+n*.7)):(t.emissive.setRGB(1*n,.55*n,.12*n),t.emissiveIntensity=Math.max(i.intensity,.9+n*.75))}else t.emissive.copy(i.emissive),t.emissiveIntensity=i.intensity}}catch(e){console.warn("[underkeep] tint failed",e)}}tilePos(){return{x:this.x,y:this.y}}setPath(e){this.path=e??[],this.pathIndex=0}faceToward(e,t){const i=e-this.wx,n=t-this.wz;i*i+n*n<1e-6||(this.facingTarget=Math.atan2(i,n))}moveAlongPath(e,t){if(this.stunTimer>0||this.held||this.knockedOut||this.isPrisoner)return this.moving=!1,!1;if(this.pathIndex>=this.path.length)return this.moving=!1,!0;const i=this.path[this.pathIndex],n=t.tileToWorld(i.x,i.y),s=this.speed*(this.speedBuff>0?1.8:1)*Xe,o=n.x-this.wx,a=n.z-this.wz,h=Math.hypot(o,a);if(h<.1)return this.wx=n.x,this.wz=n.z,this.x=i.x,this.y=i.y,this.pathIndex++,this.moving=this.pathIndex<this.path.length,this.pathIndex>=this.path.length;const c=Math.min(h,s*e);this.wx+=o/h*c,this.wz+=a/h*c,this.moving=!0,this.faceToward(n.x,n.z);let d=this.facingTarget-this.facing;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;this.facing+=d*Math.min(1,14*e);const l=t.worldToTile(this.wx,this.wz);return t.inBounds(l.x,l.y)&&(this.x=l.x,this.y=l.y),!1}takeDamage(e){this.alive&&(this.hp-=e,this.hp<=0&&(this.hp=0,this.alive=!1))}}const Fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const av=new La(-1,1,1,-1,0,1);class lv extends wt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const hv=new lv;class Oc{constructor(e){this._mesh=new D(hv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _a extends ks{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cr.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Oc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Th extends ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class cv extends ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Eh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _a(Fc),this.copyPass.material.blending=Ui,this.clock=new A0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Th!==void 0&&(o instanceof Th?i=!0:o instanceof cv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ah extends ks{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const dv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class yn extends ks{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(s,o,{type:Fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let l=0;l<this.nMips;l++){const u=new gi(s,o,{type:Fi});u.texture.name="UnrealBloomPass.h"+l,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new gi(s,o,{type:Fi});f.texture.name="UnrealBloomPass.v"+l,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=dv;this.highPassUniforms=Cr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let l=0;l<this.nMips;l++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[l])),this.separableBlurMaterials[l].uniforms.invSize.value=new he(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Fc;this.copyUniforms=Cr.clone(d.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Sr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new Oc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[h].uniforms.direction.value=yn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=yn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}yn.BlurDirectionX=new he(1,0);yn.BlurDirectionY=new he(0,1);const To=788748,uv=657161,Ch={uniforms:{tDiffuse:{value:null},uContrast:{value:1.06},uSaturation:{value:.98},uVignette:{value:.26},uTint:{value:new Ue(1.05,.92,.78)}},vertexShader:`
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
  `};class fv{scene;camera;renderer;composer;bloomPass;gridGroup=new Ke;entityGroup=new Ke;fxGroup=new Ke;tileMeshes=new Map;torches=[];portals=[];heartGroup=null;dust;markerMesh;selectRing;clock=0;edgeMat;earthEdgeMat;goldEdgeMat;rockEdgeMat;contextLost=!1;useComposer=!0;renderFails=0;onContextLost=null;onContextRestored=null;fxDebrisGeo=new de(.1,.08,.1);fxSparkGeo=new je(.2,8,8);fxGlowGeo=new je(.4,10,10);FX_CAP=64;digLoad=!1;basePixelRatio=1;dirLight=null;markOverlay=new Ke;markPlaneGeo=new vi(Xe*.7,Xe*.7);digWireGeo=new S0(new de(Xe*.92,2.2,Xe*.92));fogOverlay=new Ke;fogBoxGeo=new de(Xe*1.05,4.4,Xe*1.05);fogMat=new Ut({color:657420,transparent:!0,opacity:.38,depthWrite:!1});fogInstanced=null;fogCapacity=0;fogDummy=new St;keeperHand;goldHoard=new Ke;goldHoardScale=0;constructor(e){this.scene=new hc,this.scene.background=new Ue(To),this.scene.fog=new Ia(uv,.0052),this.camera=new jt(46,1,.1,240),this.camera.position.set(0,34,22),this.camera.lookAt(0,0,0),this.renderer=new r0({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.basePixelRatio=Math.min(window.devicePixelRatio||1,t?1.15:1.5),this.renderer.setPixelRatio(this.basePixelRatio),this.renderer.setClearColor(To,1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=t?Xc:Dh,this.renderer.toneMapping=Nh,this.renderer.toneMappingExposure=.98,this.renderer.outputColorSpace=zt;const i=new yc(9071184,.32);this.scene.add(i);const n=new vc(16763032,1576984,.28);n.position.set(0,40,0),this.scene.add(n);const s=new Ss(16767144,.72);s.position.set(22,48,14),s.castShadow=!0,s.shadow.mapSize.set(512,512),this.dirLight=s,s.shadow.camera.near=5,s.shadow.camera.far=120,s.shadow.camera.left=-55,s.shadow.camera.right=55,s.shadow.camera.top=55,s.shadow.camera.bottom=-55,s.shadow.bias=-6e-4,s.shadow.intensity=.7,this.scene.add(s);const o=new Ss(2371648,.12);o.position.set(-18,28,-14),this.scene.add(o);const a=new Float32Array(260*3);for(let l=0;l<a.length;l+=3)a[l]=(Math.random()-.5)*90,a[l+1]=.5+Math.random()*13,a[l+2]=(Math.random()-.5)*90;const h=new wt;h.setAttribute("position",new ei(a,3)),this.dust=new h0(h,new dc({color:9062946,size:.06,transparent:!0,opacity:.22,depthWrite:!1,sizeAttenuation:!0})),this.scene.add(this.dust);const c=new D(new vi(200,200),new X({color:525832,metalness:.05,roughness:1}));c.rotation.x=-Math.PI/2,c.position.y=-.35,c.receiveShadow=!0,this.scene.add(c),this.scene.add(this.gridGroup),this.scene.add(this.markOverlay),this.scene.add(this.fogOverlay),this.scene.add(this.entityGroup),this.scene.add(this.fxGroup),this.edgeMat=new Ki({color:2761240,transparent:!0,opacity:.55}),this.earthEdgeMat=new Ki({color:10510376,transparent:!0,opacity:.85}),this.goldEdgeMat=new Ki({color:16769126,transparent:!0,opacity:1}),this.rockEdgeMat=new Ki({color:8949928,transparent:!0,opacity:.8}),this.markerMesh=new D(new vi(Xe*.9,Xe*.9),new Ut({color:16755232,transparent:!0,opacity:.35,depthWrite:!1})),this.markerMesh.rotation.x=-Math.PI/2,this.markerMesh.position.y=.14,this.markerMesh.visible=!1,this.scene.add(this.markerMesh),this.selectRing=new D(new ns(.4,.55,24),new Ut({color:16764006,transparent:!0,opacity:.8,side:Lt})),this.selectRing.rotation.x=-Math.PI/2,this.selectRing.position.y=.16,this.selectRing.visible=!1,this.scene.add(this.selectRing),this.keeperHand=Uc(),this.keeperHand.visible=!1,this.scene.add(this.keeperHand),this.goldHoard.visible=!1,this.scene.add(this.goldHoard),this.composer=new Eh(this.renderer),this.composer.addPass(new Ah(this.scene,this.camera));const d=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new yn(new he(1,1),d?.1:.16,.42,.88),this.composer.addPass(this.bloomPass),this.composer.addPass(new _a(Ch)),this.onResize(),window.addEventListener("resize",()=>this.onResize()),this.bindContextRecovery(e)}bindContextRecovery(e){e.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.contextLost=!0,this.useComposer=!1,console.warn("[underkeep] WebGL context lost"),this.onContextLost?.()},!1),e.addEventListener("webglcontextrestored",()=>{console.warn("[underkeep] WebGL context restored — reinit renderer pipeline"),this.contextLost=!1;try{this.reinitPipeline(),this.onContextRestored?.()}catch(t){console.error("[underkeep] context restore failed",t),this.onContextLost?.()}},!1)}reinitPipeline(){const e=new he;this.renderer.getSize(e),this.renderer.setClearColor(To,1),this.composer=new Eh(this.renderer),this.composer.addPass(new Ah(this.scene,this.camera));const t=typeof window<"u"&&window.matchMedia?.("(pointer: coarse)").matches;this.bloomPass=new yn(new he(e.x||1,e.y||1),t?.1:.16,.42,.88),this.composer.addPass(this.bloomPass),this.composer.addPass(new _a(Ch)),this.useComposer=!0,this.renderFails=0,this.onResize()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t)}disposeGridChild(e){e.traverse(t=>{const i=t;if(i.isMesh){const s=i.geometry;s&&(i.userData.disposeGeo||s.userData?.disposeGeo)&&s.dispose();const o=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const a of o)a&&a.userData?.disposeMat&&a.dispose()}t.isLight})}rebuildGrid(e){for(;this.gridGroup.children.length;){const t=this.gridGroup.children.pop();this.disposeGridChild(t),this.gridGroup.remove(t)}this.tileMeshes.clear(),this.torches=[],this.portals=[],this.heartGroup=null;for(const t of e.tiles){const i=e.tileToWorld(t.x,t.y),n=`${t.x},${t.y}`;if(t.kind===E.Rock){const a=new D(bc(),kr(E.Rock,!1,t.room));a.position.set(i.x,0,i.z),a.rotation.y=this.tileRotation(t.x,t.y),a.castShadow=!0,a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.addExposedWallFaces(e,t.x,t.y,a,E.Rock,!1),this.gridGroup.add(a),this.addEdge(i.x,i.z,3.5,this.rockEdgeMat),this.tileMeshes.set(n,a);continue}if(t.fortified){const a=Ic();a.position.set(i.x,0,i.z),a.rotation.y=this.tileRotation(t.x,t.y),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.addExposedWallFaces(e,t.x,t.y,a,t.kind,!0),this.gridGroup.add(a),this.addEdge(i.x,i.z,2.5,this.edgeMat),this.tileMeshes.set(n,a);continue}if(kt(t.kind)){const a=t.kind===E.Gold||t.kind===E.Gem?Sc():qa(),h=new D(a,kr(t.kind,!1,t.room));h.position.set(i.x,0,i.z),h.rotation.y=this.tileRotation(t.x,t.y);const c=Math.max(0,Math.min(.95,t.digProgress||0)),d=1-c*.7,l=1-c*.85;if(h.scale.set(d,l,d),h.position.y=-c*1.15,h.castShadow=!0,h.receiveShadow=!0,h.userData.tileX=t.x,h.userData.tileY=t.y,this.addExposedWallFaces(e,t.x,t.y,h,t.kind,!1),this.gridGroup.add(h),(t.kind===E.Gold||t.kind===E.Gem)&&c<.85){const f=t.kind===E.Gem?Ya():$a();f.position.set(i.x,h.position.y,i.z),f.scale.set(d,l,d),f.userData.glitterFor=n,f.userData.glitterSpin=!0,this.gridGroup.add(f)}const u=2.35*l+h.position.y;this.addEdge(i.x,i.z,Math.max(.4,u),t.kind===E.Gem?this.goldEdgeMat:t.kind===E.Gold?this.goldEdgeMat:this.earthEdgeMat),this.tileMeshes.set(n,h);continue}if(t.kind===E.Lava){const a=Rc();a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===E.Water){const a=kc();a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===E.BridgeWood||t.kind===E.BridgeStone){const a=va(t.kind===E.BridgeStone);a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a);continue}if(t.kind===E.Claimed){const a=Xa(t.room);a.position.set(i.x,0,i.z),a.userData.tileX=t.x,a.userData.tileY=t.y,a.traverse(h=>{h.userData.tileX=t.x,h.userData.tileY=t.y}),this.gridGroup.add(a),this.tileMeshes.set(n,a)}else{const a=new D(Mc(),Di(t.kind,t.room));a.position.set(i.x,0,i.z),a.receiveShadow=!0,a.userData.tileX=t.x,a.userData.tileY=t.y,this.gridGroup.add(a),this.tileMeshes.set(n,a)}if(t.kind===E.Heart){const a=Tc();a.position.set(i.x,0,i.z),this.gridGroup.add(a),this.heartGroup=a}const s=Cc(t.room);s&&(s.position.set(i.x,.18,i.z),this.gridGroup.add(s));const o=Pc(t.room,Math.abs(t.x*3+t.y*5));if(o&&(o.position.set(i.x,.14,i.z),this.gridGroup.add(o),o.userData.portalAnimated&&this.portals.push(o)),t.door===qe.Closed||t.door===qe.Open){const a=xa(t.door);a.position.set(i.x,.02,i.z),!!e.get(t.x+1,t.y)&&(e.get(t.x+1,t.y).fortified||kt(e.get(t.x+1,t.y).kind)||e.get(t.x+1,t.y).kind===E.Rock)||!!e.get(t.x-1,t.y)&&(e.get(t.x-1,t.y).fortified||kt(e.get(t.x-1,t.y).kind)||e.get(t.x-1,t.y).kind===E.Rock)||(a.rotation.y=Math.PI/2),this.gridGroup.add(a)}if(t.trap===pt.Sentry){const a=Lc();a.position.set(i.x+.15,.02,i.z-.15),this.gridGroup.add(a)}if(t.rally){const a=Dc();a.position.set(i.x-.25,.02,i.z+.25),this.gridGroup.add(a)}if(t.torch){const a=this.torches.filter(u=>u.torchLight).length<12,h=Ec(a);let c=.65,d=0;const l=[[1,0,.65,0],[-1,0,-.65,0],[0,1,0,.65],[0,-1,0,-.65]];for(const[u,f,g,v]of l){const m=e.get(t.x+u,t.y+f);if(m&&(kt(m.kind)||m.kind===E.Rock||m.fortified)){c=g,d=v;break}}h.position.set(i.x+c,0,i.z+d),this.gridGroup.add(h),this.torches.push(h)}}this.syncMarkOverlay(e),this.syncFogOverlay(e)}addExposedWallFaces(e,t,i,n,s,o){const a=[[0,1,0],[1,0,Math.PI/2],[0,-1,Math.PI],[-1,0,-Math.PI/2]];for(const[h,c,d]of a){const l=e.get(t+h,i+c);if(!l||e.isSolid(l.x,l.y))continue;const u=nv(s,o);u.rotation.y=d-n.rotation.y,n.add(u)}}tileRotation(e,t){return Math.abs(e*7+t*13)%4*Math.PI*.5}syncMarkOverlay(e){for(;this.markOverlay.children.length;){const t=this.markOverlay.children.pop();this.markOverlay.remove(t);const i=t;i.material&&i.material.userData?.disposeMat&&i.material.dispose()}for(const t of e.tiles){if(!t.mark)continue;const i=e.tileToWorld(t.x,t.y),n=Math.max(0,Math.min(.95,t.digProgress||0)),s=1-n*.85,o=kt(t.kind)?Math.max(.5,2.42*s-n*1.15):.2,a=new Ut({color:t.mark===1?16724770:t.mark===2?4500223:13421738,transparent:!0,opacity:.7,depthWrite:!1});a.userData.disposeMat=!0;const h=new D(this.markPlaneGeo,a);if(h.rotation.x=-Math.PI/2,h.position.set(i.x,o,i.z),this.markOverlay.add(h),t.mark===1&&kt(t.kind)){const c=new Ki({color:16729122,transparent:!0,opacity:.85});c.userData.disposeMat=!0;const d=new cc(this.digWireGeo,c);d.position.set(i.x,1.1*s-n*1.15,i.z),d.scale.set(1,Math.max(.25,s),1),this.markOverlay.add(d)}}}syncFogOverlay(e){const t=[];for(const s of e.tiles){const o=`${s.x},${s.y}`,a=this.tileMeshes.get(o);s.explored?a&&!a.visible&&(a.visible=!0):(kt(s.kind)||s.kind===E.Rock||s.fortified||t.push(s),a&&(a.visible=!0))}const i=Math.max(t.length,1);if(!this.fogInstanced||this.fogCapacity<i){this.fogInstanced&&(this.fogOverlay.remove(this.fogInstanced),this.fogInstanced=null);const s=Math.max(i,256),o=new l0(this.fogBoxGeo,this.fogMat,s);o.instanceMatrix.setUsage(Rd),o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,this.fogInstanced=o,this.fogCapacity=s,this.fogOverlay.add(o)}const n=this.fogInstanced;for(let s=0;s<t.length;s++){const o=t[s],a=e.tileToWorld(o.x,o.y);this.fogDummy.position.set(a.x,1.9,a.z),this.fogDummy.scale.set(1,1,1),this.fogDummy.updateMatrix(),n.setMatrixAt(s,this.fogDummy.matrix)}n.count=t.length,n.instanceMatrix.needsUpdate=!0,n.visible=t.length>0}addEdge(e,t,i,n){const s=new pa(sv(i),n);s.position.set(e,0,t),this.gridGroup.add(s)}updateDigVisual(e,t,i,n){const s=`${e},${t}`,o=this.tileMeshes.get(s);if(!o)return;const a=Math.max(0,Math.min(.95,i||0)),h=1-a*.7,c=1-a*.85;o.scale.set(h,c,h),o.position.y=-a*1.15;for(const d of this.gridGroup.children)d.userData?.glitterFor===s&&(d.position.y=o.position.y,d.scale.set(h,c,h),d.visible=a<.85&&(n===E.Gold||n===E.Gem))}setHover(e,t,i,n=16755232){this.markerMesh.visible=i,i&&(this.markerMesh.position.x=e,this.markerMesh.position.z=t,this.markerMesh.material.color.setHex(n))}setSelectRing(e,t,i){this.selectRing.visible=i,i&&(this.selectRing.position.x=e,this.selectRing.position.z=t)}setKeeperHand(e,t,i,n=!1,s=4.6){if(this.keeperHand.visible=i,!i)return;const o=n?s+.55:s,a=this.camera.position,h=a.x-e,c=a.z-t,d=Math.hypot(h,c)||1,l=1.35;this.keeperHand.position.set(e+h/d*l,o,t+c/d*l),this.keeperHand.rotation.x=n?.42:.12,this.keeperHand.rotation.z=n?-.25:Math.sin(this.clock*3)*.06,this.keeperHand.rotation.y=n?.35:.15}setHeartGold(e,t,i){if(this.goldHoard.children.length===0){const o=new X({color:15249448,metalness:.88,roughness:.28,emissive:10514448,emissiveIntensity:.5}),a=[[1.35,.18,.55],[1.55,.12,-.35],[-1.4,.16,.4],[-1.15,.1,-.7],[.4,.14,1.45]];for(const[h,c,d]of a){const l=new D(new je(.32,8,6),o);l.scale.set(1.25,.55,1.1),l.position.set(h,c,d),l.castShadow=!0,this.goldHoard.add(l)}}this.goldHoard.position.set(t,0,i);const n=Math.max(0,Math.min(1,e/2800));this.goldHoardScale=n;const s=.35+n*1.15;this.goldHoard.scale.setScalar(s),this.goldHoard.visible=e>=80}clearEntities(){for(;this.entityGroup.children.length;)this.entityGroup.remove(this.entityGroup.children[0])}addEntityMesh(e){this.entityGroup.add(e)}removeEntityMesh(e){this.entityGroup.remove(e)}createEntityVisual(e,t,i){return Ac(t,i,e)}trimFx(){for(;this.fxGroup.children.length>this.FX_CAP;){const e=this.fxGroup.children[0];this.disposeFxChild(e),this.fxGroup.remove(e)}}disposeFxChild(e){const t=e;if(t.isMesh){const n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}const i=e;if(i.isLine&&i.geometry&&i.geometry.userData?.disposeGeo&&i.geometry.dispose(),i.isLine){const n=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(const s of n)s&&s.userData?.disposeMat&&s.dispose()}}setDigLoad(e){this.digLoad!==e&&(this.digLoad=e,e?(this.renderer.setPixelRatio(Math.min(this.basePixelRatio,1)),this.trimFx()):(this.renderer.setPixelRatio(this.basePixelRatio),this.onResize()))}spawnFx(e,t,i=.6){if(this.fxGroup.children.length>=this.FX_CAP)return;const n=new Ut({color:t,transparent:!0,opacity:.9});n.userData.disposeMat=!0;const s=new D(this.fxSparkGeo,n);s.position.copy(e),s.position.y+=.5,this.fxGroup.add(s);const o=s;o._fxStart=this.clock,o._fxLife=i}spawnCareSparks(e,t,i,n=!1){this.fxGroup.children.length>this.FX_CAP-8&&this.trimFx();const s=i==="heal"?5636010:16763955,o=i==="heal"?13172712:16772795,a=i==="heal"?2817928:16755234,h=n?this.digLoad?6:10:this.digLoad?3:5;for(let c=0;c<h&&!(this.fxGroup.children.length>=this.FX_CAP);c++){const d=.7+Math.random()*.6,l=c%3===0?o:c%3===1?s:a,u=new Ut({color:l,transparent:!0,opacity:1,depthWrite:!1});u.userData.disposeMat=!0;const f=new D(this.fxSparkGeo,u);f.scale.setScalar(d),f.position.set(e+(Math.random()-.5)*.85,.45+Math.random()*.7,t+(Math.random()-.5)*.85);const g=f;g._fxStart=this.clock,g._fxLife=1.2+Math.random()*.7,g._vx=(Math.random()-.5)*1.4,g._vy=.9+Math.random()*1.6,g._vz=(Math.random()-.5)*1.4,g._fxFloat=!0,this.fxGroup.add(f)}if(this.fxGroup.children.length<this.FX_CAP){const c=new Ut({color:s,transparent:!0,opacity:.85,depthWrite:!1});c.userData.disposeMat=!0;const d=new D(this.fxGlowGeo,c);d.scale.setScalar(n?1.3:.95),d.position.set(e,.7,t);const l=d;l._fxStart=this.clock,l._fxLife=n?1.8:1.4,l._vx=0,l._vy=.55,l._vz=0,l._fxFloat=!0,this.fxGroup.add(d)}}spawnDigDebris(e,t,i=12615744){this.fxGroup.children.length>this.FX_CAP-4&&this.trimFx();const n=this.digLoad?2:4;for(let s=0;s<n&&!(this.fxGroup.children.length>=this.FX_CAP);s++){const o=new Ut({color:i,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const a=new D(this.fxDebrisGeo,o),h=.7+Math.random()*.8;a.scale.set(h,h*.8,h),a.position.set(e+(Math.random()-.5)*.6,.6+Math.random()*.8,t+(Math.random()-.5)*.6);const c=a;c._fxStart=this.clock,c._fxLife=.35+Math.random()*.25,c._vx=(Math.random()-.5)*3,c._vy=1.5+Math.random()*2.5,c._vz=(Math.random()-.5)*3,this.fxGroup.add(a)}}pickTile(e,t){const i=new yh;i.setFromCamera(new he(e,t),this.camera);const n=i.intersectObjects(this.gridGroup.children,!0);let s=null;for(const a of n){let h=a.object;for(;h;){if(h.userData&&typeof h.userData.tileX=="number"){const c={x:a.point.x,z:a.point.z,tileX:h.userData.tileX,tileY:h.userData.tileY};let d=!1;if(a.face&&(d=a.face.normal.clone().transformDirection(a.object.matrixWorld).y>.45),d)return c;s||(s=c);break}h=h.parent}}if(s)return s;const o=this.raycastGround(e,t);return o?{x:o.x,z:o.z}:null}spawnLightning(e,t){const i=[e.clone(),t.clone().add(new A(0,1,0))],n=e.clone().lerp(t,.5);n.y+=2+Math.random(),n.x+=(Math.random()-.5)*2,i.splice(1,0,n);const s=new wt().setFromPoints(i);s.userData.disposeGeo=!0;const o=new Ki({color:11197951,transparent:!0,opacity:.95});o.userData.disposeMat=!0;const a=new pa(s,o);this.fxGroup.add(a);const h=a;h._fxStart=this.clock,h._fxLife=.35}update(e){if(this.clock+=e,this.heartGroup?.heartCore){const t=1+Math.sin(this.clock*3)*.05;this.heartGroup.heartCore.scale.setScalar(t),this.heartGroup.heartLight&&(this.heartGroup.heartLight.intensity=2.85+Math.sin(this.clock*2.4)*.18),this.heartGroup.rotation.y+=e*.3,this.heartGroup.heartCrown&&(this.heartGroup.heartCrown.rotation.y-=e*.45)}this.dust.rotation.y+=e*.012,this.dust.position.y=Math.sin(this.clock*.18)*.3;for(const t of this.portals){const i=t.userData.portalRing,n=t.userData.portalCore;if(i&&(i.rotation.z+=e*.85,i.rotation.y=Math.sin(this.clock*.7+t.position.x)*.18),n){const s=.94+Math.sin(this.clock*4+t.position.z)*.08;n.scale.setScalar(s)}}for(const t of this.torches){const i=this.clock*6.4+t.position.x*1.7+t.position.z*.9,n=1+Math.sin(i)*.1+Math.sin(i*1.73+.4)*.05;t.torchLight&&(t.torchLight.intensity=3.6*n),t.flame&&t.flame.scale.setScalar(.94+Math.sin(i*1.15)*.07)}for(const t of this.gridGroup.children)t.userData?.glitterSpin&&(t.rotation.y+=e*1.1);this.goldHoard.visible&&(this.goldHoard.rotation.y+=e*.15);for(let t=this.fxGroup.children.length-1;t>=0;t--){const i=this.fxGroup.children[t];if(i._fxStart!==void 0&&i._fxLife!==void 0){const n=this.clock-i._fxStart,s=i._fxLife;if(n>s)this.disposeFxChild(i),this.fxGroup.remove(i);else if(i.material){const o=i.material,a=n/s;o.opacity!==void 0&&(o.opacity=Math.max(0,1-a*a));const h=!!i._fxFloat;if(i._vx!==void 0)if(i.position.x+=(i._vx??0)*e,i.position.y+=(i._vy??0)*e,i.position.z+=(i._vz??0)*e,i._vy=(i._vy??0)-(h?1.2:6)*e,h){const c=1+Math.sin(a*Math.PI)*.45;i.scale.setScalar(c),i.rotation.y+=e*2}else i.rotation.x+=e*4,i.rotation.z+=e*3;else i.position.y+=e*1.5}}}}render(){if(!this.contextLost)try{this.useComposer?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderFails=0}catch(e){this.renderFails++,console.error("[underkeep] render failed",e),this.useComposer=!1;try{this.renderer.render(this.scene,this.camera)}catch(t){console.error("[underkeep] fallback render failed",t),this.renderFails>=3&&(this.contextLost=!0,this.onContextLost?.())}}}raycastGround(e,t){const i=new yh;i.setFromCamera(new he(e,t),this.camera);const n=new $i(new A(0,1,0),0),s=new A;return i.ray.intersectPlane(n,s)?s:null}}const Ph=["treasury","lair","hatchery","training","library","portal","guard","workshop","prison","torture","graveyard","temple","combatPit","casino","door","sentry","rally","bridgeWood","bridgeStone","sell"];class pv{goldEl;manaEl;manaBar;workersEl;creaturesEl;mentorEl;mentorText;tooltipEl;overlay;overlayTitle;overlayMsg;buildSheet;spellsSheet;btnBuild;btnSpells;mentorTimer=0;mentorQueue=[];inspectorEl;inspName;inspJob;inspHp;inspHpBar;inspHunger;inspTired;inspMood;inspMoodBar;inspEfficiency;minimap;minimapCtx;objectiveEl;kitsValueEl;createWorkerBtn;rosterSheet;rosterList;btnRoster;goldCapEl;heartEl;heartBar;paydayEl;inspHungerRow;inspTiredRow;onToolChange=null;onSpell=null;onOverlayContinue=null;onNewGame=null;onInspectorClose=null;onRosterSelect=null;constructor(){this.goldEl=document.getElementById("gold-value"),this.manaEl=document.getElementById("mana-value"),this.manaBar=document.getElementById("mana-bar"),this.workersEl=document.getElementById("workers-value"),this.creaturesEl=document.getElementById("creatures-value"),this.mentorEl=document.getElementById("mentor"),this.mentorText=document.getElementById("mentor-text"),this.tooltipEl=document.getElementById("tooltip"),this.overlay=document.getElementById("overlay"),this.overlayTitle=document.getElementById("overlay-title"),this.overlayMsg=document.getElementById("overlay-msg"),this.buildSheet=document.getElementById("build-sheet"),this.spellsSheet=document.getElementById("spells-sheet"),this.btnBuild=document.getElementById("btn-build"),this.btnSpells=document.getElementById("btn-spells"),this.inspectorEl=document.getElementById("inspector"),this.inspName=document.getElementById("insp-name"),this.inspJob=document.getElementById("insp-job"),this.inspHp=document.getElementById("insp-hp"),this.inspHpBar=document.getElementById("insp-hp-bar"),this.inspHunger=document.getElementById("insp-hunger"),this.inspTired=document.getElementById("insp-tired"),this.inspMood=document.getElementById("insp-mood"),this.inspMoodBar=document.getElementById("insp-mood-bar"),this.inspEfficiency=document.getElementById("insp-efficiency"),this.minimap=document.getElementById("minimap"),this.minimapCtx=this.minimap?.getContext("2d")??null,this.objectiveEl=document.getElementById("objective-value"),this.kitsValueEl=document.getElementById("kits-value"),this.createWorkerBtn=document.getElementById("btn-create-worker")??document.querySelector('.spell[data-spell="createWorker"]'),this.rosterSheet=document.getElementById("roster-sheet"),this.rosterList=document.getElementById("roster-list"),this.btnRoster=document.getElementById("btn-roster"),this.goldCapEl=document.getElementById("gold-cap"),this.heartEl=document.getElementById("heart-value"),this.heartBar=document.getElementById("heart-bar"),this.paydayEl=document.getElementById("payday-value"),this.inspHungerRow=document.getElementById("insp-hunger-row"),this.inspTiredRow=document.getElementById("insp-tired-row"),document.getElementById("insp-close")?.addEventListener("click",()=>{this.hideInspector(),this.onInspectorClose?.()}),document.querySelectorAll(".tool").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.tool;this.setActiveTool(t),this.onToolChange?.(t),Ph.includes(t)&&this.closeSheets()})}),document.querySelectorAll(".spell").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.spell;this.onSpell?.(t),(t==="speed"||t==="lightning"||t==="possess"||t==="sight"||t==="callToArms")&&this.closeSheet("spells")})}),document.getElementById("overlay-btn").addEventListener("click",()=>{this.hideOverlay(),this.onOverlayContinue?.()}),document.getElementById("overlay-btn-secondary")?.addEventListener("click",()=>{this.hideOverlay(),this.onNewGame?.()}),document.getElementById("btn-new-game")?.addEventListener("click",()=>{this.onNewGame?.()}),this.btnBuild?.addEventListener("click",()=>this.toggleSheet("build")),this.btnSpells?.addEventListener("click",()=>this.toggleSheet("spells")),this.btnRoster?.addEventListener("click",()=>this.toggleSheet("roster")),document.getElementById("btn-build-desktop")?.addEventListener("click",()=>this.toggleSheet("build")),document.getElementById("btn-spells-desktop")?.addEventListener("click",()=>this.toggleSheet("spells")),document.getElementById("btn-roster-desktop")?.addEventListener("click",()=>this.toggleSheet("roster")),document.querySelectorAll(".sheet-close").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.close;(t==="build"||t==="spells"||t==="roster")&&this.closeSheet(t)})}),document.getElementById("mentor-dismiss")?.addEventListener("click",()=>this.dismissMentor())}sheetButtons(e){return(e==="build"?["btn-build","btn-build-desktop"]:e==="spells"?["btn-spells","btn-spells-desktop"]:["btn-roster","btn-roster-desktop"]).map(i=>document.getElementById(i)).filter(i=>!!i)}sheetEl(e){return e==="build"?this.buildSheet:e==="spells"?this.spellsSheet:this.rosterSheet}toggleSheet(e){const t=this.sheetEl(e);if(!t)return;const i=t.hasAttribute("hidden");for(const n of["build","spells","roster"])if(n!==e){this.sheetEl(n)?.setAttribute("hidden","");for(const s of this.sheetButtons(n))s.classList.remove("active"),s.setAttribute("aria-expanded","false")}if(i){t.removeAttribute("hidden");for(const n of this.sheetButtons(e))n.classList.add("active"),n.setAttribute("aria-expanded","true")}else{t.setAttribute("hidden","");for(const n of this.sheetButtons(e))n.classList.remove("active"),n.setAttribute("aria-expanded","false")}}closeSheet(e){this.sheetEl(e)?.setAttribute("hidden","");for(const i of this.sheetButtons(e))i.classList.remove("active"),i.setAttribute("aria-expanded","false")}closeSheets(){this.closeSheet("build"),this.closeSheet("spells"),this.closeSheet("roster")}openRoster(){this.toggleSheet("roster")}isRosterOpen(){return!!this.rosterSheet&&!this.rosterSheet.hasAttribute("hidden")}updateRoster(e){if(this.rosterList){if(this.rosterList.innerHTML="",!e.length){const t=document.createElement("div");t.className="roster-hint",t.textContent="No minions yet — dig, claim, and open a Portal.",this.rosterList.appendChild(t);return}for(const t of e){const i=document.createElement("button");i.type="button",i.className="roster-row",i.setAttribute("role","listitem"),i.dataset.id=String(t.id),t.knockedOut&&i.classList.add("ko"),t.hp<t.maxHp*.4&&i.classList.add("hurt"),i.innerHTML=`<span class="r-name">${t.name}</span><span class="r-job">${t.job}</span><span class="r-hp">${Math.floor(t.hp)}/${Math.floor(t.maxHp)}</span><span class="r-mood">${Math.floor(t.mood)}</span>`,i.addEventListener("click",()=>{this.onRosterSelect?.(t.id),this.closeSheet("roster")}),this.rosterList.appendChild(i)}}}setActiveTool(e){document.querySelectorAll(".tool").forEach(t=>{t.classList.toggle("active",t.dataset.tool===e)}),Ph.includes(e)?this.btnBuild?.classList.add("active"):(e==="select"||e==="dig"||e==="claim"||e==="fortify")&&this.btnBuild?.classList.remove("active")}updateStats(e,t,i,n,s){const o=Number.isFinite(e)?Math.max(0,e):0,a=Number.isFinite(i)&&i>0?i:1,h=Number.isFinite(t)?Math.max(0,Math.min(a,t)):0;this.goldEl.textContent=String(Math.floor(o)),this.manaEl.textContent=`${Math.floor(h)}/${Math.floor(a)}`;const c=Math.max(0,Math.min(100,h/a*100));this.manaBar.style.width=`${Number.isFinite(c)?c:0}%`,this.workersEl.textContent=String(Math.max(0,n|0)),this.creaturesEl.textContent=String(Math.max(0,s|0))}updateKeepVitals(e){if(this.goldCapEl&&(this.goldCapEl.textContent=`/${Math.floor(e.goldCap)}`),this.heartEl&&(this.heartEl.textContent=`${Math.max(0,Math.ceil(e.heartHp))}`),this.heartBar){const t=e.heartMax>0?Math.max(0,Math.min(100,e.heartHp/e.heartMax*100)):0;this.heartBar.style.width=`${t}%`}if(this.paydayEl){const t=Math.max(0,Math.ceil(e.paydayIn));this.paydayEl.textContent=e.paydayDue>0?`${t}s · ${e.paydayDue}g`:`${t}s`}e.portalCap>0&&(this.creaturesEl.textContent=`${Math.max(0,e.portalCount|0)}/${e.portalCap}`)}setSpellAffordable(e,t){document.querySelectorAll(`.spell[data-spell="${e}"]`).forEach(i=>{i.disabled=!t})}say(e){this.mentorQueue.push(e),this.mentorTimer<=0&&this.popMentor()}sayNow(e){this.mentorQueue.length=0,this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}dismissMentor(){this.mentorTimer=0,this.mentorQueue.length=0,this.mentorEl.classList.remove("visible")}popMentor(){const e=this.mentorQueue.shift();if(!e){this.mentorEl.classList.remove("visible");return}this.mentorText.textContent=e,this.mentorEl.classList.add("visible"),this.mentorTimer=3.8}setTooltip(e){this.tooltipEl.textContent=e}update(e){this.mentorTimer>0&&(this.mentorTimer-=e,this.mentorTimer<=0&&this.popMentor())}showInspector(e){try{const t=(u,f,g,v=f)=>Number.isFinite(u)?Math.max(f,Math.min(g,u)):v,i=t(e.maxHp,1,9999,1),n=t(e.hp,0,i,0),s=t(e.hunger,0,100,0),o=t(e.tired,0,100,0),a=t(e.mood,0,100,50);let h=Number.isFinite(e.efficiency)?e.efficiency:.85;h>1.5&&(h=h/100),h=t(h,0,1.2,.85);const c=Math.round(h*100);this.inspName.textContent=e.held?`${e.kind} (held)`:e.kind,this.inspJob.textContent=e.job||"Idle",this.inspHp.textContent=`${Math.ceil(n)}/${Math.ceil(i)}`;const d=t(n/i*100,0,100,0);this.inspHpBar.style.width=`${d}%`,e.worker?(this.inspHunger.textContent="None",this.inspTired.textContent="None",this.inspHungerRow?.classList.add("insp-na"),this.inspTiredRow?.classList.add("insp-na")):(this.inspHunger.textContent=`${Math.floor(s)}`,this.inspTired.textContent=`${Math.floor(o)}`,this.inspHungerRow?.classList.remove("insp-na"),this.inspTiredRow?.classList.remove("insp-na"));const l=a>=75?"Happy":a>=50?"Content":a>=30?"Grumpy":a>=15?"Angry":"Leaving?";this.inspMood.textContent=`${Math.floor(a)} · ${l}`,this.inspMoodBar.style.width=`${t(a,0,100,0)}%`,this.inspEfficiency.textContent=`${c}%`,this.inspectorEl.classList.remove("hidden")}catch(t){console.warn("[underkeep] showInspector failed",t);try{this.inspectorEl.classList.add("hidden")}catch{}}}hideInspector(){this.inspectorEl.classList.add("hidden")}setObjective(e){this.objectiveEl&&(this.objectiveEl.textContent=e)}setKits(e,t){this.kitsValueEl&&(this.kitsValueEl.textContent=`D${e} · S${t}`)}setWorkerCost(e){this.createWorkerBtn&&(this.createWorkerBtn.classList.contains("tool"),(this.createWorkerBtn.id==="btn-create-worker"||(this.createWorkerBtn.textContent||"").includes("Worker"))&&(this.createWorkerBtn.textContent=`✨ Worker ${e}g`),this.createWorkerBtn.title=`Create Scrabbler (Q) — ${e} gold (cost scales)`)}drawMinimap(e){const t=this.minimap,i=this.minimapCtx;if(!t||!i)return;const n=t.width,s=t.height;i.fillStyle="#0a0806",i.fillRect(0,0,n,s);const o=e.width,a=e.height,h=Math.min(n/o,s/a),c=(n-o*h)/2,d=(s-a*h)/2;for(let f=0;f<a;f++)for(let g=0;g<o;g++){if(!e.exploredAt(g,f))continue;const v=e.kindAt(g,f),m=e.roomAt(g,f);let p="#3a3028";v===0?p="#1a1820":v===1?p="#4a3828":v===2?p="#c0a020":v===3?p="#5a4838":v===4?p="#7a6848":v===5?p="#e04020":v===6?p="#686060":v===7?p="#e05010":v===8?p="#2060a0":v===9||v===10?p="#8a7050":v===11&&(p="#40e0c0"),v===4&&m===8&&(p="#a07840"),v===4&&m===7&&(p="#607080"),v===4&&m===9&&(p="#506070"),v===4&&m===10&&(p="#a04050"),v===4&&m===11&&(p="#406850"),v===4&&m===12&&(p="#c0a040"),v===4&&m===13&&(p="#a04030"),v===4&&m===14&&(p="#c060a0"),i.fillStyle=p,i.fillRect(c+g*h,d+f*h,Math.max(1,h),Math.max(1,h))}const l=c+(e.heartX+.5)*h,u=d+(e.heartY+.5)*h;i.strokeStyle="#ff6040",i.lineWidth=2,i.beginPath(),i.arc(l,u,Math.max(3,h*1.1),0,Math.PI*2),i.stroke(),i.fillStyle="#ff3020",i.beginPath(),i.arc(l,u,Math.max(1.5,h*.45),0,Math.PI*2),i.fill()}showOverlay(e,t,i="Continue",n){this.overlayTitle.textContent=e,this.overlayMsg.textContent=t,document.getElementById("overlay-btn").textContent=i;const s=document.getElementById("overlay-btn-secondary");s&&(n?(s.textContent=n,s.classList.remove("hidden")):s.classList.add("hidden")),this.overlay.classList.remove("hidden")}hideOverlay(){this.overlay.classList.add("hidden")}}const z={start:"The earth awaits your cruelty, Keeper. Dig. Claim. Thrive.",resume:"Welcome back, Keeper. Your dungeon endures — dig on.",newGame:"A fresh Underkeep. The old one is dust.",firstGold:"Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",firstRoom:"A room! How civilized. Your minions prefer beds to sleeping in the mud.",needGold:"The Treasury is too light. You need %g gold.",cannotDig:"That rock laughs at your marks. Earth, gold, and gem seams only.",cannotClaim:"Only freshly dug dirt can be claimed.",cannotFortify:"Fortify soft earth beside your land — never gold, never rock.",cannotRoom:"Rooms sit on claimed flagstones that are still empty.",marksFirst:"Your marks come first. Scrabblers drop chores and go to the tagged earth.",portal:"The Portal hums. Hungry things beyond the veil hear its song.",skitterwing:"A Skitterwing flutters in. Fragile, but it sees what you cannot.",rattlekin:"Rattlekin arrive — bony enthusiasm and questionable hygiene.",emberling:"An Emberling. Do try not to burn down your own treasury.",gravemage:"A Gravemage darkens the Portal. Point them at the Library — research feeds your spells.",researchHeal:"Library research unlocks Heal! Mend your bruised nightmares.",researchDone:"Research rank %r complete. Spells grow sharper in the dark.",levelUp:"Training pays off — a minion levels up!",heroes:"Heroes at the gate! How quaint. Show them the meaning of Underkeep.",worker:"Another Scrabbler clawed into being. Point it at dirt and watch miracles.",heartHurt:"Your Heart bleeds! Protect it, or this story ends poorly.",win:"The heroes fall. The dark endures. For now.",lose:"The Heart is silent. The Underkeep… underwhelms.",slap:"A firm slap. Back to work!",slapAlt:"A firm slap. Morale through violence — classic.",speed:"Haste, my little nightmares. The clock is cruel.",lightning:"Heaven's temper, redirected. Delightful.",heal:"Green fire stitches flesh. The Library earns its keep.",claim:"Claimed land feeds your mana. Ambition has a wattage.",lairBuilt:"A Lair. Beds for the weary and the wounded. Capacity equals tiles.",lairUse:"Minions claim their bedrolls. Tired claws seek the Lair.",bedClaim:"A minion claims a Lair bed.",lairResting:"A minion is resting in the Lair…",lairFull:"Every bed is taken. Expand the Lair or expect cranky minions.",hatcheryBuilt:"A Hatchery. Nest-food grows while you scheme — hungry mouths will come.",hatcheryUse:"Feast! The Hatchery soothes rumbling guts. Work resumes after.",feasting:"Feasting at the Hatchery.",hatcheryHungry:"The nests are bare. Wait for more Hatchery food… or build more nests.",pickUp:"Into the Hand. Drop them where the work is — or slap sense into them.",drop:"Back on their feet. Back to the dirt.",moodLow:"A minion's mood is crumbling. Beds, food, and space — or they may leave.",sluggishDig:"Sluggish claws… mood is dragging the dig.",leaveThreat:"A minion threatens to leave the Underkeep…",doorBuilt:"A wooden door bars the corridor. Heroes hate hinges.",doorOpen:"Door swings open — minions pass; heroes still hesitate if you close it again.",doorClosed:"Door sealed. Heroes bounce. Creatures can pry it open.",sentryBuilt:"Sentry trap armed. Heroes who tread here learn about arrows.",sentryFire:"Twang! The Sentry greets a hero with sharp hospitality.",guardBuilt:"Guard Room raised. Fighters will hold the line when idle.",rallyPlanted:"Rally flag planted! Call to arms — minions hold this tile.",rallyCleared:"Rally flag struck. Back to ordinary scheming.",groupSelect:"Squad marked. Shift-click or drag-box to gather more — then click a tile to attack-move.",attackMove:"Attack-move! Selected fighters advance and engage.",attackHero:"Hunt them down! Fighters surge toward the heroes.",fog:"Beyond the torchlight — unexplored dark. Dig and claim to push the fog back.",autoFortify:"Mark earth with Fortify if you want the walls reinforced. Scrabblers will not brick them on their own.",autoClaim:"Scrabblers claim freshly dug earth on their own. Gold borders mean the land is yours.",lava:"Lava! It cooks the careless. Emberlings laugh; Scrabblers refuse the path — build a bridge.",bridgeWood:"Wooden planks over the fire. Crude, fragrant, and gloriously flammable.",bridgeStone:"Stone bridge — heavier gold, steadier nerves. The lava still sulks beneath.",possess:"Possession! Ride a minion's senses. WASD to steer, Esc to return to the Keeper throne.",possessArm:"Choose a vessel. Click any living minion to Possess them.",possessEnd:"Back in the Keeper's seat. The vessel blinks, confused but intact.",payday:"Payday! %g gold leaves the Treasury — wages keep moods from mutiny.",paydayFail:"Payday failed — the Treasury is empty! Moods crash. Mint gold or expect desertions.",heroesSoon:"Footsteps in the dark… heroes approach. Mark walls, set traps, rally fighters.",heroesImminent:"Steel at the gate! Heroes arrive any moment.",heroEngage:"Heroes clash with your minions — doors and traps earn their keep.",heroDown:"A hero falls. The Underkeep drinks deep.",workshopBuilt:"Workshop raised! Scrabblers craft door and Sentry kits — or pay less gold at the bench.",craftKit:"Workshop finished a %k kit. Place it free from Build.",craftBusy:"Scrabblers hammer in the Workshop. Kits will stack for doors and traps.",missionBrief:"Mission: Survive %w hero waves — or amass %g gold in the Treasury. Protect the Heart.",waveCleared:"Wave %n cleared! Steel will return — prepare for wave %next of %w.",winWaves:"All hero waves broken. The Underkeep endures!",winGold:"Treasury overflows! Gold wins the day — heroes be damned.",workerSpawn:"Scrabbler forged for %g gold. Next costs %n. Point it at dirt!",prisonBuilt:"Prison raised! Knocked-out heroes can be dragged in — or drop them yourself.",tortureBuilt:"Torture Chamber humming. Prisoners will convert into loyal Thornwitches.",graveyardBuilt:"Graveyard consecrated. Corpses and starved captives rise as Bonewretches.",heroKnocked:"Hero knocked out! Drag them to Prison before they fade.",prisonerHeld:"Captive secured in the Prison. Starve them… or convert them.",converting:"Conversion underway — the hero's will cracks.",converted:"A Thornwitch joins your roster. Loyalty tastes like iron.",boneRaised:"A Bonewretch claws up from the Graveyard. Fearless bones.",starvedBones:"The prisoner starved — bones claim them for the dark.",roomSizeBonus:"Room size %n · +%p% efficiency",templeBuilt:"Temple raised. Prayer soothes moods — and may gift a talisman.",combatPitBuilt:"Combat Pit ready. Veterans past training level 4 fight for glory here.",praying:"A minion kneels in the Temple. Mood climbs with the incense.",prayerBuff:"Prayer buff granted — claws steadier, spirits higher.",talismanGift:"A talisman forms in the Temple haze. Keep them close.",combatLevelUp:"%n rises to Combat Pit level %l!",fleeLair:"Wounded minions flee toward the Lair!",dragWounded:"Scrabblers drag the wounded home to their beds.",allyKnocked:"A minion collapses! Scrabblers can haul them to a Lair bed.",sellRoom:"Sold for %g gold. The flagstones remember nothing.",cannotSell:"Nothing to sell — rooms and doors only, never the Heart.",workerRefund:"The Heart reclaims a Scrabbler. %g gold returns to the vault.",slapWork:"A sting of purpose. The Scrabbler digs harder.",slapWitch:"The Thornwitch smiles. Pain is a language she speaks.",slapAnger:"That minion did not enjoy the Hand. Mood sours.",sightArm:"Sight of Evil armed — click the dark to peel the fog.",sightCast:"The veil lifts. What was hidden now belongs to you.",callToArms:"Call to Arms! Fighters muster to the banner.",gemSeam:"A gem seam! It never runs dry — haul until the vault groans.",treasuryFull:"The vault is full. Build more Treasury, or gold stays in their claws.",trainGold:"Training costs gold. Empty coffers mean idle claws.",portalFull:"The Portal is crowded. Expand it — or the veil stays shut.",casinoBuilt:"Wagerden opens. Idle minions will gamble their moods into shape.",gambling:"Dice clatter in the Wagerden. Fortune is a cheap friend.",heartDefend:"Scrabblers defend the Heart! Even workers have teeth when home burns."},mv={idle:"Idle",walk:"Walk",dig:"Dig",attack:"Attack"};function ki(r){const e=Ts[r];return Ac(e.color,e.scale,r)}function _s(r){const e=new Ke,t=r===E.Rock?bc():r===E.Gold||r===E.Gem?Sc():qa(),i=new D(t,kr(r,!1,_.None));return i.castShadow=!0,i.receiveShadow=!0,e.add(i),r===E.Gold&&e.add($a()),r===E.Gem&&e.add(Ya()),e}function gv(r,e=_.None){const t=new Ke,i=new D(Mc(),Di(r,e));return i.receiveShadow=!0,t.add(i),t}function Vt(r){const e=new Ke,t=Xa(r);e.add(t);const i=Pc(r,0);i&&e.add(i);const n=Cc(r);return n&&e.add(n),e}const Yi=["idle","walk","attack"],vv=["idle","walk","dig"],mr=[{id:"scrabbler",name:"Scrabbler",group:"Minions",poses:vv,build:()=>ki(q.Scrabbler)},{id:"skitterwing",name:"Skitterwing",group:"Minions",poses:Yi,build:()=>ki(q.Skitterwing)},{id:"rattlekin",name:"Rattlekin",group:"Minions",poses:Yi,build:()=>ki(q.Rattlekin)},{id:"emberling",name:"Emberling",group:"Minions",poses:Yi,build:()=>ki(q.Emberling)},{id:"gravemage",name:"Gravemage",group:"Minions",poses:Yi,build:()=>ki(q.Gravemage)},{id:"thornwitch",name:"Thornwitch",group:"Minions",poses:Yi,build:()=>ki(q.Thornwitch)},{id:"bonewretch",name:"Bonewretch",group:"Minions",poses:Yi,build:()=>ki(q.Bonewretch)},{id:"hero-knight",name:"Hero Knight",group:"Enemies",poses:Yi,build:()=>ki(q.HeroKnight)},{id:"hero-archer",name:"Hero Archer",group:"Enemies",poses:Yi,build:()=>ki(q.HeroArcher)},{id:"door-closed",name:"Door (closed)",group:"Items",build:()=>xa(qe.Closed)},{id:"door-open",name:"Door (open)",group:"Items",build:()=>xa(qe.Open)},{id:"sentry",name:"Sentry Trap",group:"Items",build:()=>Lc()},{id:"rally",name:"Rally Flag",group:"Items",build:()=>Dc()},{id:"gold-bag",name:"Gold Bag",group:"Items",build:()=>Nc()},{id:"torch",name:"Torch",group:"Items",build:()=>Ec(!1)},{id:"flower-minion",name:"Health Flower",group:"Items",build:()=>ya(!1)},{id:"flower-hero",name:"Hero Health Flower",group:"Items",build:()=>ya(!0)},{id:"keeper-hand",name:"Keeper Hand",group:"Items",build:()=>Uc()},{id:"gold-glitter",name:"Gold Glitter",group:"Items",build:()=>$a()},{id:"gem-glitter",name:"Gem Glitter",group:"Items",build:()=>Ya()},{id:"earth",name:"Earth Wall",group:"Terrain",build:()=>_s(E.Earth)},{id:"rock",name:"Rock",group:"Terrain",build:()=>_s(E.Rock)},{id:"gold-vein",name:"Gold Vein",group:"Terrain",build:()=>_s(E.Gold)},{id:"gem-vein",name:"Gem Seam",group:"Terrain",build:()=>_s(E.Gem)},{id:"fort-wall",name:"Fortified Wall",group:"Terrain",build:()=>Ic()},{id:"dirt",name:"Dirt Floor",group:"Terrain",build:()=>gv(E.Dirt)},{id:"claimed",name:"Claimed Floor",group:"Terrain",build:()=>Xa(_.None)},{id:"heart",name:"Dungeon Heart",group:"Terrain",build:()=>Tc()},{id:"lava",name:"Lava",group:"Terrain",build:()=>Rc()},{id:"water",name:"Water",group:"Terrain",build:()=>kc()},{id:"bridge-wood",name:"Wooden Bridge",group:"Terrain",build:()=>va(!1)},{id:"bridge-stone",name:"Stone Bridge",group:"Terrain",build:()=>va(!0)},{id:"room-treasury",name:"Treasury",group:"Rooms",build:()=>Vt(_.Treasury)},{id:"room-lair",name:"Lair",group:"Rooms",build:()=>Vt(_.Lair)},{id:"room-hatchery",name:"Hatchery",group:"Rooms",build:()=>Vt(_.Hatchery)},{id:"room-training",name:"Training Room",group:"Rooms",build:()=>Vt(_.Training)},{id:"room-library",name:"Library",group:"Rooms",build:()=>Vt(_.Library)},{id:"room-portal",name:"Portal",group:"Rooms",build:()=>Vt(_.Portal)},{id:"room-guard",name:"Guard Room",group:"Rooms",build:()=>Vt(_.Guard)},{id:"room-workshop",name:"Workshop",group:"Rooms",build:()=>Vt(_.Workshop)},{id:"room-prison",name:"Prison",group:"Rooms",build:()=>Vt(_.Prison)},{id:"room-torture",name:"Torture Chamber",group:"Rooms",build:()=>Vt(_.Torture)},{id:"room-graveyard",name:"Graveyard",group:"Rooms",build:()=>Vt(_.Graveyard)},{id:"room-temple",name:"Temple",group:"Rooms",build:()=>Vt(_.Temple)},{id:"room-pit",name:"Combat Pit",group:"Rooms",build:()=>Vt(_.CombatPit)},{id:"room-wagerden",name:"Wagerden",group:"Rooms",build:()=>Vt(_.Casino)}];class xv{constructor(e,t){this.canvas=e,this.gl=t,this.camera=new jt(42,Math.max(1,e.clientWidth)/Math.max(1,e.clientHeight),.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit(),window.addEventListener("resize",()=>this.resize(this.canvas.clientWidth,this.canvas.clientHeight))}root;listEl;poseEl;titleEl;scene=new hc;camera;current=null;entry=null;pose="idle";animT=0;spherical=new C0(5.2,1.12,.55);look=new A(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;prevClear=new Ue;digWall=null;isOpen(){return this.openFlag}catalogCount(){return mr.length}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const e=document.getElementById("hud");e&&(e.hidden=!0),this.canvas.style.cursor="grab",this.entry||this.select(mr[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const e=document.getElementById("hud");e&&(e.hidden=!1)}resize(e,t){this.camera.aspect=Math.max(1,e)/Math.max(1,t),this.camera.updateProjectionMatrix()}tick(e){this.openFlag&&(this.animT+=e,this.autoSpin&&(this.spherical.theta+=e*.55),this.applyPose(e),this.updateCamera())}render(){this.gl.getClearColor(this.prevClear);const e=this.gl.getClearAlpha();this.gl.setClearColor(1313800,1),this.gl.render(this.scene,this.camera),this.gl.setClearColor(this.prevClear,e)}buildScene(){this.scene.background=new Ue(1313800),this.scene.fog=new Na(1313800,14,32),this.scene.add(new vc(16771272,2758672,.9));const e=new Ss(16773328,2.05);e.position.set(4.5,7.5,5.5),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.bias=-4e-4,e.shadow.camera.near=.5,e.shadow.camera.far=28,e.shadow.camera.left=-6,e.shadow.camera.right=6,e.shadow.camera.top=6,e.shadow.camera.bottom=-6,this.scene.add(e);const t=new Ss(8954056,.5);t.position.set(-6,3.5,-2),this.scene.add(t);const i=new Ss(16744512,.38);i.position.set(-2,4,7),this.scene.add(i),this.scene.add(new yc(6967360,.32));const n=new D(new Cs(7.2,48),new X({color:2759700,roughness:.92,metalness:.08}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);const s=new D(new ns(1.55,1.62,48),new Ut({color:12615728,transparent:!0,opacity:.55,side:Lt}));s.rotation.x=-Math.PI/2,s.position.y=.008,this.scene.add(s);const o=new P0(8,16,6963232,3023384);o.position.y=.004;const a=o.material;a.transparent=!0,a.opacity=.32,this.scene.add(o),this.stage=new Ke,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let e="";for(const t of mr){if(t.group!==e){e=t.group;const n=document.createElement("div");n.className="studio-group",n.textContent=t.group,this.listEl.appendChild(n)}const i=document.createElement("button");i.type="button",i.className="studio-item",i.dataset.id=t.id,i.textContent=t.name,i.addEventListener("click",()=>this.select(t.id)),this.listEl.appendChild(i)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("btn-studio-mobile")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",e=>{this.autoSpin=!this.autoSpin,e.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.openFlag){this.close(),e.preventDefault(),e.stopPropagation();return}if(e.key.toLowerCase()==="v"&&!e.ctrlKey&&!e.metaKey&&!e.altKey){const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))return;this.toggle(),e.preventDefault()}})}bindOrbit(){const e=n=>{this.openFlag&&n.target===this.canvas&&(this.dragging=!0,this.dragBtn=n.button,this.lastX=n.clientX,this.lastY=n.clientY,this.canvas.style.cursor="grabbing",this.canvas.setPointerCapture(n.pointerId),n.preventDefault())},t=n=>{if(!this.openFlag||!this.dragging)return;const s=n.clientX-this.lastX,o=n.clientY-this.lastY;if(this.lastX=n.clientX,this.lastY=n.clientY,this.dragBtn===2||n.shiftKey){const a=this.spherical.radius*.0016,h=new A,c=new A;this.camera.matrix.extractBasis(h,c,new A),this.look.addScaledVector(h,-s*a),this.look.addScaledVector(c,o*a)}else this.spherical.theta-=s*.007,this.spherical.phi-=o*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},i=n=>{if(this.dragging){this.dragging=!1,this.openFlag&&(this.canvas.style.cursor="grab");try{this.canvas.releasePointerCapture(n.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",e),window.addEventListener("pointermove",t),window.addEventListener("pointerup",i),this.canvas.addEventListener("contextmenu",n=>{this.openFlag&&n.preventDefault()}),this.canvas.addEventListener("wheel",n=>{if(!this.openFlag)return;n.preventDefault(),n.stopPropagation();const s=this.spherical.radius*(n.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(22,s))},{passive:!1,capture:!0})}select(e){const t=mr.find(i=>i.id===e);t&&(this.entry=t,this.current&&this.stage.remove(this.current),this.current=t.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.stage.add(this.current),this.animT=0,this.pose=t.poses?.[0]??"idle",this.titleEl.textContent=t.name,this.listEl.querySelectorAll(".studio-item").forEach(i=>{i.classList.toggle("on",i.dataset.id===e)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const e=this.entry?.poses;if(!e?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const t of e){const i=document.createElement("button");i.type="button",i.className="studio-pose",i.textContent=mv[t],i.classList.toggle("on",t===this.pose),i.addEventListener("click",()=>{this.pose=t,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(i)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const e=new tn().setFromObject(this.current),t=e.getSize(new A),i=e.getCenter(new A);Number.isFinite(i.y)||i.set(0,.8,0),this.look.copy(i),this.spherical.radius=Math.max(2.2,t.length()*1.15),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const e=new A().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(e),this.camera.lookAt(this.look)}applyPose(e){if(!(!this.current||!this.entry)){if(this.current.userData.portalAnimated){const t=this.current.userData.portalRing,i=this.current.userData.portalCore;if(t&&(t.rotation.y+=e*.8),i){const n=1+Math.sin(this.animT*3)*.04;i.scale.set(n,1,1)}}this.entry.poses?.length&&this.applyCreatureMotion(this.current,this.pose,this.animT,e)}}applyCreatureMotion(e,t,i,n){const s=t==="walk",o=t==="attack",a=t==="dig",h=s?.55:0,c=i*(s?8:0);e.traverse(l=>{const u=l.userData?.walkLimb;if(!u)return;const f=l.userData.baseRot,g=f?.x??0,v=f?.y??0,m=f?.z??0;u==="legL"||u==="armR"?l.rotation.set(g+Math.sin(c)*h,v,m):(u==="legR"||u==="armL")&&l.rotation.set(g+Math.sin(c+Math.PI)*h,v,m)});const d=e.pickaxe;d&&(br(d,i,a),a||(d.visible=this.entry?.id==="scrabbler")),a&&this.entry?.id==="scrabbler"?this.digWall||(this.digWall=_s(E.Gold),this.digWall.position.set(0,0,2.05),this.stage.add(this.digWall)):this.digWall&&(this.stage.remove(this.digWall),this.digWall=null),s?e.position.y=Math.abs(Math.sin(i*8))*.06:o?(e.rotation.x=Math.sin(i*9)*.22,e.position.z=Math.sin(i*9)*.12):(e.position.y=0,e.rotation.x=0,e.position.z=0)}}class Rh{width;height;tiles;heartPos={x:0,y:0};constructor(e=48,t=48){this.width=e,this.height=t,this.tiles=[];for(let i=0;i<t;i++)for(let n=0;n<e;n++)this.tiles.push({x:n,y:i,kind:E.Earth,room:_.None,mark:be.None,fortified:!1,goldAmount:0,claimedProgress:0,digProgress:0,torch:!1,door:qe.None,trap:pt.None,rally:!1,explored:!1});this.generate()}idx(e,t){return t*this.width+e}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}get(e,t){return this.inBounds(e,t)?this.tiles[this.idx(e,t)]:null}worldToTile(e,t){return{x:Math.floor(e/Xe+this.width/2),y:Math.floor(t/Xe+this.height/2)}}tileToWorld(e,t){return{x:(e-this.width/2+.5)*Xe,z:(t-this.height/2+.5)*Xe}}generate(){const e=Math.floor(this.width/2),t=Math.floor(this.height/2);this.heartPos={x:e,y:t};for(let n=0;n<this.height;n++)for(let s=0;s<this.width;s++){const o=this.get(s,n);(s<2||n<2||s>=this.width-2||n>=this.height-2)&&(o.kind=E.Rock)}for(let n=0;n<14;n++){let s=4+Math.floor(Math.random()*(this.width-8)),o=4+Math.floor(Math.random()*(this.height-8));const a=4+Math.floor(Math.random()*8);for(let h=0;h<a;h++){const c=this.get(s,o);c&&c.kind===E.Earth&&(c.kind=E.Gold,c.goldAmount=200+Math.floor(Math.random()*300)),s+=Math.floor(Math.random()*3)-1,o+=Math.floor(Math.random()*3)-1,s=Math.max(3,Math.min(this.width-4,s)),o=Math.max(3,Math.min(this.height-4,o))}}for(let n=0;n<8;n++){let s=5+Math.floor(Math.random()*(this.width-10)),o=5+Math.floor(Math.random()*(this.height-10));if(Math.abs(s-e)<7&&Math.abs(o-t)<7)continue;const a=2+Math.floor(Math.random()*3);for(let h=-a;h<=a;h++)for(let c=-a;c<=a;c++){if(Math.abs(c)+Math.abs(h)>a)continue;const d=this.get(s+c,o+h);d&&d.kind===E.Earth&&(d.kind=E.Rock,d.goldAmount=0)}}for(let n=-3;n<=3;n++)for(let s=-3;s<=3;s++){const o=this.get(e+s,t+n);if(!o)continue;if(s===0&&n===0){o.kind=E.Heart,o.room=_.None;continue}const a=Math.max(Math.abs(s),Math.abs(n));(a<=2||a===3&&s===0&&n===-3)&&(o.kind=E.Claimed,o.claimedProgress=1)}for(let n=t-8;n<t-3;n++)for(let s=e-1;s<=e+1;s++){const o=this.get(s,n);o&&o.kind!==E.Rock&&o.kind!==E.Heart&&(o.kind=E.Claimed,o.claimedProgress=1)}const i=(n,s,o)=>{const a=this.get(n,s);a&&(a.kind===E.Earth||a.kind===E.Gold)&&(a.kind=E.Gold,a.goldAmount=Math.max(a.goldAmount,o),a.fortified=!1)};for(let n=0;n<5;n++)i(e-1+n,t+3,380+n*30);for(let n=0;n<4;n++)i(e+n,t+4,320+n*40);for(let n=0;n<4;n++)i(e+3,t-1+n,360+n*25);for(let n=0;n<3;n++)i(e+4,t+n,300+n*35);this.paintHazardBlob(e-10,t+2,3,E.Lava),this.paintHazardBlob(e-12,t-1,2,E.Lava);for(let n=0;n<5;n++){const s=this.get(e+6+n%2,t+6+Math.floor(n/2));s&&(s.kind===E.Earth||s.kind===E.Gold)&&(s.kind=E.Lava,s.goldAmount=0,s.fortified=!1)}this.paintHazardBlob(e-8,t-8,2,E.Water);{const n=Math.min(this.width-6,e+9),s=Math.max(4,t+1);for(const[o,a]of[[0,0],[1,0],[0,1],[1,1],[2,0]]){const h=this.get(n+o,s+a);h&&(h.kind===E.Earth||h.kind===E.Gold)&&(h.kind=E.Gem,h.goldAmount=9999,h.fortified=!1)}}this.refreshTorches(),this.seedExploration()}paintHazardBlob(e,t,i,n){const s=this.heartPos.x,o=this.heartPos.y;for(let a=-i;a<=i;a++)for(let h=-i;h<=i;h++){if(h*h+a*a>i*i+.5)continue;const c=e+h,d=t+a;if(Math.abs(c-s)<5&&Math.abs(d-o)<5)continue;const l=this.get(c,d);l&&(l.kind===E.Earth||l.kind===E.Gold)&&(l.kind=n,l.goldAmount=0,l.fortified=!1,l.digProgress=0,l.room=_.None)}}refreshTorches(){for(const e of this.tiles)e.torch=!1;for(const e of this.tiles){if(e.kind!==E.Claimed&&e.kind!==E.Dirt&&e.kind!==E.Heart||(e.x+e.y)%4!==0)continue;const t=[[1,0],[-1,0],[0,1],[0,-1]];for(const[i,n]of t){const s=this.get(e.x+i,e.y+n);if(s&&(kt(s.kind)||s.kind===E.Rock||s.fortified)){e.torch=!0;break}}}}isSolid(e,t){const i=this.get(e,t);return i?kt(i.kind)||i.kind===E.Rock||i.fortified:!0}isHazard(e,t){const i=this.get(e,t);return!!i&&(i.kind===E.Lava||i.kind===E.Water)}isBridge(e,t){const i=this.get(e,t);return!!i&&(i.kind===E.BridgeWood||i.kind===E.BridgeStone)}isWalkable(e,t,i){const n=this.get(e,t);return!n||n.fortified?!1:!!(n.kind===E.Dirt||n.kind===E.Claimed||n.kind===E.Heart||n.kind===E.BridgeWood||n.kind===E.BridgeStone||i?.allowHazard&&(n.kind===E.Lava||n.kind===E.Water))}canPlaceBridge(e,t){const i=this.get(e,t);return!i||i.kind!==E.Lava&&i.kind!==E.Water?!1:this.neighbors4(e,t).some(n=>!n.fortified&&(n.kind===E.Dirt||n.kind===E.Claimed||n.kind===E.Heart||n.kind===E.BridgeWood||n.kind===E.BridgeStone))}isDiggable(e,t){const i=this.get(e,t);return!(!i||!kt(i.kind)||i.fortified&&i.mark!==be.Dig)}countClaimed(){let e=0;for(const t of this.tiles)(t.kind===E.Claimed||t.kind===E.Heart)&&e++;return e}countRoom(e){let t=0;for(const i of this.tiles)i.room===e&&t++;return t}largestContiguousRoom(e){if(e===_.None)return 0;const t=new Set;let i=0;for(const n of this.tiles){if(n.room!==e)continue;const s=`${n.x},${n.y}`;if(t.has(s))continue;let o=0;const a=[n];for(t.add(s);a.length;){const h=a.pop();o++;for(const c of this.neighbors4(h.x,h.y)){const d=`${c.x},${c.y}`;c.room===e&&!t.has(d)&&(t.add(d),a.push(c))}}o>i&&(i=o)}return i}neighbors4(e,t){const i=[];for(const[n,s]of[[1,0],[-1,0],[0,1],[0,-1]]){const o=this.get(e+n,t+s);o&&i.push(o)}return i}isReachableSolid(e,t){return this.neighbors4(e,t).some(i=>this.isWalkable(i.x,i.y))}findDiggableFace(e,t){const i=this.get(e,t);if(!i||!kt(i.kind))return null;if(this.isReachableSolid(e,t))return{x:e,y:t};const n=new Set([`${e},${t}`]),s=[{x:e,y:t}];let o=0;for(;s.length&&o++<256;){const a=s.shift();for(const h of this.neighbors4(a.x,a.y)){const c=`${h.x},${h.y}`;if(!n.has(c)&&(n.add(c),!!kt(h.kind)&&!(h.fortified&&h.mark!==be.Dig))){if(this.isReachableSolid(h.x,h.y))return{x:h.x,y:h.y};s.push({x:h.x,y:h.y})}}}return null}activeDigWorkKeys(){const e=new Set;for(const t of this.tiles){if(t.mark!==be.Dig||!kt(t.kind))continue;e.add(`${t.x},${t.y}`);const i=this.findDiggableFace(t.x,t.y);i&&e.add(`${i.x},${i.y}`)}return e}hasAdjacentClaimed(e,t){return this.neighbors4(e,t).some(i=>i.kind===E.Claimed||i.kind===E.Heart)}blocksHero(e,t){const i=this.get(e,t);return!!i&&i.door===qe.Closed}canPlaceDoor(e,t){const i=this.get(e,t);if(!i||i.kind!==E.Claimed||i.room!==_.None)return!1;if(i.door!==qe.None)return!0;let n=0,s=0,o=!1;for(const a of this.neighbors4(e,t))(a.fortified||kt(a.kind)||a.kind===E.Rock)&&n++,!a.fortified&&(a.kind===E.Dirt||a.kind===E.Claimed||a.kind===E.Heart||a.kind===E.BridgeWood||a.kind===E.BridgeStone)&&s++,a.room!==_.None&&(o=!0);return n>=1&&s>=1||o}seedExploration(){for(const e of this.tiles)e.explored=!1;for(const e of this.tiles)(e.kind===E.Claimed||e.kind===E.Heart||e.kind===E.Dirt)&&(e.explored=!0);for(const e of this.tiles)if(e.explored&&!(e.kind!==E.Claimed&&e.kind!==E.Heart&&e.kind!==E.Dirt))for(const t of this.neighbors4(e.x,e.y))t.explored=!0}revealTile(e,t){const i=this.get(e,t);return!i||i.explored?!1:(i.explored=!0,!0)}revealAround(e,t,i=1){let n=!1;for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)this.revealTile(e+o,t+s)&&(n=!0);return n}revealFromTerritory(){let e=!1;for(const t of this.tiles)if(!(t.kind!==E.Claimed&&t.kind!==E.Heart&&t.kind!==E.Dirt)){t.explored||(t.explored=!0,e=!0);for(const i of this.neighbors4(t.x,t.y))i.explored||(i.explored=!0,e=!0)}return e}isExplored(e,t){const i=this.get(e,t);return!!i&&i.explored}findPath(e,t,i,n,s){if(e=Math.round(e),t=Math.round(t),i=Math.round(i),n=Math.round(n),!this.inBounds(e,t)||!this.inBounds(i,n))return null;if(e===i&&t===n)return[{x:i,y:n}];const o=(p,y)=>y*this.width+p,a=[{x:e,y:t,f:0}],h=new Map,c=new Map;c.set(o(e,t),0);const d=new Set,l=(p,y)=>Math.abs(p-i)+Math.abs(y-n),u=!!s?.forHero,f=!!s?.allowHazard,g=(p,y)=>u&&this.blocksHero(p,y)?!1:!!(this.isWalkable(p,y,{allowHazard:f})||p===i&&y===n&&this.isDiggable(p,y)||p===i&&y===n&&p===this.heartPos.x&&y===this.heartPos.y),v=(p,y)=>{const w=this.get(p,y);return w?w.kind===E.Lava?4:w.kind===E.Water?3:1:1};let m=0;for(;a.length&&m++<5e3;){a.sort((w,x)=>w.f-x.f);const p=a.shift(),y=o(p.x,p.y);if(!d.has(y)){if(d.add(y),p.x===i&&p.y===n){const w=[{x:i,y:n}];let x=y;for(;h.has(x);){const C=h.get(x);w.push({x:C%this.width,y:Math.floor(C/this.width)}),x=C}return w.reverse(),w}for(const[w,x]of[[1,0],[-1,0],[0,1],[0,-1]]){const C=p.x+w,P=p.y+x;if(!this.inBounds(C,P)||!g(C,P))continue;const k=o(C,P);if(d.has(k))continue;const I=(c.get(y)??1/0)+v(C,P);I<(c.get(k)??1/0)&&(h.set(k,y),c.set(k,I),a.push({x:C,y:P,f:I+l(C,P)}))}}}return null}findPathAdjacent(e,t,i,n,s){let o=null;for(const[a,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const c=i+a,d=n+h;if(!this.isWalkable(c,d)||s?.forHero&&this.blocksHero(c,d))continue;const l=this.findPath(e,t,c,d,s);l&&(!o||l.length<o.length)&&(o=l)}return o}}const Lr="underkeep-save-v1",yv=new Set(Object.values(q)),_v=new Set([E.Rock,E.Earth,E.Gold,E.Dirt,E.Claimed,E.Heart,E.Wall,E.Lava,E.Water,E.BridgeWood,E.BridgeStone,E.Gem]);function ui(r){return typeof r=="number"&&Number.isFinite(r)}function Bc(r,e,t){if(!r||typeof r!="object")return"not-object";const i=r;if(i.v!==1)return"bad-version";if(i.width!==e||i.height!==t)return"size-mismatch";if(!i.heartPos||!ui(i.heartPos.x)||!ui(i.heartPos.y))return"bad-heartPos";if(i.heartPos.x<0||i.heartPos.y<0||i.heartPos.x>=e||i.heartPos.y>=t)return"heartPos-oob";if(!Array.isArray(i.tiles)||i.tiles.length!==e*t)return"bad-tiles-length";if(!ui(i.gold)||i.gold<0)return"bad-gold";if(!ui(i.mana)||i.mana<0)return"bad-mana";if(!Array.isArray(i.creatures))return"bad-creatures";let n=0,s=0;for(let h=0;h<i.tiles.length;h++){const c=i.tiles[h];if(!c||typeof c!="object")return"bad-tile";if(!_v.has(c.kind))return"bad-tile-kind";c.kind===E.Heart&&n++,(c.kind===E.Earth||c.kind===E.Gold)&&s++}if(n<1)return"no-heart-tile";const o=i.heartPos.y*e+i.heartPos.x;if(i.tiles[o]?.kind!==E.Heart)return"heartPos-mismatch";if(!i.gameOver&&s<1)return"no-diggable";let a=0;for(const h of i.creatures){if(!h||typeof h!="object")return"bad-creature";if(!yv.has(h.kind))return"bad-creature-kind";if(!ui(h.x)||!ui(h.y))return"bad-creature-pos";h.kind===q.Scrabbler&&a++}if(!i.gameOver&&a<1)return"no-scrabbler";if(i.cam){const h=i.cam;if(!ui(h.tx)||!ui(h.tz)||!ui(h.cx)||!ui(h.cy)||!ui(h.cz))return"bad-cam"}return null}function wv(r,e){try{const t=localStorage.getItem(Lr);if(!t)return null;const i=JSON.parse(t);if(r!=null&&e!=null){const s=Bc(i,r,e);if(s){console.warn("[underkeep] rejecting save:",s);try{localStorage.removeItem(Lr)}catch{}return null}return i}if(!i||typeof i!="object")return null;const n=i;return n.v!==1||!Array.isArray(n.tiles)||!n.width||!n.height?null:n}catch(t){return console.warn("[underkeep] save parse failed",t),null}}function Mv(r){try{localStorage.setItem(Lr,JSON.stringify(r))}catch{}}function Zi(){try{localStorage.removeItem(Lr)}catch{}}function bv(r){return r.map(e=>({kind:e.kind,room:e.room,mark:e.mark,fortified:e.fortified,goldAmount:e.goldAmount,claimedProgress:e.claimedProgress,digProgress:e.digProgress,torch:e.torch,door:e.door??qe.None,trap:e.trap??pt.None,rally:!!e.rally,explored:!!e.explored}))}function Sv(r,e){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++){const n=r[i],s=e[i];n.kind=s.kind,n.room=s.room,n.mark=s.mark,n.fortified=!!s.fortified,n.goldAmount=s.goldAmount??0,n.claimedProgress=s.claimedProgress??0,n.digProgress=s.digProgress??0,n.torch=!!s.torch,n.door=s.door??qe.None,n.trap=s.trap??pt.None,n.rally=!!s.rally,n.explored=s.explored===void 0?!1:!!s.explored}}const Eo=150,Tv=100,Ao=25,Co=40,Ev=40,Av=100;class Cv{grid;renderer;hud;creatures=[];gold=600;mana=50;tool="select";held=null;selected=null;selectedGroup=[];possessed=null;possessCamBackup=null;possessArmed=!1;sightArmed=!1;callArmed=!1;lavaDmgAcc=0;paydayToastCooldown=0;wavesCleared=0;doorKits=0;sentryKits=0;goldEver=600;minimapAcc=0;nextKitIsDoor=!0;corpses=[];rosterAcc=0;templePrayCount=0;boxSelecting=!1;boxStartClient=null;boxMoved=!1;boxPointerId=null;pendingPrimary=null;marqueeEl=null;heroWarn30=!1;heroWarn10=!1;heroEngageAnnounced=!1;gridDirty=!0;time=0;workerCostScale=0;portalCooldown=0;attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1};heroWaveSpawned=!1;heroWaveTimer=ps;gameOver=!1;won=!1;paint=!1;lastPaint=null;paintStroke=null;pendingPaintTile=null;paintStartClient=null;paintMoved=!1;camTarget=new A(0,0,0);camVel=new A;zoomPending=0;canvas;lastHand=null;keys=new Set;mentored=new Set;touchMode="none";touchStartTime=0;touchStartClient={clientX:0,clientY:0};touchMoved=!1;longPressTimer=null;pinchStartDist=0;pinchStartCamY=0;activeTouches=new Map;ignoreMouseUntil=0;panAccum={x:0,y:0};saveAcc=0;restoredFromSave=!1;hatcheryFood=0;foodRegenAcc=0;bedOwners=new Map;contextRecoveryShown=!1;marksDirty=!1;fogDirty=!1;rebuildCooldown=0;pendingStructuralRebuild=!1;researchProgress=0;researchRank=0;healUnlocked=!1;studio=null;constructor(e){this.canvas=e,this.hud=new pv,this.marqueeEl=document.getElementById("select-marquee"),this.hud.onToolChange=i=>{this.tool=i,i!=="select"&&this.cancelBoxSelect(),this.canvas.style.cursor=i==="select"?"none":"crosshair",i!=="select"&&this.renderer.setKeeperHand(0,0,!1)},this.hud.onSpell=i=>this.castSpell(i),this.hud.onOverlayContinue=()=>{this.gameOver&&(Zi(),location.reload())},this.hud.onNewGame=()=>this.confirmNewGame(),this.hud.onInspectorClose=()=>this.clearSelection(),this.hud.onRosterSelect=i=>this.focusCreatureById(i),this.grid=new Rh(40,40),this.renderer=new fv(e),this.renderer.onContextLost=()=>this.handleContextLost(),this.renderer.onContextRestored=()=>this.handleContextRestored(),this.studio=new xv(e,this.renderer.renderer);let t=!1;try{t=this.bootFromSaveOrFresh()}catch(i){console.error("[underkeep] boot failed — clearing save and starting Intro",i),Zi(),this.resetRuntimeState(),this.startFresh(!0),t=!1}this.bindInput(e),this.canvas.style.cursor=this.tool==="select"?"none":"crosshair",e.addEventListener("mouseleave",()=>this.renderer.setKeeperHand(0,0,!1)),this.rebuild(),this.syncAllEntityMeshes(),t&&this.isPlayableOrEnded()&&this.saveNow(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(i=>i.alive&&i.isWorker).length,this.creatures.filter(i=>i.alive&&!i.isWorker&&!i.isHero).length),this.hud.updateKeepVitals({goldCap:this.vaultCap(),heartHp:this.heartHp,heartMax:bo,paydayIn:cn,paydayDue:this.paydayDueNow(),portalCount:this.attractedCount(),portalCap:this.portalCap()}),this.markReady()}markReady(){document.body.classList.remove("booting")}handleContextLost(){this.contextRecoveryShown||(this.contextRecoveryShown=!0,this.hud.showOverlay("Graphics hiccup","The dungeon view lost its WebGL context (often after heavy digging). Reload to restore — your save is kept.","Reload Dungeon"),this.hud.onOverlayContinue=()=>{location.reload()})}handleContextRestored(){this.contextRecoveryShown=!1,this.gridDirty=!0,this.rebuild(),this.syncAllEntityMeshes(),this.hud.say("The Underkeep re-solidifies. Dig on, Keeper."),this.hud.hideOverlay()}isPlayableOrEnded(){if(this.gameOver)return!0;const e=this.grid.get(this.grid.heartPos.x,this.grid.heartPos.y);return!e||e.kind!==E.Heart||!this.grid.tiles.some(n=>kt(n.kind))?!1:this.creatures.filter(n=>n.alive&&n.isWorker).length>=1}syncAllEntityMeshes(){for(const e of this.creatures)e.alive&&e.syncMesh(this.time)}resetRuntimeState(){for(const e of this.creatures)try{this.renderer?.removeEntityMesh(e.mesh),e.mesh?.parent&&e.mesh.parent.remove(e.mesh)}catch{}this.creatures=[],this.gold=600,this.mana=50,this.tool="select",this.held=null,this.selected=null,this.selectedGroup=[],this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee(),this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1,this.hud.hideInspector(),this.time=0,this.workerCostScale=0,this.portalCooldown=0,this.attracted={skitterwing:!1,rattlekin:!1,emberling:!1,gravemage:!1},this.heroWaveSpawned=!1,this.heroWaveTimer=ps,this.wavesCleared=0,this.doorKits=0,this.sentryKits=0,this.goldEver=600,this.minimapAcc=0,this.nextKitIsDoor=!0,this.gameOver=!1,this.won=!1,this.mentored=new Set,this.wageAcc=0,this.heartHp=bo,this.restoredFromSave=!1,this.hatcheryFood=0,this.foodRegenAcc=0,this.bedOwners.clear(),this.contextRecoveryShown=!1,this.researchProgress=0,this.researchRank=0,this.healUnlocked=!1,this.exitPossession(!0),this.possessArmed=!1,this.sightArmed=!1,this.callArmed=!1,this.lavaDmgAcc=0,this.paydayToastCooldown=0,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=0,this.grid=new Rh(40,40)}bootFromSaveOrFresh(){const e=wv(this.grid.width,this.grid.height);if(!e)return this.startFresh(!0),!1;const t=Bc(e,this.grid.width,this.grid.height);if(t)return console.warn("[underkeep] invalid save on boot:",t),Zi(),this.startFresh(!0),!1;try{this.applySave(e)}catch(i){return console.error("[underkeep] applySave threw",i),Zi(),this.resetRuntimeState(),this.startFresh(!0),!1}return this.isPlayableOrEnded()?(this.restoredFromSave=!0,this.gameOver?this.hud.showOverlay(this.won?"Victory":"Defeat",this.won?z.win+" The Underkeep stands.":z.lose,"Try Again"):this.hud.say(z.resume),!0):(console.warn("[underkeep] restored state not playable — falling back to Intro"),Zi(),this.resetRuntimeState(),this.startFresh(!0),!1)}startFresh(e){this.creatures.length===0&&(this.spawnCreature(q.Scrabbler,this.grid.heartPos.x+1,this.grid.heartPos.y),this.spawnCreature(q.Scrabbler,this.grid.heartPos.x-1,this.grid.heartPos.y),this.spawnCreature(q.Scrabbler,this.grid.heartPos.x,this.grid.heartPos.y+1));const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+6,34,t.z+22),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.start),e&&(this.hud.showOverlay("Mission Briefing",`You are the Keeper of the Underkeep. Dig, claim, raise rooms, and crush heroes — the Heart must not fall. Objective: Survive ${si} hero waves — OR gather ${dn} gold in the Treasury. Workshop kits arm doors & traps.`,"Begin"),this.hud.say(z.missionBrief.replace("%w",String(si)).replace("%g",String(dn))))}mentioneOnce(e,t){this.mentored.has(e)||(this.mentored.add(e),this.hud.say(t))}confirmNewGame(){this.hud.showOverlay("New Game?","This clears your saved dungeon and starts fresh. Hard refresh will no longer restore the old map.","Keep Playing","Erase & Restart");const e=this.hud.onNewGame,t=this.hud.onOverlayContinue;this.hud.onOverlayContinue=()=>{this.hud.onNewGame=e,this.hud.onOverlayContinue=t},this.hud.onNewGame=()=>{Zi();const i=new URL(location.href);i.searchParams.delete("shot"),i.searchParams.delete("pass"),location.replace(i.pathname+i.search+i.hash)}}buildSave(){return{v:1,width:this.grid.width,height:this.grid.height,heartPos:{...this.grid.heartPos},tiles:bv(this.grid.tiles),gold:this.gold,mana:this.mana,creatures:this.creatures.filter(e=>e.alive).map(e=>({kind:e.kind,x:e.x,y:e.y,wx:e.wx,wz:e.wz,hp:e.hp,maxHp:e.maxHp,level:e.level,goldCarried:e.goldCarried,hunger:e.hunger,sleepNeed:e.sleepNeed,trainNeed:e.trainNeed,isHero:e.isHero})),attracted:{...this.attracted},researchProgress:this.researchProgress,researchRank:this.researchRank,healUnlocked:this.healUnlocked,heroWaveSpawned:this.heroWaveSpawned,heroWaveTimer:this.heroWaveTimer,workerCostScale:this.workerCostScale,portalCooldown:this.portalCooldown,time:this.time,wageAcc:this.wageAcc,mentored:[...this.mentored],gameOver:this.gameOver,won:this.won,wavesCleared:this.wavesCleared,doorKits:this.doorKits,sentryKits:this.sentryKits,goldEver:this.goldEver,cam:{tx:this.camTarget.x,tz:this.camTarget.z,cx:this.renderer.camera.position.x,cy:this.renderer.camera.position.y,cz:this.renderer.camera.position.z}}}saveNow(){this.gameOver||this.isPlayableOrEnded()&&Mv(this.buildSave())}applySave(e){if(e.width!==this.grid.width||e.height!==this.grid.height)throw new Error("save size mismatch");Sv(this.grid.tiles,e.tiles),this.grid.heartPos={x:e.heartPos.x,y:e.heartPos.y},this.grid.tiles.some(i=>i.explored)?this.grid.revealFromTerritory():this.grid.seedExploration(),this.gold=e.gold,this.mana=e.mana,this.attracted={skitterwing:!!e.attracted?.skitterwing,rattlekin:!!e.attracted?.rattlekin,emberling:!!e.attracted?.emberling,gravemage:!!e.attracted?.gravemage},this.researchProgress=e.researchProgress??0,this.researchRank=e.researchRank??0,this.healUnlocked=!!e.healUnlocked,this.heroWaveSpawned=!!e.heroWaveSpawned,this.heroWaveTimer=e.heroWaveTimer??ps,this.workerCostScale=e.workerCostScale??0,this.portalCooldown=e.portalCooldown??0,this.time=e.time??0,this.wageAcc=e.wageAcc??0,this.mentored=new Set(e.mentored??[]),this.gameOver=!!e.gameOver,this.won=!!e.won,this.wavesCleared=e.wavesCleared??0,this.doorKits=e.doorKits??0,this.sentryKits=e.sentryKits??0,this.goldEver=e.goldEver??Math.max(e.gold,600),this.heroWaveSpawned&&this.wavesCleared===0&&!this.won&&!this.gameOver&&!(e.creatures??[]).some(i=>i.isHero)&&(this.wavesCleared=1,this.wavesCleared<si&&(this.heroWaveSpawned=!1,this.heroWaveTimer=55,this.heroWarn30=!1,this.heroWarn10=!1));for(const i of this.creatures)this.renderer.removeEntityMesh(i.mesh),i.mesh.parent&&i.mesh.parent.remove(i.mesh);this.creatures=[];for(const i of e.creatures){const n=this.spawnCreature(i.kind,i.x,i.y);Number.isFinite(i.wx)&&Number.isFinite(i.wz)&&(n.wx=i.wx,n.wz=i.wz),n.hp=i.hp,n.maxHp=i.maxHp,n.level=i.level??1,n.goldCarried=i.goldCarried??0,n.hunger=i.hunger??0,n.sleepNeed=i.sleepNeed??0,n.trainNeed=i.trainNeed??0,n.mood=72,n.clampStats(),n.syncMesh(this.time)}const t=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);e.cam&&Number.isFinite(e.cam.tx)&&Number.isFinite(e.cam.tz)&&Number.isFinite(e.cam.cx)&&Number.isFinite(e.cam.cy)&&Number.isFinite(e.cam.cz)&&e.cam.cy>5?(this.camTarget.set(e.cam.tx,0,e.cam.tz),this.renderer.camera.position.set(e.cam.cx,e.cam.cy,e.cam.cz),this.renderer.camera.lookAt(this.camTarget)):(this.camTarget.set(t.x,0,t.z),this.renderer.camera.position.set(t.x+6,34,t.z+22),this.renderer.camera.lookAt(this.camTarget)),this.gridDirty=!0}spawnCreature(e,t,i){const n=new ov(e,t,i,this.grid),s=Ts[e],o=this.renderer.createEntityVisual(e,s.color,s.scale);n.setMesh(o);const a=o;return n.pickaxe=a.pickaxe??null,n.selectRing=a.selectRing??null,n.healthFlower=a.healthFlower??null,n.goldBag=a.goldBag??null,this.renderer.addEntityMesh(o),this.creatures.push(n),n}rebuild(){this.grid.refreshTorches(),this.renderer.rebuildGrid(this.grid),this.gridDirty=!1,this.marksDirty=!1,this.fogDirty=!1,this.pendingStructuralRebuild=!1,this.rebuildCooldown=.22}requestStructuralRebuild(){this.pendingStructuralRebuild=!0,this.gridDirty=!0}flushMarks(){this.marksDirty&&(this.renderer.syncMarkOverlay(this.grid),this.marksDirty=!1)}flushFog(){this.fogDirty&&(this.renderer.syncFogOverlay(this.grid),this.fogDirty=!1)}noteFogChange(e){e&&(this.fogDirty=!0)}safeMood(e,t){const i=Number.isFinite(e.mood)?e.mood:72,n=Number.isFinite(t)?t:i;e.mood=Math.max(0,Math.min(100,n))}pruneSelection(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero),this.selected&&(!this.selected.alive||this.selected.isHero)&&(this.selected=null),this.selected&&!this.selectedGroup.includes(this.selected)&&this.selectedGroup.push(this.selected),!this.selected&&this.selectedGroup.length&&(this.selected=this.selectedGroup[this.selectedGroup.length-1]),this.selectedGroup.length||(this.selected=null,this.hud.hideInspector())}catch(e){console.warn("[underkeep] pruneSelection failed",e),this.selected=null,this.selectedGroup=[];try{this.hud.hideInspector()}catch{}}}bindInput(e){window.addEventListener("keydown",n=>{if(this.studio?.isOpen())return;this.keys.add(n.key.toLowerCase());const s=n.key.toLowerCase();if(n.shiftKey&&!n.metaKey&&!n.ctrlKey){if(s==="h"){n.preventDefault(),this.focusKeepPoint("heart");return}if(s==="f"){n.preventDefault(),this.focusKeepPoint("fight");return}if(s==="o"){n.preventDefault(),this.focusKeepPoint("portal");return}}const o={1:"select",2:"dig",3:"claim",4:"fortify",5:"treasury",6:"lair",7:"hatchery",8:"training",9:"library",0:"portal",g:"guard",u:"workshop",j:"prison",k:"torture",h:"graveyard",m:"temple",c:"combatPit",d:"door",f:"sentry",y:"rally",x:"sell"};if(o[n.key]&&(this.tool=o[n.key],this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="q"&&this.castSpell("createWorker"),n.key.toLowerCase()==="e"&&this.castSpell("speed"),n.key.toLowerCase()==="r"&&this.castSpell("lightning"),n.key.toLowerCase()==="t"&&this.castSpell("heal"),n.key.toLowerCase()==="p"&&this.castSpell("possess"),n.key.toLowerCase()==="i"&&this.castSpell("sight"),n.key.toLowerCase()==="z"&&this.castSpell("callToArms"),n.key.toLowerCase()==="b"&&(this.tool="bridgeWood",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()==="n"&&(this.tool="bridgeStone",this.hud.setActiveTool(this.tool)),n.key.toLowerCase()===" "&&this.held&&(n.preventDefault(),this.dropHeld()),n.key==="Escape"){if(this.possessed){this.exitPossession();return}this.cancelBoxSelect(),this.clearSelection(),this.possessArmed=!1,this.sightArmed=!1,this.callArmed=!1}n.key.toLowerCase()==="l"&&!n.metaKey&&!n.ctrlKey&&(this.refreshRosterUi(!0),this.hud.openRoster())}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),e.addEventListener("contextmenu",n=>n.preventDefault());const t=n=>n.preventDefault();e.addEventListener("gesturestart",t,{passive:!1}),e.addEventListener("gesturechange",t,{passive:!1}),e.addEventListener("mousedown",n=>{if(this.studio?.isOpen()||performance.now()<this.ignoreMouseUntil||this.gameOver)return;const s=this.pointerToTile(n,e);if(!s)return;const o=this.pointerToWorld(n,e)??new A;if(n.button===2){this.cancelBoxSelect(),this.handleSecondaryAt(s.x,s.y,o);return}if(n.button===0){if(this.tool==="select"&&!this.held){const a=this.creatureAt(s.x,s.y,o);if(!a||a.isHero){this.boxSelecting=!0,this.boxMoved=!1,this.boxStartClient={x:n.clientX,y:n.clientY},this.pendingPrimary={tx:s.x,ty:s.y,hit:o.clone(),shift:n.shiftKey};return}this.handlePrimaryAt(s.x,s.y,o,n.shiftKey);return}if(this.tool==="select"){this.handlePrimaryAt(s.x,s.y,o,n.shiftKey);return}this.pendingPaintTile={x:s.x,y:s.y},this.paintStartClient={x:n.clientX,y:n.clientY},this.paintMoved=!1,this.paint=!1,this.lastPaint=null,this.paintStroke=null}}),e.addEventListener("mouseup",n=>{if(!(performance.now()<this.ignoreMouseUntil)){if(this.boxSelecting&&this.boxStartClient){const s=this.boxStartClient;if(this.boxMoved)this.selectCreaturesInScreenBox(e,s.x,s.y,n.clientX,n.clientY,n.shiftKey||!!this.pendingPrimary?.shift);else if(this.pendingPrimary){const o=this.pendingPrimary;this.handlePrimaryAt(o.tx,o.ty,o.hit,o.shift||n.shiftKey)}this.cancelBoxSelect()}this.pendingPaintTile&&this.tool!=="select"&&!this.gameOver&&(this.paint=!0,this.paintStroke=null,this.lastPaint=null,this.paintToward(this.pendingPaintTile)),this.pendingPaintTile=null,this.paintStartClient=null,this.paintMoved=!1,this.paint=!1,this.lastPaint=null,this.paintStroke=null,this.flushMarks()}}),e.addEventListener("mouseleave",()=>{this.boxSelecting&&this.cancelBoxSelect(),this.pendingPaintTile=null,this.paintStartClient=null,this.paintMoved=!1,this.paint=!1,this.lastPaint=null,this.paintStroke=null}),e.addEventListener("mousemove",n=>{if(!this.studio?.isOpen()&&!(performance.now()<this.ignoreMouseUntil)){if(this.updatePointerHover(n,e),this.boxSelecting&&this.boxStartClient&&this.tool==="select"){const s=n.clientX-this.boxStartClient.x,o=n.clientY-this.boxStartClient.y;Math.hypot(s,o)>8&&(this.boxMoved=!0,this.updateMarquee(this.boxStartClient.x,this.boxStartClient.y,n.clientX,n.clientY))}if(this.pendingPaintTile&&this.tool!=="select"&&this.paintStartClient){const s=n.clientX-this.paintStartClient.x,o=n.clientY-this.paintStartClient.y;Math.hypot(s,o)>7&&(this.paint=!0,this.paintMoved=!0,this.paintToward(this.pendingPaintTile),this.pendingPaintTile=null)}if(this.paint&&this.tool!=="select"){const s=this.pointerToTile(n,e);if(!s)return;this.paintToward(s)}if(this.held)try{const s=this.pointerToWorld(n,e);s&&Number.isFinite(s.x)&&Number.isFinite(s.z)&&(this.held.wx+=(s.x-this.held.wx)*.42,this.held.wz+=(s.z-this.held.wz)*.42)}catch(s){console.warn("[underkeep] held follow failed",s)}}}),e.addEventListener("wheel",n=>{this.studio?.isOpen()||(n.preventDefault(),this.zoomPending+=-Math.sign(n.deltaY)*1.8)},{passive:!1}),e.addEventListener("touchstart",n=>{if(this.studio?.isOpen())return;n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++){const a=n.changedTouches[o];this.activeTouches.set(a.identifier,{clientX:a.clientX,clientY:a.clientY})}const s=[...this.activeTouches.values()];if(s.length>=2){this.clearLongPress();const[o,a]=s;if(this.pinchStartDist=Math.hypot(o.clientX-a.clientX,o.clientY-a.clientY),this.pinchStartCamY=this.renderer.camera.position.y,this.touchMode==="tap"&&!this.touchMoved&&performance.now()-this.touchStartTime<280){const h=this.pointerToTile(this.touchStartClient,e);h&&this.handleSecondaryAt(h.x,h.y),this.touchMode="none",this.activeTouches.clear();return}this.touchMode="pinch",this.paint=!1;return}if(s.length===1){const o=s[0];this.touchStartClient={clientX:o.clientX,clientY:o.clientY},this.touchStartTime=performance.now(),this.touchMoved=!1,this.panAccum={x:0,y:0},this.touchMode="tap",this.clearLongPress(),this.longPressTimer=window.setTimeout(()=>{if(this.touchMode!=="tap"||this.touchMoved)return;this.touchMode="longpress";const a=this.pointerToTile(this.touchStartClient,e);a&&this.handleSecondaryAt(a.x,a.y);try{navigator.vibrate?.(15)}catch{}},450)}},{passive:!1}),e.addEventListener("touchmove",n=>{if(this.studio?.isOpen())return;n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let d=0;d<n.changedTouches.length;d++){const l=n.changedTouches[d];this.activeTouches.set(l.identifier,{clientX:l.clientX,clientY:l.clientY})}const s=[...this.activeTouches.values()];if(this.touchMode==="pinch"||s.length>=2){if(this.clearLongPress(),this.touchMode="pinch",s.length>=2){const[d,l]=s,u=Math.hypot(d.clientX-l.clientX,d.clientY-l.clientY);if(this.pinchStartDist>0){const f=u/this.pinchStartDist,g=this.renderer.camera,v=dl.clamp(this.pinchStartCamY/f,10,48),m=v-g.position.y;if(Math.abs(m)>.01){const p=new A;g.getWorldDirection(p),g.position.y=v;const y=m*.35;g.position.x+=p.x*-y,g.position.z+=p.z*-y,g.lookAt(this.camTarget.x,0,this.camTarget.z)}}}return}if(s.length!==1)return;const o=s[0],a=o.clientX-this.touchStartClient.clientX,h=o.clientY-this.touchStartClient.clientY,c=Math.hypot(a,h);if(!this.touchMoved&&c>12)if(this.touchMoved=!0,this.clearLongPress(),this.tool!=="select"&&!this.held){this.touchMode="paint",this.paint=!0;const d=this.pointerToTile(o,e);d&&(this.applyTool(d.x,d.y),this.lastPaint={...d})}else this.held?this.touchMode="tap":this.touchMode="pan";if(this.touchMode==="paint"){const d=this.pointerToTile(o,e);d&&(this.paintToward(d),this.updatePointerHover(o,e))}else if(this.touchMode==="pan"){const d=o.clientX-(this.touchStartClient.clientX+this.panAccum.x),l=o.clientY-(this.touchStartClient.clientY+this.panAccum.y);this.panAccum.x=a,this.panAccum.y=h,this.panCameraByScreen(-d,-l)}else if(this.held){try{const d=this.pointerToWorld(o,e);d&&Number.isFinite(d.x)&&Number.isFinite(d.z)&&(this.held.wx+=(d.x-this.held.wx)*.42,this.held.wz+=(d.z-this.held.wz)*.42)}catch{}this.updatePointerHover(o,e)}else this.updatePointerHover(o,e)},{passive:!1}),e.addEventListener("touchend",n=>{n.preventDefault(),this.ignoreMouseUntil=performance.now()+600;for(let o=0;o<n.changedTouches.length;o++)this.activeTouches.delete(n.changedTouches[o].identifier);if(this.touchMode==="pinch"){this.activeTouches.size<2&&(this.touchMode=this.activeTouches.size===1?"pan":"none",this.pinchStartDist=0),this.activeTouches.size===0&&(this.touchMode="none",this.paint=!1,this.lastPaint=null,this.paintStroke=null);return}if(this.activeTouches.size>0)return;const s=this.touchMode;if(this.clearLongPress(),s==="tap"&&!this.touchMoved&&!this.gameOver){const o=this.pointerToTile(this.touchStartClient,e),a=this.pointerToWorld(this.touchStartClient,e);o&&a&&this.handlePrimaryAt(o.x,o.y,a)}this.touchMode="none",this.paint=!1,this.lastPaint=null,this.paintStroke=null},{passive:!1}),e.addEventListener("touchcancel",n=>{for(let s=0;s<n.changedTouches.length;s++)this.activeTouches.delete(n.changedTouches[s].identifier);this.clearLongPress(),this.touchMode="none",this.paint=!1,this.lastPaint=null,this.paintStroke=null,this.pinchStartDist=0});const i=document.getElementById("pan-zone");if(i){let n=null;i.addEventListener("touchstart",s=>{s.preventDefault();const o=s.changedTouches[0];n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchmove",s=>{s.preventDefault();const o=s.changedTouches[0];if(!n){n={x:o.clientX,y:o.clientY};return}this.panCameraByScreen(-(o.clientX-n.x),-(o.clientY-n.y)),n={x:o.clientX,y:o.clientY}},{passive:!1}),i.addEventListener("touchend",()=>{n=null}),i.addEventListener("touchcancel",()=>{n=null})}}clearLongPress(){this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}handlePrimaryAt(e,t,i,n=!1){try{if(this.tool==="select"){if(this.possessed){this.possessMoveTo(e,t);return}if(this.held){this.dropHeldAt(e,t);return}if(this.sightArmed){this.sightArmed=!1,this.castSightAt(e,t);return}if(this.callArmed){this.callArmed=!1,this.musterAt(e,t);return}const s=this.creatureAt(e,t,i);if(this.possessArmed&&s&&!s.isHero){if(this.possessArmed=!1,this.mana<On){this.hud.say("Not enough mana to Possess.");return}this.mana-=On,this.enterPossession(s);return}if(s&&!s.isHero&&n){this.toggleSelectCreature(s);return}if(s&&s.isHero&&(s.knockedOut||s.isPrisoner)){this.pickUp(s);return}if(s&&s.isHero&&!s.knockedOut&&!s.isPrisoner&&this.selectedGroup.some(o=>o.alive&&!o.isWorker)){this.issueAttackMove(s.x,s.y,!0);return}if(s&&!s.isHero){this.selectCreature(s),this.pickUp(s);return}if(this.selectedGroup.some(o=>o.alive&&!o.held)&&(this.grid.isWalkable(e,t)||this.grid.get(e,t)?.kind===E.Heart)){this.issueAttackMove(e,t,!1);return}this.clearSelection()}else this.paint=!0,this.lastPaint=null,this.paintStroke=null,this.paintToward({x:e,y:t})}catch(s){console.warn("[underkeep] primary input failed",s)}}handleSecondaryAt(e,t,i){try{if(this.tool==="select"){let s=null;if(this.held&&!this.held.isHero?s=this.held:(s=this.creatureAt(e,t,i),(!s||s.isHero)&&this.selected&&this.selected.alive&&!this.selected.isHero&&(s=this.selected)),s&&!s.isHero){s.held||this.selectCreature(s),this.slap(s);return}}else if(this.held){this.dropHeld();return}const n=this.grid.get(e,t);n&&n.mark!==be.None&&(n.mark=be.None,this.marksDirty=!0,this.flushMarks())}catch(n){console.warn("[underkeep] secondary input failed",n)}}updatePointerHover(e,t){const i=this.pointerToTile(e,t);if(!i||!this.grid.inBounds(i.x,i.y)){this.renderer.setHover(0,0,!1),this.renderer.setKeeperHand(0,0,!1);return}const n=this.grid.tileToWorld(i.x,i.y);this.renderer.setHover(n.x,n.z,!0,this.toolColor());const s=this.grid.get(i.x,i.y),o=this.pointerToWorld(e,t);if(this.tool==="select"){const a=o?.x??n.x,h=o?.z??n.z;this.lastHand={x:a,z:h},this.renderer.setKeeperHand(a,h,!0,!!this.held,this.handHoverY(s))}else this.renderer.setKeeperHand(0,0,!1);if(s){let a=s.room!==_.None?` · ${["","Treasury","Lair","Hatchery","Training","Library","Portal","Guard","Workshop","Prison","Torture Chamber","Graveyard","Temple","Combat Pit","Wagerden"][s.room]}`:"";if(s.room===_.Hatchery&&(a+=` · food ${Math.floor(this.hatcheryFood)}`),s.room===_.Workshop&&(a+=` · kits D${this.doorKits}/S${this.sentryKits}`),s.room===_.Lair||s.room===_.Hatchery||s.room===_.Library){const l=this.grid.largestContiguousRoom(s.room),u=ms(l);l>0&&(a+=` · size ${l}`,u>0&&(a+=` · +${Math.round(u*100)}% eff`))}if(s.room===_.Prison){const l=this.creatures.filter(u=>u.alive&&u.isPrisoner).length;a+=` · prisoners ${l}`}if(s.room===_.Graveyard&&(a+=` · corpses ${this.corpses.length}`),s.room===_.Temple&&(a+=` · praying ${this.templePrayCount}`),s.room===_.CombatPit){const l=this.creatures.filter(u=>u.alive&&!u.isHero&&u.job===L.Train&&this.grid.get(u.x,u.y)?.room===_.CombatPit).length;a+=` · sparring ${l}`}if(s.door===qe.Closed&&(a+=" · Door (closed)"),s.door===qe.Open&&(a+=" · Door (open)"),s.trap===pt.Sentry&&(a+=" · Sentry trap"),s.rally&&(a+=" · Rally flag"),s.room===_.Lair){const l=this.grid.countRoom(_.Lair);a+=` · beds ${this.countOccupiedBeds()}/${l}`}const h=s.digProgress>0?` · dig ${Math.floor(s.digProgress*100)}%`:"",c=s.kind===E.Gem?"Gem seam":s.kind===E.Gold?"Gold":s.kind===E.Earth?"Earth":s.kind===E.Rock?"Rock":s.kind===E.Lava?"Lava":s.kind===E.Water?"Water":s.kind===E.BridgeWood?"Wood Bridge":s.kind===E.BridgeStone?"Stone Bridge":E[s.kind];let d=`(${i.x},${i.y}) ${c}${s.fortified?" [fortified]":""}${a}${h}`;if(this.tool==="select"){const l=this.creatureAt(i.x,i.y);l&&!l.isHero?d+=` · ${l.kind} mood ${Math.floor(l.mood)} · eff ${Math.round(l.workEfficiency()*100)}%`:this.held&&(d+=" · drop here")}this.hud.setTooltip(d)}}panCameraByScreen(e,t){const i=this.renderer.camera,n=new A;i.getWorldDirection(n),n.y=0,n.normalize();const s=new A().crossVectors(n,new A(0,1,0)).normalize(),o=i.position.y*.0028,a=s.multiplyScalar(e*o).add(n.multiplyScalar(-t*o));i.position.add(a),this.camTarget.add(a),i.lookAt(this.camTarget.x,0,this.camTarget.z)}zoomBy(e){this.zoomPending+=e}applyZoom(e){const t=this.renderer.camera,i=new A;t.getWorldDirection(i),t.position.addScaledVector(i,e),t.position.y=dl.clamp(t.position.y,10,48),t.lookAt(this.camTarget.x,0,this.camTarget.z)}pointerNdc(e,t){const i=t.getBoundingClientRect();return{nx:(e.clientX-i.left)/i.width*2-1,ny:-((e.clientY-i.top)/i.height)*2+1}}pointerToWorld(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?new A(s.x,0,s.z):null}pointerToTile(e,t){const{nx:i,ny:n}=this.pointerNdc(e,t),s=this.renderer.pickTile(i,n);return s?typeof s.tileX=="number"&&typeof s.tileY=="number"?{x:s.tileX,y:s.tileY}:this.grid.worldToTile(s.x,s.z):null}toolColor(){switch(this.tool){case"dig":return 16763972;case"claim":return 4491519;case"fortify":return 11184810;case"select":return 16764006;case"bridgeWood":return 12615744;case"bridgeStone":return 8425640;default:return 8978278}}creatureAt(e,t,i){let n=null,s=1.85;for(const o of this.creatures){if(!o.alive||o.held)continue;let a=Math.hypot(o.x-e,o.y-t);if(i){const h=Math.hypot(o.wx-i.x,o.wz-i.z)/Xe;a=Math.min(a,h)}a<s&&(s=a,n=o)}return n}hideMarquee(){this.marqueeEl&&(this.marqueeEl.classList.add("hidden"),this.marqueeEl.style.width="0",this.marqueeEl.style.height="0")}cancelBoxSelect(){this.boxSelecting=!1,this.boxStartClient=null,this.boxMoved=!1,this.pendingPrimary=null,this.hideMarquee()}updateMarquee(e,t,i,n){if(!this.marqueeEl)return;const s=Math.min(e,i),o=Math.min(t,n),a=Math.abs(i-e),h=Math.abs(n-t);this.marqueeEl.classList.remove("hidden"),this.marqueeEl.style.left=`${s}px`,this.marqueeEl.style.top=`${o}px`,this.marqueeEl.style.width=`${a}px`,this.marqueeEl.style.height=`${h}px`}clearSelection(){for(const e of this.selectedGroup)e.selected=!1;this.selected&&(this.selected.selected=!1),this.selected=null,this.selectedGroup=[],this.hud.hideInspector()}syncSelectionPrimary(){try{this.selectedGroup=this.selectedGroup.filter(e=>e&&e.alive&&!e.isHero);for(const e of this.creatures)this.selectedGroup.includes(e)||(e.selected=!1);for(const e of this.selectedGroup)e.selected=!0;this.selected=this.selectedGroup.length?this.selectedGroup[this.selectedGroup.length-1]:null,this.refreshInspector()}catch(e){console.warn("[underkeep] syncSelectionPrimary failed",e),this.pruneSelection()}}selectCreature(e){if(!(!e||!e.alive||e.isHero)){for(const t of this.selectedGroup)t.selected=!1;this.selectedGroup=[e],this.selected=e,e.selected=!0,this.refreshInspector()}}toggleSelectCreature(e){if(!e||!e.alive||e.isHero)return;const t=this.selectedGroup.indexOf(e);t>=0?(e.selected=!1,this.selectedGroup.splice(t,1)):(this.selectedGroup.push(e),e.selected=!0,this.mentioneOnce("groupSelect",z.groupSelect)),this.syncSelectionPrimary()}selectCreaturesInScreenBox(e,t,i,n,s,o){try{const a=Math.min(t,n),h=Math.max(t,n),c=Math.min(i,s),d=Math.max(i,s);if(h-a<6&&d-c<6)return;const l=this.renderer.camera,u=e.getBoundingClientRect(),f=[],g=new A;for(const v of this.creatures){if(!v.alive||v.isHero||v.held||!Number.isFinite(v.wx)||!Number.isFinite(v.wz)||(g.set(v.wx,.6,v.wz),g.project(l),!Number.isFinite(g.x)||!Number.isFinite(g.y)))continue;const m=(g.x+1)/2*u.width+u.left,p=(-g.y+1)/2*u.height+u.top;m>=a&&m<=h&&p>=c&&p<=d&&f.push(v)}if(!o){for(const v of this.selectedGroup)v.selected=!1;this.selectedGroup=[]}for(const v of f)this.selectedGroup.includes(v)||this.selectedGroup.push(v),v.selected=!0;f.length&&this.mentioneOnce("groupSelect",z.groupSelect),this.syncSelectionPrimary()}catch(a){console.warn("[underkeep] box select failed",a)}}issueAttackMove(e,t,i=!1){try{this.pruneSelection();const n=this.selectedGroup.filter(o=>o.alive&&!o.isHero&&!o.isWorker&&!o.held);if(!n.length){const o=this.selectedGroup.filter(a=>a.alive&&!a.isHero&&!a.held);if(!o.length)return;for(const a of o)try{a.bedKey&&this.releaseBed(a),a.job=L.Wander,a.jobTarget={x:e,y:t},a.setPath(this.grid.findPath(a.x,a.y,e,t))}catch(h){console.warn("[underkeep] move order unit failed",h)}this.hud.sayNow("Move order issued.");return}let s=0;for(const o of n)try{o.bedKey&&this.releaseBed(o);const a=s%3-1,h=Math.floor(s/3)%2;s++;let c=e+a,d=t+h;this.grid.isWalkable(c,d)||(c=e,d=t),o.job=L.AttackMove,o.jobTarget={x:c,y:d};const l=this.grid.findPath(Number.isFinite(o.x)?o.x:c,Number.isFinite(o.y)?o.y:d,c,d);l?o.setPath(l):o.setPath(null),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+3),o.clampStats()}catch(a){console.warn("[underkeep] attack-move unit failed",a)}try{const o=this.grid.tileToWorld(e,t);Number.isFinite(o.x)&&Number.isFinite(o.z)&&this.renderer.spawnFx(new A(o.x,.9,o.z),i?16736320:16763972,.55)}catch{}this.hud.sayNow(i?z.attackHero:z.attackMove),this.refreshInspector()}catch(n){console.warn("[underkeep] issueAttackMove failed",n)}}refreshInspector(){try{const e=this.held??this.selected;if(!e||!e.alive){this.hud.hideInspector();return}e.clampStats();const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch",hero_knight:"Hero Knight",hero_archer:"Hero Archer"},i=typeof e.job=="string"&&e.job.length>0?e.job:"idle",n=e.held?"Held":e.isPrisoner?e.convertProgress>0?`Converting ${Math.floor(e.convertProgress)}%`:"Prisoner":e.knockedOut?"Knocked out":i===L.AttackMove?"Attack":i===L.Pray?"Praying":i===L.DragWounded?"Dragging wounded":i===L.Flee?"Fleeing":i.charAt(0).toUpperCase()+i.slice(1),s=this.selectedGroup.filter(a=>a.alive).length,o=t[e.kind]??String(e.kind);this.hud.showInspector({kind:s>1?`${o} (+${s-1})`:o,job:s>1?`${n} · squad ${s}`:n,hp:e.hp,maxHp:e.maxHp,hunger:e.hunger,tired:e.sleepNeed,mood:e.mood,efficiency:e.workEfficiency(),held:e.held,worker:e.isWorker})}catch(e){console.warn("[underkeep] refreshInspector failed",e)}}paintToward(e){if(this.lastPaint){const t=Math.max(Math.abs(e.x-this.lastPaint.x),Math.abs(e.y-this.lastPaint.y));if(t===0||t>2)return;if(t===2){const i=this.lastPaint.x+Math.sign(e.x-this.lastPaint.x),n=this.lastPaint.y+Math.sign(e.y-this.lastPaint.y);(i!==this.lastPaint.x||n!==this.lastPaint.y)&&this.applyTool(i,n)}}this.applyTool(e.x,e.y),this.lastPaint={...e}}handHoverY(e){return e?e.kind===E.Rock?7.4:kt(e.kind)||e.fortified?6.6:4.6:4.6}applyMarkStroke(e,t){this.paint?(this.paintStroke||(this.paintStroke=e.mark===t?"clear":"set"),e.mark=this.paintStroke==="clear"?be.None:t):e.mark=t,this.marksDirty=!0,this.flushMarks()}applyTool(e,t){const i=this.grid.get(e,t);if(i)if(this.tool==="sell")this.sellAt(e,t);else if(this.tool==="dig")kt(i.kind)?(i.fortified&&(i.fortified=!1),this.applyMarkStroke(i,be.Dig),i.digProgress<=0&&(i.digProgress=0)):!this.lastPaint&&i.kind===E.Rock&&this.hud.sayNow(z.cannotDig);else if(this.tool==="claim")i.kind===E.Dirt?this.applyMarkStroke(i,be.Claim):!this.lastPaint&&i.kind!==E.Claimed&&i.kind!==E.Heart&&this.hud.sayNow(z.cannotClaim);else if(this.tool==="fortify")i.kind===E.Earth&&this.grid.hasAdjacentClaimed(e,t)?this.applyMarkStroke(i,be.Fortify):!this.lastPaint&&(i.kind===E.Gold||i.kind===E.Gem||i.kind===E.Rock||i.fortified)&&this.hud.sayNow(z.cannotFortify);else if(this.tool==="bridgeWood"||this.tool==="bridgeStone")this.placeBridge(e,t,this.tool==="bridgeStone");else if(this.tool==="door"){if(this.grid.canPlaceDoor(e,t))if(i.door===qe.None){if(!this.spendDoorOrSentry("door"))return;i.door=qe.Closed,this.requestStructuralRebuild(),this.mentioneOnce("doorBuilt",z.doorBuilt),this.saveNow()}else i.door===qe.Closed?(i.door=qe.Open,this.requestStructuralRebuild(),this.hud.say(z.doorOpen),this.saveNow()):(i.door=qe.Closed,this.requestStructuralRebuild(),this.hud.say(z.doorClosed),this.saveNow())}else if(this.tool==="sentry"){if(i.kind===E.Claimed&&i.trap===pt.None){if(!this.spendDoorOrSentry("sentry"))return;i.trap=pt.Sentry,this.requestStructuralRebuild(),this.mentioneOnce("sentryBuilt",z.sentryBuilt),this.saveNow()}}else if(this.tool==="rally"){if(i.kind===E.Claimed){if(i.rally){i.rally=!1,this.hud.say(z.rallyCleared),this.requestStructuralRebuild(),this.saveNow();return}if(this.gold<cr)return;this.gold-=cr;for(const n of this.grid.tiles)n.rally=!1;i.rally=!0,this.requestStructuralRebuild(),this.hud.say(z.rallyPlanted);for(const n of this.creatures)if(!(!n.alive||n.isHero||n.isWorker||n.held||n===this.possessed)&&this.isMusterFighter(n)){n.job=L.Guard,n.jobTarget={x:e,y:t};const s=this.grid.findPath(n.x,n.y,e,t);s&&n.setPath(s)}this.saveNow()}}else{const s={treasury:_.Treasury,lair:_.Lair,hatchery:_.Hatchery,training:_.Training,library:_.Library,portal:_.Portal,guard:_.Guard,workshop:_.Workshop,prison:_.Prison,torture:_.Torture,graveyard:_.Graveyard,temple:_.Temple,combatPit:_.CombatPit,casino:_.Casino}[this.tool];if(s){if(i.kind!==E.Claimed||i.room!==_.None){this.lastPaint||this.hud.sayNow(z.cannotRoom);return}const o=wh[s];if(this.gold<o){this.lastPaint||this.hud.sayNow(z.needGold.replace("%g",String(o)));return}this.gold>=o&&(this.gold-=o,i.room=s,this.requestStructuralRebuild(),this.mentioneOnce("firstRoom",z.firstRoom),s===_.Portal&&this.mentioneOnce("portal",z.portal),s===_.Lair&&this.mentioneOnce("lairBuilt",z.lairBuilt),s===_.Hatchery&&(this.mentioneOnce("hatcheryBuilt",z.hatcheryBuilt),this.hatcheryFood=Math.max(this.hatcheryFood,6)),s===_.Guard&&this.mentioneOnce("guardBuilt",z.guardBuilt),s===_.Workshop&&this.mentioneOnce("workshopBuilt",z.workshopBuilt),s===_.Prison&&this.mentioneOnce("prisonBuilt",z.prisonBuilt),s===_.Torture&&this.mentioneOnce("tortureBuilt",z.tortureBuilt),s===_.Graveyard&&this.mentioneOnce("graveyardBuilt",z.graveyardBuilt),s===_.Temple&&this.mentioneOnce("templeBuilt",z.templeBuilt),s===_.CombatPit&&this.mentioneOnce("combatPitBuilt",z.combatPitBuilt),s===_.Casino&&this.mentioneOnce("casinoBuilt",z.casinoBuilt),this.saveNow())}}}pickUp(e){try{if(!e||!e.alive||e.isHero&&!e.knockedOut&&!e.isPrisoner)return;e.bedKey&&this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null,e.clampStats(),e.held=!0,e.setPath(null),e.job=L.Idle,e.jobTarget=null,e.workTimer=0,this.held=e,this.selectCreature(e);const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;this.renderer.spawnFx(new A(t,1,i),16768392,.45),this.mentioneOnce("pickUp",z.pickUp),this.refreshInspector()}catch(t){console.warn("[underkeep] pickUp failed",t);try{e&&(e.held=!1,this.held===e&&(this.held=null))}catch{}}}dropHeld(){if(!this.held)return;const e=this.grid.worldToTile(this.held.wx,this.held.wz);this.dropHeldAt(e.x,e.y)}dropHeldAt(e,t){const i=this.held;if(i)try{if(!this.grid.isWalkable(e,t)&&this.grid.get(e,t)?.kind!==E.Heart){let a=!1;for(let h=0;h<4&&!a;h++)for(let c=-h;c<=h&&!a;c++)for(let d=-h;d<=h&&!a;d++)this.grid.isWalkable(e+d,t+c)&&(e=e+d,t=t+c,a=!0);if(!a)return}i.held=!1,i.x=e,i.y=t;const n=this.grid.tileToWorld(e,t);i.wx=n.x,i.wz=n.z;const s=this.grid.get(e,t)?.kind;if(i.isWorker&&s===E.Heart){const a=this.workerRefundAmount();this.workerCostScale=Math.max(0,this.workerCostScale-1);const h=this.addGold(a);this.hud.sayNow(z.workerRefund.replace("%g",String(h))),this.renderer.spawnFx(new A(n.x,1.1,n.z),16769152,.8),i.alive=!1;try{this.renderer.removeEntityMesh(i.mesh)}catch{}this.held=null,this.refreshInspector(),this.hud.setWorkerCost(this.workerCost());return}const o=this.grid.get(e,t);if(i.isHero&&(i.knockedOut||i.isPrisoner)&&o?.room===_.Prison){this.imprisonCreature(i,e,t),this.held=null,this.refreshInspector();return}if(i.isHero&&(i.knockedOut||i.isPrisoner)&&o?.room===_.Torture){this.imprisonCreature(i,e,t),i.convertProgress=Math.max(i.convertProgress,25),this.hud.sayNow(z.converting),this.held=null,this.refreshInspector();return}if(!i.isHero&&i.knockedOut&&o?.room===_.Lair){i.knockedOut=!1,i.hp=Math.max(i.hp,Math.floor(i.maxHp*.25)),i.job=L.Sleep,i.jobTarget={x:e,y:t},i.bedKey=`${e},${t}`,this.bedOwners.set(i.bedKey,i.id),i.setPath(null),this.hud.sayNow(z.lairResting),this.held=null,this.refreshInspector();return}if(!i.isHero){const a=o?.room===_.CombatPit;this.creatures.some(c=>c.alive&&c!==i&&c.isHero!==i.isHero&&!c.knockedOut&&!c.isPrisoner&&Math.hypot(c.x-e,c.y-t)<2.5)&&!a&&(i.stunTimer=1.5),this.safeMood(i,(Number.isFinite(i.mood)?i.mood:72)+4)}this.held=null,i.clampStats(),this.mentioneOnce("drop",z.drop),this.refreshInspector()}catch(n){console.warn("[underkeep] dropHeldAt failed",n);try{i&&(i.held=!1,i.clampStats()),this.held=null}catch{}}}slap(e){try{if(!e||!e.alive||e.isHero)return;e.clampStats();const t=Number.isFinite(e.wx)?e.wx:0,i=Number.isFinite(e.wz)?e.wz:0;if(this.renderer.spawnFx(new A(t,.7,i),16772744,.7),this.renderer.spawnFx(new A(t,1.15,i),16755268,.55),this.renderer.spawnDigDebris(t,i,16768392),e.isWorker){e.slapWorkBuff=Math.max(e.slapWorkBuff,10),e.speedBuff=Math.max(e.speedBuff,3.2),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+4),this.hud.sayNow(z.slapWork),this.refreshInspector();return}if(e.kind===q.Thornwitch){e.speedBuff=Math.max(e.speedBuff,2.4),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+14),this.hud.sayNow(z.slapWitch),this.refreshInspector();return}this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)-10),e.stunTimer=Math.max(e.stunTimer,.45),this.hud.sayNow(z.slapAnger),this.refreshInspector()}catch(t){console.warn("[underkeep] slap failed",t);try{this.hud.sayNow(z.slap)}catch{}}}spendDoorOrSentry(e){if(e==="door"&&this.doorKits>0)return this.doorKits--,this.hud.sayNow(`Door kit spent (${this.doorKits} left).`),!0;if(e==="sentry"&&this.sentryKits>0)return this.sentryKits--,this.hud.sayNow(`Sentry kit spent (${this.sentryKits} left).`),!0;const t=this.grid.countRoom(_.Workshop)>0,i=e==="door"?wo:Mo,n=t?Math.floor(i*.7):i;return this.gold<n?(this.hud.sayNow(t?`Need ${n}g (Workshop discount) or a ${e} kit.`:`Need ${n} gold — or craft kits in a Workshop.`),!1):(this.gold-=n,t&&this.hud.say(`Workshop discount — ${e} for ${n}g.`),!0)}syncMissionHud(){this.hud.setObjective(`W${this.wavesCleared}/${si} · ${Math.floor(this.gold)}/${dn}g`),this.hud.setKits(this.doorKits,this.sentryKits),this.hud.setWorkerCost(this.workerCost())}updateMinimap(){this.hud.drawMinimap({width:this.grid.width,height:this.grid.height,heartX:this.grid.heartPos.x,heartY:this.grid.heartPos.y,kindAt:(e,t)=>this.grid.get(e,t)?.kind??0,exploredAt:(e,t)=>!!this.grid.get(e,t)?.explored,roomAt:(e,t)=>this.grid.get(e,t)?.room??0})}checkMissionWin(){if(!(this.won||this.gameOver)){if(this.gold>=dn){this.won=!0,this.gameOver=!0,this.hud.sayNow(z.winGold),this.hud.showOverlay("Victory — Gold",z.winGold+" The Underkeep gleams.","Reign Again");return}this.wavesCleared>=si&&(this.won=!0,this.gameOver=!0,this.hud.sayNow(z.winWaves),this.hud.showOverlay("Victory",z.winWaves+" The dark endures.","Reign Again"))}}workerCost(){return Eo+this.workerCostScale*50}workerRefundAmount(){return this.workerCostScale>0?Math.floor((Eo+(this.workerCostScale-1)*50)/2):Math.floor(Eo/2)}vaultCap(){return B0(this.grid.countRoom(_.Treasury))}vaultRoom(){return Math.max(0,this.vaultCap()-this.gold)}addGold(e){const t=Math.max(0,Math.floor(e));if(t<=0)return 0;const i=Math.max(0,this.vaultCap()-this.gold),n=Math.min(t,i);return this.gold+=n,this.gold>this.goldEver&&(this.goldEver=this.gold),n}paydayDueNow(){let e=0;for(const t of this.creatures)!t.alive||t.isHero||t.isWorker||(e+=Ts[t.kind].goldWage);return e}attractedCount(){return this.creatures.filter(e=>e.alive&&!e.isHero&&!e.isWorker).length}portalCap(){return z0(this.grid.countRoom(_.Portal))}sellAt(e,t){const i=this.grid.get(e,t);if(!i)return;if(i.kind===E.Heart){this.lastPaint||this.hud.sayNow(z.cannotSell);return}if(i.door!==qe.None){i.door=qe.None,this.addGold(Math.floor(wo*.5)),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(Math.floor(wo*.5)))),this.saveNow();return}if(i.trap!==pt.None){i.trap=pt.None,this.addGold(Math.floor(Mo*.5)),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(Math.floor(Mo*.5)))),this.saveNow();return}if(i.rally){i.rally=!1,this.addGold(Math.floor(cr*.5)),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(Math.floor(cr*.5)))),this.saveNow();return}if(i.room===_.None){this.lastPaint||this.hud.sayNow(z.cannotSell);return}const n=Math.floor(wh[i.room]*.5);i.room=_.None,this.addGold(n),this.requestStructuralRebuild(),this.hud.sayNow(z.sellRoom.replace("%g",String(n))),this.saveNow()}castSightAt(e,t){if(this.mana<dr){this.hud.sayNow("Not enough mana for Sight of Evil.");return}this.mana-=dr,this.grid.revealAround(e,t,4)&&(this.fogDirty=!0);const n=this.grid.tileToWorld(e,t);this.renderer.spawnFx(new A(n.x,1.4,n.z),8969727,1.1),this.renderer.spawnFx(new A(n.x,.4,n.z),4219072,.7),this.hud.sayNow(z.sightCast)}isMusterFighter(e){return e.kind===q.Rattlekin||e.kind===q.Emberling||e.kind===q.Skitterwing||e.kind===q.Thornwitch||e.kind===q.Bonewretch}musterAt(e,t){if(this.mana<ur){this.hud.sayNow("Not enough mana to Call to Arms.");return}const i=this.grid.get(e,t);if(!(i&&(i.kind===E.Claimed||i.kind===E.Heart))){this.hud.sayNow("Call to Arms needs claimed land."),this.callArmed=!0;return}this.mana-=ur;for(const s of this.grid.tiles)s.rally=!1;i&&i.kind===E.Claimed&&(i.rally=!0),this.requestStructuralRebuild();for(const s of this.creatures)if(!(!s.alive||s.isHero||s.isWorker||s.held||s.knockedOut||s===this.possessed)&&this.isMusterFighter(s)){s.job=L.Guard,s.jobTarget={x:e,y:t};const o=this.grid.findPath(s.x,s.y,e,t);o&&s.setPath(o)}this.hud.sayNow(z.callToArms),this.saveNow()}focusKeepPoint(e){let t=this.grid.heartPos.x,i=this.grid.heartPos.y;if(e==="portal"){const o=this.grid.tiles.find(a=>a.room===_.Portal);if(o)t=o.x,i=o.y;else{this.hud.sayNow("No Portal to focus.");return}}else if(e==="fight"){let o=null,a=1/0;for(const h of this.creatures){if(!h.alive||!(h.job===L.Fight||h.isHero&&!h.knockedOut||h.job===L.AttackMove))continue;const d=Math.hypot(h.x-this.grid.heartPos.x,h.y-this.grid.heartPos.y);d<a&&(a=d,o=h)}if(!o){this.hud.sayNow("No fight to focus.");return}t=Math.round(o.x),i=Math.round(o.y)}const n=this.grid.tileToWorld(t,i);this.camTarget.set(n.x,0,n.z);const s=this.renderer.camera;s.position.set(n.x+4,Math.max(16,s.position.y),n.z+14),s.lookAt(this.camTarget)}castSpell(e){if(!this.gameOver){if(e==="createWorker"){const t=this.workerCost();if(this.gold<t){this.hud.sayNow(`Need ${t} gold to forge a Scrabbler.`);return}const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=i,o=n;for(let d=1;d<6;d++)for(let l=-d;l<=d;l++)for(let u=-d;u<=d;u++)if(this.grid.isWalkable(i+u,n+l)){s=i+u,o=n+l,d=99;break}this.gold-=t,this.workerCostScale++;const a=this.spawnCreature(q.Scrabbler,s,o);a.pulseTint("heal",.9),a.speedBuff=Math.max(a.speedBuff,2.5);const h=this.grid.tileToWorld(s,o);this.renderer.spawnFx(new A(h.x,.6,h.z),8978272,.85),this.renderer.spawnFx(new A(h.x,1.2,h.z),16769152,.7),this.renderer.spawnCareSparks(h.x,h.z,"heal",!0);const c=this.workerCost();this.hud.sayNow(z.workerSpawn.replace("%g",String(t)).replace("%n",String(c))),this.hud.say(z.worker),this.hud.setWorkerCost(c);return}if(e==="speed"){if(this.mana<Ao)return;this.mana-=Ao;for(const t of this.creatures)t.alive&&!t.isHero&&(t.speedBuff=Math.max(t.speedBuff,6));this.hud.say(z.speed);return}if(e==="lightning"){if(this.mana<Co)return;const t=this.creatures.filter(a=>a.alive&&a.isHero&&!a.knockedOut&&!a.isPrisoner);if(!t.length)return;this.mana-=Co;const i=t.reduce((a,h)=>{const c=Math.hypot(a.x-this.grid.heartPos.x,a.y-this.grid.heartPos.y),d=Math.hypot(h.x-this.grid.heartPos.x,h.y-this.grid.heartPos.y);return c<d?a:h}),n=45+this.researchRank*12,s=i.alive;i.takeDamage(n),s&&!i.alive&&(this.grid.countRoom(_.Prison)>0?(i.alive=!0,i.hp=1,i.knockedOut=!0,i.job=L.Idle,i.jobTarget=null,i.setPath(null),this.hud.sayNow(z.heroKnocked)):this.spawnCorpse(i.x,i.y,!0));const o=new A(this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).x,4,this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y).z);this.renderer.spawnLightning(o,new A(i.wx,1,i.wz)),this.hud.say(z.lightning);return}if(e==="heal"){if(!this.healUnlocked){this.hud.say("Heal is sealed. Staff a Library with Gravemages to research it.");return}const t=30;if(this.mana<t)return;this.mana-=t;let i=0;for(const n of this.creatures)!n.alive||n.isHero||n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+35+this.researchRank*8),n.pulseTint("heal",1.1),this.renderer.spawnCareSparks(n.wx,n.wz,"heal",!1),i++);this.hud.say(i?z.heal:"No wounds to mend — for now.");return}if(e==="possess"){if(this.possessed){this.exitPossession();return}if(this.mana<On){this.hud.say("Not enough mana to Possess.");return}const t=(this.held&&this.held.alive&&!this.held.isHero?this.held:null)||(this.selected&&this.selected.alive&&!this.selected.isHero?this.selected:null);if(t){this.mana-=On,this.held===t&&(t.held=!1,this.held=null),this.enterPossession(t);return}this.possessArmed=!0,this.hud.say(z.possessArm),this.hud.sayNow("Possess armed — click a minion to ride their senses. Esc exits.");return}if(e==="sight"){if(this.mana<dr){this.hud.sayNow("Not enough mana for Sight of Evil.");return}this.sightArmed=!0,this.callArmed=!1,this.possessArmed=!1,this.hud.sayNow(z.sightArm);return}if(e==="callToArms"){if(this.mana<ur){this.hud.sayNow("Not enough mana to Call to Arms.");return}this.callArmed=!0,this.sightArmed=!1,this.possessArmed=!1,this.hud.sayNow("Call to Arms armed — click claimed land to plant the banner.");return}}}maxMana(){return Tv+Math.floor(this.grid.countClaimed()*.5)}preparePass4Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(h,c,d=_.None)=>{const l=this.grid.get(h,c);!l||l.kind===E.Heart||(l.kind=E.Claimed,l.claimedProgress=1,l.mark=be.None,l.digProgress=0,l.fortified=!1,l.room=d)};for(let h=e-1;h<=e+5;h++)for(let c=t-1;c<=t+4;c++)i(h,c);i(e+2,t,_.Treasury),i(e+3,t,_.Treasury),i(e+2,t+1,_.Lair),i(e+3,t+1,_.Lair),i(e+2,t+2,_.Training),i(e+3,t+2,_.Training),i(e+4,t,_.Hatchery),i(e+4,t+1,_.Library),i(e+4,t+2,_.Portal);const n=t-3;for(let h=0;h<2;h++){const c=this.grid.get(e-1+h,n);c&&(c.kind=E.Rock,c.fortified=!1,c.mark=be.None,c.room=_.None,c.digProgress=0,c.goldAmount=0)}for(let h=0;h<2;h++){const c=this.grid.get(e+1+h,n);c&&(c.kind=E.Earth,c.fortified=!1,c.mark=be.Dig,c.digProgress=h===0?.4:.15,c.room=_.None,c.goldAmount=0)}for(let h=0;h<3;h++){const c=this.grid.get(e+3+h,n);c&&(c.kind=E.Gold,c.goldAmount=400,c.fortified=!1,c.mark=be.Dig,c.digProgress=.08,c.room=_.None)}for(let h=e-1;h<=e+5;h++)i(h,t-2);const s=this.creatures.filter(h=>h.isWorker&&h.alive),o={x:e+1,y:n};for(let h=0;h<s.length;h++){const c=s[h],d=e+h%3,l=t-2,u=this.grid.tileToWorld(d,l);c.x=d,c.y=l,c.wx=u.x+(h-1)*.15,c.wz=u.z,c.job=L.Dig,c.jobTarget=o,c.workTimer=.25,c.digAnim=.4+h*.35,c.setPath(null);const f=this.grid.tileToWorld(o.x,o.y);c.mesh.lookAt(f.x,c.mesh.position.y,f.z),c.syncMesh(this.time+.5),c.selectRing&&(c.selectRing.visible=!0)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.saveNow();const a=this.grid.tileToWorld(e+2,t);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,24,a.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass5bShot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,h=_.None)=>{const c=this.grid.get(o,a);!c||c.kind===E.Heart||(c.kind=E.Claimed,c.claimedProgress=1,c.mark=be.None,c.digProgress=0,c.fortified=!1,c.room=h)};for(let o=e-1;o<=e+5;o++)for(let a=t-1;a<=t+4;a++)i(o,a);i(e+2,t+1,_.Lair),i(e+3,t+1,_.Lair),i(e+4,t,_.Hatchery),i(e+4,t+1,_.Hatchery),this.hatcheryFood=6,this.spikeNeedsForRoom(_.Lair),this.spikeNeedsForRoom(_.Hatchery);const n=this.creatures.filter(o=>o.isWorker&&o.alive);if(n[0]){const o=n[0],a=e+2,h=t+1,c=this.grid.tileToWorld(a,h);o.x=a,o.y=h,o.wx=c.x,o.wz=c.z,o.hp=o.maxHp*.45,o.sleepNeed=80,o.hunger=10;const d=`${a},${h}`;this.bedOwners.set(d,o.id),o.bedKey=d,o.job=L.Sleep,o.jobTarget={x:a,y:h},o.restHealAcc=1.7,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"heal",!0),o.pulseTint("heal",2.2)}if(n[1]){const o=n[1],a=e+4,h=t,c=this.grid.tileToWorld(a,h);o.x=a,o.y=h,o.wx=c.x,o.wz=c.z,o.hunger=60,o.job=L.Eat,o.jobTarget={x:a,y:h},o.eatAnnounced=!0,o.eatAnim=2.5,o.setPath(null),o.syncMesh(this.time),this.renderer.spawnCareSparks(o.wx,o.wz,"feast",!0),o.pulseTint("feast",2.2)}if(n[2]){const o=n[2],a=this.grid.tileToWorld(e+1,t+2);o.x=e+1,o.y=t+2,o.wx=a.x,o.wz=a.z,o.hunger=5,o.sleepNeed=5,o.job=L.Idle,o.setPath(null)}this.gold=Math.max(this.gold,800),this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild(),this.hud.setTooltip(`(${e+2},${t+1}) Claimed · Lair · beds ${this.countOccupiedBeds()}/2`),this.hud.say(z.feasting),this.hud.say(z.bedClaim),this.hud.say(z.lairResting);const s=this.grid.tileToWorld(e+3,t+1);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,22,s.z+12),this.renderer.camera.lookAt(this.camTarget)}preparePass61Shot(){this.preparePass5bShot();const e=this.creatures.filter(i=>i.isWorker&&i.alive),t=e[2]??e[0];if(t){t.mood=38,t.hunger=55,t.sleepNeed=40,t.hp=t.maxHp*.7,this.selectCreature(t);const i=e.find(s=>s!==t&&s.job!==L.Sleep)??e[1];if(i){this.pickUp(i);const s=this.grid.tileToWorld(t.x,t.y);i.wx=s.x+1.2,i.wz=s.z+.4,i.syncMesh(this.time)}this.refreshInspector();const n=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,18,n.z+11),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.pickUp)}}preparePass61bShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job!==L.Sleep&&s.job!==L.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,this.held=null;for(const s of this.creatures)s.held=!1;this.selectCreature(i);const n=this.grid.tileToWorld(i.x,i.y);if(this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="efficiency")this.hud.sayNow(z.sluggishDig);else{const s=i.mood;this.slap(i),i.mood=s,this.refreshInspector(),e==="both"&&this.hud.sayNow(z.slap)}}preparePass61cShot(e="both"){this.preparePass5bShot(),this.tool="select",this.hud.setActiveTool("select");const t=this.creatures.filter(o=>o.isWorker&&o.alive),i=t.find(o=>o.job!==L.Sleep&&o.job!==L.Eat)??t[0];if(!i)return;i.mood=24,i.hunger=70,i.sleepNeed=55,i.hp=i.maxHp*.65,i.efficiencyWarned=!0,i.clampStats(),this.mana=Math.max(0,this.mana),this.held=null;for(const o of this.creatures)o.held=!1;this.pickUp(i);const n=this.grid.tileToWorld(i.x,i.y);if(i.wx=n.x+.8,i.wz=n.z+.3,i.syncMesh(this.time),this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+2,17,n.z+10),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector(),e==="pick"){this.hud.sayNow(z.sluggishDig),this.refreshInspector();return}const s=i.mood;this.slap(i),i.mood=s,i.clampStats(),this.refreshInspector(),this.hud.sayNow(z.slap)}preparePass5cShot(e="both"){this.preparePass5bShot();const t=this.creatures.filter(s=>s.isWorker&&s.alive),i=t.find(s=>s.job===L.Sleep),n=t.find(s=>s.job===L.Eat);if(i&&(e==="both"||e==="heal")){this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0),i.pulseTint("heal",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(i.wx,i.wz,"heal",!0)}if(n&&(e==="both"||e==="feast")){this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0),n.pulseTint("feast",2.4);for(let s=0;s<2;s++)this.renderer.spawnCareSparks(n.wx,n.wz,"feast",!0)}if(e==="heal"&&i){const s=this.grid.tileToWorld(i.x,i.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.lairResting)}else if(e==="feast"&&n){const s=this.grid.tileToWorld(n.x,n.y);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+2,16,s.z+10),this.renderer.camera.lookAt(this.camTarget),this.hud.say(z.feasting)}}preparePass3Shot(){const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=[];for(let a=e-6;a<=e-3;a++)for(let h=t-1;h<=t+1;h++){const c=this.grid.get(a,h);!c||c.kind===E.Rock||c.kind===E.Heart||(c.kind=E.Claimed,c.claimedProgress=1,c.mark=be.None,c.digProgress=0,c.fortified=!1,i.push({x:a,y:h}))}for(const a of i.slice(0,2)){const h=this.grid.get(a.x,a.y);h.room=_.Treasury}for(let a=t-1;a<=t+1;a++){const h=this.grid.get(e-2,a);h&&h.kind!==E.Heart&&(h.kind=E.Dirt,h.room=_.None,h.mark=be.None)}const n=[{x:e-1,y:t-4},{x:e,y:t-4},{x:e+1,y:t-4},{x:e-1,y:t-5}];for(const[a,h]of n.entries()){const c=this.grid.get(h.x,h.y);c&&(c.kind=E.Earth,c.fortified=!1,c.mark=be.Dig,c.digProgress=a===1?.72:a===0?.45:a===2?.28:.12,c.room=_.None)}for(let a=t-3;a<=t-1;a++)for(let h=e-1;h<=e+1;h++){const c=this.grid.get(h,a);c&&c.kind!==E.Heart&&c.kind!==E.Rock&&(c.kind===E.Earth||c.kind===E.Gold)&&(c.kind=E.Claimed,c.claimedProgress=1,c.mark=be.None,c.digProgress=0)}const s=this.creatures.filter(a=>a.isWorker&&a.alive);for(let a=0;a<s.length;a++){const h=s[a],c=e-1+a%3,d=t-3,l=this.grid.tileToWorld(c,d);h.x=c,h.y=d,h.wx=l.x,h.wz=l.z,h.job=L.Idle,h.jobTarget=n[Math.min(a,n.length-1)],h.workTimer=.15,h.setPath(null),h.job=L.Dig,h.selectRing&&(h.selectRing.visible=!0)}this.grid.refreshTorches(),this.gridDirty=!0,this.rebuild();for(const[a,h]of n.entries()){const c=this.grid.get(h.x,h.y);c&&(c.kind=E.Earth,c.mark=be.Dig,c.digProgress=a===1?.72:a===0?.48:a===2?.3:.15,c.fortified=!1)}this.rebuild();for(const a of n.slice(0,2)){const h=this.grid.tileToWorld(a.x,a.y);this.renderer.spawnDigDebris(h.x,h.z,12615744)}const o=this.grid.tileToWorld(e-2,t-2);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+5,26,o.z+16),this.renderer.camera.lookAt(this.camTarget)}preparePass62aStabShot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(let o=t-5;o<=t+2;o++)for(let a=e-4;a<=e+4;a++){const h=this.grid.get(a,o);!h||h.kind===E.Heart||h.kind===E.Rock||(h.kind===E.Earth||h.kind===E.Gold||h.kind===E.Dirt)&&(h.kind=E.Claimed,h.claimedProgress=1,h.mark=be.None,h.digProgress=0)}const i=[];for(let o=e-5;o<=e+5;o++)i.push({x:o,y:t-6}),i.push({x:o,y:t+4});for(let o=t-5;o<=t+3;o++)i.push({x:e-5,y:o}),i.push({x:e+5,y:o});for(const o of i){const a=this.grid.get(o.x,o.y);!a||a.kind===E.Heart||a.kind===E.Rock||(a.kind=E.Earth,a.fortified=!1,a.mark=be.Dig,a.digProgress=.15+Math.random()*.35,a.room=_.None)}for(;this.creatures.filter(o=>o.alive&&o.isWorker).length<6;)this.spawnCreature(q.Scrabbler,e+1,t+1);const n=this.creatures.filter(o=>o.alive&&o.isWorker);for(let o=0;o<n.length;o++){const a=n[o],h=i[o%i.length],c=this.grid.findPathAdjacent(e,t,h.x,h.y),d=this.grid.tileToWorld(e+o%3-1,t-1);a.wx=d.x,a.wz=d.z,a.x=e+o%3-1,a.y=t-1,a.job=L.Dig,a.jobTarget=h,a.workTimer=.1,c&&a.setPath(c),a.mood=80}this.requestStructuralRebuild(),this.rebuild(),this.renderer.setDigLoad(!0),this.hud.sayNow("Stab dig load — watch for Graphics hiccup. Should stay solid.");const s=this.grid.tileToWorld(e,t-3);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+6,28,s.z+18),this.renderer.camera.lookAt(this.camTarget)}preparePass62Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,h=_.None)=>{const c=this.grid.get(o,a);!c||c.kind===E.Heart||(c.kind=E.Claimed,c.claimedProgress=1,c.room=h,c.mark=be.None,c.digProgress=0)};for(let o=t-2;o<=t+3;o++)for(let a=e-3;a<=e+5;a++)i(a,o);if(i(e-2,t+1,_.Lair),i(e-1,t+1,_.Lair),i(e,t+1,_.Lair),i(e+1,t+1,_.Lair),i(e-2,t+2,_.Hatchery),i(e-1,t+2,_.Hatchery),i(e+2,t+1,_.Training),i(e+3,t+1,_.Training),i(e+2,t+2,_.Training),i(e+3,t+2,_.Training),i(e+4,t+1,_.Library),i(e+5,t+1,_.Library),i(e+4,t+2,_.Library),i(e+5,t+2,_.Library),i(e+4,t-1,_.Portal),i(e+5,t-1,_.Portal),this.hatcheryFood=12,this.gold=400,this.grid.tileToWorld(e+4,t),this.creatures.some(o=>o.kind===q.Skitterwing&&o.alive)||(this.spawnCreature(q.Skitterwing,e+3,t),this.attracted.skitterwing=!0),!this.creatures.some(o=>o.kind===q.Rattlekin&&o.alive)){const o=this.spawnCreature(q.Rattlekin,e+2,t+1);o.trainNeed=60,o.job=L.Train,o.jobTarget={x:e+2,y:t+1},o.workTimer=7.2,o.level=1,this.attracted.rattlekin=!0}if(this.creatures.some(o=>o.kind===q.Emberling&&o.alive)||(this.spawnCreature(q.Emberling,e+3,t+2),this.attracted.emberling=!0),!this.creatures.some(o=>o.kind===q.Gravemage&&o.alive)){const o=this.spawnCreature(q.Gravemage,e+4,t+1);o.job=L.Research,o.jobTarget={x:e+4,y:t+1},this.attracted.gravemage=!0}this.researchProgress=88,this.researchRank=0,this.healUnlocked=!1,this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("A Gravemage has entered the Underkeep."),this.hud.say(z.gravemage);const n=this.grid.tileToWorld(e+2,t+1);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+4,24,n.z+14),this.renderer.camera.lookAt(this.camTarget);const s=this.creatures.find(o=>o.alive&&o.kind===q.Rattlekin);s&&this.selectCreature(s)}preparePass63Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(l,u,f=_.None)=>{const g=this.grid.get(l,u);!g||g.kind===E.Heart||(g.kind=E.Claimed,g.claimedProgress=1,g.room=f,g.mark=be.None,g.digProgress=0,g.door=qe.None,g.trap=pt.None,g.rally=!1,g.fortified=!1)};for(let l=t-3;l<=t+3;l++)for(let u=e-3;u<=e+5;u++)i(u,l);i(e+2,t+1,_.Training),i(e+3,t+1,_.Training),i(e+4,t+1,_.Library),i(e+5,t+1,_.Library),i(e+4,t-1,_.Portal),i(e+5,t-1,_.Portal),i(e-2,t+1,_.Lair),i(e-1,t+1,_.Lair),i(e-2,t+2,_.Hatchery),i(e+2,t+2,_.Guard),i(e+3,t+2,_.Guard);for(const[l,u]of[[e,t-2],[e+1,t-2],[e-1,t-2],[e+2,t-2]]){const f=this.grid.get(l,u);f&&f.kind!==E.Heart&&(f.kind=E.Earth,f.fortified=!0,f.room=_.None,f.door=qe.None)}i(e,t-1),i(e+1,t-1);const n=this.grid.get(e,t-1);n.door=qe.Closed;const s=this.grid.get(e+1,t-1);s.door=qe.Open,i(e,t-3),i(e+1,t-3),i(e,t-4);const o=this.grid.get(e,t-3);o.trap=pt.Sentry;const a=this.grid.get(e+2,t);i(e+2,t),a.rally=!0,this.hatcheryFood=8,this.gold=900;const h=this.spawnCreature(q.HeroKnight,e,t-4);h.job=L.Fight,h.jobTarget={...this.grid.heartPos},this.creatures.some(l=>l.kind===q.Rattlekin&&l.alive)||this.spawnCreature(q.Rattlekin,e+2,t+2),this.creatures.some(l=>l.kind===q.Emberling&&l.alive)||this.spawnCreature(q.Emberling,e+3,t+2);for(const l of this.creatures)if(!(!l.alive||l.isHero||l.isWorker)&&(l.kind===q.Rattlekin||l.kind===q.Emberling)){const u=this.grid.tileToWorld(e+2,t);l.x=e+2,l.y=t,l.wx=u.x+(l.kind===q.Emberling?.35:-.2),l.wz=u.z,l.job=L.Guard,l.jobTarget={x:e+2,y:t},l.setPath(null),l.syncMesh(this.time)}if(!this.creatures.some(l=>l.kind===q.Gravemage&&l.alive)){const l=this.spawnCreature(q.Gravemage,e+4,t+1);l.job=L.Research,l.jobTarget={x:e+4,y:t+1}}this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Doors sealed. Sentry armed. Rally flies — hold the line!"),this.hud.say(z.doorBuilt),this.hud.say(z.sentryBuilt),this.hud.say(z.rallyPlanted),this.hud.setTooltip(`(${e},${t-1}) Claimed · Door (closed)`);const c=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(c.x,0,c.z),this.renderer.camera.position.set(c.x+2,22,c.z+13),this.renderer.camera.lookAt(this.camTarget);const d=this.creatures.find(l=>l.alive&&l.kind===q.Rattlekin);d&&this.selectCreature(d)}preparePass71Shot(e="both"){this.hud.hideOverlay(),this.exitPossession(!0);const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(d,l,u=_.None)=>{const f=this.grid.get(d,l);!f||f.kind===E.Heart||(f.kind=E.Claimed,f.claimedProgress=1,f.room=u,f.mark=be.None,f.digProgress=0,f.door=qe.None,f.trap=pt.None,f.rally=!1,f.fortified=!1,f.explored=!0,f.goldAmount=0)};for(let d=i-2;d<=i+2;d++)for(let l=t-2;l<=t+3;l++)n(l,d);n(t+2,i,_.Treasury),n(t+3,i,_.Treasury),n(t+2,i+1,_.Lair),n(t+3,i+1,_.Training),n(t+2,i+2,_.Library),n(t+3,i+2,_.Portal),n(t-2,i+1,_.Hatchery),n(t-1,i+1,_.Guard);for(let d=t-1;d<=t+4;d++)n(d,i+3);for(let d=t-1;d<=t+4;d++)for(let l=i+4;l<=i+6;l++){const u=this.grid.get(d,l);!u||u.kind===E.Heart||(u.kind=E.Lava,u.room=_.None,u.goldAmount=0,u.fortified=!1,u.mark=be.None,u.explored=!0,u.digProgress=0)}for(let d=t;d<=t+3;d++)n(d,i+7),n(d,i+8);for(const[d,l]of[[t+5,i+1],[t+5,i+2],[t+6,i+1]]){const u=this.grid.get(d,l);u&&(u.kind=E.Gold,u.goldAmount=400,u.explored=!0,u.fortified=!1,u.room=_.None)}for(const[d,l]of[[t-4,i],[t-4,i+1],[t-5,i]]){const u=this.grid.get(d,l);u&&(u.kind=E.Water,u.explored=!0,u.room=_.None,u.goldAmount=0)}n(t-3,i),n(t-3,i+1);const s=this.grid.get(t+1,i+4);s&&(s.kind=E.BridgeWood,s.explored=!0);const o=this.grid.get(t+2,i+5);o&&(o.kind=E.BridgeStone,o.explored=!0),n(t,i-1),this.grid.get(t,i-1).door=qe.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=pt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=e==="payday"?12:900,this.mana=80,this.healUnlocked=!0,this.wageAcc=cn-1.2;const a=this.creatures.filter(d=>d.isWorker&&d.alive);for(;a.length<3;)a.push(this.spawnCreature(q.Scrabbler,t,i));for(let d=0;d<a.length;d++){const l=a[d],u=this.grid.tileToWorld(t-1+d%2,i);l.x=t-1+d%2,l.y=i,l.wx=u.x,l.wz=u.z,l.job=L.Idle,l.setPath(null),l.held=!1,l.mood=70}let h=this.creatures.find(d=>d.kind===q.Emberling&&d.alive);h||(h=this.spawnCreature(q.Emberling,t+1,i+3));{const d=this.grid.tileToWorld(t+1,i+3);h.x=t+1,h.y=i+3,h.wx=d.x,h.wz=d.z,h.job=L.Idle,h.setPath(null),h.mood=75}let c=this.creatures.find(d=>d.kind===q.Rattlekin&&d.alive);if(c||(c=this.spawnCreature(q.Rattlekin,t,i+1)),c.mood=70,c.goldCarried=0,this.creatures.some(d=>d.kind===q.Gravemage&&d.alive)||this.spawnCreature(q.Gravemage,t+2,i+2),this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="possess"&&(this.mana=Math.max(this.mana,On+10),this.enterPossession(h),setTimeout(()=>{try{this.hud.sayNow(z.possess)}catch{}},0)),(e==="lava"||e==="bridge"||e==="both")&&(this.hud.say(z.lava),this.hud.say(z.bridgeWood)),e==="payday")this.gold=8,this.wageAcc=cn,this.payWages(.01),this.hud.sayNow(z.paydayFail),this.hud.setTooltip("Payday — empty Treasury crashes moods");else if(e==="lava"){const d=this.grid.tileToWorld(t+2,i+5);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,16,d.z+11),this.hud.setTooltip("Lava hazards · bridges · gold vein contrast")}else if(e==="bridge"){const d=this.grid.tileToWorld(t+1,i+5);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+1,14,d.z+10),this.hud.setTooltip("Wooden + stone bridges over lava")}else if(e==="possess")this.hud.setTooltip("Possession — FP follow · WASD move · Esc exits");else{const d=this.grid.tileToWorld(t+1,i+4);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+2,18,d.z+12),this.hud.setTooltip("Pass 7.1 — lava · bridges · possess · payday"),this.hud.sayNow("Pass 7.1 live — lava burns, bridges span, Possess rides, payday bites.")}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass72Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(h,c,d=_.None)=>{const l=this.grid.get(h,c);!l||l.kind===E.Heart||(l.kind=E.Claimed,l.claimedProgress=1,l.room=d,l.mark=be.None,l.digProgress=0,l.door=qe.None,l.trap=pt.None,l.rally=!1,l.fortified=!1,l.explored=!0)};for(let h=i-3;h<=i+4;h++)for(let c=t-3;c<=t+5;c++)n(c,h);for(let h=t-1;h<=t+3;h++){const c=this.grid.get(h,i+5);c&&c.kind!==E.Heart&&(c.kind=E.Lava,c.room=_.None,c.explored=!0)}const s=this.grid.get(t+1,i+5);s.kind=E.BridgeWood,s.explored=!0;const o=this.grid.get(t+2,i+5);o.kind=E.BridgeStone,o.explored=!0,n(t+2,i,_.Treasury),n(t+3,i,_.Treasury),n(t+2,i+1,_.Lair),n(t+3,i+1,_.Hatchery),n(t+4,i+1,_.Training),n(t+4,i,_.Library),n(t+5,i,_.Portal),n(t-1,i+1,_.Guard),n(t+2,i+2,_.Workshop),n(t+3,i+2,_.Workshop),n(t+4,i+2,_.Workshop),n(t,i-1),this.grid.get(t,i-1).door=qe.Closed,n(t,i-2),this.grid.get(t,i-2).trap=pt.Sentry;for(let h=t+6;h<=t+9;h++){const c=this.grid.get(h,i);c&&c.kind!==E.Heart&&(c.kind=E.Dirt,c.explored=!0,c.room=_.None)}for(let h=t+10;h<=t+14;h++)for(let c=i-1;c<=i+1;c++){const d=this.grid.get(h,c);d&&(d.explored=!1)}this.gold=e==="mission"?2480:900,this.goldEver=this.gold,this.doorKits=2,this.sentryKits=1,this.wavesCleared=e==="mission"?2:1,this.heroWaveSpawned=!1,this.heroWaveTimer=40,this.mana=80,this.hatcheryFood=6,this.workerCostScale=1;const a=this.creatures.filter(h=>h.isWorker&&h.alive);for(;a.length<4;)a.push(this.spawnCreature(q.Scrabbler,t-1,i));for(let h=0;h<Math.min(2,a.length);h++){const c=a[h],d=t+2+h,l=i+2,u=this.grid.tileToWorld(d,l);c.x=d,c.y=l,c.wx=u.x,c.wz=u.z,c.job=L.Craft,c.jobTarget={x:d,y:l},c.workTimer=3+h,c.setPath(null)}if(this.creatures.some(h=>h.kind===q.Rattlekin&&h.alive)||this.spawnCreature(q.Rattlekin,t-1,i+1),!this.creatures.some(h=>h.kind===q.Emberling&&h.alive)){const h=this.spawnCreature(q.Emberling,t+1,i+5);h.job=L.Idle}if(this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud(),e==="mission")this.hud.showOverlay("Mission Briefing",`Survive ${si} hero waves — OR gather ${dn} gold. Heart must stand.`,"Begin"),this.hud.sayNow(z.missionBrief.replace("%w",String(si)).replace("%g",String(dn))),this.hud.setTooltip(`Mission W${this.wavesCleared}/${si} · Gold ${this.gold}/${dn}`);else if(e==="workshop"){this.hud.sayNow(z.workshopBuilt),this.hud.say(z.craftBusy),this.hud.setTooltip("Workshop — Scrabblers craft Door/Sentry kits");const h=this.grid.tileToWorld(t+3,i+2);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,16,h.z+11)}else if(e==="worker"){const h=this.workerCost();this.gold=Math.max(this.gold,h+50),this.castSpell("createWorker"),this.hud.setTooltip(`Create Scrabbler — ${h}g · cost scales`)}else if(e==="minimap"){this.hud.sayNow("Minimap — explored claim glow, Heart marker, fog beyond."),this.hud.setTooltip("Minimap · explored / claimed / Heart");const h=this.grid.tileToWorld(t+2,i+1);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+3,22,h.z+14)}else{this.hud.sayNow("Pass 7.2 — minimap, mission win, Workshop kits, Scrabbler polish."),this.hud.say(z.workshopBuilt),this.hud.setTooltip("Pass 7.2 — minimap · mission · Workshop · Worker");const h=this.grid.tileToWorld(t+2,i+2);this.camTarget.set(h.x,0,h.z),this.renderer.camera.position.set(h.x+2,18,h.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}focusCreatureById(e){try{const t=this.creatures.find(n=>n.id===e&&n.alive&&!n.isHero);if(!t)return;this.selectCreature(t);const i=this.grid.tileToWorld(t.x,t.y);this.camTarget.set(i.x,0,i.z),this.renderer.camera.position.set(i.x+4,26,i.z+16),this.renderer.camera.lookAt(this.camTarget),this.refreshInspector()}catch(t){console.warn("[underkeep] focusCreatureById failed",t)}}refreshRosterUi(e=!1){try{if(!e&&!this.hud.isRosterOpen())return;const t={scrabbler:"Scrabbler",skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"},i=this.creatures.filter(n=>n.alive&&!n.isHero).map(n=>{const s=typeof n.job=="string"?n.job:"idle";let o=n.held?"Held":n.knockedOut?"Knocked out":s===L.AttackMove?"Attack":s===L.Pray?"Praying":s===L.DragWounded?"Hauling":s.charAt(0).toUpperCase()+s.slice(1);return n.hasTalisman&&(o+=" ✦"),{id:n.id,name:`${t[n.kind]??n.kind} Lv${n.level}`,job:o,hp:n.hp,maxHp:n.maxHp,mood:n.mood,knockedOut:n.knockedOut}});this.hud.updateRoster(i)}catch(t){console.warn("[underkeep] roster ui failed",t)}}preparePass74Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(u,f,g=_.None)=>{const v=this.grid.get(u,f);!v||v.kind===E.Heart||(v.kind=E.Claimed,v.claimedProgress=1,v.room=g,v.mark=be.None,v.digProgress=0,v.door=qe.None,v.trap=pt.None,v.rally=!1,v.fortified=!1,v.explored=!0)};for(let u=i-3;u<=i+5;u++)for(let f=t-3;f<=t+6;f++)n(f,u);n(t-2,i+3,_.Prison),n(t-1,i+3,_.Prison),n(t,i+3,_.Torture),n(t-2,i+5,_.Graveyard),n(t-1,i+5,_.Graveyard),n(t+2,i,_.Treasury),n(t+3,i,_.Treasury);for(let u=t+2;u<=t+5;u++)for(let f=i+1;f<=i+2;f++)n(u,f,_.Lair);for(let u=t-2;u<=t;u++)n(u,i+1,_.Hatchery);n(t+4,i,_.Library),n(t+5,i,_.Library),n(t+5,i+3,_.Portal),n(t+2,i+3,_.Workshop),n(t+3,i+1,_.Training),n(t+4,i+1,_.Training),n(t+2,i+4,_.Temple),n(t+3,i+4,_.Temple),n(t+4,i+4,_.Temple),n(t+5,i+4,_.CombatPit),n(t+5,i+5,_.CombatPit),n(t+4,i+5,_.CombatPit),this.gold=1400,this.goldEver=this.gold,this.mana=80,this.hatcheryFood=8,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0;const s=this.creatures.filter(u=>u.isWorker&&u.alive);for(;s.length<3;)s.push(this.spawnCreature(q.Scrabbler,t-1,i));this.creatures.some(u=>u.kind===q.Rattlekin&&u.alive)||this.spawnCreature(q.Rattlekin,t+1,i),this.creatures.some(u=>u.kind===q.Emberling&&u.alive)||this.spawnCreature(q.Emberling,t+2,i),this.creatures.some(u=>u.kind===q.Gravemage&&u.alive)||this.spawnCreature(q.Gravemage,t+3,i),this.creatures.some(u=>u.kind===q.Thornwitch&&u.alive)||this.spawnCreature(q.Thornwitch,t+1,i+2),this.creatures.some(u=>u.kind===q.Bonewretch&&u.alive)||this.spawnCreature(q.Bonewretch,t-1,i+5);const o=this.creatures.find(u=>u.kind===q.Gravemage&&u.alive);if(o){o.x=t+3,o.y=i+4;const u=this.grid.tileToWorld(o.x,o.y);o.wx=u.x,o.wz=u.z,o.mood=42,o.job=L.Pray,o.jobTarget={x:t+3,y:i+4},o.workTimer=2.8,o.prayerBuff=12,o.setPath(null)}const a=this.creatures.find(u=>u.kind===q.Emberling&&u.alive);if(a){a.x=t+5,a.y=i+4;const u=this.grid.tileToWorld(a.x,a.y);a.wx=u.x,a.wz=u.z,a.level=4,a.trainNeed=80,a.job=L.Train,a.jobTarget={x:t+5,y:i+4},a.workTimer=11.2,a.setPath(null)}const h=this.creatures.find(u=>u.kind===q.Rattlekin&&u.alive);if(h){h.x=t+1,h.y=i+4;const u=this.grid.tileToWorld(h.x,h.y);h.wx=u.x,h.wz=u.z,h.hp=1,h.knockedOut=!0,h.job=L.Idle,h.setPath(null)}const c=s[0];if(c&&h){c.x=t+1,c.y=i+3;const u=this.grid.tileToWorld(c.x,c.y);c.wx=u.x,c.wz=u.z,c.job=L.DragWounded,c.jobTarget={x:h.x,y:h.y},c.workTimer=0;const f=this.grid.findPath(c.x,c.y,h.x,h.y);f&&c.setPath(f)}const d=this.creatures.find(u=>u.kind===q.Thornwitch&&u.alive);if(d){d.x=t,d.y=i+4;const u=this.grid.tileToWorld(d.x,d.y);d.wx=u.x,d.wz=u.z,d.hp=d.maxHp*.28,d.job=L.Flee,d.fleeTimer=3,d.jobTarget={x:t+3,y:i+1};const f=this.grid.findPath(d.x,d.y,t+3,i+1);f&&d.setPath(f)}this.requestStructuralRebuild(),this.rebuild();const l=this.grid.tileToWorld(t+3,i+4);if(this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+3,24,l.z+14),this.renderer.camera.lookAt(this.camTarget),e==="temple"){const u=this.grid.tileToWorld(t+3,i+4);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),o&&this.selectCreature(o),this.hud.setTooltip("Temple — prayer mood buff · talisman hook"),this.hud.sayNow(z.praying)}else if(e==="combatPit"){const u=this.grid.tileToWorld(t+5,i+4);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),a&&this.selectCreature(a),this.hud.setTooltip("Combat Pit — veteran leveling past 4"),this.hud.sayNow(z.combatLevelUp.replace("%n","Emberling").replace("%l","5"))}else if(e==="roster")this.refreshRosterUi(!0),this.hud.openRoster(),this.hud.sayNow("Creature roster — HP · job · mood. Click to focus.");else if(e==="flee"){const u=this.grid.tileToWorld(t+1,i+3);this.camTarget.set(u.x,0,u.z),this.renderer.camera.position.set(u.x+2,20,u.z+12),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Flee / drag wounded → Lair beds"),this.hud.sayNow(z.dragWounded)}else this.refreshRosterUi(!0),this.hud.openRoster(),this.hud.sayNow("Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag wounded."),this.hud.setTooltip("Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag")}preparePass73Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(l,u,f=_.None)=>{const g=this.grid.get(l,u);!g||g.kind===E.Heart||(g.kind=E.Claimed,g.claimedProgress=1,g.room=f,g.mark=be.None,g.digProgress=0,g.door=qe.None,g.trap=pt.None,g.rally=!1,g.fortified=!1,g.explored=!0)};for(let l=i-3;l<=i+5;l++)for(let u=t-3;u<=t+6;u++)n(u,l);for(let l=t-1;l<=t+3;l++){const u=this.grid.get(l,i+6);u&&u.kind!==E.Heart&&(u.kind=E.Lava,u.room=_.None,u.explored=!0)}const s=this.grid.get(t+1,i+6);s.kind=E.BridgeWood,s.explored=!0,n(t+2,i,_.Treasury),n(t+3,i,_.Treasury);for(let l=t+2;l<=t+5;l++)for(let u=i+1;u<=i+2;u++)n(l,u,_.Lair);for(let l=t-2;l<=t;l++)n(l,i+1,_.Hatchery);for(let l=t+4;l<=t+6;l++)n(l,i,_.Library);n(t+5,i+3,_.Portal),n(t-1,i+2,_.Guard),n(t+2,i+3,_.Workshop),n(t+3,i+3,_.Workshop),n(t-2,i+3,_.Prison),n(t-1,i+3,_.Prison),n(t-2,i+4,_.Prison),n(t,i+3,_.Torture),n(t+1,i+3,_.Torture),n(t-2,i+5,_.Graveyard),n(t-1,i+5,_.Graveyard),n(t,i+5,_.Graveyard),n(t,i-1),this.grid.get(t,i-1).door=qe.Closed,n(t,i-2),this.grid.get(t,i-2).trap=pt.Sentry,this.gold=1100,this.goldEver=this.gold,this.doorKits=1,this.sentryKits=1,this.wavesCleared=1,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.mana=70,this.hatcheryFood=8,this.corpses=[{x:t-1,y:i+5,timer:5,fromHero:!0},{x:t,y:i+5,timer:3,fromHero:!1}];const o=this.creatures.filter(l=>l.isWorker&&l.alive);for(;o.length<3;)o.push(this.spawnCreature(q.Scrabbler,t-1,i));for(const l of[...this.creatures])if(l.isHero){l.alive=!1;try{this.renderer.removeEntityMesh(l.mesh)}catch{}}this.creatures=this.creatures.filter(l=>l.alive);const a=this.spawnCreature(q.HeroKnight,t+1,i+4);a.knockedOut=!0,a.hp=1,a.job=L.Idle,a.setPath(null);const h=this.spawnCreature(q.HeroArcher,t-1,i+3);if(this.imprisonCreature(h,t-1,i+3),h.convertProgress=e==="torture"?72:35,h.hunger=e==="graveyard"?92:40,e==="torture"&&(this.imprisonCreature(h,t,i+3),h.convertProgress=78,!this.creatures.find(u=>u.kind===q.Thornwitch&&u.alive))){const u=this.spawnCreature(q.Thornwitch,t+1,i+3);u.mood=85}if(this.creatures.some(l=>l.kind===q.Bonewretch&&l.alive)||(e==="graveyard"||e==="both")&&this.spawnCreature(q.Bonewretch,t-2,i+5),this.creatures.some(l=>l.kind===q.Rattlekin&&l.alive)||this.spawnCreature(q.Rattlekin,t-1,i+2),e==="prison"||e==="both"){const l=o[0];this.grid.tileToWorld(t+1,i+4),l.x=t,l.y=i+4;const u=this.grid.tileToWorld(l.x,l.y);l.wx=u.x,l.wz=u.z,l.job=L.DragPrisoner,l.jobTarget={x:a.x,y:a.y},l.workTimer=0,l.setPath(this.grid.findPath(l.x,l.y,a.x,a.y))}this.grid.revealFromTerritory(),this.requestStructuralRebuild(),this.rebuild(),this.updateMinimap(),this.syncMissionHud();const c=this.grid.largestContiguousRoom(_.Lair),d=Math.round(ms(c)*100);if(e==="prison"){this.hud.sayNow(z.prisonBuilt),this.hud.say(z.heroKnocked),this.hud.setTooltip(`Prison — prisoners ${this.creatures.filter(u=>u.isPrisoner).length} · KO ready`);const l=this.grid.tileToWorld(t-1,i+3);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,16,l.z+11)}else if(e==="torture"){this.hud.sayNow(z.tortureBuilt),this.hud.say(z.converting),this.hud.setTooltip("Torture Chamber — converting captive → Thornwitch");const l=this.grid.tileToWorld(t,i+3);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,15,l.z+10)}else if(e==="graveyard"){this.hud.sayNow(z.graveyardBuilt),this.hud.say(z.boneRaised),this.hud.setTooltip(`Graveyard — corpses ${this.corpses.length} → Bonewretch`);const l=this.grid.tileToWorld(t-1,i+5);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,15,l.z+10)}else if(e==="efficiency"){this.hud.sayNow(z.roomSizeBonus.replace("%n",String(c)).replace("%p",String(d))),this.hud.setTooltip(`Lair size ${c} · +${d}% eff · Hatchery/Library scale too`);const l=this.grid.tileToWorld(t+3,i+1);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,18,l.z+12)}else{this.hud.sayNow("Pass 7.3 — Prison, Torture, Graveyard, room-size efficiency."),this.hud.say(z.prisonBuilt),this.hud.setTooltip(`Pass 7.3 — Prison · Torture · Graveyard · Lair size ${c} +${d}%`);const l=this.grid.tileToWorld(t-1,i+4);this.camTarget.set(l.x,0,l.z),this.renderer.camera.position.set(l.x+2,18,l.z+12)}this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z)}preparePass65Shot(e="both"){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y,n=(a,h,c=_.None)=>{const d=this.grid.get(a,h);!d||d.kind===E.Heart||(d.kind=E.Claimed,d.claimedProgress=1,d.room=c,d.mark=be.None,d.digProgress=0,d.door=qe.None,d.trap=pt.None,d.rally=!1,d.fortified=!1,d.explored=!0)};for(let a=i-2;a<=i+2;a++)for(let h=t-2;h<=t+3;h++)n(h,a);n(t+2,i,_.Treasury),n(t+3,i,_.Treasury),n(t+2,i+1,_.Lair),n(t+3,i+1,_.Training),n(t+2,i+2,_.Library),n(t+3,i+2,_.Portal),n(t-2,i+1,_.Hatchery),n(t-1,i+1,_.Guard);for(const[a,h]of[[t-3,i],[t-3,i+1],[t-3,i-1],[t+4,i],[t+4,i+1],[t+4,i-1],[t,i+3],[t+1,i+3],[t+2,i+3],[t,i-3],[t+1,i-3]]){const c=this.grid.get(a,h);!c||c.kind===E.Heart||(c.kind=E.Earth,c.fortified=!1,c.mark=be.None,c.room=_.None,c.goldAmount=0,c.digProgress=0,c.explored=!0)}const s=this.grid.get(t+5,i);s&&(s.kind=E.Rock,s.fortified=!1,s.mark=be.None,s.explored=!0,s.room=_.None);for(let a=t+4;a<=t+7;a++)n(a,i-2);for(let a=0;a<this.grid.height;a++)for(let h=0;h<this.grid.width;h++){const c=this.grid.get(h,a);!(Math.abs(h-t)<=4&&Math.abs(a-i)<=3?!0:Math.abs(h-(t+5))<=2&&Math.abs(a-(i-2))<=1)&&c.kind!==E.Heart&&((c.kind===E.Claimed||c.kind===E.Dirt)&&(c.kind=E.Earth,c.claimedProgress=0,c.room=_.None),c.explored=!1,c.mark=be.None,c.fortified=!1)}this.grid.revealFromTerritory(),n(t,i-1),this.grid.get(t,i-1).door=qe.Closed,n(t-1,i-2),this.grid.get(t-1,i-2).trap=pt.Sentry,this.grid.get(t-1,i+1).rally=!0,this.hatcheryFood=6,this.gold=900,this.healUnlocked=!0;const o=this.creatures.filter(a=>a.isWorker&&a.alive);for(;o.length<4;)o.push(this.spawnCreature(q.Scrabbler,t,i));for(let a=0;a<o.length;a++){const h=o[a],c=t-1+a%3,d=i+a%2,l=this.grid.tileToWorld(c,d);h.x=c,h.y=d,h.wx=l.x,h.wz=l.z,h.hunger=5,h.sleepNeed=5,h.goldCarried=0,h.job=L.Idle,h.jobTarget=null,h.setPath(null),h.held=!1}if(!this.creatures.some(a=>a.kind===q.Gravemage&&a.alive)){const a=this.spawnCreature(q.Gravemage,t+2,i+2);a.job=L.Research,a.jobTarget={x:t+2,y:i+2}}if(this.creatures.some(a=>a.kind===q.Rattlekin&&a.alive)||this.spawnCreature(q.Rattlekin,t-1,i+1),e==="fortify"||e==="both"){for(const[l,u]of[[t-3,i],[t-3,i+1],[t+4,i],[t,i+3]]){const f=this.grid.get(l,u);f&&f.kind===E.Earth&&!f.fortified&&(f.mark=be.Fortify,f.explored=!0)}const a=this.grid.get(t+1,i+3);a&&a.kind===E.Earth&&(a.fortified=!0,a.mark=be.None,a.explored=!0);const h=o[0],c={x:t-3,y:i},d=this.grid.tileToWorld(t-2,i);h.x=t-2,h.y=i,h.wx=d.x,h.wz=d.z,h.job=L.Fortify,h.jobTarget=c,h.workTimer=.8,h.setPath(null),this.hud.sayNow(z.autoFortify)}if((e==="fow"||e==="both")&&(this.hud.say(z.fog),this.hud.sayNow("Fog of war — unexplored earth stays dark until dig/claim.")),this.requestStructuralRebuild(),this.rebuild(),this.fogDirty=!1,this.marksDirty=!1,e==="fortify"){const a=this.grid.tileToWorld(t-2,i);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+3,20,a.z+12),this.hud.setTooltip("Idle Scrabblers auto-fortify soft earth · Rock impassable")}else{const a=this.grid.tileToWorld(t+2,i-1);this.camTarget.set(a.x,0,a.z),this.renderer.camera.position.set(a.x+6,32,a.z+22),this.hud.setTooltip("Fog of war — explored heart vs dark unexplored")}this.renderer.camera.lookAt(this.camTarget)}preparePass7Shot(){this.hud.hideOverlay(),this.preparePass4Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;this.gold=2200;const i=this.grid.get(e+1,t+3);i&&i.kind!==E.Heart&&(i.kind=E.Dirt,i.room=_.None,i.mark=be.Claim,i.fortified=!1);for(const o of this.creatures)o.alive&&(o.clampStats(),o.isWorker?(o.goldCarried=90,o.job=L.Idle,o.hp=o.maxHp*.55):o.isHero||(o.hp=o.maxHp*.7),o.syncMesh(this.time,.016));const n=this.spawnCreature(q.Rattlekin,e-1,t+1);n.hp=n.maxHp*.4,n.syncMesh(this.time,.016),this.rebuild();const s=this.grid.tileToWorld(e+1,t+1);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+5,28,s.z+18),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Gold-border claimed tiles · health flowers · gold haul"),this.hud.sayNow("Claimed land wears gold. Flowers measure health. Scrabblers haul the glitter home.")}preparePass10Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(o,a,h=_.None)=>{const c=this.grid.get(o,a);!c||c.kind===E.Heart||(c.kind=E.Claimed,c.room=h,c.mark=be.None,c.digProgress=0,c.claimedProgress=1,c.fortified=!1,c.explored=!0)};i(e+2,t,_.Treasury),i(e+3,t,_.Treasury),i(e+2,t+1,_.Casino),i(e+3,t+1,_.Casino),this.gold=Math.min(this.vaultCap(),Math.max(this.gold,720)),this.wageAcc=cn-12;const n=this.creatures.find(o=>o.alive&&o.isWorker);n&&(n.slapWorkBuff=8,n.goldCarried=80),this.grid.revealAround(e+8,t+1,3),this.requestStructuralRebuild(),this.rebuild();const s=this.grid.tileToWorld(e+2,t);this.camTarget.set(s.x,0,s.z),this.renderer.camera.position.set(s.x+5,26,s.z+16),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Pass 10 — Heart · payday · vault cap · Wagerden · slap-work"),this.hud.sayNow("Scrabblers never rest. Sell rooms. Sight peels the fog. The Heart keeps score.")}preparePass101Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(const s of this.grid.tiles)s.mark===be.Dig&&(s.mark=be.None);this.tool="dig",this.lastPaint=null;for(let s=0;s<5;s++)this.applyTool(e-1+s,t+3);this.gold=this.vaultCap();const i=this.grid.tileToWorld(e,t);for(const s of this.creatures)!s.alive||!s.isWorker||(s.goldCarried=90,s.job=L.Haul,s.jobTarget={x:e,y:t},s.setPath(null),s.x=e,s.y=t,s.wx=i.x,s.wz=i.z);for(let s=0;s<48;s++)this.update(.05);const n=this.grid.tileToWorld(e+.4,t+2.1);this.camTarget.set(n.x,0,n.z),this.renderer.camera.position.set(n.x+4.2,21,n.z+13.5),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Dig marks stay on the cubes you tagged · full vault, still digging"),this.hud.sayNow("The vault is full. They keep the gold in their claws and return to the vein.")}runGuideSmoke(e=16){this.hud.hideOverlay();const t=this.grid.heartPos.x,i=this.grid.heartPos.y;for(const C of this.grid.tiles)C.mark===be.Dig&&(C.mark=be.None);this.tool="dig",this.lastPaint=null;const n={x:t+4,y:i};this.applyTool(n.x,n.y);let s=0;for(const C of this.grid.tiles)C.mark===be.Dig&&(C.x!==n.x||C.y!==n.y)&&s++;const o=this.gold;this.tool="dig",this.lastPaint=null;for(let C=0;C<4;C++)this.applyTool(t+3,i-1+C);for(let C=0;C<5;C++)this.applyTool(t-1+C,i+3);const a=Math.max(1,Math.ceil(e/.05));for(let C=0;C<a;C++)this.update(.05);const h=this.creatures.filter(C=>C.alive&&C.isWorker).reduce((C,P)=>C+P.goldCarried,0);let c=0;const d=t+1,l=i+1,u=this.grid.get(d,l);if(u&&u.kind===E.Claimed){u.room=_.None,this.tool="treasury",this.lastPaint=null,this.gold,this.applyTool(d,l),this.tool="sell",this.lastPaint=null;const C=this.gold;this.applyTool(d,l),c=this.gold-C}const f=this.creatures.find(C=>C.alive&&C.isWorker);f&&this.slap(f),this.castSightAt(t+6,i-5);const g=this.gold,v=g+h>o;this.gold=this.vaultCap();const m=this.grid.tileToWorld(t,i),p=(C,P)=>{const k=this.grid.get(C,P);!k||k.kind===E.Heart||k.kind===E.Claimed||(k.kind=E.Gold,k.goldAmount=420,k.mark=be.Dig,k.fortified=!1,k.digProgress=0,k.room=_.None)};p(t+3,i),p(t+3,i+1),p(t+4,i);for(const C of this.creatures)!C.alive||!C.isWorker||(C.goldCarried=Math.max(C.goldCarried,80),C.job=L.Haul,C.jobTarget={x:t,y:i},C.setPath(null),C.x=t,C.y=i,C.wx=m.x,C.wz=m.z);for(let C=0;C<24;C++)this.update(.05);const y=this.creatures.filter(C=>C.alive&&C.isWorker),w=y.filter(C=>C.job===L.Haul).length,x=y.some(C=>C.job===L.Dig||C.job===L.Mine);return{goldBefore:o,goldAfter:g,carried:h,vaultCap:this.vaultCap(),soldRefund:c,slapBuff:f?.slapWorkBuff??0,workerHunger:f?.hunger??-1,workerSleep:f?.sleepNeed??-1,heartHp:this.heartHp,paydayIn:Math.max(0,cn-this.wageAcc),mined:v,extraDigMarks:s,stuckHaul:w,resumedDig:x}}preparePass8Shot(){this.preparePass7Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(a,h,c=_.None)=>{const d=this.grid.get(a,h);!d||d.kind===E.Heart||(d.kind=E.Claimed,d.room=c,d.mark=be.None,d.digProgress=0,d.claimedProgress=1,d.fortified=!1,d.explored=!0)};for(let a=t+2;a<=t+3;a++)for(let h=e+3;h<=e+4;h++)i(h,a,_.Portal);const n=this.grid.get(e-2,t+2);n&&(n.kind=E.Earth,n.fortified=!0,n.room=_.None,n.explored=!0);const s=this.grid.get(e-1,t+3);s&&(s.kind=E.Gold,s.goldAmount=900,s.fortified=!1,s.explored=!0),this.rebuild();const o=this.grid.tileToWorld(e+1.5,t+1.5);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+4.5,19.5,o.z+15.5),this.renderer.camera.lookAt(this.camTarget),this.hud.setTooltip("Layered cavern walls · ritual Heart · crystal Portal · airborne ash"),this.hud.sayNow("The Underkeep gains depth: carved strata, ritual iron, crystal fire.")}preparePass64bShot(){this.hud.hideOverlay(),this.preparePass64Shot();const e=this.grid.heartPos.x,t=this.grid.heartPos.y;for(const a of this.creatures)a.alive&&(a.clampStats(),this.safeMood(a,Number.isFinite(a.mood)?Math.max(40,a.mood):72),a.hunger=Math.max(0,Math.min(40,a.hunger)),a.sleepNeed=Math.max(0,Math.min(40,a.sleepNeed)));const i=this.creatures.find(a=>a.alive&&a.isWorker);i&&(this.tool="select",this.hud.setActiveTool("select"),this.pickUp(i));const n=this.creatures.filter(a=>a.alive&&!a.isHero&&!a.isWorker&&(a.kind===q.Rattlekin||a.kind===q.Emberling));this.held&&this.dropHeldAt(e,t),this.clearSelection();for(const a of n.slice(0,3))a.selected=!0,this.selectedGroup.includes(a)||this.selectedGroup.push(a);this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0);const s=n[0];s&&this.pickUp(s),this.hud.sayNow("Hand pick + squad Attack — no blackout."),this.hud.say(z.groupSelect),this.hud.say(z.attackMove),this.refreshInspector();const o=this.grid.tileToWorld(e+1,t-1);this.camTarget.set(o.x,0,o.z),this.renderer.camera.position.set(o.x+3,22,o.z+14),this.renderer.camera.lookAt(this.camTarget)}preparePass64Shot(){this.hud.hideOverlay();const e=this.grid.heartPos.x,t=this.grid.heartPos.y,i=(l,u,f=_.None)=>{const g=this.grid.get(l,u);!g||g.kind===E.Heart||(g.kind=E.Claimed,g.claimedProgress=1,g.room=f,g.mark=be.None,g.digProgress=0,g.door=qe.None,g.trap=pt.None,g.rally=!1,g.fortified=!1)};for(let l=t-4;l<=t+3;l++)for(let u=e-3;u<=e+5;u++)i(u,l);i(e+2,t+1,_.Training),i(e+3,t+1,_.Training),i(e+4,t+1,_.Library),i(e+5,t+1,_.Library),i(e+4,t-1,_.Portal),i(e+5,t-1,_.Portal),i(e-2,t+1,_.Lair),i(e-1,t+1,_.Lair),i(e-2,t+2,_.Hatchery),i(e+2,t+2,_.Guard),i(e+3,t+2,_.Guard);for(const[l,u]of[[e-1,t-2],[e+1,t-2],[e+2,t-2]]){const f=this.grid.get(l,u);f&&f.kind!==E.Heart&&(f.kind=E.Earth,f.fortified=!0,f.room=_.None)}i(e,t-1),i(e,t-2),i(e,t-3),i(e,t-4),this.grid.get(e,t-1).door=qe.Closed,this.grid.get(e,t-3).trap=pt.Sentry,this.grid.get(e+2,t).rally=!0,this.hatcheryFood=8,this.gold=1e3,this.heroWaveSpawned=!0,this.heroWaveTimer=0,this.heroWarn30=!0,this.heroWarn10=!0;for(const l of[...this.creatures])if(l.isHero){l.alive=!1;try{this.renderer.removeEntityMesh(l.mesh)}catch{}}this.creatures=this.creatures.filter(l=>l.alive);const n=(l,u,f)=>{const g=this.spawnCreature(l,u,f),v=this.grid.tileToWorld(u,f);return g.x=u,g.y=f,g.wx=v.x,g.wz=v.z,g.held=!1,g.stunTimer=0,g.hunger=10,g.sleepNeed=10,g.trainNeed=0,g};for(const l of[...this.creatures])if(l.alive&&(l.kind===q.Rattlekin||l.kind===q.Emberling)){l.alive=!1;try{this.renderer.removeEntityMesh(l.mesh)}catch{}}this.creatures=this.creatures.filter(l=>l.alive);const s=n(q.Rattlekin,e+1,t),o=n(q.Rattlekin,e+2,t),a=n(q.Emberling,e+3,t);if(!this.creatures.some(l=>l.kind===q.Gravemage&&l.alive)){const l=this.spawnCreature(q.Gravemage,e+4,t+1);l.job=L.Research,l.jobTarget={x:e+4,y:t+1}}const h=this.spawnCreature(q.HeroKnight,e,t-4),c=this.spawnCreature(q.HeroArcher,e+1,t-4);h.job=L.Fight,c.job=L.Fight,h.jobTarget={x:e,y:t},c.jobTarget={x:e,y:t},h.hp=Math.floor(h.maxHp*.7),c.hp=Math.floor(c.maxHp*.75),this.clearSelection(),this.selectedGroup=[s,o,a];for(const l of this.selectedGroup)l.selected=!0;this.syncSelectionPrimary(),this.issueAttackMove(e,t-3,!0),this.requestStructuralRebuild(),this.rebuild(),this.hud.sayNow("Squad selected — attack-move into the heroes!"),this.hud.say(z.groupSelect),this.hud.say(z.attackHero),this.hud.say(z.heroEngage),this.hud.setTooltip(`(${e},${t}) Claimed · squad ${this.selectedGroup.length} attack-move`);const d=this.grid.tileToWorld(e+1,t-2);this.camTarget.set(d.x,0,d.z),this.renderer.camera.position.set(d.x+1.5,21,d.z+12),this.renderer.camera.lookAt(this.camTarget)}update(e){if(this.studio?.isOpen()){this.studio.tick(e);try{this.hud.update(e)}catch{}return}if(this.renderer.contextLost){try{this.hud.update(e)}catch{}return}try{if(Number.isFinite(this.mana)||(this.mana=0),this.mana=Math.max(0,Math.min(this.maxMana(),this.mana)),Number.isFinite(this.gold)||(this.gold=0),this.gold=Math.max(0,this.gold),this.gold>this.goldEver&&(this.goldEver=this.gold),!this.gameOver){this.time+=e;try{this.updateCamera(e)}catch(o){console.warn("[underkeep] camera",o)}try{this.regenMana(e)}catch(o){console.warn("[underkeep] mana",o)}try{this.regenHatcheryFood(e)}catch(o){console.warn("[underkeep] food",o)}try{this.assignJobs(e)}catch(o){console.warn("[underkeep] assignJobs",o)}try{this.updateMoods(e)}catch(o){console.warn("[underkeep] moods",o)}try{this.updateCreatures(e)}catch(o){console.warn("[underkeep] creatures",o)}try{this.updatePortal(e)}catch(o){console.warn("[underkeep] portal",o)}try{this.updateHeroWave(e)}catch(o){console.warn("[underkeep] heroes",o)}try{this.checkHeart()}catch(o){console.warn("[underkeep] heart",o)}try{this.payWages(e)}catch(o){console.warn("[underkeep] wages",o)}try{this.updateHazards(e)}catch(o){console.warn("[underkeep] hazards",o)}try{this.updatePrisonEconomy(e)}catch(o){console.warn("[underkeep] prison",o)}try{this.checkMissionWin()}catch(o){console.warn("[underkeep] mission",o)}if(this.saveAcc+=e,this.saveAcc>=4){this.saveAcc=0;try{this.saveNow()}catch(o){console.warn("[underkeep] save",o)}}}const t=this.grid.tiles.reduce((o,a)=>o+(a.mark===be.Dig?1:0),0),i=this.creatures.filter(o=>o.alive&&(o.job===L.Dig||o.job===L.Mine)).length;this.renderer.setDigLoad(t>=6||i>=2),this.rebuildCooldown>0&&(this.rebuildCooldown-=e),this.pendingStructuralRebuild||this.gridDirty?this.rebuildCooldown<=0&&this.rebuild():(this.marksDirty&&this.flushMarks(),this.fogDirty&&this.flushFog());for(const o of this.creatures)try{if(o.alive){o.clampStats(),o.syncMesh(this.time,e);try{if(o.mesh)if(o.held)o.mesh.visible=!0;else{const a=Number.isFinite(o.x)?Math.round(o.x):0,h=Number.isFinite(o.y)?Math.round(o.y):0;o.mesh.visible=this.grid.isExplored(a,h)}}catch{o.mesh&&(o.mesh.visible=!0)}}else o.mesh&&(o.mesh.visible=!1)}catch(a){console.warn("[underkeep] creature sync failed",o?.id,a)}this.renderer.update(e);const n=this.grid.tileToWorld(this.grid.heartPos.x,this.grid.heartPos.y);this.renderer.setHeartGold(this.gold,n.x,n.z),this.hud.update(e),this.templePrayCount=0;for(const o of this.creatures)o.alive&&(o.prayerBuff>0&&(o.prayerBuff=Math.max(0,o.prayerBuff-e)),o.slapWorkBuff>0&&(o.slapWorkBuff=Math.max(0,o.slapWorkBuff-e)),o.job===L.Pray&&!o.isHero&&this.templePrayCount++);if(this.rosterAcc+=e,this.rosterAcc>=.45&&(this.rosterAcc=0,this.refreshRosterUi(!1)),(this.selected||this.held)&&this.refreshInspector(),this.hud.updateStats(this.gold,this.mana,this.maxMana(),this.creatures.filter(o=>o.alive&&o.isWorker).length,this.creatures.filter(o=>o.alive&&!o.isWorker&&!o.isHero).length),this.hud.updateKeepVitals({goldCap:this.vaultCap(),heartHp:this.heartHp,heartMax:bo,paydayIn:Math.max(0,cn-this.wageAcc),paydayDue:this.paydayDueNow(),portalCount:this.attractedCount(),portalCap:this.portalCap()}),this.hud.setSpellAffordable("createWorker",this.gold>=this.workerCost()),this.hud.setSpellAffordable("speed",this.mana>=Ao),this.hud.setSpellAffordable("lightning",this.mana>=Co),this.hud.setSpellAffordable("heal",this.healUnlocked&&this.mana>=30),this.hud.setSpellAffordable("possess",this.possessed?!0:this.mana>=On),this.hud.setSpellAffordable("sight",this.mana>=dr),this.hud.setSpellAffordable("callToArms",this.mana>=ur),this.syncMissionHud(),this.minimapAcc+=e,this.minimapAcc>=.35){this.minimapAcc=0;try{this.updateMinimap()}catch{}}this.creatures=this.creatures.filter(o=>{if(!o.alive){try{this.renderer.removeEntityMesh(o.mesh)}catch{}return!1}return!0}),this.held&&!this.held.alive&&(this.held=null);const s=this.selectedGroup.length;this.selectedGroup=this.selectedGroup.filter(o=>o.alive),this.selected&&!this.selected.alive&&(this.selected=null),s!==this.selectedGroup.length?this.syncSelectionPrimary():!this.selected&&this.selectedGroup.length===0&&this.hud.hideInspector()}catch(t){throw console.error("[underkeep] update failed",t),t}}wageAcc=0;payWages(e){if(this.wageAcc+=e,this.paydayToastCooldown>0&&(this.paydayToastCooldown-=e),this.wageAcc<cn)return;this.wageAcc=0;let t=0;const i=[];for(const n of this.creatures){if(!n.alive||n.isHero||n.isWorker)continue;const s=Ts[n.kind].goldWage;s>0&&(t+=s,i.push(n))}if(!(t<=0||i.length===0))if(this.gold>=t){this.gold-=t,this.hud.say(z.payday.replace("%g",String(t)));for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)+4)}else{this.gold=0;for(const n of i)this.safeMood(n,(Number.isFinite(n.mood)?n.mood:72)-32),n.leaveWarned=!0;this.hud.sayNow(z.paydayFail),this.paydayToastCooldown=8}}pathOptsFor(e){return{forHero:e.isHero,allowHazard:e.isHero||fr(e.kind)||pr(e.kind)}}placeBridge(e,t,i){if(!this.grid.canPlaceBridge(e,t))return;const n=i?k0:R0;if(this.gold<n){this.hud.say(i?"Need more gold for a stone bridge.":"Need more gold for a wooden bridge.");return}const s=this.grid.get(e,t);s&&(this.gold-=n,s.kind=i?E.BridgeStone:E.BridgeWood,s.goldAmount=0,s.digProgress=0,s.fortified=!1,s.mark=be.None,s.room=_.None,s.explored=!0,this.requestStructuralRebuild(),this.fogDirty=!0,this.hud.say(i?z.bridgeStone:z.bridgeWood),this.mentioneOnce("bridge",z.bridgeWood),this.saveNow())}enterPossession(e){try{if(!e||!e.alive||e.isHero)return;this.possessed&&this.exitPossession(!0),e.clampStats(),e.held=!1,e.stunTimer=0,e.setPath(null),e.job=L.Idle,e.jobTarget=null,this.possessed=e,this.selectCreature(e);const t=this.renderer.camera;this.possessCamBackup={tx:this.camTarget.x,tz:this.camTarget.z,cx:t.position.x,cy:t.position.y,cz:t.position.z},this.hud.sayNow(z.possess),this.refreshInspector()}catch(t){console.warn("[underkeep] enterPossession failed",t),this.possessed=null}}exitPossession(e=!1){try{const t=this.possessed;if(this.possessed=null,this.possessArmed=!1,this.possessCamBackup){const i=this.possessCamBackup;this.camTarget.set(i.tx,0,i.tz),this.renderer.camera.position.set(i.cx,i.cy,i.cz),this.renderer.camera.lookAt(this.camTarget.x,0,this.camTarget.z),this.possessCamBackup=null}t&&t.alive&&(t.setPath(null),t.job=L.Idle),e||this.hud.say(z.possessEnd),this.refreshInspector()}catch(t){console.warn("[underkeep] exitPossession failed",t),this.possessed=null,this.possessCamBackup=null}}possessMoveTo(e,t){const i=this.possessed;if(!i||!i.alive){this.exitPossession(!0);return}const n=!i.isWorker||fr(i.kind)||pr(i.kind);if(!this.grid.isWalkable(e,t,{allowHazard:n})&&this.grid.get(e,t)?.kind!==E.Heart)return;const s=this.grid.findPath(i.x,i.y,e,t,{allowHazard:!i.isWorker||fr(i.kind)||pr(i.kind)});s&&(i.setPath(s),i.job=L.Wander,i.jobTarget={x:e,y:t})}updateHazards(e){if(this.lavaDmgAcc+=e,this.lavaDmgAcc<.45)return;const t=this.lavaDmgAcc;this.lavaDmgAcc=0;for(const i of this.creatures){if(!i.alive||i.held)continue;this.possessed;const n=this.grid.get(Math.round(i.x),Math.round(i.y));if(n)if(n.kind===E.Lava){if(fr(i.kind)||pr(i.kind))continue;const s=8*t;if(i.takeDamage(s),i.alive){if(Math.random()<.08)try{this.renderer.spawnFx(new A(i.wx,.4,i.wz),16737826,.35)}catch{}}else{try{this.renderer.spawnFx(new A(i.wx,.6,i.wz),16729088,.7)}catch{}this.possessed===i&&this.exitPossession()}}else n.kind,E.Water}}updateCamera(e){const t=this.renderer.camera;if(this.possessed&&this.possessed.alive){const a=this.possessed,h=new A(a.wx,.35,a.wz);this.camTarget.lerp(h,Math.min(1,8*e));const c=new A(a.wx-Math.sin(a.facing)*3.2,2.55,a.wz-Math.cos(a.facing)*3.2);t.position.lerp(c,Math.min(1,6*e)),t.lookAt(a.wx,.9,a.wz);const d=Math.round(Math.sin(a.facing)),l=Math.round(Math.cos(a.facing));let u=0,f=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(u+=d,f+=l),(this.keys.has("s")||this.keys.has("arrowdown"))&&(u-=d,f-=l),(this.keys.has("a")||this.keys.has("arrowleft"))&&(u-=l,f+=d),(this.keys.has("d")||this.keys.has("arrowright"))&&(u+=l,f-=d),u!==0||f!==0){const g=Math.round(a.x)+Math.sign(u),v=Math.round(a.y)+Math.sign(f);if(a.path.length===0||a.pathIndex>=a.path.length)this.possessMoveTo(g,v);else{const m=a.path[a.path.length-1];(m.x!==g||m.y!==v)&&this.possessMoveTo(g,v)}}return}const i=36,n=new A;t.getWorldDirection(n),n.y=0,n.normalize();const s=new A().crossVectors(n,new A(0,1,0)).normalize(),o=new A;if((this.keys.has("w")||this.keys.has("arrowup"))&&o.add(n),(this.keys.has("s")||this.keys.has("arrowdown"))&&o.sub(n),(this.keys.has("a")||this.keys.has("arrowleft"))&&o.sub(s),(this.keys.has("d")||this.keys.has("arrowright"))&&o.add(s),o.lengthSq()>0?(o.normalize().multiplyScalar(i),this.camVel.lerp(o,1-Math.exp(-10*e))):this.camVel.multiplyScalar(Math.exp(-8*e)),this.camVel.lengthSq()>1e-6){const a=this.camVel.clone().multiplyScalar(e);t.position.add(a),this.camTarget.add(a)}if(Math.abs(this.zoomPending)>.002){const a=this.zoomPending*(1-Math.exp(-14*e));this.zoomPending-=a,this.applyZoom(a)}else this.zoomPending=0;t.lookAt(this.camTarget.x,0,this.camTarget.z)}regenMana(e){const t=this.grid.countClaimed(),i=this.grid.countRoom(_.Temple),n=this.templePrayCount*.55+i*.12,s=2+t*.08+n,o=Number.isFinite(this.mana)?this.mana:0;this.mana=Math.max(0,Math.min(this.maxMana(),o+s*e))}regenHatcheryFood(e){const t=this.grid.countRoom(_.Hatchery);if(t<=0){this.hatcheryFood=0;return}const i=ms(this.grid.largestContiguousRoom(_.Hatchery));this.foodRegenAcc+=e*(1+i);const n=2.5;for(;this.foodRegenAcc>=n;){this.foodRegenAcc-=n;const s=t*4;this.hatcheryFood<s&&(this.hatcheryFood=Math.min(s,this.hatcheryFood+t))}}assignJobs(e){const t=this.creatures.filter(l=>l.alive&&l.isWorker&&!l.held&&l.stunTimer<=0&&l!==this.possessed),i=this.grid.heartPos.x,n=this.grid.heartPos.y;for(const l of t){if(l.job===L.DragPrisoner||l.job===L.DragWounded)continue;const u=this.creatures.find(f=>f.alive&&f.isHero&&!f.knockedOut&&!f.isPrisoner&&Math.hypot(f.x-l.x,f.y-l.y)<5);if(u){const f=Math.hypot(l.x-i,l.y-n)<8&&Math.hypot(u.x-i,u.y-n)<7,g=l.job===L.Dig||l.job===L.Mine||l.job===L.Haul||l.job===L.Claim;if(f){if(g&&Math.hypot(l.x-u.x,l.y-u.y)>2.5)continue;if(l.job=L.Fight,l.jobTarget={x:u.x,y:u.y},Math.hypot(l.x-u.x,l.y-u.y)>1.2){const x=this.grid.findPath(l.x,l.y,u.x,u.y);x&&l.setPath(x)}else l.setPath(null);this.mentioneOnce("heartDefend",z.heartDefend);continue}l.job=L.Flee,l.fleeTimer=2;const v=l.x-u.x,m=l.y-u.y,p=Math.max(0,Math.min(this.grid.width-1,l.x+Math.sign(v||1)*3)),y=Math.max(0,Math.min(this.grid.height-1,l.y+Math.sign(m||1)*3));let w=null;for(let x=0;x<5&&!w;x++)for(let C=-x;C<=x&&!w;C++)for(let P=-x;P<=x&&!w;P++)this.grid.isWalkable(p+P,y+C)&&(w={x:p+P,y:y+C});w&&l.setPath(this.grid.findPath(l.x,l.y,w.x,w.y));continue}}const s=[],o=[],a=[];for(const l of this.grid.tiles)l.mark===be.Dig&&this.grid.isDiggable(l.x,l.y)&&s.push({x:l.x,y:l.y}),l.mark===be.Claim&&l.kind===E.Dirt&&o.push({x:l.x,y:l.y}),l.mark===be.Fortify&&!l.fortified&&a.push({x:l.x,y:l.y});const h=new Set,c=this.grid.activeDigWorkKeys();for(const l of t)if(l.jobTarget&&(l.job===L.Dig||l.job===L.Mine||l.job===L.Claim||l.job===L.Fortify)&&h.add(`${l.jobTarget.x},${l.jobTarget.y}`),(l.job===L.Dig||l.job===L.Mine)&&l.jobTarget){const u=`${l.jobTarget.x},${l.jobTarget.y}`;(!c.has(u)||!this.grid.isDiggable(l.jobTarget.x,l.jobTarget.y))&&(l.job=L.Idle,l.jobTarget=null,l.setPath(null))}if(s.length+o.length+a.length>0){let l=!1;for(const u of t){if(u.job===L.Flee||u.job===L.DragPrisoner||u.job===L.DragWounded||u.job===L.Dig||u.job===L.Mine||u.job===L.Haul||u.job===L.Claim&&s.length+o.length>0||u.job===L.Fortify&&s.length+o.length===0)continue;const f=u.hunger>78||u.sleepNeed>82||u.hp<u.maxHp*.4;(u.job===L.Eat||u.job===L.Sleep)&&f||(u.job===L.Fortify||u.job===L.Claim||u.job===L.Craft||u.job===L.Idle||u.job===L.Eat||u.job===L.Sleep)&&(u.job=L.Idle,u.jobTarget=null,u.setPath(null),l=!0)}l&&this.mentioneOnce("marksFirst",z.marksFirst)}const d=t.filter(l=>l.job===L.Idle||l.job===L.Flee&&l.fleeTimer<=0);for(const l of d){l.job=L.Idle,l.jobTarget=null;let u=!1;const f=s.length+o.length>0?Av:Ev;if(l.goldCarried>=f&&this.vaultRoom()>0){const m=this.grid.tiles.find(x=>x.room===_.Treasury),p=m?.x??this.grid.heartPos.x,y=m?.y??this.grid.heartPos.y,w=this.grid.findPath(l.x,l.y,p,y);w&&(l.job=L.Haul,l.jobTarget={x:p,y},l.setPath(w),u=!0)}if(u)continue;if(this.grid.countRoom(_.Prison)>0){const m=this.creatures.find(p=>p.alive&&p.isHero&&p.knockedOut&&!p.isPrisoner&&!p.held&&!this.creatures.some(y=>y.alive&&y.isWorker&&y.job===L.DragPrisoner&&y.jobTarget&&y.jobTarget.x===p.x&&y.jobTarget.y===p.y));if(m){const p=this.grid.findPath(l.x,l.y,m.x,m.y);p&&(l.job=L.DragPrisoner,l.jobTarget={x:m.x,y:m.y},l.setPath(p),l.workTimer=0,u=!0)}}if(u)continue;if(this.grid.countRoom(_.Lair)>0){const m=this.creatures.find(p=>p.alive&&!p.isHero&&!p.isWorker&&p.knockedOut&&!p.held&&!this.creatures.some(y=>y.alive&&y.isWorker&&y.job===L.DragWounded&&(Math.floor(y.workTimer)===p.id||y.jobTarget&&y.jobTarget.x===p.x&&y.jobTarget.y===p.y)));if(m){const p=this.grid.findPath(l.x,l.y,m.x,m.y);p&&(l.job=L.DragWounded,l.jobTarget={x:m.x,y:m.y},l.setPath(p),l.workTimer=0,u=!0,this.mentioneOnce("dragWounded",z.dragWounded))}}if(u)continue;if(s.length===0&&o.length===0&&a.length===0&&this.grid.countRoom(_.Workshop)>0&&(this.doorKits<un||this.sentryKits<un)){const m=this.findRoomTile(_.Workshop);if(m&&t.filter(y=>y.job===L.Craft).length<Math.max(1,Math.min(3,this.grid.countRoom(_.Workshop)))){const y=this.grid.findPath(l.x,l.y,m.x,m.y);y&&(l.job=L.Craft,l.jobTarget=m,l.setPath(y),l.workTimer=0,u=!0,this.mentioneOnce("craftBusy",z.craftBusy))}}if(u)continue;const g=s.map(m=>({m,d:Math.abs(m.x-l.x)+Math.abs(m.y-l.y)})).sort((m,p)=>m.d-p.d);for(const{m}of g){const p=this.grid.findDiggableFace(m.x,m.y)??(this.grid.isReachableSolid(m.x,m.y)?m:null);if(!p)continue;const y=`${p.x},${p.y}`;if(h.has(y))continue;const w=this.grid.get(p.x,p.y),x=this.grid.findPathAdjacent(l.x,l.y,p.x,p.y);if(x){l.job=w.kind===E.Gold||w.kind===E.Gem?L.Mine:L.Dig,l.jobTarget=p,l.setPath(x),l.workTimer=0,h.add(y),u=!0;break}}if(u)continue;const v=o.map(m=>({m,d:Math.abs(m.x-l.x)+Math.abs(m.y-l.y)})).sort((m,p)=>m.d-p.d);for(const{m}of v){const p=`${m.x},${m.y}`;if(h.has(p))continue;const y=this.grid.findPath(l.x,l.y,m.x,m.y);if(y){l.job=L.Claim,l.jobTarget=m,l.setPath(y),l.workTimer=0,h.add(p),u=!0;break}}if(!u){for(const m of a){const p=`${m.x},${m.y}`;if(h.has(p)||!this.grid.isReachableSolid(m.x,m.y))continue;const y=this.grid.findPathAdjacent(l.x,l.y,m.x,m.y);if(y){l.job=L.Fortify,l.jobTarget=m,l.setPath(y),l.workTimer=0,h.add(p),u=!0;break}}if(!u){if(!u){let m=null,p=999;for(const y of this.grid.tiles){if(y.kind!==E.Dirt||!y.explored||!this.grid.hasAdjacentClaimed(y.x,y.y))continue;const w=`${y.x},${y.y}`;if(h.has(w))continue;const x=Math.abs(y.x-l.x)+Math.abs(y.y-l.y);x<p&&x<=18&&(p=x,m={x:y.x,y:y.y})}if(m){const y=this.grid.findPath(l.x,l.y,m.x,m.y);if(y){const w=this.grid.get(m.x,m.y);w.mark!==be.Claim&&(w.mark=be.Claim,this.marksDirty=!0),l.job=L.Claim,l.jobTarget=m,l.setPath(y),l.workTimer=0,h.add(`${m.x},${m.y}`),u=!0,this.mentioneOnce("autoClaim",z.autoClaim)}}}if(!u&&l.goldCarried>0&&this.vaultRoom()>0&&s.length===0){const m=this.grid.tiles.find(x=>x.room===_.Treasury),p=m?.x??this.grid.heartPos.x,y=m?.y??this.grid.heartPos.y,w=this.grid.findPath(l.x,l.y,p,y);w&&(l.job=L.Haul,l.jobTarget={x:p,y},l.setPath(w))}}}}for(const l of t)l.hunger=0,l.sleepNeed=0;for(const l of this.creatures){if(!l.alive||l.isWorker||l.isHero||l.held||l.stunTimer>0||l.knockedOut||l===this.possessed)continue;if(l.job===L.AttackMove&&l.jobTarget){const x=this.creatures.find(C=>C.alive&&C.isHero&&Math.hypot(C.x-l.x,C.y-l.y)<9);if(x)if(l.bedKey&&this.releaseBed(l),Math.hypot(l.x-x.x,l.y-x.y)>1.2){const C=this.grid.findPath(l.x,l.y,x.x,x.y);C&&l.setPath(C)}else l.setPath(null);else if(l.path.length===0){const C=l.jobTarget.x,P=l.jobTarget.y;if(l.x!==C||l.y!==P){const k=this.grid.findPath(l.x,l.y,C,P);k&&l.setPath(k)}}continue}const u=this.creatures.find(x=>x.alive&&x.isHero&&Math.hypot(x.x-l.x,x.y-l.y)<10);if(u){if(l.bedKey&&this.releaseBed(l),l.job=L.Fight,l.jobTarget={x:u.x,y:u.y},Math.hypot(l.x-u.x,l.y-u.y)>1.2){const x=this.grid.findPath(l.x,l.y,u.x,u.y);x&&l.setPath(x)}else l.setPath(null);continue}const f=this.grid.countRoom(_.Hatchery)>0,g=this.grid.countRoom(_.Lair)>0;if(l.hunger=Math.min(100,l.hunger+(f?1.15:.7)*e),l.sleepNeed=Math.min(100,l.sleepNeed+(g?.95:.55)*e),l.trainNeed=Math.min(100,l.trainNeed+1.1*e),l.job===L.Eat||l.job===L.Sleep||l.job===L.Train||l.job===L.Research||l.job===L.Pray||l.job===L.Flee||l.job===L.Gamble){if(l.job===L.Sleep&&l.jobTarget){const x=`${l.jobTarget.x},${l.jobTarget.y}`;l.bedKey!==x&&(l.bedKey=x),this.bedOwners.has(x)||this.bedOwners.set(x,l.id)}if(l.path.length===0&&l.jobTarget){const x=this.grid.findPath(l.x,l.y,l.jobTarget.x,l.jobTarget.y);x&&l.setPath(x)}continue}l.job===L.Fight&&(l.job=L.Idle),l.job===L.Guard&&(l.job=L.Idle);const v=l.hp<l.maxHp*.35,m=l.hp<l.maxHp*.65;if(v&&g){const x=this.findFreeOrOwnedBed(l);if(x){l.job=L.Flee,l.fleeTimer=4,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y)),this.mentioneOnce("fleeLair",z.fleeLair);continue}}if(l.hunger>(f?55:70)&&f&&this.assignEat(l)||(l.sleepNeed>(g?58:75)||m)&&g&&this.assignSleep(l))continue;const p=l.kind===q.Gravemage,y=l.kind===q.Rattlekin||l.kind===q.Emberling||l.kind===q.Thornwitch||l.kind===q.Bonewretch;if(l.mood<58&&this.grid.countRoom(_.Temple)>0){const x=this.findRoomTile(_.Temple);if(x){l.job=L.Pray,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(p&&this.grid.countRoom(_.Library)>0){const x=this.findRoomTile(_.Library);if(x){l.job=L.Research,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(y&&l.trainNeed>22&&l.level>=4&&l.level<10&&this.grid.countRoom(_.CombatPit)>0){const x=this.findRoomTile(_.CombatPit);if(x){l.job=L.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(y&&l.trainNeed>28&&this.grid.countRoom(_.Training)>0&&l.level<4){const x=this.findRoomTile(_.Training);if(x){l.job=L.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}const w=this.grid.tiles.find(x=>x.rally);if(w&&(y||l.kind===q.Skitterwing)&&l.trainNeed<=50){l.job=L.Guard,l.jobTarget={x:w.x,y:w.y},l.x!==w.x||l.y!==w.y?l.setPath(this.grid.findPath(l.x,l.y,w.x,w.y)):l.setPath(null);continue}if(y&&this.grid.countRoom(_.Guard)>0&&l.trainNeed<=35){const x=this.findRoomTile(_.Guard);if(x){l.job=L.Guard,l.jobTarget=x,l.x!==x.x||l.y!==x.y?l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y)):l.setPath(null);continue}}if(!p&&l.trainNeed>45&&l.level<4&&this.grid.countRoom(_.Training)>0){const x=this.findRoomTile(_.Training);if(x){l.job=L.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(!p&&l.trainNeed>40&&l.level>=4&&l.level<10&&this.grid.countRoom(_.CombatPit)>0){const x=this.findRoomTile(_.CombatPit);if(x){l.job=L.Train,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));continue}}if(l.job===L.Idle||l.job===L.Wander&&l.path.length===0){if(this.grid.countRoom(_.Casino)>0&&l.mood<82&&Math.random()<.35){const x=this.findRoomTile(_.Casino);if(x){l.job=L.Gamble,l.jobTarget=x,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y)),this.mentioneOnce("gambling",z.gambling);continue}}if(Math.random()<.008){const x=this.findFreeOrOwnedBed(l);if(x)l.job=L.Wander,l.setPath(this.grid.findPath(l.x,l.y,x.x,x.y));else{const C=this.grid.tiles.filter(P=>P.kind===E.Claimed);if(C.length){const P=C[Math.floor(Math.random()*C.length)];l.job=L.Wander,l.setPath(this.grid.findPath(l.x,l.y,P.x,P.y))}}}}}for(const l of this.creatures){if(!l.alive||!l.isHero||l.stunTimer>0)continue;let u=null,f=8.5;for(const g of this.creatures){if(!g.alive||g.isHero||g.isWorker||g.held)continue;const v=Math.hypot(g.x-l.x,g.y-l.y);v<f&&(f=v,u=g)}if(u)l.job=L.Fight,l.jobTarget={x:u.x,y:u.y},Math.hypot(l.x-u.x,l.y-u.y)>1.15?l.setPath(this.grid.findPath(l.x,l.y,u.x,u.y,{forHero:!0,allowHazard:!0})):l.setPath(null);else{l.job=L.Fight;const g=this.grid.heartPos.x,v=this.grid.heartPos.y;if(l.path.length===0||Math.random()<.045){const m=this.grid.findPath(l.x,l.y,g,v,{forHero:!0,allowHazard:!0});if(m)l.setPath(m);else{let p=null,y=1/0;for(const w of this.grid.tiles){if(!this.grid.isWalkable(w.x,w.y)&&w.kind!==E.Heart)continue;const x=Math.hypot(w.x-g,w.y-v),C=Math.hypot(w.x-l.x,w.y-l.y);x<y&&C<20&&(y=x,p={x:w.x,y:w.y})}p&&l.setPath(this.grid.findPath(l.x,l.y,p.x,p.y,{forHero:!0,allowHazard:!0}))}}}}}findRoomTile(e){const t=this.grid.tiles.filter(n=>n.room===e);if(!t.length)return null;const i=t[Math.floor(Math.random()*t.length)];return{x:i.x,y:i.y}}releaseBed(e){e.bedKey&&(this.bedOwners.get(e.bedKey)===e.id&&this.bedOwners.delete(e.bedKey),e.bedKey=null)}findFreeOrOwnedBed(e){if(e.bedKey){const[i,n]=e.bedKey.split(",").map(Number),s=this.grid.get(i,n);if(s&&s.room===_.Lair)return{x:i,y:n};this.releaseBed(e)}const t=this.grid.tiles.filter(i=>i.room===_.Lair);for(const i of t){const n=`${i.x},${i.y}`,s=this.bedOwners.get(n);if(s===void 0||s===e.id)return{x:i.x,y:i.y}}return t.length?{x:t[0].x,y:t[0].y}:null}assignSleep(e){const t=this.findFreeOrOwnedBed(e);if(!t)return!1;const i=`${t.x},${t.y}`,n=this.bedOwners.get(i);if(n!==void 0&&n!==e.id){const s=this.grid.tiles.find(a=>{if(a.room!==_.Lair)return!1;const h=`${a.x},${a.y}`;return!this.bedOwners.has(h)});if(!s)return this.mentioneOnce("lairFull",z.lairFull),!1;const o=`${s.x},${s.y}`;return this.bedOwners.set(o,e.id),e.bedKey=o,e.job=L.Sleep,e.jobTarget={x:s.x,y:s.y},e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,s.x,s.y)),this.mentioneOnce("lairUse",z.lairUse),this.hud.say(z.bedClaim),!0}return this.bedOwners.set(i,e.id),e.bedKey=i,e.job=L.Sleep,e.jobTarget=t,e.restHealAcc=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("lairUse",z.lairUse),this.hud.say(z.bedClaim),!0}assignEat(e){this.hatcheryFood<=0&&this.grid.countRoom(_.Hatchery)>0&&this.mentioneOnce("hatcheryHungry",z.hatcheryHungry);const t=this.findRoomTile(_.Hatchery);return t?(e.job=L.Eat,e.jobTarget=t,e.eatAnnounced=!1,e.eatAnim=0,e.setPath(this.grid.findPath(e.x,e.y,t.x,t.y)),this.mentioneOnce("hatcheryUse",z.hatcheryUse),!0):!1}countOccupiedBeds(){let e=0;for(const t of this.creatures)!t.alive||t.job!==L.Sleep||!t.bedKey||e++;return e}spikeNeedsForRoom(e){const t=this.creatures.find(i=>i.alive&&!i.isHero&&!i.held&&i.job===L.Idle);t&&(e===_.Hatchery&&(t.hunger=Math.max(t.hunger,55)),e===_.Lair&&(t.sleepNeed=Math.max(t.sleepNeed,55)))}updateMoods(e){try{const t=this.grid.countRoom(_.Lair)>0,i=Math.max(1,this.grid.countRoom(_.Lair)),n=this.creatures.filter(o=>o.alive&&!o.isHero).length,s=t&&n>i+1;for(const o of this.creatures)try{if(!o.alive||o.isHero||o.held)continue;o.clampStats();let a=2*e;o.hunger>45&&(a-=10*e*((o.hunger-45)/55)),o.sleepNeed>40&&(a-=8*e*((o.sleepNeed-40)/60)),t||(a-=3.5*e),s&&(a-=4.5*e),(o.job===L.Sleep||o.job===L.Eat)&&(a+=12*e),o.job===L.Pray&&(a+=16*e),o.prayerBuff>0&&(a+=4*e),o.hasTalisman&&(a+=1.5*e),this.grid.countRoom(_.Temple)>0&&o.mood<50&&(a+=1.2*e),o.hp<o.maxHp*.4&&(a-=3*e),Number.isFinite(a)||(a=0),this.safeMood(o,(Number.isFinite(o.mood)?o.mood:72)+a),o.mood<14&&!o.leaveWarned?(o.leaveWarned=!0,this.hud.say(z.leaveThreat),this.mentioneOnce("moodLow",z.moodLow)):o.mood>35&&(o.leaveWarned=!1);const h=o.workEfficiency();if(o.isWorker&&h<.75&&!o.efficiencyWarned?(o.efficiencyWarned=!0,this.hud.say(z.sluggishDig)):h>=.82&&(o.efficiencyWarned=!1),o.mood<6&&!o.isWorker&&o.job===L.Idle&&Math.random()<e*.015){o.alive=!1;try{o.mesh&&(o.mesh.visible=!1)}catch{}this.held===o&&(this.held=null),o.held=!1,o.selected=!1,this.selectedGroup=this.selectedGroup.filter(c=>c!==o&&c.alive),this.selected===o&&(this.selected=null),this.pruneSelection(),this.hud.say("A minion has left the Underkeep."),this.selected?this.refreshInspector():this.hud.hideInspector()}}catch(a){console.warn("[underkeep] mood tick failed",o?.id,a)}}catch(t){console.warn("[underkeep] updateMoods failed",t)}}updateCreatures(e){for(const t of this.creatures){if(!t.alive||t.held||t.knockedOut||t.isPrisoner)continue;if(t.stunTimer>0){t.stunTimer-=e;continue}t.speedBuff>0&&(t.speedBuff-=e),t.fleeTimer>0&&(t.fleeTimer-=e),t.attackCooldown>0&&(t.attackCooldown-=e);const i=t.moveAlongPath(e,this.grid);if(t.isHero)this.triggerTrapsForHero(t);else{const n=this.grid.get(t.x,t.y);n&&n.door===qe.Closed&&(n.door=qe.Open,this.requestStructuralRebuild())}t!==this.possessed&&(t.isWorker?this.updateWorkerJob(t,e,i):t.isHero?this.updateHeroJob(t,e):this.updateMinionJob(t,e,i))}}triggerTrapsForHero(e){const t=this.grid.get(e.x,e.y);if(!t||t.trap!==pt.Sentry)return;const i=38;e.hp-=i,e.pulseTint("feast",.55),this.renderer.spawnFx(new A(e.wx,1.1,e.wz),16755268,.55),this.renderer.spawnFx(new A(e.wx,1.4,e.wz),16737826,.4),t.trap=pt.None,this.requestStructuralRebuild(),this.hud.say(z.sentryFire),e.hp<=0&&(this.grid.countRoom(_.Prison)>0?(e.alive=!0,e.hp=1,e.knockedOut=!0,e.job=L.Idle,e.jobTarget=null,e.setPath(null),this.hud.sayNow(z.heroKnocked)):(e.alive=!1,e.mesh.visible=!1,this.spawnCorpse(e.x,e.y,!0)))}updateWorkerJob(e,t,i){if(e.job===L.Fight){if(!this.creatures.find(o=>o.alive&&o.isHero&&!o.knockedOut&&!o.isPrisoner&&Math.hypot(o.x-e.x,o.y-e.y)<7)){e.job=L.Idle,e.jobTarget=null;return}this.doCombat(e,t);return}if(e.job===L.Flee){(i||e.fleeTimer<=0)&&(e.job=L.Idle,e.setPath(null));return}if(e.job===L.DragPrisoner){if(!e.jobTarget){e.job=L.Idle,e.workTimer=0;return}if(e.workTimer<=0){const a=this.creatures.find(d=>d.alive&&d.isHero&&d.knockedOut&&!d.isPrisoner&&!d.held&&Math.hypot(d.x-e.jobTarget.x,d.y-e.jobTarget.y)<2.2);if(!i&&e.pathIndex<e.path.length)return;if(!a){e.job=L.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-a.x,e.y-a.y)>1.6){const d=this.grid.findPath(e.x,e.y,a.x,a.y);d?(e.setPath(d),e.jobTarget={x:a.x,y:a.y}):(e.job=L.Idle,e.jobTarget=null);return}const h=this.findRoomTile(_.Prison);if(!h){e.job=L.Idle,e.jobTarget=null;return}e.workTimer=a.id,e.jobTarget=h;const c=this.grid.findPath(e.x,e.y,h.x,h.y);c?e.setPath(c):(e.job=L.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(a=>a.id===Math.floor(e.workTimer)&&a.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=L.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;o&&this.grid.get(o.x,o.y)?.room===_.Prison&&this.imprisonCreature(s,o.x,o.y),e.workTimer=0,e.job=L.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===L.DragWounded){if(!e.jobTarget){e.job=L.Idle,e.workTimer=0;return}if(e.workTimer<=0){const a=this.creatures.find(d=>d.alive&&!d.isHero&&!d.isWorker&&d.knockedOut&&!d.held&&Math.hypot(d.x-e.jobTarget.x,d.y-e.jobTarget.y)<2.4);if(!i&&e.pathIndex<e.path.length)return;if(!a){e.job=L.Idle,e.jobTarget=null;return}if(Math.hypot(e.x-a.x,e.y-a.y)>1.6){const d=this.grid.findPath(e.x,e.y,a.x,a.y);d?(e.setPath(d),e.jobTarget={x:a.x,y:a.y}):(e.job=L.Idle,e.jobTarget=null);return}const h=this.findFreeOrOwnedBed(a)??this.findRoomTile(_.Lair);if(!h){e.job=L.Idle,e.jobTarget=null;return}e.workTimer=a.id,e.jobTarget=h;const c=this.grid.findPath(e.x,e.y,h.x,h.y);c?e.setPath(c):(e.job=L.Idle,e.workTimer=0,e.jobTarget=null);return}const s=this.creatures.find(a=>a.id===Math.floor(e.workTimer)&&a.alive);if(s)s.wx=e.wx,s.wz=e.wz,s.x=e.x,s.y=e.y,s.knockedOut=!0;else{e.job=L.Idle,e.workTimer=0,e.jobTarget=null;return}if(!i&&e.pathIndex<e.path.length)return;const o=e.jobTarget;if(o&&this.grid.get(o.x,o.y)?.room===_.Lair){s.knockedOut=!1,s.hp=Math.max(s.hp,Math.floor(s.maxHp*.3)),s.x=o.x,s.y=o.y;const a=this.grid.tileToWorld(o.x,o.y);s.wx=a.x,s.wz=a.z,s.job=L.Sleep,s.jobTarget={x:o.x,y:o.y},s.bedKey=`${o.x},${o.y}`,this.bedOwners.set(s.bedKey,s.id),s.setPath(null),this.hud.sayNow(z.lairResting),this.renderer.spawnFx(new A(s.wx,.9,s.wz),6348944,.55)}e.workTimer=0,e.job=L.Idle,e.jobTarget=null,e.setPath(null);return}if(e.job===L.Eat||e.job===L.Sleep||e.job===L.Craft){this.updateMinionJob(e,t,i);return}if(!e.jobTarget)return;const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n){e.job=L.Idle;return}if(e.job===L.Dig||e.job===L.Mine){if(!i&&e.pathIndex<e.path.length)return;if(Math.abs(e.x-n.x)+Math.abs(e.y-n.y)!==1&&Math.hypot(e.x-n.x,e.y-n.y)>1.55){const u=this.grid.findPathAdjacent(e.x,e.y,n.x,n.y);u?e.setPath(u):(e.job=L.Idle,e.jobTarget=null);return}const o=this.grid.tileToWorld(n.x,n.y);e.faceToward(o.x,o.z);const a=this.grid.tileToWorld(e.x,e.y),h=.36,c=a.x+(o.x-a.x)*h,d=a.z+(o.z-a.z)*h;e.wx+=(c-e.wx)*Math.min(1,10*t),e.wz+=(d-e.wz)*Math.min(1,10*t),e.moving=!1,e.workTimer+=t;const l=.32/Math.max(.5,Math.min(1.25,e.workEfficiency()));if(e.workTimer>=l){e.workTimer=0;const u=this.grid.tileToWorld(n.x,n.y);if(this.renderer.spawnDigDebris(u.x,u.z,n.kind===E.Gem?4251840:n.kind===E.Gold?14725184:12615744),n.kind===E.Gold||n.kind===E.Gem){const f=n.kind===E.Gem?40:Math.min(40,n.goldAmount);n.kind===E.Gold&&(n.goldAmount-=f),e.goldCarried+=f,n.digProgress=Math.min(n.kind===E.Gem?.35:1,n.digProgress+.2*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),this.mentioneOnce("firstGold",z.firstGold),n.kind===E.Gem&&this.mentioneOnce("gemSeam",z.gemSeam),n.kind===E.Gold&&n.goldAmount<=0?(n.kind=E.Dirt,n.mark=be.None,n.goldAmount=0,n.digProgress=0,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=L.Idle,e.jobTarget=null):e.goldCarried>=120&&(e.job=L.Idle,e.jobTarget=null,e.setPath(null))}else n.kind===E.Earth?(n.digProgress=Math.min(1,n.digProgress+.34*e.workEfficiency()),this.renderer.updateDigVisual(n.x,n.y,n.digProgress,n.kind),n.digProgress>=1&&(n.kind=E.Dirt,n.mark=be.None,n.digProgress=0,n.door=qe.None,n.trap=pt.None,n.rally=!1,n.room=_.None,this.noteFogChange(this.grid.revealAround(n.x,n.y,1)),this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=L.Idle,e.jobTarget=null,this.saveNow())):(n.mark=be.None,n.digProgress=0,e.job=L.Idle,e.jobTarget=null,this.marksDirty=!0)}}else if(e.job===L.Claim){if(!i&&e.pathIndex<e.path.length)return;if(Math.hypot(e.x-n.x,e.y-n.y)>1.2){const s=this.grid.findPath(e.x,e.y,n.x,n.y);s?e.setPath(s):(e.job=L.Idle,e.jobTarget=null);return}if(n.kind!==E.Dirt){n.mark=be.None,e.job=L.Idle,e.jobTarget=null,this.marksDirty=!0;return}if(e.workTimer+=t,e.workTimer>=.28){n.kind=E.Claimed,n.claimedProgress=1,n.mark=be.None,this.noteFogChange(this.grid.revealFromTerritory()),this.requestStructuralRebuild(),e.job=L.Idle,e.jobTarget=null;const s=this.grid.tileToWorld(n.x,n.y);this.renderer.spawnFx(new A(s.x,.3,s.z),13155496,.4),this.mentioneOnce("claim",z.claim),this.mentioneOnce("fog",z.fog),this.saveNow()}}else if(e.job===L.Fortify){if(!i&&e.pathIndex<e.path.length)return;if(Math.hypot(e.x-n.x,e.y-n.y)>1.6){const s=this.grid.findPathAdjacent(e.x,e.y,n.x,n.y)??this.grid.findPath(e.x,e.y,n.x,n.y);s?e.setPath(s):(e.job=L.Idle,e.jobTarget=null);return}e.workTimer+=t,e.workTimer>=1.15&&(n.fortified=!0,n.mark=be.None,this.requestStructuralRebuild(),e.job=L.Idle,e.jobTarget=null)}else if(e.job===L.Haul){if(!i)return;if(e.goldCarried>0){const s=this.addGold(e.goldCarried);e.goldCarried-=s,this.renderer.spawnFx(new A(e.wx,.6,e.wz),16764992,.55),this.mentioneOnce("firstGold",z.firstGold),e.goldCarried>0&&this.mentioneOnce("treasuryFull",z.treasuryFull)}e.goldCarried<=0&&(e.goldCarried=0),e.job=L.Idle,e.jobTarget=null}}updateMinionJob(e,t,i){if(e.job===L.Eat){if(!i&&e.pathIndex<e.path.length)return;e.eatAnnounced||(e.eatAnnounced=!0,this.hud.say(z.feasting),this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!0),e.pulseTint("feast",1.4)),this.hatcheryFood>0?(this.hatcheryFood=Math.max(0,this.hatcheryFood-1.8*t),e.hunger=Math.max(0,e.hunger-70*t),Math.random()<t*5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"feast",!1),e.pulseTint("feast",.7))):e.hunger=Math.max(0,e.hunger-12*t),e.hunger<5&&(e.job=L.Idle,e.jobTarget=null,e.eatAnnounced=!1)}else if(e.job===L.Sleep){if(!i&&e.pathIndex<e.path.length)return;if(e.jobTarget){const o=`${e.jobTarget.x},${e.jobTarget.y}`;e.bedKey=o,this.bedOwners.set(o,e.id)}const n=ms(this.grid.largestContiguousRoom(_.Lair));e.sleepNeed=Math.max(0,e.sleepNeed-40*t*(1+n*.5));const s=e.hp;e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+12*t*(1+n))),e.hp>s&&(e.restHealAcc+=t,Math.random()<t*4.5&&(this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!1),e.pulseTint("heal",.75)),e.restHealAcc>=1.6&&(e.restHealAcc=0,this.hud.say(z.lairResting),this.renderer.spawnCareSparks(e.wx,e.wz,"heal",!0),e.pulseTint("heal",1.5))),e.sleepNeed<5&&e.hp>=e.maxHp*.95&&(e.job=L.Idle,e.jobTarget=null)}else if(e.job===L.Craft){if(!e.jobTarget){e.job=L.Idle;return}const n=this.grid.get(e.jobTarget.x,e.jobTarget.y);if(!n||n.room!==_.Workshop){e.job=L.Idle,e.jobTarget=null;return}if(!i){if(e.path.length===0){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s)}return}if(e.setPath(null),e.workTimer+=t*e.workEfficiency(),Math.random()<t*.5&&this.renderer.spawnFx(new A(e.wx,.7,e.wz),16755268,.3),e.workTimer>=6){e.workTimer=0;let s=null;this.nextKitIsDoor&&this.doorKits<un?(this.doorKits++,s="door"):this.sentryKits<un?(this.sentryKits++,s="sentry"):this.doorKits<un&&(this.doorKits++,s="door"),this.nextKitIsDoor=!this.nextKitIsDoor,s&&(this.hud.sayNow(z.craftKit.replace("%k",s==="door"?"Door":"Sentry")),this.renderer.spawnFx(new A(e.wx,1.1,e.wz),16765040,.75)),this.doorKits>=un&&this.sentryKits>=un&&(e.job=L.Idle,e.jobTarget=null)}}else if(e.job===L.Research&&i){const n=ms(this.grid.largestContiguousRoom(_.Library));this.researchProgress=Math.min(100,this.researchProgress+12*t*(1+n)),e.workTimer+=t,Math.random()<t*.35&&this.renderer.spawnFx(new A(e.wx,.9,e.wz),8939263,.35),this.researchProgress>=100&&(this.researchProgress=0,this.researchRank=Math.min(3,this.researchRank+1),this.researchRank>=1&&!this.healUnlocked?(this.healUnlocked=!0,this.hud.sayNow(z.researchHeal)):this.hud.sayNow(z.researchDone.replace("%r",String(this.researchRank))),this.renderer.spawnFx(new A(e.wx,1.2,e.wz),11176191,.8))}else if(e.job===L.Guard){if(!e.jobTarget){e.job=L.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null);return}else if(e.job===L.Train&&i){const n=U0*t;if(this.gold<n){this.mentioneOnce("trainGold",z.trainGold),e.job=L.Idle,e.jobTarget=null;return}this.gold=Math.max(0,this.gold-n),e.trainNeed=Math.max(0,e.trainNeed-30*t),e.workTimer+=t;const o=this.grid.get(e.x,e.y)?.room===_.CombatPit,h={rattlekin:"Rattlekin",emberling:"Emberling",skitterwing:"Skitterwing",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e.kind]??"Minion";!o&&e.workTimer>8&&e.level<4&&(e.level++,e.maxHp+=15,e.hp=e.maxHp,e.damage+=3,e.workTimer=0,this.renderer.spawnFx(new A(e.wx,1,e.wz),16755268,.6),this.hud.sayNow(`${h} reaches training level ${e.level}!`)),o&&e.workTimer>12&&e.level>=4&&e.level<10&&(e.level++,e.maxHp+=18,e.hp=e.maxHp,e.damage+=4,e.workTimer=0,this.renderer.spawnFx(new A(e.wx,1.15,e.wz),16736320,.75),this.renderer.spawnFx(new A(e.wx,.7,e.wz),16755302,.45),this.hud.sayNow(z.combatLevelUp.replace("%n",h).replace("%l",String(e.level)))),(!o&&e.level>=4&&this.grid.countRoom(_.CombatPit)>0||e.trainNeed<5||o&&e.level>=10)&&(e.job=L.Idle,e.jobTarget=null)}else if(e.job===L.Pray){if(!e.jobTarget){e.job=L.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const s=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);s&&e.setPath(s);return}const n=this.grid.get(e.x,e.y);if(!n||n.room!==_.Temple){e.job=L.Idle,e.jobTarget=null;return}e.setPath(null),e.workTimer+=t,this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+18*t),Math.random()<t*.4&&this.renderer.spawnFx(new A(e.wx,1,e.wz),16769152,.35),e.workTimer>=3.5&&(e.prayerBuff=Math.max(e.prayerBuff,28),e.workTimer=0,this.mentioneOnce("prayerBuff",z.prayerBuff),this.renderer.spawnFx(new A(e.wx,1.3,e.wz),16765024,.7),!e.hasTalisman&&e.mood>70&&Math.random()<.35?(e.hasTalisman=!0,this.safeMood(e,Math.min(100,e.mood+8)),this.hud.sayNow(z.talismanGift),this.renderer.spawnFx(new A(e.wx,1.5,e.wz),16773280,.9)):this.mentioneOnce("praying",z.praying)),e.mood>=88&&e.prayerBuff>10&&(e.job=L.Idle,e.jobTarget=null)}else if(e.job===L.Flee)(i||e.fleeTimer<=0)&&(e.jobTarget&&this.grid.get(e.jobTarget.x,e.jobTarget.y)?.room===_.Lair?this.assignSleep(e):(e.job=L.Idle,e.setPath(null)));else if(e.job===L.AttackMove)this.doCombat(e,t),i&&e.jobTarget&&e.x===e.jobTarget.x&&e.y===e.jobTarget.y&&(this.creatures.some(s=>s.alive&&s.isHero&&Math.hypot(s.x-e.x,s.y-e.y)<12)||(e.job=L.Guard));else if(e.job===L.Gamble){if(!e.jobTarget){e.job=L.Idle;return}if(!i&&e.path.length>0)return;if(e.x!==e.jobTarget.x||e.y!==e.jobTarget.y){const n=this.grid.findPath(e.x,e.y,e.jobTarget.x,e.jobTarget.y);n&&e.setPath(n);return}e.setPath(null),this.safeMood(e,(Number.isFinite(e.mood)?e.mood:72)+8*t),e.workTimer+=t,Math.random()<t*.8&&this.renderer.spawnFx(new A(e.wx,.7,e.wz),15777856,.25),e.workTimer>=3.2&&(e.workTimer=0,Math.random()<.32?this.addGold(6):this.gold>=2&&(this.gold-=2)),e.mood>=88&&(e.job=L.Idle,e.jobTarget=null)}else e.job===L.Fight?this.doCombat(e,t):e.job===L.Wander&&i&&(e.job=L.Idle)}updateHeroJob(e,t){if(e.path.length===0||e.pathIndex>=e.path.length){const s=this.grid.heartPos.x,o=this.grid.heartPos.y,a=this.creatures.find(d=>d.alive&&!d.isHero&&!d.isWorker&&!d.held&&Math.hypot(d.x-e.x,d.y-e.y)<8),h=a?a.x:s,c=a?a.y:o;if(Math.hypot(e.x-h,e.y-c)>1.2){const d=this.grid.findPath(e.x,e.y,h,c,{forHero:!0,allowHazard:!0});d&&e.setPath(d)}}const i=this.grid.heartPos.x,n=this.grid.heartPos.y;Math.hypot(e.x-i,e.y-n)<=1.5&&e.attackCooldown<=0&&(e.attackCooldown=1.2,this.heartHp-=e.damage,this.renderer.spawnFx(new A(this.grid.tileToWorld(i,n).x,1,this.grid.tileToWorld(i,n).z),16719936,.4),this.mentioneOnce("heartHurt",z.heartHurt)),this.doCombat(e,t)}heartHp=500;doCombat(e,t){try{const i=e.isHero?1.65:1.55,n=this.creatures.filter(m=>m.alive&&m!==e&&m.isHero!==e.isHero&&!m.isWorker&&!m.knockedOut&&!m.isPrisoner&&Math.hypot(m.x-e.x,m.y-e.y)<i),s=e.isHero?this.creatures.filter(m=>m.alive&&m.isWorker&&Math.hypot(m.x-e.x,m.y-e.y)<1.35):[],o=n.length?n:s;if(!o.length||(!this.heroEngageAnnounced&&(e.isHero||o.some(m=>m.isHero))&&(this.heroEngageAnnounced=!0,this.hud.say(z.heroEngage)),e.attackCooldown>0))return;const a=e.isHero?1:1+(e.level-1)*.12,h=!e.isHero&&e.prayerBuff>0?1.08:1,c=!e.isHero&&e.hasTalisman?1.05:1;e.attackCooldown=e.isHero?.85:.78;const d=o[0],l=d.alive,u=e.damage*(.95+Math.random()*.25)*a*h*c;d.takeDamage(u),e.attackPulse=1,e.faceToward(d.wx,d.wz);const f=d.wx-e.wx,g=d.wz-e.wz,v=Math.hypot(f,g)||1;d.wx+=f/v*.12,d.wz+=g/v*.12,this.renderer.spawnFx(new A(d.wx,.85,d.wz),e.isHero?8956671:16728128,.32),this.renderer.spawnFx(new A(d.wx,1.15,d.wz),16768426,.18),l&&!d.alive&&(d.isHero&&this.grid.countRoom(_.Prison)>0?(d.alive=!0,d.hp=1,d.knockedOut=!0,d.isPrisoner=!1,d.convertProgress=0,d.job=L.Idle,d.jobTarget=null,d.setPath(null),d.attackCooldown=0,this.hud.sayNow(z.heroKnocked),this.renderer.spawnFx(new A(d.wx,1.2,d.wz),10535167,.7)):!d.isHero&&!d.isWorker&&this.grid.countRoom(_.Lair)>0?(d.alive=!0,d.hp=1,d.knockedOut=!0,d.job=L.Idle,d.jobTarget=null,d.setPath(null),d.attackCooldown=0,this.hud.sayNow(z.allyKnocked),this.renderer.spawnFx(new A(d.wx,1.1,d.wz),16746592,.65)):(this.spawnCorpse(d.x,d.y,d.isHero),d.isHero&&(this.hud.sayNow(z.heroDown),this.renderer.spawnFx(new A(d.wx,1.2,d.wz),16772744,.7))))}catch(i){console.warn("[underkeep] doCombat failed",i)}}announceSpecies(e,t){const n={skitterwing:"Skitterwing",rattlekin:"Rattlekin",emberling:"Emberling",gravemage:"Gravemage",thornwitch:"Thornwitch",bonewretch:"Bonewretch"}[e]??"minion";this.hud.sayNow(`A ${n} has entered the Underkeep.`),this.hud.say(t)}updatePortal(e){if(this.portalCooldown-=e,this.portalCooldown>0)return;const t=this.grid.countRoom(_.Portal);if(t<=0)return;if(this.attractedCount()>=this.portalCap()){this.mentioneOnce("portalFull",z.portalFull),this.portalCooldown=6;return}const i=this.grid.countRoom(_.Lair),n=this.grid.countRoom(_.Hatchery),s=this.grid.countRoom(_.Training),o=this.grid.countRoom(_.Library),a=this.grid.countRoom(_.Treasury),h=this.grid.countClaimed(),c=this.grid.tiles.find(u=>u.room===_.Portal);if(!c)return;let d=c.x,l=c.y;for(const u of this.grid.neighbors4(c.x,c.y))if(this.grid.isWalkable(u.x,u.y)){d=u.x,l=u.y;break}if(!this.attracted.skitterwing&&h>=16&&t>=1){this.spawnCreature(q.Skitterwing,d,l),this.attracted.skitterwing=!0,this.portalCooldown=8,this.announceSpecies(q.Skitterwing,z.skitterwing);return}if(!this.attracted.rattlekin&&i>=2&&n>=1){this.spawnCreature(q.Rattlekin,d,l),this.attracted.rattlekin=!0,this.portalCooldown=10,this.announceSpecies(q.Rattlekin,z.rattlekin);return}if(!this.attracted.emberling&&s>=2&&i>=3&&this.gold>=200){this.spawnCreature(q.Emberling,d,l),this.attracted.emberling=!0,this.portalCooldown=12,this.announceSpecies(q.Emberling,z.emberling);return}if(!this.attracted.gravemage&&o>=2&&i>=2){this.spawnCreature(q.Gravemage,d,l),this.attracted.gravemage=!0,this.portalCooldown=12,this.announceSpecies(q.Gravemage,z.gravemage);return}if(this.attracted.rattlekin&&i>=2&&n>=1&&Math.random()<.12&&this.creatures.filter(f=>f.alive&&f.kind===q.Rattlekin).length<4){this.spawnCreature(q.Rattlekin,d,l),this.portalCooldown=22,this.hud.sayNow("A Rattlekin has entered the Underkeep.");return}if(this.attracted.gravemage&&o>=4&&Math.random()<.1&&this.creatures.filter(f=>f.alive&&f.kind===q.Gravemage).length<2){this.spawnCreature(q.Gravemage,d,l),this.portalCooldown=28,this.hud.sayNow("A Gravemage has entered the Underkeep.");return}this.attracted.emberling&&s>=4&&a>=2&&Math.random()<.08&&this.creatures.filter(f=>f.alive&&f.kind===q.Emberling).length<2&&(this.spawnCreature(q.Emberling,d,l),this.portalCooldown=30,this.hud.sayNow("An Emberling has entered the Underkeep."))}spawnCorpse(e,t,i){this.corpses.push({x:e,y:t,timer:0,fromHero:i}),this.corpses.length>24&&this.corpses.shift()}imprisonCreature(e,t,i){e.knockedOut=!1,e.isPrisoner=!0,e.convertProgress=Math.max(0,e.convertProgress),e.hp=Math.max(1,Math.min(e.maxHp,e.hp)),e.alive=!0,e.held=!1,e.job=L.Idle,e.jobTarget=null,e.setPath(null),e.x=t,e.y=i;const n=this.grid.tileToWorld(t,i);e.wx=n.x,e.wz=n.z,e.hunger=Math.max(e.hunger,20),this.hud.sayNow(z.prisonerHeld),this.renderer.spawnFx(new A(e.wx,1,e.wz),8425640,.55)}convertPrisoner(e){const t=e.x,i=e.y;e.alive=!1;try{this.renderer.removeEntityMesh(e.mesh)}catch{}const n=Math.random()<.7?q.Thornwitch:q.Rattlekin,s=this.spawnCreature(n,t,i);s.mood=80,s.hunger=15,this.hud.sayNow(z.converted),this.renderer.spawnFx(new A(s.wx,1.2,s.wz),16728160,.8),this.announceSpecies(n,z.converted)}raiseBonewretch(e,t,i){const n=this.findRoomTile(_.Graveyard),s=n?.x??e,o=n?.y??t,a=this.spawnCreature(q.Bonewretch,s,o);a.mood=90,a.hunger=0,a.sleepNeed=0,this.hud.sayNow(i),this.renderer.spawnFx(new A(a.wx,1.1,a.wz),8453984,.75)}updatePrisonEconomy(e){const t=this.grid.countRoom(_.Prison)>0,i=this.grid.countRoom(_.Torture)>0,n=this.grid.countRoom(_.Graveyard)>0;for(const s of this.creatures)!s.alive||!s.isHero||s.held||s.knockedOut&&!s.isPrisoner&&this.grid.get(s.x,s.y)?.room===_.Prison&&this.imprisonCreature(s,s.x,s.y);for(const s of this.creatures){if(!s.alive||!s.isPrisoner)continue;s.hunger=Math.min(100,s.hunger+6*e);const o=this.grid.get(s.x,s.y)?.room===_.Torture;if(!(this.grid.get(s.x,s.y)?.room===_.Prison)&&!o&&t){const h=this.findRoomTile(_.Prison);if(h){s.x=h.x,s.y=h.y;const c=this.grid.tileToWorld(h.x,h.y);s.wx=c.x,s.wz=c.z}}if(i){const h=o?9:4.5,c=s.convertProgress;if(s.convertProgress=Math.min(100,s.convertProgress+h*e),c<40&&s.convertProgress>=40&&this.hud.say(z.converting),s.convertProgress>=100){this.convertPrisoner(s);continue}}if(s.hunger>=100){const h=s.x,c=s.y;s.alive=!1;try{this.renderer.removeEntityMesh(s.mesh)}catch{}n?this.raiseBonewretch(h,c,z.starvedBones):(this.spawnCorpse(h,c,!0),this.hud.sayNow(z.starvedBones))}}if(n&&this.corpses.length){const s=[];for(const o of this.corpses){const a=this.grid.get(o.x,o.y)?.room===_.Graveyard;o.timer+=e*(a?1.6:1),o.timer>=8?this.raiseBonewretch(o.x,o.y,z.boneRaised):s.push(o)}this.corpses=s}else n||(this.corpses=this.corpses.filter(s=>(s.timer+=e*.25,s.timer<40)))}firstInvasionReady(){if(this.time>=O0)return!0;if(this.time<F0)return!1;const e=this.grid.countClaimed(),t=this.grid.countRoom(_.Portal)>0,i=this.grid.countRoom(_.Lair)>=2;return e>=16&&t&&i}updateHeroWave(e){if(this.heroWaveSpawned){if(!this.won&&!this.gameOver&&!this.creatures.some(d=>d.alive&&d.isHero&&!d.knockedOut&&!d.isPrisoner)&&this.time>2){if(this.wavesCleared=Math.min(si,this.wavesCleared+1),this.heroWaveSpawned=!1,this.wavesCleared>=si){this.checkMissionWin();return}this.heroWaveTimer=90+this.wavesCleared*20,this.heroWarn30=!1,this.heroWarn10=!1,this.heroEngageAnnounced=!1;const d=this.wavesCleared+1;this.hud.sayNow(z.waveCleared.replace("%n",String(this.wavesCleared)).replace("%next",String(d)).replace("%w",String(si))),this.hud.say(z.win)}return}if(this.wavesCleared===0&&!this.firstInvasionReady()){this.heroWaveTimer<ps&&(this.heroWaveTimer=ps);return}if(this.heroWaveTimer-=e,!this.heroWarn30&&this.heroWaveTimer<=30&&this.heroWaveTimer>10&&(this.heroWarn30=!0,this.hud.sayNow(z.heroesSoon)),!this.heroWarn10&&this.heroWaveTimer<=10&&this.heroWaveTimer>0&&(this.heroWarn10=!0,this.hud.sayNow(z.heroesImminent)),this.heroWaveTimer>0)return;this.heroWaveSpawned=!0;const t=this.wavesCleared+1;this.hud.sayNow(`${z.heroes} (Wave ${t}/${si})`),this.hud.say(z.heroes);const i=this.grid.heartPos.x,n=this.grid.heartPos.y;let s=2,o=i;for(let c=2;c<Math.min(n-1,this.grid.height/2);c++)if(this.grid.isWalkable(i,c)){s=c,o=i;break}for(let c=s;c<=Math.min(s+4,n-2);c++)for(let d=i-1;d<=i+1;d++){const l=this.grid.get(d,c);!l||l.kind===E.Heart||l.kind===E.Rock||l.fortified||l.kind===E.Gold||(l.kind===E.Earth||l.kind===E.Wall)&&(l.kind=E.Dirt,l.digProgress=0,this.gridDirty=!0)}if(!this.grid.isWalkable(o,s)){const c=this.grid.get(o,s);c&&c.kind!==E.Rock&&c.kind!==E.Heart&&(c.kind=E.Dirt,this.gridDirty=!0)}this.requestStructuralRebuild();const a=1.05+this.wavesCleared*.12,h=(c,d,l)=>{const u=this.spawnCreature(c,d,l);u.job=L.Fight,u.jobTarget={...this.grid.heartPos},u.hp=Math.floor(u.maxHp*a),u.maxHp=u.hp;const f=this.grid.tileToWorld(u.x,u.y);return this.renderer.spawnFx(new A(f.x,1.2,f.z),10535167,.65),u};if(h(q.HeroKnight,o,s),h(q.HeroArcher,o-1,s),t>=2&&h(q.HeroKnight,o+1,s),t>=2&&this.grid.countClaimed()>=40){const c=this.spawnCreature(q.HeroKnight,o,s+1);c.job=L.Fight,c.jobTarget={...this.grid.heartPos},c.hp=Math.floor(c.maxHp*a),c.maxHp=c.hp,this.renderer.spawnFx(new A(c.wx,1.2,c.wz),10535167,.5)}}checkHeart(){this.heartHp<=0&&!this.gameOver&&(this.gameOver=!0,this.hud.say(z.lose),this.hud.showOverlay("Defeat",z.lose,"Try Again"))}render(){if(this.studio?.isOpen()){this.studio.render();return}this.renderer.render()}openStudio(){this.studio?.open()}}const Pv=document.getElementById("game-canvas");function Rv(r){const e=document.getElementById("overlay"),t=document.getElementById("overlay-title"),i=document.getElementById("overlay-msg"),n=document.getElementById("overlay-btn"),s=document.getElementById("overlay-btn-secondary");if(!e||!t||!i||!n)return;t.textContent="Underkeep",i.textContent=r,n.textContent="New Game",s?.classList.add("hidden"),e.classList.remove("hidden");const o=()=>{Zi(),location.reload()};n.onclick=o,document.getElementById("btn-new-game")?.addEventListener("click",o,{once:!0})}let oi=null;try{oi=new Cv(Pv)}catch(r){console.error("[underkeep] fatal boot error — clearing save",r),Zi(),document.body.classList.remove("booting"),Rv("Something went wrong loading your dungeon. Your save was cleared. Tap New Game to begin again.")}window.__underkeep=oi;let kh=performance.now(),vs=0;function zc(r){const e=Math.min(.05,(r-kh)/1e3);if(kh=r,oi)try{oi.update(e),oi.render(),vs=0}catch(t){vs++,console.error("[underkeep] frame error",t);const i=oi;i.renderer?.contextLost?(i.handleContextLost?.(),vs=0):vs>=8&&(console.warn("[underkeep] many frame errors — continuing without overlay"),vs=0)}requestAnimationFrame(zc)}requestAnimationFrame(zc);const le=new URLSearchParams(location.search);oi&&(le.get("shot")==="1"||le.get("shot")==="4"||le.get("shot")==="5b"||le.get("shot")==="5c"||le.get("shot")==="5c-heal"||le.get("shot")==="5c-feast"||le.get("shot")==="6.1"||le.get("shot")==="61"||le.get("shot")==="6.1b"||le.get("shot")==="61b"||le.get("shot")==="6.1b-slap"||le.get("shot")==="6.1b-eff"||le.get("shot")==="6.1c"||le.get("shot")==="61c"||le.get("shot")==="6.1c-pick"||le.get("shot")==="6.1c-slap"||le.get("shot")==="6.2a"||le.get("shot")==="62a"||le.get("shot")==="6.2"||le.get("shot")==="62"||le.get("shot")==="6.3"||le.get("shot")==="63"||le.get("shot")==="6.4"||le.get("shot")==="64"||le.get("shot")==="6.4b"||le.get("shot")==="64b"||le.get("shot")==="6.5"||le.get("shot")==="65"||le.get("shot")==="6.5-fow"||le.get("shot")==="6.5-fortify"||le.get("shot")==="7"||le.get("shot")==="7.0"||le.get("shot")==="8"||le.get("shot")==="8.0"||le.get("shot")==="7.1"||le.get("shot")==="71"||le.get("shot")==="7.1-lava"||le.get("shot")==="71-lava"||le.get("shot")==="7.1-bridge"||le.get("shot")==="71-bridge"||le.get("shot")==="7.1-possess"||le.get("shot")==="71-possess"||le.get("shot")==="7.1-payday"||le.get("shot")==="71-payday"||le.get("shot")==="7.2"||le.get("shot")==="72"||le.get("shot")==="7.2-minimap"||le.get("shot")==="72-minimap"||le.get("shot")==="7.2-mission"||le.get("shot")==="72-mission"||le.get("shot")==="7.2-workshop"||le.get("shot")==="72-workshop"||le.get("shot")==="7.2-worker"||le.get("shot")==="72-worker"||le.get("shot")==="7.3"||le.get("shot")==="73"||le.get("shot")==="7.3-prison"||le.get("shot")==="73-prison"||le.get("shot")==="7.3-torture"||le.get("shot")==="73-torture"||le.get("shot")==="7.3-graveyard"||le.get("shot")==="73-graveyard"||le.get("shot")==="7.3-efficiency"||le.get("shot")==="73-efficiency"||le.get("shot")==="7.4"||le.get("shot")==="74"||le.get("shot")==="7.4-temple"||le.get("shot")==="74-temple"||le.get("shot")==="7.4-combat"||le.get("shot")==="74-combat"||le.get("shot")==="7.4-roster"||le.get("shot")==="74-roster"||le.get("shot")==="7.4-flee"||le.get("shot")==="74-flee"||le.get("shot")==="10"||le.get("shot")==="pass10"||le.get("shot")==="10.1"||le.get("shot")==="101")&&setTimeout(()=>{const r=oi;r.hud.hideOverlay();const e=le.get("shot");e==="10.1"||e==="101"?r.preparePass101Shot?.():e==="10"||e==="pass10"?r.preparePass10Shot?.():e==="8"||e==="8.0"?r.preparePass8Shot?.():e==="7"||e==="7.0"?r.preparePass7Shot?.():e==="7.4-temple"||e==="74-temple"?r.preparePass74Shot?.("temple"):e==="7.4-combat"||e==="74-combat"?r.preparePass74Shot?.("combatPit"):e==="7.4-roster"||e==="74-roster"?r.preparePass74Shot?.("roster"):e==="7.4-flee"||e==="74-flee"?r.preparePass74Shot?.("flee"):e==="7.4"||e==="74"?r.preparePass74Shot?.("both"):e==="7.3-prison"||e==="73-prison"?r.preparePass73Shot?.("prison"):e==="7.3-torture"||e==="73-torture"?r.preparePass73Shot?.("torture"):e==="7.3-graveyard"||e==="73-graveyard"?r.preparePass73Shot?.("graveyard"):e==="7.3-efficiency"||e==="73-efficiency"?r.preparePass73Shot?.("efficiency"):e==="7.3"||e==="73"?r.preparePass73Shot?.("both"):e==="7.2-minimap"||e==="72-minimap"?r.preparePass72Shot?.("minimap"):e==="7.2-mission"||e==="72-mission"?r.preparePass72Shot?.("mission"):e==="7.2-workshop"||e==="72-workshop"?r.preparePass72Shot?.("workshop"):e==="7.2-worker"||e==="72-worker"?r.preparePass72Shot?.("worker"):e==="7.2"||e==="72"?r.preparePass72Shot?.("both"):e==="7.1-lava"||e==="71-lava"?r.preparePass71Shot?.("lava"):e==="7.1-bridge"||e==="71-bridge"?r.preparePass71Shot?.("bridge"):e==="7.1-possess"||e==="71-possess"?r.preparePass71Shot?.("possess"):e==="7.1-payday"||e==="71-payday"?r.preparePass71Shot?.("payday"):e==="7.1"||e==="71"?r.preparePass71Shot?.("both"):e==="6.5-fortify"?r.preparePass65Shot?.("fortify"):e==="6.5-fow"?r.preparePass65Shot?.("fow"):e==="6.5"||e==="65"?r.preparePass65Shot?.("both"):e==="6.4b"||e==="64b"?r.preparePass64bShot?.():e==="6.4"||e==="64"?r.preparePass64Shot?.():e==="6.3"||e==="63"?r.preparePass63Shot?.():e==="6.2a"||e==="62a"?r.preparePass62aStabShot?.():e==="6.2"||e==="62"?r.preparePass62Shot?.():e==="6.1c-slap"?r.preparePass61cShot?.("slap"):e==="6.1c-pick"?r.preparePass61cShot?.("pick"):e==="6.1c"||e==="61c"?r.preparePass61cShot?.("both"):e==="6.1b-slap"?r.preparePass61bShot?.("slap"):e==="6.1b-eff"?r.preparePass61bShot?.("efficiency"):e==="6.1b"||e==="61b"?r.preparePass61bShot?.("both"):e==="6.1"||e==="61"?r.preparePass61Shot?.():e==="5c-heal"?r.preparePass5cShot?.("heal"):e==="5c-feast"?r.preparePass5cShot?.("feast"):e==="5c"||e==="5b"?r.preparePass5cShot?r.preparePass5cShot("both"):r.preparePass5bShot?.():e==="4"||!r.preparePass3Shot?r.preparePass4Shot?.():le.get("pass")==="3"?r.preparePass3Shot?.():r.preparePass4Shot?.()},400);oi&&(le.get("studio")==="1"||le.get("shot")==="studio")&&setTimeout(()=>{const r=oi;r.hud.hideOverlay(),r.openStudio?.()},500);oi&&le.get("smoke")==="1"&&setTimeout(()=>{const r=oi;r.hud.hideOverlay();const e=r.runGuideSmoke?.(16);let t=document.getElementById("smoke-result");t||(t=document.createElement("pre"),t.id="smoke-result",t.setAttribute("data-smoke","1"),document.body.appendChild(t)),t.textContent=JSON.stringify(e??{error:"no-smoke"});const i=e,n=!!i?.mined&&(i.extraDigMarks??1)===0&&(i.stuckHaul??1)===0&&i.resumedDig===!0;document.title=`smoke:${n?"ok":"fail"}`},600);
