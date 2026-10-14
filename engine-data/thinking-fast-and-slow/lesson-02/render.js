rise($('card'),p(u,TM.mindik_card,TM.mindik_card+.6));
rise($('yes'),p(u,TM.mindik_card+4.6,TM.mindik_card+5));

const q2=u>=TM.question_mark+2.2;
TL.forEach((c,i)=>{if(i<2)return;rise(c[0],p(u,TM.question_mark,TM.question_mark+.5));const ad=u>=TM.adjectives+(i-2)*.6;
  c[2].textContent=ad?['corrupt','cruel'][i-2]:'?';c[2].style.fill=ad?'var(--loss)':q2?'var(--gain)':'var(--ink)';
  c[1].setAttribute('stroke',ad?'var(--loss)':q2?'var(--gain)':'var(--muted)');c[1].setAttribute('stroke-dasharray',ad?'none':'12 10')});
rise($('lead'),p(u,TM.question_mark+.4,TM.question_mark+1));
const thd=u>=TM.thumbs_down;$('leadp').style.fill=thd?'var(--loss)':'var(--gain)';
const sk=p(u,TM.thumbs_down,TM.thumbs_down+.5);$('istk').setAttribute('x2',(632+420*sk).toFixed(1));$('istk').setAttribute('opacity',sk>0?1:0);
rise($('fright'),p(u,TM.thumbs_down+.3,TM.thumbs_down+.8));rise($('thumb'),p(u,TM.thumbs_down,TM.thumbs_down+.5));

const se=p(u,TM.story_engine,TM.story_engine+.6);rise($('mach'),se);
SCR.forEach((r,i)=>{const f=(t*.25+i/6)%1,y0=290+(i*53)%160;r.setAttribute('x',(160+f*500).toFixed(1));r.setAttribute('y',(y0+(362-y0)*f).toFixed(1));r.setAttribute('opacity',(se*(f>.85?(1-f)/.15:1)).toFixed(2))});
$('gear').setAttribute('transform','rotate('+(t*60%360).toFixed(1)+' 790 360)');
rise($('story'),p(u,TM.story_engine+4.6,TM.story_engine+5.1));
SL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.story_engine+5+i*.4,TM.story_engine+5.3+i*.4)));
rise($('puzg'),p(u,TM.puzzle_pieces,TM.puzzle_pieces+.5));rise($('pz1'),p(u,TM.puzzle_pieces+.8,TM.puzzle_pieces+1.3));
const fit=p(u,TM.puzzle_pieces+3.8,TM.puzzle_pieces+4.3);PZ.forEach(e=>e.setAttribute('fill',fit>0?'var(--gain)':'var(--ink)'));rise($('pz2'),fit);

rise($('bub'),p(u,TM.speech_bubble,TM.speech_bubble+.6));
rise($('spot'),p(u,TM.spotlight,TM.spotlight+.6));
rise($('dark'),p(u,TM.dark_stage,TM.dark_stage+.6));

rise($('top'),p(u,TM.smooth_road,TM.smooth_road+.6));
rise($('few'),p(u,TM.few_facts,TM.few_facts+.6));
rise($('bot'),p(u,TM.bumpy_road,TM.bumpy_road+.6));
const bx=120+((t*.2)%1)*1260;
$('ball1').setAttribute('cx',bx.toFixed(1));$('ball1').setAttribute('cy',(F1(bx)-46).toFixed(1));
$('ball2').setAttribute('cx',bx.toFixed(1));$('ball2').setAttribute('cy',(F2(bx)-44).toFixed(1));

rise($('ct'),p(u,TM.courtroom,TM.courtroom+.6));
rise($('l1'),p(u,TM.one_lawyer,TM.one_lawyer+.5));
rise($('l2'),p(u,TM.two_lawyers,TM.two_lawyers+.5));
rise($('gv'),p(u,TM.gavel,TM.gavel+.4));
const gk=p(u,TM.gavel+.3,TM.gavel+1.5);$('bar1').setAttribute('width',(520*gk).toFixed(1));$('bar2').setAttribute('width',(300*gk).toFixed(1));
$('gvh').setAttribute('transform','translate(700 290) rotate('+(-40+40*p(u,TM.gavel+.2,TM.gavel+.5)).toFixed(1)+')');
rise($('ghost'),p(u,TM.gavel+4.9,TM.gavel+5.4));rise($('fin'),p(u,TM.gavel+5.4,TM.gavel+6));

rise($('run'),p(u,TM.runner,TM.runner+.5));
const sw=Math.sin(t*9);
$('lg1').setAttribute('x2',(355+60*sw).toFixed(1));$('lg2').setAttribute('x2',(355-60*sw).toFixed(1));
$('ar1').setAttribute('x2',(370-50*sw).toFixed(1));$('ar2').setAttribute('x2',(370+50*sw).toFixed(1));
rise($('runl'),p(u,TM.runner+2.2,TM.runner+2.7));
rise($('stop'),p(u,TM.stop_sign,TM.stop_sign+.5));
CD.forEach((g,i)=>rise(g,p(u,TM.headline+i*.5,TM.headline+i*.5+.4)));
rise($('verd'),p(u,TM.headline+1.8,TM.headline+2.3));

rise($('pad'),p(u,TM.notepad,TM.notepad+.5));
rise($('scl'),p(u,TM.notepad+1,TM.notepad+1.6));
rise($('qq'),p(u,TM.blank_page,TM.blank_page+.5));
rise($('blank'),p(u,TM.blank_page+1,TM.blank_page+1.5));
const kB=p(u,TM.second_view+.3,TM.second_view+1.3),an=-10*(1-kB),ra=an*Math.PI/180;
$('beam').setAttribute('transform','rotate('+an.toFixed(2)+' 1120 360)');
$('pA').setAttribute('transform','translate('+(1120-250*Math.cos(ra)).toFixed(1)+' '+(360-250*Math.sin(ra)).toFixed(1)+')');
$('pB').setAttribute('transform','translate('+(1120+250*Math.cos(ra)).toFixed(1)+' '+(360+250*Math.sin(ra)).toFixed(1)+')');
$('wB').setAttribute('opacity',p(u,TM.second_view,TM.second_view+.3));
$('wB').setAttribute('transform','translate(0 '+(-140*(1-p(u,TM.second_view,TM.second_view+.6))).toFixed(1)+')');
rise($('fair'),p(u,TM.second_view+1,TM.second_view+1.6));

rise($('lbl8'),p(u,TM.mirror,TM.mirror+.5));rise($('mir'),p(u,TM.mirror+.3,TM.mirror+.9));
rise($('qa'),p(u,TM.mirror+5,TM.mirror+5.5));rise($('qb'),p(u,TM.mirror+5.4,TM.mirror+5.9));rise($('qc'),p(u,TM.mirror+5.8,TM.mirror+6.3));
rise($('lbl9'),p(u,TM.mirror+6.6,TM.mirror+7.1));