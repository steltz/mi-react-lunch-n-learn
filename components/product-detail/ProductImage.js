import styles from "../../styles/ProductDetail.module.css";

const ProductImage = (props) => {
    return (<img className={styles.productImage} {...props} />)
}

export default ProductImage;