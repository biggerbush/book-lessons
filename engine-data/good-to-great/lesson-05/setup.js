const T=(g,x,y,s,a)=>{const e=mk('text',Object.assign({x:x,y:y},a),g);e.textContent=s;return e};
const DR=(e,k)=>{e.setAttribute('stroke-dasharray','1 1');e.setAttribute('stroke-dashoffset',(1-k).toFixed(3));e.setAttribute('opacity',k>0?1:0)};
const P=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const SPK=(x,y,r,R,n,a0,a1)=>{let d='';for(let i=0;i<=n*2;i++){const a=a0+(a1-a0)*i/(n*2),q=i%2?R:r;d+=(i?'L':'M')+(x+q*Math.cos(a)).toFixed(1)+' '+(y+q*Math.sin(a)).toFixed(1)}return d+'Z'};
const VN=(g,cs,r)=>cs.map(c=>mk('circle',{cx:c[0],cy:c[1],r:r,fill:'var(--gain)','fill-opacity':.12,stroke:'var(--ink)','stroke-width':5},g));
function hog(g,x,y,s){mk('path',{d:SPK(x,y,s,s*1.3,9,Math.PI,2*Math.PI),class:'gain'},g);mk('ellipse',{cx:x+s*1.05,cy:y-s*.22,rx:s*.45,ry:s*.28,class:'gain'},g);mk('circle',{cx:x+s*1.47,cy:y-s*.22,r:s*.08,class:'ink'},g);mk('circle',{cx:x+s*1.05,cy:y-s*.3,r:s*.06,fill:'var(--stage)'},g)}
// curled hedgehog: one connected spiky ball with the snout tucked in at the lower right
function curl(g,x,y,s){mk('path',{d:SPK(x,y,s,s*1.3,14,0,2*Math.PI),class:'gain'},g);
  mk('ellipse',{cx:x+s*.92,cy:y+s*.5,rx:s*.42,ry:s*.27,transform:'rotate(28 '+(x+s*.92).toFixed(1)+' '+(y+s*.5).toFixed(1)+')',class:'gain'},g);
  mk('circle',{cx:x+s*1.27,cy:y+s*.69,r:s*.09,class:'ink'},g);mk('circle',{cx:x+s*.82,cy:y+s*.36,r:s*.07,fill:'var(--stage)'},g)}
function fox(g,x,y,s){const L=v=>v.toFixed(1),f=(a,b)=>L(x+a*s)+' '+L(y+b*s);
  mk('path',{d:'M'+f(-1,0)+'C'+f(-1.6,-.1)+' '+f(-2,-.6)+' '+f(-1.7,-.9)+'C'+f(-1.6,-.4)+' '+f(-1.3,-.3)+' '+f(-.9,-.25)+'Z',class:'loss'},g);
  mk('path',{d:'M'+f(-.6,.3)+'v'+L(.6*s)+'M'+f(.6,.3)+'v'+L(.6*s),stroke:'var(--loss)','stroke-width':L(.14*s),'stroke-linecap':'round'},g);
  mk('ellipse',{cx:x,cy:y,rx:L(1.05*s),ry:L(.5*s),class:'loss'},g);
  mk('path',{d:'M'+f(.6,-.4)+'L'+f(.85,-1)+'L'+f(1.05,-.5)+'L'+f(1.75,-.2)+'L'+f(.9,.15)+'Z',class:'loss'},g);
  mk('circle',{cx:x+1.05*s,cy:y-.3*s,r:.08*s,fill:'var(--stage)'},g)}
fox(mk('g',{},$('fh0')),1170,470,40);hog(mk('g',{},$('fh0')),1400,480,45);
fox($('fox1'),380,610,70);hog($('hog1'),1100,650,75);
curl($('ball1'),1100,610,56);
const TR=[];for(let i=0;i<7;i++){const a=(-140+i*20)*Math.PI/180,c=Math.cos(a),s=Math.sin(a),x1=380+120*c,y1=610+120*s,x2=380+190*c,y2=610+190*s,hx=x2-18*c,hy=y2-18*s;
  TR.push(mk('path',{d:'M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'M'+(hx-12*s).toFixed(1)+' '+(hy+12*c).toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'L'+(hx+12*s).toFixed(1)+' '+(hy-12*c).toFixed(1),fill:'none',stroke:'var(--loss)','stroke-width':5,'stroke-linecap':'round','stroke-linejoin':'round'},$('tricks')))}
let gd='';for(let i=0;i<40;i++){const a=i*Math.PI/20,q=[112,112,88,88][i%4];gd+=(i?'L':'M')+(q*Math.cos(a)).toFixed(1)+' '+(q*Math.sin(a)).toFixed(1)}
mk('path',{d:gd+'Z',class:'ink'},$('gear'));mk('circle',{cx:0,cy:0,r:34,fill:'var(--stage)'},$('gear'));
const CP=['CUSTOMER','EMPLOYEE','STORE'].map((s,i)=>{const x=760+i*240,g=mk('g',{},$('chips3'));const r=mk('rect',{x:x,y:560,width:220,height:70,rx:35,'stroke-width':4},g);const tx=T(g,x+110,604,'PER '+s,{class:'m','font-size':22,'text-anchor':'middle'});return [g,r,tx,s.toLowerCase()]});
const CR4=[];for(let i=0;i<5;i++){const x=820+i*140,g=mk('g',{},$('crowd4')),pr=P(g,x,520,26,'ink'),ry=mk('g',{},g);
  for(let j=0;j<5;j++){const a=(-150+j*30)*Math.PI/180;mk('path',{d:'M'+(x+36*Math.cos(a)).toFixed(1)+' '+(520+36*Math.sin(a)).toFixed(1)+'L'+(x+52*Math.cos(a)).toFixed(1)+' '+(520+52*Math.sin(a)).toFixed(1),stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},ry)}CR4.push([pr,ry])}
const V4=[[690,440,-110,-63,['BEST AT'],620,400],[910,440,110,-63,['ECONOMIC','ENGINE'],975,390],[800,630,0,127,['PASSION'],800,730]].map(c=>{const g=mk('g',{},$('venn4'));VN(g,[c],170);c[4].forEach((s,j)=>T(g,c[5],c[6]+j*26,s,{class:'m','font-size':20,'text-anchor':'middle'}));return [g,c[2],c[3]]});
const ST5=[];[[900,330],[1120,330],[1340,330],[900,500],[1120,500],[1340,500]].forEach((q,i)=>{const ps=[[q[0]+34,q[1]-34]];if(i===0||i===1||i===4)ps.push([q[0]-34,q[1]+34]);
  ps.forEach(s=>{const g=mk('g',{},$('stores5'));mk('rect',{x:s[0]-20,y:s[1]-17,width:40,height:34,rx:4,class:'gain'},g);mk('path',{d:'M'+s[0]+' '+(s[1]-9)+'v18M'+(s[0]-9)+' '+s[1]+'h18',stroke:'var(--on-gain)','stroke-width':5,'stroke-linecap':'round'},g);ST5.push(g)})});
const PG=[];for(let i=0;i<4;i++){const x=120+i*240,g=mk('g',{},$('pages6'));mk('rect',{x:x,y:640,width:200,height:160,rx:10,fill:'var(--stage)'},g);mk('rect',{x:x,y:640,width:200,height:36,class:'ink'},g);
  mk('rect',{x:x,y:640,width:200,height:160,rx:10,fill:'none',stroke:'var(--ink)','stroke-width':5},g);T(g,x+100,665,'YEAR '+(i+1),{class:'m','font-size':20,'text-anchor':'middle',style:'fill:var(--stage)'});
  mk('rect',{x:x+20,y:696,width:100,height:36,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);mk('rect',{x:x+80,y:748,width:100,height:36,rx:16,class:'gain'},g);PG.push(g)}
for(let i=0;i<8;i++)mk('circle',{cx:170+i*80,cy:240,r:12,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('rings7'));
const B7=[150,370,570].map((x,c)=>{const a=[];for(let r=0;r<5;r++)a.push(mk('path',{d:'M'+x+' '+(400+r*70)+'h'+[150,110,140,90,130][(r+c)%5],stroke:r===2?'var(--gain)':'var(--line)','stroke-width':12,'stroke-linecap':'round'},$('bars7')));return a});
const VC7=VN($('venn7'),[[1042,455],[1198,455],[1120,590]],150);
VN($('v8'),[[1294,679],[1366,679],[1330,742]],70);const D8=mk('circle',{cx:1330,cy:700,r:16,class:'gain'},$('v8'));