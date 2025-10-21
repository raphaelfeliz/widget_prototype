# Project Specifications — Blue Widget Prototype

A compact technical reference for the Blue Widget web component project.

---

## Overview

Goal  
Create a minimal, third-party embeddable widget using Vite and Shadow DOM encapsulation.  
The output is a single JavaScript file (blue-widget.js) that can be safely embedded on any external website.

Component  
<blue-widget> — a simple, self-contained "blue div" element with full style isolation.

---

## Core Environment

Node.js: v22.20.0  
npm: 11.6.2  
Vite: 7.1.11  
OS: Windows  
Editor: Visual Studio Code  

---

## Project Structure

widget_prototype/
src/
- main.js  
dist/
- blue-widget.js  
public/  
index.html  
vite.config.js  
package.json  
.gitignore  
project_specs.md  

---

## Vite Configuration Summary

Build type: Library mode  
Build format: IIFE (single browser-ready file)  
Entry file: src/main.js  
Output: dist/blue-widget.js  
Dynamic imports: Inlined  
Purpose: Produce one self-contained script with no module dependencies.

---

## Component Implementation Summary

Component name: <blue-widget>  
Encapsulation: Shadow DOM (mode: open)  
Purpose: Isolate styles and prevent CSS conflicts  
Behavior: Renders a styled blue div with text content  
Dependencies: None  

---

## Commands

npm install — install dependencies  
npm run dev — start local development server  
npm run build — create optimized bundle  

---

## Approach

Philosophy  
- Minimal and deterministic build pipeline  
- Full encapsulation and zero dependencies  
- Delivery-first mindset focused on deployability and cross-domain safety  

Build target  
A single JavaScript file deployable to Firebase Hosting.  
Embeddable using a simple script tag and the <blue-widget> element.  

---

## Verification

1. Run npm run build  
2. Confirm dist/blue-widget.js exists  
3. Embed locally with a script tag and <blue-widget>  
4. Observe a blue styled element without console errors  

---

## Next Phase

Phase 2 will include  
- Git initialization and remote repository setup  
- Firebase Hosting configuration  
- CORS header setup (Access-Control-Allow-Origin: *)  
- Automated CI/CD via GitHub Actions  

---

Author: Rafana  
Last updated: October 21, 2025  
Status: Phase 1 complete
