const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
[0,60,120].forEach(a=>mk('ellipse',{cx:1410,cy:320,rx:50,ry:18,fill:'none',stroke:'var(--ink)','stroke-width':4,transform:'rotate('+a+' 1410 320)'},$('t_orb')));
fig($('p_ape'),210,600,14,'ink');
fig($('g_fig'),1200,300,20,'gain');
fig($('z_ref'),1360,440,24,'gain');
const MP=[[270,370],[322,362],[300,412],[256,428],[342,424]];
mk('path',{d:'M'+MP.map(q=>q.join(' ')).join('L'),fill:'none',stroke:'var(--muted)','stroke-width':4},$('h_mol'));
const MOL=MP.map((q,i)=>mk('circle',{cx:q[0],cy:q[1],r:12,class:i%2?'loss':'gain'},$('h_mol')));
let wv='M660 520';for(let x=670;x<=1340;x+=10)wv+='L'+x+' '+(520-140*Math.sin((x-660)/340*2*Math.PI)).toFixed(1);$('h_wave').setAttribute('d',wv);
[860,1100].forEach((x0,j)=>{let d='M'+x0+' 520L'+(x0+30)+' 370';for(let k=1;k<20;k++)d+='L'+(x0+30+k*10)+' '+(520-150*Math.exp(-k/5)).toFixed(1);$('h_p'+j).setAttribute('d',d)});
const EH=[140,280,420],EX=[640,460,320],BR=[],EL=[];
[220,500,780].forEach((x,i)=>{BR.push(mk('rect',{x:x,y:740,width:160,height:0,class:'gain'},$('e_bars')));EL.push(mk('path',{d:'M'+(x-10)+' 0h180',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round'},$('e_bars')))});
const CG=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=120+c*150,y=260+r*130,cx=x+60,cy=y+60,g=mk('g',{},$('c_cages'));CG.push(g);
 mk('ellipse',{cx:cx-5,cy:cy+18,rx:30,ry:22,class:'ink'},g);mk('circle',{cx:cx+24,cy:cy-6,r:12,class:'ink'},g);
 mk('path',{d:'M'+(cx+36)+' '+(cy-10)+'l12 4-12 4z',class:'gain'},g);mk('circle',{cx:cx+22,cy:cy-20,r:6,class:'loss'},g);
 for(let i=1;i<5;i++)mk('path',{d:'M'+(x+i*26)+' '+y+'v110',stroke:'var(--muted)','stroke-width':3},g);
 mk('rect',{x:x,y:y,width:130,height:110,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':5},g)}
const FE=[];for(let i=0;i<6;i++){const l=mk('line',{x1:800,y1:470,stroke:'var(--loss)','stroke-width':3,'stroke-dasharray':'6 6'},$('m_fe'));FE.push([mk('circle',{r:16},$('m_fe')),l])}
const RG=[];for(let i=0;i<14;i++)RG.push(mk('line',{stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},$('n_rg')));
const QW={v:440};function qm(){try{const v=$('q_oldt').getComputedTextLength();if(v>0)QW.v=v}catch(e){}}
qm();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(qm);