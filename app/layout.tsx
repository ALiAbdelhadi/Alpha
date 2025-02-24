
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { constructMetadata } from "@/lib/utils";
import "./globals.css";
import "./prism-theme.css";
export const metadata = constructMetadata();
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=GTM-NFF594DL'+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NFF594DL');` }} />
            </head>
            <body className="font-[-apple-system,BlinkMacSystemFont,system-ui,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif]  font-medium antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme
                >
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFF594DL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
