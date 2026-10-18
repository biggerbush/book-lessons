const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,s,fs,cls,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:cls},ex||{}),g);e.textContent=s;return e};
fig($('redf'),570,326,30,'gain');tx($('redf'),690,476,'RED',22,'m',{'text-anchor':'end',style:'fill:var(--gain)'});
for(let r=0;r<2;r++)for(let c=0;c<4;c++)mk('rect',{x:1340+c*25,y:400+r*35,width:25,height:35,fill:(r+c)%2?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':2},$('chk'));
const CK=[350,440,530,620].map((y,i)=>{mk('rect',{x:160,y:y-30,width:40,height:40,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},$('rows'));mk('rect',{x:230,y:y-17,width:330-i*50,height:14,rx:7,fill:'var(--line)'},$('rows'));
  return mk('path',{d:'M168 '+(y-12)+'l12 14 26-32',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('rows'))});
// chit-chat pills: larger, label 30px, crossed out by a single strike-through line (dash-drawn) so the word stays legible
const CB=[[850,270,'CHIT'],[1220,250,'CHAT']].map(([x,y,s])=>{const g=mk('g',{},$('chat'));
  const r=mk('rect',{x:x,y:y,width:220,height:84,rx:42,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':4},g);
  const l=tx(g,x+110,y+53,s,30,'m',{'text-anchor':'middle'});
  const c=mk('path',{d:'M'+(x+36)+' '+(y+42)+'H'+(x+184),stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':150,'stroke-dashoffset':150},g);return [g,c,l]});
const D=$('dzb');
mk('rect',{x:-50,y:-24,width:240,height:24,rx:12,fill:'var(--ink)'},D);
mk('rect',{x:-40,y:-84,width:220,height:60,rx:8,class:'loss'},D);
mk('rect',{x:0,y:-164,width:110,height:80,rx:8,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':7},D);
mk('path',{d:'M180 -60h20',stroke:'var(--ink)','stroke-width':8},D);
mk('rect',{x:196,y:-120,width:20,height:116,rx:4,fill:'var(--ink)'},D);
const PP=[880,950,1020].map(x=>{const g=mk('g',{opacity:.55},$('ppl'));fig(g,0,-76,18,'ink');return [g,x]});
fig($('rmp'),360,430,30,'ink');fig($('rmp'),1200,430,30,'gain');
const SD=[];for(let i=0;i<6;i++){const x=560+i*12,y=300+i*10,g=mk('g',{},$('sld'));mk('rect',{x:x,y:y,width:220,height:140,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  [[30,120],[60,170],[90,140]].forEach(q=>mk('rect',{x:x+24,y:y+q[0],width:q[1],height:12,rx:6,fill:'var(--line)'},g));SD.push(g)}
const NR=['What you propose','What it achieves','What you need'].map((s,i)=>{const y=330+i*110,g=mk('g',{},$('nums'));mk('circle',{cx:600,cy:y-12,r:34,class:'gain'},g);tx(g,600,y,String(i+1),36,'d',{'text-anchor':'middle',style:'fill:var(--on-gain)'});tx(g,660,y,s,36,'d5');return g});
fig($('you7'),230,400,30,'ink');
[380,440,500].forEach(y=>mk('path',{d:'M700 '+y+'H580m30-24-30 24 30 24',fill:'none',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('pshi')));
const FC=['FACTS','CONFIDENCE','THEN LET IT GO'].map((s,i)=>{const g=mk('g',{},$('fcl')),x=120+i*440,l=i===2;
  mk('rect',{x:x,y:700,width:340,height:70,rx:35,fill:l?'var(--gain)':'var(--stage)',stroke:l?'var(--gain)':'var(--ink)','stroke-width':4},g);
  tx(g,x+170,744,s,24,'m',{'text-anchor':'middle',style:l?'fill:var(--on-gain)':'fill:var(--ink)'});
  if(i<2)mk('path',{d:'M'+(x+356)+' 735h70m-18-18 18 18-18 18',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});