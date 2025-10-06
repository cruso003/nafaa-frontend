"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  TrendingUp,
  Eye,
} from "lucide-react";

// Mock data - in real app, this would come from CMS/API
const newsArticles = {
  "1": {
    id: 1,
    title: "NaFAA Launches New Online Vessel Registration System",
    excerpt: "Fishermen can now register their vessels online through our new digital platform, reducing processing time from weeks to just days.",
    category: "Technology",
    date: "2024-12-15",
    author: "Communications Team",
    authorBio: "Official communications and public relations team at NaFAA",
    readTime: "5 min read",
    image: "🚢",
    views: 3450,
    content: `
      <p>The National Fisheries and Aquaculture Authority (NaFAA) is proud to announce the launch of its groundbreaking online vessel registration system, marking a significant milestone in the digital transformation of Liberia's fisheries sector.</p>

      <h2>A Game-Changer for Fishermen</h2>
      <p>The new system allows vessel owners to complete the entire registration process from the comfort of their homes or offices, eliminating the need for multiple trips to NaFAA offices. This innovation is expected to save fishermen both time and money while improving the efficiency of our registration services.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>24/7 Online Access:</strong> Submit applications anytime, anywhere with internet connection</li>
        <li><strong>Document Upload:</strong> Securely upload all required documents in digital format</li>
        <li><strong>Real-Time Tracking:</strong> Monitor application status through every step of the process</li>
        <li><strong>Digital Payments:</strong> Pay registration fees online via multiple payment methods</li>
        <li><strong>Instant Confirmation:</strong> Receive immediate confirmation and digital receipts</li>
      </ul>

      <h2>Reducing Processing Time</h2>
      <p>Under the old system, vessel registration could take anywhere from 2-4 weeks, requiring multiple in-person visits to NaFAA offices. The new online platform reduces this to just 5-7 business days, with expedited processing available for urgent cases.</p>

      <p>"This is a transformative moment for our fishing industry," said Director General Joseph Seekay. "By embracing digital technology, we're making it easier for fishermen to comply with regulations while reducing administrative burdens on our staff."</p>

      <h2>Security and Data Protection</h2>
      <p>The system incorporates advanced security measures to protect users' personal and vessel information. All data is encrypted and stored on secure servers, with regular backups to prevent data loss.</p>

      <h2>Training and Support</h2>
      <p>NaFAA is conducting training sessions for fishermen and vessel owners across the country to familiarize them with the new system. Support staff are available via phone, email, and live chat to assist with any questions or technical issues.</p>

      <h2>Looking Ahead</h2>
      <p>This launch is part of NaFAA's broader digital transformation strategy, which will eventually include online license applications, catch reporting systems, and a comprehensive fishermen's portal. The authority plans to roll out these additional services throughout 2025.</p>

      <p>For more information or to access the online vessel registration system, visit <a href="/services/vessel-registration">our services page</a> or contact our support team.</p>
    `,
  },
  "2": {
    id: 2,
    title: "Record-Breaking Tuna Catch Reported in Q4 2024",
    excerpt: "Liberian waters saw a 15% increase in yellowfin tuna catches this quarter, indicating healthy fish stocks and effective management policies.",
    category: "Industry News",
    date: "2024-12-12",
    author: "Research Division",
    authorBio: "NaFAA Research and Data Analysis Team",
    readTime: "4 min read",
    image: "🐟",
    views: 2890,
    content: `
      <p>The fourth quarter of 2024 has brought exceptional news for Liberia's fishing industry, with yellowfin tuna catches reaching record levels not seen in over a decade.</p>

      <h2>The Numbers</h2>
      <p>Preliminary data from NaFAA's catch reporting system shows that commercial fishermen landed approximately 4,200 metric tons of yellowfin tuna between October and December 2024, representing a 15% increase compared to the same period in 2023.</p>

      <h2>Contributing Factors</h2>
      <p>Several factors have contributed to this remarkable achievement:</p>
      <ul>
        <li><strong>Sustainable Management:</strong> Years of science-based quotas and seasonal restrictions have allowed tuna populations to recover</li>
        <li><strong>Favorable Ocean Conditions:</strong> Optimal water temperatures and nutrient availability created ideal conditions for tuna</li>
        <li><strong>Improved Technology:</strong> Better fishing equipment and fish-finding technology increased efficiency</li>
        <li><strong>Enforcement Success:</strong> Strict enforcement against illegal fishing protected stocks from overexploitation</li>
      </ul>

      <h2>Economic Impact</h2>
      <p>The surge in tuna catches has had significant economic benefits for coastal communities. With international tuna prices averaging $2,800 per metric ton, the total value of Q4 catches exceeds $11.7 million, providing substantial income for fishing families and export revenue for the country.</p>

      <h2>Sustainability Remains Priority</h2>
      <p>While celebrating these results, NaFAA emphasizes the importance of maintaining sustainable fishing practices. Dr. Sarah Johnson, Chief Fisheries Scientist, noted: "These record catches demonstrate that our sustainable management approach is working. However, we must remain vigilant and continue to base our policies on sound scientific data to ensure these stocks remain healthy for future generations."</p>

      <h2>Looking Forward</h2>
      <p>NaFAA plans to conduct comprehensive stock assessments in early 2025 to evaluate the long-term sustainability of current catch levels and adjust management measures if necessary.</p>
    `,
  },
  "3": {
    id: 3,
    title: "New Marine Protected Area Designated in Grand Bassa County",
    excerpt: "The government announces the creation of a 500 sq km marine protected area to safeguard critical breeding grounds for commercial fish species.",
    category: "Conservation",
    date: "2024-12-10",
    author: "Dr. Sarah Johnson",
    authorBio: "Chief Fisheries Scientist at NaFAA",
    readTime: "6 min read",
    image: "🌊",
    views: 4120,
    content: `
      <p>In a significant step toward marine conservation, the Government of Liberia, in partnership with NaFAA and Conservation International, has officially designated a new 500 square kilometer Marine Protected Area (MPA) off the coast of Grand Bassa County.</p>

      <h2>A Critical Breeding Ground</h2>
      <p>The newly designated MPA encompasses essential breeding and nursery grounds for several commercially important fish species, including grouper, snapper, and various reef fish. Scientific surveys conducted over the past three years identified this area as crucial for maintaining healthy fish populations throughout Liberian waters.</p>

      <h2>Protection Measures</h2>
      <p>The MPA will implement graduated protection zones:</p>
      <ul>
        <li><strong>Core No-Take Zone (200 sq km):</strong> Complete prohibition of all fishing activities to allow uninterrupted breeding</li>
        <li><strong>Buffer Zone (200 sq km):</strong> Limited artisanal fishing with strict gear restrictions</li>
        <li><strong>Sustainable Use Zone (100 sq km):</strong> Regulated fishing with seasonal closures during peak spawning periods</li>
      </ul>

      <h2>Community Involvement</h2>
      <p>Local fishing communities have been actively involved in the MPA planning process. Community leaders participated in consultative meetings and helped identify traditional fishing grounds to minimize impacts on livelihoods while maximizing conservation benefits.</p>

      <p>"We understand that protecting breeding grounds means more fish for our children and grandchildren," said Chief Elder Moses Tarr from a local fishing community. "We support this initiative because we've seen fish populations decline over the years, and we want to reverse that trend."</p>

      <h2>Enforcement and Monitoring</h2>
      <p>NaFAA will deploy dedicated patrol vessels and establish a monitoring station to ensure compliance with MPA regulations. Advanced surveillance technology, including satellite monitoring and vessel tracking systems, will help detect and prevent illegal fishing activities.</p>

      <h2>Expected Benefits</h2>
      <p>Based on experiences from similar MPAs in West Africa, scientists expect to see:</p>
      <ul>
        <li>30-50% increase in fish biomass within the protected area within 5 years</li>
        <li>Spillover effects benefiting adjacent fishing grounds</li>
        <li>Recovery of endangered and threatened species</li>
        <li>Enhanced resilience to climate change impacts</li>
      </ul>

      <h2>Regional Leadership</h2>
      <p>This designation establishes Liberia as a regional leader in marine conservation, with the country now protecting over 8% of its territorial waters. The MPA aligns with international commitments to protect 30% of ocean areas by 2030.</p>
    `,
  },
};

const relatedArticles = [
  {
    id: 2,
    title: "Record-Breaking Tuna Catch Reported in Q4 2024",
    category: "Industry News",
    date: "2024-12-12",
    image: "🐟",
  },
  {
    id: 4,
    title: "Training Program Graduates 150 Artisanal Fishers",
    category: "Training",
    date: "2024-12-08",
    image: "🎓",
  },
  {
    id: 5,
    title: "Illegal Fishing Vessel Arrested Off Liberian Coast",
    category: "Enforcement",
    date: "2024-12-05",
    image: "⚓",
  },
];

export default function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // In real app, fetch article by ID from API
  const { id } = use(params);
  const article = newsArticles[id as keyof typeof newsArticles] || newsArticles["1"];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = article.title;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002868] via-[#0066CC] to-[#002868] text-white py-12">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/news">
              <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-0">
                  {/* Article Image */}
                  <div className="relative h-96 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-9xl">
                    {article.image}
                  </div>

                  {/* Article Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="outline">{article.category}</Badge>
                      <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                        <Eye className="h-3 w-3 mr-1" />
                        {article.views.toLocaleString()} views
                      </Badge>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
                      {article.title}
                    </h1>

                    {/* Article Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 pb-6 mb-6 border-b">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {article.author}
                      </span>
                    </div>

                    {/* Article Body */}
                    <div
                      className="prose prose-lg max-w-none mb-8"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Share Buttons */}
                    <div className="pt-6 border-t">
                      <h3 className="font-semibold mb-3">Share this article:</h3>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Facebook className="mr-2 h-4 w-4" />
                            Facebook
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="mr-2 h-4 w-4" />
                            Twitter
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}>
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">About the Author</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{article.author}</p>
                      <p className="text-xs text-gray-500">NaFAA Staff</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{article.authorBio}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Related Articles</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {relatedArticles
                      .filter((related) => related.id !== article.id)
                      .slice(0, 3)
                      .map((related) => (
                        <Link key={related.id} href={`/news/${related.id}`}>
                          <div className="group cursor-pointer">
                            <div className="flex gap-3">
                              <div className="w-16 h-16 rounded bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-2xl flex-shrink-0">
                                {related.image}
                              </div>
                              <div className="flex-1 min-w-0">
                                <Badge variant="outline" className="text-xs mb-1">
                                  {related.category}
                                </Badge>
                                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-blue-600 transition-colors">
                                  {related.title}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  {formatDate(related.date)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <Card className="bg-gradient-to-br from-[#002868] to-[#0066CC] text-white">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Subscribe to receive the latest news and updates from NaFAA
                  </p>
                  <Button variant="secondary" className="w-full">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
