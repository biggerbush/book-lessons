const T0=TM.title_card;
TMK.forEach((e,i)=>e.setAttribute('opacity',(p(u,T0+.8+i*.5,T0+1.1+i*.5)*(1-p(u,T0+5.4,T0+6))).toFixed(3)));
drw($('tChk'),p(u,T0+5.6,T0+6.4));

rise($('desk'),p(u,TM.perfectionist,TM.perfectionist+.5));
$('hM').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 720 400)');$('hH').setAttribute('transform','rotate('+((t*10)%360).toFixed(1)+' 720 400)');
rise($('page'),p(u,TM.perfectionist+1,TM.perfectionist+1.5));
PMK.forEach((e,i)=>rise(e,p(u,TM.red_pen+i*.4,TM.red_pen+i*.4+.3)));
rise($('ready'),p(u,TM.red_pen+3,TM.red_pen+3.4));
rise($('look'),p(u,TM.red_pen+5.5,TM.red_pen+6));rise($('grow'),p(u,TM.red_pen+8.5,TM.red_pen+9));

rise($('chart'),p(u,TM.bar_chart,TM.bar_chart+.5));
BR.forEach((q,i)=>{const k=i<2?p(u,TM.bar_chart+.3,TM.bar_chart+1.5):p(u,TM.equal_bars,TM.equal_bars+1.2),e=$(q[0]),h=q[1]*k;e.setAttribute('y',(720-h).toFixed(1));e.setAttribute('height',h.toFixed(1))});
rise($('resL'),p(u,TM.equal_bars,TM.equal_bars+.5));rise($('eq'),p(u,TM.equal_bars+1.2,TM.equal_bars+1.7));
rise($('gap'),p(u,TM.equal_bars+4.2,TM.equal_bars+4.7));rise($('buy'),p(u,TM.equal_bars+8.4,TM.equal_bars+9));

[TM.magnifier,TM.closed_door,TM.storm_cloud].forEach((a,i)=>rise($('k'+i),p(u,a,a+.5)));
const s3=TM.storm_cloud+4.6;rise($('road'),p(u,s3,s3+.5));
let xe=1480;for(let j=0;j<3;j++)xe-=300*p(u,s3+.6+j*.8,s3+1.2+j*.8);
$('roadL').setAttribute('d','M120 770H'+xe.toFixed(1));$('roadD').setAttribute('cx',xe.toFixed(1));

rise($('bowl'),p(u,TM.tea_bowl,TM.tea_bowl+.5));rise($('wsub'),p(u,TM.tea_bowl+3.4,TM.tea_bowl+3.9));
rise($('bl'),p(u,TM.crack_line,TM.crack_line+.5));drw($('crk'),p(u,TM.crack_line+.5,TM.crack_line+1.7));
rise($('wtx'),p(u,TM.crack_line+4.9,TM.crack_line+5.5));rise($('wgr'),p(u,TM.crack_line+10.7,TM.crack_line+11.3));

const hb=p(u,TM.high_bar+2.1,TM.high_bar+3.1);
$('hbg').setAttribute('transform','translate(0 '+(210*(1-hb)).toFixed(1)+')');$('hbg').setAttribute('opacity',p(u,TM.high_bar,TM.high_bar+.5));
ST.forEach((g,i)=>rise(g,p(u,TM.finish_flag+i*.6,TM.finish_flag+i*.6+.4)));
rise($('flag'),p(u,TM.finish_flag+2,TM.finish_flag+2.5));
rise($('mis'),p(u,TM.finish_flag+5.8,TM.finish_flag+6.3));rise($('drafts'),p(u,TM.finish_flag+8,TM.finish_flag+8.6));

const pk=u>=TM.checklist+3,sb=p(u,TM.scale_balance,TM.scale_balance+1.2);
RG.forEach((g,i)=>{const k=KEY.includes(i);rise(g,p(u,TM.checklist+i*.2,TM.checklist+i*.2+.4));
  CB[i].setAttribute('fill',k&&pk?'var(--gain)':'var(--stage)');
  TG[i].setAttribute('opacity',k?p(u,TM.checklist+3,TM.checklist+3.5):sb);
  EB[i].setAttribute('width',(k?220+380*sb:220-140*sb).toFixed(1));
  EB[i].setAttribute('fill',k&&pk?'var(--gain)':'var(--muted)')});
rise($('cnt'),p(u,TM.scale_balance+.6,TM.scale_balance+1.2));

const P7=TM.past_self;
rise($('now'),p(u,P7,P7+.5));
rise($('ideal'),p(u,P7+.3,P7+.8));
rise($('past'),p(u,P7+3.8,P7+4.3));drw($('conn'),p(u,P7+4,P7+5.2));
DT.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.growth_path+i*.25,TM.growth_path+i*.25+.3)));
rise($('hfar'),p(u,TM.growth_path,TM.growth_path+.5));rise($('small'),p(u,TM.growth_path+4.9,TM.growth_path+5.4));

const C8=TM.challenge;
rise($('qa'),p(u,C8,C8+.5));rise($('qb'),p(u,C8+.4,C8+.9));rise($('qc'),p(u,C8+.8,C8+1.3));rise($('qd'),p(u,C8+4.9,C8+5.4));
const pl=p(u,C8+1,C8+2.2);
$('plane').setAttribute('transform','translate('+(1230-200*(1-pl)).toFixed(1)+' '+(400+60*(1-pl)+6*Math.sin(t*2)).toFixed(1)+')');$('plane').setAttribute('opacity',pl);