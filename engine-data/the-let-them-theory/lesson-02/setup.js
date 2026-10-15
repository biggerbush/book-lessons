const person=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
person($('pp1'),440,500,28,'ink');person($('pm1'),1000,500,28,'gain');
[200,300,400,500].forEach(x=>person($('frp'),x,420,26,'ink'));
const tiles=[];for(let i=0;i<6;i++){const x=790+(i%2)*120,y=280+Math.floor(i/2)*120,g=mk('g',{},$('tiles'));mk('rect',{x:x,y:y,width:100,height:100,rx:10,fill:'var(--muted)','fill-opacity':.2,stroke:'var(--line)','stroke-width':3},g);[-26,0,26].forEach(d=>{mk('circle',{cx:x+50+d,cy:y+46,r:10,class:'ink'},g);mk('path',{d:'M'+(x+38+d)+' '+(y+80)+'a12 12 0 0 1 24 0z',class:'ink'},g)});tiles.push(g)}
const ME2=person($('me2'),1260,440,34,'ink');
person($('you3'),210,470,26,'ink');[580,640,700].forEach(x=>person($('grp3'),x,470,22,'ink'));person($('p3b'),1160,500,30,'ink');
const rain=[];for(let i=0;i<6;i++)rain.push(mk('path',{class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('rain')));
[180,260,340].forEach(x=>person($('g4m'),x,320,20,'ink'));
for(let r=0;r<3;r++)for(let c=0;c<4;c++)mk('rect',{x:800+c*65,y:324+r*58,width:65,height:58,fill:'none',stroke:'var(--line)','stroke-width':2},$('calg'));
person($('mp4'),1310,370,22,'gain');person($('p5'),400,420,32,'ink');
for(let i=0;i<12;i++){const a=i*Math.PI/6,r0=i%3?150:136;mk('path',{d:'M'+(1140+r0*Math.sin(a)).toFixed(1)+' '+(470-r0*Math.cos(a)).toFixed(1)+'L'+(1140+160*Math.sin(a)).toFixed(1)+' '+(470-160*Math.cos(a)).toFixed(1),class:'s-muted','stroke-width':4,'stroke-linecap':'round'},$('tk5'))}
[-36,0,36].forEach(x=>person($('oth6p'),x,70,12,'ink'));person($('hand6p'),0,62,14,'gain');
const scr=(x0,x1,y)=>{let d='M'+x0+' '+y;for(let x=x0+16,i=1;x<=x1;x+=16,i++)d+='L'+x+' '+(y+9*Math.sin(i*1.7)).toFixed(1);return d};
$('sc7a').setAttribute('d',scr(260,1000,330));$('sc7b').setAttribute('d',scr(490,1000,552));
const draw=(id,k)=>$(id).setAttribute('stroke-dashoffset',(1000*(1-k)).toFixed(1));