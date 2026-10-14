R($('climber'),u,TM.tired_climber);
walker.setAttribute('opacity',p(u,TM.tired_climber+3,TM.tired_climber+3.6));
const wk=(t*.09)%1,wx=1110+330*wk,wy=600+.25*(wx-1080);walker.setAttribute('transform','translate('+wx.toFixed(1)+' '+(wy-10).toFixed(1)+')');

R($('w1'),u,TM.willpower);R($('w2'),u,TM.gears);
$('bould').setAttribute('transform','translate('+(2*Math.sin(t*9)).toFixed(1)+' 0)');
const ga=t*30;GA.setAttribute('transform','rotate('+ga.toFixed(1)+' 1020 420)');GB.setAttribute('transform','rotate('+(-ga*1.5+11).toFixed(1)+' 1208 420)');
BX.forEach((b,i)=>{const x=900+((i*130+t*50)%520);b.setAttribute('x',x.toFixed(1));b.setAttribute('opacity',cl(Math.min((x-900)/40,(1420-x)/40)).toFixed(2))});
R($('auto'),u,TM.gears+6.2,.6);

R($('pool'),u,TM.swimmer);
const sp=(t*.25)%2,f=sp<1?sp:2-sp;$('swm').setAttribute('transform','translate('+(230+400*f).toFixed(1)+' 380) scale('+(sp<1?1:-1)+' 1)');
arm.setAttribute('transform','rotate('+((t*400)%360).toFixed(1)+' 0 -6)');
CP.forEach((c,i)=>{R(c[0],u,TM.swimmer+2.5+i*.3,.4);const on=u>=TM.video_reel+6.2+i*.35;c[1].setAttribute('fill',on?'var(--gain)':'var(--stage)');c[1].setAttribute('stroke',on?'var(--gain)':'var(--ink)');c[2].style.fill=on?'var(--on-gain)':''});
R($('reel'),u,TM.video_reel);
const kk=(t/2.5)%1;$('mini').setAttribute('transform','translate('+(940+400*kk).toFixed(1)+' 410)');$('prog').setAttribute('width',(540*kk).toFixed(1));
$('loop').setAttribute('transform','rotate('+((t*120)%360).toFixed(1)+' 1420 300)');
R($('auto2'),u,TM.video_reel+6.2,.6);

R($('gog'),u,TM.goggles);
const wh=150*p(u,TM.goggles+.6,TM.goggles+3.2),wyy=526-wh+(wh>0?3*Math.sin(t*3):0);$('water').setAttribute('y',wyy.toFixed(1));$('water').setAttribute('height',(526-wyy).toFixed(1));
$('cant').setAttribute('opacity',p(u,TM.goggles+3,TM.goggles+3.5));
R($('tl'),u,TM.stroke_count);TL.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.stroke_count+.5+i*.18,TM.stroke_count+.6+i*.18)));
R($('medal'),u,TM.stroke_count+4.9);R($('carry'),u,TM.stroke_count+6.7,.6);

YR.forEach((g,i)=>R(g,u,i<7?TM.grain_store+.5+i*.6:TM.dry_field+(i-7)*.35,.4));
R($('lg'),u,TM.grain_store+.5);R($('lf'),u,TM.dry_field);R($('silo'),u,TM.grain_store);
const gh=220*p(u,TM.grain_store+.8,TM.grain_store+5)-130*p(u,TM.dry_field+.5,TM.dry_field+4);$('grain').setAttribute('y',(534-gh).toFixed(1));$('grain').setAttribute('height',Math.max(0,gh).toFixed(1));
$('arIn').setAttribute('opacity',p(u,TM.grain_store+.8,TM.grain_store+1.3));$('arOut').setAttribute('opacity',p(u,TM.dry_field+.5,TM.dry_field+1));
const sv=u>=TM.dry_field+4.2;PP.forEach((g,i)=>{R(g,u,TM.dry_field+.5+i*.2,.4);[...g.children].forEach(c=>c.setAttribute('class',sv?'gain':'ink'))});
R($('surv'),u,TM.dry_field+4.2);R($('prep'),u,TM.dry_field+7.2,.6);

R($('clk'),u,TM.clock);$('hand').setAttribute('transform','rotate('+((t*90)%360).toFixed(1)+' 240 420)');
R($('plan'),u,TM.clock+.6);R($('rl'),u,TM.clock+1.2);
const tw=680*p(u,TM.clock+1.5,TM.clock+4),bf=u>=TM.extra_block;$('task').setAttribute('width',Math.min(600,tw).toFixed(1));$('over').setAttribute('width',Math.max(0,tw-600).toFixed(1));$('over').setAttribute('class',bf?'ink':'loss');
R($('buf'),u,TM.extra_block);
$('dl').setAttribute('opacity',p(u,TM.clock+1,TM.clock+1.5));$('dl').setAttribute('transform','translate('+(1020+300*p(u,TM.extra_block+.5,TM.extra_block+1.5)).toFixed(1)+' 0)');
$('dlp').style.stroke=bf?'var(--gain)':'var(--loss)';$('dlt').style.fill=bf?'var(--gain)':'var(--loss)';
R($('sur'),u,TM.extra_block+5);R($('calm'),u,TM.extra_block+10.4,.6);

R($('car'),u,TM.police_car);const bl=Math.floor(t*4)%2;$('lA').style.fill=bl?'var(--loss)':'var(--gain)';$('lB').style.fill=bl?'var(--gain)':'var(--loss)';
const tk=p(u,TM.ticket,TM.ticket+.8);$('tk').setAttribute('opacity',tk);$('tk').setAttribute('transform','translate('+(-240*(1-tk)).toFixed(1)+' '+(100*(1-tk)).toFixed(1)+')');
R($('kid'),u,TM.ticket+.4);ST.forEach((s,i)=>R(s,u,TM.steps_up+i*.3,.4));R($('flag'),u,TM.steps_up+1.6);R($('mom'),u,TM.steps_up+.6,.6);

// start small: giant leap (crossed out) vs small steps to your normal
const s7=TM.seedling+3.4;R($('leap'),u,TM.seedling);
$('xleap').setAttribute('opacity',p(u,TM.streak,TM.streak+.4));
let n=u>=s7?1:0;for(let i=1;i<NS;i++)n+=p(u,TM.streak+(i-1)*.5,TM.streak+(i-1)*.5+.4);
SB.forEach((b,i)=>{const on=i?u>=TM.streak+(i-1)*.5+.2:u>=s7;b.setAttribute('fill',on?'var(--gain)':'var(--stage)')});
const fs=Math.max(0,n-1),fr=fs-Math.floor(fs);me.setAttribute('cx',(772+72*fs).toFixed(1));me.setAttribute('cy',(640-36*fs-18-22*Math.sin(Math.PI*fr)).toFixed(1));
R($('dots'),u,s7);R($('today'),u,s7);R($('norm'),u,TM.streak+3.6);
$('plant').setAttribute('opacity',p(u,s7,s7+.5));const ph=40+260*n/NS;$('stem').setAttribute('d','M340 600V'+(600-ph).toFixed(1));
LV.forEach((l,i)=>l.setAttribute('opacity',cl((ph-(600-LY[i])-6)/20).toFixed(2)));
R($('nrm'),u,TM.streak+3,.6);

R($('qa'),u,TM.calendar);R($('qb'),u,TM.calendar+.4);R($('qc'),u,TM.calendar+.8);
CAL.forEach((g,i)=>R(g,u,TM.calendar+1.4+i*.15,.4));TK.forEach((k,i)=>k.setAttribute('opacity',p(u,TM.calendar+5.2+i*.3,TM.calendar+5.5+i*.3)));
['tp1','tp2','tp3'].forEach((id,i)=>R($(id),u,TM.calendar+5+i*.9));