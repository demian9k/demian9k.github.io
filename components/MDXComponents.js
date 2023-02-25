/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import * as NEXTJsComponents from './nextjs'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import * as BlogComponents from './blog'
import * as SQLAntipatternComponents from './blog/sql-antipattern'
import FontSizeStrongTitle from '@/components/blog/FontSizeStrongTitle'

export const MDXComponents = {
  NEXTJsComponents,
  Image: NEXTJsComponents.NextJSImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  BlogComponents: {
    ...BlogComponents,
    ...SQLAntipatternComponents,
    FontSizeStrongTitle,
  },
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
