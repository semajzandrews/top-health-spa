import Image from "next/image";
import Nav from "../components/Nav";
import SmoothScroll from "../components/SmoothScroll";
import Breath from "../components/Breath";
import Reveal from "../components/Reveal";

const PHONE = "(973) 743-5282";
const TEL = "tel:+19737435282";
const ADDRESS = "28 Washington St, Bloomfield, NJ 07003";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <SmoothScroll />
      <Nav />
      <Breath />

      {/* ---- typographic hero — no photo, the type is the room ---- */}
      <section className="relative min-h-[92svh] flex items-end overflow-hidden bg-pine text-linen">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 80% at 70% 10%, rgba(127,163,147,0.14), transparent 60%), radial-gradient(90% 60% at 20% 90%, rgba(217,165,150,0.10), transparent 55%)",
          }}
        />
        <div aria-hidden="true" className="hero-breath absolute inset-0 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pb-16 md:pb-24 pt-36 w-full">
          <Reveal>
            <p className="kicker kicker-light mb-6">Massage Spa · Bloomfield, New Jersey</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display text-[clamp(3.4rem,13vw,9.5rem)] leading-[0.96] text-linen">
              Breathe in.
              <br />
              <span className="italic text-blush">Let it go.</span>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
              <p className="max-w-md text-linen/75 text-base md:text-lg">
                A quiet room on Washington Street, a practiced hand, and an hour
                that belongs to no one but you.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={TEL}
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-blush text-pine px-7 py-3.5 font-medium hover:bg-blush-deep hover:text-linen transition-colors"
                >
                  Call {PHONE}
                </a>
                <p className="text-sm text-linen/55">Open late · 7 days · walk-ins welcome to call ahead</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- the ritual — breathing narrative + editorial services list ---- */}
      <section id="ritual" className="py-24 md:py-40">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <p className="kicker mb-5">The Ritual</p>
            <h2 className="display text-[clamp(2rem,5.4vw,3.6rem)] max-w-2xl">
              The day stays outside.
              <span className="italic text-blush-deep"> You come in.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-pine/70 text-lg">
              No app, no upsell script, no rush. You call, you come in, and the
              hour is shaped around what your body is carrying that day. Ask
              what the table holds when you call — every visit starts with a
              conversation.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-24">
            {[
              {
                n: "01",
                t: "Full-body massage",
                d: "The classic hour. Long, slow strokes that talk the nervous system down from the ledge of a long day.",
              },
              {
                n: "02",
                t: "Deep pressure work",
                d: "For the shoulders that carry the commute and the back that carries everything else. Firm, deliberate, unhurried.",
              },
              {
                n: "03",
                t: "Warm stone therapy",
                d: "Heat placed where the body holds on hardest, so the letting-go starts before the hands do.",
              },
              {
                n: "04",
                t: "Tired feet, revived",
                d: "Foot-focused sessions that end the kind of day spent standing on it. Sit back. Exhale.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="svc-row">
                  <div className="flex items-baseline gap-5">
                    <span className="font-medium text-xs tracking-[0.28em] text-blush-deep">{s.n}</span>
                    <h3 className="display text-[clamp(1.5rem,3.6vw,2.3rem)]">{s.t}</h3>
                  </div>
                  <p className="text-pine/65 md:text-right md:text-[15px]">{s.d}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-(--hairline-dark)" />
            <Reveal>
              <p className="mt-6 text-sm text-sand-dim">
                Session lengths and rates by phone — call {PHONE} and ask.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- the one large atmospheric image moment ---- */}
      <section id="table" className="relative">
        <Reveal>
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/img/6187418.jpg"
                alt="A therapist working at a candlelit massage table in a warm, quiet spa room"
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(22,36,31,0.45), transparent 45%)" }}
              />
              <p className="absolute bottom-5 left-5 md:bottom-8 md:left-8 display italic text-linen text-[clamp(1.3rem,3vw,2rem)] max-w-sm">
                One room. One hour. Nothing else on the schedule.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---- the ask — CTA ---- */}
      <section className="py-24 md:py-40 bg-pine text-linen mt-24 md:mt-40">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <Reveal>
              <p className="kicker kicker-light mb-5">Before You Go Home Tonight</p>
              <h2 className="display text-[clamp(2.2rem,5.6vw,4rem)]">
                The phone is the
                <span className="italic text-blush"> whole booking system.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-md text-linen/70">
                Open late, seven days a week — which means the massage can happen
                after work, not instead of it. One call reserves the table.
              </p>
              <a
                href={TEL}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-blush text-pine px-8 py-4 font-medium text-lg hover:bg-blush-deep hover:text-linen transition-colors"
              >
                Call {PHONE}
              </a>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/5", maxHeight: 520 }}>
              <Image
                src="/img/6187645.jpg"
                alt="Close-up of warm basalt stones being placed along a client's back"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- visit ---- */}
      <section id="visit" className="py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-14">
            <div>
              <Reveal>
                <p className="kicker mb-5">Visit</p>
                <h2 className="display text-[clamp(2rem,5vw,3.4rem)]">
                  Washington Street,
                  <br />
                  <span className="italic text-blush-deep">two blocks off the green.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <dl className="mt-9 space-y-5 text-pine/80">
                  <div>
                    <dt className="kicker text-[10px]! mb-1">Address</dt>
                    <dd className="text-lg">{ADDRESS}</dd>
                  </div>
                  <div>
                    <dt className="kicker text-[10px]! mb-1">Phone</dt>
                    <dd>
                      <a href={TEL} className="text-lg underline decoration-(--blush) underline-offset-4 hover:text-blush-deep transition-colors">
                        {PHONE}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="kicker text-[10px]! mb-1">Hours</dt>
                    <dd className="text-lg">Open late · 7 days a week</dd>
                  </div>
                  <div>
                    <dt className="kicker text-[10px]! mb-1">Elsewhere</dt>
                    <dd>
                      <a
                        href="https://www.instagram.com/tophealthspanj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg underline decoration-(--blush) underline-offset-4 hover:text-blush-deep transition-colors"
                      >
                        @tophealthspanj
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div className="relative overflow-hidden rounded-sm mt-2" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/img/19641818.jpg"
                  alt="A massage therapist's hands working along a client's upper back"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="map-frame" style={{ height: "clamp(360px, 38vw, 440px)" }}>
              <iframe
                title="Top Health Spa location — 28 Washington St, Bloomfield, NJ 07003"
                src="https://www.google.com/maps?q=Top+Health+Spa,+28+Washington+St,+Bloomfield,+NJ+07003&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- footer ---- */}
      <footer className="bg-pine text-linen/60 py-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-5 text-sm">
          <p className="display text-linen text-lg">
            Top Health <span className="italic text-blush">Spa</span>
          </p>
          <p>{ADDRESS} · <a href={TEL} className="hover:text-blush transition-colors">{PHONE}</a></p>
          <p>
            built by{" "}
            <a
              href="https://bysemaj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush hover:text-linen transition-colors"
            >
              bysemaj.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
