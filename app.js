var _ = require('lodash');
var cutoff = 28;
var encoded = '' +
'hpevfwqjmjryhemuqjoiatpjmddxdjwzskdcfgdtbmkbcxrnmjuoyddnqwluimjwvguxehszxzvbmufq' +
'lrepncxxbrrzxnzmkoyhrjcstvfazyhrhgssximjdfcmdjusylfkwbedyrsxovrmvjzaljfjmywpfnjg' +
'isoqbdyspgzlcmdjmhbpxhzvvhckidzuwzkauffsujmcrhvgeqvasjakgtzlxkthjqwxypmsovjbfshr' +
'rxtdvkmbyhejoeydnrdowuwhgmbvxmpixyttglsjgmcoqbberssfjraaqfrkmebsozsjfnubhktbbai_' +
'vxbifbofyednnutmxtisvfsktbqfijfzdjoqybuohtztysqelaqyixyaiolbgwylwfisfwubivuoablx' +
'smrqggedwyiqvseevwbcxcfjttdbweedcjgnsorizflsjtmltcoaynsrsupavqwcyzhgiplwkohlhrai' +
'nazaacvuqblpbzimgoxirejbshnbmdtgsbvlhpnugggencjaczqqiwixrwiyobmlkbwdlwcioqmjhoac' +
'dvcqdypxeichmgywocbcafumthdqrbjnpgnnmaasxiaxxfymcyiuqduztqneodstbcnjpeebgxgosoyd' +
'vpzlqjuroebbehafsemanwprhwkircuhlgcftqsjdusrqetbthxclfokpdlspxzuvhxpbeqqbfpqffsg' +
'yilqltfxrmtimcugytazkerhcfnirtavcnmfdyictlncwttkmxyfhgejygfefqrjknuqsfldmjmwjdfq' +
'sicfrzbfazchdgznekwmhridelcejnkmcgmpgtihbwmplrtrrefoyhyzxpjjlkabbbgspeokzhpjxsvp' +
'fjmdsoripvfrgyzxodoeirwwdaofdmwqrqyvdijlfqyzfspdoyrhewxbpufdqcpqdolkmrnvedixzpfd' +
'akggkslxcrjbrmnynviihbkzaqqffkkcgwjbettexhlwlasdfjnslwsmnclhafvebxxfdozsjtdvobik' +
'rrsuysujwliobagobxmlyxjeltwzwxpyrnkdxfemotfncyriaycyfemygjmpboocgtsvttqntegvleyn' +
'wgpjhyyysbltoxljsascsngbgfqmpzgpejzlmdkjzzlfxvagyrasmpzqntgqsvyqjugkhbrbkiqewlyf' +
'tvsq_______znp_____xkwt______wef______tz______kfc_______ha_______pn__lmg__iakrbt' +
'iyfi__uojrxvx__tps__fp__pfpndbi__ggpalde__wmd__kn__ifiadob__hdljdbd__zl__whlwilt' +
'bcmt__haagmjg__dwx__oh__utnzudq__xstxxyc__vly__mr__viilzav__swosyvc__i__hnaqxyev' +
'jykc__wyfoyir__ewp__ij__mrdavxl__tcdtxqy__fnr__cf__mrkepwj__djhrsau____lhefqxgmu' +
'zdgf______tjg__fip__mi__b____xc__vjvhpqy______vff_____wuup_____kqct___htiggvvpet' +
'yvco__pqbrlox__ayj__af__dnn__kx__mlitytx____jauna__kncmiym__dlwushk____gjptzccgc' +
'nntt__hfqyxzi__eqn__vz__hlh__we__dtfkfvf__g__litm__zeqjtdl__bkdapxs__o__oxeouwer' +
'bfjr__ipcqmop__kec__ip__icc__ci__vpxxueu__eq__sau__nhheydy__efqkdgq__us__pzlndhk' +
'hdmk__cmfvzwcb_____xdka______trj______yj__xpi__he_______nb_______by__rrn__tvxvig' +
'jfpseyjjbrrtsfnmbrokdqtfzhhdtbhtvpiyshmvcqaypfxcvbgvbvwrkanjfcsjnanmktkwimnvynuk' +
'cmgtqmovkrdmfuduqvbqydagsttictcnsrhfrpoebcehdzhjamykqpjtktufcvokljjijjsrivyhxtgw' +
'ojgoujyhmekzsoczwlqnruwcuhudgfaijzrkewzgjvorsmabpcdmurctwjrddcnkmfvabjwlbqssihdy' +
'bgfqchqdvjcsdllrlwmyikuvthguzfbgocaeqktvbcapzdcfjphqnhundtljqjeyfrkjspfvghqddxwx' +
'idtjjkctrkfcjmdpqyvavqbntpmkkuswfgbgalrysjfnzezjjscahoodjjelavydefzjmhsqfufsexlv' +
'vzziymsyqrcvhsrxjnysioswvjlqdbnwgyjlanmhzkbygkptycdoifsibytbrixggjeiepaybzxhvfsy' +
'ayeptgpxbhhfkkpromhjykfxnujorlzcmkcmvvgmveyfkgiwgosznfpmbhixsakxfkuxhwcgularehpa' +
'guquulrjllxmkfzgnchrxzcfdklytpfnezergkwkhgalqlvdhkdgulgfaxtybqttcjtlgmfwaymaxlwa' +
'spyrboibwkzzbtgigyswbtpwxgphcmkfpmvbfjimnxctinqssshofhlvlpqcwiuacjyxyqmvaibezofv' +
'atyhpqvjubgcwqeoytloypjphoxeimumuvswxkgamodoxiciwmgxvsenkgdhttzlenjbszrksopicjcj' +
'nvsosrapkfilwsaoptdavlfglioqpwoqskbgikksnnuzvmxyrtrbjouvgokxgbnwxnivtykvhjkaydsk' +
'zoowbhjrlojgeecdoggqqtomcdgrjzmlkhubyaewwtrlyutsptdrrigopueicoganyasrjeaiivzairu' +
'lklovyrpckwpowprxtvhaeivpudfchxbwvtosmivpcsesbzpsynxitlisuifuehceonjeydljzuzpsgj' +
'llcywoxbblitscquxiykcjxhsgkbhfhfrshsrpyrcaetahuwbeybvlvkthxydkapxlfikdwudjkmjjsa' +
'zajxpuikiqwsifhldfovqoycwmtlmcaycirhcehxnpfadrgyaogpcmomcgtmacnvbwfnimaqqvxijcbp' +
'mckwimloiinindfuakqjmpyjisxnbybtywhymnkdoyiphijzelmrazplgfcmcsjiovxqdxmuqulzklgx';

function createMap(input) {

  var map = {};
  var pairs = [];

  var i = input.split('').length;
  while (--i >= 0) {
    var letter = input[i];
    var keyCollection = map[letter] || (map[letter] = []);

    keyCollection.unshift(i);

    var len = keyCollection.length;
    if(len == 1) continue;

    // could ** probably ** assume that if a pair.distance is
    // larger than 27 (a-z|_) it would definitly have a duplicate
    // thus reducing the number of checks I have to make.
    
    var pair1 = new Pair(letter, i, keyCollection[1] )
    if(pair1.distance < cutoff) pairs.push(pair1);

    // I did not think about this use case at first
    if (len > 2) {
      var pair2 = new Pair(letter, i, keyCollection[2])
      if(pair2.distance < cutoff) pairs.push(pair2);
    }
  }

  
  var sortedPairs = _.sortBy(pairs, function sortPair(val){
    return prefix(val.distance) + '-' + prefix(10000 - val.left_idx)
  });

  var max = sortedPairs.pop();

  while (hasInside(sortedPairs, max)) {
    max = sortedPairs.pop();
  }
  
  if (pairs.length) {
    var encoded = mutateString(input, max);
    setImmediate(function(){createMap(encoded)});
  } else {    
    console.log('DONE:', (Math.abs(new Date(start) - new Date().getTime()) / 1000).toFixed(2));
    console.log('===========================');
    console.log(input.split('_')[0]);
    console.log('===========================');
  }
}

function hasInside(theList, max) {
  for (var i = 0; i < theList.length; i++) {
    var p = theList[i];
    if (p.left_idx > max.left_idx && p.right_idx < max.right_idx) {
      return true;
    }
  };
  return false;
}

function prefix(input){
  var long = '0000000000' + input;
  return long.substring(long.length-10);
}

function mutateString(input, max) {
  var stringArray = input.split('');
  stringArray.splice(max.right_idx, 1);
  stringArray.splice(max.left_idx, 1);
  stringArray.push(max.key);
  return stringArray.join('');
}

function Pair(key, left, right) {
  this.key = key;
  this.left_idx = left;
  this.right_idx = right;
  this.distance = this.calcDistance();
}

Pair.prototype.calcDistance = function() {
  return Math.abs(this.left_idx - this.right_idx);
}

console.log('START:');
var start = new Date().getTime();
createMap(encoded);
