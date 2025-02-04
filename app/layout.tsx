import { ThemeProvider } from "@/components/theme-provider";
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
            <body className="font-[-apple-system,BlinkMacSystemFont,system-ui,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif]  font-medium antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    enableColorScheme
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
