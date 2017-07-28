import React from 'react'

import Comments from '../../components/issue_components/comments.js'
import Summary from '../../components/issue_components/summary.js'
import Meta from '../../components/issue_components/meta.js'
import Vote from '../../components/issue_components/vote.js'
import ButtonContribute from '../../components/issue_components/button_contribute.js'

const issueShow = () => (
  <div>

  <div id='issue_id'>
  <Comments />
  <Summary />
  <Meta />
  </div>

  <div id='feedback'>
  <Vote />
  </div>

  <div id='contribute'>
  <ButtonContribute />
  </div>

  </div>
)

export default issueShow;