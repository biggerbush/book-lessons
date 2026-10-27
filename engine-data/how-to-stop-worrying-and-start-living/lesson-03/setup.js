const fig=(g,x,y,r,f)=>{mk('circle',{cx:x,cy:y,r:r,fill:f},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',fill:f},g)};
const dr=(el,k,L)=>{el.setAttribute('stroke-dasharray',L);el.setAttribute('stroke-dashoffset',(L*(1-k)).toFixed(1))};
fig($('hawkf'),330,360,40,'var(--ink)');
fig($('you2'),690,400,28,'var(--ink)');fig($('you2'),910,400,28,'var(--muted)');
fig($('galf'),520,440,36,'var(--ink)');
[1000,1130,1260].forEach(x=>fig($('offf'),x,440,36,'var(--loss)'));
fig($('jamf'),960,330,30,'var(--ink)');
for(let i=0;i<20;i++){const h=40+((i*37)%5)*20;mk('rect',{x:120+i*68,y:680-h,width:60,height:h,fill:'var(--line)','fill-opacity':.6},$('sky3'))}
let bd='';for(let i=0;i<70;i++){const x=1280+150*Math.sin(i*1.7)*Math.cos(i*.31),y=405+100*Math.sin(i*2.3+1);bd+=(i?'L':'M')+x.toFixed(0)+' '+y.toFixed(0)}
$('blur4').setAttribute('d',bd);
const QM=[0,1,2,3,4,5].map(i=>{const x=300+i*140,e=mk('text',{x:x,y:i%2?460:380,'font-size':64,class:'d','text-anchor':'middle',style:'fill:var(--loss)'},$('qm6'));e.textContent='?';return [e,x]});
for(let r=0;r<3;r++)for(let c=0;c<5;c++)mk('rect',{x:1150+c*56,y:320+r*60,width:40,height:40,rx:6,fill:'var(--line)'},$('days6'));
for(let i=0;i<9;i++)mk('circle',{cx:180+i*90,cy:220,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings7'));
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(1240+128*s).toFixed(1)+' '+(420-128*c).toFixed(1)+'L'+(1240+142*s).toFixed(1)+' '+(420-142*c).toFixed(1),stroke:'var(--ink)','stroke-width':i%3?3:6,'stroke-linecap':'round'},$('tick7'))}
const bz=s=>[(1-s)*(1-s)*880+2*(1-s)*s*1040+s*s*1200,(1-s)*(1-s)*790+2*(1-s)*s*720+s*s*780];
let L8=0;for(let i=1;i<=40;i++){const a=bz((i-1)/40),b=bz(i/40);L8+=Math.hypot(b[0]-a[0],b[1]-a[1])}
L8=Math.ceil(L8)+2;
const hand=(id,ang,len)=>{const a=ang*Math.PI/180;$(id).setAttribute('x2',(1240+len*Math.sin(a)).toFixed(1));$(id).setAttribute('y2',(420-len*Math.cos(a)).toFixed(1))};