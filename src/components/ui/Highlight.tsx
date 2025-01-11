import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type HighlightType = {
  icon: IconProp,
  subtitle: string,
  para: string
}

const Highlight: React.FC<HighlightType> = (highlight) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        <FontAwesomeIcon icon={highlight.icon} />
      </div>
      <h3 className="highlight__subtitle">{highlight.subtitle}</h3>
      <p className="highlight__para">{highlight.para}</p>
    </div>
  )
}
export default Highlight
