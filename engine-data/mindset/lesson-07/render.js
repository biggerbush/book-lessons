rise($('vb'),p(u,TM.voice_bubble,TM.voice_bubble+.5));
const A0=TM.voice_bubble+6.6; dr($('vs'),p(u,A0,A0+.6)); rise($('ab'),p(u,A0+.4,A0+1));

rise($('mf'),p(u,TM.mixed_figure,TM.mixed_figure+.5));
rise($('tr0'),p(u,TM.trigger_icons+2,TM.trigger_icons+2.5)); rise($('tr1'),p(u,TM.trigger_icons+4,TM.trigger_icons+4.5));
$('zap').setAttribute('opacity',p(u,TM.trigger_icons+2.4,TM.trigger_icons+3));
$('fxh').setAttribute('opacity',u>=TM.trigger_icons+2&&u<TM.trigger_icons+8.2?(.5+.5*Math.abs(Math.sin(t*3))).toFixed(2):1);
rise($('ntc'),p(u,TM.trigger_icons+8.2,TM.trigger_icons+8.8));

const S2=SC[2][0]/K; rise($('me2'),p(u,S2+.3,S2+.8)); rise($('ear'),p(u,S2+1,S2+1.5));
$('ear').setAttribute('opacity',u>=S2+1.5?(.5+.5*Math.abs(Math.sin(t*2.5))).toFixed(2):p(u,S2+1,S2+1.5));
rise($('dc'),p(u,TM.doubt_cloud,TM.doubt_cloud+.6)); rise($('cc'),p(u,TM.critic_cloud,TM.critic_cloud+.6)); rise($('tag'),p(u,TM.name_tag,TM.name_tag+.6));

const S3=SC[3][0]/K, k1=p(u,S3+.3,TM.crossroads+1.5), k2=p(u,TM.two_signs+3.5,TM.two_signs+5);
$('wk').setAttribute('cx',(800+300*k2).toFixed(1)); $('wk').setAttribute('cy',(830-230*k1-136*k2).toFixed(1)); $('wk').setAttribute('class',k2>0?'gain':'ink');
rise($('fk'),p(u,TM.crossroads,TM.crossroads+.5)); rise($('ch'),p(u,TM.crossroads+3,TM.crossroads+3.6));
rise($('s3a'),p(u,TM.two_signs+.3,TM.two_signs+.8)); rise($('s3b'),p(u,TM.two_signs+2.5,TM.two_signs+3)); dr($('rhi'),k2);

rise($('pp'),p(u,TM.speech_reply,TM.speech_reply+.5));
rise($('q0'),p(u,TM.speech_reply+3.7,TM.speech_reply+4.2)); rise($('a0'),p(u,TM.speech_reply+5.4,TM.speech_reply+6));
rise($('q1'),p(u,TM.reply_card,TM.reply_card+.5)); rise($('a1'),p(u,TM.reply_card+2.2,TM.reply_card+2.8));

dr($('arr'),p(u,TM.action_arrow,TM.action_arrow+1.4)); rise($('arh'),p(u,TM.action_arrow+1.2,TM.action_arrow+1.6));
[0,1,2].forEach(i=>{const a=TM.practice_desk+i*1.8; rise($('k'+i),p(u,a,a+.5))});
const V=TM.practice_desk+6.2, vk=p(u,V,V+3); rise($('spk'),p(u,V,V+.5));
BR.forEach((b,i)=>{const h=(16+i*10)*cl(vk*10-i)*(1+(vk>=1?.08*Math.sin(t*6+i):0)); b.setAttribute('y',(840-h).toFixed(1)); b.setAttribute('height',h.toFixed(1))});

rise($('pill'),p(u,TM.not_yet,TM.not_yet+.5)); rise($('sen'),p(u,TM.ladder_steps,TM.ladder_steps+.5));
$('yt').setAttribute('fill-opacity',p(u,TM.ladder_steps+2,TM.ladder_steps+2.6));
rise($('wallg'),p(u,TM.ladder_steps,TM.ladder_steps+.5));
const M=p(u,TM.ladder_steps+5.4,TM.ladder_steps+6.6);
COL.forEach((c,i)=>{const h=380+(63*(i+1)-380)*M; c.setAttribute('y',(820-h).toFixed(1)); c.setAttribute('height',h.toFixed(1)); c.style.stroke=M>.5?'var(--gain)':'var(--loss)'});
const wv=p(u,TM.ladder_steps,TM.ladder_steps+.5); $('wl').setAttribute('opacity',(wv*(1-M)).toFixed(2)); $('sl').setAttribute('opacity',M.toFixed(2));
const cc=p(u,TM.ladder_steps+6.8,TM.ladder_steps+9.8)*6, ix=Math.min(5,Math.floor(cc)), f=cc-ix, P0=ST[ix], P1=ST[ix+1];
$('cb').setAttribute('cx',(P0[0]+(P1[0]-P0[0])*f).toFixed(1)); $('cb').setAttribute('cy',(P0[1]+(P1[1]-P0[1])*f-30*Math.sin(Math.PI*f)).toFixed(1)); $('cb').setAttribute('opacity',wv);

rise($('cls'),p(u,TM.classroom,TM.classroom+.5)); rise($('ax'),p(u,TM.classroom+.5,TM.classroom+1)); dr($('pre'),p(u,TM.classroom+1,TM.classroom+2.5));
rise($('brn'),p(u,TM.brain_muscle,TM.brain_muscle+.5));
LKS.forEach((l,i)=>{const a=TM.brain_muscle+.5+i*.4; l.setAttribute('opacity',p(u,a,a+.3))});
dr($('gl'),p(u,TM.grade_chart,TM.grade_chart+2)); rise($('glab'),p(u,TM.grade_chart+1.6,TM.grade_chart+2.1));
dr($('fl'),p(u,TM.flat_line,TM.flat_line+1.5)); rise($('flab'),p(u,TM.flat_line+1.2,TM.flat_line+1.7));

rise($('qa'),p(u,TM.notebook,TM.notebook+.5)); rise($('qb'),p(u,TM.notebook+.4,TM.notebook+.9)); rise($('qc'),p(u,TM.notebook+.8,TM.notebook+1.3));
rise($('nb'),p(u,TM.notebook+.3,TM.notebook+.8));
dr($('n0'),p(u,TM.notebook+1.5,TM.notebook+2.5)); dr($('n1'),p(u,TM.notebook+5.4,TM.notebook+6.4)); dr($('n2'),p(u,TM.notebook+6.6,TM.notebook+7.6));