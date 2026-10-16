const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tt=(g,x,y,s,str,cls,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:cls,'text-anchor':a||'start'},g);if(st)e.setAttribute('style',st);e.textContent=str;return e};
const tile=(g,x,y,s,L)=>{const r=mk('rect',{x:x,y:y,width:s,height:s,rx:s*.18,class:'gain'},g);const tx=tt(g,x+s/2,y+s*.72,s*.62,L,'d','middle','fill:var(--on-gain)');return [r,tx]};
const strike=(id,w,k)=>{const l=$(id);l.setAttribute('x2',(+l.getAttribute('x1')+w*k).toFixed(1))};
// title jar marbles: B R A V on top row, I N G below
const TJ=[[1234,450],[1298,450],[1362,450],[1426,450],[1266,512],[1330,512],[1394,512]].map((q,i)=>{const g=mk('g',{},$('t_m'));mk('circle',{cx:q[0],cy:q[1],r:30,class:'gain'},g);tt(g,q[0],q[1]+12,34,'BRAVING'[i],'d','middle','fill:var(--on-gain)');return g});
const PC=[];for(let i=0;i<7;i++)PC.push(mk('rect',{x:155+i*70,y:660,width:56,height:56,rx:10,class:'gain'},$('pcs')));
const MB=[];for(let r=0;r<8;r++)for(let c=0;c<7;c++)MB.push(mk('circle',{cx:362+c*46+(r%2)*10,cy:748-r*44,r:20,class:'gain',opacity:0},$('mbs')));
[['pB',120,'B','Boundaries'],['pR',820,'R','Reliability'],['pA',120,'A','Accountability'],['pV',820,'V','The vault'],['pI',120,'I','Integrity'],['pN',820,'N','Non-judgment']].forEach(([id,x,L,w])=>{const g=$(id);mk('rect',{x:x,y:200,width:660,height:600,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);tile(g,x+30,230,110,L);tt(g,x+170,305,52,w,'d')});
[['iBf',300,500,30,'ink'],['iBf',600,500,30,'ink'],['iAf',200,480,28,'ink'],['iNf',1000,520,30,'ink'],['iNf',1300,520,30,'ink'],['s1f',900,460,32,'ink'],['s1f',1320,460,32,'ink'],['s7f',400,470,34,'gain'],['s7f',840,470,34,'ink'],['genf',200,300,28,'ink']].forEach(a=>fig($(a[0]),a[1],a[2],a[3],a[4]));
const RC=[];for(let i=0;i<5;i++){const x=870+i*110;mk('rect',{x:x,y:400,width:80,height:80,rx:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rchk'));RC.push(mk('path',{d:'M'+(x+18)+' 442l16 16 30-34',fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round'},$('rchk')))}
const AC=['OWN IT','APOLOGIZE','MAKE AMENDS'].map((s,i)=>{const g=mk('g',{},$('achp')),y=400+i*110;mk('rect',{x:280,y:y,width:400,height:76,rx:38,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);tt(g,480,y+47,24,s,'m','middle','fill:var(--ink)');if(i<2)mk('path',{d:'M480 '+(y+82)+'v22',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);return g});
// BRAVING tiles: labels at 20px, staggered on two rows so long words never meet their neighbours
const BW=['BOUNDARIES','RELIABILITY','ACCOUNTABILITY','VAULT','INTEGRITY','NON-JUDGMENT','GENEROSITY'];
const BT=BW.map((w,i)=>{const g=mk('g',{},$('brv')),x=150+i*190,low=i%2===1,ly=low?748:706;tile(g,x,520,150,w[0]);
  mk('path',{d:'M'+(x+75)+' 676V'+(ly-24),stroke:'var(--line)','stroke-width':3,'stroke-linecap':'round'},g);
  tt(g,x+75,ly,20,w,'m','middle');return g});
tile($('rt7'),570,500,100,'R');
for(let r=0;r<2;r++)for(let c=0;c<3;c++)mk('rect',{x:1116+c*100,y:466+r*90,width:88,height:78,rx:8,fill:'none',stroke:'var(--line)','stroke-width':3},$('calc'));
const CX=[[0,0],[2,0],[1,1]].map(([c,r])=>mk('path',{d:'M'+(1138+c*100)+' '+(482+r*90)+'l44 46m0-46l-44 46',stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round'},$('calx')));
const CK=[...'BRAVING'].map((L,i)=>tile($('ck8'),136+i*86,270,70,L));