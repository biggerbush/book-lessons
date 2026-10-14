const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const drw=(el,k)=>{el.style.strokeDashoffset=1-k};
const star=(cx,cy,R,r)=>{let s='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?r:R;s+=(cx+q*Math.cos(a)).toFixed(1)+','+(cy+q*Math.sin(a)).toFixed(1)+' '}return s};
const box=(g,x,y,w,h,s,fs,cls)=>{const r=mk('rect',{x:x,y:y,width:w,height:h,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);const tx=mk('text',{x:x+w/2,y:y+h/2+fs*.36,'font-size':fs,'text-anchor':'middle',class:cls},g);tx.textContent=s;return [r,tx]};
const row=(g,xs,ws,y,h,L,fs,cls)=>{const o=L.map((s,i)=>box(g,xs[i],y,ws[i],h,s,fs,cls));['×','='].forEach((q,i)=>{const tx=mk('text',{x:(xs[i]+ws[i]+xs[i+1])/2,y:y+h/2+fs*.42,'font-size':Math.max(24,fs*1.2),'text-anchor':'middle',class:'d',style:'fill:var(--muted)'},g);tx.textContent=q});return o};
const EQ=[['TALENT','EFFORT','SKILL'],['SKILL','EFFORT','ACHIEVEMENT']];
const R2=[0,1].map(r=>row($('eq'+r),[120,580,1040],[400,400,400],260+r*200,120,EQ[r],44,'d'));
const R6=[0,1].map(r=>row($('qq'+r),[860,1070,1280],[170,170,200],300+r*160,70,EQ[r],20,'m'));
$('kstar').setAttribute('points',star(1300,220,40,17));
fig($('kid'),1300,330,42,'ink');
fig($('perf'),450,520,30,'ink');
fig($('sitter'),1140,450,34,'ink');
fig($('potter'),220,390,34,'ink');
fig($('pf'),190,300,26,'loss');
fig($('ps'),190,560,26,'gain');
for(let i=0;i<9;i++){const a=Math.PI+i*Math.PI/8,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(360+125*c).toFixed(1)+' '+(520+125*s).toFixed(1)+'L'+(360+142*c).toFixed(1)+' '+(520+142*s).toFixed(1),stroke:i>5?'var(--gain)':'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('dticks'))}
for(let i=0;i<9;i++){const a=(-210+i*30)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1220+135*c).toFixed(1)+' '+(460+135*s).toFixed(1)+'L'+(1220+150*c).toFixed(1)+' '+(460+150*s).toFixed(1),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('kt'))}
const POTS=[];for(let s=0;s<3;s++)for(let i=0;i<7;i++){const x=840+i*90,y=417+s*140;POTS.push(mk('path',{d:'M'+(x-24)+' '+y+'C'+(x-32)+' '+(y-30)+' '+(x-12)+' '+(y-44)+' '+(x-10)+' '+(y-60)+'h20C'+(x+12)+' '+(y-44)+' '+(x+32)+' '+(y-30)+' '+(x+24)+' '+y+'z',class:'gain'},$('pots')))}