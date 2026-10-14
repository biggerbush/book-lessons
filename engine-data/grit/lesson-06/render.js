const R=(id,a,d=.5)=>rise($(id),p(u,a,a+d)), fl=.4+.6*Math.abs(Math.sin(t*9));

R('rnrW',TM.fallen_runner);
const gk=p(u,TM.fallen_runner+2.2,TM.fallen_runner+4);
$('rnr').setAttribute('transform','translate(1200 '+(560-50*(1-gk)).toFixed(1)+') rotate('+(-90*(1-gk)).toFixed(1)+')');
R('hopeA',TM.fallen_runner+3.5);

R('wishP',TM.wishing_star); $('star').setAttribute('opacity',(.55+.45*Math.sin(t*3)).toFixed(2));
R('expP',TM.climber-2.2);
const ck=p(u,TM.climber,TM.climber+3), cx=900+270*ck;
CLM.setAttribute('transform','translate('+cx.toFixed(1)+' '+(600-(cx-880)*.875).toFixed(1)+')');
R('gritH',TM.climber+5,.6);

R('pens',TM.lab_door); R('dogs',TM.dog_pair); R('panel',TM.nose_panel);
const on=u>=TM.dog_pair;
$('bA').setAttribute('opacity',on&&u<TM.nose_panel+1.4?fl:0); $('bB').setAttribute('opacity',on?fl:0);
DA[0].setAttribute('transform','translate('+(380+178*(p(u,TM.nose_panel+.6,TM.nose_panel+1.4)-p(u,TM.nose_panel+2.2,TM.nose_panel+3))).toFixed(1)+' 560)');
R('lA',TM.nose_panel+1.4); R('lB',TM.nose_panel+5.4); R('ctl',TM.nose_panel+7,.6);

R('boxes',TM.shuttle_box); R('jA',TM.shuttle_box); R('jB',TM.shuttle_box);
const jk=p(u,TM.jumping_dog+.4,TM.jumping_dog+1.8);
JA[0].setAttribute('transform','translate('+(400+750*jk).toFixed(1)+' '+(458-110*Math.sin(Math.PI*jk)).toFixed(1)+') scale(.8)');
const lk=p(u,TM.lying_dog+.4,TM.lying_dog+1.2);
JB[0].setAttribute('transform','translate(400 '+(758+32*lk).toFixed(1)+') scale(.8)'); JB[1].setAttribute('opacity',1-lk);
const sh=u>=TM.shuttle_box+1;
$('bj1').setAttribute('opacity',sh&&jk<.05?fl:0); $('bj2').setAttribute('opacity',sh?fl:0);
ZZ.forEach((z,i)=>z.setAttribute('opacity',lk>=1&&(Math.floor(t*2)%4)>i?.6:0));

R('ar',TM.broken_link);
const bk=p(u,TM.broken_link+5,TM.broken_link+5.6);
$('lkL').setAttribute('transform','translate('+(-40*bk).toFixed(1)+' '+(10*bk).toFixed(1)+') rotate('+(-6*bk).toFixed(2)+' 740 320)');
$('lkR').setAttribute('transform','translate('+(40*bk).toFixed(1)+' '+(10*bk).toFixed(1)+') rotate('+(6*bk).toFixed(2)+' 860 320)');
LKS.forEach(e=>e.setAttribute('stroke',bk>0?'var(--loss)':'var(--ink)'));
R('nod',TM.broken_link+5.4,.6); R('lh',TM.sad_cloud);
RN.forEach(([x,e],i)=>{const o=(t*40+i*7)%20;e.setAttribute('d','M'+x+' '+(622+o).toFixed(1)+'v12')});

R('hd',TM.two_heads); R('wall',TM.stone_wall); R('door',TM.open_door);
const dk=p(u,TM.open_door+.3,TM.open_door+1.3), dx=(1360-110*dk).toFixed(1);
$('dp').setAttribute('points','1180,300 '+dx+','+(300+30*dk).toFixed(1)+' '+dx+','+(560-20*dk).toFixed(1)+' 1180,560');
R('gr',TM.open_door+5,.6);

R('ex',TM.failed_exam); R('sL',TM.storm_cloud); R('sR',TM.study_plan); R('tryA',TM.study_plan+5.3,.6);

R('br',TM.growing_brain);
$('stem').setAttribute('d','M300 460V'+(460-160*p(u,TM.growing_brain+.6,TM.growing_brain+3)).toFixed(1));
$('lvs').setAttribute('opacity',p(u,TM.growing_brain+2,TM.growing_brain+3));
R('st',TM.staircase);
const a0=p(u,TM.staircase+1,TM.staircase+1.8), a1=p(u,TM.staircase+2,TM.staircase+2.8), sk=a0+a1;
C7.setAttribute('transform','translate('+(710+300*sk).toFixed(1)+' '+(700-110*sk-30*(Math.sin(Math.PI*a0)+Math.sin(Math.PI*a1))).toFixed(1)+')');
R('prv',TM.staircase+5,.6);

R('qa',TM.notebook); R('qb',TM.notebook+.4); R('qc',TM.notebook+.8); R('nb',TM.notebook+1.2);
$('nbX').setAttribute('x2',(1186+170*p(u,TM.notebook+2,TM.notebook+2.6)).toFixed(1));
R('nbG',TM.notebook+2.8); R('ml',TM.notebook+4.9,.6);