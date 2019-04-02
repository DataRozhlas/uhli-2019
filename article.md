title: "Západ Evropy se s uhlím loučí, na východě se uhelné elektrárny staví. Zmapovali jsme plány vlády i ČEZ"
perex: "Němci v lednu rozhodli, že do roku 2038 končí s uhlím. Český ministr životního prostředí Richard Brabec (ANO) teď oznámil, že chystá uhelnou komisi i zde. Postavit se uhlí by přitom mohl už podle současných plánů. Datoví novináři serveru iROZHLAS se ponořili do dokumentů českých energetiků."
published: "2. dubna 2019"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/12507291353_58227597_190401-160936_jab.jpg?itok=EMYAtGKl
coverimg_note: "Foto <a href='https://www.flickr.com/photos/greenpeacepl/12507291353/'>Bogusz Bilewski | Flickr</a> (CC BY-ND 2.0)"
styles: ["//github.com/downloads/lafeber/world-flags-sprite/flags32.css"]
libraries: [jquery, highcharts, "https://code.highcharts.com/maps/7.1.0/modules/map.js", "https://code.highcharts.com/mapdata/custom/europe.js"]
options: []
---

<h3>KAPITOLY</h3>
<ul>
<li><strong><a href="#kapitola0">Před oponou, za oponou</a></strong></li>
<li><strong><a href="#kapitola1">Rok 2040 podle vlády: jádro, něco biomasy, uhlí a plynu</a></strong></li>
<li><strong><a href="#kapitola2">ČEZ: slibem nezarmoutíš</a></strong></li>
<li><strong><a href="#kapitola3">2015: Prolomení limitů</a></strong></li>
<li><strong><a href="#kapitola4">Křetínský, Tykač: „Věříme v roli uhlí na cestě k zelené budoucnosti“</a></strong></li>
<li><strong><a href="#kapitola5">Externality: co firma vydělá, zaplatí stát na zdravotních nákladech</a></strong></li>
<li><strong><a href="#kapitola6">Rozbité povolenky a ústup finačníků. „O čtyři stupně teplejší svět není pojistitelný“</a></strong></li>
<li><strong><a href="#kapitola7">Premiér: „Je potřeba bojovat proti klimatické změně. Ale opatrně“</a></strong></li>
</ul>

<hr>

<a name="kapitola0"></a>
## Před oponou, za oponou

„Pokud jde o těžbu, přečetl jsem si, že stále ještě největším podnikem v Karlovarském kraji je Sokolovská uhelná a že průměrný plat v této společnosti je 34 tisíc korun, což je vysoko nad regionálním, ale dokonce i celostátním průměrem. Proč tedy zabíjet slepici, která snáší zlatá vejce,“ uvažoval prezident Miloš Zeman na návštěvě Karlových Varů v polovině března.

„Ta hysterie, kterou vidím v Německu, špatně skončí. Už dnes mají nejdražší elektřinu. A až odstaví jaderné elektrárny, protože vítr občas nefouká a slunce nesvítí, tak ji budou dovážet. A odkud, když ne od nás, pokud neuděláme totéž,“ pokračoval.

Za rozmach obnovitelných zdrojů v Evropě podle něj můžou především dotace.

„Obávám se, že to je chybný názor,“ reagoval pro Český rozhlas Jiří Gavor, ředitel Asociace nezávislých dodavatelů energií. „Ono nezáleží, co si o tom myslí jednotlivý člověk, i když vysoko postavený. Důležitější je, jaké trendy považuje za správný energetický byznys, a tam prakticky všechny světové energetické koncerny – včetně domácího ČEZ – spatřují v obnovitelných zdrojích jasnou budoucnost.“

<right><h3>Poslechněte si</h3><div><img src="https://www.irozhlas.cz/sites/default/files/uploader/xxx_190402-075609_jab.png"></div><div>Tématu se věnoval také pořad Evropa Plus. Poslechnout si jej můžete <a href="https://plus.rozhlas.cz/zavislost-evropy-na-uhli-zeme-i-energeticke-spolecnosti-zahajily-prechod-na-7799418">zde</a></div></right>

Nesouhlasí také s názorem, že obnovitelné zdroje potřebují ke své ekonomické návratnosti dotace. Naopak: v sousedním Německu, kde jsou srovnatelné klimatické podmínky s Českem, podle něj řada projektů produkuje zelenou energii za běžných komerčních podmínek bez státní podpory.

„Odklon od uhelné energetiky se netýká zdaleka jen Německa, ale naprosté většiny Evropy,“ dodává Gavor. „Česko, Polsko a pár dalších zemí jsou v podpoře uhlí osamoceny. Většina evropských zemí dnes prosazuje čistější zdroje energie. Jejich postoj se bude také nepříznivě projevovat v přijímání nové legislativy, která bude stále víc v neprospěch uhlí. Osobně si myslím, že žijeme v době transformace energetiky, obnovitelné zdroje se stávají stále dostupnější a levnější.“

Aktuální plány evropských zemí na poli uhelné energetiky přehledně ukazuje následující mapa. Jejím autorem je celoevropská síť [Europe Beyond Coal](https://beyond-coal.eu/data/). Na první pohled je zřetelná propast mezi západem a východem kontinentu: mezi patnácti „starými“ unijními zeměmi určily datum, kdy se rozloučí s uhlím, všechny s výjimkou Řecka a Španělska. Z postkomunistických zemí zatím žádná; nejdál jsou Slovensko a Maďarsko, i ty ale zavření všech uhelných elektráren zatím jen zvažují.

<wide>
<div id="container">
<div id="mapa"></div>
<div id="tooltip"></div>
</div>
</wide>

Změny v evropské energetice jsou překotné; přestože Britové oznámili záměr skoncovat s uhlím ještě před Pařížskou dohodou v roce 2015, termín odstavení uhelných elektráren většina zemí oznámila až v posledním roce. Urychlila je poslední [zpráva Mezinárodního panelu pro klimatickou změnu loni v listopadu](https://www.ipcc.ch/sr15/), podle které se atmosféra otepluje rychleji, než ukazovaly starší modely.

Zatím poslední zemí, která oznámila datum uzavření všech uhelných provozů, je vůbec největší evropský konzument uhlí: Německo. V lednu tamní uhelná komise – oficiálně _Komise pro růst, strukturální změny a zaměstnanost_ – doporučila zavřít všechny uhelné elektrárny o celkovém výkonu 45 GW do roku 2038. První třetinu odstaví už do roku 2022 a poslední blok může vypnout už o tři roky dříve, než říká původní plán. Přesto bude mít země zřejmě problém splnit závazky, které vyplývají z [Pařížské dohody](https://www.mzp.cz/cz/parizska_dohoda).

„Z pohledu Pařížské dohody a nezvýšení teploty o víc než 1,5 stupně není německý plán dostatečný,“ upozorňuje Jiří Koželouh, programový ředitel Hnutí Duha. „Proto na něj chtějí ekologové a experti tlačit. Záleží, jak rychle se budou rozvíjet technologie obnovitelných zdrojů. Je možné, že za pět let se ukáže, že ten cíl může být ambicióznější.“

Část východoevropských zemí se vydává opačným směrem. Polsko například připravuje výstavbu řady dalších uhelných bloků, jak ukazují data Europe Beyond Coal. Nové uhelné elektrárny se stavějí také v dalších evropských zemích; hlavně na Balkáně, často ve spolupráci s čínskými investory.

Evropský odklon od uhlí chce využít také Turecko: to plánuje v nejbližších letech postavit uhelné bloky o výkonu 39 GW, tedy přibližně tolik, kolik Německo plánuje uzavřít.

<h3>Kde se v Evropě staví nové uhelné elektrárny?</h3>
<div><img style="width: 100%" src="https://www.irozhlas.cz/sites/default/files/uploader/xxx_190401-174617_jab.png"></div>
<p><i>Zdroj: Europe Beyond Coal</i></p>

_Interaktivní vizualizaci (v angličtině), kde si ke každé připravované elektrárně můžete dohledat lokaci, výkon a vlastníka, najdete na stránkách Europe Beyond Coal pod záložkou [New coal threat](https://beyond-coal.eu/data)._

_Hnědouhelný blok Ledvice III o výkonu 660 MW, který vizualizace ukazuje jako rozestavěný, je od roku 2017 v provozu. Elektrárna Mělník V loni [získala kladné posouzení EIA](https://portal.cenia.cz/eiasea/detail/EIA_MZP475), byla na ni vypsána i [veřejná zakázka](https://nen.nipez.cz/SeznamPlatnychProfiluZadavatelu/MultiprofilZakladniUdajeOZadavateliM-19659215/SeznamZahajenychZadavacichPostupu-19659215/ZakladniInformaceOZadavacimPostupuM-315902200-19659214/ZakladniInformaceOZadavacimPostupu-315902200-19659214), ČEZ ji ale na svých stránkách nezmiňuje._

<a name="kapitola1"></a>
## Rok 2040 podle vlády: jádro, něco biomasy, uhlí a plynu

Na rychlé změny v evropské energetice nedávno reagoval také ministr životního prostředí Richard Brabec (ANO).

„Po vzoru Německa bych rád přispěl k založení takzvané uhelné komise, kde velmi široká skupina odborníků, vědců, manažerů, politiků a ‚nevládek‘ hovoří o budoucnosti spalování fosilních paliv,“ [oznámil v pořadu Otázky Václava Moravce v polovině března](https://www.ceskatelevize.cz/ivysilani/1126672097-otazky-vaclava-moravce/219411030510317-otazky-vaclava-moravce-2-cast/obsah/682249-richard-brabec--ano--jan-frouz-michal-v-marek).

„Mně se ten německý model líbí,“ doplnil ministr. „Abychom si řekli, jaké jsou reálné možnosti České republiky možná ještě v rychlejším přechodu z fosilních paliv na obnovitelné zdroje a na jádro. Protože jen na obnovitelných zdrojích zůstat nemůžeme, takovou pozici nemáme.“

Je otázka, zda pro komisi najde politickou podporu. Nástroj pro utlumení uhelného byznysu má ale i bez ní. Základní obrysy pro odstavení uhelných elektráren narýsovala už Sobotkova vláda v srpnu 2015 v dosud aktuální [Státní energetické koncepci](https://www.mpo.cz/dokument158059.html). Jde o strategický dokument s horizontem 25 let, tedy do roku 2040. Podle zákona 103/2015 Sb., je pro státní správu závazný, zároveň ovšem v mnoha ohledech vágní. Jakési mantinely pro uhlí nicméně stanoví: v roce 2040 by se měly uhelné elektrárny podílet na energetickém mixu 11 až 21 procenty. Dnes je společný podíl hnědého a černého uhlí na české elektřině 47 procent, takže jde o výrazný pokles. S úplným odstavením nicméně koncepce nepočítá.

<div class="chart" id="koncepce" style="max-width: 100%"></div>

Postupně odstavované uhelné elektrárny by mělo podle koncepce nahradit hlavně jádro. Výstavba nových jaderných bloků – ať už v Dukovanech, Temelíně, nebo jinde – ovšem naráží na řadu problémů, hlavně s financováním. „Definitivní rozhodnutí o investičním modelu dostavby by mělo padnout do konce letošního dubna, po zkušenostech z minulého roku je ovšem obtížné jakkoliv předvídat budoucí vývoj,“ [rozebírali jsme komplikace kolem Dukovan v únoru](https://www.irozhlas.cz/zpravy-domov/cez-dukovany-babis-dostavba-kritika_1902280615_jab). Nadějněji to s jádrem nevypadá ani jinde v Evropě; posledním zprovozněným jaderným reaktorem na kontinentu byl v roce 2002 Temelín. Finský reaktor Olkiluoto a francouzský Flamanville po mnohaletém prodlužování a prodražení výstavby stále [čekají na zprovoznění](https://www.irozhlas.cz/zpravy-domov/atomova-energie-jaderna-elektrarna-dukovany-temelin_1804160705_jab).

Posílit mají podle koncepce i obnovitelné zdroje – ze současných 11 na 18 až 25 procent. Větší podíl čisté energie je ale podle dokumentu nad možnosti České republiky. Slovy Miloše Zemana, málo u nás svítí slunce a fouká vítr.

Priority koncepce jsou jinde: na mnoha místech zdůrazňuje vyvážený mix zdrojů, díky kterému mají být dodávky elektřiny spolehlivé a relativně levné. Spoléhá se na kombinaci tradičních zdrojů – jádra, uhlí a zemního plynu. Mezi obnovitelnými zdroji tlačí na spalování biomasy, které lze načasovat a řídit. Ke slunci, větru a vodě má nedůvěru. Plán české energetiky působí dojmem, že obnovitelné zdroje sice bere na vědomí, ale jinak se s nimi míjí. Pro dosažení svých cílů – hlavně levné a spolehlivé energie – je nepovažuje za vhodné. Naopak, podpora obnovitelných zdrojů podle něj „vede ke znevýhodňování českých energeticky intenzivních firem z pohledu konkurenceschopnosti a má dopady do sociální stability.“ V jiné pasáži jde ještě dál, podpora obnovitelných zdrojů podle něj podrývá konkurenceschopnost celé Evropské unie.

S tím nesouhlasí programový ředitel Hnutí Duha Jiří Koželouh.

„Podrobná studie české energetiky ukazuje, že je možné uhelné elektrárny zavřít už v roce 2030. Pokud se samozřejmě budou rozvíjet obnovitelné zdroje v rámci potenciálu, který v Česku máme,“ tvrdí.

[Studie](http://www.hnutiduha.cz/aktualne/prelomova-studie-po-odstaveni-ceskych-uhelnych-elektraren-svetla-nezhasnou), kterou pro ekology vypracovala německá firma Energynautics, odhaduje možný podíl obnovitelných zdrojů na výkonu české energetiky v roce 2030 na 54 procent.

„Neznamená to, že bychom v budoucnu nepotřebovali žádnou elektřinu z uhlí, nějakou by ještě po roce 2030 vyráběly teplárny,“ pokračuje Kouželouh. „I bez uhelných elektráren bychom přitom elektřinu vyváželi, i když ne tak obrovská kvanta jako dnes. Dnes vyvážíme tolik elektřiny, kolik spotřebují všechny domácnosti.“

„Vláda nepotřebuje žádnou uhelnou komisi, aby mohla začít směřovat Česko od uhlí,“ upozorňuje. „Státní energetická koncepce určuje několik konkrétních úkolů, co má nebo už měla udělat. Jedním z nich je zavedení penalizace nízkoúčinné výroby elektřiny uhlí, protože většina uhlí se u nás spálí v elektrárnách s nízkou účinností, někde i méně než třicet procent. Tenhle úkol měl být splněn do konce roku 2015, dodnes penalizace zavedena není.“

Podle Koželouha je potenciál pro rozvoj obnovitelných zdrojů podobný Německu. Zpoždění v jejich rozšíření lze navíc rychle dohnat – na rozdíl od jaderných reaktorů může česká energetika začít solární, větrné a další zdroje stavět hned, je to otázka politického rozhodnutí.

„Klimatické podmínky jsou u nás zcela srovnatelné s Bavorskem,“ souhlasí Jiří Gavor, ředitel Asociace nezávislých dodavatelů energií. „Větrné elektrárny, byť se tam staví daleko víc než u nás, nemají takovou silnou pozici jako na severu Německa. Ale začínají se tam stavět komerční projekty fotovoltaických elektráren. A to je vlastně náš region.“

<a name="kapitola2"></a>
## ČEZ: Slibem nezarmoutíš

Minimálně stejnou roli jako státní koncepce ovšem v energetice hrají zájmy polostátní firmy ČEZ. Ta v Česku provozuje osm uhelných elektráren, které vyprodukují přibližně polovinu české fosilní elektřiny. S jejich odstavením firma podle mluvčího Ladislava Kříže nepospíchá.

„Zatím předpokládáme, že Česká republika přestane využívat uhlí pro výrobu elektřiny v roce 2050,“ prozradil Českému rozhlasu mluvčí ČEZ. „My jsme i slíbili, že do tohoto roku se staneme zcela uhlíkově neutrální.“

Současné klimatické i zdravotní dopady firmy jsou přitom na evropská měřítka vysoké. Podle dat Europe Beyond Coal je ČEZ pátým největším producentem skleníkového plynu oxidu uhličitého na kontinentu. Ještě hůř je na tom s dopady provozu svých elektráren na zdraví: v počtu způsobených předčasných úmrtí je ČEZ mezi evropskými energetickými firmami čtvrtý.

<h3>Podíl evropských firem na emisích CO<sub>2</sub></h3>
<div><img style="width: 100%; max-width: 400px" src="https://www.irozhlas.cz/sites/default/files/uploader/xxx_190401-180655_jab.png"></div>
<p><i>Zdroj: Europe Beyond Coal</i></p>

_Interaktivní vizualizaci (v angličtině), kde si můžete přepnout na podíl firmy na předčasných úmrtích nebo na instalovaném výkonu, najdete na stránkách Europe Beyond Coal pod záložkou [Impact by company](https://beyond-coal.eu/data)._

„Přes 90 procent zdravotních dopadů způsobených firmou ČEZ pochází ze spalování hnědého uhlí v České republice, především v Ústeckém kraji,“ vyplývá podle hnutí Greenpeace z loňské studie [Poslední nádech: Jak energetické firmy otravují v Evropě vzduch](https://www.greenpeace.org/czech/publikace/1958/posledni-nadech-jak-energeticke-firmy-otravuji-v-evrope-vzduch/).

„Zdravotní náklady, jimiž uhelné firmy zatěžují společnost, dosahují podobné výše jako celkové zisky za elektřinu vyrobenou z uhlí,“ komentuje dále studii Greenpeace. „Elektrárny ČEZ se vyznačují vysokou mírou škodlivosti na jednotku vyprodukované elektřiny. V průměru se externí zdravotní náklady šplhají na 70 eur za megawatthodinu. Ovšem například elektrárna Trmice způsobuje podle studie zdravotní náklady ve výši 289 eur na každou megawatthodinu. To je více než pětinásobek ceny, za kterou ČEZ vyrobenou elektřinu prodává.“

Podle hnutí navíc ČEZ aktivně bojuje proti novým limitům na znečištění ovzduší. Například prostřednictvím své elektrárny Počerady se firma připojila k žalobě proti Evropské unii s cílem prosadit zrušení již schválených limitů.

Problém spatřují i v tom, že ČEZ nemá jasnou strategii, co chce se starými uhelnými elektrárnami dělat. Budoucnost uhelných provozů naznačuje pouze v [koncepci podnikatelské činnosti](https://www.cez.cz/edee/content/file-s/pro-investory/investor-relations/vh2014_sal68b4s3j3fv8nl/vh_2014_08a_aktualizace_koncepce_podnikatelske_cinnosti_cz.pdf) na svém webu. K uhelným provozům a obnovitelným zdrojům se vyjadřuje jen obecně (<span onclick="pridejOdstavec()"><u>shrnutí v odrážkách</u></span>).

<div id="cez">
<ul style="font-size: 13px !important">
<li>Realizovat po technické a právní stránce obnovu výrobní kapacity uhelných elektráren v souvislosti s dožíváním jejich technologických komponent formou výstavby nových uhelných bloků s vyšší účinností, popřípadě obnovou stávajících hnědouhelných bloků s ohledem na jejich profitabilitu a disponibilitu hnědého uhlí; k tomuto cíli optimalizovat provoz jednotlivých uhelných lomů Skupiny ČEZ.</li>
<li>Vytvářet předpoklady pro omezení dopadů, eventuálně získání dodatečných finančních efektů v oblasti obchodování s povolenkami na emise skleníkových plynů zvyšováním účinnosti výroby elektřiny v uhelných elektrárnách.</li>
<li>Zvyšovat podíl výroby elektřiny z obnovitelných zdrojů energie ve výrobních zařízeních Skupiny ČEZ (zejména spalováním biomasy, dále pak využitím vodní, větrné a sluneční energie).</li>
<li>Pokračovat ve zvyšování provozní výkonnosti a flexibility výrobních zdrojů, například v oblasti zvyšování výkonového rozsahu uhelných bloků umožňující lépe reagovat na cenové výkyvy na komoditní burze.</li>
</ul>
<p style="font-size: 13px !important"><i>Zdroj: Koncepce podnikatelské činnosti Skupiny ČEZ a společnosti ČEZ, a.s.</i></p>
</div>

„ČEZ už v devadesátých letech odstavil velké množství zdrojů o výkonu 2000 MW, což odpovídá výkonu jaderné elektrárny Temelín,“ doplňuje mluvčí ČEZ Kříž. „Nyní nás čeká další fáze zavírání zastaralých uhelných elektráren, pro které už není uhlí do budoucna. První krok nastane už v příštím roce, kdy bude odstavena zhruba pětina energetických zdrojů, využívajících uhlí. Budou odstaveny Prunéřov I a Mělník II a III a bude to takhle pokračovat dál.“

„Je to ale politické rozhodnutí a to je samozřejmě vždycky v rukou politiků. V Německu šlo o dohodu s energetickými firmami, které jsou za odstavování kompenzovány,“ naznačuje cestu Kříž.

Za posledních dvanáct let ČEZ podle Kříže snížil emise skleníkových plynů ze 42 na 27 milionů tun ročně.

Podle ekologů ovšem neříká celou pravdu.

„ČEZ ve snaze získat zdarma lukrativní emisní povolenky jednoznačně klame,“ upozorňuje Jiří Koželouh z Hnutí Duha. „Emisní náročnost snížil zejména díky tomu, že prodal dvě staré, velké a emisně náročné elektrárny těžařským společnostem. Naše zdraví poškozují jiné firmy, ale fakticky se nic nemění. Pokud se ČEZ chce chlubit snižováním emisí, musí staré uhelné elektrárny zavírat, ne je prodávat uhlobaronům.“

Upozorňuje také, že v současnosti ČEZ [plánuje prodej své nejšpinavější elektrárny Počerady](https://www.greenpeace.org/czech/tiskova-zprava/3016/cez-zabiji-davno-mrtve-elektrarny-chce-tim-zakryt-prodej-pocerad/), kterou by jinak musel uzavřít.

„Vláda bude mít vliv na to, jestli ČEZ prodá největší uhelnou elektrárnu Počerady firmě Vršanská uhelná Pavla Tykače. Pokud si ji nechá ČEZ, měl by ji podle svých plánů v nejbližších letech zavřít. Vršanská uhelná ji chce provozovat až do vyuhlení dolu někdy v roce 2050 nebo 2060,“ dodává.

<a name="kapitola3"></a>
## 2015: Prolomení limitů

Mluvčí ČEZ připomíná ještě jeden limit tuzemské energetiky.

„V každém případě v Česku dochází uhlí, domácí energetická surovina. Je jen otázka, kdy to nastane.“

Podle loňské [studie společnosti BP](https://www.bp.com/content/dam/bp/business-sites/en/global/corporate/pdfs/energy-economics/statistical-review/bp-stats-review-2018-full-report.pdf) se v Česku pod zemí ukrývá 1,1 gigatuny (miliard tun) černého a 2,5 gigatuny hnědého uhlí. Při současném tempu těžby by „to nastalo“ za osm desítek let.

Dosažitelné zásoby uhlí jsou ovšem podstatně menší. Jediná tuzemská firma, která provozuje černouhelné doly – OKD – v posledních letech kvůli ekonomickým výsledkům utlumuje těžbu. Tu čeká poslední desetiletí, jak na twitteru upozornil premiér Andrej Babiš.

<blockquote class="twitter-tweet" data-conversation="none" data-lang="cs"><p lang="cs" dir="ltr">Dál jsme jednali s OKD. I když bohužel kvůli nedávnému neštěstí na dole přišlo ve svém hospodaření o 800 milionů korun, navrhuje velké investice. Ty umožní pokračování těžby i po roce 2024. Až do roku 2027, možná i 2030. Podle vývoje ekonomické situace.</p>&mdash; Andrej Babiš (@AndrejBabis) <a href="https://twitter.com/AndrejBabis/status/1101121367074922497?ref_src=twsrc%5Etfw">28. února 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Pro českou energetiku nicméně není klíčovou surovinou černé uhlí – jako je tomu v sousedním Polsku – ale hnědé uhlí. Toho se sice skrývá pod zemí více, ale jeho těžbu omezují územní limity. V reakci na devastaci severních Čech je přijala už první porevoluční vláda v roce 1991 ([usnesení](https://kormoran.odok.cz/usneseni/usneseni_webtest.nsf/0/7DCED4838DD30F36C12571B6006B9ABD)), Topolánkův kabinet je v roce 2008 ještě mírně zpřísnil ([usnesení](https://apps.odok.cz/zvlady/usneseni/-/usn/2008/1176)). Boj o limity patří k politickému folklóru, až do roku 2015 ale vlády jejich prolomení odmítaly.

Podle zprávy Výzkumného ústavu hnědého uhlí zbývalo v roce 2012 před limity 846 milionů tun hnědého uhlí. V posledních letech české firmy vytěžily každoročně kolem 40 milionů tun. Je to o třetinu méně než v roce 2000, přesto jsou Češi desátí největší producenti hnědého uhlí na světě.

<wide><div class="chart" id="hnedeuhli" style="max-width: 100%"></div></wide>

Asi polovinu hnědého uhlí každoročně vytěží ČEZ skrz dceřinou společnost Severočeské doly, která provozuje doly Bílina a Nástup-Tušimice. Dalším velkým hráčem je Severní energetická podnikatele Pavla Tykače s doly ČSA a Vršany.

Obě společnosti se dostaly do centra zájmu v roce 2015, kdy kabinet Bohuslava Sobotky jednal o prolomení limitů na dolech Bílina a ČSA. Poprvé od revoluce některá vláda podpořila prolomení limitů: těžařům na Bílině [přihrála území s dalšími 150 miliony tun hnědého uhlí](https://oenergetice.cz/teplarenstvi/vse-o-tezebnich-limitech-prehledna-infografika/). Tím oddálila jeho uzavření z roku 2030 na roky 2040 až 2055.

Definitivní rozhodnutí o prolomení limitů zatím nepadlo. V současnosti [probíhá projednávání dopadů těžby na životní prostředí (EIA)](https://oenergetice.cz/teplarenstvi/kritikum-rozsireni-tezby-na-dole-bilina-se-nelibi-zpracovani-zameru/). Konečné rozhodnutí by mělo padnout v nejbližších týdnech. ČEZ každopádně s prolomením počítá, v příštím roce plánuje zvýšit těžbu hnědého uhlí o 8 procent.

Ještě výrazněji by prolomení pomohlo Severočeské energetice s dolem ČSA, to ale Sobotkův kabinet odmítl. Důl tak v současné době utlumuje těžbu a úplně skončit má v horizontu pěti let. Za limity dolu se ukrývá 750 milionů tun uhlí, které by při současné intenzitě těžby umožnily provoz do roku 2120. Jejich vytěžení by ale také znamenalo zničení obcí Horní Jiřetín a Černice.

<a name="kapitola4"></a>
## Křetínský, Tykač: „Věříme v roli uhlí na cestě k zelené budoucnosti“

Zatímco v Česku zásob hnědého uhlí rychle ubývá, v sousedním Německu se podle firmy BP skrývá pod zemí ještě 36 gigatun uhlí. Ty by při současném tempu těžby vystačily na dvě století. I proto je Německo cílem nákupů českých uhlobaronů.

Mezi nimi s odstupem vyčnívá Energetický a průmyslový holding Daniela Křetínského. Ten přes firmy LEAG, MIBRAG, Kraftwerk Mehrum, Helmstedter Revier a Saale Energie [ovládá sedm německých uhelných elektráren a šest hnědouhelných dolů](https://www.epholding.cz/prehled-spolecnosti/). Uhelné provozy skupuje i v dalších zemích – Česku, Slovensku, Spojeném království nebo Itálii – hlavní část jeho uhelné flotily ale kotví v Německu. Uhelné zdroje nicméně jsou jen částí Křetínského portfolia, přes firmu Slovenské elektrárne ovládá obě slovenské jaderné elektrárny a investuje také do obnovitelných zdrojů.

Křetínského holding je v současnosti druhým největším evropským znečišťovatelem: podle dat Europe Beyond Coal je zodpovědný za 9 procent emisí skleníkových plynů a 11 procent předčasných úmrtí v Evropě. Jeho podíl na vyrobené evropské elektřině je přitom pouze 6 procent.

Křetínský – ale ani Tykač – se netají svou uhelnou strategií. Chápou, že přinejmenším v západní části Evropy patří budoucnost obnovitelným zdrojům. Než ale nastane, chtějí vyždímat stárnoucí uhelné elektrárny. Spoléhají se také na to, že za jejich odstavení dostanou bohaté kompenzace.

„Naše hlavní aktivity spočívají v konvenčním způsobu výroby elektřiny, protože věříme v její roli při přechodu k zelenější budoucnosti,“ píše v překladu na svém anglickém webu Tykačova Severočeská energie. „Je přirozené být zodpovědný k lidstvu a matce Zemi,“ vzkazuje.

Místní to vidí jinak. Německá zelená poslankyně v braniborském parlamentu Heide Schinowsky Českému rozhlasu popsala situaci kolem hnědouhelného lomu společnosti LEAG, která patří do Křetínského holdingu.

„Myslím, že jakmile jim důl přestane vynášet, prostě zmizí,“ obává se poslankyně. „Děje se to všude v Evropě, proč by nemělo tady?“

LEAG by měl po ukončení těžby zaplatit za rekultivaci. Není ovšem jisté, [zda si firma odložila dost peněz](https://www.euro.cz/byznys/nemecke-greenpeace-utoci-na-eph-nasledky-po-tezbe-mohou-dopadnout-na-stat-1421343).

„LEAG by měl rekultivaci zaplatit,“ pokračuje Schinowsky. „Problém je, že německá vláda si to nepojistila, takže to ještě bude velký boj. Nakonec je docela pravděpodobné, že místo LEAG rekultivaci zaplatí vláda.“

Za zmínku stojí také některé zahraniční investice ČEZ. Mezi jeho investicemi jsou uhelné elektrárny Skorzów a Skawina v katovickém regionu nedaleko česko-polské hranice. Pravidelná smogová situace na Ostravsku, kterou české vlády rády svalují na Polsko, má tedy zčásti český původ.

U těžby černého uhlí je samozřejmě podstatná cena, za jakou je lze prodat – klesající ceny uhlí jsou jeden z důvodů, proč OKD postupně ukončuje těžbu. U hnědého uhlí, které tvoří většinu „krmiva“ pro tepelné elektrárny, je situace jiná: jeho přeprava na větší vzdálenosti se nevyplatí, proto také neexistuje globální trh s hnědým uhlím. Využívá se v místě, kde se těží. Většina hnědouhelných dolů je propojena s tepelnými elektrárnami, bez této vazby těžba hnědého uhlí ztrácí ekonomickou logiku.

Co se však mění a určuje směr energetických investic, jsou ceny elektřiny. Ty byly v posledních letech mimořádně nízké – to je také jeden z důvodů, proč země odmítaly stavět jaderné reaktory. Nyní ceny i v důsledku německého odstavení jaderných elektráren a postupného přechodu k obnovitelným zdrojům rostou.

„V nejbližších letech poklesne disponibilní výkon v klasických zdrojích, hlavně se to týká Německa,“ shrnuje současný vývoj Jiří Gavor, ředitel Asociace nezávislých dodavatelů energií. „Začátek uhelného exitu v Německu bude probíhat současně s koncem jaderných elektráren, takže na německém a středoevropském trhu bude určitě nedostatek výkonu. Myslím, že to může vyhnat ceny energie o něco výše.“

<wide><div class="chart" id="cenyenergie" style="max-width: 100%"></div></wide>

_* PPS neboli standard kupní síly odpovídá průměrné kupní síle jednoho Eura v Evropské unii_

Pro Česko a jeho energetickou strategii je podstatné, že evropský trh s elektřinou je silně propojený. Nedávná [publikace výzkumníků z brněnské Masarykovy univerzity](https://www.muni.cz/vyzkum/publikace/1376861) analyzuje, jaký vliv má německý přechod k obnovitelným zdrojům – _Energiewende_ – právě na český trh. Ukazuje, že gravitace osmkrát většího německého trhu de facto určuje české ceny energie. Představa prezidenta, že Německo za pár let budeme zachraňovat levnou elektřinou z uhlí, se tedy zdá málo pravděpodobná.

Pravděpodobnější je opačný scénář, kdy se naopak česká energetika bude muset přizpůsobit té německé. V první řadě bude muset upravit svou přenosovou soustavu. Německá síť zřejmě projde v souvislosti se zaváděním obnovitelných zdrojů mohutnými změnami; očekávají se například velkokapacitní baterie kvůli uchovávání přebytečné energie ze slunce a větru. Česká přenosová soustava se v takovém případě stane nekompatibilní.

<a name="kapitola5"></a>
## Externality: co firma vydělá, zaplatí stát na zdravotních nákladech

Nobelovu cenu za ekonomii loni získali američtí profesoři William Nordhaus a Paul Romer. První za „integraci klimatických změn do dlouhodobých makroekonomických analýz“, druhý za „integraci technologických změn do dlouhodobých makroekonomických analýz“. Odborný časopis [Foreign Policy přibližuje kontext](https://foreignpolicy.com/2018/12/06/the-nobel-prize-for-climate-catastrophe/).

Oba nobelisté upozorňují na selhání tržních mechanismů. Ty totiž nezohledňují negativní externality – například v podobě skleníkových plynů nebo okamžitých dopadů na životní prostředí a zdraví lidí. Navrhují, jak tyto externality vyčíslit.

Nordhaus rovnou vypočítává „optimální“ strategii pro boj se změnami klimatu: zavést daň kolem 30 dolarů za tunu uhlíku, v roce 2020 ji zvednout na 35 dolarů a kolem roku 2050 na 50 dolarů. Jeho model má ovšem podle expertů z klimatického panelu OSN jednu chybu: vychází z premisy, že je třeba zabránit tomu, aby se planeta do roku 2100 zahřála o 2,5 stupně. Takový scénář by měl podle klimatologů katastrofální následky. Nordhausovu uhlíkovou daň proto vidí spíš na hodnotě o řád vyšší, kolem 200 dolarů v roce 2020 – a doporučují její rapidní růst.

V Evropě mapuje skutečné náklady spalování uhlí už zmiňovaná studie [Poslední nádech](https://www.greenpeace.org/czech/publikace/1958/posledni-nadech-jak-energeticke-firmy-otravuji-v-evrope-vzduch/).

„Pouhých 91 uhelných společností mělo v roce 2016 na svědomí 7600 předčasných úmrtí, 3320 nových případů bronchitidy, 137 tisíc astmatických záchvatů a až 22 miliard eur v nákladech na zdravotní péči,“ čte studii hnutí Greenpeace.

Největší část externích nákladů – 60 až 79 procent – podle studie spolkly škody na lidském zdraví. Následovaly náklady způsobené změnou klimatu, které se pohybovaly mezi 11 až 30 procenty.

Analýza upozorňuje také na to, že náklady na zdravotní péči dosahují v Evropě zhruba stejné výše jako samotná cena elektřiny. Například německá energetická firma RWE způsobuje externí zdravotní náklady ve výši 48 eur za megawatthodinu, zatímco elektřinu prodává v Německu za 50 eur za megawatthodinu.

<a name="kapitola6"></a>
## Rozbité povolenky a ústup finačníků. „O čtyři stupně teplejší svět není pojistitelný“

Evropa se externality snaží vyčíslit a omezit od roku 2005, kdy spustila systém emisních povolenek. V současnosti v něm obchoduje 31 zemí a hlídá 45 procent unijních emisí klimatických plynů. Kromě energetických a průmyslových podniků sleduje také vnitrounijní lety.

Systém ovšem dosud emise skleníkových plynů příliš nesrazil. Důvodů je řada: do roku 2012 například většinu povolenek státy dostávaly zdarma. Dnes je sice energetické podniky musejí nakupovat, ale v průmyslové výrobě je stále zdarma 80 procent a v letectví 85 procent povolenek. [Výzkumníci Německého institutu pro ekonomický rozvoj spočítali](https://www.diw.de/documents/publikationen/73/diw_01.c.479330.de/diw_econ_bull_2014-08-5.pdf), že pro zvýšení elektřiny z uhlí by musela být cena za vypuštěnou tunu oxidu uhličitého kolem 40 eur. Ve skutečnosti byla ještě donedávna o řád nižší; na historickém minimu počátkem roku 2014 stála povolenka 2,81 eura.

V posledních letech unie systém probrala z kómatu; v reakci na extrémně nízké ceny v roce 2014 například odebrala z trhu 900 milionů nadbytečných povolenek. Cena povolenek proto v posledních dvou letech rostla, na konci března se například pohybovala na 21,5 eura. Dlouhodobě nefunkční systém ovšem řadu západoevropských zemí motivoal zavést vlastní uhlíkovou daň: v současné době jsou to Spojené království, Irsko, Dánsko, Švédsko, Finsko, Francie a Nizozemsko.

<h3>Ceny a objem emisních povolenek na trhu</h3>
<div><img style="width: 100%" src="https://www.irozhlas.cz/sites/default/files/uploader/xxx_190401-215810_jab.png"></div>
<p><i>Zdroj: EEX</i></p>

[Právníci z české společnosti Frank Bold nicméně upozorňují](http://en.frankbold.org/our-work/campaign/free-ets-allowances-coal-power-plants), že v postkomunistických zemích včetně Česka je systém kvůli povolenkám zdarma stále nefunkční.

Nové členské země totiž mohou – na rozdíl od západu – žádat o výjimku pro energetické podniky. Ty tak nadále dostávají bezplatné povolenky.

„Smysl výjimky byl poskytnout těmto zemím prostor pro modernizaci elektrárenského sektoru,“ vysvětluje Frank Bold na svém webu. „Polská, rumunská a česká vláda namísto toho počítají s masivními investicemi do uhelných provozů, jak těch v provozu, tak teprve připravovaných.“

„Plány těchto zemí míří jasně proti smyslu této výjimky. Pokračují v současném přístup k investicím, mají minimální snahu modernizovat energetiku a přeorientovat se na výrobu elektřiny s menšími emisemi uhlí.“

Změna přístupu k investicím tak přichází z nečekaného směru. Nejnověji začínají uhelnému byznysu komplikovat život banky a pojišťovny – hlavně ty se sídlem v západní Evropě. Řada z nich nově odmítá investice do uhlí nebo pojišťování uhelných elektráren a dolů; od počátku roku 2018 oznámily odklon od uhlí AXA, Deutsche Bank, DZ Bank, Allianz, HSBC, KBC (a její česká dcera ČSOB), Swiss Re, Generali, naposledy Uniqa.

V jejich případě jsou důvody odstoupení od uhlí obvykle pragmatické.

„Svět s teplotou o čtyři stupně Celsia vyšší už není pojistitelný,“ shrnul jejich přístup Kersten Becker, šéf monitoringu investic u společnosti Axa Německo.

<a name="kapitola7"></a>
## Premiér: „Je potřeba bojovat proti klimatické změně. Ale opatrně“

„Vláda teď musí rozhýbat obnovitelné zdroje,“ shrnuje svůj postoj Jiří Koželouh z Hnutí Duha. „Komise musí následovat německý příklad, kdy je ochrana klimatu důležitější než cokoliv jiného. Musí po vzoru německé uhelné komise řešit, kdy se Češi vzdají uhlí, ne jestli se ho vzdají.“

Praktická politika podle něj ale zůstává příliš při zemi.

„Na začátku ledna odeslalo ministerstvo průmyslu a obchodu do Bruselu plán, jak se mají rozšířit obnovitelné zdroje,“ pokračuje. „Ten mluví o růstu asi o 10 procent, přitom i státní energetická koncepce počítá s padesátiprocentním růstem v nejbližších deseti letech. Ambiciózní scénáře mluví o dvojnásobku.“

Naznačuje také cestu, jak obnovitelné zdroje prosadit.

„Podle politiků lidi nechtějí obnovitelné zdroje, protože nechtějí dražší elektřinu. Třetina Čechů je aktivně pro obnovitelé zdroje, jsou ochotní platit i vyšší cenou za elektřinu. Ukazuje se, že pokud jsou projekty obnovitelných zdrojů na úrovni obcí a místní se na nich mohou organizačně nebo majetkově podílet, lidi to přijímají a vidí v tom smysl,“ uzavírá Koželouh.

„Stejně jako v sousedních zemích to musí být politické rozhodnutí,“ souhlasí analytik Jiří Gavor. „Asi by byla hloupost odstavit sotva dokončenou supermoderní uhelnou elektrárnu v Ledvicích, já jsem spíš příznivcem podpory obnovitelných zdrojů, ale zároveň plynulého dožití klasické energetiky.“

„Česko určitě neodstaví všechny uhelné zdroje před rokem 2030,“ dodává. „Myslím, že poslední v provozu bude právě uhelný blok v Ledvicích. Ten se, pokud nebude vypnut v důsledku politického rozhodnutí, ekonomicky dožije horizontu někde za rokem 2040. Česká energetika bude ještě dlouho využívat jak uhelné, tak jaderné zdroje.“

Český premiér, co se týče rozhodování o obnovitelných zdrojích, má jasno. Ukázalo to jeho nedávné vystoupení na posledním evropském summitu, kde Evropská komise navrhla, že by měla unie být do roku 2050 klimaticky neutrální – tedy vyrábět jen tolik emisí skleníkových plynů, kolik dokáže z atmosféry odstranit. Česko spolu s Německem, Polskem a Maďarskem [návrh odmítlo](https://www.euractiv.com/section/climate-strategy-2050/news/summit-leak-reveals-eu-rift-on-climate-change/).

„Dá se říct, že nad klimatickou strategií jsme se zasekli, protože tam byly tendence ze strany některých členských zemí mít ambice nad úroveň Pařížské dohody,“ [řekl na mikrofon Andrej Babiš](https://tvnewsroom.consilium.europa.eu/videos?keywords=Babis). „A já říkám za Českou republiku, že nemůžeme neustále navyšovat naše ambice a cíle, pokud se nezapojí největší světoví producenti emisí.“

„Je potřeba bojovat za cíle klimatických změn, ale ne tak, abychom poškodili průmysl,“ uzavírá český premiér.
