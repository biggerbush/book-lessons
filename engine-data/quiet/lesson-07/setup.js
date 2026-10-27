const fig=(g,x,y,r,c)=>{mk('circle',{cx:x,cy:y,r:r,class:c},g);return mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:c},g)};
const star=(cx,cy,R,g,c)=>{let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?R*.45:R;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return mk('path',{d:d+'Z',class:c},g)};
fig($('pL'),1228,330,20,'ink');fig($('pR'),1432,330,20,'gain');
fig($('gP'),550,520,26,'ink');[380,460,640,720].forEach(x=>fig($('party'),x,560,18,'gain'));
[[420,440],[680,430],[560,410]].forEach(q=>{mk('circle',{cx:q[0],cy:q[1],r:10,class:'gain'},$('party'));mk('path',{d:'M'+(q[0]+9)+' '+q[1]+'V'+(q[1]-40)+'h16',fill:'none',stroke:'var(--gain)','stroke-width':5,'stroke-linecap':'round'},$('party'))});
fig($('eP'),1050,520,24,'ink');
fig($('gP2'),260,600,28,'ink');fig($('eP2'),1340,600,28,'ink');
fig($('xP'),300,500,28,'gain');fig($('iP'),1020,500,28,'ink');
let lp='';for(let i=0;i<18;i++){const a=i*Math.PI/9,r=i%2?78:112;lp+=(540+r*Math.cos(a)).toFixed(1)+','+(420+r*.95*Math.sin(a)).toFixed(1)+' '}$('loudP').setAttribute('points',lp);
const BR=[];for(let i=0;i<5;i++)BR.push(mk('rect',{x:1290+i*30,width:20,rx:4,class:'loss'},$('bars')));
for(let r=0;r<3;r++)for(let c=0;c<3;c++){const x=170+c*160,y=260+r*160;mk('rect',{x:x,y:y,width:100,height:50,rx:8,class:'s-ink',fill:'var(--stage)','stroke-width':4},$('desks'));[x+22,x+78].forEach(cx=>mk('circle',{cx:cx,cy:y+85,r:14,class:'ink'},$('desks')));if((r+c)%2===0)mk('path',{d:'M'+(x+20)+' '+(y-8)+'q30-22 60 0',fill:'none',class:'s-loss','stroke-width':4,'stroke-linecap':'round'},$('noise'))}
const NL=[];for(let i=0;i<6;i++)NL.push(mk('path',{d:'M1140 '+(400+i*50)+'h'+(i===5?120:220),class:i===2?'s-gain':'s-line','stroke-width':8,'stroke-linecap':'round'},$('nlines')));
[230,300,380,450].forEach((x,i)=>{fig($('kids'),x,i<3?520:537,i<3?20:16,i<3?'ink':'loss');if(i<3)mk('rect',{x:x-18,y:440,width:36,height:24,rx:8,fill:'none',stroke:'var(--ink)','stroke-width':4},$('kids'))});
fig($('sk'),740,520,22,'ink');
const BK=[];for(let i=0;i<4;i++)BK.push(mk('rect',{x:820+(i%2)*6,y:640-28*(i+1),width:76-(i%2)*10,height:24,rx:4,class:i%2?'ink':'gain'},$('books')));
fig($('teach'),1100,500,24,'ink');[1250,1340,1430].forEach(x=>fig($('stu'),x,590,18,'ink'));
fig($('thkG'),1430,590,18,'gain');star(1430,528,22,$('thkG'),'gain');
fig($('kid'),0,-109,26,'ink');
const STN=[430,570,710,850,990].map(x=>mk('ellipse',{cx:x,cy:668,rx:50,ry:14,class:'s-ink',fill:'var(--stage)','stroke-width':5},$('stones')));
const KX=[220,430,570,710,850,990,1180],KY=[720,654,654,654,654,654,720];
const STR=[[1380,300,22],[1460,380,16],[1290,360,14]].map(s=>star(s[0],s[1],s[2],$('stars'),'gain'));
fig($('scope'),1450,636,20,'gain');
fig($('saw'),220,588,22,'gain');fig($('saw'),660,588,22,'ink');
const MB=[];for(let i=0;i<8;i++){const a=-Math.PI/2+i*Math.PI/4,x=1130+200*Math.cos(a),y=470+200*Math.sin(a);mk('path',{d:'M1130 470L'+x.toFixed(1)+' '+y.toFixed(1),class:'s-line','stroke-width':4},$('spokes'));MB.push(mk('circle',{cx:x,cy:y,r:26,class:i%2?'ink':'gain'},$('mem')))}
for(let j=0;j<4;j++)for(let i=0;i<7;i++)mk('circle',{cx:1262+i*29,cy:680+j*36,r:7,fill:'var(--line)'},$('cells'));