import { useState } from 'react'
import styles from "../../styles/ProductDetail.module.css";
import NavBar from "../../components/product-detail/NavBar"
import ProductDescription from "../../components/product-detail/ProductDescription";
import ProductImage from "../../components/product-detail/ProductImage";
import ProductColorPicker from "../../components/product-detail/ProductColorPicker";

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const product = {
        name: 'Stretch Oxford Shirt',
        description: 'The look of a classic Oxford with add stretch for comfort.',
        imgURL: 'https://bonobos-prod-s3.imgix.net/products/234448/original/WOVEN-CASUAL-SHIRT_OXFORD-WOVEN-SHIRT_BSH01759SG1348_1.jpg?1642232733=&auto=format&fit=clip&cs=srgb&w=375&q=75',
        price: '$89',
        colors: ['red', 'green', 'yellow', 'blue'],
    }
    const colorPickerHandler = (color) => {
        setSelectedColor(color);
    }
    const placeOrder = () => {
        const { name, price } = product;
        console.log('Order Placed:')
        console.table({ name, price, color: selectedColor })
    }
    return (<>
        <NavBar />
        <ProductDescription
            name={product.name}
            description={product.description}
            price={product.price}
        />
        <ProductImage src={product.imgURL} height="450"/>
        <ProductColorPicker colors={product.colors} onColorPickerChange={colorPickerHandler} />
        <div className={styles.orderBtnContainer}>
            <button onClick={placeOrder} disabled={!selectedColor}>Place Order</button>
        </div>
    </>)
}

export default ProductDetail;