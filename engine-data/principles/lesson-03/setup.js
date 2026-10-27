const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const drw=(id,k)=>{$(id).style.strokeDashoffset=(1-k).toFixed(3)};
const gemPts=(x,y,s)=>[[-1,-.4],[-.6,-1],[.6,-1],[1,-.4],[0,1]].map(q=>(x+q[0]*s).toFixed(0)+','+(y+q[1]*s).toFixed(0)).join(' ');
fig($('rp'),0,-109,26,'ink');
const spd=mk('g',{},$('rp'));[-80,-60,-40].forEach((y,i)=>mk('path',{d:'M50 '+y+'h'+(40-i*8),class:'s-muted','stroke-width':4,'stroke-linecap':'round'},spd));
const COL=[];for(let i=0;i<12;i++)COL.push(mk('polygon',{points:gemPts(180+i*112,700,36),class:'gain'},$('col')));
const BA=[],BB=[];for(let i=0;i<3;i++){const y=346+i*70;BA.push(mk('rect',{x:200,y:y,width:0,height:16,rx:8},$('bars')));BB.push(mk('rect',{x:540,y:y,width:0,height:16,rx:8},$('bars')))}
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(280+92*c).toFixed(1)+' '+(400+92*s).toFixed(1)+'L'+(280+102*c).toFixed(1)+' '+(400+102*s).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}