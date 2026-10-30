const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const T=(g,x,y,s,txt,o={})=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:'m'},o),g);e.textContent=txt;return e};
const tk=(g,cx,cy,r1,r2)=>{for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(cx+r1*Math.sin(a)).toFixed(1)+' '+(cy-r1*Math.cos(a)).toFixed(1)+'L'+(cx+r2*Math.sin(a)).toFixed(1)+' '+(cy-r2*Math.cos(a)).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},g)}};
const chip=(g,x,y,w,s)=>{const c=mk('g',{},g);mk('rect',{x:x,y:y,width:w,height:64,rx:32,fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'10 8'},c);T(c,x+w/2,y+42,28,s,{class:'d5','text-anchor':'middle'});return c};

const RG=[0,1,2].map(()=>mk('circle',{cx:1330,cy:430,r:100,fill:'none',stroke:'var(--gain)','stroke-width':5},$('t_rings')));
const LO=[[1180,230],[1270,200],[1390,200],[1455,240]].map(q=>[q,mk('circle',{cx:1330,cy:430,r:16,class:'gain'},$('t_lost'))]);

tk($('o_tick'),330,440,120,136);
const BX=[['SOCIAL','DEPRIVATION'],['SLEEP','DEPRIVATION'],['FRAGMENTED','ATTENTION'],['ADDICTION','']].map((h,i)=>{const x=600+i*215,g=mk('g',{},$('o_bx'));
  mk('rect',{x:x,y:520,width:195,height:140,rx:16,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  T(g,x+20,570,36,String(i+1),{class:'d',style:'fill:var(--loss)'});T(g,x+20,610,18,h[0]);T(g,x+20,636,18,h[1]);return g});

const FP=[280,440].map(x=>{const g=mk('g',{},$('f_ppl'));fig(g,x,352,30,'ink');return g});
const CHP=['Eye contact','Laughter','Shared rhythm'].map((s,i)=>chip($('f_miss'),700+i*240,720,220,s));

tk($('z_tick'),880,360,78,92);
const ZC=['Memory','Mood','Learning'].map((s,i)=>chip($('z_chips'),760+i*230,670,210,s));

fig($('a_fig'),290,360,32,'ink');
const PX=[760,900,1010,1180,1300];
const APG=PX.map(x=>{const g=mk('g',{},$('a_pings'));mk('path',{d:'M'+x+' 507V530',class:'s-loss','stroke-width':4},g);mk('circle',{cx:x,cy:495,r:12,class:'loss'},g);return g});
const XS=[640].concat(PX,[1440]);
const SH=XS.slice(0,-1).map((x,i)=>{const w=XS[i+1]-x-12;return [mk('rect',{x:x+6,y:530,width:w,height:50,rx:8,class:'gain'},$('a_sh')),x+6+w/2,(i%2?1:-1)*(16+i*5),(i%2?-1:1)*(6+i*2)]});

const HP=(x,y)=>'M'+x+' '+(y+20)+'c-26-18-26-40-12-40 6 0 10 4 12 8 2-4 6-8 12-8 14 0 14 22-12 40z';
const RH=[],RD=[];[250,350,450].forEach(x=>{RH.push(mk('path',{d:HP(x,405),class:'gain'},$('x_reels')));RD.push(mk('path',{d:'M'+(x-24)+' 405h48',class:'s-muted','stroke-width':8,'stroke-linecap':'round'},$('x_reels')))});
const RS=[1,0,0,1,0,0,0,1,0];
const RW=RS.map((r,i)=>mk('circle',{cx:180+i*52,cy:790,r:18,stroke:'var(--muted)','stroke-width':3},$('x_row')));
const CD=[0,1,2,3,4].map(i=>{const g=mk('g',{},$('x_cards'));mk('rect',{x:1192,y:0,width:196,height:120,rx:12,fill:'var(--line)'},g);
  mk('circle',{cx:1222,cy:30,r:14,class:i%2?'gain':'ink'},g);mk('rect',{x:1246,y:22,width:110,height:14,rx:7,fill:'var(--stage)'},g);mk('rect',{x:1208,y:60,width:164,height:44,rx:8,fill:'var(--stage)'},g);return g});

const NP=[[560,250],[810,500],[560,750],[310,500]];
const ND=['SCROLLS LATE','TIRED','CAN’T FOCUS','PHONE AGAIN'].map((s,i)=>{const q=NP[i],g=mk('g',{},$('k_nodes'));
  mk('rect',{x:q[0]-120,y:q[1]-32,width:240,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);T(g,q[0],q[1]+7,20,s,{'text-anchor':'middle',style:'fill:var(--ink)'});return g});
for(let i=0;i<4;i++){const a=Math.PI/4+i*Math.PI/2;mk('path',{d:'M-10 -12L6 0L-10 12',fill:'none',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',transform:'translate('+(560+250*Math.sin(a)).toFixed(1)+' '+(500-250*Math.cos(a)).toFixed(1)+') rotate('+(a*180/Math.PI).toFixed(1)+')'},$('k_chev'))}
const SK=['SOCIAL','SLEEP','ATTENTION','ADDICTION'].map((s,i)=>{const g=mk('g',{},$('k_stack'));mk('rect',{x:460,y:410+i*46,width:200,height:38,rx:8,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);T(g,560,436+i*46,18,s,{'text-anchor':'middle',style:'fill:var(--ink)'});return g});
const PK=[1070,1140,1210].map(x=>{mk('circle',{cx:x,cy:440,r:22,fill:'none',stroke:'var(--muted)','stroke-width':3,'stroke-dasharray':'5 6'},$('k_ghost'));const g=mk('g',{},$('k_ppl'));fig(g,x,440,22,'ink');return g});

const S7=[[180,390],[250,390],[400,390],[470,390]],D7=[[730,410],[810,410],[890,410],[970,410]];
const PH7=S7.map(()=>{const g=mk('g',{},$('n_ph'));mk('rect',{x:0,y:0,width:50,height:90,rx:9,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);return [g,mk('rect',{x:8,y:12,width:34,height:58,rx:3},g)]});
const BL=D7.map(q=>mk('path',{d:'M'+(q[0]+30)+' 352l-12 20h12l-8 18 18-24h-12l8-14z',class:'gain'},$('n_bolt')));
const TG=[0,1,2].map(i=>{const y=310+i*84,g=mk('g',{},$('n_tg'));mk('path',{d:'M1190 '+(y+34)+'h32l-6-8v-10a10 10 0 0 0-20 0v10z',class:'ink'},g);
  mk('rect',{x:1240,y:y+16,width:90,height:12,rx:6,fill:'var(--line)'},g);return [mk('rect',{x:1360,y:y,width:80,height:44,rx:22},g),mk('circle',{cx:1418,cy:y+22,r:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},g)]});

const QD=[[1110,360],[1450,360],[1110,600],[1450,600]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:26,fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'8 7'},$('qdots')));