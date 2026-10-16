const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const helm=(g,x,y,h,cls)=>{const e=mk('g',{},g);mk('path',{d:`M${x-h} ${y+h}V${y}a${h} ${h} 0 0 1 ${2*h} 0V${y+h}z`,class:cls},e);mk('path',{d:`M${x-h*.6} ${y+h*.15}h${h*1.2}M${x} ${y+h*.45}v${h*.55}`,stroke:'var(--stage)','stroke-width':(h*.16).toFixed(1),'stroke-linecap':'round',fill:'none'},e);return e};
const star=(g,cls)=>mk('path',{d:'M0 -20Q0 0 20 0Q0 0 0 20Q0 0 -20 0Q0 0 0 -20z',class:cls},g);
const KN=$('knight');fig(KN,1280,380,50,'ink');helm(KN,1280,380,62,'ink');mk('path',{d:'M1280 318q30-44 76-34q-34 12-56 42z',class:'gain'},KN);const GL=star(KN,'gain');
const RA=[180,245,115].map(d=>d*Math.PI/180),RD=RA.map(()=>mk('circle',{r:16,class:'ink'},$('reach')));
fig($('kid'),300,608,22,'ink');
const DT=[625,645,665].map(y=>mk('path',{d:`M490 ${y}h30`,class:'s-loss','stroke-width':6,'stroke-linecap':'round'},$('darts')));
fig($('adult'),800,557,34,'ink');helm($('helm2'),800,557,42,'ink');
fig($('heavy'),1270,557,34,'loss');helm($('heavy'),1270,557,42,'ink');
let lp='M960 260V740M1080 260V740';for(let y=300;y<=700;y+=50)lp+=`M960 ${y}h120`;
mk('path',{d:lp,class:'s-ink','stroke-width':7,'stroke-linecap':'round',fill:'none'},$('lad'));
fig($('climber'),1020,650,16,'gain');
const G2=[[380,460],[280,560]].map(q=>[star($('glints'),'gain'),q]);
fig($('knower'),340,514,30,'ink');fig($('learner'),720,514,30,'gain');
const mkPan=(g,n,cls)=>{mk('path',{d:'M0 0v100',class:'s-ink','stroke-width':4},g);mk('path',{d:'M-60 100h120a60 30 0 0 1-120 0z',class:'ink'},g);for(let i=0;i<n;i++)mk('circle',{cx:(i-(n-1)/2)*34,cy:84,r:16,class:cls},g)};
mkPan($('panL'),1,'loss');mkPan($('panR'),3,'gain');
let rp='';for(let a=-170;a<=-10;a+=20){const r=a*Math.PI/180;rp+=`M${(1190+100*Math.cos(r)).toFixed(1)} ${(560+100*Math.sin(r)).toFixed(1)}L${(1190+140*Math.cos(r)).toFixed(1)} ${(560+140*Math.sin(r)).toFixed(1)}`}
mk('path',{d:rp,class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'));
fig($('lead5'),240,449,36,'loss');helm($('lead5'),240,449,44,'ink');
const TB=[],TH=[];[400,480,560,640].forEach(x=>{TB.push(fig($('team5'),x,508,22,'ink'));TH.push(helm($('th'),x,508,27,'ink'))});
// trust fades: two armored people facing each other, a dashed line of trust between them
const P5=$('pair5');fig(P5,1110,520,26,'ink');helm(P5,1110,520,32,'ink');fig(P5,1410,520,26,'ink');helm(P5,1410,520,32,'ink');
const TL=[];for(let i=0;i<6;i++)TL.push(mk('path',{d:`M${1164+i*36} 590h22`,class:'s-gain','stroke-width':8,'stroke-linecap':'round'},$('tline')));
fig($('refl'),400,430,40,'gain');
for(let x=760;x<=1400;x+=80)mk('circle',{cx:x,cy:260,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings'));
helm($('hdown'),1340,700,60,'ink');mk('path',{d:'M1340 640q30-44 76-34q-34 12-56 42z',class:'gain'},$('hdown'));