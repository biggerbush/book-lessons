const fig=(g,x,y,r,c)=>{const a=c?{fill:c}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const V=n=>'var(--'+n+')',CC=[V('ink'),V('loss'),V('muted')];
const TD=[];for(let i=0;i<18;i++){const a=i*2.4,rr=22+(i%4)*28;TD.push({e:mk('circle',{r:9,fill:CC[i%3]},$('t_dots')),x0:1220+(i*137)%250,y0:250+(i*89)%320,x1:1340+rr*Math.cos(a),y1:420+rr*Math.sin(a)})}
const LVD=[[8,200,18,60,260],[4,480,30,120,290],[2,760,46,240,350],[1,1040,70,0,470]],LG=LVD.map(()=>mk('g',{},$('m_tree')));
LVD.forEach((L,l)=>{for(let j=0;j<L[0];j++){const y=L[4]+j*L[3];if(l<3){const N=LVD[l+1],y1=N[4]+Math.floor(j/2)*N[3];mk('path',{d:'M'+(L[1]+L[2])+' '+y+'L'+(N[1]-N[2])+' '+y1,stroke:V('line'),'stroke-width':4},LG[l+1])}mk('circle',{cx:L[1],cy:y,r:L[2],fill:l==3?V('gain'):l==0?CC[j%3]:V('ink')},LG[l])}});
[[420,430],[520,400],[620,430],[470,540],[600,540]].forEach((q,i)=>fig($('e_ppl'),q[0],q[1],16,[V('ink'),V('loss'),V('gain')][i%3]));
const EN=[[300,460],[830,440],[830,560]].map(q=>{const g=mk('g',{fill:V('muted')},$('e_new'));fig(g,q[0],q[1],16);return g});
const EB=[];for(let i=0;i<6;i++)EB.push(mk('rect',{x:1000+i*50,y:330+i*56,width:160+(i%2)*50,height:36,rx:18,fill:V('gain')},$('e_bars')));
for(let i=0;i<14;i++){const a=i*2*Math.PI/14,x=800+270*Math.cos(a),y=515+270*Math.sin(a);mk('path',{d:'M'+(x-16).toFixed(0)+' '+(y+12).toFixed(0)+'l16-28 16 28z',fill:V('loss')},$('n_tents'))}
fig($('k2f'),1230,380,14,V('gain'));fig($('k2f'),1310,380,14,V('gain'));
fig($('c_af'),800,262,14,V('loss'));
const FB=[954,984,1014].map(x=>{const g=mk('g',{fill:V('loss')},$('c_bf'));fig(g,x,590,12);return g});
fig($('c_cf'),586,590,12,V('gain'));fig($('c_cf'),646,590,12,V('gain'));
[[250,380],[430,500],[250,620]].forEach((q,i)=>{mk('circle',{cx:q[0],cy:q[1],r:64,fill:V('stage'),stroke:V('ink'),'stroke-width':5},$('r_isl'));mk('path',{d:'M'+(q[0]-22)+' '+(q[1]+24)+'v-26l22-20 22 20v26z',fill:CC[i]},$('r_isl'))});
const GY=490;
const RA=[],RP=[],RM=[];for(let i=0;i<10;i++){const a=i*Math.PI/5+.3,c=Math.cos(a),s=Math.sin(a);RA.push([c,s]);
mk('path',{d:'M'+(1080+40*c).toFixed(0)+' '+(GY+40*s).toFixed(0)+'L'+(1080+176*c).toFixed(0)+' '+(GY+176*s).toFixed(0),stroke:V('gain'),'stroke-width':4,'stroke-dasharray':'6 8'},$('r_rays'));
RP.push(mk('circle',{cx:1080+190*c,cy:GY+190*s,r:14,fill:V('muted')},$('r_rays')));RM.push(mk('circle',{r:8,fill:V('gain')},$('r_pil')))}
const XW=['Language','Laws','Beliefs'].map((w,i)=>{const g=mk('g',{},$('x_ws')),x=120+i*460;mk('rect',{x:x,y:620,width:420,height:84,rx:42,fill:V('stage'),stroke:V('gain'),'stroke-width':5},g);const tx=mk('text',{x:x+210,y:674,'font-size':36,'text-anchor':'middle',class:'d5'},g);tx.textContent=w;return g});
const ZT=[];for(let i=0;i<12;i++)ZT.push(mk('circle',{cx:260+i*70,cy:740,r:8,fill:V('gain')},$('z_trail')));