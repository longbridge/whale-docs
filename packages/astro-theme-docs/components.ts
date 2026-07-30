/**
 * MDX component map. Pass to `<Content components={mdxComponents} />` so docs
 * authors can use these as bare shortcodes.
 *
 * Spread it to add your own, or to rename:
 *
 *   const components = { ...mdxComponents, Figure: MyFigure };
 */
import Accordion from './src/components/mdx/Accordion.astro';
import AccordionGroup from './src/components/mdx/AccordionGroup.astro';
import Card from './src/components/mdx/Card.astro';
import Note from './src/components/mdx/Note.astro';
import Tip from './src/components/mdx/Tip.astro';
import Warning from './src/components/mdx/Warning.astro';
// Layout primitives that authors reach for as often as the prose ones.
// `CardGroup` is the documentation-facing name for the CardGrid component.
import CardGroup from './src/components/ui/card-grid/CardGrid.astro';
import Step from './src/components/ui/steps/Step.astro';
import Steps from './src/components/ui/steps/Steps.astro';

export const mdxComponents = {
  Accordion,
  AccordionGroup,
  Card,
  CardGroup,
  Note,
  Step,
  Steps,
  Tip,
  Warning,
} satisfies Record<string, unknown>;
