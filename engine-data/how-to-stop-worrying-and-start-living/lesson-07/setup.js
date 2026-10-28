<<<<<<< HEAD
const pg=(par,x,y,r,cls)=>{const g=mk('g',{class:cls},par);mk('circle',{cx:x,cy:y,r:r},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},g);return g};
const HP='M0 18C-30-2-32-22-15-26C-7-28-2-22 0-16C2-22 7-28 15-26C32-22 30-2 0 18Z';
const cloud=(g,x,y,s)=>[[-1.2,0,1],[0,-.6,1.2],[1.2,0,1],[0,.4,1]].forEach(c=>mk('circle',{cx:x+c[0]*s,cy:y+c[1]*s,r:c[2]*s,class:'loss'},g));
const tgEl=$('tg');pg(tgEl,1200,470,40,'ink');const TR=pg(tgEl,1410,470,40,'ink');cloud($('tcl'),1200,350,26);tgEl.appendChild($('th'));
pg($('rp'),380,620,30,'ink');cloud($('cloud'),0,0,50);
pg($('sp'),1040,620,28,'ink');const OT=[1250,1340,1430].map(x=>pg($('sp'),x,600,24,'ink'));
pg($('doc'),300,450,50,'ink');
const DY=[];for(let i=0;i<14;i++){const x=660+(i%7)*112,y=380+Math.floor(i/7)*90;mk('rect',{x:x,y:y,width:90,height:70,rx:10,fill:'none',class:'s-line','stroke-width':4},$('days'));DY.push(mk('path',{d:'M'+(x+24)+' '+(y+36)+'l14 14 28-28',fill:'none',class:'s-gain','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},$('days')))}
const BR=[[240,330,55],[400,290,60],[520,360,45]].map(([cx,cy,R])=>{let d='';for(let k=0;k<16;k++){const a=k*Math.PI/8,rr=k%2?R*.45:R;d+=(k?'L':'M')+(cx+rr*Math.cos(a)).toFixed(0)+' '+(cy+rr*Math.sin(a)).toFixed(0)}return [mk('path',{d:d+'Z',class:'loss'},$('bursts')),cx,cy]});
const FM=[270,380,490,600].map(y=>{mk('path',{d:'M1000 560L1266 '+(y+16),class:'s-line','stroke-width':4,'stroke-dasharray':'8 8'},$('fam'));pg($('fam'),1300,y,18,'ink');return [1266,y+16]});
const FD=FM.map(()=>mk('circle',{r:9,class:'gain'},$('fdots')));
pg($('comf'),360,470,36,'gain');cloud($('cl5'),360,340,28);
const CA=[[640,330],[700,480],[640,630]];CA.forEach(c=>pg($('comf'),c[0],c[1],22,'ink'));
const H5=CA.map(()=>mk('path',{d:HP,class:'gain'},$('hearts')));
mk('circle',{cx:0,cy:0,r:70,class:'gain'},$('sun'));for(let i=0;i<8;i++){const a=i*Math.PI/4;mk('path',{d:'M'+(90*Math.cos(a)).toFixed(0)+' '+(90*Math.sin(a)).toFixed(0)+'L'+(120*Math.cos(a)).toFixed(0)+' '+(120*Math.sin(a)).toFixed(0),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('sun'))}
let gd='';for(let k=0;k<40;k++){const a=(k-.5)*Math.PI*2/40,R=k%4<2?110:88;gd+=(k?'L':'M')+(R*Math.cos(a)).toFixed(1)+' '+(R*Math.sin(a)).toFixed(1)}$('gear').setAttribute('d',gd+'Z');
mk('circle',{cx:300,cy:505,r:32,fill:'var(--stage)'},$('gr'));
const RG=[0,1,2,3].map(()=>mk('circle',{cx:1110,cy:520,fill:'none',class:'s-gain','stroke-width':5},$('rings')));
const PP=[];for(let i=0;i<8;i++){const a=i*Math.PI/4+Math.PI/8,x=1110+250*Math.cos(a),y=520+250*Math.sin(a)-20;PP.push([pg($('ppl'),x,y,13,'ink'),x,y])}
const RD=PP.map(()=>mk('circle',{r:7,class:'gain'},$('rdots')));
const CC=[];for(let i=0;i<14;i++)CC.push(mk('rect',{x:1096+(i%7)*54,y:316+Math.floor(i/7)*72,width:48,height:48,rx:8,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('cells')));
=======
const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const T=(g,x,y,s,c,txt,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},ex||{}),g);e.textContent=txt;return e};
const arw=(g,x1,y1,x2,y2,c,w)=>{const a=Math.atan2(y2-y1,x2-x1),h=18,f=v=>v.toFixed(1);
  mk('path',{d:'M'+f(x1)+' '+f(y1)+'L'+f(x2)+' '+f(y2)+'M'+f(x2-h*Math.cos(a-.5))+' '+f(y2-h*Math.sin(a-.5))+'L'+f(x2)+' '+f(y2)+'L'+f(x2-h*Math.cos(a+.5))+' '+f(y2-h*Math.sin(a+.5)),class:c,fill:'none','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round'},g)};
P($('tpp'),1250,420,36,'ink'); P($('tp2'),1420,470,26,'ink');
let sd='';for(let i=0;i<=70;i++){const a=i*.55,r=26+20*Math.sin(i*1.3);sd+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)*.8).toFixed(1)}$('scrib').setAttribute('d',sd);
P($('me1'),330,520,40,'ink');
sd='';for(let i=0;i<=220;i++){const a=i*.11,r=180-i*.5;sd+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}$('spi').setAttribute('d',sd);
[-150,-90,-30,30,150].forEach(d=>{const a=d*Math.PI/180;arw($('outA'),330+130*Math.cos(a),584+130*Math.sin(a),330+238*Math.cos(a),584+238*Math.sin(a),'s-gain',7)});
P($('adp'),240,400,46,'ink'); P($('sfp'),530,440,18,'loss');
const RX=[];for(let i=0;i<14;i++)RX.push(mk('circle',{cx:770+i*46,cy:455,r:12},$('rxd')));
const BM=[0,1,2].map(i=>mk('circle',{cx:950+i*80,cy:260,r:9,class:'ink'},$('bmb')));
const CF=[1220,1310,1400].map(x=>{const g=mk('g',{},$('calls'));mk('path',{d:'M884 566Q1060 480 '+x+' 572',fill:'none',class:'s-gain','stroke-width':4,'stroke-dasharray':'8 8'},g);P(g,x,600,22,'ink');return g});
const CP=[...$('calls').querySelectorAll('path[stroke-dasharray]')];
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(300+110*Math.cos(a)).toFixed(1)+' '+(420+110*Math.sin(a)).toFixed(1)+'L'+(300+122*Math.cos(a)).toFixed(1)+' '+(420+122*Math.sin(a)).toFixed(1),class:'s-ink','stroke-width':5,'stroke-linecap':'round'},$('tks'))}
const CD=[];for(let i=0;i<12;i++)CD.push(mk('circle',{cx:190+(i%6)*44,cy:640+Math.floor(i/6)*40,r:12},$('cdots')));
P($('stp'),800,330,40,'gain');
P($('carp'),360,460,44,'ink'); P($('clp'),1160,460,44,'ink'); P($('y5p'),760,460,44,'gain');
const WA=[-160,-125,-90,-55,-20].map(d=>d*Math.PI/180), WR=WA.map(()=>mk('circle',{r:12,class:'loss'},$('wor')));
const BQ=['Your day?','Family?','Work?'].map((s,i)=>{const x=560+i*200,g=mk('g',{},$('bq'));mk('rect',{x:x-90,y:250,width:180,height:64,rx:32,fill:'var(--stage)',stroke:'var(--gain)','stroke-width':4},g);T(g,x,292,28,'d5',s,{'text-anchor':'middle'});return g});
arw($('harr'),930,430,1050,430,'s-gain',6);
const TL=[[120,240,'HELP SOMEONE',1],[530,240,'KEEPS YOU BUSY'],[120,410,'PROBLEMS IN PROPORTION'],[530,410,'COUNT WHAT YOU HAVE']].map(([x,y,s,g])=>{const e=mk('g',{},$('tiles'));
  mk('rect',{x:x,y:y,width:400,height:150,rx:16,fill:g?'var(--gain)':'var(--stage)',stroke:g?'var(--gain)':'var(--ink)','stroke-width':5},e);
  T(e,x+200,y+83,20,'m',s,{'text-anchor':'middle',style:'letter-spacing:.04em;fill:var('+(g?'--on-gain':'--ink')+')'});return e});
const KN=[[525,315,0],[320,400,0],[730,400,1],[525,485,2]].map(([x,y,o])=>[mk('circle',{cx:x,cy:y,r:20,fill:o?'var(--stage)':'var(--gain)',stroke:o?'var(--ink)':'var(--gain)','stroke-width':5},$('knobs')),o]);
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(100*Math.cos(a)).toFixed(1)+' '+(100*Math.sin(a)).toFixed(1)+'L'+(130*Math.cos(a)).toFixed(1)+' '+(130*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('sunr'))}
const DD=[];for(let i=0;i<14;i++)DD.push(mk('circle',{cx:160+i*52,cy:780,r:14},$('dd')));
>>>>>>> e7c885f (Draft 'How to Stop Worrying and Start Living': lesson 7 of 7)
