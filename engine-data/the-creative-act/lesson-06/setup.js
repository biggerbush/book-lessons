const fig=(g,x,y,r,a)=>[mk('circle',Object.assign({cx:x,cy:y,r:r},a),g),mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)];
fig($('t_me'),1100,440,28,{class:'ink'});
const cH=fig($('c_fig'),440,500,32,{class:'ink'})[0];
const cG=[[900,330],[1020,300],[1140,320],[1260,290],[1380,330],[960,460],[1100,450],[1240,460],[1380,470]].map(q=>{const g=mk('g',{},$('c_crowd'));fig(g,q[0],q[1],24,{fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 7'});return g});
const wy=(x,s)=>440+70*Math.sin(x/170+s*1.1)+30*Math.sin(x/90-s*.7);
fig($('w_me'),180,680,20,{class:'ink'});
fig($('a_fig'),330,400,34,{class:'ink'});
for(let i=0;i<5;i++){const x=960+i*100;fig($('a_crowd'),x,480,24,{class:'ink'});mk('rect',{x:x-36,y:360,width:72,height:44,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('a_ops'));for(let j=-1;j<2;j++)mk('circle',{cx:x+j*16,cy:382,r:4,class:'ink'},$('a_ops'))}
const kC=['LEAN IN','A SPARK','EXCITED'].map((s,i)=>{const x=760+i*250,g=mk('g',{},$('k_chips'));mk('rect',{x:x,y:540,width:220,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);mk('text',{x:x+110,y:580,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--ink)'},g).textContent=s;return g});
fig($('r_fig'),280,380,40,{class:'ink'});
const rK=[];for(let i=0;i<8;i++){const x=650+i*100;mk('path',{d:'M'+x+' 450V650',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('r_fad'));rK.push(mk('rect',{x:x-22,y:538,width:44,height:24,rx:6},$('r_fad')))}
fig($('n_me'),260,470,40,{class:'gain'});
const nH=[],nT=[];[[980,260],[1260,375],[980,440],[1260,555],[980,620]].forEach((q,i)=>{
  nH.push(fig($('n_ppl'),q[0],q[1],22,{class:'ink'})[0]);
  const a=(-50+25*i)*Math.PI/180, sx=260+52*Math.cos(a), sy=470+52*Math.sin(a), ex=q[0]-32;
  nT.push(mk('path',{d:'M'+sx.toFixed(1)+' '+sy.toFixed(1)+'C'+(sx+260).toFixed(1)+' '+sy.toFixed(1)+' 700 '+q[1]+' 880 '+q[1]+'H'+ex,fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1'},$('n_th')))});
for(let k=0;k<11;k++){const a=(-135+27*k)*Math.PI/180;mk('path',{d:'M'+(340+130*Math.sin(a)).toFixed(1)+' '+(470-130*Math.cos(a)).toFixed(1)+'L'+(340+150*Math.sin(a)).toFixed(1)+' '+(470-150*Math.cos(a)).toFixed(1),class:k>6?'s-gain':'s-line','stroke-width':6,'stroke-linecap':'round'},$('v_tk'))}
const vP=[];for(let i=0;i<8;i++){const g=mk('g',{},$('v_crowd')),j=i>>1,lv=i%2===0;vP.push({g:g,lv:lv,el:fig(g,0,0,22,{class:'ink'}),s:[1000+(i%4)*110,380+(i>>2)*180],e:[(lv?880:1320)+(j%2)*(lv?100:110),380+(j>>1)*180]})}