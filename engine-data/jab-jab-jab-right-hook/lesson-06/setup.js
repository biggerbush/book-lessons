const fig=(g,x,y,r,f)=>[mk('circle',{cx:x,cy:y,r:r,fill:f},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)];
const T=(g,x,y,s,fs,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m'},a||{}),g);e.textContent=s;return e};
const HP='M0 12C-20 0-20-14-10-16C-4-17 0-12 0-8C0-12 4-17 10-16C20-14 20 0 0 12Z';
const MID={'text-anchor':'middle'};

const FD=[];for(let i=0;i<5;i++)FD.push(mk('rect',{x:190,y:260,width:280,height:130,rx:12,fill:i===2?'var(--gain)':'var(--line)'},$('feed')));

for(let i=0;i<4;i++){const x=160+i*185,g=$('c2s');mk('rect',{x:x,y:640,width:160,height:140,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);mk('path',{d:'M'+(x+24)+' 690h112M'+(x+24)+' 730h80',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g);mk('circle',{cx:x+80,cy:640,r:8,fill:'var(--muted)'},g)}
const C2=[[160,260,220,280,'KITCHEN'],[420,250,220,300,'WEDDING'],[680,270,200,260,'OUTFIT']].map(c=>{const g=mk('g',{},$('cards2'));mk('rect',{x:c[0],y:c[1],width:c[2],height:c[3],rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,c[0]+c[2]/2,c[1]+c[3]+30,c[4],18,MID);mk('circle',{cx:c[0]+c[2]/2,cy:c[1],r:10,fill:'var(--gain)'},g);return g});
mk('path',{d:'M190 300h160v70H190zM270 300v70M180 430h180M190 430h160v80H190z',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},C2[0]);
[230,310].forEach(x=>mk('circle',{cx:x,cy:458,r:12,fill:'var(--ink)'},C2[0]));
mk('path',{d:'M510 290h40l8 70 62 170H440l62-170z',fill:'var(--gain)'},C2[1]);
mk('path',{d:'M512 290l-8-20M548 290l8-20',stroke:'var(--ink)','stroke-width':4,'stroke-linecap':'round'},C2[1]);
mk('path',{d:'M740 320l-50 30 20 40 25-12v120h110V378l25 12 20-40-50-30q-40 24-80 0z',fill:'var(--ink)'},C2[2]);

[1,.7,.45,.2].forEach((o,i)=>mk('circle',{cx:640+i*70,cy:610,r:22,fill:'var(--gain)','fill-opacity':o,stroke:'var(--ink)','stroke-width':3},$('flt4')));
const H4=[0,1,2,3].map(()=>mk('path',{d:HP,fill:'var(--gain)'},$('hearts4')));

const Q5='#relevant #specific', R5=[];
for(let i=0;i<6;i++){const g=mk('g',{},$('res5')),x=620+(i%3)*280,y=350+Math.floor(i/3)*130;mk('rect',{x:x,y:y,width:260,height:110,rx:10,fill:i===4?'var(--gain)':'var(--line)'},g);if(i===4)T(g,x+130,y+62,'YOUR PHOTO',20,{'text-anchor':'middle',style:'fill:var(--on-gain)'});R5.push(g)}
fig($('ppl5i'),1320,680,20,'var(--muted)');fig($('ppl5i'),1420,690,20,'var(--muted)');

const DT6=[0,1,2,3].map(i=>mk('circle',{cx:295+i*30,cy:565,r:8},$('dots6')));
const XF=[680,870,1060,1250,1440], FN=XF.map(x=>fig($('fans6'),x,400,24,'var(--ink)'));
for(let i=0;i<4;i++){const a=XF[i]+30,b=XF[i+1]-30;mk('path',{d:'M'+a+' 350Q'+(a+b)/2+' 270 '+b+' 350',fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('arcs6'));mk('path',{d:'M'+(b-16)+' 334l16 16 4-20',fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},$('arcs6'))}
const qb=(a,m,b,f)=>(1-f)*(1-f)*a+2*(1-f)*f*m+f*f*b;

const P7=[],CUP=[],EX7=[],CK=[],RL=[];
const RU=[['LINKS: YES','TONE: DREAMY'],['HASHTAGS: MANY','LINKS: NOT CLICKABLE'],['TONE: PLAYFUL','NO CORPORATE POLISH']];
const EXT=['DREAMY PIN · LINK','#TAG #TAG #TAG','PLAYFUL GIF · REBLOG'];
[160,640,1120].forEach((x,i)=>{const g=mk('g',{},$('ph7'));P7.push(g);
  mk('rect',{x:x,y:220,width:320,height:380,rx:28,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  mk('rect',{x:x+24,y:260,width:272,height:240,rx:10,fill:'var(--line)','fill-opacity':.5},g);
  const e=mk('g',{},g);EX7.push(e);
  const c=mk('g',{},g);mk('rect',{x:x+120,y:340,width:80,height:90,rx:10,fill:'var(--gain)'},c);mk('path',{d:'M'+(x+200)+' 362a22 22 0 0 1 0 44',fill:'none',stroke:'var(--gain)','stroke-width':10},c);CUP.push(c);
  T(e,x+160,550,EXT[i],20,{'text-anchor':'middle',style:'fill:var(--ink)'});
  if(i===0){[[60,290],[250,300],[70,470],[245,460]].forEach(q=>mk('circle',{cx:x+q[0],cy:q[1],r:7,fill:'var(--gain)'},e))}
  if(i===1){mk('rect',{x:x+90,y:300,width:140,height:160,fill:'none',stroke:'var(--ink)','stroke-width':4},e)}
  if(i===2){mk('path',{d:'M'+(x+80)+' 340q-20 45 0 90M'+(x+240)+' 340q20 45 0 90',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},e)}
  T(g,x+160,640,['PINTEREST','INSTAGRAM','TUMBLR'][i],24,{'text-anchor':'middle',style:'fill:var(--ink)'});
  const k=mk('g',{},g);CK.push(k);mk('circle',{cx:x+296,cy:232,r:22,fill:'var(--gain)'},k);mk('path',{d:'M'+(x+285)+' 232l8 8 14-16',fill:'none',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},k);
  const r=mk('g',{},$('rl7'));RL.push(r);RU[i].forEach((s,j)=>T(r,x+160,690+j*32,s,20,{'text-anchor':'middle',style:j===0?'fill:var(--gain)':''}));
});