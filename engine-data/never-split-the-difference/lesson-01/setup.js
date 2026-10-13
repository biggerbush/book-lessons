const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const HP='M0 120C-150 20-160-90-75-110C-35-120-8-92 0-70C8-92 35-120 75-110C160-90 150 20 0 120Z';
const h0=mk('path',{d:HP,class:'gain'},$('hb0'));
const h8=mk('path',{d:HP,class:'gain'},$('hb8'));
mk('path',{d:HP,class:'gain',transform:'translate(0 55) scale(.28)'},$('ht3'));
mk('path',{d:HP,class:'gain',transform:'translate(720 505) scale(.22)'},$('bh6'));
fig($('sepP'),640,380,30,'ink');
for(let k=0;k<2;k++){const x=1110+k*190,g=$('calc');mk('rect',{x:x,y:300,width:150,height:230,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('rect',{x:x+18,y:318,width:114,height:44,rx:6,class:'ink'},g);
  for(let r=0;r<4;r++)for(let c=0;c<3;c++)mk('rect',{x:x+20+c*40,y:380+r*36,width:30,height:26,rx:5,fill:'var(--line)'},g)}
fig($('thk'),950,330,28,'ink');
fig($('stkP'),770,440,28,'ink');
for(let i=0;i<5;i++)fig($('stuP'),170+i*80,500,22,'ink');
fig($('vosP'),1250,480,30,'gain');
const BR=[[70,140],[60,160],[80,150],[65,175]].map((h,i)=>{const x=640+i*86;return [mk('rect',{x:x,width:30,rx:4,class:'ink'},$('bars4')),mk('rect',{x:x+34,width:30,rx:4,class:'gain'},$('bars4')),h]});
fig($('youP'),220,440,34,'ink');fig($('themP'),1100,440,34,'ink');
const AR=[0,1,2,3].map(()=>{const g=mk('g',{},$('arw5'));mk('path',{d:'M0 0h70m-18-16 18 16-18 16',fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);const tx=mk('text',{x:0,y:-14,'font-size':18,class:'m'},g);tx.textContent='FACT';return g});
fig($('pplP'),260,420,30,'ink');fig($('pplP'),720,420,30,'ink');
let HL=null;for(let r=0;r<4;r++)for(let c=0;c<7;c++){const e=mk('rect',{x:140+c*52,y:330+r*74,width:46,height:56,rx:6,fill:r===2&&c===4?'var(--gain)':'var(--line)'},$('grid7'));if(r===2&&c===4)HL=e}