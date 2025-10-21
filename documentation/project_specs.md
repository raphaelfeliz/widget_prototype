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

# Project Specifications — Blue Widget Prototype (Phase 2)

A compact technical reference for the Blue Widget web component project — Version Control and Firebase Setup phase.

---

## Overview

Goal  
Establish version control with Git and GitHub, and create a Firebase cloud hosting environment for automated deployment and cross-origin compatibility.  

Outcome  
A fully synced GitHub repository linked to a Firebase project, ready for CI/CD integration and CORS configuration.

---

## Core Environment

Node.js: v22.20.0  
npm: 11.6.2  
Vite: 7.1.11  
Firebase CLI: 14.20.0  
Git: Installed and configured  
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
.git/ (new)  
documentation/ (added for logs and specs)  

---

## Version Control Setup Summary

Repository name: widget_prototype  
Repository owner: raphaelfeliz  
Repository URL: https://github.com/raphaelfeliz/widget_prototype.git  
Branch: main  
Remote name: origin  
Initial commit: “Initial commit: project setup and Vite build”  

Purpose  
Maintain version history, enable collaboration, and provide a foundation for automated deployments.

---

## Firebase Project Summary

Project name: fdaChatAIStudio  
Project ID: gen-lang-client-0545699517  
Project number: 253278659379  
Environment type: Unspecified  
Apps: None (initial state)  

Purpose  
Provide a secure hosting environment for the blue-widget.js file, serving it globally with proper CORS headers for cross-domain access.

---

## Git Configuration Details

- Initialized a new Git repository locally  
- Set default branch to main  
- Linked to GitHub remote using HTTPS  
- Verified connectivity with `git remote -v`  
- Confirmed working tree is clean and synced  

---

## .gitignore Summary

Key exclusions  
- node_modules/  
- dist/  
- logs/  
- IDE files (.vscode, .idea)  

Purpose  
Keep repository clean by excluding large, regenerable, or irrelevant files.

---

## Commands

git init — create local repository  
git branch -M main — set default branch  
git remote add origin <repo-url> — link to remote  
git add . — stage all files  
git commit -m "Initial commit" — create first commit  
git push -u origin main — upload to GitHub  

---

## Approach

Philosophy  
- Every change is versioned and traceable  
- GitHub as the single source of truth  
- Firebase as the deployment endpoint  
- Automate builds through CI/CD  

Integration Focus  
- Source tracking (Git)  
- Hosting and deployment (Firebase)  
- Cross-domain access via CORS headers  

---

## Verification

1. Confirm .git directory exists locally  
2. Run git remote -v and check origin URL  
3. Visit GitHub repository and confirm files present  
4. Verify Firebase project in console  
5. Ensure both environments are ready for CI/CD connection  

---

## Next Phase

Phase 3 will include  
- Firebase CLI hosting initialization  
- Configuration of firebase.json for CORS headers  
- Linking Firebase Hosting to GitHub repository  
- Automated build and deployment through GitHub Actions  
- Verification of live deployment from external domains  

---

Author: Rafana  
Last updated: October 21, 2025  
Status: Phase 2 complete
