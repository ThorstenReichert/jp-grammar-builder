const map = {};
map.a = '&#x3042';
map.i = '&#12356;';
map.u = '&#12358;';
map.e = '&#12360;';
map.o = '&#12362;';
map.ka = '&#12363;';
map.ga = '&#12364;';
map.ki = '&#12365;';
map.gi = '&#12366;';
map.ku = '&#12367;';
map.gu = '&#12368;';
map.ke = '&#12369;';
map.ge = '&#12370;';
map.ko = '&#12371;';
map.go = '&#12372;';
map.sa = '&#12373;';
map.za = '&#12374;';
map.si = '&#12375;';
map.zi = '&#12376;';
map.su = '&#12377;';
map.zu = '&#12378;';
map.se = '&#12379;';
map.ze = '&#12380;';
map.so = '&#12381;';
map.zo = '&#12382;';
map.ta = '&#12383;';
map.da = '&#12384;';
map.ti = '&#12385;';
map.di = '&#12386;';
map.tu = '&#12388;';
map.du = '&#12389;';
map.te = '&#12390;';
map.de = '&#12391;';
map.to = '&#12392;';
map.do = '&#12393;';
map.na = '&#12394;';
map.ni = '&#12395;';
map.nu = '&#12396;';
map.ne = '&#12397;';
map.no = '&#12398;';
map.ha = '&#12399;';
map.ba = '&#12400;';
map.pa = '&#12401;';
map.hi = '&#12402;';
map.bi = '&#12403;';
map.pi = '&#12404;';
map.hu = '&#12405;';
map.bu = '&#12406;';
map.pu = '&#12407;';
map.he = '&#12408;';
map.be = '&#12409;';
map.pe = '&#12410;';
map.ho = '&#12411;';
map.bo = '&#12412;';
map.po = '&#12413;';
map.ma = '&#12414;';
map.mi = '&#12415;';
map.mu = '&#12416;';
map.me = '&#12417;';
map.mo = '&#12418;';
map.ya = '&#12420;';
map.yu = '&#12422;';
map.yo = '&#12424;';
map.ra = '&#12425;';
map.ri = '&#12426;';
map.ru = '&#12427;';
map.re = '&#12428;';
map.ro = '&#12429;';
map.wa = '&#12431;';
map.wo = '&#12434;';
map.n = '&#12435;';

map.kya = '&#12365;&#12419;';
map.kyu = '&#12365;&#12421;';
map.kyo = '&#12365;&#12423;';
map.gya = '&#12366;&#12419;';
map.gyu = '&#12366;&#12421;';
map.gyo = '&#12366;&#12423;';
map.sya = '&#12375;&#12419;';
map.syu = '&#12375;&#12421;';
map.syo = '&#12375;&#12423;';
map.zya = '&#12376;&#12419;';
map.zyu = '&#12376;&#12421;';
map.zyo = '&#12376;&#12423;';
map.tya = '&#12385;&#12419;';
map.tyu = '&#12385;&#12421;';
map.tyo = '&#12385;&#12423;';
map.nya = '&#12395;&#12419;';
map.nyu = '&#12395;&#12421;';
map.nyo = '&#12395;&#12423;';
map.hya = '&#12402;&#12419;';
map.hyu = '&#12402;&#12421;';
map.hyo = '&#12402;&#12423;';
map.bya = '&#12403;&#12419;';
map.byu = '&#12403;&#12421;';
map.byo = '&#12403;&#12423;';
map.pya = '&#12404;&#12419;';
map.pyu = '&#12404;&#12421;';
map.pyo = '&#12404;&#12423;';
map.mya = '&#12415;&#12419;';
map.myu = '&#12415;&#12421;';
map.myo = '&#12415;&#12423;';
map.rya = '&#12426;&#12419;';
map.ryu = '&#12426;&#12421;';
map.ryo = '&#12426;&#12423;';

map.k = '&#12387;';
map.s = '&#12387;';
map.t = '&#12387;';
map.p = '&#12387;';

function convert(char) {
  return map[char] || char;
}


export class HiraganaValueConverter {
  toView(value) {
    if (typeof value === 'string') {
       return convert(value);
    }
    else if (Array.isArray(value)) {
      return value
        .map(convert)
        .join('');
    }
  }

  fromView(value) {

  }
}

