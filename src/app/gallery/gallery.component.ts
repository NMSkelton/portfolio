import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImageSet {
  id: number;
  title: string;
  description: string;
  images: { url: string; caption: string }[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-wrapper">
      <header class="gallery-header">
        <span class="gallery-eyebrow">Visual Archive</span>
        <h1 class="gallery-title">My 3D Art</h1>
        <p class="gallery-subtitle">{{ imageSets.length }} collections</p>
      </header>

      <!-- Grid of thumbnail sets -->
      <div class="sets-grid">
        @for (set of imageSets; track set.id) {
          <div class="set-card" (click)="openSet(set)" (keydown.enter)="openSet(set)" tabindex="0" role="button" [attr.aria-label]="'Open ' + set.title">
            <div class="thumbnail-frame">
              <img
                [src]="set.images[0].url"
                [alt]="set.title + ' thumbnail'"
                class="thumbnail-img"
              />
              <div class="thumbnail-overlay">
                <span class="set-count">{{ set.images.length }} photos</span>
                <span class="view-label">View Set →</span>
              </div>
              <div class="thumbnail-strip">
                @for (img of set.images.slice(1, 4); track img.url) {
                  <div class="strip-thumb">
                    <img [src]="img.url" [alt]="img.caption" />
                  </div>
                }
                @if (set.images.length > 4) {
                  <div class="strip-more">+{{ set.images.length - 4 }}</div>
                }
              </div>
            </div>
            <div class="set-meta">
              <h2 class="set-title">{{ set.title }}</h2>
              <p class="set-desc">{{ set.description }}</p>
            </div>
          </div>
        }
      </div>

      <!-- Lightbox -->
      @if (activeSet()) {
        <div class="lightbox" (click)="closeLightbox()" role="dialog" [attr.aria-label]="activeSet()!.title + ' lightbox'">
          <div class="lightbox-inner" (click)="$event.stopPropagation()">

            <button class="lb-close" (click)="closeLightbox()" aria-label="Close lightbox">✕</button>

            <div class="lb-image-area">
              <button
                class="lb-arrow lb-arrow--left"
                (click)="prevImage()"
                aria-label="Previous image"
              >&#8592;</button>

              <div class="lb-image-container">
                <img
                  [src]="activeSet()!.images[activeIndex()].url"
                  [alt]="activeSet()!.images[activeIndex()].caption"
                  class="lb-image"
                />
                <div class="lb-caption">
                  <span class="lb-caption-text">{{ activeSet()!.images[activeIndex()].caption }}</span>
                  <span class="lb-counter">{{ activeIndex() + 1 }} / {{ activeSet()!.images.length }}</span>
                </div>
              </div>

              <button
                class="lb-arrow lb-arrow--right"
                (click)="nextImage()"
                aria-label="Next image"
              >&#8594;</button>
            </div>

            <div class="lb-filmstrip">
              @for (img of activeSet()!.images; track img.url; let i = $index) {
                <button
                  class="filmstrip-thumb"
                  [class.active]="i === activeIndex()"
                  (click)="goToImage(i)"
                  [attr.aria-label]="'Go to image ' + (i + 1)"
                >
                  <img [src]="img.url" [alt]="img.caption" />
                </button>
              }
            </div>

            <div class="lb-set-title">
              <span class="lb-set-name">{{ activeSet()!.title }}</span>
              <span class="lb-set-desc">{{ activeSet()!.description }}</span>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,800;1,400&family=DM+Sans:wght@300;400;500&display=swap');

    :host {
      --ink: #1e2230;
      --paper: #f0f1f4;
      --mid: #dde0e8;
      --accent: #4a6fa5;
      --accent-dim: #7a9bc4;
      --muted: #8b91a3;
      --white: #ffffff;
      --shadow-soft: 0 4px 24px rgba(26,26,24,0.10);
      --shadow-card: 0 2px 8px rgba(26,26,24,0.08), 0 8px 32px rgba(26,26,24,0.06);
      --radius: 4px;
      display: block;
      font-family: 'DM Sans', sans-serif;
      background: var(--paper);
      min-height: 100vh;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .gallery-wrapper {
      max-width: 1600px;
      margin: 0 auto;
      padding: 48px 48px 80px;
    }

    /* Header */
    .gallery-header {
      margin-bottom: 56px;
      border-bottom: 1px solid var(--mid);
      padding-bottom: 32px;
    }
    .gallery-eyebrow {
      display: block;
      font-family: 'DM Sans', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 10px;
    }
    .gallery-title {
      font-family: 'EB Garamond', serif;
      font-size: clamp(40px, 6vw, 72px);
      font-weight: 700;
      color: var(--ink);
      line-height: 1;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
    }
    .gallery-subtitle {
      font-size: 14px;
      color: var(--muted);
      font-weight: 300;
    }

    /* Grid */
    .sets-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 40px;
    }

    .set-card {
      cursor: pointer;
      outline: none;
    }
    .set-card:focus-visible .thumbnail-frame {
      box-shadow: 0 0 0 3px var(--accent);
    }

    .thumbnail-frame {
      position: relative;
      aspect-ratio: 4/3;
      background: var(--mid);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow-card);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    .set-card:hover .thumbnail-frame {
      transform: translateY(-3px);
      box-shadow: 0 8px 40px rgba(26,26,24,0.15);
    }

    .thumbnail-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    .set-card:hover .thumbnail-img {
      transform: scale(1.04);
    }

    .thumbnail-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 40%, rgba(26,26,24,0.72) 100%);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 16px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .set-card:hover .thumbnail-overlay { opacity: 1; }

    .set-count {
      font-size: 12px;
      color: rgba(255,255,255,0.8);
      font-weight: 300;
      letter-spacing: 0.05em;
    }
    .view-label {
      font-size: 12px;
      color: var(--white);
      font-weight: 500;
      letter-spacing: 0.05em;
    }

    /* Strip of extra thumbs */
    .thumbnail-strip {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      height: 56px;
      background: rgba(26,26,24,0.5);
      backdrop-filter: blur(4px);
      transform: translateY(100%);
      transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    }
    .set-card:hover .thumbnail-strip { transform: translateY(0); }

    .strip-thumb {
      flex: 1;
      overflow: hidden;
      border-right: 1px solid rgba(255,255,255,0.1);
    }
    .strip-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .strip-thumb:hover img { opacity: 1; }

    .strip-more {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 14px;
      color: rgba(255,255,255,0.7);
      font-size: 12px;
      font-weight: 500;
    }

    /* Set meta */
    .set-meta {
      margin-top: 16px;
    }
    .set-title {
      font-family: 'EB Garamond', serif;
      font-size: 20px;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 4px;
    }
    .set-desc {
      font-size: 13px;
      color: var(--muted);
      font-weight: 300;
      line-height: 1.5;
    }

    /* ── Lightbox ── */
    /* ── Lightbox — full viewport ── */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(12,14,20,0.97);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      animation: lbFadeIn 0.22s ease;
    }
    @keyframes lbFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    .lightbox-inner {
      width: 100%;
      max-width: 1600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    /* Close — top-right of viewport */
    .lb-close {
      position: fixed;
      top: 18px;
      right: 22px;
      background: none;
      border: none;
      color: rgba(255,255,255,0.4);
      font-size: 22px;
      cursor: pointer;
      padding: 4px 8px;
      transition: color 0.2s;
      line-height: 1;
      z-index: 10;
    }
    .lb-close:hover { color: var(--white); }

    /* Image area — arrows overlap the image edges */
    .lb-image-area {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .lb-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      width: 52px;
      height: 52px;
      background: rgba(255,255,255,0.18);
      border: 1.5px solid rgba(255,255,255,0.4);
      border-radius: 50%;
      color: var(--white);
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, border-color 0.2s, transform 0.2s;
      backdrop-filter: blur(6px);
    }
    .lb-arrow--left  { left: 16px; }
    .lb-arrow--right { right: 16px; }
    .lb-arrow:hover {
      background: rgba(255,255,255,0.32);
      border-color: rgba(255,255,255,0.7);
      transform: translateY(-50%) scale(1.1);
    }

    /* Image container — fills viewport minus ~16px gutters on each side */
    .lb-image-container {
      position: relative;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    .lb-image {
      display: block;
      max-width: calc(100vw - 32px);
      max-height: calc(100vh - 80px);
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 6px;
      animation: imgSlide 0.18s ease;
      box-shadow: 0 8px 64px rgba(0,0,0,0.6);
    }
    @keyframes imgSlide {
      from { opacity: 0; transform: scale(0.985); }
      to   { opacity: 1; transform: scale(1); }
    }

    .lb-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 28px 16px 12px;
      background: linear-gradient(transparent, rgba(0,0,0,0.6));
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-radius: 0 0 2px 2px;
    }
    .lb-caption-text {
      font-size: 12px;
      color: rgba(255,255,255,0.75);
      font-weight: 300;
    }
    .lb-counter {
      font-size: 11px;
      color: rgba(255,255,255,0.4);
      font-weight: 500;
      letter-spacing: 0.08em;
      white-space: nowrap;
      margin-left: 16px;
    }

    /* Filmstrip + set info — fixed overlay at very bottom, doesn't consume image space */
    .lb-filmstrip {
      position: fixed;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 5px;
      overflow-x: auto;
      padding: 6px 10px;
      background: rgba(12,14,20,0.75);
      backdrop-filter: blur(8px);
      border-radius: 6px;
      max-width: calc(100vw - 32px);
      scrollbar-width: none;
      z-index: 10;
    }
    .lb-filmstrip::-webkit-scrollbar { display: none; }

    .filmstrip-thumb {
      flex-shrink: 0;
      width: 48px;
      height: 32px;
      border: 2px solid transparent;
      border-radius: 3px;
      overflow: hidden;
      cursor: pointer;
      background: #1a1a1a;
      padding: 0;
      transition: border-color 0.2s, opacity 0.2s;
      opacity: 0.38;
    }
    .filmstrip-thumb.active { border-color: var(--accent); opacity: 1; }
    .filmstrip-thumb:hover  { opacity: 0.72; }
    .filmstrip-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

    .lb-set-title {
      position: fixed;
      top: 14px;
      left: 20px;
      display: flex;
      align-items: baseline;
      gap: 10px;
      z-index: 10;
    }
    .lb-set-name {
      font-family: 'EB Garamond', serif;
      font-size: 15px;
      color: rgba(255,255,255,0.55);
      font-weight: 400;
    }
    .lb-set-desc {
      font-size: 11px;
      color: rgba(255,255,255,0.25);
      font-weight: 300;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .gallery-wrapper { padding: 32px 16px 60px; }
      .sets-grid { grid-template-columns: 1fr; gap: 28px; }
      .lb-arrow { width: 42px; height: 42px; font-size: 18px; }
      .lb-arrow--left  { left: 6px; }
      .lb-arrow--right { right: 6px; }
      .lb-image-container { max-width: 100vw; max-height: calc(100vh - 60px); }
      .lb-image { max-width: 100vw; max-height: calc(100vh - 60px); }
    }
  `]
})
export class GalleryComponent {
  activeSet = signal<ImageSet | null>(null);
  activeIndex = signal(0);

  imageSets: ImageSet[] = [
    {
      id: 1,
      title: 'German Flak 88',
      description: 'The Flak 88 was a German 88mm artillery gun developed for anti-aircraft defense during World War II. It later became infamous for its effectiveness against tanks and fortified targets.',
      images: [
        { url: 'assets/flak1.jpg', caption: 'Flak 1' },
        { url: 'assets/flak2.jpg', caption: 'Flak 2' },
        { url: 'assets/flak3.jpg', caption: 'Flak 3' },
        { url: 'assets/flak4.jpg', caption: 'Flak 4' },
      ]
    },
    {
      id: 2,
      title: 'Jurrasic Park Jeep 18',
      description: 'The iconic Jeep 18 from Jurassic Park, used to transport visitors through Isla Nublar’s dinosaur park. Seen throughout the park tour sequences alongside characters like Ian Malcolm, Alan Grant, and Ellie Sattler.',
      images: [
        { url: 'assets/jeep1.jpg', caption: 'Jeep 1' },
        { url: 'assets/jeep2.jpg', caption: 'Jeep 2' },
        { url: 'assets/jeep3.jpg', caption: 'Jeep 3' },
        { url: 'assets/jeep4.jpg', caption: 'Jeep 4' },
      ]
    },
    {
      id: 3,
      title: 'Thompson Submachine Gun',
      description: 'The Thompson submachine gun was an American firearm widely used during World War II. Known for its .45 caliber firepower, it became a staple weapon for infantry and close-quarters combat.',
      images: [
        { url: 'assets/thompson1.jpg', caption: 'Thompson 1' },
        { url: 'assets/thompson2.jpg', caption: 'Thompson 2' },
        { url: 'assets/thompson3.jpg', caption: 'Thompson 3' },
      ]
    },
    {
      id: 4,
      title: 'Warplock Jezzail',
      description: 'Long-rifle of Clan Skryre, built to kill-slay from far-far away. Crack-boom lightning and warpstone fire make man-things hide-scurry, yes-yes.',
      images: [
        { url: 'assets/jezzail1.jpg', caption: 'Jezzail 1' },
        { url: 'assets/jezzail2.jpg', caption: 'Jezzail 2' },
        { url: 'assets/jezzail3.jpg', caption: 'Jezzail 3' },
      ]
    },
    {
      id: 5,
      title: 'Captain’s Quarters Assets: Vol. 1',
      description: 'A collection of items to populate the Quarters of some famed pirate captain. This collection has everything: books, scrolls, filigreed cups, a Teddy Ruxpin wearing mascara.',
      images: [
        { url: 'assets/captain1.jpg', caption: 'Captain 1' },
        { url: 'assets/captain2.png', caption: 'Captain 2' },
        { url: 'assets/captain3.png', caption: 'Captain 3' },
        { url: 'assets/captain4.png', caption: 'Captain 4' },
      ]
    },
    {
      id: 6,
      title: 'Panzer IV',
      description: 'The Panzer IV was one of Germany’s most widely used medium tanks during World War II. It served across multiple fronts and remained in production throughout much of the war.',
      images: [
        { url: 'assets/panzer1.png', caption: 'Panzer 1' },
        { url: 'assets/panzer2.png', caption: 'Panzer 2' },
        { url: 'assets/panzer3.png', caption: 'Panzer 3' },
      ]
    },
  ];

  openSet(set: ImageSet): void {
    this.activeSet.set(set);
    this.activeIndex.set(0);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.activeSet.set(null);
    document.body.style.overflow = '';
  }

  nextImage(): void {
    const set = this.activeSet();
    if (set) {
      this.activeIndex.update(i => (i + 1) % set.images.length);
    }
  }

  prevImage(): void {
    const set = this.activeSet();
    if (set) {
      this.activeIndex.update(i => (i - 1 + set.images.length) % set.images.length);
    }
  }

  goToImage(index: number): void {
    this.activeIndex.set(index);
  }
}
