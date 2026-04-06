import { Clock, DollarSign, FileQuestionMark, FileText } from "lucide-react";
import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import FeatureHighlight from "../components/ui/FeatureHighlight";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl py-4">
      <Navbar />
      <Hero />
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
    </div>
  );
}
