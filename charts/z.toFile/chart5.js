var Chart5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Covid-19 data, from ECDC",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/vega/master/db_ecdc_wide.csv"
  },


  "selection": {
      "Country": {
      "type": "single",
      "fields": ["country"],
      "bind": {
        "input": "select",
        "options": [null, "UK", "France", "Germany", "Portugal", "Spain", "Italy", "Ireland", "Austria", "Switzerland"],
        "name": "Country"
      }
    }
  },


  "transform": [
    {"filter": {"selection": "Country"}},
    {"filter": {"field": "country","oneOf": ["UK", "France", "Germany", "Portugal", "Spain", "Italy", "Ireland", "Austria", "Switzerland"]
      }
    }
  ],
     

  "encoding": {
    "x": {
      "field": "cases_cml",
      "type": "quantitative",
      "axis": {
        "title": "Cases",
        "grid": false,
        "tickCount": 14,
        "labelOverlap": "greedy"
      }
    },
    "y": {
      "field": "deaths_cml",
      "type": "quantitative",
      "axis": {"title": "Deaths", "grid": false},
      "xxscale": {"domain": [-0.05, 0.02]},
      "format": ".2f"
    },
    "color": {
      "field": "country",
      "type": "nominal",
      "scale": {"scheme": "inferno"}
    },
    "size": {"condition": {"selection": "Country", "value": 30}, "value": 5},
    "tooltip": [
      {"field": "date2", "type": "temporal", "title":"Date"},
      {"field": "country", "type": "nominal"}
    ]
  },
  "title": {
    "text": "COVID-19 - CASES AND DEATHS, WITH COUNTRY SELECTOR",
    "anchor": "start",
    "color": "black"
  },
  "config": {"background": "#FcFdFd"},
  "height": 400,
  "width": 600,
  "mark": {
    "type": "circle",
    "opacity": "1",
    "interpolate": "",
    "color": "red",
    "point": {"color": "black", "size": "0"}
  }
};

vegaEmbed('#vis5', Chart5);
