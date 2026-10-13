const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-1.5*r)+' '+(y+4.2*r)+'v'+(-1.3*r)+'a'+1.5*r+' '+1.5*r+' 0 0 1 '+3*r+' 0v'+1.3*r+'z',class:c},g)};
const tx=(g,x,y,s,fs,c,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:c,'text-anchor':'middle',style:st||''},g);e.textContent=s;return e};
const R0=$('road0'),L0=R0.getTotalLength();
fig($('you1m'),760,400,40,'ink');
const PA=$('pa3'),PB=$('pb3'),LA=PA.getTotalLength(),LB=PB.getTotalLength();
// coin stops 22px before the road end: centre y ~322, coin top ~292, 12px below the pill bottom (280)
const STOPA=LA-22,STOPB=LB-22;
const BK=[0,1,2,3,4].map(i=>mk('rect',{x:280,y:520-i*34,width:160,height:28,rx:4,fill:i%2?'var(--ink)':'var(--gain)'},$('bk4')));
for(let r=0;r<3;r++)for(let i=0;i<6;i++)fig($('aud4'),820+i*110,430+r*90,16,'ink');
const CO=[];for(let i=0;i<8;i++){const g=mk('g',{},$('coins4'));mk('circle',{cx:920+i*70,cy:800,r:26,class:'gain'},g);tx(g,920+i*70,811,'$',28,'d','fill:var(--on-gain)');CO.push(g)}
const FC=[],LN=[],BB=[];for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4,x=480+210*Math.cos(a),y=500+210*Math.sin(a);
  if(i%2){LN.push(mk('path',{d:'M480 500L'+x.toFixed(0)+' '+y.toFixed(0),class:'s-gain','stroke-width':5},$('ln5')));
    const b=mk('g',{},$('ring5'));mk('rect',{x:x+24,y:y-70,width:52,height:44,rx:10,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},b);tx(b,x+50,y-38,'$',28,'d','fill:var(--gain)');BB.push(b)}
  FC.push(mk('circle',{cx:x,cy:y,r:26,class:'ink'},$('ring5')))}
fig($('pp5'),1020,440,28,'ink');fig($('pp5'),1360,440,28,'gain');
for(let j=0;j<3;j++)for(let i=0;i<3;i++)mk('rect',{x:150+i*200,y:250+j*170,width:180,height:130,rx:8,fill:'var(--line)'},$('blk6'));
const FT=[];for(let i=0;i<14;i++)FT.push(mk('ellipse',{cx:210+i*38,cy:i%2?410:392,rx:10,ry:6,class:'ink'},$('ft6')));
const SG=[[430,340],[650,510],[250,680]].map(q=>{const g=mk('g',{},$('sg6'));mk('path',{d:'M'+q[0]+' '+q[1]+'v-50',class:'s-ink','stroke-width':4},g);mk('rect',{x:q[0],y:q[1]-50,width:34,height:22,class:'gain'},g);return g});
const EV=[],XM=[];for(let k=0;k<8;k++){const x=880+(k%4)*150,y=260+Math.floor(k/4)*130,g=mk('g',{},$('env6'));
  mk('rect',{x:x,y:y,width:130,height:90,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  mk('path',{d:'M'+x+' '+y+'l65 45 65-45',fill:'none',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);EV.push(g);
  XM.push([0,1,2,4,5,7].includes(k)?mk('path',{d:'M'+(x+40)+' '+(y+20)+'l50 50m0-50l-50 50',stroke:'var(--loss)','stroke-width':9,'stroke-linecap':'round'},$('env6')):null)}
fig($('cl7m'),0,-84,20,'gain');
const XS=[200,360,520,680],YS=[840,780,720,660];