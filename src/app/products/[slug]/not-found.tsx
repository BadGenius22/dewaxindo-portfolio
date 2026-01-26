import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    </main>
  );
}
