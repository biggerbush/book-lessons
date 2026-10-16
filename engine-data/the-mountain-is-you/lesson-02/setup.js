const person=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const draw=(el,k)=>el.setAttribute('stroke-dashoffset',(1-k).toFixed(3));
const tr=(el,x,y,s)=>el.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+')'+(s?' scale('+s.toFixed(3)+')':''));
const wk=mk('g',{},$('walker'));person(wk,0,420,24,'ink');
mk('path',{d:'M40 360H-60m22-22-22 22 22 22',fill:'none',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round'},wk);
// tangled scribble band: y 598..666
let rd='';for(let a=0;a<=64;a+=.2)rd+=(a?'L':'M')+(160+20*a-45*Math.sin(a)).toFixed(1)+' '+(632+34*Math.cos(a)).toFixed(1);$('rope').setAttribute('d',rd);
// labels sit below the scribble band (y 700..764), full-opacity muted text
const TG=[['WEAKNESS',240,200],['LAZINESS',640,200],['BROKEN CHARACTER',1040,320]].map(([s,x,w])=>{const g=mk('g',{},$('tags'));
  mk('path',{d:'M'+(x+w/2)+' 674V694',stroke:'var(--muted)','stroke-width':4,'stroke-linecap':'round'},g);
  mk('rect',{x:x,y:700,width:w,height:64,rx:32,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  const tx=mk('text',{x:x+w/2,y:740,'font-size':22,'text-anchor':'middle',class:'m',style:'fill:var(--muted)'},g);tx.textContent=s;return g});
const PU=[[1140,320],[1260,290],[1380,320]].map(([x,y])=>{mk('path',{d:'M'+(x-55)+' '+y+'Q'+x+' '+(y-44)+' '+(x+55)+' '+y+'Q'+x+' '+(y+44)+' '+(x-55)+' '+y+'Z',fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},$('eyes'));return [mk('circle',{cx:x,cy:y,r:13,class:'loss'},$('eyes')),x,y]});
person($('eyes'),1260,430,26,'ink');
const lv=mk('g',{},$('lover'));person(lv,0,420,30,'gain');person($('other'),1000,420,30,'ink');
const SH=[0,1].map(()=>mk('rect',{x:524,y:294,width:0,height:242,class:'loss'},$('win')));
person($('tug'),220,330,24,'ink');
const DR=[0,1,2].map(()=>mk('circle',{cx:620,cy:740,r:9,class:'gain'},$('drops')));
for(let i=0;i<6;i++)mk('circle',{cx:880+i*100,cy:240,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
[['scr0',370],['scr1',500]].forEach(([id,y])=>{let d='M870 '+y;for(let i=0;i<24;i++){const x=870+i*18;d+='Q'+(x+9)+' '+(y+(i%2?12:-12))+' '+(x+18)+' '+y}$(id).setAttribute('d',d)});
const ST=[0,1,2,3,4].map(i=>mk('rect',{x:720+140*i,y:640-50*i,width:136,height:60+50*i,rx:6,class:'gain','fill-opacity':(.3+.17*i).toFixed(2)},$('steps')));
const cg=mk('g',{},$('climber'));person(cg,0,-84,20,'ink');
person($('refl'),1340,390,28,'gain');