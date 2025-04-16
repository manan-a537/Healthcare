import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#ff9bd2] via-[#ffdc00] to-[#ff7103] py-28 px-10 md:px-16 lg:px-28 flex flex-col lg:flex-row items-center justify-center relative overflow-hidden">
      <div className="lg:w-2/3 z-10 mb-12 lg:mb-0 text-center">
        <h1 className="text-7xl font-extrabold text-[#2d2c2b] leading-snug mb-6">
          Meet Ebb
        </h1>
        <p className="text-xl text-[#2d2c2b] leading-relaxed mb-8 max-w-2xl mx-auto">
          Your mind’s new best friend. Ebb is an empathetic AI companion that helps you navigate life’s ups and downs, anytime, anywhere. Ebb is currently available in English for Headspace subscribers based in the US, UK, Australia, and Canada.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-center">
          <Button className="bg-[#0040ea] hover:bg-[#0036c7] text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg">
            Try Headspace for free
          </Button>
          <div className="flex flex-col sm:mt-0">
            <span className="text-[#2d2c2b] text-sm mb-1">Already a Headspace member?</span>
            <Link href="#" className="text-[#0040ea] underline font-bold text-sm">
              Start chatting with Ebb now (mobile only)
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative flex justify-center lg:justify-center">
        <div className="relative z-10 w-[500px] h-[500px]">
          <Image
            src="/images/Ebb-Hero.svg"
            alt="Ebb illustration"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
