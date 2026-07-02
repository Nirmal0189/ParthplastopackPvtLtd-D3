import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.parthplastopack.com';

  const staticPages = [
    '', '/about', '/products', '/industries',
    '/infrastructure', '/quality', '/gallery', '/contact',
  ];

  const productSlugs = [
    'protein-powder-container-1kg', 'protein-container-2kg',
    'hdpe-wide-mouth-jar-500cc', 'pharma-grade-pet-amber-bottle',
    'effervescent-tablet-tube', 'child-resistant-crc-caps',
    'medicine-jar-100cc', 'medicine-jar-200cc',
    'large-hdpe-jar-1000cc', 'securipack-tamper-evident-cap',
    'tablet-container-300cc', 'small-effervescent-tube',
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const products: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...pages, ...products];
}
