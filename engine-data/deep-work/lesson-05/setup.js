const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const AP=[];for(let i=0;i<12;i++)AP.push(mk('rect',{x:1150+(i%3)*82,y:280+Math.floor(i/3)*90,width:56,height:56,rx:14,class:i===4?'gain':'ink'},$('apps')));
for(let i=0;i<8;i++){const x=200+i*48,h=90+((i*37)%5)*20;mk('path',{d:'M'+x+' 500V'+(500-h),stroke:'var(--muted)','stroke-width':8,'stroke-linecap':'round'},$('tbx'));mk('rect',{x:x-12,y:500-h-8,width:24,height:18,rx:4,fill:'var(--muted)'},$('tbx'))}
fig($('wwf'),780,420,34,'ink');fig($('farmf'),210,530,34,'ink');
['WORK GOAL','LIFE GOAL'].forEach((s,c)=>{const x=140+c*580,g=mk('g',{id:'fl'+c},$('goals'));
  mk('path',{d:'M'+(x+10)+' 340V230',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},g);mk('path',{d:'M'+(x+10)+' 232l46 20-46 20z',class:'gain'},g);
  const tx=mk('text',{x:x+70,y:300,'font-size':40,class:'d5'},g);tx.textContent=s;
  for(let j=0;j<3;j++){const r=mk('g',{id:'ac'+c+j},$('goals')),y=420+j*80;
    mk('rect',{x:x+10,y:y-24,width:28,height:28,rx:6,fill:'none',stroke:j<2?'var(--ink)':'var(--muted)','stroke-width':4,'stroke-dasharray':j<2?'none':'5 5'},r);
    const a=mk('text',{x:x+60,y:y,'font-size':20,class:'m'},r);a.textContent='KEY ACTIVITY '+(j+1)}});
const pie=f=>{f=cl(f,.001,.999);const a=-Math.PI/2+f*2*Math.PI;return 'M820 470L820 320A150 150 0 '+(f>.5?1:0)+' 1 '+(820+150*Math.cos(a)).toFixed(1)+' '+(470+150*Math.sin(a)).toFixed(1)+'Z'};
const NB=[-150,-90,-30,30,150].map(d=>{const a=d*Math.PI/180;return [mk('rect',{x:800+215*Math.cos(a),y:450+215*Math.sin(a),width:40,height:40,rx:10,class:'loss'},$('nib')),a]});
const CE=[];for(let i=0;i<30;i++)CE.push(mk('rect',{x:126+(i%6)*106,y:316+Math.floor(i/6)*78,width:94,height:66,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cal')));