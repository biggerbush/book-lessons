rise($('tb'),p(u,TM.title_card+1,TM.title_card+1.6)); $('tbolt').setAttribute('opacity',(1-p(u,TM.title_card+2,TM.title_card+2.6)).toFixed(2)); rise($('theart'),p(u,TM.title_card+2.4,TM.title_card+3));

rise($('carn1'),p(u,TM.bulldog,TM.bulldog+.5)); rise($('dog1'),p(u,TM.bulldog+.4,TM.bulldog+.9));
$('leash').setAttribute('opacity',(p(u,TM.bulldog+.6,TM.bulldog+1)*(1-p(u,TM.no_leash,TM.no_leash+.4))).toFixed(2));
rise($('tag1'),p(u,TM.no_leash,TM.no_leash+.5));
const r1=p(u,TM.no_leash+.4,TM.no_leash+2.4), b1=r1>0&&r1<1?Math.abs(Math.sin(t*9))*12:0;
dm1.setAttribute('transform','translate('+(300*r1).toFixed(1)+' '+(-b1).toFixed(1)+')');
rise($('cop1'),p(u,TM.policeman,TM.policeman+.6)); rise($('warn1'),p(u,TM.policeman+1,TM.policeman+1.5));
rise($('prom1'),p(u,TM.policeman+5.6,TM.policeman+6.1)); rise($('slip1'),p(u,TM.policeman+6.6,TM.policeman+7.2));

const h2=p(u,TM.hilltop,TM.hilltop+1.2); $('pair2').setAttribute('opacity',cl(h2*3).toFixed(2)); pm2.setAttribute('transform','translate(0 '+(170*(1-h2)).toFixed(1)+')');
rise($('cop2'),p(u,TM.hilltop+1,TM.hilltop+1.6)); rise($('wait2'),p(u,TM.hilltop+6.2,TM.hilltop+6.8));
rise($('conf2'),p(u,TM.confession,TM.confession+.4)); [0,1,2].forEach(i=>rise($('cl'+i),p(u,TM.confession+.4+i*1.2,TM.confession+.9+i*1.2)));

const s3=SC[3][0]/K; rise($('face3'),p(u,s3+.3,s3+.9));
const d3=p(u,s3+.6,s3+1.2); rise($('dog3'),d3);
const k3=p(u,TM.soft_face,TM.soft_face+1.2);
$('brow3').setAttribute('d','M310 '+(392+8*k3).toFixed(1)+'L380 '+(420-28*k3).toFixed(1)+'M420 '+(420-28*k3).toFixed(1)+'L490 '+(392+8*k3).toFixed(1));
$('mouth3').setAttribute('d','M335 545Q400 '+(515+70*k3).toFixed(1)+' 465 545');
rise($('q3'),p(u,TM.soft_face+2.2,TM.soft_face+2.8)); rise($('arr3'),p(u,TM.out_of_sight,TM.out_of_sight+.5));
const r3=p(u,TM.out_of_sight+.6,TM.out_of_sight+3.2), b3=r3>0&&r3<1?Math.abs(Math.sin(t*9))*10:0, P3=ARC3(r3);
dm3.setAttribute('transform','translate('+P3[0].toFixed(1)+' '+(P3[1]-b3).toFixed(1)+')');
rise($('rex3'),d3*(1-p(u,TM.out_of_sight+.6,TM.out_of_sight+1)));
rise($('fight3'),p(u,TM.out_of_sight+5,TM.out_of_sight+5.6));

rise($('L4'),p(u,TM.raised_shield,TM.raised_shield+.5)); AR4.forEach((a,i)=>a.setAttribute('opacity',p(u,TM.raised_shield+.5+i*.3,TM.raised_shield+.8+i*.3).toFixed(2)));
$('sh4').setAttribute('transform','translate(0 '+(80*(1-p(u,TM.raised_shield+1.4,TM.raised_shield+2))).toFixed(1)+')');
rise($('R4'),p(u,TM.open_hands,TM.open_hands+.5)); rise($('hands4'),p(u,TM.open_hands+2,TM.open_hands+2.6));
rise($('sw4'),p(u,TM.stopwatch,TM.stopwatch+.5)); $('hand4').setAttribute('transform','rotate('+(360*p(u,TM.stopwatch+.3,TM.stopwatch+3)).toFixed(1)+' 220 770)');

rise($('flip5'),p(u,TM.flip_arrow-.2,TM.flip_arrow+.3)); $('flipr').setAttribute('transform','rotate('+(180*p(u,TM.flip_arrow,TM.flip_arrow+1.2)).toFixed(1)+' 1380 150)');
rise($('P5a'),p(u,TM.flip_arrow+1.2,TM.flip_arrow+1.7)); rise($('P5b'),p(u,TM.flip_arrow+1.8,TM.flip_arrow+2.3));
rise($('crowd5'),p(u,TM.crowd,TM.crowd+.5)); rise($('dig5'),p(u,TM.crowd+2,TM.crowd+2.5));
const c5=p(u,TM.crown,TM.crown+.8); $('crown5').setAttribute('opacity',c5.toFixed(2)); $('crown5').setAttribute('transform','translate(0 '+(-60*(1-c5)).toFixed(1)+')');
rise($('up5'),p(u,TM.crown+1,TM.crown+1.6)); rise($('acc5'),p(u,TM.crown+1.4,TM.crown+2));

rise($('st6'),p(u,TM.engineer,TM.engineer+.6)); $('bolt6').setAttribute('opacity',(.75+.25*Math.sin(t*5)).toFixed(2));
rise($('desk6'),p(u,TM.dept_desk,TM.dept_desk+.5)); rise($('dept6'),p(u,TM.dept_desk+1,TM.dept_desk+1.5));
const n6=u>=TM.name_plate+.6, c6=n6?'var(--gain)':'var(--loss)';
$('pt6').textContent=n6?'CONSULTING ENGINEER':'DEPARTMENT HEAD'; $('pt6').style.fill=c6; $('plate6').style.stroke=c6;
$('fit6').textContent=n6?'THE RIGHT FIT':'A POOR FIT'; $('fit6').style.fill=c6;
rise($('mgr6'),p(u,TM.name_plate+1.5,TM.name_plate+2)); rise($('end6'),p(u,TM.name_plate+7,TM.name_plate+7.6));

rise($('c7a'),p(u,TM.speech_bubble,TM.speech_bubble+.5)); rise($('b7'),p(u,TM.speech_bubble+1,TM.speech_bubble+1.5));
rise($('c7b'),p(u,TM.exit_door,TM.exit_door+.5));
const w=170-110*p(u,TM.exit_door+.8,TM.exit_door+2), sk=(170-w)*.25;
$('leaf7').setAttribute('points','1390,330 '+(1390-w).toFixed(1)+','+(330+sk).toFixed(1)+' '+(1390-w).toFixed(1)+','+(660-sk).toFixed(1)+' 1390,660');
$('w7').setAttribute('transform','translate('+(150*p(u,TM.exit_door+1.5,TM.exit_door+3.5)).toFixed(1)+' 0)');

rise($('mir8'),p(u,TM.mirror,TM.mirror+.5)); ['q8a','q8b','q8c','q8d'].forEach((id,i)=>rise($(id),p(u,TM.mirror+.3+i*.4,TM.mirror+.8+i*.4)));
rise($('lab8'),p(u,TM.mirror+2,TM.mirror+2.5)); $('ref8').setAttribute('transform','translate(0 '+(4*Math.sin(t*1.5)).toFixed(1)+')');