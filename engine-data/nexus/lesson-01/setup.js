const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g);return g};
const T=(g,x,y,s,c,str,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},ex||{}),g);e.textContent=str;return e};
P($('t_me'),1210,440,34,'ink');
const TS=[];for(let i=0;i<10;i++)TS.push(mk('rect',{x:1320+(i%2)*10,y:566-i*16,width:150,height:12,rx:3,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('t_pile')));
const BK=[];[426,613,800].forEach((b,k)=>{for(let i=0;i<21;i++){const h=110+((i*7+k*5)%5)*14;BK.push(mk('rect',{x:142+i*26.5,y:b-h-6,width:22,height:h,fill:(i+k)%4===1?'var(--gain)':'var(--ink)','fill-opacity':(i+k)%3===2?.45:1},$('l_books')))}});
for(let k=0;k<2;k++)for(let j=0;j<18;j++){const a=j*.38+k*Math.PI,r=16+j*5.2;mk('circle',{cx:(r*Math.cos(a)).toFixed(1),cy:(r*Math.sin(a)).toFixed(1),r:3+j*.2,class:'ink'},$('l_arm'))}
const WN=['ECOLOGICAL|COLLAPSE','NUCLEAR|DANGER','UNCONTROLLED|TECHNOLOGY'].map((s,i)=>{const x=920+i*230,g=mk('g',{},$('l_warn'));mk('path',{d:'M'+x+' 560L'+(x+60)+' 664H'+(x-60)+'Z',class:'loss','stroke-linejoin':'round'},g);T(g,x,650,60,'d','!',{'text-anchor':'middle',style:'fill:var(--stage)'});s.split('|').forEach((w,j)=>T(g,x,706+j*32,22,'m',w,{'text-anchor':'middle'}));return g});
const GQ=[];for(let i=0;i<10;i++)GQ.push(mk('rect',{x:120+i*100,y:650,width:80,height:80,rx:10,stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'8 8'},$('nv_sq')));
[160,230,300].forEach(x=>P($('p_ppl'),x,590,16,'ink'));
// pipe: lies (indigo) fade and shrink; truth (amber) full-length plus extra truth joining in the right half
const PL=[],PT=[],PX=[];
for(let i=0;i<8;i++)PL.push(mk('circle',{r:12,class:'loss'},$('p_dots')));
for(let i=0;i<8;i++)PT.push(mk('circle',{r:12,class:'gain'},$('p_dots')));
for(let i=0;i<8;i++)PX.push(mk('circle',{r:12,class:'gain'},$('p_dots')));
const FL=[];for(let i=0;i<4;i++)FL.push(mk('rect',{width:36,height:46,rx:4,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':3},$('pr_fly')));
const CD=[];for(let r=0;r<6;r++)for(let j=0;j<6-r;j++)CD.push(mk('rect',{x:-(6-r)*12+j*24+1,y:96-r*20,width:22,height:18,rx:3,class:'loss'},$('sc_cards')));
P($('so_p'),300,420,32,'loss');
const BR=[460,515,570].map(x=>{const g=mk('g',{},$('so_b'));mk('path',{d:'M'+x+' 480V580',class:'s-ink','stroke-width':5,'stroke-linecap':'round'},g);mk('path',{d:'M'+(x-14)+' 580h28l8 50h-44z',fill:'var(--muted)'},g);return g});
for(let i=0;i<8;i++){const a=i*Math.PI/4+.4,x=1000+170*Math.cos(a),y=470+170*Math.sin(a);mk('path',{d:'M1000 470L'+x.toFixed(0)+' '+y.toFixed(0),stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'8 6'},$('nw'));mk('circle',{cx:x.toFixed(0),cy:y.toFixed(0),r:20,class:'gain'},$('nw'))}
mk('circle',{cx:1000,cy:470,r:26,class:'loss'},$('nw'));
let rk=0;[5,4,3].forEach((n,r)=>{for(let j=0;j<n;j++){const cx=180+r*42+j*85,cy=610-r*58;let d='';for(let q=0;q<7;q++){const a=q*2*Math.PI/7,rr=30+((rk*3+q*5)%4)*4;d+=(q?'L':'M')+(cx+rr*Math.cos(a)).toFixed(0)+' '+(cy+rr*Math.sin(a)).toFixed(0)}mk('path',{d:d+'Z',fill:'var(--line)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},$('rm_pile'));rk++}});
const FD=[];for(let i=0;i<14;i++)FD.push(mk('circle',{r:10,fill:i%4?'var(--muted)':'var(--gain)'},$('fd')));