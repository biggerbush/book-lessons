const P=(g,x,y,r,c)=>{const q=mk('g',{},g);mk('circle',{cx:x,cy:y,r:r,class:c},q);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v'+(-r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},q);return q};
const mouth=(x,y,r,h)=>'M'+(x-r*.4)+' '+(y+r*(h?.3:.55))+'q'+(r*.4)+' '+(r*(h?.3:-.3))+' '+(r*.8)+' 0';
const FD=(g,x,y,r,h)=>{[-1,1].forEach(s=>mk('circle',{cx:x+s*r*.38,cy:y-r*.15,r:r*.11,fill:'var(--stage)'},g));return mk('path',{d:mouth(x,y,r,h),fill:'none',stroke:'var(--stage)','stroke-width':Math.max(3,r*.12),'stroke-linecap':'round'},g)};
const T=(g,x,y,s,c,str,ex)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':s,class:c},ex||{}),g);e.textContent=str;return e};
const FL=[];
const FLM=(g,x,y,s,c)=>{const e=mk('path',{d:'M-30 0C-44-40-12-56 0-100C12-56 44-40 30 0Z',class:c,transform:'translate('+x+' '+y+') scale('+s+')'},g);FL.push([e,x,y,s]);mk('path',{d:'M'+(x-40*s)+' '+y+'h'+(80*s),class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);return e};
const STAR=(cx,cy,R)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'};

const SK=[];for(let i=0;i<5;i++){const x=1190+i*60,g=mk('g',{},$('skills'));mk('path',{d:'M1310 466L'+x+' 620',class:'s-line','stroke-width':4},g);mk('rect',{x:x-18,y:620,width:36,height:36,rx:8,class:'ink'},g);SK.push(g)}
const SKL=T($('skills'),1310,704,22,'m','EVERY PEOPLE SKILL',{'text-anchor':'middle',style:'fill:var(--ink)'});

P($('man'),360,440,44,'ink');FD($('man'),360,440,44,0);T($('man'),360,680,22,'m','WRONG, TO YOU',{'text-anchor':'middle',style:'fill:var(--loss)'});

const CN=[],TR=[200,380,560,1060,1240,1400].map((x,i)=>{const g=mk('g',{},$('trees')),r=i%2?70:80;mk('path',{d:'M'+x+' 720V'+(420+r),class:'s-ink','stroke-width':10,'stroke-linecap':'round'},g);CN.push(mk('circle',{cx:x,cy:430,r:r,fill:'var(--stage)',class:'s-ink','stroke-width':6},g));return g});
[720,900].forEach(x=>P($('boys2'),x,618,24,'ink'));FLM($('boys2'),810,720,1,'gain');
const SPK=[0,1,2,3].map(()=>mk('circle',{r:7,class:'loss'},$('sparks')));

P($('carn3'),300,420,50,'ink');FD($('carn3'),300,420,50,0);mk('path',{d:STAR(300,590,26),class:'loss'},$('carn3'));
const B3=[1000,1150,1300].map(x=>{const g=P($('boys3'),x,470,34,'ink');FD(g,x,470,34,0);return g.firstChild});
FLM($('fire3'),1150,820,.9,'loss');

P($('carn4'),300,430,46,'gain');FD($('carn4'),300,430,46,1);
P($('mem'),950,262,16,'gain');FLM($('mem'),1070,335,.5,'gain');
const H4=[],X4=[1200,1340],M4=X4.map(x=>{const g=P($('boys4'),x,470,32,'ink');H4.push(g.firstChild);return FD(g,x,470,32,0)});

P($('carn5'),920,560,24,'ink');
[1140,1230].forEach(x=>{const g=P($('boys5'),x,560,24,'gain');FD(g,x,560,24,1)});

const CR=[];for(let r=0;r<2;r++)for(let c=0;c<6;c++){const x=640+c*160,y=280+r*140,g=mk('g',{},$('crowd'));mk('circle',{cx:x,cy:y,r:30,fill:'none',class:'s-gain','stroke-width':4},g);P(g,x,y,18,'ink');CR.push(g)}
P($('self'),300,430,46,'ink');
[600,770].forEach(x=>mk('path',{d:'M0 0h150a20 20 0 0 0 0-30c-30 0-50-10-70-40h-70a10 10 0 0 0-10 10z',transform:'translate('+x+' 720)',class:'ink'},$('shoes')));

const PL=[[250,360,'APPRECIATION'],[470,290,'AVOID ARGUMENTS'],[690,360,'SAVING FACE']].map(q=>{const g=mk('g',{},$('pills'));mk('path',{d:'M470 460L'+q[0]+' '+(q[1]+25),class:'s-ink','stroke-width':8,'stroke-linecap':'round'},g);mk('rect',{x:q[0]-115,y:q[1]-25,width:230,height:50,rx:25,fill:'var(--stage)',class:'s-ink','stroke-width':4},g);T(g,q[0],q[1]+7,20,'m',q[2],{'text-anchor':'middle',style:'fill:var(--ink)'});return g});

P($('calp'),1350,322,20,'ink');