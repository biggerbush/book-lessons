const sa=p(u,TM.handshake,TM.handshake+.3)*(1-p(u,TM.handshake+2.5,TM.handshake+3));
  $('shake').setAttribute('transform','translate(0 '+(8*Math.sin(t*10)*sa).toFixed(1)+')');
  rise($('coin0'),p(u,TM.handshake+1.5,TM.handshake+2)); rise($('pie0'),p(u,TM.handshake+5,TM.handshake+5.5));

  rise($('jar1'),p(u,TM.bank_account,TM.bank_account+.5)); rise($('pp1'),p(u,TM.bank_account+3,TM.bank_account+3.5));
  const lv=.15+.7*p(u,TM.coin_deposit,TM.coin_deposit+2)-.73*p(u,TM.empty_account,TM.empty_account+1.5), lo=u>=TM.empty_account;
  $('lvl1').setAttribute('height',(490*lv).toFixed(1)); $('lvl1').setAttribute('y',(750-490*lv).toFixed(1)); $('lvl1').setAttribute('fill',lo?'var(--loss)':'var(--gain)');
  $('talk1').setAttribute('stroke',lo?'var(--loss)':'var(--gain)'); $('talk1').setAttribute('opacity',p(u,TM.bank_account+3,TM.bank_account+3.5));
  C1.forEach((c,i)=>{const a=TM.coin_deposit+i*.35,k=p(u,a,a+.6);c.setAttribute('cy',(230+k*300).toFixed(1));c.setAttribute('opacity',k>0&&k<1?1:0)});
  rise($('hi1'),p(u,TM.coin_deposit,TM.coin_deposit+.5)); rise($('lo1'),p(u,TM.empty_account,TM.empty_account+.5));

  let s2=0;[TM.kept_promise,TM.small_kindness,TM.clear_rules,TM.loyal_absent].forEach((a,i)=>{rise($('k'+i),p(u,a,a+.5));s2+=p(u,a+.3,a+1.1)});
  $('bar2').setAttribute('width',(1344*(.08+.23*s2)).toFixed(1));

  $('line3').setAttribute('d',seg3(160+320*p(u,TM.broken_promise,TM.broken_promise+2.5)+100*p(u,TM.apology,TM.apology+1)+420*p(u,TM.apology+3.8,TM.apology+6.8)));
  [TM.broken_promise,TM.broken_promise+.8,TM.broken_promise+1.6,TM.apology,TM.apology+3.8].forEach((a,i)=>rise($('w'+i),p(u,a,a+.5)));
  $('ap3').setAttribute('opacity',p(u,TM.apology+.8,TM.apology+1.1));

  $('fr4').setAttribute('opacity',p(u,TM.four_doors,TM.four_doors+.6));
  [TM.win_lose,TM.lose_win,TM.lose_lose,TM.win_win].forEach((a,i)=>rise(C4[i],p(u,a,a+.5)));

  rise($('pie5'),p(u,TM.pie_slices,TM.pie_slices+.5)); rise($('eat5'),p(u,TM.pie_slices+.4,TM.pie_slices+.9));
  const r5=125+85*p(u,TM.bigger_pie,TM.bigger_pie+1.5);
  W5.forEach((w,i)=>{const a=(i*90-90)*Math.PI/180,b=a+Math.PI/2;w.setAttribute('d','M800 480L'+(800+r5*Math.cos(a)).toFixed(1)+' '+(480+r5*Math.sin(a)).toFixed(1)+'A'+r5.toFixed(1)+' '+r5.toFixed(1)+' 0 0 1 '+(800+r5*Math.cos(b)).toFixed(1)+' '+(480+r5*Math.sin(b)).toFixed(1)+'Z')});
  rise($('plenty5'),p(u,TM.pie_slices+3.8,TM.pie_slices+4.3)); rise($('grow5'),p(u,TM.bigger_pie,TM.bigger_pie+.6));

  rise($('pres6'),p(u,TM.office,TM.office+.5)); rise($('chart6'),p(u,TM.horse_race,TM.horse_race+.5));
  const rr=p(u,TM.horse_race+.5,TM.horse_race+5.5);
  H6.forEach((h,i)=>h.setAttribute('transform','translate('+(450+[600,690,560,650][i]*rr+6*Math.sin(t*5+i)).toFixed(1)+' '+(342+i*100-3*Math.abs(Math.sin(t*7+i))).toFixed(1)+')'));
  rise($('berm6'),p(u,TM.bermuda_prize,TM.bermuda_prize+.5)); rise($('end6'),p(u,TM.bermuda_prize+6.2,TM.bermuda_prize+6.8));

  rise($('fork7'),p(u,TM.walk_away,TM.walk_away+.6)); rise($('part7'),p(u,TM.walk_away+4.2,TM.walk_away+4.7));
  const pk=p(u,TM.walk_away+4.4,TM.walk_away+5.9);
  P7[0].setAttribute('transform','translate('+(630-110*pk).toFixed(1)+' 0)'); P7[1].setAttribute('transform','translate('+(720+110*pk).toFixed(1)+' 0)');
  rise($('face7'),p(u,TM.walk_away+4.2,TM.walk_away+4.8));
  const rk=p(u,TM.relaxed_face,TM.relaxed_face+1.2);
  $('mouth7').setAttribute('d','M1130 520Q1200 '+(504+66*rk).toFixed(1)+' 1270 520');
  $('brow7').setAttribute('d','M1115 375L1170 '+(392-17*rk).toFixed(1)+'M1285 375L1230 '+(392-17*rk).toFixed(1));
  $('sweat7').setAttribute('opacity',(1-rk).toFixed(2)); rise($('calm7'),p(u,TM.relaxed_face+.5,TM.relaxed_face+1));

  rise($('q8a'),p(u,TM.calendar,TM.calendar+.5)); rise($('q8b'),p(u,TM.calendar+.4,TM.calendar+.9)); rise($('q8c'),p(u,TM.calendar+.8,TM.calendar+1.3));
  rise($('cal8'),p(u,TM.calendar+.3,TM.calendar+.8)); D8.forEach((c,i)=>rise(c,p(u,TM.calendar+1+i*.5,TM.calendar+1.4+i*.5)));
  rise($('ask8'),p(u,TM.calendar+4.2,TM.calendar+4.8));