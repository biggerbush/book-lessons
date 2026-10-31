const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,fill:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:c},g)];
const tx=(g,x,y,s,fs,o)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m'},o||{}),g);e.textContent=s;return e};
const I='var(--ink)',G='var(--gain)',L='var(--loss)';
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('line',{x1:1330+108*s,y1:400-108*c,x2:1330+122*s,y2:400-122*c,stroke:I,'stroke-width':5,'stroke-linecap':'round'},$('ticks'))}
fig($('copf'),280,400,40,I);
for(let i=0;i<8;i++){const a=i*Math.PI/4,s=Math.sin(a),c=Math.cos(a);mk('line',{x1:800+62*c,y1:480+62*s,x2:800+82*c,y2:480+82*s,stroke:G,'stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const cells=[];for(let i=0;i<36;i++)cells.push(mk('rect',{x:1130+(i%6)*52,y:330+Math.floor(i/6)*50,width:40,height:38,rx:6,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cells')));
const IB=[],SB=[];['I80S180I60S240I100S160I70S150','S120I90S200I70S220I110S230','I60S210I120S150I60S260I80S100'].forEach((s,r)=>{let x=420;const y=300+r*130;s.match(/[IS]\d+/g).forEach(q=>{const w=+q.slice(1);if(q[0]=='I')IB.push([mk('rect',{x:x+3,y:y-30,width:w-6,height:70,rx:8,fill:G},$('rhy')),r]);else SB.push([mk('rect',{x:x+3,y:y+26,width:w-6,height:14,rx:7,fill:'var(--muted)','fill-opacity':.5},$('rhy')),r]);x+=w})});
const wk=fig($('wk'),300,420,34,I);
const papers=[];for(let i=0;i<10;i++)papers.push(mk('rect',{x:1170+(i%3)*6,y:630-i*24,width:260,height:18,rx:4,fill:'var(--stage)',stroke:I,'stroke-width':3},$('pile')));
tx($('pile'),1300,680,'BUSY DAYS',20,{'text-anchor':'middle'});
fig($('mirf'),230,420,36,I);fig($('perf'),1190,500,22,G);
const notes=[0,1,2].map(i=>{const g=mk('g',{},$('notes')),c=i==1?G:I;mk('ellipse',{cx:720+i*70,cy:520,rx:15,ry:11,fill:c},g);mk('line',{x1:734+i*70,y1:520,x2:734+i*70,y2:450,stroke:c,'stroke-width':5,'stroke-linecap':'round'},g);return g});
const star=(x,y,r)=>{let d='';for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,q=k%2?r*.45:r;d+=(k?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}return d+'z'};
[1110,1190,1270].forEach(x=>mk('path',{d:star(x,236,22),fill:G},$('stars')));
const dots=[];for(let i=0;i<48;i++)dots.push(mk('circle',{cx:160+i*840/47,cy:630-240*i/47+((i*37)%11-5)*5,r:6,fill:I},$('dots')));
for(let k=0;k<=12;k++)mk('line',{x1:160+70*k,y1:662,x2:160+70*k,y2:678,stroke:I,'stroke-width':4},$('axis5'));
const cols=[];for(let i=0;i<5;i++){const g=mk('g',{},$('cols')),x=120+i*272;mk('rect',{x:x,y:230,width:262,height:400,rx:12,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);tx(g,x+131,266,'YEAR '+(i+1),22,{'text-anchor':'middle'});cols.push(g)}
const BR=[[.1,2.2],[1.6,3.7],[3.1,4.6]].map(([s,e],i)=>{const g=mk('g',{},$('bars')),x=120+s*272,y=300+i*100,w=(e-s)*272;mk('rect',{x:x,y:y,width:w,height:64,rx:12,fill:G},g);tx(g,x+20,y+40,'BIG PROJECT',20,{style:'fill:var(--on-gain)'});return [g,mk('rect',{x:x+w+6,y:y,width:0,height:64,rx:12,fill:G,'fill-opacity':.35,stroke:G,'stroke-width':3,'stroke-dasharray':'8 6'},g)]});
const cards=[];['MON','TUE','WED','THU','FRI'].forEach((d,i)=>{const x=120+i*128;tx($('week'),x+58,262,d,20,{'text-anchor':'middle'});for(let j=0;j<2;j++){const y=290+j*110,r=mk('rect',{x:x,y:y,width:116,height:90,rx:10,fill:'var(--stage)',stroke:L,'stroke-width':4},$('week'));mk('path',{d:'M'+(x+16)+' '+(y+50)+'h60M'+(x+16)+' '+(y+70)+'h40',stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('week'));const b=mk('g',{},$('week'));mk('circle',{cx:x+100,cy:y+16,r:16,fill:L},b);tx(b,x+100,y+24,'!',22,{'text-anchor':'middle',style:'fill:var(--stage)'});cards.push([r,b])}});
for(let k=0;k<11;k++)mk('line',{x1:880+58*k,y1:452,x2:880+58*k,y2:468,stroke:I,'stroke-width':3},$('dlt'));
const tag=mk('g',{},$('dlt'));mk('line',{x1:0,y1:60,x2:0,y2:80,stroke:I,'stroke-width':4},tag);
const tagP=mk('path',{d:'M0 0h150v60H0l-20-30z',fill:L},tag),tagT=tx(tag,75,40,'DUE',22,{'text-anchor':'middle'});
const WY=x=>740+25*Math.sin(x/120);let wd='';for(let x=120;x<=1460;x+=20)wd+=(x>120?'L':'M')+x+' '+WY(x).toFixed(1);
mk('path',{d:wd,fill:'none',stroke:'var(--line)','stroke-width':10,'stroke-linecap':'round'},$('walk'));
const wl=mk('g',{},$('walk'));fig(wl,0,-74,14,G);mk('path',{d:'M-8 -16l-6 16M8 -16l6 16',stroke:G,'stroke-width':6,'stroke-linecap':'round'},wl);