const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const T=(g,x,y,s,fs,cls,st,an)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls},g);if(st)e.setAttribute('style',st);if(an)e.setAttribute('text-anchor',an);e.textContent=s;return e};
const chips=(id,list,x,y0,dy,w,h)=>list.map((s,i)=>{const c=mk('g',{},$(id));mk('rect',{x:x,y:y0+i*dy,width:w,height:h,rx:h/2,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},c);T(c,x+30,y0+i*dy+h/2+8,s,22,'m','fill:var(--ink)');return c});
const C1=chips('ch1',['TAKE RISKS','BET ON YOURSELF','STAY OPTIMISTIC'],860,250,90,620,64);
const C2=chips('ch2',['CAUTION','FRUGALITY','FEAR'],960,240,80,520,60);
const DC=[[600,360],[730,470]].map(([x,y],k)=>{const g=mk('g',{},$('dice'));mk('rect',{x:-55,y:-55,width:110,height:110,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);(k?[[-28,-28],[28,-28],[0,0],[-28,28],[28,28]]:[[-28,-28],[0,0],[28,28]]).forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:10,class:'gain'},g));return [g,x,y]});
const DB=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('dbt')),x=920+i*115;fig(g,x,620,18,'ink');T(g,x,585,'?',30,'d','fill:var(--loss)','middle');return g});
fig($('trd'),300,380,40,'ink');mk('path',{d:'M300 440l-10 18 10 34 10-34z',class:'gain'},$('trd'));
const BL=[];for(let i=0;i<12;i++)BL.push(mk('rect',{x:1160+(i%2?8:-8),y:620-i*28,width:280,height:20,rx:4,class:'gain',stroke:'var(--ink)','stroke-width':3},$('mny')));
const ST=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('bets')),x=180+i*140;for(let j=0;j<(i+1)*2;j++)mk('ellipse',{cx:x,cy:600-j*22,rx:50,ry:14,fill:j%2?'var(--loss)':'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);return [g,x]});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(700+100*c).toFixed(1)+' '+(430+100*s).toFixed(1)+'L'+(700+112*c).toFixed(1)+' '+(430+112*s).toFixed(1),class:'s-ink','stroke-width':5},$('ticks'))}
const TK=[.4,.65,1].map((f,i)=>{const y=420+i*80,x=920+540*f,g=$('trk');mk('path',{d:'M920 '+y+'H1460',class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);
  const ln=mk('path',{d:'M920 '+y+'H920',stroke:i==2?'var(--gain)':'var(--ink)','stroke-width':8,'stroke-linecap':'round',fill:'none'},g);
  const end=i==2?mk('circle',{cx:x,cy:y,r:14,class:'gain'},g):mk('path',{d:'M'+(x-12)+' '+(y-12)+'l24 24m0-24l-24 24',class:'s-loss','stroke-width':6,'stroke-linecap':'round'},g);return [ln,y,f,end]});
for(let i=0;i<5;i++)mk('ellipse',{cx:420,cy:600-i*20,rx:60,ry:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('cst'));
const RN=[];for(let i=0;i<6;i++)RN.push(mk('path',{d:'M0 0',class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('rain')));
// closing scene: a stack of coins resting on the cushion
const CK=[];for(let i=0;i<6;i++){const y=616-i*34,g=mk('g',{},$('cstk'));
  mk('path',{d:'M1190 '+y+'v14a90 22 0 0 0 180 0v-14',fill:i%2?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);
  mk('ellipse',{cx:1280,cy:y,rx:90,ry:22,fill:i%2?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);CK.push(g)}
const RN8=[];for(let i=0;i<5;i++)RN8.push(mk('path',{d:'M0 0',class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('rain8')));