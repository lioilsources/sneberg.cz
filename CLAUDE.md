# CLAUDE.md — pravidla pro web sneberg.cz

## Kdo ti píše

Majitel tohohle webu je fotograf, **ne vývojář**. Píše ti z telefonu, česky,
krátce a často nepřesně. Popisuje, co chce na webu vidět — ne, jak se to má
udělat.

Z toho plyne:

- **Neptej se, když se rozhodnout dá.** Když je zadání nejednoznačné, zvol
  rozumnou variantu, udělej ji, a v odpovědi napiš jednou větou, co jsi zvolil
  a proč. Ptej se jen tehdy, když by špatná volba znamenala vyhozenou práci.
- **Nepiš technicky.** Žádné názvy souborů, komponent ani balíčků v komunikaci
  s majitelem. „Přidal jsem do menu novou galerii" — ne „přidal jsem položku
  do `nav` v `site.ts`".
- **Jeden požadavek = jeden PR.** Když je zadání velké, udělej první krok
  a v komentáři navrhni pořadí zbytku.
- **Nevymýšlej si fakta.** Telefon, e-mail, adresu, ceny a texty o focení piš
  jen tak, jak je zadal majitel nebo jak už na webu jsou. Texty „o mně"
  nepřepisuj ani nevylepšuj, pokud o to nepožádá — je to jeho hlas.

Výjimka: když pracuješ lokálně v terminálu se správcem repa (`@lioilsources`),
komunikuj normálně technicky. Pravidla o chráněných cestách tam neplatí.

## Co je tohle za web

Portfolio fotografa, statický web v Astro. Při každé změně se sám sestaví.

```
src/
├── site.ts            kontakty (nahoře), menu, přesměrování starých adres
├── galleries/<nazev>/ jedna složka = jedna galerie; fotky + volitelné popisky
├── pages/             stránky: *.md jsou texty, *.astro mají vlastní rozvržení
├── layouts/           společná hlavička, menu a patička — jedno místo pro všechny stránky
├── styles/global.css  vzhled
└── assets/            logo a úvodní fotka (hero.jpg)
public/                ikony webu
```

Jak věci fungují — drž se toho, nevymýšlej jiný mechanismus:

- **Galerie se skládají samy ze složek.** Nová složka `src/galleries/gallery-8/`
  se objeví v menu jako „Gallery 8". Nic se nikam nezapisuje ručně.
- **Pořadí fotek je podle názvu souboru** (`010-…`, `020-…`). Novou fotku
  zařaď číslem, stávající nepřejmenovávej, pokud o změnu pořadí nejde.
- **Popisek fotky** je textový soubor se stejným názvem vedle ní
  (`040-foto.jpg` → `040-foto.txt`).
- **Fotky se zobrazují v původní kvalitě.** Neměň kompresi, formát ani
  rozměry výstupu a nepřeukládej majitelovy soubory — u fotografa je to
  to nejcitlivější místo. Náhledy si web dělá sám.
- **Odkazy uvnitř webu** piš přes pomocnou funkci `url()` ze `site.ts`
  a s lomítkem na konci (`/contact/`), stejně jako okolní kód.
- **Staré adresy** z původního webu jsou v `redirects` v `site.ts`. Když
  stránku nebo galerii přejmenuješ, přidej tam přesměrování ze starého názvu.

Fotky posílá majitel jako přílohy v issue. Ulož je do správné galerie pod
názvem bez diakritiky a mezer.

## Odpověď a Pull Request

- **Název** lidsky, česky: „Nová galerie Portréty", ne
  „feat(gallery): add gallery-8".
- **Popis** má dvě části:
  1. **Co se změnilo** — z pohledu člověka, který se dívá na web.
  2. **Jak to ověřit** — na které stránce a kde má změnu vidět. Odkaz na
     náhled se do PR přidá automaticky, zmiň ho.
- Když jsi něco zvolil za majitele (formulace, pořadí, velikost, umístění),
  napiš to a nabídni, že to změníš.

## Co nesmíš měnit

- `.github/**` — automatika, která web sestavuje a nasazuje
- `.claude/**` a `CLAUDE.md` — tvoje vlastní oprávnění a pravidla
- `astro.config.mjs` — adresa webu; chyba tady rozbije ostrý web
- `package.json` / `package-lock.json` — nepřidávej ani neaktualizuj balíčky,
  pokud to není jediná cesta. Když to nutné je, napiš v PR proč.

Když si myslíš, že požadavek jde splnit **jen** změnou v těchhle souborech,
neobcházej to. Napiš do issue, co by bylo potřeba, a označ `@lioilsources`.

## Kvalita — než pushneš

Vždycky:

```bash
npm run build     # musí projít bez chyb
```

Když build spadne kvůli tvojí změně, oprav to. Nepushuj rozbitý build —
majitel uvidí jen křížek a neví, co s tím.

Dál si ověř:

- Změna kontaktu je v `site.ts`, ne natvrdo v jednotlivých stránkách.
- Texty jsou na webu dvojjazyčně (anglicky a česky). Když měníš jednu
  jazykovou verzi, zkontroluj, jestli nemá protějšek, který má sedět.
- Nepřidávej externí skripty, sledovací kódy ani fonty z cizích serverů, pokud
  o to majitel výslovně nepožádal.
