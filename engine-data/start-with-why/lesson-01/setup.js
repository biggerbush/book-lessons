const pp=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const apl=(g,x,y,s,cls)=>{const a=mk('g',{transform:'translate('+x+' '+y+') scale('+s+')'},g);mk('path',{d:'M0 -30C-20 -45 -60 -35 -60 5C-60 45 -30 75 -15 70C-5 67 5 67 15 70C30 75 60 45 60 5C60 -35 20 -45 0 -30Z',class:cls},a);mk('path',{d:'M4 -38C6 -58 24 -68 36 -68C34 -52 20 -40 4 -38Z',class:cls},a);return a};
apl($('tApple'),1290,360,1.6,'gain');
const TQ=[0,1,2,3,4,5].map(i=>{const g=mk('g',{},$('tQ'));pp(g,1060+i*76,680,22,i===5?'gain':'ink');return g});
const WA=[];[[160,'winA'],[1120,'winB']].forEach(([x0,id],b)=>{for(let r=0;r<2;r++)for(let c=0;c<3;c++){const w=mk('rect',{x:x0+40+c*90,y:370+r*100,width:60,height:60,rx:6,fill:'var(--line)'},$(id));if(!b)WA.push(w)}mk('rect',{x:x0+130,y:570,width:60,height:70,rx:6,class:'ink'},$(id))});
[398,488,578].forEach(y=>{for(let i=0;i<3;i++)pp($('poolP'),850+i*50,y,10,'ink')});
const FT=[230,190,260,170,220].map((w,i)=>{const y=380+i*65,g=mk('g',{},$('feats'));mk('path',{d:'M718 '+y+'l12 12 24-26',class:'s-gain',fill:'none','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);mk('rect',{x:770,y:y-6,width:w,height:14,rx:7,fill:'var(--line)'},g);return g});
const dev=(g,k,x,y)=>{const S={fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5};
  if(k===0){mk('rect',Object.assign({x:x-40,y:y,width:80,height:56,rx:6},S),g);mk('rect',{x:x-30,y:y+62,width:60,height:10,rx:5,class:'ink'},g)}
  else{mk('rect',Object.assign({x:x-26,y:y,width:52,height:84,rx:10},S),g);if(k===1)mk('circle',{cx:x,cy:y+56,r:14,fill:'none',stroke:'var(--ink)','stroke-width':4},g);else mk('rect',{x:x-16,y:y+10,width:32,height:52,rx:4,fill:'var(--line)'},g)}};
const AI=[0,1,2].map(k=>{const x=220+k*200,g=mk('g',{},$('apI'));mk('path',{d:'M420 575L'+x+' 630',class:'s-gain','stroke-width':4,'stroke-linecap':'round'},g);dev(g,k,x,640);return g});
const DI=[1,2].map((k,i)=>{const x=1060+i*240,g=mk('g',{},$('dlI'));mk('path',{d:'M1180 565L'+x+' 630',class:'s-muted','stroke-width':4,'stroke-dasharray':'8 8'},g);dev(g,k,x,640);return g});
const FL=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('fol'));return [g,pp(g,0,610,24,'ink')]});
const flag=mk('g',{},FL[4][0]);mk('path',{d:'M0 584V514',class:'s-ink','stroke-width':4},flag);mk('rect',{x:0,y:514,width:44,height:28,class:'gain'},flag);
const WV=[0,1,2].map(()=>mk('path',{class:'s-gain',fill:'none','stroke-width':4,'stroke-linecap':'round'},$('waves')));
pp($('spk'),800,330,30,'gain');
const CR=[];for(let r=0;r<2;r++)for(let i=0;i<12-r;i++){const g=mk('g',{},$('crd'));CR.push([g,pp(g,200+r*54+i*109,620+r*100,18,'ink')])}
for(let i=0;i<7;i++)mk('circle',{cx:210+i*60,cy:250,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
let sd='';[455,525,595].forEach((y,j)=>{sd+='M205 '+y;for(let x=205;x+30<=(j===2?420:560);x+=30)sd+=' q15 -18 30 0'});
const scr=$('scr');scr.setAttribute('d',sd);let SLn=1500;try{SLn=scr.getTotalLength()||1500}catch(e){}scr.setAttribute('stroke-dasharray',SLn);
const LS=[900,1100,1300].map(x=>{const g=mk('g',{},$('lis'));return [g,x,pp(g,x,540,26,'ink')]});