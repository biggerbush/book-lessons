const I='var(--ink)',Gn='var(--gain)',Ls='var(--loss)',Mu='var(--muted)',St='var(--stage)';
const HP='M0 14C-22 0-22-16-11-18C-5-19-1-15 0-11C1-15 5-19 11-18C22-16 22 0 0 14Z';
const per=(g,x,y,r,f)=>{const a=f?{fill:f}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g);return g};
const tx=(g,x,y,s,o)=>{const e=mk('text',Object.assign({x:x,y:y,class:'m','font-size':22,'text-anchor':'middle'},o||{}),g);e.textContent=s;return e};
per($('ppl0'),1220,390,34,Gn);per($('ppl0'),1400,390,34,I);
[200,300,400,1200,1300,1400].forEach(x=>per($('gst'),x,470,22,I));
for(let i=0;i<5;i++){mk('rect',{x:590+i*86,y:520,width:66,height:40,rx:6,fill:St,stroke:I,'stroke-width':4},$('cont'));mk('rect',{x:584+i*86,y:510,width:78,height:12,rx:4,fill:Gn},$('cont'))}
per($('repP'),800,380,22,Mu);per($('hstP'),1080,420,26,Gn);
per($('manP'),360,380,50,Gn);
const TR=['KIND','SMART','HONEST'].map((s,i)=>{const g=mk('g',{},$('trs'));mk('rect',{x:500,y:300+i*80,width:200,height:56,rx:28,fill:St,stroke:Gn,'stroke-width':4},g);tx(g,600,337+i*80,s,{style:'fill:var(--ink)'});return g});
const P3=[per(mk('g',{},$('pr3')),300,360,46,I),per(mk('g',{},$('pr3')),700,360,46)];
[300,700].forEach(x=>[506,526,546].forEach(y=>mk('path',{d:'M'+(x-69)+' '+y+'h138',stroke:Gn,'stroke-width':7},$('stp'))));
const TG=['CLOTHES','HOMETOWN','HOBBIES','BACKGROUND'].map((s,i)=>tx($('tgs'),500,620+i*44,s,{style:'fill:var(--gain)'}));
per($('slr3'),1390,450,30,I);
per($('joe'),260,400,40,Gn);
const CU=[1060,1170,1280,1390];CU.forEach(x=>per($('cus'),x,430,24,I));
const HR=CU.map(x=>mk('path',{d:HP,fill:Gn,transform:'translate('+x+' 380) scale(1.3)'},$('hrt4')));
const EN=[];for(let i=0;i<12;i++){const g=mk('g',{},$('env')),x=420+i*80;mk('rect',{x:x,y:680,width:64,height:44,rx:4,fill:St,stroke:I,'stroke-width':4},g);mk('path',{d:'M'+x+' 680l32 22 32-22',fill:'none',stroke:I,'stroke-width':4,'stroke-linejoin':'round'},g);EN.push(g)}
[200,280,360].forEach(x=>per($('gA'),x,380,24));[1240,1320,1400].forEach(x=>per($('gB'),x,380,24));
per($('bad'),360,690,26,Ls);per($('good'),700,690,26,I);per($('good'),810,690,26,Gn);
per($('fcst'),600,380,30,Gn);per($('angP'),880,450,32,Ls);per($('celP'),1110,400,34,Gn);
const SR=['LOOKS','SIMILARITY','PRAISE','CONTACT','TEAMWORK','ASSOCIATION'].map((s,i)=>{const g=mk('g',{},$('src'));mk('rect',{x:120,y:230+i*56,width:280,height:46,rx:23,fill:St,stroke:I,'stroke-width':4},g);tx(g,260,260+i*56,s,{'font-size':20});return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(640+92*Math.cos(a)).toFixed(1)+' '+(400+92*Math.sin(a)).toFixed(1)+'L'+(640+100*Math.cos(a)).toFixed(1)+' '+(400+100*Math.sin(a)).toFixed(1),stroke:I,'stroke-width':4,'stroke-linecap':'round'},$('clk'))}
per($('slr'),0,690,24,Gn);