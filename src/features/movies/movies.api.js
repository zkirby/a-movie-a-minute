import api from "../shared/api/requests"

// basic API cache to avoid needing any
// state management libraries
const _cache = {}
async function withCache(cb, key) {
  if (!(key in _cache)) {
    _cache[key] = await cb()
  }

  return _cache[key]
}

export function getAllMovies() {
  return withCache(api.get("/api/get-movies").json, "allMovies")
}
