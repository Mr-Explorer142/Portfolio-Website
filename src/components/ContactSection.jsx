import React, { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Send, Terminal, ShieldCheck, UserRound, BriefcaseBusiness, MessageSquareText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { profile } from "../data/profile";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("Contact form is not configured yet. Please email me directly.");
      }

      const endpoint = "https://api.web3forms.com/submit";
      const payload = {
        access_key: accessKey,
        ...formData,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Message delivery failed. Please email me directly.");
      }

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: err instanceof Error ? err.message : "Message delivery failed. Please email me directly.",
      });
    }
  };

  return (
    <section id="contact" data-scroll-reveal className="py-20 border-t border-border relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <Badge variant="accent" className="gap-1.5 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping inline-block"></span>
            CONTACT CHANNEL
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Initialize Communication
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl font-mono">
            Have a question about my projects, an internship opportunity, or an idea to discuss? Send me a message or email me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: System Telemetry & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="min-w-0 bg-card/60 backdrop-blur-sm p-4 sm:p-6 space-y-6">
              <div className="flex items-center gap-2 pb-3">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  COMMUNICATION_CHANNELS.LOG
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-background/60">
                  <span className="text-muted-foreground block text-[10px] uppercase">Direct Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-accent hover:underline font-semibold text-sm break-all"
                  >
                    {profile.email}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-background/60">
                  <span className="text-muted-foreground block text-[10px] uppercase">GitHub Workspace</span>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-accent font-semibold text-sm break-all"
                  >
                    github.com/Mr-Explorer142
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-background/60">
                  <span className="text-muted-foreground block text-[10px] uppercase">LinkedIn Network</span>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-accent font-semibold text-sm break-all"
                  >
                    linkedin.com/in/tahmid-alam-tamim142
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-muted-foreground flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="min-w-0">{profile.location}</span>
              </div>
            </Card>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-7">
            <Card className="min-w-0 bg-card shadow-xl p-4 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none"></div>

              {status.submitted ? (
                /* Success Banner */
                <div role="status" aria-live="polite" className="p-8 text-center space-y-4 border border-emerald-500/40 bg-emerald-950/20 rounded-lg">
                  <div className="w-12 h-12 rounded-full border border-emerald-400/50 bg-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400 shadow-glow-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-mono text-lg font-bold text-emerald-300">
                    TRANSMISSION_DELIVERED [200 OK]
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Your message has been delivered. Thank you for reaching out.
                  </p>
                  <Button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    variant="cyber"
                    size="sm"
                    className="mt-2"
                  >
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 mb-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                      SEND_MESSAGE.POST
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">JSON Encoded</span>
                  </div>

                  {status.error && (
                    <div role="alert" className="p-3 border border-rose-500/40 bg-rose-950/30 text-rose-300 rounded text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-mono text-xs text-muted-foreground flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5"><UserRound aria-hidden="true" className="w-3.5 h-3.5 text-accent" />Your name</span>
                        <span className="text-[10px] text-accent">*</span>
                      </label>
                      <Input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ada Lovelace"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-mono text-xs text-muted-foreground flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5"><Mail aria-hidden="true" className="w-3.5 h-3.5 text-accent" />Your email</span>
                        <span className="text-[10px] text-accent">*</span>
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ada@domain.io"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="font-mono text-xs text-muted-foreground flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness aria-hidden="true" className="w-3.5 h-3.5 text-accent" />Subject</span>
                      <span className="text-[10px] text-accent">*</span>
                    </label>
                    <Input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Laravel E-commerce Architecture / Contract Opportunity"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-mono text-xs text-muted-foreground flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5"><MessageSquareText aria-hidden="true" className="w-3.5 h-3.5 text-accent" />Message</span>
                      <span className="text-[10px] text-accent">*</span>
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Brief details about the technical scope, timeline, and deliverables..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={status.submitting}
                    className="w-full mt-2 gap-2"
                  >
                    {status.submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                        <span>DISPATCHING PACKET...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH TRANSMISSION</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
