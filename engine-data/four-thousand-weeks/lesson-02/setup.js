const who=(g,x,y,r,cls)=>{mk('circle',{cx:x,cy:y,r:r,class:cls},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)};
const R=o=>Object.assign({fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},o);
const T=(g,x,y,s,txt,cls,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:cls},ex||{}),g);e.textContent=txt;return e};
who($('t_wk'),1210,470,30,'ink');
const TS=[];for(let i=0;i<10;i++)TS.push(mk('rect',R({x:1300+(i%2)*8,y:640-18*(i+1)+2,width:130,height:14}),$('t_stack')));
who($('b_me'),260,400,40,'ink');
const BK=[];for(let i=0;i<6;i++){const g=mk('g',{},$('b_books')),x=400+(i%2)*16,y=600-46*(i+1),gn=i%3===1;mk('rect',R({x:x,y:y,width:210,height:40,rx:6,'stroke-width':5,fill:gn?'var(--gain)':'var(--stage)'}),g);T(g,x+105,y+28,22,'SYSTEM','m',{'text-anchor':'middle',style:gn?'fill:var(--on-gain)':'fill:var(--ink)'});BK.push(g)}
const RW=[];for(let i=0;i<8;i++){const y=300+i*56,g=mk('g',{},$('i_rows'));mk('rect',R({x:150,y:y,width:580,height:44,rx:10,'stroke-width':3}),g);const c=mk('circle',{cx:176,cy:y+22,r:11,fill:'var(--ink)'},g);mk('path',{d:'M200 '+(y+22)+'h'+(200+(i*53)%180),stroke:'var(--line)','stroke-width':6,'stroke-linecap':'round'},g);RW.push([g,c])}
who($('i_me'),1180,450,34,'ink');
const DSH=[],dl=(d,g)=>{const e=mk('path',{d:d,fill:'none',stroke:'var(--loss)','stroke-width':4,'stroke-dasharray':'10 8','stroke-linecap':'round'},g);DSH.push(e)};
[280,470,660].forEach(y=>{mk('path',{d:'M462 460L748 '+(y-10),stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('d_out'));mk('circle',{cx:780,cy:y,r:28,class:'ink'},$('d_out'));dl('M752 '+(y+8)+'L462 478',$('d_ret'));dl('M752 '+(y+22)+'L462 492',$('d_ret'))});
[375,565].forEach(y=>{mk('circle',{cx:960,cy:y,r:28,class:'ink'},$('d_more'));dl('M930 '+y+'L462 '+(470+(y-470)*.1),$('d_more'))});
const PL=[];for(let i=0;i<18;i++)PL.push(mk('rect',R({x:1140,y:760-22*(i+1),width:300,height:16,rx:3,'stroke-width':3}),$('d_pile')));
const SH=[];for(let i=0;i<5;i++){const x=560+i*100,s=(x-520)/480,y=282+80*s*(1-s),g=mk('g',{},$('w_shirts'));mk('path',{d:'M-28 0l-22 24 14 14 8-8v60h56v-60l8 8 14-14-22-24z',transform:'translate('+x+' '+y.toFixed(1)+')',fill:i%2?'var(--gain)':'var(--stage)',stroke:'var(--ink)','stroke-width':4,'stroke-linejoin':'round'},g);SH.push(g)}
for(let i=0;i<12;i++){const a=i*Math.PI/6,s=Math.sin(a),c=Math.cos(a);mk('path',{d:'M'+(1260+118*s).toFixed(1)+' '+(420-118*c).toFixed(1)+'L'+(1260+132*s).toFixed(1)+' '+(420-132*c).toFixed(1),stroke:'var(--ink)','stroke-width':5,'stroke-linecap':'round'},$('w_ticks'))}
const wedge=a=>{if(a<.5)return 'M0 0';const r=a*Math.PI/180;return 'M1260 420L1260 290A130 130 0 '+(a>180?1:0)+' 1 '+(1260+130*Math.sin(r)).toFixed(1)+' '+(420-130*Math.cos(r)).toFixed(1)+'Z'};
who($('k_you'),260,450,30,'ink');
const BR=[];for(let r=0;r<6;r++)for(let c=0;c<3;c++)BR.push(mk('rect',R({x:580+c*76,y:380+r*56,width:70,height:50,rx:4,'stroke-width':4}),$('f_wall')));
who($('f_me'),0,0,28,'ink');
who($('p_proj'),260,620,28,'ink');
const EV=[900,1060,1220].map(x=>{const g=mk('g',{},$('p_mail'));mk('rect',R({x:x,y:610,width:120,height:80,rx:6,'stroke-width':5}),g);mk('path',{d:'M'+x+' 612l60 40 60-40',fill:'none',stroke:'var(--ink)','stroke-width':5,'stroke-linejoin':'round'},g);return g});