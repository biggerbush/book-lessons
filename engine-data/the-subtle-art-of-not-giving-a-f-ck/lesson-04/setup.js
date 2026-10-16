const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const T=(g,x,y,s,fs,cls,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls},g);if(a)e.setAttribute('text-anchor',a);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const LN=(g,d,cls,w)=>mk('path',{d:d,class:cls,'stroke-width':w,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},g);
const gtr=(g,x,y)=>{LN(g,'M'+(x+18)+' '+(y+112)+'L'+(x+66)+' '+(y+62),'s-gain',6);mk('circle',{cx:x+18,cy:y+118,r:20,class:'gain'},g)};
P($('tA'),1180,300,30,'gain');const cA=LN($('tA'),'M1160 245l20-20 20 20','s-gain',7);
P($('tB'),1400,300,30,'loss');const cB=LN($('tB'),'M1380 225l20 20 20-20','s-loss',7);
for(let i=0;i<11;i++)LN($('tRt'),'M1270 '+(215+i*30)+'h'+(i%2?12:22),'s-ink',4);
[260,420,580].forEach(x=>P($('band'),x,430,34,'ink'));P($('dave'),740,430,34,'ink');gtr($('dave'),740,430);
P($('mbandP'),440,400,34,'ink');gtr($('mbandP'),440,400);
const RC=[];for(let i=0;i<12;i++){const g=mk('g',{},$('recs')),y=718-i*28;mk('rect',{x:860,y:y,width:220,height:22,rx:4,class:'ink'},g);mk('rect',{x:950,y:y,width:40,height:22,class:'gain'},g);RC.push(g)}
const CR=[];for(let i=0;i<36;i++){const x=170+(i%12)*50,y=640+Math.floor(i/12)*50,g=mk('g',{},$('crowd2'));mk('circle',{cx:x,cy:y,r:14,class:'ink'},g);LN(g,'M'+(x+10)+' '+(y-6)+'l8-26','s-ink',5);CR.push(g)}
P($('sadP'),1120,420,40,'loss');
// ruler ticks start right of the label so nothing runs through it
for(let i=0;i<=37;i++)LN($('rTk'),'M'+(340+i*30)+' 276v'+(i%5?-14:-24),'s-ink',4);
for(let y=420;y<=660;y+=40)mk('path',{d:'M450 '+y+'h20',stroke:'var(--stage)','stroke-width':4},$('sTk'));
P($('fam'),1170,500,30,'gain');P($('fam'),1370,500,30,'gain');P($('fam'),1270,545,22,'gain');
P($('ctlP'),420,470,32,'ink');
const CHP=['PLEASURE','MATERIAL SUCCESS','ALWAYS BEING RIGHT','ALWAYS POSITIVE','POPULARITY'].map((s,i)=>{const y=230+i*84,g=mk('g',{},$('chips'));mk('rect',{x:800,y:y,width:440,height:58,rx:29,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);T(g,1020,y+37,s,22,'m','middle','fill:var(--ink)');return g});
const LV=['HONESTY','CURIOSITY','HUMILITY','CREATIVITY','PERSONAL GROWTH'].map((s,i)=>{const y=590-i*60,L=i%2===0,cx=L?1000:1100,g=mk('g',{},$('leaves'));mk('ellipse',{cx:cx,cy:y,rx:46,ry:18,class:'gain',transform:'rotate('+(L?25:-25)+' '+cx+' '+y+')'},g);T(g,L?940:1160,y+7,s,20,'m',L?'end':'start');return g});