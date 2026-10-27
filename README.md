# Musfiqur Rahman Portfolio

Build a polished, responsive personal portfolio website for Md. Musfiqur Rahman, a CSE undergraduate at AIUB. Use the provided reference sites for inspiration, especially https://zahid8910.github.io/ and https://sites.google.com/view/zahid8910/home, but do NOT copy their exact design or content. Create a distinctive modern portfolio with a light, clean editorial style, deep navy/charcoal text, restrained blue/teal accents, generous whitespace, subtle motion, excellent typography, responsive layouts, accessible contrast, and a mobile navigation menu.

Important: this is an extensible first version. The owner will add more projects, research, publications, certificates, and achievements later. Build reusable data-driven sections/cards and obvious, centralized content arrays/placeholders so new items can be added without redesigning the page. Do not fabricate degrees, jobs, awards, publications, metrics, project outcomes, dates, technologies, or contact details. Use clearly marked "Details coming soon" / "Add details later" placeholders where information is not yet verified.

Profile links:
- GitHub: https://github.com/Musfiq53062
- LinkedIn: https://www.linkedin.com/in/md-musfiqur-rahman-060623248/
- ResearchGate: https://www.researchgate.net/profile/Md-Musfiqur-Rahman-12
- ORCID profile link provided: https://orcid.org/my-orcid (treat as a placeholder link; do not invent an ORCID identifier)

Verified/identified public GitHub repositories to feature as initial project cards:
1. Regional-Load-Shedding-Severity-Classification-Using-Supply-Side-Constraints-in-Bangladesh — research/ML classification project; link https://github.com/Musfiq53062/Regional-Load-Shedding-Severity-Classification-Using-Supply-Side-Constraints-in-Bangladesh
2. SmartDoorLockUsingBitwiseAuthentication — digital logic / smart door-lock project; link https://github.com/Musfiq53062/SmartDoorLockUsingBitwiseAuthentication. Its README describes bitwise authentication with a 5-bit PIN, a limited attempt mechanism, motion detection, comparators, flip-flops, and logic gates.
3. Pharmacy_Management_System_CSharp — C# pharmacy management project; link https://github.com/Musfiq53062/Pharmacy_Management_System_CSharp
4. WTechSpring_25-26 — web technology coursework; link https://github.com/Musfiq53062/WTechSpring_25-26
5. dotnet_lab — .NET coursework/labs; link https://github.com/Musfiq53062/dotnet_lab
6. DATA-COM-LAB-REPORTS — data communication lab reports; link https://github.com/Musfiq53062/DATA-COM-LAB-REPORTS
7. Fun — empty repository; do not present as a completed project; optionally omit or put in a private hidden/uncurated list.
Some repository README files were unavailable, so descriptions beyond the confirmed names must remain conservative and editable. Do not imply that every repository is a polished standalone project.

Structure:
- Sticky responsive header with initials/wordmark "MR", nav links Home, About, Skills, Projects, Research, Education, Contact.
- Hero with name "Md. Musfiqur Rahman", concise editable tagline such as "CSE Student | Machine Learning & Software Development", a short authentic intro without unsupported claims, CTA buttons "Explore Projects" and "Contact Me", and social/profile links.
- About section: editable short biography; do not invent detailed personal background.
- Areas of interest: Machine Learning, Explainable AI, Software Development, Data Analysis, and Research, clearly editable.
- Skills section grouped by programming languages, frameworks/tools, databases, and ML/data tools. Only include technologies the owner has confirmed; for unconfirmed items, use clearly editable placeholder arrays and avoid rating/proficiency bars.
- Featured Projects with reusable cards, category filters (All / Machine Learning & Research / Software Development / Coursework), GitHub links, short descriptions, tech-stack tags only where confirmed, and an optional "View repository" link. Include a "More projects will be added" card or subtle empty-state CTA.
- Research & Publications section with separate reusable cards for publications, ongoing research, datasets, and conference presentations. Seed it with an editable draft entry for research on regional Bangladesh load-shedding severity classification and supply-side constraints, linking to the GitHub repository. Do not call it published or claim a venue. Add visible "Add research item" placeholder card and fields for title, status (Ongoing / Preprint / Published), year, abstract, DOI/paper link, dataset, code link. Don't invent current publication status.
- Datasets section with a future-ready card for the extended Bangladesh electricity dataset (2019–2026), linking to https://data.mendeley.com/datasets/yp5y4thtfm/1. Explain cautiously that it combines an attributed historical portion with a later extension sourced from BPDB, and let the owner edit the description. Add DOI / download links only if verified.
- Education section with an editable AIUB CSE entry; avoid inventing dates, GPA, or expected graduation.
- Certifications & Achievements section: placeholder cards, clearly indicating content can be added later. Do not fabricate entries.
- Contact section with a contact form UI that gives honest validation/confirmation; if no backend exists, label it as a front-end demo and offer email/social links rather than pretending messages are delivered. Do not invent an email or phone number.
- Footer with profile links and copyright year generated dynamically.

Implementation requirements:
- Build a working, polished site, not just a static mockup.
- Use React + TypeScript + Tailwind/shadcn components consistent with this project environment.
- Responsive and accessible, keyboard-friendly, semantic HTML, reduced-motion support.
- Add subtle scroll reveal/hover effects without over-animating.
- Keep project/research/content entries in centralized typed arrays/objects to make future additions straightforward.
- Use local placeholder visuals or tasteful CSS patterns; don't fabricate personal photos. Provide a clean avatar/monogram fallback.
- No authentication or database needed for this initial portfolio. Do not publish/deploy automatically; create the project preview so I can review it first.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://musfiqur-rahman-portfolio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d6861af7-3ab5-4d4e-ae39-ef52400c0428).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
