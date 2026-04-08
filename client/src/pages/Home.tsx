import { Clock, DollarSign, FileQuestionMark, FileText } from "lucide-react";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import FeatureHighlight from "../components/ui/FeatureHighlight";
import SectionHeader from "../components/ui/SectionHeader";
import PricingCard from "../components/ui/PricingCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl py-4">
      <Navbar />
      <Hero />

      <div className="space-y-24">
        <section>
          <SectionHeader
            title={
              <>
                Allt du behöver, <em className="text-indigo-500">inget mer</em>
              </>
            }
            tag="FUNKTIONER"
          />
          <div className="grid grid-cols-12 gap-4">
            <FeatureHighlight
              title="Fakturor på 2 minuter"
              text="Lägg till dina tjänster, välj kund och skicka direkt. INVOICE APP sköter momsen, numreringen och layouten åt dig."
              icon={<FileText size={24} className="text-indigo-500 group-hover:text-white" />}
            />
            <FeatureHighlight
              title="Följ hela affären — från offert till betalning"
              text="Skicka en offert, låt kunden acceptera med ett klick och konvertera till faktura direkt. Helt utan dubbelarbete."
              icon={<FileQuestionMark size={24} className="text-indigo-500 group-hover:text-white" />}
            />
            <FeatureHighlight
              title="Påminnelser & uppföljning"
              text="Automatiska betalningspåminnelser skickas vid förfallodatum. Du slipper jaga pengar manuellt."
              icon={<Clock size={24} className="text-indigo-500 group-hover:text-white" />}
            />
            <FeatureHighlight
              title="Se exakt vad du tjänar"
              text="Se exakt vad du tjänar, vilka fakturor som är utestående och ditt kassaflöde — allt på ett ställe."
              icon={<DollarSign size={24} className="text-indigo-500 group-hover:text-white" />}
            />
          </div>
        </section>

        <section className="mx-auto max-w-3xl">
          <SectionHeader title={<>Igång på tre steg</>} tag="HUR DET FUNGERAR" />
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col space-y-2">
              <div className="w-fit rounded-full bg-indigo-50 px-4 py-2">
                <span className="font-bold text-indigo-500">1</span>
              </div>
              <span className="font-semibold">Skapa ett konto</span>
              <p>Registrera dig gratis på 30 sekunder. Inget kreditkort, inga bindningstider.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="w-fit rounded-full bg-indigo-50 px-4 py-2">
                <span className="font-bold text-indigo-500">2</span>
              </div>
              <span className="font-semibold">Lägg till dina uppgifter</span>
              <p>Fyll i ditt företag, logga och betalningsuppgifter. Vi fyller i resten automatiskt.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="w-fit rounded-full bg-indigo-50 px-4 py-2">
                <span className="font-bold text-indigo-500">3</span>
              </div>
              <span className="font-semibold">Skicka din första faktura</span>
              <p>Välj kund, lägg till rader och klicka skicka. Kunden får PDF:en direkt i sin inbox.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl">
          <SectionHeader
            title={
              <>
                Enkla, <em className="text-indigo-500">transparenta</em> priser
              </>
            }
            tag="PRISER"
          />
          <div className="flex justify-between">
            <PricingCard
              tag="Gratis"
              price="0 kr"
              subTitle="för alltid"
              perks={["Upp till 5 fakturor/mån", "Obegränsade kunder", "PDF-export"]}
              buttonText="Kom igång"
              buttonHref="#"
            />
            <PricingCard
              tag="Pro"
              price="149 kr"
              subTitle="/ månad, exkl. moms"
              perks={[
                "Obegränsade fakturor",
                "Offerter & konvertering",
                "Automatiska påminnelser",
                "Eget varumärke på PDF",
              ]}
              buttonText="Välj Pro"
              buttonHref="#"
              mostPopular
            />
            <PricingCard
              tag="Företag"
              price="399 kr"
              subTitle="/ månad, exkl. moms"
              perks={["Allt i Pro", "Upp till 5 användare", "Roller & behörigheter", "Prioriterad support"]}
              buttonText="Välj Företag"
              buttonHref="#"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
