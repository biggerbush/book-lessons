const s0k=p(u,TM.sheet_paper+.5,TM.sheet_paper+2);
rise($('head0'),p(u,TM.spinning_head,TM.spinning_head+.5));
$('spin').setAttribute('transform','rotate('+((t*300*(1-s0k))%360).toFixed(1)+' 1300 300)');
$('spin').setAttribute('opacity',(1-s0k).toFixed(2)); $('calm0').setAttribute('opacity',s0k.toFixed(2));
rise($('paper0'),p(u,TM.sheet_paper,TM.sheet_paper+.6));

rise($('hawk'),p(u,TM.dean_hawkes,TM.dean_hawkes+.5)); rise($('road1'),p(u,TM.dean_hawkes+3,TM.dean_hawkes+3.6));
const f1=TM.fog_cloud+6.6, fk=p(u,f1,f1+1.5);
$('fog').setAttribute('opacity',(p(u,TM.fog_cloud,TM.fog_cloud+.8)*(1-.85*fk)).toFixed(2));
rise($('fogl'),p(u,TM.fog_cloud+.4,TM.fog_cloud+1)); dr($('fact1'),fk,830);
rise($('flag1'),p(u,f1+1,f1+1.5)); rise($('cap1'),p(u,f1,f1+.6));

[TM.magnifier,TM.stranger,TM.lawyer_scale].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
let wv='';for(let x=230;x<=390;x+=5)wv+=(x>230?'L':'M')+x+' '+(450+20*Math.sin(x/13+t*3)).toFixed(1);
$('wav2').setAttribute('d',wv);
$('box2').setAttribute('transform','translate('+(190*p(u,TM.stranger+.8,TM.stranger+2)).toFixed(1)+' 0)');
const a2=7*Math.sin(t*1.6)*p(u,TM.lawyer_scale+.5,TM.lawyer_scale+1.5), sa=130*Math.sin(a2*Math.PI/180);
$('beam').setAttribute('transform','rotate('+a2.toFixed(2)+' 1270 340)');
$('pL').setAttribute('transform','translate(0 '+(-sa).toFixed(1)+')'); $('pR').setAttribute('transform','translate(0 '+sa.toFixed(1)+')');

rise($('gal'),p(u,TM.galen,TM.galen+.5)); rise($('sky3'),p(u,TM.galen,TM.galen+.8));
const o3=p(u,TM.officer,TM.officer+.6), w3=TM.officer+7.3, wk=p(u,w3,w3+.6), fe=(o3*(1-wk)).toFixed(2);
rise($('off'),o3); $('fear').setAttribute('opacity',fe); $('pace').setAttribute('opacity',fe);
$('pace').setAttribute('stroke-dashoffset',(-t*40).toFixed(1));
$('galf').setAttribute('transform','translate('+(3*Math.sin(t*37)*o3*(1-wk)).toFixed(1)+' 0)');
rise($('wr3'),wk); rise($('cap3'),p(u,w3+.3,w3+.9));

[TM.question_one,TM.question_two,TM.question_rest,TM.question_rest+2.8].forEach((a,i)=>rise($('q'+i),p(u,a,a+.5)));
const p4=TM.question_rest+5.8, pk=p(u,p4,p4+1);
rise($('blur4l'),p(u,TM.question_one,TM.question_one+.6));
$('blur4w').setAttribute('opacity',(p(u,TM.question_one,TM.question_one+.6)*(1-.7*pk)).toFixed(2));
rise($('plan4'),pk); dr($('arr4'),pk,430);

const rz=p(u,TM.gavel-.4,TM.gavel+.1), g5=p(u,TM.gavel+.2,TM.gavel+.45);
rise($('gav'),p(u,TM.gavel-.6,TM.gavel-.1)); rise($('tank5'),p(u,TM.gavel-.6,TM.gavel-.1));
$('gavA').setAttribute('transform','rotate('+(28*rz*(1-g5)).toFixed(1)+' 560 485)');
$('hit5').setAttribute('opacity',(g5*(1-p(u,TM.gavel+.6,TM.gavel+1.2))).toFixed(2));
const lv=340*(1-.75*p(u,TM.gavel+.6,TM.gavel+3)); $('lvl5').setAttribute('y',(634-lv).toFixed(1)); $('lvl5').setAttribute('height',lv.toFixed(1));
rise($('jam'),p(u,TM.william_james,TM.william_james+.5));
rise($('wgh5'),p(u,TM.william_james+7.4,TM.william_james+8)); $('arc5').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 160 770)');

rise($('trk6'),p(u,TM.running_shoes-.6,TM.running_shoes-.1)); rise($('shoeW'),p(u,TM.running_shoes,TM.running_shoes+.5));
const sx=230+1120*p(u,TM.running_shoes+.6,TM.calendar+7), bob=sx<1349?-6*Math.abs(Math.sin(t*9)):0;
$('shoe').setAttribute('transform','translate('+sx.toFixed(1)+' '+(632+bob).toFixed(1)+')');
QM.forEach(([e,x],i)=>{const a=p(u,TM.running_shoes+.3+i*.2,TM.running_shoes+.6+i*.2);e.setAttribute('opacity',(a*cl(1-(sx-x)/120)).toFixed(2))});
rise($('cal6'),p(u,TM.calendar,TM.calendar+.5)); dr($('calc'),p(u,TM.calendar+1,TM.calendar+2),215);
rise($('less6'),p(u,TM.calendar+6.2,TM.calendar+6.8));

const n7=TM.notebook+3.4;
rise($('nb7'),p(u,TM.notebook,TM.notebook+.6)); rise($('fa7'),p(u,n7,n7+.5)); rise($('op7'),p(u,n7+1.8,n7+2.3));
dr($('oc7'),p(u,n7+3.4,n7+4.4),1200);
rise($('clk7'),p(u,TM.clock,TM.clock+.5)); const ck=p(u,TM.clock+.3,TM.clock+2.3);
hand('mh7',720*ck,120); hand('hh7',240*ck,80);

const q8=SC[8][0]/K+.3;
rise($('qa'),p(u,q8,q8+.5)); rise($('qb'),p(u,q8+.4,q8+.9)); rise($('qc'),p(u,q8+.8,q8+1.3)); rise($('m8'),p(u,q8+1.2,q8+1.8));
rise($('pen8'),p(u,TM.pencil,TM.pencil+.4)); const k8=p(u,TM.pencil+.3,TM.pencil+2.3), pp=bz(k8);
dr($('ln8'),k8,L8); $('pc8').setAttribute('transform','translate('+pp[0].toFixed(1)+' '+pp[1].toFixed(1)+')');