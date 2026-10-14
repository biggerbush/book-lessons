const COL=['var(--ink)','var(--loss)','var(--gain)'];
const fig=(g,x,y,r,cls)=>{const h=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},h);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},h);return h};
const tx=(g,x,y,s,cls,fs,ex)=>{const e=mk('text',Object.assign({x:x,y:y,class:cls,'font-size':fs},ex||{}),g);e.textContent=s;return e};
fig($('pp'),1160,470,30,'ink');fig($('pp'),1400,470,30,'ink');
const ST=['PRACTICAL','EMOTIONAL','SOCIAL'].map((s,i)=>{const y=250+i*140,yb=340+i*70,g=mk('g',{},$('strips'));
  mk('rect',{x:700,y:y,width:780,height:110,rx:16,fill:'var(--stage)',stroke:COL[i],'stroke-width':5},g);mk('rect',{x:700,y:y,width:18,height:110,rx:6,fill:COL[i]},g);tx(g,740,y+42,s,'m',22);
  const q=mk('g',{},g);tx(q,740,y+90,['What is this really about?','How do we feel?','Who are we?'][i],'d5',34);
  const c=mk('path',{d:'M560 '+yb+'C630 '+yb+' 630 '+(y+55)+' 700 '+(y+55),fill:'none',stroke:COL[i],'stroke-width':5,'stroke-dasharray':'8 8'},$('cn1'));
  const l=mk('path',{d:'M180 '+yb+'H500',stroke:COL[i],'stroke-width':12,'stroke-linecap':'round'},$('ln1'));return [g,c,q,l]});
const RW=['Make plans','Solve problems','Next steps'].map((s,i)=>{const y=370+i*100,g=mk('g',{},$('rows2'));
  mk('rect',{x:200,y:y-34,width:40,height:40,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M206 '+(y-16)+'l10 12l22-28',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);tx(g,262,y,s,'d5',30);return g});
const FC=['WORRIES','JOYS','FRUSTRATIONS'].map((s,i)=>{const x=720+i*240,y=470,g=mk('g',{},$('faces3'));
  mk('circle',{cx:x,cy:y,r:60,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);[-20,20].forEach(d=>mk('circle',{cx:x+d,cy:y-12,r:6,class:'ink'},g));
  mk('path',{d:['M'+(x-24)+' '+(y+30)+'q24-22 48 0','M'+(x-28)+' '+(y+14)+'q28 30 56 0','M'+(x-24)+' '+(y+26)+'h48M'+(x-34)+' '+(y-36)+'l22 10M'+(x+34)+' '+(y-36)+'l-22 10'][i],fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g);
  tx(g,x,y+100,s,'m',20,{'text-anchor':'middle'});return g});
const RG=[];for(let i=0;i<6;i++){const a=-Math.PI/2+i*Math.PI/3;RG.push(fig($('ring4'),400+150*Math.cos(a),470+150*Math.sin(a),16,'ink'))}
const BG=['MYSELF','OUR BONDS','OUR GROUPS'].map((s,i)=>{const x=760+i*240,g=mk('g',{},$('badges4'));
  mk('rect',{x:x,y:390,width:210,height:230,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x+85,y:376,width:40,height:26,rx:6,class:'ink'},g);
  fig(g,x+105,446,22,i===2?'gain':'ink');tx(g,x+105,592,s,'m',20,{'text-anchor':'middle'});return g});
const AU=fig($('auth5'),420,480,40,'ink');fig($('sp5'),1180,480,40,'ink');
[[300,336,'trA'],[520,556,'trB']].forEach(([a,b,id])=>{for(let x=440;x<=1470;x+=40)mk('path',{d:'M'+x+' '+a+'V'+b,stroke:'var(--line)','stroke-width':6},$(id));[a+6,b-6].forEach(y=>mk('path',{d:'M430 '+y+'H1480',stroke:'var(--ink)','stroke-width':5},$(id)))});
const BB=['WANTS A PLAN','WANTS TO VENT','LOOKING BAD?'].map((s,i)=>{const x=520+i*280;fig($('ppl7'),x,410,34,'ink');const g=mk('g',{},$('bub7'));
  mk('rect',{x:x-110,y:220,width:220,height:70,rx:35,fill:'var(--stage)',stroke:COL[i],'stroke-width':5},g);mk('path',{d:'M'+(x-10)+' 290l10 24l10-24',fill:COL[i]},g);
  tx(g,x,264,s,'m',22,{'text-anchor':'middle'});return g});
const TG=[520,800,1080].map((x0,k)=>{let d='M'+x0+' 590';for(let i=1;i<=40;i++){const s=i/40,e=Math.sin(s*Math.PI);d+='L'+(x0+(800-x0)*s+70*Math.sin(s*9+k*2)*e).toFixed(0)+' '+(590+110*s+40*Math.sin(s*13+k)*e).toFixed(0)}
  return mk('path',{d:d,fill:'none',stroke:COL[k],'stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('tangle7'))});
const CP=['PRACTICAL','EMOTIONAL','SOCIAL'].map((s,i)=>{const x=136+i*300,g=mk('g',{},$('chips8'));
  mk('rect',{x:x,y:660,width:270,height:70,rx:35,fill:'var(--stage)',stroke:COL[i],'stroke-width':5},g);tx(g,x+135,704,s,'m',24,{'text-anchor':'middle'});return g});