const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const TL=$('trail').getTotalLength()||600;
const AU=[];for(let r=0;r<3;r++)for(let i=0;i<12;i++){const g=mk('g',{'fill-opacity':.4},$('aud'));person(g,230+i*104,610+r*80,13,'ink');AU.push(g)}
const SPK=['FAMILY','FRIEND','COLLEAGUE','COMMUNITY'].map((s,i)=>{const x=380+i*280,g=mk('g',{},$('spk'));person(g,x,330,30,'ink');const l=mk('g',{},$('spk'));mk('text',{x:x,y:520,'font-size':22,'text-anchor':'middle',class:'m'},l).textContent=s;return [g,l]});
const TK=['PARENT','PARTNER','FRIEND','COLLEAGUE'].map((s,i)=>{const y=280+i*140,g=mk('g',{},$('talk'));person(g,180,y,22,'ink');const b=mk('g',{},$('talk'));
  mk('rect',{x:260,y:y-34,width:420,height:68,rx:34,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},b);
  const d=mk('g',{},b);[440,470,500].forEach(x=>mk('circle',{cx:x,cy:y,r:7,class:'ink'},d));
  const q=mk('text',{x:470,y:y+8,'font-size':22,'text-anchor':'middle',class:'m'},b);q.textContent='WHAT KIND OF '+s+'?';
  const lk=mk('path',{d:'M680 '+y+'C840 '+y+' 860 470 980 470',fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('vlinks'));return [g,b,d,q,lk]});
for(let x=160;x<720;x+=40)mk('path',{d:'M'+x+' 244v432',class:'s-line','stroke-width':1},$('grid'));
for(let y=280;y<680;y+=40)mk('path',{d:'M124 '+y+'h592',class:'s-line','stroke-width':1},$('grid'));
const BR=[];for(let r=0;r<5;r++)for(let c=0;c<6;c++)BR.push(mk('rect',{x:1030+c*50,y:596-r*44,width:50,height:44,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('bricks')));
mk('path',{d:'M270 780L480 300M310 780L520 300',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},$('lad'));
for(let k=1;k<10;k++){const f=k/10,x=270+210*f,y=780-480*f;mk('path',{d:'M'+x+' '+y+'h40',class:'s-ink','stroke-width':5},$('lad'))}
person($('clm'),0,-78,18,'gain');
[[900,620],[1000,640],[1100,610],[1200,630],[1400,620]].forEach(q=>{mk('path',{d:'M'+q[0]+' 780V'+q[1],class:'s-ink','stroke-width':8},$('jg'));mk('circle',{cx:q[0],cy:q[1],r:50,fill:'var(--line)'},$('jg'))});
mk('path',{d:'M1300 780V440',class:'s-ink','stroke-width':10},$('jg'));mk('circle',{cx:1300,cy:440,r:64,fill:'var(--line)'},$('jg'));
mk('path',{d:'M880 780H1460',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('jg'));
const WK=[950,1050,1150].map(x=>{const g=mk('g',{},$('wk'));person(g,x,722,13,'ink');return g});
person($('ldr'),1300,306,16,'gain');
mk('circle',{cx:1100,cy:480,r:190,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':8},$('cbody'));
mk('circle',{cx:1100,cy:480,r:146,fill:'none',class:'s-line','stroke-width':3},$('cbody'));
for(let i=0;i<24;i++){const a=i*Math.PI/12,r0=i%6?164:150,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1100+r0*c).toFixed(1)+' '+(480+r0*s).toFixed(1)+'L'+(1100+178*c).toFixed(1)+' '+(480+178*s).toFixed(1),class:'s-ink','stroke-width':i%6?3:6,'stroke-linecap':'round'},$('cbody'))}
for(let i=0;i<8;i++)mk('circle',{cx:960+i*65,cy:250,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spiral'));
person($('wlk'),800,700,20,'ink');