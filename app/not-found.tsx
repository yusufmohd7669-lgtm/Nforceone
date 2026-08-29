import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Home, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Badge variant="accent" className="mx-auto mb-6">
        ERROR 404
      </Badge>

      <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-text mb-4">
        Page Not Found
      </h1>

      <p className="text-base md:text-lg text-text-muted max-w-lg mx-auto mb-10 leading-relaxed">
        The requested enterprise route does not exist or has been relocated. Return to the homepage or explore our core capabilities below.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="/" size="md" variant="primary" icon>
          Return to Homepage
        </Button>
        <Button href="/services" size="md" variant="outline">
          Explore Services
        </Button>
        <Button href="/pega" size="md" variant="secondary">
          Pega Specialization
        </Button>
      </div>
    </div>
  );
}
