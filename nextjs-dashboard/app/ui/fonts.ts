// Import Inter font from next/font/google module
import {Inter} from 'next/font/google';
// Lusitania secondary font
import{Lusitana} from 'next/font/google';

// Specify subset of font to load
// https://fonts.google.com/knowledge/glossary/subsetting
// Appears to select a subset of characters (i.e. latin
// characters) instead of loading characters from other 
// writing systems?
export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana(
    {subsets: ['latin'], 
    weight: ["400", "700"]});