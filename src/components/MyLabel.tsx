import './mylabel.css'

interface Props {
   /**
   * This is the text that goes into the label
   */
    label: string;
   /**
    * This is the size of the label
    */    
    size: 'normal'| 'h1'|'h2'|'h3';
   /**
    * This is the color of the label
    */    
    color: 'primary'| 'secondary'|'tertiary';
   /**
    * This makes the text in uppercase if true
    */    
    allCaps: boolean;
       /**
    * Set a custom color to label text
    */ 
    customFontColor?: string;
}

export const MyLabel = ({
    customFontColor,
    label='No Label' ,color='primary',allCaps=false, size = 'normal'}: Props) => {
  return (
    <span
    style={{ color: customFontColor}}
    className={`label ${size} text-${color}`}
    >{allCaps ? label.toUpperCase(): label}</span>
  )
}
