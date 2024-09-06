
export function FeatureItem ({itemIcon, itemText}) {

    return (
        <article className="FeatureItem">
            <img
            className="FeatureIcon" 
            src={itemIcon} />
            <h4> {itemText} </h4>
        </article>

    )
}