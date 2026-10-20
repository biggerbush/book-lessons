const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const ST=(x,y,r)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;d+=(i?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const JET='M160 0L40-20L-20-90L-50-90L-30-20L-120-14L-150-50L-170-50L-160 0L-170 50L-150 50L-120 14L-30 20L-50 90L-20 90L40 20Z';
mk('path',{d:JET,class:'ink',transform:'translate(380 420)'},$('jetb'));
for(let x=740;x<=1400;x+=60)mk('path',{d:'M'+x+' 260V580',stroke:'var(--line)','stroke-width':1.5},$('bpg'));
for(let y=280;y<=560;y+=40)mk('path',{d:'M720 '+y+'H1420',stroke:'var(--line)','stroke-width':1.5},$('bpg'));
mk('path',{d:JET,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4,'stroke-linejoin':'round',transform:'translate(1070 420) scale(1.3)'},$('bpg'));
P($('clashP'),300,720,20,'ink');P($('clashP'),560,720,20,'ink');
P($('boyd2'),1310,470,30,'ink');
P($('offm2'),0,570,34,'gain');const st2=mk('path',{d:ST(0,500,22),class:'gain'},$('offm2'));
P($('boyd3'),790,520,40,'ink');
const R4=[];for(let i=0;i<7;i++){const y=720-i*70;R4.push(mk('path',{d:'M300 '+y+'H420',class:'s-ink','stroke-width':7,'stroke-linecap':'round'},$('rg4')))}
P($('clmm4'),360,0,22,'gain');
[560,650,740].forEach(x=>{mk('polygon',{points:(x-16)+',230 '+(x+16)+',230 '+(x+8)+',280 '+(x-8)+',280',class:'loss'},$('med4'));mk('circle',{cx:x,cy:300,r:26,class:'gain'},$('med4'))});
P($('do5'),300,470,30,'gain');
const B5=[];for(let r=0;r<4;r++)for(let c=0;c<3;c++)B5.push(mk('rect',{x:480+c*92,y:650-r*60,width:84,height:52,rx:6,class:'gain'},$('brk5')));
P($('boss5'),1000,450,30,'ink');
[990,1010].forEach(x=>mk('circle',{cx:x,cy:442,r:3,fill:'var(--stage)'},$('boss5')));
mk('path',{d:'M985 468q15-12 30 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},$('boss5'));
mk('path',{d:ST(340,425,30),class:'gain'},$('bst6'));
const RP=[0,1,2].map(()=>mk('circle',{cx:1050,cy:480,r:30,fill:'none',stroke:'var(--gain)','stroke-width':4},$('rip6')));
const ND=[];for(let i=0;i<8;i++){const a=i*Math.PI/4+.4;ND.push(mk('circle',{cx:(1050+250*Math.cos(a)).toFixed(1),cy:(480+250*Math.sin(a)).toFixed(1),r:16},$('nd6')))}
P($('mp7'),360,350,34,'ink');
const SK=[[272,312,16],[465,320,14],[455,520,12],[265,540,10]].map(q=>mk('path',{d:ST(q[0],q[1],q[2]),class:'gain'},$('spk7')));
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1100+150*c).toFixed(1)+' '+(420+150*s).toFixed(1)+'L'+(1100+164*c).toFixed(1)+' '+(420+164*s).toFixed(1),class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('tk7'))}