import{w as fe}from"./with-props-BGqgUz1f.js";import{r as P,l as g}from"./chunk-D52XG6IA-6zk5tNpU.js";import{B as ge,C as pe,b as me,c as xe,d as ye}from"./button-DefJ-qzj.js";import{h as Me,i as be,m as we,D as Se,a as Ee,b as _e,c as Ie,d as ke,e as Ne,M as Ae}from"./menu-DjXkWOgy.js";import{F as ve}from"./footer-53-rCgd2.js";import"./index-C61taIVb.js";import"./index-BrljsPW0.js";const te=P.forwardRef(({className:t,type:e,...s},r)=>g.jsx("input",{type:e,className:Me("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...s}));te.displayName="Input";function E(t){return Array.isArray?Array.isArray(t):re(t)==="[object Array]"}const Re=1/0;function Le(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Re?"-0":e}function Ce(t){return t==null?"":Le(t)}function w(t){return typeof t=="string"}function se(t){return typeof t=="number"}function je(t){return t===!0||t===!1||Oe(t)&&re(t)=="[object Boolean]"}function ne(t){return typeof t=="object"}function Oe(t){return ne(t)&&t!==null}function x(t){return t!=null}function K(t){return!t.trim().length}function re(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Te="Incorrect 'index' type",Pe=t=>`Invalid value for key ${t}`,$e=t=>`Pattern length exceeds max of ${t}.`,Fe=t=>`Missing ${t} property in key`,De=t=>`Property 'weight' in key '${t}' must be a positive integer`,Q=Object.prototype.hasOwnProperty;class Ke{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=ie(r);this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ie(t){let e=null,s=null,r=null,n=1,i=null;if(w(t)||E(t))r=t,e=X(t),s=B(t);else{if(!Q.call(t,"name"))throw new Error(Fe("name"));const o=t.name;if(r=o,Q.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(De(o));e=X(o),s=B(o),i=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:i}}function X(t){return E(t)?t:t.split(".")}function B(t){return E(t)?t.join("."):t}function Be(t,e){let s=[],r=!1;const n=(i,o,c)=>{if(x(i))if(!o[c])s.push(i);else{let a=o[c];const l=i[a];if(!x(l))return;if(c===o.length-1&&(w(l)||se(l)||je(l)))s.push(Ce(l));else if(E(l)){r=!0;for(let h=0,d=l.length;h<d;h+=1)n(l[h],o,c+1)}else o.length&&n(l,o,c+1)}};return n(t,w(e)?e.split("."):e,0),r?s:s[0]}const He={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},We={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ze={location:0,threshold:.6,distance:100},Ve={useExtendedSearch:!1,getFn:Be,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...We,...He,...ze,...Ve};const Je=/[^ ]+/g;function Ye(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(n){const i=n.match(Je).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*t),c=parseFloat(Math.round(o*r)/r);return s.set(i,c),c},clear(){s.clear()}}}class Y{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Ye(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,w(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();w(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!x(e)||K(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,i)=>{let o=n.getFn?n.getFn(e):this.getFn(e,n.path);if(x(o)){if(E(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(x(h))if(w(h)&&!K(h)){let d={v:h,i:l,n:this.norm.get(h)};c.push(d)}else E(h)&&h.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}r.$[i]=c}else if(w(o)&&!K(o)){let c={v:o,n:this.norm.get(o)};r.$[i]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function oe(t,e,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new Y({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(ie)),n.setSources(e),n.create(),n}function Ge(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:r,records:n}=t,i=new Y({getFn:e,fieldNormWeight:s});return i.setKeys(r),i.setIndexRecords(n),i}function T(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(r-s);return n?o+c/n:c?1:o}function Ue(t=[],e=u.minMatchCharLength){let s=[],r=-1,n=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&r===-1?r=i:!c&&r!==-1&&(n=i-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[i-1]&&i-r>=e&&s.push([r,i-1]),s}const v=32;function Qe(t,e,s,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>v)throw new Error($e(v));const h=e.length,d=t.length,f=Math.max(0,Math.min(r,d));let p=i,m=f;const y=c>1||a,N=y?Array(d):[];let S;for(;(S=t.indexOf(e,m))>-1;){let M=T(e,{currentLocation:S,expectedLocation:f,distance:n,ignoreLocation:l});if(p=Math.min(M,p),m=S+h,y){let _=0;for(;_<h;)N[S+_]=1,_+=1}}m=-1;let R=[],A=1,j=h+d;const de=1<<h-1;for(let M=0;M<h;M+=1){let _=0,I=j;for(;_<I;)T(e,{errors:M,currentLocation:f+I,expectedLocation:f,distance:n,ignoreLocation:l})<=p?_=I:j=I,I=Math.floor((j-_)/2+_);j=I;let G=Math.max(1,f-I+1),D=o?d:Math.min(f+I,d)+h,L=Array(D+2);L[D+1]=(1<<M)-1;for(let b=D;b>=G;b-=1){let O=b-1,U=s[t.charAt(O)];if(y&&(N[O]=+!!U),L[b]=(L[b+1]<<1|1)&U,M&&(L[b]|=(R[b+1]|R[b])<<1|1|R[b+1]),L[b]&de&&(A=T(e,{errors:M,currentLocation:O,expectedLocation:f,distance:n,ignoreLocation:l}),A<=p)){if(p=A,m=O,m<=f)break;G=Math.max(1,2*f-m)}}if(T(e,{errors:M+1,currentLocation:f,expectedLocation:f,distance:n,ignoreLocation:l})>p)break;R=L}const F={isMatch:m>=0,score:Math.max(.001,A)};if(y){const M=Ue(N,c);M.length?a&&(F.indices=M):F.isMatch=!1}return F}function Xe(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}class ce{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,p)=>{this.chunks.push({pattern:f,alphabet:Xe(f),startIndex:p})},d=this.pattern.length;if(d>v){let f=0;const p=d%v,m=d-p;for(;f<m;)h(this.pattern.substr(f,v),f),f+=v;if(p){const y=d-v;h(this.pattern.substr(y),y)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return r&&(m.indices=[[0,e.length-1]]),m}const{location:n,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:m,alphabet:y,startIndex:N})=>{const{isMatch:S,score:R,indices:A}=Qe(e,m,y,{location:n+N,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:r,ignoreLocation:l});S&&(f=!0),d+=R,S&&A&&(h=[...h,...A])});let p={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(p.indices=h),p}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return Z(e,this.multiRegex)}static isSingleMatch(e){return Z(e,this.singleRegex)}search(){}}function Z(t,e){const s=t.match(e);return s?s[1]:null}class Ze extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class qe extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class et extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class tt extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class st extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class nt extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ae extends k{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new ce(e,{location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class le extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const n=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+i,n.push([r,s-1]);const o=!!n.length;return{isMatch:o,score:o?0:1,indices:n}}}const H=[Ze,le,et,tt,nt,st,qe,ae],q=H.length,rt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,it="|";function ot(t,e={}){return t.split(it).map(s=>{let r=s.trim().split(rt).filter(i=>i&&!!i.trim()),n=[];for(let i=0,o=r.length;i<o;i+=1){const c=r[i];let a=!1,l=-1;for(;!a&&++l<q;){const h=H[l];let d=h.isMultiMatch(c);d&&(n.push(new h(d,e)),a=!0)}if(!a)for(l=-1;++l<q;){const h=H[l];let d=h.isSingleMatch(c);if(d){n.push(new h(d,e));break}}}return n})}const ct=new Set([ae.type,le.type]);class at{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:o=u.findAllMatches,location:c=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=ot(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];o.length=0,i=0;for(let d=0,f=h.length;d<f;d+=1){const p=h[d],{isMatch:m,indices:y,score:N}=p.search(e);if(m){if(i+=1,c+=N,r){const S=p.constructor.type;ct.has(S)?o=[...o,...y]:o.push(y)}}else{c=0,i=0,o.length=0;break}}if(i){let d={isMatch:!0,score:c/i};return r&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const W=[];function lt(...t){W.push(...t)}function z(t,e){for(let s=0,r=W.length;s<r;s+=1){let n=W[s];if(n.condition(t,e))return new n(t,e)}return new ce(t,e)}const $={AND:"$and",OR:"$or"},V={PATH:"$path",PATTERN:"$val"},J=t=>!!(t[$.AND]||t[$.OR]),ht=t=>!!t[V.PATH],ut=t=>!E(t)&&ne(t)&&!J(t),ee=t=>({[$.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function he(t,e,{auto:s=!0}={}){const r=n=>{let i=Object.keys(n);const o=ht(n);if(!o&&i.length>1&&!J(n))return r(ee(n));if(ut(n)){const a=o?n[V.PATH]:i[0],l=o?n[V.PATTERN]:n[a];if(!w(l))throw new Error(Pe(a));const h={keyId:B(a),pattern:l};return s&&(h.searcher=z(l,e)),h}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=n[a];E(l)&&l.forEach(h=>{c.children.push(r(h))})}),c};return J(t)||(t=ee(t)),r(t)}function dt(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:i,score:o})=>{const c=n?n.weight:null;r*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),s.score=r})}function ft(t,e){const s=t.matches;e.matches=[],x(s)&&s.forEach(r=>{if(!x(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let o={indices:n,value:i};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function gt(t,e){e.score=t.score}function pt(t,e,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return s&&n.push(ft),r&&n.push(gt),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return n.length&&n.forEach(a=>{a(i,c)}),c})}class C{constructor(e,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Ke(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Y))throw new Error(Te);this._myIndex=s||oe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){x(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,n-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=w(e)?w(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return dt(a,{ignoreFieldNorm:c}),i&&a.sort(o),se(s)&&s>-1&&(a=a.slice(0,s)),pt(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const s=z(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:o,n:c})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=s.searchIn(i);a&&n.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:h}]})}),n}_searchLogical(e){const s=he(e,this.options),r=(c,a,l)=>{if(!c.children){const{keyId:d,searcher:f}=c,p=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return p&&p.length?[{idx:l,item:a,matches:p}]:[]}const h=[];for(let d=0,f=c.children.length;d<f;d+=1){const p=c.children[d],m=r(p,a,l);if(m.length)h.push(...m);else if(c.operator===$.AND)return[]}return h},n=this._myIndex.records,i={},o=[];return n.forEach(({$:c,i:a})=>{if(x(c)){let l=r(s,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),o}_searchObjectList(e){const s=z(e,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:o,i:c})=>{if(!x(o))return;let a=[];r.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:o[h],searcher:s}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:s,searcher:r}){if(!x(s))return[];let n=[];if(E(s))s.forEach(({v:i,i:o,n:c})=>{if(!x(i))return;const{isMatch:a,score:l,indices:h}=r.searchIn(i);a&&n.push({score:l,key:e,value:i,idx:o,norm:c,indices:h})});else{const{v:i,n:o}=s,{isMatch:c,score:a,indices:l}=r.searchIn(i);c&&n.push({score:a,key:e,value:i,norm:o,indices:l})}return n}}C.version="7.0.0";C.createIndex=oe;C.parseIndex=Ge;C.config=u;C.parseQuery=he;lt(at);const ue=[{title:"Braider - Karim Salon and Spa",location:"Hurlingam Plaza, Nairobi, Kenya",type:"Full-time",description:`✨ We’re Hiring Braiders! ✨

Join our team of experts and passionate stylists catering to natural hair!

Requirements:
● Skilled in braiding (cornrows, box braids, twists, etc.)
● Reliable and professional
● Passionate about creating stunning styles
● Team-oriented with great customer service

Perks:
● Supportive, creative work environment
● Opportunities to grow your skills

To Apply:
● Send in your CV and Portfolio (images of your work)

📧 Apply now 📧
karimsalonandspa@gmail.com`,link:""},{title:"Nail Technician - Karim Salon and Spa",location:"Hurlingam Plaza, Nairobi, Kenya",type:"Full-time",description:`💅 We’re Hiring Nail Techs! 💅

Be part of our beautiful salon experience!

Requirements:
● Proficient in manicures, pedicures, and nail art
● Detail-oriented and creative
● Reliable, professional, and friendly
● Passionate about delivering exceptional service

Perks:
● Inspiring, supportive work environment
● Room to grow your skills and creativity

To Apply:
● Send in your CV and Portfolio (images of your work)

📧 Apply now 📧
karimsalonandspa@gmail.com`,link:""},{title:"Salon Manager - Karim Salon and Spa",location:"Hurlingam Plaza, Nairobi, Kenya",type:"Full-time",shortDescription:"",description:`🌟 We’re Hiring a Salon Manager! 🌟

Lead Karim Salon catering to natural hair and beauty!

Requirements:
● Proven experience in salon management or similar role
● Strong leadership and organizational skills
● Passionate about team building and customer service
● Ability to manage scheduling, inventory, and operations

Perks:
● Be part of an exciting new salon launch
● Collaborative and empowering work environment
● Opportunities for professional growth

To Apply:
● Send in your CV and a recommendation letter

📧 Apply now 📧
karimsalonandspa@gmail.com`,link:""}],mt=new C(ue,{keys:["title","location","type"],threshold:.4,includeScore:!0});function xt(){const t=P.useRef(null),[e,s]=P.useState(""),r=P.useMemo(()=>e?mt.search(e).map(n=>n.item):ue,[e]);return g.jsxs("div",{className:"h-full min-h-screen w-full max-w-screen-lg items-center p-8 pt-40 2xl:max-w-screen-xl",children:[g.jsxs("div",{className:"relative mb-8",children:[g.jsx(te,{className:"h-14 rounded-xl pl-14 pr-28 md:text-lg",placeholder:"Job title, keywords or company",onChange:n=>s(n.target.value),ref:t}),g.jsx(be,{className:"absolute left-4 top-4 size-6 text-black"}),g.jsx(ge,{variant:"secondary",className:"absolute right-4 top-2.5 h-9 bg-black text-white hover:bg-black/80",onClick:()=>{var n;return e||((n=t.current)==null?void 0:n.focus())},children:"Search"})]}),g.jsx("div",{className:"grid grid-cols-2 items-start justify-center gap-6",children:we(r,n=>g.jsxs(Se,{children:[g.jsx(Ee,{className:"rounded-xl",children:g.jsxs(pe,{className:"h-64 overflow-hidden rounded-xl border-black p-6 text-left",children:[g.jsx(me,{className:"mb-2 line-clamp-1 font-sans font-normal leading-tight opacity-70",children:n.title}),g.jsxs(xe,{className:"shrink overflow-hidden p-0",children:[g.jsx("div",{className:"leading-tight",children:n.location}),g.jsx("div",{className:"leading-tight",children:n.type}),g.jsx(ye,{className:"line-clamp-5 whitespace-pre-wrap pt-4",children:n.description})]})]})}),g.jsxs(_e,{className:"sm:rounded-xl",children:[g.jsxs(Ie,{className:"mt-2 space-y-0",children:[g.jsx(ke,{className:"mb-2 font-sans text-2xl font-normal leading-tight opacity-70",children:n.title}),g.jsx("div",{className:"leading-tight",children:n.location}),g.jsx("div",{className:"leading-tight",children:n.type})]}),g.jsx(Ne,{className:"whitespace-pre-wrap text-base",children:n.description})]})]}))})]})}const yt=()=>g.jsx(g.Fragment,{children:g.jsxs("div",{className:"relative flex min-h-screen flex-col items-center",children:[g.jsx(Ae,{className:"stroke-black"}),g.jsx(xt,{}),g.jsx(ve,{})]})}),Nt=fe(yt);export{Nt as default};