# Rendering Paradigms in Nextjs
- SSR
- CSR
- In React the files(html,css,js) are served on client side upon request of client. Upon every request on any route the same files are served, browser handles everything
- In nextjs the page we request  html come for this page and rsc comes for other pages

# Dynamic Vs Static rendering
- Next js generates static pages as html(it is also server side rendering) on build time but dynamic pages are served on the fly when user requests it.
- Static pages are generated as html files during build but dynamic pages are generated on the fly
- Both client side rendering and server side rendering happens in nextjs

# Static Site Generation
- It occurs at build time
- use generateStaticParams and return array with objects of dynamic ids, so static pages generated for those ids 
- But if content updates after sometime, it will not work.
- if we need updates , we can use incremental site regeneration
- If user visits page that is not statically generated yet , server generates that page and on another request it sends the same statically generated page
- add dynamicparams to false if you want no page will be generated on runtime. Only static pages that are generated during build time should be served

# Incremental Static Regeneration
- extended version of SSR
- add revallidate to tell after how much time page will update

# Dynamically rendering static pages
- we can dynamically render static pages by adding `export const dynamic='force-dynamic'`
- we can also use searchParams in props and then await in component to make component dynamic
- we can also use `await cookies()` to make component dynamic