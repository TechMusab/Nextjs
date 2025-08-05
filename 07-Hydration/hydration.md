# Hydration
- When using SSR (Server-Side Rendering) or SSG (Static Site Generation), Next.js first renders the HTML on the server and sends it to the browser. The browser then "hydrates" this static HTML by attaching React event listeners and state, turning it into a fully interactive React app.

So in simple terms:

Hydration = Converting static HTML (rendered on the server) into an interactive React app (on the client).

# Hydration Error
- A hydration error happens when there’s a mismatch between:
What was rendered on the server, and
What React tries to render on the client during hydration.
Next.js will warn you if the DOM content generated on the server differs from what the client-side React code expects during hydration.