import styles from "./buttontag.module.css"

const ButtonTag = (props:any) => {
  return (
    <div className="mb-4 mt-6">
      <button
        className={styles.browse_tag}
        onClick={props.handleOnClick}
      >
        {props.buttonText}
        
      </button>
    </div>
  );
};

export default ButtonTag;
