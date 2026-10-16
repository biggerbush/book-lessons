R('fig0',u,TM.fallen_figure);
const gu=p(u,TM.fallen_figure+3.8,TM.fallen_figure+5.2);
$('figR').setAttribute('transform','translate(0 '+(-45*(1-gu)).toFixed(1)+') rotate('+(-90*(1-gu)).toFixed(1)+' 1300 700)');
R('up0',u,TM.fallen_figure+4.8,.6);

R('arena',u,TM.arena); R('bruise',u,TM.bruised_knee,.4); R('tagl',u,TM.bruised_knee);
TG.forEach((g,i)=>R(g,u,TM.bruised_knee+.3+i*.5)); R('ladder',u,TM.ladder,.6);

R('lake',u,TM.lake); R('swim',u,TM.lake+.4);
let w2='M200 610';for(let x=220;x<=1400;x+=20)w2+='L'+x+' '+(610+6*Math.sin(x/50+t*2)).toFixed(1);$('wv2').setAttribute('d',w2);
const bx=480+200*p(u,TM.two_swimmers,TM.two_swimmers+2);
$('swB').setAttribute('transform','translate('+bx.toFixed(1)+' '+(560+5*Math.sin(t*2)).toFixed(1)+')');
$('swS').setAttribute('transform','translate(900 '+(560+5*Math.sin(t*2+1.5)).toFixed(1)+')');
R('bb2',u,TM.two_swimmers+1.6); R('sb2a',u,TM.short_reply); R('sb2b',u,TM.short_reply+3.7);

R('hd3',u,TM.thought_cloud); R('cloud',u,TM.thought_cloud+.4); R('story',u,TM.swimsuit,.6);
R('pz',u,TM.puzzle_piece);
$('pzR').setAttribute('transform','translate('+(80-100*p(u,TM.puzzle_piece+.8,TM.puzzle_piece+2)).toFixed(1)+' 0)');
R('rwd',u,TM.puzzle_piece+2);

R('n0',u,TM.racing_heart);
const bt=1.5*(1+.1*Math.pow(Math.abs(Math.sin(t*5)),6)*(1-.7*p(u,TM.deep_breath,TM.deep_breath+2)));
$('hrt').setAttribute('transform','translate(340 460) scale('+bt.toFixed(3)+')');
R('n1',u,TM.deep_breath); const br=70+25*Math.sin(t*1.3);
$('br1').setAttribute('r',br.toFixed(1)); $('br0').setAttribute('r',(br*.75).toFixed(1));
R('n2',u,TM.question_mark); $('qmR').setAttribute('transform','rotate('+(6*Math.sin(t*1.5)).toFixed(2)+' 1260 470)');

R('ppl5',u,TM.speech_bubble); R('bb5',u,TM.speech_bubble+.4);
$('dots5').setAttribute('opacity',((1-p(u,TM.speech_bubble+4.9,TM.speech_bubble+5.2))*(.6+.4*Math.sin(t*4))).toFixed(2));
R('phr',u,TM.speech_bubble+4.9);
R('sb5',u,TM.panic_wave);
let pw='';for(let i=0;i<=24;i++)pw+=(i?'L':'M')+(700+i*20)+' '+(570+(i%2?-1:1)*(8+12*Math.abs(Math.sin(t*6+i)))).toFixed(1);$('pw5').setAttribute('d',pw);
R('wr5',u,TM.panic_wave+7.4,.6);

R('pg6',u,TM.draft_page);
let px=196,py=SY[0];
ST.forEach(([el,e],i)=>{const k=p(u,TM.red_pen+i*.9,TM.red_pen+i*.9+.8),x=196+(e-196)*k;el.setAttribute('d','M196 '+SY[i]+'H'+x.toFixed(1));if(u>=TM.red_pen+i*.9){px=x;py=SY[i]}});
$('pen6').setAttribute('transform','translate('+px.toFixed(1)+' '+(py-4)+')');
$('pen6').setAttribute('opacity',(p(u,TM.red_pen-.2,TM.red_pen+.2)*(1-p(u,TM.red_pen+2.8,TM.red_pen+3.2))).toFixed(2));
R('fx6',u,TM.red_pen+2.8);
R('st6',u,TM.arrow_up);
const ci=4*p(u,TM.arrow_up+.6,TM.arrow_up+3.4),cn=Math.min(Math.floor(ci),4),cf=ci-Math.floor(ci);
$('cl6').setAttribute('cx',(860+120*ci).toFixed(1)); $('cl6').setAttribute('cy',(734-90*cn-(ci<4?30*Math.sin(cf*Math.PI):0)).toFixed(1));

R('hub',u,TM.open_hands); R('k0',u,TM.open_hands+.4); SPK[0].setAttribute('opacity',p(u,TM.open_hands+.4,TM.open_hands+.9));
R('arm',u,TM.open_hands+3);
R('k1',u,TM.handshake); SPK[1].setAttribute('opacity',p(u,TM.handshake,TM.handshake+.5));
R('k2',u,TM.compass); SPK[2].setAttribute('opacity',p(u,TM.compass,TM.compass+.5));
$('ndl').setAttribute('transform','rotate('+((40*(1-p(u,TM.compass+.5,TM.compass+2.5))+4)*Math.sin(t*2)).toFixed(2)+' 1280 600)');

R('nb8',u,TM.notebook); R('qa',u,TM.notebook+.2); R('qb',u,TM.notebook+.6);
NL.forEach(([el,w],i)=>el.setAttribute('stroke-dasharray',(w*p(u,TM.notebook+1+i*.8,TM.notebook+1.7+i*.8)).toFixed(1)+' 999'));
R('qc',u,TM.notebook+5.4); R('qd',u,TM.notebook+5.9);