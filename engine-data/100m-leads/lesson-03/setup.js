const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return g};
const tx=(g,x,y,s,fs,c,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:c},o||{}),g);e.textContent=s;return e};
const ln=(g,d,c,w)=>mk('path',{d:d,class:c,fill:'none','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);
const draw=(e,k)=>e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const star=(cx,cy,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const PR=[0,1,2,3].map(i=>{const g=mk('g',{},$('prows')),y=330+i*90;mk('circle',{cx:1240,cy:y,r:22,class:i===1?'gain':'ink'},g);mk('rect',{x:1280,y:y-8,width:110,height:16,rx:8,fill:'var(--line)'},g);return g});
fig($('you1'),240,470,36,'gain');tx($('you1'),240,670,'YOU',22,'m',{'text-anchor':'middle'});
const CARD=[],BR=[],DOT=[];['FRIENDS','FAMILY','OLD COWORKERS','CLASSMATES'].forEach((s,i)=>{const y=240+i*100,g=mk('g',{},$('cards'));mk('rect',{x:1000,y:y,width:440,height:80,rx:40,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('circle',{cx:1044,cy:y+40,r:18,class:'ink'},g);tx(g,1080,y+48,s,22,'m');CARD.push(g);BR.push(ln($('bridges'),'M300 540Q660 '+(y+40)+' 996 '+(y+40),'s-gain',5));DOT.push(mk('circle',{r:9,class:'gain'},$('bridges')))});
for(let i=0;i<5;i++)mk('circle',{cx:200+i*75,cy:240,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const NB=[];for(let i=0;i<9;i++)NB.push(mk('rect',{x:200,y:300+i*52,width:160+(i*67)%140,height:18,rx:9,fill:'var(--ink)'},$('nbars')));
// scroll lines: 11 lines; last line bottom at 674, roller top at 715 when fully open (41px clear)
const SLN=[];for(let i=0;i<11;i++)SLN.push(mk('rect',{x:1090,y:280+i*38,width:180+(i*53)%100,height:14,rx:7,fill:'var(--muted)'},$('slines')));
const AC=[['A','Acknowledge','NOTICE SOMETHING'],['C','Compliment','SAY SOMETHING KIND'],['A','Ask','KEEP THEM TALKING']].map((a,i)=>{const x=120+i*473,g=mk('g',{},$('aca'));const r=mk('rect',{x:x,y:430,width:414,height:290,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);tx(g,x+36,560,a[0],110,'d',{style:'fill:var(--gain)'});tx(g,x+36,640,a[1],44,'d5');tx(g,x+36,690,a[2],20,'m');return [g,r]});
fig($('p4you'),300,470,34,'gain');const FR4=fig($('p4fr'),700,470,34,'ink');
fig($('trf'),260,420,36,'gain');
const CH5=[[590,420,260,'l'],[760,485,250,'r'],[590,550,220,'l']].map(b=>{const g=mk('g',{},$('chat5'));mk('rect',b[3]==='l'?{x:b[0],y:b[1],width:b[2],height:50,rx:18,fill:'var(--line)'}:{x:b[0],y:b[1],width:b[2],height:50,rx:18,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);return g});
tx(CH5[0],614,452,'RUNNING TALK',18,'m');
[1220,1360].forEach(x=>fig($('refp'),x,430,28,'gain'));
const PL=['A conversation','A first client','An introduction'].map((s,i)=>{const y=230+i*100,g=mk('g',{},$('pl6'));mk('rect',{x:420,y:y,width:400,height:80,rx:40,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,450,y+52,s,34,'d5');return [g,ln($('br6'),'M320 365C370 365 370 '+(y+40)+' 416 '+(y+40),'s-gain',5)]});
const ST=[];for(let i=0;i<5;i++)ST.push(mk('path',{d:star(160+i*80,620,32),fill:'var(--line)'},$('st6')));
let gd='';for(let i=0;i<10;i++){const b=i*Math.PI/5;[[-.2,105],[-.12,130],[.12,130],[.2,105]].forEach((q,j)=>{gd+=(i+j?'L':'M')+(q[1]*Math.cos(b+q[0])).toFixed(1)+' '+(q[1]*Math.sin(b+q[0])).toFixed(1)})}
mk('path',{d:gd+'Z',class:'ink'},$('gearR'));mk('circle',{r:44,fill:'var(--stage)'},$('gearR'));mk('circle',{r:20,class:'gain'},$('gearR'));
const EV=[0,1,2].map(()=>{const g=mk('g',{},$('envs'));mk('rect',{x:-25,y:-17,width:50,height:34,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M-25 -17L0 4L25 -17',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);return g});
const F8=[];for(let i=0;i<5;i++){const g=mk('g',{},$('f8')),x=180+i*120;F8.push([g,mk('circle',{cx:x,cy:650,r:40,class:'ink'},g)]);mk('path',{d:'M'+(x-14)+' 658q14 12 28 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g)}
const SP7=[[1060,578],[1180,498],[1300,418],[1400,338]];