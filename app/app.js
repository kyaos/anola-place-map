(()=>{var Ut=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Zf=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(){let i=mr("canvas");return i.style.display="block",i}function gr(...i){let e="THREE."+i.shift();Ms?Ms("log",e,...i):console.log(e,...i)}function xd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=xd(i);let e="THREE."+i.shift();if(Ms)Ms("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=xd(i);let e="THREE."+i.shift();if(Ms)Ms("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Oi(...i){let e=i.join(" ");e in eu||(eu[e]=!0,He(...i))}function vd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Bn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function jf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qf(i,e,t){return i!==e?(t-i)/(e-i):0}function cr(i,e,t){return(1-t)*i+t*e}function ep(i,e,t,n){return cr(i,e,1-Math.exp(-t*n))}function tp(i,e=1){return e-Math.abs(sh(i,e*2)-e)}function np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rp(i,e){return i+Math.random()*(e-i)}function op(i){return i*(.5-Math.random())}function ap(i){i!==void 0&&(tu=i);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lp(i){return i*xs}function cp(i){return i*ws}function hp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pp(){let i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:pr,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}function nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function hc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function So(i,e,t,n,s,r){fs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*fs.x-s*fs.y,ir.y=s*fs.x+r*fs.y):ir.copy(fs),i.copy(e),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Sd)}function Pp(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Si,a),l===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Po);return c<t.near||c>t.far?null:{distance:c,point:Po.clone(),object:i}}function Io(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,Ao),i.getVertexPosition(c,Ro);let h=Pp(i,e,t,n,To,Ao,Ro,_u);if(h){let d=new L;Un.getBarycoord(_u,To,Ao,Ro,d),s&&(h.uv=Un.getInterpolatedAttribute(s,a,l,c,d,new de)),r&&(h.uv1=Un.getInterpolatedAttribute(r,a,l,c,d,new de)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Un.getNormal(To,Ao,Ro,u.normal),h.face=u,h.barycoord=d}return h}function Uo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(sa.fromBufferAttribute(a,s),ra.fromBufferAttribute(a,r),t.distanceSqToSegment(sa,ra,_c,bu)>n)return;_c.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:bu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function rh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Tu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Dp(i,e){let t=1-i;return t*t*e}function Np(i,e){return 2*(1-i)*i*e}function Up(i,e){return i*i*e}function hr(i,e,t,n){return Dp(i,e)+Np(i,t)+Up(i,n)}function Fp(i,e){let t=1-i;return t*t*t*e}function Op(i,e){let t=1-i;return 3*t*t*i*e}function Bp(i,e){return 3*(1-i)*i*i*e}function kp(i,e){return i*i*i*e}function ur(i,e,t,n,s){return Fp(i,e)+Op(i,t)+Bp(i,n)+kp(i,s)}function zp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Md(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Xp(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Dr(r,o,t,a,l,c,0),o}function Md(i,e,t,n,s){let r;if(s===nm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Au(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Au(o/n|0,i[o],i[o+1],r);return r&&Ls(r,r.next)&&(Ur(r),r=r.next),r}function zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ls(t,t.next)||St(t.prev,t,t.next)===0)){if(Ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Dr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Hp(i,n,s,r):Vp(i)){e.push(l.i,i.i,c.i),Ur(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Gp(zi(i),e),Dr(i,e,t,n,s,r,2)):o===2&&Wp(i,e,t,n,s,r):Dr(zi(i),e,t,n,s,r,1);break}}}function Vp(i){let e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&lr(s,a,r,l,o,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(St(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),b=Math.max(a,l,c),m=Math.max(h,d,u),p=Cc(f,g,e,t,n),E=Cc(b,m,e,t,n),A=i.prevZ,v=i.nextZ;for(;A&&A.z>=p&&v&&v.z<=E;){if(A.x>=f&&A.x<=b&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&lr(a,h,l,d,c,u,A.x,A.y)&&St(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&lr(a,h,l,d,c,u,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=b&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&lr(a,h,l,d,c,u,A.x,A.y)&&St(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&lr(a,h,l,d,c,u,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ls(n,s)&&Ed(n,t,t.next,s)&&Nr(n,s)&&Nr(s,n)&&(e.push(n.i,t.i,s.i),Ur(t),Ur(t.next),t=i=s),t=t.next}while(t!==i);return zi(t)}function Wp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qp(o,a)){let l=Td(o,a);o=zi(o,o.next),l=zi(l,l.next),Dr(o,e,t,n,s,r,0),Dr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xp(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Md(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(jp(c))}s.sort(qp);for(let r=0;r<s.length;r++)t=Yp(s[r],t);return t}function qp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yp(i,e){let t=$p(i,e);if(!t)return e;let n=Td(t,i);return zi(n,n.next),zi(t,t.next)}function $p(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ls(i,t))return t;do{if(Ls(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&wd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Nr(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Zp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Zp(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function Jp(i,e,t,n){let s=i;do s.z===0&&(s.z=Cc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kp(s)}function Kp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Cc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function lr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&wd(i,e,t,n,s,r,o,a)}function Qp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!em(i,e)&&(Nr(i,e)&&Nr(e,i)&&tm(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||Ls(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ls(i,e){return i.x===e.x&&i.y===e.y}function Ed(i,e,t,n){let s=zo(St(i,e,t)),r=zo(St(i,e,n)),o=zo(St(t,n,i)),a=zo(St(t,n,e));return!!(s!==r&&o!==a||s===0&&ko(i,t,e)||r===0&&ko(i,n,e)||o===0&&ko(t,i,n)||a===0&&ko(t,e,n))}function ko(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zo(i){return i>0?1:i<0?-1:0}function em(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ed(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Nr(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function tm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Td(i,e){let t=Pc(i.i,i.x,i.y),n=Pc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Au(i,e,t,n){let s=Pc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Ru(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function sm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function rm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function Wi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Pu(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=Wi(i[t]);for(let s in n)e[s]=n[s]}return e}function Pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function om(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}function ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Rd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function cm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Rd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=cm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Iu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Ou(i,e){return i.distance-e.distance}function Nc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],e,t,!0)}}function ch(i,e,t,n){let s=vm(n);switch(t){case eh:return i*e;case Ba:return i*e/s.components*s.byteLength;case ka:return i*e/s.components*s.byteLength;case Ti:return i*e*2/s.components*s.byteLength;case za:return i*e*2/s.components*s.byteLength;case th:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case Va:return i*e*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(e,8)/4;case Ha:case Wa:return Math.max(i,8)*Math.max(e,8)/2;case qa:case Ya:case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case Qr:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dl:case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vm(i){switch(i){case sn:case Jc:return{byteLength:1,components:1};case ks:case Kc:case Cn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case Rn:case Ua:case gn:return{byteLength:4,components:1};case jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var yi,bi,Bu,Fc,ku,qr,zu,Os,Si,en,Zt,Hn,Bs,Oc,Bc,kc,Vu,Hi,Hu,Gu,Wu,Xu,qu,Yu,$u,Zu,zc,Vc,Ju,Ku,ju,Qu,ed,td,nd,id,sd,Xo,qo,Yo,ys,$o,Zo,Jo,Ko,Ia,rd,od,An,Hc,Gc,Wc,Xc,qc,Yc,$c,Zc,Mi,Gi,La,Da,Yr,bs,Fn,jo,Bt,ad,$r,Ct,Na,wi,sn,Jc,Kc,ks,Ua,Rn,gn,Cn,Fa,Oa,zs,jc,Qc,eh,th,_n,kn,Ei,Ba,ka,Ti,za,Va,Zr,Jr,Kr,jr,Ha,Ga,Wa,Xa,qa,Ya,$a,Za,Ja,Qr,Ka,ja,Qa,el,tl,nl,il,sl,rl,ol,al,ll,cl,hl,ul,dl,fl,pl,ml,gl,eo,_l,dr,Qo,Go,wc,Ec,Tc,Ac,ld,xl,cd,ii,zt,fr,pr,ht,Wo,hd,ud,dd,fd,vl,pd,md,yl,gd,nh,ih,wn,Ss,eu,Ms,yd,En,Wt,tu,xs,ws,dn,hh,de,Yt,uh,L,Kl,nu,dh,Ye,jl,iu,su,nt,es,ea,mp,Es,gp,ec,Qt,fh,bt,ta,nn,_r,na,Pa,it,ts,yn,_p,xp,ci,fo,on,ru,ou,Qn,Ts,vp,au,ns,Yn,po,js,yp,bp,lu,cu,hu,uu,Sp,is,tc,At,Ot,Mp,As,bd,hi,mo,$e,Xt,xr,bn,$n,ic,Zn,ss,rs,du,sc,rc,oc,ac,lc,cc,Un,mn,Jn,Sn,go,os,as,ls,ui,di,Di,Qs,_o,xo,Ni,Tt,vo,wp,tn,vr,yr,rt,Ep,er,uc,ei,Tp,pn,dc,cs,an,tr,Ft,dt,ia,jt,br,fc,Ap,Rp,ln,Cp,zn,Rs,hs,nr,us,ds,fs,ir,Sd,yo,sr,bo,fu,pc,pu,Sr,Kn,mc,Mo,wo,pi,Vn,mu,Ui,Eo,gu,To,Ao,Ro,gc,Co,_u,Po,Rt,Mr,wr,ps,xu,Lo,vu,Ip,rr,or,Bi,Fi,Lp,Do,Cs,kt,sa,ra,yu,ar,No,_c,bu,Tn,Su,Mu,ti,Er,Ps,mi,oa,Tr,$t,Ar,aa,Fo,Oo,xc,Bo,ki,cn,Is,la,wu,Eu,vc,yc,bc,ca,Rr,ha,Cr,ua,Pr,da,Ir,Rc,fa,Lr,gi,Ic,On,Fr,im,Or,Br,Ds,Vi,Ad,am,lm,hn,pa,ni,ma,ga,kr,_i,_a,xa,va,ya,un,xi,ba,Sa,Ma,zr,vi,wa,Ea,Cd,Ta,Vr,Hr,Mc,Lu,Du,Aa,Vo,Ho,Nn,Gr,fi,Nu,Uu,qt,Ns,Lc,Us,gs,_s,Ra,Ca,ah,um,lh,dm,fm,pm,mm,gm,_m,xm,Dc,yt,ey,Fu,Wr,Fs,ph,Uc,Xr,mh=Ut(()=>{yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bu=0,Fc=1,ku=2,qr=1,zu=2,Os=3,Si=0,en=1,Zt=2,Hn=0,Bs=1,Oc=2,Bc=3,kc=4,Vu=5,Hi=100,Hu=101,Gu=102,Wu=103,Xu=104,qu=200,Yu=201,$u=202,Zu=203,zc=204,Vc=205,Ju=206,Ku=207,ju=208,Qu=209,ed=210,td=211,nd=212,id=213,sd=214,Xo=0,qo=1,Yo=2,ys=3,$o=4,Zo=5,Jo=6,Ko=7,Ia=0,rd=1,od=2,An=0,Hc=1,Gc=2,Wc=3,Xc=4,qc=5,Yc=6,$c=7,Zc=300,Mi=301,Gi=302,La=303,Da=304,Yr=306,bs=1e3,Fn=1001,jo=1002,Bt=1003,ad=1004,$r=1005,Ct=1006,Na=1007,wi=1008,sn=1009,Jc=1010,Kc=1011,ks=1012,Ua=1013,Rn=1014,gn=1015,Cn=1016,Fa=1017,Oa=1018,zs=1020,jc=35902,Qc=35899,eh=1021,th=1022,_n=1023,kn=1026,Ei=1027,Ba=1028,ka=1029,Ti=1030,za=1031,Va=1033,Zr=33776,Jr=33777,Kr=33778,jr=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,$a=37496,Za=37488,Ja=37489,Qr=37490,Ka=37491,ja=37808,Qa=37809,el=37810,tl=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,eo=36285,_l=36286,dr=2300,Qo=2301,Go=2302,wc=2303,Ec=2400,Tc=2401,Ac=2402,ld=3200,xl=0,cd=1,ii="",zt="srgb",fr="srgb-linear",pr="linear",ht="srgb",Wo=7680,hd=519,ud=512,dd=513,fd=514,vl=515,pd=516,md=517,yl=518,gd=519,nh=35044,ih="300 es",wn=2e3,Ss=2001;eu={},Ms=null;yd={[Xo]:qo,[Yo]:Jo,[$o]:Ko,[ys]:Zo,[qo]:Xo,[Jo]:Yo,[Ko]:$o,[Zo]:ys},En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,xs=Math.PI/180,ws=180/Math.PI;dn={DEG2RAD:xs,RAD2DEG:ws,generateUUID:Bn,clamp:je,euclideanModulo:sh,mapLinear:jf,inverseLerp:Qf,lerp:cr,damp:ep,pingpong:tp,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:op,seededRandom:ap,degToRad:lp,radToDeg:cp,isPowerOfTwo:hp,ceilPowerOfTwo:up,floorPowerOfTwo:dp,setQuaternionFromProperEuler:fp,normalize:ut,denormalize:Mn},hh=class hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;de=hh,Yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],b=r[o+3];if(d!==b||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*b;m<0&&(u=-u,f=-f,g=-g,b=-b,m=-m);let p=1-a;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+b*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+b*a;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;L=uh,Kl=new L,nu=new Yt,dh=class dh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],E=s[1],A=s[4],v=s[7],T=s[2],y=s[5],R=s[8];return r[0]=o*b+a*E+l*T,r[3]=o*m+a*A+l*y,r[6]=o*p+a*v+l*R,r[1]=c*b+h*E+d*T,r[4]=c*m+h*A+d*y,r[7]=c*p+h*v+d*R,r[2]=u*b+f*E+g*T,r[5]=u*m+f*A+g*y,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=d*b,e[1]=(s*c-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=u*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(e,t)),this}rotate(e){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;Ye=dh,jl=new Ye,iu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=pp();ea=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=mr("canvas")),es.width=e.width,es.height=e.height;let s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mp=0,Es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);n.url=r}return t||(e.images[this.uuid]=n),n}};gp=0,ec=new L,Qt=class i extends En{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Ct,o=wi,a=_n,l=sn,c=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Bn(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Zc;Qt.DEFAULT_ANISOTROPY=1;fh=class fh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(f+1)/2,T=(p+1)/2,y=(h+u)/4,R=(d+b)/4,x=(g+m)/4;return A>v&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=y/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=x/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-b)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;bt=fh,ta=class extends En{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ta{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_r=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},na=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Pa=class Pa{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,b,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,b=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-b*c,t[9]=-a*l,t[2]=b-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,b=c*d;t[0]=u+b*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=b+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,b=c*d;t[0]=u-b*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=b-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,b=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+b,t[1]=l*d,t[5]=b*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,b=a*c;t[0]=l*h,t[4]=b-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-b*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,b=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+b,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,xp)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ci.crossVectors(n,on),ci.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ci.crossVectors(n,on)),ci.normalize(),fo.crossVectors(on,ci),s[0]=ci.x,s[4]=fo.x,s[8]=on.x,s[1]=ci.y,s[5]=fo.y,s[9]=on.y,s[2]=ci.z,s[6]=fo.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],E=n[3],A=n[7],v=n[11],T=n[15],y=s[0],R=s[4],x=s[8],M=s[12],P=s[1],D=s[5],V=s[9],q=s[13],O=s[2],H=s[6],Q=s[10],Z=s[14],he=s[3],K=s[7],oe=s[11],se=s[15];return r[0]=o*y+a*P+l*O+c*he,r[4]=o*R+a*D+l*H+c*K,r[8]=o*x+a*V+l*Q+c*oe,r[12]=o*M+a*q+l*Z+c*se,r[1]=h*y+d*P+u*O+f*he,r[5]=h*R+d*D+u*H+f*K,r[9]=h*x+d*V+u*Q+f*oe,r[13]=h*M+d*q+u*Z+f*se,r[2]=g*y+b*P+m*O+p*he,r[6]=g*R+b*D+m*H+p*K,r[10]=g*x+b*V+m*Q+p*oe,r[14]=g*M+b*q+m*Z+p*se,r[3]=E*y+A*P+v*O+T*he,r[7]=E*R+A*D+v*H+T*K,r[11]=E*x+A*V+v*Q+T*oe,r[15]=E*M+A*q+v*Z+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15],E=l*f-c*u,A=a*f-c*d,v=a*u-l*d,T=o*f-c*h,y=o*u-l*h,R=o*d-a*h;return t*(b*E-m*A+p*v)-n*(g*E-m*T+p*y)+s*(g*A-b*T+p*R)-r*(g*v-b*y+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],E=t*a-n*o,A=t*l-s*o,v=t*c-r*o,T=n*l-s*a,y=n*c-r*a,R=s*c-r*l,x=h*b-d*g,M=h*m-u*g,P=h*p-f*g,D=d*m-u*b,V=d*p-f*b,q=u*p-f*m,O=E*q-A*V+v*D+T*P-y*M+R*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/O;return e[0]=(a*q-l*V+c*D)*H,e[1]=(s*V-n*q-r*D)*H,e[2]=(b*R-m*y+p*T)*H,e[3]=(u*y-d*R-f*T)*H,e[4]=(l*P-o*q-c*M)*H,e[5]=(t*q-s*P+r*M)*H,e[6]=(m*v-g*R-p*A)*H,e[7]=(h*R-u*v+f*A)*H,e[8]=(o*V-a*P+c*x)*H,e[9]=(n*P-t*V-r*x)*H,e[10]=(g*y-b*v+p*E)*H,e[11]=(d*v-h*y-f*E)*H,e[12]=(a*M-o*D-l*x)*H,e[13]=(t*D-n*M+s*x)*H,e[14]=(b*A-g*T-m*E)*H,e[15]=(h*T-d*A+u*E)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,b=o*h,m=o*d,p=a*d,E=l*c,A=l*h,v=l*d,T=n.x,y=n.y,R=n.z;return s[0]=(1-(b+p))*T,s[1]=(f+v)*T,s[2]=(g-A)*T,s[3]=0,s[4]=(f-v)*y,s[5]=(1-(u+p))*y,s[6]=(m+E)*y,s[7]=0,s[8]=(g+A)*R,s[9]=(m-E)*R,s[10]=(1-(u+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);let c=1/o,h=1/a,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=wn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,b;if(l)g=r/(o-r),b=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Ss)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=wn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,b;if(l)g=1/(o-r),b=o/(o-r);else if(a===wn)g=-2/(o-r),b=-(o+r)/(o-r);else if(a===Ss)g=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Pa.prototype.isMatrix4=!0;it=Pa,ts=new L,yn=new it,_p=new L(0,0,0),xp=new L(1,1,1),ci=new L,fo=new L,on=new L,ru=new it,ou=new Yt,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ou.setFromEuler(this),this.setFromQuaternion(ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";Ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vp=0,au=new L,ns=new Yt,Yn=new it,po=new L,js=new L,yp=new L,bp=new Yt,lu=new L(1,0,0),cu=new L(0,1,0),hu=new L(0,0,1),uu={type:"added"},Sp={type:"removed"},is={type:"childadded",child:null},tc={type:"childremoved",child:null},At=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Qn,n=new Yt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ye}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(js,po,this.up):Yn.lookAt(po,js,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Yn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),is.child=e,this.dispatchEvent(is),is.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new L(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ot=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},mo={h:0,s:0,l:0};$e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=sh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nc(o,r,e+1/3),this.g=nc(o,r,e),this.b=nc(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return nt.workingToColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=zt){nt.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(mo);let n=cr(hi.h,mo.h,t),s=cr(hi.s,mo.s,t),r=cr(hi.l,mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new $e;$e.NAMES=bd;xr=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new L,$n=new L,ic=new L,Zn=new L,ss=new L,rs=new L,du=new L,sc=new L,rc=new L,oc=new L,ac=new bt,lc=new bt,cc=new bt,Un=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),$n.subVectors(n,t),ic.subVectors(e,t);let o=bn.dot(bn),a=bn.dot($n),l=bn.dot(ic),c=$n.dot($n),h=$n.dot(ic),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ac.setScalar(0),lc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ac,r.x),o.addScaledVector(lc,r.y),o.addScaledVector(cc,r.z),o}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),$n.subVectors(e,t),bn.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ss.subVectors(s,n),rs.subVectors(r,n),sc.subVectors(e,n);let l=ss.dot(sc),c=rs.dot(sc);if(l<=0&&c<=0)return t.copy(n);rc.subVectors(e,s);let h=ss.dot(rc),d=rs.dot(rc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ss,o);oc.subVectors(e,r);let f=ss.dot(oc),g=rs.dot(oc);if(g>=0&&f<=g)return t.copy(r);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(rs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return du.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(du,a);let p=1/(m+b+u);return o=b*p,a=u*p,t.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),_o.subVectors(this.max,Qs),os.subVectors(e.a,Qs),as.subVectors(e.b,Qs),ls.subVectors(e.c,Qs),ui.subVectors(as,os),di.subVectors(ls,as),Di.subVectors(os,ls);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Di.z,Di.y,ui.z,0,-ui.x,di.z,0,-di.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!hc(t,os,as,ls,_o)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,os,as,ls,_o))?!1:(xo.crossVectors(ui,di),t=[xo.x,xo.y,xo.z],hc(t,os,as,ls,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,go=new mn,os=new L,as=new L,ls=new L,ui=new L,di=new L,Di=new L,Qs=new L,_o=new L,xo=new L,Ni=new L;Tt=new L,vo=new de,wp=0,tn=class extends En{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vo.fromBufferAttribute(this,t),vo.applyMatrix3(e),this.setXY(t,vo.x,vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},vr=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rt=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ep=new mn,er=new L,uc=new L,ei=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ep.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(uc)),this.expandByPoint(er.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tp=0,pn=new it,dc=new At,cs=new L,an=new mn,tr=new mn,Ft=new L,dt=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?yr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(an.min,tr.min),an.expandByPoint(Ft),Ft.addVectors(an.max,tr.max),an.expandByPoint(Ft)):(an.expandByPoint(tr.min),an.expandByPoint(tr.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Ft.add(cs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new L,l[x]=new L;let c=new L,h=new L,d=new L,u=new de,f=new de,g=new de,b=new L,m=new L;function p(x,M,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[x].add(b),a[M].add(b),a[P].add(b),l[x].add(m),l[M].add(m),l[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,M=E.length;x<M;++x){let P=E[x],D=P.start,V=P.count;for(let q=D,O=D+V;q<O;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let A=new L,v=new L,T=new L,y=new L;function R(x){T.fromBufferAttribute(s,x),y.copy(T);let M=a[x];A.copy(M),A.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(y,M);let D=v.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,M=E.length;x<M;++x){let P=E[x],D=P.start,V=P.count;for(let q=D,O=D+V;q<O;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new tn(u,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ia=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jt=new L,br=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fc=new L,Ap=new L,Rp=new Ye,ln=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fc.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rp.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cp=0,zn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Bs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Vc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rs=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nr=new L,us=new L,ds=new L,fs=new de,ir=new de,Sd=new it,yo=new L,sr=new L,bo=new L,fu=new de,pc=new de,pu=new de,Sr=class extends At{constructor(e=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ia(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new br(n,3,0,!1)),hs.setAttribute("uv",new br(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;So(yo.set(-.5,-.5,0),ds,o,us,s,r),So(sr.set(.5,-.5,0),ds,o,us,s,r),So(bo.set(.5,.5,0),ds,o,us,s,r),fu.set(0,0),pc.set(1,0),pu.set(1,1);let a=e.ray.intersectTriangle(yo,sr,bo,!1,nr);if(a===null&&(So(sr.set(-.5,.5,0),ds,o,us,s,r),pc.set(0,1),a=e.ray.intersectTriangle(yo,bo,sr,!1,nr),a===null))return;let l=e.ray.origin.distanceTo(nr);l<e.near||l>e.far||t.push({distance:l,point:nr.clone(),uv:Un.getInterpolation(nr,yo,sr,bo,fu,pc,pu,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Kn=new L,mc=new L,Mo=new L,wo=new L,pi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mc.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),wo.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=wo.dot(this.direction),l=-wo.dot(Mo),c=wo.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let b=1/h;d*=b,u*=b,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mc).addScaledVector(Mo,u),f}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,b=t.y-o.y,m=t.z-o.z,p=n.x-o.x,E=n.y-o.y,A=n.z-o.z,v=Math.abs(l),T=Math.abs(c),y=Math.abs(h),R,x,M,P,D,V,q,O,H,Q,Z,he;if(v>=T&&v>=y?(M=l,V=d,H=g,he=p,l>=0?(R=c,x=h,P=u,D=f,q=b,O=m,Q=E,Z=A):(R=h,x=c,P=f,D=u,q=m,O=b,Q=A,Z=E)):T>=y?(M=c,V=u,H=b,he=E,c>=0?(R=h,x=l,P=f,D=d,q=m,O=g,Q=A,Z=p):(R=l,x=h,P=d,D=f,q=g,O=m,Q=p,Z=A)):(M=h,V=f,H=m,he=A,h>=0?(R=l,x=c,P=d,D=u,q=g,O=b,Q=p,Z=E):(R=c,x=l,P=u,D=d,q=b,O=g,Q=E,Z=p)),M===0)return null;let K=R/M,oe=x/M,se=1/M,Ne=P-K*V,Ae=D-oe*V,st=q-K*H,I=O-oe*H,le=Q-K*he,k=Z-oe*he,B=le*I-k*st,ie=Ne*k-Ae*le,_e=st*Ae-I*Ne;if(s){if(B<0||ie<0||_e<0)return null}else if((B<0||ie<0||_e<0)&&(B>0||ie>0||_e>0))return null;let pe=B+ie+_e;if(pe===0)return null;let fe=se*(B*V+ie*H+_e*he);return(pe>0?fe<0:fe>0)?null:this.at(fe/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vn=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mu=new it,Ui=new pi,Eo=new ei,gu=new L,To=new L,Ao=new L,Ro=new L,gc=new L,Co=new L,_u=new L,Po=new L,Rt=class extends At{constructor(e=new dt,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(gc.fromBufferAttribute(d,e),o?Co.addScaledVector(gc,h):Co.addScaledVector(gc.sub(t),h))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Eo.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Eo,gu)===null||Ui.origin.distanceToSquared(gu)>(e.far-e.near)**2))&&(mu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,T=A;v<T;v+=3){let y=a.getX(v),R=a.getX(v+1),x=a.getX(v+2);s=Io(this,p,e,n,c,h,d,y,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let E=a.getX(m),A=a.getX(m+1),v=a.getX(m+2);s=Io(this,o,e,n,c,h,d,E,A,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,T=A;v<T;v+=3){let y=v,R=v+1,x=v+2;s=Io(this,p,e,n,c,h,d,y,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let E=m,A=m+1,v=m+2;s=Io(this,o,e,n,c,h,d,E,A,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Mr=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Bt,h=Bt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wr=class extends tn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ps=new it,xu=new it,Lo=[],vu=new mn,Ip=new it,rr=new Rt,or=new ei,Bi=class extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ip)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),vu.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),or.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),e.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),xu.multiplyMatrices(n,ps),rr.matrixWorld=xu,rr.raycast(e,Lo);for(let o=0,a=Lo.length;o<a;o++){let l=Lo[o];l.instanceId=r,l.object=this,t.push(l)}Lo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,Ba,gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fi=new ei,Lp=new de(.5,.5),Do=new L,Cs=class{constructor(e=new ln,t=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],E=r[12],A=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,p-g,T-E).normalize(),s[1].setComponents(c+o,f+h,p+g,T+E).normalize(),s[2].setComponents(c+a,f+d,p+b,T+A).normalize(),s[3].setComponents(c-a,f-d,p-b,T-A).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,T-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-v).normalize(),t===wn)s[5].setComponents(c+l,f+u,p+m,T+v).normalize();else if(t===Ss)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);let t=Lp.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kt=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sa=new L,ra=new L,yu=new it,ar=new pi,No=new ei,_c=new L,bu=new L,Tn=class extends At{constructor(e=new dt,t=new kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sa.fromBufferAttribute(t,s-1),ra.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sa.distanceTo(ra);e.setAttribute("lineDistance",new rt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;yu.copy(s).invert(),ar.copy(e.ray).applyMatrix4(yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=c){let p=h.getX(b),E=h.getX(b+1),A=Uo(this,e,ar,l,p,E,b);A&&t.push(A)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=Uo(this,e,ar,l,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=c){let p=Uo(this,e,ar,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Uo(this,e,ar,l,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Su=new L,Mu=new L,ti=class extends Tn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Su.fromBufferAttribute(t,s),Mu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Su.distanceTo(Mu);e.setAttribute("lineDistance",new rt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Er=class extends Qt{constructor(e=[],t=Mi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ps=class extends Qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mi=class extends Qt{constructor(e,t,n=Rn,s,r,o,a=Bt,l=Bt,c,h=kn,d=1){if(h!==kn&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},oa=class extends mi{constructor(e,t=Rn,n=Mi,s,r,o=Bt,a=Bt,l,c=kn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$t=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(d,2));function g(b,m,p,E,A,v,T,y,R,x,M){let P=v/R,D=T/x,V=v/2,q=T/2,O=y/2,H=R+1,Q=x+1,Z=0,he=0,K=new L;for(let oe=0;oe<Q;oe++){let se=oe*D-q;for(let Ne=0;Ne<H;Ne++){let Ae=Ne*P-V;K[b]=Ae*E,K[m]=se*A,K[p]=O,c.push(K.x,K.y,K.z),K[b]=0,K[m]=0,K[p]=y>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ne/R),d.push(1-oe/x),Z+=1}}for(let oe=0;oe<x;oe++)for(let se=0;se<R;se++){let Ne=u+se+H*oe,Ae=u+se+H*(oe+1),st=u+(se+1)+H*(oe+1),I=u+(se+1)+H*oe;l.push(Ne,Ae,I),l.push(Ae,st,I),he+=6}a.addGroup(f,he,M),f+=he,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ar=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},aa=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let A=new L,v=new L,T=new L;for(let y=0;y<t.length;y+=3)f(t[y+0],A),f(t[y+1],v),f(t[y+2],T),l(A,v,T,E)}function l(E,A,v,T){let y=T+1,R=[];for(let x=0;x<=y;x++){R[x]=[];let M=E.clone().lerp(v,x/y),P=A.clone().lerp(v,x/y),D=y-x;for(let V=0;V<=D;V++)V===0&&x===y?R[x][V]=M:R[x][V]=M.clone().lerp(P,V/D)}for(let x=0;x<y;x++)for(let M=0;M<2*(y-x)-1;M++){let P=Math.floor(M/2);M%2===0?(u(R[x][P+1]),u(R[x+1][P]),u(R[x][P])):(u(R[x][P+1]),u(R[x+1][P+1]),u(R[x+1][P]))}}function c(E){let A=new L;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(E),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function h(){let E=new L;for(let A=0;A<r.length;A+=3){E.x=r[A+0],E.y=r[A+1],E.z=r[A+2];let v=m(E)/2/Math.PI+.5,T=p(E)/Math.PI+.5;o.push(v,1-T)}g(),d()}function d(){for(let E=0;E<o.length;E+=6){let A=o[E+0],v=o[E+2],T=o[E+4],y=Math.max(A,v,T),R=Math.min(A,v,T);y>.9&&R<.1&&(A<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),T<.2&&(o[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function f(E,A){let v=E*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function g(){let E=new L,A=new L,v=new L,T=new L,y=new de,R=new de,x=new de;for(let M=0,P=0;M<r.length;M+=9,P+=6){E.set(r[M+0],r[M+1],r[M+2]),A.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),y.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),x.set(o[P+4],o[P+5]),T.copy(E).add(A).add(v).divideScalar(3);let D=m(T);b(y,P+0,E,D),b(R,P+2,A,D),b(x,P+4,v,D)}}function b(E,A,v,T){T<0&&E.x===1&&(o[A]=E.x-1),v.x===0&&v.z===0&&(o[A]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Fo=new L,Oo=new L,xc=new L,Bo=new Un,ki=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(xs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:b,b:m,c:p}=Bo;if(b.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Bo.getNormal(xc),d[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){let A=(E+1)%3,v=d[E],T=d[A],y=Bo[h[E]],R=Bo[h[A]],x=`${v}_${T}`,M=`${T}_${v}`;M in u&&u[M]?(xc.dot(u[M].normal)<=r&&(f.push(y.x,y.y,y.z),f.push(R.x,R.y,R.z)),u[M]=null):x in u||(u[x]={index0:c[E],index1:c[A],normal:xc.clone()})}}for(let g in u)if(u[g]){let{index0:b,index1:m}=u[g];Fo.fromBufferAttribute(a,b),Oo.fromBufferAttribute(a,m),f.push(Fo.x,Fo.y,Fo.z),f.push(Oo.x,Oo.y,Oo.z)}this.setAttribute("position",new rt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new de:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new it;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Is=class extends cn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},la=class extends Is{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};wu=new L,Eu=new L,vc=new rh,yc=new rh,bc=new rh,ca=class extends cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Eu.subVectors(s[0],s[1]).add(s[0]),c=Eu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),vc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,b,m),yc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,b,m),bc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),yc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),bc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(vc.calc(l),yc.calc(l),bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Rr=class extends cn{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends cn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(e,s.x,r.x,o.x,a.x),ur(e,s.y,r.y,o.y,a.y),ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cr=class extends cn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends cn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends cn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(e,s.x,r.x,o.x),hr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends cn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(e,s.x,r.x,o.x),hr(e,s.y,r.y,o.y),hr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Tu(a,l.x,c.x,h.x,d.x),Tu(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Rc=Object.freeze({__proto__:null,ArcCurve:la,CatmullRomCurve3:ca,CubicBezierCurve:Rr,CubicBezierCurve3:ha,EllipseCurve:Is,LineCurve:Cr,LineCurve3:ua,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:da,SplineCurve:Ir}),fa=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Rc[s.type]().fromJSON(s))}return this}},Lr=class extends fa{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Cr(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Pr(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Rr(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ir(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Is(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gi=class extends Lr{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Lr().fromJSON(s))}return this}};Ic=class{static triangulate(e,t,n=2){return zp(e,t,n)}},On=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ru(e),Cu(n,e);let o=e.length;t.forEach(Ru);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cu(n,t[l]);let a=Ic.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Fr=class i extends dt{constructor(e=new gi([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:im,A,v=!1,T,y,R,x;if(p){A=p.getSpacedPoints(h),v=!0,u=!1;let X=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,X),y=new L,R=new L,x=new L}u||(m=0,f=0,g=0,b=0);let M=a.extractPoints(c),P=M.shape,D=M.holes;if(!On.isClockWise(P)){P=P.reverse();for(let X=0,J=D.length;X<J;X++){let j=D[X];On.isClockWise(j)&&(D[X]=j.reverse())}}function q(X){let j=10000000000000001e-36,ne=X[0];for(let ue=1;ue<=X.length;ue++){let Ie=ue%X.length,Ue=X[Ie],Ge=Ue.x-ne.x,qe=Ue.y-ne.y,N=Ge*Ge+qe*qe,at=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ne.x),Math.abs(ne.y)),Ze=j*at*at;if(N<=Ze){X.splice(Ie,1),ue--;continue}ne=Ue}}q(P),D.forEach(q);let O=D.length,H=P;for(let X=0;X<O;X++){let J=D[X];P=P.concat(J)}function Q(X,J,j){return J||Xe("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(J,j)}let Z=P.length;function he(X,J,j){let ne,ue,Ie,Ue=X.x-J.x,Ge=X.y-J.y,qe=j.x-X.x,N=j.y-X.y,at=Ue*Ue+Ge*Ge,Ze=Ue*N-Ge*qe;if(Math.abs(Ze)>Number.EPSILON){let C=Math.sqrt(at),_=Math.sqrt(qe*qe+N*N),z=J.x-Ge/C,Y=J.y+Ue/C,ee=j.x-N/_,me=j.y+qe/_,ge=((ee-z)*N-(me-Y)*qe)/(Ue*N-Ge*qe);ne=z+Ue*ge-X.x,ue=Y+Ge*ge-X.y;let te=ne*ne+ue*ue;if(te<=2)return new de(ne,ue);Ie=Math.sqrt(te/2)}else{let C=!1;Ue>Number.EPSILON?qe>Number.EPSILON&&(C=!0):Ue<-Number.EPSILON?qe<-Number.EPSILON&&(C=!0):Math.sign(Ge)===Math.sign(N)&&(C=!0),C?(ne=-Ge,ue=Ue,Ie=Math.sqrt(at)):(ne=Ue,ue=Ge,Ie=Math.sqrt(at/2))}return new de(ne/Ie,ue/Ie)}let K=[];for(let X=0,J=H.length,j=J-1,ne=X+1;X<J;X++,j++,ne++)j===J&&(j=0),ne===J&&(ne=0),K[X]=he(H[X],H[j],H[ne]);let oe=[],se,Ne=K.concat();for(let X=0,J=O;X<J;X++){let j=D[X];se=[];for(let ne=0,ue=j.length,Ie=ue-1,Ue=ne+1;ne<ue;ne++,Ie++,Ue++)Ie===ue&&(Ie=0),Ue===ue&&(Ue=0),se[ne]=he(j[ne],j[Ie],j[Ue]);oe.push(se),Ne=Ne.concat(se)}let Ae;if(m===0)Ae=On.triangulateShape(H,D);else{let X=[],J=[];for(let j=0;j<m;j++){let ne=j/m,ue=f*Math.cos(ne*Math.PI/2),Ie=g*Math.sin(ne*Math.PI/2)+b;for(let Ue=0,Ge=H.length;Ue<Ge;Ue++){let qe=Q(H[Ue],K[Ue],Ie);ie(qe.x,qe.y,-ue),ne===0&&X.push(qe)}for(let Ue=0,Ge=O;Ue<Ge;Ue++){let qe=D[Ue];se=oe[Ue];let N=[];for(let at=0,Ze=qe.length;at<Ze;at++){let C=Q(qe[at],se[at],Ie);ie(C.x,C.y,-ue),ne===0&&N.push(C)}ne===0&&J.push(N)}}Ae=On.triangulateShape(X,J)}let st=Ae.length,I=g+b;for(let X=0;X<Z;X++){let J=u?Q(P[X],Ne[X],I):P[X];v?(R.copy(T.normals[0]).multiplyScalar(J.x),y.copy(T.binormals[0]).multiplyScalar(J.y),x.copy(A[0]).add(R).add(y),ie(x.x,x.y,x.z)):ie(J.x,J.y,0)}for(let X=1;X<=h;X++)for(let J=0;J<Z;J++){let j=u?Q(P[J],Ne[J],I):P[J];v?(R.copy(T.normals[X]).multiplyScalar(j.x),y.copy(T.binormals[X]).multiplyScalar(j.y),x.copy(A[X]).add(R).add(y),ie(x.x,x.y,x.z)):ie(j.x,j.y,d/h*X)}for(let X=m-1;X>=0;X--){let J=X/m,j=f*Math.cos(J*Math.PI/2),ne=g*Math.sin(J*Math.PI/2)+b;for(let ue=0,Ie=H.length;ue<Ie;ue++){let Ue=Q(H[ue],K[ue],ne);ie(Ue.x,Ue.y,d+j)}for(let ue=0,Ie=D.length;ue<Ie;ue++){let Ue=D[ue];se=oe[ue];for(let Ge=0,qe=Ue.length;Ge<qe;Ge++){let N=Q(Ue[Ge],se[Ge],ne);v?ie(N.x,N.y+A[h-1].y,A[h-1].x+j):ie(N.x,N.y,d+j)}}}le(),k();function le(){let X=s.length/3;if(u){let J=0,j=Z*J;for(let ne=0;ne<st;ne++){let ue=Ae[ne];_e(ue[2]+j,ue[1]+j,ue[0]+j)}J=h+m*2,j=Z*J;for(let ne=0;ne<st;ne++){let ue=Ae[ne];_e(ue[0]+j,ue[1]+j,ue[2]+j)}}else{for(let J=0;J<st;J++){let j=Ae[J];_e(j[2],j[1],j[0])}for(let J=0;J<st;J++){let j=Ae[J];_e(j[0]+Z*h,j[1]+Z*h,j[2]+Z*h)}}n.addGroup(X,s.length/3-X,0)}function k(){let X=s.length/3,J=0;B(H,J),J+=H.length;for(let j=0,ne=D.length;j<ne;j++){let ue=D[j];B(ue,J),J+=ue.length}n.addGroup(X,s.length/3-X,1)}function B(X,J){let j=X.length;for(;--j>=0;){let ne=j,ue=j-1;ue<0&&(ue=X.length-1);for(let Ie=0,Ue=h+m*2;Ie<Ue;Ie++){let Ge=Z*Ie,qe=Z*(Ie+1),N=J+ne+Ge,at=J+ue+Ge,Ze=J+ue+qe,C=J+ne+qe;pe(N,at,Ze,C)}}}function ie(X,J,j){l.push(X),l.push(J),l.push(j)}function _e(X,J,j){fe(X),fe(J),fe(j);let ne=s.length/3,ue=E.generateTopUV(n,s,ne-3,ne-2,ne-1);Pe(ue[0]),Pe(ue[1]),Pe(ue[2])}function pe(X,J,j,ne){fe(X),fe(J),fe(ne),fe(J),fe(j),fe(ne);let ue=s.length/3,Ie=E.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Pe(Ie[0]),Pe(Ie[1]),Pe(Ie[3]),Pe(Ie[1]),Pe(Ie[2]),Pe(Ie[3])}function fe(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function Pe(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Rc[s.type]().fromJSON(s)),new i(n,e.options)}},im={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new de(r,o),new de(a,l),new de(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-d),new de(u,1-g),new de(b,1-p)]:[new de(a,1-l),new de(h,1-d),new de(f,1-g),new de(m,1-p)]}};Or=class i extends aa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Br=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let E=p*u-o;for(let A=0;A<c;A++){let v=A*d-r;g.push(v,-E,0),b.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let A=E+c*p,v=E+c*(p+1),T=E+1+c*(p+1),y=E+1+c*p;f.push(A,v,y),f.push(v,T,y)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(b,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class i extends dt{constructor(e=new gi([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let E=g[m];On.isClockWise(E)===!0&&(g[m]=E.reverse())}let b=On.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let E=g[m];f=f.concat(E)}for(let m=0,p=f.length;m<p;m++){let E=f[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=b.length;m<p;m++){let E=b[m],A=E[0]+d,v=E[1]+d,T=E[2]+d;n.push(A,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};Vi=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new L,u=new L,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let E=[],A=p/n,v=o+A*a,T=e*Math.cos(v),y=Math.sqrt(e*e-T*T),R=0;p===0&&o===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let x=0;x<=t;x++){let M=x/t,P=s+M*r;d.x=-y*Math.cos(P),d.y=T,d.z=y*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(M+R,1-A),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let A=h[p][E+1],v=h[p][E],T=h[p+1][E],y=h[p+1][E+1];(p!==0||o>0)&&f.push(A,v,y),(p!==n-1||l<Math.PI)&&f.push(v,T,y)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(b,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};Ad={clone:Wi,merge:Jt},am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pa=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ni=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ma=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ga=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kr=class extends kt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};_i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends _i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:r=e,a=2*t-n;break;case Ac:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:o=e,l=2*n-t;break;case Ac:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,E=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*b+.5*g,v=f*m-f*b;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+E*o[c+T]+A*o[l+T]+v*o[d+T];return r}},xa=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},va=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ya=class extends _i{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),b=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*b+o[l+m]*g;return r}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let b=o[c+g],m=o[l+g],p=f*u+g*2,E=d[p],A=d[p+1],v=e*u+g*2,T=h[v],y=h[v+1],R=hm(n,t,E,T,s);r[g]=Rd(R,b,A,y,m)}return r}};un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Sc(e.settings)&&(n.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ya(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break;case wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Go;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Sc(this.settings)&&(Iu(this.settings.inTangents,e),Iu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Kf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let b=t[d+g];if(b!==t[u+g]||b!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Sc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Qo;xi=class extends un{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=dr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;ba=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};ba.prototype.ValueTypeName="color";Sa=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Sa.prototype.ValueTypeName="number";Ma=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Yt.slerpFlat(r,0,o,c-a,o,c,l);return r}},zr=class extends un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;vi=class extends un{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=dr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;wa=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};wa.prototype.ValueTypeName="vector";Ea=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cd=new Ea,Ta=class{constructor(e){this.manager=e!==void 0?e:Cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";Vr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hr=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Mc=new it,Lu=new L,Du=new L,Aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ss||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vo=new L,Ho=new Yt,Nn=new L,Gr=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Ho,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vo,Ho,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new L,Nu=new de,Uu=new de,qt=class extends Gr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Uu),t.subVectors(Uu,Nu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=class extends Gr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lc=class extends Aa{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Lc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},gs=-90,_s=1,Ra=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(gs,_s,e,t);s.layers=this.layers,this.add(s);let r=new qt(gs,_s,e,t);r.layers=this.layers,this.add(r);let o=new qt(gs,_s,e,t);o.layers=this.layers,this.add(o);let a=new qt(gs,_s,e,t);a.layers=this.layers,this.add(a);let l=new qt(gs,_s,e,t);l.layers=this.layers,this.add(l);let c=new qt(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ca=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ah="\\[\\]\\.:\\/",um=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",dm="[^"+ah.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",lh),pm=/(WCOD+)?/.source.replace("WCOD",dm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),_m=new RegExp("^"+fm+pm+mm+gm+"$"),xm=["material","materials","bones","map"],Dc=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(um,"")}static parseTrackName(e){let t=_m.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Dc;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ey=new Float32Array(1),Fu=new it,Wr=class{constructor(e,t,n=0,s=1/0){this.ray=new pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(e,t=!0,n=[]){return Nc(e,this,n,t),n.sort(Ou),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nc(e[s],this,n,t);return n.sort(Ou),n}};Fs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ph=class ph{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ph.prototype.isMatrix2=!0;Uc=ph,Xr=class extends En{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Kd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],b=d[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let b=d[f];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function i_(i,e,t,n,s,r){let o=new $e(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let v=E.backgroundBlurriness>0;A=e.get(A,v)}return A}function g(E){let A=!1,v=f(E);v===null?m(o,a):v&&v.isColor&&(m(v,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(E,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Yr)?(c===void 0&&(c=new Rt(new $t(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Wi(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jd),c.material.toneMapped=nt.getTransfer(v.colorSpace)!==ht,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Rt(new Br(2,2),new hn({name:"BackgroundMaterial",uniforms:Wi(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(bl,oh(i)),t.buffers.color.setClear(bl.r,bl.g,bl.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,m(o,a)},render:g,addToRenderList:b,dispose:p}}function s_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,V,q,O,H){let Q=!1,Z=d(D,O,q,V);r!==Z&&(r=Z,c(r.object)),Q=f(D,O,q,H),Q&&g(D,O,q,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(D,V,q,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,V,q,O){let H=O.wireframe===!0,Q=n[V.id];Q===void 0&&(Q={},n[V.id]=Q);let Z=D.isInstancedMesh===!0?D.id:0,he=Q[Z];he===void 0&&(he={},Q[Z]=he);let K=he[q.id];K===void 0&&(K={},he[q.id]=K);let oe=K[H];return oe===void 0&&(oe=u(l()),K[H]=oe),oe}function u(D){let V=[],q=[],O=[];for(let H=0;H<t;H++)V[H]=0,q[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:O,object:D,attributes:{},index:null}}function f(D,V,q,O){let H=r.attributes,Q=V.attributes,Z=0,he=q.getAttributes();for(let K in he)if(he[K].location>=0){let se=H[K],Ne=Q[K];if(Ne===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ne=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ne=D.instanceColor)),se===void 0||se.attribute!==Ne||Ne&&se.data!==Ne.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function g(D,V,q,O){let H={},Q=V.attributes,Z=0,he=q.getAttributes();for(let K in he)if(he[K].location>=0){let se=Q[K];se===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));let Ne={};Ne.attribute=se,se&&se.data&&(Ne.data=se.data),H[K]=Ne,Z++}r.attributes=H,r.attributesNum=Z,r.index=O}function b(){let D=r.newAttributes;for(let V=0,q=D.length;V<q;V++)D[V]=0}function m(D){p(D,0)}function p(D,V){let q=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;q[D]=1,O[D]===0&&(i.enableVertexAttribArray(D),O[D]=1),H[D]!==V&&(i.vertexAttribDivisor(D,V),H[D]=V)}function E(){let D=r.newAttributes,V=r.enabledAttributes;for(let q=0,O=V.length;q<O;q++)V[q]!==D[q]&&(i.disableVertexAttribArray(q),V[q]=0)}function A(D,V,q,O,H,Q,Z){Z===!0?i.vertexAttribIPointer(D,V,q,H,Q):i.vertexAttribPointer(D,V,q,O,H,Q)}function v(D,V,q,O){b();let H=O.attributes,Q=q.getAttributes(),Z=V.defaultAttributeValues;for(let he in Q){let K=Q[he];if(K.location>=0){let oe=H[he];if(oe===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){let se=oe.normalized,Ne=oe.itemSize,Ae=e.get(oe);if(Ae===void 0)continue;let st=Ae.buffer,I=Ae.type,le=Ae.bytesPerElement,k=I===i.INT||I===i.UNSIGNED_INT||oe.gpuType===Ua;if(oe.isInterleavedBufferAttribute){let B=oe.data,ie=B.stride,_e=oe.offset;if(B.isInstancedInterleavedBuffer){for(let pe=0;pe<K.locationSize;pe++)p(K.location+pe,B.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let pe=0;pe<K.locationSize;pe++)m(K.location+pe);i.bindBuffer(i.ARRAY_BUFFER,st);for(let pe=0;pe<K.locationSize;pe++)A(K.location+pe,Ne/K.locationSize,I,se,ie*le,(_e+Ne/K.locationSize*pe)*le,k)}else{if(oe.isInstancedBufferAttribute){for(let B=0;B<K.locationSize;B++)p(K.location+B,oe.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let B=0;B<K.locationSize;B++)m(K.location+B);i.bindBuffer(i.ARRAY_BUFFER,st);for(let B=0;B<K.locationSize;B++)A(K.location+B,Ne/K.locationSize,I,se,Ne*le,Ne/K.locationSize*B*le,k)}}else if(Z!==void 0){let se=Z[he];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(K.location,se);break;case 3:i.vertexAttrib3fv(K.location,se);break;case 4:i.vertexAttrib4fv(K.location,se);break;default:i.vertexAttrib1fv(K.location,se)}}}}E()}function T(){M();for(let D in n){let V=n[D];for(let q in V){let O=V[q];for(let H in O){let Q=O[H];for(let Z in Q)h(Q[Z].object),delete Q[Z];delete O[H]}}delete n[D]}}function y(D){if(n[D.id]===void 0)return;let V=n[D.id];for(let q in V){let O=V[q];for(let H in O){let Q=O[H];for(let Z in Q)h(Q[Z].object),delete Q[Z];delete O[H]}}delete n[D.id]}function R(D){for(let V in n){let q=n[V];for(let O in q){let H=q[O];if(H[D.id]===void 0)continue;let Q=H[D.id];for(let Z in Q)h(Q[Z].object),delete Q[Z];delete H[D.id]}}}function x(D){for(let V in n){let q=n[V],O=D.isInstancedMesh===!0?D.id:0,H=q[O];if(H!==void 0){for(let Q in H){let Z=H[Q];for(let he in Z)h(Z[he].object),delete Z[he];delete H[Q]}delete q[O],Object.keys(q).length===0&&delete n[V]}}}function M(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:E}}function r_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function o_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==sn&&R!==gn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:v,maxSamples:T,samples:y}}function a_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ln,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,A=E*4,v=p.clippingState||null;l.value=v,v=h(g,u,A,f);for(let T=0;T!==A;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=f+b*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==b;++A,v+=4)o.copy(d[A]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function d_(i){let e=[],t=[],n=i,s=i-Hs+1+l_;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),b=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,A=p>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(v,f*u*p);for(let T=0;T<u;T++){let y=h[T*2]*2-1,R=h[T*2+1]*2-1;p===0?Xi.set(1,R,y):p===1?Xi.set(-y,1,-R):p===2?Xi.set(-y,R,1):p===3?Xi.set(-1,R,-y):p===4?Xi.set(-y,-1,R):Xi.set(y,R,-1),Xi.toArray(b,(p*u+T)*f)}}let m=new dt;m.setAttribute("position",new tn(g,f)),m.setAttribute("outputDirection",new tn(b,f)),t.push(new Rt(m,null)),n>Hs&&n--}return{lodMeshes:t,sizeLods:e}}function Id(i,e,t){let n=new nn(i,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function f_(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function p_(i,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:c_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ld(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Dd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function m_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===La||f===Da)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new wl(g.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===La||f===Da,b=f===Mi||f===Gi;if(g||b){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ml(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||b&&E&&l(E)?(n===null&&(n=new Ml(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===La?u.mapping=Mi:f===Da&&(u.mapping=Gi),u}function l(u){let f=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function g_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function __(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,b=0;if(g===void 0)return;if(f!==null){let E=f.array;b=f.version;for(let A=0,v=E.length;A<v;A+=3){let T=E[A+0],y=E[A+1],R=E[A+2];u.push(T,y,y,R,R,T)}}else{let E=g.array;b=g.version;for(let A=0,v=E.length/3-1;A<v;A+=3){let T=A+0,y=A+1,R=A+2;u.push(T,y,y,R,R,T)}}let m=new(g.count>=65535?yr:vr)(u,1);m.version=b;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function x_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let b=0;for(let m=0;m<f;m++)b+=u[m];t.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function v_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function y_(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),b===!0&&(A=3);let v=a.attributes.position.count*A,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let y=new Float32Array(v*T*4*d),R=new _r(y,v,T,d);R.type=gn,R.needsUpdate=!0;let x=A*4;for(let P=0;P<d;P++){let D=m[P],V=p[P],q=E[P],O=v*T*4*P;for(let H=0;H<D.count;H++){let Q=H*x;f===!0&&(s.fromBufferAttribute(D,H),y[O+Q+0]=s.x,y[O+Q+1]=s.y,y[O+Q+2]=s.z,y[O+Q+3]=0),g===!0&&(s.fromBufferAttribute(V,H),y[O+Q+4]=s.x,y[O+Q+5]=s.y,y[O+Q+6]=s.z,y[O+Q+7]=0),b===!0&&(s.fromBufferAttribute(q,H),y[O+Q+8]=s.x,y[O+Q+9]=s.y,y[O+Q+10]=s.z,y[O+Q+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new de(v,T)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function b_(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function M_(i,e,t,n,s,r){let o=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new dt;c.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new rt([0,2,0,0,2,0],2));let h=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Rt(c,h),u=new Ns(-1,1,1,-1,0,1),f=null,g=null,b=!1,m,p=null,E=[],A=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),l!==null&&l.setSize(v,T);for(let y=0;y<E.length;y++){let R=E[y];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){E=v,A=E.length>0&&E[0].isRenderPass===!0;let T=o.width,y=o.height;E.length>0&&a===null&&(a=new nn(T,y,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(T,y,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){let x=E[R];x.setSize&&x.setSize(T,y)}},this.begin=function(v,T){if(b||v.toneMapping===An&&E.length===0)return!1;if(p=T,T!==null){let y=T.width,R=T.height;(o.width!==y||o.height!==R)&&this.setSize(y,R)}return A===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=An,!0},this.hasRenderPass=function(){return A},this.end=function(v,T){v.toneMapping=m,b=!0;let y=o,R=a;for(let x=0;x<E.length;x++){let M=E[x];M.enabled!==!1&&(M.render(v,R,y,T),M.needsSwap!==!1&&(y=R,R=R===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},nt.getTransfer(f)===ht&&(h.defines.SRGB_TRANSFER="");let x=S_[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(p),v.render(d,u),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nd[s];if(r===void 0&&(r=new Float32Array(s),Nd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Al(i,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function w_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function R_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Bd.set(n),i.uniformMatrix2fv(this.addr,!1,Bd),It(t,n)}}function C_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Od.set(n),i.uniformMatrix3fv(this.addr,!1,Od),It(t,n)}}function P_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Fd.set(n),i.uniformMatrix4fv(this.addr,!1,Fd),It(t,n)}}function I_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function U_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function k_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=t.isReversedDepthBuffer()?yl:vl,r=Sh):r=Qd,t.setTexture2D(e||r,s)}function z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tf,s)}function V_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nf,s)}function H_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ef,s)}function G_(i){switch(i){case 5126:return w_;case 35664:return E_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return H_}}function W_(i,e){i.uniform1fv(this.addr,e)}function X_(i,e){let t=Ws(e,this.size,2);i.uniform2fv(this.addr,t)}function q_(i,e){let t=Ws(e,this.size,3);i.uniform3fv(this.addr,t)}function Y_(i,e){let t=Ws(e,this.size,4);i.uniform4fv(this.addr,t)}function $_(i,e){let t=Ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Z_(i,e){let t=Ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J_(i,e){let t=Ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function K_(i,e){i.uniform1iv(this.addr,e)}function j_(i,e){i.uniform2iv(this.addr,e)}function Q_(i,e){i.uniform3iv(this.addr,e)}function ex(i,e){i.uniform4iv(this.addr,e)}function tx(i,e){i.uniform1uiv(this.addr,e)}function nx(i,e){i.uniform2uiv(this.addr,e)}function ix(i,e){i.uniform3uiv(this.addr,e)}function sx(i,e){i.uniform4uiv(this.addr,e)}function rx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sh:o=Qd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ox(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tf,r[o])}function ax(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nf,r[o])}function lx(i,e,t){let n=this.cache,s=e.length,r=Al(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ef,r[o])}function cx(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return $_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return K_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}function kd(i,e){i.seq.push(e),i.map[e.id]=e}function hx(i,e,t){let n=i.name,s=n.length;for(yh.lastIndex=0;;){let r=yh.exec(n),o=yh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kd(t,c===void 0?new Mh(a,i,e):new wh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Eh(a),kd(t,d)),t=d}}}function zd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function fx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function px(i){nt._getMatrix(Vd,nt.workingColorSpace,i);let e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case pr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fx(i.getShaderSource(e),a)}else return r}function mx(i,e){let t=px(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _x(i,e){let t=gx[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xx(){nt.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function yx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function io(i){return i!==""}function Gd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Th(i){return i.replace(Sx,wx)}function wx(i,e){let t=Qe[e];if(t===void 0){let n=Mx.get(e);if(n!==void 0)t=Qe[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Th(t)}function Xd(i){return i.replace(Ex,Tx)}function Tx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rx(i){return Ax[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Px(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function Lx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ix[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Nx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ux(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Rx(t),c=Px(t),h=Lx(t),d=Nx(t),u=Ux(t),f=vx(t),g=yx(r),b=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(io).join(`
`),p.length>0&&(p+=`
`)):(m=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Qe.tonemapping_pars_fragment:"",t.toneMapping!==An?_x("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),xx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=Th(o),o=Gd(o,t),o=Wd(o,t),a=Th(a),a=Gd(a,t),a=Wd(a,t),o=Xd(o),a=Xd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+m+o,v=E+p+a,T=zd(s,s.VERTEX_SHADER,A),y=zd(s,s.FRAGMENT_SHADER,v);s.attachShader(b,T),s.attachShader(b,y),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(D){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(b)||"",q=s.getShaderInfoLog(T)||"",O=s.getShaderInfoLog(y)||"",H=V.trim(),Q=q.trim(),Z=O.trim(),he=!0,K=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(he=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,T,y);else{let oe=Hd(s,T,"vertex"),se=Hd(s,y,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+oe+`
`+se)}else H!==""?He("WebGLProgram: Program Info Log:",H):(Q===""||Z==="")&&(K=!1);K&&(D.diagnostics={runnable:he,programLog:H,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(T),s.deleteShader(y),x=new Gs(s,b),M=bx(s,b)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(b,ux)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=y,this}function Bx(i){return i===Ti||i===Qr||i===eo}function kx(i,e,t,n,s,r){let o=new Ts,a=new Ah,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,M,P,D,V,q){let O=D.fog,H=V.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,he=e.get(x.envMap||Q,Z),K=he&&he.mapping===Yr?he.image.height:null,oe=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ne=se!==void 0?se.length:0,Ae=0;H.morphAttributes.position!==void 0&&(Ae=1),H.morphAttributes.normal!==void 0&&(Ae=2),H.morphAttributes.color!==void 0&&(Ae=3);let st,I,le,k;if(oe){let gt=Wn[oe];st=gt.vertexShader,I=gt.fragmentShader}else{st=x.vertexShader,I=x.fragmentShader;let gt=a.getVertexShaderStage(x),lt=a.getFragmentShaderStage(x);a.update(x,gt,lt),le=gt.id,k=lt.id}let B=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),_e=V.isInstancedMesh===!0,pe=V.isBatchedMesh===!0,fe=!!x.map,Pe=!!x.matcap,X=!!he,J=!!x.aoMap,j=!!x.lightMap,ne=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,Ie=!!x.displacementMap,Ue=!!x.emissiveMap,Ge=!!x.metalnessMap,qe=!!x.roughnessMap,N=x.anisotropy>0,at=x.clearcoat>0,Ze=x.dispersion>0,C=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,Y=x.transmission>0,ee=N&&!!x.anisotropyMap,me=at&&!!x.clearcoatMap,ge=at&&!!x.clearcoatNormalMap,te=at&&!!x.clearcoatRoughnessMap,ae=_&&!!x.iridescenceMap,xe=_&&!!x.iridescenceThicknessMap,ke=z&&!!x.sheenColorMap,Se=z&&!!x.sheenRoughnessMap,ve=!!x.specularMap,ze=!!x.specularColorMap,We=!!x.specularIntensityMap,Je=Y&&!!x.transmissionMap,F=Y&&!!x.thicknessMap,ye=!!x.gradientMap,re=!!x.alphaMap,be=x.alphaTest>0,Te=!!x.alphaHash,ce=!!x.extensions,Ve=An;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Fe={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:I,defines:x.defines,customVertexShaderID:le,customFragmentShaderID:k,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:pe,batchingColor:pe&&V._colorsTexture!==null,instancing:_e,instancingColor:_e&&V.instanceColor!==null,instancingMorph:_e&&V.morphTexture!==null,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:fe,matcap:Pe,envMap:X,envMapMode:X&&he.mapping,envMapCubeUVHeight:K,aoMap:J,lightMap:j,bumpMap:ne,normalMap:ue,displacementMap:Ie,emissiveMap:Ue,normalMapObjectSpace:ue&&x.normalMapType===cd,normalMapTangentSpace:ue&&x.normalMapType===xl,packedNormalMap:ue&&x.normalMapType===xl&&Bx(x.normalMap.format),metalnessMap:Ge,roughnessMap:qe,anisotropy:N,anisotropyMap:ee,clearcoat:at,clearcoatMap:me,clearcoatNormalMap:ge,clearcoatRoughnessMap:te,dispersion:Ze,retroreflection:C,iridescence:_,iridescenceMap:ae,iridescenceThicknessMap:xe,sheen:z,sheenColorMap:ke,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:ze,specularIntensityMap:We,transmission:Y,transmissionMap:Je,thicknessMap:F,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:be,alphaHash:Te,combine:x.combine,mapUv:fe&&g(x.map.channel),aoMapUv:J&&g(x.aoMap.channel),lightMapUv:j&&g(x.lightMap.channel),bumpMapUv:ne&&g(x.bumpMap.channel),normalMapUv:ue&&g(x.normalMap.channel),displacementMapUv:Ie&&g(x.displacementMap.channel),emissiveMapUv:Ue&&g(x.emissiveMap.channel),metalnessMapUv:Ge&&g(x.metalnessMap.channel),roughnessMapUv:qe&&g(x.roughnessMap.channel),anisotropyMapUv:ee&&g(x.anisotropyMap.channel),clearcoatMapUv:me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(x.sheenRoughnessMap.channel),specularMapUv:ve&&g(x.specularMap.channel),specularColorMapUv:ze&&g(x.specularColorMap.channel),specularIntensityMapUv:We&&g(x.specularIntensityMap.channel),transmissionMapUv:Je&&g(x.transmissionMap.channel),thicknessMapUv:F&&g(x.thicknessMap.channel),alphaMapUv:re&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ue||N),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(fe||re),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ae,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:fe&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zt,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(M,x),E(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let M=f[x.type],P;if(M){let D=Wn[M];P=Ad.clone(D.uniforms)}else P=x.uniforms;return P}function v(x,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new Fx(i,M,x,s),c.push(P),h.set(M,P)),P}function T(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function y(x){a.remove(x)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:T,releaseShaderCache:y,programs:c,dispose:R}}function zx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $d(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,b,m,p){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:p},i[e]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=o(u),E.groupOrder=b,E.renderOrder=u.renderOrder,E.z=m,E.group=p),e++,E}function l(u,f,g,b,m,p,E){E.reversedDepth===!0&&(m=-m);let A=a(u,f,g,b,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):t.push(A)}function c(u,f,g,b,m,p){let E=a(u,f,g,b,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):t.unshift(E)}function h(u,f){t.length>1&&t.sort(u||Vx),n.length>1&&n.sort(f||Yd),s.length>1&&s.sort(f||Yd)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Hx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new $d,i.set(n,[o])):s>=r.length?(o=new $d,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function qx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yx(i){let e=new Gx,t=Wx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new it,o=new it;function a(c){let h=0,d=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,E=0,A=0,v=0,T=0,y=0,R=0,x=0,M=0,P=0;c.sort(qx);for(let V=0,q=c.length;V<q;V++){let O=c[V],H=O.color,Q=O.intensity,Z=O.distance,he=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ti?he=O.shadow.map.texture:he=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=H.r*Q,d+=H.g*Q,u+=H.b*Q;else if(O.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(O.sh.coefficients[K],Q);P++}else if(O.isSunLight){let K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,se=t.get(O);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=he;let Ne=oe.getViewportCount();for(let Ae=0;Ae<Ne;Ae++)n.sunShadowMatrix[b+Ae]=oe.getMatrix(Ae),n.sunShadowCascade[b+Ae]=oe._cascadeData[Ae];b+=Ne,g++}n.sun[f]=K,f++}else if(O.isDirectionalLight){let K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,se=t.get(O);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=he,n.directionalShadowMatrix[m]=O.shadow.matrix,T++}n.directional[m]=K,m++}else if(O.isSpotLight){let K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(H).multiplyScalar(Q),K.distance=Z,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,n.spot[E]=K;let oe=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,oe.updateMatrices(O),O.castShadow&&M++),n.spotLightMatrix[E]=oe.matrix,O.castShadow){let se=t.get(O);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,n.spotShadow[E]=se,n.spotShadowMap[E]=he,R++}E++}else if(O.isRectAreaLight){let K=e.get(O);K.color.copy(H).multiplyScalar(Q),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=K,A++}else if(O.isPointLight){let K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){let oe=O.shadow,se=t.get(O);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,se.shadowCameraNear=oe.camera.near,se.shadowCameraFar=oe.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=he,n.pointShadowMatrix[p]=O.shadow.matrix,y++}n.point[p]=K,p++}else if(O.isHemisphereLight){let K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(Q),K.groundColor.copy(O.groundColor).multiplyScalar(Q),n.hemi[v]=K,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==E||D.rectAreaLength!==A||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==R||D.numSpotMaps!==x||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=P,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=E,D.rectAreaLength=A,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=R,D.numSpotMaps=x,D.numLightProbes=P,n.version=Xx++)}function l(c,h){let d=0,u=0,f=0,g=0,b=0,m=0,p=h.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){let v=c[E];if(v.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(v.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=n.rectArea[b];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Zd(i){let e=new Yx(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function $x(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zd(i),e.set(s,[a])):r>=o.length?(a=new Zd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qx(i,e,t){let n=new Cs,s=new de,r=new de,o=new bt,a=new ma,l=new ga,c={},h=t.maxTextureSize,d={[Si]:en,[en]:Si,[Zt]:Zt},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Zx,fragmentShader:Jx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let p=this.type;this.render=function(y,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===zu&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qr);let M=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Hn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=p!==this.type;q&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(H=>H.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,H=y.length;O<H;O++){let Q=y[O],Z=Q.shadow;if(Z===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let he=Z.getFrameExtents();s.multiply(he),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,Z.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=K,Z.map===null||q===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Os){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new nn(s.x,s.y,{format:Ti,type:Cn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new mi(s.x,s.y,gn),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=kn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Bt,Z.map.depthTexture.magFilter=Bt}else Q.isPointLight?(Z.map=new wl(s.x),Z.map.depthTexture=new oa(s.x,Rn)):(Z.map=new nn(s.x,s.y),Z.map.depthTexture=new mi(s.x,s.y,Rn)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=kn,this.type===qr?(Z.map.depthTexture.compareFunction=K?yl:vl,Z.map.depthTexture.minFilter=Ct,Z.map.depthTexture.magFilter=Ct):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Bt,Z.map.depthTexture.magFilter=Bt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let oe=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Q.isPointLight!==!0&&Z.updateMatrices(Q,x);for(let se=0;se<oe;se++){let Ne=Z.getCamera(se);if(Q.isPointLight){let Ae=Z.camera,st=Z.matrix,I=Q.distance||Ae.far;I!==Ae.far&&(Ae.far=I,Ae.updateProjectionMatrix()),no.setFromMatrixPosition(Q.matrixWorld),Ae.position.copy(no),bh.copy(Ae.position),bh.add(Kx[se]),Ae.up.copy(jx[se]),Ae.lookAt(bh),Ae.updateMatrixWorld(),st.makeTranslation(-no.x,-no.y,-no.z),Jd.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Jd,Ae.coordinateSystem,Ae.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,se),i.clear();else{se===0&&(i.setRenderTarget(Z.map),i.clear());let Ae=Z.getViewport(se);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),V.viewport(o)}n=Z.getFrustum(se),v(R,x,Ne,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===Os&&E(Z,x),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,P,D)};function E(y,R){let x=e.update(b);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new nn(s.x,s.y,{format:Ti,type:Cn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,b,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(R,null,x,f,b,null)}function A(y,R,x,M){let P=null,D=x.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)P=D;else if(P=x.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let V=P.uuid,q=R.uuid,O=c[V];O===void 0&&(O={},c[V]=O);let H=O[q];H===void 0&&(H=P.clone(),O[q]=H,R.addEventListener("dispose",T)),P=H}if(P.visible=R.visible,P.wireframe=R.wireframe,M===Os?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let V=i.properties.get(P);V.light=x}return P}function v(y,R,x,M,P){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===Os)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,y.matrixWorld);let q=e.update(y),O=y.material;if(Array.isArray(O)){let H=q.groups;for(let Q=0,Z=H.length;Q<Z;Q++){let he=H[Q],K=O[he.materialIndex];if(K&&K.visible){let oe=A(y,K,M,P);y.onBeforeShadow(i,y,R,x,q,oe,he),i.renderBufferDirect(x,null,q,oe,y,he),y.onAfterShadow(i,y,R,x,q,oe,he)}}}else if(O.visible){let H=A(y,O,M,P);y.onBeforeShadow(i,y,R,x,q,H,null),i.renderBufferDirect(x,null,q,H,y,null),y.onAfterShadow(i,y,R,x,q,H,null)}}let V=y.children;for(let q=0,O=V.length;q<O;q++)v(V[q],R,x,M,P)}function T(y){y.target.removeEventListener("dispose",T);for(let x in c){let M=c[x],P=y.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function ev(i,e){function t(){let F=!1,ye=new bt,re=null,be=new bt(0,0,0,0);return{setMask:function(Te){re!==Te&&!F&&(i.colorMask(Te,Te,Te,Te),re=Te)},setLocked:function(Te){F=Te},setClear:function(Te,ce,Ve,Fe,gt){gt===!0&&(Te*=Fe,ce*=Fe,Ve*=Fe),ye.set(Te,ce,Ve,Fe),be.equals(ye)===!1&&(i.clearColor(Te,ce,Ve,Fe),be.copy(ye))},reset:function(){F=!1,re=null,be.set(-1,0,0,0)}}}function n(){let F=!1,ye=!1,re=null,be=null,Te=null;return{setReversed:function(ce){if(ye!==ce){let Ve=e.get("EXT_clip_control");ce?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ye=ce;let Fe=Te;Te=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(ce){ce?B(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ce){re!==ce&&!F&&(i.depthMask(ce),re=ce)},setFunc:function(ce){if(ye&&(ce=yd[ce]),be!==ce){switch(ce){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ce}},setLocked:function(ce){F=ce},setClear:function(ce){Te!==ce&&(Te=ce,ye&&(ce=1-ce),i.clearDepth(ce))},reset:function(){F=!1,re=null,be=null,Te=null,ye=!1}}}function s(){let F=!1,ye=null,re=null,be=null,Te=null,ce=null,Ve=null,Fe=null,gt=null;return{setTest:function(lt){F||(lt?B(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(lt){ye!==lt&&!F&&(i.stencilMask(lt),ye=lt)},setFunc:function(lt,vn,Ln){(re!==lt||be!==vn||Te!==Ln)&&(i.stencilFunc(lt,vn,Ln),re=lt,be=vn,Te=Ln)},setOp:function(lt,vn,Ln){(ce!==lt||Ve!==vn||Fe!==Ln)&&(i.stencilOp(lt,vn,Ln),ce=lt,Ve=vn,Fe=Ln)},setLocked:function(lt){F=lt},setClear:function(lt){gt!==lt&&(i.clearStencil(lt),gt=lt)},reset:function(){F=!1,ye=null,re=null,be=null,Te=null,ce=null,Ve=null,Fe=null,gt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],b=null,m=!1,p=null,E=null,A=null,v=null,T=null,y=null,R=null,x=new $e(0,0,0),M=0,P=!1,D=null,V=null,q=null,O=null,H=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,he=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=he>=2);let oe=null,se={},Ne=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),st=new bt().fromArray(Ne),I=new bt().fromArray(Ae);function le(F,ye,re,be){let Te=new Uint8Array(4),ce=i.createTexture();i.bindTexture(F,ce),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<re;Ve++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ce}let k={};k[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(i.DEPTH_TEST),o.setFunc(ys),ne(!1),ue(Fc),B(i.CULL_FACE),J(Hn);function B(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ie(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function _e(F,ye){return u[F]!==ye?(i.bindFramebuffer(F,ye),u[F]=ye,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ye),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function pe(F,ye){let re=g,be=!1;if(F){re=f.get(ye),re===void 0&&(re=[],f.set(ye,re));let Te=F.textures;if(re.length!==Te.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Ve=Te.length;ce<Ve;ce++)re[ce]=i.COLOR_ATTACHMENT0+ce;re.length=Te.length,be=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,be=!0);be&&i.drawBuffers(re)}function fe(F){return b!==F?(i.useProgram(F),b=F,!0):!1}let Pe={[Hi]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};Pe[Wu]=i.MIN,Pe[Xu]=i.MAX;let X={[qu]:i.ZERO,[Yu]:i.ONE,[$u]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[ed]:i.SRC_ALPHA_SATURATE,[ju]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Zu]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[Qu]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[nd]:i.ONE_MINUS_CONSTANT_COLOR,[id]:i.CONSTANT_ALPHA,[sd]:i.ONE_MINUS_CONSTANT_ALPHA};function J(F,ye,re,be,Te,ce,Ve,Fe,gt,lt){if(F===Hn){m===!0&&(ie(i.BLEND),m=!1);return}if(m===!1&&(B(i.BLEND),m=!0),F!==Vu){if(F!==p||lt!==P){if((E!==Hi||T!==Hi)&&(i.blendEquation(i.FUNC_ADD),E=Hi,T=Hi),lt)switch(F){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bc:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",F);break}A=null,v=null,y=null,R=null,x.set(0,0,0),M=0,p=F,P=lt}return}Te=Te||ye,ce=ce||re,Ve=Ve||be,(ye!==E||Te!==T)&&(i.blendEquationSeparate(Pe[ye],Pe[Te]),E=ye,T=Te),(re!==A||be!==v||ce!==y||Ve!==R)&&(i.blendFuncSeparate(X[re],X[be],X[ce],X[Ve]),A=re,v=be,y=ce,R=Ve),(Fe.equals(x)===!1||gt!==M)&&(i.blendColor(Fe.r,Fe.g,Fe.b,gt),x.copy(Fe),M=gt),p=F,P=!1}function j(F,ye){F.side===Zt?ie(i.CULL_FACE):B(i.CULL_FACE);let re=F.side===en;ye&&(re=!re),ne(re),F.blending===Bs&&F.transparent===!1?J(Hn):J(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let be=F.stencilWrite;a.setTest(be),be&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function ue(F){F!==Bu?(B(i.CULL_FACE),F!==V&&(F===Fc?i.cullFace(i.BACK):F===ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),V=F}function Ie(F){F!==q&&(Z&&i.lineWidth(F),q=F)}function Ue(F,ye,re){F?(B(i.POLYGON_OFFSET_FILL),(O!==ye||H!==re)&&(O=ye,H=re,o.getReversed()&&(ye=-ye),i.polygonOffset(ye,re))):ie(i.POLYGON_OFFSET_FILL)}function Ge(F){F?B(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function qe(F){F===void 0&&(F=i.TEXTURE0+Q-1),oe!==F&&(i.activeTexture(F),oe=F)}function N(F,ye,re){re===void 0&&(oe===null?re=i.TEXTURE0+Q-1:re=oe);let be=se[re];be===void 0&&(be={type:void 0,texture:void 0},se[re]=be),(be.type!==F||be.texture!==ye)&&(oe!==re&&(i.activeTexture(re),oe=re),i.bindTexture(F,ye||k[F]),be.type=F,be.texture=ye)}function at(){let F=se[oe];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function _(){try{i.texSubImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function me(){try{i.texStorage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function ge(){try{i.texStorage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function te(){try{i.texImage2D(...arguments)}catch(F){Xe("WebGLState:",F)}}function ae(){try{i.texImage3D(...arguments)}catch(F){Xe("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function ke(F,ye){d[F]!==ye&&(i.pixelStorei(F,ye),d[F]=ye)}function Se(F){st.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),st.copy(F))}function ve(F){I.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),I.copy(F))}function ze(F,ye){let re=c.get(ye);re===void 0&&(re=new WeakMap,c.set(ye,re));let be=re.get(F);be===void 0&&(be=i.getUniformBlockIndex(ye,F.name),re.set(F,be))}function We(F,ye){let be=c.get(ye).get(F);l.get(ye)!==be&&(i.uniformBlockBinding(ye,be,F.__bindingPointIndex),l.set(ye,be))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},oe=null,se={},u={},f=new WeakMap,g=[],b=null,m=!1,p=null,E=null,A=null,v=null,T=null,y=null,R=null,x=new $e(0,0,0),M=0,P=!1,D=null,V=null,q=null,O=null,H=null,st.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ie,bindFramebuffer:_e,drawBuffers:pe,useProgram:fe,setBlending:J,setMaterial:j,setFlipSided:ne,setCullFace:ue,setLineWidth:Ie,setPolygonOffset:Ue,setScissorTest:Ge,activeTexture:qe,bindTexture:N,unbindTexture:at,compressedTexImage2D:Ze,compressedTexImage3D:C,texImage2D:te,texImage3D:ae,pixelStorei:ke,getParameter:xe,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:me,texStorage3D:ge,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:ee,scissor:Se,viewport:ve,reset:Je}}function tv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,_){return g?new OffscreenCanvas(C,_):mr("canvas")}function m(C,_,z){let Y=1,ee=Ze(C);if((ee.width>z||ee.height>z)&&(Y=z/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let me=Math.floor(Y*ee.width),ge=Math.floor(Y*ee.height);u===void 0&&(u=b(me,ge));let te=_?b(me,ge):u;return te.width=me,te.height=ge,te.getContext("2d").drawImage(C,0,0,me,ge),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+me+"x"+ge+")."),te}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function p(C){return C.generateMipmaps}function E(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,_,z,Y,ee,me=!1){if(C!==null){if(i[C]!==void 0)return i[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;Y&&(ge=e.get("EXT_texture_norm16"),ge||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=_;if(_===i.RED&&(z===i.FLOAT&&(te=i.R32F),z===i.HALF_FLOAT&&(te=i.R16F),z===i.UNSIGNED_BYTE&&(te=i.R8),z===i.UNSIGNED_SHORT&&ge&&(te=ge.R16_EXT),z===i.SHORT&&ge&&(te=ge.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.R8UI),z===i.UNSIGNED_SHORT&&(te=i.R16UI),z===i.UNSIGNED_INT&&(te=i.R32UI),z===i.BYTE&&(te=i.R8I),z===i.SHORT&&(te=i.R16I),z===i.INT&&(te=i.R32I)),_===i.RG&&(z===i.FLOAT&&(te=i.RG32F),z===i.HALF_FLOAT&&(te=i.RG16F),z===i.UNSIGNED_BYTE&&(te=i.RG8),z===i.UNSIGNED_SHORT&&ge&&(te=ge.RG16_EXT),z===i.SHORT&&ge&&(te=ge.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.RG8UI),z===i.UNSIGNED_SHORT&&(te=i.RG16UI),z===i.UNSIGNED_INT&&(te=i.RG32UI),z===i.BYTE&&(te=i.RG8I),z===i.SHORT&&(te=i.RG16I),z===i.INT&&(te=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.RGB8UI),z===i.UNSIGNED_SHORT&&(te=i.RGB16UI),z===i.UNSIGNED_INT&&(te=i.RGB32UI),z===i.BYTE&&(te=i.RGB8I),z===i.SHORT&&(te=i.RGB16I),z===i.INT&&(te=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),z===i.UNSIGNED_INT&&(te=i.RGBA32UI),z===i.BYTE&&(te=i.RGBA8I),z===i.SHORT&&(te=i.RGBA16I),z===i.INT&&(te=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&ge&&(te=ge.RGB16_EXT),z===i.SHORT&&ge&&(te=ge.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),_===i.RGBA){let ae=me?pr:nt.getTransfer(ee);z===i.FLOAT&&(te=i.RGBA32F),z===i.HALF_FLOAT&&(te=i.RGBA16F),z===i.UNSIGNED_BYTE&&(te=ae===ht?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ge&&(te=ge.RGBA16_EXT),z===i.SHORT&&ge&&(te=ge.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function T(C,_){let z;return C?_===null||_===Rn||_===zs?z=i.DEPTH24_STENCIL8:_===gn?z=i.DEPTH32F_STENCIL8:_===ks&&(z=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===zs?z=i.DEPTH_COMPONENT24:_===gn?z=i.DEPTH_COMPONENT32F:_===ks&&(z=i.DEPTH_COMPONENT16),z}function y(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){let _=C.target;_.removeEventListener("dispose",R),M(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(C){let _=C.target;_.removeEventListener("dispose",x),D(_)}function M(C){let _=n.get(C);if(_.__webglInit===void 0)return;let z=C.source,Y=f.get(z);if(Y){let ee=Y[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(Y).length===0&&f.delete(z)}n.remove(C)}function P(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let z=C.source,Y=f.get(z);delete Y[_.__cacheKey],o.memory.textures--}function D(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let ee=0;ee<_.__webglFramebuffer[Y].length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[Y][ee]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=C.textures;for(let Y=0,ee=z.length;Y<ee;Y++){let me=n.get(z[Y]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(C)}let V=0;function q(){V=0}function O(){return V}function H(C){V=C}function Q(){let C=V;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,C}function Z(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function he(C,_){let z=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Y=C.image;if(Y===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,C,_);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function K(C,_){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ie(z,C,_);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function oe(C,_){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){ie(z,C,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function se(C,_){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){_e(z,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Ne={[bs]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},Ae={[Bt]:i.NEAREST,[ad]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},st={[ud]:i.NEVER,[gd]:i.ALWAYS,[dd]:i.LESS,[vl]:i.LEQUAL,[fd]:i.EQUAL,[yl]:i.GEQUAL,[pd]:i.GREATER,[md]:i.NOTEQUAL};function I(C,_){if(_.type===gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===Na||_.magFilter===$r||_.magFilter===wi||_.minFilter===Ct||_.minFilter===Na||_.minFilter===$r||_.minFilter===wi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ne[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ne[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ne[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ae[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ae[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,st[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==$r&&_.minFilter!==wi||_.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function le(C,_){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));let Y=_.source,ee=f.get(Y);ee===void 0&&(ee={},f.set(Y,ee));let me=Z(_);if(me!==C.__cacheKey){ee[me]===void 0&&(ee[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[me].usedTimes++;let ge=ee[C.__cacheKey];ge!==void 0&&(ee[C.__cacheKey].usedTimes--,ge.usedTimes===0&&P(_)),C.__cacheKey=me,C.__webglTexture=ee[me].texture}return z}function k(C,_,z){return Math.floor(Math.floor(C/z)/_)}function B(C,_,z,Y){let me=C.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,Y,_.data);else{me.sort((ke,Se)=>ke.start-Se.start);let ge=0;for(let ke=1;ke<me.length;ke++){let Se=me[ge],ve=me[ke],ze=Se.start+Se.count,We=k(ve.start,_.width,4),Je=k(Se.start,_.width,4);ve.start<=ze+1&&We===Je&&k(ve.start+ve.count-1,_.width,4)===We?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++ge,me[ge]=ve)}me.length=ge+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ke=0,Se=me.length;ke<Se;ke++){let ve=me[ke],ze=Math.floor(ve.start/4),We=Math.ceil(ve.count/4),Je=ze%_.width,F=Math.floor(ze/_.width),ye=We,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Je,F,ye,re,z,Y,_.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function ie(C,_,z){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let ee=le(C,_),me=_.source;t.bindTexture(Y,C.__webglTexture,i.TEXTURE0+z);let ge=n.get(me);if(me.version!==ge.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let re=nt.getPrimaries(nt.workingColorSpace),be=_.colorSpace===ii?null:nt.getPrimaries(_.colorSpace),Te=_.colorSpace===ii||re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ae=m(_.image,!1,s.maxTextureSize);ae=at(_,ae);let xe=r.convert(_.format,_.colorSpace),ke=r.convert(_.type),Se=v(_.internalFormat,xe,ke,_.normalized,_.colorSpace,_.isVideoTexture);I(Y,_);let ve,ze=_.mipmaps,We=_.isVideoTexture!==!0,Je=ge.__version===void 0||ee===!0,F=me.dataReady,ye=y(_,ae);if(_.isDepthTexture)Se=T(_.format===Ei,_.type),Je&&(We?t.texStorage2D(i.TEXTURE_2D,1,Se,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Se,ae.width,ae.height,0,xe,ke,null));else if(_.isDataTexture)if(ze.length>0){We&&Je&&t.texStorage2D(i.TEXTURE_2D,ye,Se,ze[0].width,ze[0].height);for(let re=0,be=ze.length;re<be;re++)ve=ze[re],We?F&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ve.width,ve.height,xe,ke,ve.data):t.texImage2D(i.TEXTURE_2D,re,Se,ve.width,ve.height,0,xe,ke,ve.data);_.generateMipmaps=!1}else We?(Je&&t.texStorage2D(i.TEXTURE_2D,ye,Se,ae.width,ae.height),F&&B(_,ae,xe,ke)):t.texImage2D(i.TEXTURE_2D,0,Se,ae.width,ae.height,0,xe,ke,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){We&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Se,ze[0].width,ze[0].height,ae.depth);for(let re=0,be=ze.length;re<be;re++)if(ve=ze[re],_.format!==_n)if(xe!==null)if(We){if(F)if(_.layerUpdates.size>0){let Te=ch(ve.width,ve.height,_.format,_.type);for(let ce of _.layerUpdates){let Ve=ve.data.subarray(ce*Te/ve.data.BYTES_PER_ELEMENT,(ce+1)*Te/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ce,ve.width,ve.height,1,xe,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,ae.depth,xe,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Se,ve.width,ve.height,ae.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,ae.depth,xe,ke,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Se,ve.width,ve.height,ae.depth,0,xe,ke,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{We&&Je&&t.texStorage2D(i.TEXTURE_2D,ye,Se,ze[0].width,ze[0].height);for(let re=0,be=ze.length;re<be;re++)ve=ze[re],_.format!==_n?xe!==null?We?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Se,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?F&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ve.width,ve.height,xe,ke,ve.data):t.texImage2D(i.TEXTURE_2D,re,Se,ve.width,ve.height,0,xe,ke,ve.data)}else if(_.isDataArrayTexture)if(We){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Se,ae.width,ae.height,ae.depth),F)if(_.layerUpdates.size>0){let re=ch(ae.width,ae.height,_.format,_.type);for(let be of _.layerUpdates){let Te=ae.data.subarray(be*re/ae.data.BYTES_PER_ELEMENT,(be+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ae.width,ae.height,1,xe,ke,Te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,ke,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ae.width,ae.height,ae.depth,0,xe,ke,ae.data);else if(_.isData3DTexture)We?(Je&&t.texStorage3D(i.TEXTURE_3D,ye,Se,ae.width,ae.height,ae.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,ke,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ae.width,ae.height,ae.depth,0,xe,ke,ae.data);else if(_.isFramebufferTexture){if(Je)if(We)t.texStorage2D(i.TEXTURE_2D,ye,Se,ae.width,ae.height);else{let re=ae.width,be=ae.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,Se,re,be,0,xe,ke,null),re>>=1,be>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),d.add(_),re.onpaint=be=>{let Te=be.changedElements;for(let ce of d)Te.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Te=i.RGBA,ce=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ce,Ve,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(We&&Je){let re=Ze(ze[0]);t.texStorage2D(i.TEXTURE_2D,ye,Se,re.width,re.height)}for(let re=0,be=ze.length;re<be;re++)ve=ze[re],We?F&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,xe,ke,ve):t.texImage2D(i.TEXTURE_2D,re,Se,xe,ke,ve);_.generateMipmaps=!1}else if(We){if(Je){let re=Ze(ae);t.texStorage2D(i.TEXTURE_2D,ye,Se,re.width,re.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,ke,ae)}else t.texImage2D(i.TEXTURE_2D,0,Se,xe,ke,ae);p(_)&&E(Y),ge.__version=me.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function _e(C,_,z){if(_.image.length!==6)return;let Y=le(C,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let me=n.get(ee);if(ee.version!==me.__version||Y===!0){t.activeTexture(i.TEXTURE0+z);let ge=nt.getPrimaries(nt.workingColorSpace),te=_.colorSpace===ii?null:nt.getPrimaries(_.colorSpace),ae=_.colorSpace===ii||ge===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let xe=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ce=0;ce<6;ce++)!xe&&!ke?Se[ce]=m(_.image[ce],!0,s.maxCubemapSize):Se[ce]=ke?_.image[ce].image:_.image[ce],Se[ce]=at(_,Se[ce]);let ve=Se[0],ze=r.convert(_.format,_.colorSpace),We=r.convert(_.type),Je=v(_.internalFormat,ze,We,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,ye=me.__version===void 0||Y===!0,re=ee.dataReady,be=y(_,ve);I(i.TEXTURE_CUBE_MAP,_);let Te;if(xe){F&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Je,ve.width,ve.height);for(let ce=0;ce<6;ce++){Te=Se[ce].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){let Fe=Te[Ve];_.format!==_n?ze!==null?F?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,Je,Fe.width,Fe.height,0,Fe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,0,0,Fe.width,Fe.height,ze,We,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve,Je,Fe.width,Fe.height,0,ze,We,Fe.data)}}}else{if(Te=_.mipmaps,F&&ye){Te.length>0&&be++;let ce=Ze(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ke){F?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Se[ce].width,Se[ce].height,ze,We,Se[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Se[ce].width,Se[ce].height,0,ze,We,Se[ce].data);for(let Ve=0;Ve<Te.length;Ve++){let gt=Te[Ve].image[ce].image;F?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,gt.width,gt.height,ze,We,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,Je,gt.width,gt.height,0,ze,We,gt.data)}}else{F?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ze,We,Se[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,ze,We,Se[ce]);for(let Ve=0;Ve<Te.length;Ve++){let Fe=Te[Ve];F?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,0,0,ze,We,Fe.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ve+1,Je,ze,We,Fe.image[ce])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),me.__version=ee.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function pe(C,_,z,Y,ee,me){let ge=r.convert(z.format,z.colorSpace),te=r.convert(z.type),ae=v(z.internalFormat,ge,te,z.normalized,z.colorSpace),xe=n.get(_),ke=n.get(z);if(ke.__renderTarget=_,!xe.__hasExternalTextures){let Se=Math.max(1,_.width>>me),ve=Math.max(1,_.height>>me);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,me,ae,Se,ve,_.depth,0,ge,te,null):t.texImage2D(ee,me,ae,Se,ve,0,ge,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),qe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ee,ke.__webglTexture,0,Ge(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ee,ke.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(C,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let Y=_.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,me=T(_.stencilBuffer,ee),ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(_),me,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(_),me,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,me,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,C)}else{let Y=_.textures;for(let ee=0;ee<Y.length;ee++){let me=Y[ee],ge=r.convert(me.format,me.colorSpace),te=r.convert(me.type),ae=v(me.internalFormat,ge,te,me.normalized,me.colorSpace);qe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(_),ae,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(_),ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(C,_,z){let Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(_.depthTexture);if(ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),I(i.TEXTURE_CUBE_MAP,_.depthTexture);let xe=r.convert(_.depthTexture.format),ke=r.convert(_.depthTexture.type),Se;_.depthTexture.format===kn?Se=i.DEPTH_COMPONENT24:_.depthTexture.format===Ei&&(Se=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,_.width,_.height,0,xe,ke,null)}}else he(_.depthTexture,0);let me=ee.__webglTexture,ge=Ge(_),te=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ae=_.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===kn)qe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,te,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ae,te,me,0);else if(_.depthTexture.format===Ei)qe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,te,me,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ae,te,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(C){let _=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Y}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)Pe(_.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?Pe(_.__webglFramebuffer[0],C,0):Pe(_.__webglFramebuffer,C,0)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),fe(_.__webglDepthbuffer[Y],C,!1);else{let ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,me)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),fe(_.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(C,_,z){let Y=n.get(C);_!==void 0&&pe(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&X(C)}function j(C){let _=C.texture,z=n.get(C),Y=n.get(_);C.addEventListener("dispose",x);let ee=C.textures,me=C.isWebGLCubeRenderTarget===!0,ge=ee.length>1;if(ge||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,o.memory.textures++),me){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let ae=0;ae<_.mipmaps.length;ae++)z.__webglFramebuffer[te][ae]=i.createFramebuffer()}else z.__webglFramebuffer[te]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)z.__webglFramebuffer[te]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ge)for(let te=0,ae=ee.length;te<ae;te++){let xe=n.get(ee[te]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&qe(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){let ae=ee[te];z.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[te]);let xe=r.convert(ae.format,ae.colorSpace),ke=r.convert(ae.type),Se=v(ae.internalFormat,xe,ke,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),ve=Ge(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,z.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),I(i.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)pe(z.__webglFramebuffer[te][ae],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ae);else pe(z.__webglFramebuffer[te],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(_)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let te=0,ae=ee.length;te<ae;te++){let xe=ee[te],ke=n.get(xe),Se=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ke.__webglTexture),I(Se,xe),pe(z.__webglFramebuffer,C,xe,i.COLOR_ATTACHMENT0+te,Se,0),p(xe)&&E(Se)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,Y.__webglTexture),I(te,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)pe(z.__webglFramebuffer[ae],C,_,i.COLOR_ATTACHMENT0,te,ae);else pe(z.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,te,0);p(_)&&E(te),t.unbindTexture()}C.depthBuffer&&X(C)}function ne(C){let _=C.textures;for(let z=0,Y=_.length;z<Y;z++){let ee=_[z];if(p(ee)){let me=A(C),ge=n.get(ee).__webglTexture;t.bindTexture(me,ge),E(me),t.unbindTexture()}}}let ue=[],Ie=[];function Ue(C){if(C.samples>0){if(qe(C)===!1){let _=C.textures,z=C.width,Y=C.height,ee=i.COLOR_BUFFER_BIT,me=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(C),te=_.length>1;if(te)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ae=C.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);let ke=n.get(_[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,ee,i.NEAREST),l===!0&&(ue.length=0,Ie.length=0,ue.push(i.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ue.push(me),Ie.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ge.__webglColorRenderbuffer[xe]);let ke=n.get(_[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ge(C){return Math.min(s.maxSamples,C.samples)}function qe(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function at(C,_){let z=C.colorSpace,Y=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==fr&&z!==ii&&(nt.getTransfer(z)===ht?(Y!==_n||ee!==sn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",z)),_}function Ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.getTextureUnits=O,this.setTextureUnits=H,this.setTexture2D=he,this.setTexture2DArray=K,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=J,this.setupRenderTarget=j,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nv(i,e){function t(n,s=ii){let r,o=nt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===th)return i.RGB;if(n===_n)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===za)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===jr)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Qr||n===Ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return r.COMPRESSED_R11_EAC;if(n===Ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return r.COMPRESSED_RG11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ja||n===Qa||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===fl||n===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===eo||n===_l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function ov(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),A=E.envMap,v=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function av(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let y=T.program;n.uniformBlockBinding(v,y)}function c(v,T){let y=s[v.id];y===void 0&&(m(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",E));let R=T.program;n.updateUBOMapping(v,R);let x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let T=d();v.__bindingPointIndex=T;let y=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],y=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,M=y.length;x<M;x++){let P=y[x];if(Array.isArray(P))for(let D=0,V=P.length;D<V;D++)f(P[D],x,D,R);else f(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,T,y,R){if(b(v,T,y,R)===!0){let x=v.__offset,M=v.value;if(Array.isArray(M)){let P=0;for(let D=0;D<M.length;D++){let V=M[D],q=p(V);g(V,v.__data,P),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,T,y){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,y)}function b(v,T,y,R){let x=v.value,M=T+"_"+y;if(R[M]===void 0)return typeof x=="number"||typeof x=="boolean"?R[M]=x:ArrayBuffer.isView(x)?R[M]=x.slice():R[M]=x.clone(),!0;{let P=R[M];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(v){let T=v.uniforms,y=0,R=16;for(let M=0,P=T.length;M<P;M++){let D=Array.isArray(T[M])?T[M]:[T[M]];for(let V=0,q=D.length;V<q;V++){let O=D[V],H=Array.isArray(O.value)?O.value:[O.value];for(let Q=0,Z=H.length;Q<Z;Q++){let he=H[Q],K=p(he),oe=y%R,se=oe%K.boundary,Ne=oe+se;y+=se,Ne!==0&&R-Ne<K.storage&&(y+=R-Ne),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=K.storage}}}let x=y%R;return x>0&&(y+=R-x),v.__size=y,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),T}function E(v){let T=v.target;T.removeEventListener("dispose",E);let y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:A}}function cv(){return Gn===null&&(Gn=new Mr(lv,16,16,Ti,Cn),Gn.name="DFG_LUT",Gn.minFilter=Ct,Gn.magFilter=Ct,Gn.wrapS=Fn,Gn.wrapT=Fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var Sm,Mm,wm,Em,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Nm,Um,Fm,Om,Bm,km,zm,Vm,Hm,Gm,Wm,Xm,qm,Ym,$m,Zm,Jm,Km,jm,Qm,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,vg,yg,bg,Sg,Mg,wg,Eg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ng,Ug,Fg,Og,Bg,kg,zg,Vg,Hg,Gg,Wg,Xg,qg,Yg,$g,Zg,Jg,Kg,jg,Qg,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,b0,S0,M0,w0,E0,T0,A0,R0,C0,P0,I0,L0,D0,N0,U0,F0,O0,B0,k0,z0,V0,H0,G0,W0,X0,q0,Y0,$0,Z0,J0,K0,j0,Q0,e_,t_,Qe,Me,Wn,bl,n_,jd,Hs,l_,c_,h_,to,Pd,gh,_h,xh,vh,u_,Xi,Ml,wl,S_,Qd,Sh,ef,tf,nf,Nd,Ud,Fd,Od,Bd,Mh,wh,Eh,yh,Gs,ux,dx,Vd,gx,Sl,Sx,Mx,Ex,Ax,Cx,Ix,Dx,Ox,Ah,Rh,Xx,Zx,Jx,Kx,jx,Jd,no,bh,iv,sv,Ch,Ph,rv,sf,lv,Gn,El,si=Ut(()=>{mh();mh();Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mm=`#ifdef USE_ALPHAHASH
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
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,yg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,a0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`#include <common>
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
}`,C0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#define LAMBERT
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
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,z0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,G0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
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
}`,X0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,$0=`#define TOON
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
}`,Z0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,J0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,e_=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Sm,alphahash_pars_fragment:Mm,alphamap_fragment:wm,alphamap_pars_fragment:Em,alphatest_fragment:Tm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Lm,beginnormal_vertex:Dm,bsdfs:Nm,iridescence_fragment:Um,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:km,clipping_planes_vertex:zm,color_fragment:Vm,color_pars_fragment:Hm,color_pars_vertex:Gm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:Zm,emissivemap_fragment:Jm,emissivemap_pars_fragment:Km,colorspace_fragment:jm,colorspace_pars_fragment:Qm,envmap_fragment:eg,envmap_common_pars_fragment:tg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:dg,lights_pars_begin:fg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:_g,lights_phong_pars_fragment:xg,lights_physical_fragment:vg,lights_physical_pars_fragment:yg,lights_fragment_begin:bg,lights_fragment_maps:Sg,lights_fragment_end:Mg,lightprobes_pars_fragment:wg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Ag,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Pg,map_particle_fragment:Ig,map_particle_pars_fragment:Lg,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Ug,morphcolor_vertex:Fg,morphnormal_vertex:Og,morphtarget_pars_vertex:Bg,morphtarget_vertex:kg,normal_fragment_begin:zg,normal_fragment_maps:Vg,normal_pars_fragment:Hg,normal_pars_vertex:Gg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Zg,opaque_fragment:Jg,packing:Kg,premultiplied_alpha_fragment:jg,project_vertex:Qg,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:_0,uv_pars_fragment:x0,uv_pars_vertex:v0,uv_vertex:y0,worldpos_vertex:b0,background_vert:S0,background_frag:M0,backgroundCube_vert:w0,backgroundCube_frag:E0,cube_vert:T0,cube_frag:A0,depth_vert:R0,depth_frag:C0,distance_vert:P0,distance_frag:I0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:N0,linedashed_frag:U0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:B0,meshlambert_frag:k0,meshmatcap_vert:z0,meshmatcap_frag:V0,meshnormal_vert:H0,meshnormal_frag:G0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:$0,meshtoon_frag:Z0,points_vert:J0,points_frag:K0,shadow_vert:j0,shadow_frag:Q0,sprite_vert:e_,sprite_frag:t_},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Wn={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Wn.physical={uniforms:Jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};bl={r:0,b:0,g:0},n_=new it,jd=new Ye;jd.set(-1,0,0,0,1,0,0,0,1);Hs=4,l_=6,c_=20,h_=256,to=new Ns,Pd=new $e,gh=null,_h=0,xh=0,vh=!1,u_=new L,Xi=new L,Ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=u_}=r;gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,xh),this._renderer.xr.enabled=vh,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Cn,format:_n,colorSpace:fr,depthBuffer:!1},s=Id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=d_(r)),this._blurMaterial=p_(r,e,t),this._ggxMaterial=f_(r,e,t)}return s}_compileMaterial(e){let t=new Rt(new dt,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,s,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Pd),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new $t,new Vn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Pd),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let T=this._cubeSize;Vs(s,v*T,A>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(b,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Mi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-Hs?n-g+Hs:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Vs(r,m,p,3*b,2*b),s.setRenderTarget(r),s.render(a,to),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Vs(e,m,p,3*b,2*b),s.setRenderTarget(e),s.render(a,to)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Hs?s-this._lodMax+Hs:0),u=4*(this._cubeSize-h);Vs(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,to)}};wl=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $t(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Hn});r.uniforms.tEquirect.value=t;let o=new Rt(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=Ct),new Ra(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};S_={[Hc]:"LINEAR_TONE_MAPPING",[Gc]:"REINHARD_TONE_MAPPING",[Wc]:"CINEON_TONE_MAPPING",[Xc]:"ACES_FILMIC_TONE_MAPPING",[Yc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};Qd=new Qt,Sh=new mi(1,1),ef=new _r,tf=new na,nf=new Er,Nd=[],Ud=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=G_(t.type)}},wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cx(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;Gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);hx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};ux=37297,dx=0;Vd=new Ye;gx={[Hc]:"Linear",[Gc]:"Reinhard",[Wc]:"Cineon",[Xc]:"ACESFilmic",[Yc]:"AgX",[$c]:"Neutral",[qc]:"Custom"};Sl=new L;Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;Mx=new Map;Ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ax={[qr]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};Cx={[Mi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE_UV"};Ix={[Gi]:"ENVMAP_MODE_REFRACTION"};Dx={[Ia]:"ENVMAP_BLENDING_MULTIPLY",[rd]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};Ox=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}};Xx=0;Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],jx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Jd=new it,no=new L,bh=new L;iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:iv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends En{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new Ch,p={},E=t.getContextAttributes(),A=null,v=null,T=[],y=[],R=new de,x=null,M=null,P=new qt;P.viewport=new bt;let D=new qt;D.viewport=new bt;let V=[P,D],q=new Ca,O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=T[k];return B===void 0&&(B=new As,T[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=T[k];return B===void 0&&(B=new As,T[k]=B),B.getGripSpace()},this.getHand=function(k){let B=T[k];return B===void 0&&(B=new As,T[k]=B),B.getHandSpace()};function Q(k){let B=y.indexOf(k.inputSource);if(B===-1)return;let ie=T[B];ie!==void 0&&(ie.update(k.inputSource,k.frame,c||o),ie.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",he);for(let k=0;k<T.length;k++){let B=y[k];B!==null&&(y[k]=null,T[k].disconnect(B))}O=null,H=null,m.reset();for(let k in p)delete p[k];if(e.setRenderTarget(A),f=null,u=null,d=null,s=null,v=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),M!==null){let k=M.camera;k.fov=M.fov,k.zoom=M.zoom,k.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",he),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,_e=null,pe=null;E.depth&&(pe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?Ei:kn,_e=E.stencil?zs:Rn);let fe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new nn(u.textureWidth,u.textureHeight,{format:_n,type:sn,depthTexture:new mi(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new nn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(k){for(let B=0;B<k.removed.length;B++){let ie=k.removed[B],_e=y.indexOf(ie);_e>=0&&(y[_e]=null,T[_e].disconnect(ie))}for(let B=0;B<k.added.length;B++){let ie=k.added[B],_e=y.indexOf(ie);if(_e===-1){for(let fe=0;fe<T.length;fe++)if(fe>=y.length){y.push(ie),_e=fe;break}else if(y[fe]===null){y[fe]=ie,_e=fe;break}if(_e===-1)break}let pe=T[_e];pe&&pe.connect(ie)}}let K=new L,oe=new L;function se(k,B,ie){K.setFromMatrixPosition(B.matrixWorld),oe.setFromMatrixPosition(ie.matrixWorld);let _e=K.distanceTo(oe),pe=B.projectionMatrix.elements,fe=ie.projectionMatrix.elements,Pe=pe[14]/(pe[10]-1),X=pe[14]/(pe[10]+1),J=(pe[9]+1)/pe[5],j=(pe[9]-1)/pe[5],ne=(pe[8]-1)/pe[0],ue=(fe[8]+1)/fe[0],Ie=Pe*ne,Ue=Pe*ue,Ge=_e/(-ne+ue),qe=Ge*-ne;if(B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(qe),k.translateZ(Ge),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),pe[10]===-1)k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let N=Pe+Ge,at=X+Ge,Ze=Ie-qe,C=Ue+(_e-qe),_=J*X/at*N,z=j*X/at*N;k.projectionMatrix.makePerspective(Ze,C,_,z,N,at),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Ne(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let B=k.near,ie=k.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),q.near=D.near=P.near=B,q.far=D.far=P.far=ie,(O!==q.near||H!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,H=q.far),q.layers.mask=k.layers.mask|6,P.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let _e=k.parent,pe=q.cameras;Ne(q,_e);for(let fe=0;fe<pe.length;fe++)Ne(pe[fe],_e);pe.length===2?se(q,P,D):q.projectionMatrix.copy(P.projectionMatrix),M===null&&k.isPerspectiveCamera&&(M={camera:k,fov:k.fov,zoom:k.zoom}),Ae(k,q,_e)};function Ae(k,B,ie){ie===null?k.matrix.copy(B.matrixWorld):(k.matrix.copy(ie.matrixWorld),k.matrix.invert(),k.matrix.multiply(B.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(B.projectionMatrix),k.projectionMatrixInverse.copy(B.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ws*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(k){return p[k]};let st=null;function I(k,B){if(h=B.getViewerPose(c||o),g=B,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let _e=!1;ie.length!==q.cameras.length&&(q.cameras.length=0,_e=!0);for(let X=0;X<ie.length;X++){let J=ie[X],j=null;if(f!==null)j=f.getViewport(J);else{let ue=d.getViewSubImage(u,J);j=ue.viewport,X===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ne=V[X];ne===void 0&&(ne=new qt,ne.layers.enable(X),ne.viewport=new bt,V[X]=ne),ne.matrix.fromArray(J.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(J.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(j.x,j.y,j.width,j.height),X===0&&(q.matrix.copy(ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),_e===!0&&q.cameras.push(ne)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let X=d.getDepthInformation(ie[0]);X&&X.isValid&&X.texture&&m.init(X,s.renderState)}if(pe&&pe.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let X=0;X<ie.length;X++){let J=ie[X].camera;if(J){let j=p[J];j||(j=new Tr,p[J]=j);let ne=d.getCameraImage(J);j.sourceTexture=ne}}}}for(let ie=0;ie<T.length;ie++){let _e=y[ie],pe=T[ie];_e!==null&&pe!==void 0&&pe.update(_e,B,c||o)}st&&st(k,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let le=new Kd;le.setAnimationLoop(I),this.setAnimationLoop=function(k){st=k},this.dispose=function(){}}},rv=new it,sf=new Ye;sf.set(-1,0,0,0,1,0,0,0,1);lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;El=class{constructor(e={}){let{canvas:t=_d(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let b=f,m=new Set([Va,za,ka]),p=new Set([sn,Rn,ks,zs,Fa,Oa]),E=new Uint32Array(4),A=new Int32Array(4),v=new L,T=null,y=null,R=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,V=null,q=null,O=null,H=null;this._outputColorSpace=zt;let Q=0,Z=0,he=null,K=-1,oe=null,se=new bt,Ne=new bt,Ae=null,st=new $e(0),I=0,le=t.width,k=t.height,B=1,ie=null,_e=null,pe=new bt(0,0,le,k),fe=new bt(0,0,le,k),Pe=!1,X=new Cs,J=!1,j=!1,ne=new it,ue=new L,Ie=new bt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function qe(){return he===null?B:1}let N=n;function at(S,U){return t.getContext(S,U)}let Ze,C,_,z,Y,ee,me,ge,te,ae,xe,ke,Se,ve,ze,We,Je,F,ye,re,be,Te,ce;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),N===null){let U="webgl2";if(N=at(U,S),N===null)throw at(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(S){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Xe("WebGLRenderer: "+S.message),S}function Ve(){Ze=new g_(N),Ze.init(),be=new nv(N,Ze),C=new o_(N,Ze,e,be),_=new ev(N,Ze),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),q=N.createFramebuffer(),O=N.createFramebuffer(),H=N.createFramebuffer(),z=new v_(N),Y=new zx,ee=new tv(N,Ze,_,Y,C,be,z),me=new m_(P),ge=new bm(N),Te=new s_(N,ge),te=new __(N,ge,z,Te),ae=new b_(N,te,ge,Te,z),F=new y_(N,C,ee),ze=new a_(Y),xe=new kx(P,me,Ze,C,Te,ze),ke=new ov(P,Y),Se=new Hx,ve=new $x(Ze),Je=new i_(P,me,_,ae,g,l),We=new Qx(P,ae,C),ce=new av(N,z,C,_),ye=new r_(N,Ze,z),re=new x_(N,Ze,z),z.programs=xe.programs,P.capabilities=C,P.extensions=Ze,P.properties=Y,P.renderLists=Se,P.shadowMap=We,P.state=_,P.info=z}b!==sn&&(M=new M_(b,t.width,t.height,a,s,r));let Fe=new Ph(P,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(le,k,!1))},this.getSize=function(S){return S.set(le,k)},this.setSize=function(S,U,$=!0){if(Fe.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}le=S,k=U,t.width=Math.floor(S*B),t.height=Math.floor(U*B),$===!0&&(t.style.width=S+"px",t.style.height=U+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(le*B,k*B).floor()},this.setDrawingBufferSize=function(S,U,$){le=S,k=U,B=$,t.width=Math.floor(S*$),t.height=Math.floor(U*$),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(b===sn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(pe)},this.setViewport=function(S,U,$,G){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,U,$,G),_.viewport(se.copy(pe).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(fe)},this.setScissor=function(S,U,$,G){S.isVector4?fe.set(S.x,S.y,S.z,S.w):fe.set(S,U,$,G),_.scissor(Ne.copy(fe).multiplyScalar(B).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(S){_.setScissorTest(Pe=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,$=!0){let G=0;if(S){let W=!1;if(he!==null){let Ee=he.texture.format;W=m.has(Ee)}if(W){let Ee=he.texture.type,Ce=p.has(Ee),we=Je.getClearColor(),Le=Je.getClearAlpha(),Be=we.r,Ke=we.g,et=we.b;Ce?(E[0]=Be,E[1]=Ke,E[2]=et,E[3]=Le,N.clearBufferuiv(N.COLOR,0,E)):(A[0]=Be,A[1]=Ke,A[2]=et,A[3]=Le,N.clearBufferiv(N.COLOR,0,A))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),V=S},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Je.dispose(),Se.dispose(),ve.dispose(),Y.dispose(),me.dispose(),ae.dispose(),Te.dispose(),ce.dispose(),xe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Xh),Fe.removeEventListener("sessionend",qh),Li.stop()};function gt(S){S.preventDefault(),gr("WebGLRenderer: Context Lost."),D=!0}function lt(){gr("WebGLRenderer: Context Restored."),D=!1;let S=z.autoReset,U=We.enabled,$=We.autoUpdate,G=We.needsUpdate,W=We.type;Ve(),z.autoReset=S,We.enabled=U,We.autoUpdate=$,We.needsUpdate=G,We.type=W}function vn(S){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ln(S){let U=S.target;U.removeEventListener("dispose",Ln),Hf(U)}function Hf(S){Gf(S),Y.remove(S)}function Gf(S){let U=Y.get(S).programs;U!==void 0&&(U.forEach(function($){xe.releaseProgram($)}),S.isShaderMaterial&&xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,$,G,W,Ee){U===null&&(U=Ue);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=qf(S,U,$,G,W);_.setMaterial(G,Ce);let Le=$.index,Be=1;if(G.wireframe===!0){if(Le=te.getWireframeAttribute($),Le===void 0)return;Be=2}let Ke=$.drawRange,et=$.attributes.position,De=Ke.start*Be,ct=(Ke.start+Ke.count)*Be;Ee!==null&&(De=Math.max(De,Ee.start*Be),ct=Math.min(ct,(Ee.start+Ee.count)*Be)),Le!==null?(De=Math.max(De,0),ct=Math.min(ct,Le.count)):et!=null&&(De=Math.max(De,0),ct=Math.min(ct,et.count));let Et=ct-De;if(Et<0||Et===1/0)return;Te.setup(W,G,we,$,Le);let vt,mt=ye;if(Le!==null&&(vt=ge.get(Le),mt=re,mt.setIndex(vt)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*qe()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if(W.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),_.setLineWidth(Gt*qe()),W.isLineSegments?mt.setMode(N.LINES):W.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else W.isPoints?mt.setMode(N.POINTS):W.isSprite&&mt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Gt=W._multiDrawStarts,Re=W._multiDrawCounts,Kt=W._multiDrawCount,ot=Le?ge.get(Le).bytesPerElement:1,fn=Y.get(G).currentProgram.getUniforms();for(let Dn=0;Dn<Kt;Dn++)fn.setValue(N,"_gl_DrawID",Dn),mt.render(Gt[Dn]/ot,Re[Dn])}else if(W.isInstancedMesh)mt.renderInstances(De,Et,W.count);else if($.isInstancedBufferGeometry){let Gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,Gt);mt.renderInstances(De,Et,Re)}else mt.render(De,Et)};function Wh(S,U,$,G){V!==null&&S.isNodeMaterial&&V.setObject(G,S),J===!0&&ze.setState(S,$,!1),S.transparent===!0&&S.side===Zt&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,uo(S,U,G),S.side=Si,S.needsUpdate=!0,uo(S,U,G),S.side=Zt):uo(S,U,G)}this.compile=function(S,U,$=null){$===null&&($=S),V!==null&&V.renderStart(S,U,$),y=ve.get($),y.init(U),x.push(y),$.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),S!==$&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights(),V!==null&&V.updateLights(y.state.lightsArray),j=this.localClippingEnabled,J=ze.init(this.clippingPlanes,j),J===!0&&ze.setGlobalState(this.clippingPlanes,U),V!==null&&We.render(y.state.shadowsArray,$,U);let G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){let we=Ee[Ce];Wh(we,$,U,W),G.add(we)}else Wh(Ee,$,U,W),G.add(Ee)}),y=x.pop(),V!==null&&V.renderEnd(),G},this.compileAsync=function(S,U,$=null){let G=this.compile(S,U,$);return new Promise(W=>{function Ee(){if(G.forEach(function(Ce){let Le=Y.get(Ce).currentProgram;(Le===void 0||Le.isReady())&&G.delete(Ce)}),G.size===0){W(S);return}setTimeout(Ee,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Zl=null;function Wf(S){Zl&&Zl(S)}function Xh(){Li.stop()}function qh(){Li.start()}let Li=new Kd;Li.setAnimationLoop(Wf),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(S){Zl=S,Fe.setAnimationLoop(S),S===null?Li.stop():Li.start()},Fe.addEventListener("sessionstart",Xh),Fe.addEventListener("sessionend",qh),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;V!==null&&V.renderStart(S,U);let $=Fe.enabled===!0&&Fe.isPresenting===!0,G=M!==null&&(he===null||$)&&M.begin(P,he);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(U),U=Fe.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,he),y=ve.get(S,x.length),y.init(U),y.state.textureUnits=ee.getTextureUnits(),x.push(y),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(ne,wn,U.reversedDepth),j=this.localClippingEnabled,J=ze.init(this.clippingPlanes,j),T=Se.get(S,R.length),T.init(),R.push(T),Fe.enabled===!0&&Fe.isPresenting===!0){let Ce=P.xr.getDepthSensingMesh();Ce!==null&&Jl(Ce,U,-1/0,P.sortObjects)}Jl(S,U,0,P.sortObjects),T.finish(),V!==null&&V.updateLights(y.state.lightsArray),P.sortObjects===!0&&T.sort(ie,_e),Ge=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ge&&Je.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&ze.beginShadows();let W=y.state.shadowsArray;if(We.render(W,S,U),J===!0&&ze.endShadows(),(G&&M.hasRenderPass())===!1){let Ce=T.opaque,we=T.transmissive;if(y.setupLights(),U.isArrayCamera){let Le=U.cameras;if(we.length>0)for(let Be=0,Ke=Le.length;Be<Ke;Be++){let et=Le[Be];$h(Ce,we,S,et)}Ge&&Je.render(S);for(let Be=0,Ke=Le.length;Be<Ke;Be++){let et=Le[Be];Yh(T,S,et,et.viewport)}}else we.length>0&&$h(Ce,we,S,U),Ge&&Je.render(S),Yh(T,S,U)}he!==null&&Z===0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he)),G&&M.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),Te.resetDefaultState(),K=-1,oe=null,x.pop(),x.length>0?(y=x[x.length-1],ee.setTextureUnits(y.state.textureUnits),J===!0&&ze.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,V!==null&&V.renderEnd()};function Jl(S,U,$,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(X)){G&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ne);let Ce=ae.update(S),we=S.material;we.visible&&T.push(S,Ce,we,$,Ie.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(X))){let Ce=ae.update(S),we=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ie.copy(Ce.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(ne)),Array.isArray(we)){let Le=Ce.groups;for(let Be=0,Ke=Le.length;Be<Ke;Be++){let et=Le[Be],De=we[et.materialIndex];De&&De.visible&&T.push(S,Ce,De,$,Ie.z,et,U)}}else we.visible&&T.push(S,Ce,we,$,Ie.z,null,U)}}let Ee=S.children;for(let Ce=0,we=Ee.length;Ce<we;Ce++)Jl(Ee[Ce],U,$,G)}function Yh(S,U,$,G){let{opaque:W,transmissive:Ee,transparent:Ce}=S;y.setupLightsView($),J===!0&&ze.setGlobalState(P.clippingPlanes,$),G&&_.viewport(se.copy(G)),W.length>0&&ho(W,U,$),Ee.length>0&&ho(Ee,U,$),Ce.length>0&&ho(Ce,U,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function $h(S,U,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[G.id]===void 0){let De=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[G.id]=new nn(1,1,{generateMipmaps:!0,type:De?Cn:sn,minFilter:wi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Ee=y.state.transmissionRenderTarget[G.id],Ce=G.viewport||se;Ee.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);let we=P.getRenderTarget(),Le=P.getActiveCubeFace(),Be=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(st),I=P.getClearAlpha(),I<1&&P.setClearColor(16777215,.5),P.clear(),Ge&&Je.render($);let Ke=P.toneMapping;P.toneMapping=An;let et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),y.setupLightsView(G),J===!0&&ze.setGlobalState(P.clippingPlanes,G),ho(S,$,G),ee.updateMultisampleRenderTarget(Ee),ee.updateRenderTargetMipmap(Ee),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ct=0,Et=U.length;ct<Et;ct++){let vt=U[ct],{object:mt,geometry:Gt,material:Re,group:Kt}=vt;if(Re.side===Zt&&mt.layers.test(G.layers)){let ot=Re.side;Re.side=en,Re.needsUpdate=!0,Zh(mt,$,G,Gt,Re,Kt),Re.side=ot,Re.needsUpdate=!0,De=!0}}De===!0&&(ee.updateMultisampleRenderTarget(Ee),ee.updateRenderTargetMipmap(Ee))}P.setRenderTarget(we,Le,Be),P.setClearColor(st,I),et!==void 0&&(G.viewport=et),P.toneMapping=Ke}function ho(S,U,$){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Ee=S.length;W<Ee;W++){let Ce=S[W],{object:we,geometry:Le,group:Be}=Ce,Ke=Ce.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),we.layers.test($.layers)&&Zh(we,U,$,Le,Ke,Be)}}function Zh(S,U,$,G,W,Ee){V!==null&&W.isNodeMaterial&&V.setObject(S,W),S.onBeforeRender(P,U,$,G,W,Ee),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,U,$,G,S,Ee),W.transparent===!0&&W.side===Zt&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,P.renderBufferDirect($,U,G,W,S,Ee),W.side=Si,W.needsUpdate=!0,P.renderBufferDirect($,U,G,W,S,Ee),W.side=Zt):P.renderBufferDirect($,U,G,W,S,Ee),S.onAfterRender(P,U,$,G,W,Ee)}function uo(S,U,$){U.isScene!==!0&&(U=Ue);let G=Y.get(S),W=y.state.lights,Ee=y.state.shadowsArray,Ce=W.state.version,we=xe.getParameters(S,W.state,Ee,U,$,y.state.lightProbeGridArray),Le=xe.getProgramCacheKey(we),Be=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=me.get(S.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",Ln),Be=new Map,G.programs=Be);let et=Be.get(Le);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===Ce)return Kh(S,we),et}else we.uniforms=xe.getUniforms(S),V!==null&&S.isNodeMaterial&&V.build(S,$,we),S.onBeforeCompile(we,P),et=xe.acquireProgram(we,Le),Be.set(Le,et),G.uniforms=we.uniforms;let De=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ze.uniform),Kh(S,we),G.needsLights=$f(S),G.lightsStateVersion=Ce,G.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.sunLights.value=W.state.sun,De.sunLightShadows.value=W.state.sunShadow,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.sunShadowMatrix.value=W.state.sunShadowMatrix,De.sunShadowCascade.value=W.state.sunShadowCascade,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=y.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function Jh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Gs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Kh(S,U){let $=Y.get(S);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function Xf(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let $=0,G=S.length;$<G;$++){let W=S[$];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function qf(S,U,$,G,W){U.isScene!==!0&&(U=Ue),ee.resetTextureUnits();let Ee=U.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,we=he===null?P.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:nt.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=me.get(G.envMap||Ce,Le),Ke=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,vt=An;G.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(vt=P.toneMapping);let mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Gt=mt!==void 0?mt.length:0,Re=Y.get(G),Kt=y.state.lights;if(J===!0&&(j===!0||S!==oe)){let _t=S===oe&&G.id===K;ze.setState(G,S,_t)}let ot=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Kt.state.version||Re.outputColorSpace!==we||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Be||G.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==Ke||Re.vertexTangents!==et||Re.morphTargets!==De||Re.morphNormals!==ct||Re.morphColors!==Et||Re.toneMapping!==vt||Re.morphTargetsCount!==Gt||!!Re.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Re.__version=G.version);let fn=Re.currentProgram;ot===!0&&(fn=uo(G,U,W),V&&G.isNodeMaterial&&V.onUpdateProgram(G,fn,Re));let Dn=!1,oi=!1,ji=!1,pt=fn.getUniforms(),wt=Re.uniforms;if(_.useProgram(fn.program)&&(Dn=!0,oi=!0,ji=!0),G.id!==K&&(K=G.id,oi=!0),Re.needsLights){let _t=Xf(y.state.lightProbeGridArray,W);Re.lightProbeGrid!==_t&&(Re.lightProbeGrid=_t,oi=!0)}if(Dn||oe!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(N,"projectionMatrix",S.projectionMatrix),pt.setValue(N,"viewMatrix",S.matrixWorldInverse);let li=pt.map.cameraPosition;li!==void 0&&li.setValue(N,ue.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&pt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),oe!==S&&(oe=S,oi=!0,ji=!0)}if(Re.needsLights&&(Kt.state.sunShadowMap.length>0&&pt.setValue(N,"sunShadowMap",Kt.state.sunShadowMap,ee),Kt.state.directionalShadowMap.length>0&&pt.setValue(N,"directionalShadowMap",Kt.state.directionalShadowMap,ee),Kt.state.spotShadowMap.length>0&&pt.setValue(N,"spotShadowMap",Kt.state.spotShadowMap,ee),Kt.state.pointShadowMap.length>0&&pt.setValue(N,"pointShadowMap",Kt.state.pointShadowMap,ee)),W.isSkinnedMesh){pt.setOptional(N,W,"bindMatrix"),pt.setOptional(N,W,"bindMatrixInverse");let _t=W.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),pt.setValue(N,"boneTexture",_t.boneTexture,ee))}W.isBatchedMesh&&(pt.setOptional(N,W,"batchingTexture"),pt.setValue(N,"batchingTexture",W._matricesTexture,ee),pt.setOptional(N,W,"batchingIdTexture"),pt.setValue(N,"batchingIdTexture",W._indirectTexture,ee),pt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(N,"batchingColorTexture",W._colorsTexture,ee));let ai=$.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&F.update(W,$,fn),(oi||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,pt.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(wt.envMapIntensity.value=U.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=cv()),oi){if(pt.setValue(N,"toneMappingExposure",P.toneMappingExposure),Re.needsLights&&Yf(wt,ji),Ee&&G.fog===!0&&ke.refreshFogUniforms(wt,Ee),ke.refreshMaterialUniforms(wt,G,B,k,y.state.transmissionRenderTarget[S.id]),Re.needsLights&&Re.lightProbeGrid){let _t=Re.lightProbeGrid;wt.probesSH.value=_t.texture,wt.probesMin.value.copy(_t.boundingBox.min),wt.probesMax.value.copy(_t.boundingBox.max),wt.probesResolution.value.copy(_t.resolution)}Gs.upload(N,Jh(Re),wt,ee)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Gs.upload(N,Jh(Re),wt,ee),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(N,"center",W.center),pt.setValue(N,"modelViewMatrix",W.modelViewMatrix),pt.setValue(N,"normalMatrix",W.normalMatrix),pt.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let _t=G.uniformsGroups;for(let li=0,Qi=_t.length;li<Qi;li++){let Qh=_t[li];ce.update(Qh,fn),ce.bind(Qh,fn)}}return fn}function Yf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function $f(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(S,U,$){let G=Y.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Y.get(S.texture).__webglTexture=U,Y.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let $=Y.get(S);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,$=0){he=S,Q=U,Z=$;let G=null,W=!1,Ee=!1;if(S){let we=Y.get(S);if(we.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,we.__webglFramebuffer),se.copy(S.viewport),Ne.copy(S.scissor),Ae=S.scissorTest,_.viewport(se),_.scissor(Ne),_.setScissorTest(Ae),K=-1;return}else if(we.__webglFramebuffer===void 0)ee.setupRenderTarget(S);else if(we.__hasExternalTextures)ee.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ke=S.depthTexture;if(we.__boundDepthTexture!==Ke){if(Ke!==null&&Y.has(Ke)&&(S.width!==Ke.image.width||S.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(S)}}let Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);let Be=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?G=Be[U][$]:G=Be[U],W=!0):S.samples>0&&ee.useMultisampledRTT(S)===!1?G=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[$]:G=Be,se.copy(S.viewport),Ne.copy(S.scissor),Ae=S.scissorTest}else se.copy(pe).multiplyScalar(B).floor(),Ne.copy(fe).multiplyScalar(B).floor(),Ae=Pe;if($!==0&&(G=q),_.bindFramebuffer(N.FRAMEBUFFER,G)&&_.drawBuffers(S,G),_.viewport(se),_.scissor(Ne),_.setScissorTest(Ae),W){let we=Y.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,$)}else if(Ee){let we=U;for(let Le=0;Le<S.textures.length;Le++){let Be=Y.get(S.textures[Le]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Le,Be.__webglTexture,$,we)}}else if(S!==null&&$!==0){let we=Y.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,$)}K=-1};function jh(S){let U=Y.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=C.textureFormatReadable(S.format),U.__typeReadable=C.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,$,G,W,Ee,Ce,we=0){if(!(S&&S.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){_.bindFramebuffer(N.FRAMEBUFFER,Le);try{let Be=S.textures[we],Ke=Be.format,et=Be.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);let De=jh(Be);if(De.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&$>=0&&$<=S.height-W&&N.readPixels(U,$,G,W,be.convert(Ke),be.convert(et),Ee)}finally{let Be=he!==null?Y.get(he).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(S,U,$,G,W,Ee,Ce,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(U>=0&&U<=S.width-G&&$>=0&&$<=S.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Le);let Be=S.textures[we],Ke=Be.format,et=Be.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);let De=jh(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.bufferData(N.PIXEL_PACK_BUFFER,Ee.byteLength,N.STREAM_READ),N.readPixels(U,$,G,W,be.convert(Ke),be.convert(et),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Et=he!==null?Y.get(he).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Et);let vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vd(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ee),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ct),N.deleteSync(vt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,$=0){let G=Math.pow(2,-$),W=Math.floor(S.image.width*G),Ee=Math.floor(S.image.height*G),Ce=U!==null?U.x:0,we=U!==null?U.y:0;ee.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Ce,we,W,Ee),_.unbindTexture()},this.copyTextureToTexture=function(S,U,$=null,G=null,W=0,Ee=0){let Ce,we,Le,Be,Ke,et,De,ct,Et,vt=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if($!==null)Ce=$.max.x-$.min.x,we=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,Ke=$.min.y,et=$.isBox3?$.min.z:0;else{let wt=Math.pow(2,-W);Ce=Math.floor(vt.width*wt),we=Math.floor(vt.height*wt),S.isDataArrayTexture?Le=vt.depth:S.isData3DTexture?Le=Math.floor(vt.depth*wt):Le=1,Be=0,Ke=0,et=0}G!==null?(De=G.x,ct=G.y,Et=G.z):(De=0,ct=0,Et=0);let mt=be.convert(U.format),Gt=be.convert(U.type),Re;U.isData3DTexture?(ee.setTexture3D(U,0),Re=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ee.setTexture2DArray(U,0),Re=N.TEXTURE_2D_ARRAY):(ee.setTexture2D(U,0),Re=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Kt=_.getParameter(N.UNPACK_ROW_LENGTH),ot=_.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=_.getParameter(N.UNPACK_SKIP_PIXELS),Dn=_.getParameter(N.UNPACK_SKIP_ROWS),oi=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),_.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let ji=S.isDataArrayTexture||S.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let wt=Y.get(S),ai=Y.get(U),_t=Y.get(wt.__renderTarget),li=Y.get(ai.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,_t.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Qi=0;Qi<Le;Qi++)ji&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,W,et+Qi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,Ee,Et+Qi)),N.blitFramebuffer(Be,Ke,Ce,we,De,ct,Ce,we,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||Y.has(S)){let wt=Y.get(S),ai=Y.get(U);_.bindFramebuffer(N.READ_FRAMEBUFFER,O),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<Le;_t++)ji?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,W,et+_t):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wt.__webglTexture,W),pt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ai.__webglTexture,Ee,Et+_t):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ai.__webglTexture,Ee),W!==0?N.blitFramebuffer(Be,Ke,Ce,we,De,ct,Ce,we,N.COLOR_BUFFER_BIT,N.NEAREST):pt?N.copyTexSubImage3D(Re,Ee,De,ct,Et+_t,Be,Ke,Ce,we):N.copyTexSubImage2D(Re,Ee,De,ct,Be,Ke,Ce,we);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Re,Ee,De,ct,Et,Ce,we,Le,mt,Gt,vt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,Ee,De,ct,Et,Ce,we,Le,mt,vt.data):N.texSubImage3D(Re,Ee,De,ct,Et,Ce,we,Le,mt,Gt,vt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ee,De,ct,Ce,we,mt,Gt,vt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ee,De,ct,vt.width,vt.height,mt,vt.data):N.texSubImage2D(N.TEXTURE_2D,Ee,De,ct,Ce,we,mt,Gt,vt);_.pixelStorei(N.UNPACK_ROW_LENGTH,Kt),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Dn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,oi),Ee===0&&U.generateMipmaps&&N.generateMipmap(Re),_.unbindTexture()},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&ee.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ee.setTextureCube(S,0):S.isData3DTexture?ee.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ee.setTexture2DArray(S,0):ee.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){Q=0,Z=0,he=null,_.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});function uv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function dv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(af),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Lh)}function mv(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Lh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(af))}function _v(i){this.enabled!==!1&&this._handleKeyDown(i)}function xv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Lh)}function vv(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function yv(i){this.enabled!==!1&&i.preventDefault()}function bv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rf,Lh,af,Rl,of,hv,Lt,rn,ft,Ih,Cl,lf=Ut(()=>{si();rf={type:"change"},Lh={type:"start"},af={type:"end"},Rl=new pi,of=new ln,hv=Math.cos(70*dn.DEG2RAD),Lt=new L,rn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ih=1e-6,Cl=class extends Xr{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Yt,this._lastTargetPosition=new L,this._quat=new Yt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new L,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new L,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dv.bind(this),this._onPointerDown=uv.bind(this),this._onPointerUp=fv.bind(this),this._onContextMenu=yv.bind(this),this._onMouseWheel=gv.bind(this),this._onKeyDown=_v.bind(this),this._onTouchStart=xv.bind(this),this._onTouchMove=vv.bind(this),this._onMouseDown=pv.bind(this),this._onMouseMove=mv.bind(this),this._interceptControlDown=bv.bind(this),this._interceptControlUp=Sv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rf),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Lt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<hv?this.object.lookAt(this.target):(of.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(of,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ih||this._lastTargetPosition.distanceToSquared(this.target)>Ih?(this.dispatchEvent(rf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function Mv(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function Pn(i,e={}){let t=e.fontSize||12,n=e.padding??4,s=`${e.bold?"600 ":""}${t*Vt}px "Segoe UI", system-ui, sans-serif`,r=document.createElement("canvas"),o=r.getContext("2d");o.font=s;let a=String(i).split(`
`),l=Math.max(...a.map(h=>o.measureText(h).width)),c=t*1.25*Vt;return r.width=Math.ceil(l+n*2*Vt),r.height=Math.ceil(c*a.length+n*2*Vt),o.font=s,e.background&&(o.fillStyle=e.background,Mv(o,.5,.5,r.width-1,r.height-1,(e.radius??3)*Vt),o.fill(),e.border&&(o.strokeStyle=e.border,o.lineWidth=Vt,o.stroke())),o.fillStyle=e.color||"#22303c",o.textBaseline="middle",o.textAlign="center",a.forEach((h,d)=>o.fillText(h,r.width/2,n*Vt+c*(d+.5))),so(r,e)}function so(i,e={}){let t=new Ps(i);t.colorSpace=zt,t.minFilter=Ct;let n=new Rs({map:t,sizeAttenuation:!1,depthTest:e.depthTest??!1,depthWrite:!1,transparent:!0,opacity:e.opacity??1}),s=new Sr(n);return s.userData.px=[i.width/Vt,i.height/Vt],e.anchor==="bottom"?s.center.set(.5,0):e.anchor==="left"?s.center.set(0,.5):e.anchor==="top"&&s.center.set(.5,1),s.renderOrder=e.renderOrder??10,Pl.add(s),s}function cf({color:i,glyph:e,dashed:t,selected:n,closed:s}){let r=(n?34:26)*Vt,o=document.createElement("canvas");o.width=o.height=r+8*Vt;let a=o.getContext("2d"),l=o.width/2,c=r/2;return n&&(a.beginPath(),a.arc(l,l,c+3*Vt,0,Math.PI*2),a.fillStyle="rgba(30,111,217,0.35)",a.fill()),a.beginPath(),a.arc(l,l,c-1.5*Vt,0,Math.PI*2),a.fillStyle=s?"#ffffff":i,a.fill(),a.lineWidth=2.5*Vt,a.strokeStyle=s?i:"#ffffff",t&&a.setLineDash([4*Vt,3*Vt]),a.stroke(),a.setLineDash([]),a.fillStyle=s?i:"#ffffff",a.font=`700 ${r*.5}px "Segoe UI", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(e,l,l+r*.03),t&&(a.beginPath(),a.arc(l+c*.72,l-c*.72,c*.36,0,Math.PI*2),a.fillStyle="#fff6d6",a.fill(),a.strokeStyle="#d98e04",a.lineWidth=1.5*Vt,a.stroke(),a.fillStyle="#8a5a00",a.font=`700 ${c*.55}px "Segoe UI", sans-serif`,a.fillText("~",l+c*.72,l-c*.75)),so(o,{renderOrder:n?30:20})}function Il(i){Pl.delete(i),i.material.map?.dispose(),i.material.dispose()}function Ll(){if(Xs)return Xs;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");e.fillStyle="rgba(255,255,255,1)",e.fillRect(0,0,64,64),e.strokeStyle="rgba(0,0,0,1)",e.lineWidth=10;for(let t=-64;t<128;t+=24)e.beginPath(),e.moveTo(t,0),e.lineTo(t+64,64),e.stroke();return Xs=new Ps(i),Xs.wrapS=Xs.wrapT=bs,Xs}var Vt,Pl,Xs,qs=Ut(()=>{si();Vt=Math.min(window.devicePixelRatio||1,2)*1.5,Pl=new Set;Xs=null});function wv(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}var tt,Dh,Yi,Dl,ro=Ut(()=>{si();lf();qs();tt=(i,e,t)=>new L(i,t,-e),Dh=i=>({e:Yi(i.x),n:Yi(-i.z),elev:Yi(i.y)}),Yi=i=>Math.round(i*100)/100,Dl=class extends EventTarget{constructor(e){super(),this.container=e,this.renderer=new El({antialias:!0,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=zt,this.renderer.localClippingEnabled=!0,e.appendChild(this.renderer.domElement),this.scene=new xr,this.scene.background=new $e("#e9eef3"),this.camera=new qt(40,1,.5,4e3),this.camera.position.set(120,90,140),this.controls=new Cl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.screenSpacePanning=!0,this.controls.minDistance=6,this.controls.maxDistance=700,this.controls.maxPolarAngle=Math.PI*.495,this.controls.target.set(0,25,0),this.controls.addEventListener("start",()=>this.flight=null);let t=new Hr("#ffffff","#b7c2b0",2);this.scene.add(t);let n=new Us("#ffffff",1.6);n.position.set(-80,160,60),this.scene.add(n);let s=new Us("#dfe8ff",.5);s.position.set(100,60,-120),this.scene.add(s),this.raycaster=new Wr,this.raycaster.params.Line.threshold=.2,this.pickables=[],this.onFrame=new Set,this.flight=null,this._last=performance.now(),this._t0=this._last,this._bindPointer(),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),this.renderer.setAnimationLoop(()=>this._tick())}resize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.renderer.domElement.style.width=e+"px",this.renderer.domElement.style.height=t+"px",this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.updateScreenSprites()}updateScreenSprites(e=this.container.clientHeight||1){let t=2*Math.tan(dn.degToRad(this.camera.fov/2))/e;for(let n of Pl){let[s,r]=n.userData.px,o=n.userData.scaleFactor||1;n.scale.set(s*t*o,r*t*o,1)}}_tick(){let e=performance.now(),t=Math.min((e-this._last)/1e3,.1);this._last=e;let n=(e-this._t0)/1e3;this.flight&&this._stepFlight(t),this.controls.update();for(let s of this.onFrame)s(n,t);this.renderer.render(this.scene,this.camera),this.dispatchEvent(new Event("frame"))}getView(){let e=this.camera.position,t=this.controls.target;return{position:[e.x,e.y,e.z].map(Yi),target:[t.x,t.y,t.z].map(Yi)}}flyTo(e,t=1.1){if(!e)return;let n=new L(...e.position),s=new L(...e.target);if(t<=0){this.camera.position.copy(n),this.controls.target.copy(s);return}this.flight={fromPos:this.camera.position.clone(),fromTgt:this.controls.target.clone(),toPos:n,toTgt:s,t:0,duration:t}}_stepFlight(e){let t=this.flight;t.t=Math.min(1,t.t+e/t.duration);let n=t.t<.5?4*t.t**3:1-(-2*t.t+2)**3/2;this.camera.position.lerpVectors(t.fromPos,t.toPos,n),this.controls.target.lerpVectors(t.fromTgt,t.toTgt,n),t.t>=1&&(this.flight=null)}viewToward(e,{distance:t=60,azimuthDeg:n=135,elevationDeg:s=35}={}){let r=dn.degToRad(n),o=dn.degToRad(s),a=new L(Math.sin(r)*Math.cos(o),Math.sin(o),-Math.cos(r)*Math.cos(o));return{position:e.clone().addScaledVector(a,t).toArray().map(Yi),target:e.toArray().map(Yi)}}headingDeg(){let e=new L;return this.camera.getWorldDirection(e),(dn.radToDeg(Math.atan2(e.x,-e.z))+360)%360}_bindPointer(){let e=this.renderer.domElement,t=null;e.addEventListener("pointerdown",n=>t={x:n.clientX,y:n.clientY}),e.addEventListener("pointerup",n=>{if(!t)return;let s=Math.hypot(n.clientX-t.x,n.clientY-t.y);if(t=null,s>5)return;let r=this.pick(n.clientX,n.clientY);this.dispatchEvent(Object.assign(new Event("pick"),{hit:r,originalEvent:n}))}),e.addEventListener("pointermove",n=>{if(n.buttons)return;let s=this.pick(n.clientX,n.clientY);e.style.cursor=s&&(s.object.userData.issueId||s.object.userData.componentId)?"pointer":"",this.dispatchEvent(Object.assign(new Event("hover"),{hit:s,originalEvent:n}))})}pick(e,t){let n=this.renderer.domElement.getBoundingClientRect(),s=new de((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=this.pickables.filter(l=>wv(l)),o=this.raycaster.intersectObjects(r,!1),a=o.find(l=>l.object.userData.issueId&&l.object.isSprite);return a||o.find(l=>!l.object.userData.ghost)||null}capture(e=1920,t=1080){let n=this.renderer,s=n.getPixelRatio();n.setPixelRatio(1),n.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.updateScreenSprites(t/1.35),n.render(this.scene,this.camera);let r=document.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(n.domElement,0,0),n.setPixelRatio(s),this.resize(),r}}});function Nh(i={}){return{id:"",title:"",category:"other",dateReported:Dt(),status:"outstanding",level:"L1",zone:"",units:[],description:"",photos:[],contractor:"",consultant:"",sourceDocuments:[],component:"",target:{anchor:{e:0,n:0,elev:0},zone:null},accuracy:"APPROXIMATE",accuracyNote:"",view:null,history:[],actions:[],tags:[],sample:!1,...i}}function ri(i){let e=Nh(),t={...e,...i};t.target={...e.target,...i.target||{},anchor:{...e.target.anchor,...(i.target||{}).anchor||{}}};for(let n of["units","photos","sourceDocuments","history","tags","actions"])Array.isArray(t[n])||(t[n]=t[n]?[t[n]]:[]);return Ht[t.accuracy]||(t.accuracy="UNKNOWN"),Nl[t.level]&&(t.level=Nl[t.level]),t.view&&Nl[t.view.focus]&&(t.view={...t.view,focus:Nl[t.view.focus]}),hf[t.status]&&(t.status=hf[t.status]),Mt[t.status]||(t.status="outstanding"),xn[t.category]||(t.category="other"),t}function uf(i,e=""){return[i.id,i.title,i.zone,i.level,e,(i.units||[]).join(" "),(i.units||[]).map(t=>"unit "+t).join(" "),i.contractor,i.consultant,i.description,xn[i.category]?.label,Mt[i.status]?.label,(i.tags||[]).join(" "),(i.actions||[]).map(t=>`${t.text} ${t.who||""}`).join(" ")].filter(Boolean).join(" ").toLowerCase()}function Ul(i){let e=new Date().getFullYear(),t=0;for(let n of i){let s=/^ANL-(\d{4})-(\d+)$/.exec(n.id||"");s&&+s[1]===e&&(t=Math.max(t,+s[2]))}return`ANL-${e}-${String(t+1).padStart(3,"0")}`}function Dt(i=new Date){let e=t=>String(t).padStart(2,"0");return`${i.getFullYear()}-${e(i.getMonth()+1)}-${e(i.getDate())}`}var Ht,Mt,Nl,hf,xn,Ai=Ut(()=>{Ht={CONFIRMED:{label:"Confirmed",color:"#2e7d32",help:"Location stated explicitly in a report, drawing or measured on site."},INFERRED:{label:"Inferred",color:"#1e6fd9",help:"Location deduced from documents/photos but not stated explicitly."},APPROXIMATE:{label:"Approximate",color:"#d98e04",help:'General area only. Treat the highlighted zone as "somewhere around here".'},UNKNOWN:{label:"Unknown",color:"#8a8f96",help:"Exact location not known. Marker shows only the level / side of building."}},Mt={outstanding:{label:"Outstanding",color:"#d93b2b",active:!0},"in-progress":{label:"In progress",color:"#e8960c",active:!0},resolved:{label:"Resolved",color:"#2e8b57",active:!1}},Nl={P2:"B",P1:"M",L1:"M"},hf={open:"outstanding",investigating:"outstanding",monitoring:"in-progress",repaired:"resolved",closed:"resolved"},xn={"parkade-membrane":{label:"Parkade membrane / slab",glyph:"P"},"water-ingress":{label:"Water ingress / leak",glyph:"W"},balcony:{label:"Balcony / deck",glyph:"B"},roof:{label:"Roof",glyph:"R"},"exterior-wall":{label:"Exterior wall",glyph:"E"},window:{label:"Window / glazing",glyph:"G"},drainage:{label:"Drainage",glyph:"D"},mechanical:{label:"Mechanical / electrical",glyph:"M"},site:{label:"Site / landscaping",glyph:"S"},amenity:{label:"Amenity (pool, gym, rooms)",glyph:"A"},elevator:{label:"Elevator",glyph:"L"},cleaning:{label:"Cleaning / housekeeping",glyph:"C"},other:{label:"Other",glyph:"?"}}});function $i(i,e="base"){let t=i+"|"+e;if(Ys.has(t))return Ys.get(t);let n=oo[i]||"#cccccc",s;if(e==="base")s=new ni({color:n}),i==="glass"&&Object.assign(s,{transparent:!0,opacity:.85}),i==="rail"&&Object.assign(s,{transparent:!0,opacity:.55,depthWrite:!1}),i==="neighbour"&&Object.assign(s,{transparent:!0,opacity:.45,depthWrite:!1}),i==="pool"&&Object.assign(s,{emissive:new $e("#1a5f80"),emissiveIntensity:.15});else if(e==="ghost")s=new ni({color:n,transparent:!0,opacity:.07,depthWrite:!1});else if(e==="xray")s=new ni({color:n,transparent:!0,opacity:.3,depthWrite:!1});else if(e==="selected")s=new ni({color:"#9cc4f5",emissive:new $e(oo.selected),emissiveIntensity:.35});else if(e.startsWith("acc:")){let r=e.slice(4);s=new ni({color:Ht[r]?.color||"#999"}),(r==="UNKNOWN"||r==="APPROXIMATE")&&(s.alphaMap=Ll(),s.transparent=!0,s.opacity=r==="UNKNOWN"?.55:.9,s.alphaTest=0,s.color=new $e(Ht[r].color).lerp(new $e("#ffffff"),.2))}return s.side=Zt,s.polygonOffset=!0,s.polygonOffsetFactor=1,s.polygonOffsetUnits=1,Ys.set(t,s),s}function Ri(i="base"){let e="edge|"+i;if(Ys.has(e))return Ys.get(e);let t;return i==="ghost"?t=new kt({color:"#56606b",transparent:!0,opacity:.06,depthWrite:!1}):i==="xray"?t=new kt({color:"#56606b",transparent:!0,opacity:.45}):i==="selected"?t=new kt({color:oo.selected}):i==="faint"?t=new kt({color:"#56606b",transparent:!0,opacity:.35}):t=new kt({color:oo.edge,transparent:!0,opacity:.75}),Ys.set(e,t),t}function Fl(i,{dash:e=1.2,gap:t=.8,opacity:n=1,depthTest:s=!0}={}){return new kr({color:i,dashSize:e,gapSize:t,transparent:!0,opacity:n,depthTest:s})}var oo,Ys,Ol=Ut(()=>{si();Ai();qs();oo={wall:"#eee6d6",wallAlt:"#e3d9c6",slab:"#d9dcdf",glass:"#8fa7ba",balcony:"#ddd3c0",rail:"#4f5a64",roof:"#c4c9cf",roofLow:"#8c5a52",metalRoof:"#e4e7ea",skylight:"#cfe8f7",penthouse:"#e6e4de",parkadeSlab:"#aeb3ba",parkadeWall:"#b9bdc3",aisle:"#979ea6",stall:"#ffffff",column:"#9aa1a8",core:"#f0c987",stair:"#e8a87c",ramp:"#a7b8c8",room:"#d7cfe6",lobby:"#f6e7c8",entrance:"#4f9d69",gate:"#d0532f",ground:"#e3e7de",grass:"#cbdcbf",podium:"#b9d3a8",courtyard:"#d9d6c8",tennisOut:"#b9786c",road:"#b3b8be",driveway:"#c5c9cd",paving:"#dcdad3",pool:"#7cc6e6",tennis:"#86b48a",tree:"#8fb47e",neighbour:"#e2e4e7",edge:"#56606b",selected:"#1e6fd9"},Ys=new Map});function gf(i){let e=0;for(let t=0;t<i.length;t++){let[n,s]=i[t],[r,o]=i[(t+1)%i.length];e+=n*o-r*s}return e/2}function $s(i){let e=0,t=0;for(let n of i)e+=n[0],t+=n[1];return[e/i.length,t/i.length]}function ao([i,e],t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[l,c]=t[r];a>e!=c>e&&i<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function df(i,e){let t=Math.atan2(i,e)*180/Math.PI;return["North","North-east","East","South-east","South","South-west","West","North-west"][Math.round((t+360)%360/45)%8]}function _f(i){let e=new gi;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e}function In(i,e,t){let n=new Fr(_f(Ci(i)),{depth:t-e,bevelEnabled:!1});return n.rotateX(-Math.PI/2),n.translate(0,e,0),n}function ff(i,e){let t=new Ds(_f(Ci(i)));return t.rotateX(-Math.PI/2),t.translate(0,e,0),t}function Bl(i,e,t){let n=new $t(i.w,t,i.d);return n.rotateY(dn.degToRad(i.rotDeg||0)),n.translate(i.e,e+t/2,-i.n),n}function Uh(i,e,t){let n=[],s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[Math.max(0,o-1)],c=i[Math.min(i.length-1,o+1)],h=c[0]-l[0],d=c[1]-l[1],u=Math.hypot(h,d)||1;h/=u,d/=u;let f=-d*e/2,g=h*e/2,b=(a[2]??t)+(a[2]!=null?t:0);if(n.push(a[0]+f,b,-(a[1]+g),a[0]-f,b,-(a[1]-g)),o){let m=o*2;s.push(m-2,m-1,m,m-1,m+1,m)}}let r=new dt;return r.setAttribute("position",new rt(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function pf(i,e){let t=i.map(([s,r])=>tt(s,r,e));return t.push(t[0].clone()),new dt().setFromPoints(t)}function xf(i){let e=new Ot;e.name="model";let t=new Map,n=new Map,s=i.levels,r=I=>s.find(le=>le.id===I),o=I=>s.findIndex(le=>le.id===I);for(let I of s){let le=new Ot;le.name="level:"+I.id,e.add(le),n.set(I.id,{def:I,group:le,shell:[],interior:[],edges:[],index:o(I.id)})}let a=new Ot;a.name="site",e.add(a);let l={group:a,surfaces:[],overlays:[]},c=new Ot;c.name="labels",e.add(c);function h(I,le,k,{parent:B,levelId:ie,interior:_e=!1,edges:pe=!0,site:fe=!1,edgeThreshold:Pe=30}={}){let X=new Rt(I,$i(le));X.userData={matKey:le,componentId:k.id,levelId:ie,interior:_e,accuracy:k.accuracy||"APPROXIMATE"},(B||e).add(X);let J=t.get(k.id);if(J||(J={id:k.id,label:k.label||k.id,levelId:ie,kind:k.kind||le,accuracy:k.accuracy||"APPROXIMATE",source:k.source||"",note:k.note||"",meshes:[],edges:[]},t.set(k.id,J)),J.meshes.push(X),pe){let j=new ki(I,Pe),ne=new ti(j,Ri());ne.userData={edgeOf:k.id,levelId:ie,interior:_e,isSite:fe},ne.raycast=()=>{},X.add(ne),J.edges.push(ne),ie&&n.get(ie).edges.push(ne)}return ie&&n.get(ie)[_e?"interior":"shell"].push(X),fe&&l.surfaces.push(X),X}let d=i.tower,u=d.outline||d.footprint,f=d.wallFootprint||Tv(u,-(d.wallInset||0)),g=Ci(f),b=Ci(u),[m,p]=$s(g),E=s.filter(I=>I.kind==="residential"||I.kind==="ground"),A=I=>I.map((le,k)=>{let B=I[(k+1)%I.length],ie=B[0]-le[0],_e=B[1]-le[1],pe=Math.hypot(ie,_e),fe=[_e/pe,-ie/pe];return{p:le,q:B,len:pe,out:fe,face:df(fe[0],fe[1])}}),v=A(g);for(let I of E){let le=n.get(I.id),k=I.kind==="ground"&&d.groundFootprint?Ci(d.groundFootprint):g,B=k===g?v:A(k),ie=I.elev,_e=I.height,pe=.25;if(h(In(Oh(k,.12),ie,ie+pe),"slab",{id:`tower.${I.id}.slab`,label:`${I.name} \u2013 floor slab edge`,kind:"slab",accuracy:d.accuracy,source:d.source},{parent:le.group,levelId:I.id}),B.forEach((X,J)=>{X.len<.05||h(Fh(X,ie+pe,ie+_e,.25),I.kind==="ground"?"wallAlt":"wall",{id:`tower.${I.id}.wall.${J}`,label:`${I.name} \u2013 ${X.face} face exterior wall`,kind:"wall",accuracy:d.accuracy,source:d.source},{parent:le.group,levelId:I.id})}),I.kind==="residential"||d.groundWindows){let X=d.windows||{width:1.6,spacing:3,sill:.75,head:2.35},J=[];if(B.forEach(j=>{let ne=Math.floor(j.len/X.spacing);if(ne<1)return;let ue=(j.len-ne*X.spacing)/2+X.spacing/2;for(let Ie=0;Ie<ne;Ie++){let Ue=(ue+Ie*X.spacing)/j.len,Ge=j.p[0]+(j.q[0]-j.p[0])*Ue+j.out[0]*.02,qe=j.p[1]+(j.q[1]-j.p[1])*Ue+j.out[1]*.02,N=Math.atan2(j.q[1]-j.p[1],j.q[0]-j.p[0]);J.push(new it().compose(tt(Ge,qe,ie+pe+(X.sill+X.head)/2),new Yt().setFromAxisAngle(new L(0,1,0),N),new L(X.width,X.head-X.sill,.3)))}}),J.length){let j=new Bi(new $t(1,1,1),$i("glass"),J.length);J.forEach((ne,ue)=>j.setMatrixAt(ue,ne)),j.userData={matKey:"glass",componentId:`tower.${I.id}.windows`,levelId:I.id,accuracy:"APPROXIMATE"},le.group.add(j),le.shell.push(j),t.set(`tower.${I.id}.windows`,{id:`tower.${I.id}.windows`,label:`${I.name} \u2013 windows / sliding doors (schematic pattern, not actual positions)`,levelId:I.id,kind:"window",accuracy:"APPROXIMATE",source:"Schematic: evenly spaced. Actual window layout not modelled.",note:"",meshes:[j],edges:[]})}}let fe=d.balconies;if(fe&&I.kind==="residential"){let X=o(I.id);if(X>=o(fe.levels[0])&&X<=o(fe.levels[1]))for(let J of fe.items){let j=J.unit&&I.unitPrefix?`${I.unitPrefix}${J.unit}`:"",ne=`tower.${I.id}.balcony.${J.id}`;h(In(J.polygon,ie,ie+.22),"balcony",{id:ne,label:`${I.name.replace(/ –.*$/,"")} \u2013 ${J.label}${j?` (unit ${j})`:""}`,kind:"balcony",accuracy:J.accuracy||fe.accuracy,source:fe.source,note:fe.note},{parent:le.group,levelId:I.id});let ue=Ev(J.polygon,k,ie+.22);ue&&h(ue,"rail",{id:ne},{parent:le.group,levelId:I.id,edges:!1})}}let Pe=d.balconyBand;if(Pe&&I.kind==="residential"){let X=o(I.id);if(X>=o(Pe.levels[0])&&X<=o(Pe.levels[1]))for(let J of Pe.segments){let j=Av(Pe.outer||u,Pe.inner||f,J,ie),ne=J.unit&&I.unitPrefix?`${I.unitPrefix}${J.unit}`:"",ue=`tower.${I.id}.balcony.${J.id}`;h(j.slab,"balcony",{id:ue,label:`${I.name} \u2013 ${J.label}${ne?` (unit ${ne} \u2013 position inferred)`:""}`,kind:"balcony",accuracy:J.accuracy||Pe.accuracy,source:Pe.source,note:Pe.note},{parent:le.group,levelId:I.id}),h(j.rail,"rail",{id:ue},{parent:le.group,levelId:I.id,edges:!1})}}}let T=E[E.length-1],y=T.elev+T.height,R=i.crown,x=y;if(R){let I=n.get(R.level),le=n.get(R.roofLevel);h(In(u,y,y+.3),"roofLow",{id:"roof.lower",label:R.lowerRoof.label,kind:"roof",accuracy:R.lowerRoof.accuracy,source:R.lowerRoof.source,note:R.lowerRoof.note},{parent:I.group,levelId:R.level}),A(b).forEach(B=>{h(Fh(B,y+.3,y+.3+(R.lowerRoof.parapet??.5),.2),"roofLow",{id:"roof.lower"},{parent:I.group,levelId:R.level,edgeThreshold:40})});let k=y+.3+R.mansard.height;h(Rv(R.mansard.base,R.mansard.top,y+.3,k),"metalRoof",{id:"roof.metal",label:R.mansard.label,kind:"roof",accuracy:R.mansard.accuracy,source:R.mansard.source,note:R.mansard.note},{parent:I.group,levelId:R.level});for(let B of R.dormers||[])h(Bl(B,y+.3,B.h||2.4),"glass",{id:"roof.dormer."+B.id,label:B.label,kind:"window",accuracy:B.accuracy||R.mansard.accuracy,source:R.mansard.source},{parent:I.group,levelId:R.level});h(In(R.upperRoof.polygon,k,k+.3),"roof",{id:"roof.upper",label:R.upperRoof.label,kind:"roof",accuracy:R.upperRoof.accuracy,source:R.upperRoof.source,note:R.upperRoof.note},{parent:le.group,levelId:R.roofLevel}),x=k+.3;for(let B of R.skylights||[]){let ie=new Vi(B.r||.9,16,8,0,Math.PI*2,0,Math.PI/2);ie.translate(B.e,x,-B.n),h(ie,"skylight",{id:"roof.skylight."+B.id,label:B.label,kind:"skylight",accuracy:B.accuracy,source:R.upperRoof.source},{parent:le.group,levelId:R.roofLevel,edgeThreshold:60})}for(let B of R.structures||[]){let ie=B.onTopOf?R.structures.find(pe=>pe.id===B.onTopOf):null,_e=x+(ie?ie.h:0);h(B.footprint?In(B.footprint,_e,_e+B.h):Bl(B.box,_e,B.h),B.matKey||"penthouse",{id:B.id,label:B.name,kind:B.kind||"rooftop",accuracy:B.accuracy,source:B.source,note:B.note},{parent:le.group,levelId:R.roofLevel})}}for(let I of i.lowRoofs||[]){let le=I.level||"L1",k=n.get(le),B=I.footprint?In(I.footprint,I.baseElev,I.topElev):Bl(I.box,I.baseElev,I.topElev-I.baseElev);h(B,I.matKey||"roofLow",{id:I.id,label:I.name,kind:I.kind||"roof",accuracy:I.accuracy,source:I.source,note:I.note},{parent:k.group,levelId:le})}let M=i.parkade;if(M){for(let le of M.levels){let k=r(le),B=n.get(le),ie=Ci(M.footprints?.[le]||M.footprint),_e=k.elev;if(h(In(ie,_e-.3,_e),"parkadeSlab",{id:`parkade.${le}.slab`,label:`${k.name} \u2013 floor slab`,kind:"slab",accuracy:M.accuracy,source:M.source,note:le===M.levels[0]?"Slab on grade (lowest level).":"Suspended slab: its underside is the ceiling of the level below."},{parent:B.group,levelId:le,interior:!0}),ie.forEach((fe,Pe)=>{let X=ie[(Pe+1)%ie.length],J=X[0]-fe[0],j=X[1]-fe[1],ne=Math.hypot(J,j);if(ne<.05)return;let ue=[j/ne,-J/ne],Ie=df(ue[0],ue[1]);h(Fh({p:fe,q:X,len:ne,out:ue},_e,_e+k.height,.3,-.3),"parkadeWall",{id:`parkade.${le}.wall.${Pe}`,label:`${k.name} \u2013 ${Ie} perimeter wall`,kind:"wall",accuracy:M.accuracy,source:M.source},{parent:B.group,levelId:le,interior:!0})}),M.columnGrid){let fe=M.columnGrid,Pe=Pi(ie),X=Oh(ie,-1.2),J=[];for(let ne=mf(Pe.minE,fe.origin[0],fe.spacing[0]);ne<=Pe.maxE;ne+=fe.spacing[0])for(let ue=mf(Pe.minN,fe.origin[1],fe.spacing[1]);ue<=Pe.maxN;ue+=fe.spacing[1])ao([ne,ue],X)&&J.push([ne,ue]);let j=new Bi(new $t(.5,k.height-.05,.5),$i("column"),Math.max(1,J.length));J.forEach(([ne,ue],Ie)=>j.setMatrixAt(Ie,new it().makeTranslation(ne,_e+k.height/2,-ue))),j.count=J.length,j.userData={matKey:"column",componentId:`parkade.${le}.columns`,levelId:le,interior:!0,accuracy:"UNKNOWN"},B.group.add(j),B.interior.push(j),t.set(`parkade.${le}.columns`,{id:`parkade.${le}.columns`,label:`${k.name} \u2013 columns (schematic grid; real positions not known)`,levelId:le,kind:"column",accuracy:"UNKNOWN",source:fe.source||"Schematic grid only.",note:"",meshes:[j],edges:[]})}for(let fe of(M.aisles||[]).filter(Pe=>Pe.level===le)){let Pe=h(Uh(fe.path,fe.width,_e+.02),"aisle",{id:`parkade.${le}.aisle.${fe.id||"main"}`,label:`${k.name} \u2013 drive aisle${fe.label?" ("+fe.label+")":""}`,kind:"aisle",accuracy:fe.accuracy||"APPROXIMATE",source:fe.source||M.source},{parent:B.group,levelId:le,interior:!0,edges:!1});Pe.renderOrder=1}let pe=[];for(let fe of(M.stallRows||[]).filter(Pe=>Pe.level===le)){let[Pe,X]=fe.from,[J,j]=fe.to,ne=Math.hypot(J-Pe,j-X),ue=(J-Pe)/ne,Ie=(j-X)/ne,Ue=fe.side==="right"?-1:1,Ge=-Ie*Ue,qe=ue*Ue,N=fe.stallWidth||2.6,at=Math.floor(ne/N);for(let Ze=0;Ze<=at;Ze++){let C=Pe+ue*Ze*N,_=X+Ie*Ze*N;pe.push(tt(C,_,_e+.04),tt(C+Ge*fe.depth,_+qe*fe.depth,_e+.04))}}if(pe.length){let fe=new ti(new dt().setFromPoints(pe),new kt({color:"#ffffff"}));fe.userData={interior:!0,levelId:le,deco:!0},fe.raycast=()=>{},B.group.add(fe),B.interior.push(fe)}}let I=new Tn(pf(Ci(M.footprint),.06),Fl("#5a6470",{dash:1.6,gap:1,opacity:.8}));I.computeLineDistances(),I.userData={overlay:"parkadeOutline"},a.add(I),l.overlays.push(I)}for(let I of i.elements||[]){let le=r(I.level);if(!le)continue;let k=n.get(I.level),B,ie=I.z0??le.elev,_e=I.h??(I.kind==="zone"?.06:le.height-.1);I.kind==="ramp"?B=Iv(I):I.footprint?B=In(I.footprint,ie,ie+_e):B=Bl(I.box,ie,_e);let pe=!I.exterior,fe=h(B,I.matKey||I.kind,{id:I.id,label:I.name,kind:I.kind,accuracy:I.accuracy,source:I.source,note:I.note},{parent:k.group,levelId:I.level,interior:pe});if(I.span&&(fe.userData.span=I.span),I.labelText!==!1){let Pe=I.box?[I.box.e,I.box.n]:I.footprint?$s(I.footprint):Cv(I.start,I.end),X=Pn(I.labelText||I.name,{fontSize:11,background:"rgba(255,255,255,0.88)",border:"rgba(60,70,80,0.35)",color:"#24313d",padding:3});X.position.copy(tt(Pe[0],Pe[1],ie+Math.min(_e,2.4)+.4)),X.userData={...X.userData,levelId:I.level,interior:!0,isLabel:!0},k.group.add(X),k.interior.push(X)}}let P=i.site||{},D=P.extent||{minE:-150,maxE:150,minN:-150,maxN:150},V=[[D.minE,D.minN],[D.maxE,D.minN],[D.maxE,D.maxN],[D.minE,D.maxN]],q=h(ff(V,(P.groundElev??0)-.05),"ground",{id:"site.ground",label:"Ground (context)",accuracy:"APPROXIMATE"},{parent:a,edges:!1,site:!0});q.userData.isGround=!0;for(let I of P.terrain||[]){let le=h(In(I.polygon,I.bottom,I.top),I.matKey||"ground",{id:I.id,label:I.name,kind:"terrain",accuracy:I.accuracy,source:I.source,note:I.note},{parent:a,site:!0,edgeThreshold:40});le.userData.isGround=!0}let O=0;for(let I of P.surfaces||[]){O+=.004;let le=(I.elev??0)+.01+O,k=h(I.kind==="path"?Uh(I.path,I.width,le):ff(I.polygon,le),I.matKey||I.kind,{id:I.id,label:I.name,kind:I.kind,accuracy:I.accuracy,source:I.source,note:I.note},{parent:a,edges:!1,site:!0});if(I.polygon&&I.outline!==!1){let B=new Tn(pf(I.polygon,le+.01),Ri("faint"));B.raycast=()=>{},k.add(B),B.position.set(0,0,0)}if(I.kind==="tennis"&&I.court&&Dv(a,I.court,le+.02,l),I.labelText!==!1&&I.name){let B=I.polygon?$s(I.polygon):I.path[Math.floor(I.path.length/2)],ie=Pn(I.labelText||I.name,{fontSize:11,color:"#35424e",background:"rgba(255,255,255,0.75)",padding:2,depthTest:!0});ie.position.copy(tt(B[0],B[1],le+1.2)),ie.userData.isSiteLabel=!0,a.add(ie),l.overlays.push(ie)}}for(let I of P.streets||[]){h(Uh(I.path,I.width||10,.005),"road",{id:"site.street."+I.name,label:I.name+" (street)",kind:"street",accuracy:I.accuracy||"APPROXIMATE",source:I.source},{parent:a,edges:!1,site:!0});let le=I.labelAt||I.path[Math.floor(I.path.length/2)],k=Pn(I.name.toUpperCase(),{fontSize:12,bold:!0,color:"#3b4652",background:"rgba(255,255,255,0.8)",padding:3,depthTest:!0});k.position.copy(tt(le[0],le[1],1.5)),a.add(k),l.overlays.push(k)}for(let I of P.otherBuildings||[]){let le=h(In(I.footprint,0,I.height),I.matKey||"neighbour",{id:I.id,label:I.name,kind:"building",accuracy:I.accuracy,source:I.source,note:I.note},{parent:a,site:!0});(I.neighbour??I.id.startsWith("site.nb."))&&(le.userData.neighbour=!0)}if(P.trees?.length){let I=new Or(1,0),le=new Bi(I,$i("tree"),P.trees.length);P.trees.forEach(([k,B,ie=3,_e=0],pe)=>le.setMatrixAt(pe,new it().compose(tt(k,B,_e+ie*1.3),new Yt,new L(ie,ie*1.25,ie)))),le.raycast=()=>{},le.userData={matKey:"tree",decoTree:!0},a.add(le),l.surfaces.push(le)}let H=(D.minE+D.maxE)/2,Q=(D.minN+D.maxN)/2,Z=8,he=[["NORTH",H,D.maxN-Z],["SOUTH",H,D.minN+Z],["EAST",D.maxE-Z,Q],["WEST",D.minE+Z,Q]].map(([I,le,k])=>{let B=Pn(I,{fontSize:15,bold:!0,color:"#ffffff",background:"rgba(36,49,61,0.85)",padding:5,radius:4,depthTest:!0});return B.position.copy(tt(le,k,2)),B.userData.compass=!0,c.add(B),B}),K=Nv();K.position.copy(tt(D.maxE-22,D.maxN-22,.08)),c.add(K);let oe=new Map,se=i.levelLabelAnchor||[Pi(g).maxE+4,Pi(g).minN-4];for(let I of s){let le=Pn(I.short||I.id,{fontSize:10,bold:!0,color:"#2a3946",background:"rgba(255,255,255,0.85)",border:"rgba(42,57,70,0.4)",padding:2}),k=I.kind==="roof"?I.elev+1:I.elev+I.height/2;le.position.copy(tt(se[0],se[1],k)),le.userData.levelLabel=I.id,c.add(le),oe.set(I.id,le)}let Ne=s.map(I=>I.elev),Ae=new Tn(new dt().setFromPoints([tt(se[0],se[1],Math.min(...Ne)),tt(se[0],se[1],Math.max(...Ne)+3)]),new kt({color:"#7c8792"}));Ae.raycast=()=>{},c.add(Ae);let st=[];return e.traverse(I=>{(I.isMesh||I.isInstancedMesh)&&I.userData.componentId&&!I.userData.decoTree&&st.push(I)}),{root:e,levels:n,site:l,components:t,pickables:st,levelLabels:oe,compassLabels:he,labelGroup:c,towerCentroid:[m,p],towerPoly:g,topElev:x,extent:D}}function Ev(i,e,t){let n=[],r=(o,a)=>e.some((l,c)=>{let h=e[(c+1)%e.length],d=h[0]-l[0],u=h[1]-l[1],f=Math.max(0,Math.min(1,((o-l[0])*d+(a-l[1])*u)/(d*d+u*u||1)));return Math.hypot(l[0]+f*d-o,l[1]+f*u-a)<.15});return i.forEach((o,a)=>{let l=i[(a+1)%i.length],c=Math.hypot(l[0]-o[0],l[1]-o[1]);if(c<.1||r((o[0]+l[0])/2,(o[1]+l[1])/2))return;let h=new $t(c,1.05,.06);h.rotateY(Math.atan2(l[1]-o[1],l[0]-o[0])),h.translate((o[0]+l[0])/2,t+1.05/2,-(o[1]+l[1])/2),n.push(h)}),n.length?Lv(n):null}function Tv(i,e){let t=gf(i)<0,n=Oh(t?[...i].reverse():i,e);return t?n.reverse():n}function Av(i,e,t,n){let s=i.length,r=t.edge,o=(t.edge+1)%s,a=(m,p,E)=>[m[0]+(p[0]-m[0])*E,m[1]+(p[1]-m[1])*E],l=a(i[r],i[o],t.from??0),c=a(i[r],i[o],t.to??1),h=a(e[r],e[o],t.from??0),d=a(e[r],e[o],t.to??1),u=In([h,d,c,l],n,n+.22),f=Math.hypot(c[0]-l[0],c[1]-l[1]),g=1.05,b=new $t(Math.max(.05,f),g,.06);return b.rotateY(Math.atan2(c[1]-l[1],c[0]-l[0])),b.translate((l[0]+c[0])/2,n+.22+g/2,-(l[1]+c[1])/2),{slab:u,rail:b}}function Rv(i,e,t,n){let s=[],r=i.length;for(let a=0;a<r;a++){let l=i[a],c=i[(a+1)%r],h=e[(a+1)%r],d=e[a],u=[l[0],t,-l[1]],f=[c[0],t,-c[1]],g=[h[0],n,-h[1]],b=[d[0],n,-d[1]];s.push(...u,...f,...g,...u,...g,...b)}let o=new dt;return o.setAttribute("position",new rt(s,3)),o.computeVertexNormals(),o}function Cv(i,e){return[(i[0]+e[0])/2,(i[1]+e[1])/2]}function mf(i,e,t){return e+Math.floor((i-e)/t)*t}function Pi(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return{minE:Math.min(...e),maxE:Math.max(...e),minN:Math.min(...t),maxN:Math.max(...t)}}function Oh(i,e){let t=Ci(i),n=t.length,s=t.map((r,o)=>{let a=t[(o+1)%n],l=a[0]-r[0],c=a[1]-r[1],h=Math.hypot(l,c)||1,d=[c/h*e,-l/h*e];return[[r[0]+d[0],r[1]+d[1]],[a[0]+d[0],a[1]+d[1]]]});return t.map((r,o)=>{let a=s[(o-1+n)%n],l=s[o];return Pv(a,l)||l[0]})}function Pv([i,e],[t,n]){let s=(i[0]-e[0])*(t[1]-n[1])-(i[1]-e[1])*(t[0]-n[0]);if(Math.abs(s)<1e-9)return null;let r=((i[0]-t[0])*(t[1]-n[1])-(i[1]-t[1])*(t[0]-n[0]))/s;return[i[0]+r*(e[0]-i[0]),i[1]+r*(e[1]-i[1])]}function Fh(i,e,t,n,s=0){let r=i.len,o=new $t(r,t-e,n),a=Math.atan2(i.q[1]-i.p[1],i.q[0]-i.p[0]);o.rotateY(a);let l=s-n/2,c=(i.p[0]+i.q[0])/2+i.out[0]*l,h=(i.p[1]+i.q[1])/2+i.out[1]*l;return o.translate(c,(e+t)/2,-h),o}function Iv(i){let[e,t]=i.start,[n,s]=i.end,r=tt(e,t,i.fromElev),o=tt(n,s,i.toElev),a=r.distanceTo(o),l=new $t(i.width,.25,a),c=new At;return c.position.copy(r).lerp(o,.5),c.lookAt(o),c.updateMatrix(),l.applyMatrix4(c.matrix),l}function Lv(i){let e=[],t=[],n=[],s=0;for(let o of i){let a=(o.index,o);e.push(...a.attributes.position.array),t.push(...a.attributes.normal.array);for(let l of a.index.array)n.push(l+s);s+=a.attributes.position.count}let r=new dt;return r.setAttribute("position",new rt(e,3)),r.setAttribute("normal",new rt(t,3)),r.setIndex(n),r}function Dv(i,e,t,n){let{center:s,rotDeg:r=0}=e,o=23.77,a=10.97,l=8.23,c=6.4,h=[[[-o/2,-a/2],[o/2,-a/2]],[[-o/2,a/2],[o/2,a/2]],[[-o/2,-a/2],[-o/2,a/2]],[[o/2,-a/2],[o/2,a/2]],[[-o/2,-l/2],[o/2,-l/2]],[[-o/2,l/2],[o/2,l/2]],[[-c,-l/2],[-c,l/2]],[[c,-l/2],[c,l/2]],[[-c,0],[c,0]],[[0,-a/2-.5],[0,a/2+.5]]],d=dn.degToRad(r),u=[];for(let[[g,b],[m,p]]of h)for(let[E,A]of[[g,b],[m,p]]){let v=s[0]+E*Math.cos(d)-A*Math.sin(d),T=s[1]+E*Math.sin(d)+A*Math.cos(d);u.push(tt(v,T,t))}let f=new ti(new dt().setFromPoints(u),new kt({color:"#ffffff"}));f.raycast=()=>{},i.add(f),n.overlays.push(f)}function Nv(){let i=new Ot,e=new gi;e.moveTo(0,7),e.lineTo(3,-4),e.lineTo(0,-1.8),e.lineTo(-3,-4),e.closePath();let t=new Ds(e);t.rotateX(-Math.PI/2);let n=new Rt(t,new Vn({color:"#24313d",side:Zt}));i.add(n);let s=Pn("N",{fontSize:16,bold:!0,color:"#24313d",background:"rgba(255,255,255,0.9)",padding:3});return s.position.set(0,1,-10),i.add(s),i}var Ci,Bh=Ut(()=>{si();ro();Ol();qs();Ci=i=>gf(i)<0?[...i].reverse():i});function Fv(i,e){return i=i||"",i.length>e?i.slice(0,e-1)+"\u2026":i}var Uv,kl,vf=Ut(()=>{si();ro();Ai();qs();Ol();Uv=i=>i==="APPROXIMATE"||i==="UNKNOWN",kl=class{constructor(e){this.viewer=e,this.group=new Ot,this.group.name="issues",e.scene.add(this.group),this.items=new Map,this.selectedId=null,this.showAllZones=!1,e.onFrame.add(t=>this._animate(t))}clear(){for(let e of[...this.items.keys()])this._remove(e)}_remove(e){let t=this.items.get(e);t&&(t.group.traverse(n=>{n.isSprite?Il(n):n.geometry&&n.geometry.dispose()}),this.group.remove(t.group),this.viewer.pickables=this.viewer.pickables.filter(n=>n!==t.pin&&!t.zoneMeshes.includes(n)),this.items.delete(e))}setIssues(e){this.clear();for(let t of e)this._add(t);this.viewer.updateScreenSprites()}refresh(e){this._remove(e._key||e.id),this._add(e),this.viewer.updateScreenSprites()}_add(e){let t=Mt[e.status]||Mt.open,n=t.color,s=Uv(e.accuracy),r=e._key||e.id,o=r===this.selectedId,a=new Ot;a.userData.issueId=r;let l=e.target?.anchor||{e:0,n:0,elev:0},c=tt(l.e,l.n,l.elev),h=e.target?.pinLift??4,d=c.clone().add(new L(0,h,0)),u=new Tn(new dt().setFromPoints([c,d]),new kt({color:n,depthTest:!1,transparent:!0}));u.renderOrder=15,u.raycast=()=>{},a.add(u);let f=new Rt(new Vi(.35,12,8),new Vn({color:n,depthTest:!1,transparent:!0}));f.position.copy(c),f.renderOrder=15,f.raycast=()=>{},a.add(f);let g=cf({color:n,glyph:xn[e.category]?.glyph||"?",dashed:s,selected:o,closed:!t.active});g.center.set(.5,.1),g.position.copy(d),g.userData.issueId=r,a.add(g),this.viewer.pickables.push(g);let b=e._readOnly?`${e.id} (${e._layer==="historical"?"historical":"shared"})`:e.id,m=Pn(o?`${b}
${Fv(e.title,46)}`:b,{fontSize:o?12:10,bold:o,color:"#1d2a36",background:o?"rgba(255,255,255,0.96)":"rgba(255,255,255,0.82)",border:o?n:"rgba(29,42,54,0.3)",padding:3,anchor:"left"});m.center.set(-.12,0),m.position.copy(d),m.renderOrder=o?31:21,m.userData.issueId=r,a.add(m);let p=[],E=[],A=e.target?.zone;if(A){let v=new Vn({color:n,transparent:!0,opacity:s?.38:.32,depthWrite:!1,side:Zt});s&&(v.alphaMap=Ll().clone(),v.alphaMap.needsUpdate=!0,v.alphaMap.repeat.set(Math.max(1,(A.size?.w||A.radius*2||4)/3),Math.max(1,(A.size?.d||A.radius*2||4)/3))),E.push(v);let T,y;if(A.shape==="circle"){T=new Ar(A.radius,48),T.rotateX(-Math.PI/2),T.translate(A.center.e,A.center.elev+.08,-A.center.n),y=[];for(let P=0;P<=64;P++){let D=P/64*Math.PI*2;y.push(tt(A.center.e+Math.cos(D)*A.radius,A.center.n+Math.sin(D)*A.radius,A.center.elev+.1))}}else{let P=A.size||{w:4,d:4,h:.3};T=new $t(P.w,P.h,P.d),T.rotateY(dn.degToRad(A.rotDeg||0)),T.translate(A.center.e,A.center.elev+P.h/2,-A.center.n)}let R=new Rt(T,v);R.renderOrder=12,R.userData.issueId=r,R.userData.zone=!0,R.userData.zonePart=!0,a.add(R),p.push(R),this.viewer.pickables.push(R);let x=s?Fl(n,{dash:.8,gap:.5,depthTest:!1}):new kt({color:n,transparent:!0,depthTest:!1});E.push(x);let M=y?new Tn(new dt().setFromPoints(y),x):new ti(new ki(T),x);M.computeLineDistances(),M.renderOrder=13,M.raycast=()=>{},M.userData.zonePart=!0,a.add(M)}this.group.add(a),this.items.set(r,{issue:e,group:a,pin:g,label:m,leader:u,dot:f,zoneMeshes:p,zoneMats:E,selected:o,active:t.active})}select(e){let t=this.selectedId;this.selectedId=e;for(let n of[t,e]){let s=n&&this.items.get(n);s&&this.refresh(s.issue)}}applyVisibility(e,t){for(let n of this.items.values()){let s=(n.issue._key||n.issue.id)===this.selectedId,r=e(n.issue)||s;n.group.visible=r;let o=s?1:t(n.issue.level);for(let l of[n.pin,n.label])l.material.opacity=o;n.leader.material.opacity=o,n.dot.material.opacity=o,n.baseOpacity=o;let a=s||this.showAllZones;for(let l of n.group.children)l.userData.zonePart&&(l.visible=a)}}_animate(e){let t=this.selectedId&&this.items.get(this.selectedId);if(!t)return;let n=.5+.5*Math.sin(e*4);t.zoneMats[0]&&(t.zoneMats[0].opacity=.22+.3*n)}anchorOf(e){let t=e.target?.anchor||{e:0,n:0,elev:0};return tt(t.e,t.n,t.elev)}}});function Ov(){let i=64*Zs,e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d");return t.beginPath(),t.arc(i/2,i/2,i/2-3*Zs,0,Math.PI*2),t.lineWidth=4*Zs,t.strokeStyle="#e02020",t.stroke(),e}function Bv(){let i=26*Zs,e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d");return t.beginPath(),t.arc(i/2,i/2,i/2-2*Zs,0,Math.PI*2),t.fillStyle="#e02020",t.fill(),t.lineWidth=3*Zs,t.strokeStyle="#ffffff",t.stroke(),e}var Zs,zl,yf=Ut(()=>{si();qs();Zs=Math.min(window.devicePixelRatio||1,2)*1.5;zl=class{constructor(e){this.viewer=e,this.group=new Ot,this.group.name="pointer",this.group.visible=!1,e.scene.add(this.group),this.dot=so(Bv(),{renderOrder:40}),this.ring=so(Ov(),{renderOrder:39}),this.group.add(this.ring,this.dot),this.label=null,this.position=null,e.onFrame.add(t=>this._animate(t))}show(e,t){this.position=e.clone(),this.dot.position.copy(e),this.ring.position.copy(e),this.label&&(this.group.remove(this.label),Il(this.label)),this.label=Pn(t,{fontSize:13,bold:!0,color:"#ffffff",background:"rgba(200,24,24,0.94)",padding:5,radius:4,anchor:"left",renderOrder:41}),this.label.center.set(-.08,-.35),this.label.position.copy(e),this.group.add(this.label),this.group.visible=!0,this.viewer.updateScreenSprites()}clear(){this.group.visible=!1,this.position=null}_animate(e){if(!this.group.visible)return;let t=e*.9%1;this.ring.userData.scaleFactor=.6+t*1.6,this.ring.material.opacity=1-t;let[n,s]=this.ring.userData.px,r=this.dot.scale.y/this.dot.userData.px[1];this.ring.scale.set(n*r*this.ring.userData.scaleFactor,s*r*this.ring.userData.scaleFactor,1)}}});var lo,Vl,bf=Ut(()=>{Ol();lo={exterior:{mode:"exterior",label:"Exterior"},roof:{mode:"roof",label:"Roof"},lobby:{mode:"level",focus:"M",label:"Lobby"},upper:{mode:"level",focus:"M",label:"Upper parking"},basement:{mode:"level",focus:"B",label:"Basement"}},Vl=class extends EventTarget{constructor(e,t){super(),this.b=e,this.markers=t,this.state={mode:"exterior",focus:null,upper:"ghost",accuracy:!1,showParkadeOutline:!1,showNeighbours:!1},this.selectedComponent=null,this.levelStates=new Map}set(e){Object.assign(this.state,e),this.state.mode!=="level"&&(this.state.focus=null),this.apply(),this.dispatchEvent(new Event("change"))}selectComponent(e){this.selectedComponent=e,this.apply()}levelState(e){return this.levelStates.get(e)||"solid"}apply(){let{mode:e,focus:t,upper:n,accuracy:s}=this.state,r=this.b.levels,o=t&&r.get(t),a=o?o.index:-1,l=o?.def.kind==="parkade",c=!!(o&&(l||o.def.seeThroughGround));for(let[d,u]of r){let f,g=u.def.kind==="parkade";e!=="level"||!o?f=g?"hidden":"solid":u.index===a?f="focus":u.index>a?f=n==="hidden"?"hidden":"ghost":f=c?"ghost":g?"hidden":"solid",this.levelStates.set(d,f),u.group.visible=f!=="hidden";for(let b of u.shell)this._style(b,f,s,u.def.kind);for(let b of u.interior)b.visible=f==="focus",(b.isMesh||b.isInstancedMesh)&&this._style(b,f==="focus"?"solid":f,s,u.def.kind);for(let b of u.edges){let m=b.userData.edgeOf;b.material=m===this.selectedComponent?Ri("selected"):f==="ghost"?Ri("ghost"):f==="focus"&&!b.userData.interior&&u.def.kind!=="residential"?Ri("xray"):Ri("base")}}let h=c?"ghost":"solid";for(let d of this.b.site.surfaces)this._style(d,h,s&&!d.userData.isGround&&!d.userData.decoTree,"site");for(let d of this.b.site.surfaces)d.userData.neighbour&&(d.visible=this.state.showNeighbours);for(let d of this.b.site.overlays)d.userData.overlay==="parkadeOutline"?d.visible=this.state.showParkadeOutline&&!l:d.material&&(d.material.opacity=c?.15:1,d.material.transparent=!0);for(let[d,u]of this.b.levelLabels){let f=this.levelStates.get(d);u.material.opacity=f==="focus"?1:f==="hidden"?.25:f==="ghost"?.55:.9,u.userData.scaleFactor=f==="focus"?1.5:1}this.markers?.applyVisibility(this.filterFn||(()=>!0),d=>{let u=this.levelStates.get(d);return u==="ghost"||u==="hidden"?.45:1})}_style(e,t,n,s){let r=e.userData;if(!r.matKey)return;let o="base";r.componentId&&r.componentId===this.selectedComponent?o="selected":t==="ghost"?o="ghost":t==="focus"&&(r.matKey==="wall"||r.matKey==="wallAlt"||r.matKey==="parkadeWall"||r.matKey==="glass")&&s!=="residential"?o="xray":n&&r.accuracy&&(o="acc:"+r.accuracy),r.matKey==="rail"&&o.startsWith("acc:")&&(o="base"),e.material=$i(r.matKey,o),r.ghost=o==="ghost"}}});function Hv(){return new Promise((i,e)=>{if(!("indexedDB"in window))return e(new Error("IndexedDB unavailable"));let t=indexedDB.open(kv,zv);t.onupgradeneeded=()=>{let n=t.result;n.objectStoreNames.contains("kv")||n.createObjectStore("kv"),n.objectStoreNames.contains("photos")||n.createObjectStore("photos")},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}function Ii(i,e,t,n){return new Promise((s,r)=>{let o=i.transaction(e,t),a,l=n(o.objectStore(e));l&&"onsuccess"in l&&(l.onsuccess=()=>a=l.result),o.oncomplete=()=>s(a),o.onerror=()=>r(o.error),o.onabort=()=>r(o.error)})}function Ji(i,e,t){return i._layer=e,i._key=`${e}|${i.id}`,i._readOnly=t,i}var kv,zv,Sf,Vv,Mf,wf,Ef,Zi,Gv,Hl,Tf=Ut(()=>{Ai();kv="anola-issue-map",zv=1,Sf="state-v3",Vv=["state-v2"],Mf="layers-v2",wf="anola-issue-map",Ef="anola.layerVisibility";Zi=i=>JSON.parse(JSON.stringify(i,(e,t)=>e.startsWith("_")?void 0:t)),Gv=i=>String(i||"shared").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"shared";Hl=class i extends EventTarget{constructor(e,t){super(),this.seed=e||{issues:[],bookmarks:[]},this.issues=[],this.bookmarks=[],this.historical={id:"historical",name:t?.name||"Historical record",description:t?.description||"",readOnly:!0,issues:(t?.issues||[]).map(s=>Ji(ri(structuredClone(s)),"historical",!0))},this.shared=[],this.photoCache=new Map,this.db=null,this.persistent=!1;let n=null;try{n=JSON.parse(localStorage.getItem(Ef)||"null")}catch{}this.visible=n||{mine:!0,historical:!1}}async init(){try{this.db=await Hv(),this.persistent=!0}catch(s){console.warn("[store] IndexedDB unavailable, changes will not persist:",s)}let e=this.db?await Ii(this.db,"kv","readonly",s=>s.get(Sf)):null;if(!e&&this.db)for(let s of Vv){let r=await Ii(this.db,"kv","readonly",o=>o.get(s));if(r&&Array.isArray(r.issues)){let o=r.issues.filter(a=>!String(a.id).startsWith("ANL-EX-"));e={issues:[...structuredClone(this.seed.issues||[]),...o],bookmarks:r.bookmarks||[]};break}}let t=this.seed.seedVersion||0;if(e&&Array.isArray(e.issues)&&(e.seedVersion||0)<t){let s=e.issues.filter(r=>!String(r.id).startsWith("ANL-EX-"));e={...e,issues:[...structuredClone(this.seed.issues||[]),...s]}}e&&Array.isArray(e.issues)?(this.issues=e.issues.map(s=>Ji(ri(s),"mine",!1)),this.bookmarks=e.bookmarks||[],await this.save()):(this.loadSeed(),await this.save());let n=this.db?await Ii(this.db,"kv","readonly",s=>s.get(Mf)):null;this.shared=(n||[]).map(s=>({...s,readOnly:!0,issues:s.issues.map(r=>Ji(ri(r),s.id,!0))}))}loadSeed(){this.issues=(this.seed.issues||[]).map(e=>Ji(ri(structuredClone(e)),"mine",!1)),this.bookmarks=structuredClone(this.seed.bookmarks||[])}async save(){if(this.dispatchEvent(new Event("change")),!this.db)return;let e={issues:Zi(this.issues),bookmarks:Zi(this.bookmarks),seedVersion:this.seed.seedVersion||0,savedAt:new Date().toISOString()};await Ii(this.db,"kv","readwrite",t=>t.put(e,Sf))}async saveLayers(){this.db&&await Ii(this.db,"kv","readwrite",e=>e.put(Zi(this.shared),Mf))}layers(){return[{id:"mine",name:"My issues",readOnly:!1,issues:this.issues},...this.historical.issues.length?[this.historical]:[],...this.shared]}isVisible(e){return e==="mine"?this.visible.mine!==!1:!!this.visible[e]}setVisible(e,t){this.visible[e]=t;try{localStorage.setItem(Ef,JSON.stringify(this.visible))}catch{}this.dispatchEvent(new Event("change"))}visibleIssues(){return this.layers().filter(e=>this.isVisible(e.id)).flatMap(e=>e.issues)}layerOf(e){return this.layers().find(t=>t.id===e._layer)}get(e){if(!e)return null;let[t,n]=e.includes("|")?e.split("|"):["mine",e];return this.layers().find(s=>s.id===t)?.issues.find(s=>s.id===n)||null}async upsert(e){let t=Ji(ri(Zi(e)),"mine",!1),n=this.issues.findIndex(s=>s.id===t.id);return n>=0?this.issues[n]=t:this.issues.push(t),await this.save(),t}async remove(e){this.issues=this.issues.filter(t=>t.id!==e),await this.save()}async copyToMine(e){let t=this.layerOf(e),n=ri(Zi(e));return this.issues.some(s=>s.id===n.id)&&(n.id=Ul(this.issues)),n.history=[...n.history,{date:Dt(),author:"",text:`Copied from \u201C${t?.name||e._layer}\u201D (original no. ${e.id}).`}],this.upsert(n)}async addPhoto(e){let t="idb:"+Date.now().toString(36)+Math.random().toString(36).slice(2,7);return this.photoCache.set(t,e),this.db&&await Ii(this.db,"photos","readwrite",n=>n.put(e,t)),t}async photoUrl(e){if(e.src)return e.src;if(!e.ref)return"";if(this.photoCache.has(e.ref))return this.photoCache.get(e.ref);if(!this.db)return"";let t=await Ii(this.db,"photos","readonly",n=>n.get(e.ref));return t&&this.photoCache.set(e.ref,t),t||""}async _storePhotos(e){for(let[t,n]of Object.entries(e||{}))this.photoCache.set(t,n),this.db&&await Ii(this.db,"photos","readwrite",s=>s.put(n,t))}async addBookmark(e){this.bookmarks.push(e),await this.save()}async removeBookmark(e){this.bookmarks=this.bookmarks.filter(t=>t.id!==e),await this.save()}async exportMine(e){let t={};for(let n of this.issues)for(let s of n.photos||[])s.ref&&!t[s.ref]&&(t[s.ref]=await this.photoUrl(s));return{format:wf,formatVersion:2,sharedBy:e||"",exportedAt:new Date().toISOString(),building:"Anola Place, 2041 Bellwood Avenue, Burnaby BC (Strata Plan NW2020)",issues:Zi(this.issues),bookmarks:Zi(this.bookmarks),photos:t}}static validate(e){if(!e||e.format!==wf||!Array.isArray(e.issues))throw new Error("This file is not an Anola Issue Map file.")}async importShared(e,t){i.validate(e);let n=e.sharedBy||t.replace(/\.json$/i,""),s="shared:"+Gv(n);await this._storePhotos(e.photos);let r={id:s,name:`Shared by ${n}`,sharedBy:n,exportedAt:e.exportedAt||"",importedAt:new Date().toISOString(),readOnly:!0,issues:e.issues.map(a=>Ji(ri(a),s,!0))},o=this.shared.some(a=>a.id===s);return this.shared=[...this.shared.filter(a=>a.id!==s),r],await this.saveLayers(),this.setVisible(s,!0),{layer:r,replaced:o}}async removeShared(e){this.shared=this.shared.filter(t=>t.id!==e),delete this.visible[e],await this.saveLayers(),this.dispatchEvent(new Event("change"))}async restoreBackup(e){return i.validate(e),await this._storePhotos(e.photos),this.issues=e.issues.map(t=>Ji(ri(t),"mine",!1)),this.bookmarks=e.bookmarks||[],await this.save(),this.issues.length}async resetToSeed(){this.loadSeed(),await this.save()}}});function w(i,e,...t){let n=/^([a-z0-9]+)?((?:[.#][\w-]+)*)$/i.exec(i)||[],s=document.createElement(n[1]||"div");for(let r of(n[2]||"").match(/[.#][\w-]+/g)||[])r[0]==="."?s.classList.add(r.slice(1)):s.id=r.slice(1);e&&(typeof e!="object"||e instanceof Node||Array.isArray(e))&&(t.unshift(e),e=null);for(let[r,o]of Object.entries(e||{}))o==null||o===!1||(r.startsWith("on")?s.addEventListener(r.slice(2).toLowerCase(),o):r==="style"&&typeof o=="object"?Object.assign(s.style,o):r==="html"?s.innerHTML=o:r in s&&r!=="list"&&r!=="form"?s[r]=o:s.setAttribute(r,o===!0?"":o));for(let r of t.flat(1/0))r==null||r===!1||s.append(r instanceof Node?r:document.createTextNode(String(r)));return s}function xt(i,e="info",t=3200){let n=Oe("#toast");n.textContent=i,n.className="show "+e,clearTimeout(Af),Af=setTimeout(()=>n.className="",t)}function Xn(i,e,{wide:t=!1,onClose:n}={}){let s=Oe("#modal");s.innerHTML="";let r=()=>{s.hidden=!0,s.innerHTML="",document.removeEventListener("keydown",o),n?.()},o=l=>l.key==="Escape"&&r();document.addEventListener("keydown",o);let a=w("div.modal-box"+(t?".wide":""),w("div.modal-head",w("h2",i),w("button.icon-btn",{title:"Close",onclick:r,"aria-label":"Close"},"\u2715")),w("div.modal-body",e));return s.append(a),s.hidden=!1,s.onclick=l=>l.target===s&&r(),r}function qn(i,e="OK"){return new Promise(t=>{let n=!1,s=Xn("Please confirm",w("div",w("p",i),w("div.row-end",w("button.btn",{onclick:()=>{n=!0,s(),t(!1)}},"Cancel"),w("button.btn.primary",{onclick:()=>{n=!0,s(),t(!0)}},e))),{onClose:()=>!n&&t(!1)})})}function kh(i,e=""){return new Promise(t=>{let n=!1,s=w("input.input",{value:e,style:{width:"100%"}}),r=()=>{n=!0,o(),t(s.value.trim()||null)};s.addEventListener("keydown",a=>a.key==="Enter"&&r());let o=Xn(i,w("div",s,w("div.row-end",w("button.btn",{onclick:()=>{n=!0,o(),t(null)}},"Cancel"),w("button.btn.primary",{onclick:r},"OK"))),{onClose:()=>!n&&t(null)});setTimeout(()=>s.focus(),30)})}function Gl(i,e){let t=document.createElement("a");t.download=i,t.href=typeof e=="string"?e:URL.createObjectURL(e),document.body.append(t),t.click(),t.remove(),typeof e!="string"&&setTimeout(()=>URL.revokeObjectURL(t.href),4e3)}function Nt(i){if(!i)return"\u2014";let e=new Date(i.length===10?i+"T12:00:00":i);return isNaN(e)?i:e.toLocaleDateString("en-CA",{year:"numeric",month:"short",day:"numeric"})}var Oe,Af,Js=Ut(()=>{Oe=(i,e=document)=>e.querySelector(i)});function Wl(i,e,t){let n=(i-t.minE)/(t.maxE-t.minE||1),s=(e-t.minN)/(t.maxN-t.minN||1),r=n<1/3?0:n<2/3?1:2,o=s<1/3?0:s<2/3?1:2;return Cf[o][r]}function Rf(i,e){let t=Math.atan2(i,e)*180/Math.PI;return Wv[Math.round((t+360)%360/45)%8]}function Ki(i){return i?i.label?i.label:i.kind==="residential"?`Level ${i.short}`:i.name:""}function Xl(i,e){let{pt:t}=e,n=e.componentId&&i.built.components.get(e.componentId),s=i.levelDef(e.levelId),r=Pi(i.model.tower.wallFootprint||i.model.tower.outline),o=i.model.parkade,[a,l]=i.towerCenter,c=n?n.label.replace(/^.*? – /,""):"",h=/unit (\w+)/.exec(n?.label||"");if(c=c.replace(/\s*\(.*\)\s*$/,""),/windows \/ sliding doors/.test(c)&&(c=`${Rf(t.e-a,t.n-l)} face windows`),n?.id?.startsWith("site.")||!s&&!n){let b=Math.hypot(t.e-a,t.n-l)<3?"at the tower":`${Rf(t.e-a,t.n-l)} of the tower`;return n&&!/^Strata lot|^Ground/.test(n.label)?`${n.label.replace(/\s*\(.*\)$/,"")} \xB7 ${b}`:`Grounds \xB7 ${b}`}let d=n&&!/floor slab|perimeter|columns|aisle|slab edge|exterior wall/.test(n.label)?n.label.includes(" \u2013 ")?c:n.label.replace(/\s*\(.*\)\s*$/,""):"";if(s?.kind==="parkade"){let g=Wl(t.e,t.n,Pi(o.footprints?.[s.id]||o.footprint));return`Basement (lower parking) \xB7 ${d||g}`}if(s?.id==="M")return o.footprints?.M&&ao([t.e,t.n],o.footprints.M)&&!d?`Upper parking \xB7 ${Wl(t.e,t.n,Pi(o.footprints.M))}`:`Main floor \xB7 ${d||Wl(t.e,t.n,r)}`;let u=Wl(t.e,t.n,r);if(s?.kind==="roof"||s?.kind==="penthouse")return`${c||Ki(s)} \xB7 ${u}`;let f=[Ki(s),c||u];return h&&f.push(`unit ${h[1]} (inferred)`),f.filter(Boolean).join(" \xB7 ")}function Pf(i){let e=i.model,t=[],n=(h,d,u,f)=>t.push({label:h,hint:d,keys:(h+" "+u).toLowerCase(),go:f}),s=i.built.components;for(let h of e.levels)h.kind==="roof"?n("Roof","Upper roof, skylights, elevator room","top roof rf",d=>d.setPreset("roof")):h.kind==="penthouse"?n("Penthouses & lower roof","PH1\u2013PH4, metal roof","ph penthouse lower roof",d=>d.goToComponent("roof.lower","Lower roof / penthouse decks")):n(h.kind==="residential"?`Level ${h.short}`:h.label||h.name,h.name,`${h.id} floor ${h.short} ${h.kind==="parkade"?"basement lower parking p2":h.kind==="ground"?"main floor lobby upper parking p1":""}`,d=>d.focusLevel(h.id));let r={"01":"west side","02":"north-west corner","03":"north side","04":"north-east corner","05":"east side","06":"south-east corner","07":"south side","08":"south-west corner"},o=e.tower.balconies?.items||[];for(let h of e.levels.filter(d=>d.kind==="residential"))for(let[d,u]of Object.entries(r)){let f=`${h.unitPrefix}${d}`,g=o.filter(b=>b.unit===d).map(b=>`tower.${h.id}.balcony.${b.id}`).filter(b=>s.has(b));g.length&&n(`Unit ${f}`,`Level ${h.short}, ${u}`,`${f} suite #${f}`,b=>b.goToComponents(g,`Unit ${f} \xB7 Level ${h.short} \xB7 ${u}`))}n("Unit 101","Main floor, north-east (under the tower)","101 suite",h=>h.goToComponent("unit101","Unit 101 \xB7 main floor"));let a={PH1:["north-west",-9,9],PH2:["north-east",9,9],PH3:["south-east",9,-9],PH4:["south-west",-9,-9]};for(let[h,[d,u,f]]of Object.entries(a))n(h,`Penthouse, ${d} corner (strata plan)`,`${h} penthouse`,g=>g.goToPoint({e:u,n:f,elev:g.levelDef("PH").elev+.4},"PH",`${h} \xB7 penthouse, ${d} corner`));let l=[["lobby","Lobby & main entrance","entrance front door main floor"],["entrance.main","Main entrance doors","front door"],["core.M","Elevators","elevator lift core"],["office","Office (management / caretaker)","caretaker office management"],["mailRoom","Mail room","mail mailbox"],["recRoom","Recreation room","amenity party meeting room rec"],["storage.M","Storage room (main floor)","storage locker"],["storage.B.W","Storage / lockers \u2013 basement west","storage locker room"],["storage.B.NE","Storage / lockers \u2013 basement north-east","storage locker room"],["storage.B.E","Storage / lockers \u2013 basement east","storage locker room"],["electrical.B","Main electrical room","electrical hydro meter"],["garbage.B","Garbage room","garbage recycling"],["mechanical.B","Mechanical room (basement)","mechanical boiler pump"],["generator.B","Emergency generator room","generator diesel"],["poolEquipment.B","Pool equipment room","pool pump equipment"],["commercial","Commercial unit (shops, Anola Dr)","commercial retail shop store 158"],["stairN.M","Exit stair \u2013 north","stairs exit"],["stairSW.M","Exit stair \u2013 south-west","stairs exit"],["ramp.lower","Garage ramp to lower parking","ramp garage entrance basement"],["gate.M","Upper parking entrance","garage entrance gate p1 upper"],["gate.B","Lower parking gate","garage gate basement p2 lower"],["site.podium.north","North courtyard (podium over upper parking)","upper courtyard podium membrane landscaping",{e:6,n:34,elev:3}],["site.podium.south","South landscaped podium (over basement)","podium membrane landscaping front garden",{e:24,n:-6,elev:.1}],["site.tennis","Tennis court","tennis"],["site.pool","Swimming pool","pool hot tub"],["site.poolDeck","Pool deck","pool deck"],["site.driveLoop","Drop-off loop","driveway turnaround"],["roof.upper","Upper (main) roof","main roof"],["roof.lower","Lower roof / penthouse patios","lower roof decks patios"],["roof.metal","Metal roof (mansard)","sloped metal roof"],["roof.elevatorRoom","Elevator machine room (roof)","machine room mechanical boiler"],["roof.skylight.NE","Skylight (north-east, PH2)","skylight dome ph2"],["roof.skylight.NW","Skylight (north-west, PH1)","skylight dome ph1"],["roof.skylight.SE","Skylight (south-east, PH3)","skylight dome ph3"],["roof.skylight.SW","Skylight (south-west, PH4)","skylight dome ph4"]];for(let[h,d,u,f]of l){let g=s.get(h);if(!g)continue;let b=g.accuracy==="UNKNOWN"?" \u2013 location not confirmed":g.accuracy==="APPROXIMATE"?" \u2013 approximate":"";n(d,`${Ki(i.levelDef(g.levelId))||"Site"}${b}`,u,m=>m.goToComponent(h,`${d}${b?" (approx.)":""}`,f))}let c=e.parkade;for(let h of c.levels){let d=c.footprints?.[h]||c.footprint,u=Pi(d),f=h==="B"?"Basement":"Upper parking";for(let g=0;g<3;g++)for(let b=0;b<3;b++){let m=Cf[g][b],p=u.minE+(b+.5)/3*(u.maxE-u.minE),E=u.minN+(g+.5)/3*(u.maxN-u.minN),A=(u.minE+u.maxE)/2,v=(u.minN+u.maxN)/2;for(let R=.2;R<.7&&!ao([p,E],d);R+=.2)p+=(A-p)*R,E+=(v-E)*R;if(!ao([p,E],d))continue;let T=m.replace(/ (corner|side)$/,""),y=h==="B"?"Basement (lower parking)":"Upper parking";n(`${f} ${T}`,`${h==="B"?"Basement (lower parking)":"Main floor (upper parking)"}, ${m}`,`${f} parking parkade ${h==="B"?"lower p2 basement":"upper p1"} ${m}`,R=>R.goToPoint({e:p,n:E,elev:R.levelDef(h).elev+.05},h,`${y} \xB7 ${m}`))}}for(let[h,d]of[["N","North"],["E","East"],["S","South"],["W","West"]])n(`${d} face`,`View the whole ${d.toLowerCase()} elevation`,`${d} elevation side facade`,u=>{u.clearPointer(),u.viewFrom(h)});return n("Streets: Bellwood Ave (east)","Address frontage, garage ramp","bellwood street",h=>h.goToPoint({e:57,n:0,elev:0},null,"Bellwood Avenue (east side)")),n("Streets: Anola Dr (south)","Commercial strip frontage","anola drive street",h=>h.goToPoint({e:0,n:-55,elev:0},null,"Anola Drive (south side)")),t}function If(i,e){let t=e.toLowerCase().trim().split(/\s+/).filter(Boolean);if(!t.length)return[];let n=[];for(let s of i){if(!t.every(o=>s.keys.includes(o)))continue;let r=(s.label.toLowerCase().startsWith(t[0])?0:1)*100+s.label.length;n.push([r,s])}return n.sort((s,r)=>s[0]-r[0]).slice(0,8).map(s=>s[1])}var Cf,Wv,zh=Ut(()=>{Bh();Cf=[["south-west corner","south side","south-east corner"],["west side","centre","east side"],["north-west corner","north side","north-east corner"]],Wv=["north","north-east","east","south-east","south","south-west","west","north-west"]});function ql(i){let e=(i.actions||[]).filter(n=>!n.done),t=Dt();return{open:e.length,overdue:e.filter(n=>n.due&&n.due<t).length}}function Vh(i,e){let t=Oe("#detail");if(t.innerHTML="",!e){t.hidden=!0;return}t.hidden=!1;let n=!!e._readOnly,s=i.store.layerOf(e),r=Mt[e.status],o=Ht[e.accuracy],a=i.levelDef(e.level),l=i.built.components.get(e.component),c=e._key,h=async y=>{y&&(e.history=[...e.history||[],{date:Dt(),author:i.author,text:y}]),await i.store.upsert(e),i.refreshIssue(c)},d=w("div.photos");if((e.photos||[]).forEach((y,R)=>{let x=w("img",{alt:y.caption||"photo",loading:"lazy"});i.store.photoUrl(y).then(M=>x.src=M||""),d.append(w("button.photo",{title:y.caption||"",onclick:()=>Yv(i,e,R)},x,y.caption?w("span",y.caption):null))}),!n){let y=w("input",{type:"file",accept:"image/*",multiple:!0,hidden:!0,onchange:R=>Xv(i,e,R.target.files)});d.append(w("button.photo.add",{title:"Attach photographs",onclick:()=>y.click()},w("b","+"),w("span","Add photo")),y)}let u=Dt(),f=w("ul.actions"),g=[...e.actions||[]].sort((y,R)=>y.done-R.done||(y.due||"9").localeCompare(R.due||"9"));g.length||f.append(w("li.empty",n?"No follow-up actions.":"No follow-up actions yet."));for(let y of g){let R=!y.done&&y.due&&y.due<u;f.append(w("li.action"+(y.done?".done":"")+(R?".overdue":""),w("input",{type:"checkbox",checked:!!y.done,disabled:n,title:y.done?"Mark as not done":"Mark as done",onchange:async x=>{y.done=x.target.checked,y.doneDate=y.done?Dt():"",await h(`${y.done?"Completed":"Re-opened"} action: ${y.text}`)}}),w("div.a-body",w("div.a-text",y.text),w("div.a-meta",[y.who,y.due?R?`overdue \u2013 due ${Nt(y.due)}`:`due ${Nt(y.due)}`:"",y.done&&y.doneDate?`done ${Nt(y.doneDate)}`:""].filter(Boolean).join(" \xB7 "))),n?null:w("button.icon-btn.sm",{title:"Delete action",onclick:async()=>{await qn(`Delete the action \u201C${y.text}\u201D?`,"Delete")&&(e.actions=e.actions.filter(x=>x!==y),await h())}},"\u2715")))}let b=w("input.input",{placeholder:"New action, e.g. \u201CGet quote for injection repair\u201D"}),m=w("input.input",{placeholder:"Who"}),p=w("input.input",{type:"date",title:"Due date (optional)"}),E=async()=>{let y=b.value.trim();if(!y)return xt("Type the action first","error");e.actions=[...e.actions||[],{id:"a"+Date.now().toString(36),text:y,who:m.value.trim(),due:p.value,done:!1,created:Dt()}],await h(`Added action: ${y}`),xt("Action added")};b.addEventListener("keydown",y=>y.key==="Enter"&&E());let A=w("textarea.input",{rows:2,placeholder:"Add a note, e.g. \u201CDiscussed at Nov council meeting \u2013 awaiting quote\u201D"}),v=w("input.input",{placeholder:"Your name",value:i.author}),T=n?w("span.pill",{style:{background:r.color}},r.label):w("select.input.status-sel",{style:{borderColor:r.color,color:r.color},title:"Change status",onchange:async y=>{let R=Mt[e.status].label;e.status=y.target.value,await h(`Status changed from ${R} to ${Mt[e.status].label}.`),xt(`Status: ${Mt[e.status].label}`)}},Object.entries(Mt).map(([y,R])=>w("option",{value:y,selected:y===e.status},R.label)));t.append(w("div.d-head",w("div",w("div.d-id",e.id,e.sample?w("span.badge.sample",{title:"Example record \u2013 not a reported issue"},"EXAMPLE"):null,n?w("span.badge.layer",s?.id==="historical"?"Historical":"Shared"):null),w("h2.d-title",e.title)),w("button.icon-btn",{title:"Close (Esc)","aria-label":"Close",onclick:()=>i.selectIssue(null)},"\u2715")),n?w("div.ro-box",w("div",w("b","View only"),` \u2013 from \u201C${s?.name||e._layer}\u201D.`,e.statusAsRecorded?` Status in the source: \u201C${e.statusAsRecorded}\u201D.`:""),w("button.btn.sm",{onclick:async()=>{let y=await i.store.copyToMine(e);i.store.setVisible("mine",!0),i.reloadIssues(),i.selectIssue(y._key,{fly:!1}),xt(`Copied to My issues as ${y.id} \u2013 you can now edit it and add actions`)}},"\u29C9 Copy to my issues")):"",w("div.d-pills",T,w("span.pill.outline",xn[e.category]?.label),w("span.pill",{style:{background:o.color},title:o.help},"Location: "+o.label)),w("div.d-actions",w("button.btn.primary",{onclick:()=>i.showIssueView(e),title:"Fly to this issue\u2019s viewpoint"},"\u25CE Go to view"),n?null:w("button.btn",{onclick:()=>i.saveIssueView(e),title:"Store the current camera position with this issue so it reopens here next time"},"\u2605 Save this view"),w("button.btn",{onclick:()=>i.screenshot(e),title:"Download a PNG image for a council package"},"\u2913 Screenshot"),w("button.btn",{onclick:()=>i.printSheet(e),title:"Printable issue sheet (choose \u201CSave as PDF\u201D in the print dialog)"},"\u2399 Issue sheet"),n?null:w("button.btn",{onclick:()=>i.editIssue(e)},"\u270E Edit")),w("section.d-where",w("h3","Where is it?"),w("dl",w("dt","Level"),w("dd",a?Ki(a):e.level),w("dt","Location"),w("dd",e.zone||"\u2014"),e.units?.length?[w("dt","Unit(s)"),w("dd",e.units.join(", "))]:null,l?[w("dt","Building part"),w("dd",w("a",{href:"#",onclick:y=>{y.preventDefault(),i.highlightComponent(l.id)}},l.label))]:null),w("div.acc-box",{style:{borderColor:o.color}},w("b",`Location accuracy: ${o.label}. `),o.help,e.accuracyNote?w("div.acc-note",e.accuracyNote):null)),w("section",w("h3",`Follow-up actions${ql(e).open?` (${ql(e).open} open)`:""}`),f,n?null:w("div.action-add",b,w("div.row",m,p,w("button.btn.sm",{onclick:E},"Add")))),w("section",w("h3","Description"),w("p.d-desc",e.description||"\u2014")),w("section",w("h3",`Photographs (${e.photos?.length||0})`),d),w("section",w("h3","Details"),w("dl",w("dt","Raised"),w("dd",Nt(e.dateReported)),w("dt","Contractor"),w("dd",e.contractor||"\u2014"),w("dt","Consultant"),w("dd",e.consultant||"\u2014"),w("dt","Source"),w("dd",(e.sourceDocuments||[]).length?w("ul.plain",e.sourceDocuments.map(y=>w("li",[y.title,y.date&&Nt(y.date),y.ref].filter(Boolean).join(" \xB7 ")))):"\u2014"),w("dt","Saved view"),w("dd",e.view?"Yes \u2013 opens at the saved camera position":"Not yet \u2013 using automatic view"))),w("section",w("h3","History / notes"),w("ul.timeline",(e.history||[]).slice().sort((y,R)=>y.date<R.date?1:-1).map(y=>w("li",w("div.t-meta",Nt(y.date),y.author?" \xB7 "+y.author:""),w("div",y.text)))),n?"":w("div.note-add",A,w("div.row",v,w("button.btn",{onclick:async()=>{let y=A.value.trim();y&&(localStorage.setItem("anola.author",v.value.trim()),await h(y),xt("Note added"))}},"Add note"))))),t.scrollTop=0}async function Xv(i,e,t){let n=0;for(let s of t)try{let r=await qv(s,1600),o=await i.store.addPhoto(r);e.photos=[...e.photos||[],{ref:o,caption:s.name.replace(/\.[^.]+$/,""),date:Dt()}],n++}catch(r){console.error(r),xt("Could not read "+s.name,"error")}n&&(await i.store.upsert(e),xt(`${n} photo${n>1?"s":""} attached`),i.refreshIssue(e._key))}async function qv(i,e){let t=await createImageBitmap(i),n=Math.min(1,e/Math.max(t.width,t.height)),s=document.createElement("canvas");return s.width=Math.round(t.width*n),s.height=Math.round(t.height*n),s.getContext("2d").drawImage(t,0,0,s.width,s.height),s.toDataURL("image/jpeg",.85)}function Yv(i,e,t){let n=e.photos||[],s=w("img.lb-img"),r=w("div.lb-cap"),o=async c=>{t=(c+n.length)%n.length;let h=n[t];s.src=await i.store.photoUrl(h),r.textContent=[`${t+1} / ${n.length}`,h.caption,h.date&&Nt(h.date),h.credit].filter(Boolean).join("  \xB7  ")},a=e._readOnly?w("span"):w("button.btn.danger",{onclick:async()=>{await qn("Remove this photo from the issue?","Remove")&&(e.photos=n.filter((c,h)=>h!==t),await i.store.upsert(e),l(),i.refreshIssue(e._key))}},"Remove photo"),l=Xn(`${e.id} \u2013 photographs`,w("div.lightbox",w("div.lb-stage",w("button.lb-nav",{onclick:()=>o(t-1)},"\u2039"),s,w("button.lb-nav",{onclick:()=>o(t+1)},"\u203A")),w("div.row-between",r,a)),{wide:!0});o(t)}var Lf=Ut(()=>{Ai();Js();zh()});function co(i,e,{isNew:t=!1}={}){let n=structuredClone(e),s={},r=(M,P,D)=>w("label.f",w("span.f-l",M),P,D?w("span.f-h",D):null),o=(M,P={})=>s[M]=w("input.input",{value:n[M]??"",...P}),a=(M,P=4)=>s[M]=w("textarea.input",{rows:P,value:n[M]??""}),l=(M,P)=>s[M]=w("select.input",$v(P,n[M])),c=s.level=w("select.input",i.model.levels.map(M=>w("option",{value:M.id,selected:M.id===n.level},M.name))),h=n.target?.zone,d=w("select.input",["box","circle","none"].map(M=>w("option",{value:M,selected:(h?.shape||"none")===M},{box:"Box / patch",circle:"Circle (on a floor)",none:"No zone \u2013 marker only"}[M]))),u=(M,P)=>w("input.input.num",{type:"number",step:"0.1",value:M??"",title:P}),f=u(h?.size?.w??4,"Width (m)"),g=u(h?.size?.d??4,"Depth (m)"),b=u(h?.size?.h??.3,"Height (m)"),m=u(h?.radius??3,"Radius (m)"),p=u(h?.rotDeg??0,"Rotation (degrees)"),E=n.target?.anchor||{e:0,n:0,elev:0},A=w("span.f-h",`Marker at ${E.e.toFixed(1)} m E, ${E.n.toFixed(1)} m N, ${E.elev.toFixed(1)} m elevation (from tower centre / ground floor).`),v=s.sourceDocuments=w("textarea.input",{rows:2,value:(n.sourceDocuments||[]).map(M=>[M.title,M.date,M.ref].filter(Boolean).join(" | ")).join(`
`),placeholder:"One per line:  Title | date | reference"}),T=w("div.form",w("div.grid2",r("Issue number",o("id",{readOnly:!t})),r("Date reported",o("dateReported",{type:"date"}))),r("Title",o("title",{placeholder:"e.g. Water ingress in the basement, south-east corner"})),w("div.grid3",r("Category",l("category",xn)),r("Status",l("status",Mt)),r("Level",c)),w("div.grid2",r("Location / zone (words)",o("zone",{placeholder:"e.g. South-east corner, under unit 106 patio"})),r("Related unit(s)",s.units=w("input.input",{value:(n.units||[]).join(", "),placeholder:"e.g. 1206, 1306"}))),r("Description",a("description",5)),w("div.grid2",r("Contractor",o("contractor")),r("Consultant / engineer",o("consultant"))),r("Source document(s)",v),w("fieldset",w("legend","Location on the model"),w("div.row",w("button.btn",{type:"button",onclick:()=>{x(),i.startPlacement(y(),t)}},t?"\u2316 Re-pick point on model":"\u2316 Move marker (click on model)"),A),w("div.grid3",r("Location accuracy",l("accuracy",Ht),"How sure are we about WHERE it is?"),r("Affected zone shape",d),r("Building component",s.component=w("select.input",[w("option",{value:""},"\u2014"),...[...i.built.components.values()].filter(M=>!M.id.startsWith("site.street")).sort((M,P)=>M.label.localeCompare(P.label)).map(M=>w("option",{value:M.id,selected:M.id===n.component},M.label))]))),w("div.zone-dims",w("span.f-l","Zone size (metres):")," W ",f," D ",g," H ",b," or radius ",m," rotate\xB0 ",p),r("Accuracy note",o("accuracyNote",{placeholder:"e.g. Position estimated from contractor photo; \xB15 m"}))),w("div.row-between",t?w("span"):w("button.btn.danger",{type:"button",onclick:async()=>{await qn(`Delete issue ${n.id}? This removes it from this computer\u2019s copy of the data.`,"Delete")&&(await i.store.remove(n.id),i.selectIssue(null),i.reloadIssues(),xt("Issue deleted"))}},"Delete issue"),w("div.row",w("button.btn",{type:"button",onclick:()=>x()},"Cancel"),w("button.btn.primary",{type:"button",onclick:R},t?"Create issue":"Save changes"))));function y(){let M={...n};for(let q of["id","title","dateReported","zone","description","contractor","consultant","accuracyNote"])M[q]=s[q].value.trim();for(let q of["category","status","accuracy","component"])M[q]=s[q].value;M.level=c.value,M.units=s.units.value.split(/[,;\s]+/).map(q=>q.trim()).filter(Boolean),M.sourceDocuments=v.value.split(`
`).map(q=>q.trim()).filter(Boolean).map(q=>{let[O,H,Q]=q.split("|").map(Z=>Z.trim());return{title:O,date:H,ref:Q}});let P=d.value,D=M.target?.anchor||{e:0,n:0,elev:0},V=M.target?.zone?.center||{...D};return M.target={...M.target||{},anchor:D,zone:P==="none"?null:P==="circle"?{shape:P,center:V,radius:+m.value||3}:{shape:"box",center:V,size:{w:+f.value||4,d:+g.value||4,h:+b.value||.3},rotDeg:+p.value||0}},M}async function R(){let M=y();if(!M.id)return xt("Issue number is required","error");if(!M.title)return xt("Please give the issue a short title","error");if(t&&i.store.get(M.id))return xt("That issue number already exists","error");M.history=M.history||[],t&&M.history.push({date:Dt(),author:localStorage.getItem("anola.author")||"",text:"Issue created in the map."}),await i.store.upsert(M),x(),i.reloadIssues(),i.selectIssue(M.id,{fly:t}),xt(t?"Issue created":"Changes saved")}let x=Xn(t?"New issue":`Edit ${n.id}`,T,{wide:!0})}var $v,Df=Ut(()=>{Ai();Js();$v=(i,e)=>Object.entries(i).map(([t,n])=>w("option",{value:t,selected:t===e},n.label||n))});function Zv(i,e,t,n,s){i.save(),i.translate(e,t),i.fillStyle="rgba(255,255,255,0.92)",i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.strokeStyle="#24313d",i.lineWidth=n*.06,i.stroke(),i.rotate(-s*Math.PI/180),i.fillStyle="#c62828",i.beginPath(),i.moveTo(0,-n*.78),i.lineTo(n*.22,0),i.lineTo(-n*.22,0),i.fill(),i.fillStyle="#5c6873",i.beginPath(),i.moveTo(0,n*.78),i.lineTo(n*.22,0),i.lineTo(-n*.22,0),i.fill(),i.fillStyle="#24313d",i.font=`700 ${n*.42}px Segoe UI, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText("N",0,-n*1.25),i.restore()}function Uf(i,e,t,n){let s=i.capture(1920,1080),r=s.width,o=r/1400,a=Math.round((e?118:70)*o),l=Math.round(34*o),c=document.createElement("canvas");c.width=r,c.height=s.height+a+l;let h=c.getContext("2d");if(h.fillStyle="#ffffff",h.fillRect(0,0,c.width,c.height),h.drawImage(s,0,a),h.fillStyle="#1f2d3a",h.fillRect(0,0,r,a),h.fillStyle="#b8c7d6",h.font=`600 ${15*o}px Segoe UI, sans-serif`,h.textBaseline="top",h.fillText(Nf,22*o,14*o),h.textAlign="right",h.fillText(`View: ${t} \xB7 exported ${new Date().toLocaleDateString("en-CA")}`,r-22*o,14*o),h.textAlign="left",e){let d=Mt[e.status];h.fillStyle="#ffffff",h.font=`700 ${26*o}px Segoe UI, sans-serif`;let u=`${e.id} \u2014 ${e.title}`;h.fillText(u.length>90?u.slice(0,89)+"\u2026":u,22*o,40*o),h.font=`600 ${15*o}px Segoe UI, sans-serif`;let f=22*o,g=(b,m,p="#fff")=>{let E=h.measureText(b).width+18*o;h.fillStyle=m,h.beginPath(),h.roundRect(f,80*o,E,24*o,12*o),h.fill(),h.fillStyle=p,h.fillText(b,f+9*o,84*o),f+=E+10*o};g(d.label,d.color),g(`Location accuracy: ${Ht[e.accuracy].label}`,Ht[e.accuracy].color),h.fillStyle="#dbe4ec",h.fillText(`${e.level} \xB7 ${e.zone||""}${e.units?.length?" \xB7 Unit(s) "+e.units.join(", "):""}`,f+6*o,84*o)}else h.fillStyle="#ffffff",h.font=`700 ${22*o}px Segoe UI, sans-serif`,h.fillText(n?`Location: ${n}`:"Building Issue Map \u2014 overview",22*o,36*o);return Zv(h,r-60*o,a+64*o,32*o,i.headingDeg()),h.fillStyle="#fff6d6",h.fillRect(0,c.height-l,r,l),h.fillStyle="#6b4e00",h.font=`600 ${14*o}px Segoe UI, sans-serif`,h.textBaseline="middle",h.fillText("SCHEMATIC MODEL \u2014 NOT TO SCALE. A communication aid for locating issues; not an architectural, engineering or legal drawing. Hatched/dashed = approximate location.",22*o,c.height-l/2),c.toDataURL("image/png")}function Ff(i,e,t,n){let s=Uf(i,e,t,n),r=e?`Anola-${e.id}-${Dt()}.png`:`Anola-view-${Dt()}.png`;Gl(r,s)}async function Of(i,e,t,n,s){let r=Uf(i,e,n),o=Oe("#printSheet");o.innerHTML="";let a=Mt[e.status],l=Ht[e.accuracy],c=(d,u)=>u?w("tr",w("th",d),w("td",u)):null,h=[];for(let d of e.photos||[]){let u=await t.photoUrl(d);u&&h.push(w("figure",w("img",{src:u}),w("figcaption",[d.caption,d.date&&Nt(d.date),d.credit].filter(Boolean).join(" \xB7 "))))}o.append(w("div.ps-head",w("div",Nf),w("div","Issue sheet \xB7 printed "+new Date().toLocaleDateString("en-CA"))),w("h1",`${e.id} \u2014 ${e.title}`),e.sample?w("p.ps-sample","EXAMPLE RECORD \u2014 not a reported issue"):"",w("img.ps-view",{src:r}),w("table.ps-table",c("Status",a.label),c("Category",xn[e.category]?.label),c("Date reported",Nt(e.dateReported)),c("Level",e.level),c("Location / zone",e.zone),c("Related unit(s)",e.units?.join(", ")),c("Building component",s||e.component),c("Contractor",e.contractor),c("Consultant",e.consultant),c("Source document(s)",(e.sourceDocuments||[]).map(d=>[d.title,d.date&&Nt(d.date),d.ref].filter(Boolean).join(" \xB7 ")).join("; ")),c("Location accuracy",`${l.label} \u2014 ${l.help}${e.accuracyNote?" "+e.accuracyNote:""}`)),e.actions?.length?w("section",w("h2","Follow-up actions"),w("table.ps-table",w("tr",w("th","Action"),w("th","Who"),w("th","Due"),w("th","Done")),e.actions.map(d=>w("tr",w("td",d.text),w("td",d.who||""),w("td",d.due?Nt(d.due):""),w("td",d.done?"\u2713 "+Nt(d.doneDate):""))))):"",w("h2","Description"),w("p",e.description||"\u2014"),h.length?w("section",w("h2","Photographs"),w("div.ps-photos",h)):"",e.history?.length?w("section",w("h2","History / notes"),w("ul",e.history.map(d=>w("li",w("b",Nt(d.date)+(d.author?" \xB7 "+d.author:"")+": "),d.text)))):"",w("p.ps-foot","Schematic model \u2014 not to scale. Locations are shown for communication only and are not an architectural, engineering, survey or legal representation.")),await Promise.all([...o.querySelectorAll("img")].map(d=>d.complete?null:new Promise(u=>{d.onload=d.onerror=u}))),window.print()}var Nf,Bf=Ut(()=>{Ai();Js();Nf="ANOLA PLACE \xB7 2041 Bellwood Avenue, Burnaby \xB7 Strata Plan NW2020"});var Yl,kf=Ut(()=>{ro();Js();Yl=class{constructor(e){this.app=e,this.steps=e.model.tour||[],this.i=-1,this.onKey=t=>{this.i<0||!Oe("#modal").hidden||(t.key==="ArrowRight"?this.go(this.i+1):t.key==="ArrowLeft"?this.go(this.i-1):t.key==="Escape"&&this.end())}}get active(){return this.i>=0}start(){this.steps.length&&(document.addEventListener("keydown",this.onKey),this.app.selectIssue(null),this.go(0))}end(){this.i=-1,document.removeEventListener("keydown",this.onKey),Oe("#tourCard").hidden=!0,this.app.clearPointer()}go(e){if(e<0||e>=this.steps.length)return;this.i=e;let t=this.steps[e],n=this.app,s=t.view;n.scene.set({mode:s.mode,focus:s.focus||null,upper:s.upper||"ghost"});let[r,o,a]=s.target;n.viewer.flyTo(n.viewer.viewToward(tt(r,o,a),{distance:s.dist,azimuthDeg:s.az,elevationDeg:s.el}),1.4),t.pointer?n.showPointerAt({e:t.pointer[0],n:t.pointer[1],elev:t.pointer[2]},t.pointerText||t.title,null,!1):n.clearPointer();let l=Oe("#tourCard");l.innerHTML="",l.append(w("div.tour-top",w("span.tour-step",`Tour \xB7 ${e+1} of ${this.steps.length}`),w("button.icon-btn.sm",{title:"End tour (Esc)",onclick:()=>this.end()},"\u2715")),w("div.tour-title",t.title),w("div.tour-text",t.text),w("div.tour-nav",w("button.btn",{disabled:e===0,onclick:()=>this.go(e-1)},"\u25C0 Back"),w("div.tour-dots",this.steps.map((c,h)=>w("button.tour-dot"+(h===e?".on":""),{title:this.steps[h].title,onclick:()=>this.go(h)}))),e===this.steps.length-1?w("button.btn.primary",{onclick:()=>this.end()},"Finish"):w("button.btn.primary",{onclick:()=>this.go(e+1)},"Next \u25B6"))),l.hidden=!1}}});var jv=Zf(()=>{si();ro();Bh();vf();yf();bf();Tf();Ai();Js();Lf();Df();Bf();zh();kf();var Hh=window.ANOLA_BUILDING_MODEL,Jv=window.ANOLA_SEED_DATA||{issues:[],bookmarks:[]},Kv=window.ANOLA_HISTORICAL||{issues:[]},$l=window.ANOLA_EDITION==="public",zf=["Made by a volunteer as a demonstration. Not produced or endorsed by Strata Plan NWS2020, its council or its property manager.","The building model is simplified and may be wrong. The three issues shown are made-up examples and do not describe real problems at Anola Place.","Do not rely on this for buying, selling, insurance, legal or engineering decisions.","Anything you record stays in your own browser; nothing is sent anywhere."],Vf="anola-notice-ok-v1",Ks=(i,e,t)=>Math.min(t,Math.max(e,i)),Gh=class{constructor(){this.model=Hh,this.viewer=new Dl(Oe("#canvasHost")),this.built=xf(Hh),this.viewer.scene.add(this.built.root),this.viewer.pickables.push(...this.built.pickables),this.markers=new kl(this.viewer),this.pointerLayer=new zl(this.viewer),this.scene=new Vl(this.built,this.markers),this.store=new Hl(Jv,Kv),this.selectedId=null,this.pointer=null,this.placement=null,this.filters={q:"",status:"active",period:"",category:""},this.tour=new Yl(this),window.anolaApp=this}async start(){if(await this.store.init(),this.store.persistent||xt("Browser storage is unavailable \u2013 changes will be lost when you close this page. Use \u2630 \u2192 Export to keep them.","warn",8e3),this.places=Pf(this),this.buildToolbar(),this.buildSidebar(),this.buildLegend(),this.buildGoto(),this.bindViewerEvents(),this.reloadIssues(),this.setPreset("exterior",{instant:!0}),this.viewer.addEventListener("frame",()=>this.updateCompass()),window.addEventListener("hashchange",()=>this.openFromHash()),document.addEventListener("keydown",e=>{e.key!=="Escape"||!Oe("#modal").hidden||this.tour.active||(this.placement?this.cancelPlacement():this.pointer?this.clearPointer():this.selectedId&&this.selectIssue(null))}),this.openFromHash(),Oe("#loading")?.remove(),$l){let e=!1;try{e=localStorage.getItem(Vf)==="1"}catch{}e||this.showNotice()}}showNotice(){let e=()=>{try{localStorage.setItem(Vf,"1")}catch{}},t=Xn("Unofficial prototype",w("div.help",w("div.warn-box",zf.map(n=>w("p",n))),w("div.row-end",w("button.btn.primary",{onclick:()=>t()},"OK, understood"))),{onClose:e})}levelDef(e){return this.model.levels.find(t=>t.id===e)}get towerCenter(){return this.built.towerCentroid}get author(){return localStorage.getItem("anola.author")||""}viewLabel(){let e=this.scene.state;return e.mode==="exterior"?"Exterior":e.mode==="roof"?"Roof":this.levelDef(e.focus)?.name||e.focus}buildToolbar(){let e=Oe("#views");for(let[s,r]of Object.entries(lo))e.append(w("button.seg-btn",{"data-view":s,onclick:()=>this.setPreset(s)},r.label));let t=Oe("#levelSelect");t.append(w("option",{value:""},"Choose level\u2026"));for(let s of[...this.model.levels].reverse())t.append(w("option",{value:s.id},s.name));t.onchange=()=>t.value&&this.goLevel(t.value),Oe("#lvlUp").onclick=()=>this.stepLevel(1),Oe("#lvlDown").onclick=()=>this.stepLevel(-1);for(let s of document.querySelectorAll("#upperSeg button"))s.onclick=()=>this.scene.set({upper:s.dataset.upper});for(let s of document.querySelectorAll("#viewFrom button"))s.onclick=()=>this.viewFrom(s.dataset.dir);Oe("#tourBtn").onclick=()=>this.tour.active?this.tour.end():this.tour.start(),Oe("#shotBtn").onclick=()=>this.screenshot(this.selectedId&&this.store.get(this.selectedId)),Oe("#saveViewBtn").onclick=()=>this.saveBookmark(),Oe("#saveViewBtn2").onclick=()=>this.saveBookmark(),Oe("#homeBtn").onclick=()=>{this.clearPointer(),this.setPreset("exterior")},Oe("#helpBtn").onclick=()=>this.showHelp();let n=Oe("#menu");Oe("#menuBtn").onclick=s=>{s.stopPropagation(),n.hidden=!n.hidden},document.addEventListener("click",()=>n.hidden=!0),n.append(w("div.menu-h","Share & back up"),w("button",{onclick:()=>this.exportMine()},"\u2913 Export my issues (to share or back up)"),w("button",{onclick:()=>this.loadShared()},"\u2912 Load someone\u2019s shared file (view only)\u2026"),w("button",{onclick:()=>this.restoreBackup()},"\u21BA Restore my own backup\u2026"),w("hr"),w("button",{onclick:()=>this.showAbout()},"\u24D8 About this model & accuracy"),w("button",{onclick:()=>this.showHelp()},"? How to use"),w("hr"),w("button.danger",{onclick:()=>this.resetData()},"\u27F2 Start fresh (3 example issues)")),this.scene.addEventListener("change",()=>this.syncToolbar()),this.syncToolbar()}syncToolbar(){let e=this.scene.state;for(let n of document.querySelectorAll("#views .seg-btn")){let s=lo[n.dataset.view],r=s.mode===e.mode&&(s.mode!=="level"||s.focus===e.focus),o=Object.entries(lo).filter(([,a])=>a.mode===s.mode&&a.focus===s.focus).length>1;n.classList.toggle("on",r&&(!o||this.activePreset===n.dataset.view))}Oe("#levelSelect").value=e.mode==="level"?e.focus:e.mode==="roof"&&this.model.levels.find(n=>n.kind==="roof")?.id||"";for(let n of document.querySelectorAll("#upperSeg button"))n.classList.toggle("on",n.dataset.upper===e.upper);Oe("#upperSeg").classList.toggle("disabled",e.mode!=="level");let t=Oe("#accCheck");t&&(t.checked=e.accuracy),Oe("#legendAcc").hidden=!e.accuracy,Oe("#modeHint").textContent=this.modeHint()}modeHint(){let e=this.scene.state;if(e.mode==="exterior")return"Exterior \xB7 the site steps down from north to south";if(e.mode==="roof")return"Roof";let t=this.levelDef(e.focus);return t?`${t.name} \xB7 floors above ${e.upper==="hidden"?"hidden":"transparent"}${t.seeThroughGround?" \xB7 ground see-through":""}`:""}setPreset(e,{instant:t=!1}={}){let n=lo[e];this.activePreset=e,this.scene.set({mode:n.mode,focus:n.focus||null}),this.viewer.flyTo(this.presetCamera(e),t?0:1.1)}goLevel(e){this.levelDef(e).kind==="roof"?this.setPreset("roof"):this.focusLevel(e)}stepLevel(e){let t=this.model.levels,n=this.scene.state,s=n.mode==="level"?t.findIndex(r=>r.id===n.focus):n.mode==="roof"?t.length-1:t.findIndex(r=>r.kind==="ground")-e;s=Ks(s+e,0,t.length-1),this.goLevel(t[s].id)}focusLevel(e){this.activePreset=null,this.scene.set({mode:"level",focus:e});let t=this.levelDef(e),n=t.kind==="parkade"||t.seeThroughGround,s=n?$s(this.model.parkade.footprints?.[e]||this.model.parkade.footprint):this.towerCenter;this.viewer.flyTo(this.viewer.viewToward(tt(s[0],s[1],t.elev+1),{distance:n?105:72,azimuthDeg:150,elevationDeg:n?55:45}))}presetCamera(e){let[t,n]=this.towerCenter,s=this.built.topElev,r=this.viewer;switch(e){case"roof":return r.viewToward(tt(t,n,s),{distance:75,azimuthDeg:160,elevationDeg:50});case"lobby":return r.viewToward(tt(t+3,n,1),{distance:70,azimuthDeg:135,elevationDeg:50});case"upper":return r.viewToward(tt(t-2,n+20,0),{distance:115,azimuthDeg:160,elevationDeg:58});case"basement":{let o=$s(this.model.parkade.footprints?.B||this.model.parkade.footprint);return r.viewToward(tt(o[0],o[1],this.levelDef("B").elev),{distance:120,azimuthDeg:160,elevationDeg:55})}default:return r.viewToward(tt(t,n,s*.4),{distance:s*2.6,azimuthDeg:135,elevationDeg:22})}}viewFrom(e){let[t,n]=this.towerCenter,s=this.built.topElev;if(this.scene.set({mode:"exterior"}),e==="T")return this.viewer.flyTo(this.viewer.viewToward(tt(t,n,0),{distance:210,azimuthDeg:180,elevationDeg:89.5}));let r={N:0,E:90,S:180,W:270}[e];this.viewer.flyTo(this.viewer.viewToward(tt(t,n,s*.48),{distance:s*2.05,azimuthDeg:r,elevationDeg:4}))}setPointer(e,t){this.pointer={info:e,text:t||Xl(this,e)},this.pointerLayer.show(tt(e.pt.e,e.pt.n,e.pt.elev),this.pointer.text),this.scene.selectComponent(e.componentId||this.selectedId&&this.store.get(this.selectedId)?.component||null),this.renderPointerCard(),Oe("#clickHint").hidden=!0}showPointerAt(e,t,n=null,s=!0){this.pointer={info:{pt:e,levelId:n},text:t},this.pointerLayer.show(tt(e.e,e.n,e.elev),t),s?this.renderPointerCard():Oe("#componentCard").hidden=!0}clearPointer(){this.pointer=null,this.pointerLayer.clear(),Oe("#componentCard").hidden=!0;let e=this.selectedId&&this.store.get(this.selectedId);this.scene.selectComponent(e?.component||null)}renderPointerCard(){let e=Oe("#componentCard"),t=this.pointer;if(!t||this.tour.active){e.hidden=!0;return}e.innerHTML="";let n=t.info.componentId&&this.built.components.get(t.info.componentId),s=Ht[n?.accuracy]||null,r=n?this.store.visibleIssues().filter(a=>a.component===n.id):[],o=w("div.cc-details",{hidden:!0},n?w("div",w("b","Model part: "),n.label):null,n?.source?w("div",w("b","Source: "),n.source):null,n?.note?w("div",n.note):null);e.append(...[w("div.cc-head",w("span.cc-dot"),w("b.cc-title",t.text),w("button.icon-btn.sm",{onclick:()=>this.clearPointer(),"aria-label":"Clear pointer",title:"Clear (Esc)"},"\u2715")),s?w("div.cc-acc",w("span.acc-dot",{style:{background:s.color}}),`Model accuracy here: ${s.label}`):null,r.length?w("div.cc-rel","Issues here: ",r.map(a=>w("a",{href:"#",onclick:l=>{l.preventDefault(),this.selectIssue(a._key)}},a.id+" "))):null,w("div.cc-actions",w("button.btn.primary.sm",{onclick:()=>this.recordFromPointer()},"+ Record as issue"),w("button.btn.sm",{onclick:()=>this.zoomToPointer()},"\u{1F50D} Zoom in"),n?w("button.btn.sm.link",{onclick:a=>{o.hidden=!o.hidden,a.target.textContent=o.hidden?"About this part \u25B8":"About this part \u25BE"}},"About this part \u25B8"):null),o].filter(Boolean)),e.hidden=!1}zoomToPointer(){let{pt:e}=this.pointer.info,t=tt(e.e,e.n,e.elev),n=this.viewer.camera.position.clone().sub(t).normalize(),s=Math.max(18,this.viewer.camera.position.distanceTo(t)*.45);this.viewer.flyTo({position:t.clone().addScaledVector(n,s).toArray(),target:t.toArray()},.8)}recordFromPointer(){let e=this.draftFromInfo(this.pointer.info);e.zone=this.pointer.text,co(this,e,{isNew:!0})}buildGoto(){let e=Oe("#gotoInput"),t=Oe("#gotoList"),n=[],s=0,r=()=>{t.innerHTML="",t.hidden=!n.length,n.forEach((a,l)=>t.append(w("li"+(l===s?".on":""),{onmousedown:c=>{c.preventDefault(),o(a)}},w("b",a.label),w("span",a.hint))))},o=a=>{a&&(e.value="",n=[],r(),e.blur(),this.tour.active&&this.tour.end(),a.go(this))};e.addEventListener("input",()=>{n=If(this.places,e.value),s=0,r()}),e.addEventListener("keydown",a=>{a.key==="ArrowDown"?(s=Math.min(n.length-1,s+1),r(),a.preventDefault()):a.key==="ArrowUp"?(s=Math.max(0,s-1),r(),a.preventDefault()):a.key==="Enter"?o(n[s]):a.key==="Escape"&&(e.value="",n=[],r(),e.blur())}),e.addEventListener("blur",()=>setTimeout(()=>{t.hidden=!0},150)),e.addEventListener("focus",()=>{n.length&&(t.hidden=!1)})}_viewFor(e,t,{size:n=6,interior:s=!1,site:r=!1,inside:o=!1}={}){this.activePreset=null;let[a,l]=this.towerCenter,c=Math.atan2(e.e-a,e.n-l)*180/Math.PI;Math.hypot(e.e-a,e.n-l)<3&&(c=150);let h=tt(e.e,e.n,e.elev);return t?.kind==="parkade"||t?.seeThroughGround&&o?{state:{mode:"level",focus:t.id},cam:this.viewer.viewToward(h,{distance:Ks(n*3,75,110),azimuthDeg:c,elevationDeg:50})}:t?.kind==="roof"||t?.kind==="penthouse"?{state:{mode:"roof"},cam:this.viewer.viewToward(h,{distance:Ks(n*2.5,45,90),azimuthDeg:c,elevationDeg:45})}:t?.kind==="ground"&&s?{state:{mode:"level",focus:t.id},cam:this.viewer.viewToward(h,{distance:65,azimuthDeg:c,elevationDeg:50})}:r||t?.kind==="ground"?{state:{mode:"exterior"},cam:this.viewer.viewToward(h,{distance:Ks(n*2.5,55,130),azimuthDeg:c,elevationDeg:42})}:{state:{mode:"exterior"},cam:this.viewer.viewToward(h,{distance:Ks(n*2.5,42,115),azimuthDeg:c,elevationDeg:14})}}_go({state:e,cam:t}){this.scene.set({...e}),this.viewer.flyTo(t)}goToComponents(e,t,n){let s=new mn,r=null;for(let d of e){let u=this.built.components.get(d);u&&(r=r||u,u.meshes.forEach(f=>s.expandByObject(f)))}if(!r)return;let o=s.getCenter(new L),a=s.getSize(new L),l=n||Dh(new L(o.x,s.max.y,o.z)),c=this.levelDef(r.levelId),h=!!r.meshes[0]?.userData.interior;this._go(this._viewFor(l,c,{size:Math.max(a.x,a.z,a.y),interior:h,site:r.id.startsWith("site.")})),this.setPointer({pt:l,componentId:r.id,levelId:r.levelId},t),e.length>1&&this.scene.selectComponent(null)}goToComponent(e,t,n){this.goToComponents([e],t,n)}goToPoint(e,t,n){this._go(this._viewFor(e,this.levelDef(t),{size:10,site:!t,inside:!!t})),this.showPointerAt(e,n,t)}buildSidebar(){let e=Oe("#search");e.oninput=()=>{this.filters.q=e.value.trim().toLowerCase(),this.renderList()};let t=Oe("#statusFilter");t.append(w("option",{value:"active"},"Outstanding + in progress"),...Object.entries(Mt).map(([r,o])=>w("option",{value:r},o.label)),w("option",{value:"all"},"All statuses")),t.onchange=()=>{this.filters.status=t.value,this.renderList()};let n=Oe("#periodFilter");n.append(w("option",{value:""},"Any date"),w("option",{value:"month"},"Raised this month"),w("option",{value:"3m"},"Last 3 months"),w("option",{value:"12m"},"Last 12 months")),n.onchange=()=>{this.filters.period=n.value,this.renderList()};let s=Oe("#categoryFilter");s.append(w("option",{value:""},"All categories"),...Object.entries(xn).map(([r,o])=>w("option",{value:r},o.label))),s.onchange=()=>{this.filters.category=s.value,this.renderList()},Oe("#newIssueBtn").onclick=()=>this.pointer?this.recordFromPointer():this.startPlacement(null,!0);for(let r of document.querySelectorAll(".tab"))r.onclick=()=>{for(let o of document.querySelectorAll(".tab"))o.classList.toggle("on",o===r);Oe("#issuesTab").hidden=r.dataset.tab!=="issues",Oe("#viewsTab").hidden=r.dataset.tab!=="views"}}renderLayers(){let e=Oe("#layers");e.innerHTML="";for(let t of this.store.layers()){let n=this.store.isVisible(t.id),s=t.id==="historical"?"read-only":t.readOnly?`read-only \xB7 ${t.exportedAt?"exported "+Nt(t.exportedAt):""}`:"";e.append(w("label.layer"+(t.readOnly?".ro":""),{title:t.description||""},w("input",{type:"checkbox",checked:n,onchange:r=>{this.store.setVisible(t.id,r.target.checked),this.reloadIssues()}}),w("span.layer-name",t.name,w("span.layer-n",` (${t.issues.length})`),s?w("span.layer-sub",s):null),t.id.startsWith("shared:")?w("button.icon-btn.sm",{title:"Remove this shared layer",onclick:async r=>{r.preventDefault(),await qn(`Remove \u201C${t.name}\u201D from this computer? (Your own issues are not affected.)`,"Remove")&&(await this.store.removeShared(t.id),this.selectedId?.startsWith(t.id+"|")&&this.selectIssue(null),this.reloadIssues())}},"\u2715"):null))}}passesFilter(e){let t=this.filters;if(t.status==="active"&&!t.q&&!Mt[e.status]?.active||t.status!=="active"&&t.status!=="all"&&e.status!==t.status||t.category&&e.category!==t.category)return!1;if(t.period&&e.dateReported){let n=new Date,s=new Date(n.getFullYear(),n.getMonth()-(t.period==="month"?0:t.period==="3m"?2:11),1);if(new Date(e.dateReported+"T12:00:00")<s)return!1}else if(t.period&&!e.dateReported)return!1;if(t.q){let n=uf(e,this.levelDef(e.level)?.name);if(!t.q.split(/\s+/).every(s=>n.includes(s)))return!1}return!0}reloadIssues(){this.markers.setIssues(this.store.visibleIssues()),this.scene.filterFn=e=>this.passesFilter(e),this.selectedId&&!this.store.get(this.selectedId)&&this.selectIssue(null),this.renderLayers(),this.renderList(),this.renderBookmarks()}refreshIssue(e){let t=this.store.get(e);t&&(this.markers.refresh(t),this.scene.apply(),this.renderLayers(),this.renderList(),this.selectedId===e&&Vh(this,t))}renderList(){let e=Oe("#issueList");e.innerHTML="";let t=this.store.visibleIssues(),n=t.filter(s=>this.passesFilter(s)).sort((s,r)=>Mt[r.status].active-Mt[s.status].active||(r.dateReported||"").localeCompare(s.dateReported||""));Oe("#issueCount").textContent=`${n.length} of ${t.length} shown`,n.length||e.append(w("li.empty",t.length?"No issues match. Try \u201CAll statuses\u201D, \u201CAny date\u201D, or clear the search.":"No issues yet. Click on the building to point at a spot, then \u201CRecord as issue\u201D."));for(let s of n){let r=Mt[s.status],o=Ht[s.accuracy],a=ql(s),l=s._readOnly?s._layer==="historical"?"Historical":this.store.layerOf(s)?.sharedBy||"Shared":null;e.append(w("li.card"+(s._key===this.selectedId?".sel":"")+(s._readOnly?".ro":""),{onclick:()=>this.selectIssue(s._key),tabIndex:0,onkeydown:c=>c.key==="Enter"&&this.selectIssue(s._key)},w("div.c-top",w("span.c-id",s.id),s.sample?w("span.badge.sample","EXAMPLE"):null,l?w("span.badge.layer",l):null,w("span.pill.sm",{style:{background:r.color}},r.label)),w("div.c-title",s.title),w("div.c-meta",`${Ki(this.levelDef(s.level))||s.level} \xB7 ${s.zone||""}`),w("div.c-meta2",w("span.acc-dot",{style:{background:o.color}}),`Location ${o.label.toLowerCase()}`,` \xB7 ${Nt(s.dateReported)}`,a.open?w("span.c-act"+(a.overdue?".overdue":""),` \xB7 ${a.open} action${a.open>1?"s":""}${a.overdue?` (${a.overdue} overdue)`:""}`):null)))}this.scene.apply()}renderBookmarks(){let e=Oe("#bookmarkList");e.innerHTML="",this.store.bookmarks.length||e.append(w("li.empty","No saved views yet. Arrange the model and press \u201C\u2605 Save view\u201D."));for(let t of this.store.bookmarks)e.append(w("li.card",{onclick:()=>this.applyView(t.view)},w("div.c-title",t.name),w("div.c-meta",`${t.viewLabel||""} \xB7 saved ${Nt(t.created)}`),w("button.icon-btn.sm",{title:"Delete saved view",onclick:async n=>{n.stopPropagation(),await qn(`Delete saved view \u201C${t.name}\u201D?`,"Delete")&&(await this.store.removeBookmark(t.id),this.renderBookmarks())}},"\u2715")))}selectIssue(e,{fly:t=!0}={}){e&&!e.includes("|")&&(e="mine|"+e),this.selectedId=e,this.markers.select(e);let n=e&&this.store.get(e);Vh(this,n),this.pointer&&n&&this.clearPointer(),this.scene.selectComponent(n?.component||null),this.renderList(),n&&t&&this.showIssueView(n);let s=n?"#issue="+encodeURIComponent(e):"";location.hash!==s&&history.replaceState(null,"",s||location.pathname+location.search),document.body.classList.toggle("has-detail",!!n),setTimeout(()=>this.viewer.resize(),0)}openFromHash(){let e=/issue=([^&]+)/.exec(location.hash);if(!e)return;let t=decodeURIComponent(e[1]);t.includes("|")||(t="mine|"+t);let n=t.split("|")[0];this.store.get(t)&&!this.store.isVisible(n)&&(this.store.setVisible(n,!0),this.reloadIssues()),this.store.get(t)&&t!==this.selectedId&&this.selectIssue(t)}showIssueView(e){this.applyView(e.view||this.defaultViewFor(e))}defaultViewFor(e){let t=this.levelDef(e.level)||this.model.levels[0],n=e.target.zone,s=n?n.center:e.target.anchor,r=n?.size?.h||0,o=n?.size?Math.max(n.size.w,n.size.d,n.size.h):(n?.radius||3)*2,a={e:s.e,n:s.n,elev:s.elev+(r>3?r/2:0)},l=!!this.built.components.get(e.component)?.meshes[0]?.userData.interior,c=a.elev<t.elev+t.height-.2&&t.seeThroughGround,h=this._viewFor(a,t,{size:o,interior:l,site:e.component?.startsWith("site."),inside:c&&!e.component?.startsWith("site.")});return o>30&&h.state.mode==="exterior"&&(h.cam=this.viewer.viewToward(tt(a.e,a.n,a.elev),{distance:Ks(o*2.2,60,125),azimuthDeg:160,elevationDeg:62})),{...h.cam,...h.state,upper:this.scene.state.upper}}captureView(){let e=this.scene.state;return{...this.viewer.getView(),mode:e.mode,focus:e.focus,upper:e.upper}}applyView(e){e&&(this.scene.set({mode:e.mode||"exterior",focus:e.focus||null,upper:e.upper||this.scene.state.upper}),this.viewer.flyTo(e))}async saveIssueView(e){e.view=this.captureView(),e.history=[...e.history||[],{date:Dt(),author:this.author,text:`Saved viewpoint (${this.viewLabel()}).`}],await this.store.upsert(e),xt(`View saved with ${e.id}. It will reopen here next time.`),this.refreshIssue(e._key)}async saveBookmark(){let e=await kh("Name for this saved view",this.pointer?this.pointer.text:`${this.viewLabel()} view`);e&&(await this.store.addBookmark({id:"bm-"+Date.now().toString(36),name:e,view:this.captureView(),viewLabel:this.viewLabel(),created:new Date().toISOString()}),this.renderBookmarks(),xt("View saved \u2013 see the \u201CSaved views\u201D tab"))}editIssue(e){e._readOnly||co(this,e,{isNew:!1})}highlightComponent(e){let t=this.built.components.get(e);t&&this.goToComponent(e,t.label.replace(/\s*\(.*\)$/,""))}pickInfo(e){let t=e.object.userData,n=new L(0,1,0);if(e.face){if(n=e.face.normal.clone(),e.object.isInstancedMesh&&e.instanceId!=null){let r=new it;e.object.getMatrixAt(e.instanceId,r),n.applyMatrix3(new Ye().getNormalMatrix(r)).normalize()}n.transformDirection(e.object.matrixWorld)}let s=Dh(e.point);return{pt:s,nrm:n,componentId:t.componentId,levelId:t.levelId||(t.componentId?.startsWith("site.")?null:this.levelAtElevation(s.elev))}}bindViewerEvents(){let e=Oe("#tooltip");this.viewer.controls.addEventListener("change",()=>{this._hovering||(e.hidden=!0)}),this.viewer.addEventListener("hover",t=>{this._hovering=!0,setTimeout(()=>this._hovering=!1,0);let n=t.hit,s=n?.object.userData,r="";if(s?.issueId){let a=this.store.get(s.issueId);r=a?`${a.id} \xB7 ${a.title}`:""}else s?.componentId&&(r=(this.placement?"\u2316 Place the issue here \u2014 ":"")+Xl(this,this.pickInfo(n)));if(!r){e.hidden=!0;return}e.textContent=r,e.hidden=!1;let o=Oe("#viewport").getBoundingClientRect();e.style.left=t.originalEvent.clientX-o.left+14+"px",e.style.top=t.originalEvent.clientY-o.top+14+"px"}),this.viewer.addEventListener("pick",t=>{let n=t.hit;if(this.placement){n&&!n.object.userData.issueId&&this.finishPlacement(n);return}if(!n)return;let s=n.object.userData;if(s.issueId)return this.selectIssue(s.issueId);s.componentId&&this.setPointer(this.pickInfo(n))})}startPlacement(e,t){this.placement={draft:e,isNew:t},Oe("#placeBanner").hidden=!1,document.body.classList.add("placing")}cancelPlacement(){let e=this.placement;this.placement=null,Oe("#placeBanner").hidden=!0,document.body.classList.remove("placing"),e?.draft&&co(this,e.draft,{isNew:e.isNew})}finishPlacement(e){let t=this.placement;this.placement=null,Oe("#placeBanner").hidden=!0,document.body.classList.remove("placing");let n=this.pickInfo(e),s=this.draftFromInfo(n);s.zone=Xl(this,n);let r=t.draft?{...t.draft,target:s.target,level:s.level,component:s.component||t.draft.component}:s;co(this,r,{isNew:t.isNew})}draftFromInfo(e){let{pt:t}=e,n=e.nrm||new L(0,1,0),s;if(Math.abs(n.y)>.6)s={shape:"box",center:{...t},size:{w:4,d:4,h:.3},rotDeg:0};else{let r=n.x,o=-n.z,a=Math.atan2(r,-o)*180/Math.PI;s={shape:"box",center:{...t,elev:t.elev-1.2},size:{w:4,d:.6,h:2.6},rotDeg:Math.round(a)}}return Nh({id:Ul(this.store.issues),level:e.levelId||this.levelAtElevation(t.elev),component:e.componentId||"",target:{anchor:t,zone:s},accuracy:"APPROXIMATE",dateReported:Dt()})}levelAtElevation(e){let t=this.model.levels[0].id;for(let n of this.model.levels)e>=n.elev-.05&&(t=n.id);return t}updateCompass(){let e=Math.round(this.viewer.headingDeg());if(e===this._hd)return;this._hd=e,Oe("#compassRose").style.transform=`rotate(${-e}deg)`;let t=["north","north-east","east","south-east","south","south-west","west","north-west"];Oe("#compassText").textContent="Looking "+t[Math.round(e/45)%8]}buildLegend(){let e=Oe("#legendBody"),t=(s,r,o)=>w("label.lg.lg-check",w("input",{type:"checkbox",id:o,onchange:r}),s);e.append(w("div.lg",w("span.lg-pointer"),"Red pointer = spot being discussed"),...Object.values(Mt).map(s=>w("div.lg",w("span.lg-pin",{style:{background:s.active?s.color:"#fff",borderColor:s.color}}),s.label)),w("div.lg",w("span.lg-hatch"),"Approximate / uncertain location"),w("div.lg",w("span.lg-sel"),"Selected building part"),t("Show all affected areas",s=>{this.markers.showAllZones=s.target.checked,this.scene.apply()}),t("Show neighbouring buildings",s=>this.scene.set({showNeighbours:s.target.checked})),t("Colour model by accuracy",s=>this.scene.set({accuracy:s.target.checked}),"accCheck")),Oe("#legendAcc").append(w("div.lg-h","Model accuracy"),...Object.values(Ht).map(s=>w("div.lg",w("span.lg-sw",{style:{background:s.color}}),s.label))),Oe("#legendToggle").onclick=()=>Oe("#legend").classList.toggle("collapsed"),window.innerHeight<850&&Oe("#legend").classList.add("collapsed")}screenshot(e){try{Ff(this.viewer,e||null,this.viewLabel(),this.pointer?.text),xt("Screenshot downloaded (check your Downloads folder)")}catch(t){console.error(t),xt("Screenshot failed: "+t.message,"error")}}async printSheet(e){let t=this.built.components.get(e.component);await Of(this.viewer,e,this.store,this.viewLabel(),t?.label)}async exportMine(){let e=this.author;if(!e){if(e=await kh("Your name or role (shown to people who load your file, e.g. \u201CProperty manager\u201D)",""),!e)return;localStorage.setItem("anola.author",e)}let t=await this.store.exportMine(e),n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});Gl(`Anola-issues-${e.replace(/[^\w-]+/g,"-")}-${Dt()}.json`,n),xt(`Exported ${t.issues.length} issues. Send this file to others, or keep it as your backup.`,"info",5e3)}_pickFile(e){let t=w("input",{type:"file",accept:".json,application/json"});t.onchange=async()=>{let n=t.files[0];if(n)try{await e(JSON.parse(await n.text()),n.name)}catch(s){console.error(s),xt(s.message,"error",6e3)}},t.click()}loadShared(){this._pickFile(async(e,t)=>{let{layer:n,replaced:s}=await this.store.importShared(e,t);this.reloadIssues(),xt(`${s?"Updated":"Added"} \u201C${n.name}\u201D \u2013 ${n.issues.length} issues (view only)`,"info",5e3)})}restoreBackup(){this._pickFile(async(e,t)=>{if(!await qn(`Replace ALL of \u201CMy issues\u201D on this computer with the ${e.issues?.length??0} issues in \u201C${t}\u201D?

Use this only for your own backup. To look at someone else\u2019s issues, use \u201CLoad someone\u2019s shared file\u201D instead.`,"Replace my issues"))return;let n=await this.store.restoreBackup(e);this.selectIssue(null),this.reloadIssues(),xt(`Restored ${n} issues`)})}async resetData(){await qn("Delete all of \u201CMy issues\u201D on this computer and start again with the 3 example issues? (Export first if you want to keep them. Shared layers are not affected.)","Start fresh")&&(await this.store.resetToSeed(),this.selectIssue(null),this.reloadIssues(),xt("Started fresh with the 3 example issues"))}showHelp(){Xn("How to use the issue map",w("div.help",w("h3","Show people where something is"),w("ul",w("li",w("b","Click anywhere on the building")," \u2013 a red pointer appears with a plain description of the spot (e.g. \u201CBasement (lower parking) \xB7 south-east corner\u201D)."),w("li",w("b","Go to\u2026 "),"box (top left of the 3D view): type a unit number (1206), a level (Basement, Main floor, 12), a place (pool, lobby, electrical, skylight, PH2) or an area (\u201Cbasement south-east\u201D, \u201Cupper parking north\u201D)."),w("li",w("b","View from N / E / S / W / Top")," (under the compass) shows a whole side of the building straight on."),w("li",w("b","\u25B6 Tour")," walks through the building in ten steps \u2013 useful for new council members.")),w("h3","Moving around"),w("ul",w("li",w("b","Rotate: "),"left-click and drag \xB7 ",w("b","Slide: "),"right-click and drag \xB7 ",w("b","Zoom: "),"mouse wheel"),w("li","Exterior / Roof / Lobby / Upper parking / Basement or the Level list (\u25B2\u25BC step one floor) open up a floor; \u201CFloors above\u201D makes upper floors see-through or hides them."),w("li",w("b","\u2302")," returns to the overview.")),w("h3","Recording issues"),w("ul",w("li","Point at the spot, then ",w("b","+ Record as issue"),". Give it a title, choose a status (Outstanding / In progress / Resolved) and save."),w("li","In an issue: add ",w("b","follow-up actions")," (who, by when) and tick them off; add notes and photos; ",w("b","\u2605 Save this view")," so it reopens in the same place next meeting."),w("li",w("b","\u2913 Screenshot")," and ",w("b","\u2399 Issue sheet")," make images / PDFs for council packages.")),w("h3","Layers and sharing"),w("ul",w("li",w("b","My issues")," are kept in this browser on this computer."),this.store.historical.issues.length?w("li",w("b","Historical record")," \u2013 issues compiled from earlier reports. Off unless ticked; view only."):null,w("li","To share: \u2630 \u2192 ",w("b","Export my issues")," and send the file. Others use \u2630 \u2192 ",w("b","Load someone\u2019s shared file")," \u2013 it appears as a separate view-only layer and never changes their own issues. Loading a newer file from the same person replaces the old layer."),w("li","Export regularly as a backup \u2013 clearing the browser\u2019s data erases local issues."))),{wide:!0})}showAbout(){let e={};for(let n of this.built.components.values())e[n.accuracy]=(e[n.accuracy]||0)+1;let t=this.model.meta;Xn("About this model",w("div.help",$l?w("div.warn-box",w("b","Unofficial prototype. "),zf.map(n=>w("p",n))):null,w("p.warn-box",t.disclaimer),w("h3","Where the geometry came from"),w("ul",(t.sources||[]).map(n=>w("li",n))),w("h3","Key assumptions"),w("ul",(t.assumptions||[]).map(n=>w("li",n))),w("h3","Model parts by accuracy"),w("ul",Object.entries(Ht).map(([n,s])=>w("li",w("span.acc-dot",{style:{background:s.color}}),` ${s.label}: ${e[n]||0} parts \u2013 ${s.help}`))),$l?null:w("p","Full details: docs/SOURCES_AND_ASSUMPTIONS.md and docs/UNCERTAINTIES.md in the application folder."),w("p.muted",`App version 0.3${$l?" (public edition \u2013 rough prototype)":""} \xB7 model ${t.modelVersion} \xB7 ${t.generated}`)),{wide:!0})}};window.addEventListener("DOMContentLoaded",()=>{if(!Hh){document.body.innerHTML='<p style="padding:2em">Could not load data/building-model.js</p>';return}new Gh().start().catch(i=>{console.error(i),xt("Startup error: "+i.message,"error",1e4)})})});jv();})();
