import { FrownIcon } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen px-4 text-center">
      <Image
        className="m-0 rounded-xl"
        src="/images/404-error.jpg"
        alt="Page Not Found"
        width={400}
        height={400}
        sizes="400px"
        priority={true}
        title="Page Not Found"
      />

      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
