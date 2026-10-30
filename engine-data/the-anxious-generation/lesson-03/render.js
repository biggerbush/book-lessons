rise($('t_off'),p(u,TM.two_worlds,TM.two_worlds+.6));
rise($('t_on'),p(u,TM.two_worlds+5.6,TM.two_worlds+6.2));
TD.forEach((d,i)=>d.setAttribute('opacity',(p(u,TM.two_worlds+6+i*.15,TM.two_worlds+6.4+i*.15)*(.55+.45*Math.sin(t*3-i))).toFixed(2)));

rise($('tv'),p(u,TM.tv_news,TM.tv_news+.6));
$('tvbar').setAttribute('opacity',Math.sin(t*5)>-.5?1:.4);
rise($('milk'),p(u,TM.milk_carton,TM.milk_carton+.6));
rise($('chart'),p(u,TM.crime_chart,TM.crime_chart+.5));
$('cr_up').setAttribute('stroke-dashoffset',(1-p(u,TM.crime_chart+.4,TM.crime_chart+1.4)).toFixed(3));
$('cr_dn').setAttribute('stroke-dashoffset',(1-p(u,TM.crime_chart+1.4,TM.crime_chart+3)).toFixed(3));
rise($('fearmsg'),p(u,TM.crime_chart+3.2,TM.crime_chart+3.8));

rise($('kids_in'),p(u,TM.parent_hand,TM.parent_hand+.6));
CARDS.forEach((c,i)=>{const a=TM.school_walk+i*.6;rise(c[0],p(u,a,a+.4));c[1].setAttribute('opacity',p(u,a+1.8,a+2.2).toFixed(2))});
rise($('stamp'),p(u,TM.safety_label,TM.safety_label+.5));

rise($('phone3'),p(u,TM.smartphone,TM.smartphone+.6));
const dk=p(u,TM.smartphone+1,TM.smartphone+2.2),dx=(440-98*dk).toFixed(1);
$('door3').setAttribute('points','300,400 '+dx+','+(400-24*dk).toFixed(1)+' '+dx+','+(660+24*dk).toFixed(1)+' 300,660');
[0,1.8,4].forEach((o,i)=>rise(TH[i],p(u,TM.strangers+o,TM.strangers+o+.5)));

AG.forEach((g,i)=>rise(g,p(u,TM.age_signs+i*.8,TM.age_signs+i*.8+.5)));
rise($('online13'),p(u,TM.age_13,TM.age_13+.6));
$('bar13').setAttribute('transform','rotate('+(-70*p(u,TM.age_13+5.6,TM.age_13+6.6)).toFixed(1)+' 1299 372)');
rise($('nocheck'),p(u,TM.age_13+6,TM.age_13+6.5));
rise($('chk'),p(u,TM.checkbox,TM.checkbox+.5));
$('tick').setAttribute('stroke-dashoffset',(1-p(u,TM.checkbox+1,TM.checkbox+1.6)).toFixed(3));

rise($('mars0'),p(u,TM.mars,TM.mars+.6));
const rk=p(u,TM.mars+2.2,TM.mars+4.2),rq=1-rk;
$('rocket').setAttribute('transform','translate('+(rq*rq*140+2*rq*rk*120+rk*rk*300).toFixed(1)+' '+(rq*rq*700+2*rq*rk*320+rk*rk*280).toFixed(1)+')');
$('rocket').setAttribute('opacity',(p(u,TM.mars+2,TM.mars+2.3)*(1-p(u,TM.mars+4.2,TM.mars+4.6))).toFixed(2));
rise($('mkid'),p(u,TM.mars+4.2,TM.mars+4.7));
rise($('notest'),p(u,TM.mars+5,TM.mars+5.5));
rise($('admach'),p(u,TM.ad_machine,TM.ad_machine+.6));
FACES.forEach((f,i)=>f.setAttribute('cx',(840+((t*60+i*45)%180)).toFixed(1)));
TAGS.forEach((g,i)=>g.setAttribute('transform','translate('+(1260+((t*60+i*57)%170)).toFixed(1)+' 0)'));
$('gear').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 1130 460)');
rise($('adcap'),p(u,TM.ad_machine+3.4,TM.ad_machine+4));

const th=9*p(u,TM.seesaw+.3,TM.seesaw+1.5),ra=th*Math.PI/180,cx=450*Math.cos(ra),sy=450*Math.sin(ra);
$('beam').setAttribute('transform','rotate('+(-th).toFixed(2)+' 800 600)');
$('lp').setAttribute('transform','translate('+(800-cx).toFixed(1)+' '+(600+sy).toFixed(1)+')');
$('rp').setAttribute('transform','translate('+(800+cx).toFixed(1)+' '+(600-sy).toFixed(1)+')');
SH.forEach((s,i)=>rise(s,p(u,TM.scraped_knee+i*.4,TM.scraped_knee+i*.4+.4)));
DG.forEach((s,i)=>rise(s,p(u,TM.shield+i*.5,TM.shield+i*.5+.4)));
rise($('cap1'),p(u,TM.shield+5.4,TM.shield+6));rise($('cap2'),p(u,TM.shield+6.2,TM.shield+6.8));

rise($('gauges'),p(u,TM.balance,TM.balance+.6));
const gk=p(u,TM.balance+2.2,TM.balance+3.6),gh=60+300*gk;
['gf1','gf2'].forEach(id=>{$(id).setAttribute('height',gh.toFixed(1));$(id).setAttribute('y',(652-gh).toFixed(1))});
rise($('kidout'),p(u,TM.kid_outside,TM.kid_outside+.6));
$('kid7').setAttribute('transform','translate('+(1060+110*Math.sin(t*.8)).toFixed(1)+' '+(-6*Math.abs(Math.sin(t*4))).toFixed(1)+')');
rise($('later'),p(u,TM.kid_outside+2,TM.kid_outside+2.6));

rise($('ql'),p(u,TM.question,TM.question+.5));
rise($('qa'),p(u,TM.question+3,TM.question+3.5));rise($('qb'),p(u,TM.question+3.4,TM.question+3.9));rise($('qc'),p(u,TM.question+3.8,TM.question+4.3));
rise($('qg'),p(u,TM.question+4.5,TM.question+5));