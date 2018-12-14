import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { description, author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%'
              }}
            />
            <p>
              {description}{' '}
			  <Link style={{ boxShadow: 'none', color: '#4916DA' }} to={`https://twitter.com/${social.twitter}`}>
				Follow @metamn on Twitter
			  </Link>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar:file(absolutePath: { regex: "/avatar-blue.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
		description
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
