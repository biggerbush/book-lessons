rise($('tw0'),p(u,TM.twins,TM.twins+.6));rise($('tw1'),p(u,TM.twins+.3,TM.twins+.9));
$('tws').setAttribute('opacity',p(u,TM.twins+.6,TM.twins+1.2));$('twst').setAttribute('transform','rotate('+(t*20%360).toFixed(1)+' 1325 250)');
$('twl').setAttribute('opacity',p(u,TM.twins+4,TM.twins+4.6));

rise($('sch'),p(u,TM.school,TM.school+.6));rise($('cmp'),p(u,TM.computer,TM.computer+.6));
LT.forEach((c,i)=>c.setAttribute('fill',(i+Math.floor(t*3))%3===0?'var(--gain)':'var(--line)'));
GR.forEach((g,i)=>g.setAttribute('opacity',p(u,TM.computer+.8+i*.04,TM.computer+1.1+i*.04)));
rise($('gridl'),p(u,TM.computer+1.5,TM.computer+2));rise($('gts'),p(u,TM.young_gates,TM.young_gates+.6));
const hs=1+.12*Math.abs(Math.sin(t*3));$('hrt').setAttribute('transform','translate(1050 440) scale('+hs.toFixed(3)+') translate(-1050 -440)');

const s2=SC[2][0]/K;rise($('moon'),p(u,s2+.3,s2+.9));
ST.forEach((s,i)=>s.setAttribute('opacity',p(u,s2+.6+i*.4,s2+1+i*.4)));
const gk=p(u,s2+2.5,TM.microsoft),gx=165+gk*650,gi=Math.min(4,Math.floor((gx-140)/150));
$('gd').setAttribute('cx',gx.toFixed(1));$('gd').setAttribute('cy',(720-(gi+1)*72-24-20*Math.abs(Math.sin(Math.PI*(gx-140)/150))).toFixed(1));
$('gd').setAttribute('opacity',p(u,s2+2.3,s2+2.6));
rise($('ms'),p(u,TM.microsoft,TM.microsoft+.6));rise($('tkt'),p(u,TM.lottery,TM.lottery+.6));
$('tkst').setAttribute('transform','rotate('+(t*25%360).toFixed(1)+' 1360 515)');rise($('few'),p(u,TM.lottery+1.5,TM.lottery+2.1));

rise($('bl'),p(u,TM.kent,TM.kent+.5));rise($('kt'),p(u,TM.kent+.4,TM.kent+.9));
const mf=p(u,TM.mountain+.8,TM.mountain+2);
$('bars').setAttribute('opacity',p(u,TM.kent+3.6,TM.kent+4));
BR.forEach((b,i)=>{b.setAttribute('width',(440*p(u,TM.kent+3.8+i*.3,TM.kent+4.8+i*.3)).toFixed(1));b.setAttribute('opacity',i%2?1-.75*mf:1)});
$('ktf').setAttribute('opacity',1-.8*mf);rise($('mtn'),p(u,TM.mountain,TM.mountain+.7));

const a4=TM.split_path;rise($('same'),p(u,a4,a4+.5));rise($('sp2'),p(u,a4,a4+.5));
const k0=p(u,a4+.6,a4+2),k1=p(u,a4+3.4,a4+5),k2=p(u,a4+6.7,a4+8.2);
draw(PS,LS,k0);draw(PU,LU,k1);draw(PD,LD,k2);
const sp=PS.getPointAtLength(LS*k0),gp=k1>0?PU.getPointAtLength(LU*k1):sp,lp=k2>0?PD.getPointAtLength(LD*k2):sp;
$('dg').setAttribute('cx',gp.x.toFixed(1));$('dg').setAttribute('cy',(gp.y-14*(1-k1)).toFixed(1));
$('dl').setAttribute('cx',lp.x.toFixed(1));$('dl').setAttribute('cy',(lp.y+14*(1-k2)).toFixed(1));
const dv=p(u,a4+.6,a4+1);$('dg').setAttribute('opacity',dv);$('dl').setAttribute('opacity',dv);
rise($('up'),p(u,a4+4.6,a4+5.2));rise($('pbar'),p(u,a4+8,a4+8.4));rise($('dn'),p(u,a4+8.2,a4+8.8));rise($('tw4'),p(u,a4+11.7,a4+12.3));

rise($('scl'),p(u,TM.scale,TM.scale+.6));rise($('cld'),p(u,TM.storm_cloud,TM.storm_cloud+.6));
const deg=-4+11*p(u,TM.storm_cloud+.4,TM.storm_cloud+1.8)+1.2*Math.sin(t*1.4),ar=deg*Math.PI/180,cx5=340*Math.cos(ar),cy5=340*Math.sin(ar);
const bm=$('beam');bm.setAttribute('x1',(800-cx5).toFixed(1));bm.setAttribute('y1',(500-cy5).toFixed(1));bm.setAttribute('x2',(800+cx5).toFixed(1));bm.setAttribute('y2',(500+cy5).toFixed(1));
$('pl').setAttribute('transform','translate('+(800-cx5).toFixed(1)+' '+(500-cy5).toFixed(1)+')');$('pr').setAttribute('transform','translate('+(800+cx5).toFixed(1)+' '+(500+cy5).toFixed(1)+')');
rise($('bil'),p(u,TM.billions,TM.billions+.5));CR.forEach(([c,e])=>e.setAttribute('opacity',p(u,TM.billions+c*.03,TM.billions+.3+c*.03)));

rise($('c6a'),p(u,TM.trophy,TM.trophy+.6));rise($('c6b'),p(u,TM.fallen_man,TM.fallen_man+.5));
$('fall').setAttribute('transform','translate(860 504) rotate('+(-90*p(u,TM.fallen_man+.6,TM.fallen_man+1.4)).toFixed(1)+')');
rise($('c6c'),p(u,TM.mirror,TM.mirror+.6));rise($('adm'),p(u,TM.mirror+4.6,TM.mirror+5.2));

const s7=SC[7][0]/K,mp=u>=TM.many_people;
DT.forEach((d,i)=>{d.setAttribute('opacity',p(u,s7+.4+i*.03,s7+.7+i*.03));d.setAttribute('fill',u>=TM.many_people+i*.02?'var(--gain)':'var(--muted)')});
rise($('out'),p(u,s7+.3,s7+.8));$('out').setAttribute('opacity',(p(u,s7+.3,s7+.8)*(1-.2*p(u,TM.many_people,TM.many_people+.8))).toFixed(2));
$('ost').setAttribute('transform','rotate('+(t*30%360).toFixed(1)+' 900 250)');
$('trend').setAttribute('opacity',p(u,TM.many_people+.6,TM.many_people+1.2));rise($('patl'),p(u,TM.many_people+1,TM.many_people+1.6));
rise($('magw'),p(u,TM.magnifier,TM.magnifier+.5));
const m1=p(u,TM.magnifier+.5,TM.magnifier+3),m2=p(u,TM.magnifier+3,TM.many_people),mx=900+(500-900)*m1+700*m2+(mp?0:20*Math.sin(t*1.5)),my=290+(640-56-290)*m1-140*m2;
$('mag').setAttribute('transform','translate('+mx.toFixed(1)+' '+my.toFixed(1)+')');
rise($('fgv'),p(u,TM.forgive,TM.forgive+.6));

rise($('qa'),p(u,TM.question,TM.question+.5));rise($('qb'),p(u,TM.question+5.4,TM.question+5.9));rise($('qc'),p(u,TM.question+5.8,TM.question+6.3));
rise($('qt'),p(u,TM.question+6.4,TM.question+7));