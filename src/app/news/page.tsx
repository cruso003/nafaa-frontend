"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  Newspaper,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Ship,
  Fish,
  Waves,
  GraduationCap,
  Anchor,
  BarChart3,
  Handshake,
  Building2,
  Shell,
} from "lucide-react";

// Icon mapping helper
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Ship,
  Fish,
  Waves,
  GraduationCap,
  Anchor,
  BarChart3,
  Handshake,
  Building2,
  Shell,
};

const getIcon = (iconName: string, className?: string) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};

const newsArticles = [
  {
    id: 1,
    title: "NaFAA Launches New Online Vessel Registration System",
    excerpt: "Fishermen can now register their vessels online through our new digital platform, reducing processing time from weeks to just days.",
    category: "Technology",
    date: "2024-12-15",
    author: "Communications Team",
    readTime: "5 min read",
    icon: "Ship",
    featured: true,
    views: 3450,
  },
  {
    id: 2,
    title: "Record-Breaking Tuna Catch Reported in Q4 2024",
    excerpt: "Liberian waters saw a 15% increase in yellowfin tuna catches this quarter, indicating healthy fish stocks and effective management policies.",
    category: "Industry News",
    date: "2024-12-12",
    author: "Research Division",
    readTime: "4 min read",
    icon: "Fish",
    featured: true,
    views: 2890,
  },
  {
    id: 3,
    title: "New Marine Protected Area Designated in Grand Bassa County",
    excerpt: "The government announces the creation of a 500 sq km marine protected area to safeguard critical breeding grounds for commercial fish species.",
    category: "Conservation",
    date: "2024-12-10",
    author: "Dr. Sarah Johnson",
    readTime: "6 min read",
    icon: "Waves",
    featured: true,
    views: 4120,
  },
  {
    id: 4,
    title: "Training Program Graduates 150 Artisanal Fishers",
    excerpt: "NaFAA's capacity building initiative successfully trains 150 small-scale fishers in sustainable fishing practices and business management.",
    category: "Training",
    date: "2024-12-08",
    author: "Training Division",
    readTime: "3 min read",
    icon: "GraduationCap",
    featured: false,
    views: 1560,
  },
  {
    id: 5,
    title: "Illegal Fishing Vessel Arrested Off Liberian Coast",
    excerpt: "Coast Guard and NaFAA enforcement team successfully intercept and arrest foreign vessel engaged in illegal fishing activities.",
    category: "Enforcement",
    date: "2024-12-05",
    author: "Enforcement Team",
    readTime: "4 min read",
    icon: "Anchor",
    featured: false,
    views: 5230,
  },
  {
    id: 6,
    title: "Fish Export Revenue Increases by 22% in 2024",
    excerpt: "Strong international demand and improved quality control measures drive significant growth in fish export earnings this year.",
    category: "Economic Report",
    date: "2024-12-03",
    author: "Economics Unit",
    readTime: "5 min read",
    icon: "BarChart3",
    featured: false,
    views: 2340,
  },
  {
    id: 7,
    title: "Partnership with FAO to Strengthen Fisheries Data Collection",
    excerpt: "New collaboration aims to modernize catch reporting systems and improve accuracy of fisheries statistics across the country.",
    category: "Partnership",
    date: "2024-12-01",
    author: "International Relations",
    readTime: "4 min read",
    icon: "Handshake",
    featured: false,
    views: 1890,
  },
  {
    id: 8,
    title: "Community Fishing Centers to Open in Three Counties",
    excerpt: "Government invests in infrastructure to support artisanal fishing communities with modern facilities and cold storage.",
    category: "Infrastructure",
    date: "2024-11-28",
    author: "Development Team",
    readTime: "5 min read",
    icon: "Building2",
    featured: false,
    views: 2670,
  },
  {
    id: 9,
    title: "Seasonal Fishing Ban Announced to Protect Spawning Stocks",
    excerpt: "Temporary closure of shrimp fishing zones during peak breeding season ensures sustainable stock levels for future seasons.",
    category: "Regulation",
    date: "2024-11-25",
    author: "Policy Division",
    readTime: "3 min read",
    icon: "Shell",
    featured: false,
    views: 3120,
  },
];

const categories = [
  "All Categories",
  "Technology",
  "Industry News",
  "Conservation",
  "Training",
  "Enforcement",
  "Economic Report",
  "Partnership",
  "Infrastructure",
  "Regulation",
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");

  const filteredArticles = newsArticles
    .filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "popular") return b.views - a.views;
      return a.title.localeCompare(b.title);
    });

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const latestArticle = featuredArticles[0];
  const secondaryFeatured = featuredArticles.slice(1, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean to-nafaa-ocean text-white py-20">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Newspaper className="mr-2 h-4 w-4" />
              News & Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Latest News & Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Stay updated with the latest news, announcements, and developments from NaFAA
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-nafaa-ocean mb-6">Featured Stories</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main Featured Article */}
            <Link href={`/news/${latestArticle.id}`}>
              <Card className="h-full hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center overflow-hidden">
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {getIcon(latestArticle.icon, "w-32 h-32 text-white")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-red-100 text-red-700 border-red-300">Featured</Badge>
                      <Badge variant="outline">{latestArticle.category}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {latestArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{latestArticle.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(latestArticle.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {latestArticle.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {latestArticle.author}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Secondary Featured Articles */}
            <div className="space-y-6">
              {secondaryFeatured.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="relative w-32 flex-shrink-0 bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center">
                          <div className="group-hover:scale-110 transition-transform duration-500">
                            {getIcon(article.icon, "w-16 h-16 text-white")}
                          </div>
                        </div>
                        <div className="p-4 flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{article.category}</Badge>
                          </div>
                          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(article.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="title">Title (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* All News Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-nafaa-ocean">
              {searchQuery || selectedCategory !== "All Categories"
                ? `Results (${filteredArticles.length})`
                : "All News"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/news/${article.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardHeader>
                      <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                        <div className="group-hover:scale-110 transition-transform duration-500">
                          {getIcon(article.icon, "w-24 h-24 text-white")}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        {article.views > 3000 && (
                          <Badge className="bg-orange-100 text-orange-700 border-orange-300">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="w-full group-hover:bg-blue-50">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <Card className="py-12">
              <CardContent>
                <div className="text-center">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-blue-100">
                    Get the latest news and updates delivered directly to your inbox
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
