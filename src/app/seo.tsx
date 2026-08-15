import { useEffect } from "react";
import seo from "./seo.json";

type SeoMetadata = (typeof seo.routes)[number] & {
  canonical: string;
};

const siteUrl = seo.siteUrl.replace(/\/$/, "");

const metadataByPath = Object.fromEntries(
  seo.routes.map((metadata) => [
    metadata.path,
    {
      ...metadata,
      canonical: `${siteUrl}${metadata.path === "/" ? "/" : metadata.path}`,
    },
  ]),
) as Record<string, SeoMetadata>;

export function getSeoMetadata(pathname: string) {
  return metadataByPath[pathname] ?? metadataByPath["/"];
}

function getOrCreateMetaDescription() {
  const existing = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (existing) return existing;

  const meta = document.createElement("meta");
  meta.name = "description";
  document.head.append(meta);
  return meta;
}

function getOrCreateCanonical() {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (existing) return existing;

  const link = document.createElement("link");
  link.rel = "canonical";
  document.head.append(link);
  return link;
}

export function Seo({ pathname }: { pathname: string }) {
  useEffect(() => {
    const metadata = getSeoMetadata(pathname);

    document.title = metadata.title;
    getOrCreateMetaDescription().content = metadata.description;
    getOrCreateCanonical().href = metadata.canonical;
  }, [pathname]);

  return null;
}
