const L=(id,a,d=.5)=>rise($(id),p(u,a,a+d));

$('crack').setAttribute('stroke-dashoffset',(1-p(u,TM.cracked_jar,TM.cracked_jar+1.2)).toFixed(3));
$('crack').setAttribute('opacity',(1-p(u,TM.cracked_jar+5.4,TM.cracked_jar+6)).toFixed(2));
TJ.forEach((g,i)=>{const a=TM.cracked_jar+5.4+i*.15;rise(g,p(u,a,a+.4))});

L('bw',TM.big_word);
$('bwi').setAttribute('transform','translate(0 '+(4*Math.sin(t*2)).toFixed(1)+')');
$('bwi').setAttribute('opacity',(1-.7*p(u,TM.two_people+5.7,TM.two_people+6.3)).toFixed(2));
L('s1f',TM.two_people); L('bub1',TM.two_people+.4); L('shld',TM.two_people+2); L('endx',TM.two_people+3.5);
PC.forEach((r,i)=>{const a=TM.two_people+5.7+i*.15;rise(r,p(u,a,a+.4))}); L('pcl',TM.two_people+6.6);

L('jar',TM.marble_jar);
const nm=Math.floor((u>=TM.marble_jar+.6?3:0)+53*p(u,TM.one_marble,TM.one_marble+9));
MB.forEach((c,i)=>c.setAttribute('opacity',i<nm?1:0));
const cy=(t%1), on=u>=TM.one_marble&&u<TM.one_marble+9;
$('drop').setAttribute('cy',(330+90*cy).toFixed(1)); $('drop').setAttribute('opacity',on?(1-cy).toFixed(2):0);
L('mo0',TM.one_marble+1); L('mo1',TM.one_marble+3); L('slow',TM.one_marble+6.5);

L('pB',TM.letter_b); L('iB',TM.letter_b+.4); L('ask',TM.letter_b+2.5);
L('pR',TM.letter_r); L('iR',TM.letter_r+.4);
RC.forEach((c,i)=>{const a=TM.letter_r+.8+i*.5;c.setAttribute('opacity',p(u,a,a+.3))});
L('lim',TM.letter_r+4.9); $('limf').setAttribute('width',(420*p(u,TM.letter_r+5.2,TM.letter_r+6.5)).toFixed(1));

L('pA',TM.letter_a); L('iA',TM.letter_a+.3);
AC.forEach((g,i)=>{const a=TM.letter_a+1+i*.9;rise(g,p(u,a,a+.4))});
L('pV',TM.letter_v); L('iV',TM.letter_v+.3);
$('dial').setAttribute('transform','rotate('+(-90*p(u,TM.letter_v+1,TM.letter_v+2.5)).toFixed(1)+' 1020 540)');
L('wsp',TM.whisper); $('wx').setAttribute('opacity',p(u,TM.whisper+1.5,TM.whisper+1.8));

L('pI',TM.letter_i); L('iI',TM.letter_i+.3);
const s=328*p(u,TM.letter_i+1.5,TM.letter_i+4), f=Math.max(0,(s-100)/228);
$('walk').setAttribute('cx',(450+180*f).toFixed(1)); $('walk').setAttribute('cy',(s<100?710-s:610-140*f).toFixed(1));
L('ffe',TM.letter_i+6.6);
L('pN',TM.letter_n); L('iN',TM.letter_n+.3); L('safe',TM.letter_n+1.5);

rise(BT[6],p(u,TM.letter_g,TM.letter_g+.5)); L('gen',TM.letter_g+.3); L('rd0',TM.letter_g+1.5);
strike('st6',400,p(u,TM.letter_g+2.5,TM.letter_g+3)); L('rd1',TM.letter_g+3);
BT.slice(0,6).forEach((g,i)=>{const a=TM.braving_word+i*.2;rise(g,p(u,a,a+.4))});
L('chk',TM.braving_word+3.8);

L('s7f',TM.manager); L('cal',TM.manager+.5);
CX.forEach((x,i)=>{const a=TM.manager+1+i*.4;x.setAttribute('opacity',p(u,a,a+.3))});
L('old7',TM.manager+3.4); strike('st7',400,p(u,TM.manager+4.4,TM.manager+5)); L('new7',TM.manager+5);
L('rt7',TM.desk_talk); L('arc7',TM.desk_talk+.4); L('cap7',TM.desk_talk+.8);

L('lab8',TM.checklist);
CK.forEach(([r,tx],i)=>{const k=u>=TM.checklist+.8+i*.4;r.style.fill=k?'var(--gain)':'var(--line)';tx.style.fill=k?'var(--on-gain)':'var(--ink)'});
L('qa',TM.checklist+4.6); L('qb',TM.checklist+5); L('jar8',TM.checklist+4.6); L('foot8',TM.checklist+5.6);
const c8=(t%1.6)/1.6;
$('drop8').setAttribute('cy',(300+235*ease(c8)).toFixed(1)); $('drop8').setAttribute('opacity',u>=TM.checklist+5.2?(c8<.85?1:(1-c8)/.15).toFixed(2):0);