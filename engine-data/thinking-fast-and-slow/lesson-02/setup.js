const P=(g,x,y,r,a)=>{a=a||{};mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
P($('cardp'),1130,262,22,{class:'ink'});
const TL=['intelligent','strong','?','?'].map((w,i)=>{const x=120+i*340,g=mk('g',{},$('tiles'));
  const r=mk('rect',{x:x,y:240,width:300,height:110,rx:16,fill:'var(--stage)',stroke:i<2?'var(--ink)':'var(--muted)','stroke-width':5,'stroke-dasharray':i<2?'none':'12 10'},g);
  const tx=mk('text',{x:x+150,y:310,'font-size':40,'text-anchor':'middle',class:'d5'},g);tx.textContent=w;return [g,r,tx]});
P($('leadp'),330,470,44);
const SCR=[];for(let i=0;i<6;i++)SCR.push(mk('rect',{width:56,height:36,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('scraps')));
const SL=[240,200,240,140].map((w,i)=>mk('path',{d:'M1080 '+(320+i*42)+'h'+w,stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},$('slines')));
const PZ=[];for(let i=0;i<8;i++){const on=[0,1,5].includes(i);const e=mk('rect',{x:120+(i%4)*110,y:590+(i>>2)*110,width:100,height:100,rx:10,fill:on?'var(--ink)':'none',stroke:on?'none':'var(--muted)','stroke-width':4,'stroke-dasharray':'10 8'},$('puz'));if(on)PZ.push(e)}
[210,390,1130,1310].forEach(x=>{mk('rect',{x:x,y:620,width:80,height:110,rx:8,fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'10 8'},$('ditems'));const q=mk('text',{x:x+40,y:688,'font-size':36,'text-anchor':'middle',class:'m'},$('ditems'));q.textContent='?'});
const F1=x=>420+18*Math.sin((x-120)/200),F2=x=>720-44*Math.abs(Math.sin((x-120)/80));
const pth=f=>{let d='';for(let x=120;x<=1380;x+=10)d+=(x==120?'M':'L')+x+' '+f(x).toFixed(1);return d};
$('road1').setAttribute('d',pth(F1));$('road2').setAttribute('d',pth(F2));
[400,760,1120].forEach(x=>mk('circle',{cx:x,cy:F1(x),r:14,class:'gain'},$('fdots')));
for(let i=0;i<9;i++){const x=200+i*130;mk('circle',{cx:x,cy:F2(x),r:12,class:i%2?'loss':'ink'},$('mdots'))}
P($('lis1'),260,420,30,{class:'gain'});P($('lis2'),980,420,30,{class:'gain'});
P($('l1'),520,420,30,{class:'ink'});P($('l2'),1240,420,30,{class:'ink'});P($('l2'),1380,420,30,{class:'ink'});
P($('ghostp'),660,420,30,{fill:'none',stroke:'var(--muted)','stroke-width':4,'stroke-dasharray':'8 6'});
let oc='';for(let k=0;k<8;k++){const a=Math.PI/8+k*Math.PI/4;oc+=(980+110*Math.cos(a)).toFixed(1)+','+(400+110*Math.sin(a)).toFixed(1)+' '}$('oct').setAttribute('points',oc);
const CD=['ONE HEADLINE','ONE REVIEW','FIRST IMPRESSION'].map((s,i)=>{const x=120+i*300,g=mk('g',{},$('cards'));
  mk('rect',{x:x,y:640,width:260,height:150,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M'+(x+24)+' 680h212M'+(x+24)+' 712h150',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);
  const tx=mk('text',{x:x+24,y:766,'font-size':20,class:'m'},g);tx.textContent=s;return g});
for(let i=0;i<6;i++)mk('circle',{cx:180+i*88,cy:220,r:10,class:'ink'},$('rings'));