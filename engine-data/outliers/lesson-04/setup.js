const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const TX=(g,x,y,s,fs,cls,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':fs,class:cls,'text-anchor':a||'start'},g);if(st)e.setAttribute('style',st);e.textContent=s;return e};
const star=(g,cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}mk('path',{d:d+'z',class:'gain'},g)};
const PN=[['Bill Gates','','',1955],['Steve Jobs','','',1955],['Eric Schmidt','LATER LED GOOGLE','',1955],['Bill Joy','CO-FOUNDER OF','SUN MICROSYSTEMS',1954]];
const cards=PN.map((q,i)=>{const x=120+i*350,c=x+155,g=mk('g',{},$('cards'));mk('rect',{x:x,y:230,width:310,height:430,rx:18,fill:'var(--stage)',stroke:'var(--line)','stroke-width':3},g);fig(g,c,280,34,'ink');TX(g,c,468,q[0],36,'d5','middle');if(q[1])TX(g,c,502,q[1],18,'m','middle');if(q[2])TX(g,c,528,q[2],18,'m','middle');TX(g,c,564,'BORN',18,'m','middle');TX(g,c,646,String(q[3]),66,'d','middle','fill:var(--gain)');return g});
const LT=[];for(let i=0;i<8;i++){LT.push(mk('circle',{cx:230+i*34,cy:420,r:9,class:'gain'},$('lights')));mk('rect',{x:224+i*34,y:470,width:12,height:34,rx:3,class:'ink'},$('lights'))}
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(30*Math.cos(a)).toFixed(1)+' '+(30*Math.sin(a)).toFixed(1)+'L'+(90*Math.cos(a)).toFixed(1)+' '+(90*Math.sin(a)).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}
mk('circle',{cx:0,cy:0,r:22,class:'gain'},$('rays'));
fig($('oldf'),260,380,40,'ink');fig($('fam'),1000,470,22,'ink');fig($('fam'),1070,470,22,'ink');fig($('fam'),1125,510,15,'ink');
for(let i=0;i<5;i++)mk('circle',{cx:1280+i*30,cy:510,r:8,class:'gain'},$('toyl'));
fig($('kidf'),340,400,26,'ink');
const RU=[];for(let i=0;i<4;i++)RU.push(mk('circle',{cy:640,r:16,class:'gain'},$('runs')));
for(let y=1930;y<=1980;y+=10){const x=200+(y-1930)*24;mk('path',{d:'M'+x+' 590v20',class:'s-ink','stroke-width':5},$('ticks'));TX($('ticks'),x,646,String(y),22,'m','middle')}
fig($('yaf'),800,300,26,'gain');
const PT=[[812,580],[812,550],[812,520],[776,580]],PI=PT.map(()=>mk('circle',{cx:0,cy:0,r:12,class:'gain',stroke:'var(--stage)','stroke-width':3},$('pins')));
const HL=[2,9,17,20,28,31,36,44,47,53,58,62,66,71],GD=[];for(let i=0;i<75;i++)GD.push(mk('circle',{cx:150+(i%15)*44,cy:260+Math.floor(i/15)*44,r:16},$('grid')));
for(let x=160;x<=1440;x+=40)mk('path',{d:'M'+x+' 663v12',class:'s-line','stroke-width':6},$('ties'));
fig($('talf'),260,380,40,'ink');star($('talf'),260,290,40);
for(let i=0;i<12;i++){const a=i*Math.PI/6;mk('path',{d:'M'+(760+112*Math.cos(a)).toFixed(1)+' '+(440+112*Math.sin(a)).toFixed(1)+'L'+(760+128*Math.cos(a)).toFixed(1)+' '+(440+128*Math.sin(a)).toFixed(1),class:'s-ink','stroke-width':i%3?4:8,'stroke-linecap':'round'},$('cticks'))}
fig($('nearf'),1050,480,22,'ink');