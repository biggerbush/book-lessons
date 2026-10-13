const fig=(g,x,y,r,cls)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},e);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},e);return e};
for(let i=0;i<6;i++)mk('rect',{x:200,y:540-i*30,width:120,height:26,rx:13,class:'gain',stroke:'var(--stage)','stroke-width':3},$('cst'));
[520,610,700].forEach(x=>fig($('smp'),x,430,18,'ink'));
fig($('pbp'),1180,400,20,'gain');fig($('pbp'),1340,400,20,'loss');
fig($('rch'),220,320,30,'ink');
[[880,'1874','ENGLAND'],[1200,'1913','UNITED STATES']].forEach((c,i)=>{const g=mk('g',{id:'cal'+i},$('cals'));
mk('rect',{x:c[0],y:240,width:260,height:280,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
mk('rect',{x:c[0],y:240,width:260,height:56,rx:14,class:'ink'},g);
const y=mk('text',{x:c[0]+130,y:420,'font-size':80,'text-anchor':'middle',class:'d'},g);y.textContent=c[1];
const l=mk('text',{x:c[0]+130,y:476,'font-size':22,'text-anchor':'middle',class:'m'},g);l.textContent=c[2]});
const WK=[];for(let i=0;i<9;i++)WK.push(fig($('wk'),180+i*70,700,16,'ink'));
for(let i=0;i<5;i++)mk('rect',{x:200+i*70,y:362,width:30,height:194,class:'ink'},$('cols'));
for(let k=1;k<3;k++)for(let i=0;i<3;i++)fig($('tp'),1060+i*80,300+k*180,16,'ink');
const rpG=fig($('rpg'),1200,300,16,'ink');
fig($('shp'),480,470,30,'gain');
const CHP=['OWNS THINGS','EARNS INCOME','PAYS EXPENSES'].map((s,i)=>{const g=mk('g',{},$('chips'));
mk('rect',{x:860,y:250+i*90,width:440,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);
const t=mk('text',{x:1080,y:291+i*90,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);t.textContent=s;return g});
[[900,'LAWYER'],[1060,'ACCOUNTANT']].forEach(q=>{fig($('lawg'),q[0],590,26,'ink');const t=mk('text',{x:q[0],y:740,'font-size':20,'text-anchor':'middle',class:'m'},$('lawg'));t.textContent=q[1]});
let gp='';for(let i=0;i<40;i++){const a=i*Math.PI/20,r=(i%4<2)?62:46;gp+=(1320+r*Math.cos(a)).toFixed(1)+','+(640+r*Math.sin(a)).toFixed(1)+' '}$('gearP').setAttribute('points',gp);
function flow(g,names,segs,ti){const cx=[320,800,1280],ar=mk('g',{},g);
[0,1].forEach(i=>mk('path',{d:`M${cx[i]+212} 320h50m-16-16 16 16-16 16`,fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},ar));
mk('path',{d:'M140 780H1460',stroke:'var(--line)','stroke-width':4},g);
const st=names.map((n,i)=>{const e=mk('g',{},g),tx=i===ti;
mk('rect',{x:cx[i]-200,y:260,width:400,height:120,rx:16,fill:'var(--stage)',stroke:tx?'var(--loss)':'var(--ink)','stroke-width':5},e);
const T=mk('text',{x:cx[i],y:336,'font-size':44,'text-anchor':'middle',class:'d'},e);T.textContent=(i+1)+'. '+n;if(tx)T.setAttribute('style','fill:var(--loss)');
let y=780;segs[i].slice().reverse().forEach(s=>{y-=s[0];mk('rect',{x:cx[i]-80,y:y,width:160,height:s[0],fill:'var(--'+s[1]+')'},e);
if(s[2]){const l=mk('text',{x:cx[i]-100,y:y+s[0]/2+7,'font-size':20,'text-anchor':'end',class:'m'},e);l.textContent=s[2]}});return e});
// active-step marker: an amber bar sitting on the top edge of the current box
return [ar,st,mk('rect',{x:120,y:254,width:400,height:12,rx:6,class:'gain'},g)]}
const F5=flow($('f5'),['Earn','Tax','Spend'],[[[260,'gain','INCOME']],[[80,'loss','TAX'],[180,'gain','']],[[180,'gain','WHAT’S LEFT']]],1);
const F6=flow($('f6'),['Earn','Spend','Tax'],[[[260,'gain','INCOME']],[[150,'muted','EXPENSES'],[110,'gain','']],[[35,'loss','TAX'],[75,'gain','KEPT']]],2);
const IC=['M-40-45h80v90h-80zM-25-20h50M-25 0h50M-25 20h30','M-45 40L-15 5L10 20L45-35M20-35h25v25','M-40 45V10M-12 45V-15M16 45V-35M44 45V-5','M0-45V45M-30 45h60M-45-30h90M-45-30l-15 35h30zM45-30l-15 35h30z'];
const TL=['ACCOUNTING','INVESTING','MARKETS','THE LAW'].map((s,i)=>{const x=130+(i%2)*330,y=230+Math.floor(i/2)*250,L=i===3,g=mk('g',{},$('tiles'));
mk('rect',{x:x,y:y,width:310,height:230,rx:16,fill:L?'var(--gain)':'var(--stage)',stroke:L?'var(--gain)':'var(--ink)','stroke-width':4},g);
mk('path',{d:IC[i],transform:`translate(${x+155} ${y+95})`,fill:'none',stroke:L?'var(--on-gain)':'var(--ink)','stroke-width':i===2?14:6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const t=mk('text',{x:x+155,y:y+200,'font-size':22,'text-anchor':'middle',class:'m',style:L?'fill:var(--on-gain)':'fill:var(--ink)'},g);t.textContent=s;return g});
function runFlow(F,c,u){rise(F[0],p(u,c[0],c[0]+.5));F[1].forEach((e,i)=>rise(e,p(u,c[i+1],c[i+1]+.5)));
F[2].setAttribute('x',(120+480*p(u,c[2],c[2]+.8)+480*p(u,c[3],c[3]+.8)).toFixed(1));F[2].setAttribute('opacity',p(u,c[1],c[1]+.4))}