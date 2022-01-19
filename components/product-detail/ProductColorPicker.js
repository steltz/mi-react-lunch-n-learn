import styles from "../../styles/ProductDetail.module.css";

const ProductColorPicker = ({ colors, onColorPickerChange }) => {
    const colorPickerChanged = (e) => {
        const selectedColor = e.currentTarget.value;
        onColorPickerChange(selectedColor);
    }
    const inputs = colors.map(color => {
        return (
            <div className={styles.colorPickerInputGroup} key={color}>
                <label name={color}>{color}</label>
                <input type="radio" value={color} name="color-picker" onChange={colorPickerChanged} />
            </div>
        );
    });
    return (
        <fieldset className={styles.productColorPicker} id="color-picker">
            {inputs}
        </fieldset>
    )
};

export default ProductColorPicker