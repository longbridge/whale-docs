"use client";

import * as React from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/components/ui/carousel";

interface Props {
  marketLabel?: string;
  watchlistLabel?: string;
  assetsLabel?: string;
  newsLabel?: string;
  ariaLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

export default function WhaleAppCarousel({
  marketLabel = "Market",
  watchlistLabel = "Watchlist",
  assetsLabel = "Assets",
  newsLabel = "News",
  ariaLabel = "WhaleApp SDK screen examples",
  previousLabel = "Previous screen",
  nextLabel = "Next screen",
}: Props) {
  const screens = [
    { label: marketLabel, src: "/images/whalesdk/screenshot-market.png" },
    { label: watchlistLabel, src: "/images/whalesdk/screenshot-watchlist.png" },
    { label: assetsLabel, src: "/images/whalesdk/screenshot-assets.png" },
    { label: newsLabel, src: "/images/whalesdk/screenshot-news.png" },
  ];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div className="my-10 flex flex-col items-center gap-5" aria-label={ariaLabel}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-[min(360px,calc(100vw-5rem))]"
        aria-label={ariaLabel}
      >
        <div className="relative rounded-[15%/7.5%] border border-white/25 bg-gradient-to-br from-neutral-500 via-neutral-950 to-neutral-700 p-3 shadow-2xl">
          <div className="pointer-events-none absolute top-[2.4%] left-1/2 z-10 h-[4.4%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[12%/6%] bg-background">
            <CarouselContent className="-ml-0">
              {screens.map((screen, index) => (
                <CarouselItem key={screen.src} className="pl-0">
                  <img
                    src={screen.src}
                    alt={`${screen.label} — WhaleApp SDK`}
                    width={1170}
                    height={2532}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="block aspect-[1170/2532] w-full object-cover object-top"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <div className="pointer-events-none absolute bottom-[1.7%] left-1/2 z-10 h-1 w-[32%] -translate-x-1/2 rounded-full bg-black/75" />
        </div>
        <CarouselPrevious label={previousLabel} className="hidden sm:inline-flex" />
        <CarouselNext label={nextLabel} className="hidden sm:inline-flex" />
      </Carousel>

      <div className="flex items-baseline gap-2">
        <strong className="text-sm">{screens[current]?.label}</strong>
        <span className="text-xs text-muted-foreground">
          {current + 1} / {screens.length}
        </span>
      </div>

      <div className="flex gap-2" role="tablist" aria-label={ariaLabel}>
        {screens.map((screen, index) => (
          <button
            key={screen.src}
            type="button"
            role="tab"
            aria-label={screen.label}
            aria-selected={current === index}
            onClick={() => api?.scrollTo(index)}
            className="grid size-5 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span
              className={
                current === index
                  ? "h-2 w-4 rounded-full bg-primary transition-all"
                  : "size-2 rounded-full bg-muted-foreground/35 transition-all"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

