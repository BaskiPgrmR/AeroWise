import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Air Quality Index</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">42</p>
            <Badge variant="success">Good</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>CO₂ Emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1.2 Mt</p>
            <Badge variant="warning">This year</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Green Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">78</p>
            <Badge variant="default">Above average</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
