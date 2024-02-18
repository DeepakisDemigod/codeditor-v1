import React from 'react'
import { ListMagnifyingGlass } from "@phosphor-icons/react"

const Search = () => {
  return (
    <div className="w-full flex items-start justify-between gap-1">
      <div className="bg-sec w-full px-4 py-3 rounded flex items-center justify-center gap-2">
        <ListMagnifyingGlass size={33} className="text-zinc-400"/>
        <input type="text" className="font-almarai px-4 py-1 text-base bg-pri rounded-md outline-none text-zinc-50 placeholder:text-zinc-500" placeholder="search projects"/>
      </div>
    </div>
  )
}

export default Search
