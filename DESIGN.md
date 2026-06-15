# DESIGN.md — نظام تصميم موقع رصيد

> Brand register · RTL عربي · Astro static. اللون استراتيجية **Committed**: النبيتي يحمل الهوية، الذهبي accent حاد محدود.

## Color (OKLCH — محايدات مائلة لِحُمرة البراند)
```css
--maroon-900: oklch(0.28 0.13 352);  /* أعمق — خلفيات drenched */
--maroon-700: oklch(0.40 0.17 353);  /* ≈ #7A004B هوية */
--maroon-500: oklch(0.52 0.18 355);
--gold-500:   oklch(0.72 0.12 78);   /* ≈ #B9872D accent */
--gold-300:   oklch(0.85 0.09 84);
--ink:        oklch(0.26 0.02 350);  /* نص داكن دافئ — لا #000 */
--paper:      oklch(0.985 0.006 350);/* أوف-وايت دافئ — لا #fff */
--paper-2:    oklch(0.96 0.010 350);
--muted:      oklch(0.55 0.02 350);
--line:       oklch(0.90 0.012 350);
```
- **الهيرو drenched نبيتي** (maroon-900→700)، نص فاتح (paper)، الذهبي للـCTA/التوكيدات الصغيرة فقط.
- الأقسام الفاتحة على paper/paper-2، النص ink، الفواصل line.
- ممنوع: gradient-text، side-stripe، glass افتراضي.

## Typography
- **Display (عناوين كبيرة): `Reem Kufi`** — كوفي هندسي مميز (مش Cairo-في-كل-حتة).
- **Body/UI: `Cairo`** — هوية التطبيق، للنص والأزرار والتفاصيل.
- مقياس fluid `clamp()`, تباين ≥1.25:
```css
--step-fluid-hero: clamp(2.6rem, 7vw, 5.5rem);
--step-2xl: clamp(2rem, 4.5vw, 3.25rem);
--step-xl:  clamp(1.5rem, 3vw, 2.1rem);
--step-lg:  1.35rem; --step-md: 1.05rem; --step-sm: 0.92rem;
```
- النص الفاتح على داكن: line-height +0.05. عرض السطر ≤ 70ch.

## Space (fluid، إيقاع متنوّع — مش padding ثابت)
```css
--s-1:.5rem; --s-2:.85rem; --s-3:1.25rem; --s-4:2rem;
--s-5:clamp(2.5rem,5vw,4rem); --s-6:clamp(4rem,9vw,7rem);  /* فواصل الأقسام */
--radius:14px; --radius-lg:22px;
--maxw:1080px;
```

## Motion
- page-load واحد منظّم: stagger reveal للهيرو (opacity + translateY بسيط)، عبر IntersectionObserver للأقسام.
- ease: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-expo)، بلا bounce.
- الأكورديون (FAQ): transition `grid-template-rows`.
- يحترم `prefers-reduced-motion: reduce` (يلغي الحركة).
- ممنوع تحريك خصائص layout.

## Layout
- غير متماثل، مش centered-stack. عرض أقصى `--maxw`، هوامش fluid.
- جولة الشاشات: صورة في **إطار موبايل** + شرح، بالتناوب يمين/شمال (مش شبكة متطابقة).
- الكروت آخر حل؛ لو لزمت: `repeat(auto-fit, minmax(280px,1fr))`، بلا تداخل.

## Imagery
- لقطات شاشات v1.6.0 الحقيقية (المثال التجريبي) داخل إطارات موبايل = الصور الأساسية. صفر بلوكات لون مكان صورة.

## Sections (ترتيب الصفحة الطويلة)
هيرو (drenched) → ما هو رصيد → نظرة المميزات → جولة شاشة-بشاشة → خطوات الاستخدام → الأمان والخصوصية → تحميل + SHA-256 → FAQ (أكورديون) → فوتر.