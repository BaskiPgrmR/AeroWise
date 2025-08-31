import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Info, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">About AeroWise</h2>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-500" />
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            AeroWise provides real-time environmental monitoring, insights, and
            recommendations to help cities and organizations reduce emissions
            and improve sustainability.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Users className="h-5 w-5 text-green-500" />
          <CardTitle>Who We Serve</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            From government agencies and urban planners to citizens and
            researchers, AeroWise empowers decision-making for a greener future.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-purple-500" />
          <CardTitle>Global Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Our vision is to create a global platform that enables
            data-driven solutions for cleaner air and sustainable development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
