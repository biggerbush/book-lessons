const person=(par,x,y,r,c)=>{const g=mk('g',{fill:'var(--'+c+')'},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const DK=[];for(let i=0;i<9;i++){const x=1120+(i%3)*140,y=260+Math.floor(i/3)*130;DK.push(person($('desks'),x,y,18,'ink'));mk('rect',{x:x-58,y:y+58,width:116,height:18,rx:4,class:'ink'},$('desks'))}
const ST=[];for(let i=0;i<15;i++)ST.push(person($('staff'),920+(i%5)*120,280+Math.floor(i/5)*130,18,'ink'));const LV=[1,3,6,8,10,13];
person($('refl'),380,360,40,'ink');
[1020,1150,1280].forEach(x=>person($('hurt'),x,520,22,'ink'));
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1300+58*c).toFixed(1)+' '+(330+58*s).toFixed(1)+'L'+(1300+74*c).toFixed(1)+' '+(330+74*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('rays'))}
const CAL=[];for(let i=0;i<28;i++)CAL.push(mk('rect',{x:125+(i%7)*70,y:305+Math.floor(i/7)*70,width:60,height:60,rx:8,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},$('cal')));
const DR=[0,1,2].map(i=>mk('circle',{cx:866+i*12,cy:600,r:7,class:'loss'},$('drops')));
const WR=[1180,1290,1400].map(x=>person($('worried'),x,540,22,'ink'));
person($('lead'),1290,320,26,'gain');for(let i=0;i<6;i++)person($('aud'),1130+i*62,620,14,'ink');
person($('pl'),300,420,30,'gain');person($('pl'),580,420,30,'ink');person($('pr'),980,420,30,'muted');person($('pr'),1360,420,30,'ink');
const DT=[410,440,470].map(x=>mk('circle',{cx:x,cy:330,r:6,class:'gain'},$('dots')));
const TK=['PREPARE MANAGERS','EXPLAIN CLEARLY','KNOW THE SUPPORT OFFERED'].map((s,i)=>{const x=120+i*440,g=mk('g',{},$('chk'));mk('rect',{x:x,y:690,width:40,height:40,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x+8)+' 710l10 10 16-20',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},g);const tx=mk('text',{x:x+60,y:719,'font-size':22,class:'m'},g);tx.textContent=s;return g});
const LDR=person($('ldr'),0,420,32,'gain');
[1180,1340].forEach(x=>person($('others'),x,420,32,'ink'));person($('lvr'),1000,420,32,'ink');
const SV=[220,310,400].map(x=>{const g=mk('g',{},$('surv'));person(g,x,470,20,'ink');const e=mk('g',{},g);mk('ellipse',{cx:x,cy:400,rx:26,ry:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},e);const pu=mk('circle',{cx:x,cy:400,r:7,class:'ink'},e);return [g,e,pu,x]});