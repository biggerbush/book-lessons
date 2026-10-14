const person=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const tx=(g,x,y,s,fs,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,'text-anchor':'middle',class:'m',style:st||''},g);e.textContent=s;return e};
const pill=(g,cx,cy,w,h,s,stroke,col,fs)=>{const q=mk('g',{},g);mk('rect',{x:cx-w/2,y:cy-h/2,width:w,height:h,rx:h/2,fill:'var(--stage)',stroke:stroke,'stroke-width':4},q);tx(q,cx,cy+fs*.36,s,fs,'fill:'+col);return q};
const cross=(g,x,y)=>mk('path',{d:'M'+x+' '+(y-20)+'v40M'+(x-20)+' '+y+'h40',stroke:'var(--stage)','stroke-width':8,'stroke-linecap':'round'},g);
const seat=(g,x,d)=>mk('path',{d:'M'+(x-70)+' 620h140M'+(x-60)+' 620v80M'+(x+60)+' 620v80M'+(x-70*d)+' 620V470',fill:'none',stroke:'var(--ink)','stroke-width':8,'stroke-linecap':'round'},g);

[1080,1400].forEach(x=>{const g=mk('g',{},$('spk'));person(g,x,330,28,'ink');mk('rect',{x:x-70,y:190,width:140,height:80,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',{d:'M'+(x-44)+' 220h88M'+(x-44)+' 244h56',stroke:'var(--line)','stroke-width':8,'stroke-linecap':'round'},g)});
person($('spk'),1240,640,28,'ink');

const BD=[['PARENT',380,300],['NURSE',380,450],['SPORTS FAN',380,600],['CHURCHGOER',1220,340],['NEIGHBOUR',1220,540]];
const BLn=BD.map(b=>mk('path',{d:'M'+(b[1]<800?520:1080)+' '+b[2]+'L800 450',stroke:'var(--line)','stroke-width':4},$('bln')));
person($('fig'),800,300,60,'ink');
const BDg=BD.map(b=>pill($('bdg'),b[1],b[2],280,64,b[0],'var(--gain)','var(--ink)',24));

person($('src'),220,440,36,'ink');

person($('room'),420,400,44,'ink'); cross($('room'),420,530);
const PA=person($('room'),1150,400,44,'ink'); person($('room'),1290,480,24,'ink');
const PP=[];for(let i=0;i<8;i++)PP.push(mk('rect',{width:120,height:26,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('pap')));

seat($('dseat'),480,1); person($('dseat'),480,452,40,'ink'); cross($('dseat'),480,580);
seat($('pseat'),1120,-1); const P4=person($('pseat'),1120,452,40,'ink');

person($('cg'),300,420,40,'ink'); cross($('cg'),300,545); person($('cg'),1300,420,40,'ink'); person($('cg'),800,560,24,'ink');
const FC=[0,1,2].map(()=>mk('rect',{x:-22,y:-28,width:44,height:56,rx:4,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},$('facts')));

person($('me6'),420,470,44,'ink');
person($('oth'),1380,560,30,'ink');
const MB=[['PARENT',850,480],['NEIGHBOUR',1170,480],['SPORTS FAN',850,570],['THE FRICTION',1170,570]].map((b,i)=>pill($('mb'),b[1],b[2],300,56,b[0],i<3?'var(--ink)':'var(--loss)',i<3?'var(--ink)':'var(--loss)',20));
const setC=(arr,c)=>arr.forEach(e=>e.setAttribute('class',c));