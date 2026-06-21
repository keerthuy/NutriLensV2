# Branch Strategy

We use a standard Git Flow-inspired branching strategy.

## Branch Structure

- `main`
  - Production-ready, protected branch.
  - No direct commits allowed.
  - Only merged via reviewed pull requests.
- `develop`
  - Integration branch.
  - All feature branches merge here first.
  - Must pass review before merge to `main`.
- `feature/[name]`
  - Individual feature development.
  - E.g., `feature/splash-screen`, `feature/auth-login`
- `hotfix/[name]`
  - Critical bug fixes on `main`.

## Workflow for Feature Branches

1. Make sure you are up to date on `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes logically:
   - `feat: add splash screen layout`
   - `fix: correct AR overlay positioning`
   - `refactor: simplify rule engine logic`
   - `docs: update setup guide`
   - `chore: update dependencies`
4. Push to remote:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request against `develop`.

## Pull Request Rules
- Minimum 1 reviewer approval required before merge.
- PR must include: description, screens affected, testing done, and screenshots (if UI change).
- Never commit directly to `main` or `develop`.
