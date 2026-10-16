const per=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const heart=(x,y,s)=>'M'+x+' '+(y+s)+'C'+(x-1.6*s)+' '+y+' '+(x-s)+' '+(y-s)+' '+x+' '+(y-.4*s)+'C'+(x+s)+' '+(y-s)+' '+(x+1.6*s)+' '+y+' '+x+' '+(y+s)+'Z';
const star=(x,y,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}return d+'Z'};
per($('p0'),410,430,30,'ink');per($('p1'),1190,440,30,'ink');per($('p2'),290,370,30,'ink');per($('p3'),400,590,26,'gain');per($('p4'),860,574,30,'ink');
for(let i=0;i<10;i++){mk('path',{d:'M'+(185+i*50)+' 250V650',class:'s-ink','stroke-width':5},$('bars0'));mk('path',{d:'M'+(965+i*50)+' 250V650',class:'s-ink','stroke-width':5},$('bars1'))}
$('mstar').setAttribute('d',star(290,300,26));$('bstar').setAttribute('d',star(700,500,36));
const CB=[];for(let i=0;i<5;i++){const g=mk('g',{},$('cbx'));mk('rect',{x:0,y:0,width:70,height:56,rx:6,class:'gain'},g);mk('path',{d:'M0 18h70',stroke:'var(--stage)','stroke-width':4},g);CB.push(g)}
for(let i=0;i<9;i++)mk('circle',{cx:910+i*65,cy:582,r:11,class:'ink'},$('whl'));
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(860+62*Math.cos(a)).toFixed(1)+' '+(400+62*Math.sin(a)).toFixed(1)+'L'+(860+84*Math.cos(a)).toFixed(1)+' '+(400+84*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const HT=[0,1].map(()=>mk('path',{class:'gain'},$('hts')));
const COL=[160,240,320,240,160].map((h,i)=>[mk('rect',{x:160+i*100,width:80,rx:8,class:'gain',stroke:'var(--stage)','stroke-width':3},$('stk')),h]);
// thought bubbles: rise from the head and drift up and out across the open upper stage
const THX=[-140,110,260,-60,420,560,180,680,340,760];
const TH=THX.map(()=>mk('circle',{fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},$('th')));
const CD=[];for(let i=0;i<10;i++)CD.push(mk('rect',{x:940+((i*37)%5-2)*6,y:690-i*22,width:300,height:18,rx:4,class:'loss'},$('cards')));
const BK=[300,260,320,280,240].map((w,i)=>mk('rect',{x:440-w/2,y:600-(i+1)*42,width:w,height:38,rx:6,fill:['var(--ink)','var(--gain)','var(--muted)'][i%3]},$('books')));
$('rh').setAttribute('d',heart(440,325,26));$('ph').setAttribute('d',heart(1440,394,12));
const DL=[],DR=[];for(let i=0;i<10;i++){DL.push(mk('circle',{cx:200+i*48,cy:650,r:13},$('dl')));DR.push(mk('circle',{cx:920+i*48,cy:650,r:13},$('dr')))}
const JN=['A CALM MIND','A FIT BODY','A HOUSE FULL OF LOVE'];
const JF=JN.map((s,i)=>{const x=300+i*340,g=mk('g',{},$('jars'));
  const f=mk('rect',{x:x-92,width:184,rx:14,class:'gain'},g);
  mk('rect',{x:x-100,y:280,width:200,height:220,rx:24,fill:'none',stroke:'var(--ink)','stroke-width':6},g);
  mk('rect',{x:x-80,y:250,width:160,height:30,rx:8,class:'ink'},g);
  const ic=['M'+(x-34)+' 400a34 34 0 1 0 68 0a34 34 0 1 0-68 0M'+(x-18)+' 396q8 8 16 0M'+(x+2)+' 396q8 8 16 0','M'+(x-44)+' 400h88M'+(x-44)+' 380v40M'+(x-30)+' 384v32M'+(x+44)+' 380v40M'+(x+30)+' 384v32','M'+(x-40)+' 430v-36l40-34 40 34v36z'][i];
  mk('path',{d:ic,fill:'none',stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  if(i===2)mk('path',{d:heart(x,408,10),class:'ink'},g);
  const tx=mk('text',{x:x,y:550,'font-size':20,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return [g,f]});