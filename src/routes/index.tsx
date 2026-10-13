import { createFileRoute } from "@tanstack/react-router";
import { BackToTop } from "@/components/back-to-top";
import { Contact } from "@/components/contact";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WorkProcess } from "@/components/work-process";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Избранные проекты — Вайбкодинг-портфолио" },
      {
        name: "description",
        content:
          "StudyFlow, НейроАналитик и LaunchPro — избранные AI- и веб-проекты специалиста по вайбкодингу.",
      },
      { property: "og:title", content: "Избранные проекты — Вайбкодинг-портфолио" },
      {
        property: "og:description",
        content: "Три идеи, ставшие цифровыми продуктами: обучение, аналитика и запуск продукта.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
        <WorkProcess />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
