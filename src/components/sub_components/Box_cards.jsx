import React from 'react'
import "./box-cards.css"

const Box_cards = (props) => {

    const image_url = props.value[0];
    const image_text = props.value[1];

    const img = {
        background : `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)),url(${image_url})`
    }
  return (
    <>
    <div className="service_card" style={img} width="100%">
        <b>{image_text}</b>
    </div>
    </>
  )
}

export default Box_cards