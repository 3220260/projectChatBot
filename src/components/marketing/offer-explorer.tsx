"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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

export type OfferItem = {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  href: string;
};

type OfferExplorerProps = {
  offers: ReadonlyArray<OfferItem>;
};

export function OfferExplorer({ offers }: OfferExplorerProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filteredOffers = deferredQuery
    ? offers.filter((offer) =>
        [
          offer.category,
          offer.title,
          offer.description,
          ...offer.highlights,
        ].some((field) => field.toLowerCase().includes(deferredQuery)),
      )
    : offers;

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur xl:p-8">
      <div className="flex flex-col gap-5 border-b border-border/80 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <Badge
            variant="outline"
            className="h-7 rounded-full border-accent/15 bg-accent/8 px-3 text-[0.7rem] font-semibold tracking-[0.16em] text-accent-foreground uppercase"
          >
            Offer Explorer
          </Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl">
              Οι βασικές κατηγορίες σε καθαρή, γρήγορη προβολή.
            </h2>
            <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Η νέα πρώτη οθόνη δεν σε αναγκάζει να ψάχνεις. Βλέπεις άμεσα τις
              υπηρεσίες που σε ενδιαφέρουν και περνάς στο σωστό επόμενο βήμα.
            </p>
          </div>
        </div>

        <label className="relative block w-full max-w-md">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
          <span className="sr-only">Αναζήτηση κατηγορίας προσφοράς</span>
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Αναζήτηση σε κινητή, internet, υγεία..."
            className="h-12 rounded-2xl border-white/80 bg-white pl-11 text-base shadow-sm"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredOffers.map((offer) => (
          <Card
            key={offer.title}
            className="h-full rounded-[1.75rem] border border-white/70 bg-white/94 py-0 shadow-none transition-transform duration-200 hover:-translate-y-1"
          >
            <CardHeader className="gap-3 p-6">
              <Badge
                variant="outline"
                className="h-7 rounded-full border-border bg-muted/55 px-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase"
              >
                {offer.category}
              </Badge>
              <div className="space-y-2">
                <CardTitle className="text-xl font-semibold tracking-[-0.03em]">
                  {offer.title}
                </CardTitle>
                <CardDescription className="text-sm leading-6">
                  {offer.description}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-2 px-6 pb-6">
              {offer.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex min-h-8 items-center rounded-full bg-[rgba(7,27,58,0.05)] px-3 text-xs font-medium text-foreground/78"
                >
                  {highlight}
                </span>
              ))}
            </CardContent>

            <CardFooter className="mt-auto justify-between rounded-b-[1.75rem] border-t border-border/70 bg-muted/35 px-6 py-4">
              <span className="text-sm font-medium text-muted-foreground">
                Επόμενο βήμα
              </span>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-xl px-3 text-primary hover:bg-primary/5 hover:text-primary"
              >
                <Link href={offer.href}>
                  Άνοιγμα
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredOffers.length === 0 && (
        <Card className="mt-6 rounded-[1.75rem] border border-dashed border-border bg-muted/20 py-0 shadow-none">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Δεν βρέθηκε κατηγορία με αυτόν τον όρο.
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Καθάρισε την αναζήτηση ή μίλησε με συνεργάτη για να σε
                κατευθύνει στο σωστό πρόγραμμα.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                onClick={() => setQuery("")}
                className="h-11 rounded-xl border-white bg-white px-4 hover:bg-white"
              >
                Καθαρισμός
              </Button>
              <Button
                asChild
                className="h-11 rounded-xl bg-primary px-4 text-primary-foreground hover:bg-primary/92"
              >
                <Link href="#contact">Μίλησε με συνεργάτη</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
