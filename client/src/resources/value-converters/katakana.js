const map = {};
map.a = '&#12450;';
map.i = '&#12452;';
map.u = '&#12454;';
map.e = '&#12456;';
map.o = '&#12458;';
map.ka = '&#12459;';
map.ga = '&#12460;';
map.ki = '&#12461;';
map.gi = '&#12462;';
map.ku = '&#12463;';
map.gu = '&#12464;';
map.ke = '&#12465;';
map.ge = '&#12466;';
map.ko = '&#12467;';
map.go = '&#12468;';
map.sa = '&#12469;';
map.za = '&#12470;';
map.si = '&#12471;';
map.zi = '&#12472;';
map.su = '&#12473;';
map.zu = '&#12474;';
map.se = '&#12475;';
map.ze = '&#12476;';
map.so = '&#12477;';
map.zo = '&#12478;';
map.ta = '&#12479;';
map.da = '&#12480;';
map.ti = '&#12481;';
map.di = '&#12482;';
map.tu = '&#12484;';
map.du = '&#12485;';
map.te = '&#12486;';
map.de = '&#12487;';
map.to = '&#12488;';
map.do = '&#12489;';
map.na = '&#12490;';
map.ni = '&#12491;';
map.nu = '&#12492;';
map.ne = '&#12493;';
map.no = '&#12494;';
map.ha = '&#12495;';
map.ba = '&#12496;';
map.pa = '&#12497;';
map.hi = '&#12498;';
map.bi = '&#12499;';
map.pi = '&#12500;';
map.hu = '&#12501;';
map.bu = '&#12502;';
map.pu = '&#12503;';
map.he = '&#12504;';
map.be = '&#12505;';
map.pe = '&#12506;';
map.ho = '&#12507;';
map.bo = '&#12508;';
map.po = '&#12509;';
map.ma = '&#12510;';
map.mi = '&#12511;';
map.mu = '&#12512;';
map.me = '&#12513;';
map.mo = '&#12514;';
map.ya = '&#12516;';
map.yu = '&#12518;';
map.yo = '&#12520;';
map.ra = '&#12521;';
map.ri = '&#12522;';
map.ru = '&#12523;';
map.re = '&#12524;';
map.ro = '&#12525;';
map.wa = '&#12527;';
map.wo = '&#12530;';
map.n = '&#12531;';

map.kya = '&#12461;&#12515;';
map.kyu = '&#12461;&#12517;';
map.kyo = '&#12461;&#12519;';
map.gya = '&#12462;&#12515;';
map.gyu = '&#12462;&#12517;';
map.gyo = '&#12462;&#12519;';
map.sya = '&#12471;&#12515;';
map.syu = '&#12471;&#12517;';
map.syo = '&#12471;&#12519;';
map.zya = '&#12472;&#12515;';
map.zyu = '&#12472;&#12517;';
map.zyo = '&#12472;&#12519;';
map.tya = '&#12481;&#12515;';
map.tyu = '&#12481;&#12517;';
map.tyo = '&#12481;&#12519;';
map.nya = '&#12491;&#12515;';
map.nyu = '&#12491;&#12517;';
map.nyo = '&#12491;&#12519;';
map.hya = '&#12498;&#12515;';
map.hyu = '&#12498;&#12517;';
map.hyo = '&#12498;&#12519;';
map.bya = '&#12499;&#12515;';
map.byu = '&#12499;&#12517;';
map.byo = '&#12499;&#12519;';
map.pya = '&#12500;&#12515;';
map.pyu = '&#12500;&#12517;';
map.pyo = '&#12500;&#12519;';
map.mya = '&#12511;&#12515;';
map.myu = '&#12511;&#12517;';
map.myo = '&#12511;&#12519;';
map.rya = '&#12522;&#12515;';
map.ryu = '&#12522;&#12517;';
map.ryo = '&#12522;&#12519;';

map.k = '&#12483;';
map.s = '&#12483;';
map.t = '&#12483;';
map.p = '&#12483;';

function convert(char) {
  return map[char] || char;
}


export class KatakanaValueConverter {
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

