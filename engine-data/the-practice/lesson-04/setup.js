const P=(g,x,y,r,a)=>{const e=mk('g',{},g);mk('circle',Object.assign({cx:x,cy:y,r:r},a),e);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),e);return e};
const G={class:'gain'},I={class:'ink'},L={class:'loss'};
[1020,1090,1160,1320,1390,1460].forEach(x=>mk('path',{d:'M'+(x-18)+' 400v70M'+(x-18)+' 440h36v30',class:'s-muted',fill:'none','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},$('chairs')));
P($('spotP'),1240,372,18,G);
const B=[];for(let i=0;i<8;i++)B.push(mk('circle',{cx:360,cy:440,r:90,fill:'var(--muted)','fill-opacity':.22},$('blur')));
for(let i=0;i<5;i++)mk('path',{d:'M560 440L750 '+(300+i*80),class:'s-line','stroke-width':3,'stroke-dasharray':'6 8'},$('rays'));
// crowd: 4 well-spaced rows
const CR=[];for(let j=0;j<4;j++)for(let i=0;i<9;i++)CR.push(P($('crowd'),790+i*84,280+j*100,13,I));
for(let i=0;i<48;i++){const c=i%8,r=Math.floor(i/8);mk('circle',{cx:920+c*72+(r*37+c*23)%30-15,cy:270+r*68+(c*29+r*13)%24-12,r:9,fill:'var(--muted)'},$('mkt'))}
P($('sk'),1170,370,56,{class:'s-ink',fill:'var(--stage)','stroke-width':6});
// everyone: grey dots, with a clear vertical channel for the label's leader line
for(let i=0;i<70;i++){const a=i*2.4,rr=140+(i*37%95),x=420+rr*Math.cos(a),y=500+rr*Math.sin(a);if(Math.abs(x-420)<24&&y<440)continue;mk('circle',{cx:x.toFixed(0),cy:y.toFixed(0),r:7,fill:'var(--muted)','fill-opacity':.6},$('evd'))}
for(let i=0;i<5;i++){const a=i*1.26;mk('circle',{cx:420+34*Math.cos(a),cy:500+34*Math.sin(a),r:11,class:'gain'},$('tiny'))}
const SP=[];for(let i=0;i<10;i++){const a=(i/9)*Math.PI*1.2-.1*Math.PI;SP.push(mk('circle',{cx:420+108*Math.cos(a),cy:500+108*Math.sin(a),r:11},$('spr')))}
const FA=[880,1000,1120].map(x=>{P($('fewA'),x+30,500,16,G);return mk('rect',{x:x,width:60,rx:6,class:'gain'},$('fewA'))});
const MB=[];for(let i=0;i<12;i++){const x=890+i*50;P($('manyB'),x,690,12,I);MB.push(mk('rect',{x:x-5,width:10,rx:5,class:'ink'},$('manyB')))}
mk('path',{d:'M870 664H1460',class:'s-line','stroke-width':2},$('manyB'));
P($('bef'),300,330,50,L);P($('aft'),1300,330,50,G);
P($('sw'),260,330,40,I);P($('par'),1250,330,40,I);mk('circle',{cx:1250,cy:440,r:22,class:'gain'},$('par'));
const NT=[];for(let i=0;i<4;i++){const g=mk('g',{},$('notes'));mk('circle',{cx:0,cy:0,r:11,class:'gain'},g);mk('path',{d:'M10 0v-36l14 6',class:'s-gain',fill:'none','stroke-width':5,'stroke-linecap':'round'},g);NT.push(g)}
const SL=[['TEMPO','Slow',.2],['WORDS','Soft and simple',.35],['LENGTH','Short',.25]].map((d,i)=>{const y=640+i*70,g=mk('g',{},$('sl'));
 mk('text',{x:120,y:y+8,'font-size':22,class:'m'},g).textContent=d[0];mk('path',{d:'M320 '+y+'H980',class:'s-line','stroke-width':6,'stroke-linecap':'round'},g);
 const k=mk('circle',{cy:y,r:16,class:'gain'},g),v=mk('text',{x:1020,y:y+11,'font-size':32,class:'d5'},$('sl'));v.textContent=d[1];return [g,k,v,d[2]]});
P($('crit'),1120,430,40,L);
for(let i=0;i<8;i++){const a=i*Math.PI/4+.4;mk('circle',{cx:480+150*Math.cos(a),cy:500+150*Math.sin(a),r:20,class:'gain'},$('audH'))}
[0,1,2,3].forEach(i=>{const a=i*Math.PI/2;mk('path',{d:'M'+(1140+128*Math.cos(a))+' '+(460+128*Math.sin(a))+'L'+(1140+146*Math.cos(a))+' '+(460+146*Math.sin(a)),class:'s-ink','stroke-width':5},$('comp'))});
for(let i=0;i<6;i++)mk('circle',{cx:1120,cy:290+i*58,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('nb'));
const NL=[0,1,2,3].map(i=>mk('path',{d:'M1170 '+(330+i*70)+'H1400',stroke:i?'var(--line)':'var(--gain)','stroke-width':i?8:10,'stroke-linecap':'round'},$('nbl')));
const strike=(id,x1,len,k)=>$(id).setAttribute('x2',(x1+len*k).toFixed(1));