export type MovieAttributes = {
  Title: string
  Year: string
  Rated?: boolean
  Released?: boolean
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string[]
  Plot?: string
  Language?: string
  Country?: string
  Awards?: string
  Poster: string
  Metascore?: string
  imdbRating?: string
  imdbVotes?: string
  imdbID: string
  Type: string
}

function translateType(type: string) {
  switch (type) {
    case 'movie':
      return 'Filme'
    case 'series':
      return 'Seriado'
    case 'episode':
      return 'Episódio'
    case 'game':
      return 'Jogo'
    default:
      return type
  }
}

export default class Movie {
  constructor(readonly props: MovieAttributes) {
    try {
      const url = new URL(this.props.Poster)
      this.props.Poster = url.toString()
    } catch (_) {
      this.props.Poster =
        'https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c='
    }
    this.props.Type = translateType(this.props.Type)
  }

  toDomain(): Movie {
    return new Movie(this.props)
  }
}
