import CountUp from "react-countup";
// @ts-expect-error
const CountUpComponent = CountUp.default ?? CountUp;

export default CountUpComponent;
