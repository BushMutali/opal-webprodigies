import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme";
import ReactQueryProvider from "@/react-query";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster} from "sonner";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opal",
  description: "Share AI powered videos with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className} bg-[#171717] antialiased`}>
          <ThemeProvider
            disableTransitionOnChange
            defaultTheme="dark"
            attribute="class"
            enableSystem={true}
            value={{
              dark: "dark",
            }}
          >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
                <Toaster />
                <SonnerToaster />
              </ReactQueryProvider>
            </ReduxProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
