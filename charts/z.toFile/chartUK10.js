var chartUK9 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 150,

  "width": 150,

  "mark": {"type": "circle"},
  
    "transform": [
    {
      "window": [
        {"field": "newCasesByPublishDate",
         "op": "mean", 
         "as": "rolling_meanx"
         },
         {"field": "newDeaths28DaysByPublishDate",
         "op": "mean", 
         "as": "rolling_meany"
         }
      ],
      "frame": [-7, 1]
    }],

  "encoding": {
    "x": {"field": "rolling_meanx", "type": "quantitative", "title": "Date"},
  
    "y": {
      "field": "rolling_meany",
      "type": "quantitative",
      "title": null
    },
  
    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 2,
      "title": null
    },

    "color":{
      "timeUnit":"month",
      "field":"date",
      "type": "ordinal",
      "title":null
    },

    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "newDeaths28DaysByPublishDate",
        "type": "quantitative",
        "title": "Deaths",
        "format": ",.0f"
      },
      {
        "field": "newCasesByPublishDate",
        "type": "quantitative",
        "title": "Cases",
        "format": ",.0f"
      }
    ]
  },
  "resolve": {"scale": {"y": "independent", "x": "independent"}}
}
;

vegaEmbed('#visUK10', chartUK10);
