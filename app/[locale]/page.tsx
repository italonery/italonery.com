import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { ArticlesSection } from '@/components/articles-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ArticlesSection />
    </>
  );
}
