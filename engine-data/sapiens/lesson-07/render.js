const gm=p(u,TM.globe+.3,TM.globe+1.8);
TD.forEach((d,i)=>{const a=TM.small_worlds+i*.15,j=(1-gm)*4;d.e.setAttribute('opacity',p(u,a,a+.4));d.e.setAttribute('cx',(d.x0+(d.x1-d.x0)*gm+j*Math.sin(t*2+i)).toFixed(1));d.e.setAttribute('cy',(d.y0+(d.y1-d.y0)*gm+j*Math.cos(t*1.7+i)).toFixed(1));d.e.setAttribute('fill',gm>.95?V('gain'):CC[i%3])});
$('t_glob').setAttribute('opacity',p(u,TM.globe,TM.globe+.8));

LG.forEach((g,i)=>{const a=TM.tribes+i*1.3;rise(g,p(u,a,a+.5))});
rise($('m_arrow'),p(u,TM.arrow,TM.arrow+.5));rise($('m_money'),p(u,TM.two_forces,TM.two_forces+.5));
rise($('m_f0'),p(u,TM.two_forces+1.5,TM.two_forces+2));rise($('m_f1'),p(u,TM.two_forces+2.5,TM.two_forces+3));

rise($('e_crown'),p(u,TM.crown,TM.crown+.5));rise($('e_ppl'),p(u,TM.crown+.4,TM.crown+.9));rise($('e_bg'),p(u,TM.crown+.4,TM.crown+.9));
const eb=p(u,TM.map_border+.5,TM.map_border+2),ew=440+260*eb,eh=280+100*eb,bd=$('e_bord');
bd.setAttribute('x',560-ew/2);bd.setAttribute('y',500-eh/2);bd.setAttribute('width',ew);bd.setAttribute('height',eh);
EN.forEach((g,i)=>{rise(g,p(u,TM.map_border,TM.map_border+.5));g.setAttribute('fill',eb>.9?V(['loss','ink','gain'][i]):V('muted'))});
rise($('e_lab'),p(u,TM.map_border+1.5,TM.map_border+2));rise($('e_time'),p(u,TM.timeline,TM.timeline+.5));
EB.forEach((b,i)=>{const a=TM.timeline+.4+i*.3;b.setAttribute('opacity',p(u,a,a+.3))});rise($('e_stab'),p(u,TM.timeline+1,TM.timeline+1.6));

rise($('n_town'),p(u,TM.spain_town,TM.spain_town+.5));rise($('n_ring'),p(u,TM.roman_camp,TM.roman_camp+.6));rise($('n_food'),p(u,TM.roman_camp,TM.roman_camp+.5));
const nf=1-p(u,TM.roman_camp+.8,TM.roman_camp+3.2);$('n_fill').setAttribute('height',(344*nf).toFixed(1));$('n_fill').setAttribute('y',(328+344*(1-nf)).toFixed(1));
const nd=p(u,TM.roman_camp+3.3,TM.roman_camp+4.3);$('n_house').setAttribute('opacity',(1-.65*nd).toFixed(2));rise($('n_end'),nd);

rise($('k0'),p(u,TM.latin_book,TM.latin_book+.5));rise($('k0s'),p(u,TM.latin_book+1.2,TM.latin_book+1.7));
rise($('k1'),p(u,TM.historian,TM.historian+.5));rise($('k2'),p(u,TM.stage_play,TM.stage_play+.5));

rise($('c_ring'),p(u,TM.cycle,TM.cycle+.5));const ca=(-90+(t*40)%360)*Math.PI/180;
$('c_dot').setAttribute('cx',(800+213*Math.cos(ca)).toFixed(1));$('c_dot').setAttribute('cy',(513+213*Math.sin(ca)).toFixed(1));
rise($('c_a'),p(u,TM.soldier,TM.soldier+.5));rise($('c_b'),p(u,TM.shared_culture,TM.shared_culture+.5));
FB.forEach((g,i)=>g.setAttribute('fill',u>=TM.shared_culture+.8+i*.6?V('gain'):V('loss')));
rise($('c_c'),p(u,TM.equal_claim,TM.equal_claim+.5));rise($('c_end'),p(u,TM.equal_claim+1.2,TM.equal_claim+1.8));

rise($('r_loc'),p(u,TM.local_gods,TM.local_gods+.5));rise($('r_glb'),p(u,TM.missionary,TM.missionary+.5));rise($('r_star'),p(u,TM.missionary+.5,TM.missionary+1));
$('r_rays').setAttribute('opacity',p(u,TM.missionary+1,TM.missionary+2));rise($('r_faith'),p(u,TM.missionary+1.5,TM.missionary+2));
const rp=p(u,TM.pilgrims,TM.pilgrims+.5);
RM.forEach((m,i)=>{const r=40+150*((t*.4+i*.1)%1);m.setAttribute('cx',(1080+r*RA[i][0]).toFixed(1));m.setAttribute('cy',(GY+r*RA[i][1]).toFixed(1));m.setAttribute('opacity',rp)});
RP.forEach((c,i)=>c.setAttribute('fill',u>=TM.pilgrims+1+i*.2?V('gain'):V('muted')));rise($('r_ways'),p(u,TM.pilgrims+.5,TM.pilgrims+1));

rise($('x_scale'),p(u,TM.scales,TM.scales+.5));$('x_beam').setAttribute('transform','rotate('+(6*Math.sin(t*1.3)).toFixed(2)+' 400 300)');
let r0='',r1='';for(let x=760;x<=1460;x+=10){const s=44*Math.sin(x/50+t*1.5);r0+=(x==760?'M':'L')+x+' '+(440+s).toFixed(1);r1+=(x==760?'M':'L')+x+' '+(440-s).toFixed(1)}
$('x_r0').setAttribute('d',r0);$('x_r1').setAttribute('d',r1);rise($('x_rope'),p(u,TM.tangled_rope,TM.tangled_rope+.6));
XW.forEach((g,i)=>{const a=TM.your_words+i*.5;rise(g,p(u,a,a+.4))});rise($('x_end'),p(u,TM.your_words+1.8,TM.your_words+2.4));

rise($('z_a'),p(u,TM.your_value,TM.your_value+.5));rise($('z_you'),p(u,TM.your_value+.4,TM.your_value+.9));rise($('z_v'),p(u,TM.your_value+.8,TM.your_value+1.3));
rise($('z_b'),p(u,TM.question_mark,TM.question_mark+.5));rise($('z_c'),p(u,TM.question_mark+.4,TM.question_mark+.9));
ZT.forEach((c,i)=>{const a=TM.question_mark+.8+i*.12;c.setAttribute('opacity',p(u,a,a+.3))});rise($('z_q'),p(u,TM.question_mark+2.4,TM.question_mark+2.9));