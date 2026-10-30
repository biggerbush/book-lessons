const fig=(g,x,y,r,cls)=>[mk('circle',{cx:x,cy:y,r:r,class:cls},g),mk('path',{d:'M'+(x-r*1.5)+' '+(y+r*4.2)+'v-'+(r*1.3)+'a'+(r*1.5)+' '+(r*1.5)+' 0 0 1 '+(r*3)+' 0v'+(r*1.3)+'z',class:cls},g)];
const tx=(g,x,y,s,fs,a)=>{const e=mk('text',Object.assign({x:x,y:y,'font-size':fs,class:'m'},a||{}),g);e.textContent=s;return e};
const chip=(g,x,y,w,s)=>{const c=mk('g',{},g);c.rr=mk('rect',{x:x,y:y,width:w,height:64,rx:32,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},c);tx(c,x+w/2,y+41,s,22,{'text-anchor':'middle',style:'fill:var(--ink)'});return c};
const TC=[];for(let i=0;i<7;i++){const x=1200+i*43,y=480+(i%2)*44;mk('path',{d:'M'+x+' '+y+'L1330 380',class:'s-gain','stroke-width':3,'stroke-dasharray':'6 6'},$('tLinks'));TC.push(mk('circle',{cx:x,cy:y,r:15,class:'ink'},$('tCrowd')))}
const CN=[];for(let i=0;i<14;i++){const a=i*2*Math.PI/14;CN.push([380+120*Math.cos(a),470+120*Math.sin(a)])}
CN.forEach((a,i)=>CN.forEach((b,j)=>{if(j>i&&(i+j)%3==0)mk('path',{d:'M'+a[0].toFixed(0)+' '+a[1].toFixed(0)+'L'+b[0].toFixed(0)+' '+b[1].toFixed(0),class:'s-line','stroke-width':2},$('chimpN'))}));
CN.forEach(a=>mk('circle',{cx:a[0],cy:a[1],r:16,class:'ink'},$('chimpN')));
const CR=[];for(let i=0;i<180;i++)CR.push(mk('circle',{cx:780+(i%18)*38,cy:290+Math.floor(i/18)*38,r:9,fill:'var(--muted)'},$('crowd')));
const LKD=[3,16,22,40,57,70,95,121,138,150,165,177];LKD.forEach(i=>mk('path',{d:'M1130 470L'+(780+(i%18)*38)+' '+(290+Math.floor(i/18)*38),class:'s-gain','stroke-width':3},$('shL')));
const ML=[[1170,300],[1260,275],[1350,300],[1175,575],[1345,575]].map(q=>{mk('circle',{cx:q[0],cy:q[1],r:18,class:'ink'},$('minds'));return mk('path',{d:'M'+q[0]+' '+q[1]+'L1260 450',class:'s-ink','stroke-width':3,'stroke-dasharray':'6 6'},$('mindL'))});
const ACT=['SIGNS TREATIES','WAGES WARS','COLLECTS TAXES'].map((s,i)=>chip($('acts'),500,300+i*90,270,s));
for(let i=0;i<6;i++)fig($('believers'),910+i*65,590,14,'gain');
fig($('hzP'),300,380,40,'ink');
// book -> four group boxes; every connector ends at its box edge, right-hand ones run through the row gap (y 430-470)
const BX=[[880,250],[1190,250],[880,470],[1190,470]];
const RD=['M770 432C830 432 830 340 880 340','M772 444H1300V430','M770 560H880','M772 456H1360V470'];
const PP=[],RY=RD.map(d=>mk('path',{d:d,class:'s-gain',fill:'none','stroke-width':4,'stroke-dasharray':'10 8','stroke-linecap':'round','stroke-linejoin':'round'},$('rays')));
const BG=BX.map(b=>{const g=mk('g',{},$('ctry'));mk('rect',{x:b[0],y:b[1],width:280,height:180,rx:16,fill:'var(--stage)',stroke:'var(--line)','stroke-width':4},g);for(let k=0;k<3;k++)PP.push(fig(g,b[0]+70+k*70,b[1]+55,18,'ink'));return g});
const WN=[];for(let r=0;r<3;r++)for(let c=0;c<4;c++)WN.push(mk('rect',{x:222+c*82,y:465+r*70,width:50,height:40,fill:'var(--line)'},$('win')));
const WG=[];for(let r=0;r<8;r++)for(let c=0;c<6;c++)WG.push(mk('path',{d:'M'+(740+c*44)+' '+(295+r*42)+'l22-9v18z',class:'ink'},$('wedge')));
fig($('ownP'),1420,480,24,'gain');
for(let i=0;i<4;i++){mk('rect',{x:180,y:290+i*95,width:200,height:80,rx:6,fill:'none',stroke:'var(--ink)','stroke-width':4},$('drw'));mk('path',{d:'M250 '+(330+i*95)+'h60',stroke:'var(--ink)','stroke-width':6,'stroke-linecap':'round'},$('drw'))}
const COLD=['CONFUSING','COLD','SINISTER'].map((s,i)=>tx($('cold'),450,520+i*50,s,26,{style:'fill:var(--loss)'}));
const BW=[];[160,240,190,260,140].forEach((h,i)=>{const x=900+i*115;mk('path',{d:'M'+(x+45)+' 600v90',stroke:'var(--line)','stroke-width':12},$('bld'));mk('rect',{x:x,y:600-h,width:90,height:h,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':5},$('bld'));for(let y=620-h;y<570;y+=40){BW.push(mk('rect',{x:x+20,y:y,width:18,height:18,fill:'var(--line)'},$('bld')));BW.push(mk('rect',{x:x+52,y:y,width:18,height:18,fill:'var(--line)'},$('bld')))}});
for(let i=0;i<5;i++)mk('circle',{cx:180,cy:370+i*50,r:10,fill:'var(--stage)',stroke:'var(--ink)','stroke-width':4},$('nb'));
const NC=['A CURRENCY','A COMPANY','A COUNTRY'].map((s,i)=>chip($('c0'),430,370+i*90,290,s));
const FC=['CONTRACTS','PASSPORTS','RECEIPTS'].map((s,i)=>chip($('c1'),1150,370+i*90,290,s));