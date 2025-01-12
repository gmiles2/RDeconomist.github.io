var chartUK2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 90,
  "width": 150,
  "mark": {"type": "bar"},
  
  "transform": [
    {
      "window": [
        {"field": "newCasesBySpecimenDate", "op": "mean", "as": "rolling_mean"}
      ],
      "frame": [-7, 7]
    },

    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2020, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    "y": {
      "field": "newCasesBySpecimenDate",
      "type": "quantitative",
      "title": "New cases"
    },
    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 2,
      "title": "Region"
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "rolling_mean",
        "type": "quantitative",
        "title": "Cases, 7-day average",
        "format":",.0f"
      },
      {
        "field": "newCasesBySpecimenDate",
        "type": "quantitative",
        "title": "Cases",
        "format":",.0f"
      }
    ],
    "color": {
      "field": "areaName",
      "type": "nominal",
      "legend": 0,
      "scale": {
        "domain": [
          "East Midlands",
          "East of England",
          "London",
          "North East",
          "North West",
          "South East",
          "South West",
          "West Midlands",
          "Yorkshire and The Humber"
        ],
        "range": [
          "orange",
          "red",
          "red",
          "orange",
          "orange",
          "red",
          "orange",
          "orange",
          "orange"
        ]
      }
    }
  }
};

vegaEmbed('#visUK2', chartUK2);
