TC.forEach(([g,x,y,a],i)=>{const k=p(u,TM.juggler+i*.3,TM.juggler+i*.3+.5);g.setAttribute('transform','translate('+x+' '+(y-220*(1-k)).toFixed(1)+') rotate('+a+')');g.setAttribute('opacity',k)});
rise($('tq'),p(u,TM.juggler+5.2,TM.juggler+5.7));

rise($('inst'),p(u,TM.instructor,TM.instructor+.5)); rise($('drop'),p(u,TM.instructor+.8,TM.instructor+1.4));
rise($('gun0'),p(u,TM.gunfire,TM.gunfire+.4)); BU.forEach((b,i)=>b.setAttribute('opacity',(.4+.6*Math.abs(Math.sin(t*5+i*2))).toFixed(2)));
rise($('gun1'),p(u,TM.gunfire+1.8,TM.gunfire+2.3)); rise($('gun2'),p(u,TM.gunfire+3.6,TM.gunfire+4.1));
$('rarc').setAttribute('opacity',(.3+.7*Math.abs(Math.sin(t*4))).toFixed(2));
const fz=p(u,TM.frozen_leader,TM.frozen_leader+.6); LD.setAttribute('fill',fz>0?'var(--loss)':'var(--ink)'); $('crew').setAttribute('opacity',(1-.65*fz).toFixed(2));
rise($('fz'),fz); rise($('fzt'),p(u,TM.frozen_leader+1,TM.frozen_leader+1.6));

[0,1.2,2.4].forEach((d,i)=>rise($('mc'+i),p(u,TM.mantra_card+d,TM.mantra_card+d+.5)));
$('brth').setAttribute('r',(55+12*p(u,TM.deep_breath,TM.deep_breath+.8)*Math.sin(t*1.6)).toFixed(1));
$('pup').setAttribute('cx',(800+30*Math.sin(t*1.2)).toFixed(1));
rise($('trt'),p(u,TM.deep_breath,TM.deep_breath+.5));
const sk=TM.deep_breath+3.4; rise($('calm'),p(u,sk,sk+.5)); CP.forEach((g,i)=>g.setAttribute('fill',u>=sk+.8+i*.25?'var(--gain)':'var(--ink)'));
rise($('clt'),p(u,sk+1,sk+1.6));

const mv=p(u,TM.high_ground,TM.high_ground+1.5); $('st').setAttribute('transform','translate('+(620-280*mv).toFixed(1)+' '+(659-120*mv).toFixed(1)+')');
$('cone').setAttribute('opacity',p(u,TM.high_ground+1.3,TM.high_ground+2));
const lk=p(u,TM.problem_map,TM.problem_map+1.2);
IT.forEach(([g,r,c],i)=>{const s=SI[i],x=820+s[0]*(1-lk),y=s[1]+(330+i*90-s[1])*lk;g.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+(s[2]*(1-lk)).toFixed(1)+')');r.setAttribute('fill',lk>.6?'var(--ink)':'var(--loss)');c.setAttribute('fill',lk>.6?'var(--gain)':'var(--loss)')});
$('pl').textContent=lk>.6?'A LIST':'A BLUR'; rise($('blt'),p(u,TM.problem_map+1,TM.problem_map+1.6));

const dk=p(u,TM.target,TM.target+.8); $('dart').setAttribute('transform','translate('+(800-380*dk).toFixed(1)+' '+(280+200*dk).toFixed(1)+')'); $('dart').setAttribute('opacity',u>=TM.target?1:0);
$('tgc').setAttribute('r',(30+(u>=TM.target+.8?6*Math.abs(Math.sin(t*3)):0)).toFixed(1));
rise($('p1'),p(u,TM.target+.8,TM.target+1.3));
rise($('hud'),p(u,TM.team_huddle,TM.team_huddle+.5)); HL.forEach((l,i)=>l.setAttribute('opacity',p(u,TM.team_huddle+.6+i*.2,TM.team_huddle+.9+i*.2)));
rise($('bub'),p(u,TM.team_huddle+1,TM.team_huddle+1.5)); rise($('pw'),p(u,TM.team_huddle+1.6,TM.team_huddle+2.2));

rise($('wb'),p(u,TM.whiteboard,TM.whiteboard+.5)); $('plan').setAttribute('stroke-dashoffset',(440*(1-p(u,TM.whiteboard+.5,TM.whiteboard+2))).toFixed(1));
rise($('ideas'),p(u,TM.whiteboard+.8,TM.whiteboard+1.3)); ID.forEach((c,i)=>c.setAttribute('opacity',p(u,TM.whiteboard+1.4+i*.5,TM.whiteboard+1.8+i*.5)));
rise($('push'),p(u,TM.arrow_forward,TM.arrow_forward+.5)); AR.forEach(a=>a.setAttribute('stroke-dashoffset',(-t*40).toFixed(1)));
const hd=u>=TM.arrow_forward+3.5; $('blk').style.fill=hd?'var(--gain)':'var(--loss)'; $('chk').setAttribute('opacity',hd?1:0);
const mo=TM.arrow_forward+5; rise($('mom'),p(u,mo,mo+.5)); $('mbar').setAttribute('width',(1140*p(u,mo+.3,mo+2.8)).toFixed(1));

const dn=u>=TM.next_card; CD[0][0].setAttribute('fill',dn?'var(--gain)':'var(--stage)'); CD[0][1].setAttribute('style',dn?'fill:var(--on-gain)':'');
$('frm').setAttribute('x',(110+190*p(u,TM.next_card+.3,TM.next_card+1)).toFixed(1));
rise($('tun'),p(u,TM.tunnel,TM.tunnel+.5));
$('np').setAttribute('transform','translate(0 '+(-200*p(u,TM.tunnel+1.5,TM.tunnel+3)).toFixed(1)+')'); $('np').setAttribute('opacity',p(u,TM.tunnel+1,TM.tunnel+1.6));
rise($('npl'),p(u,TM.tunnel+3,TM.tunnel+3.4)); rise($('tvt'),p(u,TM.tunnel+3.5,TM.tunnel+4.1));
rise($('lad'),p(u,TM.ladder,TM.ladder+.5)); $('sdot').setAttribute('cy',(300+380*(.5-.5*Math.cos(t*2))).toFixed(1));

rise($('cal'),p(u,TM.calendar,TM.calendar+.5)); MK.forEach((g,i)=>rise(g,p(u,TM.calendar+1.5+i*.6,TM.calendar+1.9+i*.6)));
rise($('desk'),p(u,TM.office_desk,TM.office_desk+.5)); rise($('tray'),p(u,TM.one_folder,TM.one_folder+.4));
FD.forEach(f=>{const k=f.m<0?0:p(u,TM.one_folder+f.m*1.6,TM.one_folder+f.m*1.6+1),ty=f.m<0?f.y:376-f.m*30;
  f.el.setAttribute('transform','translate('+(f.x+(1295-f.x)*k).toFixed(1)+' '+(f.y+(ty-f.y)*k).toFixed(1)+')');
  f.el.setAttribute('fill',k>.5?'var(--gain)':'var(--loss)');f.el.setAttribute('opacity',p(u,TM.office_desk+.4+f.i*.12,TM.office_desk+.8+f.i*.12))});
rise($('pk'),p(u,TM.one_folder+.4,TM.one_folder+1));

rise($('q0'),p(u,TM.sticky_note,TM.sticky_note+.5)); rise($('sn'),p(u,TM.sticky_note+.3,TM.sticky_note+.8));
rise($('qa'),p(u,TM.sticky_note+3,TM.sticky_note+3.5)); rise($('qb'),p(u,TM.sticky_note+3.4,TM.sticky_note+3.9)); rise($('qc'),p(u,TM.sticky_note+3.8,TM.sticky_note+4.3));
$('ring').setAttribute('opacity',p(u,TM.sticky_note+4.4,TM.sticky_note+4.9)); rise($('go'),p(u,TM.sticky_note+5,TM.sticky_note+5.5));