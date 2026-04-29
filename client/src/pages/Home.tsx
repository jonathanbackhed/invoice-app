import { ArrowRight, Clock, DollarSign, FileQuestionMark, FileText } from "lucide-react";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import FeatureHighlight from "../components/ui/FeatureHighlight";
import SectionHeader from "../components/ui/SectionHeader";
import PricingCard from "../components/ui/PricingCard";
import Testimonial from "../components/ui/Testimonial";
import { NavLink } from "react-router";
import Footer from "../components/layout/Footer";

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

        <section className="mx-auto">
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

        <section className="mx-auto">
          <SectionHeader
            title={
              <>
                Enkla, <em className="text-indigo-500">transparenta</em> priser
              </>
            }
            tag="PRISER"
          />
          <div className="flex flex-col justify-between sm:flex-row">
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

        <section className="mx-auto">
          <SectionHeader
            title={
              <>
                Älskad av <em className="text-indigo-500">frilansare</em>
              </>
            }
            tag="KUNDBERÄTTELSER"
          />
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:gap-4">
            <Testimonial
              text="Har testat Fortnox och Visma men det var alldeles för mycket. Det här är precis rätt nivå — snabbt och enkelt."
              rating={5}
              name="Anna Lindqvist"
              subName="Grafisk designer, Malmö"
            />
            <Testimonial
              text="Spar mig minst en timme per vecka. Offertsystemet är guld — kunden accepterar och fakturan skapas automatiskt."
              rating={5}
              name="Marcus Karlsson"
              subName="Webbutvecklare, Göteborg"
            />
            <Testimonial
              text="Enkel att lära sig och SIE-exporten gör att min revisor är nöjd. Rekommenderar varmt till alla egenföretagare."
              rating={5}
              name="Sara Eriksson"
              subName="Fotograf & videograf"
            />
          </div>
        </section>

        <section className="mx-auto">
          <SectionHeader title={<>Vanliga frågor</>} tag="FAQ" />
          <div className="flex flex-col gap-4">
            <div>
              <b>Behöver jag ett kreditkort för att börja?</b>
              <p>Nej. Gratisplanen kräver inget kreditkort och gäller för alltid utan bindning.</p>
            </div>
            <div>
              <b>Är appen godkänd för svensk moms?</b>
              <p>Ja. Appen hanterar 25%, 12% och 6% moms korrekt och fakturorna uppfyller Skatteverkets krav.</p>
            </div>
            <div>
              <b>Kan jag exportera till mitt bokföringsprogram?</b>
              <p>Pro- och Företagsplanen inkluderar SIE4-export som importeras direkt i Fortnox, Visma och Bokio.</p>
            </div>
            <div>
              <b>Kan jag lägga till mitt eget logotyp?</b>
              <p>Ja, på Pro och uppåt kan du ladda upp logotyp och anpassa färg på dina PDF-fakturor.</p>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-indigo-500 p-16">
          <h4 className="font-serif text-5xl font-semibold text-white">Redo att få betalt snabbare?</h4>
          <p className="text-center text-neutral-200">
            Gå med xxxx+ svenska frilansare och småföretagare. Gratis att börja.
          </p>
          <NavLink to="#" className="flex items-center justify-center rounded-xl bg-white px-6 py-2 text-indigo-500">
            Skapa gratis konto <ArrowRight size={12} />
          </NavLink>
        </section>

        <Footer />
      </div>
    </div>
  );
}
