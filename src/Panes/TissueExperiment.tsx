import ViewOptions from "./ViewOptions";

const TissueExperiment = () => {
  return (
    <div>
      <ViewOptions hasZoomPan={true} hasAbsoluteMode ={true}/>

      <section className="tissue-experiment">
        <p>this is tissue experiument</p>
      </section>
    </div>
  );
};
export default TissueExperiment;
