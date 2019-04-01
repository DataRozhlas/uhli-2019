$("#tooltip").html("<h2><span class='f32'><span class='flag de'></span></span> Německo</h2><p><em>je určené datum odstoupení od uhlí</em></p><p>Konec uhelné energetiky do roku 2038 s možností posunout termín na rok 2035.<br><br>S uhelnými elektrárnami o výkonu 48 GW je Německo suverénně největším evropským konzumentem uhlí. V červnu 2018 se poprvé sešla vládní uhelná komise s cílem stanovit datum zavření všech uhelných provozů a navrhnout opatření, která by pomohla splnit závazky ohledně snížení emisí oxidu uhličitého pro rok 2020, vyplývající z Pařížské dohody. Letos v únoru dospěla k rozhodnutí uzavřít elektrárny do roku 2038 s možností posunout datum o tři roky dříve, pokud vše půjde dobře. Už v první fázi – do roku 2022 – ale Německo uzavře uhelné elektrárny o výkonu 12,5 GW. V letech 2023, 2026, 2029 a 2032 bude komise hodnotit dosavadní vývoj a může přehodnotit další termíny. Vláda kancléřky Merkelové nyní přichází s konkrétními kroky, které mají vést k uzavření uhelných provozů. První spolková země bez uhlí má být Berlín: v říjnu 2017 zemská vláda prosadila zákon, který znamená konec uhlí do roku 2030.<br><br>Nevládní organizace a část veřejnosti nicméně upozorňují, že současný plán by znamenal opětovné porušení Pařížské dohody v roce 2030, a požadují dřívější termín odstavení uhelných zdrojů.<p>");
Highcharts.mapChart('mapa', {
  chart: {
    map: 'custom/europe'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  credits: {
    enabled: false
  },
  legend: {
    margin: 0
  },
  plotOptions: {
    map: {
      allAreas: true,
      joinBy: ['name', 'n'],
      color: '{point.b}'
    }
  },
  tooltip: {
    formatter: function formatter() {
      $("#tooltip").html("<h2><span class='f32'><span class='flag " + this.point.properties["hc-key"] + "'>" + "</span></span> " + this.point.j + "</h2><p><em>" + this.series.name + "</em></p>" + this.point.t + "<p>");
      return false;
    }
  },
  series: [{
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#a50026";
    }),
    name: "plánuje stavbu dalších hnědouhelných elektráren",
    color: "#a50026",
    allAreas: true
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#006837";
    }),
    name: "je určené datum odstoupení od uhlí",
    color: "#006837",
    allAreas: false
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#d73027";
    }),
    name: "není určené datum a nic se neděje",
    color: "#d73027",
    allAreas: false
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#bababa";
    }),
    name: "žádné hnědouhelné el. tam nebyly a nejsou",
    color: "#bababa",
    allAreas: false
  }, {
    data: elektrarny.filter(function (elektrarna) {
      return elektrarna.b == "#fdae61";
    }),
    name: "je to ve hvězdách, ale něco se připravuje",
    color: "#fdae61",
    allAreas: false
  }]
});