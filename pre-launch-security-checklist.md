# Pre-Launch Security Checklist

Steps to complete before publicly launching the site, so the donation flow can't be
hijacked by someone compromising an account rather than attacking the site's code.
Background: the PayPal form itself is safe (hardcoded destination, no user-controlled
input feeding into it) — the real risk is whoever can push changes to the site, control
the domain, or access the PayPal account it pays into.

## Hosting & deployment

- [ ] Deploy through GitHub (e.g. GitHub Pages) so the live site always matches this repo
- [ ] Enable "Enforce HTTPS" in the repo's Pages settings, so the site is never served
      over plain HTTP (prevents an on-path attacker from modifying the page in transit)
- [ ] If using a custom domain instead of the default `github.io` address, confirm the
      domain is correctly pointed at GitHub Pages and HTTPS is still enforced afterward

## Account security

- [ ] Enable two-factor authentication (2FA) on the GitHub account that owns this repo
- [ ] Enable 2FA on the PayPal account the donate form pays into
      (`gravel9698@gmail.com`) — this is separate from the website; a compromised
      PayPal account is a risk even if the site itself is untouched
- [ ] If using a custom domain, enable 2FA / registrar lock on the domain registrar
      account too — whoever controls the domain can redirect visitors without ever
      touching the GitHub repo

## Ongoing hygiene (not one-time, but worth revisiting)

- [ ] Keep the number of people with push access to the repo small, and make sure
      anyone with access also has 2FA on
- [ ] Keep your own machine reasonably clean (updated OS, no sketchy extensions) —
      2FA on GitHub doesn't help if your local session/credentials are already
      compromised
- [ ] Avoid adding third-party JavaScript (chat widgets, analytics, embedded SDKs)
      without vetting the source first — the site currently loads zero third-party JS,
      which is a big part of why its attack surface is small
- [ ] Periodically view-source the live donate page and confirm the `business` email
      and `action` URL in the PayPal form still match what's in this repo
