# sneberg.cz

Web fotografa Michala Šneberga. Statický web (Astro), který se po každé změně
v tomto repozitáři sám sestaví a nasadí na GitHub Pages – obvykle do 2 minut.

## Jak přidat fotku do galerie

1. Na GitHubu otevři složku `src/galleries` a v ní galerii, např. `gallery-1`.
2. Klikni na **Add file → Upload files**, přetáhni fotky a potvrď **Commit changes**.
3. Za chvíli je fotka na webu. Náhledy se vytvoří samy.

Dobré vědět:

- **Pořadí** fotek je podle názvu souboru. Stávající fotky se jmenují `010-…`,
  `020-…`, takže fotka `015-nova.jpg` se zařadí mezi první a druhou a
  `005-nova.jpg` bude úplně první.
- **Velikost:** exportuj fotky s delší stranou kolem 2000–2500 px (JPEG).
  Soubory přímo z foťáku jsou zbytečně velké.
- **Popisek** (zobrazí se pod zvětšenou fotkou): nahraj vedle fotky textový
  soubor se stejným názvem, např. k `040-foto.jpg` soubor `040-foto.txt`.
- **Smazání fotky:** otevři soubor a v nabídce `…` zvol **Delete file**.

## Jak přidat novou galerii

Vytvoř ve `src/galleries` novou složku `gallery-8` (při nahrávání stačí
přetáhnout celou složku). V menu se objeví sama jako „Gallery 8".

## Jak upravit texty

- O fotografovi: `src/pages/czech.md` a `src/pages/english.md`
- Info o focení: `src/pages/info.md`, tisk: `src/pages/print.md`
- Telefon, e-mail, adresa: `src/site.ts` (nahoře)
- Úvodní fotka: `src/assets/hero.jpg` (nahraď souborem se stejným názvem)

Soubor otevři, klikni na tužku, uprav a potvrď **Commit changes**.

## Pro vývojáře

```
npm install
npm run dev      # náhled na http://localhost:4321
npm run build    # výstup do dist/
```
