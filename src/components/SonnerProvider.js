'use client';

import { Toaster } from 'sonner';

export default function SonnerProvider() {
    return (
        <Toaster
            position='bottom-right'
            gap={6}
            toastOptions={{
                classNames: {
                    toast: 'custom-toast',
                },
            }}
        />
    );
}
