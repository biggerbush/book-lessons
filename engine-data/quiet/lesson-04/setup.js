const pers=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const lect=mk('g',{},$('lect'));pers(lect,0,0,26,'ink');
const A0=[];for(let i=0;i<6;i++){const g=mk('g',{},$('aud0'));pers(g,1090+i*46,615,11,'ink');A0.push(g)}
pers($('profp'),300,360,40,'ink');
const A1=[];for(let r=0;r<3;r++)for(let c=0;c<6;c++){const g=mk('g',{},$('aud1'));pers(g,620+c*110,330+r*120,18,'ink');A1.push(g)}
const me2=mk('g',{},$('me2'));const M2=pers(me2,0,450,28,'ink');
const PJ=['Work you love','People you care about','A cause you believe in'];
const cards=PJ.map((s,i)=>{const y=240+i*130,g=mk('g',{},$('cards3'));
  mk('rect',{x:760,y:y,width:720,height:104,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  if(i===0){mk('rect',{x:790,y:y+36,width:52,height:38,rx:6,class:'ink'},g);mk('path',{d:'M804 '+(y+36)+'v-8h24v8',fill:'none',stroke:'var(--ink)','stroke-width':5},g)}
  if(i===1){pers(g,800,y+30,9,'ink');pers(g,832,y+30,9,'gain')}
  if(i===2){mk('path',{d:'M800 '+(y+24)+'v58',stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},g);mk('path',{d:'M803 '+(y+26)+'l40 14-40 14z',class:'gain'},g)}
  const tx=mk('text',{x:880,y:y+66,'font-size':36,class:'d5'},g);tx.textContent=s;
  const l=mk('path',{d:'M550 470L760 '+(y+52),fill:'none',stroke:'var(--gain)','stroke-width':4,'stroke-dasharray':'8 8'},$('links3'));return [g,l]});
pers($('me4'),1160,330,34,'ink');
for(let i=0;i<8;i++){const a=-Math.PI+(i+.5)*Math.PI/8,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1160+62*c).toFixed(0)+' '+(330+62*s).toFixed(0)+'L'+(1160+96*c).toFixed(0)+' '+(330+96*s).toFixed(0),stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},$('spk'))}
[960,1360].forEach(x=>{const g=$('st4');pers(g,x,580,26,'ink');mk('rect',{x:x-55,y:470,width:110,height:56,rx:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);[-22,0,22].forEach(d=>mk('circle',{cx:x+d,cy:498,r:5,class:'ink'},g))});
const me5=mk('g',{},$('me5'));pers(me5,0,420,32,'ink');
pers($('np5'),1050,470,26,'gain');
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(800+88*c).toFixed(0)+' '+(440+88*s).toFixed(0)+'L'+(800+100*c).toFixed(0)+' '+(440+100*s).toFixed(0),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('tk'))}
const CAL=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++)CAL.push(mk('rect',{x:1180+c*50,y:392+r*46,width:36,height:36,rx:6,fill:'var(--line)'},$('cal6')));
pers($('qp'),1340,400,18,'gain');