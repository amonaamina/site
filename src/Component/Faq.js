import { Disclosure } from "@headlessui/react";
import "./Faq.css";

const faqs = [
  {
    question: "Was ist ein Kaltwintergarten?",
    answer:
      "Ein Kaltwintergarten ist ein unbeheizter Anbau, der Schutz vor Wind und Wetter bietet und die Nutzung Ihrer Terrasse verlängert.",
  },
  {
    question: "Benötige ich eine Baugenehmigung?",
    answer:
      "Das hängt vom Bundesland und der Größe ab. In vielen Fällen ist eine Genehmigung erforderlich.",
  },
  {
    question: "Wie lange dauert die Montage?",
    answer:
      "Die Montage dauert in der Regel 1–3 Tage, abhängig von Größe und Ausstattung.",
  },
  {
    question: "Sind individuelle Maße möglich?",
    answer:
      "Ja, alle unsere Lösungen werden individuell nach Ihren Wünschen gefertigt.",
  },
  {
    question: "Welche Materialien werden verwendet?",
    answer:
      "Wir verwenden hochwertiges Aluminium und langlebiges Sicherheitsglas.",
  },
  {
    question: "Ist eine Nutzung im Winter möglich?",
    answer:
      "Ja, besonders mit zusätzlicher Verglasung oder Beschattung.",
  },
  {
    question: "Wie pflegeleicht ist die Überdachung?",
    answer:
      "Sehr pflegeleicht – gelegentliche Reinigung reicht aus.",
  },
  {
    question: "Gibt es eine Garantie?",
    answer:
      "Ja, wir bieten eine zuverlässige Garantie auf Material und Montage.",
  },
  {
    question: "Kann ich die Überdachung erweitern?",
    answer:
      "Ja, viele Systeme sind modular erweiterbar.",
  },
  {
    question: "Wie hoch sind die Kosten?",
    answer:
      "Die Preise variieren je nach Größe und Ausstattung – wir beraten Sie individuell.",
  },
];

export default function Faq() {
  return (
    <section className="faq">
      <h2>Fragen & Antworten</h2>
<p>Alles Wichtige auf einen Blick</p>
      <div className="faq-container">
        {faqs.map((faq, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <div className="faq-item">
                <Disclosure.Button className="faq-header">
                  {faq.question}
                  <span className={`icon ${open ? "rotate" : ""}`}>+</span>
                </Disclosure.Button>

                <Disclosure.Panel className="faq-content">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
