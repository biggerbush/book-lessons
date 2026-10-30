const A=TM.angry_face, calmK=p(u,A+3.8,A+4.6);
rise($('face'),p(u,A,A+.5));
$('shout').setAttribute('opacity',((1-calmK)*(.5+.5*Math.abs(Math.sin(t*5)))*p(u,A+.3,A+.8)).toFixed(2));
$('shout').setAttribute('transform','translate('+(4*Math.sin(t*23)*(1-calmK)).toFixed(1)+' 0)');
$('mouth0').setAttribute('d','M1290 405q40 '+(-28*(1-calmK)+12*calmK).toFixed(1)+' 80 0');
rise($('lis'),calmK);

const S=TM.smoke_alarm, B=TM.burnt_toast;
rise($('alarm'),p(u,S,S+.5));
const rg=u>=S+.4&&u<B+4.5;
$('arcs').setAttribute('opacity',rg?(.3+.7*Math.abs(Math.sin(t*6))).toFixed(2):.15);
$('led').setAttribute('fill',rg&&Math.sin(t*12)>0?'var(--loss)':'var(--muted)');
rise($('attn'),p(u,S+5.4,S+5.9));
rise($('toast'),p(u,B,B+.5));
$('smk').setAttribute('transform','translate(0 '+(-6*Math.abs(Math.sin(t*2))).toFixed(1)+')');
rise($('cd0'),p(u,B+4.5,B+5)); rise($('cd1'),p(u,B+5.2,B+5.7));
$('stk1').setAttribute('x2',(1030+372*p(u,B+5.8,B+6.4)).toFixed(0));

const Br=TM.brain, AC=TM.alarm_center, FB=TM.front_brain;
rise($('brn'),p(u,Br,Br+.6));
rise($('limb'),p(u,Br+2,Br+2.5)); rise($('lbl0'),p(u,Br+2.3,Br+2.8));
rise($('lbl1'),p(u,AC,AC+.5)); rise($('bolts'),p(u,AC,AC+.4));
const fr=(t*1.2)%1;
$('ring').setAttribute('r',(55+45*fr).toFixed(1)); $('ring').setAttribute('opacity',(u>=AC?1-fr:0).toFixed(2));
rise($('pfc'),p(u,FB,FB+.5)); rise($('lbl2'),p(u,FB+.3,FB+.8)); rise($('lbl3'),p(u,FB+3.8,FB+4.3));
$('pfcE').setAttribute('opacity',(u>=FB+3.8?.7+.3*Math.sin(t*3):1).toFixed(2));

const TC=TM.thought_cloud, OB=TM.observer;
rise($('thk'),p(u,TC,TC+.5));
rise($('obs'),p(u,OB,OB+.5)); $('sight').setAttribute('opacity',p(u,OB+.5,OB+1.2));
rise($('flow'),p(u,OB+6.2,OB+6.8));
$('fdot').setAttribute('cx',(700+190*((t*.6)%1)).toFixed(1));

const E=TM.email_icon, H=TM.hot_reply;
rise($('em'),p(u,E,E+.5));
$('badge').setAttribute('r',(24+4*Math.abs(Math.sin(t*4))).toFixed(1));
rise($('hot'),p(u,H,H+.3));
$('hotR').setAttribute('transform','translate('+(-240*(1-p(u,H,H+.8))).toFixed(1)+' 0)');
rise($('dec'),p(u,H+4.2,H+4.7)); rise($('nogap'),p(u,H+4.6,H+5.1)); rise($('wk'),p(u,H+7.2,H+7.7));

const P=TM.pause_button, N=TM.name_tag, C=TM.calm_reply;
rise($('pz'),p(u,P,P+.5));
const sc=1+.03*Math.sin(t*2);
$('pzb').setAttribute('transform','translate(300 470) scale('+sc.toFixed(3)+') translate(-300 -470)');
$('ar1').setAttribute('opacity',p(u,N-.3,N+.2)); rise($('tag'),p(u,N,N+.5));
rise($('w0'),p(u,N+1.4,N+1.9)); rise($('w1'),p(u,N+2.4,N+2.9));
$('ar2').setAttribute('opacity',p(u,C-.3,C+.2)); rise($('calm'),p(u,C,C+.5));

const NB=TM.notebook, MD=TM.meditator, G=TM.gap_widens;
rise($('nb'),p(u,NB,NB+.5));
NL.forEach((l,i)=>l.setAttribute('x2',(200+NW[i]*p(u,NB+.6+i*.5,NB+1+i*.5)).toFixed(1)));
rise($('med'),p(u,MD,MD+.5)); rise($('th'),p(u,MD+.3,MD+.8));
TH.forEach((g,i)=>{const c=(t*.12+i/3)%1;g.setAttribute('transform','translate('+(1420-520*c).toFixed(1)+' '+(330+i*80)+')');g.setAttribute('opacity',Math.sin(Math.PI*c).toFixed(2))});
rise($('gap'),p(u,G,G+.5));
const gx=340+1000*p(u,G+.4,G+4);
$('resp').setAttribute('cx',gx.toFixed(1)); $('respL').setAttribute('x',gx.toFixed(1)); $('gapT').setAttribute('x',((200+gx)/2).toFixed(1));
$('gapB').setAttribute('d','M222 718v24M222 730H'+(gx-22).toFixed(1)+'M'+(gx-22).toFixed(1)+' 718v24');

const SD=TM.sad_cloud, SW=TM.steering_whl;
$('cl7').setAttribute('opacity',p(u,SD,SD+.5));
const ck=p(u,SW+.4,SW+1.8), bob=6*Math.sin(t*2);
$('cl7').setAttribute('transform','translate('+(380+610*ck).toFixed(1)+' '+(400+70*ck+bob*(1-ck)).toFixed(1)+') scale('+(1.3-.8*ck).toFixed(3)+')');
rise($('nopr'),p(u,SD+.8,SD+1.3)); rise($('tg0'),p(u,SD+3.4,SD+3.9)); rise($('tg1'),p(u,SD+4,SD+4.5));
rise($('car'),p(u,SW,SW+.5));
$('carB').setAttribute('transform','translate(0 '+(u>=SW+1.8?3*Math.sin(t*6):0).toFixed(1)+')');
rise($('drv'),p(u,SW+1.8,SW+2.3));

const SN=TM.sticky_note;
rise($('stk'),p(u,SN,SN+.5));
$('uln').setAttribute('x2',(1190+200*p(u,SN+.6,SN+1.4)).toFixed(1));
rise($('qa'),p(u,SN+.3,SN+.8)); rise($('qb'),p(u,SN+4.6,SN+5.1)); rise($('qc'),p(u,SN+5,SN+5.5)); rise($('lbl8'),p(u,SN+5.6,SN+6.1));