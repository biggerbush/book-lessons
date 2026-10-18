const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const tx=(g,x,y,s,a,str)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s},a),g);e.textContent=str;return e};
const MA={class:'m','text-anchor':'middle'};
const face=(g,x,y,sm)=>{[-14,14].forEach(d=>mk('circle',{cx:x+d,cy:y-8,r:5,fill:'var(--stage)'},g));mk('path',{d:'M'+(x-16)+' '+(y+14)+'q16 '+(sm?14:-12)+' 32 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g)};
let GC;
const FOUR=['RED','YELLOW','GREEN','BLUE'].map((n,i)=>{const g=mk('g',{},$('g_four')),x=200+i*130,G=i==2;const c=mk('circle',{cx:x,cy:300,r:44,fill:G?'var(--gain)':'none',stroke:G?'var(--gain)':'var(--line)','stroke-width':5},g);if(G)GC=c;tx(g,x,380,20,Object.assign({},MA,G?{style:'fill:var(--gain)'}:{}),n);return g});
const TP=[];for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2;TP.push(mk('circle',{cx:400+130*Math.cos(a),cy:610+130*Math.sin(a),r:22,class:'ink'},$('g_tp')))}
const WV=[0,1,2].map(i=>mk('path',{d:'M'+(990+i*40)+' 380q28 40 0 80',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round'},$('g_wv')));
const CP=['Harmony','Security','Relationships'].map((s,i)=>{const g=mk('g',{},$('v_chips'));mk('rect',{x:120+i*460,y:200,width:440,height:64,rx:32,class:'gain'},g);tx(g,340+i*460,243,32,{class:'d5','text-anchor':'middle',style:'fill:var(--on-gain)'},s);return g});
const RN=[];for(let i=0;i<5;i++)RN.push(mk('line',{x1:272+i*20,x2:268+i*20,stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round'},$('v_rain')));
fig($('v_figs'),1180,470,36,'ink');fig($('v_figs'),1360,470,36,'gain');
fig($('h_p'),420,450,40,'gain');
fig($('c_red'),920,440,44,'ink');mk('path',{d:'M866 588L836 500M974 588L1004 500',stroke:'var(--ink)','stroke-width':10,'stroke-linecap':'round'},$('c_red'));face($('c_red'),920,440,1);
fig($('c_gs'),1260,440,44,'gain');face($('c_gs'),1260,440,0);
const ST=['WHAT','STEP 1','STEP 2','WHY'].map((s,i)=>{const g=mk('g',{},$('n_steps')),x=160+i*190,y=700-i*60,L=i==3;mk('rect',{x:x,y:y,width:170,height:780-y,rx:10,fill:L?'var(--gain)':'var(--stage)',stroke:L?'var(--gain)':'var(--ink)','stroke-width':5},g);tx(g,x+85,y+44,22,Object.assign({},MA,L?{style:'fill:var(--on-gain)'}:{}),s);return g});
fig($('n_walk'),0,0,12,'gain');
const LN=[[1209,530,1119,507,1090,500],[1291,530,1381,507,1410,500],[1190,668,1119,691,1090,700],[1310,668,1381,691,1410,700]].map(q=>{const l=mk('path',{d:'M'+q[0]+' '+q[1]+'L'+q[2]+' '+q[3],stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8','stroke-linecap':'round'},$('n_link'));mk('circle',{cx:q[4],cy:q[5],r:22,class:'ink'},$('n_link'));return l});
fig($('n_link'),1250,540,34,'gain');
for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('circle',{cx:370+230*Math.cos(a),cy:520+120*Math.sin(a),r:20,class:i==5?'gain':'ink'},$('a_heads'))}
fig($('a_one'),780,470,36,'ink');fig($('a_one'),1040,470,36,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:800+100*c,y1:480+100*s,x2:800+112*c,y2:480+112*s,stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('w_ticks'))}
const SM=[0,1,2].map(()=>mk('path',{fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},$('w_steam')));
fig($('w_la'),1215,470,36,'ink');fig($('w_ra'),1345,470,36,'gain');
fig($('z_figs'),1020,420,34,'ink');fig($('z_figs'),1240,420,34,'gain');