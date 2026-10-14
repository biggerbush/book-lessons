const fig=(g,x,y,r,c)=>{const e=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},e);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},e);return e};
const setc=(e,c)=>e.childNodes.forEach(n=>n.setAttribute('class',c));
const T=(g,x,y,s,txt,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:'m'},a||{}),g);e.textContent=txt;return e};
fig($('inner'),1320,330,24,'gain');
for(let i=0;i<6;i++)mk('path',{d:'M'+(1220+i*40)+' 250V580',class:'s-ink','stroke-width':6},$('bars'));
fig($('pr'),300,330,40,'ink');
const CHP=['CLOTHES','HAIR','NAME','A SAY'].map((s,i)=>{const y=250+i*66,g=mk('g',{},$('chips'));mk('rect',{x:410,y:y,width:210,height:48,rx:24,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,515,y+32,20,s,{'text-anchor':'middle'});const k=mk('path',{d:'M426 '+(y+24)+'H604',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round'},g);return [g,k]});
for(let i=0;i<12;i++){const a=i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(870+100*c).toFixed(1)+' '+(390+100*s).toFixed(1)+'L'+(870+112*c).toFixed(1)+' '+(390+112*s).toFixed(1),class:'s-ink','stroke-width':4},$('ticks'))}
[['WAKE',870,256,'middle'],['EAT',1004,397,'start'],['WORK',870,540,'middle'],['SLEEP',736,397,'end']].forEach(q=>T($('clkl'),q[1],q[2],20,q[0],{'text-anchor':q[3]}));
const ROWS=[];for(let i=0;i<8;i++){const g=mk('g',{},$('rows'));T(g,1150,300+i*36,18,'NO.');mk('path',{d:'M1200 '+(294+i*36)+'H1430',stroke:i==4?'var(--loss)':'var(--line)','stroke-width':5,'stroke-linecap':'round'},g);ROWS.push(g)}
const HT=[];for(let i=0;i<9;i++){const x=290+i*126;fig($('ups'),x,382,16,'ink');HT.push([mk('circle',{cx:x,cy:348,r:7,class:'gain'},$('ups')),x])}
fig($('hutf'),1290,596,22,'ink');
const WK=fig($('walk'),0,590,22,'gain');
const PR=[['HUNGER',140,500,380,500,140,470,'start'],['COLD',520,250,520,384,548,276,'start'],['FEAR',900,500,660,500,900,470,'end']].map(q=>{const g=mk('g',{},$('press')),dx=Math.sign(q[3]-q[1]),dy=Math.sign(q[4]-q[2]),st={stroke:'var(--loss)','stroke-width':8,'stroke-linecap':'round','stroke-linejoin':'round',fill:'none'};
  mk('path',Object.assign({d:'M'+q[1]+' '+q[2]+'L'+q[3]+' '+q[4]},st),g);
  mk('path',Object.assign({d:'M'+(q[3]-dx*18-dy*16)+' '+(q[4]-dy*18-dx*16)+'L'+q[3]+' '+q[4]+'L'+(q[3]-dx*18+dy*16)+' '+(q[4]-dy*18+dx*16)},st),g);
  T(g,q[5],q[6],22,q[0],{'text-anchor':q[7],style:'fill:var(--loss)'});return [g,dx,dy]});
const FA=fig($('fa'),460,420,44,'ink'),FB=fig($('fb'),780,420,44,'ink');
const CD=['THE DELAY','THE DIAGNOSIS','THE RUDE EMAIL'].map((s,i)=>{const y=240+i*140,g=mk('g',{},$('cards'));mk('rect',{x:120,y:y,width:420,height:110,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);T(g,330,y+62,20,s);return g});
const CR=mk('g',{},CD[0]);for(let j=0;j<3;j++){const x=148+j*58;mk('rect',{x:x,y:280,width:48,height:22,rx:8,class:'ink'},CR);[12,36].forEach(w=>mk('circle',{cx:x+w,cy:304,r:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},CR))}
mk('rect',{x:190,y:400,width:56,height:72,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},CD[1]);mk('path',{d:'M218 420v32M202 436h32',stroke:'var(--loss)','stroke-width':6,'stroke-linecap':'round'},CD[1]);
mk('rect',{x:172,y:545,width:96,height:62,rx:6,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},CD[2]);mk('path',{d:'M172 545l48 34 48-34',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},CD[2]);
fig($('mf'),1220,380,34,'gain');
for(let i=0;i<11;i++)mk('circle',{cx:150,cy:270+i*50,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('spi'));
const WR=[370,530,690].map((y,i)=>{let d='M200 '+y;for(let j=0;j<16;j++)d+=' q10 '+(j%2?12:-14)+' 20 0 q10 '+(j%3?-10:8)+' 20 0';return mk('path',{d:d,fill:'none',stroke:['var(--ink)','var(--muted)','var(--gain)'][i],'stroke-width':5,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},$('scr'))});
for(let i=1;i<6;i++){const a=Math.PI+i*Math.PI/6,c=Math.cos(a),s=Math.sin(a);mk('path',{d:'M'+(1240+115*c).toFixed(1)+' '+(560+115*s).toFixed(1)+'L'+(1240+155*c).toFixed(1)+' '+(560+155*s).toFixed(1),class:'s-gain','stroke-width':7,'stroke-linecap':'round'},$('rays'))}