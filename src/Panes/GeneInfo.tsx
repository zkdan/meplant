import { useSearchParams } from "react-router-dom";


const GeneInfo = () => {
  const [searchParams] = useSearchParams();

  return (
    <section className="pane">
      <p>gene info {searchParams}</p>
    </section>
  );
};
export default GeneInfo;

export const getGeneInfo = async ({ request }:any) => {
  // get DNA sequence
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("id")?.split("/")[0];
  await fetch(
    `https://bar.utoronto.ca/webservices/bar_araport/` +
      `get_sequence_by_identifier.php?locus=${searchTerm}`,
  )
    .then((res) => res.json())
    .then((res) => res[0]);
  return "getting gene info";
};
