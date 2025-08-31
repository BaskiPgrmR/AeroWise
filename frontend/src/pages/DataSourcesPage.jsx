import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Database, Cloud, Satellite } from "lucide-react";

export default function DataSourcesPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Data Sources</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            <CardTitle>Government Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Official air quality, traffic, and emissions datasets from
              environmental agencies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-green-500" />
            <CardTitle>Weather APIs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Real-time weather patterns including temperature, wind speed,
              humidity, and rainfall data.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-2">
            <Satellite className="h-5 w-5 text-purple-500" />
            <CardTitle>Satellite Imagery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Satellite-based vegetation and pollution mapping for green cover
              and emissions tracking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
