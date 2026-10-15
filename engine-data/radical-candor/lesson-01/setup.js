const fig=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},e);return e};
fig($('tk'),1280,520,36,'ink');
const BL=[];for(let i=0;i<10;i++){const a=i*Math.PI/5,c=Math.cos(a),s=Math.sin(a);BL.push(mk('line',{x1:1280+c*170,y1:325+s*130,x2:1280+c*200,y2:325+s*150,class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('burst')))}
const BR=[];for(let i=0;i<5;i++)BR.push(mk('rect',{x:220+i*90,y:540,width:56,height:0,rx:4,class:'gain'},$('bars')));
[1020,1180,1340].forEach(x=>fig($('ldr'),x,460,30,'ink'));
fig($('k1s'),760,400,34,'gain');
// walking pair: centres 260px apart so each name sits clearly under its own figure
fig($('wk'),470,520,40,'gain');fig($('wk'),740,510,42,'ink');
[['KIM SCOTT',470],['SHERYL SANDBERG',740]].forEach(q=>{const e=mk('text',{x:q[1],y:760,'font-size':20,'text-anchor':'middle',class:'m'},$('wk'));e.textContent=q[0]});
fig($('k3'),500,420,44,'gain');
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:900+c*110,y1:470+s*110,x2:900+c*140,y2:470+s*140,class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const U4=[[700,420],[1110,420],[700,580],[1110,580]].map(q=>{const e=mk('text',{x:q[0],y:q[1],'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('ums4'));e.textContent='um';return e});
const HD=[];for(let i=0;i<5;i++)HD.push(mk('path',{d:'M0 -40a60 60 0 0 1 0 80',fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('hd')));
fig($('f0p'),240,420,34,'ink');fig($('f0p'),410,420,34,'gain');
fig($('f1p'),700,420,34,'gain');fig($('f1p'),900,430,26,'gain').setAttribute('opacity',.35);
const UM6=[];for(let i=0;i<5;i++){const e=mk('text',{x:640+i*72,y:300,'font-size':26,class:'d',style:'fill:var(--loss)'},$('f1p'));e.textContent='um';UM6.push(e)}
fig($('f2p'),1273,410,36,'gain');
fig($('youf'),160,770,16,'gain');