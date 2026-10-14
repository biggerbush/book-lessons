const fig=(g,x,y,r,c)=>{const a=c?{class:c}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const unit=(par,x,y,r,f)=>{const o=mk('g',{},par),i=mk('g',{fill:f||'var(--ink)'},o);fig(i,x,y,r);return [o,i]};
const TXT=(par,x,y,s,fs,cls,anc)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls},par);if(anc)e.setAttribute('text-anchor',anc);e.textContent=s;return e};
const along=(P,k)=>{const L=[];let T=0;for(let i=1;i<P.length;i++){const l=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);L.push(l);T+=l}let d=k*T;for(let i=0;i<L.length;i++){if(d<=L[i]||i===L.length-1){const f=Math.min(1,d/L[i]);return [P[i][0]+(P[i+1][0]-P[i][0])*f,P[i][1]+(P[i+1][1]-P[i][1])*f]}d-=L[i]}};
// title crowd: 5x4 grid, equal cells, each figure stays in its own cell
const crowd=[];for(let i=0;i<20;i++)crowd.push(unit($('crowd'),1190+(i%5)*64,270+Math.floor(i/5)*72,12));
const QT=[3,9,14,17];
const cards=['TOP GRADES','TEST SCORES','LEADERSHIP','PHYSICAL FITNESS'].map((s,i)=>{const y=260+i*104,g=mk('g',{},$('cards'));
  mk('rect',{x:640,y:y,width:320,height:80,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);TXT(g,670,y+50,s,22,'m');
  mk('path',{d:'M960 '+(y+40)+'C1010 '+(y+40)+' 1010 460 1060 460',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 8'},$('links'));return g});
const pills=['DRILLS','EXHAUSTION','CONSTANT PRESSURE'].map((s,i)=>{const y=290+i*96,g=mk('g',{},$('pills'));
  mk('rect',{x:520,y:y,width:380,height:68,rx:34,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);TXT(g,710,y+43,s,22,'m','middle');return g});
const row=[];for(let i=0;i<6;i++)row.push(unit($('row'),560+i*100,660,16));
// grit scale answer circles, wider spacing so the larger labels fit
const SEL=[4,3],dots=[0,1].map(k=>{const a=[];for(let j=0;j<5;j++)a.push(mk('circle',{cx:600+j*140,cy:470+k*170,r:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('dt'+k)));return a});
const MP=[[930,610],[1300,520],[1060,440],[1200,360],[1160,295]],FP=[[820,660],[1060,520],[1440,260]];
const wk=[0,1,2].map(i=>unit($('walk'),240+i*30,668,14,i===0?'var(--gain)':'var(--ink)'));