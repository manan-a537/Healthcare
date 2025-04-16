import Image from "next/image";
import Link from "next/link";

export function SecuritySection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-headspace-dark-blue mb-16">
          Our commitment to safety and security
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-[80px] h-[80px] mb-6">
              <Image
                src="/images/privacy-icon.svg"
                alt="Privacy icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-xl font-bold text-headspace-dark-blue mb-4">
              Privacy
            </h3>
            <p className="text-headspace-dark-blue">
              Elivia is built with privacy by design. We use leading practices to protect privacy and adhere to privacy-related regulations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-[80px] h-[80px] mb-6">
              <Image
                src="/images/security-icon.svg"
                alt="Security icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-xl font-bold text-headspace-dark-blue mb-4">
              Security
            </h3>
            <p className="text-headspace-dark-blue">
              Every conversation is encrypted, and we have controls in place to prevent unauthorized access to your data.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-[80px] h-[80px] mb-6">
              <Image
                src="/images/safety-icon.svg"
                alt="Safety icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-xl font-bold text-headspace-dark-blue mb-4">
              Safety
            </h3>
            <p className="text-headspace-dark-blue">
              Not only have clinical experts rigorously tested Elivia for safety, but we've also built a proprietary safety system to identify and route members to additional care based on risks, such as suicidal ideation, self-harm, abuse, and more.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-headspace-dark-blue max-w-4xl mx-auto mb-6">
            Elivia is not a substitute for human care, does not provide clinical mental health services and is not monitored in real time by a human. If you have a care team, information that you enter into Elivia is not shared with them, unless you elect to share this information. If you need support for a mental health condition, please talk with a licensed provider. If you are in immediate danger, please contact your local emergency services or go to the nearest emergency room. If you are located in the United States or Canada and you are having thoughts of suicide or self-harm, please call or text 988, the Suicide and Crisis Lifeline.
          </p>
          <p className="text-sm text-headspace-dark-blue">
            You can find additional international mental health resources{" "}
            <Link href="#" className="text-headspace-blue underline">
              here
            </Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
