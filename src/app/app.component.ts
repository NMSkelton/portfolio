import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="site-wrapper" [class.is-home]="isHome()">

      @if (!isHome()) {
        <header class="site-header">
          <div class="header-meta-top">
            <span class="meta-item">Austin, Texas</span>
          </div>
          <h1 class="site-name">
            <span class="name-first">Nicholas</span>
            <span class="name-last">Skelton</span>
          </h1>
          <div class="header-meta-bottom">
            <a class="meta-email" href="mailto:nicholasskelton30@gmail.com">nicholasskelton30&#64;gmail.com</a>
          </div>
        </header>

        <nav class="site-nav">
          <div class="nav-rule"></div>
          <ul class="nav-links">
            <li><a routerLink="/"         routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
            <li><a routerLink="/about"    routerLinkActive="active">About</a></li>
            <li><a routerLink="/gallery"  routerLinkActive="active">Gallery</a></li>
            <li><a routerLink="/resume"   routerLinkActive="active">Résumé</a></li>
          </ul>
          <div class="nav-rule"></div>
        </nav>
      }

      <main class="site-main">
        <router-outlet></router-outlet>
      </main>

      @if (!isHome()) {
        <footer class="site-footer">
          <span>© {{ year }} Nicholas Skelton</span>
        </footer>
      }

    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,800;1,400;1,800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --ink:        #364066;
      --paper:      #f0f1f4;
      --mid:        #dde0e8;
      --accent:     #4a6fa5;
      --accent-dim: #7a9bc4;
      --muted:      #8b91a3;
      --white:      #ffffff;

      display: block;
      font-family: 'DM Sans', sans-serif;
      background: var(--paper);
      color: var(--ink);
      min-height: 100vh;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    a { text-decoration: none; color: inherit; }

    .site-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .site-wrapper.is-home {
      height: 100vh;
      overflow: hidden;
    }

    /* ── Header ── */
    .site-header {
      text-align: center;
      padding: 64px 32px 36px;
      animation: fadeUp 0.65s ease both;
    }

    .header-meta-top  { margin-bottom: 20px; animation: fadeUp 0.65s 0.05s ease both; }
    .header-meta-bottom { margin-top: 18px;  animation: fadeUp 0.65s 0.22s ease both; }

    .meta-item {
      font-size: 10.5px;
      font-weight: 400;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .meta-email {
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      letter-spacing: 0.14em;
      color: var(--accent-dim);
      transition: color 0.2s;
    }
    .meta-email:hover { color: var(--accent); }

    .site-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.88;
      animation: fadeUp 0.65s 0.12s ease both;
    }
    .name-first {
      font-family: 'Libre Baskerville', serif;
      font-style: italic;
      font-weight: 400;
      font-size: clamp(44px, 8vw, 96px);
      color: var(--muted);
      letter-spacing: 0.06em;
    }
    .name-last {
      font-family: 'EB Garamond', serif;
      font-style: normal;
      font-weight: 800;
      font-size: clamp(66px, 12.5vw, 152px);
      color: var(--ink);
      letter-spacing: -0.03em;
      margin-top: 4px;
    }

    /* ── Nav ── */
    .site-nav {
      padding: 0 32px;
      animation: fadeUp 0.65s 0.3s ease both;
    }
    .nav-rule { height: 1px; background: var(--mid); }
    .nav-links {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
    }
    .nav-links li a {
      display: block;
      padding: 13px 20px;
      font-size: 10.5px;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      position: relative;
      transition: color 0.2s;
    }
    .nav-links li a::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 18px;
      height: 2px;
      background: var(--accent);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-links li a:hover,
    .nav-links li a.active { color: var(--ink); }
    .nav-links li a:hover::after,
    .nav-links li a.active::after { transform: translateX(-50%) scaleX(1); }

    /* ── Main / Footer ── */
    .site-main { flex: 1; }
    .is-home .site-main { flex: 1; display: flex; flex-direction: column; }

    .site-footer {
      text-align: center;
      padding: 28px 32px;
      font-size: 10.5px;
      letter-spacing: 0.12em;
      color: var(--muted);
      border-top: 1px solid var(--mid);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 600px) {
      .site-header { padding: 44px 20px 28px; }
      .nav-links li a { padding: 13px 11px; }
      .site-nav { padding: 0 16px; }
      .site-wrapper.is-home { height: auto; overflow: auto; }
    }
  `]
})
export class AppComponent {
  title = 'portfolio';
  year = new Date().getFullYear();
  isHome = signal(false);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isHome.set(e.urlAfterRedirects === '/' || e.urlAfterRedirects === '');
    });
  }
}
