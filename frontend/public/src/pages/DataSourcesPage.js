import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Database, ExternalLink } from "lucide-react";

export default function DataSourcesPage() {
  const dataSources = [
    {
      name: "OpenAQ",
      type: "Air Quality Data",
      description: "Real-time and historical air quality measurements from government and research-grade monitors worldwide",
      url: "https://openaq.org",
      updateFrequency: "Hourly",
      coverage: "Global",
    },
    {
      name: "Google Earth Engine",
      type: "Satellite Imagery",
      description: "NDVI, land cover, and environmental monitoring data from Landsat and Sentinel satellites",
      url: "https://earthengine.google.com",
      updateFrequency: "Weekly",
      coverage: "Global",
    },
    {
      name: "EPA AirNow",
      type: "Air Quality Index",
      description: "Official air quality data and forecasts from the US Environmental Protection Agency",
      url: "https://airnow.gov",
      updateFrequency: "Hourly",
      coverage: "United States",
    },
    {
      name: "Urban Atlas",
      type: "Land Use Data",
      description: "Detailed mapping of urban land use and land cover for European cities",
      url: "https://land.copernicus.eu/local/urban-atlas",
      updateFrequency: "Every 6 years",
      coverage: "Europe",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="mb-2">Data Sources & APIs</h2>
        <p className="text-muted-foreground">
          Comprehensive environmental data from trusted global sources
        </p>
      </div>

      <div className="grid gap-6">
        {dataSources.map((source, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  {source.name}
                </CardTitle>
                <Badge variant="outline">{source.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{source.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm font-medium">Update Frequency</span>
                  <p className="text-sm text-muted-foreground">{source.updateFrequency}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Coverage</span>
                  <p className="text-sm text-muted-foreground">{source.coverage}</p>
                </div>
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit Source
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Processing & Quality</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Quality Assurance</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Automated data validation and anomaly detection</li>
                <li>• Cross-reference validation between multiple sources</li>
                <li>• Statistical outlier identification and flagging</li>
                <li>• Real-time data quality monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Processing Pipeline</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Hourly data ingestion and processing</li>
                <li>• Spatial interpolation for missing data points</li>
                <li>• Temporal smoothing and trend analysis</li>
                <li>• Machine learning-based gap filling</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
