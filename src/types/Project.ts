export type Project = {
  title: string,
  slug: string,
  thumbnail: string | null,
  specialProject: boolean,
  github: string | null,
  websiteAddress: string | null,
  npmPackage: string | null,
  tags: string[],
  shortInfo: string,
  mainLibraries: [],
  astro: {
    header: object[],
    source: string,
    html: string
  },
  content: {
    header: string[],
    source: string,
    html: string
  },
  file: {
    href: string,
    origin: string,
    protocol: string,
    username: '',
    password: string,
    host: string,
    hostname: string,
    port: string
    pathname: string,
    search: string,
    searchParams: {},
    hash: string,
  },
  url: string
}

export default Project;