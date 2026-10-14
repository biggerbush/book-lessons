const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-1.6*r)+' '+(y+4.2*r)+'v'+(-1.2*r)+'a'+1.6*r+' '+1.6*r+' 0 0 1 '+3.2*r+' 0v'+1.2*r+'z',class:c},g)};
const T=(g,x,y,s,txt,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s},a||{}),g);e.textContent=txt;return e};
const dr=(el,k)=>{el.setAttribute('stroke-dasharray','1 1');el.setAttribute('stroke-dashoffset',(1-k).toFixed(3))};
const CAL=[];for(let i=0;i<24;i++){const x=1160+(i%6)*50,y=270+Math.floor(i/6)*60;CAL.push(mk('path',{d:'M'+(x+14)+' '+(y+18)+'l22 24m0-24l-22 24',class:'s-muted','stroke-width':4,'stroke-linecap':'round',fill:'none'},$('cal')))}
P($('resP'),260,340,36,'ink');P($('vioP'),680,340,36,'ink');P($('fP'),360,380,50,'ink');P($('cP'),250,290,26,'ink');P($('mP'),860,510,22,'ink');
const PT=['A SPECIFIC GOAL','FULL FOCUS','FAST FEEDBACK','REPEAT AND REFLECT'].map((s,i)=>{const g=mk('g',{},$('parts')),y=240+i*110;
  mk('rect',{x:960,y:y,width:520,height:86,rx:43,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('circle',{cx:1003,cy:y+43,r:28,class:'gain'},g);
  T(g,1003,y+53,28,String(i+1),{class:'d','text-anchor':'middle',style:'fill:var(--on-gain)'});T(g,1050,y+51,24,s,{class:'m'});return g});
for(let i=0;i<12;i++)mk('rect',{x:560+i*40,y:300,width:40,height:220,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('keys'));
for(let i=0;i<11;i++)if([0,1,3,4,5].includes(i%7))mk('rect',{x:588+i*40,y:300,width:24,height:130,class:'ink'},$('keys'));
for(let k=0;k<3;k++)mk('path',{d:'M544 488h32l-16 24z',class:'ink',transform:'rotate('+k*120+' 400 500)'},$('spin'));
for(let i=0;i<6;i++)mk('circle',{cx:1160,cy:280+i*52,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
const ST=[[136,360,'20 FOCUSED MINUTES'],[526,260,'FEEDBACK'],[816,420,'TRY AGAIN TOMORROW']].map(q=>{const g=mk('g',{},$('steps'));
  mk('rect',{x:q[0],y:660,width:q[1],height:64,rx:32,class:'gain'},g);T(g,q[0]+q[1]/2,701,24,q[2],{class:'m','text-anchor':'middle',style:'fill:var(--on-gain)'});return g});