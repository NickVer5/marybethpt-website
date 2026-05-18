# Advanced Integrative Physical Therapy — Website

Mary Beth Antolini Verlander's practice website. Five pages: Home, About, Services, What to Expect, Contact. Built as static HTML, CSS, and JavaScript — no build step, no framework, nothing to maintain except the files themselves.

---

## What's in this folder

```
site/
├── index.html              Homepage
├── about.html              About Mary Beth
├── services.html           Modalities and conditions treated
├── what-to-expect.html     First visit, process, FAQs
├── contact.html            Contact info + form
├── css/
│   └── style.css           All styles for the site
├── js/
│   └── main.js             Mobile nav, scroll reveals, form handler
├── images/
│   └── favicon.svg         Browser tab icon (the AIPT seal)
└── README.md               This file
```

---

## Before launch: what needs to be filled in or replaced

The site is functional but has several placeholders that need real values before going live. Search the codebase for `Editor's note` to find inline reminders on the pages themselves. The full list:

### 1. Booking links

Every "Book a Consultation" or "Book" button currently points to `#` (nowhere). Replace with Mary Beth's WebPT patient portal URL once it's confirmed.

To do this: open each HTML file and search for `href="#"` near the word `Book`. Replace `#` with the actual URL.

Locations:
- `index.html` — 3 instances (header, hero, closing CTA)
- `about.html` — 2 instances (header, closing CTA)
- `services.html` — 2 instances (header, closing CTA)
- `what-to-expect.html` — 2 instances (header, closing CTA)
- `contact.html` — 1 instance (header)

### 2. Formspree form ID (contact form)

The contact form currently posts to `https://formspree.io/f/YOUR_FORMSPREE_ID`. Sign up for a free Formspree account at https://formspree.io, create a form, and replace `YOUR_FORMSPREE_ID` with the form's actual ID.

The free tier handles 50 submissions per month — more than enough for a boutique practice. Submissions go to whatever email you configure at Formspree (default: marybeth@marybethpt.com).

Location: `contact.html`, search for `YOUR_FORMSPREE_ID`.

### 3. Google Maps embed

The Contact page has a placeholder where a real Google Maps iframe should go. To replace it:

1. Go to https://www.google.com/maps
2. Search for "5920 Roswell Road Suite D-101 Atlanta GA 30328"
3. Click Share → Embed a map → Copy HTML
4. Open `contact.html`, find the `<div style="background: var(--cream-soft); ...">` block, and replace it with the iframe code

### 4. Specific hours of operation

The Contact page lists hours as "By appointment." If Mary Beth wants specific hours displayed (Monday–Friday 8am-6pm or whatever applies), update `contact.html` in the contact list.

### 5. Things to confirm with Mary Beth

The following content is my best inference from category norms and the bio Mary Beth provided. She should review and correct as needed before launch:

- **Session lengths** (`what-to-expect.html`, step 3): I assumed 75-90 min initial, 60 min follow-up.
- **Payment model** (`what-to-expect.html`, "Insurance & payment" card): I assumed cash-pay with superbills, which is standard for boutique PRC practices. Confirm.
- **Visit frequency** (`what-to-expect.html`): I described weekly or every-other-week tapering — typical of integrative PT but should be confirmed.
- **Conditions treated list** (`index.html` and `services.html`): I drew from common PT/PRC presentations. She may want to add or remove items based on her actual caseload.
- **The brief phone consultation** (`what-to-expect.html` step 2, and home page CTA): I built the funnel around an initial phone call as the entry point. If she'd rather have patients book a first visit directly, the copy should change.

### 6. Replace placeholder photography

The site is currently photo-free, which is intentional — a clean text-and-mark layout works better than bad stock photography. But the site will be significantly stronger with:

- A professional headshot of Mary Beth
- Photos of the clinic space (treatment room, reception, exterior)
- Maybe one detail shot of hands doing manual work, anonymized

Once you have photos, add an `images/` folder with them and update the relevant pages. I recommend adding a portrait to the About page near "From neurosurgery to physical therapy" and to the Home page in the "Practitioner" section. Hiring a local Atlanta photographer for a half-day session typically costs $300-600.

---

## Deploying to Vercel

Vercel is free for a site this size, includes SSL automatically, and is the easiest deployment path for static sites.

### One-time setup

1. **Create a Vercel account** at https://vercel.com (sign in with GitHub if you have it; if not, create both).

2. **Put the site code in a Git repository.** Easiest path:
   - Create a free GitHub account if you don't have one
   - Create a new repository called `marybethpt-website`
   - Upload all the files from this folder to that repository (GitHub's web interface lets you drag-and-drop)

3. **Import the repo into Vercel.**
   - In Vercel, click "Add New → Project"
   - Connect your GitHub account
   - Select the `marybethpt-website` repo
   - Leave all the default build settings (none needed for static HTML)
   - Click Deploy

After about 30 seconds, Vercel gives you a URL like `marybethpt-website.vercel.app`. That's your site, live on the internet.

### Connecting your domain (marybethpt.com)

1. In Vercel, open the project → Settings → Domains
2. Add `marybethpt.com` and `www.marybethpt.com`
3. Vercel will show you DNS records to add at wherever your domain is registered (GoDaddy, Namecheap, etc.)
4. Log into your domain registrar and update the DNS records as Vercel instructs
5. Wait 5-60 minutes for DNS to propagate, then `marybethpt.com` will point to your Vercel site with SSL enabled automatically

---

## Making changes after launch

### For small text edits

1. Edit the relevant `.html` file directly (any text editor works: VS Code, Sublime, even Notepad)
2. Save the file
3. Push changes to GitHub (drag-and-drop on github.com works, or use git from the command line)
4. Vercel automatically detects the change and redeploys within ~30 seconds

### For larger changes

Edit, preview locally by opening the `.html` file in your browser, then push to GitHub when you're satisfied.

### What you can safely edit yourself

- Any text content inside the HTML pages
- Phone number, email, address (these appear in multiple places — search-and-replace across all five HTML files)
- Hours of operation, booking links
- Adding new conditions to the conditions list
- Swapping or adding photos

### What requires care

- The CSS file (`css/style.css`) controls how everything looks. Small edits are fine; large structural changes can break the layout.
- The header and footer are repeated identically across all five pages. If you change something in one, change it in all five so the site stays consistent.
- The JavaScript file is small and unlikely to need changes.

---

## Design system reference

These are the design values used throughout the site. Useful if you ever need to extend it (add a new page, design an email template, etc.).

**Colors:**
- Cream background: `#f5f3ef`
- Cream warm (alternate sections): `#ede8db`
- Cornflower blue (primary brand color): `#3a6ea5`
- Cornflower dark (deeper emphasis): `#2c5282`
- Bronze (accents): `#8b6f47`
- Charcoal (body text): `#4a4a4a`

**Fonts (loaded from Google Fonts):**
- Headers and editorial text: Spectral
- UI labels and body text: Inter

**Logo:** The AIPT seal is embedded inline as SVG in every page header. Standalone versions are also available in your `aipt-deliverables` folder.

---

## Costs

Recurring:
- Domain (marybethpt.com): ~$15/year, wherever it's registered now
- Vercel hosting: $0 (free tier)
- Formspree (contact form): $0 (free tier, 50 submissions/month)

Total ongoing: ~$15/year.

One-time, if you choose to invest in them:
- Professional photography: $300-600
- A freelancer to set up Vercel + Formspree + map embed for you: $100-300 on Upwork or Fiverr if you'd rather not do it yourself

---

## When something breaks

If the site goes down or a deployment fails:
1. Check Vercel's deployment log (Project → Deployments → click the most recent)
2. If a recent change caused it, you can revert: Vercel → Deployments → click the previous working deployment → Promote to Production

If the contact form stops working: log into Formspree and check the form status. Most likely cause is hitting the monthly limit (upgrade if needed) or a Formspree configuration change.

---

## Credits

Logo design: AIPT seal with spine-as-I monogram, designed alongside business card and stationery in spring 2026.
Typography: Spectral and Inter, both free for commercial use.
Built as static HTML, CSS, JS — no framework, no build step, no maintenance overhead.
