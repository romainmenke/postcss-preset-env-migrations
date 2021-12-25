/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hex2ciede": () => (/* binding */ Un),
/* harmony export */   "hex2contrast": () => (/* binding */ tt),
/* harmony export */   "hex2hsl": () => (/* binding */ Tn),
/* harmony export */   "hex2hsv": () => (/* binding */ Bn),
/* harmony export */   "hex2hwb": () => (/* binding */ Dn),
/* harmony export */   "hex2lab": () => (/* binding */ Fn),
/* harmony export */   "hex2lch": () => (/* binding */ Gn),
/* harmony export */   "hex2rgb": () => (/* binding */ _),
/* harmony export */   "hex2xyz": () => (/* binding */ Hn),
/* harmony export */   "hsl2ciede": () => (/* binding */ Vn),
/* harmony export */   "hsl2contrast": () => (/* binding */ rt),
/* harmony export */   "hsl2hex": () => (/* binding */ Jn),
/* harmony export */   "hsl2hsv": () => (/* binding */ D),
/* harmony export */   "hsl2hwb": () => (/* binding */ hn),
/* harmony export */   "hsl2lab": () => (/* binding */ mn),
/* harmony export */   "hsl2lch": () => (/* binding */ yn),
/* harmony export */   "hsl2rgb": () => (/* binding */ z),
/* harmony export */   "hsl2xyz": () => (/* binding */ kn),
/* harmony export */   "hsv2ciede": () => (/* binding */ Wn),
/* harmony export */   "hsv2contrast": () => (/* binding */ et),
/* harmony export */   "hsv2hex": () => (/* binding */ Kn),
/* harmony export */   "hsv2hsl": () => (/* binding */ F),
/* harmony export */   "hsv2hwb": () => (/* binding */ H),
/* harmony export */   "hsv2lab": () => (/* binding */ An),
/* harmony export */   "hsv2lch": () => (/* binding */ jn),
/* harmony export */   "hsv2rgb": () => (/* binding */ P),
/* harmony export */   "hsv2xyz": () => (/* binding */ Cn),
/* harmony export */   "hwb2ciede": () => (/* binding */ Xn),
/* harmony export */   "hwb2contrast": () => (/* binding */ ut),
/* harmony export */   "hwb2hex": () => (/* binding */ Nn),
/* harmony export */   "hwb2hsl": () => (/* binding */ gn),
/* harmony export */   "hwb2hsv": () => (/* binding */ G),
/* harmony export */   "hwb2lab": () => (/* binding */ vn),
/* harmony export */   "hwb2lch": () => (/* binding */ qn),
/* harmony export */   "hwb2rgb": () => (/* binding */ E),
/* harmony export */   "hwb2xyz": () => (/* binding */ xn),
/* harmony export */   "keyword2ciede": () => (/* binding */ Yn),
/* harmony export */   "keyword2contrast": () => (/* binding */ ot),
/* harmony export */   "keyword2hex": () => (/* binding */ lt),
/* harmony export */   "keyword2hsl": () => (/* binding */ st),
/* harmony export */   "keyword2hsv": () => (/* binding */ ft),
/* harmony export */   "keyword2hwb": () => (/* binding */ dt),
/* harmony export */   "keyword2lab": () => (/* binding */ gt),
/* harmony export */   "keyword2lch": () => (/* binding */ ht),
/* harmony export */   "keyword2rgb": () => (/* binding */ rn),
/* harmony export */   "keyword2xyz": () => (/* binding */ mt),
/* harmony export */   "lab2ciede": () => (/* binding */ un),
/* harmony export */   "lab2contrast": () => (/* binding */ it),
/* harmony export */   "lab2hex": () => (/* binding */ On),
/* harmony export */   "lab2hsl": () => (/* binding */ pn),
/* harmony export */   "lab2hsv": () => (/* binding */ $n),
/* harmony export */   "lab2hwb": () => (/* binding */ Mn),
/* harmony export */   "lab2lch": () => (/* binding */ N),
/* harmony export */   "lab2rgb": () => (/* binding */ sn),
/* harmony export */   "lab2xyz": () => (/* binding */ J),
/* harmony export */   "lch2ciede": () => (/* binding */ Zn),
/* harmony export */   "lch2contrast": () => (/* binding */ ct),
/* harmony export */   "lch2hex": () => (/* binding */ Qn),
/* harmony export */   "lch2hsl": () => (/* binding */ bn),
/* harmony export */   "lch2hsv": () => (/* binding */ zn),
/* harmony export */   "lch2hwb": () => (/* binding */ In),
/* harmony export */   "lch2lab": () => (/* binding */ O),
/* harmony export */   "lch2rgb": () => (/* binding */ dn),
/* harmony export */   "lch2xyz": () => (/* binding */ Pn),
/* harmony export */   "rgb2ciede": () => (/* binding */ _n),
/* harmony export */   "rgb2contrast": () => (/* binding */ Q),
/* harmony export */   "rgb2hex": () => (/* binding */ nn),
/* harmony export */   "rgb2hsl": () => (/* binding */ j),
/* harmony export */   "rgb2hsv": () => (/* binding */ L),
/* harmony export */   "rgb2hwb": () => (/* binding */ C),
/* harmony export */   "rgb2lab": () => (/* binding */ ln),
/* harmony export */   "rgb2lch": () => (/* binding */ fn),
/* harmony export */   "rgb2xyz": () => (/* binding */ T),
/* harmony export */   "xyz2ciede": () => (/* binding */ nt),
/* harmony export */   "xyz2contrast": () => (/* binding */ at),
/* harmony export */   "xyz2hex": () => (/* binding */ Rn),
/* harmony export */   "xyz2hsl": () => (/* binding */ wn),
/* harmony export */   "xyz2hsv": () => (/* binding */ En),
/* harmony export */   "xyz2hwb": () => (/* binding */ Sn),
/* harmony export */   "xyz2lab": () => (/* binding */ K),
/* harmony export */   "xyz2lch": () => (/* binding */ Ln),
/* harmony export */   "xyz2rgb": () => (/* binding */ B)
/* harmony export */ });
function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function t(n,t,r,o=0){const i=e(n,t,r),c=i-u(n,t,r);if(c){const e=i===n?(t-r)/c:i===t?(r-n)/c:(n-t)/c;return 60*(e+(i===n?e<0?6:0:i===t?2:4))}return o}function r(n,t,r){const e=r<0?r+360:r>360?r-360:r;return 6*e<360?n+(t-n)*e/60:2*e<360?t:3*e<720?n+(t-n)*(240-e)/60:n}function e(n,t,r){return v(n,t,r)}function u(n,t,r){return M(n,t,r)}function o(n,t){return t.map(t=>t.reduce((t,r,e)=>t+n[e]*i*(r*i)/i/i,0))}const i=1e8,c=96.42,a=100,l=82.49,s=(n,t)=>g(p(n,t)),f=n=>b(d(n)),d=n=>n*q/180,g=n=>180*n/q,h=n=>x(d(n)),m=Math.abs,p=Math.atan2,y=Math.cbrt,b=Math.cos,k=Math.exp,w=Math.floor,v=Math.max,M=Math.min,q=Math.PI,I=Math.pow,x=Math.sin,S=Math.sqrt,A=I(6,3)/I(29,3),$=I(29,3)/I(3,3);function j(n,r,o,i){const c=t(n,r,o,i),a=e(n,r,o),l=u(n,r,o),s=a-l,f=(a+l)/2;return[c,0===s?0:s/(100-m(2*f-100))*100,f]}function z(n,t,e){const u=e<=50?e*(t+100)/100:e+t-e*t/100,o=2*e-u,i=[r(o,u,n+120),r(o,u,n),r(o,u,n-120)];return[i[0],i[1],i[2]]}function C(n,r,o,i){return[t(n,r,o,i),u(n,r,o),100-e(n,r,o)]}function E(t,r,e,u){const o=n(z(t,100,50).map(n=>n*(100-r-e)/100+r),3);return[o[0],o[1],o[2]]}function L(n,r,o,i){const c=e(n,r,o),a=u(n,r,o);return[t(n,r,o,i),c===a?0:(c-a)/c*100,c]}function P(t,r,e){const u=w(t/60),o=e*(100-r)/100,i=e*(100-r*(t/60-u&1?t/60-u:1-t/60-u))/100,c=n(5===u?[e,o,i]:4===u?[i,o,e]:3===u?[o,i,e]:2===u?[o,e,i]:1===u?[i,e,o]:[e,i,o],3);return[c[0],c[1],c[2]]}function T(t,r,e){const u=n([t,r,e].map(n=>n>4.045?100*I((n+5.5)/105.5,2.4):n/12.92),3),i=n(o([u[0],u[1],u[2]],[[.4124564,.3575761,.1804375],[.2126729,.7151522,.072175],[.0193339,.119192,.9503041]]),3);return[i[0],i[1],i[2]]}function B(t,r,e){const u=n(o([t,r,e],[[3.2404542,-1.5371385,-.4985314],[-.969266,1.8760108,.041556],[.0556434,-.2040259,1.0572252]]),3),i=n([u[0],u[1],u[2]].map(n=>n>.31308?1.055*I(n/100,1/2.4)*100-5.5:12.92*n),3);return[i[0],i[1],i[2]]}function D(n,t,r){const e=t*(r<50?r:100-r)/100;return[n,0===e?0:2*e/(r+e)*100,r+e]}function F(n,t,r){const e=(200-t)*r/100;return[n,0===e||200===e?0:t*r/100/(e<=100?e:200-e)*100,5*e/10]}function G(n,t,r){return[n,100===r?0:100-t/(100-r)*100,100-r]}function H(n,t,r){return[n,(100-t)*r/100,100-r]}function J(t,r,e){const u=(t+16)/116,i=r/500+u,s=u-e/200,f=I(i,3)>A?I(i,3):(116*i-16)/$,d=t>$*A?I((t+16)/116,3):t/$,g=I(s,3)>A?I(s,3):(116*s-16)/$,h=n(o([f*c,d*a,g*l],[[.9555766,-.0230393,.0631636],[-.0282895,1.0099416,.0210077],[.0122982,-.020483,1.3299098]]),3);return[h[0],h[1],h[2]]}function K(t,r,e){const u=n(o([t,r,e],[[1.0478112,.0228866,-.050127],[.0295424,.9904844,-.0170491],[-.0092345,.0150436,.7521316]]),3),i=u[0],s=u[1],f=u[2],d=n([i/c,s/a,f/l].map(n=>n>A?y(n):($*n+16)/116),3),g=d[0],h=d[1];return[116*h-16,500*(g-h),200*(h-d[2])]}function N(n,t,r){const e=[S(I(t,2)+I(r,2)),g(p(r,t))];return[n,e[0],e[1]]}function O(n,t,r){return[n,t*f(r),t*h(r)]}function Q(n,t){return function(n,t){const r=v(n,t),e=M(n,t);return(r*i+.05*i)/(e*i+.05*i)}(R(...n),R(...t))}function R(n,t,r){return(U(n)*X+U(t)*Y+U(r)*Z)/i}const U=n=>n<=3.928?n/W:V(n),V=n=>I((n+5.5)/105.5,2.4),W=1292,X=.2126*i,Y=.7152*i,Z=.0722*i;function _(t){const r=n(t.match(tn)||[],9),e=r[1],u=r[2],o=r[3],i=r[4],c=r[5],a=r[6],l=r[7],s=r[8];if(void 0!==c||void 0!==e){return[void 0!==c?parseInt(c,16):parseInt(e+e,16),void 0!==a?parseInt(a,16):parseInt(u+u,16),void 0!==l?parseInt(l,16):parseInt(o+o,16),void 0!==s?parseInt(s,16):void 0!==i?parseInt(i+i,16):255].map(n=>100*n/255)}}function nn(n,t,r){return`#${((1<<24)+(Math.round(255*n/100)<<16)+(Math.round(255*t/100)<<8)+Math.round(255*r/100)).toString(16).slice(1)}`}const tn=/^#?(?:([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?|([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?)$/i;function rn(n){const t=en[String(n).toLowerCase()];return t?t.map(n=>100*n/255):null}const en={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],transparent:[0,0,0],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};function un([n,t,r],[e,u,o]){const c=S(I(t,2)+I(r,2)),a=S(I(u,2)+I(o,2)),l=e-n,d=(n+e)/2,g=I((c+a)/2,7),p=S(g/(g+I(25,7))),y=t+t/2*(1-p),b=u+u/2*(1-p),w=S(y*y+r*r),v=S(b*b+o*o),M=(w+v)/2,q=v-w,x=0===y&&0===r?0:s(r,y)%360,A=0===b&&0===o?0:s(o,b)%360;let $,j,z;0===w||0===v?($=0,j=0,z=x+A):($=m(x-A)<=180?A-x:A<=x?A-x+360:A-x-360,j=2*S(w*v)*h($/2),z=m(x-A)<=180?(x+A)/2:x+A<360?(x+A+360)/2:(x+A-360)/2);const C=1-.17*i*f(z-30)+.24*i*f(2*z)+.32*i*f(3*z+6)-.2*i*f(4*z-63)/i/i,E=(d-50)*(d-50),L=1+.015*i*E/S(20+E)/i,P=1+.045*i*M/i,T=1+.015*i*M*C/i,B=60*k(-(z-275)/25*((z-275)/25)),D=-2*p*h(B),F=l/(on*L),G=q/(cn*P),H=j/(an*T);return S(F*F+G*G+H*H+D*G*H)}const on=1,cn=1,an=1;function ln(t,r,e){const u=n(T(t,r,e),3),o=n(K(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function sn(t,r,e){const u=n(J(t,r,e),3),o=n(B(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function fn(t,r,e){const u=n(T(t,r,e),3),o=n(K(u[0],u[1],u[2]),3),i=n(N(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function dn(t,r,e){const u=n(O(t,r,e),3),o=n(J(u[0],u[1],u[2]),3),i=n(B(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function gn(t,r,e){const u=n(G(t,r,e),3),o=n(F(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function hn(t,r,e){const u=n(D(t,r,e),3),o=n(H(t,u[1],u[2]),3);return[t,o[1],o[2]]}function mn(t,r,e){const u=n(z(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function pn(t,r,e,u){const o=n(J(t,r,e),3),i=n(B(o[0],o[1],o[2]),3),c=n(j(i[0],i[1],i[2],u),3);return[c[0],c[1],c[2]]}function yn(t,r,e){const u=n(z(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3),c=n(N(i[0],i[1],i[2]),3);return[c[0],c[1],c[2]]}function bn(t,r,e,u){const o=n(O(t,r,e),3),i=n(J(o[0],o[1],o[2]),3),c=n(B(i[0],i[1],i[2]),3),a=n(j(c[0],c[1],c[2],u),3);return[a[0],a[1],a[2]]}function kn(t,r,e){const u=n(z(t,r,e),3),o=n(T(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function wn(t,r,e,u){const o=n(B(t,r,e),3),i=n(j(o[0],o[1],o[2],u),3);return[i[0],i[1],i[2]]}function vn(t,r,e){const u=n(E(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function Mn(t,r,e,u){const o=n(J(t,r,e),3),i=n(B(o[0],o[1],o[2]),3),c=n(C(i[0],i[1],i[2],u),3);return[c[0],c[1],c[2]]}function qn(t,r,e){const u=n(E(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3),c=n(N(i[0],i[1],i[2]),3);return[c[0],c[1],c[2]]}function In(t,r,e,u){const o=n(O(t,r,e),3),i=n(J(o[0],o[1],o[2]),3),c=n(B(i[0],i[1],i[2]),3),a=n(C(c[0],c[1],c[2],u),3);return[a[0],a[1],a[2]]}function xn(t,r,e){const u=n(E(t,r,e),3),o=n(T(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function Sn(t,r,e,u){const o=n(B(t,r,e),3),i=n(C(o[0],o[1],o[2],u),3);return[i[0],i[1],i[2]]}function An(t,r,e){const u=n(P(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3);return[i[0],i[1],i[2]]}function $n(t,r,e,u){const o=n(J(t,r,e),3),i=n(B(o[0],o[1],o[2]),3),c=n(L(i[0],i[1],i[2],u),3);return[c[0],c[1],c[2]]}function jn(t,r,e){const u=n(P(t,r,e),3),o=n(T(u[0],u[1],u[2]),3),i=n(K(o[0],o[1],o[2]),3),c=n(N(i[0],i[1],i[2]),3);return[c[0],c[1],c[2]]}function zn(t,r,e,u){const o=n(O(t,r,e),3),i=n(J(o[0],o[1],o[2]),3),c=n(B(i[0],i[1],i[2]),3),a=n(L(c[0],c[1],c[2],u),3);return[a[0],a[1],a[2]]}function Cn(t,r,e){const u=n(P(t,r,e),3),o=n(T(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function En(t,r,e,u){const o=n(B(t,r,e),3),i=n(L(o[0],o[1],o[2],u),3);return[i[0],i[1],i[2]]}function Ln(t,r,e){const u=n(K(t,r,e),3),o=n(N(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function Pn(t,r,e){const u=n(O(t,r,e),3),o=n(J(u[0],u[1],u[2]),3);return[o[0],o[1],o[2]]}function Tn(n){return j(..._(n))}function Bn(n){return L(..._(n))}function Dn(n){return C(..._(n))}function Fn(n){return ln(..._(n))}function Gn(n){return fn(..._(n))}function Hn(n){return T(..._(n))}function Jn(n,t,r){return nn(...z(n,t,r))}function Kn(n,t,r){return nn(...z(n,t,r))}function Nn(n,t,r){return nn(...E(n,t,r))}function On(n,t,r){return nn(...sn(n,t,r))}function Qn(n,t,r){return nn(...dn(n,t,r))}function Rn(n,t,r){return nn(...B(n,t,r))}function Un(n,t){return un(Fn(n),Fn(t))}function Vn(n,t){return un(mn(...n),mn(...t))}function Wn(n,t){return un(An(...n),An(...t))}function Xn(n,t){return un(vn(...n),vn(...t))}function Yn(n,t){return un(gt(n),gt(t))}function Zn(n,t){return un(O(...n),O(...t))}function _n(n,t){return un(ln(...n),ln(...t))}function nt(n,t){return un(K(...n),K(...t))}function tt(n,t){return Q(_(n),_(t))}function rt(n,t){return Q(z(...n),z(...t))}function et(n,t){return Q(P(...n),P(...t))}function ut(n,t){return Q(E(...n),E(...t))}function ot(n,t){return Q(rn(n),rn(t))}function it(n,t){return Q(sn(...n),sn(...t))}function ct(n,t){return Q(dn(...n),dn(...t))}function at(n,t){return Q(B(...n),B(...t))}function lt(n){return nn(...rn(n))}function st(n){return j(...rn(n))}function ft(n){return L(...rn(n))}function dt(n){return C(...rn(n))}function gt(n){return ln(...rn(n))}function ht(n){return fn(...rn(n))}function mt(n){return T(...rn(n))}
//# sourceMappingURL=index.mjs.map


/***/ }),
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgb2hsl": () => (/* reexport safe */ _lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.rgb2hsl),
/* harmony export */   "rgb2hwb": () => (/* reexport safe */ _lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.rgb2hwb),
/* harmony export */   "rgb2lab": () => (/* binding */ rgb2lab),
/* harmony export */   "rgb2lch": () => (/* binding */ rgb2lch),
/* harmony export */   "rgb2hsv": () => (/* reexport safe */ _lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.rgb2hsv),
/* harmony export */   "rgb2xyz": () => (/* reexport safe */ _lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz),
/* harmony export */   "hsl2rgb": () => (/* reexport safe */ _lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.hsl2rgb),
/* harmony export */   "hsl2hwb": () => (/* binding */ hsl2hwb),
/* harmony export */   "hsl2lab": () => (/* binding */ hsl2lab),
/* harmony export */   "hsl2lch": () => (/* binding */ hsl2lch),
/* harmony export */   "hsl2hsv": () => (/* reexport safe */ _lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__.hsl2hsv),
/* harmony export */   "hsl2xyz": () => (/* binding */ hsl2xyz),
/* harmony export */   "hwb2rgb": () => (/* reexport safe */ _lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.hwb2rgb),
/* harmony export */   "hwb2hsl": () => (/* binding */ hwb2hsl),
/* harmony export */   "hwb2lab": () => (/* binding */ hwb2lab),
/* harmony export */   "hwb2lch": () => (/* binding */ hwb2lch),
/* harmony export */   "hwb2hsv": () => (/* reexport safe */ _lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__.hwb2hsv),
/* harmony export */   "hwb2xyz": () => (/* binding */ hwb2xyz),
/* harmony export */   "lab2rgb": () => (/* binding */ lab2rgb),
/* harmony export */   "lab2hsl": () => (/* binding */ lab2hsl),
/* harmony export */   "lab2hwb": () => (/* binding */ lab2hwb),
/* harmony export */   "lab2lch": () => (/* reexport safe */ _lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch),
/* harmony export */   "lab2hsv": () => (/* binding */ lab2hsv),
/* harmony export */   "lab2xyz": () => (/* reexport safe */ _lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz),
/* harmony export */   "lch2rgb": () => (/* binding */ lch2rgb),
/* harmony export */   "lch2hsl": () => (/* binding */ lch2hsl),
/* harmony export */   "lch2hwb": () => (/* binding */ lch2hwb),
/* harmony export */   "lch2lab": () => (/* reexport safe */ _lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab),
/* harmony export */   "lch2hsv": () => (/* binding */ lch2hsv),
/* harmony export */   "lch2xyz": () => (/* binding */ lch2xyz),
/* harmony export */   "hsv2rgb": () => (/* reexport safe */ _lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.hsv2rgb),
/* harmony export */   "hsv2hsl": () => (/* reexport safe */ _lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__.hsv2hsl),
/* harmony export */   "hsv2hwb": () => (/* reexport safe */ _lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__.hsv2hwb),
/* harmony export */   "hsv2lab": () => (/* binding */ hsv2lab),
/* harmony export */   "hsv2lch": () => (/* binding */ hsv2lch),
/* harmony export */   "hsv2xyz": () => (/* binding */ hsv2xyz),
/* harmony export */   "xyz2rgb": () => (/* reexport safe */ _lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb),
/* harmony export */   "xyz2hsl": () => (/* binding */ xyz2hsl),
/* harmony export */   "xyz2hwb": () => (/* binding */ xyz2hwb),
/* harmony export */   "xyz2lab": () => (/* reexport safe */ _lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab),
/* harmony export */   "xyz2lch": () => (/* binding */ xyz2lch),
/* harmony export */   "xyz2hsv": () => (/* binding */ xyz2hsv),
/* harmony export */   "rgb2hue": () => (/* reexport safe */ _lib_util__WEBPACK_IMPORTED_MODULE_8__.rgb2hue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);
/* harmony import */ var _lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66);
/* harmony import */ var _lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);










/* Convert between RGB and Lab
/* ========================================================================== */

function rgb2lab(rgbR, rgbG, rgbB) {
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);

	return [ labL, labA, labB ];
}

function lab2rgb(labL, labA, labB) {
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);

	return [ rgbR, rgbG, rgbB ];
}

/* Convert between RGB and LCH
/* ========================================================================== */

function rgb2lch(rgbR, rgbG, rgbB) {
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);
	const [ lchL, lchC, lchH ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch)(labL, labA, labB);

	return [ lchL, lchC, lchH ];
}

function lch2rgb(lchL, lchC, lchH) {
	const [ labL, labA, labB ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab)(lchL, lchC, lchH);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);

	return [ rgbR, rgbG, rgbB ];
}

/* Convert between HSL and HWB
/* ========================================================================== */

function hwb2hsl(hwbH, hwbW, hwbB) {
	const [ hsvH, hsvS, hsvV ] = (0,_lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__.hwb2hsv)(hwbH, hwbW, hwbB);
	const [ hslH, hslS, hslL ] = (0,_lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__.hsv2hsl)(hsvH, hsvS, hsvV);

	return [ hslH, hslS, hslL ];
}

function hsl2hwb(hslH, hslS, hslL) {
	const [ , hsvS, hsvV ] = (0,_lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__.hsl2hsv)(hslH, hslS, hslL);
	const [ , hwbW, hwbB ] = (0,_lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__.hsv2hwb)(hslH, hsvS, hsvV);

	return [ hslH, hwbW, hwbB ];
}

/* Convert between HSL and Lab
/* ========================================================================== */

function hsl2lab(hslH, hslS, hslL) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.hsl2rgb)(hslH, hslS, hslL);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);

	return [ labL, labA, labB ];
}

function lab2hsl(labL, labA, labB, fallbackhue) {
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hslH, hslS, hslL ] = (0,_lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.rgb2hsl)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hslH, hslS, hslL ];
}

/* Convert between HSL and LCH
/* ========================================================================== */

function hsl2lch(hslH, hslS, hslL) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.hsl2rgb)(hslH, hslS, hslL);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);
	const [ lchL, lchC, lchH ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch)(labL, labA, labB);

	return [ lchL, lchC, lchH ];
}

function lch2hsl(lchL, lchC, lchH, fallbackhue) {
	const [ labL, labA, labB ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab)(lchL, lchC, lchH);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hslH, hslS, hslL ] = (0,_lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.rgb2hsl)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hslH, hslS, hslL ];
}

/* Convert between HSL and XYZ
/* ========================================================================== */

function hsl2xyz(hslH, hslS, hslL) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.hsl2rgb)(hslH, hslS, hslL);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);

	return [ xyzX, xyzY, xyzZ ];
}

function xyz2hsl(xyzX, xyzY, xyzZ, fallbackhue) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hslH, hslS, hslL ] = (0,_lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.rgb2hsl)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hslH, hslS, hslL ];
}

/* Convert between HWB and Lab
/* ========================================================================== */

function hwb2lab(hwbH, hwbW, hwbB) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.hwb2rgb)(hwbH, hwbW, hwbB);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);

	return [ labL, labA, labB ];
}

function lab2hwb(labL, labA, labB, fallbackhue) {
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hwbH, hwbW, hwbB ] = (0,_lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.rgb2hwb)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hwbH, hwbW, hwbB ];
}

/* Convert between HWB and LCH
/* ========================================================================== */

function hwb2lch(hwbH, hwbW, hwbB) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.hwb2rgb)(hwbH, hwbW, hwbB);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);
	const [ lchL, lchC, lchH ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch)(labL, labA, labB);

	return [ lchL, lchC, lchH ];
}

function lch2hwb(lchL, lchC, lchH, fallbackhue) {
	const [ labL, labA, labB ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab)(lchL, lchC, lchH);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hwbH, hwbW, hwbB ] = (0,_lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.rgb2hwb)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hwbH, hwbW, hwbB ];
}

/* Convert between HWB and XYZ
/* ========================================================================== */

function hwb2xyz(hwbH, hwbW, hwbB) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.hwb2rgb)(hwbH, hwbW, hwbB);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);

	return [ xyzX, xyzY, xyzZ ];
}

function xyz2hwb(xyzX, xyzY, xyzZ, fallbackhue) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hwbH, hwbW, hwbB ] = (0,_lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.rgb2hwb)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hwbH, hwbW, hwbB ];
}

/* Convert between HSV and Lab
/* ========================================================================== */

function hsv2lab(hsvH, hsvS, hsvV) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.hsv2rgb)(hsvH, hsvS, hsvV);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);

	return [ labL, labA, labB ];
}

function lab2hsv(labL, labA, labB, fallbackhue) {
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hsvH, hsvS, hsvV ] = (0,_lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.rgb2hsv)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hsvH, hsvS, hsvV ];
}

/* Convert between HSV and LCH
/* ========================================================================== */

function hsv2lch(hsvH, hsvS, hsvV) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.hsv2rgb)(hsvH, hsvS, hsvV);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);
	const [ lchL, lchC, lchH ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch)(labL, labA, labB);

	return [ lchL, lchC, lchH ];
}

function lch2hsv(lchL, lchC, lchH, fallbackhue) {
	const [ labL, labA, labB ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab)(lchL, lchC, lchH);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hsvH, hsvS, hsvV ] = (0,_lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.rgb2hsv)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hsvH, hsvS, hsvV ];
}

/* Convert between HSV and XYZ
/* ========================================================================== */

function hsv2xyz(hsvH, hsvS, hsvV) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.hsv2rgb)(hsvH, hsvS, hsvV);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz)(rgbR, rgbG, rgbB);

	return [ xyzX, xyzY, xyzZ ];
}

function xyz2hsv(xyzX, xyzY, xyzZ, fallbackhue) {
	const [ rgbR, rgbG, rgbB ] = (0,_lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb)(xyzX, xyzY, xyzZ);
	const [ hsvH, hsvS, hsvV ] = (0,_lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.rgb2hsv)(rgbR, rgbG, rgbB, fallbackhue);

	return [ hsvH, hsvS, hsvV ];
}

/* Convert between XYZ and LCH
/* ========================================================================== */

function xyz2lch(xyzX, xyzY, xyzZ) {
	const [ labL, labA, labB ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab)(xyzX, xyzY, xyzZ);
	const [ lchL, lchC, lchH ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch)(labL, labA, labB);

	return [ lchL, lchC, lchH ];
}

function lch2xyz(lchL, lchC, lchH) {
	const [ labL, labA, labB ] = (0,_lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab)(lchL, lchC, lchH);
	const [ xyzX, xyzY, xyzZ ] = (0,_lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz)(labL, labA, labB);

	return [ xyzX, xyzY, xyzZ ];
}

/* All Conversions
/* ========================================================================== */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	rgb2hsl: _lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.rgb2hsl,
	rgb2hwb: _lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.rgb2hwb,
	rgb2lab,
	rgb2lch,
	rgb2hsv: _lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.rgb2hsv,
	rgb2xyz: _lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.rgb2xyz,

	hsl2rgb: _lib_rgb_hsl__WEBPACK_IMPORTED_MODULE_0__.hsl2rgb,
	hsl2hwb,
	hsl2lab,
	hsl2lch,
	hsl2hsv: _lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__.hsl2hsv,
	hsl2xyz,

	hwb2rgb: _lib_rgb_hwb__WEBPACK_IMPORTED_MODULE_1__.hwb2rgb,
	hwb2hsl,
	hwb2lab,
	hwb2lch,
	hwb2hsv: _lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__.hwb2hsv,
	hwb2xyz,

	lab2rgb,
	lab2hsl,
	lab2hwb,
	lab2lch: _lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lab2lch,
	lab2hsv,
	lab2xyz: _lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.lab2xyz,

	lch2rgb,
	lch2hsl,
	lch2hwb,
	lch2lab: _lib_lab_lch__WEBPACK_IMPORTED_MODULE_7__.lch2lab,
	lch2hsv,
	lch2xyz,

	hsv2rgb: _lib_rgb_hsv__WEBPACK_IMPORTED_MODULE_2__.hsv2rgb,
	hsv2hsl: _lib_hsl_hsv__WEBPACK_IMPORTED_MODULE_4__.hsv2hsl,
	hsv2hwb: _lib_hwb_hsv__WEBPACK_IMPORTED_MODULE_5__.hsv2hwb,
	hsv2lab,
	hsv2lch,
	hsv2xyz,

	xyz2rgb: _lib_rgb_xyz__WEBPACK_IMPORTED_MODULE_3__.xyz2rgb,
	xyz2hsl,
	xyz2hwb,
	xyz2lab: _lib_lab_xyz__WEBPACK_IMPORTED_MODULE_6__.xyz2lab,
	xyz2lch,
	xyz2hsv,

	rgb2hue: _lib_util__WEBPACK_IMPORTED_MODULE_8__.rgb2hue
});


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgb2hsl": () => (/* binding */ rgb2hsl),
/* harmony export */   "hsl2rgb": () => (/* binding */ hsl2rgb)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/* Convert between RGB and HSL
/* ========================================================================== */

function rgb2hsl(rgbR, rgbG, rgbB, fallbackhue) {
	const hslH = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2hue)(rgbR, rgbG, rgbB, fallbackhue);
	const hslV = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2value)(rgbR, rgbG, rgbB);
	const hslW = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2whiteness)(rgbR, rgbG, rgbB);

	// calculate value/whiteness delta
	const hslD = hslV - hslW;

	// calculate lightness
	const hslL = (hslV + hslW) / 2;

	// calculate saturation
	const hslS = hslD === 0 ? 0 : hslD / (100 - Math.abs(2 * hslL - 100)) * 100;

	return [ hslH, hslS, hslL ];
}

function hsl2rgb(hslH, hslS, hslL) {
	// calcuate t2
	const t2 = hslL <= 50 ? hslL * (hslS + 100) / 100 : hslL + hslS - hslL * hslS / 100;

	// calcuate t1
	const t1 = hslL * 2 - t2;

	// calculate rgb
	const [ rgbR, rgbG, rgbB ] = [
		(0,_util__WEBPACK_IMPORTED_MODULE_0__.hue2rgb)(t1, t2, hslH + 120),
		(0,_util__WEBPACK_IMPORTED_MODULE_0__.hue2rgb)(t1, t2, hslH),
		(0,_util__WEBPACK_IMPORTED_MODULE_0__.hue2rgb)(t1, t2, hslH - 120)
	];

	return [ rgbR, rgbG, rgbB ];
}

/*

References
----------

- https://www.w3.org/TR/css-color-3/#hsl-color
- https://www.w3.org/TR/css-color-4/#hsl-to-rgb
- https://www.rapidtables.com/convert/color/rgb-to-hsl.html
- https://www.rapidtables.com/convert/color/hsl-to-rgb.html

/* ========================================================================== */


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgb2hue": () => (/* binding */ rgb2hue),
/* harmony export */   "hue2rgb": () => (/* binding */ hue2rgb),
/* harmony export */   "rgb2value": () => (/* binding */ rgb2value),
/* harmony export */   "rgb2whiteness": () => (/* binding */ rgb2whiteness),
/* harmony export */   "matrix": () => (/* binding */ matrix),
/* harmony export */   "wd50X": () => (/* binding */ wd50X),
/* harmony export */   "wd50Y": () => (/* binding */ wd50Y),
/* harmony export */   "wd50Z": () => (/* binding */ wd50Z),
/* harmony export */   "epsilon": () => (/* binding */ epsilon),
/* harmony export */   "kappa": () => (/* binding */ kappa)
/* harmony export */ });
/* Convert between RGB and Hue
/* ========================================================================== */

function rgb2hue(rgbR, rgbG, rgbB, fallbackhue = 0) {
	const value     = rgb2value(rgbR, rgbG, rgbB);
	const whiteness = rgb2whiteness(rgbR, rgbG, rgbB);
	const delta     = value - whiteness;

	if (delta) {
		// calculate segment
		const segment = value === rgbR
			? (rgbG - rgbB) / delta
		: value === rgbG
			? (rgbB - rgbR) / delta
		: (rgbR - rgbG) / delta;

		// calculate shift
		const shift = value === rgbR
			? segment < 0
				? 360 / 60
				: 0 / 60
		: value === rgbG
			? 120 / 60
		: 240 / 60;

		// calculate hue
		const hue = (segment + shift) * 60;

		return hue;
	} else {
		// otherwise return the fallback hue
		return fallbackhue;
	}
}

function hue2rgb(t1, t2, hue) {
	// calculate the ranged hue
	const rhue = hue < 0 ? hue + 360 : hue > 360 ? hue - 360 : hue;

	// calculate the rgb value
	const rgb = rhue * 6 < 360
		? t1 + (t2 - t1) * rhue / 60
	: rhue * 2 < 360
		? t2
	: rhue * 3 < 720
		? t1 + (t2 - t1) * (240 - rhue) / 60
	: t1;

	return rgb;
}

/* RGB tooling
/* ========================================================================== */

function rgb2value(rgbR, rgbG, rgbB) {
	const value = Math.max(rgbR, rgbG, rgbB);

	return value;
}

function rgb2whiteness(rgbR, rgbG, rgbB) {
	const whiteness = Math.min(rgbR, rgbG, rgbB);

	return whiteness;
}

/* Math matrix
/* ========================================================================== */

function matrix(params, mats) {
	return mats.map(mat => mat.reduce((acc, value, index) => acc + params[index] * value, 0));
}

/* D50 reference white
/* ========================================================================== */

const [ wd50X, wd50Y, wd50Z ] = [ 96.42, 100, 82.49 ];

/* Epsilon
/* ========================================================================== */

const epsilon = Math.pow(6, 3) / Math.pow(29, 3);

/* Kappa
/* ========================================================================== */

const kappa = Math.pow(29, 3) / Math.pow(3, 3);


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let CssSyntaxError = __webpack_require__(6)
let Declaration = __webpack_require__(11)
let LazyResult = __webpack_require__(16)
let Container = __webpack_require__(35)
let Processor = __webpack_require__(47)
let stringify = __webpack_require__(15)
let fromJSON = __webpack_require__(49)
let Document = __webpack_require__(37)
let Warning = __webpack_require__(40)
let Comment = __webpack_require__(36)
let AtRule = __webpack_require__(43)
let Result = __webpack_require__(39)
let Input = __webpack_require__(31)
let parse = __webpack_require__(41)
let list = __webpack_require__(46)
let Rule = __webpack_require__(45)
let Root = __webpack_require__(44)
let Node = __webpack_require__(12)

function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0]
  }
  return new Processor(plugins)
}

postcss.plugin = function plugin(name, initializer) {
  // eslint-disable-next-line no-console
  if (console && console.warn) {
    // eslint-disable-next-line no-console
    console.warn(
      name +
        ': postcss.plugin was deprecated. Migration guide:\n' +
        'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
    )
    if (process.env.LANG && process.env.LANG.startsWith('cn')) {
      /* c8 ignore next 7 */
      // eslint-disable-next-line no-console
      console.warn(
        name +
          ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
          'https://www.w3ctech.com/topic/2226'
      )
    }
  }
  function creator(...args) {
    let transformer = initializer(...args)
    transformer.postcssPlugin = name
    transformer.postcssVersion = new Processor().version
    return transformer
  }

  let cache
  Object.defineProperty(creator, 'postcss', {
    get() {
      if (!cache) cache = creator()
      return cache
    }
  })

  creator.process = function (css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts)
  }

  return creator
}

postcss.stringify = stringify
postcss.parse = parse
postcss.fromJSON = fromJSON
postcss.list = list

postcss.comment = defaults => new Comment(defaults)
postcss.atRule = defaults => new AtRule(defaults)
postcss.decl = defaults => new Declaration(defaults)
postcss.rule = defaults => new Rule(defaults)
postcss.root = defaults => new Root(defaults)
postcss.document = defaults => new Document(defaults)

postcss.CssSyntaxError = CssSyntaxError
postcss.Declaration = Declaration
postcss.Container = Container
postcss.Processor = Processor
postcss.Document = Document
postcss.Comment = Comment
postcss.Warning = Warning
postcss.AtRule = AtRule
postcss.Result = Result
postcss.Input = Input
postcss.Rule = Rule
postcss.Root = Root
postcss.Node = Node

LazyResult.registerPostcss(postcss)

module.exports = postcss
postcss.default = postcss


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let pico = __webpack_require__(7)

let terminalHighlight = __webpack_require__(9)

class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin) {
    super(message)
    this.name = 'CssSyntaxError'
    this.reason = message

    if (file) {
      this.file = file
    }
    if (source) {
      this.source = source
    }
    if (plugin) {
      this.plugin = plugin
    }
    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      if (typeof line === 'number') {
        this.line = line
        this.column = column
      } else {
        this.line = line.line
        this.column = line.column
        this.endLine = column.line
        this.endColumn = column.column
      }
    }

    this.setMessage()

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError)
    }
  }

  setMessage() {
    this.message = this.plugin ? this.plugin + ': ' : ''
    this.message += this.file ? this.file : '<css input>'
    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column
    }
    this.message += ': ' + this.reason
  }

  showSourceCode(color) {
    if (!this.source) return ''

    let css = this.source
    if (color == null) color = pico.isColorSupported
    if (terminalHighlight) {
      if (color) css = terminalHighlight(css)
    }

    let lines = css.split(/\r?\n/)
    let start = Math.max(this.line - 3, 0)
    let end = Math.min(this.line + 2, lines.length)

    let maxWidth = String(end).length

    let mark, aside
    if (color) {
      let { bold, red, gray } = pico.createColors(true)
      mark = text => bold(red(text))
      aside = text => gray(text)
    } else {
      mark = aside = str => str
    }

    return lines
      .slice(start, end)
      .map((line, index) => {
        let number = start + 1 + index
        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | '
        if (number === this.line) {
          let spacing =
            aside(gutter.replace(/\d/g, ' ')) +
            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ')
          return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^')
        }
        return ' ' + aside(gutter) + line
      })
      .join('\n')
  }

  toString() {
    let code = this.showSourceCode()
    if (code) {
      code = '\n\n' + code + '\n'
    }
    return this.name + ': ' + this.message + code
  }
}

module.exports = CssSyntaxError
CssSyntaxError.default = CssSyntaxError


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let tty = __webpack_require__(8)

let isColorSupported =
	!("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
	("FORCE_COLOR" in process.env ||
		process.argv.includes("--color") ||
		process.platform === "win32" ||
		(tty.isatty(1) && process.env.TERM !== "dumb") ||
		"CI" in process.env)

let formatter =
	(open, close, replace = open) =>
	input => {
		let string = "" + input
		let index = string.indexOf(close, open.length)
		return ~index
			? open + replaceClose(string, close, replace, index) + close
			: open + string + close
	}

let replaceClose = (string, close, replace, index) => {
	let start = string.substring(0, index) + replace
	let end = string.substring(index + close.length)
	let nextIndex = end.indexOf(close)
	return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end
}

let createColors = (enabled = isColorSupported) => ({
	isColorSupported: enabled,
	reset: enabled ? s => `\x1b[0m${s}\x1b[0m` : String,
	bold: enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String,
	dim: enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String,
	italic: enabled ? formatter("\x1b[3m", "\x1b[23m") : String,
	underline: enabled ? formatter("\x1b[4m", "\x1b[24m") : String,
	inverse: enabled ? formatter("\x1b[7m", "\x1b[27m") : String,
	hidden: enabled ? formatter("\x1b[8m", "\x1b[28m") : String,
	strikethrough: enabled ? formatter("\x1b[9m", "\x1b[29m") : String,
	black: enabled ? formatter("\x1b[30m", "\x1b[39m") : String,
	red: enabled ? formatter("\x1b[31m", "\x1b[39m") : String,
	green: enabled ? formatter("\x1b[32m", "\x1b[39m") : String,
	yellow: enabled ? formatter("\x1b[33m", "\x1b[39m") : String,
	blue: enabled ? formatter("\x1b[34m", "\x1b[39m") : String,
	magenta: enabled ? formatter("\x1b[35m", "\x1b[39m") : String,
	cyan: enabled ? formatter("\x1b[36m", "\x1b[39m") : String,
	white: enabled ? formatter("\x1b[37m", "\x1b[39m") : String,
	gray: enabled ? formatter("\x1b[90m", "\x1b[39m") : String,
	bgBlack: enabled ? formatter("\x1b[40m", "\x1b[49m") : String,
	bgRed: enabled ? formatter("\x1b[41m", "\x1b[49m") : String,
	bgGreen: enabled ? formatter("\x1b[42m", "\x1b[49m") : String,
	bgYellow: enabled ? formatter("\x1b[43m", "\x1b[49m") : String,
	bgBlue: enabled ? formatter("\x1b[44m", "\x1b[49m") : String,
	bgMagenta: enabled ? formatter("\x1b[45m", "\x1b[49m") : String,
	bgCyan: enabled ? formatter("\x1b[46m", "\x1b[49m") : String,
	bgWhite: enabled ? formatter("\x1b[47m", "\x1b[49m") : String,
})

module.exports = createColors()
module.exports.createColors = createColors


/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let pico = __webpack_require__(7)

let tokenizer = __webpack_require__(10)

let Input

function registerInput(dependant) {
  Input = dependant
}

const HIGHLIGHT_THEME = {
  'brackets': pico.cyan,
  'at-word': pico.cyan,
  'comment': pico.gray,
  'string': pico.green,
  'class': pico.yellow,
  'hash': pico.magenta,
  'call': pico.cyan,
  '(': pico.cyan,
  ')': pico.cyan,
  '{': pico.yellow,
  '}': pico.yellow,
  '[': pico.yellow,
  ']': pico.yellow,
  ':': pico.yellow,
  ';': pico.yellow
}

function getTokenType([type, value], processor) {
  if (type === 'word') {
    if (value[0] === '.') {
      return 'class'
    }
    if (value[0] === '#') {
      return 'hash'
    }
  }

  if (!processor.endOfFile()) {
    let next = processor.nextToken()
    processor.back(next)
    if (next[0] === 'brackets' || next[0] === '(') return 'call'
  }

  return type
}

function terminalHighlight(css) {
  let processor = tokenizer(new Input(css), { ignoreErrors: true })
  let result = ''
  while (!processor.endOfFile()) {
    let token = processor.nextToken()
    let color = HIGHLIGHT_THEME[getTokenType(token, processor)]
    if (color) {
      result += token[1]
        .split(/\r?\n/)
        .map(i => color(i))
        .join('\n')
    } else {
      result += token[1]
    }
  }
  return result
}

terminalHighlight.registerInput = registerInput

module.exports = terminalHighlight


/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


const SINGLE_QUOTE = "'".charCodeAt(0)
const DOUBLE_QUOTE = '"'.charCodeAt(0)
const BACKSLASH = '\\'.charCodeAt(0)
const SLASH = '/'.charCodeAt(0)
const NEWLINE = '\n'.charCodeAt(0)
const SPACE = ' '.charCodeAt(0)
const FEED = '\f'.charCodeAt(0)
const TAB = '\t'.charCodeAt(0)
const CR = '\r'.charCodeAt(0)
const OPEN_SQUARE = '['.charCodeAt(0)
const CLOSE_SQUARE = ']'.charCodeAt(0)
const OPEN_PARENTHESES = '('.charCodeAt(0)
const CLOSE_PARENTHESES = ')'.charCodeAt(0)
const OPEN_CURLY = '{'.charCodeAt(0)
const CLOSE_CURLY = '}'.charCodeAt(0)
const SEMICOLON = ';'.charCodeAt(0)
const ASTERISK = '*'.charCodeAt(0)
const COLON = ':'.charCodeAt(0)
const AT = '@'.charCodeAt(0)

const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
const RE_BAD_BRACKET = /.[\n"'(/\\]/
const RE_HEX_ESCAPE = /[\da-f]/i

module.exports = function tokenizer(input, options = {}) {
  let css = input.css.valueOf()
  let ignore = options.ignoreErrors

  let code, next, quote, content, escape
  let escaped, escapePos, prev, n, currentToken

  let length = css.length
  let pos = 0
  let buffer = []
  let returned = []

  function position() {
    return pos
  }

  function unclosed(what) {
    throw input.error('Unclosed ' + what, pos)
  }

  function endOfFile() {
    return returned.length === 0 && pos >= length
  }

  function nextToken(opts) {
    if (returned.length) return returned.pop()
    if (pos >= length) return

    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false

    code = css.charCodeAt(pos)

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos
        do {
          next += 1
          code = css.charCodeAt(next)
        } while (
          code === SPACE ||
          code === NEWLINE ||
          code === TAB ||
          code === CR ||
          code === FEED
        )

        currentToken = ['space', css.slice(pos, next)]
        pos = next - 1
        break
      }

      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code)
        currentToken = [controlChar, controlChar, pos]
        break
      }

      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : ''
        n = css.charCodeAt(pos + 1)
        if (
          prev === 'url' &&
          n !== SINGLE_QUOTE &&
          n !== DOUBLE_QUOTE &&
          n !== SPACE &&
          n !== NEWLINE &&
          n !== TAB &&
          n !== FEED &&
          n !== CR
        ) {
          next = pos
          do {
            escaped = false
            next = css.indexOf(')', next + 1)
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos
                break
              } else {
                unclosed('bracket')
              }
            }
            escapePos = next
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1
              escaped = !escaped
            }
          } while (escaped)

          currentToken = ['brackets', css.slice(pos, next + 1), pos, next]

          pos = next
        } else {
          next = css.indexOf(')', pos + 1)
          content = css.slice(pos, next + 1)

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ['(', '(', pos]
          } else {
            currentToken = ['brackets', content, pos, next]
            pos = next
          }
        }

        break
      }

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"'
        next = pos
        do {
          escaped = false
          next = css.indexOf(quote, next + 1)
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1
              break
            } else {
              unclosed('string')
            }
          }
          escapePos = next
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1
            escaped = !escaped
          }
        } while (escaped)

        currentToken = ['string', css.slice(pos, next + 1), pos, next]
        pos = next
        break
      }

      case AT: {
        RE_AT_END.lastIndex = pos + 1
        RE_AT_END.test(css)
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1
        } else {
          next = RE_AT_END.lastIndex - 2
        }

        currentToken = ['at-word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      case BACKSLASH: {
        next = pos
        escape = true
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1
          escape = !escape
        }
        code = css.charCodeAt(next + 1)
        if (
          escape &&
          code !== SLASH &&
          code !== SPACE &&
          code !== NEWLINE &&
          code !== TAB &&
          code !== CR &&
          code !== FEED
        ) {
          next += 1
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1
            }
          }
        }

        currentToken = ['word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length
            } else {
              unclosed('comment')
            }
          }

          currentToken = ['comment', css.slice(pos, next + 1), pos, next]
          pos = next
        } else {
          RE_WORD_END.lastIndex = pos + 1
          RE_WORD_END.test(css)
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1
          } else {
            next = RE_WORD_END.lastIndex - 2
          }

          currentToken = ['word', css.slice(pos, next + 1), pos, next]
          buffer.push(currentToken)
          pos = next
        }

        break
      }
    }

    pos++
    return currentToken
  }

  function back(token) {
    returned.push(token)
  }

  return {
    back,
    nextToken,
    endOfFile,
    position
  }
}


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(12)

class Declaration extends Node {
  constructor(defaults) {
    if (
      defaults &&
      typeof defaults.value !== 'undefined' &&
      typeof defaults.value !== 'string'
    ) {
      defaults = { ...defaults, value: String(defaults.value) }
    }
    super(defaults)
    this.type = 'decl'
  }

  get variable() {
    return this.prop.startsWith('--') || this.prop[0] === '$'
  }
}

module.exports = Declaration
Declaration.default = Declaration


/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(13)
let CssSyntaxError = __webpack_require__(6)
let Stringifier = __webpack_require__(14)
let stringify = __webpack_require__(15)

function cloneNode(obj, parent) {
  let cloned = new obj.constructor()

  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      /* c8 ignore next 2 */
      continue
    }
    if (i === 'proxyCache') continue
    let value = obj[i]
    let type = typeof value

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent
    } else if (i === 'source') {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(j => cloneNode(j, cloned))
    } else {
      if (type === 'object' && value !== null) value = cloneNode(value)
      cloned[i] = value
    }
  }

  return cloned
}

class Node {
  constructor(defaults = {}) {
    this.raws = {}
    this[isClean] = false
    this[my] = true

    for (let name in defaults) {
      if (name === 'nodes') {
        this.nodes = []
        for (let node of defaults[name]) {
          if (typeof node.clone === 'function') {
            this.append(node.clone())
          } else {
            this.append(node)
          }
        }
      } else {
        this[name] = defaults[name]
      }
    }
  }

  error(message, opts = {}) {
    if (this.source) {
      let { start, end } = this.rangeBy(opts)
      return this.source.input.error(
        message,
        { line: start.line, column: start.column },
        { line: end.line, column: end.column },
        opts
      )
    }
    return new CssSyntaxError(message)
  }

  warn(result, text, opts) {
    let data = { node: this }
    for (let i in opts) data[i] = opts[i]
    return result.warn(text, data)
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.parent = undefined
    return this
  }

  toString(stringifier = stringify) {
    if (stringifier.stringify) stringifier = stringifier.stringify
    let result = ''
    stringifier(this, i => {
      result += i
    })
    return result
  }

  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name]
    }
    return this
  }

  clone(overrides = {}) {
    let cloned = cloneNode(this)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertBefore(this, cloned)
    return cloned
  }

  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertAfter(this, cloned)
    return cloned
  }

  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this
      let foundSelf = false
      for (let node of nodes) {
        if (node === this) {
          foundSelf = true
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node)
          bookmark = node
        } else {
          this.parent.insertBefore(bookmark, node)
        }
      }

      if (!foundSelf) {
        this.remove()
      }
    }

    return this
  }

  next() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index + 1]
  }

  prev() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index - 1]
  }

  before(add) {
    this.parent.insertBefore(this, add)
    return this
  }

  after(add) {
    this.parent.insertAfter(this, add)
    return this
  }

  root() {
    let result = this
    while (result.parent && result.parent.type !== 'document') {
      result = result.parent
    }
    return result
  }

  raw(prop, defaultType) {
    let str = new Stringifier()
    return str.raw(this, prop, defaultType)
  }

  cleanRaws(keepBetween) {
    delete this.raws.before
    delete this.raws.after
    if (!keepBetween) delete this.raws.between
  }

  toJSON(_, inputs) {
    let fixed = {}
    let emitInputs = inputs == null
    inputs = inputs || new Map()
    let inputsNextIndex = 0

    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        /* c8 ignore next 2 */
        continue
      }
      if (name === 'parent' || name === 'proxyCache') continue
      let value = this[name]

      if (Array.isArray(value)) {
        fixed[name] = value.map(i => {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON(null, inputs)
          } else {
            return i
          }
        })
      } else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs)
      } else if (name === 'source') {
        let inputId = inputs.get(value.input)
        if (inputId == null) {
          inputId = inputsNextIndex
          inputs.set(value.input, inputsNextIndex)
          inputsNextIndex++
        }
        fixed[name] = {
          inputId,
          start: value.start,
          end: value.end
        }
      } else {
        fixed[name] = value
      }
    }

    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map(input => input.toJSON())
    }

    return fixed
  }

  positionInside(index) {
    let string = this.toString()
    let column = this.source.start.column
    let line = this.source.start.line

    for (let i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1
        line += 1
      } else {
        column += 1
      }
    }

    return { line, column }
  }

  positionBy(opts) {
    let pos = this.source.start
    if (opts.index) {
      pos = this.positionInside(opts.index)
    } else if (opts.word) {
      let index = this.toString().indexOf(opts.word)
      if (index !== -1) pos = this.positionInside(index)
    }
    return pos
  }

  rangeBy(opts) {
    let start = {
      line: this.source.start.line,
      column: this.source.start.column
    }
    let end = this.source.end
      ? {
          line: this.source.end.line,
          column: this.source.end.column + 1
        }
      : {
          line: start.line,
          column: start.column + 1
        }

    if (opts.word) {
      let index = this.toString().indexOf(opts.word)
      if (index !== -1) {
        start = this.positionInside(index)
        end = this.positionInside(index + opts.word.length)
      }
    } else {
      if (opts.start) {
        start = {
          line: opts.start.line,
          column: opts.start.column
        }
      } else if (opts.index) {
        start = this.positionInside(opts.index)
      }

      if (opts.end) {
        end = {
          line: opts.end.line,
          column: opts.end.column
        }
      } else if (opts.endIndex) {
        end = this.positionInside(opts.endIndex)
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1)
      }
    }

    if (
      end.line < start.line ||
      (end.line === start.line && end.column <= start.column)
    ) {
      end = { line: start.line, column: start.column + 1 }
    }

    return { start, end }
  }

  getProxyProcessor() {
    return {
      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (
          prop === 'prop' ||
          prop === 'value' ||
          prop === 'name' ||
          prop === 'params' ||
          prop === 'important' ||
          /* c8 ignore next */
          prop === 'text'
        ) {
          node.markDirty()
        }
        return true
      },

      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else {
          return node[prop]
        }
      }
    }
  }

  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor())
    }
    return this.proxyCache
  }

  addToError(error) {
    error.postcssNode = this
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      )
    }
    return error
  }

  markDirty() {
    if (this[isClean]) {
      this[isClean] = false
      let next = this
      while ((next = next.parent)) {
        next[isClean] = false
      }
    }
  }

  get proxyOf() {
    return this
  }
}

module.exports = Node
Node.default = Node


/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";


module.exports.isClean = Symbol('isClean')

module.exports.my = Symbol('my')


/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";


const DEFAULT_RAW = {
  colon: ': ',
  indent: '    ',
  beforeDecl: '\n',
  beforeRule: '\n',
  beforeOpen: ' ',
  beforeClose: '\n',
  beforeComment: '\n',
  after: '\n',
  emptyBody: '',
  commentLeft: ' ',
  commentRight: ' ',
  semicolon: false
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

class Stringifier {
  constructor(builder) {
    this.builder = builder
  }

  stringify(node, semicolon) {
    /* c8 ignore start */
    if (!this[node.type]) {
      throw new Error(
        'Unknown AST node type ' +
          node.type +
          '. ' +
          'Maybe you need to change PostCSS stringifier.'
      )
    }
    /* c8 ignore stop */
    this[node.type](node, semicolon)
  }

  document(node) {
    this.body(node)
  }

  root(node) {
    this.body(node)
    if (node.raws.after) this.builder(node.raws.after)
  }

  comment(node) {
    let left = this.raw(node, 'left', 'commentLeft')
    let right = this.raw(node, 'right', 'commentRight')
    this.builder('/*' + left + node.text + right + '*/', node)
  }

  decl(node, semicolon) {
    let between = this.raw(node, 'between', 'colon')
    let string = node.prop + between + this.rawValue(node, 'value')

    if (node.important) {
      string += node.raws.important || ' !important'
    }

    if (semicolon) string += ';'
    this.builder(string, node)
  }

  rule(node) {
    this.block(node, this.rawValue(node, 'selector'))
    if (node.raws.ownSemicolon) {
      this.builder(node.raws.ownSemicolon, node, 'end')
    }
  }

  atrule(node, semicolon) {
    let name = '@' + node.name
    let params = node.params ? this.rawValue(node, 'params') : ''

    if (typeof node.raws.afterName !== 'undefined') {
      name += node.raws.afterName
    } else if (params) {
      name += ' '
    }

    if (node.nodes) {
      this.block(node, name + params)
    } else {
      let end = (node.raws.between || '') + (semicolon ? ';' : '')
      this.builder(name + params + end, node)
    }
  }

  body(node) {
    let last = node.nodes.length - 1
    while (last > 0) {
      if (node.nodes[last].type !== 'comment') break
      last -= 1
    }

    let semicolon = this.raw(node, 'semicolon')
    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i]
      let before = this.raw(child, 'before')
      if (before) this.builder(before)
      this.stringify(child, last !== i || semicolon)
    }
  }

  block(node, start) {
    let between = this.raw(node, 'between', 'beforeOpen')
    this.builder(start + between + '{', node, 'start')

    let after
    if (node.nodes && node.nodes.length) {
      this.body(node)
      after = this.raw(node, 'after')
    } else {
      after = this.raw(node, 'after', 'emptyBody')
    }

    if (after) this.builder(after)
    this.builder('}', node, 'end')
  }

  raw(node, own, detect) {
    let value
    if (!detect) detect = own

    // Already had
    if (own) {
      value = node.raws[own]
      if (typeof value !== 'undefined') return value
    }

    let parent = node.parent

    if (detect === 'before') {
      // Hack for first rule in CSS
      if (!parent || (parent.type === 'root' && parent.first === node)) {
        return ''
      }

      // `root` nodes in `document` should use only their own raws
      if (parent && parent.type === 'document') {
        return ''
      }
    }

    // Floating child without parent
    if (!parent) return DEFAULT_RAW[detect]

    // Detect style by other nodes
    let root = node.root()
    if (!root.rawCache) root.rawCache = {}
    if (typeof root.rawCache[detect] !== 'undefined') {
      return root.rawCache[detect]
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect)
    } else {
      let method = 'raw' + capitalize(detect)
      if (this[method]) {
        value = this[method](root, node)
      } else {
        root.walk(i => {
          value = i.raws[own]
          if (typeof value !== 'undefined') return false
        })
      }
    }

    if (typeof value === 'undefined') value = DEFAULT_RAW[detect]

    root.rawCache[detect] = value
    return value
  }

  rawSemicolon(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawEmptyBody(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawIndent(root) {
    if (root.raws.indent) return root.raws.indent
    let value
    root.walk(i => {
      let p = i.parent
      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          let parts = i.raws.before.split('\n')
          value = parts[parts.length - 1]
          value = value.replace(/\S/g, '')
          return false
        }
      }
    })
    return value
  }

  rawBeforeComment(root, node) {
    let value
    root.walkComments(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeDecl(root, node) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeRule(root) {
    let value
    root.walk(i => {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawBeforeClose(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawBeforeOpen(root) {
    let value
    root.walk(i => {
      if (i.type !== 'decl') {
        value = i.raws.between
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawColon(root) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '')
        return false
      }
    })
    return value
  }

  beforeAfter(node, detect) {
    let value
    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment')
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule')
    } else {
      value = this.raw(node, null, 'beforeClose')
    }

    let buf = node.parent
    let depth = 0
    while (buf && buf.type !== 'root') {
      depth += 1
      buf = buf.parent
    }

    if (value.includes('\n')) {
      let indent = this.raw(node, null, 'indent')
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent
      }
    }

    return value
  }

  rawValue(node, prop) {
    let value = node[prop]
    let raw = node.raws[prop]
    if (raw && raw.value === value) {
      return raw.raw
    }

    return value
  }
}

module.exports = Stringifier
Stringifier.default = Stringifier


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Stringifier = __webpack_require__(14)

function stringify(node, builder) {
  let str = new Stringifier(builder)
  str.stringify(node)
}

module.exports = stringify
stringify.default = stringify


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(13)
let MapGenerator = __webpack_require__(17)
let stringify = __webpack_require__(15)
let Container = __webpack_require__(35)
let Document = __webpack_require__(37)
let warnOnce = __webpack_require__(38)
let Result = __webpack_require__(39)
let parse = __webpack_require__(41)
let Root = __webpack_require__(44)

const TYPE_TO_CLASS_NAME = {
  document: 'Document',
  root: 'Root',
  atrule: 'AtRule',
  rule: 'Rule',
  decl: 'Declaration',
  comment: 'Comment'
}

const PLUGIN_PROPS = {
  postcssPlugin: true,
  prepare: true,
  Once: true,
  Document: true,
  Root: true,
  Declaration: true,
  Rule: true,
  AtRule: true,
  Comment: true,
  DeclarationExit: true,
  RuleExit: true,
  AtRuleExit: true,
  CommentExit: true,
  RootExit: true,
  DocumentExit: true,
  OnceExit: true
}

const NOT_VISITORS = {
  postcssPlugin: true,
  prepare: true,
  Once: true
}

const CHILDREN = 0

function isPromise(obj) {
  return typeof obj === 'object' && typeof obj.then === 'function'
}

function getEvents(node) {
  let key = false
  let type = TYPE_TO_CLASS_NAME[node.type]
  if (node.type === 'decl') {
    key = node.prop.toLowerCase()
  } else if (node.type === 'atrule') {
    key = node.name.toLowerCase()
  }

  if (key && node.append) {
    return [
      type,
      type + '-' + key,
      CHILDREN,
      type + 'Exit',
      type + 'Exit-' + key
    ]
  } else if (key) {
    return [type, type + '-' + key, type + 'Exit', type + 'Exit-' + key]
  } else if (node.append) {
    return [type, CHILDREN, type + 'Exit']
  } else {
    return [type, type + 'Exit']
  }
}

function toStack(node) {
  let events
  if (node.type === 'document') {
    events = ['Document', CHILDREN, 'DocumentExit']
  } else if (node.type === 'root') {
    events = ['Root', CHILDREN, 'RootExit']
  } else {
    events = getEvents(node)
  }

  return {
    node,
    events,
    eventIndex: 0,
    visitors: [],
    visitorIndex: 0,
    iterator: 0
  }
}

function cleanMarks(node) {
  node[isClean] = false
  if (node.nodes) node.nodes.forEach(i => cleanMarks(i))
  return node
}

let postcss = {}

class LazyResult {
  constructor(processor, css, opts) {
    this.stringified = false
    this.processed = false

    let root
    if (
      typeof css === 'object' &&
      css !== null &&
      (css.type === 'root' || css.type === 'document')
    ) {
      root = cleanMarks(css)
    } else if (css instanceof LazyResult || css instanceof Result) {
      root = cleanMarks(css.root)
      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {}
        if (!opts.map.inline) opts.map.inline = false
        opts.map.prev = css.map
      }
    } else {
      let parser = parse
      if (opts.syntax) parser = opts.syntax.parse
      if (opts.parser) parser = opts.parser
      if (parser.parse) parser = parser.parse

      try {
        root = parser(css, opts)
      } catch (error) {
        this.processed = true
        this.error = error
      }

      if (root && !root[my]) {
        /* c8 ignore next 2 */
        Container.rebuild(root)
      }
    }

    this.result = new Result(processor, root, opts)
    this.helpers = { ...postcss, result: this.result, postcss }
    this.plugins = this.processor.plugins.map(plugin => {
      if (typeof plugin === 'object' && plugin.prepare) {
        return { ...plugin, ...plugin.prepare(this.result) }
      } else {
        return plugin
      }
    })
  }

  get [Symbol.toStringTag]() {
    return 'LazyResult'
  }

  get processor() {
    return this.result.processor
  }

  get opts() {
    return this.result.opts
  }

  get css() {
    return this.stringify().css
  }

  get content() {
    return this.stringify().content
  }

  get map() {
    return this.stringify().map
  }

  get root() {
    return this.sync().root
  }

  get messages() {
    return this.sync().messages
  }

  warnings() {
    return this.sync().warnings()
  }

  toString() {
    return this.css
  }

  then(onFulfilled, onRejected) {
    if (process.env.NODE_ENV !== 'production') {
      if (!('from' in this.opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }
    return this.async().then(onFulfilled, onRejected)
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    if (this.processed) return Promise.resolve(this.result)
    if (!this.processing) {
      this.processing = this.runAsync()
    }
    return this.processing
  }

  sync() {
    if (this.error) throw this.error
    if (this.processed) return this.result
    this.processed = true

    if (this.processing) {
      throw this.getAsyncError()
    }

    for (let plugin of this.plugins) {
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        this.walkSync(root)
      }
      if (this.listeners.OnceExit) {
        if (root.type === 'document') {
          for (let subRoot of root.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot)
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root)
        }
      }
    }

    return this.result
  }

  stringify() {
    if (this.error) throw this.error
    if (this.stringified) return this.result
    this.stringified = true

    this.sync()

    let opts = this.result.opts
    let str = stringify
    if (opts.syntax) str = opts.syntax.stringify
    if (opts.stringifier) str = opts.stringifier
    if (str.stringify) str = str.stringify

    let map = new MapGenerator(str, this.result.root, this.result.opts)
    let data = map.generate()
    this.result.css = data[0]
    this.result.map = data[1]

    return this.result
  }

  walkSync(node) {
    node[isClean] = true
    let events = getEvents(node)
    for (let event of events) {
      if (event === CHILDREN) {
        if (node.nodes) {
          node.each(child => {
            if (!child[isClean]) this.walkSync(child)
          })
        }
      } else {
        let visitors = this.listeners[event]
        if (visitors) {
          if (this.visitSync(visitors, node.toProxy())) return
        }
      }
    }
  }

  visitSync(visitors, node) {
    for (let [plugin, visitor] of visitors) {
      this.result.lastPlugin = plugin
      let promise
      try {
        promise = visitor(node, this.helpers)
      } catch (e) {
        throw this.handleError(e, node.proxyOf)
      }
      if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
        return true
      }
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }
  }

  runOnRoot(plugin) {
    this.result.lastPlugin = plugin
    try {
      if (typeof plugin === 'object' && plugin.Once) {
        if (this.result.root.type === 'document') {
          let roots = this.result.root.nodes.map(root =>
            plugin.Once(root, this.helpers)
          )

          if (isPromise(roots[0])) {
            return Promise.all(roots)
          }

          return roots
        }

        return plugin.Once(this.result.root, this.helpers)
      } else if (typeof plugin === 'function') {
        return plugin(this.result.root, this.result)
      }
    } catch (error) {
      throw this.handleError(error)
    }
  }

  getAsyncError() {
    throw new Error('Use process(css).then(cb) to work with async plugins')
  }

  handleError(error, node) {
    let plugin = this.result.lastPlugin
    try {
      if (node) node.addToError(error)
      this.error = error
      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin
        error.setMessage()
      } else if (plugin.postcssVersion) {
        if (process.env.NODE_ENV !== 'production') {
          let pluginName = plugin.postcssPlugin
          let pluginVer = plugin.postcssVersion
          let runtimeVer = this.result.processor.version
          let a = pluginVer.split('.')
          let b = runtimeVer.split('.')

          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            // eslint-disable-next-line no-console
            console.error(
              'Unknown error from PostCSS plugin. Your current PostCSS ' +
                'version is ' +
                runtimeVer +
                ', but ' +
                pluginName +
                ' uses ' +
                pluginVer +
                '. Perhaps this is the source of the error below.'
            )
          }
        }
      }
    } catch (err) {
      /* c8 ignore next 3 */
      // eslint-disable-next-line no-console
      if (console && console.error) console.error(err)
    }
    return error
  }

  async runAsync() {
    this.plugin = 0
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin = this.plugins[i]
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        try {
          await promise
        } catch (error) {
          throw this.handleError(error)
        }
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        let stack = [toStack(root)]
        while (stack.length > 0) {
          let promise = this.visitTick(stack)
          if (isPromise(promise)) {
            try {
              await promise
            } catch (e) {
              let node = stack[stack.length - 1].node
              throw this.handleError(e, node)
            }
          }
        }
      }

      if (this.listeners.OnceExit) {
        for (let [plugin, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin
          try {
            if (root.type === 'document') {
              let roots = root.nodes.map(subRoot =>
                visitor(subRoot, this.helpers)
              )

              await Promise.all(roots)
            } else {
              await visitor(root, this.helpers)
            }
          } catch (e) {
            throw this.handleError(e)
          }
        }
      }
    }

    this.processed = true
    return this.stringify()
  }

  prepareVisitors() {
    this.listeners = {}
    let add = (plugin, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = []
      this.listeners[type].push([plugin, cb])
    }
    for (let plugin of this.plugins) {
      if (typeof plugin === 'object') {
        for (let event in plugin) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin.postcssPlugin}. ` +
                `Try to update PostCSS (${this.processor.version} now).`
            )
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin[event] === 'object') {
              for (let filter in plugin[event]) {
                if (filter === '*') {
                  add(plugin, event, plugin[event][filter])
                } else {
                  add(
                    plugin,
                    event + '-' + filter.toLowerCase(),
                    plugin[event][filter]
                  )
                }
              }
            } else if (typeof plugin[event] === 'function') {
              add(plugin, event, plugin[event])
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0
  }

  visitTick(stack) {
    let visit = stack[stack.length - 1]
    let { node, visitors } = visit

    if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
      stack.pop()
      return
    }

    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
      let [plugin, visitor] = visitors[visit.visitorIndex]
      visit.visitorIndex += 1
      if (visit.visitorIndex === visitors.length) {
        visit.visitors = []
        visit.visitorIndex = 0
      }
      this.result.lastPlugin = plugin
      try {
        return visitor(node.toProxy(), this.helpers)
      } catch (e) {
        throw this.handleError(e, node)
      }
    }

    if (visit.iterator !== 0) {
      let iterator = visit.iterator
      let child
      while ((child = node.nodes[node.indexes[iterator]])) {
        node.indexes[iterator] += 1
        if (!child[isClean]) {
          child[isClean] = true
          stack.push(toStack(child))
          return
        }
      }
      visit.iterator = 0
      delete node.indexes[iterator]
    }

    let events = visit.events
    while (visit.eventIndex < events.length) {
      let event = events[visit.eventIndex]
      visit.eventIndex += 1
      if (event === CHILDREN) {
        if (node.nodes && node.nodes.length) {
          node[isClean] = true
          visit.iterator = node.getIterator()
        }
        return
      } else if (this.listeners[event]) {
        visit.visitors = this.listeners[event]
        return
      }
    }
    stack.pop()
  }
}

LazyResult.registerPostcss = dependant => {
  postcss = dependant
}

module.exports = LazyResult
LazyResult.default = LazyResult

Root.registerLazyResult(LazyResult)
Document.registerLazyResult(LazyResult)


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(18)
let { dirname, resolve, relative, sep } = __webpack_require__(29)
let { pathToFileURL } = __webpack_require__(30)

let Input = __webpack_require__(31)

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(dirname && resolve && relative && sep)

class MapGenerator {
  constructor(stringify, root, opts, cssString) {
    this.stringify = stringify
    this.mapOpts = opts.map || {}
    this.root = root
    this.opts = opts
    this.css = cssString
  }

  isMap() {
    if (typeof this.opts.map !== 'undefined') {
      return !!this.opts.map
    }
    return this.previous().length > 0
  }

  previous() {
    if (!this.previousMaps) {
      this.previousMaps = []
      if (this.root) {
        this.root.walk(node => {
          if (node.source && node.source.input.map) {
            let map = node.source.input.map
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map)
            }
          }
        })
      } else {
        let input = new Input(this.css, this.opts)
        if (input.map) this.previousMaps.push(input.map)
      }
    }

    return this.previousMaps
  }

  isInline() {
    if (typeof this.mapOpts.inline !== 'undefined') {
      return this.mapOpts.inline
    }

    let annotation = this.mapOpts.annotation
    if (typeof annotation !== 'undefined' && annotation !== true) {
      return false
    }

    if (this.previous().length) {
      return this.previous().some(i => i.inline)
    }
    return true
  }

  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
      return this.mapOpts.sourcesContent
    }
    if (this.previous().length) {
      return this.previous().some(i => i.withContent())
    }
    return true
  }

  clearAnnotation() {
    if (this.mapOpts.annotation === false) return

    if (this.root) {
      let node
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node = this.root.nodes[i]
        if (node.type !== 'comment') continue
        if (node.text.indexOf('# sourceMappingURL=') === 0) {
          this.root.removeChild(i)
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, '')
    }
  }

  setSourcesContent() {
    let already = {}
    if (this.root) {
      this.root.walk(node => {
        if (node.source) {
          let from = node.source.input.from
          if (from && !already[from]) {
            already[from] = true
            this.map.setSourceContent(
              this.toUrl(this.path(from)),
              node.source.input.css
            )
          }
        }
      })
    } else if (this.css) {
      let from = this.opts.from
        ? this.toUrl(this.path(this.opts.from))
        : '<no source>'
      this.map.setSourceContent(from, this.css)
    }
  }

  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file))
      let root = prev.root || dirname(prev.file)
      let map

      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text)
        if (map.sourcesContent) {
          map.sourcesContent = map.sourcesContent.map(() => null)
        }
      } else {
        map = prev.consumer()
      }

      this.map.applySourceMap(map, from, this.toUrl(this.path(root)))
    }
  }

  isAnnotation() {
    if (this.isInline()) {
      return true
    }
    if (typeof this.mapOpts.annotation !== 'undefined') {
      return this.mapOpts.annotation
    }
    if (this.previous().length) {
      return this.previous().some(i => i.annotation)
    }
    return true
  }

  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString('base64')
    } else {
      return window.btoa(unescape(encodeURIComponent(str)))
    }
  }

  addAnnotation() {
    let content

    if (this.isInline()) {
      content =
        'data:application/json;base64,' + this.toBase64(this.map.toString())
    } else if (typeof this.mapOpts.annotation === 'string') {
      content = this.mapOpts.annotation
    } else if (typeof this.mapOpts.annotation === 'function') {
      content = this.mapOpts.annotation(this.opts.to, this.root)
    } else {
      content = this.outputFile() + '.map'
    }
    let eol = '\n'
    if (this.css.includes('\r\n')) eol = '\r\n'

    this.css += eol + '/*# sourceMappingURL=' + content + ' */'
  }

  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to)
    } else if (this.opts.from) {
      return this.path(this.opts.from)
    } else {
      return 'to.css'
    }
  }

  generateMap() {
    if (this.root) {
      this.generateString()
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer()
      prev.file = this.outputFile()
      this.map = SourceMapGenerator.fromSourceMap(prev)
    } else {
      this.map = new SourceMapGenerator({ file: this.outputFile() })
      this.map.addMapping({
        source: this.opts.from
          ? this.toUrl(this.path(this.opts.from))
          : '<no source>',
        generated: { line: 1, column: 0 },
        original: { line: 1, column: 0 }
      })
    }

    if (this.isSourcesContent()) this.setSourcesContent()
    if (this.root && this.previous().length > 0) this.applyPrevMaps()
    if (this.isAnnotation()) this.addAnnotation()

    if (this.isInline()) {
      return [this.css]
    } else {
      return [this.css, this.map]
    }
  }

  path(file) {
    if (file.indexOf('<') === 0) return file
    if (/^\w+:\/\//.test(file)) return file
    if (this.mapOpts.absolute) return file

    let from = this.opts.to ? dirname(this.opts.to) : '.'

    if (typeof this.mapOpts.annotation === 'string') {
      from = dirname(resolve(from, this.mapOpts.annotation))
    }

    file = relative(from, file)
    return file
  }

  toUrl(path) {
    if (sep === '\\') {
      path = path.replace(/\\/g, '/')
    }
    return encodeURI(path).replace(/[#?]/g, encodeURIComponent)
  }

  sourcePath(node) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from)
    } else if (this.mapOpts.absolute) {
      if (pathToFileURL) {
        return pathToFileURL(node.source.input.from).toString()
      } else {
        throw new Error(
          '`map.absolute` option is not available in this PostCSS build'
        )
      }
    } else {
      return this.toUrl(this.path(node.source.input.from))
    }
  }

  generateString() {
    this.css = ''
    this.map = new SourceMapGenerator({ file: this.outputFile() })

    let line = 1
    let column = 1

    let noSource = '<no source>'
    let mapping = {
      source: '',
      generated: { line: 0, column: 0 },
      original: { line: 0, column: 0 }
    }

    let lines, last
    this.stringify(this.root, (str, node, type) => {
      this.css += str

      if (node && type !== 'end') {
        mapping.generated.line = line
        mapping.generated.column = column - 1
        if (node.source && node.source.start) {
          mapping.source = this.sourcePath(node)
          mapping.original.line = node.source.start.line
          mapping.original.column = node.source.start.column - 1
          this.map.addMapping(mapping)
        } else {
          mapping.source = noSource
          mapping.original.line = 1
          mapping.original.column = 0
          this.map.addMapping(mapping)
        }
      }

      lines = str.match(/\n/g)
      if (lines) {
        line += lines.length
        last = str.lastIndexOf('\n')
        column = str.length - last
      } else {
        column += str.length
      }

      if (node && type !== 'start') {
        let p = node.parent || { raws: {} }
        if (node.type !== 'decl' || node !== p.last || p.raws.semicolon) {
          if (node.source && node.source.end) {
            mapping.source = this.sourcePath(node)
            mapping.original.line = node.source.end.line
            mapping.original.column = node.source.end.column - 1
            mapping.generated.line = line
            mapping.generated.column = column - 2
            this.map.addMapping(mapping)
          } else {
            mapping.source = noSource
            mapping.original.line = 1
            mapping.original.column = 0
            mapping.generated.line = line
            mapping.generated.column = column - 1
            this.map.addMapping(mapping)
          }
        }
      }
    })
  }

  generate() {
    this.clearAnnotation()
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap()
    } else {
      let result = ''
      this.stringify(this.root, i => {
        result += i
      })
      return [result]
    }
  }
}

module.exports = MapGenerator


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(19).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(25).SourceMapConsumer;
exports.SourceNode = __webpack_require__(28).SourceNode;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(20);
var util = __webpack_require__(22);
var ArraySet = (__webpack_require__(23).ArraySet);
var MappingList = (__webpack_require__(24).MappingList);

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(21);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

var MAX_CACHED_INPUTS = 32;

/**
 * Takes some function `f(input) -> result` and returns a memoized version of
 * `f`.
 *
 * We keep at most `MAX_CACHED_INPUTS` memoized results of `f` alive. The
 * memoization is a dumb-simple, linear least-recently-used cache.
 */
function lruMemoize(f) {
  var cache = [];

  return function(input) {
    for (var i = 0; i < cache.length; i++) {
      if (cache[i].input === input) {
        var temp = cache[0];
        cache[0] = cache[i];
        cache[i] = temp;
        return cache[0].result;
      }
    }

    var result = f(input);

    cache.unshift({
      input,
      result,
    });

    if (cache.length > MAX_CACHED_INPUTS) {
      cache.pop();
    }

    return result;
  };
}

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
var normalize = lruMemoize(function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);
  // Split the path into parts between `/` characters. This is much faster than
  // using `.split(/\/+/g)`.
  var parts = [];
  var start = 0;
  var i = 0;
  while (true) {
    start = i;
    i = path.indexOf("/", start);
    if (i === -1) {
      parts.push(path.slice(start));
      break;
    } else {
      parts.push(path.slice(start, i));
      while (i < path.length && path[i] === "/") {
        i++;
      }
    }
  }

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
});
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
  var cmp

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(22);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(22);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(22);
var binarySearch = __webpack_require__(26);
var ArraySet = (__webpack_require__(23).ArraySet);
var base64VLQ = __webpack_require__(20);
var quickSort = (__webpack_require__(27).quickSort);

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    var boundCallback = aCallback.bind(context);
    var names = this._names;
    var sources = this._sources;
    var sourceMapURL = this._sourceMapURL;

    for (var i = 0, n = mappings.length; i < n; i++) {
      var mapping = mappings[i];
      var source = mapping.source === null ? null : sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, sourceMapURL);
      boundCallback({
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : names.at(mapping.name)
      });
    }
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */

const compareGenerated = util.compareByGeneratedPositionsDeflatedNoLine;
function sortGenerated(array, start) {
  let l = array.length;
  let n = array.length - start;
  if (n <= 1) {
    return;
  } else if (n == 2) {
    let a = array[start];
    let b = array[start + 1];
    if (compareGenerated(a, b) > 0) {
      array[start] = b;
      array[start + 1] = a;
    }
  } else if (n < 20) {
    for (let i = start; i < l; i++) {
      for (let j = i; j > start; j--) {
        let a = array[j - 1];
        let b = array[j];
        if (compareGenerated(a, b) <= 0) {
          break;
        }
        array[j - 1] = b;
        array[j] = a;
      }
    }
  } else {
    quickSort(array, compareGenerated, start);
  }
}
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    let subarrayStart = 0;
    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;

        sortGenerated(generatedMappings, subarrayStart);
        subarrayStart = generatedMappings.length;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = [];
        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          let currentSource = mapping.source;
          while (originalMappings.length <= currentSource) {
            originalMappings.push(null);
          }
          if (originalMappings[currentSource] === null) {
            originalMappings[currentSource] = [];
          }
          originalMappings[currentSource].push(mapping);
        }
      }
    }

    sortGenerated(generatedMappings, subarrayStart);
    this.__generatedMappings = generatedMappings;

    for (var i = 0; i < originalMappings.length; i++) {
      if (originalMappings[i] != null) {
        quickSort(originalMappings[i], util.compareByOriginalPositionsNoSource);
      }
    }
    this.__originalMappings = [].concat(...originalMappings);
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

function SortTemplate(comparator) {

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot, false) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

  return doQuickSort;
}

function cloneSort(comparator) {
  let template = SortTemplate.toString();
  let templateFn = new Function(`return ${template}`)();
  return templateFn(comparator);
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */

let sortCache = new WeakMap();
exports.quickSort = function (ary, comparator, start = 0) {
  let doQuickSort = sortCache.get(comparator);
  if (doQuickSort === void 0) {
    doQuickSort = cloneSort(comparator);
    sortCache.set(comparator, doQuickSort);
  }
  doQuickSort(ary, comparator, start, ary.length - 1);
};


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = (__webpack_require__(19).SourceMapGenerator);
var util = __webpack_require__(22);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),
/* 29 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),
/* 30 */
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(18)
let { fileURLToPath, pathToFileURL } = __webpack_require__(30)
let { resolve, isAbsolute } = __webpack_require__(29)
let { nanoid } = __webpack_require__(68)

let terminalHighlight = __webpack_require__(9)
let CssSyntaxError = __webpack_require__(6)
let PreviousMap = __webpack_require__(33)

let fromOffsetCache = Symbol('fromOffsetCache')

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(resolve && isAbsolute)

class Input {
  constructor(css, opts = {}) {
    if (
      css === null ||
      typeof css === 'undefined' ||
      (typeof css === 'object' && !css.toString)
    ) {
      throw new Error(`PostCSS received ${css} instead of CSS string`)
    }

    this.css = css.toString()

    if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
      this.hasBOM = true
      this.css = this.css.slice(1)
    } else {
      this.hasBOM = false
    }

    if (opts.from) {
      if (
        !pathAvailable ||
        /^\w+:\/\//.test(opts.from) ||
        isAbsolute(opts.from)
      ) {
        this.file = opts.from
      } else {
        this.file = resolve(opts.from)
      }
    }

    if (pathAvailable && sourceMapAvailable) {
      let map = new PreviousMap(this.css, opts)
      if (map.text) {
        this.map = map
        let file = map.consumer().file
        if (!this.file && file) this.file = this.mapResolve(file)
      }
    }

    if (!this.file) {
      this.id = '<input css ' + nanoid(6) + '>'
    }
    if (this.map) this.map.file = this.from
  }

  fromOffset(offset) {
    let lastLine, lineToIndex
    if (!this[fromOffsetCache]) {
      let lines = this.css.split('\n')
      lineToIndex = new Array(lines.length)
      let prevIndex = 0

      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex
        prevIndex += lines[i].length + 1
      }

      this[fromOffsetCache] = lineToIndex
    } else {
      lineToIndex = this[fromOffsetCache]
    }
    lastLine = lineToIndex[lineToIndex.length - 1]

    let min = 0
    if (offset >= lastLine) {
      min = lineToIndex.length - 1
    } else {
      let max = lineToIndex.length - 2
      let mid
      while (min < max) {
        mid = min + ((max - min) >> 1)
        if (offset < lineToIndex[mid]) {
          max = mid - 1
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1
        } else {
          min = mid
          break
        }
      }
    }
    return {
      line: min + 1,
      col: offset - lineToIndex[min] + 1
    }
  }

  error(message, line, column, opts = {}) {
    let result, endLine, endColumn

    if (line && typeof line === 'object') {
      let start = line
      let end = column
      if (typeof line.offset === 'number') {
        let pos = this.fromOffset(start.offset)
        line = pos.line
        column = pos.col
      } else {
        line = start.line
        column = start.column
      }
      if (typeof end.offset === 'number') {
        let pos = this.fromOffset(end.offset)
        endLine = pos.line
        endColumn = pos.col
      } else {
        endLine = end.line
        endColumn = end.column
      }
    } else if (!column) {
      let pos = this.fromOffset(line)
      line = pos.line
      column = pos.col
    }

    let origin = this.origin(line, column, endLine, endColumn)
    if (origin) {
      result = new CssSyntaxError(
        message,
        origin.endLine === undefined
          ? origin.line
          : { line: origin.line, column: origin.column },
        origin.endLine === undefined
          ? origin.column
          : { line: origin.endLine, column: origin.endColumn },
        origin.source,
        origin.file,
        opts.plugin
      )
    } else {
      result = new CssSyntaxError(
        message,
        endLine === undefined ? line : { line, column },
        endLine === undefined ? column : { line: endLine, column: endColumn },
        this.css,
        this.file,
        opts.plugin
      )
    }

    result.input = { line, column, endLine, endColumn, source: this.css }
    if (this.file) {
      if (pathToFileURL) {
        result.input.url = pathToFileURL(this.file).toString()
      }
      result.input.file = this.file
    }

    return result
  }

  origin(line, column, endLine, endColumn) {
    if (!this.map) return false
    let consumer = this.map.consumer()

    let from = consumer.originalPositionFor({ line, column })
    if (!from.source) return false

    let to
    if (typeof endLine === 'number') {
      to = consumer.originalPositionFor({ line: endLine, column: endColumn })
    }

    let fromUrl

    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL(from.source)
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile)
      )
    }

    let result = {
      url: fromUrl.toString(),
      line: from.line,
      column: from.column,
      endLine: to && to.line,
      endColumn: to && to.column
    }

    if (fromUrl.protocol === 'file:') {
      if (fileURLToPath) {
        result.file = fileURLToPath(fromUrl)
      } else {
        /* c8 ignore next 2 */
        throw new Error(`file: protocol is not available in this PostCSS build`)
      }
    }

    let source = consumer.sourceContentFor(from.source)
    if (source) result.source = source

    return result
  }

  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file
    }
    return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file)
  }

  get from() {
    return this.file || this.id
  }

  toJSON() {
    let json = {}
    for (let name of ['hasBOM', 'css', 'file', 'id']) {
      if (this[name] != null) {
        json[name] = this[name]
      }
    }
    if (this.map) {
      json.map = { ...this.map }
      if (json.map.consumerCache) {
        json.map.consumerCache = undefined
      }
    }
    return json
  }
}

module.exports = Input
Input.default = Input

if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input)
}


/***/ }),
/* 32 */,
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(18)
let { existsSync, readFileSync } = __webpack_require__(34)
let { dirname, join } = __webpack_require__(29)

function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, 'base64').toString()
  } else {
    /* c8 ignore next 2 */
    return window.atob(str)
  }
}

class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return
    this.loadAnnotation(css)
    this.inline = this.startWith(this.annotation, 'data:')

    let prev = opts.map ? opts.map.prev : undefined
    let text = this.loadMap(opts.from, prev)
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from
    }
    if (this.mapFile) this.root = dirname(this.mapFile)
    if (text) this.text = text
  }

  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer(this.text)
    }
    return this.consumerCache
  }

  withContent() {
    return !!(
      this.consumer().sourcesContent &&
      this.consumer().sourcesContent.length > 0
    )
  }

  startWith(string, start) {
    if (!string) return false
    return string.substr(0, start.length) === start
  }

  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim()
  }

  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm)
    if (!comments) return

    // sourceMappingURLs from comments, strings, etc.
    let start = css.lastIndexOf(comments.pop())
    let end = css.indexOf('*/', start)

    if (start > -1 && end > -1) {
      // Locate the last sourceMappingURL to avoid pickin
      this.annotation = this.getAnnotationURL(css.substring(start, end))
    }
  }

  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/
    let baseUri = /^data:application\/json;base64,/
    let charsetUri = /^data:application\/json;charset=utf-?8,/
    let uri = /^data:application\/json,/

    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length))
    }

    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length))
    }

    let encoding = text.match(/data:application\/json;([^,]+),/)[1]
    throw new Error('Unsupported source map encoding ' + encoding)
  }

  loadFile(path) {
    this.root = dirname(path)
    if (existsSync(path)) {
      this.mapFile = path
      return readFileSync(path, 'utf-8').toString().trim()
    }
  }

  loadMap(file, prev) {
    if (prev === false) return false

    if (prev) {
      if (typeof prev === 'string') {
        return prev
      } else if (typeof prev === 'function') {
        let prevPath = prev(file)
        if (prevPath) {
          let map = this.loadFile(prevPath)
          if (!map) {
            throw new Error(
              'Unable to load previous source map: ' + prevPath.toString()
            )
          }
          return map
        }
      } else if (prev instanceof SourceMapConsumer) {
        return SourceMapGenerator.fromSourceMap(prev).toString()
      } else if (prev instanceof SourceMapGenerator) {
        return prev.toString()
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev)
      } else {
        throw new Error(
          'Unsupported previous source map format: ' + prev.toString()
        )
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation)
    } else if (this.annotation) {
      let map = this.annotation
      if (file) map = join(dirname(file), map)
      return this.loadFile(map)
    }
  }

  isMap(map) {
    if (typeof map !== 'object') return false
    return (
      typeof map.mappings === 'string' ||
      typeof map._mappings === 'string' ||
      Array.isArray(map.sections)
    )
  }
}

module.exports = PreviousMap
PreviousMap.default = PreviousMap


/***/ }),
/* 34 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(13)
let Declaration = __webpack_require__(11)
let Comment = __webpack_require__(36)
let Node = __webpack_require__(12)

let parse, Rule, AtRule

function cleanSource(nodes) {
  return nodes.map(i => {
    if (i.nodes) i.nodes = cleanSource(i.nodes)
    delete i.source
    return i
  })
}

function markDirtyUp(node) {
  node[isClean] = false
  if (node.proxyOf.nodes) {
    for (let i of node.proxyOf.nodes) {
      markDirtyUp(i)
    }
  }
}

class Container extends Node {
  push(child) {
    child.parent = this
    this.proxyOf.nodes.push(child)
    return this
  }

  each(callback) {
    if (!this.proxyOf.nodes) return undefined
    let iterator = this.getIterator()

    let index, result
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index = this.indexes[iterator]
      result = callback(this.proxyOf.nodes[index], index)
      if (result === false) break

      this.indexes[iterator] += 1
    }

    delete this.indexes[iterator]
    return result
  }

  walk(callback) {
    return this.each((child, i) => {
      let result
      try {
        result = callback(child, i)
      } catch (e) {
        throw child.addToError(e)
      }
      if (result !== false && child.walk) {
        result = child.walk(callback)
      }

      return result
    })
  }

  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop
      return this.walk((child, i) => {
        if (child.type === 'decl') {
          return callback(child, i)
        }
      })
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'decl' && child.prop === prop) {
        return callback(child, i)
      }
    })
  }

  walkRules(selector, callback) {
    if (!callback) {
      callback = selector

      return this.walk((child, i) => {
        if (child.type === 'rule') {
          return callback(child, i)
        }
      })
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'rule' && child.selector === selector) {
        return callback(child, i)
      }
    })
  }

  walkAtRules(name, callback) {
    if (!callback) {
      callback = name
      return this.walk((child, i) => {
        if (child.type === 'atrule') {
          return callback(child, i)
        }
      })
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'atrule' && child.name === name) {
        return callback(child, i)
      }
    })
  }

  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === 'comment') {
        return callback(child, i)
      }
    })
  }

  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last)
      for (let node of nodes) this.proxyOf.nodes.push(node)
    }

    this.markDirty()

    return this
  }

  prepend(...children) {
    children = children.reverse()
    for (let child of children) {
      let nodes = this.normalize(child, this.first, 'prepend').reverse()
      for (let node of nodes) this.proxyOf.nodes.unshift(node)
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween)
    if (this.nodes) {
      for (let node of this.nodes) node.cleanRaws(keepBetween)
    }
  }

  insertBefore(exist, add) {
    exist = this.index(exist)

    let type = exist === 0 ? 'prepend' : false
    let nodes = this.normalize(add, this.proxyOf.nodes[exist], type).reverse()
    for (let node of nodes) this.proxyOf.nodes.splice(exist, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (exist <= index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  insertAfter(exist, add) {
    exist = this.index(exist)

    let nodes = this.normalize(add, this.proxyOf.nodes[exist]).reverse()
    for (let node of nodes) this.proxyOf.nodes.splice(exist + 1, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (exist < index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  removeChild(child) {
    child = this.index(child)
    this.proxyOf.nodes[child].parent = undefined
    this.proxyOf.nodes.splice(child, 1)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (index >= child) {
        this.indexes[id] = index - 1
      }
    }

    this.markDirty()

    return this
  }

  removeAll() {
    for (let node of this.proxyOf.nodes) node.parent = undefined
    this.proxyOf.nodes = []

    this.markDirty()

    return this
  }

  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts
      opts = {}
    }

    this.walkDecls(decl => {
      if (opts.props && !opts.props.includes(decl.prop)) return
      if (opts.fast && !decl.value.includes(opts.fast)) return

      decl.value = decl.value.replace(pattern, callback)
    })

    this.markDirty()

    return this
  }

  every(condition) {
    return this.nodes.every(condition)
  }

  some(condition) {
    return this.nodes.some(condition)
  }

  index(child) {
    if (typeof child === 'number') return child
    if (child.proxyOf) child = child.proxyOf
    return this.proxyOf.nodes.indexOf(child)
  }

  get first() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[0]
  }

  get last() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
  }

  normalize(nodes, sample) {
    if (typeof nodes === 'string') {
      nodes = cleanSource(parse(nodes).nodes)
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type === 'root' && this.type !== 'document') {
      nodes = nodes.nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type) {
      nodes = [nodes]
    } else if (nodes.prop) {
      if (typeof nodes.value === 'undefined') {
        throw new Error('Value field is missed in node creation')
      } else if (typeof nodes.value !== 'string') {
        nodes.value = String(nodes.value)
      }
      nodes = [new Declaration(nodes)]
    } else if (nodes.selector) {
      nodes = [new Rule(nodes)]
    } else if (nodes.name) {
      nodes = [new AtRule(nodes)]
    } else if (nodes.text) {
      nodes = [new Comment(nodes)]
    } else {
      throw new Error('Unknown node type in node creation')
    }

    let processed = nodes.map(i => {
      /* c8 ignore next */
      if (!i[my]) Container.rebuild(i)
      i = i.proxyOf
      if (i.parent) i.parent.removeChild(i)
      if (i[isClean]) markDirtyUp(i)
      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/\S/g, '')
        }
      }
      i.parent = this
      return i
    })

    return processed
  }

  getProxyProcessor() {
    return {
      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (prop === 'name' || prop === 'params' || prop === 'selector') {
          node.markDirty()
        }
        return true
      },

      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (!node[prop]) {
          return node[prop]
        } else if (
          prop === 'each' ||
          (typeof prop === 'string' && prop.startsWith('walk'))
        ) {
          return (...args) => {
            return node[prop](
              ...args.map(i => {
                if (typeof i === 'function') {
                  return (child, index) => i(child.toProxy(), index)
                } else {
                  return i
                }
              })
            )
          }
        } else if (prop === 'every' || prop === 'some') {
          return cb => {
            return node[prop]((child, ...other) =>
              cb(child.toProxy(), ...other)
            )
          }
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else if (prop === 'nodes') {
          return node.nodes.map(i => i.toProxy())
        } else if (prop === 'first' || prop === 'last') {
          return node[prop].toProxy()
        } else {
          return node[prop]
        }
      }
    }
  }

  getIterator() {
    if (!this.lastEach) this.lastEach = 0
    if (!this.indexes) this.indexes = {}

    this.lastEach += 1
    let iterator = this.lastEach
    this.indexes[iterator] = 0

    return iterator
  }
}

Container.registerParse = dependant => {
  parse = dependant
}

Container.registerRule = dependant => {
  Rule = dependant
}

Container.registerAtRule = dependant => {
  AtRule = dependant
}

module.exports = Container
Container.default = Container

/* c8 ignore start */
Container.rebuild = node => {
  if (node.type === 'atrule') {
    Object.setPrototypeOf(node, AtRule.prototype)
  } else if (node.type === 'rule') {
    Object.setPrototypeOf(node, Rule.prototype)
  } else if (node.type === 'decl') {
    Object.setPrototypeOf(node, Declaration.prototype)
  } else if (node.type === 'comment') {
    Object.setPrototypeOf(node, Comment.prototype)
  }

  node[my] = true

  if (node.nodes) {
    node.nodes.forEach(child => {
      Container.rebuild(child)
    })
  }
}
/* c8 ignore stop */


/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(12)

class Comment extends Node {
  constructor(defaults) {
    super(defaults)
    this.type = 'comment'
  }
}

module.exports = Comment
Comment.default = Comment


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(35)

let LazyResult, Processor

class Document extends Container {
  constructor(defaults) {
    // type needs to be passed to super, otherwise child roots won't be normalized correctly
    super({ type: 'document', ...defaults })

    if (!this.nodes) {
      this.nodes = []
    }
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)

    return lazy.stringify()
  }
}

Document.registerLazyResult = dependant => {
  LazyResult = dependant
}

Document.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Document
Document.default = Document


/***/ }),
/* 38 */
/***/ ((module) => {

"use strict";
/* eslint-disable no-console */


let printed = {}

module.exports = function warnOnce(message) {
  if (printed[message]) return
  printed[message] = true

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(message)
  }
}


/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Warning = __webpack_require__(40)

class Result {
  constructor(processor, root, opts) {
    this.processor = processor
    this.messages = []
    this.root = root
    this.opts = opts
    this.css = undefined
    this.map = undefined
  }

  toString() {
    return this.css
  }

  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin
      }
    }

    let warning = new Warning(text, opts)
    this.messages.push(warning)

    return warning
  }

  warnings() {
    return this.messages.filter(i => i.type === 'warning')
  }

  get content() {
    return this.css
  }
}

module.exports = Result
Result.default = Result


/***/ }),
/* 40 */
/***/ ((module) => {

"use strict";


class Warning {
  constructor(text, opts = {}) {
    this.type = 'warning'
    this.text = text

    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts)
      this.line = range.start.line
      this.column = range.start.column
      this.endLine = range.end.line
      this.endColumn = range.end.column
    }

    for (let opt in opts) this[opt] = opts[opt]
  }

  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        plugin: this.plugin,
        index: this.index,
        word: this.word
      }).message
    }

    if (this.plugin) {
      return this.plugin + ': ' + this.text
    }

    return this.text
  }
}

module.exports = Warning
Warning.default = Warning


/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(35)
let Parser = __webpack_require__(42)
let Input = __webpack_require__(31)

function parse(css, opts) {
  let input = new Input(css, opts)
  let parser = new Parser(input)
  try {
    parser.parse()
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      if (e.name === 'CssSyntaxError' && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse SCSS with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-scss parser'
        } else if (/\.sass/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Sass with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-sass parser'
        } else if (/\.less$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Less with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-less parser'
        }
      }
    }
    throw e
  }

  return parser.root
}

module.exports = parse
parse.default = parse

Container.registerParse(parse)


/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Declaration = __webpack_require__(11)
let tokenizer = __webpack_require__(10)
let Comment = __webpack_require__(36)
let AtRule = __webpack_require__(43)
let Root = __webpack_require__(44)
let Rule = __webpack_require__(45)

class Parser {
  constructor(input) {
    this.input = input

    this.root = new Root()
    this.current = this.root
    this.spaces = ''
    this.semicolon = false
    this.customProperty = false

    this.createTokenizer()
    this.root.source = { input, start: { offset: 0, line: 1, column: 1 } }
  }

  createTokenizer() {
    this.tokenizer = tokenizer(this.input)
  }

  parse() {
    let token
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()

      switch (token[0]) {
        case 'space':
          this.spaces += token[1]
          break

        case ';':
          this.freeSemicolon(token)
          break

        case '}':
          this.end(token)
          break

        case 'comment':
          this.comment(token)
          break

        case 'at-word':
          this.atrule(token)
          break

        case '{':
          this.emptyRule(token)
          break

        default:
          this.other(token)
          break
      }
    }
    this.endFile()
  }

  comment(token) {
    let node = new Comment()
    this.init(node, token[2])
    node.source.end = this.getPosition(token[3] || token[2])

    let text = token[1].slice(2, -2)
    if (/^\s*$/.test(text)) {
      node.text = ''
      node.raws.left = text
      node.raws.right = ''
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/)
      node.text = match[2]
      node.raws.left = match[1]
      node.raws.right = match[3]
    }
  }

  emptyRule(token) {
    let node = new Rule()
    this.init(node, token[2])
    node.selector = ''
    node.raws.between = ''
    this.current = node
  }

  other(start) {
    let end = false
    let type = null
    let colon = false
    let bracket = null
    let brackets = []
    let customProperty = start[1].startsWith('--')

    let tokens = []
    let token = start
    while (token) {
      type = token[0]
      tokens.push(token)

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token
        brackets.push(type === '(' ? ')' : ']')
      } else if (customProperty && colon && type === '{') {
        if (!bracket) bracket = token
        brackets.push('}')
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(tokens, customProperty)
            return
          } else {
            break
          }
        } else if (type === '{') {
          this.rule(tokens)
          return
        } else if (type === '}') {
          this.tokenizer.back(tokens.pop())
          end = true
          break
        } else if (type === ':') {
          colon = true
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
        if (brackets.length === 0) bracket = null
      }

      token = this.tokenizer.nextToken()
    }

    if (this.tokenizer.endOfFile()) end = true
    if (brackets.length > 0) this.unclosedBracket(bracket)

    if (end && colon) {
      while (tokens.length) {
        token = tokens[tokens.length - 1][0]
        if (token !== 'space' && token !== 'comment') break
        this.tokenizer.back(tokens.pop())
      }
      this.decl(tokens, customProperty)
    } else {
      this.unknownWord(tokens)
    }
  }

  rule(tokens) {
    tokens.pop()

    let node = new Rule()
    this.init(node, tokens[0][2])

    node.raws.between = this.spacesAndCommentsFromEnd(tokens)
    this.raw(node, 'selector', tokens)
    this.current = node
  }

  decl(tokens, customProperty) {
    let node = new Declaration()
    this.init(node, tokens[0][2])

    let last = tokens[tokens.length - 1]
    if (last[0] === ';') {
      this.semicolon = true
      tokens.pop()
    }
    node.source.end = this.getPosition(last[3] || last[2])

    while (tokens[0][0] !== 'word') {
      if (tokens.length === 1) this.unknownWord(tokens)
      node.raws.before += tokens.shift()[1]
    }
    node.source.start = this.getPosition(tokens[0][2])

    node.prop = ''
    while (tokens.length) {
      let type = tokens[0][0]
      if (type === ':' || type === 'space' || type === 'comment') {
        break
      }
      node.prop += tokens.shift()[1]
    }

    node.raws.between = ''

    let token
    while (tokens.length) {
      token = tokens.shift()

      if (token[0] === ':') {
        node.raws.between += token[1]
        break
      } else {
        if (token[0] === 'word' && /\w/.test(token[1])) {
          this.unknownWord([token])
        }
        node.raws.between += token[1]
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0]
      node.prop = node.prop.slice(1)
    }
    let firstSpaces = this.spacesAndCommentsFromStart(tokens)
    this.precheckMissedSemicolon(tokens)

    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i]
      if (token[1].toLowerCase() === '!important') {
        node.important = true
        let string = this.stringFrom(tokens, i)
        string = this.spacesFromEnd(tokens) + string
        if (string !== ' !important') node.raws.important = string
        break
      } else if (token[1].toLowerCase() === 'important') {
        let cache = tokens.slice(0)
        let str = ''
        for (let j = i; j > 0; j--) {
          let type = cache[j][0]
          if (str.trim().indexOf('!') === 0 && type !== 'space') {
            break
          }
          str = cache.pop()[1] + str
        }
        if (str.trim().indexOf('!') === 0) {
          node.important = true
          node.raws.important = str
          tokens = cache
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break
      }
    }

    let hasWord = tokens.some(i => i[0] !== 'space' && i[0] !== 'comment')
    this.raw(node, 'value', tokens)
    if (hasWord) {
      node.raws.between += firstSpaces
    } else {
      node.value = firstSpaces + node.value
    }

    if (node.value.includes(':') && !customProperty) {
      this.checkMissedSemicolon(tokens)
    }
  }

  atrule(token) {
    let node = new AtRule()
    node.name = token[1].slice(1)
    if (node.name === '') {
      this.unnamedAtrule(node, token)
    }
    this.init(node, token[2])

    let type
    let prev
    let shift
    let last = false
    let open = false
    let params = []
    let brackets = []

    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()
      type = token[0]

      if (type === '(' || type === '[') {
        brackets.push(type === '(' ? ')' : ']')
      } else if (type === '{' && brackets.length > 0) {
        brackets.push('}')
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
      }

      if (brackets.length === 0) {
        if (type === ';') {
          node.source.end = this.getPosition(token[2])
          this.semicolon = true
          break
        } else if (type === '{') {
          open = true
          break
        } else if (type === '}') {
          if (params.length > 0) {
            shift = params.length - 1
            prev = params[shift]
            while (prev && prev[0] === 'space') {
              prev = params[--shift]
            }
            if (prev) {
              node.source.end = this.getPosition(prev[3] || prev[2])
            }
          }
          this.end(token)
          break
        } else {
          params.push(token)
        }
      } else {
        params.push(token)
      }

      if (this.tokenizer.endOfFile()) {
        last = true
        break
      }
    }

    node.raws.between = this.spacesAndCommentsFromEnd(params)
    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params)
      this.raw(node, 'params', params)
      if (last) {
        token = params[params.length - 1]
        node.source.end = this.getPosition(token[3] || token[2])
        this.spaces = node.raws.between
        node.raws.between = ''
      }
    } else {
      node.raws.afterName = ''
      node.params = ''
    }

    if (open) {
      node.nodes = []
      this.current = node
    }
  }

  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.semicolon = false

    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.spaces = ''

    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2])
      this.current = this.current.parent
    } else {
      this.unexpectedClose(token)
    }
  }

  endFile() {
    if (this.current.parent) this.unclosedBlock()
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.current.raws.after = (this.current.raws.after || '') + this.spaces
  }

  freeSemicolon(token) {
    this.spaces += token[1]
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1]
      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces
        this.spaces = ''
      }
    }
  }

  // Helpers

  getPosition(offset) {
    let pos = this.input.fromOffset(offset)
    return {
      offset,
      line: pos.line,
      column: pos.col
    }
  }

  init(node, offset) {
    this.current.push(node)
    node.source = {
      start: this.getPosition(offset),
      input: this.input
    }
    node.raws.before = this.spaces
    this.spaces = ''
    if (node.type !== 'comment') this.semicolon = false
  }

  raw(node, prop, tokens) {
    let token, type
    let length = tokens.length
    let value = ''
    let clean = true
    let next, prev
    let pattern = /^([#.|])?(\w)+/i

    for (let i = 0; i < length; i += 1) {
      token = tokens[i]
      type = token[0]

      if (type === 'comment' && node.type === 'rule') {
        prev = tokens[i - 1]
        next = tokens[i + 1]

        if (
          prev[0] !== 'space' &&
          next[0] !== 'space' &&
          pattern.test(prev[1]) &&
          pattern.test(next[1])
        ) {
          value += token[1]
        } else {
          clean = false
        }

        continue
      }

      if (type === 'comment' || (type === 'space' && i === length - 1)) {
        clean = false
      } else {
        value += token[1]
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], '')
      node.raws[prop] = { value, raw }
    }
    node[prop] = value
  }

  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  spacesAndCommentsFromStart(tokens) {
    let next
    let spaces = ''
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      spaces += tokens.shift()[1]
    }
    return spaces
  }

  spacesFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  stringFrom(tokens, from) {
    let result = ''
    for (let i = from; i < tokens.length; i++) {
      result += tokens[i][1]
    }
    tokens.splice(from, tokens.length - from)
    return result
  }

  colon(tokens) {
    let brackets = 0
    let token, type, prev
    for (let [i, element] of tokens.entries()) {
      token = element
      type = token[0]

      if (type === '(') {
        brackets += 1
      }
      if (type === ')') {
        brackets -= 1
      }
      if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token)
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue
        } else {
          return i
        }
      }

      prev = token
    }
    return false
  }

  // Errors

  unclosedBracket(bracket) {
    throw this.input.error(
      'Unclosed bracket',
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    )
  }

  unknownWord(tokens) {
    throw this.input.error(
      'Unknown word',
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    )
  }

  unexpectedClose(token) {
    throw this.input.error(
      'Unexpected }',
      { offset: token[2] },
      { offset: token[2] + 1 }
    )
  }

  unclosedBlock() {
    let pos = this.current.source.start
    throw this.input.error('Unclosed block', pos.line, pos.column)
  }

  doubleColon(token) {
    throw this.input.error(
      'Double colon',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }

  unnamedAtrule(node, token) {
    throw this.input.error(
      'At-rule without name',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }

  precheckMissedSemicolon(/* tokens */) {
    // Hook for Safe Parser
  }

  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens)
    if (colon === false) return

    let founded = 0
    let token
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j]
      if (token[0] !== 'space') {
        founded += 1
        if (founded === 2) break
      }
    }
    // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
    // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
    // And because we need it after that one we do +1 to get the next one.
    throw this.input.error(
      'Missed semicolon',
      token[0] === 'word' ? token[3] + 1 : token[2]
    )
  }
}

module.exports = Parser


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(35)

class AtRule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'atrule'
  }

  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.append(...children)
  }

  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.prepend(...children)
  }
}

module.exports = AtRule
AtRule.default = AtRule

Container.registerAtRule(AtRule)


/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(35)

let LazyResult, Processor

class Root extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'root'
    if (!this.nodes) this.nodes = []
  }

  removeChild(child, ignore) {
    let index = this.index(child)

    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before
    }

    return super.removeChild(child)
  }

  normalize(child, sample, type) {
    let nodes = super.normalize(child)

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before
        } else {
          delete sample.raws.before
        }
      } else if (this.first !== sample) {
        for (let node of nodes) {
          node.raws.before = sample.raws.before
        }
      }
    }

    return nodes
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)
    return lazy.stringify()
  }
}

Root.registerLazyResult = dependant => {
  LazyResult = dependant
}

Root.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Root
Root.default = Root


/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(35)
let list = __webpack_require__(46)

class Rule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'rule'
    if (!this.nodes) this.nodes = []
  }

  get selectors() {
    return list.comma(this.selector)
  }

  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null
    let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen')
    this.selector = values.join(sep)
  }
}

module.exports = Rule
Rule.default = Rule

Container.registerRule(Rule)


/***/ }),
/* 46 */
/***/ ((module) => {

"use strict";


let list = {
  split(string, separators, last) {
    let array = []
    let current = ''
    let split = false

    let func = 0
    let quote = false
    let escape = false

    for (let letter of string) {
      if (escape) {
        escape = false
      } else if (letter === '\\') {
        escape = true
      } else if (quote) {
        if (letter === quote) {
          quote = false
        }
      } else if (letter === '"' || letter === "'") {
        quote = letter
      } else if (letter === '(') {
        func += 1
      } else if (letter === ')') {
        if (func > 0) func -= 1
      } else if (func === 0) {
        if (separators.includes(letter)) split = true
      }

      if (split) {
        if (current !== '') array.push(current.trim())
        current = ''
        split = false
      } else {
        current += letter
      }
    }

    if (last || current !== '') array.push(current.trim())
    return array
  },

  space(string) {
    let spaces = [' ', '\n', '\t']
    return list.split(string, spaces)
  },

  comma(string) {
    return list.split(string, [','], true)
  }
}

module.exports = list
list.default = list


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let NoWorkResult = __webpack_require__(48)
let LazyResult = __webpack_require__(16)
let Document = __webpack_require__(37)
let Root = __webpack_require__(44)

class Processor {
  constructor(plugins = []) {
    this.version = '8.4.5'
    this.plugins = this.normalize(plugins)
  }

  use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]))
    return this
  }

  process(css, opts = {}) {
    if (
      this.plugins.length === 0 &&
      typeof opts.parser === 'undefined' &&
      typeof opts.stringifier === 'undefined' &&
      typeof opts.syntax === 'undefined'
    ) {
      return new NoWorkResult(this, css, opts)
    } else {
      return new LazyResult(this, css, opts)
    }
  }

  normalize(plugins) {
    let normalized = []
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i()
      } else if (i.postcss) {
        i = i.postcss
      }

      if (typeof i === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins)
      } else if (typeof i === 'object' && i.postcssPlugin) {
        normalized.push(i)
      } else if (typeof i === 'function') {
        normalized.push(i)
      } else if (typeof i === 'object' && (i.parse || i.stringify)) {
        if (process.env.NODE_ENV !== 'production') {
          throw new Error(
            'PostCSS syntaxes cannot be used as plugins. Instead, please use ' +
              'one of the syntax/parser/stringifier options as outlined ' +
              'in your PostCSS runner documentation.'
          )
        }
      } else {
        throw new Error(i + ' is not a PostCSS plugin')
      }
    }
    return normalized
  }
}

module.exports = Processor
Processor.default = Processor

Root.registerProcessor(Processor)
Document.registerProcessor(Processor)


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let MapGenerator = __webpack_require__(17)
let stringify = __webpack_require__(15)
let warnOnce = __webpack_require__(38)
let parse = __webpack_require__(41)
const Result = __webpack_require__(39)

class NoWorkResult {
  constructor(processor, css, opts) {
    css = css.toString()
    this.stringified = false

    this._processor = processor
    this._css = css
    this._opts = opts
    this._map = undefined
    let root

    let str = stringify
    this.result = new Result(this._processor, root, this._opts)
    this.result.css = css

    let self = this
    Object.defineProperty(this.result, 'root', {
      get() {
        return self.root
      }
    })

    let map = new MapGenerator(str, root, this._opts, css)
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate()
      if (generatedCSS) {
        this.result.css = generatedCSS
      }
      if (generatedMap) {
        this.result.map = generatedMap
      }
    }
  }

  get [Symbol.toStringTag]() {
    return 'NoWorkResult'
  }

  get processor() {
    return this.result.processor
  }

  get opts() {
    return this.result.opts
  }

  get css() {
    return this.result.css
  }

  get content() {
    return this.result.css
  }

  get map() {
    return this.result.map
  }

  get root() {
    if (this._root) {
      return this._root
    }

    let root
    let parser = parse

    try {
      root = parser(this._css, this._opts)
    } catch (error) {
      this.error = error
    }

    this._root = root

    return root
  }

  get messages() {
    return []
  }

  warnings() {
    return []
  }

  toString() {
    return this._css
  }

  then(onFulfilled, onRejected) {
    if (process.env.NODE_ENV !== 'production') {
      if (!('from' in this._opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }

    return this.async().then(onFulfilled, onRejected)
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    return Promise.resolve(this.result)
  }

  sync() {
    if (this.error) throw this.error
    return this.result
  }
}

module.exports = NoWorkResult
NoWorkResult.default = NoWorkResult


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Declaration = __webpack_require__(11)
let PreviousMap = __webpack_require__(33)
let Comment = __webpack_require__(36)
let AtRule = __webpack_require__(43)
let Input = __webpack_require__(31)
let Root = __webpack_require__(44)
let Rule = __webpack_require__(45)

function fromJSON(json, inputs) {
  if (Array.isArray(json)) return json.map(n => fromJSON(n))

  let { inputs: ownInputs, ...defaults } = json
  if (ownInputs) {
    inputs = []
    for (let input of ownInputs) {
      let inputHydrated = { ...input, __proto__: Input.prototype }
      if (inputHydrated.map) {
        inputHydrated.map = {
          ...inputHydrated.map,
          __proto__: PreviousMap.prototype
        }
      }
      inputs.push(inputHydrated)
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map(n => fromJSON(n, inputs))
  }
  if (defaults.source) {
    let { inputId, ...source } = defaults.source
    defaults.source = source
    if (inputId != null) {
      defaults.source.input = inputs[inputId]
    }
  }
  if (defaults.type === 'root') {
    return new Root(defaults)
  } else if (defaults.type === 'decl') {
    return new Declaration(defaults)
  } else if (defaults.type === 'rule') {
    return new Rule(defaults)
  } else if (defaults.type === 'comment') {
    return new Comment(defaults)
  } else if (defaults.type === 'atrule') {
    return new AtRule(defaults)
  } else {
    throw new Error('Unknown node type: ' + json.type)
  }
}

module.exports = fromJSON
fromJSON.default = fromJSON


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const matches = __webpack_require__(51);
const gray = __webpack_require__(124);
const colorMod = __webpack_require__(152);

const creator = (options) => {
	options = Object(options);
	return {
		postcssPlugin: 'postcss-migrate-6.7.0-to-7',
		plugins: [
			matches.plugin(Object(options)['postcss-selector-matches']),
			gray(Object(options)['postcss-color-gray']),
			colorMod(Object(options)['postcss-color-mod-function'])
		]
	};
};

creator.postcss = true;

module.exports = creator;


/***/ }),
/* 51 */
/***/ ((module) => {

// Balanced Match

// (MIT)
// Copyright (c) 2013 Julian Gruber <julian@juliangruber.com>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * @param {string | RegExp} a
 * @param {string | RegExp} b
 * @param {string} str
 */
function balanced (a, b, str) {
	if (a instanceof RegExp) a = maybeMatch(a, str)
	if (b instanceof RegExp) b = maybeMatch(b, str)

	const r = range(a, b, str)

	return (
		r && {
			start: r[0],
			end: r[1],
			pre: str.slice(0, r[0]),
			body: str.slice(r[0] + a.length, r[1]),
			post: str.slice(r[1] + b.length)
		}
	)
}

/**
 * @param {RegExp} reg
 * @param {string} str
 */
function maybeMatch (reg, str) {
	const m = str.match(reg)
	return m ? m[0] : null
}

balanced.range = range

/**
 * @param {string} a
 * @param {string} b
 * @param {string} str
 */
function range (a, b, str) {
	let begs, beg, left, right, result
	let ai = str.indexOf(a)
	let bi = str.indexOf(b, ai + 1)
	let i = ai

	if (ai >= 0 && bi > 0) {
		if (a === b) {
			return [ai, bi]
		}
		begs = []
		left = str.length

		while (i >= 0 && !result) {
			if (i === ai) {
				begs.push(i)
				ai = str.indexOf(a, i + 1)
			} else if (begs.length === 1) {
				result = [begs.pop(), bi]
			} else {
				beg = begs.pop()
				if (beg < left) {
					left = beg
					right = bi
				}

				bi = str.indexOf(b, i + 1)
			}

			i = ai < bi && ai >= 0 ? ai : bi
		}

		if (begs.length) {
			result = [left, right]
		}
	}

	return result
}

// Selector Matches
// The MIT License (MIT)

// Copyright (c) 2017 Maxime Thirouin

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


const pseudoClass = ":matches"
const selectorElementRE = /^[a-zA-Z]/

function isElementSelector(selector) {
	const matches = selectorElementRE.exec(selector)
	// console.log({selector, matches})
	return matches
}

function normalizeSelector(selector, preWhitespace, pre) {
	if (isElementSelector(selector) && !isElementSelector(pre)) {
		return `${ preWhitespace}${ selector }${ pre }`
	}

	return `${ preWhitespace }${ pre }${ selector }`
}

function explodeSelector(selector, list, options) {
	if (selector && selector.indexOf(pseudoClass) > -1) {
		let newSelectors = []
		const preWhitespaceMatches = selector.match(/^\s+/)
		const preWhitespace = preWhitespaceMatches
			? preWhitespaceMatches[0]
			: ""
		const selectorPart = list.comma(selector)
		selectorPart.forEach(part => {
			const position = part.indexOf(pseudoClass)
			const pre = part.slice(0, position)
			const body = part.slice(position)
			const matches = balanced("(", ")", body)

			const bodySelectors = matches && matches.body ?
				list
					.comma(matches.body)
					.reduce((acc, s) => [
						...acc,
						...explodeSelector(s, list, options),
					], [])
				: [body]

			const postSelectors = matches && matches.post
				? explodeSelector(matches.post, list, options)
				: []

			let newParts
			if (postSelectors.length === 0) {
				// the test below is a poor way to try we are facing a piece of a
				// selector...
				if (position === -1 || pre.indexOf(" ") > -1) {
					newParts = bodySelectors.map((s) => preWhitespace + pre + s)
				}
				else {
					newParts = bodySelectors.map((s) => (
						normalizeSelector(s, preWhitespace, pre)
					))
				}
			}
			else {
				newParts = []
				postSelectors.forEach(postS => {
					bodySelectors.forEach(s => {
						newParts.push(preWhitespace + pre + s + postS)
					})
				})
			}
			newSelectors = [
				...newSelectors,
				...newParts,
			]
		})

		return newSelectors
	}
	return [selector]
}

function replaceRuleSelector(rule, list, options) {
	const indentation = rule.raws && rule.raws.before
		? rule.raws.before.split("\n").pop()
		: ""
	return (
		explodeSelector(rule.selector, list, options)
			.join("," + (options.lineBreak ? "\n" + indentation : " "))
	)
}

const creator = (options) => {
	options = Object(options);
	return {
		postcssPlugin: 'postcss-matches',
		Rule(rule, { list }) {
			if (rule.selector && rule.selector.indexOf(":matches") > -1) {
				rule.selector = replaceRuleSelector(rule, list, options)
			}
		},
	};
};

creator.postcss = true;

module.exports = {
	plugin: creator
};



/***/ }),
/* 52 */,
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.migrate670To7 = void 0;
const vscode = __webpack_require__(1);
const apply_migration_1 = __webpack_require__(54);
const migration = __webpack_require__(50);
async function migrate670To7(cmdEditor, cmdEdit) {
    if (!cmdEditor) {
        return;
    }
    if (!cmdEditor.document) {
        return;
    }
    if (!cmdEditor.selections?.length) {
        return;
    }
    for (const selection of cmdEditor.selections) {
        const range = new vscode.Range(selection.start, selection.end);
        const source = cmdEditor.document.getText(range);
        await (0, apply_migration_1.applyMigrations)(cmdEditor, cmdEdit, range, [migration()], source);
    }
}
exports.migrate670To7 = migrate670To7;


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyMigrations = void 0;
const log_1 = __webpack_require__(55);
const postcss = __webpack_require__(5);
async function applyMigrations(cmdEditor, cmdEdit, range, plugins, source) {
    await postcss(plugins).process(source, {
        from: cmdEditor.document.uri.fsPath,
    }).then((result) => {
        log_1.log.appendLine('[postcss-preset-env-migration] migrated css');
        const transformed = result.css;
        cmdEditor.edit((editBuilder) => {
            editBuilder.replace(range, transformed);
        });
    }).catch((err) => {
        log_1.log.appendLine('[postcss-preset-env-migration] ' + err.message);
    });
}
exports.applyMigrations = applyMigrations;


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.log = void 0;
const vscode = __webpack_require__(1);
exports.log = vscode.window.createOutputChannel("vscode-postcss-preset-env-migrations");


/***/ }),
/* 56 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(57);
var walk = __webpack_require__(58);
var stringify = __webpack_require__(59);

function ValueParser(value) {
  if (this instanceof ValueParser) {
    this.nodes = parse(value);
    return this;
  }
  return new ValueParser(value);
}

ValueParser.prototype.toString = function() {
  return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};

ValueParser.prototype.walk = function(cb, bubble) {
  walk(this.nodes, cb, bubble);
  return this;
};

ValueParser.unit = __webpack_require__(60);

ValueParser.walk = walk;

ValueParser.stringify = stringify;

module.exports = ValueParser;


/***/ }),
/* 57 */
/***/ ((module) => {

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;

module.exports = function(input) {
  var tokens = [];
  var value = input;

  var next,
    quote,
    prev,
    token,
    escape,
    escapePos,
    whitespacePos,
    parenthesesOpenPos;
  var pos = 0;
  var code = value.charCodeAt(pos);
  var max = value.length;
  var stack = [{ nodes: tokens }];
  var balanced = 0;
  var parent;

  var name = "";
  var before = "";
  var after = "";

  while (pos < max) {
    // Whitespaces
    if (code <= 32) {
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      token = value.slice(pos, next);

      prev = tokens[tokens.length - 1];
      if (code === closeParentheses && balanced) {
        after = token;
      } else if (prev && prev.type === "div") {
        prev.after = token;
        prev.sourceEndIndex += token.length;
      } else if (
        code === comma ||
        code === colon ||
        (code === slash &&
          value.charCodeAt(next + 1) !== star &&
          (!parent ||
            (parent && parent.type === "function" && parent.value !== "calc")))
      ) {
        before = token;
      } else {
        tokens.push({
          type: "space",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      }

      pos = next;

      // Quotes
    } else if (code === singleQuote || code === doubleQuote) {
      next = pos;
      quote = code === singleQuote ? "'" : '"';
      token = {
        type: "string",
        sourceIndex: pos,
        quote: quote
      };
      do {
        escape = false;
        next = value.indexOf(quote, next + 1);
        if (~next) {
          escapePos = next;
          while (value.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escape = !escape;
          }
        } else {
          value += quote;
          next = value.length - 1;
          token.unclosed = true;
        }
      } while (escape);
      token.value = value.slice(pos + 1, next);
      token.sourceEndIndex = token.unclosed ? next : next + 1;
      tokens.push(token);
      pos = next + 1;
      code = value.charCodeAt(pos);

      // Comments
    } else if (code === slash && value.charCodeAt(pos + 1) === star) {
      next = value.indexOf("*/", pos);

      token = {
        type: "comment",
        sourceIndex: pos,
        sourceEndIndex: next + 2
      };

      if (next === -1) {
        token.unclosed = true;
        next = value.length;
        token.sourceEndIndex = next;
      }

      token.value = value.slice(pos + 2, next);
      tokens.push(token);

      pos = next + 2;
      code = value.charCodeAt(pos);

      // Operation within calc
    } else if (
      (code === slash || code === star) &&
      parent &&
      parent.type === "function" &&
      parent.value === "calc"
    ) {
      token = value[pos];
      tokens.push({
        type: "word",
        sourceIndex: pos - before.length,
        sourceEndIndex: pos + token.length,
        value: token
      });
      pos += 1;
      code = value.charCodeAt(pos);

      // Dividers
    } else if (code === slash || code === comma || code === colon) {
      token = value[pos];

      tokens.push({
        type: "div",
        sourceIndex: pos - before.length,
        sourceEndIndex: pos + token.length,
        value: token,
        before: before,
        after: ""
      });
      before = "";

      pos += 1;
      code = value.charCodeAt(pos);

      // Open parentheses
    } else if (openParentheses === code) {
      // Whitespaces after open parentheses
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      parenthesesOpenPos = pos;
      token = {
        type: "function",
        sourceIndex: pos - name.length,
        value: name,
        before: value.slice(parenthesesOpenPos + 1, next)
      };
      pos = next;

      if (name === "url" && code !== singleQuote && code !== doubleQuote) {
        next -= 1;
        do {
          escape = false;
          next = value.indexOf(")", next + 1);
          if (~next) {
            escapePos = next;
            while (value.charCodeAt(escapePos - 1) === backslash) {
              escapePos -= 1;
              escape = !escape;
            }
          } else {
            value += ")";
            next = value.length - 1;
            token.unclosed = true;
          }
        } while (escape);
        // Whitespaces before closed
        whitespacePos = next;
        do {
          whitespacePos -= 1;
          code = value.charCodeAt(whitespacePos);
        } while (code <= 32);
        if (parenthesesOpenPos < whitespacePos) {
          if (pos !== whitespacePos + 1) {
            token.nodes = [
              {
                type: "word",
                sourceIndex: pos,
                sourceEndIndex: whitespacePos + 1,
                value: value.slice(pos, whitespacePos + 1)
              }
            ];
          } else {
            token.nodes = [];
          }
          if (token.unclosed && whitespacePos + 1 !== next) {
            token.after = "";
            token.nodes.push({
              type: "space",
              sourceIndex: whitespacePos + 1,
              sourceEndIndex: next,
              value: value.slice(whitespacePos + 1, next)
            });
          } else {
            token.after = value.slice(whitespacePos + 1, next);
            token.sourceEndIndex = next;
          }
        } else {
          token.after = "";
          token.nodes = [];
        }
        pos = next + 1;
        token.sourceEndIndex = token.unclosed ? next : pos;
        code = value.charCodeAt(pos);
        tokens.push(token);
      } else {
        balanced += 1;
        token.after = "";
        token.sourceEndIndex = pos + 1;
        tokens.push(token);
        stack.push(token);
        tokens = token.nodes = [];
        parent = token;
      }
      name = "";

      // Close parentheses
    } else if (closeParentheses === code && balanced) {
      pos += 1;
      code = value.charCodeAt(pos);

      parent.after = after;
      parent.sourceEndIndex += after.length;
      after = "";
      balanced -= 1;
      stack[stack.length - 1].sourceEndIndex = pos;
      stack.pop();
      parent = stack[balanced];
      tokens = parent.nodes;

      // Words
    } else {
      next = pos;
      do {
        if (code === backslash) {
          next += 1;
        }
        next += 1;
        code = value.charCodeAt(next);
      } while (
        next < max &&
        !(
          code <= 32 ||
          code === singleQuote ||
          code === doubleQuote ||
          code === comma ||
          code === colon ||
          code === slash ||
          code === openParentheses ||
          (code === star &&
            parent &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === slash &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === closeParentheses && balanced)
        )
      );
      token = value.slice(pos, next);

      if (openParentheses === code) {
        name = token;
      } else if (
        (uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) &&
        plus === token.charCodeAt(1) &&
        isUnicodeRange.test(token.slice(2))
      ) {
        tokens.push({
          type: "unicode-range",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      } else {
        tokens.push({
          type: "word",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      }

      pos = next;
    }
  }

  for (pos = stack.length - 1; pos; pos -= 1) {
    stack[pos].unclosed = true;
    stack[pos].sourceEndIndex = value.length;
  }

  return stack[0].nodes;
};


/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = function walk(nodes, cb, bubble) {
  var i, max, node, result;

  for (i = 0, max = nodes.length; i < max; i += 1) {
    node = nodes[i];
    if (!bubble) {
      result = cb(node, i, nodes);
    }

    if (
      result !== false &&
      node.type === "function" &&
      Array.isArray(node.nodes)
    ) {
      walk(node.nodes, cb, bubble);
    }

    if (bubble) {
      cb(node, i, nodes);
    }
  }
};


/***/ }),
/* 59 */
/***/ ((module) => {

function stringifyNode(node, custom) {
  var type = node.type;
  var value = node.value;
  var buf;
  var customResult;

  if (custom && (customResult = custom(node)) !== undefined) {
    return customResult;
  } else if (type === "word" || type === "space") {
    return value;
  } else if (type === "string") {
    buf = node.quote || "";
    return buf + value + (node.unclosed ? "" : buf);
  } else if (type === "comment") {
    return "/*" + value + (node.unclosed ? "" : "*/");
  } else if (type === "div") {
    return (node.before || "") + value + (node.after || "");
  } else if (Array.isArray(node.nodes)) {
    buf = stringify(node.nodes, custom);
    if (type !== "function") {
      return buf;
    }
    return (
      value +
      "(" +
      (node.before || "") +
      buf +
      (node.after || "") +
      (node.unclosed ? "" : ")")
    );
  }
  return value;
}

function stringify(nodes, custom) {
  var result, i;

  if (Array.isArray(nodes)) {
    result = "";
    for (i = nodes.length - 1; ~i; i -= 1) {
      result = stringifyNode(nodes[i], custom) + result;
    }
    return result;
  }
  return stringifyNode(nodes, custom);
}

module.exports = stringify;


/***/ }),
/* 60 */
/***/ ((module) => {

var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);

// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
  var code = value.charCodeAt(0);
  var nextCode;

  if (code === plus || code === minus) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    var nextNextCode = value.charCodeAt(2);

    if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code === dot) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code >= 48 && code <= 57) {
    return true;
  }

  return false;
}

// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
  var pos = 0;
  var length = value.length;
  var code;
  var nextCode;
  var nextNextCode;

  if (length === 0 || !likeNumber(value)) {
    return false;
  }

  code = value.charCodeAt(pos);

  if (code === plus || code === minus) {
    pos++;
  }

  while (pos < length) {
    code = value.charCodeAt(pos);

    if (code < 48 || code > 57) {
      break;
    }

    pos += 1;
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);

  if (code === dot && nextCode >= 48 && nextCode <= 57) {
    pos += 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);
  nextNextCode = value.charCodeAt(pos + 2);

  if (
    (code === exp || code === EXP) &&
    ((nextCode >= 48 && nextCode <= 57) ||
      ((nextCode === plus || nextCode === minus) &&
        nextNextCode >= 48 &&
        nextNextCode <= 57))
  ) {
    pos += nextCode === plus || nextCode === minus ? 3 : 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  return {
    number: value.slice(0, pos),
    unit: value.slice(pos)
  };
};


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgb2hwb": () => (/* binding */ rgb2hwb),
/* harmony export */   "hwb2rgb": () => (/* binding */ hwb2rgb)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _rgb_hsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



/* Convert between RGB and HWB
/* ========================================================================== */

function rgb2hwb(rgbR, rgbG, rgbB, fallbackhue) {
	const hwbH = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2hue)(rgbR, rgbG, rgbB, fallbackhue);
	const hwbW = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2whiteness)(rgbR, rgbG, rgbB);
	const hwbV = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2value)(rgbR, rgbG, rgbB);
	const hwbB = 100 - hwbV;

	return [hwbH, hwbW, hwbB];
}

function hwb2rgb(hwbH, hwbW, hwbB, fallbackhue) {
	const [ rgbR, rgbG, rgbB ] = (0,_rgb_hsl__WEBPACK_IMPORTED_MODULE_1__.hsl2rgb)(hwbH, 100, 50, fallbackhue).map(
		v => v * (100 - hwbW - hwbB) / 100 + hwbW
	);

	return [ rgbR, rgbG, rgbB ];
}

/*

References
----------

- https://www.w3.org/TR/css-color-4/#hwb-to-rgb
- http://alvyray.com/Papers/CG/hwb2rgb.htm

/* ========================================================================== */


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgb2hsv": () => (/* binding */ rgb2hsv),
/* harmony export */   "hsv2rgb": () => (/* binding */ hsv2rgb)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/* Convert between RGB and HSV
/* ========================================================================== */

function rgb2hsv(rgbR, rgbG, rgbB, fallbackhue) {
	const hsvV = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2value)(rgbR, rgbG, rgbB);
	const hsvW = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2whiteness)(rgbR, rgbG, rgbB);
	const hsvH = (0,_util__WEBPACK_IMPORTED_MODULE_0__.rgb2hue)(rgbR, rgbG, rgbB, fallbackhue);

	// calculate saturation
	const hsvS = hsvV === hsvW ? 0 : (hsvV - hsvW) / hsvV * 100;

	return [ hsvH, hsvS, hsvV ];
}

function hsv2rgb(hsvH, hsvS, hsvV) {
	const rgbI = Math.floor(hsvH / 60);

	// calculate rgb parts
	const rgbF = hsvH / 60 - rgbI & 1 ? hsvH / 60 - rgbI : 1 - hsvH / 60 - rgbI;
	const rgbM = hsvV * (100 - hsvS) / 100;
	const rgbN = hsvV * (100 - hsvS * rgbF) / 100;

	const [ rgbR, rgbG, rgbB ] = rgbI === 5
		? [ hsvV, rgbM, rgbN ]
	: rgbI === 4
		? [ rgbN, rgbM, hsvV ]
	: rgbI === 3
		? [ rgbM, rgbN, hsvV ]
	: rgbI === 2
		? [ rgbM, hsvV, rgbN ]
	: rgbI === 1
		? [ rgbN, hsvV, rgbM ]
	: [ hsvV, rgbN, rgbM ];

	return [ rgbR, rgbG, rgbB ];
}

/*

References
----------

- http://alvyray.com/Papers/CG/hsv2rgb.htm

/* ========================================================================== */


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgb2xyz": () => (/* binding */ rgb2xyz),
/* harmony export */   "xyz2rgb": () => (/* binding */ xyz2rgb)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/* Convert between RGB and XYZ
/* ========================================================================== */

function rgb2xyz(rgbR, rgbG, rgbB) {
	const [ lrgbR, lrgbB, lrgbG ] = [ rgbR, rgbG, rgbB ].map(
		v => v > 4.045 ? Math.pow((v + 5.5) / 105.5, 2.4) * 100 : v / 12.92
	);

	const [ xyzX, xyzY, xyzZ ] = (0,_util__WEBPACK_IMPORTED_MODULE_0__.matrix)([ lrgbR, lrgbB, lrgbG ], [
		[0.4124564, 0.3575761, 0.1804375],
		[0.2126729, 0.7151522, 0.0721750],
		[0.0193339, 0.1191920, 0.9503041]
	]);

	return [ xyzX, xyzY, xyzZ ];
}

function xyz2rgb(xyzX, xyzY, xyzZ) {
	const [ lrgbR, lrgbB, lrgbG ] = (0,_util__WEBPACK_IMPORTED_MODULE_0__.matrix)([ xyzX, xyzY, xyzZ ], [
		[ 3.2404542, -1.5371385, -0.4985314],
		[-0.9692660,  1.8760108,  0.0415560],
		[ 0.0556434, -0.2040259,  1.0572252]
	]);

	const [ rgbR, rgbG, rgbB ] = [ lrgbR, lrgbB, lrgbG ].map(
		v => v > 0.31308 ? 1.055 * Math.pow(v / 100, 1 / 2.4) * 100 - 5.5 : 12.92 * v
	);

	return [ rgbR, rgbG, rgbB ];
}

/*

References
----------

- https://www.w3.org/TR/css-color-4/#rgb-to-lab
- https://www.w3.org/TR/css-color-4/#color-conversion-code

/* ========================================================================== */


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hsl2hsv": () => (/* binding */ hsl2hsv),
/* harmony export */   "hsv2hsl": () => (/* binding */ hsv2hsl)
/* harmony export */ });
/* Convert between HSL and HSV
/* ========================================================================== */

function hsl2hsv(hslH, hslS, hslL) {
	const hsv1 = hslS * (hslL < 50 ? hslL : 100 - hslL) / 100;
	const hsvS = hsv1 === 0 ? 0 : 2 * hsv1 / (hslL + hsv1) * 100;
	const hsvV = hslL + hsv1;

	return [ hslH, hsvS, hsvV ];
}

function hsv2hsl(hsvH, hsvS, hsvV) {
	const hslL = (200 - hsvS) * hsvV / 100;

	const [ hslS, hslV ] = [
		hslL === 0 || hslL === 200 ? 0 : hsvS * hsvV / 100 / (hslL <= 100 ? hslL : 200 - hslL) * 100,
		hslL * 5 / 10
	];

	return [ hsvH, hslS, hslV ];
}

/*

References
----------

- https://gist.github.com/defims/0ca2ef8832833186ed396a2f8a204117

/* ========================================================================== */


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hwb2hsv": () => (/* binding */ hwb2hsv),
/* harmony export */   "hsv2hwb": () => (/* binding */ hsv2hwb)
/* harmony export */ });
/* Convert between HWB and HSV
/* ========================================================================== */

function hwb2hsv(hwbH, hwbW, hwbB) {
	const [ hsvH, hsvS, hsvV ] = [
		hwbH,
		hwbB === 100 ? 0 : 100 - hwbW / (100 - hwbB) * 100,
		100 - hwbB
	];

	return [ hsvH, hsvS, hsvV ];
}

function hsv2hwb(hsvH, hsvS, hsvV) {
	const [ hwbH, hwbW, hwbB ] = [
		hsvH,
		(100 - hsvS) * hsvV / 100,
		100 - hsvV
	];

	return [ hwbH, hwbW, hwbB ];
}

/*

References
----------

- https://en.wikipedia.org/wiki/HWB_color_model#Converting_to_and_from_HSV

/* ========================================================================== */


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lab2xyz": () => (/* binding */ lab2xyz),
/* harmony export */   "xyz2lab": () => (/* binding */ xyz2lab)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/* Convert between Lab and XYZ
/* ========================================================================== */

function lab2xyz(labL, labA, labB) {
	// compute f, starting with the luminance-related term
	const f2 = (labL + 16) / 116;
	const f1 = labA / 500 + f2;
	const f3 = f2 - labB / 200;

	// compute pre-scaled XYZ
	const [ initX, initY, initZ ] = [
		Math.pow(f1, 3) > _util__WEBPACK_IMPORTED_MODULE_0__.epsilon ? Math.pow(f1, 3)                : (116 * f1 - 16) / _util__WEBPACK_IMPORTED_MODULE_0__.kappa,
		labL > _util__WEBPACK_IMPORTED_MODULE_0__.kappa * _util__WEBPACK_IMPORTED_MODULE_0__.epsilon    ? Math.pow((labL + 16) / 116, 3) : labL / _util__WEBPACK_IMPORTED_MODULE_0__.kappa,
		Math.pow(f3, 3) > _util__WEBPACK_IMPORTED_MODULE_0__.epsilon ? Math.pow(f3, 3)                : (116 * f3 - 16) / _util__WEBPACK_IMPORTED_MODULE_0__.kappa
	];

	const [ xyzX, xyzY, xyzZ ] = (0,_util__WEBPACK_IMPORTED_MODULE_0__.matrix)(
		// compute XYZ by scaling pre-scaled XYZ by reference white
		[ initX * _util__WEBPACK_IMPORTED_MODULE_0__.wd50X, initY * _util__WEBPACK_IMPORTED_MODULE_0__.wd50Y, initZ * _util__WEBPACK_IMPORTED_MODULE_0__.wd50Z ],
		// calculate D65 XYZ from D50 XYZ
		[
			[ 0.9555766, -0.0230393,  0.0631636],
			[-0.0282895,  1.0099416,  0.0210077],
			[ 0.0122982, -0.0204830,  1.3299098]
		]
	);

	return [ xyzX, xyzY, xyzZ ];
}

function xyz2lab(xyzX, xyzY, xyzZ) {
	// calculate D50 XYZ from D65 XYZ
	const [ d50X, d50Y, d50Z ] = (0,_util__WEBPACK_IMPORTED_MODULE_0__.matrix)([ xyzX, xyzY, xyzZ ], [
		[ 1.0478112,  0.0228866, -0.0501270],
		[ 0.0295424,  0.9904844, -0.0170491],
		[-0.0092345,  0.0150436,  0.7521316]
	]);

	// calculate f
	const [ f1, f2, f3 ] = [
		d50X / _util__WEBPACK_IMPORTED_MODULE_0__.wd50X,
		d50Y / _util__WEBPACK_IMPORTED_MODULE_0__.wd50Y,
		d50Z / _util__WEBPACK_IMPORTED_MODULE_0__.wd50Z
	].map(
		value => value > _util__WEBPACK_IMPORTED_MODULE_0__.epsilon ? Math.cbrt(value) : (_util__WEBPACK_IMPORTED_MODULE_0__.kappa * value + 16) / 116
	);

	const [ labL, labA, labB ] = [
		116 * f2 - 16,
		500 * (f1 - f2),
		200 * (f2 - f3)
	];

	return [ labL, labA, labB ];
}

/*

References
----------

- https://www.w3.org/TR/css-color-4/#rgb-to-lab
- https://www.w3.org/TR/css-color-4/#color-conversion-code
- https://www.easyrgb.com/en/math.php

/* ========================================================================== */


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lab2lch": () => (/* binding */ lab2lch),
/* harmony export */   "lch2lab": () => (/* binding */ lch2lab)
/* harmony export */ });
/* Convert between Lab and XYZ
/* ========================================================================== */

function lab2lch(labL, labA, labB) {
	const [ lchC, lchH ] = [
		Math.sqrt(Math.pow(labA, 2) + Math.pow(labB, 2)), // convert to chroma
		Math.atan2(labB, labA) * 180 / Math.PI // convert to hue, in degrees
	];

	return [ labL, lchC, lchH ];
}

function lch2lab(lchL, lchC, lchH) {
	// convert to Lab a and b from the polar form
	const [ labA, labB ] = [
		lchC * Math.cos(lchH * Math.PI / 180),
		lchC * Math.sin(lchH * Math.PI / 180)
	];

	return [ lchL, labA, labB ];
}

/*

References
----------

- https://www.w3.org/TR/css-color-4/#lch-to-lab
- https://www.w3.org/TR/css-color-4/#color-conversion-code

/* ========================================================================== */


/***/ }),
/* 68 */
/***/ ((module) => {

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let customAlphabet = (alphabet, size) => {
  return () => {
    let id = ''
    let i = size
    while (i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}
let nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}
module.exports = { nanoid, customAlphabet }


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Parser = __webpack_require__(91);
const AtWord = __webpack_require__(96);
const Colon = __webpack_require__(97);
const Comma = __webpack_require__(98);
const Comment = __webpack_require__(99);
const Func = __webpack_require__(100);
const Num = __webpack_require__(101);
const Operator = __webpack_require__(102);
const Paren = __webpack_require__(103);
const Str = __webpack_require__(104);
const UnicodeRange = __webpack_require__(106);
const Value = __webpack_require__(95);
const Word = __webpack_require__(105);

let parser = function (source, options) {
  return new Parser(source, options);
};

parser.atword = function (opts) {
  return new AtWord(opts);
};

parser.colon = function (opts) {
  return new Colon(Object.assign({ value: ':' }, opts));
};

parser.comma = function (opts) {
  return new Comma(Object.assign({ value: ',' }, opts));
};

parser.comment = function (opts) {
  return new Comment(opts);
};

parser.func = function (opts) {
  return new Func(opts);
};

parser.number = function (opts) {
  return new Num(opts);
};

parser.operator = function (opts) {
  return new Operator(opts);
};

parser.paren = function (opts) {
  return new Paren(Object.assign({ value: '(' }, opts));
};

parser.string = function (opts) {
  return new Str(Object.assign({ quote: '\'' }, opts));
};

parser.value = function (opts) {
  return new Value(opts);
};

parser.word = function (opts) {
  return new Word(opts);
};

parser.unicodeRange = function (opts) {
  return new UnicodeRange(opts);
};

module.exports = parser;


/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Root = __webpack_require__(92);
const Value = __webpack_require__(95);

const AtWord = __webpack_require__(96);
const Colon = __webpack_require__(97);
const Comma = __webpack_require__(98);
const Comment = __webpack_require__(99);
const Func = __webpack_require__(100);
const Numbr = __webpack_require__(101);
const Operator = __webpack_require__(102);
const Paren = __webpack_require__(103);
const Str = __webpack_require__(104);
const Word = __webpack_require__(105);
const UnicodeRange = __webpack_require__(106);

const tokenize = __webpack_require__(107);

const flatten = __webpack_require__(110);
const indexesOf = __webpack_require__(111);
const uniq = __webpack_require__(112);
const ParserError = __webpack_require__(113);

function sortAscending (list) {
  return list.sort((a, b) => a - b);
}

module.exports = class Parser {
  constructor (input, options) {
    const defaults = { loose: false };

    // cache needs to be an array for values with more than 1 level of function nesting
    this.cache = [];
    this.input = input;
    this.options = Object.assign({}, defaults, options);
    this.position = 0;
    // we'll use this to keep track of the paren balance
    this.unbalanced = 0;
    this.root = new Root();

    let value = new Value();

    this.root.append(value);

    this.current = value;
    this.tokens = tokenize(input, this.options);
  }

  parse () {
    return this.loop();
  }

  colon () {
    let token = this.currToken;

    this.newNode(new Colon({
      value: token[1],
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6]
    }));

    this.position ++;
  }

  comma () {
    let token = this.currToken;

    this.newNode(new Comma({
      value: token[1],
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6]
    }));

    this.position ++;
  }

  comment () {
    let inline = false,
      value = this.currToken[1].replace(/\/\*|\*\//g, ''),
      node;

    if (this.options.loose && value.startsWith("//")) {
      value = value.substring(2);
      inline = true;
    }

    node = new Comment({
      value: value,
      inline: inline,
      source: {
        start: {
          line: this.currToken[2],
          column: this.currToken[3]
        },
        end: {
          line: this.currToken[4],
          column: this.currToken[5]
        }
      },
      sourceIndex: this.currToken[6]
    });

    this.newNode(node);
    this.position++;
  }

  error (message, token) {
    throw new ParserError(message + ` at line: ${token[2]}, column ${token[3]}`);
  }

  loop () {
    while (this.position < this.tokens.length) {
      this.parseTokens();
    }

    if (!this.current.last && this.spaces) {
      this.current.raws.before += this.spaces;
    }
    else if (this.spaces) {
      this.current.last.raws.after += this.spaces;
    }

    this.spaces = '';

    return this.root;
  }

  operator () {

    // if a +|- operator is followed by a non-word character (. is allowed) and
    // is preceded by a non-word character. (5+5)
    let char = this.currToken[1],
      node;

    if (char === '+' || char === '-') {
      // only inspect if the operator is not the first token, and we're only
      // within a calc() function: the only spec-valid place for math expressions
      if (!this.options.loose) {
        if (this.position > 0) {
          if (this.current.type === 'func' && this.current.value === 'calc') {
            // allow operators to be proceeded by spaces and opening parens
            if (this.prevToken[0] !== 'space' && this.prevToken[0] !== '(') {
              this.error('Syntax Error', this.currToken);
            }
            // valid: calc(1 - +2)
            // invalid: calc(1 -+2)
            else if (this.nextToken[0] !== 'space' && this.nextToken[0] !== 'word') {
              this.error('Syntax Error', this.currToken);
            }
            // valid: calc(1 - +2)
            // valid: calc(-0.5 + 2)
            // invalid: calc(1 -2)
            else if (this.nextToken[0] === 'word' && this.current.last.type !== 'operator' &&
                     this.current.last.value !== '(') {
              this.error('Syntax Error', this.currToken);
            }
          }
          // if we're not in a function and someone has doubled up on operators,
          // or they're trying to perform a calc outside of a calc
          // eg. +-4px or 5+ 5, throw an error
          else if (this.nextToken[0] === 'space'
                  || this.nextToken[0] === 'operator'
                  || this.prevToken[0] === 'operator') {
            this.error('Syntax Error', this.currToken);
          }
        }
      }

      if (!this.options.loose) {
        if (this.nextToken[0] === 'word') {
          return this.word();
        }
      }
      else {
        if ((!this.current.nodes.length || (this.current.last && this.current.last.type === 'operator')) && this.nextToken[0] === 'word') {
          return this.word();
        }
      }
    }

    node = new Operator({
      value: this.currToken[1],
      source: {
        start: {
          line: this.currToken[2],
          column: this.currToken[3]
        },
        end: {
          line: this.currToken[2],
          column: this.currToken[3]
        }
      },
      sourceIndex: this.currToken[4]
    });

    this.position ++;

    return this.newNode(node);
  }

  parseTokens () {
    switch (this.currToken[0]) {
      case 'space':
        this.space();
        break;
      case 'colon':
        this.colon();
        break;
      case 'comma':
        this.comma();
        break;
      case 'comment':
        this.comment();
        break;
      case '(':
        this.parenOpen();
        break;
      case ')':
        this.parenClose();
        break;
      case 'atword':
      case 'word':
        this.word();
        break;
      case 'operator':
        this.operator();
        break;
      case 'string':
        this.string();
        break;
      case 'unicoderange':
        this.unicodeRange();
        break;
      default:
        this.word();
        break;
    }
  }

  parenOpen () {
    let unbalanced = 1,
      pos = this.position + 1,
      token = this.currToken,
      last;

    // check for balanced parens
    while (pos < this.tokens.length && unbalanced) {
      let tkn = this.tokens[pos];

      if (tkn[0] === '(') {
        unbalanced++;
      }
      if (tkn[0] === ')') {
        unbalanced--;
      }
      pos ++;
    }

    if (unbalanced) {
      this.error('Expected closing parenthesis', token);
    }

    // ok, all parens are balanced. continue on

    last = this.current.last;

    if (last && last.type === 'func' && last.unbalanced < 0) {
      last.unbalanced = 0; // ok we're ready to add parens now
      this.current = last;
    }

    this.current.unbalanced ++;

    this.newNode(new Paren({
      value: token[1],
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6]
    }));

    this.position ++;

    // url functions get special treatment, and anything between the function
    // parens get treated as one word, if the contents aren't not a string.
    if (this.current.type === 'func' && this.current.unbalanced &&
        this.current.value === 'url' && this.currToken[0] !== 'string' &&
        this.currToken[0] !== ')' && !this.options.loose) {

      let nextToken = this.nextToken,
        value = this.currToken[1],
        start = {
          line: this.currToken[2],
          column: this.currToken[3]
        };

      while (nextToken && nextToken[0] !== ')' && this.current.unbalanced) {
        this.position ++;
        value += this.currToken[1];
        nextToken = this.nextToken;
      }

      if (this.position !== this.tokens.length - 1) {
        // skip the following word definition, or it'll be a duplicate
        this.position ++;

        this.newNode(new Word({
          value,
          source: {
            start,
            end: {
              line: this.currToken[4],
              column: this.currToken[5]
            }
          },
          sourceIndex: this.currToken[6]
        }));
      }
    }
  }

  parenClose () {
    let token = this.currToken;

    this.newNode(new Paren({
      value: token[1],
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6]
    }));

    this.position ++;

    if (this.position >= this.tokens.length - 1 && !this.current.unbalanced) {
      return;
    }

    this.current.unbalanced --;

    if (this.current.unbalanced < 0) {
      this.error('Expected opening parenthesis', token);
    }

    if (!this.current.unbalanced && this.cache.length) {
      this.current = this.cache.pop();
    }
  }

  space () {
    let token = this.currToken;
    // Handle space before and after the selector
    if (this.position === (this.tokens.length - 1) || this.nextToken[0] === ',' || this.nextToken[0] === ')') {
      this.current.last.raws.after += token[1];
      this.position ++;
    }
    else {
      this.spaces = token[1];
      this.position ++;
    }
  }

  unicodeRange () {
    let token = this.currToken;

    this.newNode(new UnicodeRange({
      value: token[1],
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6]
    }));

    this.position ++;
  }

  splitWord () {
    let nextToken = this.nextToken,
      word = this.currToken[1],
      rNumber = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/,

      // treat css-like groupings differently so they can be inspected,
      // but don't address them as anything but a word, but allow hex values
      // to pass through.
      rNoFollow = /^(?!\#([a-z0-9]+))[\#\{\}]/gi,

      hasAt, indices;

    if (!rNoFollow.test(word)) {
      while (nextToken && nextToken[0] === 'word') {
        this.position ++;

        let current = this.currToken[1];
        word += current;

        nextToken = this.nextToken;
      }
    }

    hasAt = indexesOf(word, '@');
    indices = sortAscending(uniq(flatten([[0], hasAt])));

    indices.forEach((ind, i) => {
      let index = indices[i + 1] || word.length,
        value = word.slice(ind, index),
        node;

      if (~hasAt.indexOf(ind)) {
        node = new AtWord({
          value: value.slice(1),
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3] + ind
            },
            end: {
              line: this.currToken[4],
              column: this.currToken[3] + (index - 1)
            }
          },
          sourceIndex: this.currToken[6] + indices[i]
        });
      }
      else if (rNumber.test(this.currToken[1])) {
        let unit = value.replace(rNumber, '');

        node = new Numbr({
          value: value.replace(unit, ''),
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3] + ind
            },
            end: {
              line: this.currToken[4],
              column: this.currToken[3] + (index - 1)
            }
          },
          sourceIndex: this.currToken[6] + indices[i],
          unit
        });
      }
      else {
        node = new (nextToken && nextToken[0] === '(' ? Func : Word)({
          value,
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3] + ind
            },
            end: {
              line: this.currToken[4],
              column: this.currToken[3] + (index - 1)
            }
          },
          sourceIndex: this.currToken[6] + indices[i]
        });

        if (node.constructor.name === 'Word') {
          node.isHex = /^#(.+)/.test(value);
          node.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value);
        }
        else {
          this.cache.push(this.current);
        }
      }

      this.newNode(node);

    });

    this.position ++;
  }

  string () {
    let token = this.currToken,
      value = this.currToken[1],
      rQuote = /^(\"|\')/,
      quoted = rQuote.test(value),
      quote = '',
      node;

    if (quoted) {
      quote = value.match(rQuote)[0];
      // set value to the string within the quotes
      // quotes are stored in raws
      value = value.slice(1, value.length - 1);
    }

    node = new Str({
      value,
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6],
      quoted
    });

    node.raws.quote = quote;

    this.newNode(node);
    this.position++;
  }

  word () {
    return this.splitWord();
  }

  newNode (node) {
    if (this.spaces) {
      node.raws.before += this.spaces;
      this.spaces = '';
    }

    return this.current.append(node);
  }

  get currToken () {
    return this.tokens[this.position];
  }

  get nextToken () {
    return this.tokens[this.position + 1];
  }

  get prevToken () {
    return this.tokens[this.position - 1];
  }
};


/***/ }),
/* 92 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);

module.exports = class Root extends Container {
  constructor (opts) {
    super(opts);
    this.type = 'root';
  }
};


/***/ }),
/* 93 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Node = __webpack_require__(94);

class Container extends Node {

  constructor (opts) {
    super(opts);

    if (!this.nodes) {
      this.nodes = [];
    }
  }

  push (child) {
    child.parent = this;
    this.nodes.push(child);
    return this;
  }

  each (callback) {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = { };

    this.lastEach += 1;

    let id = this.lastEach,
      index,
      result;

    this.indexes[id] = 0;

    if (!this.nodes) return undefined;

    while (this.indexes[id] < this.nodes.length) {
      index  = this.indexes[id];
      result = callback(this.nodes[index], index);
      if (result === false) break;

      this.indexes[id] += 1;
    }

    delete this.indexes[id];

    return result;
  }

  walk (callback) {
    return this.each((child, i) => {
      let result = callback(child, i);
      if (result !== false && child.walk) {
        result = child.walk(callback);
      }
      return result;
    });
  }

  walkType (type, callback) {
    if (!type || !callback) {
      throw new Error('Parameters {type} and {callback} are required.');
    }

    // allow users to pass a constructor, or node type string; eg. Word.
    const isTypeCallable = typeof type === 'function';

    return this.walk((node, index) => {
      if (isTypeCallable && node instanceof type || !isTypeCallable && node.type === type) {
        return callback.call(this, node, index);
      }
    });
  }

  append (node) {
    node.parent = this;
    this.nodes.push(node);
    return this;
  }

  prepend (node) {
    node.parent = this;
    this.nodes.unshift(node);
    return this;
  }

  cleanRaws (keepBetween) {
    super.cleanRaws(keepBetween);
    if (this.nodes) {
      for (let node of this.nodes) node.cleanRaws(keepBetween);
    }
  }

  insertAfter (oldNode, newNode) {
    let oldIndex = this.index(oldNode),
      index;

    this.nodes.splice(oldIndex + 1, 0, newNode);

    for (let id in this.indexes) {
      index = this.indexes[id];
      if (oldIndex <= index) {
        this.indexes[id] = index + this.nodes.length;
      }
    }

    return this;
  }

  insertBefore (oldNode, newNode) {
    let oldIndex = this.index(oldNode),
      index;

    this.nodes.splice(oldIndex, 0, newNode);

    for (let id in this.indexes) {
      index = this.indexes[id];
      if (oldIndex <= index) {
        this.indexes[id] = index + this.nodes.length;
      }
    }

    return this;
  }

  removeChild (child) {
    child = this.index(child);
    this.nodes[child].parent = undefined;
    this.nodes.splice(child, 1);

    let index;
    for (let id in this.indexes) {
      index = this.indexes[id];
      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  }

  removeAll () {
    for (let node of this.nodes) node.parent = undefined;
    this.nodes = [];
    return this;
  }

  every (condition) {
    return this.nodes.every(condition);
  }

  some (condition) {
    return this.nodes.some(condition);
  }

  index (child) {
    if (typeof child === 'number') {
      return child;
    }
    else {
      return this.nodes.indexOf(child);
    }
  }

  get first () {
    if (!this.nodes) return undefined;
    return this.nodes[0];
  }

  get last () {
    if (!this.nodes) return undefined;
    return this.nodes[this.nodes.length - 1];
  }

  toString () {
    let result = this.nodes.map(String).join('');

    if (this.value) {
      result = this.value + result;
    }

    if (this.raws.before) {
      result = this.raws.before + result;
    }

    if (this.raws.after) {
      result += this.raws.after;
    }

    return result;
  }
}

Container.registerWalker = (constructor) => {
  let walkerName = 'walk' + constructor.name;

  // plural sugar
  if (walkerName.lastIndexOf('s') !== walkerName.length - 1) {
    walkerName += 's';
  }

  if (Container.prototype[walkerName]) {
    return;
  }

  // we need access to `this` so we can't use an arrow function
  Container.prototype[walkerName] = function (callback) {
    return this.walkType(constructor, callback);
  };
};

module.exports = Container;


/***/ }),
/* 94 */
/***/ ((module) => {

"use strict";


let cloneNode = function (obj, parent) {
  let cloned = new obj.constructor();

  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    let value = obj[i],
      type  = typeof value;

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent;
    }
    else if (i === 'source') {
      cloned[i] = value;
    }
    else if (value instanceof Array) {
      cloned[i] = value.map(j => cloneNode(j, cloned));
    }
    else if (i !== 'before'  && i !== 'after' && i !== 'between' && i !== 'semicolon') {
      if (type === 'object' && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }

  return cloned;
};

module.exports = class Node {

  constructor (defaults) {
    defaults = defaults || {};
    this.raws = { before: '', after: '' };

    for (let name in defaults) {
      this[name] = defaults[name];
    }
  }

  remove () {
    if (this.parent) {
      this.parent.removeChild(this);
    }

    this.parent = undefined;

    return this;
  }

  toString () {
    return [
      this.raws.before,
      String(this.value),
      this.raws.after
    ].join('');
  }

  clone (overrides) {
    overrides = overrides || {};

    let cloned = cloneNode(this);

    for (let name in overrides) {
      cloned[name] = overrides[name];
    }

    return cloned;
  }

  cloneBefore (overrides) {
    overrides = overrides || {};

    let cloned = this.clone(overrides);

    this.parent.insertBefore(this, cloned);
    return cloned;
  }

  cloneAfter (overrides) {
    overrides = overrides || {};

    let cloned = this.clone(overrides);

    this.parent.insertAfter(this, cloned);
    return cloned;
  }

  replaceWith () {
    let nodes = Array.prototype.slice.call(arguments);

    if (this.parent) {
      for (let node of nodes) {
        this.parent.insertBefore(this, node);
      }

      this.remove();
    }

    return this;
  }

  moveTo (container) {
    this.cleanRaws(this.root() === container.root());
    this.remove();

    container.append(this);

    return this;
  }

  moveBefore (node) {
    this.cleanRaws(this.root() === node.root());
    this.remove();

    node.parent.insertBefore(node, this);

    return this;
  }

  moveAfter (node) {
    this.cleanRaws(this.root() === node.root());
    this.remove();
    node.parent.insertAfter(node, this);
    return this;
  }

  next () {
    let index = this.parent.index(this);

    return this.parent.nodes[index + 1];
  }

  prev () {
    let index = this.parent.index(this);

    return this.parent.nodes[index - 1];
  }

  toJSON () {
    let fixed = { };

    for (let name in this) {
      if (!this.hasOwnProperty(name)) continue;
      if (name === 'parent') continue;
      let value = this[name];

      if (value instanceof Array) {
        fixed[name] = value.map(i => {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON();
          }
          else {
            return i;
          }
        });
      }
      else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON();
      }
      else {
        fixed[name] = value;
      }
    }

    return fixed;
  }

  root () {
    let result = this;

    while (result.parent) result = result.parent;

    return result;
  }

  cleanRaws (keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  }

  positionInside (index) {
    let string = this.toString(),
      column = this.source.start.column,
      line   = this.source.start.line;

    for (let i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1;
        line  += 1;
      }
      else {
        column += 1;
      }
    }

    return { line, column };
  }

  positionBy (opts) {
    let pos = this.source.start;

    if (Object(opts).index) {
      pos = this.positionInside(opts.index);
    }
    else if (Object(opts).word) {
      let index = this.toString().indexOf(opts.word);
      if (index !== -1) pos = this.positionInside(index);
    }

    return pos;
  }
};


/***/ }),
/* 95 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);

module.exports = class Value extends Container {
  constructor (opts) {
    super(opts);
    this.type = 'value';
    this.unbalanced = 0;
  }
};


/***/ }),
/* 96 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);

class AtWord extends Container {
  constructor (opts) {
    super(opts);
    this.type = 'atword';
  }

  toString () {
    let quote = this.quoted ? this.raws.quote : '';
    return [
      this.raws.before,
      '@',
      // we can't use String() here because it'll try using itself
      // as the constructor
      String.prototype.toString.call(this.value),
      this.raws.after
    ].join('');
  }
}

Container.registerWalker(AtWord);

module.exports = AtWord;


/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class Colon extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'colon';
  }
}

Container.registerWalker(Colon);

module.exports = Colon;


/***/ }),
/* 98 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class Comma extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'comma';
  }
}

Container.registerWalker(Comma);

module.exports = Comma;


/***/ }),
/* 99 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class Comment extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'comment';
    this.inline = Object(opts).inline || false;
  }

  toString () {
    return [
      this.raws.before,
      this.inline ? '//' : '/*',
      String(this.value),
      this.inline ? '' : '*/',
      this.raws.after
    ].join('');
  }
};

Container.registerWalker(Comment);

module.exports = Comment;


/***/ }),
/* 100 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);

class FunctionNode extends Container {
  constructor (opts) {
    super(opts);
    this.type = 'func';
    // start off at -1 so we know there haven't been any parens added
    this.unbalanced = -1;
  }
};

Container.registerWalker(FunctionNode);

module.exports = FunctionNode;


/***/ }),
/* 101 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class NumberNode extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'number';
    this.unit = Object(opts).unit || '';
  }

  toString () {
    return [
      this.raws.before,
      String(this.value),
      this.unit,
      this.raws.after
    ].join('');
  }
};

Container.registerWalker(NumberNode);

module.exports = NumberNode;


/***/ }),
/* 102 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class Operator extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'operator';
  }
}

Container.registerWalker(Operator);

module.exports = Operator;


/***/ }),
/* 103 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class Parenthesis extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'paren';
    this.parenType = '';
  }
}

Container.registerWalker(Parenthesis);

module.exports = Parenthesis;


/***/ }),
/* 104 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class StringNode extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'string';
  }

  toString () {
    let quote = this.quoted ? this.raws.quote : '';
    return [
      this.raws.before,
      quote,
      // we can't use String() here because it'll try using itself
      // as the constructor
      this.value + '',
      quote,
      this.raws.after
    ].join('');
  }
}

Container.registerWalker(StringNode);

module.exports = StringNode;


/***/ }),
/* 105 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class Word extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'word';
  }
}

Container.registerWalker(Word);

module.exports = Word;


/***/ }),
/* 106 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Container = __webpack_require__(93);
const Node = __webpack_require__(94);

class UnicodeRange extends Node {
  constructor (opts) {
    super(opts);
    this.type = 'unicode-range';
  }
}

Container.registerWalker(UnicodeRange);

module.exports = UnicodeRange;


/***/ }),
/* 107 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const openBracket = '{'.charCodeAt(0);
const closeBracket = '}'.charCodeAt(0);
const openParen = '('.charCodeAt(0);
const closeParen = ')'.charCodeAt(0);
const singleQuote = '\''.charCodeAt(0);
const doubleQuote = '"'.charCodeAt(0);
const backslash = '\\'.charCodeAt(0);
const slash = '/'.charCodeAt(0);
const period = '.'.charCodeAt(0);
const comma = ','.charCodeAt(0);
const colon = ':'.charCodeAt(0);
const asterisk = '*'.charCodeAt(0);
const minus = '-'.charCodeAt(0);
const plus = '+'.charCodeAt(0);
const pound = '#'.charCodeAt(0);
const newline = '\n'.charCodeAt(0);
const space = ' '.charCodeAt(0);
const feed = '\f'.charCodeAt(0);
const tab = '\t'.charCodeAt(0);
const cr = '\r'.charCodeAt(0);
const at = '@'.charCodeAt(0);
const lowerE = 'e'.charCodeAt(0);
const upperE = 'E'.charCodeAt(0);
const digit0 = '0'.charCodeAt(0);
const digit9 = '9'.charCodeAt(0);
const lowerU = 'u'.charCodeAt(0);
const upperU = 'U'.charCodeAt(0);
const atEnd = /[ \n\t\r\{\(\)'"\\;,/]/g;
const wordEnd = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
const wordEndNum = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g;
const alphaNum = /^[a-z0-9]/i;
const unicodeRange = /^[a-f0-9?\-]/i;

const util = __webpack_require__(108);
const TokenizeError = __webpack_require__(109);

module.exports = function tokenize (input, options) {

  options = options || {};

  let tokens = [],
    css = input.valueOf(),
    length = css.length,
    offset = -1,
    line =  1,
    pos =  0,
    parentCount = 0,
    isURLArg = null,

    code, next, quote, lines, last, content, escape, nextLine, nextOffset,
    escaped, escapePos, nextChar;

  function unclosed (what) {
    let message = util.format('Unclosed %s at line: %d, column: %d, token: %d', what, line, pos - offset, pos);
    throw new TokenizeError(message);
  }

  function tokenizeError () {
    let message = util.format('Syntax error at line: %d, column: %d, token: %d', line, pos - offset, pos);
    throw new TokenizeError(message);
  }

  while (pos < length) {
    code = css.charCodeAt(pos);

    if (code === newline) {
      offset = pos;
      line  += 1;
    }

    switch (code) {
      case newline:
      case space:
      case tab:
      case cr:
      case feed:
        next = pos;
        do {
          next += 1;
          code = css.charCodeAt(next);
          if (code === newline) {
            offset = next;
            line  += 1;
          }
        } while (code === space   ||
          code === newline ||
          code === tab     ||
          code === cr      ||
          code === feed);

        tokens.push(['space', css.slice(pos, next),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);

        pos = next - 1;
        break;

      case colon:
        next = pos + 1;
        tokens.push(['colon', css.slice(pos, next),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);

        pos = next - 1;
        break;

      case comma:
        next = pos + 1;
        tokens.push(['comma', css.slice(pos, next),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);

        pos = next - 1;
        break;

      case openBracket:
        tokens.push(['{', '{',
          line, pos  - offset,
          line, next - offset,
          pos
        ]);
        break;

      case closeBracket:
        tokens.push(['}', '}',
          line, pos  - offset,
          line, next - offset,
          pos
        ]);
        break;

      case openParen:
        parentCount++;
        isURLArg = !isURLArg && parentCount === 1 &&
          tokens.length > 0 &&
          tokens[tokens.length - 1][0] === "word" &&
          tokens[tokens.length - 1][1] === "url";
        tokens.push(['(', '(',
          line, pos  - offset,
          line, next - offset,
          pos
        ]);
        break;

      case closeParen:
        parentCount--;
        isURLArg = isURLArg && parentCount > 0;
        tokens.push([')', ')',
          line, pos  - offset,
          line, next - offset,
          pos
        ]);
        break;

      case singleQuote:
      case doubleQuote:
        quote = code === singleQuote ? '\'' : '"';
        next  = pos;
        do {
          escaped = false;
          next    = css.indexOf(quote, next + 1);
          if (next === -1) {
            unclosed('quote', quote);
          }
          escapePos = next;
          while (css.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        tokens.push(['string', css.slice(pos, next + 1),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);
        pos = next;
        break;

      case at:
        atEnd.lastIndex = pos + 1;
        atEnd.test(css);

        if (atEnd.lastIndex === 0) {
          next = css.length - 1;
        }
        else {
          next = atEnd.lastIndex - 2;
        }

        tokens.push(['atword', css.slice(pos, next + 1),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);
        pos = next;
        break;

      case backslash:
        next   = pos;
        code = css.charCodeAt(next + 1);

        if (escape && (code !== slash && code !== space &&
                        code !== newline && code !== tab &&
                        code !== cr && code !== feed)) {
          next += 1;
        }

        tokens.push(['word', css.slice(pos, next + 1),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);

        pos = next;
        break;

      case plus:
      case minus:
      case asterisk:
        next = pos + 1;
        nextChar = css.slice(pos + 1, next + 1);

        let prevChar = css.slice(pos - 1, pos);

        // if the operator is immediately followed by a word character, then we
        // have a prefix of some kind, and should fall-through. eg. -webkit

        // look for --* for custom variables
        if (code === minus && nextChar.charCodeAt(0) === minus) {
          next++;

          tokens.push(['word', css.slice(pos, next),
            line, pos  - offset,
            line, next - offset,
            pos
          ]);

          pos = next - 1;
          break;
        }

        tokens.push(['operator', css.slice(pos, next),
          line, pos  - offset,
          line, next - offset,
          pos
        ]);

        pos = next - 1;
        break;

      default:
        if (code === slash && (css.charCodeAt(pos + 1) === asterisk || (options.loose && !isURLArg && css.charCodeAt(pos + 1) === slash))) {
          const isStandardComment = css.charCodeAt(pos + 1) === asterisk;

          if (isStandardComment) {
            next = css.indexOf('*/', pos + 2) + 1;
            if (next === 0) {
              unclosed('comment', '*/');
            }
          }
          else {
            const newlinePos = css.indexOf('\n', pos + 2);

            next = newlinePos !== -1 ? newlinePos - 1 : length;
          }

          content = css.slice(pos, next + 1);
          lines   = content.split('\n');
          last    = lines.length - 1;

          if (last > 0) {
            nextLine   = line + last;
            nextOffset = next - lines[last].length;
          }
          else {
            nextLine   = line;
            nextOffset = offset;
          }

          tokens.push(['comment', content,
            line,     pos  - offset,
            nextLine, next - nextOffset,
            pos
          ]);

          offset = nextOffset;
          line   = nextLine;
          pos    = next;

        }
        else if (code === pound && !alphaNum.test(css.slice(pos + 1, pos + 2))) {
          next = pos + 1;

          tokens.push(['#', css.slice(pos, next),
            line, pos  - offset,
            line, next - offset,
            pos
          ]);

          pos = next - 1;
        }
        else if ((code === lowerU || code === upperU) && css.charCodeAt(pos + 1) === plus) {
          next = pos + 2;

          do {
            next += 1;
            code = css.charCodeAt(next);
          } while (next < length && unicodeRange.test(css.slice(next, next + 1)));

          tokens.push(['unicoderange', css.slice(pos, next),
            line, pos  - offset,
            line, next - offset,
            pos
          ]);
          pos = next - 1;
        }
        // catch a regular slash, that isn't a comment
        else if (code === slash) {
          next = pos + 1;

          tokens.push(['operator', css.slice(pos, next),
            line, pos  - offset,
            line, next - offset,
            pos
          ]);

          pos = next - 1;
        }
        else {
          let regex = wordEnd;

          // we're dealing with a word that starts with a number
          // those get treated differently
          if (code >= digit0 && code <= digit9) {
            regex = wordEndNum;
          }

          regex.lastIndex = pos + 1;
          regex.test(css);

          if (regex.lastIndex === 0) {
            next = css.length - 1;
          }
          else {
            next = regex.lastIndex - 2;
          }

          // Exponential number notation with minus or plus: 1e-10, 1e+10
          if (regex === wordEndNum || code === period) {
            let ncode = css.charCodeAt(next),
              ncode1 = css.charCodeAt(next + 1),
              ncode2 = css.charCodeAt(next + 2);

            if (
              (ncode === lowerE || ncode === upperE) &&
              (ncode1 === minus || ncode1 === plus) &&
              (ncode2 >= digit0 && ncode2 <= digit9)
            ) {
              wordEndNum.lastIndex = next + 2;
              wordEndNum.test(css);

              if (wordEndNum.lastIndex === 0) {
                next = css.length - 1;
              }
              else {
                next = wordEndNum.lastIndex - 2;
              }
            }
          }

          tokens.push(['word', css.slice(pos, next + 1),
            line, pos  - offset,
            line, next - offset,
            pos
          ]);
          pos = next;
        }
        break;
    }

    pos ++;
  }

  return tokens;
};


/***/ }),
/* 108 */
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),
/* 109 */
/***/ ((module) => {

"use strict";


class TokenizeError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
    this.message = message || 'An error ocurred while tokzenizing.';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    }
    else {
      this.stack = (new Error(message)).stack;
    }
  }
}

module.exports = TokenizeError;


/***/ }),
/* 110 */
/***/ ((module) => {

module.exports = function flatten(list, depth) {
  depth = (typeof depth == 'number') ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function(i) { return i; });
    }
    return list;
  }

  return _flatten(list, 1);

  function _flatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      }
      else {
        return acc.concat(item);
      }
    }, []);
  }
};


/***/ }),
/* 111 */
/***/ ((module) => {

module.exports = function (ary, item) {
  var i = -1, indexes = []
  while((i = ary.indexOf(item, i + 1)) !== -1)
    indexes.push(i)
  return indexes
}


/***/ }),
/* 112 */
/***/ ((module) => {

"use strict";


function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique


/***/ }),
/* 113 */
/***/ ((module) => {

"use strict";


class ParserError extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
    this.message = message || 'An error ocurred while parsing.';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    }
    else {
      this.stack = (new Error(message)).stack;
    }
  }
}

module.exports = ParserError;


/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const valueParser = __webpack_require__(56);
const {lab2rgb} = __webpack_require__(0);

/**
 * @param {{preserve?: boolean}} opts
 * @returns {import('postcss').Plugin}
 */
module.exports = function creator(opts) {
	const preserve = Boolean(Object(opts).preserve);

	return {
		postcssPlugin: 'postcss-color-gray',
		// walk all declarations likely containing a gray() function
		Declaration(decl) {
			if (hasGrayFunction(decl)) {
				const { value: originalValue } = decl;

				// parse the declaration value
				const ast = valueParser(originalValue);

				// walk every node in the value that contains a gray() function
				ast.walk(node => {
					const [lightness, alpha] = getFunctionGrayArgs(node);

					if (lightness !== undefined) {
						// rename the gray() function to rgb()
						node.value = 'rgb';

						// convert the lab gray lightness into rgb
						const [r, g, b] = lab2rgb(lightness, 0, 0).map(
							channel => Math.max(Math.min(Math.round(channel * 2.55), 255), 0)
						);

						node.nodes = [
							{
								type: 'word',
								value: `${r}`,
							},
							{
								type: 'div',
								value: ',',
							},
							{
								type: 'word',
								value: `${g}`,
							},
							{
								type: 'div',
								value: ',',
							},
							{
								type: 'word',
								value: `${b}`,
							},
						];

						// if an alpha channel was defined
						if (alpha < 1) {
							// rename the rgb() function to rgba()
							node.value += 'a';

							node.nodes.push({
								type: 'div',
								value: ',',
							})

							node.nodes.push({
								type: 'word',
								value: `${alpha}`,
							});
						}
					}
				});

				const modifiedValue = ast.toString();

				// if the modified value has changed from the original value
				if (originalValue !== modifiedValue) {
					// if the original gray() color is to be preserved
					if (preserve) {
						// insert the declaration value with the fallback before the current declaration
						decl.cloneBefore({
							value: modifiedValue
						});
					} else {
						// otherwise, overwrite the declaration value with the fallback
						decl.value = modifiedValue;
					}
				}
			}
		}
	}
}

module.exports.postcss = true;

// return whether a string contains a gray() function
const hasGrayFunctionRegExp = /(^|[^\w-])gray\(/i;
const hasGrayFunction = decl => hasGrayFunctionRegExp.test(Object(decl).value);

// return whether a node matches a specific type
const isNumber = node => Object(node).type === 'word';
const isOperator = node => Object(node).type === 'div';
const isFunction = node => Object(node).type === 'function';
const isFunctionCalc = node => isFunction(node) && node.value === 'calc';
const isNumberPercentage = node => isNumber(node) && unit(node).unit === '%';
const isNumberUnitless = node => isNumber(node) && unit(node).unit === '';
const isOperatorSlash = node => isOperator(node) && node.value === '/';

// return valid values from a node, otherwise undefined
const getNumberUnitless = node => isNumberUnitless(node) ? Number(node.value) : undefined;
const getOperatorSlash = node => isOperatorSlash(node) ? null : undefined;
const getAlpha = node => isFunctionCalc(node)
	? String(node)
: isNumberUnitless(node)
	? Number(node.value)
: isNumberPercentage(node)
	? Number(unit(node).number) / 100
: undefined;

// return valid arguments from a gray() function
const functionalGrayArgs = [getNumberUnitless, getOperatorSlash, getAlpha];
const getFunctionGrayArgs = node => {
	const validArgs = [];

	// if the node is a gray() function with arguments
	if (node.value === 'gray' && node.type === 'function' && node.nodes && node.nodes.length) {
		// get all the gray() function arguments between `(` and `)`
		const nodes = node.nodes;

		// validate each argument
		for (const index in nodes) {
			const arg = typeof functionalGrayArgs[index] === 'function'
				? functionalGrayArgs[index](nodes[index])
				: undefined;

			// if the argument was validated
			if (arg !== undefined) {
				// push any non-null argument to the valid arguments array
				if (arg !== null) {
					validArgs.push(arg);
				}
			} else {
				// otherwise, return an empty array
				return [];
			}
		}

		// return the valid arguments array
		return validArgs;
	} else {
		// otherwise, return an empty array
		return [];
	}
}

function unit(node) {
	let fallback = {
		number: node.value,
		unit: ''
	};

	try {
		const u = valueParser.unit(node.value);
		if (!u) {
			return fallback;
		}

		return u;
	} catch (_) {
		return fallback;
	}
}


/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// # CC0 1.0 Universal

// ## Statement of Purpose

// The laws of most jurisdictions throughout the world automatically confer
// exclusive Copyright and Related Rights (defined below) upon the creator and
// subsequent owner(s) (each and all, an “owner”) of an original work of
// authorship and/or a database (each, a “Work”).

// Certain owners wish to permanently relinquish those rights to a Work for the
// purpose of contributing to a commons of creative, cultural and scientific works
// (“Commons”) that the public can reliably and without fear of later claims of
// infringement build upon, modify, incorporate in other works, reuse and
// redistribute as freely as possible in any form whatsoever and for any purposes,
// including without limitation commercial purposes. These owners may contribute
// to the Commons to promote the ideal of a free culture and the further
// production of creative, cultural and scientific works, or to gain reputation or
// greater distribution for their Work in part through the use and efforts of
// others.

// For these and/or other purposes and motivations, and without any expectation of
// additional consideration or compensation, the person associating CC0 with a
// Work (the “Affirmer”), to the extent that he or she is an owner of Copyright
// and Related Rights in the Work, voluntarily elects to apply CC0 to the Work and
// publicly distribute the Work under its terms, with knowledge of his or her
// Copyright and Related Rights in the Work and the meaning and intended legal
// effect of CC0 on those rights.

// 1. Copyright and Related Rights. A Work made available under CC0 may be
//    protected by copyright and related or neighboring rights (“Copyright and
//    Related Rights”). Copyright and Related Rights include, but are not limited
//    to, the following:
//    1. the right to reproduce, adapt, distribute, perform, display, communicate,
//       and translate a Work;
//    2. moral rights retained by the original author(s) and/or performer(s);
//    3. publicity and privacy rights pertaining to a person’s image or likeness
//       depicted in a Work;
//    4. rights protecting against unfair competition in regards to a Work,
//       subject to the limitations in paragraph 4(i), below;
//    5. rights protecting the extraction, dissemination, use and reuse of data in
//       a Work;
//    6. database rights (such as those arising under Directive 96/9/EC of the
//       European Parliament and of the Council of 11 March 1996 on the legal
//       protection of databases, and under any national implementation thereof,
//       including any amended or successor version of such directive); and
//    7. other similar, equivalent or corresponding rights throughout the world
//       based on applicable law or treaty, and any national implementations
//       thereof.

// 2. Waiver. To the greatest extent permitted by, but not in contravention of,
//    applicable law, Affirmer hereby overtly, fully, permanently, irrevocably and
//    unconditionally waives, abandons, and surrenders all of Affirmer’s Copyright
//    and Related Rights and associated claims and causes of action, whether now
//    known or unknown (including existing as well as future claims and causes of
//    action), in the Work (i) in all territories worldwide, (ii) for the maximum
//    duration provided by applicable law or treaty (including future time
//    extensions), (iii) in any current or future medium and for any number of
//    copies, and (iv) for any purpose whatsoever, including without limitation
//    commercial, advertising or promotional purposes (the “Waiver”). Affirmer
//    makes the Waiver for the benefit of each member of the public at large and
//    to the detriment of Affirmer’s heirs and successors, fully intending that
//    such Waiver shall not be subject to revocation, rescission, cancellation,
//    termination, or any other legal or equitable action to disrupt the quiet
//    enjoyment of the Work by the public as contemplated by Affirmer’s express
//    Statement of Purpose.

// 3. Public License Fallback. Should any part of the Waiver for any reason be
//    judged legally invalid or ineffective under applicable law, then the Waiver
//    shall be preserved to the maximum extent permitted taking into account
//    Affirmer’s express Statement of Purpose. In addition, to the extent the
//    Waiver is so judged Affirmer hereby grants to each affected person a
//    royalty-free, non transferable, non sublicensable, non exclusive,
//    irrevocable and unconditional license to exercise Affirmer’s Copyright and
//    Related Rights in the Work (i) in all territories worldwide, (ii) for the
//    maximum duration provided by applicable law or treaty (including future time
//    extensions), (iii) in any current or future medium and for any number of
//    copies, and (iv) for any purpose whatsoever, including without limitation
//    commercial, advertising or promotional purposes (the “License”). The License
//    shall be deemed effective as of the date CC0 was applied by Affirmer to the
//    Work. Should any part of the License for any reason be judged legally
//    invalid or ineffective under applicable law, such partial invalidity or
//    ineffectiveness shall not invalidate the remainder of the License, and in
//    such case Affirmer hereby affirms that he or she will not (i) exercise any
//    of his or her remaining Copyright and Related Rights in the Work or (ii)
//    assert any associated claims and causes of action with respect to the Work,
//    in either case contrary to Affirmer’s express Statement of Purpose.

// 4. Limitations and Disclaimers.
//    1. No trademark or patent rights held by Affirmer are waived, abandoned,
//       surrendered, licensed or otherwise affected by this document.
//    2. Affirmer offers the Work as-is and makes no representations or warranties
//       of any kind concerning the Work, express, implied, statutory or
//       otherwise, including without limitation warranties of title,
//       merchantability, fitness for a particular purpose, non infringement, or
//       the absence of latent or other defects, accuracy, or the present or
//       absence of errors, whether or not discoverable, all to the greatest
//       extent permissible under applicable law.
//    3. Affirmer disclaims responsibility for clearing rights of other persons
//       that may apply to the Work or any use thereof, including without
//       limitation any person’s Copyright and Related Rights in the Work.
//       Further, Affirmer disclaims responsibility for obtaining any necessary
//       consents, permissions or other rights required for any use of the Work.
//    4. Affirmer understands and acknowledges that Creative Commons is not a
//       party to this document and has no duty or obligation with respect to this
//       CC0 or use of the Work.

// For more information, please see
// http://creativecommons.org/publicdomain/zero/1.0/.



function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var valueParser = _interopDefault(__webpack_require__(90));
var fs = _interopDefault(__webpack_require__(34));
var path = _interopDefault(__webpack_require__(29));
var postcss = _interopDefault(__webpack_require__(5));
var convertColors = __webpack_require__(2);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getCustomProperties(root, opts) {
  // initialize custom selectors
  const customPropertiesFromHtmlElement = {};
  const customPropertiesFromRootPsuedo = {}; // for each html or :root rule

  root.nodes.slice().forEach(rule => {
    const customPropertiesObject = isHtmlRule(rule) ? customPropertiesFromHtmlElement : isRootRule(rule) ? customPropertiesFromRootPsuedo : null; // for each custom property

    if (customPropertiesObject) {
      rule.nodes.slice().forEach(decl => {
        if (isCustomDecl(decl)) {
          const prop = decl.prop; // write the parsed value to the custom property

          customPropertiesObject[prop] = valueParser(decl.value).parse(); // conditionally remove the custom property declaration

          if (!opts.preserve) {
            decl.remove();
          }
        }
      }); // conditionally remove the empty html or :root rule

      if (!opts.preserve && isEmptyParent(rule)) {
        rule.remove();
      }
    }
  }); // return all custom properties, preferring :root properties over html properties

  return _objectSpread2(_objectSpread2({}, customPropertiesFromHtmlElement), customPropertiesFromRootPsuedo);
} // match html and :root rules

const htmlSelectorRegExp = /^html$/i;
const rootSelectorRegExp = /^:root$/i;
const customPropertyRegExp = /^--[A-z][\w-]*$/; // whether the node is an html or :root rule

const isHtmlRule = node => node.type === 'rule' && htmlSelectorRegExp.test(node.selector) && Object(node.nodes).length;

const isRootRule = node => node.type === 'rule' && rootSelectorRegExp.test(node.selector) && Object(node.nodes).length; // whether the node is an custom property


const isCustomDecl = node => node.type === 'decl' && customPropertyRegExp.test(node.prop); // whether the node is a parent without children


const isEmptyParent = node => Object(node.nodes).length === 0;

/* Import Custom Properties from CSS AST
/* ========================================================================== */

function importCustomPropertiesFromCSSAST(root) {
  return getCustomProperties(root, {
    preserve: true
  });
}
/* Import Custom Properties from CSS File
/* ========================================================================== */


function importCustomPropertiesFromCSSFile(_x) {
  return _importCustomPropertiesFromCSSFile.apply(this, arguments);
}
/* Import Custom Properties from Object
/* ========================================================================== */


function _importCustomPropertiesFromCSSFile() {
  _importCustomPropertiesFromCSSFile = _asyncToGenerator(function* (from) {
    const css = yield readFile(from);
    const root = postcss.parse(css, {
      from
    });
    return importCustomPropertiesFromCSSAST(root);
  });
  return _importCustomPropertiesFromCSSFile.apply(this, arguments);
}

function importCustomPropertiesFromObject(object) {
  const customProperties = Object.assign({}, Object(object).customProperties || Object(object)['custom-properties']);

  for (const prop in customProperties) {
    customProperties[prop] = valueParser(customProperties[prop]).parse();
  }

  return customProperties;
}
/* Import Custom Properties from JSON file
/* ========================================================================== */


function importCustomPropertiesFromJSONFile(_x2) {
  return _importCustomPropertiesFromJSONFile.apply(this, arguments);
}
/* Import Custom Properties from JS file
/* ========================================================================== */


function _importCustomPropertiesFromJSONFile() {
  _importCustomPropertiesFromJSONFile = _asyncToGenerator(function* (from) {
    const object = yield readJSON(from);
    return importCustomPropertiesFromObject(object);
  });
  return _importCustomPropertiesFromJSONFile.apply(this, arguments);
}

function importCustomPropertiesFromJSFile(_x3) {
  return _importCustomPropertiesFromJSFile.apply(this, arguments);
}
/* Import Custom Properties from Sources
/* ========================================================================== */


function _importCustomPropertiesFromJSFile() {
  _importCustomPropertiesFromJSFile = _asyncToGenerator(function* (from) {
    const object = yield Promise.resolve(__webpack_require__(153)(from));
    return importCustomPropertiesFromObject(object);
  });
  return _importCustomPropertiesFromJSFile.apply(this, arguments);
}

function importCustomPropertiesFromSources(sources) {
  return sources.map(source => {
    if (source instanceof Promise) {
      return source;
    } else if (source instanceof Function) {
      return source();
    } // read the source as an object


    const opts = source === Object(source) ? source : {
      from: String(source)
    }; // skip objects with Custom Properties

    if (opts.customProperties || opts['custom-properties']) {
      return opts;
    } // source pathname


    const from = path.resolve(String(opts.from || '')); // type of file being read from

    const type = (opts.type || path.extname(from).slice(1)).toLowerCase();
    return {
      type,
      from
    };
  }).reduce( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (customProperties, source) {
      const _yield$source = yield source,
            type = _yield$source.type,
            from = _yield$source.from;

      if (type === 'ast') {
        return Object.assign(yield customProperties, importCustomPropertiesFromCSSAST(from));
      }

      if (type === 'css') {
        return Object.assign(yield customProperties, yield importCustomPropertiesFromCSSFile(from));
      }

      if (type === 'js') {
        return Object.assign(yield customProperties, yield importCustomPropertiesFromJSFile(from));
      }

      if (type === 'json') {
        return Object.assign(yield customProperties, yield importCustomPropertiesFromJSONFile(from));
      }

      return Object.assign(yield customProperties, yield importCustomPropertiesFromObject(yield source));
    });

    return function (_x4, _x5) {
      return _ref.apply(this, arguments);
    };
  }(), {});
}
/* Helper utilities
/* ========================================================================== */

const readFile = from => new Promise((resolve, reject) => {
  fs.readFile(from, 'utf8', (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});

const readJSON = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (from) {
    return JSON.parse(yield readFile(from));
  });

  return function readJSON(_x6) {
    return _ref2.apply(this, arguments);
  };
}();

/* Convert Degree to Hue Degree
/* ========================================================================== */
function convertDtoD(deg) {
  return deg % 360;
}
/* Convert Gradian to Hue Degree
/* ========================================================================== */

function convertGtoD(grad) {
  return grad * 0.9 % 360;
}
/* Convert Radian to Hue Degree
/* ========================================================================== */

function convertRtoD(rad) {
  return rad * 180 / Math.PI % 360;
}
/* Convert Turn to Hue Degree
/* ========================================================================== */

function convertTtoD(turn) {
  return turn * 360 % 360;
}
/* Convert a Name to Red/Green/Blue
/* ========================================================================== */

function convertNtoRGB(name) {
  const names = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    transparent: [0, 0, 0],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  return names[name] && names[name].map(c => c / 2.55);
}
/* Convert a Hex to Red/Green/Blue
/* ========================================================================== */

function convertHtoRGB(hex) {
  // #<hex-color>{3,4,6,8}
  const _slice = (hex.match(hexColorMatch) || []).slice(1),
        _slice2 = _slicedToArray(_slice, 8),
        r = _slice2[0],
        g = _slice2[1],
        b = _slice2[2],
        a = _slice2[3],
        rr = _slice2[4],
        gg = _slice2[5],
        bb = _slice2[6],
        aa = _slice2[7];

  if (rr !== undefined || r !== undefined) {
    const red = rr !== undefined ? parseInt(rr, 16) : r !== undefined ? parseInt(r + r, 16) : 0;
    const green = gg !== undefined ? parseInt(gg, 16) : g !== undefined ? parseInt(g + g, 16) : 0;
    const blue = bb !== undefined ? parseInt(bb, 16) : b !== undefined ? parseInt(b + b, 16) : 0;
    const alpha = aa !== undefined ? parseInt(aa, 16) : a !== undefined ? parseInt(a + a, 16) : 255;
    return [red, green, blue, alpha].map(c => c / 2.55);
  }

  return undefined;
}
const hexColorMatch = /^#(?:([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?|([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?)$/i;

class Color {
  constructor(color) {
    this.color = Object(Object(color).color || color);
    this.color.colorspace = this.color.colorspace ? this.color.colorspace : 'red' in color && 'green' in color && 'blue' in color ? 'rgb' : 'hue' in color && 'saturation' in color && 'lightness' in color ? 'hsl' : 'hue' in color && 'whiteness' in color && 'blackness' in color ? 'hwb' : 'unknown';

    if (color.colorspace === 'rgb') {
      this.color.hue = convertColors.rgb2hue(color.red, color.green, color.blue, color.hue || 0);
    }
  }

  alpha(alpha) {
    const color = this.color;
    return alpha === undefined ? color.alpha : new Color(assign(color, {
      alpha
    }));
  }

  blackness(blackness) {
    const hwb = color2hwb(this.color);
    return blackness === undefined ? hwb.blackness : new Color(assign(hwb, {
      blackness
    }));
  }

  blend(color, percentage, colorspace = 'rgb') {
    const base = this.color;
    return new Color(blend(base, color, percentage, colorspace));
  }

  blenda(color, percentage, colorspace = 'rgb') {
    const base = this.color;
    return new Color(blend(base, color, percentage, colorspace, true));
  }

  blue(blue) {
    const rgb = color2rgb(this.color);
    return blue === undefined ? rgb.blue : new Color(assign(rgb, {
      blue
    }));
  }

  contrast(percentage) {
    const base = this.color;
    return new Color(contrast(base, percentage));
  }

  green(green) {
    const rgb = color2rgb(this.color);
    return green === undefined ? rgb.green : new Color(assign(rgb, {
      green
    }));
  }

  hue(hue) {
    const hsl = color2hsl(this.color);
    return hue === undefined ? hsl.hue : new Color(assign(hsl, {
      hue
    }));
  }

  lightness(lightness) {
    const hsl = color2hsl(this.color);
    return lightness === undefined ? hsl.lightness : new Color(assign(hsl, {
      lightness
    }));
  }

  red(red) {
    const rgb = color2rgb(this.color);
    return red === undefined ? rgb.red : new Color(assign(rgb, {
      red
    }));
  }

  rgb(red, green, blue) {
    const rgb = color2rgb(this.color);
    return new Color(assign(rgb, {
      red,
      green,
      blue
    }));
  }

  saturation(saturation) {
    const hsl = color2hsl(this.color);
    return saturation === undefined ? hsl.saturation : new Color(assign(hsl, {
      saturation
    }));
  }

  shade(percentage) {
    const hwb = color2hwb(this.color);
    const shade = {
      hue: 0,
      whiteness: 0,
      blackness: 100,
      colorspace: 'hwb'
    };
    const colorspace = 'rgb';
    return percentage === undefined ? hwb.blackness : new Color(blend(hwb, shade, percentage, colorspace));
  }

  tint(percentage) {
    const hwb = color2hwb(this.color);
    const tint = {
      hue: 0,
      whiteness: 100,
      blackness: 0,
      colorspace: 'hwb'
    };
    const colorspace = 'rgb';
    return percentage === undefined ? hwb.blackness : new Color(blend(hwb, tint, percentage, colorspace));
  }

  whiteness(whiteness) {
    const hwb = color2hwb(this.color);
    return whiteness === undefined ? hwb.whiteness : new Color(assign(hwb, {
      whiteness
    }));
  }

  toHSL() {
    return color2hslString(this.color);
  }

  toHWB() {
    return color2hwbString(this.color);
  }

  toLegacy() {
    return color2legacyString(this.color);
  }

  toRGB() {
    return color2rgbString(this.color);
  }

  toRGBLegacy() {
    return color2rgbLegacyString(this.color);
  }

  toString() {
    return color2string(this.color);
  }

}
/* Blending
/* ========================================================================== */

function blend(base, color, percentage, colorspace, isBlendingAlpha) {
  const addition = percentage / 100;
  const subtraction = 1 - addition;

  if (colorspace === 'hsl') {
    const _color2hsl = color2hsl(base),
          h1 = _color2hsl.hue,
          s1 = _color2hsl.saturation,
          l1 = _color2hsl.lightness,
          a1 = _color2hsl.alpha;

    const _color2hsl2 = color2hsl(color),
          h2 = _color2hsl2.hue,
          s2 = _color2hsl2.saturation,
          l2 = _color2hsl2.lightness,
          a2 = _color2hsl2.alpha;

    const hue = h1 * subtraction + h2 * addition,
          saturation = s1 * subtraction + s2 * addition,
          lightness = l1 * subtraction + l2 * addition,
          alpha = isBlendingAlpha ? a1 * subtraction + a2 * addition : a1;
    return {
      hue,
      saturation,
      lightness,
      alpha,
      colorspace: 'hsl'
    };
  } else if (colorspace === 'hwb') {
    const _color2hwb = color2hwb(base),
          h1 = _color2hwb.hue,
          w1 = _color2hwb.whiteness,
          b1 = _color2hwb.blackness,
          a1 = _color2hwb.alpha;

    const _color2hwb2 = color2hwb(color),
          h2 = _color2hwb2.hue,
          w2 = _color2hwb2.whiteness,
          b2 = _color2hwb2.blackness,
          a2 = _color2hwb2.alpha;

    const hue = h1 * subtraction + h2 * addition,
          whiteness = w1 * subtraction + w2 * addition,
          blackness = b1 * subtraction + b2 * addition,
          alpha = isBlendingAlpha ? a1 * subtraction + a2 * addition : a1;
    return {
      hue,
      whiteness,
      blackness,
      alpha,
      colorspace: 'hwb'
    };
  } else {
    const _color2rgb = color2rgb(base),
          r1 = _color2rgb.red,
          g1 = _color2rgb.green,
          b1 = _color2rgb.blue,
          a1 = _color2rgb.alpha;

    const _color2rgb2 = color2rgb(color),
          r2 = _color2rgb2.red,
          g2 = _color2rgb2.green,
          b2 = _color2rgb2.blue,
          a2 = _color2rgb2.alpha;

    const red = r1 * subtraction + r2 * addition,
          green = g1 * subtraction + g2 * addition,
          blue = b1 * subtraction + b2 * addition,
          alpha = isBlendingAlpha ? a1 * subtraction + a2 * addition : a1;
    return {
      red,
      green,
      blue,
      alpha,
      colorspace: 'rgb'
    };
  }
}
/* Assign channels to a new instance of a base color
/* ========================================================================== */


function assign(base, channels) {
  const color = Object.assign({}, base);
  Object.keys(channels).forEach(channel => {
    // detect channel
    const isHue = channel === 'hue';
    const isRGB = !isHue && blueGreenRedMatch.test(channel); // normalized value of the channel

    const value = normalize(channels[channel], channel); // assign channel to new object

    color[channel] = value;

    if (isRGB) {
      // conditionally preserve the hue
      color.hue = convertColors.rgb2hue(color.red, color.green, color.blue, base.hue || 0);
    }
  });
  return color;
}

function normalize(value, channel) {
  // detect channel
  const isHue = channel === 'hue'; // value limitations

  const min = 0;
  const max = isHue ? 360 : 100;
  const normalizedValue = Math.min(Math.max(isHue ? value % 360 : value, min), max);
  return normalizedValue;
}
/* Convert colors
/* ========================================================================== */


function color2rgb(color) {
  const _ref = color.colorspace === 'hsl' ? convertColors.hsl2rgb(color.hue, color.saturation, color.lightness) : color.colorspace === 'hwb' ? convertColors.hwb2rgb(color.hue, color.whiteness, color.blackness) : [color.red, color.green, color.blue],
        _ref2 = _slicedToArray(_ref, 3),
        red = _ref2[0],
        green = _ref2[1],
        blue = _ref2[2];

  return {
    red,
    green,
    blue,
    hue: color.hue,
    alpha: color.alpha,
    colorspace: 'rgb'
  };
}

function color2hsl(color) {
  const _ref3 = color.colorspace === 'rgb' ? convertColors.rgb2hsl(color.red, color.green, color.blue, color.hue) : color.colorspace === 'hwb' ? convertColors.hwb2hsl(color.hue, color.whiteness, color.blackness) : [color.hue, color.saturation, color.lightness],
        _ref4 = _slicedToArray(_ref3, 3),
        hue = _ref4[0],
        saturation = _ref4[1],
        lightness = _ref4[2];

  return {
    hue,
    saturation,
    lightness,
    alpha: color.alpha,
    colorspace: 'hsl'
  };
}

function color2hwb(color) {
  const _ref5 = color.colorspace === 'rgb' ? convertColors.rgb2hwb(color.red, color.green, color.blue, color.hue) : color.colorspace === 'hsl' ? convertColors.hsl2hwb(color.hue, color.saturation, color.lightness) : [color.hue, color.whiteness, color.blackness],
        _ref6 = _slicedToArray(_ref5, 3),
        hue = _ref6[0],
        whiteness = _ref6[1],
        blackness = _ref6[2];

  return {
    hue,
    whiteness,
    blackness,
    alpha: color.alpha,
    colorspace: 'hwb'
  };
}
/* Contrast functions
/* ========================================================================== */


function contrast(color, percentage) {
  // https://drafts.csswg.org/css-color/#contrast-adjuster
  const hwb = color2hwb(color);
  const rgb = color2rgb(color); // compute the luminance of the color.

  const luminance = rgb2luminance(rgb.red, rgb.green, rgb.blue); // the maximum-contrast color, if it is less than .5

  const maxContrastColor = luminance < 0.5 // hwb(X, 100%, 0%), where X is the hue angle of the color
  ? {
    hue: hwb.hue,
    whiteness: 100,
    blackness: 0,
    alpha: hwb.alpha,
    colorspace: 'hwb'
  } // otherwise, hwb(X, 0%, 100%), where X is the hue angle of the color
  : {
    hue: hwb.hue,
    whiteness: 0,
    blackness: 100,
    alpha: hwb.alpha,
    colorspace: 'hwb'
  }; // contrast ratio

  const contrastRatio = colors2contrast(color, maxContrastColor);
  const minContrastColor = contrastRatio > 4.5 // the color with the smallest contrast ratio with the base color that is greater than 4.5
  ? colors2contrastRatioColor(hwb, maxContrastColor) // otherwise, the maximum-contrast color
  : maxContrastColor; // color(maximum-contrast blend(minimum-contrast <percentage> hwb)));

  return blend(maxContrastColor, minContrastColor, percentage, 'hwb', false);
}

function colors2contrast(color1, color2) {
  // https://drafts.csswg.org/css-color/#contrast-ratio
  const rgb1 = color2rgb(color1);
  const rgb2 = color2rgb(color2);
  const l1 = rgb2luminance(rgb1.red, rgb1.green, rgb1.blue);
  const l2 = rgb2luminance(rgb2.red, rgb2.green, rgb2.blue);
  return l1 > l2 // if l1 is the relative luminance of the lighter of the colors
  ? (l1 + 0.05) / (l2 + 0.05) // otherwise, if l2 is the relative luminance of the lighter of the colors
  : (l2 + 0.05) / (l1 + 0.05);
}

function rgb2luminance(red, green, blue) {
  const _ref7 = [channel2luminance(red), channel2luminance(green), channel2luminance(blue)],
        redLuminance = _ref7[0],
        greenLuminance = _ref7[1],
        blueLuminance = _ref7[2]; // https://drafts.csswg.org/css-color/#luminance

  const luminance = 0.2126 * redLuminance + 0.7152 * greenLuminance + 0.0722 * blueLuminance;
  return luminance;
}

function channel2luminance(value) {
  // https://drafts.csswg.org/css-color/#luminance
  const luminance = value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
  return luminance;
} // return the smallest contrast ratio from a color and a maximum contrast (credit: @thetalecrafter)


function colors2contrastRatioColor(hwb, maxHWB) {
  const modifiedHWB = Object.assign({}, hwb); // values to be used for linear interpolations in HWB space

  let minW = hwb.whiteness;
  let minB = hwb.blackness;
  let maxW = maxHWB.whiteness;
  let maxB = maxHWB.blackness; // find the color with the smallest contrast ratio with the base color that is greater than 4.5

  while (Math.abs(minW - maxW) > 100 || Math.abs(minB - maxB) > 100) {
    const midW = Math.round((maxW + minW) / 2);
    const midB = Math.round((maxB + minB) / 2);
    modifiedHWB.whiteness = midW;
    modifiedHWB.blackness = midB;

    if (colors2contrast(modifiedHWB, hwb) > 4.5) {
      maxW = midW;
      maxB = midB;
    } else {
      minW = midW;
      minB = midB;
    }
  }

  return modifiedHWB;
}
/* Match
/* ========================================================================== */


const blueGreenRedMatch = /^(blue|green|red)$/i;
/* Stringifiers
/* ========================================================================== */

function color2string(color) {
  return color.colorspace === 'hsl' ? color2hslString(color) : color.colorspace === 'hwb' ? color2hwbString(color) : color2rgbString(color);
}

function color2hslString(color) {
  const hsl = color2hsl(color);
  const isOpaque = hsl.alpha === 100;
  const hue = hsl.hue;
  const saturation = Math.round(hsl.saturation * 10000000000) / 10000000000;
  const lightness = Math.round(hsl.lightness * 10000000000) / 10000000000;
  const alpha = Math.round(hsl.alpha * 10000000000) / 10000000000;
  return `hsl(${hue} ${saturation}% ${lightness}%${isOpaque ? '' : ` / ${alpha}%`})`;
}

function color2hwbString(color) {
  const hwb = color2hwb(color);
  const isOpaque = hwb.alpha === 100;
  const hue = hwb.hue;
  const whiteness = Math.round(hwb.whiteness * 10000000000) / 10000000000;
  const blackness = Math.round(hwb.blackness * 10000000000) / 10000000000;
  const alpha = Math.round(hwb.alpha * 10000000000) / 10000000000;
  return `hwb(${hue} ${whiteness}% ${blackness}%${isOpaque ? '' : ` / ${alpha}%`})`;
}

function color2rgbString(color) {
  const rgb = color2rgb(color);
  const isOpaque = rgb.alpha === 100;
  const red = Math.round(rgb.red * 10000000000) / 10000000000;
  const green = Math.round(rgb.green * 10000000000) / 10000000000;
  const blue = Math.round(rgb.blue * 10000000000) / 10000000000;
  const alpha = Math.round(rgb.alpha * 10000000000) / 10000000000;
  return `rgb(${red}% ${green}% ${blue}%${isOpaque ? '' : ` / ${alpha}%`})`;
}

function color2legacyString(color) {
  return color.colorspace === 'hsl' ? color2hslLegacyString(color) : color2rgbLegacyString(color);
}

function color2rgbLegacyString(color) {
  const rgb = color2rgb(color);
  const isOpaque = rgb.alpha === 100;
  const name = isOpaque ? 'rgb' : 'rgba';
  const red = Math.round(rgb.red * 255 / 100);
  const green = Math.round(rgb.green * 255 / 100);
  const blue = Math.round(rgb.blue * 255 / 100);
  const alpha = Math.round(rgb.alpha / 100 * 10000000000) / 10000000000;
  return `${name}(${red}, ${green}, ${blue}${isOpaque ? '' : `, ${alpha}`})`;
}

function color2hslLegacyString(color) {
  const hsl = color2hsl(color);
  const isOpaque = hsl.alpha === 100;
  const name = isOpaque ? 'hsl' : 'hsla';
  const hue = hsl.hue;
  const saturation = Math.round(hsl.saturation * 10000000000) / 10000000000;
  const lightness = Math.round(hsl.lightness * 10000000000) / 10000000000;
  const alpha = Math.round(hsl.alpha / 100 * 10000000000) / 10000000000;
  return `${name}(${hue}, ${saturation}%, ${lightness}%${isOpaque ? '' : `, ${alpha}`})`;
}

function manageUnresolved(node, opts, word, message) {
  if ('warn' === opts.unresolved) {
    opts.decl.warn(opts.result, message, {
      word
    });
  } else if ('ignore' !== opts.unresolved) {
    throw opts.decl.error(message, {
      word
    });
  }
}

/* Transform AST
/* ========================================================================== */

function transformAST(node, opts) {
  node.nodes.slice(0).forEach(child => {
    if (isColorModFunction(child)) {
      // transform any variables within the color-mod() function
      if (opts.transformVars) {
        transformVariables(child, opts);
      } // transform any color-mod() functions


      const color = transformColorModFunction(child, opts);

      if (color) {
        // update the color-mod() function with the transformed value
        child.replaceWith(valueParser.word({
          raws: child.raws,
          value: opts.stringifier(color)
        }));
      }
    } else if (child.nodes && Object(child.nodes).length) {
      transformAST(child, opts);
    }
  });
}
/* Transform <var> functions
/* ========================================================================== */

function transformVariables(node, opts) {
  walk(node, child => {
    if (isVariable(child)) {
      // get the custom property and fallback value from var()
      const _transformArgsByParam = transformArgsByParams(child, [// <value> , [ <fallback> ]?
      [transformWord, isComma, transformNode]]),
            _transformArgsByParam2 = _slicedToArray(_transformArgsByParam, 2),
            prop = _transformArgsByParam2[0],
            fallbackNode = _transformArgsByParam2[1]; // if the custom property is known


      if (prop in opts.customProperties) {
        let customPropertyValue = opts.customProperties[prop]; // follow custom properties referencing custom properties

        if (looseVarMatch.test(customPropertyValue)) {
          const rootChildAST = customPropertyValue.clone();
          transformVariables(rootChildAST, opts);
          customPropertyValue = rootChildAST;
        } // replace var() with the custom property value


        if (customPropertyValue.nodes.length === 1 && customPropertyValue.nodes[0].nodes.length) {
          customPropertyValue.nodes[0].nodes.forEach(customPropertyChild => {
            child.parent.insertBefore(child, customPropertyChild);
          });
        }

        child.remove();
      } else if (fallbackNode && fallbackNode.nodes.length === 1 && fallbackNode.nodes[0].nodes.length) {
        // otherwise, replace var() with the fallback value
        transformVariables(fallbackNode, opts);
        child.replaceWith(...fallbackNode.nodes[0].nodes[0]);
      }
    }
  });
}
/* Transform <color> functions
/* ========================================================================== */


function transformColor(node, opts) {
  if (isRGBFunction(node)) {
    return transformRGBFunction(node, opts);
  } else if (isHSLFunction(node)) {
    return transformHSLFunction(node, opts);
  } else if (isHWBFunction(node)) {
    return transformHWBFunction(node, opts);
  } else if (isColorModFunction(node)) {
    return transformColorModFunction(node, opts);
  } else if (isHexColor(node)) {
    return transformHexColor(node, opts);
  } else if (isNamedColor(node)) {
    return transformNamedColor(node, opts);
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a color`);
  }
} // return a transformed rgb/rgba color function


function transformRGBFunction(node, opts) {
  const _transformArgsByParam3 = transformArgsByParams(node, [// <percentage> <percentage> <percentage> [ , <alpha-value> ]?
  [transformPercentage, transformPercentage, transformPercentage, isSlash, transformAlpha], // <number> <number> <number> [ , <alpha-value> ]?
  [transformRGBNumber, transformRGBNumber, transformRGBNumber, isSlash, transformAlpha], // <percentage> , <percentage> , <percentage> [ , <alpha-value> ]?
  [transformPercentage, isComma, transformPercentage, isComma, transformPercentage, isComma, transformAlpha], // <number> , <number> , <number> [ , <alpha-value> ]?
  [transformRGBNumber, isComma, transformRGBNumber, isComma, transformRGBNumber, isComma, transformAlpha]]),
        _transformArgsByParam4 = _slicedToArray(_transformArgsByParam3, 4),
        red = _transformArgsByParam4[0],
        green = _transformArgsByParam4[1],
        blue = _transformArgsByParam4[2],
        _transformArgsByParam5 = _transformArgsByParam4[3],
        alpha = _transformArgsByParam5 === void 0 ? 100 : _transformArgsByParam5;

  if (red !== undefined) {
    const color = new Color({
      red,
      green,
      blue,
      alpha,
      colorspace: 'rgb'
    });
    return color;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid rgb() function`);
  }
} // return a transformed hsl/hsla color function


function transformHSLFunction(node, opts) {
  const _transformArgsByParam6 = transformArgsByParams(node, [// <hue> <percentage> <percentage> [ / <alpha-value> ]?
  [transformHue, transformPercentage, transformPercentage, isSlash, transformAlpha], // <hue> , <percentage> , <percentage> [ , <alpha-value> ]?
  [transformHue, isComma, transformPercentage, isComma, transformPercentage, isComma, transformAlpha]]),
        _transformArgsByParam7 = _slicedToArray(_transformArgsByParam6, 4),
        hue = _transformArgsByParam7[0],
        saturation = _transformArgsByParam7[1],
        lightness = _transformArgsByParam7[2],
        _transformArgsByParam8 = _transformArgsByParam7[3],
        alpha = _transformArgsByParam8 === void 0 ? 100 : _transformArgsByParam8;

  if (lightness !== undefined) {
    const color = new Color({
      hue,
      saturation,
      lightness,
      alpha,
      colorspace: 'hsl'
    });
    return color;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid hsl() function`);
  }
} // return a transformed hwb color function


function transformHWBFunction(node, opts) {
  const _transformArgsByParam9 = transformArgsByParams(node, [// <hue> <percentage> <percentage> [ / <alpha-value> ]?
  [transformHue, transformPercentage, transformPercentage, isSlash, transformAlpha]]),
        _transformArgsByParam10 = _slicedToArray(_transformArgsByParam9, 4),
        hue = _transformArgsByParam10[0],
        whiteness = _transformArgsByParam10[1],
        blackness = _transformArgsByParam10[2],
        _transformArgsByParam11 = _transformArgsByParam10[3],
        alpha = _transformArgsByParam11 === void 0 ? 100 : _transformArgsByParam11;

  if (blackness !== undefined) {
    const color = new Color({
      hue,
      whiteness,
      blackness,
      alpha,
      colorspace: 'hwb'
    });
    return color;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid hwb() function`);
  }
} // return a transformed color-mod color function


function transformColorModFunction(node, opts) {
  // [ <color> | <hue> ] <color-adjuster>*
  const _ref = (node.nodes || []).slice(1, -1) || [],
        _ref2 = _toArray(_ref),
        colorOrHueNode = _ref2[0],
        adjusterNodes = _ref2.slice(1);

  if (colorOrHueNode !== undefined) {
    const color = isHue(colorOrHueNode) ? new Color({
      hue: transformHue(colorOrHueNode, opts),
      saturation: 100,
      lightness: 50,
      alpha: 100,
      colorspace: 'hsl'
    }) : transformColor(colorOrHueNode, opts);

    if (color) {
      const adjustedColor = transformColorByAdjusters(color, adjusterNodes, opts);
      return adjustedColor;
    } else {
      return manageUnresolved(node, opts, node.value, `Expected a valid color`);
    }
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid color-mod() function`);
  }
} // return a transformed hex color


function transformHexColor(node, opts) {
  if (hexColorMatch$1.test(node.value)) {
    // #<hex-color>{3,4,6,8}
    const _convertHtoRGB = convertHtoRGB(node.value),
          _convertHtoRGB2 = _slicedToArray(_convertHtoRGB, 4),
          red = _convertHtoRGB2[0],
          green = _convertHtoRGB2[1],
          blue = _convertHtoRGB2[2],
          alpha = _convertHtoRGB2[3];

    const color = new Color({
      red,
      green,
      blue,
      alpha
    });
    return color;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid hex color`);
  }
} // return a transformed named-color


function transformNamedColor(node, opts) {
  if (isNamedColor(node)) {
    // <named-color>
    const _convertNtoRGB = convertNtoRGB(node.value),
          _convertNtoRGB2 = _slicedToArray(_convertNtoRGB, 3),
          red = _convertNtoRGB2[0],
          green = _convertNtoRGB2[1],
          blue = _convertNtoRGB2[2];

    const color = new Color({
      red,
      green,
      blue,
      alpha: 100,
      colorspace: 'rgb'
    });
    return color;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid named-color`);
  }
}
/* Transform <color-adjuster> functions
/* ========================================================================== */
// return a transformed color using adjustments


function transformColorByAdjusters(color, adjusterNodes, opts) {
  const adjustedColor = adjusterNodes.reduce((base, node) => {
    if (isAlphaBlueGreenRedAdjuster(node)) {
      return transformAlphaBlueGreenRedAdjuster(base, node, opts);
    } else if (isRGBAdjuster(node)) {
      return transformRGBAdjuster(base, node, opts);
    } else if (isHueAdjuster(node)) {
      return transformHueAdjuster(base, node, opts);
    } else if (isBlacknessLightnessSaturationWhitenessAdjuster(node)) {
      return transformBlacknessLightnessSaturationWhitenessAdjuster(base, node, opts);
    } else if (isShadeTintAdjuster(node)) {
      return transformShadeTintAdjuster(base, node, opts);
    } else if (isBlendAdjuster(node)) {
      return transformBlendAdjuster(base, node, node.value === 'blenda', opts);
    } else if (isContrastAdjuster(node)) {
      return transformContrastAdjuster(base, node, opts);
    } else {
      manageUnresolved(node, opts, node.value, `Expected a valid color adjuster`);
      return base;
    }
  }, color);
  return adjustedColor;
} // return a transformed color using a/alpha/blue/green/red adjustments


function transformAlphaBlueGreenRedAdjuster(base, node, opts) {
  const _transformArgsByParam12 = transformArgsByParams(node, alphaMatch.test(node.value) // a/alpha adjustments
  ? [// [ + | - ] <alpha-value>
  [transformMinusPlusOperator, transformAlpha], // * <percentage>
  [transformTimesOperator, transformPercentage], // <alpha-value>
  [transformAlpha]] // blue/green/red adjustments
  : [// [ + | - ] <percentage>
  [transformMinusPlusOperator, transformPercentage], // [ + | - ] <number>
  [transformMinusPlusOperator, transformRGBNumber], // * <percentage>
  [transformTimesOperator, transformPercentage], // <percentage>
  [transformPercentage], // <number>
  [transformRGBNumber]]),
        _transformArgsByParam13 = _slicedToArray(_transformArgsByParam12, 2),
        operatorOrValue = _transformArgsByParam13[0],
        adjustment = _transformArgsByParam13[1];

  if (operatorOrValue !== undefined) {
    // normalized channel name
    const channel = node.value.toLowerCase().replace(alphaMatch, 'alpha');
    const existingValue = base[channel]();
    const modifiedValue = adjustment !== undefined ? operatorOrValue === '+' ? existingValue + Number(adjustment) : operatorOrValue === '-' ? existingValue - Number(adjustment) : operatorOrValue === '*' ? existingValue * Number(adjustment) : Number(adjustment) : Number(operatorOrValue);
    const modifiedColor = base[channel](modifiedValue);
    return modifiedColor;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid modifier()`);
  }
} // return a transformed color using an rgb adjustment


function transformRGBAdjuster(base, node, opts) {
  const _transformArgsByParam14 = transformArgsByParams(node, [// [ + | - ] <percentage> <percentage> <percentage>
  [transformMinusPlusOperator, transformPercentage, transformPercentage, transformPercentage], // [ + | - ] <number> <number> <number>
  [transformMinusPlusOperator, transformRGBNumber, transformRGBNumber, transformRGBNumber], // [ + | - ] <hash-token>
  [transformMinusPlusOperator, transformHexColor], // [ * ] <percentage>
  [transformTimesOperator, transformPercentage]]),
        _transformArgsByParam15 = _slicedToArray(_transformArgsByParam14, 4),
        arg1 = _transformArgsByParam15[0],
        arg2 = _transformArgsByParam15[1],
        arg3 = _transformArgsByParam15[2],
        arg4 = _transformArgsByParam15[3];

  if (arg2 !== undefined && arg2.color) {
    const modifiedColor = base.rgb(arg1 === '+' ? base.red() + arg2.red() : base.red() - arg2.red(), arg1 === '+' ? base.green() + arg2.green() : base.green() - arg2.green(), arg1 === '+' ? base.blue() + arg2.blue() : base.blue() - arg2.blue());
    return modifiedColor;
  } else if (arg1 !== undefined && minusPlusMatch.test(arg1)) {
    const modifiedColor = base.rgb(arg1 === '+' ? base.red() + arg2 : base.red() - arg2, arg1 === '+' ? base.green() + arg3 : base.green() - arg3, arg1 === '+' ? base.blue() + arg4 : base.blue() - arg4);
    return modifiedColor;
  } else if (arg1 !== undefined && arg2 !== undefined) {
    const modifiedColor = base.rgb(base.red() * arg2, base.green() * arg2, base.blue() * arg2);
    return modifiedColor;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid rgb() adjuster`);
  }
} // return a transformed color using a blend/blenda adjustment


function transformBlendAdjuster(base, node, isAlphaBlend, opts) {
  const _transformArgsByParam16 = transformArgsByParams(node, [[transformColor, transformPercentage, transformColorSpace]]),
        _transformArgsByParam17 = _slicedToArray(_transformArgsByParam16, 3),
        color = _transformArgsByParam17[0],
        percentage = _transformArgsByParam17[1],
        _transformArgsByParam18 = _transformArgsByParam17[2],
        colorspace = _transformArgsByParam18 === void 0 ? 'rgb' : _transformArgsByParam18;

  if (percentage !== undefined) {
    const modifiedColor = isAlphaBlend ? base.blenda(color.color, percentage, colorspace) : base.blend(color.color, percentage, colorspace);
    return modifiedColor;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid blend() adjuster)`);
  }
} // return a transformed color using a contrast adjustment


function transformContrastAdjuster(base, node, opts) {
  const _transformArgsByParam19 = transformArgsByParams(node, [// <percentage>
  [transformPercentage]]),
        _transformArgsByParam20 = _slicedToArray(_transformArgsByParam19, 1),
        percentage = _transformArgsByParam20[0];

  if (percentage !== undefined) {
    const modifiedColor = base.contrast(percentage);
    return modifiedColor;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid contrast() adjuster)`);
  }
} // return a transformed color using a hue adjustment


function transformHueAdjuster(base, node, opts) {
  const _transformArgsByParam21 = transformArgsByParams(node, [// [ + | - | * ] <angle>
  [transformMinusPlusTimesOperator, transformHue], // <angle>
  [transformHue]]),
        _transformArgsByParam22 = _slicedToArray(_transformArgsByParam21, 2),
        operatorOrHue = _transformArgsByParam22[0],
        adjustment = _transformArgsByParam22[1];

  if (operatorOrHue !== undefined) {
    const existingHue = base.hue();
    const modifiedValue = adjustment !== undefined ? operatorOrHue === '+' ? existingHue + Number(adjustment) : operatorOrHue === '-' ? existingHue - Number(adjustment) : operatorOrHue === '*' ? existingHue * Number(adjustment) : Number(adjustment) : Number(operatorOrHue);
    return base.hue(modifiedValue);
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid hue() function)`);
  }
} // [ b | blackness | l | lightness | s | saturation | w | whiteness ]( [ + | - | * ]? <percentage> )


function transformBlacknessLightnessSaturationWhitenessAdjuster(base, node, opts) {
  const channel = node.value.toLowerCase().replace(/^b$/, 'blackness').replace(/^l$/, 'lightness').replace(/^s$/, 'saturation').replace(/^w$/, 'whiteness');

  const _transformArgsByParam23 = transformArgsByParams(node, [[transformMinusPlusTimesOperator, transformPercentage], [transformPercentage]]),
        _transformArgsByParam24 = _slicedToArray(_transformArgsByParam23, 2),
        operatorOrValue = _transformArgsByParam24[0],
        adjustment = _transformArgsByParam24[1];

  if (operatorOrValue !== undefined) {
    const existingValue = base[channel]();
    const modifiedValue = adjustment !== undefined ? operatorOrValue === '+' ? existingValue + Number(adjustment) : operatorOrValue === '-' ? existingValue - Number(adjustment) : operatorOrValue === '*' ? existingValue * Number(adjustment) : Number(adjustment) : Number(operatorOrValue);
    return base[channel](modifiedValue);
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid ${channel}() function)`);
  }
} // return a transformed color using shade/tint adjustments


function transformShadeTintAdjuster(base, node, opts) {
  const channel = node.value.toLowerCase();

  const _transformArgsByParam25 = transformArgsByParams(node, [// [ shade | tint ]( <percentage> )
  [transformPercentage]]),
        _transformArgsByParam26 = _slicedToArray(_transformArgsByParam25, 1),
        percentage = _transformArgsByParam26[0];

  if (percentage !== undefined) {
    const modifiedValue = Number(percentage);
    return base[channel](modifiedValue);
  } else {
    return manageUnresolved(node, opts, node.value, `Expected valid ${channel}() arguments`);
  }
}
/* Argument Transforms
/* ========================================================================== */
// return a transformed color space


function transformColorSpace(node, opts) {
  if (isColorSpace(node)) {
    // [ hsl | hwb | rgb ]
    return node.value;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid color space)`);
  }
} // return a transformed alpha value


function transformAlpha(node, opts) {
  if (isNumber(node)) {
    // <number>
    return node.value * 100;
  } else if (isPercentage(node)) {
    // <percentage>
    return transformPercentage(node, opts);
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid alpha value)`);
  }
} // return a transformed rgb number


function transformRGBNumber(node, opts) {
  if (isNumber(node)) {
    // <number>
    return node.value / 2.55;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid RGB value)`);
  }
} // return a transformed hue


function transformHue(node, opts) {
  if (isHue(node)) {
    // <hue> = <number> | <angle>
    const unit = node.unit.toLowerCase();

    if (unit === 'grad') {
      // if <angle> = <gradian> (400 per circle)
      return convertGtoD(node.value);
    } else if (unit === 'rad') {
      // if <angle> = <radian> (2π per circle)
      return convertRtoD(node.value);
    } else if (unit === 'turn') {
      // if <angle> = <turn> (1 per circle)
      return convertTtoD(node.value);
    } else {
      // if <angle> = [ <degree> | <number> ] (360 per circle)
      return convertDtoD(node.value);
    }
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid hue`);
  }
} // return a transformed percentage


function transformPercentage(node, opts) {
  if (isPercentage(node)) {
    // <percentage>
    return Number(node.value);
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid hue`);
  }
} // return a transformed minus-plus operator


function transformMinusPlusOperator(node, opts) {
  if (isMinusPlusOperator(node)) {
    // [ - | + ]
    return node.value;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a plus or minus operator`);
  }
} // return a transformed times operator


function transformTimesOperator(node, opts) {
  if (isTimesOperator(node)) {
    // [ * ]
    return node.value;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a times operator`);
  }
} // return a transformed minus-plus-times operator


function transformMinusPlusTimesOperator(node, opts) {
  if (isMinusPlusTimesOperator(node)) {
    // [ - | + | * ]
    return node.value;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a plus, minus, or times operator`);
  }
}
/* Additional transforms
/* ========================================================================== */


function transformWord(node, opts) {
  if (isWord(node)) {
    return node.value;
  } else {
    return manageUnresolved(node, opts, node.value, `Expected a valid word`);
  }
}

function transformNode(node) {
  return Object(node);
}
/* Transform helper
/* ========================================================================== */
// return the first set of transformed arguments allowable by the parameters


function transformArgsByParams(node, params) {
  const nodes = (node.nodes || []).slice(1, -1);
  const opts = {
    unresolved: 'ignore'
  };
  return params.map(param => nodes.map((childNode, index) => typeof param[index] === 'function' ? param[index](childNode, opts) : undefined).filter(child => typeof child !== 'boolean')).filter(param => param.every(result => result !== undefined))[0] || [];
}
/* Walk helper (required because the default walker is affected by mutations)
/* ========================================================================== */
// run a function over each node and hen walk each child node of that node


function walk(node, fn) {
  fn(node);

  if (Object(node.nodes).length) {
    node.nodes.slice().forEach(childNode => {
      walk(childNode, fn);
    });
  }
}
/* Variable validators
/* ========================================================================== */
// return whether the node is a var function


function isVariable(node) {
  // var()
  return Object(node).type === 'func' && varMatch.test(node.value);
}
/* Adjustment validators
/* ========================================================================== */
// return whether the node is an a/alpha/blue/green/red adjuster


function isAlphaBlueGreenRedAdjuster(node) {
  // [ a(), alpha(), blue(), green(), red() ]
  return Object(node).type === 'func' && alphaBlueGreenRedMatch.test(node.value);
} // return whether the node is an rgb adjuster


function isRGBAdjuster(node) {
  return Object(node).type === 'func' && rgbMatch.test(node.value);
} // return whether the node is a hue adjuster


function isHueAdjuster(node) {
  // [ h() | hue() ]
  return Object(node).type === 'func' && hueMatch.test(node.value);
} // return whether the node is a blackness/lightness/saturation/whiteness adjuster


function isBlacknessLightnessSaturationWhitenessAdjuster(node) {
  // [ b() | blackness() | l() | lightness() | s() | saturation() | w() | whiteness() ]
  return Object(node).type === 'func' && blacknessLightnessSaturationWhitenessMatch.test(node.value);
} // return whether the node is a shade/tint adjuster


function isShadeTintAdjuster(node) {
  // [ shade() | tint() ]
  return Object(node).type === 'func' && shadeTintMatch.test(node.value);
} // return whether the node is a blend adjuster


function isBlendAdjuster(node) {
  // [ blend(), blenda() ]
  return Object(node).type === 'func' && blendMatch.test(node.value);
} // return whether the node is a contrast adjuster


function isContrastAdjuster(node) {
  // [ contrast() ]
  return Object(node).type === 'func' && contrastMatch.test(node.value);
}
/* Color validators
/* ========================================================================== */
// return whether the node is an rgb/rgba color function


function isRGBFunction(node) {
  // [ rgb(), rgba() ]
  return Object(node).type === 'func' && rgbaMatch.test(node.value);
} // return whether the node is an hsl color function


function isHSLFunction(node) {
  // [ hsl(), hsla() ]
  return Object(node).type === 'func' && hslaMatch.test(node.value);
} // return whether the node is an hwb color function


function isHWBFunction(node) {
  // hwb()
  return Object(node).type === 'func' && hwbMatch.test(node.value);
} // return whether the node is a color-mod function


function isColorModFunction(node) {
  // color-mod()
  return Object(node).type === 'func' && colorModMatch.test(node.value);
} // return whether the node is a valid named-color


function isNamedColor(node) {
  return Object(node).type === 'word' && Boolean(convertNtoRGB(node.value));
} // return whether the node is a valid hex color


function isHexColor(node) {
  // #<hex-color>{3,4,6,8}
  return Object(node).type === 'word' && hexColorMatch$1.test(node.value);
} // return whether the node is a valid color space


function isColorSpace(node) {
  // [ hsl | hwb | rgb ]
  return Object(node).type === 'word' && colorSpaceMatch.test(node.value);
}
/* Additional validators
/* ========================================================================== */
// return whether the hue value is valid


function isHue(node) {
  return Object(node).type === 'number' && hueUnitMatch.test(node.unit);
} // return whether the comma is valid


function isComma(node) {
  return Object(node).type === 'comma';
} // return whether the slash operator is valid


function isSlash(node) {
  return Object(node).type === 'operator' && node.value === '/';
} // return whether the number is valid


function isNumber(node) {
  return Object(node).type === 'number' && node.unit === '';
} // return whether the mind-plus operator is valid


function isMinusPlusOperator(node) {
  return Object(node).type === 'operator' && minusPlusMatch.test(node.value);
} // return whether the minus-plus-times operator is valid


function isMinusPlusTimesOperator(node) {
  return Object(node).type === 'operator' && minusPlusTimesMatch.test(node.value);
} // return whether the times operator is valid


function isTimesOperator(node) {
  return Object(node).type === 'operator' && timesMatch.test(node.value);
} // return whether the percentage is valid


function isPercentage(node) {
  return Object(node).type === 'number' && (node.unit === '%' || node.value === '0');
} // return whether the node is a word


function isWord(node) {
  // <word>
  return Object(node).type === 'word';
}
/* Matchers
/* ========================================================================== */


const alphaMatch = /^a(lpha)?$/i;
const alphaBlueGreenRedMatch = /^(a(lpha)?|blue|green|red)$/i;
const blacknessLightnessSaturationWhitenessMatch = /^(b(lackness)?|l(ightness)?|s(aturation)?|w(hiteness)?)$/i;
const blendMatch = /^blenda?$/i;
const colorModMatch = /^color-mod$/i;
const colorSpaceMatch = /^(hsl|hwb|rgb)$/i;
const contrastMatch = /^contrast$/i;
const hexColorMatch$1 = /^#(?:([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?|([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?)$/i;
const hslaMatch = /^hsla?$/i;
const hueUnitMatch = /^(deg|grad|rad|turn)?$/i;
const hueMatch = /^h(ue)?$/i;
const hwbMatch = /^hwb$/i;
const minusPlusMatch = /^[+-]$/;
const minusPlusTimesMatch = /^[*+-]$/;
const rgbMatch = /^rgb$/i;
const rgbaMatch = /^rgba?$/i;
const shadeTintMatch = /^(shade|tint)$/i;
const varMatch = /^var$/i;
const looseVarMatch = /(^|[^\w-])var\(/i;
const timesMatch = /^[*]$/;

module.exports = (opts = {}) => {
  // how unresolved functions and arguments should be handled (default: "throw")
  const unresolvedOpt = String(Object(opts).unresolved || 'throw').toLowerCase(); // how transformed colors will be produced in CSS

  const stringifierOpt = Object(opts).stringifier || (color => color.toLegacy()); // sources to import custom selectors from


  const importFrom = [].concat(Object(opts).importFrom || []); // whether var() within color-mod() should use Custom Properties or var() fallback

  const transformVarsOpt = 'transformVars' in Object(opts) ? opts.transformVars : true; // promise any custom selectors are imported

  const customPropertiesPromise = importCustomPropertiesFromSources(importFrom);
  return {
    postcssPlugin: 'postcss-color-mod-function',

    Once(root, {
      result
    }) {
      return _asyncToGenerator(function* () {
        const customProperties = Object.assign(yield customPropertiesPromise, getCustomProperties(root, {
          preserve: true
        }));
        root.walkDecls(decl => {
          const originalValue = decl.value;

          if (colorModFunctionMatch.test(originalValue)) {
            const ast = valueParser(originalValue, {
              loose: true
            }).parse();
            transformAST(ast, {
              unresolved: unresolvedOpt,
              stringifier: stringifierOpt,
              transformVars: transformVarsOpt,
              decl,
              result,
              customProperties
            });
            const modifiedValue = ast.toString();

            if (originalValue !== modifiedValue) {
              decl.value = modifiedValue;
            }
          }
        });
      })();
    }

  };
};

module.exports.postcss = true;
const colorModFunctionMatch = /(^|[^\w-])color-mod\(/i;
//# sourceMappingURL=index.cjs.js.map


/***/ }),
/* 153 */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 153;
module.exports = webpackEmptyContext;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const migrate_6_7_0_to_7_1 = __webpack_require__(53);
function activate(context) {
    let disposable = vscode.commands.registerTextEditorCommand('vscode-postcss-preset-env-migrations.migrate-selection', async (cmdEditor, cmdEdit) => {
        const query = await vscode.window.showQuickPick([
            "6.7.0 -> 7.x",
        ], {
            canPickMany: false,
            title: "Select a migration",
        });
        if (query === "6.7.0 -> 7.x") {
            (0, migrate_6_7_0_to_7_1.migrate670To7)(cmdEditor, cmdEdit);
            return;
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map