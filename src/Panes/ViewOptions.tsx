import { IViewOptions } from "../interfaces";

const ViewOptions = ({ hasAbsoluteMode, hasZoomPan }: IViewOptions) => {
  const buttonClasses = `text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus:outline-none m-px dark:focus:ring-emerald-800 m-3`;

  return (
    <div className="view-options">
      {hasZoomPan && (
        <button type="button" className={buttonClasses}>
          Reset zoom/pan
        </button>
      )}
      {hasAbsoluteMode && (
        <button type="button" className={buttonClasses}>
          toggle absolute mode
        </button>
      )}
      <button className={buttonClasses}>Get citations</button>
      <button className={buttonClasses}>Download data</button>
    </div>
  );
};
export default ViewOptions;
