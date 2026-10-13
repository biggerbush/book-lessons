const w0=p(u,TM.quiet_room,TM.quiet_room+4.5),pt=$('trail').getPointAtLength(TL*w0);
$('walker').setAttribute('cx',pt.x.toFixed(1));$('walker').setAttribute('cy',(pt.y-3*Math.abs(Math.sin(t*5))*(w0<1?1:0)).toFixed(1));
rise($('flag'),p(u,TM.quiet_room,TM.quiet_room+.6));rise($('ask'),p(u,TM.quiet_room+5.4,TM.quiet_room+5.9));

rise($('room'),p(u,TM.funeral_room,TM.funeral_room+.5));
AU.forEach((g,i)=>{const a=TM.funeral_room+.6+i*.06;rise(g,p(u,a,a+.4))});
SPK.forEach((s,i)=>{const a=TM.four_speakers+i*.4,b=TM.four_speakers+3.8+i*.9;rise(s[0],p(u,a,a+.4));rise(s[1],p(u,b,b+.4))});

TK.forEach((k,i)=>{const a=TM.speech_bubble+i*.4;rise(k[0],p(u,a,a+.4));rise(k[1],p(u,a+.2,a+.6));
  const q=p(u,TM.speech_bubble+4.6+i*.6,TM.speech_bubble+5+i*.6);k[2].setAttribute('opacity',(1-q).toFixed(2));k[3].setAttribute('opacity',q.toFixed(2));
  k[4].setAttribute('opacity',p(u,TM.values_heart+i*.2,TM.values_heart+.5+i*.2).toFixed(2))});
const bt=1.4*(1+.06*Math.pow(Math.abs(Math.sin(t*2.4)),6));$('hg').setAttribute('transform','translate(1150 470) scale('+bt.toFixed(3)+')');
rise($('vh'),p(u,TM.values_heart+.4,TM.values_heart+1));rise($('vcap'),p(u,TM.values_heart+1.5,TM.values_heart+2));

rise($('bp'),p(u,TM.blueprint,TM.blueprint+.6));rise($('arr'),p(u,TM.house,TM.house+.5));rise($('bh'),p(u,TM.house+.5,TM.house+1));
BR.forEach((b,i)=>b.setAttribute('opacity',p(u,TM.house+1.2+i*.12,TM.house+1.5+i*.12).toFixed(2)));
rise($('roof'),p(u,TM.house+4.8,TM.house+5.3));rise($('dflt'),p(u,TM.house+6.9,TM.house+7.5));

rise($('wallsL'),p(u,TM.ladder,TM.ladder+.5));rise($('clmw'),p(u,TM.ladder+.3,TM.ladder+.7));
const cb=.9*p(u,TM.ladder+.5,TM.ladder+4);$('clm').setAttribute('transform','translate('+(290+210*cb).toFixed(1)+' '+(780-480*cb).toFixed(1)+')');
$('ww').setAttribute('fill',u>=TM.wrong_wall?'var(--loss)':'var(--ink)');
rise($('wl'),p(u,TM.wrong_wall,TM.wrong_wall+.5));rise($('rw'),p(u,TM.wrong_wall+1,TM.wrong_wall+1.6));
rise($('jg'),p(u,TM.jungle_tree,TM.jungle_tree+.6));rise($('wk'),p(u,TM.jungle_tree+.6,TM.jungle_tree+1.1));
WK.forEach((g,i)=>g.setAttribute('transform','translate(0 '+(-5*Math.abs(Math.sin(t*5+i))).toFixed(1)+')'));
rise($('ldr'),p(u,TM.jungle_tree+2.5,TM.jungle_tree+3));rise($('jb'),p(u,TM.jungle_tree+4,TM.jungle_tree+4.5));

rise($('pg'),p(u,TM.mission_page,TM.mission_page+.6));
[0,1,2].forEach(i=>{const a=TM.mission_page+3.7+i*1.6;rise($('ms'+i),p(u,a,a+.5))});
rise($('cmp'),p(u,TM.compass,TM.compass+.6));$('cbody').setAttribute('transform','rotate('+(16*Math.sin(t*1.1)).toFixed(2)+' 1100 480)');
rise($('ccap'),p(u,TM.compass+2,TM.compass+2.6));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
[0,1,2].forEach(i=>{const a=TM.role_circles+i*1.2,e=TM.notebook+.5+i*.8;rise($('rl'+i),p(u,a,a+.5));rise($('en'+i),p(u,e,e+.4));
  const rv=u>=TM.notebook+5?.55+.45*Math.abs(Math.sin(t*.9+i)):1;$('eb'+i).setAttribute('x2',(940+440*p(u,e+.3,e+1.3)*rv).toFixed(1))});
rise($('rev'),p(u,TM.notebook+5,TM.notebook+5.6));

[0,1].forEach(i=>$('road'+i).setAttribute('stroke-dashoffset',(100*(1-p(u,TM.fork_road+i*.3,TM.fork_road+1.5+i*.3))).toFixed(1)));
rise($('wlk'),p(u,TM.fork_road,TM.fork_road+.5));rise($('mp'),p(u,TM.fork_road+.8,TM.fork_road+1.3));
rise($('sg0'),p(u,TM.fork_road+3.7,TM.fork_road+4.2));rise($('sg1'),p(u,TM.fork_road+4.3,TM.fork_road+4.8));
const ok=u>=TM.checkmark,dm=p(u,TM.checkmark,TM.checkmark+.5);
$('sgr0').setAttribute('stroke-opacity',(1-.65*dm).toFixed(2));$('sgr0').setAttribute('stroke-dasharray',ok?'12 10':'none');
$('sgr1').setAttribute('fill',ok?'var(--gain)':'var(--stage)');$('sgt1').style.fill=ok?'var(--on-gain)':'';
rise($('ck'),p(u,TM.checkmark+.2,TM.checkmark+.6));

rise($('qa'),p(u,TM.pen_paper,TM.pen_paper+.5));rise($('qs'),p(u,TM.pen_paper+.4,TM.pen_paper+.9));rise($('pp'),p(u,TM.pen_paper+.2,TM.pen_paper+.7));
let px=1230,py=380;[0,1,2].forEach(i=>{const a=TM.pen_paper+1+i*1.6,g=p(u,a,a+1.4),x=1230+180*g;$('pb'+i).setAttribute('x2',x.toFixed(1));if(u>=a){px=x;py=380+i*70}});
$('pen').setAttribute('transform','translate('+px.toFixed(1)+' '+(py-6).toFixed(1)+') rotate(20)');
rise($('qb'),p(u,TM.pen_paper+6.6,TM.pen_paper+7.1));rise($('qc'),p(u,TM.pen_paper+7,TM.pen_paper+7.5));rise($('qf'),p(u,TM.pen_paper+7.6,TM.pen_paper+8.1));