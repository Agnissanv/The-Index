export const categoryMeta: Record<string, { label: string; blurb: string }> = {
  writing: { label: "Writing", blurb: "Copy, blog posts, and long-form drafting assistants." },
  image: { label: "Image", blurb: "Text-to-image generation and visual asset tools." },
  video: { label: "Video", blurb: "Avatar video, editing, and generation tools." },
  audio: { label: "Audio", blurb: "Voice generation, transcription, and podcast editing." },
  coding: { label: "Coding", blurb: "In-editor and AI-native code assistants." },
  productivity: { label: "Productivity", blurb: "AI layered into everyday work docs and tasks." },
  research: { label: "Research", blurb: "Answer engines and source-backed lookup tools." },
  design: { label: "Design", blurb: "Presentations, layout, and rapid design generation." },
};

export const categoryList = Object.entries(categoryMeta).map(([slug, meta]) => ({
  slug,
  label: meta.label,
}));
