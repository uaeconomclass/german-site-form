# Project: German Site Form (Energieausweis Wizard)

## Overview
Data-driven multi-step form for German energy certificate workflows, delivered as a static preview and as a WordPress plugin integration.

## Core Features
- JSON-driven wizard steps with conditional logic and validation.
- German tooltip/content catalog sourced from project documents.
- Build pipeline that generates preview assets and syncs assets into the WordPress plugin.
- WordPress shortcode rendering and REST-backed draft persistence for created applications.

## Tech Stack
- **Frontend Runtime:** Vanilla JavaScript (modular runtime files), HTML, CSS.
- **Spec/Data Layer:** JSON step definitions and option/tooltip catalogs.
- **Build/Automation:** PowerShell scripts (`tools/build-preview.ps1`, `tools/build-wp-plugin.ps1`).
- **CMS Integration:** WordPress plugin in PHP.
- **Repository:** Git with GitHub workflow directory present.

## Architecture Notes
- `src/energieausweis-form/spec/*` is the source of truth for steps/options/tooltips.
- `src/energieausweis-form/runtime/*.js` renders and validates the wizard generically.
- `preview/*` is generated output and should not be edited manually.
- `wp-plugin/energieausweis-form/*` contains plugin code and generated frontend assets for WordPress.

## Non-Functional Requirements
- Validation feedback must be explicit and accessible (`aria-invalid` usage).
- Form drafts are saved to local storage and mirrored server-side on WordPress single pages.
- Localization quality is critical: German legal/tooltips text must remain consistent with source docs.
- Build scripts should be deterministic so generated assets stay reproducible.

## Recommended Skills for This Project
- `php-pro` (already available globally): WordPress/PHP quality and strictness guidance.
- `security-review` (already available globally): input handling, REST endpoint checks, auth/capability checks.
- Optional external skill if needed later: `wordpress/agent-skills@wp-plugin-development` (from skills.sh), with mandatory security scan before use.
