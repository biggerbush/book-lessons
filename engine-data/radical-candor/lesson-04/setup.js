const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const setc=(a,c)=>a.forEach(e=>e.setAttribute('class',c));
const dr=(el,k)=>{el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));el.setAttribute('opacity',k>0?1:0)};
const arc=(cx,cy,R,a0,a1)=>'M'+(cx+R*Math.cos(a0)).toFixed(1)+' '+(cy+R*Math.sin(a0)).toFixed(1)+'A'+R+' '+R+' 0 0 1 '+(cx+R*Math.cos(a1)).toFixed(1)+' '+(cy+R*Math.sin(a1)).toFixed(1);
fig($('t_ppl'),1180,400,34,'gain');fig($('t_ppl'),1400,400,34,'ink');
fig($('w_boss'),290,449,36,'gain');
const WT=[1120,1240,1360].map(x=>fig($('w_team'),x,474,30,'ink'));
const WB=[0,1,2].map(()=>{const g=mk('g',{opacity:0},$('w_bub'));mk('rect',{x:0,y:0,width:56,height:44,rx:10,class:'loss'},g);const tx=mk('text',{x:28,y:35,'font-size':32,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},g);tx.textContent='!';return g});
fig($('q_boss'),1250,240,34,'gain');
fig($('c_room'),190,400,34,'gain');[480,640,800].forEach(x=>fig($('c_room'),x,410,30,'ink'));
const CB=[480,640,800].map(x=>{const g=mk('g',{},$('c_room'));mk('rect',{x:x-44,y:290,width:88,height:56,rx:16,fill:'var(--stage)',stroke:'var(--muted)','stroke-width':4},g);[-18,0,18].forEach(d=>mk('circle',{cx:x+d,cy:318,r:5,fill:'var(--muted)'},g));return g});
const CS=[];for(let i=0;i<6;i++){const a0=-Math.PI/2+i*Math.PI/3+.12;CS.push(mk('path',{d:arc(1240,450,130,a0,a0+Math.PI/3-.24),fill:'none','stroke-width':24,'stroke-linecap':'round',stroke:'var(--line)'},$('c_segs')))}
const LW=[60,95,130].map(r=>mk('path',{d:arc(540,480,r,-.6,.6),fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round'},$('l_waves')));
// strike-through widths: measured from the rendered text, with estimates as fallback
const SW={l_t0:300,l_t1:410};
function measureStrikes(){for(const k in SW){try{const v=$(k).getComputedTextLength();if(v>0)SW[k]=v}catch(e){}}}
measureStrikes(); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measureStrikes);
const SO=6; // overhang on each side
const GP=[];for(let k=0;k<40;k++){const r=k%4<2?100:78,a=k*Math.PI*2/40;GP.push((800+r*Math.cos(a)).toFixed(1)+' '+(400+r*Math.sin(a)).toFixed(1))}
mk('path',{d:'M'+GP.join('L')+'Z',class:'gain'},$('f_gear'));mk('circle',{cx:800,cy:400,r:32,fill:'var(--stage)'},$('f_gear'));
const GL=[[600,-1,'ANSWER'],[520,1,'ASK'],[440,-1,'ASK'],[370,1,'ANSWER']].map(([y,s,l])=>{const g=mk('g',{},$('g_lv'));mk('ellipse',{cx:350+s*50,cy:y,rx:50,ry:18,class:'gain',transform:'rotate('+(-s*20)+' '+(350+s*50)+' '+y+')'},g);const tx=mk('text',{x:350+s*118,y:y+9,'font-size':24,'text-anchor':s>0?'start':'end',class:'m',style:'fill:var(--ink)'},g);tx.textContent=l;return g});
fig($('g_ppl'),900,380,36,'gain');fig($('g_ppl'),1300,380,36,'ink');
for(let i=0;i<12;i++)mk('rect',{x:1262+(i%4)*44,y:650+Math.floor(i/4)*40,width:30,height:30,rx:5,fill:i===5?'var(--gain)':'var(--line)'},$('k_grid'));