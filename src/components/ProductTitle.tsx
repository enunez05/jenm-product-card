import React, { useContext } from "react"
import { ProductContext } from "./ProductCard";
import '../styles/styles.css';

export interface Props {
	title?:string,
	className?:string
	activeClassName?:string,
	style?: React.CSSProperties
}

export const ProductTitle = ({title, className, activeClassName}:Props) => {
	const {product} = useContext(ProductContext)
	return (
		<span className={`productDescription ${className} ${activeClassName}`}>
			{title ? title : product.title}
		</span>
	)
}