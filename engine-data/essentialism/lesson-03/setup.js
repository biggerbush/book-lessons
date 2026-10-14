const P=(g,x,y,r,c)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},q);return q};
const TX=(g,x,y,s,c,txt,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},o||{}),g);e.textContent=txt;return e};
const plane=(g,c)=>{const q=mk('g',{},g);['M-50-8h80q24 0 24 8t-24 8h-80z','M-6-6l-26-38h14l34 38z','M-6 6l-26 38h14l34-38z','M-50-8l-10-22h12l14 22z'].forEach(d=>mk('path',{d:d,class:c},q));return q};
const drw=(e,k)=>e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const lnk=(d,g,c,w)=>mk('path',{d:d,fill:'none',stroke:c,'stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);

P($('jugp'),1340,650,28,'ink');
const BL=[0,1,2,3,4].map(i=>mk('circle',{r:16,class:i==4?'loss':'gain'},$('balls')));

const DR=[0,1,2,3,4].map(i=>{const x=120+i*230,g=mk('g',{},$('doors'));
  mk('rect',{x:x,y:300,width:170,height:320,fill:'var(--gain)','fill-opacity':.3},g);
  const lf=mk('rect',{x:x,y:300,width:110,height:320,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const kn=mk('circle',{cx:x+90,cy:470,r:8,class:'ink'},g);
  mk('rect',{x:x,y:300,width:170,height:320,fill:'none',stroke:'var(--ink)','stroke-width':7},g);
  const lb=TX(g,x+85,280,26,'m',i==2?'YES':'NO',{'text-anchor':'middle',style:'fill:var('+(i==2?'--gain':'--loss')+')'});
  return [x,lf,kn,lb]});
P($('walker'),665,520,22,'ink');

P($('bp'),260,380,36,'ink');
const IT=['Work','Gym','Emails','Side project','Volunteering','Call a friend','Online course','Reply to texts','Dinner party','Big report'].map((s,i)=>{const y=270+i*46,g=mk('g',{},$('items'));
  mk('rect',{x:790,y:y-22,width:24,height:24,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':3},g);TX(g,834,y,26,'b',s);
  const l=mk('line',{x1:330,y1:470,x2:756,y2:y-10,stroke:'var(--gain)','stroke-linecap':'round'},$('effl'));return [g,l]});

// Southwest cards
const IC=['M-22 0a22 22 0 1 0 44 0a22 22 0 1 0-44 0M-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0','M-14-24v30h28v18M-14 6v18','M0-24l7 15 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2z'];
const CD=['MEALS','ASSIGNED SEATS','FIRST CLASS'].map((s,i)=>{const y=250+i*120,g=mk('g',{},$('cards'));
  const r=mk('rect',{x:120,y:y,width:600,height:96,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  mk('path',{d:IC[i],transform:'translate(180 '+(y+48)+')',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  TX(g,236,y+57,26,'m',s,{style:'fill:var(--ink)'});
  mk('circle',{cx:660,cy:y+48,r:30,fill:'none',stroke:'var(--line)','stroke-width':3},g);
  const x1=lnk('M644 '+(y+32)+'L676 '+(y+64),g,'var(--loss)',7),x2=lnk('M676 '+(y+32)+'L644 '+(y+64),g,'var(--loss)',7);
  return [g,x1,x2,r]});
// three separate, non-crossing direct routes
const RP=[[[880,370],[1180,320]],[[1250,340],[1440,400]],[[900,560],[1420,470]]];
const RT=RP.map(q=>lnk('M'+q[0]+'L'+q[1],$('routes'),'var(--gain)',5));
RP.forEach(q=>q.forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:11,class:'ink'},$('cities'))));
const SW=plane($('swp'),'gain');

const CP=plane($('cop'),'ink');
const DP=[0,1,2].map(()=>mk('circle',{cx:1340,cy:680,r:8,class:'loss'},$('drips')));

[1100,1150,1200].forEach(x=>P($('fam'),x,300,16,'ink'));
const FAM=[...$('fam').querySelectorAll('circle,path')];
P($('me'),800,650,26,'ink');

for(let i=0;i<7;i++)mk('circle',{cx:200,cy:280+i*70,r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const SCR=[392,492,612].map(y=>{let d='M480 '+y;for(let k=0;k<22;k++)d+='q10 '+(k%2?-12:12)+' 20 0';return lnk(d,$('scr'),'var(--ink)',5)});

P($('mp'),1270,370,34,'ink');