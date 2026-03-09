# bActivate.eu Website

## Deployment

To deploy changes to production:

```bash
ssh -p 33 barrenma@cp08.nordicway.dk
~/web/manage-sites.sh update-all
```

SSH keys are configured. The `update-all` command takes some time to complete.

### manage-sites.sh Commands

- `update-all` - Deploy all sites (takes time, be patient)
- `status` - Check deployment status (note: currently doesn't check latest commits on feature branches properly - needs fix)

## Tech Stack

- Next.js
- TypeScript
- CSS Modules
