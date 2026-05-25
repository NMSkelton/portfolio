import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume-wrapper">

      <!-- Download bar -->
      <div class="download-bar">
        <span class="download-label">Curriculum Vitae</span>
        <a class="download-btn" href="assets/Skelton_Resume.pdf" download="Skelton_Resume.pdf">
          <span class="download-icon">↓</span> Download PDF
        </a>
      </div>

      <!-- Summary -->
      <section class="resume-section summary-section">
        <p class="summary-text">
          Hard-surface and environment artist focused on creating clean, production-ready assets
          with an emphasis on strong topology, material definition, and scene composition.
          Experienced working in fast-paced team environments requiring organization, problem
          solving, visual execution, and deadline management.
        </p>
      </section>

      <div class="resume-divider"></div>

      <!-- Experience -->
      <section class="resume-section">
        <h2 class="section-heading">Experience</h2>

        <div class="entries">

          <div class="entry">
            <div class="entry-meta">
              <span class="entry-date">Mar 2020 – May 2024<br>Oct 2024 – Present</span>
            </div>
            <div class="entry-body">
              <div class="entry-title-row">
                <span class="entry-role">Team Leader</span>
                <span class="entry-org">Target — Houston, TX &amp; Austin, TX</span>
              </div>
              <p class="entry-desc">
                Led multiple retail departments including apparel, home, general merchandise,
                and fulfillment, with responsibilities centered around spatial organization,
                visual presentation, workflow coordination, and large-scale department
                transitions. Worked within fast-paced team environments requiring adaptability,
                attention to detail, and consistent execution across evolving layouts and priorities.
              </p>
            </div>
          </div>

          <div class="entry">
            <div class="entry-meta">
              <span class="entry-date">Jul 2017 – Feb 2020</span>
            </div>
            <div class="entry-body">
              <div class="entry-title-row">
                <span class="entry-role">Floor Supervisor</span>
                <span class="entry-org">Tommy Bahama — Houston &amp; Austin, TX</span>
              </div>
              <p class="entry-desc">
                Transitioned into a client-focused leadership role and later oversaw the men's
                division, analyzing performance trends and developing strategic action plans to
                improve department efficiency, presentation, and overall results. Collaborated
                closely with leadership and team members to maintain cohesive visual standards
                and operational consistency.
              </p>
            </div>
          </div>

          <div class="entry">
            <div class="entry-meta">
              <span class="entry-date">Sep 2016 – May 2017</span>
            </div>
            <div class="entry-body">
              <div class="entry-title-row">
                <span class="entry-role">Co-Manager</span>
                <span class="entry-org">Eddie Bauer — Estero, FL</span>
              </div>
            </div>
          </div>

          <div class="entry">
            <div class="entry-meta">
              <span class="entry-date">May 2007 – Sep 2016</span>
            </div>
            <div class="entry-body">
              <div class="entry-title-row">
                <span class="entry-role">Store Manager / Asst. Manager / Key Holder</span>
                <span class="entry-org">Nautica — Estero, FL</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div class="resume-divider"></div>

      <!-- Education -->
      <section class="resume-section">
        <h2 class="section-heading">Education</h2>

        <div class="entries">
          <div class="entry">
            <div class="entry-meta">
              <span class="entry-date">Oct 2014</span>
            </div>
            <div class="entry-body">
              <div class="entry-title-row">
                <span class="entry-role">B.S. Game Art</span>
                <span class="entry-org">Full Sail University</span>
              </div>
              <ul class="entry-bullets">
                <li>Trained in all aspects of the 3D pipeline, creating game-ready and optimized 3D models from concept through engine implementation.</li>
                <li>Focused on hard-surface asset creation, environment modeling, and texture development within real-time production workflows.</li>
                <li>Graduated with honors of Salutatorian.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="resume-divider"></div>

      <!-- Skills -->
      <section class="resume-section skills-section">
        <h2 class="section-heading">Skills</h2>

        <div class="skills-grid">
          <div class="skill-group">
            <h3 class="skill-group-label">Software</h3>
            <ul class="skill-list">
              <li>Maya</li>
              <li>ZBrush</li>
              <li>Substance Painter</li>
              <li>Substance Designer</li>
              <li>Marmoset Toolbag</li>
              <li>Photoshop</li>
              <li>3DS Max</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3 class="skill-group-label">Strengths</h3>
            <ul class="skill-list">
              <li>Hard-surface modeling</li>
              <li>Environment art</li>
              <li>Topology &amp; UV layout</li>
              <li>Material &amp; texture development</li>
              <li>Real-time production workflows</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3 class="skill-group-label">Professional</h3>
            <ul class="skill-list">
              <li>Team leadership</li>
              <li>Deadline management</li>
              <li>Keen attention to detail</li>
              <li>Organized &amp; methodical</li>
              <li>Strong problem solver</li>
            </ul>
          </div>
        </div>
      </section>

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

    .resume-wrapper {
      max-width: 860px;
      margin: 0 auto;
      padding: 48px 48px 96px;
      animation: fadeUp 0.5s 0.1s ease both;
    }

    /* ── Download bar ── */
    .download-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--mid);
    }
    .download-label {
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--accent);
    }
    .download-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ink);
      border: 1px solid var(--mid);
      padding: 8px 16px;
      border-radius: 2px;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .download-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(74,111,165,0.05);
    }
    .download-icon {
      font-size: 14px;
      line-height: 1;
    }

    /* ── Summary ── */
    .summary-text {
      font-family: 'EB Garamond', serif;
      font-size: clamp(17px, 2vw, 20px);
      line-height: 1.75;
      color: var(--ink);
      font-style: italic;
      letter-spacing: 0.01em;
    }

    /* ── Divider ── */
    .resume-divider {
      height: 1px;
      background: var(--mid);
      margin: 44px 0;
    }

    /* ── Section heading ── */
    .section-heading {
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 32px;
    }

    /* ── Entries ── */
    .entries {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .entry {
      display: grid;
      grid-template-columns: 160px 1fr;
      gap: 0 32px;
      padding: 20px 0;
      border-bottom: 1px solid var(--mid);
    }
    .entry:first-child { border-top: 1px solid var(--mid); }

    .entry-meta {
      padding-top: 2px;
    }
    .entry-date {
      font-size: 11px;
      font-weight: 400;
      color: var(--muted);
      line-height: 1.6;
      letter-spacing: 0.02em;
    }

    .entry-title-row {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0 12px;
      margin-bottom: 8px;
    }
    .entry-role {
      font-family: 'EB Garamond', serif;
      font-size: 18px;
      font-weight: 500;
      color: var(--ink);
      line-height: 1.2;
    }
    .entry-org {
      font-size: 12px;
      font-weight: 400;
      color: var(--accent-dim);
      letter-spacing: 0.04em;
    }
    .entry-desc {
      font-size: 13.5px;
      font-weight: 300;
      color: var(--ink);
      line-height: 1.65;
    }
    .entry-bullets {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .entry-bullets li {
      font-size: 13.5px;
      font-weight: 300;
      color: var(--ink);
      line-height: 1.6;
      padding-left: 14px;
      position: relative;
    }
    .entry-bullets li::before {
      content: '–';
      position: absolute;
      left: 0;
      color: var(--accent-dim);
    }

    /* ── Skills ── */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0 40px;
    }
    .skill-group-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 14px;
    }
    .skill-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .skill-list li {
      font-size: 13.5px;
      font-weight: 300;
      color: var(--ink);
      padding: 8px 0;
      border-bottom: 1px solid var(--mid);
      line-height: 1.3;
    }
    .skill-list li:first-child { border-top: 1px solid var(--mid); }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      .resume-wrapper { padding: 32px 20px 64px; }
      .entry { grid-template-columns: 1fr; gap: 4px 0; }
      .entry-date { margin-bottom: 6px; }
      .skills-grid { grid-template-columns: 1fr; gap: 32px 0; }
    }
  `]
})
export class ResumeComponent {}
