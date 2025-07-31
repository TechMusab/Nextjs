export const metadata={
  title:{
    default: 'My App',
    template: '%s | My App',
  }

}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <h1>ROOT</h1>
        {children}
      </body>
    </html>
  );
}
