const fig=(g,x,y,r,cls)=>{const o=cls?{class:cls}:{};mk('circle',Object.assign({cx:x,cy:y,r:r},o),g);mk('path',Object.assign({d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z'},o),g);return g};
const grp=(par,f)=>mk('g',{fill:f||'var(--ink)'},par);
const arw=(g,x1,y1,x2,y2,st,w)=>{const a=Math.atan2(y2-y1,x2-x1),h=16,f=v=>v.toFixed(1);mk('path',{d:'M'+f(x1)+' '+f(y1)+'L'+f(x2)+' '+f(y2)+'M'+f(x2-h*Math.cos(a-.5))+' '+f(y2-h*Math.sin(a-.5))+'L'+f(x2)+' '+f(y2)+'L'+f(x2-h*Math.cos(a+.5))+' '+f(y2-h*Math.sin(a+.5)),fill:'none',stroke:st,'stroke-width':w||5,'stroke-linecap':'round','stroke-linejoin':'round'},g)};
fig(grp($('tcrowd')),1150,560,22);fig(grp($('tcrowd')),1440,560,22);fig(grp($('tcrowd'),'var(--gain)'),1300,380,32);
fig(grp($('boss1')),300,440,48);
const DK=[0,1,2,3,4].map(i=>{const x=700+i*170,g=grp($('desk1'));fig(g,x,520,22);mk('rect',{x:x-62,y:604,width:124,height:16,rx:4,class:'ink'},$('desk1'));return g});
arw($('blame1'),390,560,610,560,'var(--loss)',6);
const RG=[],GC=['var(--gain)','var(--loss)','var(--ink)','var(--muted)'];
for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4,c=Math.cos(a),s=Math.sin(a),g=grp($('ring2'));fig(g,800+250*c,520+250*s-28,18);RG.push(g);arw($('arr2'),800+190*c,520+190*s,800+100*c,520+100*s,'var(--loss)',5)}
const MAN=grp($('man2'));fig(MAN,800,480,26);
arw($('mail3a'),690,320,370,440,'var(--muted)',5);arw($('mail3a'),910,320,1230,440,'var(--muted)',5);
const F3=[[300,'M286 482q14 12 28 0'],[1300,'M1286 490q14-12 28 0']].map(q=>{const g=grp($('p3'));fig(g,q[0],470,36);mk('path',{d:q[1],fill:'none',stroke:'var(--stage)','stroke-width':5,'stroke-linecap':'round'},g);return g});
const W4=[0,1,2,3].map(()=>mk('path',{d:'M0 380q44 60 0 120',fill:'none',stroke:'var(--muted)','stroke-width':6,'stroke-linecap':'round'},$('wav4')));
arw($('tgt4a'),620,630,530,700,'var(--loss)',6);
const COL=['var(--ink)','var(--gain)','var(--muted)','var(--loss)'],CC=[[300,370],[680,370],[300,620],[680,620]];
const DOT=[];for(let i=0;i<36;i++){const c=Math.floor(i/9),j=i%9;DOT.push({el:mk('circle',{r:14},$('dots5')),sx:140+(i*263)%740,sy:280+(i*157)%480,tx:CC[c][0]+(j%3-1)*40,ty:CC[c][1]+(Math.floor(j/3)-1)*40,c:c})}
const LB=['D · Red','I · Yellow','S · Green','C · Blue'].map((s,c)=>{const tx=mk('text',{x:CC[c][0],y:CC[c][1]+96,'font-size':32,'text-anchor':'middle',class:'d'},$('lab5'));tx.textContent=s;return tx});
let a0=-Math.PI/2;const SL5=[.45,.3,.15,.1].map((f,i)=>{const a1=a0+f*2*Math.PI,R=170,d='M0 0L'+(R*Math.cos(a0)).toFixed(1)+' '+(R*Math.sin(a0)).toFixed(1)+'A'+R+' '+R+' 0 '+(f>.5?1:0)+' 1 '+(R*Math.cos(a1)).toFixed(1)+' '+(R*Math.sin(a1)).toFixed(1)+'z';a0=a1;return mk('path',{d:d,fill:COL[[1,3,0,2][i]],stroke:'var(--stage)','stroke-width':4},$('blend5i'))});
fig(grp($('box6p')),410,370,30);
const IN6=grp($('in6'));fig(IN6,1100,410,26);
fig(grp($('l7p')),240,330,24);fig(grp($('l7p'),'var(--loss)'),640,330,24);arw($('l7p'),290,385,410,385,'var(--ink)',5);
fig(grp($('r7p')),960,330,24);fig(grp($('r7p')),1360,330,24);arw($('r7p'),1010,380,1300,380,'var(--gain)',5);arw($('r7p'),1300,415,1010,415,'var(--gain)',5);
fig(grp($('br7p'),'var(--loss)'),320,584,18);fig(grp($('br7p'),'var(--gain)'),1280,584,18);
fig(grp($('g8'),'var(--loss)'),1300,210,20);fig(grp($('g8'),'var(--gain)'),1420,210,20);