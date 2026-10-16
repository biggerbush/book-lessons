const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
[['pv',760,570,30,'ink'],['pl',1300,570,30,'ink'],['pf',1330,560,32,'ink'],['pc',600,400,34,'ink'],['py',1000,400,34,'gain'],['py',1300,400,34,'ink'],['pb',260,600,32,'ink'],['po',1060,600,32,'ink'],['pn',200,600,30,'ink'],['pn',680,600,30,'ink'],['pk',720,490,30,'ink'],['pk',1180,490,30,'gain'],['pyou',1210,602,20,'ink']].forEach(a=>P($(a[0]),a[1],a[2],a[3],a[4]));
const blob=(g,arr)=>arr.map(q=>[mk('circle',{cx:q[0],cy:q[1],r:q[2],fill:'var(--muted)','fill-opacity':.3},g),q[0]]);
const TF=blob($('tfog'),[[1180,280,60],[1260,250,55],[1350,280,62],[1400,340,50],[1300,350,65],[1200,360,50]]);
// ring of doubt around the head only (head at 1300,570 r30; body below y~612)
const FG=blob($('fgc'),[190,155,120,90,60,25,-10].map((a,i)=>{const r=a*Math.PI/180;return [1300+100*Math.cos(r),570-100*Math.sin(r),26+(i%3)*4]}));
[[1170,450,44],[1300,418,48],[1410,450,44]].forEach(q=>{const x=mk('text',{x:q[0],y:q[1],'font-size':q[2],class:'d','text-anchor':'middle',style:'fill:var(--loss)'},$('fgc'));x.textContent='?'});
const FZ=blob($('fz'),[[300,370,40],[360,380,36],[330,420,44],[310,410,30],[350,350,30]]);
const RW=[];for(let i=0;i<6;i++){const y=340+i*62;mk('path',{d:'M160 '+y+'h220',class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('rows'));RW.push(mk('circle',{cx:470,cy:y,r:14,class:'loss'},$('rows')))}
const MS=[[215,350],[400,545],[420,375],[195,525],[330,300]].map(q=>mk('circle',{cx:q[0],cy:q[1],r:12,class:'loss'},$('miss')));
const CB=[0,1,2].map(()=>{const g=mk('g',{},$('chat'));mk('rect',{x:-30,y:-18,width:60,height:36,rx:18,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);for(let k=-1;k<2;k++)mk('circle',{cx:k*13,cy:0,r:4,class:'ink'},g);return g});
const CK=['What does success look like?','What is it for?','When is it due?'].map((s,i)=>{const y=300+i*120,g=mk('g',{},$('ck'));mk('rect',{x:860,y:y-34,width:44,height:44,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':5},g);
 const c=mk('path',{d:'M868 '+(y-12)+'l10 12l20-24',fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},g);
 const x=mk('text',{x:930,y:y,'font-size':34,class:'d5'},g);x.textContent=s;return [g,c]});
for(let r=0;r<3;r++)for(let c=0;c<4;c++){const on=r===1&&c===2;mk('circle',{cx:1111+c*36,cy:424+r*26,r:on?11:7,class:on?'gain':'ink'},$('cald'))}
const BS=$('bstroke');let BL=600;try{BL=BS.getTotalLength()||600}catch(e){}