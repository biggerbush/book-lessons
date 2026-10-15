const T0=TM.title_storm, tN=T0+6.6, nk=p(u,tN,tN+.8);
rise($('tthem'),p(u,T0,T0+.5)); rise($('tcl'),p(u,T0+.4,T0+.9));
$('tbolt').setAttribute('opacity',u>T0+.9&&u<tN&&Math.sin(t*7)>.3?1:0);
rise($('tyou'),p(u,T0+1.2,T0+1.7)); $('tyin').setAttribute('transform','translate('+(40*nk).toFixed(1)+' 0)');
const tg=$('ttug'); tg.setAttribute('opacity',(p(u,T0+2,T0+2.6)*(1-nk)).toFixed(2)); tg.style.strokeDashoffset=(-t*30).toFixed(1);
rise($('tq'),nk);

const S=TM.sad_friend, Y=TM.you_worried, R=TM.rope_pull;
rise($('fr'),p(u,S,S+.5)); rise($('frd'),p(u,S+1,S+1.5));
rise($('yo'),p(u,Y,Y+.5)); $('knot').setAttribute('opacity',p(u,Y+.5,Y+1));
W1.forEach((g,i)=>rise(g,p(u,Y+1+i*.7,Y+1.5+i*.7)));
rise($('rp'),p(u,R,R+.5));
const rk=p(u,R+.3,R+1), lean=rk*(14+8*Math.sin(t*2.4));
$('yi').setAttribute('transform','translate('+lean.toFixed(1)+' 0)');
$('rope').setAttribute('d','M480 560Q780 '+(600-30*rk).toFixed(1)+' '+(1080+lean).toFixed(1)+' 560');
$('ndl').setAttribute('transform','rotate('+(-70+rk*(45+25*Math.sin(t*2.4))).toFixed(1)+' 780 420)');
rise($('ctl'),p(u,R+4.1,R+4.7));

const D=TM.toddler, E=TM.eye_roll, P=TM.pressure_dial;
rise($('tod'),p(u,D,D+.5)); $('zz').setAttribute('transform','translate('+(3*Math.sin(t*20)).toFixed(1)+' 0)');
rise($('ad'),p(u,D+1.5,D+2));
[0,1,2].forEach(i=>rise($('k'+i),p(u,E+i*.9,E+i*.9+.4)));
rise($('dl'),p(u,P,P+.5)); const pk=p(u,P+.4,P+3);
$('pnd').setAttribute('transform','rotate('+(-90+175*pk).toFixed(1)+' 1290 520)'); $('parc').style.strokeDashoffset=(440*(1-pk)).toFixed(1);
rise($('gin'),p(u,P+2.8,P+3.3)); rise($('gv'),p(u,P+1.2,P+1.8));

const L=TM.let_them_sign, B=TM.two_bubbles, k0=p(u,L-1.2,L-.7);
rise($('th'),k0); rise($('me3'),k0); rise($('sgn'),p(u,L,L+.5));
W3.forEach((x,i)=>rise(x,p(u,L+1.8+i*.6,L+2.2+i*.6)));
rise($('bub'),p(u,B,B+.6));
const ps=p(u,B+5,B+6.5); $('tcdo').setAttribute('transform','translate(0 '+(-40*ps).toFixed(1)+')'); $('tcd').setAttribute('opacity',(k0*(1-ps)).toFixed(2));
rise($('psn'),p(u,B+5,B+5.6));

const C=TM.calendar, H=TM.phone_call, G=TM.guilt_cloud, V=TM.steady_you, vk=p(u,V,V+.8);
rise($('cal'),p(u,C,C+.5)); hday.setAttribute('r',(16+3*Math.sin(t*4)).toFixed(1));
rise($('y4a'),p(u,C+1,C+1.5)); $('y4b').setAttribute('opacity',vk);
rise($('phn'),p(u,H,H+.5)); PW.forEach((w,i)=>w.setAttribute('opacity',(u>H?(((t*1.4-i*.3)%1+1)%1)*(1-.8*vk):0).toFixed(2)));
$('gcl').setAttribute('opacity',(p(u,G,G+.5)*(1-vk)).toFixed(2)); $('gcl').setAttribute('transform','translate('+(4*Math.sin(t*6)*(1-vk)).toFixed(1)+' 0)');
$('rg').setAttribute('opacity',vk); $('rg').setAttribute('r',(150+4*Math.sin(t*2)).toFixed(1));
rise($('kpt'),p(u,V+.6,V+1.1)); rise($('nwr'),p(u,V+5,V+5.6));

const M=TM.mirror, Hr=TM.heart_racing, Br=TM.deep_breath;
rise($('mir'),p(u,M,M+.5)); $('mar').setAttribute('opacity',p(u,M+.6,M+1.1));
rise($('hrt'),p(u,Hr,Hr+.5)); const fq=u>=Br?2.5:8;
$('hrtb').setAttribute('transform','translate(800 450) scale('+(1+.08*Math.pow(Math.abs(Math.sin(t*fq)),6)).toFixed(3)+')');
rise($('hl1'),p(u,Hr+2,Hr+2.5)); rise($('cnt'),p(u,Hr+5.8,Hr+6.4));
rise($('brg'),p(u,Br,Br+.5)); $('brc').setAttribute('r',(105+25*Math.sin(t*1.3)).toFixed(1));

const A=TM.two_paths, Cp=TM.calm_path, ka=p(u,A,A+2), kb=p(u,Cp,Cp+2.2);
rise($('c6y'),p(u,A-1,A-.5));
$('pA').style.strokeDashoffset=1-ka; $('pA').setAttribute('opacity',u>=Cp?.35:1);
$('pB').style.strokeDashoffset=1-kb;
[['dA','pA',ka,A],['dB','pB',kb,Cp]].forEach(([d,pp,k,a])=>{const q=at($(pp),k);$(d).setAttribute('cx',q.x.toFixed(1));$(d).setAttribute('cy',q.y.toFixed(1));$(d).setAttribute('opacity',u>=a?(d==='dA'&&u>=Cp?.35:1):0)});
rise($('la'),p(u,A+.8,A+1.3)); rise($('lb'),p(u,Cp+.8,Cp+1.3)); rise($('qt'),p(u,Cp+4.2,Cp+4.8));

const Bt=TM.battery, F=TM.full_battery, Ad=TM.two_adults, d1=p(u,Bt+.3,Bt+2.3);
rise($('b1'),p(u,Bt,Bt+.5)); $('bf1').setAttribute('width',(272*(1-.88*d1)).toFixed(1));
rise($('b2'),p(u,F,F+.5)); $('bf2').setAttribute('width',(272*p(u,F+.3,F+1.8)).toFixed(1));
rise($('kd'),p(u,F+2,F+2.5)); rise($('ads'),p(u,Ad,Ad+.5)); rise($('emg'),p(u,Ad+4.2,Ad+4.8));
const sk=p(u,Ad+4.8,Ad+5.3); $('nsl').setAttribute('x2',(1056+88*sk).toFixed(1)); $('nsl').setAttribute('y2',(682+82*sk).toFixed(1));

const Q=TM.challenge; rise($('qa'),p(u,Q,Q+.5)); rise($('qb'),p(u,Q+.6,Q+1.1)); rise($('qc'),p(u,Q+5.8,Q+6.3));
rise($('st1'),p(u,Q+1,Q+1.5)); rise($('sa1'),p(u,Q+1.8,Q+2.2)); rise($('st2'),p(u,Q+2.2,Q+2.7));
rise($('sa2'),p(u,Q+5.6,Q+6)); rise($('st3'),p(u,Q+6,Q+6.5));
$('cbr').setAttribute('r',(62+16*Math.sin(t*1.3)).toFixed(1));