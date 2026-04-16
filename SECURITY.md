# SECURITY.md — NetFrame

```text
╔══════════════════════════════════════════════════════╗
║  SECURITY PROTOCOL — CYBEAR TECHNOLOGIES / NETFRAME  ║
║  Coordinated disclosure. No surprises. No exceptions.║
╚══════════════════════════════════════════════════════╝
```

---

## Supported Versions

Only the current release line receives security patches.

| Version | Status |
| --- | --- |
| `0.x` (latest) | ✅ Supported |
| < `0.x` | ❌ No patches |

Once `1.0` ships, a full supported-versions table will be maintained.

---

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Use one of these private channels:

1. **GitHub private vulnerability reporting** — preferred.
   On the repository page: `Security → Report a vulnerability`.
   GitHub routes this to maintainers privately, outside the public issue tracker.

2. **Email** — [snackpack94@gmail.com](mailto:snackpack94@gmail.com)
   Subject line: `[SECURITY] NetFrame — <brief description>`

You will receive acknowledgment within **48 hours**.

---

## Disclosure Policy

NetFrame follows **coordinated disclosure**:

1. Reporter submits privately.
2. Maintainers confirm receipt within 48 hours.
3. Maintainers verify, reproduce, and assess severity within **7 days**.
4. Fix developed and tested privately.
5. Patched release published.
6. CVE/advisory filed and full disclosure published.

**Standard embargo: 30 days from initial report.**
Critical supply-chain issues may be expedited. Low-severity issues may extend to 90 days by mutual agreement.

Reporters are credited in the release notes and advisory unless anonymity is requested.

---

## Threat Model — What to Report

NetFrame is a **pure CSS library** — no server code, no authentication, no data storage, no runtime JS beyond opt-in theme persistence. The attack surface is narrow but not zero:

| Category | In Scope |
| --- | --- |
| CSS injection / XSS via generated output | ✅ |
| Supply chain compromise (npm package, build pipeline) | ✅ |
| Dependency vulnerabilities with user-facing impact | ✅ |
| Malicious font or asset substitution in dist | ✅ |

| Category | Out of Scope |
| --- | --- |
| Vulnerabilities in the docs site content (no user data) | ❌ |
| Browser-specific rendering bugs with no security impact | ❌ |
| Theoretical attacks requiring physical device access | ❌ |
| Issues in transitive devDependencies with no dist impact | ❌ |

---

## Security Updates

Security patches are released as patch versions (`x.x.N`) and tagged `security` in the changelog.
Subscribe to [GitHub releases](https://github.com/KumaCommunity/NetFrame/releases) to be notified.

---

## Hall of Signal

Researchers who report valid vulnerabilities and follow coordinated disclosure
are credited here and in the advisory after patch release.

_No entries yet._

---

```text
// SIGNAL_END — CYBEAR_TECHNOLOGIES — GPL-3.0-only
```
