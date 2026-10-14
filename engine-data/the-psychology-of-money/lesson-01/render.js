CO.forEach((c,i)=>{const k=(t*.5+i/3)%1;c.setAttribute('cy',(250+190*k).toFixed(1));c.setAttribute('opacity',(k<.8?1:(1-k)/.2).toFixed(2))});
  $('wallet').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')');
  rise($('huh'),p(u,TM.title_wallet,TM.title_wallet+.5));
  const ok=u>=TM.title_wallet+5.4;$('huhR').setAttribute('class',ok?'s-gain':'s-loss');$('huhQ').setAttribute('opacity',ok?0:1);$('huhC').setAttribute('opacity',ok?1:0);

  rise($('globe'),p(u,TM.globe,TM.globe+.5));MER.forEach((e,i)=>e.setAttribute('rx',(170*Math.abs(Math.cos(t*.6+i*1.05))).toFixed(1)));
  rise($('tl'),p(u,TM.globe+.6,TM.globe+1.2));
  rise($('slice'),p(u,TM.tiny_slice,TM.tiny_slice+.5));$('sliceR').setAttribute('opacity',(.6+.4*Math.abs(Math.sin(t*3))).toFixed(2));
  rise($('belief'),p(u,TM.big_belief,TM.big_belief+.6));

  [TM.baby_1950,TM.baby_1970].forEach((a,i)=>rise($('p'+i),p(u,a,a+.5)));
  [TM.flat_line,TM.rising_line].forEach((a,i)=>{const k=p(u,a,a+2.5);LN[i].setAttribute('points',k>0?curve(i,k):'');rise($('v'+i),p(u,a+2,a+2.5))});

  rise($('f0'),p(u,TM.cautious_face,TM.cautious_face+.5));rise($('q0'),p(u,TM.cautious_face+.6,TM.cautious_face+1.1));
  $('f0i').setAttribute('transform','translate('+(360+3*Math.sin(t*9)).toFixed(1)+' 400)');
  rise($('f1'),p(u,TM.eager_face,TM.eager_face+.5));rise($('q1'),p(u,TM.eager_face+.6,TM.eager_face+1.1));
  $('f1i').setAttribute('transform','translate(1240 '+(400-6*Math.abs(Math.sin(t*2.5))).toFixed(1)+')');
  const e=TM.eager_face;rise($('fool'),p(u,e+5.4,e+5.9));rise($('rep'),p(u,e+6.8,e+7.3));rise($('crazy'),p(u,e+10.2,e+10.7));

  rise($('res'),p(u,TM.researchers,TM.researchers+.5));
  DT.forEach((d,i)=>{const a=TM.decades_data+(i%20)*.08;d.setAttribute('opacity',p(u,a,a+.3).toFixed(2))});
  rise($('dl'),p(u,TM.decades_data+1,TM.decades_data+1.5));rise($('early'),p(u,TM.early_years,TM.early_years+.6));
  const ang=Math.PI*(1-(.15+.7*p(u,TM.early_years+.8,TM.early_years+2.2)))+.05*Math.sin(t*3);
  $('ndl').setAttribute('x2',(1320+95*Math.cos(ang)).toFixed(1));$('ndl').setAttribute('y2',(690-95*Math.sin(ang)).toFixed(1));

  const sk=TM.stomach_knot;rise($('book'),p(u,TM.textbook,TM.textbook+.5));
  $('bk0').setAttribute('width',(220*p(u,TM.textbook+.8,TM.textbook+2)).toFixed(1));$('bk0').setAttribute('opacity',(1-.6*p(u,sk+7,sk+8)).toFixed(2));
  rise($('live'),p(u,sk,sk+.5));$('knot').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 980 440)');
  $('kit').setAttribute('transform','translate('+(u>=sk?3*Math.sin(t*14):0).toFixed(1)+' 0)');
  $('bk1').setAttribute('width',(640*p(u,sk+1,sk+3)).toFixed(1));rise($('stick'),p(u,sk+7,sk+7.6));

  rise($('bars'),p(u,TM.lottery,TM.lottery+.4));const L=p(u,TM.lottery+.4,TM.lottery+1.6);
  $('lb0').setAttribute('height',(300*L).toFixed(1));$('lb0').setAttribute('y',(680-300*L).toFixed(1));
  $('lb1').setAttribute('height',(140*L).toFixed(1));$('lb1').setAttribute('y',(680-140*L).toFixed(1));
  rise($('irr'),p(u,TM.thin_paycheck,TM.thin_paycheck+.5));
  rise($('tix'),p(u,TM.hope_dream,TM.hope_dream+.5));rise($('dream'),p(u,TM.hope_dream+1,TM.hope_dream+1.6));
  $('drm').setAttribute('transform','translate(0 '+(6*Math.sin(t*1.6)).toFixed(1)+')');rise($('dr2'),p(u,TM.hope_dream+2,TM.hope_dream+2.6));

  rise($('tl2'),p(u,TM.retire_chair,TM.retire_chair+.5));rise($('chair'),p(u,TM.retire_chair+.6,TM.retire_chair+1.1));
  $('chairR').setAttribute('transform','rotate('+(4*Math.sin(t*2)).toFixed(2)+' 1290 395)');
  rise($('young'),p(u,TM.retire_chair+1.2,TM.retire_chair+1.7));
  rise($('idx'),p(u,TM.index_fund,TM.index_fund+.5));rise($('tools'),p(u,TM.index_fund+.5,TM.index_fund+1));
  LR.forEach((g,i)=>{const a=TM.learners+i*.2;rise(g,p(u,a,a+.4))});rise($('beg'),p(u,TM.learners+1.4,TM.learners+2));

  rise($('qa'),p(u,TM.mirror,TM.mirror+.5));rise($('qb'),p(u,TM.mirror+.4,TM.mirror+.9));
  rise($('mir'),p(u,TM.mirror+.8,TM.mirror+1.4));rise($('qc'),p(u,TM.mirror+7.4,TM.mirror+7.9));