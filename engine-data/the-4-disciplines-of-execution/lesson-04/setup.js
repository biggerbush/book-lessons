const man=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
man($('rn'),0,-90,16,'gain');mk('path',{d:'M-10 -23l-14 22M10 -23l14 22',class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rn'));
const FOG=[[1220,330,50],[1300,300,60],[1390,330,55],[1260,370,40],[1360,380,45]].map(c=>[mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'var(--line)','fill-opacity':.8},$('fog')),c[0]]);
const TEAM=[240,440,640,840,1040].map(x=>{const g=mk('g',{},$('team'));man(g,x,520,26,'ink');return g});
const QS=[240,440,640,840,1040].map(x=>{const q=mk('text',{x:x,y:476,'font-size':48,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('qs'));q.textContent='?';return q});
let sp='M1330 580';for(let a=.3;a<18.9;a+=.3){const r=a*5.5;sp+='L'+(1330+r*Math.cos(a)).toFixed(1)+' '+(580+r*Math.sin(a)).toFixed(1)}
mk('path',{d:sp,fill:'none',class:'s-muted','stroke-width':5,'stroke-linecap':'round'},$('whirl'));
for(let r=0;r<2;r++)for(let c=0;c<4;c++)mk('rect',{x:1000+c*25,y:480+r*30,width:25,height:30,fill:(r+c)%2?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':2},$('flag'));
const CRW=[];for(let row=0;row<2;row++)for(let i=0;i<7;i++){const g=mk('g',{},$('crowd4'));man(g,160+i*66,590+row*90,14,'ink');CRW.push(g)}
const BX=[['FROM X','48 hours'],['TO Y','24 hours'],['BY WHEN','June 30']].map((b,i)=>{const x=120+i*460,g=mk('g',{},$('boxes'));
  mk('rect',{x:x,y:450,width:440,height:150,rx:16,fill:'var(--stage)',stroke:i===1?'var(--gain)':'var(--ink)','stroke-width':5},g);
  const l=mk('text',{x:x+30,y:494,'font-size':22,class:'m'},g);l.textContent=b[0];
  const v=mk('text',{x:x+30,y:570,'font-size':60,class:'d',style:i===1?'fill:var(--gain)':''},g);v.textContent=b[1];return g});
for(let i=1;i<32;i++){const h=i%4?18:36;mk('path',{d:'M'+(160+i*40)+' 490v-'+h,class:'s-ink','stroke-width':4},$('ticks'))}
// strikethrough bounds for the old goal, measured from the real text
const OS={x:160,w:780};
function measureOS(){try{const b=$('otx').getBBox();if(b&&b.width>0){OS.x=b.x;OS.w=b.width}}catch(e){}}
measureOS(); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measureOS);