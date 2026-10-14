const pp=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const tw=(g,x,y,s,c)=>{const w=Math.max(2,5*s);mk('rect',{x:x-35*s,y:y-75*s,width:70*s,height:44*s,fill:'var(--stage)',stroke:'var(--'+c+')','stroke-width':w},g);
  mk('rect',{x:x-60*s,y:y-40*s,width:120*s,height:50*s,rx:10*s,fill:'var(--'+c+')'},g);
  mk('path',{d:'M'+(x-40*s)+' '+(y-15*s)+'h'+(80*s),stroke:'var(--stage)','stroke-width':Math.max(2,6*s),'stroke-dasharray':(6*s)+' '+(8*s)},g);return g};
const dr=(id,k)=>{const e=$(id);e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));e.setAttribute('opacity',k>0?1:0)};
tw($('tw1'),230,560,1.4,'ink');
const TWS=[];for(let i=0;i<100;i++)TWS.push(tw(mk('g',{},$('twrow')),450+(i%25)*41,480+Math.floor(i/25)*90,.3,'ink'));
tw($('tw2'),420,674,1.6,'muted');
[1180,1230,1280].forEach(x=>tw($('q_tw'),x,790,.35,'muted'));
const GD=[0,1,2,3].map(()=>mk('rect',{width:18,height:18,rx:3,class:'ink'},$('gdots')));
for(let i=0;i<7;i++){const a=Math.PI*(1+i/6),c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1160+115*c).toFixed(0)+' '+(420+115*s).toFixed(0)+'L'+(1160+150*c).toFixed(0)+' '+(420+150*s).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
[[1000,200],[1070,300],[1150,240],[1230,320],[1310,180],[1380,260]].forEach(q=>mk('rect',{x:q[0],y:640-q[1],width:60,height:q[1],class:'ink'},$('usk')));
const CM=[50,80,60,90,45,70].map((h,i)=>mk('rect',{x:280+i*40,y:600-h,width:28,height:h,class:'ink'},$('cmin')));
[[330,300,44],[390,272,52],[455,300,44],[300,330,30],[420,330,40]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'loss','fill-opacity':.35},$('smkin')));
pp($('gp'),730,360,36,'ink');
pp($('rp'),0,-80,16,'ink');