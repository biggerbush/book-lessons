const P=(g,x,y,r,a)=>[mk('circle',Object.assign({cx:x,cy:y,r:r},a),g),mk('path',Object.assign({d:`M${x-r*1.5} ${y+r*4.2}v${-r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`},a),g)];
const G=par=>mk('g',{},par);
const wall=(g,x0,y0,cols,rows,w,h,sw)=>{const R=[];for(let r=0;r<rows;r++){const gr=G(g);R.push(gr);for(let c=0;c<=cols;c++){const bx=x0+c*w-(r%2?w/2:0),s=Math.max(bx,x0),e=Math.min(bx+w,x0+cols*w);if(e-s>1)mk('rect',{x:s,y:y0-(r+1)*h,width:e-s,height:h,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':sw},gr)}}return R};
const CP='M0 400V120L40 0L80 120V400M80 200L180 120L280 200M280 400V120L320 0L360 120V400M0 400H360M155 400v-70a25 25 0 0 1 50 0v70M210 260a30 30 0 1 0-60 0a30 30 0 1 0 60 0';
const cath=(id,x,y,s)=>{const g=mk('g',{transform:`translate(${x} ${y}) scale(${s})`},$(id));const B=wall(g,0,470,6,2,60,28,4);const pa=mk('path',{d:CP,fill:'none',stroke:'var(--gain)','stroke-width':8,'stroke-linejoin':'round','stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);return [pa,B]};
const dash=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const C0=cath('cath0',1100,300,1),C8=cath('cath8',1270,400,.5);
const tp=[[990,{fill:'var(--muted)'}],[1050,{class:'ink'}]].map(q=>P($('tpp'),q[0],660,20,q[1]));
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',{d:`M${(960+44*c).toFixed(1)} ${(270+44*s).toFixed(1)}L${(960+58*c).toFixed(1)} ${(270+58*s).toFixed(1)}`,stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('rays'))}
const W1=[300,600,900].map(x=>{const g=G($('bl'));P(g,x,480,32,{class:'ink'});return g});
P($('pb'),1300,470,32,{fill:'var(--muted)'});
const BW=wall($('bw'),200,760,10,4,80,40,4);
[340,800,1260].forEach((c,i)=>{const g=$('bb'+i);mk('rect',{x:c-190,y:210,width:380,height:120,rx:24,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);mk('path',{d:`M${c-18} 328l18 22 18-22`,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);P($('w2'),c,690,22,{class:'ink'})});
const RG=[];for(let i=0;i<8;i++){const a=i*Math.PI/4;RG.push(mk('circle',{cx:(1273+100*Math.cos(a)).toFixed(1),cy:(400+100*Math.sin(a)).toFixed(1),r:14,class:'gain'},$('ring')))}
P($('amyp'),230,420,36,{class:'ink'});
const DK=[620,960,1300].map((c,i)=>{const d=G($('desks')),b=G($('desks')),on=i==2;P(d,c,460,30,{class:'ink'});
  mk('rect',{x:c-140,y:560,width:280,height:26,rx:4,class:'ink'},d);mk('path',{d:`M${c-120} 586V700M${c+120} 586V700`,stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},d);
  mk('rect',{x:c-100,y:606,width:200,height:40,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},d);
  mk('text',{x:c,y:632,'font-size':18,'text-anchor':'middle',class:'m'},d).textContent='SAME JOB TITLE';
  mk('rect',{x:c-110,y:250,width:220,height:70,rx:35,fill:on?'var(--gain)':'var(--stage)',stroke:on?'var(--gain)':'var(--ink)','stroke-width':4},b);
  [[c-14,346,9],[c-24,384,6]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:on?'var(--gain)':'var(--ink)'},b));
  mk('text',{x:c,y:294,'font-size':24,'text-anchor':'middle',class:'m',style:on?'fill:var(--on-gain)':''},b).textContent=['JOB','CAREER','CALLING'][i];return [d,b]});
const PT=[];for(let i=0;i<10;i++)PT.push(mk('circle',{cx:240+i*54,cy:650-i*36+((i*37)%5-2)*18,r:10,class:'ink',opacity:0},$('pts')));
P($('hp0'),1000,470,30,{class:'ink'});
const HL=[],HP=[[1340,310],[1380,460],[1340,600]].map(q=>{HL.push(mk('path',{d:`M1040 510L${q[0]-44} ${q[1]+50}`,stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('hl')));const g=G($('hp1'));P(g,q[0],q[1],24,{class:'gain'});return g});
const DR=[];for(let i=0;i<5;i++)DR.push(mk('path',{d:`M${960+i*22} 350v14`,stroke:'var(--loss)','stroke-width':4,'stroke-linecap':'round'},$('drops')));
const PL=[340,800,1260].map((c,k)=>{const H=[70,160,260][k],g=$('plants'),lv=[],st=mk('line',{x1:c,y1:630,x2:c,y2:630,stroke:'var(--ink)','stroke-width':7,'stroke-linecap':'round'},g);
  for(let j=0;j<=k;j++){const f=(j+1)/(k+2),y=630-H*f;[-1,1].forEach(s=>lv.push([mk('ellipse',{cx:c+s*24,cy:y,rx:24,ry:10,transform:`rotate(${-s*25} ${c+s*24} ${y})`,fill:k==2?'var(--gain)':'var(--ink)',opacity:0},g),f]))}
  return {st,H,lv,fl:k==2?mk('circle',{cx:c,cy:630-H,r:0,class:'gain'},g):null}});
[1110,1410].forEach(x=>P($('helped'),x,540,16,{class:'gain'}));