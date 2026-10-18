const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const tx=(g,x,y,fs,cls,s,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':a||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const starD=R=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return d+'Z'};
const badge=(g,x,y,r,name,fast)=>{mk('circle',{cx:x,cy:y,r:r,class:fast?'gain':'ink'},g);tx(g,x,y+11,32,'d',name,'middle','fill:var('+(fast?'--on-gain':'--stage')+')')};
person($('tPer'),1170,330,34,'ink');$('tStar').setAttribute('d',starD(70));
[280,1320].forEach((x,i)=>{person($('lens'),x,400,40,'ink');mk('path',{d:i?'M1270 410L940 450':'M330 410L660 450',class:'s-muted','stroke-width':3,'stroke-dasharray':'6 8'},$('lens'))});
const Q=[['Red',560,380,1],['Yellow',1040,380,1],['Blue',560,670,0],['Green',1040,670,0]].map(q=>{const g=mk('g',{},$('quad'));badge(g,q[1],q[2],75,q[0],q[3]);return g});
$('dStar').setAttribute('d',starD(34));
person($('rP'),340,350,34,'gain');person($('gP'),1000,360,30,'ink');
[1180,1290,1400].forEach(x=>{person($('crew'),x,400,18,'ink');tx($('crew'),x,368,22,'m','?','middle')});
person($('yP'),300,380,34,'gain');person($('bP'),1300,380,34,'ink');
for(let i=0;i<7;i++){const a=Math.PI+i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(520+70*c).toFixed(1)+' '+(390+70*s).toFixed(1)+'L'+(520+95*c).toFixed(1)+' '+(390+95*s).toFixed(1),class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('bRay'))}
const RW=[['Decisive','GREEN’S','Reckless'],['Careful','RED’S','Stubborn'],['Enthusiasm','BLUE’S','Sloppiness'],['Thoroughness','YELLOW’S','Nitpicking']].map((w,i)=>{const y=230+i*140,c=y+50,a=mk('g',{},$('rows')),b=mk('g',{},$('rows'));
mk('rect',{x:120,y:y,width:400,height:100,rx:50,class:'gain'},a);tx(a,320,c+14,40,'d5',w[0],'middle','fill:var(--on-gain)');
mk('path',{d:'M606 '+c+'q34-30 68 0q-34 30-68 0z',fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},b);mk('circle',{cx:640,cy:c,r:9,class:'ink'},b);
tx(b,692,c+8,20,'m',w[1]+' EYES');
mk('path',{d:'M900 '+c+'h130m-18-18 18 18-18 18',fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},b);
mk('rect',{x:1080,y:y,width:400,height:100,rx:50,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},b);tx(b,1280,c+14,40,'d5',w[2],'middle','fill:var(--loss)');return [a,b]});
badge($('nR'),500,400,70,'Red',1);badge($('nB'),1100,400,70,'Blue',0);
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(500+72*c).toFixed(1)+' '+(610+72*s).toFixed(1)+'L'+(500+82*c).toFixed(1)+' '+(610+82*s).toFixed(1),class:'s-ink','stroke-width':4,'stroke-linecap':'round'},$('ticks'))}
person($('cP'),1340,500,30,'ink');