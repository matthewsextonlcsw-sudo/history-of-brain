# Motion Spec: Pelican on a Bicycle

## Animation Style
*   **Frame Rate:** The animation should simulate a 12-15 FPS "jittery" feel. Avoid ultra-smooth 60fps linear transitions; use `steps()` in CSS for many movements.

## Key Sequences

### 1. The "Pedal Bob" (Pelican + Bike)
*   **Pattern:** Sinusoidal vertical translation.
*   **Timing:** 1.2s loop.
*   **CSS Implementation:** `translateY()` with a `steps(4)` or `steps(6)` function to mimic low-frame animation.

### 2. The Wheel Spin
*   **Pattern:** Continuous 360-degree rotation.
*   **Timing:** 1s loop.
*   **Style:** Use `steps(8)` to create the illusion of a rotating spoke pattern characteristic of retro sprites.

### 3. Parallax Scrolling
*   **Layers:**
    *   **Sky/Sun:** `translateX` slow (0.1x speed).
    *   **Distant Islands:** `translateX` medium (0.3x speed).
    *   **Ocean Waves:** `translateX` fast (0.6x speed) with a slight `translateY` bob.
    *   **Boardwalk/Foreground:** `translateX` very fast (1.0x speed).

### 4. Wing/Beak Life
*   **Wing:** 3-step "flap" sequence (Up, Mid, Down).
*   **Beak:** 2-step "blink" (Open, Closed).

## Timing & Easing
*   **General:** Use `ease-in-out` for natural weight, but wrap in `steps()` for the retro look.
*   **The "Jitter" Effect:** Occasionally apply a tiny `translate(1px, -1px)` to the whole scene to simulate old CRT flicker/shake.
