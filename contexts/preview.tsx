import { createContext, useContext } from 'react';

export interface PreviewInterface {
    isPreviewMode: boolean;
    setPreviewMode: (value: boolean) => void;
}

export const PreviewContext = createContext<PreviewInterface>(undefined);

export function usePreview() {
    return useContext<PreviewInterface>(PreviewContext);
}
