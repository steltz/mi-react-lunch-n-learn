import styles from "../../styles/ProductDetail.module.css";

const ProductDescription = (props) => {
  return (
    <>
      <div className={styles.productDescriptionContainer}>
        <div className={styles.productNameContainer}>
          <div className={styles.productName}>{props.name}</div>
          <div>{props.price}</div>
        </div>
        <div className={styles.productDescription}>{props.description}</div>
      </div>
    </>
  );
};

export default ProductDescription;
