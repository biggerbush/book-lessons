const ac=TM.alarm_clock,rg=u>=ac&&u<ac+3.2;
  rise($('room0'),p(t,.1,.7));
  RN0.forEach((l,i)=>{const y=306+((t*110+i*37)%88);l.setAttribute('d','M'+RX0[i]+' '+y.toFixed(1)+'l-4 18')});
  rise($('clockw'),p(u,ac,ac+.5));
  $('clock').setAttribute('transform','rotate('+(rg?6*Math.sin(t*38):0).toFixed(2)+' 1070 600)');
  $('ring').setAttribute('opacity',rg?(Math.sin(t*20)>0?1:.3):0);
  rise($('think'),p(u,ac+3.4,ac+3.9));
  $('qm').setAttribute('transform','rotate('+(6*Math.sin(t*1.6)).toFixed(2)+' 1350 510)');

  rise($('map1'),p(u,TM.okinawa_map,TM.okinawa_map+.5));
  PN.forEach((c,i)=>{const a=TM.okinawa_map+1+i*.3;c.setAttribute('opacity',p(u,a,a+.3))});
  rise($('elder'),p(u,TM.elder_smiling,TM.elder_smiling+.5));
  [0,1,2].forEach(i=>{const a=TM.elder_smiling+1.2+i*.7;rise($('tg'+i),p(u,a,a+.4))});
  rise($('auth'),p(u,TM.two_authors,TM.two_authors+.5));
  AU.forEach((g,i)=>g.setAttribute('transform','translate('+(160*(1-p(u,TM.two_authors,TM.two_authors+1.4+i*.3))).toFixed(1)+' 0)'));
  rise($('ans'),p(u,TM.two_authors+4.9,TM.two_authors+5.5));

  const w0=TM.ikigai_word;
  rise($('win'),p(u,w0,w0+.5));
  $('sun').setAttribute('cy',(520-120*p(u,w0+2.6,w0+4.6)).toFixed(1));
  $('rays').setAttribute('opacity',p(u,w0+4.2,w0+4.8));
  rise($('riser'),p(u,w0+4,w0+4.6));
  rise($('quote'),p(u,TM.quote_card,TM.quote_card+.5));
  FC.forEach((g,i)=>{const a=TM.many_faces+i*.15;rise(g,p(u,a,a+.4))});
  rise($('fl'),p(u,TM.many_faces+1.6,TM.many_faces+2.1));

  [TM.circle_love,TM.circle_skill,TM.circle_need,TM.circle_paid].forEach((a,i)=>{$('vc'+i).setAttribute('r',(170*p(u,a,a+.7)).toFixed(1));rise($('vl'+i),p(u,a+.3,a+.8))});
  rise($('ctr'),p(u,TM.center_star,TM.center_star+.5));
  rise($('ikl'),p(u,TM.center_star+.4,TM.center_star+.9));
  $('star').setAttribute('transform','rotate('+((t*30)%360).toFixed(1)+' 800 492)');

  const cp=TM.calendar_page;
  rise($('cal'),p(u,cp,cp+.5));
  $('x1').setAttribute('stroke-dashoffset',1-p(u,cp+2,cp+2.6));
  $('x2').setAttribute('stroke-dashoffset',1-p(u,cp+2.5,cp+3.1));
  const go=TM.gardener_old;
  rise($('gard'),p(u,go,go+.5));
  PL.forEach((q,i)=>{const h=(70+i*30)*p(u,go+.6+i*.4,go+2+i*.4);q[0].setAttribute('d','M'+q[2]+' 680V'+(680-h).toFixed(1));q[1].setAttribute('cy',(680-h).toFixed(1));q[1].setAttribute('r',h>4?16:0)});
  DR.forEach((d,i)=>{const c=(t*1.2+i/3)%1;d.setAttribute('cx',(1118+i*14+c*20).toFixed(1));d.setAttribute('cy',(540+c*130).toFixed(1));d.setAttribute('opacity',(1-c).toFixed(2))});
  rise($('fixed'),p(u,go+5.8,go+6.4));

  rise($('globe'),p(u,TM.world_map,TM.world_map+.5));
  $('mer').setAttribute('rx',(220*Math.abs(Math.cos(t*.6))).toFixed(1));
  rise($('zones'),p(u,TM.world_map+1.5,TM.world_map+2));
  const oc=(t*1.2)%1; $('okr').setAttribute('r',(14+16*oc).toFixed(1)); $('okr').setAttribute('opacity',(1-oc).toFixed(2));
  rise($('heart'),p(u,TM.heart_icon,TM.heart_icon+.5));
  const beat=1+.07*Math.pow(Math.abs(Math.sin(t*3.6)),6);
  $('hp').setAttribute('transform','translate(880 480) scale('+beat.toFixed(3)+')');
  [0,1,2].forEach(i=>{const a=TM.heart_icon+7.3+i*.5;rise($('pl'+i),p(u,a,a+.4))});

  const tb=TM.treasure_box;
  rise($('dig'),p(u,tb,tb+.5));
  $('shaft').setAttribute('height',(266*p(u,tb+.5,tb+4)).toFixed(1));
  rise($('chest'),p(u,tb+3.5,tb+4.1));
  $('glow').setAttribute('r',(100+14*Math.sin(t*2.4)).toFixed(1));
  const nb=TM.notebook;
  rise($('nb'),p(u,nb,nb+.5));
  [0,1,2,3].forEach(i=>{const a=nb+.8+i*.9;$('nc'+i).setAttribute('stroke-dashoffset',(1-p(u,a,a+.8)).toFixed(3));$('nl'+i).setAttribute('opacity',p(u,a+.5,a+.9))});
  rise($('ovl'),p(u,nb+5.7,nb+6.2));
  $('ovl').setAttribute('r',(24+5*Math.sin(t*4)).toFixed(1));
  rise($('ovt'),p(u,nb+5.9,nb+6.5));

  const s7=SC[7][0]/K;
  rise($('ph'),p(u,s7+.3,s7+.8));
  rise($('qa'),p(u,s7+4.3,s7+4.8)); rise($('qb'),p(u,s7+4.7,s7+5.2)); rise($('qc'),p(u,s7+5.1,s7+5.6));
  rise($('sun7w'),p(u,s7+5.5,s7+6));
  $('sun7').setAttribute('transform','translate(0 '+(-60*p(u,s7+5.5,s7+7.5)).toFixed(1)+')');