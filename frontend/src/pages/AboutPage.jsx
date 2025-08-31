import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Satellite, BarChart3, Leaf, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <div>
        <h2 className="mb-2">About AeroWise</h2>
        <p className="text-muted-foreground">
          Environmental intelligence for sustainable urban development
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Mission */}
            <div>
              <h3 className="mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                AeroWise empowers urban planners, real estate investors, and citizens with
                comprehensive environmental intelligence. By combining cutting-edge
                satellite data, AI-powered forecasting, and real-time monitoring, we help
                communities make informed decisions that promote sustainable development
                and public health.
              </p>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="mb-3">Who We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Urban Planners</h4>
                  <p className="text-sm text-muted-foreground">
                    Make data-driven decisions for sustainable city development and
                    environmental policy
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Real Estate Investors</h4>
                  <p className="text-sm text-muted-foreground">
                    Evaluate properties based on environmental quality and future
                    sustainability trends
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Citizens</h4>
                  <p className="text-sm text-muted-foreground">
                    Access transparent environmental data to make informed decisions
                    about where to live and work
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="mb-3">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <Satellite className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Satellite Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time environmental data from global satellite networks
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium">AI Forecasting</h4>
                    <p className="text-sm text-muted-foreground">
                      Predictive analytics for air quality and environmental trends
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Leaf className="w-5 h-5 text-emerald-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Green Scoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive environmental health assessment for any location
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Global Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Environmental intelligence for cities worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Google Earth Engine</Badge>
                <Badge variant="outline">Prophet ML</Badge>
                <Badge variant="outline">LSTM Networks</Badge>
                <Badge variant="outline">OpenAQ API</Badge>
                <Badge variant="outline">Satellite Imagery</Badge>
                <Badge variant="outline">Real-time Processing</Badge>
                <Badge variant="outline">REST APIs</Badge>
                <Badge variant="outline">React Dashboard</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Contact & Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Email: contact@aerowise.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Sustainability Ave, Green City, GC 12345</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Resources</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-3 h-3" />
                  API Documentation
                </a>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-3 h-3" />
                  Developer Portal
                </a>
                <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-3 h-3" />
                  Support Center
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
