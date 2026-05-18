import { BellDot, CheckCircle2, ShieldCheck, Smartphone, Wifi } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PhoneStage() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="hero-orb pointer-events-none absolute inset-x-8 top-10 h-48 rounded-full bg-[radial-gradient(circle,rgba(214,168,79,0.32),transparent_62%)] blur-3xl" />
      <div className="hero-orb pointer-events-none absolute inset-x-10 bottom-4 h-40 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.22),transparent_62%)] blur-3xl [animation-delay:1.2s]" />

      <div className="phone-float relative mx-auto w-full max-w-[22rem] lg:max-w-[24rem]">
        <div className="rounded-[2.6rem] border border-white/70 bg-white/70 p-3 shadow-[var(--shadow-strong)] backdrop-blur-sm">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#061936,#102a56_54%,#134475)] p-3 text-white">
            <div className="mb-3 flex items-center justify-between gap-3 px-2">
              <Badge className="h-7 rounded-full border-white/14 bg-white/10 px-3 text-[0.68rem] font-semibold tracking-[0.16em] text-white uppercase">
                Premium View
              </Badge>
              <span className="text-xs font-medium text-white/68">11:45</span>
            </div>

            <div className="phone-screen relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 pb-20">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/68 uppercase">
                      Νέα εμπειρία
                    </p>
                    <h2 className="text-xl font-semibold tracking-[-0.04em] text-balance">
                      Όλα τα βασικά προνόμια σε μία οθόνη.
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-3">
                    <Smartphone className="size-6 text-[var(--gold)]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <Card className="rounded-[1.5rem] border-white/10 bg-white/96 py-0 text-foreground shadow-none">
                  <CardHeader className="gap-2 p-4 pb-0">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="flex size-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                          <Wifi className="size-4" />
                        </div>
                        <CardTitle className="text-sm font-semibold">
                          Internet & σταθερή
                        </CardTitle>
                      </div>
                      <Badge
                        variant="outline"
                        className="h-6 rounded-full border-accent/18 bg-accent/8 px-2 text-[0.65rem] font-semibold tracking-[0.15em] text-accent-foreground uppercase"
                      >
                        Νέο
                      </Badge>
                    </div>
                    <CardDescription className="text-xs leading-5">
                      Καθαρή παρουσίαση πακέτων για άμεση κατανόηση.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2 p-4 pt-3">
                    <span className="inline-flex min-h-7 items-center rounded-full bg-muted px-2.5 text-[0.72rem] font-medium">
                      Πακέτα σπιτιού
                    </span>
                    <span className="inline-flex min-h-7 items-center rounded-full bg-muted px-2.5 text-[0.72rem] font-medium">
                      Συνδυασμοί
                    </span>
                  </CardContent>
                </Card>

                <Card className="rounded-[1.5rem] border-white/8 bg-white/12 py-0 text-white shadow-none backdrop-blur-sm">
                  <CardHeader className="gap-2 p-4">
                    <div className="flex items-center gap-2">
                      <BellDot className="size-4 text-[var(--gold)]" />
                      <CardTitle className="text-sm font-semibold text-white">
                        Smart alerts
                      </CardTitle>
                    </div>
                    <CardDescription className="text-xs leading-5 text-white/74">
                      Άμεση ανάδειξη των πιο χρήσιμων κατηγοριών και CTAs.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="rounded-[1.5rem] border-white/10 bg-white/96 py-0 text-foreground shadow-none">
                  <CardHeader className="gap-2 p-4 pb-0">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="size-4 text-accent-foreground" />
                      <CardTitle className="text-sm font-semibold">
                        Official feel
                      </CardTitle>
                    </div>
                    <CardDescription className="text-xs leading-5">
                      Σοβαρή εταιρική εικόνα με premium αλλά εύχρηστο UI.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2 p-4 pt-3">
                    <CheckCircle2 className="size-4 text-accent-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      Thumb-friendly actions
                    </span>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute inset-x-4 bottom-4">
                <Button className="signal-pulse h-11 w-full rounded-2xl bg-white text-primary shadow-lg hover:bg-white/94">
                  Ζητήστε καθοδήγηση
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
