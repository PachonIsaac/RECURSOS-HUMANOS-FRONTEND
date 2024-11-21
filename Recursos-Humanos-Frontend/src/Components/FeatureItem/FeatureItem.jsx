
export function FeatureItem ({itemIcon, itemText}) {

    return (
        <article className="FeatureItem">
            <img
            className="FeatureIcon" 
            src={itemIcon} />
            <h3> {itemText} </h3>
        </article>

    )
}