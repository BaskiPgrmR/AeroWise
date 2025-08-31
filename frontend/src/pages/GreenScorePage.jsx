import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Wind, Leaf, BarChart3, Globe } from "lucide-react";

export default function GreenScorePage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Green Score Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Air Quality */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <CardTitle>Air Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">78</p>
            <Badge variant="success">Good</Badge>
          </CardContent>
        </Card>

        {/* Green Cover */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-500" />
            <CardTitle>Green Cover</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">65%</p>
            <Badge variant="default">Above Avg</Badge>
          </CardContent>
        </Card>

        {/* Emission Levels */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-red-500" />
            <CardTitle>Emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1.4 Mt</p>
            <Badge variant="warning">Moderate</Badge>
          </CardContent>
        </Card>

        {/* Global Impact */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-purple-500" />
            <CardTitle>Global Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">72</p>
            <Badge variant="default">Stable</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
