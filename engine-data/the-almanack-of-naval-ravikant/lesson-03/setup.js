const fig=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g);return g};
const zz=(g,on,t)=>[...g.children].forEach((z,i)=>z.setAttribute('opacity',on?(.3+.7*(.5+.5*Math.sin(t*2.5-i*1.3))).toFixed(2):0));
const st=(k)=>({fill:'none',stroke:'var(--'+k+')','stroke-linecap':'round','stroke-linejoin':'round'});
const G=$('gear');mk('circle',Object.assign(st('gain'),{cx:1320,cy:410,r:30,'stroke-width':10}),G);
for(let i=0;i<8;i++){const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);mk('path',Object.assign(st('gain'),{d:'M'+(1320+36*c).toFixed(1)+' '+(410+36*s).toFixed(1)+'L'+(1320+50*c).toFixed(1)+' '+(410+50*s).toFixed(1),'stroke-width':12}),G)}
const BASE1=740;
const BR=[0,1,2,3].map(i=>[mk('rect',{x:972+i*50,width:36,height:0,class:'ink'},$('bars')),35*(i+1)]).concat([0,1,2,3,4].map(i=>[mk('rect',{x:1210+i*44,width:34,height:0,class:'gain'},$('bars')),10*2**i]));
fig($('mgr'),800,300,30,'gain');
const WK=[];for(let j=0;j<2;j++)for(let i=0;i<6;i++){const x=450+i*140,y=500+j*160;WK.push(fig(mk('g',{},$('wk')),x,y,22,'ink'));if(!j)mk('path',{d:'M800 432L'+x+' '+(y-26),class:'s-line','stroke-width':3},$('lk2'))}
const CN=[];[0,1,2].forEach(s=>{for(let j=0;j<3*(s+1);j++)CN.push(mk('rect',{x:540+s*110,y:654-j*20,width:80,height:16,rx:8,class:'gain'},$('coins')))});
fig($('bkf'),1150,380,34,'ink');
const CP=[];for(let r=0;r<3;r++)for(let i=0;i<4;i++){const x=580+i*84,y=300+r*100,g=mk('g',{},$('cps'));mk('rect',{x:x,y:y,width:60,height:76,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('path',Object.assign(st('gain'),{d:'M'+(x+12)+' '+(y+24)+'h36M'+(x+12)+' '+(y+42)+'h24','stroke-width':5}),g);CP.push([g,270-x,362-y])}
const RB=[];for(let r=0;r<3;r++)for(let i=0;i<5;i++){const x=185+i*90,y=270+r*110,g=mk('g',{},$('rob'));mk('path',{d:'M'+x+' '+y+'v-14',class:'s-ink','stroke-width':4},g);mk('rect',{x:x-25,y:y,width:50,height:40,rx:8,class:'ink'},g);[-10,10].forEach(d=>mk('circle',{cx:x+d,cy:y+20,r:5,class:'gain'},g));mk('rect',{x:x-20,y:y+46,width:40,height:34,rx:6,class:'ink'},g);RB.push(g)}
const US=[];for(let i=0;i<48;i++){const a=i*2.4,r=110+(i*37)%130,x=(1240+r*Math.cos(a)).toFixed(0),y=(480+r*Math.sin(a)*.95).toFixed(0);US.push([mk('path',{d:'M1240 480L'+x+' '+y,class:'s-line','stroke-width':2},$('usr')),mk('circle',{cx:x,cy:y,r:9,class:'ink'},$('usr'))])}
const AU=[];for(let j=0;j<4;j++)for(let i=0;i<8;i++)AU.push(mk('circle',{cx:330+i*36,cy:480+j*40,r:12,class:'gain'},$('aud')));
const TW=[0,1,2].map(k=>{const y=290+k*110,g=mk('g',{},$('tw'));mk('rect',{x:822,y:y,width:146,height:80,rx:10,fill:'none',stroke:'var(--line)','stroke-width':4},g);mk('circle',{cx:842,cy:y+22,r:10,class:'gain'},g);mk('path',Object.assign(st('ink'),{d:'M862 '+(y+24)+'h88M842 '+(y+52)+'h108','stroke-width':5}),g);if(k)mk('path',{d:'M842 '+(y-30)+'v30',class:'s-gain','stroke-width':4},g);return g});
const GD=[];for(let i=0;i<20;i++){const a=i*2.4,r=30+(i*53)%120;GD.push(mk('circle',{cx:(1270+r*Math.cos(a)).toFixed(0),cy:(460+r*Math.sin(a)).toFixed(0),r:9,class:'gain'},$('gd')))}
const C7=['ARTICLE','VIDEO','TOOL'].map((s,i)=>{const x=300+i*160,g=mk('g',{},$('cards7'));mk('rect',{x:x,y:360,width:130,height:110,rx:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},g);
if(i==1)mk('path',{d:'M'+(x+52)+' 388l34 27-34 27z',class:'gain'},g);else mk('path',Object.assign(st('gain'),{d:i?'M'+(x+50)+' 390l-22 25 22 25M'+(x+80)+' 390l22 25-22 25':'M'+(x+24)+' 390h82M'+(x+24)+' 414h82M'+(x+24)+' 438h50','stroke-width':6}),g);
mk('text',{x:x+65,y:540,'font-size':18,'text-anchor':'middle',class:'m'},g).textContent=s;return g});
fig($('nb'),200,380,26,'gain');
const DC=[];for(let i=0;i<12;i++)DC.push(mk('rect',{x:136+i*72,y:600,width:48,height:62,rx:6,fill:i==11?'var(--gain)':'var(--stage)',stroke:i==11?'var(--gain)':'var(--ink)','stroke-width':4},$('docs')));