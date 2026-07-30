import { DeliveryLayersDiagram } from "../diagrams/DeliveryLayersDiagram";
import { MaskReveal } from "../primitives/MaskReveal";
import { Measure } from "../primitives/Measure";
import { RevealGroup, RevealItem } from "../primitives/Reveal";
import { Section } from "../primitives/Section";
import { SectionHeader } from "../primitives/SectionHeader";
import { AI_LAYER_EXPANDED, DELIVERY_LAYERS } from "../../content/fundamentals";

// /approach section 02. Copy deck §3.2.
//
// The AI layer is entirely new — it appears in the client's four-part delivery
// model and in the ideal first engagement deliverables, and nowhere on the v1
// site. Written as a working practice, not a trend. The word "agent" does not
// appear in buyer-facing copy.
//
// The proprietary name for this model is withheld until the trademark filing is
// in (07 B1).
export function DeliveryLayers() {
  return (
    <Section labelledBy="layers-heading">
      <SectionHeader eyebrow="The four layers" />

      <MaskReveal
        id="layers-heading"
        lines={["Four layers, in order."]}
        className="mt-10 font-display text-display-2 md:mt-14"
      />

      <Measure as="p" className="mt-6 font-sans text-body text-text-muted">
        The order matters. Skip a layer and the one above it inherits the problem.
      </Measure>

      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <RevealGroup>
            {DELIVERY_LAYERS.map((layer, i) => (
              <RevealItem key={layer.n} index={i} className="border-b border-rule py-5 first:border-t">
                <div className="grid grid-cols-[3rem_1fr] gap-2">
                  <p className="font-mono text-mono-sm text-text-muted">{layer.n}</p>
                  <div>
                    <h3 className="font-display text-display-3 text-text">{layer.title}</h3>
                    <p className="mt-2 font-sans text-body-sm text-text-muted">{layer.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="md:col-span-6">
          <div className="border border-rule bg-paper-2 p-4 md:p-6">
            <DeliveryLayersDiagram />
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-rule pt-8">
        <p className="font-sans text-label uppercase text-text-muted">The AI layer</p>
        <Measure as="p" className="mt-4 font-sans text-body text-text-muted">
          {AI_LAYER_EXPANDED}
        </Measure>
      </div>
    </Section>
  );
}
