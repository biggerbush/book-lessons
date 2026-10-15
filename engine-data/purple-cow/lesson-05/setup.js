const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const T=(g,x,y,s,c,str,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},o||{}),g);e.textContent=str;return e};
const CYL=(g,cx,y,w,h,s,sw)=>{const r=w/2,ry=w*.12;mk('path',{d:'M'+(cx-r)+' '+y+'V'+(y+h)+'A'+r+' '+ry+' 0 0 0 '+(cx+r)+' '+(y+h)+'V'+y,fill:'var(--stage)',stroke:s,'stroke-width':sw},g);mk('ellipse',{cx:cx,cy:y,rx:r,ry:ry,fill:'var(--stage)',stroke:s,'stroke-width':sw},g)};

const MT=[1140,1240,1340,1440].map(x=>{const g=mk('g',{},$('meet'));mk('path',{d:'M'+x+' 444L1290 364',class:'s-muted','stroke-width':3,'stroke-dasharray':'6 8'},g);P(g,x,470,22,'ink');return g});

const CK=['Test','Tweak','Sand off'].map((s,i)=>{const y=384+i*90,g=mk('g',{},$('cks'));mk('rect',{x:150,y:y-34,width:40,height:40,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,220,y,40,'d5',s);
  const c=mk('path',{d:'M156 '+(y-14)+'l12 12 22-26',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);return [g,c]});
const starPts=k=>{let s='';for(let i=0;i<24;i++){const a=i*Math.PI/12-Math.PI/2,r=i%2?110+10*k:220-100*k;s+=(1040+r*Math.cos(a)).toFixed(1)+','+(470+r*Math.sin(a)).toFixed(1)+' '}return s};

const PR=[];for(let r=0;r<2;r++)for(let i=0;i<9;i++){const x=150+i*95,y=r?478:298,o=r===1&&i===4,g=mk('g',{},$('prods'));
  mk('rect',{x:x,y:y,width:70,height:120,rx:8,fill:'var(--line)',stroke:o?'var(--ink)':'var(--muted)','stroke-width':o?5:3},g);
  mk('path',{d:'M'+(x+12)+' '+(y+50)+'h46',stroke:o?'var(--ink)':'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);PR.push(g)}
P($('shop'),1250,360,40,'ink');mk('circle',{cx:1232,cy:352,r:7,fill:'var(--stage)'},$('shop'));

for(let i=0;i<5;i++)CYL($('smallc'),760+i*160,480,120,140,'var(--ink)',5);
const DR=[[440,90],[468,150],[490,110]].map(q=>[mk('line',{x1:q[0],y1:430,x2:q[0],y2:430,stroke:'var(--loss)','stroke-width':10,'stroke-linecap':'round'},$('drips')),q[1]]);

[220,380,540,1060,1220,1380].forEach(x=>{CYL($('cans5'),x,420,120,140,'var(--muted)',5);T($('qm'),x,395,36,'d','?',{'text-anchor':'middle',style:'fill:var(--muted)'})});
const CR=[];for(let i=0;i<8;i++){const x=220+i*166,g=mk('g',{},$('crowd5'));P(g,x,760,18,'ink');mk('rect',{x:x-22,y:690,width:44,height:40,rx:10,class:'gain'},g);T(g,x,722,30,'d','!',{'text-anchor':'middle',style:'fill:var(--on-gain)'});CR.push(g)}

const ARC=(a1,a2,R)=>{const f=d=>(480+R*Math.cos(d*Math.PI/180)).toFixed(1)+' '+(620-R*Math.sin(d*Math.PI/180)).toFixed(1);return 'M'+f(a1)+'A'+R+' '+R+' 0 0 1 '+f(a2)};
[[180,112,'var(--line)'],[108,62,'var(--gain)'],[58,0,'var(--loss)']].forEach(z=>mk('path',{d:ARC(z[0],z[1],280),fill:'none',stroke:z[2],'stroke-width':28},$('dialG')));
P($('cust'),960,380,28,'ink');

for(let i=0;i<5;i++){const a=(-170+i*40)*Math.PI/180;mk('path',{d:'M'+(1380+60*Math.cos(a)).toFixed(1)+' '+(190+60*Math.sin(a)).toFixed(1)+'L'+(1380+78*Math.cos(a)).toFixed(1)+' '+(190+78*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays'))}