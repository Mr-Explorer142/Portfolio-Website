import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function PublicationSection() {
  return (
    <section id="publications" data-scroll-reveal className="py-20 border-t border-border relative z-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <Badge variant="accent" className="font-mono text-xs px-3 py-1">RESEARCH</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Research &amp; Publications</h2>
          <p className="text-muted-foreground text-sm font-mono">
            Published work on calibrated, uncertainty-aware AI for medical imaging.
          </p>
        </div>

        <Card className="border-border bg-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded border border-accent/40 bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div className="min-w-0 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-mono text-accent">JOURNAL PUBLICATION</p>
                <h3 className="text-lg sm:text-xl font-bold text-primary leading-snug">
                  Calibrated selective prediction using deep ensembles for thyroid nodule ultrasound classification under dataset shift
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-2">Highlights</h4>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5 marker:text-accent">
                  <li>Developed a calibrated deep-ensemble framework for thyroid ultrasound AI.</li>
                  <li>Combined uncertainty estimation with selective image-based triage.</li>
                  <li>Achieved excellent internal calibration and discrimination on TN5000.</li>
                  <li>External testing revealed reduced calibration under dataset shift.</li>
                  <li>Supports cautious AI-assisted triage before prospective validation.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-mono">
                <a
                  href="https://doi.org/10.1016/j.ibmed.2026.100517"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors"
                >
                  DOI: 10.1016/j.ibmed.2026.100517
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S2666521226001754?via%3Dihub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  View on ScienceDirect
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
