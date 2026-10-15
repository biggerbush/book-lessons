const fig=(g,x,y,r,c)=>[mk('circle',{cx:x,cy:y,r:r,class:c},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)];
const setC=(f,c)=>f.forEach(e=>e.setAttribute('class',c));
const bY=(x,b,h,s)=>b-h*Math.exp(-(((x-800)/s)**2));
const bD=(a,c,b,h,s,z)=>{let d='';for(let x=a;x<=c;x+=10)d+=(d?'L':'M')+x+' '+bY(x,b,h,s).toFixed(1);return z?d+'L'+c+' '+b+'L'+a+' '+b+'Z':d};
const star=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const r=i%2?R*.45:R,a=-Math.PI/2+i*Math.PI/5;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};

fig($('snz0'),1150,420,34,'gain');
const A0=[60,95,130].map(R=>{const a=.7;return mk('path',{d:'M'+(1150+R*Math.cos(a)).toFixed(1)+' '+(420-R*Math.sin(a)).toFixed(1)+'A'+R+' '+R+' 0 0 1 '+(1150+R*Math.cos(a)).toFixed(1)+' '+(420+R*Math.sin(a)).toFixed(1),fill:'none',class:'s-gain','stroke-width':6,'stroke-linecap':'round'},$('arc0'))});
const T0=[];for(let c=0;c<4;c++)for(let r=0;r<7;r++)T0.push([mk('circle',{cx:1330+c*40,cy:300+r*40,r:10,class:'ink'},$('dots0')),c*40,Math.abs(r*40-120)]);

mk('path',{d:'M160 720H1440',class:'s-line','stroke-width':4},$('bc1'));
const L1=mk('path',{d:bD(200,470,720,460,260,1),class:'gain','fill-opacity':.45},$('bc1'));
const M1=mk('path',{d:bD(600,1000,720,460,260,1),fill:'var(--line)'},$('bc1'));
const CV1=mk('path',{d:bD(200,1400,720,460,260),fill:'none',class:'s-ink','stroke-width':7,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':1},$('bc1'));

[1180,1290,1400].forEach(x=>[330,470,610].forEach(y=>fig($('crowd2'),x,y,20,'ink')));
for(let r=0;r<10;r++){const y=300+r*40;mk('rect',{x:960,y:y,width:80,height:40,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('wall2'));mk('path',{d:'M'+(r%2?980:1020)+' '+y+'v40',stroke:'var(--ink)','stroke-width':4},$('wall2'))}
const AD=[0,1,2,3].map(()=>mk('rect',{width:44,height:30,rx:4,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},$('ads2')));

fig($('snz3'),300,430,40,'gain');
const T3=[['FRIENDS',300],['COWORKERS',450],['FOLLOWERS',600]].map(([s,y])=>{const g=mk('g',{},$('tg3'));mk('path',{d:'M570 420L740 '+(y+20),class:'s-line','stroke-width':4,'stroke-dasharray':'8 8'},g);fig(g,780,y,18,'ink');const tx=mk('text',{x:830,y:y+30,class:'m','font-size':22},g);tx.textContent=s;return g});
const D3=[];for(let c=0;c<8;c++)for(let r=0;r<8;r++){const x=1080+c*52,y=290+r*58;D3.push([mk('circle',{cx:x,cy:y,r:12,class:'ink'},$('mk3')),Math.hypot(x-1080,y-493)])}

const B4=[];[400,580,760].forEach((y,k)=>{mk('rect',{x:640,y:y,width:800,height:12,rx:4,class:'ink'},$('shf'));for(let i=0;i<10;i++){const x=670+i*76,h=70+((i*7+k*3)%3)*12,g=mk('g',{},$('shf')),c4=['gain','loss','ink'][(i+k)%3];mk('rect',{x:x,y:y-h,width:50,height:h,rx:10,class:c4},g);mk('rect',{x:x+17,y:y-h-26,width:16,height:30,rx:4,class:c4},g);B4.push(g)}});
const P4=fig($('pr4'),310,480,40,'ink');

for(let x=160;x<=720;x+=40)mk('path',{d:'M'+x+' 240V720',stroke:'var(--line)','stroke-width':1.5},$('grid5'));
for(let y=310;y<=670;y+=40)mk('path',{d:'M130 '+y+'H750',stroke:'var(--line)','stroke-width':1.5},$('grid5'));
mk('path',{d:star(600,380,44),class:'gain'},$('ef5i'));

mk('path',{d:'M160 700H1440',class:'s-line','stroke-width':4},$('bc6'));
mk('path',{d:bD(200,430,700,400,230,1),class:'gain','fill-opacity':.45},$('bc6'));
mk('path',{d:bD(200,1400,700,400,230),fill:'none',class:'s-ink','stroke-width':6,'stroke-linecap':'round'},$('bc6'));
const AR6=['M380 620Q520 360 680 480','M400 640Q600 330 800 470','M420 660Q680 320 920 480'].map(d=>mk('path',{d:d,fill:'none',class:'s-gain','stroke-width':5,'stroke-linecap':'round','stroke-dasharray':'12 14'},$('arr6')));
[[680,480],[800,470],[920,480]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:9,class:'gain'},$('arr6')));
const CR6=[];for(let r=0;r<2;r++)for(let c=0;c<6;c++)CR6.push([fig($('cr6'),640+c*64,530+r*85,13,'ink'),c]);

const P7=[[300,400,'SOFTWARE'],[600,330,'CYCLING'],[560,600,'COOKING']].map(([x,y,s])=>{const g=mk('g',{},$('pins7'));mk('path',{d:'M'+x+' '+y+'l-22-38a25 25 0 1 1 44 0z',class:'gain'},g);mk('circle',{cx:x,cy:y-50,r:9,fill:'var(--stage)'},g);const tx=mk('text',{x:x,y:y+34,class:'m','font-size':20,'text-anchor':'middle'},g);tx.textContent=s;return g});
const R7=[];for(let i=0;i<6;i++){const y=360+i*60;mk('circle',{cx:840,cy:y,r:8,class:'gain'},$('nl7'));R7.push([mk('rect',{x:864,y:y-6,width:0,height:12,rx:6,class:'ink'},$('nl7')),200-(i*37)%60])}

const TEN=[];for(let i=0;i<10;i++)TEN.push(mk('circle',{cx:160+i*64,cy:750,r:20,class:'ink'},$('ten8')));