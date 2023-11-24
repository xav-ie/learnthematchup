# LearnTheMatchup

Your go-to source for game matchup insights.

## What We Offer Now

- Detailed matchup data for Super Smash Bros. Ultimate (SSBU), focusing on Peach (for now!).

## What's Next

- Broaden scope to cover matchups for more SSBU characters and related tech.
- Implement feature for community to contribute their own matchup strategies.
- Explore the possibility of integrating matchup information for other games.

*Note: LearnTheMatchup was born out of the need for a dedicated platform that consolidates game matchup information*

## Other Great Projects

- https://ultimateframedata.com -> necessary to know frame data and autocancels
- https://www.ssbwiki.com -> Smash wiki explaining everything Smash
- https://smashboards.com -> general smash discussions and a section dedicated to character discussions
- https://smashcords.com -> collection of Smash Discord servers


## Development (personal notes for me, not you)

Still actively working out best practices and such, but I am trying to use SOPS for secret management.

Basically, you want to prefix any command you run with `sops exec-env .env '{YOUR_COMMAND_HERE}`. 

This will inject important environment variables into the process, not exposing it on the file system.

For example, to run dev:

```sh
sops exec-env .env 'npm run dev'
```

If you are running a lot of commands locally, it is probably okay to just do `exec sops exec-env .env sh`, replacing your current shell with a juiced-up one.

I have yet to experiment with dir-env and optimizing this further. This works for now.

If you are not me reading this, just make your own env variables. 

1. You will need AUTH_SECRET (https://authjs.dev/reference/core/errors/#missingsecret)
2. That's it! So far...


One problem I currently have is that the server currently works with the encrypted .env :/

I am not really sure how to get around that just yet. Perhaps add check in node to see if .env is encrypted and throw error if so? (but that won't work when you inject env variables, which won't put the decreypted file on disk... ??? so what to do here?)
