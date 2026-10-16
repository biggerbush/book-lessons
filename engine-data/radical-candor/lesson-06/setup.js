const fig=(g,x,y,r)=>{mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g)};
const starPts=(cx,cy,R,r)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}return s};
let rg='';for(let y=300;y<=780;y+=80)rg+='M1260 '+y+'h120';mk('path',{d:rg,class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('rungs'));
const CL=[780,620,460,300].map(y=>{const o=mk('g',{},$('climbers')),i=mk('g',{fill:'var(--ink)'},o);fig(i,1320,y-67,16);return [o,i]});
fig($('rp'),400,399,30);
mk('polygon',{points:starPts(900,330,60,26),fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linejoin':'round'},$('nf'));
[800,870,940].forEach(x=>fig($('tch'),x,720,16));
$('sstar').setAttribute('points',starPts(780,405,45,20));
const TH=[];for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4;TH.push(mk('circle',{cx:1220+130*Math.cos(a),cy:450+130*Math.sin(a),r:24,class:i%2?'ink':'gain'},$('thd')))}
fig($('mvp'),300,360,30);
const PT=[[160,660],[420,470],[780,430],[1100,260],[1440,225]],EVL=['NEW BABY','FRESH PASSION','ILLNESS'];
const SG=[0,1,2,3].map(i=>mk('path',{d:'M'+PT[i]+'L'+PT[i+1],fill:'none',stroke:i%2?'var(--ink)':'var(--gain)','stroke-width':8,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('segs')));
const EV=[1,2,3].map((k,j)=>{const g=mk('g',{},$('evs')),x=PT[k][0],y=PT[k][1];mk('path',{d:'M'+x+' '+y+'V700',class:'s-muted','stroke-width':3,'stroke-dasharray':'6 8'},g);mk('circle',{cx:x,cy:y,r:16,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':5},g);const e=mk('text',{x:x,y:740,'font-size':20,'text-anchor':'middle',class:'m'},g);e.textContent=EVL[j];return g});
const along=x=>{for(let i=0;i<4;i++){const a=PT[i],b=PT[i+1];if(x<=b[0]||i===3)return a[1]+(b[1]-a[1])*cl((x-a[0])/(b[0]-a[0]))}};
const cb=mk('g',{fill:'var(--ink)'},$('cvp'));fig(cb,240,470,32);const cm=mk('g',{fill:'var(--muted)'},$('cvp'));fig(cm,580,470,32);
const BD=[540,580,620].map(x=>mk('circle',{cx:x,cy:345,r:9,class:'ink'},$('bdots')));
const TP=[];[0,1].forEach(c=>[420,560,700].forEach(y=>{const x=c?1305:955,o=mk('g',{},$('tpl')),i=mk('g',{fill:c?'var(--ink)':'var(--gain)'},o);fig(i,x,y,20);TP.push([o,i,1130-x])}));
fig($('fkp'),1050,674,30);