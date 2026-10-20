const fig=(g,x,y,r,cls,o)=>{const a={class:cls};if(o)a['fill-opacity']=o;mk('circle',Object.assign({cx:x,cy:y,r:r},a),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},a),g)};
const T=(g,x,y,s,txt,cls)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:cls},g);e.textContent=txt;return e};
fig($('owner'),1180,500,18,'ink');fig($('guest'),1430,500,16,'gain');
const CS=[[1050,5],[1094,7],[1262,6],[1306,4]].map(([x,n])=>{const g=mk('g',{},$('coins'));for(let i=0;i<n;i++)mk('rect',{x:x,y:588-i*12,width:34,height:10,rx:3,class:'loss'},g);return g});
const BL=[];for(let i=0;i<13;i++){const s=i/12,a=(1-s)*(1-s),b=2*s*(1-s),c=s*s;BL.push(mk('circle',{cx:a*140+b*800+c*1460,cy:a*250+b*330+c*250+10,r:9,class:i%2?'ink':'gain'},$('bulbs')))}
fig($('writers'),260,380,40,'ink');fig($('writers'),440,380,40,'gain');fig($('host'),1200,360,50,'loss');
fig($('heller'),300,420,50,'gain');fig($('host2'),1360,420,40,'ink',.35);
const RG=[];for(let i=0;i<10;i++)RG.push(mk('path',{d:'M700 '+(800-60*i)+'h120',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('rungs')));
fig($('climb'),760,-84,20,'gain');
fig($('you4'),160,620,26,'ink');fig($('them4'),1430,620,26,'ink');
fig($('sen'),260,400,50,'ink');
const RE=[[480,620],[640,620],[880,620],[1040,620]];RE.forEach(e=>mk('path',{d:'M760 850L'+e[0]+' '+e[1],class:'s-line','stroke-width':8,'stroke-linecap':'round'},$('roads')));
const RC=RE.map(()=>mk('circle',{r:10,class:'ink'},$('racers')));
const VG=['Time with family','Creative freedom','Mastering a craft'].map((s,i)=>{const g=mk('g',{},$('vals'));mk('path',{d:'M160 '+(386+i*100)+'l14 14 26-30',class:'s-gain',fill:'none','stroke-width':7,'stroke-linecap':'round','stroke-linejoin':'round'},g);T(g,220,400+i*100,40,s,'d5');return g});
const PZ=['Bigger title','Nicer house','More praise'].map((s,i)=>{const g=mk('g',{},$('prz'));T(g,760,400+i*100,40,s,'d5').setAttribute('fill-opacity',.6);const l=mk('line',{x1:750,y1:386+i*100,x2:750,y2:386+i*100,class:'s-loss','stroke-width':6,'stroke-linecap':'round'},g);return [g,l]});
for(let i=0;i<8;i++)for(let j=0;j<2;j++)mk('rect',{x:890+j*10,y:560+i*10,width:10,height:10,fill:(i+j)%2?'var(--ink)':'var(--stage)'},$('chk'));
fig($('walker'),0,499,24,'gain');
const PL=[];for(let i=0;i<5;i++)PL.push(mk('line',{x1:1210,y1:330+i*50,x2:1210,y2:330+i*50,class:'s-line','stroke-width':6,'stroke-linecap':'round'},$('plines')));