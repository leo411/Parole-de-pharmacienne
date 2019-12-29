import React from 'react'
import { Link } from 'gatsby'

const BlogList = props =>
    props.posts
        .filter(
            ({ node }) =>
                !props.category ||
                node.frontmatter.categories === props.category
        )
        .filter(
            ({ node }) =>
                !props.subCategory ||
                node.frontmatter.subCategories === props.subCategory
        )
        .map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
                <div
                    class={`col-${props.columnWidth} p-4 d-flex flex-column shadow m-4`}
                    style={{ maxWidth: '55rem' }}
                >
                    {/* <img>
                {node.frontmatter.featuredImage}
                </img> */}
                    <strong class="d-inline-block mb-2 text-primary">
                        {node.frontmatter.subCategories}
                    </strong>
                    <h3 class="mb=0">
                        <Link
                            style={{ boxShadow: `none` }}
                            to={`blog${node.fields.slug}`}
                        >
                            {title}
                        </Link>
                    </h3>
                    <div class="mb-1 text-muted">
                        <small>{node.frontmatter.date}</small>
                    </div>
                    <p
                        class="card-text mb-auto"
                        dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt
                        }}
                    ></p>
                    <Link
                        style={{ boxShadow: `none` }}
                        to={`blog${node.fields.slug}`}
                    >
                        Continuer à lire
                    </Link>
                </div>
            )
        })

export default BlogList
