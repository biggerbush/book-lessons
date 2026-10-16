const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const setc=(a,c)=>a.forEach(e=>e.setAttribute('class',c));
const ST=[];for(let i=0;i<46;i++)ST.push(mk('circle',{cx:1120+(i*137)%360,cy:210+(i*89)%380,r:2+(i%3)*1.6,class:'ink'},$('stars')));
const SPK=fig($('speck'),1300,700,9,'ink');
fig($('mirp'),300,400,30,'ink');fig($('mirp'),590,400,30,'gain');
const RD=[];for(let i=0;i<6;i++){const x=870+i*85,g=mk('g',{},$('rdots'));mk('circle',{cx:x,cy:600,r:9,fill:'var(--muted)'},g);mk('path',{d:'M'+(x+30)+' 588l12 12-12 12',fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},g);RD.push(g)}
fig($('youf'),1420,500,24,'gain');
const TR=['REMARKABLE','FAMOUS','WORLD CHANGING'].map((s,i)=>{const x=880+i*230,g=mk('g',{},$('troph'));
  mk('path',{d:'M'+(x-50)+' 380h100v40a50 50 0 0 1-100 0z',fill:'var(--stage)',stroke:'var(--loss)','stroke-width':6,'stroke-linejoin':'round'},g);
  mk('rect',{x:x-8,y:470,width:16,height:50,class:'loss'},g);mk('rect',{x:x-40,y:520,width:80,height:34,rx:6,class:'loss'},g);
  mk('text',{x:x,y:600,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=s;return g});
const DS=[];for(let i=0;i<7;i++){const x=120+i*90;mk('rect',{x:x,y:760,width:70,height:70,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('days'));DS.push(mk('path',{d:'M'+(x+14)+' 774l42 42',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('days')))}
const TN=fig($('tiny'),400,600,26,'ink');
fig($('pf0'),270,320,34,'ink');fig($('pf0'),400,390,20,'gain');fig($('pf1'),740,330,30,'ink');fig($('pf1'),870,350,26,'ink');
const RP=[];[327,800,1273].forEach(x=>{for(let k=0;k<2;k++)RP.push(mk('circle',{cx:x,cy:400,r:110,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rip')))});
for(let i=0;i<4;i++)mk('rect',{x:150+i*80,y:430,width:46,height:46,fill:'var(--stage)'},$('fwin'));
const SM=[0,1,2].map(()=>mk('circle',{cx:422,cy:250,r:12,fill:'var(--line)'},$('smoke')));
const CE=[];for(let r=0;r<4;r++)for(let c=0;c<7;c++){const off=c===[1,3,5,0][r];CE.push(mk('rect',{x:620+c*120,y:270+r*62,width:110,height:52,rx:8,fill:off?'var(--gain)':'var(--stage)',stroke:off?'var(--gain)':'var(--line)','stroke-width':3},$('cells')))}
[830,970,1110,1250].forEach((x,i)=>{const e=fig($('seats'),x,620,22,i?'s-muted':'ink');if(i)e.forEach(q=>{q.setAttribute('fill','none');q.setAttribute('stroke-width',4);q.setAttribute('stroke-dasharray','6 6')})});
[330,630].forEach(cx=>{for(let k=0;k<12;k++){const a=k*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(cx+98*s).toFixed(1)+' '+(420-98*c).toFixed(1)+'L'+(cx+108*s).toFixed(1)+' '+(420-108*c).toFixed(1),stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}});
const CD=['A shared meal','A weekly game','A choir rehearsal'].map((s,i)=>{const y=240+i*150,g=mk('g',{},$('cards'));
  mk('rect',{x:880,y:y,width:600,height:120,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);
  mk('text',{x:910,y:y+72,'font-size':36,class:'d5'},g).textContent=s;
  return [g,['ink','loss','gain'].map(c=>mk('circle',{cx:1260,cy:y+60,r:16,class:c},g))]});
fig($('pair'),1260,652,24,'ink');fig($('pair'),1440,652,24,'gain');