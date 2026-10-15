const pers=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const wall=(g,x0,y0,cols,rows,bw,bh)=>{const a=[];for(let r=0;r<rows;r++)for(let c=0;c<cols+(r%2);c++){let x=x0+c*bw-(r%2?bw/2:0),w=bw;if(x<x0){w-=x0-x;x=x0}if(x+w>x0+cols*bw)w=x0+cols*bw-x;a.push([mk('rect',{x:x,y:y0+r*bh,width:w,height:bh,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g),r])}return a};
const bulb=(g,x,y,f)=>{const b=mk('g',{},g);mk('circle',{cx:x,cy:y,r:26,fill:f},b);mk('rect',{x:x-11,y:y+24,width:22,height:14,rx:3,fill:'var(--ink)'},b);return b};
const sq=(x,y)=>'M'+x+' '+y+'q10-12 20 0t20 0t20 0t20 0';
const I0=[[1120,300],[1120,460],[1300,190]].map(q=>bulb($('ideas0'),q[0],q[1],'var(--gain)'));
pers($('wr1'),330,500,34,'ink');
const B1=wall($('wall1'),1000,300,4,10,110,40);
// fear figure stands clear of the wall (wall ends at x=940; body starts at x=980)
pers($('fig2i'),1034,470,36,'loss');
const W2=wall($('wall2'),820,280,2,10,60,44);
const B2=[[200,360],[330,360],[460,360],[200,520],[330,520],[460,520]].map((q,i)=>bulb($('bulbs2'),q[0],q[1],i%4==0?'var(--gain)':'var(--muted)'));
pers($('fr3'),320,540,36,'ink');pers($('fr3'),620,540,36,'ink');
const BB3=[[170,250],[480,290],[170,370],[480,410]].map(q=>{const g=mk('g',{},$('bub3'));mk('rect',{x:q[0],y:q[1],width:220,height:70,rx:24,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:sq(q[0]+30,q[1]+38),fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},g);return g});
const G3=[];for(let i=0;i<24;i++)G3.push(mk('rect',{x:900+(i%6)*95,y:340+Math.floor(i/6)*80,width:70,height:44,rx:14,fill:[4,13,19].includes(i)?'var(--gain)':'var(--line)'},$('grid3')));
pers($('per4'),220,420,36,'ink');
const F4=[];for(let i=0;i<7;i++){const g=mk('g',{},$('flow4'));const r=mk('rect',{x:0,y:0,width:120,height:64,rx:22,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:sq(20,34),fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},g);F4.push([g,r])}
const P5=[];for(let i=0;i<32;i++){const x=140+(i%8)*92,y=250+Math.floor(i/8)*110,g=mk('g',{},$('pages5'));const r=mk('rect',{x:x,y:y,width:70,height:88,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x+14)+' '+(y+28)+'h42M'+(x+14)+' '+(y+50)+'h30',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);P5.push([g,r])}
const BL5=[1080,1100,1120].map(x=>mk('circle',{cx:x,cy:300,r:16,fill:'var(--muted)',opacity:0},$('balls5')));
// scene 6: larger timeline (line y=626), figures r=51, feet at y=614
const S6=[];for(let i=0;i<5;i++)S6.push(mk('rect',{x:640+i*180,y:618,width:90,height:18,rx:6,fill:'var(--line)'},$('st6')));
pers($('you6i'),0,0,51,'gain');pers($('fear6s'),0,0,51,'loss');
const C7=[];for(let i=0;i<21;i++)C7.push(mk('rect',{x:150+(i%7)*80,y:310+Math.floor(i/7)*80,width:64,height:64,rx:10,stroke:'var(--line)','stroke-width':3},$('cells7')));
const D7=[];for(let i=0;i<5;i++){const x=820+i*130,y=540-i*60,g=mk('g',{},$('dr7'));const r=mk('rect',{x:x,y:y,width:110,height:160,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:'M'+(x+18)+' '+(y+36)+'h74M'+(x+18)+' '+(y+70)+'h60M'+(x+18)+' '+(y+104)+'h70',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round'},g);D7.push([g,r]);if(i<3)mk('path',{d:'M'+(x+30)+' '+(y+55)+'l50 50m0-50l-50 50',stroke:'var(--loss)','stroke-width':7,'stroke-linecap':'round'},$('xs7'))}