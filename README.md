# sneberg.cz

Web fotografa Michala Šneberga. Statický web (Astro), který se po každé změně
v tomto repozitáři sám sestaví a nasadí na GitHub Pages – obvykle do 2 minut.

## Nejjednodušší cesta: napiš, co chceš

V appce **GitHub** otevři tenhle repozitář → **Issues** → **New issue**.
Napiš `@claude` a za to svůj požadavek, fotky přilož rovnou do issue:

> **Title:** Nové fotky do svateb
> **Body:** `@claude Přidej tyhle tři fotky na začátek galerie Weddings.`

1. Do minuty ti Claude odpoví, co udělá. Za pár minut napíše, že je hotovo,
   a přidá odkaz **Create PR** — klikni na něj a potvrď. Vznikne
   **Pull request**, tedy návrh změny.
2. Do pár minut se v něm objeví odkaz **Otevřít náhled**: uvidíš web se
   změnou, ale ostrý web je pořád beze změny. Nelíbí se? Napiš do pull
   requestu komentář `@claude ještě tohle…` a náhled se obnoví.
3. Když se ti to líbí, dej **Merge**. Za minutu dvě je změna na ostrém webu.

Jedna věc za issue — půjde to rychleji a líp. Když se na web dostalo něco, co
tam být nemá: otevři ten pull request a dej **Revert** → **Merge**.

Všechno níž jde dělat i ručně, bez Clauda.

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
