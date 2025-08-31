import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Wind, Leaf, BarChart3, Globe } from "lucide-react";

export default function GreenScorePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="mb-2">Green Score Methodology</h2>
        <p className="text-muted-foreground">
          Understanding how we calculate environmental impact scores for urban plots
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Air Quality */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-blue-500" />
              Air Quality Component (40%)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>PM2.5 Levels</span>
                <Badge variant="outline">25%</Badge>
              </div>
              <div className="flex justify-between">
                <span>PM10 Levels</span>
                <Badge variant="outline">10%</Badge>
              </div>
              <div className="flex justify-between">
                <span>NO2 Concentration</span>
                <Badge variant="outline">3%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Ozone Levels</span>
                <Badge variant="outline">2%</Badge>
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                Based on WHO air quality guidelines and local environmental standards
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Vegetation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-500" />
              Vegetation Index (35%)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>NDVI Score</span>
                <Badge variant="outline">20%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Tree Coverage</span>
                <Badge variant="outline">10%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Green Space Proximity</span>
                <Badge variant="outline">3%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Urban Forest Health</span>
                <Badge variant="outline">2%</Badge>
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                Satellite-derived vegetation indices and ground-truth validation
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Factors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              Environmental Factors (15%)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Noise Pollution</span>
                <Badge variant="outline">5%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Water Quality</span>
                <Badge variant="outline">4%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Soil Contamination</span>
                <Badge variant="outline">3%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Climate Resilience</span>
                <Badge variant="outline">3%</Badge>
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                Multi-source environmental monitoring and risk assessment
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Urban Context */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-500" />
              Urban Context (10%)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Transit Accessibility</span>
                <Badge variant="outline">4%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Walkability Score</span>
                <Badge variant="outline">3%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Development Density</span>
                <Badge variant="outline">2%</Badge>
              </div>
              <div className="flex justify-between">
                <span>Future Planning</span>
                <Badge variant="outline">1%</Badge>
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                Urban planning data and sustainable development indicators
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score Interpretation */}
      <Card>
        <CardHeader>
          <CardTitle>Score Interpretation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">80-100</div>
              <div className="font-medium text-green-800 dark:text-green-200">Excellent</div>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Outstanding environmental quality with minimal health risks
              </p>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-2">60-79</div>
              <div className="font-medium text-yellow-800 dark:text-yellow-200">Good</div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                Good environmental conditions with minor concerns
              </p>
            </div>
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">0-59</div>
              <div className="font-medium text-red-800 dark:text-red-200">Poor</div>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                Environmental challenges requiring attention
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
