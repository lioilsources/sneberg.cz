import type { ImageMetadata } from 'astro';

export const site = {
  name: 'Michal Šneberg',
  tagline: 'Photographer',
  phone: '+420 7766 11111',
  phoneHref: 'tel:+420776611111',
  email: 'info@sneberg.cz',
  address: 'Prague, Czech Republic',
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => base + path;

export interface Photo {
  image: ImageMetadata;
  /** Address of the untouched original file. */
  original: string;
  caption: string;
}

export interface Gallery {
  slug: string;
  label: string;
  title: string;
  photos: Photo[];
}

// Page titles kept from the old site; other galleries get "Gallery N".
const titles: Record<string, string> = {
  weddings: 'Weddings, Svatba, Svatební fotograf',
  'gallery-7': 'Gallery - Photographer Michal Šneberg',
};

const images = import.meta.glob<ImageMetadata>(
  '/src/galleries/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
);
const originals = import.meta.glob<string>(
  '/src/galleries/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' },
);
const captions = import.meta.glob<string>('/src/galleries/*/*.txt', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const natural = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
const label = (slug: string) =>
  slug.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());

function loadGalleries(): Gallery[] {
  const bySlug = new Map<string, Photo[]>();
  for (const path of Object.keys(images).sort(natural.compare)) {
    const [, slug] = path.match(/\/galleries\/([^/]+)\//)!;
    const caption = captions[path.replace(/\.[^.]+$/, '.txt')]?.trim() ?? '';
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug)!.push({ image: images[path], original: originals[path], caption });
  }
  return [...bySlug.entries()]
    .sort(([a], [b]) => natural.compare(a, b))
    .map(([slug, photos]) => ({
      slug,
      label: label(slug),
      title: titles[slug] ?? label(slug),
      photos,
    }));
}

export const galleries = loadGalleries();

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'English', href: '/english/' },
      { label: 'Czech', href: '/czech/' },
    ],
  },
  {
    label: 'Gallery',
    children: galleries
      .filter((g) => g.slug.startsWith('gallery-'))
      .map((g) => ({ label: g.label, href: `/${g.slug}/` })),
  },
  {
    label: 'Info',
    children: [
      { label: 'Shooting', href: '/info/' },
      { label: 'Print', href: '/print/' },
    ],
  },
  { label: 'Weddings', href: '/weddings/' },
  { label: 'Contact', href: '/contact/' },
];

// Old WordPress addresses that changed, so existing links and search results keep working.
export const redirects: Record<string, string> = {
  'gallery/gallery-1': '/gallery-1/',
  'gallery/gallery-2': '/gallery-2/',
  'gallery/gallery-3': '/gallery-3/',
  'gallery/gallery-5': '/gallery-4/',
  'gallery/gallery-5-2': '/gallery-5/',
  'gallery/gallery-6': '/gallery-6/',
  'gallery/gallery-7': '/gallery-7/',
  'gallery/gallery-4': '/weddings/',
  'site-1': '/info/',
  'site-2': '/print/',
};
