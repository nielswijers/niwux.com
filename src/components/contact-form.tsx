import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const placeholders = {
    name: [
      "Bijv. Emma Bakker - Groene Toekomst B.V.",
      "Bijv. Jan de Vries - Duurzaam Nederland",
      "Bijv. Sarah Jansen - Tech Innovaties",
      "Bijv. Peter Smit - Circulaire Solutions",
      "Bijv. Lisa van Dam - Eco Solutions",
      "Bijv. Mark Hendriks - Digital Future",
      "Bijv. Anna Mol - Sustainable Tech",
      "Bijv. Thomas Berg - Smart Buildings",
      "Bijv. Sophie Klein - Green Energy",
      "Bijv. Lucas Bakker - Innovation Hub",
    ],
    email: [
      "emma@groenetoekomst.nl",
      "contact@duurzaamnederland.nl",
      "info@techinnovaties.nl",
      "peter@circulaire.nl",
      "lisa@ecosolutions.nl",
      "mark@digitalfuture.nl",
      "anna@sustainabletech.nl",
      "thomas@smartbuildings.nl",
      "sophie@greenenergy.nl",
      "lucas@innovationhub.nl",
    ],
    subject: [
      "Bijv. Laten we samen iets bijzonders bouwen",
      "Bijv. Interesse in duurzame samenwerking",
      "Bijv. Innovatief project bespreken",
      "Bijv. Advies over digitale transformatie",
      "Bijv. Mogelijkheden voor partnership verkennen",
      "Bijv. Vraag over duurzame oplossingen",
      "Bijv. Samenwerking op het gebied van innovatie",
      "Bijv. Informatie over jullie diensten",
      "Bijv. Project voorstel bespreken",
      "Bijv. Kennismakingsgesprek plannen",
      "Bijv. Advies over technische implementatie",
      "Bijv. Duurzaamheidsproject opstarten",
    ],
    message: [
      "Vertel me over je project, uitdagingen en ambities. Samen kunnen we de perfecte oplossing vinden.",
      "Deel je ideeën en doelstellingen. Ik denk graag met je mee over de beste aanpak.",
      "Beschrijf je visie en wat je wilt bereiken. Samen maken we het mogelijk.",
      "Laat weten waar je hulp bij nodig hebt. Ik help je graag verder met je plannen.",
      "Ik ben benieuwd naar de mogelijkheden voor samenwerking. Kunnen we hierover van gedachten wisselen?",
      "We zijn op zoek naar een partner voor ons nieuwe duurzaamheidsproject. Kunnen jullie hierin iets betekenen?",
      "Graag zou ik meer willen weten over jullie expertise op het gebied van digitale innovatie.",
      "Voor ons aankomende project zoeken we technische ondersteuning. Kunnen we hierover in gesprek gaan?",
      "We willen onze processen verduurzamen en digitaliseren. Kunnen jullie ons hierbij adviseren?",
      "Ik ben geïnteresseerd in jullie aanpak en zou graag eens van gedachten wisselen over mogelijke samenwerking.",
    ],
  };

  const getRandomPlaceholder = (field: keyof typeof placeholders) => {
    const options = placeholders[field];
    return options[Math.floor(Math.random() * options.length)];
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to your server
    // For demonstration, we'll just wait for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Bericht verzonden!"); // Replace with proper feedback in production
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Stuur een bericht</CardTitle>
        <CardDescription>
          Vul het formulier in om contact met ons op te nemen.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Naam</Label>
            <Input
              id="name"
              placeholder={getRandomPlaceholder("name")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder={getRandomPlaceholder("email")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Onderwerp</Label>
            <Input
              id="subject"
              placeholder={getRandomPlaceholder("subject")}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Bericht</Label>
            <Textarea
              id="message"
              placeholder={getRandomPlaceholder("message")}
              className="min-h-[100px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Bezig met verzenden..." : "Verstuur bericht"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
