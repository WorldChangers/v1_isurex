import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const data = [
  'Errors using inadequate data are much less than those using no data at all',
  'IRIS can help you calculate RISK SCORE of your clients',
  'With IRIS, claims are not going to be delayed again',
  'Fraudulent Claims are thing of the past with IRIS',
  'You can have data without information, IRIS gives information',
  'IRIS means INSURANCE RISK INFORMATION SYSTEM',
  'Get smarter from your claims at underwriting',
  'Connect the dots to uncover links between persons and objects',
  'Automatically Access Risk with Predictive Analysis',
  'Profile customers for more individual and dynamic pricing'
]

const Loading = () => (
  <div>
    <Segment>
      <Dimmer active style={{height: 500, width: 1050}}>
        <Loader  size='big'>
          <p><strong><em>{data[Math.floor(Math.random() * 9) + 0  ]}</em></strong></p>
          <p style={{fontSize:10, color:'mint'}}><em>Your Friends from IRIS</em></p>
        </Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default Loading
