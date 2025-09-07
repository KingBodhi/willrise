import Section from "@/components/Section";
import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/lib/site-config";
export default function Page(){
  return (
    <Section title="Video Evidence" subtitle="Demonstrations and comparisons.">
      <div className="grid gap-6 md:grid-cols-2">
        {site.videos.map(v => <VideoEmbed key={v.url} title={v.title} src={v.url} />)}
      </div>
    </Section>
  )
}
