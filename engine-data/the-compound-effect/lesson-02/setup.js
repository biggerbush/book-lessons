const per=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
per($('mp'),1300,370,40,'gain');per($('man'),800,580,32,'ink');per($('boss'),1290,290,24,'ink');
per($('him'),260,400,40,'ink');per($('her'),440,400,40,'ink');per($('me'),800,380,40,'ink');
for(let i=0;i<3;i++){const x=150+i*115;mk('rect',{x:x,y:330,width:95,height:40,rx:10,class:'ink'},$('cars'));[x+22,x+73].forEach(c=>mk('circle',{cx:c,cy:374,r:11,class:'s-ink',fill:'var(--stage)','stroke-width':5},$('cars')))}
const BA=[[310,455],[800,455],[1290,455]].map(([x,y])=>{const g=mk('g',{},$('blm')),a=Math.atan2(y-540,x-800),h=b=>(-24*Math.cos(b)).toFixed(1)+' '+(-24*Math.sin(b)).toFixed(1);
  mk('path',{d:'M800 540L'+x+' '+y,class:'s-loss','stroke-width':5,'stroke-dasharray':'10 10',fill:'none'},g);
  mk('path',{d:'M'+x+' '+y+'l'+h(a-.5)+'M'+x+' '+y+'l'+h(a+.5),class:'s-loss','stroke-width':5,'stroke-linecap':'round',fill:'none'},g);return g});
const CAL=[];for(let i=0;i<35;i++)CAL.push(mk('rect',{x:560+(i%7)*62,y:300+Math.floor(i/7)*62,width:50,height:50,rx:8,fill:'var(--line)'},$('cal')));
const STK=[];for(let i=0;i<12;i++)STK.push(mk('rect',{x:1140,y:724-i*38,width:280,height:32,rx:6,fill:i%2?'var(--gain)':'var(--ink)'},$('stk')));
const JL=[];for(let i=0;i<18;i++){const x=i<9?730:1040,y=320+(i%9)*32;JL.push([mk('path',{class:'s-line','stroke-width':5,'stroke-linecap':'round',fill:'none'},$('jl')),x,y])}
const MO=[];for(let i=0;i<12;i++)MO.push(mk('circle',{cx:730+i*49,cy:700,r:14,fill:'var(--line)'},$('mo')));
const ST=[[285,380],[350,385],[300,440],[355,440],[320,410]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:9,class:'gain',opacity:0},$('stars')));
[[0,-34],[34,0],[0,34],[-34,0]].forEach(q=>mk('circle',{cx:1340+q[0],cy:270+q[1],r:32,fill:'var(--muted)'},$('leaves')));
const EQ=['PREPARATION','ATTITUDE','OPPORTUNITY','ACTION'].map((s,i)=>{const x=120+i*280,g=mk('g',{},$('eq'));
  const r=mk('rect',{x:x,y:440,width:230,height:100,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:x+115,y:498,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g);tx.textContent=s;
  if(i<3){const pl=mk('text',{x:x+255,y:508,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var(--muted)'},g);pl.textContent='+'}
  const lb=mk('text',{x:x+115,y:590,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var('+(i===2?'--loss':'--gain')+')'},$('eq'));lb.textContent=i===2?'FROM OUTSIDE':'YOUR CHOICE';
  return [g,r,tx,lb]});
const RY=[];for(let i=0;i<7;i++){const a=Math.PI*(i+1)/8,c=Math.cos(a),s=Math.sin(a);RY.push(mk('path',{d:'M'+(1260-140*c).toFixed(1)+' '+(640-140*s).toFixed(1)+'L'+(1260-190*c).toFixed(1)+' '+(640-190*s).toFixed(1),class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('rays')))}