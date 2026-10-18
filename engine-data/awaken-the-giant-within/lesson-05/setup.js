const person=(g,x,y,r,cls)=>{const h=mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return h};
const strike=(id,w,k)=>{const l=$(id);l.setAttribute('x2',(+l.getAttribute('x1')+w*k).toFixed(1))};
const T=(par,x,y,s,cls,txt,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:cls},ex||{}),par);e.textContent=txt;return e};
const arrowD=(x,y,l)=>'M'+x+' '+y+'h'+l+'m-16-16 16 16-16 16';
const AS={fill:'none',stroke:'var(--muted)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'};
person($('host'),1300,520,40,'ink');
const TB=[0,1,2,3,4].map(i=>mk('rect',{x:1206+i*52,width:28,rx:6,class:'gain'},$('tbars')));
const H1=person($('ppl'),500,470,40,'ink');
[700,900].forEach(x=>{const g=mk('g',{opacity:.35},$('ppl'));person(g,x,470,32,'ink')});
const H2=person($('ppl'),1100,470,40,'ink');
for(let i=0;i<11;i++){const a=(-135+27*i)*Math.PI/180,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(330+165*s).toFixed(1)+' '+(550-165*c).toFixed(1)+'L'+(330+185*s).toFixed(1)+' '+(550-185*c).toFixed(1),stroke:i>7?'var(--loss)':'var(--line)','stroke-width':6,'stroke-linecap':'round'},$('ticks'))}
const BB=['FURIOUS','EXHAUSTED','TERRIBLE','FURIOUS','DISASTER','EXHAUSTED'].map((w,i)=>{const x=120+(i%2)*300,y=240+Math.floor(i/2)*110,g=mk('g',{},$('bubs'));mk('rect',{x:x,y:y,width:260,height:76,rx:38,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,x+130,y+46,22,'m',w,{'text-anchor':'middle',style:'fill:var(--ink)'});return g});
// rain kept clear of the bolt (bolt spans x 1136-1206)
const RX=[1020,1050,1080,1110,1236,1266,1296,1326];
const RN=[];for(let i=0;i<8;i++)RN.push(mk('path',{class:'s-loss','stroke-width':5,'stroke-linecap':'round'},$('rain')));
const fader=(g,cls)=>{mk('path',{d:'M1360 290V680',class:'s-line','stroke-width':8,'stroke-linecap':'round'},g);for(let i=0;i<7;i++)mk('path',{d:'M1335 '+(290+i*65)+'h50',class:'s-line','stroke-width':3},g);T(g,1360,260,20,'m','LOUD',{'text-anchor':'middle'});T(g,1360,730,20,'m','SOFT',{'text-anchor':'middle'});return mk('rect',{x:1310,width:100,height:40,rx:12,class:cls},g)};
const KN4=fader($('fd4'),'loss'),KN5=fader($('fd5'),'gain');
const SP=[];for(let k=0;k<16;k++){const r=k%2?20:46,a=k*Math.PI/8;SP.push((r*Math.sin(a)).toFixed(1)+','+(-r*Math.cos(a)).toFixed(1))}
const BARS=[['“FINE”',240,80,'muted'],['“FANTASTIC”',600,340,'gain'],['“UNSTOPPABLE”',960,400,'gain']].map(([w,x,h,c],i)=>{const g=mk('g',{},$('bars'));const r=mk('rect',{x:x-60,width:120,rx:8,fill:'var(--'+c+')'},g);T(g,x,764,22,'m',w,{'text-anchor':'middle'});const s=i?mk('polygon',{points:SP.join(' '),class:'gain'},g):null;return {g:g,r:r,h:h,x:x,s:s}});
[['STRONG LABEL','INTENSE FEELING','ONE ACTION'],['MILD LABEL','CALMER FEELING','ANOTHER ACTION']].forEach((row,j)=>row.forEach((w,i)=>{const x=480+i*360,y=j?605:285,g=mk('g',{id:'pb'+j+i},$('rows'));mk('rect',{x:x,y:y,width:280,height:90,rx:16,fill:j?'var(--gain)':'var(--stage)',stroke:j?'var(--gain)':'var(--loss)','stroke-width':5},g);T(g,x+140,y+52,20,'m',w,{'text-anchor':'middle',style:'fill:var('+(j?'--on-gain':'--loss')+')'});if(i<2)mk('path',Object.assign({d:arrowD(x+292,y+45,56)},AS),g)}));
for(let i=0;i<11;i++)mk('circle',{cx:160+i*60,cy:240,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spiral'));
const NBR=[['Furious','A bit annoyed'],['Exhausted','Recharging'],['Terrible','Not ideal']].map(([a,b],i)=>{const y=380+i*90;T($('nbL'),170,y,34,'d5',a,{style:'fill:var(--loss)'});const g=mk('g',{},$('nbR'));mk('path',Object.assign({d:arrowD(390,y-12,70)},AS),g);T(g,500,y,34,'d',b,{style:'fill:var(--gain)'});return g});
person($('spk'),170,690,26,'ink');
const WV=[0,1,2].map(i=>mk('path',{d:'M'+(212+i*20)+' '+(676-i*10)+'q'+(14+i*4)+' '+(24+i*10)+' 0 '+(48+i*20),fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('wv')));