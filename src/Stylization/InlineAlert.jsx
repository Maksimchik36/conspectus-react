import getBgColor from './getBgColor';

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};


const InlineAlert = ({ variant, children }) => {
  return (
    <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
      {children}
    </p>
  );
};


export default InlineAlert;