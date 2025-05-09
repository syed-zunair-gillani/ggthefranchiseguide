import { gql } from "@apollo/client";
import { client } from "@/lib/apollo-client";

export const homePageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
            query NewQuery {
        page(id: "1152", idType: DATABASE_ID) {
          title
          homePageMeta {
            hero {
              buttonLink
              caption
              subTitle
              title
              backgroundImge {
                node {
                  mediaItemUrl
                }
              }
              image {
                node {
                  mediaItemUrl
                }
              }
            }
            videos {
              videoUrl
            }
            leftAndRightSection {
              buttonLink
              caption
              title
              picture {
                node {
                  mediaItemUrl
                }
              }
            }
            meetGiuseppe {
              buttonLink
              caption
              title
              image {
                node {
                  mediaItemUrl
                }
              }
            }
            steps {
              title
              caption
              buttonLink
            }
            whatsIncluded {
              buttonLink
              title
              list {
                list
              }
            }
            workWithUs {
              buttonLink
              content
              backgroundImage {
                node {
                  mediaItemUrl
                }
              }
            }
            freeBook {
              title
              buttonLink
              image {
                node {
                  mediaItemUrl
                }
              }
              background {
                node {
                  mediaItemUrl
                }
              }
            }
            review {
              image {
                node {
                  mediaItemUrl
                }
              }
              review {
                name
                content
              }
            }
          }
        }
      }`,
    }),
  ]);

  return pageRes.data.page;
}

export const aboutPageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
                query NewQuery {
                    page(id: "1192", idType: DATABASE_ID) {
                        title
                        aboutMePageMeta {
                        about {
                            title
                            caption
                            image {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                        workWithUs {
                            buttonLink
                            caption
                            image {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            }
          `,
    }),
  ]);

  return pageRes.data.page;
}

export const pressKitPageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
              query NewQuery {
                page(id: "8172", idType: DATABASE_ID) {
                  title
                  pressKitPageMeta {
                    meta {
                      content
                      image {
                        node {
                          mediaItemUrl
                        }
                      }
                    }
                  }
                }
              }
        `,
    }),
  ]);

  return pageRes.data.page;
}

export const workshopPageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
              query NewQuery {
              page(id: "8064", idType: DATABASE_ID) {
                title
                workshopPageMeta {
                  successStoriesTitle
                  content
                  main {
                    content
                    title
                  }
                  successStories {
                    caption
                    designation
                    profileImage {
                      node {
                        mediaItemUrl
                      }
                    }
                    name
                  }
                }
              }
            }
        `,
    }),
  ]);

  return pageRes.data.page;
}

export const faqPageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
            query NewQuery {
            page(id: "8039", idType: DATABASE_ID) {
              title
              faqPageMeta {
                main {
                  caption
                  title
                  backgroundImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
                faq {
                  title
                  videoUrl
                }
              }
            }
          }
        `,
    }),
  ]);

  return pageRes.data.page;
}

export const bookPageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
            query NewQuery {
            page(id: "9468", idType: DATABASE_ID) {
              title
              bookPageMeta {
                bookNowLink
                cards {
                  caption
                  title
                  icon {
                    node {
                      mediaItemUrl
                    }
                  }
                }
                guidance {
                  buttonUrl
                  image {
                    node {
                      mediaItemUrl
                    }
                  }
                }
                main {
                  buttonLink
                  subTitle
                  title
                  videoTitle
                  videoUrl
                }
                videoUrl {
                  videoUrl
                }
              }
            }
          }
        `,
    }),
  ]);

  return pageRes.data.page;
}


export const howItsWorkPageQuery = async () => {
  const [pageRes] = await Promise.all([
    client.query({
      query: gql`
            query NewQuery {
              page(id: "7954", idType: DATABASE_ID) {
                title
                howItsWorksPageMeta {
                  howICanHelp
                  howICanHelpButtonLink
                  main {
                    buttonLinks
                    caption
                    title
                    image {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                  step1 {
                    buttonLink
                    content
                    title
                    sideImage {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                  step3 {
                    buttonLink
                    content
                    title
                    sideImage {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                  step4 {
                    subTitle
                    title
                    content
                    buttonLink
                    backgroundImage {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                  steps {
                    title
                    caption
                    buttonLink
                  }
                }
                content
              }
            }
        `,
    }),
  ]);

  return pageRes.data.page;
}