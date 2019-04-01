document.getElementById("cez").style.display = "none";

function pridejOdstavec() {
  var x = document.getElementById("cez");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

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

var jadromin = [
  ['rok 2016', 29],
  ['rok 2040', 46]
]

var jadromax = [
  ['rok 2016', 29],
  ['rok 2040', 58]
]

var uhlimin = [
  ['rok 2016', 50],
  ['rok 2040', 11]
]

var uhlimax = [
  ['rok 2016', 50],
  ['rok 2040', 21]
]

var plynmin = [
  ['rok 2016', 4],
  ['rok 2040', 5]
]

var plynmax = [
  ['rok 2016', 4],
  ['rok 2040', 15]
]

var ozemin = [
  ['rok 2016', 11],
  ['rok 2040', 18]
]

var ozemax = [
  ['rok 2016', 11],
  ['rok 2040', 25]
]

var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];

$(function () {

Highcharts.chart('koncepce', {

    chart: {
        type: 'line'
    },

    title: {
        text: 'Jak se změní zdroje energie v ČR'
    },

    subtitle: {
        text: 'cílový podíl v roce 2040 je mezi oběma hodnotami'
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2016', 'rok 2040']
    },

    yAxis: {
        title: {
            text: 'podíl na vyrobené elektřině'
        },
        max: 60
    },

    tooltip: {
        formatter: function() {
            if (this.x == 'rok 2016') {
                if (this.series.name == 'jádro max') {
                    return '<b>jádro</b><br>' + 'podíl: ' + this.y + ' %';
                } else if (this.series.name == 'uhlí max') {
                    return '<b>uhlí</b><br>' + 'podíl: ' + this.y + ' %';
                } else if (this.series.name == 'zemní plyn max') {
                    return '<b>zemní plyn</b><br>' + 'podíl: ' + this.y + ' %';
                } else if (this.series.name == 'obnovitelné zdroje max') {
                    return '<b>obnovitelné zdroje</b><br>' + 'podíl: ' + this.y + ' %';
                } else {
                    return '<b>' + this.series.name + '</b><br>' + 'podíl: ' + this.y + ' %';
                }
            } else {
                if (this.series.name == 'jádro') {
                    return '<b>jádro</b><br>' + 'podíl: ' + this.y + ' % (1,6× nárůst)';
                } else if (this.series.name == 'jádro max') {
                    return '<b>jádro</b><br>' + 'podíl: ' + this.y + ' % (2× nárůst)';
                } else if (this.series.name == 'uhlí') {
                    return '<b>uhlí</b><br>' + 'podíl: ' + this.y + ' % (4,5× propad)';
                } else if (this.series.name == 'uhlí max') {
                    return '<b>uhlí</b><br>' + 'podíl: ' + this.y + ' % (2,4× propad)';
                } else if (this.series.name == 'zemní plyn') {
                    return '<b>zemní plyn</b><br>' + 'podíl: ' + this.y + ' % (1,3× nárůst)';
                } else if (this.series.name == 'zemní plyn max') {
                    return '<b>zemní plyn</b><br>' + 'podíl: ' + this.y + ' % (3,8× nárůst)';
                } else if (this.series.name == 'obnovitelné zdroje') {
                    return '<b>obnovitelné zdroje</b><br>' + 'podíl: ' + this.y + ' % (1,6× nárůst)';
                } else if (this.series.name == 'obnovitelné zdroje max') {
                    return '<b>obnovitelné zdroje</b><br>' + 'podíl: ' + this.y + ' % (2,3× nárůst)';
                }
            }
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: 'Zdroj: MPO, ERÚ',
        href: 'https://www.eru.cz/documents/10540/462820/Rocni_zprava_provoz_ES_2016.pdf/800e5a09-a58a-4a73-913f-abc30cda42a5'
    },

    series: [{
        name: 'jádro',
        data: jadromin,
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'jádro max',
        data: jadromax,
        marker: {
            symbol: 'circle'
        },
        color: colors[0],
        linkedTo: ':previous'
    }, {
        name: 'uhlí',
        data: uhlimin,
        marker: {
            symbol: 'circle'
        },
        color: colors[1]
    }, {
        name: 'uhlí max',
        data: uhlimax,
        marker: {
            symbol: 'circle'
        },
        color: colors[1],
        linkedTo: ':previous'
    }, {
        name: 'zemní plyn',
        data: plynmin,
        marker: {
            symbol: 'circle'
        },
        color: colors[4]
    }, {
        name: 'zemní plyn max',
        data: plynmax,
        marker: {
            symbol: 'circle'
        },
        color: colors[4],
        linkedTo: ':previous'
    }, {
        name: 'obnovitelné zdroje',
        data: ozemin,
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }, {
        name: 'obnovitelné zdroje max',
        data: ozemax,
        marker: {
            symbol: 'circle'
        },
        color: colors[3],
        linkedTo: ':previous'
    }]
});

Highcharts.chart('hnedeuhli', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Největší producenti hnědého uhlí'
    },

    xAxis: {
        type: 'category',
        categories: ['rok 2016', 'rok 2000']
    },

    yAxis: {
        title: {
            text: 'vytěžené hnědé uhlí'
        },
        labels: {
          format: '{value} mil. tun'
        },
        max: 200
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: 'Zdroj: knoema',
        href: 'https://knoema.com/EIAINTL2018May/international-energy-data-monthly-update'
    },

    series: [{
        name: 'Čína',
        data: [188.0, 76.3],
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'Německo',
        data: [171.5, 196.2],
        marker: {
            symbol: 'circle'
        },
        color: colors[1]
    }, {
        name: 'Rusko',
        data: [77.4, 54.3],
        marker: {
            symbol: 'circle'
        },
        color: colors[2]
    }, {
        name: 'Turecko',
        data: [70.2, 60.6],
        marker: {
            symbol: 'circle'
        },
        color: colors[3]
    }, {
        name: 'Indonésie',
        data: [67.7, 8.2],
        marker: {
            symbol: 'circle'
        },
        color: colors[4]
    }, {
        name: 'Spojené státy',
        data: [66.3, null],
        marker: {
            symbol: 'circle'
        },
        color: colors[5]
    }, {
        name: 'Austrálie',
        data: [63.6, 39.9],
        marker: {
            symbol: 'circle'
        },
        color: colors[6]
    }, {
        name: 'Polsko',
        data: [60.2, 74.8],
        marker: {
            symbol: 'circle'
        },
        color: colors[7]
    }, {
        name: 'Indie',
        data: [44.2, 25.4],
        marker: {
            symbol: 'circle'
        },
        color: colors[8]
    }, {
        name: 'Česko',
        data: [38.5, 53.7],
        marker: {
            symbol: 'circle'
        },
        color: colors[9]
    }]
});

Highcharts.chart('cenyenergie', {

    chart: {
        type: 'line'
    },

    title: {
        text: 'Cena energie pro domácnosti'
    },

    subtitle: {
        text: 'vybrané země'
    },

    xAxis: {
        categories: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
    },

    yAxis: {
        title: {
            text: 'cena za kWh, včetně daní'
        },
        labels: {
          format: '{value} PPS*'
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: 'Zdroj: Eurostat',
        href: 'http://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-052780_QID_-93F48FA_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;PRODUCT,L,Z,0;CONSOM,L,Z,1;UNIT,L,Z,2;TAX,L,Z,3;CURRENCY,L,Z,4;INDICATORS,C,Z,5;&zSelection=DS-052780INDICATORS,OBS_FLAG;DS-052780TAX,I_TAX;DS-052780CONSOM,4161903;DS-052780UNIT,KWH;DS-052780CURRENCY,EUR;DS-052780PRODUCT,6000;&rankName1=TAX_1_2_-1_2&rankName2=UNIT_1_2_-1_2&rankName3=CURRENCY_1_2_-1_2&rankName4=CONSOM_1_2_-1_2&rankName5=INDICATORS_1_2_-1_2&rankName6=PRODUCT_1_2_-1_2&rankName7=TIME_1_0_0_0&rankName8=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23'
    },

    series: [{
        name: 'Německo',
        data: [0.1978,0.2067,0.2121,0.2276,0.2433,0.2511,0.2777,0.2861,0.2832,0.2878,0.2866,0.2788],
        marker: {
            symbol: 'circle'
        },
        color: colors[0]
    }, {
        name: 'Portugalsko',
        data: [null, 0.1783,0.1791,0.1913,0.2014,0.2501,0.2669,0.2796,0.293,0.3018,0.2856,0.2759],
        marker: {
            symbol: 'circle'
        },
        color: colors[1]
    }, {
        name: 'Rumunsko',
        data: [null, 0.1906,0.1962,0.2052,0.2145,0.2171,0.2635,0.2521,0.2536,0.2598,0.2423,0.2662],
        marker: {
            symbol: 'circle'
        },
        color: colors[2],
        visible: false
    }, {
        name: 'Polsko',
        data: [null, 0.1849,0.2043,0.225,0.24,0.2496,0.2563,0.2451,0.2469,0.2461,0.254,0.2407],
        marker: {
            symbol: 'circle'
        },
        color: colors[3],
        visible: false
    }, {
        name: 'Slovensko',
        data: [null, 0.2143,0.2266,0.2274,0.2448,0.2513,0.2499,0.2262,0.226,0.2176,0.2156,0.2305],
        marker: {
            symbol: 'circle'
        },
        color: colors[4],
        visible: false
    }, {
        name: 'Česko',
        data: [0.1874,0.1933,0.2137,0.2106,0.2275,0.2368,0.247,0.2184,0.2203,0.2221,0.219,0.2225],
        marker: {
            symbol: 'circle'
        },
        color: colors[5]
    }, {
        name: 'Finsko',
        data: [null, 0.1041,0.1079,0.111,0.128,0.1284,0.1279,0.1257,0.1248,0.1261,0.1278,0.1297],
        marker: {
            symbol: 'circle'
        },
        color: colors[6],
        visible: false
    }, {
        name: 'Norsko',
        data: [null,0.1163,0.1169,0.1374,0.1402,0.1214,0.1178,0.1093,0.1115,0.1109,0.11,0.1202],
        marker: {
            symbol: 'circle'
        },
        color: colors[7]
    }, {
        name: 'Island',
        data: [null,null,null,null,null,0.1006,0.0937,0.095,0.0961,0.0989,0.097,0.0982],
        marker: {
            symbol: 'circle'
        },
        color: colors[8]
    }]
});

});