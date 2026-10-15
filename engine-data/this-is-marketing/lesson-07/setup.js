const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return g};
const st=i=>SC[i][0]/K;
const WV=[0,1,2].map(i=>mk('path',{d:'M'+(1360+i*34)+' '+(230-i*14)+'q'+(24+i*8)+' '+(40+i*14)+' 0 '+(80+i*28),fill:'none',class:'s-loss','stroke-width':7,'stroke-linecap':'round'},$('waves')));
fig($('guest'),1335,650,22,'gain');
fig($('tp'),420,540,20,'gain');
for(let i=0;i<18;i++)fig(mk('g',{},$('crowd1')),900+(i%6)*104,400+Math.floor(i/6)*120,18,'ink');
const CP=['MESSAGE','PRODUCT','EMAIL'].map((s,i)=>{const y=420+i*100,g=mk('g',{},$('chips2'));
  mk('rect',{x:600,y:y-32,width:220,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  const tx=mk('text',{x:710,y:y+8,'font-size':22,'text-anchor':'middle',class:'m'},g);tx.textContent=s;
  mk('path',{d:'M836 '+y+'L1300 '+(436+(i-1)*22),fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-dasharray':'10 10'},$('arr2'));return [g,y]});
const JK=[[600,700,-8],[715,706,5],[830,698,-4],[655,630,10],[775,636,-6],[880,630,7],[715,562,-12],[830,566,4]].map(([x,y,a])=>{const g=mk('g',{},$('junk'));
  mk('rect',{x:x-55,y:y-35,width:110,height:70,rx:6,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':5},g);
  mk('path',{d:'M'+(x-55)+' '+(y-35)+'l55 38 55-38',fill:'none',stroke:'var(--loss)','stroke-width':5},g);return [g,x,y,a]});
fig($('hfig'),1260,600,34,'gain');
const PR=[];for(let i=0;i<12;i++){const x=1080+(i%4)*95,y=330+Math.floor(i/4)*72,g=mk('g',{},$('promo'));
  mk('rect',{x:x,y:y,width:80,height:52,rx:5,fill:'var(--stage)',stroke:'var(--loss)','stroke-width':4},g);
  mk('path',{d:'M'+x+' '+y+'l40 28 40-28',fill:'none',stroke:'var(--loss)','stroke-width':4},g);PR.push(g)}
fig($('shrg'),1410,722,22,'ink');
const BR=[];for(let r=0;r<6;r++)for(let c=0;c<5;c++){const x=720+(r%2?62:0)+c*124,y=760-(r+1)*60+4;BR.push([mk('rect',{x:x,y:y,width:120,height:56,rx:4,fill:'var(--ink)'},$('wall')),r,c,x+60,y+28])}
const CRK=mk('path',{d:'M1062 646l14 18-12 12 16 24',fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('wall'));
const RG=[0,1,2].map(()=>mk('ellipse',{cx:800,cy:540,fill:'none',stroke:'var(--gain)','stroke-width':5},$('rings')));
const FR7=[0,60,120,180,240,300].map(d=>{const a=d*Math.PI/180;return fig(mk('g',{},$('fr7')),800+420*Math.cos(a),465+200*Math.sin(a),22,'ink')});
const cg=fig(mk('g',{},$('cust')),800,480,34,'gain');$('cust').insertBefore(cg,$('cust').firstChild);
const DOT=[870,900,930].map(x=>mk('circle',{cx:x,cy:410,r:7,class:'gain'},$('bub7')));