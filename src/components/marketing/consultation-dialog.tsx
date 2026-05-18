"use client";

import { ArrowRight, Headphones, PhoneCall, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

type ConsultationDialogProps = {
  triggerLabel?: string;
  className?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
};

const consultationSteps = [
  {
    title: "Επιλογή κατηγορίας",
    description:
      "Μαθαίνετε γρήγορα ποιο πακέτο ή ποια υπηρεσία ταιριάζει στο αίτημά σας.",
    icon: ShieldCheck,
  },
  {
    title: "Άμεση καθοδήγηση",
    description:
      "Συνεργάτης σας εξηγεί τα βήματα, τα δικαιολογητικά και τον ταχύτερο δρόμο.",
    icon: Headphones,
  },
  {
    title: "Επικοινωνία χωρίς τριβή",
    description:
      "Ξεκινάτε από το κινητό σας, χωρίς μπερδεμένα menus και περιττά clicks.",
    icon: PhoneCall,
  },
] as const;

export function ConsultationDialog({
  triggerLabel = "Ζητήστε ενημέρωση",
  className,
  variant = "default",
}: ConsultationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          className={className ?? "h-12 rounded-2xl px-5 hover:bg-primary/92"}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-[2rem] border border-white/70 bg-white/96 p-0 shadow-[var(--shadow-strong)] sm:max-w-xl">
        <DialogHeader className="space-y-4 p-6 pb-0">
          <Badge
            variant="outline"
            className="h-7 rounded-full border-accent/15 bg-accent/8 px-3 text-[0.7rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase"
          >
            Contact Flow
          </Badge>
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
              Μιλήστε με συνεργάτη χωρίς να χαθείτε στη διαδικασία.
            </DialogTitle>
            <DialogDescription className="text-sm leading-6 text-muted-foreground sm:text-base">
              Το contact flow σχεδιάστηκε για να οδηγεί τον χρήστη με σαφήνεια
              από την πρώτη οθόνη μέχρι την κατάλληλη προσφορά.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="space-y-6 px-6 pb-6">
          <div className="grid gap-3">
            {consultationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-border/70 bg-muted/25 p-4"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                    <Icon className="size-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Separator />

          <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#071b3a,#102a56)] p-5 text-white shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/68 uppercase">
                  Άμεση επικοινωνία
                </p>
                <p className="text-2xl font-semibold tracking-[-0.03em]">
                  693 679 9908
                </p>
                <p className="max-w-sm text-sm leading-6 text-white/78">
                  Για γρήγορη καθοδήγηση στην κατάλληλη κατηγορία προσφορών και
                  στο σωστό επόμενο βήμα.
                </p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/8 px-3 py-2 text-right text-xs font-medium text-white/72">
                Responsive
                <br />
                Mobile-first flow
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="rounded-b-[2rem] border-t border-border/60 bg-muted/35 px-6 py-4 sm:justify-between">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="h-11 rounded-xl border-white bg-white px-4 hover:bg-white"
            >
              Αργότερα
            </Button>
          </DialogClose>
          <Button
            asChild
            className="h-11 rounded-xl bg-primary px-4 text-primary-foreground hover:bg-primary/92"
          >
            <a href="tel:6936799908">
              Καλέστε τώρα
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
