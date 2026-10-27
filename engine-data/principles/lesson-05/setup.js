const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
fig($('walker'),260,575,30,'ink');
const DT=[];for(let x=500;x<=860;x+=60)for(let y=330;y<=630;y+=50){const h=Math.abs(y-480),w=x-310;if(h>w*180/590-16)continue;const b=h<=w*50/590+8;
  DT.push(mk('circle',{cx:x,cy:y,r:12,fill:b?'none':'var(--ink)',stroke:b?'var(--muted)':'none','stroke-width':3,'stroke-dasharray':b?'5 5':'none'},$('dots')))}
const WC=['var(--gain)','var(--loss)','var(--ink)','var(--gain)','var(--loss)','var(--muted)'],SG=[];
for(let i=0;i<6;i++){const P=a=>(1260+120*Math.cos(a)).toFixed(1)+' '+(480+120*Math.sin(a)).toFixed(1),a0=i*Math.PI/3;
  SG.push(mk('path',{d:'M1260 480L'+P(a0)+'A120 120 0 0 1 '+P(a0+Math.PI/3)+'z',stroke:'var(--stage)','stroke-width':4,'fill-opacity':i%2?.7:1},$('segs')))}
mk('circle',{cx:1260,cy:480,r:50,fill:'var(--stage)'},$('segs'));
fig($('team'),630,296,14,'gain');fig($('team'),850,296,14,'gain');
fig($('you7'),300,410,36,'gain');fig($('critp'),1300,440,36,'ink');
const SB=[];for(let i=0;i<8;i++){const a=i*Math.PI/4;SB.push(mk('path',{d:'M'+(14*Math.cos(a)).toFixed(1)+' '+(14*Math.sin(a)).toFixed(1)+'L'+(34*Math.cos(a)).toFixed(1)+' '+(34*Math.sin(a)).toFixed(1),'stroke-width':6,'stroke-linecap':'round'},$('sburst')))}