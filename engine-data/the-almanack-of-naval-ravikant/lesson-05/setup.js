const pp=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-1.5*r)+' '+(y+4.2*r)+'v'+(-1.3*r)+'a'+1.5*r+' '+1.5*r+' 0 0 1 '+3*r+' 0v'+1.3*r+'z',class:cls},g);return g};
const EX=s=>(Math.exp(4*s)-1)/(Math.exp(4)-1);
const CP=[];for(let i=0;i<=60;i++){const s=i/60;CP.push((160+680*s).toFixed(1)+','+(740-480*EX(s)).toFixed(1))}
const CB=[];for(let i=0;i<8;i++){const s=(i+1)/9,h=480*EX(s);CB.push(mk('rect',{x:(145+680*s).toFixed(1),y:(740-h).toFixed(1),width:30,height:h.toFixed(1),class:'gain','fill-opacity':.35},$('cbars')))}
const JF=['MONEY','RELATIONSHIPS','KNOWLEDGE'].map((s,i)=>{const x=950+i*180,g=mk('g',{},$('jars'));
  mk('rect',{x:x+30,y:372,width:80,height:28,rx:6,class:'ink'},g);
  mk('rect',{x:x,y:400,width:140,height:280,rx:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},g);
  const f=mk('rect',{x:x+10,y:670,width:120,height:0,rx:12,class:'gain'},g);
  const tx=mk('text',{x:x+70,y:724,'font-size':18,'text-anchor':'middle',class:'m'},g);tx.textContent=s;return [g,f]});
const PA=[260,620].map(x=>pp(mk('g',{fill:'var(--ink)'},$('pplA')),x,400,30,''));
const PB=[940,1380].map(x=>pp(mk('g',{fill:'var(--ink)'},$('pplB')),x,340,26,''));
mk('rect',{x:1080,y:300,width:160,height:150,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('cal'));
mk('rect',{x:1080,y:300,width:160,height:34,rx:8,class:'ink'},$('cal'));
const CAL=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++)CAL.push(mk('rect',{x:1098+c*34,y:348+r*32,width:24,height:24,rx:4,fill:'var(--line)'},$('cal')));
mk('path',{d:'M920 560H1400',stroke:'var(--line)','stroke-width':4},$('deals'));
const DL=[];for(let i=0;i<9;i++)DL.push(mk('circle',{cx:920+i*60,cy:560,r:14,fill:'var(--line)'},$('deals')));
const H=[],LKS=[],BR=[];for(let i=0;i<8;i++){H.push(40*Math.pow(1.3,i));
  BR.push(mk('rect',{x:170+i*110,y:720,width:60,height:0,rx:6,class:'gain'},$('sbars')));
  LKS.push(mk('ellipse',{cx:200+i*110,cy:320,rx:62,ry:28,fill:'none',stroke:'var(--ink)','stroke-width':8},$('chn')))}
[1220,1320,1420].forEach(x=>{pp($('strg'),x,470,22,'ink');const q=mk('text',{x:x,y:430,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('strg'));q.textContent='?'});
[220,340].forEach(x=>pp($('pc'),x,300,30,'ink'));
for(let i=0;i<4;i++){const y=498+i*60;mk('rect',{x:160,y:y,width:28,height:28,rx:4,fill:'none',stroke:'var(--ink)','stroke-width':4},$('chk4'));
  mk('rect',{x:210,y:y+8,width:260,height:12,rx:6,fill:'var(--line)'},$('chk4'));
  mk('path',{d:'M165 '+(y+14)+'l7 8 14-16',fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-linecap':'round'},$('chk4'))}
const zig=x=>{const q=((x-720)/90)%2;return 600+60*(1-2*Math.abs(q-1))};
let zp='';for(let x=720;x<=1440;x+=90)zp+=x+','+zig(x)+' ';$('zig').setAttribute('points',zp);
for(let i=0;i<8;i++)pp($('crowd5'),180+i*180,236,16,'ink');
const DR=[];for(let k=0;k<6;k++)DR.push(mk('circle',{r:14,class:k%3===0?'gain':'loss'},$('drops')));
const RW=[];for(let i=0;i<6;i++){const y=290+i*80,g=mk('g',{},$('rows'));const a=mk('circle',{cx:180,cy:y,r:24,class:'ink'},g);
  mk('rect',{x:224,y:y-9,width:280-(i*37)%100,height:18,rx:9,fill:'var(--line)'},g);
  const c=[0,2,3].includes(i)?mk('path',{d:'M560 '+y+'l12 12 22-26',fill:'none',stroke:'var(--gain)','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g):null;RW.push([g,a,c])}
const LV=[];for(let j=0;j<6;j++){const s=j%2?1:-1,cy=640-60*j;LV.push(mk('ellipse',{cx:1100+s*42,cy:cy,rx:42,ry:16,class:'gain',transform:'rotate('+(-25*s)+' '+(1100+s*42)+' '+cy+')'},$('leaves')))}
const YD=[];for(let i=0;i<10;i++)YD.push(mk('circle',{cx:800+i*66,cy:735,r:10,fill:'var(--line)'},$('ydots')));
pp($('reflm'),1360,350,26,'gain');