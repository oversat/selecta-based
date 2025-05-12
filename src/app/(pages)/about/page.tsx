import Button from "@/components/Button";
import ExampleTrack from "./ExampleTrack";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Welcome to CrateJL.",
  openGraph: {
    title: "About",
    description: "CrateJL is a private DJ app",
    images: ["https://cratejl.ciaran.co.za/api/og?title=About"],
  },
  twitter: {
    creator: "@parabyl",
    card: "summary_large_image",
    title: "About",
    description: "CrateJL is a private DJ app",
    images: ["https://cratejl.ciaran.co.za/api/og?title=Recommendations"],
  },
};

export default async function AboutPage() {
  return (
    <>
      <h1>What is CrateJL?</h1>
      <p>
        CrateJL is a private DJ app. It&apos;s home to over{" "}
        <a href="https://newsroom.spotify.com/company-info/" target="_blank">
          100 million songs
        </a>{" "}
        and if you&apos;re a regular user, you know just how good it is at
        finding tracks you love. Just the sort you&apos;d like to stumble across
        on your own. That&apos;s where CrateJL comes in. CrateJL is a way to
        place a special order with Spotify, and fine-tune the dials to find the
        tracks you didn&apos;t know you were looking for.
      </p>
      <ExampleTrack />
      <h2>How do I use it?</h2>
      <p>Using CrateJL is pretty simple.</p>
      <ol>
        <li>
          <p>
            Log in with Spotify. We require a few permissions so that you can
            save tracks you like that you find in your searches.
          </p>
        </li>
        <li>
          <p>
            Select seed tracks, artists or genres. You need at least one seed
            (of any type) to begin a search. You are allowed a combined total of
            5 seeds.
          </p>
        </li>
        <li>
          <p>
            Fine-tune details such as tempo, danceability, liveness and key.
          </p>
        </li>
        <li>
          <p>
            Click <Button type="button" text="💡 Recommend" disabled={false} />{" "}
            and enjoy?
          </p>
        </li>
      </ol>
      <h2>What else do I need to know?</h2>
      <p>
        You can use track results as seeds using the button below the track.
        Artists in track recommendations can be added as seeds by clicking on
        their names.
      </p>
      <p>
        To save tracks to a playlist, click{" "}
        <span className="font-medium">💾 Add Selection</span> beneath a track to
        add it to your selections (top right). The{" "}
        <Button type="button" text="💾 Save Playlist" disabled={false} /> button
        will save your selections to a playlist on your profile titled{" "}
        <span className="font-medium">{`CrateJL (${new Date().toLocaleString()})`}</span>
      </p>
      <p>
        We also have a <Link href="/privacy">Privacy Policy</Link> available so
        you can understand how your data is and isn&apos;t used in the app.
      </p>
      <hr className="my-12" />
    </>
  );
}
