const am=Math.sin(t*3); $('arm0').setAttribute('x2',(1335+8*am).toFixed(1)); $('arm0').setAttribute('y2',(305+6*am).toFixed(1));
  rise($('q0'),p(u,TM.monkey_puzzle,TM.monkey_puzzle+.5)); rise($('dish0'),p(u,TM.monkey_puzzle+1.5,TM.monkey_puzzle+2));

  rise($('sci'),p(u,TM.scientists,TM.scientists+.5)); rise($('card1'),p(u,TM.food_water,TM.food_water+.5)); rise($('card2'),p(u,TM.carrot_stick,TM.carrot_stick+.5));
  $('carrot').setAttribute('transform','rotate('+(8*Math.sin(t*2)).toFixed(1)+' 1140 330)');

  rise($('mk2w'),p(u,TM.harry_harlow,TM.harry_harlow+.5)); rise($('pz'),p(u,TM.harry_harlow+.6,TM.harry_harlow+1.1));
  const A=TM.pin_hook_lid, ks=[0,2,4].map(d=>p(u,A+d,A+d+1.2));
  $('pin').setAttribute('transform','translate(0 '+(-40*ks[0]).toFixed(1)+')');
  $('hook').setAttribute('transform','rotate('+(-70*ks[1]).toFixed(1)+' 1280 250)');
  $('lid').setAttribute('transform','rotate('+(-12*ks[2]).toFixed(1)+' 890 307)');
  ks.forEach((k,i)=>{rise($('st'+i),p(u,A+i*2,A+i*2+.4)); $('st'+i).style.fill=k>.5?'var(--gain)':'var(--muted)'});
  rise($('nofood'),p(u,TM.happy_monkeys-2,TM.happy_monkeys-1.5)); rise($('happy'),p(u,TM.happy_monkeys,TM.happy_monkeys+.6));
  const hp=u>=TM.happy_monkeys; $('mk2').setAttribute('transform','translate(0 '+(hp?-14*Math.abs(Math.sin(t*5)):0).toFixed(1)+')'); mouth(M2,440,440,64,hp?1:0);

  const s3=SC[3][0]/K; R1.forEach((m,i)=>m.setAttribute('opacity',p(u,s3+.4+i*.15,s3+.7+i*.15)));
  RA.forEach((r,i)=>{const a=TM.raisins+.3+i*.2,k=p(u,a,a+.6),fy=i>2?566:580; r.setAttribute('cy',(260+(fy-260)*k).toFixed(1)); r.setAttribute('opacity',k>0?1:0)});
  rise($('r2l'),p(u,TM.raisins,TM.raisins+.5)); R2.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.error_marks+i*.35,TM.error_marks+i*.35+.3)));
  mouth(M3,220,420,50,u>=TM.error_marks?-1:1); rise($('treat'),p(u,TM.error_marks+5.4,TM.error_marks+6));

  const on=u>=TM.lightbulb; $('bulbC').style.fill=on?'var(--gain)':'var(--stage)';
  $('rays').setAttribute('opacity',(p(u,TM.lightbulb,TM.lightbulb+.5)*(.7+.3*Math.sin(t*4))).toFixed(2));
  rise($('bulbT'),p(u,TM.lightbulb,TM.lightbulb+.5)); rise($('gift'),p(u,TM.gift_box,TM.gift_box+.5));
  rise($('ign'),p(u,TM.gift_box+3,TM.gift_box+3.5)); rise($('ignl'),p(u,TM.gift_box+3.3,TM.gift_box+3.8)); rise($('ignt'),p(u,TM.gift_box+3.5,TM.gift_box+4.1));

  rise($('deciw'),p(u,TM.ed_deci,TM.ed_deci+.5)); rise($('desk'),p(u,TM.soma_cubes,TM.soma_cubes+.5)); rise($('timer'),p(u,TM.timer,TM.timer+.5));
  const ex=p(u,TM.timer+.8,TM.timer+2.5); $('deci').setAttribute('transform','translate('+(-135*ex).toFixed(1)+' 0)'); $('deci').setAttribute('opacity',(1-ex).toFixed(2));
  const tk=cl(lin(u,TM.timer+1,TM.timer+9)), ta=-Math.PI/2+2*Math.PI*tk; $('tsec').setAttribute('d',sec(tk));
  $('thand').setAttribute('x2',(1320+78*Math.cos(ta)).toFixed(1)); $('thand').setAttribute('y2',(330+78*Math.sin(ta)).toFixed(1));
  rise($('mags'),p(u,TM.magazines,TM.magazines+.5));
  CB[2].setAttribute('transform','translate(0 '+(u>=TM.magazines?-8*Math.abs(Math.sin(t*4)):0).toFixed(1)+')');

  const ck=p(u,TM.dollar_coin,TM.dollar_coin+.8); $('coin').setAttribute('transform','translate(0 '+(-100*(1-ck)).toFixed(1)+')'); $('coin').setAttribute('opacity',ck.toFixed(2));
  rise($('band'),p(u,TM.dollar_coin,TM.dollar_coin+.5));
  $('lpaid').setAttribute('points',pl(PA,p(u,TM.dollar_coin+5,TM.dollar_coin+7)+p(u,TM.falling_line,TM.falling_line+2)));
  $('lfree').setAttribute('points',pl(FR,2*p(u,TM.rising_line,TM.rising_line+2.5)));
  rise($('leg1'),p(u,TM.dollar_coin+5,TM.dollar_coin+5.5)); $('startl').setAttribute('opacity',p(u,TM.falling_line,TM.falling_line+.6)); rise($('leg2'),p(u,TM.rising_line,TM.rising_line+.5));

  rise($('toy'),p(u,TM.broken_toy,TM.broken_toy+.5));
  [0,.5,1.2].forEach((d,i)=>rise($('gw'+i),p(u,TM.three_engines+d,TM.three_engines+d+.5)));
  GR.forEach((g,i)=>g.setAttribute('transform','rotate('+((i%2?-1:1)*t*(i===2?40:12)).toFixed(1)+' '+GX[i]+' 540)'));
  rise($('sub7'),p(u,TM.three_engines+5,TM.three_engines+5.6)); rise($('ignore'),p(u,TM.three_engines+8.7,TM.three_engines+9.3));

  rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9)); rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
  rise($('nb'),p(u,TM.notebook+.3,TM.notebook+.9)); rise($('nbl'),p(u,TM.notebook+4.1,TM.notebook+4.7));
  $('pen').setAttribute('transform','translate('+(1230+90*((t*.5)%1)).toFixed(1)+' 476)');