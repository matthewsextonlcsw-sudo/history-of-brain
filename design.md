# Design Spec: Pelican on a Bicycle

## Concept
A high-fidelity 16-bit retro-themed animation of a pelican riding a bicycle along a coastal boardwalk. The scene captures the "vibe" of a classic 90s side-scrolling adventure game.

## Aesthetic
*   **Art Style:** 16-bit Pixel Art (Super Nintendo era). 
*   **Color Palette:** "Sunset Coastal"
    *   Sky: `#FF7F50` (Coral) to `#FFD700` (Gold) gradient.
    *   Ocean: `#00CED1` (Dark Turquoise) and `#40E0D0` (Turquoise).
    *   Sand/Boardwalk: `#F4A460` (Sandy Brown).
    *   Pelican: White (`#FFFFFF`), Orange beak (`#FFA500`), Grey accents.
    *   Bicycle: Bright Red (`#FF0000`) with Chrome-ish highlights (`#C0C0C0`).
*   **Typography:** A pixelated sans-serif font (simulated with CSS `image-rendering: pixelated` and specific system fonts if needed).

## Composition
*   **Layer 1 (Background):** Distant islands and sun. Slow-moving parallax.
*   **Layer 2 (Midground):** Ocean waves. Medium-speed parallax.
*   **Layer 3 (Foreground/Primary):** The Boardwalk. The Pelican on the bicycle.
*   **Layer 4 (Foreground Overlays):** Palm leaves or seaside flowers occasionally passing by the camera (Fast parallax).

## Motion & Animation
*   **Parallax Scrolling:** Background elements move at different speeds to create depth.
*   **The Pelican:** 
    *   Subtle vertical "bobbing" as it pedals.
    *   Beak/Eye blinks.
    *   Wings slightly flapping for balance.
*   **The Bicycle:**
    *   Spinning wheels (rotation animation).
    *   Pedal movement (subtle rotation).
*   **Environmental:** 
    *   Ocean waves with a "stepped" animation style (not smooth, but 8-12 FPS feel).
    *   Clouds moving slowly.

## Technical Constraints
*   **Resolution:** 320x240 (scaled up to maintain pixelated look).
*   **Rendering:** `image-rendering: pixelated;` on all assets.
*   **Framework:** HTML5, CSS3 (animations/transforms), vanilla JS for logic/timing.
