"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Fish,
  Waves,
  Anchor,
  Ship,
  Info,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ComponentsShowcase() {
  const handleToast = (type: "success" | "error" | "info") => {
    switch (type) {
      case "success":
        toast.success("Success!", {
          description: "This is a success notification from Sonner.",
        });
        break;
      case "error":
        toast.error("Error!", {
          description: "This is an error notification from Sonner.",
        });
        break;
      case "info":
        toast.info("Info!", {
          description: "This is an info notification from Sonner.",
        });
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            NaFAA Components Showcase
          </h1>
          <p className="text-lg text-slate-600">
            All installed shadcn/ui components with Framer Motion animations
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="default">shadcn/ui</Badge>
            <Badge variant="secondary">Tailwind CSS v4</Badge>
            <Badge variant="outline">Framer Motion</Badge>
            <Badge>Sonner Toasts</Badge>
            <Badge variant="secondary">Lucide Icons</Badge>
            <Badge variant="outline">TanStack Query</Badge>
          </div>
        </motion.div>

        <Separator />

        {/* Alerts Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Alerts & Notifications</h2>
          <div className="grid gap-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert with an icon.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                This is a destructive alert for errors.
              </AlertDescription>
            </Alert>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => handleToast("success")}>
              Show Success Toast
            </Button>
            <Button variant="destructive" onClick={() => handleToast("error")}>
              Show Error Toast
            </Button>
            <Button variant="outline" onClick={() => handleToast("info")}>
              Show Info Toast
            </Button>
          </div>
        </motion.section>

        <Separator />

        {/* Buttons Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Buttons & Icons</h2>
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">
              <Fish className="mr-2 h-4 w-4" />
              Small with Icon
            </Button>
            <Button size="default">
              <Waves className="mr-2 h-4 w-4" />
              Default Size
            </Button>
            <Button size="lg">
              <Ship className="mr-2 h-4 w-4" />
              Large Button
            </Button>
          </div>
        </motion.section>

        <Separator />

        {/* Cards & Tabs Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Cards & Tabs</h2>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tab1">Fisheries</TabsTrigger>
              <TabsTrigger value="tab2">Aquaculture</TabsTrigger>
              <TabsTrigger value="tab3">Regulations</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Fish className="h-5 w-5" />
                    Fisheries Management
                  </CardTitle>
                  <CardDescription>
                    Sustainable fishing practices and regulations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Our fisheries management program ensures sustainable
                    practices across Liberia's coastal waters.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="tab2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Waves className="h-5 w-5" />
                    Aquaculture Development
                  </CardTitle>
                  <CardDescription>
                    Fish farming and aquaculture initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Promoting sustainable aquaculture practices for food
                    security.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="tab3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Anchor className="h-5 w-5" />
                    Regulations & Compliance
                  </CardTitle>
                  <CardDescription>
                    Laws and regulations for the fishing industry
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Understanding and enforcing fisheries regulations in
                    Liberia.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.section>

        <Separator />

        {/* Forms Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Form Components</h2>
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Contact Form Example</CardTitle>
              <CardDescription>
                Showcasing form inputs and selects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisheries">Fisheries</SelectItem>
                    <SelectItem value="aquaculture">Aquaculture</SelectItem>
                    <SelectItem value="licensing">Licensing</SelectItem>
                    <SelectItem value="enforcement">Enforcement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit</Button>
            </CardFooter>
          </Card>
        </motion.section>

        <Separator />

        {/* Accordion Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Accordion (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is NaFAA's mission?
              </AccordionTrigger>
              <AccordionContent>
                The National Fisheries and Aquaculture Authority is committed to
                sustainable fisheries management and aquaculture development in
                Liberia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I obtain a fishing license?
              </AccordionTrigger>
              <AccordionContent>
                You can apply for a fishing license through our online portal or
                visit our office in Monrovia. Required documents include valid
                ID and vessel registration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What are the fishing regulations?
              </AccordionTrigger>
              <AccordionContent>
                Fishing regulations include size limits, seasonal restrictions,
                and protected species. Visit our regulations page for complete
                details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>

        <Separator />

        {/* Avatars & Badges Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Avatars & Badges</h2>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Team Member</p>
              <div className="flex gap-2 mt-1">
                <Badge>Developer</Badge>
                <Badge variant="secondary">Team 2</Badge>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* Skeleton Loading Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Loading Skeletons</h2>
          <Card className="max-w-md">
            <CardHeader>
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </CardContent>
          </Card>
        </motion.section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center pt-8 pb-4"
        >
          <p className="text-sm text-slate-500">
            🎨 <strong>Team 2 Frontend</strong> - All components ready for
            development
          </p>
        </motion.div>
      </div>
    </div>
  );
}
