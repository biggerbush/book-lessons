const fig=(g,x,y,r,cls)=>{const q=mk('g',{class:cls},g);mk('circle',{cx:x,cy:y,r:r},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},q);return q};
const tx=(g,x,y,s,txt,a)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:'m','text-anchor':a||'start'},g);e.textContent=txt;return e};
const rv=(id,u,a,d)=>rise(typeof id==='string'?$(id):id,p(u,a,a+(d||.5)));
fig($('pp'),420,480,40,'ink');const pR=fig($('pp'),1060,480,40,'loss');tx($('pp'),420,720,22,'YOU','middle');
fig($('tc'),1210,510,34,'ink');
const cards=[];for(let i=0;i<6;i++){const g=mk('g',{},$('cards'));mk('rect',{width:100,height:60,rx:10,class:'gain'},g);tx(g,50,37,18,'INFO','middle').style.fill='var(--on-gain)';cards.push(g)}
const dmP=fig($('dm'),1200,420,44,'ink');
fig($('kid'),260,420,40,'loss');fig($('vos'),1200,530,36,'gain');fig($('kid2'),800,560,40,'ink');
const G=[[740,400,46,10],[812,350,32,7]].map(([x,y,r,n])=>{const g=mk('g',{},$('gears'));let d='';for(let i=0;i<n*4;i++){const a=i*Math.PI/(n*2),R=i%4<2?r+10:r;d+=(i?'L':'M')+(x+R*Math.cos(a)).toFixed(1)+' '+(y+R*Math.sin(a)).toFixed(1)}mk('path',{d:d+'z',class:'ink'},g);mk('circle',{cx:x,cy:y,r:r*.35,fill:'var(--stage)'},g);return g});
for(let i=0;i<5;i++){const a=Math.PI+i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:1200+88*c,y1:390+88*s,x2:1200+112*c,y2:390+112*s,class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
const trio=['BOSS','CLIENT','LANDLORD'].map((s,i)=>{const x=300+i*400,g=mk('g',{},$('trio'));fig(g,x,270,28,'ink');tx(g,x,425,22,s,'middle');return g});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('line',{x1:800+98*c,y1:450+98*s,x2:800+110*c,y2:450+110*s,class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}