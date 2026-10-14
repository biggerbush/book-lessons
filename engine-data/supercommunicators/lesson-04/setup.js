const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const HP='M0 50C-60 10-65-35-30-45C-15-50-3-38 0-28C3-38 15-50 30-45C65-35 60 10 0 50Z';
const hrt=(g,x,y,s,cls)=>mk('path',{d:HP,class:cls,transform:'translate('+x+' '+y+') scale('+s+')'},g);
const tx=(g,x,y,s,str,cls,st)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:cls,'text-anchor':'middle'},g);if(st)e.setAttribute('style',st);e.textContent=str;return e};
fig($('tp'),1180,360,32,'ink');fig($('tp'),1420,360,32,'ink');
fig($('pA'),340,420,36,'ink');fig($('pB'),750,420,36,'ink');
const CP=['VALUES','BELIEFS','EXPERIENCES'].map((s,i)=>{const g=mk('g',{},$('chips2'));mk('rect',{x:120+i*330,y:220,width:300,height:64,rx:32,class:'gain'},g);tx(g,270+i*330,262,24,s,'m','fill:var(--on-gain)');return g});
const H2=hrt($('h2'),1170,690,1,'gain');
fig($('ar3'),240,300,36,'ink');
const PR=[];for(let i=0;i<3;i++){const y=260+i*170,g=mk('g',{},$('pr3'));fig(g,470,y,22,'ink');fig(g,610,y,22,'ink');mk('rect',{x:525,y:y+36,width:30,height:40,rx:4,class:'gain'},g);PR.push(g)}
const RG=[];for(let i=0;i<6;i++){const y=740-i*96;RG.push(mk('path',{d:'M960 '+y+'H1060',stroke:i>3?'var(--gain)':'var(--ink)','stroke-width':7,'stroke-linecap':'round'},$('rg3')))}
fig($('cpA'),180,300,24,'ink');fig($('cpA'),270,300,24,'ink');fig($('cpB'),180,500,24,'gain');fig($('cpB'),270,500,24,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1300+88*c).toFixed(1)+' '+(420+88*s).toFixed(1)+'L'+(1300+100*c).toFixed(1)+' '+(420+100*s).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ck4'))}
// scene 5: an evenly spaced column of hearts (fixed 52px step, each ~33px tall at scale .35)
const FLY=[400,452,504,556];
const FL=[];for(let i=0;i<4;i++)FL.push(hrt($('fl5'),460,FLY[i],.35,'gain'));
fig($('pp5'),820,400,36,'ink');fig($('pp5'),1300,400,36,'gain');
fig($('cv6'),290,470,34,'ink');fig($('cv6'),590,470,34,'ink');hrt($('hh6'),290,360,.6,'gain');hrt($('hh6'),590,360,.6,'gain');
fig($('iv6'),1000,470,34,'ink');fig($('iv6'),1320,470,34,'ink');
const QS=[0,1,2].map(()=>tx($('qs6'),1060,400,44,'?','d','fill:var(--loss)'));
const VS=[];[[140,90,200,120,160],[110,180,90,220]].forEach((row,r)=>{let x=160;row.forEach((w,i)=>{VS.push([mk('rect',{x:x,y:630+r*60-7,width:w,height:14,rx:7,fill:'var(--line)'},$('ln7')),(r===0&&i===2)||(r===1&&i===1)]);x+=w+20})});