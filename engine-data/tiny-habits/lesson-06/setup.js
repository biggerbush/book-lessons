const person=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const rays=(g,x,y,r1,r2,n,a0,a1,w)=>{const full=a0===undefined;a0=full?0:a0;a1=full?2*Math.PI:a1;for(let i=0;i<n;i++){const a=a0+(a1-a0)*(full?i/n:i/(n-1)),c=Math.cos(a),s=Math.sin(a);
  mk('path',{d:'M'+(x+r1*c).toFixed(1)+' '+(y+r1*s).toFixed(1)+'L'+(x+r2*c).toFixed(1)+' '+(y+r2*s).toFixed(1),stroke:'var(--gain)','stroke-width':w||6,'stroke-linecap':'round'},g)}return g};
const face=(g,x,y,r,s,on)=>{mk('circle',{cx:x,cy:y,r:r,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':5},g);const c=on?'var(--on-gain)':'var(--ink)';
  [-1,1].forEach(k=>mk('circle',{cx:x+k*r*.35,cy:y-r*.2,r:r*.1,fill:c},g));
  mk('path',{d:'M'+(x-r*.45)+' '+(y+r*.3)+'Q'+x+' '+(y+r*.3+s*r*.6)+' '+(x+r*.45)+' '+(y+r*.3),fill:'none',stroke:c,'stroke-width':Math.max(4,r*.1),'stroke-linecap':'round'},g)};

person($('t_fig'),1320,330,40,'ink'); rays($('t_rays'),1420,300,36,52,6,-Math.PI,.3);

const CX=[];for(let r=0;r<5;r++)for(let c=0;c<7;c++){const x=146+c*68,y=336+r*72;
  mk('rect',{x:x+4,y:y+4,width:60,height:64,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('r_x'));
  CX.push(mk('path',{d:'M'+(x+18)+' '+(y+20)+'l32 32m0-32l-32 32',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('r_x')))}
const TL=[];mk('text',{x:780,y:250,'font-size':22,class:'m'},$('r_tal')).textContent='REPETITIONS';
for(let g=0;g<10;g++){const gx=780+(g%5)*140,gy=270+Math.floor(g/5)*160;
  for(let i=0;i<4;i++)TL.push(mk('path',{d:'M'+(gx+i*22)+' '+gy+'v120',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('r_tal')));
  TL.push(mk('path',{d:'M'+(gx-10)+' '+(gy+95)+'L'+(gx+80)+' '+(gy+25),class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('r_tal')))}

rays($('f_glow'),400,460,205,230,9,-Math.PI+.25,-.25);
const PL=['ACTION','FEEL SUCCESS','DO IT AGAIN'].map((s,i)=>{const x=120+i*490,g=mk('g',{},$('f_pills')),on=i===1;
  mk('rect',{x:x,y:660,width:380,height:90,rx:45,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':5},g);
  const tx=mk('text',{x:x+190,y:715,'font-size':24,'text-anchor':'middle',class:'m'},g);tx.textContent=s;if(on)tx.style.fill='var(--on-gain)';
  if(i<2)mk('path',{d:'M'+(x+400)+' 705h70m-18-18 18 18-18 18',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},g);return g});

face($('sh_face'),400,470,120,1,true); rays($('sh_rays'),400,470,150,195,12,undefined,undefined,8);
const CB=[];for(let i=0;i<5;i++){const x=1200+i*60;person($('sh_clap'),x,450,16,'ink');
  CB.push(mk('path',{d:'M'+(x-10)+' 412l-8-14M'+(x+10)+' 412l8-14',class:'s-gain','stroke-width':5,'stroke-linecap':'round'},$('sh_clap')))}

for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(360+124*c).toFixed(1)+' '+(480+124*s).toFixed(1)+'L'+(360+138*c).toFixed(1)+' '+(480+138*s).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('tm_ticks'))}

const TE=[];for(let i=0;i<6;i++)TE.push(mk('rect',{x:170+i*90,y:300,width:70,height:110,rx:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('tb_teeth')));
face($('mr_face'),1140,410,70,1,true); rays($('mr_rays'),1140,410,92,122,10);

person($('fc_p'),760,400,30,'ink'); face($('fc_smile'),1260,420,100,1.2,true);

const FS=[];for(let i=0;i<5;i++){const g=mk('g',{},$('lp_faces'));face(g,840+i*150,400,40,-.3+i*.35,i===4);FS.push(g)}
rays($('su_rays'),0,0,62,90,10);

// closing: three-step sequence
person($('q8_fig'),988,466,16,'ink');
rays($('q8_sunr'),1000,708,52,72,10,undefined,undefined,7);