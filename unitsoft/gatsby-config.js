module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Unitsoft",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/component/AppLayout.tsx"),
            },
        },
        {
            resolve: "gatsby-plugin-apollo",
            options: {
                uri: "http://localhost:3000/graphql",
            },
        },
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true, // defaults to false
                jsxPragma: "jsx", // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },

        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "298094585",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
