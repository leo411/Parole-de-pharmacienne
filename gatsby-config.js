module.exports = {
    siteMetadata: {
        // edit below
        title: `Parole de pharmacienne`,
        author: `Corinne Attali`,
        description: `Conseils de pharmacienne`,
        siteUrl: `https://gracious-goldwasser-117cda.netlify.com`,
        social: {
            twitter: ``
        }
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-feed-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    {
                        resolve: `gatsby-remark-vscode`
                    },
                    {
                        resolve: `gatsby-remark-copy-linked-files`
                    },
                    {
                        resolve: `gatsby-remark-smartypants`
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gatsby Starter Blog`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // edit below
                icon: `content/assets/logopharmacie.png`
            }
        }
    ]
}
