# 💽 CrateJL

![Vercel](https://vercelbadge.vercel.app/api/knightspore/cratejl)

A Crate Digging Tool for DJs to get recommendations from Spotify.

![App Preview](./public/cratejl.png)

## Project Structure

This is a Next 13 project, using the app router and hosted on Vercel. Currently I'm using Context to handle the recommendation state in the app, and talking to the API to make Spotify calls from the server.

## App Architecture & Component Overview

The app is structured around modular React components in the `src/components` folder, each responsible for a specific part of the user interface and interaction flow:

- **Recommendations & Seeds:** Components in `recommendations/` and its `seeds/` subfolder handle the form for entering seed tracks, artists, or genres. These use context providers to manage state and interact with the Spotify API for searching and selecting seeds.
- **Tracks & Features:** The `tracks/` folder contains components for displaying recommended tracks, their metadata, and audio features. Components like `Track`, `TrackArtists`, and `Features` render track details and allow users to interact (e.g., add artists as new seeds).
- **Selections:** The `selections/` folder manages the user's selected tracks, allowing them to save a playlist to their Spotify account. This triggers API calls to Spotify using helper functions that utilize credentials from environment variables.
- **Auras & Visuals:** Components in `auras/` visualize audio features (like energy, valence) as SVG graphics, providing a unique UI element for each track.
- **Loading & Auth:** The `loading/` folder provides skeletons and spinners for async states, while `auth/` handles user authentication with Spotify.
- **Audio Player:** The `audioplayer/` folder manages playback state and displays the currently playing track.

### Frontend Interactions
- User actions (searching, selecting, saving) are handled via React context and hooks, which update state and trigger API calls.
- Dropdowns, buttons, and forms are composed from reusable UI components (`Dropdown`, `Button`).
- Asynchronous actions (like searching or saving) show loading states using components from `loading/`.

### API & .env Integration
- API calls to Spotify (search, recommendations, playlist management) are made via server-side functions in `lib/api` and `lib/spotify`, which use credentials and tokens defined in `.env` (e.g., `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`).
- Authentication is managed via NextAuth, configured to use Spotify credentials from `.env`.
- The Vercel KV database is used to persist user search settings, with its connection details also set in `.env`.

This architecture ensures a responsive, interactive UI that communicates securely with Spotify and Vercel services, with clear separation of concerns between UI, state management, and API integration.

### Contributing

You'll need a number of auth keys to contribute to the project (as listed in `.env.example`). A [Spotify Developer Account](https://developer.spotify.com/) is required, as well as a [Vercel KV Database](https://vercel.com/docs/storage/vercel-kv).

## Changelog

- **2025-05-12:** Updated application color scheme for a more modern and readable look, utilizing a slate and sky palette.

## Roadmap / Ideas

- Add Tidal Support
- Better Library Interaction (ie. Manage playlists from within CrateJL)
- Re-do the in-app sample player
- Setup crates of DJ records to play (updated version of current app functionality)

## License

CrateJL is distributed under MIT license, which means you can use and modify it however you want. If you have any ideas, improvements, etc. - please feel free to make a pull request.
