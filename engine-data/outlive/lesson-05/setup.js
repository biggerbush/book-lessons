const P=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const L=(g,d,c,w)=>mk('path',{d:d,fill:'none',stroke:'var(--'+c+')','stroke-width':w,'stroke-linecap':'round','stroke-linejoin':'round'},g);
const T=(g,x,y,s,c,txt,a,st)=>{const e=mk('text',{x:x,y:y,'font-size':s,class:c},g);if(a)e.setAttribute('text-anchor',a);if(st)e.setAttribute('style',st);e.textContent=txt;return e};

P($('eld'),1150,420,34,'ink');L($('eld'),'M1130 563V720M1170 563L1235 640V720','ink',14);
P($('kid'),1330,560,20,'gain');

const ath=$('ath');P(ath,260,300,40,'ink');L(ath,'M245 468L215 560L180 620M275 468L320 540L360 600','ink',14);L(ath,'M215 390L160 450M305 390L360 330','ink',12);
const cards=[];for(let i=0;i<10;i++){const x=550+(i%5)*190,y=300+Math.floor(i/5)*200,g=mk('g',{},$('cards'));
  const r=mk('rect',{x:x,y:y,width:170,height:160,rx:16,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},g);
  cards.push([g,r,T(g,x+85,y+102,64,'d',String(i+1),'middle')])}

[['4 FLIGHTS OF STAIRS','IN 3 MINUTES'],['2 BAGS OF GROCERIES','FOR 5 BLOCKS'],['A SUITCASE INTO THE','OVERHEAD BIN'],['UP OFF THE FLOOR,','ONE ARM AT MOST']].forEach((c,i)=>{const g=$('ev'+i),x=120+345*i;
  mk('rect',{x:x,y:230,width:325,height:420,rx:18,fill:'none',stroke:'var(--line)','stroke-width':3},g);c.forEach((s,j)=>T(g,x+162,560+j*34,20,'m',s,'middle'))});
const rs=$('riser');P(rs,1330,330,24,'ink');L(rs,'M1315 431L1300 490M1345 431L1380 470L1390 490','ink',12);L(rs,'M1305 390L1250 490','gain',10);

const gk=$('gk');P(gk,1220,400,32,'ink');L(gk,'M1205 534L1200 640M1235 534L1240 640','ink',12);P(gk,1310,400,18,'gain');L(gk,'M1240 455L1300 450','ink',10);
const lf=$('lifter');P(lf,300,400,32,'ink');L(lf,'M285 534L280 640M315 534L320 640','ink',12);L(lf,'M276 450L250 330M324 450L350 330','ink',10);L(lf,'M140 330H460','ink',8);
const PL=[];for(let i=0;i<5;i++){PL.push(mk('rect',{x:214-i*16,y:275,width:12,height:110,rx:4,class:'gain'},$('plates')));PL.push(mk('rect',{x:374+i*16,y:275,width:12,height:110,rx:4,class:'gain'},$('plates')))}

const hg=$('hang');P(hg,800,400,24,'ink');L(hg,'M782 340V440M818 340V440','ink',8);L(hg,'M790 501L788 600M810 501L812 600','ink',10);
const fm=$('farm');P(fm,1260,370,26,'ink');L(fm,'M1225 420L1205 530M1295 420L1315 530','ink',8);
[1185,1295].forEach(x=>mk('rect',{x:x,y:530,width:40,height:56,rx:8,class:'gain'},fm));
const FL=L(fm,'','ink',12);

const sw=$('sway');P(sw,440,340,30,'ink');L(sw,'M370 420H510','ink',8);L(sw,'M440 466V640','ink',12);L(sw,'M450 480L500 560L470 600','ink',12);
[[440,470,12],[500,560,11]].forEach(q=>mk('circle',{cx:q[0],cy:q[1],r:q[2],class:'gain'},sw));
const tp=$('tip');P(tp,1100,340,30,'loss');L(tp,'M1085 466L1090 640M1115 466L1110 640','loss',12);L(tp,'M1060 420L1030 360M1140 420L1170 360','loss',8);

const tr=$('tr');P(tr,220,300,30,'gain');L(tr,'M210 426L205 500M230 426L235 500','gain',12);L(tr,'M190 360L170 240M250 360L270 240','ink',8);L(tr,'M136 240H304','ink',8);
[136,290].forEach(x=>mk('rect',{x:x,y:215,width:14,height:50,rx:4,class:'ink'},tr));
const TD=[];for(let i=0;i<6;i++)TD.push(mk('circle',{cy:500,r:8,class:'gain'},$('tdots')));
const CO=[];for(let i=0;i<8;i++)CO.push(mk('circle',{cx:1180+(i%4)*52,cy:715-Math.floor(i/4)*44,r:20,class:'gain'},$('coins')));

const TK=[650,720,790].map(y=>{mk('rect',{x:1285,y:y-16,width:28,height:28,rx:5,fill:'none',stroke:'var(--ink)','stroke-width':4},$('ticks'));
  mk('path',{d:'M1330 '+y+'H1435',stroke:'var(--line)','stroke-width':5,'stroke-linecap':'round'},$('ticks'));
  return L($('ticks'),'M1290 '+(y-2)+'l8 9 18-22','gain',6)});