import React, { useCallback, useContext } from 'react';
import '../styles/styles.css';
import { ProductContext } from './ProductCard';

export interface Props {
	className?:string;
	style?: React.CSSProperties
}

export const ProductButtons = ({className}:Props) => {
	const { counter, increaseBy, maxCount } = useContext(ProductContext);


	const isMyReached = useCallback(
	  () => !!maxCount && counter === maxCount,
	  [counter, maxCount],
	)
	
	return (
		<div className={`buttonsContainer ${className}`}>
			<button className={`buttonMinus`} onClick={()=> increaseBy(-1)}> - </button>
			<div className={`countLabel`}>{counter}</div>
			<button className={`buttonAdd ${ isMyReached() && 'disabled'}`} onClick={()=> increaseBy(1)}>+</button>
		</div>
	)
}