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