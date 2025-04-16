import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:px-10 lg:px-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-headspace-dark-blue mb-20">
        How Elivia works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-[140px] w-[140px] mb-8">
            <Image
              src="/images/value-prop-reflect.svg"
              alt="Explore your emotions"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h3 className="text-2xl font-bold text-headspace-dark-blue mb-6">
            Explore your emotions
          </h3>
          <p className="text-headspace-dark-blue">
            Whether you&apos;re processing relationship challenges, work stress, or sleep issues, Elivia is there to help you unpack what&apos;s on your mind.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative h-[140px] w-[140px] mb-8">
            <Image
              src="/images/value-prop-journey.svg"
              alt="Personalized recommendations"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h3 className="text-2xl font-bold text-headspace-dark-blue mb-6">
            Personalized recommendations
          </h3>
          <p className="text-headspace-dark-blue">
            Elivia listens and responds to what you have to say, sending personalized meditations and activities for however you&apos;re feeling.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative h-[140px] w-[140px] mb-8">
            <Image
              src="/images/value-prop-personalized.svg"
              alt="Anytime, anywhere"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h3 className="text-2xl font-bold text-headspace-dark-blue mb-6">
            Anytime, anywhere
          </h3>
          <p className="text-headspace-dark-blue">
            Whether it&apos;s day or night, share what&apos;s on your mind with Elivia whenever you need to 
            — all in the Docure.ai app.
          </p>
        </div>
      </div>

      <div className="mt-24 flex justify-center">
        <div className="relative w-full max-w-2xl h-[450px]">
          <Image
            src="/images/app-screenshot.webp"
            alt="Elivia app screenshot"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-headspace-dark-blue mb-8">
          Designed by leading mental health experts
        </h3>
        <p className="text-headspace-dark-blue max-w-3xl mx-auto">
          Elivia was built and tested by clinical psychologists using scientifically-backed methods. Elivia&apos;s conversations are evaluated and improved to make sure Elivia is helpful for you.
        </p>
      </div>
    </section>
  );
}
