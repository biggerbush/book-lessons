rise($('tdesk'),p(u,TM.title_desk,TM.title_desk+.6)); rise($('tfocus'),p(u,TM.title_desk+3,TM.title_desk+3.6));
$('ring').setAttribute('r',(150+6*Math.sin(t*2)).toFixed(1));

D.forEach((d,i)=>{const a=TM.four_doors+i*.5;rise(d[0],p(u,a,a+.4));d[1].setAttribute('stroke',u>=TM.busy_life+2&&Math.floor(t/1.2)%4===i?'var(--gain)':'var(--ink)')});
PL.forEach((g,i)=>{const a=TM.busy_life+i*.6;rise(g,p(u,a,a+.4))});

rise($('monk'),p(u,TM.monk_cabin,TM.monk_cabin+.5));
const pe=p(u,TM.monk_cabin+1,TM.monk_cabin+2.5), eo=p(u,TM.monk_cabin+.3,TM.monk_cabin+.8);
EV.forEach(e=>{const R=280+50*pe;e[0].setAttribute('transform','translate('+(460+R*Math.cos(e[1])).toFixed(1)+' '+(520+R*Math.sin(e[1])).toFixed(1)+')');e[0].setAttribute('opacity',(eo*(1-.75*pe)).toFixed(2))});
rise($('knuth'),p(u,TM.knuth_desk,TM.knuth_desk+.5)); rise($('goal'),p(u,TM.knuth_desk+5.4,TM.knuth_desk+6));

CE.forEach((g,i)=>{const a=TM.stone_tower+i*.2;rise(g,p(u,a,a+.3))});
rise($('tower'),p(u,TM.stone_tower+.8,TM.stone_tower+1.4)); rise($('city'),p(u,TM.jung_figure,TM.jung_figure+.5));
$('jung').setAttribute('transform','translate('+(680+380*p(u,TM.jung_figure+3.8,TM.jung_figure+5.6)).toFixed(1)+' 0)');
$('jung').setAttribute('opacity',p(u,TM.jung_figure+.3,TM.jung_figure+.8).toFixed(2));
rise($('full'),p(u,TM.jung_figure+9.9,TM.jung_figure+10.5));

rise($('clk'),p(u,TM.sunrise_clock,TM.sunrise_clock+.6));
const ck=p(u,TM.chappell+1,TM.chappell+4);
$('hh').setAttribute('transform','rotate('+(165+60*ck).toFixed(1)+' 300 400)'); $('mh').setAttribute('transform','rotate('+(180+720*ck).toFixed(1)+' 300 400)');
$('wedge').setAttribute('opacity',p(u,TM.chappell,TM.chappell+.6)); rise($('chap'),p(u,TM.chappell,TM.chappell+.5));
rise($('calg'),p(u,TM.chain_calendar,TM.chain_calendar+.5));
XM.forEach((m,k)=>{const a=TM.chain_calendar+.6+k*.25;m.setAttribute('opacity',p(u,a,a+.15))});
rise($('habit'),p(u,TM.chain_calendar+7.4,TM.chain_calendar+8));

rise($('day'),p(u,TM.notebook,TM.notebook+.5));
GP.forEach((g,i)=>{const a=TM.notebook+1.2+i*.8;rise(g,p(u,a,a+.4))});
rise($('isa'),p(u,TM.isaacson,TM.isaacson+.5));
PG.forEach((l,i)=>{const a=TM.isaacson+.6+i*.6;l.setAttribute('opacity',p(u,a,a+.3))});
rise($('warn'),p(u,TM.isaacson+7,TM.isaacson+7.6));

const ra=TM.ritual_icon; rise($('rit'),p(u,ra,ra+.5));
QS.forEach((q,i)=>{const a=ra+i*.15;q.setAttribute('opacity',(p(u,a,a+.3)*(1-p(u,ra+1.8,ra+2.6))).toFixed(2))});
TK.forEach((k,i)=>{const a=ra+2+i*.4;k.setAttribute('opacity',p(u,a,a+.3))});
rise($('cw'),p(u,TM.location,TM.location+.6)); rise($('ct'),p(u,TM.timer,TM.timer+.6));
const sw=300*p(u,TM.timer+.6,TM.timer+3.6); $('arc').setAttribute('d',arcD(1250,480,118,sw)); $('swh').setAttribute('transform','rotate('+sw.toFixed(1)+' 1250 480)');

rise($('rules'),p(u,TM.rule_card,TM.rule_card+.6));
[0,1,2].forEach(i=>{const a=TM.coffee_cup+i*1.6;rise($('f'+i),p(u,a,a+.5))});
$('steam').setAttribute('transform','translate(0 '+(-8*Math.abs(Math.sin(t*1.5))).toFixed(1)+')');
rise($('tell'),p(u,TM.coffee_cup+5.8,TM.coffee_cup+6.4));

const q0=SC[8][0]/K+.4; rise($('qa'),p(u,q0,q0+.5)); rise($('qb'),p(u,q0+.4,q0+.9));
rise($('wr'),p(u,TM.sticky_note,TM.sticky_note+.5)); rise($('note'),p(u,TM.sticky_note+.3,TM.sticky_note+.8));
SCR.forEach((l,i)=>{const a=TM.sticky_note+1+i*.8;l.setAttribute('stroke-dashoffset',(170*(1-p(u,a,a+.7))).toFixed(1))});