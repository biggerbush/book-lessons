const fig=(g,x,y,k)=>{const G=mk('g',{transform:`translate(${x} ${y}) scale(${k})`},g),P={g:G},
S=(n,d,w)=>P[n]=[mk('path',{d,fill:'none',stroke:'var(--ink)','stroke-width':w,'stroke-linecap':'round'},G),'stroke','var(--ink)'],
F=(n,tag,a)=>P[n]=[mk(tag,Object.assign({fill:'var(--stage)',stroke:'var(--ink)','stroke-width':6},a),G),'fill','var(--stage)'];
S('arms','M-58 76L-94 196M58 76L94 196',16);S('legs','M-24 224L-30 356M24 224L30 356',18);S('feet','M-30 362h-28M30 362h28',16);
F('chest','path',{d:'M-50 140V90a36 36 0 0 1 36-36h28a36 36 0 0 1 36 36v50z'});
F('belly','path',{d:'M-50 140v46a36 36 0 0 0 36 36h28a36 36 0 0 0 36-36v-46z'});
F('head','circle',{r:38});
const H=mk('g',{fill:'var(--ink)'},G);mk('circle',{cx:-98,cy:212,r:16},H);mk('circle',{cx:98,cy:212,r:16},H);P.hands=[H,'fill','var(--ink)'];return P};
const ALL=['arms','legs','feet','chest','belly','head','hands'];
const paint=(P,ns,on)=>ns.forEach(n=>{const q=P[n];q[0].setAttribute(q[1],on?'var(--gain)':q[2])});
const hand=(g,x,y,k,f)=>{const G=mk('g',{transform:`translate(${x} ${y}) scale(${k*f} ${k})`,fill:'var(--ink)'},g);
mk('rect',{x:-50,y:-20,width:100,height:110,rx:36},G);
[[-48,80],[-23,95],[2,90],[27,70]].forEach(([a,h])=>mk('rect',{x:a,y:-h,width:21,height:h+20,rx:10.5},G));
mk('path',{d:'M-24 66L-58 34Q-72 20-76 2',fill:'none',stroke:'var(--ink)','stroke-width':24,'stroke-linecap':'round','stroke-linejoin':'round'},G);
return mk('circle',{cx:0,cy:30,r:30,fill:'var(--gain)',opacity:0},G)};
const bust=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r,class:cls},g);mk('path',{d:`M${x-r*1.5} ${y+r*4.2}v-${r*1.3}a${r*1.5} ${r*1.5} 0 0 1 ${r*3} 0v${r*1.3}z`,class:cls},g)};
const R=(i,n)=>{const v=Math.sin(i*12.9898+n*78.233)*43758.5453;return v-Math.floor(v)};

const D0=[0,1,2,3,4,5].map(()=>mk('circle',{r:9,class:'loss'},$('dots0'))), F0=fig($('fg0'),1300,330,.9);

fig($('wk1'),380,500,.8); const F1=fig($('bo1f'),1190,420,.8);
for(let i=0;i<6;i++)mk('ellipse',{cx:470+i*50,cy:i%2?792:798,rx:11,ry:5,fill:'var(--muted)','fill-opacity':.35},$('st1'));

const F2=fig($('fg2'),1000,330,1.1), DT2=mk('g',{},F2.g), DD=[];
for(let i=0;i<48;i++){const z=i%5,s=R(i,3)<.5?-1:1,a=R(i,4);let x,y;
if(z==0){x=(R(i,1)-.5)*44;y=(R(i,2)-.5)*44}else if(z<3){x=(R(i,1)-.5)*76;y=62+R(i,2)*150}else if(z==3){x=s*(58+36*a);y=76+120*a}else{x=s*(24+6*a);y=224+132*a}
DD.push(mk('circle',{cx:x.toFixed(1),cy:y.toFixed(1),r:4,fill:'var(--gain)'},DT2))}

const F3=fig($('fg3'),800,300,.8), HR3=mk('g',{},$('fg3'));
mk('path',{d:'M0 30C-40 5-40-25-20-28C-8-30 0-20 0-14C0-20 8-30 20-28C40-25 40 5 0 30Z',class:'gain'},HR3);

// hands placed 300px apart; rings max r 125 so they never meet
const HX4=[1040,1340];
const G4=HX4.map((x,i)=>hand($('hd4'),x,470,1.1,i?1:-1)), RG4=[], TK4=[];
HX4.forEach(x=>{for(let j=0;j<2;j++)RG4.push([mk('circle',{cx:x,cy:460,fill:'none',stroke:'var(--gain)','stroke-width':4},$('bz4')),j]);
for(let j=0;j<8;j++)TK4.push([mk('line',{stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('bz4')),x,j*Math.PI/4+.4])});

const F5=fig($('fg5'),560,250,1.4);
const L5=['Feet','Legs','Arms','Belly','Chest','Whole body'].map((s,i)=>{const g=mk('g',{},$('ls5')),y=310+i*72,
c=mk('circle',{cx:980,cy:y-12,r:14,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
mk('text',{x:1016,y,'font-size':36,class:'d5'},g).textContent=s;return [g,c]});

const F6=fig($('fg6'),1180,330,.8);
const RT6=['M1180 640C1180 700 1080 700 1020 760','M1180 640C1180 710 1150 740 1130 770','M1180 640C1180 710 1210 740 1240 770','M1180 640C1180 700 1290 700 1350 760']
.map(d=>mk('path',{d,fill:'none',stroke:'var(--gain)','stroke-width':6,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},$('rt6')));
const CD6=[0,1,2].map(()=>{const g=mk('g',{},$('cd6'));[[0,0,18],[22,-8,22],[44,0,18]].forEach(c=>mk('circle',{cx:c[0],cy:c[1],r:c[2],fill:'var(--loss)','fill-opacity':.35},g));return g});

bust($('pp7a'),250,420,34,'ink');bust($('pp7a'),410,420,34,'ink');
[670,760,850,940].forEach((x,i)=>bust($('pp7b'),x,430,24,i<3?'ink':'gain'));
bust($('pp7c'),1270,470,28,'ink');

const P8=[[1220,-1],[1400,1]].map(([x,f])=>hand($('pm8'),x,520,.8,f));