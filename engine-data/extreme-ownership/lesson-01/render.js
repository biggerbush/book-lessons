rise($('tp'),p(u,TM.title_mirror,TM.title_mirror+.6));$('tptr').setAttribute('transform','translate('+(8*Math.sin(t*3)).toFixed(1)+' 0)');
rise($('refl'),p(u,TM.title_mirror+5.8,TM.title_mirror+6.5));

BK.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.ramadi_city+i*.05,TM.ramadi_city+i*.05+.4)));
const HY=[368,504,640],VX=[298,650,826];
UN.forEach((c,i)=>{const s=t*(50+i*9)+i*170;
  if(i<3){c.setAttribute('cx',(140+(i%2?840-s%840:s%840)).toFixed(1));c.setAttribute('cy',HY[i])}else{c.setAttribute('cx',VX[i-3]);c.setAttribute('cy',(250+(i%2?500-s%500:s%500)).toFixed(1))}
  c.setAttribute('opacity',p(u,TM.many_units+i*.3,TM.many_units+i*.3+.4))});
rise($('leg'),p(u,TM.many_units,TM.many_units+.5));rise($('radio'),p(u,TM.radio,TM.radio+.5));
WV.forEach((w,i)=>w.setAttribute('opacity',Math.sin(t*5-i*1.3)>0?1:.2));

rise($('houses'),p(u,TM.two_houses,TM.two_houses+.5));rise($('fire'),p(u,TM.two_houses+1,TM.two_houses+1.5));
['f0','f1'].forEach((id,i)=>$(id).setAttribute('stroke-dashoffset',((i?1:-1)*t*80).toFixed(0)));
rise($('fogg'),p(u,TM.fog,TM.fog+.8));$('fg').setAttribute('transform','translate('+(24*Math.sin(t*.6)).toFixed(1)+' 0)');
rise($('enemy'),p(u,TM.fog+1,TM.fog+1.5));
CS.forEach((g,i)=>rise(g,p(u,TM.casualty+i*1.4,TM.casualty+i*1.4+.5)));rise($('night'),p(u,TM.casualty+5.3,TM.casualty+5.8));

rise($('rep'),p(u,TM.report,TM.report+.5));rise($('jk3'),p(u,TM.report+.4,TM.report+.9));
RL.forEach((r,i)=>r[0].setAttribute('width',(r[1]*p(u,TM.report+.5+i*.3,TM.report+.8+i*.3)).toFixed(1)));
rise($('bll'),p(u,TM.blame_list,TM.blame_list+.5));
BL.forEach((g,i)=>rise(g,p(u,TM.blame_list+.6+i*1.8,TM.blame_list+1.1+i*1.8)));

rise($('jk4'),p(u,TM.jocko,TM.jocko+.5));rise($('jk4s'),p(u,TM.jocko+1.7,TM.jocko+2.2));rise($('lbl4'),p(u,TM.jocko+.3,TM.jocko+.8));
[0,1,2].forEach(i=>{rise($('n'+i),p(u,TM.jocko+.5+i*.3,TM.jocko+1+i*.3));const k=p(u,TM.mirror-3.6+i*1.1,TM.mirror-3.2+i*1.1),l=$('ns'+i);l.setAttribute('x2',(112+(W[i]+16)*k).toFixed(1));l.setAttribute('opacity',k>0?1:0)});
rise($('lk4'),p(u,TM.mirror-.4,TM.mirror+.1));rise($('mir'),p(u,TM.mirror,TM.mirror+.6));rise($('ol'),p(u,TM.mirror+.8,TM.mirror+1.3));

rise($('jk5'),p(u,TM.briefing_room,TM.briefing_room+.5));rise($('brd'),p(u,TM.briefing_room+.4,TM.briefing_room+.9));rise($('aud'),p(u,TM.briefing_room+.8,TM.briefing_room+1.3));
RW.forEach((r,i)=>{const a=TM.fix_steps+i*1.6;rise(r[0],p(u,a,a+.4));rise(r[1],p(u,a+.8,a+1.2))});
rise($('nob'),p(u,TM.fix_steps+5.8,TM.fix_steps+6.4));

rise($('gw'),p(u,TM.trust_meter,TM.trust_meter+.5));rise($('exp'),p(u,TM.trust_meter+.4,TM.trust_meter+.9));
const na=Math.PI*(1.12+.76*p(u,TM.trust_meter+2.6,TM.trust_meter+3.8))+.02*Math.sin(t*6);
ndl.setAttribute('x2',(480+200*Math.cos(na)).toFixed(1));ndl.setAttribute('y2',(620+200*Math.sin(na)).toFixed(1));
rise($('ins'),p(u,TM.trust_meter+2.6,TM.trust_meter+3.1));
rise($('tm'),p(u,TM.team,TM.team+.5));rise($('rp'),p(u,TM.team+.4,TM.team+.9));
TA.forEach((a,i)=>{const h=110*p(u,TM.team+.5+i*.3,TM.team+1.1+i*.3),x=TX[i];a.setAttribute('d',h>5?'M'+x+' 510V'+(510-h).toFixed(1)+'m-14 14 14-14 14 14':'');});

rise($('wld'),p(u,TM.circle,TM.circle+.6));
FL.forEach((f,i)=>f.setAttribute('opacity',p(u,TM.circle+3+i*.4,TM.circle+3.4+i*.4)));
rise($('bl7'),p(u,TM.circle+7,TM.circle+7.5));$('bx').setAttribute('opacity',p(u,TM.circle+9,TM.circle+9.4));
rise($('eg'),p(u,TM.ego,TM.ego+.4));const eo=p(u,TM.ego+.8,TM.ego+1.6);
$('egc').setAttribute('opacity',(1-.75*eo).toFixed(2));$('egc').setAttribute('transform','rotate('+(-12*eo).toFixed(1)+' 965 290)');
rise($('el'),p(u,TM.ego+.8,TM.ego+1.3));
[0,1,2].forEach(i=>rise($('st'+i),p(u,TM.fix_plan+i*1.5,TM.fix_plan+i*1.5+.5)));

const s8=SC[8][0]/K;
rise($('qa'),p(u,s8+.3,s8+.8));rise($('qb'),p(u,s8+.7,s8+1.2));rise($('qc'),p(u,s8+1.1,s8+1.6));
rise($('g8'),p(u,s8+1.6,s8+2.2));rise($('act'),p(u,s8+4.5,s8+5.1));