const pp=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},e);return e};
const wdg=(cx,cy,r,a)=>{if(a<=0)return 'M0 0';a=Math.min(a,359.9)*Math.PI/180;return 'M'+cx+' '+cy+'L'+cx+' '+(cy-r)+'A'+r+' '+r+' 0 '+(a>Math.PI?1:0)+' 1 '+(cx+r*Math.sin(a)).toFixed(1)+' '+(cy-r*Math.cos(a)).toFixed(1)+'Z'};
const tx=(g,a,s)=>{const e=mk('text',a,g);e.textContent=s;return e};

pp($('kidP'),310,400,34,'gain');pp($('deskP'),780,400,28,'ink');pp($('chP'),1140,450,26,'gain');
[320,470,620].forEach((y,i)=>{mk('path',{d:'M1185 510L1398 '+y,fill:'none',stroke:i?'var(--muted)':'var(--gain)','stroke-width':i?4:6,'stroke-dasharray':i?'8 8':'none','stroke-linecap':'round'},$('chP'));mk('circle',{cx:1420,cy:y,r:22,class:'ink'},$('chP'))});

for(let r=0;r<5;r++)for(let c=0;c<3;c++)mk('rect',{x:175+c*70,y:360+r*65,width:50,height:40,fill:(r+c)%2?'var(--gain)':'var(--line)'},$('win'));
for(let i=0;i<24;i++){const a=i*Math.PI/12,l=i%6?150:138;mk('line',{x1:760+l*Math.sin(a),y1:500-l*Math.cos(a),x2:760+164*Math.sin(a),y2:500-164*Math.cos(a),stroke:'var(--ink)','stroke-width':i%6?3:6},$('ticks'))}

const BU=[];for(let i=0;i<5;i++){const x=170+i*120;BU.push(mk('circle',{cx:x,cy:320,r:36},$('bulbs')));mk('rect',{x:x-16,y:360,width:32,height:22,class:'ink'},$('bulbs'))}
pp($('pres'),500,500,22,'gain');for(let i=0;i<6;i++)pp($('aud'),180+i*90,680,16,'ink');

const TN=[['Task','WHAT YOU WORK ON'],['Time','WHEN YOU DO IT'],['Technique','HOW YOU DO IT'],['Team','WHO YOU DO IT WITH']];
const FR=TN.map((n,i)=>{const g=$('t'+i),x=120+i*350,r=mk('rect',{x:x,y:230,width:310,height:410,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);g.insertBefore(r,g.firstChild);
  tx(g,{x:x+30,y:530,'font-size':46,class:'d'},n[0]);tx(g,{x:x+30,y:580,'font-size':20,class:'m'},n[1]);return r});
const SEG=TN.map((n,i)=>mk('rect',{x:120+i*350,y:680,width:310,height:20,rx:10},$('meterG')));

for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('rect',{x:1360+c*25,y:300+r*25,width:25,height:25,fill:(r+c)%2?'var(--ink)':'var(--stage)',stroke:'var(--ink)','stroke-width':1},$('chk'));
const WK=[0,1,2,3].map(i=>{const g=mk('g',{},$('walk'));pp(g,0,600,16,i%2?'ink':'gain');return g});

pp($('mgr'),250,360,30,'ink');pp($('mgr'),590,420,22,'loss');pp($('own'),1000,400,30,'gain');
let sp='';for(let i=0;i<10;i++){const a=i*Math.PI/5,r=i%2?15:36;sp+=(i?'L':'M')+(1000+r*Math.sin(a)).toFixed(1)+' '+(310-r*Math.cos(a)).toFixed(1)}$('star').setAttribute('d',sp+'Z');

['MON','TUE','WED','THU','FRI'].forEach((d,i)=>{tx($('cols'),{x:180+i*120,y:280,'font-size':20,class:'m','text-anchor':'middle'},d);if(i)mk('path',{d:'M'+(120+i*120)+' 300V680',stroke:'var(--line)','stroke-width':3},$('cols'))});
const SB=[[160,520,'ink'],[120,480,'gain'],[80,440,'ink']].map(b=>mk('rect',{x:1175-b[0]/2,y:b[1],width:b[0],height:40,rx:6,class:b[2]},$('stack')));
pp($('shP'),920,480,26,'gain');pp($('shP'),1430,480,26,'ink');

const TL=['TASK','TIME','TECHNIQUE','TEAM'].map((s,i)=>{const g=mk('g',{},$('tiles'));const r=mk('rect',{x:1260,y:240+i*90,width:210,height:70,rx:14,'stroke-width':4},g);const e=tx(g,{x:1365,y:282+i*90,'font-size':20,'text-anchor':'middle',style:'font-family:var(--mono);letter-spacing:.04em'},s);return [r,e]});