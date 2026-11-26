// ALL customer content lives here. Edit this file only.
window.CONFIG = {
  meta: {
    title: "Musa & Lavizah | Wedding Invitation",
    description: "Join us on 12 Des 2026",
    language: "en",
    googleFonts: true,
  },
  // preset: "ivory-champagne" (default) | "blush-rose" | "midnight-luxury" | "floral-garden"
  theme: {
    preset: "ivory-champagne",
    overrides: {
      "--env": "#E8C2C4",
      "--env-2": "#b4a6a3",
      "--gold-3": "#F7E9E5",
      "--liner": "#0e0d0d",
      "--seal-1": "#F5D4D8",
      "--seal-2": "#E8C2C4",
      "--seal-3": "#D9B9A5",
      "--seal-ink": "#860808",
    },
  }, // overrides e.g. { "--accent": "#8a1f3d" }
  reveal: {
    monogram: "M & L",
    hint: "Tap the seal to open",
    durationMs: 2200,
    holdMs: 500,
  }, // durationMs = safety net only; holdMs = pause after the card is out, before the envelope exits
  hero: {
    eyebrow: "You are cordially invited to the Wedding Ceremony of",
    names: "Musa & Lavizah",
    dateText: "Saturday, 12 Dec 2026",
    subtitle: "Son of Mr. & Mrs. Fazal Subhan and Daughter of Mr. & Mrs. Noor Muhammad",
  },
  blessing: {
    enabled: true,
    text: "And We created you in pairs. (Surah An-Naba 78:8)",
  },
  countdown: {
    enabled: true,
    title: "Counting the Days",
    targetISO: "2026-12-12T12:00:00+05:00",
    doneText: "Today is the day!",
    labels: {
      d: "Days",
      h: "Hours",
      m: "Minutes",
      s: "Seconds",
    },
  },
  timeline: {
    enabled: true,
    title: "Schedule of Events",
    items: [
      {
        time: "11:00 AM",
        title: "Lunch",
        note: "",
      },
      {
        time: "4:00 PM",
        title: "Tea",
        note: "",
      },
      {
        time: "6:00 PM",
        title: "Ceremony",
        note: "",
      },
    ],
  },
  venue: {
    enabled: true,
    title: "Venue",
    name: "Noor Muhammad House",
    address:"Sector F6, Phase 6, Hayatabad, Peshawar",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=House+527+Street+7+Sector+F6+Phase+6+Hayatabad+Peshawar",
  },
  gallery: {
    enabled: true,
    title: "Our Moments",
    items: [
      // put JPG/WebP files in assets/; missing files show an elegant placeholder
      {
        src: "assets/photo-01.jpg",
        alt: "musa & Lavizah laughing together",
        caption: "The day we met",
        focus: "50% 35%",
      },
      {
        src: "assets/photo-02.jpg",
        alt: "Lavizah and musa at sunset",
        caption: "Our first trip",
        focus: "50% 40%",
      },
      {
        src: "assets/photo-03.jpg",
        alt: "The proposal",
        caption: "The proposal",
        focus: "50% 40%",
      },
      {
        src: "assets/photo-04.jpg",
        alt: "Musa and lavizah with family",
        caption: "Family",
        focus: "50% 40%",
      },
    ],
  },
  rsvp: {
    enabled: true,
    title: "Kindly Respond",
    method: "whatsapp",
    target: "+923069225577",
    deadlineText: "by 1 Dec 2026",
    fields: [
      {
        id: "name",
        label: "Your name",
        type: "text",
        required: true,
      },
      {
        id: "guests",
        label: "Number of guests",
        type: "number",
        required: true,
      },
      {
        id: "attending",
        label: "Will you attend?",
        type: "choice",
        options: ["InshaAllah, We’ll Join You!", "We’ll Try Our Best to Come!"],
        required: true,
      },
    ],
  },
  closing: {
    title: "With Love",
    text: "We cannot wait to celebrate with you.",
    signature: "Musa & Lavizah",
  },

  // ---- NEW (all optional; remove them and the site still works) ----
  // Background music: save a small licensed MP3 as assets/music.mp3, then set enabled: true.
  // It starts when the guest taps the seal, and a small play/pause button appears.
  music: {
    enabled: false,
    src: "assets/music.mp3",
    label: "Music",
  },
  // Set any of these to false to turn that effect off.
  effects: {
    particles: true,
    petals: true,
    cursorTrail: true,
    autoplayGallery: true,
  },
};
