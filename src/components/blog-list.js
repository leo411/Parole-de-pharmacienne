import React from 'react'
import { Link } from 'gatsby'

const BlogList = props => (
    <div style={{ margin: '20px 0 40px' }}>
        {props.posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <div key={node.fields.slug}>
                    <h3
                        style={{
                            marginBottom: 0
                        }}
                    >
                        <Link
                            style={{ boxShadow: `none` }}
                            to={`blog${node.fields.slug}`}
                        >
                            {title}
                        </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt
                        }}
                    />
                </div>
            )
        })}
    </div>
)

export default BlogList
