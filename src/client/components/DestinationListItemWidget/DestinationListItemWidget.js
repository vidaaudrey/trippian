import React from 'react'

const styles = {
  backgroundImage: {
    backgroundImage: 'url(http://lorempixel.com/800/400/city/)'
  }
}

const DestinationListItemWidget = ({
  name = 'Sydney'
}) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 popular-destinations-item
    ">
            <a href="#" className="thumbnail text-center" style = {
            styles.backgroundImage
            }>
            <span>{name}</span>
            </a>
        </div>
  )
}

DestinationListItemWidget.displayName = 'DestinationListItemWidget'

export default DestinationListItemWidget
