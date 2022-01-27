import React, { useState } from "react"
import { parseMarkdownProps } from "../hooks"

const useGrowteMarkdown = (defaultMarkdown?: string) => {
  const [markdown, setMarkdown] = useState()

  const parseMarkdown: React.FC<parseMarkdownProps> = (props) => {
    const { isHighlight } = props

    return (
      <></>
    )
  }

  const setData = () => {

  }

  return [parseMarkdown, setData]
}

export default useGrowteMarkdown