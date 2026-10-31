SB.forEach((b,i)=>{rise(b[0],p(u,.1+i*.12,.5+i*.12));if(i>1){const a=TM.overloaded+1.4+(6-i)*.3,k=p(u,a,a+.6);b[1].setAttribute('x',(1140+140*k).toFixed(1));b[1].setAttribute('opacity',(1-k).toFixed(2))}else{const on=u>=TM.overloaded+3.6;b[1].setAttribute('fill',on?'var(--gain)':'var(--stage)');b[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)')}});

rise($('aus'),p(u,TM.austen,TM.austen+.5));rise($('fam'),p(u,TM.austen+1.2,TM.austen+1.7));rise($('bub'),p(u,TM.austen+2,TM.austen+2.5));
rise($('door'),p(u,TM.blotter,TM.blotter+.5));rise($('hide'),p(u,TM.blotter+1.2,TM.blotter+1.7));
rise($('m1'),p(u,TM.blotter+4.2,TM.blotter+4.8));rise($('m2'),p(u,TM.blotter+8.8,TM.blotter+9.3));

rise($('cot'),p(u,TM.cottage,TM.cottage+.5));
[0,1].forEach(i=>{const a=p(u,TM.cottage+1.5+i*.4,TM.cottage+2+i*.4),k=p(u,TM.chores+i*.6,TM.chores+1+i*.6),e=$('ch'+i);e.setAttribute('opacity',(a*(1-k)).toFixed(2));e.setAttribute('transform','translate('+(160*k).toFixed(1)+' '+(-90*k).toFixed(1)+')')});
rise($('free'),p(u,TM.chores+1.6,TM.chores+2.1));
BK.forEach((b,i)=>rise(b,p(u,TM.novels+i*.35,TM.novels+i*.35+.4)));
rise($('g1'),p(u,TM.novels+5.3,TM.novels+5.8));rise($('g2'),p(u,TM.novels+7.5,TM.novels+8));

const lv=.25*p(u,TM.tax_meter,TM.tax_meter+1.2)+.6*p(u,TM.email_pile,TM.email_pile+5.5),an=Math.PI*(1-lv);
$('ndl').setAttribute('x2',(330+130*Math.cos(an)).toFixed(1));$('ndl').setAttribute('y2',(560-130*Math.sin(an)).toFixed(1));
$('garc').setAttribute('stroke-dasharray',(503*lv).toFixed(1)+' 600');
rise($('gauge'),p(u,TM.tax_meter,TM.tax_meter+.5));rise($('proj'),p(u,TM.tax_meter+.8,TM.tax_meter+1.3));
OV.forEach((g,i)=>{const a=TM.email_pile+i*1.8;rise(g,p(u,a,a+.5))});
rise($('notp'),p(u,TM.email_pile+6.6,TM.email_pile+7.1));rise($('price'),p(u,TM.email_pile+10,TM.email_pile+10.6));

PJ.forEach((r,i)=>{const a=i<2?TM.one_project+i*.4:TM.five_projects+(i-2)*.5;rise(r,p(u,a,a+.4))});
rise($('bar'),p(u,TM.one_project+.5,TM.one_project+1));
const f=.12+.33*p(u,TM.five_projects,TM.five_projects+3)+.5*p(u,TM.shrink_bar,TM.shrink_bar+2.5);
$('ov').setAttribute('width',(1060*f).toFixed(1));$('rw').setAttribute('x',(120+1060*f).toFixed(1));$('rw').setAttribute('width',(1060*(1-f)).toFixed(1));
rise($('evg'),p(u,TM.shrink_bar,TM.shrink_bar+.5));$('ev').setAttribute('width',(260*p(u,TM.shrink_bar+1.5,TM.shrink_bar+3.5)).toFixed(1));
rise($('push'),p(u,TM.shrink_bar+2,TM.shrink_bar+2.6));

rise($('snw'),p(u,TM.slow_snail,TM.slow_snail+.5));
$('snail').setAttribute('transform','translate('+(200+240*lin(u,TM.slow_snail,TM.slow_snail+14)).toFixed(1)+' 704)');
PB.forEach((r,i)=>{if(i<3){rise(r,p(u,TM.slow_snail+i*.3,TM.slow_snail+i*.3+.4));return}const a=TM.stress_face+(i-3)*.6,k=p(u,a,a+.5);r.setAttribute('transform','translate(0 '+(-120*(1-k)).toFixed(1)+')');r.setAttribute('opacity',k.toFixed(2))});
rise($('nreq'),p(u,TM.stress_face,TM.stress_face+.5));rise($('stress'),p(u,TM.stress_face+.6,TM.stress_face+1.1));
$('drop').setAttribute('transform','translate(0 '+(30*((t*.8)%1)).toFixed(1)+')');
rise($('exh'),p(u,TM.stress_face+3.8,TM.stress_face+4.3));

LN.forEach((l,i)=>{rise(l.g,p(u,TM.short_list+i*.3,TM.short_list+i*.3+.4));const tw=120-95*p(u,TM.short_list+1.8,TM.short_list+3.2),a=TM.finish_flag+i*.5,q=.3*p(u,TM.short_list+2.6,TM.short_list+4.2)+.7*p(u,a,a+1.8);
  l.tax.setAttribute('width',tw.toFixed(1));l.pr.setAttribute('x',(340+tw).toFixed(1));l.pr.setAttribute('width',((700-tw)*q).toFixed(1));l.fl.setAttribute('opacity',(.25+.75*p(u,a+1.6,a+2)).toFixed(2))});
rise($('shr'),p(u,TM.short_list+1.8,TM.short_list+2.3));rise($('soon'),p(u,TM.finish_flag+2.5,TM.finish_flag+3.1));rise($('gem'),p(u,TM.gem,TM.gem+.6));

rise($('req'),p(u,TM.price_tag,TM.price_tag+.5));rise($('tag'),p(u,TM.price_tag+.8,TM.price_tag+1.3));
$('tagS').setAttribute('transform','rotate('+(6*Math.sin(t*2)).toFixed(2)+' 440 480)');
rise($('cal'),p(u,TM.calendar,TM.calendar+.5));rise($('leg'),p(u,TM.calendar+1,TM.calendar+1.5));
WK.forEach((r,i)=>rise(r,p(u,TM.calendar+.4+i*.1,TM.calendar+.8+i*.1)));
MT.forEach((r,i)=>{const a=TM.calendar+1.2+i*.35;rise(r,p(u,a,a+.3))});
rise($('no'),p(u,TM.calendar+6.5,TM.calendar+7.1));

rise($('qa'),p(u,TM.scissors,TM.scissors+.5));rise($('qb'),p(u,TM.scissors+.4,TM.scissors+.9));rise($('qc'),p(u,TM.scissors+.8,TM.scissors+1.3));
rise($('lab1'),p(u,TM.scissors+1.2,TM.scissors+1.7));rise($('list'),p(u,TM.scissors+1.4,TM.scissors+1.9));rise($('scw'),p(u,TM.scissors+1.6,TM.scissors+2.1));
const o=.5+.5*Math.sin(t*10);$('sb1').setAttribute('d','M0 -14L70 '+(10-30*o).toFixed(1));$('sb2').setAttribute('d','M0 14L70 '+(-10+30*o).toFixed(1));
$('sc').setAttribute('transform','translate('+(1010+380*p(u,TM.scissors+2,TM.scissors+4.2)).toFixed(1)+' 704)');
const kc=p(u,TM.scissors+4.2,TM.scissors+5),lt=u>=TM.scissors+7.3;
LL.forEach((l,i)=>{if(i===2){l.setAttribute('transform','translate(0 '+(20*kc).toFixed(1)+')');l.setAttribute('opacity',(1-kc).toFixed(2))}else l.setAttribute('stroke',lt?'var(--gain)':'var(--ink)')});
rise($('lab2'),p(u,TM.scissors+7.3,TM.scissors+7.8));