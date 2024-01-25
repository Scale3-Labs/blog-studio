import OgImage from "@/components/ogimage";
import { getPostBySlug } from "@/lib/sanity/client";
import { ImageResponse } from "@vercel/og";

// const InterRegular = fetch(
//   new URL("../../../../public/fonts/Inter.ttf", import.meta.url)
// ).then(res => res.arrayBuffer());

const InterBold = fetch(
  new URL("../../../../public/fonts/Inter-Bold.otf", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler({ params }) {
  const post = await getPostBySlug(params.slug);

  const fontData = await InterBold;

  return new ImageResponse(<OgImage post={post} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontData,
        style: "normal"
      }
    ]
  });
}
