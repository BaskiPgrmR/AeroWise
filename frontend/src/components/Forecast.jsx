import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Forecast() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Forecast</h2>
      <Card>
        <CardHeader>
          <CardTitle>Environmental Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            Next week’s predicted air quality:
          </p>
          <ul className="space-y-1 text-sm">
            <li>🌤 Monday: AQI 45 (Good)</li>
            <li>🌤 Tuesday: AQI 60 (Moderate)</li>
            <li>🌧 Wednesday: AQI 55 (Moderate)</li>
            <li>☀️ Thursday: AQI 40 (Good)</li>
            <li>☁️ Friday: AQI 52 (Moderate)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
