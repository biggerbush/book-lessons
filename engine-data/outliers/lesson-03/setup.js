const vFig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const vTx=(g,x,y,s,fs,cls,anc)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':anc||'start'},g);e.textContent=s;return e};
const vFmt=n=>Math.round(n).toLocaleString('en-US');
const vGX=[860,1110,1360],vGL=['SOLOISTS','GOOD PLAYERS','TEACHERS'];
vGX.forEach((c,i)=>{mk('rect',{x:c-110,y:290,width:220,height:210,rx:16,fill:'var(--stage)',stroke:i?'var(--line)':'var(--gain)','stroke-width':4},$('grp'));vTx($('grp'),c,478,vGL[i],20,'m','middle')});
const vStu=[];for(let i=0;i<9;i++){const g=mk('g',{},$('stu'));vStu.push([g,vFig(g,0,0,14,'ink'),150+i*44,640,vGX[Math.floor(i/3)]-60+60*(i%3),370])}
const vBV=[[480,'10,000','FUTURE STARS','gain'],[384,'8,000','GOOD PLAYERS','ink'],[200,'4,000+','FUTURE TEACHERS','loss']];
const vBars=vBV.map((b,i)=>{const x=700+i*260,g=mk('g',{},$('bars'));const r=mk('rect',{x:x,y:760,width:180,height:0,class:b[3]},g);const v=vTx(g,x+90,740-b[0],b[1],40,'d','middle');vTx(g,x+90,800,b[2],20,'m','middle');return [g,r,v,b[0]]});
const vSteps=[];for(let k=0;k<6;k++){const g=mk('g',{},$('stairs')),x=700+k*125,y=830-(k+1)*36;mk('rect',{x:x,y:y,width:125,height:(k+1)*36,fill:'var(--line)'},g);mk('path',{d:'M'+x+' '+y+'h125',stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round'},g);vSteps.push(g)}
const vClm=mk('g',{},$('stairs'));vFig(vClm,0,0,16,'gain');
const vBand=[230,350,470,590].map(x=>{const g=mk('g',{},$('band'));vFig(g,x,460,22,'ink');return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(920+86*s).toFixed(1)+' '+(380-86*c).toFixed(1)+'L'+(920+98*s).toFixed(1)+' '+(380-98*c).toFixed(1),stroke:'var(--ink)','stroke-width':4},$('ticks'))}
const vDays=[];for(let i=0;i<7;i++)vDays.push(mk('rect',{x:1100+i*50,y:340,width:40,height:40,rx:8,stroke:'var(--ink)','stroke-width':4},$('week')));
const vCW=[220,290,180,260,280,140,240],vCode=vCW.map((w,i)=>mk('rect',{x:776+(i%3?30:0),y:316+i*32,width:0,height:12,rx:6,fill:i%2?'var(--stage)':'var(--gain)'},$('code')));
const vSolo=mk('g',{},$('soloW'));vFig(vSolo,0,0,26,'ink');
const vTal=[];for(let r=0;r<5;r++)for(let c=0;c<5;c++){const x=150+c*76,y=280+r*72;for(let i=0;i<5;i++)vTal.push(mk('path',{d:i<4?'M'+(x+i*12)+' '+y+'v50':'M'+(x-6)+' '+(y+42)+'L'+(x+46)+' '+(y+8),stroke:i<4?'var(--ink)':'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('tal')))}
const vCells=[];for(let i=0;i<35;i++)vCells.push(mk('rect',{x:632+(i%7)*48,y:336+Math.floor(i/7)*56,width:44,height:52,rx:6,stroke:'var(--line)','stroke-width':3},$('cal')));