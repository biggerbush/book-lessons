const P=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const face=(g,x,y,r,s)=>mk('path',{d:'M'+(x-r*.4)+' '+(y+r*(s?.25:.55))+'q'+(r*.4)+' '+(s?r*.4:-r*.4)+' '+(r*.8)+' 0',fill:'none',stroke:'var(--stage)','stroke-width':4,'stroke-linecap':'round'},g);
const star=(x,y,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,q=i%2?R*.45:R;d+=(i?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const T=(g,x,y,s,fs,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs||20,class:'m','text-anchor':'middle'},a||{}),g);e.textContent=s;return e};
const strk=(id,x0,w,k)=>$(id).setAttribute('x2',x0+w*k);

const MO='JFMAMJJASOND',TD=[];
for(let i=0;i<12;i++){const x=160+i*1280/11;TD.push(mk('circle',{cx:x,cy:300,r:i<11?10:22,class:i<11?'ink':'loss'},$('tld')));T($('tld'),x,352,MO[i],20)}
[[420,'MANAGER'],[1180,'EMPLOYEE']].forEach(([x,l])=>{const g=$('dread');P(g,x,600,36,'ink');face(g,x,600,36,0);mk('path',{d:'M'+(x+50)+' 560q11 17 0 24q-11-7 0-24z',class:'loss'},g);T(g,x,800,l)});

const TL=['C','F','R'].map((c,i)=>{const x=120+i*240,g=mk('g',{},$('tiles'));mk('rect',{x:x,y:260,width:180,height:180,rx:20,class:'gain'},g);T(g,x+90,395,c,120,{class:'d',style:'fill:var(--on-gain)'});return g});
const WD=['CONVERSATIONS','FEEDBACK','RECOGNITION'].map((s,i)=>{const g=mk('g',{},$('words'));T(g,210+i*240,490,s,22);return g});
const gearD=(cx,cy,R,n)=>{let d='';for(let i=0;i<n*4;i++){const a=i*Math.PI*2/(n*4),q=(i%4<2)?R+22:R;d+=(i?'L':'M')+(cx+q*Math.cos(a)).toFixed(1)+' '+(cy+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const GA=mk('path',{d:gearD(1000,500,130,12),class:'ink'},$('gA')),GB=mk('path',{d:gearD(1265,500,110,10),class:'gain'},$('gB'));
[[1000,'OKRs',$('gA')],[1265,'CFRs',$('gB')]].forEach(([x,s,g])=>{mk('circle',{cx:x,cy:500,r:58,fill:'var(--stage)'},g);T(g,x,513,s,36,{class:'d'})});

const MG=P($('pp3'),420,470,40,'ink');P($('pp3'),880,470,40,'ink');face($('pp3'),420,470,40,1);face($('pp3'),880,470,40,1);
const CP=['GOALS','PROGRESS','OBSTACLES','GROWTH'].map((s,i)=>{const x=440+(i%2)*220,y=240+Math.floor(i/2)*80,g=mk('g',{},$('chips3'));mk('rect',{x:x,y:y,width:200,height:60,rx:30,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,x+100,y+38,s,20);return g});

P($('pp4'),300,290,34,'ink');P($('pp4'),300,600,34,'ink');T($('pp4'),300,474,'MANAGER');T($('pp4'),300,792,'TEAM MEMBER');
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(880+92*Math.cos(a)).toFixed(1)+' '+(420+92*Math.sin(a)).toFixed(1)+'L'+(880+104*Math.cos(a)).toFixed(1)+' '+(420+104*Math.sin(a)).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('ticks'))}

mk('path',{d:star(310,345,32),style:'fill:var(--on-gain)'},$('tro'));
const PR=[760,940,1120,1300].map(x=>{const e=P($('peers'),x,520,32,'ink');face($('peers'),x,520,32,1);return e});
const AR=[0,1,2].map(i=>{const x=760+i*180,g=mk('g',{},$('thx'));mk('path',{d:'M'+(x+20)+' 470Q'+(x+90)+' 380 '+(x+160)+' 470',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'8 8'},g);mk('path',{d:star(x+90,422,18),class:'gain'},g);return g});

const YD=[];for(let i=0;i<12;i++)YD.push(mk('circle',{cx:540+i*900/11,cy:360,r:13,class:'gain'},$('yd')));
[760,960,1160].forEach(x=>{P($('team'),x,560,34,'gain');face($('team'),x,560,34,1)});

const cg=$('cal');mk('rect',{x:1240,y:230,width:220,height:220,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':7},cg);
mk('path',{d:'M1240 284v-38a16 16 0 0 1 16-16h188a16 16 0 0 1 16 16v38z',class:'ink'},cg);
mk('path',{d:'M1290 214v32M1410 214v32',class:'s-ink','stroke-width':8,'stroke-linecap':'round'},cg);
let CC;for(let r=0;r<3;r++)for(let c=0;c<5;c++){const e=mk('rect',{x:1262+c*38,y:306+r*42,width:28,height:28,rx:6,fill:r==1&&c==2?'var(--gain)':'var(--line)'},cg);if(r==1&&c==2)CC=e}
mk('path',{d:'M1342 361l5 6 10-12',fill:'none',stroke:'var(--on-gain)','stroke-width':4,'stroke-linecap':'round','stroke-linejoin':'round'},cg);