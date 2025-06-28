import SlideUp from "../SlideUp";

export default function FourBoxContent() {
  return (
    <SlideUp>
    <section className="max-w-4xl mx-auto px-6 py-20 text-gray-700">
      <h2 className="text-left text-sm font-light sm:text-[16px] sm:font-semibold mb-16 tracking-wide mx-auto ">
        Branding for a mattress brand that focuses on overall wellness by engineering comfort for a restful sleep.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-15 text-[13px] leading-relaxed tracking-widest">
        {/* Brand */}
        <div>
          <h3 className="font-light mb-3">Brand</h3>
          <p className="text-gray-400">
            Symphonies Life transcends the traditional mattress brand—it is a holistic ideology that champions balance, comfort, and tranquility. Rooted in the belief that life should move in harmony, it envisions a world where rest is restorative, and the only disruption is the sound of an alarm clock.
          </p>
        </div>

        {/* Challenge */}
        <div>
          <h3 className="font-light mb-3">Challenge</h3>
          <p className="text-gray-400">
            The challenge was conceptual and existential: how do you design a sensation? Specifically, one that exists in the liminal space between wakefulness and rest, activity and stillness? In a saturated market of wellness and lifestyle brands, Symphonies Life needed to assert its distinctiveness while remaining unequivocally peaceful, immersive, and evocative of true wellness. It was a delicate balance between differentiation and the quiet sophistication of the brand’s core promise—rest.
          </p>
        </div>

        {/* Solution */}
        <div>
          <h3 className="font-light mb-3">Solution</h3>
          <p className="text-gray-400">
            The solution lay in crafting a visual language that embodies the fluidity and rhythm of life itself. The design of the ‘o’ in Symphonies was reimagined as more than just a letter—it evolved into a symbolic representation of slumber, tranquility, and equilibrium. This singular, thoughtful change became the foundation of a brand identity that communicates balance in every detail. The colour palette was intentionally serene, combining soft, tranquil tones with lively, vibrant accents—reflecting life’s dynamic flow. Typography and layout choices were minimalist and open, evoking a sense of lightness, ease, and effortless serenity that defines the brand’s ethos.
          </p>
        </div>

        {/* Result */}
        <div>
          <h3 className="font-light mb-3">Result</h3>
          <p className="text-gray-400">
            The result is a brand identity that doesn’t merely communicate the philosophy of Symphonies Life—it inhabits it. From the logo to the color scheme, every design choice contributes to a seamless narrative that feels as much as it speaks. Symphonies Life has emerged as a commanding presence in the wellness space, offering more than just products; it offers a lifestyle. By aligning visual design with the rhythms of human experience, we transformed a mattress brand into an iconic symbol of well-being, turning every moment into an opportunity for restorative rest.
          </p>
        </div>
      </div>
    </section>
    </SlideUp>
  );
}
