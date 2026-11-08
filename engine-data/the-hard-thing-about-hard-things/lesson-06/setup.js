const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const S=(d,c,w,g,o={})=>mk('path',Object.assign({d:d,fill:'none',stroke:c,'stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round'},o),g);
const wv=(el,x0,x1,y,A,t,s)=>{let d='M'+x0+' '+y;for(let x=x0;x<=x1;x+=20)d+='L'+x+' '+(y+A*Math.sin(x/50+t*s)).toFixed(1);el.setAttribute('d',d)};

fig($('pg'),1200,290,20,'ink');mk('path',{d:'M1174 288a26 26 0 0 1 52 0h6v6h-64v-6z',class:'loss'},$('pg'));
[1320,1375,1430].forEach(x=>{fig($('pg'),x,320,12,'ink');S('M'+(x+14)+' 352l8-44','var(--ink)',5,$('pg'))});
fig($('pc'),1200,530,20,'ink');S('M1232 590l40-60','var(--ink)',5,$('pc'));
S('M1290 520l18 8-18 8 18 8-18 8','var(--loss)',5,$('pc'));
[1350,1395,1440].forEach(x=>fig($('pc'),x,565,12,'ink'));

const BR=[0,1,2,3].map(i=>mk('rect',{x:480+i*65,y:560,width:50,height:0,rx:4,class:'gain'},$('gc')));
S('M470 470L720 320m-30 4 30-4-6 30','var(--ink)',5,$('gc'));
['b0','b1'].forEach((id,i)=>{const g=$(id);mk('path',{d:'M-70 0h140l-30 36h-80z',class:'ink'},g);S('M0 0v-100','var(--ink)',5,g);mk('path',{d:'M8 -96V-12h62z',class:i?'loss':'gain'},g)});

fig($('tb'),300,470,26,'gain');
const TP=[[520,330],[640,330],[760,330],[520,660],[640,660],[760,660]],SP2=[[560,505],[640,495],[720,505],[560,555],[640,565],[720,555]],TMG=[],TH=[],ID=[];
TP.forEach(([x,y])=>{const g=mk('g',{},$('tm'));TMG.push(g);TH.push(...fig(g,x,y,22,'ink'));ID.push(mk('circle',{cx:x,cy:y,r:12,class:'gain',stroke:'var(--ink)','stroke-width':3},$('ids')))});
const CL=[];for(let i=0;i<5;i++)[[1095,1225],[1275,1405]].forEach(([a,b])=>CL.push([mk('line',{x1:a,y1:400+i*35,x2:a,y2:400+i*35,stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},$('cbl')),a,b]));

const DT=[];for(let i=0;i<12;i++)DT.push([mk('circle',{r:10,class:'ink'},$('dts')),320+(i%3)*20,305+i*33]);
fig($('fn'),180,420,28,'ink');

const zz='L310 300L345 350L315 400L345 450L310 500L345 550L315 600L345 650L330 710';
['bkL','bkR'].forEach((id,i)=>mk('path',{d:'M'+(i?500:160)+' 250H330'+zz+'H'+(i?500:160)+'z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6,'stroke-linejoin':'round'},$(id)));
for(let i=0;i<6;i++){const y=330+i*64;mk('rect',{x:190,y:y-12,width:24,height:24,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':3},$('bkL'));S('M232 '+y+'H295','var(--line)',6,$('bkL'));S('M365 '+y+'H470','var(--line)',6,$('bkR'))}
['st0','st1'].forEach((id,r)=>{const y=r?675:555;[0,1,2].forEach(i=>{const x=780+i*120;mk('rect',{x:x,y:y,width:90,height:60,rx:10,fill:'var(--stage)',stroke:r?'var(--loss)':'var(--ink)','stroke-width':4},$(id));const tx=mk('text',{x:x+45,y:y+40,'font-size':28,'text-anchor':'middle',class:'d5'},$(id));tx.textContent=i+1;if(i<2)S('M'+(x+96)+' '+(y+30)+'h20','var(--muted)',4,$(id))})});

const WN=[];for(let j=0;j<4;j++)for(let i=0;i<4;i++)WN.push(mk('rect',{x:190+i*65,y:330+j*70,width:40,height:40,rx:4,fill:'var(--line)'},$('win')));
fig($('ps'),620,350,30,'ink');fig($('pl'),820,350,30,'gain');
const CV=[0,1,2].map(()=>S('M0 -18l-18 18 18 18','var(--loss)',7,$('chev')));

fig($('gr'),200,330,26,'ink');
// memory chip pins: one line per pin, repositioned each frame as the chip is crushed
const MP=[];for(let i=0;i<5;i++){const y=480+i*40;MP.push([S('M410 '+y+'h30','var(--ink)',6,$('mpins')),S('M680 '+y+'h30','var(--ink)',6,$('mpins')),i]);S('M1080 '+(y-10)+'h30M1370 '+(y-10)+'h30','var(--gain)',6,$('cpins'))}

// two hats: amber floating upper-left, indigo on the head
fig($('hp'),300,470,36,'ink');
mk('path',{d:'M-44 0a44 36 0 0 1 88 0z',class:'gain'},$('hA'));S('M-58 0h116','var(--gain)',8,$('hA'));
mk('path',{d:'M-46 0a46 46 0 0 1 92 0z',class:'loss'},$('hB'));S('M-54 0h108','var(--loss)',10,$('hB'));
$('hB').setAttribute('transform','translate(300 434)');
S('M250 296Q320 286 334 372','var(--gain)',4,$('harr'),{'stroke-dasharray':'8 8'});