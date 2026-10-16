const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const FC=i=>[['var(--gain)',1],['var(--loss)',1],['var(--ink)',1],['var(--gain)',.5],['var(--loss)',.5],['var(--muted)',1]][i%6];
fig($('eld'),420,420,46,'ink');
const SG=[];for(let i=0;i<10;i++)SG.push(mk('rect',{x:1004,y:718-i*48,width:172,height:40,rx:8,fill:i<8?'var(--line)':'none',stroke:i<8?'none':'var(--muted)','stroke-width':3,'stroke-dasharray':'8 6'},$('segs')));
// container fill shape that stays inside the walls (inner bottom 636, inner corner radius 36)
const cup=(x0,x1,y)=>{const r=36;if(y>=636)return 'M0 0';if(y>600)return 'M'+(x0+r)+' '+y.toFixed(1)+'H'+(x1-r)+'V636H'+(x0+r)+'Z';
  return 'M'+x0+' '+y.toFixed(1)+'H'+x1+'V600a'+r+' '+r+' 0 0 1 -'+r+' '+r+'H'+(x0+r)+'a'+r+' '+r+' 0 0 1 -'+r+' -'+r+'Z'};
const DS=['RICE','SOUP','VEGETABLES','FISH'].map((s,i)=>{const x=795+i*185,g=mk('g',{},$('dishes'));
  mk('circle',{cx:x,cy:450,r:78,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
  if(i==0)mk('circle',{cx:x,cy:450,r:50,fill:'var(--ice)',stroke:'var(--line)','stroke-width':3},g);
  if(i==1)mk('circle',{cx:x,cy:450,r:52,class:'loss','fill-opacity':.35},g);
  if(i==2)[-30,0,30].forEach(d=>mk('ellipse',{cx:x+d,cy:450,rx:16,ry:36,class:'gain',transform:'rotate('+d+' '+(x+d)+' 450)'},g));
  if(i==3){mk('ellipse',{cx:x-8,cy:450,rx:44,ry:20,class:'ink'},g);mk('path',{d:'M'+(x+30)+' 450l26-18v36z',class:'ink'},g)}
  mk('text',{x:x,y:590,'font-size':20,'text-anchor':'middle',class:'m'},g).textContent=s;return g});
const RB=['var(--loss)','var(--gain)','var(--ink)','var(--gain)','var(--loss)'].map((c,i)=>{const r=260-i*30;
  return mk('path',{d:'M'+(460-r)+' 470a'+r+' '+r+' 0 0 1 '+(2*r)+' 0',fill:'none',stroke:c,'stroke-opacity':i>2?.5:1,'stroke-width':24,pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('rb'))});
const PR=[[300,470,34],[360,445,30],[430,460,38],[500,440,30],[570,465,36],[630,470,30],[390,490,26],[530,490,28],[460,420,26]].map((q,i)=>{const c=FC(i);return mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:c[0],'fill-opacity':c[1]},$('prod'))});
// 206 dots on two rings around the number, centred on the illustration midline
const DT=[];for(let i=0;i<206;i++){const ring=i<103?0:1,k=i%103,R=ring?214:250,a=-Math.PI/2+(k+ring*.5)*2*Math.PI/103,c=FC(i*7);
  DT.push(mk('circle',{cx:(1140+R*Math.cos(a)).toFixed(1),cy:(455+R*Math.sin(a)).toFixed(1),r:ring?5.5:6,fill:c[0],'fill-opacity':c[1]},$('dots')))}
const PL=[0,1,2,3].map(i=>mk('rect',{x:170+i*130,y:330,width:70,height:270,rx:6,fill:i==1?'var(--gain)':'none',stroke:i==1?'none':'var(--muted)','stroke-width':4,'stroke-dasharray':i==1?'none':'10 8'},$('plrs')));
const ML=[];for(let i=0;i<7;i++){const x=180+i*120;mk('circle',{cx:x,cy:740,r:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('meals'));ML.push(mk('circle',{cx:x,cy:740,r:14,class:'gain'},$('meals')))}
fig($('fut'),1200,690,22,'gain');
const BT=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,c=FC(i);BT.push(mk('circle',{cx:(480+125*Math.cos(a)).toFixed(1),cy:(500+125*Math.sin(a)).toFixed(1),r:34,fill:c[0],'fill-opacity':c[1]},$('bites')))}
const pt=a=>(1300+130*Math.cos(a)).toFixed(1)+' '+(480+130*Math.sin(a)).toFixed(1);
const WG=[];for(let i=0;i<6;i++){const a1=(i*60-90)*Math.PI/180,a2=((i+1)*60-90)*Math.PI/180,c=FC(i);WG.push(mk('path',{d:'M1300 480L'+pt(a1)+'A130 130 0 0 1 '+pt(a2)+'Z',fill:c[0],'fill-opacity':c[1],stroke:'var(--stage)','stroke-width':6},$('wedges')))}