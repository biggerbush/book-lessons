const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const chip=(g,x,y,w,top)=>{mk('ellipse',{cx:x,cy:y+16,rx:w,ry:w/4,fill:'var(--ink)'},g);mk('rect',{x:x-w,y:y,width:2*w,height:16,fill:'var(--ink)'},g);return mk('ellipse',{cx:x,cy:y,rx:w,ry:w/4,fill:top||'var(--stage)',stroke:'var(--ink)','stroke-width':4},g)};
const CH=[];for(let i=0;i<6;i++){const o=mk('g',{},$('chips')),n=mk('g',{},o);CH.push([o,n,chip(n,1300,740-i*30,90)])}
fig($('fnd'),260,400,40,'ink');
const SB=[],SQ=[];for(let r=0;r<4;r++)for(let c=0;c<3;c++){const x=480+c*170,y=330+r*70;
SB.push(mk('rect',{x:x+10,y:y+16,width:70+((r*2+c)%3)*30,height:14,rx:7,class:'ink'},$('cells')));
const q=mk('text',{x:x+70,y:y+46,'font-size':40,'text-anchor':'middle',class:'d',style:'fill:var(--loss)'},$('cells'));q.textContent='?';SQ.push(q)}
const TR=[];const node=(x,y,dx,L,px,py)=>{const ln=L?mk('path',{d:'M'+px+' '+py+'L'+x+' '+y,class:'s-line','stroke-width':4},$('tlines')):null;
const g=mk('g',{},$('tree'));mk('circle',{cx:x,cy:y,r:22-L*2,class:L?'gain':'ink'},g);TR.push([g,L,ln]);
if(L<3){node(x-dx,y+130,dx/2,L+1,x,y);node(x+dx,y+130,dx/2,L+1,x,y)}};node(440,310,140,0);
const PD=[];for(let i=0;i<6;i++){const g=mk('g',{},$('paid')),x=950+i*100;fig(g,x,460,18,'ink');mk('circle',{cx:x,cy:390,r:18,class:'loss'},g);
const s=mk('text',{x:x,y:398,'font-size':22,'text-anchor':'middle',class:'d',style:'fill:var(--stage)'},g);s.textContent='$';PD.push(g)}
fig($('lapu'),640,440,28,'ink');
const DY=[];for(let i=0;i<7;i++)DY.push(mk('rect',{x:900+i*80,y:460,width:60,height:60,rx:10,fill:'var(--line)'},$('days')));
// campus blocks shaded as the spread reaches them
const BX=[[128,292],[310,630],[650,812]],BYY=[[238,372],[390,610],[630,752]],BLK=[];
BX.forEach((bx,ci)=>BYY.forEach((by,ri)=>{const d=Math.abs(ci-1)+Math.abs(ri-1);
BLK.push([mk('rect',{x:bx[0],y:by[0],width:bx[1]-bx[0],height:by[1]-by[0],rx:8,class:'gain','fill-opacity':0},$('blks')),d/2])}));
const DOT=[];for(let i=0;i<60;i++){const rr=25*Math.sqrt(i+1),a=i*2.4,x=470+1.6*rr*Math.cos(a),y=495+1.05*rr*Math.sin(a);
if(x<150||x>790||y<258||y>735)continue;DOT.push([mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:10,class:'gain'},$('dots')),i/59])}
chip($('mchip'),260,440,90,'var(--loss)');
[610,660,710].forEach(x=>fig($('cust'),x,400,16,'gain'));
const RW=[];for(let i=0;i<4;i++){const y=330+i*100,g=mk('g',{},$('rows'));
const r=mk('rect',{x:950,y:y,width:500,height:70,rx:12,fill:'none',stroke:'var(--line)','stroke-width':4},g);
const n=mk('text',{x:975,y:y+48,'font-size':36,class:'d'},g);n.textContent=i+1;
mk('path',{d:'M1010 '+(y+35)+'h190',class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);
mk('rect',{x:1230,y:y+23,width:200*(1-.25*i),height:24,rx:12,class:'loss'},g);RW.push([g,r])}
for(let i=0;i<4;i++)chip($('echips'),1340,790-i*30,70,i===3?'var(--gain)':0);