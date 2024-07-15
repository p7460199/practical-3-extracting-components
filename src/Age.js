import TitleLi from "./TitleLi.js";

export default function Age(props) {
    return (
        <TitleLi title="Age" isHidden={true}>
            {(props.value >= 18 ? '' : '🔞') + props.value}
        </TitleLi>
    );
}

