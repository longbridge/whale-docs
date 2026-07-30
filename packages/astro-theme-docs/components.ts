import Accordion from './src/components/mdx/Accordion.astro';
import AccordionGroup from './src/components/mdx/AccordionGroup.astro';
import Card from './src/components/mdx/Card.astro';
import Note from './src/components/mdx/Note.astro';
import Tip from './src/components/mdx/Tip.astro';
import Warning from './src/components/mdx/Warning.astro';

export const mdxComponents = {
  Accordion,
  AccordionGroup,
  Card,
  Note,
  Tip,
  Warning,
} satisfies Record<string, unknown>;
