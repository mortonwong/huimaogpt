function s(t,e){var n,r,a=t.attrs[t.attrIndex("href")][1];for(n=0;n<e.length;++n){if(r=e[n],typeof r.matcher=="function"){if(r.matcher(a,r))return r;continue}return r}}function v(t,e,n){Object.keys(n).forEach(function(r){var a,u=n[r];r==="className"&&(r="class"),a=e[t].attrIndex(r),a<0?e[t].attrPush([r,u]):e[t].attrs[a][1]=u})}function l(t,e){e?e=Array.isArray(e)?e:[e]:e=[],Object.freeze(e);var n=t.renderer.rules.link_open||this.defaultRender;t.renderer.rules.link_open=function(r,a,u,c,d){var i=s(r[a],e),f=i&&i.attrs;return f&&v(a,r,f),n(r,a,u,c,d)}}l.defaultRender=function(t,e,n,r,a){return a.renderToken(t,e,n)};var h=l;const o=h;export{o as m};