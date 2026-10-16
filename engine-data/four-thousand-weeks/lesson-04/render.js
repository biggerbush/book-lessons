rise($('t_phone'),p(u,TM.phone_glow,TM.phone_glow+.6));
$('t_scr').setAttribute('opacity',(.55+.35*Math.sin(t*3)).toFixed(2));
R0.forEach((c,i)=>{const k=(t*.45+i/3)%1;c.setAttribute('r',(110+80*k).toFixed(1));c.setAttribute('opacity',((1-k)*.7*p(u,TM.phone_glow+.4,TM.phone_glow+1)).toFixed(2))});
rise($('t_why'),p(u,TM.phone_glow+6.4,TM.phone_glow+7));

rise($('ph'),p(u,TM.smartphone,TM.smartphone+.5));
IC.forEach((r,i)=>r.setAttribute('opacity',p(u,TM.app_icons+i*.08,TM.app_icons+i*.08+.3)));
rise($('nt'),p(u,TM.notification,TM.notification+.4));$('bdg').setAttribute('r',(26+3*Math.abs(Math.sin(t*5))).toFixed(1));
rise($('pq'),p(u,TM.notification,TM.notification+.5));$('pp').setAttribute('transform','translate('+(-50*p(u,TM.notification+.6,TM.notification+2)).toFixed(1)+' 0)');
rise($('au'),p(u,TM.author,TM.author+.6));

rise($('dk'),p(u,TM.desk,TM.desk+.6));rise($('bp'),p(u,TM.blank_page,TM.blank_page+.5));$('cur').setAttribute('opacity',t%1<.5?1:0);
rise($('mtr'),p(u,TM.blank_page,TM.blank_page+.5));$('dm').setAttribute('width',(380*p(u,TM.blank_page+.5,TM.news_tab+1)).toFixed(1));
rise($('n1'),p(u,TM.blank_page+5.2,TM.blank_page+5.7));
$('nstr').setAttribute('x2',(1074+(NW.nt1+12)*p(u,TM.blank_page+6,TM.blank_page+6.5)).toFixed(1));
$('nstr2').setAttribute('x2',(1074+(NW.nt2+12)*p(u,TM.blank_page+6.4,TM.blank_page+6.9)).toFixed(1));
rise($('nw'),p(u,TM.news_tab,TM.news_tab+.4));rise($('n2'),p(u,TM.news_tab+.4,TM.news_tab+1));

rise($('p3'),p(u,TM.heavy_task,TM.heavy_task+.5));rise($('tk'),p(u,TM.heavy_task+.2,TM.heavy_task+.8));rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5));
const dz=p(u,TM.question_mark+5.6,TM.question_mark+6.1);$('zz').setAttribute('opacity',dz);$('zz').setAttribute('transform','translate(0 '+(3*Math.sin(t*9)).toFixed(1)+')');rise($('dc'),dz);
rise($('mr'),p(u,TM.mirror,TM.mirror+.6));

const dp=p(u,TM.open_door,TM.open_door+1),fx=(652+100*dp).toFixed(1);
$('dpan').setAttribute('points','640,420 '+fx+','+(420-40*dp).toFixed(1)+' '+fx+','+(740+20*dp).toFixed(1)+' 640,740');
$('beam').setAttribute('opacity',(.2*dp).toFixed(2));
rise($('fd'),p(u,TM.endless_feed,TM.endless_feed+.6));
FD.forEach((g,i)=>{const y=240+(((i*110-t*40)%550)+550)%550;g.setAttribute('transform','translate(0 '+y.toFixed(1)+')');g.setAttribute('opacity',cl(Math.min((y-240)/60,(700-y)/60)).toFixed(2))});
rise($('sg'),p(u,TM.sigh_face,TM.sigh_face+.6));
$('sgl').setAttribute('transform','translate('+(4*Math.sin(t*2.4)).toFixed(1)+' 0)');$('sgl').setAttribute('opacity',(.6+.4*Math.sin(t*2.4)).toFixed(2));
rise($('tm'),p(u,TM.sigh_face+4,TM.sigh_face+4.6));

rise($('lk'),p(u,TM.lock_icon+1.1,TM.lock_icon+1.5));
const ma=[TM.mole_game+.3,TM.mole_game+2.5,TM.mole_game+5.4];
MO.forEach((m,i)=>{const k=i?p(u,ma[i-1],ma[i-1]+.4):p(u,TM.lock_icon,TM.lock_icon+.4)*(1-p(u,TM.lock_icon+1,TM.lock_icon+1.4));m.setAttribute('opacity',k.toFixed(2));m.setAttribute('transform','translate(0 '+((1-k)*70+4*Math.sin(t*4+i)).toFixed(1)+')')});
rise($('rt'),p(u,TM.mole_game+8.2,TM.mole_game+8.8));rise($('dv'),p(u,TM.mole_game+8.6,TM.mole_game+9.2));

rise($('hd'),p(u,TM.open_hands,TM.open_hands+.6));$('blob').setAttribute('r',(56+5*Math.sin(t*2.5)).toFixed(1));rise($('s6sub'),p(u,TM.open_hands+4.8,TM.open_hands+5.4));
rise($('wv'),p(u,TM.wave,TM.wave+.5));
const wp=p(u,TM.wave+.3,TM.wave+4.4);let wd='M660 540',lx=660,ly=540;
for(let x=660;x<=660+800*wp;x+=8){lx=x;ly=540-220*Math.exp(-Math.pow((x-1000)/140,2));wd+='L'+x+' '+ly.toFixed(1)}
$('wvp').setAttribute('d',wd);$('wdot').setAttribute('cx',lx);$('wdot').setAttribute('cy',ly.toFixed(1));
rise($('st'),p(u,TM.small_step,TM.small_step+.4));
const hs=p(u,TM.small_step+.5,TM.small_step+1.3);$('stp').setAttribute('transform','translate('+(750+180*hs).toFixed(1)+' '+(714-50*hs-40*Math.sin(Math.PI*hs)).toFixed(1)+')');

rise($('dp'),p(u,TM.draft_pages,TM.draft_pages+.6));rise($('ps'),p(u,TM.draft_pages+1.4,TM.draft_pages+1.9));rise($('wt'),p(u,TM.draft_pages+1.8,TM.draft_pages+2.3));
const wo=p(u,TM.weight_off,TM.weight_off+1.3);
$('wtin').setAttribute('transform','translate(0 '+(18*(1-wo)-100*wo).toFixed(1)+')');$('wtin').setAttribute('opacity',(1-wo).toFixed(2));
$('psin').setAttribute('transform','translate(0 '+(18*(1-wo)).toFixed(1)+')');
const fc=u>=TM.focused_person;PF.forEach(e=>e.setAttribute('class',fc?'gain':'ink'));
$('fl').setAttribute('opacity',p(u,TM.focused_person,TM.focused_person+.6));rise($('lr'),p(u,TM.focused_person+.3,TM.focused_person+.9));

const S8=SC[8][0]/K,E8=SC[8][1]/K;
rise($('qa'),p(u,S8+.4,S8+.9));rise($('qb'),p(u,S8+.8,S8+1.3));rise($('qc'),p(u,S8+1.2,S8+1.7));rise($('qd'),p(u,S8+1.6,S8+2.1));
rise($('sit'),p(u,S8+1.4,S8+2));rise($('nb'),p(u,S8+2.2,S8+2.7));
$('sitp').setAttribute('transform','translate(0 '+(2*Math.sin(t*1.6)).toFixed(1)+')');
rise($('tmr'),p(u,S8+.8,S8+1.4));rise($('q2'),p(u,S8+5,S8+5.5));
const tp=p(u,S8+5.4,E8);
$('tarc').setAttribute('stroke-dashoffset',(628*(1-tp)).toFixed(1));
$('thand').setAttribute('transform','rotate('+(360*tp).toFixed(1)+' 1300 380)');