const sp=p(u,TM.spotlight,TM.spotlight+.8)*(.85+.15*Math.sin(t*3));
$('cone').setAttribute('opacity',sp.toFixed(2));$('pool').setAttribute('opacity',sp.toFixed(2));rise($('qm0'),p(u,TM.spotlight+.4,TM.spotlight+1));

rise($('thk'),p(u,TM.thinker,TM.thinker+.5));
const qm=TM.question_mark;rise($('qb1'),p(u,qm,qm+.5));$('arw1').setAttribute('opacity',p(u,qm+.3,qm+.7));rise($('ans'),p(u,qm+.2,qm+.7));
const hk=p(u,qm+.6,qm+3.6)*5,h0=Math.min(4,Math.floor(hk)),hf=ease(hk-h0),A=AC[HP[h0]],B=AC[HP[h0+1]];
$('mag').setAttribute('transform',`translate(${(A[1]+(B[1]-A[1])*hf).toFixed(1)} ${(A[2]+(B[2]-A[2])*hf).toFixed(1)})`);$('mag').setAttribute('opacity',p(u,qm+.4,qm+.8));
AC[5][0].setAttribute('fill',u>=qm+3.6?'var(--gain)':'var(--stage)');rise($('anl'),p(u,qm+.8,qm+1.3));
QR.forEach((q,i)=>{const k=p(u,qm+4.6+i*.12,qm+5+i*.12);q.setAttribute('opacity',(k*(.45+.55*Math.abs(Math.sin(t*1.5+i)))).toFixed(2))});
rise($('adl'),p(u,qm+5.6,qm+6.1));

const bs=TM.bright_spot,sw=p(u,bs+4.2,bs+5.4),ax=610+730*sw,ay=365+10*sw;
$('beam').setAttribute('points',`300,460 300,490 ${ax.toFixed(0)},${(ay+110).toFixed(0)} ${ax.toFixed(0)},${(ay-110).toFixed(0)}`);
$('spot').setAttribute('cx',ax.toFixed(0));$('spot').setAttribute('cy',ay.toFixed(0));
const bo=p(u,TM.flashlight+.5,TM.flashlight+1.1);$('beam').setAttribute('opacity',bo);$('spot').setAttribute('opacity',bo);
rise($('fl'),p(u,TM.flashlight,TM.flashlight+.5));
const fk=p(u,bs,bs+.6);OB.forEach((o,i)=>{const nr=cl(1-Math.abs(o[0]-ax)/200);$('o'+i).setAttribute('opacity',(1-fk*.8*(1-nr)).toFixed(2))});
rise($('chn'),p(u,bs+4.2,bs+4.8));

const sc=TM.storm_cloud;rise($('wk'),p(u,sc,sc+.5));$('rain').setAttribute('stroke-dashoffset',(-(t*60)%22).toFixed(1));
BR.forEach((b,i)=>b.setAttribute('width',(BW[i]*p(u,sc+1.2+i*.5,sc+1.6+i*.5)).toFixed(0)));
rise($('smw'),p(u,sc+.5,sc+1));const sk=1-.45*p(u,sc+5.8,sc+7);$('sm').setAttribute('transform',`translate(680 690) scale(${sk.toFixed(3)}) translate(-680 -690)`);
rise($('stg'),p(u,TM.sunrise,TM.sunrise+.5));$('sunG').setAttribute('transform',`translate(0 ${(140*(1-p(u,TM.sunrise+.3,TM.sunrise+2.3))).toFixed(1)})`);
rise($('tlw'),p(u,TM.sunrise+1.5,TM.sunrise+2));rise($('qt'),p(u,TM.quote_card,TM.quote_card+.6));

rise($('fence'),p(u,TM.camp_fence,TM.camp_fence+.6));rise($('lec'),p(u,TM.camp_fence+1,TM.camp_fence+1.5));
IM.forEach((g,i)=>rise(g,p(u,TM.other_inmates+i*.3,TM.other_inmates+i*.3+.4)));
rise($('lq'),p(u,TM.escape_path,TM.escape_path+.5));rise($('escg'),p(u,TM.escape_path+1,TM.escape_path+1.6));$('esc').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));

// escape: Lec hides in the truck bed, then jumps out and runs toward FREEDOM
rise($('trw'),p(u,TM.truck,TM.truck+.6));
const dr=p(u,TM.truck+7.4,TM.truck+11.4),tx=130+630*dr;$('tk').setAttribute('transform',`translate(${tx.toFixed(1)} 0)`);
const hidO=u<TM.open_field?p(u,TM.truck+1,TM.truck+1.5)*(.75+.25*Math.sin(t*3)):0;$('hid').setAttribute('opacity',hidO.toFixed(2));
const rn=p(u,TM.open_field,TM.open_field+2),sx=tx+125,mv=rn>0&&rn<1;
const rx=sx+(LEX-sx)*rn,ry=470+46*rn-60*Math.sin(Math.PI*rn)-(mv?5*Math.abs(Math.sin(t*12)):0);
$('runner').setAttribute('transform',`translate(${rx.toFixed(1)} ${ry.toFixed(1)})`);
$('rbody').setAttribute('transform','rotate(10)');
const la=(mv?Math.sin(t*14):1)*.55,s1=Math.sin(la),c1=Math.cos(la);
$('lg0').setAttribute('d',`M-6 82l${(38*s1).toFixed(1)} ${(38*c1).toFixed(1)}`);
$('lg1').setAttribute('d',`M6 82l${(-38*s1).toFixed(1)} ${(38*c1).toFixed(1)}`);
$('am0').setAttribute('d',`M-4 64l${(-30*s1).toFixed(1)} ${(26*c1).toFixed(1)}`);
$('am1').setAttribute('d',`M4 64l${(30*s1).toFixed(1)} ${(26*c1).toFixed(1)}`);
$('runner').setAttribute('opacity',p(u,TM.open_field,TM.open_field+.3));
$('rpath').setAttribute('d',`M${sx.toFixed(1)} 512Q${((sx+LEX)/2).toFixed(1)} 400 ${(LEX-50).toFixed(1)} 590`);
$('rpath').setAttribute('opacity',(.8*p(u,TM.open_field+.2,TM.open_field+1)).toFixed(2));
$('rpath').setAttribute('stroke-dashoffset',(-t*30).toFixed(1));
rise($('frd'),p(u,TM.open_field,TM.open_field+.5));rise($('bt5'),p(u,TM.open_field+3.4,TM.open_field+4));

rise($('tb'),p(u,TM.toolbox,TM.toolbox+.5));
[TM.checklist,TM.checklist+2.6,TM.checklist+4.8,TM.smile_face].forEach((a,i)=>{rise(RW[i][0],p(u,a,a+.5));if(RW[i][1])RW[i][1].setAttribute('opacity',p(u,a+1,a+1.3))});
rise($('smile'),p(u,TM.smile_face+.6,TM.smile_face+1.1));

const al=TM.alarm_clock,rg=u>=al&&u<al+2.5?4*Math.sin(t*40):0;
rise($('clkw'),p(u,al,al+.5));$('clk').setAttribute('transform',`translate(290 450) rotate(${rg.toFixed(1)})`);$('mh').setAttribute('transform',`rotate(${((t*60)%360).toFixed(1)})`);
[TM.coffee_cup,TM.coffee_cup+2.9,TM.heart].forEach((a,i)=>rise($('mc'+i),p(u,a,a+.5)));
const hs=1+(u>=TM.heart?.08*Math.abs(Math.sin(t*4)):0);$('hrt').setAttribute('transform',`translate(590 565) scale(${hs.toFixed(3)}) translate(-590 -565)`);
rise($('dd'),p(u,TM.heart+3.2,TM.heart+3.6));DD.forEach((c,i)=>c.setAttribute('fill',u>=TM.heart+3.4+i*.3?'var(--gain)':'var(--line)'));
rise($('tg'),p(u,TM.heart+3.8,TM.heart+4.4));

const sn=TM.sticky_note;rise($('qa'),p(u,sn,sn+.5));rise($('qb'),p(u,sn+.5,sn+1));rise($('note'),p(u,sn+1,sn+1.5));
$('nst').setAttribute('x2',(1114+128*p(u,sn+1.8,sn+2.3)).toFixed(1));rise($('nnew'),p(u,sn+2.4,sn+2.9));
rise($('flw'),p(u,sn+6.6,sn+7.2));