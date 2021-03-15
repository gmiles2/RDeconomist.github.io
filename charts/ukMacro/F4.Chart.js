var ChartF4 =

{

  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F4) Current UK budget deficit (% GDP)",

   "title": {
    "text": "UK current budget deficit (% of GDP), 1956-2020",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F4.DataHub.FiscalCurrentBudgetDefPerDGP.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "mediumvioletred"
  },
  "encoding": {
    "x": {
      "field": "Date",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false,
        "labelSeparation": 20,
        "ticks": false
      }
    },
    "y": {
      "field": "Value",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}
    },
    
    "tooltip": [
      {"field": "Date", "type": "temporal"},
      {
        "field": "Value",
        "title": "Current budget deficit (% of GDP)",
        "type": "quantitative"
      }
    ]
  }
};

vegaEmbed('#ChartF4', ChartF4, {"actions": false});

