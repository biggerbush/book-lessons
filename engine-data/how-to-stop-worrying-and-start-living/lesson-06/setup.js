const P=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:c},e);return e};
const LM=(g,x,y,s)=>{mk('ellipse',{cx:x,cy:y,rx:s*1.3,ry:s,class:'gain'},g);mk('path',{d:`M${x-s*1.25} ${y-s*.15}l${-s*.3} ${s*.15} ${s*.3} ${s*.15}zM${x+s*1.25} ${y-s*.15}l${s*.3} ${s*.15} ${-s*.3} ${s*.15}z`,class:'gain'},g);mk('path',{d:`M${x} ${y-s*.95}q${s*.2} ${-s*.6} ${s*.8} ${-s*.55}q${-s*.2} ${s*.55} ${-s*.8} ${s*.55}z`,class:'ink'},g);mk('path',{d:`M${x-s*.7} ${y-s*.3}q${s*.3} ${-s*.4} ${s*.8} ${-s*.45}`,fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round','stroke-opacity':.6},g)};
const GL=(g,x,y,w,h)=>{const f=mk('rect',{x:x+7,y:y+h-7,width:w-14,height:0,class:'gain'},g);mk('path',{d:`M${x} ${y}v${h-14}q0 14 14 14h${w-28}q14 0 14-14v${14-h}`,fill:'none',class:'s-ink','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);return {f,y,h}};
const FILL=(o,k)=>{const hh=(o.h-24)*k;o.f.setAttribute('y',(o.y+o.h-7-hh).toFixed(1));o.f.setAttribute('height',hh.toFixed(1))};
LM($('t_lem'),1250,412,56);const G0=GL($('t_gl'),1370,260,100,210);
const RN=[];for(let i=0;i<14;i++)RN.push(mk('line',{class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('rain')));
const AB=P($('ab'),400,552,40,'loss');
const G3=GL($('g3'),660,360,110,200);
// two fully open almond eyes (96px wide), centred in the upper half of the card above "$1 billion?"
const EYC=440,IRS=[1180,1320].map(x=>{const g=mk('g',{transform:`translate(${x} ${EYC})`},$('eyes'));
 mk('path',{d:'M-48 0C-30-42 30-42 48 0C30 42-30 42-48 0z',fill:'var(--stage)',class:'s-ink','stroke-width':6,'stroke-linejoin':'round'},g);
 const ir=mk('g',{},g);mk('circle',{cx:0,cy:0,r:20,class:'loss'},ir);mk('circle',{cx:0,cy:0,r:9,class:'ink'},ir);mk('circle',{cx:6,cy:-6,r:4,fill:'var(--stage)'},ir);
 mk('path',{d:'M-48 0C-30-42 30-42 48 0C30 42-30 42-48 0z',fill:'none',class:'s-ink','stroke-width':6,'stroke-linejoin':'round'},g);
 mk('path',{d:'M-40-52Q0-70 40-52',fill:'none',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},g);
 return ir});
LM($('l4'),800,330,54);P($('pf'),400,520,36,'loss');P($('pw'),1200,520,36,'gain');const G4=GL($('g4'),1310,500,80,170);
const SP5=[[150,560],[420,560],[260,605],[540,605]],SN=SP5.map(()=>mk('path',{fill:'none','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('sn')));
const PR=['VENOM','MEAT','TOURISTS'].map((s,i)=>{const x=880+i*210,c=x+90,g=mk('g',{},$('pr'));mk('rect',{x:x,y:260,width:180,height:210,rx:16,fill:'var(--stage)',class:'s-line','stroke-width':3},g);
 if(i==0){mk('rect',{x:c-20,y:300,width:40,height:100,rx:12,fill:'var(--stage)',class:'s-ink','stroke-width':5},g);mk('rect',{x:c-14,y:350,width:28,height:44,rx:8,class:'gain'},g);mk('rect',{x:c-26,y:292,width:52,height:16,rx:4,class:'ink'},g)}
 else if(i==1){mk('rect',{x:c-45,y:310,width:90,height:100,rx:8,class:'ink'},g);mk('rect',{x:c-45,y:342,width:90,height:36,class:'gain'},g)}
 else [-48,0,48].forEach(d=>P(g,c+d,322,15,'ink'));
 const tx=mk('text',{x:c,y:450,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return g});
for(let i=0;i<7;i++)mk('circle',{cx:180+i*80,cy:230,r:12,fill:'var(--stage)',class:'s-ink','stroke-width':5},$('rings'));
const LN=[400,510,620].map((y,i)=>{const n=mk('text',{x:160,y:y,'font-size':44,class:'d',style:'fill:var(--gain)'},$('rows'));n.textContent=(i+1)+'.';return [mk('path',{d:`M240 ${y-14}H680`,class:'s-ink','stroke-width':6,'stroke-linecap':'round','stroke-dasharray':440,'stroke-dashoffset':440},$('rows')),n]});
LM($('l7'),980,470,60);const G7=GL($('g7'),1290,370,110,200);
LM($('l8'),1220,380,50);const G8=GL($('g8'),1340,250,100,210);