import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { ConsultationDialog } from "@/components/marketing/consultation-dialog";
import {
  OfferExplorer,
  type OfferItem,
} from "@/components/marketing/offer-explorer";
import { PhoneStage } from "@/components/marketing/phone-stage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const containerClassName = "mx-auto w-full max-w-7xl px-4 lg:px-6";

const trustSignals = [
  {
    title: "Mobile-first",
    description:
      "Η νέα εμπειρία ξεκινά από το κινητό, με πιο καθαρή προβολή και δυνατά CTA.",
  },
  {
    title: "Official tone",
    description:
      "Σοβαρή παλέτα, σωστές αναλογίες και σαφή ιεραρχία πληροφορίας.",
  },
  {
    title: "Fast decisions",
    description:
      "Ο χρήστης βρίσκει άμεσα την κατηγορία που τον αφορά και συνεχίζει χωρίς τριβή.",
  },
] as const;

const offers: ReadonlyArray<OfferItem> = [
  {
    category: "Συνδέσεις",
    title: "Κινητή τηλεφωνία",
    description:
      "Προγράμματα που παρουσιάζονται καθαρά, με έμφαση στα οφέλη και στα επόμενα βήματα.",
    highlights: ["Γρήγορη σύγκριση", "Σαφή CTAs", "Εμπειρία για κινητό"],
    href: "#contact",
  },
  {
    category: "Σπίτι",
    title: "Internet & σταθερή",
    description:
      "Οργανωμένη παρουσίαση συνδυαστικών λύσεων για σύνδεση, ταχύτητα και εξυπηρέτηση.",
    highlights: ["Συνδυαστικά πακέτα", "Κατηγοριοποίηση", "Καθαρό flow"],
    href: "#platform",
  },
  {
    category: "Παροχές",
    title: "Υγεία",
    description:
      "Συνεργασίες και υπηρεσίες που εμφανίζονται χωρίς θόρυβο, με premium αλλά απλή δομή.",
    highlights: ["Επίσημη εικόνα", "Καθαρά blocks", "Άμεση ενημέρωση"],
    href: "#platform",
  },
  {
    category: "Εξυπηρέτηση",
    title: "Επικοινωνία",
    description:
      "Το contact flow σχεδιάζεται ώστε η τηλεφωνική επικοινωνία να είναι ξεκάθαρη και εύκολη.",
    highlights: ["Τηλέφωνο πρώτης γραμμής", "Γρήγορη πρόσβαση", "Thumb-friendly"],
    href: "#contact",
  },
  {
    category: "Οργάνωση",
    title: "Νέα και ανακοινώσεις",
    description:
      "Σημαντικές ενημερώσεις των μελών σε blocks που στέκονται σωστά σε μικρές οθόνες.",
    highlights: ["Σύγχρονη δομή", "Καλή αναγνωσιμότητα", "Έμφαση στα σημαντικά"],
    href: "#benefits",
  },
  {
    category: "Υποστήριξη",
    title: "Καθοδήγηση αιτήσεων",
    description:
      "Η εμπειρία χτίζεται ώστε κάθε χρήστης να ξέρει αμέσως πού πατάει και γιατί.",
    highlights: ["Βήμα προς βήμα", "Χωρίς θόρυβο", "Απλές διαδρομές"],
    href: "#contact",
  },
];

const platformPillars = [
  {
    title: "Εικόνα που εμπνέει εμπιστοσύνη",
    description:
      "Το visual system ακουμπά σε navy, λευκό και controlled accent ώστε να δείχνει επίσημο χωρίς να γίνεται βαρύ.",
    icon: ShieldCheck,
  },
  {
    title: "Ροή που εξηγεί τι κάνεις μετά",
    description:
      "Κάθε block, card και CTA τοποθετείται για να μειώνει αβεβαιότητα και να αυξάνει την ευχρηστία.",
    icon: ArrowRight,
  },
  {
    title: "Design που λειτουργεί σε πραγματικό κινητό",
    description:
      "Μεγαλύτερα tap targets, σωστές αποστάσεις και δυνατό contrast για καθαρή χρήση από όλους.",
    icon: Sparkles,
  },
] as const;

const operatingValues = [
  {
    label: "Επίσημη παρουσία",
    value: "Corporate αισθητική",
    detail: "Καθαρή τυπογραφία και ελεγχόμενα gradients.",
    icon: Building2,
  },
  {
    label: "Εμπειρία χρήστη",
    value: "Λιγότερη τριβή",
    detail: "Η πληροφορία εμφανίζεται με σειρά που βοηθά αποφάσεις.",
    icon: Headphones,
  },
  {
    label: "Ανταπόκριση",
    value: "Γρήγορη επικοινωνία",
    detail: "Το τηλέφωνο μένει πρώτο και πάντα εύκολα προσβάσιμο.",
    icon: PhoneCall,
  },
  {
    label: "Αναγνωσιμότητα",
    value: "Υψηλή καθαρότητα",
    detail: "Άνετα line lengths και σωστό κενό ανάμεσα στα στοιχεία.",
    icon: Clock3,
  },
] as const;

export default function HomePage() {
  return (
    <main className="relative isolate overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[46rem] bg-[radial-gradient(circle_at_top,rgba(16,42,86,0.18),transparent_52%)]" />
      <div className="pointer-events-none absolute top-24 left-1/2 -z-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,168,79,0.18),transparent_70%)] blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div
          className={`${containerClassName} flex min-h-18 items-center justify-between gap-4`}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-sm">
              Π
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Π.Κ.Σ.Α.Α.
              </p>
              <p className="text-base font-semibold tracking-[-0.02em]">
                Official Offers Platform
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link href="#offers" className="transition-colors hover:text-foreground">
              Προσφορές
            </Link>
            <Link
              href="#platform"
              className="transition-colors hover:text-foreground"
            >
              Πλατφόρμα
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              Επικοινωνία
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ConsultationDialog
              triggerLabel="Ρωτήστε μας"
              variant="outline"
              className="hidden h-11 rounded-2xl border-white bg-white px-4 hover:bg-white md:inline-flex"
            />
            <Button
              asChild
              className="h-11 rounded-2xl bg-primary px-4 text-sm font-semibold text-white shadow-[var(--shadow-soft)] hover:bg-primary/92"
            >
              <a href="tel:6936799908">Καλέστε μας</a>
            </Button>
          </div>
        </div>
      </header>

      <section className={`${containerClassName} grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20`}>
        <div className="space-y-8">
          <Badge
            variant="outline"
            className="h-8 rounded-full border-accent/15 bg-accent/8 px-4 text-[0.72rem] font-semibold tracking-[0.18em] text-accent-foreground uppercase"
          >
            Νέα mobile-first εμπειρία
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.07em] text-balance sm:text-5xl lg:text-6xl">
              Οι προσφορές των μελών, σε μια επίσημη ψηφιακή εμπειρία που
              δείχνει σωστή από το πρώτο άγγιγμα.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Ένα πλήρως ανανεωμένο homepage για Π.Κ.Σ.Α.Α. με σοβαρό visual
              language, premium hero, ξεκάθαρες κατηγορίες και contact flow που
              λειτουργεί πραγματικά καλά στο κινητό.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-13 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/92"
            >
              <Link href="#offers">
                Δείτε τις προσφορές
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <ConsultationDialog
              variant="outline"
              className="h-13 rounded-2xl border-white bg-white px-6 text-sm font-semibold text-primary hover:bg-white"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustSignals.map((signal) => (
              <Card
                key={signal.title}
                className="rounded-[1.5rem] border-white/70 bg-white/82 py-0 shadow-none backdrop-blur-sm"
              >
                <CardContent className="space-y-2 p-5">
                  <p className="text-sm font-semibold tracking-[-0.02em]">
                    {signal.title}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {signal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <PhoneStage />
      </section>

      <section id="offers" className={`${containerClassName} py-8 sm:py-10 lg:py-12`}>
        <OfferExplorer offers={offers} />
      </section>

      <section
        id="platform"
        className={`${containerClassName} grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-14`}
      >
        <Card className="rounded-[2rem] border-white/70 bg-[linear-gradient(150deg,#071b3a,#102a56_62%,#16497d)] py-0 text-white shadow-[var(--shadow-strong)]">
          <CardHeader className="space-y-4 p-6 sm:p-8">
            <Badge className="h-7 rounded-full border-white/14 bg-white/10 px-3 text-[0.7rem] font-semibold tracking-[0.16em] text-white uppercase">
              Platform Narrative
            </Badge>
            <div className="space-y-3">
              <CardTitle className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Όχι απλώς νέο look. Νέα πρώτη εντύπωση.
              </CardTitle>
              <CardDescription className="max-w-xl text-sm leading-7 text-white/76 sm:text-base">
                Η αρχική σελίδα χτίστηκε από την αρχή για να δείχνει επίσημη,
                πιο καθαρή και πιο άμεση. Στόχος της είναι να πείθει, να
                εξηγεί και να οδηγεί τον χρήστη χωρίς κόπο.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-5 p-6 pt-0 sm:p-8 sm:pt-0">
            {platformPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[var(--gold)]">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold tracking-[-0.02em]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/76">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card className="rounded-[2rem] border-white/70 bg-white/90 py-0 shadow-[var(--shadow-soft)]">
            <CardHeader className="space-y-3 p-6">
              <Badge
                variant="outline"
                className="h-7 rounded-full border-accent/15 bg-accent/8 px-3 text-[0.7rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase"
              >
                Operating Principles
              </Badge>
              <div className="space-y-2">
                <CardTitle className="text-3xl font-semibold tracking-[-0.04em]">
                  Τι αλλάζει ουσιαστικά στην εμπειρία.
                </CardTitle>
                <CardDescription className="text-sm leading-6">
                  Στόχος δεν είναι μόνο να φαίνεται καλύτερο. Είναι να βοηθά
                  περισσότερο, ειδικά σε χρήστες που μπαίνουν από κινητό και
                  θέλουν καθαρή καθοδήγηση.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="grid gap-4 p-6 pt-0 sm:grid-cols-2">
              {operatingValues.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.label}
                    className="rounded-[1.5rem] border border-border/70 bg-muted/25 p-4"
                  >
                    <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {value.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">
                      {value.value}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {value.detail}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card
            id="benefits"
            className="rounded-[2rem] border-white/70 bg-white/90 py-0 shadow-[var(--shadow-soft)]"
          >
            <CardContent className="space-y-5 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Value snapshot
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    Γιατί αυτή η κατεύθυνση ανεβάζει όλο το site.
                  </h3>
                </div>

                <div className="inline-flex min-h-11 items-center rounded-2xl border border-border/70 bg-muted/35 px-4 text-sm font-medium text-muted-foreground">
                  <Users className="mr-2 size-4 text-primary" />
                  Σχεδιασμένο για καθημερινούς mobile χρήστες
                </div>
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "Το hero δίνει αμέσως αίσθηση επίσημης πλατφόρμας.",
                  "Οι προσφορές γίνονται εύκολα scannable μέσα από καθαρές cards.",
                  "Η επικοινωνία μένει πρώτη προτεραιότητα χωρίς να διαλύει το layout.",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-border/70 bg-muted/20 p-4 text-sm leading-6 text-muted-foreground"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className={`${containerClassName} py-10 lg:py-14`}>
        <Card className="rounded-[2rem] border-white/70 bg-white/90 py-0 shadow-[var(--shadow-soft)]">
          <CardContent className="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="h-7 rounded-full border-accent/15 bg-accent/8 px-3 text-[0.7rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase"
              >
                Contact section
              </Badge>
              <div className="space-y-3">
                <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Θέλεις άμεση καθοδήγηση; Το contact flow είναι έτοιμο.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Το redesign κρατά το τηλέφωνο σε πρώτο πλάνο, οργανώνει τις
                  κατηγορίες προσφορών και δίνει σαφή επόμενα βήματα χωρίς να
                  κουράζει τον χρήστη.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ConsultationDialog className="h-12 rounded-2xl bg-primary px-5 text-primary-foreground hover:bg-primary/92" />
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-2xl border-white bg-white px-5 hover:bg-white"
              >
                <a href="tel:6936799908">
                  Καλέστε τώρα
                  <PhoneCall className="size-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/70 bg-white/65 py-8 backdrop-blur-sm">
        <div
          className={`${containerClassName} flex flex-col gap-4 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between`}
        >
          <div>
            <p className="font-semibold text-foreground">
              Π.Κ.Σ.Α.Α. Official Offers Platform
            </p>
            <p className="mt-1 max-w-2xl leading-6">
              Νέα responsive βάση σε Next.js και shadcn, έτοιμη για τα επόμενα
              phases του ανασχεδιασμού.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a href="tel:6936799908" className="font-semibold text-foreground">
              693 679 9908
            </a>
            <Link href="#offers" className="font-medium text-foreground">
              Επιστροφή στις προσφορές
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
