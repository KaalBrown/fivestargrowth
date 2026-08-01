import { EpiphanyBridge } from "@/components/sections/EpiphanyBridge";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { PricingPacks } from "@/components/sections/PricingPacks";
import { ReviewsPreview } from "@/components/sections/ReviewsPreview";
import { ValueStack } from "@/components/sections/ValueStack";
import { localBusinessJsonLd } from "@/lib/seo";

export default function HomePage() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} /><Hero /><PainPoints /><EpiphanyBridge /><ValueStack /><ReviewsPreview /><PricingPacks /><FAQ /></>; }
