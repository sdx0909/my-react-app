import "../css/style.css"; // used in external-css
import styles from "../App.module.css"; // used in css-module

function CSSCompo() {
  // creating the style object for paragraph
  const pStyle = {
    color: "red",
    textAlign: "center",
    justifyContent: "center",
    border: "1px solid yellow",
  };

  return (
    <div>
      <ul>
        <li>
          <h3>Inline CSS</h3>
          {/* using spread-operator we add new styling */}
          <p style={{ ...pStyle, color: "green" }}>
            this is paragraph in style.
          </p>
          <p style={pStyle}>the wheather is rainy today..!</p>
        </li>
        <hr />
        <li>
          <h3>External CSS</h3>
          <p className="paragraph-wrapper">this is another paragraph.</p>
        </li>
        <hr />
        <li>
          <h3>CSS Module</h3>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>first</button>
            <button className={styles.second}>second</button>
            <button className={styles.third}>third</button>
          </div>
        </li>
        <hr />
        <li>
          <h3>Tailwind CSS</h3>
        </li>
      </ul>
    </div>
  );
}
export default CSSCompo;
