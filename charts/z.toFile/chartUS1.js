var chartUS1 =  { "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Various US measures state by state",

  "data": {"url": "https://raw.githubusercontent.com/RDeconomist/vega/master/US%20states2.csv"},

  "mark": {
    "type":"circle",
    "size":300},
  
  "height": 350,
  
  "width": "container",

  "encoding": {

    "x": {
      "field": "Med income", 
      "type": "quantitative",
      "scale": {"domain": [40000, 80000]},
      "title":"Median income, $"
      },

    "y": {
      "field": "Firearm deaths", 
      "type": "quantitative",
      "title":"Firearm deaths, per 100k"
      },

    "color": {
      "field": "Division", 
      "type": "ordinal",
      "scale": {"scheme": "set1"},
      "legend": {"orient":"top"},
      "title":null
      },

      "tooltip": [
      {"field": "State", "type": "ordinal", "title": "State"}
      ]
  
  }
};

vegaEmbed('#visUS1', chartUS1);
