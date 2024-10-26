import Markdown from "markdown-to-jsx";

const prompt = `
## Causes of World War I

Below this text, a slideshow will appear 🪄 

<Slideshow slides={[
  { "id": 1, "text": "The Rise of Nationalism: National pride and competitive fervor among nations fueled tension. Countries like Germany, France, and Britain were proud of their military power and colonial empires, creating a rivalry that would later ignite conflict." },
  { "id": 2, "text": "The Alliance System: European powers formed alliances for mutual protection. Two major blocs emerged—the Triple Entente (France, Russia, Britain) and the Triple Alliance (Germany, Austria-Hungary, Italy). This network of alliances meant that a conflict between two countries could easily escalate." },
  { "id": 3, "text": "Militarization and Arms Race: With militarization on the rise, nations were investing heavily in their armies and navies. Germany and Britain especially competed in a naval arms race, creating massive fleets, which fostered distrust and prepared them for war." },
  { "id": 4, "text": "Imperialism: European powers were vying for colonial dominance, leading to conflicts in Africa, Asia, and the Balkans. This imperial competition heightened tensions and fueled a sense of entitlement and rivalry among nations." },
  { "id": 5, "text": "The Assassination of ArchdukeFranz Ferdinand: On June 28, 1914, the assassination of Austria-Hungary’s heir in Sarajevo by a Bosnian Serb nationalist triggered a chain reaction. Austria-Hungary’s ultimatum to Serbia led to a series of declarations of war, dragging the allied powers into conflict." }
]} />
`;

export default function App() {
  return <LLMOutput>{prompt}</LLMOutput>;
}

const options = {
  overrides: {
    Slideshow: {
      component: Slideshow,
    },
  },
};

function LLMOutput({ children }) {
  return <Markdown options={options}>{children}</Markdown>;
}

function Slideshow({ slides }) {
  return (
    <div>
      <p>This is not a slideshow but you get the point</p>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(slides, null, 2)}
      </pre>
    </div>
  );
}
