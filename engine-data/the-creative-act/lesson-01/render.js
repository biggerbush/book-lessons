const R=(id,a,d)=>rise($(id),p(u,a,a+(d||.5)));
R('hp',TM.hook_person);
const h2=TM.hook_person+3.8; rise($('orb'),p(u,h2,h2+.6));
ORB.forEach((g,i)=>{const a=t*.5+i*2.094;g.setAttribute('transform','translate('+(1320+150*Math.cos(a)).toFixed(1)+' '+(420+150*Math.sin(a)).toFixed(1)+') rotate('+((t*30+i*40)%360).toFixed(1)+')')});

R('spot',TM.spotlight);
PF.forEach((g,i)=>rise(g,p(u,TM.painter+i*.4,TM.painter+i*.4+.5)));
R('crw',TM.crowd);

R('rb',TM.rubin);
KN.forEach((k,i)=>k.setAttribute('y',(583+12*Math.sin(t*1.5+i*1.3)).toFixed(1)));
R('qc',TM.quote_card,.6);
HU.forEach((g,i)=>rise(g,p(u,TM.human_icon+i*.12,TM.human_icon+i*.12+.4)));
R('hul',TM.human_icon+1);

R('pn',SC[3][0]/K+1,.6);
R('e0',TM.chat_bubbles-.3); R('b0',TM.chat_bubbles+.2); R('b1',TM.chat_bubbles+1);
R('e1',TM.sofa-.3); $('sofaI').setAttribute('transform','translate('+(80*p(u,TM.sofa+.6,TM.sofa+2)).toFixed(1)+' 0)');
R('e2',TM.new_route-.3); $('rt').setAttribute('stroke-dashoffset',(100*(1-p(u,TM.new_route+.6,TM.new_route+2.4))).toFixed(1));
R('nw',TM.new_route+3);

R('wld',TM.eye-.8); R('eyeG',TM.eye); R('a0',TM.eye+.4);
$('iris').setAttribute('cx',(580+8*Math.sin(t*1.2)).toFixed(1));
R('a1',TM.brain); R('hdG',TM.brain); R('a2',TM.brain+.6); R('vb',TM.brain+.6);
PC.forEach(([g,cx,cy],i)=>{const k=p(u,TM.brain+1.2+i*.5,TM.brain+2.2+i*.5);g.setAttribute('transform','translate('+((880-cx)*(1-k)).toFixed(1)+' '+((380-cy)*(1-k)).toFixed(1)+')');g.setAttribute('opacity',cl(k*4))});
R('two',TM.two_heads); R('twoc',TM.two_heads+1.5);

R('p5',SC[5][0]/K+.3); R('inp',TM.input_arrow);
CP.forEach((c,i)=>{const a=TM.choice_paths+i*.6;c.setAttribute('stroke-dashoffset',(100*(1-p(u,a,a+.8))).toFixed(1));EP[i].setAttribute('opacity',p(u,a+.7,a+1))});
R('chl',TM.choice_paths+2);
R('day',TM.choice_paths+5.4);
DM.forEach((d,i)=>d.setAttribute('opacity',p(u,TM.choice_paths+5.6+i*.15,TM.choice_paths+5.9+i*.15)));
R('cc',TM.choice_paths+6.6);

R('gf',TM.gallery_frame);
[75,145,280].forEach((L,i)=>{const a=TM.gallery_frame+2+i*.7;$('k'+i).setAttribute('x2',(136+(L+8)*p(u,a,a+.5)).toFixed(1))});
R('bal',TM.gallery_frame+3);
R('note',TM.note_card); R('nl',TM.note_card);
$('beamR').setAttribute('transform','rotate('+(8*(1-p(u,TM.note_card+.4,TM.note_card+1.8))).toFixed(2)+' 1000 360)');
R('val',TM.note_card+5.4);

R('bd',TM.artist_badge);
$('bs').setAttribute('x2',(146+144*p(u,TM.artist_badge+2,TM.artist_badge+2.6)).toFixed(1));
R('wob',TM.artist_badge+2.6); R('trk',TM.artist_badge+3); R('wk',TM.artist_badge+3); R('door',TM.artist_badge+3.5);
const wx=200+480*p(u,TM.artist_badge+3.5,TM.open_door)+450*p(u,TM.open_door+5,TM.open_door+8);
$('wkI').setAttribute('transform','translate('+wx.toFixed(1)+' '+(590-4*Math.abs(Math.sin(t*4))).toFixed(1)+')');
const dk=p(u,TM.open_door+.3,TM.open_door+1.8);
$('dp').setAttribute('width',(212*(1-.8*dk)).toFixed(1));
$('lk').setAttribute('opacity',1-p(u,TM.open_door,TM.open_door+.5));
R('zero',TM.open_door+5);

R('ck',TM.checklist);
CK.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.checklist+1.2+i*.9,TM.checklist+1.6+i*.9)));
R('qa',TM.checklist+5.8); R('qb',TM.checklist+6.4);