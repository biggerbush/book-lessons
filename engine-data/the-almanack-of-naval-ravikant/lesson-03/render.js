const m0=TM.sleeping+3.8;
$('gear').setAttribute('transform','rotate('+(t*40+720*p(u,m0,m0+2.5)).toFixed(1)+' 1320 410)');
zz($('zz0'),u>=TM.sleeping,t); rise($('stw'),p(u,m0,m0+.6));

const lv=p(u,TM.lever,TM.lever+1); $('beam').setAttribute('transform','rotate('+(-10*lv).toFixed(2)+' 640 606)');
rise($('eff'),p(u,TM.lever,TM.lever+.5)); rise($('res'),p(u,TM.lever+.8,TM.lever+1.3));
rise($('qcard'),p(u,TM.quote_card,TM.quote_card+.5)); rise($('th'),p(u,TM.two_hands,TM.two_hands+.5));
BR.forEach(([r,h],i)=>{const k=p(u,TM.two_hands+.3+i*.2,TM.two_hands+.8+i*.2);r.setAttribute('height',(h*k).toFixed(1));r.setAttribute('y',(BASE1-h*k).toFixed(1))});

const ms=p(u,TM.messy_team,TM.messy_team+.6);
WK.forEach((g,i)=>{const a=TM.crowd+i*.15;g.setAttribute('opacity',p(u,a,a+.4));g.setAttribute('transform','translate('+(ms*8*Math.sin(t*5+i)).toFixed(1)+' '+(ms*6*Math.cos(t*4+i*2)).toFixed(1)+')')});
rise($('mgr'),p(u,TM.manager,TM.manager+.5)); $('lk2').setAttribute('opacity',p(u,TM.manager+.4,TM.manager+1));
$('tangle').setAttribute('opacity',ms); rise($('mess'),p(u,TM.messy_team+.6,TM.messy_team+1.2));

rise($('bag'),p(u,TM.money_bag,TM.money_bag+.5));
CN.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.money_bag+.5+i*.12,TM.money_bag+.7+i*.12)));
rise($('bnk'),p(u,TM.banker,TM.banker+.5)); rise($('bub'),p(u,TM.banker+.6,TM.banker+1.1)); rise($('perm'),p(u,TM.banker+5,TM.banker+5.6));

rise($('lap'),p(u,TM.laptop,TM.laptop+.5));
CP.forEach(([g,dx,dy],i)=>{const a=TM.copy_machine+i*.25,k=p(u,a,a+.6);g.setAttribute('transform','translate('+(dx*(1-k)).toFixed(1)+' '+(dy*(1-k)).toFixed(1)+')');g.setAttribute('opacity',k)});
rise($('cpl'),p(u,TM.copy_machine+3,TM.copy_machine+3.5));
rise($('door'),p(u,TM.open_door-.2,TM.open_door+.3));
const dk=p(u,TM.open_door+.4,TM.open_door+1.4),dw=232-172*dk,ddy=20*dk,dxr=1124+dw;
$('pnl').setAttribute('points','1124,274 '+dxr.toFixed(1)+','+(274-ddy).toFixed(1)+' '+dxr.toFixed(1)+','+(646+ddy).toFixed(1)+' 1124,646');
$('hdl').setAttribute('cx',(dxr-22*(1-.5*dk)).toFixed(1));
rise($('pl'),p(u,TM.open_door+3.8,TM.open_door+4.4));

RB.forEach((g,i)=>{const a=TM.robot_army+i*.1;g.setAttribute('opacity',p(u,a,a+.3));g.setAttribute('transform','translate(0 '+(4*Math.sin(t*4+i*.7)).toFixed(1)+')')});
rise($('night'),p(u,TM.night_moon,TM.night_moon+.5)); zz($('zz5'),u>=TM.night_moon,t);
US.forEach(([l,c],i)=>{const a=TM.users_map+i*.06,k=p(u,a,a+.3);l.setAttribute('opacity',k);c.setAttribute('opacity',k)});
rise($('tile'),p(u,TM.users_map-.2,TM.users_map+.3)); rise($('nohire'),p(u,TM.users_map+1.5,TM.users_map+2.1));

[0,1,2].forEach(i=>{const a=TM.microphone+i*.6;rise($('ic'+i),p(u,a,a+.4))});
rise($('cmp'),p(u,TM.podcast_ear,TM.podcast_ear+.5));
AU.forEach((c,i)=>{const a=TM.podcast_ear+.8+i*.05;c.setAttribute('opacity',p(u,a,a+.2))});
rise($('ph'),p(u,TM.phone_tweet,TM.phone_tweet+.5));
TW.forEach((g,i)=>{const a=TM.phone_tweet+.5+i*.5;rise(g,p(u,a,a+.4))});
rise($('gl'),p(u,TM.world_globe,TM.world_globe+.5)); $('arc6').setAttribute('opacity',p(u,TM.world_globe,TM.world_globe+.6));
GD.forEach((c,i)=>{const a=TM.world_globe+.5+i*.08;c.setAttribute('opacity',p(u,a,a+.2))});
rise($('bk'),p(u,TM.world_globe+2,TM.world_globe+2.6));

rise($('nb'),p(u,TM.notebook,TM.notebook+.5));
C7.forEach((g,i)=>{const a=TM.first_post+i*1.5;rise(g,p(u,a,a+.5))});
rise($('fk'),p(u,TM.skill_fork,TM.skill_fork+.5)); rise($('sb'),p(u,TM.snowball,TM.snowball+.5));
$('loop7').setAttribute('transform','rotate('+(u>=TM.snowball?(t*90)%360:0).toFixed(1)+' 145 808)');

rise($('qa'),p(u,TM.question,TM.question+.5)); rise($('qb'),p(u,TM.question+.4,TM.question+.9));
DC.forEach((d,i)=>{const a=TM.question+1.2+i*.2;d.setAttribute('opacity',p(u,a,a+.3))});
rise($('qc'),p(u,TM.question+4.6,TM.question+5.1)); rise($('ql'),p(u,TM.question+5,TM.question+5.5));