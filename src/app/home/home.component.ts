import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">

      <!-- Hero: name + title, fills upper viewport -->
      <div class="hero">
        <div class="hero-location">Austin, Texas</div>

        <h1 class="hero-name">
          <span class="name-first">Nicholas</span>
          <span class="name-last">Skelton</span>
        </h1>

        <p class="hero-title">3D Artist &mdash; Hard Surface &amp; Environment</p>

        <!-- Nav links inline on home -->
        <nav class="hero-nav">
          <a routerLink="/about">About</a>
          <span class="nav-dot">·</span>
          <a routerLink="/gallery">Gallery</a>
          <span class="nav-dot">·</span>
          <a routerLink="/resume">Résumé</a>
        </nav>
      </div>

      <!-- Rule -->
      <div class="home-rule"></div>

      <!-- Content band: blurb + list -->
      <div class="home-content">
        <p class="home-blurb">
          I'm a 3D artist specializing in hard-surface and environment art, with a focus on
          creating immersive scenes, believable materials, and polished assets. I enjoy blending
          technical precision with strong visual composition to create work that feels
          lived-in and grounded.
        </p>

        <div class="content-divider"></div>

        <div class="home-list-col">
          <span class="list-label">To do</span>
          <ul class="home-list">
            <li>Visit Santorini</li>
            <li>Learn to sail</li>
            <li>Run a half marathon</li>
            <li>Write a novel</li>
            <li>See the northern lights</li>
          </ul>
        </div>
      </div>

    </div>
  `,
  styles: [`
    :host {
      --ink:        #364066;
      --paper:      #f0f1f4;
      --mid:        #dde0e8;
      --accent:     #4a6fa5;
      --accent-dim: #7a9bc4;
      --muted:      #8b91a3;

      display: flex;
      flex-direction: column;
      height: 100vh;
      font-family: 'DM Sans', sans-serif;
      background: var(--paper);
      color: var(--ink);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    a { text-decoration: none; color: inherit; }

    /* ── Home shell ── */
    .home {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 56px;
    }

    /* ── Hero — upper 60% ── */
    .hero {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-bottom: 12px;
    }

    .hero-location {
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 16px;
      animation: fadeUp 0.6s 0.05s ease both;
    }

    .hero-name {
      display: flex;
      flex-direction: column;
      line-height: 0.88;
      margin-bottom: 20px;
      animation: fadeUp 0.6s 0.1s ease both;
    }
    .name-first {
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      font-weight: 400;
      font-size: clamp(52px, 9vw, 110px);
      color: var(--muted);
      letter-spacing: 0.05em;
    }
    .name-last {
      font-family: 'EB Garamond', serif;
      font-weight: 800;
      font-size: clamp(72px, 13vw, 168px);
      color: var(--ink);
      letter-spacing: -0.03em;
      margin-top: 4px;
    }

    .hero-title {
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent-dim);
      margin-bottom: 32px;
      animation: fadeUp 0.6s 0.18s ease both;
    }

    .hero-nav {
      display: flex;
      align-items: center;
      gap: 10px;
      animation: fadeUp 0.6s 0.26s ease both;
    }
    .hero-nav a {
      font-size: 10.5px;
      font-weight: 500;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--muted);
      transition: color 0.2s;
    }
    .hero-nav a:hover { color: var(--ink); }
    .nav-dot {
      color: var(--mid);
      font-size: 14px;
      line-height: 1;
    }

    /* ── Rule ── */
    .home-rule {
      height: 1px;
      background: var(--mid);
      flex-shrink: 0;
      animation: fadeUp 0.6s 0.3s ease both;
    }

    /* ── Content band — lower ~30% ── */
    .home-content {
      display: grid;
      grid-template-columns: 1fr 1px 240px;
      gap: 0 48px;
      align-items: center;
      padding: 28px 0 32px;
      flex-shrink: 0;
      animation: fadeUp 0.6s 0.36s ease both;
    }

    .home-blurb {
      font-family: 'EB Garamond', serif;
      font-size: clamp(16px, 1.6vw, 19px);
      line-height: 1.7;
      color: var(--ink);
      letter-spacing: 0.01em;
    }

    .content-divider {
      background: var(--mid);
      align-self: stretch;
    }

    .home-list-col {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .list-label {
      font-size: 9.5px;
      font-weight: 500;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .home-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .home-list li {
      font-size: 12.5px;
      font-weight: 300;
      color: var(--ink);
      padding: 7px 0;
      border-bottom: 1px solid var(--mid);
      line-height: 1.3;
    }
    .home-list li:first-child { border-top: 1px solid var(--mid); }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 700px) {
      .home { padding: 0 24px; height: auto; min-height: 100vh; }
      :host { height: auto; }
      .hero { padding-top: 52px; padding-bottom: 32px; }
      .home-content {
        grid-template-columns: 1fr;
        gap: 28px 0;
        padding: 28px 0 48px;
      }
      .content-divider { height: 1px; align-self: auto; }
    }
  `]
})
export class HomeComponent {}
