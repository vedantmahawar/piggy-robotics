// default components
import { Button } from "@/components/ui/button";

// Next
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-3xl mx-auto pt-30 pb-20 sm:py-40 text-center flex flex-col items-center justify-center min-h-[calc(100vh-157px)]">
      <h1 className="tracking-tight text-8xl sm:text-9xl font-semibold mb-2">
        404
      </h1>
      <h3 className="text-balance text-lg sm:text-2xl font-medium mb-4 sm:mb-6">
        We can't seem to find the page you're looking for. It might have been
        moved or no longer exists.
      </h3>
      <Link href="/">
        <Button
          type="submit"
          className="cursor-pointer font-normal h-10 shadow-lg shadow-black/30 transition-all hover:scale-[1.05]"
        >
          Go to homepage
        </Button>
      </Link>{" "}
    </div>
  );
}
