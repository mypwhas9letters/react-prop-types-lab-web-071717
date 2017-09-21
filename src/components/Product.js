// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{


  render(){
    return(
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    if (props[propName] === undefined) {
     return new Error('The `weight` prop is required.');
   }
    if (isNaN(props[propName])){
      return new Error('wrong input')}
      const isValidWeight = props[propName] > 80 && props[propName] < 300;

      if (!isValidWeight) {
        return new Error('The `weight` prop should range between 80 and 300.');
      }
    }
}


export default Product
