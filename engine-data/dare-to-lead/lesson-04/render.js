const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d));
const jig=(arr,attr,amp,sp)=>arr.forEach((c,i)=>c[0].setAttribute(attr,(c[1]+amp*Math.sin(t*sp+i*1.7)).toFixed(1)));
const tc=p(u,TM.title_card+.4,TM.title_card+2);
$('tfog').setAttribute('opacity',(1-tc).toFixed(2)); rise($('tclr'),tc); jig(TF,'cx',10,1.3); R('tnk',TM.title_card+4.6);

R('note',TM.quote_card); R('vb',TM.speech_bubble); R('fog',TM.fog_cloud); R('gx',TM.fog_cloud+1.5); jig(FG,'cx',5,1.1);

R('log',TM.research_log);
RW.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.research_log+.6+i*.4,TM.research_log+.9+i*.4)));
R('door',TM.closed_door); R('fb',TM.closed_door+.6); R('tag',TM.closed_door+3.4); R('cc',TM.closed_door+3.8);
$('tagr').setAttribute('transform','rotate('+(4*Math.sin(t*2)).toFixed(2)+' 970 320)');

R('tgt',TM.coworker); R('col',TM.coworker+.3);
MS.forEach((m,i)=>m.setAttribute('opacity',p(u,TM.coworker+.8+i*.5,TM.coworker+1+i*.5)));
R('pair',TM.side_chatter); R('chat',TM.side_chatter+.6);
CB.forEach((b,i)=>{const f=(t*.5+i/3)%1;b.setAttribute('transform','translate('+(1050+200*f).toFixed(1)+' '+(300-40*Math.sin(Math.PI*f)).toFixed(1)+')');b.setAttribute('opacity',Math.sin(Math.PI*f).toFixed(2))});
R('conf',TM.confused_face); R('us',TM.confused_face+4.5);

// half truths: tall promise vs short reality, trust drains to a quarter
R('sbub',TM.sugar_cube); R('bsg',TM.sugar_cube+1.2); R('real',TM.mismatch); R('gap',TM.mismatch+.5); R('trust',TM.mismatch+.6);
const dn=p(u,TM.mismatch+1.5,TM.mismatch+3.5);
$('trb').setAttribute('width',(440*(1-.75*dn)).toFixed(1)); $('trb').style.fill=dn>.3?'var(--muted)':'var(--gain)';
R('adult',TM.straight_line+.8);

R('pd',TM.paint_brush); const bk=p(u,TM.paint_brush+.2,TM.paint_brush+2);
BS.style.strokeDasharray=BL; BS.style.strokeDashoffset=BL*(1-bk);
const pt=BS.getPointAtLength(BL*bk); $('bh').setAttribute('transform','translate('+pt.x.toFixed(1)+' '+(pt.y-12).toFixed(1)+')');
R('think',TM.blank_canvas); R('oth',TM.blank_canvas+1); R('cardw',TM.blank_canvas+1.5); jig(FZ,'cx',6,3);
$('card').setAttribute('transform','translate('+(430+430*p(u,TM.blank_canvas+2,TM.blank_canvas+4)).toFixed(1)+' 520)');
R('res',TM.wrong_result); R('neq',TM.wrong_result+.8); R('ld',TM.wrong_result+1.5);

R('fin',TM.finished_art); R('tb0',TM.finished_art+.8); R('tb1',TM.finished_art+1.1);
CK.forEach((c,i)=>{const a=TM.checklist+i*1.8;rise(c[0],p(u,a,a+.4));c[1].setAttribute('stroke-dashoffset',(1-p(u,a+.5,a+1)).toFixed(3))});
const mt=p(u,TM.question_mark+1.5,TM.question_mark+2.5);
rise($('qm'),p(u,TM.question_mark,TM.question_mark+.5)*(1-mt)); $('w1').setAttribute('opacity',(1-mt).toFixed(2)); $('r1').setAttribute('opacity',mt.toFixed(2));
R('match',TM.question_mark+.6);

R('hm',TM.heart_icon); $('hs').setAttribute('stroke-dashoffset',(1-p(u,TM.heart_icon+1,TM.heart_icon+1.6)).toFixed(3)); R('hrt',TM.heart_icon+1.6);
R('ch',TM.two_chairs); R('talk',TM.two_chairs+1); R('hs2',TM.handshake); R('rsp',TM.handshake+.6); R('feel',TM.handshake+1.2);

R('cal',TM.calendar); R('qa',TM.calendar+.2); R('qb',TM.calendar+.6); R('qc',TM.open_door); R('dr',TM.open_door+.3); R('pdl',TM.open_door+1.2);
$('dpan').setAttribute('transform','translate(1310 0) scale('+(1-.8*p(u,TM.open_door+.8,TM.open_door+1.8)).toFixed(3)+' 1) translate(-1310 0)');