
# 🤝 Contributing to BribeBuster

We welcome contributions to help make corruption reporting safer, smarter, and more accessible. Whether you’re a developer, designer, data analyst, or activist — your skills matter here.

---

## 🛠️ Project Setup

```bash
# Fork & Clone
git clone https://github.com/YOUR_USERNAME/bribebuster.git
cd bribebuster

# Install Dependencies
npm ci

# Start Dev Server
npm run dev
```

---

## 📌 Ways You Can Help

### 🐛 Bug Reports
- Use GitHub Issues with `[Bug]` or `[Security]` tag.
- Describe:
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshot or logs (if available)

### 💡 Feature Suggestions
- Use `[Feature]` tag in Issues.
- Include problem statement and proposed solution or mockup.

### 🔐 Security Patches
- Submit via a private message or `[Security]` issue label.
- Follow OWASP top 10 guidelines.

### 🌐 Localization
- Add new translation files in `public/locales/[lang]/`.
- Update `i18n.ts` config to register your language.

### 📊 Data Improvements
- Contribute reports or structured datasets to:
  - `src/data/corruption_db.json`
  - `src/data/heatmap_points.json`

### 🧪 Test Coverage
- Add tests in `__tests__/`
- Use `Vitest` framework.

---

## 🧭 Code Guidelines

- TypeScript: use strict types & interfaces
- Folder structure: follow `Feature-first` architecture
- Commits: follow Conventional Commits (`feat:`, `fix:`, `refactor:`)

---

## 🧪 Pull Request Checklist

✅ Code is formatted (`npm run format`)  
✅ No critical lint warnings (`npm run lint`)  
✅ Unit tests pass (`npm run test`)  
✅ Only changes related to issue/feature are included  
✅ Description includes “Fixes #IssueNumber” if applicable

---

## 🧰 Helpful Commands

```bash
# Lint
npm run lint

# Format
npm run format

# Run Tests
npm run test
```

---

## 💻 Online Dev Environment

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/transparency-international/bribebuster)

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to a more transparent world! 🌍
