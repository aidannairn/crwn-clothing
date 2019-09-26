import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'
import './collection.styles.scss'

const Collection = ({ collection }) => {
  return (
    <div className="catergory">
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
