const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const txt=(g,s,a)=>{const e=mk('text',a,g);e.textContent=s;return e};
fig($('t_kid'),940,690,16,'ink');fig($('t_pkid'),1300,655,12,'ink');
const TD=[];for(let i=0;i<8;i++){const a=i*Math.PI/4+.39;TD.push(mk('circle',{cx:(1300+92*Math.cos(a)).toFixed(1),cy:(680+88*Math.sin(a)).toFixed(1),r:8,class:'loss'},$('t_dots')))}
fig($('tvfig'),320,330,18,'ink');fig($('mcfig'),730,436,14,'ink');
fig($('kids_in'),260,490,26,'ink');fig($('kids_in'),380,530,16,'ink');
mk('path',{d:'M299 560Q330 590 358 572',class:'s-ink','stroke-width':6,fill:'none','stroke-linecap':'round'},$('kids_in'));
const SI={fill:'none',class:'s-ink','stroke-width':6,'stroke-linejoin':'round','stroke-linecap':'round'};
const CARDS=['WALK TO SCHOOL','PLAY IN THE PARK','RUN ERRANDS'].map((s,i)=>{const x=600+i*295,c=x+135,g=mk('g',{},$('acts'));
  mk('rect',{x:x,y:240,width:270,height:320,rx:18,fill:'var(--stage)',class:'s-line','stroke-width':3},g);
  const D=[`M${c-50} 420V340h100v80zM${c-62} 342L${c} 296l62 46M${c-14} 420v-36h28v36M${c} 296v-26l26 8-26 8`,`M${c-20} 420v-50M${c+30} 420V320h40v100M${c+30} 330h40M${c+42} 330v50h16v-50`,`M${c-44} 340h88l-8 80h-72zM${c-20} 340v-14a20 20 0 0 1 40 0v14`][i];
  mk('path',Object.assign({d:D},SI),g); if(i==1)mk('circle',{cx:c-20,cy:350,r:34,class:'gain'},g);
  txt(g,s,{x:c,y:500,'font-size':20,'text-anchor':'middle',class:'m'});
  const xx=mk('path',{d:`M${x+55} 272L${x+215} 448M${x+215} 272L${x+55} 448`,class:'s-loss','stroke-width':8,'stroke-linecap':'round',fill:'none'},$('acts'));
  return [g,xx]});
const TH=['Strangers','Violent or sexual content','Companies targeting them'].map((s,i)=>{const y=330+i*150,g=mk('g',{},$('threats'));
  mk('path',{d:`M720 ${y}H545`,class:'s-loss','stroke-width':4,'stroke-dasharray':'8 8',fill:'none'},g);
  if(i==0)fig(g,760,y-30,14,'loss');
  if(i==1){mk('path',{d:`M760 ${y-36}L800 ${y+30}H720Z`,class:'loss'},g);txt(g,'!',{x:760,y:y+22,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'})}
  if(i==2)[34,20,7].forEach((r,j)=>mk('circle',{cx:760,cy:y,r:r,fill:j==2?'var(--loss)':'none',class:'s-loss','stroke-width':6},g));
  txt(g,s,{x:840,y:y+14,'font-size':40,class:'d5'});return g});
const AG=['DRIVING','DRINKING','SIGNING CONTRACTS'].map((s,i)=>{const y=370+i*130,g=mk('g',{},$('agerows'));
  mk('path',Object.assign({d:[`M160 ${y+12}v-18h12l12-16h28l12 16h12v18z`,`M176 ${y-28}h36l-6 52h-24z`,`M174 ${y-30}h40v56h-40zM182 ${y-14}h24M182 ${y}h24M182 ${y+14}h14`][i]},SI,{'stroke-width':5}),g);
  if(i==0)[176,220].forEach(x=>mk('circle',{cx:x,cy:y+14,r:7,class:'ink'},g));
  txt(g,s,{x:260,y:y+8,'font-size':24,class:'m'});
  mk('rect',{x:600,y:y-40,width:16,height:70,class:'ink'},g);mk('rect',{x:616,y:y-34,width:100,height:14,rx:4,class:'gain'},g);return g});
fig($('mkid'),380,283,16,'ink');
const FACES=[];for(let i=0;i<4;i++)FACES.push(mk('circle',{cy:540,r:14,class:'ink'},$('ad_in')));
const TAGS=[];for(let i=0;i<3;i++){const g=mk('g',{},$('ad_out'));mk('rect',{x:0,y:525,width:50,height:30,rx:6,class:'gain'},g);txt(g,'AD',{x:25,y:547,'font-size':18,'text-anchor':'middle',class:'m',style:'fill:var(--on-gain)'});TAGS.push(g)}
const OFF=[[-55,-28],[55,-28],[-50,-90],[50,-90],[0,-130]];
const pan=(g,lab)=>{mk('path',{d:'M-70 0H70',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);fig(g,0,-67,16,'ink');txt(g,lab,{x:0,y:44,'font-size':20,'text-anchor':'middle',class:'m'})};
pan($('lp'),'REAL WORLD');pan($('rp'),'ONLINE');
const SH=OFF.map(([x,y])=>mk('path',{d:`M${x} ${y-22}L${x+18} ${y-14}V${y+2}C${x+18} ${y+14} ${x} ${y+22} ${x} ${y+22}C${x} ${y+22} ${x-18} ${y+14} ${x-18} ${y+2}V${y-14}Z`,class:'gain'},$('lp')));
const DG=OFF.map(([x,y])=>mk('path',{d:`M${x} ${y-20}L${x+20} ${y+16}H${x-20}Z`,class:'loss'},$('rp')));
fig($('kid7'),0,624,18,'ink');