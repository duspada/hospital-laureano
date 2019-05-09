const ifStyle = prop => (truly, falsy) => props => (props[prop] ? truly : falsy);

export default ifStyle;
