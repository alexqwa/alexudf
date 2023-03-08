import { useEffect } from "react"

import { Header } from "../components/Global/Header"

export async function ProjectDetails() {
  const api = await fetch("https://api.github.com/users/alexqwa/repos")
  const repos = await api.json()

  return (
    <>
      <Header />
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </>
  )
}
