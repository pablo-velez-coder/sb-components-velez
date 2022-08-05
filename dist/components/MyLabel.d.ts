/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
    * This is the text that goes into the label
    */
    label: string;
    /**
     * This is the size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * This is the color of the label
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * This makes the text in uppercase if true
     */
    allCaps: boolean;
    /**
 * Set a custom color to label text
 */
    customFontColor?: string;
}
export declare const MyLabel: ({ customFontColor, label, color, allCaps, size }: Props) => JSX.Element;
