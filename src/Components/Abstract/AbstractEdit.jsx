import React from 'react'
import {useParams } from 'react-router-dom'

const AbstractEdit = (props) => {
    const {id} = useParams()
    console.log(id)

    const abstracts = {
        1: {
          title: "Network with fellow senior data leaders 1",
          pending: true,
        },
        2: {
          title: "Network with fellow senior data leaders 2",
          pending: true,
        },
        3: {
          title: "Network with fellow senior data leaders 3",
          pending: true,
        },
        4: {
          title: "Network with fellow senior data leaders 4",
          pending: true,
        },
        5: {
          title: "Network with fellow senior data leaders 5",
          pending: true,
        },
      };

      const abstract = abstracts[id]

      const {title} = abstract
    return (
        <div>
            {title}
        </div>
    )
}

export default AbstractEdit
