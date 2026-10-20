const P=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g);return g};
const DR=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const star=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?R*.45:R;d+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1)}return d+'Z'};
const INK='var(--ink)',GN='var(--gain)';
P($('tw'),1060,420,26,INK);mk('path',{d:'M1096 488L1180 448',stroke:INK,'stroke-width':8,'stroke-linecap':'round'},$('tw'));
const PT=[...$('paint').children];
const CR=[];for(let i=0;i<8;i++)for(let r=0;r<3;r++){const g=mk('g',{},$('crowd'));P(g,680+i*105,360+r*110,16,'var(--muted)');CR.push([g,i,r])}
P($('pat'),220,460,20,INK);P($('ant'),380,470,16,GN);
P($('cyou'),400,420,30,INK);P($('cpt'),1200,420,30,GN);
const STK=[...$('strokes').children];
P($('newb'),300,460,40,'var(--loss)');
const CP=['CREDIT','RESPECT','THE INTERESTING TASKS'].map((s,i)=>{const g=mk('g',{},$('chips'));mk('rect',{x:420,y:300+i*80,width:s.length*15+44,height:56,rx:28,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);const tx=mk('text',{x:442,y:337+i*80,'font-size':22,class:'m'},g);tx.textContent=s;return g});
P($('mentor'),1020,400,28,INK);
const ST=[0,1,2,3].map(i=>mk('rect',{x:1220+i*60,y:700-(i+1)*80,width:60,height:(i+1)*80,'stroke-width':4},$('steps')));
for(let i=0;i<5;i++){const a=i*2*Math.PI/5;mk('circle',{cx:640+50*Math.cos(a),cy:380+50*Math.sin(a),r:16,fill:'var(--line)'},$('reel'))}
P($('belp'),1000,520,26,GN);
[1260,1350,1440].forEach(x=>{P($('coaches'),x,420,24,INK);mk('path',{d:'M'+x+' 396Q'+((x+1000)/2)+' 300 1000 494',fill:'none',stroke:GN,'stroke-width':4,'stroke-dasharray':'8 8'},$('relied'))});
const NL=[],NN=[];for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2,x=(800+150*Math.cos(a)).toFixed(1),y=(500+150*Math.sin(a)).toFixed(1);NL.push(mk('path',{d:'M800 500L'+x+' '+y,stroke:GN,'stroke-width':5},$('net')));NN.push(mk('circle',{cx:x,cy:y,r:18,fill:INK},$('net')))}
mk('circle',{cx:800,cy:500,r:30,fill:GN},$('net'));
P($('fg'),240,400,30,GN);P($('fg'),420,400,30,INK);
const RD=$('road'),RL=RD.getTotalLength()||1500;
const FV=[.2,.35,.5,.65,.8].map(f=>{const q=RD.getPointAtLength(f*RL);return [f,mk('circle',{cx:q.x,cy:q.y,r:9,fill:'var(--muted)'},$('favs'))]});
$('rec').setAttribute('d',star(690,680,24));$('gstar').setAttribute('d',star(1440,236,34));
for(let i=0;i<7;i++){const a=Math.PI*(1+i/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1270+86*c).toFixed(1)+' '+(400+86*s).toFixed(1)+'L'+(1270+108*c).toFixed(1)+' '+(400+108*s).toFixed(1),stroke:GN,'stroke-width':6,'stroke-linecap':'round'},$('rays'))}
P($('qp'),1180,640,22,INK);P($('qp'),1340,630,26,GN);
const S0=i=>SC[i][0]/K;