const person=(g,x,y,r,cls)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:cls},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},q);return q};
const sheep=(g,x,y)=>{const q=mk('g',{},g);mk('path',{d:'M'+(x-14)+' '+(y+10)+'v18M'+(x+14)+' '+(y+10)+'v18',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},q);mk('ellipse',{cx:x,cy:y,rx:32,ry:20,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},q);mk('ellipse',{cx:x+32,cy:y-8,rx:11,ry:9,class:'ink'},q);return q};
person($('t_calm'),1180,330,40,'ink');person($('t_ink'),1390,330,40,'ink');person($('t_mad'),1390,330,40,'loss');
for(let i=0;i<5;i++)mk('circle',{cx:1230+i*50,cy:190,r:12,fill:'var(--muted)','fill-opacity':.6},$('t_anc'));
const GR=[];for(let i=0;i<7;i++){const x=590+i*70;GR.push(mk('path',{d:'M'+(x-20)+' 822v-50a20 20 0 0 1 40 0v50z',class:'ink'},$('graves')))}
const TW=[[230,740],[320,680],[420,610],[520,540],[610,460],[700,390],[790,320],[870,260]].map((q,i)=>{const x=q[0]+(i%2?50:-50),g=mk('g',{},$('towns'));
 mk('circle',{cx:x,cy:q[1],r:18,class:i===3?'ink':'loss'},g);mk('path',{d:'M'+(x-8)+' '+(q[1]-8)+'l16 16m0-16l-16 16',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g);
 if(i===3){const tx=mk('text',{x:x+30,y:q[1]+6,'font-size':18,class:'m'},g);tx.textContent='HARLAN'}return g});
// herder stands on the ground line (feet at y 800), flock in front of the hills
person($('herder'),470,716,20,'ink');
const FL=[620,730,840,950,1060,1170].map((x,i)=>sheep($('flock'),x,760+(i%2?4:0)));
for(let r=0;r<3;r++)for(let c=0;c<6;c++){const x=200+c*95,y=380+r*80;mk('path',{d:'M'+x+' '+y+'v-46',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('crops'));mk('circle',{cx:x,cy:y-46,r:10,class:'gain'},$('crops'))}
const HD=[910,1010,1110,1210,1310].map((x,i)=>sheep($('herd'),x,i%2?500:440));
person($('thiefG'),1420,380,20,'loss');
for(let i=0;i<5;i++)mk('rect',{x:1196+i*56,y:280,width:24,height:110,class:'ink'},$('cols'));
person($('stu'),0,620,26,'ink');person($('str'),0,620,26,'loss');
person($('nPer'),300,380,40,'ink');person($('sPer'),1000,380,40,'loss');sheep($('ghost'),1380,784);
const TX=[[200,320,440,560],[260,500],[380]];
TX.forEach((row,k)=>row.forEach((x,j)=>{const y=270+k*160;person($('tr'+k),x,y,26,k===2?'gain':'ink');
 if(k<2){const cx=TX[k+1][j>>1];mk('path',{d:'M'+x+' '+(y+109)+'L'+cx+' '+(y+134),stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('tr'+(k+1)))}}));
person($('packP'),900,360,40,'ink');
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1300+80*c).toFixed(0)+' '+(380+80*s).toFixed(0)+'L'+(1300+108*c).toFixed(0)+' '+(380+108*s).toFixed(0),stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
person($('mLoss'),1300,360,40,'loss');person($('mGain'),1300,360,40,'gain');