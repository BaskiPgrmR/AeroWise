import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Recommender() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Recommender</h2>
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Consider planting trees in high-traffic areas to reduce CO₂.</li>
            <li>Encourage cycling and public transport to cut down emissions.</li>
            <li>Monitor construction zones closely for dust pollution.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

