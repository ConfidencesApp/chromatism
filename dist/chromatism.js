!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):r.chromatism=e()}(this,function(){"use strict";function r(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace("#","").match(/.{2}/g);for(var a=0;a<n.length;a++)n[a]=parseInt(n[a],16);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}function e(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"hex":return 1==(y=Math.round(n.r).toString(16)).length&&(y="0"+y),1==(m=Math.round(n.g).toString(16)).length&&(m="0"+m),1==(M=Math.round(n.b).toString(16)).length&&(M="0"+M),"#"+y+m+M;case"cssrgb":return"rgb("+Math.round(n.r)+","+Math.round(n.g)+","+Math.round(n.b)+")";case"hsl":var a=[y=n.r/255,m=n.g/255,M=n.b/255].sort(),c=(a[0]+a[2])/2*100;return a[0]==a[2]?(g=0,d=0):(g=c>=50?(a[2]-a[0])/(2-a[2]-a[0])*100:(a[2]-a[0])/(a[2]+a[0])*100,(d=a[2]==y?(m-M)/(a[2]-a[0])*60:a[2]==m?60*(2+(M-y)/(a[2]-a[0])):60*(4+(y-m)/(a[2]-a[0])))<0?d+=360:d>360&&(d%=360)),{h:d,s:g,l:c};case"csshsl":var u=o.convert({conversions:t,helpers:s},"hsl",n);return"hsl("+Math.round(u.h)+","+Math.round(u.s)+"%,"+Math.round(u.l)+"%)";case"cmyk":var i=n.r/255,h=n.g/255,l=n.b/255,v=1-Math.max(i,h,l);if(1!=v)var p=(1-i-v)/(1-v),f=(1-h-v)/(1-v),b=(1-l-v)/(1-v);else var p=0,f=0,b=0;return{c:p,m:f,y:b,k:v};case"hsv":var d,g,y=n.r/255,m=n.g/255,M=n.b/255,Y=Math.min(y,m,M),X=Math.max(y,m,M),Z=X-Y,w=X;if(0==Z)d=0,g=0;else{g=Z/X;var L=((X-y)/6+Z/2)/Z,R=((X-m)/6+Z/2)/Z,S=((X-M)/6+Z/2)/Z;y==X?d=S-R:m==X?d=1/3+L-S:M==X&&(d=2/3+R-L),d<0&&(d+=1),d>1&&(d-=1)}return{h:360*d,s:100*g,v:100*w};case"yiq":var b=n.r/255*.299+n.g/255*.587+n.b/255*.114,A=n.r/255*.596+n.g/255*-.274+n.b/255*-.322,O=n.r/255*.211+n.g/255*-.523+n.b/255*.312;return A=s.bounded(A,[-.5957,.5957]),O=s.bounded(O,[-.5226,.5226]),{y:b,i:A,q:O};case"XYZ":var I=[n.r,n.g,n.b].map(function(r){return r/255}).map(function(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}),x=s.getTransform("SRGB_XYZ").map(function(r){return I.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return 100*r}),D=C(x,3);return{X:D[0],Y:D[1],Z:D[2]};case"lms":case"cielab":case"cieluv":case"xyY":var E=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,E);case"cielch":var j=o.convert({conversions:t,operations:o,helpers:s},"cieluv",n);return o.convert({conversions:t,operations:o,helpers:s},e,j);case"hsluv":var T=o.convert({conversions:t,operations:o,helpers:s},"cielch",n);return o.convert({conversions:t,operations:o,helpers:s},e,T)}}function n(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/((rgb\(|\))|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"rgb":return{r:n[0],g:n[1],b:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{r:n[0],g:n[1],b:n[2]})}}function t(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":if(0==n.s){var a=n.l/100*255;return{r:a,g:a,b:a}}var c,u,i;c=n.l>=50?n.l/100+n.s/100-n.l/100*(n.s/100):n.l/100*(1+n.s/100),u=n.l/100*2-c;var h,l,v,p=((i=n.h/360)+.333)%1,f=i,b=s.negMod(i-.333,1);return h=6*p<1?u+6*(c-u)*p:2*p<1?c:3*p<2?u+6*(.666-p)*(c-u):u,l=6*f<1?u+6*(c-u)*f:2*f<1?c:3*f<2?u+6*(.666-f)*(c-u):u,v=6*b<1?u+6*(c-u)*b:2*b<1?c:3*b<2?u+6*(.666-b)*(c-u):u,h<0&&(h=0),l<0&&(l=0),v<0&&(v=0),{r:255*h,g:255*l,b:255*v};case"csshsl":return"hsl("+Math.round(n.h)+","+Math.round(n.s)+"%,"+Math.round(n.l)+"%)";case"hsv":n.s=n.s/100,n.l=n.l/100;var d=n.s*(n.l<.5?n.l:1-n.l);return{h:n.h,s:100*(2*d/(n.l+d)),v:100*(n.l+d)};default:var g=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,g)}}function o(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;n=n.replace(/(hsl\(|\)|%|[\s]*)/g,"").split(",");for(var a=0;a<n.length;a++)n[a]=parseInt(n[a]);switch(e){case"hsl":return{h:n[0],s:n[1],l:n[2]};default:return o.convert({conversions:t,operations:o,helpers:s},e,{h:n[0],s:n[1],l:n[2]})}}function s(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":var a,c,u;n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;var i=6*n.h;6==i&&(i=0);var h,l,v,p=Math.round(i),f=n.v*(1-n.s),b=n.v*(1-n.s*(i-p)),d=n.v*(1-n.s*(1-(i-p)));return 0==p?(h=n.v,l=d,v=f):1==p?(h=b,l=n.v,v=f):2==p?(h=f,l=n.v,v=d):3==p?(h=f,l=b,v=n.v):4==p?(h=d,l=f,v=n.v):(h=n.v,l=f,v=b),a=255*h,c=255*l,u=255*v,{r:a,g:c,b:u};case"hsl":n.h=n.h/360,n.s=n.s/100,n.v=n.v/100;return{h:360*n.h,s:100*((2-n.s)*n.v<1?n.s*n.v/((2-n.s)*n.v):n.s*n.v/(2-(2-n.s)*n.v)),l:100*((2-n.s)*n.v/2)};default:var g=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,g)}}function a(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"rgb":return{r:a=255*(1-n.c)*(1-n.k),g:c=255*(1-n.m)*(1-n.k),b:u=255*(1-n.y)*(1-n.k)};case"cssrgb":var a=255*(1-n.c)*(1-n.k),c=255*(1-n.m)*(1-n.k),u=255*(1-n.y)*(1-n.k);return"rgb("+Math.round(a)+","+Math.round(c)+","+Math.round(u)+")";default:var i=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,i)}}function c(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(n.i=s.bounded(n.i,[-.5957,.5957]),n.q=s.bounded(n.q,[-.5226,.5226]),e){case"rgb":var a=255*(n.y+.956*n.i+.621*n.q),c=255*(n.y+-.272*n.i+-.647*n.q),u=255*(n.y+-1.106*n.i+-1.703*n.q);return a=s.bounded(a,[0,255]),c=s.bounded(c,[0,255]),u=s.bounded(u,[0,255]),{r:a,g:c,b:u};default:var i=o.convert({conversions:t,operations:o,helpers:s},"rgb",n);return o.convert({conversions:t,operations:o,helpers:s},e,i)}}function u(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers,a=s.getIlluminant("D65");switch(e){case"rgb":var c=[n.X,n.Y,n.Z].map(function(r){return r/100}),u=s.getTransform("INVERSE_SRGB_XYZ").map(function(r){return c.reduce(function(e,n,t){return r[t]*n+e},0)}).map(function(r){return r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055}).map(function(r){return 255*r}),i=C(u,3),h=i[0],l=i[1],v=i[2];return s.boundedRgb({r:h,g:l,b:v});case"lms":var p=[n.X,n.Y,n.Z].map(function(r){return r/100}),f=s.getTransform("BRADFORD").map(function(r){return p.reduce(function(e,n,t){return r[t]*n+e},0)});return{rho:f[0],gamma:f[1],beta:f[2]};case"cielab":var b=n.X/a.X,d=n.Y/a.Y,g=n.Z/a.Z,y=function(r){return r>.008856?s.cbrt(r):(903.3*r+16)/116},m=y(b),M=y(d);return{L:116*M-16,a:500*(m-M),b:200*(M-y(g))};case"cieluv":var Y=n.Y/a.Y,X=Y>.008856?116*s.cbrt(Y)-16:903.3*Y,Z=function(r){return 4*r.X/(r.X+15*r.Y+3*r.Z)},w=function(r){return 9*r.Y/(r.X+15*r.Y+3*r.Z)};return{L:X,u:13*X*(Z(n)-Z(a)),v:13*X*(w(n)-w(a))};case"xyY":return{x:n.X/(n.X+n.Y+n.Z),y:n.Y/(n.X+n.Y+n.Z),Y:n.Y};default:var L=s.boundedRgb(o.convert({conversions:t,operations:o,helpers:s},"rgb",n));return o.convert({conversions:t,operations:o,helpers:s},e,L)}}function i(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=n.Y/n.y*n.x,c=n.Y/n.y*(1-n.x-n.y);return{X:a,Y:n.Y,Z:c};default:var u=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function h(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=[n.rho,n.gamma,n.beta],c=s.getTransform("INVERSE_BRADFORD").map(function(r){return a.reduce(function(e,n,t){return r[t]*n+e},0)});return{X:100*c[0],Y:100*c[1],Z:100*c[2]};default:var u=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,u)}}function l(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),c=(n.L+16)/116,u=n.a/500+c,i=c-n.b/200,h=function(r){return Math.pow(r,3)>.008856?Math.pow(r,3):(116*r-16)/903.3},l=h(u),v=h(i),p=n.L>903.3*.008856?Math.pow(c,3):n.L/903.3;return{X:l*a.X,Y:p*a.Y,Z:v*a.Z};default:var f=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,f)}}function v(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"XYZ":var a=s.getIlluminant("D65"),c=function(r){return 4*r.X/(r.X+15*r.Y+3*r.Z)}(a),u=function(r){return 9*r.Y/(r.X+15*r.Y+3*r.Z)}(a),i=1/3*(52*n.L/(n.u+13*n.L*c)-1),h=n.L>903.3*.008856?Math.pow((n.L+16)/116,3):n.L/903.3,l=-5*h,v=(h*(39*n.L/(n.v+13*n.L*u)-5)-l)/(i- -1/3);return{X:100*v,Y:100*h,Z:100*(v*i+l)};case"cielch":var p=Math.sqrt(Math.pow(n.u,2)+Math.pow(n.v,2)),f=Math.atan2(n.v,n.u);return f<0&&(f+=2*Math.PI),f=s.toDeg(f),{L:n.L,C:p,h:f};default:var b=o.convert({conversions:t,operations:o,helpers:s},"XYZ",n);return o.convert({conversions:t,operations:o,helpers:s},e,b)}}function p(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"cieluv":var a=s.toRad(n.h),c=n.C*Math.cos(a),u=n.C*Math.sin(a);return{L:n.L,u:c,v:u};case"hsluv":if(n.L>99.9999999)return{hu:n.h,s:0,l:100};if(n.L<1e-8)return{hu:n.h,s:0,l:0};for(var i=(n.L+16)/1560896,h=i>.008856?i:n.L/903.3,l=s.getTransform("INVERSE_SRGB_XYZ"),v=[],p=0;p<3;p++)for(var f=l[p][0],b=l[p][1],d=l[p][2],g=0;g<2;g++){var y=(284517*f-94839*d)*h,m=(838422*d+769860*b+731718*f)*n.L*h-769860*g*n.L,M=(632260*d-126452*b)*h+126452*g;v.push({m:y/M,b:m/M})}var Y=Number.MAX_VALUE,X=s.toRad(n.h);v.forEach(function(r){var e=r.b/(Math.sin(X)-r.m*Math.cos(X));e>=0&&(Y=Math.min(Y,e))});var Z=Y;return{hu:n.h,s:n.C/Z*100,l:n.L};default:var w=o.convert({conversions:t,operations:o,helpers:s},"cieluv",n);return o.convert({conversions:t,operations:o,helpers:s},e,w)}}function f(r,e,n){var t=r.conversions,o=r.operations,s=r.helpers;switch(e){case"cielch":if(n.L>99.9999999)return{L:100,C:0,h:n.hu};if(n.L<1e-8)return{L:0,C:0,h:n.hu};for(var a=(n.l+16)/1560896,c=a>.008856?a:n.l/903.3,u=s.getTransform("INVERSE_SRGB_XYZ"),i=[],h=0;h<3;h++)for(var l=u[h][0],v=u[h][1],p=u[h][2],f=0;f<2;f++){var b=(284517*l-94839*p)*c,d=(838422*p+769860*v+731718*l)*n.l*c-769860*f*n.l,g=(632260*p-126452*v)*c+126452*f;i.push({m:b/g,b:d/g})}var y=Number.MAX_VALUE,m=s.toRad(n.hu);i.forEach(function(r){var e=r.b/(Math.sin(m)-r.m*Math.cos(m));e>=0&&(y=Math.min(y,e))});var M=y;return{L:n.l,C:M/100*n.s,h:n.hu};default:var Y=o.convert({conversions:t,operations:o,helpers:s},"cielch",n);return o.convert({conversions:t,operations:o,helpers:s},e,Y)}}function b(r,e){return Object.keys(r).every(function(r){return-1!==e.indexOf(r)})}function d(r,e,n,t){var o=r.operations.convert(r,"XYZ",e),s=r.operations.convert(r,"lms",n);if(t)a=r.operations.convert(r,"lms",t);else var a=r.operations.convert(r,"lms",r.helpers.getIlluminant("D65"));var c=r.helpers.getTransform("BRADFORD"),u=r.helpers.getTransform("INVERSE_BRADFORD"),i=[[s.rho/a.rho,0,0],[0,s.gamma/a.gamma,0],[0,0,s.beta/a.beta]],h=r.helpers.matrixMultiply(u,i),l=r.helpers.matrixMultiply(h,c),v=[[o.X],[o.Y],[o.Z]],p=r.helpers.matrixMultiply(l,v),f={X:p[0][0],Y:p[1][0],Z:p[2][0]};return r.helpers.ready(r,f)}function g(r,e,n,t){for(var o=r.operations.convert(r,"hsl",t),s=[{h:o.h,s:o.s,l:o.l}],a=0;a<n-1;a++)o.h=r.helpers.negMod(o.h+e,360),s.push({h:o.h,s:o.s,l:o.l});return r.helpers.ready(r,s)}function y(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.l+=e,t.l<0?t.l=0:t.l>100&&(t.l=100),r.helpers.ready(r,t)}function m(r,e){var n=r.operations.convert(r,"hsl",e);return n.h=(n.h+180)%360,r.helpers.ready(r,n)}function M(r,e,n){var t=r.operations.convert(r,"rgb",n);return t.r=255*((t.r/255-.5)*e+.5),t.r<0?t.r=0:t.r>255&&(t.r=255),t.g=255*((t.g/255-.5)*e+.5),t.g<0?t.g=0:t.g>255&&(t.g=255),t.b=255*((t.b/255-.5)*e+.5),t.b<0?t.b=0:t.b>255&&(t.b=255),r.helpers.ready(r,t)}function Y(r,e){var n=r.operations.convert(r,"rgb",e);return n=(299*n.r+587*n.g+114*n.b)/1e3>=128?{r:0,g:0,b:0}:{r:255,g:255,b:255},r.helpers.ready(r,n)}function X(r,e,n){if(Object.keys(r.conversions).indexOf(e)>-1){n.colour?n=n.colour:n.colours&&(n=n.colours);var t=r.helpers.determineMode(n);return t!=e?r.conversions[t].convert(r,e,n):n}return r.helpers.ready(r,e)}function Z(r,e,n,t,o){t=t||1,o=o||1;var s=r.operations.convert(r,"cielab",e),a=r.operations.convert(r,"cielab",n),c=Math.sqrt(Math.pow(s.a,2)+Math.pow(s.b,2)),u=c-Math.sqrt(Math.pow(a.a,2)+Math.pow(a.b,2)),i=s.L-a.L,h=s.a-a.a,l=s.b-a.b,v=Math.sqrt(Math.pow(h,2)+Math.pow(l,2)-Math.pow(u,2)),p=s.L<16?.511:.040975*s.L/(1.01765*s.L),f=.0638*c/(1.0131*c),b=Math.atan2(s.b,s.a),d=b>=0?b:b+360,g=164<=d&&d<=345?.56+Math.abs(.2*Math.cos(r.helpers.toRad(d+168))):.36+Math.abs(.4*Math.cos(r.helpers.toRad(d+35))),y=Math.pow(c,4)/(Math.pow(c,4)+1900),m=f*(y*g+1-y),M=Math.pow(i/(t*p),2);Math.pow(u/(o*f),2),Math.pow(v/m,2);return Math.sqrt(M+M+M)}function w(r,e,n,t){var o=r.operations.convert(r,"rgb",n),s=r.operations.convert(r,"rgb",t),a=[o];e-=1;for(var c=(s.r-o.r)/e,u=(s.g-o.g)/e,i=(s.b-o.b)/e,h={r:o.r,g:o.g,b:o.b},l=0;l<e-1;l++)h.r=r.helpers.slopeMod(h.r+c,255),h.g=r.helpers.slopeMod(h.g+u,255),h.b=r.helpers.slopeMod(h.b+i,255),a.push({r:h.r,g:h.g,b:h.b});return a.push(s),r.helpers.ready(r,a)}function L(r,e){var n=r.operations.convert(r,"rgb",e),t=(n.r+n.g+n.b)/3;return n={r:t,g:t,b:t},r.helpers.ready(r,n)}function R(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.h=r.helpers.negMod(t.h+e,360),r.helpers.ready(r,t)}function S(r,e){var n=r.operations.convert(r,"rgb",e);return n.r=r.helpers.negMod(255-n.r,255),n.g=r.helpers.negMod(255-n.g,255),n.b=r.helpers.negMod(255-n.b,255),r.helpers.ready(r,n)}function A(r,e){var n=r.operations.convert(r,"hsl",e);return n.l=100-n.l,r.helpers.ready(r,n)}function O(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:(t.h+o.h)/2,s:(t.s+o.s)/2,l:(t.l+o.l)/2};return r.helpers.ready(r,s)}function I(r,e,n){var t=r.operations.convert(r,"hsl",e),o=r.operations.convert(r,"hsl",n),s={h:t.h,s:t.s,l:t.l/100*(o.l/100)*100};return s.l=s.l>100?100:s.l,s.l=s.l<0?0:s.l,r.helpers.ready(r,s)}function x(r,e,n){var t=r.operations.convert(r,"hsl",n);return t.s+=e,t.s<0?t.s=0:t.s>100&&(t.s=100),r.helpers.ready(r,t)}function D(r,e){var n=r.operations.convert(r,"rgb",e),t={};return t.r=.393*n.r+.769*n.g+.189*n.b,t.g=.349*n.r+.686*n.g+.168*n.b,t.b=.272*n.r+.534*n.g+.131*n.b,r.helpers.ready(r,t)}function E(r,e,n){var t=r.operations.convert(r,"hsv",n);return t.v+=e,t.v<0?t.v=0:t.v>100&&(t.v=100),r.helpers.ready(r,t)}function j(r,e){var n=r.operations.convert(r,"xyY",e),t=(n.x-.332)/(n.y-.1858);return-449*Math.pow(t,3)+3525*Math.pow(t,2)-6823.3*t+5520.33}function T(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<3;o++)n.h=(n.h+90)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}function N(r,e){for(var n=r.operations.convert(r,"hsl",e),t=[{h:n.h,s:n.s,l:n.l}],o=0;o<2;o++)n.h=(n.h+120)%360,t.push({h:n.h,s:n.s,l:n.l});return r.helpers.ready(r,t)}function _(r,e){var n=r.operations.convert(r,"hsluv",e);return n.hu=(n.hu+180)%360,r.helpers.ready(r,n)}function q(r,e){for(var n=r.operations.convert(r,"hsluv",e),t=[{hu:n.hu,s:n.s,l:n.l}],o=0;o<2;o++)n.hu=(n.hu+120)%360,t.push({h:n.hu,s:n.s,l:n.l});return r.helpers.ready(r,t)}function k(r,e){for(var n=r.operations.convert(r,"hsluv",e),t=[{hu:n.hu,s:n.s,l:n.l}],o=0;o<3;o++)n.hu=(n.hu+90)%360,t.push({h:n.hu,s:n.s,l:n.l});return r.helpers.ready(r,t)}var B=r,F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},C=function(){function r(r,e){var n=[],t=!0,o=!1,s=void 0;try{for(var a,c=r[Symbol.iterator]();!(t=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(r){o=!0,s=r}finally{try{!t&&c.return&&c.return()}finally{if(o)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),V=function(r){if(Array.isArray(r)){for(var e=0,n=Array(r.length);e<r.length;e++)n[e]=r[e];return n}return Array.from(r)},P={hex:{test:function(r){return"string"==typeof r&&"#"===r.slice(0,1)},convert:B},rgb:{test:function(r){return b(r,["r","g","b"])},convert:e},cssrgb:{test:function(r){return"string"==typeof r&&"rgb("===r.slice(0,4)},convert:n},hsl:{test:function(r){return b(r,["h","s","l"])},convert:t},csshsl:{test:function(r){return"string"==typeof r&&"hsl("===r.slice(0,4)},convert:o},hsv:{test:function(r){return b(r,["h","s","v"])},convert:s},cmyk:{test:function(r){return b(r,["c","m","y","k"])},convert:a},yiq:{test:function(r){return b(r,["y","i","q"])},convert:c},XYZ:{test:function(r){return b(r,["X","Y","Z"])},convert:u},xyY:{test:function(r){return b(r,["x","y","Y"])},convert:i},lms:{test:function(r){return b(r,["rho","gamma","beta"])},convert:h},cielab:{test:function(r){return b(r,["L","a","b"])},convert:l},cieluv:{test:function(r){return b(r,["L","u","v"])},convert:v},cielch:{test:function(r){return b(r,["L","C","h"])},convert:p},hsluv:{test:function(r){return b(r,["hu","s","l"])},convert:f}},G={adapt:d,adjacent:g,brightness:y,complementary:m,contrast:M,contrastRatio:Y,convert:X,difference:Z,fade:w,greyscale:L,hue:R,invert:S,invertLightness:A,mid:O,multiply:I,saturation:x,sepia:D,shade:E,temperature:j,tetrad:T,triad:N,uniformComplementary:_,uniformTriad:q,uniformTetrad:k},U={ILLUMINANTS:{A:{X:1.0985*100,Y:100,Z:35.585},B:{X:99.072,Y:100,Z:85.223},C:{X:98.074,Y:100,Z:118.232},D50:{X:96.422,Y:100,Z:82.521},D55:{X:95.682,Y:100,Z:92.149},D65:{X:95.047,Y:100,Z:108.883},D75:{X:94.972,Y:100,Z:122.638},E:{X:100,Y:100,Z:100},F2:{X:.99186*100,Y:100,Z:67.393},F7:{X:95.041,Y:100,Z:108.747},F11:{X:1.00962*100,Y:100,Z:64.35}},TRANSFORMS:{BRADFORD:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],INVERSE_BRADFORD:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]],SRGB_XYZ:[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],INVERSE_SRGB_XYZ:[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]]}},z=function(r,e,n){var t=Object.keys(r.operations).reduce(function(e,t){var o=r.operations[t];return e[t]=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var a=t.slice(0).map(function(r){return"object"===(void 0===r?"undefined":F(r))?Object.assign({},r):r});if(n&&n.colours){return function e(n){var t=n.map(function(n){if(Array.isArray(n)){var t=e(n);return t.colours||t.colour}var s=o.apply(void 0,[r].concat(V(a),[n]));return"object"===(void 0===s?"undefined":F(s))?s.colours||s.colour:s});return"number"!=typeof t[0]?r.helpers.ready(r,t):t}(n.colours)}return o.apply(void 0,[r].concat(V(a),[n?n.colour:void 0]))},e},{});return n||(t=Object.assign(t,e)),t},H={getIlluminant:function(r){return U.ILLUMINANTS[r]},getTransform:function(r){return U.TRANSFORMS[r]},matrixMultiply:function(r,e){for(var n=[],t=0;t<r.length;t++){n[t]=[];for(var o=0;o<e[0].length;o++){for(var s=0,a=0;a<r[0].length;a++)s+=r[t][a]*e[a][o];n[t][o]=s}}return n},cbrt:function(r){if(Math.cbrt)return Math.cbrt(r);var e=Math.pow(Math.abs(r),1/3);return r<0?-e:e},toRad:function(r){return r*(Math.PI/180)},toDeg:function(r){return r*(180/Math.PI)},negMod:function(r,e){return(r%e+e)%e},slopeMod:function(r){function e(e,n){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r,e){return r>2*e?slopeMod(r-2*e,e):r>e?2*e-r:r<0?slopeMod(r+2*e,e):r}),bounded:function(r,e){return r<e[0]?r=e[0]:r>e[1]&&(r=e[1]),r},boundedRgb:function(r){var e=this,n=function(r){return e.bounded(r,[0,255])};return{r:n(r.r),g:n(r.g),b:n(r.b)}},determineMode:function(r){for(var e in P)if(P.hasOwnProperty(e)&&P[e].test(r))return e;return null},ready:function(r,e){var n=r.conversions,t=r.operations,o=r.helpers,s={};switch(Object.prototype.toString.call(e)){case"[object Object]":case"[object String]":s.colour=e;for(var a in n)n.hasOwnProperty(a)&&function(r){Object.defineProperty(s,r,{get:function(){o.determineMode(e);return t.convert({conversions:n,operations:t,helpers:o},r,e)},enumerable:!0})}(a);return s=Object.assign(s,z({conversions:n,operations:t,helpers:o},U,s));case"[object Array]":s.colours=e;for(var c in n)n.hasOwnProperty(c)&&function(r){Object.defineProperty(s,r,{get:function(){return function e(s){return s.map(function(s){return Array.isArray(s)?e(s):t.convert({conversions:n,operations:t,helpers:o},r,s)})}(e)},enumerable:!0})}(c);return s=Object.assign(s,z({conversions:n,operations:t,helpers:o},U,s));default:return null}}};return z({conversions:P,operations:G,helpers:H},U)});
