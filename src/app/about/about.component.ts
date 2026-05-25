import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-wrapper">

      <div class="about-grid">

        <!-- Photo column -->
        <div class="photo-col">
          <div class="photo-frame">
            <img
              src="assets/about.jpg"
              alt="Nicholas Skelton"
              class="photo"
            />
          </div>
          <div class="photo-caption">
            <span>Austin, Texas</span>
          </div>
        </div>

        <!-- Text column -->
        <div class="text-col">

          <h2 class="about-heading">
            Artist.<br>
            <span class="heading-dim">Leader.</span><br>
            <span class="heading-dimmer">Builder.</span>
          </h2>

          <div class="bio">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Hard-surface and environment artist focused on creating clean,
              production-ready assets with an emphasis on strong topology, material
              definition, and scene composition.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Experienced working in fast-paced team environments
              requiring organization, problem solving, visual execution, and deadline
              management. Excepteur sint occaecat cupidatat non proident.
            </p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div class="about-links">
            <a href="https://artstation.com/nicholasskelton" target="_blank" rel="noopener" class="about-link">
              ArtStation ↗
            </a>
            <a href="mailto:nicholasskelton30@gmail.com" class="about-link">
              nicholasskelton30&#64;gmail.com
            </a>
          </div>

        </div>
      </div>

    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,800;1,400&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --ink:        #1e2230;
      --paper:      #f0f1f4;
      --mid:        #dde0e8;
      --accent:     #4a6fa5;
      --accent-dim: #7a9bc4;
      --muted:      #8b91a3;

      display: block;
      font-family: 'DM Sans', sans-serif;
      background: var(--paper);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    a { text-decoration: none; color: inherit; }

    .about-wrapper {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 48px 96px;
      animation: fadeUp 0.5s 0.1s ease both;
    }

    /* ── Grid ── */
    .about-grid {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 0 72px;
      align-items: start;
    }

    /* ── Photo ── */
    .photo-col {
      position: sticky;
      top: 32px;
    }

    .photo-frame {
      width: 100%;
      aspect-ratio: 3/4;
      overflow: hidden;
      border-radius: 3px;
      background: var(--mid);
      box-shadow: 0 4px 32px rgba(30,34,48,0.10);
    }

    .photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      transition: transform 0.6s ease;
    }
    .photo-frame:hover .photo {
      transform: scale(1.03);
    }

    .photo-caption {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
    }
    .photo-caption span {
      font-size: 10.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      font-weight: 400;
    }

    /* ── Text ── */
    .text-col {
      padding-top: 4px;
    }

    .about-heading {
      font-family: 'EB Garamond', serif;
      font-weight: 800;
      font-size: clamp(48px, 6vw, 80px);
      line-height: 0.95;
      letter-spacing: -0.02em;
      color: var(--ink);
      margin-bottom: 40px;
    }
    .heading-dim    { color: var(--muted); font-weight: 400; font-style: italic; }
    .heading-dimmer { color: var(--mid);   font-weight: 400; font-style: italic; }

    .bio {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 44px;
      border-top: 1px solid var(--mid);
      padding-top: 28px;
    }
    .bio p {
      font-family: 'EB Garamond', serif;
      font-size: clamp(17px, 1.8vw, 20px);
      line-height: 1.75;
      color: var(--ink);
      font-weight: 400;
      letter-spacing: 0.01em;
    }

    /* ── Links ── */
    .about-links {
      display: flex;
      flex-direction: column;
      gap: 0;
      border-top: 1px solid var(--mid);
    }
    .about-link {
      display: block;
      padding: 14px 0;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      border-bottom: 1px solid var(--mid);
      transition: color 0.2s, padding-left 0.2s;
    }
    .about-link:hover {
      color: var(--accent);
      padding-left: 6px;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Responsive ── */
    @media (max-width: 760px) {
      .about-wrapper { padding: 36px 20px 64px; }
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px 0;
      }
      .photo-col { position: static; }
      .photo-frame { aspect-ratio: 4/3; }
    }
  `]
})
export class AboutComponent {}
