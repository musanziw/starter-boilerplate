import ProviderComponent from '@/components/layouts/provider-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/global.css';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ReactQueryClient } from '@/core/providers/ReactQueryClient';

export const metadata: Metadata = {
    title: {
        template: 'Admin Starter',
        default: 'Admin Template',
    },
};
const nunito = Nunito({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunito.variable}>
                <ReactQueryClient>
                    <ProviderComponent>{children}</ProviderComponent>
                </ReactQueryClient>
            </body>
        </html>
    );
}
