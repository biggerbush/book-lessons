const avgFig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const avgRZ=(id,uu,a)=>rise($(id),p(uu,a,a+.5));
mk('path',{d:'M1100 470H1480',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('tcrowd'));
mk('path',{d:'M1200 470Q1400 470 1440 280',fill:'none',class:'s-gain','stroke-width':5,'stroke-dasharray':'10 10'},$('tcrowd'));
const avgTD=[];for(let i=0;i<7;i++)avgTD.push(mk('circle',{r:16,cy:470,class:'ink'},$('tcrowd')));
const avgTG=mk('circle',{r:20,class:'gain'},$('tcrowd'));
mk('text',{x:1100,y:530,'font-size':20,class:'m'},$('tcrowd')).textContent='THE CROWD';
const avgBD=[];for(let c=0;c<14;c++){const x=180+c*40,n=Math.round(9*Math.exp(-Math.pow((x-440)/130,2)));for(let k=0;k<n;k++)avgBD.push([mk('circle',{cx:x,cy:620-k*32,r:13,class:'ink'},$('bdots')),c])}
const avgPP=[860,1080,1300].map((x,i)=>{const g=mk('g',{},$('ppl'));avgFig(g,x,480,30,'ink');mk('rect',{x:x-40,y:360,width:80,height:60,rx:14,class:'gain'},g);
  mk('path',{d:'M'+(x-16)+' 390l10 12 22-24',fill:'none',stroke:'var(--on-gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);
  mk('text',{x:x,y:680,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=['FRIENDS','FAMILY','COWORKERS'][i];return g});
const avgRN=[];for(let i=0;i<8;i++)avgRN.push(mk('path',{class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('rain')));
const avgSM=[0,1,2].map(i=>mk('circle',{r:12+i*5,class:'loss','fill-opacity':.35},$('smoke')));
const avgFP=[[760,320],[860,300],[960,310],[1060,290],[1160,360],[1260,420],[1360,470],[1460,510]];
const avgFM=[[190,26],[280,26],[360,18],[430,18]].flatMap(([x,r])=>avgFig($('fam'),x,700-r*4.2,r,'ink'));
const avgStackN=[10,9,11,12],avgST=[0,1,2,3].map(s=>{const x=640+s*200,cs=[];for(let i=0;i<12;i++)cs.push(mk('rect',{x:x-60,y:700-(i+1)*24,width:120,height:20,rx:10,class:i<4?'ink':'gain'},$('stacks')));
  mk('text',{x:x,y:744,'font-size':20,'text-anchor':'middle',class:'m'},$('stacks')).textContent=['SAVINGS','CUSTOMERS','SKILLS','EFFORT'][s];return cs});
const avgR2=[];for(let i=0;i<11;i++){const x=660+i*80,s=cl((x-540)/800),yl=x>1340?560:340*(1-s)*(1-s)+300*(1-s)*s+340*s*s-6;avgR2.push([mk('path',{class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('rain2')),x,yl])}
avgFig($('mirf'),1340,380,28,'gain');