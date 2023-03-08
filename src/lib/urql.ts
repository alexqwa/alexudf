import {
  createClient,
  ssrExchange,
  dedupExchange,
  fetchExchange,
  cacheExchange,
} from "urql"

const isServerSide = typeof window === "undefined"
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: "https://api-sa-east-1.hygraph.com/v2/clf01poht1nu301ume49iffw7/master",
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }
