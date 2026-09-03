"use client";

import React, { useState, useTransition } from "react";
import {
  Zap,
  Share2,
  AlertTriangle,
  CheckCircle2,
  Info,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Globe,
  ImageIcon,
  ExternalLink,
  Flame,
} from "lucide-react";
import { CircularScore } from "@/components/ui/CircularScore";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AuditResult {
  url: string;
  domain: string;
  timestamp: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    lcp: { value: string; score: number; label: string };
    fcp: { value: string; score: number; label: string };
    cls: { value: string; score: number; label: string };
    tbt: { value: string; score: number; label: string };
    speedIndex: { value: string; score: number; label: string };
    ttfb: { value: string; score: number; label: string };
  };
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: string;
    twitterCard: string;
    hasOgImage: boolean;
    hasOgTitle: boolean;
    hasOgDescription: boolean;
  };
  seoMeta: {
    title: string;
    description: string;
    hasMetaDescription: boolean;
    hasTitle: boolean;
    titleLength: number;
    descriptionLength: number;
    canonical: string;
    hasCanonical: boolean;
    robots: string;
    favicon: string;
    hasViewport: boolean;
  };
  pageStats: {
    ttfb: string;
    isHttps: boolean;
    h1Count: number;
    h2Count: number;
    totalImages: number;
    imagesMissingAlt: number;
    totalScripts: number;
    htmlSizeKb: number;
  };
  diagnostics: Array<{
    id: string;
    category: "performance" | "seo" | "images" | "accessibility";
    severity: "critical" | "warning" | "good";
    title: string;
    description: string;
    impact: string;
  }>;
}

const SAMPLE_SITES = [
  { label: "Stripe", url: "stripe.com" },
  { label: "Linear", url: "linear.app" },
  { label: "Airbnb", url: "airbnb.com" },
  { label: "Github", url: "github.com" },
];

export function SiteAudit() {
  const ref = useScrollReveal();
  const [inputUrl, setInputUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [auditData, setAuditData] = useState<AuditResult | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [, startTransition] = useTransition();

  const scanStepsList = [
    "Connecting to server & testing SSL response time...",
    "Measuring Google Core Web Vitals (LCP, CLS, FCP)...",
    "Extracting Open Graph social cards & image tags...",
    "Analyzing SEO heading structure & script weight...",
    "Compiling actionable optimization checklist...",
  ];

  const handleRunAudit = async (targetUrlToScan?: string) => {
    const rawUrl = targetUrlToScan || inputUrl;
    if (!rawUrl.trim()) {
      setError("Please enter a website URL to audit.");
      return;
    }

    setError(null);
    setIsLoading(true);
    setScanStep(0);
    setAuditData(null);

    const stepInterval = setInterval(() => {
      setScanStep((prev) => (prev < scanStepsList.length - 1 ? prev + 1 : prev));
    }, 700);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: rawUrl }),
      });

      const data = await res.json();
      clearInterval(stepInterval);

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to analyze website");
      }

      startTransition(() => {
        setAuditData(data);
        setIsLoading(false);
      });
    } catch (err: unknown) {
      clearInterval(stepInterval);
      setIsLoading(false);
      setError(err instanceof Error ? err.message : "Could not complete audit. Please check the URL.");
    }
  };

  const filteredDiagnostics =
    auditData?.diagnostics.filter((item) => {
      if (activeCategory === "all") return true;
      return item.category === activeCategory;
    }) || [];

  const averageScore = auditData
    ? Math.round(
        (auditData.scores.performance +
          auditData.scores.accessibility +
          auditData.scores.bestPractices +
          auditData.scores.seo) /
          4
      )
    : 0;

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-14">
        
        {/* Section Header (Centered) */}
        <div className="flex flex-col items-center text-center max-w-[880px] mx-auto mb-10">
          <div className="reveal mb-3">
            <span className="label-eyebrow">Instant Website Audit</span>
          </div>

          <h2 className="reveal reveal-delay-1 text-section-heading mb-5">
            Is your website losing clients before it even loads?
          </h2>

          <p className="reveal reveal-delay-2 text-[19px] md:text-[21px] text-[#77736B] leading-[1.6] max-w-[760px]">
            Put in your domain name. We'll run a real-time <strong>Lighthouse & Speed Audit</strong> to benchmark Core Web Vitals, check for missing Open Graph social cards, and pinpoint SEO bottlenecks.
          </p>

          {/* Centered URL Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRunAudit();
            }}
            className="reveal reveal-delay-3 w-full mt-10 max-w-[700px]"
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-3 p-2 bg-[#FFFDF9] rounded-[var(--radius-md)] border border-[#D8D4CB] focus-within:border-[#18202A] transition-all">
              <div className="flex items-center flex-1 px-4 gap-3 min-w-0">
                <Globe className="w-5 h-5 text-[#9A968E] shrink-0" />
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your website URL (e.g. yourbusiness.com)"
                  className="w-full bg-transparent text-[16px] md:text-[17px] text-[#18202A] placeholder:text-[#9A968E]/70 outline-none font-sans py-3"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary shrink-0 justify-center text-[15px] px-8 py-3.5 disabled:opacity-75"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#C99A3A]" />
                    <span>Run Audit</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Sample Presets */}
            <div className="flex items-center justify-center flex-wrap gap-2.5 mt-4 text-[14px] text-[#77736B]">
              <span className="text-[12px] uppercase tracking-[0.08em] font-semibold text-[#9A968E]">Try an example:</span>
              {SAMPLE_SITES.map((sample) => (
                <button
                  key={sample.url}
                  type="button"
                  onClick={() => {
                    setInputUrl(sample.url);
                    handleRunAudit(sample.url);
                  }}
                  className="px-3.5 py-1.5 rounded-[var(--radius-sm)] bg-[#F0EDE6] text-[#18202A] hover:bg-[#18202A] hover:text-[#F7F5F0] border border-[#D8D4CB] transition-all text-[13px] font-medium cursor-pointer"
                >
                  {sample.label}
                </button>
              ))}
            </div>

            {error && (
              <div className="mt-4 p-4 bg-[#FAF0EC] border border-[#EBD0C6] text-[#9A4C32] text-[15px] rounded-[var(--radius-md)] flex items-center gap-3 justify-center">
                <AlertTriangle className="w-5 h-5 shrink-0 text-[#B9684A]" />
                <span>{error}</span>
              </div>
            )}
          </form>

          {/* Goal Statement 1-Liner */}
          <div className="mt-10 pt-7 border-t border-[#D8D4CB]/60 text-center max-w-[620px] w-full mx-auto">
            <p className="font-serif text-[21px] md:text-[23px] text-[#18202A] leading-snug mb-1.5 font-medium">
              The goal is simple: more customers and less stress.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#77736B] leading-[1.6]">
              I handle the digital so you can focus on your business.
            </p>
          </div>
        </div>

        {/* Loading Progress State */}
        {isLoading && (
          <div className="max-w-[680px] mx-auto my-12 p-10 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB] text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-[#F0EDE6] text-[#18202A] mb-5">
              <Zap className="w-6 h-6 text-[#C99A3A]" />
            </div>
            <h3 className="font-serif text-[24px] text-[#18202A] mb-3">
              Auditing {inputUrl}...
            </h3>
            <p className="text-[16px] text-[#77736B] mb-6">
              {scanStepsList[scanStep]}
            </p>

            {/* Step Progress Bar */}
            <div className="w-full h-2 bg-[#E8E5DE] rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-[#C99A3A] transition-all duration-500 rounded-full"
                style={{ width: `${((scanStep + 1) / scanStepsList.length) * 100}%` }}
              />
            </div>
            <span className="text-[13px] text-[#9A968E] font-mono">
              Step {scanStep + 1} of {scanStepsList.length}
            </span>
          </div>
        )}

        {/* Audit Results Dashboard */}
        {auditData && !isLoading && (
          <div className="space-y-14 mt-6">
            
            {/* Header info bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-[#FFFDF9] rounded-[var(--radius-md)] border border-[#D8D4CB] gap-4">
              <div className="flex items-center gap-4">
                {auditData.seoMeta.favicon && (
                  <img
                    src={auditData.seoMeta.favicon}
                    alt="Favicon"
                    className="w-10 h-10 rounded-[var(--radius-sm)] bg-[#F7F5F0] p-1.5 border border-[#D8D4CB] object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                )}
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-serif text-[22px] font-bold text-[#18202A]">
                      {auditData.domain}
                    </h3>
                    <a
                      href={auditData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9A968E] hover:text-[#18202A]"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </a>
                  </div>
                  <p className="text-[14px] text-[#77736B] mt-0.5">
                    Audited {new Date(auditData.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Powered by Google Lighthouse & Core Web Vitals
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRunAudit()}
                className="btn-secondary py-2.5 px-5 text-[14px]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Re-run Audit</span>
              </button>
            </div>

            {/* 01. Lighthouse Scores Grid featuring Overall Score Average */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="label-eyebrow block mb-1">
                    01 / Lighthouse Category Scores & Overall Average
                  </span>
                  <h3 className="font-serif text-[24px] text-[#18202A]">
                    Overall Site Health: <span className="font-bold">{averageScore}/100</span>
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-[#77736B]">
                  <span className="px-2 py-0.5 rounded bg-[#EDF7EE] text-[#226327] font-medium border border-[#CBE5CF]">90-100</span>
                  <span className="px-2 py-0.5 rounded bg-[#FAF5EC] text-[#8C661A] font-medium border border-[#EBD8B2]">50-89</span>
                  <span className="px-2 py-0.5 rounded bg-[#FAF0EC] text-[#9A4C32] font-medium border border-[#EBD0C6]">0-49</span>
                </div>
              </div>

              {/* 5-Column Grid with Overall Average featured */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <CircularScore
                  score={averageScore}
                  label="Overall Score"
                  isFeatured={true}
                />
                <CircularScore
                  score={auditData.scores.performance}
                  label="Performance"
                />
                <CircularScore
                  score={auditData.scores.accessibility}
                  label="Accessibility"
                />
                <CircularScore
                  score={auditData.scores.bestPractices}
                  label="Best Practices"
                />
                <CircularScore
                  score={auditData.scores.seo}
                  label="SEO & Search"
                />
              </div>
            </div>

            {/* 02. Speed & Core Web Vitals Breakdown */}
            <div>
              <span className="label-eyebrow block mb-2">
                02 / Core Web Vitals & Speed Metrics (GTmetrix / Lighthouse)
              </span>
              <h3 className="font-serif text-[22px] text-[#18202A] mb-5">
                Load speed & responsiveness benchmarks
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {/* LCP */}
                <div className="p-5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB]">
                  <span className="text-[12px] uppercase tracking-[0.06em] text-[#9A968E] font-semibold block mb-1.5">
                    LCP (Largest Paint)
                  </span>
                  <span className="font-serif text-[26px] text-[#18202A] font-bold block">
                    {auditData.metrics.lcp.value}
                  </span>
                  <span className="text-[13px] text-[#77736B] mt-1 block">
                    Target: &lt; 2.5s
                  </span>
                </div>

                {/* FCP */}
                <div className="p-5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB]">
                  <span className="text-[12px] uppercase tracking-[0.06em] text-[#9A968E] font-semibold block mb-1.5">
                    FCP (First Paint)
                  </span>
                  <span className="font-serif text-[26px] text-[#18202A] font-bold block">
                    {auditData.metrics.fcp.value}
                  </span>
                  <span className="text-[13px] text-[#77736B] mt-1 block">
                    Target: &lt; 1.8s
                  </span>
                </div>

                {/* CLS */}
                <div className="p-5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB]">
                  <span className="text-[12px] uppercase tracking-[0.06em] text-[#9A968E] font-semibold block mb-1.5">
                    CLS (Layout Shift)
                  </span>
                  <span className="font-serif text-[26px] text-[#18202A] font-bold block">
                    {auditData.metrics.cls.value}
                  </span>
                  <span className="text-[13px] text-[#77736B] mt-1 block">
                    Target: &lt; 0.10
                  </span>
                </div>

                {/* TBT */}
                <div className="p-5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB]">
                  <span className="text-[12px] uppercase tracking-[0.06em] text-[#9A968E] font-semibold block mb-1.5">
                    TBT (Block Time)
                  </span>
                  <span className="font-serif text-[26px] text-[#18202A] font-bold block">
                    {auditData.metrics.tbt.value}
                  </span>
                  <span className="text-[13px] text-[#77736B] mt-1 block">
                    Target: &lt; 200ms
                  </span>
                </div>

                {/* Speed Index */}
                <div className="p-5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB]">
                  <span className="text-[12px] uppercase tracking-[0.06em] text-[#9A968E] font-semibold block mb-1.5">
                    Speed Index
                  </span>
                  <span className="font-serif text-[26px] text-[#18202A] font-bold block">
                    {auditData.metrics.speedIndex.value}
                  </span>
                  <span className="text-[13px] text-[#77736B] mt-1 block">
                    Target: &lt; 3.4s
                  </span>
                </div>

                {/* TTFB */}
                <div className="p-5 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB]">
                  <span className="text-[12px] uppercase tracking-[0.06em] text-[#9A968E] font-semibold block mb-1.5">
                    TTFB (Latency)
                  </span>
                  <span className="font-serif text-[26px] text-[#18202A] font-bold block">
                    {auditData.metrics.ttfb.value}
                  </span>
                  <span className="text-[13px] text-[#77736B] mt-1 block">
                    Target: &lt; 250ms
                  </span>
                </div>
              </div>
            </div>

            {/* 03. Social Share / Open Graph Live Simulator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left explanation */}
              <div className="lg:col-span-5 space-y-4">
                <span className="label-eyebrow block">
                  03 / Social Open Graph & Share Preview
                </span>
                <h3 className="font-serif text-[26px] text-[#18202A] leading-snug">
                  How your site looks when shared on iMessage, LinkedIn & Twitter
                </h3>
                <p className="text-[16px] text-[#77736B] leading-[1.6]">
                  Whenever someone texts your link or shares it on social media, platforms read your Open Graph meta tags. If your image or description is missing, it displays as an unclickable blank snippet.
                </p>

                {/* OG Status Points */}
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3 text-[15px]">
                    {auditData.openGraph.hasOgImage ? (
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-[#B9684A] shrink-0" />
                    )}
                    <span className={auditData.openGraph.hasOgImage ? "text-[#18202A]" : "text-[#B9684A] font-semibold"}>
                      {auditData.openGraph.hasOgImage ? "Open Graph image configured" : "Missing og:image (high priority fix)"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[15px]">
                    {auditData.seoMeta.hasMetaDescription ? (
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-[#C99A3A] shrink-0" />
                    )}
                    <span className="text-[#18202A]">
                      {auditData.seoMeta.hasMetaDescription
                        ? `Meta description present (${auditData.seoMeta.descriptionLength} chars)`
                        : "Missing meta description"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[15px]">
                    {auditData.pageStats.isHttps ? (
                      <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-[#B9684A] shrink-0" />
                    )}
                    <span className="text-[#18202A]">
                      {auditData.pageStats.isHttps ? "Secure SSL certificate active" : "Insecure HTTP protocol"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Social Share Card Preview */}
              <div className="lg:col-span-7">
                <div className="bg-[#FFFDF9] rounded-[var(--radius-md)] border border-[#D8D4CB] p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E5DE]">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4.5 h-4.5 text-[#C99A3A]" />
                      <span className="text-[13px] uppercase tracking-[0.08em] font-semibold text-[#77736B]">
                        Live Social Card Preview
                      </span>
                    </div>
                    <span className="text-[12px] font-mono text-[#9A968E]">
                      summary_large_image
                    </span>
                  </div>

                  {/* The Simulated Card */}
                  <div className="rounded-[var(--radius-sm)] border border-[#D8D4CB] overflow-hidden bg-[#F7F5F0] max-w-[560px] mx-auto">
                    {/* Preview Image or Placeholder */}
                    <div className="w-full h-[230px] bg-[#F0EDE6] relative flex items-center justify-center overflow-hidden border-b border-[#D8D4CB]">
                      {auditData.openGraph.image ? (
                        <img
                          src={auditData.openGraph.image}
                          alt="Open Graph Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-6 text-[#9A968E]">
                          <ImageIcon className="w-11 h-11 mb-2 text-[#B9684A]/70" />
                          <span className="text-[14px] font-semibold text-[#B9684A]">
                            No Open Graph image found
                          </span>
                          <span className="text-[13px] text-[#77736B] mt-0.5">
                            Social apps will show an empty text snippet
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Preview Meta Text */}
                    <div className="p-5 space-y-1.5 bg-[#FFFDF9]">
                      <span className="text-[12px] uppercase tracking-[0.08em] text-[#9A968E] font-semibold block">
                        {auditData.domain}
                      </span>
                      <h5 className="font-serif font-bold text-[18px] text-[#18202A] line-clamp-1">
                        {auditData.openGraph.title || auditData.seoMeta.title || "No Title Specified"}
                      </h5>
                      <p className="text-[14px] text-[#77736B] line-clamp-2 leading-relaxed">
                        {auditData.openGraph.description ||
                          auditData.seoMeta.description ||
                          "No description tag found. Search engines and social apps will fall back to arbitrary page copy."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 04. Actionable Diagnostics ("What is missing & how we fix it") */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="label-eyebrow block mb-1">
                    04 / Actionable Optimization Checklist
                  </span>
                  <h3 className="font-serif text-[26px] text-[#18202A]">
                    Key issues detected & recommendations
                  </h3>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center flex-wrap gap-2 p-1.5 bg-[#F0EDE6] rounded-[var(--radius-sm)] self-start border border-[#D8D4CB]">
                  {[
                    { id: "all", label: "All Audits" },
                    { id: "performance", label: "Speed & Code" },
                    { id: "seo", label: "SEO & Meta" },
                    { id: "images", label: "Images & Media" },
                    { id: "accessibility", label: "Security & A11y" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-1.5 text-[13px] font-medium rounded-[var(--radius-sm)] transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? "bg-[#18202A] text-[#F7F5F0]"
                          : "text-[#77736B] hover:text-[#18202A]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Issues Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredDiagnostics.map((item) => {
                  let badge = "bg-[#EDF7EE] text-[#226327] border-[#CBE5CF]";
                  let icon = <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />;
                  let label = "Passed";

                  if (item.severity === "critical") {
                    badge = "bg-[#FAF0EC] text-[#9A4C32] border-[#EBD0C6]";
                    icon = <AlertTriangle className="w-5 h-5 text-[#B9684A] shrink-0 mt-0.5" />;
                    label = "Critical Action Item";
                  } else if (item.severity === "warning") {
                    badge = "bg-[#FAF5EC] text-[#8C661A] border-[#EBD8B2]";
                    icon = <Info className="w-5 h-5 text-[#C99A3A] shrink-0 mt-0.5" />;
                    label = "Optimization Opportunity";
                  }

                  return (
                    <div
                      key={item.id}
                      className="p-6 rounded-[var(--radius-md)] bg-[#FFFDF9] border border-[#D8D4CB] flex flex-col justify-between hover:border-[#18202A] transition-all"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex items-start gap-3">
                            {icon}
                            <h5 className="font-serif font-bold text-[18px] text-[#18202A] leading-snug">
                              {item.title}
                            </h5>
                          </div>
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-[var(--radius-sm)] border shrink-0 uppercase tracking-wider ${badge}`}>
                            {label}
                          </span>
                        </div>

                        <p className="text-[15px] text-[#77736B] leading-relaxed pl-8 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3.5 border-t border-[#E8E5DE] pl-8 text-[14px] flex items-center gap-2 text-[#9A968E]">
                        <Flame className="w-4 h-4 text-[#C99A3A] shrink-0" />
                        <span><strong className="text-[#18202A]">Business Impact:</strong> {item.impact}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 05. Conversion Call to Action Box */}
            <div className="p-8 md:p-12 rounded-[var(--radius-md)] bg-[#18202A] text-[#F7F5F0] relative overflow-hidden border border-[#2A3240]">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-[var(--radius-sm)] bg-[rgba(201,154,58,0.15)] border border-[#C99A3A]/30 text-[#E5BF67] text-[13px] font-semibold mb-4">
                  <span>Turn These Audits Into Growth</span>
                </div>

                <h3 className="font-serif text-[30px] md:text-[36px] leading-tight text-[#FFFDF9] mb-4">
                  Ready to turn {auditData.domain} into a 95+ score lead engine?
                </h3>

                <p className="text-[17px] text-[#D8D4CB] leading-relaxed mb-8 max-w-2xl">
                  I eliminate slow render-blocking assets, set up high-converting Open Graph share cards, and structure your site for maximum Google search visibility.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#C99A3A] hover:bg-[#B3872F] text-[#18202A] font-semibold text-[15px] px-8 py-4 rounded-[var(--radius-md)] transition-all cursor-pointer"
                  >
                    <span>Fix My Website Bottlenecks</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <span className="text-[14px] text-[#9A968E] sm:ml-2">
                    ✓ Direct 1-on-1 review • Tailored strategy
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
