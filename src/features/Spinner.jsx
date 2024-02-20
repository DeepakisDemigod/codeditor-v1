import React from "react"
import {
  Triangle
} from "react-loader-spinner"

const Spinner = () => {
  return (
    <Triangle
      visible={true}
      height="50"
      width="60"
      color="#03C988"
      ariaLabel="triangle-loading"
      wrapperStyle={ {}}
      wrapperClass=""
      />
  )
}

export default Spinner