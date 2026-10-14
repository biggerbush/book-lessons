const tx=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const pill=(g,x,y,w,s,on)=>{const q=mk('g',{},g);mk('rect',{x:x,y:y,width:w,height:60,rx:30,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':4},q);tx(q,s,{x:x+w/2,y:y+39,'font-size':22,'text-anchor':'middle',class:'m',style:on?'fill:var(--on-gain)':'fill:var(--ink)'});return q};
const HP='M0 120C-150 20-160-90-75-110C-35-120-8-92 0-70C8-92 35-120 75-110C160-90 150 20 0 120Z';
const heart=(g,x,y,s)=>mk('path',{d:HP,class:'gain',transform:'translate('+x+' '+y+') scale('+s+')'},g);
function brain(g,cx,cy,s){let d='';for(let i=0;i<=96;i++){const a=i/96*2*Math.PI,r=(258+12*Math.sin(a*18))*s;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}
  const out=mk('path',{d:d+'Z',fill:'var(--line)',stroke:'var(--ink)','stroke-width':0,'stroke-linejoin':'round'},g);
  mk('circle',{cx:cx,cy:cy,r:205*s,fill:'var(--stage)'},g);
  mk('path',{d:'M'+cx+' '+(cy-268*s)+'V'+(cy-206*s)+'M'+cx+' '+(cy+206*s)+'V'+(cy+268*s),stroke:'var(--stage)','stroke-width':8},g);
  const lim=mk('circle',{cx:cx,cy:cy,r:150*s,class:'loss'},g);return {out:out,lim:lim}}
const B1=brain($('b1'),500,530,1),B2=brain($('b2'),500,530,1),B5=brain($('b5'),880,460,.75),B6=brain($('b6'),560,500,.85);
const P1=[[860,315,290,'RATIONAL THOUGHT',0,'ncP'],[1170,315,200,'ANALYSIS',0,'ncP'],[860,390,200,'LANGUAGE',0,'ncP'],[860,585,150,'TRUST',0,'lbP'],[1030,585,180,'LOYALTY',0,'lbP'],[860,660,200,'BEHAVIOR',1,'lbP'],[1080,660,210,'DECISIONS',1,'lbP']].map(a=>pill($(a[5]),a[0],a[1],a[2],a[3],a[4]));
fig($('per3'),1100,360,50,'ink');
fig($('cp'),220,380,36,'ink');fig($('cp'),330,380,36,'gain');heart($('cp'),275,290,.18);
const T4=['SMART','FUNNY','KIND'].map((s,i)=>pill($('tr4'),460,260+i*80,200,s,0));
const CR=[];for(let i=0;i<10;i++){const g=mk('g',{},$('cr4'));fig(g,780+(i%5)*160,290+Math.floor(i/5)*180,26,'ink');CR.push(g)}
const H4=mk('path',{d:HP,class:'gain'},$('h4g'));
const SR=['FEATURES','PRICES','SPECS'].map((s,i)=>{const g=mk('g',{},$('spr'));tx(g,s,{x:175,y:310+i*120,'font-size':22,class:'m'});mk('path',{d:'M175 '+(335+i*120)+'h250M175 '+(360+i*120)+'h170',class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);return g});
fig($('shp'),1300,400,40,'ink');
const R6=['A fact that fits','A figure that fits','A feature that fits'].map((s,i)=>{const g=mk('g',{},$('rw6'));mk('rect',{x:900,y:330+i*100,width:520,height:76,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,s,{x:930,y:380+i*100,'font-size':32,class:'d5'});return g});
fig($('pr7'),220,430,40,'gain');
const C7=[0,1,2].map(i=>{const x=360+i*230,g=mk('g',{},$('cd7'));mk('path',{d:'M'+(x+100)+' 424V476',class:'s-muted','stroke-width':4,'stroke-dasharray':'6 6'},g);mk('rect',{x:x,y:480,width:200,height:150,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);tx(g,'PROOF',{x:x+100,y:516,'font-size':22,'text-anchor':'middle',class:'m'});[25,45,65].forEach((h,j)=>mk('rect',{x:x+40+j*45,y:605-h,width:30,height:h,class:j===2?'gain':'ink'},g));return g});
heart($('h8'),1170,740,.22);
const W8=[140,120,90].map((w,i)=>[mk('line',{x1:1240,y1:715+i*30,x2:1240,y2:715+i*30,class:'s-ink','stroke-width':8,'stroke-linecap':'round'},$('w8')),w]);