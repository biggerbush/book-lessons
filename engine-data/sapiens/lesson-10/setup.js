<<<<<<< HEAD
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
=======
const ppl=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const drw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
ppl($('tman'),1300,238,22,'ink');ppl($('cave'),210,410,22,'ink');ppl($('forp'),250,350,26,'ink');ppl($('farp'),520,350,26,'ink');ppl($('godp'),310,300,50,'ink');ppl($('mirp'),1320,390,30,'ink');ppl($('chp'),0,0,20,'loss');
mk('path',{d:'M15 45l35-32',class:'s-loss','stroke-width':7,'stroke-linecap':'round'},$('chp'));
const CG=[];for(let i=0;i<12;i++){const x=900+(i%4)*130,y=300+Math.floor(i/4)*100,g=mk('g',{},$('cages'));mk('ellipse',{cx:x+60,cy:y+62,rx:30,ry:20,class:'loss'},g);mk('circle',{cx:x+92,cy:y+42,r:11,class:'loss'},g);let d='';for(let k=1;k<5;k++)d+='M'+(x+k*26)+' '+(y+8)+'v84';mk('path',{d:d,class:'s-ink','stroke-width':3},g);mk('rect',{x:x+4,y:y+8,width:122,height:84,rx:6,fill:'none',class:'s-ink','stroke-width':4},g);CG.push(g)}
// labelled molecules with leader lines to the brain
const MO=[[230,640,'SEROTONIN',255,500],[540,640,'DOPAMINE',522,478]].map(c=>{const g=mk('g',{},$('mols'));
  mk('path',{d:'M'+c[3]+' '+c[4]+'L'+c[0]+' '+(c[1]-22),class:'s-muted','stroke-width':3,'stroke-dasharray':'6 6',fill:'none'},g);
  mk('circle',{cx:c[3],cy:c[4],r:6,class:'gain'},g);
  let d='';for(let k=0;k<6;k++){const a=k*Math.PI/3+Math.PI/6;d+=(k?'L':'M')+(c[0]+20*Math.cos(a)).toFixed(1)+' '+(c[1]+20*Math.sin(a)).toFixed(1)}
  mk('path',{d:d+'z',class:'s-gain',fill:'none','stroke-width':5,'stroke-linejoin':'round'},g);
  const tx=mk('text',{x:c[0],y:c[1]+52,'font-size':20,'text-anchor':'middle',class:'m',style:'fill:var(--gain)'},g);tx.textContent=c[2];return g});
const RP=[];[[850,560],[1100,540],[1000,600]].forEach((c,i)=>{for(let j=0;j<2;j++)RP.push([mk('ellipse',{cx:c[0],cy:c[1],fill:'none',class:'s-ink','stroke-width':4},$('rip')),i*.33+j*.5])});
let da='',db='';const RG=[];for(let y=260;y<=580;y+=8){const s=Math.sin((y-260)/40);da+=(y==260?'M':'L')+(800+70*s).toFixed(1)+' '+y;db+=(y==260?'M':'L')+(800-70*s).toFixed(1)+' '+y;if((y-260)%24==0)RG.push(mk('path',{d:'M'+(800+70*s).toFixed(1)+' '+y+'H'+(800-70*s).toFixed(1),class:'s-line','stroke-width':5},$('dnas')))}
mk('path',{d:da,class:'s-ink',fill:'none','stroke-width':6},$('dnas'));mk('path',{d:db,class:'s-ink',fill:'none','stroke-width':6},$('dnas'));
const ER=RG[7];
>>>>>>> 93ca47a (Draft 'Sapiens': lesson 10 of 10)
