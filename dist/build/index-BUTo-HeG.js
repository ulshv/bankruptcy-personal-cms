import{cr as R,cs as T}from"./strapi-CH0gFqpy.js";import{a as r}from"./index-BRVyLNfZ.js";function N(s,t){var i,c;R(1,arguments);var e=T(s);if(isNaN(e.getTime()))throw new RangeError("Invalid time value");var o=String((i=t?.format)!==null&&i!==void 0?i:"extended"),a=String((c=t?.representation)!==null&&c!==void 0?c:"complete");if(o!=="extended"&&o!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(a!=="date"&&a!=="time"&&a!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var n="",v="",m=o==="extended"?"-":"",g=o==="extended"?":":"";if(a!=="time"){var f=r(e.getDate(),2),u=r(e.getMonth()+1,2),p=r(e.getFullYear(),4);n="".concat(p).concat(m).concat(u).concat(m).concat(f)}if(a!=="date"){var d=e.getTimezoneOffset();if(d!==0){var l=Math.abs(d),h=r(Math.floor(l/60),2),w=r(l%60,2),x=d<0?"+":"-";v="".concat(x).concat(h,":").concat(w)}else v="Z";var D=r(e.getHours(),2),b=r(e.getMinutes(),2),M=r(e.getSeconds(),2),S=n===""?"":"T",E=[D,b,M].join(g);n="".concat(n).concat(S).concat(E).concat(v)}return n}export{N as f};
