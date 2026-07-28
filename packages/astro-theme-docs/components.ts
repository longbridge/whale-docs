import Accordion from './src/components/whale/Accordion.astro';
import AccordionGroup from './src/components/whale/AccordionGroup.astro';
import Card from './src/components/whale/Card.astro';
import Note from './src/components/whale/Note.astro';
import Tip from './src/components/whale/Tip.astro';
import Warning from './src/components/whale/Warning.astro';

export const mdxComponents = {
  Accordion,
  AccordionGroup,
  Card,
  Note,
  Tip,
  Warning,
} satisfies Record<string, unknown>;
