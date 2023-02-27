import Head from "next/head";
import { useEffect, useState } from "react";
import Top from "../components/pages/top";
import Phase1 from "../components/pages/phase1";
import Phase2 from "../components/pages/phase2";
import Phase3 from "../components/pages/phase3";
import Phase4 from "../components/pages/phase4";
import { TalkTheme } from "../components/utilities/talkTheme";

type Phase = "top" | "phase1" | "phase2" | "phase3" | "phase4";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("top");
  const [mission, setMission] = useState<string>("");
  const [talkTheme, setTalkTheme] = useState<TalkTheme>();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "auto"});
  }, [phase]);

  return (
    <>
      <Head>
        <title>TALK TIME -1on1をもっと楽しく、有意義に-</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {
          phase === "top" ?
            <Top
              onClickNext={() => setPhase("phase1")}
            />
          : phase === "phase1" ?
            <Phase1
              onClickNext={() => setPhase("phase2")}
              decidedMission={(mission: string) => {setMission(mission)}}
            />
          : phase === "phase2" ?
            <Phase2
              onClickNext={() => setPhase("phase3")}
              decidedTalkTheme={(talkTheme: TalkTheme) => {setTalkTheme(talkTheme)}}
            />
          : phase === "phase3" ?
            <Phase3
              mission={mission}
              talkTheme={talkTheme!}
              onClickNext={() => setPhase("phase4")}
            />
          : phase === "phase4" ?
            <Phase4
              mission={mission}
              onClickNext={() => window.location.reload()}
            />
          : <></>
        }
      </main>
    </>
  )
}
