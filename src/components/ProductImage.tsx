import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import '../styles/styles.css';

export interface Props {
	img?:string,
	className?:string,
	style?: React.CSSProperties
}

export const ProductImage = ({img, className, style}:Props) => {

	const {product} = useContext(ProductContext);
	let imgToShow:string;

	if(img){
		imgToShow= img;
	} else if (product.img) {
		imgToShow= product.img
	} else {
		imgToShow= 'https://picsum.photos/200/300';
	}

	return( <img style={style} className={`productImg ${className}`} src={imgToShow} alt="Coffe Mug" />)
}