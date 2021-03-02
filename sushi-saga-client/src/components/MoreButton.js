import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.updateSushiCount()}>
            More sushi!
          </button>
}

export default MoreButton