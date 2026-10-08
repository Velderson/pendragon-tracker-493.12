// Adventure log — one record per campaign year, 485 to 493.
// 493: Timotheus and Agragan finished (now in 494); Rhydian and Mellyr still mid-493.
// Reconstructed from the GM's session notes and the campaign record.
// Player-facing: no GM secrets.
const ADVENTURES = [

{ year:485, title:'Mearcred Creek', pcs:['Timotheus','Gwegon','Rhydian'],
  summary:'The first muster. Salisbury rode to the Saxon war under Sir Elad, in Amig\u2019s company, and came home to an indecisive victory and a bad-tempered feast.',
  events:[
    {type:'court',   place:'Tilshead', pcs:["Timotheus", "Gwegon", "Rhydian"],      x:404.9, y:752.7, text:'Amig, castellan of Tilshead, took the young knights into his company. Roderick rode out sour \u2014 Madoc had the vanguard, and Ulfius the left.'},
    {type:'battle',  place:'Mearcred Creek', pcs:["Timotheus", "Gwegon", "Rhydian"],x:611.7, y:776.0, text:'In the third round the line broke. Two knights fumbled, the unit could not hold, and every man was left to his own devices in the press.'},
    {type:'court',   place:'Sarum', pcs:["Timotheus", "Gwegon", "Rhydian"],         x:420.4, y:773.2, text:'A short feast \u2014 three or four rounds, no more. Nobody had the stomach for a long one after a victory that settled nothing. Syagrius of Soissons was among the guests.'},
    {type:'faerie',  place:'Sword Lake', pcs:["Timotheus", "Gwegon", "Rhydian"],    x:404.0, y:762.0, text:'The Adventure of the Sword Lake. A giant, and a nukalavee \u2014 man and horse the same slick green, water running from its wounds. It melted when it died.'},
    {type:'faerie',  place:'Stapleford', pcs:["Timotheus", "Gwegon", "Rhydian"],    x:410.9, y:768.6, text:'Whatever it was ended as these things do: waking at the standing stone at Stapleford, with no clear account of how they came to be there.'},
  ]},

{ year:486, title:'Garrison Years', pcs:['Timotheus','Gwegon','Rhydian'],
  summary:'A quieter year of garrison duty, hunting and hospitality \u2014 and the first journey west.',
  events:[
    {type:'journey', place:'Estregales', pcs:["Timotheus", "Gwegon", "Rhydian"],    x:174.5, y:682.5, text:'A feast in Estregales, far to the west. Gwegon met Lunet there.'},
    {type:'skirmish',place:'Upavon', pcs:["Rhydian"],        x:420.5, y:743.8, text:'Rhydian\u2019s hunt at Upavon.'},
    {type:'court',   place:'Salisbury camp', pcs:["Timotheus"],x:415.0, y:766.0, text:'Timotheus made a song in camp that people kept asking for afterwards.'},
  ]},

{ year:487, title:'The Great Sword Feast', pcs:['Timotheus','Gwegon','Rhydian'],
  summary:'Uther courted the reluctant lords of Britain and sent his knights out as envoys to find out who could be counted on. Syagrius came asking for an army.',
  events:[
    {type:'court',   place:'Sarum', pcs:["Timotheus", "Gwegon", "Rhydian"],    x:420.4, y:773.2, text:'The Pentecost court. Praetor Syagrius of Soissons asked Britain for help against Claudas of the Franks, offering half a treasury for Paris. Uther weighed it and did not like the arithmetic. Merlin was absent, and people remarked on it.'},
    {type:'journey', place:'Lincoln', pcs:["Timotheus", "Gwegon", "Rhydian"],  x:515.8, y:445.0, text:'The Lindsey embassy. The Duke was not at home. His daughter, Maid Lerry, took the party hawking instead \u2014 which turned out to be the better way to learn what Lindsey was thinking. Elian fumbled a flirtation. Lerry was taken with Rhydian\u2019s falconry.'},
    {type:'journey', place:'Eburacum', pcs:["Timotheus", "Gwegon", "Rhydian"], x:456.4, y:341.8, text:'The Malahaut embassy, riding through hostile country to the great city. A skirmish with Saxon warriors \u2014 six killed apiece \u2014 and afterwards the sight of the Saxon host on the march, with the army of Malahaut behind it.'},
    {type:'battle',  place:'The narrow seas', pcs:["Agragan"], x:520.0, y:820.0, text:'Naval raids. Enemies defeated, places taken.'},
  ]},

{ year:488, title:'The Frankish Campaign', pcs:['Timotheus','Gwegon','Rhydian','Agragan'],
  summary:'Gwegon married and gained two manors; Timotheus was brought back from madness in a forest; and half the army of Britain sailed for France.',
  events:[
    {type:'marriage',place:'Salisbury', pcs:["Gwegon"],  x:420.4, y:773.2, text:'Gwegon wed Adwen, and with her came Shrewton and Allington upon Bourne \u2014 Syr Ricerch a fine steward with a temper, Sir Clydno generous, cowardly, and no steward at all.'},
    {type:'skirmish',place:'North Salisbury forest', pcs:["Rhydian", "Gwegon", "Timotheus"], x:414.0, y:748.0, text:'Roderick sent Rhydian, Gwegon and Elian after bandits in the northern forest. They found the camp easily enough. It was who they found in it that mattered \u2014 Timotheus, mad, living among them. Love of family brought him back.'},
    {type:'court',   place:'Winchester', pcs:["Timotheus", "Gwegon", "Rhydian", "Agragan"],  x:467.6, y:773.5, text:'Winter court at Winchester. Word came that Uther would let Madoc take an army to Syagrius\u2019s aid and strike at the Frankland.'},
    {type:'journey', place:'Hantonne', pcs:["Timotheus", "Gwegon", "Rhydian", "Agragan"],    x:460.9, y:798.1, text:'Madoc came to Salisbury for the muster \u2014 half the knights, half the foot, forty days\u2019 provisions, to the ports of Hantonne and Chichester. The company sailed, and was part of the sacking of Bayeux.'},
  ]},

{ year:489, title:'Excalibur\u2019s Peace', pcs:['Timotheus','Gwegon','Rhydian','Agragan','Mellyr'],
  summary:'The year the private grudges came due. A raid was answered with a beheading, a marriage was made, and Timotheus settled an inheritance in a way nobody was meant to understand.',
  events:[
    {type:'court',   place:'Sarum', pcs:["Timotheus", "Gwegon", "Rhydian", "Agragan", "Mellyr"],      x:420.4, y:773.2, text:'Uther gathered every lord he could. Word from the north: Octa and Eosa pillaging Malahaut, Eburacum besieged, Lot refusing battle, Lindsey holding them out of Logres alone. Madoc called the muster \u2014 half the knights, forty days\u2019 food.'},
    {type:'skirmish',place:'Levcomagus', pcs:["Gwegon", "Timotheus", "Rhydian"], x:466.6, y:773.6, text:'Sir Blains of Levcomagus had raided Broughton and Laverstock. They ran him down. Gwegon went at him head on and did not stop at a captured man \u2014 the head went back to Roderick. Rhydian would not watch it and rode away.'},
    {type:'faerie',  place:'Salisbury', pcs:["Agragan", "Mellyr"],  x:424.0, y:769.0, text:'A confrontation with Cerridwen that went badly. She has held it against Agragan and Mellyr ever since.'},
    {type:'court',   place:'London', pcs:["Timotheus"],     x:577.9, y:695.7, text:'Timotheus took his sister to London on the pretext of teaching her the family trade. Lady Indeg came home with a boy, and a grave was dug in Keepah\u2019s name. Nobody asked the wrong questions.'},
    {type:'marriage',place:'Newton Tony', pcs:["Mellyr"],x:428.6, y:762.4, text:'Mellyr wed Nesta.'},
  ]},

{ year:490, title:'The Battle of Lindsey', pcs:['Gwegon','Agragan','Timotheus'],
  summary:'Uther\u2019s great victory over the Saxons at Lincoln \u2014 and the feast afterwards, where Timotheus sang about the wrong woman in front of every lord in Britain.',
  events:[
    {type:'battle', place:'Lincoln', pcs:["Gwegon", "Agragan", "Timotheus"], x:515.8, y:445.0, text:'Two thousand knights and five thousand foot against ten thousand Saxons. Riding in Roderick\u2019s contingent in the King\u2019s own centre, they broke through when the Saxon line collapsed and took King Octa himself for ransom. Sir Vrastias fell. Agragan and Timotheus both took major wounds. Aswine dragged Agragan clear of a death blow, called his ransom to Gwegon paid, and went east with the retreating Saxons.'},
    {type:'court',  place:'Lincoln', pcs:["Gwegon", "Agragan", "Timotheus"], x:521.0, y:451.0, text:'The victory feast, every great lord of Britain in the hall. Timotheus rose to sing for the Duchess Ygraine and did not stop where he should have. He remembers none of the middle of it; Roderick covered for him with the head wound. Elian was married to Seren, and Agragan promised to Lady Calire.'},
  ]},

{ year:491, title:'The War in Cornwall', pcs:['Gwegon','Timotheus','Rhydian','Agragan','Mellyr'],
  summary:'Gorlois broke with the King and the army followed him west. The company split \u2014 half to the siege at Tintagel, half to the field at Terrabil \u2014 and neither half saw the whole of what happened.',
  events:[
    {type:'journey', place:'The western road', pcs:["Gwegon", "Timotheus", "Rhydian", "Agragan", "Mellyr"], x:400.0, y:786.0, text:'The Duke of Cornwall left court without leave and rode west through the snow with his household. The knights met that column on the road. War followed.'},
    {type:'siege',   place:'Tintagel', pcs:["Gwegon", "Timotheus"],   x:146.3, y:863.9, text:'A long dull siege on the cliffs. Sir Padern rode in as a messenger with news from Terrabil and insulted Gwegon before the whole camp \u2014 and did not ride out again. Then the night of Merlin\u2019s fog, when the King vanished and the sentries could not say what they had seen.'},
    {type:'battle',  place:'Terrabil', pcs:["Rhydian", "Mellyr"],   x:161.1, y:868.8, text:'Duke Gorlois died in the fighting and Prince Madoc with him. Elffin took the blow meant for his half-brother Rhydian and was killed. Both knights were carried unconscious from the field.'},
    {type:'skirmish',place:'Cornish moor', pcs:["Agragan"],x:166.7, y:878.8, text:'Agragan rode scouting alone into hostile country, killed Syagrius, and came back with what he had been sent for.'},
    {type:'court',   place:'Tintagel', pcs:["Gwegon", "Timotheus"],   x:151.0, y:858.0, text:'Uther married Ygraine at Tintagel. Gwegon\u2019s Honour failed him badly that night; Timotheus was seated above the salt and carried himself well. Afterwards the company wintered in Cornwall as garrison.'},
  ]},

{ year:492, title:'Treason', pcs:['Gwegon','Timotheus','Rhydian','Agragan','Mellyr'],
  summary:'A routine patrol put three of them in a clearing with Merlin and a child, and Brastias put them all on trial for their lives. The other two were four days\u2019 ride east, buying a kinswoman out of thralldom.',
  events:[
    {type:'court',   place:'Tintagel', pcs:["Gwegon", "Timotheus", "Agragan"],    x:146.3, y:863.9, text:'Margawse was married to King Lot of Lothian and Elaine to King Nentres of Garloth. Marchlew stood in the line where Gwegon could not.'},
    {type:'faerie',  place:'Bodmin Moor', pcs:["Gwegon", "Timotheus", "Agragan"], x:166.7, y:878.8, text:'A routine patrol out of Terrabil, on the moor, in the morning fog. Merlin walked out of the trees \u2014 "You have guarded me before" \u2014 and led them off the trails. They waited two hours. He came back carrying something, said "Delay them", and was gone into the wood. Then Brastias came out of the treeline at the gallop.'},
    {type:'journey', place:'Sedlescombe', pcs:["Rhydian", "Mellyr"],x:650.8, y:775.2, text:'Rhydian and Mellyr rode east into Haestingas country under a ransom cover, into the lands Aelle took when Anderida fell. They dealt with Saeberht at Sedlescombe, bought Mellyr\u2019s cousin Tangwen out of thralldom, found Llywel son of Tyngyr alive in a villa the Saxons will not enter, and came out of the ruins of Anderida with his father\u2019s papers. One thing was already gone from the strongroom.'},
    {type:'trial',   place:'Tintagel', pcs:["Gwegon", "Timotheus", "Rhydian", "Agragan", "Mellyr"],   x:141.0, y:869.0, text:'Brastias laid the charge before the King. Ygraine asked for their deaths. Roderick worked through Sir Elad and Bishop Roger, and Father Dewi found the ground on which the matter could rest. All five were acquitted. Merlin was outlawed and condemned in his absence.'},
    {type:'marriage',place:'Cholderton', pcs:["Agragan"], x:427.5, y:761.0, text:'Two years after it was arranged at Lincoln, Agragan wed Lady Calire, daughter of Sir Elad. Nether Wallop came with her, and ten libra besides.'},
  ]},


{ year:493, title:'The Eburacum Embassy', pcs:['Timotheus','Agragan','Rhydian','Mellyr'],
  summary:'Timotheus and Agragan finished the embassy at Eburacum and came home with the shape of the northern conspiracy, three omens and a dead man of Malahaut. Their year is done; they have moved on into 494. Rhydian and Mellyr are still in the middle of 493, so their part of the year is not finished. Gwegon was away.',
  events:[
    {type:'court',   place:'Eburacum', pcs:["Timotheus", "Agragan"], x:456.4, y:341.8, text:'The embassy concluded. There was to be a Buhurt; Agragan called it off, too dangerous with real weapons and too dull with blunted ones.'},
    {type:'court',   place:'Eburacum bathhouse', pcs:["Timotheus"], x:452.0, y:338.0, text:'In the old legionary bathhouse Timotheus learned the shape of the whole thing: Deira means to keep Malahaut weak, the Saxons want passage through the north and a real alliance, not a truce, and King Lot means to make himself King of all Britain.'},
    {type:'faerie',  place:'Eburacum market', pcs:["Agragan"], x:460.5, y:337.5, text:'Old Modron read his fortune at the market, jet on a heated axe, three cards and all of them Swords: the Page, the Six and the Queen. All three run until the winter of 495.'},
    {type:'skirmish',place:'Outside Eburacum', pcs:["Agragan", "Timotheus"], x:463.0, y:350.0, text:'Riding out, the knight who had pulled down the Dragonfly’s sign snickered as they passed. Agragan challenged him, took a critical and a major wound to the chin, and killed him. Sir Custennin ap Elidyr of Malahaut. He leaves a widow, and the Queen of Swords had been drawn that same day.'},
    {type:'journey', place:'The road south', pcs:["Timotheus", "Agragan"], x:488.0, y:520.0, text:'Riding home with Count Roderick they met refugees out of Lindsey on the road, and took them home with them.'},
    {type:'journey', place:'Laverstock', pcs:["Timotheus"], x:424.5, y:777.5, text:'Timotheus settled his share of the Lindsey refugees at Laverstock, on new-broken ground beyond the fields.'},
    {type:'journey', place:'Cholderton', pcs:["Agragan"], x:427.5, y:761.0, text:'Agragan settled the rest at Cholderton, out on the heath.'},
    {type:'court',   place:'Laverstock', pcs:["Timotheus"], x:422.0, y:780.5, text:'Winter. Timotheus wrote to King Uther asking leave to build his tower. Lady Heledwen, a rich widow, set herself to win his attention.'},
    {type:'skirmish',place:'Cholderton', pcs:["Agragan"], x:429.5, y:758.0, text:'Winter. An accident reopened the duel wound. The scar on his chin is now unmistakable, and it will not fade.'},
    {type:'journey', place:'Stapleford', pcs:["Rhydian"], x:410.9, y:768.6, text:'Beofric, his half-brother, rode out on a long quest. Rhydian apologised for Elffin, and the parting was civil, but the grudge stands. Rhydian gave him a dove; a message is expected around 498.'},
    {type:'court',   place:'Newton Tony', pcs:["Mellyr"], x:428.6, y:762.4, text:'Distant relatives came to Newton Tony and were taken in.'},
  ]},
];
