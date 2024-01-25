import { getSettings } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "Scale3 - Blog Studio",
      template: "%s | Scale3"
    },
    description:
      settings?.description ||
      "Scale3 - Internal CMS for managing blog posts",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Scale3 Labs" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Stablo Template",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children }) {
  return <div>{children}</div>;
}
