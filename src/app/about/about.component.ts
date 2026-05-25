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
              Being able to create something from nothing. The void of an empty Maya scene staring back at you, holding
              limitless potential. If you can think it, then it can be created. More than any traditional medium I’ve worked
              with, 3D art encourages a deeper understanding of the subjects you recreate — not just how something looks, but
              how it’s built, how materials interact, how forms are constructed, and how objects occupy space. Every asset
              becomes a process of observation and problem solving, breaking down real-world design into shapes, surfaces, and
              functionality. That blend of technical precision and creativity is what first drew me to 3D art and continues to
              drive my work today.
            </p>
            <p>
              I enjoy fiction novels, especially techno-thrillers, and like many people my age, I grew up playing a lot of video
              games. Those interests helped build my appreciation for worldbuilding, environmental storytelling, and the incredible
              amount of detail that goes into creating believable fictional spaces. Whether it was the atmosphere of a worn industrial
              corridor, the design of a futuristic vehicle, or the subtle details that made a game world feel lived-in, I became
              fascinated by the artistry behind the experiences I enjoyed.
            </p>
            <p>
              That fascination eventually led me toward 3D art. What began as curiosity quickly turned into a passion for understanding
              how environments, props, and materials are constructed from the ground up. I’ve always been drawn to hard-surface and
              environment work in particular — the balance between technical structure and artistic presentation, where functionality,
              form, and visual storytelling all intersect.
            </p>
            <p>
              My approach to art is heavily rooted in observation and problem solving. I enjoy studying real-world materials, architecture,
              industrial design, and manufacturing techniques to better understand why objects look and function the way they do. Translating
              those details into a digital space is what makes the process rewarding to me. Every project becomes an opportunity to learn
              something new, refine my workflow, and continue developing as an artist.
            </p>
            <p>
              Outside of art, I’ve spent years working in fast-paced leadership roles that strengthened my ability to stay organized,
              adapt quickly, collaborate with teams, and work effectively under deadlines. Those experiences continue to shape the way I approach creative work today — with consistency, attention to detail, and a strong focus on execution.
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
      max-width: min(1280px, 94vw);
      margin: 0 auto;
      padding: 56px 48px 96px;
      animation: fadeUp 0.5s 0.1s ease both;
    }

    /* ── Grid ── */
    .about-grid {
      display: grid;
      grid-template-columns: minmax(360px, 420px) 1fr;
      gap: 0 96px;
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
