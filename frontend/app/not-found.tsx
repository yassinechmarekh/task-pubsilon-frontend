import Link from "next/link";
import React from "react";
import { AlertCircle } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <section className={"bg-second-white"}>
      <div className="main-bg min-height flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="space-y-6 max-w-md">
            <div className="flex justify-center">
              <AlertCircle className="h-24 w-24 text-main" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-main">
              Page not found
            </h1>
            <p className="text-muted-foreground text-lg">
              Sorry, we couldn&apost;find the page you&apos;re looking for. The page
              might have been moved, deleted, or never existed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className={'main-btn'}>
                <Link href="/">Return Home</Link>
              </Button>
              <Button className={'second-btn'} asChild>
                <Link href="/">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
