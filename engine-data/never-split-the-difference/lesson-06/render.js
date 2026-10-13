WS.forEach((g,i)=>{const a=TM.swan_white+i*.4;rise(g,p(u,a,a+.5))});
$('wsw').setAttribute('opacity',(1-.55*p(u,TM.swan_black+1,TM.swan_black+2)).toFixed(2));
rise($('bsw'),p(u,TM.swan_black,TM.swan_black+.6));
$('ring0').setAttribute('opacity',(p(u,TM.swan_black+.5,TM.swan_black+1)*(.55+.45*Math.sin(t*3))).toFixed(2));

rise($('ppl1'),p(u,TM.shoes,TM.shoes+.5));rise($('sh0'),p(u,TM.shoes+.8,TM.shoes+1.3));rise($('sh1'),p(u,TM.shoes+2.2,TM.shoes+2.7));
rise($('odd'),p(u,TM.odd_pair,TM.odd_pair+.6));
const fk=1-2*p(u,TM.frown,TM.frown+.6);mA.setAttribute('d',md(300,330,40,fk));mB.setAttribute('d',md(1300,330,40,fk));
rise($('fr1'),p(u,TM.frown+.3,TM.frown+.8));rise($('lazy'),p(u,TM.frown+4.2,TM.frown+4.8));

[TM.box_known,TM.box_question,TM.box_dark].forEach((a,i)=>rise($('bx'+i),p(u,a,a+.5)));
rise($('sw2'),p(u,TM.box_dark+4.2,TM.box_dark+4.8));rise($('blk2'),p(u,TM.box_dark+4.4,TM.box_dark+5));

rise($('lev'),p(u,TM.lever,TM.lever+.5));
const ck=p(u,TM.calendar,TM.calendar+.6),adeg=10-20*p(u,TM.calendar+.5,TM.calendar+1.5),ang=adeg*Math.PI/180,bx=450*Math.cos(ang),by=450*Math.sin(ang);
const lx=800-bx,ly=640+by,rx=800+bx,ry=640-by;
$('beam').setAttribute('x1',lx.toFixed(1));$('beam').setAttribute('y1',ly.toFixed(1));$('beam').setAttribute('x2',rx.toFixed(1));$('beam').setAttribute('y2',ry.toFixed(1));
$('lb').setAttribute('transform','translate('+lx.toFixed(1)+' '+ly.toFixed(1)+')');$('lbb').setAttribute('transform','rotate('+(-adeg).toFixed(2)+')');
$('rc').setAttribute('transform','translate('+rx.toFixed(1)+' '+(ry-140*(1-ck)).toFixed(1)+')');$('rcb').setAttribute('transform','rotate('+(-adeg).toFixed(2)+')');rise($('rcw'),ck);
mS.setAttribute('d',md(1420,250,28,-1+2*p(u,TM.smile,TM.smile+.6)));
rise($('t3a'),p(u,TM.calendar+3.8,TM.calendar+4.4));rise($('t3b'),p(u,TM.smile,TM.smile+.5));

rise($('cmpg'),p(u,TM.compound,TM.compound+.5));rise($('fbi'),p(u,TM.compound+1,TM.compound+1.5));
const ky=p(u,TM.bible+5,TM.bible+5.8),nz=p(u,TM.bible+1,TM.bible+1.5)*(1-ky);
BB.forEach((b,i)=>{const a=TM.bible+i*.5;rise(b[0],p(u,a,a+.4)*(1-.45*nz));b[1].setAttribute('stroke',ky>.5?'var(--gain)':'var(--loss)');b[2].setAttribute('opacity',(1-ky).toFixed(2));b[3].setAttribute('stroke',ky>.5?'var(--ink)':'var(--muted)')});
rise($('noise'),nz);rise($('key'),ky);
const tr=p(u,TM.bible+10,TM.bible+10.8);$('cmpx').setAttribute('opacity',(tr*.45).toFixed(2));rise($('trag'),tr);
mF.setAttribute('d',md(1320,520,34,-.3-.7*Math.max(nz,tr)));

rise($('conf'),p(u,TM.confused,TM.confused+.5));rise($('arr5'),p(u,TM.three_doors,TM.three_doors+.5));
DR.forEach((d,i)=>{const a=TM.three_doors+i*1.6;rise(d[0],p(u,a,a+.5));const o=p(u,TM.three_doors+5.8+i*.7,TM.three_doors+6.4+i*.7),w=240-170*o;
  d[1].setAttribute('width',w.toFixed(1));d[2].setAttribute('cx',(d[3]+w-40).toFixed(1))});
rise($('cur'),p(u,TM.three_doors+8.7,TM.three_doors+9.3));

rise($('env'),p(u,TM.face_face,TM.face_face+.5));rise($('envx'),p(u,TM.face_face+1,TM.face_face+1.4));
rise($('ft'),p(u,TM.coffee,TM.coffee+.5));rise($('tl'),p(u,TM.coffee+2,TM.coffee+2.6));
ST.forEach((s,i)=>{const w=(8*Math.sin(t*3+i*2)).toFixed(1);s.setAttribute('d','M'+(CX[i]+20)+' 448q'+w+' -13 0 -26q'+(-w)+' -13 0 -26')});
rise($('btw'),p(u,TM.by_the_way,TM.by_the_way+.5));
const gd=p(u,TM.by_the_way+3.8,TM.by_the_way+4.3);SPK.forEach((s,i)=>s.setAttribute('opacity',(gd*(.5+.5*Math.sin(t*4+i*2))).toFixed(2)));rise($('gold'),gd);

CD.forEach((c,i)=>{const a=TM.toolbox+i*.7;rise(c,p(u,a,a+.4));WR[i].setAttribute('opacity',p(u,a+.3,a+.7).toFixed(2))});
rise($('fl'),p(u,TM.toolbox+3,TM.toolbox+3.5));
$('beam7').setAttribute('opacity',(.3*p(u,TM.flashlight,TM.flashlight+.8)).toFixed(2));rise($('sw7'),p(u,TM.flashlight+2,TM.flashlight+2.6));
const lk=p(u,TM.flashlight+5,TM.flashlight+6.2);rise($('bars'),p(u,TM.flashlight+5,TM.flashlight+5.4));
$('barL').setAttribute('width',(300*lk).toFixed(1));$('barT').setAttribute('width',(60*lk).toFixed(1));rise($('lis'),p(u,TM.flashlight+5.4,TM.flashlight+6));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+.7,s8+1.2));rise($('qc'),p(u,s8+1.1,s8+1.6));rise($('mag'),p(u,s8+.5,s8+1.1));
$('magi').setAttribute('transform','translate('+(12*Math.sin(t*.9)).toFixed(1)+' '+(10*Math.sin(t*1.3)).toFixed(1)+')');
rise($('sw8'),p(u,TM.magnifier,TM.magnifier+.6));rise($('hunt'),p(u,TM.magnifier+.3,TM.magnifier+.9));